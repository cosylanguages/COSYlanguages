(function() {
    const data = [
    {
        "word": "высокий",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "низкий",
        "oppositeEmoji": "📏",
        "feminine": "высокая",
        "translation": "tall",
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
        "subtext": "a tall building / a tall person / tall enough"
    },
    {
        "word": "низкий",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "высокий",
        "oppositeEmoji": "🗼",
        "feminine": "низкая",
        "translation": "low",
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
        "subtext": "low price / low salary / low quality"
    },
    {
        "word": "молодой",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "старый",
        "oppositeEmoji": "👴"
    },
    {
        "word": "старый",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "молодой",
        "oppositeEmoji": "👶",
        "feminine": "старая",
        "translation": "old",
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
        "subtext": "old friend / old habits / very old"
    },
    {
        "word": "хороший",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "плохой",
        "oppositeEmoji": "👎",
        "feminine": "хорошая",
        "translation": "good",
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
        "subtext": "great, nice, pleasant / good idea / good luck / good value"
    },
    {
        "word": "плохой",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "хороший",
        "oppositeEmoji": "👍",
        "feminine": "плохая",
        "translation": "bad",
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
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision"
    },
    {
        "word": "лёгкий",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🪶",
        "form": "adjective",
        "opposite": "трудный",
        "oppositeEmoji": "❌",
        "feminine": "лёгкая",
        "translation": "light",
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
        "subtext": "light rain / light traffic / a light meal"
    },
    {
        "word": "трудный",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "лёгкий",
        "oppositeEmoji": "✅",
        "feminine": "трудная",
        "translation": "difficult",
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
        "subtext": "difficult to do / very difficult / find it difficult"
    },
    {
        "word": "большой",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "маленький",
        "oppositeEmoji": "🐭",
        "feminine": "большая",
        "translation": "big",
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
        "subtext": "large, huge / a big house / a big problem / big enough"
    },
    {
        "word": "маленький",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "большой",
        "oppositeEmoji": "🐘",
        "feminine": "маленькая",
        "translation": "small",
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
        "subtext": "little, tiny / a small flat / a small salary / too small"
    },
    {
        "word": "счастливый",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "грустный",
        "feminine": "счастливая",
        "translation": "happy",
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
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day"
    },
    {
        "word": "усталый",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "обеспокоенный",
        "oppositeEmoji": "😟",
        "definitions": [
            {
                "text": "Чувство потребности в отдыхе или сне.",
                "examples": [
                    "Я очень устал после работы."
                ]
            }
        ],
        "feminine": "усталая",
        "translation": "tired",
        "neuter": "усталое",
        "plural": "усталые",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired"
    },
    {
        "word": "дорогой",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "дешёвый",
        "oppositeEmoji": "🏷️",
        "feminine": "дорогая",
        "translation": "expensive",
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
        "subtext": "costly, high price / very expensive / expensive taste / too expensive"
    },
    {
        "word": "дешёвый",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "дорогой",
        "oppositeEmoji": "💎",
        "feminine": "дешёвая",
        "translation": "cheap",
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
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful"
    },
    {
        "word": "полный рабочий день",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "form": "adjective",
        "opposite": "неполный рабочий день",
        "definitions": [
            {
                "text": "Работа в течение полного количества часов в рабочую неделю.",
                "examples": [
                    "У неё работа на полный рабочий день в банке."
                ]
            }
        ]
    },
    {
        "word": "неполный рабочий день",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "form": "adjective",
        "opposite": "полный рабочий день",
        "definitions": [
            {
                "text": "Работа меньшее количество часов, чем стандартная рабочая неделя.",
                "examples": [
                    "Он работает неполный рабочий день по субботам."
                ]
            }
        ]
    },
    {
        "word": "чистый",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "грязный",
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
        "translation": "clean",
        "neuter": "чистое",
        "plural": "чистые"
    },
    {
        "word": "здоровый",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍎",
        "form": "adjective",
        "opposite": "больной",
        "definitions": [
            {
                "text": "Полезный для тела; не больной.",
                "examples": [
                    "Овощи — это здоровая еда."
                ]
            }
        ]
    },
    {
        "word": "больной",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "здоровый",
        "definitions": [
            {
                "text": "Чувствующий себя плохо; страдающий от болезни.",
                "examples": [
                    "Я чувствую себя больным сегодня."
                ]
            }
        ]
    },
    {
        "word": "онлайн",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "С использованием интернета.",
                "examples": [
                    "Я иногда покупаю еду онлайн."
                ]
            }
        ]
    },
    {
        "word": "один",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🧍",
        "form": "adjective",
        "opposite": "вместе",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Без других людей; сам по себе.",
                "examples": [
                    "Она живет одна."
                ]
            }
        ]
    },
    {
        "word": "расслабленный",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "напряженный",
        "oppositeEmoji": "😫",
        "subtext": "спокойный",
        "definitions": [
            {
                "text": "Спокойный; не встревоженный и не напряженный.",
                "examples": [
                    "Я чувствую себя расслабленным в выходные."
                ]
            }
        ]
    },
    {
        "word": "обеспокоенный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "спокойный",
        "oppositeEmoji": "😌",
        "subtext": "тревожный",
        "definitions": [
            {
                "text": "Чувство тревоги из-за того, что может случиться.",
                "examples": [
                    "Она обеспокоена своей работой."
                ]
            }
        ]
    },
    {
        "word": "занятой",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "свободный",
        "definitions": [
            {
                "text": "Имеющий много дел.",
                "examples": [
                    "Я очень занят на этой неделе."
                ]
            }
        ],
        "feminine": "занятая",
        "translation": "busy",
        "neuter": "занятое",
        "plural": "занятые",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy"
    },
    {
        "word": "полезный",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "бесполезный",
        "definitions": [
            {
                "text": "Помогающий; имеющий практическую цель.",
                "examples": [
                    "Машина очень полезна в деревне."
                ]
            }
        ]
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
        "translation": "important",
        "neuter": "важное",
        "plural": "важные"
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
        "translation": "red",
        "neuter": "красное",
        "plural": "красные"
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
        "translation": "blue",
        "neuter": "синее",
        "plural": "синие"
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
        "translation": "green",
        "neuter": "зелёное",
        "plural": "зелёные"
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
        "translation": "white",
        "neuter": "белое",
        "plural": "белые"
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
        "translation": "black",
        "neuter": "чёрное",
        "plural": "чёрные"
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
        "translation": "yellow",
        "neuter": "жёлтое",
        "plural": "жёлтые"
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
        "translation": "free",
        "neuter": "свободное",
        "plural": "свободные"
    },
    {
        "word": "открытый",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "закрытый",
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
        "translation": "open",
        "neuter": "открытое",
        "plural": "открытые"
    },
    {
        "word": "закрытый",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "открытый",
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
        "translation": "closed",
        "neuter": "закрытое",
        "plural": "закрытые"
    },
    {
        "word": "холодный",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "горячий",
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
        "translation": "cold",
        "neuter": "холодное",
        "plural": "холодные"
    },
    {
        "word": "горячий",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "холодный",
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
        "translation": "hot",
        "neuter": "горячее",
        "plural": "горячие"
    },
    {
        "word": "крупный",
        "feminine": "крупная",
        "translation": "large",
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
        "subtext": "a large city / a large company / a large amount"
    },
    {
        "word": "небольшой",
        "feminine": "небольшая",
        "translation": "little",
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
        "subtext": "a little bit / a little money / too little"
    },
    {
        "word": "короткий",
        "feminine": "короткая",
        "translation": "short",
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
        "subtext": "a short journey / short hair / too short"
    },
    {
        "word": "длинный",
        "feminine": "длинная",
        "translation": "long",
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
        "subtext": "a long journey / a long day / a long time"
    },
    {
        "word": "высокий",
        "feminine": "высокая",
        "translation": "high",
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
        "subtext": "high price / high rent / high quality"
    },
    {
        "word": "полный",
        "feminine": "полная",
        "translation": "full",
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
        "subtext": "full time / a full day / full of people"
    },
    {
        "word": "пустой",
        "feminine": "пустая",
        "translation": "empty",
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
        "subtext": "an empty flat / an empty room / nearly empty"
    },
    {
        "word": "тёплый",
        "feminine": "тёплая",
        "translation": "warm",
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
        "subtext": "warm weather / a warm welcome / keep warm"
    },
    {
        "word": "прохладный",
        "feminine": "прохладная",
        "translation": "cool",
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
        "subtext": "cool weather / a cool drink / stay cool"
    },
    {
        "word": "мокрый",
        "feminine": "мокрая",
        "translation": "wet",
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
        "subtext": "wet weather / wet clothes / get wet"
    },
    {
        "word": "сухой",
        "feminine": "сухая",
        "translation": "dry",
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
        "subtext": "dry weather / dry skin / keep dry"
    },
    {
        "word": "грязный",
        "feminine": "грязная",
        "translation": "dirty",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "subtext": "dirty hands / dirty clothes / get dirty"
    },
    {
        "word": "твёрдый",
        "feminine": "твёрдая",
        "translation": "hard",
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
        "subtext": "hard work / a hard decision / too hard"
    },
    {
        "word": "мягкий",
        "feminine": "мягкая",
        "translation": "soft",
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
        "subtext": "soft light / soft music / soft skills"
    },
    {
        "word": "тяжёлый",
        "feminine": "тяжёлая",
        "translation": "heavy",
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
        "subtext": "heavy traffic / heavy rain / too heavy"
    },
    {
        "word": "коричневый",
        "feminine": "коричневая",
        "translation": "brown",
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
        "subtext": "dark brown / light brown / brown bread"
    },
    {
        "word": "серый",
        "feminine": "серая",
        "translation": "grey",
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
        "subtext": "grey area / grey sky / pale grey"
    },
    {
        "word": "розовый",
        "feminine": "розовая",
        "translation": "pink",
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
        "subtext": "light pink / bright pink / hot pink"
    },
    {
        "word": "оранжевый",
        "feminine": "оранжевая",
        "translation": "orange",
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
        "subtext": "bright orange / dark orange / orange light"
    },
    {
        "word": "великолепный",
        "feminine": "великолепная",
        "translation": "great",
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
        "subtext": "a great idea / a great opportunity / great value"
    },
    {
        "word": "приятный",
        "feminine": "приятная",
        "translation": "nice",
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
        "subtext": "a nice day / a nice place / a nice person"
    },
    {
        "word": "замечательный",
        "feminine": "замечательная",
        "translation": "wonderful",
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
        "subtext": "a wonderful opportunity / a wonderful time"
    },
    {
        "word": "ужасный",
        "feminine": "ужасная",
        "translation": "terrible",
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
        "subtext": "terrible weather / a terrible mistake / terrible news"
    },
    {
        "word": "отвратительный",
        "feminine": "отвратительная",
        "translation": "awful",
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
        "subtext": "awful weather / awful news / simply awful"
    },
    {
        "word": "удивительный",
        "feminine": "удивительная",
        "translation": "amazing",
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
        "subtext": "an amazing result / an amazing offer / truly amazing"
    },
    {
        "word": "фантастический",
        "feminine": "фантастическая",
        "translation": "fantastic",
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
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic"
    },
    {
        "word": "грустный",
        "feminine": "грустная",
        "translation": "sad",
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
        "subtext": "feel sad / a sad situation / deeply sad"
    },
    {
        "word": "голодный",
        "feminine": "голодная",
        "translation": "hungry",
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
        "subtext": "feel hungry / very hungry / go hungry"
    },
    {
        "word": "сердитый",
        "feminine": "сердитая",
        "translation": "angry",
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
        "subtext": "feel angry / angry with someone / very angry"
    },
    {
        "word": "скучающий",
        "feminine": "скучающая",
        "translation": "bored",
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
        "subtext": "feel bored / bored with / easily bored"
    },
    {
        "word": "взволнованный",
        "feminine": "взволнованная",
        "translation": "excited",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "subtext": "feel excited / excited about / very excited"
    },
    {
        "word": "испуганный",
        "feminine": "испуганная",
        "translation": "afraid",
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
        "subtext": "afraid of / feel afraid / deeply afraid"
    },
    {
        "word": "огорчённый",
        "feminine": "огорчённая",
        "translation": "sorry",
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
        "subtext": "feel sorry / sorry for / sorry about"
    },
    {
        "word": "правильный",
        "feminine": "правильная",
        "translation": "right",
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
        "subtext": "right answer / right time / absolutely right"
    },
    {
        "word": "неправильный",
        "feminine": "неправильная",
        "translation": "wrong",
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
        "subtext": "wrong answer / go wrong / completely wrong"
    },
    {
        "word": "новый",
        "feminine": "новая",
        "translation": "new",
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
        "subtext": "new job / brand new / completely new"
    },
    {
        "word": "другой",
        "feminine": "другая",
        "translation": "different",
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
        "subtext": "completely different / very different / different from"
    },
    {
        "word": "одинаковый",
        "feminine": "одинаковая",
        "translation": "same",
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
        "subtext": "the same as / exactly the same / same time"
    },
    {
        "word": "лёгкий",
        "feminine": "лёгкая",
        "translation": "easy",
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
        "subtext": "easy to do / nice and easy / not easy"
    },
    {
        "word": "быстрый",
        "feminine": "быстрая",
        "translation": "fast",
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
        "subtext": "fast food / fast train / very fast"
    },
    {
        "word": "медленный",
        "feminine": "медленная",
        "translation": "slow",
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
        "subtext": "slow progress / slow internet / very slow"
    },
    {
        "word": "тихий",
        "feminine": "тихая",
        "translation": "quiet",
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
        "subtext": "quiet area / keep quiet / nice and quiet"
    },
    {
        "word": "громкий",
        "feminine": "громкая",
        "translation": "loud",
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
        "subtext": "loud noise / too loud / a loud voice"
    },
    {
        "word": "безопасный",
        "feminine": "безопасная",
        "translation": "safe",
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
        "subtext": "safe area / safe to do / feel safe"
    },
    {
        "word": "опасный",
        "feminine": "опасная",
        "translation": "dangerous",
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
        "subtext": "dangerous situation / very dangerous / potentially dangerous"
    },
    {
        "word": "несчастный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "unhappy",
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
        "subtext": "несчастен из-за чего-то / глубоко несчастен"
    },
    {
        "word": "нервный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "nervous",
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
        "subtext": "нервничать перед собеседованием / очень нервный"
    },
    {
        "word": "напряжённый",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "stressed",
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
        "subtext": "feel stressed / very stressed / stressed out"
    },
    {
        "word": "уверенный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "confident",
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
        "subtext": "feel confident / self-confident / very confident"
    },
    {
        "word": "гордый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "proud",
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
        "subtext": "feel proud / very proud / proud of"
    },
    {
        "word": "напуганный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "scared",
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
        "subtext": "feel scared / scared of / very scared"
    },
    {
        "word": "удивлённый",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "translation": "surprised",
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
        "subtext": "feel surprised / very surprised / pleasantly surprised"
    },
    {
        "word": "разочарованный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "disappointed",
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
        "subtext": "feel disappointed / deeply disappointed / disappointed with"
    },
    {
        "word": "красивый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "beautiful",
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
        "subtext": "beautiful view / beautiful city / absolutely beautiful"
    },
    {
        "word": "симпатичный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "pretty",
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
        "subtext": "pretty good / a pretty place / quite pretty"
    },
    {
        "word": "сильный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "strong",
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
        "subtext": "strong coffee / strong opinion / very strong"
    },
    {
        "word": "слабый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "weak",
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
        "subtext": "weak connection / a weak argument / very weak"
    },
    {
        "word": "спортивный",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "translation": "fit",
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
        "subtext": "physically fit / stay fit / keep fit"
    },
    {
        "word": "отличный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "excellent",
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
        "subtext": "excellent work / excellent results / absolutely excellent"
    },
    {
        "word": "идеальный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "perfect",
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
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect"
    },
    {
        "word": "бесполезный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "useless",
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
        "subtext": "completely useless / prove useless / a useless idea"
    },
    {
        "word": "верный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "correct",
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
        "subtext": "correct answer / the correct way / completely correct"
    },
    {
        "word": "интересный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "interesting",
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
        "subtext": "find interesting / very interesting / an interesting idea"
    },
    {
        "word": "скучный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "boring",
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
        "subtext": "very boring / a boring meeting / find boring"
    },
    {
        "word": "необходимый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "necessary",
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
        "subtext": "absolutely necessary / if necessary / necessary to do"
    },
    {
        "word": "возможный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "possible",
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
        "subtext": "as soon as possible / it is possible / make possible"
    },
    {
        "word": "невозможный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "impossible",
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
        "subtext": "virtually impossible / make impossible / nearly impossible"
    },
    {
        "word": "особенный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "special",
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
        "subtext": "a special offer / special occasion / very special"
    },
    {
        "word": "популярный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "popular",
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
        "subtext": "very popular / popular choice / most popular"
    },
    {
        "word": "похожий",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "similar",
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
        "subtext": "very similar / similar to / similar results"
    },
    {
        "word": "дружелюбный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "friendly",
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
        "subtext": "very friendly / a friendly face / friendly atmosphere"
    },
    {
        "word": "добрый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "kind",
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
        "subtext": "very kind / kind of you / a kind person"
    },
    {
        "word": "смешной",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "funny",
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
        "subtext": "very funny / funny story / find funny"
    },
    {
        "word": "умный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "clever",
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
        "subtext": "very clever / a clever idea / clever enough"
    },
    {
        "word": "вежливый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "polite",
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
        "subtext": "very polite / polite request / polite enough"
    },
    {
        "word": "грубый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "rude",
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
        "subtext": "very rude / incredibly rude / deliberately rude"
    },
    {
        "word": "ленивый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "lazy",
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
        "subtext": "very lazy / a lazy approach / too lazy"
    },
    {
        "word": "честный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "honest",
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
        "subtext": "very honest / brutally honest / completely honest"
    },
    {
        "word": "шумный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "noisy",
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
        "subtext": "very noisy / noisy environment / too noisy"
    },
    {
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "translation": "young",
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
        ]
    },
    {
        "word": "здоровый",
        "level": "starter",
        "theme": "basic_foods_A1",
        "form": "adjective",
        "translation": "healthy",
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
        "subtext": "well, fit, healthy diet"
    },
    {
        "word": "больной",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "translation": "ill",
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
        "subtext": "sick, feel ill"
    },
    {
        "word": "полезный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "useful",
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
        "subtext": "helpful, practical"
    },
    {
        "word": "расслабленный",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "translation": "relaxed",
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
        "subtext": "calm, feeling relaxed"
    },
    {
        "word": "обеспокоенный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "worried",
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
        "subtext": "anxious"
    }
];
    const lang = "ru";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();