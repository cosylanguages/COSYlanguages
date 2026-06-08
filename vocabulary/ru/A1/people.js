// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ru_starter_people_010",
        "word": "Александр Пушкин",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Александр Пушкин",
                "examples": []
            }
        ]
    }
];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
