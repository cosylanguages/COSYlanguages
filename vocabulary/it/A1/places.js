(function() {
    const data = [
    {
        "word": "giardino",
        "level": "starter",
        "theme": "places",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un giardino pubblico o un parco.",
                "examples": []
            }
        ],
        "id": "it_starter_places_001",
        "lang": "it",
        "transcription": ""
    },
    {
        "word": "parco",
        "level": "starter",
        "theme": "places",
        "article": "il",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "parchi",
        "gender": "masculine",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un'area verde pubblica in città.",
                "examples": [
                    "Vado al parco a correre."
                ]
            }
        ],
        "transcription": "ˈparko",
        "synonyms": [],
        "subtext": "parco giochi",
        "antonyms": [],
        "id": "it_starter_places_002",
        "lang": "it"
    },
    {
        "word": "scuola",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "scuole",
        "gender": "feminine",
        "partitive": "della",
        "definitions": [
            {
                "text": "Il luogo dove si impara e si studia.",
                "examples": [
                    "I bambini sono a scuola."
                ]
            }
        ],
        "transcription": "ˈskwɔla",
        "synonyms": [],
        "subtext": "scuola primaria",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "schola"
        },
        "id": "it_starter_places_003",
        "lang": "it"
    },
    {
        "word": "affitto",
        "level": "starter",
        "theme": "travel",
        "article": "l'",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "affitti",
        "definitions": [
            {
                "text": "Il denaro pagato per usare una casa o un appartamento che appartiene a qualcun altro.",
                "examples": [
                    "L'affitto è alto in città."
                ]
            }
        ],
        "gender": "masculine",
        "partitive": "dell'",
        "transcription": "afˈfitto",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_004",
        "lang": "it"
    },
    {
        "word": "vicino",
        "level": "starter",
        "theme": "places",
        "article": "il",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "vicini",
        "definitions": [
            {
                "text": "Una persona che vive accanto a te o vicino a te.",
                "examples": [
                    "I miei vicini sono molto simpatici."
                ]
            }
        ],
        "gender": "masculine",
        "partitive": "del",
        "transcription": "viˈtʃino",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_005",
        "lang": "it"
    },
    {
        "word": "hotel",
        "level": "starter",
        "theme": "travel",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hotel",
        "definitions": [
            {
                "text": "Un edificio dove le persone pagano per pernottare.",
                "examples": [
                    "L'hotel è vicino alla stazione."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "oˈtɛl",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_006",
        "lang": "it"
    },
    {
        "word": "ospedale",
        "level": "starter",
        "theme": "places",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ospedali",
        "subtext": "andare all'ospedale, pronto soccorso",
        "definitions": [
            {
                "text": "Un luogo dove le persone malate o ferite ricevono cure mediche.",
                "examples": [
                    "È andato all'ospedale in ambulanza."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ospeˈdale",
        "synonyms": [],
        "antonyms": [],
        "id": "it_starter_places_007",
        "lang": "it"
    },
    {
        "word": "ristorante",
        "level": "starter",
        "theme": "places",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ristoranti",
        "subtext": "ristorante italiano, andare al ristorante",
        "definitions": [
            {
                "text": "Un luogo dove paghi per mangiare i pasti.",
                "examples": [
                    "Andiamo al ristorante il venerdì."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ristoˈrante",
        "synonyms": [],
        "antonyms": [],
        "id": "it_starter_places_008",
        "lang": "it"
    },
    {
        "word": "banca",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "banche",
        "subtext": "conto in banca, andare in banca",
        "definitions": [
            {
                "text": "Un luogo dove le persone tengono i soldi e fanno transazioni finanziarie.",
                "examples": [
                    "La banca è vicino al mio ufficio."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈbaŋka",
        "synonyms": [],
        "antonyms": [],
        "id": "it_starter_places_009",
        "lang": "it"
    },
    {
        "word": "stazione",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "stazioni",
        "subtext": "stazione ferroviaria, stazione degli autobus",
        "definitions": [
            {
                "text": "Un edificio dove i treni o gli autobus si fermano per i passeggeri.",
                "examples": [
                    "La stazione è a dieci minuti da qui."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "statˈtsjone",
        "synonyms": [],
        "antonyms": [],
        "id": "it_starter_places_010",
        "lang": "it"
    },
    {
        "word": "supermercato",
        "level": "starter",
        "theme": "places",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "supermercati",
        "subtext": "andare al supermercato",
        "definitions": [
            {
                "text": "Un grande negozio che vende cibo e altri beni per la casa.",
                "examples": [
                    "Vado al supermercato il sabato."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "supermerˈkato",
        "synonyms": [],
        "antonyms": [],
        "id": "it_starter_places_011",
        "lang": "it"
    },
    {
        "word": "farmacia",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "💊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "farmacie",
        "definitions": [
            {
                "text": "Luogo per comprare medicine.",
                "examples": [
                    "Dov'è la farmacia?"
                ]
            }
        ],
        "partitive": "della",
        "transcription": "farmaˈtʃia",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_012",
        "lang": "it"
    },
    {
        "word": "strada",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "strade",
        "definitions": [
            {
                "text": "Via in una città.",
                "examples": [
                    "Abito in questa strada."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈstrada",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_013",
        "lang": "it"
    },
    {
        "word": "edificio",
        "level": "starter",
        "theme": "places",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "edifici",
        "definitions": [
            {
                "text": "Grande costruzione urbana.",
                "examples": [
                    "Un bell'edificio."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ediˈfitʃo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_014",
        "lang": "it"
    },
    {
        "word": "bar",
        "level": "starter",
        "theme": "places",
        "article": "il",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bar",
        "definitions": [
            {
                "text": "Luogo dove si beve il caffè.",
                "examples": [
                    "Andiamo al bar."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈbar",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_015",
        "lang": "it"
    },
    {
        "word": "centro",
        "level": "starter",
        "theme": "places",
        "article": "il",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "centri",
        "definitions": [
            {
                "text": "Il mezzo di un luogo.",
                "examples": [
                    "Il centro città."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈtʃɛntro",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_016",
        "lang": "it"
    },
    {
        "word": "quartiere",
        "level": "starter",
        "theme": "places",
        "article": "il",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "quartieri",
        "definitions": [
            {
                "text": "Parte di una città.",
                "examples": [
                    "È il mio quartiere."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "kwarˈtjɛre",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_017",
        "lang": "it"
    },
    {
        "word": "lì",
        "level": "starter",
        "theme": "prepositions_place",
        "article": "",
        "gender": "",
        "emoji": "👉",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "In quel posto.",
                "examples": [
                    "Il gatto è lì."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈlì",
        "id": "it_starter_places_018",
        "lang": "it"
    },
    {
        "word": "città",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "città",
        "definitions": [
            {
                "text": "Luogo con molte case.",
                "examples": [
                    "Roma è una grande città."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈcittà",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "civitas"
        },
        "id": "it_starter_places_019",
        "lang": "it"
    },
    {
        "word": "paese",
        "level": "starter",
        "theme": "places",
        "article": "il",
        "gender": "masculine",
        "emoji": "🗺️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "paesi",
        "definitions": [
            {
                "text": "Territorio di una nazione.",
                "examples": [
                    "L'Italia è un bel paese."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈpaese",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_020",
        "lang": "it"
    },
    {
        "word": "mensa",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mense",
        "definitions": [
            {
                "text": "Ristorante per lavoratori o studenti.",
                "examples": [
                    "Mangiamo in mensa."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈmɛnsa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_021",
        "lang": "it"
    },
    {
        "word": "via",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "vie",
        "definitions": [
            {
                "text": "Strada di città.",
                "examples": [
                    "In che via?"
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈvia",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_022",
        "lang": "it"
    },
    {
        "word": "sentiero",
        "level": "starter",
        "theme": "places",
        "article": "il",
        "gender": "masculine",
        "emoji": "👣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sentieri",
        "definitions": [
            {
                "text": "Piccola strada.",
                "examples": [
                    "Il sentiero nel bosco."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "senˈtjɛro",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_023",
        "lang": "it"
    },
    {
        "word": "piazza",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "piazze",
        "definitions": [
            {
                "text": "Spazio pubblico aperto.",
                "examples": [
                    "La piazza del Duomo."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈpjattsa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_024",
        "lang": "it"
    },
    {
        "word": "villaggio",
        "level": "starter",
        "theme": "places",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "villaggi",
        "definitions": [
            {
                "text": "Piccolo centro abitato.",
                "examples": [
                    "Un bel villaggio."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "vilˈladdʒo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_025",
        "lang": "it"
    },
    {
        "level": "starter",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "indirizzi",
        "word": "indirizzo",
        "theme": "places",
        "gender": "masculine",
        "article": "l'",
        "partitive": "dell'",
        "transcription": "indiˈrittso",
        "definitions": [
            {
                "text": "Il luogo dove qualcuno vive.",
                "examples": [
                    "Qual è il tuo indirizzo?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_places_026",
        "lang": "it",
        "emoji": "✨"
    },
    {
        "word": "qui",
        "level": "starter",
        "theme": "prepositions_place",
        "form": "adverb",
        "transcription": "ˈkwi",
        "definitions": [
            {
                "text": "In questo luogo (vicino a chi parla).",
                "examples": [
                    "Vieni qui.",
                    "Abito qui vicino."
                ]
            }
        ],
        "synonyms": [
            "qua"
        ],
        "subtext": "avverbio di luogo",
        "antonyms": [
            "là",
            "lì"
        ],
        "id": "it_starter_places_027",
        "lang": "it",
        "emoji": "✨"
    },
    {
        "word": "là",
        "level": "starter",
        "theme": "prepositions_place",
        "form": "adverb",
        "transcription": "ˈla",
        "definitions": [
            {
                "text": "In quel luogo (lontano da chi parla).",
                "examples": [
                    "Vai là.",
                    "Il libro è là sul tavolo."
                ]
            }
        ],
        "synonyms": [
            "lì"
        ],
        "subtext": "avverbio di luogo",
        "antonyms": [
            "qui",
            "qua"
        ],
        "id": "it_starter_places_028",
        "lang": "it",
        "emoji": "✨"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();