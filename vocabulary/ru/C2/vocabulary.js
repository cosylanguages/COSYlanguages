// TODO: verify level classification
(function() {
    const lang = "ru";
    const data = [
    {
        "id": "ru_proficiency_language_001",
        "word": "апория",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun",
        "definitions": [
            {
                "text": "Состояние недоумения или трудности, возникающее из противоречий в аргументе.",
                "examples": [
                    "Диалог заканчивается апорией, так как удовлетворительный ответ не достигнут."
                ]
            }
        ],
        "emoji": "🤔",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_002",
        "word": "телеология",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun",
        "definitions": [
            {
                "text": "Философское учение о целесообразности или целенаправленности в природе или истории.",
                "examples": [
                    "Его аргумент опирается на телеологический взгляд на человеческий прогресс."
                ]
            }
        ],
        "emoji": "🎯",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_003",
        "word": "онтология",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun",
        "definitions": [
            {
                "text": "Раздел философии, занимающийся природой бытия или существования.",
                "examples": [
                    "Ее онтологические обязательства формируют весь ее аргумент."
                ]
            }
        ],
        "emoji": "👻",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_004",
        "word": "реификация",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun",
        "definitions": [
            {
                "text": "Процесс рассмотрения чего-то абстрактного как если бы это была конкретная, реальная вещь; овеществление.",
                "examples": [
                    "Реификация рыночных сил маскирует человеческие решения, стоящие за ними."
                ]
            }
        ],
        "emoji": "🧱",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_005",
        "word": "диалектика",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun",
        "definitions": [
            {
                "text": "Метод аргументации, включающий противоречие и разрешение.",
                "examples": [
                    "Диалектика между свободой и безопасностью определяет либеральную мысль."
                ]
            }
        ],
        "emoji": "⚖️",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_006",
        "word": "эвристика",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun",
        "definitions": [
            {
                "text": "Подход к решению проблем, основанный на опыте, а не на гарантированном доказательстве.",
                "examples": [
                    "'Следуй за деньгами' — полезная эвристика в расследовательской журналистике."
                ]
            }
        ],
        "emoji": "💡",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_007",
        "word": "апофения",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun",
        "definitions": [
            {
                "text": "Тенденция воспринимать значимые связи между не связанными вещами.",
                "examples": [
                    "Конспирологическое мышление движимо апофенией."
                ]
            }
        ],
        "emoji": "🕸️",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_008",
        "word": "мотивированное познание",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Влияние желаний и эмоций на рассуждения и формирование убеждений.",
                "examples": [
                    "Мотивированное познание объясняет, почему люди сопротивляются нежелательным доказательствам."
                ]
            }
        ],
        "emoji": "🧠",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_001",
        "word": "проактивный принцип",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Мнение о том, что риски бездействия должны быть взвешены против рисков действия.",
                "examples": [
                    "Трансгуманисты часто ссылаются на проактивный принцип."
                ]
            }
        ],
        "emoji": "🚀",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_002",
        "word": "принцип предосторожности",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Мнение о том, что следует избегать действий с неизвестными, но потенциально вредными последствиями.",
                "examples": [
                    "Экологическое право часто применяет принцип предосторожности."
                ]
            }
        ],
        "emoji": "🛡️",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_003",
        "word": "либеральный нейтралитет",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Либеральный принцип, согласно которому государство не должно отдавать предпочтение какому-либо конкретному видению благой жизни.",
                "examples": [
                    "Критики утверждают, что либеральный нейтралитет сам по себе является существенной моральной позицией."
                ]
            }
        ],
        "emoji": "⚖️",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_004",
        "word": "пронатализм",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Политика или идеология, поощряющая людей иметь больше детей.",
                "examples": [
                    "Она критиковала пронаталистские предположения, заложенные в семейную налоговую политику."
                ]
            }
        ],
        "emoji": "👶",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_psychology_001",
        "word": "сублимация",
        "lang": "ru",
        "level": "proficiency",
        "theme": "psychology",
        "form": "noun",
        "definitions": [
            {
                "text": "Перенаправление примитивного импульса в социально приемлемую деятельность.",
                "examples": [
                    "Искусство давно понимается как форма сублимации."
                ]
            }
        ],
        "emoji": "🎨",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_psychology_002",
        "word": "жуиссанс",
        "lang": "ru",
        "level": "proficiency",
        "theme": "psychology",
        "form": "noun",
        "definitions": [
            {
                "text": "В психоаналитической теории чрезмерная или трансгрессивная форма наслаждения.",
                "examples": [
                    "Жижек использует концепцию жуиссанса для объяснения идеологической привязанности."
                ]
            }
        ],
        "emoji": "🔥",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_psychology_003",
        "word": "танатос",
        "lang": "ru",
        "level": "proficiency",
        "theme": "psychology",
        "form": "noun",
        "definitions": [
            {
                "text": "В теории Фрейда влечение к смерти; инстинкт саморазрушения.",
                "examples": [
                    "Роман исследует напряжение между эросом и танатосом."
                ]
            }
        ],
        "emoji": "💀",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_art_culture_001",
        "word": "батос",
        "lang": "ru",
        "level": "proficiency",
        "theme": "art_culture",
        "form": "noun",
        "definitions": [
            {
                "text": "Внезапный, разочаровывающий переход от возвышенного к тривиальному.",
                "examples": [
                    "Речь скатилась в батос в решающий момент."
                ]
            }
        ],
        "emoji": "📉",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_009",
        "word": "апофазис",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun",
        "definitions": [
            {
                "text": "Риторический прием привлечения внимания к чему-либо путем утверждения, что об этом не стоит упоминать.",
                "examples": [
                    "'Я не буду упоминать о его судимости' — классический апофазис."
                ]
            }
        ],
        "emoji": "🤫",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_010",
        "word": "паралепсис",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun",
        "definitions": [
            {
                "text": "Другой термин для апофазиса.",
                "examples": [
                    "Политическая риторика часто опирается на паралепсис."
                ]
            }
        ],
        "emoji": "🙊",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_011",
        "word": "лиминальное пространство",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Переходная фаза или пороговый момент между двумя состояниями бытия.",
                "examples": [
                    "Кризис среднего возраста можно понимать как лиминальное пространство."
                ]
            }
        ],
        "emoji": "🚪",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_012",
        "word": "хиазм",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun",
        "definitions": [
            {
                "text": "Риторический прием, при котором вторая часть является инверсией первой.",
                "examples": [
                    "'Не спрашивай, что твоя страна может сделать для тебя' использует хиазм."
                ]
            }
        ],
        "emoji": "❌",
        "classification": "regular",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_013",
        "word": "шибболет",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "noun",
        "definitions": [
            {
                "text": "Обычай, фраза или убеждение, используемые для идентификации членов определенной группы.",
                "examples": [
                    "'Трудолюбивые семьи' стало политическим шибболетом."
                ]
            }
        ],
        "emoji": "🔑",
        "classification": "regular",
        "transcription": ""
    }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();