(function() {
    const data = [
    {
        "word": "инженер",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👷",
        "form": "noun",
        "plural": "инженеры",
        "definitions": [
            {
                "text": "Человек, который проектирует или строит машины, двигатели или сооружения.",
                "examples": [
                    "Инженер работает над новым мостом.",
                    "Он хочет стать инженером-строителем."
                ]
            },
            {
                "text": "Этот человек часто работает в офисе или на стройке.",
                "examples": [
                    "Инженеры используют компьютеры для проектирования."
                ]
            }
        ]
    },
    {
        "word": "пилот",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "🧑‍✈️",
        "form": "noun",
        "plural": "пилоты",
        "definitions": [
            {
                "text": "Человек, который управляет самолетом или вертолетом.",
                "examples": [
                    "Пилот находится в кабине.",
                    "Он хочет стать пилотом."
                ]
            },
            {
                "text": "Этот человек работает в небе и в аэропорту.",
                "examples": [
                    "Пилоты носят униформу."
                ]
            }
        ]
    },
    {
        "word": "пельмени",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "пельмени"
    },
    {
        "word": "шашлык",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "шашлыки"
    },
    {
        "word": "квас",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "квасы",
        "definitions": [
            {
                "text": "Традиционный русский напиток из хлеба.",
                "examples": [
                    "Холодный квас хорош в жару.",
                    "Я люблю домашний квас."
                ]
            },
            {
                "text": "Этот напиток получается путем брожения.",
                "examples": [
                    "Из кваса делают окрошку."
                ]
            }
        ]
    },
    {
        "word": "библиотека",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "📚",
        "form": "noun",
        "plural": "библиотеки",
        "definitions": [
            {
                "text": "Место, где много книг, которые можно читать или брать домой.",
                "examples": [
                    "Я занимаюсь в университетской библиотеке.",
                    "Публичная библиотека очень большая."
                ]
            },
            {
                "text": "Это тихое место для учебы и исследований.",
                "examples": [
                    "В библиотеке нужно соблюдать тишину."
                ]
            }
        ]
    },
    {
        "word": "музей",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "музеи",
        "definitions": [
            {
                "text": "Здание, где можно посмотреть на важные предметы из прошлого.",
                "examples": [
                    "Мы видели кости динозавров в музее.",
                    "В музее собрана коллекция старых картин."
                ]
            },
            {
                "text": "Это место, где можно узнать об истории, искусстве или науке.",
                "examples": [
                    "Вход в музей бесплатный по воскресеньям."
                ]
            }
        ]
    },
    {
        "word": "аэропорт",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "✈️",
        "form": "noun",
        "plural": "аэропорты",
        "definitions": [
            {
                "text": "Место, где самолеты взлетают и приземляются.",
                "examples": [
                    "Мы едем в аэропорт.",
                    "Аэропорт находится за городом."
                ]
            },
            {
                "text": "Это место, откуда люди отправляются в полеты.",
                "examples": [
                    "В аэропорту нужно пройти контроль."
                ]
            }
        ]
    },
    {
        "word": "шкаф",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "👗",
        "form": "noun",
        "plural": "шкафы"
    },
    {
        "word": "худой",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "худой"
    },
    {
        "word": "зонт",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "☂️",
        "form": "adjective"
    },
    {
        "word": "слон",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐘",
        "form": "adjective"
    },
    {
        "word": "жарко",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🔥",
        "form": "noun",
        "plural": "жарка"
    },
    {
        "word": "разработчик по",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "💻",
        "form": "noun",
        "plural": "разработчик па"
    },
    {
        "word": "психическое здоровье",
        "level": "intermediate",
        "theme": "mental_health_B1",
        "emoji": "🧠",
        "form": "noun",
        "definitions": [
            {
                "text": "Η κατάσταση της συναισθηματικής και ψυχολογικής ευεξίας.",
                "examples": [
                    "Η ψυχική υγεία είναι εξίσου σημαντική με τη σωματική.",
                    "Πρέπει να φροντίζουμε την ψυχική μας υγεία."
                ]
            }
        ]
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
