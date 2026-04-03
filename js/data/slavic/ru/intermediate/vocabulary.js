(function() {
    const data = [
    {
        "word": "инженер",
        "level": "intermediate",
        "theme": "career_development_B1",
        "gender": "он",
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
            }
        ]
    },
    {
        "word": "пилот",
        "level": "intermediate",
        "theme": "career_development_B1",
        "gender": "он",
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
            }
        ]
    },
    {
        "word": "разработчик ПО",
        "level": "intermediate",
        "theme": "career_development_B1",
        "gender": "он",
        "emoji": "💻",
        "form": "noun",
        "plural": "разработчики ПО",
        "definitions": [
            {
                "text": "Человек, который пишет компьютерные программы.",
                "examples": [
                    "Разработчик создает новое приложение."
                ]
            }
        ]
    },
    {
        "word": "карьера",
        "level": "intermediate",
        "theme": "career_development_B1",
        "gender": "она",
        "emoji": "📈",
        "form": "noun",
        "plural": "карьеры",
        "definitions": [
            {
                "text": "Ряд должностей, которые человек занимает в течение своей трудовой жизни.",
                "examples": [
                    "Она сделала успешную карьеру в финансах."
                ]
            }
        ]
    },
    {
        "word": "сокращение",
        "level": "intermediate",
        "theme": "career_development_B1",
        "gender": "оно",
        "emoji": "📉",
        "form": "noun",
        "plural": "сокращения",
        "subtext": "увольнение по сокращению штата",
        "definitions": [
            {
                "text": "Потеря работы из-за того, что работодатель больше не нуждается в данной должности.",
                "examples": [
                    "В прошлом году он попал под сокращение."
                ]
            }
        ]
    },
    {
        "word": "гибкий график",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "gender": "он",
        "emoji": "🏠",
        "form": "noun",
        "plural": "гибкие графики",
        "definitions": [
            {
                "text": "Соглашение, позволяющее сотрудникам изменять время или место работы.",
                "examples": [
                    "Компания предлагает гибкий график работы из дома."
                ]
            }
        ]
    },
    {
        "word": "нетворкинг",
        "level": "intermediate",
        "theme": "career_development_B1",
        "gender": "он",
        "emoji": "🤝",
        "form": "noun",
        "plural": "нетворкинги",
        "definitions": [
            {
                "text": "Установление профессиональных связей для развития карьеры.",
                "examples": [
                    "Нетворкинг необходим в этой индустрии."
                ]
            }
        ]
    },
    {
        "word": "нагрузка",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "gender": "она",
        "emoji": "📚",
        "form": "noun",
        "plural": "нагрузки",
        "subtext": "",
        "synonyms": ["объем работы"],
        "definitions": [
            {
                "text": "Количество работы, которое должен выполнить человек.",
                "examples": [
                    "В этом месяце её рабочая нагрузка сильно увеличилась."
                ]
            }
        ]
    },
    {
        "word": "командная работа",
        "level": "intermediate",
        "theme": "workplace_communication_B1",
        "gender": "она",
        "emoji": "👥",
        "form": "noun",
        "plural": "командные работы",
        "definitions": [
            {
                "text": "Эффективная совместная работа с другими людьми.",
                "examples": [
                    "Хорошая командная работа обеспечила успех проекта."
                ]
            }
        ]
    },
    {
        "word": "амбиция",
        "level": "intermediate",
        "theme": "career_development_B1",
        "gender": "она",
        "emoji": "🚀",
        "form": "noun",
        "plural": "амбиции",
        "definitions": [
            {
                "text": "Сильное желание достичь чего-либо.",
                "examples": [
                    "Его амбиция — стать менеджером."
                ]
            }
        ]
    },
    {
        "word": "навык",
        "level": "intermediate",
        "theme": "career_development_B1",
        "gender": "он",
        "emoji": "🛠️",
        "form": "noun",
        "plural": "навыки",
        "subtext": "",
        "synonyms": ["умение", "компетенция"],
        "definitions": [
            {
                "text": "Способность делать что-то хорошо, обычно полученная в результате практики.",
                "examples": [
                    "Навыки общения очень важны в работе."
                ]
            }
        ]
    },
    {
        "word": "декретный отпуск",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "gender": "он",
        "emoji": "👶",
        "form": "noun",
        "plural": "декретные отпуска",
        "definitions": [
            {
                "text": "Оплачиваемый отпуск, предоставляемый матери после рождения ребенка.",
                "examples": [
                    "Она взяла декретный отпуск на шесть месяцев."
                ]
            }
        ]
    },
    {
        "word": "пенсия",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "gender": "она",
        "emoji": "👴",
        "form": "noun",
        "plural": "пенсии",
        "definitions": [
            {
                "text": "Деньги, регулярно выплачиваемые человеку после его выхода на пенсию.",
                "examples": [
                    "Он каждый месяц делает отчисления на свою пенсию."
                ]
            }
        ]
    },
    {
        "word": "инвестиция",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "gender": "она",
        "emoji": "💰",
        "form": "noun",
        "plural": "инвестиции",
        "definitions": [
            {
                "text": "Деньги, вложенные во что-либо с целью получения прибыли в будущем.",
                "examples": [
                    "Недвижимость — популярная инвестиция."
                ]
            }
        ]
    },
    {
        "word": "процентная ставка",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "gender": "она",
        "emoji": "📊",
        "form": "noun",
        "plural": "процентные ставки",
        "definitions": [
            {
                "text": "Процент, взимаемый за заимствование денег или начисляемый на сбережения.",
                "examples": [
                    "Процентная ставка по ипотеке составляет три процента."
                ]
            }
        ]
    },
    {
        "word": "доход",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "gender": "он",
        "emoji": "💸",
        "form": "noun",
        "plural": "доходы",
        "definitions": [
            {
                "text": "Деньги, полученные от работы или других источников.",
                "examples": [
                    "Их семейный доход позволяет жить комфортно."
                ]
            }
        ]
    },
    {
        "word": "страховка",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "gender": "она",
        "emoji": "🛡️",
        "form": "noun",
        "plural": "страховки",
        "definitions": [
            {
                "text": "Договор, по которому вы регулярно платите, чтобы быть защищенным от убытков или ущерба.",
                "examples": [
                    "Медицинская страховка в некоторых странах стоит дорого."
                ]
            }
        ]
    },
    {
        "word": "налог",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "gender": "он",
        "emoji": "🏦",
        "form": "noun",
        "plural": "налоги",
        "definitions": [
            {
                "text": "Деньги, выплачиваемые государству на основе доходов или покупок.",
                "examples": [
                    "Она платит большой подоходный налог."
                ]
            }
        ]
    },
    {
        "word": "благополучие",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "gender": "оно",
        "emoji": "🧘",
        "form": "noun",
        "subtext": "",
        "synonyms": ["хорошее самочувствие"],
        "definitions": [
            {
                "text": "Общее ощущение комфорта, здоровья и счастья.",
                "examples": [
                    "Физические упражнения важны для ментального благополучия."
                ]
            }
        ]
    },
    {
        "word": "ментальное здоровье",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "gender": "оно",
        "emoji": "🧠",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Психологическое и эмоциональное состояние человека.",
                "examples": [
                    "Компании стали серьезнее относиться к ментальному здоровью сотрудников."
                ]
            }
        ]
    },
    {
        "word": "выгорание",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "gender": "оно",
        "emoji": "🔥",
        "form": "noun",
        "plural": null,
        "subtext": "профессиональное выгорание",
        "definitions": [
            {
                "text": "Состояние истощения, вызванное чрезмерным стрессом в течение длительного времени.",
                "examples": [
                    "Она столкнулась с выгоранием после долгой работы без отпуска."
                ]
            }
        ]
    },
    {
        "word": "профилактика",
        "level": "intermediate",
        "theme": "healthcare_systems_B1",
        "gender": "она",
        "emoji": "🛡️",
        "form": "noun",
        "plural": "профилактики",
        "subtext": "",
        "synonyms": ["предотвращение"],
        "definitions": [
            {
                "text": "Действия, предпринятые для того, чтобы остановить что-то плохое.",
                "examples": [
                    "Профилактика лучше, чем лечение."
                ]
            }
        ]
    },
    {
        "word": "симптом",
        "level": "intermediate",
        "theme": "healthcare_systems_B1",
        "gender": "он",
        "emoji": "🤒",
        "form": "noun",
        "plural": "симптомы",
        "definitions": [
            {
                "text": "Признаки, указывающие на наличие у человека определенной болезни.",
                "examples": [
                    "Симптомы появились на прошлой неделе."
                ]
            }
        ]
    },
    {
        "word": "терапия",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "gender": "она",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "терапии",
        "definitions": [
            {
                "text": "Лечение психических или физических проблем, часто посредством бесед.",
                "examples": [
                    "Он ходит на терапию раз в неделю."
                ]
            }
        ]
    },
    {
        "word": "доверие",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "gender": "оно",
        "emoji": "🤝",
        "form": "noun",
        "definitions": [
            {
                "text": "Твердая вера в честность и надежность кого-либо.",
                "examples": [
                    "Доверие — основа хороших отношений."
                ]
            }
        ]
    },
    {
        "word": "конфликт",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "gender": "он",
        "emoji": "⚔️",
        "form": "noun",
        "plural": "конфликты",
        "definitions": [
            {
                "text": "Серьезное разногласие или спор.",
                "examples": [
                    "У них возник конфликт из-за денег."
                ]
            }
        ]
    },
    {
        "word": "ответственность",
        "level": "intermediate",
        "theme": "parenting_childcare_B1",
        "gender": "она",
        "emoji": "⚖️",
        "form": "noun",
        "definitions": [
            {
                "text": "Обязанность заботиться о ком-то или о чем-то.",
                "examples": [
                    "Родители несут ответственность за своих детей."
                ]
            }
        ]
    },
    {
        "word": "ожидание",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "gender": "оно",
        "emoji": "⏳",
        "form": "noun",
        "plural": "ожидания",
        "definitions": [
            {
                "text": "Убеждение в том, что произойдет или должно произойти.",
                "examples": [
                    "У неё высокие ожидания от своего партнера."
                ]
            }
        ]
    },
    {
        "word": "граница",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "gender": "она",
        "emoji": "🚧",
        "form": "noun",
        "plural": "границы",
        "subtext": "",
        "synonyms": ["предел"],
        "definitions": [
            {
                "text": "Предел того, что вы готовы принять в отношениях.",
                "examples": [
                    "Полезно устанавливать четкие границы."
                ]
            }
        ]
    },
    {
        "word": "развод",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "gender": "он",
        "emoji": "💔",
        "form": "noun",
        "plural": "разводы",
        "definitions": [
            {
                "text": "Юридическое прекращение брака.",
                "examples": [
                    "В последние десятилетия уровень разводов вырос."
                ]
            }
        ]
    },
    {
        "word": "равенство",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "gender": "оно",
        "emoji": "⚖️",
        "form": "noun",
        "opposite": "неравенство",
        "definitions": [
            {
                "text": "Состояние равенства в правах и возможностях.",
                "examples": [
                    "Они борются за гендерное равенство на работе."
                ]
            }
        ]
    },
    {
        "word": "свобода",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "gender": "она",
        "emoji": "🗽",
        "form": "noun",
        "plural": "свободы",
        "definitions": [
            {
                "text": "Право действовать и думать без ограничений.",
                "examples": [
                    "Свобода слова очень важна."
                ]
            }
        ]
    },
    {
        "word": "неравенство",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "gender": "оно",
        "emoji": "⚖️",
        "form": "noun",
        "opposite": "равенство",
        "definitions": [
            {
                "text": "Несправедливая ситуация, в которой у одних людей больше, чем у других.",
                "examples": [
                    "Неравенство доходов растет во многих странах."
                ]
            }
        ]
    },
    {
        "word": "волонтёр",
        "level": "intermediate",
        "theme": "society_community_B1",
        "gender": "он",
        "emoji": "🙋",
        "form": "noun",
        "plural": "волонтёры",
        "definitions": [
            {
                "text": "Человек, который предлагает что-то сделать без оплаты.",
                "examples": [
                    "Она работает волонтёром в местном банке еды."
                ]
            }
        ]
    },
    {
        "word": "сообщество",
        "level": "intermediate",
        "theme": "society_community_B1",
        "gender": "оно",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "сообщества",
        "subtext": "",
        "synonyms": ["община"],
        "definitions": [
            {
                "text": "Группа людей, имеющих общее место жительства, идентичность или интересы.",
                "examples": [
                    "Он очень активен в своем местном сообществе."
                ]
            }
        ]
    },
    {
        "word": "поколение",
        "level": "intermediate",
        "theme": "society_community_B1",
        "gender": "оно",
        "emoji": "👥",
        "form": "noun",
        "plural": "поколения",
        "definitions": [
            {
                "text": "Все люди одного возраста в обществе.",
                "examples": [
                    "Каждое поколение сталкивается с разными вызовами."
                ]
            }
        ]
    },
    {
        "word": "изменение климата",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "gender": "оно",
        "emoji": "🌍",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Долгосрочные изменения глобальных температур и погодных условий.",
                "examples": [
                    "Изменение климата — самый большой вызов нашего времени."
                ]
            }
        ]
    },
    {
        "word": "возобновляемая энергия",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "gender": "она",
        "emoji": "☀️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Энергия из природных источников, которые не исчерпываются, таких как ветер или солнце.",
                "examples": [
                    "Компания перешла на возобновляемую энергию."
                ]
            }
        ]
    },
    {
        "word": "углеродный след",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "gender": "он",
        "emoji": "👣",
        "form": "noun",
        "plural": "углеродные следы",
        "definitions": [
            {
                "text": "Общее количество парниковых газов, производимых деятельностью человека.",
                "examples": [
                    "Полеты на самолете увеличивают ваш углеродный след."
                ]
            }
        ]
    },
    {
        "word": "отходы",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "gender": "они",
        "emoji": "🗑️",
        "form": "noun",
        "plural": "отходы",
        "subtext": "",
        "synonyms": ["мусор"],
        "definitions": [
            {
                "text": "Материал, который больше не нужен и выбрасывается.",
                "examples": [
                    "Нам нужно сократить пищевые отходы."
                ]
            }
        ]
    },
    {
        "word": "однако",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "🔄",
        "form": "adverb",
        "subtext": "",
        "synonyms": ["тем не менее"],
        "definitions": [
            {
                "text": "Используется для введения контрастной или противоположной идеи.",
                "examples": [
                    "Мне нравится город. Однако, здесь очень дорого."
                ]
            }
        ]
    },
    {
        "word": "хотя",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "🔗",
        "form": "conjunction",
        "subtext": "несмотря на то что",
        "definitions": [
            {
                "text": "Несмотря на тот факт, что.",
                "examples": [
                    "Хотя она устала, она идет в спортзал."
                ]
            }
        ]
    },
    {
        "word": "с другой стороны",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "⚖️",
        "form": "adverb",
        "definitions": [
            {
                "text": "Используется для введения контрастного момента.",
                "examples": [
                    "Жизнь в городе захватывающая. С другой стороны, она полна стресса."
                ]
            }
        ]
    },
    {
        "word": "по моему мнению",
        "level": "intermediate",
        "theme": "expressing_opinion_B1",
        "emoji": "🗣️",
        "form": "adverb",
        "subtext": "",
        "synonyms": ["на мой взгляд"],
        "definitions": [
            {
                "text": "Используется для введения вашей личной точки зрения.",
                "examples": [
                    "По моему мнению, удаленная работа более продуктивна."
                ]
            }
        ]
    },
    {
        "word": "в результате",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "➡️",
        "form": "adverb",
        "subtext": "",
        "synonyms": ["как следствие"],
        "definitions": [
            {
                "text": "Из-за этого; следовательно.",
                "examples": [
                    "Он много работал. В результате он получил повышение."
                ]
            }
        ]
    },
    {
        "word": "пельмени",
        "level": "intermediate",
        "theme": "food_culture_cuisine_B1",
        "gender": "они",
        "emoji": "🥟",
        "form": "noun",
        "definitions": [
            {
                "text": "Традиционное русское блюдо из теста с мясным фаршем.",
                "examples": [
                    "Я люблю пельмени со сметаной."
                ]
            }
        ]
    },
    {
        "word": "шашлык",
        "level": "intermediate",
        "theme": "food_culture_cuisine_B1",
        "gender": "он",
        "emoji": "🍢",
        "form": "noun",
        "plural": "шашлыки",
        "definitions": [
            {
                "text": "Мясо, жаренное на шампурах над углями.",
                "examples": [
                    "Мы готовим шашлык на даче."
                ]
            }
        ]
    },
    {
        "word": "квас",
        "level": "intermediate",
        "theme": "food_culture_cuisine_B1",
        "gender": "он",
        "emoji": "🍺",
        "form": "noun",
        "definitions": [
            {
                "text": "Традиционный русский напиток из хлеба.",
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
        "gender": "она",
        "emoji": "📚",
        "form": "noun",
        "plural": "библиотеки",
        "definitions": [
            {
                "text": "Место, где много книг, которые можно читать или брать домой.",
                "examples": [
                    "Я иду в библиотеку."
                ]
            }
        ]
    },
    {
        "word": "музей",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "gender": "он",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "музеи",
        "definitions": [
            {
                "text": "Здание, где можно посмотреть на важные предметы из прошлого.",
                "examples": [
                    "Мы посетили Эрмитаж."
                ]
            }
        ]
    },
    {
        "word": "аэропорт",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "gender": "он",
        "emoji": "✈️",
        "form": "noun",
        "plural": "аэропорты",
        "definitions": [
            {
                "text": "Место, где самолеты взлетают и приземляются.",
                "examples": [
                    "Мы приехали в аэропорт."
                ]
            }
        ]
    },
    {
        "word": "шкаф",
        "level": "intermediate",
        "theme": "home_living",
        "gender": "он",
        "emoji": "👗",
        "form": "noun",
        "plural": "шкафы",
        "definitions": [
            {
                "text": "Мебель для хранения одежды или книг.",
                "examples": [
                    "Моя одежда висит в шкафу."
                ]
            }
        ]
    },
    {
        "word": "слон",
        "level": "intermediate",
        "theme": "environment_nature",
        "gender": "он",
        "emoji": "🐘",
        "form": "noun",
        "plural": "слоны",
        "definitions": [
            {
                "text": "Очень большое серое животное с хоботом.",
                "examples": [
                    "Слон живет в Африке."
                ]
            }
        ]
    },
    {
        "word": "обезьяна",
        "level": "intermediate",
        "theme": "environment_nature",
        "gender": "она",
        "emoji": "🐒",
        "form": "noun",
        "plural": "обезьяны",
        "definitions": [
            {
                "text": "Животное, которое лазает по деревьям и похоже на человека.",
                "examples": [
                    "Обезьяна ест банан."
                ]
            }
        ]
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
