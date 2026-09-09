(function () {
  const data = [
  {
    "id": "A1-NOUN-COM-046",
    "word": "classroom",
    "emoji": "🏫",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "classrooms",
    "definitions": [
      {
        "text": "A room in a school where students have lessons.",
        "examples": [
          "The students are in the classroom."
        ]
      }
    ],
    "subtext": "related to classroom language",
    "transcription": "ˈklæsˌrum",
    "lang": "en",
    "level": "starter",
    "theme": "language",
    "sub_theme": null,
    "legacy_id": "A1-COMM-22",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Nouns",
    "sub_subcategory": "Language_Terms"
  },
  {
    "id": "A1-NOUN-COM-048",
    "word": "example",
    "emoji": "💡",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "examples",
    "subtext": "for example",
    "definitions": [
      {
        "text": "A thing that is representative of all such things.",
        "examples": [
          "Can you give me an example?"
        ]
      }
    ],
    "transcription": "ɪgˈzæmpəl",
    "lang": "en",
    "level": "starter",
    "theme": "language",
    "sub_theme": null,
    "legacy_id": "A1-COMM-36",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Nouns",
    "sub_subcategory": "Language_Terms"
  },
  {
    "id": "A1-NOUN-COM-050",
    "word": "map",
    "emoji": "🗺️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "maps",
    "definitions": [
      {
        "text": "A drawing of a particular area, such as a city or a country.",
        "examples": [
          "Look at the map."
        ]
      }
    ],
    "subtext": "related to classroom language",
    "transcription": "mæp",
    "lang": "en",
    "level": "starter",
    "theme": "language",
    "sub_theme": null,
    "legacy_id": "A1-COMM-51",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Nouns",
    "sub_subcategory": "Language_Terms"
  },
  {
    "id": "A1-NOUN-COM-053",
    "word": "ruler",
    "emoji": "📏",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "rulers",
    "definitions": [
      {
        "text": "A flat straight piece of wood or plastic used for measuring things.",
        "examples": [
          "Use a ruler to draw a line."
        ]
      }
    ],
    "subtext": "related to classroom language",
    "transcription": "ˈrulər",
    "lang": "en",
    "level": "starter",
    "theme": "language",
    "sub_theme": null,
    "legacy_id": "A1-COMM-75",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Nouns",
    "sub_subcategory": "Language_Terms"
  },
  {
    "id": "A1-NOUN-COM-054",
    "word": "sentence",
    "emoji": "📝",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "sentences",
    "definitions": [
      {
        "text": "A group of words that expresses a complete thought.",
        "examples": [
          "Write a sentence about your family."
        ]
      }
    ],
    "subtext": "related to classroom language",
    "transcription": "ˈsɛntəns",
    "lang": "en",
    "level": "starter",
    "theme": "language",
    "sub_theme": null,
    "legacy_id": "A1-COMM-77",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Nouns",
    "sub_subcategory": "Language_Terms"
  },
  {
    "id": "A1-NOUN-COM-055",
    "word": "word",
    "emoji": "📝",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "words",
    "definitions": [
      {
        "text": "A single unit of language.",
        "examples": [
          "What does this word mean?"
        ]
      }
    ],
    "subtext": "related to classroom language",
    "transcription": "wərd",
    "lang": "en",
    "level": "starter",
    "theme": "language",
    "sub_theme": null,
    "legacy_id": "A1-COMM-118",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Nouns",
    "sub_subcategory": "Language_Terms"
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
