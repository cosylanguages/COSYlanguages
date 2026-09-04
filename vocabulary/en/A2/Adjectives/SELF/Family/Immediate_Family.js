(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-SEL-119",
        "word": "beloved",
        "emoji": "❤️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Dearly loved.",
                "examples": [
                    "She visited her beloved grandmother.",
                    "The dog was a beloved family pet."
                ]
            }
        ],
        "subtext": "cherished, dear",
        "synonyms": [
            "cherished",
            "dear"
        ],
        "transcription": "bɪˈlʌvɪd",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "family",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Adjectives",
        "sub_subcategory": "Immediate_Family"
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
