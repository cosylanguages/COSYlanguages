(function() {
    const data = [
    {
        "word": "ветрено",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💨",
        "form": "adjective"
    },
    {
        "word": "красивый",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective"
    },
    {
        "word": "сильный",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective"
    },
    {
        "word": "снежно",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "❄️",
        "form": "adjective"
    },
    {
        "word": "облачно",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "☁️",
        "form": "adjective"
    },
    {
        "word": "в форме",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "💪",
        "form": "adjective",
        "definitions": [
            {
                "text": "В хорошем физическом состоянии благодаря регулярным упражнениям.",
                "examples": [
                    "Он бегает, чтобы оставаться в форме."
                ]
            }
        ]
    },
    {
        "word": "удобный",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👌",
        "form": "adjective",
        "opposite": "неудобный",
        "definitions": [
            {
                "text": "Простой в использовании или подходящий для ваших нужд.",
                "examples": [
                    "Онлайн-шопинг — это очень удобно."
                ]
            }
        ]
    },
    {
        "word": "стрессовый",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "расслабляющий",
        "definitions": [
            {
                "text": "Вызывающий беспокойство или тревогу.",
                "examples": [
                    "У нее очень стрессовая работа."
                ]
            }
        ]
    },
    {
        "word": "комфортный",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛋️",
        "form": "adjective",
        "opposite": "неудобный",
        "definitions": [
            {
                "text": "Физически расслабляющий; не вызывающий боли или трудностей.",
                "examples": [
                    "Офисное кресло очень комфортное."
                ]
            }
        ]
    },
    {
        "word": "практичный",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "непрактичный",
        "definitions": [
            {
                "text": "Полезный и разумный в реальных ситуациях.",
                "examples": [
                    "Машина практична в сельской местности."
                ]
            }
        ]
    },
    {
        "word": "популярный",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": "непопулярный",
        "definitions": [
            {
                "text": "Нравящийся многим людям.",
                "examples": [
                    "Этот ресторан очень популярен."
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
