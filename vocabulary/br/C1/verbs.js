// TODO: verify level classification
(function() {
    const lang = "br";
    const data = [
    {
        "word": "furchal",
        "level": "advanced",
        "theme": "actions",
        "emoji": "🔎",
        "form": "verb",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Klask pizh e-touez traoù kuzhet.",
                "examples": [
                    "Furchal e dielloù ar c'henstroll."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_advanced_actions_001"
    },
    {
        "word": "strishaat",
        "level": "advanced",
        "theme": "actions",
        "emoji": "📉",
        "form": "verb",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Lakaat strishoc'h pe bihanoc'h.",
                "examples": [
                    "Strishaat ar reolennoù war an amzer."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_advanced_actions_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
