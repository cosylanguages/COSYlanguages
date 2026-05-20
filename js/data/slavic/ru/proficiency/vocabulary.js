(function() {
    const lang = "ru";
    const data = [
        {
                "word": "апория",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🤔",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Состояние недоумения или трудности, возникающее из противоречий в аргументе.",
                                "examples": [
                                        "Диалог заканчивается апорией, так как удовлетворительный ответ не достигнут."
                                ]
                        }
                ]
        },
        {
                "word": "телеология",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🎯",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Философское учение о целесообразности или целенаправленности в природе или истории.",
                                "examples": [
                                        "Его аргумент опирается на телеологический взгляд на человеческий прогресс."
                                ]
                        }
                ]
        },
        {
                "word": "онтология",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "👻",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Раздел философии, занимающийся природой бытия или существования.",
                                "examples": [
                                        "Ее онтологические обязательства формируют весь ее аргумент."
                                ]
                        }
                ]
        },
        {
                "word": "реификация",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🧱",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Процесс рассмотрения чего-то абстрактного как если бы это была конкретная, реальная вещь; овеществление.",
                                "examples": [
                                        "Реификация рыночных сил маскирует человеческие решения, стоящие за ними."
                                ]
                        }
                ]
        },
        {
                "word": "диалектика",
                "level": "proficiency",
                "theme": "meta_argument_deconstruction_C2",
                "emoji": "⚖️",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Метод аргументации, включающий противоречие и разрешение.",
                                "examples": [
                                        "Диалектика между свободой и безопасностью определяет либеральную мысль."
                                ]
                        }
                ]
        },
        {
                "word": "эвристика",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "💡",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Подход к решению проблем, основанный на опыте, а не на гарантированном доказательстве.",
                                "examples": [
                                        "'Следуй за деньгами' — полезная эвристика в расследовательской журналистике."
                                ]
                        }
                ]
        },
        {
                "word": "апофения",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🕸️",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Тенденция воспринимать значимые связи между не связанными вещами.",
                                "examples": [
                                        "Конспирологическое мышление движимо апофенией."
                                ]
                        }
                ]
        },
        {
                "word": "мотивированное познание",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🧠",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Влияние желаний и эмоций на рассуждения и формирование убеждений.",
                                "examples": [
                                        "Мотивированное познание объясняет, почему люди сопротивляются нежелательным доказательствам."
                                ]
                        }
                ]
        },
        {
                "word": "проактивный принцип",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🚀",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Мнение о том, что риски бездействия должны быть взвешены против рисков действия.",
                                "examples": [
                                        "Трансгуманисты часто ссылаются на проактивный принцип."
                                ]
                        }
                ]
        },
        {
                "word": "принцип предосторожности",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🛡️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Мнение о том, что следует избегать действий с неизвестными, но потенциально вредными последствиями.",
                                "examples": [
                                        "Экологическое право часто применяет принцип предосторожности."
                                ]
                        }
                ]
        },
        {
                "word": "либеральный нейтралитет",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "⚖️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Либеральный принцип, согласно которому государство не должно отдавать предпочтение какому-либо конкретному видению благой жизни.",
                                "examples": [
                                        "Критики утверждают, что либеральный нейтралитет сам по себе является существенной моральной позицией."
                                ]
                        }
                ]
        },
        {
                "word": "пронатализм",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "👶",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Политика или идеология, поощряющая людей иметь больше детей.",
                                "examples": [
                                        "Она критиковала пронаталистские предположения, заложенные в семейную налоговую политику."
                                ]
                        }
                ]
        },
        {
                "word": "сублимация",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🎨",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Перенаправление примитивного импульса в социально приемлемую деятельность.",
                                "examples": [
                                        "Искусство давно понимается как форма сублимации."
                                ]
                        }
                ]
        },
        {
                "word": "жуиссанс",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🔥",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "В психоаналитической теории чрезмерная или трансгрессивная форма наслаждения.",
                                "examples": [
                                        "Жижек использует концепцию жуиссанса для объяснения идеологической привязанности."
                                ]
                        }
                ]
        },
        {
                "word": "танатос",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "💀",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "В теории Фрейда влечение к смерти; инстинкт саморазрушения.",
                                "examples": [
                                        "Роман исследует напряжение между эросом и танатосом."
                                ]
                        }
                ]
        },
        {
                "word": "батос",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "emoji": "📉",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Внезапный, разочаровывающий переход от возвышенного к тривиальному.",
                                "examples": [
                                        "Речь скатилась в батос в решающий момент."
                                ]
                        }
                ]
        },
        {
                "word": "апофазис",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🤫",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Риторический прием привлечения внимания к чему-либо путем утверждения, что об этом не стоит упоминать.",
                                "examples": [
                                        "'Я не буду упоминать о его судимости' — классический апофазис."
                                ]
                        }
                ]
        },
        {
                "word": "паралепсис",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🙊",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Другой термин для апофазиса.",
                                "examples": [
                                        "Политическая риторика часто опирается на паралепсис."
                                ]
                        }
                ]
        },
        {
                "word": "лиминальное пространство",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🚪",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Переходная фаза или пороговый момент между двумя состояниями бытия.",
                                "examples": [
                                        "Кризис среднего возраста можно понимать как лиминальное пространство."
                                ]
                        }
                ]
        },
        {
                "word": "хиазм",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "❌",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Риторический прием, при котором вторая часть является инверсией первой.",
                                "examples": [
                                        "'Не спрашивай, что твоя страна может сделать для тебя' использует хиазм."
                                ]
                        }
                ]
        },
        {
                "word": "шибболет",
                "level": "proficiency",
                "theme": "linguistics_theory_C2",
                "emoji": "🔑",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Обычай, фраза или убеждение, используемые для идентификации членов определенной группы.",
                                "examples": [
                                        "'Трудолюбивые семьи' стало политическим шибболетом."
                                ]
                        }
                ]
        }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();