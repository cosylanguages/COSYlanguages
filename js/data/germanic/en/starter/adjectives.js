(function() {
    const data = [
{
        "word": "tall",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "short",
        "oppositeEmoji": "📏",
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
        "transcription": "tɔl"
    },
{
        "word": "short",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "tall",
        "oppositeEmoji": "🗼",
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
        "transcription": "ʃɔrt"
    },
{
        "word": "young",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "old",
        "oppositeEmoji": "👴",
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
        "transcription": "jəŋ"
    },
{
        "word": "old",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "new",
        "oppositeEmoji": "👶",
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
        "transcription": "oʊld"
    },
{
        "word": "sunny",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "opposite": "rainy",
        "oppositeEmoji": "🌧️",
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
        "transcription": "ˈsəni"
    },
{
        "word": "rainy",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "opposite": "sunny",
        "oppositeEmoji": "☀️",
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
        "transcription": "ˈreɪni"
    },
{
        "word": "hot",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "cold",
        "oppositeEmoji": "❄️",
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
        "synonyms": []
    },
{
        "word": "cold",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "hot",
        "oppositeEmoji": "🔥",
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
        "synonyms": []
    },
{
        "word": "cheap",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "expensive",
        "oppositeEmoji": "💎",
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
        "transcription": "ʧip"
    },
{
        "word": "expensive",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "cheap",
        "oppositeEmoji": "🏷️",
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
        "transcription": "ɪkˈspɛnsɪv"
    },
{
        "word": "good",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "bad",
        "oppositeEmoji": "👎",
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
        "transcription": "gʊd"
    },
{
        "word": "bad",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "👍",
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
        "transcription": "bæd"
    },
{
        "word": "big",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐭",
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
        "transcription": "bɪg"
    },
{
        "word": "small",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "large",
        "oppositeEmoji": "🐘",
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
        "transcription": "smɔl"
    },
{
        "word": "easy",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difficult",
        "oppositeEmoji": "❌",
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
        "synonyms": []
    },
{
        "word": "difficult",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "easy",
        "oppositeEmoji": "✅",
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
        "synonyms": []
    },
{
        "word": "happy",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "sad",
        "oppositeEmoji": "😢",
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
        "transcription": "ˈhæpi"
    },
{
        "word": "tired",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "energetic",
        "oppositeEmoji": "⚡",
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
        "synonyms": []
    },
{
        "word": "full-time",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "part-time",
        "oppositeEmoji": "⏳",
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
        "synonyms": []
    },
{
        "word": "thirsty",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🥤",
        "form": "adjective",
        "opposite": "satisfied",
        "oppositeEmoji": "😌",
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
        "transcription": "ˈθərsti"
    },
{
        "word": "part-time",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "full-time",
        "oppositeEmoji": "⏰",
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
        "synonyms": []
    },
{
        "word": "clean",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "dirty",
        "oppositeEmoji": "💩",
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
        "synonyms": []
    },
{
        "word": "healthy",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔",
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
        "synonyms": []
    },
{
        "word": "unhealthy",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍔",
        "form": "adjective",
        "opposite": "healthy",
        "oppositeEmoji": "🥗",
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
        "transcription": "ənˈhɛlθi"
    },
{
        "word": "ill",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "well",
        "oppositeEmoji": "💪",
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
        "synonyms": []
    },
{
        "word": "online",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "offline",
        "oppositeEmoji": "📴",
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
        "synonyms": []
    },
{
        "word": "offline",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📴",
        "form": "adjective",
        "opposite": "online",
        "oppositeEmoji": "🌐",
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
        "transcription": "ˈɔˌflaɪn"
    },
{
        "word": "alone",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "together",
        "oppositeEmoji": "👫",
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
        "synonyms": []
    },
{
        "word": "relaxed",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "stressed",
        "oppositeEmoji": "😫",
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
        "transcription": "rɪˈlækst"
    },
{
        "word": "worried",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
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
        "transcription": "ˈwərid"
    },
{
        "word": "busy",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "free",
        "oppositeEmoji": "🆓",
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
        "synonyms": []
    },
{
        "word": "important",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "opposite": "unimportant",
        "oppositeEmoji": "🍃",
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
        "transcription": "ˌɪmˈpɔrtənt"
    },
{
        "word": "unimportant",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🍃",
        "form": "adjective",
        "opposite": "important",
        "oppositeEmoji": "❗",
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
        "transcription": "ənɪmˈpɔrtənt"
    },
{
        "word": "red",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "opposite": "green",
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
        "synonyms": []
    },
{
        "word": "blue",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "opposite": "orange",
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
        "synonyms": []
    },
{
        "word": "green",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "opposite": "pink",
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
        "synonyms": []
    },
{
        "word": "white",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "opposite": "black",
        "oppositeEmoji": "⬛",
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
        "synonyms": []
    },
{
        "word": "black",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "opposite": "white",
        "oppositeEmoji": "⬜",
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
        "synonyms": []
    },
{
        "word": "yellow",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "opposite": "purple",
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
        "synonyms": []
    },
{
        "word": "free",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "opposite": "busy",
        "oppositeEmoji": "💎",
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
        "synonyms": []
    },
{
        "word": "open",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "closed",
        "oppositeEmoji": "🔒",
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
        "synonyms": []
    },
{
        "word": "closed",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "open",
        "oppositeEmoji": "📖",
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
        "synonyms": []
    },
{
        "word": "large",
        "level": "starter",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐭",
        "subtext": "a large city / a large company / a large amount",
        "definitions": [
            {
                "text": "Of more than average size or amount.",
                "examples": [
                    "Paris is a very large city."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "larger",
        "superlative": "the largest",
        "emoji": "🐘",
        "transcription": "lɑrʤ",
        "synonyms": []
    },
{
        "word": "little",
        "level": "starter",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐘",
        "subtext": "a little bit / a little money / too little",
        "definitions": [
            {
                "text": "Small in size; a small amount of.",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "smaller",
        "superlative": "the smallest",
        "emoji": "🐭",
        "transcription": "ˈlɪtəl",
        "synonyms": []
    },
{
        "word": "long",
        "level": "starter",
        "form": "adjective",
        "opposite": "short",
        "oppositeEmoji": "📏",
        "subtext": "a long journey / a long day / a long time",
        "definitions": [
            {
                "text": "Of great length; lasting a long time.",
                "examples": [
                    "She has a long commute every day."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "longer",
        "superlative": "the longest",
        "emoji": "📏",
        "transcription": "lɔŋ",
        "synonyms": []
    },
{
        "word": "high",
        "level": "starter",
        "form": "adjective",
        "opposite": "low",
        "oppositeEmoji": "📉",
        "subtext": "high price / high rent / high quality",
        "definitions": [
            {
                "text": "Of greater than average height or level.",
                "examples": [
                    "The rent in this area is very high."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "higher",
        "superlative": "the highest",
        "emoji": "🏔️",
        "transcription": "haɪ",
        "synonyms": []
    },
{
        "word": "low",
        "level": "starter",
        "form": "adjective",
        "opposite": "high",
        "oppositeEmoji": "📈",
        "subtext": "low price / low salary / low quality",
        "definitions": [
            {
                "text": "Of less than average height or level.",
                "examples": [
                    "The salary is too low for the hours involved."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "lower",
        "superlative": "the lowest",
        "emoji": "⬇️",
        "transcription": "loʊ",
        "synonyms": []
    },
{
        "word": "full",
        "level": "starter",
        "form": "adjective",
        "opposite": "empty",
        "oppositeEmoji": "🫙",
        "subtext": "full time / a full day / full of people",
        "definitions": [
            {
                "text": "Containing as much as possible; complete.",
                "examples": [
                    "I feel full after that lunch."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "fuller",
        "superlative": "the fullest",
        "emoji": "🥛",
        "transcription": "fʊl",
        "synonyms": []
    },
{
        "word": "empty",
        "level": "starter",
        "form": "adjective",
        "opposite": "full",
        "oppositeEmoji": "🥛",
        "subtext": "an empty flat / an empty room / nearly empty",
        "definitions": [
            {
                "text": "Containing nothing; with no people.",
                "examples": [
                    "The office is empty at weekends."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "emptier",
        "superlative": "the emptiest",
        "emoji": "🫙",
        "transcription": "ˈɛmti",
        "synonyms": []
    },
{
        "word": "warm",
        "level": "starter",
        "form": "adjective",
        "opposite": "cool",
        "oppositeEmoji": "🧊",
        "subtext": "warm weather / a warm welcome / keep warm",
        "definitions": [
            {
                "text": "Slightly hot; pleasantly heated.",
                "examples": [
                    "The office is warm and comfortable."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "warmer",
        "superlative": "the warmest",
        "emoji": "☀️",
        "transcription": "wɔrm",
        "synonyms": []
    },
{
        "word": "cool",
        "level": "starter",
        "form": "adjective",
        "opposite": "warm",
        "oppositeEmoji": "☀️",
        "subtext": "cool weather / a cool drink / stay cool",
        "definitions": [
            {
                "text": "Slightly cold; pleasantly low temperature.",
                "examples": [
                    "She prefers cool weather for working."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "cooler",
        "superlative": "the coolest",
        "emoji": "🌬️",
        "transcription": "kul",
        "synonyms": []
    },
{
        "word": "wet",
        "level": "starter",
        "form": "adjective",
        "opposite": "dry",
        "oppositeEmoji": "🏜️",
        "subtext": "wet weather / wet clothes / get wet",
        "definitions": [
            {
                "text": "Covered with water or liquid.",
                "examples": [
                    "His jacket is wet from the rain."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "wetter",
        "superlative": "the wettest",
        "emoji": "💦",
        "transcription": "wɛt",
        "synonyms": []
    },
{
        "word": "dry",
        "level": "starter",
        "form": "adjective",
        "opposite": "wet",
        "oppositeEmoji": "🌧️",
        "subtext": "dry weather / dry skin / keep dry",
        "definitions": [
            {
                "text": "Without water or liquid; not wet.",
                "examples": [
                    "The storage room must stay dry."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "dryer",
        "superlative": "the dryest",
        "emoji": "🏜️",
        "transcription": "draɪ",
        "synonyms": []
    },
{
        "word": "dirty",
        "level": "starter",
        "theme": "household_tasks_A1",
        "form": "adjective",
        "opposite": "clean",
        "oppositeEmoji": "✨",
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
        "synonyms": []
    },
{
        "word": "hard",
        "level": "starter",
        "form": "adjective",
        "opposite": "soft",
        "oppositeEmoji": "☁️",
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
        "theme": "size_shape_A1",
        "comparative": "harder",
        "superlative": "the hardest",
        "emoji": "🧱",
        "transcription": "hɑrd"
    },
{
        "word": "soft",
        "level": "starter",
        "form": "adjective",
        "opposite": "hard",
        "oppositeEmoji": "🧱",
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
        "theme": "size_shape_A1",
        "comparative": "softer",
        "superlative": "the softest",
        "emoji": "☁️",
        "transcription": "sɔft"
    },
{
        "word": "heavy",
        "level": "starter",
        "form": "adjective",
        "opposite": "light",
        "oppositeEmoji": "🪶",
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
        "theme": "size_shape_A1",
        "comparative": "heavier",
        "superlative": "the heaviest",
        "emoji": "🏋️",
        "transcription": "ˈhɛvi"
    },
{
        "word": "light",
        "level": "starter",
        "form": "adjective",
        "opposite": "heavy",
        "oppositeEmoji": "🐘",
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
        "theme": "size_shape_A1",
        "comparative": "lighter",
        "superlative": "the lightest",
        "emoji": "🪶",
        "transcription": "laɪt"
    },
{
        "word": "brown",
        "level": "starter",
        "form": "adjective",
        "opposite": "grey",
        "subtext": "dark brown / light brown / brown bread",
        "definitions": [
            {
                "text": "Having the colour of wood or earth.",
                "examples": [
                    "She has brown eyes and dark hair."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "browner",
        "superlative": "the brownest",
        "emoji": "🤎",
        "transcription": "braʊn",
        "synonyms": []
    },
{
        "word": "grey",
        "level": "starter",
        "form": "adjective",
        "opposite": "brown",
        "subtext": "grey area / grey sky / pale grey",
        "definitions": [
            {
                "text": "Having a colour between black and white.",
                "examples": [
                    "He has grey hair and a kind face."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "greyer",
        "superlative": "the greyest",
        "emoji": "🩶",
        "transcription": "greɪ",
        "synonyms": []
    },
{
        "word": "pink",
        "level": "starter",
        "form": "adjective",
        "opposite": "green",
        "subtext": "light pink / bright pink / hot pink",
        "definitions": [
            {
                "text": "Having a pale red colour.",
                "examples": [
                    "She prefers pink to red."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "pinker",
        "superlative": "the pinkest",
        "emoji": "🩷",
        "transcription": "pɪŋk",
        "synonyms": []
    },
{
        "word": "orange",
        "level": "starter",
        "form": "adjective",
        "opposite": "blue",
        "subtext": "bright orange / dark orange / orange light",
        "definitions": [
            {
                "text": "Having the colour of an orange fruit.",
                "examples": [
                    "He bought an orange jacket."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "more orange",
        "superlative": "the most orange",
        "emoji": "🧡",
        "transcription": "ˈɔrɪnʤ",
        "synonyms": []
    },
{
        "word": "great",
        "level": "starter",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "😫",
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
        "theme": "describing_things_A1",
        "comparative": "greater",
        "superlative": "the greatest",
        "emoji": "🌟",
        "transcription": "greɪt"
    },
{
        "word": "nice",
        "level": "starter",
        "form": "adjective",
        "opposite": "nasty",
        "oppositeEmoji": "😠",
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
        "theme": "describing_things_A1",
        "comparative": "nicer",
        "superlative": "the nicest",
        "emoji": "😊",
        "transcription": "nis"
    },
{
        "word": "wonderful",
        "level": "starter",
        "form": "adjective",
        "opposite": "awful",
        "oppositeEmoji": "🤮",
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
        "theme": "describing_things_A1",
        "comparative": "more wonderful",
        "superlative": "the most wonderful",
        "emoji": "🌈",
        "transcription": "ˈwəndərfəl"
    },
{
        "word": "terrible",
        "level": "starter",
        "form": "adjective",
        "opposite": "bad",
        "oppositeEmoji": "🌟",
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
        "theme": "describing_things_A1",
        "comparative": "more terrible",
        "superlative": "the most terrible",
        "emoji": "🤮",
        "transcription": "ˈtɛrəbəl"
    },
{
        "word": "awful",
        "level": "starter",
        "form": "adjective",
        "opposite": "wonderful",
        "oppositeEmoji": "🌈",
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
        "theme": "describing_things_A1",
        "comparative": "more awful",
        "superlative": "the most awful",
        "emoji": "💩",
        "transcription": "ˈɔfəl"
    },
{
        "word": "amazing",
        "level": "starter",
        "form": "adjective",
        "opposite": "ordinary",
        "oppositeEmoji": "😐",
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
        "theme": "describing_things_A1",
        "comparative": "more amazing",
        "superlative": "the most amazing",
        "emoji": "🤩",
        "transcription": "əˈmeɪzɪŋ"
    },
{
        "word": "fantastic",
        "level": "starter",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "😫",
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
        "theme": "describing_things_A1",
        "comparative": "more fantastic",
        "superlative": "the most fantastic",
        "emoji": "🔥",
        "transcription": "fænˈtæstɪk"
    },
{
        "word": "sad",
        "level": "starter",
        "form": "adjective",
        "opposite": "happy",
        "oppositeEmoji": "😊",
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
        "theme": "basic_negative_emotions_A1",
        "comparative": "sadder",
        "superlative": "the saddest",
        "emoji": "😢",
        "transcription": "sæd"
    },
{
        "word": "hungry",
        "level": "starter",
        "form": "adjective",
        "opposite": "full",
        "oppositeEmoji": "🤰",
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
        "theme": "basic_negative_emotions_A1",
        "comparative": "hungrier",
        "superlative": "the hungriest",
        "emoji": "🍔",
        "transcription": "ˈhəŋgri"
    },
{
        "word": "angry",
        "level": "starter",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
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
        "theme": "basic_negative_emotions_A1",
        "comparative": "angrier",
        "superlative": "the angriest",
        "emoji": "😠",
        "transcription": "ˈæŋgri"
    },
{
        "word": "bored",
        "level": "starter",
        "form": "adjective",
        "opposite": "interesting",
        "oppositeEmoji": "🧐",
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
        "theme": "basic_negative_emotions_A1",
        "comparative": "more bored",
        "superlative": "the most bored",
        "emoji": "😴",
        "transcription": "bɔrd"
    },
{
        "word": "excited",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "opposite": "bored",
        "oppositeEmoji": "😴",
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
        "synonyms": []
    },
{
        "word": "afraid",
        "level": "starter",
        "form": "adjective",
        "opposite": "brave",
        "oppositeEmoji": "🦁",
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
        "theme": "basic_negative_emotions_A1",
        "comparative": "more afraid",
        "superlative": "the most afraid",
        "emoji": "😨",
        "transcription": "əˈfreɪd"
    },
{
        "word": "sorry",
        "level": "starter",
        "form": "adjective",
        "opposite": "unapologetic",
        "subtext": "feel sorry / sorry for / sorry about",
        "definitions": [
            {
                "text": "Feeling regret or sadness.",
                "examples": [
                    "She is sorry for the delay."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "sorrier",
        "superlative": "the sorriest",
        "emoji": "🙏",
        "transcription": "ˈsɑri",
        "synonyms": []
    },
{
        "word": "right",
        "level": "starter",
        "form": "adjective",
        "subtext": "right hand / right side / absolutely right",
        "opposite": "wrong",
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
        "theme": "describing_things_A1",
        "comparative": "more right",
        "superlative": "the most right",
        "emoji": "✅",
        "transcription": "raɪt",
        "synonyms": []
    },
{
        "word": "left",
        "level": "starter",
        "form": "adjective",
        "subtext": "left hand / left side",
        "opposite": "right",
        "definitions": [
            {
                "text": "On or towards the side of your body that is to the west when you face north.",
                "examples": [
                    "Turn left at the station.",
                    "She writes with her left hand."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "emoji": "⬅️",
        "transcription": "lɛft",
        "synonyms": []
    },
{
        "word": "wrong",
        "level": "starter",
        "theme": "opinion_A1",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not correct.",
                "examples": [
                    "That is the wrong answer."
                ]
            }
        ],
        "subtext": "incorrect",
        "transcription": "rɔŋ",
        "synonyms": [],
        "opposite": "right"
    }
    ];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();