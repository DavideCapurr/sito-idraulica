type VercelRequest={method?:string;body?:Record<string,string>|string;headers:Record<string,string|string[]|undefined>};
type VercelResponse={status(code:number):VercelResponse;setHeader(name:string,value:string):void;send(body:string):void;json(body:unknown):void};

const allowedServices = new Set([
  'Impianti sanitari',
  'Impianti di riscaldamento',
  'Impianti di irrigazione',
  'Ricerca perdite',
  'Ristrutturazione bagni',
  'Riparazioni riscaldamento e sanitari',
  'Sanitärinstallationen',
  'Heizungsanlagen',
  'Bewässerungsanlagen',
  'Leckortung',
  'Badsanierung',
  'Reparaturen Heizung und Sanitär',
]);

function clean(value:unknown,max=2000){
  return String(value??'').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,'').trim().slice(0,max);
}

function cleanLine(value:unknown,max:number){
  return clean(value,max).replace(/[\r\n]+/g,' ');
}

function header(req:VercelRequest,name:string){
  const value=req.headers[name]??req.headers[name.toLowerCase()];
  return Array.isArray(value)?value[0]:value;
}

function finishSuccess(req:VercelRequest,res:VercelResponse,language:'it'|'de'){
  const accept=String(header(req,'accept')||'');
  if(accept.includes('application/json')) return res.status(200).json({ok:true});
  res.setHeader('Location',language==='de'?'/de/danke/':'/grazie/');
  return res.status(303).send('');
}

export default async function handler(req:VercelRequest,res:VercelResponse){
  if(req.method!=='POST'){
    res.setHeader('Allow','POST');
    return res.status(405).send('Method not allowed');
  }

  const contentLength=Number(header(req,'content-length')||0);
  if(Number.isFinite(contentLength)&&contentLength>25_000) return res.status(413).send('Request too large');

  const body=typeof req.body==='string'?Object.fromEntries(new URLSearchParams(req.body)):(req.body||{});
  const language: 'it'|'de'=cleanLine(body.language,2)==='de'?'de':'it';
  if(clean(body.website,200)) return finishSuccess(req,res,language);

  const name=cleanLine(body.name,120);
  const phone=cleanLine(body.phone,80);
  const email=cleanLine(body.email,160);
  const service=cleanLine(body.service,160);
  const message=clean(body.message,3000);
  const source=cleanLine(body.source,120);

  if(!name||!phone||!service||!message){
    return res.status(400).send(language==='de'?'Pflichtfelder fehlen.':'Compila i campi obbligatori.');
  }
  if(name.length<2||phone.length<6||!allowedServices.has(service)){
    return res.status(400).send(language==='de'?'Bitte prüfen Sie die eingegebenen Daten.':'Controlla i dati inseriti.');
  }
  if(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    return res.status(400).send(language==='de'?'Bitte geben Sie eine gültige E-Mail-Adresse ein.':'Inserisci un indirizzo email valido.');
  }

  const apiKey=process.env.RESEND_API_KEY;
  const to=process.env.QUOTE_TO_EMAIL||'info@hydrotechservice.ch';
  const from=process.env.QUOTE_FROM_EMAIL;
  if(!apiKey||!from){
    console.error('Missing RESEND_API_KEY or QUOTE_FROM_EMAIL');
    return res.status(503).send(language==='de'?'Das Formular ist noch nicht konfiguriert. Bitte rufen Sie uns an oder schreiben Sie eine E-Mail.':'Il modulo non è ancora configurato. Chiamaci o scrivici via email.');
  }

  const text=[
    `Nome/Name: ${name}`,
    `Telefono/Telefon: ${phone}`,
    `Email: ${email||'-'}`,
    `Servizio/Leistung: ${service}`,
    `Source: ${source||'-'}`,
    '',
    message,
  ].join('\n');

  const response=await fetch('https://api.resend.com/emails',{
    method:'POST',
    headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},
    body:JSON.stringify({
      from,
      to:[to],
      reply_to:email||undefined,
      subject:`Richiesta Hydrotech — ${service}`,
      text,
    }),
  });

  if(!response.ok){
    console.error('Resend error',response.status,await response.text());
    return res.status(502).send(language==='de'?'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.':'Non è stato possibile inviare la richiesta. Riprova più tardi.');
  }

  return finishSuccess(req,res,language);
}
