// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "negro",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬛",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "El color de la noche.",
                "examples": [
                    "Tengo un gato negro."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈne.ɡro",
        "id": "es_starter_colours_001"
    },
    {
        "word": "blanco",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬜",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "El color de la nieve y de la leche.",
                "examples": [
                    "La nieve es blanca."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈblan.ko",
        "id": "es_starter_colours_002"
    },
    {
        "word": "rojo",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟥",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "El color del fuego y de las fresas.",
                "examples": [
                    "Me gusta la manzana roja."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈro.xo",
        "id": "es_starter_colours_003"
    },
    {
        "word": "azul",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟦",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "El color del cielo claro y del mar.",
                "examples": [
                    "El cielo está azul hoy."
                ]
            }
        ],
        "lang": "es",
        "transcription": "a.ˈθul",
        "id": "es_starter_colours_004"
    },
    {
        "word": "verde",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟩",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "El color de las plantas y de las hojas.",
                "examples": [
                    "La hierba es verde."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈber.ðe",
        "id": "es_starter_colours_005"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
