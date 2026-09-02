(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-OTH-TRA-01",
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
        "emoji": "⬆️",
        "transcription": "əˈbəv",
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
        "sub_subcategory": "Position_Spatial_Markers"
    },
    {
        "id": "A1-OTH-TRA-02",
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
        "emoji": "⭕",
        "transcription": "əˈraʊnd",
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
        "sub_subcategory": "Position_Spatial_Markers"
    },
    {
        "id": "A1-OTH-TRA-03",
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
        "emoji": "⬇️",
        "transcription": "bɪˈloʊ",
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
        "sub_subcategory": "Position_Spatial_Markers"
    },
    {
        "id": "A1-OTH-TRA-04",
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
        "emoji": "⬅️",
        "transcription": "frəm",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "A1-TRV-86",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Position_Spatial_Markers"
    },
    {
        "id": "A1-OTH-TRA-05",
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
        "emoji": "🏠",
        "transcription": "ˌɪnˈsaɪd",
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
        "sub_subcategory": "Position_Spatial_Markers"
    },
    {
        "id": "A1-OTH-TRA-06",
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
        "emoji": "🔗",
        "transcription": "🇬🇧 ɒv | 🇺🇸 ɑːv",
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
        "sub_subcategory": "Position_Spatial_Markers"
    },
    {
        "id": "A1-OTH-TRA-07",
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
        "emoji": "🌳",
        "transcription": "ˈaʊtˈsaɪd",
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
        "sub_subcategory": "Position_Spatial_Markers"
    },
    {
        "id": "A1-OTH-TRA-08",
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
        "emoji": "➕",
        "transcription": "wɪθ",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "A1-TRV-117",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Position_Spatial_Markers"
    },
    {
        "id": "A1-OTH-TRA-09",
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
        "emoji": "➖",
        "transcription": "wɪˈθaʊt",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "A1-TRV-118",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Position_Spatial_Markers"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
