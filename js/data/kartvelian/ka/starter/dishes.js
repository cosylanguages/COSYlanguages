// TODO: verify level classification
(function() {
    const lang = "ka";
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
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_food_drink_001"
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
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_food_drink_002"
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
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_food_drink_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
