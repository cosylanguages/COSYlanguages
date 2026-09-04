(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-VERB-SOC-008",
        "word": "fish",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To try to catch fish using a net or a line.",
                "examples": [
                    "They fish in the river every summer."
                ]
            }
        ],
        "transcription": "fɪʃ",
        "emoji": "🎣",
        "_legacy": {
            "image": "images/vocabulary/actions/to fish.png",
            "subtext": "go fishing, fish for trout",
            "classification": "regular",
            "aspect": "action",
            "v2": "fished",
            "v3": "fished",
            "group": "regular",
            "auxiliary": "have",
            "v4": "fishing",
            "etymology": {
                "origin_lang": "Proto-Germanic",
                "origin_word": "fiskaz"
            }
        },
        "legacy_id": "B1-SOC-25",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations"
    },
    {
        "id": "B1-VERB-SOC-010",
        "word": "photograph",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To take a picture of someone or something using a camera.",
                "examples": [
                    "He spent the day photographing the local wildlife."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈfəʊtəɡrɑːf | 🇺🇸 ˈfoʊtəɡrɑːf",
        "emoji": "📷",
        "_legacy": {
            "subtext": "photograph a wedding, photograph wildlife",
            "classification": "regular",
            "aspect": "action",
            "v2": "photographed",
            "v3": "photographed",
            "group": "regular",
            "auxiliary": "have",
            "v4": "photographing"
        },
        "legacy_id": "B1-VERB-SOC-011",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations"
    },
    {
        "id": "B1-VERB-SOC-011",
        "word": "protest",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To express disagreement or opposition publicly.",
                "examples": [
                    "Workers protested against the proposed pay cuts."
                ]
            }
        ],
        "transcription": "prəˈtɛst",
        "emoji": "📢",
        "_legacy": {
            "subtext": "protest against / stage a protest / peaceful protest",
            "classification": "regular",
            "aspect": "action",
            "v2": "protested",
            "v3": "protested",
            "group": "regular",
            "auxiliary": "have",
            "v4": "protesting"
        },
        "legacy_id": "B1-VERB-SOC-012",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations"
    },
    {
        "id": "B1-VERB-SOC-012",
        "word": "raise",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To increase knowledge or concern about an issue.",
                "examples": [
                    "The campaign raised awareness of workplace mental health."
                ]
            }
        ],
        "transcription": "reɪz",
        "emoji": "📈",
        "_legacy": {
            "subtext": "raise awareness / raise a concern / raise an issue",
            "classification": "regular",
            "aspect": "action",
            "v2": "raised",
            "v3": "raised",
            "group": "regular",
            "auxiliary": "have",
            "v4": "raising"
        },
        "legacy_id": "B1-VERB-SOC-013",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations"
    },
    {
        "id": "B1-VERB-SOC-013",
        "word": "stand for",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To represent or tolerate something.",
                "examples": [
                    "What values does your company stand for?"
                ]
            }
        ],
        "transcription": "stænd fɔː",
        "emoji": "🛡️",
        "_legacy": {
            "subtext": "stand for something / not stand for / what does it stand for",
            "classification": "phrasal",
            "aspect": "stative",
            "v2": "stood for",
            "v3": "stood for",
            "group": "regular",
            "auxiliary": "have"
        },
        "legacy_id": "B1-VERB-SOC-014",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
