(function() {
    const lang = "en";
    const data = [
    {
        "word": "balanced diet",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🥗",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "A diet that contains the proper proportions of nutrients necessary for good health.",
                "examples": [
                    "It's important to eat a balanced diet.",
                    "A balanced diet includes fruits, vegetables, and protein."
                ]
            }
        ],
        "subtext": "healthy eating, nutritious diet",
        "synonyms": [
            "healthy eating",
            "nutritious diet"
        ],
        "transcription": "ˈbælənst ˈdaɪət",
        "language": "en",
        "lang": "en",
        "id": "A2-NOUN-FOO-001",
        "legacy_id": "A2-FOOD-01",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "word": "buffet",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🍲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "buffets",
        "definitions": [
            {
                "text": "A meal where people serve themselves from several dishes on a table.",
                "examples": [
                    "The hotel offers a breakfast buffet.",
                    "It was a cold buffet with lots of salads."
                ]
            }
        ],
        "subtext": "self-service meal",
        "synonyms": [
            "self-service meal"
        ],
        "transcription": "ˈbʊfeɪ",
        "language": "en",
        "lang": "en",
        "id": "A2-NOUN-FOO-002",
        "legacy_id": "A2-FOOD-02",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "word": "calorie",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "calories",
        "definitions": [
            {
                "text": "A unit of energy often used to measure the energy value of food.",
                "examples": [
                    "This cake has a lot of calories.",
                    "How many calories are in this apple?"
                ]
            }
        ],
        "subtext": "energy unit, food energy",
        "synonyms": [
            "energy unit",
            "food energy"
        ],
        "transcription": "ˈkæləri",
        "language": "en",
        "lang": "en",
        "id": "A2-NOUN-FOO-004",
        "legacy_id": "A2-FOOD-04",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "word": "diet",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🥗",
        "form": "noun",
        "classification": "regular",
        "plural": "diets",
        "definitions": [
            {
                "text": "The food a person normally eats; or a special eating plan.",
                "examples": [
                    "She is on a healthy diet."
                ]
            }
        ],
        "subtext": "healthy diet / on a diet",
        "countability": "countable",
        "transcription": "ˈdaɪət",
        "language": "en",
        "lang": "en",
        "id": "A2-NOUN-FOO-005",
        "legacy_id": "A2-FOOD-09",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "word": "ingredient",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🥕",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "One of the foods that you use to make a particular food or dish.",
                "examples": [
                    "Mix all the ingredients together.",
                    "The main ingredient is flour."
                ]
            }
        ],
        "subtext": "food component",
        "synonyms": [
            "food component"
        ],
        "countability": "countable",
        "transcription": "ɪnˈɡriːdiənt",
        "language": "en",
        "lang": "en",
        "id": "A2-NOUN-FOO-006",
        "legacy_id": "A2-FOOD-11",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "word": "local cuisine",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🍜",
        "form": "noun",
        "classification": "regular",
        "plural": "local cuisines",
        "definitions": [
            {
                "text": "Traditional food from a specific area.",
                "examples": [
                    "I love trying the local cuisine.",
                    "The local cuisine here is very spicy."
                ]
            },
            {
                "text": "Trying local cuisine is a great part of traveling.",
                "examples": [
                    "The local cuisine uses fresh ingredients from the region."
                ]
            }
        ],
        "subtext": "regional food, local dishes",
        "synonyms": [
            "regional food",
            "local dishes"
        ],
        "countability": "countable",
        "transcription": "ˈloʊkl kwɪˈziːn",
        "language": "en",
        "lang": "en",
        "id": "A2-NOUN-FOO-007",
        "legacy_id": "A2-FOOD-12",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "word": "main course",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🍽️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "main courses",
        "definitions": [
            {
                "text": "The largest or most important part of a meal.",
                "examples": [
                    "For my main course, I'll have the grilled salmon.",
                    "What are you having for your main course?"
                ]
            }
        ],
        "subtext": "entree, primary dish",
        "synonyms": [
            "entree",
            "primary dish"
        ],
        "transcription": "meɪn kɔːrs",
        "language": "en",
        "lang": "en",
        "id": "A2-NOUN-FOO-008",
        "legacy_id": "A2-FOOD-14",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "word": "recipe",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A set of instructions telling you how to cook something.",
                "examples": [
                    "I have a great recipe for chocolate cake.",
                    "Follow the recipe carefully."
                ]
            }
        ],
        "subtext": "cooking instructions",
        "synonyms": [
            "cooking instructions"
        ],
        "countability": "countable",
        "transcription": "ˈrɛsəpi",
        "language": "en",
        "lang": "en",
        "id": "A2-NOUN-FOO-009",
        "legacy_id": "A2-FOOD-17",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "word": "reservation",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "reservations",
        "definitions": [
            {
                "text": "An arrangement to have something kept for you, such as a table at a restaurant.",
                "examples": [
                    "I'd like to make a reservation for two people.",
                    "We have a reservation for eight o'clock."
                ]
            }
        ],
        "subtext": "booking, advance arrangement",
        "synonyms": [
            "booking",
            "advance arrangement"
        ],
        "transcription": "ˌrɛzərˈveɪʃn",
        "language": "en",
        "lang": "en",
        "id": "A2-NOUN-FOO-010",
        "legacy_id": "A2-FOOD-18",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "word": "taco",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🌮",
        "form": "noun",
        "classification": "regular",
        "plural": "tacos",
        "definitions": [
            {
                "text": "A Mexican dish with a folded tortilla and filling.",
                "examples": [
                    "Let's eat tacos for dinner.",
                    "I like spicy beef tacos."
                ]
            },
            {
                "text": "This food is originally from Mexico.",
                "examples": [
                    "Tacos are usually small and handheld."
                ]
            }
        ],
        "subtext": "spicy taco",
        "synonyms": [
            "Mexican food"
        ],
        "countability": "countable",
        "transcription": "ˈtɑːkoʊ",
        "language": "en",
        "lang": "en",
        "id": "A2-NOUN-FOO-011",
        "legacy_id": "A2-FOOD-20",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "word": "tip",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "💸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tips",
        "definitions": [
            {
                "text": "A small amount of extra money given to someone who has provided a service.",
                "examples": [
                    "We left a generous tip for the waiter.",
                    "How much tip should I give?"
                ]
            }
        ],
        "subtext": "gratuity, service charge",
        "synonyms": [
            "gratuity",
            "service charge"
        ],
        "transcription": "tɪp",
        "language": "en",
        "lang": "en",
        "id": "A2-NOUN-FOO-012",
        "legacy_id": "A2-FOOD-21",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "word": "vitamin",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "💊",
        "form": "noun",
        "classification": "regular",
        "plural": "vitamins",
        "definitions": [
            {
                "text": "A natural substance in food that your body needs to stay healthy.",
                "examples": [
                    "Oranges contain vitamin C."
                ]
            }
        ],
        "subtext": "take vitamins",
        "synonyms": [
            "health supplement"
        ],
        "countability": "countable",
        "transcription": "ˈvaɪtəmɪn",
        "language": "en",
        "lang": "en",
        "id": "A2-NOUN-FOO-013",
        "legacy_id": "A2-FOOD-23",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A2-NOUN-FOO-018",
        "word": "flavor",
        "emoji": "🍦",
        "form": "noun",
        "definitions": [
            {
                "text": "The particular taste of a food or drink.",
                "examples": [
                    "Vanilla is a popular ice cream flavor.",
                    "This soup has a spicy flavor."
                ]
            }
        ],
        "subtext": "taste",
        "synonyms": [
            "taste"
        ],
        "transcription": "ˈfleɪvə",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "food",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A2-NOUN-FOO-019",
        "word": "nutrition",
        "emoji": "🥗",
        "form": "noun",
        "definitions": [
            {
                "text": "The process of providing or obtaining nourishment.",
                "examples": [
                    "Good nutrition is essential for health.",
                    "Vegetables provide vital nutrition."
                ]
            }
        ],
        "subtext": "nourishment",
        "synonyms": [
            "nourishment"
        ],
        "transcription": "njuˈtrɪʃn",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "food",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Nouns",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A2-NOUN-FOO-023",
        "word": "groceries",
        "emoji": "🛍️",
        "form": "noun",
        "definitions": [
            {
                "text": "Items of food and household supplies bought at a store.",
                "examples": [
                    "Put the groceries in the kitchen cupboard.",
                    "She ordered groceries online for delivery."
                ]
            }
        ],
        "subtext": "food supplies",
        "synonyms": [
            "food supplies"
        ],
        "transcription": "ˈɡrəʊsəriz",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "food",
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
