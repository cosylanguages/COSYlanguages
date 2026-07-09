(function() {
    const data = [
    {
        "id": "ru_upper_intermediate_people_007",
        "word": "Пётр I",
        "lang": "ru",
        "level": "upper_intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Пётр I",
                "examples": []
            }
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "id": "ru_upper_intermediate_people_008",
        "word": "Фёдор Достоевский",
        "lang": "ru",
        "level": "upper_intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Фёдор Достоевский",
                "examples": []
            }
        ],
        "transcription": "",
        "emoji": "✨"
    }
];
    const lang = "ru";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
