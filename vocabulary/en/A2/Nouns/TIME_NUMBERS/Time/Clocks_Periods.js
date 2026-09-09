(function () {
  const data = [
  {
    "id": "A2-NOUN-TIM-040",
    "word": "duration",
    "emoji": "⏱️",
    "form": "noun",
    "definitions": [
      {
        "text": "The length of time that something continues.",
        "examples": [
          "The duration of the concert was two hours.",
          "Parking is restricted for the duration of the event."
        ]
      }
    ],
    "subtext": "length, span",
    "synonyms": [
      "length",
      "span"
    ],
    "transcription": "djuˈreɪʃn",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "time",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A2-NOUN-TIM-041",
    "word": "interval",
    "emoji": "⏸️",
    "form": "noun",
    "definitions": [
      {
        "text": "A pause or break between two events or parts.",
        "examples": [
          "There is a twenty-minute interval in the play.",
          "Trains run at regular intervals."
        ]
      }
    ],
    "subtext": "break, pause",
    "synonyms": [
      "break",
      "pause"
    ],
    "transcription": "ˈɪntəvl",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "time",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A2-NOUN-TIM-058",
    "word": "gradualness",
    "emoji": "⏳",
    "form": "noun",
    "definitions": [
      {
        "text": "The quality of happening slowly over time.",
        "examples": [
          "The gradualness of climate change makes it hard to notice.",
          "Improvement came with steady gradualness."
        ]
      }
    ],
    "subtext": "slow pace",
    "synonyms": [
      "slow pace"
    ],
    "transcription": "ˈɡrædʒuəlnəs",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "time",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A2-NOUN-TIM-038",
    "word": "century",
    "emoji": "🏛️",
    "form": "noun",
    "transcription": "ˈsɛnʧəri",
    "definitions": [
      {
        "text": "A period of one hundred years.",
        "examples": [
          "The castle was built in the sixteenth century.",
          "Technology advanced rapidly last century."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A2-NOUN-TIM-039",
    "word": "moment",
    "emoji": "⏱️",
    "form": "noun",
    "transcription": "ˈmoʊmənt",
    "definitions": [
      {
        "text": "A very brief period of time.",
        "examples": [
          "Just a moment, I will check.",
          "She paused for a moment."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
  },
  {
    "id": "A2-NOUN-TIM-043",
    "word": "tonight",
    "emoji": "🌃",
    "form": "noun",
    "transcription": "təˈnaɪt",
    "definitions": [
      {
        "text": "On or during the present evening or night.",
        "examples": [
          "Are you going out tonight?",
          "Let us watch a movie tonight."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Clocks_Periods"
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
