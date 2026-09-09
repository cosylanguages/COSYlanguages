(function () {
  const data = [
  {
    "id": "A2-ADJ-HOM-001",
    "word": "cozy",
    "emoji": "🛋️",
    "form": "adjective",
    "definitions": [
      {
        "text": "Giving a feeling of comfort, warmth, and relaxation.",
        "examples": [
          "They spent a cozy evening by the fireplace.",
          "The cafe has a small cozy corner."
        ]
      }
    ],
    "subtext": "warm, comfortable",
    "synonyms": [
      "warm",
      "comfortable"
    ],
    "transcription": "ˈkəʊzi",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "home",
    "domain": "HOME",
    "subcategory": "Furniture",
    "pos_section": "Adjectives",
    "sub_subcategory": "Living_Furniture"
  },
  {
    "id": "A2-ADJ-HOM-002",
    "word": "adjusted",
    "emoji": "🔧",
    "form": "adjective",
    "definitions": [
      {
        "text": "Altered or arranged to fit a new condition.",
        "examples": [
          "The chair has an adjusted height.",
          "She felt well adjusted to her new school."
        ]
      }
    ],
    "subtext": "adapted, tuned",
    "synonyms": [
      "adapted",
      "tuned"
    ],
    "transcription": "əˈdʒʌstɪd",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "home",
    "domain": "HOME",
    "subcategory": "Furniture",
    "pos_section": "Adjectives",
    "sub_subcategory": "Living_Furniture"
  },
  {
    "id": "A2-ADJ-HOM-001",
    "word": "comfortable",
    "emoji": "🛋️",
    "form": "adjective",
    "subtext": "a comfortable chair / feel comfortable",
    "synonyms": [
      "relaxed",
      "cozy"
    ],
    "definitions": [
      {
        "text": "Making you feel physically relaxed, without any pain or without being too hot, cold, etc.",
        "examples": [
          "This chair is very comfortable."
        ]
      }
    ],
    "comparative": "more comfortable",
    "superlative": "the most comfortable",
    "transcription": "ˈkəmfərtəbəl",
    "lang": "en",
    "level": "elementary",
    "theme": "furniture",
    "sub_theme": null,
    "legacy_id": "A1-HOME-17",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Furniture",
    "pos_section": "Adjectives",
    "sub_subcategory": "Living_Furniture"
  },
  {
    "id": "A2-ADJ-HOM-003",
    "word": "uncomfortable",
    "emoji": "🪑",
    "form": "adjective",
    "subtext": "feel uncomfortable / uncomfortable chair",
    "synonyms": [
      "awkward",
      "painful"
    ],
    "definitions": [
      {
        "text": "Not comfortable; causing physical pain or feeling awkward.",
        "examples": [
          "This chair is very uncomfortable."
        ]
      }
    ],
    "comparative": "more uncomfortable",
    "superlative": "the most uncomfortable",
    "transcription": "ənˈkəmfərtəbəl",
    "lang": "en",
    "level": "elementary",
    "theme": "furniture",
    "sub_theme": null,
    "legacy_id": "A1-HOME-70",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Furniture",
    "pos_section": "Adjectives",
    "sub_subcategory": "Living_Furniture"
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
