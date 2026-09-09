(function () {
  const data = [
  {
    "id": "A2-NOUN-COM-015",
    "word": "free time",
    "emoji": "🎮",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "definitions": [
      {
        "text": "Time when you are not working and can do what you want.",
        "examples": [
          "I read books in my free time."
        ]
      }
    ],
    "subtext": "related to leisure activities",
    "transcription": "fri taɪm",
    "lang": "en",
    "level": "elementary",
    "theme": "leisure_activities",
    "sub_theme": null,
    "legacy_id": "A1-COMM-23",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A2-NOUN-COM-017",
    "word": "guest",
    "emoji": "🏨",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "guests",
    "definitions": [
      {
        "text": "A person who is staying in a hotel or visiting someone's home.",
        "examples": [
          "We have two guests staying with us."
        ]
      }
    ],
    "subtext": "related to leisure activities",
    "transcription": "gɛst",
    "lang": "en",
    "level": "elementary",
    "theme": "leisure_activities",
    "sub_theme": null,
    "legacy_id": "A1-COMM-25",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A2-NOUN-COM-018",
    "word": "gym",
    "emoji": "🏋️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "gyms",
    "subtext": "go to the gym",
    "synonyms": [
      "fitness center"
    ],
    "definitions": [
      {
        "text": "A room or building with equipment for doing physical exercise.",
        "examples": [
          "I go to the gym three times a week."
        ]
      }
    ],
    "transcription": "ʤɪm",
    "lang": "en",
    "level": "elementary",
    "theme": "leisure_activities",
    "sub_theme": null,
    "legacy_id": "A1-COMM-27",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A2-NOUN-COM-021",
    "word": "playground",
    "emoji": "🛝",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "playgrounds",
    "definitions": [
      {
        "text": "An outside area where children can play.",
        "examples": [
          "The children are at the playground."
        ]
      }
    ],
    "subtext": "related to leisure activities",
    "transcription": "ˈpleɪˌgraʊnd",
    "lang": "en",
    "level": "elementary",
    "theme": "leisure_activities",
    "sub_theme": null,
    "legacy_id": "A1-COMM-44",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A2-NOUN-COM-092",
    "word": "camping",
    "emoji": "🏕️",
    "form": "noun",
    "transcription": "ˈkæmpɪŋ",
    "definitions": [
      {
        "text": "The activity of spending a holiday living in a tent.",
        "examples": [
          "We went camping in the mountains.",
          "Bring a sleeping bag for camping."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Hobbies_Pastimes"
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
