(function () {
  const data = [
  {
    "id": "A1-ADJ-SEL-211",
    "word": "dead",
    "emoji": "💀",
    "form": "adjective",
    "definitions": [
      {
        "text": "Not living anymore.",
        "examples": [
          "The flowers are dead."
        ]
      }
    ],
    "subtext": "dead leaves / completely dead",
    "synonyms": [
      "deceased"
    ],
    "comparative": null,
    "superlative": null,
    "transcription": "dɛd",
    "lang": "en",
    "level": "starter",
    "theme": "health_medicine",
    "sub_theme": null,
    "antonyms": [
      "alive"
    ],
    "legacy_id": "A1-SELF-17",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Adjectives",
    "sub_subcategory": "General_Identity"
  },
  {
    "id": "A1-ADJ-SEL-214",
    "word": "fit",
    "form": "adjective",
    "definitions": [
      {
        "text": "In good physical condition through exercise.",
        "examples": [
          "She keeps fit by cycling to work every day."
        ]
      }
    ],
    "subtext": "physically fit / stay fit / keep fit",
    "synonyms": [
      "healthy",
      "in shape"
    ],
    "comparative": "fitter",
    "superlative": "the fittest",
    "emoji": "🏋️",
    "transcription": "fɪt",
    "lang": "en",
    "level": "starter",
    "theme": "health_medicine",
    "sub_theme": null,
    "antonyms": [
      "unfit"
    ],
    "legacy_id": "A1-SELF-25",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Adjectives",
    "sub_subcategory": "General_Identity"
  },
  {
    "id": "A1-ADJ-SEL-216",
    "word": "ill",
    "emoji": "🤒",
    "form": "adjective",
    "subtext": "sick, feel ill",
    "definitions": [
      {
        "text": "Not well; sick.",
        "examples": [
          "I feel ill today."
        ]
      }
    ],
    "comparative": "more ill",
    "superlative": "the most ill",
    "transcription": "ɪl",
    "lang": "en",
    "level": "starter",
    "theme": "health_medicine",
    "sub_theme": null,
    "antonyms": [
      "well"
    ],
    "legacy_id": "A1-SELF-33",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Adjectives",
    "sub_subcategory": "General_Identity"
  },
  {
    "id": "A1-ADJ-SEL-221",
    "word": "well",
    "emoji": "💪",
    "form": "adjective",
    "subtext": "feel well / get well soon",
    "synonyms": [
      "healthy",
      "fit"
    ],
    "definitions": [
      {
        "text": "Healthy; not ill.",
        "examples": [
          "I hope you are well.",
          "She feels well today."
        ]
      }
    ],
    "comparative": "better",
    "superlative": "the best",
    "transcription": "wɛl",
    "lang": "en",
    "level": "starter",
    "theme": "health_medicine",
    "sub_theme": null,
    "antonyms": [
      "ill"
    ],
    "legacy_id": "A1-SELF-70",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Adjectives",
    "sub_subcategory": "General_Identity"
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
