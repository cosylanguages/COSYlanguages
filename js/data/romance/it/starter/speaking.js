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
                "ideasA": ["Mi dà energia.", "Ha un buon profumo."],
                "ideasB": ["È più sano.", "È rilassante."]
            },
            {
                "topic": "Ristorante vs cucina casalinga — cosa è meglio?",
                "sideA": "Ristorante",
                "sideB": "Cucina casalinga",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Non devo pulire.", "Il cibo è speciale."],
                "ideasB": ["Costa meno.", "È più sano."]
            },
            {
                "topic": "Colazione vs niente colazione — cosa è meglio per te?",
                "sideA": "Colazione",
                "sideB": "Niente",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Ho energia.", "Mi piace mangiare."],
                "ideasB": ["Risparmio tempo.", "Non ho fame."]
            },
            {
                "topic": "Acqua vs succo — cosa è più salutare?",
                "sideA": "Acqua",
                "sideB": "Succo",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["È naturale.", "Non ha zucchero."],
                "ideasB": ["Ha vitamine.", "Ha un buon sapore."]
            },
            {
                "topic": "Carne vs verdure — cosa è più importante in un pasto?",
                "sideA": "Carne",
                "sideB": "Verdure",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Mi dà forza.", "È saporita."],
                "ideasB": ["È più sana.", "Mi piacciono i colori."]
            },
            {
                "topic": "Casa vs appartamento — dove è meglio vivere?",
                "sideA": "Casa",
                "sideB": "Appartamento",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Ho un giardino.", "C'è più spazio."],
                "ideasB": ["È vicino al centro.", "Costa meno."]
            },
            {
                "topic": "Città vs villaggio — qual è il posto migliore dove vivere?",
                "sideA": "Città",
                "sideB": "Villaggio",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Ci sono molti negozi.", "C'è il cinema."],
                "ideasB": ["C'è aria pulita.", "È silenzioso."]
            },
            {
                "topic": "Contanti vs carta — con cosa è meglio pagare?",
                "sideA": "Contanti",
                "sideB": "Carta",
                "level": "starter",
                "theme": "money_payment_A1",
                "ideasA": ["È reale.", "Vedo quanto spendo."],
                "ideasB": ["È veloce.", "È più sicuro."]
            },
            {
                "topic": "Risparmiare denaro vs spendere denaro — cosa è meglio?",
                "sideA": "Risparmiare",
                "sideB": "Spendere",
                "level": "starter",
                "theme": "money_payment_A1",
                "ideasA": ["Per il futuro.", "Per le emergenze."],
                "ideasB": ["Per godersi la vita.", "Per comprare cose nuove."]
            },
            {
                "topic": "Affittare vs comprare — cosa è meglio?",
                "sideA": "Affittare",
                "sideB": "Comprare",
                "level": "starter",
                "theme": "types_of_accommodation_A1",
                "ideasA": ["Sono più libero.", "Non ho debiti."],
                "ideasB": ["È un investimento.", "È casa mia."]
            },
            {
                "topic": "Lavoro al mattino vs lavoro alla sera — cosa è meglio?",
                "sideA": "Mattino",
                "sideB": "Sera",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Finisco presto.", "C'è luce."],
                "ideasB": ["C'è silenzio.", "Dormo di più."]
            },
            {
                "topic": "Auto vs autobus — cosa è meglio per andare al lavoro?",
                "sideA": "Auto",
                "sideB": "Autobus",
                "level": "starter",
                "theme": "modes_of_transport_A1",
                "ideasA": ["È comoda.", "Faccio prima."],
                "ideasB": ["Costa meno.", "Posso leggere."]
            },
            {
                "topic": "Camminare vs guidare — cosa è meglio in città?",
                "sideA": "Camminare",
                "sideB": "Guidare",
                "level": "starter",
                "theme": "modes_of_transport_A1",
                "ideasA": ["Faccio esercizio.", "Vedo la città."],
                "ideasB": ["È più veloce.", "Non mi stanco."]
            },
            {
                "topic": "Ufficio vs casa — qual è il posto migliore per lavorare?",
                "sideA": "Ufficio",
                "sideB": "Casa",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Vedo i colleghi.", "Sono più produttivo."],
                "ideasB": ["Risparmio tempo.", "Sono comodo."]
            },
            {
                "topic": "Mattiniero vs nottambulo — cosa è meglio?",
                "sideA": "Mattiniero",
                "sideB": "Nottambulo",
                "level": "starter",
                "theme": "times_day_A1",
                "ideasA": ["Vedo l alba.", "Ho tempo per me."],
                "ideasB": ["Mi piace la notte.", "C'è silenzio."]
            },
            {
                "topic": "Estate vs inverno — quale stagione è la migliore?",
                "sideA": "Estate",
                "sideB": "Inverno",
                "level": "starter",
                "theme": "seasons_climate_A1",
                "ideasA": ["C'è il sole.", "Andiamo al mare."],
                "ideasB": ["C'è la neve.", "Mi piace il freddo."]
            },
            {
                "topic": "Vacanza breve vs vacanza lunga — cosa è meglio?",
                "sideA": "Breve",
                "sideB": "Lunga",
                "level": "starter",
                "theme": "travel_vocabulary_basics_A1",
                "ideasA": ["Ne faccio di più.", "Costa meno."],
                "ideasB": ["Mi rilasso davvero.", "Vedo posti lontani."]
            },
            {
                "topic": "Telefonata vs messaggio — cosa è meglio?",
                "sideA": "Telefonata",
                "sideB": "Messaggio",
                "level": "starter",
                "theme": "basic_technology_devices_A1",
                "ideasA": ["È più diretta.", "Sento la voce."],
                "ideasB": ["Ho tempo per rispondere.", "È più discreto."]
            },
            {
                "topic": "Doccia al mattino vs doccia alla sera — qual è corretta?",
                "sideA": "Mattino",
                "sideB": "Sera",
                "level": "starter",
                "theme": "rooms_of_a_home_A1",
                "ideasA": ["Mi sveglia.", "Inizio fresco."],
                "ideasB": ["Mi rilassa.", "Vado a letto pulito."]
            },
            {
                "topic": "Lunedì vs venerdì — quale giorno è il migliore?",
                "sideA": "Lunedì",
                "sideB": "Venerdì",
                "level": "starter",
                "theme": "days_week_A1",
                "ideasA": ["Inizio nuovi progetti.", "Ho energia."],
                "ideasB": ["Il weekend è vicino.", "Sono felice."]
            },
            {
                "topic": "Troppo caldo vs troppo freddo — cosa è peggio?",
                "sideA": "Troppo caldo",
                "sideB": "Troppo freddo",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Sudo molto.", "Non dormo."],
                "ideasB": ["Ho sempre i piedi freddi.", "Pesa portare i vestiti."]
            },
            {
                "topic": "Posto finestrino vs posto corridoio — qual è meglio in aereo?",
                "sideA": "Finestrino",
                "sideB": "Corridoio",
                "level": "starter",
                "theme": "public_transport_A1",
                "ideasA": ["Vedo fuori.", "Posso dormire meglio."],
                "ideasB": ["Posso alzarmi quando voglio.", "C'è più spazio."]
            },
            {
                "topic": "Rosso vs Blu — quale colore è migliore?",
                "sideA": "Rosso",
                "sideB": "Blu",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["È energico.", "È caldo."],
                "ideasB": ["È calmo.", "È rilassante."]
            },
            {
                "topic": "Giallo vs Verde — quale colore è più allegro?",
                "sideA": "Giallo",
                "sideB": "Verde",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Sembra il sole.", "È brillante."],
                "ideasB": ["Sembra la natura.", "È calmo."]
            },
            {
                "topic": "Nero vs Bianco — quale colore preferisci?",
                "sideA": "Nero",
                "sideB": "Bianco",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["È elegante.", "Va bene con tutto."],
                "ideasB": ["È pulito.", "È luminoso."]
            },
            {
                "topic": "Rosa vs Viola — quale colore è più carino?",
                "sideA": "Rosa",
                "sideB": "Viola",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["È dolce.", "È delicato."],
                "ideasB": ["È speciale.", "È originale."]
            },
            {
                "topic": "Cerchio vs Quadrato — quale forma è più utile?",
                "sideA": "Cerchio",
                "sideB": "Quadrato",
                "level": "starter",
                "theme": "shapes_A1",
                "ideasA": ["Gira bene.", "Non ha angoli."],
                "ideasB": ["Si impila bene.", "È solido."]
            },
            {
                "topic": "Numeri grandi vs piccoli — quali sono più divertenti?",
                "sideA": "Grandi",
                "sideB": "Piccoli",
                "level": "starter",
                "theme": "numbers_0_9_A1",
                "ideasA": ["Sono più importanti.", "Sono tanti."],
                "ideasB": ["Sono più facili.", "Sono carini."]
            },
            {
                "topic": "Triangolo vs Rettangolo — quale forma è migliore?",
                "sideA": "Triangolo",
                "sideB": "Rettangolo",
                "level": "starter",
                "theme": "shapes_A1",
                "ideasA": ["È forte.", "È dinamico."],
                "ideasB": ["È come una stanza.", "È bilanciato."]
            },
            {
                "topic": "Palla vs Bambola — quale giocattolo è migliore?",
                "sideA": "Palla",
                "sideB": "Bambola",
                "level": "starter",
                "theme": "toys_games_A1",
                "ideasA": ["Posso giocare fuori.", "Si muove."],
                "ideasB": ["È come un'amica.", "Posso vestirla."]
            },
            {
                "topic": "Matita vs Penna — con cosa è meglio scrivere?",
                "sideA": "Matita",
                "sideB": "Penna",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Posso cancellare.", "È naturale."],
                "ideasB": ["È permanente.", "Scrive meglio."]
            },
            {
                "topic": "Libro vs Immagine — da cosa è meglio imparare?",
                "sideA": "Libro",
                "sideB": "Immagine",
                "level": "starter",
                "theme": "learning_studying_A1",
                "ideasA": ["Ci sono i dettagli.", "Uso l immaginazione."],
                "ideasB": ["È veloce.", "Capisco subito."]
            },
            {
                "topic": "Sedia vs Pavimento — su cosa è meglio sedersi?",
                "sideA": "Sedia",
                "sideB": "Pavimento",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["È più comoda.", "Sto dritto."],
                "ideasB": ["È più naturale.", "C'è più spazio."]
            },
            {
                "topic": "Gatto vs Cane — quale animale è migliore?",
                "sideA": "Gatto",
                "sideB": "Cane",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["È indipendente.", "È pulito."],
                "ideasB": ["È fedele.", "Possiamo giocare."]
            },
            {
                "topic": "Pesce vs Uccello — quale è un animale domestico migliore?",
                "sideA": "Pesce",
                "sideB": "Uccello",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["È silenzioso.", "È bello."],
                "ideasB": ["Canta.", "È colorato."]
            },
            {
                "topic": "Animali grandi vs piccoli — quali sono più carini?",
                "sideA": "Grandi",
                "sideB": "Piccoli",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Sono forti.", "Sono maestosi."],
                "ideasB": ["Sono dolci.", "Stanno in mano."]
            },
            {
                "topic": "Coniglio vs Criceto — quale è più carino?",
                "sideA": "Coniglio",
                "sideB": "Criceto",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Ha orecchie lunghe.", "È morbido."],
                "ideasB": ["È piccolissimo.", "Corre nella ruota."]
            },
            {
                "topic": "Acqua vs Succo — cosa è meglio bere?",
                "sideA": "Acqua",
                "sideB": "Succo",
                "level": "starter",
                "theme": "drinks_A1",
                "ideasA": ["Disseta.", "È gratis."],
                "ideasB": ["È dolce.", "È colorato."]
            },
            {
                "topic": "Mela vs Banana — quale frutto è migliore?",
                "sideA": "Mela",
                "sideB": "Banana",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["È croccante.", "Fa bene."],
                "ideasB": ["È morbida.", "È dolce."]
            },
            {
                "topic": "Pane vs Riso — cosa è meglio mangiare?",
                "sideA": "Pane",
                "sideB": "Riso",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["È buono con tutto.", "Profuma."],
                "ideasB": ["È leggero.", "Va bene con le verdure."]
            },
            {
                "topic": "Latte vs Acqua — quale preferisci?",
                "sideA": "Latte",
                "sideB": "Acqua",
                "level": "starter",
                "theme": "drinks_A1",
                "ideasA": ["È nutriente.", "Va bene a colazione."],
                "ideasB": ["È fresco.", "Ne bevo tanta."]
            },
            {
                "topic": "Rosa vs Arancione — quale colore è più carino?",
                "sideA": "Rosa",
                "sideB": "Arancione",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["È dolce.", "È per i fiori."],
                "ideasB": ["È allegro.", "Sembra il sole."]
            },
            {
                "topic": "Numero 1 vs numero 10 — quale numero è migliore?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_0_9_A1",
                "ideasA": ["Si inizia da qui.", "È semplice."],
                "ideasB": ["È un bel numero tondo.", "È un voto alto."]
            },
            {
                "topic": "Sedia vs divano — quale è più comodo?",
                "sideA": "Sedia",
                "sideB": "Divano",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Va bene per lavorare.", "Sto dritto."],
                "ideasB": ["Posso sdraiarmi.", "È morbidissimo."]
            },
            {
                "topic": "Borsa vs scatola — quale è più utile?",
                "sideA": "Borsa",
                "sideB": "Scatola",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["La porto in giro.", "È per i vestiti."],
                "ideasB": ["Contiene molte cose.", "Va bene per i gatti."]
            },
            {
                "topic": "Leone vs elefante — quale animale è migliore?",
                "sideA": "Leone",
                "sideB": "Elefante",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["È il re.", "È coraggioso."],
                "ideasB": ["È grandissimo.", "È intelligente."]
            },
            {
                "topic": "Cioccolato vs caramelle — quale è meglio?",
                "sideA": "Cioccolato",
                "sideB": "Caramelle",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["È goloso.", "Mi dà gioia."],
                "ideasB": ["Sono colorate.", "Durano tanto."]
            },
            {
                "topic": "Cucchiaio vs forchetta — quale è meglio?",
                "sideA": "Cucchiaio",
                "sideB": "Forchetta",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Per la minestra.", "Per il gelato."],
                "ideasB": ["Per la pasta.", "Per la carne."]
            },
            {
                "topic": "Cappello vs scarpe — quale è più importante?",
                "sideA": "Cappello",
                "sideB": "Scarpe",
                "level": "starter",
                "theme": "items_of_clothing_A1",
                "ideasA": ["Mi protegge dal sole.", "È elegante."],
                "ideasB": ["Per camminare.", "Senza ho i piedi freddi."]
            },
            {
                "topic": "Sole vs luna — quale è meglio?",
                "sideA": "Sole",
                "sideB": "Luna",
                "level": "starter",
                "theme": "nature_landscapes_A1",
                "ideasA": ["Fa caldo.", "C'è luce."],
                "ideasB": ["È romantica.", "C'è silenzio."]
            },
            {
                "topic": "Calze vs senza calze — cosa è meglio?",
                "sideA": "Calze",
                "sideB": "Senza calze",
                "level": "starter",
                "theme": "items_of_clothing_A1",
                "ideasA": ["Ho i piedi caldi.", "Sono comode."],
                "ideasB": ["Sono libero.", "Fa meno caldo."]
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
