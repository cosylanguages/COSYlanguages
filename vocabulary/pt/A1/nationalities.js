// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "português",
        "level": "starter",
        "theme": "social",
        "emoji": "🇵🇹",
        "form": "adjective",
        "definitions": [
            {
                "text": "De Portugal.",
                "examples": [
                    "Sou português."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_152"
    },
    {
        "word": "brasileiro",
        "level": "starter",
        "theme": "social",
        "emoji": "🇧🇷",
        "form": "adjective",
        "definitions": [
            {
                "text": "Do Brasil.",
                "examples": [
                    "Ele é brasileiro."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_153"
    },
    {
        "word": "inglês",
        "level": "starter",
        "theme": "social",
        "emoji": "🇬🇧",
        "form": "adjective",
        "definitions": [
            {
                "text": "Da Inglaterra.",
                "examples": [
                    "Ela é inglesa."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_154"
    }
];
    const lang = "pt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
