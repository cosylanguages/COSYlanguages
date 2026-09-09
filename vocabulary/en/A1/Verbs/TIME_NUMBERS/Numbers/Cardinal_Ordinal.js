(function () {
  const data = [
  {
    "id": "A1-VERB-TIM-003",
    "word": "count",
    "emoji": "🔢",
    "form": "verb",
    "subtext": "count to ten / count numbers",
    "synonyms": [
      "calculate"
    ],
    "definitions": [
      {
        "text": "To say numbers in order.",
        "examples": [
          "Can you count from one to ten?"
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "counted",
    "v3": "counted",
    "group": "regular",
    "transcription": "kaʊnt",
    "lang": "en",
    "level": "starter",
    "theme": "numbers",
    "sub_theme": null,
    "antonyms": [
      "estimate"
    ],
    "legacy_id": "A1-NUM-08",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Numbers",
    "pos_section": "Verbs",
    "sub_subcategory": "Cardinal_Ordinal"
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
