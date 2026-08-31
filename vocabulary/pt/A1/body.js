// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "cabeça",
        "level": "starter",
        "theme": "body",
        "emoji": "🗣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte superior do corpo humano.",
                "examples": [
                    "Dói-me a cabeça."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "kɐ.ˈbe.sɐ",
        "id": "pt_starter_body_001"
    },
    {
        "word": "mão",
        "level": "starter",
        "theme": "body",
        "emoji": "✋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte do corpo para agarrar coisas.",
                "examples": [
                    "Lava as mãos antes de comer."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "mɐ̃w̃",
        "id": "pt_starter_body_002"
    },
    {
        "word": "pé",
        "level": "starter",
        "theme": "body",
        "emoji": "🦶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte do corpo para andar.",
                "examples": [
                    "Dóiem-me os pés."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "pɛ",
        "id": "pt_starter_body_003"
    },
    {
        "word": "olho",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Órgão da visão.",
                "examples": [
                    "Ela tem olhos azuis."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈo.ʎu",
        "id": "pt_starter_body_004"
    },
    {
        "word": "orelha",
        "level": "starter",
        "theme": "body",
        "emoji": "👂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Órgão da audição.",
                "examples": [
                    "Ouvimos com as orelhas."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "o.ˈre.ʎɐ",
        "id": "pt_starter_body_005"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
