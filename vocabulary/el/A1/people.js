// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Σωκράτης",
        "level": "starter",
        "theme": "marital_status",
        "id": "el_starter_people_001",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Σωκράτης' in el.",
                "examples": []
            }
        ]
    }
]
    const lang = "el";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
