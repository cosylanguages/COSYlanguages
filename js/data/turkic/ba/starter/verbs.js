(function() {
    const data = [
    {
        "word": "булыу",
        "level": "baby",
        "theme": "personal_identity_A0",
        "emoji": "👤",
        "form": "verb",
        "classification": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Бар булыу, ниндәйҙер хәлдә булыу.",
                "examples": [
                    "Мин арығанмын. Ул табип."
                ]
            }
        ],
        "v3": "булған"
    },
    {
        "word": "эшләү",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Ниндәйҙер эш башҡарыу.",
                "examples": [
                    "Мин өй эшен эшләйем."
                ]
            }
        ],
        "v3": "эшләгән"
    },
    {
        "word": "барыу",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Бер урындан икенсе урынға күсеү.",
                "examples": [
                    "Мин эшкә барам."
                ]
            }
        ],
        "v3": "барған"
    },
    {
        "word": "ашау",
        "level": "baby",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Ризыҡты ауыҙға алып йотоу.",
                "examples": [
                    "Беҙ киске ашты сәғәт етелә ашайбыҙ."
                ]
            }
        ],
        "v3": "ашаған"
    },
    {
        "word": "эсеү",
        "level": "baby",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Шыйыҡлыҡты ауыҙға алып йотоу.",
                "examples": [
                    "Ул һәр иртә кофе эсә."
                ]
            }
        ],
        "v3": "эскән"
    },
    {
        "word": "күреү",
        "level": "baby",
        "theme": "health_body_A0",
        "emoji": "👁️",
        "form": "verb",
        "classification": "regular",
        "aspect": "both",
        "definitions": [
            {
                "text": "Күҙ менән күреү.",
                "examples": [
                    "Мин һине күрәм."
                ]
            }
        ],
        "v3": "күргән"
    }
];
    const lang = "ba";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
