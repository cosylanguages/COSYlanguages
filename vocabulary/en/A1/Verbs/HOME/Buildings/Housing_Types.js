(function () {
  const data = [
  {
    "id": "A1-VERB-HOM-003",
    "word": "stay",
    "emoji": "🏨",
    "subtext": "stay at home / stay in a hotel / stay up late / stay with someone",
    "form": "verb",
    "definitions": [
      {
        "text": "To continue to be in a place.",
        "examples": [
          "I stay at home on Sundays.",
          "We are staying in a hotel."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "stayed",
    "v3": "stayed",
    "group": "regular",
    "transcription": "steɪ",
    "lang": "en",
    "level": "starter",
    "theme": "types_of_accommodation",
    "sub_theme": null,
    "antonyms": [
      "leave"
    ],
    "legacy_id": "A1-HOME-03",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Buildings",
    "pos_section": "Verbs",
    "sub_subcategory": "Housing_Types"
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
