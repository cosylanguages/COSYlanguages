(function() {
    const data = [
    {
        "word": "просыпаться",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "просыпаться рано, просыпаться в 7 утра",
        "opposite": "спать",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Перестать спать и открыть глаза.",
                "examples": [
                    "Я просыпаюсь в семь часов.",
                    "Во сколько ты просыпаешься?"
                ]
            }
        ]
    },
    {
        "word": "работать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "работать в офисе, много работать",
        "form": "verb",
        "definitions": [
            {
                "text": "Заниматься делом, чтобы зарабатывать деньги.",
                "examples": [
                    "Я работаю пять дней в неделю.",
                    "Она работает в банке."
                ]
            }
        ]
    },
    {
        "word": "спать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "спать 8 часов, ложиться спать",
        "opposite": "просыпаться",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Отдыхать с закрытыми глазами.",
                "examples": [
                    "Мне нужно поспать.",
                    "Ребёнок спит."
                ]
            }
        ]
    },
    {
        "word": "смотреть",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "смотреть телевизор, смотреть фильм",
        "definitions": [
            {
                "text": "Направлять взгляд на что-либо.",
                "examples": [
                    "Я смотрю телевизор вечером.",
                    "Они смотрят на птиц."
                ]
            }
        ]
    },
    {
        "word": "читать",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "form": "verb",
        "subtext": "читать книгу, читать газету",
        "opposite": "писать",
        "oppositeEmoji": "✍️",
        "definitions": [
            {
                "text": "Воспринимать и понимать написанное.",
                "examples": [
                    "Я читаю книгу каждый вечер.",
                    "Она умеет читать по-русски."
                ]
            }
        ]
    },
    {
        "word": "быть",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "form": "verb"
    },
    {
        "word": "иметь",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "form": "verb"
    },
    {
        "word": "идти",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb"
    },
    {
        "word": "кушать",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "кушать яблоко, кушать ужин",
        "opposite": "пить",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Принимать пищу.",
                "examples": [
                    "Я ем яблоко каждый день.",
                    "Что ты хочешь поесть?"
                ]
            }
        ]
    },
    {
        "word": "пить",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "пить воду, пить кофе",
        "opposite": "кушать",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Поглощать жидкость.",
                "examples": [
                    "Я пью много воды.",
                    "Хочешь что-нибудь попить?"
                ]
            }
        ]
    },
    {
        "word": "делать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb"
    },
    {
        "word": "говорить",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb"
    },
    {
        "word": "знать",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "думать",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "form": "verb"
    },
    {
        "word": "видеть",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👁️",
        "form": "verb"
    },
    {
        "word": "хотеть",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "form": "verb"
    },
    {
        "word": "любить",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "❤️",
        "form": "verb"
    },
    {
        "word": "писать",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "form": "verb"
    },
    {
        "word": "приходить",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "form": "verb"
    },
    {
        "word": "давать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb"
    },
    {
        "word": "брать",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "form": "verb"
    },
    {
        "word": "находить",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "form": "verb"
    },
    {
        "word": "рассказывать",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb"
    },
    {
        "word": "спрашивать",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "form": "verb"
    },
    {
        "word": "чувствовать",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "form": "verb"
    },
    {
        "word": "пробовать",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🎯",
        "form": "verb"
    },
    {
        "word": "уходить",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚪",
        "form": "verb"
    },
    {
        "word": "звонить",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "form": "verb"
    },
    {
        "word": "использовать",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "form": "verb"
    },
    {
        "word": "получать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "form": "verb"
    },
    {
        "word": "начинать",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "form": "verb"
    },
    {
        "word": "помогать",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "играть",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "form": "verb"
    },
    {
        "word": "бегать",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "form": "verb"
    },
    {
        "word": "жить",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "form": "verb"
    },
    {
        "word": "приносить",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb"
    },
    {
        "word": "сидеть",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🪑",
        "form": "verb"
    },
    {
        "word": "стоять",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🧍",
        "form": "verb"
    },
    {
        "word": "проигрывать",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📉",
        "form": "verb"
    },
    {
        "word": "платить",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "form": "verb"
    },
    {
        "word": "встречать",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "учить",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📚",
        "form": "verb"
    },
    {
        "word": "менять",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "verb"
    },
    {
        "word": "понимать",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "останавливаться",
        "level": "starter",
        "theme": "time",
        "emoji": "🛑",
        "form": "verb"
    },
    {
        "word": "добавлять",
        "level": "starter",
        "theme": "numbers_math",
        "emoji": "➕",
        "form": "verb"
    },
    {
        "word": "тратить",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💸",
        "form": "verb"
    },
    {
        "word": "открывать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "form": "verb"
    },
    {
        "word": "побеждать",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "form": "verb"
    },
    {
        "word": "гулять",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb"
    },
    {
        "word": "помнить",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "покупать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "form": "verb"
    },
    {
        "word": "умирать",
        "level": "starter",
        "theme": "health_body",
        "emoji": "⚰️",
        "form": "verb"
    },
    {
        "word": "отправлять",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "✉️",
        "form": "verb"
    },
    {
        "word": "падать",
        "level": "starter",
        "theme": "environment_nature",
        "emoji": "🍂",
        "form": "verb"
    },
    {
        "word": "резать",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "form": "verb"
    },
    {
        "word": "проходить",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🏔️",
        "form": "verb"
    },
    {
        "word": "продавать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "verb"
    },
    {
        "word": "тянуть",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🚜",
        "form": "verb"
    },
    {
        "word": "толкать",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🛒",
        "form": "verb"
    },
    {
        "word": "надеяться",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🤞",
        "form": "verb"
    },
    {
        "word": "готовить",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "verb"
    },
    {
        "word": "закрывать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "form": "verb"
    },
    {
        "word": "заканчивать",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
        "form": "verb"
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
