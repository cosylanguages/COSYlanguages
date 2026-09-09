(function () {
  const data = [
  {
    "id": "A1-VERB-HOM-007",
    "word": "clean",
    "emoji": "🧹",
    "subtext": "clean the flat / clean the kitchen / clean up / clean regularly",
    "form": "verb",
    "definitions": [
      {
        "text": "To remove dirt from something.",
        "examples": [
          "I clean the flat every Saturday. He cleans his desk every morning."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "cleaned",
    "v3": "cleaned",
    "group": "regular",
    "transcription": "klin",
    "lang": "en",
    "level": "starter",
    "theme": "household_tasks",
    "sub_theme": null,
    "antonyms": [
      "dirty"
    ],
    "legacy_id": "A1-HOME-01",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Household_Actions",
    "pos_section": "Verbs",
    "sub_subcategory": "Daily_Chores"
  },
  {
    "id": "A1-VERB-HOM-011",
    "word": "fix",
    "emoji": "🛠️",
    "form": "verb",
    "subtext": "fix a problem / fix a computer",
    "synonyms": [
      "repair"
    ],
    "definitions": [
      {
        "text": "To repair something that is broken.",
        "examples": [
          "Can you fix my phone?"
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "fixed",
    "v3": "fixed",
    "group": "regular",
    "transcription": "fɪks",
    "lang": "en",
    "level": "starter",
    "theme": "household_tasks",
    "sub_theme": null,
    "antonyms": [
      "break"
    ],
    "legacy_id": "A1-HOME-08",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Household_Actions",
    "pos_section": "Verbs",
    "sub_subcategory": "Daily_Chores"
  },
  {
    "id": "A1-VERB-HOM-013",
    "word": "move",
    "emoji": "📦",
    "subtext": "move to a new place / move in / move out / move house",
    "form": "verb",
    "definitions": [
      {
        "text": "To go to live or work in a different place.",
        "examples": [
          "They moved to a larger flat when they had children."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "moved",
    "v3": "moved",
    "group": "regular",
    "transcription": "muv",
    "lang": "en",
    "level": "starter",
    "theme": "household_tasks",
    "sub_theme": null,
    "antonyms": [
      "stay"
    ],
    "legacy_id": "A1-HOME-10",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Household_Actions",
    "pos_section": "Verbs",
    "sub_subcategory": "Daily_Chores"
  },
  {
    "id": "A1-VERB-HOM-015",
    "word": "wash",
    "emoji": "🧼",
    "subtext": "wash the dishes / wash clothes / wash your hands",
    "form": "verb",
    "definitions": [
      {
        "text": "To clean something with water.",
        "examples": [
          "He washes his car every Sunday.",
          "Wash your hands."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "washed",
    "v3": "washed",
    "group": "regular",
    "transcription": "wɑʃ",
    "lang": "en",
    "level": "starter",
    "theme": "household_tasks",
    "sub_theme": null,
    "antonyms": [
      "dirty"
    ],
    "legacy_id": "A1-HOME-12",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Household_Actions",
    "pos_section": "Verbs",
    "sub_subcategory": "Daily_Chores"
  },
  {
    "id": "A1-VERB-HOM-017",
    "word": "empty",
    "emoji": "🗑️",
    "form": "verb",
    "transcription": "ˈɛmpti",
    "definitions": [
      {
        "text": "Remove all contents from.",
        "examples": [
          "Empty the wastebin into the trash.",
          "She emptied her glass of water."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Household_Actions",
    "pos_section": "Verbs",
    "sub_subcategory": "Daily_Chores",
    "theme": "descriptive_adjectives"
  },
  {
    "id": "A1-VERB-HOM-019",
    "word": "mop",
    "emoji": "🧹",
    "form": "verb",
    "transcription": "mɑːp",
    "definitions": [
      {
        "text": "Clean a floor with a sponge or cloth tool.",
        "examples": [
          "Mop the kitchen floor after cooking.",
          "She mopped up the spilled liquid."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Household_Actions",
    "pos_section": "Verbs",
    "sub_subcategory": "Daily_Chores",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-VERB-HOM-020",
    "word": "sweep",
    "emoji": "🧹",
    "form": "verb",
    "transcription": "swiːp",
    "definitions": [
      {
        "text": "Clean an area by brushing away dirt.",
        "examples": [
          "Sweep the hallway floor with a broom.",
          "He swept the porch clean."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Household_Actions",
    "pos_section": "Verbs",
    "sub_subcategory": "Daily_Chores",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-VERB-HOM-021",
    "word": "tidy",
    "emoji": "✨",
    "form": "verb",
    "transcription": "ˈtaɪdi",
    "definitions": [
      {
        "text": "Bring order and neatness to.",
        "examples": [
          "Tidy up your toys before dinner.",
          "She tidied her desk."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Household_Actions",
    "pos_section": "Verbs",
    "sub_subcategory": "Daily_Chores",
    "theme": "descriptive_adjectives"
  },
  {
    "id": "A1-NEW-008",
    "word": "am",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'am'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-015",
    "word": "are",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'are'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-021",
    "word": "bathe",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'bathe'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-022",
    "word": "been",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'been'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-024",
    "word": "being",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'being'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-027",
    "word": "born",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'born'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-031",
    "word": "build",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'build'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-035",
    "word": "care",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'care'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-049",
    "word": "could",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'could'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-050",
    "word": "crawl",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'crawl'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-055",
    "word": "decorate",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'decorate'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-056",
    "word": "did",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'did'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-058",
    "word": "dive",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'dive'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-059",
    "word": "does",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'does'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-064",
    "word": "drop",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'drop'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-092",
    "word": "fold",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'fold'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-093",
    "word": "forgive",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'forgive'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-122",
    "word": "guess",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'guess'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-123",
    "word": "had",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'had'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-129",
    "word": "hang",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'hang'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-131",
    "word": "has",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'has'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-141",
    "word": "hug",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'hug'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-148",
    "word": "is",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'is'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-155",
    "word": "kiss",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'kiss'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-161",
    "word": "lend",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'lend'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-162",
    "word": "lift",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'lift'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-174",
    "word": "marry",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'marry'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-178",
    "word": "measure",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'measure'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-190",
    "word": "might",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'might'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-194",
    "word": "mix",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'mix'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-229",
    "word": "plug",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'plug'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-235",
    "word": "pour",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'pour'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-244",
    "word": "raise",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'raise'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-250",
    "word": "repair",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'repair'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-267",
    "word": "shall",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'shall'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-268",
    "word": "shave",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'shave'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-273",
    "word": "should",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'should'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-294",
    "word": "stir",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'stir'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-328",
    "word": "unlock",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'unlock'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-329",
    "word": "unplug",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'unplug'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-336",
    "word": "wake",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'wake'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-339",
    "word": "was",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'was'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-342",
    "word": "weigh",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'weigh'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-344",
    "word": "were",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'were'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-350",
    "word": "will",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'will'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
  },
  {
    "id": "A1-NEW-356",
    "word": "would",
    "emoji": "📝",
    "form": "verb",
    "definitions": [
      "Basic A1 English verb: 'would'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Verbs",
    "sub_subcategory": "General",
    "theme": "common_verbs_actions"
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
