(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-SEL-032",
        "word": "cough",
        "emoji": "\ud83d\ude37",
        "form": "verb",
        "definitions": [
            {
                "text": "To force air out of your lungs with a sudden loud noise.",
                "examples": [
                    "He is coughing because he is ill."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "coughed",
        "v3": "coughed",
        "group": "regular",
        "subtext": "have a cough",
        "transcription": "k\u0254f",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A1-SELF-14",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-034",
        "word": "cry",
        "emoji": "\ud83d\ude22",
        "subtext": "cry for help / cry out / cry about something",
        "synonyms": [
            "start crying"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To produce tears because you are sad or in pain.",
                "examples": [
                    "The baby is crying.",
                    "Don't cry."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cried",
        "v3": "cried",
        "group": "regular",
        "transcription": "kra\u026a",
        "auxiliary": "have",
        "v4": "crying",
        "lang": "en",
        "level": "starter",
        "theme": "surprise_interest",
        "sub_theme": null,
        "antonyms": [
            "smile"
        ],
        "legacy_id": "A1-SELF-16",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-035",
        "word": "die",
        "emoji": "\u26b0\ufe0f",
        "subtext": "die of / die for / die from / die out",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop living.",
                "examples": [
                    "Plants die without water."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "died",
        "v3": "died",
        "group": "regular",
        "transcription": "da\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "live"
        ],
        "legacy_id": "A1-SELF-19",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-037",
        "word": "feel",
        "emoji": "\ud83c\udf21\ufe0f",
        "subtext": "feel tired / feel better / feel ill / feel stressed",
        "form": "verb",
        "transcription": "fi\u02d0l",
        "definitions": [
            {
                "text": "To experience a physical or emotional state.",
                "examples": [
                    "She feels exhausted after a long week."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "felt",
        "v3": "felt",
        "group": "irregular",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "act"
        ],
        "legacy_id": "A1-SELF-23",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-039",
        "word": "hurt",
        "definitions": [
            {
                "text": "To cause pain; or to feel pain.",
                "examples": [
                    "My back hurts after sitting all day."
                ]
            }
        ],
        "subtext": "hurt your back / hurt someone / hurt yourself / it hurts",
        "classification": "irregular",
        "aspect": "both",
        "v2": "hurt",
        "v3": "hurt",
        "emoji": "\ud83e\udd15",
        "form": "verb",
        "group": "irregular",
        "transcription": "h\u0259rt",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "heal"
        ],
        "legacy_id": "A1-SELF-31",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-041",
        "word": "sneeze",
        "emoji": "\ud83e\udd27",
        "form": "verb",
        "definitions": [
            {
                "text": "To suddenly force air out through your nose and mouth with a loud noise.",
                "examples": [
                    "Bless you! Did you sneeze?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sneezed",
        "v3": "sneezed",
        "group": "regular",
        "subtext": "sneeze",
        "synonyms": [
            "atchoo!"
        ],
        "transcription": "sniz",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A1-SELF-53",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-043",
        "word": "touch",
        "emoji": "\ud83e\udef1",
        "form": "verb",
        "subtext": "don't touch / touch screen",
        "synonyms": [
            "feel"
        ],
        "definitions": [
            {
                "text": "To put your hand or another part of your body on something.",
                "examples": [
                    "Don't touch the wet paint!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "touched",
        "v3": "touched",
        "group": "regular",
        "transcription": "t\u0259\u02a7",
        "lang": "en",
        "level": "starter",
        "theme": "five_senses",
        "sub_theme": null,
        "legacy_id": "A1-SELF-62",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-063",
        "word": "apologize",
        "emoji": "\ud83d\ude4f",
        "form": "verb",
        "transcription": "\u0259\u02c8p\u0251\u02d0l\u0259\u02cc\u02a4a\u026az",
        "definitions": [
            {
                "text": "Express regret for something done wrong.",
                "examples": [
                    "He apologized for being late.",
                    "She apologized to her teacher."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-064",
        "word": "appear",
        "emoji": "\ud83d\udc41\ufe0f",
        "form": "verb",
        "transcription": "\u0259\u02c8p\u026ar",
        "definitions": [
            {
                "text": "Become visible or notice.",
                "examples": [
                    "A rainbow appeared in the sky.",
                    "He appeared happy at the news."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-065",
        "word": "disagree",
        "emoji": "\ud83d\ude45",
        "form": "verb",
        "transcription": "\u02ccd\u026as\u0259\u02c8\u0261ri\u02d0",
        "definitions": [
            {
                "text": "Have a different opinion.",
                "examples": [
                    "We disagree on which movie to watch.",
                    "He disagreed with the final decision."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
