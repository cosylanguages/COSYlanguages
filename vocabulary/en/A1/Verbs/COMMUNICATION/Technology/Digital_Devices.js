(function () {
  const data = [
  {
    "id": "A1-VERB-COM-139",
    "word": "call",
    "emoji": "📞",
    "subtext": "call someone / call back / call a meeting / call in sick",
    "form": "verb",
    "definitions": [
      {
        "text": "To telephone someone.",
        "examples": [
          "I call my clients every morning before checking emails."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "called",
    "v3": "called",
    "group": "regular",
    "transcription": "kɔl",
    "lang": "en",
    "level": "starter",
    "theme": "technology",
    "sub_theme": null,
    "antonyms": [
      "hang up"
    ],
    "legacy_id": "A1-COMM-02",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Verbs",
    "sub_subcategory": "Digital_Devices"
  },
  {
    "id": "A1-VERB-COM-141",
    "word": "ring",
    "emoji": "🔔",
    "form": "verb",
    "subtext": "ring a bell",
    "synonyms": [
      "chime",
      "phone is ringing"
    ],
    "definitions": [
      {
        "text": "To make a sound like a bell.",
        "examples": [
          "The phone is ringing."
        ]
      }
    ],
    "classification": "irregular",
    "aspect": "action",
    "v2": "rang",
    "v3": "rung",
    "group": "irregular",
    "transcription": "rɪŋ",
    "lang": "en",
    "level": "starter",
    "theme": "technology",
    "sub_theme": null,
    "antonyms": [
      "be silent"
    ],
    "legacy_id": "A1-COMM-27",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Verbs",
    "sub_subcategory": "Digital_Devices"
  },
  {
    "id": "A1-VERB-COM-147",
    "word": "use",
    "emoji": "🛠️",
    "subtext": "use a phone / use public transport / use a computer / use time",
    "form": "verb",
    "definitions": [
      {
        "text": "To employ something for a purpose.",
        "examples": [
          "I use my phone for everything.",
          "She uses public transport."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "used",
    "v3": "used",
    "group": "regular",
    "transcription": "juz",
    "lang": "en",
    "level": "starter",
    "theme": "technology",
    "sub_theme": null,
    "antonyms": [
      "waste"
    ],
    "legacy_id": "A1-COMM-38",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Verbs",
    "sub_subcategory": "Digital_Devices"
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
