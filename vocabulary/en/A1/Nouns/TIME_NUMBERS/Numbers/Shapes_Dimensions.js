(function () {
  const data = [
  {
    "id": "A1-NOUN-TIM-002",
    "word": "bottom",
    "emoji": "⬇️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "definitions": [
      {
        "text": "The lowest part of something.",
        "examples": [
          "Write your name at the bottom of the page."
        ]
      }
    ],
    "subtext": "related to size shape",
    "transcription": "ˈbɑtəm",
    "lang": "en",
    "level": "starter",
    "theme": "size_shape",
    "sub_theme": null,
    "antonyms": [
      "top"
    ],
    "legacy_id": "A1-NUM-07",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Numbers",
    "pos_section": "Nouns",
    "sub_subcategory": "Shapes_Dimensions"
  },
  {
    "id": "A1-NOUN-TIM-003",
    "word": "top",
    "emoji": "🔝",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "definitions": [
      {
        "text": "The highest part of something.",
        "examples": [
          "The book is on the top shelf."
        ]
      }
    ],
    "subtext": "related to size shape",
    "transcription": "tɔp",
    "lang": "en",
    "level": "starter",
    "theme": "size_shape",
    "sub_theme": null,
    "antonyms": [
      "bottom"
    ],
    "legacy_id": "A1-NUM-74",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Numbers",
    "pos_section": "Nouns",
    "sub_subcategory": "Shapes_Dimensions"
  },
  {
    "id": "A1-NOUN-TIM-049",
    "word": "circle",
    "emoji": "⚪",
    "form": "noun",
    "transcription": "ˈsɜːrkəl",
    "definitions": [
      {
        "text": "A round plane figure whose boundary consists of points equidistant from the center.",
        "examples": [
          "Draw a small circle on the paper.",
          "Children sat in a circle."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Numbers",
    "pos_section": "Nouns",
    "sub_subcategory": "Shapes_Dimensions",
    "theme": "numbers_measurement"
  },
  {
    "id": "A1-NOUN-TIM-050",
    "word": "line",
    "emoji": "📏",
    "form": "noun",
    "transcription": "laɪn",
    "definitions": [
      {
        "text": "A long thin mark or band.",
        "examples": [
          "Draw a straight line across the page.",
          "Stand in line for tickets."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Numbers",
    "pos_section": "Nouns",
    "sub_subcategory": "Shapes_Dimensions",
    "theme": "numbers_measurement"
  },
  {
    "id": "A1-NOUN-TIM-051",
    "word": "point",
    "emoji": "📍",
    "form": "noun",
    "transcription": "pɔɪnt",
    "definitions": [
      {
        "text": "A small dot or particular spot.",
        "examples": [
          "He marked a point on the map.",
          "What is the main point of this lesson?"
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Numbers",
    "pos_section": "Nouns",
    "sub_subcategory": "Shapes_Dimensions",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NOUN-TIM-052",
    "word": "shape",
    "emoji": "🔷",
    "form": "noun",
    "transcription": "ʃeɪp",
    "definitions": [
      {
        "text": "The external form or outline of something.",
        "examples": [
          "What shape is the mirror?",
          "Cut the paper into circle shapes."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Numbers",
    "pos_section": "Nouns",
    "sub_subcategory": "Shapes_Dimensions",
    "theme": "numbers_measurement"
  },
  {
    "id": "A1-NOUN-TIM-053",
    "word": "triangle",
    "emoji": "🔺",
    "form": "noun",
    "transcription": "ˈtraɪˌæŋɡəl",
    "definitions": [
      {
        "text": "A plane figure with three straight sides and three angles.",
        "examples": [
          "Draw a triangle on the board.",
          "A slice of pizza looks like a triangle."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Numbers",
    "pos_section": "Nouns",
    "sub_subcategory": "Shapes_Dimensions",
    "theme": "numbers_measurement"
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
