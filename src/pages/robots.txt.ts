export function GET(){return new Response(`User-agent: *\nAllow: /\nSitemap: https://www.hydrotechservice.ch/sitemap.xml\n`,{headers:{'Content-Type':'text/plain; charset=utf-8'}});}
