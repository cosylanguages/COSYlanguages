// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ru_intermediate_people_009",
        "word": "Юрий Гагарин",
        "lang": "ru",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Юрий Гагарин",
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
