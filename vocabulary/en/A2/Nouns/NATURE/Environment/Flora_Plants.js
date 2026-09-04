(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-NAT-071",
        "word": "harvest",
        "emoji": "🌾",
        "form": "noun",
        "definitions": [
            {
                "text": "The process or period of gathering in crops.",
                "examples": [
                    "Farmers celebrate a bountiful autumn harvest.",
                    "Rain delayed the wheat harvest."
                ]
            }
        ],
        "subtext": "reaping, crop",
        "synonyms": [
            "reaping",
            "crop"
        ],
        "transcription": "ˈhɑːvɪst",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "nature",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Flora_Plants"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
