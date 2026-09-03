(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-COM-011",
        "word": "hide",
        "emoji": "\ud83d\ude48",
        "subtext": "hide and seek / hide from someone / hide something",
        "form": "verb",
        "definitions": [
            {
                "text": "To put something or someone in a place where they cannot be seen or found.",
                "examples": [
                    "He is hiding behind the door."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "hid",
        "v3": "hidden",
        "group": "irregular",
        "transcription": "ha\u026ad",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null,
        "antonyms": [
            "show"
        ],
        "legacy_id": "A1-COMM-28",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Games_Play"
    },
    {
        "id": "A1-VERB-COM-013",
        "word": "seek",
        "emoji": "\ud83d\udd0d",
        "form": "verb",
        "subtext": "hide and seek / seek help",
        "synonyms": [
            "look for"
        ],
        "definitions": [
            {
                "text": "To try to find or get something.",
                "examples": [
                    "They are playing hide and seek."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sought",
        "v3": "sought",
        "group": "irregular",
        "transcription": "sik",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ],
        "legacy_id": "A1-COMM-51",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Games_Play"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
