(function () {
  const data = [
  {
    "id": "A1-ADJ-NAT-001",
    "word": "alive",
    "emoji": "🌱",
    "form": "adjective",
    "subtext": "stay alive / still alive",
    "synonyms": [
      "living"
    ],
    "definitions": [
      {
        "text": "Living, not dead.",
        "examples": [
          "The plant is still alive."
        ]
      }
    ],
    "comparative": null,
    "superlative": null,
    "transcription": "əˈlaɪv",
    "lang": "en",
    "level": "starter",
    "theme": "plants_natural_world",
    "sub_theme": null,
    "antonyms": [
      "dead"
    ],
    "legacy_id": "A1-NAT-01",
    "level_code": "A1",
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
