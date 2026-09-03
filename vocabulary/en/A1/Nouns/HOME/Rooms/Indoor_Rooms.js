(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-HOM-074",
        "word": "office",
        "emoji": "\ud83c\udfe2",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "offices",
        "subtext": "workplace, big office, work in an office",
        "definitions": [
            {
                "text": "A room or building where people work.",
                "examples": [
                    "He is in the office."
                ]
            }
        ],
        "transcription": "\u02c8\u0254f\u0259s",
        "lang": "en",
        "level": "starter",
        "theme": "rooms_indoor_spaces",
        "sub_theme": null,
        "legacy_id": "A1-HOME-02",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Rooms",
        "pos_section": "Nouns",
        "sub_subcategory": "Indoor_Rooms"
    },
    {
        "id": "A1-NOUN-HOM-075",
        "word": "attic",
        "emoji": "\ud83c\udfe0",
        "form": "noun",
        "transcription": "\u02c8\u00e6t\u026ak",
        "definitions": [
            {
                "text": "A space or room inside the roof of a building.",
                "examples": [
                    "Old trunks were stored in the attic.",
                    "She converted the attic into a bedroom."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Rooms",
        "pos_section": "Nouns",
        "sub_subcategory": "Indoor_Rooms"
    },
    {
        "id": "A1-NOUN-HOM-076",
        "word": "hallway",
        "emoji": "\ud83d\udeaa",
        "form": "noun",
        "transcription": "\u02c8h\u0254\u02d0l\u02ccwe\u026a",
        "definitions": [
            {
                "text": "An entrance hall or corridor.",
                "examples": [
                    "Leave your shoes in the hallway.",
                    "The hallway lights were turned on."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Rooms",
        "pos_section": "Nouns",
        "sub_subcategory": "Indoor_Rooms"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
