(function() {
    const data = [
    {
        "id": "ru_upper_intermediate_health_society_001",
        "lang": "ru",
        "word": "психолог",
        "level": "upper_intermediate",
        "theme": "health_society",
        "gender": "masculine",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "plural": "психологи",
        "definitions": [
            {
                "text": "Специалист, изучающий поведение и психику человека.",
                "examples": [
                    "Психолог помог ему справиться со стрессом."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_politics_governance_002",
        "lang": "ru",
        "word": "подотчётность",
        "level": "upper_intermediate",
        "theme": "people",
        "gender": "feminine",
        "emoji": "📑",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "ответственность",
            "контроль"
        ],
        "definitions": [
            {
                "text": "Обязанность отчитываться за свои действия и решения.",
                "examples": [
                    "В этой организации очень слабая подотчётность."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_economy_labour_market_001",
        "lang": "ru",
        "word": "стимул",
        "level": "upper_intermediate",
        "theme": "economy_labour_market",
        "gender": "masculine",
        "emoji": "🥕",
        "form": "noun",
        "classification": "regular",
        "plural": "стимулы",
        "subtext": "финансовый стимул, поощрение",
        "definitions": [
            {
                "text": "Что-то, что побуждает человека к действию.",
                "examples": [
                    "Финансовые стимулы могут повысить производительность."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_employment_law_rights_001",
        "lang": "ru",
        "word": "автономия",
        "level": "upper_intermediate",
        "theme": "employment_law_rights",
        "gender": "feminine",
        "emoji": "🔓",
        "form": "noun",
        "classification": "regular",
        "plural": "автономии",
        "subtext": "",
        "synonyms": [
            "независимость",
            "самостоятельность"
        ],
        "antonyms": [
            "зависимость"
        ],
        "definitions": [
            {
                "text": "Право или способность действовать независимо.",
                "examples": [
                    "Сотрудники работают лучше, когда у них есть автономия."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_economy_labour_market_002",
        "lang": "ru",
        "word": "прекаритет",
        "level": "upper_intermediate",
        "theme": "economy_labour_market",
        "gender": "masculine",
        "emoji": "🧗",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "неустойчивая занятость"
        ],
        "antonyms": [
            "стабильность"
        ],
        "definitions": [
            {
                "text": "Состояние нестабильности и неопределенности в трудовых или жизненных условиях.",
                "examples": [
                    "Гиг-экономика привела к росту прекаритета."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_gender_equality_001",
        "lang": "ru",
        "word": "разрыв в оплате труда",
        "level": "upper_intermediate",
        "theme": "gender_equality",
        "gender": "masculine",
        "emoji": "⚖️📉",
        "form": "noun phrase",
        "plural": null,
        "subtext": "гендерный разрыв в зарплате",
        "definitions": [
            {
                "text": "Разница в среднем заработке между группами, особенно между мужчинами и женщинами.",
                "examples": [
                    "Гендерный разрыв в оплате труда остается значительным во многих секторах."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_employment_law_rights_002",
        "lang": "ru",
        "word": "компенсационный пакет",
        "level": "upper_intermediate",
        "theme": "employment_law_rights",
        "gender": "masculine",
        "emoji": "📦",
        "form": "noun phrase",
        "plural": "компенсационные пакеты",
        "subtext": "",
        "synonyms": [
            "выходное пособие"
        ],
        "definitions": [
            {
                "text": "Деньги и льготы, выплачиваемые при потере работы (сокращении).",
                "examples": [
                    "Она получила щедрый компенсационный пакет при увольнении."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_economy_labour_market_003",
        "lang": "ru",
        "word": "предпринимательство",
        "level": "upper_intermediate",
        "theme": "economy_labour_market",
        "gender": "neuter",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "стартап-культура"
        ],
        "definitions": [
            {
                "text": "Деятельность по созданию и управлению бизнесом.",
                "examples": [
                    "Предпринимательство требует готовности к риску и креативности."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_economy_labour_market_004",
        "lang": "ru",
        "word": "производительность",
        "level": "upper_intermediate",
        "theme": "economy_labour_market",
        "gender": "feminine",
        "emoji": "⚡",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "продуктивность",
            "эффективность"
        ],
        "definitions": [
            {
                "text": "Скорость, с которой производятся товары или выполняется работа.",
                "examples": [
                    "Удаленная работа может повысить производительность для некоторых людей."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_globalisation_trade_001",
        "lang": "ru",
        "word": "аутсорсинг",
        "level": "upper_intermediate",
        "theme": "globalisation_trade",
        "gender": "masculine",
        "emoji": "🌐",
        "form": "noun",
        "classification": "regular",
        "plural": "аутсорсинги",
        "subtext": "",
        "synonyms": [
            "внешнее управление",
            "подряд"
        ],
        "definitions": [
            {
                "text": "Передача части функций сторонней компании.",
                "examples": [
                    "Они используют аутсорсинг для клиентской поддержки."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_applied_sciences_engineering_001",
        "lang": "ru",
        "word": "автоматизация",
        "level": "upper_intermediate",
        "theme": "applied_sciences_engineering",
        "gender": "feminine",
        "emoji": "🤖",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "промышленная автоматизация",
        "definitions": [
            {
                "text": "Использование машин или компьютеров для выполнения работы, которую раньше делали люди.",
                "examples": [
                    "Автоматизация значительно меняет рынок труда."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_housing_society_001",
        "lang": "ru",
        "word": "джентрификация",
        "level": "upper_intermediate",
        "theme": "housing_society",
        "gender": "feminine",
        "emoji": "🏘️📈",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "облагораживание района"
        ],
        "definitions": [
            {
                "text": "Процесс изменения района, при котором в него переезжают более состоятельные люди, вытесняя бедных жителей.",
                "examples": [
                    "Джентрификация изменила облик этого района."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_housing_society_002",
        "lang": "ru",
        "word": "доступное жильё",
        "level": "upper_intermediate",
        "theme": "housing_society",
        "gender": "neuter",
        "emoji": "🏠💰",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "социальное жильё"
        ],
        "definitions": [
            {
                "text": "Жильё, которое достаточно дешево, чтобы его могли арендовать или купить люди с низким доходом.",
                "examples": [
                    "Городу нужно больше доступного жилья."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_housing_society_003",
        "lang": "ru",
        "word": "разрастание городов",
        "level": "upper_intermediate",
        "theme": "housing_society",
        "gender": "neuter",
        "emoji": "🏙️↔️",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "урбанизация территорий"
        ],
        "definitions": [
            {
                "text": "Бесконтрольное распространение городов на окружающие территории.",
                "examples": [
                    "Разрастание городов увеличивает зависимость от автомобилей."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_politics_governance_003",
        "lang": "ru",
        "word": "инфраструктура",
        "level": "upper_intermediate",
        "theme": "people",
        "gender": "feminine",
        "emoji": "🏗️",
        "form": "noun",
        "classification": "regular",
        "plural": "инфраструктуры",
        "subtext": "транспортная инфраструктура",
        "definitions": [
            {
                "text": "Основные физические системы страны, такие как дороги и коммуникации.",
                "examples": [
                    "Городской инфраструктуре требуются инвестиции."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_politics_governance_004",
        "lang": "ru",
        "word": "государство всеобщего благосостояния",
        "level": "upper_intermediate",
        "theme": "people",
        "gender": "neuter",
        "emoji": "🛡️🏛️",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "социальное государство"
        ],
        "definitions": [
            {
                "text": "Система, в которой правительство обеспечивает социальную защиту граждан.",
                "examples": [
                    "Социальное государство обеспечивает здравоохранение и пенсии."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_politics_governance_005",
        "lang": "ru",
        "word": "поляризация",
        "level": "upper_intermediate",
        "theme": "people",
        "gender": "feminine",
        "emoji": "↔️❌",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "политическая поляризация",
        "definitions": [
            {
                "text": "Разделение людей на противоположные группы с очень разными взглядами.",
                "examples": [
                    "Социальные сети усилили политическую поляризацию."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_formal_debate_vocab_002",
        "lang": "ru",
        "word": "дискурс",
        "level": "upper_intermediate",
        "theme": "language",
        "gender": "masculine",
        "emoji": "🗣️",
        "form": "noun",
        "classification": "regular",
        "plural": "дискурсы",
        "subtext": "общественный дискурс, обсуждение",
        "definitions": [
            {
                "text": "Письменное или устное общение на определенную тему.",
                "examples": [
                    "Общественный дискурс вокруг иммиграции очень напряженный."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_politics_governance_006",
        "lang": "ru",
        "word": "тщательная проверка",
        "level": "upper_intermediate",
        "theme": "people",
        "gender": "feminine",
        "emoji": "🔍",
        "form": "noun phrase",
        "plural": "тщательные проверки",
        "subtext": "",
        "synonyms": [
            "пристальное изучение"
        ],
        "definitions": [
            {
                "text": "Пристальное и внимательное изучение кого-либо или чего-либо.",
                "examples": [
                    "Решение правительства находится под тщательной проверкой."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_formal_debate_vocab_003",
        "lang": "ru",
        "word": "консенсус",
        "level": "upper_intermediate",
        "theme": "language",
        "gender": "masculine",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "plural": "консенсусы",
        "subtext": "",
        "synonyms": [
            "общее согласие"
        ],
        "definitions": [
            {
                "text": "Общее согласие среди группы людей.",
                "examples": [
                    "По вопросам климата намечается растущий консенсус."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_politics_governance_007",
        "lang": "ru",
        "word": "законодательство",
        "level": "upper_intermediate",
        "theme": "people",
        "gender": "neuter",
        "emoji": "📜",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "свод законов"
        ],
        "definitions": [
            {
                "text": "Законы, принятые правительством.",
                "examples": [
                    "Вступило в силу новое законодательство о защите данных."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_formal_debate_vocab_004",
        "lang": "ru",
        "word": "предвзятость",
        "level": "upper_intermediate",
        "theme": "language",
        "gender": "feminine",
        "emoji": "⚖️❌",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "необъективность",
            "предубеждение"
        ],
        "antonyms": [
            "беспристрастность"
        ],
        "definitions": [
            {
                "text": "Несправедливая склонность поддерживать или выступать против кого-то или чего-то.",
                "examples": [
                    "Неосознанная предвзятость может влиять на решения о найме."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_health_society_002",
        "lang": "ru",
        "word": "ожирение",
        "level": "upper_intermediate",
        "theme": "health_society",
        "gender": "neuter",
        "emoji": "⚖️⬆️",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "лишний вес"
        ],
        "definitions": [
            {
                "text": "Состояние чрезмерного избыточного веса, наносящее вред здоровью.",
                "examples": [
                    "За последние десятилетия уровень ожирения резко вырос."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_health_society_003",
        "lang": "ru",
        "word": "продолжительность жизни",
        "level": "upper_intermediate",
        "theme": "health_society",
        "gender": "feminine",
        "emoji": "⏳👴",
        "form": "noun phrase",
        "plural": null,
        "subtext": "средняя продолжительность жизни",
        "definitions": [
            {
                "text": "Среднее количество лет, которое человек может прожить.",
                "examples": [
                    "Продолжительность жизни увеличилась в большинстве стран."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_politics_governance_008",
        "lang": "ru",
        "word": "справедливость",
        "level": "upper_intermediate",
        "theme": "people",
        "gender": "feminine",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "социальная справедливость, правосудие",
        "antonyms": [
            "несправедливость"
        ],
        "definitions": [
            {
                "text": "Честное обращение и качество бытия справедливым.",
                "examples": [
                    "Система правосудия должна защищать всех граждан."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_crime_punishment_001",
        "lang": "ru",
        "word": "реабилитация",
        "level": "upper_intermediate",
        "theme": "crime_punishment",
        "gender": "feminine",
        "emoji": "🔄🏢",
        "form": "noun",
        "classification": "regular",
        "plural": "реабилитации",
        "subtext": "восстановление, возвращение в общество",
        "definitions": [
            {
                "text": "Процесс помощи человеку в возвращении к нормальной жизни после преступления или болезни.",
                "examples": [
                    "Тюрьма должна быть ориентирована на реабилитацию."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_politics_governance_009",
        "lang": "ru",
        "word": "прозрачность",
        "level": "upper_intermediate",
        "theme": "people",
        "gender": "feminine",
        "emoji": "🪟",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "открытость",
            "честность"
        ],
        "antonyms": [
            "непрозрачность"
        ],
        "definitions": [
            {
                "text": "Открытость и честность в отношении действий и решений.",
                "examples": [
                    "Общественность требует от политиков большей прозрачности."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_technology_privacy_001",
        "lang": "ru",
        "word": "алгоритм",
        "level": "upper_intermediate",
        "theme": "technology_privacy",
        "gender": "masculine",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "plural": "алгоритмы",
        "subtext": "компьютерный алгоритм",
        "definitions": [
            {
                "text": "Набор правил, которым следует компьютер для решения задачи.",
                "examples": [
                    "Алгоритмы социальных сетей определяют, что вы видите."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_technology_privacy_002",
        "lang": "ru",
        "word": "конфиденциальность данных",
        "level": "upper_intermediate",
        "theme": "technology_privacy",
        "gender": "feminine",
        "emoji": "🔒",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "защита данных"
        ],
        "definitions": [
            {
                "text": "Право контролировать то, как собирается и используется личная информация.",
                "examples": [
                    "Законы о конфиденциальности данных становятся всё строже."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_media_misinformation_001",
        "lang": "ru",
        "word": "дезинформация",
        "level": "upper_intermediate",
        "theme": "media_misinformation",
        "gender": "feminine",
        "emoji": "🤥",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "фейковые новости, ложные сведения",
        "definitions": [
            {
                "text": "Ложная или неточная информация, широко распространяемая.",
                "examples": [
                    "Социальные сети могут быстро распространять дезинформацию."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_technology_privacy_003",
        "lang": "ru",
        "word": "слежка",
        "level": "upper_intermediate",
        "theme": "technology_privacy",
        "gender": "feminine",
        "emoji": "📹",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "видеонаблюдение",
            "надзор"
        ],
        "definitions": [
            {
                "text": "Пристальное наблюдение за человеком или группой со стороны властей.",
                "examples": [
                    "Видеонаблюдение — это форма городской слежки."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_formal_debate_vocab_005",
        "lang": "ru",
        "word": "тогда как",
        "level": "upper_intermediate",
        "theme": "language",
        "emoji": "⚖️",
        "form": "conjunction",
        "subtext": "в то время как",
        "definitions": [
            {
                "text": "В отличие от того факта, что; в то время как наоборот.",
                "examples": [
                    "В городах дорого, тогда как маленькие города доступны."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_formal_debate_vocab_006",
        "lang": "ru",
        "word": "тем не менее",
        "level": "upper_intermediate",
        "theme": "language",
        "emoji": "🏃‍♂️",
        "form": "adverb",
        "subtext": "",
        "synonyms": [
            "однако",
            "всё же"
        ],
        "definitions": [
            {
                "text": "Несмотря на это; вопреки сказанному.",
                "examples": [
                    "Это трудная задача. Тем не менее, мы должны попробовать."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_formal_debate_vocab_007",
        "lang": "ru",
        "word": "в какой степени",
        "level": "upper_intermediate",
        "theme": "language",
        "emoji": "📏",
        "form": "phrase",
        "definitions": [
            {
                "text": "Используется для обсуждения того, насколько что-то является правдой.",
                "examples": [
                    "В какой степени образование определяет успех ?"
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_formal_debate_vocab_008",
        "lang": "ru",
        "word": "напротив",
        "level": "upper_intermediate",
        "theme": "language",
        "emoji": "🌓",
        "form": "phrase",
        "subtext": "в отличие от этого",
        "definitions": [
            {
                "text": "Используется для показа разницы между двумя вещами.",
                "examples": [
                    "В Швеции длинный отпуск по уходу за ребенком. Напротив, в США его почти нет."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "ru_upper_intermediate_technology_privacy_004",
        "lang": "ru",
        "word": "искусственный интеллект",
        "level": "upper_intermediate",
        "theme": "technology_privacy",
        "gender": "masculine",
        "emoji": "🤖",
        "form": "noun phrase",
        "plural": null,
        "definitions": [
            {
                "text": "Способность цифрового компьютера или управляемого им робота выполнять задачи, обычно связанные с разумными существами.",
                "examples": [
                    "Искусственный интеллект меняет мир."
                ]
            }
        ],
        "transcription": ""
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
