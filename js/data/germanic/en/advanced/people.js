(function() {
    const data = [
    {
        "id": "en_advanced_people_other_elon_musk",
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
        "sub_theme": null,
        "transcription": "",
        "emoji": "✨"
    },
    {
        "id": "en_advanced_people_other_nelson_mandela",
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
        "sub_theme": null,
        "transcription": "",
        "emoji": "✨"
    }
];
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();