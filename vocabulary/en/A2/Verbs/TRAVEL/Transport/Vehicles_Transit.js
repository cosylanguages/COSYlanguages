(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-TRA-018",
        "word": "board",
        "emoji": "🎫",
        "form": "verb",
        "definitions": [
            {
                "text": "To get on a ship, aircraft, train, or bus.",
                "examples": [
                    "Passengers board the aircraft twenty minutes before flight.",
                    "We boarded the ferry at sunrise."
                ]
            }
        ],
        "subtext": "get on, embark",
        "synonyms": [
            "get on",
            "embark"
        ],
        "transcription": "bɔːd",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "travel",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Vehicles_Transit"
    },
    {
        "id": "A2-VERB-TRA-019",
        "word": "block",
        "emoji": "🚧",
        "form": "verb",
        "definitions": [
            {
                "text": "To make transmission or movement impossible.",
                "examples": [
                    "Fallen trees blocked the main highway.",
                    "A big truck blocked the driveway."
                ]
            }
        ],
        "subtext": "obstruct, stop",
        "synonyms": [
            "obstruct",
            "stop"
        ],
        "transcription": "blɒk",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "travel",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Vehicles_Transit"
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
