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
        "id": "de_starter_dishes_001",
        "lang": "de",
        "transcription": ""
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
        "id": "de_starter_dishes_002",
        "lang": "de",
        "transcription": ""
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
        "id": "de_starter_dishes_003",
        "lang": "de",
        "transcription": ""
    }
];
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
