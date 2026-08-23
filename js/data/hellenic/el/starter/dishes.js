// TODO: verify level classification
(function() {
    const lang = "el";
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_001"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
