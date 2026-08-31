// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Hund",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein treues Haustier und Freund des Menschen.",
                "examples": [
                    "Der Hund läuft im Garten."
                ]
            }
        ],
        "lang": "de",
        "transcription": "hʊnt",
        "id": "de_starter_animals_001"
    },
    {
        "word": "Katze",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐈",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein kleines Haustier mit weichem Fell.",
                "examples": [
                    "Die Katze schläft auf dem Sofa."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈkat͡sə",
        "id": "de_starter_animals_002"
    },
    {
        "word": "Vogel",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Tier mit Federn, das in der Luft fliegt.",
                "examples": [
                    "Der Vogel singt im Baum."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈfoːɡl̩",
        "id": "de_starter_animals_003"
    },
    {
        "word": "Fisch",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Wassertier, das im Wasser schwimmt.",
                "examples": [
                    "Der Fisch schwimmt im Fluss."
                ]
            }
        ],
        "lang": "de",
        "transcription": "fɪʃ",
        "id": "de_starter_animals_004"
    },
    {
        "word": "Kuh",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein großes Bauernhoftier, das Milch gibt.",
                "examples": [
                    "Die Kuh frisst Gras auf der Wiese."
                ]
            }
        ],
        "lang": "de",
        "transcription": "kuː",
        "id": "de_starter_animals_005"
    },
    {
        "word": "Pferd",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein starkes Tier, auf dem man reiten kann.",
                "examples": [
                    "Das Pferd läuft sehr schnell."
                ]
            }
        ],
        "lang": "de",
        "transcription": "pfeːɐ̯t",
        "id": "de_starter_animals_006"
    },
    {
        "word": "Schwein",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Rosa Bauernhoftier.",
                "examples": [
                    "Das Schwein lebt auf dem Bauernhof."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʃvaɪ̯n",
        "id": "de_starter_animals_007"
    },
    {
        "word": "Schaf",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Tier mit weicher Wolle.",
                "examples": [
                    "Das Schaf steht auf der Wiese."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʃaːf",
        "id": "de_starter_animals_008"
    },
    {
        "word": "Bär",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein großes Wildtier im Wald.",
                "examples": [
                    "Der Bär schläft im Winter."
                ]
            }
        ],
        "lang": "de",
        "transcription": "bɛːɐ̯",
        "id": "de_starter_animals_009"
    },
    {
        "word": "Maus",
        "level": "starter",
        "theme": "animals",
        "emoji": "🖱️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein ganz kleines Tier mit langem Schwanz.",
                "examples": [
                    "Die Maus isst gerne Käse."
                ]
            }
        ],
        "lang": "de",
        "transcription": "maʊ̯s",
        "id": "de_starter_animals_010"
    },
    {
        "word": "Ente",
        "level": "starter",
        "theme": "animals",
        "emoji": "🦆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Wasservogel, der schwimmen kann.",
                "examples": [
                    "Die Ente schwimmt im See."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈɛntə",
        "id": "de_starter_animals_011"
    },
    {
        "word": "Biene",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein kleines Insekt, das Honig macht.",
                "examples": [
                    "Die Biene fliegt von Blume zu Blume."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈbiːnə",
        "id": "de_starter_animals_012"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
