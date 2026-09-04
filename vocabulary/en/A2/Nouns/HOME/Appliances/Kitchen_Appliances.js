(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-HOM-014",
        "word": "appliance",
        "emoji": "🔌",
        "form": "noun",
        "definitions": [
            {
                "text": "A device or piece of equipment designed to perform a domestic task.",
                "examples": [
                    "Modern kitchen appliances save time and energy.",
                    "The store sells refrigerators and other appliances."
                ]
            }
        ],
        "subtext": "device, machine",
        "synonyms": [
            "device",
            "machine"
        ],
        "transcription": "əˈplaɪəns",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "home",
        "domain": "HOME",
        "subcategory": "Appliances",
        "pos_section": "Nouns",
        "sub_subcategory": "Kitchen_Appliances"
    },
    {
        "id": "A2-NOUN-HOM-032",
        "word": "bulb",
        "emoji": "💡",
        "form": "noun",
        "definitions": [
            {
                "text": "A glass bulb containing a gas, inserted into a lamp socket.",
                "examples": [
                    "Change the burnt-out light bulb.",
                    "An LED bulb saves electrical energy."
                ]
            }
        ],
        "subtext": "lamp bulb",
        "synonyms": [
            "lamp bulb"
        ],
        "transcription": "bʌlb",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "home",
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
