(function () {
  const data = [
  {
    "id": "A2-NOUN-SEL-108",
    "word": "background",
    "emoji": "📋",
    "form": "noun",
    "transcription": "ˈbækɡraʊnd",
    "definitions": [
      {
        "text": "A person's origin, education, and experience.",
        "examples": [
          "She has a background in music.",
          "They come from different backgrounds."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Nouns",
    "sub_subcategory": "Identity_Details"
  },
  {
    "id": "A2-NOUN-SEL-109",
    "word": "birth",
    "emoji": "👶",
    "form": "noun",
    "transcription": "bɜːrθ",
    "definitions": [
      {
        "text": "The time when a baby is born.",
        "examples": [
          "Please write your date of birth.",
          "Her birth brought great joy."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Nouns",
    "sub_subcategory": "Identity_Details"
  },
  {
    "id": "A2-NOUN-SEL-110",
    "word": "character",
    "emoji": "✨",
    "form": "noun",
    "transcription": "ˈkærəktər",
    "definitions": [
      {
        "text": "The mental and moral qualities distinctive to an individual.",
        "examples": [
          "He has a warm and friendly character.",
          "She showed great strength of character."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Nouns",
    "sub_subcategory": "Identity_Details"
  },
  {
    "id": "A2-NOUN-SEL-111",
    "word": "gender",
    "emoji": "⚤",
    "form": "noun",
    "transcription": "ˈʤɛndər",
    "definitions": [
      {
        "text": "The state of being male or female.",
        "examples": [
          "Please select your gender on the form.",
          "Gender balance is important in the workplace."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Nouns",
    "sub_subcategory": "Identity_Details"
  },
  {
    "id": "A2-NOUN-SEL-112",
    "word": "origin",
    "emoji": "📍",
    "form": "noun",
    "transcription": "ˈɔːrɪʤɪn",
    "definitions": [
      {
        "text": "The point or place where something begins or comes from.",
        "examples": [
          "What is the origin of this word?",
          "He is proud of his country of origin."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Nouns",
    "sub_subcategory": "Identity_Details"
  },
  {
    "id": "A2-NOUN-SEL-113",
    "word": "signature",
    "emoji": "✍️",
    "form": "noun",
    "transcription": "ˈsɪɡnəʧər",
    "definitions": [
      {
        "text": "A person's name written by themselves on a document.",
        "examples": [
          "Put your signature at the bottom of the page.",
          "Her signature was hard to read."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Nouns",
    "sub_subcategory": "Identity_Details"
  },
  {
    "id": "A2-NOUN-SEL-114",
    "word": "title",
    "emoji": "🏷️",
    "form": "noun",
    "transcription": "ˈtaɪtəl",
    "definitions": [
      {
        "text": "A word such as Mr or Dr used before a person's name.",
        "examples": [
          "Select your title from the drop-down menu.",
          "Dr is his official title."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Nouns",
    "sub_subcategory": "Identity_Details"
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
