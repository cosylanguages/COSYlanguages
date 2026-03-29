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
        "subtext": "биек бина / озын кеше / җитәрлек биек",
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
        "subtext": "кыска сәяхәт / кыска чәч / бик кыска",
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
        "subtext": "young person / young professional / young at heart",
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
        "subtext": "old friend / old habits / very old",
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
        "subtext": "sunny day / sunny weather / sunny spell",
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
        "subtext": "rainy day / rainy weather / rainy season",
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
        "subtext": "very hot, hot weather / hot weather / a hot drink / too hot",
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
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold",
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
        "subtext": "ordinary day / ordinary life / nothing ordinary",
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
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful",
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
        "subtext": "costly, high price / very expensive / expensive taste / too expensive",
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
        "subtext": "great, nice, pleasant / good idea / good luck / good value",
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
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision",
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
        "subtext": "large, huge / a big house / a big problem / big enough",
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
        "subtext": "little, tiny / a small flat / a small salary / too small",
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
        "subtext": "easy to do / nice and easy / not easy",
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
        "subtext": "difficult to do / very difficult / find it difficult",
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
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day",
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
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
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
        "subtext": "full-time job / full-time work / full-time employee",
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
        "subtext": "part-time job / part-time work / part-time student",
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
        "subtext": "tidy, not dirty, keep it clean / clean clothes / a clean room / keep clean",
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
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔",
        "subtext": "well, fit, healthy diet",
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
        "opposite": "well",
        "oppositeEmoji": "💪",
        "subtext": "sick, feel ill",
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
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Интернет кулланып.",
                "examples": [
                    "Мин интернет аша сатып алам."
                ]
            }
        ],
        "subtext": "online shopping / online course / stay online",
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
        "opposite": "together",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Башкаларсыз.",
                "examples": [
                    "Ул ялгыз яши."
                ]
            }
        ],
        "subtext": "live alone / travel alone / feel alone",
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
        "subtext": "calm, feeling relaxed",
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
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "anxious",
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
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
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
        "subtext": "helpful, practical",
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
        "subtext": "essential / important meeting / very important / most important",
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
        "subtext": "dark red, bright red / red wine / red face / red light",
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
        "subtext": "light blue, dark blue / dark blue / light blue / blue sky",
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
        "subtext": "bright green, dark green / green energy / green space / bright green",
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
        "subtext": "pure white, snow white / white wine / off-white / bright white",
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
        "subtext": "jet black, dark as night / black coffee / black market / jet black",
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
        "subtext": "bright yellow, lemon yellow / yellow light / pale yellow / bright yellow",
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
        "subtext": "free of charge, free gift / free time / free of charge / free to do",
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
        "subtext": "now open, open for business / open door / open to ideas / wide open",
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
        "subtext": "now closed, temporarily closed / closed for lunch / closed mind / closed door",
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
        "subtext": "a large city / a large company / a large amount",
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
        "subtext": "a little bit / a little money / too little",
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
        "subtext": "a long journey / a long day / a long time",
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
        "subtext": "high price / high rent / high quality",
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
        "subtext": "low price / low salary / low quality",
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
        "subtext": "full time / a full day / full of people",
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
        "subtext": "an empty flat / an empty room / nearly empty",
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
        "subtext": "warm weather / a warm welcome / keep warm",
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
        "subtext": "cool weather / a cool drink / stay cool",
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
        "subtext": "wet weather / wet clothes / get wet",
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
        "subtext": "dry weather / dry skin / keep dry",
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
        "form": "adjective",
        "subtext": "dirty hands / dirty clothes / get dirty",
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
        "subtext": "hard work / a hard decision / too hard",
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
        "subtext": "soft light / soft music / soft skills",
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
        "subtext": "heavy traffic / heavy rain / too heavy",
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
        "subtext": "light rain / light traffic / a light meal",
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
        "subtext": "dark brown / light brown / brown bread",
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
        "subtext": "grey area / grey sky / pale grey",
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
        "subtext": "light pink / bright pink / hot pink",
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
        "subtext": "bright orange / dark orange / orange light",
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
        "subtext": "a great idea / a great opportunity / great value",
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
        "subtext": "a nice day / a nice place / a nice person",
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
        "subtext": "a wonderful opportunity / a wonderful time",
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
        "subtext": "terrible weather / a terrible mistake / terrible news",
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
        "subtext": "awful weather / awful news / simply awful",
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
        "subtext": "an amazing result / an amazing offer / truly amazing",
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
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
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
        "subtext": "feel sad / a sad situation / deeply sad",
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
        "subtext": "feel hungry / very hungry / go hungry",
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
        "subtext": "feel angry / angry with someone / very angry",
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
        "subtext": "feel bored / bored with / easily bored",
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
        "form": "adjective",
        "subtext": "feel excited / excited about / very excited",
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
        "subtext": "afraid of / feel afraid / deeply afraid",
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
        "subtext": "feel sorry / sorry for / sorry about",
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
        "subtext": "right answer / right time / absolutely right",
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
        "subtext": "wrong answer / go wrong / completely wrong",
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
        "subtext": "new job / brand new / completely new",
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
        "subtext": "completely different / very different / different from",
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
        "subtext": "the same as / exactly the same / same time",
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
        "subtext": "fast food / fast train / very fast",
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
        "subtext": "slow progress / slow internet / very slow",
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
        "subtext": "quiet area / keep quiet / nice and quiet",
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
        "subtext": "loud noise / too loud / a loud voice",
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
        "subtext": "safe area / safe to do / feel safe",
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
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
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
        "subtext": "feel unhappy / very unhappy / unhappy about",
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
        "subtext": "feel nervous / nervous about / very nervous",
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
        "subtext": "feel stressed / very stressed / stressed out",
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
        "subtext": "feel confident / self-confident / very confident",
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
        "subtext": "feel proud / very proud / proud of",
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
        "subtext": "feel scared / scared of / very scared",
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
        "subtext": "feel surprised / very surprised / pleasantly surprised",
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
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
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
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
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
        "subtext": "pretty good / a pretty place / quite pretty",
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
        "subtext": "strong coffee / strong opinion / very strong",
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
        "subtext": "weak connection / a weak argument / very weak",
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
        "subtext": "physically fit / stay fit / keep fit",
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
        "subtext": "excellent work / excellent results / absolutely excellent",
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
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
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
        "subtext": "completely useless / prove useless / a useless idea",
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
        "subtext": "correct answer / the correct way / completely correct",
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
        "subtext": "find interesting / very interesting / an interesting idea",
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
        "subtext": "very boring / a boring meeting / find boring",
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
        "subtext": "absolutely necessary / if necessary / necessary to do",
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
        "subtext": "as soon as possible / it is possible / make possible",
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
        "subtext": "virtually impossible / make impossible / nearly impossible",
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
        "subtext": "a special offer / special occasion / very special",
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
        "subtext": "very popular / popular choice / most popular",
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
        "subtext": "very similar / similar to / similar results",
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
        "subtext": "very friendly / a friendly face / friendly atmosphere",
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
        "subtext": "very kind / kind of you / a kind person",
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
        "subtext": "very funny / funny story / find funny",
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
        "subtext": "very clever / a clever idea / clever enough",
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
        "subtext": "very polite / polite request / polite enough",
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
        "subtext": "very rude / incredibly rude / deliberately rude",
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
        "subtext": "very lazy / a lazy approach / too lazy",
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
        "subtext": "very honest / brutally honest / completely honest",
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
        "subtext": "very noisy / noisy environment / too noisy",
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