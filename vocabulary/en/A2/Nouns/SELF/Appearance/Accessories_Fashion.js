(function () {
  const data = [
  {
    "id": "A2-NOUN-SEL-146",
    "word": "jewel",
    "emoji": "💎",
    "form": "noun",
    "definitions": [
      {
        "text": "A precious stone, typically a single crystal or cut stone.",
        "examples": [
          "Gems and jewels sparkled in the display.",
          "She wore a necklace set with jewels."
        ]
      }
    ],
    "subtext": "gem, stone",
    "synonyms": [
      "gem",
      "stone"
    ],
    "transcription": "ˈdʒuːəl",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "identity",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
  },
  {
    "id": "A2-NOUN-SEL-152",
    "word": "leather",
    "emoji": "👞",
    "form": "noun",
    "definitions": [
      {
        "text": "A material made from the skin of an animal by tanning.",
        "examples": [
          "He wore a stylish black leather jacket.",
          "She bought a genuine leather handbag."
        ]
      }
    ],
    "subtext": "animal hide",
    "synonyms": [
      "animal hide"
    ],
    "transcription": "ˈleðə",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "identity",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
  },
  {
    "id": "A2-NOUN-SEL-004",
    "word": "jewelry",
    "emoji": "💍",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": null,
    "subtext": "jewellery, gold jewelry",
    "definitions": [
      {
        "text": "Decorative objects that you wear on your body, such as rings or necklaces.",
        "examples": [
          "She is wearing a lot of jewelry."
        ]
      }
    ],
    "transcription": "ˈʤuəlri",
    "lang": "en",
    "level": "elementary",
    "theme": "accessories",
    "sub_theme": null,
    "legacy_id": "A1-SELF-96",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
  },
  {
    "id": "A2-NOUN-SEL-005",
    "word": "necklace",
    "emoji": "📿",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "necklaces",
    "definitions": [
      {
        "text": "A piece of jewelry that you wear around your neck.",
        "examples": [
          "She is wearing a beautiful necklace."
        ]
      }
    ],
    "subtext": "related to accessories",
    "transcription": "ˈnɛkləs",
    "lang": "en",
    "level": "elementary",
    "theme": "accessories",
    "sub_theme": null,
    "legacy_id": "A1-SELF-108",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
  },
  {
    "id": "A2-NOUN-SEL-133",
    "word": "earring",
    "emoji": "💎",
    "form": "noun",
    "transcription": "ˈɪrɪŋ",
    "definitions": [
      {
        "text": "A piece of jewelry worn on the ear.",
        "examples": [
          "She lost one silver earring.",
          "Her earrings matched her necklace."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
  },
  {
    "id": "A2-NOUN-SEL-134",
    "word": "glove",
    "emoji": "🧤",
    "form": "noun",
    "transcription": "ɡlʌv",
    "definitions": [
      {
        "text": "A clothing item worn on the hand for warmth or protection.",
        "examples": [
          "Put on your winter gloves.",
          "She left her gloves on the bus."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
  },
  {
    "id": "A2-NOUN-SEL-135",
    "word": "handbag",
    "emoji": "👜",
    "form": "noun",
    "transcription": "ˈhændbæɡ",
    "definitions": [
      {
        "text": "A small bag used by women to carry personal items.",
        "examples": [
          "She kept her keys in her handbag.",
          "Her handbag matched her shoes."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
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
