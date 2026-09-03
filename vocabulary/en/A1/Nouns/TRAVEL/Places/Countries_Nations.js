(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-TRA-004",
        "word": "country",
        "emoji": "\ud83c\udff3\ufe0f",
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
        "transcription": "\u02c8k\u0259ntri",
        "lang": "en",
        "level": "starter",
        "theme": "countries_capitals",
        "sub_theme": null,
        "legacy_id": "A1-TRV-81",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Countries_Nations"
    },
    {
        "id": "A1-NOUN-TRA-005",
        "word": "world",
        "emoji": "\ud83c\udf0e",
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
        "transcription": "w\u0259rld",
        "lang": "en",
        "level": "starter",
        "theme": "countries_capitals",
        "sub_theme": null,
        "legacy_id": "A1-TRV-119",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Countries_Nations"
    },
    {
        "id": "A1-NOUN-TRA-068",
        "word": "border",
        "emoji": "\ud83d\uddfa\ufe0f",
        "form": "noun",
        "transcription": "\u02c8b\u0254\u02d0rd\u0259r",
        "definitions": [
            {
                "text": "A line separating two political or geographical areas.",
                "examples": [
                    "Show passports at the border checkpoint.",
                    "The river forms a natural border."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Countries_Nations"
    },
    {
        "id": "A1-NOUN-TRA-069",
        "word": "island",
        "emoji": "\ud83c\udfdd\ufe0f",
        "form": "noun",
        "transcription": "\u02c8a\u026al\u0259nd",
        "definitions": [
            {
                "text": "A piece of land surrounded by water.",
                "examples": [
                    "They spent summer on a tropical island.",
                    "Majorca is a popular island destination."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Countries_Nations"
    },
    {
        "id": "A1-NOUN-TRA-070",
        "word": "nation",
        "emoji": "\ud83c\uddfa\ud83c\uddf3",
        "form": "noun",
        "transcription": "\u02c8ne\u026a\u0283\u0259n",
        "definitions": [
            {
                "text": "A large body of people united by common descent.",
                "examples": [
                    "Nations signed an international agreement.",
                    "His nation celebrates independence."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Countries_Nations"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
