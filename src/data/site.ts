export const business = {
  name: 'Hydrotech Service Sagl',
  phone: '+41 91 225 00 01',
  phoneHref: 'tel:+41912250001',
  urgentPhone: '+41 79 476 79 23',
  urgentPhoneHref: 'tel:+41794767923',
  email: 'info@hydrotechservice.ch',
  address: 'Via Vecchio Forno 2, CH-6604 Solduno',
  legalAddress: 'Via Vecchio Forno 2, CH-6604 Solduno',
  officeAddress: 'Via Vallemaggia 54, 6604 Solduno',
  officeStreet: 'Via Vallemaggia 54',
  canonical: 'https://www.hydrotechservice.ch',
};

export type Lang = 'it' | 'de';

export type Service = {
  id: string;
  itSlug: string;
  deSlug: string;
  image: string;
  it: { name:string; title:string; description:string; detailTitle:string; detail:string; checks:string[]; proofs:string[] };
  de: { name:string; title:string; description:string; detailTitle:string; detail:string; checks:string[]; proofs:string[] };
};

export const services: Service[] = [
  {
    id:'sanitari', itSlug:'impianto-sanitario', deSlug:'sanitaerinstallationen', image:'sanitari',
    it:{
      name:'Impianti sanitari',
      title:'Impianti sanitari in Ticino',
      description:'Impianti sanitari per abitazioni e condomini, dalla nuova costruzione alla riparazione puntuale.',
      detailTitle:'Impianti sanitari affidabili e realizzati a regola d’arte',
      detail:'Realizziamo impianti sanitari per abitazioni e condomini, dalla nuova costruzione alla riparazione puntuale. Garantiamo soluzioni affidabili, materiali di qualità e un’esecuzione a regola d’arte.',
      checks:['Nuove installazioni per abitazioni e condomini','Riparazioni puntuali su impianti esistenti','Materiali di qualità e soluzioni affidabili','Manutenzione e controlli degli impianti'],
      proofs:['Installazione','Riparazione','Manutenzione']
    },
    de:{
      name:'Sanitärinstallationen',
      title:'Sanitärinstallationen im Tessin',
      description:'Sanitärinstallationen für Wohnungen und Mehrfamilienhäuser, vom Neubau bis zur gezielten Reparatur.',
      detailTitle:'Zuverlässige Sanitärinstallationen in fachgerechter Ausführung',
      detail:'Wir realisieren Sanitärinstallationen für Wohnungen und Mehrfamilienhäuser, vom Neubau bis zur gezielten Reparatur. Wir setzen auf zuverlässige Lösungen, hochwertige Materialien und eine fachgerechte Ausführung.',
      checks:['Neuinstallationen für Wohnungen und Mehrfamilienhäuser','Gezielte Reparaturen an bestehenden Anlagen','Hochwertige Materialien und zuverlässige Lösungen','Wartung und Kontrolle der Anlagen'],
      proofs:['Installation','Reparatur','Wartung']
    }
  },
  {
    id:'riscaldamento', itSlug:'riscaldamento', deSlug:'heizung', image:'riscaldamento',
    it:{
      name:'Impianti di riscaldamento',
      title:'Impianti di riscaldamento in Ticino',
      description:'Impianti di riscaldamento moderni ed efficienti, dalle termopompe agli impianti tradizionali.',
      detailTitle:'Comfort, efficienza e affidabilità nel tempo',
      detail:'Progettiamo, installiamo e manuteniamo impianti di riscaldamento moderni ed efficienti, dalle termopompe agli impianti tradizionali. Il nostro obiettivo è garantire comfort, risparmio energetico e affidabilità nel tempo.',
      checks:['Progettazione di nuovi impianti di riscaldamento','Installazione di termopompe e sistemi tradizionali','Manutenzione e assistenza sugli impianti','Ottimizzazione di comfort e consumi energetici'],
      proofs:['Termopompe','Efficienza','Assistenza']
    },
    de:{
      name:'Heizungsanlagen',
      title:'Heizungsanlagen im Tessin',
      description:'Moderne und effiziente Heizungsanlagen, von Wärmepumpen bis zu traditionellen Systemen.',
      detailTitle:'Komfort, Effizienz und langfristige Zuverlässigkeit',
      detail:'Wir planen, installieren und warten moderne und effiziente Heizungsanlagen, von Wärmepumpen bis zu traditionellen Systemen. Unser Ziel sind Komfort, Energieeinsparung und langfristige Zuverlässigkeit.',
      checks:['Planung neuer Heizungsanlagen','Installation von Wärmepumpen und traditionellen Systemen','Wartung und Betreuung der Anlagen','Optimierung von Komfort und Energieverbrauch'],
      proofs:['Wärmepumpen','Effizienz','Service']
    }
  },
  {
    id:'irrigazione', itSlug:'irrigazione', deSlug:'bewaesserung', image:'irrigazione',
    it:{
      name:'Impianti di irrigazione',
      title:'Impianti di irrigazione in Ticino',
      description:'Impianti di irrigazione per giardini, aree verdi e terrazze, automatici e personalizzati.',
      detailTitle:'Irrigazione efficiente e personalizzata',
      detail:'Progettiamo, installiamo e manuteniamo impianti di irrigazione per giardini, aree verdi e terrazze. Soluzioni automatiche e personalizzate che permettono una gestione efficiente dell’acqua e una cura ottimale del verde.',
      checks:['Progettazione per giardini, terrazze e aree verdi','Installazione di sistemi automatici personalizzati','Manutenzione di impianti esistenti','Gestione efficiente dell’acqua'],
      proofs:['Progettazione','Automazione','Manutenzione']
    },
    de:{
      name:'Bewässerungsanlagen',
      title:'Bewässerungsanlagen im Tessin',
      description:'Bewässerungsanlagen für Gärten, Grünflächen und Terrassen, automatisch und individuell geplant.',
      detailTitle:'Effiziente und individuelle Bewässerung',
      detail:'Wir planen, installieren und warten Bewässerungsanlagen für Gärten, Grünflächen und Terrassen. Automatische und individuelle Lösungen ermöglichen einen effizienten Umgang mit Wasser und eine optimale Pflege der Grünflächen.',
      checks:['Planung für Gärten, Terrassen und Grünflächen','Installation individueller automatischer Systeme','Wartung bestehender Anlagen','Effizienter Umgang mit Wasser'],
      proofs:['Planung','Automatisierung','Wartung']
    }
  },
  {
    id:'perdite', itSlug:'ricerca-perdite', deSlug:'leckortung', image:'ricerca-perdite',
    it:{
      name:'Ricerca perdite',
      title:'Ricerca perdite d’acqua in Ticino',
      description:'Localizziamo perdite d’acqua e anomalie negli impianti con strumenti professionali e interventi mirati.',
      detailTitle:'Localizzazione precisa, meno demolizioni inutili',
      detail:'Grazie a strumenti professionali individuiamo perdite d’acqua e anomalie negli impianti con interventi mirati, limitando demolizioni inutili e riducendo i costi di riparazione.',
      checks:['Ricerca di perdite e anomalie negli impianti','Localizzazione mirata della zona interessata','Interventi pensati per limitare demolizioni inutili','Diagnosi utile a ridurre tempi e costi di riparazione'],
      proofs:['Localizzazione','Precisione','Intervento']
    },
    de:{
      name:'Leckortung',
      title:'Leckortung im Tessin',
      description:'Wir lokalisieren Wasserverluste und Störungen mit professionellen Instrumenten und gezielten Eingriffen.',
      detailTitle:'Präzise Lokalisierung, weniger unnötige Öffnungen',
      detail:'Mit professionellen Instrumenten lokalisieren wir Wasserverluste und Störungen in Anlagen gezielt. Dadurch lassen sich unnötige Abbrucharbeiten begrenzen und Reparaturkosten reduzieren.',
      checks:['Suche nach Leckagen und Störungen','Gezielte Lokalisierung des betroffenen Bereichs','Eingriffe mit möglichst wenig unnötigen Öffnungen','Diagnose zur Reduktion von Reparaturzeit und -kosten'],
      proofs:['Lokalisierung','Präzision','Eingriff']
    }
  },
  {
    id:'bagni', itSlug:'ristrutturazione-bagni', deSlug:'badsanierung', image:'ristrutturazione-bagni',
    it:{
      name:'Ristrutturazione bagni',
      title:'Ristrutturazione bagni in Ticino',
      description:'Ristrutturazione completa del bagno, dalla consulenza iniziale alla realizzazione finale.',
      detailTitle:'Un unico percorso dalla consulenza al risultato finale',
      detail:'Seguiamo la ristrutturazione completa del bagno, dalla consulenza iniziale alla realizzazione finale. Collaboriamo con artigiani di fiducia per offrire un servizio completo e garantire un risultato curato in ogni dettaglio.',
      checks:['Consulenza iniziale e definizione dell’intervento','Rifacimento e modifica degli impianti','Coordinamento con artigiani di fiducia','Realizzazione finale curata nei dettagli'],
      proofs:['Consulenza','Ristrutturazione','Coordinamento']
    },
    de:{
      name:'Badsanierung',
      title:'Badsanierung im Tessin',
      description:'Komplette Badsanierung von der ersten Beratung bis zur fertigen Ausführung.',
      detailTitle:'Von der Beratung bis zum fertigen Bad aus einer Hand koordiniert',
      detail:'Wir begleiten die komplette Badsanierung von der ersten Beratung bis zur fertigen Ausführung. Mit bewährten Handwerkspartnern bieten wir einen vollständigen Service und achten auf ein sorgfältiges Ergebnis bis ins Detail.',
      checks:['Erstberatung und Definition der Arbeiten','Erneuerung und Anpassung der Installationen','Koordination mit bewährten Handwerkspartnern','Sorgfältige Ausführung bis ins Detail'],
      proofs:['Beratung','Sanierung','Koordination']
    }
  },
  {
    id:'manutenzione', itSlug:'riparazioni-manutenzione', deSlug:'reparaturen-wartung', image:'manutenzione',
    it:{
      name:'Riparazioni riscaldamento e sanitari',
      title:'Riparazioni riscaldamento e sanitari in Ticino',
      description:'Interventi rapidi per guasti, perdite, problemi di pressione e malfunzionamenti degli impianti.',
      detailTitle:'Interventi rapidi per ripristinare il corretto funzionamento',
      detail:'Interveniamo rapidamente per risolvere guasti, perdite, problemi di pressione e malfunzionamenti degli impianti sanitari e di riscaldamento. Un servizio competente e tempestivo per ripristinare il corretto funzionamento degli impianti.',
      checks:['Riparazioni su impianti sanitari e di riscaldamento','Interventi su perdite e problemi di pressione','Diagnosi di guasti e malfunzionamenti','Ripristino rapido del corretto funzionamento'],
      proofs:['Pronto intervento','Diagnosi','Ripristino']
    },
    de:{
      name:'Reparaturen Heizung und Sanitär',
      title:'Reparaturen für Heizung und Sanitär im Tessin',
      description:'Schnelle Hilfe bei Störungen, Leckagen, Druckproblemen und Fehlfunktionen von Sanitär- und Heizungsanlagen.',
      detailTitle:'Schnelle Hilfe zur Wiederherstellung der Anlage',
      detail:'Wir greifen schnell ein, um Störungen, Leckagen, Druckprobleme und Fehlfunktionen von Sanitär- und Heizungsanlagen zu beheben. Ein kompetenter und zeitnaher Service stellt die korrekte Funktion der Anlagen wieder her.',
      checks:['Reparaturen an Sanitär- und Heizungsanlagen','Einsätze bei Leckagen und Druckproblemen','Diagnose von Störungen und Fehlfunktionen','Schnelle Wiederherstellung der korrekten Funktion'],
      proofs:['Schnelle Hilfe','Diagnose','Wiederherstellung']
    }
  }
];

