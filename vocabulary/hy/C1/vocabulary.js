// TODO: verify level classification
(function() {
    const lang = "hy";
    const data = [
    {
        "word": "հայեցակարգ",
        "level": "advanced",
        "theme": "philosophy",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Հիմնական հայացքների և գաղափարների համակարգ:",
                "examples": [
                    "Գիտական հայեցակարգ մշակել:"
                ]
            }
        ],
        "lang": "hy",
        "transcription": "",
        "id": "hy_advanced_philosophy_001"
    },
    {
        "word": "ինքնավարություն",
        "level": "advanced",
        "theme": "politics",
        "emoji": "🏛️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Ինքնակառավարման իրավունք:",
                "examples": [
                    "Մշակութային ինքնավարություն:"
                ]
            }
        ],
        "lang": "hy",
        "transcription": "",
        "id": "hy_advanced_politics_001"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
