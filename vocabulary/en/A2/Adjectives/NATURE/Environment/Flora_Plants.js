(function () {
  const data = [
  {
    "id": "A2-ADJ-NAT-014",
    "word": "agricultural",
    "emoji": "🌾",
    "form": "adjective",
    "definitions": [
      {
        "text": "Relating to agriculture or farming.",
        "examples": [
          "The valley is a rich agricultural region.",
          "Agricultural production increased this harvest."
        ]
      }
    ],
    "subtext": "farming, rural",
    "synonyms": [
      "farming",
      "rural"
    ],
    "transcription": "ˌæɡrɪˈkʌltʃərəl",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "nature",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Adjectives",
    "sub_subcategory": "Flora_Plants"
  },
  {
    "id": "A2-ADJ-NAT-002",
    "word": "natural",
    "emoji": "🌱",
    "form": "adjective",
    "subtext": "natural light / natural products",
    "synonyms": [
      "nature-made"
    ],
    "definitions": [
      {
        "text": "Existing in nature; not made or caused by people.",
        "examples": [
          "I prefer natural products."
        ]
      }
    ],
    "comparative": "more natural",
    "superlative": "the most natural",
    "transcription": "ˈnæʧərəl",
    "lang": "en",
    "level": "elementary",
    "theme": "plants_natural_world",
    "sub_theme": null,
    "antonyms": [
      "artificial"
    ],
    "legacy_id": "A1-NAT-19",
    "level_code": "A2",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Adjectives",
    "sub_subcategory": "Flora_Plants"
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
