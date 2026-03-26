(function() {
    const speakingData = {
    "it": {
        "opinionArena": [
            {
                "text": "La colazione è il pasto più importante?",
                "level": "starter",
                "theme": "basic_foods_A1"
            },
            {
                "text": "I cani sono animali domestici migliori dei gatti?",
                "level": "starter",
                "theme": "leisure_activities_A1"
            }
        ],
        "criticsCorner": [],
        "debates": [
            {
                "topic": "Caffè vs tè — qual è la migliore bevanda del mattino?",
                "sideA": "Caffè",
                "sideB": "Tè",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ristorante vs cucina casalinga — cosa è meglio?",
                "sideA": "Ristorante",
                "sideB": "Cucina casalinga",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Colazione vs niente colazione — cosa è meglio per te?",
                "sideA": "Colazione",
                "sideB": "Niente",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acqua vs succo — cosa è più salutare?",
                "sideA": "Acqua",
                "sideB": "Succo",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Carne vs verdure — cosa è più importante in un pasto?",
                "sideA": "Carne",
                "sideB": "Verdure",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Casa vs appartamento — dove è meglio vivere?",
                "sideA": "Casa",
                "sideB": "Appartamento",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Città vs villaggio — qual è il posto migliore dove vivere?",
                "sideA": "Città",
                "sideB": "Villaggio",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Contanti vs carta — con cosa è meglio pagare?",
                "sideA": "Contanti",
                "sideB": "Carta",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Risparmiare denaro vs spendere denaro — cosa è meglio?",
                "sideA": "Risparmiare",
                "sideB": "Spendere",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Affittare vs comprare — cosa è meglio?",
                "sideA": "Affittare",
                "sideB": "Comprare",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavoro al mattino vs lavoro alla sera — cosa è meglio?",
                "sideA": "Mattino",
                "sideB": "Sera",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Auto vs autobus — cosa è meglio per andare al lavoro?",
                "sideA": "Auto",
                "sideB": "Autobus",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Camminare vs guidare — cosa è meglio in città?",
                "sideA": "Camminare",
                "sideB": "Guidare",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ufficio vs casa — qual è il posto migliore per lavorare?",
                "sideA": "Ufficio",
                "sideB": "Casa",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mattiniero vs nottambulo — cosa è meglio?",
                "sideA": "Mattiniero",
                "sideB": "Nottambulo",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Estate vs inverno — quale stagione è la migliore?",
                "sideA": "Estate",
                "sideB": "Inverno",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacanza breve vs vacanza lunga — cosa è meglio?",
                "sideA": "Breve",
                "sideB": "Lunga",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Telefonata vs messaggio — cosa è meglio?",
                "sideA": "Telefonata",
                "sideB": "Messaggio",
                "level": "starter",
                "theme": "basic_technology_devices_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Doccia al mattino vs doccia alla sera — qual è corretta?",
                "sideA": "Mattino",
                "sideB": "Sera",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lunedì vs venerdì — quale giorno è il migliore?",
                "sideA": "Lunedì",
                "sideB": "Venerdì",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Troppo caldo vs troppo freddo — cosa è peggio?",
                "sideA": "Troppo caldo",
                "sideB": "Troppo freddo",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Posto finestrino vs posto corridoio — qual è meglio in aereo?",
                "sideA": "Finestrino",
                "sideB": "Corridoio",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rosso vs Blu — quale colore è migliore?",
                "sideA": "Rosso",
                "sideB": "Blu",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giallo vs Verde — quale colore è più allegro?",
                "sideA": "Giallo",
                "sideB": "Verde",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Nero vs Bianco — quale colore preferisci?",
                "sideA": "Nero",
                "sideB": "Bianco",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rosa vs Viola — quale colore è più carino?",
                "sideA": "Rosa",
                "sideB": "Viola",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cerchio vs Quadrato — quale forma è più utile?",
                "sideA": "Cerchio",
                "sideB": "Quadrato",
                "level": "starter",
                "theme": "numbers_0_9_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Numeri grandi vs piccoli — quali sono più divertenti?",
                "sideA": "Grandi",
                "sideB": "Piccoli",
                "level": "starter",
                "theme": "numbers_0_9_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Triangolo vs Rettangolo — quale forma è migliore?",
                "sideA": "Triangolo",
                "sideB": "Rettangolo",
                "level": "starter",
                "theme": "numbers_0_9_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Palla vs Bambola — quale giocattolo è migliore?",
                "sideA": "Palla",
                "sideB": "Bambola",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Matita vs Penna — con cosa è meglio scrivere?",
                "sideA": "Matita",
                "sideB": "Penna",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Libro vs Immagine — da cosa è meglio imparare?",
                "sideA": "Libro",
                "sideB": "Immagine",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sedia vs Pavimento — su cosa è meglio sedersi?",
                "sideA": "Sedia",
                "sideB": "Pavimento",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gatto vs Cane — quale animale è migliore?",
                "sideA": "Gatto",
                "sideB": "Cane",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pesce vs Uccello — quale è un animale domestico migliore?",
                "sideA": "Pesce",
                "sideB": "Uccello",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Animali grandi vs piccoli — quali sono più carini?",
                "sideA": "Grandi",
                "sideB": "Piccoli",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Coniglio vs Criceto — quale è più carino?",
                "sideA": "Coniglio",
                "sideB": "Criceto",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acqua vs Succo — cosa è meglio bere?",
                "sideA": "Acqua",
                "sideB": "Succo",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mela vs Banana — quale frutto è migliore?",
                "sideA": "Mela",
                "sideB": "Banana",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pane vs Riso — cosa è meglio mangiare?",
                "sideA": "Pane",
                "sideB": "Riso",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Latte vs Acqua — quale preferisci?",
                "sideA": "Latte",
                "sideB": "Acqua",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rosa vs Arancione — quale colore è più carino?",
                "sideA": "Rosa",
                "sideB": "Arancione",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Numero 1 vs numero 10 — quale numero è migliore?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_0_9_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sedia vs divano — quale è più comodo?",
                "sideA": "Sedia",
                "sideB": "Divano",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Borsa vs scatola — quale è più utile?",
                "sideA": "Borsa",
                "sideB": "Scatola",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Leone vs elefante — quale animale è migliore?",
                "sideA": "Leone",
                "sideB": "Elefante",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cioccolato vs caramelle — quale è meglio?",
                "sideA": "Cioccolato",
                "sideB": "Caramelle",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucchiaio vs forchetta — quale è meglio?",
                "sideA": "Cucchiaio",
                "sideB": "Forchetta",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cappello vs scarpe — quale è più importante?",
                "sideA": "Cappello",
                "sideB": "Scarpe",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sole vs luna — quale è meglio?",
                "sideA": "Sole",
                "sideB": "Luna",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Calze vs senza calze — cosa è meglio?",
                "sideA": "Calze",
                "sideB": "Senza calze",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Il mio ricordo d'infanzia preferito",
                "level": "starter",
                "theme": "immediate_family_A1"
            },
            {
                "topic": "Il lavoro dei miei sogni e perché",
                "level": "starter",
                "theme": "workplace_basics_A1"
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
