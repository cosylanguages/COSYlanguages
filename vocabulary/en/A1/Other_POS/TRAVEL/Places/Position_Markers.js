(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-OTH-TRA-071",
        "word": "above",
        "form": "preposition",
        "definitions": [
            {
                "text": "In or to a higher position than something else.",
                "examples": [
                    "The shelf is above the desk."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "\u2b06\ufe0f",
        "transcription": "\u0259\u02c8b\u0259v",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "antonyms": [
            "below"
        ],
        "legacy_id": "A1-TRV-68",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Position_Markers"
    },
    {
        "id": "A1-OTH-TRA-072",
        "word": "around",
        "form": "preposition",
        "definitions": [
            {
                "text": "In a circle or in various places.",
                "examples": [
                    "We sat around the table.",
                    "Walk around the city."
                ]
            }
        ],
        "emoji": "\u2b55",
        "transcription": "\u0259\u02c8ra\u028and",
        "subtext": "around",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "A1-TRV-71",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Position_Markers"
    },
    {
        "id": "A1-OTH-TRA-073",
        "word": "below",
        "form": "preposition",
        "definitions": [
            {
                "text": "In or to a lower position than something else.",
                "examples": [
                    "The desk is below the shelf."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "\u2b07\ufe0f",
        "transcription": "b\u026a\u02c8lo\u028a",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "antonyms": [
            "above"
        ],
        "legacy_id": "A1-TRV-74",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Position_Markers"
    },
    {
        "id": "A1-OTH-TRA-074",
        "word": "from",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to show the place where someone or something starts.",
                "examples": [
                    "He is from Spain."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "\u2b05\ufe0f",
        "transcription": "fr\u0259m",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "A1-TRV-86",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Position_Markers"
    },
    {
        "id": "A1-OTH-TRA-075",
        "word": "inside",
        "form": "preposition",
        "definitions": [
            {
                "text": "In or into a container, room, or building.",
                "examples": [
                    "Go inside the house."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "\ud83c\udfe0",
        "transcription": "\u02cc\u026an\u02c8sa\u026ad",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "antonyms": [
            "outside"
        ],
        "legacy_id": "A1-TRV-89",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Position_Markers"
    },
    {
        "id": "A1-OTH-TRA-076",
        "word": "of",
        "form": "preposition",
        "definitions": [
            {
                "text": "Belonging to or connected with.",
                "examples": [
                    "The capital of England.",
                    "A cup of tea."
                ]
            }
        ],
        "emoji": "\ud83d\udd17",
        "transcription": "\ud83c\uddec\ud83c\udde7 \u0252v | \ud83c\uddfa\ud83c\uddf8 \u0251\u02d0v",
        "subtext": "of",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "A1-TRV-96",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Position_Markers"
    },
    {
        "id": "A1-OTH-TRA-077",
        "word": "outside",
        "form": "preposition",
        "definitions": [
            {
                "text": "Not in a particular room or building.",
                "examples": [
                    "It is cold outside."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "\ud83c\udf33",
        "transcription": "\u02c8a\u028at\u02c8sa\u026ad",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "antonyms": [
            "inside"
        ],
        "legacy_id": "A1-TRV-97",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Position_Markers"
    },
    {
        "id": "A1-OTH-TRA-078",
        "word": "with",
        "form": "preposition",
        "definitions": [
            {
                "text": "In the company of or including.",
                "examples": [
                    "I like coffee with milk."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "\u2795",
        "transcription": "w\u026a\u03b8",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "A1-TRV-117",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Position_Markers"
    },
    {
        "id": "A1-OTH-TRA-079",
        "word": "without",
        "form": "preposition",
        "definitions": [
            {
                "text": "Not having or including something.",
                "examples": [
                    "I prefer tea without sugar."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "\u2796",
        "transcription": "w\u026a\u02c8\u03b8a\u028at",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "A1-TRV-118",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Position_Markers"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
