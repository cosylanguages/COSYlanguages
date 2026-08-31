// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Tisch",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Möbelstück zum Essen oder Arbeiten.",
                "examples": [
                    "Das Buch liegt auf dem Tisch."
                ]
            }
        ],
        "lang": "de",
        "transcription": "tɪʃ",
        "id": "de_starter_furniture_001"
    },
    {
        "word": "Stuhl",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Möbelstück zum Sitzen.",
                "examples": [
                    "Setzen Sie sich bitte auf den Stuhl."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʃtuːl",
        "id": "de_starter_furniture_002"
    },
    {
        "word": "Bett",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Möbelstück zum Schlafen.",
                "examples": [
                    "Ich gehe ins Bett, ich bin müde."
                ]
            }
        ],
        "lang": "de",
        "transcription": "bɛt",
        "id": "de_starter_furniture_003"
    },
    {
        "word": "Schrank",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🚪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Möbelstück zum Aufbewahren von Kleidung.",
                "examples": [
                    "Die Kleidung hängt im Schrank."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʃʁaŋk",
        "id": "de_starter_furniture_004"
    },
    {
        "word": "Sofa",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛋️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Bequemes Sitzmöbel im Wohnzimmer.",
                "examples": [
                    "Wir sitzen gemütlich auf dem Sofa."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈzoːfa",
        "id": "de_starter_furniture_005"
    },
    {
        "word": "Lampe",
        "level": "starter",
        "theme": "furniture",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Lichtquelle im Zimmer.",
                "examples": [
                    "Schalte bitte die Lampe an."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈlampə",
        "id": "de_starter_furniture_006"
    },
    {
        "word": "Teppich",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Textiler Bodenbelag.",
                "examples": [
                    "Der Teppich liegt auf dem Boden."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈtɛpɪç",
        "id": "de_starter_furniture_007"
    },
    {
        "word": "Regal",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🗄️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Möbelstück für Bücher und Dinge.",
                "examples": [
                    "Die Bücher stehen im Regal."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʁeˈɡaːl",
        "id": "de_starter_furniture_008"
    },
    {
        "word": "Bild",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🖼️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Kunstwerk an der Wand.",
                "examples": [
                    "Ein schönes Bild hängt an der Wand."
                ]
            }
        ],
        "lang": "de",
        "transcription": "bɪlt",
        "id": "de_starter_furniture_009"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
