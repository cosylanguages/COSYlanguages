// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "lasagna",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "form": "noun",
        "transcription": "laˈzaɲɲa",
        "plural": "lasagne",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un tipo di pasta italiana a strati con carne e formaggio.",
                "examples": [
                    "La lasagna è deliziosa."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "lasagna al forno",
        "antonyms": [],
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_food_drink_001"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();