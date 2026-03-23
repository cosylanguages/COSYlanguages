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
        ]
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
