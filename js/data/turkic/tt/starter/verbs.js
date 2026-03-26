(function() {
    const data = [
    {
        "word": "булырга",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👤",
        "form": "verb",
        "classification": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Бар булу, ниндидер хәлдә булу.",
                "examples": [
                    "Мин арыган. Ул табиб."
                ]
            }
        ],
        "v3": "булган"
    },
    {
        "word": "эшләргә",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Ниндидер эш башкару.",
                "examples": [
                    "Мин өй эшен эшлим."
                ]
            }
        ],
        "v3": "эшләгән"
    },
    {
        "word": "барырга",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Бер урыннан икенче урынга күчү.",
                "examples": [
                    "Мин эшкә барам."
                ]
            }
        ],
        "v3": "барган"
    },
    {
        "word": "ашарга",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍎",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Ризыкны авызга алып йоту.",
                "examples": [
                    "Без кичке ашны сәгать җидедә ашыйбыз."
                ]
            }
        ],
        "v3": "ашаган"
    },
    {
        "word": "эчергә",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Сыеклыкны авызга алып йоту.",
                "examples": [
                    "Ул һәр иртә кофе эчә."
                ]
            }
        ],
        "v3": "эчкән"
    },
    {
        "word": "күрергә",
        "level": "starter",
        "theme": "health_body_A1",
        "emoji": "👁️",
        "form": "verb",
        "classification": "regular",
        "aspect": "both",
        "definitions": [
            {
                "text": "Күз белән күрү.",
                "examples": [
                    "Мин сине күрәм."
                ]
            }
        ],
        "v3": "күргән"
    }
];
    const lang = "tt";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
