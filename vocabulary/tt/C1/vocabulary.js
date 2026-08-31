// TODO: verify level classification
(function() {
    const lang = "tt";
    const data = [
    {
        "word": "концепция",
        "level": "advanced",
        "theme": "philosophy",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Төп карашлар һәм идеялар системасы.",
                "examples": [
                    "Фәнни концепция төзү."
                ]
            }
        ],
        "lang": "tt",
        "transcription": "",
        "id": "tt_advanced_philosophy_001"
    },
    {
        "word": "автономия",
        "level": "advanced",
        "theme": "politics",
        "emoji": "🏛️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Үз-үзеңне идарә итү хокукы.",
                "examples": [
                    "Мәдәни автономия ашу."
                ]
            }
        ],
        "lang": "tt",
        "transcription": "",
        "id": "tt_advanced_politics_001"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
