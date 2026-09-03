(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-SEL-045",
        "word": "belong",
        "emoji": "\ud83c\udfe0",
        "form": "verb",
        "transcription": "\ud83c\uddec\ud83c\udde7 b\u026a\u02c8l\u0252\u014b | \ud83c\uddfa\ud83c\uddf8 b\u026a\u02c8l\u0251\u02d0\u014b",
        "definitions": [
            {
                "text": "To be the property of someone.",
                "examples": [
                    "This book belongs to me.",
                    "Who does this bag belong to?"
                ]
            }
        ],
        "v2": "belonged",
        "v3": "belonged",
        "classification": "regular",
        "group": "regular",
        "subtext": "belong TO someone/something",
        "auxiliary": "have",
        "v4": "belonging",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null,
        "legacy_id": "A1-SELF-13",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Identity_Details"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
