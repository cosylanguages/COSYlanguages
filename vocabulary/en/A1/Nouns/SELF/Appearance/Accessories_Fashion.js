(function () {
  const data = [
  {
    "id": "A1-NOUN-SEL-001",
    "word": "belt",
    "emoji": "🎗️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "belts",
    "definitions": [
      {
        "text": "A long thin piece of leather or cloth that you wear around your waist.",
        "examples": [
          "He is wearing a black belt."
        ]
      }
    ],
    "subtext": "related to accessories",
    "transcription": "bɛlt",
    "lang": "en",
    "level": "starter",
    "theme": "accessories",
    "sub_theme": null,
    "legacy_id": "A1-SELF-13",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
  },
  {
    "id": "A1-NOUN-SEL-002",
    "word": "glasses",
    "emoji": "👓",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "glasses",
    "definitions": [
      {
        "text": "Two pieces of glass in a frame that you wear on your face to help you see.",
        "examples": [
          "I wear glasses for reading."
        ]
      }
    ],
    "subtext": "related to accessories",
    "transcription": "ˈglæsɪz",
    "lang": "en",
    "level": "starter",
    "theme": "accessories",
    "sub_theme": null,
    "legacy_id": "A1-SELF-71",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
  },
  {
    "id": "A1-NOUN-SEL-006",
    "word": "ring",
    "emoji": "💍",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "rings",
    "definitions": [
      {
        "text": "A small circular piece of jewelry that you wear on your finger.",
        "examples": [
          "She has a gold ring."
        ]
      }
    ],
    "subtext": "related to accessories",
    "transcription": "rɪŋ",
    "lang": "en",
    "level": "starter",
    "theme": "accessories",
    "sub_theme": null,
    "legacy_id": "A1-SELF-150",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
  },
  {
    "id": "A1-NOUN-SEL-007",
    "word": "scarf",
    "emoji": "🧣",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "scarves",
    "transcription": "skɑːf",
    "definitions": [
      {
        "text": "A piece of cloth that you wear around your neck to keep warm.",
        "examples": [
          "He wears a scarf around his neck."
        ]
      }
    ],
    "subtext": "related to accessories",
    "lang": "en",
    "level": "starter",
    "theme": "accessories",
    "sub_theme": null,
    "legacy_id": "A1-SELF-159",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
  },
  {
    "id": "A1-NOUN-SEL-008",
    "word": "sunglasses",
    "emoji": "🕶️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "sunglasses",
    "transcription": "ˈsʌnɡlɑːsɪz",
    "definitions": [
      {
        "text": "Dark glasses that you wear to protect your eyes from the sun.",
        "examples": [
          "I need my sunglasses today."
        ]
      }
    ],
    "subtext": "related to accessories",
    "lang": "en",
    "level": "starter",
    "theme": "accessories",
    "sub_theme": null,
    "legacy_id": "A1-SELF-188",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
  },
  {
    "id": "A1-NOUN-SEL-009",
    "word": "watch",
    "emoji": "⌚",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "watches",
    "definitions": [
      {
        "text": "A small clock that you wear on your wrist.",
        "examples": [
          "What time is it on your watch?"
        ]
      }
    ],
    "subtext": "related to accessories",
    "transcription": "wɔʧ",
    "lang": "en",
    "level": "starter",
    "theme": "accessories",
    "sub_theme": null,
    "legacy_id": "A1-SELF-214",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion"
  },
  {
    "id": "A1-NOUN-SEL-132",
    "word": "cap",
    "emoji": "🧢",
    "form": "noun",
    "transcription": "kæp",
    "definitions": [
      {
        "text": "A soft flat hat with a visor.",
        "examples": [
          "He wore a baseball cap.",
          "Put on your cap before going out."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion",
    "theme": "clothes_accessories"
  },
  {
    "id": "A1-NOUN-SEL-136",
    "word": "wallet",
    "emoji": "👛",
    "form": "noun",
    "transcription": "ˈwɑːlət",
    "definitions": [
      {
        "text": "A small flat folding case for holding money and cards.",
        "examples": [
          "He left his wallet in his jacket.",
          "She took out her credit card from her wallet."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Accessories_Fashion",
    "theme": "shopping_money"
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
