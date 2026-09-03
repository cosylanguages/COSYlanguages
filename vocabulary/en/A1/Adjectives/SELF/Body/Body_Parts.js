(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-SEL-185",
        "word": "blonde",
        "form": "adjective",
        "subtext": "blonde hair / a blonde woman",
        "synonyms": [
            "fair-haired"
        ],
        "definitions": [
            {
                "text": "Pale gold in color.",
                "examples": [
                    "She has blonde hair."
                ]
            }
        ],
        "comparative": "blonder",
        "superlative": "the blondest",
        "emoji": "\ud83d\udc71\u200d\u2640\ufe0f",
        "transcription": "bl\u0251nd",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "brunette"
        ],
        "legacy_id": "A1-SELF-03",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Adjectives",
        "sub_subcategory": "Body_Parts"
    },
    {
        "id": "A1-ADJ-SEL-186",
        "word": "curly",
        "emoji": "\ud83c\udf00",
        "form": "adjective",
        "subtext": "curly hair / short curly hair",
        "synonyms": [
            "wavy"
        ],
        "definitions": [
            {
                "text": "Having curls or a curved shape.",
                "examples": [
                    "She has curly brown hair."
                ]
            }
        ],
        "comparative": "curlier",
        "superlative": "the curliest",
        "transcription": "\u02c8k\u0259rli",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "straight"
        ],
        "legacy_id": "A1-SELF-07",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Adjectives",
        "sub_subcategory": "Body_Parts"
    },
    {
        "id": "A1-ADJ-SEL-187",
        "word": "fat",
        "emoji": "\ud83c\udf54",
        "form": "adjective",
        "subtext": "a fat cat",
        "synonyms": [
            "overweight",
            "gain weight"
        ],
        "definitions": [
            {
                "text": "Having a lot of extra flesh on your body.",
                "examples": [
                    "The cat is fat because it eats a lot."
                ]
            }
        ],
        "comparative": "fatter",
        "superlative": "the fattest",
        "transcription": "f\u00e6t",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "thin"
        ],
        "legacy_id": "A1-SELF-11",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Adjectives",
        "sub_subcategory": "Body_Parts"
    },
    {
        "id": "A1-ADJ-SEL-188",
        "word": "straight",
        "emoji": "\ud83d\udccf",
        "form": "adjective",
        "subtext": "straight hair / long straight hair",
        "synonyms": [
            "not curly"
        ],
        "definitions": [
            {
                "text": "Not curving or bending.",
                "examples": [
                    "He has straight black hair."
                ]
            }
        ],
        "comparative": "straighter",
        "superlative": "the straightest",
        "transcription": "stre\u026at",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "curly"
        ],
        "legacy_id": "A1-SELF-33",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Adjectives",
        "sub_subcategory": "Body_Parts"
    },
    {
        "id": "A1-ADJ-SEL-189",
        "word": "thin",
        "emoji": "\ud83e\udd6c",
        "form": "adjective",
        "subtext": "he is thin / thin legs",
        "synonyms": [
            "slim",
            "skinny"
        ],
        "definitions": [
            {
                "text": "Having very little extra flesh on your body.",
                "examples": [
                    "He is very tall and thin."
                ]
            }
        ],
        "comparative": "thinner",
        "superlative": "the thinnest",
        "transcription": "\u03b8\u026an",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "thick"
        ],
        "legacy_id": "A1-SELF-34",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Adjectives",
        "sub_subcategory": "Body_Parts"
    },
    {
        "id": "A1-ADJ-SEL-190",
        "word": "ugly",
        "form": "adjective",
        "subtext": "ugly building / ugly duckling",
        "synonyms": [
            "unattractive"
        ],
        "definitions": [
            {
                "text": "Unpleasant to look at.",
                "examples": [
                    "It was an ugly building."
                ]
            }
        ],
        "comparative": "uglier",
        "superlative": "the ugliest",
        "emoji": "\ud83d\udc79",
        "transcription": "\u02c8\u0259gli",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "beautiful"
        ],
        "legacy_id": "A1-SELF-37",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Adjectives",
        "sub_subcategory": "Body_Parts"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
