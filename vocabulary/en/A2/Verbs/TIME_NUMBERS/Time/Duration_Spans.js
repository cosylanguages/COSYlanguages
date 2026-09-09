(function () {
  const data = [
  {
    "id": "A2-VERB-TIM-014",
    "word": "ago",
    "emoji": "🕰️",
    "form": "adverb",
    "definitions": [
      {
        "text": "Back in time from now.",
        "examples": [
          "He left ten minutes ago."
        ]
      }
    ],
    "subtext": "related to duration expressions",
    "transcription": "əˈgoʊ",
    "lang": "en",
    "level": "elementary",
    "theme": "duration_expressions",
    "sub_theme": null,
    "legacy_id": "A1-NUM-23",
    "level_code": "A2",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Verbs",
    "sub_subcategory": "Duration_Spans"
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
