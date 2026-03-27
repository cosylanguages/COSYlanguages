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
        "plural": "высокие"
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
        "plural": "низкие"
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
        "plural": "старые"
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
        "plural": "хорошие"
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
        "plural": "плохие"
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
        "plural": "лёгкие"
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
        "plural": "трудные"
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
        "plural": "большие"
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
        "plural": "маленькие"
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
        "plural": "счастливые"
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
        "plural": "усталые"
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
        "plural": "дорогие"
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
        "plural": "дешёвые"
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
        "theme": "diet_healthy_eating_A2",
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
        "plural": "занятые"
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
        "word": "бесплатный",
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
        "feminine": "бесплатная",
        "translation": "free",
        "neuter": "бесплатное",
        "plural": "бесплатные"
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
        "plural": "крупные"
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
        "plural": "небольшие"
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
        "plural": "короткие"
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
        "plural": "длинные"
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
        "plural": "высокие"
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
        "plural": "полные"
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
        "plural": "пустые"
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
        "plural": "тёплые"
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
        "plural": "прохладные"
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
        "plural": "мокрые"
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
        "plural": "сухие"
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
        "plural": "грязные"
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
        "plural": "твёрдые"
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
        "plural": "мягкие"
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
        "plural": "тяжёлые"
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
        "plural": "коричневые"
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
        "plural": "серые"
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
        "plural": "розовые"
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
        "plural": "оранжевые"
    },
    {
        "word": "великолепный",
        "feminine": "великолепная",
        "translation": "great",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🌟",
        "form": "adjective",
        "neuter": "великолепное",
        "plural": "великолепные"
    },
    {
        "word": "приятный",
        "feminine": "приятная",
        "translation": "nice",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "😊",
        "form": "adjective",
        "neuter": "приятное",
        "plural": "приятные"
    },
    {
        "word": "замечательный",
        "feminine": "замечательная",
        "translation": "wonderful",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✨",
        "form": "adjective",
        "neuter": "замечательное",
        "plural": "замечательные"
    },
    {
        "word": "ужасный",
        "feminine": "ужасная",
        "translation": "terrible",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "😫",
        "form": "adjective",
        "neuter": "ужасное",
        "plural": "ужасные"
    },
    {
        "word": "отвратительный",
        "feminine": "отвратительная",
        "translation": "awful",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🤮",
        "form": "adjective",
        "neuter": "отвратительное",
        "plural": "отвратительные"
    },
    {
        "word": "удивительный",
        "feminine": "удивительная",
        "translation": "amazing",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "😲",
        "form": "adjective",
        "neuter": "удивительное",
        "plural": "удивительные"
    },
    {
        "word": "фантастический",
        "feminine": "фантастическая",
        "translation": "fantastic",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🤩",
        "form": "adjective",
        "neuter": "фантастическое",
        "plural": "фантастические"
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
        "plural": "грустные"
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
        "plural": "голодные"
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
        "plural": "сердитые"
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
        "plural": "скучающие"
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
        "plural": "взволнованные"
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
        "plural": "испуганные"
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
        "plural": "огорчённые"
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
        "plural": "правильные"
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
        "plural": "неправильные"
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
        "plural": "новые"
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
        "plural": "другие"
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
        "plural": "одинаковые"
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
        "plural": "лёгкие"
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
        "plural": "быстрые"
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
        "plural": "медленные"
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
        "plural": "тихие"
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
        "plural": "громкие"
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
        "plural": "безопасные"
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
        "plural": "опасные"
    }
];
    const lang = "ru";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();