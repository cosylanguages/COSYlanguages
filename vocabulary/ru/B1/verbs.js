// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ru_intermediate_social_033",
        "word": "заниматься садоводством",
        "lang": "ru",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "Работать в саду, выращивать растения.",
                "examples": [
                    "Ему нравится заниматься садоводством по выходным."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧑‍🌾",
        "_legacy": {
            "group": "1st_conj",
            "classification": "regular",
            "aspect": "action",
            "v3": "занимался садоводством",
            "auxiliary": "быть"
        }
    },
    {
        "id": "ru_intermediate_social_034",
        "word": "работать волонтёром",
        "lang": "ru",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "Предлагать сделать что-то без оплаты.",
                "examples": [
                    "Она работает волонтёром в местном банке еды."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🙋",
        "_legacy": {
            "group": "1st_conj",
            "classification": "regular",
            "aspect": "action",
            "v3": "работал волонтёром",
            "auxiliary": "быть"
        }
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();