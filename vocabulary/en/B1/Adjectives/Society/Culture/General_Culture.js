(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-ADJ-SOC-001",
        "word": "adequate",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Enough or satisfactory for the purpose.",
                "examples": [
                    "The salary is adequate but not exceptional."
                ]
            }
        ],
        "transcription": "\u02c8\u00e6d\u026akw\u0259t",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "barely adequate / more than adequate / quite adequate"
        },
        "legacy_id": "B1-SOC-02",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-ADJ-SOC-002",
        "word": "appropriate",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Suitable or right for a particular situation.",
                "examples": [
                    "Her response was very appropriate given the circumstances."
                ]
            }
        ],
        "transcription": "\ud83c\uddec\ud83c\udde7 \u0259\u02c8pr\u0259\u028apri\u0259t | \ud83c\uddfa\ud83c\uddf8 \u0259\u02c8pro\u028apri\u0259t",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "entirely appropriate / highly appropriate / deemed appropriate"
        },
        "legacy_id": "B1-SOC-07",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-ADJ-SOC-003",
        "word": "economic",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to money, trade and industry.",
                "examples": [
                    "The economic situation is improving."
                ]
            }
        ],
        "transcription": "\ud83c\uddec\ud83c\udde7 \u02cci\u02d0k\u0259\u02c8n\u0252m\u026ak | \ud83c\uddfa\ud83c\uddf8 \u02cci\u02d0k\u0259\u02c8n\u0251\u02d0m\u026ak",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "economic growth / economic crisis / economic policy"
        },
        "legacy_id": "B1-SOC-19",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-ADJ-SOC-004",
        "word": "likely",
        "lang": "en",
        "level": "intermediate",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Probably going to happen.",
                "examples": [
                    "A pay rise this year seems likely."
                ]
            }
        ],
        "transcription": "\u02c8la\u026akli",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "very likely / highly likely / most likely"
        },
        "legacy_id": "B1-SOC-39",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-ADJ-SOC-005",
        "word": "logical",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Following a sensible and reasonable way of thinking.",
                "examples": [
                    "His argument is very logical and well-structured."
                ]
            }
        ],
        "transcription": "\ud83c\uddec\ud83c\udde7 \u02c8l\u0252d\u0292\u026akl | \ud83c\uddfa\ud83c\uddf8 \u02c8l\u0251\u02d0d\u0292\u026akl",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "perfectly logical / very logical / a logical conclusion"
        },
        "legacy_id": "B1-SOC-41",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-ADJ-SOC-006",
        "word": "obvious",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Easy to see or understand; clear to everyone.",
                "examples": [
                    "It is obvious that the system needs updating."
                ]
            }
        ],
        "transcription": "\ud83c\uddec\ud83c\udde7 \u02c8\u0252bvi\u0259s | \ud83c\uddfa\ud83c\uddf8 \u02c8\u0251\u02d0bvi\u0259s",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "perfectly obvious / very obvious / make obvious"
        },
        "legacy_id": "B1-SOC-48",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-ADJ-SOC-007",
        "word": "reasonable",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sensible and fair; not extreme.",
                "examples": [
                    "The price is very reasonable for what you get."
                ]
            }
        ],
        "transcription": "\u02c8ri\u02d0zn\u0259bl",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "very reasonable / perfectly reasonable / more than reasonable"
        },
        "legacy_id": "B1-SOC-59",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-ADJ-SOC-008",
        "word": "typical",
        "lang": "en",
        "level": "intermediate",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Showing the most usual qualities.",
                "examples": [
                    "This is a typical example of the problem."
                ]
            }
        ],
        "transcription": "\u02c8t\u026ap\u026akl",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "very typical / typical of / a typical case"
        },
        "legacy_id": "B1-SOC-74",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-ADJ-SOC-009",
        "word": "unlikely",
        "lang": "en",
        "level": "intermediate",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Probably not going to happen.",
                "examples": [
                    "It is unlikely that prices will fall this year."
                ]
            }
        ],
        "transcription": "\u028cn\u02c8la\u026akli",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "very unlikely / highly unlikely / completely unlikely"
        },
        "legacy_id": "B1-SOC-76",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-ADJ-SOC-010",
        "word": "valuable",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "adjective",
        "definitions": [
            {
                "text": "Worth a lot; very useful or important.",
                "examples": [
                    "Her experience is extremely valuable to the team."
                ]
            }
        ],
        "transcription": "\u02c8v\u00e6lju\u0259bl",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "very valuable / invaluable / highly valuable"
        },
        "legacy_id": "B1-SOC-77",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Culture"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
