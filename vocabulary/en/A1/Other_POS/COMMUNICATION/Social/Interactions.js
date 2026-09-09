(function () {
  const data = [
  {
    "id": "A1-OTH-COM-001",
    "word": "goodbye",
    "translation": "goodbye",
    "level": "starter",
    "theme": "social",
    "language": "en",
    "emoji": "👋",
    "form": "interjection",
    "definitions": [
      {
        "text": "Used when you are leaving someone.",
        "examples": [
          "Goodbye! See you tomorrow."
        ]
      }
    ],
    "transcription": "ɡʊdˈbaɪ",
    "lang": "en",
    "legacy_id": "A1-COMM-41",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Other_POS",
    "sub_subcategory": "Interactions"
  },
  {
    "id": "A1-OTH-COM-002",
    "word": "hello",
    "translation": "hello",
    "level": "starter",
    "theme": "social",
    "language": "en",
    "emoji": "👋",
    "form": "interjection",
    "definitions": [
      {
        "text": "Used as a greeting when you meet someone.",
        "examples": [
          "Hello, how are you?"
        ]
      }
    ],
    "transcription": "həˈloʊ",
    "lang": "en",
    "legacy_id": "A1-COMM-42",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Other_POS",
    "sub_subcategory": "Interactions"
  },
  {
    "id": "A1-OTH-COM-003",
    "word": "thank you",
    "translation": "thank you",
    "level": "starter",
    "theme": "social",
    "language": "en",
    "emoji": "😊",
    "form": "phrase",
    "definitions": [
      {
        "text": "Used to show that you are grateful for something.",
        "examples": [
          "Thank you for your help."
        ]
      }
    ],
    "transcription": "θæŋk ju",
    "lang": "en",
    "legacy_id": "A1-COMM-94",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Other_POS",
    "sub_subcategory": "Interactions"
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
