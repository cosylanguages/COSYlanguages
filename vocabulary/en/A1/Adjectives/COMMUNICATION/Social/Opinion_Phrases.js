(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-COM-015",
        "word": "possible",
        "emoji": "\u2705",
        "form": "adjective",
        "transcription": "\ud83c\uddec\ud83c\udde7 \u02c8p\u0252s\u0259bl | \ud83c\uddfa\ud83c\uddf8 \u02c8p\u0251\u02d0s\u0259bl",
        "definitions": [
            {
                "text": "Able to be done or achieved.",
                "examples": [
                    "Is it possible to come tomorrow?",
                    "Everything is possible if you try."
                ]
            }
        ],
        "comparative": "more possible",
        "superlative": "the most possible",
        "subtext": "as soon as possible, if possible",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "impossible"
        ],
        "legacy_id": "A1-COMM-68",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Adjectives",
        "sub_subcategory": "Opinion_Phrases"
    },
    {
        "id": "A1-ADJ-COM-016",
        "word": "sure",
        "emoji": "\u2705",
        "form": "adjective",
        "definitions": [
            {
                "text": "Certain; having no doubt.",
                "examples": [
                    "I am sure about the answer.",
                    "Are you sure?"
                ]
            }
        ],
        "subtext": "make sure / pretty sure",
        "synonyms": [
            "certain"
        ],
        "comparative": "surer",
        "superlative": "the surest",
        "transcription": "\u0283\u028ar",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "unsure"
        ],
        "legacy_id": "A1-COMM-90",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Adjectives",
        "sub_subcategory": "Opinion_Phrases"
    },
    {
        "id": "A1-ADJ-COM-017",
        "word": "unsure",
        "emoji": "\u2753",
        "form": "adjective",
        "subtext": "feel unsure / unsure about",
        "synonyms": [
            "uncertain"
        ],
        "definitions": [
            {
                "text": "Not certain about something.",
                "examples": [
                    "I am unsure about what to do next."
                ]
            }
        ],
        "comparative": "more unsure",
        "superlative": "the most unsure",
        "transcription": "\u0259n\u02c8\u0283\u028ar",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "sure"
        ],
        "legacy_id": "A1-COMM-106",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Adjectives",
        "sub_subcategory": "Opinion_Phrases"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
