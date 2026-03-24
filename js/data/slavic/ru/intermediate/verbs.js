(function() {
    const data = [
    {
        "word": "заниматься садоводством",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🧑‍🌾",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Работать в саду, выращивать растения.",
                "examples": [
                    "Ему нравится заниматься садоводством по выходным."
                ]
            }
        ],
        "v3": "занимался садоводством"
    },
    {
        "word": "работать волонтёром",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🙋",
        "form": "verb",
        "group": "1-е спряжение",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Предлагать сделать что-то без оплаты.",
                "examples": [
                    "Она работает волонтёром в местном банке еды."
                ]
            }
        ],
        "v3": "работал волонтёром"
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
