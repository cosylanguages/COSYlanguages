(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-TRA-010",
        "word": "bound",
        "emoji": "🚆",
        "form": "adjective",
        "definitions": [
            {
                "text": "Heading toward a specified place.",
                "examples": [
                    "This train is northbound to Edinburgh.",
                    "We are bound for the coast tomorrow."
                ]
            }
        ],
        "subtext": "headed, destined",
        "synonyms": [
            "headed",
            "destined"
        ],
        "transcription": "baʊnd",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "travel",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Adjectives",
        "sub_subcategory": "Travel_Journeys"
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
