(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-COM-015",
        "word": "act",
        "emoji": "\ud83c\udfad",
        "form": "verb",
        "subtext": "act in a play / act quickly",
        "definitions": [
            {
                "text": "To perform in a play or movie.",
                "examples": [
                    "He acts in the school play."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acted",
        "v3": "acted",
        "group": "regular",
        "transcription": "\u00e6kt",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "be natural"
        ],
        "legacy_id": "A1-COMM-01",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-VERB-COM-017",
        "word": "celebrate",
        "definitions": [
            {
                "text": "To do something enjoyable for a special occasion.",
                "examples": [
                    "They celebrate every work anniversary together."
                ]
            }
        ],
        "subtext": "celebrate a birthday / celebrate success / celebrate together",
        "classification": "regular",
        "aspect": "action",
        "v2": "celebrated",
        "v3": "celebrated",
        "emoji": "\ud83c\udf89",
        "form": "verb",
        "group": "regular",
        "transcription": "\u02c8s\u025bl\u0259\u02ccbre\u026at",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "mourn"
        ],
        "legacy_id": "A1-COMM-12",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-VERB-COM-019",
        "word": "exercise",
        "emoji": "\ud83c\udfcb\ufe0f",
        "form": "verb",
        "definitions": [
            {
                "text": "To do physical activity for health and fitness.",
                "examples": [
                    "He exercises four times a week at the gym."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercised",
        "v3": "exercised",
        "subtext": "exercise regularly / exercise at the gym / exercise outdoors",
        "group": "regular",
        "transcription": "\u02c8\u025bks\u0259r\u02ccsa\u026az",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "rest"
        ],
        "legacy_id": "A1-COMM-19",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-VERB-COM-021",
        "word": "hop",
        "emoji": "\ud83d\udc07",
        "form": "verb",
        "subtext": "hop around / hop like a rabbit",
        "synonyms": [
            "jump"
        ],
        "definitions": [
            {
                "text": "To jump on one foot.",
                "examples": [
                    "Can you hop like a rabbit?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hopped",
        "v3": "hopped",
        "group": "regular",
        "transcription": "h\u0251p",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ],
        "legacy_id": "A1-COMM-31",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-VERB-COM-023",
        "word": "play",
        "emoji": "\ud83c\udfae",
        "subtext": "play sport / play a game / play music / play a role",
        "form": "verb",
        "definitions": [
            {
                "text": "To take part in a game or sport; to produce music.",
                "examples": [
                    "He plays football at the weekend to de-stress."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "played",
        "v3": "played",
        "group": "regular",
        "transcription": "ple\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "work"
        ],
        "legacy_id": "A1-COMM-42",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-VERB-COM-025",
        "word": "relax",
        "emoji": "\ud83e\uddd8",
        "subtext": "relax at home / relax after work / relax on holiday",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop working and rest; to become less tense.",
                "examples": [
                    "I relax at the weekend and never check emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "relaxed",
        "v3": "relaxed",
        "group": "regular",
        "transcription": "r\u026a\u02c8l\u00e6ks",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "work"
        ],
        "legacy_id": "A1-COMM-46",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-VERB-COM-027",
        "word": "skip",
        "emoji": "\ud83c\udfc3",
        "form": "verb",
        "subtext": "skip rope",
        "synonyms": [
            "jump",
            "skipping"
        ],
        "definitions": [
            {
                "text": "To move along by jumping from one foot to the other.",
                "examples": [
                    "The children are skipping in the playground."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "skipped",
        "v3": "skipped",
        "group": "regular",
        "transcription": "sk\u026ap",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ],
        "legacy_id": "A1-COMM-55",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-VERB-COM-029",
        "word": "watch",
        "emoji": "\ud83d\udcfa",
        "form": "verb",
        "subtext": "watch TV / watch a film / watch the news / watch closely",
        "definitions": [
            {
                "text": "To look at something for a period of time.",
                "examples": [
                    "She watches the market news every morning before work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "watched",
        "v3": "watched",
        "group": "regular",
        "transcription": "w\u0254\u02a7",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ],
        "legacy_id": "A1-COMM-67",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Hobbies_Pastimes"
    },
    {
        "id": "A1-VERB-COM-031",
        "word": "win",
        "emoji": "\ud83c\udfc6",
        "subtext": "win a game / win a prize / win an award / win a contract",
        "form": "verb",
        "definitions": [
            {
                "text": "To be the best in a game or competition.",
                "examples": [
                    "We want to win the game."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "won",
        "v3": "won",
        "group": "irregular",
        "transcription": "w\u026an",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "lose"
        ],
        "legacy_id": "A1-COMM-69",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Hobbies_Pastimes"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
