// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "schwarz",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬛",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Die Farbe der Nacht.",
                "examples": [
                    "Ich habe eine schwarze Katze."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʃvaʁt͡s",
        "id": "de_starter_colours_001"
    },
    {
        "word": "weiß",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬜",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Die Farbe von Schnee und Milch.",
                "examples": [
                    "Der Schnee ist weiß."
                ]
            }
        ],
        "lang": "de",
        "transcription": "vaɪ̯s",
        "id": "de_starter_colours_002"
    },
    {
        "word": "rot",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟥",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Die Farbe von Feuer und Erdbeeren.",
                "examples": [
                    "Der Apfel ist rot und süß."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʁoːt",
        "id": "de_starter_colours_003"
    },
    {
        "word": "blau",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟦",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Die Farbe des klares Himmels und des Meeres.",
                "examples": [
                    "Der Himmel ist heute blau."
                ]
            }
        ],
        "lang": "de",
        "transcription": "blaʊ̯",
        "id": "de_starter_colours_004"
    },
    {
        "word": "grün",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟩",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Die Farbe von Gras und Blättern.",
                "examples": [
                    "Das Gras im Garten ist grün."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ɡʁyːn",
        "id": "de_starter_colours_005"
    },
    {
        "word": "gelb",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟨",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Die Farbe der Sonne und von Zitronen.",
                "examples": [
                    "Die Zitrone ist gelb."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ɡɛlp",
        "id": "de_starter_colours_006"
    },
    {
        "word": "grau",
        "level": "starter",
        "theme": "colours",
        "emoji": "🔘",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Die Farbe zwischen Schwarz und Weiß.",
                "examples": [
                    "Der Himmel ist grau und es regnet."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ɡʁaʊ̯",
        "id": "de_starter_colours_007"
    },
    {
        "word": "braun",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟫",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Die Farbe von Holz und Erde.",
                "examples": [
                    "Der Bär ist braun."
                ]
            }
        ],
        "lang": "de",
        "transcription": "bʁaʊ̯n",
        "id": "de_starter_colours_008"
    },
    {
        "word": "rosa",
        "level": "starter",
        "theme": "colours",
        "emoji": "🩷",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Helle rote Farbe.",
                "examples": [
                    "Das Kleid ist rosa."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈʁoːza",
        "id": "de_starter_colours_009"
    },
    {
        "word": "orange",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟧",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Die Farbe von Orangen.",
                "examples": [
                    "Die Karotte ist orange."
                ]
            }
        ],
        "lang": "de",
        "transcription": "oˈʁaːŋʃ",
        "id": "de_starter_colours_010"
    },
    {
        "word": "violett",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟪",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Lila Farbe.",
                "examples": [
                    "Die Blume ist violett."
                ]
            }
        ],
        "lang": "de",
        "transcription": "vioˈlɛt",
        "id": "de_starter_colours_011"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
