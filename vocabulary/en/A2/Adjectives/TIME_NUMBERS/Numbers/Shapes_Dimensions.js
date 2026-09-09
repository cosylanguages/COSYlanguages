(function () {
  const data = [
  {
    "id": "A2-ADJ-TIM-021",
    "word": "broad",
    "emoji": "📐",
    "form": "adjective",
    "definitions": [
      {
        "text": "Having an ample distance from side to side; wide.",
        "examples": [
          "The river flows through a broad valley.",
          "He has broad shoulders and a wide smile."
        ]
      }
    ],
    "subtext": "wide, spacious",
    "synonyms": [
      "wide",
      "spacious"
    ],
    "transcription": "brɔːd",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "numbers",
    "domain": "TIME_NUMBERS",
    "subcategory": "Numbers",
    "pos_section": "Adjectives",
    "sub_subcategory": "Shapes_Dimensions"
  },
  {
    "id": "A2-ADJ-TIM-010",
    "word": "deep",
    "emoji": "🕳️",
    "form": "adjective",
    "subtext": "deep water / a deep hole",
    "synonyms": [
      "bottomless"
    ],
    "definitions": [
      {
        "text": "Going a long way from the top or surface to the bottom.",
        "examples": [
          "The river is very deep here."
        ]
      }
    ],
    "comparative": "deeper",
    "superlative": "the deepest",
    "transcription": "dip",
    "lang": "en",
    "level": "elementary",
    "theme": "size_shape",
    "sub_theme": null,
    "antonyms": [
      "shallow"
    ],
    "legacy_id": "A1-NUM-10",
    "level_code": "A2",
    "domain": "TIME_NUMBERS",
    "subcategory": "Numbers",
    "pos_section": "Adjectives",
    "sub_subcategory": "Shapes_Dimensions"
  },
  {
    "id": "A2-ADJ-TIM-048",
    "word": "shallow",
    "emoji": "📏",
    "form": "adjective",
    "subtext": "shallow water / a shallow end",
    "synonyms": [
      "not deep"
    ],
    "definitions": [
      {
        "text": "Having only a short distance from the top to the bottom.",
        "examples": [
          "The water is shallow, so we can walk across."
        ]
      }
    ],
    "comparative": "shallower",
    "superlative": "the shallowest",
    "transcription": "ˈʃæloʊ",
    "lang": "en",
    "level": "elementary",
    "theme": "size_shape",
    "sub_theme": null,
    "antonyms": [
      "deep"
    ],
    "legacy_id": "A1-NUM-56",
    "level_code": "A2",
    "domain": "TIME_NUMBERS",
    "subcategory": "Numbers",
    "pos_section": "Adjectives",
    "sub_subcategory": "Shapes_Dimensions"
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
