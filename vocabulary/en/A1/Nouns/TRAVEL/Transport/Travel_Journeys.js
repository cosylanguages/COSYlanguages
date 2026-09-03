(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-TRA-035",
        "word": "airport",
        "emoji": "\u2708\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "airports",
        "definitions": [
            {
                "text": "A place where planes land and take off.",
                "examples": [
                    "I am going to the airport now."
                ]
            }
        ],
        "subtext": "related to public transport",
        "transcription": "\u02c8\u025br\u02ccp\u0254rt",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A1-TRV-01",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-036",
        "word": "commute",
        "emoji": "\ud83d\ude86",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "commutes",
        "definitions": [
            {
                "text": "The journey to and from work each day.",
                "examples": [
                    "My commute takes one hour."
                ]
            }
        ],
        "subtext": "related to public transport",
        "transcription": "k\u0259m\u02c8jut",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A1-TRV-18",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-037",
        "word": "east",
        "emoji": "\u27a1\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The direction where the sun rises.",
                "examples": [
                    "The sun rises in the east."
                ]
            }
        ],
        "subtext": "related to directions navigation",
        "transcription": "ist",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "west"
        ],
        "legacy_id": "A1-TRV-21",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-038",
        "word": "hotel",
        "emoji": "\ud83c\udfe8",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hotels",
        "definitions": [
            {
                "text": "A building where people pay to stay overnight.",
                "examples": [
                    "The hotel is near the station."
                ]
            }
        ],
        "subtext": "related to public transport",
        "transcription": "ho\u028a\u02c8t\u025bl",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A1-TRV-29",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-039",
        "word": "north",
        "emoji": "\u2b06\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The direction that is on your left when you face the sunrise.",
                "examples": [
                    "The city is in the north."
                ]
            }
        ],
        "subtext": "related to directions navigation",
        "transcription": "n\u0254r\u03b8",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "south"
        ],
        "legacy_id": "A1-TRV-35",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-040",
        "word": "passport",
        "emoji": "\ud83d\udec2",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "passports",
        "definitions": [
            {
                "text": "An official document you need to travel to other countries.",
                "examples": [
                    "Don't forget your passport."
                ]
            }
        ],
        "subtext": "related to travel vocabulary basics",
        "transcription": "\u02c8p\u00e6\u02ccsp\u0254rt",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A1-TRV-38",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-041",
        "word": "south",
        "emoji": "\u2b07\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The direction that is on your right when you face the sunrise.",
                "examples": [
                    "We are driving south."
                ]
            }
        ],
        "subtext": "related to directions navigation",
        "transcription": "sa\u028a\u03b8",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "north"
        ],
        "legacy_id": "A1-TRV-45",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-042",
        "word": "suitcase",
        "emoji": "\ud83e\uddf3",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "suitcases",
        "definitions": [
            {
                "text": "A large case that you use to carry your clothes and other things when you are traveling.",
                "examples": [
                    "I am packing my suitcase for the trip."
                ]
            }
        ],
        "subtext": "related to travel vocabulary basics",
        "transcription": "\u02c8sut\u02ccke\u026as",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A1-TRV-46",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-043",
        "word": "ticket",
        "emoji": "\ud83c\udfab",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tickets",
        "definitions": [
            {
                "text": "A piece of paper that shows you have paid for a journey.",
                "examples": [
                    "I need a train ticket."
                ]
            }
        ],
        "subtext": "related to travel vocabulary basics",
        "transcription": "\u02c8t\u026ak\u026at",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A1-TRV-50",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-044",
        "word": "traffic",
        "emoji": "\ud83d\ude97",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "heavy traffic",
        "synonyms": [
            "cars",
            "vehicles"
        ],
        "definitions": [
            {
                "text": "The cars, trucks, and other vehicles using a road.",
                "examples": [
                    "The traffic is very heavy this morning."
                ]
            }
        ],
        "transcription": "\u02c8tr\u00e6f\u026ak",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A1-TRV-51",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-045",
        "word": "trip",
        "emoji": "\ud83c\udf92",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "trips",
        "definitions": [
            {
                "text": "A journey to a place and back again.",
                "examples": [
                    "How was your trip to London?"
                ]
            }
        ],
        "subtext": "related to travel vocabulary basics",
        "transcription": "tr\u026ap",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A1-TRV-55",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-046",
        "word": "way",
        "emoji": "\ud83d\udee3\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ways",
        "definitions": [
            {
                "text": "A route or road; a method of doing something.",
                "examples": [
                    "Which is the way to the station?",
                    "This is a good way to learn."
                ]
            }
        ],
        "subtext": "related to directions navigation",
        "transcription": "we\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A1-TRV-63",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-047",
        "word": "west",
        "emoji": "\u2b05\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The direction where the sun sets.",
                "examples": [
                    "The sun sets in the west."
                ]
            }
        ],
        "subtext": "related to directions navigation",
        "transcription": "w\u025bst",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "east"
        ],
        "legacy_id": "A1-TRV-64",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-079",
        "word": "baggage",
        "emoji": "\ud83e\uddf3",
        "form": "noun",
        "transcription": "\u02c8b\u00e6\u0261\u0259\u02a4",
        "definitions": [
            {
                "text": "Personal belongings packed in suitcases.",
                "examples": [
                    "Collect your baggage at carousel four.",
                    "Excess baggage incurs a fee."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-080",
        "word": "flight",
        "emoji": "\u2708\ufe0f",
        "form": "noun",
        "transcription": "fla\u026at",
        "definitions": [
            {
                "text": "A journey made by air.",
                "examples": [
                    "Our flight to Madrid takes three hours.",
                    "Boarding for flight 204 begins soon."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-081",
        "word": "journey",
        "emoji": "\ud83d\udee3\ufe0f",
        "form": "noun",
        "transcription": "\u02c8\u02a4\u025c\u02d0rni",
        "definitions": [
            {
                "text": "An act of traveling from one place to another.",
                "examples": [
                    "Enjoy a safe journey home.",
                    "The train journey through mountains was scenic."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-082",
        "word": "luggage",
        "emoji": "\ud83e\uddf3",
        "form": "noun",
        "transcription": "\u02c8l\u028c\u0261\u0259\u02a4",
        "definitions": [
            {
                "text": "Suitcases and bags containing personal belongings.",
                "examples": [
                    "Leave your luggage in the hotel storage.",
                    "He checked two pieces of luggage."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-083",
        "word": "passenger",
        "emoji": "\ud83e\uddf3",
        "form": "noun",
        "transcription": "\u02c8p\u00e6s\u0259n\u02a4\u0259r",
        "definitions": [
            {
                "text": "A traveler on a public or private conveyance.",
                "examples": [
                    "Passengers boarded the train orderly.",
                    "All passengers must wear seatbelts."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-084",
        "word": "tour",
        "emoji": "\ud83d\ude8c",
        "form": "noun",
        "transcription": "t\u028ar",
        "definitions": [
            {
                "text": "A journey for pleasure in which several places are visited.",
                "examples": [
                    "We booked a guided city tour.",
                    "A bus tour takes you to major landmarks."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-085",
        "word": "tourist",
        "emoji": "\ud83d\udcf8",
        "form": "noun",
        "transcription": "\u02c8t\u028ar\u0259st",
        "definitions": [
            {
                "text": "A person who is traveling or visiting a place for pleasure.",
                "examples": [
                    "Tourists took photos of the cathedral.",
                    "The coastal town is popular with tourists."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-113",
        "word": "aisle",
        "emoji": "\ud83d\udcba",
        "form": "noun",
        "transcription": "a\u026al",
        "definitions": [
            {
                "text": "A passage between rows of seats in a plane, train, or theater.",
                "examples": [
                    "Choose an aisle seat on the plane.",
                    "Walk down train aisle to find your seat."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-114",
        "word": "arrival",
        "emoji": "\ud83d\udeec",
        "form": "noun",
        "transcription": "\u0259\u02c8ra\u026av\u0259l",
        "definitions": [
            {
                "text": "The action of arriving at a destination.",
                "examples": [
                    "Check airport arrival board.",
                    "Our arrival time was six in the evening."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-115",
        "word": "boarding",
        "emoji": "\ud83c\udfab",
        "form": "noun",
        "transcription": "\u02c8b\u0254\u02d0rd\u026a\u014b",
        "definitions": [
            {
                "text": "The action of getting on a ship, aircraft, or train.",
                "examples": [
                    "Boarding starts thirty minutes before departure.",
                    "Have boarding pass ready."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-116",
        "word": "cab",
        "emoji": "\ud83d\ude95",
        "form": "noun",
        "transcription": "k\u00e6b",
        "definitions": [
            {
                "text": "A taxi.",
                "examples": [
                    "Hail a cab outside station.",
                    "Take a cab to hotel."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-117",
        "word": "cabin",
        "emoji": "\ud83d\udecb\ufe0f",
        "form": "noun",
        "transcription": "\u02c8k\u00e6b\u0259n",
        "definitions": [
            {
                "text": "A private room on a ship or airplane.",
                "examples": [
                    "Rest in your ship cabin.",
                    "The flight cabin crew was attentive."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-118",
        "word": "checkout",
        "emoji": "\ud83d\udd11",
        "form": "noun",
        "transcription": "\u02c8\u02a7\u025bk\u02cca\u028at",
        "definitions": [
            {
                "text": "The action of vacating and paying for a hotel room.",
                "examples": [
                    "Hotel checkout time is eleven.",
                    "Return room keys at checkout."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-119",
        "word": "cruise",
        "emoji": "\ud83d\udea2",
        "form": "noun",
        "transcription": "kru\u02d0z",
        "definitions": [
            {
                "text": "A voyage on a ship taken for pleasure.",
                "examples": [
                    "Book a Mediterranean sea cruise.",
                    "A cruise ship sailed into harbor."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-120",
        "word": "customs",
        "emoji": "\ud83d\udec2",
        "form": "noun",
        "transcription": "\u02c8k\u028cst\u0259mz",
        "definitions": [
            {
                "text": "The official department that administers duties on imported goods.",
                "examples": [
                    "Pass through airport customs.",
                    "Customs officers checked baggage."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-121",
        "word": "delay",
        "emoji": "\u23f3",
        "form": "noun",
        "transcription": "d\u026a\u02c8le\u026a",
        "definitions": [
            {
                "text": "A period of time by which something is late.",
                "examples": [
                    "Fog caused a two-hour flight delay.",
                    "We apologize for train delay."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-122",
        "word": "departure",
        "emoji": "\ud83d\udeeb",
        "form": "noun",
        "transcription": "d\u026a\u02c8p\u0251\u02d0r\u02a7\u0259r",
        "definitions": [
            {
                "text": "The action of leaving, especially to start a journey.",
                "examples": [
                    "Check departure gate on monitor.",
                    "Flight departure is at eight."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-123",
        "word": "destination",
        "emoji": "\ud83d\udccd",
        "form": "noun",
        "transcription": "\u02ccd\u025bst\u0259\u02c8ne\u026a\u0283\u0259n",
        "definitions": [
            {
                "text": "The place to which someone or something is going.",
                "examples": [
                    "London is our final travel destination.",
                    "Reach your destination safely."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-124",
        "word": "fare",
        "emoji": "\ud83c\udf9f\ufe0f",
        "form": "noun",
        "transcription": "f\u025br",
        "definitions": [
            {
                "text": "The money a passenger on public transport has to pay.",
                "examples": [
                    "Pay standard bus fare.",
                    "Train fares went up slightly."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-125",
        "word": "ferry",
        "emoji": "\u26f4\ufe0f",
        "form": "noun",
        "transcription": "\u02c8f\u025bri",
        "definitions": [
            {
                "text": "A boat or ship for conveying passengers and goods.",
                "examples": [
                    "Take car ferry across channel.",
                    "The passenger ferry runs hourly."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-126",
        "word": "guidebook",
        "emoji": "\ud83d\udcd6",
        "form": "noun",
        "transcription": "\u02c8\u0261a\u026ad\u02ccb\u028ak",
        "definitions": [
            {
                "text": "A handbook for tourists or travelers.",
                "examples": [
                    "Consult travel guidebook for restaurant tips.",
                    "She bought a city guidebook."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-127",
        "word": "itinerary",
        "emoji": "\ud83d\uddd3\ufe0f",
        "form": "noun",
        "transcription": "a\u026a\u02c8t\u026an\u0259\u02ccr\u025bri",
        "definitions": [
            {
                "text": "A planned route or journey.",
                "examples": [
                    "Check holiday itinerary details.",
                    "The tour guide outlined daily itinerary."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-128",
        "word": "motel",
        "emoji": "\ud83c\udfe8",
        "form": "noun",
        "transcription": "mo\u028a\u02c8t\u025bl",
        "definitions": [
            {
                "text": "A roadside hotel designed primarily for motorists.",
                "examples": [
                    "Stay overnight at a highway motel.",
                    "The motel offered free parking."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-129",
        "word": "navigation",
        "emoji": "\ud83e\udded",
        "form": "noun",
        "transcription": "\u02ccn\u00e6v\u0259\u02c8\u0261e\u026a\u0283\u0259n",
        "definitions": [
            {
                "text": "The process or activity of accurately ascertaining position and direction.",
                "examples": [
                    "Use satellite navigation while driving.",
                    "Good navigation prevents getting lost."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-130",
        "word": "platform",
        "emoji": "\ud83d\ude89",
        "form": "noun",
        "transcription": "\u02c8pl\u00e6t\u02ccf\u0254\u02d0rm",
        "definitions": [
            {
                "text": "A raised structure along the tracks at a railway station.",
                "examples": [
                    "Wait on platform two for airport express.",
                    "The train pulled up to platform."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
