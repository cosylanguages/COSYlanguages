(function () {
  const data = [
  {
    "id": "A1-NOUN-WOR-001",
    "word": "college",
    "emoji": "🎓",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "colleges",
    "definitions": [
      {
        "text": "A place where students study after they leave school.",
        "examples": [
          "She is at college."
        ]
      }
    ],
    "subtext": "related to types of education",
    "transcription": "ˈkɑlɪʤ",
    "lang": "en",
    "level": "starter",
    "theme": "types_of_education",
    "sub_theme": null,
    "legacy_id": "A1-WORK-07",
    "level_code": "A1",
    "domain": "WORK_SCHOOL",
    "subcategory": "Education",
    "pos_section": "Nouns",
    "sub_subcategory": "Education_Systems"
  },
  {
    "id": "A1-NOUN-WOR-002",
    "word": "university",
    "emoji": "🎓",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "universities",
    "subtext": "study at university",
    "definitions": [
      {
        "text": "A place where people study for a degree.",
        "examples": [
          "She is studying at university."
        ]
      }
    ],
    "transcription": "ˌjunəˈvərsəti",
    "lang": "en",
    "level": "starter",
    "theme": "types_of_education",
    "sub_theme": null,
    "etymology": {
      "origin_lang": "Latin",
      "origin_word": "universitas",
      "origin_meaning": "the whole"
    },
    "legacy_id": "A1-WORK-51",
    "level_code": "A1",
    "domain": "WORK_SCHOOL",
    "subcategory": "Education",
    "pos_section": "Nouns",
    "sub_subcategory": "Education_Systems"
  },
  {
    "id": "A1-NOUN-WOR-078",
    "word": "course",
    "emoji": "📚",
    "form": "noun",
    "transcription": "kɔːrs",
    "definitions": [
      {
        "text": "A series of lessons or lectures in a particular subject.",
        "examples": [
          "I registered for an online English course.",
          "The course lasts twelve weeks."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "WORK_SCHOOL",
    "subcategory": "Education",
    "pos_section": "Nouns",
    "sub_subcategory": "Education_Systems",
    "theme": "house_furniture"
  },
  {
    "id": "A1-NOUN-WOR-079",
    "word": "degree",
    "emoji": "🎓",
    "form": "noun",
    "transcription": "dɪˈɡriː",
    "definitions": [
      {
        "text": "An academic title awarded by a university.",
        "examples": [
          "She earned a degree in computer science.",
          "A university degree opens career options."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "WORK_SCHOOL",
    "subcategory": "Education",
    "pos_section": "Nouns",
    "sub_subcategory": "Education_Systems",
    "theme": "weather_environment"
  },
  {
    "id": "A1-NOUN-WOR-082",
    "word": "subject",
    "emoji": "📚",
    "form": "noun",
    "transcription": "ˈsʌbʤəkt",
    "definitions": [
      {
        "text": "A branch of knowledge studied in school.",
        "examples": [
          "History is my favorite school subject.",
          "Which subjects do you enjoy most?"
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "WORK_SCHOOL",
    "subcategory": "Education",
    "pos_section": "Nouns",
    "sub_subcategory": "Education_Systems",
    "theme": "school_education"
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
