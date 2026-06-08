// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_intermediate_people_006",
        "word": "Leonardo da Vinci",
        "form": "other",
        "definitions": [
            {
                "text": "Leonardo da Vinci",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_people_007",
        "word": "Stephen Hawking",
        "form": "other",
        "definitions": [
            {
                "text": "Stephen Hawking",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
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
