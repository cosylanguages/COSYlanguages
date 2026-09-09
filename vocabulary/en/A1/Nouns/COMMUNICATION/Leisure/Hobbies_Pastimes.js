(function () {
  const data = [
  {
    "id": "A1-NOUN-COM-016",
    "word": "game",
    "emoji": "🎮",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "games",
    "definitions": [
      {
        "text": "An activity or sport that people play for fun.",
        "examples": [
          "Let's play a game."
        ]
      }
    ],
    "subtext": "related to leisure activities",
    "transcription": "geɪm",
    "lang": "en",
    "level": "starter",
    "theme": "leisure_activities",
    "sub_theme": null,
    "legacy_id": "A1-COMM-24",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A1-NOUN-COM-019",
    "word": "holiday",
    "emoji": "🏖️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "holidays",
    "subtext": "vacation, go on holiday",
    "synonyms": [
      "🇺🇸 vacation"
    ],
    "definitions": [
      {
        "text": "A period of time away from work when you travel or relax.",
        "examples": [
          "We have a holiday in July."
        ]
      }
    ],
    "transcription": "ˈhɑlɪˌdeɪ",
    "lang": "en",
    "level": "starter",
    "theme": "leisure_activities",
    "sub_theme": null,
    "legacy_id": "A1-COMM-30",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A1-NOUN-COM-020",
    "word": "party",
    "emoji": "🎉",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "parties",
    "subtext": "birthday party, go to a party",
    "definitions": [
      {
        "text": "A social event where people eat, drink, and dance.",
        "examples": [
          "We are having a party on Saturday."
        ]
      }
    ],
    "transcription": "ˈpɑrti",
    "lang": "en",
    "level": "starter",
    "theme": "leisure_activities",
    "sub_theme": null,
    "legacy_id": "A1-COMM-40",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A1-NOUN-COM-022",
    "word": "present",
    "emoji": "🎁",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "presents",
    "definitions": [
      {
        "text": "Something that you give to someone, especially on a special occasion.",
        "examples": [
          "I bought a birthday present for my friend."
        ]
      }
    ],
    "subtext": "birthday present",
    "synonyms": [
      "gift"
    ],
    "transcription": "ˈprɛzənt",
    "lang": "en",
    "level": "starter",
    "theme": "leisure_activities",
    "sub_theme": null,
    "legacy_id": "A1-COMM-45",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A1-NOUN-COM-093",
    "word": "dance",
    "emoji": "💃",
    "form": "noun",
    "transcription": "dæns",
    "definitions": [
      {
        "text": "A series of rhythmic steps and movements to music.",
        "examples": [
          "They took a Latin dance class.",
          "The traditional dance was festive."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Hobbies_Pastimes",
    "theme": "sports_hobbies"
  },
  {
    "id": "A1-NOUN-COM-094",
    "word": "drawing",
    "emoji": "✏️",
    "form": "noun",
    "transcription": "ˈdrɔːɪŋ",
    "definitions": [
      {
        "text": "A picture produced by drawing with pencil or pen.",
        "examples": [
          "She made a pencil drawing of a cat.",
          "Framed drawings hung on the wall."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Hobbies_Pastimes",
    "theme": "house_furniture"
  },
  {
    "id": "A1-NOUN-COM-095",
    "word": "photography",
    "emoji": "📷",
    "form": "noun",
    "transcription": "fəˈtɑːɡrəfi",
    "definitions": [
      {
        "text": "The art or practice of taking photos.",
        "examples": [
          "Nature photography takes patience.",
          "He bought a digital camera for photography."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Hobbies_Pastimes",
    "theme": "house_furniture"
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
