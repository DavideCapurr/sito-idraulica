import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ORIGIN = process.env.HYDROTECH_ASSET_ORIGIN || 'https://hydrotech-service-site.vercel.app';
const assets = [
  'favicon.ico',
  'assets/brand/logo-hydrotech.svg',
  ...['hero-installation','sanitari','riscaldamento','irrigazione','ricerca-perdite','ristrutturazione-bagni','manutenzione']
    .flatMap(name => ['jpg','webp','avif'].map(ext => `assets/images/${name}.${ext}`)),
];

for (const rel of assets) {
  const target = join('public', rel);
  await mkdir(dirname(target), { recursive: true });
  try {
    const res = await fetch(`${ORIGIN}/${rel}`);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const data = new Uint8Array(await res.arrayBuffer());
    await writeFile(target, data);
    console.log(`recovered ${rel}`);
  } catch (error) {
    console.warn(`asset recovery skipped for ${rel}: ${error.message}`);
  }
}
