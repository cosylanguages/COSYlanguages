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
            "id": "A2-NOUN-HOM-015",
            "word": "refrigerator",
            "emoji": "🧊",
            "form": "noun",
            "definitions": [
                    {
                            "text": "An appliance used for keeping food and drinks cold.",
                            "examples": [
                                    "Keep milk inside the refrigerator.",
                                    "The refrigerator door was left open."
                            ]
                    }
            ],
            "subtext": "fridge",
            "synonyms": [
                    "fridge"
            ],
            "transcription": "rɪˈfrɪdʒəreɪtə",
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
            "id": "A2-NOUN-HOM-024",
            "word": "kettle",
            "emoji": "🫖",
            "form": "noun",
            "definitions": [
                    {
                            "text": "A container or device in which water is boiled.",
                            "examples": [
                                    "Boil water in the electric kettle.",
                                    "The kettle whistled on the stove."
                            ]
                    }
            ],
            "subtext": "boiler",
            "synonyms": [
                    "boiler"
            ],
            "transcription": "ˈketl",
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

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
