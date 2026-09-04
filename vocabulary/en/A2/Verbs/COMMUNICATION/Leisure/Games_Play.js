(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-COM-004",
        "word": "amuse",
        "emoji": "😄",
        "form": "verb",
        "definitions": [
            {
                "text": "To cause someone to find something funny or entertaining.",
                "examples": [
                    "The clown's tricks amused the children.",
                    "She amused herself by reading novels."
                ]
            }
        ],
        "subtext": "entertain, delight",
        "synonyms": [
            "entertain",
            "delight"
        ],
        "transcription": "əˈmjuːz",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Games_Play"
    },
    {
        "id": "A2-VERB-COM-005",
        "word": "bet",
        "emoji": "🎲",
        "form": "verb",
        "definitions": [
            {
                "text": "To risk a sum of money on the outcome of an unpredictable event.",
                "examples": [
                    "I bet five dollars on the horse race.",
                    "I bet you will love this new film."
                ]
            }
        ],
        "subtext": "wager, gamble",
        "synonyms": [
            "wager",
            "gamble"
        ],
        "transcription": "bet",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Games_Play"
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
