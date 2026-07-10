(function() {
    const lang = "fr";
    const data = [
    {
        "word": "chat",
        "level": "starter",
        "theme": "animals",
        "article": "le",
        "baseWord": "chat",
        "emoji": "🐈",
        "numberPlural": "2 chat",
        "answer": "deux chats",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chats",
        "definitions": [
            {
                "text": "Un petit animal à fourrure.",
                "examples": [
                    "Mon chat dort."
                ]
            }
        ],
        "transcription": "/ʃa/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "cattus"
        },
        "lang": "fr",
        "id": "fr_starter_animals_001"
    },
    {
        "word": "chien",
        "level": "starter",
        "theme": "animals",
        "article": "le",
        "baseWord": "chien",
        "emoji": "🐕",
        "numberPlural": "5 chien",
        "answer": "cinq chiens",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chiens",
        "definitions": [
            {
                "text": "Le meilleur ami de l'homme.",
                "examples": [
                    "Je promène mon chien."
                ]
            }
        ],
        "transcription": "/ʃjɛ̃/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "canis"
        },
        "lang": "fr",
        "id": "fr_starter_animals_002"
    },
    {
        "word": "oiseau",
        "level": "starter",
        "theme": "animals",
        "article": "l'",
        "emoji": "🐦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "oiseaux",
        "definitions": [
            {
                "text": "Un animal avec des plumes et des ailes.",
                "examples": [
                    "L'oiseau chante."
                ]
            }
        ],
        "transcription": "/wa.zo/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "avicellus"
        },
        "lang": "fr",
        "id": "fr_starter_animals_003"
    },
    {
        "word": "poisson",
        "level": "starter",
        "theme": "animals",
        "article": "le",
        "emoji": "🐟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "poissons",
        "definitions": [
            {
                "text": "Un animal qui vit dans l'eau.",
                "examples": [
                    "Le poisson nage."
                ]
            }
        ],
        "transcription": "/pwa.sɔ̃/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "piscis"
        },
        "lang": "fr",
        "id": "fr_starter_animals_004"
    },
    {
        "word": "lion",
        "level": "starter",
        "theme": "animals",
        "article": "le",
        "gender": "masculine",
        "emoji": "🦁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lions",
        "definitions": [
            {
                "text": "Un grand félin sauvage.",
                "examples": [
                    "Le lion est le roi."
                ]
            }
        ],
        "transcription": "/ljɔ̃/",
        "lang": "fr",
        "id": "fr_starter_animals_005"
    },
    {
        "word": "éléphant",
        "level": "starter",
        "theme": "animals",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🐘",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "éléphants",
        "definitions": [
            {
                "text": "Un très gros animal avec une trompe.",
                "examples": [
                    "L'éléphant est gris."
                ]
            }
        ],
        "transcription": "/e.le.fɑ̃/",
        "lang": "fr",
        "id": "fr_starter_animals_006"
    },
    {
        "word": "lapin",
        "level": "starter",
        "theme": "animals",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lapins",
        "definitions": [
            {
                "text": "Petit animal avec de longues oreilles.",
                "examples": [
                    "Le lapin mange une carotte."
                ]
            }
        ],
        "transcription": "/la.pɛ̃/",
        "lang": "fr",
        "id": "fr_starter_animals_007"
    },
    {
        "word": "cheval",
        "level": "starter",
        "theme": "animals",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chevaux",
        "definitions": [
            {
                "text": "Un animal que l'on peut monter.",
                "examples": [
                    "Je monte à cheval."
                ]
            }
        ],
        "transcription": "/ʃə.val/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "caballus"
        },
        "lang": "fr",
        "id": "fr_starter_animals_008"
    },
    {
        "word": "vache",
        "level": "starter",
        "theme": "animals",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐮",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "vaches",
        "definitions": [
            {
                "text": "L'animal qui donne du lait.",
                "examples": [
                    "La vache est dans le pré."
                ]
            }
        ],
        "transcription": "/vaʃ/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "vacca"
        },
        "lang": "fr",
        "id": "fr_starter_animals_009"
    },
    {
        "word": "cochon",
        "level": "starter",
        "theme": "animals",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cochons",
        "definitions": [
            {
                "text": "Un animal rose de la ferme.",
                "examples": [
                    "Le cochon est gras."
                ]
            }
        ],
        "transcription": "/kɔ.ʃɔ̃/",
        "lang": "fr",
        "id": "fr_starter_animals_010"
    },
    {
        "word": "mouton",
        "level": "starter",
        "theme": "animals",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "moutons",
        "definitions": [
            {
                "text": "Animal avec de la laine blanche.",
                "examples": [
                    "Un troupeau de moutons."
                ]
            }
        ],
        "transcription": "/mu.tɔ̃/",
        "lang": "fr",
        "id": "fr_starter_animals_011"
    },
    {
        "word": "tigre",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "tigres",
        "definitions": [
            {
                "text": "Un grand chat sauvage avec des rayures noires et oranges.",
                "examples": [
                    "Le tigre court très vite.",
                    "Il y a un tigre dans le parc national."
                ]
            }
        ],
        "transcription": "tiɡʁ",
        "lang": "fr",
        "id": "fr_starter_animals_012"
    },
    {
        "word": "singe",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "singes",
        "definitions": [
            {
                "text": "Un animal qui vit dans les arbres et mange des bananes.",
                "examples": [
                    "Le singe saute entre les arbres.",
                    "Les singes sont des animaux amusants."
                ]
            }
        ],
        "transcription": "sɛ̃ʒ",
        "lang": "fr",
        "id": "fr_starter_animals_013"
    },
    {
        "word": "baleine",
        "level": "starter",
        "theme": "sea_animals",
        "emoji": "🐋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "feminine",
        "article": "la",
        "plural": "baleines",
        "definitions": [
            {
                "text": "Un très grand animal marin qui respire de l'air.",
                "examples": [
                    "La baleine est l'animal le plus grand du monde.",
                    "Nous avons vu une baleine pendant le voyage."
                ]
            }
        ],
        "transcription": "balɛn",
        "lang": "fr",
        "id": "fr_starter_sea_animals_001"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
