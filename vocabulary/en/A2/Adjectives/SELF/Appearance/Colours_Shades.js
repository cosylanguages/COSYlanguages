(function () {
  const data = [
  {
    "id": "A2-ADJ-SEL-241",
    "word": "pale",
    "emoji": "🎨",
    "form": "adjective",
    "transcription": "peɪl",
    "definitions": [
      {
        "text": "Light in color or shade.",
        "examples": [
          "She looked pale after being sick.",
          "The walls are painted pale green."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Adjectives",
    "sub_subcategory": "Colours_Shades"
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
