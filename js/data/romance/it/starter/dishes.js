(function() {
    const data = [
    {
        "word": "lasagna",
        "level": "starter",
        "theme": "basic_foods_A1",
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
        "antonyms": []
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();