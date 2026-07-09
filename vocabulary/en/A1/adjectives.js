// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_starter_size_shape_001",
        "word": "tall",
        "form": "adjective",
        "emoji": "🦒",
        "definitions": [
            {
                "text": "A person or thing that is big from bottom to top.",
                "examples": [
                    "He is very tall.",
                    "That building is tall."
                ]
            },
            {
                "text": "Of greater than average height.",
                "examples": [
                    "She is a tall woman who works as an engineer."
                ]
            }
        ],
        "subtext": "a tall building / a tall person / tall enough",
        "synonyms": [
            "high",
            "lofty"
        ],
        "comparative": "taller",
        "superlative": "the tallest",
        "transcription": "tɔl",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "short"
        ]
    },
    {
        "id": "en_starter_size_shape_002",
        "word": "short",
        "form": "adjective",
        "emoji": "📏",
        "definitions": [
            {
                "text": "A person or thing that is not tall.",
                "examples": [
                    "She is short.",
                    "The pencil is short."
                ]
            },
            {
                "text": "Of less than average height or length.",
                "examples": [
                    "He has a short commute — ten minutes by bike."
                ]
            }
        ],
        "subtext": "a short journey / short hair / too short",
        "synonyms": [
            "small",
            "brief"
        ],
        "comparative": "shorter",
        "superlative": "the shortest",
        "transcription": "ʃɔrt",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "tall"
        ]
    },
    {
        "id": "en_starter_size_shape_003",
        "word": "young",
        "form": "adjective",
        "emoji": "👶",
        "definitions": [
            {
                "text": "Having lived or existed for only a short time.",
                "examples": [
                    "He is a young man."
                ]
            }
        ],
        "subtext": "young person / young professional / young at heart",
        "synonyms": [
            "youthful"
        ],
        "comparative": "younger",
        "superlative": "the youngest",
        "transcription": "jəŋ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "old"
        ]
    },
    {
        "id": "en_starter_size_shape_004",
        "word": "old",
        "form": "adjective",
        "emoji": "👴",
        "definitions": [
            {
                "text": "Having lived or existed for a long time.",
                "examples": [
                    "This is an old book."
                ]
            },
            {
                "text": "Having existed for a long time.",
                "examples": [
                    "He works with old clients from ten years ago."
                ]
            }
        ],
        "subtext": "old friend / old habits / very old",
        "synonyms": [
            "elderly",
            "ancient"
        ],
        "comparative": "older",
        "superlative": "the oldest",
        "transcription": "oʊld",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "new"
        ]
    },
    {
        "id": "en_starter_nature_009",
        "word": "sunny",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a lot of light from the sun.",
                "examples": [
                    "It is a sunny day.",
                    "I like sunny weather."
                ]
            }
        ],
        "subtext": "sunny day / sunny weather / sunny spell",
        "synonyms": [
            "bright",
            "clear"
        ],
        "comparative": "sunnier",
        "superlative": "the sunniest",
        "transcription": "ˈsəni",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "rainy"
        ]
    },
    {
        "id": "en_starter_nature_010",
        "word": "rainy",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a lot of rain.",
                "examples": [
                    "It is a rainy day.",
                    "Wear a coat, it's rainy outside."
                ]
            }
        ],
        "subtext": "rainy day / rainy weather / rainy season",
        "synonyms": [
            "wet",
            "showery"
        ],
        "comparative": "rainier",
        "superlative": "the rainiest",
        "transcription": "ˈreɪni",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "sunny"
        ]
    },
    {
        "id": "en_starter_nature_011",
        "word": "hot",
        "emoji": "🔥",
        "form": "adjective",
        "subtext": "very hot, hot weather / hot weather / a hot drink / too hot",
        "definitions": [
            {
                "text": "Having a high temperature.",
                "examples": [
                    "The coffee is hot.",
                    "It is very hot in summer.",
                    "It is too hot to work comfortably today."
                ]
            }
        ],
        "comparative": "hotter",
        "superlative": "the hottest",
        "transcription": "hɑt",
        "synonyms": [
            "warm"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "cold"
        ]
    },
    {
        "id": "en_starter_nature_012",
        "word": "cold",
        "emoji": "❄️",
        "form": "adjective",
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold",
        "definitions": [
            {
                "text": "Having a low temperature.",
                "examples": [
                    "The water is cold.",
                    "It is cold in winter."
                ]
            },
            {
                "text": "Having a low temperature; not warm.",
                "examples": [
                    "I need a coat — it is very cold outside."
                ]
            }
        ],
        "comparative": "colder",
        "superlative": "the coldest",
        "transcription": "koʊld",
        "synonyms": [
            "chilly",
            "cool"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "kaldaz"
        },
        "antonyms": [
            "hot"
        ]
    },
    {
        "id": "en_starter_shopping_001",
        "word": "cheap",
        "emoji": "🏷️",
        "form": "adjective",
        "subtext": "cheap flight / very cheap / cheap and cheerful",
        "synonyms": [
            "low price",
            "inexpensive"
        ],
        "definitions": [
            {
                "text": "Not expensive; low in price.",
                "examples": [
                    "This coffee is cheap."
                ]
            },
            {
                "text": "Low in price.",
                "examples": [
                    "The lunch near the office is very cheap."
                ]
            }
        ],
        "comparative": "cheaper",
        "superlative": "the cheapest",
        "transcription": "ʧip",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "expensive"
        ]
    },
    {
        "id": "en_starter_shopping_002",
        "word": "expensive",
        "emoji": "💎",
        "form": "adjective",
        "subtext": "very expensive / expensive taste / too expensive",
        "synonyms": [
            "costly",
            "high price"
        ],
        "definitions": [
            {
                "text": "Costing a lot of money.",
                "examples": [
                    "That car is expensive."
                ]
            },
            {
                "text": "High in price.",
                "examples": [
                    "The city centre is expensive for rent."
                ]
            }
        ],
        "comparative": "more expensive",
        "superlative": "the most expensive",
        "transcription": "ɪkˈspɛnsɪv",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "cheap"
        ]
    },
    {
        "id": "en_starter_size_shape_005",
        "word": "good",
        "emoji": "👍",
        "form": "adjective",
        "subtext": "good idea / good luck / good value",
        "synonyms": [
            "great",
            "nice",
            "pleasant"
        ],
        "definitions": [
            {
                "text": "Of high quality or ability; pleasant.",
                "examples": [
                    "This is a good job."
                ]
            },
            {
                "text": "Of high quality or pleasant.",
                "examples": [
                    "She has a good job with flexible hours."
                ]
            }
        ],
        "comparative": "better",
        "superlative": "the best",
        "transcription": "gʊd",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gōdaz"
        },
        "antonyms": [
            "bad"
        ]
    },
    {
        "id": "en_starter_size_shape_006",
        "word": "bad",
        "emoji": "👎",
        "form": "adjective",
        "subtext": "bad news / bad luck / bad decision",
        "synonyms": [
            "terrible",
            "awful",
            "unpleasant"
        ],
        "definitions": [
            {
                "text": "Not good; unpleasant or of poor quality.",
                "examples": [
                    "The weather is bad today."
                ]
            },
            {
                "text": "Of low quality; unpleasant or harmful.",
                "examples": [
                    "He had a bad day at work."
                ]
            }
        ],
        "comparative": "worse",
        "superlative": "the worst",
        "transcription": "bæd",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Middle English",
            "origin_word": "badde"
        },
        "antonyms": [
            "good"
        ]
    },
    {
        "id": "en_starter_size_shape_007",
        "word": "big",
        "emoji": "🐘",
        "form": "adjective",
        "subtext": "a big house / a big problem / big enough",
        "synonyms": [
            "large",
            "huge"
        ],
        "definitions": [
            {
                "text": "Large in size.",
                "examples": [
                    "It is a big office."
                ]
            },
            {
                "text": "Large in size or amount.",
                "examples": [
                    "They have a big house near the park."
                ]
            }
        ],
        "comparative": "bigger",
        "superlative": "the biggest",
        "transcription": "bɪg",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Middle English",
            "origin_word": "bigge"
        },
        "antonyms": [
            "small"
        ]
    },
    {
        "id": "en_starter_size_shape_008",
        "word": "small",
        "emoji": "🐭",
        "form": "adjective",
        "subtext": "a small flat / a small salary / too small",
        "synonyms": [
            "little",
            "tiny"
        ],
        "definitions": [
            {
                "text": "Little in size.",
                "examples": [
                    "She has a small flat."
                ]
            },
            {
                "text": "Little in size or amount.",
                "examples": [
                    "She rents a small flat in the city centre."
                ]
            }
        ],
        "comparative": "smaller",
        "superlative": "the smallest",
        "transcription": "smɔl",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "smalaz"
        },
        "antonyms": [
            "large"
        ]
    },
    {
        "id": "en_starter_size_shape_009",
        "word": "easy",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not difficult.",
                "examples": [
                    "The test is easy.",
                    "The application form is easy to complete."
                ]
            }
        ],
        "subtext": "easy to do / nice and easy / not easy",
        "comparative": "easier",
        "superlative": "the easiest",
        "transcription": "ˈizi",
        "synonyms": [
            "simple"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "difficult"
        ]
    },
    {
        "id": "en_starter_size_shape_010",
        "word": "difficult",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hard to do or understand.",
                "examples": [
                    "This work is difficult."
                ]
            },
            {
                "text": "Not easy; requiring effort.",
                "examples": [
                    "The negotiation was very difficult."
                ]
            }
        ],
        "subtext": "difficult to do / very difficult / find it difficult",
        "comparative": "more difficult",
        "superlative": "the most difficult",
        "transcription": "ˈdɪfəkəlt",
        "synonyms": [
            "hard",
            "tough"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "easy"
        ]
    },
    {
        "id": "en_starter_emotions_002",
        "word": "happy",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "feel happy / happy with something / a happy day",
        "synonyms": [
            "glad",
            "joyful",
            "cheerful"
        ],
        "definitions": [
            {
                "text": "Feeling pleasure or joy.",
                "examples": [
                    "I am happy today."
                ]
            },
            {
                "text": "Feeling pleasure or satisfaction.",
                "examples": [
                    "She is happy in her new role."
                ]
            }
        ],
        "comparative": "happier",
        "superlative": "the happiest",
        "transcription": "ˈhæpi",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "sad"
        ]
    },
    {
        "id": "en_starter_emotions_003",
        "word": "tired",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
        "definitions": [
            {
                "text": "Needing rest or sleep.",
                "examples": [
                    "I am very tired after work.",
                    "I feel tired after a long week."
                ]
            }
        ],
        "comparative": "more tired",
        "superlative": "the most tired",
        "transcription": "taɪərd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "energetic"
        ]
    },
    {
        "id": "en_starter_work_023",
        "word": "full-time",
        "emoji": "⏰",
        "form": "adjective",
        "definitions": [
            {
                "text": "Working the complete number of hours in a working week.",
                "examples": [
                    "She has a full-time job in a bank."
                ]
            }
        ],
        "subtext": "full-time job / full-time work / full-time employee",
        "comparative": null,
        "superlative": null,
        "transcription": "ˈfʊlˌtaɪm",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "part-time"
        ]
    },
    {
        "id": "en_starter_emotions_004",
        "word": "thirsty",
        "emoji": "🥤",
        "form": "adjective",
        "definitions": [
            {
                "text": "Needing or wanting to drink.",
                "examples": [
                    "I am thirsty — can I have some water?"
                ]
            }
        ],
        "subtext": "feel thirsty",
        "synonyms": [
            "parched",
            "dehydrated"
        ],
        "comparative": "thirstier",
        "superlative": "the thirstiest",
        "transcription": "ˈθərsti",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "satisfied"
        ]
    },
    {
        "id": "en_starter_work_024",
        "word": "part-time",
        "emoji": "⏳",
        "form": "adjective",
        "definitions": [
            {
                "text": "Working fewer hours than a standard working week.",
                "examples": [
                    "He works part-time on Saturdays."
                ]
            }
        ],
        "subtext": "part-time job / part-time work / part-time student",
        "comparative": null,
        "superlative": null,
        "transcription": "ˈpɑrtˈtaɪm",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "full-time"
        ]
    },
    {
        "id": "en_starter_household_tasks_001",
        "word": "clean",
        "emoji": "✨",
        "form": "adjective",
        "subtext": "tidy, not dirty, keep it clean / clean clothes / a clean room / keep clean",
        "definitions": [
            {
                "text": "Free from dirt.",
                "examples": [
                    "The flat is clean now.",
                    "Keep the workspace clean and tidy."
                ]
            }
        ],
        "comparative": "cleaner",
        "superlative": "the cleanest",
        "transcription": "klin",
        "synonyms": [
            "tidy",
            "neat"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "dirty"
        ]
    },
    {
        "id": "en_starter_food_drink_026",
        "word": "healthy",
        "emoji": "🥗",
        "form": "adjective",
        "subtext": "well, fit, healthy diet",
        "definitions": [
            {
                "text": "Good for your body; not ill.",
                "examples": [
                    "Vegetables are healthy food."
                ]
            }
        ],
        "comparative": "healthier",
        "superlative": "the healthiest",
        "transcription": "ˈhɛlθi",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "antonyms": [
            "unhealthy"
        ]
    },
    {
        "id": "en_starter_food_drink_027",
        "word": "unhealthy",
        "emoji": "🍔",
        "form": "adjective",
        "subtext": "unhealthy food / unhealthy lifestyle",
        "synonyms": [
            "ill",
            "unfit"
        ],
        "definitions": [
            {
                "text": "Not good for your body; not healthy.",
                "examples": [
                    "Fast food is often unhealthy."
                ]
            }
        ],
        "comparative": "more unhealthy",
        "superlative": "the most unhealthy",
        "transcription": "ənˈhɛlθi",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "antonyms": [
            "healthy"
        ]
    },
    {
        "id": "en_starter_illnesses_symptoms_001",
        "word": "ill",
        "emoji": "🤒",
        "form": "adjective",
        "subtext": "sick, feel ill",
        "definitions": [
            {
                "text": "Not well; sick.",
                "examples": [
                    "I feel ill today."
                ]
            }
        ],
        "comparative": "more ill",
        "superlative": "the most ill",
        "transcription": "ɪl",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "well"
        ]
    },
    {
        "id": "en_starter_technology_001",
        "word": "online",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Using the internet.",
                "examples": [
                    "I buy food online sometimes."
                ]
            }
        ],
        "subtext": "online shopping / online course / stay online",
        "comparative": "more online",
        "superlative": "the most online",
        "transcription": "ˈɔnˌlaɪn",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "offline"
        ]
    },
    {
        "id": "en_starter_technology_002",
        "word": "offline",
        "emoji": "📴",
        "form": "adjective",
        "subtext": "work offline / go offline",
        "synonyms": [
            "disconnected"
        ],
        "definitions": [
            {
                "text": "Not using or connected to the internet.",
                "examples": [
                    "You can read this document offline."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈɔˌflaɪn",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "online"
        ]
    },
    {
        "id": "en_starter_people_002",
        "word": "alone",
        "emoji": "👤",
        "form": "adjective",
        "definitions": [
            {
                "text": "Without other people; by yourself.",
                "examples": [
                    "She lives alone."
                ]
            }
        ],
        "subtext": "live alone / travel alone / feel alone",
        "comparative": "more alone",
        "superlative": "the most alone",
        "transcription": "əˈloʊn",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "together"
        ]
    },
    {
        "id": "en_starter_emotions_005",
        "word": "relaxed",
        "emoji": "😌",
        "form": "adjective",
        "subtext": "feeling relaxed",
        "synonyms": [
            "calm",
            "peaceful",
            "chilled"
        ],
        "definitions": [
            {
                "text": "Calm; not worried or stressed.",
                "examples": [
                    "I feel relaxed at the weekend."
                ]
            }
        ],
        "comparative": "more relaxed",
        "superlative": "the most relaxed",
        "transcription": "rɪˈlækst",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "stressed"
        ]
    },
    {
        "id": "en_starter_emotions_006",
        "word": "worried",
        "emoji": "😟",
        "form": "adjective",
        "subtext": "worried about / deeply worried",
        "synonyms": [
            "anxious",
            "nervous",
            "uneasy"
        ],
        "definitions": [
            {
                "text": "Feeling anxious about something that might happen.",
                "examples": [
                    "She is worried about her job."
                ]
            }
        ],
        "comparative": "more worried",
        "superlative": "the most worried",
        "transcription": "ˈwərid",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "calm"
        ]
    },
    {
        "id": "en_starter_work_025",
        "word": "busy",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
        "definitions": [
            {
                "text": "Having a lot of things to do.",
                "examples": [
                    "I am very busy this week."
                ]
            },
            {
                "text": "Having much to do; crowded.",
                "examples": [
                    "Monday morning is always very busy."
                ]
            }
        ],
        "comparative": "busier",
        "superlative": "the busiest",
        "transcription": "ˈbɪzi",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "free"
        ]
    },
    {
        "id": "en_starter_describing_011",
        "word": "important",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "important meeting / very important / most important",
        "synonyms": [
            "essential"
        ],
        "definitions": [
            {
                "text": "Having great value or effect.",
                "examples": [
                    "Sleep is very important."
                ]
            },
            {
                "text": "Having great value or significance.",
                "examples": [
                    "Sleep is very important for performance."
                ]
            }
        ],
        "comparative": "more important",
        "superlative": "the most important",
        "transcription": "ˌɪmˈpɔrtənt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "unimportant"
        ]
    },
    {
        "id": "en_starter_describing_012",
        "word": "unimportant",
        "emoji": "🍃",
        "form": "adjective",
        "subtext": "unimportant detail / feel unimportant",
        "synonyms": [
            "minor",
            "small"
        ],
        "definitions": [
            {
                "text": "Not having great value or effect.",
                "examples": [
                    "It is an unimportant mistake."
                ]
            }
        ],
        "comparative": "more unimportant",
        "superlative": "the most unimportant",
        "transcription": "ənɪmˈpɔrtənt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "important"
        ]
    },
    {
        "id": "en_starter_colours_002",
        "word": "red",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "dark red, bright red / red wine / red face / red light",
        "definitions": [
            {
                "text": "Having the colour of blood or a ripe tomato.",
                "examples": [
                    "She has a red bag."
                ]
            },
            {
                "text": "Having the colour of blood.",
                "examples": [
                    "She drives a red car."
                ]
            }
        ],
        "comparative": "redder",
        "superlative": "the reddest",
        "transcription": "rɛd",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "basic",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "raudaz",
            "origin_meaning": "red"
        },
        "antonyms": [
            "green"
        ]
    },
    {
        "id": "en_starter_colours_003",
        "word": "blue",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "light blue, dark blue / dark blue / light blue / blue sky",
        "definitions": [
            {
                "text": "Having the colour of a clear sky.",
                "examples": [
                    "His car is blue."
                ]
            },
            {
                "text": "Having the colour of the sky.",
                "examples": [
                    "He wears a blue shirt to work."
                ]
            }
        ],
        "comparative": "bluer",
        "superlative": "the bluest",
        "transcription": "blu",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "basic",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "blēwaz",
            "origin_meaning": "blue"
        },
        "antonyms": [
            "orange"
        ]
    },
    {
        "id": "en_starter_colours_004",
        "word": "green",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "bright green, dark green / green energy / green space / bright green",
        "definitions": [
            {
                "text": "Having the colour of grass or leaves.",
                "examples": [
                    "She wears a green dress."
                ]
            },
            {
                "text": "Having the colour of grass.",
                "examples": [
                    "The company has green credentials."
                ]
            }
        ],
        "comparative": "greener",
        "superlative": "the greenest",
        "transcription": "grin",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "basic",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "grōniz",
            "origin_meaning": "green"
        },
        "antonyms": [
            "pink"
        ]
    },
    {
        "id": "en_starter_colours_005",
        "word": "white",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "pure white, snow white / white wine / off-white / bright white",
        "definitions": [
            {
                "text": "Having the colour of snow or milk.",
                "examples": [
                    "The walls are white."
                ]
            },
            {
                "text": "Having the lightest colour.",
                "examples": [
                    "The office walls are painted white."
                ]
            }
        ],
        "comparative": "whiter",
        "superlative": "the whitest",
        "transcription": "waɪt",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "hwītaz",
            "origin_meaning": "white"
        },
        "antonyms": [
            "black"
        ]
    },
    {
        "id": "en_starter_colours_006",
        "word": "black",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "jet black, dark as night / black coffee / black market / jet black",
        "definitions": [
            {
                "text": "Having the darkest colour, like the night sky.",
                "examples": [
                    "He wears a black coat."
                ]
            },
            {
                "text": "Having the darkest colour.",
                "examples": [
                    "He always wears a black suit."
                ]
            }
        ],
        "comparative": "blacker",
        "superlative": "the blackest",
        "transcription": "blæk",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "blakaz",
            "origin_meaning": "black"
        },
        "antonyms": [
            "white"
        ]
    },
    {
        "id": "en_starter_colours_007",
        "word": "yellow",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "bright yellow, lemon yellow / yellow light / pale yellow / bright yellow",
        "definitions": [
            {
                "text": "Having the colour of the sun or a lemon.",
                "examples": [
                    "She has a yellow umbrella."
                ]
            },
            {
                "text": "Having the colour of the sun.",
                "examples": [
                    "She bought a yellow notepad."
                ]
            }
        ],
        "comparative": "yellower",
        "superlative": "the yellowest",
        "transcription": "ˈjɛloʊ",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "basic",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gelwaz",
            "origin_meaning": "yellow"
        },
        "antonyms": [
            "purple"
        ]
    },
    {
        "id": "en_starter_shopping_003",
        "word": "free",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "free of charge, free gift / free time / free of charge / free to do",
        "definitions": [
            {
                "text": "Costing no money; at no charge.",
                "examples": [
                    "The museum is free on Sundays."
                ]
            },
            {
                "text": "Not costing money; not restricted.",
                "examples": [
                    "The parking here is free."
                ]
            }
        ],
        "comparative": "freer",
        "superlative": "the freest",
        "transcription": "fri",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "busy"
        ]
    },
    {
        "id": "en_starter_shopping_004",
        "word": "open",
        "emoji": "📖",
        "form": "adjective",
        "subtext": "now open, open for business / open door / open to ideas / wide open",
        "definitions": [
            {
                "text": "Not closed; allowing entry or access.",
                "examples": [
                    "The shop is open until eight."
                ]
            },
            {
                "text": "Not closed; available to use.",
                "examples": [
                    "The office is open from eight to six."
                ]
            }
        ],
        "comparative": "opener",
        "superlative": "the openest",
        "transcription": "ˈoʊpən",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "closed"
        ]
    },
    {
        "id": "en_starter_shopping_005",
        "word": "closed",
        "emoji": "🔒",
        "form": "adjective",
        "subtext": "now closed, temporarily closed / closed for lunch / closed mind / closed door",
        "definitions": [
            {
                "text": "Not open; shut.",
                "examples": [
                    "The bank is closed on Sundays.",
                    "The bank is closed on Sunday."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "kloʊzd",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "open"
        ]
    },
    {
        "id": "en_starter_size_shape_011",
        "word": "large",
        "form": "adjective",
        "subtext": "a large city / a large company / a large amount",
        "definitions": [
            {
                "text": "Of more than average size or amount.",
                "examples": [
                    "Paris is a very large city."
                ]
            }
        ],
        "comparative": "larger",
        "superlative": "the largest",
        "emoji": "🐘",
        "transcription": "lɑrʤ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "small"
        ]
    },
    {
        "id": "en_starter_size_shape_012",
        "word": "little",
        "form": "adjective",
        "subtext": "a little bit / a little money / too little",
        "definitions": [
            {
                "text": "Small in size; a small amount of.",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "comparative": "smaller",
        "superlative": "the smallest",
        "emoji": "🐭",
        "transcription": "ˈlɪtəl",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "small"
        ]
    },
    {
        "id": "en_starter_size_shape_013",
        "word": "long",
        "form": "adjective",
        "subtext": "a long journey / a long day / a long time",
        "definitions": [
            {
                "text": "Of great length; lasting a long time.",
                "examples": [
                    "She has a long commute every day."
                ]
            }
        ],
        "comparative": "longer",
        "superlative": "the longest",
        "emoji": "📏",
        "transcription": "lɔŋ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "langaz"
        },
        "antonyms": [
            "short"
        ]
    },
    {
        "id": "en_starter_size_shape_014",
        "word": "high",
        "form": "adjective",
        "subtext": "high price / high rent / high quality",
        "definitions": [
            {
                "text": "Of greater than average height or level.",
                "examples": [
                    "The rent in this area is very high."
                ]
            }
        ],
        "comparative": "higher",
        "superlative": "the highest",
        "emoji": "🏔️",
        "transcription": "haɪ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "low"
        ]
    },
    {
        "id": "en_starter_size_shape_015",
        "word": "low",
        "form": "adjective",
        "subtext": "low price / low salary / low quality",
        "definitions": [
            {
                "text": "Of less than average height or level.",
                "examples": [
                    "The salary is too low for the hours involved."
                ]
            }
        ],
        "comparative": "lower",
        "superlative": "the lowest",
        "emoji": "⬇️",
        "transcription": "loʊ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "high"
        ]
    },
    {
        "id": "en_starter_size_shape_016",
        "word": "full",
        "form": "adjective",
        "subtext": "full time / a full day / full of people",
        "definitions": [
            {
                "text": "Containing as much as possible; complete.",
                "examples": [
                    "I feel full after that lunch."
                ]
            }
        ],
        "comparative": "fuller",
        "superlative": "the fullest",
        "emoji": "🥛",
        "transcription": "fʊl",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "empty"
        ]
    },
    {
        "id": "en_starter_size_shape_017",
        "word": "empty",
        "form": "adjective",
        "subtext": "an empty flat / an empty room / nearly empty",
        "definitions": [
            {
                "text": "Containing nothing; with no people.",
                "examples": [
                    "The office is empty at weekends."
                ]
            }
        ],
        "comparative": "emptier",
        "superlative": "the emptiest",
        "emoji": "🫙",
        "transcription": "ˈɛmti",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "full"
        ]
    },
    {
        "id": "en_starter_nature_013",
        "word": "warm",
        "form": "adjective",
        "subtext": "warm weather / a warm welcome / keep warm",
        "definitions": [
            {
                "text": "Slightly hot; pleasantly heated.",
                "examples": [
                    "The office is warm and comfortable."
                ]
            }
        ],
        "comparative": "warmer",
        "superlative": "the warmest",
        "emoji": "☀️",
        "transcription": "wɔrm",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "cool"
        ]
    },
    {
        "id": "en_starter_nature_014",
        "word": "cool",
        "form": "adjective",
        "subtext": "cool weather / a cool drink / stay cool",
        "definitions": [
            {
                "text": "Slightly cold; pleasantly low temperature.",
                "examples": [
                    "She prefers cool weather for working."
                ]
            }
        ],
        "comparative": "cooler",
        "superlative": "the coolest",
        "emoji": "🌬️",
        "transcription": "kul",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "warm"
        ]
    },
    {
        "id": "en_starter_nature_015",
        "word": "wet",
        "form": "adjective",
        "subtext": "wet weather / wet clothes / get wet",
        "definitions": [
            {
                "text": "Covered with water or liquid.",
                "examples": [
                    "His jacket is wet from the rain."
                ]
            }
        ],
        "comparative": "wetter",
        "superlative": "the wettest",
        "emoji": "💦",
        "transcription": "wɛt",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "dry"
        ]
    },
    {
        "id": "en_starter_nature_016",
        "word": "dry",
        "form": "adjective",
        "subtext": "dry weather / dry skin / keep dry",
        "definitions": [
            {
                "text": "Without water or liquid; not wet.",
                "examples": [
                    "The storage room must stay dry."
                ]
            }
        ],
        "comparative": "dryer",
        "superlative": "the dryest",
        "emoji": "🏜️",
        "transcription": "draɪ",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "wet"
        ]
    },
    {
        "id": "en_starter_household_tasks_002",
        "word": "dirty",
        "form": "adjective",
        "subtext": "dirty hands / dirty clothes / get dirty",
        "definitions": [
            {
                "text": "Covered in dirt or impurities.",
                "examples": [
                    "His hands are dirty after fixing the car."
                ]
            }
        ],
        "comparative": "dirtier",
        "superlative": "the dirtiest",
        "emoji": "💩",
        "transcription": "ˈdərti",
        "synonyms": [
            "messy"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "clean"
        ]
    },
    {
        "id": "en_starter_size_shape_018",
        "word": "hard",
        "form": "adjective",
        "subtext": "hard work / a hard decision / too hard",
        "synonyms": [
            "firm",
            "solid",
            "difficult"
        ],
        "definitions": [
            {
                "text": "Firm and solid; difficult.",
                "examples": [
                    "The chair is very hard and uncomfortable."
                ]
            }
        ],
        "comparative": "harder",
        "superlative": "the hardest",
        "emoji": "🧱",
        "transcription": "hɑrd",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "soft"
        ]
    },
    {
        "id": "en_starter_size_shape_019",
        "word": "soft",
        "form": "adjective",
        "subtext": "soft light / soft music / soft skills",
        "synonyms": [
            "gentle",
            "smooth"
        ],
        "definitions": [
            {
                "text": "Not hard; gentle to the touch.",
                "examples": [
                    "The sofa is very soft and comfortable."
                ]
            }
        ],
        "comparative": "softer",
        "superlative": "the softest",
        "emoji": "☁️",
        "transcription": "sɔft",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "hard"
        ]
    },
    {
        "id": "en_starter_size_shape_020",
        "word": "heavy",
        "form": "adjective",
        "subtext": "heavy traffic / heavy rain / too heavy",
        "synonyms": [
            "weighty"
        ],
        "definitions": [
            {
                "text": "Of great weight; difficult to carry.",
                "examples": [
                    "The bag is very heavy with all those files."
                ]
            }
        ],
        "comparative": "heavier",
        "superlative": "the heaviest",
        "emoji": "🏋️",
        "transcription": "ˈhɛvi",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "light"
        ]
    },
    {
        "id": "en_starter_size_shape_021",
        "word": "light",
        "form": "adjective",
        "subtext": "light rain / light traffic / a light meal",
        "synonyms": [
            "not heavy",
            "pale"
        ],
        "definitions": [
            {
                "text": "Not heavy; pale in colour.",
                "examples": [
                    "She carries a light bag to work every day."
                ]
            }
        ],
        "comparative": "lighter",
        "superlative": "the lightest",
        "emoji": "🪶",
        "transcription": "laɪt",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "heavy"
        ]
    },
    {
        "id": "en_starter_colours_008",
        "word": "brown",
        "form": "adjective",
        "subtext": "dark brown / light brown / brown bread",
        "definitions": [
            {
                "text": "Having the colour of wood or earth.",
                "examples": [
                    "She has brown eyes and dark hair."
                ]
            }
        ],
        "comparative": "browner",
        "superlative": "the brownest",
        "emoji": "🤎",
        "transcription": "braʊn",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "antonyms": [
            "grey"
        ]
    },
    {
        "id": "en_starter_colours_009",
        "word": "grey",
        "form": "adjective",
        "subtext": "grey area / grey sky / pale grey",
        "definitions": [
            {
                "text": "Having a colour between black and white.",
                "examples": [
                    "He has grey hair and a kind face."
                ]
            }
        ],
        "comparative": "greyer",
        "superlative": "the greyest",
        "emoji": "🩶",
        "transcription": "greɪ",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "antonyms": [
            "brown"
        ]
    },
    {
        "id": "en_starter_colours_010",
        "word": "pink",
        "form": "adjective",
        "subtext": "light pink / bright pink / hot pink",
        "definitions": [
            {
                "text": "Having a pale red colour.",
                "examples": [
                    "She prefers pink to red."
                ]
            }
        ],
        "comparative": "pinker",
        "superlative": "the pinkest",
        "emoji": "🩷",
        "transcription": "pɪŋk",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "antonyms": [
            "green"
        ]
    },
    {
        "id": "en_starter_colours_011",
        "word": "orange",
        "form": "adjective",
        "subtext": "bright orange / dark orange / orange light",
        "definitions": [
            {
                "text": "Having the colour of an orange fruit.",
                "examples": [
                    "He bought an orange jacket."
                ]
            }
        ],
        "comparative": "more orange",
        "superlative": "the most orange",
        "emoji": "🧡",
        "transcription": "ˈɔrɪnʤ",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "fruit",
        "antonyms": [
            "blue"
        ]
    },
    {
        "id": "en_starter_describing_013",
        "word": "great",
        "form": "adjective",
        "subtext": "a great idea / a great opportunity / great value",
        "synonyms": [
            "excellent",
            "big"
        ],
        "definitions": [
            {
                "text": "Extremely good; large in amount.",
                "examples": [
                    "She is a great manager."
                ]
            }
        ],
        "comparative": "greater",
        "superlative": "the greatest",
        "emoji": "🌟",
        "transcription": "greɪt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "good"
        ]
    },
    {
        "id": "en_starter_describing_014",
        "word": "nice",
        "form": "adjective",
        "subtext": "a nice day / a nice place / a nice person",
        "synonyms": [
            "pleasant",
            "kind"
        ],
        "definitions": [
            {
                "text": "Pleasant or kind.",
                "examples": [
                    "The new office is very nice."
                ]
            }
        ],
        "comparative": "nicer",
        "superlative": "the nicest",
        "emoji": "😊",
        "transcription": "nis",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "nasty"
        ]
    },
    {
        "id": "en_starter_describing_015",
        "word": "wonderful",
        "form": "adjective",
        "subtext": "a wonderful opportunity / a wonderful time",
        "synonyms": [
            "amazing",
            "great"
        ],
        "definitions": [
            {
                "text": "Extremely good; causing delight.",
                "examples": [
                    "They had a wonderful team."
                ]
            }
        ],
        "comparative": "more wonderful",
        "superlative": "the most wonderful",
        "emoji": "🌈",
        "transcription": "ˈwəndərfəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "awful"
        ]
    },
    {
        "id": "en_starter_describing_016",
        "word": "terrible",
        "form": "adjective",
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "synonyms": [
            "awful",
            "very bad"
        ],
        "definitions": [
            {
                "text": "Extremely bad.",
                "examples": [
                    "The traffic this morning was terrible."
                ]
            }
        ],
        "comparative": "more terrible",
        "superlative": "the most terrible",
        "emoji": "🤮",
        "transcription": "ˈtɛrəbəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "bad"
        ]
    },
    {
        "id": "en_starter_describing_017",
        "word": "awful",
        "form": "adjective",
        "subtext": "awful weather / awful news / simply awful",
        "synonyms": [
            "terrible",
            "very bad"
        ],
        "definitions": [
            {
                "text": "Very bad or unpleasant.",
                "examples": [
                    "The noise in the open office is awful."
                ]
            }
        ],
        "comparative": "more awful",
        "superlative": "the most awful",
        "emoji": "💩",
        "transcription": "ˈɔfəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "wonderful"
        ]
    },
    {
        "id": "en_starter_describing_018",
        "word": "amazing",
        "form": "adjective",
        "subtext": "an amazing result / an amazing offer / truly amazing",
        "synonyms": [
            "wonderful",
            "fantastic"
        ],
        "definitions": [
            {
                "text": "Causing great surprise or admiration.",
                "examples": [
                    "She gave an amazing presentation."
                ]
            }
        ],
        "comparative": "more amazing",
        "superlative": "the most amazing",
        "emoji": "🤩",
        "transcription": "əˈmeɪzɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "ordinary"
        ]
    },
    {
        "id": "en_starter_describing_019",
        "word": "fantastic",
        "form": "adjective",
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
        "synonyms": [
            "excellent",
            "great"
        ],
        "definitions": [
            {
                "text": "Extremely good.",
                "examples": [
                    "The new system works in a fantastic way."
                ]
            }
        ],
        "comparative": "more fantastic",
        "superlative": "the most fantastic",
        "emoji": "🔥",
        "transcription": "fænˈtæstɪk",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "good"
        ]
    },
    {
        "id": "en_starter_emotions_007",
        "word": "sad",
        "form": "adjective",
        "subtext": "feel sad / a sad situation / deeply sad",
        "synonyms": [
            "unhappy",
            "miserable",
            "gloomy"
        ],
        "definitions": [
            {
                "text": "Feeling unhappy or sorrowful.",
                "examples": [
                    "He was sad to leave the company."
                ]
            }
        ],
        "comparative": "sadder",
        "superlative": "the saddest",
        "emoji": "😢",
        "transcription": "sæd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "happy"
        ]
    },
    {
        "id": "en_starter_emotions_008",
        "word": "hungry",
        "form": "adjective",
        "subtext": "feel hungry / very hungry / go hungry",
        "synonyms": [
            "starving",
            "famished"
        ],
        "definitions": [
            {
                "text": "Needing food.",
                "examples": [
                    "I am hungry — it is already two o'clock."
                ]
            }
        ],
        "comparative": "hungrier",
        "superlative": "the hungriest",
        "emoji": "🍔",
        "transcription": "ˈhəŋgri",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "full"
        ]
    },
    {
        "id": "en_starter_emotions_009",
        "word": "angry",
        "form": "adjective",
        "subtext": "feel angry / angry with someone / very angry",
        "synonyms": [
            "mad",
            "furious",
            "annoyed"
        ],
        "definitions": [
            {
                "text": "Feeling strong displeasure.",
                "examples": [
                    "She was angry about the decision."
                ]
            }
        ],
        "comparative": "angrier",
        "superlative": "the angriest",
        "emoji": "😠",
        "transcription": "ˈæŋgri",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "calm"
        ]
    },
    {
        "id": "en_starter_emotions_010",
        "word": "bored",
        "form": "adjective",
        "subtext": "feel bored / bored with / easily bored",
        "synonyms": [
            "uninterested",
            "weary"
        ],
        "definitions": [
            {
                "text": "Feeling uninterested or restless.",
                "examples": [
                    "He feels bored in long meetings."
                ]
            }
        ],
        "comparative": "more bored",
        "superlative": "the most bored",
        "emoji": "😴",
        "transcription": "bɔrd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "interesting"
        ]
    },
    {
        "id": "en_starter_emotions_011",
        "word": "excited",
        "form": "adjective",
        "subtext": "feel excited / excited about / very excited",
        "definitions": [
            {
                "text": "Feeling enthusiasm and eagerness.",
                "examples": [
                    "She is excited about her new job."
                ]
            }
        ],
        "comparative": "more excited",
        "superlative": "the most excited",
        "emoji": "🤩",
        "transcription": "ɪkˈsaɪtɪd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "bored"
        ]
    },
    {
        "id": "en_starter_emotions_012",
        "word": "afraid",
        "form": "adjective",
        "subtext": "afraid of / feel afraid / deeply afraid",
        "synonyms": [
            "scared",
            "frightened",
            "terrified"
        ],
        "definitions": [
            {
                "text": "Feeling fear.",
                "examples": [
                    "He is afraid of making mistakes."
                ]
            }
        ],
        "comparative": "more afraid",
        "superlative": "the most afraid",
        "emoji": "😨",
        "transcription": "əˈfreɪd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "brave"
        ]
    },
    {
        "id": "en_starter_emotions_013",
        "word": "sorry",
        "form": "adjective",
        "subtext": "feel sorry / sorry for / sorry about",
        "definitions": [
            {
                "text": "Feeling regret or sadness.",
                "examples": [
                    "She is sorry for the delay."
                ]
            }
        ],
        "comparative": "sorrier",
        "superlative": "the sorriest",
        "emoji": "🙏",
        "transcription": "ˈsɑri",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "unapologetic"
        ]
    },
    {
        "id": "en_starter_describing_020",
        "word": "right",
        "form": "adjective",
        "subtext": "right hand / right side / absolutely right",
        "definitions": [
            {
                "text": "Correct; suitable.",
                "examples": [
                    "Is this the right office?"
                ]
            },
            {
                "text": "On or towards the side of your body that is to the east when you face north.",
                "examples": [
                    "Use your right hand."
                ]
            }
        ],
        "comparative": "more right",
        "superlative": "the most right",
        "emoji": "✅",
        "transcription": "raɪt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "wrong"
        ]
    },
    {
        "id": "en_starter_describing_021",
        "word": "left",
        "form": "adjective",
        "subtext": "left hand / left side",
        "definitions": [
            {
                "text": "On or towards the side of your body that is to the west when you face north.",
                "examples": [
                    "Turn left at the station.",
                    "She writes with her left hand."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "emoji": "⬅️",
        "transcription": "lɛft",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "right"
        ]
    },
    {
        "id": "en_starter_describing_022",
        "word": "wrong",
        "form": "adjective",
        "subtext": "wrong answer / go wrong / completely wrong",
        "synonyms": [
            "incorrect"
        ],
        "definitions": [
            {
                "text": "Not correct; not suitable.",
                "examples": [
                    "That was the wrong decision."
                ]
            }
        ],
        "comparative": "more wrong",
        "superlative": "the most wrong",
        "emoji": "❌",
        "transcription": "rɔŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "right"
        ]
    },
    {
        "id": "en_starter_size_shape_022",
        "word": "new",
        "form": "adjective",
        "subtext": "new job / brand new / completely new",
        "synonyms": [
            "modern",
            "recently made"
        ],
        "definitions": [
            {
                "text": "Not existing before; recently made.",
                "examples": [
                    "She has a new job starting in March."
                ]
            }
        ],
        "comparative": "newer",
        "superlative": "the newest",
        "emoji": "🆕",
        "transcription": "nu",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "neujaz"
        },
        "antonyms": [
            "old"
        ]
    },
    {
        "id": "en_starter_describing_023",
        "word": "different",
        "form": "adjective",
        "subtext": "completely different / very different / different from",
        "synonyms": [
            "not the same"
        ],
        "definitions": [
            {
                "text": "Not the same as another.",
                "examples": [
                    "This job is very different from my last one."
                ]
            }
        ],
        "comparative": "more different",
        "superlative": "the most different",
        "emoji": "🌓",
        "transcription": "ˈdɪfərənt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "same"
        ]
    },
    {
        "id": "en_starter_describing_024",
        "word": "same",
        "form": "adjective",
        "subtext": "the same as / exactly the same / same time",
        "synonyms": [
            "identical"
        ],
        "definitions": [
            {
                "text": "Not different; identical.",
                "examples": [
                    "They earn the same salary."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "emoji": "👯",
        "transcription": "seɪm",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "other"
        ]
    },
    {
        "id": "en_starter_size_shape_023",
        "word": "fast",
        "form": "adjective",
        "subtext": "fast food / fast train / very fast",
        "synonyms": [
            "quick",
            "rapid"
        ],
        "definitions": [
            {
                "text": "Moving or happening quickly.",
                "examples": [
                    "The train to work is fast and reliable."
                ]
            }
        ],
        "comparative": "faster",
        "superlative": "the fastest",
        "emoji": "🏎️",
        "transcription": "fæst",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "slow"
        ]
    },
    {
        "id": "en_starter_size_shape_024",
        "word": "slow",
        "form": "adjective",
        "subtext": "slow progress / slow internet / very slow",
        "synonyms": [
            "leisurely"
        ],
        "definitions": [
            {
                "text": "Not fast; taking a long time.",
                "examples": [
                    "The new system is very slow."
                ]
            }
        ],
        "comparative": "slower",
        "superlative": "the slowest",
        "emoji": "🐢",
        "transcription": "sloʊ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "fast"
        ]
    },
    {
        "id": "en_starter_describing_025",
        "word": "quiet",
        "form": "adjective",
        "subtext": "quiet area / keep quiet / nice and quiet",
        "synonyms": [
            "silent",
            "peaceful"
        ],
        "definitions": [
            {
                "text": "Making little or no noise; peaceful.",
                "examples": [
                    "The office is quiet at lunchtime."
                ]
            }
        ],
        "comparative": "quieter",
        "superlative": "the quietest",
        "emoji": "🤫",
        "transcription": "kwaɪət",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "loud"
        ]
    },
    {
        "id": "en_starter_describing_026",
        "word": "loud",
        "form": "adjective",
        "subtext": "loud noise / too loud / a loud voice",
        "synonyms": [
            "noisy"
        ],
        "definitions": [
            {
                "text": "Making a lot of noise.",
                "examples": [
                    "The open-plan office is too loud."
                ]
            }
        ],
        "comparative": "louder",
        "superlative": "the loudest",
        "emoji": "📢",
        "transcription": "laʊd",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "quiet"
        ]
    },
    {
        "id": "en_starter_places_002",
        "word": "safe",
        "form": "adjective",
        "subtext": "safe area / safe to do / feel safe",
        "synonyms": [
            "secure"
        ],
        "definitions": [
            {
                "text": "Not dangerous; protected from harm.",
                "examples": [
                    "This neighbourhood is very safe."
                ]
            }
        ],
        "comparative": "safer",
        "superlative": "the safest",
        "emoji": "🛡️",
        "transcription": "seɪf",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "antonyms": [
            "dangerous"
        ]
    },
    {
        "id": "en_starter_places_003",
        "word": "dangerous",
        "form": "adjective",
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "synonyms": [
            "risky"
        ],
        "definitions": [
            {
                "text": "Likely to cause harm.",
                "examples": [
                    "The commute on that road is dangerous."
                ]
            }
        ],
        "comparative": "more dangerous",
        "superlative": "the most dangerous",
        "emoji": "🧨",
        "transcription": "ˈdeɪnʤərəs",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "antonyms": [
            "safe"
        ]
    },
    {
        "id": "en_starter_emotions_014",
        "word": "unhappy",
        "form": "adjective",
        "subtext": "feel unhappy / very unhappy / unhappy about",
        "synonyms": [
            "sad",
            "miserable"
        ],
        "definitions": [
            {
                "text": "Not feeling pleased; dissatisfied.",
                "examples": [
                    "He is unhappy with his current salary."
                ]
            }
        ],
        "comparative": "unhappier",
        "superlative": "the unhappiest",
        "emoji": "😢",
        "transcription": "ənˈhæpi",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "happy"
        ]
    },
    {
        "id": "en_starter_emotions_015",
        "word": "nervous",
        "form": "adjective",
        "subtext": "feel nervous / nervous about / very nervous",
        "synonyms": [
            "anxious",
            "worried"
        ],
        "definitions": [
            {
                "text": "Feeling anxious or uneasy.",
                "examples": [
                    "He was nervous before the job interview."
                ]
            }
        ],
        "comparative": "more nervous",
        "superlative": "the most nervous",
        "emoji": "😟",
        "transcription": "ˈnərvəs",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "confident"
        ]
    },
    {
        "id": "en_starter_describing_027",
        "word": "proud",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling pleased about an achievement.",
                "examples": [
                    "He was proud to get his first promotion."
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of",
        "synonyms": [
            "pleased",
            "satisfied"
        ],
        "comparative": "prouder",
        "superlative": "the proudest",
        "emoji": "🤳",
        "transcription": "praʊd",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "ashamed"
        ]
    },
    {
        "id": "en_starter_emotions_016",
        "word": "scared",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling fear about something.",
                "examples": [
                    "She was scared about giving the presentation."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared",
        "synonyms": [
            "afraid",
            "frightened"
        ],
        "comparative": "more scared",
        "superlative": "the most scared",
        "emoji": "😨",
        "transcription": "skɛrd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "brave"
        ]
    },
    {
        "id": "en_starter_emotions_017",
        "word": "surprised",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling shock at something unexpected.",
                "examples": [
                    "He was surprised to get a pay rise."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "synonyms": [
            "amazed",
            "astonished"
        ],
        "comparative": "more surprised",
        "superlative": "the most surprised",
        "emoji": "😲",
        "transcription": "səˈpraɪzd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "unmoved"
        ]
    },
    {
        "id": "en_starter_emotions_018",
        "word": "disappointed",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling sad because something was not as good as expected.",
                "examples": [
                    "She was disappointed not to get the job."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "synonyms": [
            "sad",
            "let down"
        ],
        "comparative": "more disappointed",
        "superlative": "the most disappointed",
        "emoji": "😞",
        "transcription": "ˌdɪsəˈpɔɪnɪd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "satisfied"
        ]
    },
    {
        "id": "en_starter_describing_028",
        "word": "beautiful",
        "form": "adjective",
        "definitions": [
            {
                "text": "Attractive and pleasing to look at.",
                "examples": [
                    "She has a beautiful, bright office with city views."
                ]
            }
        ],
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
        "comparative": "more beautiful",
        "superlative": "the most beautiful",
        "emoji": "✨",
        "transcription": "ˈbjutəfəl",
        "synonyms": [
            "pretty",
            "lovely"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "ugly"
        ]
    },
    {
        "id": "en_starter_describing_029",
        "word": "pretty",
        "form": "adjective",
        "definitions": [
            {
                "text": "Pleasant to look at; quite attractive.",
                "examples": [
                    "The new meeting room is very pretty."
                ]
            }
        ],
        "subtext": "pretty good / a pretty place / quite pretty",
        "comparative": "prettier",
        "superlative": "the prettiest",
        "emoji": "🌸",
        "transcription": "ˈprɪti",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "ugly"
        ]
    },
    {
        "id": "en_starter_describing_030",
        "word": "strong",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having great physical or mental power.",
                "examples": [
                    "She is a strong leader and very respected."
                ]
            }
        ],
        "subtext": "strong coffee / strong opinion / very strong",
        "comparative": "stronger",
        "superlative": "the strongest",
        "emoji": "🏋️",
        "transcription": "strɔŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "weak"
        ]
    },
    {
        "id": "en_starter_describing_031",
        "word": "weak",
        "form": "adjective",
        "definitions": [
            {
                "text": "Lacking strength or power.",
                "examples": [
                    "The signal is weak on the top floor."
                ]
            }
        ],
        "subtext": "weak connection / a weak argument / very weak",
        "comparative": "weaker",
        "superlative": "the weakest",
        "emoji": "🥀",
        "transcription": "wik",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "strong"
        ]
    },
    {
        "id": "en_starter_illnesses_symptoms_002",
        "word": "fit",
        "form": "adjective",
        "definitions": [
            {
                "text": "In good physical condition through exercise.",
                "examples": [
                    "She keeps fit by cycling to work every day."
                ]
            }
        ],
        "subtext": "physically fit / stay fit / keep fit",
        "synonyms": [
            "healthy",
            "in shape"
        ],
        "comparative": "fitter",
        "superlative": "the fittest",
        "emoji": "🏋️",
        "transcription": "fɪt",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "unfit"
        ]
    },
    {
        "id": "en_starter_illnesses_symptoms_003",
        "word": "unfit",
        "emoji": "🛋️",
        "form": "adjective",
        "subtext": "unhealthy, out of shape / feel unfit",
        "definitions": [
            {
                "text": "Not in good physical condition.",
                "examples": [
                    "I feel very unfit because I don't exercise."
                ]
            }
        ],
        "comparative": "more unfit",
        "superlative": "the most unfit",
        "transcription": "ənˈfɪt",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "fit"
        ]
    },
    {
        "id": "en_starter_describing_032",
        "word": "perfect",
        "form": "adjective",
        "definitions": [
            {
                "text": "Without any faults; completely correct.",
                "examples": [
                    "The timing of the launch was perfect."
                ]
            }
        ],
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
        "comparative": "more perfect",
        "superlative": "the most perfect",
        "emoji": "💯",
        "transcription": "ˈpərˌfɪkt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "imperfect"
        ]
    },
    {
        "id": "en_starter_describing_033",
        "word": "correct",
        "form": "adjective",
        "definitions": [
            {
                "text": "True or right; without errors.",
                "examples": [
                    "Please check the figures are correct."
                ]
            }
        ],
        "subtext": "correct answer / the correct way / completely correct",
        "comparative": "more correct",
        "superlative": "the most correct",
        "emoji": "✅",
        "transcription": "kərˈɛkt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "incorrect"
        ]
    },
    {
        "id": "en_starter_describing_034",
        "word": "interesting",
        "form": "adjective",
        "definitions": [
            {
                "text": "Attracting attention; worth knowing about.",
                "examples": [
                    "The new proposal is very interesting."
                ]
            }
        ],
        "subtext": "find interesting / very interesting / an interesting idea",
        "comparative": "more interesting",
        "superlative": "the most interesting",
        "emoji": "🧐",
        "transcription": "ˈɪntəˌrɛstɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "boring"
        ]
    },
    {
        "id": "en_starter_describing_035",
        "word": "boring",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not interesting; dull.",
                "examples": [
                    "The training session was very boring."
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": "more boring",
        "superlative": "the most boring",
        "emoji": "😴",
        "transcription": "ˈbɔrɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "interesting"
        ]
    },
    {
        "id": "en_starter_describing_036",
        "word": "special",
        "form": "adjective",
        "definitions": [
            {
                "text": "Different from what is usual; particularly important.",
                "examples": [
                    "She has a special talent for problem-solving."
                ]
            }
        ],
        "subtext": "a special offer / special occasion / very special",
        "comparative": "more special",
        "superlative": "the most special",
        "emoji": "💎",
        "transcription": "ˈspɛʃəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "ordinary"
        ]
    },
    {
        "id": "en_starter_describing_037",
        "word": "friendly",
        "form": "adjective",
        "definitions": [
            {
                "text": "Kind and pleasant; easy to talk to.",
                "examples": [
                    "The new manager is very friendly and approachable."
                ]
            }
        ],
        "subtext": "very friendly / a friendly face / friendly atmosphere",
        "synonyms": [
            "kind",
            "pleasant"
        ],
        "comparative": "more friendly",
        "superlative": "the most friendly",
        "emoji": "👋",
        "transcription": "ˈfrɛndli",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "unfriendly"
        ]
    },
    {
        "id": "en_starter_describing_038",
        "word": "kind",
        "form": "adjective",
        "definitions": [
            {
                "text": "Caring and generous to others.",
                "examples": [
                    "She is kind to everyone in the office."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person",
        "synonyms": [
            "caring",
            "generous"
        ],
        "comparative": "kinder",
        "superlative": "the kindest",
        "emoji": "🤝",
        "transcription": "kaɪnd",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "unkind"
        ]
    },
    {
        "id": "en_starter_describing_039",
        "word": "unkind",
        "emoji": "🥀",
        "form": "adjective",
        "subtext": "unkind words / be unkind",
        "synonyms": [
            "mean",
            "cruel"
        ],
        "definitions": [
            {
                "text": "Not kind; mean.",
                "examples": [
                    "It was unkind to say those things."
                ]
            }
        ],
        "comparative": "more unkind",
        "superlative": "the most unkind",
        "transcription": "ənˈkaɪnd",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "kind"
        ]
    },
    {
        "id": "en_starter_describing_040",
        "word": "funny",
        "form": "adjective",
        "definitions": [
            {
                "text": "Making people laugh; humorous.",
                "examples": [
                    "He has a funny way of explaining complex ideas."
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny",
        "synonyms": [
            "humorous",
            "amusing"
        ],
        "comparative": "funnier",
        "superlative": "the funniest",
        "emoji": "😂",
        "transcription": "ˈfəni",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "serious"
        ]
    },
    {
        "id": "en_starter_describing_041",
        "word": "clever",
        "form": "adjective",
        "definitions": [
            {
                "text": "Intelligent; quick to understand.",
                "examples": [
                    "She is a clever negotiator."
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough",
        "synonyms": [
            "intelligent",
            "smart"
        ],
        "comparative": "cleverer",
        "superlative": "the cleverest",
        "emoji": "🎓",
        "transcription": "ˈklɛvər",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "stupid"
        ]
    },
    {
        "id": "en_starter_describing_042",
        "word": "polite",
        "form": "adjective",
        "definitions": [
            {
                "text": "Behaving in a respectful and courteous way.",
                "examples": [
                    "He is always polite with clients."
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough",
        "synonyms": [
            "respectful"
        ],
        "comparative": "more polite",
        "superlative": "the most polite",
        "emoji": "🙏",
        "transcription": "pəˈlaɪt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "rude"
        ]
    },
    {
        "id": "en_starter_describing_043",
        "word": "rude",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not polite; showing a lack of respect.",
                "examples": [
                    "That email was quite rude and unprofessional."
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude",
        "synonyms": [
            "impolite",
            "disrespectful"
        ],
        "comparative": "ruder",
        "superlative": "the rudest",
        "emoji": "😛",
        "transcription": "rud",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "polite"
        ]
    },
    {
        "id": "en_starter_describing_044",
        "word": "lazy",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not willing to work or use effort.",
                "examples": [
                    "He has a reputation for being lazy with follow-ups."
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy",
        "synonyms": [
            "idle"
        ],
        "comparative": "lazier",
        "superlative": "the laziest",
        "emoji": "🛋️",
        "transcription": "ˈleɪzi",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "hardworking"
        ]
    },
    {
        "id": "en_starter_describing_045",
        "word": "honest",
        "form": "adjective",
        "definitions": [
            {
                "text": "Telling the truth; not deceiving.",
                "examples": [
                    "She is known for being completely honest with clients."
                ]
            }
        ],
        "subtext": "very honest / brutally honest / completely honest",
        "synonyms": [
            "truthful"
        ],
        "comparative": "more honest",
        "superlative": "the most honest",
        "emoji": "⚖️",
        "transcription": "ˈɑnəst",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "dishonest"
        ]
    },
    {
        "id": "en_starter_describing_046",
        "word": "noisy",
        "form": "adjective",
        "definitions": [
            {
                "text": "Making a lot of sound; loud.",
                "examples": [
                    "The open plan office is very noisy."
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy",
        "synonyms": [
            "loud"
        ],
        "comparative": "noisier",
        "superlative": "the noisiest",
        "emoji": "📢",
        "transcription": "ˈnɔɪzi",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "quiet"
        ]
    },
    {
        "id": "en_starter_size_shape_025",
        "word": "round",
        "emoji": "⭕",
        "form": "adjective",
        "subtext": "a round table / round shape",
        "synonyms": [
            "circular"
        ],
        "definitions": [
            {
                "text": "Shaped like a circle.",
                "examples": [
                    "The table is round."
                ]
            }
        ],
        "comparative": "rounder",
        "superlative": "the roundest",
        "transcription": "raʊnd",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "oval"
        ]
    },
    {
        "id": "en_starter_size_shape_026",
        "word": "square",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "a square box / square shape",
        "synonyms": [
            "four-sided"
        ],
        "definitions": [
            {
                "text": "Having four equal sides and four 90-degree angles.",
                "examples": [
                    "The box is square."
                ]
            }
        ],
        "comparative": "squarer",
        "superlative": "the squarest",
        "transcription": "skwɛr",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "triangular"
        ]
    },
    {
        "id": "en_starter_describing_047",
        "word": "helpful",
        "emoji": "🤝",
        "form": "adjective",
        "subtext": "very helpful / a helpful person",
        "synonyms": [
            "useful",
            "kind"
        ],
        "definitions": [
            {
                "text": "Willing to help other people.",
                "examples": [
                    "My colleagues are very helpful."
                ]
            }
        ],
        "comparative": "more helpful",
        "superlative": "the most helpful",
        "transcription": "ˈhɛlpfəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "unhelpful"
        ]
    },
    {
        "id": "en_starter_describing_048",
        "word": "unhelpful",
        "emoji": "😠",
        "form": "adjective",
        "subtext": "unhelpful advice / very unhelpful",
        "synonyms": [
            "useless"
        ],
        "definitions": [
            {
                "text": "Not helping in a situation.",
                "examples": [
                    "The staff were quite unhelpful when I asked for directions."
                ]
            }
        ],
        "comparative": "more unhelpful",
        "superlative": "the most unhelpful",
        "transcription": "ənˈhɛlpfəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "helpful"
        ]
    },
    {
        "id": "en_starter_describing_049",
        "word": "patient",
        "emoji": "🧘",
        "form": "adjective",
        "subtext": "be patient / a patient teacher",
        "synonyms": [
            "calm",
            "tolerant"
        ],
        "definitions": [
            {
                "text": "Able to wait for a long time without becoming angry.",
                "examples": [
                    "You need to be patient with new students."
                ]
            }
        ],
        "comparative": "more patient",
        "superlative": "the most patient",
        "transcription": "ˈpeɪʃənt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "impatient"
        ]
    },
    {
        "id": "en_starter_describing_050",
        "word": "active",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "an active lifestyle / very active",
        "synonyms": [
            "energetic",
            "busy"
        ],
        "definitions": [
            {
                "text": "Doing a lot of things; busy.",
                "examples": [
                    "He is a very active person."
                ]
            }
        ],
        "comparative": "more active",
        "superlative": "the most active",
        "transcription": "ˈæktɪv",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "lazy"
        ]
    },
    {
        "id": "en_starter_describing_051",
        "word": "careful",
        "emoji": "⚠️",
        "form": "adjective",
        "subtext": "be careful / careful planning",
        "synonyms": [
            "cautious"
        ],
        "definitions": [
            {
                "text": "Giving a lot of attention to what you are doing so that you do not have an accident or make a mistake.",
                "examples": [
                    "Be careful when you drive."
                ]
            }
        ],
        "comparative": "more careful",
        "superlative": "the most careful",
        "transcription": "ˈkɛrfəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "careless"
        ]
    },
    {
        "id": "en_starter_describing_052",
        "word": "creative",
        "emoji": "🎨",
        "form": "adjective",
        "subtext": "very creative / creative ideas",
        "synonyms": [
            "imaginative",
            "artistic"
        ],
        "definitions": [
            {
                "text": "Good at thinking of new ideas or making things.",
                "examples": [
                    "She is a very creative designer."
                ]
            }
        ],
        "comparative": "more creative",
        "superlative": "the most creative",
        "transcription": "kriˈeɪtɪv",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "unimaginative"
        ]
    },
    {
        "id": "en_starter_nature_017",
        "word": "cloudy",
        "emoji": "☁️",
        "form": "adjective",
        "subtext": "a cloudy sky / cloudy weather",
        "synonyms": [
            "overcast"
        ],
        "definitions": [
            {
                "text": "With many clouds in the sky.",
                "examples": [
                    "It is a cloudy day."
                ]
            }
        ],
        "comparative": "cloudier",
        "superlative": "the cloudiest",
        "transcription": "ˈklaʊdi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "sunny"
        ]
    },
    {
        "id": "en_starter_nature_018",
        "word": "windy",
        "emoji": "💨",
        "form": "adjective",
        "subtext": "a windy day / very windy",
        "synonyms": [
            "breezy"
        ],
        "definitions": [
            {
                "text": "With a lot of wind.",
                "examples": [
                    "It is very windy today."
                ]
            }
        ],
        "comparative": "windier",
        "superlative": "the windiest",
        "transcription": "ˈwɪndi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "calm"
        ]
    },
    {
        "id": "en_starter_nature_019",
        "word": "snowy",
        "emoji": "❄️",
        "form": "adjective",
        "subtext": "snowy mountains / a snowy winter",
        "synonyms": [
            "covered in snow"
        ],
        "definitions": [
            {
                "text": "With a lot of snow.",
                "examples": [
                    "We have snowy weather in January."
                ]
            }
        ],
        "comparative": "snowier",
        "superlative": "the snowiest",
        "transcription": "snoʊi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "sunny"
        ]
    },
    {
        "id": "en_starter_nature_020",
        "word": "foggy",
        "emoji": "🌫️",
        "form": "adjective",
        "subtext": "foggy morning / very foggy",
        "synonyms": [
            "misty"
        ],
        "definitions": [
            {
                "text": "With a lot of fog; difficult to see.",
                "examples": [
                    "It is foggy this morning."
                ]
            }
        ],
        "comparative": "foggier",
        "superlative": "the foggiest",
        "transcription": "ˈfɑgi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "clear"
        ]
    },
    {
        "id": "en_starter_nature_021",
        "word": "stormy",
        "emoji": "⛈️",
        "form": "adjective",
        "subtext": "stormy weather / a stormy night",
        "synonyms": [
            "rough"
        ],
        "definitions": [
            {
                "text": "With a lot of rain and strong winds.",
                "examples": [
                    "It was a stormy night."
                ]
            }
        ],
        "comparative": "stormier",
        "superlative": "the stormiest",
        "transcription": "ˈstɔrmi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "calm"
        ]
    },
    {
        "id": "en_starter_body_001",
        "word": "blonde",
        "form": "adjective",
        "subtext": "blonde hair / a blonde woman",
        "synonyms": [
            "fair-haired"
        ],
        "definitions": [
            {
                "text": "Pale gold in color.",
                "examples": [
                    "She has blonde hair."
                ]
            }
        ],
        "comparative": "blonder",
        "superlative": "the blondest",
        "emoji": "👱‍♀️",
        "transcription": "blɑnd",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "brunette"
        ]
    },
    {
        "id": "en_starter_describing_053",
        "word": "smart",
        "form": "adjective",
        "subtext": "a smart student / smart clothes",
        "synonyms": [
            "intelligent",
            "clever"
        ],
        "definitions": [
            {
                "text": "Intelligent; clever.",
                "examples": [
                    "He is a smart student."
                ]
            }
        ],
        "comparative": "smarter",
        "superlative": "the smartest",
        "emoji": "🎓",
        "transcription": "smɑrt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "stupid"
        ]
    },
    {
        "id": "en_starter_describing_054",
        "word": "serious",
        "form": "adjective",
        "subtext": "a serious person / look serious",
        "synonyms": [
            "solemn",
            "sensible"
        ],
        "definitions": [
            {
                "text": "Thinking or acting in a careful and sensible way; not silly.",
                "examples": [
                    "He is a serious person."
                ]
            }
        ],
        "comparative": "more serious",
        "superlative": "the most serious",
        "emoji": "😐",
        "transcription": "ˈsɪriəs",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "funny"
        ]
    },
    {
        "id": "en_starter_body_002",
        "word": "ugly",
        "form": "adjective",
        "subtext": "ugly building / ugly duckling",
        "synonyms": [
            "unattractive"
        ],
        "definitions": [
            {
                "text": "Unpleasant to look at.",
                "examples": [
                    "It was an ugly building."
                ]
            }
        ],
        "comparative": "uglier",
        "superlative": "the ugliest",
        "emoji": "👹",
        "transcription": "ˈəgli",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "beautiful"
        ]
    },
    {
        "id": "en_starter_distance_001",
        "word": "near",
        "form": "adjective",
        "subtext": "near here / near the station",
        "synonyms": [
            "close"
        ],
        "definitions": [
            {
                "text": "Not far away in distance.",
                "examples": [
                    "The station is near the office."
                ]
            }
        ],
        "comparative": "nearer",
        "superlative": "the nearest",
        "emoji": "📍",
        "transcription": "nɪr",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "far"
        ]
    },
    {
        "id": "en_starter_distance_002",
        "word": "far",
        "form": "adjective",
        "subtext": "far away / far from",
        "synonyms": [
            "distant"
        ],
        "definitions": [
            {
                "text": "A long way away in distance.",
                "examples": [
                    "Is it far from here?"
                ]
            }
        ],
        "comparative": "farther",
        "superlative": "the farthest",
        "emoji": "🔭",
        "transcription": "fɑr",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "close"
        ]
    },
    {
        "id": "en_starter_money_payment_001",
        "word": "rich",
        "emoji": "💰",
        "form": "adjective",
        "subtext": "rich man / rich country / very rich",
        "synonyms": [
            "wealthy"
        ],
        "definitions": [
            {
                "text": "Having a lot of money.",
                "examples": [
                    "He is a very rich man."
                ]
            }
        ],
        "comparative": "richer",
        "superlative": "the richest",
        "transcription": "rɪʧ",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "poor"
        ]
    },
    {
        "id": "en_starter_money_payment_002",
        "word": "poor",
        "emoji": "🏚️",
        "form": "adjective",
        "subtext": "poor family / feel poor",
        "synonyms": [
            "broke",
            "impoverished"
        ],
        "definitions": [
            {
                "text": "Having very little money.",
                "examples": [
                    "They are poor but happy."
                ]
            }
        ],
        "comparative": "poorer",
        "superlative": "the poorest",
        "transcription": "pur",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "rich"
        ]
    },
    {
        "id": "en_starter_time_015",
        "word": "early",
        "emoji": "🌅",
        "form": "adjective",
        "subtext": "early morning / early riser",
        "synonyms": [
            "soon"
        ],
        "definitions": [
            {
                "text": "Happening or arriving before the usual or expected time.",
                "examples": [
                    "I had an early breakfast."
                ]
            }
        ],
        "comparative": "earlier",
        "superlative": "the earliest",
        "transcription": "ˈərli",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "late"
        ]
    },
    {
        "id": "en_starter_time_016",
        "word": "late",
        "emoji": "🌙",
        "form": "adjective",
        "subtext": "late night / too late",
        "synonyms": [
            "tardy"
        ],
        "definitions": [
            {
                "text": "Happening or arriving after the usual or expected time.",
                "examples": [
                    "I had a late dinner."
                ]
            }
        ],
        "comparative": "later",
        "superlative": "the latest",
        "transcription": "leɪt",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "early"
        ]
    },
    {
        "id": "en_starter_describing_055",
        "word": "hardworking",
        "emoji": "🐝",
        "form": "adjective",
        "subtext": "a hardworking student / very hardworking",
        "synonyms": [
            "diligent",
            "busy"
        ],
        "definitions": [
            {
                "text": "Putting a lot of effort into work.",
                "examples": [
                    "She is a very hardworking manager."
                ]
            }
        ],
        "comparative": "more hardworking",
        "superlative": "the most hardworking",
        "transcription": "ˈhɑrdˌwərkɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "lazy"
        ]
    },
    {
        "id": "en_starter_surprise_interest_001",
        "word": "exciting",
        "emoji": "🤩",
        "form": "adjective",
        "subtext": "an exciting trip / very exciting",
        "synonyms": [
            "thrilling",
            "interesting"
        ],
        "definitions": [
            {
                "text": "Making you feel very happy and enthusiastic.",
                "examples": [
                    "It was an exciting game."
                ]
            }
        ],
        "comparative": "more exciting",
        "superlative": "the most exciting",
        "transcription": "ɪkˈsaɪtɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "surprise_interest",
        "sub_theme": null,
        "antonyms": [
            "boring"
        ]
    },
    {
        "id": "en_starter_tastes_textures_001",
        "word": "delicious",
        "emoji": "😋",
        "form": "adjective",
        "subtext": "delicious meal / smell delicious",
        "synonyms": [
            "tasty",
            "yummy"
        ],
        "definitions": [
            {
                "text": "Having a very pleasant taste or smell.",
                "examples": [
                    "The food is delicious."
                ]
            }
        ],
        "comparative": "more delicious",
        "superlative": "the most delicious",
        "transcription": "dɪˈlɪʃəs",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "disgusting"
        ]
    },
    {
        "id": "en_starter_tastes_textures_002",
        "word": "sweet",
        "emoji": "🍬",
        "form": "adjective",
        "subtext": "sweet fruit / sweet tooth / very sweet",
        "synonyms": [
            "sugary"
        ],
        "definitions": [
            {
                "text": "Having a taste like sugar.",
                "examples": [
                    "I like sweet things."
                ]
            }
        ],
        "comparative": "sweeter",
        "superlative": "the sweetest",
        "transcription": "swit",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "bitter"
        ]
    },
    {
        "id": "en_starter_furniture_021",
        "word": "comfortable",
        "emoji": "🛋️",
        "form": "adjective",
        "subtext": "a comfortable chair / feel comfortable",
        "synonyms": [
            "relaxed",
            "cozy"
        ],
        "definitions": [
            {
                "text": "Making you feel physically relaxed, without any pain or without being too hot, cold, etc.",
                "examples": [
                    "This chair is very comfortable."
                ]
            }
        ],
        "comparative": "more comfortable",
        "superlative": "the most comfortable",
        "transcription": "ˈkəmfərtəbəl",
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "antonyms": [
            "uncomfortable"
        ]
    },
    {
        "id": "en_starter_furniture_022",
        "word": "uncomfortable",
        "emoji": "🪑",
        "form": "adjective",
        "subtext": "feel uncomfortable / uncomfortable chair",
        "synonyms": [
            "awkward",
            "painful"
        ],
        "definitions": [
            {
                "text": "Not comfortable; causing physical pain or feeling awkward.",
                "examples": [
                    "This chair is very uncomfortable."
                ]
            }
        ],
        "comparative": "more uncomfortable",
        "superlative": "the most uncomfortable",
        "transcription": "ənˈkəmfərtəbəl",
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "antonyms": [
            "comfortable"
        ]
    },
    {
        "id": "en_starter_describing_056",
        "word": "real",
        "emoji": "💎",
        "form": "adjective",
        "subtext": "a real person / is it real?",
        "synonyms": [
            "true",
            "authentic"
        ],
        "definitions": [
            {
                "text": "Actually existing or happening; not false.",
                "examples": [
                    "Is this a real diamond?"
                ]
            }
        ],
        "comparative": "more real",
        "superlative": "the most real",
        "transcription": "ril",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "fake"
        ]
    },
    {
        "id": "en_starter_describing_057",
        "word": "simple",
        "emoji": "✅",
        "form": "adjective",
        "subtext": "a simple question / nice and simple",
        "synonyms": [
            "easy",
            "basic"
        ],
        "definitions": [
            {
                "text": "Easy to understand or do; not complex.",
                "examples": [
                    "This is a simple problem."
                ]
            }
        ],
        "comparative": "simpler",
        "superlative": "the simplest",
        "transcription": "ˈsɪmpəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "complex"
        ]
    },
    {
        "id": "en_starter_plants_natural_world_001",
        "word": "natural",
        "emoji": "🌱",
        "form": "adjective",
        "subtext": "natural light / natural products",
        "synonyms": [
            "nature-made"
        ],
        "definitions": [
            {
                "text": "Existing in nature; not made or caused by people.",
                "examples": [
                    "I prefer natural products."
                ]
            }
        ],
        "comparative": "more natural",
        "superlative": "the most natural",
        "transcription": "ˈnæʧərəl",
        "lang": "en",
        "level": "starter",
        "theme": "plants_natural_world",
        "sub_theme": null,
        "antonyms": [
            "artificial"
        ]
    },
    {
        "id": "en_starter_describing_058",
        "word": "clear",
        "emoji": "💧",
        "form": "adjective",
        "subtext": "a clear sky",
        "synonyms": [
            "obvious",
            "transparent",
            "speak clearly"
        ],
        "definitions": [
            {
                "text": "Easy to see through; easy to understand.",
                "examples": [
                    "The water is very clear.",
                    "It is a clear day."
                ]
            }
        ],
        "comparative": "clearer",
        "superlative": "the clearest",
        "transcription": "klɪr",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "unclear"
        ]
    },
    {
        "id": "en_starter_describing_059",
        "word": "common",
        "emoji": "🔄",
        "form": "adjective",
        "subtext": "a common problem",
        "synonyms": [
            "usual",
            "frequent",
            "shared by all"
        ],
        "definitions": [
            {
                "text": "Happening often; shared by many people.",
                "examples": [
                    "It is a common mistake."
                ]
            }
        ],
        "comparative": "commoner",
        "superlative": "the commonest",
        "transcription": "ˈkɑmən",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "rare"
        ]
    },
    {
        "id": "en_starter_people_003",
        "word": "famous",
        "emoji": "🌟",
        "form": "adjective",
        "subtext": "a famous person / become famous",
        "synonyms": [
            "well-known",
            "popular"
        ],
        "definitions": [
            {
                "text": "Known by many people.",
                "examples": [
                    "He is a famous actor."
                ]
            }
        ],
        "comparative": "more famous",
        "superlative": "the most famous",
        "transcription": "ˈfeɪməs",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "unknown"
        ]
    },
    {
        "id": "en_starter_tastes_textures_003",
        "word": "salty",
        "emoji": "🧂",
        "form": "adjective",
        "subtext": "salty snacks / too salty",
        "synonyms": [
            "tasting of salt"
        ],
        "definitions": [
            {
                "text": "Containing or tasting of salt.",
                "examples": [
                    "The popcorn is very salty."
                ]
            }
        ],
        "comparative": "saltier",
        "superlative": "the saltiest",
        "transcription": "ˈsɔlti",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "bland"
        ]
    },
    {
        "id": "en_starter_tastes_textures_004",
        "word": "sour",
        "emoji": "🍋",
        "form": "adjective",
        "subtext": "a sour taste / sour lemons",
        "synonyms": [
            "sharp-tasting"
        ],
        "definitions": [
            {
                "text": "Having a sharp taste like that of a lemon.",
                "examples": [
                    "Lemons are sour."
                ]
            }
        ],
        "comparative": "sourer",
        "superlative": "the sourest",
        "transcription": "saʊər",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "sweet"
        ]
    },
    {
        "id": "en_starter_tastes_textures_005",
        "word": "bitter",
        "emoji": "☕",
        "form": "adjective",
        "subtext": "a bitter taste / bitter coffee",
        "synonyms": [
            "strong",
            "sharp"
        ],
        "definitions": [
            {
                "text": "Having a strong sharp taste that is not sweet.",
                "examples": [
                    "This coffee is very bitter."
                ]
            }
        ],
        "comparative": "bitterer",
        "superlative": "the bitterest",
        "transcription": "ˈbɪtər",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "sweet"
        ]
    },
    {
        "id": "en_starter_body_003",
        "word": "fat",
        "emoji": "🍔",
        "form": "adjective",
        "subtext": "a fat cat",
        "synonyms": [
            "overweight",
            "gain weight"
        ],
        "definitions": [
            {
                "text": "Having a lot of extra flesh on your body.",
                "examples": [
                    "The cat is fat because it eats a lot."
                ]
            }
        ],
        "comparative": "fatter",
        "superlative": "the fattest",
        "transcription": "fæt",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "thin"
        ]
    },
    {
        "id": "en_starter_body_004",
        "word": "thin",
        "emoji": "🥬",
        "form": "adjective",
        "subtext": "he is thin / thin legs",
        "synonyms": [
            "slim",
            "skinny"
        ],
        "definitions": [
            {
                "text": "Having very little extra flesh on your body.",
                "examples": [
                    "He is very tall and thin."
                ]
            }
        ],
        "comparative": "thinner",
        "superlative": "the thinnest",
        "transcription": "θɪn",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "thick"
        ]
    },
    {
        "id": "en_starter_body_005",
        "word": "curly",
        "emoji": "🌀",
        "form": "adjective",
        "subtext": "curly hair / short curly hair",
        "synonyms": [
            "wavy"
        ],
        "definitions": [
            {
                "text": "Having curls or a curved shape.",
                "examples": [
                    "She has curly brown hair."
                ]
            }
        ],
        "comparative": "curlier",
        "superlative": "the curliest",
        "transcription": "ˈkərli",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "straight"
        ]
    },
    {
        "id": "en_starter_body_006",
        "word": "straight",
        "emoji": "📏",
        "form": "adjective",
        "subtext": "straight hair / long straight hair",
        "synonyms": [
            "not curly"
        ],
        "definitions": [
            {
                "text": "Not curving or bending.",
                "examples": [
                    "He has straight black hair."
                ]
            }
        ],
        "comparative": "straighter",
        "superlative": "the straightest",
        "transcription": "streɪt",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "curly"
        ]
    },
    {
        "id": "en_starter_describing_060",
        "word": "triangular",
        "emoji": "🔺",
        "form": "adjective",
        "subtext": "a triangular shape",
        "synonyms": [
            "three-sided"
        ],
        "definitions": [
            {
                "text": "Shaped like a triangle.",
                "examples": [
                    "The sign is triangular."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "traɪˈæŋgjələr",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "square"
        ]
    },
    {
        "id": "en_starter_describing_061",
        "word": "rectangular",
        "emoji": "▭",
        "form": "adjective",
        "subtext": "a rectangular room",
        "synonyms": [
            "four-sided"
        ],
        "definitions": [
            {
                "text": "Shaped like a rectangle.",
                "examples": [
                    "We have a rectangular table in the kitchen."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "rɛkˈtæŋgjələr",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "round"
        ]
    },
    {
        "id": "en_starter_describing_062",
        "word": "oval",
        "emoji": "🥚",
        "form": "adjective",
        "subtext": "an oval mirror",
        "synonyms": [
            "egg-shaped"
        ],
        "definitions": [
            {
                "text": "Shaped like an egg.",
                "examples": [
                    "The mirror is oval."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈoʊvəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "round"
        ]
    },
    {
        "id": "en_starter_describing_063",
        "word": "favourite",
        "emoji": "⭐",
        "form": "adjective",
        "subtext": "my favourite film / favourite food",
        "synonyms": [
            "preferred"
        ],
        "definitions": [
            {
                "text": "The one that you like the most.",
                "examples": [
                    "What is your favourite colour?",
                    "Pizza is my favourite food."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈfeɪvərɪt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "hated"
        ]
    },
    {
        "id": "en_starter_describing_064",
        "word": "dark",
        "emoji": "🌑",
        "form": "adjective",
        "subtext": "dark blue / a dark night",
        "synonyms": [
            "not light"
        ],
        "definitions": [
            {
                "text": "With little or no light.",
                "examples": [
                    "It is dark outside.",
                    "He has dark hair."
                ]
            }
        ],
        "comparative": "darker",
        "superlative": "the darkest",
        "transcription": "dɑrk",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "bright"
        ]
    },
    {
        "id": "en_starter_describing_065",
        "word": "bright",
        "emoji": "💡",
        "form": "adjective",
        "subtext": "bright colors / a bright day",
        "synonyms": [
            "shining",
            "light"
        ],
        "definitions": [
            {
                "text": "Full of light, or shining with much light.",
                "examples": [
                    "The sun is very bright today.",
                    "She is wearing a bright yellow dress."
                ]
            }
        ],
        "comparative": "brighter",
        "superlative": "the brightest",
        "transcription": "braɪt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "dark"
        ]
    },
    {
        "id": "en_starter_colours_012",
        "word": "gold",
        "emoji": "🟡",
        "form": "adjective",
        "subtext": "a gold ring / gold medal",
        "synonyms": [
            "golden"
        ],
        "definitions": [
            {
                "text": "Having the color of gold.",
                "examples": [
                    "She has a gold watch."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "goʊld",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "antonyms": [
            "silver"
        ]
    },
    {
        "id": "en_starter_colours_013",
        "word": "silver",
        "emoji": "⚪",
        "form": "adjective",
        "subtext": "a silver car / silver jewelry",
        "synonyms": [
            "silvery"
        ],
        "definitions": [
            {
                "text": "Having the color of silver.",
                "examples": [
                    "He has a silver car."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈsɪlvər",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "antonyms": [
            "gold"
        ]
    },
    {
        "id": "en_starter_size_shape_027",
        "word": "deep",
        "emoji": "🕳️",
        "form": "adjective",
        "subtext": "deep water / a deep hole",
        "synonyms": [
            "bottomless"
        ],
        "definitions": [
            {
                "text": "Going a long way from the top or surface to the bottom.",
                "examples": [
                    "The river is very deep here."
                ]
            }
        ],
        "comparative": "deeper",
        "superlative": "the deepest",
        "transcription": "dip",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "shallow"
        ]
    },
    {
        "id": "en_starter_size_shape_028",
        "word": "shallow",
        "emoji": "📏",
        "form": "adjective",
        "subtext": "shallow water / a shallow end",
        "synonyms": [
            "not deep"
        ],
        "definitions": [
            {
                "text": "Having only a short distance from the top to the bottom.",
                "examples": [
                    "The water is shallow, so we can walk across."
                ]
            }
        ],
        "comparative": "shallower",
        "superlative": "the shallowest",
        "transcription": "ˈʃæloʊ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "deep"
        ]
    },
    {
        "id": "en_starter_describing_066",
        "word": "modern",
        "emoji": "🏙️",
        "form": "adjective",
        "subtext": "a modern building / modern life",
        "synonyms": [
            "contemporary",
            "new"
        ],
        "definitions": [
            {
                "text": "Designed and made using the most recent ideas and methods.",
                "examples": [
                    "They live in a modern house."
                ]
            }
        ],
        "comparative": "more modern",
        "superlative": "the most modern",
        "transcription": "ˈmɑdərn",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "ancient"
        ]
    },
    {
        "id": "en_starter_describing_067",
        "word": "ancient",
        "emoji": "🏛️",
        "form": "adjective",
        "subtext": "ancient history / an ancient city",
        "synonyms": [
            "very old",
            "antique"
        ],
        "definitions": [
            {
                "text": "From a long time ago; very old.",
                "examples": [
                    "We visited an ancient city in Greece."
                ]
            }
        ],
        "comparative": "more ancient",
        "superlative": "the most ancient",
        "transcription": "ˈeɪnʧənt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "modern"
        ]
    },
    {
        "id": "en_starter_describing_068",
        "word": "brave",
        "emoji": "🦁",
        "form": "adjective",
        "subtext": "a brave soldier / be brave",
        "synonyms": [
            "courageous"
        ],
        "definitions": [
            {
                "text": "Willing to do things that are dangerous, and does not show fear in difficult situations.",
                "examples": [
                    "The firefighter was very brave."
                ]
            }
        ],
        "comparative": "braver",
        "superlative": "the bravest",
        "transcription": "breɪv",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "cowardly"
        ]
    },
    {
        "id": "en_starter_describing_069",
        "word": "cowardly",
        "emoji": "🐭",
        "form": "adjective",
        "subtext": "a cowardly act / don't be cowardly",
        "synonyms": [
            "fearful"
        ],
        "definitions": [
            {
                "text": "Not brave.",
                "examples": [
                    "He was too cowardly to tell the truth."
                ]
            }
        ],
        "comparative": "more cowardly",
        "superlative": "the most cowardly",
        "transcription": "ˈkaʊərdli",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "brave"
        ]
    },
    {
        "id": "en_starter_size_measurements_001",
        "word": "wide",
        "emoji": "↔️",
        "form": "adjective",
        "subtext": "a wide road / wide open",
        "synonyms": [
            "broad"
        ],
        "definitions": [
            {
                "text": "Measuring a long distance from one side to the other.",
                "examples": [
                    "The river is very wide here."
                ]
            }
        ],
        "comparative": "wider",
        "superlative": "the widest",
        "transcription": "waɪd",
        "lang": "en",
        "level": "starter",
        "theme": "size_measurements",
        "sub_theme": null,
        "antonyms": [
            "narrow"
        ]
    },
    {
        "id": "en_starter_size_measurements_002",
        "word": "narrow",
        "emoji": "⬇️",
        "form": "adjective",
        "subtext": "a narrow street / too narrow",
        "synonyms": [
            "thin"
        ],
        "definitions": [
            {
                "text": "Measuring only a small distance from one side to the other.",
                "examples": [
                    "The path was too narrow for the car."
                ]
            }
        ],
        "comparative": "narrower",
        "superlative": "the narrowest",
        "transcription": "ˈnɛroʊ",
        "lang": "en",
        "level": "starter",
        "theme": "size_measurements",
        "sub_theme": null,
        "antonyms": [
            "wide"
        ]
    },
    {
        "id": "en_starter_emotions_019",
        "word": "lucky",
        "emoji": "🍀",
        "form": "adjective",
        "subtext": "a lucky person / feel lucky",
        "synonyms": [
            "fortunate"
        ],
        "definitions": [
            {
                "text": "Having good luck.",
                "examples": [
                    "He is very lucky to have such a good job."
                ]
            }
        ],
        "comparative": "luckier",
        "superlative": "the luckiest",
        "transcription": "ˈləki",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "unlucky"
        ]
    },
    {
        "id": "en_starter_emotions_020",
        "word": "calm",
        "emoji": "😌",
        "form": "adjective",
        "subtext": "stay calm / a calm sea",
        "synonyms": [
            "peaceful",
            "quiet"
        ],
        "definitions": [
            {
                "text": "Peaceful, quiet, and without worry.",
                "examples": [
                    "The sea is very calm today.",
                    "Please stay calm."
                ]
            }
        ],
        "comparative": "calmer",
        "superlative": "the calmest",
        "transcription": "kɑm",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "stormy"
        ]
    },
    {
        "id": "en_starter_marital_status_001",
        "word": "married",
        "emoji": "💍",
        "form": "adjective",
        "subtext": "having a husband or wife / a married couple / get married",
        "definitions": [
            {
                "text": "Having a husband or wife.",
                "examples": [
                    "Are you married?"
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈmɛrid",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "single"
        ]
    },
    {
        "id": "en_starter_marital_status_002",
        "word": "single",
        "emoji": "👤",
        "form": "adjective",
        "subtext": "a single man",
        "synonyms": [
            "not married"
        ],
        "definitions": [
            {
                "text": "Not married or in a serious relationship.",
                "examples": [
                    "He is single and lives alone."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈsɪŋgəl",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "married"
        ]
    },
    {
        "id": "en_starter_illnesses_symptoms_004",
        "word": "well",
        "emoji": "💪",
        "form": "adjective",
        "subtext": "feel well / get well soon",
        "synonyms": [
            "healthy",
            "fit"
        ],
        "definitions": [
            {
                "text": "Healthy; not ill.",
                "examples": [
                    "I hope you are well.",
                    "She feels well today."
                ]
            }
        ],
        "comparative": "better",
        "superlative": "the best",
        "transcription": "wɛl",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "ill"
        ]
    },
    {
        "id": "en_starter_colours_014",
        "word": "purple",
        "emoji": "🟣",
        "form": "adjective",
        "definitions": [
            {
                "text": "A color between blue and red.",
                "examples": [
                    "I have a purple shirt."
                ]
            }
        ],
        "subtext": "purple flowers / bright purple",
        "synonyms": [
            "violet"
        ],
        "comparative": "more purple",
        "superlative": "the most purple",
        "transcription": "ˈpərpəl",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "antonyms": [
            "yellow"
        ]
    },
    {
        "id": "en_starter_describing_070",
        "word": "able",
        "emoji": "💪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having the power, skill, knowledge, or money to do something.",
                "examples": [
                    "She is able to speak three languages."
                ]
            }
        ],
        "subtext": "be able to / highly able",
        "synonyms": [
            "capable"
        ],
        "comparative": "abler",
        "superlative": "the ablest",
        "transcription": "ˈeɪbəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "unable"
        ]
    },
    {
        "id": "en_starter_distance_003",
        "word": "close",
        "emoji": "📍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Near in space or time.",
                "examples": [
                    "The station is close to the hotel."
                ]
            }
        ],
        "subtext": "close to / very close",
        "synonyms": [
            "near"
        ],
        "comparative": "closer",
        "superlative": "the closest",
        "transcription": "kloʊz",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "far"
        ]
    },
    {
        "id": "en_starter_illnesses_symptoms_005",
        "word": "dead",
        "emoji": "💀",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not living anymore.",
                "examples": [
                    "The flowers are dead."
                ]
            }
        ],
        "subtext": "dead leaves / completely dead",
        "synonyms": [
            "deceased"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "dɛd",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "alive"
        ]
    },
    {
        "id": "en_starter_describing_071",
        "word": "fair",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Treating people equally or in a right way.",
                "examples": [
                    "It is a fair decision."
                ]
            }
        ],
        "subtext": "a fair price / be fair",
        "synonyms": [
            "just"
        ],
        "comparative": "fairer",
        "superlative": "the fairest",
        "transcription": "fɛr",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "unfair"
        ]
    },
    {
        "id": "en_starter_describing_072",
        "word": "fine",
        "emoji": "😊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Good or acceptable; healthy.",
                "examples": [
                    "I am fine, thank you.",
                    "The weather is fine today."
                ]
            }
        ],
        "subtext": "feel fine / a fine day",
        "synonyms": [
            "okay",
            "good"
        ],
        "comparative": "finer",
        "superlative": "the finest",
        "transcription": "faɪn",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "terrible"
        ]
    },
    {
        "id": "en_starter_emotions_021",
        "word": "glad",
        "emoji": "😊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Happy and pleased.",
                "examples": [
                    "I am glad to see you."
                ]
            }
        ],
        "subtext": "glad that / so glad",
        "synonyms": [
            "happy",
            "pleased"
        ],
        "comparative": "gladder",
        "superlative": "the gladdest",
        "transcription": "glæd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "happy"
        ]
    },
    {
        "id": "en_starter_surprise_interest_002",
        "word": "interested",
        "emoji": "🧐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Wanting to give your attention to something or learn more about it.",
                "examples": [
                    "I am interested in history."
                ]
            }
        ],
        "subtext": "interested in / very interested",
        "synonyms": [
            "curious"
        ],
        "comparative": "more interested",
        "superlative": "the most interested",
        "transcription": "ˈɪntəˌrɛstɪd",
        "lang": "en",
        "level": "starter",
        "theme": "surprise_interest",
        "sub_theme": null,
        "antonyms": [
            "bored"
        ]
    },
    {
        "id": "en_starter_describing_073",
        "word": "only",
        "emoji": "1️⃣",
        "form": "adjective",
        "definitions": [
            {
                "text": "Used to show that there is only one or a few of something.",
                "examples": [
                    "She is the only student in the classroom."
                ]
            }
        ],
        "subtext": "the only one / only child",
        "synonyms": [
            "sole"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈoʊnli",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "many"
        ]
    },
    {
        "id": "en_starter_describing_074",
        "word": "other",
        "emoji": "➕",
        "form": "adjective",
        "definitions": [
            {
                "text": "Used to refer to people or things that are different from the ones already mentioned.",
                "examples": [
                    "Where are the other students?"
                ]
            }
        ],
        "subtext": "the other one / some other",
        "synonyms": [
            "different"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈəðər",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "same"
        ]
    },
    {
        "id": "en_starter_personal_identity_019",
        "word": "own",
        "emoji": "👤",
        "form": "adjective",
        "definitions": [
            {
                "text": "Belonging to or done by a particular person.",
                "examples": [
                    "I have my own room."
                ]
            }
        ],
        "subtext": "on my own / my own car",
        "synonyms": [
            "personal"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "oʊn",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null,
        "antonyms": [
            "shared"
        ]
    },
    {
        "id": "en_starter_size_shape_029",
        "word": "quick",
        "emoji": "⚡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Happening or done in a short time.",
                "examples": [
                    "She gave a quick answer."
                ]
            }
        ],
        "subtext": "a quick lunch / very quick",
        "synonyms": [
            "fast"
        ],
        "comparative": "quicker",
        "superlative": "the quickest",
        "transcription": "kwɪk",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "slow"
        ]
    },
    {
        "id": "en_starter_work_026",
        "word": "ready",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Prepared for what you are going to do.",
                "examples": [
                    "Are you ready for work?"
                ]
            }
        ],
        "subtext": "get ready / almost ready",
        "synonyms": [
            "prepared"
        ],
        "comparative": "readier",
        "superlative": "the readiest",
        "transcription": "ˈrɛdi",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "unready"
        ]
    },
    {
        "id": "en_starter_work_027",
        "word": "unready",
        "emoji": "⏳",
        "form": "adjective",
        "subtext": "unready for the change",
        "synonyms": [
            "not prepared"
        ],
        "definitions": [
            {
                "text": "Not prepared or ready for something.",
                "examples": [
                    "We were unready for such a big project."
                ]
            }
        ],
        "comparative": "more unready",
        "superlative": "the most unready",
        "transcription": "ʌnˈrɛdi",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "ready"
        ]
    },
    {
        "id": "en_starter_tastes_textures_006",
        "word": "rough",
        "emoji": "🧱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not smooth.",
                "examples": [
                    "The dog has rough fur."
                ]
            }
        ],
        "subtext": "rough skin / rough sea",
        "synonyms": [
            "uneven"
        ],
        "comparative": "rougher",
        "superlative": "the roughest",
        "transcription": "rəf",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "smooth"
        ]
    },
    {
        "id": "en_starter_tastes_textures_007",
        "word": "sharp",
        "emoji": "🔪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a thin edge that is able to cut things or a fine point which is able to make a hole in things.",
                "examples": [
                    "This knife is very sharp."
                ]
            }
        ],
        "subtext": "a sharp knife / very sharp",
        "synonyms": [
            "pointed"
        ],
        "comparative": "sharper",
        "superlative": "the sharpest",
        "transcription": "ʃɑrp",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "blunt"
        ]
    },
    {
        "id": "en_starter_personality_traits_001",
        "word": "shy",
        "emoji": "😳",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nervous and uncomfortable about meeting and talking to other people.",
                "examples": [
                    "He is a shy boy."
                ]
            }
        ],
        "subtext": "feel shy / quite shy",
        "synonyms": [
            "timid"
        ],
        "comparative": "shyer",
        "superlative": "the shyest",
        "transcription": "ʃaɪ",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "confident"
        ]
    },
    {
        "id": "en_starter_size_shape_030",
        "word": "thick",
        "emoji": "📖",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a large distance between two sides.",
                "examples": [
                    "This is a thick book."
                ]
            }
        ],
        "subtext": "thick walls / thick hair",
        "synonyms": [
            "wide"
        ],
        "comparative": "thicker",
        "superlative": "the thickest",
        "transcription": "θɪk",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "thin"
        ]
    },
    {
        "id": "en_starter_describing_075",
        "word": "true",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Based on facts and not imaginary.",
                "examples": [
                    "Is the story true?"
                ]
            }
        ],
        "subtext": "come true",
        "synonyms": [
            "real",
            "truly"
        ],
        "comparative": "truer",
        "superlative": "the truest",
        "transcription": "tru",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "false"
        ]
    },
    {
        "id": "en_starter_describing_076",
        "word": "false",
        "emoji": "❌",
        "form": "adjective",
        "subtext": "true or false / false information",
        "synonyms": [
            "incorrect"
        ],
        "definitions": [
            {
                "text": "Not true; incorrect.",
                "examples": [
                    "The statement is false."
                ]
            }
        ],
        "comparative": "falser",
        "superlative": "the falsest",
        "transcription": "fɔls",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "true"
        ]
    },
    {
        "id": "en_starter_personality_traits_002",
        "word": "stupid",
        "emoji": "🤡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Silly or not intelligent.",
                "examples": [
                    "It was a stupid mistake."
                ]
            }
        ],
        "subtext": "don't be stupid / very stupid",
        "synonyms": [
            "silly"
        ],
        "comparative": "stupider",
        "superlative": "the stupidest",
        "transcription": "ˈstupɪd",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "smart"
        ]
    },
    {
        "id": "en_starter_giving_opinions_001",
        "word": "sure",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Certain; having no doubt.",
                "examples": [
                    "I am sure about the answer.",
                    "Are you sure?"
                ]
            }
        ],
        "subtext": "make sure / pretty sure",
        "synonyms": [
            "certain"
        ],
        "comparative": "surer",
        "superlative": "the surest",
        "transcription": "ʃʊr",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "unsure"
        ]
    },
    {
        "id": "en_starter_giving_opinions_002",
        "word": "unsure",
        "emoji": "❓",
        "form": "adjective",
        "subtext": "feel unsure / unsure about",
        "synonyms": [
            "uncertain"
        ],
        "definitions": [
            {
                "text": "Not certain about something.",
                "examples": [
                    "I am unsure about what to do next."
                ]
            }
        ],
        "comparative": "more unsure",
        "superlative": "the most unsure",
        "transcription": "ənˈʃʊr",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "sure"
        ]
    },
    {
        "id": "en_starter_personality_traits_003",
        "word": "nasty",
        "emoji": "😠",
        "form": "adjective",
        "subtext": "a nasty person / nasty weather",
        "synonyms": [
            "unpleasant",
            "mean"
        ],
        "definitions": [
            {
                "text": "Very bad or unpleasant; unkind.",
                "examples": [
                    "Don't be nasty to your colleagues."
                ]
            }
        ],
        "comparative": "nastier",
        "superlative": "the nastiest",
        "transcription": "ˈnæsti",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "nice"
        ]
    },
    {
        "id": "en_starter_describing_077",
        "word": "incorrect",
        "emoji": "❌",
        "form": "adjective",
        "subtext": "incorrect answer / absolutely incorrect",
        "synonyms": [
            "wrong",
            "false"
        ],
        "definitions": [
            {
                "text": "Not correct; wrong.",
                "examples": [
                    "The information in the report was incorrect."
                ]
            }
        ],
        "comparative": "more incorrect",
        "superlative": "the most incorrect",
        "transcription": "ˌɪnkərˈɛkt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "correct"
        ]
    },
    {
        "id": "en_starter_tastes_textures_008",
        "word": "smooth",
        "emoji": "🧼",
        "form": "adjective",
        "subtext": "smooth skin / smooth surface",
        "synonyms": [
            "flat",
            "even"
        ],
        "definitions": [
            {
                "text": "Having an even and regular surface or consistency; not rough.",
                "examples": [
                    "The table has a very smooth surface."
                ]
            }
        ],
        "comparative": "smoother",
        "superlative": "the smoothest",
        "transcription": "smuð",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "rough"
        ]
    },
    {
        "id": "en_starter_describing_078",
        "word": "normal",
        "emoji": "😐",
        "form": "adjective",
        "subtext": "normal day / back to normal",
        "synonyms": [
            "usual",
            "ordinary"
        ],
        "definitions": [
            {
                "text": "Usual, ordinary, or expected.",
                "examples": [
                    "It was a normal working day."
                ]
            }
        ],
        "comparative": "more normal",
        "superlative": "the most normal",
        "transcription": "ˈnɔrməl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "strange"
        ]
    },
    {
        "id": "en_starter_plants_natural_world_002",
        "word": "alive",
        "emoji": "🌱",
        "form": "adjective",
        "subtext": "stay alive / still alive",
        "synonyms": [
            "living"
        ],
        "definitions": [
            {
                "text": "Living, not dead.",
                "examples": [
                    "The plant is still alive."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "əˈlaɪv",
        "lang": "en",
        "level": "starter",
        "theme": "plants_natural_world",
        "sub_theme": null,
        "antonyms": [
            "dead"
        ]
    },
    {
        "id": "en_starter_numbers_002",
        "word": "many",
        "emoji": "🔢",
        "form": "adjective",
        "subtext": "a lot of, numerous / many people / how many?",
        "definitions": [
            {
                "text": "Used for saying that there are a large number of people or things.",
                "examples": [
                    "There are many students in the class."
                ]
            }
        ],
        "comparative": "more",
        "superlative": "the most",
        "transcription": "ˈmɛni",
        "lang": "en",
        "level": "starter",
        "theme": "numbers",
        "sub_theme": null,
        "antonyms": [
            "few"
        ]
    },
    {
        "id": "en_starter_describing_079",
        "word": "shared",
        "emoji": "👥",
        "form": "adjective",
        "subtext": "shared room / shared office",
        "synonyms": [
            "common"
        ],
        "definitions": [
            {
                "text": "Used or owned by more than one person.",
                "examples": [
                    "We work in a shared office."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ʃɛrd",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "own"
        ]
    },
    {
        "id": "en_starter_describing_080",
        "word": "unclear",
        "emoji": "🌫️",
        "form": "adjective",
        "subtext": "unclear instructions / feel unclear",
        "synonyms": [
            "confusing",
            "vague"
        ],
        "definitions": [
            {
                "text": "Not easy to understand; not clear.",
                "examples": [
                    "The instructions were unclear."
                ]
            }
        ],
        "comparative": "more unclear",
        "superlative": "the most unclear",
        "transcription": "ənˈklɪr",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "clear"
        ]
    },
    {
        "id": "en_starter_numbers_003",
        "word": "few",
        "emoji": "🤏",
        "form": "adjective",
        "subtext": "a few / very few",
        "synonyms": [
            "not many"
        ],
        "definitions": [
            {
                "text": "Used for saying that there are only a small number of people or things.",
                "examples": [
                    "There are few students here today."
                ]
            }
        ],
        "comparative": "fewer",
        "superlative": "the fewest",
        "transcription": "fju",
        "lang": "en",
        "level": "starter",
        "theme": "numbers",
        "sub_theme": null,
        "antonyms": [
            "many"
        ]
    },
    {
        "id": "en_starter_giving_opinions_003",
        "word": "possible",
        "emoji": "✅",
        "form": "adjective",
        "transcription": "🇬🇧 ˈpɒsəbl | 🇺🇸 ˈpɑːsəbl",
        "definitions": [
            {
                "text": "Able to be done or achieved.",
                "examples": [
                    "Is it possible to come tomorrow?",
                    "Everything is possible if you try."
                ]
            }
        ],
        "comparative": "more possible",
        "superlative": "the most possible",
        "subtext": "as soon as possible, if possible",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "impossible"
        ]
    },
    {
        "id": "en_starter_describing_081",
        "word": "useful",
        "emoji": "🛠️",
        "form": "adjective",
        "transcription": "ˈjuːsfl",
        "definitions": [
            {
                "text": "Helping you to do or achieve something.",
                "examples": [
                    "This is a very useful book.",
                    "The internet is useful for studying."
                ]
            }
        ],
        "comparative": "more useful",
        "superlative": "the most useful",
        "subtext": "very useful, useful information",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "useless"
        ]
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
