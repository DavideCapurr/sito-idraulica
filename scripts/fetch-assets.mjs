import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const configuredOrigin = process.env.HYDROTECH_ASSET_ORIGIN?.replace(/\/$/, '');
const origins = [
  configuredOrigin,
  'https://hydrotech-service-site.vercel.app',
  'https://www.hydrotechservice.ch',
].filter((origin, index, all) => origin && all.indexOf(origin) === index);

const assets = [
  'favicon.ico',
  'assets/brand/logo-hydrotech.svg',
  ...['hero-installation','sanitari','riscaldamento','irrigazione','ricerca-perdite','ristrutturazione-bagni','manutenzione']
    .flatMap(name => ['jpg','webp','avif'].map(ext => `assets/images/${name}.${ext}`)),
];

const failures = [];

for (const rel of assets) {
  const target = join('public', rel);
  await mkdir(dirname(target), { recursive: true });
  let recovered = false;
  let lastError;

  for (const origin of origins) {
    try {
      const res = await fetch(`${origin}/${rel}`);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const data = new Uint8Array(await res.arrayBuffer());
      if (data.byteLength === 0) throw new Error('empty response');
      await writeFile(target, data);
      console.log(`recovered ${rel} from ${origin}`);
      recovered = true;
      break;
    } catch (error) {
      lastError = error;
    }
  }

  if (!recovered) {
    failures.push(`${rel}: ${lastError instanceof Error ? lastError.message : String(lastError)}`);
  }
}

if (failures.length) {
  throw new Error(`Asset bootstrap failed:\n${failures.join('\n')}`);
}
