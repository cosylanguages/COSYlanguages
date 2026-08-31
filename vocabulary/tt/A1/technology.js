// TODO: verify level classification
(function() {
    const lang = "tt";
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
                "text": "Электрон эш машинасында эшләү.",
                "examples": [
                    "Компьютерда эшләү."
                ]
            }
        ],
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_technology_001"
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
                "text": "Аралашу җайланмасы.",
                "examples": [
                    "Телефоннан шылтырату."
                ]
            }
        ],
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_technology_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
