// TODO: verify level classification
(function() {
    const lang = "hy";
    const data = [
    {
        "word": "համակարգիչ",
        "level": "starter",
        "theme": "technology",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Էլեկտրոնային սարք աշխատանքի համար:",
                "examples": [
                    "Համակարգչով աշխատել:"
                ]
            }
        ],
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_technology_001"
    },
    {
        "word": "հեռախոս",
        "level": "starter",
        "theme": "technology",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Կապի սարքավորում:",
                "examples": [
                    "Հեռախոսով զանգահարել:"
                ]
            }
        ],
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_technology_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
