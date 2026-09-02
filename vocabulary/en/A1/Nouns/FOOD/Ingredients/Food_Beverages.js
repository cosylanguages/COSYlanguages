(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-FOO-001",
        "word": "apple",
        "numberPlural": "4 apple",
        "answer": "four apples",
        "emoji": "\ud83c\udf4e",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "apples",
        "definitions": [
            {
                "text": "A round fruit that can be red or green.",
                "examples": [
                    "She eats an apple.",
                    "Apple juice is sweet."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8\u00e6p\u0259l",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "fruit",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "aplaz",
            "origin_meaning": "apple"
        },
        "legacy_id": "A1-FOOD-01",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-002",
        "word": "bacon",
        "emoji": "\ud83e\udd53",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "Meat from a pig that is cut into long thin slices.",
                "examples": [
                    "I love eggs and bacon."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8be\u026ak\u0259n",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-02",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-003",
        "word": "banana",
        "emoji": "\ud83c\udf4c",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bananas",
        "definitions": [
            {
                "text": "A long yellow fruit.",
                "examples": [
                    "Monkeys like bananas.",
                    "I eat a banana every morning."
                ]
            },
            {
                "text": "Bananas grow in tropical areas.",
                "examples": [
                    "Peel the banana before eating it."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "b\u0259\u02c8n\u00e6n\u0259",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "fruit",
        "etymology": {
            "origin_lang": "Wolof",
            "origin_word": "banaana",
            "entered_via": "Spanish/Portuguese"
        },
        "legacy_id": "A1-FOOD-03",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-004",
        "word": "beef",
        "emoji": "\ud83e\udd69",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "Meat from a cow.",
                "examples": [
                    "I prefer beef to chicken."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "bif",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-04",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-005",
        "word": "beer",
        "emoji": "\ud83c\udf7a",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "cold beer, bottle of beer",
        "definitions": [
            {
                "text": "A popular alcoholic drink made from grain.",
                "examples": [
                    "He drinks beer at the weekend."
                ]
            }
        ],
        "transcription": "b\u026ar",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-05",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-006",
        "word": "biscuit",
        "emoji": "\ud83c\udf6a",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "biscuits",
        "subtext": "related to basic foods",
        "synonyms": [
            "\ud83c\uddfa\ud83c\uddf8 cookie"
        ],
        "definitions": [
            {
                "text": "A small flat sweet cake.",
                "examples": [
                    "Would you like a biscuit with your tea?"
                ]
            }
        ],
        "transcription": "\u02c8b\u026ask\u0259t",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-06",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-007",
        "word": "bread",
        "emoji": "\ud83c\udf5e",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "fresh bread, white bread",
        "definitions": [
            {
                "text": "A common food made from flour and water.",
                "examples": [
                    "I like fresh bread.",
                    "Can you buy some bread?",
                    "I eat bread for breakfast."
                ]
            }
        ],
        "transcription": "br\u025bd",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "braud\u0105",
            "origin_meaning": "bread"
        },
        "legacy_id": "A1-FOOD-07",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-008",
        "word": "breakfast",
        "emoji": "\ud83c\udf73",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "eat breakfast, have breakfast",
        "definitions": [
            {
                "text": "The first meal of the day.",
                "examples": [
                    "Breakfast is at seven o'clock."
                ]
            }
        ],
        "transcription": "\u02c8br\u025bkf\u0259st",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-08",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-009",
        "word": "broccoli",
        "emoji": "\ud83e\udd66",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A green vegetable with thick stems and small green flowers.",
                "examples": [
                    "Eat your broccoli, it's good for you."
                ]
            }
        ],
        "subtext": "related to fruits vegetables",
        "transcription": "\u02c8br\u0251k\u0259li",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-11",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-010",
        "word": "butter",
        "emoji": "\ud83e\uddc8",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A soft yellow food made from milk.",
                "examples": [
                    "Bread and butter."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8b\u0259t\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "salsus",
            "origin_meaning": "salted"
        },
        "legacy_id": "A1-FOOD-12",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-011",
        "word": "cake",
        "emoji": "\ud83c\udf70",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cakes",
        "definitions": [
            {
                "text": "A sweet food made from flour, sugar, and eggs.",
                "examples": [
                    "Would you like a piece of cake?"
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "ke\u026ak",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-13",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-012",
        "word": "carrot",
        "emoji": "\ud83e\udd55",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "carrots",
        "definitions": [
            {
                "text": "A long orange vegetable that grows underground.",
                "examples": [
                    "Carrots are good for your eyes."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8k\u025br\u0259t",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "vegetables",
        "legacy_id": "A1-FOOD-14",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-013",
        "word": "cereal",
        "emoji": "\ud83e\udd63",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "transcription": "\u02c8s\u026a\u0259r\u026a\u0259l",
        "definitions": [
            {
                "text": "A food made from grain that people often eat for breakfast with milk.",
                "examples": [
                    "I have a bowl of cereal every morning."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-15",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-014",
        "word": "cheese",
        "emoji": "\ud83e\uddc0",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A food made from milk, usually white or yellow.",
                "examples": [
                    "I like cheese on my pizza."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02a7iz",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-16",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-015",
        "word": "chicken",
        "emoji": "\ud83c\udf57",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A common type of meat from a bird.",
                "examples": [
                    "I like roast chicken."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8\u02a7\u026ak\u0259n",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "farm",
        "legacy_id": "A1-FOOD-17",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-016",
        "word": "chips",
        "emoji": "\ud83c\udf5f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chips",
        "subtext": "related to basic foods",
        "synonyms": [
            "\ud83c\uddfa\ud83c\uddf8 fries",
            "french fries"
        ],
        "definitions": [
            {
                "text": "Long thin pieces of potato cooked in oil.",
                "examples": [
                    "I want fish and chips for lunch."
                ]
            }
        ],
        "transcription": "\u02a7\u026aps",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-18",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-017",
        "word": "chocolate",
        "emoji": "\ud83c\udf6b",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A sweet brown food made from cocoa beans.",
                "examples": [
                    "I love milk chocolate."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8\u02a7\u0254kl\u0259t",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-19",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-018",
        "word": "coffee",
        "etymology": {
            "origin_lang": "Min Chinese",
            "origin_word": "te"
        },
        "emoji": "\u2615",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "black coffee, cup of coffee",
        "definitions": [
            {
                "text": "A hot brown drink made from coffee beans.",
                "examples": [
                    "I drink coffee in the morning.",
                    "I drink coffee every morning.",
                    "Do you want sugar in your coffee?"
                ]
            },
            {
                "text": "Many people drink this to wake up.",
                "examples": [
                    "The coffee is very hot."
                ]
            }
        ],
        "transcription": "\u02c8k\u0254fi",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "legacy_id": "A1-FOOD-20",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-019",
        "word": "cookie",
        "emoji": "\ud83c\udf6a",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cookies",
        "subtext": "related to basic foods",
        "synonyms": [
            "\ud83c\uddec\ud83c\udde7 biscuit"
        ],
        "definitions": [
            {
                "text": "A small flat sweet cake.",
                "examples": [
                    "I want a chocolate cookie."
                ]
            }
        ],
        "transcription": "\u02c8k\u028aki",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-23",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-020",
        "word": "corn",
        "emoji": "\ud83c\udf3d",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "transcription": "k\u0254\u02d0n",
        "definitions": [
            {
                "text": "A tall plant that produces yellow seeds eaten as a vegetable.",
                "examples": [
                    "We had grilled corn for dinner."
                ]
            }
        ],
        "subtext": "sweet corn",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-24",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-021",
        "word": "cucumber",
        "emoji": "\ud83e\udd52",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cucumbers",
        "definitions": [
            {
                "text": "A long green vegetable used in salads.",
                "examples": [
                    "I like cucumber and tomato salad."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8kjuk\u0259mb\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-25",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-022",
        "word": "dessert",
        "emoji": "\ud83c\udf70",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "desserts",
        "subtext": "related to meals of the day",
        "synonyms": [
            "sweet dish"
        ],
        "definitions": [
            {
                "text": "Sweet food eaten at the end of a meal.",
                "examples": [
                    "What is for dessert?"
                ]
            }
        ],
        "transcription": "d\u026a\u02c8z\u0259rt",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-28",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-023",
        "word": "dinner",
        "emoji": "\ud83c\udf7d\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "eat dinner, have dinner",
        "definitions": [
            {
                "text": "The main meal of the day, usually in the evening.",
                "examples": [
                    "Dinner is at eight o'clock."
                ]
            }
        ],
        "transcription": "\u02c8d\u026an\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-29",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-024",
        "word": "egg",
        "emoji": "\ud83e\udd5a",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "eggs",
        "subtext": "boiled egg, fried egg, scrambled eggs",
        "definitions": [
            {
                "text": "An oval object laid by a hen.",
                "examples": [
                    "I had a boiled egg for breakfast.",
                    "How do you like your eggs?"
                ]
            },
            {
                "text": "Many people eat eggs for breakfast.",
                "examples": [
                    "We need eggs to bake a cake."
                ]
            }
        ],
        "transcription": "\u025bg",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-34",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-025",
        "word": "food",
        "emoji": "\ud83c\udf72",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "healthy food, fast food",
        "definitions": [
            {
                "text": "Things that people eat.",
                "examples": [
                    "The food is good here."
                ]
            }
        ],
        "transcription": "fud",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "sal",
            "origin_meaning": "salt"
        },
        "legacy_id": "A1-FOOD-35",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-026",
        "word": "fries",
        "emoji": "\ud83c\udf5f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fries",
        "subtext": "french fries, chips",
        "synonyms": [
            "\ud83c\uddec\ud83c\udde7 chips"
        ],
        "definitions": [
            {
                "text": "Long thin pieces of potato cooked in oil.",
                "examples": [
                    "Would you like fries with your burger?"
                ]
            }
        ],
        "transcription": "fra\u026az",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-36",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-027",
        "word": "fruit",
        "emoji": "\ud83c\udf4e",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "fresh fruit, fruit juice",
        "definitions": [
            {
                "text": "The sweet part of a plant that contains seeds, used as food.",
                "examples": [
                    "Fruit is healthy and good for you."
                ]
            }
        ],
        "transcription": "frut",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-37",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-028",
        "word": "garlic",
        "emoji": "\ud83e\uddc4",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A vegetable with a very strong smell and taste.",
                "examples": [
                    "Use garlic in the pasta sauce."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8g\u0251rl\u026ak",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Turkish",
            "origin_word": "yo\u011furt"
        },
        "legacy_id": "A1-FOOD-38",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-029",
        "word": "grape",
        "emoji": "\ud83c\udf47",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "grapes",
        "definitions": [
            {
                "text": "A small green or purple fruit.",
                "examples": [
                    "Would you like some grapes?"
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "gre\u026ap",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Old English",
            "origin_word": "garleac",
            "origin_meaning": "gar = spear, leac = leek"
        },
        "legacy_id": "A1-FOOD-39",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-030",
        "word": "grapes",
        "emoji": "\ud83c\udf47",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "grapes",
        "transcription": "\u0261re\u026aps",
        "definitions": [
            {
                "text": "Small round green or purple fruits that grow in bunches.",
                "examples": [
                    "I love eating sweet grapes."
                ]
            }
        ],
        "subtext": "a bunch of grapes",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-40",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-031",
        "word": "ham",
        "emoji": "\ud83c\udf56",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "Meat from the leg of a pig.",
                "examples": [
                    "A ham sandwich."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "h\u00e6m",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-41",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-032",
        "word": "honey",
        "emoji": "\ud83c\udf6f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A sweet, sticky yellow substance made by bees.",
                "examples": [
                    "I like honey on my toast."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8h\u0259ni",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-44",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-033",
        "word": "ice cream",
        "emoji": "\ud83c\udf66",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A very cold sweet food made from milk.",
                "examples": [
                    "Let's get an ice cream."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "a\u026as krim",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-45",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-034",
        "word": "jam",
        "emoji": "\ud83c\udf53",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A sweet food made from fruit and sugar.",
                "examples": [
                    "Strawberry jam is delicious."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02a4\u00e6m",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-46",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-035",
        "word": "juice",
        "emoji": "\ud83e\uddc3",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A liquid from fruit or vegetables.",
                "examples": [
                    "I want a glass of orange juice.",
                    "Apple juice is sweet."
                ]
            },
            {
                "text": "Orange juice is common for breakfast.",
                "examples": [
                    "Freshly squeezed juice is the best."
                ]
            }
        ],
        "subtext": "related to drinks",
        "transcription": "\u02a4us",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "legacy_id": "A1-FOOD-47",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-036",
        "word": "lemon",
        "emoji": "\ud83c\udf4b",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lemons",
        "definitions": [
            {
                "text": "A yellow fruit that tastes sour.",
                "examples": [
                    "I like tea with lemon."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8l\u025bm\u0259n",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Arabic",
            "origin_word": "laym\u016bn"
        },
        "legacy_id": "A1-FOOD-48",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-037",
        "word": "lettuce",
        "emoji": "\ud83e\udd6c",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A plant with large green leaves eaten in salads.",
                "examples": [
                    "Wash the lettuce before you eat it."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8l\u025bt\u0259s",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-49",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-038",
        "word": "lunch",
        "emoji": "\ud83c\udf71",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "eat lunch, lunch break",
        "definitions": [
            {
                "text": "A meal eaten in the middle of the day.",
                "examples": [
                    "I eat lunch at one o'clock.",
                    "What is for lunch?"
                ]
            }
        ],
        "transcription": "l\u0259n\u02a7",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-50",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-039",
        "word": "meal",
        "emoji": "\ud83c\udf7d\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "meals",
        "subtext": "delicious meal, have a meal",
        "definitions": [
            {
                "text": "An occasion when food is eaten.",
                "examples": [
                    "Breakfast is the first meal of the day."
                ]
            }
        ],
        "transcription": "mil",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-51",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-040",
        "word": "meat",
        "emoji": "\ud83e\udd69",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "fresh meat, eat meat",
        "definitions": [
            {
                "text": "Food that comes from animals.",
                "examples": [
                    "He eats meat and vegetables."
                ]
            }
        ],
        "transcription": "mit",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "matiz",
            "origin_meaning": "food, meat"
        },
        "legacy_id": "A1-FOOD-52",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-041",
        "word": "milk",
        "emoji": "\ud83e\udd5b",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "fresh milk, glass of milk",
        "definitions": [
            {
                "text": "A white liquid produced by cows.",
                "examples": [
                    "Do you want milk in your coffee?",
                    "Children should drink milk."
                ]
            },
            {
                "text": "We use milk to make cheese and yogurt.",
                "examples": [
                    "Keep the milk in the fridge."
                ]
            }
        ],
        "transcription": "m\u026alk",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "meluks",
            "origin_meaning": "milk"
        },
        "legacy_id": "A1-FOOD-53",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-042",
        "word": "mushroom",
        "emoji": "\ud83c\udf44",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mushrooms",
        "definitions": [
            {
                "text": "A type of fungus with a stem and a cap.",
                "examples": [
                    "I don't like mushrooms on my pizza."
                ]
            }
        ],
        "subtext": "related to fruits vegetables",
        "transcription": "\u02c8m\u0259\u0283rum",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-54",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-043",
        "word": "oil",
        "emoji": "\ud83e\uddf4",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A smooth thick liquid used in cooking.",
                "examples": [
                    "Cook the vegetables in a little oil."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u0254\u026al",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-55",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-044",
        "word": "onion",
        "emoji": "\ud83e\uddc5",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "onions",
        "definitions": [
            {
                "text": "A round vegetable with a strong smell and taste.",
                "examples": [
                    "Chop the onion finely.",
                    "I need an onion for the soup."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8\u0259nj\u0259n",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-56",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-045",
        "word": "orange",
        "emoji": "\ud83c\udf4a",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "oranges",
        "definitions": [
            {
                "text": "A round orange fruit.",
                "examples": [
                    "I want an orange, please."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8\u0254r\u026an\u02a4",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "fruit",
        "etymology": {
            "origin_lang": "Sanskrit",
            "origin_word": "n\u0101ra\u1e45ga",
            "entered_via": "Persian/Arabic/Old French"
        },
        "legacy_id": "A1-FOOD-57",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-046",
        "word": "pasta",
        "emoji": "\ud83c\udf5d",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pasta",
        "definitions": [
            {
                "text": "A food made from flour and eggs, often served with sauce.",
                "examples": [
                    "I love pasta with tomato sauce.",
                    "Spaghetti is a type of pasta."
                ]
            },
            {
                "text": "This food is originally from Italy.",
                "examples": [
                    "There are many different shapes of pasta."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8p\u0251st\u0259",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-58",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-047",
        "word": "pear",
        "emoji": "\ud83c\udf50",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pears",
        "definitions": [
            {
                "text": "A sweet fruit that is small at the top and round at the bottom.",
                "examples": [
                    "I have a pear for lunch."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "p\u025br",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-59",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-048",
        "word": "peas",
        "emoji": "\ud83e\udedb",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "peas",
        "definitions": [
            {
                "text": "Small round green seeds eaten as a vegetable.",
                "examples": [
                    "We had fish and peas for dinner."
                ]
            }
        ],
        "subtext": "related to fruits vegetables",
        "transcription": "piz",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-60",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-049",
        "word": "pepper",
        "emoji": "\ud83c\udf36\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A black or white powder with a strong hot taste used in cooking.",
                "examples": [
                    "Add some salt and pepper."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8p\u025bp\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-61",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-050",
        "word": "pineapple",
        "emoji": "\ud83c\udf4d",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pineapples",
        "definitions": [
            {
                "text": "A large tropical fruit with a tough skin and yellow flesh.",
                "examples": [
                    "We bought a fresh pineapple."
                ]
            }
        ],
        "subtext": "related to fruits vegetables",
        "transcription": "\u02c8pa\u026a\u02ccn\u00e6p\u0259l",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Middle English",
            "origin_word": "pin + appel"
        },
        "legacy_id": "A1-FOOD-62",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-051",
        "word": "pizza",
        "etymology": "Pizza \u2192 Pitta (Greek?)",
        "numberPlural": "3 pizza",
        "answer": "three pizzas",
        "emoji": "\ud83c\udf55",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pizzas",
        "definitions": [
            {
                "text": "A flat bread with cheese and tomato.",
                "examples": [
                    "I like cheese pizza.",
                    "Let's order a pizza."
                ]
            },
            {
                "text": "This food is originally from Italy.",
                "examples": [
                    "Pizza is popular all over the world."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8pits\u0259",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-63",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-052",
        "word": "pork",
        "emoji": "\ud83e\udd69",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "Meat from a pig.",
                "examples": [
                    "Is there pork in this sausage?"
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "p\u0254rk",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-64",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-053",
        "word": "potato",
        "emoji": "\ud83e\udd54",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "potatoes",
        "definitions": [
            {
                "text": "A round white vegetable with a brown skin that grows underground.",
                "examples": [
                    "I love roast potatoes."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "p\u0259\u02c8te\u026a\u02ccto\u028a",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "vegetables",
        "legacy_id": "A1-FOOD-65",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-054",
        "word": "rice",
        "emoji": "\ud83c\udf5a",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "white rice, fried rice",
        "definitions": [
            {
                "text": "Small white grains that we cook and eat.",
                "examples": [
                    "We eat rice every day."
                ]
            }
        ],
        "transcription": "ra\u026as",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Nahuatl",
            "origin_word": "xocol\u0101tl"
        },
        "legacy_id": "A1-FOOD-66",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-055",
        "word": "salad",
        "emoji": "\ud83e\udd57",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "salads",
        "definitions": [
            {
                "text": "A cold dish of various vegetables.",
                "examples": [
                    "I'll have a green salad for lunch."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8s\u00e6l\u0259d",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-67",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-056",
        "word": "salt",
        "emoji": "\ud83e\uddc2",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A white substance used to give flavor to food.",
                "examples": [
                    "Can you pass the salt, please?"
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "s\u0254lt",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-68",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-057",
        "word": "sandwich",
        "emoji": "\ud83e\udd6a",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sandwiches",
        "definitions": [
            {
                "text": "Two pieces of bread with food such as cheese or meat between them.",
                "examples": [
                    "I have a cheese sandwich for lunch."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8s\u00e6nw\u026a\u02a7",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-69",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-058",
        "word": "sausage",
        "emoji": "\ud83c\udf2d",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sausages",
        "definitions": [
            {
                "text": "A mixture of meat and spices in a long thin skin.",
                "examples": [
                    "We had sausages for breakfast."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8s\u0254s\u026a\u02a4",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-70",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-059",
        "word": "snack",
        "emoji": "\ud83e\udd68",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "snacks",
        "definitions": [
            {
                "text": "A small amount of food eaten between meals.",
                "examples": [
                    "I like healthy snacks like fruit."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "sn\u00e6k",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-71",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-060",
        "word": "soda",
        "emoji": "\ud83e\udd64",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sodas",
        "transcription": "\ud83c\uddec\ud83c\udde7 \u02c8s\u0259\u028ad\u0259 | \ud83c\uddfa\ud83c\uddf8 \u02c8so\u028ad\u0259",
        "subtext": "fizzy drink, soft drink",
        "definitions": [
            {
                "text": "A sweet drink with bubbles.",
                "examples": [
                    "I don't drink much soda because it has a lot of sugar."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "Ceres",
            "origin_meaning": "Goddess of agriculture"
        },
        "legacy_id": "A1-FOOD-72",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-061",
        "word": "soup",
        "emoji": "\ud83e\udd63",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A liquid food made by cooking meat, vegetables, or fish in water.",
                "examples": [
                    "I had tomato soup for lunch."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "sup",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-73",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-062",
        "word": "strawberry",
        "emoji": "\ud83c\udf53",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "strawberries",
        "definitions": [
            {
                "text": "A small red fruit.",
                "examples": [
                    "I love strawberry ice cream."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8str\u0254\u02ccb\u025bri",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "straubari"
        },
        "legacy_id": "A1-FOOD-74",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-063",
        "word": "sugar",
        "emoji": "\ud83c\udf5a",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A sweet substance used in food and drinks.",
                "examples": [
                    "Do you take sugar in your coffee?"
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8\u0283\u028ag\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-75",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-064",
        "word": "tea",
        "emoji": "\ud83c\udf75",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "green tea, cup of tea",
        "definitions": [
            {
                "text": "A hot drink made with hot water and tea leaves.",
                "examples": [
                    "Would you like a cup of tea?",
                    "Green tea is very healthy.",
                    "She drinks tea every day."
                ]
            },
            {
                "text": "This is a very popular drink in England and Asia.",
                "examples": [
                    "I like tea with lemon."
                ]
            }
        ],
        "transcription": "ti",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "legacy_id": "A1-FOOD-76",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-065",
        "word": "tomato",
        "emoji": "\ud83c\udf45",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tomatoes",
        "definitions": [
            {
                "text": "A soft red fruit with a lot of seeds, eaten as a vegetable.",
                "examples": [
                    "Put some tomatoes in the salad."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "t\u0259\u02c8m\u0251\u02ccto\u028a",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "vegetables",
        "legacy_id": "A1-FOOD-77",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-066",
        "word": "vegetable",
        "emoji": "\ud83e\udd66",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "vegetables",
        "subtext": "fresh vegetables, green vegetables",
        "definitions": [
            {
                "text": "A plant that is eaten as food, such as a carrot or tomato.",
                "examples": [
                    "He eats vegetables every day."
                ]
            }
        ],
        "transcription": "\u02c8v\u025b\u02a4t\u0259b\u0259l",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-80",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-067",
        "word": "water",
        "emoji": "\ud83d\udeb0",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "cold water, glass of water",
        "definitions": [
            {
                "text": "A clear liquid that we drink.",
                "examples": [
                    "I drink a glass of water.",
                    "The water is cold.",
                    "Please drink water."
                ]
            }
        ],
        "transcription": "\u02c8w\u0254t\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "wat\u014dr",
            "origin_meaning": "water"
        },
        "legacy_id": "A1-FOOD-81",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-068",
        "word": "watermelon",
        "emoji": "\ud83c\udf49",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "watermelons",
        "definitions": [
            {
                "text": "A large round fruit with green skin and red flesh.",
                "examples": [
                    "Watermelon is refreshing in summer."
                ]
            }
        ],
        "subtext": "related to fruits vegetables",
        "transcription": "\u02c8w\u0254t\u0259r\u02ccm\u025bl\u0259n",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Italian",
            "origin_word": "broccoli",
            "origin_meaning": "flowering crest of a cabbage"
        },
        "legacy_id": "A1-FOOD-82",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-069",
        "word": "wine",
        "emoji": "\ud83c\udf77",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "red wine, white wine, a glass of wine",
        "definitions": [
            {
                "text": "An alcoholic drink made from grapes.",
                "examples": [
                    "She drinks a glass of wine in the evening."
                ]
            }
        ],
        "transcription": "wa\u026an",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-83",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-070",
        "word": "yogurt",
        "emoji": "\ud83e\udd5b",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A thick liquid food made from milk.",
                "examples": [
                    "I eat yogurt for breakfast."
                ]
            }
        ],
        "subtext": "related to basic foods",
        "transcription": "\u02c8jo\u028ag\u0259rt",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A1-FOOD-84",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
