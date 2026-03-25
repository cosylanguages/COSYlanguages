(function() {
    const data = [
    {
        "word": "լինել",
        "level": "baby",
        "theme": "personal_identity_A0",
        "emoji": "👤",
        "form": "verb",
        "classification": "irregular",
        "group": "-ել",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Գոյություն ունենալ, գտնվել որևէ վիճակում:",
                "examples": [
                    "Ես ուսանող եմ: Նա բժիշկ է:"
                ]
            }
        ],
        "v3": "եղել"
    },
    {
        "word": "ունենալ",
        "level": "baby",
        "theme": "personal_identity_A0",
        "emoji": "👜",
        "form": "verb",
        "classification": "irregular",
        "group": "-ալ",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Տիրապետել որևէ բանի:",
                "examples": [
                    "Ես ունեմ մեքենա: Դուք ունեք ժամանակ:"
                ]
            }
        ],
        "v3": "ունեցել"
    },
    {
        "word": "անել",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb",
        "classification": "irregular",
        "group": "-ել",
        "aspect": "action",
        "definitions": [
            {
                "text": "Կատարել որևէ գործողություն կամ գործունեություն:",
                "examples": [
                    "Ես անում եմ իմ տնային աշխատանքը:"
                ]
            }
        ],
        "v3": "արել"
    },
    {
        "word": "գնալ",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "classification": "irregular",
        "group": "-ալ",
        "aspect": "action",
        "definitions": [
            {
                "text": "Տեղափոխվել մի վայրից մյուսը:",
                "examples": [
                    "Ես գնում եմ տուն: Նրանք գնում են աշխատանքի:"
                ]
            }
        ],
        "v3": "գնացել"
    },
    {
        "word": "ուտել",
        "level": "baby",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "form": "verb",
        "classification": "irregular",
        "group": "-ել",
        "aspect": "action",
        "definitions": [
            {
                "text": "Սնունդ ընդունել:",
                "examples": [
                    "Մենք ուտում ենք ընթրիք:"
                ]
            }
        ],
        "v3": "կերել"
    },
    {
        "word": "խմել",
        "level": "baby",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "form": "verb",
        "classification": "regular",
        "group": "-ել",
        "aspect": "action",
        "definitions": [
            {
                "text": "Հեղուկ ընդունել:",
                "examples": [
                    "Ես խմում եմ ջուր:"
                ]
            }
        ],
        "v3": "խմել"
    }
];
    const lang = "hy";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
