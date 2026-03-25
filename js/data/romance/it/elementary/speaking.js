(function() {
    const speakingData = {
    "it": {
        "opinionArena": [
            {
                "text": "I bambini dovrebbero avere il cellulare?",
                "level": "baby",
                "theme": "technology_A2"
            },
            {
                "text": "È meglio vivere in una casa o in un appartamento?",
                "level": "elementary",
                "theme": "neighbourhood_local_A2"
            }
        ],
        "criticsCorner": [
            {
                "text": "La vita è quello che ti succede mentre sei occupato a fare altri progetti.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            }
        ],
        "debates": [
            {
                "topic": "Uno stipendio alto vs un breve tragitto giornaliero — cosa conta di più in un lavoro?",
                "sideA": "Stipendio alto",
                "sideB": "Breve tragitto",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cambiare spesso lavoro vs restare nella stessa azienda — cosa è meglio per la tua carriera?",
                "sideA": "Cambiare lavoro",
                "sideB": "Restare",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare straordinari vs uscire in orario ogni giorno — qual è l'abitudine migliore?",
                "sideA": "Straordinari",
                "sideB": "In orario",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Un capo severo vs un capo rilassato — con chi è meglio lavorare?",
                "sideA": "Capo severo",
                "sideB": "Capo rilassato",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare in una grande azienda vs una piccola azienda — cosa è meglio?",
                "sideA": "Grande azienda",
                "sideB": "Piccola azienda",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ottenere una promozione vs avere più tempo libero — cosa sceglieresti?",
                "sideA": "Promozione",
                "sideB": "Tempo libero",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Comprare casa vs affittare a vita — qual è la decisione finanziaria più intelligente?",
                "sideA": "Comprare",
                "sideB": "Affittare",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere in centro città vs vivere in periferia — cosa è meglio?",
                "sideA": "Centro città",
                "sideB": "Periferia",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Spendere soldi per esperienze vs per oggetti — cosa ti rende più felice?",
                "sideA": "Esperienze",
                "sideB": "Oggetti",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucinare ogni giorno vs preparare i pasti una volta a settimana — cosa è più pratico?",
                "sideA": "Cucinare ogni giorno",
                "sideB": "Meal prepping",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere una persona per le pulizie vs fare le pulizie da soli — qual è la scelta migliore?",
                "sideA": "Pulizie pro",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere con un partner vs vivere da soli — cosa è meglio per gli adulti?",
                "sideA": "Con partner",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere figli presto vs avere figli più tardi nella vita — cosa è meglio?",
                "sideA": "Presto",
                "sideB": "Più tardi",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Legami familiari stretti vs indipendenza dalla famiglia — cosa è più importante da adulti?",
                "sideA": "Legami stretti",
                "sideB": "Indipendenza",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Incontrare nuove persone vs mantenere le vecchie amicizie — cosa ha più valore?",
                "sideA": "Nuove persone",
                "sideB": "Vecchi amici",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Socializzare dopo il lavoro vs tornare direttamente a casa — cosa è meglio per le relazioni lavorative?",
                "sideA": "Socializzare",
                "sideB": "Tornare a casa",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Andare in palestra vs fare esercizio all'aperto — cosa è meglio per gli adulti?",
                "sideA": "Palestra",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dieta ferrea vs mangiare tutto con moderazione — cosa è più sano?",
                "sideA": "Dieta ferrea",
                "sideB": "Moderazione",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vedere il medico subito vs aspettare per vedere se si migliora — cosa è più saggio?",
                "sideA": "Subito",
                "sideB": "Aspettare",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormire otto ore vs dormire sei ore ma fare esercizio — cosa è meglio per l'energia?",
                "sideA": "8 ore",
                "sideB": "6 ore + sport",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ridurre lo stress attraverso lo sport vs attraverso il relax — cosa funziona meglio?",
                "sideA": "Sport",
                "sideB": "Relax",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smartphone vs conversazione faccia a faccia — cosa usiamo di più, ed è un problema?",
                "sideA": "Smartphone",
                "sideB": "Faccia a faccia",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Banking online vs andare in banca — cosa è meglio?",
                "sideA": "Online",
                "sideB": "Andare in banca",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare con la carta vs lavorare digitalmente — cosa è più efficiente?",
                "sideA": "Carta",
                "sideB": "Digitale",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media per il networking vs incontrare persone di persona — cosa è più utile professionalmente?",
                "sideA": "Social media",
                "sideB": "Di persona",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Viaggio organizzato vs viaggio indipendente — cosa è meglio per gli adulti?",
                "sideA": "Organizzato",
                "sideB": "Indipendente",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Soggiorno in città vs vacanza al mare — qual è il modo migliore per rilassarsi?",
                "sideA": "Città",
                "sideB": "Mare",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Una vacanza lunga all'anno vs diversi brevi soggiorni — cosa è meglio?",
                "sideA": "Una lunga",
                "sideB": "Diverse brevi",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Viaggiare in coppia vs viaggiare da soli — cosa è più piacevole?",
                "sideA": "In coppia",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Raccontare ogni piccolo problema al partner vs tenere le cose per sé — cosa è più sano?",
                "sideA": "Raccontare tutto",
                "sideB": "Tenere per sé",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Controllare il telefono appena svegli vs aspettare dopo colazione — quale è un'abitudine migliore?",
                "sideA": "Appena svegli",
                "sideB": "Dopo colazione",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Conoscere il nome dei vicini vs non conoscerli — qual è l'esperienza adulta più normale oggi?",
                "sideA": "Conoscerli",
                "sideB": "Non conoscerli",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fare la spesa con una lista vs senza lista — quale tipo di persona vive meglio?",
                "sideA": "Con lista",
                "sideB": "Senza lista",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dire al capo che sei malato vs andare al lavoro malato — quale è la scelta più coraggiosa?",
                "sideA": "Dirlo",
                "sideB": "Andare malato",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare a tempo pieno vs lavorare a tempo parziale — cosa è meglio?",
                "sideA": "Tempo pieno",
                "sideB": "Tempo parziale",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare in ufficio vs lavorare da casa — cosa preferisci?",
                "sideA": "Ufficio",
                "sideB": "Casa",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Un lavoro che ami vs un lavoro che paga bene — cosa è più importante?",
                "sideA": "Lavoro amato",
                "sideB": "Paga bene",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare con altre persone vs lavorare da soli — cosa è meglio?",
                "sideA": "Con altri",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Un tragitto breve vs un tragitto lungo — cosa è più accettabile?",
                "sideA": "Breve",
                "sideB": "Lungo",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere da soli vs vivere con un partner — cosa è meglio?",
                "sideA": "Da soli",
                "sideB": "Partner",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Grande città vs piccola città — qual è il posto migliore dove vivere da adulti?",
                "sideA": "Grande città",
                "sideB": "Piccola città",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucinare a casa vs mangiare fuori — cosa è meglio per la vita quotidiana?",
                "sideA": "A casa",
                "sideB": "Fuori",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere figli vs non avere figli — quale vita è migliore?",
                "sideA": "Figli",
                "sideB": "Niente figli",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Affittare un appartamento vs comprare una casa — cosa è meglio per i giovani adulti?",
                "sideA": "Affittare",
                "sideB": "Comprare",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Esercizio ogni giorno vs riposo — cosa è meglio per la tua salute?",
                "sideA": "Esercizio",
                "sideB": "Riposo",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Andare dal medico vs aspettare — cosa è meglio quando ti senti male?",
                "sideA": "Medico",
                "sideB": "Aspettare",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormire otto ore vs dormire meno — cosa è più realistico per gli adulti?",
                "sideA": "8 ore",
                "sideB": "Meno",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Andare al lavoro a piedi vs prendere l'auto — cosa è meglio per la tua salute?",
                "sideA": "A piedi",
                "sideB": "Auto",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acquisti online vs acquisti in un negozio — cosa preferisci?",
                "sideA": "Online",
                "sideB": "Negozio",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Risparmiare per il futuro vs godersi i soldi ora — cosa è più saggio?",
                "sideA": "Risparmiare",
                "sideB": "Godersi ora",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cose costose vs cose economiche — cosa ha il miglior valore?",
                "sideA": "Costose",
                "sideB": "Economiche",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Comprare nuovo vs comprare di seconda mano — cosa è meglio?",
                "sideA": "Nuovo",
                "sideB": "Seconda mano",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Guardare la TV a casa vs uscire — qual è la serata migliore?",
                "sideA": "TV",
                "sideB": "Uscire",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacanze in famiglia vs vacanze con amici — cosa è meglio?",
                "sideA": "Famiglia",
                "sideB": "Amici",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rimanere nel proprio paese vs viaggiare all'estero — qual è la vacanza migliore?",
                "sideA": "Proprio paese",
                "sideB": "Estero",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport vs lettura — qual è il miglior hobby per gli adulti?",
                "sideA": "Sport",
                "sideB": "Lettura",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vedere spesso gli amici vs avere tempo da soli — cosa è più importante?",
                "sideA": "Amici",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rispondere alle email immediatamente vs lasciarle per dopo — cosa è più professionale?",
                "sideA": "Immediatamente",
                "sideB": "Dopo",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavare i piatti immediatamente vs lasciarli fino a domani — cosa è meglio?",
                "sideA": "Immediatamente",
                "sideB": "Domani",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Essere sempre in anticipo vs sempre cinque minuti in ritardo — cosa è peggio al lavoro?",
                "sideA": "Anticipo",
                "sideB": "Ritardo",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere una scrivania molto organizzata vs una scrivania disordinata — quale persona è più produttiva?",
                "sideA": "Organizzata",
                "sideB": "Disordinata",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Parlare di lavoro a cena vs niente chiacchiere di lavoro a cena — quale regola è migliore?",
                "sideA": "Parlare di lavoro",
                "sideB": "Niente lavoro",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere in famiglia vs Da soli — cosa è meglio?",
                "sideA": "In famiglia",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere un fratello vs una sorella — cosa è meglio?",
                "sideA": "Fratello",
                "sideB": "Sorella",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Famiglia grande vs piccola — quale è più bella?",
                "sideA": "Grande",
                "sideB": "Piccola",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Il più grande vs Il più piccolo — cosa è meglio?",
                "sideA": "Grande",
                "sideB": "Piccolo",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scuola di mattina vs pomeriggio — cosa è meglio?",
                "sideA": "Mattina",
                "sideB": "Pomeriggio",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lettura vs Matematica — quale è più divertente?",
                "sideA": "Lettura",
                "sideB": "Matematica",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scuola vs Casa — cosa è meglio?",
                "sideA": "Scuola",
                "sideB": "Casa",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Compiti vs Niente compiti — cosa aiuta di più?",
                "sideA": "Compiti",
                "sideB": "Niente",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Da soli vs In coppia — cosa preferisci?",
                "sideA": "Da soli",
                "sideB": "Coppia",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Carta vs Computer — cosa è meglio?",
                "sideA": "Carta",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Colazione vs Cena — quale pasto è più importante?",
                "sideA": "Colazione",
                "sideB": "Cena",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cibo caldo vs freddo — cosa è meglio?",
                "sideA": "Caldo",
                "sideB": "Freddo",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Casa vs Ristorante — cosa è meglio?",
                "sideA": "Casa",
                "sideB": "Ristorante",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dolce vs Salato — cosa preferisci?",
                "sideA": "Dolce",
                "sideB": "Salato",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucinare vs Comprare — cosa è più bello?",
                "sideA": "Cucinare",
                "sideB": "Comprare",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Svegliarsi presto vs tardi — cosa è meglio?",
                "sideA": "Presto",
                "sideB": "Tardi",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mattina vs Sera — quale parte del giorno è più bella?",
                "sideA": "Mattina",
                "sideB": "Sera",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giorni feriali vs Fine settimana — cosa preferisci?",
                "sideA": "Feriali",
                "sideB": "Fine settimana",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Estate vs Inverno — quale stagione è migliore?",
                "sideA": "Estate",
                "sideB": "Inverno",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Andare a letto presto vs tardi — cosa è più salutare?",
                "sideA": "Presto",
                "sideB": "Tardi",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Casa vs Appartamento — cosa è meglio?",
                "sideA": "Casa",
                "sideB": "Appartamento",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Città vs Campagna — quale è un posto migliore dove vivere?",
                "sideA": "Città",
                "sideB": "Campagna",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Camera vs Soggiorno — quale stanza preferisci?",
                "sideA": "Camera",
                "sideB": "Soggiorno",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giochi al chiuso vs all'aperto — quali sono più divertenti?",
                "sideA": "Chiuso",
                "sideB": "Aperto",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "TV vs Libro — cosa è meglio?",
                "sideA": "TV",
                "sideB": "Libro",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport vs Videogioco — quale è più divertente?",
                "sideA": "Sport",
                "sideB": "Videogioco",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Disegno vs Canto — quale hobby è migliore?",
                "sideA": "Disegno",
                "sideB": "Canto",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giocare da soli vs con amici — quale è più divertente?",
                "sideA": "Soli",
                "sideB": "Amici",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Nuoto vs Corsa — quale sport preferisci?",
                "sideA": "Nuoto",
                "sideB": "Corsa",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Musica vs Sport — quale è un hobby migliore?",
                "sideA": "Musica",
                "sideB": "Sport",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Animali da fattoria vs selvatici — quali sono più interessanti?",
                "sideA": "Fattoria",
                "sideB": "Selvatici",
                "level": "elementary",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pioggia vs Sole — quale tempo preferisci?",
                "sideA": "Pioggia",
                "sideB": "Sole",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mare vs Montagna — quale è meglio per una vacanza?",
                "sideA": "Mare",
                "sideB": "Montagna",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fiori vs Alberi — quali sono più belli?",
                "sideA": "Fiori",
                "sideB": "Alberi",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Auto vs Autobus — cosa è meglio?",
                "sideA": "Auto",
                "sideB": "Autobus",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Camminare vs Bici — con cosa è meglio spostarsi?",
                "sideA": "Camminare",
                "sideB": "Bici",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacanze brevi vs lunghe — cosa è meglio?",
                "sideA": "Brevi",
                "sideB": "Lunghe",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Viaggiare soli vs in famiglia — quale è più divertente?",
                "sideA": "Soli",
                "sideB": "Famiglia",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acquisti online vs Acquisti di persona",
                "sideA": "Online",
                "sideB": "Di persona",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [
                    "Comodità",
                    "Prezzi migliori"
                ],
                "ideasB": [
                    "Provare gli articoli",
                    "Gratificazione istantanea"
                ]
            },
            {
                "topic": "Libri cartacei vs E-book",
                "sideA": "Carta",
                "sideB": "E-book",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [
                    "Odore/Sensazione",
                    "Collezionabile"
                ],
                "ideasB": [
                    "Portability",
                    "Risparmio di spazio"
                ]
            },
            {
                "topic": "Studiare la mattina o studiare la sera — quando è meglio?",
                "sideA": "Mattina",
                "sideB": "Sera",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Insegnanti severi o insegnanti amichevoli — chi aiuta di più gli studenti?",
                "sideA": "Severi",
                "sideB": "Amichevoli",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Imparare con un libro di testo o imparare con i video — cosa è più efficace?",
                "sideA": "Libro",
                "sideB": "Video",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lezioni brevi o lezioni lunghe — quali aiutano a imparare meglio?",
                "sideA": "Brevi",
                "sideB": "Lunghe",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Progetti di gruppo o compiti individuali — cosa preferisci?",
                "sideA": "Gruppo",
                "sideB": "Individuale",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Uniforme scolastica o vestiti casual a scuola — cosa è meglio?",
                "sideA": "Uniforme",
                "sideB": "Casual",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pasti cucinati in casa o fast food — cosa è meglio?",
                "sideA": "In casa",
                "sideB": "Fast food",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tre pasti abbondanti o molti piccoli spuntini — cosa è più sano?",
                "sideA": "Grandi pasti",
                "sideB": "Spuntini",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cibo vegetariano o carne — quale dieta è migliore?",
                "sideA": "Vegetariano",
                "sideB": "Carne",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bere tè o bere caffè — cosa è meglio?",
                "sideA": "Tè",
                "sideB": "Caffè",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mangiare da soli o mangiare con altri — cosa preferisci?",
                "sideA": "Da soli",
                "sideB": "Con altri",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Praticare uno sport di squadra o uno sport individuale — cosa è meglio?",
                "sideA": "Sport di squadra",
                "sideB": "Sport individuale",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Passare il tempo libero al chiuso o all'aperto — cosa è meglio?",
                "sideA": "Al chiuso",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinema o teatro — quale è la migliore serata fuori?",
                "sideA": "Cinema",
                "sideB": "Teatro",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ascoltare musica o suonare uno strumento — cosa è più piacevole?",
                "sideA": "Ascoltare",
                "sideB": "Suonare",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Videogiochi o giochi da tavolo — quali sono più divertenti?",
                "sideA": "Videogiochi",
                "sideB": "Giochi da tavolo",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fare shopping o restare a casa — quale è il modo migliore per trascorrere il fine settimana?",
                "sideA": "Shopping",
                "sideB": "Restare a casa",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cellulare o computer — quale è più utile nella vita quotidiana?",
                "sideA": "Cellulare",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Inviare un messaggio o fare una telefonata — cosa è meglio?",
                "sideA": "Messaggio",
                "sideB": "Chiamata",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "E-book o libro cartaceo — cosa preferisci leggere?",
                "sideA": "E-book",
                "sideB": "Libro cartaceo",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scattare foto con il telefono o con una fotocamera — cosa dà risultati migliori?",
                "sideA": "Telefono",
                "sideB": "Fotocamera",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacanze al mare o vacanze in montagna — cosa è meglio?",
                "sideA": "Mare",
                "sideB": "Montagna",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Viaggiare in treno o viaggiare in aereo — cosa è meglio?",
                "sideA": "Treno",
                "sideB": "Aereo",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Visitare una città famosa o visitare un piccolo villaggio — cosa è più interessante?",
                "sideA": "Città",
                "sideB": "Villaggio",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Soggiornare in un hotel o presso una famiglia locale — cosa preferisci?",
                "sideA": "Hotel",
                "sideB": "Famiglia locale",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Viaggiare all'estero o esplorare il proprio paese — cosa vale di più la pena?",
                "sideA": "Estero",
                "sideB": "Proprio paese",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere molti amici o avere pochi amici stretti — cosa è meglio?",
                "sideA": "Molti amici",
                "sideB": "Amici stretti",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Incontrare gli amici di persona o chattare online — cosa è più soddisfacente?",
                "sideA": "Di persona",
                "sideB": "Online",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere con i genitori o in un appartamento per studenti — cosa è meglio per i giovani?",
                "sideA": "Genitori",
                "sideB": "Appartamento studenti",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Festeggiare il compleanno a casa o uscire — cosa è più carino?",
                "sideA": "Casa",
                "sideB": "Uscire",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Risparmiare denaro o spendere denaro — cosa è più saggio?",
                "sideA": "Risparmiare",
                "sideB": "Spendere",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare part-time mentre si studia o concentrarsi solo sulla scuola — cosa è meglio?",
                "sideA": "Part-time",
                "sideB": "Solo scuola",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Guadagnare molti soldi o avere tempo libero — cosa conta di più?",
                "sideA": "Soldi",
                "sideB": "Tempo libero",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere con i nonni vs non vivere con loro — cosa è più piacevole?",
                "sideA": "Con i nonni",
                "sideB": "Senza i nonni",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucina della mamma vs cucina del papà — quale è migliore?",
                "sideA": "Mamma",
                "sideB": "Papà",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Matematica vs arte — quale materia è più divertente?",
                "sideA": "Matematica",
                "sideB": "Arte",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scrivere su carta vs scrivere su un tablet — cosa è meglio?",
                "sideA": "Carta",
                "sideB": "Tablet",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pizza vs pasta — cosa è più buono?",
                "sideA": "Pizza",
                "sideB": "Pasta",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gelato vs torta — quale è il dessert migliore?",
                "sideA": "Gelato",
                "sideB": "Torta",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giorni brevi vs giorni lunghi — cosa è meglio?",
                "sideA": "Giorni brevi",
                "sideB": "Giorni lunghi",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giorno al parco vs giorno in spiaggia — cosa è meglio?",
                "sideA": "Parco",
                "sideB": "Spiaggia",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aereo vs treno — cosa è più divertente?",
                "sideA": "Aereo",
                "sideB": "Treno",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Doccia al mattino vs doccia alla sera — cosa è meglio?",
                "sideA": "Mattino",
                "sideB": "Sera",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gatti che buttano giù le cose vs cani che masticano le scarpe — quale animale è più fastidioso?",
                "sideA": "Gatti",
                "sideB": "Cani",
                "level": "elementary",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mangiare la pizza con la forchetta vs con le mani — cosa è corretto?",
                "sideA": "Forchetta",
                "sideB": "Mani",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormire con le calze vs senza calze — cosa è meglio?",
                "sideA": "Con le calze",
                "sideB": "Senza",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Castello di sabbia vs pupazzo di neve — cosa è più divertente da costruire?",
                "sideA": "Castello di sabbia",
                "sideB": "Pupazzo di neve",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Molti esami vs pochissimi esami — cosa è più giusto?",
                "sideA": "Molti esami",
                "sideB": "Pochissimi esami",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Iniziare la scuola a 7 anni vs iniziare a 5 anni — cosa è meglio per i bambini?",
                "sideA": "A 7 anni",
                "sideB": "A 5 anni",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mangiare lentamente vs mangiare velocemente — cosa è meglio per te?",
                "sideA": "Lentamente",
                "sideB": "Velocemente",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucinare a casa vs ordinare online — cosa è meglio?",
                "sideA": "Cucinare a casa",
                "sideB": "Ordinare online",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucinare vs fare dolci — cosa è più divertente come hobby?",
                "sideA": "Cucinare",
                "sideB": "Pasticceria",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Andare in palestra vs allenarsi all'aperto — cosa è meglio?",
                "sideA": "Palestra",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Foto sul telefono vs foto stampate — cosa è meglio?",
                "sideA": "Sul telefono",
                "sideB": "Stampate",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smart TV vs schermo del computer — cosa è meglio per guardare film?",
                "sideA": "Smart TV",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Paese caldo vs paese freddo — quale è la migliore destinazione per le vacanze?",
                "sideA": "Paese caldo",
                "sideB": "Paese freddo",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fare regali vs ricevere regali — cosa preferisci?",
                "sideA": "Fare regali",
                "sideB": "Ricevere regali",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare al chiuso vs lavorare all'aperto — cosa è meglio?",
                "sideA": "Al chiuso",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ananas sulla pizza vs niente ananas — cosa è corretto?",
                "sideA": "Ananas",
                "sideB": "Niente ananas",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mettere prima il latte vs mettere prima il tè — cosa è meglio?",
                "sideA": "Prima il latte",
                "sideB": "Prima il tè",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lunedì vs Venerdì — quale giorno è effettivamente peggiore?",
                "sideA": "Lunedì",
                "sideB": "Venerdì",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Svegliarsi cinque minuti prima della sveglia vs dormire fino alla sveglia — cosa è più fastidioso?",
                "sideA": "Prima della sveglia",
                "sideB": "Fino alla sveglia",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gatti vs cani — quale animale è segretamente il capo della casa?",
                "sideA": "Gatti",
                "sideB": "Cani",
                "level": "elementary",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere troppo caldo vs avere troppo freddo — cosa è peggio?",
                "sideA": "Troppo caldo",
                "sideB": "Troppo freddo",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "L'ultima vacanza che ho fatto",
                "level": "elementary",
                "theme": "transport_travel_A2"
            }
        ]
    }
};

    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["it"]) window.speakingData["it"] = {};

    for (const cat in speakingData["it"]) {
        if (!window.speakingData["it"][cat]) window.speakingData["it"][cat] = [];
        window.speakingData["it"][cat].push(...speakingData["it"][cat]);
    }
})();
