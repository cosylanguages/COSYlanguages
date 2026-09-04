(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-OTH-SOC-004",
        "word": "against",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "preposition",
        "definitions": [
            {
                "text": "Opposed to something.",
                "examples": [
                    "He is strongly against the new policy."
                ]
            }
        ],
        "transcription": "əˈɡɛnst",
        "emoji": "🚫",
        "_legacy": {
            "subtext": "be against, vote against"
        },
        "legacy_id": "B1-SOC-03",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Other_POS",
        "sub_subcategory": "Social_Relations"
    },
    {
        "id": "B1-OTH-SOC-005",
        "word": "in favour of",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Supporting or agreeing with something.",
                "examples": [
                    "Most employees are in favour of flexible working."
                ]
            }
        ],
        "transcription": "ɪn ˈfeɪvər əv",
        "emoji": "✅",
        "_legacy": {
            "subtext": "be in favour of, vote in favour of"
        },
        "legacy_id": "B1-SOC-32",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Other_POS",
        "sub_subcategory": "Social_Relations"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
