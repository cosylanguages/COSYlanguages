(function() {
    const data = [
    {
        "word": "sein",
        "level": "starter",
        "theme": "personal_identity_A0",
        "emoji": "👤",
        "form": "verb",
        "classification": "irregular",
        "group": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Existieren; eine Eigenschaft oder einen Zustand haben.",
                "examples": [
                    "Ich bin müde. Sie ist Ärztin."
                ]
            }
        ],
        "v3": "gewesen"
    },
    {
        "word": "haben",
        "level": "starter",
        "theme": "personal_identity_A0",
        "emoji": "👜",
        "form": "verb",
        "classification": "irregular",
        "group": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Etwas besitzen; etwas erleben.",
                "examples": [
                    "Ich habe einen Job. Er hat ein Auto."
                ]
            }
        ],
        "v3": "gehabt"
    },
    {
        "word": "machen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb",
        "classification": "regular",
        "group": "weak",
        "aspect": "action",
        "definitions": [
            {
                "text": "Eine Handlung oder Tätigkeit ausführen.",
                "examples": [
                    "Ich mache meine Hausaufgaben."
                ]
            }
        ],
        "v3": "gemacht"
    },
    {
        "word": "gehen",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "classification": "irregular",
        "group": "strong",
        "aspect": "action",
        "definitions": [
            {
                "text": "Sich von einem Ort zum anderen bewegen.",
                "examples": [
                    "Ich gehe zur Arbeit."
                ]
            }
        ],
        "v3": "gegangen"
    },
    {
        "word": "essen",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "form": "verb",
        "classification": "irregular",
        "group": "strong",
        "aspect": "action",
        "definitions": [
            {
                "text": "Nahrung in den Mund nehmen und schlucken.",
                "examples": [
                    "Wir essen um sieben Uhr zu Abend."
                ]
            }
        ],
        "v3": "gegessen"
    },
    {
        "word": "trinken",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "form": "verb",
        "classification": "irregular",
        "group": "strong",
        "aspect": "action",
        "definitions": [
            {
                "text": "Flüssigkeit in den Mund nehmen und schlucken.",
                "examples": [
                    "Sie trinkt jeden Morgen Kaffee."
                ]
            }
        ],
        "v3": "getrunken"
    }
];
    const lang = "de";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
