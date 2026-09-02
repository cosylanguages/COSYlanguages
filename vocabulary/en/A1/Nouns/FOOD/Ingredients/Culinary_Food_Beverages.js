(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-FOO-01",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-02",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-03",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-04",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-05",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-06",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-07",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-08",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-09",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-10",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-11",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-12",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-13",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-14",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-15",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-16",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-17",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-18",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-19",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-20",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-21",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-22",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-23",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-24",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-25",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-26",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-27",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-28",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-29",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-30",
        "word": "grapes",
        "emoji": "🍇",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "grapes",
        "transcription": "ɡreɪps",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-31",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-32",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-33",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-34",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-35",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-36",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-37",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-38",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-39",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-40",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-41",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-42",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-43",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-44",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-45",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-46",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-47",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-48",
        "word": "peas",
        "emoji": "🫛",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-49",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-50",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-51",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-52",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-53",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-54",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-55",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-56",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-57",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-58",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-59",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-60",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-61",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-62",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-63",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-64",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-65",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-66",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-67",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-68",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-69",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A1-NOUN-FOO-70",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
