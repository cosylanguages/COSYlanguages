(function () {
  const data = [
  {
    "id": "A2-NOUN-COM-056",
    "word": "answer",
    "emoji": "💬",
    "form": "noun",
    "definitions": [
      {
        "text": "A spoken or written reply to a question.",
        "examples": [
          "She gave a quick answer to my question.",
          "Check your answers at the back of the book."
        ]
      }
    ],
    "subtext": "reply, response",
    "synonyms": [
      "reply",
      "response"
    ],
    "transcription": "ˈɑːnsə",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "communication",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Nouns",
    "sub_subcategory": "Question_Forms"
  },
  {
    "id": "A2-NOUN-COM-056",
    "word": "conversation",
    "emoji": "💬",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "conversations",
    "definitions": [
      {
        "text": "A talk between two or more people.",
        "examples": [
          "We had a long conversation about work."
        ]
      }
    ],
    "subtext": "related to asking answering questions",
    "transcription": "ˌkɑnvərˈseɪʃən",
    "lang": "en",
    "level": "elementary",
    "theme": "asking_answering_questions",
    "sub_theme": null,
    "legacy_id": "A1-COMM-27",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Nouns",
    "sub_subcategory": "Question_Forms"
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
