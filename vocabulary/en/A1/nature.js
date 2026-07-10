(function() {
    const lang = "en";
    const data = [
    {
        "id": "en_starter_nature_050",
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
        "opposite": null,
        "transcription": "sən",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sunnō",
            "origin_meaning": "sun"
        }
    },
    {
        "id": "en_starter_nature_051",
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
        "opposite": null,
        "transcription": "reɪn",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "rigną"
        }
    },
    {
        "id": "en_starter_nature_052",
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
        "opposite": null,
        "transcription": "wɪnd",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "windaz"
        }
    },
    {
        "id": "en_starter_seasons_climate_004",
        "word": "spring",
        "emoji": "🌱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The season between winter and summer.",
                "examples": [
                    "Flowers grow in spring."
                ]
            }
        ],
        "subtext": "related to seasons climate",
        "opposite": null,
        "transcription": "spərɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "seasons_climate",
        "sub_theme": null
    },
    {
        "id": "en_starter_seasons_climate_005",
        "word": "summer",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The hottest season of the year.",
                "examples": [
                    "I love swimming in summer."
                ]
            }
        ],
        "subtext": "related to seasons climate",
        "opposite": null,
        "transcription": "ˈsəmər",
        "lang": "en",
        "level": "starter",
        "theme": "seasons_climate",
        "sub_theme": null
    },
    {
        "id": "en_starter_seasons_climate_006",
        "word": "autumn",
        "emoji": "🍂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "related to seasons climate",
        "synonyms": [
            "🇺🇸 fall"
        ],
        "definitions": [
            {
                "text": "The season between summer and winter.",
                "examples": [
                    "Leaves fall in autumn."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈɔtəm",
        "lang": "en",
        "level": "starter",
        "theme": "seasons_climate",
        "sub_theme": null
    },
    {
        "id": "en_starter_seasons_climate_007",
        "word": "winter",
        "emoji": "❄️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The coldest season of the year.",
                "examples": [
                    "It snows in winter."
                ]
            }
        ],
        "subtext": "related to seasons climate",
        "opposite": null,
        "transcription": "ˈwɪntər",
        "lang": "en",
        "level": "starter",
        "theme": "seasons_climate",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_053",
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
        "opposite": null,
        "transcription": "ˈəmˌbrɛlə",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_054",
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
        "opposite": null,
        "transcription": "ˈweðə(r)",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_055",
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
        "opposite": null,
        "transcription": "ˈtemprətʃə(r)",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_056",
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
        "opposite": null,
        "transcription": "snoʊ",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_057",
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
        "opposite": null,
        "transcription": "aɪs",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_seasons_climate_008",
        "word": "fall",
        "emoji": "🍂",
        "subtext": "fall down / fall off / fall in love / fall asleep",
        "form": "verb",
        "synonyms": [
            "🇬🇧 autumn"
        ],
        "definitions": [
            {
                "text": "To move down toward the ground.",
                "examples": [
                    "Leaves fall in autumn.",
                    "Be careful, don't fall."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fell",
        "v3": "fallen",
        "group": "irregular",
        "transcription": "fɔl",
        "lang": "en",
        "level": "starter",
        "theme": "seasons_climate",
        "sub_theme": null,
        "antonyms": [
            "rise"
        ]
    },
    {
        "id": "en_starter_seasons_climate_009",
        "word": "rise",
        "emoji": "🌅",
        "subtext": "rise up / sun rise / price rise",
        "form": "verb",
        "definitions": [
            {
                "text": "To move upwards; to increase in amount or level.",
                "examples": [
                    "The sun rises in the east.",
                    "Prices are rising every year."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rose",
        "v3": "risen",
        "group": "irregular",
        "transcription": "raɪz",
        "lang": "en",
        "level": "starter",
        "theme": "seasons_climate",
        "sub_theme": null,
        "antonyms": [
            "fall"
        ]
    },
    {
        "id": "en_starter_nature_058",
        "word": "sunny",
        "emoji": "☀️",
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
        "transcription": "ˈsəni",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "rainy"
        ]
    },
    {
        "id": "en_starter_nature_059",
        "word": "rainy",
        "emoji": "🌧️",
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
        "transcription": "ˈreɪni",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "sunny"
        ]
    },
    {
        "id": "en_starter_nature_060",
        "word": "hot",
        "emoji": "🔥",
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
        "transcription": "hɑt",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "cold"
        ]
    },
    {
        "id": "en_starter_nature_061",
        "word": "cold",
        "emoji": "❄️",
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
                    "I need a coat — it is very cold outside."
                ]
            }
        ],
        "comparative": "colder",
        "superlative": "the coldest",
        "transcription": "koʊld",
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
        ]
    },
    {
        "id": "en_starter_nature_062",
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
        "emoji": "☀️",
        "transcription": "wɔrm",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "cool"
        ]
    },
    {
        "id": "en_starter_nature_063",
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
        "emoji": "🌬️",
        "transcription": "kul",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "warm"
        ]
    },
    {
        "id": "en_starter_nature_064",
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
        "emoji": "💦",
        "transcription": "wɛt",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "dry"
        ]
    },
    {
        "id": "en_starter_nature_065",
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
        "emoji": "🏜️",
        "transcription": "draɪ",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "wet"
        ]
    },
    {
        "id": "en_starter_nature_066",
        "word": "cloudy",
        "emoji": "☁️",
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
        "transcription": "ˈklaʊdi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "sunny"
        ]
    },
    {
        "id": "en_starter_nature_067",
        "word": "windy",
        "emoji": "💨",
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
        "transcription": "ˈwɪndi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "calm"
        ]
    },
    {
        "id": "en_starter_nature_068",
        "word": "snowy",
        "emoji": "❄️",
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
        "transcription": "snoʊi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "sunny"
        ]
    },
    {
        "id": "en_starter_nature_069",
        "word": "foggy",
        "emoji": "🌫️",
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
        "transcription": "ˈfɑgi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "clear"
        ]
    },
    {
        "id": "en_starter_nature_070",
        "word": "stormy",
        "emoji": "⛈️",
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
        "transcription": "ˈstɔrmi",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "calm"
        ]
    },
    {
        "id": "en_starter_seasons_climate_010",
        "word": "season",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "One of the four periods of the year (spring, summer, autumn, winter).",
                "examples": [
                    "Winter is my favorite season."
                ]
            }
        ],
        "subtext": "time of year",
        "transcription": "ˈsizən",
        "lang": "en",
        "level": "starter",
        "theme": "seasons_climate",
        "sub_theme": null
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
