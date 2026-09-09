(function () {
  const data = [
  {
    "id": "A2-ADJ-COM-009",
    "word": "attached",
    "emoji": "📎",
    "form": "adjective",
    "definitions": [
      {
        "text": "Joined or fastened to something.",
        "examples": [
          "Please find the attached document in email.",
          "The garage is attached to the house."
        ]
      }
    ],
    "subtext": "connected, fastened",
    "synonyms": [
      "connected",
      "fastened"
    ],
    "transcription": "əˈtætʃt",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "technology",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Adjectives",
    "sub_subcategory": "Digital_Devices"
  },
  {
    "id": "A2-ADJ-COM-018",
    "word": "offline",
    "emoji": "📴",
    "form": "adjective",
    "subtext": "work offline / go offline",
    "synonyms": [
      "disconnected"
    ],
    "definitions": [
      {
        "text": "Not using or connected to the internet.",
        "examples": [
          "You can read this document offline."
        ]
      }
    ],
    "comparative": null,
    "superlative": null,
    "transcription": "ˈɔˌflaɪn",
    "lang": "en",
    "level": "elementary",
    "theme": "technology",
    "sub_theme": null,
    "antonyms": [
      "online"
    ],
    "legacy_id": "A1-COMM-19",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Adjectives",
    "sub_subcategory": "Digital_Devices"
  },
  {
    "id": "A2-ADJ-COM-020",
    "word": "online",
    "emoji": "🌐",
    "form": "adjective",
    "definitions": [
      {
        "text": "Using the internet.",
        "examples": [
          "I buy food online sometimes."
        ]
      }
    ],
    "subtext": "online shopping / online course / stay online",
    "comparative": "more online",
    "superlative": "the most online",
    "transcription": "ˈɔnˌlaɪn",
    "lang": "en",
    "level": "elementary",
    "theme": "technology",
    "sub_theme": null,
    "antonyms": [
      "offline"
    ],
    "legacy_id": "A1-COMM-21",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Adjectives",
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
