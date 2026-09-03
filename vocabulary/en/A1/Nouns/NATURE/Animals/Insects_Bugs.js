(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-NAT-001",
        "word": "ant",
        "emoji": "\ud83d\udc1c",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ants",
        "definitions": [
            {
                "text": "A small insect that lives in large groups.",
                "examples": [
                    "There are ants in the garden."
                ]
            }
        ],
        "subtext": "related to insects",
        "transcription": "\u00e6nt",
        "lang": "en",
        "level": "starter",
        "theme": "insects",
        "sub_theme": "insects",
        "legacy_id": "A1-NAT-02",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Nouns",
        "sub_subcategory": "Insects_Bugs"
    },
    {
        "id": "A1-NOUN-NAT-002",
        "word": "butterfly",
        "emoji": "\ud83e\udd8b",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "butterflies",
        "definitions": [
            {
                "text": "An insect with four large, usually brightly colored wings.",
                "examples": [
                    "Look at that beautiful butterfly."
                ]
            }
        ],
        "subtext": "related to insects",
        "transcription": "\u02c8b\u0259t\u0259r\u02ccfla\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "insects",
        "sub_theme": "insects",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "butturafleug\u014dn"
        },
        "legacy_id": "A1-NAT-06",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Nouns",
        "sub_subcategory": "Insects_Bugs"
    },
    {
        "id": "A1-NOUN-NAT-045",
        "word": "fly",
        "emoji": "\ud83e\udeb0",
        "form": "noun",
        "transcription": "fla\u026a",
        "definitions": [
            {
                "text": "A two-winged insect.",
                "examples": [
                    "Close the window to keep out flies.",
                    "A fly buzzed around the room."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Nouns",
        "sub_subcategory": "Insects_Bugs"
    },
    {
        "id": "A1-NOUN-NAT-046",
        "word": "mosquito",
        "emoji": "\ud83e\udd9f",
        "form": "noun",
        "transcription": "m\u0259\u02c8ski\u02d0to\u028a",
        "definitions": [
            {
                "text": "A small biting fly that transmits diseases.",
                "examples": [
                    "Apply bug spray to prevent mosquito bites.",
                    "Mosquitoes buzz near water."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Nouns",
        "sub_subcategory": "Insects_Bugs"
    },
    {
        "id": "A1-NOUN-NAT-098",
        "word": "frog",
        "form": "noun",
        "transcription": "frɑːɡ",
        "emoji": "🐸",
        "definitions": [
                {
                        "text": "A small green animal that lives in water and jumps on land.",
                        "examples": [
                                "The frog jumps into the water.",
                                "Green frogs live near ponds."
                        ]
                }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Nouns",
        "sub_subcategory": "Insects_Bugs"
}
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
