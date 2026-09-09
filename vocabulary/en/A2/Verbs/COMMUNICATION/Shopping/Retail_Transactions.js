(function () {
  const data = [
  {
    "id": "A2-VERB-COM-047",
    "word": "earn",
    "definitions": [
      {
        "text": "To receive money for work done.",
        "examples": [
          "She earns a good salary as a project manager."
        ]
      }
    ],
    "subtext": "earn a salary / earn money / earn more / earn enough",
    "classification": "regular",
    "aspect": "action",
    "v2": "earned",
    "v3": "earned",
    "emoji": "💶",
    "form": "verb",
    "group": "regular",
    "transcription": "ərn",
    "lang": "en",
    "level": "elementary",
    "theme": "shopping",
    "sub_theme": null,
    "antonyms": [
      "spend"
    ],
    "legacy_id": "A1-COMM-16",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Shopping",
    "pos_section": "Verbs",
    "sub_subcategory": "Retail_Transactions"
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
