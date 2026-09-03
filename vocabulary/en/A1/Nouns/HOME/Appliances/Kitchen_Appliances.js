(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-HOM-002",
        "word": "kettle",
        "emoji": "\ud83e\uded6",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "kettles",
        "definitions": [
            {
                "text": "A container with a lid, handle, and spout, used for boiling water.",
                "examples": [
                    "The kettle is boiling."
                ]
            }
        ],
        "subtext": "related to kitchen items",
        "transcription": "\u02c8k\u025bt\u0259l",
        "lang": "en",
        "level": "starter",
        "theme": "kitchen_items",
        "sub_theme": null,
        "legacy_id": "A1-HOME-02",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Appliances",
        "pos_section": "Nouns",
        "sub_subcategory": "Kitchen_Appliances"
    },
    {
        "id": "A1-NOUN-HOM-003",
        "word": "pan",
        "emoji": "\ud83c\udf73",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pans",
        "definitions": [
            {
                "text": "A metal container used for cooking food in.",
                "examples": [
                    "Put the pan on the stove."
                ]
            }
        ],
        "subtext": "related to kitchen items",
        "transcription": "p\u00e6n",
        "lang": "en",
        "level": "starter",
        "theme": "kitchen_items",
        "sub_theme": null,
        "legacy_id": "A1-HOME-03",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Appliances",
        "pos_section": "Nouns",
        "sub_subcategory": "Kitchen_Appliances"
    },
    {
        "id": "A1-NOUN-HOM-004",
        "word": "pot",
        "emoji": "\ud83c\udf72",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pots",
        "definitions": [
            {
                "text": "A deep round container used for cooking things in.",
                "examples": [
                    "The pot is full of soup."
                ]
            }
        ],
        "subtext": "related to kitchen items",
        "transcription": "p\u0251t",
        "lang": "en",
        "level": "starter",
        "theme": "kitchen_items",
        "sub_theme": null,
        "legacy_id": "A1-HOME-04",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Appliances",
        "pos_section": "Nouns",
        "sub_subcategory": "Kitchen_Appliances"
    },
    {
        "id": "A1-NOUN-HOM-081",
        "word": "cooker",
        "emoji": "\ud83c\udf73",
        "form": "noun",
        "transcription": "\u02c8k\u028ak\u0259r",
        "definitions": [
            {
                "text": "An appliance used for cooking food.",
                "examples": [
                    "Turn off the cooker when finished.",
                    "She bought a new electric cooker."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Appliances",
        "pos_section": "Nouns",
        "sub_subcategory": "Kitchen_Appliances"
    },
    {
        "id": "A1-NOUN-HOM-082",
        "word": "freezer",
        "emoji": "\ud83e\uddca",
        "form": "noun",
        "transcription": "\u02c8fri\u02d0z\u0259r",
        "definitions": [
            {
                "text": "An appliance for keeping food frozen.",
                "examples": [
                    "Keep ice cream in the freezer.",
                    "Stock the freezer with frozen peas."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Appliances",
        "pos_section": "Nouns",
        "sub_subcategory": "Kitchen_Appliances"
    },
    {
        "id": "A1-NOUN-HOM-083",
        "word": "microwave",
        "emoji": "\ud83d\udcfb",
        "form": "noun",
        "transcription": "\u02c8ma\u026akro\u028a\u02ccwe\u026av",
        "definitions": [
            {
                "text": "An oven that uses micro-radiation to cook food quickly.",
                "examples": [
                    "Heat your lunch in the microwave.",
                    "The microwave beeped when done."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Appliances",
        "pos_section": "Nouns",
        "sub_subcategory": "Kitchen_Appliances"
    },
    {
        "id": "A1-NOUN-HOM-084",
        "word": "refrigerator",
        "emoji": "\ud83e\uddca",
        "form": "noun",
        "transcription": "r\u026a\u02c8fr\u026a\u02a4\u0259\u02ccre\u026at\u0259r",
        "definitions": [
            {
                "text": "An appliance used to keep food cold.",
                "examples": [
                    "Put milk back into the refrigerator.",
                    "The refrigerator was full of groceries."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Appliances",
        "pos_section": "Nouns",
        "sub_subcategory": "Kitchen_Appliances"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
