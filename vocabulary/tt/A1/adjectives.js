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
        "lang": "tt",
        "antonyms": [
            "тәпәш"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_001"
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
        "lang": "tt",
        "antonyms": [
            "биек"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_002"
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
        "lang": "tt",
        "antonyms": [
            "карт"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_003"
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
        "lang": "tt",
        "antonyms": [
            "яшь"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_004"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_nature_001"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_nature_002"
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
        "lang": "tt",
        "antonyms": [
            "суык"
        ],
        "transcription": "",
        "id": "tt_starter_nature_003"
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
        "lang": "tt",
        "antonyms": [
            "эссе"
        ],
        "transcription": "",
        "id": "tt_starter_nature_004"
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
        "lang": "tt",
        "antonyms": [
            "үзенчәлекле"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_005"
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
        "lang": "tt",
        "antonyms": [
            "кыйммәт"
        ],
        "transcription": "",
        "id": "tt_starter_shopping_001"
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
        "lang": "tt",
        "antonyms": [
            "арзан"
        ],
        "transcription": "",
        "id": "tt_starter_shopping_002"
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
        "lang": "tt",
        "antonyms": [
            "начар"
        ],
        "transcription": "",
        "id": "tt_starter_describing_006"
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
        "lang": "tt",
        "antonyms": [
            "яхшы"
        ],
        "transcription": "",
        "id": "tt_starter_describing_007"
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
        "lang": "tt",
        "antonyms": [
            "кечкенә"
        ],
        "transcription": "",
        "id": "tt_starter_describing_008"
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
        "lang": "tt",
        "antonyms": [
            "зур"
        ],
        "transcription": "",
        "id": "tt_starter_describing_009"
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
        "lang": "tt",
        "antonyms": [
            "кыйын"
        ],
        "transcription": "",
        "id": "tt_starter_describing_010"
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
        "lang": "tt",
        "antonyms": [
            "җиңел"
        ],
        "transcription": "",
        "id": "tt_starter_describing_011"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_emotions_001"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_emotions_002"
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
        "lang": "tt",
        "antonyms": [
            "тулы булмаган көн"
        ],
        "transcription": "",
        "id": "tt_starter_work_001"
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
        "lang": "tt",
        "antonyms": [
            "тулы көн"
        ],
        "transcription": "",
        "id": "tt_starter_work_002"
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
        "lang": "tt",
        "antonyms": [
            "бысрак"
        ],
        "transcription": "",
        "id": "tt_starter_furniture_001"
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
        "lang": "tt",
        "antonyms": [
            "начар ризык"
        ],
        "transcription": "",
        "id": "tt_starter_food_drink_001"
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
        "lang": "tt",
        "antonyms": [
            "яхшы"
        ],
        "transcription": "",
        "id": "tt_starter_health_medicine_001"
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
        "lang": "tt",
        "antonyms": [
            "оффлайн"
        ],
        "transcription": "",
        "id": "tt_starter_technology_001"
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
        "lang": "tt",
        "antonyms": [
            "бергә"
        ],
        "transcription": "",
        "id": "tt_starter_social_001"
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
        "lang": "tt",
        "antonyms": [
            "стресслы"
        ],
        "transcription": "",
        "id": "tt_starter_emotions_003"
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
        "lang": "tt",
        "antonyms": [
            "тыныч"
        ],
        "transcription": "",
        "id": "tt_starter_emotions_004"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_003"
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
        "lang": "tt",
        "antonyms": [
            "кирәксез"
        ],
        "transcription": "",
        "id": "tt_starter_describing_012"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_describing_013"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_colours_001"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_colours_002"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_colours_003"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_colours_004"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_colours_005"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_colours_006"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_003"
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
        "lang": "tt",
        "antonyms": [
            "ябык"
        ],
        "transcription": "",
        "id": "tt_starter_shopping_004"
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
        "lang": "tt",
        "antonyms": [
            "ачык"
        ],
        "transcription": "",
        "id": "tt_starter_shopping_005"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_014"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_015"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_016"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_017"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_018"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_019"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_020"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_nature_005"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_nature_006"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_nature_007"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_nature_008"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_furniture_002"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_021"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_022"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_023"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_024"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_colours_007"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_colours_008"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_colours_009"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_colours_010"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_025"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_026"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_027"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_028"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_029"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_030"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_031"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_005"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_006"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_007"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_008"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_009"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_010"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_011"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_032"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_033"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_034"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_035"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_036"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_037"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_038"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_039"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_040"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_places_001"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_places_002"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_012"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_013"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_014"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_041"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_042"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_015"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_016"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_emotions_017"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_043"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_044"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_045"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_046"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_health_medicine_002"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_047"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_048"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_049"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_050"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_051"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_052"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_053"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_054"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_055"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_056"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_057"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_058"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_059"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_060"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_061"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_062"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_063"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_064"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_065"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_066"
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
        "lang": "tt",
        "transcription": "",
        "emoji": "✨",
        "id": "tt_starter_describing_067"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();