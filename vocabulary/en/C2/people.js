// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_proficiency_people_001",
        "word": "Marilyn Monroe",
        "form": "other",
        "definitions": [
            {
                "text": "Marilyn Monroe",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "proficiency",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_people_002",
        "word": "Aristotle",
        "form": "other",
        "definitions": [
            {
                "text": "Aristotle",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "proficiency",
        "theme": "people",
        "sub_theme": null
    }
];
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
