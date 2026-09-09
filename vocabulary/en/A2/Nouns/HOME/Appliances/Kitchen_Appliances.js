(function () {
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
  },
  {
    "id": "A2-NOUN-HOM-002",
    "word": "kettle",
    "emoji": "🫖",
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
    "transcription": "ˈkɛtəl",
    "lang": "en",
    "level": "elementary",
    "theme": "kitchen_items",
    "sub_theme": null,
    "legacy_id": "A1-HOME-02",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Appliances",
    "pos_section": "Nouns",
    "sub_subcategory": "Kitchen_Appliances"
  },
  {
    "id": "A2-NOUN-HOM-081",
    "word": "cooker",
    "emoji": "🍳",
    "form": "noun",
    "transcription": "ˈkʊkər",
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
    "level": "elementary",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Appliances",
    "pos_section": "Nouns",
    "sub_subcategory": "Kitchen_Appliances"
  },
  {
    "id": "A2-NOUN-HOM-082",
    "word": "freezer",
    "emoji": "🧊",
    "form": "noun",
    "transcription": "ˈfriːzər",
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
    "level": "elementary",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Appliances",
    "pos_section": "Nouns",
    "sub_subcategory": "Kitchen_Appliances"
  }
];

  if (typeof window !== "undefined") {
    if (!window.vocabularyData) {
      window.vocabularyData = {};
    }
    if (!window.vocabularyData.en) {
      window.vocabularyData.en = [];
    }
    window.vocabularyData.en.push(...data);
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  }
})();
