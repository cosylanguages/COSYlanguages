(function() {
    const data = [
    {
        "word": "tall",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "short",
        "oppositeEmoji": "📏",
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
        "comparative": "taller",
        "superlative": "the tallest"
    },
    {
        "word": "short",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "tall",
        "oppositeEmoji": "🗼",
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
        "comparative": "shorter",
        "superlative": "the shortest"
    },
    {
        "word": "young",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "old",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "Having lived or existed for only a short time.",
                "examples": [
                    "He is a young man."
                ]
            }
        ],
        "subtext": "young person / young professional / young at heart",
        "comparative": "younger",
        "superlative": "the youngest"
    },
    {
        "word": "old",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "young",
        "oppositeEmoji": "👶",
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
        "comparative": "older",
        "superlative": "the oldest"
    },
    {
        "word": "sunny",
        "level": "starter",
        "theme": "weather_A1",
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
        "comparative": "sunnier",
        "superlative": "the sunniest"
    },
    {
        "word": "rainy",
        "level": "starter",
        "theme": "weather_A1",
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
        "comparative": "rainier",
        "superlative": "the rainiest"
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
        "superlative": "the hottest"
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
        "superlative": "the coldest"
    },
    {
        "word": "ordinary",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "special",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Normal or usual; not special.",
                "examples": [
                    "It was an ordinary day."
                ]
            }
        ],
        "subtext": "ordinary day / ordinary life / nothing ordinary",
        "comparative": "more ordinary",
        "superlative": "the most ordinary"
    },
    {
        "word": "cheap",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "expensive",
        "oppositeEmoji": "💎",
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful",
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
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "cheap",
        "oppositeEmoji": "🏷️",
        "subtext": "costly, high price / very expensive / expensive taste / too expensive",
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
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "bad",
        "oppositeEmoji": "👎",
        "subtext": "great, nice, pleasant / good idea / good luck / good value",
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
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "👍",
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision",
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
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐭",
        "subtext": "large, huge / a big house / a big problem / big enough",
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
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "big",
        "oppositeEmoji": "🐘",
        "subtext": "little, tiny / a small flat / a small salary / too small",
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
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day",
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
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "comparative": "tireder",
        "superlative": "the tiredest"
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
        "superlative": null
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
        "superlative": null
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
        "superlative": "the cleanest"
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
        "superlative": "the healthiest"
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
        "comparative": "iller",
        "superlative": "the illest"
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
        "superlative": "the most online"
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
        "superlative": "the most alone"
    },
    {
        "word": "relaxed",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "stressed",
        "oppositeEmoji": "😫",
        "subtext": "calm, feeling relaxed",
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
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "anxious",
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
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "superlative": "the busiest"
    },
    {
        "word": "useful",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "useless",
        "oppositeEmoji": "🗑️",
        "subtext": "helpful, practical",
        "definitions": [
            {
                "text": "Helpful; having a practical purpose.",
                "examples": [
                    "A car is very useful in the country."
                ]
            }
        ],
        "comparative": "more useful",
        "superlative": "the most useful"
    },
    {
        "word": "important",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "essential / important meeting / very important / most important",
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
        "word": "red",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "superlative": "the reddest"
    },
    {
        "word": "blue",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "superlative": "the bluest"
    },
    {
        "word": "green",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "superlative": "the greenest"
    },
    {
        "word": "white",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "superlative": "the whitest"
    },
    {
        "word": "black",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "superlative": "the blackest"
    },
    {
        "word": "yellow",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "superlative": "the yellowest"
    },
    {
        "word": "free",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "comparative": "freeer",
        "superlative": "the freeest"
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
        "superlative": "the openest"
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
        "comparative": "closeder",
        "superlative": "the closedest"
    },
    {
        "word": "large",
        "level": "starter",
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
        "theme": "size_shape_A1",
        "comparative": "larger",
        "superlative": "the largest"
    },
    {
        "word": "little",
        "level": "starter",
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
        "theme": "size_shape_A1",
        "comparative": "smaller",
        "superlative": "the smallest"
    },
    {
        "word": "long",
        "level": "starter",
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
        "theme": "size_shape_A1",
        "comparative": "longer",
        "superlative": "the longest"
    },
    {
        "word": "high",
        "level": "starter",
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
        "theme": "size_shape_A1",
        "comparative": "higher",
        "superlative": "the highest"
    },
    {
        "word": "low",
        "level": "starter",
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
        "theme": "size_shape_A1",
        "comparative": "lower",
        "superlative": "the lowest"
    },
    {
        "word": "full",
        "level": "starter",
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
        "theme": "size_shape_A1",
        "comparative": "fuller",
        "superlative": "the fullest"
    },
    {
        "word": "empty",
        "level": "starter",
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
        "theme": "size_shape_A1",
        "comparative": "emptier",
        "superlative": "the emptiest"
    },
    {
        "word": "warm",
        "level": "starter",
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
        "theme": "weather_A1",
        "comparative": "warmer",
        "superlative": "the warmest"
    },
    {
        "word": "cool",
        "level": "starter",
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
        "theme": "weather_A1",
        "comparative": "cooler",
        "superlative": "the coolest"
    },
    {
        "word": "wet",
        "level": "starter",
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
        "theme": "weather_A1",
        "comparative": "wetter",
        "superlative": "the wettest"
    },
    {
        "word": "dry",
        "level": "starter",
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
        "theme": "weather_A1",
        "comparative": "dryer",
        "superlative": "the dryest"
    },
    {
        "word": "dirty",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "superlative": "the dirtiest"
    },
    {
        "word": "hard",
        "level": "starter",
        "form": "adjective",
        "subtext": "hard work / a hard decision / too hard",
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
        "superlative": "the hardest"
    },
    {
        "word": "soft",
        "level": "starter",
        "form": "adjective",
        "subtext": "soft light / soft music / soft skills",
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
        "superlative": "the softest"
    },
    {
        "word": "heavy",
        "level": "starter",
        "form": "adjective",
        "subtext": "heavy traffic / heavy rain / too heavy",
        "definitions": [
            {
                "text": "Of great weight; difficult to carry.",
                "examples": [
                    "The bag is very heavy with all those files."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "heavyer",
        "superlative": "the heavyest"
    },
    {
        "word": "light",
        "level": "starter",
        "form": "adjective",
        "subtext": "light rain / light traffic / a light meal",
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
        "superlative": "the lightest"
    },
    {
        "word": "brown",
        "level": "starter",
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
        "theme": "colours_patterns_A1",
        "comparative": "browner",
        "superlative": "the brownest"
    },
    {
        "word": "grey",
        "level": "starter",
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
        "theme": "colours_patterns_A1",
        "comparative": "greyer",
        "superlative": "the greyest"
    },
    {
        "word": "pink",
        "level": "starter",
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
        "theme": "colours_patterns_A1",
        "comparative": "pinker",
        "superlative": "the pinkest"
    },
    {
        "word": "orange",
        "level": "starter",
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
        "theme": "colours_patterns_A1",
        "comparative": "orangeer",
        "superlative": "the orangeest"
    },
    {
        "word": "great",
        "level": "starter",
        "form": "adjective",
        "subtext": "a great idea / a great opportunity / great value",
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
        "superlative": "the greatest"
    },
    {
        "word": "nice",
        "level": "starter",
        "form": "adjective",
        "subtext": "a nice day / a nice place / a nice person",
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
        "superlative": "the nicest"
    },
    {
        "word": "wonderful",
        "level": "starter",
        "form": "adjective",
        "subtext": "a wonderful opportunity / a wonderful time",
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
        "superlative": "the most wonderful"
    },
    {
        "word": "terrible",
        "level": "starter",
        "form": "adjective",
        "subtext": "terrible weather / a terrible mistake / terrible news",
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
        "superlative": "the most terrible"
    },
    {
        "word": "awful",
        "level": "starter",
        "form": "adjective",
        "subtext": "awful weather / awful news / simply awful",
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
        "superlative": "the most awful"
    },
    {
        "word": "amazing",
        "level": "starter",
        "form": "adjective",
        "subtext": "an amazing result / an amazing offer / truly amazing",
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
        "superlative": "the most amazing"
    },
    {
        "word": "fantastic",
        "level": "starter",
        "form": "adjective",
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
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
        "superlative": "the most fantastic"
    },
    {
        "word": "sad",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel sad / a sad situation / deeply sad",
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
        "superlative": "the saddest"
    },
    {
        "word": "hungry",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel hungry / very hungry / go hungry",
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
        "superlative": "the hungriest"
    },
    {
        "word": "angry",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel angry / angry with someone / very angry",
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
        "superlative": "the angriest"
    },
    {
        "word": "bored",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel bored / bored with / easily bored",
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
        "superlative": "the most bored"
    },
    {
        "word": "excited",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "superlative": "the most excited"
    },
    {
        "word": "afraid",
        "level": "starter",
        "form": "adjective",
        "subtext": "afraid of / feel afraid / deeply afraid",
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
        "superlative": "the most afraid"
    },
    {
        "word": "sorry",
        "level": "starter",
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
        "theme": "basic_negative_emotions_A1",
        "comparative": "sorrier",
        "superlative": "the sorriest"
    },
    {
        "word": "right",
        "level": "starter",
        "form": "adjective",
        "subtext": "right answer / right time / absolutely right",
        "definitions": [
            {
                "text": "Correct; suitable.",
                "examples": [
                    "Is this the right office?"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "righter",
        "superlative": "the rightest"
    },
    {
        "word": "wrong",
        "level": "starter",
        "form": "adjective",
        "subtext": "wrong answer / go wrong / completely wrong",
        "definitions": [
            {
                "text": "Not correct; not suitable.",
                "examples": [
                    "That was the wrong decision."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "wronger",
        "superlative": "the wrongest"
    },
    {
        "word": "new",
        "level": "starter",
        "form": "adjective",
        "subtext": "new job / brand new / completely new",
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
        "superlative": "the newest"
    },
    {
        "word": "different",
        "level": "starter",
        "form": "adjective",
        "subtext": "completely different / very different / different from",
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
        "superlative": "the most different"
    },
    {
        "word": "same",
        "level": "starter",
        "form": "adjective",
        "subtext": "the same as / exactly the same / same time",
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
        "superlative": null
    },
    {
        "word": "fast",
        "level": "starter",
        "form": "adjective",
        "subtext": "fast food / fast train / very fast",
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
        "superlative": "the fastest"
    },
    {
        "word": "slow",
        "level": "starter",
        "form": "adjective",
        "subtext": "slow progress / slow internet / very slow",
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
        "superlative": "the slowest"
    },
    {
        "word": "quiet",
        "level": "starter",
        "form": "adjective",
        "subtext": "quiet area / keep quiet / nice and quiet",
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
        "superlative": "the quietest"
    },
    {
        "word": "loud",
        "level": "starter",
        "form": "adjective",
        "subtext": "loud noise / too loud / a loud voice",
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
        "superlative": "the loudest"
    },
    {
        "word": "safe",
        "level": "starter",
        "form": "adjective",
        "subtext": "safe area / safe to do / feel safe",
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
        "superlative": "the safest"
    },
    {
        "word": "dangerous",
        "level": "starter",
        "form": "adjective",
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
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
        "superlative": "the most dangerous"
    },
    {
        "word": "unhappy",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not feeling pleased; dissatisfied.",
                "examples": [
                    "He is unhappy with his current salary."
                ]
            }
        ],
        "subtext": "feel unhappy / very unhappy / unhappy about",
        "comparative": "unhappier",
        "superlative": "the unhappiest"
    },
    {
        "word": "nervous",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling anxious or uneasy.",
                "examples": [
                    "He was nervous before the job interview."
                ]
            }
        ],
        "subtext": "feel nervous / nervous about / very nervous",
        "comparative": "more nervous",
        "superlative": "the most nervous"
    },
    {
        "word": "stressed",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling worried and tense from pressure.",
                "examples": [
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "feel stressed / very stressed / stressed out",
        "comparative": "more stressed",
        "superlative": "the most stressed"
    },
    {
        "word": "confident",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling sure of your own abilities.",
                "examples": [
                    "She is very confident in client presentations."
                ]
            }
        ],
        "subtext": "feel confident / self-confident / very confident",
        "comparative": "more confident",
        "superlative": "the most confident"
    },
    {
        "word": "proud",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "comparative": "prouder",
        "superlative": "the proudest"
    },
    {
        "word": "scared",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "comparative": "scareder",
        "superlative": "the scaredest"
    },
    {
        "word": "surprised",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "comparative": "more surprised",
        "superlative": "the most surprised"
    },
    {
        "word": "disappointed",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "comparative": "more disappointed",
        "superlative": "the most disappointed"
    },
    {
        "word": "beautiful",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "superlative": "the most beautiful"
    },
    {
        "word": "pretty",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "superlative": "the prettiest"
    },
    {
        "word": "strong",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "superlative": "the strongest"
    },
    {
        "word": "weak",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "superlative": "the weakest"
    },
    {
        "word": "fit",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
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
        "comparative": "fitter",
        "superlative": "the fittest"
    },
    {
        "word": "excellent",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extremely good; of a very high standard.",
                "examples": [
                    "She received an excellent review."
                ]
            }
        ],
        "subtext": "excellent work / excellent results / absolutely excellent",
        "comparative": "more excellent",
        "superlative": "the most excellent"
    },
    {
        "word": "perfect",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "superlative": "the most perfect"
    },
    {
        "word": "useless",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Without any useful value; not helpful.",
                "examples": [
                    "This software is useless for our needs."
                ]
            }
        ],
        "subtext": "completely useless / prove useless / a useless idea",
        "comparative": "more useless",
        "superlative": "the most useless"
    },
    {
        "word": "correct",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "superlative": "the most correct"
    },
    {
        "word": "interesting",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "superlative": "the most interesting"
    },
    {
        "word": "boring",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "superlative": "the most boring"
    },
    {
        "word": "necessary",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Needed; required in order to do something.",
                "examples": [
                    "A good internet connection is necessary for remote work."
                ]
            }
        ],
        "subtext": "absolutely necessary / if necessary / necessary to do",
        "comparative": "more necessary",
        "superlative": "the most necessary"
    },
    {
        "word": "possible",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Able to happen or be achieved.",
                "examples": [
                    "Is it possible to finish by Friday?"
                ]
            }
        ],
        "subtext": "as soon as possible / it is possible / make possible",
        "comparative": "more possible",
        "superlative": "the most possible"
    },
    {
        "word": "impossible",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not able to happen or be done.",
                "examples": [
                    "It is impossible to finish in one day."
                ]
            }
        ],
        "subtext": "virtually impossible / make impossible / nearly impossible",
        "comparative": "more impossible",
        "superlative": "the most impossible"
    },
    {
        "word": "special",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "superlative": "the most special"
    },
    {
        "word": "popular",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Liked by many people.",
                "examples": [
                    "The new café near the office is very popular."
                ]
            }
        ],
        "subtext": "very popular / popular choice / most popular",
        "comparative": "more popular",
        "superlative": "the most popular"
    },
    {
        "word": "similar",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Almost the same; having many shared features.",
                "examples": [
                    "Our approaches are very similar."
                ]
            }
        ],
        "subtext": "very similar / similar to / similar results",
        "comparative": "more similar",
        "superlative": "the most similar"
    },
    {
        "word": "friendly",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "comparative": "more friendly",
        "superlative": "the most friendly"
    },
    {
        "word": "kind",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "comparative": "kinder",
        "superlative": "the kindest"
    },
    {
        "word": "funny",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "comparative": "funnier",
        "superlative": "the funniest"
    },
    {
        "word": "clever",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "comparative": "cleverer",
        "superlative": "the cleverest"
    },
    {
        "word": "polite",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "comparative": "politeer",
        "superlative": "the politeest"
    },
    {
        "word": "rude",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "comparative": "ruder",
        "superlative": "the rudest"
    },
    {
        "word": "lazy",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "comparative": "lazier",
        "superlative": "the laziest"
    },
    {
        "word": "honest",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "comparative": "more honest",
        "superlative": "the most honest"
    },
    {
        "word": "noisy",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "comparative": "noisier",
        "superlative": "the noisiest"
    },
    {
        "word": "round",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⭕",
        "form": "adjective",
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
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⬛",
        "form": "adjective",
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
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤝",
        "form": "adjective",
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
        "word": "patient",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🧘",
        "form": "adjective",
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
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏃",
        "form": "adjective",
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
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⚠️",
        "form": "adjective",
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
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🎨",
        "form": "adjective",
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
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();