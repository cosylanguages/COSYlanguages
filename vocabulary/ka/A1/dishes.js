// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "ხაჭაპური",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🧀",
        "form": "noun",
        "definitions": [
            {
                "text": "ქართული ყველის პური.",
                "examples": [
                    "ხაჭაპური ძალიან გემრიელია."
                ]
            }
        ],
        "id": "ka_starter_dishes_001",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "ხინკალი",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥟",
        "form": "noun",
        "definitions": [
            {
                "text": "ქართული ხორცის ცომეული.",
                "examples": [
                    "ჩვენ ვჭამთ ხინკალს."
                ]
            }
        ],
        "id": "ka_starter_dishes_002",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "მწვადი",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥩",
        "form": "noun",
        "definitions": [
            {
                "text": "შემწვარი ხორცი.",
                "examples": [
                    "მწვადი ტრადიციული კერძია."
                ]
            }
        ],
        "id": "ka_starter_dishes_003",
        "lang": "ka",
        "transcription": ""
    }
];
    const lang = "ka";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
