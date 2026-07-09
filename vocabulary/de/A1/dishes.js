// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Currywurst",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🌭",
        "form": "noun",
        "definitions": [
            {
                "text": "Wurst mit Curry-Sauce.",
                "examples": [
                    "Eine Currywurst bitte."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_001"
    },
    {
        "word": "Schnitzel",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥩",
        "form": "noun",
        "definitions": [
            {
                "text": "Gebratenes Fleisch.",
                "examples": [
                    "Das Schnitzel schmeckt gut."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_002"
    },
    {
        "word": "Brezel",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥨",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein deutsches Gebäck.",
                "examples": [
                    "Ich mag Brezeln mit Salz."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_003"
    }
];
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
