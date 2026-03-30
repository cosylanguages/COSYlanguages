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
        "subtext": "йәш кеше / йәш белгес / күңеле менән йәш",
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
        "subtext": "ҡарт дуҫ / иҫке ғәҙәттәр / бик ҡарт",
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
        "subtext": "ҡояшлы көн / ҡояшлы һауа торошо",
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
        "subtext": "ямғырлы көн / ямғырлы һауа торошо",
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
        "subtext": "ябай көн / ябай тормош",
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
        "subtext": "ҡиммәтле / бик ҡиммәտ",
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
        "subtext": "яҡшы идея / уңыштар",
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
        "subtext": "еңел эш / бик еңел",
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
        "subtext": "ҡыйын эш / бик ҡыйын",
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
        "subtext": "бәхетле көн / шат",
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
        "subtext": "бик арыған / арыным",
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
        "subtext": "тулы эш көнө",
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
        "subtext": "тулы булмаған эш көнө",
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
        "femininePlural": "таҙа"
    },
    {
        "word": "сәләмәт",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "насар ризыҡ",
        "oppositeEmoji": "🍔",
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
        "femininePlural": "сәләмәт"
    },
    {
        "word": "ауырыу",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "яҡшы",
        "oppositeEmoji": "💪",
        "subtext": "ауырыйым",
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
        "opposite": "оффлайн",
        "oppositeEmoji": "📴",
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
        "femininePlural": "онлайн"
    },
    {
        "word": "яңғыҙ",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "бергә",
        "oppositeEmoji": "👫",
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
        "femininePlural": "тыныс"
    },
    {
        "word": "борсоулы",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "тыныс",
        "oppositeEmoji": "😌",
        "subtext": "борсолоу",
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
        "femininePlural": "файҙалы"
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
        "femininePlural": "ҡыҙыл"
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
        "femininePlural": "йәшел"
    },
    {
        "word": "аҡ",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "аҡ"
    },
    {
        "word": "ҡара",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "ҡара"
    },
    {
        "word": "һары",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "һары"
    },
    {
        "word": "буш",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "femininePlural": "ябыҡ"
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
        "subtext": "бәләкәй генә",
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
        "subtext": "оҙон юл",
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
        "subtext": "бейек бәйә",
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
        "subtext": "түбән бәйә",
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
        "subtext": "тулы бүлмә",
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
        "subtext": "буш бүлмә",
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
        "subtext": "йылы һауа торошо",
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
        "subtext": "саф һауа",
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
        "subtext": "еүеш һауа торошо",
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
        "subtext": "ҡоро һауа",
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
        "theme": "household_tasks_A1",
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
        "femininePlural": "бысраҡ"
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
        "subtext": "йомшаҡ музыка",
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
        "subtext": "ауыр йөк",
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
        "subtext": "еңел ризыҡ",
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
        "subtext": "коңғырт төҫ",
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
        "subtext": "һоро төҫ",
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
        "subtext": "ал төҫ",
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
        "subtext": "ҡыҙғылт һары төҫ",
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
        "subtext": "бөйөк фекер",
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
        "subtext": "яҡшы көн",
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
        "subtext": "иҫәпһеҙ ваҡыт",
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
        "subtext": "ҡурҡыныс хата",
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
        "subtext": "бик насар һауа торошо",
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
        "subtext": "ғәжәп нәтижә",
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
        "subtext": "фантастик хәбәрҙәр",
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
        "subtext": "күңелһеҙ хәл",
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
        "subtext": "бик ас",
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
        "subtext": "бик асыулы",
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
        "subtext": "ялыҡтырғыс",
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
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "subtext": "тулҡынланыу",
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
        "subtext": "ҡурҡыу",
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
        "subtext": "үкенеү",
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
        "subtext": "дөрөҫ яуап",
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
        "subtext": "хата яуап",
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
        "subtext": "яңы эш",
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
        "subtext": "бөтөнләй башҡа",
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
        "subtext": "нәҡ шундай уҡ",
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
        "subtext": "тиҙ ризыҡ",
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
        "subtext": "акрын интернет",
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
        "subtext": "тыныс урын",
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
        "subtext": "ҡаты тавыш",
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
        "subtext": "хәүефһеҙ урын",
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
        "subtext": "ҡурҡыныс хәл",
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
        "subtext": "бәхетһеҙ булыу",
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
        "subtext": "тулҡынланыу",
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
        "subtext": "стресс",
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
        "subtext": "үҙенә ышаныс",
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
        "subtext": "ғорурлыҡ",
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
        "subtext": "ҡурҡытыу",
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
        "subtext": "ғәжәпләнеү",
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
        "subtext": "күңел ҡайтыу",
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
        "subtext": "көслө рух",
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
        "subtext": "көсһөҙ сигнал",
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
        "subtext": "яҡшы формала",
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
        "subtext": "бик яҡшы эш",
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
        "subtext": "камил ваҡыт",
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
        "subtext": "бөтөнләй кәрәкһеҙ",
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
        "subtext": "дөрөҫ юл",
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
        "subtext": "бик ҡыҙыҡлы",
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
        "subtext": "бик ҡыҙыҡһыҙ",
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
        "subtext": "бик кәрәкле",
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
        "subtext": "мөмкин ҡәҙәр тиҙерәк",
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
        "subtext": "мөмкин түгел",
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
        "subtext": "үҙенсәлекле талант",
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
        "subtext": "бик популяр",
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
        "subtext": "бик оҡшаш",
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
        "subtext": "бик дуҫтарса",
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
        "subtext": "бик миһырбанлы",
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
        "subtext": "бик көлкөлө",
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
        "subtext": "бик аҡыллы",
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
        "subtext": "бик әҙәпле",
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
        "subtext": "бик тупаҫ",
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
        "subtext": "бик ялҡау",
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
        "subtext": "бик намыҫлы",
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
        "subtext": "бик шау-шыулы",
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