(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-COM-017",
        "word": "composition",
        "emoji": "🎼",
        "form": "noun",
        "definitions": [
            {
                "text": "A work of music, literature, or art.",
                "examples": [
                    "The orchestra played a classical composition.",
                    "Write a short essay composition."
                ]
            }
        ],
        "subtext": "piece, creation",
        "synonyms": [
            "piece",
            "creation"
        ],
        "transcription": "ˌkɒmpəˈzɪʃn",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Music_Instruments"
    },
    {
        "id": "A2-NOUN-COM-018",
        "word": "harmony",
        "emoji": "🎶",
        "form": "noun",
        "definitions": [
            {
                "text": "The combination of simultaneously sounded musical notes to produce chords.",
                "examples": [
                    "Singers sang in beautiful four-part harmony.",
                    "Live together in peace and harmony."
                ]
            }
        ],
        "subtext": "concord, unity",
        "synonyms": [
            "concord",
            "unity"
        ],
        "transcription": "ˈhɑːməni",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Music_Instruments"
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
