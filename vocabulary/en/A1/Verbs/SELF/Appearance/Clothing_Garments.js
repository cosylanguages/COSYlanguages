(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-SEL-001",
        "word": "fit",
        "emoji": "\ud83d\udc55",
        "form": "verb",
        "subtext": "fit well / does it fit?",
        "definitions": [
            {
                "text": "To be the right size or shape for someone or something.",
                "examples": [
                    "These shoes don't fit me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "fitted",
        "v3": "fitted",
        "group": "regular",
        "transcription": "f\u026at",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null,
        "antonyms": [
            "unfit"
        ],
        "legacy_id": "A1-SELF-65",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Verbs",
        "sub_subcategory": "Clothing_Garments"
    },
    {
        "id": "A1-VERB-SEL-003",
        "word": "wear",
        "emoji": "\ud83d\udc55",
        "subtext": "wear a suit / wear glasses / wear casual clothes",
        "form": "verb",
        "definitions": [
            {
                "text": "To have clothing or accessories on your body.",
                "examples": [
                    "She wears a suit to work.",
                    "He wears glasses."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wore",
        "v3": "worn",
        "group": "irregular",
        "transcription": "w\u025br",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null,
        "antonyms": [
            "undress"
        ],
        "legacy_id": "A1-SELF-217",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Verbs",
        "sub_subcategory": "Clothing_Garments"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
