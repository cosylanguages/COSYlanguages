// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "бейек",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Аҫтан өҫкә табан ҙур булған кеше йәки нәмә.",
                "examples": [
                    "Ул бик бейек."
                ]
            }
        ],
        "subtext": "бейек бина / етерлек бейек",
        "synonyms": [
            "оҙон кеше"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "бейек",
        "plural": "бейек",
        "femininePlural": "бейек",
        "id": "ba_starter_adjectives_001",
        "lang": "ba",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "тәпәш"
        ]
    },
    {
        "word": "тәпәш",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бейек булмаған кеше йәки нәмә.",
                "examples": [
                    "Ул тәпәш."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ҡыҫҡа сәйәхәт",
            "ҡыҫҡа сәс",
            "бик ҡыҫҡа"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "тәпәш",
        "plural": "тәпәш",
        "femininePlural": "тәпәш",
        "id": "ba_starter_adjectives_002",
        "lang": "ba",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "бейек"
        ]
    },
    {
        "word": "йәш",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Аҙ ғына ваҡыт йәшәгән кеше.",
                "examples": [
                    "Ул йәш кеше."
                ]
            }
        ],
        "subtext": "йәш кеше / йәш белгес / күңеле менән йәш",
        "comparative": null,
        "superlative": null,
        "feminine": "йәш",
        "plural": "йәш",
        "femininePlural": "йәш",
        "id": "ba_starter_adjectives_003",
        "lang": "ba",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "ҡарт"
        ]
    },
    {
        "word": "ҡарт",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күп ваҡыт йәшәгән кеше.",
                "examples": [
                    "Ул ҡарт."
                ]
            }
        ],
        "subtext": "ҡарт дуҫ / бик ҡарт",
        "synonyms": [
            "иҫке ғәҙәттәр"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ҡарт",
        "plural": "ҡарт",
        "femininePlural": "ҡарт",
        "id": "ba_starter_adjectives_004",
        "lang": "ba",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "йәш"
        ]
    },
    {
        "word": "ҡояшлы",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ҡояш яҡтыһы күп булған.",
                "examples": [
                    "Бөгөн ҡояшлы көн."
                ]
            }
        ],
        "subtext": "ҡояшлы көн / ҡояшлы һауа торошо",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡояшлы",
        "plural": "ҡояшлы",
        "femininePlural": "ҡояшлы",
        "id": "ba_starter_adjectives_005",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "ямғырлы",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ямғыр күп булған.",
                "examples": [
                    "Бөгөн ямғырлы көн."
                ]
            }
        ],
        "subtext": "ямғырлы көн / ямғырлы һауа торошо",
        "comparative": null,
        "superlative": null,
        "feminine": "ямғырлы",
        "plural": "ямғырлы",
        "femininePlural": "ямғырлы",
        "id": "ba_starter_adjectives_006",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "эҫе",
        "level": "starter",
        "theme": "nature",
        "emoji": "🔥",
        "form": "adjective",
        "subtext": "бик эҫе / эҫе һауа торошо / эҫе эсемлек",
        "definitions": [
            {
                "text": "Юғары температуралы.",
                "examples": [
                    "Кофе бик эҫе."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "эҫе",
        "plural": "эҫе",
        "femininePlural": "эҫе",
        "id": "ba_starter_adjectives_007",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "һыуыҡ"
        ]
    },
    {
        "word": "һыуыҡ",
        "level": "starter",
        "theme": "nature",
        "emoji": "❄️",
        "form": "adjective",
        "subtext": "бик һыуыҡ / һыуыҡ иртә / һыуыҡ эсемлек",
        "definitions": [
            {
                "text": "Түбән температуралы.",
                "examples": [
                    "Һыу һыуыҡ."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "һыуыҡ",
        "plural": "һыуыҡ",
        "femininePlural": "һыуыҡ",
        "id": "ba_starter_adjectives_008",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "эҫе"
        ]
    },
    {
        "word": "ябай",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ғәҙәти, үҙенсәлекле булмаған.",
                "examples": [
                    "Был ябай көн."
                ]
            }
        ],
        "subtext": "ябай көн / ябай тормош",
        "comparative": null,
        "superlative": null,
        "feminine": "ябай",
        "plural": "ябай",
        "femininePlural": "ябай",
        "id": "ba_starter_adjectives_009",
        "lang": "ba",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "үҙенсәлекле"
        ]
    },
    {
        "word": "осһоҙ",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "adjective",
        "subtext": "осһоҙ бәйә / осһоҙ осош",
        "definitions": [
            {
                "text": "Хаҡы түбән булған.",
                "examples": [
                    "Был кофе осһоҙ."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "осһоҙ",
        "plural": "осһоҙ",
        "femininePlural": "осһоҙ",
        "id": "ba_starter_adjectives_010",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "ҡиммәт"
        ]
    },
    {
        "word": "ҡиммәт",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💎",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ҡиммәтле",
            "бик ҡиммәт"
        ],
        "definitions": [
            {
                "text": "Күп аҡса торған нәмә.",
                "examples": [
                    "Машина бик ҡиммәт."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ҡиммәт",
        "plural": "ҡиммәт",
        "femininePlural": "ҡиммәт",
        "id": "ba_starter_adjectives_011",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "осһоҙ"
        ]
    },
    {
        "word": "яҡшы",
        "level": "starter",
        "theme": "describing",
        "emoji": "👍",
        "form": "adjective",
        "subtext": "яҡшы идея",
        "synonyms": [
            "уңыштар"
        ],
        "definitions": [
            {
                "text": "Сифатлы йәки оҡшаған.",
                "examples": [
                    "Был яҡшы эш."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "яҡшы",
        "plural": "яҡшы",
        "femininePlural": "яҡшы",
        "id": "ba_starter_adjectives_012",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "насар"
        ]
    },
    {
        "word": "насар",
        "level": "starter",
        "theme": "describing",
        "emoji": "👎",
        "form": "adjective",
        "subtext": "насар хәбәрҙәр / насар ҡарар",
        "definitions": [
            {
                "text": "Яҡшы булмаған.",
                "examples": [
                    "Бөгөн һауа торошо насар."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "насар",
        "plural": "насар",
        "femininePlural": "насар",
        "id": "ba_starter_adjectives_013",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "яҡшы"
        ]
    },
    {
        "word": "ҙур",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐘",
        "form": "adjective",
        "subtext": "ҙур өй / ҙур проблема",
        "definitions": [
            {
                "text": "Күләме ҙур булған.",
                "examples": [
                    "Был ҙур офис."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ҙур",
        "plural": "ҙур",
        "femininePlural": "ҙур",
        "id": "ba_starter_adjectives_014",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "бәләкәй"
        ]
    },
    {
        "word": "бәләкәй",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐭",
        "form": "adjective",
        "subtext": "бәләкәй фатир / бәләкәй эш хаҡы",
        "definitions": [
            {
                "text": "Күләме бәләкәй булған.",
                "examples": [
                    "Минең бәләкәй фатирым бар."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "бәләкәй",
        "plural": "бәләкәй",
        "femininePlural": "бәләкәй",
        "id": "ba_starter_adjectives_015",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "ҙур"
        ]
    },
    {
        "word": "еңел",
        "level": "starter",
        "theme": "describing",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ҡыйын булмаған.",
                "examples": [
                    "Тест еңел."
                ]
            }
        ],
        "subtext": "еңел эш / бик еңел",
        "comparative": null,
        "superlative": null,
        "feminine": "еңел",
        "plural": "еңел",
        "femininePlural": "еңел",
        "id": "ba_starter_adjectives_016",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "ҡыйын"
        ]
    },
    {
        "word": "ҡыйын",
        "level": "starter",
        "theme": "describing",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Эшләүе ауыр булған.",
                "examples": [
                    "Был эш ҡыйын."
                ]
            }
        ],
        "subtext": "ҡыйын эш / бик ҡыйын",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡыйын",
        "plural": "ҡыйын",
        "femininePlural": "ҡыйын",
        "id": "ba_starter_adjectives_017",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "еңел"
        ]
    },
    {
        "word": "бәхетле",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "бәхетле көн",
        "synonyms": [
            "шат"
        ],
        "definitions": [
            {
                "text": "Шатлыҡ кисергән кеше.",
                "examples": [
                    "Мин бәхетле."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "бәхетле",
        "plural": "бәхетле",
        "femininePlural": "бәхетле",
        "id": "ba_starter_adjectives_018",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "арыған",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "бик арыған",
        "synonyms": [
            "арыным"
        ],
        "definitions": [
            {
                "text": "Ял итергә мохтаж.",
                "examples": [
                    "Мин эштән һуң арыным."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "арыған",
        "plural": "арыған",
        "femininePlural": "арыған",
        "id": "ba_starter_adjectives_019",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "тулы көн",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тулы эш көнөндә эшләү.",
                "examples": [
                    "Уның тулы көнлөк эше бар."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "тулы эш көнө"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "тулы көн",
        "plural": "тулы көн",
        "femininePlural": "тулы көн",
        "id": "ba_starter_adjectives_020",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "тулы булмаған көн"
        ]
    },
    {
        "word": "тулы булмаған көн",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "form": "adjective",
        "definitions": [
            {
                "text": "Аҙыраҡ ваҡыт эшләү.",
                "examples": [
                    "Ул шәмбе көнө эшләй."
                ]
            }
        ],
        "subtext": "тулы булмаған эш көнө",
        "comparative": null,
        "superlative": null,
        "feminine": "тулы булмаған көн",
        "plural": "тулы булмаған көн",
        "femininePlural": "тулы булмаған көн",
        "id": "ba_starter_adjectives_021",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "тулы көн"
        ]
    },
    {
        "word": "таҙа",
        "level": "starter",
        "theme": "furniture",
        "emoji": "✨",
        "form": "adjective",
        "subtext": "таҙа кейем / таҙа бүлмә",
        "definitions": [
            {
                "text": "Бысраҡ булмаған.",
                "examples": [
                    "Фатир хәҙер таҙа."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "таҙа",
        "plural": "таҙа",
        "femininePlural": "таҙа",
        "id": "ba_starter_adjectives_022",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "бысраҡ"
        ]
    },
    {
        "word": "сәләмәт",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥗",
        "form": "adjective",
        "subtext": "сәләмәт ризыҡ",
        "definitions": [
            {
                "text": "Тән өсөн файҙалы.",
                "examples": [
                    "Йөшәйештәр — сәләмәт ризыҡ."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "сәләмәт",
        "plural": "сәләмәт",
        "femininePlural": "сәләмәт",
        "id": "ba_starter_adjectives_023",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "насар ризыҡ"
        ]
    },
    {
        "word": "ауырыу",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🤒",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ауырыйым"
        ],
        "definitions": [
            {
                "text": "Сәләмәт булмаған.",
                "examples": [
                    "Мин бөгөн ауырыйым."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ауырыу",
        "plural": "ауырыу",
        "femininePlural": "ауырыу",
        "id": "ba_starter_adjectives_024",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "яҡшы"
        ]
    },
    {
        "word": "онлайн",
        "level": "starter",
        "theme": "technology",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Интернет ҡулланып.",
                "examples": [
                    "Мин интернет аша һатып алам."
                ]
            }
        ],
        "subtext": "онлайн һатып алыу",
        "comparative": null,
        "superlative": null,
        "feminine": "онлайн",
        "plural": "онлайн",
        "femininePlural": "онлайн",
        "id": "ba_starter_adjectives_025",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "оффлайн"
        ]
    },
    {
        "word": "яңғыҙ",
        "level": "starter",
        "theme": "social",
        "emoji": "👤",
        "form": "adjective",
        "definitions": [
            {
                "text": "Башҡаларһыҙ.",
                "examples": [
                    "Ул яңғыҙ йәшәй."
                ]
            }
        ],
        "subtext": "яңғыҙ йәшәү",
        "comparative": null,
        "superlative": null,
        "feminine": "яңғыҙ",
        "plural": "яңғыҙ",
        "femininePlural": "яңғыҙ",
        "id": "ba_starter_adjectives_026",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "бергә"
        ]
    },
    {
        "word": "тыныс",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😌",
        "form": "adjective",
        "subtext": "тыныс булыу",
        "definitions": [
            {
                "text": "Борсолмаған.",
                "examples": [
                    "Мин ял көндәрендә тынысмын."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "тыныс",
        "plural": "тыныс",
        "femininePlural": "тыныс",
        "id": "ba_starter_adjectives_027",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "стресслы"
        ]
    },
    {
        "word": "борсоулы",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😟",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "борсолоу"
        ],
        "definitions": [
            {
                "text": "Хәүефләнгән.",
                "examples": [
                    "Ул эше өсөн борсола."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "борсоулы",
        "plural": "борсоулы",
        "femininePlural": "борсоулы",
        "id": "ba_starter_adjectives_028",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "тыныс"
        ]
    },
    {
        "word": "мәшғүл",
        "level": "starter",
        "theme": "work",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "бик мәшғүл",
        "definitions": [
            {
                "text": "Эше күп булған.",
                "examples": [
                    "Был аҙнала мин бик мәшғүлмен."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "мәшғүл",
        "plural": "мәшғүл",
        "femininePlural": "мәшғүл",
        "id": "ba_starter_adjectives_029",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "файҙалы",
        "level": "starter",
        "theme": "describing",
        "emoji": "🛠️",
        "form": "adjective",
        "subtext": "бик файҙалы",
        "definitions": [
            {
                "text": "Кәрәкле.",
                "examples": [
                    "Машина ауылда бик файҙалы."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "файҙалы",
        "plural": "файҙалы",
        "femininePlural": "файҙалы",
        "id": "ba_starter_adjectives_030",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "кәрәкһеҙ"
        ]
    },
    {
        "word": "мөһим",
        "level": "starter",
        "theme": "describing",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "бик мөһим",
        "definitions": [
            {
                "text": "Ҙур әһәмиәткә эйә.",
                "examples": [
                    "Йоҡо бик мөһим."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "мөһим",
        "plural": "мөһим",
        "femininePlural": "мөһим",
        "id": "ba_starter_adjectives_031",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "ҡыҙыл",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "ҡыҙыл шараб / ҡыҙыл төҫ",
        "definitions": [
            {
                "text": "Ҡан төҫөндәге.",
                "examples": [
                    "Уның ҡыҙыл сумкаһы бар."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ҡыҙыл",
        "plural": "ҡыҙыл",
        "femininePlural": "ҡыҙыл",
        "id": "ba_starter_adjectives_032",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "зәңгәр",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "зәңгәр күк",
        "definitions": [
            {
                "text": "Аяҙ күк төҫөндәге.",
                "examples": [
                    "Уның машинаһы зәңгәр."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "зәңгәр",
        "plural": "зәңгәр",
        "femininePlural": "зәңгәр",
        "id": "ba_starter_adjectives_033",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "йәшел",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "йәшел төҫ",
        "definitions": [
            {
                "text": "Үлән төҫөндәге.",
                "examples": [
                    "Ул йәшел күлдәк кейгән."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "йәшел",
        "plural": "йәшел",
        "femininePlural": "йәшел",
        "id": "ba_starter_adjectives_034",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "аҡ",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "аҡ төҫ / ап-аҡ",
        "definitions": [
            {
                "text": "Ҡар төҫөндәге.",
                "examples": [
                    "Диуарҙар аҡ."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "аҡ",
        "plural": "аҡ",
        "femininePlural": "аҡ",
        "id": "ba_starter_adjectives_035",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "ҡара",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "ҡара төҫ / ҡап-ҡара",
        "definitions": [
            {
                "text": "Төн төҫөндәге.",
                "examples": [
                    "Ул ҡара пальто кейгән."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ҡара",
        "plural": "ҡара",
        "femininePlural": "ҡара",
        "id": "ba_starter_adjectives_036",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "һары",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "һары төҫ",
        "definitions": [
            {
                "text": "Ҡояш төҫөндәге.",
                "examples": [
                    "Уның һары зонты бар."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "һары",
        "plural": "һары",
        "femininePlural": "һары",
        "id": "ba_starter_adjectives_037",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "буш",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "буш ваҡыт",
        "definitions": [
            {
                "text": "Аҡсаһыҙ.",
                "examples": [
                    "Йәкшәмбе көнө музей буш."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "буш",
        "plural": "буш",
        "femininePlural": "буш",
        "id": "ba_starter_adjectives_038",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "асыҡ",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "form": "adjective",
        "subtext": "асыҡ ишек",
        "definitions": [
            {
                "text": "Ябыҡ булмаған.",
                "examples": [
                    "Кибет асыҡ."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "асыҡ",
        "plural": "асыҡ",
        "femininePlural": "асыҡ",
        "id": "ba_starter_adjectives_039",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "ябыҡ"
        ]
    },
    {
        "word": "ябыҡ",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "form": "adjective",
        "subtext": "ябыҡ ишек",
        "definitions": [
            {
                "text": "Асыҡ булмаған.",
                "examples": [
                    "Банк ябыҡ."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ябыҡ",
        "plural": "ябыҡ",
        "femininePlural": "ябыҡ",
        "id": "ba_starter_adjectives_040",
        "lang": "ba",
        "transcription": "",
        "antonyms": [
            "асыҡ"
        ]
    },
    {
        "word": "ҙур",
        "level": "starter",
        "form": "adjective",
        "subtext": "ҙур ҡала",
        "definitions": [
            {
                "text": "Күләме ҙур.",
                "examples": [
                    "Был ҙур ҡала."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "ҙур",
        "plural": "ҙур",
        "femininePlural": "ҙур",
        "id": "ba_starter_adjectives_041",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бәләкәй",
        "level": "starter",
        "form": "adjective",
        "subtext": "бәләкәй генә",
        "definitions": [
            {
                "text": "Күләме бәләкәй.",
                "examples": [
                    "Ул бәләкәй машина йөрөтә."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "бәләкәй",
        "plural": "бәләкәй",
        "femininePlural": "бәләкәй",
        "id": "ba_starter_adjectives_042",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "оҙон",
        "level": "starter",
        "form": "adjective",
        "subtext": "оҙон юл",
        "definitions": [
            {
                "text": "Оҙонлоғо ҙур.",
                "examples": [
                    "Уның эшкә юлы оҙон."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "оҙон",
        "plural": "оҙон",
        "femininePlural": "оҙон",
        "id": "ba_starter_adjectives_043",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бейек",
        "level": "starter",
        "form": "adjective",
        "subtext": "бейек бәйә",
        "definitions": [
            {
                "text": "Бейеклеге ҙур.",
                "examples": [
                    "Был ерҙә хаҡтар бейек."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "бейек",
        "plural": "бейек",
        "femininePlural": "бейек",
        "id": "ba_starter_adjectives_044",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "түбән",
        "level": "starter",
        "form": "adjective",
        "subtext": "түбән бәйә",
        "definitions": [
            {
                "text": "Бейеклеге аҙ.",
                "examples": [
                    "Эш хаҡы түбән."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "түбән",
        "plural": "түбән",
        "femininePlural": "түбән",
        "id": "ba_starter_adjectives_045",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "тулы",
        "level": "starter",
        "form": "adjective",
        "subtext": "тулы бүлмә",
        "definitions": [
            {
                "text": "Эсендә нәмә күп булған.",
                "examples": [
                    "Мин туҡмын."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "тулы",
        "plural": "тулы",
        "femininePlural": "тулы",
        "id": "ba_starter_adjectives_046",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "буш",
        "level": "starter",
        "form": "adjective",
        "subtext": "буш бүлмә",
        "definitions": [
            {
                "text": "Эсендә нәмә булмаған.",
                "examples": [
                    "Офис буш."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "буш",
        "plural": "буш",
        "femininePlural": "буш",
        "id": "ba_starter_adjectives_047",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "йылы",
        "level": "starter",
        "form": "adjective",
        "subtext": "йылы һауа торошо",
        "definitions": [
            {
                "text": "Беҙгә оҡшаған йылылыҡ.",
                "examples": [
                    "Бүлмдә йылы."
                ]
            }
        ],
        "theme": "nature",
        "comparative": null,
        "superlative": null,
        "feminine": "йылы",
        "plural": "йылы",
        "femininePlural": "йылы",
        "id": "ba_starter_adjectives_048",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "саф",
        "level": "starter",
        "form": "adjective",
        "subtext": "саф һауа",
        "definitions": [
            {
                "text": "Беҙгә оҡшаған һалҡынлыҡ.",
                "examples": [
                    "Уға саф һауа торошо ошай."
                ]
            }
        ],
        "theme": "nature",
        "comparative": null,
        "superlative": null,
        "feminine": "саф",
        "plural": "саф",
        "femininePlural": "саф",
        "id": "ba_starter_adjectives_049",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "йылы",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "еүеш һауа торошо"
        ],
        "definitions": [
            {
                "text": "Һыулы.",
                "examples": [
                    "Кейемем еүеш."
                ]
            }
        ],
        "theme": "nature",
        "comparative": null,
        "superlative": null,
        "feminine": "йылы",
        "plural": "йылы",
        "femininePlural": "йылы",
        "id": "ba_starter_adjectives_050",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ҡоро",
        "level": "starter",
        "form": "adjective",
        "subtext": "ҡоро һауа",
        "definitions": [
            {
                "text": "Һыуһыҙ.",
                "examples": [
                    "Бүлмдә ҡоро булырға тейеш."
                ]
            }
        ],
        "theme": "nature",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡоро",
        "plural": "ҡоро",
        "femininePlural": "ҡоро",
        "id": "ba_starter_adjectives_051",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бысраҡ",
        "level": "starter",
        "theme": "furniture",
        "form": "adjective",
        "subtext": "бысраҡ ҡулдар",
        "definitions": [
            {
                "text": "Таҙа булмаған.",
                "examples": [
                    "Ҡулдарым бысраҡ."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "бысраҡ",
        "plural": "бысраҡ",
        "femininePlural": "бысраҡ",
        "id": "ba_starter_adjectives_052",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ҡаты",
        "level": "starter",
        "form": "adjective",
        "subtext": "ҡаты эш",
        "definitions": [
            {
                "text": "Йомшаҡ булмаған.",
                "examples": [
                    "Урындыҡ бик ҡаты."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡаты",
        "plural": "ҡаты",
        "femininePlural": "ҡаты",
        "id": "ba_starter_adjectives_053",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "йомшаҡ",
        "level": "starter",
        "form": "adjective",
        "subtext": "йомшаҡ музыка",
        "definitions": [
            {
                "text": "Ҡаты булмаған.",
                "examples": [
                    "Диван бик йомшаҡ."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "йомшаҡ",
        "plural": "йомшаҡ",
        "femininePlural": "йомшаҡ",
        "id": "ba_starter_adjectives_054",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ауыр",
        "level": "starter",
        "form": "adjective",
        "subtext": "ауыр йөк",
        "definitions": [
            {
                "text": "Ауырлығы ҙур.",
                "examples": [
                    "Сумка бик ауыр."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "ауыр",
        "plural": "ауыр",
        "femininePlural": "ауыр",
        "id": "ba_starter_adjectives_055",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "еңел",
        "level": "starter",
        "form": "adjective",
        "subtext": "еңел ризыҡ",
        "definitions": [
            {
                "text": "Ауыр булмаған.",
                "examples": [
                    "Минең сумкам еңел."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "еңел",
        "plural": "еңел",
        "femininePlural": "еңел",
        "id": "ba_starter_adjectives_056",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "коңғырт",
        "level": "starter",
        "form": "adjective",
        "subtext": "коңғырт төҫ",
        "definitions": [
            {
                "text": "Ағас төҫөндәге.",
                "examples": [
                    "Уның күҙҙәре коңғырт."
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "feminine": "коңғырт",
        "plural": "коңғырт",
        "femininePlural": "коңғырт",
        "id": "ba_starter_adjectives_057",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "һоро",
        "level": "starter",
        "form": "adjective",
        "subtext": "һоро төҫ",
        "definitions": [
            {
                "text": "Аҡ менән ҡара араһындағы төҫ.",
                "examples": [
                    "Уның сәстәре һоро."
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "feminine": "һоро",
        "plural": "һоро",
        "femininePlural": "һоро",
        "id": "ba_starter_adjectives_058",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ал",
        "level": "starter",
        "form": "adjective",
        "subtext": "ал төҫ",
        "definitions": [
            {
                "text": "Асыҡ ҡыҙыл төҫ.",
                "examples": [
                    "Уға ал төҫ ошай."
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "feminine": "ал",
        "plural": "ал",
        "femininePlural": "ал",
        "id": "ba_starter_adjectives_059",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ҡыҙғылт һары",
        "level": "starter",
        "form": "adjective",
        "subtext": "ҡыҙғылт һары төҫ",
        "definitions": [
            {
                "text": "Апельсин төҫөндәге.",
                "examples": [
                    "Ул ҡыҙғылт һары кейем алды."
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡыҙғылт һары",
        "plural": "ҡыҙғылт һары",
        "femininePlural": "ҡыҙғылт һары",
        "id": "ba_starter_adjectives_060",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бөйөк",
        "level": "starter",
        "form": "adjective",
        "subtext": "бөйөк фекер",
        "definitions": [
            {
                "text": "Бик яҡшы.",
                "examples": [
                    "Ул бөйөк менеджер."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "бөйөк",
        "plural": "бөйөк",
        "femininePlural": "бөйөк",
        "id": "ba_starter_adjectives_061",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "яҡшы",
        "level": "starter",
        "form": "adjective",
        "subtext": "яҡшы көн",
        "definitions": [
            {
                "text": "Күңелгә ятҡан.",
                "examples": [
                    "Яңы офис бик яҡшы."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "яҡшы",
        "plural": "яҡшы",
        "femininePlural": "яҡшы",
        "id": "ba_starter_adjectives_062",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "иҫәпһеҙ яҡшы",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "иҫәпһеҙ ваҡыт"
        ],
        "definitions": [
            {
                "text": "Бик ныҡ яҡшы.",
                "examples": [
                    "Уларҙың командаһы иҫәпһеҙ яҡшы ине."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "иҫәпһеҙ яҡшы",
        "plural": "иҫәпһеҙ яҡшы",
        "femininePlural": "иҫәпһеҙ яҡшы",
        "id": "ba_starter_adjectives_063",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ҡот осҡос",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ҡурҡыныс хата"
        ],
        "definitions": [
            {
                "text": "Бик насар.",
                "examples": [
                    "Трафик ҡот осҡос ине."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡот осҡос",
        "plural": "ҡот осҡос",
        "femininePlural": "ҡот осҡос",
        "id": "ba_starter_adjectives_064",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бик насар",
        "level": "starter",
        "form": "adjective",
        "subtext": "бик насар һауа торошо",
        "definitions": [
            {
                "text": "Күңелһеҙ.",
                "examples": [
                    "Тауыш бик насар."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "бик насар",
        "plural": "бик насар",
        "femininePlural": "бик насар",
        "id": "ba_starter_adjectives_065",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ғәжәп",
        "level": "starter",
        "form": "adjective",
        "subtext": "ғәжәп нәтижә",
        "definitions": [
            {
                "text": "Таң ҡалдырғыс.",
                "examples": [
                    "Ул ғәжәп презентация яһаны."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "ғәжәп",
        "plural": "ғәжәп",
        "femininePlural": "ғәжәп",
        "id": "ba_starter_adjectives_066",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "фантастик",
        "level": "starter",
        "form": "adjective",
        "subtext": "фантастик хәбәрҙәр",
        "definitions": [
            {
                "text": "Иҫ китмәле яҡшы.",
                "examples": [
                    "Яңы система фантастик эшләй."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "фантастик",
        "plural": "фантастик",
        "femininePlural": "фантастик",
        "id": "ba_starter_adjectives_067",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "моңло",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "күңелһеҙ хәл"
        ],
        "definitions": [
            {
                "text": "Күңелһеҙ.",
                "examples": [
                    "Ул киткәнгә моңло ине."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "моңло",
        "plural": "моңло",
        "femininePlural": "моңло",
        "id": "ba_starter_adjectives_068",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ас",
        "level": "starter",
        "form": "adjective",
        "subtext": "бик ас",
        "definitions": [
            {
                "text": "Ашағыһы килгән.",
                "examples": [
                    "Мин ас."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "ас",
        "plural": "ас",
        "femininePlural": "ас",
        "id": "ba_starter_adjectives_069",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "асыулы",
        "level": "starter",
        "form": "adjective",
        "subtext": "бик асыулы",
        "definitions": [
            {
                "text": "Ныҡ асыуланған.",
                "examples": [
                    "Ул асыулы ине."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "асыулы",
        "plural": "асыулы",
        "femininePlural": "асыулы",
        "id": "ba_starter_adjectives_070",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ялыҡҡан",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ялыҡтырғыс"
        ],
        "definitions": [
            {
                "text": "Ҡыҙыҡһыныуы булмаған.",
                "examples": [
                    "Ул йыйылышта ялыҡты."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "ялыҡҡан",
        "plural": "ялыҡҡан",
        "femininePlural": "ялыҡҡан",
        "id": "ba_starter_adjectives_071",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "тулҡынланған",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "тулҡынланыу"
        ],
        "definitions": [
            {
                "text": "Шатлыҡлы тулҡынланыу.",
                "examples": [
                    "Ул яңы эше өсөн тулҡынланған."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "тулҡынланған",
        "plural": "тулҡынланған",
        "femininePlural": "тулҡынланған",
        "id": "ba_starter_adjectives_072",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ҡурҡҡан",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ҡурҡыу"
        ],
        "definitions": [
            {
                "text": "Ҡурҡыу белдереү.",
                "examples": [
                    "Ул хата яһауҙан ҡурҡа."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡурҡҡан",
        "plural": "ҡурҡҡан",
        "femininePlural": "ҡурҡҡан",
        "id": "ba_starter_adjectives_073",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "үкенесле",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "үкенеү"
        ],
        "definitions": [
            {
                "text": "Үкенес белдереү.",
                "examples": [
                    "Ул кеселәгәне өсөн үкенә."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "үкенесле",
        "plural": "үкенесле",
        "femininePlural": "үкенесле",
        "id": "ba_starter_adjectives_074",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "дөрөҫ",
        "level": "starter",
        "form": "adjective",
        "subtext": "дөрөҫ яуап",
        "definitions": [
            {
                "text": "Хатаһыҙ.",
                "examples": [
                    "Был дөрөҫ офисмы?"
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "дөрөҫ",
        "plural": "дөрөҫ",
        "femininePlural": "дөрөҫ",
        "id": "ba_starter_adjectives_075",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "хата",
        "level": "starter",
        "form": "adjective",
        "subtext": "хата яуап",
        "definitions": [
            {
                "text": "Дөрөҫ булмаған.",
                "examples": [
                    "Был хата ҡарар ине."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "хата",
        "plural": "хата",
        "femininePlural": "хата",
        "id": "ba_starter_adjectives_076",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "яңы",
        "level": "starter",
        "form": "adjective",
        "subtext": "яңы эш",
        "definitions": [
            {
                "text": "Элек булмаған.",
                "examples": [
                    "Минең яңы эшем бар."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "яңы",
        "plural": "яңы",
        "femininePlural": "яңы",
        "id": "ba_starter_adjectives_077",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "башҡа",
        "level": "starter",
        "form": "adjective",
        "subtext": "бөтөнләй башҡа",
        "definitions": [
            {
                "text": "Оҡшамаған.",
                "examples": [
                    "Был эш башҡа төрлө."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "башҡа",
        "plural": "башҡа",
        "femininePlural": "башҡа",
        "id": "ba_starter_adjectives_078",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бер үк",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "нәҡ шундай уҡ"
        ],
        "definitions": [
            {
                "text": "Оҡшаш.",
                "examples": [
                    "Уларҙың эш хаҡы бер үк."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "бер үк",
        "plural": "бер үк",
        "femininePlural": "бер үк",
        "id": "ba_starter_adjectives_079",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "тиҙ",
        "level": "starter",
        "form": "adjective",
        "subtext": "тиҙ ризыҡ",
        "definitions": [
            {
                "text": "Тиҙ хәрәкәт иткән.",
                "examples": [
                    "Поезд тиҙ бара."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "тиҙ",
        "plural": "тиҙ",
        "femininePlural": "тиҙ",
        "id": "ba_starter_adjectives_080",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "аҡрын",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "акрын интернет"
        ],
        "definitions": [
            {
                "text": "Тиҙ булмаған.",
                "examples": [
                    "Система аҡрын эшләй."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "аҡрын",
        "plural": "аҡрын",
        "femininePlural": "аҡрын",
        "id": "ba_starter_adjectives_081",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "тыныс",
        "level": "starter",
        "form": "adjective",
        "subtext": "тыныс урын",
        "definitions": [
            {
                "text": "Тауышһыҙ.",
                "examples": [
                    "Офиста тыныс."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "тыныс",
        "plural": "тыныс",
        "femininePlural": "тыныс",
        "id": "ba_starter_adjectives_082",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ҡаты",
        "level": "starter",
        "form": "adjective",
        "subtext": "ҡаты тавыш",
        "definitions": [
            {
                "text": "Тауышлы.",
                "examples": [
                    "Офиста тауыш ҡаты."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡаты",
        "plural": "ҡаты",
        "femininePlural": "ҡаты",
        "id": "ba_starter_adjectives_083",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "хәүефһеҙ",
        "level": "starter",
        "form": "adjective",
        "subtext": "хәүефһеҙ урын",
        "definitions": [
            {
                "text": "Ҡурҡынысһыҙ.",
                "examples": [
                    "Был район хәүефһеҙ."
                ]
            }
        ],
        "theme": "places",
        "comparative": null,
        "superlative": null,
        "feminine": "хәүефһеҙ",
        "plural": "хәүефһеҙ",
        "femininePlural": "хәүефһеҙ",
        "id": "ba_starter_adjectives_084",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ҡурҡыныс",
        "level": "starter",
        "form": "adjective",
        "subtext": "ҡурҡыныс хәл",
        "definitions": [
            {
                "text": "Зыян килтереүе ихтимал.",
                "examples": [
                    "Был юл ҡурҡыныс."
                ]
            }
        ],
        "theme": "places",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡурҡыныс",
        "plural": "ҡурҡыныс",
        "femininePlural": "ҡурҡыныс",
        "id": "ba_starter_adjectives_085",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бәхетһеҙ",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Шат булмаған.",
                "examples": [
                    "Ул бәхетһеҙ."
                ]
            }
        ],
        "subtext": "бәхетһеҙ булыу",
        "comparative": null,
        "superlative": null,
        "feminine": "бәхетһеҙ",
        "plural": "бәхетһеҙ",
        "femininePlural": "бәхетһеҙ",
        "id": "ba_starter_adjectives_086",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "тулҡынланған",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Борсоулы.",
                "examples": [
                    "Ул интервью алдынан тулҡынланды."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "тулҡынланыу"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "тулҡынланған",
        "plural": "тулҡынланған",
        "femininePlural": "тулҡынланған",
        "id": "ba_starter_adjectives_087",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "стресслы",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ҡыҫылыу кисергән.",
                "examples": [
                    "Ул стресс кисерә."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "стресс"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "стресслы",
        "plural": "стресслы",
        "femininePlural": "стресслы",
        "id": "ba_starter_adjectives_088",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "үҙенә ышанған",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Үҙ көсөнә ышанған.",
                "examples": [
                    "Ул үҙенә ышана."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "үҙенә ышаныс"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "үҙенә ышанған",
        "plural": "үҙенә ышанған",
        "femininePlural": "үҙенә ышанған",
        "id": "ba_starter_adjectives_089",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ғорур",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Уңыш өсөн шатланған.",
                "examples": [
                    "Ул ғорур."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ғорурлыҡ"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ғорур",
        "plural": "ғорур",
        "femininePlural": "ғорур",
        "id": "ba_starter_adjectives_090",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ҡурҡҡан",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ҡурҡыу хисе.",
                "examples": [
                    "Ул ҡурҡҡан ине."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ҡурҡытыу"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ҡурҡҡан",
        "plural": "ҡурҡҡан",
        "femininePlural": "ҡурҡҡан",
        "id": "ba_starter_adjectives_091",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ғәжәпләнгән",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көтөлмәгән нәмәгә таң ҡалыу.",
                "examples": [
                    "Ул ғәжәпләнде."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ғәжәпләнеү"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ғәжәпләнгән",
        "plural": "ғәжәпләнгән",
        "femininePlural": "ғәжәпләнгән",
        "id": "ba_starter_adjectives_092",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "күңеле ҡайтҡан",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Өмөтө аҡланмаған.",
                "examples": [
                    "Уның күңеле ҡайтты."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "күңел ҡайтыу"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "күңеле ҡайтҡан",
        "plural": "күңеле ҡайтҡан",
        "femininePlural": "күңеле ҡайтҡан",
        "id": "ba_starter_adjectives_093",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "матур",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күҙгә яҡшы күренгән.",
                "examples": [
                    "Офис матур."
                ]
            }
        ],
        "subtext": "матур күренеш",
        "comparative": null,
        "superlative": null,
        "feminine": "матур",
        "plural": "матур",
        "femininePlural": "матур",
        "id": "ba_starter_adjectives_094",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "күркәм",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Яҡшы күренешле.",
                "examples": [
                    "Бүлмә күркәм."
                ]
            }
        ],
        "subtext": "күркәм бүлмә",
        "comparative": null,
        "superlative": null,
        "feminine": "күркәм",
        "plural": "күркәм",
        "femininePlural": "күркәм",
        "id": "ba_starter_adjectives_095",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "көслө",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көсө күп булған.",
                "examples": [
                    "Ул көслө етәксе."
                ]
            }
        ],
        "subtext": "көслө рух",
        "comparative": null,
        "superlative": null,
        "feminine": "көслө",
        "plural": "көслө",
        "femininePlural": "көслө",
        "id": "ba_starter_adjectives_096",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "көсһөҙ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көсө аҙ булған.",
                "examples": [
                    "Сигнал көсһөҙ."
                ]
            }
        ],
        "subtext": "көсһөҙ сигнал",
        "comparative": null,
        "superlative": null,
        "feminine": "көсһөҙ",
        "plural": "көсһөҙ",
        "femininePlural": "көсһөҙ",
        "id": "ba_starter_adjectives_097",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "таҙа",
        "level": "starter",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Физик яҡтан яҡшы.",
                "examples": [
                    "Ул үҙен таҙа тота."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "яҡшы формала"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "таҙа",
        "plural": "таҙа",
        "femininePlural": "таҙа",
        "id": "ba_starter_adjectives_098",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бик яҡшы",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Иң юғары сифатлы.",
                "examples": [
                    "Ул бик яҡшы баһа алды."
                ]
            }
        ],
        "subtext": "бик яҡшы эш",
        "comparative": null,
        "superlative": null,
        "feminine": "бик яҡшы",
        "plural": "бик яҡшы",
        "femininePlural": "бик яҡшы",
        "id": "ba_starter_adjectives_099",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "камил",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хатаһыҙ.",
                "examples": [
                    "Ваҡыт камил ине."
                ]
            }
        ],
        "subtext": "камил ваҡыт",
        "comparative": null,
        "superlative": null,
        "feminine": "камил",
        "plural": "камил",
        "femininePlural": "камил",
        "id": "ba_starter_adjectives_100",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "кәрәкһеҙ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Файҙаһы булмаған.",
                "examples": [
                    "Был программа кәрәкһеҙ."
                ]
            }
        ],
        "subtext": "бөтөнләй кәрәкһеҙ",
        "comparative": null,
        "superlative": null,
        "feminine": "кәрәкһеҙ",
        "plural": "кәрәкһеҙ",
        "femininePlural": "кәрәкһеҙ",
        "id": "ba_starter_adjectives_101",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "дөрөҫ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хатаһыҙ.",
                "examples": [
                    "Дөрөҫлөгөн тикшерегеҙ."
                ]
            }
        ],
        "subtext": "дөрөҫ юл",
        "comparative": null,
        "superlative": null,
        "feminine": "дөрөҫ",
        "plural": "дөрөҫ",
        "femininePlural": "дөрөҫ",
        "id": "ba_starter_adjectives_102",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ҡыҙыҡлы",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Иғтибарҙы йәлеп иткән.",
                "examples": [
                    "Тәҡдим ҡыҙыҡлы."
                ]
            }
        ],
        "subtext": "бик ҡыҙыҡлы",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡыҙыҡлы",
        "plural": "ҡыҙыҡлы",
        "femininePlural": "ҡыҙыҡлы",
        "id": "ba_starter_adjectives_103",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ҡыҙыҡһыҙ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күңелһеҙ.",
                "examples": [
                    "Йыйылыш ҡыҙыҡһыҙ ине."
                ]
            }
        ],
        "subtext": "бик ҡыҙыҡһыҙ",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡыҙыҡһыҙ",
        "plural": "ҡыҙыҡһыҙ",
        "femininePlural": "ҡыҙыҡһыҙ",
        "id": "ba_starter_adjectives_104",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "кәрәкле",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Мохтажлыҡ булған.",
                "examples": [
                    "Интернет кәрәкле."
                ]
            }
        ],
        "subtext": "бик кәрәкле",
        "comparative": null,
        "superlative": null,
        "feminine": "кәрәкле",
        "plural": "кәрәкле",
        "femininePlural": "кәрәкле",
        "id": "ba_starter_adjectives_105",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "мөмкин",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Булдыра алырлыҡ.",
                "examples": [
                    "Был мөмкинме?"
                ]
            }
        ],
        "subtext": "мөмкин ҡәҙәр тиҙерәк",
        "comparative": null,
        "superlative": null,
        "feminine": "мөмкин",
        "plural": "мөмкин",
        "femininePlural": "мөмкин",
        "id": "ba_starter_adjectives_106",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "мөмкин түгел",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Булдыра алмаҫлыҡ.",
                "examples": [
                    "Был мөмкин түгел."
                ]
            }
        ],
        "subtext": "мөмкин түгел",
        "comparative": null,
        "superlative": null,
        "feminine": "мөмкин түгел",
        "plural": "мөмкин түгел",
        "femininePlural": "мөмкин түгел",
        "id": "ba_starter_adjectives_107",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "үҙенсәлекле",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ғәҙәти булмаған.",
                "examples": [
                    "Уның үҙенсәлекле таланты бар."
                ]
            }
        ],
        "subtext": "үҙенсәлекле талант",
        "comparative": null,
        "superlative": null,
        "feminine": "үҙенсәлекле",
        "plural": "үҙенсәлекле",
        "femininePlural": "үҙенсәлекле",
        "id": "ba_starter_adjectives_108",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "популяр",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күптәргә оҡшаған.",
                "examples": [
                    "Был кафе популяр."
                ]
            }
        ],
        "subtext": "бик популяр",
        "comparative": null,
        "superlative": null,
        "feminine": "популяр",
        "plural": "популяр",
        "femininePlural": "популяр",
        "id": "ba_starter_adjectives_109",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "оҡшаш",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бер-береһенә яҡын.",
                "examples": [
                    "Улар оҡшаш."
                ]
            }
        ],
        "subtext": "бик оҡшаш",
        "comparative": null,
        "superlative": null,
        "feminine": "оҡшаш",
        "plural": "оҡшаш",
        "femininePlural": "оҡшаш",
        "id": "ba_starter_adjectives_110",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "дуҫтарса",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Яҡшы мөнәсәбәтле.",
                "examples": [
                    "Менеджер дуҫтарса."
                ]
            }
        ],
        "subtext": "бик дуҫтарса",
        "comparative": null,
        "superlative": null,
        "feminine": "дуҫтарса",
        "plural": "дуҫтарса",
        "femininePlural": "дуҫтарса",
        "id": "ba_starter_adjectives_111",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "миһырбанлы",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Яҡшы күңелле.",
                "examples": [
                    "Ул миһырбанлы."
                ]
            }
        ],
        "subtext": "бик миһырбанлы",
        "comparative": null,
        "superlative": null,
        "feminine": "миһырбанлы",
        "plural": "миһырбанлы",
        "femininePlural": "миһырбанлы",
        "id": "ba_starter_adjectives_112",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "көлкөлө",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көлдөрә торған.",
                "examples": [
                    "Ул көлкөлө һөйләй."
                ]
            }
        ],
        "subtext": "бик көлкөлө",
        "comparative": null,
        "superlative": null,
        "feminine": "көлкөлө",
        "plural": "көлкөлө",
        "femininePlural": "көлкөлө",
        "id": "ba_starter_adjectives_113",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "аҡыллы",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тиҙ аңлаусан.",
                "examples": [
                    "Ул аҡыллы."
                ]
            }
        ],
        "subtext": "бик аҡыллы",
        "comparative": null,
        "superlative": null,
        "feminine": "аҡыллы",
        "plural": "аҡыллы",
        "femininePlural": "аҡыллы",
        "id": "ba_starter_adjectives_114",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "әҙәпле",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хөрмәт итә белгән.",
                "examples": [
                    "Ул әҙәпле."
                ]
            }
        ],
        "subtext": "бик әҙәпле",
        "comparative": null,
        "superlative": null,
        "feminine": "әҙәпле",
        "plural": "әҙәпле",
        "femininePlural": "әҙәпле",
        "id": "ba_starter_adjectives_115",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "тупаҫ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Әҙәпһеҙ.",
                "examples": [
                    "Был хат тупаҫ ине."
                ]
            }
        ],
        "subtext": "бик тупаҫ",
        "comparative": null,
        "superlative": null,
        "feminine": "тупаҫ",
        "plural": "тупаҫ",
        "femininePlural": "тупаҫ",
        "id": "ba_starter_adjectives_116",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ялҡау",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Эшләргә теләмәгән.",
                "examples": [
                    "Ул ялҡау."
                ]
            }
        ],
        "subtext": "бик ялҡау",
        "comparative": null,
        "superlative": null,
        "feminine": "ялҡау",
        "plural": "ялҡау",
        "femininePlural": "ялҡау",
        "id": "ba_starter_adjectives_117",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "намыҫлы",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Дөрөҫ һөйләгән.",
                "examples": [
                    "Ул намыҫлы."
                ]
            }
        ],
        "subtext": "бик намыҫлы",
        "comparative": null,
        "superlative": null,
        "feminine": "намыҫлы",
        "plural": "намыҫлы",
        "femininePlural": "намыҫлы",
        "id": "ba_starter_adjectives_118",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "шау-шыулы",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тауышлы.",
                "examples": [
                    "Офис шау-шыулы."
                ]
            }
        ],
        "subtext": "бик шау-шыулы",
        "comparative": null,
        "superlative": null,
        "feminine": "шау-шыулы",
        "plural": "шау-шыулы",
        "femininePlural": "шау-шыулы",
        "id": "ba_starter_adjectives_119",
        "lang": "ba",
        "emoji": "✨",
        "transcription": ""
    }
]
    const lang = "ba";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();