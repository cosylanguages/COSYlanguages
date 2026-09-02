(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-COM-01",
        "word": "call",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
        "form": "verb",
        "definitions": [
            {
                "text": "To telephone someone.",
                "examples": [
                    "I call my clients every morning before checking emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "called",
        "group": "regular",
        "transcription": "kɔl",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "hang up"
        ],
        "legacy_id": "A1-COMM-02",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices_Computing"
    },
    {
        "id": "A1-VERB-COM-02",
        "word": "call",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
        "form": "verb",
        "definitions": [
            {
                "text": "To telephone someone.",
                "examples": [
                    "I call my clients every morning before checking emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "called",
        "group": "regular",
        "transcription": "kɔl",
        "synonyms": [
            "phone"
        ],
        "auxiliary": "have",
        "v4": "calling",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "hang up"
        ],
        "legacy_id": "A1-COMM-03",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices_Computing"
    },
    {
        "id": "A1-VERB-COM-03",
        "word": "ring",
        "emoji": "🔔",
        "form": "verb",
        "subtext": "ring a bell",
        "synonyms": [
            "chime",
            "phone is ringing"
        ],
        "definitions": [
            {
                "text": "To make a sound like a bell.",
                "examples": [
                    "The phone is ringing."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rang",
        "v3": "rung",
        "group": "irregular",
        "transcription": "rɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "be silent"
        ],
        "legacy_id": "A1-COMM-27",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices_Computing"
    },
    {
        "id": "A1-VERB-COM-04",
        "word": "ring",
        "emoji": "🔔",
        "form": "verb",
        "subtext": "ring a bell",
        "synonyms": [
            "chime",
            "phone is ringing"
        ],
        "definitions": [
            {
                "text": "To make a sound like a bell.",
                "examples": [
                    "The phone is ringing."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rang",
        "v3": "rung",
        "group": "regular",
        "transcription": "rɪŋ",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "be silent"
        ],
        "legacy_id": "A1-COMM-28",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices_Computing"
    },
    {
        "id": "A1-VERB-COM-05",
        "word": "turn off",
        "emoji": "🌑",
        "subtext": "turn off the light / turn off the computer / turn off your phone",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a device stop working.",
                "examples": [
                    "Don't forget to turn off the lights.",
                    "She turns off her phone during meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned off",
        "v3": "turned off",
        "group": "regular",
        "transcription": "tərn ɔf",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "turn on"
        ],
        "legacy_id": "A1-COMM-34",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices_Computing"
    },
    {
        "id": "A1-VERB-COM-06",
        "word": "turn off",
        "emoji": "🌑",
        "subtext": "turn off the light / turn off the computer / turn off your phone",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a device stop working.",
                "examples": [
                    "Don't forget to turn off the lights.",
                    "She turns off her phone during meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned off",
        "v3": "turned off",
        "group": "regular",
        "transcription": "tərn ɔf",
        "auxiliary": "have",
        "v4": "turn offing",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "turn on"
        ],
        "legacy_id": "A1-COMM-35",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices_Computing"
    },
    {
        "id": "A1-VERB-COM-07",
        "word": "turn on",
        "emoji": "💡",
        "subtext": "turn on the light / turn on the TV / turn on the radio",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a device start working.",
                "examples": [
                    "Turn on the light, please.",
                    "He turns on his computer at nine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned on",
        "v3": "turned on",
        "group": "regular",
        "transcription": "tərn ɔn",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "turn off"
        ],
        "legacy_id": "A1-COMM-36",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices_Computing"
    },
    {
        "id": "A1-VERB-COM-08",
        "word": "turn on",
        "emoji": "💡",
        "subtext": "turn on the light / turn on the TV / turn on the radio",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a device start working.",
                "examples": [
                    "Turn on the light, please.",
                    "He turns on his computer at nine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned on",
        "v3": "turned on",
        "group": "regular",
        "transcription": "tərn ɔn",
        "auxiliary": "have",
        "v4": "turn oning",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "turn off"
        ],
        "legacy_id": "A1-COMM-37",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices_Computing"
    },
    {
        "id": "A1-VERB-COM-09",
        "word": "use",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer / use time",
        "form": "verb",
        "definitions": [
            {
                "text": "To employ something for a purpose.",
                "examples": [
                    "I use my phone for everything.",
                    "She uses public transport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "used",
        "group": "regular",
        "transcription": "juz",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "waste"
        ],
        "legacy_id": "A1-COMM-38",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices_Computing"
    },
    {
        "id": "A1-VERB-COM-10",
        "word": "use",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer / use time",
        "form": "verb",
        "definitions": [
            {
                "text": "To employ something for a purpose.",
                "examples": [
                    "I use my phone for everything.",
                    "She uses public transport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "used",
        "group": "regular",
        "transcription": "juz",
        "auxiliary": "have",
        "v4": "using",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "waste"
        ],
        "legacy_id": "A1-COMM-39",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices_Computing"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
