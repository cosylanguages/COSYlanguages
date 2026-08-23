// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ru_intermediate_work_026",
        "word": "самозанятый",
        "lang": "ru",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Работа на себя, а не на компанию.",
                "examples": [
                    "Она работает как самозанятый графический дизайнер."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👨‍💻",
        "_legacy": {
            "gender": "он",
            "subtext": ""
        }
    },
    {
        "id": "ru_intermediate_environment_007",
        "word": "устойчивый",
        "lang": "ru",
        "level": "intermediate",
        "theme": "environment",
        "form": "adjective",
        "definitions": [
            {
                "text": "Использование ресурсов таким образом, чтобы не наносить ущерб окружающей среде в будущем.",
                "examples": [
                    "Нам нужны более устойчивые способы жизни."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "♻️",
        "_legacy": {
            "subtext": ""
        }
    }
];
    const lang = "ru";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
