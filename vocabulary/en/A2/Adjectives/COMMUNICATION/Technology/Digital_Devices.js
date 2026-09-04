(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-COM-011",
        "word": "attached",
        "emoji": "📎",
        "form": "adjective",
        "definitions": [
            {
                "text": "Joined or fastened to something.",
                "examples": [
                    "Please find the attached document in email.",
                    "The garage is attached to the house."
                ]
            }
        ],
        "subtext": "connected, fastened",
        "synonyms": [
            "connected",
            "fastened"
        ],
        "transcription": "əˈtætʃt",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "technology",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Digital_Devices"
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
