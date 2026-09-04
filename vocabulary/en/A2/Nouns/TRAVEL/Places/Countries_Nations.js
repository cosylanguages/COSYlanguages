(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-TRA-002",
        "word": "globe",
        "emoji": "🌐",
        "form": "noun",
        "definitions": [
            {
                "text": "A spherical model of the earth.",
                "examples": [
                    "The geography teacher spun the classroom globe.",
                    "News spread rapidly across the globe."
                ]
            }
        ],
        "subtext": "earth, world",
        "synonyms": [
            "earth",
            "world"
        ],
        "transcription": "ɡləʊb",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "travel",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Countries_Nations"
    },
    {
        "id": "A2-NOUN-TRA-003",
        "word": "kingdom",
        "emoji": "👑",
        "form": "noun",
        "definitions": [
            {
                "text": "A country, state, or territory ruled by a king or queen.",
                "examples": [
                    "The United Kingdom consists of four countries.",
                    "Tales tell of an ancient fantasy kingdom."
                ]
            }
        ],
        "subtext": "realm, empire",
        "synonyms": [
            "realm",
            "empire"
        ],
        "transcription": "ˈkɪŋdəm",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "travel",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Countries_Nations"
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
