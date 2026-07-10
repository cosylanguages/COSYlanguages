// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "биек",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Астан өскә таба зур булган кеше яки нәрсә.",
                "examples": [
                    "Ул бик биек."
                ]
            }
        ],
        "subtext": "биек бина / җитәрлек биек",
        "synonyms": [
            "озын кеше"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "биек",
        "plural": "биек",
        "femininePlural": "биек",
        "id": "tt_starter_adjectives_001",
        "lang": "tt",
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
                "text": "Биек булмаган кеше яки нәрсә.",
                "examples": [
                    "Ул тәпәш."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "кыска сәяхәт",
            "кыска чәч",
            "бик кыска"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "тәпәш",
        "plural": "тәпәш",
        "femininePlural": "тәпәш",
        "id": "tt_starter_adjectives_002",
        "lang": "tt",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "биек"
        ]
    },
    {
        "word": "яшь",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Аз гына вакыт яшәгән кеше.",
                "examples": [
                    "Ул яшь кеше."
                ]
            }
        ],
        "subtext": "яшь кеше / яшь белгеч / күңеле белән яшь",
        "comparative": null,
        "superlative": null,
        "feminine": "яшь",
        "plural": "яшь",
        "femininePlural": "яшь",
        "id": "tt_starter_adjectives_003",
        "lang": "tt",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "карт"
        ]
    },
    {
        "word": "карт",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күп вакыт яшәгән кеше.",
                "examples": [
                    "Ул карт."
                ]
            }
        ],
        "subtext": "карт дус / бик карт",
        "synonyms": [
            "иске гадәтләр"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "карт",
        "plural": "карт",
        "femininePlural": "карт",
        "id": "tt_starter_adjectives_004",
        "lang": "tt",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "яшь"
        ]
    },
    {
        "word": "кояшлы",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кояш яктысы күп булган.",
                "examples": [
                    "Бүген кояшлы көн."
                ]
            }
        ],
        "subtext": "кояшлы көн / кояшлы һава торышы",
        "comparative": null,
        "superlative": null,
        "feminine": "кояшлы",
        "plural": "кояшлы",
        "femininePlural": "кояшлы",
        "id": "tt_starter_adjectives_005",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "яңгырлы",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Яңгыр күп булган.",
                "examples": [
                    "Бүген яңгырлы көн."
                ]
            }
        ],
        "subtext": "яңгырлы көн / яңгырлы һава торышы",
        "comparative": null,
        "superlative": null,
        "feminine": "яңгырлы",
        "plural": "яңгырлы",
        "femininePlural": "яңгырлы",
        "id": "tt_starter_adjectives_006",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "эссе",
        "level": "starter",
        "theme": "nature",
        "emoji": "🔥",
        "form": "adjective",
        "subtext": "бик эссе / эссе һава торышы / эссе эчемлек",
        "definitions": [
            {
                "text": "Югары температуралы.",
                "examples": [
                    "Кофе бик эссе."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "эссе",
        "plural": "эссе",
        "femininePlural": "эссе",
        "id": "tt_starter_adjectives_007",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "суык"
        ]
    },
    {
        "word": "суык",
        "level": "starter",
        "theme": "nature",
        "emoji": "❄️",
        "form": "adjective",
        "subtext": "бик суык / суык иртә / суык эчемлек",
        "definitions": [
            {
                "text": "Түбән температуралы.",
                "examples": [
                    "Су суык."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "суык",
        "plural": "суык",
        "femininePlural": "суык",
        "id": "tt_starter_adjectives_008",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "эссе"
        ]
    },
    {
        "word": "гади",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Гадәти, үзенчәлекле булмаган.",
                "examples": [
                    "Бу гади көн."
                ]
            }
        ],
        "subtext": "гади көн / гади тормыш",
        "comparative": null,
        "superlative": null,
        "feminine": "гади",
        "plural": "гади",
        "femininePlural": "гади",
        "id": "tt_starter_adjectives_009",
        "lang": "tt",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "үзенчәлекле"
        ]
    },
    {
        "word": "арзан",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "adjective",
        "subtext": "арзан бәя / арзан очыш",
        "definitions": [
            {
                "text": "Хакы түбән булган.",
                "examples": [
                    "Бу кофе арзан."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "арзан",
        "plural": "арзан",
        "femininePlural": "арзан",
        "id": "tt_starter_adjectives_010",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "кыйммәт"
        ]
    },
    {
        "word": "кыйммәт",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💎",
        "form": "adjective",
        "subtext": "бик кыйммәт",
        "synonyms": [
            "кыйммәтле"
        ],
        "definitions": [
            {
                "text": "Күп акча торган нәрсә.",
                "examples": [
                    "Машина бик кыйммәт."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "кыйммәт",
        "plural": "кыйммәт",
        "femininePlural": "кыйммәт",
        "id": "tt_starter_adjectives_011",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "арзан"
        ]
    },
    {
        "word": "яхшы",
        "level": "starter",
        "theme": "describing",
        "emoji": "👍",
        "form": "adjective",
        "subtext": "яхшы идея",
        "synonyms": [
            "уңышлар"
        ],
        "definitions": [
            {
                "text": "Сыйфатлы яки ошаган.",
                "examples": [
                    "Бу яхшы эш."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "яхшы",
        "plural": "яхшы",
        "femininePlural": "яхшы",
        "id": "tt_starter_adjectives_012",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "начар"
        ]
    },
    {
        "word": "начар",
        "level": "starter",
        "theme": "describing",
        "emoji": "👎",
        "form": "adjective",
        "subtext": "начар хәбәрләр / начар карар",
        "definitions": [
            {
                "text": "Яхшы булмаган.",
                "examples": [
                    "Бүген һава торышы начар."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "начар",
        "plural": "начар",
        "femininePlural": "начар",
        "id": "tt_starter_adjectives_013",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "яхшы"
        ]
    },
    {
        "word": "зур",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐘",
        "form": "adjective",
        "subtext": "зур йорт / зур проблема",
        "definitions": [
            {
                "text": "Күләме зур булган.",
                "examples": [
                    "Бу зур офис."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "зур",
        "plural": "зур",
        "femininePlural": "зур",
        "id": "tt_starter_adjectives_014",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "кечкенә"
        ]
    },
    {
        "word": "кечкенә",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐭",
        "form": "adjective",
        "subtext": "кечкенә фатир / кечкенә эш хакы",
        "definitions": [
            {
                "text": "Күләме кечкенә булган.",
                "examples": [
                    "Минем кечкенә фатирым бар."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "кечкенә",
        "plural": "кечкенә",
        "femininePlural": "кечкенә",
        "id": "tt_starter_adjectives_015",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "зур"
        ]
    },
    {
        "word": "җиңел",
        "level": "starter",
        "theme": "describing",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кыйын булмаган.",
                "examples": [
                    "Тест җиңел."
                ]
            }
        ],
        "subtext": "җиңел эш / бик җиңел",
        "comparative": null,
        "superlative": null,
        "feminine": "җиңел",
        "plural": "җиңел",
        "femininePlural": "җиңел",
        "id": "tt_starter_adjectives_016",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "кыйын"
        ]
    },
    {
        "word": "кыйын",
        "level": "starter",
        "theme": "describing",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Эшләве авыр булган.",
                "examples": [
                    "Бу эш кыйын."
                ]
            }
        ],
        "subtext": "кыйын эш / бик кыйын",
        "comparative": null,
        "superlative": null,
        "feminine": "кыйын",
        "plural": "кыйын",
        "femininePlural": "кыйын",
        "id": "tt_starter_adjectives_017",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "җиңел"
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
                "text": "Шатлык кичергән кеше.",
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
        "id": "tt_starter_adjectives_018",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "арыган",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "бик арыган",
        "synonyms": [
            "арыдым"
        ],
        "definitions": [
            {
                "text": "Ял итәргә мохтаҗ.",
                "examples": [
                    "Мин эштән соң арыдым."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "арыган",
        "plural": "арыган",
        "femininePlural": "арыган",
        "id": "tt_starter_adjectives_019",
        "lang": "tt",
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
                "text": "Тулы эш көнендә эшләү.",
                "examples": [
                    "Аның тулы көнлек эше бар."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "тулы эш көне"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "тулы көн",
        "plural": "тулы көн",
        "femininePlural": "тулы көн",
        "id": "tt_starter_adjectives_020",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "тулы булмаган көн"
        ]
    },
    {
        "word": "тулы булмаган көн",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "form": "adjective",
        "definitions": [
            {
                "text": "Азрак вакыт эшләү.",
                "examples": [
                    "Ул шимбә көне эшли."
                ]
            }
        ],
        "subtext": "тулы булмаган эш көне",
        "comparative": null,
        "superlative": null,
        "feminine": "тулы булмаган көн",
        "plural": "тулы булмаган көн",
        "femininePlural": "тулы булмаган көн",
        "id": "tt_starter_adjectives_021",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "тулы көн"
        ]
    },
    {
        "word": "таза",
        "level": "starter",
        "theme": "furniture",
        "emoji": "✨",
        "form": "adjective",
        "subtext": "таза кием / таза бүлмә",
        "definitions": [
            {
                "text": "Бысрак булмаган.",
                "examples": [
                    "Фатир хәзер таза."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "таза",
        "plural": "таза",
        "femininePlural": "таза",
        "id": "tt_starter_adjectives_022",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "бысрак"
        ]
    },
    {
        "word": "сәламәт",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥗",
        "form": "adjective",
        "subtext": "сәламәт ризык",
        "definitions": [
            {
                "text": "Тән өчен файдалы.",
                "examples": [
                    "Яшелчәләр — сәламәт ризык."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "сәламәт",
        "plural": "сәламәт",
        "femininePlural": "сәламәт",
        "id": "tt_starter_adjectives_023",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "начар ризык"
        ]
    },
    {
        "word": "авыру",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🤒",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "авырыйм"
        ],
        "definitions": [
            {
                "text": "Сәламәт булмаган.",
                "examples": [
                    "Мин бүген авырыйм."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "авыру",
        "plural": "авыру",
        "femininePlural": "авыру",
        "id": "tt_starter_adjectives_024",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "яхшы"
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
                "text": "Интернет кулланып.",
                "examples": [
                    "Мин интернет аша сатып алам."
                ]
            }
        ],
        "subtext": "онлайн сатып алу",
        "comparative": null,
        "superlative": null,
        "feminine": "онлайн",
        "plural": "онлайн",
        "femininePlural": "онлайн",
        "id": "tt_starter_adjectives_025",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "оффлайн"
        ]
    },
    {
        "word": "ялгыз",
        "level": "starter",
        "theme": "social",
        "emoji": "👤",
        "form": "adjective",
        "definitions": [
            {
                "text": "Башкаларсыз.",
                "examples": [
                    "Ул ялгыз яши."
                ]
            }
        ],
        "subtext": "ялгыз яшәү",
        "comparative": null,
        "superlative": null,
        "feminine": "ялгыз",
        "plural": "ялгыз",
        "femininePlural": "ялгыз",
        "id": "tt_starter_adjectives_026",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "бергә"
        ]
    },
    {
        "word": "тыныч",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😌",
        "form": "adjective",
        "subtext": "тыныч булу",
        "definitions": [
            {
                "text": "Борчылмаган.",
                "examples": [
                    "Мин ял көннәрендә тынычмын."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "тыныч",
        "plural": "тыныч",
        "femininePlural": "тыныч",
        "id": "tt_starter_adjectives_027",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "стресслы"
        ]
    },
    {
        "word": "борчулы",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😟",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "борчылу"
        ],
        "definitions": [
            {
                "text": "Куркынычланган.",
                "examples": [
                    "Ул эше өчен борчыла."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "борчулы",
        "plural": "борчулы",
        "femininePlural": "борчулы",
        "id": "tt_starter_adjectives_028",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "тыныч"
        ]
    },
    {
        "word": "мәшгуль",
        "level": "starter",
        "theme": "work",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "бик мәшгуль",
        "definitions": [
            {
                "text": "Эше күп булган.",
                "examples": [
                    "Бу атнада мин бик мәшгульмен."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "мәшгуль",
        "plural": "мәшгуль",
        "femininePlural": "мәшгуль",
        "id": "tt_starter_adjectives_029",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "файдалы",
        "level": "starter",
        "theme": "describing",
        "emoji": "🛠️",
        "form": "adjective",
        "subtext": "бик файдалы",
        "definitions": [
            {
                "text": "Кирәкле.",
                "examples": [
                    "Машина авылда бик файдалы."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "файдалы",
        "plural": "файдалы",
        "femininePlural": "файдалы",
        "id": "tt_starter_adjectives_030",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "кирәксез"
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
                "text": "Зур әһәмияткә ия.",
                "examples": [
                    "Йокы бик мөһим."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "мөһим",
        "plural": "мөһим",
        "femininePlural": "мөһим",
        "id": "tt_starter_adjectives_031",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "кызыл",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "кызыл шәраб / кызыл төс",
        "definitions": [
            {
                "text": "Кан төсендәге.",
                "examples": [
                    "Аның кызыл сумкасы бар."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "кызыл",
        "plural": "кызыл",
        "femininePlural": "кызыл",
        "id": "tt_starter_adjectives_032",
        "lang": "tt",
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
                "text": "Аяз күк төсендәге.",
                "examples": [
                    "Аның машинаһы зәңгәр."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "зәңгәр",
        "plural": "зәңгәр",
        "femininePlural": "зәңгәр",
        "id": "tt_starter_adjectives_033",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "яшел",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "яшел төс",
        "definitions": [
            {
                "text": "Үлән төсендәге.",
                "examples": [
                    "Ул яшел күлмәк кигән."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "яшел",
        "plural": "яшел",
        "femininePlural": "яшел",
        "id": "tt_starter_adjectives_034",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "ак",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "ак төс / ап-ак",
        "definitions": [
            {
                "text": "Кар төсендәге.",
                "examples": [
                    "Диварлар ак."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ак",
        "plural": "ак",
        "femininePlural": "ак",
        "id": "tt_starter_adjectives_035",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "кара",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "кара төс / кап-кара",
        "definitions": [
            {
                "text": "Төн төсендәге.",
                "examples": [
                    "Ул кара пальто кигән."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "кара",
        "plural": "кара",
        "femininePlural": "кара",
        "id": "tt_starter_adjectives_036",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "сары",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "сары төс",
        "definitions": [
            {
                "text": "Кояш төсендәге.",
                "examples": [
                    "Аның сары зонты бар."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "сары",
        "plural": "сары",
        "femininePlural": "сары",
        "id": "tt_starter_adjectives_037",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "буш",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "буш вакыт",
        "definitions": [
            {
                "text": "Акчасыз.",
                "examples": [
                    "Якшәмбе көне музей буш."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "буш",
        "plural": "буш",
        "femininePlural": "буш",
        "id": "tt_starter_adjectives_038",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "ачык",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "form": "adjective",
        "subtext": "ачык ишек",
        "definitions": [
            {
                "text": "Ябык булмаган.",
                "examples": [
                    "Кибет ачык."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ачык",
        "plural": "ачык",
        "femininePlural": "ачык",
        "id": "tt_starter_adjectives_039",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "ябык"
        ]
    },
    {
        "word": "ябык",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "form": "adjective",
        "subtext": "ябык ишек",
        "definitions": [
            {
                "text": "Ачык булмаган.",
                "examples": [
                    "Банк ябык."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "ябык",
        "plural": "ябык",
        "femininePlural": "ябык",
        "id": "tt_starter_adjectives_040",
        "lang": "tt",
        "transcription": "",
        "antonyms": [
            "ачык"
        ]
    },
    {
        "word": "зур",
        "level": "starter",
        "form": "adjective",
        "subtext": "зур шәһәр",
        "definitions": [
            {
                "text": "Күләме зур.",
                "examples": [
                    "Бу зур шәһәр."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "зур",
        "plural": "зур",
        "femininePlural": "зур",
        "id": "tt_starter_adjectives_041",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "кечкенә",
        "level": "starter",
        "form": "adjective",
        "subtext": "кечкенә генә",
        "definitions": [
            {
                "text": "Күләме кечкенә.",
                "examples": [
                    "Ул кечкенә машина йөртә."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "кечкенә",
        "plural": "кечкенә",
        "femininePlural": "кечкенә",
        "id": "tt_starter_adjectives_042",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "озын",
        "level": "starter",
        "form": "adjective",
        "subtext": "озын юл",
        "definitions": [
            {
                "text": "Озынлыгы зур.",
                "examples": [
                    "Аның эшкә юлы озын."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "озын",
        "plural": "озын",
        "femininePlural": "озын",
        "id": "tt_starter_adjectives_043",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "биек",
        "level": "starter",
        "form": "adjective",
        "subtext": "биек бәя",
        "definitions": [
            {
                "text": "Биеклеге зур.",
                "examples": [
                    "Бу җирдә хаклар биек."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "биек",
        "plural": "биек",
        "femininePlural": "биек",
        "id": "tt_starter_adjectives_044",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "түбән",
        "level": "starter",
        "form": "adjective",
        "subtext": "түбән бәя",
        "definitions": [
            {
                "text": "Биеклеге аз.",
                "examples": [
                    "Эш хакы түбән."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "түбән",
        "plural": "түбән",
        "femininePlural": "түбән",
        "id": "tt_starter_adjectives_045",
        "lang": "tt",
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
                "text": "Эчендә нәрсә күп булган.",
                "examples": [
                    "Мин тукмын."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "тулы",
        "plural": "тулы",
        "femininePlural": "тулы",
        "id": "tt_starter_adjectives_046",
        "lang": "tt",
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
                "text": "Эчендә нәрсә булмаган.",
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
        "id": "tt_starter_adjectives_047",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "җылы",
        "level": "starter",
        "form": "adjective",
        "subtext": "җылы һава торышы",
        "definitions": [
            {
                "text": "Безгә ошаган җылылык.",
                "examples": [
                    "Бүлмә җылы."
                ]
            }
        ],
        "theme": "nature",
        "comparative": null,
        "superlative": null,
        "feminine": "җылы",
        "plural": "җылы",
        "femininePlural": "җылы",
        "id": "tt_starter_adjectives_048",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "саф",
        "level": "starter",
        "form": "adjective",
        "subtext": "саф һава",
        "definitions": [
            {
                "text": "Безгә ошаган салкынлык.",
                "examples": [
                    "Уңа саф һава торошы ошый."
                ]
            }
        ],
        "theme": "nature",
        "comparative": null,
        "superlative": null,
        "feminine": "саф",
        "plural": "саф",
        "femininePlural": "саф",
        "id": "tt_starter_adjectives_049",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "җылы",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "еוועш һава торышы"
        ],
        "definitions": [
            {
                "text": "Сулы.",
                "examples": [
                    "Кеемем евеш."
                ]
            }
        ],
        "theme": "nature",
        "comparative": null,
        "superlative": null,
        "feminine": "җылы",
        "plural": "җылы",
        "femininePlural": "җылы",
        "id": "tt_starter_adjectives_050",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "коры",
        "level": "starter",
        "form": "adjective",
        "subtext": "коры һава",
        "definitions": [
            {
                "text": "Сусыз.",
                "examples": [
                    "Бүлмә коры булырга тиеш."
                ]
            }
        ],
        "theme": "nature",
        "comparative": null,
        "superlative": null,
        "feminine": "коры",
        "plural": "коры",
        "femininePlural": "коры",
        "id": "tt_starter_adjectives_051",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бысрак",
        "level": "starter",
        "theme": "furniture",
        "form": "adjective",
        "subtext": "бысрак куллар",
        "definitions": [
            {
                "text": "Таза булмаган.",
                "examples": [
                    "Кулларым бысрак."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "бысрак",
        "plural": "бысрак",
        "femininePlural": "бысрак",
        "id": "tt_starter_adjectives_052",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "каты",
        "level": "starter",
        "form": "adjective",
        "subtext": "каты эш",
        "definitions": [
            {
                "text": "Йомшак булмаган.",
                "examples": [
                    "Урындык бик каты."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "каты",
        "plural": "каты",
        "femininePlural": "каты",
        "id": "tt_starter_adjectives_053",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "йомшак",
        "level": "starter",
        "form": "adjective",
        "subtext": "йомшак музыка",
        "definitions": [
            {
                "text": "Каты булмаган.",
                "examples": [
                    "Диван бик йомшак."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "йомшак",
        "plural": "йомшак",
        "femininePlural": "йомшак",
        "id": "tt_starter_adjectives_054",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "авыр",
        "level": "starter",
        "form": "adjective",
        "subtext": "авыр йөк",
        "definitions": [
            {
                "text": "Авырлыгы зур.",
                "examples": [
                    "Сумка бик авыр."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "авыр",
        "plural": "авыр",
        "femininePlural": "авыр",
        "id": "tt_starter_adjectives_055",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "җиңел",
        "level": "starter",
        "form": "adjective",
        "subtext": "җиңел ризык",
        "definitions": [
            {
                "text": "Авыр булмаган.",
                "examples": [
                    "Минем сумкам җиңел."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "җиңел",
        "plural": "җиңел",
        "femininePlural": "җиңел",
        "id": "tt_starter_adjectives_056",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "коңгырт",
        "level": "starter",
        "form": "adjective",
        "subtext": "коңгырт төс",
        "definitions": [
            {
                "text": "Агач төсендәге.",
                "examples": [
                    "Аның күзләре коңгырт."
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "feminine": "коңгырт",
        "plural": "коңгырт",
        "femininePlural": "коңгырт",
        "id": "tt_starter_adjectives_057",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "соры",
        "level": "starter",
        "form": "adjective",
        "subtext": "соры төс",
        "definitions": [
            {
                "text": "Ак белән кара арасындагы төс.",
                "examples": [
                    "Аның чәчләре соры."
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "feminine": "соры",
        "plural": "соры",
        "femininePlural": "соры",
        "id": "tt_starter_adjectives_058",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ал",
        "level": "starter",
        "form": "adjective",
        "subtext": "ал төс",
        "definitions": [
            {
                "text": "Ачык кызыл төс.",
                "examples": [
                    "Уңа ал төс ошый."
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "feminine": "ал",
        "plural": "ал",
        "femininePlural": "ал",
        "id": "tt_starter_adjectives_059",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "кызгылт сары",
        "level": "starter",
        "form": "adjective",
        "subtext": "кызгылт сары төс",
        "definitions": [
            {
                "text": "Апельсин төсендәге.",
                "examples": [
                    "Ул кызгылт сары кием алды."
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "feminine": "кызгылт сары",
        "plural": "кызгылт сары",
        "femininePlural": "кызгылт сары",
        "id": "tt_starter_adjectives_060",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бөек",
        "level": "starter",
        "form": "adjective",
        "subtext": "бөек фикер",
        "definitions": [
            {
                "text": "Бик яхшы.",
                "examples": [
                    "Ул бөек менеджер."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "бөек",
        "plural": "бөек",
        "femininePlural": "бөек",
        "id": "tt_starter_adjectives_061",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "яхшы",
        "level": "starter",
        "form": "adjective",
        "subtext": "яхшы көн",
        "definitions": [
            {
                "text": "Күңелгә яткан.",
                "examples": [
                    "Яңа офис бик яхшы."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "яхшы",
        "plural": "яхшы",
        "femininePlural": "яхшы",
        "id": "tt_starter_adjectives_062",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "искиткеч яхшы",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "искиткеч вакыт"
        ],
        "definitions": [
            {
                "text": "Бик нык яхшы.",
                "examples": [
                    "Аларның командасы искиткеч яхшы иде."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "искиткеч яхшы",
        "plural": "искиткеч яхшы",
        "femininePlural": "искиткеч яхшы",
        "id": "tt_starter_adjectives_063",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "куркыныч",
        "level": "starter",
        "form": "adjective",
        "subtext": "куркыныч хата",
        "definitions": [
            {
                "text": "Бик начар.",
                "examples": [
                    "Трафик куркыныч иде."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "куркыныч",
        "plural": "куркыныч",
        "femininePlural": "куркыныч",
        "id": "tt_starter_adjectives_064",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бик начар",
        "level": "starter",
        "form": "adjective",
        "subtext": "бик начар һава торышы",
        "definitions": [
            {
                "text": "Күңелсез.",
                "examples": [
                    "Тавыш бик начар."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "бик начар",
        "plural": "бик начар",
        "femininePlural": "бик начар",
        "id": "tt_starter_adjectives_065",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "гаҗәп",
        "level": "starter",
        "form": "adjective",
        "subtext": "гаҗәп нәтиҗә",
        "definitions": [
            {
                "text": "Таң калдыргыч.",
                "examples": [
                    "Ул гаҗәп презентация ясады."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "гаҗәп",
        "plural": "гаҗәп",
        "femininePlural": "гаҗәп",
        "id": "tt_starter_adjectives_066",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "фантастик",
        "level": "starter",
        "form": "adjective",
        "subtext": "фантастик хәбәрләр",
        "definitions": [
            {
                "text": "Искиткеч яхшы.",
                "examples": [
                    "Яңа система фантастик эшли."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "фантастик",
        "plural": "фантастик",
        "femininePlural": "фантастик",
        "id": "tt_starter_adjectives_067",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "моңлы",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "күңелсез хәл"
        ],
        "definitions": [
            {
                "text": "Күңелсез.",
                "examples": [
                    "Ул киткәнгә моңлы иде."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "моңлы",
        "plural": "моңлы",
        "femininePlural": "моңлы",
        "id": "tt_starter_adjectives_068",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ач",
        "level": "starter",
        "form": "adjective",
        "subtext": "бик ач",
        "definitions": [
            {
                "text": "Ашыйсы килгән.",
                "examples": [
                    "Мин ач."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "ач",
        "plural": "ач",
        "femininePlural": "ач",
        "id": "tt_starter_adjectives_069",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ачулы",
        "level": "starter",
        "form": "adjective",
        "subtext": "бик ачулы",
        "definitions": [
            {
                "text": "Нык ачуланган.",
                "examples": [
                    "Ул ачулы иде."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "ачулы",
        "plural": "ачулы",
        "femininePlural": "ачулы",
        "id": "tt_starter_adjectives_070",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ялыккан",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ялыктыргыч"
        ],
        "definitions": [
            {
                "text": "Кызыксынуы булмаган.",
                "examples": [
                    "Ул җыелышта ялыкты."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "ялыккан",
        "plural": "ялыккан",
        "femininePlural": "ялыккан",
        "id": "tt_starter_adjectives_071",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "дулкынланган",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "дулкынлану"
        ],
        "definitions": [
            {
                "text": "Шатлыклы дулкынлану.",
                "examples": [
                    "Ул яңа эше өчен дулкынланган."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "дулкынланган",
        "plural": "дулкынланган",
        "femininePlural": "дулкынланган",
        "id": "tt_starter_adjectives_072",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "курыккан",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "курку"
        ],
        "definitions": [
            {
                "text": "Курку белдерү.",
                "examples": [
                    "Ул хата ясаудан курка."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "курыккан",
        "plural": "курыккан",
        "femininePlural": "курыккан",
        "id": "tt_starter_adjectives_073",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "үкенечле",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "үкенү"
        ],
        "definitions": [
            {
                "text": "Үкенеч белдерү.",
                "examples": [
                    "Ул эшләгәне өчен үкенә."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "үкенечле",
        "plural": "үкенечле",
        "femininePlural": "үкенечле",
        "id": "tt_starter_adjectives_074",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "дөрес",
        "level": "starter",
        "form": "adjective",
        "subtext": "дөрес җавап",
        "definitions": [
            {
                "text": "Хатасыз.",
                "examples": [
                    "Бу дөрес офисмы?"
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "дөрес",
        "plural": "дөрес",
        "femininePlural": "дөрес",
        "id": "tt_starter_adjectives_075",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "хата",
        "level": "starter",
        "form": "adjective",
        "subtext": "хата җавап",
        "definitions": [
            {
                "text": "Дөрес булмаган.",
                "examples": [
                    "Бу хата карар иде."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "хата",
        "plural": "хата",
        "femininePlural": "хата",
        "id": "tt_starter_adjectives_076",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "яңа",
        "level": "starter",
        "form": "adjective",
        "subtext": "яңа эш",
        "definitions": [
            {
                "text": "Элек булмаган.",
                "examples": [
                    "Минем яңа эшем бар."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "яңа",
        "plural": "яңа",
        "femininePlural": "яңа",
        "id": "tt_starter_adjectives_077",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "башка",
        "level": "starter",
        "form": "adjective",
        "subtext": "бөтенләй башка",
        "definitions": [
            {
                "text": "Ошамаган.",
                "examples": [
                    "Бу эш башка төрле."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "башка",
        "plural": "башка",
        "femininePlural": "башка",
        "id": "tt_starter_adjectives_078",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бер үк",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "нәкъ шундый ук"
        ],
        "definitions": [
            {
                "text": "Ошаш.",
                "examples": [
                    "Аларның эш хакы бер үк."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "бер үк",
        "plural": "бер үк",
        "femininePlural": "бер үк",
        "id": "tt_starter_adjectives_079",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "тиз",
        "level": "starter",
        "form": "adjective",
        "subtext": "тиз ризык",
        "definitions": [
            {
                "text": "Тиз хәрәкәт иткән.",
                "examples": [
                    "Поезд тиз бара."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "тиз",
        "plural": "тиз",
        "femininePlural": "тиз",
        "id": "tt_starter_adjectives_080",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "акрын",
        "level": "starter",
        "form": "adjective",
        "subtext": "акрын интернет",
        "definitions": [
            {
                "text": "Тиз булмаган.",
                "examples": [
                    "Система акрын эшли."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "акрын",
        "plural": "акрын",
        "femininePlural": "акрын",
        "id": "tt_starter_adjectives_081",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "тыныч",
        "level": "starter",
        "form": "adjective",
        "subtext": "тыныч урын",
        "definitions": [
            {
                "text": "Тавышсыз.",
                "examples": [
                    "Офиста тыныч."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "тыныч",
        "plural": "тыныч",
        "femininePlural": "тыныч",
        "id": "tt_starter_adjectives_082",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "каты",
        "level": "starter",
        "form": "adjective",
        "subtext": "каты тавыш",
        "definitions": [
            {
                "text": "Тавышлы.",
                "examples": [
                    "Офиста тавыш каты."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "каты",
        "plural": "каты",
        "femininePlural": "каты",
        "id": "tt_starter_adjectives_083",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "куркынычсыз",
        "level": "starter",
        "form": "adjective",
        "subtext": "куркынычсыз урын",
        "definitions": [
            {
                "text": "Куркынычсыз.",
                "examples": [
                    "Бу район куркынычсыз."
                ]
            }
        ],
        "theme": "places",
        "comparative": null,
        "superlative": null,
        "feminine": "куркынычсыз",
        "plural": "куркынычсыз",
        "femininePlural": "куркынычсыз",
        "id": "tt_starter_adjectives_084",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "куркыныч",
        "level": "starter",
        "form": "adjective",
        "subtext": "куркыныч хәл",
        "definitions": [
            {
                "text": "Зыян китерүе ихтимал.",
                "examples": [
                    "Бу юл куркыныч."
                ]
            }
        ],
        "theme": "places",
        "comparative": null,
        "superlative": null,
        "feminine": "куркыныч",
        "plural": "куркыныч",
        "femininePlural": "куркыныч",
        "id": "tt_starter_adjectives_085",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бәхетсез",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Шат булмаган.",
                "examples": [
                    "Ул бәхетсез."
                ]
            }
        ],
        "subtext": "бәхетсез булу",
        "comparative": null,
        "superlative": null,
        "feminine": "бәхетсез",
        "plural": "бәхетсез",
        "femininePlural": "бәхетсез",
        "id": "tt_starter_adjectives_086",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "дулкынланган",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Борчулы.",
                "examples": [
                    "Ул интервью алдыннан дулкынланды."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "дулкынлану"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "дулкынланган",
        "plural": "дулкынланган",
        "femininePlural": "дулкынланган",
        "id": "tt_starter_adjectives_087",
        "lang": "tt",
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
                "text": "Кысылу кичергән.",
                "examples": [
                    "Ул стресс кичерә."
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
        "id": "tt_starter_adjectives_088",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "үзенә ышанган",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Үз көченә ышанган.",
                "examples": [
                    "Ул үзенә ышана."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "үзеңә ышаныч"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "үзенә ышанган",
        "plural": "үзенә ышанган",
        "femininePlural": "үзенә ышанган",
        "id": "tt_starter_adjectives_089",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "горур",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Уңыш өчен шатланган.",
                "examples": [
                    "Ул горур."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "горурлык"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "горур",
        "plural": "горур",
        "femininePlural": "горур",
        "id": "tt_starter_adjectives_090",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "курыккан",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Курку хисе.",
                "examples": [
                    "Ул курыккан иде."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "куркыту"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "курыккан",
        "plural": "курыккан",
        "femininePlural": "курыккан",
        "id": "tt_starter_adjectives_091",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "гаҗәпләнгән",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көтелмәгән нәрсәгә таң калу.",
                "examples": [
                    "Ул гаҗәпләнде."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "гаҗәпләнү"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "гаҗәпләнгән",
        "plural": "гаҗәпләнгән",
        "femininePlural": "гаҗәпләнгән",
        "id": "tt_starter_adjectives_092",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "күңеле кайткан",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Өмете акланмаган.",
                "examples": [
                    "Уның күңеле кайтты."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "күңел кайту"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "күңеле кайткан",
        "plural": "күңеле кайткан",
        "femininePlural": "күңеле кайткан",
        "id": "tt_starter_adjectives_093",
        "lang": "tt",
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
                "text": "Күзгә яхшы күренгән.",
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
        "id": "tt_starter_adjectives_094",
        "lang": "tt",
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
                "text": "Яхшы күренешле.",
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
        "id": "tt_starter_adjectives_095",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "көчле",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көче күп булган.",
                "examples": [
                    "Ул көчле җитәкче."
                ]
            }
        ],
        "subtext": "көчле рух",
        "comparative": null,
        "superlative": null,
        "feminine": "көчле",
        "plural": "көчле",
        "femininePlural": "көчле",
        "id": "tt_starter_adjectives_096",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "көчсез",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көче аз булган.",
                "examples": [
                    "Сигнал көчсез."
                ]
            }
        ],
        "subtext": "көчсез сигнал",
        "comparative": null,
        "superlative": null,
        "feminine": "көчсез",
        "plural": "көчсез",
        "femininePlural": "көчсез",
        "id": "tt_starter_adjectives_097",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "таза",
        "level": "starter",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Физик яктан яхшы.",
                "examples": [
                    "Ул үзен таза тота."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "яхшы формада"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "таза",
        "plural": "таза",
        "femininePlural": "таза",
        "id": "tt_starter_adjectives_098",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "бик яхшы",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Иң югары сыйфатлы.",
                "examples": [
                    "Ул бик яхшы баһа алды."
                ]
            }
        ],
        "subtext": "бик яхшы эш",
        "comparative": null,
        "superlative": null,
        "feminine": "бик яхшы",
        "plural": "бик яхшы",
        "femininePlural": "бик яхшы",
        "id": "tt_starter_adjectives_099",
        "lang": "tt",
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
                "text": "Хатасыз.",
                "examples": [
                    "Вакыт камил иде."
                ]
            }
        ],
        "subtext": "камил вакыт",
        "comparative": null,
        "superlative": null,
        "feminine": "камил",
        "plural": "камил",
        "femininePlural": "камил",
        "id": "tt_starter_adjectives_100",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "кирәксез",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Файдасы булмаган.",
                "examples": [
                    "Бу программа кирәксез."
                ]
            }
        ],
        "subtext": "бөтенләй кирәксез",
        "comparative": null,
        "superlative": null,
        "feminine": "кирәксез",
        "plural": "кирәксез",
        "femininePlural": "кирәксез",
        "id": "tt_starter_adjectives_101",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "дөрес",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хатасыз.",
                "examples": [
                    "Дөреслеген тикшерегез."
                ]
            }
        ],
        "subtext": "дөрес юл",
        "comparative": null,
        "superlative": null,
        "feminine": "дөрес",
        "plural": "дөрес",
        "femininePlural": "дөрес",
        "id": "tt_starter_adjectives_102",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "кызыклы",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Игътибарны җәлеп иткән.",
                "examples": [
                    "Тәкъдим кызыклы."
                ]
            }
        ],
        "subtext": "бик кызыклы",
        "comparative": null,
        "superlative": null,
        "feminine": "кызыклы",
        "plural": "кызыклы",
        "femininePlural": "кызыклы",
        "id": "tt_starter_adjectives_103",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "кызыксыз",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күңелсез.",
                "examples": [
                    "Җыелыш кызыксыз иде."
                ]
            }
        ],
        "subtext": "бик кызыксыз",
        "comparative": null,
        "superlative": null,
        "feminine": "кызыксыз",
        "plural": "кызыксыз",
        "femininePlural": "кызыксыз",
        "id": "tt_starter_adjectives_104",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "кирәкле",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Мохтаҗлык булган.",
                "examples": [
                    "Интернет кирәкле."
                ]
            }
        ],
        "subtext": "бик кирәкле",
        "comparative": null,
        "superlative": null,
        "feminine": "кирәкле",
        "plural": "кирәкле",
        "femininePlural": "кирәкле",
        "id": "tt_starter_adjectives_105",
        "lang": "tt",
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
                "text": "Булдыра алырлык.",
                "examples": [
                    "Бу мөмкинме?"
                ]
            }
        ],
        "subtext": "мөмкин кадәр тизрәк",
        "comparative": null,
        "superlative": null,
        "feminine": "мөмкин",
        "plural": "мөмкин",
        "femininePlural": "мөмкин",
        "id": "tt_starter_adjectives_106",
        "lang": "tt",
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
                "text": "Булдыра алмаслак.",
                "examples": [
                    "Бу мөмкин түгел."
                ]
            }
        ],
        "subtext": "мөмкин түгел",
        "comparative": null,
        "superlative": null,
        "feminine": "мөмкин түгел",
        "plural": "мөмкин түгел",
        "femininePlural": "мөмкин түгел",
        "id": "tt_starter_adjectives_107",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "үзенчәлекле",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Гадәти булмаган.",
                "examples": [
                    "Уның үзенчәлекле таланты бар."
                ]
            }
        ],
        "subtext": "үзенчәлекле талант",
        "comparative": null,
        "superlative": null,
        "feminine": "үзенчәлекле",
        "plural": "үзенчәлекле",
        "femininePlural": "үзенчәлекле",
        "id": "tt_starter_adjectives_108",
        "lang": "tt",
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
                "text": "Күпләргә ошаган.",
                "examples": [
                    "Бу кафе популяр."
                ]
            }
        ],
        "subtext": "бик популяр",
        "comparative": null,
        "superlative": null,
        "feminine": "популяр",
        "plural": "популяр",
        "femininePlural": "популяр",
        "id": "tt_starter_adjectives_109",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ошаш",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бер-берсенә якын.",
                "examples": [
                    "Улар ошаш."
                ]
            }
        ],
        "subtext": "бик ошаш",
        "comparative": null,
        "superlative": null,
        "feminine": "ошаш",
        "plural": "ошаш",
        "femininePlural": "ошаш",
        "id": "tt_starter_adjectives_110",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "дусларча",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Яхшы мөнәсәбәтле.",
                "examples": [
                    "Менеджер дусларча."
                ]
            }
        ],
        "subtext": "бик дусларча",
        "comparative": null,
        "superlative": null,
        "feminine": "дусларча",
        "plural": "дусларча",
        "femininePlural": "дусларча",
        "id": "tt_starter_adjectives_111",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "мәрхәмәтле",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Яхшы күңелле.",
                "examples": [
                    "Ул мәрхәмәтле."
                ]
            }
        ],
        "subtext": "бик мәрхәмәтле",
        "comparative": null,
        "superlative": null,
        "feminine": "мәрхәмәтле",
        "plural": "мәрхәмәтле",
        "femininePlural": "мәрхәмәтле",
        "id": "tt_starter_adjectives_112",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "көлкеле",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көлдерә торган.",
                "examples": [
                    "Ул көлкеле сөйли."
                ]
            }
        ],
        "subtext": "бик көлкеле",
        "comparative": null,
        "superlative": null,
        "feminine": "көлкеле",
        "plural": "көлкеле",
        "femininePlural": "көлкеле",
        "id": "tt_starter_adjectives_113",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "акыллы",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тиз аңлаучан.",
                "examples": [
                    "Ул акыллы."
                ]
            }
        ],
        "subtext": "бик акыллы",
        "comparative": null,
        "superlative": null,
        "feminine": "акыллы",
        "plural": "акыллы",
        "femininePlural": "акыллы",
        "id": "tt_starter_adjectives_114",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "әдәпле",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хөрмәт итә белгән.",
                "examples": [
                    "Ул әдәпле."
                ]
            }
        ],
        "subtext": "бик әдәпле",
        "comparative": null,
        "superlative": null,
        "feminine": "әдәпле",
        "plural": "әдәпле",
        "femininePlural": "әдәпле",
        "id": "tt_starter_adjectives_115",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "тупас",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Әдәпсез.",
                "examples": [
                    "Бу хат тупас иде."
                ]
            }
        ],
        "subtext": "бик тупас",
        "comparative": null,
        "superlative": null,
        "feminine": "тупас",
        "plural": "тупас",
        "femininePlural": "тупас",
        "id": "tt_starter_adjectives_116",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ялкау",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Эшләргә теләмәгән.",
                "examples": [
                    "Ул ялкау."
                ]
            }
        ],
        "subtext": "бик ялкау",
        "comparative": null,
        "superlative": null,
        "feminine": "ялкау",
        "plural": "ялкау",
        "femininePlural": "ялкау",
        "id": "tt_starter_adjectives_117",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "намуслы",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Дөрес сөйләгән.",
                "examples": [
                    "Ул намуслы."
                ]
            }
        ],
        "subtext": "бик намуслы",
        "comparative": null,
        "superlative": null,
        "feminine": "намуслы",
        "plural": "намуслы",
        "femininePlural": "намуслы",
        "id": "tt_starter_adjectives_118",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "шау-шулы",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тавышлы.",
                "examples": [
                    "Офис шау-шулы."
                ]
            }
        ],
        "subtext": "бик шау-шулы",
        "comparative": null,
        "superlative": null,
        "feminine": "шау-шулы",
        "plural": "шау-шулы",
        "femininePlural": "шау-шулы",
        "id": "tt_starter_adjectives_119",
        "lang": "tt",
        "emoji": "✨",
        "transcription": ""
    }
]
    const lang = "tt";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();