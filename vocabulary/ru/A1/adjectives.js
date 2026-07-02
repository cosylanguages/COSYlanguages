// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ru_starter_describing_008",
        "word": "высокий",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Человек или предмет, имеющий большую высоту.",
                "examples": [
                    "Он очень высокий.",
                    "Это здание высокое."
                ]
            }
        ],
        "oppositeEmoji": "📏",
        "feminine": "высокая",
        "emoji": "🦒",
        "neuter": "высокое",
        "plural": "высокие",
        "subtext": "высокий человек / достаточно высокий",
        "synonyms": [
            "высокое здание"
        ],
        "comparative": "выше",
        "superlative": "самый высокий",
        "transcription": "/vɨˈsokʲij/",
        "antonyms": [
            "короткий"
        ]
    },
    {
        "id": "ru_starter_describing_009",
        "word": "короткий",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Человек или предмет небольшого роста или длины.",
                "examples": [
                    "Она невысокая.",
                    "Карандаш короткий."
                ]
            }
        ],
        "feminine": "короткая",
        "emoji": "📏",
        "neuter": "короткое",
        "plural": "короткие",
        "subtext": "слишком короткий",
        "synonyms": [
            "короткая поездка",
            "короткие волосы"
        ],
        "comparative": "короче",
        "superlative": "самый короткий",
        "oppositeEmoji": "🗼",
        "transcription": "/kaˈrotkʲij/",
        "antonyms": [
            "высокий"
        ]
    },
    {
        "id": "ru_starter_describing_010",
        "word": "молодой",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Живущий или существующий лишь короткое время.",
                "examples": [
                    "Он молодой человек."
                ]
            }
        ],
        "feminine": "молодая",
        "neuter": "молодое",
        "plural": "молодые",
        "comparative": "моложе",
        "superlative": "самый молодой",
        "oppositeEmoji": "👴",
        "subtext": "",
        "synonyms": [
            "молодой человек",
            "молодой специалист",
            "молод душой"
        ],
        "transcription": "/malaˈdoj/",
        "antonyms": [
            "старый"
        ]
    },
    {
        "id": "ru_starter_describing_011",
        "word": "старый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Живущий или существующий долгое время.",
                "examples": [
                    "Это старая книга."
                ]
            }
        ],
        "oppositeEmoji": "👶",
        "feminine": "старая",
        "emoji": "👴",
        "neuter": "старое",
        "plural": "старые",
        "subtext": "старый друг / очень старый",
        "synonyms": [
            "старые привычки"
        ],
        "comparative": "старше",
        "superlative": "самый старый",
        "transcription": "/ˈstarɨj/",
        "antonyms": [
            "молодой"
        ]
    },
    {
        "id": "ru_starter_nature_013",
        "word": "солнечный",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий много солнечного света.",
                "examples": [
                    "Сегодня солнечный день."
                ]
            }
        ],
        "emoji": "☀️",
        "subtext": "солнечный день / солнечный период",
        "synonyms": [
            "солнечная погода"
        ],
        "comparative": "более солнечный",
        "superlative": "самый солнечный",
        "feminine": "солнечная",
        "neuter": "солнечное",
        "plural": "солнечные",
        "transcription": "/ˈsolnʲitʃʲnɨj/"
    },
    {
        "id": "ru_starter_nature_014",
        "word": "дождливый",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий много дождя.",
                "examples": [
                    "Сегодня дождливый день."
                ]
            }
        ],
        "emoji": "🌧️",
        "subtext": "дождливый день",
        "synonyms": [
            "дождливая погода",
            "сезон дождей"
        ],
        "comparative": "более дождливый",
        "superlative": "самый дождливый",
        "feminine": "дождливая",
        "neuter": "дождливое",
        "plural": "дождливые",
        "transcription": "/daʐˈdlʲivɨj/"
    },
    {
        "id": "ru_starter_nature_015",
        "word": "горячий",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий высокую температуру.",
                "examples": [
                    "Кофе горячий."
                ]
            }
        ],
        "emoji": "🔥",
        "oppositeEmoji": "❄️",
        "subtext": "очень горячий / горячий напиток / слишком горячий",
        "synonyms": [
            "горячая погода"
        ],
        "feminine": "горячая",
        "neuter": "горячее",
        "plural": "горячие",
        "comparative": "горячее",
        "superlative": "самый горячий",
        "transcription": "/ɡaˈrʲatʃʲij/",
        "antonyms": [
            "холодный"
        ]
    },
    {
        "id": "ru_starter_nature_016",
        "word": "холодный",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий низкую температуру.",
                "examples": [
                    "Вода холодная."
                ]
            }
        ],
        "emoji": "❄️",
        "oppositeEmoji": "🔥",
        "subtext": "очень холодный / холодный напиток",
        "synonyms": [
            "холодное утро",
            "холодная погода"
        ],
        "feminine": "холодная",
        "neuter": "холодное",
        "plural": "холодные",
        "comparative": "холоднее",
        "superlative": "самый холодный",
        "transcription": "/xaˈlodnɨj/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "xoldьnъ"
        },
        "antonyms": [
            "горячий"
        ]
    },
    {
        "id": "ru_starter_describing_012",
        "word": "обычный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нормальный или привычный; не особенный.",
                "examples": [
                    "Это был обычный день."
                ]
            }
        ],
        "oppositeEmoji": "✨",
        "subtext": "обычный день",
        "synonyms": [
            "обычная жизнь",
            "ничего обычного"
        ],
        "comparative": "обычнее",
        "superlative": "самый обычный",
        "feminine": "обычная",
        "neuter": "обычное",
        "plural": "обычные",
        "transcription": "/aˈbɨtʃʲnɨj/",
        "antonyms": [
            "особенный"
        ]
    },
    {
        "id": "ru_starter_shopping_001",
        "word": "дешёвый",
        "lang": "ru",
        "level": "starter",
        "theme": "shopping",
        "form": "adjective",
        "definitions": [
            {
                "text": "Стоящий мало денег; не дорогой.",
                "examples": [
                    "Этот кофе дешёвый."
                ]
            }
        ],
        "emoji": "🏷️",
        "oppositeEmoji": "💎",
        "feminine": "дешёвая",
        "neuter": "дешёвое",
        "plural": "дешёвые",
        "subtext": "дешёвый полет / очень дешёвый",
        "synonyms": [
            "дешёво и сердито"
        ],
        "comparative": "дешевле",
        "superlative": "самый дешёвый",
        "transcription": "/dʲiˈʂovɨj/",
        "antonyms": [
            "дорогой"
        ]
    },
    {
        "id": "ru_starter_shopping_002",
        "word": "дорогой",
        "lang": "ru",
        "level": "starter",
        "theme": "shopping",
        "form": "adjective",
        "definitions": [
            {
                "text": "Стоящий много денег.",
                "examples": [
                    "Эта машина дорогая."
                ]
            }
        ],
        "emoji": "💎",
        "oppositeEmoji": "🏷️",
        "feminine": "дорогая",
        "neuter": "дорогое",
        "plural": "дорогие",
        "subtext": "очень дорогой / дорогой вкус / слишком дорогой",
        "synonyms": [
            "дорогая машина"
        ],
        "comparative": "дороже",
        "superlative": "самый дорогой",
        "transcription": "/daˈraɡoj/",
        "antonyms": [
            "дешёвый"
        ]
    },
    {
        "id": "ru_starter_describing_013",
        "word": "хороший",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Высокого качества или приятный.",
                "examples": [
                    "Это хорошая работа."
                ]
            }
        ],
        "emoji": "👍",
        "oppositeEmoji": "👎",
        "feminine": "хорошая",
        "neuter": "хорощее",
        "plural": "хорошие",
        "subtext": "хорошее соотношение цены и качества",
        "synonyms": [
            "хорошая идея",
            "удачи"
        ],
        "comparative": "лучше",
        "superlative": "самый хороший",
        "transcription": "/xaˈroʂɨj/",
        "antonyms": [
            "плохой"
        ]
    },
    {
        "id": "ru_starter_describing_014",
        "word": "плохой",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не хороший; неприятный.",
                "examples": [
                    "Сегодня плохая погода."
                ]
            }
        ],
        "emoji": "👎",
        "oppositeEmoji": "👍",
        "feminine": "плохая",
        "neuter": "плохое",
        "plural": "плохие",
        "subtext": "",
        "synonyms": [
            "плохие новости",
            "неудача",
            "плохое решение"
        ],
        "comparative": "хуже",
        "superlative": "самый плохой",
        "transcription": "/plaˈxoj/",
        "antonyms": [
            "хороший"
        ]
    },
    {
        "id": "ru_starter_describing_015",
        "word": "большой",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Крупный по размеру или количеству.",
                "examples": [
                    "Это большой офис."
                ]
            }
        ],
        "emoji": "🐘",
        "oppositeEmoji": "🐭",
        "feminine": "большая",
        "neuter": "большое",
        "plural": "большие",
        "subtext": "большой дом / достаточно большой",
        "synonyms": [
            "большая проблема"
        ],
        "comparative": "больше",
        "superlative": "самый большой",
        "transcription": "/balʲˈʂoj/",
        "antonyms": [
            "маленький"
        ]
    },
    {
        "id": "ru_starter_describing_016",
        "word": "маленький",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Небольшой по размеру или количеству.",
                "examples": [
                    "У неё маленькая квартира."
                ]
            }
        ],
        "emoji": "🐭",
        "oppositeEmoji": "🐘",
        "feminine": "маленькая",
        "neuter": "маленькое",
        "plural": "маленькие",
        "subtext": "слишком маленький",
        "synonyms": [
            "маленькая квартира",
            "маленькая зарплата"
        ],
        "comparative": "меньше",
        "superlative": "самый маленький",
        "transcription": "/ˈmalʲinʲkʲij/",
        "antonyms": [
            "большой"
        ]
    },
    {
        "id": "ru_starter_describing_017",
        "word": "лёгкий",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не сложный.",
                "examples": [
                    "Этот тест лёгкий."
                ]
            }
        ],
        "feminine": "лёгкая",
        "emoji": "✅",
        "neuter": "лёгкое",
        "plural": "лёгкие",
        "subtext": "",
        "synonyms": [
            "легко сделать",
            "легко и просто",
            "нелегко"
        ],
        "comparative": "легче",
        "superlative": "самый лёгкий",
        "oppositeEmoji": "❌",
        "transcription": "/ˈlʲoxkʲij/",
        "antonyms": [
            "трудный"
        ]
    },
    {
        "id": "ru_starter_describing_018",
        "word": "трудный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Сложный для выполнения или понимания.",
                "examples": [
                    "Эта работа трудная."
                ]
            }
        ],
        "emoji": "❌",
        "oppositeEmoji": "✅",
        "feminine": "трудная",
        "neuter": "трудное",
        "plural": "трудные",
        "subtext": "",
        "synonyms": [
            "трудно сделать",
            "очень трудно",
            "находить это трудным"
        ],
        "comparative": "труднее",
        "superlative": "самый трудный",
        "transcription": "/ˈtrudnɨj/",
        "antonyms": [
            "лёгкий"
        ]
    },
    {
        "id": "ru_starter_emotions_002",
        "word": "счастливый",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Испытывающий удовольствие или радость.",
                "examples": [
                    "Я сегодня счастлив."
                ]
            }
        ],
        "emoji": "😊",
        "feminine": "счастливая",
        "neuter": "счастливое",
        "plural": "счастливые",
        "subtext": "счастливый день",
        "synonyms": [
            "чувствовать себя счастливым",
            "доволен чем-то"
        ],
        "comparative": "счастливее",
        "superlative": "самый счастливый",
        "transcription": "/ɕːasˈtlʲivɨj/"
    },
    {
        "id": "ru_starter_emotions_003",
        "word": "усталый",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувство потребности в отдыхе или сне.",
                "examples": [
                    "Я очень устал после работы."
                ]
            }
        ],
        "emoji": "😫",
        "feminine": "усталая",
        "neuter": "усталое",
        "plural": "усталые",
        "subtext": "сонный, измотанный, чувствовать усталость / очень усталый",
        "synonyms": [
            "чувствовать усталость",
            "устать от чего-либо"
        ],
        "comparative": "усталее",
        "superlative": "самый усталый"
    },
    {
        "id": "ru_starter_work_024",
        "word": "полный",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Содержащий столько, сколько возможно.",
                "examples": [
                    "Я чувствую себя полным (сытым) после еды."
                ]
            }
        ],
        "emoji": "⏰",
        "oppositeEmoji": "⏳",
        "subtext": "полный рабочий день / полный день",
        "synonyms": [
            "полон людей"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "полная",
        "neuter": "полное",
        "plural": "полные",
        "transcription": "/ˈpolnɨj/",
        "antonyms": [
            "неполный"
        ]
    },
    {
        "id": "ru_starter_work_025",
        "word": "неполный",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Работающий меньшее количество часов, чем стандартная рабочая неделя.",
                "examples": [
                    "Он работает неполный рабочий день по субботам."
                ]
            }
        ],
        "emoji": "⏳",
        "oppositeEmoji": "⏰",
        "subtext": "неполный рабочий день",
        "synonyms": [
            "работа на полставки",
            "студент-заочник"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "неполная",
        "neuter": "неполное",
        "plural": "неполные",
        "antonyms": [
            "полный"
        ]
    },
    {
        "id": "ru_starter_furniture_026",
        "word": "чистый",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "adjective",
        "definitions": [
            {
                "text": "Свободный от грязи.",
                "examples": [
                    "Кухня теперь чистая."
                ]
            }
        ],
        "emoji": "✨",
        "oppositeEmoji": "💩",
        "subtext": "",
        "synonyms": [
            "чистая одежда",
            "чистая комната",
            "содержать в чистоте"
        ],
        "feminine": "чистая",
        "neuter": "чистое",
        "plural": "чистые",
        "comparative": "чище",
        "superlative": "самый чистый",
        "transcription": "/ˈtʃʲistɨj/",
        "antonyms": [
            "грязный"
        ]
    },
    {
        "id": "ru_starter_food_drink_028",
        "word": "здоровый",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "adjective",
        "definitions": [
            {
                "text": "В хорошем состоянии здоровья; не больной.",
                "examples": [
                    "Овощи — это здоровая еда."
                ]
            }
        ],
        "feminine": "здоровая",
        "neuter": "здоровое",
        "plural": "здоровые",
        "subtext": "вести здоровый образ жизни",
        "synonyms": [
            "здоровое питание"
        ],
        "comparative": "здоровее",
        "superlative": "самый здоровый",
        "oppositeEmoji": "🍔",
        "transcription": "/zdaˈrovɨj/",
        "antonyms": [
            "unhealthy"
        ]
    },
    {
        "id": "ru_starter_illnesses_symptoms_001",
        "word": "больной",
        "lang": "ru",
        "level": "starter",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не здоровый; приболевший.",
                "examples": [
                    "Я чувствую себя больным сегодня."
                ]
            }
        ],
        "feminine": "больная",
        "neuter": "больное",
        "plural": "больные",
        "subtext": "",
        "synonyms": [
            "чувствовать себя больным",
            "заболеть"
        ],
        "comparative": "более больной",
        "superlative": "самый больной",
        "oppositeEmoji": "💪",
        "transcription": "/balʲˈnoj/",
        "antonyms": [
            "well"
        ]
    },
    {
        "id": "ru_starter_technology_005",
        "word": "онлайн",
        "lang": "ru",
        "level": "starter",
        "theme": "technology",
        "form": "adjective",
        "definitions": [
            {
                "text": "Использующий интернет.",
                "examples": [
                    "Я иногда покупаю еду онлайн."
                ]
            }
        ],
        "emoji": "🌐",
        "oppositeEmoji": "📴",
        "subtext": "онлайн-покупки / онлайн-курс / оставаться онлайн",
        "comparative": "более онлайн",
        "superlative": "самый онлайн",
        "feminine": "онлайн",
        "neuter": "онлайн",
        "plural": "онлайн",
        "transcription": "/anˈlajn/",
        "antonyms": [
            "offline"
        ]
    },
    {
        "id": "ru_starter_people_006",
        "word": "одинокий",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "adjective",
        "definitions": [
            {
                "text": "Без других людей; сам по себе.",
                "examples": [
                    "Она живет одна."
                ]
            }
        ],
        "emoji": "👤",
        "oppositeEmoji": "👫",
        "subtext": "",
        "synonyms": [
            "жить одному",
            "путешествовать одному",
            "чувствовать себя одиноким"
        ],
        "comparative": "более одинокий",
        "superlative": "самый одинокий",
        "feminine": "одинокая",
        "neuter": "одинокое",
        "plural": "одинокие",
        "antonyms": [
            "вместе"
        ]
    },
    {
        "id": "ru_starter_emotions_004",
        "word": "расслабленный",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Спокойный; не беспокоящийся и не напряжённый.",
                "examples": [
                    "Я чувствую себя расслабленно в выходные."
                ]
            }
        ],
        "feminine": "расслабленная",
        "neuter": "расслабленное",
        "plural": "расслабленные",
        "subtext": "",
        "synonyms": [
            "чувствовать себя расслабленным",
            "спокойная атмосфера"
        ],
        "comparative": "расслабленнее",
        "superlative": "самый расслабленный",
        "oppositeEmoji": "😫",
        "transcription": "/rasˈslablʲinnɨj/",
        "antonyms": [
            "напряжённый"
        ]
    },
    {
        "id": "ru_starter_emotions_005",
        "word": "обеспокоенный",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Испытывающий тревогу из-за того, что может случиться.",
                "examples": [
                    "Она беспокоится о своей работе."
                ]
            }
        ],
        "feminine": "обеспокоенная",
        "neuter": "обеспокоенное",
        "plural": "обеспокоенные",
        "subtext": "обеспокоенный вид",
        "synonyms": [
            "беспокоиться о работе"
        ],
        "comparative": "обеспокоеннее",
        "superlative": "самый обеспокоенный",
        "oppositeEmoji": "😌",
        "transcription": "/abʲispakoˈjennɨj/",
        "antonyms": [
            "calm"
        ]
    },
    {
        "id": "ru_starter_work_026",
        "word": "занятой",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий много дел.",
                "examples": [
                    "Я очень занят на этой неделе."
                ]
            }
        ],
        "emoji": "🏃",
        "feminine": "занятая",
        "neuter": "занятое",
        "plural": "занятые",
        "subtext": "занятой день",
        "synonyms": [
            "плотный график",
            "очень занят"
        ],
        "comparative": "более занятой",
        "superlative": "самый занятой"
    },
    {
        "id": "ru_starter_describing_019",
        "word": "полезный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Помогающий вам что-то сделать; пригодный.",
                "examples": [
                    "Персонал очень полезен."
                ]
            }
        ],
        "feminine": "полезная",
        "neuter": "полезное",
        "plural": "полезные",
        "subtext": "полезный совет / очень полезный",
        "comparative": "полезнее",
        "superlative": "самый полезный",
        "oppositeEmoji": "🗑️",
        "transcription": "/paˈlʲeznɨj/",
        "antonyms": [
            "бесполезный"
        ]
    },
    {
        "id": "ru_starter_describing_020",
        "word": "важный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий большую ценность или влияние.",
                "examples": [
                    "Сон очень важен."
                ]
            }
        ],
        "emoji": "❗",
        "subtext": "очень важный / самый важный",
        "synonyms": [
            "важная встреча"
        ],
        "feminine": "важная",
        "neuter": "важное",
        "plural": "важные",
        "comparative": "важнее",
        "superlative": "самый важный",
        "transcription": "/ˈvaʐnɨj/"
    },
    {
        "id": "ru_starter_colours_007",
        "word": "красный",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий цвет крови.",
                "examples": [
                    "У нее красная сумка."
                ]
            }
        ],
        "emoji": "🟥",
        "subtext": "красный свет",
        "synonyms": [
            "красное вино",
            "красное лицо"
        ],
        "feminine": "красная",
        "neuter": "красное",
        "plural": "красные",
        "comparative": "краснее",
        "superlative": "самый красный",
        "transcription": "/ˈkrasnɨj/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "krasьnъ"
        }
    },
    {
        "id": "ru_starter_colours_008",
        "word": "синий",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий цвет ясного неба.",
                "examples": [
                    "Его машина синяя."
                ]
            }
        ],
        "emoji": "🟦",
        "subtext": "темно-синий / светло-синий",
        "synonyms": [
            "синее небо"
        ],
        "feminine": "синяя",
        "neuter": "синее",
        "plural": "синие",
        "comparative": "синее",
        "superlative": "самый синий",
        "transcription": "/ˈsʲinʲij/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "sinьjь"
        }
    },
    {
        "id": "ru_starter_colours_009",
        "word": "зелёный",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий цвет травы или листьев.",
                "examples": [
                    "Она носит зеленое платье."
                ]
            }
        ],
        "emoji": "🟩",
        "subtext": "ярко-зелёный",
        "synonyms": [
            "зелёная энергия",
            "зелёное пространство"
        ],
        "feminine": "зелёная",
        "neuter": "зелёное",
        "plural": "зелёные",
        "comparative": "зелёнее",
        "superlative": "самый зелёный",
        "transcription": "/zʲiˈlʲonɨj/"
    },
    {
        "id": "ru_starter_colours_010",
        "word": "белый",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий цвет снега или молока.",
                "examples": [
                    "Стены белые."
                ]
            }
        ],
        "emoji": "⬜",
        "subtext": "почти белый / ярко-белый",
        "synonyms": [
            "белое вино"
        ],
        "feminine": "белая",
        "neuter": "белое",
        "plural": "белые",
        "comparative": "белее",
        "superlative": "самый белый",
        "transcription": "/ˈbʲelɨj/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "bělъ"
        }
    },
    {
        "id": "ru_starter_colours_011",
        "word": "чёрный",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий самый темный цвет.",
                "examples": [
                    "Он носит черное пальто."
                ]
            }
        ],
        "emoji": "⬛",
        "subtext": "чёрный кофе / чёрный рынок / иссиня-чёрный",
        "feminine": "чёрная",
        "neuter": "чёрное",
        "plural": "чёрные",
        "comparative": "чёрнее",
        "superlative": "самый чёрный",
        "transcription": "/ˈtʃʲornɨj/"
    },
    {
        "id": "ru_starter_colours_012",
        "word": "жёлтый",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий цвет солнца или лимона.",
                "examples": [
                    "У нее желтый зонт."
                ]
            }
        ],
        "emoji": "🟨",
        "subtext": "жёлтый свет / бледно-жёлтый / ярко-жёлтый",
        "feminine": "жёлтая",
        "neuter": "жёлтое",
        "plural": "жёлтые",
        "comparative": "жёлтее",
        "superlative": "самый жёлтый",
        "transcription": "/ˈʐoltɨj/"
    },
    {
        "id": "ru_starter_shopping_003",
        "word": "свободный",
        "lang": "ru",
        "level": "starter",
        "theme": "shopping",
        "form": "adjective",
        "definitions": [
            {
                "text": "Который не стоит денег.",
                "examples": [
                    "Музей бесплатный по воскресеньям."
                ]
            }
        ],
        "emoji": "🎁",
        "subtext": "",
        "synonyms": [
            "даром",
            "в подарок"
        ],
        "feminine": "свободная",
        "neuter": "свободное",
        "plural": "свободные",
        "comparative": "свободнее",
        "superlative": "самый свободный",
        "transcription": "/svaˈbodnɨj/"
    },
    {
        "id": "ru_starter_shopping_004",
        "word": "открытый",
        "lang": "ru",
        "level": "starter",
        "theme": "shopping",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не закрытый.",
                "examples": [
                    "Магазин открыт до восьми."
                ]
            }
        ],
        "emoji": "📖",
        "oppositeEmoji": "🔒",
        "subtext": "",
        "synonyms": [
            "открытая дверь",
            "открыт для идей",
            "широко открыт"
        ],
        "feminine": "открытая",
        "neuter": "открытое",
        "plural": "открытые",
        "comparative": "открытее",
        "superlative": "самый открытый",
        "transcription": "/atˈkrɨtɨj/",
        "antonyms": [
            "закрытый"
        ]
    },
    {
        "id": "ru_starter_shopping_005",
        "word": "закрытый",
        "lang": "ru",
        "level": "starter",
        "theme": "shopping",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не открытый.",
                "examples": [
                    "Офис закрыт в выходные."
                ]
            }
        ],
        "emoji": "🔒",
        "oppositeEmoji": "📖",
        "subtext": "",
        "synonyms": [
            "закрыт на обед",
            "ограниченный ум",
            "закрытая дверь"
        ],
        "feminine": "закрытая",
        "neuter": "закрытое",
        "plural": "закрытые",
        "comparative": "закрытее",
        "superlative": "самый закрытый",
        "transcription": "/zaˈkrɨtɨj/",
        "antonyms": [
            "открытый"
        ]
    },
    {
        "id": "ru_starter_describing_021",
        "word": "крупный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Больше среднего размера.",
                "examples": [
                    "Париж — очень крупный город."
                ]
            }
        ],
        "feminine": "крупная",
        "emoji": "📏",
        "neuter": "крупное",
        "plural": "крупные",
        "subtext": "крупный город",
        "synonyms": [
            "крупная компания",
            "крупная сумма"
        ],
        "comparative": "крупнее",
        "superlative": "самый крупный"
    },
    {
        "id": "ru_starter_describing_022",
        "word": "небольшой",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Маленький по размеру; небольшое количество.",
                "examples": [
                    "Он водит маленькую машину, чтобы сэкономить на топливе."
                ]
            }
        ],
        "feminine": "небольшая",
        "emoji": "📏",
        "neuter": "небольшое",
        "plural": "небольшие",
        "subtext": "",
        "synonyms": [
            "чуть-чуть",
            "немного денег",
            "слишком мало"
        ],
        "comparative": "более небольшой",
        "superlative": "самый небольшой"
    },
    {
        "id": "ru_starter_describing_023",
        "word": "длинный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий большую длину.",
                "examples": [
                    "У нее длинная дорога на работу каждый день."
                ]
            }
        ],
        "feminine": "длинная",
        "emoji": "📏",
        "neuter": "длинное",
        "plural": "длинные",
        "subtext": "длинный день",
        "synonyms": [
            "длинное путешествие",
            "долгое время"
        ],
        "comparative": "длиннее",
        "superlative": "самый длинный",
        "transcription": "/ˈdlʲinnɨj/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "dĺ̥gъ"
        }
    },
    {
        "id": "ru_starter_describing_024",
        "word": "низкий",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ниже среднего уровня.",
                "examples": [
                    "Зарплата слишком низкая."
                ]
            }
        ],
        "feminine": "низкая",
        "emoji": "📉",
        "neuter": "низкое",
        "plural": "низкие",
        "subtext": "",
        "synonyms": [
            "низкая цена",
            "низкая зарплата",
            "низкое качество"
        ],
        "comparative": "ниже",
        "superlative": "самый низкий",
        "transcription": "/ˈnʲizkʲij/"
    },
    {
        "id": "ru_starter_describing_025",
        "word": "пустой",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ничего не содержащий.",
                "examples": [
                    "Офис пуст в выходные."
                ]
            }
        ],
        "feminine": "пустая",
        "emoji": "🫙",
        "neuter": "пустое",
        "plural": "пустые",
        "subtext": "почти пустой",
        "synonyms": [
            "пустая квартира",
            "пустая комната"
        ],
        "comparative": "более пустой",
        "superlative": "самый пустой",
        "transcription": "/pusˈtoj/"
    },
    {
        "id": "ru_starter_nature_017",
        "word": "тёплый",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "adjective",
        "definitions": [
            {
                "text": "Слегка горячий.",
                "examples": [
                    "В офисе тепло и уютно."
                ]
            }
        ],
        "feminine": "тёплая",
        "emoji": "☀️",
        "neuter": "тёплое",
        "plural": "тёплые",
        "subtext": "тёплый прием",
        "synonyms": [
            "тёплая погода",
            "держать в тепле"
        ],
        "comparative": "тёплее",
        "superlative": "самый тёплый",
        "transcription": "/ˈtʲoplɨj/"
    },
    {
        "id": "ru_starter_nature_018",
        "word": "прохладный",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "adjective",
        "definitions": [
            {
                "text": "Слегка холодный.",
                "examples": [
                    "Она предпочитает прохладную погоду для работы."
                ]
            }
        ],
        "feminine": "прохладная",
        "emoji": "🌬️",
        "neuter": "прохладное",
        "plural": "прохладные",
        "subtext": "прохладный напиток",
        "synonyms": [
            "прохладная погода",
            "сохранять прохладу"
        ],
        "comparative": "прохладнее",
        "superlative": "самый прохладный"
    },
    {
        "id": "ru_starter_nature_019",
        "word": "мокрый",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "adjective",
        "definitions": [
            {
                "text": "Покрытый водой.",
                "examples": [
                    "Его куртка мокрая от дождя."
                ]
            }
        ],
        "feminine": "мокрая",
        "emoji": "🚿",
        "neuter": "мокрое",
        "plural": "мокрые",
        "subtext": "",
        "synonyms": [
            "мокрая погода",
            "мокрая одежда",
            "промокнуть"
        ],
        "comparative": "мокрее",
        "superlative": "самый мокрый",
        "transcription": "/ˈmokrɨj/"
    },
    {
        "id": "ru_starter_nature_020",
        "word": "сухой",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "adjective",
        "definitions": [
            {
                "text": "Без воды или влаги.",
                "examples": [
                    "Кладовая должна оставаться сухой."
                ]
            }
        ],
        "feminine": "сухая",
        "emoji": "🏜️",
        "neuter": "сухое",
        "plural": "сухие",
        "subtext": "",
        "synonyms": [
            "сухая погода",
            "сухая кожа",
            "оставаться сухим"
        ],
        "comparative": "более сухой",
        "superlative": "самый сухой",
        "transcription": "/suˈxoj/"
    },
    {
        "id": "ru_starter_furniture_027",
        "word": "грязный",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "adjective",
        "definitions": [
            {
                "text": "Покрытый грязью.",
                "examples": [
                    "Его руки грязные."
                ]
            }
        ],
        "feminine": "грязная",
        "emoji": "💩",
        "neuter": "грязное",
        "plural": "грязные",
        "subtext": "",
        "synonyms": [
            "грязные руки",
            "грязная одежда",
            "испачкаться"
        ],
        "comparative": "грязнее",
        "superlative": "самый грязный",
        "transcription": "/ˈɡrʲaznɨj/"
    },
    {
        "id": "ru_starter_describing_026",
        "word": "твёрдый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не мягкий; сложный.",
                "examples": [
                    "Стул очень твёрдый."
                ]
            }
        ],
        "feminine": "твёрдая",
        "emoji": "🧱",
        "neuter": "твёрдое",
        "plural": "твёрдые",
        "subtext": "",
        "synonyms": [
            "тяжелая работа",
            "трудное решение",
            "слишком твердый"
        ],
        "comparative": "твёрдее",
        "superlative": "самый твёрдый",
        "transcription": "/ˈtvʲordɨj/"
    },
    {
        "id": "ru_starter_describing_027",
        "word": "мягкий",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не твёрдый.",
                "examples": [
                    "Диван очень мягкий."
                ]
            }
        ],
        "feminine": "мягкая",
        "emoji": "☁️",
        "neuter": "мягкое",
        "plural": "мягкие",
        "subtext": "мягкий свет",
        "synonyms": [
            "мягкая музыка",
            "мягкие навыки"
        ],
        "comparative": "мягкее",
        "superlative": "самый мягкий",
        "transcription": "/ˈmʲaxkʲij/"
    },
    {
        "id": "ru_starter_describing_028",
        "word": "тяжёлый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий большой вес.",
                "examples": [
                    "Сумка очень тяжёлая."
                ]
            }
        ],
        "feminine": "тяжёлая",
        "emoji": "🏋️",
        "neuter": "тяжёлое",
        "plural": "тяжёлые",
        "subtext": "",
        "synonyms": [
            "интенсивное движение",
            "сильный дождь",
            "слишком тяжелый"
        ],
        "comparative": "тяжёлее",
        "superlative": "самый тяжёлый",
        "transcription": "/tʲiˈʐolɨj/"
    },
    {
        "id": "ru_starter_colours_013",
        "word": "коричневый",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "adjective",
        "definitions": [
            {
                "text": "Цвета дерева или земли.",
                "examples": [
                    "У нее карие (коричневые) глаза."
                ]
            }
        ],
        "feminine": "коричневая",
        "emoji": "🟫",
        "neuter": "коричневое",
        "plural": "коричневые",
        "subtext": "тёмно-коричневый / светло-коричневый / коричневый хлеб",
        "comparative": "коричневее",
        "superlative": "самый коричневый",
        "transcription": "/kaˈrʲitʃʲnʲivɨj/"
    },
    {
        "id": "ru_starter_colours_014",
        "word": "серый",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "adjective",
        "definitions": [
            {
                "text": "Цвета между черным и белым.",
                "examples": [
                    "У него седые (серые) волосы."
                ]
            }
        ],
        "feminine": "серая",
        "emoji": "🩶",
        "neuter": "серое",
        "plural": "серые",
        "subtext": "бледно-серый",
        "synonyms": [
            "серая зона",
            "серое небо"
        ],
        "comparative": "серее",
        "superlative": "самый серый",
        "transcription": "/ˈsʲerɨj/"
    },
    {
        "id": "ru_starter_colours_015",
        "word": "розовый",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бледно-красный цвет.",
                "examples": [
                    "Она предпочитает розовый красному."
                ]
            }
        ],
        "feminine": "розовая",
        "emoji": "🩷",
        "neuter": "розовое",
        "plural": "розовые",
        "subtext": "светло-розовый / ярко-розовый / насыщенный розовый",
        "comparative": "розовее",
        "superlative": "самый розовый",
        "transcription": "/ˈrozəvɨj/"
    },
    {
        "id": "ru_starter_colours_016",
        "word": "оранжевый",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "adjective",
        "definitions": [
            {
                "text": "Цвета апельсина.",
                "examples": [
                    "Он купил оранжевую куртку."
                ]
            }
        ],
        "feminine": "оранжевая",
        "emoji": "🟧",
        "neuter": "оранжевое",
        "plural": "оранжевые",
        "subtext": "ярко-оранжевый / тёмно-оранжевый / оранжевый свет",
        "comparative": "оранжевее",
        "superlative": "самый оранжевый",
        "transcription": "/aˈranʐɨvɨj/"
    },
    {
        "id": "ru_starter_describing_029",
        "word": "великолепный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чрезвычайно хороший.",
                "examples": [
                    "Она великолепный менеджер."
                ]
            }
        ],
        "feminine": "великолепная",
        "emoji": "🌟",
        "neuter": "великолепное",
        "plural": "великолепные",
        "subtext": "",
        "synonyms": [
            "отличная идея",
            "отличная возможность",
            "высокая ценность"
        ],
        "comparative": "великолепнее",
        "superlative": "самый великолепный"
    },
    {
        "id": "ru_starter_describing_030",
        "word": "приятный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Приятный или добрый.",
                "examples": [
                    "Новый офис очень приятный."
                ]
            }
        ],
        "feminine": "приятная",
        "emoji": "😊",
        "neuter": "приятное",
        "plural": "приятные",
        "subtext": "приятный человек",
        "synonyms": [
            "хороший день",
            "хорошее место"
        ],
        "comparative": "приятнее",
        "superlative": "самый приятный",
        "transcription": "/pʁʲiˈjatnɨj/"
    },
    {
        "id": "ru_starter_describing_031",
        "word": "замечательный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чрезвычайно хороший; вызывающий восторг.",
                "examples": [
                    "У них была замечательная команда."
                ]
            }
        ],
        "feminine": "замечательная",
        "emoji": "✨",
        "neuter": "замечательное",
        "plural": "замечательные",
        "subtext": "",
        "synonyms": [
            "замечательная возможность",
            "замечательное время"
        ],
        "comparative": "замечательнее",
        "superlative": "самый замечательный"
    },
    {
        "id": "ru_starter_describing_032",
        "word": "ужасный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Очень плохой или неприятный.",
                "examples": [
                    "Шум в офисе ужасный."
                ]
            }
        ],
        "feminine": "ужасная",
        "emoji": "😫",
        "neuter": "ужасное",
        "plural": "ужасные",
        "subtext": "",
        "synonyms": [
            "ужасная погода",
            "ужасная ошибка",
            "ужасные новости"
        ],
        "comparative": "ужаснее",
        "superlative": "самый ужасный",
        "transcription": "/uˈʐasnɨj/"
    },
    {
        "id": "ru_starter_describing_033",
        "word": "отвратительный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Очень плохой или неприятный.",
                "examples": [
                    "Шум в открытом офисе ужасен."
                ]
            }
        ],
        "feminine": "отвратительная",
        "emoji": "🤮",
        "neuter": "отвратительное",
        "plural": "отвратительные",
        "subtext": "",
        "synonyms": [
            "ужасная погода",
            "ужасные новости",
            "просто ужасно"
        ],
        "comparative": "отвратительнее",
        "superlative": "самый отвратительный",
        "transcription": "/atvraˈtʲitʲilʲnɨj/"
    },
    {
        "id": "ru_starter_describing_034",
        "word": "удивительный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Вызывающий большое удивление или восхищение.",
                "examples": [
                    "Она выступила с потрясающей презентацией."
                ]
            }
        ],
        "feminine": "удивительная",
        "emoji": "😲",
        "neuter": "удивительное",
        "plural": "удивительные",
        "subtext": "удивительный результат",
        "synonyms": [
            "удивительное предложение",
            "действительно удивительно"
        ],
        "comparative": "удивительнее",
        "superlative": "самый удивительный",
        "transcription": "/udʲiˈvʲitʲilʲnɨj/"
    },
    {
        "id": "ru_starter_describing_035",
        "word": "фантастический",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чрезвычайно хороший.",
                "examples": [
                    "Новая система работает фантастически."
                ]
            }
        ],
        "feminine": "фантастическая",
        "emoji": "🤩",
        "neuter": "фантастическое",
        "plural": "фантастические",
        "subtext": "",
        "synonyms": [
            "фантастические новости",
            "фантастическая возможность"
        ],
        "comparative": "фантастическее",
        "superlative": "самый фантастический",
        "transcription": "/fantasˈtʲitʃʲiskʲij/"
    },
    {
        "id": "ru_starter_emotions_006",
        "word": "грустный",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувствующий несчастье.",
                "examples": [
                    "Ему было грустно покидать компанию."
                ]
            }
        ],
        "feminine": "грустная",
        "emoji": "😢",
        "neuter": "грустное",
        "plural": "грустные",
        "subtext": "",
        "synonyms": [
            "грустная ситуация",
            "глубоко грустно"
        ],
        "comparative": "грустнее",
        "superlative": "самый грустный",
        "transcription": "/ˈɡrustnɨj/"
    },
    {
        "id": "ru_starter_emotions_007",
        "word": "голодный",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нуждающийся в еде.",
                "examples": [
                    "Я голоден."
                ]
            }
        ],
        "feminine": "голодная",
        "emoji": "🤤",
        "neuter": "голодное",
        "plural": "голодные",
        "subtext": "очень голодный",
        "synonyms": [
            "остаться голодным"
        ],
        "comparative": "голоднее",
        "superlative": "самый голодный",
        "transcription": "/ɡaˈlodnɨj/"
    },
    {
        "id": "ru_starter_emotions_008",
        "word": "сердитый",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувствующий сильное недовольство.",
                "examples": [
                    "Она была сердита на решение."
                ]
            }
        ],
        "feminine": "сердитая",
        "emoji": "😠",
        "neuter": "сердитое",
        "plural": "сердитые",
        "subtext": "очень сердитый",
        "synonyms": [
            "злиться на кого-то"
        ],
        "comparative": "сердитее",
        "superlative": "самый сердитый"
    },
    {
        "id": "ru_starter_emotions_009",
        "word": "скучающий",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувствующий отсутствие интереса.",
                "examples": [
                    "Ему скучно на длинных совещаниях."
                ]
            }
        ],
        "feminine": "скучающая",
        "emoji": "😐",
        "neuter": "скучающее",
        "plural": "скучающие",
        "subtext": "",
        "synonyms": [
            "скучно на",
            "легко наскучивает"
        ],
        "comparative": "скучающее",
        "superlative": "самый скучающий",
        "transcription": "/skuˈtʃʲajʊɕːij/"
    },
    {
        "id": "ru_starter_emotions_010",
        "word": "взволнованный",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувствующий энтузиазм и нетерпение.",
                "examples": [
                    "Она взволнована своей новой работой."
                ]
            }
        ],
        "feminine": "взволнованная",
        "emoji": "🤩",
        "neuter": "взволнованное",
        "plural": "взволнованные",
        "subtext": "",
        "synonyms": [
            "взволнован чем-то",
            "очень взволнован"
        ],
        "comparative": "взволнованнее",
        "superlative": "самый взволнованный",
        "transcription": "/vzvalˈnovənnɨj/"
    },
    {
        "id": "ru_starter_emotions_011",
        "word": "испуганный",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувствующий страх.",
                "examples": [
                    "Он боится совершить ошибку."
                ]
            }
        ],
        "feminine": "испуганная",
        "emoji": "😨",
        "neuter": "испуганное",
        "plural": "испуганные",
        "subtext": "",
        "synonyms": [
            "бояться чего-то",
            "глубоко испуган"
        ],
        "comparative": "испуганнее",
        "superlative": "самый испуганный"
    },
    {
        "id": "ru_starter_emotions_012",
        "word": "огорчённый",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувство сожаления или печали.",
                "examples": [
                    "Она извиняется за задержку."
                ]
            }
        ],
        "feminine": "огорчённая",
        "emoji": "🥺",
        "neuter": "огорчённое",
        "plural": "огорчённые",
        "subtext": "",
        "synonyms": [
            "сожалеть",
            "жаль кого-то",
            "извиняться за"
        ],
        "comparative": "огорчённее",
        "superlative": "самый огорчённый"
    },
    {
        "id": "ru_starter_describing_036",
        "word": "правильный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Верный; подходящий.",
                "examples": [
                    "Это правильный офис?"
                ]
            }
        ],
        "feminine": "правильная",
        "emoji": "✅",
        "neuter": "правильное",
        "plural": "правильные",
        "subtext": "правильный ответ",
        "synonyms": [
            "правильное время",
            "абсолютно верно"
        ],
        "comparative": "правильнее",
        "superlative": "самый правильный",
        "transcription": "/ˈpravʲilʲnɨj/"
    },
    {
        "id": "ru_starter_describing_037",
        "word": "неправильный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий ошибку.",
                "examples": [
                    "Это был неправильный выбор."
                ]
            }
        ],
        "feminine": "неправильная",
        "emoji": "❌",
        "neuter": "неправильное",
        "plural": "неправильные",
        "subtext": "неправильный ответ",
        "synonyms": [
            "пойти не так",
            "совершенно неправильно"
        ],
        "comparative": "неправильнее",
        "superlative": "самый неправильный",
        "transcription": "/nʲiˈpravʲilʲnɨj/"
    },
    {
        "id": "ru_starter_describing_038",
        "word": "новый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Существующий недавно.",
                "examples": [
                    "У меня новый компьютер."
                ]
            }
        ],
        "feminine": "новая",
        "emoji": "🆕",
        "neuter": "новое",
        "plural": "новые",
        "subtext": "совершенно новый",
        "synonyms": [
            "новая работа"
        ],
        "comparative": "новее",
        "superlative": "самый новый",
        "transcription": "/ˈnovɨj/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "novъ"
        }
    },
    {
        "id": "ru_starter_describing_039",
        "word": "другой",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не такой же.",
                "examples": [
                    "У нас разные мнения по этому вопросу."
                ]
            }
        ],
        "feminine": "другая",
        "emoji": "↔️",
        "neuter": "другое",
        "plural": "другие",
        "subtext": "совершенно другой",
        "synonyms": [
            "очень разный",
            "отличный от"
        ],
        "comparative": "более другой",
        "superlative": "самый другой",
        "transcription": "/druˈɡoj/"
    },
    {
        "id": "ru_starter_describing_040",
        "word": "одинаковый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не отличается; идентично.",
                "examples": [
                    "Они получают одинаковую зарплату."
                ]
            }
        ],
        "feminine": "одинаковая",
        "emoji": "identical",
        "neuter": "одинаковое",
        "plural": "одинаковые",
        "subtext": "в то же время",
        "synonyms": [
            "такой же",
            "как",
            "точно такой же"
        ],
        "comparative": null,
        "superlative": null
    },
    {
        "id": "ru_starter_describing_041",
        "word": "быстрый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Двигающийся с большой скоростью.",
                "examples": [
                    "Поезд быстрый."
                ]
            }
        ],
        "feminine": "быстрая",
        "emoji": "⚡",
        "neuter": "быстрое",
        "plural": "быстрые",
        "subtext": "очень быстрый",
        "synonyms": [
            "фастфуд",
            "скорый поезд"
        ],
        "comparative": "быстрее",
        "superlative": "самый быстрый",
        "transcription": "/ˈbɨstrɨj/"
    },
    {
        "id": "ru_starter_describing_042",
        "word": "медленный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не быстрый.",
                "examples": [
                    "Новая система очень медленная."
                ]
            }
        ],
        "feminine": "медленная",
        "emoji": "🐢",
        "neuter": "медленное",
        "plural": "медленные",
        "subtext": "медленный прогресс / медленный интернет / очень медленный",
        "comparative": "медленнее",
        "superlative": "самый медленный",
        "transcription": "/ˈmʲedlʲinnɨj/"
    },
    {
        "id": "ru_starter_describing_043",
        "word": "тихий",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Издающий мало шума или не издающий его вовсе.",
                "examples": [
                    "В офисе тихо в обед."
                ]
            }
        ],
        "feminine": "тихая",
        "emoji": "🤫",
        "neuter": "тихое",
        "plural": "тихие",
        "subtext": "тихий район",
        "synonyms": [
            "вести себя тихо",
            "мило и тихо"
        ],
        "comparative": "тише",
        "superlative": "самый тихий",
        "transcription": "/ˈtʲixʲij/"
    },
    {
        "id": "ru_starter_describing_044",
        "word": "громкий",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Издающий много шума.",
                "examples": [
                    "В офисе слишком громко."
                ]
            }
        ],
        "feminine": "громкая",
        "emoji": "🔊",
        "neuter": "громкое",
        "plural": "громкие",
        "subtext": "громкий шум / громкий голос",
        "synonyms": [
            "слишком громко"
        ],
        "comparative": "громче",
        "superlative": "самый громкий"
    },
    {
        "id": "ru_starter_places_009",
        "word": "безопасный",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не опасный.",
                "examples": [
                    "Этот район очень безопасный."
                ]
            }
        ],
        "feminine": "безопасная",
        "emoji": "🛡️",
        "neuter": "безопасное",
        "plural": "безопасные",
        "subtext": "безопасный район / чувствовать себя в безопасности",
        "synonyms": [
            "безопасно делать"
        ],
        "comparative": "безопаснее",
        "superlative": "самый безопасный",
        "transcription": "/bʲizapaˈsnɨj/"
    },
    {
        "id": "ru_starter_places_010",
        "word": "опасный",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "adjective",
        "definitions": [
            {
                "text": "Способный причинить вред.",
                "examples": [
                    "Эта дорога опасна."
                ]
            }
        ],
        "feminine": "опасная",
        "emoji": "⚠️",
        "neuter": "опасное",
        "plural": "опасные",
        "subtext": "очень опасный / потенциально опасный",
        "synonyms": [
            "опасная ситуация"
        ],
        "comparative": "опаснее",
        "superlative": "самый опасный",
        "transcription": "/aˈpasnɨj/"
    },
    {
        "id": "ru_starter_emotions_013",
        "word": "несчастный",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не чувствующий себя довольным; неудовлетворенный.",
                "examples": [
                    "Он несчастлив из-за своей текущей зарплаты."
                ]
            }
        ],
        "feminine": "несчастная",
        "neuter": "несчастное",
        "plural": "несчастные",
        "subtext": "очень несчастный",
        "synonyms": [
            "недоволен чем-то"
        ],
        "comparative": "несчастнее",
        "superlative": "самый несчастный",
        "transcription": "/nʲiˈɕːastnɨj/"
    },
    {
        "id": "ru_starter_emotions_014",
        "word": "нервный",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувствующий тревогу.",
                "examples": [
                    "Он нервничал перед собеседованием."
                ]
            }
        ],
        "feminine": "нервная",
        "neuter": "нервное",
        "plural": "нервные",
        "subtext": "очень нервный",
        "synonyms": [
            "нервничать из-за"
        ],
        "comparative": "нервнее",
        "superlative": "самый нервный",
        "transcription": "/ˈnʲervnɨj/"
    },
    {
        "id": "ru_starter_emotions_015",
        "word": "напряжённый",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувствующий беспокойство и напряжение от давления.",
                "examples": [
                    "Она чувствует стресс перед каждым дедлайном."
                ]
            }
        ],
        "feminine": "напряжённая",
        "neuter": "напряжённое",
        "plural": "напряжённые",
        "subtext": "очень напряжённый",
        "synonyms": [
            "чувствовать стресс",
            "измотанный"
        ],
        "comparative": "напряжённее",
        "superlative": "самый напряжённый",
        "transcription": "/naprʲiˈʐonnɨj/"
    },
    {
        "id": "ru_starter_describing_045",
        "word": "уверенный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Уверенный в своих способностях.",
                "examples": [
                    "Она очень уверена в себе."
                ]
            }
        ],
        "feminine": "уверенная",
        "neuter": "уверенное",
        "plural": "уверенные",
        "subtext": "уверенный в себе / очень уверенный",
        "synonyms": [
            "чувствовать себя уверенно"
        ],
        "comparative": "увереннее",
        "superlative": "самый уверенный",
        "transcription": "/uˈvʲerʲinnɨj/"
    },
    {
        "id": "ru_starter_describing_046",
        "word": "гордый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувствующий удовлетворение от достижений.",
                "examples": [
                    "Он гордился своим повышением."
                ]
            }
        ],
        "feminine": "гордая",
        "neuter": "гордое",
        "plural": "гордые",
        "subtext": "очень гордый",
        "synonyms": [
            "чувствовать гордость",
            "гордиться чем-то"
        ],
        "comparative": "гордее",
        "superlative": "самый гордый",
        "transcription": "/ˈɡordɨj/"
    },
    {
        "id": "ru_starter_emotions_016",
        "word": "напуганный",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Испытывающий страх.",
                "examples": [
                    "Ей было страшно."
                ]
            }
        ],
        "feminine": "напуганная",
        "neuter": "напуганное",
        "plural": "напуганные",
        "subtext": "",
        "synonyms": [
            "испуган чем-то",
            "очень напуган"
        ],
        "comparative": "напуганнее",
        "superlative": "самый напуганный",
        "transcription": "/naˈpuɡənnɨj/"
    },
    {
        "id": "ru_starter_emotions_017",
        "word": "удивлённый",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувствующий шок от чего-то неожиданного.",
                "examples": [
                    "Он был удивлен."
                ]
            }
        ],
        "feminine": "удивлённая",
        "neuter": "удивлённое",
        "plural": "удивлённые",
        "subtext": "",
        "synonyms": [
            "очень удивлён",
            "приятно удивлён"
        ],
        "comparative": "удивлённее",
        "superlative": "самый удивлённый"
    },
    {
        "id": "ru_starter_emotions_018",
        "word": "разочарованный",
        "lang": "ru",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувствующий грусть, потому что что-то оказалось не таким хорошим, как ожидалось.",
                "examples": [
                    "Она была разочарована."
                ]
            }
        ],
        "feminine": "разочарованная",
        "neuter": "разочарованное",
        "plural": "разочарованные",
        "subtext": "",
        "synonyms": [
            "глубоко разочарован",
            "разочарован чем-то"
        ],
        "comparative": "разочарованнее",
        "superlative": "самый разочарованный"
    },
    {
        "id": "ru_starter_describing_047",
        "word": "красивый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Приятный на вид.",
                "examples": [
                    "Вид из офиса красивый."
                ]
            }
        ],
        "feminine": "красивая",
        "neuter": "красивое",
        "plural": "красивые",
        "subtext": "красивый вид / красивый город / абсолютно красивый",
        "comparative": "красивее",
        "superlative": "самый красивый",
        "transcription": "/kraˈsʲivɨj/"
    },
    {
        "id": "ru_starter_describing_048",
        "word": "симпатичный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Приятно смотреть; довольно привлекательно.",
                "examples": [
                    "Новая переговорная очень красивая."
                ]
            }
        ],
        "feminine": "симпатичная",
        "neuter": "симпатичное",
        "plural": "симпатичные",
        "subtext": "довольно симпатичный",
        "synonyms": [
            "довольно хороший",
            "симпатичное место"
        ],
        "comparative": "симпатичнее",
        "superlative": "самый симпатичный"
    },
    {
        "id": "ru_starter_describing_049",
        "word": "сильный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий большую физическую или умственную силу.",
                "examples": [
                    "Она сильный лидер."
                ]
            }
        ],
        "feminine": "сильная",
        "neuter": "сильное",
        "plural": "сильные",
        "subtext": "очень сильный",
        "synonyms": [
            "крепкий кофе",
            "сильное мнение"
        ],
        "comparative": "сильнее",
        "superlative": "самый сильный",
        "transcription": "/ˈsʲilʲnɨj/"
    },
    {
        "id": "ru_starter_describing_050",
        "word": "слабый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не имеющий силы.",
                "examples": [
                    "Сигнал слабый."
                ]
            }
        ],
        "feminine": "слабая",
        "neuter": "слабое",
        "plural": "слабые",
        "subtext": "слабый аргумент / очень слабый",
        "synonyms": [
            "слабое соединение"
        ],
        "comparative": "слабее",
        "superlative": "самый слабый",
        "transcription": "/ˈslabɨj/"
    },
    {
        "id": "ru_starter_illnesses_symptoms_002",
        "word": "спортивный",
        "lang": "ru",
        "level": "starter",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "В хорошей физической форме благодаря упражнениям.",
                "examples": [
                    "Она поддерживает форму, катаясь на велосипеде на работу каждый день."
                ]
            }
        ],
        "feminine": "спортивная",
        "neuter": "спортивное",
        "plural": "спортивные",
        "subtext": "",
        "synonyms": [
            "физически здоров",
            "оставаться в форме",
            "поддерживать форму"
        ],
        "comparative": "спортивнее",
        "superlative": "самый спортивный"
    },
    {
        "id": "ru_starter_describing_051",
        "word": "отличный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чрезвычайно хороший; высокого стандарта.",
                "examples": [
                    "Она получила отличный отзыв."
                ]
            }
        ],
        "feminine": "отличная",
        "neuter": "отличное",
        "plural": "отличные",
        "subtext": "",
        "synonyms": [
            "отличная работа",
            "отличные результаты",
            "абсолютно отлично"
        ],
        "comparative": "отличнее",
        "superlative": "самый отличный",
        "transcription": "/atˈlʲitʃʲnɨj/"
    },
    {
        "id": "ru_starter_describing_052",
        "word": "идеальный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Без каких-либо ошибок.",
                "examples": [
                    "Это идеальный день для путешествия."
                ]
            }
        ],
        "feminine": "идеальная",
        "neuter": "идеальное",
        "plural": "идеальные",
        "subtext": "",
        "synonyms": [
            "идеальная возможность",
            "идеальное время",
            "абсолютно идеально"
        ],
        "comparative": "идеальнее",
        "superlative": "самый идеальный",
        "transcription": "/idʲiˈalʲnɨj/"
    },
    {
        "id": "ru_starter_describing_053",
        "word": "бесполезный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не имеющий пользы.",
                "examples": [
                    "Это программное обеспечение бесполезно."
                ]
            }
        ],
        "feminine": "бесполезная",
        "neuter": "бесполезное",
        "plural": "бесполезные",
        "subtext": "совершенно бесполезный",
        "synonyms": [
            "оказаться бесполезным",
            "бесполезная идея"
        ],
        "comparative": "бесполезнее",
        "superlative": "самый бесполезный",
        "transcription": "/bʲispaˈlʲeznɨj/"
    },
    {
        "id": "ru_starter_describing_054",
        "word": "верный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Верно или правильно; без ошибок.",
                "examples": [
                    "Пожалуйста, проверьте правильность цифр."
                ]
            }
        ],
        "feminine": "верная",
        "neuter": "верное",
        "plural": "верные",
        "subtext": "верный путь",
        "synonyms": [
            "правильный ответ",
            "совершенно верно"
        ],
        "comparative": "вернее",
        "superlative": "самый верный"
    },
    {
        "id": "ru_starter_describing_055",
        "word": "интересный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Привлекающий внимание.",
                "examples": [
                    "Предложение очень интересное."
                ]
            }
        ],
        "feminine": "интересная",
        "neuter": "интересное",
        "plural": "интересные",
        "subtext": "очень интересный",
        "synonyms": [
            "интересная идея"
        ],
        "comparative": "интереснее",
        "superlative": "самый интересный",
        "transcription": "/intʲiˈrʲesnɨj/"
    },
    {
        "id": "ru_starter_describing_056",
        "word": "скучный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не интересный.",
                "examples": [
                    "Встреча была очень скучной."
                ]
            }
        ],
        "feminine": "скучная",
        "neuter": "скучное",
        "plural": "скучные",
        "subtext": "очень скучный",
        "synonyms": [
            "скучная встреча"
        ],
        "comparative": "скучнее",
        "superlative": "самый скучный",
        "transcription": "/ˈskutʃʲnɨj/"
    },
    {
        "id": "ru_starter_describing_057",
        "word": "необходимый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Требуемый; обязательный.",
                "examples": [
                    "Хорошее интернет-соединение необходимо."
                ]
            }
        ],
        "feminine": "необходимая",
        "neuter": "необходимое",
        "plural": "необходимые",
        "subtext": "абсолютно необходимый",
        "synonyms": [
            "если необходимо",
            "необходимо сделать"
        ],
        "comparative": "необходимее",
        "superlative": "самый необходимый",
        "transcription": "/nʲiabxaˈdʲimɨj/"
    },
    {
        "id": "ru_starter_describing_058",
        "word": "возможный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Способный произойти.",
                "examples": [
                    "Возможно ли закончить к пятнице?"
                ]
            }
        ],
        "feminine": "возможная",
        "neuter": "возможное",
        "plural": "возможные",
        "subtext": "",
        "synonyms": [
            "как можно скорее",
            "это возможно",
            "сделать возможным"
        ],
        "comparative": "возможнее",
        "superlative": "самый возможный",
        "transcription": "/vazˈmoʐnɨj/"
    },
    {
        "id": "ru_starter_describing_059",
        "word": "невозможный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Неспособный произойти.",
                "examples": [
                    "Это невозможно."
                ]
            }
        ],
        "feminine": "невозможная",
        "neuter": "невозможное",
        "plural": "невозможные",
        "subtext": "практически невозможный",
        "synonyms": [
            "сделать невозможным"
        ],
        "comparative": "невозможнее",
        "superlative": "самый невозможный",
        "transcription": "/nʲivazˈmoʐnɨj/"
    },
    {
        "id": "ru_starter_describing_060",
        "word": "особенный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Отличный от обычного.",
                "examples": [
                    "У нее есть особенный талант."
                ]
            }
        ],
        "feminine": "особенная",
        "neuter": "особенное",
        "plural": "особенные",
        "subtext": "очень особенный",
        "synonyms": [
            "специальное предложение",
            "особый случай"
        ],
        "comparative": "особеннее",
        "superlative": "самый особенный"
    },
    {
        "id": "ru_starter_describing_061",
        "word": "популярный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нравящийся многим людям.",
                "examples": [
                    "Кафе очень популярное."
                ]
            }
        ],
        "feminine": "популярная",
        "neuter": "популярное",
        "plural": "популярные",
        "subtext": "очень популярный / популярный выбор / самый популярный",
        "comparative": "популярнее",
        "superlative": "самый популярный",
        "transcription": "/papulʲˈarnɨj/"
    },
    {
        "id": "ru_starter_describing_062",
        "word": "похожий",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Почти такой же.",
                "examples": [
                    "Наши подходы очень похожи."
                ]
            }
        ],
        "feminine": "похожая",
        "neuter": "похожее",
        "plural": "похожие",
        "subtext": "очень похожий",
        "synonyms": [
            "похож на",
            "похожие результаты"
        ],
        "comparative": "похожее",
        "superlative": "самый похожий",
        "transcription": "/paˈxoʐɨj/"
    },
    {
        "id": "ru_starter_describing_063",
        "word": "дружелюбный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Добрый и приятный.",
                "examples": [
                    "Новый менеджер очень дружелюбен."
                ]
            }
        ],
        "feminine": "дружелюбная",
        "neuter": "дружелюбное",
        "plural": "дружелюбные",
        "subtext": "очень дружелюбный",
        "synonyms": [
            "дружелюбное лицо",
            "дружелюбная атмосфера"
        ],
        "comparative": "дружелюбнее",
        "superlative": "самый дружелюбный",
        "transcription": "/druʐɨˈlʲubnɨj/"
    },
    {
        "id": "ru_starter_describing_064",
        "word": "добрый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Щедрый по отношению к другим.",
                "examples": [
                    "Она добра ко всем."
                ]
            }
        ],
        "feminine": "добрая",
        "neuter": "доброе",
        "plural": "добрые",
        "subtext": "очень добрый / любезно с вашей стороны / добрый человек",
        "comparative": "добрее",
        "superlative": "самый добрый",
        "transcription": "/ˈdobrɨj/"
    },
    {
        "id": "ru_starter_describing_065",
        "word": "смешной",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Заставляющий людей смеяться.",
                "examples": [
                    "У него весёлый характер."
                ]
            }
        ],
        "feminine": "смешная",
        "neuter": "смешное",
        "plural": "смешные",
        "subtext": "очень смешной",
        "synonyms": [
            "смешная история"
        ],
        "comparative": "более смешной",
        "superlative": "самый смешной",
        "transcription": "/smʲiˈʂnoj/"
    },
    {
        "id": "ru_starter_describing_066",
        "word": "умный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Интеллектуальный; быстро соображающий.",
                "examples": [
                    "Она умный переговорщик."
                ]
            }
        ],
        "feminine": "умная",
        "neuter": "умное",
        "plural": "умные",
        "subtext": "очень умный / достаточно умный",
        "synonyms": [
            "умная идея"
        ],
        "comparative": "умнее",
        "superlative": "самый умный",
        "transcription": "/ˈumnɨj/"
    },
    {
        "id": "ru_starter_describing_067",
        "word": "вежливый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ведущий себя уважительно.",
                "examples": [
                    "Он всегда вежлив."
                ]
            }
        ],
        "feminine": "вежливая",
        "neuter": "вежливое",
        "plural": "вежливые",
        "subtext": "очень вежливый / достаточно вежливый",
        "synonyms": [
            "вежливая просьба"
        ],
        "comparative": "вежливее",
        "superlative": "самый вежливый",
        "transcription": "/ˈvʲeʐlʲivɨj/"
    },
    {
        "id": "ru_starter_describing_068",
        "word": "грубый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Невежливый.",
                "examples": [
                    "Это письмо было довольно грубым."
                ]
            }
        ],
        "feminine": "грубая",
        "neuter": "грубое",
        "plural": "грубые",
        "subtext": "очень грубый / невероятно грубый / намеренно грубый",
        "comparative": "грубее",
        "superlative": "самый грубый",
        "transcription": "/ˈɡrubɨj/"
    },
    {
        "id": "ru_starter_describing_069",
        "word": "ленивый",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не желающий работать.",
                "examples": [
                    "Он ленив."
                ]
            }
        ],
        "feminine": "ленивая",
        "neuter": "ленивое",
        "plural": "ленивые",
        "subtext": "очень ленивый / ленивый подход / слишком ленивый",
        "comparative": "ленивее",
        "superlative": "самый ленивый",
        "transcription": "/lʲiˈnʲivɨj/"
    },
    {
        "id": "ru_starter_describing_070",
        "word": "честный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Говорящий правду.",
                "examples": [
                    "Она честна."
                ]
            }
        ],
        "feminine": "честная",
        "neuter": "честное",
        "plural": "честные",
        "subtext": "очень честный / предельно честный / совершенно честный",
        "comparative": "честнее",
        "superlative": "самый честный",
        "transcription": "/ˈtʃʲesnɨj/"
    },
    {
        "id": "ru_starter_describing_071",
        "word": "шумный",
        "lang": "ru",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Издающий много звуков; громкий.",
                "examples": [
                    "Офис открытого типа очень шумный."
                ]
            }
        ],
        "feminine": "шумная",
        "neuter": "шумное",
        "plural": "шумные",
        "subtext": "очень шумный / слишком шумный",
        "synonyms": [
            "шумная обстановка"
        ],
        "comparative": "шумнее",
        "superlative": "самый шумный",
        "transcription": "/ˈʂumnɨj/"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();