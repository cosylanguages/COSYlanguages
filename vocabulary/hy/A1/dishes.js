// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "խորոված",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥩",
        "form": "noun",
        "definitions": [
            {
                "text": "Հայկական խորոված միս:",
                "examples": [
                    "Խորովածը շատ համեղ է:"
                ]
            }
        ],
        "id": "hy_starter_dishes_001",
        "lang": "hy",
        "transcription": ""
    },
    {
        "word": "տոլմա",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍲",
        "form": "noun",
        "definitions": [
            {
                "text": "Միս խաղողի տերևների մեջ:",
                "examples": [
                    "Մենք տոլմա ենք ուտում:"
                ]
            }
        ],
        "id": "hy_starter_dishes_002",
        "lang": "hy",
        "transcription": ""
    },
    {
        "word": "լավաշ",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🫓",
        "form": "noun",
        "definitions": [
            {
                "text": "Հայկական բարակ հաց:",
                "examples": [
                    "Լավաշը ավանդական հաց է:"
                ]
            }
        ],
        "id": "hy_starter_dishes_003",
        "lang": "hy",
        "transcription": ""
    }
];
    const lang = "hy";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
