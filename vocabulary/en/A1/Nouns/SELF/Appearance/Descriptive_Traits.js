(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-SEL-032",
        "word": "list",
        "emoji": "\ud83d\udcdd",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lists",
        "subtext": "shopping list",
        "definitions": [
            {
                "text": "A series of names or items written one after the other.",
                "examples": [
                    "Make a shopping list."
                ]
            }
        ],
        "transcription": "l\u026ast",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "A1-SELF-103",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-NOUN-SEL-033",
        "word": "something",
        "emoji": "\ud83d\udce6",
        "form": "pronoun",
        "definitions": [
            {
                "text": "An object, event, or situation that is not named.",
                "examples": [
                    "I want to tell you something."
                ]
            }
        ],
        "subtext": "related to describing things",
        "transcription": "\u02c8s\u0259m\u03b8\u026a\u014b",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "A1-SELF-180",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-NOUN-SEL-034",
        "word": "thing",
        "emoji": "\ud83d\udce6",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "things",
        "definitions": [
            {
                "text": "An object that is not alive.",
                "examples": [
                    "What is that thing?"
                ]
            }
        ],
        "subtext": "related to describing things",
        "transcription": "\u03b8\u026a\u014b",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "A1-SELF-197",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Descriptive_Traits"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
