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
        "word": "considérer",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb"
    },
    {
        "word": "apparaître",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb"
    },
    {
        "word": "attendre",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb"
    },
    {
        "word": "servir",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb"
    },
    {
        "word": "construire",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb"
    },
    {
        "word": "rester",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb"
    },
    {
        "word": "atteindre",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb"
    },
    {
        "word": "tuer",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb"
    },
    {
        "word": "suggérer",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "lever",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb"
    },
    {
        "word": "exiger",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb"
    },
    {
        "word": "rapporter",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb"
    },
    {
        "word": "décider",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚖️",
        "form": "verb"
    },
    {
        "word": "expliquer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "développer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb"
    },
    {
        "word": "soutenir",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Aider ou encourager quelqu'un.",
                "examples": [
                    "Ma famille soutient mes décisions."
                ]
            }
        ],
        "tenses": {
            "present_simple": {
                "positive": ["soutiens", "soutiens", "soutient", "soutient", "soutenons", "soutenez", "soutiennent", "soutiennent"],
                "negative": ["ne soutiens pas", "ne soutiens pas", "ne soutient pas", "ne soutient pas", "ne soutenons pas", "ne soutenez pas", "ne soutiennent pas", "ne soutiennent pas"]
            }
        }
    },
    {
        "word": "frapper",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb"
    },
    {
        "word": "produire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb"
    },
    {
        "word": "faire face",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb"
    },
    {
        "word": "couvrir",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb"
    },
    {
        "word": "décrire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb"
    },
    {
        "word": "attraper",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb"
    },
    {
        "word": "postuler",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire une demande formelle pour un emploi.",
                "examples": [
                    "Elle a postulé pour le poste de manager."
                ]
            }
        ]
    },
    {
        "word": "embaucher",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner un emploi à quelqu'un.",
                "examples": [
                    "L'entreprise a embauché deux nouvelles personnes."
                ]
            }
        ]
    },
    {
        "word": "prendre sa retraite",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "definitions": [
            {
                "text": "Arrêter de travailler parce qu'on a atteint un certain âge.",
                "examples": [
                    "Mon père prendra sa retraite l'année prochaine."
                ]
            }
        ]
    },
    {
        "word": "avoir les moyens",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir assez d'argent pour payer quelque chose.",
                "examples": [
                    "Nous n'avons pas les moyens d'acheter un plus grand appartement."
                ]
            }
        ]
    },
    {
        "word": "se disputer",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ne pas être d'accord avec quelqu'un de façon colérique.",
                "examples": [
                    "Ils se disputent parfois à propos de l'argent."
                ]
            }
        ]
    },
    {
        "word": "faire confiance",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Croire que quelqu'un est honnête et fiable.",
                "examples": [
                    "Tu dois faire confiance à ton partenaire."
                ]
            }
        ]
    },
    {
        "word": "être d'accord",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👍",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir la même opinion que quelqu'un d'autre.",
                "examples": [
                    "Nous ne sommes pas toujours d'accord."
                ]
            }
        ]
    },
    {
        "word": "faire un compromis",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Accepter moins que ce que l'on veut pour que les deux parties soient satisfaites.",
                "examples": [
                    "Les bonnes relations nécessitent de faire des compromis."
                ]
            }
        ]
    },
    {
        "word": "recycler",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "definitions": [
            {
                "text": "Traiter des matériaux usagés pour qu'ils puissent être réutilisés.",
                "examples": [
                    "Nous recyclons le papier et le verre."
                ]
            }
        ]
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
