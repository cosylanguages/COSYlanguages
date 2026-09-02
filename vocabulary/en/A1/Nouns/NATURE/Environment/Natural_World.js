(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-NAT-031",
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
        "id": "A1-NOUN-NAT-032",
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
        "id": "A1-NOUN-NAT-033",
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
        "id": "A1-NOUN-NAT-034",
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
        "id": "A1-NOUN-NAT-035",
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
        "id": "A1-NOUN-NAT-036",
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
        "id": "A1-NOUN-NAT-037",
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
        "id": "A1-NOUN-NAT-038",
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
    },
    {
        "id": "A1-NOUN-NAT-050",
        "word": "moon",
        "form": "noun",
        "transcription": "muːn",
        "emoji": "🌙",
        "definitions": [
            {
                "text": "The natural satellite of the earth.",
                "examples": [
                    "Full moon in the night sky.",
                    "The moon orbits the earth."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-051",
        "word": "star",
        "form": "noun",
        "transcription": "stɑː",
        "emoji": "⭐",
        "definitions": [
            {
                "text": "A fixed luminous point in the night sky.",
                "examples": [
                    "Count the stars at night.",
                    "A bright shining star."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-052",
        "word": "sky",
        "form": "noun",
        "transcription": "skaɪ",
        "emoji": "☁️",
        "definitions": [
            {
                "text": "The region of the atmosphere above the earth.",
                "examples": [
                    "Blue sky with white clouds.",
                    "Look up at the night sky."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-053",
        "word": "sea",
        "form": "noun",
        "transcription": "siː",
        "emoji": "🌊",
        "definitions": [
            {
                "text": "The expanse of salt water that covers most of the earth's surface.",
                "examples": [
                    "Swim in the warm blue sea.",
                    "A calm sea."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-054",
        "word": "ocean",
        "form": "noun",
        "transcription": "ˈəʊʃn",
        "emoji": "🌊",
        "definitions": [
            {
                "text": "A very large expanse of sea.",
                "examples": [
                    "Pacific Ocean.",
                    "Dolphins swim in the ocean."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-055",
        "word": "river",
        "form": "noun",
        "transcription": "ˈrɪvə",
        "emoji": "🏞️",
        "definitions": [
            {
                "text": "A large natural stream of water.",
                "examples": [
                    "A boat trip down the river.",
                    "Cross the river over the bridge."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-056",
        "word": "lake",
        "form": "noun",
        "transcription": "leɪk",
        "emoji": "🏞️",
        "definitions": [
            {
                "text": "A large body of water surrounded by land.",
                "examples": [
                    "A calm mountain lake.",
                    "Feed ducks at the lake."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-057",
        "word": "mountain",
        "form": "noun",
        "transcription": "ˈmaʊntən",
        "emoji": "⛰️",
        "definitions": [
            {
                "text": "A large natural elevation of the earth's surface.",
                "examples": [
                    "Snowy mountain peak.",
                    "Climb up the mountain."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-058",
        "word": "hill",
        "form": "noun",
        "transcription": "hɪl",
        "emoji": "⛰️",
        "definitions": [
            {
                "text": "A naturally raised area of land, not as high as a mountain.",
                "examples": [
                    "Walk up the grassy hill.",
                    "A house on the hill."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-060",
        "word": "air",
        "form": "noun",
        "transcription": "eə",
        "emoji": "🌬️",
        "definitions": [
            {
                "text": "The invisible gaseous substance surrounding the earth.",
                "examples": [
                    "Fresh mountain air.",
                    "Breathe clean air."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-061",
        "word": "nature",
        "form": "noun",
        "transcription": "ˈneɪtʃə",
        "emoji": "🌿",
        "definitions": [
            {
                "text": "The physical world including plants, animals, and landscapes.",
                "examples": [
                    "Enjoy the beauty of nature.",
                    "Walk in nature."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-062",
        "word": "forest",
        "form": "noun",
        "transcription": "ˈfɒrɪst",
        "emoji": "🌲",
        "definitions": [
            {
                "text": "A large area covered chiefly with trees.",
                "examples": [
                    "A quiet pine forest.",
                    "Walk through the forest."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-063",
        "word": "wood",
        "form": "noun",
        "transcription": "wʊd",
        "emoji": "🪵",
        "definitions": [
            {
                "text": "A small forest, or the hard material from trees.",
                "examples": [
                    "Walk in the green woods.",
                    "Furniture made of wood."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-064",
        "word": "jungle",
        "form": "noun",
        "transcription": "ˈdʒʌŋɡl",
        "emoji": "🌴",
        "definitions": [
            {
                "text": "A dense tropical forest.",
                "examples": [
                    "Wild animals live in the jungle.",
                    "A thick green jungle."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-065",
        "word": "island",
        "form": "noun",
        "transcription": "ˈaɪlənd",
        "emoji": "🏝️",
        "definitions": [
            {
                "text": "A piece of land surrounded by water.",
                "examples": [
                    "A tropical island.",
                    "Sail to the island."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-066",
        "word": "sand",
        "form": "noun",
        "transcription": "sænd",
        "emoji": "🏖️",
        "definitions": [
            {
                "text": "Granular material composed of finely divided rock.",
                "examples": [
                    "Golden sand on the beach.",
                    "Walk on warm sand."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-067",
        "word": "rock",
        "form": "noun",
        "transcription": "rɒk",
        "emoji": "🪨",
        "definitions": [
            {
                "text": "The solid mineral material forming part of the surface of the earth.",
                "examples": [
                    "Climb on a big rock.",
                    "A hard stone rock."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-068",
        "word": "stone",
        "form": "noun",
        "transcription": "stəʊn",
        "emoji": "🪨",
        "definitions": [
            {
                "text": "A small piece of rock.",
                "examples": [
                    "Throw a small stone in the lake.",
                    "A stone wall."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Natural_World"
    },
    {
        "id": "A1-NOUN-NAT-069",
        "word": "earth",
        "form": "noun",
        "transcription": "ɜːθ",
        "emoji": "🌍",
        "definitions": [
            {
                "text": "The planet on which we live.",
                "examples": [
                    "Planet Earth.",
                    "Fertile soil earth."
                ]
            }
        ],
        "level": "starter",
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
