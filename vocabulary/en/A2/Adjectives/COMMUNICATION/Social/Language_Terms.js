(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-COM-010",
        "word": "blank",
        "emoji": "📄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Bare, clean, or containing no writing.",
                "examples": [
                    "Fill in the blank spaces on the form.",
                    "She stared with a blank expression."
                ]
            }
        ],
        "subtext": "empty, bare",
        "synonyms": [
            "empty",
            "bare"
        ],
        "transcription": "blæŋk",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "language",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Adjectives",
        "sub_subcategory": "Language_Terms"
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
