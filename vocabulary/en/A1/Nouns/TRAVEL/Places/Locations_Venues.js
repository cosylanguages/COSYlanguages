(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-TRA-006",
        "word": "address",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "addresses",
        "subtext": "home address, email address",
        "definitions": [
            {
                "text": "The details of where a person lives or where a building is.",
                "examples": [
                    "What is your home address?",
                    "Please write your address here."
                ]
            }
        ],
        "transcription": "əˈdres",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-69",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-007",
        "word": "area",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "areas",
        "definitions": [
            {
                "text": "A particular part of a place, piece of land, or country.",
                "examples": [
                    "Do you live in this area?"
                ]
            }
        ],
        "subtext": "related to address location",
        "transcription": "ˈɛriə",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-70",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-008",
        "word": "art",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The creation of works such as paintings or sculptures.",
                "examples": [
                    "I love modern art."
                ]
            }
        ],
        "subtext": "related to places culture leisure",
        "transcription": "ɑrt",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-72",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-009",
        "word": "bank",
        "emoji": "🏦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "banks",
        "subtext": "bank account, go to the bank",
        "definitions": [
            {
                "text": "A place where people keep money and do financial transactions.",
                "examples": [
                    "The bank is near my office."
                ]
            }
        ],
        "transcription": "bæŋk",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Italian",
            "origin_word": "banca",
            "origin_meaning": "bench/table"
        },
        "legacy_id": "A1-TRV-73",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-010",
        "word": "bookshop",
        "emoji": "📚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bookshops",
        "subtext": "related to local places services",
        "synonyms": [
            "bookstore"
        ],
        "definitions": [
            {
                "text": "A shop where you can buy books.",
                "examples": [
                    "I bought a dictionary at the bookshop."
                ]
            }
        ],
        "transcription": "ˈbʊkˌʃɑp",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-75",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-011",
        "word": "building",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "buildings",
        "definitions": [
            {
                "text": "A structure with a roof and walls, such as a house or school.",
                "examples": [
                    "That building is very tall."
                ]
            }
        ],
        "subtext": "related to address location",
        "transcription": "ˈbɪldɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-76",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-012",
        "word": "cafe",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cafes",
        "definitions": [
            {
                "text": "A place where you can buy drinks and simple meals.",
                "examples": [
                    "Let's meet at the cafe."
                ]
            }
        ],
        "subtext": "related to local places services",
        "transcription": "kəˈfeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-77",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-013",
        "word": "centre",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "centres",
        "subtext": "center, city centre",
        "definitions": [
            {
                "text": "The middle point or part of something.",
                "examples": [
                    "The bank is in the city centre."
                ]
            }
        ],
        "transcription": "ˈsɛntər",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-78",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-014",
        "word": "cinema",
        "emoji": "🎬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cinemas",
        "subtext": "go to the cinema, movie theater",
        "definitions": [
            {
                "text": "A place where you go to watch films.",
                "examples": [
                    "Let's go to the cinema tonight."
                ]
            }
        ],
        "transcription": "ˈsɪnəmə",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-79",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-015",
        "word": "farm",
        "emoji": "🚜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "farms",
        "subtext": "work on a farm",
        "synonyms": [
            "countryside"
        ],
        "definitions": [
            {
                "text": "An area of land used for growing crops and keeping animals.",
                "examples": [
                    "They live on a big farm."
                ]
            }
        ],
        "transcription": "fɑrm",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-85",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-016",
        "word": "garden",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A public garden or large green area in a city for everyone to use.",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Old French",
            "origin_word": "jardin"
        },
        "transcription": "",
        "legacy_id": "A1-TRV-87",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-017",
        "word": "hospital",
        "emoji": "🏥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hospitals",
        "subtext": "go to hospital, hospital bed",
        "definitions": [
            {
                "text": "A place where sick or injured people receive medical care.",
                "examples": [
                    "He went to the hospital by ambulance."
                ]
            }
        ],
        "transcription": "ˈhɑˌspɪtəl",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "hospitale",
            "origin_meaning": "guest house"
        },
        "legacy_id": "A1-TRV-88",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-018",
        "word": "library",
        "emoji": "📚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "libraries",
        "definitions": [
            {
                "text": "A place where you can read or borrow books.",
                "examples": [
                    "I go to the library to study."
                ]
            }
        ],
        "subtext": "related to places culture leisure",
        "transcription": "ˈlaɪbrɛˌri",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-90",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-019",
        "word": "market",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "markets",
        "definitions": [
            {
                "text": "A place where people meet to buy and sell things.",
                "examples": [
                    "I buy fruit at the market."
                ]
            }
        ],
        "subtext": "related to local places services",
        "transcription": "ˈmɑːkɪt",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mercatus",
            "origin_meaning": "trading"
        },
        "legacy_id": "A1-TRV-93",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-020",
        "word": "museum",
        "emoji": "🏛️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "museums",
        "definitions": [
            {
                "text": "A building where you can look at important objects.",
                "examples": [
                    "The museum is very interesting."
                ]
            }
        ],
        "subtext": "related to places culture leisure",
        "transcription": "mˈjuziəm",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-94",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-021",
        "word": "neighbour",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "neighbours",
        "subtext": "next-door neighbour",
        "definitions": [
            {
                "text": "A person who lives next to you or near you.",
                "examples": [
                    "My neighbours are very nice."
                ]
            }
        ],
        "transcription": "ˈneɪbər",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-95",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-022",
        "word": "painting",
        "emoji": "🖼️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "paintings",
        "definitions": [
            {
                "text": "A picture made with paint.",
                "examples": [
                    "There is a beautiful painting on the wall."
                ]
            }
        ],
        "subtext": "related to places culture leisure",
        "transcription": "ˈpeɪnɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-98",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-023",
        "word": "park",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "parks",
        "definitions": [
            {
                "text": "A public garden where people go to walk and relax.",
                "examples": [
                    "Let's walk in the park.",
                    "The park has many trees."
                ]
            },
            {
                "text": "This is a place where you can see grass, trees, and flowers.",
                "examples": [
                    "Children play in the park."
                ]
            }
        ],
        "subtext": "related to local places services",
        "transcription": "pɑrk",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-99",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-024",
        "word": "place",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "places",
        "definitions": [
            {
                "text": "A particular area or position.",
                "examples": [
                    "This is a nice place."
                ]
            }
        ],
        "subtext": "related to local places services",
        "transcription": "pleɪs",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-100",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-025",
        "word": "police",
        "emoji": "👮",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "police force / call the police",
        "definitions": [
            {
                "text": "The official organization that makes sure people obey the law.",
                "examples": [
                    "Call the police!"
                ]
            }
        ],
        "transcription": "pəˈlis",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-101",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-026",
        "word": "restaurant",
        "emoji": "🍴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "restaurants",
        "subtext": "Italian restaurant, go to a restaurant",
        "definitions": [
            {
                "text": "A place where you pay to eat meals.",
                "examples": [
                    "We go to a restaurant on Fridays."
                ]
            }
        ],
        "transcription": "ˈrɛˌstrɑnt",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "French",
            "origin_word": "restaurer",
            "origin_meaning": "to restore"
        },
        "legacy_id": "A1-TRV-102",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-027",
        "word": "road",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "roads",
        "subtext": "on the road",
        "definitions": [
            {
                "text": "A way for cars and other vehicles to travel on.",
                "examples": [
                    "The road is very busy."
                ]
            }
        ],
        "transcription": "roʊd",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-103",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-028",
        "word": "school",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "schools",
        "definitions": [
            {
                "text": "A place where children go to learn.",
                "examples": [
                    "I go to school by bus.",
                    "My school is near my house."
                ]
            }
        ],
        "subtext": "related to local places services",
        "transcription": "skul",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "schola"
        },
        "legacy_id": "A1-TRV-106",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-029",
        "word": "shop",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "shops",
        "subtext": "go to a shop, local shop",
        "definitions": [
            {
                "text": "A place where you can buy things.",
                "examples": [
                    "The shop is open."
                ]
            }
        ],
        "transcription": "ʃɑp",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-107",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-030",
        "word": "station",
        "emoji": "🚉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "stations",
        "subtext": "train station, bus station",
        "definitions": [
            {
                "text": "A building where trains or buses stop for passengers.",
                "examples": [
                    "The station is ten minutes from here."
                ]
            }
        ],
        "transcription": "ˈsteɪʃən",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "French",
            "origin_word": "café",
            "entered_via": "Turkish kahve"
        },
        "legacy_id": "A1-TRV-108",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-031",
        "word": "street",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "streets",
        "definitions": [
            {
                "text": "A road in a town or city that has houses or other buildings along it.",
                "examples": [
                    "I live on a busy street."
                ]
            }
        ],
        "subtext": "related to address location",
        "transcription": "strit",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-109",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-032",
        "word": "supermarket",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "supermarkets",
        "subtext": "go to the supermarket",
        "definitions": [
            {
                "text": "A large shop selling food and other household goods.",
                "examples": [
                    "I go to the supermarket on Saturdays."
                ]
            }
        ],
        "transcription": "ˈsupərˌmɑrkɪt",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "politeia",
            "origin_meaning": "citizenship"
        },
        "legacy_id": "A1-TRV-110",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-033",
        "word": "theatre",
        "emoji": "🎭",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "theatres",
        "subtext": "related to places culture leisure",
        "synonyms": [
            "theater"
        ],
        "definitions": [
            {
                "text": "A building with a stage where people go to watch plays.",
                "examples": [
                    "We are going to the theatre tonight."
                ]
            }
        ],
        "transcription": "ˈθiətər",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-111",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-034",
        "word": "zoo",
        "emoji": "🦁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "zoos",
        "definitions": [
            {
                "text": "A place where many kinds of wild animals are kept so that people can look at them.",
                "examples": [
                    "Let's go to the zoo."
                ]
            }
        ],
        "subtext": "related to places culture leisure",
        "transcription": "zu",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-120",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-062",
        "word": "beach",
        "form": "noun",
        "transcription": "biːtʃ",
        "emoji": "🏖️",
        "definitions": [
            {
                "text": "A pebbly or sandy shore by the sea.",
                "examples": [
                    "Sit on the sandy beach.",
                    "A sunny beach day."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-NOUN-TRA-063",
        "word": "store",
        "form": "noun",
        "transcription": "stɔː",
        "emoji": "🏪",
        "definitions": [
            {
                "text": "A shop.",
                "examples": [
                    "A large department store.",
                    "A grocery store."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Locations_Venues"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
