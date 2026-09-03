(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-COM-018",
        "word": "offline",
        "emoji": "\ud83d\udcf4",
        "form": "adjective",
        "subtext": "work offline / go offline",
        "synonyms": [
            "disconnected"
        ],
        "definitions": [
            {
                "text": "Not using or connected to the internet.",
                "examples": [
                    "You can read this document offline."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "\u02c8\u0254\u02ccfla\u026an",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "online"
        ],
        "legacy_id": "A1-COMM-19",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-ADJ-COM-020",
        "word": "online",
        "emoji": "\ud83c\udf10",
        "form": "adjective",
        "definitions": [
            {
                "text": "Using the internet.",
                "examples": [
                    "I buy food online sometimes."
                ]
            }
        ],
        "subtext": "online shopping / online course / stay online",
        "comparative": "more online",
        "superlative": "the most online",
        "transcription": "\u02c8\u0254n\u02ccla\u026an",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "offline"
        ],
        "legacy_id": "A1-COMM-21",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Digital_Devices"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
