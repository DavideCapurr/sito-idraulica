import { services } from '../data/site';
const staticUrls=['/','/de/','/gallery/','/contatti/','/protezione-dei-dati/','/de/galerie/','/de/kontakt/','/de/datenschutz/'];
const urls=[...staticUrls,...services.flatMap(s=>[`/${s.itSlug}/`,`/de/${s.deSlug}/`])];
export function GET(){const body=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(path=>`  <url><loc>https://www.hydrotechservice.ch${path}</loc><changefreq>weekly</changefreq></url>`).join('\n')}\n</urlset>`;return new Response(body,{headers:{'Content-Type':'application/xml; charset=utf-8'}});}
