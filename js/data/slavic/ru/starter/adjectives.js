(function() {
    const data = [
    {
        "word": "высокий",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "short",
        "oppositeEmoji": "📏",
        "feminine": "высокая",
        "emoji": "🦒",
        "neuter": "высокое",
        "plural": "высокие",
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
        "comparative": "выше",
        "superlative": "самый высокий"
    },
    {
        "word": "короткий",
        "feminine": "короткая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "короткое",
        "plural": "короткие",
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
        "comparative": "короче",
        "superlative": "самый короткий",
        "opposite": "tall",
        "oppositeEmoji": "🗼"
    },
    {
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "feminine": "молодая",
        "neuter": "молодое",
        "plural": "молодые",
        "definitions": [
            {
                "text": "Having lived or existed for only a short time.",
                "examples": [
                    "He is a young man."
                ]
            }
        ],
        "comparative": "моложе",
        "superlative": "самый молодой",
        "opposite": "old",
        "oppositeEmoji": "👴",
        "subtext": "young person / young professional / young at heart",
        "word": "молодой"
    },
    {
        "word": "старый",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "young",
        "oppositeEmoji": "👶",
        "feminine": "старая",
        "emoji": "👴",
        "neuter": "старое",
        "plural": "старые",
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
        "comparative": "старше",
        "superlative": "самый старый"
    },
    {
        "word": "солнечный",
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
        "comparative": "более солнечный",
        "superlative": "самый солнечный",
        "feminine": "солнечная",
        "neuter": "солнечное",
        "plural": "солнечные"
    },
    {
        "word": "дождливый",
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
        "comparative": "более дождливый",
        "superlative": "самый дождливый",
        "feminine": "дождливая",
        "neuter": "дождливое",
        "plural": "дождливые"
    },
    {
        "word": "горячий",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "cold",
        "oppositeEmoji": "❄️",
        "subtext": "очень жаркий, кипяток",
        "definitions": [
            {
                "text": "Имеющий высокую температуру.",
                "examples": [
                    "Кофе горячий."
                ]
            }
        ],
        "feminine": "горячая",
        "neuter": "горячее",
        "plural": "горячие",
        "comparative": "горячее",
        "superlative": "самый горячий"
    },
    {
        "word": "холодный",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "hot",
        "oppositeEmoji": "🔥",
        "subtext": "очень холодный, морозный",
        "definitions": [
            {
                "text": "Имеющий низкую температуру.",
                "examples": [
                    "Вода холодная."
                ]
            }
        ],
        "feminine": "холодная",
        "neuter": "холодное",
        "plural": "холодные",
        "comparative": "холоднее",
        "superlative": "самый холодный"
    },
    {
        "word": "обычный",
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
        "comparative": "обычнее",
        "superlative": "самый обычный",
        "feminine": "обычная",
        "neuter": "обычное",
        "plural": "обычные"
    },
    {
        "word": "дешёвый",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "expensive",
        "oppositeEmoji": "💎",
        "feminine": "дешёвая",
        "neuter": "дешёвое",
        "plural": "дешёвые",
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
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful",
        "comparative": "дешевле",
        "superlative": "самый дешёвый"
    },
    {
        "word": "дорогой",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "cheap",
        "oppositeEmoji": "🏷️",
        "feminine": "дорогая",
        "neuter": "дорогое",
        "plural": "дорогие",
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
        "subtext": "costly, high price / very expensive / expensive taste / too expensive",
        "comparative": "дороже",
        "superlative": "самый дорогой"
    },
    {
        "word": "хороший",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "bad",
        "oppositeEmoji": "👎",
        "feminine": "хорошая",
        "neuter": "хорощее",
        "plural": "хорошие",
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
        "subtext": "great, nice, pleasant / good idea / good luck / good value",
        "comparative": "лучше",
        "superlative": "самый хороший"
    },
    {
        "word": "плохой",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "👍",
        "feminine": "плохая",
        "neuter": "плохое",
        "plural": "плохие",
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
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision",
        "comparative": "хуже",
        "superlative": "самый плохой"
    },
    {
        "word": "большой",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐭",
        "feminine": "большая",
        "neuter": "большое",
        "plural": "большие",
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
        "subtext": "large, huge / a big house / a big problem / big enough",
        "comparative": "больше",
        "superlative": "самый большой"
    },
    {
        "word": "маленький",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "big",
        "oppositeEmoji": "🐘",
        "feminine": "маленькая",
        "neuter": "маленькое",
        "plural": "маленькие",
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
        "subtext": "little, tiny / a small flat / a small salary / too small",
        "comparative": "меньше",
        "superlative": "самый маленький"
    },
    {
        "word": "лёгкий",
        "feminine": "лёгкая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "neuter": "лёгкое",
        "plural": "лёгкие",
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
        "comparative": "легче",
        "superlative": "самый лёгкий",
        "opposite": "difficult",
        "oppositeEmoji": "❌"
    },
    {
        "word": "трудный",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "easy",
        "oppositeEmoji": "✅",
        "feminine": "трудная",
        "neuter": "трудное",
        "plural": "трудные",
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
        "comparative": "труднее",
        "superlative": "самый трудный"
    },
    {
        "word": "счастливый",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "feminine": "счастливая",
        "neuter": "счастливое",
        "plural": "счастливые",
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
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day",
        "comparative": "счастливее",
        "superlative": "самый счастливый"
    },
    {
        "word": "усталый",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувство потребности в отдыхе или сне.",
                "examples": [
                    "Я очень устал после работы."
                ]
            }
        ],
        "feminine": "усталая",
        "neuter": "усталое",
        "plural": "усталые",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
        "comparative": "усталее",
        "superlative": "самый усталый"
    },
    {
        "word": "полный",
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
        "feminine": "полная",
        "neuter": "полное",
        "plural": "полные"
    },
    {
        "word": "неполный",
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
        "feminine": "неполная",
        "neuter": "неполное",
        "plural": "неполные"
    },
    {
        "word": "чистый",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "dirty",
        "oppositeEmoji": "💩",
        "subtext": "опрятный, безупречный",
        "definitions": [
            {
                "text": "Свободный от грязи.",
                "examples": [
                    "Моя комната чистая."
                ]
            }
        ],
        "feminine": "чистая",
        "neuter": "чистое",
        "plural": "чистые",
        "comparative": "чище",
        "superlative": "самый чистый"
    },
    {
        "word": "здоровый",
        "level": "starter",
        "theme": "basic_foods_A1",
        "form": "adjective",
        "feminine": "здоровая",
        "neuter": "здоровое",
        "plural": "здоровые",
        "definitions": [
            {
                "text": "Good for your body; not ill.",
                "examples": [
                    "Vegetables are healthy food."
                ]
            }
        ],
        "subtext": "well, fit, healthy diet",
        "comparative": "здоровее",
        "superlative": "самый здоровый",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔"
    },
    {
        "word": "больной",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "feminine": "больная",
        "neuter": "больное",
        "plural": "больные",
        "definitions": [
            {
                "text": "Not well; sick.",
                "examples": [
                    "I feel ill today."
                ]
            }
        ],
        "subtext": "sick, feel ill",
        "comparative": "более больной",
        "superlative": "самый больной",
        "opposite": "well",
        "oppositeEmoji": "💪"
    },
    {
        "word": "онлайн",
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
        "subtext": "online shopping / online course / stay online",
        "comparative": "более онлайн",
        "superlative": "самый онлайн",
        "feminine": "онлайн",
        "neuter": "онлайн",
        "plural": "онлайн"
    },
    {
        "word": "одинокий",
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
        "comparative": "более одинокий",
        "superlative": "самый одинокий",
        "feminine": "одинокая",
        "neuter": "одинокое",
        "plural": "одинокие"
    },
    {
        "word": "расслабленный",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "feminine": "расслабленная",
        "neuter": "расслабленное",
        "plural": "расслабленные",
        "definitions": [
            {
                "text": "Calm; not worried or stressed.",
                "examples": [
                    "I feel relaxed at the weekend."
                ]
            }
        ],
        "subtext": "calm, feeling relaxed",
        "comparative": "расслабленнее",
        "superlative": "самый расслабленный",
        "opposite": "stressed",
        "oppositeEmoji": "😫"
    },
    {
        "word": "обеспокоенный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "обеспокоенная",
        "neuter": "обеспокоенное",
        "plural": "обеспокоенные",
        "definitions": [
            {
                "text": "Feeling anxious about something that might happen.",
                "examples": [
                    "She is worried about her job."
                ]
            }
        ],
        "subtext": "anxious",
        "comparative": "обеспокоеннее",
        "superlative": "самый обеспокоенный",
        "opposite": "calm",
        "oppositeEmoji": "😌"
    },
    {
        "word": "занятой",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий много дел.",
                "examples": [
                    "Я очень занят на этой неделе."
                ]
            }
        ],
        "feminine": "занятая",
        "neuter": "занятое",
        "plural": "занятые",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
        "comparative": "более занятой",
        "superlative": "самый занятой"
    },
    {
        "word": "полезный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "полезная",
        "neuter": "полезное",
        "plural": "полезные",
        "definitions": [
            {
                "text": "Helpful; having a practical purpose.",
                "examples": [
                    "A car is very useful in the country."
                ]
            }
        ],
        "subtext": "helpful, practical",
        "comparative": "полезнее",
        "superlative": "самый полезный",
        "opposite": "useless",
        "oppositeEmoji": "🗑️"
    },
    {
        "word": "важный",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "значимый, основной",
        "definitions": [
            {
                "text": "Имеющий большое значение или влияние.",
                "examples": [
                    "Сон очень важен."
                ]
            }
        ],
        "feminine": "важная",
        "neuter": "важное",
        "plural": "важные",
        "comparative": "важнее",
        "superlative": "самый важный"
    },
    {
        "word": "красный",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "тёмно-красный, ярко-красный",
        "definitions": [
            {
                "text": "Имеющий цвет крови или спелого помидора.",
                "examples": [
                    "У неё красная сумка."
                ]
            }
        ],
        "feminine": "красная",
        "neuter": "красное",
        "plural": "красные",
        "comparative": "краснее",
        "superlative": "самый красный"
    },
    {
        "word": "синий",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "голубой, тёмно-синий",
        "definitions": [
            {
                "text": "Имеющий цвет чистого неба.",
                "examples": [
                    "Его машина синяя."
                ]
            }
        ],
        "feminine": "синяя",
        "neuter": "синее",
        "plural": "синие",
        "comparative": "синее",
        "superlative": "самый синий"
    },
    {
        "word": "зелёный",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "светло-зелёный, тёмно-зелёный",
        "definitions": [
            {
                "text": "Имеющий цвет травы или листьев.",
                "examples": [
                    "Она носит зелёное платье."
                ]
            }
        ],
        "feminine": "зелёная",
        "neuter": "зелёное",
        "plural": "зелёные",
        "comparative": "зелёнее",
        "superlative": "самый зелёный"
    },
    {
        "word": "белый",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "чисто-белый, белоснежный",
        "definitions": [
            {
                "text": "Имеющий цвет снега или молока.",
                "examples": [
                    "Стены белые."
                ]
            }
        ],
        "feminine": "белая",
        "neuter": "белое",
        "plural": "белые",
        "comparative": "белее",
        "superlative": "самый белый"
    },
    {
        "word": "чёрный",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "чёрный как смоль, тёмный",
        "definitions": [
            {
                "text": "Имеющий самый тёмный цвет, как ночное небо.",
                "examples": [
                    "Он носит чёрное пальто."
                ]
            }
        ],
        "feminine": "чёрная",
        "neuter": "чёрное",
        "plural": "чёрные",
        "comparative": "чёрнее",
        "superlative": "самый чёрный"
    },
    {
        "word": "жёлтый",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "лимонно-жёлтый, ярко-жёлтый",
        "definitions": [
            {
                "text": "Имеющий цвет солнца или лимона.",
                "examples": [
                    "У неё жёлтый зонт."
                ]
            }
        ],
        "feminine": "жёлтая",
        "neuter": "жёлтое",
        "plural": "жёлтые",
        "comparative": "жёлтее",
        "superlative": "самый жёлтый"
    },
    {
        "word": "свободный",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "даром, в подарок",
        "definitions": [
            {
                "text": "Который не стоит денег.",
                "examples": [
                    "Музей бесплатный по воскресеньям."
                ]
            }
        ],
        "feminine": "свободная",
        "neuter": "свободное",
        "plural": "свободные",
        "comparative": "свободнее",
        "superlative": "самый свободный"
    },
    {
        "word": "открытый",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "closed",
        "oppositeEmoji": "🔒",
        "subtext": "свободный вход",
        "definitions": [
            {
                "text": "Не закрытый; позволяющий войти.",
                "examples": [
                    "Магазин открыт до восьми."
                ]
            }
        ],
        "feminine": "открытая",
        "neuter": "открытое",
        "plural": "открытые",
        "comparative": "открытее",
        "superlative": "самый открытый"
    },
    {
        "word": "закрытый",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "subtext": "недоступный",
        "definitions": [
            {
                "text": "Не открытый.",
                "examples": [
                    "Банк закрыт по воскресеньям."
                ]
            }
        ],
        "feminine": "закрытая",
        "neuter": "закрытое",
        "plural": "закрытые",
        "comparative": "закрытее",
        "superlative": "самый закрытый"
    },
    {
        "word": "крупный",
        "feminine": "крупная",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "крупное",
        "plural": "крупные",
        "definitions": [
            {
                "text": "Of more than average size or amount.",
                "examples": [
                    "Paris is a very large city."
                ]
            }
        ],
        "subtext": "a large city / a large company / a large amount",
        "comparative": "крупнее",
        "superlative": "самый крупный"
    },
    {
        "word": "небольшой",
        "feminine": "небольшая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "небольшое",
        "plural": "небольшие",
        "definitions": [
            {
                "text": "Small in size; a small amount of.",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "subtext": "a little bit / a little money / too little",
        "comparative": "более небольшой",
        "superlative": "самый небольшой"
    },
    {
        "word": "длинный",
        "feminine": "длинная",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "длинное",
        "plural": "длинные",
        "definitions": [
            {
                "text": "Of great length; lasting a long time.",
                "examples": [
                    "She has a long commute every day."
                ]
            }
        ],
        "subtext": "a long journey / a long day / a long time",
        "comparative": "длиннее",
        "superlative": "самый длинный"
    },
    {
        "word": "высокий",
        "feminine": "высокая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📈",
        "form": "adjective",
        "neuter": "высокое",
        "plural": "высокие",
        "definitions": [
            {
                "text": "Of greater than average height or level.",
                "examples": [
                    "The rent in this area is very high."
                ]
            }
        ],
        "subtext": "high price / high rent / high quality",
        "comparative": "выше",
        "superlative": "самый высокий"
    },
    {
        "word": "низкий",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "feminine": "низкая",
        "emoji": "📉",
        "neuter": "низкое",
        "plural": "низкие",
        "definitions": [
            {
                "text": "Of less than average height or level.",
                "examples": [
                    "The salary is too low for the hours involved."
                ]
            }
        ],
        "subtext": "low price / low salary / low quality",
        "comparative": "ниже",
        "superlative": "самый низкий"
    },
    {
        "word": "полный",
        "feminine": "полная",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🥛",
        "form": "adjective",
        "neuter": "полное",
        "plural": "полные",
        "definitions": [
            {
                "text": "Containing as much as possible; complete.",
                "examples": [
                    "I feel full after that lunch."
                ]
            }
        ],
        "subtext": "full time / a full day / full of people",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "пустой",
        "feminine": "пустая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🫙",
        "form": "adjective",
        "neuter": "пустое",
        "plural": "пустые",
        "definitions": [
            {
                "text": "Containing nothing; with no people.",
                "examples": [
                    "The office is empty at weekends."
                ]
            }
        ],
        "subtext": "an empty flat / an empty room / nearly empty",
        "comparative": "более пустой",
        "superlative": "самый пустой"
    },
    {
        "word": "тёплый",
        "feminine": "тёплая",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "neuter": "тёплое",
        "plural": "тёплые",
        "definitions": [
            {
                "text": "Slightly hot; pleasantly heated.",
                "examples": [
                    "The office is warm and comfortable."
                ]
            }
        ],
        "subtext": "warm weather / a warm welcome / keep warm",
        "comparative": "тёплее",
        "superlative": "самый тёплый"
    },
    {
        "word": "прохладный",
        "feminine": "прохладная",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌬️",
        "form": "adjective",
        "neuter": "прохладное",
        "plural": "прохладные",
        "definitions": [
            {
                "text": "Slightly cold; pleasantly low temperature.",
                "examples": [
                    "She prefers cool weather for working."
                ]
            }
        ],
        "subtext": "cool weather / a cool drink / stay cool",
        "comparative": "прохладнее",
        "superlative": "самый прохладный"
    },
    {
        "word": "мокрый",
        "feminine": "мокрая",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🚿",
        "form": "adjective",
        "neuter": "мокрое",
        "plural": "мокрые",
        "definitions": [
            {
                "text": "Covered with water or liquid.",
                "examples": [
                    "His jacket is wet from the rain."
                ]
            }
        ],
        "subtext": "wet weather / wet clothes / get wet",
        "comparative": "мокрее",
        "superlative": "самый мокрый"
    },
    {
        "word": "сухой",
        "feminine": "сухая",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🏜️",
        "form": "adjective",
        "neuter": "сухое",
        "plural": "сухие",
        "definitions": [
            {
                "text": "Without water or liquid; not wet.",
                "examples": [
                    "The storage room must stay dry."
                ]
            }
        ],
        "subtext": "dry weather / dry skin / keep dry",
        "comparative": "более сухой",
        "superlative": "самый сухой"
    },
    {
        "word": "грязный",
        "feminine": "грязная",
        "level": "starter",
        "emoji": "💩",
        "form": "adjective",
        "neuter": "грязное",
        "plural": "грязные",
        "definitions": [
            {
                "text": "Covered in dirt or impurities.",
                "examples": [
                    "His hands are dirty after fixing the car."
                ]
            }
        ],
        "subtext": "dirty hands / dirty clothes / get dirty",
        "comparative": "грязнее",
        "superlative": "самый грязный"
    },
    {
        "word": "твёрдый",
        "feminine": "твёрдая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🧱",
        "form": "adjective",
        "neuter": "твёрдое",
        "plural": "твёрдые",
        "definitions": [
            {
                "text": "Firm and solid; difficult.",
                "examples": [
                    "The chair is very hard and uncomfortable."
                ]
            }
        ],
        "subtext": "hard work / a hard decision / too hard",
        "comparative": "твёрдее",
        "superlative": "самый твёрдый"
    },
    {
        "word": "мягкий",
        "feminine": "мягкая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "☁️",
        "form": "adjective",
        "neuter": "мягкое",
        "plural": "мягкие",
        "definitions": [
            {
                "text": "Not hard; gentle to the touch.",
                "examples": [
                    "The sofa is very soft and comfortable."
                ]
            }
        ],
        "subtext": "soft light / soft music / soft skills",
        "comparative": "мягкее",
        "superlative": "самый мягкий"
    },
    {
        "word": "тяжёлый",
        "feminine": "тяжёлая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🏋️",
        "form": "adjective",
        "neuter": "тяжёлое",
        "plural": "тяжёлые",
        "definitions": [
            {
                "text": "Of great weight; difficult to carry.",
                "examples": [
                    "The bag is very heavy with all those files."
                ]
            }
        ],
        "subtext": "heavy traffic / heavy rain / too heavy",
        "comparative": "тяжёлее",
        "superlative": "самый тяжёлый"
    },
    {
        "word": "лёгкий",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🪶",
        "form": "adjective",
        "feminine": "лёгкая",
        "neuter": "лёгкое",
        "plural": "лёгкие",
        "definitions": [
            {
                "text": "Not heavy; pale in colour.",
                "examples": [
                    "She carries a light bag to work every day."
                ]
            }
        ],
        "subtext": "light rain / light traffic / a light meal",
        "comparative": "легче",
        "superlative": "самый лёгкий"
    },
    {
        "word": "коричневый",
        "feminine": "коричневая",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟫",
        "form": "adjective",
        "neuter": "коричневое",
        "plural": "коричневые",
        "definitions": [
            {
                "text": "Having the colour of wood or earth.",
                "examples": [
                    "She has brown eyes and dark hair."
                ]
            }
        ],
        "subtext": "dark brown / light brown / brown bread",
        "comparative": "коричневее",
        "superlative": "самый коричневый"
    },
    {
        "word": "серый",
        "feminine": "серая",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩶",
        "form": "adjective",
        "neuter": "серое",
        "plural": "серые",
        "definitions": [
            {
                "text": "Having a colour between black and white.",
                "examples": [
                    "He has grey hair and a kind face."
                ]
            }
        ],
        "subtext": "grey area / grey sky / pale grey",
        "comparative": "серее",
        "superlative": "самый серый"
    },
    {
        "word": "розовый",
        "feminine": "розовая",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩷",
        "form": "adjective",
        "neuter": "розовое",
        "plural": "розовые",
        "definitions": [
            {
                "text": "Having a pale red colour.",
                "examples": [
                    "She prefers pink to red."
                ]
            }
        ],
        "subtext": "light pink / bright pink / hot pink",
        "comparative": "розовее",
        "superlative": "самый розовый"
    },
    {
        "word": "оранжевый",
        "feminine": "оранжевая",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟧",
        "form": "adjective",
        "neuter": "оранжевое",
        "plural": "оранжевые",
        "definitions": [
            {
                "text": "Having the colour of an orange fruit.",
                "examples": [
                    "He bought an orange jacket."
                ]
            }
        ],
        "subtext": "bright orange / dark orange / orange light",
        "comparative": "оранжевее",
        "superlative": "самый оранжевый"
    },
    {
        "word": "великолепный",
        "feminine": "великолепная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌟",
        "form": "adjective",
        "neuter": "великолепное",
        "plural": "великолепные",
        "definitions": [
            {
                "text": "Extremely good; large in amount.",
                "examples": [
                    "She is a great manager."
                ]
            }
        ],
        "subtext": "a great idea / a great opportunity / great value",
        "comparative": "великолепнее",
        "superlative": "самый великолепный"
    },
    {
        "word": "приятный",
        "feminine": "приятная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😊",
        "form": "adjective",
        "neuter": "приятное",
        "plural": "приятные",
        "definitions": [
            {
                "text": "Pleasant or kind.",
                "examples": [
                    "The new office is very nice."
                ]
            }
        ],
        "subtext": "a nice day / a nice place / a nice person",
        "comparative": "приятнее",
        "superlative": "самый приятный"
    },
    {
        "word": "замечательный",
        "feminine": "замечательная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✨",
        "form": "adjective",
        "neuter": "замечательное",
        "plural": "замечательные",
        "definitions": [
            {
                "text": "Extremely good; causing delight.",
                "examples": [
                    "They had a wonderful team."
                ]
            }
        ],
        "subtext": "a wonderful opportunity / a wonderful time",
        "comparative": "замечательнее",
        "superlative": "самый замечательный"
    },
    {
        "word": "ужасный",
        "feminine": "ужасная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😫",
        "form": "adjective",
        "neuter": "ужасное",
        "plural": "ужасные",
        "definitions": [
            {
                "text": "Extremely bad.",
                "examples": [
                    "The traffic this morning was terrible."
                ]
            }
        ],
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "comparative": "ужаснее",
        "superlative": "самый ужасный"
    },
    {
        "word": "отвратительный",
        "feminine": "отвратительная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤮",
        "form": "adjective",
        "neuter": "отвратительное",
        "plural": "отвратительные",
        "definitions": [
            {
                "text": "Very bad or unpleasant.",
                "examples": [
                    "The noise in the open office is awful."
                ]
            }
        ],
        "subtext": "awful weather / awful news / simply awful",
        "comparative": "отвратительнее",
        "superlative": "самый отвратительный"
    },
    {
        "word": "удивительный",
        "feminine": "удивительная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😲",
        "form": "adjective",
        "neuter": "удивительное",
        "plural": "удивительные",
        "definitions": [
            {
                "text": "Causing great surprise or admiration.",
                "examples": [
                    "She gave an amazing presentation."
                ]
            }
        ],
        "subtext": "an amazing result / an amazing offer / truly amazing",
        "comparative": "удивительнее",
        "superlative": "самый удивительный"
    },
    {
        "word": "фантастический",
        "feminine": "фантастическая",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤩",
        "form": "adjective",
        "neuter": "фантастическое",
        "plural": "фантастические",
        "definitions": [
            {
                "text": "Extremely good.",
                "examples": [
                    "The new system works in a fantastic way."
                ]
            }
        ],
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
        "comparative": "фантастическее",
        "superlative": "самый фантастический"
    },
    {
        "word": "грустный",
        "feminine": "грустная",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😢",
        "form": "adjective",
        "neuter": "грустное",
        "plural": "грустные",
        "definitions": [
            {
                "text": "Feeling unhappy or sorrowful.",
                "examples": [
                    "He was sad to leave the company."
                ]
            }
        ],
        "subtext": "feel sad / a sad situation / deeply sad",
        "comparative": "грустнее",
        "superlative": "самый грустный"
    },
    {
        "word": "голодный",
        "feminine": "голодная",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🤤",
        "form": "adjective",
        "neuter": "голодное",
        "plural": "голодные",
        "definitions": [
            {
                "text": "Needing food.",
                "examples": [
                    "I am hungry — it is already two o'clock."
                ]
            }
        ],
        "subtext": "feel hungry / very hungry / go hungry",
        "comparative": "голоднее",
        "superlative": "самый голодный"
    },
    {
        "word": "сердитый",
        "feminine": "сердитая",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😠",
        "form": "adjective",
        "neuter": "сердитое",
        "plural": "сердитые",
        "definitions": [
            {
                "text": "Feeling strong displeasure.",
                "examples": [
                    "She was angry about the decision."
                ]
            }
        ],
        "subtext": "feel angry / angry with someone / very angry",
        "comparative": "сердитее",
        "superlative": "самый сердитый"
    },
    {
        "word": "скучающий",
        "feminine": "скучающая",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😐",
        "form": "adjective",
        "neuter": "скучающее",
        "plural": "скучающие",
        "definitions": [
            {
                "text": "Feeling uninterested or restless.",
                "examples": [
                    "He feels bored in long meetings."
                ]
            }
        ],
        "subtext": "feel bored / bored with / easily bored",
        "comparative": "скучающее",
        "superlative": "самый скучающий"
    },
    {
        "word": "взволнованный",
        "feminine": "взволнованная",
        "level": "starter",
        "emoji": "🤩",
        "form": "adjective",
        "neuter": "взволнованное",
        "plural": "взволнованные",
        "definitions": [
            {
                "text": "Feeling enthusiasm and eagerness.",
                "examples": [
                    "She is excited about her new job."
                ]
            }
        ],
        "subtext": "feel excited / excited about / very excited",
        "comparative": "взволнованнее",
        "superlative": "самый взволнованный"
    },
    {
        "word": "испуганный",
        "feminine": "испуганная",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😨",
        "form": "adjective",
        "neuter": "испуганное",
        "plural": "испуганные",
        "definitions": [
            {
                "text": "Feeling fear.",
                "examples": [
                    "He is afraid of making mistakes."
                ]
            }
        ],
        "subtext": "afraid of / feel afraid / deeply afraid",
        "comparative": "испуганнее",
        "superlative": "самый испуганный"
    },
    {
        "word": "огорчённый",
        "feminine": "огорчённая",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🥺",
        "form": "adjective",
        "neuter": "огорчённое",
        "plural": "огорчённые",
        "definitions": [
            {
                "text": "Feeling regret or sadness.",
                "examples": [
                    "She is sorry for the delay."
                ]
            }
        ],
        "subtext": "feel sorry / sorry for / sorry about",
        "comparative": "огорчённее",
        "superlative": "самый огорчённый"
    },
    {
        "word": "правильный",
        "feminine": "правильная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "neuter": "правильное",
        "plural": "правильные",
        "definitions": [
            {
                "text": "Correct; suitable.",
                "examples": [
                    "Is this the right office?"
                ]
            }
        ],
        "subtext": "right answer / right time / absolutely right",
        "comparative": "правильнее",
        "superlative": "самый правильный"
    },
    {
        "word": "неправильный",
        "feminine": "неправильная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❌",
        "form": "adjective",
        "neuter": "неправильное",
        "plural": "неправильные",
        "definitions": [
            {
                "text": "Not correct; not suitable.",
                "examples": [
                    "That was the wrong decision."
                ]
            }
        ],
        "subtext": "wrong answer / go wrong / completely wrong",
        "comparative": "неправильнее",
        "superlative": "самый неправильный"
    },
    {
        "word": "новый",
        "feminine": "новая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🆕",
        "form": "adjective",
        "neuter": "новое",
        "plural": "новые",
        "definitions": [
            {
                "text": "Not existing before; recently made.",
                "examples": [
                    "She has a new job starting in March."
                ]
            }
        ],
        "subtext": "new job / brand new / completely new",
        "comparative": "новее",
        "superlative": "самый новый"
    },
    {
        "word": "другой",
        "feminine": "другая",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "↔️",
        "form": "adjective",
        "neuter": "другое",
        "plural": "другие",
        "definitions": [
            {
                "text": "Not the same as another.",
                "examples": [
                    "This job is very different from my last one."
                ]
            }
        ],
        "subtext": "completely different / very different / different from",
        "comparative": "более другой",
        "superlative": "самый другой"
    },
    {
        "word": "одинаковый",
        "feminine": "одинаковая",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "identical",
        "form": "adjective",
        "neuter": "одинаковое",
        "plural": "одинаковые",
        "definitions": [
            {
                "text": "Not different; identical.",
                "examples": [
                    "They earn the same salary."
                ]
            }
        ],
        "subtext": "the same as / exactly the same / same time",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "быстрый",
        "feminine": "быстрая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⚡",
        "form": "adjective",
        "neuter": "быстрое",
        "plural": "быстрые",
        "definitions": [
            {
                "text": "Moving or happening quickly.",
                "examples": [
                    "The train to work is fast and reliable."
                ]
            }
        ],
        "subtext": "fast food / fast train / very fast",
        "comparative": "быстрее",
        "superlative": "самый быстрый"
    },
    {
        "word": "медленный",
        "feminine": "медленная",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐢",
        "form": "adjective",
        "neuter": "медленное",
        "plural": "медленные",
        "definitions": [
            {
                "text": "Not fast; taking a long time.",
                "examples": [
                    "The new system is very slow."
                ]
            }
        ],
        "subtext": "slow progress / slow internet / very slow",
        "comparative": "медленнее",
        "superlative": "самый медленный"
    },
    {
        "word": "тихий",
        "feminine": "тихая",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤫",
        "form": "adjective",
        "neuter": "тихое",
        "plural": "тихие",
        "definitions": [
            {
                "text": "Making little or no noise; peaceful.",
                "examples": [
                    "The office is quiet at lunchtime."
                ]
            }
        ],
        "subtext": "quiet area / keep quiet / nice and quiet",
        "comparative": "тише",
        "superlative": "самый тихий"
    },
    {
        "word": "громкий",
        "feminine": "громкая",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🔊",
        "form": "adjective",
        "neuter": "громкое",
        "plural": "громкие",
        "definitions": [
            {
                "text": "Making a lot of noise.",
                "examples": [
                    "The open-plan office is too loud."
                ]
            }
        ],
        "subtext": "loud noise / too loud / a loud voice",
        "comparative": "громче",
        "superlative": "самый громкий"
    },
    {
        "word": "безопасный",
        "feminine": "безопасная",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛡️",
        "form": "adjective",
        "neuter": "безопасное",
        "plural": "безопасные",
        "definitions": [
            {
                "text": "Not dangerous; protected from harm.",
                "examples": [
                    "This neighbourhood is very safe."
                ]
            }
        ],
        "subtext": "safe area / safe to do / feel safe",
        "comparative": "безопаснее",
        "superlative": "самый безопасный"
    },
    {
        "word": "опасный",
        "feminine": "опасная",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "⚠️",
        "form": "adjective",
        "neuter": "опасное",
        "plural": "опасные",
        "definitions": [
            {
                "text": "Likely to cause harm.",
                "examples": [
                    "The commute on that road is dangerous."
                ]
            }
        ],
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "comparative": "опаснее",
        "superlative": "самый опасный"
    },
    {
        "word": "несчастный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "несчастная",
        "neuter": "несчастное",
        "plural": "несчастные",
        "definitions": [
            {
                "text": "Чувство неудовлетворенности или грусти.",
                "examples": [
                    "He is unhappy with his current salary."
                ]
            }
        ],
        "subtext": "несчастен из-за чего-то / глубоко несчастен",
        "comparative": "несчастнее",
        "superlative": "самый несчастный"
    },
    {
        "word": "нервный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "нервная",
        "neuter": "нервное",
        "plural": "нервные",
        "definitions": [
            {
                "text": "Чувство беспокойства или тревоги.",
                "examples": [
                    "He was nervous before the job interview."
                ]
            }
        ],
        "subtext": "нервничать перед собеседованием / очень нервный",
        "comparative": "нервнее",
        "superlative": "самый нервный"
    },
    {
        "word": "напряжённый",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "напряжённая",
        "neuter": "напряжённое",
        "plural": "напряжённые",
        "definitions": [
            {
                "text": "Feeling worried and tense from pressure.",
                "examples": [
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "feel stressed / very stressed / stressed out",
        "comparative": "напряжённее",
        "superlative": "самый напряжённый"
    },
    {
        "word": "уверенный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "уверенная",
        "neuter": "уверенное",
        "plural": "уверенные",
        "definitions": [
            {
                "text": "Feeling sure of your own abilities.",
                "examples": [
                    "She is very confident in client presentations."
                ]
            }
        ],
        "subtext": "feel confident / self-confident / very confident",
        "comparative": "увереннее",
        "superlative": "самый уверенный"
    },
    {
        "word": "гордый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "гордая",
        "neuter": "гордое",
        "plural": "гордые",
        "definitions": [
            {
                "text": "Feeling pleased about an achievement.",
                "examples": [
                    "He was proud to get his first promotion."
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of",
        "comparative": "гордее",
        "superlative": "самый гордый"
    },
    {
        "word": "напуганный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "напуганная",
        "neuter": "напуганное",
        "plural": "напуганные",
        "definitions": [
            {
                "text": "Feeling fear about something.",
                "examples": [
                    "She was scared about giving the presentation."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared",
        "comparative": "напуганнее",
        "superlative": "самый напуганный"
    },
    {
        "word": "удивлённый",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "feminine": "удивлённая",
        "neuter": "удивлённое",
        "plural": "удивлённые",
        "definitions": [
            {
                "text": "Feeling shock at something unexpected.",
                "examples": [
                    "He was surprised to get a pay rise."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "comparative": "удивлённее",
        "superlative": "самый удивлённый"
    },
    {
        "word": "разочарованный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "разочарованная",
        "neuter": "разочарованное",
        "plural": "разочарованные",
        "definitions": [
            {
                "text": "Feeling sad because something was not as good as expected.",
                "examples": [
                    "She was disappointed not to get the job."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "comparative": "разочарованнее",
        "superlative": "самый разочарованный"
    },
    {
        "word": "красивый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "красивая",
        "neuter": "красивое",
        "plural": "красивые",
        "definitions": [
            {
                "text": "Attractive and pleasing to look at.",
                "examples": [
                    "She has a beautiful, bright office with city views."
                ]
            }
        ],
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
        "comparative": "красивее",
        "superlative": "самый красивый"
    },
    {
        "word": "симпатичный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "симпатичная",
        "neuter": "симпатичное",
        "plural": "симпатичные",
        "definitions": [
            {
                "text": "Pleasant to look at; quite attractive.",
                "examples": [
                    "The new meeting room is very pretty."
                ]
            }
        ],
        "subtext": "pretty good / a pretty place / quite pretty",
        "comparative": "симпатичнее",
        "superlative": "самый симпатичный"
    },
    {
        "word": "сильный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "сильная",
        "neuter": "сильное",
        "plural": "сильные",
        "definitions": [
            {
                "text": "Having great physical or mental power.",
                "examples": [
                    "She is a strong leader and very respected."
                ]
            }
        ],
        "subtext": "strong coffee / strong opinion / very strong",
        "comparative": "сильнее",
        "superlative": "самый сильный"
    },
    {
        "word": "слабый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "слабая",
        "neuter": "слабое",
        "plural": "слабые",
        "definitions": [
            {
                "text": "Lacking strength or power.",
                "examples": [
                    "The signal is weak on the top floor."
                ]
            }
        ],
        "subtext": "weak connection / a weak argument / very weak",
        "comparative": "слабее",
        "superlative": "самый слабый"
    },
    {
        "word": "спортивный",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "feminine": "спортивная",
        "neuter": "спортивное",
        "plural": "спортивные",
        "definitions": [
            {
                "text": "In good physical condition through exercise.",
                "examples": [
                    "She keeps fit by cycling to work every day."
                ]
            }
        ],
        "subtext": "physically fit / stay fit / keep fit",
        "comparative": "спортивнее",
        "superlative": "самый спортивный"
    },
    {
        "word": "отличный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "отличная",
        "neuter": "отличное",
        "plural": "отличные",
        "definitions": [
            {
                "text": "Extremely good; of a very high standard.",
                "examples": [
                    "She received an excellent review."
                ]
            }
        ],
        "subtext": "excellent work / excellent results / absolutely excellent",
        "comparative": "отличнее",
        "superlative": "самый отличный"
    },
    {
        "word": "идеальный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "идеальная",
        "neuter": "идеальное",
        "plural": "идеальные",
        "definitions": [
            {
                "text": "Without any faults; completely correct.",
                "examples": [
                    "The timing of the launch was perfect."
                ]
            }
        ],
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
        "comparative": "идеальнее",
        "superlative": "самый идеальный"
    },
    {
        "word": "бесполезный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "бесполезная",
        "neuter": "бесполезное",
        "plural": "бесполезные",
        "definitions": [
            {
                "text": "Without any useful value; not helpful.",
                "examples": [
                    "This software is useless for our needs."
                ]
            }
        ],
        "subtext": "completely useless / prove useless / a useless idea",
        "comparative": "бесполезнее",
        "superlative": "самый бесполезный"
    },
    {
        "word": "верный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "верная",
        "neuter": "верное",
        "plural": "верные",
        "definitions": [
            {
                "text": "True or right; without errors.",
                "examples": [
                    "Please check the figures are correct."
                ]
            }
        ],
        "subtext": "correct answer / the correct way / completely correct",
        "comparative": "вернее",
        "superlative": "самый верный"
    },
    {
        "word": "интересный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "интересная",
        "neuter": "интересное",
        "plural": "интересные",
        "definitions": [
            {
                "text": "Attracting attention; worth knowing about.",
                "examples": [
                    "The new proposal is very interesting."
                ]
            }
        ],
        "subtext": "find interesting / very interesting / an interesting idea",
        "comparative": "интереснее",
        "superlative": "самый интересный"
    },
    {
        "word": "скучный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "скучная",
        "neuter": "скучное",
        "plural": "скучные",
        "definitions": [
            {
                "text": "Not interesting; dull.",
                "examples": [
                    "The training session was very boring."
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": "скучнее",
        "superlative": "самый скучный"
    },
    {
        "word": "необходимый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "необходимая",
        "neuter": "необходимое",
        "plural": "необходимые",
        "definitions": [
            {
                "text": "Needed; required in order to do something.",
                "examples": [
                    "A good internet connection is necessary for remote work."
                ]
            }
        ],
        "subtext": "absolutely necessary / if necessary / necessary to do",
        "comparative": "необходимее",
        "superlative": "самый необходимый"
    },
    {
        "word": "возможный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "возможная",
        "neuter": "возможное",
        "plural": "возможные",
        "definitions": [
            {
                "text": "Able to happen or be achieved.",
                "examples": [
                    "Is it possible to finish by Friday?"
                ]
            }
        ],
        "subtext": "as soon as possible / it is possible / make possible",
        "comparative": "возможнее",
        "superlative": "самый возможный"
    },
    {
        "word": "невозможный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "невозможная",
        "neuter": "невозможное",
        "plural": "невозможные",
        "definitions": [
            {
                "text": "Not able to happen or be done.",
                "examples": [
                    "It is impossible to finish in one day."
                ]
            }
        ],
        "subtext": "virtually impossible / make impossible / nearly impossible",
        "comparative": "невозможнее",
        "superlative": "самый невозможный"
    },
    {
        "word": "особенный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "особенная",
        "neuter": "особенное",
        "plural": "особенные",
        "definitions": [
            {
                "text": "Different from what is usual; particularly important.",
                "examples": [
                    "She has a special talent for problem-solving."
                ]
            }
        ],
        "subtext": "a special offer / special occasion / very special",
        "comparative": "особеннее",
        "superlative": "самый особенный"
    },
    {
        "word": "популярный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "популярная",
        "neuter": "популярное",
        "plural": "популярные",
        "definitions": [
            {
                "text": "Liked by many people.",
                "examples": [
                    "The new café near the office is very popular."
                ]
            }
        ],
        "subtext": "very popular / popular choice / most popular",
        "comparative": "популярнее",
        "superlative": "самый популярный"
    },
    {
        "word": "похожий",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "похожая",
        "neuter": "похожее",
        "plural": "похожие",
        "definitions": [
            {
                "text": "Almost the same; having many shared features.",
                "examples": [
                    "Our approaches are very similar."
                ]
            }
        ],
        "subtext": "very similar / similar to / similar results",
        "comparative": "похожее",
        "superlative": "самый похожий"
    },
    {
        "word": "дружелюбный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "дружелюбная",
        "neuter": "дружелюбное",
        "plural": "дружелюбные",
        "definitions": [
            {
                "text": "Kind and pleasant; easy to talk to.",
                "examples": [
                    "The new manager is very friendly and approachable."
                ]
            }
        ],
        "subtext": "very friendly / a friendly face / friendly atmosphere",
        "comparative": "дружелюбнее",
        "superlative": "самый дружелюбный"
    },
    {
        "word": "добрый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "добрая",
        "neuter": "доброе",
        "plural": "добрые",
        "definitions": [
            {
                "text": "Caring and generous to others.",
                "examples": [
                    "She is kind to everyone in the office."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person",
        "comparative": "добрее",
        "superlative": "самый добрый"
    },
    {
        "word": "смешной",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "смешная",
        "neuter": "смешное",
        "plural": "смешные",
        "definitions": [
            {
                "text": "Making people laugh; humorous.",
                "examples": [
                    "He has a funny way of explaining complex ideas."
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny",
        "comparative": "более смешной",
        "superlative": "самый смешной"
    },
    {
        "word": "умный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "умная",
        "neuter": "умное",
        "plural": "умные",
        "definitions": [
            {
                "text": "Intelligent; quick to understand.",
                "examples": [
                    "She is a clever negotiator."
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough",
        "comparative": "умнее",
        "superlative": "самый умный"
    },
    {
        "word": "вежливый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "вежливая",
        "neuter": "вежливое",
        "plural": "вежливые",
        "definitions": [
            {
                "text": "Behaving in a respectful and courteous way.",
                "examples": [
                    "He is always polite with clients."
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough",
        "comparative": "вежливее",
        "superlative": "самый вежливый"
    },
    {
        "word": "грубый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "грубая",
        "neuter": "грубое",
        "plural": "грубые",
        "definitions": [
            {
                "text": "Not polite; showing a lack of respect.",
                "examples": [
                    "That email was quite rude and unprofessional."
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude",
        "comparative": "грубее",
        "superlative": "самый грубый"
    },
    {
        "word": "ленивый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "ленивая",
        "neuter": "ленивое",
        "plural": "ленивые",
        "definitions": [
            {
                "text": "Not willing to work or use effort.",
                "examples": [
                    "He has a reputation for being lazy with follow-ups."
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy",
        "comparative": "ленивее",
        "superlative": "самый ленивый"
    },
    {
        "word": "честный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "честная",
        "neuter": "честное",
        "plural": "честные",
        "definitions": [
            {
                "text": "Telling the truth; not deceiving.",
                "examples": [
                    "She is known for being completely honest with clients."
                ]
            }
        ],
        "subtext": "very honest / brutally honest / completely honest",
        "comparative": "честнее",
        "superlative": "самый честный"
    },
    {
        "word": "шумный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "шумная",
        "neuter": "шумное",
        "plural": "шумные",
        "definitions": [
            {
                "text": "Making a lot of sound; loud.",
                "examples": [
                    "The open plan office is very noisy."
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy",
        "comparative": "шумнее",
        "superlative": "самый шумный"
    }
];
    const lang = "ru";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();