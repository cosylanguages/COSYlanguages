(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-COM-01",
        "word": "battery",
        "emoji": "🔋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "batteries",
        "definitions": [
            {
                "text": "An object that provides electricity for a device.",
                "examples": [
                    "My phone battery is low."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "synonyms": [
            "power source",
            "charging"
        ],
        "transcription": "ˈbætəri",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-01",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-02",
        "word": "camera",
        "emoji": "📷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cameras",
        "definitions": [
            {
                "text": "A device for taking photos or videos.",
                "examples": [
                    "I have a new digital camera."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "transcription": "ˈkæmərə",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-04",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-03",
        "word": "charger",
        "emoji": "🔌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chargers",
        "definitions": [
            {
                "text": "A device used to put electricity into a battery.",
                "examples": [
                    "Can I borrow your phone charger?"
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "synonyms": [
            "charging cable"
        ],
        "transcription": "ˈʧɑrʤər",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-05",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-04",
        "word": "computer",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "computers",
        "definitions": [
            {
                "text": "An electronic machine that can store and find information.",
                "examples": [
                    "I use a computer at work."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "transcription": "kəmˈpjutər",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-06",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-05",
        "word": "keyboard",
        "emoji": "⌨️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "keyboards",
        "definitions": [
            {
                "text": "A set of keys on a computer or piano.",
                "examples": [
                    "Type your name on the keyboard."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "transcription": "ˈkiˌbɔrd",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-11",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-06",
        "word": "laptop",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "laptops",
        "definitions": [
            {
                "text": "A small computer that you can carry.",
                "examples": [
                    "I use my laptop for work."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "transcription": "ˈlæpˌtɑp",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-12",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-07",
        "word": "magazine",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "magazines",
        "definitions": [
            {
                "text": "A thin book with a paper cover and many pictures.",
                "examples": [
                    "I like reading fashion magazines."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "transcription": "ˈmægəˌzin",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-14",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-08",
        "word": "mobile",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mobiles",
        "subtext": "mobile phone, cell phone",
        "definitions": [
            {
                "text": "A phone that you can carry with you.",
                "examples": [
                    "I lost my mobile."
                ]
            }
        ],
        "transcription": "ˈmoʊbəl",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-16",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-09",
        "word": "newspaper",
        "emoji": "📰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "newspapers",
        "definitions": [
            {
                "text": "Large sheets of paper with news and advertisements.",
                "examples": [
                    "He reads the newspaper every morning."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "transcription": "ˈnuzˌpeɪpər",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-18",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-10",
        "word": "printer",
        "emoji": "🖨️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "printers",
        "definitions": [
            {
                "text": "A machine used for printing documents from a computer.",
                "examples": [
                    "We need more paper for the printer."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "transcription": "ˈprɪnər",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-25",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-11",
        "word": "radio",
        "emoji": "📻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "radios",
        "definitions": [
            {
                "text": "A device used for listening to music and news programs.",
                "examples": [
                    "I listen to the radio in the morning."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "transcription": "ˈreɪdiˌoʊ",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-26",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-12",
        "word": "screen",
        "emoji": "🖥️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "screens",
        "definitions": [
            {
                "text": "The flat part of a television or computer where you see the pictures.",
                "examples": [
                    "Look at the computer screen."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "transcription": "skrin",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-29",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-13",
        "word": "smartphone",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "smartphones",
        "definitions": [
            {
                "text": "A mobile phone that can also connect to the internet.",
                "examples": [
                    "I use my smartphone every day."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "transcription": "ˈsmɑːrtfoʊn",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-30",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    },
    {
        "id": "A1-NOUN-COM-14",
        "word": "television",
        "emoji": "📺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "televisions",
        "subtext": "TV, watch television",
        "definitions": [
            {
                "text": "A device with a screen for watching programs.",
                "examples": [
                    "We watch the news on television."
                ]
            }
        ],
        "transcription": "ˈtɛləˌvɪʒən",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "legacy_id": "A1-COMM-31",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Digital_Devices"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
