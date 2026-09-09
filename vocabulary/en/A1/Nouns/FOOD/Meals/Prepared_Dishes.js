(function () {
  const data = [
  {
    "id": "A1-NOUN-FOO-071",
    "word": "bowl",
    "translation": "deep dish",
    "emoji": "🥣",
    "form": "noun",
    "definitions": [
      {
        "text": "A round, deep dish used for soup or cereal.",
        "examples": [
          "I eat my cereal from a large bowl."
        ]
      }
    ],
    "language": "en",
    "level": "starter",
    "theme": "dishes",
    "lang": "en",
    "transcription": "",
    "legacy_id": "A1-FOOD-01",
    "level_code": "A1",
    "domain": "FOOD",
    "subcategory": "Meals",
    "pos_section": "Nouns",
    "sub_subcategory": "Prepared_Dishes"
  },
  {
    "id": "A1-NOUN-FOO-073",
    "word": "cup",
    "translation": "small container for drinks",
    "emoji": "☕",
    "form": "noun",
    "definitions": [
      {
        "text": "A small container with a handle, used for tea or coffee.",
        "examples": [
          "Would you like a cup of tea?"
        ]
      }
    ],
    "language": "en",
    "level": "starter",
    "theme": "dishes",
    "lang": "en",
    "transcription": "",
    "legacy_id": "A1-FOOD-03",
    "level_code": "A1",
    "domain": "FOOD",
    "subcategory": "Meals",
    "pos_section": "Nouns",
    "sub_subcategory": "Prepared_Dishes"
  },
  {
    "id": "A1-NOUN-FOO-074",
    "word": "fork",
    "translation": "eating tool with prongs",
    "emoji": "🍴",
    "form": "noun",
    "definitions": [
      {
        "text": "A tool with prongs used for picking up food.",
        "examples": [
          "I use a fork to eat my salad."
        ]
      }
    ],
    "language": "en",
    "level": "starter",
    "theme": "dishes",
    "lang": "en",
    "transcription": "",
    "legacy_id": "A1-FOOD-04",
    "level_code": "A1",
    "domain": "FOOD",
    "subcategory": "Meals",
    "pos_section": "Nouns",
    "sub_subcategory": "Prepared_Dishes"
  },
  {
    "id": "A1-NOUN-FOO-075",
    "word": "glass",
    "translation": "drink container",
    "emoji": "🍷",
    "form": "noun",
    "definitions": [
      {
        "text": "A container made of glass, used for water or juice.",
        "examples": [
          "Could I have a glass of water, please?"
        ]
      }
    ],
    "language": "en",
    "level": "starter",
    "theme": "dishes",
    "lang": "en",
    "transcription": "",
    "legacy_id": "A1-FOOD-05",
    "level_code": "A1",
    "domain": "FOOD",
    "subcategory": "Meals",
    "pos_section": "Nouns",
    "sub_subcategory": "Prepared_Dishes"
  },
  {
    "id": "A1-NOUN-FOO-076",
    "word": "knife",
    "translation": "cutting tool",
    "emoji": "🔪",
    "form": "noun",
    "definitions": [
      {
        "text": "A tool with a blade used for cutting food.",
        "examples": [
          "Use a sharp knife to cut the meat."
        ]
      }
    ],
    "language": "en",
    "level": "starter",
    "theme": "dishes",
    "lang": "en",
    "transcription": "",
    "legacy_id": "A1-FOOD-06",
    "level_code": "A1",
    "domain": "FOOD",
    "subcategory": "Meals",
    "pos_section": "Nouns",
    "sub_subcategory": "Prepared_Dishes"
  },
  {
    "id": "A1-NOUN-FOO-079",
    "word": "plate",
    "translation": "flat dish",
    "emoji": "🍽️",
    "form": "noun",
    "definitions": [
      {
        "text": "A flat dish used for eating food.",
        "examples": [
          "Put the pasta on the plate."
        ]
      }
    ],
    "language": "en",
    "level": "starter",
    "theme": "dishes",
    "lang": "en",
    "transcription": "",
    "legacy_id": "A1-FOOD-09",
    "level_code": "A1",
    "domain": "FOOD",
    "subcategory": "Meals",
    "pos_section": "Nouns",
    "sub_subcategory": "Prepared_Dishes"
  },
  {
    "id": "A1-NOUN-FOO-080",
    "word": "spoon",
    "translation": "scooping tool",
    "emoji": "🥄",
    "form": "noun",
    "definitions": [
      {
        "text": "A tool with a shallow bowl used for eating soup or stirring drinks.",
        "examples": [
          "Eat your soup with a spoon."
        ]
      }
    ],
    "language": "en",
    "level": "starter",
    "theme": "dishes",
    "lang": "en",
    "transcription": "",
    "legacy_id": "A1-FOOD-10",
    "level_code": "A1",
    "domain": "FOOD",
    "subcategory": "Meals",
    "pos_section": "Nouns",
    "sub_subcategory": "Prepared_Dishes"
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
