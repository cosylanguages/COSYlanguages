(function () {
  const data = [
  {
    "id": "A1-VERB-COM-037",
    "word": "jump",
    "emoji": "🦘",
    "subtext": "jump high / jump over / jump up / jump in",
    "form": "verb",
    "definitions": [
      {
        "text": "To push yourself off the ground with your legs.",
        "examples": [
          "Can you jump high?",
          "The cat jumped onto the table."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "jumped",
    "v3": "jumped",
    "group": "regular",
    "transcription": "ʤəmp",
    "lang": "en",
    "level": "starter",
    "theme": "playing_watching_sport",
    "sub_theme": null,
    "antonyms": [
      "fall"
    ],
    "legacy_id": "A1-COMM-33",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Spectator_Sports"
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
