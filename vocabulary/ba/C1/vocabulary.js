// TODO: verify level classification
(function() {
    const lang = "ba";
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
                "text": "Төп ҡараштар һәм идеялар системаһы.",
                "examples": [
                    "Фәнни концепция төҙөү."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_advanced_philosophy_001"
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
                "text": "Үҙ-үҙеңде идарә итеү хоҡуғы.",
                "examples": [
                    "Мәҙәни автономия ашыу."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_advanced_politics_001"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
