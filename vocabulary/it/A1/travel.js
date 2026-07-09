(function() {
    const data = [
    {
        "word": "macchina",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "macchine",
        "subtext": "guidare una macchina, macchina veloce",
        "definitions": [
            {
                "text": "Un veicolo con quattro ruote e un motore.",
                "examples": [
                    "La sua macchina è rossa."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈmakkina",
        "synonyms": [],
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_001"
    },
    {
        "word": "autobus",
        "level": "starter",
        "theme": "travel",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "autobus",
        "subtext": "prendere l'autobus, fermata dell'autobus",
        "definitions": [
            {
                "text": "Un grande veicolo che trasporta molte persone.",
                "examples": [
                    "Prendo l'autobus per andare al lavoro."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ˈautobus",
        "synonyms": [],
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_002"
    },
    {
        "word": "treno",
        "level": "starter",
        "theme": "travel",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "treni",
        "subtext": "prendere il treno, in treno, stazione",
        "definitions": [
            {
                "text": "Un veicolo che circola su rotaie.",
                "examples": [
                    "Il treno è veloce."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈtrɛno",
        "synonyms": [],
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_003"
    },
    {
        "word": "tragitto",
        "level": "starter",
        "theme": "travel",
        "article": "il",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tragitti",
        "definitions": [
            {
                "text": "Il viaggio per andare e tornare dal lavoro ogni giorno.",
                "examples": [
                    "Il mio tragitto dura un'ora."
                ]
            }
        ],
        "gender": "masculine",
        "partitive": "del",
        "transcription": "traˈdʒitto",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_004"
    },
    {
        "word": "viaggio",
        "level": "starter",
        "theme": "travel",
        "article": "il",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "viaggi",
        "definitions": [
            {
                "text": "Azione di viaggiare.",
                "examples": [
                    "Buon viaggio!"
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈvjaddʒo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_005"
    },
    {
        "word": "aereo",
        "level": "starter",
        "theme": "travel",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "aerei",
        "subtext": "prendere l'aereo, volo",
        "definitions": [
            {
                "text": "Un veicolo con ali che vola nell'aria.",
                "examples": [
                    "L'aereo atterra alle nove."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "aˈɛreo",
        "synonyms": [],
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_006"
    },
    {
        "word": "bicicletta",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "biciclette",
        "subtext": "bici, andare in bici",
        "definitions": [
            {
                "text": "Un veicolo a due ruote che guidi spingendo i pedali.",
                "examples": [
                    "Lui va al lavoro in bicicletta."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "bitʃiˈkletta",
        "synonyms": [],
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_007"
    },
    {
        "word": "aeroporto",
        "level": "starter",
        "theme": "travel",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "aeroporti",
        "definitions": [
            {
                "text": "Luogo per prendere l'aereo.",
                "examples": [
                    "Vado all'aeroporto."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ˈaeroporto",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_008"
    },
    {
        "word": "barca",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "⛵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "barche",
        "definitions": [
            {
                "text": "Veicolo per l'acqua.",
                "examples": [
                    "La barca è sul mare."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈbarka",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_009"
    },
    {
        "word": "viaggiatore",
        "level": "starter",
        "theme": "travel",
        "article": "il",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "viaggiatori",
        "definitions": [
            {
                "text": "Persona che viaggia.",
                "examples": [
                    "Il treno è pieno di viaggiatori."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "viaddʒaˈtore",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_010"
    },
    {
        "word": "valigia",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "valigie",
        "definitions": [
            {
                "text": "Contenitore per i viaggi.",
                "examples": [
                    "Preparo la valigia."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "vaˈlidʒa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_011"
    },
    {
        "word": "zaino",
        "level": "starter",
        "theme": "travel",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🎒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "zaini",
        "definitions": [
            {
                "text": "Sacca da spalla.",
                "examples": [
                    "Ho un grosso zaino."
                ]
            }
        ],
        "partitive": "dello",
        "transcription": "ˈdzaino",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_012"
    },
    {
        "word": "passaporto",
        "level": "starter",
        "theme": "travel",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "passaporti",
        "definitions": [
            {
                "text": "Documento per viaggiare.",
                "examples": [
                    "Dov'è il passaporto?"
                ]
            }
        ],
        "partitive": "del",
        "transcription": "passaˈpɔrto",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_013"
    },
    {
        "word": "mappa",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗺️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mappe",
        "definitions": [
            {
                "text": "Disegno di un luogo.",
                "examples": [
                    "Guarda la mappa."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈmappa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_014"
    },
    {
        "word": "piantina",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "piantine",
        "definitions": [
            {
                "text": "Mappa di una città.",
                "examples": [
                    "La piantina di Roma."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "pjanˈtina",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_015"
    },
    {
        "word": "fermata dell'autobus",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fermate dell'autobus",
        "definitions": [
            {
                "text": "Luogo dei bus.",
                "examples": [
                    "Aspettare alla fermata."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ferˈmata delˈlautobus",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_016"
    },
    {
        "word": "banchina",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛤️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "banchine",
        "definitions": [
            {
                "text": "Bordo del binario.",
                "examples": [
                    "Il treno arriva alla banchina 3."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "baŋˈkina",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_017"
    },
    {
        "word": "binario",
        "level": "starter",
        "theme": "travel",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛤️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "binari",
        "definitions": [
            {
                "text": "Percorso del treno.",
                "examples": [
                    "Il binario è libero."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "biˈnarjo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_018"
    },
    {
        "word": "metropolitana",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚇",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "metropolitane",
        "definitions": [
            {
                "text": "Treno sotterraneo.",
                "examples": [
                    "Prendere la metro."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "metropoliˈtana",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_019"
    },
    {
        "word": "taxi",
        "level": "starter",
        "theme": "travel",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "taxi",
        "definitions": [
            {
                "text": "Auto con autista.",
                "examples": [
                    "Chiamare un taxi."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈtaksi",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_020"
    },
    {
        "word": "velocità",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏎️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "velocità",
        "definitions": [
            {
                "text": "Rapidità di movimento.",
                "examples": [
                    "Limitare la velocità."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "velotʃiˈta",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_021"
    },
    {
        "word": "bagagli",
        "level": "starter",
        "theme": "travel",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bagagli",
        "definitions": [
            {
                "text": "Effetti personali.",
                "examples": [
                    "Portare i bagagli."
                ]
            }
        ],
        "partitive": "dei",
        "transcription": "baˈɡaʎʎi",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_022"
    },
    {
        "word": "partenza",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "partenze",
        "definitions": [
            {
                "text": "Azione di partire.",
                "examples": [
                    "L'ora della partenza."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "parˈtɛntsa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_023"
    },
    {
        "word": "arrivo",
        "level": "starter",
        "theme": "travel",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "arrivi",
        "definitions": [
            {
                "text": "Azione di arrivare.",
                "examples": [
                    "L'ora dell'arrivo."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "arˈrivo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_024"
    },
    {
        "word": "volo",
        "level": "starter",
        "theme": "travel",
        "article": "il",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "voli",
        "definitions": [
            {
                "text": "Viaggio in aereo.",
                "examples": [
                    "Un volo notturno."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈvolo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_025"
    },
    {
        "word": "prenotazione",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "prenotazioni",
        "definitions": [
            {
                "text": "Azione di prenotare.",
                "examples": [
                    "Fare una prenotazione."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "prenotatˈtsjone",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_026"
    },
    {
        "word": "camera d'albergo",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "camere d'albergo",
        "definitions": [
            {
                "text": "Stanza in albergo.",
                "examples": [
                    "Prenotare una camera d'albergo."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈkamera dalˈbɛrɡo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_027"
    },
    {
        "word": "reception",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛎️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "reception",
        "definitions": [
            {
                "text": "Accoglienza in hotel.",
                "examples": [
                    "Andare alla reception."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "reˈtʃɛpʃon",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_travel_028"
    },
    {
        "word": "sinistra",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "⬅️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sinistre",
        "transcription": "siˈnistra",
        "definitions": [
            {
                "text": "La parte opposta alla destra.",
                "examples": [
                    "Gira a sinistra."
                ]
            }
        ],
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "destra"
        ],
        "lang": "it",
        "id": "it_starter_travel_029"
    },
    {
        "word": "destra",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "➡️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "destre",
        "transcription": "ˈdɛstra",
        "definitions": [
            {
                "text": "La parte opposta alla sinistra.",
                "examples": [
                    "Gira a destra."
                ]
            }
        ],
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "sinistra"
        ],
        "lang": "it",
        "id": "it_starter_travel_030"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();