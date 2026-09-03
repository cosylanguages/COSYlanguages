(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-NOUN-SEL-148",
            "word": "kid",
            "emoji": "🧒",
            "form": "noun",
            "definitions": [
                    {
                            "text": "A child or young person.",
                            "examples": [
                                    "The kids played happily in the park.",
                                    "She took her kids to school."
                            ]
                    }
            ],
            "subtext": "child, youngster",
            "synonyms": [
                    "child",
                    "youngster"
            ],
            "transcription": "kɪd",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "family",
            "domain": "SELF",
            "subcategory": "Family",
            "pos_section": "Nouns",
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
