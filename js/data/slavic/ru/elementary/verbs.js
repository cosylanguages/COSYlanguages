(function() {
    const data = [
    {
        "word": "лошадь",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🐎",
        "form": "noun"
    },
    {
        "word": "рисование",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "готовка",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "танцы",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "пение",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "ветрено",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💨",
        "form": "adjective"
    },
    {
        "word": "предлагать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "рассматривать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb"
    },
    {
        "word": "появляться",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb"
    },
    {
        "word": "служить",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb"
    },
    {
        "word": "ожидать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb"
    },
    {
        "word": "строить",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb"
    },
    {
        "word": "оставаться",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb"
    },
    {
        "word": "достигать",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb"
    },
    {
        "word": "убивать",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb"
    },
    {
        "word": "поднимать",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb"
    },
    {
        "word": "требовать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb"
    },
    {
        "word": "сообщать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb"
    },
    {
        "word": "решать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚖️",
        "form": "verb"
    },
    {
        "word": "объяснять",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "развивать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb"
    },
    {
        "word": "поддерживать",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Помогать или ободрять кого-либо.",
                "examples": [
                    "Моя семья поддерживает мои решения."
                ]
            }
        ]
    },
    {
        "word": "ударять",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb"
    },
    {
        "word": "производить",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb"
    },
    {
        "word": "сталкиваться",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb"
    },
    {
        "word": "покрывать",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb"
    },
    {
        "word": "описывать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb"
    },
    {
        "word": "ловить",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb"
    },
    {
        "word": "подавать заявку",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "definitions": [
            {
                "text": "Подавать официальный запрос о приеме на работу.",
                "examples": [
                    "Она подала заявку на должность менеджера."
                ]
            }
        ]
    },
    {
        "word": "нанимать",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Предоставлять кому-либо работу.",
                "examples": [
                    "Компания наняла двух новых сотрудников."
                ]
            }
        ]
    },
    {
        "word": "выходить на пенсию",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "definitions": [
            {
                "text": "Прекращать работу по достижении определенного возраста.",
                "examples": [
                    "Мой отец выйдет на пенсию в следующем году."
                ]
            }
        ]
    },
    {
        "word": "позволить себе",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Иметь достаточно денег, чтобы заплатить за что-то.",
                "examples": [
                    "Мы не можем позволить себе квартиру побольше."
                ]
            }
        ]
    },
    {
        "word": "спорить",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "Выражать несогласие с кем-либо в сердитой форме.",
                "examples": [
                    "Они иногда спорят из-за денег."
                ]
            }
        ]
    },
    {
        "word": "доверять",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Верить в честность и надежность кого-либо.",
                "examples": [
                    "Вы должны доверять своему партнеру."
                ]
            }
        ]
    },
    {
        "word": "соглашаться",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👍",
        "form": "verb",
        "definitions": [
            {
                "text": "Иметь такое же мнение, как и кто-то другой.",
                "examples": [
                    "Мы не всегда соглашаемся."
                ]
            }
        ]
    },
    {
        "word": "идти на компромисс",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Принимать условия, при которых обе стороны будут удовлетворены.",
                "examples": [
                    "Хорошие отношения требуют умения идти на компромисс."
                ]
            }
        ]
    },
    {
        "word": "перерабатывать",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "definitions": [
            {
                "text": "Перерабатывать использованные материалы для повторного использования.",
                "examples": [
                    "Мы перерабатываем бумагу и стекло."
                ]
            }
        ]
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
