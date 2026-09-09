(function () {
  const data = [
  {
    "id": "A1-ADJ-FOO-001",
    "word": "healthy",
    "emoji": "🥗",
    "form": "adjective",
    "subtext": "well, fit, healthy diet",
    "definitions": [
      {
        "text": "Good for your body; not ill.",
        "examples": [
          "Vegetables are healthy food."
        ]
      }
    ],
    "comparative": "healthier",
    "superlative": "the healthiest",
    "transcription": "ˈhɛlθi",
    "lang": "en",
    "level": "starter",
    "theme": "food_drink",
    "sub_theme": null,
    "antonyms": [
      "unhealthy"
    ],
    "legacy_id": "A1-FOOD-42",
    "level_code": "A1",
    "domain": "FOOD",
    "subcategory": "Ingredients",
    "pos_section": "Adjectives",
    "sub_subcategory": "Food_Beverages"
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
