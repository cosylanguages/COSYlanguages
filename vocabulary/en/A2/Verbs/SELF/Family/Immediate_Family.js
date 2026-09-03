(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-VERB-SEL-092",
            "word": "adopt",
            "emoji": "👨‍👩‍👧",
            "form": "verb",
            "definitions": [
                    {
                            "text": "To legally take another's child and bring it up as one's own.",
                            "examples": [
                                    "They decided to adopt a rescue puppy.",
                                    "The company adopted a new remote work policy."
                            ]
                    }
            ],
            "subtext": "foster, embrace",
            "synonyms": [
                    "foster",
                    "embrace"
            ],
            "transcription": "əˈdɒpt",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "family",
            "domain": "SELF",
            "subcategory": "Family",
            "pos_section": "Verbs",
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
