const fs = require('fs');

const enVerbs = JSON.parse(fs.readFileSync('en_verbs_reference.json', 'utf8'));

const translations = {
  "be": { word: "essere", def: "Esistere; avere una qualità o uno stato.", ex: ["Sono stanco.", "Lei è un medico.", "Siamo in ritardo."], sub: "essere pronto / essere stanco / essere a casa", group: "essere", class: "irregular", aspect: "stative", v3: "stato" },
  "have": { word: "avere", def: "Possedere qualcosa; provare qualcosa.", ex: ["Ho un lavoro.", "Lui ha una macchina.", "Lei ha mal di testa."], sub: "avere un lavoro / pranzare / avere un problema", group: "avere", class: "irregular", aspect: "stative", v3: "avuto" },
  "feel": { word: "sentire", def: "Provare un'emozione o una sensazione fisica.", ex: ["Mi sento stanco.", "Lei si sente stressata.", "Lui si sente meglio."], sub: "sentirsi stanco / sentirsi meglio / sentirsi bene", group: "ire", class: "regular", aspect: "both", v3: "sentito" },
  "give": { word: "dare", def: "Consegnare o trasferire qualcosa a qualcuno.", ex: ["Lui mi dà un sacco di lavoro.", "Lei dà consigli."], sub: "dare consigli / dare soldi / dare un regalo", group: "are", class: "irregular", aspect: "action", v3: "dato" },
  "take": { word: "prendere", def: "Tenere e spostare qualcosa; usare o consumare.", ex: ["Prendo l'autobus per andare al lavoro.", "Lei prende le medicine."], sub: "prendere l'autobus / prendere una medicina / fare una pausa", group: "ere", class: "irregular", aspect: "action", v3: "preso" },
  "get": { word: "ottenere", def: "Ricevere, ottenere o diventare.", ex: ["Ottengo un buon stipendio.", "Lui si stanca velocemente.", "Lei ottiene una promozione."], sub: "ottenere un lavoro / stancarsi / migliorare", group: "ere", class: "irregular", aspect: "action", v3: "ottenuto" },
  "put": { word: "mettere", def: "Mettere qualcosa in una posizione.", ex: ["Metti la borsa qui.", "Lei mette i soldi in banca."], sub: "mettere / riporre / mettere giù il telefono", group: "ere", class: "irregular", aspect: "action", v3: "messo" },
  "make": { word: "fare", def: "Creare o produrre qualcosa; causare.", ex: ["Faccio il caffè al mattino.", "Lei prende decisioni velocemente."], sub: "fare il caffè / prendere una decisione / fare un errore", group: "are", class: "irregular", aspect: "action", v3: "fatto" },
  "do": { word: "fare", def: "Compiere un'azione o un'attività.", ex: ["Faccio il mio lavoro ogni giorno.", "Lei fa la spesa."], sub: "fare il lavoro / fare la spesa / fare esercizio", group: "are", class: "irregular", aspect: "action", v3: "fatto" },
  "use": { word: "usare", def: "Impiegare qualcosa per uno scopo.", ex: ["Uso il mio telefono per tutto.", "Lei usa i mezzi pubblici."], sub: "usare un telefono / usare i mezzi pubblici / usare un computer", group: "are", class: "regular", aspect: "action", v3: "usato" },
  "open": { word: "aprire", def: "Fare in modo che qualcosa non sia chiuso; o iniziare.", ex: ["Lui apre l'ufficio alle otto.", "Lei apre un conto bancario."], sub: "aprire una porta / aprire un conto / aprire un negozio", group: "ire", class: "irregular", aspect: "action", v3: "aperto" },
  "close": { word: "chiudere", def: "Fare in modo che qualcosa non sia aperto; o finire.", ex: ["L'ufficio chiude alle sei.", "Lei chiude il portatile."], sub: "chiudere una porta / chiudere alle sei / chiudere un conto", group: "ere", class: "irregular", aspect: "action", v3: "chiuso" },
  "start": { word: "iniziare", def: "Iniziare a fare qualcosa.", ex: ["Inizio a lavorare alle otto e mezza.", "Lei inizia un nuovo lavoro."], sub: "iniziare il lavoro / iniziare una riunione / iniziare un nuovo lavoro", group: "are", class: "regular", aspect: "action", v3: "iniziato" },
  "finish": { word: "finire", def: "Completare qualcosa; giungere al termine.", ex: ["Lui finisce il lavoro alle cinque.", "Lei finisce il rapporto."], sub: "finire il lavoro / finire un progetto / finire presto", group: "ire", class: "regular", aspect: "action", v3: "finito" },
  "help": { word: "aiutare", def: "Aiutare qualcuno.", ex: ["Aiuta i suoi colleghi.", "Puoi aiutarmi?"], sub: "aiutare qualcuno / aiutare con / chiedere aiuto", group: "are", class: "regular", aspect: "action", v3: "aiutato" },
  "try": { word: "provare", def: "Fare un sforzo; tentare qualcosa.", ex: ["Provo sempre a fare del mio meglio al lavoro.", "Prova il caffè qui."], sub: "provare a fare / provare sodo / provare qualcosa di nuovo", group: "are", class: "regular", aspect: "action", v3: "provato" },
  "show": { word: "mostrare", def: "Lasciare che qualcuno veda qualcosa; spiegare.", ex: ["Lei mi mostra la mappa.", "Lui mostra il suo lavoro."], sub: "mostrare a qualcuno / mostrare come / mostrare un documento", group: "are", class: "regular", aspect: "action", v3: "mostrato" },
  "find": { word: "trovare", def: "Scoprire o localizzare qualcosa.", ex: ["Trovo il lavoro interessante.", "Lei ha trovato un nuovo lavoro."], sub: "trovare un lavoro / scoprire / trovare difficile", group: "are", class: "regular", aspect: "action", v3: "trovato" },
  "keep": { word: "tenere", def: "Continuare ad avere o fare qualcosa.", ex: ["Tieni la ricevuta.", "Lei tiene il telefono acceso tutto il giorno."], sub: "continuare / stare zitti / tenere un registro", group: "ere", class: "irregular", aspect: "both", v3: "tenuto" },
  "lose": { word: "perdere", def: "Non avere più qualcosa; non riuscire a vincere.", ex: ["Ho perso le chiavi.", "Lei ha perso il lavoro.", "Lui non perde mai."], sub: "perdere un lavoro / perdere soldi / perdere peso", group: "ere", class: "irregular", aspect: "action", v3: "perso" },
  "cut": { word: "tagliare", def: "Dividere con qualcosa di affilato; ridurre.", ex: ["Lei taglia la sua pausa pranzo.", "Riduce i costi."], sub: "tagliare i costi / tagliare le spese / tagliare a metà", group: "are", class: "regular", aspect: "action", v3: "tagliato" },
  "turn": { word: "girare", def: "Muoversi in una direzione; cambiare stato.", ex: ["Gira a sinistra all'ufficio.", "Lei spegne la luce."], sub: "accendere / spegnere / girare a sinistra / girare a destra", group: "are", class: "regular", aspect: "action", v3: "girato" },
  "bring": { word: "portare", def: "Trasportare qualcosa in un posto.", ex: ["Porta il tuo documento all'intervista.", "Lui porta il pranzo."], sub: "portare qualcuno / portare cibo / portare un documento", group: "are", class: "regular", aspect: "action", v3: "portato" },
  "say": { word: "dire", def: "Esprimere qualcosa a parole.", ex: ["Lei dice ciao ogni mattina.", "Lui dice che è difficile."], sub: "dire ciao / dire di sì / dire di no / dire qualcosa", group: "ire", class: "irregular", aspect: "action", v3: "detto" },
  "tell": { word: "dire", def: "Dare informazioni a qualcuno.", ex: ["Dice la verità.", "Lei mi racconta della sua giornata."], sub: "dire la verità / dire a qualcuno / raccontare una storia", group: "ire", class: "irregular", aspect: "action", v3: "detto" },
  "ask": { word: "chiedere", def: "Porre una domanda a qualcuno; richiedere qualcosa.", ex: ["Lei fa molte domande.", "Chiedo consiglio al mio capo."], sub: "fare una domanda / chiedere aiuto / chiedere di", group: "ere", class: "irregular", aspect: "action", v3: "chiesto" },
  "speak": { word: "parlare", def: "Comunicare verbalmente; conoscere una lingua.", ex: ["Lui parla tre lingue.", "Lei parla con il suo manager."], sub: "parlare con qualcuno / parlare una lingua / parlare chiaramente", group: "are", class: "regular", aspect: "action", v3: "parlato" },
  "talk": { word: "parlare", def: "Avere una conversazione.", ex: ["Parliamo di lavoro ogni lunedì.", "Lei parla molto."], sub: "parlare con qualcuno / parlare di / parlare apertamente", group: "are", class: "regular", aspect: "action", v3: "parlato" },
  "call": { word: "chiamare", def: "Telefonare a qualcuno.", ex: ["Chiamo i miei clienti ogni mattina.", "Lei convoca una riunione."], sub: "chiamare qualcuno / richiamare / convocare una riunione", group: "are", class: "regular", aspect: "action", v3: "chiamato" },
  "write": { word: "scrivere", def: "Tracciare segni su carta o su uno schermo.", ex: ["Scrivo email tutto il giorno.", "Lei scrive un rapporto ogni venerdì."], sub: "scrivere un'email / scrivere un rapporto / scrivere una lettera", group: "ere", class: "irregular", aspect: "action", v3: "scritto" },
  "read": { word: "leggere", def: "Guardare e capire parole scritte.", ex: ["Lei legge le notizie ogni mattina.", "Lui legge i contratti."], sub: "leggere un libro / leggere le notizie / leggere un contratto", group: "ere", class: "irregular", aspect: "action", v3: "letto" },
  "listen": { word: "ascoltare", def: "Prestare attenzione ai suoni o al parlato.", ex: ["Ascolto podcast al lavoro.", "Lei ascolta attentamente."], sub: "ascoltare musica / ascoltare attentamente / ascoltare un podcast", group: "are", class: "regular", aspect: "action", v3: "ascoltato" },
  "answer": { word: "rispondere", def: "Rispondere a una domanda o a una comunicazione.", ex: ["Risponde a tutte le email velocemente.", "Lei ha risposto al telefono."], sub: "rispondere a una domanda / rispondere al telefono", group: "ere", class: "regular", aspect: "action", v3: "risposto" },
  "repeat": { word: "ripetere", def: "Dire o fare qualcosa di nuovo.", ex: ["Per favore ripeti quello.", "Ha ripetuto l'istruzione due volte."], sub: "ripetere quello / ripetersi / ripetere un ordine", group: "ere", class: "regular", aspect: "action", v3: "ripetuto" },
  "go": { word: "andare", def: "Spostarsi da un luogo a un altro.", ex: ["Vado al lavoro in treno.", "Lei va all'estero ogni anno."], sub: "andare al lavoro / andare a casa / uscire / andare a fare shopping", group: "are", class: "irregular", aspect: "action", v3: "andato" },
  "come": { word: "venire", def: "Spostarsi verso un luogo o una persona.", ex: ["Lui viene in ufficio alle nove.", "Lei viene a casa tardi."], sub: "venire a casa / tornare / venire al lavoro / venire qui", group: "ire", class: "irregular", aspect: "action", v3: "venuto" },
  "walk": { word: "camminare", def: "Muoversi a piedi a passo normale.", ex: ["Lui cammina verso il lavoro ogni giorno.", "Lei cammina durante la pausa pranzo."], sub: "camminare verso il lavoro / camminare verso casa / camminare lentamente", group: "are", class: "regular", aspect: "action", v3: "camminato" },
  "drive": { word: "guidare", def: "Azionare un veicolo.", ex: ["Lei guida verso il lavoro.", "Lui guida un'auto aziendale."], sub: "guidare verso il lavoro / guidare la macchina / guidare verso casa", group: "are", class: "regular", aspect: "action", v3: "guidato" },
  "fly": { word: "volare", def: "Viaggiare in aereo.", ex: ["Lei vola a Parigi per riunioni.", "Lui odia volare."], sub: "volare verso una città / volare in business class / volare in economy", group: "are", class: "regular", aspect: "action", v3: "volato" },
  "arrive": { word: "arrivare", def: "Raggiungere una destinazione.", ex: ["Lui arriva in ufficio alle nove.", "Il treno arriva in ritardo."], sub: "arrivare al lavoro / arrivare tardi / arrivare in orario", group: "are", class: "regular", aspect: "action", v3: "arrivato" },
  "leave": { word: "partire", def: "Allontanarsi da un luogo.", ex: ["Parto da casa alle otto.", "Lei ha lasciato l'azienda l'anno scorso."], sub: "lasciare casa / lasciare il lavoro / partire presto / partire tardi", group: "ire", class: "irregular", aspect: "action", v3: "partito" },
  "move": { word: "muovere", def: "Cambiare posizione o luogo di vita.", ex: ["Si sono trasferiti in un nuovo appartamento.", "Lei si sposta in un team diverso."], sub: "traslocare / trasferirsi in una città / andare avanti", group: "ere", class: "irregular", aspect: "action", v3: "mosso" },
  "return": { word: "tornare", def: "Venire o tornare in un luogo.", ex: ["Lui torna da un viaggio venerdì.", "Lei ha ricambiato la chiamata."], sub: "tornare a casa / tornare al lavoro / ricambiare una chiamata", group: "are", class: "regular", aspect: "action", v3: "tornato" },
  "travel": { word: "viaggiare", def: "Andare da un posto all'altro, spesso lontano.", ex: ["Lei viaggia per lavoro una volta al mese.", "Lui ama viaggiare."], sub: "viaggiare per lavoro / viaggiare all'estero / viaggiare in treno", group: "are", class: "regular", aspect: "action", v3: "viaggiato" },
  "eat": { word: "mangiare", def: "Mettere cibo in bocca e consumarlo.", ex: ["Mangiamo il pranzo all'una.", "Lei mangia alla sua scrivania."], sub: "fare colazione / pranzare / cenare / mangiare fuori", group: "are", class: "regular", aspect: "action", v3: "mangiato" },
  "drink": { word: "bere", def: "Ingoiare del liquido.", ex: ["Lei beve caffè ogni mattina.", "Bevo acqua al lavoro."], sub: "bere caffè / bere tè / bere acqua / bere alcolici", group: "ere", class: "irregular", aspect: "action", v3: "bevuto" },
  "sleep": { word: "dormire", def: "Riposare in uno stato di incoscienza.", ex: ["Lui dorme sette ore a notte.", "Lei dorme male."], sub: "dormire bene / dormire male / dormire otto ore", group: "ire", class: "regular", aspect: "action", v3: "dormito" },
  "cook": { word: "cucinare", def: "Preparare il cibo usando il calore.", ex: ["Lei cucina la cena ogni sera.", "Lui cucina per la squadra."], sub: "cucinare la cena / cucinare un pasto / cucinare a casa", group: "are", class: "regular", aspect: "action", v3: "cucinato" },
  "clean": { word: "pulire", def: "Rimuovere lo sporco da qualcosa.", ex: ["Pulisco l'appartamento il sabato.", "Lui pulisce la sua scrivania ogni giorno."], sub: "pulire l'appartamento / pulire tutto / pulire la cucina", group: "ire", class: "regular", aspect: "action", v3: "pulito" },
  "wear": { word: "indossare", def: "Avere vestiti o accessori sul corpo.", ex: ["Lei indossa un completo per il lavoro.", "Lui indossa gli occhiali."], sub: "indossare un completo / indossare gli occhiali / indossare vestiti casual", group: "are", class: "regular", aspect: "action", v3: "indossato" },
  "wash": { word: "lavare", def: "Pulire qualcosa con l'acqua.", ex: ["Lava la sua macchina ogni domenica.", "Lavati le mani."], sub: "lavare i piatti / lavare i vestiti / lavarsi le mani", group: "are", class: "regular", aspect: "action", v3: "lavato" },
  "buy": { word: "comprare", def: "Ottenere qualcosa pagando denaro.", ex: ["Lei compra la spesa online.", "Lui vuole comprare un appartamento."], sub: "comprare cibo / comprare un biglietto / comprare online", group: "are", class: "regular", aspect: "action", v3: "comprato" },
  "pay": { word: "pagare", def: "Dare denaro in cambio di qualcosa.", ex: ["Pago l'affitto mensilmente.", "Lei paga con carta."], sub: "pagare una bolletta / pagare l'affitto / pagare con carta", group: "are", class: "regular", aspect: "action", v3: "pagato" },
  "spend": { word: "spendere", def: "Usare denaro o tempo.", ex: ["Lui spende troppo per il cibo da asporto.", "Lei spende tempo per il pendolarismo."], sub: "spendere soldi / spendere tempo / spendere per l'affitto", group: "ere", class: "irregular", aspect: "action", v3: "speso" },
  "save": { word: "risparmiare", def: "Tenere i soldi invece di spenderli.", ex: ["Risparmia cento euro al mese.", "Salva il tuo lavoro."], sub: "risparmiare soldi / risparmiare per una casa / risparmiare tempo", group: "are", class: "regular", aspect: "action", v3: "risparmiato" },
  "work": { word: "lavorare", def: "Svolgere compiti per guadagnare denaro.", ex: ["Lavora da casa tre giorni a settimana.", "Lei lavora sodo."], sub: "lavorare da casa / lavorare a tempo pieno / lavorare sodo", group: "are", class: "regular", aspect: "action", v3: "lavorato" },
  "live": { word: "vivere", def: "Avere la propria casa in un luogo; essere vivo.", ex: ["Lei vive in un appartamento vicino al centro.", "Viviamo insieme."], sub: "vivere in un appartamento / vivere da soli / vivere con qualcuno", group: "ere", class: "irregular", aspect: "stative", v3: "vissuto" },
  "think": { word: "pensare", def: "Usare la mente; avere un'opinione.", ex: ["Penso che sia una buona idea.", "Lei pensa di dimettersi."], sub: "pensare a / pensare di / pensare attentamente", group: "are", class: "regular", aspect: "both", v3: "pensato" },
  "know": { word: "sapere", def: "Avere informazioni o avere familiarità con.", ex: ["Conosco il suo nome.", "Lei sa come negoziare."], sub: "conoscere qualcuno / sapere la risposta / sapere come", group: "ere", class: "irregular", aspect: "stative", v3: "saputo" },
  "want": { word: "volere", def: "Desiderare o augurarsi qualcosa.", ex: ["Voglio un caffè.", "Lei vuole una promozione.", "Lui vuole andare in pensione."], sub: "volere un lavoro / volere fare / volere di più", group: "ere", class: "irregular", aspect: "stative", v3: "voluto" },
  "need": { word: "avere bisogno di", def: "Richiedere qualcosa.", ex: ["Ho bisogno di una pausa.", "Lei ha bisogno di più tempo.", "Lui ha bisogno di aiuto."], sub: "bisogno di aiuto / bisogno di tempo / bisogno di soldi", group: "locution", class: "irregular", aspect: "stative", v3: "avuto bisogno" },
  "like": { word: "piacere", def: "Trovare qualcosa di piacevole.", ex: ["Mi piace il mio lavoro.", "A lei piace cucinare a casa.", "A lui piace il caffè."], sub: "mi piace il lavoro / mi piace viaggiare / mi piace l'idea", group: "ere", class: "irregular", aspect: "stative", v3: "piaciuto" },
  "love": { word: "amare", def: "Avere un forte affetto per; godere grandemente.", ex: ["Lei ama il suo lavoro.", "Lui ama viaggiare per lavoro."], sub: "amare qualcuno / amare fare qualcosa / amare un posto", group: "are", class: "regular", aspect: "stative", v3: "amato" },
  "hate": { word: "odiare", def: "Fortemente non gradire.", ex: ["Odia fare il pendolare in autobus.", "Lei odia le lunghe riunioni."], sub: "odiare fare / odiare qualcuno / odiare le riunioni", group: "are", class: "regular", aspect: "stative", v3: "odiato" },
  "hope": { word: "sperare", def: "Desiderare che succeda qualcosa.", ex: ["Spero di ottenere una promozione quest'anno.", "Lei spera in una paga migliore."], sub: "sperare / sperare di fare / spero di sì", group: "are", class: "regular", aspect: "stative", v3: "sperato" },
  "remember": { word: "ricordare", def: "Avere un ricordo di; non dimenticare.", ex: ["Per favore ricorda la scadenza.", "Lei ricorda ogni cliente."], sub: "ricordare di fare / ricordare un nome / ricordare chiaramente", group: "are", class: "regular", aspect: "stative", v3: "ricordato" },
  "forget": { word: "dimenticare", def: "Mancare di ricordare.", ex: ["Non dimenticare la riunione.", "Dimentica sempre le password."], sub: "dimenticare un nome / dimenticare di fare / dimenticare del tutto", group: "are", class: "regular", aspect: "stative", v3: "dimenticato" },
  "understand": { word: "capire", def: "Afferrare il significato di qualcosa.", ex: ["Capisco il contratto.", "Lei capisce il francese."], sub: "capire un problema / capire qualcuno / capire chiaramente", group: "ire", class: "irregular", aspect: "stative", v3: "capito" },
  "decide": { word: "decidere", def: "Fare una scelta.", ex: ["Ha deciso di cambiare carriera.", "Lui decide velocemente."], sub: "decidere di fare / decidere su / prendere una decisione", group: "ere", class: "irregular", aspect: "stative", v3: "deciso" },
  "enjoy": { word: "godere", def: "Trarre piacere da qualcosa.", ex: ["Gode di lavorare da casa.", "Lei gode del suo nuovo ruolo."], sub: "godere di fare / godersi un pasto / godersi il lavoro", group: "ere", class: "regular", aspect: "stative", v3: "goduto" },
  "see": { word: "vedere", def: "Notare o percepire con gli occhi.", ex: ["Vedo il mio dottore domani.", "Lei vede il problema."], sub: "vedere un dottore / vedere gli amici / vedere il problema", group: "ere", class: "irregular", aspect: "both", v3: "visto" },
  "hear": { word: "udire", def: "Percepire il suono attraverso le orecchie.", ex: ["Odo l'allarme ogni mattina.", "Puoi udirmi?"], sub: "udire notizie / udire qualcuno / udire un suono", group: "ire", class: "irregular", aspect: "both", v3: "udito" },
  "wake up": { word: "svegliarsi", def: "Smettere di dormire e aprire gli occhi.", ex: ["Mi sveglio alle sette.", "A che ora ti svegli?"], sub: "svegliarsi presto, svegliarsi alle 7", group: "are", class: "regular", aspect: "action", v3: "svegliato" },
  "watch": { word: "guardare", def: "Guardare qualcosa per un periodo di tempo.", ex: ["Guardo la TV la sera.", "Guardano gli uccelli."], sub: "guardare la TV, guardare un film", group: "are", class: "regular", aspect: "action", v3: "guardato" },
  "look": { word: "guardare", def: "Dirigere gli occhi verso qualcosa.", ex: ["Guarda questa foto.", "Lui sta cercando le sue chiavi."], sub: "guardare", group: "are", class: "regular", aspect: "both", v3: "guardato" },
  "play": { word: "giocare", def: "Fare qualcosa per divertimento o in un gioco.", ex: ["Gioco a calcio con i miei amici.", "Le piace giocare ai videogiochi."], sub: "giocare", group: "are", class: "regular", aspect: "action", v3: "giocato" },
  "run": { word: "correre", def: "Muoversi molto velocemente sulle gambe.", ex: ["Corro nel parco.", "Lui corre per prendere l'autobus."], sub: "correre", group: "ere", class: "irregular", aspect: "action", v3: "corso" },
  "sit": { word: "sedersi", def: "Riposare il peso sul sedere piuttosto che sui piedi.", ex: ["Per favore siediti.", "Siedo su una sedia."], sub: "sedersi", group: "ere", class: "irregular", aspect: "action", v3: "seduto" },
  "stand": { word: "stare in piedi", def: "Essere sui piedi in posizione eretta.", ex: ["Per favore alzati.", "Lei sta in piedi vicino alla porta."], sub: "stare in piedi", group: "are", class: "irregular", aspect: "action", v3: "stato in piedi" },
  "meet": { word: "incontrare", def: "Vedere e parlare con qualcuno per la prima volta.", ex: ["Piacere di conoscerti.", "Ci incontriamo ogni venerdì."], sub: "incontrare", group: "are", class: "regular", aspect: "action", v3: "incontrato" },
  "learn": { word: "imparare", def: "Ottenere conoscenza o un'abilità.", ex: ["Voglio imparare l'italiano.", "I bambini imparano in fretta."], sub: "imparare", group: "are", class: "regular", aspect: "action", v3: "imparato" },
  "change": { word: "cambiare", def: "Rendere qualcosa diverso.", ex: ["Voglio cambiare i miei vestiti.", "Il tempo cambia velocemente."], sub: "cambiare", group: "are", class: "regular", aspect: "action", v3: "cambiato" },
  "stop": { word: "fermare", def: "Finire di fare qualcosa o non muoversi più.", ex: ["Ferma la macchina.", "Per favore smetti di parlare."], sub: "fermare", group: "are", class: "regular", aspect: "action", v3: "fermato" },
  "add": { word: "aggiungere", def: "Mettere le cose insieme per formare un gruppo più grande.", ex: ["Aggiungi dello zucchero al tè.", "Quanto fa cinque più cinque?"], sub: "aggiungere", group: "ere", class: "irregular", aspect: "action", v3: "aggiunto" },
  "win": { word: "vincere", def: "Essere il migliore in un gioco o in una competizione.", ex: ["Vogliamo vincere la partita."], sub: "vincere", group: "ere", class: "irregular", aspect: "action", v3: "vinto" },
  "wait": { word: "aspettare", def: "Stare in un posto finché non succede qualcosa.", ex: ["Aspetta l'autobus qui.", "Sto aspettando il mio amico."], sub: "aspettare", group: "are", class: "regular", aspect: "action", v3: "aspettato" },
  "die": { word: "morire", def: "Smettere di vivere.", ex: ["Le piante muoiono senza acqua."], sub: "morire", group: "ire", class: "irregular", aspect: "action", v3: "morto" },
  "send": { word: "inviare", def: "Far sì che qualcosa vada in un posto.", ex: ["Invio un'email ogni mattina.", "Puoi inviarmi una foto?"], sub: "inviare", group: "are", class: "regular", aspect: "action", v3: "inviato" },
  "stay": { word: "restare", def: "Continuare a essere in un posto.", ex: ["Resto a casa la domenica.", "Stiamo in un hotel."], sub: "restare", group: "are", class: "regular", aspect: "action", v3: "restato" },
  "fall": { word: "cadere", def: "Muoversi verso il basso verso il suolo.", ex: ["Le foglie cadono in autunno.", "Fai attenzione, non cadere."], sub: "cadere", group: "ere", class: "irregular", aspect: "action", v3: "caduto" },
  "pass": { word: "passare", def: "Passare oltre qualcosa o superare un esame.", ex: ["Passo davanti al parco mentre vado a casa.", "Spero di superare il test."], sub: "passare", group: "are", class: "regular", aspect: "action", v3: "passato" },
  "sell": { word: "vendere", def: "Dare qualcosa a qualcuno in cambio di denaro.", ex: ["Vendono frutta al mercato."], sub: "vendere", group: "ere", class: "regular", aspect: "action", v3: "venduto" },
  "pull": { word: "tirare", def: "Spostare qualcosa verso di sé.", ex: ["Tira la porta per aprirla."], sub: "tirare", group: "are", class: "regular", aspect: "action", v3: "tirato" },
  "push": { word: "spingere", def: "Spostare qualcosa lontano da sé.", ex: ["Premi il pulsante.", "Spingo il carrello della spesa."], sub: "spingere", group: "ere", class: "irregular", aspect: "action", v3: "spinto" },
  "carry": { word: "trasportare", def: "Tenere qualcosa e spostarlo da un posto all'altro.", ex: ["Porto la mia borsa a scuola.", "Puoi aiutarmi a trasportare questa scatola?"], sub: "trasportare", group: "are", class: "regular", aspect: "action", v3: "trasportato" },
  "break": { word: "rompere", def: "Separare qualcosa in due o più pezzi.", ex: ["Non rompere il vetro.", "Si è rotto la gamba."], sub: "rompere", group: "ere", class: "irregular", aspect: "action", v3: "rotto" },
  "receive": { word: "ricevere", def: "Ottenere qualcosa che qualcuno ti ha dato o inviato.", ex: ["Ricevo molta posta.", "Ha ricevuto un regalo."], sub: "ricevere", group: "ere", class: "regular", aspect: "action", v3: "ricevuto" },
  "agree": { word: "essere d'accordo", def: "Avere la stessa opinione di qualcuno.", ex: ["Sono d'accordo con te.", "Siamo d'accordo sul piano."], sub: "essere d'accordo", group: "locution", class: "regular", aspect: "stative", v3: "stato d'accordo" },
  "draw": { word: "disegnare", def: "Fare un'immagine con una penna o una matita.", ex: ["Mi piace disegnare uccelli.", "Puoi disegnare una mappa?"], sub: "disegnare", group: "are", class: "regular", aspect: "action", v3: "disegnato" },
  "share": { word: "condividere", def: "Dare una parte di qualcosa ad altri.", ex: ["Condividiamo la pizza.", "Condivido la stanza con mio fratello."], sub: "condividere", group: "ire", class: "irregular", aspect: "action", v3: "condiviso" },
  "smile": { word: "sorridere", def: "Fare un'espressione felice con la bocca.", ex: ["Ha un bellissimo sorriso.", "Sorridi per la macchina fotografica."], sub: "sorridere", group: "ere", class: "irregular", aspect: "action", v3: "sorriso" },
  "cry": { word: "piangere", def: "Produrre lacrime perché si è tristi o si prova dolore.", ex: ["Il bambino sta piangendo.", "Non piangere."], sub: "piangere", group: "ere", class: "irregular", aspect: "action", v3: "pianto" },
  "dance": { word: "ballare", def: "Muovere il corpo a tempo di musica.", ex: ["Amo ballare.", "Stanno ballando."], sub: "ballare", group: "are", class: "regular", aspect: "action", v3: "ballato" },
  "sing": { word: "cantare", def: "Fare suoni musicali con la voce.", ex: ["Mi piace cantare sotto la doccia.", "Canta molto bene."], sub: "cantare", group: "are", class: "regular", aspect: "action", v3: "cantato" },
  "jump": { word: "saltare", def: "Spingersi lontano dal suolo con le gambe.", ex: ["Puoi saltare in alto?", "Il gatto è saltato sul tavolo."], sub: "saltare", group: "are", class: "regular", aspect: "action", v3: "saltato" },
  "swim": { word: "nuotare", def: "Muoversi attraverso l'acqua usando braccia e gambe.", ex: ["Nuoto ogni mattina.", "Sai nuotare?"], sub: "nuotare", group: "are", class: "regular", aspect: "action", v3: "nuotato" },
  "study": { word: "studiare", def: "Passare del tempo a imparare un argomento.", ex: ["Studio l'inglese a scuola.", "Sta studiando per i suoi esami."], sub: "studiare", group: "are", class: "regular", aspect: "action", v3: "studiato" },
  "teach": { word: "insegnare", def: "Dare conoscenza agli altri.", ex: ["Insegno inglese.", "Insegna in un'università."], sub: "insegnare", group: "are", class: "regular", aspect: "action", v3: "insegnato" },
  "commute": { word: "fare il pendolare", def: "Viaggiare per una certa distanza tra la propria casa e il posto di lavoro regolarmente.", ex: ["Faccio il pendolare verso la città in treno."], sub: "fare il pendolare", group: "locution", class: "regular", aspect: "action", v3: "fatto il pendolare" },
  "rent": { word: "affittare", def: "Pagare denaro per usare una casa o un appartamento che appartiene a qualcun altro.", ex: ["Affittiamo un appartamento in città."], sub: "affittare", group: "are", class: "regular", aspect: "action", v3: "affittato" },
  "exercise": { word: "esercitarsi", def: "Fare attività fisica per mantenersi in salute.", ex: ["Mi esercito ogni mattina."], sub: "esercitarsi", group: "are", class: "regular", aspect: "action", v3: "esercitato" },
  "cost": { word: "costare", def: "Avere un certo prezzo.", ex: ["L'appartamento costa molto."], sub: "costare", group: "are", class: "regular", aspect: "stative", v3: "costato" },
  "invite": { word: "invitare", def: "Chiedere a qualcuno di venire in un posto o a un evento.", ex: ["Invito gli amici a cena."], sub: "invitare", group: "are", class: "regular", aspect: "action", v3: "invitato" }
};

const itData = [];

enVerbs.forEach(enV => {
  const trans = translations[enV.word];
  if (trans) {
    itData.push({
      word: trans.word,
      level: "starter",
      theme: enV.theme,
      emoji: enV.emoji,
      subtext: trans.sub,
      form: "verb",
      definitions: [{
        text: trans.def,
        examples: trans.ex
      }],
      classification: trans.class,
      aspect: trans.aspect,
      group: trans.group,
      v3: trans.v3
    });
  } else {
    console.log(`Missing translation for ${enV.word}`);
  }
});

const content = `(function() {
    const data = ${JSON.stringify(itData, null, 4)};
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();`;

fs.writeFileSync('js/data/romance/it/starter/verbs.js', content);
console.log(`Wrote 113 verbs to Italian Starter.`);
