// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "paella",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥘",
        "form": "noun",
        "definitions": [
            {
                "text": "Plato de arroz típico español.",
                "examples": [
                    "Me gusta la paella de marisco."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_017",
        "transcription": ""
    },
    {
        "word": "tortilla",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "noun",
        "definitions": [
            {
                "text": "Plato de huevos y patatas.",
                "examples": [
                    "La tortilla de patatas es deliciosa."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_018",
        "transcription": ""
    },
    {
        "word": "gazpacho",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥣",
        "form": "noun",
        "definitions": [
            {
                "text": "Sopa fría de tomate.",
                "examples": [
                    "El gazpacho es bueno en verano."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_019",
        "transcription": ""
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
