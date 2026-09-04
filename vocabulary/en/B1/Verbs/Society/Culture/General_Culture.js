(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-VERB-SOC-007",
        "word": "run out",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "To have no more of something left.",
                "examples": [
                    "The project ran out of budget three weeks early."
                ]
            }
        ],
        "transcription": "rʌn aʊt",
        "emoji": "📉",
        "_legacy": {
            "subtext": "run out of money / run out of time / run out of ideas",
            "classification": "phrasal",
            "aspect": "action",
            "v2": "ran out",
            "v3": "run out",
            "group": "regular",
            "auxiliary": "have"
        },
        "legacy_id": "B1-SOC-63",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
