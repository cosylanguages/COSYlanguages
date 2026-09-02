(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-COM-01",
        "word": "free time",
        "emoji": "🎮",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Time when you are not working and can do what you want.",
                "examples": [
                    "I read books in my free time."
                ]
            }
        ],
        "subtext": "related to leisure activities",
        "transcription": "fri taɪm",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "legacy_id": "A1-COMM-23",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-NOUN-COM-02",
        "word": "game",
        "emoji": "🎮",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "games",
        "definitions": [
            {
                "text": "An activity or sport that people play for fun.",
                "examples": [
                    "Let's play a game."
                ]
            }
        ],
        "subtext": "related to leisure activities",
        "transcription": "geɪm",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "legacy_id": "A1-COMM-24",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-NOUN-COM-03",
        "word": "guest",
        "emoji": "🏨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "guests",
        "definitions": [
            {
                "text": "A person who is staying in a hotel or visiting someone's home.",
                "examples": [
                    "We have two guests staying with us."
                ]
            }
        ],
        "subtext": "related to leisure activities",
        "transcription": "gɛst",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "legacy_id": "A1-COMM-25",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-NOUN-COM-04",
        "word": "gym",
        "emoji": "🏋️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "gyms",
        "subtext": "go to the gym",
        "synonyms": [
            "fitness center"
        ],
        "definitions": [
            {
                "text": "A room or building with equipment for doing physical exercise.",
                "examples": [
                    "I go to the gym three times a week."
                ]
            }
        ],
        "transcription": "ʤɪm",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "legacy_id": "A1-COMM-27",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-NOUN-COM-05",
        "word": "holiday",
        "emoji": "🏖️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "holidays",
        "subtext": "vacation, go on holiday",
        "synonyms": [
            "🇺🇸 vacation"
        ],
        "definitions": [
            {
                "text": "A period of time away from work when you travel or relax.",
                "examples": [
                    "We have a holiday in July."
                ]
            }
        ],
        "transcription": "ˈhɑlɪˌdeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "legacy_id": "A1-COMM-30",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-NOUN-COM-06",
        "word": "party",
        "emoji": "🎉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "parties",
        "subtext": "birthday party, go to a party",
        "definitions": [
            {
                "text": "A social event where people eat, drink, and dance.",
                "examples": [
                    "We are having a party on Saturday."
                ]
            }
        ],
        "transcription": "ˈpɑrti",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "legacy_id": "A1-COMM-40",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-NOUN-COM-07",
        "word": "playground",
        "emoji": "🛝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "playgrounds",
        "definitions": [
            {
                "text": "An outside area where children can play.",
                "examples": [
                    "The children are at the playground."
                ]
            }
        ],
        "subtext": "related to leisure activities",
        "transcription": "ˈpleɪˌgraʊnd",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "legacy_id": "A1-COMM-44",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-NOUN-COM-08",
        "word": "present",
        "emoji": "🎁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "presents",
        "definitions": [
            {
                "text": "Something that you give to someone, especially on a special occasion.",
                "examples": [
                    "I bought a birthday present for my friend."
                ]
            }
        ],
        "subtext": "birthday present",
        "synonyms": [
            "gift"
        ],
        "transcription": "ˈprɛzənt",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "legacy_id": "A1-COMM-45",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Hobbies_Pastimes"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
