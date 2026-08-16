import { business, services } from '../data/site';

const pairs = [
  { it:'/', de:'/de/' },
  ...services.map(service=>({it:`/${service.itSlug}/`,de:`/de/${service.deSlug}/`})),
  { it:'/gallery/', de:'/de/galerie/' },
  { it:'/contatti/', de:'/de/kontakt/' },
  { it:'/protezione-dei-dati/', de:'/de/datenschutz/' },
];

function absolute(path:string){
  return `${business.canonical}${path}`;
}

function entry(path:string,it:string,de:string){
  return [
    '  <url>',
    `    <loc>${absolute(path)}</loc>`,
    '    <changefreq>weekly</changefreq>',
    `    <xhtml:link rel="alternate" hreflang="it" href="${absolute(it)}" />`,
    `    <xhtml:link rel="alternate" hreflang="de" href="${absolute(de)}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(it)}" />`,
    '  </url>',
  ].join('\n');
}

export function GET(){
  const urls=pairs.flatMap(pair=>[
    entry(pair.it,pair.it,pair.de),
    entry(pair.de,pair.it,pair.de),
  ]).join('\n');
  const body=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>`;
  return new Response(body,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
