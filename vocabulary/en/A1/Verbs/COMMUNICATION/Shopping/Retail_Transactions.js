(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-COM-039",
        "word": "borrow",
        "emoji": "\ud83d\udce5",
        "form": "verb",
        "subtext": "take for a short time / borrow a book / borrow money",
        "definitions": [
            {
                "text": "To take something for a short time and then return it.",
                "examples": [
                    "Can I borrow your pen?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "borrowed",
        "v3": "borrowed",
        "group": "regular",
        "transcription": "\u02c8b\u0251\u02ccro\u028a",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "lend"
        ],
        "legacy_id": "A1-COMM-01",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-041",
        "word": "buy",
        "emoji": "\ud83d\uded2",
        "subtext": "buy food / buy a ticket / buy online / buy a house",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something in exchange for money.",
                "examples": [
                    "She buys food online.",
                    "He wants to buy a flat."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bought",
        "v3": "bought",
        "group": "irregular",
        "transcription": "ba\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "sell"
        ],
        "legacy_id": "A1-COMM-03",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-043",
        "word": "close",
        "emoji": "\ud83d\udd12",
        "subtext": "close a door / close at six / close an account / close the meeting",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something not open; or to finish.",
                "examples": [
                    "The office closes at six.",
                    "She closes her laptop."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "closed",
        "v3": "closed",
        "group": "regular",
        "transcription": "klo\u028az",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "open"
        ],
        "legacy_id": "A1-COMM-09",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-045",
        "word": "cost",
        "emoji": "\ud83d\udcb0",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a price of.",
                "examples": [
                    "The flat costs twelve hundred euros a month."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "cost",
        "v3": "cost",
        "subtext": "cost a lot / cost money / cost too much / cost less",
        "group": "irregular",
        "transcription": "k\u0254st",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "legacy_id": "A1-COMM-13",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-047",
        "word": "earn",
        "definitions": [
            {
                "text": "To receive money for work done.",
                "examples": [
                    "She earns a good salary as a project manager."
                ]
            }
        ],
        "subtext": "earn a salary / earn money / earn more / earn enough",
        "classification": "regular",
        "aspect": "action",
        "v2": "earned",
        "v3": "earned",
        "emoji": "\ud83d\udcb6",
        "form": "verb",
        "group": "regular",
        "transcription": "\u0259rn",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "spend"
        ],
        "legacy_id": "A1-COMM-16",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-049",
        "word": "find",
        "emoji": "\ud83d\udd0d",
        "subtext": "find a job / find out / find it difficult / find time",
        "form": "verb",
        "definitions": [
            {
                "text": "To discover or locate something.",
                "examples": [
                    "I find the work interesting.",
                    "She found a new job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "found",
        "v3": "found",
        "group": "irregular",
        "transcription": "fa\u026and",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "lose"
        ],
        "legacy_id": "A1-COMM-20",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-051",
        "word": "get",
        "emoji": "\ud83d\udce5",
        "subtext": "get a job / get tired / get better / get home",
        "form": "verb",
        "definitions": [
            {
                "text": "To receive, obtain or become.",
                "examples": [
                    "I get a good salary.",
                    "He gets tired quickly.",
                    "She gets a promotion."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "got",
        "v3": "got / gotten",
        "group": "irregular",
        "transcription": "g\u026at",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "give"
        ],
        "legacy_id": "A1-COMM-24",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-053",
        "word": "give",
        "emoji": "\ud83c\udf81",
        "subtext": "give advice / give money / give a present / give information",
        "form": "verb",
        "transcription": "\u0261\u026av",
        "definitions": [
            {
                "text": "To hand or transfer something to someone.",
                "examples": [
                    "He gives me a lot of work.",
                    "She gives advice."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave",
        "v3": "given",
        "group": "irregular",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "geban\u0105"
        },
        "antonyms": [
            "take"
        ],
        "legacy_id": "A1-COMM-27",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-055",
        "word": "lose",
        "emoji": "\ud83d\udcc9",
        "subtext": "lose a job / lose money / lose weight / lose time",
        "form": "verb",
        "definitions": [
            {
                "text": "To no longer have something.",
                "examples": [
                    "I lost my keys.",
                    "She lost her job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lost",
        "v3": "lost",
        "group": "irregular",
        "transcription": "luz",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "win"
        ],
        "legacy_id": "A1-COMM-29",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-057",
        "word": "open",
        "emoji": "\ud83d\udcd6",
        "subtext": "open a door / open an account / open a shop / open at nine",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something not closed; or to start.",
                "examples": [
                    "He opens the office at eight.",
                    "She opens a bank account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "opened",
        "v3": "opened",
        "group": "regular",
        "transcription": "\u02c8o\u028ap\u0259n",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "closed"
        ],
        "legacy_id": "A1-COMM-32",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-059",
        "word": "pay",
        "emoji": "\ud83d\udcb3",
        "subtext": "pay for, pay a bill / pay rent / pay by card / pay in cash",
        "form": "verb",
        "definitions": [
            {
                "text": "To give money in exchange for something.",
                "examples": [
                    "I pay my bills by direct debit."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "paid",
        "v3": "paid",
        "group": "irregular",
        "transcription": "pe\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "receive"
        ],
        "legacy_id": "A1-COMM-35",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-061",
        "word": "receive",
        "emoji": "\ud83d\udce9",
        "subtext": "receive an email / receive a gift / receive payment / receive news",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something that someone gave or sent to you.",
                "examples": [
                    "I receive a lot of mail.",
                    "She received a gift."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "received",
        "v3": "received",
        "group": "regular",
        "transcription": "r\u026a\u02c8siv",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "send"
        ],
        "legacy_id": "A1-COMM-41",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-063",
        "word": "save",
        "emoji": "\ud83d\udcb0",
        "subtext": "save money / save for a holiday / save for a house",
        "form": "verb",
        "definitions": [
            {
                "text": "To keep money rather than spending it.",
                "examples": [
                    "She saves a hundred euros every month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "saved",
        "v3": "saved",
        "group": "regular",
        "transcription": "se\u026av",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "spend"
        ],
        "legacy_id": "A1-COMM-45",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-065",
        "word": "sell",
        "emoji": "\ud83c\udff7\ufe0f",
        "subtext": "sell products / sell online / sell at the market",
        "synonyms": [
            "best seller"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To give something to someone for money.",
                "examples": [
                    "They sell fruit at the market."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sold",
        "v3": "sold",
        "group": "irregular",
        "transcription": "s\u025bl",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "buy"
        ],
        "legacy_id": "A1-COMM-47",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    },
    {
        "id": "A1-VERB-COM-067",
        "word": "spend",
        "emoji": "\ud83d\udcb8",
        "subtext": "spend money / spend on food / spend on rent / spend time",
        "form": "verb",
        "definitions": [
            {
                "text": "To use money to pay for things.",
                "examples": [
                    "He spends too much money on takeaway food."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spent",
        "v3": "spent",
        "group": "irregular",
        "transcription": "sp\u025bnd",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "save"
        ],
        "legacy_id": "A1-COMM-49",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Shopping",
        "pos_section": "Verbs",
        "sub_subcategory": "Retail_Transactions"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
