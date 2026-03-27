(function() {
    const data = [
    {
        "word": "ser",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👤",
        "form": "verb",
        "classification": "irregular",
        "group": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Existir; ter uma qualidade ou estado permanente.",
                "examples": [
                    "Eu sou estudante. O carro é azul."
                ]
            }
        ],
        "v3": "sido"
    },
    {
        "word": "estar",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "📍",
        "form": "verb",
        "classification": "irregular",
        "group": "-ar (irregular)",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Estar num lugar ou estado temporário.",
                "examples": [
                    "Estou cansado. Estamos em Lisboa."
                ]
            }
        ],
        "v3": "estado"
    },
    {
        "word": "ter",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👜",
        "form": "verb",
        "classification": "irregular",
        "group": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Possuir algo.",
                "examples": [
                    "Tenho um cão. Tu tens tempo."
                ]
            }
        ],
        "v3": "tido"
    },
    {
        "word": "fazer",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb",
        "classification": "irregular",
        "group": "-er (irregular)",
        "aspect": "action",
        "definitions": [
            {
                "text": "Realizar uma ação ou atividade.",
                "examples": [
                    "Faço os trabalhos de casa. Ela faz café."
                ]
            }
        ],
        "v3": "feito"
    },
    {
        "word": "ir",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "form": "verb",
        "classification": "irregular",
        "group": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Mover-se de um lugar para outro.",
                "examples": [
                    "Vou ao cinema. Vamos para casa."
                ]
            }
        ],
        "v3": "ido"
    },
    {
        "word": "comer",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍎",
        "form": "verb",
        "classification": "regular",
        "group": "-er",
        "aspect": "action",
        "definitions": [
            {
                "text": "Ingerir alimentos.",
                "examples": [
                    "Eu como maçã. Eles comem peixe."
                ]
            }
        ],
        "v3": "comido"
    }
];
    const lang = "pt";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
