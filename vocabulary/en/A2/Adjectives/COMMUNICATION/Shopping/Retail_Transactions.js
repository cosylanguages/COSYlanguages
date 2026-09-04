(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-COM-004",
        "word": "appealing",
        "emoji": "✨",
        "form": "adjective",
        "definitions": [
            {
                "text": "Attractive or interesting.",
                "examples": [
                    "The hotel offer sounds very appealing.",
                    "Warm soup is appealing on a cold day."
                ]
            }
        ],
        "subtext": "attractive, inviting",
        "synonyms": [
            "attractive",
            "inviting"
        ],
        "transcription": "əˈpiːlɪŋ",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "shopping",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Adjectives",
        "sub_subcategory": "Retail_Transactions"
    }
];

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
