// TODO: verify level classification
(function() {
    const lang = "br";
    const data = [
    {
        "word": "krampouezh",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥞",
        "form": "noun",
        "definitions": [
            {
                "text": "Boued tipik eus Breizh.",
                "examples": [
                    "Krampouezh dous zo mat."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_starter_food_drink_001"
    },
    {
        "word": "galetez",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "noun",
        "definitions": [
            {
                "text": "Krampouezh gant bleud ed-du.",
                "examples": [
                    "Debriñ a reomp galetez."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_starter_food_drink_002"
    },
    {
        "word": "kouign-amann",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥮",
        "form": "noun",
        "definitions": [
            {
                "text": "Gwastell gant amann ha sukr.",
                "examples": [
                    "Ar kouign-amann zo tomm."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_starter_food_drink_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
