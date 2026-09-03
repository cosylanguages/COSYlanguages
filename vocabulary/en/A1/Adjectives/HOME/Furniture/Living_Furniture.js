(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-HOM-001",
        "word": "comfortable",
        "emoji": "\ud83d\udecb\ufe0f",
        "form": "adjective",
        "subtext": "a comfortable chair / feel comfortable",
        "synonyms": [
            "relaxed",
            "cozy"
        ],
        "definitions": [
            {
                "text": "Making you feel physically relaxed, without any pain or without being too hot, cold, etc.",
                "examples": [
                    "This chair is very comfortable."
                ]
            }
        ],
        "comparative": "more comfortable",
        "superlative": "the most comfortable",
        "transcription": "\u02c8k\u0259mf\u0259rt\u0259b\u0259l",
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "legacy_id": "A1-HOME-17",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Furniture",
        "pos_section": "Adjectives",
        "sub_subcategory": "Living_Furniture"
    },
    {
        "id": "A1-ADJ-HOM-003",
        "word": "uncomfortable",
        "emoji": "\ud83e\ude91",
        "form": "adjective",
        "subtext": "feel uncomfortable / uncomfortable chair",
        "synonyms": [
            "awkward",
            "painful"
        ],
        "definitions": [
            {
                "text": "Not comfortable; causing physical pain or feeling awkward.",
                "examples": [
                    "This chair is very uncomfortable."
                ]
            }
        ],
        "comparative": "more uncomfortable",
        "superlative": "the most uncomfortable",
        "transcription": "\u0259n\u02c8k\u0259mf\u0259rt\u0259b\u0259l",
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "legacy_id": "A1-HOME-70",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Furniture",
        "pos_section": "Adjectives",
        "sub_subcategory": "Living_Furniture"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
