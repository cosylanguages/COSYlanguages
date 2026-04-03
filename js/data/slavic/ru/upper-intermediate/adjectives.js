(function() {
    const data = [
    {
        "word": "гражданский",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "gender": "он",
        "emoji": "🏛️",
        "form": "adjective",
        "subtext": "гражданский долг, общественный",
        "definitions": [
            {
                "text": "Относящийся к городу, обществу или его жителям.",
                "examples": [
                    "Участие в выборах — это гражданский долг."
                ]
            }
        ]
    },
    {
        "word": "хронический",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "gender": "он",
        "emoji": "⏳🤒",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["хроническая боль", "длительный"],
        "opposite": "острый",
        "definitions": [
            {
                "text": "Длительный; о состоянии здоровья, которое является постоянным.",
                "examples": [
                    "Она страдает от хронических болей в спине."
                ]
            }
        ]
    },
    {
        "word": "превентивный",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "gender": "он",
        "emoji": "🛡️",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["профилактический", "упреждающий"],
        "definitions": [
            {
                "text": "Направленный на предотвращение чего-то плохого.",
                "examples": [
                    "Превентивная медицина снижает долгосрочные расходы."
                ]
            }
        ]
    },
    {
        "word": "нравственный",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "gender": "он",
        "emoji": "⚖️",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["моральный", "этический"],
        "definitions": [
            {
                "text": "Относящийся к принципам правильного и неправильного поведения.",
                "examples": [
                    "Она приняла нравственное решение отказаться от денег."
                ]
            }
        ]
    },
    {
        "word": "этичный",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "gender": "он",
        "emoji": "🤔⚖️",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["этичное поведение"],
        "definitions": [
            {
                "text": "Относящийся к этике; следующий принятым правилам правильного поведения.",
                "examples": [
                    "Компании должны работать этично."
                ]
            }
        ]
    },
    {
        "word": "устойчивый",
        "level": "upper-intermediate",
        "theme": "environment_policy_B2",
        "gender": "он",
        "emoji": "🌱",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["экологически чистый"],
        "definitions": [
            {
                "text": "Не наносящий ущерба окружающей среде.",
                "examples": [
                    "Нам нужны устойчивые методы развития."
                ]
            }
        ]
    }
];
    const lang = "ru";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