export const copy = {
  it:{
    services:'Servizi',
    gallery:'Gallery',
    contacts:'Contatti',
    call:'Chiama ora',
    quote:'Richiedi informazioni',
    quoteTitle:'Richiedi informazioni',
    homeTitle:'Idraulica, riscaldamento e irrigazione in Ticino',
    homeLead:'Interventi rapidi, impianti efficienti e preventivi chiari per case, stabili e giardini.',
    areas:'Ambiti di intervento',
    areasLead:'Un unico referente locale per progettazione, installazione, riparazione e manutenzione.',
    experience:'Esperienza locale, servizio concreto',
    process:'Come lavoriamo',
    processSteps:[['Sopralluogo','Ascoltiamo l’esigenza e verifichiamo lo stato dell’impianto.'],['Preventivo','Prepariamo una proposta chiara, senza sorprese.'],['Intervento','Eseguiamo il lavoro con materiali affidabili e tempi concordati.'],['Assistenza','Restiamo disponibili per manutenzione e controlli successivi.']]
  },
  de:{
    services:'Leistungen',
    gallery:'Galerie',
    contacts:'Kontakt',
    call:'Jetzt anrufen',
    quote:'Informationen anfragen',
    quoteTitle:'Informationen anfragen',
    homeTitle:'Sanitär, Heizung und Bewässerung im Tessin',
    homeLead:'Schnelle Einsätze, effiziente Anlagen und klare Offerten für Häuser, Gebäude und Gärten.',
    areas:'Unsere Bereiche',
    areasLead:'Ein lokaler Ansprechpartner für Planung, Installation, Reparatur und Wartung.',
    experience:'Lokale Erfahrung, klare Arbeit',
    process:'So arbeiten wir',
    processSteps:[['Besichtigung','Wir klären den Bedarf und prüfen die bestehende Anlage.'],['Offerte','Sie erhalten einen klaren Vorschlag ohne Überraschungen.'],['Ausführung','Wir arbeiten mit zuverlässigen Materialien und vereinbarten Terminen.'],['Betreuung','Wir bleiben für Wartung und Kontrollen erreichbar.']]
  }
};
