(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-OTH-COM-001",
        "word": "goodbye",
        "translation": "goodbye",
        "level": "starter",
        "theme": "social",
        "language": "en",
        "emoji": "👋",
        "form": "interjection",
        "definitions": [
            {
                "text": "Used when you are leaving someone.",
                "examples": [
                    "Goodbye! See you tomorrow."
                ]
            }
        ],
        "transcription": "ɡʊdˈbaɪ",
        "lang": "en",
        "legacy_id": "A1-COMM-41",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A1-OTH-COM-002",
        "word": "hello",
        "translation": "hello",
        "level": "starter",
        "theme": "social",
        "language": "en",
        "emoji": "👋",
        "form": "interjection",
        "definitions": [
            {
                "text": "Used as a greeting when you meet someone.",
                "examples": [
                    "Hello, how are you?"
                ]
            }
        ],
        "transcription": "həˈloʊ",
        "lang": "en",
        "legacy_id": "A1-COMM-42",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A1-OTH-COM-003",
        "word": "thank you",
        "translation": "thank you",
        "level": "starter",
        "theme": "social",
        "language": "en",
        "emoji": "😊",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to show that you are grateful for something.",
                "examples": [
                    "Thank you for your help."
                ]
            }
        ],
        "transcription": "θæŋk ju",
        "lang": "en",
        "legacy_id": "A1-COMM-94",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A1-OTH-COM-026",
        "word": "another",
        "form": "determiner",
        "transcription": "əˈnʌðə",
        "emoji": "➕",
        "definitions": [
            {
                "text": "One more; an additional one.",
                "examples": [
                    "Have another cup of tea.",
                    "Try another day."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A1-OTH-COM-027",
        "word": "anything",
        "form": "pronoun",
        "transcription": "ˈeniθɪŋ",
        "emoji": "📦",
        "definitions": [
            {
                "text": "Any thing of any kind.",
                "examples": [
                    "Do you need anything?",
                    "I don't have anything to wear."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A1-OTH-COM-028",
        "word": "as",
        "form": "preposition",
        "transcription": "æz",
        "emoji": "⚖️",
        "definitions": [
            {
                "text": "Used to indicate role or function.",
                "examples": [
                    "She works as a teacher.",
                    "Tall as his brother."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A1-OTH-COM-029",
        "word": "quickly",
        "form": "adverb",
        "transcription": "ˈkwɪkli",
        "emoji": "⚡",
        "definitions": [
            {
                "text": "At a fast speed.",
                "examples": [
                    "Walk quickly or we will miss the bus.",
                    "She finished quickly."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A1-OTH-COM-030",
        "word": "slowly",
        "form": "adverb",
        "transcription": "ˈsləʊli",
        "emoji": "🐢",
        "definitions": [
            {
                "text": "At a slow speed.",
                "examples": [
                    "Speak slowly please.",
                    "Drive slowly in snow."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A1-OTH-COM-031",
        "word": "quietly",
        "form": "adverb",
        "transcription": "ˈkwaɪətli",
        "emoji": "🤫",
        "definitions": [
            {
                "text": "With little or no sound.",
                "examples": [
                    "Please talk quietly.",
                    "He opened the door quietly."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A1-OTH-COM-032",
        "word": "loudly",
        "form": "adverb",
        "transcription": "ˈlaʊdli",
        "emoji": "📢",
        "definitions": [
            {
                "text": "With a lot of noise.",
                "examples": [
                    "Don't shout loudly.",
                    "Music played loudly."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Interactions"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
