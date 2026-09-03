(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-NAT-003",
        "word": "cloudy",
        "emoji": "\u2601\ufe0f",
        "form": "adjective",
        "subtext": "a cloudy sky / cloudy weather",
        "synonyms": [
            "overcast"
        ],
        "definitions": [
            {
                "text": "With many clouds in the sky.",
                "examples": [
                    "It is a cloudy day."
                ]
            }
        ],
        "comparative": "cloudier",
        "superlative": "the cloudiest",
        "transcription": "\u02c8kla\u028adi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "sunny"
        ],
        "legacy_id": "A1-NAT-04",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-ADJ-NAT-005",
        "word": "cold",
        "emoji": "\u2744\ufe0f",
        "form": "adjective",
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold",
        "definitions": [
            {
                "text": "Having a low temperature.",
                "examples": [
                    "The water is cold.",
                    "It is cold in winter."
                ]
            },
            {
                "text": "Having a low temperature; not warm.",
                "examples": [
                    "I need a coat \u2014 it is very cold outside."
                ]
            }
        ],
        "comparative": "colder",
        "superlative": "the coldest",
        "transcription": "ko\u028ald",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "kaldaz"
        },
        "antonyms": [
            "hot"
        ],
        "legacy_id": "A1-NAT-06",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-ADJ-NAT-007",
        "word": "cool",
        "form": "adjective",
        "subtext": "cool weather / a cool drink / stay cool",
        "definitions": [
            {
                "text": "Slightly cold; pleasantly low temperature.",
                "examples": [
                    "She prefers cool weather for working."
                ]
            }
        ],
        "comparative": "cooler",
        "superlative": "the coolest",
        "emoji": "\ud83c\udf2c\ufe0f",
        "transcription": "kul",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "warm"
        ],
        "legacy_id": "A1-NAT-08",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-ADJ-NAT-009",
        "word": "dry",
        "form": "adjective",
        "subtext": "dry weather / dry skin / keep dry",
        "definitions": [
            {
                "text": "Without water or liquid; not wet.",
                "examples": [
                    "The storage room must stay dry."
                ]
            }
        ],
        "comparative": "dryer",
        "superlative": "the dryest",
        "emoji": "\ud83c\udfdc\ufe0f",
        "transcription": "dra\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "wet"
        ],
        "legacy_id": "A1-NAT-10",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-ADJ-NAT-011",
        "word": "foggy",
        "emoji": "\ud83c\udf2b\ufe0f",
        "form": "adjective",
        "subtext": "foggy morning / very foggy",
        "synonyms": [
            "misty"
        ],
        "definitions": [
            {
                "text": "With a lot of fog; difficult to see.",
                "examples": [
                    "It is foggy this morning."
                ]
            }
        ],
        "comparative": "foggier",
        "superlative": "the foggiest",
        "transcription": "\u02c8f\u0251gi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "clear"
        ],
        "legacy_id": "A1-NAT-14",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-ADJ-NAT-013",
        "word": "hot",
        "emoji": "\ud83d\udd25",
        "form": "adjective",
        "subtext": "very hot, hot weather / hot weather / a hot drink / too hot",
        "definitions": [
            {
                "text": "Having a high temperature.",
                "examples": [
                    "The coffee is hot.",
                    "It is very hot in summer.",
                    "It is too hot to work comfortably today."
                ]
            }
        ],
        "comparative": "hotter",
        "superlative": "the hottest",
        "transcription": "h\u0251t",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "cold"
        ],
        "legacy_id": "A1-NAT-16",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-ADJ-NAT-015",
        "word": "rainy",
        "emoji": "\ud83c\udf27\ufe0f",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a lot of rain.",
                "examples": [
                    "It is a rainy day.",
                    "Wear a coat, it's rainy outside."
                ]
            }
        ],
        "subtext": "rainy day / rainy weather / rainy season",
        "synonyms": [
            "wet",
            "showery"
        ],
        "comparative": "rainier",
        "superlative": "the rainiest",
        "transcription": "\u02c8re\u026ani",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "sunny"
        ],
        "legacy_id": "A1-NAT-22",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-ADJ-NAT-017",
        "word": "snowy",
        "emoji": "\u2744\ufe0f",
        "form": "adjective",
        "subtext": "snowy mountains / a snowy winter",
        "synonyms": [
            "covered in snow"
        ],
        "definitions": [
            {
                "text": "With a lot of snow.",
                "examples": [
                    "We have snowy weather in January."
                ]
            }
        ],
        "comparative": "snowier",
        "superlative": "the snowiest",
        "transcription": "sno\u028ai",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "sunny"
        ],
        "legacy_id": "A1-NAT-28",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-ADJ-NAT-019",
        "word": "stormy",
        "emoji": "\u26c8\ufe0f",
        "form": "adjective",
        "subtext": "stormy weather / a stormy night",
        "synonyms": [
            "rough"
        ],
        "definitions": [
            {
                "text": "With a lot of rain and strong winds.",
                "examples": [
                    "It was a stormy night."
                ]
            }
        ],
        "comparative": "stormier",
        "superlative": "the stormiest",
        "transcription": "\u02c8st\u0254rmi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "calm"
        ],
        "legacy_id": "A1-NAT-31",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-ADJ-NAT-021",
        "word": "sunny",
        "emoji": "\u2600\ufe0f",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a lot of light from the sun.",
                "examples": [
                    "It is a sunny day.",
                    "I like sunny weather."
                ]
            }
        ],
        "subtext": "sunny day / sunny weather / sunny spell",
        "synonyms": [
            "bright",
            "clear"
        ],
        "comparative": "sunnier",
        "superlative": "the sunniest",
        "transcription": "\u02c8s\u0259ni",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "rainy"
        ],
        "legacy_id": "A1-NAT-35",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-ADJ-NAT-023",
        "word": "warm",
        "form": "adjective",
        "subtext": "warm weather / a warm welcome / keep warm",
        "definitions": [
            {
                "text": "Slightly hot; pleasantly heated.",
                "examples": [
                    "The office is warm and comfortable."
                ]
            }
        ],
        "comparative": "warmer",
        "superlative": "the warmest",
        "emoji": "\u2600\ufe0f",
        "transcription": "w\u0254rm",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "cool"
        ],
        "legacy_id": "A1-NAT-39",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-ADJ-NAT-025",
        "word": "wet",
        "form": "adjective",
        "subtext": "wet weather / wet clothes / get wet",
        "definitions": [
            {
                "text": "Covered with water or liquid.",
                "examples": [
                    "His jacket is wet from the rain."
                ]
            }
        ],
        "comparative": "wetter",
        "superlative": "the wettest",
        "emoji": "\ud83d\udca6",
        "transcription": "w\u025bt",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "dry"
        ],
        "legacy_id": "A1-NAT-42",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-ADJ-NAT-027",
        "word": "windy",
        "emoji": "\ud83d\udca8",
        "form": "adjective",
        "subtext": "a windy day / very windy",
        "synonyms": [
            "breezy"
        ],
        "definitions": [
            {
                "text": "With a lot of wind.",
                "examples": [
                    "It is very windy today."
                ]
            }
        ],
        "comparative": "windier",
        "superlative": "the windiest",
        "transcription": "\u02c8w\u026andi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "calm"
        ],
        "legacy_id": "A1-NAT-45",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Natural_World"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
