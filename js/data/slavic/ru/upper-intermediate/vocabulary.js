(function() {
    const data = [
    {
        "word": "юрист",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "gender": "он",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "юристы",
        "definitions": [
            {
                "text": "Человек, который дает юридические советы и представляет людей в суде.",
                "examples": [
                    "Мне нужно поговорить с моим юристом."
                ]
            }
        ]
    },
    {
        "word": "аптека",
        "level": "upper-intermediate",
        "theme": "places_shops_A1",
        "gender": "она",
        "emoji": "💊",
        "form": "noun",
        "plural": "аптеки",
        "definitions": [
            {
                "text": "Магазин, в котором продаются лекарства.",
                "examples": [
                    "Мне нужно зайти в аптеку."
                ]
            }
        ]
    },
    {
        "word": "психолог",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "gender": "он",
        "emoji": "🧠",
        "form": "noun",
        "plural": "психологи",
        "definitions": [
            {
                "text": "Специалист, изучающий поведение и психику человека.",
                "examples": [
                    "Психолог помог ему справиться со стрессом."
                ]
            }
        ]
    },
    {
        "word": "подотчётность",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "gender": "она",
        "emoji": "📑",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["ответственность", "контроль"],
        "definitions": [
            {
                "text": "Обязанность отчитываться за свои действия и решения.",
                "examples": [
                    "В этой организации очень слабая подотчётность."
                ]
            }
        ]
    },
    {
        "word": "стимул",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "gender": "он",
        "emoji": "🥕",
        "form": "noun",
        "plural": "стимулы",
        "subtext": "финансовый стимул, поощрение",
        "definitions": [
            {
                "text": "Что-то, что побуждает человека к действию.",
                "examples": [
                    "Финансовые стимулы могут повысить производительность."
                ]
            }
        ]
    },
    {
        "word": "автономия",
        "level": "upper-intermediate",
        "theme": "employment_law_rights_B2",
        "gender": "она",
        "emoji": "🔓",
        "form": "noun",
        "plural": "автономии",
        "subtext": "",
        "synonyms": ["независимость", "самостоятельность"],
        "opposite": "зависимость",
        "definitions": [
            {
                "text": "Право или способность действовать независимо.",
                "examples": [
                    "Сотрудники работают лучше, когда у них есть автономия."
                ]
            }
        ]
    },
    {
        "word": "прекаритет",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "gender": "он",
        "emoji": "🧗",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["неустойчивая занятость"],
        "opposite": "стабильность",
        "definitions": [
            {
                "text": "Состояние нестабильности и неопределенности в трудовых или жизненных условиях.",
                "examples": [
                    "Гиг-экономика привела к росту прекаритета."
                ]
            }
        ]
    },
    {
        "word": "разрыв в оплате труда",
        "level": "upper-intermediate",
        "theme": "gender_equality_B2",
        "gender": "он",
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
        ]
    },
    {
        "word": "компенсационный пакет",
        "level": "upper-intermediate",
        "theme": "employment_law_rights_B2",
        "gender": "он",
        "emoji": "📦",
        "form": "noun phrase",
        "plural": "компенсационные пакеты",
        "subtext": "",
        "synonyms": ["выходное пособие"],
        "definitions": [
            {
                "text": "Деньги и льготы, выплачиваемые при потере работы (сокращении).",
                "examples": [
                    "Она получила щедрый компенсационный пакет при увольнении."
                ]
            }
        ]
    },
    {
        "word": "предпринимательство",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "gender": "оно",
        "emoji": "💡",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["стартап-культура"],
        "definitions": [
            {
                "text": "Деятельность по созданию и управлению бизнесом.",
                "examples": [
                    "Предпринимательство требует готовности к риску и креативности."
                ]
            }
        ]
    },
    {
        "word": "производительность",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "gender": "она",
        "emoji": "⚡",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["продуктивность", "эффективность"],
        "definitions": [
            {
                "text": "Скорость, с которой производятся товары или выполняется работа.",
                "examples": [
                    "Удаленная работа может повысить производительность для некоторых людей."
                ]
            }
        ]
    },
    {
        "word": "аутсорсинг",
        "level": "upper-intermediate",
        "theme": "globalisation_trade_B2",
        "gender": "он",
        "emoji": "🌐",
        "form": "noun",
        "plural": "аутсорсинги",
        "subtext": "",
        "synonyms": ["внешнее управление", "подряд"],
        "definitions": [
            {
                "text": "Передача части функций сторонней компании.",
                "examples": [
                    "Они используют аутсорсинг для клиентской поддержки."
                ]
            }
        ]
    },
    {
        "word": "автоматизация",
        "level": "upper-intermediate",
        "theme": "applied_sciences_engineering_B2",
        "gender": "она",
        "emoji": "🤖",
        "form": "noun",
        "plural": null,
        "subtext": "промышленная автоматизация",
        "definitions": [
            {
                "text": "Использование машин или компьютеров для выполнения работы, которую раньше делали люди.",
                "examples": [
                    "Автоматизация значительно меняет рынок труда."
                ]
            }
        ]
    },
    {
        "word": "джентрификация",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "gender": "она",
        "emoji": "🏘️📈",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["облагораживание района"],
        "definitions": [
            {
                "text": "Процесс изменения района, при котором в него переезжают более состоятельные люди, вытесняя бедных жителей.",
                "examples": [
                    "Джентрификация изменила облик этого района."
                ]
            }
        ]
    },
    {
        "word": "доступное жильё",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "gender": "оно",
        "emoji": "🏠💰",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": ["социальное жильё"],
        "definitions": [
            {
                "text": "Жильё, которое достаточно дешево, чтобы его могли арендовать или купить люди с низким доходом.",
                "examples": [
                    "Городу нужно больше доступного жилья."
                ]
            }
        ]
    },
    {
        "word": "разрастание городов",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "gender": "оно",
        "emoji": "🏙️↔️",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": ["урбанизация территорий"],
        "definitions": [
            {
                "text": "Бесконтрольное распространение городов на окружающие территории.",
                "examples": [
                    "Разрастание городов увеличивает зависимость от автомобилей."
                ]
            }
        ]
    },
    {
        "word": "инфраструктура",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "gender": "она",
        "emoji": "🏗️",
        "form": "noun",
        "plural": "инфраструктуры",
        "subtext": "транспортная инфраструктура",
        "definitions": [
            {
                "text": "Основные физические системы страны, такие как дороги и коммуникации.",
                "examples": [
                    "Городской инфраструктуре требуются инвестиции."
                ]
            }
        ]
    },
    {
        "word": "государство всеобщего благосостояния",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "gender": "оно",
        "emoji": "🛡️🏛️",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": ["социальное государство"],
        "definitions": [
            {
                "text": "Система, в которой правительство обеспечивает социальную защиту граждан.",
                "examples": [
                    "Социальное государство обеспечивает здравоохранение и пенсии."
                ]
            }
        ]
    },
    {
        "word": "поляризация",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "gender": "она",
        "emoji": "↔️❌",
        "form": "noun",
        "plural": null,
        "subtext": "политическая поляризация",
        "definitions": [
            {
                "text": "Разделение людей на противоположные группы с очень разными взглядами.",
                "examples": [
                    "Социальные сети усилили политическую поляризацию."
                ]
            }
        ]
    },
    {
        "word": "дискурс",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "gender": "он",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "дискурсы",
        "subtext": "общественный дискурс, обсуждение",
        "definitions": [
            {
                "text": "Письменное или устное общение на определенную тему.",
                "examples": [
                    "Общественный дискурс вокруг иммиграции очень напряженный."
                ]
            }
        ]
    },
    {
        "word": "тщательная проверка",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "gender": "она",
        "emoji": "🔍",
        "form": "noun phrase",
        "plural": "тщательные проверки",
        "subtext": "",
        "synonyms": ["пристальное изучение"],
        "definitions": [
            {
                "text": "Пристальное и внимательное изучение кого-либо или чего-либо.",
                "examples": [
                    "Решение правительства находится под тщательной проверкой."
                ]
            }
        ]
    },
    {
        "word": "консенсус",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "gender": "он",
        "emoji": "🤝",
        "form": "noun",
        "plural": "консенсусы",
        "subtext": "",
        "synonyms": ["общее согласие"],
        "definitions": [
            {
                "text": "Общее согласие среди группы людей.",
                "examples": [
                    "По вопросам климата намечается растущий консенсус."
                ]
            }
        ]
    },
    {
        "word": "законодательство",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "gender": "оно",
        "emoji": "📜",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["свод законов"],
        "definitions": [
            {
                "text": "Законы, принятые правительством.",
                "examples": [
                    "Вступило в силу новое законодательство о защите данных."
                ]
            }
        ]
    },
    {
        "word": "предвзятость",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "gender": "она",
        "emoji": "⚖️❌",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["необъективность", "предубеждение"],
        "opposite": "беспристрастность",
        "definitions": [
            {
                "text": "Несправедливая склонность поддерживать или выступать против кого-то или чего-то.",
                "examples": [
                    "Неосознанная предвзятость может влиять на решения о найме."
                ]
            }
        ]
    },
    {
        "word": "ожирение",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "gender": "оно",
        "emoji": "⚖️⬆️",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["лишний вес"],
        "definitions": [
            {
                "text": "Состояние чрезмерного избыточного веса, наносящее вред здоровью.",
                "examples": [
                    "За последние десятилетия уровень ожирения резко вырос."
                ]
            }
        ]
    },
    {
        "word": "продолжительность жизни",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "gender": "она",
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
        ]
    },
    {
        "word": "справедливость",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "gender": "она",
        "emoji": "⚖️",
        "form": "noun",
        "plural": null,
        "subtext": "социальная справедливость, правосудие",
        "opposite": "несправедливость",
        "definitions": [
            {
                "text": "Честное обращение и качество бытия справедливым.",
                "examples": [
                    "Система правосудия должна защищать всех граждан."
                ]
            }
        ]
    },
    {
        "word": "реабилитация",
        "level": "upper-intermediate",
        "theme": "crime_punishment_B2",
        "gender": "она",
        "emoji": "🔄🏢",
        "form": "noun",
        "plural": "реабилитации",
        "subtext": "восстановление, возвращение в общество",
        "definitions": [
            {
                "text": "Процесс помощи человеку в возвращении к нормальной жизни после преступления или болезни.",
                "examples": [
                    "Тюрьма должна быть ориентирована на реабилитацию."
                ]
            }
        ]
    },
    {
        "word": "прозрачность",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "gender": "она",
        "emoji": "🪟",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["открытость", "честность"],
        "opposite": "непрозрачность",
        "definitions": [
            {
                "text": "Открытость и честность в отношении действий и решений.",
                "examples": [
                    "Общественность требует от политиков большей прозрачности."
                ]
            }
        ]
    },
    {
        "word": "алгоритм",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "gender": "он",
        "emoji": "💻",
        "form": "noun",
        "plural": "алгоритмы",
        "subtext": "компьютерный алгоритм",
        "definitions": [
            {
                "text": "Набор правил, которым следует компьютер для решения задачи.",
                "examples": [
                    "Алгоритмы социальных сетей определяют, что вы видите."
                ]
            }
        ]
    },
    {
        "word": "конфиденциальность данных",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "gender": "она",
        "emoji": "🔒",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": ["защита данных"],
        "definitions": [
            {
                "text": "Право контролировать то, как собирается и используется личная информация.",
                "examples": [
                    "Законы о конфиденциальности данных становятся всё строже."
                ]
            }
        ]
    },
    {
        "word": "дезинформация",
        "level": "upper-intermediate",
        "theme": "media_misinformation_B2",
        "gender": "она",
        "emoji": "🤥",
        "form": "noun",
        "plural": null,
        "subtext": "фейковые новости, ложные сведения",
        "definitions": [
            {
                "text": "Ложная или неточная информация, широко распространяемая.",
                "examples": [
                    "Социальные сети могут быстро распространять дезинформацию."
                ]
            }
        ]
    },
    {
        "word": "слежка",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "gender": "она",
        "emoji": "📹",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["видеонаблюдение", "надзор"],
        "definitions": [
            {
                "text": "Пристальное наблюдение за человеком или группой со стороны властей.",
                "examples": [
                    "Видеонаблюдение — это форма городской слежки."
                ]
            }
        ]
    },
    {
        "word": "тогда как",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
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
        ]
    },
    {
        "word": "тем не менее",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🏃‍♂️",
        "form": "adverb",
        "subtext": "",
        "synonyms": ["однако", "всё же"],
        "definitions": [
            {
                "text": "Несмотря на это; вопреки сказанному.",
                "examples": [
                    "Это трудная задача. Тем не менее, мы должны попробовать."
                ]
            }
        ]
    },
    {
        "word": "в какой степени",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "📏",
        "form": "phrase",
        "definitions": [
            {
                "text": "Используется для обсуждения того, насколько что-то является правдой.",
                "examples": [
                    "В какой степени образование определяет успех ?"
                ]
            }
        ]
    },
    {
        "word": "напротив",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
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
        ]
    },
    {
        "word": "искусственный интеллект",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "gender": "он",
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
        ]
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
