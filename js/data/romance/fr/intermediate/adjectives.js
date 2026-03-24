(function() {
    const data = [
    {
        "word": "indépendant",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👨‍💻",
        "form": "adjective",
        "subtext": "à son compte, freelance",
        "definitions": [
            {
                "text": "Travailler pour soi-même plutôt que pour une entreprise.",
                "examples": [
                    "Elle est graphiste indépendante."
                ]
            }
        ]
    },
    {
        "word": "durable",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "♻️",
        "form": "adjective",
        "opposite": "insoutenable",
        "definitions": [
            {
                "text": "Utiliser les ressources d'une manière qui ne nuit pas à l'environnement pour l'avenir.",
                "examples": [
                    "Nous avons besoin de modes de vie plus durables."
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
