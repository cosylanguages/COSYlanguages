(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-SEL-01",
        "word": "cough",
        "emoji": "😷",
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
        "transcription": "kɔf",
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
        "id": "A1-VERB-SEL-02",
        "word": "cough",
        "emoji": "😷",
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
        "transcription": "kɔf",
        "auxiliary": "have",
        "v4": "coughing",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A1-SELF-15",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-03",
        "word": "cry",
        "emoji": "😢",
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
        "transcription": "kraɪ",
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
        "id": "A1-VERB-SEL-04",
        "word": "die",
        "emoji": "⚰️",
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
        "transcription": "daɪ",
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
        "id": "A1-VERB-SEL-05",
        "word": "die",
        "emoji": "⚰️",
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
        "transcription": "daɪ",
        "auxiliary": "have",
        "v4": "diing",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "live"
        ],
        "legacy_id": "A1-SELF-20",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-06",
        "word": "feel",
        "emoji": "🌡️",
        "subtext": "feel tired / feel better / feel ill / feel stressed",
        "form": "verb",
        "transcription": "fiːl",
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
        "id": "A1-VERB-SEL-07",
        "word": "feel",
        "emoji": "🌡️",
        "subtext": "feel tired / feel better / feel ill / feel stressed",
        "form": "verb",
        "transcription": "fiːl",
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
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "act"
        ],
        "legacy_id": "A1-SELF-24",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-08",
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
        "emoji": "🤕",
        "form": "verb",
        "group": "irregular",
        "transcription": "hərt",
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
        "id": "A1-VERB-SEL-09",
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
        "emoji": "🤕",
        "form": "verb",
        "group": "regular",
        "transcription": "hərt",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "heal"
        ],
        "legacy_id": "A1-SELF-32",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-10",
        "word": "sneeze",
        "emoji": "🤧",
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
        "id": "A1-VERB-SEL-11",
        "word": "sneeze",
        "emoji": "🤧",
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
        "auxiliary": "have",
        "v4": "sneezing",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A1-SELF-54",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-VERB-SEL-12",
        "word": "touch",
        "emoji": "🫱",
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
        "transcription": "təʧ",
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
        "id": "A1-VERB-SEL-13",
        "word": "touch",
        "emoji": "🫱",
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
        "transcription": "təʧ",
        "auxiliary": "have",
        "v4": "touching",
        "lang": "en",
        "level": "starter",
        "theme": "five_senses",
        "sub_theme": null,
        "legacy_id": "A1-SELF-63",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
