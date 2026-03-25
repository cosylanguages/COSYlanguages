(function() {
    const data = [
    {
        "word": "высокий",
        "level": "baby",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "низкий",
        "oppositeEmoji": "📏"
    },
    {
        "word": "низкий",
        "level": "baby",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "высокий",
        "oppositeEmoji": "🗼"
    },
    {
        "word": "молодой",
        "level": "baby",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "старый",
        "oppositeEmoji": "👴"
    },
    {
        "word": "старый",
        "level": "baby",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "молодой",
        "oppositeEmoji": "👶"
    },
    {
        "word": "хороший",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "плохой",
        "oppositeEmoji": "👎"
    },
    {
        "word": "плохой",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "хороший",
        "oppositeEmoji": "👍"
    },
    {
        "word": "лёгкий",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "трудный",
        "oppositeEmoji": "❌"
    },
    {
        "word": "трудный",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "лёгкий",
        "oppositeEmoji": "✅"
    },
    {
        "word": "большой",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "маленький",
        "oppositeEmoji": "🐭"
    },
    {
        "word": "маленький",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "большой",
        "oppositeEmoji": "🐘"
    },
    {
        "word": "счастливый",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "грустный"
    },
    {
        "word": "усталый",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
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
        ]
    },
    {
        "word": "дорогой",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "дешёвый",
        "oppositeEmoji": "🏷️"
    },
    {
        "word": "дешёвый",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "дорогой",
        "oppositeEmoji": "💎"
    },
    {
        "word": "полный рабочий день",
        "level": "baby",
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
        "level": "baby",
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
        "level": "baby",
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
        ]
    },
    {
        "word": "здоровый",
        "level": "baby",
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
        "level": "baby",
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
        "level": "baby",
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
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
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
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
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
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
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
        "level": "baby",
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
        ]
    },
    {
        "word": "полезный",
        "level": "baby",
        "theme": "size_shape_A0",
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
        "level": "baby",
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
        ]
    },
    {
        "word": "красный",
        "level": "baby",
        "theme": "colours_patterns_A0",
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
        ]
    },
    {
        "word": "синий",
        "level": "baby",
        "theme": "colours_patterns_A0",
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
        ]
    },
    {
        "word": "зелёный",
        "level": "baby",
        "theme": "colours_patterns_A0",
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
        ]
    },
    {
        "word": "белый",
        "level": "baby",
        "theme": "colours_patterns_A0",
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
        ]
    },
    {
        "word": "чёрный",
        "level": "baby",
        "theme": "colours_patterns_A0",
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
        ]
    },
    {
        "word": "жёлтый",
        "level": "baby",
        "theme": "colours_patterns_A0",
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
        ]
    },
    {
        "word": "бесплатный",
        "level": "baby",
        "theme": "everyday_shopping_A0",
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
        ]
    },
    {
        "word": "открытый",
        "level": "baby",
        "theme": "everyday_shopping_A0",
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
        ]
    },
    {
        "word": "закрытый",
        "level": "baby",
        "theme": "everyday_shopping_A0",
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
        ]
    },
    {
        "word": "холодный",
        "level": "baby",
        "theme": "weather_A0",
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
        ]
    },
    {
        "word": "горячий",
        "level": "baby",
        "theme": "weather_A0",
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
        ]
    }
];
    const lang = "ru";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
