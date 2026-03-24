(function() {
    const data = [
    {
        "word": "высокий",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "низкий",
        "oppositeEmoji": "📏"
    },
    {
        "word": "низкий",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "высокий",
        "oppositeEmoji": "🗼"
    },
    {
        "word": "молодой",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "старый",
        "oppositeEmoji": "👴"
    },
    {
        "word": "старый",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "молодой",
        "oppositeEmoji": "👶"
    },
    {
        "word": "хороший",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "плохой",
        "oppositeEmoji": "👎"
    },
    {
        "word": "плохой",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "хороший",
        "oppositeEmoji": "👍"
    },
    {
        "word": "лёгкий",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "трудный",
        "oppositeEmoji": "❌"
    },
    {
        "word": "трудный",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "лёгкий",
        "oppositeEmoji": "✅"
    },
    {
        "word": "большой",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "маленький",
        "oppositeEmoji": "🐭"
    },
    {
        "word": "маленький",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "большой",
        "oppositeEmoji": "🐘"
    },
    {
        "word": "счастливый",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "грустный"
    },
    {
        "word": "усталый",
        "level": "starter",
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
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "дешёвый",
        "oppositeEmoji": "🏷️"
    },
    {
        "word": "дешёвый",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "дорогой",
        "oppositeEmoji": "💎"
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
        ]
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
        "level": "starter",
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
        "level": "starter",
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
        ]
    },
    {
        "word": "полезный",
        "level": "starter",
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
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💎",
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
    }
];
    const lang = "ru";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
