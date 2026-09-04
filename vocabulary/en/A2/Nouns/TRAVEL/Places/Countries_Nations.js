(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-TRA-074",
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

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
