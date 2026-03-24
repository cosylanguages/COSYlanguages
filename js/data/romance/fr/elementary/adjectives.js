(function() {
    const data = [
    {
        "word": "nuageux",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "☁️",
        "form": "adjective"
    },
    {
        "word": "beau",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective"
    },
    {
        "word": "fort",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective"
    },
    {
        "word": "neigeux",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "❄️",
        "form": "adjective"
    },
    {
        "word": "venteux",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💨",
        "form": "adjective"
    },
    {
        "word": "en forme",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "💪",
        "form": "adjective",
        "definitions": [
            {
                "text": "En bonne santé physique grâce à un exercice régulier.",
                "examples": [
                    "Il court pour rester en forme."
                ]
            }
        ]
    },
    {
        "word": "en surpoids",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Plus lourd que ce qui est considéré comme sain.",
                "examples": [
                    "Le médecin a dit qu'il est légèrement en surpoids."
                ]
            }
        ]
    },
    {
        "word": "pratique",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👌",
        "form": "adjective",
        "opposite": "peu pratique",
        "definitions": [
            {
                "text": "Facile à utiliser ou adapté à vos besoins.",
                "examples": [
                    "Les achats en ligne sont très pratiques."
                ]
            }
        ]
    },
    {
        "word": "stressant",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "relaxant",
        "definitions": [
            {
                "text": "Causant de l'inquiétude ou de l'anxiété.",
                "examples": [
                    "Son travail est très stressant."
                ]
            }
        ]
    },
    {
        "word": "confortable",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛋️",
        "form": "adjective",
        "opposite": "inconfortable",
        "definitions": [
            {
                "text": "Physiquement relaxant ; ne causant pas de douleur ou de difficulté.",
                "examples": [
                    "La chaise de bureau est confortable."
                ]
            }
        ]
    },
    {
        "word": "populaire",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": "impopulaire",
        "definitions": [
            {
                "text": "Aimé ou apprécié par beaucoup de gens.",
                "examples": [
                    "Ce restaurant est très populaire."
                ]
            }
        ]
    }
];
    const lang = "fr";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
