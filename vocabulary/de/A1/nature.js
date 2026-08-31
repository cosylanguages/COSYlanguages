// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Sonne",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Himmelskörper, der Licht und Wärme gibt.",
                "examples": [
                    "Die Sonne scheint warm."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈzɔnə",
        "id": "de_starter_nature_001"
    },
    {
        "word": "Mond",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Himmelskörper, der nachts leuchtet.",
                "examples": [
                    "Der Mond steht am Nachthimmel."
                ]
            }
        ],
        "lang": "de",
        "transcription": "moːnt",
        "id": "de_starter_nature_002"
    },
    {
        "word": "Stern",
        "level": "starter",
        "theme": "nature",
        "emoji": "⭐",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Leuchtender Punkt am Nachthimmel.",
                "examples": [
                    "Viele Sterne funkeln nachts."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʃtɛʁn",
        "id": "de_starter_nature_003"
    },
    {
        "word": "Baum",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Hohe Pflanze mit Stamm und Blättern.",
                "examples": [
                    "Der Baum im Garten ist sehr alt."
                ]
            }
        ],
        "lang": "de",
        "transcription": "baʊ̯m",
        "id": "de_starter_nature_004"
    },
    {
        "word": "Blume",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Schöne farbige Pflanze.",
                "examples": [
                    "Die Blumen duften schön."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈbluːmə",
        "id": "de_starter_nature_005"
    },
    {
        "word": "Fluss",
        "level": "starter",
        "theme": "nature",
        "emoji": "🏞️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Natürliches fließendes Gewässer.",
                "examples": [
                    "Der Rhein ist ein großer Fluss."
                ]
            }
        ],
        "lang": "de",
        "transcription": "flʊs",
        "id": "de_starter_nature_006"
    },
    {
        "word": "Meer",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Großes Salzgewässer.",
                "examples": [
                    "Wir machen Urlaub am Meer."
                ]
            }
        ],
        "lang": "de",
        "transcription": "meːɐ̯",
        "id": "de_starter_nature_007"
    },
    {
        "word": "Berg",
        "level": "starter",
        "theme": "nature",
        "emoji": "⛰️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Hohe Erhebung der Landschaft.",
                "examples": [
                    "Die Alpen sind hohe Berge."
                ]
            }
        ],
        "lang": "de",
        "transcription": "bɛʁk",
        "id": "de_starter_nature_008"
    },
    {
        "word": "Wald",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Große Fläche mit vielen Bäumen.",
                "examples": [
                    "Wir spazieren im Wald."
                ]
            }
        ],
        "lang": "de",
        "transcription": "valt",
        "id": "de_starter_nature_009"
    },
    {
        "word": "See",
        "level": "starter",
        "theme": "nature",
        "emoji": "🏞️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Stehendes Binnengewässer.",
                "examples": [
                    "Der Bodensee ist sehr schön."
                ]
            }
        ],
        "lang": "de",
        "transcription": "zeː",
        "id": "de_starter_nature_010"
    },
    {
        "word": "Wind",
        "level": "starter",
        "theme": "nature",
        "emoji": "💨",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Bewegte Luft draußen.",
                "examples": [
                    "Heute weht ein starker Wind."
                ]
            }
        ],
        "lang": "de",
        "transcription": "vɪnt",
        "id": "de_starter_nature_011"
    },
    {
        "word": "Regen",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌧️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Niederschlag aus Wassertropfen.",
                "examples": [
                    "Der Regen fällt vom Himmel."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈʁeːɡn̩",
        "id": "de_starter_nature_012"
    },
    {
        "word": "Himmel",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der Raum über der Erde.",
                "examples": [
                    "Der Himmel ist blau."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈhɪml̩",
        "id": "de_starter_nature_013"
    },
    {
        "word": "Wolke",
        "level": "starter",
        "theme": "nature",
        "emoji": "☁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Weiße oder graue Ansammlung am Himmel.",
                "examples": [
                    "Viele Wolken stehen am Himmel."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈvɔlkə",
        "id": "de_starter_nature_014"
    },
    {
        "word": "Schnee",
        "level": "starter",
        "theme": "nature",
        "emoji": "❄️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Gefrorener weißer Niederschlag im Winter.",
                "examples": [
                    "Der Schnee fällt im Winter."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʃneː",
        "id": "de_starter_nature_015"
    },
    {
        "word": "Eis",
        "level": "starter",
        "theme": "nature",
        "emoji": "🧊",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Gefrorenes Wasser.",
                "examples": [
                    "Das Eis schmilzt in der Sonne."
                ]
            }
        ],
        "lang": "de",
        "transcription": "aɪ̯s",
        "id": "de_starter_nature_016"
    },
    {
        "word": "Wetter",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌤️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Zustand der Atmosphäre.",
                "examples": [
                    "Das Wetter ist heute sehr schön."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈvɛtɐ",
        "id": "de_starter_nature_017"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
