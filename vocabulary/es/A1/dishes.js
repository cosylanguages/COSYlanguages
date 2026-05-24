// TODO: verify level classification
(function() {
    const data = [
        {
            "word": "paella",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🥘",
            "form": "noun",
            "definitions": [
                {
                    "text": "Plato de arroz típico español.",
                    "examples": ["Me gusta la paella de marisco."]
                }
            ],
            "article": "la",
            "gender": "feminine"
        },
        {
            "word": "tortilla",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🍳",
            "form": "noun",
            "definitions": [
                {
                    "text": "Plato de huevos y patatas.",
                    "examples": ["La tortilla de patatas es deliciosa."]
                }
            ],
            "article": "la",
            "gender": "feminine"
        },
        {
            "word": "gazpacho",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🥣",
            "form": "noun",
            "definitions": [
                {
                    "text": "Sopa fría de tomate.",
                    "examples": ["El gazpacho es bueno en verano."]
                }
            ],
            "article": "el",
            "gender": "masculine"
        }
    ];
    const lang = "es";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
