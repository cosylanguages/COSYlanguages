(function() {
    const data = [
    {
        "id": "ru_advanced_people_noun_0f010d3aac",
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
        "id": "ru_advanced_people_noun_eb405930db",
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
})();