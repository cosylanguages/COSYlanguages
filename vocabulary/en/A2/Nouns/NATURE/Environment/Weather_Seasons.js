(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-NAT-060",
        "word": "darkness",
        "emoji": "🌙",
        "form": "noun",
        "definitions": [
            {
                "text": "The partial or total absence of light.",
                "examples": [
                    "Cats can see well in total darkness.",
                    "The street was shrouded in darkness."
                ]
            }
        ],
        "subtext": "gloom, shade",
        "synonyms": [
            "gloom",
            "shade"
        ],
        "transcription": "ˈdɑːknəs",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "nature",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Weather_Seasons"
    },
    {
        "id": "A2-NOUN-NAT-073",
        "word": "heat",
        "emoji": "🔥",
        "form": "noun",
        "definitions": [
            {
                "text": "The quality of being hot; high temperature.",
                "examples": [
                    "Summer heat made everyone seek shade.",
                    "Turn down the heat on the stove."
                ]
            }
        ],
        "subtext": "warmth, hotness",
        "synonyms": [
            "warmth",
            "hotness"
        ],
        "transcription": "hiːt",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "nature",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Weather_Seasons"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
