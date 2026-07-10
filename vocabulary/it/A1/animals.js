(function() {
    const data = [
    {
        "word": "gatto",
        "level": "starter",
        "theme": "animals",
        "article": "il",
        "emoji": "🐈",
        "numberPlural": "2 gatto",
        "answer": "due gatti",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "gatti",
        "gender": "masculine",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un piccolo animale domestico che fa \"miao\".",
                "examples": [
                    "Il mio gatto dorme sul divano."
                ]
            }
        ],
        "transcription": "ˈɡatto",
        "synonyms": [],
        "subtext": "un bel gatto",
        "antonyms": [
            "cane"
        ],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "cattus"
        },
        "id": "it_starter_animals_001",
        "lang": "it"
    },
    {
        "word": "cane",
        "level": "starter",
        "theme": "animals",
        "article": "il",
        "emoji": "🐕",
        "numberPlural": "5 cane",
        "answer": "cinque cani",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cani",
        "gender": "masculine",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un animale domestico fedele che fa \"bau\".",
                "examples": [
                    "Porto il cane al parco."
                ]
            }
        ],
        "transcription": "ˈkane",
        "synonyms": [],
        "subtext": "cane da guardia",
        "antonyms": [
            "gatto"
        ],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "canis"
        },
        "id": "it_starter_animals_002",
        "lang": "it"
    },
    {
        "word": "uccello",
        "level": "starter",
        "theme": "animals",
        "article": "l'",
        "emoji": "🐦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "uccelli",
        "gender": "masculine",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Un animale con le ali che può volare.",
                "examples": [
                    "L'uccello vola nel cielo."
                ]
            }
        ],
        "transcription": "utˈtʃɛllo",
        "synonyms": [],
        "subtext": "uccello canoro",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "avicellus"
        },
        "id": "it_starter_animals_003",
        "lang": "it"
    },
    {
        "word": "pesce",
        "level": "starter",
        "theme": "animals",
        "article": "il",
        "emoji": "🐟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pesci",
        "gender": "masculine",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un animale che vive nell'acqua.",
                "examples": [
                    "Il pesce nuota nel mare."
                ]
            }
        ],
        "transcription": "ˈpeʃʃe",
        "synonyms": [],
        "subtext": "pesce fresco",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "piscis"
        },
        "id": "it_starter_animals_004",
        "lang": "it"
    },
    {
        "word": "coniglio",
        "level": "starter",
        "theme": "animals",
        "article": "il",
        "gender": "masculine",
        "emoji": "🐰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "conigli",
        "definitions": [
            {
                "text": "Piccolo animale con lunghe orecchie.",
                "examples": [
                    "Il coniglio mangia una carota."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈconiglio",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_animals_005",
        "lang": "it"
    },
    {
        "word": "cavallo",
        "level": "starter",
        "theme": "animals",
        "article": "il",
        "gender": "masculine",
        "emoji": "🐴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cavalli",
        "definitions": [
            {
                "text": "Un animale che si può cavalcare.",
                "examples": [
                    "Vado a cavallo."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈcavallo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "caballus"
        },
        "id": "it_starter_animals_006",
        "lang": "it"
    },
    {
        "word": "mucca",
        "level": "starter",
        "theme": "animals",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐮",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mucche",
        "definitions": [
            {
                "text": "L'animale che dà il latte.",
                "examples": [
                    "La mucca è nel prato."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈmucca",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_animals_007",
        "lang": "it"
    },
    {
        "word": "pecora",
        "level": "starter",
        "theme": "animals",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pecore",
        "definitions": [
            {
                "text": "Animale con la lana bianca.",
                "examples": [
                    "Un gregge di pecore."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈpɛkora",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_animals_008",
        "lang": "it"
    },
    {
        "word": "animale",
        "level": "starter",
        "theme": "animals",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🐾",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "animali",
        "transcription": "aniˈmale",
        "definitions": [
            {
                "text": "Essere vivente che si muove e sente.",
                "examples": [
                    "Il gatto è il mio animale preferito."
                ]
            }
        ],
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_animals_009",
        "lang": "it"
    },
    {
        "word": "delfino",
        "level": "starter",
        "theme": "sea_animals",
        "article": "il",
        "gender": "masculine",
        "emoji": "🐬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "delfini",
        "transcription": "delˈfino",
        "definitions": [
            {
                "text": "Mammifero marino intelligente e socievole.",
                "examples": [
                    "Il delfino nuota nel mare."
                ]
            }
        ],
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_animals_010",
        "lang": "it"
    },
    {
        "word": "ape",
        "level": "starter",
        "theme": "insects",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🐝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "api",
        "transcription": "ˈape",
        "definitions": [
            {
                "text": "Insetto giallo e nero che produce il miele.",
                "examples": [
                    "L'ape vola sul fiore."
                ]
            }
        ],
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_animals_011",
        "lang": "it"
    },
    {
        "word": "ragno",
        "level": "starter",
        "theme": "insects",
        "article": "il",
        "gender": "masculine",
        "emoji": "🕷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ragni",
        "transcription": "ˈraɲɲo",
        "definitions": [
            {
                "text": "Piccolo animale con otto zampe che fa la tela.",
                "examples": [
                    "C'è un ragno nell'angolo."
                ]
            }
        ],
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_animals_012",
        "lang": "it"
    },
    {
        "word": "leone",
        "level": "starter",
        "theme": "animals",
        "emoji": "🦁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "il",
        "plural": "leoni",
        "definitions": [
            {
                "text": "Un grande animale selvatico con una criniera, che vive in Africa.",
                "examples": [
                    "Il leone è il re della foresta.",
                    "Abbiamo visto un leone allo zoo."
                ]
            }
        ],
        "transcription": "leˈone",
        "partitive": "del",
        "subtext": "",
        "id": "it_starter_animals_013",
        "lang": "it"
    },
    {
        "word": "elefante",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐘",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "l'",
        "plural": "elefanti",
        "definitions": [
            {
                "text": "Un animale molto grande con una proboscide e grandi orecchie.",
                "examples": [
                    "L'elefante è un animale molto intelligente.",
                    "Gli elefanti vivono in gruppi."
                ]
            }
        ],
        "transcription": "eleˈfante",
        "partitive": "dell'",
        "subtext": "",
        "id": "it_starter_animals_014",
        "lang": "it"
    },
    {
        "word": "tigre",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "feminine",
        "article": "la",
        "plural": "tigri",
        "definitions": [
            {
                "text": "Un grande gatto selvatico con strisce nere e arancioni.",
                "examples": [
                    "La tigre corre molto veloce.",
                    "C'è una tigre nel parco nazionale."
                ]
            }
        ],
        "transcription": "ˈtiɡre",
        "partitive": "della",
        "subtext": "",
        "id": "it_starter_animals_015",
        "lang": "it"
    },
    {
        "word": "scimmia",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "feminine",
        "article": "la",
        "plural": "scimmie",
        "definitions": [
            {
                "text": "Un animale che vive sugli alberi e mangia banane.",
                "examples": [
                    "La scimmia salta tra gli alberi.",
                    "Le scimmie sono animali divertenti."
                ]
            }
        ],
        "transcription": "ˈʃimmja",
        "partitive": "della",
        "subtext": "",
        "id": "it_starter_animals_016",
        "lang": "it"
    },
    {
        "word": "squalo",
        "level": "starter",
        "theme": "sea_animals",
        "emoji": "🦈",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "lo",
        "plural": "squali",
        "definitions": [
            {
                "text": "Un grande pesce con molti denti che vive nel mare.",
                "examples": [
                    "Lo squalo nuota velocemente.",
                    "Molte persone hanno paura degli squali."
                ]
            }
        ],
        "transcription": "ˈskwalo",
        "partitive": "dello",
        "subtext": "",
        "id": "it_starter_animals_017",
        "lang": "it"
    },
    {
        "word": "balena",
        "level": "starter",
        "theme": "sea_animals",
        "emoji": "🐋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "feminine",
        "article": "la",
        "plural": "balene",
        "definitions": [
            {
                "text": "Un animale marino molto grande che respira aria.",
                "examples": [
                    "La balena è l'animale più grande del mondo.",
                    "Abbiamo visto una balena durante il viaggio."
                ]
            }
        ],
        "transcription": "baˈlena",
        "partitive": "della",
        "subtext": "",
        "id": "it_starter_animals_018",
        "lang": "it"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();