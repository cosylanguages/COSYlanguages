(function () {
  const data = [
  {
    "id": "A1-NOUN-TIM-004",
    "word": "afternoon",
    "emoji": "☀️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "subtext": "this afternoon, good afternoon",
    "definitions": [
      {
        "text": "The part of the day from noon until the evening.",
        "examples": [
          "I finish work at five in the afternoon."
        ]
      }
    ],
    "transcription": "ˌæftərˈnun",
    "lang": "en",
    "level": "starter",
    "theme": "time",
    "sub_theme": null,
    "antonyms": [
      "evening"
    ],
    "legacy_id": "A1-NUM-22",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A1-NOUN-TIM-005",
    "word": "day",
    "emoji": "☀️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "days",
    "definitions": [
      {
        "text": "A period of 24 hours.",
        "examples": [
          "I work five days a week."
        ]
      }
    ],
    "subtext": "related to times day",
    "transcription": "deɪ",
    "lang": "en",
    "level": "starter",
    "theme": "time",
    "sub_theme": null,
    "etymology": {
      "origin_lang": "Proto-Germanic",
      "origin_word": "dagaz"
    },
    "antonyms": [
      "night"
    ],
    "legacy_id": "A1-NUM-28",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A1-NOUN-TIM-006",
    "word": "evening",
    "emoji": "🌆",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "subtext": "this evening, good evening",
    "definitions": [
      {
        "text": "The part of the day after afternoon and before night.",
        "examples": [
          "We eat dinner in the evening."
        ]
      }
    ],
    "transcription": "ˈivnɪŋ",
    "lang": "en",
    "level": "starter",
    "theme": "time",
    "sub_theme": null,
    "antonyms": [
      "morning"
    ],
    "legacy_id": "A1-NUM-32",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A1-NOUN-TIM-007",
    "word": "hour",
    "emoji": "⏰",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "hours",
    "definitions": [
      {
        "text": "A period of sixty minutes.",
        "examples": [
          "I work eight hours a day."
        ]
      }
    ],
    "subtext": "related to telling time",
    "transcription": "aʊər",
    "lang": "en",
    "level": "starter",
    "theme": "time",
    "sub_theme": null,
    "legacy_id": "A1-NUM-35",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A1-NOUN-TIM-008",
    "word": "minute",
    "emoji": "⏲️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "minutes",
    "definitions": [
      {
        "text": "A period of sixty seconds.",
        "examples": [
          "Wait a minute, please."
        ]
      }
    ],
    "subtext": "related to telling time",
    "transcription": "ˈmɪnət",
    "lang": "en",
    "level": "starter",
    "theme": "time",
    "sub_theme": null,
    "legacy_id": "A1-NUM-40",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A1-NOUN-TIM-009",
    "word": "morning",
    "emoji": "🌅",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "subtext": "early morning, good morning",
    "definitions": [
      {
        "text": "The part of the day before 12 o'clock.",
        "examples": [
          "I start work in the morning."
        ]
      }
    ],
    "transcription": "ˈmɔrnɪŋ",
    "lang": "en",
    "level": "starter",
    "theme": "time",
    "sub_theme": null,
    "antonyms": [
      "evening"
    ],
    "legacy_id": "A1-NUM-42",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A1-NOUN-TIM-010",
    "word": "night",
    "emoji": "🌙",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "nights",
    "subtext": "good night, at night",
    "definitions": [
      {
        "text": "The period of darkness between evening and morning.",
        "examples": [
          "I sleep eight hours every night."
        ]
      }
    ],
    "transcription": "naɪt",
    "lang": "en",
    "level": "starter",
    "theme": "time",
    "sub_theme": null,
    "etymology": {
      "origin_lang": "Proto-Germanic",
      "origin_word": "nahts"
    },
    "antonyms": [
      "day"
    ],
    "legacy_id": "A1-NUM-44",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A1-NOUN-TIM-011",
    "word": "second",
    "emoji": "⏱️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "seconds",
    "definitions": [
      {
        "text": "One of the sixty parts that a minute is divided into.",
        "examples": [
          "The light changes every thirty seconds."
        ]
      }
    ],
    "subtext": "related to telling time",
    "transcription": "ˈsɛkənd",
    "lang": "en",
    "level": "starter",
    "theme": "time",
    "sub_theme": null,
    "legacy_id": "A1-NUM-46",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A1-NOUN-TIM-012",
    "word": "time",
    "emoji": "⌚",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "subtext": "what time is it?, spend time",
    "definitions": [
      {
        "text": "What is measured in minutes, hours, days, etc.",
        "examples": [
          "What time is it?",
          "I don't have much time."
        ]
      }
    ],
    "transcription": "taɪm",
    "lang": "en",
    "level": "starter",
    "theme": "time",
    "sub_theme": null,
    "etymology": {
      "origin_lang": "Proto-Germanic",
      "origin_word": "tīmô"
    },
    "legacy_id": "A1-NUM-51",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A1-NOUN-TIM-013",
    "word": "week",
    "emoji": "📅",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "weeks",
    "subtext": "next week, last week",
    "definitions": [
      {
        "text": "A period of seven days.",
        "examples": [
          "I work five days a week."
        ]
      }
    ],
    "transcription": "wik",
    "lang": "en",
    "level": "starter",
    "theme": "time",
    "sub_theme": null,
    "legacy_id": "A1-NUM-55",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A1-NOUN-TIM-014",
    "word": "weekend",
    "emoji": "📅",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "weekends",
    "subtext": "at the weekend, on weekends",
    "definitions": [
      {
        "text": "Saturday and Sunday.",
        "examples": [
          "I relax at the weekend."
        ]
      }
    ],
    "transcription": "ˈwiˌkɪnd",
    "lang": "en",
    "level": "starter",
    "theme": "time",
    "sub_theme": null,
    "legacy_id": "A1-NUM-56",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A1-NOUN-TIM-040",
    "word": "noon",
    "emoji": "☀️",
    "form": "noun",
    "transcription": "nuːn",
    "definitions": [
      {
        "text": "Twelve o'clock in the middle of the day.",
        "examples": [
          "Let us meet for lunch at noon.",
          "The sun is highest at noon."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods",
    "theme": "time_calendar"
  },
  {
    "id": "A1-NOUN-TIM-041",
    "word": "today",
    "emoji": "📅",
    "form": "noun",
    "transcription": "təˈdeɪ",
    "definitions": [
      {
        "text": "On or during the present day.",
        "examples": [
          "What are your plans for today?",
          "Today is sunny and warm."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods",
    "theme": "time_calendar"
  },
  {
    "id": "A1-NOUN-TIM-042",
    "word": "tomorrow",
    "emoji": "📅",
    "form": "noun",
    "transcription": "təˈmɑːroʊ",
    "definitions": [
      {
        "text": "On the day after today.",
        "examples": [
          "See you tomorrow morning.",
          "Tomorrow is a public holiday."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods",
    "theme": "time_calendar"
  },
  {
    "id": "A1-NOUN-TIM-044",
    "word": "yesterday",
    "emoji": "📅",
    "form": "noun",
    "transcription": "ˈjɛstərˌdeɪ",
    "definitions": [
      {
        "text": "On the day before today.",
        "examples": [
          "I saw him yesterday afternoon.",
          "Yesterday was rainy and cold."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods",
    "theme": "time_calendar"
  },
  {
    "id": "A1-NEW-025",
    "word": "birthday",
    "emoji": "📝",
    "form": "noun",
    "definitions": [
      "Basic A1 English noun: 'birthday'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Nouns",
    "sub_subcategory": "General",
    "theme": "time_calendar"
  },
  {
    "id": "A1-NEW-102",
    "word": "future",
    "emoji": "📝",
    "form": "noun",
    "definitions": [
      "Basic A1 English noun: 'future'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Nouns",
    "sub_subcategory": "General",
    "theme": "time_calendar"
  },
  {
    "id": "A1-NEW-189",
    "word": "midnight",
    "emoji": "📝",
    "form": "noun",
    "definitions": [
      "Basic A1 English noun: 'midnight'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Nouns",
    "sub_subcategory": "General",
    "theme": "time_calendar"
  },
  {
    "id": "A1-NEW-208",
    "word": "o'clock",
    "emoji": "📝",
    "form": "noun",
    "definitions": [
      "Basic A1 English noun: 'o'clock'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Nouns",
    "sub_subcategory": "General",
    "theme": "time_calendar"
  },
  {
    "id": "A1-NEW-220",
    "word": "past",
    "emoji": "📝",
    "form": "preposition",
    "definitions": [
      "Basic A1 English preposition: 'past'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Other_POS",
    "sub_subcategory": "General",
    "theme": "time_calendar"
  },
  {
    "id": "A1-NEW-241",
    "word": "quarter",
    "emoji": "📝",
    "form": "noun",
    "definitions": [
      "Basic A1 English noun: 'quarter'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Nouns",
    "sub_subcategory": "General",
    "theme": "time_calendar"
  },
  {
    "id": "A1-NEW-312",
    "word": "then",
    "emoji": "📝",
    "form": "adverb",
    "definitions": [
      "Basic A1 English adverb: 'then'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Other_POS",
    "sub_subcategory": "General",
    "theme": "time_calendar"
  },
  {
    "id": "A1-NEW-341",
    "word": "weekday",
    "emoji": "📝",
    "form": "noun",
    "definitions": [
      "Basic A1 English noun: 'weekday'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Nouns",
    "sub_subcategory": "General",
    "theme": "time_calendar"
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
