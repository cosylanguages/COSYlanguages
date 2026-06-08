// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ru_elementary_people_023",
        "word": "Лев Толстой",
        "lang": "ru",
        "level": "elementary",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Лев Толстой",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_people_024",
        "word": "Виктор Цой",
        "lang": "ru",
        "level": "elementary",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Виктор Цой",
                "examples": []
            }
        ]
    }
];
    const lang = "ru";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
