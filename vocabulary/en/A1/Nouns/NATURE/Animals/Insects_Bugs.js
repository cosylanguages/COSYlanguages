(function () {
  const data = [
  {
    "id": "A1-NOUN-NAT-002",
    "word": "butterfly",
    "emoji": "🦋",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "butterflies",
    "definitions": [
      {
        "text": "An insect with four large, usually brightly colored wings.",
        "examples": [
          "Look at that beautiful butterfly."
        ]
      }
    ],
    "subtext": "related to insects",
    "transcription": "ˈbətərˌflaɪ",
    "lang": "en",
    "level": "starter",
    "theme": "insects",
    "sub_theme": "insects",
    "etymology": {
      "origin_lang": "Proto-Germanic",
      "origin_word": "butturafleugōn"
    },
    "legacy_id": "A1-NAT-06",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Animals",
    "pos_section": "Nouns",
    "sub_subcategory": "Insects_Bugs"
  },
  {
    "id": "A1-NOUN-NAT-045",
    "word": "fly",
    "emoji": "🪰",
    "form": "noun",
    "transcription": "flaɪ",
    "definitions": [
      {
        "text": "A two-winged insect.",
        "examples": [
          "Close the window to keep out flies.",
          "A fly buzzed around the room."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Animals",
    "pos_section": "Nouns",
    "sub_subcategory": "Insects_Bugs",
    "theme": "animals_nature"
  },
  {
    "id": "A1-NOUN-NAT-098",
    "word": "frog",
    "form": "noun",
    "transcription": "frɑːɡ",
    "emoji": "🐸",
    "definitions": [
      {
        "text": "A small green animal that lives in water and jumps on land.",
        "examples": [
          "The frog jumps into the water.",
          "Green frogs live near ponds."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Animals",
    "pos_section": "Nouns",
    "sub_subcategory": "Insects_Bugs",
    "theme": "animals_nature"
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
