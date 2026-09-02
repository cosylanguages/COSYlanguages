(function() {
    const lang = "en";
    const data = [
    {
        "word": "abroad",
        "level": "elementary",
        "theme": "travel",
        "emoji": "✈️",
        "form": "adverb",
        "transcription": "əˈbrɔːd",
        "definitions": [
            {
                "text": "In or to another country.",
                "examples": [
                    "They go abroad every summer."
                ]
            }
        ],
        "subtext": "travel abroad",
        "synonyms": [
            "overseas"
        ],
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-01",
        "legacy_id": "en_elementary_travel_023",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "adventure",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🎒",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "An unusual, exciting, and possibly dangerous activity, such as a trip or experience.",
                "examples": [
                    "The trip to the jungle was a great adventure.",
                    "They are looking for adventure."
                ]
            }
        ],
        "subtext": "exciting experience, quest, journey",
        "synonyms": [
            "exciting experience",
            "quest",
            "journey"
        ],
        "countability": "countable",
        "transcription": "ədˈvɛntʃər",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-02",
        "legacy_id": "en_elementary_travel_043",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A2-TRV-03",
        "word": "arrange",
        "emoji": "🗓️",
        "form": "verb",
        "subtext": "plan, organize",
        "synonyms": [
            "plan",
            "organize"
        ],
        "definitions": [
            {
                "text": "To plan, prepare for, or organize something.",
                "examples": [
                    "I've arranged a meeting for ten o'clock."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arranged",
        "v3": "arranged",
        "transcription": "əˈreɪndʒ",
        "group": "regular",
        "auxiliary": "have",
        "v4": "arranging",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Old French",
            "origin_word": "arrangier",
            "origin_meaning": "put in a row, set in order"
        },
        "legacy_id": "en_elementary_booking_planning_a_trip_003",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "arrival",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🛬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "arrivals",
        "definitions": [
            {
                "text": "The act of coming to a place.",
                "examples": [
                    "We are waiting for the arrival of the flight.",
                    "Check the arrivals board."
                ]
            }
        ],
        "subtext": "coming, reaching",
        "synonyms": [
            "coming",
            "reaching"
        ],
        "transcription": "əˈraɪvl",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-04",
        "legacy_id": "en_elementary_travel_045",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "boarding pass",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🎫",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A document that allows you to get on a plane.",
                "examples": [
                    "Please show your boarding pass at the gate.",
                    "I have my boarding pass on my phone."
                ]
            }
        ],
        "subtext": "flight ticket, travel document",
        "synonyms": [
            "flight ticket",
            "travel document"
        ],
        "countability": "countable",
        "transcription": "ˈbɔːrdɪŋ pæs",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-05",
        "legacy_id": "en_elementary_travel_024",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A2-TRV-06",
        "word": "check in",
        "emoji": "🏢",
        "form": "verb",
        "v2": "checked in",
        "v3": "checked in",
        "definitions": [
            {
                "text": "To report your arrival at an airport or hotel.",
                "examples": [
                    "You need to check in two hours before the flight.",
                    "We checked in at the hotel at 3 pm."
                ]
            }
        ],
        "subtext": "register arrival",
        "synonyms": [
            "register arrival"
        ],
        "classification": "regular",
        "transcription": "tʃɛk ɪn",
        "group": "regular",
        "auxiliary": "have",
        "v4": "check ining",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_elementary_travel_026",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A2-TRV-07",
        "word": "check out",
        "emoji": "🚪",
        "form": "verb",
        "v2": "checked out",
        "v3": "checked out",
        "definitions": [
            {
                "text": "To leave a hotel after paying the bill.",
                "examples": [
                    "We need to check out before 11 am.",
                    "They checked out of the hotel this morning."
                ]
            }
        ],
        "subtext": "register departure",
        "synonyms": [
            "register departure"
        ],
        "classification": "regular",
        "transcription": "tʃɛk aʊt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "check outing",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_elementary_travel_027",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "crossroads",
        "level": "elementary",
        "theme": "travel",
        "emoji": "✖️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "crossroads",
        "definitions": [
            {
                "text": "A place where two roads meet and cross each other.",
                "examples": [
                    "Turn right at the crossroads.",
                    "There was an accident at the crossroads."
                ]
            }
        ],
        "subtext": "intersection, crossing",
        "synonyms": [
            "intersection",
            "crossing"
        ],
        "transcription": "🇬🇧 ˈkrɒsroʊdz | 🇺🇸 ˈkrɑːsroʊdz",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-08",
        "legacy_id": "en_elementary_travel_049",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "departure",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🛫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "departures",
        "definitions": [
            {
                "text": "The act of leaving a place, especially to start a journey.",
                "examples": [
                    "Our departure was delayed by an hour.",
                    "Check the flight departures board."
                ]
            }
        ],
        "subtext": "leaving, setting off",
        "synonyms": [
            "leaving",
            "setting off"
        ],
        "transcription": "dɪˈpɑːrtʃər",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-09",
        "legacy_id": "en_elementary_travel_044",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "destination",
        "level": "elementary",
        "theme": "travel",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "plural": "destinations",
        "definitions": [
            {
                "text": "The place you are travelling to.",
                "examples": [
                    "Paris is a popular destination."
                ]
            }
        ],
        "subtext": "final destination / reach your destination",
        "countability": "countable",
        "transcription": "ˌdɛstɪˈneɪʃn",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-10",
        "legacy_id": "en_elementary_travel_028",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "driving license",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🪪",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "An official document that shows you are qualified to drive a vehicle.",
                "examples": [
                    "You must carry your driving license while driving.",
                    "He passed his test and got his driving license."
                ]
            }
        ],
        "subtext": "driver's permit, ID",
        "synonyms": [
            "driver's permit",
            "ID"
        ],
        "countability": "countable",
        "transcription": "ˈdraɪvɪŋ ˈlaɪsns",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-11",
        "legacy_id": "en_elementary_travel_029",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A2-TRV-12",
        "word": "explore",
        "emoji": "🧭",
        "form": "verb",
        "subtext": "explore the city / explore options / explore nature",
        "definitions": [
            {
                "text": "To search and discover about something.",
                "examples": [
                    "We went to explore the old town.",
                    "Scientists are exploring the ocean floor."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "explored",
        "v3": "explored",
        "transcription": "ɪkˈsplɔːr",
        "synonyms": [
            "travel",
            "search"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "exploring",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_elementary_holiday_types_001",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "flight",
        "level": "elementary",
        "theme": "travel",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "plural": "flights",
        "definitions": [
            {
                "text": "A journey made in a plane.",
                "examples": [
                    "The flight to London is two hours."
                ]
            }
        ],
        "subtext": "book a flight",
        "synonyms": [
            "airplane trip"
        ],
        "countability": "countable",
        "transcription": "flaɪt",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-13",
        "legacy_id": "en_elementary_travel_030",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "guidebook",
        "level": "elementary",
        "theme": "travel",
        "emoji": "📕",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A book that gives information about a place for visitors.",
                "examples": [
                    "I bought a guidebook for Rome.",
                    "The guidebook has a good map."
                ]
            }
        ],
        "subtext": "travel book",
        "synonyms": [
            "travel book"
        ],
        "countability": "countable",
        "transcription": "ˈɡaɪdbʊk",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-14",
        "legacy_id": "en_elementary_travel_031",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "highway",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A main road, especially one connecting major towns or cities.",
                "examples": [
                    "We drove along the highway for three hours.",
                    "The highway was very busy this morning."
                ]
            }
        ],
        "subtext": "main road, motorway",
        "synonyms": [
            "🇬🇧 motorway",
            "main road"
        ],
        "countability": "countable",
        "transcription": "ˈhaɪweɪ",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-15",
        "legacy_id": "en_elementary_travel_032",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "itinerary",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🗺️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "itineraries",
        "definitions": [
            {
                "text": "A detailed plan or route of a journey.",
                "examples": [
                    "We have a very busy itinerary for our trip to Italy.",
                    "The travel agent sent us the itinerary yesterday."
                ]
            }
        ],
        "subtext": "travel plan, schedule",
        "synonyms": [
            "travel plan",
            "schedule"
        ],
        "transcription": "aɪˈtɪnərəri",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-16",
        "legacy_id": "en_elementary_travel_050",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "journey",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🛤️",
        "form": "noun",
        "classification": "regular",
        "plural": "journeys",
        "definitions": [
            {
                "text": "Travel from one place to another.",
                "examples": [
                    "The journey to work takes 40 minutes."
                ]
            }
        ],
        "subtext": "long journey",
        "synonyms": [
            "travel"
        ],
        "countability": "countable",
        "transcription": "ˈdʒɜːrni",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-17",
        "legacy_id": "en_elementary_travel_033",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "junction",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "junctions",
        "definitions": [
            {
                "text": "A place where two or more roads or railroads join.",
                "examples": [
                    "Turn left at the next junction.",
                    "The accident happened at a busy road junction."
                ]
            }
        ],
        "subtext": "intersection, road crossing",
        "synonyms": [
            "intersection",
            "road crossing"
        ],
        "transcription": "ˈdʒʌŋkʃn",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-18",
        "legacy_id": "en_elementary_travel_046",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "landmark",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🏛️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "landmarks",
        "definitions": [
            {
                "text": "A building or place that is easily recognized.",
                "examples": [
                    "The Eiffel Tower is a famous landmark.",
                    "We used the church as a landmark to find our way."
                ]
            }
        ],
        "subtext": "monument, recognizable place",
        "synonyms": [
            "monument",
            "recognizable place"
        ],
        "transcription": "ˈlændmɑːrk",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-19",
        "legacy_id": "en_elementary_travel_048",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "luggage",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Bags and cases that you take with you when you travel.",
                "examples": [
                    "She has a lot of luggage."
                ]
            }
        ],
        "subtext": "carry luggage",
        "synonyms": [
            "baggage"
        ],
        "countability": "uncountable",
        "transcription": "ˈlʌɡɪdʒ",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-20",
        "legacy_id": "en_elementary_travel_034",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A2-TRV-21",
        "word": "overtake",
        "emoji": "🏎️",
        "form": "verb",
        "v2": "overtook",
        "v3": "overtaken",
        "definitions": [
            {
                "text": "To come from behind another vehicle and go past it.",
                "examples": [
                    "It's dangerous to overtake on a corner.",
                    "He overtook the slow truck."
                ]
            }
        ],
        "subtext": "pass",
        "synonyms": [
            "pass"
        ],
        "classification": "irregular",
        "transcription": "ˌoʊvərˈteɪk",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_elementary_driving_roads_001",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "parking lot",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🅿️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "An area where cars can be left.",
                "examples": [
                    "The parking lot was full.",
                    "Meet me in the parking lot behind the building."
                ]
            }
        ],
        "subtext": "car park, parking area",
        "synonyms": [
            "car park",
            "parking area"
        ],
        "countability": "countable",
        "transcription": "🇬🇧 ˈpɑːrkɪŋ lɒt | 🇺🇸 ˈpɑːrkɪŋ lɑːt",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-22",
        "legacy_id": "en_elementary_travel_035",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A2-TRV-23",
        "word": "reach",
        "emoji": "🏁",
        "form": "verb",
        "subtext": "reach the top, reach an agreement",
        "definitions": [
            {
                "text": "To arrive at a place or a level.",
                "examples": [
                    "We reached the hotel late at night."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reached",
        "v3": "reached",
        "transcription": "riːtʃ",
        "synonyms": [
            "arrive at"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "reaching",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_elementary_booking_planning_a_trip_004",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A2-TRV-24",
        "word": "reserve",
        "emoji": "🛎️",
        "form": "verb",
        "subtext": "reserve a room / reserve a table / reserve a seat",
        "definitions": [
            {
                "text": "To keep something for a particular person or purpose.",
                "examples": [
                    "I'd like to reserve a table for two.",
                    "The seats are reserved for elderly passengers."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reserved",
        "v3": "reserved",
        "transcription": "rɪˈzɜːrv",
        "synonyms": [
            "book"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "reserving",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_elementary_travel_025",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "roundabout",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🔄",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A place where three or more roads join and traffic must go around a central island.",
                "examples": [
                    "Take the second exit at the roundabout.",
                    "There is a lot of traffic at the roundabout."
                ]
            }
        ],
        "subtext": "traffic circle, intersection",
        "synonyms": [
            "traffic circle",
            "intersection"
        ],
        "countability": "countable",
        "transcription": "ˈraʊndəbaʊt",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-25",
        "legacy_id": "en_elementary_travel_036",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "sightseeing",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🏛️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "The activity of visiting interesting places, especially by people on holiday.",
                "examples": [
                    "We did a lot of sightseeing in London.",
                    "Let's go sightseeing tomorrow."
                ]
            }
        ],
        "subtext": "visiting attractions",
        "synonyms": [
            "visiting attractions"
        ],
        "countability": "uncountable",
        "transcription": "ˈsaɪtˌsiːɪŋ",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-26",
        "legacy_id": "en_elementary_travel_037",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "souvenir",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🎁",
        "form": "noun",
        "classification": "regular",
        "plural": "souvenirs",
        "definitions": [
            {
                "text": "A thing that is kept as a reminder of a person, place, or event.",
                "examples": [
                    "I bought a souvenir in Paris.",
                    "This magnet is a souvenir from my trip."
                ]
            },
            {
                "text": "People usually buy souvenirs when they are on holiday.",
                "examples": [
                    "The souvenir shop has many postcards."
                ]
            }
        ],
        "subtext": "travel souvenir",
        "synonyms": [
            "gift"
        ],
        "countability": "countable",
        "transcription": "ˌsuːvəˈnɪər",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-27",
        "legacy_id": "en_elementary_travel_038",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "stadium",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🏟️",
        "form": "noun",
        "classification": "regular",
        "plural": "stadiums",
        "definitions": [
            {
                "text": "A large building with rows of seats around a sports field.",
                "examples": [
                    "The stadium was full."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to places culture leisure",
        "transcription": "ˈsteɪdiəm",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-28",
        "legacy_id": "en_elementary_travel_039",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "terminal",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A building at an airport where passengers arrive and depart.",
                "examples": [
                    "Our flight leaves from Terminal 3.",
                    "The airport has five terminals."
                ]
            }
        ],
        "subtext": "departure terminal",
        "synonyms": [
            "airport building"
        ],
        "countability": "countable",
        "transcription": "ˈtɜːrmɪnl",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-29",
        "legacy_id": "en_elementary_travel_040",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "tourist",
        "level": "elementary",
        "theme": "travel",
        "emoji": "📸",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A person who is visiting a place for pleasure.",
                "examples": [
                    "The city is full of tourists in summer.",
                    "I am a tourist in Paris."
                ]
            }
        ],
        "subtext": "traveler, visitor",
        "synonyms": [
            "traveler",
            "visitor"
        ],
        "countability": "countable",
        "transcription": "ˈtʊərɪst",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-30",
        "legacy_id": "en_elementary_travel_041",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "traffic jam",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🚗🚙🚕",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A large number of vehicles close together and unable to move or moving very slowly.",
                "examples": [
                    "I was late because of a traffic jam.",
                    "We were stuck in a traffic jam for an hour."
                ]
            }
        ],
        "subtext": "heavy traffic, congestion",
        "synonyms": [
            "heavy traffic",
            "congestion"
        ],
        "countability": "countable",
        "transcription": "ˈtræfɪk dʒæm",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-31",
        "legacy_id": "en_elementary_travel_042",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "traffic lights",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🚦",
        "form": "noun",
        "classification": "regular",
        "countability": "plural",
        "plural": "traffic lights",
        "definitions": [
            {
                "text": "A set of red, yellow, and green lights that control the flow of traffic.",
                "examples": [
                    "Stop when the traffic lights are red.",
                    "Turn right at the traffic lights."
                ]
            }
        ],
        "subtext": "stop lights, signal",
        "synonyms": [
            "stop lights",
            "signal"
        ],
        "transcription": "ˈtræfɪk laɪts",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-32",
        "legacy_id": "en_elementary_travel_047",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "word": "travel agent",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "travel agents",
        "definitions": [
            {
                "text": "A person or company that arranges tickets, hotel rooms, etc. for people going on holiday.",
                "examples": [
                    "We booked our holiday through a travel agent.",
                    "The travel agent gave us some great advice."
                ]
            }
        ],
        "subtext": "travel professional, travel consultant",
        "synonyms": [
            "travel professional",
            "travel consultant"
        ],
        "transcription": "ˈtrævl ˈeɪdʒənt",
        "language": "en",
        "lang": "en",
        "id": "A2-TRV-33",
        "legacy_id": "en_elementary_travel_051",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
