(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-COM-139",
        "word": "call",
        "emoji": "\ud83d\udcde",
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
        "transcription": "k\u0254l",
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
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-VERB-COM-141",
        "word": "ring",
        "emoji": "\ud83d\udd14",
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
        "transcription": "r\u026a\u014b",
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
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-VERB-COM-143",
        "word": "turn off",
        "emoji": "\ud83c\udf11",
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
        "transcription": "t\u0259rn \u0254f",
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
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-VERB-COM-145",
        "word": "turn on",
        "emoji": "\ud83d\udca1",
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
        "transcription": "t\u0259rn \u0254n",
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
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-VERB-COM-147",
        "word": "use",
        "emoji": "\ud83d\udee0\ufe0f",
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
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-VERB-COM-155",
        "word": "click",
        "emoji": "\ud83d\uddb1\ufe0f",
        "form": "verb",
        "transcription": "kl\u026ak",
        "definitions": [
            {
                "text": "Press a button on a computer mouse.",
                "examples": [
                    "Click on the link to open the page.",
                    "Double-click the file icon."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-VERB-COM-156",
        "word": "download",
        "emoji": "\ud83d\udce5",
        "form": "verb",
        "transcription": "\u02c8da\u028an\u02cclo\u028ad",
        "definitions": [
            {
                "text": "Copy data from the internet to a computer.",
                "examples": [
                    "Download the document to your desktop.",
                    "She downloaded a new song."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-VERB-COM-157",
        "word": "print",
        "emoji": "\ud83d\udda8\ufe0f",
        "form": "verb",
        "transcription": "pr\u026ant",
        "definitions": [
            {
                "text": "Produce text or images on paper using a printer.",
                "examples": [
                    "Print two copies of the contract.",
                    "He printed his boarding pass."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-VERB-COM-158",
        "word": "search",
        "emoji": "\ud83d\udd0d",
        "form": "verb",
        "transcription": "s\u025c\u02d0r\u02a7",
        "definitions": [
            {
                "text": "Try to find something by looking carefully.",
                "examples": [
                    "Search the web for information.",
                    "She searched her bag for her keys."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-VERB-COM-159",
        "word": "type",
        "emoji": "\u2328\ufe0f",
        "form": "verb",
        "transcription": "ta\u026ap",
        "definitions": [
            {
                "text": "Write using a keyboard.",
                "examples": [
                    "Type your full name in the box.",
                    "He types very fast on a laptop."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Verbs",
        "sub_subcategory": "Digital_Devices"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
