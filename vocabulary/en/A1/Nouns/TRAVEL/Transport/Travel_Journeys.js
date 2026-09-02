(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-TRA-035",
        "word": "airport",
        "emoji": "✈️",
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
        "transcription": "ˈɛrˌpɔrt",
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
        "emoji": "🚆",
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
        "transcription": "kəmˈjut",
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
        "emoji": "➡️",
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
        "emoji": "🏨",
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
        "transcription": "hoʊˈtɛl",
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
        "emoji": "⬆️",
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
        "transcription": "nɔrθ",
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
        "emoji": "🛂",
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
        "transcription": "ˈpæˌspɔrt",
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
        "emoji": "⬇️",
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
        "transcription": "saʊθ",
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
        "emoji": "🧳",
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
        "transcription": "ˈsutˌkeɪs",
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
        "emoji": "🎫",
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
        "transcription": "ˈtɪkɪt",
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
        "emoji": "🚗",
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
        "transcription": "ˈtræfɪk",
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
        "emoji": "🎒",
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
        "transcription": "trɪp",
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
        "emoji": "🛣️",
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
        "transcription": "weɪ",
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
        "emoji": "⬅️",
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
        "transcription": "wɛst",
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
        "id": "A1-NOUN-TRA-059",
        "word": "journey",
        "form": "noun",
        "transcription": "ˈdʒɜːni",
        "emoji": "🗺️",
        "definitions": [
            {
                "text": "An act of travelling from one place to another.",
                "examples": [
                    "A long train journey.",
                    "Have a safe journey."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-064",
        "word": "arrival",
        "form": "noun",
        "transcription": "əˈraɪvl",
        "emoji": "🛬",
        "definitions": [
            {
                "text": "The action of arriving.",
                "examples": [
                    "Train arrival time.",
                    "Welcome upon arrival."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-065",
        "word": "guide",
        "form": "noun",
        "transcription": "ɡaɪd",
        "emoji": "🧭",
        "definitions": [
            {
                "text": "A person who shows the way to others.",
                "examples": [
                    "The tour guide explained the history.",
                    "A helpful travel guide."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-NOUN-TRA-066",
        "word": "luggage",
        "form": "noun",
        "transcription": "ˈlʌɡɪdʒ",
        "emoji": "🧳",
        "definitions": [
            {
                "text": "Suitcases and bags containing a traveller's belongings.",
                "examples": [
                    "Pack your luggage.",
                    "Heavy airport luggage."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Travel_Journeys"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
