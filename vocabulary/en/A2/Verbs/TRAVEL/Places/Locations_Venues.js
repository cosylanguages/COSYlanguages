(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-TRA-001",
        "word": "decorate",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "decorate a room",
        "synonyms": [
            "redecorate",
            "interior decoration"
        ],
        "definitions": [
            {
                "text": "To make a place more attractive, especially by painting.",
                "examples": [
                    "They decorated the flat before moving in."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "decorated",
        "v3": "decorated",
        "transcription": "ˈdɛkəreɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "decorating",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A2-TRV-10",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Verbs",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A2-VERB-TRA-002",
        "word": "participate",
        "emoji": "🙋",
        "form": "verb",
        "subtext": "participate in something / participate in a meeting / participate in a discussion",
        "synonyms": [
            "take part",
            "join"
        ],
        "definitions": [
            {
                "text": "To take part in or become involved in an activity.",
                "examples": [
                    "Everyone is encouraged to participate in the project.",
                    "She participated in the marathon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "participated",
        "v3": "participated",
        "transcription": "pɑːrˈtɪsɪpeɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "participating",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A2-TRV-22",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Verbs",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A2-VERB-TRA-003",
        "word": "book",
        "emoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To reserve accommodation, a ticket, or a seat.",
                "examples": [
                    "Book your flights early to get cheaper prices.",
                    "I booked a table for two at the bistro."
                ]
            }
        ],
        "subtext": "reserve",
        "synonyms": [
            "reserve"
        ],
        "transcription": "bʊk",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "travel",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Verbs",
        "sub_subcategory": "Locations_Venues"
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
