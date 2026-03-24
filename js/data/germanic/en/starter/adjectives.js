(function() {
    const data = [
    {
        "word": "tall",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "short",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "Of greater than average height.",
                "examples": [
                    "He is very tall.",
                    "That building is tall.",
                    "She is a tall woman who works as an engineer."
                ]
            }
        ],
        "subtext": "high, a tall building, a tall person, tall enough"
    },
    {
        "word": "short",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "tall",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "Of less than average height or length.",
                "examples": [
                    "She is short.",
                    "The pencil is short.",
                    "He has a short commute — ten minutes by bike."
                ]
            }
        ],
        "subtext": "a short journey, short hair, too short"
    },
    {
        "word": "young",
        "level": "starter",
        "theme": "size_shape_A0",
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
        "subtext": "youthful, a young child"
    },
    {
        "word": "old",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "new",
        "oppositeEmoji": "🆕",
        "definitions": [
            {
                "text": "Having existed for a long time.",
                "examples": [
                    "This is an old book.",
                    "He works with old clients from ten years ago."
                ]
            }
        ],
        "subtext": "old friend, old habits, very old"
    },
    {
        "word": "sunny",
        "level": "starter",
        "theme": "weather_A0",
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
        "subtext": "bright, a sunny day"
    },
    {
        "word": "rainy",
        "level": "starter",
        "theme": "weather_A0",
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
        "subtext": "wet, a rainy afternoon"
    },
    {
        "word": "hot",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "cold",
        "oppositeEmoji": "❄️",
        "subtext": "very hot, hot weather, a hot drink, too hot",
        "definitions": [
            {
                "text": "Having a high temperature.",
                "examples": [
                    "The coffee is hot.",
                    "It is very hot in summer.",
                    "It is too hot to work comfortably today."
                ]
            }
        ]
    },
    {
        "word": "cold",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "hot",
        "oppositeEmoji": "🔥",
        "subtext": "very cold, cold morning, cold weather, a cold drink, too cold",
        "definitions": [
            {
                "text": "Having a low temperature; not warm.",
                "examples": [
                    "The water is cold.",
                    "It is cold in winter.",
                    "I need a coat — it is very cold outside."
                ]
            }
        ]
    },
    {
        "word": "ordinary",
        "level": "starter",
        "theme": "size_shape_A0",
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
        "subtext": "normal, usual"
    },
    {
        "word": "cheap",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "expensive",
        "oppositeEmoji": "💎",
        "subtext": "low price, inexpensive, cheap flight, very cheap, cheap and cheerful",
        "definitions": [
            {
                "text": "Low in price.",
                "examples": [
                    "This coffee is cheap.",
                    "The lunch near the office is very cheap."
                ]
            }
        ]
    },
    {
        "word": "expensive",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "cheap",
        "oppositeEmoji": "🏷️",
        "subtext": "costly, high price, very expensive, expensive taste, too expensive",
        "definitions": [
            {
                "text": "High in price.",
                "examples": [
                    "That car is expensive.",
                    "The city centre is expensive for rent."
                ]
            }
        ]
    },
    {
        "word": "good",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "bad",
        "oppositeEmoji": "👎",
        "subtext": "great, nice, pleasant, good idea, good luck, good value",
        "definitions": [
            {
                "text": "Of high quality or pleasant.",
                "examples": [
                    "This is a good job.",
                    "She has a good job with flexible hours."
                ]
            }
        ]
    },
    {
        "word": "bad",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "👍",
        "subtext": "terrible, awful, unpleasant, bad news, bad luck, bad decision",
        "definitions": [
            {
                "text": "Of low quality; unpleasant or harmful.",
                "examples": [
                    "The weather is bad today.",
                    "He had a bad day at work."
                ]
            }
        ]
    },
    {
        "word": "big",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐭",
        "subtext": "large, huge, a big house, a big problem, big enough",
        "definitions": [
            {
                "text": "Large in size or amount.",
                "examples": [
                    "It is a big office.",
                    "They have a big house near the park."
                ]
            }
        ]
    },
    {
        "word": "small",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "big",
        "oppositeEmoji": "🐘",
        "subtext": "little, tiny, a small flat, a small salary, too small",
        "definitions": [
            {
                "text": "Little in size or amount.",
                "examples": [
                    "She has a small flat.",
                    "She rents a small flat in the city centre."
                ]
            }
        ]
    },
    {
        "word": "easy",
        "level": "starter",
        "theme": "size_shape_A0",
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
        "subtext": "simple, easy to do, nice and easy, not easy"
    },
    {
        "word": "difficult",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "easy",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Not easy; requiring effort.",
                "examples": [
                    "This work is difficult.",
                    "The negotiation was very difficult."
                ]
            }
        ],
        "subtext": "hard, difficult to do, very difficult, find it difficult"
    },
    {
        "word": "happy",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "glad, cheerful, feel happy, happy with something, a happy day",
        "definitions": [
            {
                "text": "Feeling pleasure or satisfaction.",
                "examples": [
                    "I am happy today.",
                    "She is happy in her new role."
                ]
            }
        ],
        "opposite": "sad",
        "oppositeEmoji": "😢"
    },
    {
        "word": "tired",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "sleepy, exhausted, feel tired, tired of something, very tired",
        "definitions": [
            {
                "text": "Needing rest or sleep.",
                "examples": [
                    "I am very tired after work.",
                    "I feel tired after a long week."
                ]
            }
        ]
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
        "subtext": "a full-time job"
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
        "subtext": "a part-time job"
    },
    {
        "word": "clean",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "dirty",
        "oppositeEmoji": "💩",
        "subtext": "tidy, not dirty, keep it clean, clean clothes, a clean room, keep clean",
        "definitions": [
            {
                "text": "Free from dirt.",
                "examples": [
                    "The flat is clean now.",
                    "Keep the workspace clean and tidy."
                ]
            }
        ]
    },
    {
        "word": "healthy",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        ]
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
        ]
    },
    {
        "word": "online",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
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
        "subtext": "on the internet"
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
        "subtext": "by yourself, on your own"
    },
    {
        "word": "relaxed",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
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
        ]
    },
    {
        "word": "worried",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
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
        ]
    },
    {
        "word": "busy",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "very busy, busy day, busy schedule, too busy",
        "definitions": [
            {
                "text": "Having much to do; crowded.",
                "examples": [
                    "I am very busy this week.",
                    "Monday morning is always very busy."
                ]
            }
        ]
    },
    {
        "word": "useful",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
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
        ]
    },
    {
        "word": "important",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "essential, important meeting, very important, most important",
        "definitions": [
            {
                "text": "Having great value or significance.",
                "examples": [
                    "Sleep is very important.",
                    "Sleep is very important for performance."
                ]
            }
        ]
    },
    {
        "word": "red",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "dark red, bright red, red wine, red face, red light",
        "definitions": [
            {
                "text": "Having the colour of blood.",
                "examples": [
                    "She has a red bag.",
                    "She drives a red car."
                ]
            }
        ]
    },
    {
        "word": "blue",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "light blue, dark blue, blue sky",
        "definitions": [
            {
                "text": "Having the colour of the sky.",
                "examples": [
                    "His car is blue.",
                    "He wears a blue shirt to work."
                ]
            }
        ]
    },
    {
        "word": "green",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "bright green, dark green, green energy, green space",
        "definitions": [
            {
                "text": "Having the colour of grass.",
                "examples": [
                    "She wears a green dress.",
                    "The company has green credentials."
                ]
            }
        ]
    },
    {
        "word": "white",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "pure white, snow white, white wine, off-white, bright white",
        "definitions": [
            {
                "text": "Having the lightest colour.",
                "examples": [
                    "The walls are white.",
                    "The office walls are painted white."
                ]
            }
        ]
    },
    {
        "word": "black",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "jet black, dark as night, black coffee, black market",
        "definitions": [
            {
                "text": "Having the darkest colour.",
                "examples": [
                    "He wears a black coat.",
                    "He always wears a black suit."
                ]
            }
        ]
    },
    {
        "word": "yellow",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "bright yellow, lemon yellow, yellow light, pale yellow",
        "definitions": [
            {
                "text": "Having the colour of the sun.",
                "examples": [
                    "She has a yellow umbrella.",
                    "She bought a yellow notepad."
                ]
            }
        ]
    },
    {
        "word": "free",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "free of charge, free gift, free time, free to do",
        "definitions": [
            {
                "text": "Not costing money; not restricted.",
                "examples": [
                    "The museum is free on Sundays.",
                    "The parking here is free."
                ]
            }
        ]
    },
    {
        "word": "open",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "closed",
        "oppositeEmoji": "🔒",
        "subtext": "now open, open for business, open door, open to ideas, wide open",
        "definitions": [
            {
                "text": "Not closed; available to use.",
                "examples": [
                    "The shop is open until eight.",
                    "The office is open from eight to six."
                ]
            }
        ]
    },
    {
        "word": "closed",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "subtext": "now closed, temporarily closed, closed for lunch, closed mind, closed door",
        "definitions": [
            {
                "text": "Not open; shut.",
                "examples": [
                    "The bank is closed on Sundays.",
                    "The bank is closed on Sunday."
                ]
            }
        ]
    },
    {
        "word": "large",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Of more than average size or amount.",
                "examples": [
                    "Paris is a very large city."
                ]
            }
        ],
        "emoji": "🐘",
        "opposite": "small",
        "oppositeEmoji": "🐭",
        "subtext": "big, a large city, a large company, a large amount"
    },
    {
        "word": "little",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Small in size; a small amount of.",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "emoji": "🐭",
        "opposite": "big",
        "oppositeEmoji": "🐘",
        "subtext": "a little bit, a little money, too little"
    },
    {
        "word": "long",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Of great length; lasting a long time.",
                "examples": [
                    "She has a long commute every day."
                ]
            }
        ],
        "emoji": "📏",
        "opposite": "short",
        "oppositeEmoji": "📏",
        "subtext": "a long journey, a long day, a long time"
    },
    {
        "word": "high",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Of greater than average height or level.",
                "examples": [
                    "The rent in this area is very high."
                ]
            }
        ],
        "emoji": "🏔️",
        "opposite": "low",
        "oppositeEmoji": "📉",
        "subtext": "tall, high price, high rent, high quality"
    },
    {
        "word": "low",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Of less than average height or level.",
                "examples": [
                    "The salary is too low for the hours involved."
                ]
            }
        ],
        "emoji": "📉",
        "opposite": "high",
        "oppositeEmoji": "🏔️",
        "subtext": "short, low price, low salary, low quality"
    },
    {
        "word": "full",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Containing as much as possible; complete.",
                "examples": [
                    "I feel full after that lunch."
                ]
            }
        ],
        "emoji": "🥛",
        "opposite": "empty",
        "oppositeEmoji": "🫙",
        "subtext": "full time, a full day, full of people"
    },
    {
        "word": "empty",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Containing nothing; with no people.",
                "examples": [
                    "The office is empty at weekends."
                ]
            }
        ],
        "emoji": "🫙",
        "opposite": "full",
        "oppositeEmoji": "🥛",
        "subtext": "an empty flat, an empty room, nearly empty"
    },
    {
        "word": "warm",
        "level": "starter",
        "theme": "weather_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Slightly hot; pleasantly heated.",
                "examples": [
                    "The office is warm and comfortable."
                ]
            }
        ],
        "emoji": "🌤️",
        "opposite": "cool",
        "oppositeEmoji": "🌬️",
        "subtext": "pleasant, warm weather, a warm welcome, keep warm"
    },
    {
        "word": "cool",
        "level": "starter",
        "theme": "weather_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Slightly cold; pleasantly low temperature.",
                "examples": [
                    "She prefers cool weather for working."
                ]
            }
        ],
        "emoji": "🌬️",
        "opposite": "warm",
        "oppositeEmoji": "🌤️",
        "subtext": "chilly, cool weather, a cool drink, stay cool"
    },
    {
        "word": "wet",
        "level": "starter",
        "theme": "weather_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Covered with water or liquid.",
                "examples": [
                    "His jacket is wet from the rain."
                ]
            }
        ],
        "emoji": "☔",
        "opposite": "dry",
        "oppositeEmoji": "🏜️",
        "subtext": "wet weather, wet clothes, get wet"
    },
    {
        "word": "dry",
        "level": "starter",
        "theme": "weather_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Without water or liquid; not wet.",
                "examples": [
                    "The storage room must stay dry."
                ]
            }
        ],
        "emoji": "🏜️",
        "opposite": "wet",
        "oppositeEmoji": "☔",
        "subtext": "dry weather, dry skin, keep dry"
    },
    {
        "word": "dirty",
        "level": "starter",
        "theme": "household_tasks_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Covered in dirt or impurities.",
                "examples": [
                    "His hands are dirty after fixing the car."
                ]
            }
        ],
        "emoji": "💩",
        "opposite": "clean",
        "oppositeEmoji": "✨",
        "subtext": "messy, dirty hands, dirty clothes, get dirty"
    },
    {
        "word": "hard",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Firm and solid; difficult.",
                "examples": [
                    "The chair is very hard and uncomfortable."
                ]
            }
        ],
        "emoji": "🧱",
        "opposite": "soft",
        "oppositeEmoji": "🧸",
        "subtext": "hard work, a hard decision, too hard"
    },
    {
        "word": "soft",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not hard; gentle to the touch.",
                "examples": [
                    "The sofa is very soft and comfortable."
                ]
            }
        ],
        "emoji": "🧸",
        "opposite": "hard",
        "oppositeEmoji": "🧱",
        "subtext": "soft light, soft music, soft skills"
    },
    {
        "word": "heavy",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Of great weight; difficult to carry.",
                "examples": [
                    "The bag is very heavy with all those files."
                ]
            }
        ],
        "emoji": "🏋️",
        "opposite": "light",
        "oppositeEmoji": "🪶",
        "subtext": "heavy traffic, heavy rain, too heavy"
    },
    {
        "word": "light",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not heavy; pale in colour.",
                "examples": [
                    "She carries a light bag to work every day."
                ]
            }
        ],
        "emoji": "🪶",
        "opposite": "heavy",
        "oppositeEmoji": "🏋️",
        "subtext": "light rain, light traffic, a light meal"
    },
    {
        "word": "brown",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having the colour of wood or earth.",
                "examples": [
                    "She has brown eyes and dark hair."
                ]
            }
        ],
        "emoji": "🟫",
        "subtext": "dark brown, light brown, brown bread"
    },
    {
        "word": "grey",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a colour between black and white.",
                "examples": [
                    "He has grey hair and a kind face."
                ]
            }
        ],
        "emoji": "⬜",
        "subtext": "grey area, grey sky, pale grey"
    },
    {
        "word": "pink",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a pale red colour.",
                "examples": [
                    "She prefers pink to red."
                ]
            }
        ],
        "emoji": "🌸",
        "subtext": "light pink, bright pink, hot pink"
    },
    {
        "word": "orange",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having the colour of an orange fruit.",
                "examples": [
                    "He bought an orange jacket."
                ]
            }
        ],
        "emoji": "🟧",
        "subtext": "bright orange, dark orange, orange light"
    },
    {
        "word": "great",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extremely good; large in amount.",
                "examples": [
                    "She is a great manager."
                ]
            }
        ],
        "emoji": "🌟",
        "subtext": "excellent, a great idea, a great opportunity, great value"
    },
    {
        "word": "nice",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Pleasant or kind.",
                "examples": [
                    "The new office is very nice."
                ]
            }
        ],
        "emoji": "😊",
        "subtext": "a nice day, a nice place, a nice person"
    },
    {
        "word": "wonderful",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extremely good; causing delight.",
                "examples": [
                    "They had a wonderful team."
                ]
            }
        ],
        "emoji": "✨",
        "subtext": "a wonderful opportunity, a wonderful time"
    },
    {
        "word": "terrible",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extremely bad.",
                "examples": [
                    "The traffic this morning was terrible."
                ]
            }
        ],
        "emoji": "😫",
        "subtext": "horrible, terrible weather, a terrible mistake, terrible news"
    },
    {
        "word": "awful",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very bad or unpleasant.",
                "examples": [
                    "The noise in the open office is awful."
                ]
            }
        ],
        "emoji": "🤢",
        "subtext": "terrible, awful weather, awful news, simply awful"
    },
    {
        "word": "amazing",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Causing great surprise or admiration.",
                "examples": [
                    "She gave an amazing presentation."
                ]
            }
        ],
        "emoji": "🤩",
        "subtext": "an amazing result, an amazing offer, truly amazing"
    },
    {
        "word": "fantastic",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extremely good.",
                "examples": [
                    "The new system works in a fantastic way."
                ]
            }
        ],
        "emoji": "🎉",
        "subtext": "fantastic news, a fantastic opportunity, truly fantastic"
    },
    {
        "word": "sad",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling unhappy or sorrowful.",
                "examples": [
                    "He was sad to leave the company."
                ]
            }
        ],
        "emoji": "😢",
        "opposite": "happy",
        "oppositeEmoji": "😊",
        "subtext": "unhappy, feel sad, a sad situation, deeply sad"
    },
    {
        "word": "hungry",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Needing food.",
                "examples": [
                    "I am hungry — it is already two o'clock."
                ]
            }
        ],
        "emoji": "🍕",
        "subtext": "starving, feel hungry, very hungry, go hungry"
    },
    {
        "word": "angry",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling strong displeasure.",
                "examples": [
                    "She was angry about the decision."
                ]
            }
        ],
        "emoji": "😠",
        "subtext": "mad, feel angry, angry with someone, very angry"
    },
    {
        "word": "bored",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling uninterested or restless.",
                "examples": [
                    "He feels bored in long meetings."
                ]
            }
        ],
        "emoji": "🥱",
        "subtext": "feel bored, bored with, easily bored"
    },
    {
        "word": "excited",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling enthusiasm and eagerness.",
                "examples": [
                    "She is excited about her new job."
                ]
            }
        ],
        "emoji": "😃",
        "subtext": "eager, feel excited, excited about, very excited"
    },
    {
        "word": "afraid",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling fear.",
                "examples": [
                    "He is afraid of making mistakes."
                ]
            }
        ],
        "emoji": "😨",
        "subtext": "scared, afraid of, feel afraid, deeply afraid"
    },
    {
        "word": "sorry",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling regret or sadness.",
                "examples": [
                    "She is sorry for the delay."
                ]
            }
        ],
        "emoji": "😔",
        "subtext": "feel sorry, sorry for, sorry about"
    },
    {
        "word": "right",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Correct; suitable.",
                "examples": [
                    "Is this the right office?"
                ]
            }
        ],
        "emoji": "✅",
        "opposite": "wrong",
        "oppositeEmoji": "❌",
        "subtext": "correct, right answer, right time, absolutely right"
    },
    {
        "word": "wrong",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not correct; not suitable.",
                "examples": [
                    "That was the wrong decision."
                ]
            }
        ],
        "emoji": "❌",
        "opposite": "right",
        "oppositeEmoji": "✅",
        "subtext": "wrong answer, go wrong, completely wrong"
    },
    {
        "word": "new",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not existing before; recently made.",
                "examples": [
                    "She has a new job starting in March."
                ]
            }
        ],
        "emoji": "🆕",
        "opposite": "old",
        "oppositeEmoji": "👴",
        "subtext": "new job, brand new, completely new"
    },
    {
        "word": "different",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not the same as another.",
                "examples": [
                    "This job is very different from my last one."
                ]
            }
        ],
        "emoji": "🔄",
        "opposite": "same",
        "oppositeEmoji": "🆔",
        "subtext": "completely different, very different, different from"
    },
    {
        "word": "same",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not different; identical.",
                "examples": [
                    "They earn the same salary."
                ]
            }
        ],
        "emoji": "🆔",
        "opposite": "different",
        "oppositeEmoji": "🔄",
        "subtext": "the same as, exactly the same, same time"
    },
    {
        "word": "fast",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Moving or happening quickly.",
                "examples": [
                    "The train to work is fast and reliable."
                ]
            }
        ],
        "emoji": "⚡",
        "opposite": "slow",
        "oppositeEmoji": "🐢",
        "subtext": "quick, fast food, fast train, very fast"
    },
    {
        "word": "slow",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not fast; taking a long time.",
                "examples": [
                    "The new system is very slow."
                ]
            }
        ],
        "emoji": "🐢",
        "opposite": "fast",
        "oppositeEmoji": "⚡",
        "subtext": "slow progress, slow internet, very slow"
    },
    {
        "word": "quiet",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Making little or no noise; peaceful.",
                "examples": [
                    "The office is quiet at lunchtime."
                ]
            }
        ],
        "emoji": "🤫",
        "opposite": "loud",
        "oppositeEmoji": "📢",
        "subtext": "quiet area, keep quiet, nice and quiet"
    },
    {
        "word": "loud",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Making a lot of noise.",
                "examples": [
                    "The open-plan office is too loud."
                ]
            }
        ],
        "emoji": "📢",
        "opposite": "quiet",
        "oppositeEmoji": "🤫",
        "subtext": "noisy, loud noise, too loud, a loud voice"
    },
    {
        "word": "safe",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not dangerous; protected from harm.",
                "examples": [
                    "This neighbourhood is very safe."
                ]
            }
        ],
        "emoji": "🛡️",
        "opposite": "dangerous",
        "oppositeEmoji": "⚠️",
        "subtext": "secure, safe area, safe to do, feel safe"
    },
    {
        "word": "dangerous",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Likely to cause harm.",
                "examples": [
                    "The commute on that road is dangerous."
                ]
            }
        ],
        "emoji": "⚠️",
        "opposite": "safe",
        "oppositeEmoji": "🛡️",
        "subtext": "risky, dangerous situation, very dangerous, potentially dangerous"
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
