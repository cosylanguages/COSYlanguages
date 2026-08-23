// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "fr_intermediate_work_001",
        "word": "indépendant",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Travailler pour soi-même plutôt que pour une entreprise.",
                "examples": [
                    "Elle est graphiste indépendante."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👨‍💻",
        "_legacy": {
            "subtext": "à son compte, freelance"
        }
    },
    {
        "id": "fr_intermediate_environment_001",
        "word": "durable",
        "lang": "fr",
        "level": "intermediate",
        "theme": "environment",
        "form": "adjective",
        "definitions": [
            {
                "text": "Utiliser les ressources d'une manière qui ne nuit pas à l'environnement pour l'avenir.",
                "examples": [
                    "Nous avons besoin de modes de vie plus durables."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "♻️",
        "_legacy": {
            "antonyms": ["insoutenable"]
        }
    }
];
    const lang = "fr";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
