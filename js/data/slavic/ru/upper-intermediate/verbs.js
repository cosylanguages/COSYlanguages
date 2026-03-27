(function() {
    const data = [
    {
        "word": "утверждать, что",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "доказывать, аргументировать",
        "definitions": [
            {
                "text": "Приводить доводы в поддержку определенной точки зрения.",
                "examples": [
                    "Некоторые утверждают, что удаленная работа снижает инновации."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "утверждал",
        "v3": "утверждала",
        "group": "1st_conj"
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
