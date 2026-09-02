(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NAT-01",
        "word": "analyze",
        "emoji": "📊",
        "form": "verb",
        "subtext": "examine, study",
        "synonyms": [
            "examine",
            "study"
        ],
        "definitions": [
            {
                "text": "To study something in detail to understand it.",
                "examples": [
                    "We need to analyze the results of the experiment."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "analyzed",
        "v3": "analyzed",
        "transcription": "ˈænəlaɪz",
        "group": "regular",
        "auxiliary": "have",
        "v4": "analyzing",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "analuein",
            "origin_meaning": "unloose, release"
        },
        "legacy_id": "en_elementary_basic_science_004",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "atmosphere",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌍",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The layer of gases around the Earth.",
                "examples": [
                    "The atmosphere protects us from the Sun."
                ]
            }
        ],
        "subtext": "air, sky",
        "synonyms": [
            "air",
            "sky"
        ],
        "countability": "uncountable",
        "transcription": "ˈætməsfɪər",
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "atmos + sphaira",
            "origin_meaning": "vapor + ball"
        },
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-02",
        "legacy_id": "en_elementary_nature_002",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "biodiversity",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌿",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The number and types of plants and animals that live in a particular area.",
                "examples": [
                    "The rainforest has high biodiversity."
                ]
            }
        ],
        "subtext": "variety of life",
        "synonyms": [
            "variety of life"
        ],
        "countability": "uncountable",
        "transcription": "ˌbaɪoʊdaɪˈvɜːrsəti",
        "etymology": {
            "origin_lang": "Greek + Latin",
            "origin_word": "bios + diversitas",
            "origin_meaning": "life + variety"
        },
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-03",
        "legacy_id": "en_elementary_environment_012",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-04",
        "word": "biological",
        "emoji": "🧬",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to biology or living things.",
                "examples": [
                    "My biological clock is waking me up early."
                ]
            }
        ],
        "subtext": "nature-related",
        "synonyms": [
            "nature-related"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "🇬🇧 ˌbaɪəˈlɒdʒɪkl | 🇺🇸 ˌbaɪəˈlɑːdʒɪkl",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "bios",
            "origin_meaning": "life"
        },
        "legacy_id": "en_elementary_basic_science_001",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "biology",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🧬",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The scientific study of living things.",
                "examples": [
                    "Biology is my favorite subject."
                ]
            }
        ],
        "subtext": "science subject",
        "synonyms": [
            "science subject"
        ],
        "countability": "uncountable",
        "transcription": "🇬🇧 baɪˈɒlədʒi | 🇺🇸 baɪˈɑːlədʒi",
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "biologia",
            "origin_meaning": "study of life"
        },
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-05",
        "legacy_id": "en_elementary_nature_003",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "carbon footprint",
        "level": "elementary",
        "theme": "nature",
        "emoji": "👣",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The amount of carbon dioxide produced by the activities of a person or group.",
                "examples": [
                    "We should try to reduce our carbon footprint."
                ]
            }
        ],
        "subtext": "environmental impact",
        "synonyms": [
            "environmental impact"
        ],
        "countability": "countable",
        "transcription": "ˈkɑːrbən ˈfʊtprɪnt",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-06",
        "legacy_id": "en_elementary_environment_013",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "cell",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🦠",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The smallest basic unit of a plant or animal.",
                "examples": [
                    "The human body is made of billions of cells."
                ]
            }
        ],
        "subtext": "living unit",
        "synonyms": [
            "living unit"
        ],
        "countability": "countable",
        "transcription": "sɛl",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-07",
        "legacy_id": "en_elementary_nature_004",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-08",
        "word": "chemical",
        "emoji": "🧪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to chemistry.",
                "examples": [
                    "The water contains harmful chemicals."
                ]
            }
        ],
        "subtext": "chemical substance",
        "comparative": null,
        "superlative": null,
        "transcription": "ˈkɛmɪkl",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_basic_science_002",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "chemistry",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🧪",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The scientific study of substances and how they react with each other.",
                "examples": [
                    "We have chemistry class on Tuesdays."
                ]
            }
        ],
        "subtext": "science subject",
        "synonyms": [
            "science subject"
        ],
        "countability": "uncountable",
        "transcription": "ˈkɛmɪstri",
        "etymology": {
            "origin_lang": "Arabic",
            "origin_word": "al-kimiya",
            "origin_meaning": "the art of transformation",
            "entered_via": "Greek"
        },
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-09",
        "legacy_id": "en_elementary_nature_005",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-10",
        "word": "chilly",
        "emoji": "❄️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Cold enough to make you feel uncomfortable.",
                "examples": [
                    "It's a bit chilly outside, so wear a coat.",
                    "The room felt chilly even with the heating on."
                ]
            }
        ],
        "subtext": "cool, cold",
        "synonyms": [
            "cool",
            "cold"
        ],
        "comparative": "chillier",
        "superlative": "the chilliest",
        "transcription": "ˈtʃɪli",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_weather_climate_004",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "climate",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌍",
        "form": "noun",
        "classification": "regular",
        "plural": "climates",
        "definitions": [
            {
                "text": "The general weather conditions in a particular area.",
                "examples": [
                    "I prefer a warm climate.",
                    "Climate change is a global issue."
                ]
            }
        ],
        "subtext": "climate change",
        "synonyms": [
            "weather patterns"
        ],
        "countability": "countable",
        "transcription": "ˈklaɪmət",
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "klima",
            "origin_meaning": "region, zone"
        },
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-11",
        "legacy_id": "en_elementary_nature_006",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "climate change",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌍",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Changes in the world's weather, in particular the fact that it is believed to be getting warmer.",
                "examples": [
                    "We must act now to stop climate change."
                ]
            }
        ],
        "subtext": "global warming",
        "synonyms": [
            "global warming"
        ],
        "countability": "uncountable",
        "transcription": "ˈklaɪmət tʃeɪndʒ",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-12",
        "legacy_id": "en_elementary_environment_014",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "coast",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🏖️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The part of the land next to the sea.",
                "examples": [
                    "They live on the south coast.",
                    "We walked along the coast."
                ]
            }
        ],
        "subtext": "seashore, coastline",
        "synonyms": [
            "seashore",
            "coastline"
        ],
        "countability": "countable",
        "transcription": "koʊst",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-13",
        "legacy_id": "en_elementary_nature_007",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "conservation",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🐼",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The protection of plants, animals, and natural areas.",
                "examples": [
                    "Conservation of wildlife is very important.",
                    "She is interested in forest conservation."
                ]
            }
        ],
        "subtext": "wildlife conservation",
        "synonyms": [
            "nature protection"
        ],
        "countability": "uncountable",
        "transcription": "🇬🇧 ˌkɒnsərˈveɪʃn | 🇺🇸 ˌkɑːnsərˈveɪʃn",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-14",
        "legacy_id": "en_elementary_environment_015",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-15",
        "word": "conserve",
        "emoji": "💧",
        "form": "verb",
        "subtext": "conserve energy / conserve water",
        "definitions": [
            {
                "text": "To keep and protect something from damage, change, or waste.",
                "examples": [
                    "We should try to conserve water during the summer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "conserved",
        "v3": "conserved",
        "synonyms": [
            "save",
            "protect"
        ],
        "transcription": "kənˈsɜːrv",
        "group": "regular",
        "auxiliary": "have",
        "v4": "conserving",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_environment_008",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-16",
        "word": "discover",
        "emoji": "🔎",
        "form": "verb",
        "subtext": "discover something new",
        "synonyms": [
            "discovery"
        ],
        "definitions": [
            {
                "text": "To find information, a place, or an object, especially for the first time.",
                "examples": [
                    "They discovered a new planet."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "discovered",
        "v3": "discovered",
        "transcription": "dɪˈskʌvər",
        "group": "regular",
        "auxiliary": "have",
        "v4": "discovering",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_basic_science_005",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "discovery",
        "level": "elementary",
        "theme": "nature",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The process of finding something for the first time.",
                "examples": [
                    "The discovery of penicillin changed medicine."
                ]
            }
        ],
        "subtext": "finding, breakthrough",
        "synonyms": [
            "finding",
            "breakthrough"
        ],
        "countability": "countable",
        "transcription": "dɪˈskʌvəri",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-17",
        "legacy_id": "en_elementary_nature_008",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "drought",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "droughts",
        "definitions": [
            {
                "text": "A long period when there is little or no rain.",
                "examples": [
                    "The crops died during the long drought.",
                    "The country is suffering from its worst drought in decades."
                ]
            }
        ],
        "subtext": "dry period, lack of rain",
        "synonyms": [
            "dry period",
            "lack of rain"
        ],
        "transcription": "draʊt",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-18",
        "legacy_id": "en_elementary_nature_026",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "earthquake",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌋",
        "form": "noun",
        "classification": "regular",
        "plural": "earthquakes",
        "definitions": [
            {
                "text": "A sudden violent shaking of the ground, causing great destruction.",
                "examples": [
                    "The earthquake destroyed many buildings.",
                    "They felt the earthquake in the morning."
                ]
            }
        ],
        "subtext": "natural disaster, seismic activity",
        "synonyms": [
            "natural disaster",
            "seismic activity"
        ],
        "countability": "countable",
        "transcription": "ˈɜːrθkweɪk",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-19",
        "legacy_id": "en_elementary_nature_009",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "ecology",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The relationship of living things to their environment and to each other.",
                "examples": [
                    "She is studying ecology at university."
                ]
            }
        ],
        "subtext": "nature science",
        "synonyms": [
            "nature science"
        ],
        "countability": "uncountable",
        "transcription": "🇬🇧 iˈkɒlədʒi | 🇺🇸 iˈkɑːlədʒi",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-20",
        "legacy_id": "en_elementary_environment_016",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "energy",
        "level": "elementary",
        "theme": "nature",
        "emoji": "⚡",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Power derived from physical or chemical resources to provide light and heat.",
                "examples": [
                    "We need to save energy at home.",
                    "Solar energy is good for the environment."
                ]
            }
        ],
        "subtext": "power, electricity",
        "synonyms": [
            "power",
            "electricity"
        ],
        "countability": "uncountable",
        "transcription": "ˈɛnərdʒi",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-21",
        "legacy_id": "en_elementary_environment_017",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "environment",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "plural": "environments",
        "definitions": [
            {
                "text": "The surroundings or conditions in which a person, animal, or plant lives.",
                "examples": [
                    "We must protect the environment.",
                    "He works in a friendly environment."
                ]
            }
        ],
        "subtext": "protect the environment",
        "synonyms": [
            "nature"
        ],
        "countability": "countable",
        "transcription": "ɪnˈvaɪrənmənt",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-22",
        "legacy_id": "en_elementary_environment_018",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-23",
        "word": "environmental",
        "emoji": "🌳",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the environment.",
                "examples": [
                    "We are facing an environmental crisis."
                ]
            }
        ],
        "subtext": "nature-related",
        "synonyms": [
            "nature-related"
        ],
        "comparative": "more environmental",
        "superlative": "the most environmental",
        "transcription": "ɪnˌvaɪrənˈmɛntl",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_environment_006",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-24",
        "word": "evolve",
        "emoji": "🧬",
        "form": "verb",
        "subtext": "slowly evolve / evolve into",
        "definitions": [
            {
                "text": "To develop gradually.",
                "examples": [
                    "Birds evolved from dinosaurs."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "evolved",
        "v3": "evolved",
        "transcription": "🇬🇧 ɪˈvɒlv | 🇺🇸 ɪˈvɑːlv",
        "group": "regular",
        "auxiliary": "have",
        "v4": "evolving",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_basic_science_006",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-25",
        "word": "examine",
        "emoji": "🔬",
        "form": "verb",
        "subtext": "examine a patient / examine a document",
        "synonyms": [
            "look at",
            "study"
        ],
        "definitions": [
            {
                "text": "To look at or consider a person or thing carefully in order to discover something about them.",
                "examples": [
                    "The doctor examined the child.",
                    "We need to examine the evidence."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "examined",
        "v3": "examined",
        "transcription": "ɪɡˈzæmɪn",
        "group": "regular",
        "auxiliary": "have",
        "v4": "examining",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_basic_science_007",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "experiment",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🧪",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A scientific test that is done to discover something or to see if an idea is true.",
                "examples": [
                    "We did an experiment in school today.",
                    "The experiment was a success."
                ]
            }
        ],
        "subtext": "scientific test",
        "synonyms": [
            "scientific test"
        ],
        "countability": "countable",
        "transcription": "ɪkˈspɛrɪmənt",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-26",
        "legacy_id": "en_elementary_nature_010",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "flood",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌊",
        "form": "noun",
        "classification": "regular",
        "plural": "floods",
        "definitions": [
            {
                "text": "An overflow of a large amount of water beyond its normal limits.",
                "examples": [
                    "The heavy rain caused a flood.",
                    "They had to leave their home during the flood."
                ]
            }
        ],
        "subtext": "natural disaster, heavy rain",
        "synonyms": [
            "natural disaster",
            "heavy rain"
        ],
        "countability": "countable",
        "transcription": "flʌd",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-27",
        "legacy_id": "en_elementary_nature_011",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "forecast",
        "level": "elementary",
        "theme": "nature",
        "emoji": "📺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "forecasts",
        "definitions": [
            {
                "text": "A statement of what is judged likely to happen in the future, especially regarding the weather.",
                "examples": [
                    "The weather forecast for tomorrow is sunny.",
                    "What is the economic forecast for next year?"
                ]
            }
        ],
        "subtext": "prediction, weather report",
        "synonyms": [
            "prediction",
            "weather report"
        ],
        "transcription": "ˈfɔːrkæst",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-28",
        "legacy_id": "en_elementary_nature_027",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "formula",
        "level": "elementary",
        "theme": "nature",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A set of letters and numbers that show what a substance is made of.",
                "examples": [
                    "The chemical formula for water is H2O."
                ]
            }
        ],
        "subtext": "scientific code",
        "synonyms": [
            "scientific code"
        ],
        "countability": "countable",
        "transcription": "ˈfɔːrmjulə",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-29",
        "legacy_id": "en_elementary_nature_012",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "fossil",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🦴",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The remains or shape of a dead animal or plant that has become rock after many years.",
                "examples": [
                    "They found a dinosaur fossil.",
                    "He collects fossils."
                ]
            }
        ],
        "subtext": "old remains",
        "synonyms": [
            "old remains"
        ],
        "countability": "countable",
        "transcription": "🇬🇧 ˈfɒsl | 🇺🇸 ˈfɑːsl",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-30",
        "legacy_id": "en_elementary_nature_013",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-31",
        "word": "freeze",
        "emoji": "❄️",
        "form": "verb",
        "subtext": "freeze water",
        "synonyms": [
            "turn to ice"
        ],
        "definitions": [
            {
                "text": "To become or cause to become hard because of extreme cold.",
                "examples": [
                    "The lake has frozen over."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "froze",
        "v3": "frozen",
        "transcription": "friːz",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_weather_climate_005",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "galaxy",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌌",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "One of the independent groups of stars in the universe.",
                "examples": [
                    "Our galaxy is called the Milky Way.",
                    "There are millions of galaxies in the universe."
                ]
            }
        ],
        "subtext": "group of stars",
        "synonyms": [
            "group of stars"
        ],
        "countability": "countable",
        "transcription": "ˈɡæləksi",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-32",
        "legacy_id": "en_elementary_nature_014",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "global warming",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌡️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A gradual increase in the world's temperature caused by gases in the air.",
                "examples": [
                    "Global warming is a serious problem.",
                    "We must work together to stop global warming."
                ]
            }
        ],
        "subtext": "climate warming",
        "synonyms": [
            "climate warming"
        ],
        "countability": "uncountable",
        "transcription": "ˈɡloʊbl ˈwɔːrmɪŋ",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-33",
        "legacy_id": "en_elementary_environment_019",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "gravity",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🍎",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The force that pulls objects toward the earth.",
                "examples": [
                    "Gravity keeps us on the ground.",
                    "The Moon has less gravity than the Earth."
                ]
            }
        ],
        "subtext": "laws of gravity",
        "synonyms": [
            "force of nature"
        ],
        "countability": "uncountable",
        "transcription": "ˈɡrævəti",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-34",
        "legacy_id": "en_elementary_nature_015",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-35",
        "word": "humid",
        "emoji": "💦",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a high level of water vapor in the atmosphere.",
                "examples": [
                    "The weather here is very hot and humid.",
                    "It's hard to breathe in the humid air."
                ]
            }
        ],
        "subtext": "sticky weather, moist air",
        "synonyms": [
            "sticky weather",
            "moist air"
        ],
        "comparative": "more humid",
        "superlative": "the most humid",
        "transcription": "ˈhjuːmɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_weather_climate_003",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "humidity",
        "level": "elementary",
        "theme": "nature",
        "emoji": "💦",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": null,
        "definitions": [
            {
                "text": "The amount of water vapor in the air.",
                "examples": [
                    "The humidity is very high today.",
                    "I don't like the heat and humidity here."
                ]
            }
        ],
        "subtext": "moisture in the air",
        "transcription": "hjuːˈmɪdəti",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-36",
        "legacy_id": "en_elementary_nature_028",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-37",
        "word": "invent",
        "emoji": "⚙️",
        "form": "verb",
        "subtext": "invent something",
        "synonyms": [
            "create",
            "make"
        ],
        "definitions": [
            {
                "text": "To design or create something that has never been made before.",
                "examples": [
                    "Who invented the telephone?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invented",
        "v3": "invented",
        "transcription": "ɪnˈvɛnt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "inventing",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_basic_science_008",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "invention",
        "level": "elementary",
        "theme": "nature",
        "emoji": "⚙️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Something that has never been made before.",
                "examples": [
                    "The light bulb was a great invention."
                ]
            }
        ],
        "subtext": "creation",
        "synonyms": [
            "creation"
        ],
        "countability": "countable",
        "transcription": "ɪnˈvɛnʃn",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-38",
        "legacy_id": "en_elementary_nature_016",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "laboratory",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🔬",
        "form": "noun",
        "classification": "regular",
        "plural": "laboratories",
        "definitions": [
            {
                "text": "A room or building used for scientific tests.",
                "examples": [
                    "The scientists are working in the laboratory."
                ]
            }
        ],
        "subtext": "lab",
        "synonyms": [
            "lab"
        ],
        "countability": "countable",
        "transcription": "🇬🇧 ləˈbɒrətri | 🇺🇸 ləˈbɑːrətri",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-39",
        "legacy_id": "en_elementary_nature_017",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "landfill",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🗑️",
        "form": "noun",
        "classification": "regular",
        "plural": "landfills",
        "definitions": [
            {
                "text": "A place where waste is buried under the ground.",
                "examples": [
                    "Too much plastic ends up in landfills."
                ]
            }
        ],
        "subtext": "rubbish dump",
        "synonyms": [
            "rubbish dump"
        ],
        "countability": "countable",
        "transcription": "ˈlændfɪl",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-40",
        "legacy_id": "en_elementary_environment_020",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-41",
        "word": "measure",
        "emoji": "📏",
        "form": "verb",
        "subtext": "measure length / measure temperature / measure success",
        "definitions": [
            {
                "text": "To discover the exact size or amount of something.",
                "examples": [
                    "Measure the width of the window.",
                    "The nurse measured my height."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "measured",
        "v3": "measured",
        "transcription": "ˈmɛʒər",
        "synonyms": [
            "calculate"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "measuring",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_basic_science_009",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "microscope",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🔬",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A scientific tool that makes very small things look larger.",
                "examples": [
                    "Look at the cell under the microscope.",
                    "We used a microscope in the science lab."
                ]
            }
        ],
        "subtext": "magnifying tool",
        "synonyms": [
            "magnifying tool"
        ],
        "countability": "countable",
        "transcription": "ˈmaɪkrəskoʊp",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-42",
        "legacy_id": "en_elementary_nature_018",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-43",
        "word": "mild",
        "emoji": "⛅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not severe or strong.",
                "examples": [
                    "We had a mild winter this year."
                ]
            }
        ],
        "subtext": "gentle, moderate",
        "synonyms": [
            "gentle",
            "moderate"
        ],
        "comparative": "milder",
        "superlative": "the mildest",
        "transcription": "maɪld",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_weather_climate_002",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "nature reserve",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🏞️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "An area of land that is protected so that plants and animals can live there safely.",
                "examples": [
                    "We visited the local nature reserve.",
                    "The nature reserve is home to many rare birds."
                ]
            }
        ],
        "subtext": "protected area",
        "synonyms": [
            "protected area"
        ],
        "countability": "countable",
        "transcription": "ˈneɪtʃər rɪˈzɜːrv",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-44",
        "legacy_id": "en_elementary_environment_021",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-45",
        "word": "observe",
        "emoji": "🧐",
        "form": "verb",
        "subtext": "carefully observe",
        "definitions": [
            {
                "text": "To watch someone or something carefully.",
                "examples": [
                    "The scientists observed the animals for several weeks."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "observed",
        "v3": "observed",
        "transcription": "əbˈzɜːrv",
        "synonyms": [
            "watch",
            "see"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "observing",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_basic_science_010",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "organism",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌿",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A single living plant, animal, or bacteria.",
                "examples": [
                    "A virus is a type of organism."
                ]
            }
        ],
        "subtext": "living thing",
        "synonyms": [
            "living thing"
        ],
        "countability": "countable",
        "transcription": "ˈɔːrɡənɪzəm",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-46",
        "legacy_id": "en_elementary_nature_019",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "physics",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🔭",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The scientific study of matter and energy.",
                "examples": [
                    "Physics can explain how planes fly."
                ]
            }
        ],
        "subtext": "science subject",
        "synonyms": [
            "science subject"
        ],
        "countability": "uncountable",
        "transcription": "ˈfɪzɪks",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-47",
        "legacy_id": "en_elementary_nature_020",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-48",
        "word": "pollute",
        "emoji": "🏭",
        "form": "verb",
        "subtext": "pollute the air / pollute the ocean",
        "definitions": [
            {
                "text": "To make water, air, or land dirty.",
                "examples": [
                    "Factories often pollute the environment."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "polluted",
        "v3": "polluted",
        "transcription": "pəˈluːt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "polluting",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_environment_009",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "pollution",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🏭",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Damage to the environment caused by harmful substances.",
                "examples": [
                    "Air pollution is a big problem here."
                ]
            }
        ],
        "subtext": "environmental pollution / air pollution",
        "countability": "uncountable",
        "transcription": "pəˈluːʃn",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-49",
        "legacy_id": "en_elementary_environment_022",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-50",
        "word": "predict",
        "emoji": "🔮",
        "form": "verb",
        "subtext": "predict the future",
        "definitions": [
            {
                "text": "To say that an event or action will happen in the future.",
                "examples": [
                    "It's hard to predict the weather accurately."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "predicted",
        "v3": "predicted",
        "transcription": "prɪˈdɪkt",
        "synonyms": [
            "forecast",
            "guess"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "predicting",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_basic_science_011",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-51",
        "word": "protect",
        "emoji": "🛡️",
        "form": "verb",
        "subtext": "protect the environment / protect wildlife / protect from harm",
        "definitions": [
            {
                "text": "To keep someone or something safe from injury, damage, or loss.",
                "examples": [
                    "We must protect the forest.",
                    "Sunglasses protect your eyes from the sun."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "protected",
        "v3": "protected",
        "transcription": "prəˈtɛkt",
        "synonyms": [
            "save",
            "guard"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "protecting",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_environment_010",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-52",
        "word": "react",
        "emoji": "🧪",
        "form": "verb",
        "subtext": "react to",
        "synonyms": [
            "respond"
        ],
        "definitions": [
            {
                "text": "To act in a particular way because of something that has happened.",
                "examples": [
                    "How did he react to the news?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reacted",
        "v3": "reacted",
        "transcription": "riˈækt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "reacting",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_basic_science_012",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-53",
        "word": "recycle",
        "emoji": "♻️",
        "form": "verb",
        "subtext": "recycle paper, recycle bins",
        "definitions": [
            {
                "text": "To process used materials so they can be used again.",
                "examples": [
                    "We recycle paper and glass."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recycled",
        "v3": "recycled",
        "transcription": "ˌriːˈsaɪkl",
        "synonyms": [
            "reuse"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "recycling",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_environment_011",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "recycling",
        "level": "elementary",
        "theme": "nature",
        "emoji": "♻️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The process of collecting and changing old paper, glass, plastic, etc. so it can be used again.",
                "examples": [
                    "Put the bottles in the recycling bin.",
                    "Recycling helps protect the environment."
                ]
            }
        ],
        "subtext": "waste management, eco-friendly",
        "synonyms": [
            "waste management",
            "eco-friendly"
        ],
        "countability": "uncountable",
        "transcription": "ˌriːˈsaɪklɪŋ",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-54",
        "legacy_id": "en_elementary_environment_023",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "recycling bin",
        "level": "elementary",
        "theme": "nature",
        "emoji": "♻️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A container for waste that can be recycled.",
                "examples": [
                    "Put the glass bottles in the recycling bin."
                ]
            }
        ],
        "subtext": "green bin",
        "synonyms": [
            "green bin"
        ],
        "countability": "countable",
        "transcription": "ˌriːˈsaɪklɪŋ bɪn",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-55",
        "legacy_id": "en_elementary_environment_024",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "renewable energy",
        "level": "elementary",
        "theme": "nature",
        "emoji": "♻️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Energy from sources that do not run out, like the sun or wind.",
                "examples": [
                    "Solar power is a type of renewable energy."
                ]
            }
        ],
        "subtext": "green energy",
        "synonyms": [
            "green energy"
        ],
        "countability": "uncountable",
        "transcription": "rɪˈnjuːəbl ˈɛnərdʒi",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-56",
        "legacy_id": "en_elementary_environment_025",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "research",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🔍",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Detailed study of a subject in order to discover new information.",
                "examples": [
                    "They are doing research into cancer."
                ]
            }
        ],
        "subtext": "investigation",
        "synonyms": [
            "investigation"
        ],
        "countability": "uncountable",
        "transcription": "rɪˈsɜːrtʃ",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-57",
        "legacy_id": "en_elementary_nature_021",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "resource",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌲",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Something such as useful land, or minerals such as oil or coal, that exists in a country.",
                "examples": [
                    "Water is a precious natural resource."
                ]
            }
        ],
        "subtext": "asset, supply",
        "synonyms": [
            "asset",
            "supply"
        ],
        "countability": "countable",
        "transcription": "ˈriːsɔːrs",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-58",
        "legacy_id": "en_elementary_environment_026",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "satellite",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🛰️",
        "form": "noun",
        "classification": "regular",
        "plural": "satellites",
        "definitions": [
            {
                "text": "A machine that goes around the Earth to send information.",
                "examples": [
                    "GPS uses satellites to find your location."
                ]
            }
        ],
        "subtext": "space machine",
        "synonyms": [
            "space machine"
        ],
        "countability": "countable",
        "transcription": "ˈsætəlaɪt",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-59",
        "legacy_id": "en_elementary_nature_022",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-60",
        "word": "scientific",
        "emoji": "🔬",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to science.",
                "examples": [
                    "She is doing scientific research."
                ]
            }
        ],
        "subtext": "science-related",
        "synonyms": [
            "science-related"
        ],
        "comparative": "more scientific",
        "superlative": "the most scientific",
        "transcription": "ˌsaɪənˈtɪfɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_basic_science_003",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "scientist",
        "level": "elementary",
        "theme": "nature",
        "emoji": "👨‍🔬",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "An expert who studies or works in one of the sciences.",
                "examples": [
                    "The scientist discovered a new type of bacteria."
                ]
            }
        ],
        "subtext": "researcher",
        "synonyms": [
            "researcher"
        ],
        "countability": "countable",
        "transcription": "ˈsaɪəntɪst",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-61",
        "legacy_id": "en_elementary_nature_023",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "solar energy",
        "level": "elementary",
        "theme": "nature",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Energy that uses the power of the sun to produce electricity.",
                "examples": [
                    "Solar energy is clean and renewable."
                ]
            }
        ],
        "subtext": "sun power",
        "synonyms": [
            "sun power"
        ],
        "countability": "uncountable",
        "transcription": "ˈsoʊlər ˈɛnərdʒi",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-62",
        "legacy_id": "en_elementary_environment_027",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "solar panel",
        "level": "elementary",
        "theme": "nature",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A device that changes energy from the sun into electricity.",
                "examples": [
                    "Many houses have solar panels on their roofs."
                ]
            }
        ],
        "subtext": "sun power tool",
        "synonyms": [
            "sun power tool"
        ],
        "countability": "countable",
        "transcription": "ˈsoʊlər ˈpænl",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-63",
        "legacy_id": "en_elementary_environment_028",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "solar power",
        "level": "elementary",
        "theme": "nature",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Energy from the sun that is used to create electricity.",
                "examples": [
                    "Many houses use solar power now.",
                    "Solar power is a clean energy source."
                ]
            }
        ],
        "subtext": "sun energy",
        "synonyms": [
            "sun energy"
        ],
        "countability": "uncountable",
        "transcription": "ˈsoʊlər ˈpaʊər",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-64",
        "legacy_id": "en_elementary_environment_029",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "substance",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🧪",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A material with particular physical characteristics.",
                "examples": [
                    "Water is a liquid substance."
                ]
            }
        ],
        "subtext": "material",
        "synonyms": [
            "material"
        ],
        "countability": "countable",
        "transcription": "ˈsʌbstəns",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-65",
        "legacy_id": "en_elementary_nature_024",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "sustainability",
        "level": "elementary",
        "theme": "nature",
        "emoji": "♻️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The quality of being able to continue over a long period.",
                "examples": [
                    "The company focuses on environmental sustainability.",
                    "Sustainability is key to our future."
                ]
            }
        ],
        "subtext": "environmental sustainability",
        "synonyms": [
            "eco-friendly"
        ],
        "countability": "uncountable",
        "transcription": "səˌsteɪnəˈbɪləti",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-66",
        "legacy_id": "en_elementary_environment_030",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "id": "A2-NAT-67",
        "word": "sustainable",
        "emoji": "♻️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Able to continue over a long period of time without damaging the environment.",
                "examples": [
                    "The company is moving towards sustainable energy sources."
                ]
            }
        ],
        "subtext": "eco-friendly",
        "synonyms": [
            "eco-friendly"
        ],
        "comparative": "more sustainable",
        "superlative": "the most sustainable",
        "transcription": "səˈsteɪnəbl",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "en_elementary_environment_007",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "valley",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🏞️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "An area of low land between hills or mountains.",
                "examples": [
                    "The village is in a beautiful valley.",
                    "A river flows through the valley."
                ]
            }
        ],
        "subtext": "low land, canyon",
        "synonyms": [
            "low land",
            "canyon"
        ],
        "countability": "countable",
        "transcription": "ˈvæli",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-68",
        "legacy_id": "en_elementary_nature_025",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "waste",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🗑️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Unwanted material or substances that are left after you have used something.",
                "examples": [
                    "Don't throw plastic waste in the river."
                ]
            }
        ],
        "subtext": "rubbish",
        "synonyms": [
            "rubbish"
        ],
        "countability": "uncountable",
        "transcription": "weɪst",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-69",
        "legacy_id": "en_elementary_environment_031",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "wind farm",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌬️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A group of wind turbines that produce electricity.",
                "examples": [
                    "There is a large wind farm on the hill.",
                    "Wind farms are becoming more common."
                ]
            }
        ],
        "subtext": "wind energy site",
        "synonyms": [
            "wind energy site"
        ],
        "countability": "countable",
        "transcription": "wɪnd fɑːrm",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-70",
        "legacy_id": "en_elementary_environment_032",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    },
    {
        "word": "wind turbine",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌬️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A tall machine with blades that are turned by the wind to produce electricity.",
                "examples": [
                    "There is a large wind farm with many turbines near the coast."
                ]
            }
        ],
        "subtext": "wind power tool",
        "synonyms": [
            "wind power tool"
        ],
        "countability": "countable",
        "transcription": "wɪnd ˈtɜːrbaɪn",
        "language": "en",
        "lang": "en",
        "id": "A2-NAT-71",
        "legacy_id": "en_elementary_environment_033",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
