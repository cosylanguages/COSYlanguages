(function() {
    const data = [
    {
        "word": "биек",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "тәпәш",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "Астан өскә таба зур булган кеше яки нәрсә.",
                "examples": [
                    "Ул бик биек."
                ]
            }
        ],
        "subtext": "биек бина / җитәрлек биек",
        "synonyms": ["озын кеше"],
        "comparative": null,
        "superlative": null,
        "feminine": "биек",
        "plural": "биек",
        "femininePlural": "биек"
    },
    {
        "word": "тәпәш",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "биек",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "Биек булмаган кеше яки нәрсә.",
                "examples": [
                    "Ул тәпәш."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["кыска сәяхәт", "кыска чәч", "бик кыска"],
        "comparative": null,
        "superlative": null,
        "feminine": "тәпәш",
        "plural": "тәпәш",
        "femininePlural": "тәпәш"
    },
    {
        "word": "яшь",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "карт",
        "oppositeEmoji": "👴",
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
        "femininePlural": "яшь"
    },
    {
        "word": "карт",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "яшь",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "Күп вакыт яшәгән кеше.",
                "examples": [
                    "Ул карт."
                ]
            }
        ],
        "subtext": "карт дус / бик карт",
        "synonyms": ["иске гадәтләр"],
        "comparative": null,
        "superlative": null,
        "feminine": "карт",
        "plural": "карт",
        "femininePlural": "карт"
    },
    {
        "word": "кояшлы",
        "level": "starter",
        "theme": "weather_A1",
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
        "femininePlural": "кояшлы"
    },
    {
        "word": "яңгырлы",
        "level": "starter",
        "theme": "weather_A1",
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
        "femininePlural": "яңгырлы"
    },
    {
        "word": "эссе",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "суык",
        "oppositeEmoji": "❄️",
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
        "femininePlural": "эссе"
    },
    {
        "word": "суык",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "эссе",
        "oppositeEmoji": "🔥",
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
        "femininePlural": "суык"
    },
    {
        "word": "гади",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "үзенчәлекле",
        "oppositeEmoji": "✨",
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
        "femininePlural": "гади"
    },
    {
        "word": "арзан",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "кыйммәт",
        "oppositeEmoji": "💎",
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
        "femininePlural": "арзан"
    },
    {
        "word": "кыйммәт",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "арзан",
        "oppositeEmoji": "🏷️",
        "subtext": "бик кыйммәт",
        "synonyms": ["кыйммәтле"],
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
        "femininePlural": "кыйммәт"
    },
    {
        "word": "яхшы",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "начар",
        "oppositeEmoji": "👎",
        "subtext": "яхшы идеյա",
        "synonyms": ["уңышлар"],
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
        "femininePlural": "яхшы"
    },
    {
        "word": "начар",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "яхшы",
        "oppositeEmoji": "👍",
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
        "femininePlural": "начар"
    },
    {
        "word": "зур",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "кечкенә",
        "oppositeEmoji": "🐭",
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
        "femininePlural": "зур"
    },
    {
        "word": "кечкенә",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "зур",
        "oppositeEmoji": "🐘",
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
        "femininePlural": "кечкенә"
    },
    {
        "word": "җиңел",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "кыйын",
        "oppositeEmoji": "❌",
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
        "femininePlural": "җиңел"
    },
    {
        "word": "кыйын",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "җиңел",
        "oppositeEmoji": "✅",
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
        "femininePlural": "кыйын"
    },
    {
        "word": "бәхетле",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "бәхетле көн",
        "synonyms": ["шат"],
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
        "femininePlural": "бәхетле"
    },
    {
        "word": "арыган",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "бик арыган",
        "synonyms": ["арыдым"],
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
        "femininePlural": "арыган"
    },
    {
        "word": "тулы көн",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "тулы булмаган көн",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Тулы эш көнендә эшләү.",
                "examples": [
                    "Аның тулы көнлек эше бар."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["тулы эш көне"],
        "comparative": null,
        "superlative": null,
        "feminine": "тулы көн",
        "plural": "тулы көн",
        "femininePlural": "тулы көн"
    },
    {
        "word": "тулы булмаган көн",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "тулы көн",
        "oppositeEmoji": "⏰",
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
        "femininePlural": "тулы булмаган көн"
    },
    {
        "word": "таза",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "бысрак",
        "oppositeEmoji": "💩",
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
        "femininePlural": "таза"
    },
    {
        "word": "сәламәт",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "начар ризык",
        "oppositeEmoji": "🍔",
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
        "femininePlural": "сәламәт"
    },
    {
        "word": "авыру",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "яхшы",
        "oppositeEmoji": "💪",
        "subtext": "",
        "synonyms": ["авырыйм"],
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
        "femininePlural": "авыру"
    },
    {
        "word": "онлайн",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "оффлайн",
        "oppositeEmoji": "📴",
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
        "femininePlural": "онлайн"
    },
    {
        "word": "ялгыз",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "бергә",
        "oppositeEmoji": "👫",
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
        "femininePlural": "ялгыз"
    },
    {
        "word": "тыныч",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "стресслы",
        "oppositeEmoji": "😫",
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
        "femininePlural": "тыныч"
    },
    {
        "word": "борчулы",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "тыныч",
        "oppositeEmoji": "😌",
        "subtext": "",
        "synonyms": ["борчылу"],
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
        "femininePlural": "борчулы"
    },
    {
        "word": "мәшгуль",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "femininePlural": "мәшгуль"
    },
    {
        "word": "файдалы",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "кирәксез",
        "oppositeEmoji": "🗑️",
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
        "femininePlural": "файдалы"
    },
    {
        "word": "мөһим",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "мөһим"
    },
    {
        "word": "кызыл",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "кызыл"
    },
    {
        "word": "зәңгәр",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "зәңгәр"
    },
    {
        "word": "яшел",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "яшел"
    },
    {
        "word": "ак",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "ак"
    },
    {
        "word": "кара",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "кара"
    },
    {
        "word": "сары",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "сары"
    },
    {
        "word": "буш",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "femininePlural": "буш"
    },
    {
        "word": "ачык",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "ябык",
        "oppositeEmoji": "🔒",
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
        "femininePlural": "ачык"
    },
    {
        "word": "ябык",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "ачык",
        "oppositeEmoji": "📖",
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
        "femininePlural": "ябык"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "зур",
        "plural": "зур",
        "femininePlural": "зур"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "кечкенә",
        "plural": "кечкенә",
        "femininePlural": "кечкенә"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "озын",
        "plural": "озын",
        "femininePlural": "озын"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "биек",
        "plural": "биек",
        "femininePlural": "биек"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "түбән",
        "plural": "түбән",
        "femininePlural": "түбән"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "тулы",
        "plural": "тулы",
        "femininePlural": "тулы"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "буш",
        "plural": "буш",
        "femininePlural": "буш"
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
        "theme": "weather_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "җылы",
        "plural": "җылы",
        "femininePlural": "җылы"
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
        "theme": "weather_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "саф",
        "plural": "саф",
        "femininePlural": "саф"
    },
    {
        "word": "җылы",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["еוועш һава торышы"],
        "definitions": [
            {
                "text": "Сулы.",
                "examples": [
                    "Кеемем евеш."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "җылы",
        "plural": "җылы",
        "femininePlural": "җылы"
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
        "theme": "weather_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "коры",
        "plural": "коры",
        "femininePlural": "коры"
    },
    {
        "word": "бысрак",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "femininePlural": "бысрак"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "каты",
        "plural": "каты",
        "femininePlural": "каты"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "йомшак",
        "plural": "йомшак",
        "femininePlural": "йомшак"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "авыр",
        "plural": "авыр",
        "femininePlural": "авыр"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "җиңел",
        "plural": "җиңел",
        "femininePlural": "җиңел"
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
        "theme": "colours_patterns_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "коңгырт",
        "plural": "коңгырт",
        "femininePlural": "коңгырт"
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
        "theme": "colours_patterns_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "соры",
        "plural": "соры",
        "femininePlural": "соры"
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
        "theme": "colours_patterns_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ал",
        "plural": "ал",
        "femininePlural": "ал"
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
        "theme": "colours_patterns_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "кызгылт сары",
        "plural": "кызгылт сары",
        "femininePlural": "кызгылт сары"
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
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "бөек",
        "plural": "бөек",
        "femininePlural": "бөек"
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
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "яхшы",
        "plural": "яхшы",
        "femininePlural": "яхшы"
    },
    {
        "word": "искиткеч яхшы",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["искиткеч вакыт"],
        "definitions": [
            {
                "text": "Бик нык яхшы.",
                "examples": [
                    "Аларның командасы искиткеч яхшы иде."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "искиткеч яхшы",
        "plural": "искиткеч яхшы",
        "femininePlural": "искиткеч яхшы"
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
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "куркыныч",
        "plural": "куркыныч",
        "femininePlural": "куркыныч"
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
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "бик начар",
        "plural": "бик начар",
        "femininePlural": "бик начар"
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
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "гаҗәп",
        "plural": "гаҗәп",
        "femininePlural": "гаҗәп"
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
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "фантастик",
        "plural": "фантастик",
        "femininePlural": "фантастик"
    },
    {
        "word": "моңлы",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["күңелсез хәл"],
        "definitions": [
            {
                "text": "Күңелсез.",
                "examples": [
                    "Ул киткәнгә моңлы иде."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "моңлы",
        "plural": "моңлы",
        "femininePlural": "моңлы"
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
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ач",
        "plural": "ач",
        "femininePlural": "ач"
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
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ачулы",
        "plural": "ачулы",
        "femininePlural": "ачулы"
    },
    {
        "word": "ялыккан",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["ялыктыргыч"],
        "definitions": [
            {
                "text": "Кызыксынуы булмаган.",
                "examples": [
                    "Ул җыелышта ялыкты."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ялыккан",
        "plural": "ялыккан",
        "femininePlural": "ялыккан"
    },
    {
        "word": "дулкынланган",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["дулкынлану"],
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
        "femininePlural": "дулкынланган"
    },
    {
        "word": "курыккан",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["курку"],
        "definitions": [
            {
                "text": "Курку белдерү.",
                "examples": [
                    "Ул хата ясаудан курка."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "курыккан",
        "plural": "курыккан",
        "femininePlural": "курыккан"
    },
    {
        "word": "үкенечле",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["үкенү"],
        "definitions": [
            {
                "text": "Үкенеч белдерү.",
                "examples": [
                    "Ул эшләгәне өчен үкенә."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "үкенечле",
        "plural": "үкенечле",
        "femininePlural": "үкенечле"
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
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "дөрес",
        "plural": "дөрес",
        "femininePlural": "дөрес"
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
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "хата",
        "plural": "хата",
        "femininePlural": "хата"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "яңа",
        "plural": "яңа",
        "femininePlural": "яңа"
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
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "башка",
        "plural": "башка",
        "femininePlural": "башка"
    },
    {
        "word": "бер үк",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["нәкъ шундый ук"],
        "definitions": [
            {
                "text": "Ошаш.",
                "examples": [
                    "Аларның эш хакы бер үк."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "бер үк",
        "plural": "бер үк",
        "femininePlural": "бер үк"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "тиз",
        "plural": "тиз",
        "femininePlural": "тиз"
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
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "акрын",
        "plural": "акрын",
        "femininePlural": "акрын"
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
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "тыныч",
        "plural": "тыныч",
        "femininePlural": "тыныч"
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
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "каты",
        "plural": "каты",
        "femininePlural": "каты"
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
        "theme": "local_places_services_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "куркынычсыз",
        "plural": "куркынычсыз",
        "femininePlural": "куркынычсыз"
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
        "theme": "local_places_services_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "куркыныч",
        "plural": "куркыныч",
        "femininePlural": "куркыныч"
    },
    {
        "word": "бәхетсез",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "femininePlural": "бәхетсез"
    },
    {
        "word": "дулкынланган",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "synonyms": ["дулкынлану"],
        "comparative": null,
        "superlative": null,
        "feminine": "дулкынланган",
        "plural": "дулкынланган",
        "femininePlural": "дулкынланган"
    },
    {
        "word": "стресслы",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "synonyms": ["стресс"],
        "comparative": null,
        "superlative": null,
        "feminine": "стресслы",
        "plural": "стресслы",
        "femininePlural": "стресслы"
    },
    {
        "word": "үзенә ышанган",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "synonyms": ["үзеңә ышаныч"],
        "comparative": null,
        "superlative": null,
        "feminine": "үзенә ышанган",
        "plural": "үзенә ышанган",
        "femininePlural": "үзенә ышанган"
    },
    {
        "word": "горур",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "synonyms": ["горурлык"],
        "comparative": null,
        "superlative": null,
        "feminine": "горур",
        "plural": "горур",
        "femininePlural": "горур"
    },
    {
        "word": "курыккан",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "synonyms": ["куркыту"],
        "comparative": null,
        "superlative": null,
        "feminine": "курыккан",
        "plural": "курыккан",
        "femininePlural": "курыккан"
    },
    {
        "word": "гаҗәпләнгән",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "synonyms": ["гаҗәпләнү"],
        "comparative": null,
        "superlative": null,
        "feminine": "гаҗәпләнгән",
        "plural": "гаҗәпләнгән",
        "femininePlural": "гаҗәпләнгән"
    },
    {
        "word": "күңеле кайткан",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "synonyms": ["күңел кайту"],
        "comparative": null,
        "superlative": null,
        "feminine": "күңеле кайткан",
        "plural": "күңеле кайткан",
        "femininePlural": "күңеле кайткан"
    },
    {
        "word": "матур",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "матур"
    },
    {
        "word": "күркәм",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "күркәм"
    },
    {
        "word": "көчле",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "көчле"
    },
    {
        "word": "көчсез",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "көчсез"
    },
    {
        "word": "таза",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
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
        "synonyms": ["яхшы формада"],
        "comparative": null,
        "superlative": null,
        "feminine": "таза",
        "plural": "таза",
        "femininePlural": "таза"
    },
    {
        "word": "бик яхшы",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "бик яхшы"
    },
    {
        "word": "камил",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "камил"
    },
    {
        "word": "кирәксез",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "кирәксез"
    },
    {
        "word": "дөрес",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "дөрес"
    },
    {
        "word": "кызыклы",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "кызыклы"
    },
    {
        "word": "кызыксыз",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "кызыксыз"
    },
    {
        "word": "кирәкле",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "кирәкле"
    },
    {
        "word": "мөмкин",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "мөмкин"
    },
    {
        "word": "мөмкин түгел",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "мөмкин түгел"
    },
    {
        "word": "үзенчәлекле",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "үзенчәлекле"
    },
    {
        "word": "популяр",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "популяр"
    },
    {
        "word": "ошаш",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "ошаш"
    },
    {
        "word": "дусларча",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "дусларча"
    },
    {
        "word": "мәрхәмәтле",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "мәрхәмәтле"
    },
    {
        "word": "көлкеле",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "көлкеле"
    },
    {
        "word": "акыллы",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "акыллы"
    },
    {
        "word": "әдәпле",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "әдәпле"
    },
    {
        "word": "тупас",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "тупас"
    },
    {
        "word": "ялкау",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "ялкау"
    },
    {
        "word": "намуслы",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "намуслы"
    },
    {
        "word": "шау-шулы",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": "шау-шулы"
    }
];
    const lang = "tt";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();