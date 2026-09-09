(function () {
  const data = [
  {
    "id": "A1-ADJ-COM-014",
    "word": "sorry",
    "translation": "sorry",
    "level": "starter",
    "theme": "social",
    "language": "en",
    "emoji": "🙇",
    "form": "adjective",
    "definitions": [
      {
        "text": "Used to apologize for something.",
        "examples": [
          "I am sorry I am late."
        ]
      }
    ],
    "transcription": "ˈsɑri",
    "lang": "en",
    "legacy_id": "A1-COMM-85",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Adjectives",
    "sub_subcategory": "Interactions"
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
