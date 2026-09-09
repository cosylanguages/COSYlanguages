(function () {
  const data = [
  {
    "id": "A1-NOUN-SEL-094",
    "word": "nationality",
    "emoji": "🏳️",
    "form": "noun",
    "plural": "nationalities",
    "transcription": "ˌnæʃəˈnæləti",
    "definitions": [
      {
        "text": "The legal right of belonging to a particular nation.",
        "examples": [
          "What is your nationality?",
          "She has dual nationality."
        ]
      }
    ],
    "countability": "countable",
    "subtext": "British nationality, dual nationality",
    "lang": "en",
    "level": "starter",
    "theme": "personal_identity",
    "sub_theme": null,
    "legacy_id": "A1-SELF-44",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Nouns",
    "sub_subcategory": "Identity_Details"
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
