(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-COM-033",
        "word": "dance",
        "emoji": "\ud83d\udc83",
        "subtext": "dance to music / dance together / slow dance",
        "synonyms": [
            "go dancing"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To move your body to music.",
                "examples": [
                    "I love to dance.",
                    "They are dancing."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "danced",
        "v3": "danced",
        "group": "regular",
        "transcription": "d\u00e6ns",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "antonyms": [
            "sit"
        ],
        "legacy_id": "A1-COMM-15",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Music_Instruments"
    },
    {
        "id": "A1-VERB-COM-035",
        "word": "sing",
        "emoji": "\ud83c\udfa4",
        "subtext": "sing a song / sing along / sing well",
        "synonyms": [
            "lead singer"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To make musical sounds with your voice.",
                "examples": [
                    "I like to sing in the shower.",
                    "She sings very well."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sang",
        "v3": "sung",
        "group": "irregular",
        "transcription": "s\u026a\u014b",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "antonyms": [
            "be quiet"
        ],
        "legacy_id": "A1-COMM-53",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Music_Instruments"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
