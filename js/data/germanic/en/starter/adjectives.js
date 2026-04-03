(function() {
    const data = [

    {
        "word": "tall",
        "transcription": "tɔːl",
        "image": "https://images.unsplash.com/photo-1490212854341-364e83f080b4?auto=format&fit=crop&w=400&q=80",
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
        "synonyms": ["high", "lofty"],
        "comparative": "taller",
        "superlative": "the tallest"
    },

    {
        "word": "short",
        "transcription": "ʃɔːt",
        "image": "https://images.unsplash.com/photo-1490212854341-364e83f080b4?auto=format&fit=crop&w=400&q=80",
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
        "synonyms": ["small", "brief"],
        "comparative": "shorter",
        "superlative": "the shortest"
    },

    {
        "word": "young",
        "transcription": "jʌŋ",
        "image": "https://images.unsplash.com/photo-1516056123400-18170aa4d56d?auto=format&fit=crop&w=400&q=80",
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
        "synonyms": ["youthful"],
        "comparative": "younger",
        "superlative": "the youngest"
    },

    {
        "word": "old",
        "transcription": "əʊld",
        "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "young",
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
        "synonyms": ["elderly", "ancient"],
        "comparative": "older",
        "superlative": "the oldest"
    },

    {
        "word": "sunny",
        "transcription": "ˈsʌni",
        "image": "https://images.unsplash.com/photo-1528605248644-14dd04cb11c1?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "opposite": "cloudy",
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
        "synonyms": ["bright", "clear"],
        "comparative": "sunnier",
        "superlative": "the sunniest"
    },

    {
        "word": "rainy",
        "transcription": "ˈreɪni",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=400&q=80",
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
        "synonyms": ["wet", "showery"],
        "comparative": "rainier",
        "superlative": "the rainiest"
    },

    {
        "word": "hot",
        "transcription": "hɒt",
        "image": "https://images.unsplash.com/photo-1528605248644-14dd04cb11c1?auto=format&fit=crop&w=400&q=80",
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
        "superlative": "the hottest"
    },

    {
        "word": "cold",
        "transcription": "kəʊld",
        "image": "https://images.unsplash.com/photo-1517299321684-909d30c28384?auto=format&fit=crop&w=400&q=80",
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
        "superlative": "the coldest"
    },

    {
        "word": "cheap",
        "transcription": "tʃiːp",
        "image": "https://images.unsplash.com/photo-1553729450-990a4fa52899?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "expensive",
        "oppositeEmoji": "💎",
        "subtext": "cheap flight / very cheap / cheap and cheerful",
        "synonyms": ["low price", "inexpensive"],
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
        "superlative": "the cheapest"
    },

    {
        "word": "expensive",
        "transcription": "ɪkˈspensɪv",
        "image": "https://images.unsplash.com/photo-1584307662800-401d49a7596c?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "cheap",
        "oppositeEmoji": "🏷️",
        "subtext": "very expensive / expensive taste / too expensive",
        "synonyms": ["costly", "high price"],
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
        "superlative": "the most expensive"
    },

    {
        "word": "good",
        "transcription": "ɡʊd",
        "image": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "bad",
        "oppositeEmoji": "👎",
        "subtext": "good idea / good luck / good value",
        "synonyms": ["great", "nice", "pleasant"],
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
        "superlative": "the best"
    },

    {
        "word": "bad",
        "transcription": "bæd",
        "image": "https://images.unsplash.com/photo-1550684847-75bdda21cc95?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "👍",
        "subtext": "bad news / bad luck / bad decision",
        "synonyms": ["terrible", "awful", "unpleasant"],
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
        "superlative": "the worst"
    },

    {
        "word": "big",
        "transcription": "bɪɡ",
        "image": "https://images.unsplash.com/photo-1518386395660-44e3fa603770?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐭",
        "subtext": "a big house / a big problem / big enough",
        "synonyms": ["large", "huge"],
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
        "superlative": "the biggest"
    },

    {
        "word": "small",
        "transcription": "smɔːl",
        "image": "https://images.unsplash.com/photo-1518386395660-44e3fa603770?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "big",
        "oppositeEmoji": "🐘",
        "subtext": "a small flat / a small salary / too small",
        "synonyms": ["little", "tiny"],
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
        "superlative": "the smallest"
    },

    {
        "word": "easy",
        "transcription": "ˈiːzi",
        "image": "https://images.unsplash.com/photo-1503674495707-c14643b62717?auto=format&fit=crop&w=400&q=80",
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
        "superlative": "the easiest"
    },

    {
        "word": "difficult",
        "transcription": "ˈdɪfɪkəlt",
        "image": "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
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
        "superlative": "the most difficult"
    },

    {
        "word": "happy",
        "transcription": "ˈhæpi",
        "image": "https://images.unsplash.com/photo-1523240715630-991b2e8113ee?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "sad",
        "oppositeEmoji": "😢",
        "subtext": "feel happy / happy with something / a happy day",
        "synonyms": ["glad", "joyful", "cheerful"],
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
        "superlative": "the happiest"
    },

    {
        "word": "tired",
        "transcription": "ˈtaɪəd",
        "image": "https://images.unsplash.com/photo-1511216335321-d54049b07c81?auto=format&fit=crop&w=400&q=80",
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
        "superlative": "the most tired"
    },

    {
        "word": "full-time",
        "transcription": "ˌfʊl ˈtaɪm",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": null,
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
        "superlative": null
    },

    {
        "word": "thirsty",
        "transcription": "ˈθɜːsti",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🥤",
        "form": "adjective",
        "opposite": null,
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
        "synonyms": ["parched", "dehydrated"],
        "comparative": "thirstier",
        "superlative": "the thirstiest"
    },

    {
        "word": "part-time",
        "transcription": "ˌpɑːt ˈtaɪm",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": null,
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
        "superlative": null
    },

    {
        "word": "clean",
        "transcription": "kliːn",
        "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80",
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
        "superlative": "the cleanest"
    },

    {
        "word": "healthy",
        "transcription": "ˈhelθi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "superlative": "the healthiest"
    },

    {
        "word": "unhealthy",
        "transcription": "ʌnˈhelθi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍔",
        "form": "adjective",
        "opposite": "healthy",
        "oppositeEmoji": "🥗",
        "subtext": "unhealthy food / unhealthy lifestyle",
        "synonyms": ["ill", "unfit"],
        "definitions": [
            {
                "text": "Not good for your body; not healthy.",
                "examples": [
                    "Fast food is often unhealthy."
                ]
            }
        ],
        "comparative": "more unhealthy",
        "superlative": "the most unhealthy"
    },

    {
        "word": "ill",
        "transcription": "ɪl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": null,
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
        "superlative": "the most ill"
    },

    {
        "word": "online",
        "transcription": "ˌɒnˈlaɪn",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "superlative": "the most online"
    },

    {
        "word": "offline",
        "transcription": "ˌɒfˈlaɪn",
        "image": "https://images.unsplash.com/photo-1496181754124-ed47d9560dac?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📴",
        "form": "adjective",
        "opposite": "online",
        "oppositeEmoji": "🌐",
        "subtext": "work offline / go offline",
        "synonyms": ["disconnected"],
        "definitions": [
            {
                "text": "Not using or connected to the internet.",
                "examples": [
                    "You can read this document offline."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "alone",
        "transcription": "əˈləʊn",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "superlative": "the most alone"
    },

    {
        "word": "relaxed",
        "transcription": "rɪˈlækst",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "worried",
        "oppositeEmoji": "😫",
        "subtext": "feeling relaxed",
        "synonyms": ["calm", "peaceful", "chilled"],
        "definitions": [
            {
                "text": "Calm; not worried or stressed.",
                "examples": [
                    "I feel relaxed at the weekend."
                ]
            }
        ],
        "comparative": "more relaxed",
        "superlative": "the most relaxed"
    },

    {
        "word": "worried",
        "transcription": "ˈwʌrid",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "relaxed",
        "oppositeEmoji": "😌",
        "subtext": "worried about / deeply worried",
        "synonyms": ["anxious", "nervous", "uneasy"],
        "definitions": [
            {
                "text": "Feeling anxious about something that might happen.",
                "examples": [
                    "She is worried about her job."
                ]
            }
        ],
        "comparative": "more worried",
        "superlative": "the most worried"
    },

    {
        "word": "busy",
        "transcription": "ˈbɪzi",
        "image": "https://images.unsplash.com/photo-1519085116126-578304bc2d48?auto=format&fit=crop&w=400&q=80",
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
        "superlative": "the busiest"
    },

    {
        "word": "important",
        "transcription": "ɪmˈpɔːtnt",
        "image": "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "opposite": "unimportant",
        "oppositeEmoji": "🍃",
        "subtext": "important meeting / very important / most important",
        "synonyms": ["essential"],
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
        "superlative": "the most important"
    },

    {
        "word": "unimportant",
        "transcription": "ˌʌnɪmˈpɔːtnt",
        "image": "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🍃",
        "form": "adjective",
        "opposite": "important",
        "oppositeEmoji": "❗",
        "subtext": "unimportant detail / feel unimportant",
        "synonyms": ["minor", "small"],
        "definitions": [
            {
                "text": "Not having great value or effect.",
                "examples": [
                    "It is an unimportant mistake."
                ]
            }
        ],
        "comparative": "more unimportant",
        "superlative": "the most unimportant"
    },

    {
        "word": "red",
        "transcription": "red",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "opposite": null,
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
        "superlative": "the reddest"
    },

    {
        "word": "blue",
        "transcription": "bluː",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "opposite": null,
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
        "superlative": "the bluest"
    },

    {
        "word": "green",
        "transcription": "ɡriːn",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "opposite": null,
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
        "superlative": "the greenest"
    },

    {
        "word": "white",
        "transcription": "waɪt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "opposite": null,
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
        "superlative": "the whitest"
    },

    {
        "word": "black",
        "transcription": "blæk",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "opposite": null,
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
        "superlative": "the blackest"
    },

    {
        "word": "yellow",
        "transcription": "ˈjeləʊ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "opposite": null,
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
        "superlative": "the yellowest"
    },

    {
        "word": "free",
        "transcription": "friː",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "superlative": "the freest"
    },

    {
        "word": "open",
        "transcription": "ˈəʊpən",
        "image": "https://images.unsplash.com/photo-1481273344443-3406e4aef361?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "close",
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
        "superlative": "the openest"
    },

    {
        "word": "closed",
        "transcription": "kləʊzd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "superlative": null
    },

    {
        "word": "large",
        "transcription": "lɑːdʒ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "emoji": "🐘"
    },

    {
        "word": "little",
        "transcription": "ˈlɪtl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "big",
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
        "emoji": "🐭"
    },

    {
        "word": "long",
        "transcription": "lɒŋ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "closed",
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
        "emoji": "📏"
    },

    {
        "word": "high",
        "transcription": "haɪ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "emoji": "🏔️"
    },

    {
        "word": "low",
        "transcription": "ləʊ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "emoji": "⬇️"
    },

    {
        "word": "full",
        "transcription": "fʊl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "emoji": "🥛"
    },

    {
        "word": "empty",
        "transcription": "ˈempti",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "emoji": "🫙"
    },

    {
        "word": "warm",
        "transcription": "wɔːm",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "emoji": "☀️"
    },

    {
        "word": "cool",
        "transcription": "kuːl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "emoji": "🌬️"
    },

    {
        "word": "wet",
        "transcription": "wet",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "emoji": "💦"
    },

    {
        "word": "dry",
        "transcription": "draɪ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "emoji": "🏜️"
    },

    {
        "word": "dirty",
        "transcription": "ˈdɜːti",
        "image": "https://images.unsplash.com/photo-1516585421319-38703b14c114?auto=format&fit=crop&w=400&q=80",
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
        "emoji": "💩"
    },

    {
        "word": "hard",
        "transcription": "hɑːd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "soft",
        "oppositeEmoji": "☁️",
        "subtext": "hard work / a hard decision / too hard",
        "synonyms": ["firm", "solid", "difficult"],
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
        "emoji": "🧱"
    },

    {
        "word": "soft",
        "transcription": "sɒft",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "hard",
        "oppositeEmoji": "🧱",
        "subtext": "soft light / soft music / soft skills",
        "synonyms": ["gentle", "smooth"],
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
        "emoji": "☁️"
    },

    {
        "word": "heavy",
        "transcription": "ˈhevi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "light",
        "oppositeEmoji": "🪶",
        "subtext": "heavy traffic / heavy rain / too heavy",
        "synonyms": ["weighty"],
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
        "emoji": "🏋️"
    },

    {
        "word": "light",
        "transcription": "laɪt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "heavy",
        "oppositeEmoji": "🐘",
        "subtext": "light rain / light traffic / a light meal",
        "synonyms": ["not heavy", "pale"],
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
        "emoji": "🪶"
    },

    {
        "word": "brown",
        "transcription": "braʊn",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
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
        "emoji": "🤎"
    },

    {
        "word": "grey",
        "transcription": "ɡreɪ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
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
        "emoji": "🩶"
    },

    {
        "word": "pink",
        "transcription": "pɪŋk",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
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
        "emoji": "🩷"
    },

    {
        "word": "orange",
        "transcription": "ˈɒrɪndʒ",
        "image": "https://images.unsplash.com/photo-1582979512210-9976f51fe56e?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
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
        "emoji": "🧡"
    },

    {
        "word": "great",
        "transcription": "ɡreɪt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "😫",
        "subtext": "a great idea / a great opportunity / great value",
        "synonyms": ["excellent", "big"],
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
        "emoji": "🌟"
    },

    {
        "word": "nice",
        "transcription": "naɪs",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😠",
        "subtext": "a nice day / a nice place / a nice person",
        "synonyms": ["pleasant", "kind"],
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
        "emoji": "😊"
    },

    {
        "word": "wonderful",
        "transcription": "ˈwʌndəfl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤮",
        "subtext": "a wonderful opportunity / a wonderful time",
        "synonyms": ["amazing", "great"],
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
        "emoji": "🌈"
    },

    {
        "word": "terrible",
        "transcription": "ˈterəbl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🌟",
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "synonyms": ["awful", "very bad"],
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
        "emoji": "🤮"
    },

    {
        "word": "awful",
        "transcription": "ˈɔːfl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🌈",
        "subtext": "awful weather / awful news / simply awful",
        "synonyms": ["terrible", "very bad"],
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
        "emoji": "💩"
    },

    {
        "word": "amazing",
        "transcription": "əˈmeɪzɪŋ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😐",
        "subtext": "an amazing result / an amazing offer / truly amazing",
        "synonyms": ["wonderful", "fantastic"],
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
        "emoji": "🤩"
    },

    {
        "word": "fantastic",
        "transcription": "fænˈtæstɪk",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😫",
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
        "synonyms": ["excellent", "great"],
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
        "emoji": "🔥"
    },

    {
        "word": "sad",
        "transcription": "sæd",
        "image": "https://images.unsplash.com/photo-1516589222303-1d02fe1f9744?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "happy",
        "oppositeEmoji": "😊",
        "subtext": "feel sad / a sad situation / deeply sad",
        "synonyms": ["unhappy", "miserable", "gloomy"],
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
        "emoji": "😢"
    },

    {
        "word": "hungry",
        "transcription": "ˈhʌŋɡri",
        "image": "https://images.unsplash.com/photo-1550547660-5945a1713574?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤰",
        "subtext": "feel hungry / very hungry / go hungry",
        "synonyms": ["starving", "famished"],
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
        "emoji": "🍔"
    },

    {
        "word": "angry",
        "transcription": "ˈæŋɡri",
        "image": "https://images.unsplash.com/photo-1516244439604-ed13c8e70924?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😌",
        "subtext": "feel angry / angry with someone / very angry",
        "synonyms": ["mad", "furious", "annoyed"],
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
        "emoji": "😠"
    },

    {
        "word": "bored",
        "transcription": "bɔːd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🧐",
        "subtext": "feel bored / bored with / easily bored",
        "synonyms": ["uninterested", "weary"],
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
        "emoji": "😴"
    },

    {
        "word": "excited",
        "transcription": "ɪkˈsaɪtɪd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "opposite": null,
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
        "emoji": "🤩"
    },

    {
        "word": "afraid",
        "transcription": "əˈfreɪd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "brave",
        "oppositeEmoji": "🦁",
        "subtext": "afraid of / feel afraid / deeply afraid",
        "synonyms": ["scared", "frightened", "terrified"],
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
        "emoji": "😨"
    },

    {
        "word": "sorry",
        "transcription": "ˈsɒri",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
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
        "emoji": "🙏"
    },

    {
        "word": "right",
        "transcription": "raɪt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
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
        "emoji": "✅"
    },

    {
        "word": "left",
        "transcription": "left",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "subtext": "left hand / left side",
        "opposite": null,
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
        "emoji": "⬅️"
    },

    {
        "word": "wrong",
        "transcription": "rɒŋ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "right",
        "oppositeEmoji": "✅",
        "subtext": "wrong answer / go wrong / completely wrong",
        "synonyms": ["incorrect"],
        "definitions": [
            {
                "text": "Not correct; not suitable.",
                "examples": [
                    "That was the wrong decision."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more wrong",
        "superlative": "the most wrong",
        "emoji": "❌"
    },

    {
        "word": "new",
        "transcription": "njuː",
        "image": "https://images.unsplash.com/photo-1515378814249-df6ee2a10403?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "old",
        "oppositeEmoji": "👴",
        "subtext": "new job / brand new / completely new",
        "synonyms": ["modern", "recently made"],
        "definitions": [
            {
                "text": "Not existing before; recently made.",
                "examples": [
                    "She has a new job starting in March."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "newer",
        "superlative": "the newest",
        "emoji": "🆕"
    },

    {
        "word": "different",
        "transcription": "ˈdɪfrənt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "👯",
        "subtext": "completely different / very different / different from",
        "synonyms": ["not the same"],
        "definitions": [
            {
                "text": "Not the same as another.",
                "examples": [
                    "This job is very different from my last one."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more different",
        "superlative": "the most different",
        "emoji": "🌓"
    },

    {
        "word": "same",
        "transcription": "seɪm",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🌓",
        "subtext": "the same as / exactly the same / same time",
        "synonyms": ["identical"],
        "definitions": [
            {
                "text": "Not different; identical.",
                "examples": [
                    "They earn the same salary."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "emoji": "👯"
    },

    {
        "word": "fast",
        "transcription": "fɑːst",
        "image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "slow",
        "oppositeEmoji": "🐢",
        "subtext": "fast food / fast train / very fast",
        "synonyms": ["quick", "rapid"],
        "definitions": [
            {
                "text": "Moving or happening quickly.",
                "examples": [
                    "The train to work is fast and reliable."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "faster",
        "superlative": "the fastest",
        "emoji": "🏎️"
    },

    {
        "word": "slow",
        "transcription": "sləʊ",
        "image": "https://images.unsplash.com/photo-1516589222303-1d02fe1f9744?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "fast",
        "oppositeEmoji": "🏎️",
        "subtext": "slow progress / slow internet / very slow",
        "synonyms": ["leisurely"],
        "definitions": [
            {
                "text": "Not fast; taking a long time.",
                "examples": [
                    "The new system is very slow."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "slower",
        "superlative": "the slowest",
        "emoji": "🐢"
    },

    {
        "word": "quiet",
        "transcription": "ˈkwaɪət",
        "image": "https://images.unsplash.com/photo-1505693419148-4034b9fd3fa2?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "loud",
        "oppositeEmoji": "📢",
        "subtext": "quiet area / keep quiet / nice and quiet",
        "synonyms": ["silent", "peaceful"],
        "definitions": [
            {
                "text": "Making little or no noise; peaceful.",
                "examples": [
                    "The office is quiet at lunchtime."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "quieter",
        "superlative": "the quietest",
        "emoji": "🤫"
    },

    {
        "word": "loud",
        "transcription": "laʊd",
        "image": "https://images.unsplash.com/photo-1593359677827-08b4bad53abc?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "quiet",
        "oppositeEmoji": "🤫",
        "subtext": "loud noise / too loud / a loud voice",
        "synonyms": ["noisy"],
        "definitions": [
            {
                "text": "Making a lot of noise.",
                "examples": [
                    "The open-plan office is too loud."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "louder",
        "superlative": "the loudest",
        "emoji": "📢"
    },

    {
        "word": "safe",
        "transcription": "seɪf",
        "image": "https://images.unsplash.com/photo-1511405969245-0adb421a7a78?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "dangerous",
        "oppositeEmoji": "🧨",
        "subtext": "safe area / safe to do / feel safe",
        "synonyms": ["secure"],
        "definitions": [
            {
                "text": "Not dangerous; protected from harm.",
                "examples": [
                    "This neighbourhood is very safe."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "safer",
        "superlative": "the safest",
        "emoji": "🛡️"
    },

    {
        "word": "dangerous",
        "transcription": "ˈdeɪndʒərəs",
        "image": "https://images.unsplash.com/photo-1501191234981-83c8c95a28c3?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "form": "adjective",
        "opposite": "safe",
        "oppositeEmoji": "🛡️",
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "synonyms": ["risky"],
        "definitions": [
            {
                "text": "Likely to cause harm.",
                "examples": [
                    "The commute on that road is dangerous."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "more dangerous",
        "superlative": "the most dangerous",
        "emoji": "🧨"
    },

    {
        "word": "unhappy",
        "transcription": "ʌnˈhæpi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😊",
        "subtext": "feel unhappy / very unhappy / unhappy about",
        "synonyms": ["sad", "miserable"],
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
        "emoji": "😢"
    },

    {
        "word": "nervous",
        "transcription": "ˈnɜːvəs",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🦁",
        "subtext": "feel nervous / nervous about / very nervous",
        "synonyms": ["anxious", "worried"],
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
        "emoji": "😟"
    },

    {
        "word": "proud",
        "transcription": "praʊd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤦",
        "definitions": [
            {
                "text": "Feeling pleased about an achievement.",
                "examples": [
                    "He was proud to get his first promotion."
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of",
        "synonyms": ["pleased", "satisfied"],
        "comparative": "prouder",
        "superlative": "the proudest",
        "emoji": "🤳"
    },

    {
        "word": "scared",
        "transcription": "skeəd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🦁",
        "definitions": [
            {
                "text": "Feeling fear about something.",
                "examples": [
                    "She was scared about giving the presentation."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared",
        "synonyms": ["afraid", "frightened"],
        "comparative": "more scared",
        "superlative": "the most scared",
        "emoji": "😨"
    },

    {
        "word": "surprised",
        "transcription": "səˈpraɪzd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😐",
        "definitions": [
            {
                "text": "Feeling shock at something unexpected.",
                "examples": [
                    "He was surprised to get a pay rise."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "synonyms": ["amazed", "astonished"],
        "comparative": "more surprised",
        "superlative": "the most surprised",
        "emoji": "😲"
    },

    {
        "word": "disappointed",
        "transcription": "ˌdɪsəˈpɔɪntɪd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😌",
        "definitions": [
            {
                "text": "Feeling sad because something was not as good as expected.",
                "examples": [
                    "She was disappointed not to get the job."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "synonyms": ["sad", "let down"],
        "comparative": "more disappointed",
        "superlative": "the most disappointed",
        "emoji": "😞"
    },

    {
        "word": "beautiful",
        "transcription": "ˈbjuːtɪfl",
        "image": "https://images.unsplash.com/photo-1469334031205-76abc0010d0d?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "ugly",
        "oppositeEmoji": "👹",
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
        "emoji": "✨"
    },

    {
        "word": "pretty",
        "transcription": "ˈprɪti",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "👹",
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
        "emoji": "🌸"
    },

    {
        "word": "strong",
        "transcription": "strɒŋ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "weak",
        "oppositeEmoji": "🍃",
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
        "emoji": "🏋️"
    },

    {
        "word": "weak",
        "transcription": "wiːk",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "strong",
        "oppositeEmoji": "🏋️",
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
        "emoji": "🥀"
    },

    {
        "word": "fit",
        "transcription": "fɪt",
        "image": "https://images.unsplash.com/photo-1539091112267-ccaf41743513?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🛋️",
        "definitions": [
            {
                "text": "In good physical condition through exercise.",
                "examples": [
                    "She keeps fit by cycling to work every day."
                ]
            }
        ],
        "subtext": "physically fit / stay fit / keep fit",
        "synonyms": ["healthy", "in shape"],
        "comparative": "fitter",
        "superlative": "the fittest",
        "emoji": "🏋️"
    },

    {
        "word": "unfit",
        "transcription": "ʌnˈfɪt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🛋️",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🏋️",
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
        "superlative": "the most unfit"
    },

    {
        "word": "perfect",
        "transcription": "ˈpɜːfɪkt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🩹",
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
        "emoji": "💯"
    },

    {
        "word": "correct",
        "transcription": "kəˈrekt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "incorrect",
        "oppositeEmoji": "❌",
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
        "emoji": "✅"
    },

    {
        "word": "interesting",
        "transcription": "ˈɪntrəstɪŋ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "boring",
        "oppositeEmoji": "😴",
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
        "emoji": "🧐"
    },

    {
        "word": "boring",
        "transcription": "ˈbɔːrɪŋ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "interesting",
        "oppositeEmoji": "🤩",
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
        "emoji": "😴"
    },

    {
        "word": "special",
        "transcription": "ˈspeʃl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😐",
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
        "emoji": "💎"
    },

    {
        "word": "friendly",
        "transcription": "ˈfrendli",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😠",
        "definitions": [
            {
                "text": "Kind and pleasant; easy to talk to.",
                "examples": [
                    "The new manager is very friendly and approachable."
                ]
            }
        ],
        "subtext": "very friendly / a friendly face / friendly atmosphere",
        "synonyms": ["kind", "pleasant"],
        "comparative": "more friendly",
        "superlative": "the most friendly",
        "emoji": "👋"
    },

    {
        "word": "kind",
        "transcription": "kaɪnd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🥀",
        "definitions": [
            {
                "text": "Caring and generous to others.",
                "examples": [
                    "She is kind to everyone in the office."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person",
        "synonyms": ["caring", "generous"],
        "comparative": "kinder",
        "superlative": "the kindest",
        "emoji": "🤝"
    },

    {
        "word": "unkind",
        "transcription": "ʌnˈkaɪnd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🥀",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤝",
        "subtext": "unkind words / be unkind",
        "synonyms": ["mean", "cruel"],
        "definitions": [
            {
                "text": "Not kind; mean.",
                "examples": [
                    "It was unkind to say those things."
                ]
            }
        ],
        "comparative": "more unkind",
        "superlative": "the most unkind"
    },

    {
        "word": "funny",
        "transcription": "ˈfʌni",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😐",
        "definitions": [
            {
                "text": "Making people laugh; humorous.",
                "examples": [
                    "He has a funny way of explaining complex ideas."
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny",
        "synonyms": ["humorous", "amusing"],
        "comparative": "funnier",
        "superlative": "the funniest",
        "emoji": "😂"
    },

    {
        "word": "clever",
        "transcription": "ˈklevə(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤡",
        "definitions": [
            {
                "text": "Intelligent; quick to understand.",
                "examples": [
                    "She is a clever negotiator."
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough",
        "synonyms": ["intelligent", "smart"],
        "comparative": "cleverer",
        "superlative": "the cleverest",
        "emoji": "🎓"
    },

    {
        "word": "polite",
        "transcription": "pəˈlaɪt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😛",
        "definitions": [
            {
                "text": "Behaving in a respectful and courteous way.",
                "examples": [
                    "He is always polite with clients."
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough",
        "synonyms": ["respectful"],
        "comparative": "more polite",
        "superlative": "the most polite",
        "emoji": "🙏"
    },

    {
        "word": "rude",
        "transcription": "ruːd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤝",
        "definitions": [
            {
                "text": "Not polite; showing a lack of respect.",
                "examples": [
                    "That email was quite rude and unprofessional."
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude",
        "synonyms": ["impolite", "disrespectful"],
        "comparative": "ruder",
        "superlative": "the rudest",
        "emoji": "😛"
    },

    {
        "word": "lazy",
        "transcription": "ˈleɪzi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🐝",
        "definitions": [
            {
                "text": "Not willing to work or use effort.",
                "examples": [
                    "He has a reputation for being lazy with follow-ups."
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy",
        "synonyms": ["idle"],
        "comparative": "lazier",
        "superlative": "the laziest",
        "emoji": "🛋️"
    },

    {
        "word": "honest",
        "transcription": "ˈɒnɪst",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤥",
        "definitions": [
            {
                "text": "Telling the truth; not deceiving.",
                "examples": [
                    "She is known for being completely honest with clients."
                ]
            }
        ],
        "subtext": "very honest / brutally honest / completely honest",
        "synonyms": ["truthful"],
        "comparative": "more honest",
        "superlative": "the most honest",
        "emoji": "⚖️"
    },

    {
        "word": "noisy",
        "transcription": "ˈnɔɪzi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤫",
        "definitions": [
            {
                "text": "Making a lot of sound; loud.",
                "examples": [
                    "The open plan office is very noisy."
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy",
        "synonyms": ["loud"],
        "comparative": "noisier",
        "superlative": "the noisiest",
        "emoji": "📢"
    },

    {
        "word": "round",
        "transcription": "raʊnd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⭕",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "⬛",
        "subtext": "a round table / round shape",
        "synonyms": ["circular"],
        "definitions": [
            {
                "text": "Shaped like a circle.",
                "examples": [
                    "The table is round."
                ]
            }
        ],
        "comparative": "rounder",
        "superlative": "the roundest"
    },

    {
        "word": "square",
        "transcription": "skweə(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⬛",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "⭕",
        "subtext": "a square box / square shape",
        "synonyms": ["four-sided"],
        "definitions": [
            {
                "text": "Having four equal sides and four 90-degree angles.",
                "examples": [
                    "The box is square."
                ]
            }
        ],
        "comparative": "squarer",
        "superlative": "the squarest"
    },

    {
        "word": "helpful",
        "transcription": "ˈhelpfl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤝",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😠",
        "subtext": "very helpful / a helpful person",
        "synonyms": ["useful", "kind"],
        "definitions": [
            {
                "text": "Willing to help other people.",
                "examples": [
                    "My colleagues are very helpful."
                ]
            }
        ],
        "comparative": "more helpful",
        "superlative": "the most helpful"
    },

    {
        "word": "unhelpful",
        "transcription": "ʌnˈhelpfl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😠",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤝",
        "subtext": "unhelpful advice / very unhelpful",
        "synonyms": ["useless"],
        "definitions": [
            {
                "text": "Not helping in a situation.",
                "examples": [
                    "The staff were quite unhelpful when I asked for directions."
                ]
            }
        ],
        "comparative": "more unhelpful",
        "superlative": "the most unhelpful"
    },

    {
        "word": "patient",
        "transcription": "ˈpeɪʃnt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🧘",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "⌚",
        "subtext": "be patient / a patient teacher",
        "synonyms": ["calm", "tolerant"],
        "definitions": [
            {
                "text": "Able to wait for a long time without becoming angry.",
                "examples": [
                    "You need to be patient with new students."
                ]
            }
        ],
        "comparative": "more patient",
        "superlative": "the most patient"
    },

    {
        "word": "active",
        "transcription": "ˈæktɪv",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🛋️",
        "subtext": "an active lifestyle / very active",
        "synonyms": ["energetic", "busy"],
        "definitions": [
            {
                "text": "Doing a lot of things; busy.",
                "examples": [
                    "He is a very active person."
                ]
            }
        ],
        "comparative": "more active",
        "superlative": "the most active"
    },

    {
        "word": "careful",
        "transcription": "ˈkeəfl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⚠️",
        "form": "adjective",
        "opposite": null,
        "subtext": "be careful / careful planning",
        "synonyms": ["cautious"],
        "definitions": [
            {
                "text": "Giving a lot of attention to what you are doing so that you do not have an accident or make a mistake.",
                "examples": [
                    "Be careful when you drive."
                ]
            }
        ],
        "comparative": "more careful",
        "superlative": "the most careful"
    },

    {
        "word": "creative",
        "transcription": "kriˈeɪtɪv",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🎨",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😐",
        "subtext": "very creative / creative ideas",
        "synonyms": ["imaginative", "artistic"],
        "definitions": [
            {
                "text": "Good at thinking of new ideas or making things.",
                "examples": [
                    "She is a very creative designer."
                ]
            }
        ],
        "comparative": "more creative",
        "superlative": "the most creative"
    },

    {
        "word": "cloudy",
        "transcription": "ˈklaʊdi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☁️",
        "form": "adjective",
        "opposite": "sunny",
        "oppositeEmoji": "☀️",
        "subtext": "a cloudy sky / cloudy weather",
        "synonyms": ["overcast"],
        "definitions": [
            {
                "text": "With many clouds in the sky.",
                "examples": [
                    "It is a cloudy day."
                ]
            }
        ],
        "comparative": "cloudier",
        "superlative": "the cloudiest"
    },

    {
        "word": "windy",
        "transcription": "ˈwɪndi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "💨",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😌",
        "subtext": "a windy day / very windy",
        "synonyms": ["breezy"],
        "definitions": [
            {
                "text": "With a lot of wind.",
                "examples": [
                    "It is very windy today."
                ]
            }
        ],
        "comparative": "windier",
        "superlative": "the windiest"
    },

    {
        "word": "snowy",
        "transcription": "ˈsnəʊi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "☀️",
        "subtext": "snowy mountains / a snowy winter",
        "synonyms": ["covered in snow"],
        "definitions": [
            {
                "text": "With a lot of snow.",
                "examples": [
                    "We have snowy weather in January."
                ]
            }
        ],
        "comparative": "snowier",
        "superlative": "the snowiest"
    },

    {
        "word": "foggy",
        "transcription": "ˈfɒɡi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌫️",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "💎",
        "subtext": "foggy morning / very foggy",
        "synonyms": ["misty"],
        "definitions": [
            {
                "text": "With a lot of fog; difficult to see.",
                "examples": [
                    "It is foggy this morning."
                ]
            }
        ],
        "comparative": "foggier",
        "superlative": "the foggiest"
    },

    {
        "word": "stormy",
        "transcription": "ˈstɔːmi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "⛈️",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😌",
        "subtext": "stormy weather / a stormy night",
        "synonyms": ["rough"],
        "definitions": [
            {
                "text": "With a lot of rain and strong winds.",
                "examples": [
                    "It was a stormy night."
                ]
            }
        ],
        "comparative": "stormier",
        "superlative": "the stormiest"
    },

    {
        "word": "blonde",
        "transcription": "blɒnd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "👩🏻",
        "subtext": "blonde hair / a blonde woman",
        "synonyms": ["fair-haired"],
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
        "emoji": "👱‍♀️"
    },

    {
        "word": "smart",
        "transcription": "smɑːt",
        "image": "https://images.unsplash.com/photo-1523050889943-07cb5015a774?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤡",
        "subtext": "a smart student / smart clothes",
        "synonyms": ["intelligent", "clever"],
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
        "emoji": "🎓"
    },

    {
        "word": "serious",
        "transcription": "ˈsɪəriəs",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😂",
        "subtext": "a serious person / look serious",
        "synonyms": ["solemn", "sensible"],
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
        "emoji": "😐"
    },

    {
        "word": "ugly",
        "transcription": "ˈʌɡli",
        "image": "https://images.unsplash.com/photo-1501191234981-83c8c95a28c3?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "form": "adjective",
        "opposite": "beautiful",
        "oppositeEmoji": "✨",
        "subtext": "ugly building / ugly duckling",
        "synonyms": ["unattractive"],
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
        "emoji": "👹"
    },

    {
        "word": "near",
        "transcription": "nɪə(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "distance_A1",
        "form": "adjective",
        "opposite": "far",
        "oppositeEmoji": "🔭",
        "subtext": "near here / near the station",
        "synonyms": ["close"],
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
        "emoji": "📍"
    },

    {
        "word": "far",
        "transcription": "fɑː(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "distance_A1",
        "form": "adjective",
        "opposite": "near",
        "oppositeEmoji": "📍",
        "subtext": "far away / far from",
        "synonyms": ["distant"],
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
        "emoji": "🔭"
    },

    {
        "word": "rich",
        "transcription": "rɪtʃ",
        "image": "https://images.unsplash.com/photo-1553729450-990a4fa52899?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "adjective",
        "opposite": "poor",
        "oppositeEmoji": "🏚️",
        "subtext": "rich man / rich country / very rich",
        "synonyms": ["wealthy"],
        "definitions": [
            {
                "text": "Having a lot of money.",
                "examples": [
                    "He is a very rich man."
                ]
            }
        ],
        "comparative": "richer",
        "superlative": "the richest"
    },

    {
        "word": "poor",
        "transcription": "pɔː(r)",
        "image": "https://images.unsplash.com/photo-1516585421319-38703b14c114?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "🏚️",
        "form": "adjective",
        "opposite": "rich",
        "oppositeEmoji": "💰",
        "subtext": "poor family / feel poor",
        "synonyms": ["broke", "impoverished"],
        "definitions": [
            {
                "text": "Having very little money.",
                "examples": [
                    "They are poor but happy."
                ]
            }
        ],
        "comparative": "poorer",
        "superlative": "the poorest"
    },

    {
        "word": "early",
        "transcription": "ˈɜːli",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌅",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🌙",
        "subtext": "early morning / early riser",
        "synonyms": ["soon"],
        "definitions": [
            {
                "text": "Happening or arriving before the usual or expected time.",
                "examples": [
                    "I had an early breakfast."
                ]
            }
        ],
        "comparative": "earlier",
        "superlative": "the earliest"
    },

    {
        "word": "late",
        "transcription": "leɪt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌙",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🌅",
        "subtext": "late night / too late",
        "synonyms": ["tardy"],
        "definitions": [
            {
                "text": "Happening or arriving after the usual or expected time.",
                "examples": [
                    "I had a late dinner."
                ]
            }
        ],
        "comparative": "later",
        "superlative": "the latest"
    },

    {
        "word": "hardworking",
        "transcription": "ˌhɑːdˈwɜːkɪŋ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🐝",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🛋️",
        "subtext": "a hardworking student / very hardworking",
        "synonyms": ["diligent", "busy"],
        "definitions": [
            {
                "text": "Putting a lot of effort into work.",
                "examples": [
                    "She is a very hardworking manager."
                ]
            }
        ],
        "comparative": "more hardworking",
        "superlative": "the most hardworking"
    },

    {
        "word": "exciting",
        "transcription": "ɪkˈsaɪtɪŋ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "🤩",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😴",
        "subtext": "an exciting trip / very exciting",
        "synonyms": ["thrilling", "interesting"],
        "definitions": [
            {
                "text": "Making you feel very happy and enthusiastic.",
                "examples": [
                    "It was an exciting game."
                ]
            }
        ],
        "comparative": "more exciting",
        "superlative": "the most exciting"
    },

    {
        "word": "delicious",
        "transcription": "dɪˈlɪʃəs",
        "image": "https://images.unsplash.com/photo-1567622238-dce2632070c7?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "😋",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤢",
        "subtext": "delicious meal / smell delicious",
        "synonyms": ["tasty", "yummy"],
        "definitions": [
            {
                "text": "Having a very pleasant taste or smell.",
                "examples": [
                    "The food is delicious."
                ]
            }
        ],
        "comparative": "more delicious",
        "superlative": "the most delicious"
    },

    {
        "word": "sweet",
        "transcription": "swiːt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🍬",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🍋",
        "subtext": "sweet fruit / sweet tooth / very sweet",
        "synonyms": ["sugary"],
        "definitions": [
            {
                "text": "Having a taste like sugar.",
                "examples": [
                    "I like sweet things."
                ]
            }
        ],
        "comparative": "sweeter",
        "superlative": "the sweetest"
    },

    {
        "word": "comfortable",
        "transcription": "ˈkʌmftəbl",
        "image": "https://images.unsplash.com/photo-1505693419148-4034b9fd3fa2?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🛋️",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🪑",
        "subtext": "a comfortable chair / feel comfortable",
        "synonyms": ["relaxed", "cozy"],
        "definitions": [
            {
                "text": "Making you feel physically relaxed, without any pain or without being too hot, cold, etc.",
                "examples": [
                    "This chair is very comfortable."
                ]
            }
        ],
        "comparative": "more comfortable",
        "superlative": "the most comfortable"
    },

    {
        "word": "uncomfortable",
        "transcription": "ʌnˈkʌmftəbl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🛋️",
        "subtext": "feel uncomfortable / uncomfortable chair",
        "synonyms": ["awkward", "painful"],
        "definitions": [
            {
                "text": "Not comfortable; causing physical pain or feeling awkward.",
                "examples": [
                    "This chair is very uncomfortable."
                ]
            }
        ],
        "comparative": "more uncomfortable",
        "superlative": "the most uncomfortable"
    },

    {
        "word": "real",
        "transcription": "rɪəl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🎭",
        "subtext": "a real person / is it real?",
        "synonyms": ["true", "authentic"],
        "definitions": [
            {
                "text": "Actually existing or happening; not false.",
                "examples": [
                    "Is this a real diamond?"
                ]
            }
        ],
        "comparative": "more real",
        "superlative": "the most real"
    },

    {
        "word": "simple",
        "transcription": "ˈsɪmpl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🧩",
        "subtext": "a simple question / nice and simple",
        "synonyms": ["easy", "basic"],
        "definitions": [
            {
                "text": "Easy to understand or do; not complex.",
                "examples": [
                    "This is a simple problem."
                ]
            }
        ],
        "comparative": "simpler",
        "superlative": "the simplest"
    },

    {
        "word": "natural",
        "transcription": "ˈnætʃrəl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌱",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤖",
        "subtext": "natural light / natural products",
        "synonyms": ["nature-made"],
        "definitions": [
            {
                "text": "Existing in nature; not made or caused by people.",
                "examples": [
                    "I prefer natural products."
                ]
            }
        ],
        "comparative": "more natural",
        "superlative": "the most natural"
    },

    {
        "word": "clear",
        "transcription": "klɪə(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💧",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🌫️",
        "subtext": "a clear sky",
        "synonyms": ["obvious", "transparent", "speak clearly"],
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
        "superlative": "the clearest"
    },

    {
        "word": "common",
        "transcription": "ˈkɒmən",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🔄",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "💎",
        "subtext": "a common problem",
        "synonyms": ["usual", "frequent", "shared by all"],
        "definitions": [
            {
                "text": "Happening often; shared by many people.",
                "examples": [
                    "It is a common mistake."
                ]
            }
        ],
        "comparative": "commoner",
        "superlative": "the commonest"
    },

    {
        "word": "famous",
        "transcription": "ˈfeɪməs",
        "image": "https://images.unsplash.com/photo-1501191234981-83c8c95a28c3?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "👤",
        "subtext": "a famous person / become famous",
        "synonyms": ["well-known", "popular"],
        "definitions": [
            {
                "text": "Known by many people.",
                "examples": [
                    "He is a famous actor."
                ]
            }
        ],
        "comparative": "more famous",
        "superlative": "the most famous"
    },

    {
        "word": "salty",
        "transcription": "ˈsɔːlti",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🧂",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🍬",
        "subtext": "salty snacks / too salty",
        "synonyms": ["tasting of salt"],
        "definitions": [
            {
                "text": "Containing or tasting of salt.",
                "examples": [
                    "The popcorn is very salty."
                ]
            }
        ],
        "comparative": "saltier",
        "superlative": "the saltiest"
    },

    {
        "word": "sour",
        "transcription": "ˈsaʊə(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🍋",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🍬",
        "subtext": "a sour taste / sour lemons",
        "synonyms": ["sharp-tasting"],
        "definitions": [
            {
                "text": "Having a sharp taste like that of a lemon.",
                "examples": [
                    "Lemons are sour."
                ]
            }
        ],
        "comparative": "sourer",
        "superlative": "the sourest"
    },

    {
        "word": "bitter",
        "transcription": "ˈbɪtə(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "☕",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🍬",
        "subtext": "a bitter taste / bitter coffee",
        "synonyms": ["strong", "sharp"],
        "definitions": [
            {
                "text": "Having a strong sharp taste that is not sweet.",
                "examples": [
                    "This coffee is very bitter."
                ]
            }
        ],
        "comparative": "bitterer",
        "superlative": "the bitterest"
    },

    {
        "word": "fat",
        "transcription": "fæt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🍔",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🥬",
        "subtext": "a fat cat",
        "synonyms": ["overweight", "gain weight"],
        "definitions": [
            {
                "text": "Having a lot of extra flesh on your body.",
                "examples": [
                    "The cat is fat because it eats a lot."
                ]
            }
        ],
        "comparative": "fatter",
        "superlative": "the fattest"
    },

    {
        "word": "thin",
        "transcription": "θɪn",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🥬",
        "form": "adjective",
        "opposite": "thick",
        "oppositeEmoji": "🍔",
        "subtext": "he is thin / thin legs",
        "synonyms": ["slim", "skinny"],
        "definitions": [
            {
                "text": "Having very little extra flesh on your body.",
                "examples": [
                    "He is very tall and thin."
                ]
            }
        ],
        "comparative": "thinner",
        "superlative": "the thinnest"
    },

    {
        "word": "curly",
        "transcription": "ˈkɜːli",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🌀",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "📏",
        "subtext": "curly hair / short curly hair",
        "synonyms": ["wavy"],
        "definitions": [
            {
                "text": "Having curls or a curved shape.",
                "examples": [
                    "She has curly brown hair."
                ]
            }
        ],
        "comparative": "curlier",
        "superlative": "the curliest"
    },

    {
        "word": "straight",
        "transcription": "streɪt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "📏",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🌀",
        "subtext": "straight hair / long straight hair",
        "synonyms": ["not curly"],
        "definitions": [
            {
                "text": "Not curving or bending.",
                "examples": [
                    "He has straight black hair."
                ]
            }
        ],
        "comparative": "straighter",
        "superlative": "the straightest"
    },

    {
        "word": "triangular",
        "transcription": "traɪˈæŋɡjələ(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🔺",
        "form": "adjective",
        "opposite": null,
        "subtext": "a triangular shape",
        "synonyms": ["three-sided"],
        "definitions": [
            {
                "text": "Shaped like a triangle.",
                "examples": [
                    "The sign is triangular."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "rectangular",
        "transcription": "rekˈtæŋɡjələ(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "▭",
        "form": "adjective",
        "opposite": null,
        "subtext": "a rectangular room",
        "synonyms": ["four-sided"],
        "definitions": [
            {
                "text": "Shaped like a rectangle.",
                "examples": [
                    "We have a rectangular table in the kitchen."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "oval",
        "transcription": "ˈəʊvl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🥚",
        "form": "adjective",
        "opposite": null,
        "subtext": "an oval mirror",
        "synonyms": ["egg-shaped"],
        "definitions": [
            {
                "text": "Shaped like an egg.",
                "examples": [
                    "The mirror is oval."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "favourite",
        "transcription": "ˈfeɪvərɪt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⭐",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😡",
        "subtext": "my favourite film / favourite food",
        "synonyms": ["preferred"],
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
        "superlative": null
    },

    {
        "word": "dark",
        "transcription": "dɑːk",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌑",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "💡",
        "subtext": "dark blue / a dark night",
        "synonyms": ["not light"],
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
        "superlative": "the darkest"
    },

    {
        "word": "bright",
        "transcription": "braɪt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💡",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🌑",
        "subtext": "bright colors / a bright day",
        "synonyms": ["shining", "light"],
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
        "superlative": "the brightest"
    },

    {
        "word": "gold",
        "transcription": "ɡəʊld",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟡",
        "form": "adjective",
        "opposite": null,
        "subtext": "a gold ring / gold medal",
        "synonyms": ["golden"],
        "definitions": [
            {
                "text": "Having the color of gold.",
                "examples": [
                    "She has a gold watch."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "silver",
        "transcription": "ˈsɪlvə(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⚪",
        "form": "adjective",
        "opposite": null,
        "subtext": "a silver car / silver jewelry",
        "synonyms": ["silvery"],
        "definitions": [
            {
                "text": "Having the color of silver.",
                "examples": [
                    "He has a silver car."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "deep",
        "transcription": "diːp",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🕳️",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "📏",
        "subtext": "deep water / a deep hole",
        "synonyms": ["bottomless"],
        "definitions": [
            {
                "text": "Going a long way from the top or surface to the bottom.",
                "examples": [
                    "The river is very deep here."
                ]
            }
        ],
        "comparative": "deeper",
        "superlative": "the deepest"
    },

    {
        "word": "shallow",
        "transcription": "ˈʃæləʊ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🕳️",
        "subtext": "shallow water / a shallow end",
        "synonyms": ["not deep"],
        "definitions": [
            {
                "text": "Having only a short distance from the top to the bottom.",
                "examples": [
                    "The water is shallow, so we can walk across."
                ]
            }
        ],
        "comparative": "shallower",
        "superlative": "the shallowest"
    },

    {
        "word": "modern",
        "transcription": "ˈmɒdn",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏙️",
        "form": "adjective",
        "opposite": "ancient",
        "oppositeEmoji": "🏛️",
        "subtext": "a modern building / modern life",
        "synonyms": ["contemporary", "new"],
        "definitions": [
            {
                "text": "Designed and made using the most recent ideas and methods.",
                "examples": [
                    "They live in a modern house."
                ]
            }
        ],
        "comparative": "more modern",
        "superlative": "the most modern"
    },

    {
        "word": "ancient",
        "transcription": "ˈeɪnʃənt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏛️",
        "form": "adjective",
        "opposite": "modern",
        "oppositeEmoji": "🏙️",
        "subtext": "ancient history / an ancient city",
        "synonyms": ["very old", "antique"],
        "definitions": [
            {
                "text": "From a long time ago; very old.",
                "examples": [
                    "We visited an ancient city in Greece."
                ]
            }
        ],
        "comparative": "more ancient",
        "superlative": "the most ancient"
    },

    {
        "word": "brave",
        "transcription": "breɪv",
        "image": "https://images.unsplash.com/photo-1511405969245-0adb421a7a78?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🦁",
        "form": "adjective",
        "opposite": "afraid",
        "oppositeEmoji": "😨",
        "subtext": "a brave soldier / be brave",
        "synonyms": ["courageous"],
        "definitions": [
            {
                "text": "Willing to do things that are dangerous, and does not show fear in difficult situations.",
                "examples": [
                    "The firefighter was very brave."
                ]
            }
        ],
        "comparative": "braver",
        "superlative": "the bravest"
    },

    {
        "word": "cowardly",
        "transcription": "ˈkaʊədli",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🦁",
        "subtext": "a cowardly act / don't be cowardly",
        "synonyms": ["fearful"],
        "definitions": [
            {
                "text": "Not brave.",
                "examples": [
                    "He was too cowardly to tell the truth."
                ]
            }
        ],
        "comparative": "more cowardly",
        "superlative": "the most cowardly"
    },

    {
        "word": "wide",
        "transcription": "waɪd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_measurements_A1",
        "emoji": "↔️",
        "form": "adjective",
        "opposite": "narrow",
        "oppositeEmoji": "⬇️",
        "subtext": "a wide road / wide open",
        "synonyms": ["broad"],
        "definitions": [
            {
                "text": "Measuring a long distance from one side to the other.",
                "examples": [
                    "The river is very wide here."
                ]
            }
        ],
        "comparative": "wider",
        "superlative": "the widest"
    },

    {
        "word": "narrow",
        "transcription": "ˈnærəʊ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_measurements_A1",
        "emoji": "⬇️",
        "form": "adjective",
        "opposite": "wide",
        "oppositeEmoji": "↔️",
        "subtext": "a narrow street / too narrow",
        "synonyms": ["thin"],
        "definitions": [
            {
                "text": "Measuring only a small distance from one side to the other.",
                "examples": [
                    "The path was too narrow for the car."
                ]
            }
        ],
        "comparative": "narrower",
        "superlative": "the narrowest"
    },

    {
        "word": "lucky",
        "transcription": "ˈlʌki",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🍀",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😿",
        "subtext": "a lucky person / feel lucky",
        "synonyms": ["fortunate"],
        "definitions": [
            {
                "text": "Having good luck.",
                "examples": [
                    "He is very lucky to have such a good job."
                ]
            }
        ],
        "comparative": "luckier",
        "superlative": "the luckiest"
    },

    {
        "word": "calm",
        "transcription": "kɑːm",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😟",
        "subtext": "stay calm / a calm sea",
        "synonyms": ["peaceful", "quiet"],
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
        "superlative": "the calmest"
    },

    {
        "word": "married",
        "transcription": "ˈmærid",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "💍",
        "form": "adjective",
        "opposite": "single",
        "oppositeEmoji": "👤",
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
        "superlative": null
    },

    {
        "word": "single",
        "transcription": "ˈsɪŋɡl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "married",
        "oppositeEmoji": "💍",
        "subtext": "a single man",
        "synonyms": ["not married"],
        "definitions": [
            {
                "text": "Not married or in a serious relationship.",
                "examples": [
                    "He is single and lives alone."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "well",
        "transcription": "wel",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "💪",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤒",
        "subtext": "feel well / get well soon",
        "synonyms": ["healthy", "fit"],
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
        "superlative": "the best"
    },

    {
        "word": "purple",
        "transcription": "ˈpɜːpl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "synonyms": ["violet"],
        "comparative": "more purple",
        "superlative": "the most purple",
        "opposite": null
    },

    {
        "word": "able",
        "transcription": "ˈeɪbl",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💪",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Having the power, skill, knowledge, or money to do something.",
                "examples": [
                    "She is able to speak three languages."
                ]
            }
        ],
        "subtext": "be able to / highly able",
        "synonyms": ["capable"],
        "comparative": "abler",
        "superlative": "the ablest"
    },

    {
        "word": "close",
        "transcription": "kləʊz",
        "image": "https://images.unsplash.com/photo-1481273344443-3406e4aef361?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "distance_A1",
        "emoji": "📍",
        "form": "adjective",
        "opposite": "open",
        "definitions": [
            {
                "text": "Near in space or time.",
                "examples": [
                    "The station is close to the hotel."
                ]
            }
        ],
        "subtext": "close to / very close",
        "synonyms": ["near"],
        "comparative": "closer",
        "superlative": "the closest"
    },

    {
        "word": "dead",
        "transcription": "ded",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "💀",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Not living anymore.",
                "examples": [
                    "The flowers are dead."
                ]
            }
        ],
        "subtext": "dead leaves / completely dead",
        "synonyms": ["deceased"],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "fair",
        "transcription": "feə(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Treating people equally or in a right way.",
                "examples": [
                    "It is a fair decision."
                ]
            }
        ],
        "subtext": "a fair price / be fair",
        "synonyms": ["just"],
        "comparative": "fairer",
        "superlative": "the fairest"
    },

    {
        "word": "fine",
        "transcription": "faɪn",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😊",
        "form": "adjective",
        "opposite": null,
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
        "synonyms": ["okay", "good"],
        "comparative": "finer",
        "superlative": "the finest"
    },

    {
        "word": "glad",
        "transcription": "ɡlæd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Happy and pleased.",
                "examples": [
                    "I am glad to see you."
                ]
            }
        ],
        "subtext": "glad that / so glad",
        "synonyms": ["happy", "pleased"],
        "comparative": "gladder",
        "superlative": "the gladdest"
    },

    {
        "word": "interested",
        "transcription": "ˈɪntrəstɪd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "🧐",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Wanting to give your attention to something or learn more about it.",
                "examples": [
                    "I am interested in history."
                ]
            }
        ],
        "subtext": "interested in / very interested",
        "synonyms": ["curious"],
        "comparative": "more interested",
        "superlative": "the most interested"
    },

    {
        "word": "only",
        "transcription": "ˈəʊnli",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "1️⃣",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Used to show that there is only one or a few of something.",
                "examples": [
                    "She is the only student in the classroom."
                ]
            }
        ],
        "subtext": "the only one / only child",
        "synonyms": ["sole"],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "other",
        "transcription": "ˈʌðə(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "➕",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Used to refer to people or things that are different from the ones already mentioned.",
                "examples": [
                    "Where are the other students?"
                ]
            }
        ],
        "subtext": "the other one / some other",
        "synonyms": ["different"],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "own",
        "transcription": "əʊn",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "shared",
        "definitions": [
            {
                "text": "Belonging to or done by a particular person.",
                "examples": [
                    "I have my own room."
                ]
            }
        ],
        "subtext": "on my own / my own car",
        "synonyms": ["personal"],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "quick",
        "transcription": "kwɪk",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⚡",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Happening or done in a short time.",
                "examples": [
                    "She gave a quick answer."
                ]
            }
        ],
        "subtext": "a quick lunch / very quick",
        "synonyms": ["fast"],
        "comparative": "quicker",
        "superlative": "the quickest"
    },

    {
        "word": "ready",
        "transcription": "ˈredi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Prepared for what you are going to do.",
                "examples": [
                    "Are you ready for work?"
                ]
            }
        ],
        "subtext": "get ready / almost ready",
        "synonyms": ["prepared"],
        "comparative": "readier",
        "superlative": "the readiest"
    },

    {
        "word": "unready",
        "transcription": "ʌnˈredi",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "✅",
        "subtext": "unready for the change",
        "synonyms": ["not prepared"],
        "definitions": [
            {
                "text": "Not prepared or ready for something.",
                "examples": [
                    "We were unready for such a big project."
                ]
            }
        ],
        "comparative": "more unready",
        "superlative": "the most unready"
    },

    {
        "word": "rough",
        "transcription": "rʌf",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🧱",
        "form": "adjective",
        "opposite": "smooth",
        "definitions": [
            {
                "text": "Not smooth.",
                "examples": [
                    "The dog has rough fur."
                ]
            }
        ],
        "subtext": "rough skin / rough sea",
        "synonyms": ["uneven"],
        "comparative": "rougher",
        "superlative": "the roughest"
    },

    {
        "word": "sharp",
        "transcription": "ʃɑːp",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🔪",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Having a thin edge that is able to cut things or a fine point which is able to make a hole in things.",
                "examples": [
                    "This knife is very sharp."
                ]
            }
        ],
        "subtext": "a sharp knife / very sharp",
        "synonyms": ["pointed"],
        "comparative": "sharper",
        "superlative": "the sharpest"
    },

    {
        "word": "shy",
        "transcription": "ʃaɪ",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "😳",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Nervous and uncomfortable about meeting and talking to other people.",
                "examples": [
                    "He is a shy boy."
                ]
            }
        ],
        "subtext": "feel shy / quite shy",
        "synonyms": ["timid"],
        "comparative": "shyer",
        "superlative": "the shyest"
    },

    {
        "word": "thick",
        "transcription": "θɪk",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "thin",
        "definitions": [
            {
                "text": "Having a large distance between two sides.",
                "examples": [
                    "This is a thick book."
                ]
            }
        ],
        "subtext": "thick walls / thick hair",
        "synonyms": ["wide"],
        "comparative": "thicker",
        "superlative": "the thickest"
    },

    {
        "word": "true",
        "transcription": "truː",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "false",
        "definitions": [
            {
                "text": "Based on facts and not imaginary.",
                "examples": [
                    "Is the story true?"
                ]
            }
        ],
        "subtext": "come true",
        "synonyms": ["real", "truly"],
        "comparative": "truer",
        "superlative": "the truest"
    },

    {
        "word": "false",
        "transcription": "fɔːls",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "true",
        "oppositeEmoji": "✅",
        "subtext": "true or false / false information",
        "synonyms": ["incorrect"],
        "definitions": [
            {
                "text": "Not true; incorrect.",
                "examples": [
                    "The statement is false."
                ]
            }
        ],
        "comparative": "falser",
        "superlative": "the falsest"
    },

    {
        "word": "stupid",
        "transcription": "ˈstjuːpɪd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "🤡",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Silly or not intelligent.",
                "examples": [
                    "It was a stupid mistake."
                ]
            }
        ],
        "subtext": "don't be stupid / very stupid",
        "synonyms": ["silly"],
        "comparative": "stupider",
        "superlative": "the stupidest"
    },

    {
        "word": "sure",
        "transcription": "ʃɔː(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": null,
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
        "synonyms": ["certain"],
        "comparative": "surer",
        "superlative": "the surest"
    },

    {
        "word": "unsure",
        "transcription": "ʌnˈʃɔː(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❓",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "✅",
        "subtext": "feel unsure / unsure about",
        "synonyms": ["uncertain"],
        "definitions": [
            {
                "text": "Not certain about something.",
                "examples": [
                    "I am unsure about what to do next."
                ]
            }
        ],
        "comparative": "more unsure",
        "superlative": "the most unsure"
    },

    {
        "word": "nasty",
        "transcription": "ˈnɑːsti",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "😠",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😊",
        "subtext": "a nasty person / nasty weather",
        "synonyms": ["unpleasant", "mean"],
        "definitions": [
            {
                "text": "Very bad or unpleasant; unkind.",
                "examples": [
                    "Don't be nasty to your colleagues."
                ]
            }
        ],
        "comparative": "nastier",
        "superlative": "the nastiest"
    },

    {
        "word": "incorrect",
        "transcription": "ˌɪnkəˈrekt",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "correct",
        "oppositeEmoji": "✅",
        "subtext": "incorrect answer / absolutely incorrect",
        "synonyms": ["wrong", "false"],
        "definitions": [
            {
                "text": "Not correct; wrong.",
                "examples": [
                    "The information in the report was incorrect."
                ]
            }
        ],
        "comparative": "more incorrect",
        "superlative": "the most incorrect"
    },

    {
        "word": "smooth",
        "transcription": "smuːð",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🧼",
        "form": "adjective",
        "opposite": "rough",
        "oppositeEmoji": "🧱",
        "subtext": "smooth skin / smooth surface",
        "synonyms": ["flat", "even"],
        "definitions": [
            {
                "text": "Having an even and regular surface or consistency; not rough.",
                "examples": [
                    "The table has a very smooth surface."
                ]
            }
        ],
        "comparative": "smoother",
        "superlative": "the smoothest"
    },

    {
        "word": "normal",
        "transcription": "ˈnɔːml",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😐",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "❓",
        "subtext": "normal day / back to normal",
        "synonyms": ["usual", "ordinary"],
        "definitions": [
            {
                "text": "Usual, ordinary, or expected.",
                "examples": [
                    "It was a normal working day."
                ]
            }
        ],
        "comparative": "more normal",
        "superlative": "the most normal"
    },

    {
        "word": "alive",
        "transcription": "əˈlaɪv",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌱",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "💀",
        "subtext": "stay alive / still alive",
        "synonyms": ["living"],
        "definitions": [
            {
                "text": "Living, not dead.",
                "examples": [
                    "The plant is still alive."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "many",
        "transcription": "ˈmeni",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "🔢",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤏",
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
        "superlative": "the most"
    },

    {
        "word": "shared",
        "transcription": "ʃeəd",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "👥",
        "form": "adjective",
        "opposite": "own",
        "oppositeEmoji": "👤",
        "subtext": "shared room / shared office",
        "synonyms": ["common"],
        "definitions": [
            {
                "text": "Used or owned by more than one person.",
                "examples": [
                    "We work in a shared office."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },

    {
        "word": "unclear",
        "transcription": "ʌnˈklɪə(r)",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌫️",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "💧",
        "subtext": "unclear instructions / feel unclear",
        "synonyms": ["confusing", "vague"],
        "definitions": [
            {
                "text": "Not easy to understand; not clear.",
                "examples": [
                    "The instructions were unclear."
                ]
            }
        ],
        "comparative": "more unclear",
        "superlative": "the most unclear"
    },

    {
        "word": "few",
        "transcription": "fjuː",
        "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "🤏",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🔢",
        "subtext": "a few / very few",
        "synonyms": ["not many"],
        "definitions": [
            {
                "text": "Used for saying that there are only a small number of people or things.",
                "examples": [
                    "There are few students here today."
                ]
            }
        ],
        "comparative": "fewer",
        "superlative": "the fewest"
    },

    {
        "word": "useful",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "transcription": "[ˈjuːsfl]",
        "image": "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=400&q=80",
        "definitions": [
            {
                "text": "Helping you to do or achieve something.",
                "examples": ["This dictionary is very useful."]
            }
        ],
        "comparative": "more useful",
        "superlative": "the most useful",
        "opposite": "useless",
        "subtext": "very useful / useful information"
    },

    {
        "word": "possible",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⭕",
        "form": "adjective",
        "transcription": "[ˈpɒsəbl]",
        "image": "https://images.unsplash.com/photo-1494059980473-813e73ee784b?auto=format&fit=crop&w=400&q=80",
        "definitions": [
            {
                "text": "Able to be done or achieved.",
                "examples": ["It is possible to arrive on time."]
            }
        ],
        "comparative": "more possible",
        "superlative": "the most possible",
        "opposite": "impossible",
        "subtext": "if possible / as soon as possible"
    }
    ];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();