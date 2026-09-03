(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-NAT-001",
        "word": "alive",
        "emoji": "\ud83c\udf31",
        "form": "adjective",
        "subtext": "stay alive / still alive",
        "synonyms": [
            "living"
        ],
        "definitions": [
            {
                "text": "Living, not dead.",
                "examples": [
                    "The plant is still alive."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "\u0259\u02c8la\u026av",
        "lang": "en",
        "level": "starter",
        "theme": "plants_natural_world",
        "sub_theme": null,
        "antonyms": [
            "dead"
        ],
        "legacy_id": "A1-NAT-01",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Flora_Plants"
    },
    {
        "id": "A1-ADJ-NAT-002",
        "word": "natural",
        "emoji": "\ud83c\udf31",
        "form": "adjective",
        "subtext": "natural light / natural products",
        "synonyms": [
            "nature-made"
        ],
        "definitions": [
            {
                "text": "Existing in nature; not made or caused by people.",
                "examples": [
                    "I prefer natural products."
                ]
            }
        ],
        "comparative": "more natural",
        "superlative": "the most natural",
        "transcription": "\u02c8n\u00e6\u02a7\u0259r\u0259l",
        "lang": "en",
        "level": "starter",
        "theme": "plants_natural_world",
        "sub_theme": null,
        "antonyms": [
            "artificial"
        ],
        "legacy_id": "A1-NAT-19",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Flora_Plants"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
