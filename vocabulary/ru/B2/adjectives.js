// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ru_upper_intermediate_social_049",
        "word": "гражданский",
        "lang": "ru",
        "level": "upper_intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Относящийся к городу, обществу или его жителям.",
                "examples": [
                    "Участие в выборах — это гражданский долг."
                ]
            }
        ],
        "gender": "он",
        "emoji": "🏛️",
        "subtext": "гражданский долг, общественный"
    },
    {
        "id": "ru_upper_intermediate_health_medicine_004",
        "word": "хронический",
        "lang": "ru",
        "level": "upper_intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Длительный; о состоянии здоровья, которое является постоянным.",
                "examples": [
                    "Она страдает от хронических болей в спине."
                ]
            }
        ],
        "gender": "он",
        "emoji": "⏳🤒",
        "subtext": "",
        "synonyms": [
            "хроническая боль",
            "длительный"
        ],
        "antonyms": [
            "острый"
        ]
    },
    {
        "id": "ru_upper_intermediate_health_medicine_005",
        "word": "превентивный",
        "lang": "ru",
        "level": "upper_intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Направленный на предотвращение чего-то плохого.",
                "examples": [
                    "Превентивная медицина снижает долгосрочные расходы."
                ]
            }
        ],
        "gender": "он",
        "emoji": "🛡️",
        "subtext": "",
        "synonyms": [
            "профилактический",
            "упреждающий"
        ]
    },
    {
        "id": "ru_upper_intermediate_social_050",
        "word": "нравственный",
        "lang": "ru",
        "level": "upper_intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Относящийся к принципам правильного и неправильного поведения.",
                "examples": [
                    "Она приняла нравственное решение отказаться от денег."
                ]
            }
        ],
        "gender": "он",
        "emoji": "⚖️",
        "subtext": "",
        "synonyms": [
            "моральный",
            "этический"
        ]
    },
    {
        "id": "ru_upper_intermediate_social_051",
        "word": "этичный",
        "lang": "ru",
        "level": "upper_intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Относящийся к этике; следующий принятым правилам правильного поведения.",
                "examples": [
                    "Компании должны работать этично."
                ]
            }
        ],
        "gender": "он",
        "emoji": "🤔⚖️",
        "subtext": "",
        "synonyms": [
            "этичное поведение"
        ]
    },
    {
        "id": "ru_upper_intermediate_environment_008",
        "word": "устойчивый",
        "lang": "ru",
        "level": "upper_intermediate",
        "theme": "environment",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не наносящий ущерба окружающей среде.",
                "examples": [
                    "Нам нужны устойчивые методы развития."
                ]
            }
        ],
        "gender": "он",
        "emoji": "🌱",
        "subtext": "",
        "synonyms": [
            "экологически чистый"
        ]
    }
];
    const lang = "ru";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
