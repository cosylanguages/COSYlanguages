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
    },
    {
        "id": "A1-NOUN-FOO-082",
        "word": "candy",
        "emoji": "\ud83c\udf6c",
        "form": "noun",
        "transcription": "\u02c8k\u00e6ndi",
        "definitions": [
            {
                "text": "Sweet food made of sugar.",
                "examples": [
                    "Children love buying candy.",
                    "Do not eat too much candy."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-083",
        "word": "cream",
        "emoji": "\ud83e\udd5b",
        "form": "noun",
        "transcription": "kri\u02d0m",
        "definitions": [
            {
                "text": "The thick white fat taken from milk.",
                "examples": [
                    "Add cream to your coffee.",
                    "Strawberries taste great with fresh cream."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-084",
        "word": "noodle",
        "emoji": "\ud83c\udf5c",
        "form": "noun",
        "transcription": "\u02c8nu\u02d0d\u0259l",
        "definitions": [
            {
                "text": "A strip or ring of pasta dough cooked in soup.",
                "examples": [
                    "Cook egg noodles in chicken broth.",
                    "She loves eating hot noodle soup."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-085",
        "word": "peach",
        "emoji": "\ud83c\udf51",
        "form": "noun",
        "transcription": "pi\u02d0\u02a7",
        "definitions": [
            {
                "text": "A round fruit with juicy yellow flesh and downy skin.",
                "examples": [
                    "The ripe peach was sweet and soft.",
                    "We picked peaches in the orchard."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-088",
        "word": "almond",
        "emoji": "\ud83e\udd5c",
        "form": "noun",
        "transcription": "\u02c8\u0251\u02d0m\u0259nd",
        "definitions": [
            {
                "text": "An edible oval nut with a wooden shell.",
                "examples": [
                    "Eat raw almonds as a healthy snack.",
                    "She added flaked almonds to the cake."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-089",
        "word": "bean",
        "emoji": "\ud83e\uded8",
        "form": "noun",
        "transcription": "bi\u02d0n",
        "definitions": [
            {
                "text": "An edible seed produced in pods.",
                "examples": [
                    "Bake kidney beans in tomato sauce.",
                    "Green beans taste fresh steamed."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-090",
        "word": "berry",
        "emoji": "\ud83e\uded0",
        "form": "noun",
        "transcription": "\u02c8b\u025bri",
        "definitions": [
            {
                "text": "A small juicy pulpy fruit without a stone.",
                "examples": [
                    "Pick fresh wild berries in summer.",
                    "Blueberries and raspberries are berries."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-091",
        "word": "cabbage",
        "emoji": "\ud83e\udd6c",
        "form": "noun",
        "transcription": "\u02c8k\u00e6b\u0259\u02a4",
        "definitions": [
            {
                "text": "A cultivated plant with a leafy green or purple head.",
                "examples": [
                    "Chop cabbage finely for coleslaw.",
                    "Boil green cabbage in soup."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-092",
        "word": "cherry",
        "emoji": "\ud83c\udf52",
        "form": "noun",
        "transcription": "\u02c8\u02a7\u025bri",
        "definitions": [
            {
                "text": "A small round soft red fruit with a stone.",
                "examples": [
                    "Sweet dark cherries grow on our tree.",
                    "She topped ice cream with a cherry."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-093",
        "word": "cinnamon",
        "emoji": "\ud83e\uded9",
        "form": "noun",
        "transcription": "\u02c8s\u026an\u0259m\u0259n",
        "definitions": [
            {
                "text": "An aromatic spice made from the bark of a tree.",
                "examples": [
                    "Sprinkle cinnamon on warm oatmeal.",
                    "Cinnamon rolls smell delicious."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-094",
        "word": "coconut",
        "emoji": "\ud83e\udd65",
        "form": "noun",
        "transcription": "\u02c8ko\u028ak\u0259\u02ccn\u028ct",
        "definitions": [
            {
                "text": "A large oval brown nut with white edible flesh.",
                "examples": [
                    "Drink fresh coconut water.",
                    "Shredded coconut tops the cake."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-095",
        "word": "flour",
        "emoji": "\ud83c\udf3e",
        "form": "noun",
        "transcription": "\u02c8fla\u028a\u0259r",
        "definitions": [
            {
                "text": "A powder obtained by grinding grain, used to make bread.",
                "examples": [
                    "Sift wheat flour before baking.",
                    "Mix flour and water into dough."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-096",
        "word": "herb",
        "emoji": "\ud83c\udf3f",
        "form": "noun",
        "transcription": "\u025c\u02d0rb",
        "definitions": [
            {
                "text": "Any plant with leaves used for flavoring food.",
                "examples": [
                    "Add fresh green herbs to the sauce.",
                    "Basil and oregano are common cooking herbs."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-097",
        "word": "lemonade",
        "emoji": "\ud83c\udf4b",
        "form": "noun",
        "transcription": "\u02ccl\u025bm\u0259\u02c8ne\u026ad",
        "definitions": [
            {
                "text": "A drink made from lemon juice, sugar, and water.",
                "examples": [
                    "Drink cold lemonade on a hot day.",
                    "She served pitchers of homemade lemonade."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-098",
        "word": "lime",
        "emoji": "\ud83d\udfe2",
        "form": "noun",
        "transcription": "la\u026am",
        "definitions": [
            {
                "text": "A round green citrus fruit with sour juice.",
                "examples": [
                    "Squeeze lime wedge into cold water.",
                    "Key lime pie tastes tart."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-099",
        "word": "mustard",
        "emoji": "\ud83e\uded9",
        "form": "noun",
        "transcription": "\u02c8m\u028cst\u0259rd",
        "definitions": [
            {
                "text": "A pungent yellow condiment made from seeds.",
                "examples": [
                    "Spread yellow mustard on your hot dog.",
                    "Dijon mustard adds flavor to dressing."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-100",
        "word": "nut",
        "emoji": "\ud83e\udd5c",
        "form": "noun",
        "transcription": "n\u028ct",
        "definitions": [
            {
                "text": "A fruit consisting of a hard shell around an edible kernel.",
                "examples": [
                    "Walnuts and cashews are healthy nuts.",
                    "A squirrel stored nuts for winter."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-101",
        "word": "oatmeal",
        "emoji": "\ud83e\udd63",
        "form": "noun",
        "transcription": "\u02c8o\u028at\u02ccmi\u02d0l",
        "definitions": [
            {
                "text": "Meal made from ground oats, cooked as porridge.",
                "examples": [
                    "Eat a warm bowl of oatmeal.",
                    "Add raisins to your morning oatmeal."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-102",
        "word": "olive",
        "emoji": "\ud83e\uded2",
        "form": "noun",
        "transcription": "\u02c8\u0251\u02d0l\u0259v",
        "definitions": [
            {
                "text": "A small oval fruit eaten raw or pressed for oil.",
                "examples": [
                    "Add black olives to the pizza.",
                    "Olive oil is healthy for cooking."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-103",
        "word": "peanut",
        "emoji": "\ud83e\udd5c",
        "form": "noun",
        "transcription": "\u02c8pi\u02d0\u02ccn\u028ct",
        "definitions": [
            {
                "text": "The edible seed of a legume plant.",
                "examples": [
                    "Spread peanut butter on toast.",
                    "Eat roasted salted peanuts."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-104",
        "word": "pie",
        "emoji": "\ud83e\udd67",
        "form": "noun",
        "transcription": "pa\u026a",
        "definitions": [
            {
                "text": "A baked dish of fruit, meat, or vegetables with pastry.",
                "examples": [
                    "Bake an apple pie for dessert.",
                    "She served a warm pumpkin pie."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-105",
        "word": "plum",
        "emoji": "\ud83e\uded0",
        "form": "noun",
        "transcription": "pl\u028cm",
        "definitions": [
            {
                "text": "A sweet juicy fruit with reddish-purple skin.",
                "examples": [
                    "Pick ripe purple plums.",
                    "Plum jam spreads nicely on toast."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-106",
        "word": "raisin",
        "emoji": "\ud83c\udf47",
        "form": "noun",
        "transcription": "\u02c8re\u026az\u0259n",
        "definitions": [
            {
                "text": "A dried sweet grape.",
                "examples": [
                    "Add sweet raisins to oat cookies.",
                    "Pack a small box of raisins."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-107",
        "word": "salmon",
        "emoji": "\ud83d\udc1f",
        "form": "noun",
        "transcription": "\u02c8s\u00e6m\u0259n",
        "definitions": [
            {
                "text": "A large edible pink-fleshed fish.",
                "examples": [
                    "Grill fresh salmon fillet.",
                    "Smoked salmon is popular on bagels."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-108",
        "word": "seafood",
        "emoji": "\ud83e\udd90",
        "form": "noun",
        "transcription": "\u02c8si\u02d0\u02ccfu\u02d0d",
        "definitions": [
            {
                "text": "Fish and shellfish eaten as food.",
                "examples": [
                    "The coastal diner serves fresh seafood.",
                    "Prawns and crabs are popular seafood."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-109",
        "word": "spice",
        "emoji": "\ud83c\udf36\ufe0f",
        "form": "noun",
        "transcription": "spa\u026as",
        "definitions": [
            {
                "text": "An aromatic vegetable substance used to flavor food.",
                "examples": [
                    "Cinnamon and pepper are cooking spices.",
                    "Add spice to flavor the stew."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-110",
        "word": "toast",
        "emoji": "\ud83c\udf5e",
        "form": "noun",
        "transcription": "to\u028ast",
        "definitions": [
            {
                "text": "Sliced bread browned by heat.",
                "examples": [
                    "Butter two slices of warm toast.",
                    "Eat toast with jam for breakfast."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-111",
        "word": "tuna",
        "emoji": "\ud83d\udc1f",
        "form": "noun",
        "transcription": "\u02c8tu\u02d0n\u0259",
        "definitions": [
            {
                "text": "A large edible ocean fish.",
                "examples": [
                    "Make a tuna salad sandwich.",
                    "Tuna steak is delicious grilled."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-112",
        "word": "turkey",
        "emoji": "\ud83e\udd83",
        "form": "noun",
        "transcription": "\u02c8t\u025c\u02d0rki",
        "definitions": [
            {
                "text": "A large bird raised for its meat.",
                "examples": [
                    "Roast turkey is served at Thanksgiving.",
                    "He ordered a turkey slice sandwich."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-113",
        "word": "vanilla",
        "emoji": "\ud83c\udf66",
        "form": "noun",
        "transcription": "v\u0259\u02c8n\u026al\u0259",
        "definitions": [
            {
                "text": "A substance used as a sweet flavoring.",
                "examples": [
                    "Vanilla ice cream is a classic dessert.",
                    "Add vanilla extract to the cake batter."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-114",
        "word": "vinegar",
        "emoji": "\ud83e\uded9",
        "form": "noun",
        "transcription": "\u02c8v\u026an\u0259\u0261\u0259r",
        "definitions": [
            {
                "text": "A sour liquid used for dressing and seasoning food.",
                "examples": [
                    "Mix oil and vinegar for salad dressing.",
                    "Pickles are preserved in vinegar."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-115",
        "word": "avocado",
        "emoji": "\ud83e\udd51",
        "form": "noun",
        "transcription": "\u02cc\u00e6v\u0259\u02c8k\u0251\u02d0do\u028a",
        "definitions": [
            {
                "text": "A pear-shaped fruit with rough green skin and oily edible flesh.",
                "examples": [
                    "Slice fresh avocado into the salad.",
                    "Guacamole is made from ripe avocado."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-116",
        "word": "cauliflower",
        "emoji": "\ud83e\udd6c",
        "form": "noun",
        "transcription": "\u02c8k\u0251\u02d0l\u0259\u02ccfla\u028a\u0259r",
        "definitions": [
            {
                "text": "A cultivated plant with a large compact white flower head.",
                "examples": [
                    "Roast cauliflower with olive oil and spices.",
                    "Cauliflower soup tastes creamy."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-117",
        "word": "celery",
        "emoji": "\ud83e\udd6c",
        "form": "noun",
        "transcription": "\u02c8s\u025bl\u0259ri",
        "definitions": [
            {
                "text": "A cultivated plant with crisp juicy stalks.",
                "examples": [
                    "Dip celery stalks in peanut butter.",
                    "Chop celery for the vegetable soup."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-118",
        "word": "ginger",
        "emoji": "\ud83e\udeda",
        "form": "noun",
        "transcription": "\u02c8\u02a4\u026an\u02a4\u0259r",
        "definitions": [
            {
                "text": "A hot fragrant spice made from the rhizome of a plant.",
                "examples": [
                    "Add fresh ginger to hot tea.",
                    "Ginger gives curry a spicy kick."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-119",
        "word": "grapefruit",
        "emoji": "\ud83c\udf4a",
        "form": "noun",
        "transcription": "\u02c8\u0261re\u026ap\u02ccfru\u02d0t",
        "definitions": [
            {
                "text": "A large yellow or pink citrus fruit with sour juice.",
                "examples": [
                    "Eat half a pink grapefruit for breakfast.",
                    "Grapefruit juice is tangy."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-120",
        "word": "mango",
        "emoji": "\ud83e\udd6d",
        "form": "noun",
        "transcription": "\u02c8m\u00e6\u014b\u0261o\u028a",
        "definitions": [
            {
                "text": "A fleshy oval tropical fruit with yellow-orange flesh.",
                "examples": [
                    "Juicy ripe mangoes are sweet.",
                    "Blend mango with yogurt into a smoothie."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-121",
        "word": "melon",
        "emoji": "\ud83c\udf48",
        "form": "noun",
        "transcription": "\u02c8m\u025bl\u0259n",
        "definitions": [
            {
                "text": "A large round sweet fruit with smooth or ribbed skin.",
                "examples": [
                    "Slice sweet water melon on hot days.",
                    "Fresh melon makes a great starter."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-122",
        "word": "spinach",
        "emoji": "\ud83e\udd6c",
        "form": "noun",
        "transcription": "\u02c8sp\u026an\u0259\u02a7",
        "definitions": [
            {
                "text": "An edible plant with dark green leaves.",
                "examples": [
                    "Saute spinach with garlic.",
                    "Fresh spinach salad is healthy."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-123",
        "word": "walnut",
        "emoji": "\ud83e\udd5c",
        "form": "noun",
        "transcription": "\u02c8w\u0254\u02d0l\u02ccn\u028ct",
        "definitions": [
            {
                "text": "An edible wrinkled nut in a hard shell.",
                "examples": [
                    "Chop walnuts over your morning cereal.",
                    "Walnut cake tastes delicious."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-124",
        "word": "almonds",
        "emoji": "\ud83e\udd5c",
        "form": "noun",
        "transcription": "\u02c8\u0251\u02d0m\u0259ndz",
        "definitions": [
            {
                "text": "Plural of almond nut.",
                "examples": [
                    "Eat fresh almonds daily.",
                    "Toasted almonds garnish the dish."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-125",
        "word": "beverage",
        "emoji": "\ud83e\udd64",
        "form": "noun",
        "transcription": "\u02c8b\u025bv\u0259r\u026a\u02a4",
        "definitions": [
            {
                "text": "A drink other than water.",
                "examples": [
                    "Cold beverages are served at the bar.",
                    "Hot beverages warm you in winter."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-126",
        "word": "broth",
        "emoji": "\ud83e\udd63",
        "form": "noun",
        "transcription": "br\u0254\u02d0th",
        "definitions": [
            {
                "text": "Soup consisting of meat or vegetable stock.",
                "examples": [
                    "Drink hot chicken broth.",
                    "Sip warm vegetable broth."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-127",
        "word": "cocoa",
        "emoji": "\u2615",
        "form": "noun",
        "transcription": "\u02c8ko\u028ako\u028a",
        "definitions": [
            {
                "text": "A powder made from roasted cacao seeds.",
                "examples": [
                    "Drink hot cocoa on winter evenings.",
                    "Add cocoa powder to cake mix."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-128",
        "word": "crisps",
        "emoji": "\ud83e\udd54",
        "form": "noun",
        "transcription": "kr\u026asps",
        "definitions": [
            {
                "text": "Thin potato slices fried until crisp.",
                "examples": [
                    "Eat a bag of salted crisps.",
                    "British crisps come in many flavors."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-129",
        "word": "dough",
        "emoji": "\ud83c\udf5e",
        "form": "noun",
        "transcription": "do\u028a",
        "definitions": [
            {
                "text": "A thick malleable mixture of flour and liquid.",
                "examples": [
                    "Knead bread dough on the table.",
                    "Roll pizza dough out flat."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-130",
        "word": "dressing",
        "emoji": "\ud83e\udd57",
        "form": "noun",
        "transcription": "\u02c8dr\u025bs\u026a\u014b",
        "definitions": [
            {
                "text": "A sauce for salad, typically made of oil and vinegar.",
                "examples": [
                    "Pour lemon dressing on the salad.",
                    "Italian dressing adds great flavor."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-131",
        "word": "grain",
        "emoji": "\ud83c\udf3e",
        "form": "noun",
        "transcription": "\u0261re\u026an",
        "definitions": [
            {
                "text": "Wheat or cultivated cereal crop used as food.",
                "examples": [
                    "Whole grains are nutritious.",
                    "Farmers harvested golden grain."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-132",
        "word": "gravy",
        "emoji": "\ud83c\udf72",
        "form": "noun",
        "transcription": "\u02c8\u0261re\u026avi",
        "definitions": [
            {
                "text": "A sauce made from cooked meat juices.",
                "examples": [
                    "Pour hot gravy over roast potatoes.",
                    "Thicken turkey gravy with flour."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-133",
        "word": "hazelnut",
        "emoji": "\ud83e\udd5c",
        "form": "noun",
        "transcription": "\u02c8he\u026az\u0259l\u02ccn\u028ct",
        "definitions": [
            {
                "text": "A round edible nut with a hard brown shell.",
                "examples": [
                    "Chocolate spread with hazelnut tastes rich.",
                    "Add chopped hazelnuts to oats."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-134",
        "word": "ketchup",
        "emoji": "\ud83c\udf45",
        "form": "noun",
        "transcription": "\u02c8k\u025b\u02a7\u0259p",
        "definitions": [
            {
                "text": "A smooth sauce made chiefly from tomatoes and vinegar.",
                "examples": [
                    "Dip fries into tomato ketchup.",
                    "Pass the ketchup bottle, please."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-135",
        "word": "mayonnaise",
        "emoji": "\ud83e\udd6b",
        "form": "noun",
        "transcription": "\u02c8me\u026a\u0259\u02ccne\u026az",
        "definitions": [
            {
                "text": "A thick creamy dressing made of egg yolks and oil.",
                "examples": [
                    "Spread mayonnaise on your sandwich.",
                    "Add a spoonful of mayonnaise to tuna."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-136",
        "word": "meatball",
        "emoji": "\ud83e\uddc6",
        "form": "noun",
        "transcription": "\u02c8mi\u02d0t\u02ccb\u0254\u02d0l",
        "definitions": [
            {
                "text": "A small ball of ground meat seasoned and cooked.",
                "examples": [
                    "Spaghetti with meatballs is popular.",
                    "Simmer meatballs in tomato sauce."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-137",
        "word": "muffin",
        "emoji": "\ud83e\uddc1",
        "form": "noun",
        "transcription": "\u02c8m\u028cf\u0259n",
        "definitions": [
            {
                "text": "A small domed cake eaten for breakfast or afternoon tea.",
                "examples": [
                    "Eat a blueberry muffin with coffee.",
                    "Fresh baked muffins smell delicious."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-138",
        "word": "pancake",
        "emoji": "\ud83e\udd5e",
        "form": "noun",
        "transcription": "\u02c8p\u00e6n\u02ccke\u026ak",
        "definitions": [
            {
                "text": "A thin flat cake of batter fried on both sides.",
                "examples": [
                    "Serve hot pancakes with maple syrup.",
                    "We cook pancakes on Sunday morning."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-139",
        "word": "prawn",
        "emoji": "\ud83e\udd90",
        "form": "noun",
        "transcription": "pr\u0254\u02d0n",
        "definitions": [
            {
                "text": "A marine crustacean eaten as food.",
                "examples": [
                    "Grill prawns with garlic butter.",
                    "Add fresh prawns to the paella."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-140",
        "word": "almond milk",
        "emoji": "\ud83e\udd5b",
        "form": "noun",
        "transcription": "\u02c8\u0251\u02d0m\u0259nd m\u026alk",
        "definitions": [
            {
                "text": "A plant-based drink made from almonds.",
                "examples": [
                    "Pour almond milk over cereal.",
                    "She prefers almond milk in her coffee."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-141",
        "word": "appetizer",
        "emoji": "\ud83e\udd57",
        "form": "noun",
        "transcription": "\u02c8\u00e6p\u0259\u02ccta\u026az\u0259r",
        "definitions": [
            {
                "text": "A small dish served before a main meal.",
                "examples": [
                    "Order garlic bread as an appetizer.",
                    "Spring rolls are a delicious appetizer."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-142",
        "word": "bagel",
        "emoji": "\ud83e\udd6f",
        "form": "noun",
        "transcription": "\u02c8be\u026a\u0261\u0259l",
        "definitions": [
            {
                "text": "A dense ring-shaped bread roll.",
                "examples": [
                    "Toast a bagel with cream cheese.",
                    "He bought sesame bagels at the bakery."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-143",
        "word": "cheeseburger",
        "emoji": "\ud83c\udf54",
        "form": "noun",
        "transcription": "\u02c8\u02a7i\u02d0z\u02ccb\u025c\u02d0r\u0261\u0259r",
        "definitions": [
            {
                "text": "A hamburger topped with melted cheese.",
                "examples": [
                    "Order a cheeseburger with fries.",
                    "Grill cheeseburgers for outdoor lunch."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-144",
        "word": "cider",
        "emoji": "\ud83c\udf4f",
        "form": "noun",
        "transcription": "\u02c8sa\u026ad\u0259r",
        "definitions": [
            {
                "text": "An alcoholic or non-alcoholic drink made from apples.",
                "examples": [
                    "Drink warm spiced apple cider.",
                    "Cold cider is refreshing in autumn."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-145",
        "word": "espresso",
        "emoji": "\u2615",
        "form": "noun",
        "transcription": "\u025b\u02c8spr\u025bso\u028a",
        "definitions": [
            {
                "text": "Strong black coffee made under pressure.",
                "examples": [
                    "Drink a shot of hot espresso.",
                    "Italian cafes serve great espresso."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-146",
        "word": "hot dog",
        "emoji": "\ud83c\udf2d",
        "form": "noun",
        "transcription": "h\u0251\u02d0t d\u0254\u02d0\u0261",
        "definitions": [
            {
                "text": "A cooked sausage served in a sliced bun.",
                "examples": [
                    "Eat a hot dog at the baseball game.",
                    "Top your hot dog with mustard."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-147",
        "word": "muffins",
        "emoji": "\ud83e\uddc1",
        "form": "noun",
        "transcription": "\u02c8m\u028cf\u0259nz",
        "definitions": [
            {
                "text": "Plural of muffin.",
                "examples": [
                    "Bake fresh blueberry muffins.",
                    "She brought sweet muffins to work."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-148",
        "word": "noodle soup",
        "emoji": "\ud83c\udf5c",
        "form": "noun",
        "transcription": "\u02c8nu\u02d0d\u0259l su\u02d0p",
        "definitions": [
            {
                "text": "Soup made with noodles and broth.",
                "examples": [
                    "Hot chicken noodle soup comforts cold days.",
                    "Order a bowl of beef noodle soup."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-149",
        "word": "omelet",
        "emoji": "\ud83c\udf73",
        "form": "noun",
        "transcription": "\u02c8\u0251\u02d0ml\u0259t",
        "definitions": [
            {
                "text": "A dish of beaten eggs cooked in a frying pan.",
                "examples": [
                    "Make a cheese and spinach omelet.",
                    "She ordered a mushroom omelet for breakfast."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-150",
        "word": "waffle",
        "emoji": "\ud83e\uddc7",
        "form": "noun",
        "transcription": "\u02c8w\u0251\u02d0f\u0259l",
        "definitions": [
            {
                "text": "A crisp cake cooked in a waffle iron.",
                "examples": [
                    "Top warm waffles with maple syrup and berries.",
                    "Belgian waffles are delicious."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-151",
        "word": "black tea",
        "emoji": "\ud83e\uded6",
        "form": "noun",
        "transcription": "bl\u00e6k ti\u02d0",
        "definitions": [
            {
                "text": "Fully oxidized tea leaves brewed hot.",
                "examples": [
                    "Drink black tea with lemon or milk.",
                    "British breakfast usually includes hot black tea."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-152",
        "word": "green tea",
        "emoji": "\ud83e\uded6",
        "form": "noun",
        "transcription": "\u0261ri\u02d0n ti\u02d0",
        "definitions": [
            {
                "text": "Unfermented tea leaves rich in antioxidants.",
                "examples": [
                    "Sip warm green tea after meals.",
                    "Green tea has a light fresh flavor."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-153",
        "word": "herbal tea",
        "emoji": "\ud83e\uded6",
        "form": "noun",
        "transcription": "\u02c8h\u025c\u02d0rb\u0259l ti\u02d0",
        "definitions": [
            {
                "text": "An infusion of herbs or dried fruit in hot water.",
                "examples": [
                    "Chamomile is a popular soothing herbal tea.",
                    "Drink herbal tea before bedtime."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-154",
        "word": "iced tea",
        "emoji": "\ud83e\uddca",
        "form": "noun",
        "transcription": "a\u026ast ti\u02d0",
        "definitions": [
            {
                "text": "Chilled tea served over ice.",
                "examples": [
                    "Order sweet iced tea on hot summer days.",
                    "A tall glass of lemon iced tea is refreshing."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-155",
        "word": "sparkling water",
        "emoji": "\ud83e\udee7",
        "form": "noun",
        "transcription": "\u02c8sp\u0251\u02d0rkl\u026a\u014b \u02c8w\u0251\u02d0t\u0259r",
        "definitions": [
            {
                "text": "Carbonated water.",
                "examples": [
                    "Prefer sparkling water over still water with dinner.",
                    "Add a lemon slice to sparkling water."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-156",
        "word": "pea",
        "form": "noun",
        "transcription": "piː",
        "emoji": "🫛",
        "definitions": [
                {
                        "text": "A small round green vegetable.",
                        "examples": [
                                "I eat peas with dinner.",
                                "Green peas are good for you."
                        ]
                }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
},
    {
        "id": "A1-NOUN-FOO-157",
        "word": "menu",
        "form": "noun",
        "transcription": "ˈmenjuː",
        "emoji": "📜",
        "definitions": [
                {
                        "text": "A list of food and drinks in a restaurant.",
                        "examples": [
                                "Can I see the menu, please?",
                                "The menu has many options."
                        ]
                }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
}
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
