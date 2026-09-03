(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-SEL-094",
        "word": "nationality",
        "emoji": "\ud83c\udff3\ufe0f",
        "form": "noun",
        "plural": "nationalities",
        "transcription": "\u02ccn\u00e6\u0283\u0259\u02c8n\u00e6l\u0259ti",
        "definitions": [
            {
                "text": "The legal right of belonging to a particular nation.",
                "examples": [
                    "What is your nationality?",
                    "She has dual nationality."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "British nationality, dual nationality",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null,
        "legacy_id": "A1-SELF-44",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "Identity_Details"
    },
    {
        "id": "A1-NOUN-SEL-108",
        "word": "background",
        "emoji": "\ud83d\udccb",
        "form": "noun",
        "transcription": "\u02c8b\u00e6k\u0261ra\u028and",
        "definitions": [
            {
                "text": "A person's origin, education, and experience.",
                "examples": [
                    "She has a background in music.",
                    "They come from different backgrounds."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "Identity_Details"
    },
    {
        "id": "A1-NOUN-SEL-109",
        "word": "birth",
        "emoji": "\ud83d\udc76",
        "form": "noun",
        "transcription": "b\u025c\u02d0r\u03b8",
        "definitions": [
            {
                "text": "The time when a baby is born.",
                "examples": [
                    "Please write your date of birth.",
                    "Her birth brought great joy."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "Identity_Details"
    },
    {
        "id": "A1-NOUN-SEL-110",
        "word": "character",
        "emoji": "\u2728",
        "form": "noun",
        "transcription": "\u02c8k\u00e6r\u0259kt\u0259r",
        "definitions": [
            {
                "text": "The mental and moral qualities distinctive to an individual.",
                "examples": [
                    "He has a warm and friendly character.",
                    "She showed great strength of character."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "Identity_Details"
    },
    {
        "id": "A1-NOUN-SEL-111",
        "word": "gender",
        "emoji": "\u26a4",
        "form": "noun",
        "transcription": "\u02c8\u02a4\u025bnd\u0259r",
        "definitions": [
            {
                "text": "The state of being male or female.",
                "examples": [
                    "Please select your gender on the form.",
                    "Gender balance is important in the workplace."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "Identity_Details"
    },
    {
        "id": "A1-NOUN-SEL-112",
        "word": "origin",
        "emoji": "\ud83d\udccd",
        "form": "noun",
        "transcription": "\u02c8\u0254\u02d0r\u026a\u02a4\u026an",
        "definitions": [
            {
                "text": "The point or place where something begins or comes from.",
                "examples": [
                    "What is the origin of this word?",
                    "He is proud of his country of origin."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "Identity_Details"
    },
    {
        "id": "A1-NOUN-SEL-113",
        "word": "signature",
        "emoji": "\u270d\ufe0f",
        "form": "noun",
        "transcription": "\u02c8s\u026a\u0261n\u0259\u02a7\u0259r",
        "definitions": [
            {
                "text": "A person's name written by themselves on a document.",
                "examples": [
                    "Put your signature at the bottom of the page.",
                    "Her signature was hard to read."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "Identity_Details"
    },
    {
        "id": "A1-NOUN-SEL-114",
        "word": "title",
        "emoji": "\ud83c\udff7\ufe0f",
        "form": "noun",
        "transcription": "\u02c8ta\u026at\u0259l",
        "definitions": [
            {
                "text": "A word such as Mr or Dr used before a person's name.",
                "examples": [
                    "Select your title from the drop-down menu.",
                    "Dr is his official title."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "Identity_Details"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
