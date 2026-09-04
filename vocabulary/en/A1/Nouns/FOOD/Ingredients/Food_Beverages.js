(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-FOO-001",
        "word": "apple",
        "numberPlural": "4 apple",
        "answer": "four apples",
        "emoji": "🍎",
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
        "transcription": "ˈæpəl",
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
        "emoji": "🥓",
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
        "transcription": "ˈbeɪkən",
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
        "emoji": "🍌",
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
        "transcription": "bəˈnænə",
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
        "emoji": "🥩",
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
        "emoji": "🍺",
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
        "transcription": "bɪr",
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
        "emoji": "🍪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "biscuits",
        "subtext": "related to basic foods",
        "synonyms": [
            "🇺🇸 cookie"
        ],
        "definitions": [
            {
                "text": "A small flat sweet cake.",
                "examples": [
                    "Would you like a biscuit with your tea?"
                ]
            }
        ],
        "transcription": "ˈbɪskət",
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
        "emoji": "🍞",
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
        "transcription": "brɛd",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "braudą",
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
        "emoji": "🍳",
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
        "transcription": "ˈbrɛkfəst",
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
        "emoji": "🥦",
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
        "transcription": "ˈbrɑkəli",
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
        "emoji": "🧈",
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
        "transcription": "ˈbətər",
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
        "emoji": "🍰",
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
        "transcription": "keɪk",
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
        "emoji": "🥕",
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
        "transcription": "ˈkɛrət",
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
        "emoji": "🥣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "transcription": "ˈsɪərɪəl",
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
        "emoji": "🧀",
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
        "transcription": "ʧiz",
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
        "emoji": "🍗",
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
        "transcription": "ˈʧɪkən",
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
        "emoji": "🍟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chips",
        "subtext": "related to basic foods",
        "synonyms": [
            "🇺🇸 fries",
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
        "transcription": "ʧɪps",
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
        "emoji": "🍫",
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
        "transcription": "ˈʧɔklət",
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
        "emoji": "☕",
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
        "transcription": "ˈkɔfi",
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
        "emoji": "🍪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cookies",
        "subtext": "related to basic foods",
        "synonyms": [
            "🇬🇧 biscuit"
        ],
        "definitions": [
            {
                "text": "A small flat sweet cake.",
                "examples": [
                    "I want a chocolate cookie."
                ]
            }
        ],
        "transcription": "ˈkʊki",
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
        "emoji": "🌽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "transcription": "kɔːn",
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
        "emoji": "🥒",
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
        "transcription": "ˈkjukəmbər",
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
        "emoji": "🍰",
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
        "transcription": "dɪˈzərt",
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
        "emoji": "🍽️",
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
        "transcription": "ˈdɪnər",
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
        "emoji": "🥚",
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
        "transcription": "ɛg",
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
        "emoji": "🍲",
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
        "emoji": "🍟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fries",
        "subtext": "french fries, chips",
        "synonyms": [
            "🇬🇧 chips"
        ],
        "definitions": [
            {
                "text": "Long thin pieces of potato cooked in oil.",
                "examples": [
                    "Would you like fries with your burger?"
                ]
            }
        ],
        "transcription": "fraɪz",
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
        "emoji": "🍎",
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
        "emoji": "🧄",
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
        "transcription": "ˈgɑrlɪk",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Turkish",
            "origin_word": "yoğurt"
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
        "emoji": "🍇",
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
        "transcription": "greɪp",
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
        "id": "A1-NOUN-FOO-031",
        "word": "ham",
        "emoji": "🍖",
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
        "transcription": "hæm",
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
        "emoji": "🍯",
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
        "transcription": "ˈhəni",
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
        "emoji": "🍦",
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
        "transcription": "aɪs krim",
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
        "emoji": "🍓",
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
        "transcription": "ʤæm",
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
        "emoji": "🧃",
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
        "transcription": "ʤus",
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
        "emoji": "🍋",
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
        "transcription": "ˈlɛmən",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Arabic",
            "origin_word": "laymūn"
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
        "emoji": "🥬",
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
        "transcription": "ˈlɛtəs",
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
        "emoji": "🍱",
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
        "transcription": "lənʧ",
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
        "emoji": "🍽️",
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
        "emoji": "🥩",
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
        "emoji": "🥛",
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
        "transcription": "mɪlk",
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
        "emoji": "🍄",
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
        "transcription": "ˈməʃrum",
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
        "emoji": "🧴",
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
        "transcription": "ɔɪl",
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
        "emoji": "🧅",
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
        "transcription": "ˈənjən",
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
        "emoji": "🍊",
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
        "transcription": "ˈɔrɪnʤ",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "fruit",
        "etymology": {
            "origin_lang": "Sanskrit",
            "origin_word": "nāraṅga",
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
        "emoji": "🍝",
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
        "transcription": "ˈpɑstə",
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
        "emoji": "🍐",
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
        "transcription": "pɛr",
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
        "id": "A1-NOUN-FOO-049",
        "word": "pepper",
        "emoji": "🌶️",
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
        "transcription": "ˈpɛpər",
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
        "emoji": "🍍",
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
        "transcription": "ˈpaɪˌnæpəl",
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
        "etymology": "Pizza → Pitta (Greek?)",
        "numberPlural": "3 pizza",
        "answer": "three pizzas",
        "emoji": "🍕",
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
        "transcription": "ˈpitsə",
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
        "emoji": "🥩",
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
        "transcription": "pɔrk",
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
        "emoji": "🥔",
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
        "transcription": "pəˈteɪˌtoʊ",
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
        "emoji": "🍚",
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
        "transcription": "raɪs",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Nahuatl",
            "origin_word": "xocolātl"
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
        "emoji": "🥗",
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
        "transcription": "ˈsæləd",
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
        "emoji": "🧂",
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
        "transcription": "sɔlt",
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
        "emoji": "🥪",
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
        "transcription": "ˈsænwɪʧ",
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
        "emoji": "🌭",
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
        "transcription": "ˈsɔsɪʤ",
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
        "emoji": "🥨",
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
        "transcription": "snæk",
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
        "emoji": "🥤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sodas",
        "transcription": "🇬🇧 ˈsəʊdə | 🇺🇸 ˈsoʊdə",
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
        "emoji": "🥣",
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
        "emoji": "🍓",
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
        "transcription": "ˈstrɔˌbɛri",
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
        "emoji": "🍚",
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
        "transcription": "ˈʃʊgər",
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
        "emoji": "🍵",
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
        "emoji": "🍅",
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
        "transcription": "təˈmɑˌtoʊ",
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
        "emoji": "🥦",
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
        "transcription": "ˈvɛʤtəbəl",
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
        "emoji": "🚰",
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
        "transcription": "ˈwɔtər",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "watōr",
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
        "emoji": "🍉",
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
        "transcription": "ˈwɔtərˌmɛlən",
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
        "emoji": "🍷",
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
        "transcription": "waɪn",
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
        "emoji": "🥛",
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
        "transcription": "ˈjoʊgərt",
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
        "emoji": "🍬",
        "form": "noun",
        "transcription": "ˈkændi",
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
        "emoji": "🥛",
        "form": "noun",
        "transcription": "kriːm",
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
        "emoji": "🍜",
        "form": "noun",
        "transcription": "ˈnuːdəl",
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
        "emoji": "🍑",
        "form": "noun",
        "transcription": "piːʧ",
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
        "emoji": "🥜",
        "form": "noun",
        "transcription": "ˈɑːmənd",
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
        "emoji": "🫘",
        "form": "noun",
        "transcription": "biːn",
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
        "emoji": "🫐",
        "form": "noun",
        "transcription": "ˈbɛri",
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
        "emoji": "🥬",
        "form": "noun",
        "transcription": "ˈkæbəʤ",
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
        "emoji": "🍒",
        "form": "noun",
        "transcription": "ˈʧɛri",
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
        "emoji": "🫙",
        "form": "noun",
        "transcription": "ˈsɪnəmən",
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
        "emoji": "🥥",
        "form": "noun",
        "transcription": "ˈkoʊkəˌnʌt",
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
        "emoji": "🌾",
        "form": "noun",
        "transcription": "ˈflaʊər",
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
        "emoji": "🌿",
        "form": "noun",
        "transcription": "ɜːrb",
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
        "emoji": "🍋",
        "form": "noun",
        "transcription": "ˌlɛməˈneɪd",
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
        "emoji": "🟢",
        "form": "noun",
        "transcription": "laɪm",
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
        "emoji": "🫙",
        "form": "noun",
        "transcription": "ˈmʌstərd",
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
        "emoji": "🥜",
        "form": "noun",
        "transcription": "nʌt",
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
        "emoji": "🥣",
        "form": "noun",
        "transcription": "ˈoʊtˌmiːl",
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
        "emoji": "🫒",
        "form": "noun",
        "transcription": "ˈɑːləv",
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
        "emoji": "🥜",
        "form": "noun",
        "transcription": "ˈpiːˌnʌt",
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
        "emoji": "🥧",
        "form": "noun",
        "transcription": "paɪ",
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
        "emoji": "🫐",
        "form": "noun",
        "transcription": "plʌm",
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
        "emoji": "🍇",
        "form": "noun",
        "transcription": "ˈreɪzən",
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
        "emoji": "🐟",
        "form": "noun",
        "transcription": "ˈsæmən",
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
        "emoji": "🦐",
        "form": "noun",
        "transcription": "ˈsiːˌfuːd",
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
        "emoji": "🌶️",
        "form": "noun",
        "transcription": "spaɪs",
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
        "emoji": "🍞",
        "form": "noun",
        "transcription": "toʊst",
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
        "emoji": "🐟",
        "form": "noun",
        "transcription": "ˈtuːnə",
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
        "emoji": "🦃",
        "form": "noun",
        "transcription": "ˈtɜːrki",
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
        "emoji": "🍦",
        "form": "noun",
        "transcription": "vəˈnɪlə",
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
        "emoji": "🫙",
        "form": "noun",
        "transcription": "ˈvɪnəɡər",
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
        "emoji": "🥑",
        "form": "noun",
        "transcription": "ˌævəˈkɑːdoʊ",
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
        "emoji": "🥬",
        "form": "noun",
        "transcription": "ˈkɑːləˌflaʊər",
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
        "emoji": "🥬",
        "form": "noun",
        "transcription": "ˈsɛləri",
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
        "emoji": "🫚",
        "form": "noun",
        "transcription": "ˈʤɪnʤər",
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
        "emoji": "🍊",
        "form": "noun",
        "transcription": "ˈɡreɪpˌfruːt",
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
        "emoji": "🥭",
        "form": "noun",
        "transcription": "ˈmæŋɡoʊ",
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
        "emoji": "🍈",
        "form": "noun",
        "transcription": "ˈmɛlən",
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
        "emoji": "🥬",
        "form": "noun",
        "transcription": "ˈspɪnəʧ",
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
        "emoji": "🥜",
        "form": "noun",
        "transcription": "ˈwɔːlˌnʌt",
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
        "id": "A1-NOUN-FOO-125",
        "word": "beverage",
        "emoji": "🥤",
        "form": "noun",
        "transcription": "ˈbɛvərɪʤ",
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
        "emoji": "🥣",
        "form": "noun",
        "transcription": "brɔːth",
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
        "emoji": "☕",
        "form": "noun",
        "transcription": "ˈkoʊkoʊ",
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
        "emoji": "🥔",
        "form": "noun",
        "transcription": "krɪsps",
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
        "emoji": "🍞",
        "form": "noun",
        "transcription": "doʊ",
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
        "emoji": "🥗",
        "form": "noun",
        "transcription": "ˈdrɛsɪŋ",
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
        "emoji": "🌾",
        "form": "noun",
        "transcription": "ɡreɪn",
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
        "emoji": "🍲",
        "form": "noun",
        "transcription": "ˈɡreɪvi",
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
        "emoji": "🥜",
        "form": "noun",
        "transcription": "ˈheɪzəlˌnʌt",
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
        "emoji": "🍅",
        "form": "noun",
        "transcription": "ˈkɛʧəp",
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
        "emoji": "🥫",
        "form": "noun",
        "transcription": "ˈmeɪəˌneɪz",
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
        "emoji": "🧆",
        "form": "noun",
        "transcription": "ˈmiːtˌbɔːl",
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
        "emoji": "🧁",
        "form": "noun",
        "transcription": "ˈmʌfən",
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
        "emoji": "🥞",
        "form": "noun",
        "transcription": "ˈpænˌkeɪk",
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
        "emoji": "🦐",
        "form": "noun",
        "transcription": "prɔːn",
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
        "emoji": "🥛",
        "form": "noun",
        "transcription": "ˈɑːmənd mɪlk",
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
        "emoji": "🥗",
        "form": "noun",
        "transcription": "ˈæpəˌtaɪzər",
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
        "emoji": "🥯",
        "form": "noun",
        "transcription": "ˈbeɪɡəl",
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
        "emoji": "🍔",
        "form": "noun",
        "transcription": "ˈʧiːzˌbɜːrɡər",
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
        "emoji": "🍏",
        "form": "noun",
        "transcription": "ˈsaɪdər",
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
        "emoji": "☕",
        "form": "noun",
        "transcription": "ɛˈsprɛsoʊ",
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
        "emoji": "🌭",
        "form": "noun",
        "transcription": "hɑːt dɔːɡ",
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
        "id": "A1-NOUN-FOO-148",
        "word": "noodle soup",
        "emoji": "🍜",
        "form": "noun",
        "transcription": "ˈnuːdəl suːp",
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
        "emoji": "🍳",
        "form": "noun",
        "transcription": "ˈɑːmlət",
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
        "emoji": "🧇",
        "form": "noun",
        "transcription": "ˈwɑːfəl",
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
        "emoji": "🫖",
        "form": "noun",
        "transcription": "blæk tiː",
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
        "emoji": "🫖",
        "form": "noun",
        "transcription": "ɡriːn tiː",
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
        "emoji": "🫖",
        "form": "noun",
        "transcription": "ˈhɜːrbəl tiː",
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
        "emoji": "🧊",
        "form": "noun",
        "transcription": "aɪst tiː",
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
        "emoji": "🫧",
        "form": "noun",
        "transcription": "ˈspɑːrklɪŋ ˈwɑːtər",
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
