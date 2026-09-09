(function () {
  const data = [
  {
    "id": "A1-ADJ-WOR-001",
    "word": "busy",
    "emoji": "🏃",
    "form": "adjective",
    "subtext": "very busy, busy day / busy schedule / very busy / too busy",
    "definitions": [
      {
        "text": "Having a lot of things to do.",
        "examples": [
          "I am very busy this week."
        ]
      },
      {
        "text": "Having much to do; crowded.",
        "examples": [
          "Monday morning is always very busy."
        ]
      }
    ],
    "comparative": "busier",
    "superlative": "the busiest",
    "transcription": "ˈbɪzi",
    "lang": "en",
    "level": "starter",
    "theme": "work",
    "sub_theme": null,
    "antonyms": [
      "free"
    ],
    "legacy_id": "A1-WORK-16",
    "level_code": "A1",
    "domain": "WORK_SCHOOL",
    "subcategory": "Work",
    "pos_section": "Adjectives",
    "sub_subcategory": "Jobs_Careers"
  },
  {
    "id": "A1-ADJ-WOR-007",
    "word": "ready",
    "emoji": "✅",
    "form": "adjective",
    "definitions": [
      {
        "text": "Prepared for what you are going to do.",
        "examples": [
          "Are you ready for work?"
        ]
      }
    ],
    "subtext": "get ready / almost ready",
    "synonyms": [
      "prepared"
    ],
    "comparative": "readier",
    "superlative": "the readiest",
    "transcription": "ˈrɛdi",
    "lang": "en",
    "level": "starter",
    "theme": "work",
    "sub_theme": null,
    "antonyms": [
      "unready"
    ],
    "legacy_id": "A1-WORK-108",
    "level_code": "A1",
    "domain": "WORK_SCHOOL",
    "subcategory": "Work",
    "pos_section": "Adjectives",
    "sub_subcategory": "Jobs_Careers"
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
