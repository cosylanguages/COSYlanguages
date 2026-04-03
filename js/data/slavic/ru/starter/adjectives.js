(function() {
    const data = [
    {
        "word": "высокий",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "короткий",
        "oppositeEmoji": "📏",
        "feminine": "высокая",
        "emoji": "🦒",
        "neuter": "высокое",
        "plural": "высокие",
        "definitions": [
            {
                "text": "Человек или предмет, имеющий большую высоту.",
                "examples": [
                    "Он очень высокий.",
                    "Это здание высокое."
                ]
            }
        ],
        "subtext": "высокий человек / достаточно высокий",
        "synonyms": ["высокое здание"],
        "comparative": "выше",
        "superlative": "самый высокий"
    },
    {
        "word": "короткий",
        "feminine": "короткая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "короткое",
        "plural": "короткие",
        "definitions": [
            {
                "text": "Человек или предмет небольшого роста или длины.",
                "examples": [
                    "Она невысокая.",
                    "Карандаш короткий."
                ]
            }
        ],
        "subtext": "слишком короткий",
        "synonyms": ["короткая поездка", "короткие волосы"],
        "comparative": "короче",
        "superlative": "самый короткий",
        "opposite": "высокий",
        "oppositeEmoji": "🗼"
    },
    {
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "feminine": "молодая",
        "neuter": "молодое",
        "plural": "молодые",
        "definitions": [
            {
                "text": "Живущий или существующий лишь короткое время.",
                "examples": [
                    "Он молодой человек."
                ]
            }
        ],
        "comparative": "моложе",
        "superlative": "самый молодой",
        "opposite": "старый",
        "oppositeEmoji": "👴",
        "subtext": "",
        "synonyms": ["молодой человек", "молодой специалист", "молод душой"],
        "word": "молодой"
    },
    {
        "word": "старый",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "молодой",
        "oppositeEmoji": "👶",
        "feminine": "старая",
        "emoji": "👴",
        "neuter": "старое",
        "plural": "старые",
        "definitions": [
            {
                "text": "Живущий или существующий долгое время.",
                "examples": [
                    "Это старая книга."
                ]
            }
        ],
        "subtext": "старый друг / очень старый",
        "synonyms": ["старые привычки"],
        "comparative": "старше",
        "superlative": "самый старый"
    },
    {
        "word": "солнечный",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий много солнечного света.",
                "examples": [
                    "Сегодня солнечный день."
                ]
            }
        ],
        "subtext": "солнечный день / солнечный период",
        "synonyms": ["солнечная погода"],
        "comparative": "более солнечный",
        "superlative": "самый солнечный",
        "feminine": "солнечная",
        "neuter": "солнечное",
        "plural": "солнечные"
    },
    {
        "word": "дождливый",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий много дождя.",
                "examples": [
                    "Сегодня дождливый день."
                ]
            }
        ],
        "subtext": "дождливый день",
        "synonyms": ["дождливая погода", "сезон дождей"],
        "comparative": "более дождливый",
        "superlative": "самый дождливый",
        "feminine": "дождливая",
        "neuter": "дождливое",
        "plural": "дождливые"
    },
    {
        "word": "горячий",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "холодный",
        "oppositeEmoji": "❄️",
        "subtext": "очень горячий / горячий напиток / слишком горячий",
        "synonyms": ["горячая погода"],
        "definitions": [
            {
                "text": "Имеющий высокую температуру.",
                "examples": [
                    "Кофе горячий."
                ]
            }
        ],
        "feminine": "горячая",
        "neuter": "горячее",
        "plural": "горячие",
        "comparative": "горячее",
        "superlative": "самый горячий"
    },
    {
        "word": "холодный",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "горячий",
        "oppositeEmoji": "🔥",
        "subtext": "очень холодный / холодный напиток",
        "synonyms": ["холодное утро", "холодная погода"],
        "definitions": [
            {
                "text": "Имеющий низкую температуру.",
                "examples": [
                    "Вода холодная."
                ]
            }
        ],
        "feminine": "холодная",
        "neuter": "холодное",
        "plural": "холодные",
        "comparative": "холоднее",
        "superlative": "самый холодный"
    },
    {
        "word": "обычный",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "особенный",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Нормальный или привычный; не особенный.",
                "examples": [
                    "Это был обычный день."
                ]
            }
        ],
        "subtext": "обычный день",
        "synonyms": ["обычная жизнь", "ничего обычного"],
        "comparative": "обычнее",
        "superlative": "самый обычный",
        "feminine": "обычная",
        "neuter": "обычное",
        "plural": "обычные"
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
        "neuter": "дешёвое",
        "plural": "дешёвые",
        "definitions": [
            {
                "text": "Стоящий мало денег; не дорогой.",
                "examples": [
                    "Этот кофе дешёвый."
                ]
            }
        ],
        "subtext": "дешёвый полет / очень дешёвый",
        "synonyms": ["дешёво и сердито"],
        "comparative": "дешевле",
        "superlative": "самый дешёвый"
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
        "neuter": "дорогое",
        "plural": "дорогие",
        "definitions": [
            {
                "text": "Стоящий много денег.",
                "examples": [
                    "Эта машина дорогая."
                ]
            }
        ],
        "subtext": "очень дорогой / дорогой вкус / слишком дорогой",
        "synonyms": ["дорогая машина"],
        "comparative": "дороже",
        "superlative": "самый дорогой"
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
        "neuter": "хорощее",
        "plural": "хорошие",
        "definitions": [
            {
                "text": "Высокого качества или приятный.",
                "examples": [
                    "Это хорошая работа."
                ]
            }
        ],
        "subtext": "хорошее соотношение цены и качества",
        "synonyms": ["хорошая идея", "удачи"],
        "comparative": "лучше",
        "superlative": "самый хороший"
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
        "neuter": "плохое",
        "plural": "плохие",
        "definitions": [
            {
                "text": "Не хороший; неприятный.",
                "examples": [
                    "Сегодня плохая погода."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["плохие новости", "неудача", "плохое решение"],
        "comparative": "хуже",
        "superlative": "самый плохой"
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
        "neuter": "большое",
        "plural": "большие",
        "definitions": [
            {
                "text": "Крупный по размеру или количеству.",
                "examples": [
                    "Это большой офис."
                ]
            }
        ],
        "subtext": "большой дом / достаточно большой",
        "synonyms": ["большая проблема"],
        "comparative": "больше",
        "superlative": "самый большой"
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
        "neuter": "маленькое",
        "plural": "маленькие",
        "definitions": [
            {
                "text": "Небольшой по размеру или количеству.",
                "examples": [
                    "У неё маленькая квартира."
                ]
            }
        ],
        "subtext": "слишком маленький",
        "synonyms": ["маленькая квартира", "маленькая зарплата"],
        "comparative": "меньше",
        "superlative": "самый маленький"
    },
    {
        "word": "лёгкий",
        "feminine": "лёгкая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "neuter": "лёгкое",
        "plural": "лёгкие",
        "definitions": [
            {
                "text": "Не сложный.",
                "examples": [
                    "Этот тест лёгкий."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["легко сделать", "легко и просто", "нелегко"],
        "comparative": "легче",
        "superlative": "самый лёгкий",
        "opposite": "трудный",
        "oppositeEmoji": "❌"
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
        "neuter": "трудное",
        "plural": "трудные",
        "definitions": [
            {
                "text": "Сложный для выполнения или понимания.",
                "examples": [
                    "Эта работа трудная."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["трудно сделать", "очень трудно", "находить это трудным"],
        "comparative": "труднее",
        "superlative": "самый трудный"
    },
    {
        "word": "счастливый",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "feminine": "счастливая",
        "neuter": "счастливое",
        "plural": "счастливые",
        "definitions": [
            {
                "text": "Испытывающий удовольствие или радость.",
                "examples": [
                    "Я сегодня счастлив."
                ]
            }
        ],
        "subtext": "счастливый день",
        "synonyms": ["чувствовать себя счастливым", "доволен чем-то"],
        "comparative": "счастливее",
        "superlative": "самый счастливый"
    },
    {
        "word": "усталый",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чувство потребности в отдыхе или сне.",
                "examples": [
                    "Я очень устал после работы."
                ]
            }
        ],
        "feminine": "усталая",
        "neuter": "усталое",
        "plural": "усталые",
        "subtext": "сонный, измотанный, чувствовать усталость / очень усталый",
        "synonyms": ["чувствовать усталость", "устать от чего-либо"],
        "comparative": "усталее",
        "superlative": "самый усталый"
    },
    {
        "word": "полный",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "неполный",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Содержащий столько, сколько возможно.",
                "examples": [
                    "Я чувствую себя полным (сытым) после еды."
                ]
            }
        ],
        "subtext": "полный рабочий день / полный день",
        "synonyms": ["полон людей"],
        "comparative": null,
        "superlative": null,
        "feminine": "полная",
        "neuter": "полное",
        "plural": "полные"
    },
    {
        "word": "неполный",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "полный",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Работающий меньшее количество часов, чем стандартная рабочая неделя.",
                "examples": [
                    "Он работает неполный рабочий день по субботам."
                ]
            }
        ],
        "subtext": "неполный рабочий день",
        "synonyms": ["работа на полставки", "студент-заочник"],
        "comparative": null,
        "superlative": null,
        "feminine": "неполная",
        "neuter": "неполное",
        "plural": "неполные"
    },
    {
        "word": "чистый",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "грязный",
        "oppositeEmoji": "💩",
        "subtext": "",
        "synonyms": ["чистая одежда", "чистая комната", "содержать в чистоте"],
        "definitions": [
            {
                "text": "Свободный от грязи.",
                "examples": [
                    "Кухня теперь чистая."
                ]
            }
        ],
        "feminine": "чистая",
        "neuter": "чистое",
        "plural": "чистые",
        "comparative": "чище",
        "superlative": "самый чистый"
    },
    {
        "word": "здоровый",
        "level": "starter",
        "theme": "basic_foods_A1",
        "form": "adjective",
        "feminine": "здоровая",
        "neuter": "здоровое",
        "plural": "здоровые",
        "definitions": [
            {
                "text": "В хорошем состоянии здоровья; не больной.",
                "examples": [
                    "Овощи — это здоровая еда."
                ]
            }
        ],
        "subtext": "вести здоровый образ жизни",
        "synonyms": ["здоровое питание"],
        "comparative": "здоровее",
        "superlative": "самый здоровый",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔"
    },
    {
        "word": "больной",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "feminine": "больная",
        "neuter": "больное",
        "plural": "больные",
        "definitions": [
            {
                "text": "Не здоровый; приболевший.",
                "examples": [
                    "Я чувствую себя больным сегодня."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["чувствовать себя больным", "заболеть"],
        "comparative": "более больной",
        "superlative": "самый больной",
        "opposite": "well",
        "oppositeEmoji": "💪"
    },
    {
        "word": "онлайн",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Использующий интернет.",
                "examples": [
                    "Я иногда покупаю еду онлайн."
                ]
            }
        ],
        "subtext": "онлайн-покупки / онлайн-курс / оставаться онлайн",
        "comparative": "более онлайн",
        "superlative": "самый онлайн",
        "feminine": "онлайн",
        "neuter": "онлайн",
        "plural": "онлайн"
    },
    {
        "word": "одинокий",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
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
        ],
        "subtext": "",
        "synonyms": ["жить одному", "путешествовать одному", "чувствовать себя одиноким"],
        "comparative": "более одинокий",
        "superlative": "самый одинокий",
        "feminine": "одинокая",
        "neuter": "одинокое",
        "plural": "одинокие"
    },
    {
        "word": "расслабленный",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "feminine": "расслабленная",
        "neuter": "расслабленное",
        "plural": "расслабленные",
        "definitions": [
            {
                "text": "Спокойный; не беспокоящийся и не напряжённый.",
                "examples": [
                    "Я чувствую себя расслабленно в выходные."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["чувствовать себя расслабленным", "спокойная атмосфера"],
        "comparative": "расслабленнее",
        "superlative": "самый расслабленный",
        "opposite": "напряжённый",
        "oppositeEmoji": "😫"
    },
    {
        "word": "обеспокоенный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "обеспокоенная",
        "neuter": "обеспокоенное",
        "plural": "обеспокоенные",
        "definitions": [
            {
                "text": "Испытывающий тревогу из-за того, что может случиться.",
                "examples": [
                    "Она беспокоится о своей работе."
                ]
            }
        ],
        "subtext": "обеспокоенный вид",
        "synonyms": ["беспокоиться о работе"],
        "comparative": "обеспокоеннее",
        "superlative": "самый обеспокоенный",
        "opposite": "calm",
        "oppositeEmoji": "😌"
    },
    {
        "word": "занятой",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий много дел.",
                "examples": [
                    "Я очень занят на этой неделе."
                ]
            }
        ],
        "feminine": "занятая",
        "neuter": "занятое",
        "plural": "занятые",
        "subtext": "занятой день",
        "synonyms": ["плотный график", "очень занят"],
        "comparative": "более занятой",
        "superlative": "самый занятой"
    },
    {
        "word": "полезный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "полезная",
        "neuter": "полезное",
        "plural": "полезные",
        "definitions": [
            {
                "text": "Помогающий вам что-то сделать; пригодный.",
                "examples": [
                    "Персонал очень полезен."
                ]
            }
        ],
        "subtext": "полезный совет / очень полезный",
        "comparative": "полезнее",
        "superlative": "самый полезный",
        "opposite": "бесполезный",
        "oppositeEmoji": "🗑️"
    },
    {
        "word": "важный",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "очень важный / самый важный",
        "synonyms": ["важная встреча"],
        "definitions": [
            {
                "text": "Имеющий большую ценность или влияние.",
                "examples": [
                    "Сон очень важен."
                ]
            }
        ],
        "feminine": "важная",
        "neuter": "важное",
        "plural": "важные",
        "comparative": "важнее",
        "superlative": "самый важный"
    },
    {
        "word": "красный",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "красный свет",
        "synonyms": ["красное вино", "красное лицо"],
        "definitions": [
            {
                "text": "Имеющий цвет крови.",
                "examples": [
                    "У нее красная сумка."
                ]
            }
        ],
        "feminine": "красная",
        "neuter": "красное",
        "plural": "красные",
        "comparative": "краснее",
        "superlative": "самый красный"
    },
    {
        "word": "синий",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "темно-синий / светло-синий",
        "synonyms": ["синее небо"],
        "definitions": [
            {
                "text": "Имеющий цвет ясного неба.",
                "examples": [
                    "Его машина синяя."
                ]
            }
        ],
        "feminine": "синяя",
        "neuter": "синее",
        "plural": "синие",
        "comparative": "синее",
        "superlative": "самый синий"
    },
    {
        "word": "зелёный",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "ярко-зелёный",
        "synonyms": ["зелёная энергия", "зелёное пространство"],
        "definitions": [
            {
                "text": "Имеющий цвет травы или листьев.",
                "examples": [
                    "Она носит зеленое платье."
                ]
            }
        ],
        "feminine": "зелёная",
        "neuter": "зелёное",
        "plural": "зелёные",
        "comparative": "зелёнее",
        "superlative": "самый зелёный"
    },
    {
        "word": "белый",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "почти белый / ярко-белый",
        "synonyms": ["белое вино"],
        "definitions": [
            {
                "text": "Имеющий цвет снега или молока.",
                "examples": [
                    "Стены белые."
                ]
            }
        ],
        "feminine": "белая",
        "neuter": "белое",
        "plural": "белые",
        "comparative": "белее",
        "superlative": "самый белый"
    },
    {
        "word": "чёрный",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "чёрный кофе / чёрный рынок / иссиня-чёрный",
        "definitions": [
            {
                "text": "Имеющий самый темный цвет.",
                "examples": [
                    "Он носит черное пальто."
                ]
            }
        ],
        "feminine": "чёрная",
        "neuter": "чёрное",
        "plural": "чёрные",
        "comparative": "чёрнее",
        "superlative": "самый чёрный"
    },
    {
        "word": "жёлтый",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "жёлтый свет / бледно-жёлтый / ярко-жёлтый",
        "definitions": [
            {
                "text": "Имеющий цвет солнца или лимона.",
                "examples": [
                    "У нее желтый зонт."
                ]
            }
        ],
        "feminine": "жёлтая",
        "neuter": "жёлтое",
        "plural": "жёлтые",
        "comparative": "жёлтее",
        "superlative": "самый жёлтый"
    },
    {
        "word": "свободный",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["даром", "в подарок"],
        "definitions": [
            {
                "text": "Который не стоит денег.",
                "examples": [
                    "Музей бесплатный по воскресеньям."
                ]
            }
        ],
        "feminine": "свободная",
        "neuter": "свободное",
        "plural": "свободные",
        "comparative": "свободнее",
        "superlative": "самый свободный"
    },
    {
        "word": "открытый",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "закрытый",
        "oppositeEmoji": "🔒",
        "subtext": "",
        "synonyms": ["открытая дверь", "открыт для идей", "широко открыт"],
        "definitions": [
            {
                "text": "Не закрытый.",
                "examples": [
                    "Магазин открыт до восьми."
                ]
            }
        ],
        "feminine": "открытая",
        "neuter": "открытое",
        "plural": "открытые",
        "comparative": "открытее",
        "superlative": "самый открытый"
    },
    {
        "word": "закрытый",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "открытый",
        "oppositeEmoji": "📖",
        "subtext": "",
        "synonyms": ["закрыт на обед", "ограниченный ум", "закрытая дверь"],
        "definitions": [
            {
                "text": "Не открытый.",
                "examples": [
                    "Офис закрыт в выходные."
                ]
            }
        ],
        "feminine": "закрытая",
        "neuter": "закрытое",
        "plural": "закрытые",
        "comparative": "закрытее",
        "superlative": "самый закрытый"
    },
    {
        "word": "крупный",
        "feminine": "крупная",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "крупное",
        "plural": "крупные",
        "definitions": [
            {
                "text": "Больше среднего размера.",
                "examples": [
                    "Париж — очень крупный город."
                ]
            }
        ],
        "subtext": "крупный город",
        "synonyms": ["крупная компания", "крупная сумма"],
        "comparative": "крупнее",
        "superlative": "самый крупный"
    },
    {
        "word": "небольшой",
        "feminine": "небольшая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "небольшое",
        "plural": "небольшие",
        "definitions": [
            {
                "text": "Маленький по размеру; небольшое количество.",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["чуть-чуть", "немного денег", "слишком мало"],
        "comparative": "более небольшой",
        "superlative": "самый небольшой"
    },
    {
        "word": "длинный",
        "feminine": "длинная",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "длинное",
        "plural": "длинные",
        "definitions": [
            {
                "text": "Имеющий большую длину.",
                "examples": [
                    "У нее длинная дорога на работу каждый день."
                ]
            }
        ],
        "subtext": "длинный день",
        "synonyms": ["длинное путешествие", "долгое время"],
        "comparative": "длиннее",
        "superlative": "самый длинный"
    },
    {
        "word": "высокий",
        "feminine": "высокая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📈",
        "form": "adjective",
        "neuter": "высокое",
        "plural": "высокие",
        "definitions": [
            {
                "text": "Человек или предмет, имеющий большую высоту.",
                "examples": [
                    "Он очень высокий.",
                    "Это здание высокое."
                ]
            }
        ],
        "subtext": "высокий человек / достаточно высокий",
        "synonyms": ["высокое здание"],
        "comparative": "выше",
        "superlative": "самый высокий"
    },
    {
        "word": "низкий",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "feminine": "низкая",
        "emoji": "📉",
        "neuter": "низкое",
        "plural": "низкие",
        "definitions": [
            {
                "text": "Ниже среднего уровня.",
                "examples": [
                    "Зарплата слишком низкая."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["низкая цена", "низкая зарплата", "низкое качество"],
        "comparative": "ниже",
        "superlative": "самый низкий"
    },
    {
        "word": "полный",
        "feminine": "полная",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🥛",
        "form": "adjective",
        "neuter": "полное",
        "plural": "полные",
        "definitions": [
            {
                "text": "Содержащий столько, сколько возможно.",
                "examples": [
                    "Я чувствую себя полным (сытым) после еды."
                ]
            }
        ],
        "subtext": "полный рабочий день / полный день",
        "synonyms": ["полон людей"],
        "comparative": null,
        "superlative": null
    },
    {
        "word": "пустой",
        "feminine": "пустая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🫙",
        "form": "adjective",
        "neuter": "пустое",
        "plural": "пустые",
        "definitions": [
            {
                "text": "Ничего не содержащий.",
                "examples": [
                    "Офис пуст в выходные."
                ]
            }
        ],
        "subtext": "почти пустой",
        "synonyms": ["пустая квартира", "пустая комната"],
        "comparative": "более пустой",
        "superlative": "самый пустой"
    },
    {
        "word": "тёплый",
        "feminine": "тёплая",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "neuter": "тёплое",
        "plural": "тёплые",
        "definitions": [
            {
                "text": "Слегка горячий.",
                "examples": [
                    "В офисе тепло и уютно."
                ]
            }
        ],
        "subtext": "тёплый прием",
        "synonyms": ["тёплая погода", "держать в тепле"],
        "comparative": "тёплее",
        "superlative": "самый тёплый"
    },
    {
        "word": "прохладный",
        "feminine": "прохладная",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌬️",
        "form": "adjective",
        "neuter": "прохладное",
        "plural": "прохладные",
        "definitions": [
            {
                "text": "Слегка холодный.",
                "examples": [
                    "Она предпочитает прохладную погоду для работы."
                ]
            }
        ],
        "subtext": "прохладный напиток",
        "synonyms": ["прохладная погода", "сохранять прохладу"],
        "comparative": "прохладнее",
        "superlative": "самый прохладный"
    },
    {
        "word": "мокрый",
        "feminine": "мокрая",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🚿",
        "form": "adjective",
        "neuter": "мокрое",
        "plural": "мокрые",
        "definitions": [
            {
                "text": "Покрытый водой.",
                "examples": [
                    "Его куртка мокрая от дождя."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["мокрая погода", "мокрая одежда", "промокнуть"],
        "comparative": "мокрее",
        "superlative": "самый мокрый"
    },
    {
        "word": "сухой",
        "feminine": "сухая",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🏜️",
        "form": "adjective",
        "neuter": "сухое",
        "plural": "сухие",
        "definitions": [
            {
                "text": "Без воды или влаги.",
                "examples": [
                    "Кладовая должна оставаться сухой."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["сухая погода", "сухая кожа", "оставаться сухим"],
        "comparative": "более сухой",
        "superlative": "самый сухой"
    },
    {
        "word": "грязный",
        "feminine": "грязная",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "💩",
        "form": "adjective",
        "neuter": "грязное",
        "plural": "грязные",
        "definitions": [
            {
                "text": "Покрытый грязью.",
                "examples": [
                    "Его руки грязные."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["грязные руки", "грязная одежда", "испачкаться"],
        "comparative": "грязнее",
        "superlative": "самый грязный"
    },
    {
        "word": "твёрдый",
        "feminine": "твёрдая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🧱",
        "form": "adjective",
        "neuter": "твёрдое",
        "plural": "твёрдые",
        "definitions": [
            {
                "text": "Не мягкий; сложный.",
                "examples": [
                    "Стул очень твёрдый."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["тяжелая работа", "трудное решение", "слишком твердый"],
        "comparative": "твёрдее",
        "superlative": "самый твёрдый"
    },
    {
        "word": "мягкий",
        "feminine": "мягкая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "☁️",
        "form": "adjective",
        "neuter": "мягкое",
        "plural": "мягкие",
        "definitions": [
            {
                "text": "Не твёрдый.",
                "examples": [
                    "Диван очень мягкий."
                ]
            }
        ],
        "subtext": "мягкий свет",
        "synonyms": ["мягкая музыка", "мягкие навыки"],
        "comparative": "мягкее",
        "superlative": "самый мягкий"
    },
    {
        "word": "тяжёлый",
        "feminine": "тяжёлая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🏋️",
        "form": "adjective",
        "neuter": "тяжёлое",
        "plural": "тяжёлые",
        "definitions": [
            {
                "text": "Имеющий большой вес.",
                "examples": [
                    "Сумка очень тяжёлая."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["интенсивное движение", "сильный дождь", "слишком тяжелый"],
        "comparative": "тяжёлее",
        "superlative": "самый тяжёлый"
    },
    {
        "word": "лёгкий",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🪶",
        "form": "adjective",
        "feminine": "лёгкая",
        "neuter": "лёгкое",
        "plural": "лёгкие",
        "definitions": [
            {
                "text": "Не сложный.",
                "examples": [
                    "Этот тест лёгкий."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["легко сделать", "легко и просто", "нелегко"],
        "comparative": "легче",
        "superlative": "самый лёгкий"
    },
    {
        "word": "коричневый",
        "feminine": "коричневая",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟫",
        "form": "adjective",
        "neuter": "коричневое",
        "plural": "коричневые",
        "definitions": [
            {
                "text": "Цвета дерева или земли.",
                "examples": [
                    "У нее карие (коричневые) глаза."
                ]
            }
        ],
        "subtext": "тёмно-коричневый / светло-коричневый / коричневый хлеб",
        "comparative": "коричневее",
        "superlative": "самый коричневый"
    },
    {
        "word": "серый",
        "feminine": "серая",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩶",
        "form": "adjective",
        "neuter": "серое",
        "plural": "серые",
        "definitions": [
            {
                "text": "Цвета между черным и белым.",
                "examples": [
                    "У него седые (серые) волосы."
                ]
            }
        ],
        "subtext": "бледно-серый",
        "synonyms": ["серая зона", "серое небо"],
        "comparative": "серее",
        "superlative": "самый серый"
    },
    {
        "word": "розовый",
        "feminine": "розовая",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩷",
        "form": "adjective",
        "neuter": "розовое",
        "plural": "розовые",
        "definitions": [
            {
                "text": "Бледно-красный цвет.",
                "examples": [
                    "Она предпочитает розовый красному."
                ]
            }
        ],
        "subtext": "светло-розовый / ярко-розовый / насыщенный розовый",
        "comparative": "розовее",
        "superlative": "самый розовый"
    },
    {
        "word": "оранжевый",
        "feminine": "оранжевая",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟧",
        "form": "adjective",
        "neuter": "оранжевое",
        "plural": "оранжевые",
        "definitions": [
            {
                "text": "Цвета апельсина.",
                "examples": [
                    "Он купил оранжевую куртку."
                ]
            }
        ],
        "subtext": "ярко-оранжевый / тёмно-оранжевый / оранжевый свет",
        "comparative": "оранжевее",
        "superlative": "самый оранжевый"
    },
    {
        "word": "великолепный",
        "feminine": "великолепная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌟",
        "form": "adjective",
        "neuter": "великолепное",
        "plural": "великолепные",
        "definitions": [
            {
                "text": "Чрезвычайно хороший.",
                "examples": [
                    "Она великолепный менеджер."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["отличная идея", "отличная возможность", "высокая ценность"],
        "comparative": "великолепнее",
        "superlative": "самый великолепный"
    },
    {
        "word": "приятный",
        "feminine": "приятная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😊",
        "form": "adjective",
        "neuter": "приятное",
        "plural": "приятные",
        "definitions": [
            {
                "text": "Приятный или добрый.",
                "examples": [
                    "Новый офис очень приятный."
                ]
            }
        ],
        "subtext": "приятный человек",
        "synonyms": ["хороший день", "хорошее место"],
        "comparative": "приятнее",
        "superlative": "самый приятный"
    },
    {
        "word": "замечательный",
        "feminine": "замечательная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✨",
        "form": "adjective",
        "neuter": "замечательное",
        "plural": "замечательные",
        "definitions": [
            {
                "text": "Чрезвычайно хороший; вызывающий восторг.",
                "examples": [
                    "У них была замечательная команда."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["замечательная возможность", "замечательное время"],
        "comparative": "замечательнее",
        "superlative": "самый замечательный"
    },
    {
        "word": "ужасный",
        "feminine": "ужасная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😫",
        "form": "adjective",
        "neuter": "ужасное",
        "plural": "ужасные",
        "definitions": [
            {
                "text": "Очень плохой или неприятный.",
                "examples": [
                    "Шум в офисе ужасный."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["ужасная погода", "ужасная ошибка", "ужасные новости"],
        "comparative": "ужаснее",
        "superlative": "самый ужасный"
    },
    {
        "word": "отвратительный",
        "feminine": "отвратительная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤮",
        "form": "adjective",
        "neuter": "отвратительное",
        "plural": "отвратительные",
        "definitions": [
            {
                "text": "Очень плохой или неприятный.",
                "examples": [
                    "Шум в открытом офисе ужасен."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["ужасная погода", "ужасные новости", "просто ужасно"],
        "comparative": "отвратительнее",
        "superlative": "самый отвратительный"
    },
    {
        "word": "удивительный",
        "feminine": "удивительная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😲",
        "form": "adjective",
        "neuter": "удивительное",
        "plural": "удивительные",
        "definitions": [
            {
                "text": "Вызывающий большое удивление или восхищение.",
                "examples": [
                    "She gave an amazing presentation."
                ]
            }
        ],
        "subtext": "удивительный результат",
        "synonyms": ["удивительное предложение", "действительно удивительно"],
        "comparative": "удивительнее",
        "superlative": "самый удивительный"
    },
    {
        "word": "фантастический",
        "feminine": "фантастическая",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤩",
        "form": "adjective",
        "neuter": "фантастическое",
        "plural": "фантастические",
        "definitions": [
            {
                "text": "Чрезвычайно хороший.",
                "examples": [
                    "Новая система работает фантастически."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["фантастические новости", "фантастическая возможность"],
        "comparative": "фантастическее",
        "superlative": "самый фантастический"
    },
    {
        "word": "грустный",
        "feminine": "грустная",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😢",
        "form": "adjective",
        "neuter": "грустное",
        "plural": "грустные",
        "definitions": [
            {
                "text": "Чувствующий несчастье.",
                "examples": [
                    "Ему было грустно покидать компанию."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["грустная ситуация", "глубоко грустно"],
        "comparative": "грустнее",
        "superlative": "самый грустный"
    },
    {
        "word": "голодный",
        "feminine": "голодная",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🤤",
        "form": "adjective",
        "neuter": "голодное",
        "plural": "голодные",
        "definitions": [
            {
                "text": "Нуждающийся в еде.",
                "examples": [
                    "Я голоден."
                ]
            }
        ],
        "subtext": "очень голодный",
        "synonyms": ["остаться голодным"],
        "comparative": "голоднее",
        "superlative": "самый голодный"
    },
    {
        "word": "сердитый",
        "feminine": "сердитая",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😠",
        "form": "adjective",
        "neuter": "сердитое",
        "plural": "сердитые",
        "definitions": [
            {
                "text": "Чувствующий сильное недовольство.",
                "examples": [
                    "Она была сердита на решение."
                ]
            }
        ],
        "subtext": "очень сердитый",
        "synonyms": ["злиться на кого-то"],
        "comparative": "сердитее",
        "superlative": "самый сердитый"
    },
    {
        "word": "скучающий",
        "feminine": "скучающая",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😐",
        "form": "adjective",
        "neuter": "скучающее",
        "plural": "скучающие",
        "definitions": [
            {
                "text": "Чувствующий отсутствие интереса.",
                "examples": [
                    "Ему скучно на длинных совещаниях."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["скучно на", "легко наскучивает"],
        "comparative": "скучающее",
        "superlative": "самый скучающий"
    },
    {
        "word": "взволнованный",
        "feminine": "взволнованная",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤩",
        "form": "adjective",
        "neuter": "взволнованное",
        "plural": "взволнованные",
        "definitions": [
            {
                "text": "Чувствующий энтузиазм и нетерпение.",
                "examples": [
                    "Она взволнована своей новой работой."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["взволнован чем-то", "очень взволнован"],
        "comparative": "взволнованнее",
        "superlative": "самый взволнованный"
    },
    {
        "word": "испуганный",
        "feminine": "испуганная",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😨",
        "form": "adjective",
        "neuter": "испуганное",
        "plural": "испуганные",
        "definitions": [
            {
                "text": "Чувствующий страх.",
                "examples": [
                    "Он боится совершить ошибку."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["бояться чего-то", "глубоко испуган"],
        "comparative": "испуганнее",
        "superlative": "самый испуганный"
    },
    {
        "word": "огорчённый",
        "feminine": "огорчённая",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🥺",
        "form": "adjective",
        "neuter": "огорчённое",
        "plural": "огорчённые",
        "definitions": [
            {
                "text": "Чувство сожаления или печали.",
                "examples": [
                    "Она извиняется за задержку."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["сожалеть", "жаль кого-то", "извиняться за"],
        "comparative": "огорчённее",
        "superlative": "самый огорчённый"
    },
    {
        "word": "правильный",
        "feminine": "правильная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "neuter": "правильное",
        "plural": "правильные",
        "definitions": [
            {
                "text": "Верный; подходящий.",
                "examples": [
                    "Это правильный офис?"
                ]
            }
        ],
        "subtext": "правильный ответ",
        "synonyms": ["правильное время", "абсолютно верно"],
        "comparative": "правильнее",
        "superlative": "самый правильный"
    },
    {
        "word": "неправильный",
        "feminine": "неправильная",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❌",
        "form": "adjective",
        "neuter": "неправильное",
        "plural": "неправильные",
        "definitions": [
            {
                "text": "Имеющий ошибку.",
                "examples": [
                    "Это был неправильный выбор."
                ]
            }
        ],
        "subtext": "неправильный ответ",
        "synonyms": ["пойти не так", "совершенно неправильно"],
        "comparative": "неправильнее",
        "superlative": "самый неправильный"
    },
    {
        "word": "новый",
        "feminine": "новая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🆕",
        "form": "adjective",
        "neuter": "новое",
        "plural": "новые",
        "definitions": [
            {
                "text": "Существующий недавно.",
                "examples": [
                    "У меня новый компьютер."
                ]
            }
        ],
        "subtext": "совершенно новый",
        "synonyms": ["новая работа"],
        "comparative": "новее",
        "superlative": "самый новый"
    },
    {
        "word": "другой",
        "feminine": "другая",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "↔️",
        "form": "adjective",
        "neuter": "другое",
        "plural": "другие",
        "definitions": [
            {
                "text": "Не такой же.",
                "examples": [
                    "У нас разные мнения по этому вопросу."
                ]
            }
        ],
        "subtext": "совершенно другой",
        "synonyms": ["очень разный", "отличный от"],
        "comparative": "более другой",
        "superlative": "самый другой"
    },
    {
        "word": "одинаковый",
        "feminine": "одинаковая",
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
                    "Они получают одинаковую зарплату."
                ]
            }
        ],
        "subtext": "в то же время",
        "synonyms": ["такой же", "как", "точно такой же"],
        "comparative": null,
        "superlative": null
    },
    {
        "word": "быстрый",
        "feminine": "быстрая",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⚡",
        "form": "adjective",
        "neuter": "быстрое",
        "plural": "быстрые",
        "definitions": [
            {
                "text": "Двигающийся с большой скоростью.",
                "examples": [
                    "Поезд быстрый."
                ]
            }
        ],
        "subtext": "очень быстрый",
        "synonyms": ["фастфуд", "скорый поезд"],
        "comparative": "быстрее",
        "superlative": "самый быстрый"
    },
    {
        "word": "медленный",
        "feminine": "медленная",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐢",
        "form": "adjective",
        "neuter": "медленное",
        "plural": "медленные",
        "definitions": [
            {
                "text": "Не быстрый.",
                "examples": [
                    "Новая система очень медленная."
                ]
            }
        ],
        "subtext": "медленный прогресс / медленный интернет / очень медленный",
        "comparative": "медленнее",
        "superlative": "самый медленный"
    },
    {
        "word": "тихий",
        "feminine": "тихая",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤫",
        "form": "adjective",
        "neuter": "тихое",
        "plural": "тихие",
        "definitions": [
            {
                "text": "Издающий мало шума или не издающий его вовсе.",
                "examples": [
                    "В офисе тихо в обед."
                ]
            }
        ],
        "subtext": "тихий район",
        "synonyms": ["вести себя тихо", "мило и тихо"],
        "comparative": "тише",
        "superlative": "самый тихий"
    },
    {
        "word": "громкий",
        "feminine": "громкая",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🔊",
        "form": "adjective",
        "neuter": "громкое",
        "plural": "громкие",
        "definitions": [
            {
                "text": "Издающий много шума.",
                "examples": [
                    "В офисе слишком громко."
                ]
            }
        ],
        "subtext": "громкий шум / громкий голос",
        "synonyms": ["слишком громко"],
        "comparative": "громче",
        "superlative": "самый громкий"
    },
    {
        "word": "безопасный",
        "feminine": "безопасная",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛡️",
        "form": "adjective",
        "neuter": "безопасное",
        "plural": "безопасные",
        "definitions": [
            {
                "text": "Не опасный.",
                "examples": [
                    "Этот район очень безопасный."
                ]
            }
        ],
        "subtext": "безопасный район / чувствовать себя в безопасности",
        "synonyms": ["безопасно делать"],
        "comparative": "безопаснее",
        "superlative": "самый безопасный"
    },
    {
        "word": "опасный",
        "feminine": "опасная",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "⚠️",
        "form": "adjective",
        "neuter": "опасное",
        "plural": "опасные",
        "definitions": [
            {
                "text": "Способный причинить вред.",
                "examples": [
                    "Эта дорога опасна."
                ]
            }
        ],
        "subtext": "очень опасный / потенциально опасный",
        "synonyms": ["опасная ситуация"],
        "comparative": "опаснее",
        "superlative": "самый опасный"
    },
    {
        "word": "несчастный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "несчастная",
        "neuter": "несчастное",
        "plural": "несчастные",
        "definitions": [
            {
                "text": "Не чувствующий себя довольным; неудовлетворенный.",
                "examples": [
                    "Он несчастлив из-за своей текущей зарплаты."
                ]
            }
        ],
        "subtext": "очень несчастный",
        "synonyms": ["недоволен чем-то"],
        "comparative": "несчастнее",
        "superlative": "самый несчастный"
    },
    {
        "word": "нервный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "нервная",
        "neuter": "нервное",
        "plural": "нервные",
        "definitions": [
            {
                "text": "Чувствующий тревогу.",
                "examples": [
                    "Он нервничал перед собеседованием."
                ]
            }
        ],
        "subtext": "очень нервный",
        "synonyms": ["нервничать из-за"],
        "comparative": "нервнее",
        "superlative": "самый нервный"
    },
    {
        "word": "напряжённый",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "напряжённая",
        "neuter": "напряжённое",
        "plural": "напряжённые",
        "definitions": [
            {
                "text": "Чувствующий беспокойство и напряжение от давления.",
                "examples": [
                    "Она чувствует стресс перед каждым дедлайном."
                ]
            }
        ],
        "subtext": "очень напряжённый",
        "synonyms": ["чувствовать стресс", "измотанный"],
        "comparative": "напряжённее",
        "superlative": "самый напряжённый"
    },
    {
        "word": "уверенный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "уверенная",
        "neuter": "уверенное",
        "plural": "уверенные",
        "definitions": [
            {
                "text": "Уверенный в своих способностях.",
                "examples": [
                    "Она очень уверена в себе."
                ]
            }
        ],
        "subtext": "уверенный в себе / очень уверенный",
        "synonyms": ["чувствовать себя уверенно"],
        "comparative": "увереннее",
        "superlative": "самый уверенный"
    },
    {
        "word": "гордый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "гордая",
        "neuter": "гордое",
        "plural": "гордые",
        "definitions": [
            {
                "text": "Чувствующий удовлетворение от достижений.",
                "examples": [
                    "Он гордился своим повышением."
                ]
            }
        ],
        "subtext": "очень гордый",
        "synonyms": ["чувствовать гордость", "гордиться чем-то"],
        "comparative": "гордее",
        "superlative": "самый гордый"
    },
    {
        "word": "напуганный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "напуганная",
        "neuter": "напуганное",
        "plural": "напуганные",
        "definitions": [
            {
                "text": "Испытывающий страх.",
                "examples": [
                    "Ей было страшно."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["испуган чем-то", "очень напуган"],
        "comparative": "напуганнее",
        "superlative": "самый напуганный"
    },
    {
        "word": "удивлённый",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "feminine": "удивлённая",
        "neuter": "удивлённое",
        "plural": "удивлённые",
        "definitions": [
            {
                "text": "Чувствующий шок от чего-то неожиданного.",
                "examples": [
                    "Он был удивлен."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["очень удивлён", "приятно удивлён"],
        "comparative": "удивлённее",
        "superlative": "самый удивлённый"
    },
    {
        "word": "разочарованный",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "разочарованная",
        "neuter": "разочарованное",
        "plural": "разочарованные",
        "definitions": [
            {
                "text": "Чувствующий грусть, потому что что-то оказалось не таким хорошим, как ожидалось.",
                "examples": [
                    "Она была разочарована."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["глубоко разочарован", "разочарован чем-то"],
        "comparative": "разочарованнее",
        "superlative": "самый разочарованный"
    },
    {
        "word": "красивый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "красивая",
        "neuter": "красивое",
        "plural": "красивые",
        "definitions": [
            {
                "text": "Приятный на вид.",
                "examples": [
                    "Вид из офиса красивый."
                ]
            }
        ],
        "subtext": "красивый вид / красивый город / абсолютно красивый",
        "comparative": "красивее",
        "superlative": "самый красивый"
    },
    {
        "word": "симпатичный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "симпатичная",
        "neuter": "симпатичное",
        "plural": "симпатичные",
        "definitions": [
            {
                "text": "Pleasant to look at; quite attractive.",
                "examples": [
                    "Новая переговорная очень красивая."
                ]
            }
        ],
        "subtext": "довольно симпатичный",
        "synonyms": ["довольно хороший", "симпатичное место"],
        "comparative": "симпатичнее",
        "superlative": "самый симпатичный"
    },
    {
        "word": "сильный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "сильная",
        "neuter": "сильное",
        "plural": "сильные",
        "definitions": [
            {
                "text": "Имеющий большую физическую или умственную силу.",
                "examples": [
                    "Она сильный лидер."
                ]
            }
        ],
        "subtext": "очень сильный",
        "synonyms": ["крепкий кофе", "сильное мнение"],
        "comparative": "сильнее",
        "superlative": "самый сильный"
    },
    {
        "word": "слабый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "слабая",
        "neuter": "слабое",
        "plural": "слабые",
        "definitions": [
            {
                "text": "Не имеющий силы.",
                "examples": [
                    "Сигнал слабый."
                ]
            }
        ],
        "subtext": "слабый аргумент / очень слабый",
        "synonyms": ["слабое соединение"],
        "comparative": "слабее",
        "superlative": "самый слабый"
    },
    {
        "word": "спортивный",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "feminine": "спортивная",
        "neuter": "спортивное",
        "plural": "спортивные",
        "definitions": [
            {
                "text": "В хорошей физической форме благодаря упражнениям.",
                "examples": [
                    "Она поддерживает форму, катаясь на велосипеде на работу каждый день."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["физически здоров", "оставаться в форме", "поддерживать форму"],
        "comparative": "спортивнее",
        "superlative": "самый спортивный"
    },
    {
        "word": "отличный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "отличная",
        "neuter": "отличное",
        "plural": "отличные",
        "definitions": [
            {
                "text": "Чрезвычайно хороший; высокого стандарта.",
                "examples": [
                    "Она получила отличный отзыв."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["отличная работа", "отличные результаты", "абсолютно отлично"],
        "comparative": "отличнее",
        "superlative": "самый отличный"
    },
    {
        "word": "идеальный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "идеальная",
        "neuter": "идеальное",
        "plural": "идеальные",
        "definitions": [
            {
                "text": "Без каких-либо ошибок.",
                "examples": [
                    "Это идеальный день для путешествия."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["идеальная возможность", "идеальное время", "абсолютно идеально"],
        "comparative": "идеальнее",
        "superlative": "самый идеальный"
    },
    {
        "word": "бесполезный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "бесполезная",
        "neuter": "бесполезное",
        "plural": "бесполезные",
        "definitions": [
            {
                "text": "Не имеющий пользы.",
                "examples": [
                    "Это программное обеспечение бесполезно."
                ]
            }
        ],
        "subtext": "совершенно бесполезный",
        "synonyms": ["оказаться бесполезным", "бесполезная идея"],
        "comparative": "бесполезнее",
        "superlative": "самый бесполезный"
    },
    {
        "word": "верный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "верная",
        "neuter": "верное",
        "plural": "верные",
        "definitions": [
            {
                "text": "True or right; without errors.",
                "examples": [
                    "Пожалуйста, проверьте правильность цифр."
                ]
            }
        ],
        "subtext": "верный путь",
        "synonyms": ["правильный ответ", "совершенно верно"],
        "comparative": "вернее",
        "superlative": "самый верный"
    },
    {
        "word": "интересный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "интересная",
        "neuter": "интересное",
        "plural": "интересные",
        "definitions": [
            {
                "text": "Привлекающий внимание.",
                "examples": [
                    "Предложение очень интересное."
                ]
            }
        ],
        "subtext": "очень интересный",
        "synonyms": ["интересная идея"],
        "comparative": "интереснее",
        "superlative": "самый интересный"
    },
    {
        "word": "скучный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "скучная",
        "neuter": "скучное",
        "plural": "скучные",
        "definitions": [
            {
                "text": "Не интересный.",
                "examples": [
                    "Встреча была очень скучной."
                ]
            }
        ],
        "subtext": "очень скучный",
        "synonyms": ["скучная встреча"],
        "comparative": "скучнее",
        "superlative": "самый скучный"
    },
    {
        "word": "необходимый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "необходимая",
        "neuter": "необходимое",
        "plural": "необходимые",
        "definitions": [
            {
                "text": "Требуемый; обязательный.",
                "examples": [
                    "Хорошее интернет-соединение необходимо."
                ]
            }
        ],
        "subtext": "абсолютно необходимый",
        "synonyms": ["если необходимо", "необходимо сделать"],
        "comparative": "необходимее",
        "superlative": "самый необходимый"
    },
    {
        "word": "возможный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "возможная",
        "neuter": "возможное",
        "plural": "возможные",
        "definitions": [
            {
                "text": "Способный произойти.",
                "examples": [
                    "Возможно ли закончить к пятнице?"
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["как можно скорее", "это возможно", "сделать возможным"],
        "comparative": "возможнее",
        "superlative": "самый возможный"
    },
    {
        "word": "невозможный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "невозможная",
        "neuter": "невозможное",
        "plural": "невозможные",
        "definitions": [
            {
                "text": "Неспособный произойти.",
                "examples": [
                    "Это невозможно."
                ]
            }
        ],
        "subtext": "практически невозможный",
        "synonyms": ["сделать невозможным"],
        "comparative": "невозможнее",
        "superlative": "самый невозможный"
    },
    {
        "word": "особенный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "особенная",
        "neuter": "особенное",
        "plural": "особенные",
        "definitions": [
            {
                "text": "Отличный от обычного.",
                "examples": [
                    "У нее есть особенный талант."
                ]
            }
        ],
        "subtext": "очень особенный",
        "synonyms": ["специальное предложение", "особый случай"],
        "comparative": "особеннее",
        "superlative": "самый особенный"
    },
    {
        "word": "популярный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "популярная",
        "neuter": "популярное",
        "plural": "популярные",
        "definitions": [
            {
                "text": "Нравящийся многим людям.",
                "examples": [
                    "Кафе очень популярное."
                ]
            }
        ],
        "subtext": "очень популярный / популярный выбор / самый популярный",
        "comparative": "популярнее",
        "superlative": "самый популярный"
    },
    {
        "word": "похожий",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "похожая",
        "neuter": "похожее",
        "plural": "похожие",
        "definitions": [
            {
                "text": "Почти такой же.",
                "examples": [
                    "Наши подходы очень похожи."
                ]
            }
        ],
        "subtext": "очень похожий",
        "synonyms": ["похож на", "похожие результаты"],
        "comparative": "похожее",
        "superlative": "самый похожий"
    },
    {
        "word": "дружелюбный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "дружелюбная",
        "neuter": "дружелюбное",
        "plural": "дружелюбные",
        "definitions": [
            {
                "text": "Добрый и приятный.",
                "examples": [
                    "Новый менеджер очень дружелюбен."
                ]
            }
        ],
        "subtext": "очень дружелюбный",
        "synonyms": ["дружелюбное лицо", "дружелюбная атмосфера"],
        "comparative": "дружелюбнее",
        "superlative": "самый дружелюбный"
    },
    {
        "word": "добрый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "добрая",
        "neuter": "доброе",
        "plural": "добрые",
        "definitions": [
            {
                "text": "Щедрый по отношению к другим.",
                "examples": [
                    "Она добра ко всем."
                ]
            }
        ],
        "subtext": "очень добрый / любезно с вашей стороны / добрый человек",
        "comparative": "добрее",
        "superlative": "самый добрый"
    },
    {
        "word": "смешной",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "смешная",
        "neuter": "смешное",
        "plural": "смешные",
        "definitions": [
            {
                "text": "Заставляющий людей смеяться.",
                "examples": [
                    "У него весёлый характер."
                ]
            }
        ],
        "subtext": "очень смешной",
        "synonyms": ["смешная история"],
        "comparative": "более смешной",
        "superlative": "самый смешной"
    },
    {
        "word": "умный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "умная",
        "neuter": "умное",
        "plural": "умные",
        "definitions": [
            {
                "text": "Интеллектуальный; быстро соображающий.",
                "examples": [
                    "Она умный переговорщик."
                ]
            }
        ],
        "subtext": "очень умный / достаточно умный",
        "synonyms": ["умная идея"],
        "comparative": "умнее",
        "superlative": "самый умный"
    },
    {
        "word": "вежливый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "вежливая",
        "neuter": "вежливое",
        "plural": "вежливые",
        "definitions": [
            {
                "text": "Ведущий себя уважительно.",
                "examples": [
                    "Он всегда вежлив."
                ]
            }
        ],
        "subtext": "очень вежливый / достаточно вежливый",
        "synonyms": ["вежливая просьба"],
        "comparative": "вежливее",
        "superlative": "самый вежливый"
    },
    {
        "word": "грубый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "грубая",
        "neuter": "грубое",
        "plural": "грубые",
        "definitions": [
            {
                "text": "Невежливый.",
                "examples": [
                    "Это письмо было довольно грубым."
                ]
            }
        ],
        "subtext": "очень грубый / невероятно грубый / намеренно грубый",
        "comparative": "грубее",
        "superlative": "самый грубый"
    },
    {
        "word": "ленивый",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "ленивая",
        "neuter": "ленивое",
        "plural": "ленивые",
        "definitions": [
            {
                "text": "Не желающий работать.",
                "examples": [
                    "Он ленив."
                ]
            }
        ],
        "subtext": "очень ленивый / ленивый подход / слишком ленивый",
        "comparative": "ленивее",
        "superlative": "самый ленивый"
    },
    {
        "word": "честный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "честная",
        "neuter": "честное",
        "plural": "честные",
        "definitions": [
            {
                "text": "Говорящий правду.",
                "examples": [
                    "Она честна."
                ]
            }
        ],
        "subtext": "очень честный / предельно честный / совершенно честный",
        "comparative": "честнее",
        "superlative": "самый честный"
    },
    {
        "word": "шумный",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "шумная",
        "neuter": "шумное",
        "plural": "шумные",
        "definitions": [
            {
                "text": "Издающий много звуков; громкий.",
                "examples": [
                    "Офис открытого типа очень шумный."
                ]
            }
        ],
        "subtext": "очень шумный / слишком шумный",
        "synonyms": ["шумная обстановка"],
        "comparative": "шумнее",
        "superlative": "самый шумный"
    }
];
    const lang = "ru";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();