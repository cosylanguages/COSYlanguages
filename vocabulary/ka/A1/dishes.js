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
                    "examples": ["ხაჭაპური ძალიან გემრიელია."]
                }
            ]
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
                    "examples": ["ჩვენ ვჭამთ ხინკალს."]
                }
            ]
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
                    "examples": ["მწვადი ტრადიციული კერძია."]
                }
            ]
        }
    ];
    const lang = "ka";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
