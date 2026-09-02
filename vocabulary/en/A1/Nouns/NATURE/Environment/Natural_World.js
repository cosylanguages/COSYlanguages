(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-NAT-01",
        "word": "ice",
        "emoji": "🧊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "ice cube",
        "synonyms": [
            "frozen water"
        ],
        "definitions": [
            {
                "text": "Water that has frozen and become solid.",
                "examples": [
                    "Do you want ice in your drink?"
                ]
            }
        ],
        "transcription": "aɪs",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A1-NAT-18",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-02",
        "word": "rain",
        "emoji": "🌧️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "heavy rain, rain boots",
        "definitions": [
            {
                "text": "Water that falls from clouds in drops.",
                "examples": [
                    "There is a lot of rain in autumn."
                ]
            }
        ],
        "transcription": "reɪn",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "rigną"
        },
        "legacy_id": "A1-NAT-21",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-03",
        "word": "snow",
        "emoji": "❄️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "Soft white pieces of frozen water that fall from the sky when it is very cold.",
                "examples": [
                    "We have a lot of snow in winter.",
                    "The snow is very deep."
                ]
            }
        ],
        "subtext": "related to weather",
        "transcription": "snoʊ",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A1-NAT-27",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-04",
        "word": "sun",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "hot sun, morning sun",
        "definitions": [
            {
                "text": "The star that gives light and heat during the day.",
                "examples": [
                    "The sun is very strong today."
                ]
            }
        ],
        "transcription": "sən",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sunnō",
            "origin_meaning": "sun"
        },
        "legacy_id": "A1-NAT-34",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-05",
        "word": "temperature",
        "emoji": "🌡️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "temperatures",
        "subtext": "high temperature, body temperature",
        "definitions": [
            {
                "text": "A measure of how hot or cold something is.",
                "examples": [
                    "The temperature is thirty degrees.",
                    "Check the temperature."
                ]
            }
        ],
        "transcription": "ˈtemprətʃə(r)",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A1-NAT-37",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-06",
        "word": "umbrella",
        "emoji": "☂️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "umbrellas",
        "definitions": [
            {
                "text": "A folding frame covered in cloth used to protect you from rain.",
                "examples": [
                    "Take an umbrella — it is raining."
                ]
            }
        ],
        "subtext": "related to weather",
        "transcription": "ˈəmˌbrɛlə",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A1-NAT-38",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-07",
        "word": "weather",
        "emoji": "🌤️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "weather forecast, nice weather",
        "definitions": [
            {
                "text": "The state of the atmosphere at a particular time and place.",
                "examples": [
                    "What is the weather like today?",
                    "The weather is very nice."
                ]
            }
        ],
        "transcription": "ˈweðə(r)",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A1-NAT-41",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-08",
        "word": "wind",
        "emoji": "💨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "strong wind, cold wind",
        "definitions": [
            {
                "text": "Air that moves, sometimes strongly.",
                "examples": [
                    "The wind is very strong today."
                ]
            }
        ],
        "transcription": "wɪnd",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "windaz"
        },
        "legacy_id": "A1-NAT-44",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
