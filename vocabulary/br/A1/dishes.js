// TODO: verify level classification
(function() {
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
        "id": "br_starter_dishes_001",
        "lang": "br",
        "transcription": ""
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
        "id": "br_starter_dishes_002",
        "lang": "br",
        "transcription": ""
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
        "id": "br_starter_dishes_003",
        "lang": "br",
        "transcription": ""
    }
];
    const lang = "br";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
