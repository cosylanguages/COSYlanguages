(function() {
    const data = [
    {
        "word": "чистить зубы",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🪥",
        "form": "verb",
        "subtext": "чистить зубы дважды в день",
        "definitions": [
            {
                "text": "Чистить зубы с помощью зубной щетки.",
                "examples": [
                    "Я чищу зубы каждое утро и вечер."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "чистил зубы",
        "v3": "чистила зубы",
        "group": "1st_conj"
    },
    {
        "word": "принимать душ",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🚿",
        "form": "verb",
        "subtext": "",
        "synonyms": ["принимать утренний душ"],
        "definitions": [
            {
                "text": "Мыться под душем.",
                "examples": [
                    "Я обычно принимаю душ по утрам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "принимал душ",
        "v3": "принимала душ",
        "group": "1st_conj"
    },
    {
        "word": "казаться",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "verb",
        "subtext": "казаться счастливым / это кажется хорошей идеей",
        "definitions": [
            {
                "text": "Производить какое-либо впечатление.",
                "examples": [
                    "Ты кажешься уставшим сегодня."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "казался",
        "v3": "казалась",
        "group": "1st_conj"
    },
    {
        "word": "становиться",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🦋",
        "form": "verb",
        "subtext": "",
        "synonyms": ["стать врачом", "стать известным"],
        "definitions": [
            {
                "text": "Принимать какое-либо состояние, делаться кем-либо.",
                "examples": [
                    "Он хочет стать пилотом."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "стал",
        "v3": "стала",
        "group": "1st_conj"
    },
    {
        "word": "верить",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "верить в успех / верить кому-то",
        "definitions": [
            {
                "text": "Считать что-либо истинным.",
                "examples": [
                    "Я тебе верю."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "верил",
        "v3": "верила",
        "group": "2nd_conj"
    },
    {
        "word": "случаться",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb",
        "subtext": "",
        "synonyms": ["внезапно случиться", "что случилось?"],
        "definitions": [
            {
                "text": "Происходить, иметь место.",
                "examples": [
                    "Несчастный случай случился вчера."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "случился",
        "v3": "случилась",
        "group": "1st_conj"
    },
    {
        "word": "включать",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➕",
        "form": "verb",
        "subtext": "включать в себя",
        "synonyms": ["завтрак включен"],
        "definitions": [
            {
                "text": "Содержать в себе как часть целого.",
                "examples": [
                    "Завтрак включен в стоимость."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "включал",
        "v3": "включала",
        "group": "1st_conj"
    },
    {
        "word": "продолжать",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➡️",
        "form": "verb",
        "subtext": "продолжать работать / продолжать делать",
        "definitions": [
            {
                "text": "Длиться дальше или возобновляться.",
                "examples": [
                    "Пожалуйста, продолжайте читать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "продолжал",
        "v3": "продолжала",
        "group": "1st_conj"
    },
    {
        "word": "устанавливать",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "⚙️",
        "form": "verb",
        "subtext": "",
        "synonyms": ["установить будильник", "установить правила"],
        "definitions": [
            {
                "text": "Помещать, ставить в определенное положение.",
                "examples": [
                    "Я устанавливаю будильник на 7 утра."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "установил",
        "v3": "установила",
        "group": "1st_conj"
    },
    {
        "word": "вести",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👑",
        "form": "verb",
        "subtext": "вести команду / вести за собой",
        "definitions": [
            {
                "text": "Указывать путь или руководить группой.",
                "examples": [
                    "Она ведет большую группу исследователей."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "вел",
        "v3": "вела",
        "group": "1st_conj"
    },
    {
        "word": "следовать",
        "level": "elementary",
        "theme": "directions_navigation_A1",
        "emoji": "👣",
        "form": "verb",
        "subtext": "следовать правилам / следовать за кем-то",
        "definitions": [
            {
                "text": "Идти за кем-либо или подчиняться чему-либо.",
                "examples": [
                    "Пожалуйста, следуйте за мной в зал заседаний."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "следовал",
        "v3": "следовала",
        "group": "1st_conj"
    },
    {
        "word": "создавать",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "✨",
        "form": "verb",
        "subtext": "",
        "synonyms": ["создать сайт", "создать беспорядок"],
        "definitions": [
            {
                "text": "Делать что-то новое.",
                "examples": [
                    "Он создал прекрасное произведение искусства."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "создал",
        "v3": "создала",
        "group": "1st_conj"
    },
    {
        "word": "разрешать",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "✅",
        "form": "verb",
        "subtext": "разрешать кому-то делать",
        "synonyms": ["вход разрешен"],
        "definitions": [
            {
                "text": "Давать позволение на что-либо.",
                "examples": [
                    "Курение здесь не разрешено."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "разрешил",
        "v3": "разрешила",
        "group": "1st_conj"
    },
    {
        "word": "расти",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌱",
        "form": "verb",
        "subtext": "расти быстро",
        "synonyms": ["выращивать растения"],
        "definitions": [
            {
                "text": "Увеличиваться в размере или развиваться.",
                "examples": [
                    "Дети растут очень быстро."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "рос",
        "v3": "росла",
        "group": "1st_conj"
    },
    {
        "word": "предлагать",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤲",
        "form": "verb",
        "subtext": "",
        "synonyms": ["предложить работу", "предложить помощь"],
        "definitions": [
            {
                "text": "Заявлять о своем желании предоставить что-либо.",
                "examples": [
                    "Он предложил мне кофе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "предложил",
        "v3": "предложила",
        "group": "1st_conj"
    },
    {
        "word": "рассматривать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "subtext": "рассматривать кандидатуру",
        "synonyms": ["рассмотреть вариант"],
        "definitions": [
            {
                "text": "Внимательно обдумывать что-либо.",
                "examples": [
                    "Пожалуйста, рассмотрите моё заявление."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "рассматривал",
        "v3": "рассматривала",
        "group": "1st_conj"
    },
    {
        "word": "появляться",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb",
        "subtext": "",
        "synonyms": ["появиться на ТВ", "внезапно появиться"],
        "definitions": [
            {
                "text": "Становиться видимым или казаться кем-либо.",
                "examples": [
                    "Он казался очень счастливым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "появился",
        "v3": "появилась",
        "group": "1st_conj"
    },
    {
        "word": "служить",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb",
        "subtext": "служить цели",
        "synonyms": ["подавать еду"],
        "definitions": [
            {
                "text": "Предоставлять еду или услуги.",
                "examples": [
                    "Завтрак подают до 11 утра."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "служил",
        "v3": "служила",
        "group": "2nd_conj"
    },
    {
        "word": "ожидать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "subtext": "ожидать ребенка / ожидать прибытия",
        "definitions": [
            {
                "text": "Думать, что что-то произойдет.",
                "examples": [
                    "Я ожидаю их прибытия в ближайшее время."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "ожидал",
        "v3": "ожидала",
        "group": "1st_conj"
    },
    {
        "word": "строить",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb",
        "subtext": "строить дом / строить отношения",
        "definitions": [
            {
                "text": "Создавать что-либо, соединяя части.",
                "examples": [
                    "Они строят новый офисный блок."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "строил",
        "v3": "строила",
        "group": "2nd_conj"
    },
    {
        "word": "достигать",
        "level": "elementary",
        "theme": "booking_planning_a_trip_A2",
        "emoji": "🏁",
        "form": "verb",
        "subtext": "",
        "synonyms": ["достичь вершины", "достичь соглашения"],
        "definitions": [
            {
                "text": "Прибывать в место или достигать уровня.",
                "examples": [
                    "Мы достигли отеля поздно ночью."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "достиг",
        "v3": "достигла",
        "group": "1st_conj"
    },
    {
        "word": "убивать",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb",
        "subtext": "убивать время",
        "synonyms": ["убить насекомое"],
        "definitions": [
            {
                "text": "Причинять смерть кому-либо или чему-либо.",
                "examples": [
                    "Холодная погода убила растения."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "убил",
        "v3": "убила",
        "group": "1st_conj"
    },
    {
        "word": "оставаться",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb",
        "subtext": "оставаться спокойным / оставаться дома",
        "definitions": [
            {
                "text": "Находиться в том же месте или состоянии.",
                "examples": [
                    "Пожалуйста, оставайтесь на своих местах, пока самолет не остановится."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "оставался",
        "v3": "оставалась",
        "group": "1st_conj"
    },
    {
        "word": "предлагать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "subtext": "",
        "synonyms": ["предложить план", "предложить что-то сделать"],
        "definitions": [
            {
                "text": "Высказывать идею или план.",
                "examples": [
                    "Я предлагаю пойти погулять."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "предложил",
        "v3": "предложила",
        "group": "1st_conj"
    },
    {
        "word": "поднимать",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb",
        "subtext": "",
        "synonyms": ["поднять руку", "воспитывать ребенка"],
        "definitions": [
            {
                "text": "Перемещать что-либо вверх или растить ребенка.",
                "examples": [
                    "Она подняла руку, чтобы задать вопрос."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "поднял",
        "v3": "подняла",
        "group": "1st_conj"
    },
    {
        "word": "требовать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb",
        "subtext": "требовать помощи / требовать паспорт",
        "definitions": [
            {
                "text": "Нуждаться в чем-либо.",
                "examples": [
                    "Эта работа требует частых поездок."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "требовал",
        "v3": "требовала",
        "group": "1st_conj"
    },
    {
        "word": "сообщать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "subtext": "",
        "synonyms": ["сообщить о преступлении", "сообщить о проблеме"],
        "definitions": [
            {
                "text": "Давать информацию о чем-либо.",
                "examples": [
                    "Он сообщил о краже автомобиля в полицию."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "сообщил",
        "v3": "сообщила",
        "group": "1st_conj"
    },
    {
        "word": "объяснять",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb",
        "subtext": "",
        "synonyms": ["объяснить правила", "объяснить почему"],
        "definitions": [
            {
                "text": "Делать что-либо понятным, приводя подробности.",
                "examples": [
                    "Ты можешь объяснить мне это слово?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "объяснил",
        "v3": "объяснила",
        "group": "1st_conj"
    },
    {
        "word": "развивать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb",
        "subtext": "развивать навык",
        "synonyms": ["разрабатывать продукт"],
        "definitions": [
            {
                "text": "Способствовать росту или переходу к чему-то более сложному.",
                "examples": [
                    "Компания разрабатывает новое приложение."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "развивал",
        "v3": "развивала",
        "group": "1st_conj"
    },
    {
        "word": "уходить на пенсию",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "subtext": "досрочный выход на пенсию",
        "synonyms": ["уйти с работы"],
        "definitions": [
            {
                "text": "Прекращать работу по достижении определенного возраста.",
                "examples": [
                    "Мой отец уйдет на пенсию в следующем году."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ушел на пенсию",
        "v3": "ушла на пенсию",
        "group": "1st_conj"
    },
    {
        "word": "позволить себе",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "subtext": "",
        "synonyms": ["не мочь позволить", "купить дом"],
        "definitions": [
            {
                "text": "Иметь достаточно денег, чтобы заплатить за что-либо.",
                "examples": [
                    "Мы не можем позволить себе квартиру побольше."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "позволил себе",
        "v3": "позволила себе",
        "group": "1st_conj"
    },
    {
        "word": "перерабатывать",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "subtext": "перерабатывать бумагу",
        "synonyms": ["баки для переработки"],
        "definitions": [
            {
                "text": "Обрабатывать использованные материалы для повторного использования.",
                "examples": [
                    "Мы перерабатываем бумагу и стекло."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "перерабатывал",
        "v3": "перерабатывала",
        "group": "1st_conj"
    },
    {
        "word": "ударить",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb",
        "subtext": "ударить по мячу",
        "synonyms": ["поразить цель"],
        "definitions": [
            {
                "text": "Прикоснуться к чему-либо с внезапной силой.",
                "examples": [
                    "Он ударил по мячу битой."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ударил",
        "v3": "ударила",
        "group": "2nd_conj"
    },
    {
        "word": "производить",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb",
        "subtext": "производить энергию",
        "synonyms": ["снимать фильм"],
        "definitions": [
            {
                "text": "Делать или создавать что-либо.",
                "examples": [
                    "Завод производит автомобили."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "производил",
        "v3": "производила",
        "group": "2nd_conj"
    },
    {
        "word": "сталкиваться",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb",
        "subtext": "смотреть правде в глаза",
        "synonyms": ["столкнуться с проблемой"],
        "definitions": [
            {
                "text": "Иметь дело с трудной ситуацией.",
                "examples": [
                    "Мы должны противостоять своим страхам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "столкнулся",
        "v3": "столкнулась",
        "group": "1st_conj"
    },
    {
        "word": "покрывать",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb",
        "subtext": "",
        "synonyms": ["накрыть одеялом", "освещать событие"],
        "definitions": [
            {
                "text": "Класть что-либо поверх чего-либо другого.",
                "examples": [
                    "Она накрыла стол скатертью."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "покрывал",
        "v3": "покрывала",
        "group": "1st_conj"
    },
    {
        "word": "описывать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "subtext": "",
        "synonyms": ["описать кого-то", "описать ситуацию"],
        "definitions": [
            {
                "text": "Говорить о том, как кто-то или что-то выглядит.",
                "examples": [
                    "Ты можешь описать человека, которого видел?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "описывал",
        "v3": "описывала",
        "group": "1st_conj"
    },
    {
        "word": "ловить",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb",
        "subtext": "ловить мяч",
        "synonyms": ["простудиться", "сесть на автобус"],
        "definitions": [
            {
                "text": "Схватить что-то движущееся.",
                "examples": [
                    "Попробуй поймать мяч!"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ловил",
        "v3": "ловила",
        "group": "2nd_conj"
    },
    {
        "word": "подавать заявление на",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "subtext": "подать заявку на работу",
        "synonyms": ["подать онлайн"],
        "definitions": [
            {
                "text": "Сделать официальный письменный запрос о работе или должности.",
                "examples": [
                    "Она подала заявление на три разные руководящие должности."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "подал заявление",
        "v3": "подала заявление",
        "group": "1st_conj"
    },
    {
        "word": "нанимать",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "",
        "synonyms": ["нанять кого-то", "набрать команду"],
        "definitions": [
            {
                "text": "Официально принимать кого-либо на работу в качестве сотрудника.",
                "examples": [
                    "Компания наняла пятнадцать новых человек в прошлом квартале."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "нанял",
        "v3": "наняла",
        "group": "1st_conj"
    },
    {
        "word": "повышать в должности",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "",
        "synonyms": ["получить повышение", "внутреннее продвижение"],
        "definitions": [
            {
                "text": "Переводить сотрудника на более высокую должность.",
                "examples": [
                    "Он был повышен до старшего менеджера через два года."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "повысил",
        "v3": "повысила",
        "group": "1st_conj"
    },
    {
        "word": "увольняться",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🚪",
        "form": "verb",
        "subtext": "",
        "synonyms": ["уйти с работы", "подать в отставку"],
        "definitions": [
            {
                "text": "Официально покидать работу по собственному желанию.",
                "examples": [
                    "Она уволилась после несогласия с новой стратегией."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "уволился",
        "v3": "уволилась",
        "group": "1st_conj"
    },
    {
        "word": "увольнять",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "❌",
        "form": "verb",
        "subtext": "",
        "synonyms": ["уволить сотрудника", "быть уволенным"],
        "definitions": [
            {
                "text": "Официально отстранять кого-либо от работы.",
                "examples": [
                    "Он был уволен за неоднократное отсутствие без объяснения причин."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "уволил",
        "v3": "уволила",
        "group": "1st_conj"
    },
    {
        "word": "делегировать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "subtext": "делегировать задачу",
        "synonyms": ["передать полномочия"],
        "definitions": [
            {
                "text": "Давать задание или ответственность кому-то другому.",
                "examples": [
                    "Хороший менеджер знает, как эффективно делегировать полномочия."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "делегировал",
        "v3": "делегировала",
        "group": "1st_conj"
    },
    {
        "word": "вести переговоры",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "",
        "synonyms": ["обсуждать зарплату", "договариваться об условиях"],
        "definitions": [
            {
                "text": "Обсуждать что-либо для достижения соглашения.",
                "examples": [
                    "Она договорилась о более высокой зарплате перед подписанием контракта."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "вел переговоры",
        "v3": "вела переговоры",
        "group": "1st_conj"
    },
    {
        "word": "оценивать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📊",
        "form": "verb",
        "subtext": "оценивать результаты / оценивать работу",
        "definitions": [
            {
                "text": "Судить о качестве или ценности чего-либо.",
                "examples": [
                    "Менеджер ежегодно оценивает работу каждого члена команды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "оценивал",
        "v3": "оценивала",
        "group": "1st_conj"
    },
    {
        "word": "сотрудничать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👥",
        "form": "verb",
        "subtext": "сотрудничать с кем-то",
        "synonyms": ["работать над проектом"],
        "definitions": [
            {
                "text": "Работать совместно с другими над общим проектом.",
                "examples": [
                    "Они сотрудничали с командой в Берлине над кампанией."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "сотрудничал",
        "v3": "сотрудничала",
        "group": "1st_conj"
    },
    {
        "word": "планировать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📅",
        "form": "verb",
        "subtext": "планировать время",
        "synonyms": ["назначить встречу"],
        "definitions": [
            {
                "text": "Организовывать время для чего-либо.",
                "examples": [
                    "Можем ли мы запланировать встречу на вторую половину дня четверга?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "планировал",
        "v3": "планировала",
        "group": "1st_conj"
    },
    {
        "word": "инвестировать",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "инвестировать в недвижимость",
        "synonyms": ["вкладывать деньги"],
        "definitions": [
            {
                "text": "Вкладывать деньги во что-либо в ожидании будущей прибыли.",
                "examples": [
                    "Он каждый месяц инвестирует часть своей зарплаты в индексный фонд."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "инвестировал",
        "v3": "инвестировала",
        "group": "1st_conj"
    },
    {
        "word": "занимать",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "verb",
        "subtext": "занимать деньги",
        "synonyms": ["брать в банке"],
        "definitions": [
            {
                "text": "Брать что-либо с намерением вернуть.",
                "examples": [
                    "Она заняла деньги у родителей на залог."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "занимал",
        "v3": "занимала",
        "group": "1st_conj"
    },
    {
        "word": "давать в долг",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "",
        "synonyms": ["одолжить денег", "помочь кому-то"],
        "definitions": [
            {
                "text": "Давать что-либо кому-либо на время.",
                "examples": [
                    "Банк отказался давать ему больше денег в долг."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "давал в долг",
        "v3": "давала в долг",
        "group": "1st_conj"
    },
    {
        "word": "планировать бюджет",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📊",
        "form": "verb",
        "subtext": "",
        "synonyms": ["тщательно планировать", "ежемесячный бюджет"],
        "definitions": [
            {
                "text": "Планировать, как будут потрачены деньги.",
                "examples": [
                    "Они тщательно планируют бюджет, чтобы накопить на дом."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "планировал бюджет",
        "v3": "планировала бюджет",
        "group": "1st_conj"
    },
    {
        "word": "снимать деньги",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏧",
        "form": "verb",
        "subtext": "",
        "synonyms": ["снять наличные", "снять со счета"],
        "definitions": [
            {
                "text": "Забирать деньги с банковского счета.",
                "examples": [
                    "Я снимаю наличные каждый понедельник на неделю."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "снимал деньги",
        "v3": "снимала деньги",
        "group": "1st_conj"
    },
    {
        "word": "переводить",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "📲",
        "form": "verb",
        "subtext": "переводить деньги",
        "synonyms": ["банковский перевод"],
        "definitions": [
            {
                "text": "Перемещать деньги с одного счета на другой.",
                "examples": [
                    "Она перевела арендную плату на счет арендодателя."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "переводил",
        "v3": "переводила",
        "group": "2nd_conj"
    },
    {
        "word": "назначать цену",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💳",
        "form": "verb",
        "subtext": "",
        "synonyms": ["взимать плату", "брать дополнительно"],
        "definitions": [
            {
                "text": "Просить сумму денег за услугу.",
                "examples": [
                    "Механик взял больше, чем предполагалось."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "назначил цену",
        "v3": "назначила цену",
        "group": "1st_conj"
    },
    {
        "word": "требовать",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📜",
        "form": "verb",
        "subtext": "требовать страховку / требовать возмещение",
        "definitions": [
            {
                "text": "Официально просить деньги, которые вам причитаются, особенно страховку.",
                "examples": [
                    "Он потребовал выплату по страховке после аварии."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "требовал",
        "v3": "требовала",
        "group": "1st_conj"
    },
    {
        "word": "спорить",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "спорить о чем-то / спорить с кем-то",
        "definitions": [
            {
                "text": "Не соглашаться с кем-либо сердито или решительно.",
                "examples": [
                    "Они часто спорят о деньгах и графике работы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "спорил",
        "v3": "спорила",
        "group": "2nd_conj"
    },
    {
        "word": "доверять",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "доверять кому-то / доверять инстинктам",
        "definitions": [
            {
                "text": "Иметь уверенность в чьей-либо честности и надежности.",
                "examples": [
                    "Она полностью доверяет своему деловому партнеру."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "доверял",
        "v3": "доверяла",
        "group": "1st_conj"
    },
    {
        "word": "поддерживать",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "поддерживать кого-то / поддерживать решение",
        "definitions": [
            {
                "text": "Помогать и ободрять кого-либо в трудностях.",
                "examples": [
                    "Он поддерживает свою партнершу в трудный период на работе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "поддерживал",
        "v3": "поддерживала",
        "group": "1st_conj"
    },
    {
        "word": "не соглашаться",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👎",
        "form": "verb",
        "subtext": "не соглашаться с кем-то",
        "synonyms": ["разойтись во мнениях"],
        "definitions": [
            {
                "text": "Иметь мнение, отличное от чьего-либо.",
                "examples": [
                    "Она вежливо не согласилась с решением менеджера."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "не согласился",
        "v3": "не согласилась",
        "group": "1st_conj"
    },
    {
        "word": "извиняться",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "извиняться за / извиняться перед кем-то",
        "definitions": [
            {
                "text": "Выражать сожаление о том, что вы сделали неправильно.",
                "examples": [
                    "Он извинился за то, что пропустил встречу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "извинялся",
        "v3": "извинялась",
        "group": "1st_conj"
    },
    {
        "word": "прощать",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "",
        "synonyms": ["простить кого-то", "простить ошибку"],
        "definitions": [
            {
                "text": "Перестать сердиться на кого-либо за то, что он сделал.",
                "examples": [
                    "Она в конце концов простила его за ошибку."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "простил",
        "v3": "простила",
        "group": "1st_conj"
    },
    {
        "word": "идти на компромисс",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "быть готовым к компромиссу",
        "synonyms": ["достичь компромисса"],
        "definitions": [
            {
                "text": "Принимать менее идеальный вариант для достижения соглашения.",
                "examples": [
                    "Они пошли на компромисс в цене и подписали контракт."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "пошел на компромисс",
        "v3": "пошла на компромисс",
        "group": "1st_conj"
    },
    {
        "word": "диагностировать",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🩺",
        "form": "verb",
        "subtext": "диагностировать болезнь",
        "synonyms": ["ранняя диагностика"],
        "definitions": [
            {
                "text": "Выявлять болезнь или проблему после осмотра.",
                "examples": [
                    "Врач диагностировал у нее высокое кровяное давление."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "диагностировал",
        "v3": "диагностировала",
        "group": "1st_conj"
    },
    {
        "word": "лечить",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🩹",
        "form": "verb",
        "subtext": "лечить пациента / лечить болезнь",
        "definitions": [
            {
                "text": "Оказывать медицинскую помощь больному или раненому.",
                "examples": [
                    "Специалист лечил его травму колена с помощью физиотерапии."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "лечил",
        "v3": "лечила",
        "group": "2nd_conj"
    },
    {
        "word": "предотвращать",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🛡️",
        "form": "verb",
        "subtext": "предотвращать болезнь",
        "synonyms": ["принимать меры"],
        "definitions": [
            {
                "text": "Останавливать что-то плохое до того, как оно случится.",
                "examples": [
                    "Упражнения и диета могут предотвратить многие распространенные заболевания."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "предотвращал",
        "v3": "предотвращала",
        "group": "1st_conj"
    },
    {
        "word": "страдать",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🤕",
        "form": "verb",
        "subtext": "страдать от чего-то / страдать от боли",
        "definitions": [
            {
                "text": "Испытывать боль или страдание.",
                "examples": [
                    "Она страдает от хронической боли в спине из-за сидячей работы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "страдал",
        "v3": "страдала",
        "group": "1st_conj"
    },
    {
        "word": "рекомендовать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "subtext": "рекомендовать лечение / рекомендовать отдых",
        "definitions": [
            {
                "text": "Предлагать образ действий как хороший или подходящий.",
                "examples": [
                    "Врач рекомендовал больше спать и пить меньше кофеина."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "рекомендовал",
        "v3": "рекомендовала",
        "group": "1st_conj"
    },
    {
        "word": "улучшать",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "улучшать здоровье / улучшать форму",
        "definitions": [
            {
                "text": "Делать что-либо лучше или становиться лучше.",
                "examples": [
                    "Его здоровье улучшилось после изменения диеты и режима."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "улучшал",
        "v3": "улучшала",
        "group": "1st_conj"
    },
    {
        "word": "арендовать",
        "level": "elementary",
        "theme": "renting_landlords_A2",
        "emoji": "🏠",
        "form": "verb",
        "subtext": "арендовать квартиру / арендовать комнату",
        "definitions": [
            {
                "text": "Регулярно платить за использование имущества, принадлежащего кому-то другому.",
                "examples": [
                    "Они арендуют двухкомнатную квартиру рядом с центром города."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "арендовал",
        "v3": "арендовала",
        "group": "1st_conj"
    },
    {
        "word": "владеть",
        "level": "elementary",
        "theme": "renting_landlords_A2",
        "emoji": "🏡",
        "form": "verb",
        "subtext": "владеть недвижимостью / владеть машиной",
        "definitions": [
            {
                "text": "Законно обладать чем-либо.",
                "examples": [
                    "Она владеет небольшой квартирой в пригороде."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "владел",
        "v3": "владела",
        "group": "1st_conj"
    },
    {
        "word": "ремонтировать",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🔧",
        "form": "verb",
        "subtext": "ремонтировать что-то",
        "synonyms": ["проводить ремонт"],
        "definitions": [
            {
                "text": "Чинить то, что сломано или не работает.",
                "examples": [
                    "Арендодатель медленно ремонтирует вещи в квартире."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ремонтировал",
        "v3": "ремонтировала",
        "group": "1st_conj"
    },
    {
        "word": "переезжать",
        "level": "elementary",
        "theme": "moving_home_A2",
        "emoji": "📦",
        "form": "verb",
        "subtext": "переезжать в новое место",
        "synonyms": ["переезд"],
        "definitions": [
            {
                "text": "Отправляться жить или работать в другое место.",
                "examples": [
                    "Они переехали в квартиру побольше, когда у них родилась дочь."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "переехал",
        "v3": "переехала",
        "group": "1st_conj"
    },
    {
        "word": "украшать",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "украшать комнату",
        "synonyms": ["дизайн интерьера"],
        "definitions": [
            {
                "text": "Делать место более привлекательным, особенно с помощью покраски.",
                "examples": [
                    "Они украсили квартиру перед переездом."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "украшал",
        "v3": "украшала",
        "group": "1st_conj"
    },
    {
        "word": "основывать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏗️",
        "form": "verb",
        "subtext": "",
        "synonyms": ["основать бизнес", "основать компанию"],
        "definitions": [
            {
                "text": "Начинать или создавать что-либо.",
                "examples": [
                    "Он основал свой собственный консалтинговый бизнес в возрасте тридцати лет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "основал",
        "v3": "основала",
        "group": "1st_conj"
    },
    {
        "word": "выяснять",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "🔎",
        "form": "verb",
        "subtext": "",
        "synonyms": ["выяснить правду", "выяснить позже"],
        "definitions": [
            {
                "text": "Обнаруживать или узнавать информацию.",
                "examples": [
                    "Она выяснила, что арендная плата скоро увеличится."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "выяснил",
        "v3": "выяснила",
        "group": "1st_conj"
    },
    {
        "word": "продолжать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏩",
        "form": "verb",
        "subtext": "продолжать работать / продолжать несмотря ни на что",
        "definitions": [
            {
                "text": "Продолжать что-либо делать.",
                "examples": [
                    "Он продолжал работать, несмотря на плохое самочувствие."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "продолжал",
        "v3": "продолжала",
        "group": "1st_conj"
    },
    {
        "word": "сдаваться",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏳️",
        "form": "verb",
        "subtext": "",
        "synonyms": ["бросить работу", "бросить курить"],
        "definitions": [
            {
                "text": "Перестать пытаться что-то сделать; бросить.",
                "examples": [
                    "Она бросила работу, чтобы основать собственную компанию."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "сдался",
        "v3": "сдалась",
        "group": "1st_conj"
    },
    {
        "word": "улаживать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🔧",
        "form": "verb",
        "subtext": "",
        "synonyms": ["уладить проблему", "разобраться в ситуации"],
        "definitions": [
            {
                "text": "Решать проблему или справляться с чем-либо.",
                "examples": [
                    "Вы можете уладить проблему с контрактом?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "уладил",
        "v3": "уладила",
        "group": "1st_conj"
    },
    {
        "word": "присматривать за",
        "level": "elementary",
        "theme": "relationships_family_A2",
        "emoji": "👶",
        "form": "verb",
        "subtext": "присматривать за кем-то / присматривать за ребенком",
        "definitions": [
            {
                "text": "Заботиться о ком-то или чем-то.",
                "examples": [
                    "Он присматривает за своей пожилой матерью по выходным."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "присматривал",
        "v3": "присматривала",
        "group": "1st_conj"
    },
    {
        "word": "сокращать",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "📉",
        "form": "verb",
        "subtext": "",
        "synonyms": ["сократить расходы", "сократить потребление сахара"],
        "definitions": [
            {
                "text": "Уменьшать количество того, что вы делаете или потребляете.",
                "examples": [
                    "Она сократила потребление кофеина, чтобы улучшить сон."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "сократил",
        "v3": "сократила",
        "group": "1st_conj"
    },
    {
        "word": "брать на себя",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💪",
        "form": "verb",
        "subtext": "",
        "synonyms": ["взять ответственность", "взять дополнительную работу"],
        "definitions": [
            {
                "text": "Принимать на себя ответственность или работу.",
                "examples": [
                    "Он взял на себя вторую работу, чтобы быстрее выплатить ипотеку."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "взял на себя",
        "v3": "взяла на себя",
        "group": "1st_conj"
    },
    {
        "word": "отклонять",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "👎",
        "form": "verb",
        "subtext": "",
        "synonyms": ["отклонить предложение", "отказаться от работы"],
        "definitions": [
            {
                "text": "Отказываться от предложения или просьбы.",
                "examples": [
                    "Она отклонила предложение о работе, потому что зарплата была слишком низкой."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "отклонил",
        "v3": "отклонила",
        "group": "1st_conj"
    },
    {
        "word": "откладывать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏳",
        "form": "verb",
        "subtext": "",
        "synonyms": ["отложить встречу", "отложить решение"],
        "definitions": [
            {
                "text": "Переносить что-либо на более позднее время.",
                "examples": [
                    "Он продолжает откладывать разговор о своей зарплате."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "откладывал",
        "v3": "откладывала",
        "group": "1st_conj"
    },
    {
        "word": "быть должным",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "verb",
        "subtext": "быть должным деньги / быть должным кому-то",
        "definitions": [
            {
                "text": "Быть обязанным выплатить деньги кому-либо.",
                "examples": [
                    "Он должен банку пятьдесят тысяч евро по ипотеке."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "был должен",
        "v3": "была должна",
        "group": "1st_conj"
    },
    {
        "word": "приглашать",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "📩",
        "form": "verb",
        "subtext": "",
        "synonyms": ["пригласить на ужин", "пригласить на вечеринку"],
        "definitions": [
            {
                "text": "Просить кого-либо прийти на мероприятие.",
                "examples": [
                    "Она пригласила всю команду на ужин после завершения проекта."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "пригласил",
        "v3": "пригласила",
        "group": "1st_conj"
    },
    {
        "word": "подтверждать",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "✅",
        "form": "verb",
        "subtext": "",
        "synonyms": ["подтвердить бронирование", "подтвердить письменно"],
        "definitions": [
            {
                "text": "Определенно заявлять, что что-то верно или произойдет.",
                "examples": [
                    "Пожалуйста, подтвердите свое присутствие до утра пятницы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "подтвердил",
        "v3": "подтвердила",
        "group": "1st_conj"
    },
    {
        "word": "связываться",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📞",
        "form": "verb",
        "subtext": "",
        "synonyms": ["связаться по email", "связаться с нами"],
        "definitions": [
            {
                "text": "Входить в контакт с кем-либо.",
                "examples": [
                    "Я свяжусь с вами до конца недели с ответом."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "связался",
        "v3": "связалась",
        "group": "1st_conj"
    },
    {
        "word": "жаловаться",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "😠",
        "form": "verb",
        "subtext": "жаловаться на",
        "synonyms": ["подать жалобу"],
        "definitions": [
            {
                "text": "Выражать недовольство чем-либо.",
                "examples": [
                    "Она пожаловалась на шум из квартиры сверху."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "жаловался",
        "v3": "жаловалась",
        "group": "1st_conj"
    },
    {
        "word": "обсуждать",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "обсуждать тему / обсуждать детально",
        "definitions": [
            {
                "text": "Говорить о чем-либо подробно.",
                "examples": [
                    "Мы обсуждали новые условия контракта в течение двух часов."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "обсуждал",
        "v3": "обсуждала",
        "group": "1st_conj"
    },
    {
        "word": "представлять",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📊",
        "form": "verb",
        "subtext": "представлять данные",
        "synonyms": ["презентация клиенту"],
        "definitions": [
            {
                "text": "Показывать или объяснять что-либо группе людей.",
                "examples": [
                    "Она представляет результаты продаж совету директоров каждый квартал."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "представлял",
        "v3": "представляла",
        "group": "1st_conj"
    },
    {
        "word": "принимать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "✅",
        "form": "verb",
        "subtext": "",
        "synonyms": ["принять предложение", "принять вызов"],
        "definitions": [
            {
                "text": "Соглашаться взять или получить что-либо.",
                "examples": [
                    "Она приняла предложение о работе после переговоров о зарплате."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "принял",
        "v3": "приняла",
        "group": "1st_conj"
    },
    {
        "word": "отказываться",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "❌",
        "form": "verb",
        "subtext": "",
        "synonyms": ["отказаться от предложения", "отказать в разрешении"],
        "definitions": [
            {
                "text": "Говорить «нет» чему-либо; отклонять.",
                "examples": [
                    "Он отказался подписывать контракт без юридической консультации."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "отказался",
        "v3": "отказалась",
        "group": "1st_conj"
    },
    {
        "word": "худеть",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "verb",
        "subtext": "",
        "synonyms": ["сбросить несколько килограммов", "пытаться похудеть"],
        "definitions": [
            {
                "text": "Становиться легче; уменьшать массу тела.",
                "examples": [
                    "Он похудел на десять килограммов после изменения диеты и образа жизни."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "худел",
        "v3": "худела",
        "group": "1st_conj"
    },
    {
        "word": "увеличивать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "",
        "synonyms": ["увеличить на", "быстро увеличиваться"],
        "definitions": [
            {
                "text": "Становиться или делать что-либо больше.",
                "examples": [
                    "Компания увеличила зарплаты на три процента."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "увеличивал",
        "v3": "увеличивала",
        "group": "1st_conj"
    },
    {
        "word": "уменьшать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📉",
        "form": "verb",
        "subtext": "уменьшать стресс",
        "synonyms": ["сокращать расходы"],
        "definitions": [
            {
                "text": "Делать что-либо меньше по размеру или количеству.",
                "examples": [
                    "Они сократили команду с двенадцати до восьми человек."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "уменьшал",
        "v3": "уменьшала",
        "group": "1st_conj"
    },
    {
        "word": "улучшать навыки",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "",
        "synonyms": ["повышать квалификацию", "совершенствоваться"],
        "definitions": [
            {
                "text": "Делать что-либо лучше или становиться лучше.",
                "examples": [
                    "Она значительно улучшила свои навыки публичных выступлений."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "улучшал навыки",
        "v3": "улучшала навыки",
        "group": "1st_conj"
    },
    {
        "word": "предоставлять",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤲",
        "form": "verb",
        "subtext": "предоставлять поддержку / предоставлять услугу",
        "definitions": [
            {
                "text": "Давать или снабжать чем-либо кого-либо.",
                "examples": [
                    "Компания предоставляет всем сотрудникам ноутбук."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "предоставил",
        "v3": "предоставила",
        "group": "1st_conj"
    },
    {
        "word": "решать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧩",
        "form": "verb",
        "subtext": "",
        "synonyms": ["решить загадку", "найти решение"],
        "definitions": [
            {
                "text": "Находить ответ на проблему.",
                "examples": [
                    "Он быстро решает проблемы под давлением."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "решил",
        "v3": "решила",
        "group": "1st_conj"
    },
    {
        "word": "делиться",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "делиться информацией / делиться идеями",
        "synonyms": ["разделить трапезу"],
        "definitions": [
            {
                "text": "Разделять что-либо между людьми; рассказывать другим.",
                "examples": [
                    "Она поделилась отчетом со всей командой в понедельник."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "делился",
        "v3": "делилась",
        "group": "1st_conj"
    },
    {
        "word": "присоединяться",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "➕",
        "form": "verb",
        "subtext": "",
        "synonyms": ["присоединиться к компании", "вступить в команду"],
        "definitions": [
            {
                "text": "Становиться членом группы или организации.",
                "examples": [
                    "Он пришел в компанию стажером семь лет назад."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "присоединился",
        "v3": "присоединилась",
        "group": "1st_conj"
    },
    {
        "word": "получать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📩",
        "form": "verb",
        "subtext": "",
        "synonyms": ["получить письмо", "получить оплату", "получить отзыв"],
        "definitions": [
            {
                "text": "Принимать что-либо, что вам дают или вручают.",
                "examples": [
                    "Он получил предложение о работе по электронной почте в пятницу днем."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "получил",
        "v3": "получила",
        "group": "1st_conj"
    },
    {
        "word": "содержать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📦",
        "form": "verb",
        "subtext": "содержать информацию",
        "synonyms": ["ингредиенты", "файл содержит"],
        "definitions": [
            {
                "text": "Иметь что-то внутри; включать.",
                "examples": [
                    "Отчет содержит подробные финансовые прогнозы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "содержал",
        "v3": "содержала",
        "group": "1st_conj"
    },
    {
        "word": "планировать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📅",
        "form": "verb",
        "subtext": "планировать поездку / планировать заранее",
        "definitions": [
            {
                "text": "Обдумывать и организовывать будущие действия.",
                "examples": [
                    "Каждое воскресенье вечером она планирует всю свою неделю."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "планировал",
        "v3": "планировала",
        "group": "1st_conj"
    },
    {
        "word": "готовиться",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "subtext": "готовиться к встрече",
        "synonyms": ["готовить отчет"],
        "definitions": [
            {
                "text": "Приводить что-либо в готовность; готовиться самому.",
                "examples": [
                    "Он готовит подробную повестку дня перед каждой встречей."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "готовился",
        "v3": "готовилась",
        "group": "1st_conj"
    },
    {
        "word": "потерпеть неудачу",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "❌",
        "form": "verb",
        "subtext": "",
        "synonyms": ["провалить экзамен", "не справиться"],
        "definitions": [
            {
                "text": "Не добиться успеха; не сделать что-то требуемое.",
                "examples": [
                    "Она провалила первый экзамен, но сдала со второй попытки."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "потерпел неудачу",
        "v3": "потерпела неудачу",
        "group": "1st_conj"
    },
    {
        "word": "преуспевать",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏆",
        "form": "verb",
        "subtext": "",
        "synonyms": ["преуспеть в делах", "добиться успеха"],
        "definitions": [
            {
                "text": "Достигать того, что вы наметили.",
                "examples": [
                    "Ему удалось закрыть сделку после трех месяцев."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "преуспевал",
        "v3": "преуспевала",
        "group": "1st_conj"
    },
    {
        "word": "соглашаться",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "соглашаться с кем-то / соглашаться на условия",
        "definitions": [
            {
                "text": "Иметь то же мнение; отвечать согласием на что-либо.",
                "examples": [
                    "Они согласились встретиться снова в следующий вторник."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "согласился",
        "v3": "согласилась",
        "group": "1st_conj"
    },
    {
        "word": "заменять",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🔄",
        "form": "verb",
        "subtext": "",
        "synonyms": ["заменить что-то", "быть замененным кем-то"],
        "definitions": [
            {
                "text": "Занимать место кого-либо или чего-либо.",
                "examples": [
                    "Новое программное обеспечение заменит старую систему в следующем году."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "заменил",
        "v3": "заменила",
        "group": "1st_conj"
    },
    {
        "word": "искать",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🔍",
        "form": "verb",
        "subtext": "искать работу / искать решение",
        "definitions": [
            {
                "text": "Пытаться найти что-либо.",
                "examples": [
                    "Он ищет новую работу с лучшим балансом между работой и личной жизнью."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "искал",
        "v3": "искала",
        "group": "1st_conj"
    },
    {
        "word": "выходить из системы",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🚪",
        "form": "verb",
        "subtext": "",
        "synonyms": ["выйти из аккаунта"],
        "definitions": [
            {
                "text": "Отключаться от компьютерной системы.",
                "examples": [
                    "Пожалуйста, выходите из системы, когда покидаете офис."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "вышел из системы",
        "v3": "вышла из системы",
        "group": "1st_conj"
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
