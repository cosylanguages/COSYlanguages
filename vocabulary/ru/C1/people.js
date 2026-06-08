// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ru_advanced_people_004",
        "word": "Мария Шарапова",
        "lang": "ru",
        "level": "advanced",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Мария Шарапова",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_advanced_people_005",
        "word": "Анна Ахматова",
        "lang": "ru",
        "level": "advanced",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Анна Ахматова",
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
