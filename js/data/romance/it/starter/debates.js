(function() {
    const data = [{
                "topic": "Caffè vs tè — cosa è meglio?",
                "sideA": "Caffè",
                "sideB": "Tè",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Ti dà energia", "Ha un buon profumo"],
                "ideasB": ["È molto sano", "Ti aiuta a rilassarti"]
            },
            {
                "topic": "Ristorante vs cucina casalinga — cosa è meglio?",
                "sideA": "Ristorante",
                "sideB": "Cucina casalinga",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Niente piatti da lavare", "Chef professionisti"],
                "ideasB": ["È più economico", "È più sano"]
            },
            {
                "topic": "Colazione vs niente colazione — cosa è meglio?",
                "sideA": "Colazione",
                "sideB": "Niente colazione",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Energia per il mattino", "Inizia bene la giornata"],
                "ideasB": ["Risparmia tempo", "Non ho fame"]
            },
            {
                "topic": "Acqua vs succo — cosa è meglio?",
                "sideA": "Acqua",
                "sideB": "Succo",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Zero calorie", "Molto sana"],
                "ideasB": ["Gusto dolce", "Buone vitamine"]
            },
            {
                "topic": "Carne vs verdure — cosa è più importante?",
                "sideA": "Carne",
                "sideB": "Verdure",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Molte proteine", "Molto gustosa"],
                "ideasB": ["Molte vitamine", "Fa bene alla salute"]
            },
            {
                "topic": "Casa vs appartamento — cosa è meglio?",
                "sideA": "Casa",
                "sideB": "Appartamento",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Più spazio", "Un giardino privato"],
                "ideasB": ["È più sicuro", "Facile da pulire"]
            },
            {
                "topic": "Città vs campagna — cosa è meglio?",
                "sideA": "Città",
                "sideB": "Campagna",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Negozi e cinema", "Molte persone"],
                "ideasB": ["Posto tranquillo", "Aria pulita"]
            },
            {
                "topic": "Contanti vs carta — cosa è meglio?",
                "sideA": "Contanti",
                "sideB": "Carta",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Facile vedere i soldi", "Nessuna tecnologia"],
                "ideasB": ["Molto veloce", "Sicura da portare"]
            },
            {
                "topic": "Risparmiare vs spendere — cosa è meglio?",
                "sideA": "Risparmiare",
                "sideB": "Spendere",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Bene per il futuro", "Comprare grandi cose"],
                "ideasB": ["Divertente ora", "Aiuta i negozi"]
            },
            {
                "topic": "Affittare vs comprare — cosa è meglio?",
                "sideA": "Affittare",
                "sideB": "Comprare",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["È flessibile", "Nessuna riparazione"],
                "ideasB": ["È tua", "Buon investimento"]
            },
            {
                "topic": "Lavoro al mattino vs lavoro alla sera — cosa è meglio?",
                "sideA": "Mattino",
                "sideB": "Sera",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Finisci presto", "Sera libera"],
                "ideasB": ["Dormi fino a tardi", "Tempo tranquillo"]
            },
            {
                "topic": "Auto vs autobus — cosa è meglio?",
                "sideA": "Auto",
                "sideB": "Autobus",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Privata e veloce", "Vai ovunque"],
                "ideasB": ["È economico", "Bene per la natura"]
            },
            {
                "topic": "Camminare vs guidare — cosa è meglio?",
                "sideA": "Camminare",
                "sideB": "Guidare",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["È gratis", "Buon esercizio"],
                "ideasB": ["Niente pioggia", "Molto comodo"]
            },
            {
                "topic": "Ufficio vs casa — cosa è meglio per lavorare?",
                "sideA": "Ufficio",
                "sideB": "Casa",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Vedi gli amici", "Più concentrazione"],
                "ideasB": ["Niente viaggi", "Vestiti comodi"]
            },
            {
                "topic": "Persona mattutina vs persona notturna — cosa è meglio?",
                "sideA": "Mattutina",
                "sideB": "Notturna",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Vedi il sole", "Tempo tranquillo"],
                "ideasB": ["Tempo creativo", "Niente rumore"]
            },
            {
                "topic": "Estate vs inverno — cosa è meglio?",
                "sideA": "Estate",
                "sideB": "Inverno",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Tempo di spiaggia", "Tempo soleggiato"],
                "ideasB": ["Neve", "Cioccolata calda"]
            },
            {
                "topic": "Vacanza breve vs vacanza lunga — cosa è meglio?",
                "sideA": "Breve",
                "sideB": "Lunga",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Facile da pianificare", "Molti viaggi"],
                "ideasB": ["Rilassati di più", "Vedi più posti"]
            },
            {
                "topic": "Telefonata vs messaggio — cosa è meglio?",
                "sideA": "Chiamata",
                "sideB": "Messaggio",
                "level": "starter",
                "theme": "basic_technology_devices_A1",
                "ideasA": ["Senti la voce", "È più veloce"],
                "ideasB": ["Pensa prima di scrivere", "Leggi dopo"]
            },
            {
                "topic": "Doccia al mattino vs doccia alla sera — cosa è meglio?",
                "sideA": "Mattino",
                "sideB": "Sera",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Ti sveglia", "Inizia fresco"],
                "ideasB": ["Aiuta a rilassarsi", "Letto pulito"]
            },
            {
                "topic": "Lunedì vs venerdì — cosa è meglio?",
                "sideA": "Lunedì",
                "sideB": "Venerdì",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Inizia progetti", "Nuova settimana"],
                "ideasB": ["Fine settimana in arrivo", "Tempo di festa"]
            },
            {
                "topic": "Troppo caldo vs troppo freddo — cosa è peggio?",
                "sideA": "Troppo caldo",
                "sideB": "Troppo freddo",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Non si può dormire", "Troppo sole"],
                "ideasB": ["Servono molti vestiti", "Si congela"]
            },
            {
                "topic": "Posto finestrino vs posto corridoio — cosa è meglio?",
                "sideA": "Finestrino",
                "sideB": "Corridoio",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Vedi le nuvole", "Fai foto"],
                "ideasB": ["Facile camminare", "Più spazio"]
            },
            {
                "topic": "Rosso vs Blu — cosa è meglio?",
                "sideA": "Rosso",
                "sideB": "Blu",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Colore forte", "Amore"],
                "ideasB": ["Colore calmo", "Mare e cielo"]
            },
            {
                "topic": "Giallo vs Verde — cosa è più felice?",
                "sideA": "Giallo",
                "sideB": "Verde",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Come il sole", "Luminoso"],
                "ideasB": ["Colore della natura", "Come gli alberi"]
            },
            {
                "topic": "Nero vs Bianco — cosa è meglio?",
                "sideA": "Nero",
                "sideB": "Bianco",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Elegante", "Sta bene con tutto"],
                "ideasB": ["Pulito", "Luminoso"]
            },
            {
                "topic": "Rosa vs Viola — cosa è meglio?",
                "sideA": "Rosa",
                "sideB": "Viola",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Colore carino", "Fiori"],
                "ideasB": ["Colore reale", "Bel frutto"]
            },
            {
                "topic": "Numeri grandi vs piccoli — cosa è più divertente?",
                "sideA": "Grandi",
                "sideB": "Piccoli",
                "level": "starter",
                "theme": "numbers_0_9_A1",
                "ideasA": ["Più soldi", "Grandi conteggi"],
                "ideasB": ["Facile da imparare", "Veloce"]
            },
            {
                "topic": "Palla vs Bambola — cosa è meglio?",
                "sideA": "Palla",
                "sideB": "Bambola",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Gioca con gli amici", "Sport"],
                "ideasB": ["Racconta storie", "Decorazione"]
            },
            {
                "topic": "Matita vs Penna — cosa è meglio?",
                "sideA": "Matita",
                "sideB": "Penna",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Puoi cancellare", "Bene per disegnare"],
                "ideasB": ["Permanente", "Scrittura pulita"]
            },
            {
                "topic": "Libro vs Immagine — cosa è meglio?",
                "sideA": "Libro",
                "sideB": "Immagine",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Leggi storie", "Nessuna batteria"],
                "ideasB": ["Veloce da vedere", "Bello"]
            },
            {
                "topic": "Sedia vs Pavimento — cosa è meglio?",
                "sideA": "Sedia",
                "sideB": "Pavimento",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Bene per la schiena", "Lavoro al tavolo"],
                "ideasB": ["Molto spazio", "Relax"]
            },
            {
                "topic": "Gatto vs Cane — cosa è meglio?",
                "sideA": "Gatto",
                "sideB": "Cane",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Indipendente", "Tranquillo"],
                "ideasB": ["Amico fedele", "Gioca fuori"]
            },
            {
                "topic": "Pesce vs Uccello — cosa è meglio?",
                "sideA": "Pesce",
                "sideB": "Uccello",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Colori bellissimi", "Cura facile"],
                "ideasB": ["Può cantare", "Suoni felici"]
            },
            {
                "topic": "Animali grandi vs piccoli — cosa è meglio?",
                "sideA": "Grandi",
                "sideB": "Piccoli",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Forti", "Interessanti"],
                "ideasB": ["Carini", "Piccolo spazio"]
            },
            {
                "topic": "Coniglio vs Criceto — cosa è meglio?",
                "sideA": "Coniglio",
                "sideB": "Criceto",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Orecchie lunghe", "Morbido"],
                "ideasB": ["Piccolo", "Bello da guardare"]
            },
            {
                "topic": "Mela vs Banana — cosa è meglio?",
                "sideA": "Mela",
                "sideB": "Banana",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Croccante", "Dolce"],
                "ideasB": ["Facile da sbucciare", "Morbida"]
            },
            {
                "topic": "Pane vs Riso — cosa è meglio?",
                "sideA": "Pane",
                "sideB": "Riso",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Molti tipi", "Panini"],
                "ideasB": ["Sano", "Buono con la carne"]
            },
            {
                "topic": "Latte vs Acqua — cosa è meglio?",
                "sideA": "Latte",
                "sideB": "Acqua",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Calcio", "Bene per le ossa"],
                "ideasB": ["Fresco", "Base"]
            },
            {
                "topic": "Rosa vs Arancione — cosa è meglio?",
                "sideA": "Rosa",
                "sideB": "Arancione",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Colore carino", "Fiori"],
                "ideasB": ["Luminoso", "Come il frutto"]
            },
            {
                "topic": "Sedia vs divano — cosa è meglio?",
                "sideA": "Sedia",
                "sideB": "Divano",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Bene per la schiena", "Formale"],
                "ideasB": ["Molto morbido", "Guarda la TV"]
            },
            {
                "topic": "Borsa vs scatola — cosa è meglio?",
                "sideA": "Borsa",
                "sideB": "Scatola",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Facile da portare", "Per la scuola"],
                "ideasB": ["Per i giocattoli", "Protegge le cose"]
            },
            {
                "topic": "Leone vs elefante — cosa è meglio?",
                "sideA": "Leone",
                "sideB": "Elefante",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Re", "Forte"],
                "ideasB": ["Orecchie grandi", "Molto intelligente"]
            },
            {
                "topic": "Cucchiaio vs forchetta — cosa è meglio?",
                "sideA": "Cucchiaio",
                "sideB": "Forchetta",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Per la zuppa", "Facile"],
                "ideasB": ["Per la pasta", "Carne"]
            },
            {
                "topic": "Cappello vs scarpe — cosa è meglio?",
                "sideA": "Cappello",
                "sideB": "Scarpe",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Stile cool", "Protezione solare"],
                "ideasB": ["Proteggi i piedi", "Per camminare"]
            },
            {
                "topic": "Sole vs luna — cosa è meglio?",
                "sideA": "Sole",
                "sideB": "Luna",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Caldo", "Luce"],
                "ideasB": ["Bellissima", "Luce notturna"]
            },
            {
                "topic": "Calze vs senza calze — cosa è meglio?",
                "sideA": "Calze",
                "sideB": "Senza calze",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Piedi caldi", "Comode"],
                "ideasB": ["Piedi freschi", "Estate"]
            },
            {
                "topic": "Vivere con la famiglia vs vivere da soli — cosa è meglio?",
                "sideA": "Famiglia",
                "sideB": "Da soli",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Mai soli", "Aiuto con il cibo"],
                "ideasB": ["Pace", "Le tue regole"]
            },
            {
                "topic": "Avere un fratello vs avere una sorella — cosa è meglio?",
                "sideA": "Fratello",
                "sideB": "Sorella",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Gioca ai giochi", "Protezione"],
                "ideasB": ["Condividi segreti", "Gentile"]
            },
            {
                "topic": "Famiglia numerosa vs piccola famiglia — cosa è meglio?",
                "sideA": "Famiglia numerosa",
                "sideB": "Piccola famiglia",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Casa occupata", "Molti amici"],
                "ideasB": ["Tranquilla", "Più spazio"]
            },
            {
                "topic": "Essere il figlio maggiore vs essere il minore — cosa è meglio?",
                "sideA": "Maggiore",
                "sideB": "Minore",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Leader", "Responsabile"],
                "ideasB": ["Ricevi aiuto", "Rilassato"]
            },
            {
                "topic": "Scuola al mattino vs scuola al pomeriggio — cosa è meglio?",
                "sideA": "Mattino",
                "sideB": "Pomeriggio",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Pomeriggio libero", "Routine"],
                "ideasB": ["Dormi fino a tardi", "Mattina tranquilla"]
            },
            {
                "topic": "Lettura vs matematica — cosa è più divertente?",
                "sideA": "Lettura",
                "sideB": "Matematica",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Storie", "Nuove parole"],
                "ideasB": ["Logica", "Numbers"]
            },
            {
                "topic": "Imparare a scuola vs imparare a casa — cosa è meglio?",
                "sideA": "Scuola",
                "sideB": "Casa",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Amici", "Insegnante"],
                "ideasB": ["Rilassato", "Nessun viaggio"]
            },
            {
                "topic": "Fare i compiti vs non fare i compiti — cosa ti aiuta di più?",
                "sideA": "Compiti",
                "sideB": "Niente compiti",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Pratica", "Impara di più"],
                "ideasB": ["Più gioco", "Meno stress"]
            },
            {
                "topic": "Lavorare da soli vs lavorare con un partner — cosa è meglio?",
                "sideA": "Da soli",
                "sideB": "Partner",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Concentrazione", "Veloce"],
                "ideasB": ["Idee condivise", "Divertente"]
            },
            {
                "topic": "Scrivere su carta vs scrivere al computer — cosa è meglio?",
                "sideA": "Carta",
                "sideB": "Computer",
                "level": "starter",
                "theme": "basic_technology_devices_A1",
                "ideasA": ["Nessuno schermo", "Facile"],
                "ideasB": ["Veloce", "Corregge l'ortografia"]
            },
            {
                "topic": "Colazione vs cena — cosa è più importante?",
                "sideA": "Colazione",
                "sideB": "Cena",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Energia mattutina", "Inizia la giornata"],
                "ideasB": ["Tempo in famiglia", "Pasto abbondante"]
            },
            {
                "topic": "Cibo caldo vs cibo freddo — cosa è meglio?",
                "sideA": "Caldo",
                "sideB": "Freddo",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Inverno", "Gustoso"],
                "ideasB": ["Estate", "Insalata"]
            },
            {
                "topic": "Cibo dolce vs cibo salato — cosa è meglio?",
                "sideA": "Dolce",
                "sideB": "Salato",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Delizioso", "Dolcetto"],
                "ideasB": ["Cibo vero", "Sale"]
            },
            {
                "topic": "Cucinare con un genitore vs comprare cibo pronto — cosa è meglio?",
                "sideA": "Cucinare",
                "sideB": "Pronto",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Impara abilità", "Divertente"],
                "ideasB": ["Veloce", "Niente disordine"]
            },
            {
                "topic": "Svegliarsi presto vs svegliarsi tardi — cosa è meglio?",
                "sideA": "Presto",
                "sideB": "Tardi",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Più tempo", "Produttivo"],
                "ideasB": ["Più sonno", "Rilassato"]
            },
            {
                "topic": "Mattina vs sera — cosa è meglio?",
                "sideA": "Mattina",
                "sideB": "Sera",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Fresco", "Sole"],
                "ideasB": ["Tranquillo", "Riposo"]
            },
            {
                "topic": "Giorni feriali vs fine settimana — cosa è meglio?",
                "sideA": "Feriali",
                "sideB": "Fine settimana",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Routine", "Scuola"],
                "ideasB": ["Divertimento", "Hobby"]
            },
            {
                "topic": "Andare a letto presto vs stare alzati fino a tardi — cosa è più sano?",
                "sideA": "Presto",
                "sideB": "Tardi",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Sano", "Riposato"],
                "ideasB": ["Divertente", "Film"]
            },
            {
                "topic": "La tua camera da letto vs il soggiorno — cosa è meglio?",
                "sideA": "Camera",
                "sideB": "Soggiorno",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Privacy", "Le tue cose"],
                "ideasB": ["Grande TV", "Divano"]
            },
            {
                "topic": "Giochi al chiuso vs giochi all'aperto — cosa è più divertente?",
                "sideA": "Al chiuso",
                "sideB": "All'aperto",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Niente pioggia", "Giochi da tavolo"],
                "ideasB": ["Sole", "Corsa"]
            },
            {
                "topic": "Guardare la TV vs leggere un libro — cosa è meglio?",
                "sideA": "TV",
                "sideB": "Libro",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Relax", "Visivo"],
                "ideasB": ["Immagina", "Profondo"]
            },
            {
                "topic": "Fare sport vs giocare ai videogiochi — cosa è più divertente?",
                "sideA": "Sport",
                "sideB": "Videogiochi",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Sano", "Attivo"],
                "ideasB": ["Abilità", "Storia"]
            },
            {
                "topic": "Disegnare vs cantare — cosa è meglio?",
                "sideA": "Disegnare",
                "sideB": "Cantare",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Crea arte", "Tranquillo"],
                "ideasB": ["Usa la voce", "Musica"]
            },
            {
                "topic": "Giocare da soli vs giocare con gli amici — cosa è più divertente?",
                "sideA": "Da soli",
                "sideB": "Amici",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Concentrazione", "Creativo"],
                "ideasB": ["Condividi", "Ridi"]
            },
            {
                "topic": "Nuotare vs correre — cosa è meglio?",
                "sideA": "Nuotare",
                "sideB": "Correre",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Acqua fresca", "Corpo intero"],
                "ideasB": ["Aria fresca", "Facile"]
            },
            {
                "topic": "Musica vs sport — cosa è meglio?",
                "sideA": "Musica",
                "sideB": "Sport",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Ascolto", "Ti fa sentire bene"],
                "ideasB": ["Attivo", "Salute"]
            },
            {
                "topic": "Animali della fattoria vs animali selvaggi — cosa è più interessante?",
                "sideA": "Fattoria",
                "sideB": "Selvaggi",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Cibo", "Utili"],
                "ideasB": ["Giungla", "Emozionante"]
            },
            {
                "topic": "Pioggia vs sole — cosa è meglio?",
                "sideA": "Pioggia",
                "sideB": "Sole",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Piante", "Accogliente"],
                "ideasB": ["Spiaggia", "Energia"]
            },
            {
                "topic": "Il mare vs la montagna — cosa è meglio per una vacanza?",
                "sideA": "Mare",
                "sideB": "Montagna",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Nuoto", "Sabbia"],
                "ideasB": ["Escursioni", "Vista"]
            },
            {
                "topic": "Fiori vs alberi — cosa è più bello?",
                "sideA": "Fiori",
                "sideB": "Alberi",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Profumi", "Colori"],
                "ideasB": ["Ombra", "Ossigeno"]
            },
            {
                "topic": "Camminare vs andare in bicicletta — cosa è meglio per spostarsi?",
                "sideA": "Camminare",
                "sideB": "Bicicletta",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Gratis", "Semplice"],
                "ideasB": ["Veloce", "Divertente"]
            },
            {
                "topic": "Viaggiare da soli vs viaggiare con la famiglia — cosa è più divertente?",
                "sideA": "Da soli",
                "sideB": "Famiglia",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Il tuo percorso", "Tranquillo"],
                "ideasB": ["Divertimento condiviso", "Sicuro"]
            },
            {
                "topic": "Vivere con i nonni vs non vivere con loro — cosa è meglio?",
                "sideA": "Nonni",
                "sideB": "Non con loro",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Ricevi aiuto", "Impari storie"],
                "ideasB": ["Più spazio", "Casa tranquilla"]
            },
            {
                "topic": "La cucina della mamma vs la cucina del papà — cosa è meglio?",
                "sideA": "Mamma",
                "sideB": "Papà",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Pasta gustosa", "Molto amore"],
                "ideasB": ["Migliore pizza", "Nuove ricette"]
            },
            {
                "topic": "Matematica vs arte — cosa è meglio?",
                "sideA": "Matematica",
                "sideB": "Arte",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Numeri", "Logica"],
                "ideasB": ["Colori", "Pittura"]
            },
            {
                "topic": "Scrivere su carta vs scrivere su un tablet — cosa è meglio?",
                "sideA": "Carta",
                "sideB": "Tablet",
                "level": "starter",
                "theme": "basic_technology_devices_A1",
                "ideasA": ["Nessuna batteria", "Buona sensazione"],
                "ideasB": ["Veloce", "Risparmia carta"]
            },
            {
                "topic": "Giorno al parco vs giorno in spiaggia — cosa è meglio?",
                "sideA": "Parco",
                "sideB": "Spiaggia",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Erba verde", "Alberi"],
                "ideasB": ["Sabbia", "Mare blu"]
            },
            {
                "topic": "Gatti che buttano giù le cose vs cani che masticano le scarpe — cosa è peggio?",
                "sideA": "Gatti",
                "sideB": "Cani",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Vetri rotti", "Disordine"],
                "ideasB": ["No scarpe", "Costoso"]
            },
            {
                "topic": "Mangiare la pizza con la forchetta vs mangiare la pizza con le mani — cosa è meglio?",
                "sideA": "Forchetta",
                "sideB": "Mani",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Mani pulite", "Elegante"],
                "ideasB": ["Veloce", "Modo vero"]
            },
            {
                "topic": "Dormire con le calze vs dormire senza calze — cosa è meglio?",
                "sideA": "Calze",
                "sideB": "Senza calze",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Piedi caldi", "Accogliente"],
                "ideasB": ["Fresco", "Comodo"]
            },
            {
                "topic": "Lavorare a tempo pieno vs lavorare a tempo parziale — cosa è meglio?",
                "sideA": "Tempo pieno",
                "sideB": "Tempo parziale",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Più soldi", "Grandi progetti"],
                "ideasB": ["Più tempo libero", "Meno stress"]
            },
            {
                "topic": "Un lavoro che ami vs un lavoro che paga bene — cosa è meglio?",
                "sideA": "Amore",
                "sideB": "Soldi",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Felice ogni giorno", "Niente stress"],
                "ideasB": ["Compra casa grande", "Niente problemi di soldi"]
            },
            {
                "topic": "Grande città vs piccola città — cosa è meglio?",
                "sideA": "Grande città",
                "sideB": "Piccola città",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Negozi", "Cinema"],
                "ideasB": ["Amichevole", "Tranquillo"]
            },
            {
                "topic": "Avere figli vs non avere figli — cosa è meglio?",
                "sideA": "Figli",
                "sideB": "Niente figli",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Famiglia futura", "Molto divertimento"],
                "ideasB": ["Tempo libero", "Viaggi facili"]
            },
            {
                "topic": "Esercizio ogni giorno vs riposo — cosa è meglio?",
                "sideA": "Esercizio",
                "sideB": "Riposo",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Corpo forte", "Energia"],
                "ideasB": ["Recupero", "Relax"]
            },
            {
                "topic": "Andare dal dottore vs aspettare — cosa è meglio?",
                "sideA": "Dottore",
                "sideB": "Aspettare",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Aiuto veloce", "Sicuro"],
                "ideasB": ["Risparmia soldi", "Naturale"]
            },
            {
                "topic": "Dormire otto ore vs dormire meno — cosa è meglio?",
                "sideA": "8 ore",
                "sideB": "Meno",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Riposato", "Sano"],
                "ideasB": ["Finisci lavoro", "Più divertimento"]
            },
            {
                "topic": "Shopping online vs shopping in negozio — cosa è meglio?",
                "sideA": "Online",
                "sideB": "Negozio",
                "level": "starter",
                "theme": "shopping_basics_A1",
                "ideasA": ["Facile", "Veloce"],
                "ideasB": ["Vedi oggetti", "Provi vestiti"]
            },
            {
                "topic": "Cose costose vs cose economiche — cosa è meglio?",
                "sideA": "Costoso",
                "sideB": "Economico",
                "level": "starter",
                "theme": "shopping_basics_A1",
                "ideasA": ["Buona qualità", "Dura a lungo"],
                "ideasB": ["Risparmia soldi", "Molte cose"]
            },
            {
                "topic": "Comprare nuovo vs comprare di seconda mano — cosa è meglio?",
                "sideA": "Nuovo",
                "sideB": "Seconda mano",
                "level": "starter",
                "theme": "shopping_basics_A1",
                "ideasA": ["Pulito", "Niente problemi"],
                "ideasB": ["Economico", "Salva natura"]
            },
            {
                "topic": "Guardare la TV a casa vs uscire — cosa è meglio?",
                "sideA": "TV a casa",
                "sideB": "Uscire",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Comodo", "Economico"],
                "ideasB": ["Vedere amici", "Nuovi posti"]
            },
            {
                "topic": "Vacanze con la famiglia vs vacanze con gli amici — cosa è meglio?",
                "sideA": "Famiglia",
                "sideB": "Amici",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Sicuro", "Niente costi"],
                "ideasB": ["Emozionante", "Festa"]
            },
            {
                "topic": "Restare nel proprio paese vs viaggiare all'estero — cosa è meglio?",
                "sideA": "Mio paese",
                "sideB": "Estero",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Facile", "Niente aereo"],
                "ideasB": ["Nuova cultura", "Avventura"]
            },
            {
                "topic": "Sport vs lettura — cosa è meglio?",
                "sideA": "Sport",
                "sideB": "Lettura",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Sano", "Forte"],
                "ideasB": ["Rilassato", "Impari cose"]
            },
            {
                "topic": "Vedere gli amici spesso vs avere tempo da soli — cosa è meglio?",
                "sideA": "Amici",
                "sideB": "Tempo solo",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Divertimento", "Storie condivise"],
                "ideasB": ["Pace", "Hobby"]
            },
            {
                "topic": "Rispondere alle email subito vs lasciarle per dopo — cosa è più professionale?",
                "sideA": "Subito",
                "sideB": "Dopo",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Professionale", "Finisci veloce"],
                "ideasB": ["Pensa bene", "Nessuna fretta"]
            },
            {
                "topic": "Lavare i piatti subito vs lasciarli fino a domani — cosa è meglio?",
                "sideA": "Subito",
                "sideB": "Domani",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Cucina pulita", "Mattina fresca"],
                "ideasB": ["Relax ora", "Fai tutto dopo"]
            },
            {
                "topic": "Essere sempre in anticipo vs sempre cinque minuti in ritardo — cosa è peggio?",
                "sideA": "Anticipo",
                "sideB": "Ritardo",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Aspetti a lungo", "Noia"],
                "ideasB": ["Non educato", "Perdi inizio"]
            },
            {
                "topic": "Avere una scrivania molto organizzata vs una scrivania disordinata — cosa è meglio?",
                "sideA": "Organizzata",
                "sideB": "Disordinata",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Trovi cose", "Concentrazione"],
                "ideasB": ["Creativo", "Veloce"]
            },
            {
                "topic": "Parlare di lavoro a cena vs niente chiacchiere di lavoro a cena — cosa è meglio?",
                "sideA": "Parlare di lavoro",
                "sideB": "Niente lavoro",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Risolvi problemi", "Condividi giornata"],
                "ideasB": ["Relax", "Tempo in famiglia"]
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();