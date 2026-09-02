(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-PPL-01",
        "word": "boundary",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "A limit on what you are willing to accept in a relationship.",
                "examples": [
                    "It is healthy to set clear boundaries.",
                    "The river forms the boundary between the two countries.",
                    "Setting boundaries at work is very important."
                ]
            }
        ],
        "transcription": "ˈbaʊndəri",
        "emoji": "🚧",
        "_legacy": {
            "classification": "regular",
            "plural": "boundaries",
            "countability": "countable",
            "subtext": "set boundaries, personal boundaries"
        },
        "legacy_id": "en_intermediate_people_014",
        "level_code": "B1",
        "domain": "People",
        "subcategory": "Identity"
    },
    {
        "id": "B1-PPL-02",
        "word": "childcare",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "The care of young children by someone other than their parents.",
                "examples": [
                    "Childcare costs are a major expense for families."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈtʃaɪldkeə | 🇺🇸 ˈtʃaɪldkeər",
        "emoji": "🧸",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "childcare costs, professional childcare"
        },
        "legacy_id": "en_intermediate_people_016",
        "level_code": "B1",
        "domain": "People",
        "subcategory": "Identity"
    },
    {
        "id": "B1-PPL-03",
        "word": "conflict",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "A serious disagreement or argument.",
                "examples": [
                    "They had a conflict about money.",
                    "The managers are trying to avoid conflict."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈkɒnflɪkt | 🇺🇸 ˈkɑːnflɪkt",
        "emoji": "⚔️",
        "_legacy": {
            "classification": "regular",
            "plural": "conflicts",
            "countability": "countable",
            "subtext": "resolve conflict, armed conflict",
            "antonyms": [
                "harmony"
            ],
            "oppositeEmoji": "🕊️"
        },
        "legacy_id": "en_intermediate_people_011",
        "level_code": "B1",
        "domain": "People",
        "subcategory": "Identity"
    },
    {
        "id": "B1-PPL-04",
        "word": "divorce",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "The legal ending of a marriage.",
                "examples": [
                    "The divorce rate has increased in recent decades.",
                    "They are getting a divorce."
                ]
            }
        ],
        "transcription": "dɪˈvɔːs",
        "emoji": "💔",
        "_legacy": {
            "classification": "regular",
            "plural": "divorces",
            "countability": "countable",
            "subtext": "get a divorce, divorce rate",
            "antonyms": [
                "marriage"
            ],
            "oppositeEmoji": "💍"
        },
        "legacy_id": "en_intermediate_people_015",
        "level_code": "B1",
        "domain": "People",
        "subcategory": "Identity"
    },
    {
        "id": "B1-PPL-05",
        "word": "equal",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "adjective",
        "definitions": [
            {
                "text": "The same in status, rights or opportunities.",
                "examples": [
                    "The company promotes equal pay for equal work."
                ]
            }
        ],
        "transcription": "ˈiːkwəl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "equal pay / equal rights / completely equal"
        },
        "legacy_id": "en_intermediate_equality_rights_002",
        "level_code": "B1",
        "domain": "People",
        "subcategory": "Identity"
    },
    {
        "id": "B1-PPL-06",
        "word": "expectation",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "A belief about what will happen or should happen.",
                "examples": [
                    "She has high expectations of her partner.",
                    "The results exceeded our expectations."
                ]
            }
        ],
        "transcription": "ˌɛkspɛkˈteɪʃn",
        "emoji": "💭",
        "_legacy": {
            "classification": "regular",
            "plural": "expectations",
            "countability": "countable",
            "subtext": "high expectations, meet expectations"
        },
        "legacy_id": "en_intermediate_people_013",
        "level_code": "B1",
        "domain": "People",
        "subcategory": "Identity"
    },
    {
        "id": "B1-PPL-07",
        "word": "fair",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "adjective",
        "definitions": [
            {
                "text": "Treating people equally and without favouritism.",
                "examples": [
                    "He has a reputation for being completely fair."
                ]
            }
        ],
        "transcription": "🇬🇧 feə | 🇺🇸 feər",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very fair / completely fair / perfectly fair"
        },
        "legacy_id": "en_intermediate_equality_rights_001",
        "level_code": "B1",
        "domain": "People",
        "subcategory": "Identity"
    },
    {
        "id": "B1-PPL-08",
        "word": "political",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to government and politics.",
                "examples": [
                    "She has strong political opinions."
                ]
            }
        ],
        "transcription": "pəˈlɪtɪkl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "political decision / very political / highly political"
        },
        "legacy_id": "en_intermediate_equality_rights_003",
        "level_code": "B1",
        "domain": "People",
        "subcategory": "Identity"
    },
    {
        "id": "B1-PPL-09",
        "word": "responsibility",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "A duty to take care of someone or something.",
                "examples": [
                    "Parents have a responsibility for their children.",
                    "He has a lot of responsibility at work.",
                    "We all have a responsibility to the environment."
                ]
            }
        ],
        "transcription": "🇬🇧 rɪˌspɒnsəˈbɪlɪti | 🇺🇸 rɪˌspɑːnsəˈbɪlɪti",
        "emoji": "🤲",
        "_legacy": {
            "classification": "regular",
            "plural": "responsibilities",
            "countability": "countable",
            "subtext": "take responsibility, a sense of responsibility"
        },
        "legacy_id": "en_intermediate_people_012",
        "level_code": "B1",
        "domain": "People",
        "subcategory": "Identity"
    },
    {
        "id": "B1-PPL-10",
        "word": "upbringing",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "The way a child is raised and taught values during childhood.",
                "examples": [
                    "Her upbringing influenced her approach to money."
                ]
            }
        ],
        "transcription": "ˈʌpˌbrɪŋɪŋ",
        "emoji": "👨‍👩‍👧",
        "_legacy": {
            "classification": "regular",
            "plural": "upbringings",
            "countability": "countable",
            "subtext": "strict upbringing, childhood upbringing"
        },
        "legacy_id": "en_intermediate_people_017",
        "level_code": "B1",
        "domain": "People",
        "subcategory": "Identity"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
