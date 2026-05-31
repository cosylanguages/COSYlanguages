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
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_017"
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
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_018"
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
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_019"
    }
];
    const lang = "pt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
