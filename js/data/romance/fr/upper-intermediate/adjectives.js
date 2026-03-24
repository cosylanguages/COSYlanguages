(function() {
    const data = [
    {
        "word": "civique",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🏛️",
        "form": "adjective",
        "subtext": "devoir civique, engagement citoyen",
        "definitions": [
            {
                "text": "Relatif à un citoyen, à une ville ou à leur vie politique.",
                "examples": [
                    "Voter est un devoir civique."
                ]
            }
        ]
    },
    {
        "word": "chronique",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "emoji": "⏳🤒",
        "form": "adjective",
        "subtext": "douleur chronique, maladie de longue durée",
        "opposite": "aigu",
        "definitions": [
            {
                "text": "Qui dure longtemps ou revient souvent.",
                "examples": [
                    "Elle souffre de maux de dos chroniques."
                ]
            }
        ]
    },
    {
        "word": "préventif",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "emoji": "🛡️",
        "form": "adjective",
        "subtext": "médecine préventive, mesure de précaution",
        "definitions": [
            {
                "text": "Conçu pour empêcher quelque chose de mal de se produire.",
                "examples": [
                    "La médecine préventive réduit les coûts à long terme."
                ]
            }
        ]
    },
    {
        "word": "moral",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "emoji": "⚖️",
        "form": "adjective",
        "subtext": "décision morale, éthique",
        "definitions": [
            {
                "text": "Relatif aux principes du bien et du mal.",
                "examples": [
                    "Elle a pris une décision morale en refusant l'argent."
                ]
            }
        ]
    },
    {
        "word": "éthique",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "emoji": "🤔⚖️",
        "form": "adjective",
        "subtext": "conduite éthique, déontologie",
        "definitions": [
            {
                "text": "Relatif à l'éthique ; conforme aux règles de conduite acceptées.",
                "examples": [
                    "Les entreprises doivent fonctionner de manière éthique."
                ]
            }
        ]
    },
    {
        "word": "durable",
        "level": "upper-intermediate",
        "theme": "environment_policy_B2",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui peut durer longtemps ; qui respecte l'environnement.",
                "examples": [
                    "Le développement durable est essentiel."
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
