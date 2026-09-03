(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-FOO-001",
        "word": "bring",
        "emoji": "\ud83c\udf81",
        "subtext": "bring someone / bring food / bring a document / bring up",
        "form": "verb",
        "definitions": [
            {
                "text": "To carry something to a place.",
                "examples": [
                    "Bring your ID to the interview.",
                    "He brings lunch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "brought",
        "v3": "brought",
        "group": "irregular",
        "transcription": "br\u026a\u014b",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "antonyms": [
            "take"
        ],
        "legacy_id": "A1-FOOD-09",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-VERB-FOO-003",
        "word": "cook",
        "emoji": "\ud83c\udf73",
        "subtext": "cook dinner / cook a meal / cook at home / cook for someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To prepare food by heating it.",
                "examples": [
                    "She cooks dinner every evening. I do not cook \u2014 I order food."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cooked",
        "v3": "cooked",
        "group": "regular",
        "transcription": "k\u028ak",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "antonyms": [
            "eat"
        ],
        "legacy_id": "A1-FOOD-21",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-VERB-FOO-005",
        "word": "cut",
        "emoji": "\u2702\ufe0f",
        "subtext": "cut costs / cut spending / cut short / cut in half",
        "form": "verb",
        "definitions": [
            {
                "text": "To divide with something sharp; to reduce.",
                "examples": [
                    "She cuts her lunch break short.",
                    "It cuts costs."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cut",
        "v3": "cut",
        "group": "irregular",
        "transcription": "k\u0259t",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "antonyms": [
            "join"
        ],
        "legacy_id": "A1-FOOD-26",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-VERB-FOO-007",
        "word": "drink",
        "emoji": "\ud83e\udd5b",
        "subtext": "drink coffee / drink tea / drink water / drink beer",
        "form": "verb",
        "definitions": [
            {
                "text": "To take liquid into your mouth and swallow it.",
                "examples": [
                    "She drinks coffee every morning.",
                    "I drink water."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drank",
        "v3": "drunk",
        "group": "irregular",
        "transcription": "dr\u026a\u014bk",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "drinkan",
            "origin_meaning": "to drink"
        },
        "antonyms": [
            "eat"
        ],
        "legacy_id": "A1-FOOD-30",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-VERB-FOO-009",
        "word": "eat",
        "emoji": "\ud83c\udf4e",
        "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
        "form": "verb",
        "definitions": [
            {
                "text": "To put food in your mouth and swallow it.",
                "examples": [
                    "We eat dinner at seven.",
                    "He eats lunch at his desk."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ate",
        "v3": "eaten",
        "group": "irregular",
        "transcription": "it",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "etan",
            "origin_meaning": "to eat"
        },
        "antonyms": [
            "drink"
        ],
        "legacy_id": "A1-FOOD-32",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-VERB-FOO-010",
        "word": "bake",
        "emoji": "\ud83e\udd56",
        "form": "verb",
        "transcription": "be\u026ak",
        "definitions": [
            {
                "text": "Cook food by dry heat in an oven.",
                "examples": [
                    "Bake the bread for thirty minutes.",
                    "She loves baking cookies."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-VERB-FOO-011",
        "word": "boil",
        "emoji": "\u2668\ufe0f",
        "form": "verb",
        "transcription": "b\u0254\u026al",
        "definitions": [
            {
                "text": "Cook food in boiling liquid.",
                "examples": [
                    "Boil the water before adding pasta.",
                    "He boiled two eggs for breakfast."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-VERB-FOO-012",
        "word": "fry",
        "emoji": "\ud83c\udf73",
        "form": "verb",
        "transcription": "fra\u026a",
        "definitions": [
            {
                "text": "Cook food in hot fat or oil.",
                "examples": [
                    "Fry the eggs in a pan.",
                    "He fried potatoes for dinner."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-VERB-FOO-013",
        "word": "grill",
        "emoji": "\ud83e\udd69",
        "form": "verb",
        "transcription": "\u0261r\u026al",
        "definitions": [
            {
                "text": "Cook food over intense direct heat.",
                "examples": [
                    "Grill the chicken outdoors.",
                    "She grilled vegetables for the BBQ."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-VERB-FOO-014",
        "word": "roast",
        "emoji": "\ud83c\udf57",
        "form": "verb",
        "transcription": "ro\u028ast",
        "definitions": [
            {
                "text": "Cook food by prolonged exposure to heat in an oven.",
                "examples": [
                    "Roast the chicken with herbs.",
                    "They roasted potatoes for dinner."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
