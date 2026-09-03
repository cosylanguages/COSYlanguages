(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-ADJ-TIM-001",
            "word": "affordable",
            "emoji": "💵",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Within the ability of most people to pay.",
                            "examples": [
                                    "They are looking for affordable office space."
                            ]
                    }
            ],
            "subtext": "inexpensive, low-cost",
            "synonyms": [
                    "inexpensive",
                    "low-cost"
            ],
            "comparative": "more affordable",
            "superlative": "the most affordable",
            "transcription": "əˈfɔːrdəbl",
            "lang": "en",
            "level": "elementary",
            "theme": "numbers",
            "sub_theme": null,
            "etymology": {
                    "origin_lang": "Old French",
                    "origin_word": "aforder",
                    "origin_meaning": "to put forth, afford"
            },
            "legacy_id": "A2-NUM-04",
            "level_code": "A2",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Cardinal_Ordinal"
    },
    {
            "id": "A2-ADJ-TIM-002",
            "word": "broke",
            "emoji": "📉",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Having no money at all; informal.",
                            "examples": [
                                    "He spent too much and is completely broke."
                            ]
                    }
            ],
            "subtext": "flat broke / completely broke / go broke",
            "comparative": "more broke",
            "superlative": "the most broke",
            "transcription": "broʊk",
            "lang": "en",
            "level": "elementary",
            "theme": "numbers",
            "sub_theme": null,
            "legacy_id": "A2-NUM-06",
            "level_code": "A2",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Cardinal_Ordinal"
    },
    {
            "id": "A2-ADJ-TIM-003",
            "word": "commercial",
            "emoji": "🏢",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Related to buying and selling things.",
                            "examples": [
                                    "The city center is a commercial area."
                            ]
                    }
            ],
            "subtext": "business-related",
            "synonyms": [
                    "business-related"
            ],
            "comparative": "more commercial",
            "superlative": "the most commercial",
            "transcription": "kəˈmɜːrʃl",
            "lang": "en",
            "level": "elementary",
            "theme": "numbers",
            "sub_theme": null,
            "legacy_id": "A2-NUM-13",
            "level_code": "A2",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Cardinal_Ordinal"
    },
    {
            "id": "A2-ADJ-TIM-004",
            "word": "economic",
            "emoji": "📉",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Relating to the economy.",
                            "examples": [
                                    "The country is experiencing economic growth."
                            ]
                    }
            ],
            "subtext": "economy-related",
            "synonyms": [
                    "economy-related"
            ],
            "comparative": "more economic",
            "superlative": "the most economic",
            "transcription": "🇬🇧 ˌiːkəˈnɒmɪk | 🇺🇸 ˌiːkəˈnɑːmɪk",
            "lang": "en",
            "level": "elementary",
            "theme": "numbers",
            "sub_theme": null,
            "legacy_id": "A2-NUM-22",
            "level_code": "A2",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Cardinal_Ordinal"
    },
    {
            "id": "A2-ADJ-TIM-005",
            "word": "financial",
            "emoji": "💰",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Relating to money.",
                            "examples": [
                                    "They are in a difficult financial situation."
                            ]
                    }
            ],
            "subtext": "money-related",
            "synonyms": [
                    "money-related"
            ],
            "comparative": "more financial",
            "superlative": "the most financial",
            "transcription": "faɪˈnænʃl",
            "lang": "en",
            "level": "elementary",
            "theme": "numbers",
            "sub_theme": null,
            "legacy_id": "A2-NUM-25",
            "level_code": "A2",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Cardinal_Ordinal"
    },
    {
            "id": "A2-ADJ-TIM-006",
            "word": "valuable",
            "emoji": "💎",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Worth a lot of money.",
                            "examples": [
                                    "This is a valuable painting.",
                                    "Your advice was very valuable to me."
                            ]
                    }
            ],
            "subtext": "precious, expensive",
            "synonyms": [
                    "precious",
                    "expensive"
            ],
            "comparative": "more valuable",
            "superlative": "the most valuable",
            "transcription": "ˈvæljuəbl",
            "lang": "en",
            "level": "elementary",
            "theme": "numbers",
            "sub_theme": null,
            "legacy_id": "A2-NUM-56",
            "level_code": "A2",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Cardinal_Ordinal"
    },
    {
            "id": "A2-ADJ-TIM-007",
            "word": "wealthy",
            "emoji": "💰",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Rich.",
                            "examples": [
                                    "He comes from a wealthy family.",
                                    "They live in a wealthy neighborhood."
                            ]
                    }
            ],
            "subtext": "rich, affluent",
            "synonyms": [
                    "rich",
                    "affluent"
            ],
            "comparative": "wealthier",
            "superlative": "the wealthiest",
            "transcription": "ˈwɛlθi",
            "lang": "en",
            "level": "elementary",
            "theme": "numbers",
            "sub_theme": null,
            "legacy_id": "A2-NUM-59",
            "level_code": "A2",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Cardinal_Ordinal"
    },
    {
            "id": "A2-ADJ-TIM-008",
            "word": "worth",
            "emoji": "💰",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Having a value equal to or deserving of.",
                            "examples": [
                                    "The investment is worth every penny."
                            ]
                    }
            ],
            "subtext": "worth the money / worth doing / worth considering",
            "comparative": null,
            "superlative": null,
            "transcription": "wɜːrθ",
            "lang": "en",
            "level": "elementary",
            "theme": "numbers",
            "sub_theme": null,
            "legacy_id": "A2-NUM-61",
            "level_code": "A2",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Cardinal_Ordinal"
    },
    {
            "id": "A2-ADJ-TIM-009",
            "word": "worthless",
            "emoji": "🗑️",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Having no value in money.",
                            "examples": [
                                    "The old car is almost worthless.",
                                    "He felt worthless after losing his job."
                            ]
                    }
            ],
            "subtext": "cheap, useless",
            "synonyms": [
                    "cheap",
                    "useless"
            ],
            "comparative": "more worthless",
            "superlative": "the most worthless",
            "transcription": "ˈwɜːrθləs",
            "lang": "en",
            "level": "elementary",
            "theme": "numbers",
            "sub_theme": null,
            "legacy_id": "A2-NUM-62",
            "level_code": "A2",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Cardinal_Ordinal"
    },
    {
            "id": "A2-ADJ-TIM-018",
            "word": "approximate",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Close to the actual, but not completely accurate or exact.",
                            "examples": [
                                    "The approximate cost of repair is 200 dollars.",
                                    "What is the approximate arrival time?"
                            ]
                    }
            ],
            "subtext": "rough, estimated",
            "synonyms": [
                    "rough",
                    "estimated"
            ],
            "transcription": "əˈprɒksɪmət",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "numbers",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Cardinal_Ordinal"
    },
    {
            "id": "A2-ADJ-TIM-019",
            "word": "better",
            "emoji": "📈",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Of a higher standard or more suitable quality.",
                            "examples": [
                                    "Her health is much better today.",
                                    "Public transport is a better choice."
                            ]
                    }
            ],
            "subtext": "superior, improved",
            "synonyms": [
                    "superior",
                    "improved"
            ],
            "transcription": "ˈbetə",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "numbers",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Cardinal_Ordinal"
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
