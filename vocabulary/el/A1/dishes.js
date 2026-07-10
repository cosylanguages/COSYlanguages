// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "μουσακάς",
        "level": "starter",
        "theme": "food_drink",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🥘",
        "form": "noun",
        "definitions": [
            {
                "text": "Παραδοσιακό ελληνικό φαγητό με μελιτζάνες και κιμά.",
                "examples": [
                    "Μου αρέσει ο μουσακάς."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "",
        "id": "el_starter_dishes_001",
        "lang": "el",
        "transcription": ""
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();