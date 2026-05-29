// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_advanced_people_009",
        "word": "Elon Musk",
        "form": "other",
        "definitions": [
            {
                "text": "Elon Musk",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_advanced_people_010",
        "word": "Nelson Mandela",
        "form": "other",
        "definitions": [
            {
                "text": "Nelson Mandela",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "advanced",
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
