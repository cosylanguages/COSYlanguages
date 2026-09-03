(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-NOUN-TRA-047",
            "word": "passenger",
            "emoji": "🧳",
            "form": "noun",
            "definitions": [
                    {
                            "text": "A person traveling in a vehicle but not driving it.",
                            "examples": [
                                    "All passengers must fasten their seatbelts.",
                                    "The train was crowded with daily passengers."
                            ]
                    }
            ],
            "subtext": "traveler, commuter",
            "synonyms": [
                    "traveler",
                    "commuter"
            ],
            "transcription": "ˈpæsɪndʒə",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "travel",
            "domain": "TRAVEL",
            "subcategory": "Transport",
            "pos_section": "Nouns",
            "sub_subcategory": "Vehicles_Transit"
    },
    {
            "id": "A2-NOUN-TRA-051",
            "word": "platform",
            "emoji": "🚉",
            "form": "noun",
            "definitions": [
                    {
                            "text": "The area alongside railway tracks where passengers board.",
                            "examples": [
                                    "The train for London leaves from platform 4.",
                                    "Wait on the platform behind the yellow line."
                            ]
                    }
            ],
            "subtext": "track area",
            "synonyms": [
                    "track area"
            ],
            "transcription": "ˈplætfɔːm",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "travel",
            "domain": "TRAVEL",
            "subcategory": "Transport",
            "pos_section": "Nouns",
            "sub_subcategory": "Vehicles_Transit"
    },
    {
            "id": "A2-NOUN-TRA-058",
            "word": "vehicle",
            "emoji": "🚘",
            "form": "noun",
            "definitions": [
                    {
                            "text": "A machine with wheels used for transporting people or goods.",
                            "examples": [
                                    "Emergency vehicles arrived quickly.",
                                    "Park your vehicle in the designated space."
                            ]
                    }
            ],
            "subtext": "car, transit",
            "synonyms": [
                    "car",
                    "transit"
            ],
            "transcription": "ˈviːəkl",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "travel",
            "domain": "TRAVEL",
            "subcategory": "Transport",
            "pos_section": "Nouns",
            "sub_subcategory": "Vehicles_Transit"
    },
    {
            "id": "A2-NOUN-TRA-063",
            "word": "traffic",
            "emoji": "🚦",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Vehicles moving on public roads.",
                            "examples": [
                                    "Morning traffic was heavy on the highway.",
                                    "Heavy traffic delayed our arrival."
                            ]
                    }
            ],
            "subtext": "vehicles, congestion",
            "synonyms": [
                    "vehicles",
                    "congestion"
            ],
            "transcription": "ˈtræfɪk",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "travel",
            "domain": "TRAVEL",
            "subcategory": "Transport",
            "pos_section": "Nouns",
            "sub_subcategory": "Vehicles_Transit"
    },
    {
            "id": "A2-NOUN-TRA-069",
            "word": "fuel",
            "emoji": "⛽",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Material such as coal, gas, or oil burned to produce heat or power.",
                            "examples": [
                                    "The car ran out of fuel on the highway.",
                                    "Wood is used as fuel in stoves."
                            ]
                    }
            ],
            "subtext": "energy, gas",
            "synonyms": [
                    "energy",
                    "gas"
            ],
            "transcription": "ˈfjuːəl",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "travel",
            "domain": "TRAVEL",
            "subcategory": "Transport",
            "pos_section": "Nouns",
            "sub_subcategory": "Vehicles_Transit"
    },
    {
            "id": "A2-NOUN-TRA-075",
            "word": "lane",
            "emoji": "🛣️",
            "form": "noun",
            "definitions": [
                    {
                            "text": "A narrow road, especially in a rural area.",
                            "examples": [
                                    "The country lane wound through green fields.",
                                    "Bicycles should stay in the cycle lane."
                            ]
                    }
            ],
            "subtext": "road, path",
            "synonyms": [
                    "road",
                    "path"
            ],
            "transcription": "leɪn",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "travel",
            "domain": "TRAVEL",
            "subcategory": "Transport",
            "pos_section": "Nouns",
            "sub_subcategory": "Vehicles_Transit"
    }
    ];

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
