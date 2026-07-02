// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ru_intermediate_places_014",
        "word": "сад",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Общественный сад или парк.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "🌳",
        "_legacy": {
            "image": "images/vocabulary/places/garden.png",
            "classification": "regular",
            "countability": "countable"
        }
    },
    {
        "id": "ru_intermediate_work_027",
        "word": "инженер",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, который проектирует или строит машины, двигатели или сооружения.",
                "examples": [
                    "Инженер работает над новым мостом.",
                    "Он хочет стать инженером-строителем."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👷",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "инженеры"
        }
    },
    {
        "id": "ru_intermediate_work_028",
        "word": "пилот",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, который управляет самолетом или вертолетом.",
                "examples": [
                    "Пилот находится в кабине.",
                    "Он хочет стать пилотом."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧑‍✈️",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "пилоты"
        }
    },
    {
        "id": "ru_intermediate_work_029",
        "word": "разработчик ПО",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, который пишет компьютерные программы.",
                "examples": [
                    "Разработчик создает новое приложение."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💻",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "разработчики ПО"
        }
    },
    {
        "id": "ru_intermediate_work_030",
        "word": "карьера",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Ряд должностей, которые человек занимает в течение своей трудовой жизни.",
                "examples": [
                    "Она сделала успешную карьеру в финансах."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📈",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "карьеры"
        }
    },
    {
        "id": "ru_intermediate_work_031",
        "word": "сокращение",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Потеря работы из-за того, что работодатель больше не нуждается в данной должности.",
                "examples": [
                    "В прошлом году он попал под сокращение."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📉",
        "_legacy": {
            "gender": "neuter",
            "classification": "regular",
            "plural": "сокращения",
            "subtext": "увольнение по сокращению штата"
        }
    },
    {
        "id": "ru_intermediate_work_032",
        "word": "гибкий график",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Соглашение, позволяющее сотрудникам изменять время или место работы.",
                "examples": [
                    "Компания предлагает гибкий график работы из дома."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏠",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "гибкие графики"
        }
    },
    {
        "id": "ru_intermediate_work_033",
        "word": "нетворкинг",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Установление профессиональных связей для развития карьеры.",
                "examples": [
                    "Нетворкинг необходим в этой индустрии."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🤝",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "нетворкинги"
        }
    },
    {
        "id": "ru_intermediate_work_034",
        "word": "нагрузка",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Количество работы, которое должен выполнить человек.",
                "examples": [
                    "В этом месяце её рабочая нагрузка сильно увеличилась."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📚",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "нагрузки",
            "subtext": ""
        }
    },
    {
        "id": "ru_intermediate_work_035",
        "word": "командная работа",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Эффективная совместная работа с другими людьми.",
                "examples": [
                    "Хорошая командная работа обеспечила успех проекта."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👥",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "командные работы"
        }
    },
    {
        "id": "ru_intermediate_work_036",
        "word": "амбиция",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Сильное желание достичь чего-либо.",
                "examples": [
                    "Его амбиция — стать менеджером."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🚀",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "амбиции"
        }
    },
    {
        "id": "ru_intermediate_work_037",
        "word": "навык",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Способность делать что-то хорошо, обычно полученная в результате практики.",
                "examples": [
                    "Навыки общения очень важны в работе."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛠️",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "навыки",
            "subtext": ""
        }
    },
    {
        "id": "ru_intermediate_work_038",
        "word": "декретный отпуск",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Оплачиваемый отпуск, предоставляемый матери после рождения ребенка.",
                "examples": [
                    "Она взяла декретный отпуск на шесть месяцев."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👶",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "декретные отпуска"
        }
    },
    {
        "id": "ru_intermediate_work_039",
        "word": "пенсия",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Деньги, регулярно выплачиваемые человеку после его выхода на пенсию.",
                "examples": [
                    "Он каждый месяц делает отчисления на свою пенсию."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👴",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "пенсии"
        }
    },
    {
        "id": "ru_intermediate_work_040",
        "word": "инвестиция",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Деньги, вложенные во что-либо с целью получения прибыли в будущем.",
                "examples": [
                    "Недвижимость — популярная инвестиция."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💰",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "инвестиции"
        }
    },
    {
        "id": "ru_intermediate_work_041",
        "word": "процентная ставка",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Процент, взимаемый за заимствование денег или начисляемый на сбережения.",
                "examples": [
                    "Процентная ставка по ипотеке составляет три процента."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📊",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "процентные ставки"
        }
    },
    {
        "id": "ru_intermediate_work_042",
        "word": "доход",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Деньги, полученные от работы или других источников.",
                "examples": [
                    "Их семейный доход позволяет жить комфортно."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💸",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "доходы"
        }
    },
    {
        "id": "ru_intermediate_work_043",
        "word": "страховка",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Договор, по которому вы регулярно платите, чтобы быть защищенным от убытков или ущерба.",
                "examples": [
                    "Медицинская страховка в некоторых странах стоит дорого."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛡️",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "страховки"
        }
    },
    {
        "id": "ru_intermediate_work_044",
        "word": "налог",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Деньги, выплачиваемые государству на основе доходов или покупок.",
                "examples": [
                    "Она платит большой подоходный налог."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏦",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "налоги"
        }
    },
    {
        "id": "ru_intermediate_health_medicine_013",
        "word": "благополучие",
        "lang": "ru",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Общее ощущение комфорта, здоровья и счастья.",
                "examples": [
                    "Физические упражнения важны для ментального благополучия."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧘",
        "_legacy": {
            "gender": "neuter",
            "classification": "regular",
            "subtext": ""
        }
    },
    {
        "id": "ru_intermediate_health_medicine_014",
        "word": "ментальное здоровье",
        "lang": "ru",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Психологическое и эмоциональное состояние человека.",
                "examples": [
                    "Компании стали серьезнее относиться к ментальному здоровью сотрудников."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧠",
        "_legacy": {
            "gender": "neuter",
            "classification": "regular",
            "plural": null
        }
    },
    {
        "id": "ru_intermediate_health_medicine_015",
        "word": "выгорание",
        "lang": "ru",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Состояние истощения, вызванное чрезмерным стрессом в течение длительного времени.",
                "examples": [
                    "Она столкнулась с выгоранием после долгой работы без отпуска."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🔥",
        "_legacy": {
            "gender": "neuter",
            "classification": "regular",
            "plural": null,
            "subtext": "профессиональное выгорание"
        }
    },
    {
        "id": "ru_intermediate_health_medicine_016",
        "word": "профилактика",
        "lang": "ru",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Действия, предпринятые для того, чтобы остановить что-то плохое.",
                "examples": [
                    "Профилактика лучше, чем лечение."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛡️",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "профилактики",
            "subtext": ""
        }
    },
    {
        "id": "ru_intermediate_health_medicine_017",
        "word": "симптом",
        "lang": "ru",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Признаки, указывающие на наличие у человека определенной болезни.",
                "examples": [
                    "Симптомы появились на прошлой неделе."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🤒",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "симптомы"
        }
    },
    {
        "id": "ru_intermediate_health_medicine_018",
        "word": "терапия",
        "lang": "ru",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Лечение психических или физических проблем, часто посредством бесед.",
                "examples": [
                    "Он ходит на терапию раз в неделю."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛋️",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "терапии"
        }
    },
    {
        "id": "ru_intermediate_people_010",
        "word": "доверие",
        "lang": "ru",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Твердая вера в честность и надежность кого-либо.",
                "examples": [
                    "Доверие — основа хороших отношений."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🤝",
        "_legacy": {
            "gender": "neuter",
            "classification": "regular"
        }
    },
    {
        "id": "ru_intermediate_people_011",
        "word": "конфликт",
        "lang": "ru",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Серьезное разногласие или спор.",
                "examples": [
                    "У них возник конфликт из-за денег."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚔️",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "конфликты"
        }
    },
    {
        "id": "ru_intermediate_people_012",
        "word": "ответственность",
        "lang": "ru",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Обязанность заботиться о ком-то или о чем-то.",
                "examples": [
                    "Родители несут ответственность за своих детей."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular"
        }
    },
    {
        "id": "ru_intermediate_people_013",
        "word": "ожидание",
        "lang": "ru",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Убеждение в том, что произойдет или должно произойти.",
                "examples": [
                    "У неё высокие ожидания от своего партнера."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⏳",
        "_legacy": {
            "gender": "neuter",
            "classification": "regular",
            "plural": "ожидания"
        }
    },
    {
        "id": "ru_intermediate_people_014",
        "word": "граница",
        "lang": "ru",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Предел того, что вы готовы принять в отношениях.",
                "examples": [
                    "Полезно устанавливать четкие границы."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🚧",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "границы",
            "subtext": ""
        }
    },
    {
        "id": "ru_intermediate_people_015",
        "word": "развод",
        "lang": "ru",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Юридическое прекращение брака.",
                "examples": [
                    "В последние десятилетия уровень разводов вырос."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💔",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "разводы"
        }
    },
    {
        "id": "ru_intermediate_social_035",
        "word": "равенство",
        "lang": "ru",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Состояние равенства в правах и возможностях.",
                "examples": [
                    "Они борются за гендерное равенство на работе."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "gender": "neuter",
            "classification": "regular",
            "opposite": "неравенство"
        }
    },
    {
        "id": "ru_intermediate_social_036",
        "word": "свобода",
        "lang": "ru",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Право действовать и думать без ограничений.",
                "examples": [
                    "Свобода слова очень важна."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🗽",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "свободы"
        }
    },
    {
        "id": "ru_intermediate_social_037",
        "word": "неравенство",
        "lang": "ru",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Несправедливая ситуация, в которой у одних людей больше, чем у других.",
                "examples": [
                    "Неравенство доходов растет во многих странах."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "gender": "neuter",
            "classification": "regular",
            "opposite": "равенство"
        }
    },
    {
        "id": "ru_intermediate_social_038",
        "word": "волонтёр",
        "lang": "ru",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, который предлагает что-то сделать без оплаты.",
                "examples": [
                    "Она работает волонтёром в местном банке еды."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🙋",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "волонтёры"
        }
    },
    {
        "id": "ru_intermediate_social_039",
        "word": "сообщество",
        "lang": "ru",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Группа людей, имеющих общее место жительства, идентичность или интересы.",
                "examples": [
                    "Он очень активен в своем местном сообществе."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏘️",
        "_legacy": {
            "gender": "neuter",
            "classification": "regular",
            "plural": "сообщества",
            "subtext": ""
        }
    },
    {
        "id": "ru_intermediate_social_040",
        "word": "поколение",
        "lang": "ru",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Все люди одного возраста в обществе.",
                "examples": [
                    "Каждое поколение сталкивается с разными вызовами."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👥",
        "_legacy": {
            "gender": "neuter",
            "classification": "regular",
            "plural": "поколения"
        }
    },
    {
        "id": "ru_intermediate_environment_008",
        "word": "изменение климата",
        "lang": "ru",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Долгосрочные изменения глобальных температур и погодных условий.",
                "examples": [
                    "Изменение климата — самый большой вызов нашего времени."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🌍",
        "_legacy": {
            "gender": "neuter",
            "classification": "regular",
            "plural": null
        }
    },
    {
        "id": "ru_intermediate_environment_009",
        "word": "возобновляемая энергия",
        "lang": "ru",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Энергия из природных источников, которые не исчерпываются, таких как ветер или солнце.",
                "examples": [
                    "Компания перешла на возобновляемую энергию."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "☀️",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": null
        }
    },
    {
        "id": "ru_intermediate_environment_010",
        "word": "углеродный след",
        "lang": "ru",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Общее количество парниковых газов, производимых деятельностью человека.",
                "examples": [
                    "Полеты на самолете увеличивают ваш углеродный след."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👣",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "углеродные следы"
        }
    },
    {
        "id": "ru_intermediate_environment_011",
        "word": "отходы",
        "lang": "ru",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Материал, который больше не нужен и выбрасывается.",
                "examples": [
                    "Нам нужно сократить пищевые отходы."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🗑️",
        "_legacy": {
            "gender": "plural",
            "classification": "regular",
            "plural": "отходы",
            "subtext": ""
        }
    },
    {
        "id": "ru_intermediate_language_002",
        "word": "однако",
        "lang": "ru",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "Используется для введения контрастной или противоположной идеи.",
                "examples": [
                    "Мне нравится город. Однако, здесь очень дорого."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🔄",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "ru_intermediate_language_003",
        "word": "хотя",
        "lang": "ru",
        "level": "intermediate",
        "theme": "language",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Несмотря на тот факт, что.",
                "examples": [
                    "Хотя она устала, она идет в спортзал."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🔗",
        "_legacy": {
            "subtext": "несмотря на то что"
        }
    },
    {
        "id": "ru_intermediate_language_004",
        "word": "с другой стороны",
        "lang": "ru",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "Используется для введения контрастного момента.",
                "examples": [
                    "Жизнь в городе захватывающая. С другой стороны, она полна стресса."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️"
    },
    {
        "id": "ru_intermediate_social_041",
        "word": "по моему мнению",
        "lang": "ru",
        "level": "intermediate",
        "theme": "social",
        "form": "adverb",
        "definitions": [
            {
                "text": "Используется для введения вашей личной точки зрения.",
                "examples": [
                    "По моему мнению, удаленная работа более продуктивна."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🗣️",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "ru_intermediate_language_005",
        "word": "в результате",
        "lang": "ru",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "Из-за этого; следовательно.",
                "examples": [
                    "Он много работал. В результате он получил повышение."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "➡️",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "ru_intermediate_food_drink_001",
        "word": "пельмени",
        "lang": "ru",
        "level": "intermediate",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Традиционное русское блюдо из теста с мясным фаршем.",
                "examples": [
                    "Я люблю пельмени со сметаной."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🥟",
        "_legacy": {
            "gender": "plural",
            "classification": "regular"
        }
    },
    {
        "id": "ru_intermediate_food_drink_002",
        "word": "шашлык",
        "lang": "ru",
        "level": "intermediate",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Мясо, жаренное на шампурах над углями.",
                "examples": [
                    "Мы готовим шашлык на даче."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🍢",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "шашлыки"
        }
    },
    {
        "id": "ru_intermediate_food_drink_003",
        "word": "квас",
        "lang": "ru",
        "level": "intermediate",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Традиционный русский напиток из хлеба.",
                "examples": [
                    "Из кваса делают окрошку."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🍺",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular"
        }
    },
    {
        "id": "ru_intermediate_travel_005",
        "word": "библиотека",
        "lang": "ru",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Место, где много книг, которые можно читать или брать домой.",
                "examples": [
                    "Я иду в библиотеку."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📚",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "библиотеки"
        }
    },
    {
        "id": "ru_intermediate_travel_006",
        "word": "музей",
        "lang": "ru",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Здание, где можно посмотреть на важные предметы из прошлого.",
                "examples": [
                    "Мы посетили Эрмитаж."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏛️",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "музеи"
        }
    },
    {
        "id": "ru_intermediate_travel_007",
        "word": "аэропорт",
        "lang": "ru",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Место, где самолеты взлетают и приземляются.",
                "examples": [
                    "Мы приехали в аэропорт."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "✈️",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "аэропорты"
        }
    },
    {
        "id": "ru_intermediate_home_living_001",
        "word": "шкаф",
        "lang": "ru",
        "level": "intermediate",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Мебель для хранения одежды или книг.",
                "examples": [
                    "Моя одежда висит в шкафу."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👗",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "шкафы"
        }
    },
    {
        "id": "ru_intermediate_environment_nature_001",
        "word": "слон",
        "lang": "ru",
        "level": "intermediate",
        "theme": "environment_nature",
        "form": "noun",
        "definitions": [
            {
                "text": "Очень большое серое животное с хоботом.",
                "examples": [
                    "Слон живет в Африке."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🐘",
        "_legacy": {
            "gender": "masculine",
            "classification": "regular",
            "plural": "слоны"
        }
    },
    {
        "id": "ru_intermediate_environment_nature_002",
        "word": "обезьяна",
        "lang": "ru",
        "level": "intermediate",
        "theme": "environment_nature",
        "form": "noun",
        "definitions": [
            {
                "text": "Животное, которое лазает по деревьям и похоже на человека.",
                "examples": [
                    "Обезьяна ест банан."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🐒",
        "_legacy": {
            "gender": "feminine",
            "classification": "regular",
            "plural": "обезьяны"
        }
    },
    {
        "id": "ru_intermediate_social_042",
        "lang": "ru",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData['ru'] = [...(window.vocabularyData['ru'] || []), ...data];
})();