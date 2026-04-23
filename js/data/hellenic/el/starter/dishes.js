(function() {
    const data = [
    {
        "word": "μουσακάς",
        "level": "starter",
        "theme": "basic_foods_A1",
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
        "subtext": ""
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();