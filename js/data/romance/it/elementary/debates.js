(function() {
    const data = [{
                "topic": "Uno stipendio alto vs un breve tragitto giornaliero — cosa conta di più in un lavoro?",
                "sideA": "Stipendio alto",
                "sideB": "Breve tragitto",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Aumentare la sicurezza finanziaria", "Permettersi prodotti di qualità superiore"],
                "ideasB": ["Ridurre lo stress del viaggio quotidiano", "Più tempo per la vita personale"]
            },
            {
                "topic": "Cambiare spesso lavoro vs restare nella stessa azienda — cosa è meglio per la tua carriera?",
                "sideA": "Cambiare lavoro",
                "sideB": "Restare",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Ottenere diverse esperienze lavorative", "Negoziare uno stipendio migliore"],
                "ideasB": ["Costruire fiducia professionale a lungo termine", "Opportunità di promozione interna"]
            },
            {
                "topic": "Lavorare straordinari vs uscire in orario ogni giorno — qual è l'abitudine migliore?",
                "sideA": "Straordinari",
                "sideB": "In orario",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Completare progetti urgenti più velocemente", "Dimostrare un forte impegno"],
                "ideasB": ["Prevenire il burnout professionale", "Mantenere un sano equilibrio vita-lavoro"]
            },
            {
                "topic": "Un capo severo vs un capo rilassato — con chi è meglio lavorare?",
                "sideA": "Capo severo",
                "sideB": "Capo rilassato",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Aspettative e regole chiare", "Standard professionali più elevati"],
                "ideasB": ["Incoraggia il pensiero creativo", "Livelli inferiori di pressione sul posto di lavoro"]
            },
            {
                "topic": "Lavorare in una grande azienda vs una piccola azienda — cosa è meglio?",
                "sideA": "Grande azienda",
                "sideB": "Piccola azienda",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Percorsi di carriera strutturati", "Migliori benefit per i dipendenti"],
                "ideasB": ["Atmosfera amichevole e familiare", "Responsabilità più varie"]
            },
            {
                "topic": "Ottenere una promozione vs avere più tempo libero — cosa sceglieresti?",
                "sideA": "Promozione",
                "sideB": "Tempo libero",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Crescita professionale e status", "Maggiore responsabilità finanziaria"],
                "ideasB": ["Concentrarsi sulle attività familiari", "Sviluppare hobby personali"]
            },
            {
                "topic": "Comprare casa vs affittare a vita — qual è la decisione finanziaria più intelligente?",
                "sideA": "Comprare",
                "sideB": "Affittare",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Investimento stabile a lungo termine", "Libertà di ristrutturare l'immobile"],
                "ideasB": ["Maggiore flessibilità di movimento", "Nessuna responsabilità per le riparazioni"]
            },
            {
                "topic": "Vivere in centro città vs vivere in periferia — cosa è meglio?",
                "sideA": "Centro città",
                "sideB": "Periferia",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Negozi raggiungibili a piedi", "Accesso a una vivace vita notturna"],
                "ideasB": ["Ambiente più tranquillo e sicuro", "Più spazio per le famiglie"]
            },
            {
                "topic": "Spendere soldi per esperienze vs per oggetti — cosa ti rende più felice?",
                "sideA": "Esperienze",
                "sideB": "Oggetti",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Creare ricordi duraturi", "Opportunità di crescita personale"],
                "ideasB": ["Uso pratico quotidiano", "Valore fisico duraturo"]
            },
            {
                "topic": "Cucinare ogni giorno vs preparare i pasti una volta a settimana — cosa è più pratico?",
                "sideA": "Cucinare ogni giorno",
                "sideB": "Meal prepping",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Usare ingredienti freschi ogni giorno", "Maggiore varietà nella dieta"],
                "ideasB": ["Risparmiare tempo significativo", "Migliore organizzazione della cucina"]
            },
            {
                "topic": "Avere una persona per le pulizie vs fare le pulizie da soli — qual è la scelta migliore?",
                "sideA": "Pulizie pro",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Risparmiare tempo ed energia", "Qualità della pulizia professionale"],
                "ideasB": ["Risparmiare denaro familiare", "Mantenere il controllo totale"]
            },
            {
                "topic": "Vivere con un partner vs vivere da soli — cosa è meglio per gli adulti?",
                "sideA": "Con partner",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Dividere i costi domestici", "Supporto emotivo costante"],
                "ideasB": ["Totale indipendenza personale", "Pace e tranquillità"]
            },
            {
                "topic": "Avere figli presto vs avere figli più tardi nella vita — cosa è meglio?",
                "sideA": "Presto",
                "sideB": "Più tardi",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Più energia per l'educazione", "Crescere insieme ai figli"],
                "ideasB": ["Migliore stabilità finanziaria", "Più esperienza di vita da condividere"]
            },
            {
                "topic": "Legami familiari stretti vs indipendenza dalla famiglia — cosa è più importante da adulti?",
                "sideA": "Legami stretti",
                "sideB": "Indipendenza",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Forte supporto emotivo", "Mantenere le tradizioni familiari"],
                "ideasB": ["Libertà personale", "Prendere decisioni indipendenti"]
            },
            {
                "topic": "Incontrare nuove persone vs mantenere le vecchie amicizie — cosa ha più valore?",
                "sideA": "Nuove persone",
                "sideB": "Vecchi amici",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Imparare nuove prospettive", "Espandere la rete professionale"],
                "ideasB": ["Storia personale condivisa", "Livello di fiducia più elevato"]
            },
            {
                "topic": "Socializzare dopo il lavoro vs tornare direttamente a casa — cosa è meglio per le relazioni lavorative?",
                "sideA": "Socializzare",
                "sideB": "Tornare a casa",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Migliorare la collaborazione del team", "Comunicazione informale rilassata"],
                "ideasB": ["Recuperare energia mentale", "Tempo di qualità con la famiglia"]
            },
            {
                "topic": "Andare in palestra vs fare esercizio all'aperto — cosa è meglio per gli adulti?",
                "sideA": "Palestra",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Accesso ad attrezzature moderne", "Lavorare con trainer professionisti"],
                "ideasB": ["Godersi l'aria fresca", "Nessuna quota associativa mensile"]
            },
            {
                "topic": "Dieta ferrea vs mangiare tutto con moderazione — cosa è più sano?",
                "sideA": "Dieta ferrea",
                "sideB": "Moderazione",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Ottenere risultati più veloci", "Sviluppare una forte disciplina"],
                "ideasB": ["Equilibrio sostenibile a lungo termine", "Godersi diversi tipi di cibo"]
            },
            {
                "topic": "Vedere il medico subito vs aspettare per vedere se si migliora — cosa è più saggio?",
                "sideA": "Subito",
                "sideB": "Aspettare",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Ricevere cure veloci", "Prevenire problemi seri"],
                "ideasB": ["Permettere il recupero naturale", "Evitare medicine non necessarie"]
            },
            {
                "topic": "Dormire otto ore vs dormire sei ore ma fare esercizio — cosa è meglio per l'energia?",
                "sideA": "8 ore",
                "sideB": "6 ore + sport",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Recupero fisico completo", "Migliore umore quotidiano"],
                "ideasB": ["Maggiore forma fisica", "Mantenere il corpo attivo"]
            },
            {
                "topic": "Ridurre lo stress attraverso lo sport vs attraverso il relax — cosa funziona meglio?",
                "sideA": "Sport",
                "sideB": "Relax",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Rilascio dello stress fisico", "Livelli di energia più elevati"],
                "ideasB": ["Pace mentale", "Calmare la mente"]
            },
            {
                "topic": "Smartphone vs conversazione faccia a faccia — cosa usiamo di più, ed è un problema?",
                "sideA": "Smartphone",
                "sideB": "Faccia a faccia",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Accesso globale istantaneo", "Rimanere costantemente connessi"],
                "ideasB": ["Esprimere emozioni reali", "Migliore concentrazione personale"]
            },
            {
                "topic": "Banking online vs andare in banca — cosa è meglio?",
                "sideA": "Online",
                "sideB": "Andare in banca",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Molto conveniente", "Disponibile 24/7"],
                "ideasB": ["Consulenza esperta personale", "Sicurezza fisica"]
            },
            {
                "topic": "Lavorare con la carta vs lavorare digitalmente — cosa è più efficiente?",
                "sideA": "Carta",
                "sideB": "Digitale",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Migliore concentrazione mentale", "Ridurre l'affaticamento degli occhi"],
                "ideasB": ["Archiviazione digitale efficiente", "Ricerca rapida delle informazioni"]
            },
            {
                "topic": "Social media per il networking vs incontrare persone di persona — cosa è più utile professionalmente?",
                "sideA": "Social media",
                "sideB": "Di persona",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Raggiungere un pubblico globale", "Contatto professionale rapido"],
                "ideasB": ["Costruire una fiducia più forte", "Avere un impatto personale"]
            },
            {
                "topic": "Viaggio organizzato vs viaggio indipendente — cosa è meglio per gli adulti?",
                "sideA": "Organizzato",
                "sideB": "Indipendente",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Ridurre lo stress della pianificazione", "Standard di sicurezza garantiti"],
                "ideasB": ["Avventura autentica", "Esperienze locali uniche"]
            },
            {
                "topic": "Soggiorno in città vs vacanza al mare — qual è il modo migliore per rilassarsi?",
                "sideA": "Città",
                "sideB": "Mare",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Interessanti visite culturali", "Provare il cibo locale"],
                "ideasB": ["Rilassante brezza marina", "Completo relax fisico"]
            },
            {
                "topic": "Una vacanza lunga all'anno vs diversi brevi soggiorni — cosa è meglio?",
                "sideA": "Una lunga",
                "sideB": "Diverse brevi",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Profondo riposo mentale", "Viaggiare in luoghi lontani"],
                "ideasB": ["Pause regolari dal lavoro", "Visitare più destinazioni"]
            },
            {
                "topic": "Viaggiare in coppia vs viaggiare da soli — cosa è più piacevole?",
                "sideA": "In coppia",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Condividere ricordi speciali", "Minori costi condivisi"],
                "ideasB": ["Scelta personale completa", "Incontrare più persone locali"]
            },
            {
                "topic": "Raccontare ogni piccolo problema al partner vs tenere le cose per sé — cosa è più sano?",
                "sideA": "Raccontare tutto",
                "sideB": "Tenere per sé",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Piena onestà emotiva", "Ricevere supporto reciproco"],
                "ideasB": ["Evitare drammi inutili", "Pace mentale interna"]
            },
            {
                "topic": "Controllare il telefono appena svegli vs aspettare dopo colazione — quale è un'abitudine migliore?",
                "sideA": "Appena svegli",
                "sideB": "Dopo colazione",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Controllare le notizie urgenti", "Pianificare la giornata presto"],
                "ideasB": ["Inizio tranquillo della giornata", "Praticare l'alimentazione consapevole"]
            },
            {
                "topic": "Conoscere il nome dei vicini vs non conoscerli — qual è l'esperienza adulta più normale oggi?",
                "sideA": "Conoscerli",
                "sideB": "Non conoscerli",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Forte senso di comunità", "Aiuto reciproco e sicurezza"],
                "ideasB": ["Mantenere la totale privacy", "Evitare i pettegolezzi locali"]
            },
            {
                "topic": "Fare la spesa con una lista vs senza lista — quale tipo di persona vive meglio?",
                "sideA": "Con lista",
                "sideB": "Senza lista",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Stile di vita organizzato", "Risparmiare denaro mensile"],
                "ideasB": ["Scelte spontanee", "Idee creative in cucina"]
            },
            {
                "topic": "Dire al capo che sei malato vs andare al lavoro malato — quale è la scelta più coraggiosa?",
                "sideA": "Dirlo",
                "sideB": "Andare malato",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Proteggere i colleghi", "Assicurare un recupero più veloce"],
                "ideasB": ["Mostrare impegno lavorativo", "Finire scadenze importanti"]
            },
            {
                "topic": "Lavorare a tempo pieno vs lavorare a tempo parziale — cosa è meglio?",
                "sideA": "Tempo pieno",
                "sideB": "Tempo parziale",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Crescita professionale costante", "Migliore stabilità finanziaria"],
                "ideasB": ["Migliore equilibrio di vita", "Più tempo per lo studio"]
            },
            {
                "topic": "Lavorare in ufficio vs lavorare da casa — cosa è meglio?",
                "sideA": "Ufficio",
                "sideB": "Casa",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Contatto sociale importante", "Spazio di lavoro professionale"],
                "ideasB": ["Nessun tempo di pendolarismo", "Orari di lavoro flessibili"]
            },
            {
                "topic": "Un lavoro che ami vs un lavoro che paga bene — cosa è più importante?",
                "sideA": "Lavoro amato",
                "sideB": "Paga bene",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Passione professionale quotidiana", "Minori livelli di stress"],
                "ideasB": ["Maggiore libertà finanziaria", "Qualità della vita superiore"]
            },
            {
                "topic": "Lavorare con altre persone vs lavorare da soli — cosa è meglio?",
                "sideA": "Con altri",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Ricevere supporto dal team", "Scambiare molteplici idee"],
                "ideasB": ["Concentrazione mentale silenziosa", "Stile di lavoro indipendente"]
            },
            {
                "topic": "Un tragitto breve vs un tragitto lungo — cosa è più accettabile?",
                "sideA": "Breve",
                "sideB": "Lungo",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Più tempo libero quotidiano", "Meno fatica nel viaggio"],
                "ideasB": ["Alloggi suburbani più economici", "Tempo per i podcast"]
            },
            {
                "topic": "Vivere da soli vs vivere con un partner — cosa è meglio?",
                "sideA": "Da soli",
                "sideB": "Partner",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Spazio personale privato", "Indipendenza totale"],
                "ideasB": ["Vita quotidiana condivisa", "Supporto durante i problemi"]
            },
            {
                "topic": "Grande città vs piccola città — qual è il posto migliore dove vivere da adulti?",
                "sideA": "Grande città",
                "sideB": "Piccola città",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Mercati del lavoro dinamici", "Intrattenimento infinito"],
                "ideasB": ["Minori costi della vita", "Aria pulita e fresca"]
            },
            {
                "topic": "Cucinare a casa vs mangiare fuori — cosa è meglio per la vita quotidiana?",
                "sideA": "A casa",
                "sideB": "Fuori",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Pasti molto più sani", "Ridurre i costi domestici"],
                "ideasB": ["Nessuna pulizia della cucina", "Provare cibo professionale"]
            },
            {
                "topic": "Avere figli vs non avere figli — quale vita è migliore?",
                "sideA": "Figli",
                "sideB": "Niente figli",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Creare un'eredità familiare", "Sperimentare amore e gioia"],
                "ideasB": ["Totale libertà di viaggiare", "Intensa concentrazione sulla carriera"]
            },
            {
                "topic": "Affittare un appartamento vs comprare una casa — cosa è meglio per i giovani adulti?",
                "sideA": "Affittare",
                "sideB": "Comprare",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Maggiore mobilità sociale", "Meno preoccupazioni finanziarie"],
                "ideasB": ["Costruire il capitale immobiliare", "Spazio per un giardino"]
            },
            {
                "topic": "Esercizio ogni giorno vs riposo — cosa è meglio per la tua salute?",
                "sideA": "Esercizio",
                "sideB": "Riposo",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Maggiore forma fisica", "Aumentare i livelli di energia"],
                "ideasB": ["Essenziale recupero muscolare", "Supporto alla salute mentale"]
            },
            {
                "topic": "Andare dal medico vs aspettare — cosa è meglio quando ti senti male?",
                "sideA": "Medico",
                "sideB": "Aspettare",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Ricevere consigli professionali", "Veloce recupero medico"],
                "ideasB": ["Evitare cliniche affollate", "Supportare la guarigione naturale"]
            },
            {
                "topic": "Dormire otto ore vs dormire meno — cosa è più realistico per gli adulti?",
                "sideA": "8 ore",
                "sideB": "Meno",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Massima concentrazione mentale", "Migliore umore quotidiano"],
                "ideasB": ["Affrontare la realtà vita-lavoro", "Tempo per gli hobby serali"]
            },
            {
                "topic": "Andare al lavoro a piedi vs prendere l'auto — cosa è meglio per la tua salute?",
                "sideA": "A piedi",
                "sideB": "Auto",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Movimento fisico attivo", "Nuovo inizio di giornata"],
                "ideasB": ["Protezione dalle intemperie", "Risparmiare energia fisica"]
            },
            {
                "topic": "Acquisti online vs acquisti in un negozio — cosa è meglio?",
                "sideA": "Online",
                "sideB": "Negozio",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Comodità dello shopping", "Trovare prezzi migliori"],
                "ideasB": ["Provare i vestiti", "Supportare le attività locali"]
            },
            {
                "topic": "Risparmiare per il futuro vs godersi i soldi ora — cosa è più saggio?",
                "sideA": "Risparmiare",
                "sideB": "Godersi ora",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Sicurezza finanziaria futura", "Investimento a lungo termine"],
                "ideasB": ["Aumentare la felicità mentale", "Vivere appieno la vita"]
            },
            {
                "topic": "Cose costose vs cose economiche — cosa ha il miglior valore?",
                "sideA": "Costose",
                "sideB": "Economiche",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Maggiore qualità del prodotto", "Maggiore durata"],
                "ideasB": ["Basso rischio finanziario", "Risparmiare più denaro"]
            },
            {
                "topic": "Comprare nuovo vs comprare di seconda mano — cosa è meglio?",
                "sideA": "Nuovo",
                "sideB": "Seconda mano",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["In condizioni perfette", "Garanzie sul prodotto"],
                "ideasB": ["Scelta eco-compatibile", "Prezzi molto bassi"]
            },
            {
                "topic": "Guardare la TV a casa vs uscire — qual è la serata migliore?",
                "sideA": "TV",
                "sideB": "Uscire",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Completo relax", "Costo finanziario zero"],
                "ideasB": ["Contatto sociale", "Atmosfera vivace"]
            },
            {
                "topic": "Vacanze in famiglia vs vacanze con amici — cosa è meglio?",
                "sideA": "Famiglia",
                "sideB": "Amici",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Profondo legame emotivo", "Aiuto finanziario extra"],
                "ideasB": ["Condividere hobby simili", "Livelli di energia dinamici"]
            },
            {
                "topic": "Rimanere nel proprio paese vs viaggiare all'estero — qual è la vacanza migliore?",
                "sideA": "Proprio paese",
                "sideB": "Estero",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Facilità di viaggio", "Supportare il turismo locale"],
                "ideasB": ["Imparare culture straniere", "Praticare nuove lingue"]
            },
            {
                "topic": "Sport vs lettura — qual è il miglior hobby per gli adulti?",
                "sideA": "Sport",
                "sideB": "Lettura",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Migliorare la salute fisica", "Costruire spirito di squadra"],
                "ideasB": ["Stimolare la crescita mentale", "Profondo relax mentale"]
            },
            {
                "topic": "Vedere spesso gli amici vs avere tempo da soli — cosa è più importante?",
                "sideA": "Amici",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Supporto sociale vitale", "Risate condivise"],
                "ideasB": ["Spazio per l'autoriflessione", "Totale pace mentale"]
            },
            {
                "topic": "Rispondere alle email immediatamente vs lasciarle per dopo — cosa è più professionale?",
                "sideA": "Immediatamente",
                "sideB": "Dopo",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Alta efficienza lavorativa", "Aumentare l'affidabilità"],
                "ideasB": ["Preparare risposte ponderate", "Mantenere una concentrazione profonda"]
            },
            {
                "topic": "Lavare i piatti immediatamente vs lasciarli fino a domani — cosa è meglio?",
                "sideA": "Immediatamente",
                "sideB": "Domani",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Mantenere una cucina pulita", "Inizio di giornata sereno"],
                "ideasB": ["Godersi il riposo serale", "Passare del tempo con la famiglia"]
            },
            {
                "topic": "Essere sempre in anticipo vs sempre cinque minuti in ritardo — cosa è peggio al lavoro?",
                "sideA": "Anticipo",
                "sideB": "Ritardo",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Tempo di attesa sprecato", "Gap di produttività"],
                "ideasB": ["Sembra poco professionale", "Perdere l'inizio delle riunioni"]
            },
            {
                "topic": "Avere una scrivania molto organizzata vs una scrivania disordinata — quale persona è più produttiva?",
                "sideA": "Organizzata",
                "sideB": "Disordinata",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Trovare documenti velocemente", "Stato mentale chiaro"],
                "ideasB": ["Incoraggia il caos creativo", "Accesso rapido agli strumenti"]
            },
            {
                "topic": "Parlare di lavoro a cena vs niente chiacchiere di lavoro a cena — quale regola è migliore?",
                "sideA": "Parlare di lavoro",
                "sideB": "Niente lavoro",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Condividere problemi quotidiani", "Legame professionale"],
                "ideasB": ["Disconnettersi completamente", "Tempo di relax di qualità"]
            },
            {
                "topic": "Vivere in famiglia vs Da soli — cosa è meglio?",
                "sideA": "In famiglia",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Compagnia costante", "Sistema di supporto domestico"],
                "ideasB": ["Totale indipendenza", "Assoluta privacy"]
            },
            {
                "topic": "Avere un fratello vs una sorella — cosa è meglio?",
                "sideA": "Fratello",
                "sideB": "Sorella",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Giocare a sport di squadra", "Senso di protezione"],
                "ideasB": ["Fare discorsi profondi", "Condividere segreti"]
            },
            {
                "topic": "Famiglia grande vs piccola — quale è più bella?",
                "sideA": "Grande",
                "sideB": "Piccola",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Casa vivace e affollata", "Molto divertimento sociale"],
                "ideasB": ["Vita quotidiana tranquilla", "Legami emotivi più stretti"]
            },
            {
                "topic": "Il più grande vs Il più piccolo — cosa è meglio?",
                "sideA": "Grande",
                "sideB": "Piccolo",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Sviluppare abilità di leadership", "Imparare la responsabilità"],
                "ideasB": ["Ricevere attenzioni extra", "Regole più rilassate"]
            },
            {
                "topic": "Scuola di mattina vs pomeriggio — cosa è meglio?",
                "sideA": "Mattina",
                "sideB": "Pomeriggio",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Tempo libero nel pomeriggio", "Mantenere una routine"],
                "ideasB": ["Poter dormire tardi", "Inizio giornata tranquillo"]
            },
            {
                "topic": "Lettura vs Matematica — quale è più divertente?",
                "sideA": "Lettura",
                "sideB": "Matematica",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Storie coinvolgenti", "Espandere il vocabolario"],
                "ideasB": ["Risoluzione di problemi complessi", "Pensiero logico"]
            },
            {
                "topic": "Scuola vs Casa — cosa è meglio?",
                "sideA": "Scuola",
                "sideB": "Casa",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Contatto sociale diretto", "Assistenza dell'insegnante"],
                "ideasB": ["Setup confortevole", "Orari di apprendimento flessibili"]
            },
            {
                "topic": "Compiti vs Niente compiti — cosa aiuta di più?",
                "sideA": "Compiti",
                "sideB": "Niente",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Rinforzare le lezioni quotidiane", "Costruire autodisciplina"],
                "ideasB": ["Più tempo libero", "Periodo di riposo mentale"]
            },
            {
                "topic": "Da soli vs In coppia — cosa è meglio?",
                "sideA": "Da soli",
                "sideB": "Coppia",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Profonda concentrazione individuale", "Studio indipendente"],
                "ideasB": ["Condividere la conoscenza", "Divertimento collaborativo"]
            },
            {
                "topic": "Carta vs Computer — cosa è meglio?",
                "sideA": "Carta",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Sensazione tattile della scrittura", "Migliorare la memoria"],
                "ideasB": ["Velocità di digitazione", "Strumenti di ricerca digitale"]
            },
            {
                "topic": "Colazione vs Cena — quale pasto è più importante?",
                "sideA": "Colazione",
                "sideB": "Cena",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Spinta di energia mattutina", "Costruire abitudini sane"],
                "ideasB": ["Tempo di riunione familiare", "Pasto principale della giornata"]
            },
            {
                "topic": "Cibo caldo vs freddo — cosa è meglio?",
                "sideA": "Caldo",
                "sideB": "Freddo",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Confortante in inverno", "Gusto cotto tradizionale"],
                "ideasB": ["Fresco per l'estate", "Varietà di insalate"]
            },
            {
                "topic": "Casa vs Ristorante — cosa è meglio?",
                "sideA": "Casa",
                "sideB": "Ristorante",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Controllare tutti gli ingredienti", "Minori costi del cibo"],
                "ideasB": ["Chef professionisti", "Zero pulizia"]
            },
            {
                "topic": "Dolce vs Salato — cosa è meglio?",
                "sideA": "Dolce",
                "sideB": "Salato",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Rilascio istantaneo di energia", "Deliziosi dolcetti"],
                "ideasB": ["Alto valore nutrizionale", "Sentirsi sazi più a lungo"]
            },
            {
                "topic": "Cucinare vs Comprare — cosa è più bello?",
                "sideA": "Cucinare",
                "sideB": "Comprare",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Processo creativo", "Scelte di ingredienti sani"],
                "ideasB": ["Totale comodità", "Risparmiare tempo"]
            },
            {
                "topic": "Svegliarsi presto vs tardi — cosa è meglio?",
                "sideA": "Presto",
                "sideB": "Tardi",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Ore più produttive", "Godersi un'alba tranquilla"],
                "ideasB": ["Riposo fisico completo", "Alta energia notturna"]
            },
            {
                "topic": "Mattina vs Sera — quale parte del giorno è più bella?",
                "sideA": "Mattina",
                "sideB": "Sera",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Atmosfera fresca", "Nuovo inizio quotidiano"],
                "ideasB": ["Tempo sociale", "Relax completo"]
            },
            {
                "topic": "Giorni feriali vs Fine settimana — cosa è meglio?",
                "sideA": "Feriali",
                "sideB": "Fine settimana",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Tempo di lavoro produttivo", "Struttura regolare"],
                "ideasB": ["Totale libertà personale", "Tempo per gli hobby"]
            },
            {
                "topic": "Estate vs Inverno — quale stagione è migliore?",
                "sideA": "Estate",
                "sideB": "Inverno",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Spiagge assolate", "Vita all'aperto"],
                "ideasB": ["Attività sulla neve", "Atmosfera accogliente"]
            },
            {
                "topic": "Andare a letto presto vs tardi — cosa è più salutare?",
                "sideA": "Presto",
                "sideB": "Tardi",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Ritmo naturale", "Umore migliorato"],
                "ideasB": ["Creatività serale", "Tempo per i film"]
            },
            {
                "topic": "Casa vs Appartamento — cosa è meglio?",
                "sideA": "Casa",
                "sideB": "Appartamento",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Area giardino privata", "Più spazio abitativo"],
                "ideasB": ["Pulizia facile", "Posizione centrale"]
            },
            {
                "topic": "Città vs Campagna — quale è un posto migliore dove vivere?",
                "sideA": "Città",
                "sideB": "Campagna",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Vita culturale vivace", "Ampi mercati del lavoro"],
                "ideasB": ["Aria fresca e pulita", "Natura silenziosa"]
            },
            {
                "topic": "Camera vs Soggiorno — cosa è meglio?",
                "sideA": "Camera",
                "sideB": "Soggiorno",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Privacy totale", "Rifugio per il sonno"],
                "ideasB": ["Spazio familiare", "TV a grande schermo"]
            },
            {
                "topic": "Giochi al chiuso vs all'aperto — quali sono più divertenti?",
                "sideA": "Chiuso",
                "sideB": "Aperto",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Divertimento con i giochi da tavolo", "Nessun problema meteo"],
                "ideasB": ["Movimento attivo", "Benefici della luce solare"]
            },
            {
                "topic": "TV vs Libro — cosa è meglio?",
                "sideA": "TV",
                "sideB": "Libro",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Ricche storie visive", "Facile relax"],
                "ideasB": ["Profonda immaginazione", "Crescita del vocabolario"]
            },
            {
                "topic": "Sport vs Videogioco — quale è più divertente?",
                "sideA": "Sport",
                "sideB": "Videogioco",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Forma fisica", "Esperienza di squadra sociale"],
                "ideasB": ["Abilità strategiche", "Mondi digitali"]
            },
            {
                "topic": "Disegno vs Canto — quale hobby è migliore?",
                "sideA": "Disegno",
                "sideB": "Canto",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Creatività visiva", "Tempo personale tranquillo"],
                "ideasB": ["Rilascio emotivo", "Espressione musicale"]
            },
            {
                "topic": "Giocare da soli vs con amici — quale è più divertente?",
                "sideA": "Soli",
                "sideB": "Amici",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Profonda concentrazione", "Piena indipendenza"],
                "ideasB": ["Risate condivise", "Gioco collaborativo"]
            },
            {
                "topic": "Nuoto vs Corsa — cosa è meglio?",
                "sideA": "Nuoto",
                "sideB": "Corsa",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Acqua rinfrescante", "Protegge le articolazioni"],
                "ideasB": ["Facile da iniziare", "Viste all'aperto"]
            },
            {
                "topic": "Musica vs Sport — quale è un hobby migliore?",
                "sideA": "Musica",
                "sideB": "Sport",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Pace emotiva", "Crescita culturale"],
                "ideasB": ["Forma fisica", "Successo di squadra"]
            },
            {
                "topic": "Animali da fattoria vs selvatici — quali sono più interessanti?",
                "sideA": "Fattoria",
                "sideB": "Selvatici",
                "level": "elementary",
                "theme": "animals_nature_A2",
                "ideasA": ["Forniscono prodotti utili", "Animali domestici amichevoli"],
                "ideasB": ["Biomi esotici", "Mistero naturale"]
            },
            {
                "topic": "Pioggia vs Sole — cosa è meglio?",
                "sideA": "Pioggia",
                "sideB": "Sole",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Essenziale per le piante", "Atmosfera accogliente al chiuso"],
                "ideasB": ["Tempo perfetto per la spiaggia", "Vitamina D"]
            },
            {
                "topic": "Mare vs Montagna — quale è meglio per una vacanza?",
                "sideA": "Mare",
                "sideB": "Montagna",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Divertimento nel nuoto", "Onde rilassanti"],
                "ideasB": ["Aria fresca e pulita", "Splendide viste sulle montagne"]
            },
            {
                "topic": "Fiori vs Alberi — quali sono più belli?",
                "sideA": "Fiori",
                "sideB": "Alberi",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Colori vivaci", "Profumi dolci"],
                "ideasB": ["Altezza maestosa", "Forniscono ossigeno"]
            },
            {
                "topic": "Auto vs Autobus — cosa è meglio?",
                "sideA": "Auto",
                "sideB": "Autobus",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Viaggio privato", "Transito porta a porta"],
                "ideasB": ["Costi inferiori", "Rispettoso dell'ambiente"]
            },
            {
                "topic": "Camminare vs Bici — con cosa è meglio spostarsi?",
                "sideA": "Camminare",
                "sideB": "Bici",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Viaggio più semplice", "Grandi benefici per la salute"],
                "ideasB": ["Velocità più elevata", "Raggio di viaggio più lungo"]
            },
            {
                "topic": "Vacanze brevi vs lunghe — cosa è meglio?",
                "sideA": "Brevi",
                "sideB": "Lunghe",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Frequenti pause dal lavoro", "Budget inferiore"],
                "ideasB": ["Reset mentale completo", "Immersione culturale"]
            },
            {
                "topic": "Viaggiare soli vs in famiglia — quale è più divertente?",
                "sideA": "Soli",
                "sideB": "Famiglia",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Crescita personale", "Libertà totale"],
                "ideasB": ["Gioia condivisa", "Supporto finanziario"]
            },
            {
                "topic": "Acquisti online vs Acquisti di persona",
                "sideA": "Online",
                "sideB": "Di persona",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Comodità dello shopping", "Prezzi inferiori"],
                "ideasB": ["Provare gli articoli", "Gratificazione istantanea"]
            },
            {
                "topic": "Libri cartacei vs E-book",
                "sideA": "Carta",
                "sideB": "E-book",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Sensazione tradizionale", "Altamente collezionabile"],
                "ideasB": ["Estrema portabilità", "Risparmio di spazio"]
            },
            {
                "topic": "Studiare la mattina o studiare la sera — quando è meglio?",
                "sideA": "Mattina",
                "sideB": "Sera",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Stato cerebrale fresco", "Zero distrazioni quotidiane"],
                "ideasB": ["Ambiente notturno tranquillo", "Ripassare il materiale quotidiano"]
            },
            {
                "topic": "Insegnanti severi o insegnanti amichevoli — chi aiuta di più gli studenti?",
                "sideA": "Severi",
                "sideB": "Amichevoli",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Alta disciplina in classe", "Standard chiari"],
                "ideasB": ["Motivazione degli studenti", "Porre domande aperte"]
            },
            {
                "topic": "Imparare con un libro di testo o imparare con i video — cosa è più efficace?",
                "sideA": "Libro",
                "sideB": "Video",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Lezioni strutturate", "Esperienza di apprendimento tattile"],
                "ideasB": ["Moderne basi visive", "Contenuto dinamico"]
            },
            {
                "topic": "Lezioni brevi o lezioni lunghe — quali aiutano a imparare meglio?",
                "sideA": "Brevi",
                "sideB": "Lunghe",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Mantenere una migliore concentrazione", "Meno fatica mentale"],
                "ideasB": ["Immersione profonda nel tema", "Tempo di studio dettagliato"]
            },
            {
                "topic": "Progetti di gruppo o compiti individuali — cosa è meglio?",
                "sideA": "Gruppo",
                "sideB": "Individuale",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Migliorare la collaborazione", "Scambiare idee diverse"],
                "ideasB": ["Sviluppare l'autosufficienza", "Focus di studio personale"]
            },
            {
                "topic": "Uniforme scolastica o vestiti casual a scuola — cosa è meglio?",
                "sideA": "Uniforme",
                "sideB": "Casual",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Promuovere l'uguaglianza degli studenti", "Semplicità mattutina"],
                "ideasB": ["Auto-espressione personale", "Comfort quotidiano"]
            },
            {
                "topic": "Pasti cucinati in casa o fast food — cosa è meglio?",
                "sideA": "In casa",
                "sideB": "Fast food",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Scelte molto più sane", "Controllare ricette specifiche"],
                "ideasB": ["Servizio istantaneo", "Grande comodità"]
            },
            {
                "topic": "Tre pasti abbondanti o molti piccoli spuntini — cosa è più sano?",
                "sideA": "Grandi pasti",
                "sideB": "Spuntini",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Ritmo quotidiano coerente", "Soddisfazione dello stomaco pieno"],
                "ideasB": ["Mantenere l'energia stabile", "Supportare il metabolismo"]
            },
            {
                "topic": "Cibo vegetariano o carne — quale dieta è migliore?",
                "sideA": "Vegetariano",
                "sideB": "Carne",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Stile di vita eco-compatibile", "Digestione più leggera"],
                "ideasB": ["Alti livelli proteici", "Gusto tradizionale"]
            },
            {
                "topic": "Bere tè o bere caffè — cosa è meglio?",
                "sideA": "Tè",
                "sideB": "Caffè",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Effetto mentale calmante", "Erbe naturali sane"],
                "ideasB": ["Spinta di energia istantanea", "Cultura sociale globale"]
            },
            {
                "topic": "Mangiare da soli o mangiare con altri — cosa è meglio?",
                "sideA": "Da soli",
                "sideB": "Con altri",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Tempo personale tranquillo", "Praticare l'alimentazione consapevole"],
                "ideasB": ["Legame sociale ed emotivo", "Condividere la gioia del cibo"]
            },
            {
                "topic": "Praticare uno sport di squadra o uno sport individuale — cosa è meglio?",
                "sideA": "Sport di squadra",
                "sideB": "Sport individuale",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Cooperazione di gruppo", "Rete di supporto sociale"],
                "ideasB": ["Obiettivi di performance personali", "Autosufficienza"]
            },
            {
                "topic": "Passare il tempo libero al chiuso o all'aperto — cosa è meglio?",
                "sideA": "Al chiuso",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Comfort accogliente al chiuso", "Hobby digitali"],
                "ideasB": ["Salute nella natura", "Movimento fisico attivo"]
            },
            {
                "topic": "Cinema o teatro — quale è la migliore serata fuori?",
                "sideA": "Cinema",
                "sideB": "Teatro",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Grande schermo immersivo", "Moderni effetti sonori"],
                "ideasB": ["Esperienza di recitazione dal vivo", "Tradizione culturale"]
            },
            {
                "topic": "Ascoltare musica o suonare uno strumento — cosa è più piacevole?",
                "sideA": "Ascoltare",
                "sideB": "Suonare",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Gioia quotidiana senza sforzo", "Vasta varietà musicale"],
                "ideasB": ["Intenso sviluppo delle abilità", "Rilascio emotivo creativo"]
            },
            {
                "topic": "Videogiochi o giochi da tavolo — quali sono più divertenti?",
                "sideA": "Videogiochi",
                "sideB": "Giochi da tavolo",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Mondi immersivi profondi", "Connettersi con amici online"],
                "ideasB": ["Divertimento faccia a faccia", "Pezzi di gioco tattili"]
            },
            {
                "topic": "Fare shopping o restare a casa — quale è il modo migliore per trascorrere il fine settimana?",
                "sideA": "Shopping",
                "sideB": "Restare a casa",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Attività sociale nel weekend", "Scoprire nuovi articoli"],
                "ideasB": ["Pieno relax mentale", "Recupero dell'energia fisica"]
            },
            {
                "topic": "Cellulare o computer — quale è più utile nella vita quotidiana?",
                "sideA": "Cellulare",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Portabilità totale", "Avvisi mobili istantanei"],
                "ideasB": ["Schermo di visualizzazione più grande", "Potenti strumenti di lavoro"]
            },
            {
                "topic": "Inviare un messaggio o fare una telefonata — cosa è meglio?",
                "sideA": "Messaggio",
                "sideB": "Chiamata",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Comunicazione asincrona", "Più facile modificare il testo"],
                "ideasB": ["Sentire l'emozione vocale", "Ottenere risultati diretti"]
            },
            {
                "topic": "E-book o libro cartaceo — cosa è meglio leggere?",
                "sideA": "E-book",
                "sideB": "Libro cartaceo",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Risparmiare spazio significativo", "Dizionario integrato"],
                "ideasB": ["Classica sensazione tattile", "Nessuna batteria necessaria"]
            },
            {
                "topic": "Scattare foto con il telefono o con una fotocamera — cosa dà risultati migliori?",
                "sideA": "Telefono",
                "sideB": "Fotocamera",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Massima comodità", "Condivisione sociale diretta"],
                "ideasB": ["Alta qualità ottica", "Controllo manuale professionale"]
            },
            {
                "topic": "Vacanze al mare o vacanze in montagna — cosa è meglio?",
                "sideA": "Mare",
                "sideB": "Montagna",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Atmosfera costiera soleggiata", "Nuotare in acqua calda"],
                "ideasB": ["Migliorare la salute con l'escursionismo", "Splendide viste panoramiche"]
            },
            {
                "topic": "Viaggiare in treno o viaggiare in aereo — cosa è meglio?",
                "sideA": "Treno",
                "sideB": "Aereo",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Percorsi di viaggio panoramici", "Opzione eco-compatibile"],
                "ideasB": ["Massima velocità di viaggio", "Viaggi a lunga distanza"]
            },
            {
                "topic": "Visitare una città famosa o visitare un piccolo villaggio — cosa è più interessante?",
                "sideA": "Città",
                "sideB": "Villaggio",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Monumenti storici", "Vita culturale dinamica"],
                "ideasB": ["Tradizioni locali", "Tranquillo fascino del villaggio"]
            },
            {
                "topic": "Soggiornare in un hotel o presso una famiglia locale — cosa è meglio?",
                "sideA": "Hotel",
                "sideB": "Famiglia locale",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Privacy personale", "Servizio standardizzato"],
                "ideasB": ["Profondo scambio culturale", "Migliore pratica della lingua"]
            },
            {
                "topic": "Viaggiare all'estero o esplorare il proprio paese — cosa vale di più la pena?",
                "sideA": "Estero",
                "sideB": "Proprio paese",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Orizzonti globali", "Nuove lingue"],
                "ideasB": ["Trovare gemme nascoste", "Pianificazione del viaggio più facile"]
            },
            {
                "topic": "Avere molti amici o avere pochi amici stretti — cosa è meglio?",
                "sideA": "Molti amici",
                "sideB": "Amici stretti",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Ampia rete sociale", "Vari hobby di gruppo"],
                "ideasB": ["Profonda lealtà", "Forte legame di fiducia"]
            },
            {
                "topic": "Incontrare gli amici di persona o chattare online — cosa è più soddisfacente?",
                "sideA": "Di persona",
                "sideB": "Online",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Energia personale diretta", "Condividere cibo reale"],
                "ideasB": ["Alta efficienza temporale", "Rimanere facilmente connessi"]
            },
            {
                "topic": "Vivere con i genitori o in un appartamento per studenti — cosa è meglio per i giovani?",
                "sideA": "Genitori",
                "sideB": "Appartamento studenti",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Assistenza finanziaria", "Pasti cucinati in casa"],
                "ideasB": ["Vita sociale vivace", "Costruire l'autosufficienza"]
            },
            {
                "topic": "Festeggiare il compleanno a casa o uscire — cosa è più carino?",
                "sideA": "Casa",
                "sideB": "Uscire",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Tocco caldo personale", "Atmosfera domestica accogliente"],
                "ideasB": ["Nessuna pulizia domestica", "Provare cibo professionale"]
            },
            {
                "topic": "Risparmiare denaro o spendere denaro — cosa è più saggio?",
                "sideA": "Risparmiare",
                "sideB": "Spendere",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Pace mentale futura", "Pianificare grandi acquisti"],
                "ideasB": ["Ricevere gioia istantanea", "Supportare la salute economica"]
            },
            {
                "topic": "Lavorare part-time mentre si studia o concentrarsi solo sulla scuola — cosa è meglio?",
                "sideA": "Part-time",
                "sideB": "Solo scuola",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Indipendenza finanziaria", "Prima esperienza lavorativa"],
                "ideasB": ["Eccellenza accademica", "Minore stress quotidiano"]
            },
            {
                "topic": "Guadagnare molti soldi o avere tempo libero — cosa conta di più?",
                "sideA": "Soldi",
                "sideB": "Tempo libero",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Alta qualità della vita", "Risparmi costanti per la pensione"],
                "ideasB": ["Proteggere la salute mentale", "Famiglia e hobby"]
            },
            {
                "topic": "Vivere con i nonni vs non vivere con loro — cosa è più piacevole?",
                "sideA": "Con i nonni",
                "sideB": "Senza i nonni",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Condividere la saggezza generazionale", "Aiuto extra per i bambini"],
                "ideasB": ["Maggiore privacy domestica", "Ambiente domestico tranquillo"]
            },
            {
                "topic": "Cucina della mamma vs cucina del papà — quale è migliore?",
                "sideA": "Mamma",
                "sideB": "Papà",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Gusto tradizionale di famiglia", "Sapori confortanti"],
                "ideasB": ["Nuove ricette innovative", "Speciali dolcetti del weekend"]
            },
            {
                "topic": "Matematica vs arte — quale materia è più divertente?",
                "sideA": "Matematica",
                "sideB": "Arte",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Risoluzione di problemi complessi", "Focus sulla logica"],
                "ideasB": ["Auto-espressione creativa", "Rilascio emotivo"]
            },
            {
                "topic": "Scrivere su carta vs scrivere su un tablet — cosa è meglio?",
                "sideA": "Carta",
                "sideB": "Tablet",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Memoria fisica della scrittura", "Meglio per la salute degli occhi"],
                "ideasB": ["Comodità di archiviazione", "Utile auto-correzione"]
            },
            {
                "topic": "Pizza vs pasta — cosa è più buono?",
                "sideA": "Pizza",
                "sideB": "Pasta",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Divertente da condividere", "Enorme varietà di condimenti"],
                "ideasB": ["Formati di pasta versatili", "Ricchi sughi deliziosi"]
            },
            {
                "topic": "Gelato vs torta — quale è il dessert migliore?",
                "sideA": "Gelato",
                "sideB": "Torta",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Rinfrescante in estate", "Molti gusti intensi"],
                "ideasB": ["Caldo comfort del dessert", "Sentimento di celebrazione"]
            },
            {
                "topic": "Giorni brevi vs giorni lunghi — cosa è meglio?",
                "sideA": "Giorni brevi",
                "sideB": "Giorni lunghi",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Accoglienti notti serali", "Focus sulla vita al chiuso"],
                "ideasB": ["Ricevere Vitamina D", "Più tempo all'aperto"]
            },
            {
                "topic": "Giorno al parco vs giorno in spiaggia — cosa è meglio?",
                "sideA": "Parco",
                "sideB": "Spiaggia",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Godersi la natura locale", "Posti perfetti per il picnic"],
                "ideasB": ["Rilassante brezza marina", "Intense attività con le onde"]
            },
            {
                "topic": "Aereo vs treno — cosa è più divertente?",
                "sideA": "Aereo",
                "sideB": "Treno",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Volare sopra le nuvole", "Transito molto veloce"],
                "ideasB": ["Godersi il paesaggio in movimento", "Spazio per camminare"]
            },
            {
                "topic": "Doccia al mattino vs doccia alla sera — cosa è meglio?",
                "sideA": "Mattino",
                "sideB": "Sera",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Spinta di energia mentale", "Inizio quotidiano fresco"],
                "ideasB": ["Relax completo", "Mantenere le lenzuola pulite"]
            },
            {
                "topic": "Gatti che buttano giù le cose vs cani che masticano le scarpe — quale animale è più fastidioso?",
                "sideA": "Gatti",
                "sideB": "Cani",
                "level": "elementary",
                "theme": "animals_nature_A2",
                "ideasA": ["Disordine di vetri rotti", "Monelleria giocosa"],
                "ideasB": ["Danni alla proprietà", "Costose riparazioni di scarpe"]
            },
            {
                "topic": "Mangiare la pizza con la forchetta vs con le mani — cosa è corretto?",
                "sideA": "Forchetta",
                "sideB": "Mani",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Etichetta formale a tavola", "Tenere le dita pulite"],
                "ideasB": ["Divertimento diretto con il cibo", "Stile di alimentazione autentico"]
            },
            {
                "topic": "Dormire con le calze vs senza calze — cosa è meglio?",
                "sideA": "Con le calze",
                "sideB": "Senza",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Migliorare la circolazione", "Tenere i piedi caldi"],
                "ideasB": ["Raffreddamento naturale del corpo", "Sensazione naturale della pelle"]
            },
            {
                "topic": "Castello di sabbia vs pupazzo di neve — cosa è più divertente da costruire?",
                "sideA": "Castello di sabbia",
                "sideB": "Pupazzo di neve",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Divertimento estivo in spiaggia", "Focus sul lavoro di dettaglio"],
                "ideasB": ["Magia stagionale invernale", "Divertimento sociale collaborativo"]
            },
            {
                "topic": "Molti esami vs pochissimi esami — cosa è più giusto?",
                "sideA": "Molti esami",
                "sideB": "Pochissimi esami",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Audit completo delle competenze", "Coerenza accademica"],
                "ideasB": ["Intenso focus sui progetti", "Ridurre lo stress degli studenti"]
            },
            {
                "topic": "Iniziare la scuola a 7 anni vs iniziare a 5 anni — cosa è meglio per i bambini?",
                "sideA": "A 7 anni",
                "sideB": "A 5 anni",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Focus sul gioco", "Tenere conto della maturità"],
                "ideasB": ["Alfabetizzazione quotidiana precoce", "Inizio strutturato della vita"]
            },
            {
                "topic": "Mangiare lentamente vs mangiare velocemente — cosa è meglio per te?",
                "sideA": "Lentamente",
                "sideB": "Velocemente",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Digestione molto migliore", "Chiari segnali di sazietà"],
                "ideasB": ["Risparmiare tempo quotidiano", "Abitudini efficienti"]
            },
            {
                "topic": "Cucinare a casa vs ordinare online — cosa è meglio?",
                "sideA": "Cucinare a casa",
                "sideB": "Ordinare online",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Controllo della qualità degli ingredienti", "Sviluppo delle abilità"],
                "ideasB": ["Estrema facilità quotidiana", "Zero sforzo fisico"]
            },
            {
                "topic": "Cucinare vs fare dolci — cosa è più divertente come hobby?",
                "sideA": "Cucinare",
                "sideB": "Pasticceria",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Utilità quotidiana essenziale", "Talento culinario creativo"],
                "ideasB": ["Precisione scientifica", "Dolci ricompense"]
            },
            {
                "topic": "Andare in palestra vs allenarsi all'aperto — cosa è meglio?",
                "sideA": "Palestra",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Attrezzatura standardizzata", "Clima controllato"],
                "ideasB": ["Respirare aria fresca", "Terreno variabile"]
            },
            {
                "topic": "Foto sul telefono vs foto stampate — cosa è meglio?",
                "sideA": "Sul telefono",
                "sideB": "Stampate",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Volume di archiviazione infinito", "Montaggio digitale rapido"],
                "ideasB": ["Storia tattile", "Valore decorativo fisico"]
            },
            {
                "topic": "Smart TV vs schermo del computer — cosa è meglio per guardare film?",
                "sideA": "Smart TV",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Grande vista immersiva", "Migliore qualità audio"],
                "ideasB": ["Privacy personale", "Visione ravvicinata"]
            },
            {
                "topic": "Paese caldo vs paese freddo — quale è la migliore destinazione per le vacanze?",
                "sideA": "Paese caldo",
                "sideB": "Paese freddo",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Relax in spiaggia", "Vibrazioni estive da gelato"],
                "ideasB": ["Benefici per la salute dello sci", "Vedere l'aurora boreale"]
            },
            {
                "topic": "Fare regali vs ricevere regali — cosa è meglio?",
                "sideA": "Fare regali",
                "sideB": "Ricevere regali",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Gioia personale altruistica", "Impatto sociale positivo"],
                "ideasB": ["Sorpresa eccitante", "Sentirsi veramente apprezzati"]
            },
            {
                "topic": "Lavorare al chiuso vs lavorare all'aperto — cosa è meglio?",
                "sideA": "Al chiuso",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Clima controllato", "Spazio di lavoro ergonomico"],
                "ideasB": ["Migliorare la salute fisica", "Godersi panorami mutevoli"]
            },
            {
                "topic": "Ananas sulla pizza vs niente ananas — cosa è corretto?",
                "sideA": "Ananas",
                "sideB": "Niente ananas",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Mix dolce-salato", "Vibrazioni di sapore tropicale"],
                "ideasB": ["Seguire le regole tradizionali", "Evitare scontri di sapore"]
            },
            {
                "topic": "Mettere prima il latte vs mettere prima il tè — cosa è meglio?",
                "sideA": "Prima il latte",
                "sideB": "Prima il tè",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Protegge le proteine del latte", "Temperatura iniziale più fresca"],
                "ideasB": ["Migliore processo di infusione", "Gusto pieno e intenso"]
            },
            {
                "topic": "Lunedì vs Venerdì — quale giorno è effettivamente peggiore?",
                "sideA": "Lunedì",
                "sideB": "Venerdì",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Inizio della settimana lavorativa", "Livelli di energia più bassi"],
                "ideasB": ["Lunga attesa per il weekend", "Fatica di fine lavoro"]
            },
            {
                "topic": "Svegliarsi cinque minuti prima della sveglia vs dormire fino alla sveglia — cosa è più fastidioso?",
                "sideA": "Prima della sveglia",
                "sideB": "Fino alla sveglia",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Riposo interrotto", "Terra di nessuno"],
                "ideasB": ["Effetto shock", "Nessun tempo di preparazione"]
            },
            {
                "topic": "Gatti vs cani — quale animale è segretamente il capo della casa?",
                "sideA": "Gatti",
                "sideB": "Cani",
                "level": "elementary",
                "theme": "animals_nature_A2",
                "ideasA": ["Strategia mentale", "Tranquillo controllo domestico"],
                "ideasB": ["Energia fisica", "Lealtà palese"]
            },
            {
                "topic": "Avere troppo caldo vs avere troppo freddo — cosa è peggio?",
                "sideA": "Troppo caldo",
                "sideB": "Troppo freddo",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Sudorazione e fatica", "Non riuscire a dormire bene"],
                "ideasB": ["Dolore da brividi", "Abbigliamento invernale restrittivo"]
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();