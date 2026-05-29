(function() {
    const data = [
    {
        "id": "en_starter_places_078",
        "word": "garden",
        "image": "images/vocabulary/actions/to garden.png",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_079",
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
        "opposite": null,
        "transcription": "ˈmɑːkɪt",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_080",
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
        "opposite": null,
        "transcription": "pɑrk",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_081",
        "word": "school",
        "image": "images/vocabulary/actions/to go to school.png",
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
        "opposite": null,
        "transcription": "skul",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_082",
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
        "opposite": null,
        "transcription": "ʃɑp",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_types_of_accommodation_001",
        "word": "rent",
        "emoji": "🏠",
        "subtext": "rent a flat / rent a property / rent out a room",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay money to use property belonging to someone else.",
                "examples": [
                    "They rent a two-bedroom flat near the city centre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rented",
        "v3": "rented",
        "group": "regular",
        "opposite": "own",
        "transcription": "rɛnt",
        "lang": "en",
        "level": "starter",
        "theme": "types_of_accommodation",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_083",
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
        "opposite": null,
        "transcription": "ˈneɪbər",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_084",
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
        "opposite": null,
        "transcription": "ˈhɑˌspɪtəl",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_085",
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
        "opposite": null,
        "transcription": "ˈrɛˌstrɑnt",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_086",
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
        "opposite": null,
        "transcription": "bæŋk",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_087",
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
        "opposite": null,
        "transcription": "ˈsteɪʃən",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_088",
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
        "opposite": null,
        "transcription": "ˈsupərˌmɑrkɪt",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_089",
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
        "opposite": null,
        "transcription": "strit",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_090",
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
        "opposite": null,
        "transcription": "ˈbɪldɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_091",
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
        "opposite": null,
        "transcription": "kəˈfeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_092",
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
        "opposite": null,
        "transcription": "ˈsɛntər",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_093",
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
        "opposite": null,
        "transcription": "ˈɛriə",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_prepositions_place_009",
        "word": "there",
        "emoji": "👉",
        "form": "adverb",
        "definitions": [
            {
                "text": "In, at, or to that place.",
                "examples": [
                    "The book is over there."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "opposite": null,
        "transcription": "ðɛr",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null
    },
    {
        "id": "en_starter_cities_towns_001",
        "word": "city",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cities",
        "definitions": [
            {
                "text": "A large and important town.",
                "examples": [
                    "London is a big city."
                ]
            }
        ],
        "subtext": "related to cities towns",
        "opposite": null,
        "transcription": "ˈsɪti",
        "lang": "en",
        "level": "starter",
        "theme": "cities_towns",
        "sub_theme": null
    },
    {
        "id": "en_starter_cities_towns_002",
        "word": "town",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "towns",
        "definitions": [
            {
                "text": "A place where people live that is larger than a village but smaller than a city.",
                "examples": [
                    "He lives in a small town."
                ]
            }
        ],
        "subtext": "related to cities towns",
        "opposite": null,
        "transcription": "taʊn",
        "lang": "en",
        "level": "starter",
        "theme": "cities_towns",
        "sub_theme": null
    },
    {
        "id": "en_starter_cities_towns_003",
        "word": "village",
        "emoji": "🏡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "villages",
        "definitions": [
            {
                "text": "A very small town in the country.",
                "examples": [
                    "My grandmother lives in a quiet village."
                ]
            }
        ],
        "subtext": "related to cities towns",
        "opposite": null,
        "transcription": "ˈvɪlɪʤ",
        "lang": "en",
        "level": "starter",
        "theme": "cities_towns",
        "sub_theme": null
    },
    {
        "id": "en_starter_countries_capitals_002",
        "word": "country",
        "emoji": "🏳️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "countries",
        "definitions": [
            {
                "text": "An area of land that has its own government and army.",
                "examples": [
                    "France is a beautiful country."
                ]
            }
        ],
        "subtext": "related to countries capitals",
        "opposite": null,
        "transcription": "ˈkəntri",
        "lang": "en",
        "level": "starter",
        "theme": "countries_capitals",
        "sub_theme": null
    },
    {
        "id": "en_starter_prepositions_place_010",
        "word": "with",
        "form": "preposition",
        "opposite": null,
        "definitions": [
            {
                "text": "In the company of or including.",
                "examples": [
                    "I like coffee with milk."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "➕",
        "transcription": "wɪθ",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null
    },
    {
        "id": "en_starter_prepositions_place_011",
        "word": "without",
        "form": "preposition",
        "opposite": null,
        "definitions": [
            {
                "text": "Not having or including something.",
                "examples": [
                    "I prefer tea without sugar."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "➖",
        "transcription": "wɪˈθaʊt",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null
    },
    {
        "id": "en_starter_prepositions_place_012",
        "word": "from",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to show the place where someone or something starts.",
                "examples": [
                    "He is from Spain."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "opposite": null,
        "emoji": "⬅️",
        "transcription": "frəm",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null
    },
    {
        "id": "en_starter_countries_capitals_003",
        "word": "world",
        "emoji": "🌎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "worlds",
        "definitions": [
            {
                "text": "The Earth and all the people, places, and things on it.",
                "examples": [
                    "Travel around the world."
                ]
            }
        ],
        "subtext": "related to countries capitals",
        "opposite": null,
        "transcription": "wərld",
        "lang": "en",
        "level": "starter",
        "theme": "countries_capitals",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_094",
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
        "opposite": null,
        "transcription": "pleɪs",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_095",
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
        "opposite": null,
        "transcription": "əˈdres",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_096",
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
        "opposite": null,
        "transcription": "ˈbʊkˌʃɑp",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_097",
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
        "opposite": null,
        "transcription": "roʊd",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_prepositions_place_013",
        "word": "above",
        "image": "images/grammar/prepositions/above.png",
        "form": "preposition",
        "opposite": "below",
        "definitions": [
            {
                "text": "In or to a higher position than something else.",
                "examples": [
                    "The shelf is above the desk."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "⬆️",
        "transcription": "əˈbəv",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null
    },
    {
        "id": "en_starter_prepositions_place_014",
        "word": "below",
        "image": "images/grammar/prepositions/below.png",
        "form": "preposition",
        "opposite": "above",
        "definitions": [
            {
                "text": "In or to a lower position than something else.",
                "examples": [
                    "The desk is below the shelf."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "⬇️",
        "transcription": "bɪˈloʊ",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null
    },
    {
        "id": "en_starter_prepositions_place_015",
        "word": "inside",
        "form": "preposition",
        "opposite": "outside",
        "definitions": [
            {
                "text": "In or into a container, room, or building.",
                "examples": [
                    "Go inside the house."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🏠",
        "transcription": "ˌɪnˈsaɪd",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null
    },
    {
        "id": "en_starter_prepositions_place_016",
        "word": "outside",
        "form": "preposition",
        "opposite": "inside",
        "definitions": [
            {
                "text": "Not in a particular room or building.",
                "examples": [
                    "It is cold outside."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🌳",
        "transcription": "ˈaʊtˈsaɪd",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_098",
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
        "opposite": null,
        "transcription": "pəˈlis",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_099",
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
        "opposite": null,
        "transcription": "fɑrm",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_100",
        "word": "live",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "To have your home in a place; to be alive.",
                "examples": [
                    "He lives in a flat near the centre.",
                    "We live together."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "lived",
        "group": "regular",
        "transcription": "lɪv",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_types_of_accommodation_002",
        "word": "stay",
        "emoji": "🏨",
        "subtext": "stay at home / stay in a hotel / stay up late / stay with someone",
        "opposite": "leave",
        "oppositeEmoji": "🚪",
        "form": "verb",
        "definitions": [
            {
                "text": "To continue to be in a place.",
                "examples": [
                    "I stay at home on Sundays.",
                    "We are staying in a hotel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stayed",
        "v3": "stayed",
        "group": "regular",
        "transcription": "steɪ",
        "lang": "en",
        "level": "starter",
        "theme": "types_of_accommodation",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_101",
        "word": "safe",
        "form": "adjective",
        "opposite": "dangerous",
        "oppositeEmoji": "🧨",
        "subtext": "safe area / safe to do / feel safe",
        "synonyms": [
            "secure"
        ],
        "definitions": [
            {
                "text": "Not dangerous; protected from harm.",
                "examples": [
                    "This neighbourhood is very safe."
                ]
            }
        ],
        "comparative": "safer",
        "superlative": "the safest",
        "emoji": "🛡️",
        "transcription": "seɪf",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_102",
        "word": "dangerous",
        "form": "adjective",
        "opposite": "safe",
        "oppositeEmoji": "🛡️",
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "synonyms": [
            "risky"
        ],
        "definitions": [
            {
                "text": "Likely to cause harm.",
                "examples": [
                    "The commute on that road is dangerous."
                ]
            }
        ],
        "comparative": "more dangerous",
        "superlative": "the most dangerous",
        "emoji": "🧨",
        "transcription": "ˈdeɪnʤərəs",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_distance_004",
        "word": "near",
        "form": "adjective",
        "opposite": "far",
        "oppositeEmoji": "🔭",
        "subtext": "near here / near the station",
        "synonyms": [
            "close"
        ],
        "definitions": [
            {
                "text": "Not far away in distance.",
                "examples": [
                    "The station is near the office."
                ]
            }
        ],
        "comparative": "nearer",
        "superlative": "the nearest",
        "emoji": "📍",
        "transcription": "nɪr",
        "lang": "en",
        "level": "starter",
        "theme": "distance",
        "sub_theme": null
    },
    {
        "id": "en_starter_distance_005",
        "word": "far",
        "form": "adjective",
        "opposite": "close",
        "oppositeEmoji": "📍",
        "subtext": "far away / far from",
        "synonyms": [
            "distant"
        ],
        "definitions": [
            {
                "text": "A long way away in distance.",
                "examples": [
                    "Is it far from here?"
                ]
            }
        ],
        "comparative": "farther",
        "superlative": "the farthest",
        "emoji": "🔭",
        "transcription": "fɑr",
        "lang": "en",
        "level": "starter",
        "theme": "distance",
        "sub_theme": null
    },
    {
        "id": "en_starter_distance_006",
        "word": "close",
        "emoji": "📍",
        "form": "adjective",
        "opposite": "far",
        "definitions": [
            {
                "text": "Near in space or time.",
                "examples": [
                    "The station is close to the hotel."
                ]
            }
        ],
        "subtext": "close to / very close",
        "synonyms": [
            "near"
        ],
        "comparative": "closer",
        "superlative": "the closest",
        "transcription": "kloʊz",
        "lang": "en",
        "level": "starter",
        "theme": "distance",
        "sub_theme": null
    },
    {
        "id": "en_starter_prepositions_place_017",
        "word": "around",
        "form": "preposition",
        "definitions": [
            {
                "text": "In a circle or in various places.",
                "examples": [
                    "We sat around the table.",
                    "Walk around the city."
                ]
            }
        ],
        "emoji": "⭕",
        "transcription": "əˈraʊnd",
        "subtext": "around",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null
    },
    {
        "id": "en_starter_prepositions_place_018",
        "word": "of",
        "form": "preposition",
        "definitions": [
            {
                "text": "Belonging to or connected with.",
                "examples": [
                    "The capital of England.",
                    "A cup of tea."
                ]
            }
        ],
        "emoji": "🔗",
        "transcription": "🇬🇧 ɒv | 🇺🇸 ɑːv",
        "subtext": "of",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();