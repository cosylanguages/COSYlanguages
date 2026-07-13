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
        ],
        "transcription": "",
        "emoji": "✨"
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
        ],
        "transcription": "",
        "emoji": "✨"
    }
];
    const lang = "ru";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();