(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-COM-001",
        "word": "cheap",
        "emoji": "\ud83c\udff7\ufe0f",
        "form": "adjective",
        "subtext": "cheap flight / very cheap / cheap and cheerful",
        "synonyms": [
            "low price",
            "inexpensive"
        ],
        "definitions": [
            {
                "text": "Not expensive; low in price.",
                "examples": [
                    "This coffee is cheap."
                ]
            },
            {
                "text": "Low in price.",
                "examples": [
                    "The lunch near the office is very cheap."
                ]
            }
        ],
        "comparative": "cheaper",
        "superlative": "the cheapest",
        "transcription": "\u02a7ip",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "expensive"
        ],
        "legacy_id": "A1-COMM-07",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Adjectives",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-ADJ-COM-003",
        "word": "closed",
        "emoji": "\ud83d\udd12",
        "form": "adjective",
        "subtext": "now closed, temporarily closed / closed for lunch / closed mind / closed door",
        "definitions": [
            {
                "text": "Not open; shut.",
                "examples": [
                    "The bank is closed on Sundays.",
                    "The bank is closed on Sunday."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "klo\u028azd",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "open"
        ],
        "legacy_id": "A1-COMM-11",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Adjectives",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-ADJ-COM-005",
        "word": "expensive",
        "emoji": "\ud83d\udc8e",
        "form": "adjective",
        "subtext": "very expensive / expensive taste / too expensive",
        "synonyms": [
            "costly",
            "high price"
        ],
        "definitions": [
            {
                "text": "Costing a lot of money.",
                "examples": [
                    "That car is expensive."
                ]
            },
            {
                "text": "High in price.",
                "examples": [
                    "The city centre is expensive for rent."
                ]
            }
        ],
        "comparative": "more expensive",
        "superlative": "the most expensive",
        "transcription": "\u026ak\u02c8sp\u025bns\u026av",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "cheap"
        ],
        "legacy_id": "A1-COMM-18",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Adjectives",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-ADJ-COM-007",
        "word": "free",
        "emoji": "\ud83c\udf81",
        "form": "adjective",
        "subtext": "free of charge, free gift / free time / free of charge / free to do",
        "definitions": [
            {
                "text": "Costing no money; at no charge.",
                "examples": [
                    "The museum is free on Sundays."
                ]
            },
            {
                "text": "Not costing money; not restricted.",
                "examples": [
                    "The parking here is free."
                ]
            }
        ],
        "comparative": "freer",
        "superlative": "the freest",
        "transcription": "fri",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "busy"
        ],
        "legacy_id": "A1-COMM-22",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Adjectives",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-ADJ-COM-009",
        "word": "open",
        "emoji": "\ud83d\udcd6",
        "form": "adjective",
        "subtext": "now open, open for business / open door / open to ideas / wide open",
        "definitions": [
            {
                "text": "Not closed; allowing entry or access.",
                "examples": [
                    "The shop is open until eight."
                ]
            },
            {
                "text": "Not closed; available to use.",
                "examples": [
                    "The office is open from eight to six."
                ]
            }
        ],
        "comparative": "opener",
        "superlative": "the openest",
        "transcription": "\u02c8o\u028ap\u0259n",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "closed"
        ],
        "legacy_id": "A1-COMM-33",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Adjectives",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-ADJ-COM-010",
        "word": "poor",
        "emoji": "\ud83c\udfda\ufe0f",
        "form": "adjective",
        "subtext": "poor family / feel poor",
        "synonyms": [
            "broke",
            "impoverished"
        ],
        "definitions": [
            {
                "text": "Having very little money.",
                "examples": [
                    "They are poor but happy."
                ]
            }
        ],
        "comparative": "poorer",
        "superlative": "the poorest",
        "transcription": "pur",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "rich"
        ],
        "legacy_id": "A1-COMM-37",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Adjectives",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-ADJ-COM-012",
        "word": "rich",
        "emoji": "\ud83d\udcb0",
        "form": "adjective",
        "subtext": "rich man / rich country / very rich",
        "synonyms": [
            "wealthy"
        ],
        "definitions": [
            {
                "text": "Having a lot of money.",
                "examples": [
                    "He is a very rich man."
                ]
            }
        ],
        "comparative": "richer",
        "superlative": "the richest",
        "transcription": "r\u026a\u02a7",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "poor"
        ],
        "legacy_id": "A1-COMM-43",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Adjectives",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-ADJ-COM-021",
        "word": "Thankful",
        "emoji": "\ud83d\udcd6",
        "form": "adjective",
        "subtext": "feeling or showing thanks; grateful.",
        "definitions": [
            {
                "text": "feeling or showing thanks; grateful.",
                "examples": [
                    "I am thankful for my healthy life."
                ]
            }
        ],
        "transcription": "\u03b8\u02c8\u00e6\u014bkf\u0259l",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": "retail_transactions",
        "antonyms": [],
        "legacy_id": "EVENT-celebrate-national-simplicity-day",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Adjectives",
        "sub_subcategory": "Retail_Transactions"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
    if (typeof module !== "undefined" && module.exports) {
        module.exports = data;
    }
})();
