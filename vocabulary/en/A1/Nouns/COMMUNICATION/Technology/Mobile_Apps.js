(function () {
  const data = [
  {
    "id": "A1-NOUN-COM-075",
    "word": "information",
    "emoji": "ℹ️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": null,
    "subtext": "info, give information",
    "definitions": [
      {
        "text": "Facts or details about something or someone.",
        "examples": [
          "Can you give me some information about the hotel?",
          "I found the information on the website."
        ]
      }
    ],
    "transcription": "ˌɪnfəˈmeɪʃn",
    "lang": "en",
    "level": "starter",
    "theme": "using_smartphone",
    "sub_theme": null,
    "legacy_id": "A1-COMM-09",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Nouns",
    "sub_subcategory": "Mobile_Apps"
  },
  {
    "id": "A1-NOUN-COM-076",
    "word": "internet",
    "emoji": "🌐",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": null,
    "definitions": [
      {
        "text": "The international network of computers.",
        "examples": [
          "I use the internet every day."
        ]
      }
    ],
    "subtext": "related to using smartphone",
    "transcription": "ˈɪntərˌnɛt",
    "lang": "en",
    "level": "starter",
    "theme": "using_smartphone",
    "sub_theme": null,
    "legacy_id": "A1-COMM-10",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Nouns",
    "sub_subcategory": "Mobile_Apps"
  },
  {
    "id": "A1-NOUN-COM-077",
    "word": "letter",
    "emoji": "✉️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "letters",
    "subtext": "write a letter",
    "definitions": [
      {
        "text": "A message that you write on paper and send to someone.",
        "examples": [
          "He is writing a letter to his parents."
        ]
      }
    ],
    "transcription": "ˈlɛtər",
    "lang": "en",
    "level": "starter",
    "theme": "using_smartphone",
    "sub_theme": null,
    "legacy_id": "A1-COMM-13",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Nouns",
    "sub_subcategory": "Mobile_Apps"
  },
  {
    "id": "A1-NOUN-COM-078",
    "word": "message",
    "emoji": "💬",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "messages",
    "definitions": [
      {
        "text": "A piece of information that you send to someone.",
        "examples": [
          "I sent her a message on WhatsApp."
        ]
      }
    ],
    "subtext": "related to using smartphone",
    "transcription": "ˈmɛsɪʤ",
    "lang": "en",
    "level": "starter",
    "theme": "using_smartphone",
    "sub_theme": null,
    "legacy_id": "A1-COMM-15",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Nouns",
    "sub_subcategory": "Mobile_Apps"
  },
  {
    "id": "A1-NOUN-COM-079",
    "word": "news",
    "emoji": "📰",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": null,
    "subtext": "latest news, good news",
    "definitions": [
      {
        "text": "Information about recent events.",
        "examples": [
          "I watch the news every evening.",
          "Have you heard the news?"
        ]
      }
    ],
    "transcription": "nuz",
    "lang": "en",
    "level": "starter",
    "theme": "using_smartphone",
    "sub_theme": null,
    "legacy_id": "A1-COMM-17",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Nouns",
    "sub_subcategory": "Mobile_Apps"
  },
  {
    "id": "A1-NOUN-COM-080",
    "word": "website",
    "emoji": "💻",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "websites",
    "definitions": [
      {
        "text": "A set of pages on the internet with information about a subject.",
        "examples": [
          "This is a useful website for learning English."
        ]
      }
    ],
    "subtext": "related to using smartphone",
    "transcription": "ˈwɛbˌsaɪt",
    "lang": "en",
    "level": "starter",
    "theme": "using_smartphone",
    "sub_theme": null,
    "legacy_id": "A1-COMM-40",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Nouns",
    "sub_subcategory": "Mobile_Apps"
  },
  {
    "id": "A1-NOUN-COM-119",
    "word": "email",
    "emoji": "📧",
    "form": "noun",
    "transcription": "ˈiːˌmeɪl",
    "definitions": [
      {
        "text": "Messages distributed by electronic means.",
        "examples": [
          "Send me an email with details.",
          "Check your inbox for my email."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Nouns",
    "sub_subcategory": "Mobile_Apps",
    "theme": "technology_communication"
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
