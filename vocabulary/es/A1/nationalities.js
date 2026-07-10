// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "español",
        "level": "starter",
        "theme": "people",
        "emoji": "🇪🇸",
        "form": "adjective",
        "definitions": [
            {
                "text": "De España.",
                "examples": [
                    "Soy español."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "nationalities",
        "id": "es_starter_people_014",
        "transcription": ""
    },
    {
        "word": "francés",
        "level": "starter",
        "theme": "people",
        "emoji": "🇫🇷",
        "form": "adjective",
        "definitions": [
            {
                "text": "De Francia.",
                "examples": [
                    "Él es francés."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "nationalities",
        "id": "es_starter_people_015",
        "transcription": ""
    },
    {
        "word": "italiano",
        "level": "starter",
        "theme": "people",
        "emoji": "🇮🇹",
        "form": "adjective",
        "definitions": [
            {
                "text": "De Italia.",
                "examples": [
                    "Ella es italiana."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "nationalities",
        "id": "es_starter_people_016",
        "transcription": ""
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
