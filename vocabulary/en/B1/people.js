// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_intermediate_people_009",
        "word": "Leonardo da Vinci",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "other",
        "definitions": [
            {
                "text": "Leonardo da Vinci",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "en_intermediate_people_010",
        "word": "Stephen Hawking",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "other",
        "definitions": [
            {
                "text": "Stephen Hawking",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    }
];
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
