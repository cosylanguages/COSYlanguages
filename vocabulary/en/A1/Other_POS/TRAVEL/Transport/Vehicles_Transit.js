(function () {
  const data = [
  {
    "id": "A1-OTH-TRA-080",
    "word": "by",
    "form": "preposition",
    "definitions": [
      {
        "text": "Used to show how someone travels or how something is done.",
        "examples": [
          "I go to work by bus.",
          "He is standing by the door."
        ]
      }
    ],
    "emoji": "🚌",
    "transcription": "baɪ",
    "subtext": "by",
    "lang": "en",
    "level": "starter",
    "theme": "modes_of_transport",
    "sub_theme": null,
    "legacy_id": "A1-TRV-08",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Transport",
    "pos_section": "Other_POS",
    "sub_subcategory": "Vehicles_Transit"
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
