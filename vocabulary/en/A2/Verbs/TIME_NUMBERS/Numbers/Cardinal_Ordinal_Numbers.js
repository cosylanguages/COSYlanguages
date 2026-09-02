(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-TIM-01",
        "word": "afford",
        "emoji": "💰",
        "form": "verb",
        "subtext": "afford a house / afford to travel / can't afford it",
        "definitions": [
            {
                "text": "To have enough money for something.",
                "examples": [
                    "They cannot afford to buy a flat in the city centre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "afforded",
        "v3": "afforded",
        "transcription": "əˈfɔːrd",
        "synonyms": [
            "pay for"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "affording",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-03",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-02",
        "word": "budget",
        "emoji": "📊",
        "form": "verb",
        "subtext": "budget for something / budget carefully / budget monthly",
        "definitions": [
            {
                "text": "To plan how money will be spent.",
                "examples": [
                    "They budget carefully to save for a house."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "budgeted",
        "v3": "budgeted",
        "transcription": "ˈbʌdʒɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "budgeting",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-08",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-03",
        "word": "calculate",
        "emoji": "🧮",
        "form": "verb",
        "subtext": "calculate the cost / calculate the distance / calculate results",
        "definitions": [
            {
                "text": "To discover an amount or number using mathematics.",
                "examples": [
                    "Can you calculate the total cost?",
                    "We need to calculate how much paint we need."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "calculated",
        "v3": "calculated",
        "transcription": "ˈkælkjuleɪt",
        "synonyms": [
            "count",
            "compute"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "calculating",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "calculare",
            "origin_meaning": "to count, compute"
        },
        "legacy_id": "A2-NUM-09",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-04",
        "word": "charge",
        "emoji": "💳",
        "form": "verb",
        "subtext": "charge a fee / charge for a service / charge extra",
        "definitions": [
            {
                "text": "To ask an amount of money for a service.",
                "examples": [
                    "The mechanic charged more than the estimate.",
                    "The mechanic charged three hundred euros."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "charged",
        "v3": "charged",
        "transcription": "tʃɑːrdʒ",
        "synonyms": [
            "bill"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "charging",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-11",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-05",
        "word": "claim",
        "emoji": "📜",
        "form": "verb",
        "subtext": "claim insurance / claim expenses / claim a refund",
        "definitions": [
            {
                "text": "To formally ask for money you are owed, especially insurance.",
                "examples": [
                    "He claimed on his insurance after the accident."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "claimed",
        "v3": "claimed",
        "transcription": "kleɪm",
        "group": "regular",
        "auxiliary": "have",
        "v4": "claiming",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-12",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-06",
        "word": "deposit",
        "emoji": "💰",
        "form": "verb",
        "subtext": "deposit money / deposit a check / direct deposit",
        "definitions": [
            {
                "text": "To put money into a bank account.",
                "examples": [
                    "I need to deposit this check.",
                    "She deposited five hundred dollars into her savings account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "deposited",
        "v3": "deposited",
        "synonyms": [
            "put in"
        ],
        "transcription": "🇬🇧 dɪˈpɒzɪt | 🇺🇸 dɪˈpɑːzɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "depositing",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-19",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-07",
        "word": "divide",
        "emoji": "➗",
        "form": "verb",
        "subtext": "divide by",
        "synonyms": [
            "division"
        ],
        "definitions": [
            {
                "text": "To separate into parts or groups.",
                "examples": [
                    "The teacher divided the class into four groups."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "divided",
        "v3": "divided",
        "transcription": "dɪˈvaɪd",
        "group": "regular",
        "auxiliary": "have",
        "v4": "dividing",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-20",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-08",
        "word": "include",
        "emoji": "➕",
        "form": "verb",
        "subtext": "include something / include in / price includes",
        "synonyms": [
            "contain"
        ],
        "definitions": [
            {
                "text": "To make something part of a whole.",
                "examples": [
                    "The price includes breakfast and evening meals."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "included",
        "v3": "included",
        "transcription": "ɪnˈkluːd",
        "group": "regular",
        "auxiliary": "have",
        "v4": "including",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-27",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-09",
        "word": "invest",
        "emoji": "📈",
        "form": "verb",
        "subtext": "invest money / invest in",
        "definitions": [
            {
                "text": "To put money into something to make a profit.",
                "examples": [
                    "He invested all his savings in the company."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invested",
        "v3": "invested",
        "transcription": "ɪnˈvɛst",
        "synonyms": [
            "put money in"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "investing",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-32",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-10",
        "word": "lend",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "lend money / lend to someone / lend a hand",
        "definitions": [
            {
                "text": "To give something to someone temporarily.",
                "examples": [
                    "The bank refused to lend him more money."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lent",
        "v3": "lent",
        "transcription": "lɛnd",
        "synonyms": [
            "give"
        ],
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-34",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-11",
        "word": "multiply",
        "emoji": "✖️",
        "form": "verb",
        "subtext": "multiply by",
        "synonyms": [
            "increase"
        ],
        "definitions": [
            {
                "text": "To add a number to itself a particular number of times.",
                "examples": [
                    "Two multiplied by three is six."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "multiplied",
        "v3": "multiplied",
        "transcription": "ˈmʌltɪplaɪ",
        "group": "regular",
        "auxiliary": "have",
        "v4": "multiplying",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-40",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-12",
        "word": "owe",
        "emoji": "💸",
        "form": "verb",
        "subtext": "owe money / owe someone / owe a lot / owe nothing",
        "definitions": [
            {
                "text": "To be required to pay money to someone.",
                "examples": [
                    "He owes the bank fifty thousand euros."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "owed",
        "v3": "owed",
        "transcription": "oʊ",
        "synonyms": [
            "must pay"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "owing",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-42",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "word": "roughly",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📏",
        "form": "adverb",
        "definitions": [
            {
                "text": "Approximately; not exactly.",
                "examples": [
                    "There were roughly 200 people at the meeting.",
                    "The journey takes roughly two hours."
                ]
            }
        ],
        "subtext": "about, approximately",
        "synonyms": [
            "about",
            "approximately"
        ],
        "transcription": "ˈrʌfli",
        "language": "en",
        "lang": "en",
        "id": "A2-VERB-TIM-13",
        "legacy_id": "A2-NUM-48",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-14",
        "word": "transfer",
        "emoji": "📲",
        "form": "verb",
        "subtext": "transfer money / transfer funds / bank transfer",
        "definitions": [
            {
                "text": "To move money from one account to another.",
                "examples": [
                    "She transferred the rent to the landlord's account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "transferred",
        "v3": "transferred",
        "transcription": "trænsˈfɜːr",
        "synonyms": [
            "move",
            "send"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "transfering",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-55",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    },
    {
        "id": "A2-VERB-TIM-15",
        "word": "withdraw",
        "emoji": "🏧",
        "form": "verb",
        "subtext": "withdraw cash / withdraw from an account / withdraw funds",
        "definitions": [
            {
                "text": "To take money out of a bank account.",
                "examples": [
                    "I withdraw cash every Monday for the week."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "withdrew",
        "v3": "withdrawn",
        "transcription": "wɪðˈdrɔː",
        "synonyms": [
            "take out",
            "remove"
        ],
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A2-NUM-60",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Verbs",
        "sub_subcategory": "Cardinal_Ordinal_Numbers"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
