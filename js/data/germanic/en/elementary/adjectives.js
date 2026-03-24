(function() {
    const data = [
    {
        "word": "beautiful",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective"
    },
    {
        "word": "strong",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective"
    },
    {
        "word": "blonde",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective"
    },
    {
        "word": "snowy",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "❄️",
        "form": "adjective"
    },
    {
        "word": "windy",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💨",
        "form": "adjective"
    },
    {
        "word": "cloudy",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "☁️",
        "form": "adjective"
    },
    {
        "word": "athletic",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "form": "adjective"
    },
    {
        "word": "fit",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "💪",
        "form": "adjective",
        "opposite": "unfit",
        "definitions": [
            {
                "text": "In good physical health because of regular exercise.",
                "examples": [
                    "He goes running to stay fit."
                ]
            }
        ]
    },
    {
        "word": "overweight",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "underweight",
        "definitions": [
            {
                "text": "Heavier than is considered healthy.",
                "examples": [
                    "The doctor said he is slightly overweight."
                ]
            }
        ]
    },
    {
        "word": "convenient",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👌",
        "form": "adjective",
        "opposite": "inconvenient",
        "definitions": [
            {
                "text": "Easy to use or suitable for what you need.",
                "examples": [
                    "Online shopping is very convenient."
                ]
            }
        ]
    },
    {
        "word": "stressful",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "relaxing",
        "definitions": [
            {
                "text": "Causing worry or anxiety.",
                "examples": [
                    "Her job is very stressful."
                ]
            }
        ]
    },
    {
        "word": "comfortable",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛋️",
        "form": "adjective",
        "opposite": "uncomfortable",
        "definitions": [
            {
                "text": "Physically relaxed; not causing pain or difficulty.",
                "examples": [
                    "The office chair is comfortable."
                ]
            }
        ]
    },
    {
        "word": "practical",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "impractical",
        "definitions": [
            {
                "text": "Useful and sensible in real situations.",
                "examples": [
                    "A car is practical in the countryside."
                ]
            }
        ]
    },
    {
        "word": "popular",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": "unpopular",
        "definitions": [
            {
                "text": "Liked or enjoyed by many people.",
                "examples": [
                    "This restaurant is very popular."
                ]
            }
        ]
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
