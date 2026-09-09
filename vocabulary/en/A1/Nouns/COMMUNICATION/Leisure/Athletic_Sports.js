(function () {
  const data = [
  {
    "id": "A1-NOUN-COM-001",
    "word": "ball",
    "emoji": "⚽",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "balls",
    "definitions": [
      {
        "text": "A round object used in games and sports.",
        "examples": [
          "He kicked the ball."
        ]
      }
    ],
    "subtext": "related to sports equipment",
    "transcription": "bɔl",
    "lang": "en",
    "level": "starter",
    "theme": "sports",
    "sub_theme": null,
    "legacy_id": "A1-COMM-04",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Athletic_Sports"
  },
  {
    "id": "A1-NOUN-COM-003",
    "word": "basketball",
    "emoji": "🏀",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": null,
    "definitions": [
      {
        "text": "A game where two teams try to throw a ball through a high net.",
        "examples": [
          "He plays basketball every Wednesday."
        ]
      }
    ],
    "subtext": "related to common sports",
    "transcription": "ˈbæskətˌbɔl",
    "lang": "en",
    "level": "starter",
    "theme": "sports",
    "sub_theme": null,
    "legacy_id": "A1-COMM-08",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Athletic_Sports"
  },
  {
    "id": "A1-NOUN-COM-005",
    "word": "football",
    "emoji": "⚽",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": null,
    "subtext": "related to common sports",
    "synonyms": [
      "soccer"
    ],
    "definitions": [
      {
        "text": "A game played by two teams of eleven players who kick a ball.",
        "examples": [
          "They are playing football in the park."
        ]
      }
    ],
    "transcription": "ˈfʊtˌbɔl",
    "lang": "en",
    "level": "starter",
    "theme": "sports",
    "sub_theme": null,
    "legacy_id": "A1-COMM-22",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Athletic_Sports"
  },
  {
    "id": "A1-NOUN-COM-006",
    "word": "sport",
    "emoji": "⚽",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "sports",
    "definitions": [
      {
        "text": "A game or activity such as football or tennis.",
        "examples": [
          "My favorite sport is tennis."
        ]
      }
    ],
    "subtext": "related to common sports",
    "transcription": "spɔrt",
    "lang": "en",
    "level": "starter",
    "theme": "sports",
    "sub_theme": null,
    "legacy_id": "A1-COMM-58",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Athletic_Sports"
  },
  {
    "id": "A1-NOUN-COM-007",
    "word": "tennis",
    "emoji": "🎾",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": null,
    "definitions": [
      {
        "text": "A game played by two or four players with rackets and a ball.",
        "examples": [
          "Do you want to play tennis?"
        ]
      }
    ],
    "subtext": "related to common sports",
    "transcription": "ˈtɛnɪs",
    "lang": "en",
    "level": "starter",
    "theme": "sports",
    "sub_theme": null,
    "legacy_id": "A1-COMM-62",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Athletic_Sports"
  },
  {
    "id": "A1-NOUN-COM-087",
    "word": "swimming",
    "emoji": "🏊",
    "form": "noun",
    "transcription": "ˈswɪmɪŋ",
    "definitions": [
      {
        "text": "The sport or activity of propelling oneself through water.",
        "examples": [
          "Swimming is great exercise.",
          "She goes swimming every morning."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Athletic_Sports",
    "theme": "sports_hobbies"
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
