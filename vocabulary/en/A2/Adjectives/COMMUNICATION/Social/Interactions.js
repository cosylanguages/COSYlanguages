(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-COM-005",
        "word": "cultural",
        "emoji": "🎨",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to culture.",
                "examples": [
                    "The city has many cultural attractions."
                ]
            }
        ],
        "subtext": "culture-related",
        "synonyms": [
            "culture-related"
        ],
        "comparative": "more cultural",
        "superlative": "the most cultural",
        "transcription": "ˈkʌltʃərəl",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A2-COMM-16",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Adjectives",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-ADJ-COM-006",
        "word": "digital",
        "emoji": "💻",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to computer technology.",
                "examples": [
                    "We live in a digital age."
                ]
            }
        ],
        "subtext": "tech-related",
        "synonyms": [
            "tech-related"
        ],
        "comparative": "more digital",
        "superlative": "the most digital",
        "transcription": "ˈdɪdʒɪtl",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A2-COMM-18",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Adjectives",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-ADJ-COM-007",
        "word": "political",
        "emoji": "🏛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to politics.",
                "examples": [
                    "He is very interested in political news."
                ]
            }
        ],
        "subtext": "government-related",
        "synonyms": [
            "government-related"
        ],
        "comparative": "more political",
        "superlative": "the most political",
        "transcription": "pəˈlɪtɪkl",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A2-COMM-39",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Adjectives",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-ADJ-COM-008",
        "word": "social",
        "emoji": "👥",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to society or to spending time with other people.",
                "examples": [
                    "Humans are social animals."
                ]
            }
        ],
        "subtext": "society-related",
        "synonyms": [
            "society-related"
        ],
        "comparative": "more social",
        "superlative": "the most social",
        "transcription": "ˈsoʊʃl",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A2-COMM-49",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Adjectives",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-ADJ-COM-009",
        "word": "anonymous",
        "emoji": "👤",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not identified by name; of unknown name.",
                "examples": [
                    "An anonymous donor gave a million dollars.",
                    "You can submit an anonymous feedback form."
                ]
            }
        ],
        "subtext": "unnamed, secret",
        "synonyms": [
            "unnamed",
            "secret"
        ],
        "transcription": "əˈnɒnɪməs",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Adjectives",
        "sub_subcategory": "Interactions"
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
