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
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_food_drink_001"
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
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_food_drink_002"
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
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_food_drink_003"
    }
];
    const lang = "hy";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
