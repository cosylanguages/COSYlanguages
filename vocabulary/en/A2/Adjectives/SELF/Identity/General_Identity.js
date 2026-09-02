(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-SEL-01",
        "word": "conscious",
        "emoji": "🧠",
        "form": "adjective",
        "definitions": [
            {
                "text": "Awake, thinking, and knowing what is happening around you.",
                "examples": [
                    "He was still conscious after the accident."
                ]
            }
        ],
        "subtext": "aware",
        "synonyms": [
            "aware"
        ],
        "comparative": "more conscious",
        "superlative": "the most conscious",
        "transcription": "🇬🇧 ˈkɒnʃəs | 🇺🇸 ˈkɑːnʃəs",
        "lang": "en",
        "level": "elementary",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A2-SELF-29",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-ADJ-SEL-02",
        "word": "guilty",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Responsible for breaking a law.",
                "examples": [
                    "The jury found him guilty."
                ]
            }
        ],
        "subtext": "responsible for crime",
        "synonyms": [
            "responsible for crime"
        ],
        "comparative": "more guilty",
        "superlative": "the most guilty",
        "transcription": "ˈɡɪlti",
        "lang": "en",
        "level": "elementary",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A2-SELF-52",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-ADJ-SEL-03",
        "word": "illegal",
        "emoji": "🚫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not allowed by law.",
                "examples": [
                    "It is illegal to drive without a license."
                ]
            }
        ],
        "subtext": "unlawful",
        "synonyms": [
            "unlawful"
        ],
        "comparative": "more illegal",
        "superlative": "the most illegal",
        "transcription": "ɪˈliːɡl",
        "lang": "en",
        "level": "elementary",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A2-SELF-55",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-ADJ-SEL-04",
        "word": "innocent",
        "emoji": "😇",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not guilty of a particular crime.",
                "examples": [
                    "He is innocent of all charges."
                ]
            }
        ],
        "subtext": "not guilty",
        "synonyms": [
            "not guilty"
        ],
        "comparative": "more innocent",
        "superlative": "the most innocent",
        "transcription": "ˈɪnəsnt",
        "lang": "en",
        "level": "elementary",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A2-SELF-61",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-ADJ-SEL-05",
        "word": "legal",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the law.",
                "examples": [
                    "You should seek legal advice."
                ]
            }
        ],
        "subtext": "lawful",
        "synonyms": [
            "lawful"
        ],
        "comparative": "more legal",
        "superlative": "the most legal",
        "transcription": "ˈliːɡl",
        "lang": "en",
        "level": "elementary",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A2-SELF-67",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-ADJ-SEL-06",
        "word": "medical",
        "emoji": "🩺",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to medicine and the treatment of diseases or injuries.",
                "examples": [
                    "She is a medical student.",
                    "He needs urgent medical attention."
                ]
            }
        ],
        "subtext": "health-related",
        "synonyms": [
            "health-related"
        ],
        "comparative": "more medical",
        "superlative": "the most medical",
        "transcription": "ˈmɛdɪkl",
        "lang": "en",
        "level": "elementary",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A2-SELF-71",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-ADJ-SEL-07",
        "word": "mental",
        "emoji": "🧠",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the mind.",
                "examples": [
                    "She has great mental strength."
                ]
            }
        ],
        "subtext": "mind-related",
        "synonyms": [
            "mind-related"
        ],
        "comparative": "more mental",
        "superlative": "the most mental",
        "transcription": "ˈmɛntl",
        "lang": "en",
        "level": "elementary",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A2-SELF-72",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-ADJ-SEL-08",
        "word": "physical",
        "emoji": "💪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the body rather than the mind.",
                "examples": [
                    "Regular physical exercise is important."
                ]
            }
        ],
        "subtext": "body-related",
        "synonyms": [
            "body-related"
        ],
        "comparative": "more physical",
        "superlative": "the most physical",
        "transcription": "ˈfɪzɪkl",
        "lang": "en",
        "level": "elementary",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A2-SELF-80",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Identity"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
