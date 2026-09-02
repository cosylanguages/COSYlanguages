(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-COM-01",
        "word": "card",
        "emoji": "💳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cards",
        "transcription": "kɑːd",
        "subtext": "pay by card",
        "definitions": [
            {
                "text": "A small plastic card that you use to pay for things.",
                "examples": [
                    "I will pay by card."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "legacy_id": "A1-COMM-05",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Nouns",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-NOUN-COM-02",
        "word": "cash",
        "emoji": "💵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "transcription": "kæʃ",
        "subtext": "pay in cash",
        "definitions": [
            {
                "text": "Money in the form of notes and coins.",
                "examples": [
                    "I have no cash, can I pay by card?"
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "legacy_id": "A1-COMM-06",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Nouns",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-NOUN-COM-03",
        "word": "customer",
        "emoji": "🛍️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "customers",
        "definitions": [
            {
                "text": "A person who buys goods or services from a shop or business.",
                "examples": [
                    "The shop was full of customers."
                ]
            }
        ],
        "subtext": "related to everyday shopping",
        "transcription": "ˈkəstəmər",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "legacy_id": "A1-COMM-15",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Nouns",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-NOUN-COM-04",
        "word": "gift",
        "emoji": "🎁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "gifts",
        "subtext": "related to everyday shopping",
        "synonyms": [
            "present"
        ],
        "definitions": [
            {
                "text": "Something that you give to someone, especially on a special occasion.",
                "examples": [
                    "A birthday gift."
                ]
            }
        ],
        "transcription": "gɪft",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "legacy_id": "A1-COMM-26",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Nouns",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-NOUN-COM-05",
        "word": "money",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "spend money, save money",
        "definitions": [
            {
                "text": "Coins or notes used to buy things.",
                "examples": [
                    "I have money in my bag."
                ]
            }
        ],
        "transcription": "ˈməni",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "legacy_id": "A1-COMM-31",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Nouns",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-NOUN-COM-06",
        "word": "price",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "prices",
        "subtext": "cost, high price, low price",
        "definitions": [
            {
                "text": "The amount of money you pay for something.",
                "examples": [
                    "The price of food is high."
                ]
            }
        ],
        "transcription": "praɪs",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "legacy_id": "A1-COMM-39",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Nouns",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-NOUN-COM-07",
        "word": "purse",
        "emoji": "👛",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "purses",
        "definitions": [
            {
                "text": "A small container for money, usually used by a woman.",
                "examples": [
                    "She has a red purse."
                ]
            }
        ],
        "subtext": "related to everyday shopping",
        "transcription": "pərs",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "legacy_id": "A1-COMM-40",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Nouns",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-NOUN-COM-08",
        "word": "wage",
        "emoji": "💵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "wages",
        "subtext": "related to money payment",
        "synonyms": [
            "salary",
            "pay"
        ],
        "definitions": [
            {
                "text": "The amount of money that is paid to a worker, usually for each hour or week.",
                "examples": [
                    "The minimum wage is increasing."
                ]
            }
        ],
        "transcription": "weɪʤ",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "legacy_id": "A1-COMM-51",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Nouns",
        "sub_subcategory": "Retail_Transactions"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
