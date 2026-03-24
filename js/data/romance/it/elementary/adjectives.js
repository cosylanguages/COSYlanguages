(function() {
    const data = [
    {
        "word": "bello",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective"
    },
    {
        "word": "forte",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective"
    },
    {
        "word": "nevoso",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "❄️",
        "form": "adjective"
    },
    {
        "word": "ventoso",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💨",
        "form": "adjective"
    },
    {
        "word": "nuvoloso",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "☁️",
        "form": "adjective"
    },
    {
        "word": "in forma",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "💪",
        "form": "adjective",
        "definitions": [
            {
                "text": "In buona salute fisica grazie all'esercizio regolare.",
                "examples": [
                    "Va a correre per stare in forma."
                ]
            }
        ]
    },
    {
        "word": "sovrappeso",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Più pesante di quanto sia considerato sano.",
                "examples": [
                    "Il medico ha detto che è leggermente in sovrappeso."
                ]
            }
        ]
    },
    {
        "word": "comodo",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👌",
        "form": "adjective",
        "opposite": "scomodo",
        "definitions": [
            {
                "text": "Facile da usare o adatto alle tue necessità.",
                "examples": [
                    "Fare shopping online è molto comodo."
                ]
            }
        ]
    },
    {
        "word": "stressante",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "rilassante",
        "definitions": [
            {
                "text": "Che causa preoccupazione o ansia.",
                "examples": [
                    "Il suo lavoro è molto stressante."
                ]
            }
        ]
    },
    {
        "word": "confortevole",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛋️",
        "form": "adjective",
        "opposite": "scomodo",
        "definitions": [
            {
                "text": "Fisicamente rilassante; che non causa dolore o difficoltà.",
                "examples": [
                    "La sedia dell'ufficio è confortevole."
                ]
            }
        ]
    },
    {
        "word": "pratico",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "impensabile",
        "definitions": [
            {
                "text": "Utile e sensato in situazioni reali.",
                "examples": [
                    "Un'auto è pratica in campagna."
                ]
            }
        ]
    },
    {
        "word": "popolare",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": "impopolare",
        "definitions": [
            {
                "text": "Piaciuto o apprezzato da molte persone.",
                "examples": [
                    "Questo ristorante è molto popolare."
                ]
            }
        ]
    }
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
