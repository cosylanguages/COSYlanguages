// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "bacalhau",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🐟",
        "form": "noun",
        "definitions": [
            {
                "text": "Peixe salgado típico de Portugal.",
                "examples": [
                    "Eu gosto de bacalhau à brás."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "id": "pt_starter_dishes_001",
        "lang": "pt",
        "transcription": ""
    },
    {
        "word": "feijoada",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍲",
        "form": "noun",
        "definitions": [
            {
                "text": "Prato de feijão e carne.",
                "examples": [
                    "A feijoada é um prato tradicional."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "id": "pt_starter_dishes_002",
        "lang": "pt",
        "transcription": ""
    },
    {
        "word": "brigadeiro",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍫",
        "form": "noun",
        "definitions": [
            {
                "text": "Doce de chocolate brasileiro.",
                "examples": [
                    "O brigadeiro é muito doce."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "id": "pt_starter_dishes_003",
        "lang": "pt",
        "transcription": ""
    }
];
    const lang = "pt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
