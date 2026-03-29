(function() {
    const data = [
    {
        "word": "бейек",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "тәпәш",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "Аҫтан өҫкә табан ҙур булған кеше йәки нәмә.",
                "examples": [
                    "Ул бик бейек."
                ]
            }
        ],
        "subtext": "бейек бина / оҙон кеше / етерлек бейек",
        "comparative": null,
        "superlative": null,
        "feminine": "бейек",
        "plural": "бейек",
        "femininePlural": "бейек"
    },
    {
        "word": "тәпәш",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "бейек",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "Бейек булмаған кеше йәки нәмә.",
                "examples": [
                    "Ул тәпәш."
                ]
            }
        ],
        "subtext": "ҡыҫҡа сәйәхәт / ҡыҫҡа сәс / бик ҡыҫҡա",
        "comparative": null,
        "superlative": null,
        "feminine": "тәпәш",
        "plural": "тәпәш",
        "femininePlural": "тәпәш"
    },
    {
        "word": "йәш",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "ҡарт",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "Аҙ ғына ваҡыт йәшәгән кеше.",
                "examples": [
                    "Ул йәш кеше."
                ]
            }
        ],
        "subtext": "young person / young professional / young at heart",
        "comparative": null,
        "superlative": null,
        "feminine": "йәш",
        "plural": "йәш",
        "femininePlural": "йәш"
    },
    {
        "word": "ҡарт",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "йәш",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "Күп ваҡыт йәшәгән кеше.",
                "examples": [
                    "Ул ҡарт."
                ]
            }
        ],
        "subtext": "old friend / old habits / very old",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡарт",
        "plural": "ҡарт",
        "femininePlural": "ҡарт"
    },
    {
        "word": "ҡояшлы",
        "level": "starter",
        "theme": "weather_A1",
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
        "subtext": "sunny day / sunny weather / sunny spell",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡояшлы",
        "plural": "ҡояшлы",
        "femininePlural": "ҡояшлы"
    },
    {
        "word": "ямғырлы",
        "level": "starter",
        "theme": "weather_A1",
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
        "subtext": "rainy day / rainy weather / rainy season",
        "comparative": null,
        "superlative": null,
        "feminine": "ямғырлы",
        "plural": "ямғырлы",
        "femininePlural": "ямғырлы"
    },
    {
        "word": "эҫе",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "һыуыҡ",
        "oppositeEmoji": "❄️",
        "subtext": "very hot, hot weather / hot weather / a hot drink / too hot",
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
        "femininePlural": "эҫе"
    },
    {
        "word": "һыуыҡ",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "эҫе",
        "oppositeEmoji": "🔥",
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold",
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
        "femininePlural": "һыуыҡ"
    },
    {
        "word": "ябай",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "үҙенсәлекле",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Ғәҙәти, үҙенсәлекле булмаған.",
                "examples": [
                    "Был ябай көн."
                ]
            }
        ],
        "subtext": "ordinary day / ordinary life / nothing ordinary",
        "comparative": null,
        "superlative": null,
        "feminine": "ябай",
        "plural": "ябай",
        "femininePlural": "ябай"
    },
    {
        "word": "осһоҙ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "ҡиммәт",
        "oppositeEmoji": "💎",
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful",
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
        "femininePlural": "осһоҙ"
    },
    {
        "word": "ҡиммәт",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "осһоҙ",
        "oppositeEmoji": "🏷️",
        "subtext": "costly, high price / very expensive / expensive taste / too expensive",
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
        "femininePlural": "ҡиммәт"
    },
    {
        "word": "яҡшы",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "насар",
        "oppositeEmoji": "👎",
        "subtext": "great, nice, pleasant / good idea / good luck / good value",
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
        "femininePlural": "яҡшы"
    },
    {
        "word": "насар",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "яҡшы",
        "oppositeEmoji": "👍",
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision",
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
        "femininePlural": "насар"
    },
    {
        "word": "ҙур",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "бәләкәй",
        "oppositeEmoji": "🐭",
        "subtext": "large, huge / a big house / a big problem / big enough",
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
        "femininePlural": "ҙур"
    },
    {
        "word": "бәләкәй",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "ҙур",
        "oppositeEmoji": "🐘",
        "subtext": "little, tiny / a small flat / a small salary / too small",
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
        "femininePlural": "бәләкәй"
    },
    {
        "word": "еңел",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "ҡыйын",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "Ҡыйын булмаған.",
                "examples": [
                    "Тест еңел."
                ]
            }
        ],
        "subtext": "easy to do / nice and easy / not easy",
        "comparative": null,
        "superlative": null,
        "feminine": "еңел",
        "plural": "еңел",
        "femininePlural": "еңел"
    },
    {
        "word": "ҡыйын",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "еңел",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Эшләүе ауыр булған.",
                "examples": [
                    "Был эш ҡыйын."
                ]
            }
        ],
        "subtext": "difficult to do / very difficult / find it difficult",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡыйын",
        "plural": "ҡыйын",
        "femininePlural": "ҡыйын"
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
        "femininePlural": "бәхетле"
    },
    {
        "word": "арыған",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
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
        "femininePlural": "арыған"
    },
    {
        "word": "тулы көн",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "тулы булмаған көн",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Тулы эш көнөндә эшләү.",
                "examples": [
                    "Уның тулы көнлөк эше бар."
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
        "word": "тулы булмаған көн",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "тулы көн",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Аҙыраҡ ваҡыт эшләү.",
                "examples": [
                    "Ул шәмбе көнө эшләй."
                ]
            }
        ],
        "subtext": "part-time job / part-time work / part-time student",
        "comparative": null,
        "superlative": null,
        "feminine": "тулы булмаған көн",
        "plural": "тулы булмаған көн",
        "femininePlural": "тулы булмаған көн"
    },
    {
        "word": "таҙа",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "бысраҡ",
        "oppositeEmoji": "💩",
        "subtext": "tidy, not dirty, keep it clean / clean clothes / a clean room / keep clean",
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
        "femininePlural": "таҙа"
    },
    {
        "word": "сәләмәт",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔",
        "subtext": "well, fit, healthy diet",
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
        "femininePlural": "сәләмәт"
    },
    {
        "word": "ауырыу",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "well",
        "oppositeEmoji": "💪",
        "subtext": "sick, feel ill",
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
        "femininePlural": "ауырыу"
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
                "text": "Интернет ҡулланып.",
                "examples": [
                    "Мин интернет аша һатып алам."
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
        "word": "яңғыҙ",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "together",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Башҡаларһыҙ.",
                "examples": [
                    "Ул яңғыҙ йәшәй."
                ]
            }
        ],
        "subtext": "live alone / travel alone / feel alone",
        "comparative": null,
        "superlative": null,
        "feminine": "яңғыҙ",
        "plural": "яңғыҙ",
        "femininePlural": "яңғыҙ"
    },
    {
        "word": "тыныс",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "стресслы",
        "oppositeEmoji": "😫",
        "subtext": "calm, feeling relaxed",
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
        "femininePlural": "тыныс"
    },
    {
        "word": "борсоулы",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "anxious",
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
        "femininePlural": "борсоулы"
    },
    {
        "word": "мәшғүл",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
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
        "femininePlural": "мәшғүл"
    },
    {
        "word": "файҙалы",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "кәрәкһеҙ",
        "oppositeEmoji": "🗑️",
        "subtext": "helpful, practical",
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
        "femininePlural": "файҙалы"
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
        "femininePlural": "мөһим"
    },
    {
        "word": "ҡыҙыл",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "dark red, bright red / red wine / red face / red light",
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
        "femininePlural": "ҡыҙыл"
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
        "femininePlural": "зәңгәр"
    },
    {
        "word": "йәшел",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "bright green, dark green / green energy / green space / bright green",
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
        "femininePlural": "йәшел"
    },
    {
        "word": "аҡ",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "pure white, snow white / white wine / off-white / bright white",
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
        "femininePlural": "аҡ"
    },
    {
        "word": "ҡара",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "jet black, dark as night / black coffee / black market / jet black",
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
        "femininePlural": "ҡара"
    },
    {
        "word": "һары",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "bright yellow, lemon yellow / yellow light / pale yellow / bright yellow",
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
        "femininePlural": "һары"
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
        "femininePlural": "буш"
    },
    {
        "word": "асыҡ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "ябыҡ",
        "oppositeEmoji": "🔒",
        "subtext": "now open, open for business / open door / open to ideas / wide open",
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
        "femininePlural": "асыҡ"
    },
    {
        "word": "ябыҡ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "асыҡ",
        "oppositeEmoji": "📖",
        "subtext": "now closed, temporarily closed / closed for lunch / closed mind / closed door",
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
        "femininePlural": "ябыҡ"
    },
    {
        "word": "ҙур",
        "level": "starter",
        "form": "adjective",
        "subtext": "a large city / a large company / a large amount",
        "definitions": [
            {
                "text": "Күләме ҙур.",
                "examples": [
                    "Был ҙур ҡала."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ҙур",
        "plural": "ҙур",
        "femininePlural": "ҙур"
    },
    {
        "word": "бәләкәй",
        "level": "starter",
        "form": "adjective",
        "subtext": "a little bit / a little money / too little",
        "definitions": [
            {
                "text": "Күләме бәләкәй.",
                "examples": [
                    "Ул бәләкәй машина йөрөтә."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "бәләкәй",
        "plural": "бәләкәй",
        "femininePlural": "бәләкәй"
    },
    {
        "word": "оҙон",
        "level": "starter",
        "form": "adjective",
        "subtext": "a long journey / a long day / a long time",
        "definitions": [
            {
                "text": "Оҙонлоғо ҙур.",
                "examples": [
                    "Уның эшкә юлы оҙон."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "оҙон",
        "plural": "оҙон",
        "femininePlural": "оҙон"
    },
    {
        "word": "бейек",
        "level": "starter",
        "form": "adjective",
        "subtext": "high price / high rent / high quality",
        "definitions": [
            {
                "text": "Бейеклеге ҙур.",
                "examples": [
                    "Был ерҙә хаҡтар бейек."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "бейек",
        "plural": "бейек",
        "femininePlural": "бейек"
    },
    {
        "word": "түбән",
        "level": "starter",
        "form": "adjective",
        "subtext": "low price / low salary / low quality",
        "definitions": [
            {
                "text": "Бейеклеге аҙ.",
                "examples": [
                    "Эш хаҡы түбән."
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
                "text": "Эсендә нәмә күп булған.",
                "examples": [
                    "Мин туҡмын."
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
                "text": "Эсендә нәмә булмаған.",
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
        "word": "йылы",
        "level": "starter",
        "form": "adjective",
        "subtext": "warm weather / a warm welcome / keep warm",
        "definitions": [
            {
                "text": "Беҙгә оҡшаған йылылыҡ.",
                "examples": [
                    "Бүлмдә йылы."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "йылы",
        "plural": "йылы",
        "femininePlural": "йылы"
    },
    {
        "word": "саф",
        "level": "starter",
        "form": "adjective",
        "subtext": "cool weather / a cool drink / stay cool",
        "definitions": [
            {
                "text": "Беҙгә оҡшаған һалҡынлыҡ.",
                "examples": [
                    "Уға саф һауа торошо ошай."
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
        "word": "йылы",
        "level": "starter",
        "form": "adjective",
        "subtext": "wet weather / wet clothes / get wet",
        "definitions": [
            {
                "text": "Һыулы.",
                "examples": [
                    "Кейемем еүеш."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "йылы",
        "plural": "йылы",
        "femininePlural": "йылы"
    },
    {
        "word": "ҡоро",
        "level": "starter",
        "form": "adjective",
        "subtext": "dry weather / dry skin / keep dry",
        "definitions": [
            {
                "text": "Һыуһыҙ.",
                "examples": [
                    "Бүлмдә ҡоро булырға тейеш."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡоро",
        "plural": "ҡоро",
        "femininePlural": "ҡоро"
    },
    {
        "word": "бысраҡ",
        "level": "starter",
        "form": "adjective",
        "subtext": "dirty hands / dirty clothes / get dirty",
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
        "femininePlural": "бысраҡ"
    },
    {
        "word": "ҡаты",
        "level": "starter",
        "form": "adjective",
        "subtext": "hard work / a hard decision / too hard",
        "definitions": [
            {
                "text": "Йомшаҡ булмаған.",
                "examples": [
                    "Урындыҡ бик ҡаты."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡаты",
        "plural": "ҡаты",
        "femininePlural": "ҡаты"
    },
    {
        "word": "йомшаҡ",
        "level": "starter",
        "form": "adjective",
        "subtext": "soft light / soft music / soft skills",
        "definitions": [
            {
                "text": "Ҡаты булмаған.",
                "examples": [
                    "Диван бик йомшаҡ."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "йомшаҡ",
        "plural": "йомшаҡ",
        "femininePlural": "йомшаҡ"
    },
    {
        "word": "ауыр",
        "level": "starter",
        "form": "adjective",
        "subtext": "heavy traffic / heavy rain / too heavy",
        "definitions": [
            {
                "text": "Ауырлығы ҙур.",
                "examples": [
                    "Сумка бик ауыр."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ауыр",
        "plural": "ауыр",
        "femininePlural": "ауыр"
    },
    {
        "word": "еңел",
        "level": "starter",
        "form": "adjective",
        "subtext": "light rain / light traffic / a light meal",
        "definitions": [
            {
                "text": "Ауыр булмаған.",
                "examples": [
                    "Минең сумкам еңел."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "еңел",
        "plural": "еңел",
        "femininePlural": "еңел"
    },
    {
        "word": "коңғырт",
        "level": "starter",
        "form": "adjective",
        "subtext": "dark brown / light brown / brown bread",
        "definitions": [
            {
                "text": "Ағас төҫөндәге.",
                "examples": [
                    "Уның күҙҙәре коңғырт."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "коңғырт",
        "plural": "коңғырт",
        "femininePlural": "коңғырт"
    },
    {
        "word": "һоро",
        "level": "starter",
        "form": "adjective",
        "subtext": "grey area / grey sky / pale grey",
        "definitions": [
            {
                "text": "Аҡ менән ҡара араһындағы төҫ.",
                "examples": [
                    "Уның сәстәре һоро."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "һоро",
        "plural": "һоро",
        "femininePlural": "һоро"
    },
    {
        "word": "ал",
        "level": "starter",
        "form": "adjective",
        "subtext": "light pink / bright pink / hot pink",
        "definitions": [
            {
                "text": "Асыҡ ҡыҙыл төҫ.",
                "examples": [
                    "Уға ал төҫ ошай."
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
        "word": "ҡыҙғылт һары",
        "level": "starter",
        "form": "adjective",
        "subtext": "bright orange / dark orange / orange light",
        "definitions": [
            {
                "text": "Апельсин төҫөндәге.",
                "examples": [
                    "Ул ҡыҙғылт һары кейем алды."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡыҙғылт һары",
        "plural": "ҡыҙғылт һары",
        "femininePlural": "ҡыҙғылт һары"
    },
    {
        "word": "бөйөк",
        "level": "starter",
        "form": "adjective",
        "subtext": "a great idea / a great opportunity / great value",
        "definitions": [
            {
                "text": "Бик яҡшы.",
                "examples": [
                    "Ул бөйөк менеджер."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "бөйөк",
        "plural": "бөйөк",
        "femininePlural": "бөйөк"
    },
    {
        "word": "яҡшы",
        "level": "starter",
        "form": "adjective",
        "subtext": "a nice day / a nice place / a nice person",
        "definitions": [
            {
                "text": "Күңелгә ятҡан.",
                "examples": [
                    "Яңы офис бик яҡшы."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "яҡшы",
        "plural": "яҡшы",
        "femininePlural": "яҡшы"
    },
    {
        "word": "иҫәпһеҙ яҡшы",
        "level": "starter",
        "form": "adjective",
        "subtext": "a wonderful opportunity / a wonderful time",
        "definitions": [
            {
                "text": "Бик ныҡ яҡшы.",
                "examples": [
                    "Уларҙың командаһы иҫәпһеҙ яҡшы ине."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "иҫәпһеҙ яҡшы",
        "plural": "иҫәпһеҙ яҡшы",
        "femininePlural": "иҫәпһеҙ яҡшы"
    },
    {
        "word": "ҡот осҡос",
        "level": "starter",
        "form": "adjective",
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "definitions": [
            {
                "text": "Бик насар.",
                "examples": [
                    "Трафик ҡот осҡос ине."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡот осҡос",
        "plural": "ҡот осҡос",
        "femininePlural": "ҡот осҡос"
    },
    {
        "word": "бик насар",
        "level": "starter",
        "form": "adjective",
        "subtext": "awful weather / awful news / simply awful",
        "definitions": [
            {
                "text": "Күңелһеҙ.",
                "examples": [
                    "Тауыш бик насар."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "бик насар",
        "plural": "бик насар",
        "femininePlural": "бик насар"
    },
    {
        "word": "ғәжәп",
        "level": "starter",
        "form": "adjective",
        "subtext": "an amazing result / an amazing offer / truly amazing",
        "definitions": [
            {
                "text": "Таң ҡалдырғыс.",
                "examples": [
                    "Ул ғәжәп презентация яһаны."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ғәжәп",
        "plural": "ғәжәп",
        "femininePlural": "ғәжәп"
    },
    {
        "word": "фантастик",
        "level": "starter",
        "form": "adjective",
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
        "definitions": [
            {
                "text": "Иҫ китмәле яҡшы.",
                "examples": [
                    "Яңы система фантастик эшләй."
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
        "word": "моңло",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel sad / a sad situation / deeply sad",
        "definitions": [
            {
                "text": "Күңелһеҙ.",
                "examples": [
                    "Ул киткәнгә моңло ине."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "моңло",
        "plural": "моңло",
        "femininePlural": "моңло"
    },
    {
        "word": "ас",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel hungry / very hungry / go hungry",
        "definitions": [
            {
                "text": "Ашағыһы килгән.",
                "examples": [
                    "Мин ас."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ас",
        "plural": "ас",
        "femininePlural": "ас"
    },
    {
        "word": "асыулы",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel angry / angry with someone / very angry",
        "definitions": [
            {
                "text": "Ныҡ асыуланған.",
                "examples": [
                    "Ул асыулы ине."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "асыулы",
        "plural": "асыулы",
        "femininePlural": "асыулы"
    },
    {
        "word": "ялыҡҡан",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel bored / bored with / easily bored",
        "definitions": [
            {
                "text": "Ҡыҙыҡһыныуы булмаған.",
                "examples": [
                    "Ул йыйылышта ялыҡты."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ялыҡҡан",
        "plural": "ялыҡҡан",
        "femininePlural": "ялыҡҡан"
    },
    {
        "word": "тулҡынланған",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel excited / excited about / very excited",
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
        "femininePlural": "тулҡынланған"
    },
    {
        "word": "ҡурҡҡан",
        "level": "starter",
        "form": "adjective",
        "subtext": "afraid of / feel afraid / deeply afraid",
        "definitions": [
            {
                "text": "Ҡурҡыу белдереү.",
                "examples": [
                    "Ул хата яһауҙан ҡурҡа."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡурҡҡан",
        "plural": "ҡурҡҡан",
        "femininePlural": "ҡурҡҡан"
    },
    {
        "word": "үкенесле",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel sorry / sorry for / sorry about",
        "definitions": [
            {
                "text": "Үкенес белдереү.",
                "examples": [
                    "Ул кеселәгәне өсөн үкенә."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "үкенесле",
        "plural": "үкенесле",
        "femininePlural": "үкенесле"
    },
    {
        "word": "дөрөҫ",
        "level": "starter",
        "form": "adjective",
        "subtext": "right answer / right time / absolutely right",
        "definitions": [
            {
                "text": "Хатаһыҙ.",
                "examples": [
                    "Был дөрөҫ офисмы?"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "дөрөҫ",
        "plural": "дөрөҫ",
        "femininePlural": "дөрөҫ"
    },
    {
        "word": "хата",
        "level": "starter",
        "form": "adjective",
        "subtext": "wrong answer / go wrong / completely wrong",
        "definitions": [
            {
                "text": "Дөрөҫ булмаған.",
                "examples": [
                    "Был хата ҡарар ине."
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
        "word": "яңы",
        "level": "starter",
        "form": "adjective",
        "subtext": "new job / brand new / completely new",
        "definitions": [
            {
                "text": "Элек булмаған.",
                "examples": [
                    "Минең яңы эшем бар."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "яңы",
        "plural": "яңы",
        "femininePlural": "яңы"
    },
    {
        "word": "башҡа",
        "level": "starter",
        "form": "adjective",
        "subtext": "completely different / very different / different from",
        "definitions": [
            {
                "text": "Оҡшамаған.",
                "examples": [
                    "Был эш башҡа төрлө."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "башҡа",
        "plural": "башҡа",
        "femininePlural": "башҡа"
    },
    {
        "word": "бер үк",
        "level": "starter",
        "form": "adjective",
        "subtext": "the same as / exactly the same / same time",
        "definitions": [
            {
                "text": "Оҡшаш.",
                "examples": [
                    "Уларҙың эш хаҡы бер үк."
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
        "word": "тиҙ",
        "level": "starter",
        "form": "adjective",
        "subtext": "fast food / fast train / very fast",
        "definitions": [
            {
                "text": "Тиҙ хәрәкәт иткән.",
                "examples": [
                    "Поезд тиҙ бара."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "тиҙ",
        "plural": "тиҙ",
        "femininePlural": "тиҙ"
    },
    {
        "word": "аҡрын",
        "level": "starter",
        "form": "adjective",
        "subtext": "slow progress / slow internet / very slow",
        "definitions": [
            {
                "text": "Тиҙ булмаған.",
                "examples": [
                    "Система аҡрын эшләй."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "аҡрын",
        "plural": "аҡрын",
        "femininePlural": "аҡрын"
    },
    {
        "word": "тыныс",
        "level": "starter",
        "form": "adjective",
        "subtext": "quiet area / keep quiet / nice and quiet",
        "definitions": [
            {
                "text": "Тауышһыҙ.",
                "examples": [
                    "Офиста тыныс."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "тыныс",
        "plural": "тыныс",
        "femininePlural": "тыныс"
    },
    {
        "word": "ҡаты",
        "level": "starter",
        "form": "adjective",
        "subtext": "loud noise / too loud / a loud voice",
        "definitions": [
            {
                "text": "Тауышлы.",
                "examples": [
                    "Офиста тауыш ҡаты."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡаты",
        "plural": "ҡаты",
        "femininePlural": "ҡаты"
    },
    {
        "word": "хәүефһеҙ",
        "level": "starter",
        "form": "adjective",
        "subtext": "safe area / safe to do / feel safe",
        "definitions": [
            {
                "text": "Ҡурҡынысһыҙ.",
                "examples": [
                    "Был район хәүефһеҙ."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "хәүефһеҙ",
        "plural": "хәүефһеҙ",
        "femininePlural": "хәүефһеҙ"
    },
    {
        "word": "ҡурҡыныс",
        "level": "starter",
        "form": "adjective",
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "definitions": [
            {
                "text": "Зыян килтереүе ихтимал.",
                "examples": [
                    "Был юл ҡурҡыныс."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡурҡыныс",
        "plural": "ҡурҡыныс",
        "femininePlural": "ҡурҡыныс"
    },
    {
        "word": "бәхетһеҙ",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Шат булмаған.",
                "examples": [
                    "Ул бәхетһеҙ."
                ]
            }
        ],
        "subtext": "feel unhappy / very unhappy / unhappy about",
        "comparative": null,
        "superlative": null,
        "feminine": "бәхетһеҙ",
        "plural": "бәхетһеҙ",
        "femininePlural": "бәхетһеҙ"
    },
    {
        "word": "тулҡынланған",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Борсоулы.",
                "examples": [
                    "Ул интервью алдынан тулҡынланды."
                ]
            }
        ],
        "subtext": "feel nervous / nervous about / very nervous",
        "comparative": null,
        "superlative": null,
        "feminine": "тулҡынланған",
        "plural": "тулҡынланған",
        "femininePlural": "тулҡынланған"
    },
    {
        "word": "стресслы",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ҡыҫылыу кисергән.",
                "examples": [
                    "Ул стресс кисерә."
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
        "word": "үҙенә ышанған",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Үҙ көсөнә ышанған.",
                "examples": [
                    "Ул үҙенә ышана."
                ]
            }
        ],
        "subtext": "feel confident / self-confident / very confident",
        "comparative": null,
        "superlative": null,
        "feminine": "үҙенә ышанған",
        "plural": "үҙенә ышанған",
        "femininePlural": "үҙенә ышанған"
    },
    {
        "word": "ғорур",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Уңыш өсөн шатланған.",
                "examples": [
                    "Ул ғорур."
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of",
        "comparative": null,
        "superlative": null,
        "feminine": "ғорур",
        "plural": "ғорур",
        "femininePlural": "ғорур"
    },
    {
        "word": "ҡурҡҡан",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ҡурҡыу хисе.",
                "examples": [
                    "Ул ҡурҡҡан ине."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡурҡҡан",
        "plural": "ҡурҡҡан",
        "femininePlural": "ҡурҡҡан"
    },
    {
        "word": "ғәжәпләнгән",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көтөлмәгән нәмәгә таң ҡалыу.",
                "examples": [
                    "Ул ғәжәпләнде."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "comparative": null,
        "superlative": null,
        "feminine": "ғәжәпләнгән",
        "plural": "ғәжәпләнгән",
        "femininePlural": "ғәжәпләнгән"
    },
    {
        "word": "күңеле ҡайтҡан",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Өмөтө аҡланмаған.",
                "examples": [
                    "Уның күңеле ҡайтты."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "comparative": null,
        "superlative": null,
        "feminine": "күңеле ҡайтҡан",
        "plural": "күңеле ҡайтҡан",
        "femininePlural": "күңеле ҡайтҡан"
    },
    {
        "word": "матур",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күҙгә яҡшы күренгән.",
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
                "text": "Яҡшы күренешле.",
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
        "word": "көслө",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көсө күп булған.",
                "examples": [
                    "Ул көслө етәксе."
                ]
            }
        ],
        "subtext": "strong coffee / strong opinion / very strong",
        "comparative": null,
        "superlative": null,
        "feminine": "көслө",
        "plural": "көслө",
        "femininePlural": "көслө"
    },
    {
        "word": "көсһөҙ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көсө аҙ булған.",
                "examples": [
                    "Сигнал көсһөҙ."
                ]
            }
        ],
        "subtext": "weak connection / a weak argument / very weak",
        "comparative": null,
        "superlative": null,
        "feminine": "көсһөҙ",
        "plural": "көсһөҙ",
        "femininePlural": "көсһөҙ"
    },
    {
        "word": "таҙа",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Физик яҡтан яҡшы.",
                "examples": [
                    "Ул үҙен таҙа тота."
                ]
            }
        ],
        "subtext": "physically fit / stay fit / keep fit",
        "comparative": null,
        "superlative": null,
        "feminine": "таҙа",
        "plural": "таҙа",
        "femininePlural": "таҙа"
    },
    {
        "word": "бик яҡшы",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Иң юғары сифатлы.",
                "examples": [
                    "Ул бик яҡшы баһа алды."
                ]
            }
        ],
        "subtext": "excellent work / excellent results / absolutely excellent",
        "comparative": null,
        "superlative": null,
        "feminine": "бик яҡшы",
        "plural": "бик яҡшы",
        "femininePlural": "бик яҡшы"
    },
    {
        "word": "камил",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хатаһыҙ.",
                "examples": [
                    "Ваҡыт камил ине."
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
        "word": "кәрәкһеҙ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Файҙаһы булмаған.",
                "examples": [
                    "Был программа кәрәкһеҙ."
                ]
            }
        ],
        "subtext": "completely useless / prove useless / a useless idea",
        "comparative": null,
        "superlative": null,
        "feminine": "кәрәкһеҙ",
        "plural": "кәрәкһеҙ",
        "femininePlural": "кәрәкһеҙ"
    },
    {
        "word": "дөрөҫ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хатаһыҙ.",
                "examples": [
                    "Дөрөҫлөгөн тикшерегеҙ."
                ]
            }
        ],
        "subtext": "correct answer / the correct way / completely correct",
        "comparative": null,
        "superlative": null,
        "feminine": "дөрөҫ",
        "plural": "дөрөҫ",
        "femininePlural": "дөрөҫ"
    },
    {
        "word": "ҡыҙыҡлы",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Иғтибарҙы йәлеп иткән.",
                "examples": [
                    "Тәҡдим ҡыҙыҡлы."
                ]
            }
        ],
        "subtext": "find interesting / very interesting / an interesting idea",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡыҙыҡлы",
        "plural": "ҡыҙыҡлы",
        "femininePlural": "ҡыҙыҡлы"
    },
    {
        "word": "ҡыҙыҡһыҙ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күңелһеҙ.",
                "examples": [
                    "Йыйылыш ҡыҙыҡһыҙ ине."
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": null,
        "superlative": null,
        "feminine": "ҡыҙыҡһыҙ",
        "plural": "ҡыҙыҡһыҙ",
        "femininePlural": "ҡыҙыҡһыҙ"
    },
    {
        "word": "кәрәкле",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Мохтажлыҡ булған.",
                "examples": [
                    "Интернет кәрәкле."
                ]
            }
        ],
        "subtext": "absolutely necessary / if necessary / necessary to do",
        "comparative": null,
        "superlative": null,
        "feminine": "кәрәкле",
        "plural": "кәрәкле",
        "femininePlural": "кәрәкле"
    },
    {
        "word": "мөмкин",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Булдыра алырлыҡ.",
                "examples": [
                    "Был мөмкинме?"
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
                "text": "Булдыра алмаҫлыҡ.",
                "examples": [
                    "Был мөмкин түгел."
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
        "word": "үҙенсәлекле",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ғәҙәти булмаған.",
                "examples": [
                    "Уның үҙенсәлекле таланты бар."
                ]
            }
        ],
        "subtext": "a special offer / special occasion / very special",
        "comparative": null,
        "superlative": null,
        "feminine": "үҙенсәлекле",
        "plural": "үҙенсәлекле",
        "femininePlural": "үҙенсәлекле"
    },
    {
        "word": "популяр",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күптәргә оҡшаған.",
                "examples": [
                    "Был кафе популяр."
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
        "word": "оҡшаш",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бер-береһенә яҡын.",
                "examples": [
                    "Улар оҡшаш."
                ]
            }
        ],
        "subtext": "very similar / similar to / similar results",
        "comparative": null,
        "superlative": null,
        "feminine": "оҡшаш",
        "plural": "оҡшаш",
        "femininePlural": "оҡшаш"
    },
    {
        "word": "дуҫтарса",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Яҡшы мөнәсәбәтле.",
                "examples": [
                    "Менеджер дуҫтарса."
                ]
            }
        ],
        "subtext": "very friendly / a friendly face / friendly atmosphere",
        "comparative": null,
        "superlative": null,
        "feminine": "дуҫтарса",
        "plural": "дуҫтарса",
        "femininePlural": "дуҫтарса"
    },
    {
        "word": "миһырбанлы",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Яҡшы күңелле.",
                "examples": [
                    "Ул миһырбанлы."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person",
        "comparative": null,
        "superlative": null,
        "feminine": "миһырбанлы",
        "plural": "миһырбанлы",
        "femininePlural": "миһырбанлы"
    },
    {
        "word": "көлкөлө",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көлдөрә торған.",
                "examples": [
                    "Ул көлкөлө һөйләй."
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny",
        "comparative": null,
        "superlative": null,
        "feminine": "көлкөлө",
        "plural": "көлкөлө",
        "femininePlural": "көлкөлө"
    },
    {
        "word": "аҡыллы",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тиҙ аңлаусан.",
                "examples": [
                    "Ул аҡыллы."
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough",
        "comparative": null,
        "superlative": null,
        "feminine": "аҡыллы",
        "plural": "аҡыллы",
        "femininePlural": "аҡыллы"
    },
    {
        "word": "әҙәпле",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хөрмәт итә белгән.",
                "examples": [
                    "Ул әҙәпле."
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough",
        "comparative": null,
        "superlative": null,
        "feminine": "әҙәпле",
        "plural": "әҙәпле",
        "femininePlural": "әҙәпле"
    },
    {
        "word": "тупаҫ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Әҙәпһеҙ.",
                "examples": [
                    "Был хат тупаҫ ине."
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude",
        "comparative": null,
        "superlative": null,
        "feminine": "тупаҫ",
        "plural": "тупаҫ",
        "femininePlural": "тупаҫ"
    },
    {
        "word": "ялҡау",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Эшләргә теләмәгән.",
                "examples": [
                    "Ул ялҡау."
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy",
        "comparative": null,
        "superlative": null,
        "feminine": "ялҡау",
        "plural": "ялҡау",
        "femininePlural": "ялҡау"
    },
    {
        "word": "намыҫлы",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Дөрөҫ һөйләгән.",
                "examples": [
                    "Ул намыҫлы."
                ]
            }
        ],
        "subtext": "very honest / brutally honest / completely honest",
        "comparative": null,
        "superlative": null,
        "feminine": "намыҫлы",
        "plural": "намыҫлы",
        "femininePlural": "намыҫлы"
    },
    {
        "word": "шау-шыулы",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тауышлы.",
                "examples": [
                    "Офис шау-шыулы."
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy",
        "comparative": null,
        "superlative": null,
        "feminine": "шау-шыулы",
        "plural": "шау-шыулы",
        "femininePlural": "шау-шыулы"
    }
];
    const lang = "ba";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();