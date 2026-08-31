// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Hemd",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👔",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Kleidung mit Knöpfen für den Oberkörper.",
                "examples": [
                    "Ich trage ein weißes Hemd."
                ]
            }
        ],
        "lang": "de",
        "transcription": "hɛmt",
        "id": "de_starter_clothes_001"
    },
    {
        "word": "Hose",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Kleidung für die Beine.",
                "examples": [
                    "Er kauft eine blaue Hose."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈhoːzə",
        "id": "de_starter_clothes_002"
    },
    {
        "word": "Kleid",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein einteiliges Kleidungsstück.",
                "examples": [
                    "Sie trägt ein schönes Kleid."
                ]
            }
        ],
        "lang": "de",
        "transcription": "klaɪ̯t",
        "id": "de_starter_clothes_003"
    },
    {
        "word": "Jacke",
        "level": "starter",
        "theme": "clothes",
        "emoji": "🧥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Warme Oberbekleidung für draußen.",
                "examples": [
                    "Im Herbst brauche ich eine Jacke."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈjakə",
        "id": "de_starter_clothes_004"
    },
    {
        "word": "Schuh",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Fußbekleidung zum Schutz der Füße.",
                "examples": [
                    "Meine neuen Schuhe sind bequem."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʃuː",
        "id": "de_starter_clothes_005"
    },
    {
        "word": "Hut",
        "level": "starter",
        "theme": "clothes",
        "emoji": "🎩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Kopfbedeckung gegen Sonne oder Kälte.",
                "examples": [
                    "Er trägt einen schwarzen Hut."
                ]
            }
        ],
        "lang": "de",
        "transcription": "huːt",
        "id": "de_starter_clothes_006"
    },
    {
        "word": "Mantel",
        "level": "starter",
        "theme": "clothes",
        "emoji": "🧥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Lange, warme Bekleidung für den Winter.",
                "examples": [
                    "Im Winter ziehe ich einen Mantel an."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈmantl̩",
        "id": "de_starter_clothes_007"
    },
    {
        "word": "Pullover",
        "level": "starter",
        "theme": "clothes",
        "emoji": "🧶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Gestricktes Kleidungsstück für den Oberkörper.",
                "examples": [
                    "Der Pullover ist sehr warm."
                ]
            }
        ],
        "lang": "de",
        "transcription": "pʊˈloːvɐ",
        "id": "de_starter_clothes_008"
    },
    {
        "word": "Rock",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Kleidungsstück ab der Taille abwärts.",
                "examples": [
                    "Sie trägt einen kurzen Rock."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʁɔk",
        "id": "de_starter_clothes_009"
    },
    {
        "word": "Socke",
        "level": "starter",
        "theme": "clothes",
        "emoji": "🧦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Bekleidung für den Fuß unter dem Schuh.",
                "examples": [
                    "Ich brauche warme Socken."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈzɔkə",
        "id": "de_starter_clothes_010"
    },
    {
        "word": "Gürtel",
        "level": "starter",
        "theme": "clothes",
        "emoji": "🩲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Band zum Halten der Hose.",
                "examples": [
                    "Der Gürtel ist aus Leder."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈɡʏʁtl̩",
        "id": "de_starter_clothes_011"
    },
    {
        "word": "T-Shirt",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Leichtes Hemd mit kurzen Ärmeln.",
                "examples": [
                    "Im Sommer trage ich ein T-Shirt."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈtiːʃœːɐ̯t",
        "id": "de_starter_clothes_012"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
