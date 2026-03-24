(function() {
    const data = [
    {
        "word": "заниматься садоводством",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🧑‍🌾",
        "form": "verb",
        "definitions": [
            {
                "text": "Работать в саду, выращивать растения.",
                "examples": [
                    "Ему нравится заниматься садоводством по выходным."
                ]
            }
        ]
    },
    {
        "word": "работать волонтёром",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🙋",
        "form": "verb",
        "definitions": [
            {
                "text": "Предлагать сделать что-то без оплаты.",
                "examples": [
                    "Она работает волонтёром в местном банке еды."
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
