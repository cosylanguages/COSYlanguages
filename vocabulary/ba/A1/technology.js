// TODO: verify level classification
(function() {
    const lang = "ba";
    const data = [
    {
        "word": "компьютер",
        "level": "starter",
        "theme": "technology",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Электрон машинала эшләү.",
                "examples": [
                    "Компьютерҙа эшләү."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_technology_001"
    },
    {
        "word": "телефон",
        "level": "starter",
        "theme": "technology",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Аралашыу ҡоролмаһы.",
                "examples": [
                    "Телефондан шылтыратыу."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_technology_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
