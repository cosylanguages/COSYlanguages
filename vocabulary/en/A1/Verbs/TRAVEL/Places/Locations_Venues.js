(function () {
  const data = [
  {
    "id": "A1-VERB-TRA-001",
    "word": "live",
    "emoji": "🏠",
    "subtext": "live in a flat / live alone / live with someone / live abroad",
    "form": "verb",
    "definitions": [
      {
        "text": "To have your home in a place; to be alive.",
        "examples": [
          "He lives in a flat near the centre.",
          "We live together."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "stative",
    "v2": "lived",
    "v3": "lived",
    "group": "regular",
    "transcription": "lɪv",
    "lang": "en",
    "level": "starter",
    "theme": "places",
    "sub_theme": null,
    "antonyms": [
      "die"
    ],
    "legacy_id": "A1-TRV-91",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Verbs",
    "sub_subcategory": "Locations_Venues"
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
