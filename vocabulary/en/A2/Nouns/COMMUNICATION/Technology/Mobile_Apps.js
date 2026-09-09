(function () {
  const data = [
  {
    "id": "A2-NOUN-COM-118",
    "word": "app",
    "emoji": "📲",
    "form": "noun",
    "transcription": "æp",
    "definitions": [
      {
        "text": "An application software program downloaded to a mobile device.",
        "examples": [
          "Download the language learning app.",
          "This app tracks daily steps."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Nouns",
    "sub_subcategory": "Mobile_Apps"
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
