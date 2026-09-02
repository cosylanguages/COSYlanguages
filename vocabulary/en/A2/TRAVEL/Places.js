(function() {
    const lang = "en";
    const data = [
    {
        "word": "balcony",
        "level": "elementary",
        "theme": "places",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "plural": "balconies",
        "definitions": [
            {
                "text": "An area with a wall or bars around it that is joined to the outside wall of a building on an upper level.",
                "examples": [
                    "We have flowers on our balcony."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "transcription": "ˈbælkəni",
        "etymology": {
            "origin_lang": "Italian",
            "origin_word": "balcone",
            "origin_meaning": "scaffold"
        },
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-01",
        "legacy_id": "en_elementary_furniture_001",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "border",
        "level": "elementary",
        "theme": "places",
        "emoji": "🚧",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The line that separates two countries.",
                "examples": [
                    "We crossed the border into Spain.",
                    "The river forms the border between the two nations."
                ]
            }
        ],
        "subtext": "boundary, frontier",
        "synonyms": [
            "boundary",
            "frontier"
        ],
        "countability": "countable",
        "transcription": "ˈbɔːrdər",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-02",
        "legacy_id": "en_elementary_places_078",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "capital",
        "level": "elementary",
        "theme": "places",
        "emoji": "🏛️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The city where the government of a country is located.",
                "examples": [
                    "Paris is the capital of France.",
                    "London is a major capital city."
                ]
            }
        ],
        "subtext": "main city, government seat",
        "synonyms": [
            "main city",
            "government seat"
        ],
        "countability": "countable",
        "transcription": "ˈkæpɪtl",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "capitalis",
            "origin_meaning": "of the head"
        },
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-03",
        "legacy_id": "en_elementary_places_079",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "ceiling",
        "level": "elementary",
        "theme": "places",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "plural": "ceilings",
        "definitions": [
            {
                "text": "The top surface of a room.",
                "examples": [
                    "There is a light on the ceiling."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "transcription": "ˈsiːlɪŋ",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-04",
        "legacy_id": "en_elementary_furniture_002",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A2-TRV-05",
        "word": "central",
        "emoji": "📍",
        "form": "adjective",
        "definitions": [
            {
                "text": "In the middle of something.",
                "examples": [
                    "The hotel is in a central location."
                ]
            }
        ],
        "subtext": "middle, main",
        "synonyms": [
            "middle",
            "main"
        ],
        "comparative": "more central",
        "superlative": "the most central",
        "transcription": "ˈsɛntrəl",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_elementary_places_001",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "citizen",
        "level": "elementary",
        "theme": "places",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "citizens",
        "definitions": [
            {
                "text": "A person who is a member of a particular country.",
                "examples": [
                    "He is a British citizen.",
                    "The government should help its citizens."
                ]
            }
        ],
        "subtext": "national, inhabitant",
        "synonyms": [
            "national",
            "inhabitant"
        ],
        "transcription": "ˈsɪtɪzn",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-06",
        "legacy_id": "en_elementary_places_084",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "comfort",
        "level": "elementary",
        "theme": "places",
        "emoji": "🛋️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A pleasant feeling of being relaxed and free from pain.",
                "examples": [
                    "The hotel provides high levels of comfort.",
                    "I like to travel in comfort."
                ]
            }
        ],
        "subtext": "ease, relaxation",
        "synonyms": [
            "ease",
            "relaxation"
        ],
        "countability": "uncountable",
        "transcription": "ˈkʌmfərt",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-07",
        "legacy_id": "en_elementary_furniture_008",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "community",
        "level": "elementary",
        "theme": "places",
        "emoji": "👥",
        "form": "noun",
        "classification": "regular",
        "plural": "communities",
        "definitions": [
            {
                "text": "A group of people who live in the same area or share interests.",
                "examples": [
                    "She is active in her local community."
                ]
            }
        ],
        "subtext": "local community",
        "synonyms": [
            "share interests"
        ],
        "countability": "countable",
        "transcription": "kəˈmjuːnəti",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-08",
        "legacy_id": "en_elementary_places_080",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "curtain",
        "level": "elementary",
        "theme": "places",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "plural": "curtains",
        "definitions": [
            {
                "text": "A piece of cloth that hangs across a window.",
                "examples": [
                    "Close the curtains, please."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "transcription": "ˈkɜːrtn",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-09",
        "legacy_id": "en_elementary_furniture_003",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A2-TRV-10",
        "word": "decorate",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "decorate a room",
        "synonyms": [
            "redecorate",
            "interior decoration"
        ],
        "definitions": [
            {
                "text": "To make a place more attractive, especially by painting.",
                "examples": [
                    "They decorated the flat before moving in."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "decorated",
        "v3": "decorated",
        "transcription": "ˈdɛkəreɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "decorating",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_elementary_home_furnishings_001",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "dishwasher",
        "level": "elementary",
        "theme": "places",
        "emoji": "🧼",
        "form": "noun",
        "classification": "regular",
        "plural": "dishwashers",
        "definitions": [
            {
                "text": "A machine that washes dishes.",
                "examples": [
                    "Load the dishwasher after dinner."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "transcription": "🇬🇧 ˈdɪʃwɒʃər | 🇺🇸 ˈdɪʃwɑːʃər",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-11",
        "legacy_id": "en_elementary_furniture_004",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "estate agent",
        "level": "elementary",
        "theme": "places",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "estate agents",
        "definitions": [
            {
                "text": "A person whose job is to sell or rent houses and land for other people.",
                "examples": [
                    "We talked to the estate agent about viewing the house.",
                    "The estate agent showed us several flats."
                ]
            }
        ],
        "subtext": "realtor, property agent",
        "synonyms": [
            "realtor",
            "property agent"
        ],
        "transcription": "ɪˈsteɪt ˈeɪdʒənt",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-12",
        "legacy_id": "en_elementary_furniture_010",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "facility",
        "level": "elementary",
        "theme": "places",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "facilities",
        "definitions": [
            {
                "text": "A place or building used for a particular purpose.",
                "examples": [
                    "The sports facility is very modern.",
                    "The town needs more child care facilities."
                ]
            }
        ],
        "subtext": "amenity, service",
        "synonyms": [
            "amenity",
            "service"
        ],
        "transcription": "fəˈsɪləti",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-13",
        "legacy_id": "en_elementary_places_085",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A2-TRV-14",
        "word": "foreign",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Belonging or connected to a country that is not your own or not the one you are in.",
                "examples": [
                    "I love learning foreign languages.",
                    "He has many foreign friends."
                ]
            }
        ],
        "subtext": "from another country, alien",
        "synonyms": [
            "from another country",
            "alien"
        ],
        "comparative": "more foreign",
        "superlative": "the most foreign",
        "transcription": "🇬🇧 ˈfɒrən | 🇺🇸 ˈfɑːrən",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_elementary_places_002",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "garage",
        "level": "elementary",
        "theme": "places",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "plural": "garages",
        "definitions": [
            {
                "text": "A building where you keep a car.",
                "examples": [
                    "The car is in the garage."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "transcription": "ˈɡærɑːʒ",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-15",
        "legacy_id": "en_elementary_furniture_005",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "garden",
        "level": "elementary",
        "theme": "places",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A public garden or large green area in a city for everyone to use.",
                "examples": []
            }
        ],
        "countability": "countable",
        "language": "en",
        "lang": "en",
        "transcription": "ˈɡɑːrdn",
        "id": "A2-TRV-16",
        "legacy_id": "en_elementary_places_077",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A2-TRV-17",
        "word": "global",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the whole world.",
                "examples": [
                    "Global warming is a serious issue."
                ]
            }
        ],
        "subtext": "worldwide",
        "synonyms": [
            "worldwide"
        ],
        "comparative": "more global",
        "superlative": "the most global",
        "transcription": "ˈɡloʊbl",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_elementary_places_003",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A2-TRV-18",
        "word": "local",
        "emoji": "🏘️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to a particular area, city, or town.",
                "examples": [
                    "We buy food at the local market.",
                    "The local news starts at six."
                ]
            }
        ],
        "subtext": "nearby, regional",
        "synonyms": [
            "nearby",
            "regional"
        ],
        "comparative": "more local",
        "superlative": "the most local",
        "transcription": "ˈloʊkl",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_elementary_neighbourhood_local_024",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "microwave",
        "level": "elementary",
        "theme": "places",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
        "plural": "microwaves",
        "definitions": [
            {
                "text": "An electric oven that uses waves of energy to cook or heat food very quickly.",
                "examples": [
                    "Put the soup in the microwave."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "transcription": "ˈmaɪkrəweɪv",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-19",
        "legacy_id": "en_elementary_furniture_006",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A2-TRV-20",
        "word": "nearby",
        "emoji": "📍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not far away.",
                "examples": [
                    "They live in a nearby town.",
                    "Is there a post office nearby?"
                ]
            }
        ],
        "subtext": "close, near",
        "synonyms": [
            "close",
            "near"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˌnɪərˈbaɪ",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_elementary_places_005",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "neighbourhood",
        "level": "elementary",
        "theme": "places",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "plural": "neighbourhoods",
        "definitions": [
            {
                "text": "The area around your home.",
                "examples": [
                    "We live in a safe neighbourhood."
                ]
            }
        ],
        "subtext": "friendly neighbourhood",
        "synonyms": [
            "local area"
        ],
        "countability": "countable",
        "transcription": "ˈneɪbərhʊd",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-21",
        "legacy_id": "en_elementary_places_081",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A2-TRV-22",
        "word": "participate",
        "emoji": "🙋",
        "form": "verb",
        "subtext": "participate in something / participate in a meeting / participate in a discussion",
        "synonyms": [
            "take part",
            "join"
        ],
        "definitions": [
            {
                "text": "To take part in or become involved in an activity.",
                "examples": [
                    "Everyone is encouraged to participate in the project.",
                    "She participated in the marathon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "participated",
        "v3": "participated",
        "transcription": "pɑːrˈtɪsɪpeɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "participating",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_elementary_community_neighbourhood_local_001",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "pharmacy",
        "level": "elementary",
        "theme": "places",
        "emoji": "💊",
        "form": "noun",
        "classification": "regular",
        "plural": "pharmacies",
        "synonyms": [
            "🇬🇧 chemist"
        ],
        "definitions": [
            {
                "text": "A shop where you can buy medicine.",
                "examples": [
                    "I need to go to the pharmacy for some aspirin."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to local places services",
        "transcription": "ˈfɑːrməsi",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-23",
        "legacy_id": "en_elementary_places_082",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "region",
        "level": "elementary",
        "theme": "places",
        "emoji": "🗺️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A particular area in a country or the world.",
                "examples": [
                    "This region is famous for its wine.",
                    "The northern region of the country is very cold."
                ]
            }
        ],
        "subtext": "area, district",
        "synonyms": [
            "area",
            "district"
        ],
        "countability": "countable",
        "transcription": "ˈriːdʒən",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-24",
        "legacy_id": "en_elementary_places_083",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A2-TRV-25",
        "word": "remote",
        "emoji": "🏔️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Far away from other places.",
                "examples": [
                    "They live in a remote village in the mountains."
                ]
            }
        ],
        "subtext": "distant",
        "synonyms": [
            "distant"
        ],
        "comparative": "remoter",
        "superlative": "the remotest",
        "transcription": "rɪˈmoʊt",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_elementary_places_004",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "removal company",
        "level": "elementary",
        "theme": "places",
        "emoji": "🚚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "removal companies",
        "definitions": [
            {
                "text": "A company that helps people move their furniture and possessions to a new home.",
                "examples": [
                    "We hired a removal company to help us move.",
                    "The removal company arrived at 8 am."
                ]
            }
        ],
        "subtext": "moving company, movers",
        "synonyms": [
            "moving company",
            "movers"
        ],
        "transcription": "rɪˈmuːvl ˈkʌmpəni",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-26",
        "legacy_id": "en_elementary_furniture_009",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "vacuum cleaner",
        "level": "elementary",
        "theme": "places",
        "emoji": "🧹",
        "form": "noun",
        "classification": "regular",
        "plural": "vacuum cleaners",
        "definitions": [
            {
                "text": "A machine that cleans floors by sucking up dirt.",
                "examples": [
                    "I need to use the vacuum cleaner on the rug."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "transcription": "ˈvækjuːm ˈkliːnər",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-27",
        "legacy_id": "en_elementary_furniture_007",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "word": "volunteer",
        "level": "elementary",
        "theme": "places",
        "emoji": "🙋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "volunteers",
        "definitions": [
            {
                "text": "A person who does work without being paid for it.",
                "examples": [
                    "She works as a volunteer for a local charity.",
                    "The event needs more volunteers."
                ]
            }
        ],
        "subtext": "unpaid worker",
        "synonyms": [
            "unpaid worker"
        ],
        "transcription": "🇬🇧 ˌvɒlənˈtɪər | 🇺🇸 ˌvɑːlənˈtɪər",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-28",
        "legacy_id": "en_elementary_places_086",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Places"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
