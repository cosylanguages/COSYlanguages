(function() {
    const data = [
    {
        "id": "en_upper_intermediate_people_008",
        "word": "William Shakespeare",
        "form": "other",
        "definitions": [
            {
                "text": "William Shakespeare",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_upper_intermediate_people_009",
        "word": "Virginia Woolf",
        "form": "other",
        "definitions": [
            {
                "text": "Virginia Woolf",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "upper_intermediate",
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
