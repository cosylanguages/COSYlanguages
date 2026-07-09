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
        "lang": "ba",
        "antonyms": [
            "тәпәш"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_001"
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
        "lang": "ba",
        "antonyms": [
            "бейек"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_002"
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
        "lang": "ba",
        "antonyms": [
            "ҡарт"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_003"
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
        "lang": "ba",
        "antonyms": [
            "йәш"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_004"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_nature_001"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_nature_002"
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
        "lang": "ba",
        "antonyms": [
            "һыуыҡ"
        ],
        "transcription": "",
        "id": "ba_starter_nature_003"
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
        "lang": "ba",
        "antonyms": [
            "эҫе"
        ],
        "transcription": "",
        "id": "ba_starter_nature_004"
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
        "lang": "ba",
        "antonyms": [
            "үҙенсәлекле"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_005"
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
        "lang": "ba",
        "antonyms": [
            "ҡиммәт"
        ],
        "transcription": "",
        "id": "ba_starter_shopping_001"
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
        "lang": "ba",
        "antonyms": [
            "осһоҙ"
        ],
        "transcription": "",
        "id": "ba_starter_shopping_002"
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
        "lang": "ba",
        "antonyms": [
            "насар"
        ],
        "transcription": "",
        "id": "ba_starter_describing_006"
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
        "lang": "ba",
        "antonyms": [
            "яҡшы"
        ],
        "transcription": "",
        "id": "ba_starter_describing_007"
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
        "lang": "ba",
        "antonyms": [
            "бәләкәй"
        ],
        "transcription": "",
        "id": "ba_starter_describing_008"
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
        "lang": "ba",
        "antonyms": [
            "ҙур"
        ],
        "transcription": "",
        "id": "ba_starter_describing_009"
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
        "lang": "ba",
        "antonyms": [
            "ҡыйын"
        ],
        "transcription": "",
        "id": "ba_starter_describing_010"
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
        "lang": "ba",
        "antonyms": [
            "еңел"
        ],
        "transcription": "",
        "id": "ba_starter_describing_011"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_emotions_001"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_emotions_002"
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
        "lang": "ba",
        "antonyms": [
            "тулы булмаған көн"
        ],
        "transcription": "",
        "id": "ba_starter_work_001"
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
        "lang": "ba",
        "antonyms": [
            "тулы көн"
        ],
        "transcription": "",
        "id": "ba_starter_work_002"
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
        "lang": "ba",
        "antonyms": [
            "бысраҡ"
        ],
        "transcription": "",
        "id": "ba_starter_furniture_001"
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
        "lang": "ba",
        "antonyms": [
            "насар ризыҡ"
        ],
        "transcription": "",
        "id": "ba_starter_food_drink_001"
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
        "lang": "ba",
        "antonyms": [
            "яҡшы"
        ],
        "transcription": "",
        "id": "ba_starter_health_medicine_001"
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
        "lang": "ba",
        "antonyms": [
            "оффлайн"
        ],
        "transcription": "",
        "id": "ba_starter_technology_001"
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
        "lang": "ba",
        "antonyms": [
            "бергә"
        ],
        "transcription": "",
        "id": "ba_starter_social_001"
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
        "lang": "ba",
        "antonyms": [
            "стресслы"
        ],
        "transcription": "",
        "id": "ba_starter_emotions_003"
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
        "lang": "ba",
        "antonyms": [
            "тыныс"
        ],
        "transcription": "",
        "id": "ba_starter_emotions_004"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_003"
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
        "lang": "ba",
        "antonyms": [
            "кәрәкһеҙ"
        ],
        "transcription": "",
        "id": "ba_starter_describing_012"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_describing_013"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_colours_001"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_colours_002"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_colours_003"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_colours_004"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_colours_005"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_colours_006"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_003"
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
        "lang": "ba",
        "antonyms": [
            "ябыҡ"
        ],
        "transcription": "",
        "id": "ba_starter_shopping_004"
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
        "lang": "ba",
        "antonyms": [
            "асыҡ"
        ],
        "transcription": "",
        "id": "ba_starter_shopping_005"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_014"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_015"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_016"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_017"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_018"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_019"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_020"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_nature_005"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_nature_006"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_nature_007"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_nature_008"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_furniture_002"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_021"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_022"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_023"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_024"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_colours_007"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_colours_008"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_colours_009"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_colours_010"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_025"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_026"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_027"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_028"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_029"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_030"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_031"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_005"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_006"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_007"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_008"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_009"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_010"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_011"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_032"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_033"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_034"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_035"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_036"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_037"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_038"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_039"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_040"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_places_001"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_places_002"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_012"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_013"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_014"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_041"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_042"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_015"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_016"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_emotions_017"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_043"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_044"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_045"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_046"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_health_medicine_002"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_047"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_048"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_049"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_050"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_051"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_052"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_053"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_054"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_055"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_056"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_057"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_058"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_059"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_060"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_061"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_062"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_063"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_064"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_065"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_066"
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
        "lang": "ba",
        "transcription": "",
        "emoji": "✨",
        "id": "ba_starter_describing_067"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();