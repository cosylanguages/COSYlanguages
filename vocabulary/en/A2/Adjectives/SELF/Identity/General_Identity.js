(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-SEL-089",
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
        "id": "A2-ADJ-SEL-091",
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
        "id": "A2-ADJ-SEL-092",
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
        "id": "A2-ADJ-SEL-093",
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
        "id": "A2-ADJ-SEL-094",
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
        "id": "A2-ADJ-SEL-095",
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
        "id": "A2-ADJ-SEL-096",
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
    },
    {
        "id": "A2-ADJ-SEL-164",
        "word": "bold",
        "emoji": "🦁",
        "form": "adjective",
        "definitions": [
            {
                "text": "Showing a willingness to take risks and act confidently.",
                "examples": [
                    "The company made a bold business decision.",
                    "Use bold font for heading titles."
                ]
            }
        ],
        "subtext": "brave, confident",
        "synonyms": [
            "brave",
            "confident"
        ],
        "transcription": "bəʊld",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "identity",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-ADJ-SEL-166",
        "word": "bossy",
        "emoji": "🗣️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Fond of giving people orders; domineering.",
                "examples": [
                    "Nobody likes working with a bossy leader.",
                    "Her bossy attitude annoyed her peers."
                ]
            }
        ],
        "subtext": "domineering, pushy",
        "synonyms": [
            "domineering",
            "pushy"
        ],
        "transcription": "ˈbɒsi",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "identity",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-ADJ-SEL-172",
        "word": "cautious",
        "emoji": "🚶",
        "form": "adjective",
        "definitions": [
            {
                "text": "Careful to avoid potential problems or dangers.",
                "examples": [
                    "Be cautious when investing money.",
                    "He took a cautious step onto the ice."
                ]
            }
        ],
        "subtext": "careful, prudent",
        "synonyms": [
            "careful",
            "prudent"
        ],
        "transcription": "ˈkɔːʃəs",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "identity",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Identity"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
