// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "cabeza",
        "level": "starter",
        "theme": "body",
        "emoji": "🗣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte superior del cuerpo humano.",
                "examples": [
                    "Me duele la cabeza."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ka.ˈβe.θa",
        "id": "es_starter_body_001"
    },
    {
        "word": "mano",
        "level": "starter",
        "theme": "body",
        "emoji": "✋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte del cuerpo para coger cosas.",
                "examples": [
                    "Lávate las manos antes de comer."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈma.no",
        "id": "es_starter_body_002"
    },
    {
        "word": "pie",
        "level": "starter",
        "theme": "body",
        "emoji": "🦶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte del cuerpo para caminar.",
                "examples": [
                    "Me duelen los pies."
                ]
            }
        ],
        "lang": "es",
        "transcription": "pje",
        "id": "es_starter_body_003"
    },
    {
        "word": "ojo",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Órgano de la visión.",
                "examples": [
                    "Tiene los ojos azules."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈo.xo",
        "id": "es_starter_body_004"
    },
    {
        "word": "oreja",
        "level": "starter",
        "theme": "body",
        "emoji": "👂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Órgano de la audición.",
                "examples": [
                    "Escuchamos con las orejas."
                ]
            }
        ],
        "lang": "es",
        "transcription": "o.ˈre.xa",
        "id": "es_starter_body_005"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
