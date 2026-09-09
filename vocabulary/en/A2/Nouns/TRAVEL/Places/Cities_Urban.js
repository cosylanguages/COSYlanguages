(function () {
  const data = [
  {
    "id": "A2-NOUN-TRA-059",
    "word": "avenue",
    "emoji": "🏙️",
    "form": "noun",
    "transcription": "ˈævəˌnjuː",
    "definitions": [
      {
        "text": "A broad road or street in a city.",
        "examples": [
          "Tree-lined avenues run through the city.",
          "Our office is on Fifth Avenue."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Cities_Urban"
  },
  {
    "id": "A2-NOUN-TRA-063",
    "word": "crossroad",
    "emoji": "🚦",
    "form": "noun",
    "transcription": "ˈkrɔːsˌroʊd",
    "definitions": [
      {
        "text": "An intersection where two or more roads cross.",
        "examples": [
          "Turn left at the next crossroad.",
          "The traffic light stands at the crossroad."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Cities_Urban"
  },
  {
    "id": "A2-NOUN-TRA-064",
    "word": "district",
    "emoji": "🏙️",
    "form": "noun",
    "transcription": "ˈdɪstrɪkt",
    "definitions": [
      {
        "text": "An area of a country or city having distinct characteristics.",
        "examples": [
          "Explore the historic district on foot.",
          "She lives in the financial district."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Cities_Urban"
  },
  {
    "id": "A2-NOUN-TRA-065",
    "word": "neighborhood",
    "emoji": "🏡",
    "form": "noun",
    "transcription": "ˈneɪbərˌhʊd",
    "definitions": [
      {
        "text": "A district forming a community within a town or city.",
        "examples": [
          "It is a quiet friendly neighborhood.",
          "Children play in our neighborhood."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Cities_Urban"
  },
  {
    "id": "A2-NOUN-TRA-067",
    "word": "suburb",
    "emoji": "🏡",
    "form": "noun",
    "transcription": "ˈsʌbərb",
    "definitions": [
      {
        "text": "An outlying district of a city.",
        "examples": [
          "They moved to a quiet suburb.",
          "Commuters travel daily from the suburbs."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Cities_Urban"
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
