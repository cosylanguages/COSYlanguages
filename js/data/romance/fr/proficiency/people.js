// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "fr_proficiency_people_001",
        "word": "Molière",
        "lang": "fr",
        "level": "proficiency",
        "theme": "people",
        "form": "noun",
        "emoji": "🎭",
        "definitions": [
            {
                "text": "Jean-Baptiste Poquelin, dit Molière, est un dramaturge et comédien français.",
                "examples": []
            }
        ],
        "transcription": ""
    }
];
    const lang = "fr";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
