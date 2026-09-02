(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-TRA-01",
        "word": "bicycle",
        "emoji": "🚲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bicycles",
        "subtext": "bike, ride a bicycle",
        "definitions": [
            {
                "text": "A vehicle with two wheels that you sit on and move by turning pedals.",
                "examples": [
                    "He goes to work by bicycle."
                ]
            }
        ],
        "transcription": "ˈbaɪsɪkəl",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "A1-TRV-02",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Public_Transit"
    },
    {
        "id": "A1-NOUN-TRA-02",
        "word": "bike",
        "emoji": "🚲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bikes",
        "subtext": "bicycle, ride a bike",
        "definitions": [
            {
                "text": "A two-wheeled vehicle that you ride by pushing pedals.",
                "examples": [
                    "He cycles to work on his bike."
                ]
            }
        ],
        "transcription": "baɪk",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "A1-TRV-03",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Public_Transit"
    },
    {
        "id": "A1-NOUN-TRA-03",
        "word": "boat",
        "emoji": "⛵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "boats",
        "definitions": [
            {
                "text": "A vehicle used for traveling on water.",
                "examples": [
                    "We took a boat across the lake."
                ]
            }
        ],
        "subtext": "related to modes of transport",
        "transcription": "boʊt",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "A1-TRV-04",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Public_Transit"
    },
    {
        "id": "A1-NOUN-TRA-04",
        "word": "bus",
        "emoji": "🚌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "buses",
        "subtext": "take the bus, go by bus, bus stop",
        "definitions": [
            {
                "text": "A large vehicle that carries many people.",
                "examples": [
                    "I take the bus to work."
                ]
            }
        ],
        "transcription": "bəs",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "A1-TRV-07",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Public_Transit"
    },
    {
        "id": "A1-NOUN-TRA-05",
        "word": "car",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cars",
        "subtext": "drive a car, fast car",
        "definitions": [
            {
                "text": "A vehicle with four wheels and an engine.",
                "examples": [
                    "His car is red."
                ]
            }
        ],
        "transcription": "kɑr",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "A1-TRV-11",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Public_Transit"
    },
    {
        "id": "A1-NOUN-TRA-06",
        "word": "motorbike",
        "emoji": "🏍️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "motorbikes",
        "definitions": [
            {
                "text": "A vehicle with two wheels and an engine.",
                "examples": [
                    "He goes to work on his motorbike."
                ]
            }
        ],
        "subtext": "related to modes of transport",
        "transcription": "ˈmoʊtərˌbaɪk",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "A1-TRV-32",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Public_Transit"
    },
    {
        "id": "A1-NOUN-TRA-07",
        "word": "plane",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "planes",
        "subtext": "airplane, take a plane",
        "definitions": [
            {
                "text": "A vehicle with wings that flies through the air.",
                "examples": [
                    "The plane lands at nine o'clock."
                ]
            }
        ],
        "transcription": "pleɪn",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "A1-TRV-39",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Public_Transit"
    },
    {
        "id": "A1-NOUN-TRA-08",
        "word": "scooter",
        "emoji": "🛴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "scooters",
        "definitions": [
            {
                "text": "A small vehicle with two wheels and a long handle.",
                "examples": [
                    "The boy is riding his scooter."
                ]
            }
        ],
        "subtext": "related to modes of transport",
        "transcription": "ˈskutər",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "A1-TRV-44",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Public_Transit"
    },
    {
        "id": "A1-NOUN-TRA-09",
        "word": "taxi",
        "emoji": "🚕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "taxis",
        "definitions": [
            {
                "text": "A car with a driver that you pay to take you somewhere.",
                "examples": [
                    "Let's take a taxi."
                ]
            }
        ],
        "subtext": "related to modes of transport",
        "transcription": "ˈtæksi",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "A1-TRV-49",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Public_Transit"
    },
    {
        "id": "A1-NOUN-TRA-10",
        "word": "train",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "trains",
        "subtext": "take the train, by train, train station",
        "definitions": [
            {
                "text": "A vehicle that runs on rails.",
                "examples": [
                    "The train is fast."
                ]
            }
        ],
        "transcription": "treɪn",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "A1-TRV-52",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Public_Transit"
    },
    {
        "id": "A1-NOUN-TRA-11",
        "word": "truck",
        "emoji": "🚚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "trucks",
        "subtext": "related to modes of transport",
        "synonyms": [
            "🇬🇧 lorry"
        ],
        "definitions": [
            {
                "text": "A large, heavy vehicle with wheels used for carrying goods.",
                "examples": [
                    "The truck is carrying food to the supermarket."
                ]
            }
        ],
        "transcription": "trək",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "A1-TRV-56",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Public_Transit"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
