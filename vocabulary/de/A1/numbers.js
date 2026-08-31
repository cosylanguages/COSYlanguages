// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "eins",
        "level": "starter",
        "theme": "numbers",
        "emoji": "1️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die erste Zahl.",
                "examples": [
                    "Eins, zwei, drei."
                ]
            }
        ],
        "lang": "de",
        "transcription": "aɪ̯ns",
        "id": "de_starter_numbers_001"
    },
    {
        "word": "zwei",
        "level": "starter",
        "theme": "numbers",
        "emoji": "2️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zahl nach der Eins.",
                "examples": [
                    "Ich habe zwei Katzen."
                ]
            }
        ],
        "lang": "de",
        "transcription": "t͡svaɪ̯",
        "id": "de_starter_numbers_002"
    },
    {
        "word": "drei",
        "level": "starter",
        "theme": "numbers",
        "emoji": "3️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zahl nach der Zwei.",
                "examples": [
                    "Drei Bücher liegen auf dem Tisch."
                ]
            }
        ],
        "lang": "de",
        "transcription": "dʁaɪ̯",
        "id": "de_starter_numbers_003"
    },
    {
        "word": "vier",
        "level": "starter",
        "theme": "numbers",
        "emoji": "4️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zahl nach der Drei.",
                "examples": [
                    "Der Tisch hat vier Beine."
                ]
            }
        ],
        "lang": "de",
        "transcription": "fiːɐ̯",
        "id": "de_starter_numbers_004"
    },
    {
        "word": "fünf",
        "level": "starter",
        "theme": "numbers",
        "emoji": "5️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zahl nach der Vier.",
                "examples": [
                    "Fünf Finger an einer Hand."
                ]
            }
        ],
        "lang": "de",
        "transcription": "fʏnf",
        "id": "de_starter_numbers_005"
    },
    {
        "word": "sechs",
        "level": "starter",
        "theme": "numbers",
        "emoji": "6️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zahl nach der Fünf.",
                "examples": [
                    "Das Paket wiegt sechs Kilo."
                ]
            }
        ],
        "lang": "de",
        "transcription": "zɛks",
        "id": "de_starter_numbers_006"
    },
    {
        "word": "sieben",
        "level": "starter",
        "theme": "numbers",
        "emoji": "7️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zahl nach der Sechs.",
                "examples": [
                    "Die Woche hat sieben Tage."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈziːbn̩",
        "id": "de_starter_numbers_007"
    },
    {
        "word": "acht",
        "level": "starter",
        "theme": "numbers",
        "emoji": "8️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zahl nach der Sieben.",
                "examples": [
                    "Wir frühstücken um acht Uhr."
                ]
            }
        ],
        "lang": "de",
        "transcription": "axt",
        "id": "de_starter_numbers_008"
    },
    {
        "word": "neun",
        "level": "starter",
        "theme": "numbers",
        "emoji": "9️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zahl nach der Acht.",
                "examples": [
                    "Neun Schüler sind in der Klasse."
                ]
            }
        ],
        "lang": "de",
        "transcription": "nɔɪ̯n",
        "id": "de_starter_numbers_009"
    },
    {
        "word": "zehn",
        "level": "starter",
        "theme": "numbers",
        "emoji": "🔟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zahl nach der Neun.",
                "examples": [
                    "Ich habe zehn Euro."
                ]
            }
        ],
        "lang": "de",
        "transcription": "t͡seːn",
        "id": "de_starter_numbers_010"
    },
    {
        "word": "elf",
        "level": "starter",
        "theme": "numbers",
        "emoji": "🔢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zahl nach der Zehn.",
                "examples": [
                    "Elf Spieler spielen im Team."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ɛlf",
        "id": "de_starter_numbers_011"
    },
    {
        "word": "zwölf",
        "level": "starter",
        "theme": "numbers",
        "emoji": "🔢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zahl nach der Elf.",
                "examples": [
                    "Das Jahr hat zwölf Monate."
                ]
            }
        ],
        "lang": "de",
        "transcription": "t͡svœlf",
        "id": "de_starter_numbers_012"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
