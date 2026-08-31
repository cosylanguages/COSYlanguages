// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Brot",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍞",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Grundnahrungsmittel aus Mehl und Wasser.",
                "examples": [
                    "Ich esse frisches Brot zum Frühstück."
                ]
            }
        ],
        "lang": "de",
        "transcription": "bʁoːt",
        "id": "de_starter_food_drink_001"
    },
    {
        "word": "Milch",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Weißes Getränk von der Kuh.",
                "examples": [
                    "Er trinkt jeden Morgen Milch."
                ]
            }
        ],
        "lang": "de",
        "transcription": "mɪlç",
        "id": "de_starter_food_drink_002"
    },
    {
        "word": "Wasser",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "💧",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Lebenswichtige durchsichtige Flüssigkeit.",
                "examples": [
                    "Bitte ein Glas Wasser."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈvasɐ",
        "id": "de_starter_food_drink_003"
    },
    {
        "word": "Tee",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Warmes Getränk aus Kräutern oder Blättern.",
                "examples": [
                    "Im Winter trinke ich heißen Tee."
                ]
            }
        ],
        "lang": "de",
        "transcription": "teː",
        "id": "de_starter_food_drink_004"
    },
    {
        "word": "Kaffee",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Aromatisches warmes Getränk.",
                "examples": [
                    "Ein Kaffee mit Milch, bitte."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈkafe",
        "id": "de_starter_food_drink_005"
    },
    {
        "word": "Butter",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🧈",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Streichfett aus Milch.",
                "examples": [
                    "Ich streiche Butter auf das Brot."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈbʊtɐ",
        "id": "de_starter_food_drink_006"
    },
    {
        "word": "Käse",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🧀",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Milchprodukt in festem Zustand.",
                "examples": [
                    "Gouda ist ein bekannter Käse."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈkɛːzə",
        "id": "de_starter_food_drink_007"
    },
    {
        "word": "Fleisch",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥩",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Nahrungsmittel von Tieren.",
                "examples": [
                    "Isst du gerne Fleisch?"
                ]
            }
        ],
        "lang": "de",
        "transcription": "flaɪ̯ʃ",
        "id": "de_starter_food_drink_008"
    },
    {
        "word": "Apfel",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Beliebte runde Frucht.",
                "examples": [
                    "Ein roter Apfel ist gesund."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈap͡fl̩",
        "id": "de_starter_food_drink_009"
    },
    {
        "word": "Kartoffel",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥔",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Wichtige Nutzpflanze und Nahrungsmittel.",
                "examples": [
                    "Kartoffeln schmecken gut."
                ]
            }
        ],
        "lang": "de",
        "transcription": "kaʁˈtɔfl̩",
        "id": "de_starter_food_drink_010"
    },
    {
        "word": "Reis",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍚",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Beliebtes Getreidekorn.",
                "examples": [
                    "Reis passt gut zu Gemüsegerichten."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʁaɪ̯s",
        "id": "de_starter_food_drink_011"
    },
    {
        "word": "Banane",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Süße gelbe Tropenfrucht.",
                "examples": [
                    "Die Banane ist gelb und süß."
                ]
            }
        ],
        "lang": "de",
        "transcription": "baˈnaːnə",
        "id": "de_starter_food_drink_012"
    },
    {
        "word": "Apfelsine",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Saftige süße Zitrusfrucht.",
                "examples": [
                    "Eine frische Apfelsine schälen."
                ]
            }
        ],
        "lang": "de",
        "transcription": "apfl̩ˈziːnə",
        "id": "de_starter_food_drink_013"
    },
    {
        "word": "Zucker",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍬",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Süßungsmittel für Kaffee und Kuchen.",
                "examples": [
                    "Ich nehme Zucker im Kaffee."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈt͡sʊkɐ",
        "id": "de_starter_food_drink_014"
    },
    {
        "word": "Salz",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🧂",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Wichtiges Gewürz in der Küche.",
                "examples": [
                    "Bitte das Salz reichen."
                ]
            }
        ],
        "lang": "de",
        "transcription": "zalt͡s",
        "id": "de_starter_food_drink_015"
    },
    {
        "word": "Gemüse",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥦",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Gesunde Pflanzennahrung.",
                "examples": [
                    "Gemüse ist gesund."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ɡəˈmyːzə",
        "id": "de_starter_food_drink_016"
    },
    {
        "word": "Obst",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Süße Früchte zum Essen.",
                "examples": [
                    "Essen Sie viel Obst."
                ]
            }
        ],
        "lang": "de",
        "transcription": "oːpst",
        "id": "de_starter_food_drink_017"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
