(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-TIM-066",
        "word": "narrow",
        "emoji": "\u2b07\ufe0f",
        "form": "adjective",
        "subtext": "a narrow street / too narrow",
        "synonyms": [
            "thin"
        ],
        "definitions": [
            {
                "text": "Measuring only a small distance from one side to the other.",
                "examples": [
                    "The path was too narrow for the car."
                ]
            }
        ],
        "comparative": "narrower",
        "superlative": "the narrowest",
        "transcription": "\u02c8n\u025bro\u028a",
        "lang": "en",
        "level": "starter",
        "theme": "size_measurements",
        "sub_theme": null,
        "antonyms": [
            "wide"
        ],
        "legacy_id": "A1-NUM-45",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Sizes_Units"
    },
    {
        "id": "A1-ADJ-TIM-068",
        "word": "wide",
        "emoji": "\u2194\ufe0f",
        "form": "adjective",
        "subtext": "a wide road / wide open",
        "synonyms": [
            "broad"
        ],
        "definitions": [
            {
                "text": "Measuring a long distance from one side to the other.",
                "examples": [
                    "The river is very wide here."
                ]
            }
        ],
        "comparative": "wider",
        "superlative": "the widest",
        "transcription": "wa\u026ad",
        "lang": "en",
        "level": "starter",
        "theme": "size_measurements",
        "sub_theme": null,
        "antonyms": [
            "narrow"
        ],
        "legacy_id": "A1-NUM-75",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Sizes_Units"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
