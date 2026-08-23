(function() {
    const data = [
    {
        "id": "fr_upper_intermediate_politics_governance_001",
        "lang": "fr",
        "word": "civique",
        "level": "upper_intermediate",
        "theme": "people",
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
        ],
        "transcription": ""
    },
    {
        "id": "fr_upper_intermediate_serious_illness_treatment_001",
        "lang": "fr",
        "word": "chronique",
        "level": "upper_intermediate",
        "theme": "health_medicine",
        "emoji": "⏳🤒",
        "form": "adjective",
        "subtext": "douleur chronique, maladie de longue durée",
        "antonyms": [
            "aigu"
        ],
        "definitions": [
            {
                "text": "Qui dure longtemps ou revient souvent.",
                "examples": [
                    "Elle souffre de maux de dos chroniques."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "fr_upper_intermediate_serious_illness_treatment_002",
        "lang": "fr",
        "word": "préventif",
        "level": "upper_intermediate",
        "theme": "health_medicine",
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
        ],
        "transcription": ""
    },
    {
        "id": "fr_upper_intermediate_ethical_dilemmas_001",
        "lang": "fr",
        "word": "moral",
        "level": "upper_intermediate",
        "theme": "psychology",
        "emoji": "⚖️",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "décision morale",
            "éthique"
        ],
        "definitions": [
            {
                "text": "Relatif aux principes du bien et du mal.",
                "examples": [
                    "Elle a pris une décision morale en refusant l'argent."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "fr_upper_intermediate_ethical_dilemmas_002",
        "lang": "fr",
        "word": "éthique",
        "level": "upper_intermediate",
        "theme": "psychology",
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
        ],
        "transcription": ""
    },
    {
        "id": "fr_upper_intermediate_environment_policy_001",
        "lang": "fr",
        "word": "durable",
        "level": "upper_intermediate",
        "theme": "environment",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui peut durer longtemps ; qui respecte l'environnement.",
                "examples": [
                    "Le développement durable est essentiel."
                ]
            }
        ],
        "transcription": ""
    }
];
    const lang = "fr";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
