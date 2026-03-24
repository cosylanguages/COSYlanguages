(function() {
    const data = [
    {
        "word": "предлагать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "предлагать идею / предлагать помощь",
        "definitions": [
            {
                "text": "Выдвигать что-либо на рассмотрение.",
                "examples": [
                    "Я предлагаю пойти в парк."
                ]
            }
        ],
        "v3": "предложил"
    },
    {
        "word": "рассматривать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "both",
        "subtext": "рассматривать вариант / внимательно рассматривать",
        "definitions": [
            {
                "text": "Обсуждать или обдумывать что-либо.",
                "examples": [
                    "Мы рассматриваем ваше предложение."
                ]
            }
        ],
        "v3": "рассмотрел"
    },
    {
        "word": "появляться",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "появляться внезапно / появляться на ТВ",
        "definitions": [
            {
                "text": "Становиться видимым или обнаруживаться.",
                "examples": [
                    "На небе появилось солнце."
                ]
            }
        ],
        "v3": "появился"
    },
    {
        "word": "служить",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb",
        "group": "2-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "служить в армии / служить примером",
        "definitions": [
            {
                "text": "Выполнять свои обязанности.",
                "examples": [
                    "Он служит в этом ресторане десять лет."
                ]
            }
        ],
        "v3": "служил"
    },
    {
        "word": "ожидать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "ожидать звонка / ожидать ребенка",
        "definitions": [
            {
                "text": "Надеяться на что-то, полагать что что-то произойдет.",
                "examples": [
                    "Я ожидаю вашего ответа."
                ]
            }
        ],
        "v3": "ожидал"
    },
    {
        "word": "строить",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb",
        "group": "2-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "строить дом / строить планы",
        "definitions": [
            {
                "text": "Создавать здание или структуру.",
                "examples": [
                    "Они строят новый торговый центр."
                ]
            }
        ],
        "v3": "строил"
    },
    {
        "word": "оставаться",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "оставаться дома / оставаться спокойным",
        "definitions": [
            {
                "text": "Не уходить, пребывать в том же состоянии.",
                "examples": [
                    "Я остаюсь дома сегодня вечером."
                ]
            }
        ],
        "v3": "остался"
    },
    {
        "word": "достигать",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "достигать цели / достигать вершины",
        "definitions": [
            {
                "text": "Доходить до какого-либо предела или уровня.",
                "examples": [
                    "Мы достигли вершины горы."
                ]
            }
        ],
        "v3": "достиг"
    },
    {
        "word": "убивать",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "убивать время",
        "definitions": [
            {
                "text": "Лишать жизни.",
                "examples": [
                    "Холод убил растения."
                ]
            }
        ],
        "v3": "убил"
    },
    {
        "word": "поднимать",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "поднимать руку / поднимать вопрос",
        "definitions": [
            {
                "text": "Перемещать на более высокое место.",
                "examples": [
                    "Поднимите руку, если есть вопросы."
                ]
            }
        ],
        "v3": "поднял"
    },
    {
        "word": "требовать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "требовать внимания / требовать ответа",
        "definitions": [
            {
                "text": "Настойчиво просить что-либо.",
                "examples": [
                    "Клиент требует возврата денег."
                ]
            }
        ],
        "v3": "требовал"
    },
    {
        "word": "сообщать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "сообщать новости / сообщать о проблеме",
        "definitions": [
            {
                "text": "Передавать информацию.",
                "examples": [
                    "Он должен сообщить о том, что видел."
                ]
            }
        ],
        "v3": "сообщил"
    },
    {
        "word": "решать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚖️",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "решать задачу / решать уйти",
        "definitions": [
            {
                "text": "Принимать решение или находить ответ.",
                "examples": [
                    "Я решил сменить работу."
                ]
            }
        ],
        "v3": "решил"
    },
    {
        "word": "объяснять",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "объяснять правило / объяснять почему",
        "definitions": [
            {
                "text": "Делать понятным.",
                "examples": [
                    "Учитель объясняет урок."
                ]
            }
        ],
        "v3": "объяснил"
    },
    {
        "word": "развивать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "развивать навыки / развивать бизнес",
        "definitions": [
            {
                "text": "Совершенствовать, способствовать росту.",
                "examples": [
                    "Она развивает новый проект."
                ]
            }
        ],
        "v3": "развивал"
    },
    {
        "word": "поддерживать",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "поддерживать друга / поддерживать связь",
        "definitions": [
            {
                "text": "Оказывать помощь или одобрение.",
                "examples": [
                    "Моя семья поддерживает мои решения."
                ]
            }
        ],
        "v3": "поддерживал",
        "tenses": {
            "present_simple": {
                "positive": [
                    "поддерживаю",
                    "поддерживаешь",
                    "поддерживает",
                    "поддерживает",
                    "поддерживает",
                    "поддерживаем",
                    "поддерживаете",
                    "поддерживают"
                ],
                "negative": [
                    "не поддерживаю",
                    "не поддерживаешь",
                    "не поддерживает",
                    "не поддерживает",
                    "не поддерживает",
                    "не поддерживаем",
                    "не поддерживаете",
                    "не поддерживают"
                ]
            }
        }
    },
    {
        "word": "ударять",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "ударять по мячу / ударять в барабан",
        "definitions": [
            {
                "text": "Наносить удар.",
                "examples": [
                    "Он ударил по мячу."
                ]
            }
        ],
        "v3": "ударил"
    },
    {
        "word": "производить",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb",
        "group": "2-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "производить энергию / производить впечатление",
        "definitions": [
            {
                "text": "Изготавливать, вырабатывать.",
                "examples": [
                    "Завод производит автомобили."
                ]
            }
        ],
        "v3": "производил"
    },
    {
        "word": "сталкиваться",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "сталкиваться с проблемой / сталкиваться лбами",
        "definitions": [
            {
                "text": "Встречаться с чем-либо трудным.",
                "examples": [
                    "Мы должны столкнуться со своими страхами."
                ]
            }
        ],
        "v3": "столкнулся"
    },
    {
        "word": "покрывать",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "покрывать одеялом / покрывать расходы",
        "definitions": [
            {
                "text": "Помещать что-либо поверх другого.",
                "examples": [
                    "Она покрыла стол скатертью."
                ]
            }
        ],
        "v3": "покрыл"
    },
    {
        "word": "описывать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "описывать человека / описывать ситуацию",
        "definitions": [
            {
                "text": "Изображать словами.",
                "examples": [
                    "Вы можете описать человека, которого видели?"
                ]
            }
        ],
        "v3": "описал"
    },
    {
        "word": "ловить",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb",
        "group": "2-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "subtext": "ловить рыбу / ловить такси / ловить мяч",
        "definitions": [
            {
                "text": "Захватывать движущийся предмет.",
                "examples": [
                    "Попробуй поймать мяч!"
                ]
            }
        ],
        "v3": "ловил"
    },
    {
        "word": "подавать заявку",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Подавать официальный запрос о приеме на работу.",
                "examples": [
                    "Она подала заявку на должность менеджера."
                ]
            }
        ],
        "v3": "подал заявку"
    },
    {
        "word": "нанимать",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Предоставлять кому-либо работу.",
                "examples": [
                    "Компания наняла двух новых сотрудников."
                ]
            }
        ],
        "v3": "нанял"
    },
    {
        "word": "выходить на пенсию",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Прекращать работу по достижении определенного возраста.",
                "examples": [
                    "Мой отец выйдет на пенсию в следующем году."
                ]
            }
        ],
        "v3": "вышел на пенсию"
    },
    {
        "word": "позволить себе",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Иметь достаточно денег, чтобы заплатить за что-то.",
                "examples": [
                    "Мы не можем позволить себе квартиру побольше."
                ]
            }
        ],
        "v3": "позволил себе"
    },
    {
        "word": "спорить",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🗣️",
        "form": "verb",
        "group": "2-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Выражать несогласие с кем-либо в сердитой форме.",
                "examples": [
                    "Они иногда спорят из-за денег."
                ]
            }
        ],
        "v3": "спорил"
    },
    {
        "word": "доверять",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Верить в честность и надежность кого-либо.",
                "examples": [
                    "Вы должны доверять своему партнеру."
                ]
            }
        ],
        "v3": "доверял"
    },
    {
        "word": "соглашаться",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👍",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Иметь такое же мнение, как и кто-то другой.",
                "examples": [
                    "Мы не всегда соглашаемся."
                ]
            }
        ],
        "v3": "согласился"
    },
    {
        "word": "идти на компромисс",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Принимать условия, при которых обе стороны будут удовлетворены.",
                "examples": [
                    "Хорошие отношения требуют умения идти на компромисс."
                ]
            }
        ],
        "v3": "пошел на компромисс"
    },
    {
        "word": "перерабатывать",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Перерабатывать использованные материалы для повторного использования.",
                "examples": [
                    "Мы перерабатываем бумагу и стекло."
                ]
            }
        ],
        "v3": "переработал"
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
