(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-SEL-120",
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
        "id": "A2-ADJ-SEL-121",
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
        "id": "A2-ADJ-SEL-122",
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
        "id": "A2-ADJ-SEL-123",
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
        "id": "A2-ADJ-SEL-124",
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
        "id": "A2-ADJ-SEL-125",
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
        "id": "A2-ADJ-SEL-126",
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
        "id": "A2-ADJ-SEL-127",
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
        "id": "A2-ADJ-SEL-128",
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
        "id": "A2-ADJ-SEL-129",
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
        "id": "A2-ADJ-SEL-130",
        "word": "brave",
        "emoji": "🛡️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ready to face and endure danger or pain.",
                "examples": [
                    "Brave firefighters rescued the cat.",
                    "It was a brave decision to start over."
                ]
            }
        ],
        "subtext": "courageous, bold",
        "synonyms": [
            "courageous",
            "bold"
        ],
        "transcription": "breɪv",
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
        "id": "A2-ADJ-SEL-131",
        "word": "careful",
        "emoji": "⚠️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Making sure of avoiding potential danger, mishap, or harm.",
                "examples": [
                    "Be careful when crossing busy streets.",
                    "She made a careful check of the numbers."
                ]
            }
        ],
        "subtext": "cautious, mindful",
        "synonyms": [
            "cautious",
            "mindful"
        ],
        "transcription": "ˈkeəfl",
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
        "id": "A2-ADJ-SEL-132",
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

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
