(function() {
    const data = [
    {
        "word": "самозанятый",
        "level": "intermediate",
        "theme": "career_development_B1",
        "gender": "он",
        "emoji": "👨‍💻",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["фрилансер"],
        "definitions": [
            {
                "text": "Работа на себя, а не на компанию.",
                "examples": [
                    "Она работает как самозанятый графический дизайнер."
                ]
            }
        ]
    },
    {
        "word": "устойчивый",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "♻️",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["экологичный"],
        "definitions": [
            {
                "text": "Использование ресурсов таким образом, чтобы не наносить ущерб окружающей среде в будущем.",
                "examples": [
                    "Нам нужны более устойчивые способы жизни."
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
