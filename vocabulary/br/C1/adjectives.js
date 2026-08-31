// TODO: verify level classification
(function() {
    const lang = "br";
    const data = [
    {
        "word": "meizadel",
        "level": "advanced",
        "theme": "describing",
        "emoji": "🔬",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "A sell ouzh meizadoù ha mennozhioù difetis.",
                "examples": [
                    "Ur preder meizadel eo."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_advanced_describing_001"
    },
    {
        "word": "kendalc'hus",
        "level": "advanced",
        "theme": "describing",
        "emoji": "🔄",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "A bad hep paouez e-pad un amzer hir.",
                "examples": [
                    "Ur striv kendalc'hus a zo ret."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_advanced_describing_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
