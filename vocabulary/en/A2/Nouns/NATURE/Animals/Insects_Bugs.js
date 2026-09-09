(function () {
  const data = [
  {
    "id": "A2-NOUN-NAT-076",
    "word": "insect",
    "emoji": "🐝",
    "form": "noun",
    "definitions": [
      {
        "text": "A small arthropod animal that has six legs.",
        "examples": [
          "Bees and ants are social insects.",
          "Protect your skin against insect bites."
        ]
      }
    ],
    "subtext": "bug, creature",
    "synonyms": [
      "bug",
      "creature"
    ],
    "transcription": "ˈɪnsekt",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "nature",
    "domain": "NATURE",
    "subcategory": "Animals",
    "pos_section": "Nouns",
    "sub_subcategory": "Insects_Bugs"
  },
  {
    "id": "A2-NOUN-NAT-082",
    "word": "bug",
    "emoji": "🐛",
    "form": "noun",
    "definitions": [
      {
        "text": "A small insect or a software error.",
        "examples": [
          "A tiny bug crawled up the leaf.",
          "Developers fixed a bug in the code."
        ]
      }
    ],
    "subtext": "insect, error",
    "synonyms": [
      "insect",
      "error"
    ],
    "transcription": "bʌɡ",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "nature",
    "domain": "NATURE",
    "subcategory": "Animals",
    "pos_section": "Nouns",
    "sub_subcategory": "Insects_Bugs"
  },
  {
    "id": "A2-NOUN-NAT-001",
    "word": "ant",
    "emoji": "🐜",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "ants",
    "definitions": [
      {
        "text": "A small insect that lives in large groups.",
        "examples": [
          "There are ants in the garden."
        ]
      }
    ],
    "subtext": "related to insects",
    "transcription": "ænt",
    "lang": "en",
    "level": "elementary",
    "theme": "insects",
    "sub_theme": "insects",
    "legacy_id": "A1-NAT-02",
    "level_code": "A2",
    "domain": "NATURE",
    "subcategory": "Animals",
    "pos_section": "Nouns",
    "sub_subcategory": "Insects_Bugs"
  },
  {
    "id": "A2-NOUN-NAT-046",
    "word": "mosquito",
    "emoji": "🦟",
    "form": "noun",
    "transcription": "məˈskiːtoʊ",
    "definitions": [
      {
        "text": "A small biting fly that transmits diseases.",
        "examples": [
          "Apply bug spray to prevent mosquito bites.",
          "Mosquitoes buzz near water."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "NATURE",
    "subcategory": "Animals",
    "pos_section": "Nouns",
    "sub_subcategory": "Insects_Bugs"
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
