(function () {
  const data = [
  {
    "id": "A1-NEW-083",
    "word": "feeling",
    "emoji": "📝",
    "form": "noun",
    "definitions": [
      "Basic A1 English noun: 'feeling'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Nouns",
    "sub_subcategory": "General",
    "theme": "feelings_emotions"
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
