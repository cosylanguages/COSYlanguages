// TODO: verify level classification
(function() {
    const lang = "ba";
    const data = [
    {
        "word": "булыу",
        "level": "starter",
        "theme": "social",
        "emoji": "👤",
        "subtext": "арыған булыу / бәхетле булыу / эш тә булыу / әҙер булыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Бар булыу, ниндәйҙер хәлдә булыу.",
                "examples": [
                    "Мин арығанмын.",
                    "Ул табип."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": null,
        "v3": "булған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_001"
    },
    {
        "word": "эйә булыу",
        "level": "starter",
        "theme": "work",
        "emoji": "👜",
        "subtext": "",
        "synonyms": [
            "эшле булырға",
            "төшке аш ашарға",
            "проблема булырға",
            "вакыт булырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндәйҙер нәмәгә хужа булыу.",
                "examples": [
                    "Минең машинам бар.",
                    "Минең эшем бар."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "had",
        "v3": "эйә булған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_001"
    },
    {
        "word": "тойоу",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🌡️",
        "subtext": "",
        "synonyms": [
            "арып хис итергә",
            "яҡшыраҡ хис итергә",
            "ауырыу хис итергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндәйҙер хәлде йәки хис-тойғоно кисереү.",
                "examples": [
                    "Ул үҙен арыған итеп тоя."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "felt",
        "v3": "тойған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_health_medicine_001"
    },
    {
        "word": "биреү",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "subtext": "",
        "synonyms": [
            "кәңәш бирергә",
            "аҡса бирергә",
            "бүләк бирергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне икенсе кешегә тапшырыу.",
                "examples": [
                    "Ул миңә күп эш бирә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "gave",
        "v3": "биргән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "алыу"
        ],
        "transcription": "",
        "id": "ba_starter_shopping_001"
    },
    {
        "word": "алыу",
        "level": "starter",
        "theme": "travel",
        "emoji": "👜",
        "subtext": "",
        "synonyms": [
            "автобусҡа ултырырға",
            "дарыу алырға",
            "тәнәфес яһарға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне тотоу йәки ҡулланыу.",
                "examples": [
                    "Мин эшкә автобус менән барам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "took",
        "v3": "алған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "биреү"
        ],
        "transcription": "",
        "id": "ba_starter_travel_001"
    },
    {
        "word": "алыу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📥",
        "subtext": "",
        "synonyms": [
            "эшкә урынлашырға",
            "арырға",
            "терелергә",
            "өйгә ҡайтып йәтергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне ҡабул итеү йәки хужа булыу.",
                "examples": [
                    "Мин яҡшы эш хаҡы алам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "got",
        "v3": "алған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_002"
    },
    {
        "word": "һалыу",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📥",
        "subtext": "",
        "synonyms": [
            "кейергә",
            "йыйырға",
            "аҡса йыйырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне билдәле бер урынға ҡуйыу.",
                "examples": [
                    "Сумкаңды бында һал."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "put",
        "v3": "һалған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_furniture_001"
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "",
        "synonyms": [
            "кофе яһарға",
            "ҡарар ҡабул итергә",
            "хата яһарға",
            "аҡса эшләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне булдырыу йәки сығарыу.",
                "examples": [
                    "Мин иртән кофе эшләйем."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "made",
        "v3": "эшләгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_002"
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "work",
        "emoji": "🛠️",
        "subtext": "",
        "synonyms": [
            "эшләргә",
            "кибеткә барырға",
            "күнегеүҙәр яһарға",
            "бер ни эшләмәҫкә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндәйҙер эш-хәрәкәт башҡарыу.",
                "examples": [
                    "Мин көн һайын эшләйем."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "эшләгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_003"
    },
    {
        "word": "ҡулланыу",
        "level": "starter",
        "theme": "technology",
        "emoji": "🛠️",
        "subtext": "",
        "synonyms": [
            "телефон ҡулланырға",
            "транспорт ҡулланырға",
            "компьютер ҡулланырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне ниндәйҙер маҡсатта файҙаланыу.",
                "examples": [
                    "Мин телефонымды бөтә нәмә өсөн дә ҡулланам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "ҡулланған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_technology_001"
    },
    {
        "word": "асыу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "subtext": "",
        "synonyms": [
            "ишек асырға",
            "хисап асырға",
            "кибет асырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ябыҡ нәмәне асыу.",
                "examples": [
                    "Ул офисты иртәнге һағат һигеҙҙә аса."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "opened",
        "v3": "асҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "ябыу"
        ],
        "transcription": "",
        "id": "ba_starter_shopping_003"
    },
    {
        "word": "ябыу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "subtext": "",
        "synonyms": [
            "ишек ябырға",
            "алтыла ябылырға",
            "йыйылышты тамамларға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Асыҡ нәмәне ябыу.",
                "examples": [
                    "Офис алтыла ябыла."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "closed",
        "v3": "япҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "асыу"
        ],
        "transcription": "",
        "id": "ba_starter_shopping_004"
    },
    {
        "word": "башлау",
        "level": "starter",
        "theme": "work",
        "emoji": "▶️",
        "subtext": "",
        "synonyms": [
            "эш башларға",
            "йыйылыш башларға",
            "яңы эш башларға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй эште башлап ебәреү.",
                "examples": [
                    "Мин эшкә һигеҙ тулыуҙа башлайым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "started",
        "v3": "башлаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "тамамлау"
        ],
        "transcription": "",
        "id": "ba_starter_work_004"
    },
    {
        "word": "тамамлау",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "",
        "synonyms": [
            "эште тамамларға",
            "проектты тамамларға",
            "иртә тамамларға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне бөтөрөү.",
                "examples": [
                    "Ул эшен биштә тамамлай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "finished",
        "v3": "тамамлаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "башлау"
        ],
        "transcription": "",
        "id": "ba_starter_work_005"
    },
    {
        "word": "ярҙам итеү",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "subtext": "",
        "synonyms": [
            "берәүгә ярҙам итергә",
            "ярҙам һорарға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй кешегә икенсе нәмәне эшләргә булышыу.",
                "examples": [
                    "Ул яңы хеҙмәттәштәренә ярҙам итә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "helped",
        "v3": "ярҙам иткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_006"
    },
    {
        "word": "тырышыу",
        "level": "starter",
        "theme": "school",
        "emoji": "🎯",
        "subtext": "яңы нәмәне һынап ҡарарға",
        "synonyms": [
            "эшләп ҡарарға",
            "тырышырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне эшләргә маташыу.",
                "examples": [
                    "Мин һәр ваҡыт яуап бирергә тырышам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tried",
        "v3": "тырышҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_school_001"
    },
    {
        "word": "күрһәтеү",
        "level": "starter",
        "theme": "language",
        "emoji": "📽️",
        "subtext": "",
        "synonyms": [
            "күрһәтергә",
            "документты күрһәтергә",
            "ҡызыҡһыныу күрһәтергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне башҡаларға күрергә мөмкинлек биреү.",
                "examples": [
                    "Һеҙ миңә системаның нисек эшләгәнен күрһәтә алаһығыҙмы?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "showed",
        "v3": "күрһәткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_language_001"
    },
    {
        "word": "табыу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔍",
        "subtext": "",
        "synonyms": [
            "эш табырға",
            "белергә",
            "ауыр тип табырға",
            "вакыт табырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне эҙләп табыу.",
                "examples": [
                    "Мин яңы эш таптым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "found",
        "v3": "тапҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_005"
    },
    {
        "word": "һаҡлау",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "",
        "synonyms": [
            "дәүа итергә",
            "тыныс булырға",
            "элемтәлә булырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне үҙеңдә ҡалдырыу.",
                "examples": [
                    "Чекты һаҡлағыҙ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "kept",
        "v3": "һаҡлаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_007"
    },
    {
        "word": "юғалтыу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📉",
        "subtext": "",
        "synonyms": [
            "эште юғалтырға",
            "аҡса юғалтырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәгә хужа булыуҙан туҡтау.",
                "examples": [
                    "Мин асҡыстарымды юғалттым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "lost",
        "v3": "юғалтҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "еңеү"
        ],
        "transcription": "",
        "id": "ba_starter_shopping_006"
    },
    {
        "word": "киҫеү",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "subtext": "",
        "synonyms": [
            "сығымдарҙы ҡыҫҡартыу"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне үткер нәмә менән бүлеү.",
                "examples": [
                    "Ул икмәкте киҫә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cut",
        "v3": "киҫкән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_food_drink_001"
    },
    {
        "word": "бороу",
        "level": "starter",
        "theme": "travel",
        "emoji": "🔄",
        "subtext": "",
        "synonyms": [
            "ҡабыҙырға",
            "һүндерергә",
            "һулға боролорға",
            "уңға боролорға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй йүнәлешкә боролоу.",
                "examples": [
                    "Офис янында һулға боролоғоҙ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned",
        "v3": "борған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_002"
    },
    {
        "word": "килтереү",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🎁",
        "subtext": "",
        "synonyms": [
            "алып килергә",
            "ризыҡ алып килергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне үҙең менән алып килеү.",
                "examples": [
                    "Эшкә үҙең менән төшкө аш килтер."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "brought",
        "v3": "килтергән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_food_drink_002"
    },
    {
        "word": "әйтеү",
        "level": "starter",
        "theme": "social",
        "emoji": "🗨️",
        "subtext": "",
        "synonyms": [
            "исәнләшергә",
            "эйе тиергә",
            "юк тиергә",
            "берәр нәмә әйтергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне һүҙ менән белдереү.",
                "examples": [
                    "Ул һәр иртә һаумы тип әйтә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "said",
        "v3": "әйткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_002"
    },
    {
        "word": "һөйләү",
        "level": "starter",
        "theme": "language",
        "emoji": "🗣️",
        "subtext": "",
        "synonyms": [
            "дөрөҫөн әйтергә",
            "һөйләргә",
            "хикәйә һөйләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй кешегә мәғлүмәт биреү.",
                "examples": [
                    "Ул үҙенең тарихын һөйләй."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "told",
        "v3": "һөйләгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_language_002"
    },
    {
        "word": "һорау",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "subtext": "һорау бирергә",
        "synonyms": [
            "ярҙам һорарға",
            "нәмә тураһындалыр һорарға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй һорау биреү йәки үтенес белдереү.",
                "examples": [
                    "Ул ярҙам һорай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asked",
        "v3": "һораған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_language_003"
    },
    {
        "word": "һөйләшеү",
        "level": "starter",
        "theme": "social",
        "emoji": "🗣️",
        "subtext": "",
        "synonyms": [
            "һөйләшергә",
            "инглизсә һөйләшергә",
            "асыҡ һөйләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Һүҙҙәр ярҙамында аралашыу.",
                "examples": [
                    "Ул башҡортса һөйләшә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "spoke",
        "v3": "һөйләшкән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_003"
    },
    {
        "word": "һөйләшеү",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "subtext": "кем менән дә һөйләшергә",
        "synonyms": [
            "асыҡ һөйләшергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй кеше менән һөйләшеү.",
                "examples": [
                    "Ул менеджеры менән һөйләшә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "talked",
        "v3": "һөйләшкән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_004"
    },
    {
        "word": "шыңғыртыу",
        "level": "starter",
        "theme": "technology",
        "emoji": "📞",
        "subtext": "",
        "synonyms": [
            "шалтыратырға",
            "кире шалтыратырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Телефон аша бәйләнешкә инеү.",
                "examples": [
                    "Мин һәр иртә дуҫтарыма шыңғыртам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "шыңғыртҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_technology_002"
    },
    {
        "word": "яҙыу",
        "level": "starter",
        "theme": "school",
        "emoji": "✍️",
        "subtext": "",
        "synonyms": [
            "хат яҙырға",
            "отчет яҙырға",
            "яҙмалар яһарға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ҡағыҙға йәки экранға һүҙҙәр төшөрөү.",
                "examples": [
                    "Мин хат яҙам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "wrote",
        "v3": "яҙған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "уҡыу"
        ],
        "transcription": "",
        "id": "ba_starter_school_002"
    },
    {
        "word": "уҡыу",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "",
        "synonyms": [
            "китап уҡырға",
            "яңылыҡтар уҡырға",
            "контракт уҡырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Яҙылған һүҙҙәрҙе аңлау.",
                "examples": [
                    "Ул китап уҡый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "read",
        "v3": "уҡыған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "яҙыу"
        ],
        "transcription": "",
        "id": "ba_starter_school_003"
    },
    {
        "word": "тыңлау",
        "level": "starter",
        "theme": "school",
        "emoji": "🎧",
        "subtext": "",
        "synonyms": [
            "музыка тыңларға",
            "иғтибар менән тыңларға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Тауыштарға иғтибар итеү.",
                "examples": [
                    "Мин музыка тыңлайым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "listened",
        "v3": "тыңлаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_school_004"
    },
    {
        "word": "яуап биреү",
        "level": "starter",
        "theme": "language",
        "emoji": "📞",
        "subtext": "",
        "synonyms": [
            "яуап бирергә",
            "шалтыратыуға яуап бирергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "һорауға яуап ҡайтарыу.",
                "examples": [
                    "Ул һорауға яуап бирҙе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "answered",
        "v3": "яуап бирҙе",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_language_004"
    },
    {
        "word": "ҡабатлау",
        "level": "starter",
        "theme": "school",
        "emoji": "🔁",
        "subtext": "",
        "synonyms": [
            "ҡабатларға",
            "заказды ҡбатларға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Бер нәмәне икенсе тапҡыр эшләү.",
                "examples": [
                    "Зинһар, ҡабатлағыҙ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repeated",
        "v3": "ҡабатлаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_school_005"
    },
    {
        "word": "барыу",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "",
        "synonyms": [
            "эшкә барырға",
            "өйгә барырға",
            "урамға сығырға",
            "кибеткә барырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Бер урындан икенсе урынға күсеү.",
                "examples": [
                    "Мин эшкә барам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "барған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_003"
    },
    {
        "word": "килеү",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏃‍♂️",
        "subtext": "",
        "synonyms": [
            "өйгә ҡайтырға",
            "эшкә килергә",
            "кире ҡайтырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй урынға йәки кешегә яҡынлашыу.",
                "examples": [
                    "Ул өйгә килә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "came",
        "v3": "килгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "барыу"
        ],
        "transcription": "",
        "id": "ba_starter_travel_004"
    },
    {
        "word": "йәйәү йөрөү",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "",
        "synonyms": [
            "эшкә йәйәү барырға",
            "өйгә барырға",
            "аҡрын барырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Аяҡ менән атлап барыу.",
                "examples": [
                    "Ул паркта йәйәү йөрөй."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "walked",
        "v3": "йөрөгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_005"
    },
    {
        "word": "машина йөрөтөү",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "subtext": "",
        "synonyms": [
            "машинала эшкә барырға",
            "машина йөрөтөргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Транспорт сараһын идара итеү.",
                "examples": [
                    "Ул машина йөрөтә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "drove",
        "v3": "йөрөткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_006"
    },
    {
        "word": "осоу",
        "level": "starter",
        "theme": "travel",
        "emoji": "✈️",
        "subtext": "бизнес класс менән осорға",
        "synonyms": [
            "ҡалаға осорға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Һауа аша хәрәкәт итеү.",
                "examples": [
                    "Ҡоштар оса."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "flew",
        "v3": "оҡҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_007"
    },
    {
        "word": "килеп етеү",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "",
        "synonyms": [
            "эшкә килергә",
            "һуңға ҡалып килергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Билдәләнгән урынға килеү.",
                "examples": [
                    "Ул ваҡытында килеп етте."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arrived",
        "v3": "килеп еткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_008"
    },
    {
        "word": "китеү",
        "level": "starter",
        "theme": "work",
        "emoji": "🚪",
        "subtext": "",
        "synonyms": [
            "өйҙән китергә",
            "эштән китергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй урындан китеп барыу.",
                "examples": [
                    "Ул эштән китә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "left",
        "v3": "киткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_009"
    },
    {
        "word": "күсеү",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📦",
        "subtext": "",
        "synonyms": [
            "яңы урынға күсенергә",
            "күсенергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Йәшәү урынын үҙгәртеү.",
                "examples": [
                    "Улар яңы фатирға күсте."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "moved",
        "v3": "күскән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_furniture_002"
    },
    {
        "word": "ҡайтыу",
        "level": "starter",
        "theme": "travel",
        "emoji": "🔙",
        "subtext": "",
        "synonyms": [
            "өйгә ҡайтырға",
            "эшкә ҡайтырға",
            "кире шалтыратырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Кире килеү.",
                "examples": [
                    "Мин өйгә ҡайтам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "returned",
        "v3": "ҡайтҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_008"
    },
    {
        "word": "сәйәхәт итеү",
        "level": "starter",
        "theme": "travel",
        "emoji": "✈️",
        "subtext": "эш буйынса сәйәхәт итергә",
        "synonyms": [
            "сит илгә барырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Бер урындан икенсе урынға сәфәр ҡылыу.",
                "examples": [
                    "Мин сәйәхәт итергә яратам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "traveled",
        "v3": "сәйәхәт иткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_009"
    },
    {
        "word": "ашау",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "subtext": "",
        "synonyms": [
            "иртәнге аш ашарға",
            "төшке аш ашарға",
            "киске аш ашарға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ризыҡты ауыҙға алып йотоу.",
                "examples": [
                    "Ул алма ашай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ate",
        "v3": "ашаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "эсеү"
        ],
        "transcription": "",
        "id": "ba_starter_food_drink_003"
    },
    {
        "word": "эсеү",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "subtext": "",
        "synonyms": [
            "кофе эсергә",
            "сәй эсергә",
            "һыу эсергә",
            "һыра эсергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Шыйыҡлыҡты ауыҙға алып йотоу.",
                "examples": [
                    "Мин һыу эсәм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "drank",
        "v3": "эскән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "ашау"
        ],
        "transcription": "",
        "id": "ba_starter_food_drink_004"
    },
    {
        "word": "йоҡлау",
        "level": "starter",
        "theme": "time",
        "emoji": "😴",
        "subtext": "",
        "synonyms": [
            "яҡшы йоҡларға",
            "насар йоҡларға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Күҙҙәрҙе йомоп ял итеү.",
                "examples": [
                    "Бала йоҡлай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "slept",
        "v3": "йоҡлаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "уяныу"
        ],
        "transcription": "",
        "id": "ba_starter_time_001"
    },
    {
        "word": "аш бешереү",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "subtext": "",
        "synonyms": [
            "киске аш бешерергә",
            "өйҙә бешерергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ризыҡты йылытып әҙерләү.",
                "examples": [
                    "Ул киске аш бешерә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cooked",
        "v3": "бешергән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_food_drink_005"
    },
    {
        "word": "таҙартыу",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧹",
        "subtext": "",
        "synonyms": [
            "фатирҙы йыйыштырырға",
            "кухняны йыйыштырырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Керҙе йәки бысраҡты бөтөрөү.",
                "examples": [
                    "Ул бүлмәһен таҙарта."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cleaned",
        "v3": "таҙартҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_furniture_003"
    },
    {
        "word": "кейеү",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👕",
        "subtext": "",
        "synonyms": [
            "костюм кейергә",
            "күҙлек кейергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Өҫтә кейем булыу.",
                "examples": [
                    "Ул күлдәк кейгән."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "wore",
        "v3": "кейгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_clothes_001"
    },
    {
        "word": "йыуыу",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧼",
        "subtext": "",
        "synonyms": [
            "һауыт-һаба йыуырға",
            "кейем йыуырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәне һыу менән таҙартыу.",
                "examples": [
                    "Ул ҡулдарын йыуа."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "йыуған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_furniture_004"
    },
    {
        "word": "һатып алыу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "subtext": "",
        "synonyms": [
            "ризыҡ һатып алырға",
            "билет һатып алырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Аҡсаға нәмә алыу.",
                "examples": [
                    "Мин китап һатып алдым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "bought",
        "v3": "һатып алған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "һатыу"
        ],
        "transcription": "",
        "id": "ba_starter_shopping_007"
    },
    {
        "word": "түләү",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💳",
        "subtext": "",
        "synonyms": [
            "счетты түләргә",
            "аренда түләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмә өсөн аҡса биреү.",
                "examples": [
                    "Мин хаҡын түләйем."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "paid",
        "v3": "түләгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_008"
    },
    {
        "word": "тотоноу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💸",
        "subtext": "",
        "synonyms": [
            "аҡса тоторға",
            "ваҡыт үткәрергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Аҡсаны билдәле бер нәмәгә сарыф итеү.",
                "examples": [
                    "Ул күп аҡса тотона."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "spent",
        "v3": "тотонған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_009"
    },
    {
        "word": "һаҡлау",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "subtext": "",
        "synonyms": [
            "аҡса йыйырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Аҡсаны сарыф итмәй һаҡлап тотоу.",
                "examples": [
                    "Ул аҡса һаҡлай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "saved",
        "v3": "һаҡлаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "тотоноу"
        ],
        "transcription": "",
        "id": "ba_starter_shopping_010"
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "work",
        "emoji": "💼",
        "subtext": "",
        "synonyms": [
            "өйҙән эшләргә",
            "тулы көн эшләргә",
            "тырышып эшләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндәйҙер эш башҡарыу.",
                "examples": [
                    "Мин көн һайын эшләйем."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "worked",
        "v3": "эшләгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_010"
    },
    {
        "word": "йәшәү",
        "level": "starter",
        "theme": "places",
        "emoji": "🏠",
        "subtext": "",
        "synonyms": [
            "фатирҙа йәшәргә",
            "ялғыҙ йәшәргә",
            "сит илдәрҙә йәшәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй ерҙә тороу.",
                "examples": [
                    "Мин Өфөлә йәшәйем."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "йәшәгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "үлеү"
        ],
        "transcription": "",
        "id": "ba_starter_places_001"
    },
    {
        "word": "уйлау",
        "level": "starter",
        "theme": "social",
        "emoji": "💭",
        "subtext": "",
        "synonyms": [
            "уйларға",
            "уйлап ҡарарға",
            "йентекләп уйларға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Аҡылды ҡулланып фекер йөрөтөү.",
                "examples": [
                    "Мин был турала уйлайым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "thought",
        "v3": "уйлаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_005"
    },
    {
        "word": "белеү",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "",
        "synonyms": [
            "танырға",
            "яуапты белергә",
            "урынды белергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Мәғлүмәткә эйә булыу.",
                "examples": [
                    "Мин уның исемен беләм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "knew",
        "v3": "белгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_school_006"
    },
    {
        "word": "теләү",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🙏",
        "subtext": "",
        "synonyms": [
            "эш теләргә",
            "китергә теләргә",
            "күберәк аҡса теләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне теләү.",
                "examples": [
                    "Мин һыу теләйем."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "теләгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_emotions_001"
    },
    {
        "word": "кәрәк булыу",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🆘",
        "subtext": "",
        "synonyms": [
            "ярҙам кәрәк булырға",
            "вакыт кәрәк булырға",
            "ял кәрәк булырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндәйҙер нәмәгә мохтажлыҡ кисереү.",
                "examples": [
                    "Миңә ярҙам кәрәк."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "needed",
        "v3": "кәрәк булған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_emotions_002"
    },
    {
        "word": "ошатыу",
        "level": "starter",
        "theme": "emotions",
        "emoji": "👍",
        "subtext": "",
        "synonyms": [
            "эште ошатырға",
            "сәйәхәт итергә ошатырға",
            "идеяны ошатырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне оҡшатыу.",
                "examples": [
                    "Миңә был китап ошай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liked",
        "v3": "ошаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_emotions_003"
    },
    {
        "word": "яратыу",
        "level": "starter",
        "theme": "emotions",
        "emoji": "❤️",
        "subtext": "",
        "synonyms": [
            "берәүҙе яратырға",
            "эшләргә яратырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй кешене йәки нәмәне ныҡ яратыу.",
                "examples": [
                    "Мин һине яратам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "loved",
        "v3": "яратҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_emotions_004"
    },
    {
        "word": "нәфрәт итеү",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😡",
        "subtext": "",
        "synonyms": [
            "эшләргә яратмаҫҡа",
            "берәүҙе күралмаҫҡа"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне яратмау.",
                "examples": [
                    "Ул ялғанды нәфрәт итә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hated",
        "v3": "нәфрәт иткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_emotions_005"
    },
    {
        "word": "өмит итеү",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🤞",
        "subtext": "",
        "synonyms": [
            "өмөтләнергә",
            "өмөт итәм"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Яҡшы нәмә булыр тип көтөү.",
                "examples": [
                    "Мин яҡшылыҡҡа өмит итәм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoped",
        "v3": "өмит иткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_emotions_006"
    },
    {
        "word": "хәтерләү",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "",
        "synonyms": [
            "эшләргә хәтерләргә",
            "исемде хәтерләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Уйҙа һаҡлау.",
                "examples": [
                    "Мин һине хәтерләйем."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "remembered",
        "v3": "хәтерләгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_school_007"
    },
    {
        "word": "онотоу",
        "level": "starter",
        "theme": "school",
        "emoji": "🤔",
        "subtext": "",
        "synonyms": [
            "исемде юғалтырға",
            "эшләргә юғалтырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Хәтерҙән сығарыу.",
                "examples": [
                    "Мин оноттом."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "forgot",
        "v3": "онотҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_school_008"
    },
    {
        "word": "аңлау",
        "level": "starter",
        "theme": "language",
        "emoji": "💡",
        "subtext": "",
        "synonyms": [
            "проблеманы аңларға",
            "берәүҙе аңларға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Мәғәнәне төшөнөү.",
                "examples": [
                    "Мин һине аңлайым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "understood",
        "v3": "аңлаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_language_005"
    },
    {
        "word": "ҡарар итеү",
        "level": "starter",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "",
        "synonyms": [
            "эшләргә ҡарар ҡылырға",
            "ҡарар ҡабул итергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй ҡарарға килеү.",
                "examples": [
                    "Ул барырға ҡарар итте."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "decided",
        "v3": "ҡарар иткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_006"
    },
    {
        "word": "ләззәт алыу",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "subtext": "",
        "synonyms": [
            "эшләүҙән ләззәт алырға",
            "тормоштан ләззәт алырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәнән кифоланыу.",
                "examples": [
                    "Мин тәбиғәттән ләззәт алам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "enjoyed",
        "v3": "ләззәт алған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_emotions_007"
    },
    {
        "word": "күреү",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "subtext": "",
        "synonyms": [
            "табибты күрергә",
            "дуҫтарҙы күрергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Күҙ менән күреү.",
                "examples": [
                    "Мин һине күрәм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "saw",
        "v3": "күргән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_body_001"
    },
    {
        "word": "ишетеү",
        "level": "starter",
        "theme": "body",
        "emoji": "👂",
        "subtext": "",
        "synonyms": [
            "яңылыҡтар ишетергә",
            "берәүҙән ишетергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ҡолаҡ менән ишетеү.",
                "examples": [
                    "Мин тауыш ишетәм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "heard",
        "v3": "ишеткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_body_002"
    },
    {
        "word": "уяныу",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "иртә уянырға",
            "һуң уянырға",
            "арып уянырға"
        ],
        "definitions": [
            {
                "text": "Йоҡонан уяныу.",
                "examples": [
                    "Мин иртән уяндым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "woke up",
        "v3": "уянған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "йоҡлау"
        ],
        "transcription": "",
        "id": "ba_starter_work_011"
    },
    {
        "word": "ҡарау",
        "level": "starter",
        "theme": "social",
        "emoji": "📺",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "ТВ ҡарарға",
            "фильм ҡарарға",
            "яңылыҡтар ҡарарға"
        ],
        "definitions": [
            {
                "text": "Берәй нәмәгә күҙәтеп туҡтау.",
                "examples": [
                    "Ул телевизор ҡарай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "watched",
        "v3": "ҡараған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_007"
    },
    {
        "word": "ҡарау",
        "level": "starter",
        "theme": "people",
        "emoji": "👀",
        "subtext": "",
        "synonyms": [
            "ҡарарға",
            "эҙләргә",
            "оҡшарға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәгә күҙ һалыу.",
                "examples": [
                    "Бында ҡарағыҙ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "looked",
        "v3": "ҡараған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_people_001"
    },
    {
        "word": "уйнау",
        "level": "starter",
        "theme": "social",
        "emoji": "🎮",
        "subtext": "",
        "synonyms": [
            "спорт менән шөғөлләнергә",
            "уйын уйнарға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Уйын уйнау.",
                "examples": [
                    "Балалар уйнай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "played",
        "v3": "уйнаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_008"
    },
    {
        "word": "йүгереү",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏃",
        "subtext": "",
        "synonyms": [
            "йүгерергә",
            "бизнес алып барырға",
            "һуңға ҡалырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Тез хәрәкәт итеү.",
                "examples": [
                    "Ул йүгерә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ran",
        "v3": "йүгергән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_sports_001"
    },
    {
        "word": "олтороу",
        "level": "starter",
        "theme": "work",
        "emoji": "🪑",
        "subtext": "",
        "synonyms": [
            "ултырырға",
            "өҫтәл артына ултырырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Урындыҡта йәки ерҙә ултырыу.",
                "examples": [
                    "Ул ултыра."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sat",
        "v3": "олторған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "тороу"
        ],
        "transcription": "",
        "id": "ba_starter_work_012"
    },
    {
        "word": "тороу",
        "level": "starter",
        "theme": "work",
        "emoji": "🧍",
        "subtext": "",
        "synonyms": [
            "баҫырға",
            "чиратта баҫып торорға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Аяҡ өҫтөндә тороу.",
                "examples": [
                    "Ул баҫып тора."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stood",
        "v3": "торған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "олтороу"
        ],
        "transcription": "",
        "id": "ba_starter_work_013"
    },
    {
        "word": "осрашыу",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй кеше менән күрешеү.",
                "examples": [
                    "Улар осрашты."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "met",
        "v3": "осрашҡан",
        "subtext": "",
        "synonyms": [
            "клиент менән осрашырға",
            "коллега менән осрашырға"
        ],
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_014"
    },
    {
        "word": "өйрәнеү",
        "level": "starter",
        "theme": "school",
        "emoji": "📚",
        "subtext": "",
        "synonyms": [
            "тел өйрәнергә",
            "һөнәр өйрәнергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Яңы белем алыу.",
                "examples": [
                    "Мин тел өйрәнәм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "learned / learnt",
        "v3": "өйрәнгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_school_009"
    },
    {
        "word": "үҙгәртеү",
        "level": "starter",
        "theme": "work",
        "emoji": "🔄",
        "subtext": "",
        "synonyms": [
            "эште алыштырырға",
            "уйҙы үҙгәртергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Башҡа төрлө итеү.",
                "examples": [
                    "Ул планын үҙгәртте."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "changed",
        "v3": "үҙгәрткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_015"
    },
    {
        "word": "туҡтау",
        "level": "starter",
        "theme": "work",
        "emoji": "🛑",
        "subtext": "",
        "synonyms": [
            "туҡтарға",
            "эште туҡтатырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Хәрәкәтте туҡтатыу.",
                "examples": [
                    "Машина туҡтаны."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stopped",
        "v3": "туҡтаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_016"
    },
    {
        "word": "өҫтәү",
        "level": "starter",
        "theme": "numbers",
        "emoji": "➕",
        "subtext": "",
        "synonyms": [
            "шикәр өҫтәргә",
            "өҫтәргә",
            "комментарий өҫтәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәгә икенсе нәмәне ҡушыу.",
                "examples": [
                    "Ул шәкәр өҫтәне."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "added",
        "v3": "өҫтәгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_numbers_001"
    },
    {
        "word": "еңеү",
        "level": "starter",
        "theme": "social",
        "emoji": "🏆",
        "subtext": "",
        "synonyms": [
            "уйында еңергә",
            "приз алырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ярышта еңеп сығыу.",
                "examples": [
                    "Ул еңде."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "won",
        "v3": "еңгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "юғалтыу"
        ],
        "transcription": "",
        "id": "ba_starter_social_009"
    },
    {
        "word": "көтөү",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "subtext": "",
        "synonyms": [
            "берәүҙе көтөргә",
            "чиратта көтөргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәнең булыуын көтөп тороу.",
                "examples": [
                    "Мин һине көтәм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waited",
        "v3": "көткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_017"
    },
    {
        "word": "үлеү",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "⚰️",
        "subtext": "",
        "synonyms": [
            "үлергә",
            "һәләк булырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Йәшәүҙән туҡтау.",
                "examples": [
                    "Сәсәк үлде."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "died",
        "v3": "үлгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "йәшәү"
        ],
        "transcription": "",
        "id": "ba_starter_health_medicine_002"
    },
    {
        "word": "ебәреү",
        "level": "starter",
        "theme": "work",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне ебәреү.",
                "examples": [
                    "Мин хат ебәрҙем."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sent",
        "v3": "ебәргән",
        "subtext": "",
        "synonyms": [
            "хат ебәрергә",
            "хәбәр ебәрергә"
        ],
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_018"
    },
    {
        "word": "ҡалыу",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏨",
        "subtext": "",
        "synonyms": [
            "өйҙә ҡалырға",
            "ҡунаҡханала ҡалырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй ерҙә ҡалыу.",
                "examples": [
                    "Мин өйҙә ҡалдым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stayed",
        "v3": "ҡалған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_010"
    },
    {
        "word": "йығылыу",
        "level": "starter",
        "theme": "nature",
        "emoji": "🍂",
        "subtext": "",
        "synonyms": [
            "йығылырға",
            "ғашиҡ булырға",
            "йоҡлап китергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ергә төшөү.",
                "examples": [
                    "Ул йығылды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fell",
        "v3": "йығылған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_nature_001"
    },
    {
        "word": "үтеү",
        "level": "starter",
        "theme": "school",
        "emoji": "🏔️",
        "subtext": "",
        "synonyms": [
            "имтихан тапшырырға",
            "тупты биреү",
            "ваҡыт уҙҙырыу"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй ерҙән үтеп китеү йәки имтихан тапшырыу.",
                "examples": [
                    "Мин имтихан үттем."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "passed",
        "v3": "үткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_school_010"
    },
    {
        "word": "һатыу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "subtext": "",
        "synonyms": [
            "товар һатырға",
            "онлайн һатырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Аҡсаға нәмә биреү.",
                "examples": [
                    "Ул машинаһын һатты."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sold",
        "v3": "һатҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "һатып алыу"
        ],
        "transcription": "",
        "id": "ba_starter_shopping_011"
    },
    {
        "word": "тартыу",
        "level": "starter",
        "theme": "work",
        "emoji": "🚜",
        "subtext": "",
        "synonyms": [
            "ишекте тартырға",
            "нәрсәнелер тартырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Үҙеңә табан тартыу.",
                "examples": [
                    "Ул ишекте тартты."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pulled",
        "v3": "тартҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "этәреү"
        ],
        "transcription": "",
        "id": "ba_starter_work_019"
    },
    {
        "word": "этәреү",
        "level": "starter",
        "theme": "work",
        "emoji": "🛒",
        "subtext": "",
        "synonyms": [
            "төймәгә баҫырға",
            "этәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне үҙеңдән этәреү.",
                "examples": [
                    "Ул төймәгә этәрҙе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pushed",
        "v3": "этәргән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "тартыу"
        ],
        "transcription": "",
        "id": "ba_starter_work_020"
    },
    {
        "word": "ташыу",
        "level": "starter",
        "theme": "work",
        "emoji": "🎒",
        "subtext": "",
        "synonyms": [
            "сумка күтәреп барырға",
            "үтәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне күтәреп барыу.",
                "examples": [
                    "Ул сумка ташый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried",
        "v3": "ташыған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_021"
    },
    {
        "word": "һыныу",
        "level": "starter",
        "theme": "describing",
        "emoji": "💔",
        "subtext": "",
        "synonyms": [
            "быяла ватырға",
            "законды боҙорға",
            "тәнәфес яһарға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне ватыу.",
                "examples": [
                    "Стакан һынды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "broke",
        "v3": "һынған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_describing_001"
    },
    {
        "word": "алыу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📩",
        "subtext": "",
        "synonyms": [
            "хат алырға",
            "бүләк алырға",
            "түләү алырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне ҡабул итеп алыу.",
                "examples": [
                    "Мин бүләк алдым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "received",
        "v3": "алған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_012"
    },
    {
        "word": "риза булыу",
        "level": "starter",
        "theme": "social",
        "emoji": "👍",
        "subtext": "",
        "synonyms": [
            "берәү менән килешергә",
            "килешәм"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Башҡа кешенең фекере менән килешеү.",
                "examples": [
                    "Мин риза."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "agreed",
        "v3": "риза булған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_010"
    },
    {
        "word": "һүрәт төшөрөү",
        "level": "starter",
        "theme": "social",
        "emoji": "🎨",
        "subtext": "",
        "synonyms": [
            "рәсем яһарға",
            "нәтижә яһарға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ҡәләм менән һүрәт яһау.",
                "examples": [
                    "Ул һүрәт төшөрә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "drew",
        "v3": "төшөргән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_011"
    },
    {
        "word": "бүлешеү",
        "level": "starter",
        "theme": "social",
        "emoji": "🍕",
        "subtext": "",
        "synonyms": [
            "бүлмәлә йәшәргә",
            "мәғлүмәт менән бүлешергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәне башҡалар менән бүлеү.",
                "examples": [
                    "Беҙ аш менән бүлештек."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shared",
        "v3": "бүлешкән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_012"
    },
    {
        "word": "елмәйеү",
        "level": "starter",
        "theme": "people",
        "emoji": "😊",
        "subtext": "",
        "synonyms": [
            "елмайырға",
            "берәүгә елмайырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Йөҙҙә шатлыҡ белдереү.",
                "examples": [
                    "Ул йылмая."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "smiled",
        "v3": "елмәйгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "илау"
        ],
        "transcription": "",
        "id": "ba_starter_people_002"
    },
    {
        "word": "илау",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😢",
        "subtext": "",
        "synonyms": [
            "ярҙамға саҡырырға",
            "ҡысҡырырға",
            "илап ебәрергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Күҙ йәше түгеү.",
                "examples": [
                    "Бала илай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cried",
        "v3": "илаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "antonyms": [
            "елмәйеү"
        ],
        "transcription": "",
        "id": "ba_starter_emotions_008"
    },
    {
        "word": "бейеү",
        "level": "starter",
        "theme": "music",
        "emoji": "💃",
        "subtext": "",
        "synonyms": [
            "музыкаға бейергә",
            "бейергә барырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Музыкаға хәрәкәт итеү.",
                "examples": [
                    "Улар бейей."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "danced",
        "v3": "бейегән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_music_001"
    },
    {
        "word": "йырлау",
        "level": "starter",
        "theme": "music",
        "emoji": "🎤",
        "subtext": "",
        "synonyms": [
            "йыр йырларға",
            "ҡушылып йырларға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Йыр йырлау.",
                "examples": [
                    "Ул йырлай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sang",
        "v3": "йырлаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_music_002"
    },
    {
        "word": "һикереү",
        "level": "starter",
        "theme": "sports",
        "emoji": "🦘",
        "subtext": "",
        "synonyms": [
            "бейеккә һикерергә",
            "аша һикерергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ерҙән юғарыға һикереү.",
                "examples": [
                    "Ул һикерҙе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "jumped",
        "v3": "һикергән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_sports_002"
    },
    {
        "word": "йөҙөү",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏊",
        "subtext": "",
        "synonyms": [
            "йөҙөргә барырға",
            "йөҙөргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Һыуҙа йөҙөү.",
                "examples": [
                    "Мин йөҙөргә яратам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "swam",
        "v3": "йөҙгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_sports_003"
    },
    {
        "word": "өйрәнеү",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "",
        "synonyms": [
            "инглизсә өйрәнергә",
            "имтиханға әҙерләнергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Белем алыу.",
                "examples": [
                    "Ул мәктәптә өйрәнә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "studied",
        "v3": "өйрәнгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_school_011"
    },
    {
        "word": "уҡытыу",
        "level": "starter",
        "theme": "school",
        "emoji": "👨‍🏫",
        "subtext": "",
        "synonyms": [
            "өйрәтергә",
            "предметты өйрәтергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Башҡаларға белем биреү.",
                "examples": [
                    "Ул математика уҡыта."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "taught",
        "v3": "уҡытҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_school_012"
    },
    {
        "word": "эшкә йөрөү",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚆",
        "subtext": "",
        "synonyms": [
            "эшкә барып ҡайтырға",
            "поезда барырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Көн һайын эшкә барыу-ҡайтыу.",
                "examples": [
                    "Ул ҡалаға эшкә йөрөй."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "commuted",
        "v3": "йөрөгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_011"
    },
    {
        "word": "ҡуртымға алыу",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏠",
        "subtext": "",
        "synonyms": [
            "фатир арендаларға",
            "бүлмә арендаға бирергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Аҡсаға ваҡытлыса файҙаланыу.",
                "examples": [
                    "Улар фатир ҡуртымға алды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rented",
        "v3": "ҡуртымға алған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_012"
    },
    {
        "word": "күнегеүҙәр эшләү",
        "level": "starter",
        "theme": "social",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Тән үҫтереү өсөн эшләү.",
                "examples": [
                    "Ул күнегеүҙәр эшләй."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercised",
        "v3": "эшләгән",
        "subtext": "",
        "synonyms": [
            "күнегеүҙәр яһарға",
            "спортзал барырға"
        ],
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_013"
    },
    {
        "word": "тора",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Хаҡы булыу.",
                "examples": [
                    "Был күп тора."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "cost",
        "v3": "торған",
        "subtext": "",
        "synonyms": [
            "ҡыйбат торорға",
            "аҡса торорға"
        ],
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_013"
    },
    {
        "word": "саҡырыу",
        "level": "starter",
        "theme": "social",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй ергә килергә һорау.",
                "examples": [
                    "Ул мине ҡунаҡҡа саҡырҙы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "саҡырған",
        "subtext": "",
        "synonyms": [
            "берәүҙе саҡырырға",
            "төшке ашҡа саҡырырға"
        ],
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_014"
    },
    {
        "word": "төшөү",
        "definitions": [
            {
                "text": "Йоҡонан тороу.",
                "examples": [
                    "Ул иртә тора."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "иртә торорға",
            "тиҙ торорға"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "got up",
        "v3": "торған",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_022"
    },
    {
        "word": "иртәнге ашты ашау",
        "definitions": [
            {
                "text": "Иртәнге ашты ашау.",
                "examples": [
                    "Мин иртәнге ашты ашаным."
                ]
            }
        ],
        "subtext": "өйҙә иртәнге аш ашарға",
        "classification": "regular",
        "aspect": "action",
        "v2": "had breakfast",
        "v3": "ашаған",
        "theme": "work",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_023"
    },
    {
        "word": "ҡайтыу",
        "definitions": [
            {
                "text": "Кире ҡайтыу.",
                "examples": [
                    "Ул өйгә ҡайтты."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "өйгә ҡайтырға",
            "һуң ҡайтырға"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "came back",
        "v3": "ҡайтҡан",
        "theme": "work",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_024"
    },
    {
        "word": "йоҡларға ятыу",
        "definitions": [
            {
                "text": "Йоҡларға ятыу.",
                "examples": [
                    "Мин кис йоҡларға яттым."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "иртә йоҡларға ятырға",
            "һуң ятырға"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "ятҡан",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_025"
    },
    {
        "word": "тикшереү",
        "definitions": [
            {
                "text": "Берәй нәмәне тикшереү.",
                "examples": [
                    "Ул почтаһын тикшерә."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "хаттарҙы тикшерергә",
            "ваҡытты тикшерергә"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "checked",
        "v3": "тикшергән",
        "theme": "work",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_026"
    },
    {
        "word": "яуап биреү",
        "definitions": [
            {
                "text": "Яуап биреү.",
                "examples": [
                    "Ул хатҡа яуап бирҙе."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "хатҡа яуап бирергә",
            "тиҙ яуап бирергә"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "replied",
        "v3": "яуап бирҙе",
        "theme": "work",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_027"
    },
    {
        "word": "тәҡдим итеү",
        "definitions": [
            {
                "text": "Берәй нәмәне күрһәтеү.",
                "examples": [
                    "Ул проектын тәҡдим итте."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "отчет тәҡдим итергә",
            "идеялар тәҡдим итергә"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "presented",
        "v3": "тәҡдим иткән",
        "theme": "work",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_028"
    },
    {
        "word": "ҡатнашыу",
        "definitions": [
            {
                "text": "Йыйылышта ҡатнашыу.",
                "examples": [
                    "Мин кәңәшмәлә ҡатнаштым."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "йыйылышта булырға",
            "курска барырға"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "attended",
        "v3": "ҡатнашҡан",
        "theme": "work",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_029"
    },
    {
        "word": "идара итеү",
        "definitions": [
            {
                "text": "Етәкселек итеү.",
                "examples": [
                    "Ул коллектив менән идара итә."
                ]
            }
        ],
        "subtext": "команда менән идарә итергә / ваҡыт менән идарә итергә",
        "classification": "regular",
        "aspect": "action",
        "v2": "managed",
        "v3": "идара иткән",
        "theme": "work",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_030"
    },
    {
        "word": "түләү алыу",
        "definitions": [
            {
                "text": "Аҡса һорау.",
                "examples": [
                    "Ул хаҡын алды."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "түләү алырға",
            "хеҙмәт өсөн түләү"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "charged",
        "v3": "алған",
        "theme": "shopping",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_014"
    },
    {
        "word": "булдыра алыу",
        "definitions": [
            {
                "text": "Аҡсаһы етеү.",
                "examples": [
                    "Ул был машинаны ала ала."
                ]
            }
        ],
        "subtext": "йорт алырға мөмкинлеге булырға",
        "classification": "regular",
        "aspect": "stative",
        "v2": "afforded",
        "v3": "ала алған",
        "theme": "shopping",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_015"
    },
    {
        "word": "бурыслы булыу",
        "definitions": [
            {
                "text": "Аҡса бирергә тейеш булыу.",
                "examples": [
                    "Ул миңә бурыслы."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "аҡса бурыслы булырға"
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "owed",
        "v3": "бурыслы булған",
        "theme": "shopping",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_016"
    },
    {
        "word": "эшләп алыу",
        "definitions": [
            {
                "text": "Аҡса эшләү.",
                "examples": [
                    "Ул күп аҡса эшләй."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "хеҙмәт хаҡы алырға",
            "аҡса эшләргә"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "earned",
        "v3": "эшләп алған",
        "theme": "shopping",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_017"
    },
    {
        "word": "барыу",
        "definitions": [
            {
                "text": "Берәй кешегә барыу.",
                "examples": [
                    "Ул ата-әсәһенә барҙы."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ғаиләгә барырға",
            "дуҫ янына барырға"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "visited",
        "v3": "барған",
        "theme": "social",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_015"
    },
    {
        "word": "байрам итеү",
        "definitions": [
            {
                "text": "Байрам яһау.",
                "examples": [
                    "Беҙ тыуған көндө байрам иттек."
                ]
            }
        ],
        "subtext": "тыуған көндө билдәләп үтергә",
        "classification": "regular",
        "aspect": "action",
        "v2": "celebrated",
        "v3": "байрам иткән",
        "theme": "social",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_016"
    },
    {
        "word": "тәҡдим итеү",
        "definitions": [
            {
                "text": "Яҡшы нәмәне кәңәш итеү.",
                "examples": [
                    "Ул был ресторанды тәҡдим итте."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "кәңәш итергә",
            "тәҡдим итергә"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recommended",
        "v3": "тәҡдим иткән",
        "theme": "social",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_017"
    },
    {
        "word": "ауырыу",
        "definitions": [
            {
                "text": "Ауыртыу килтереү.",
                "examples": [
                    "Минең билем ауырта."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "арҡаны ауыртырға",
            "берәүҙе рәнйетергә"
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "hurt",
        "v3": "ауыртҡан",
        "theme": "health_medicine",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_health_medicine_003"
    },
    {
        "word": "ял итеү",
        "definitions": [
            {
                "text": "Эштән һуң ял итеү.",
                "examples": [
                    "Ул ял итә."
                ]
            }
        ],
        "subtext": "эштән һуң ял итергә",
        "synonyms": [
            "өйҙә ял итергә"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rested",
        "v3": "ял иткән",
        "theme": "work",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_031"
    },
    {
        "word": "һауығыу",
        "definitions": [
            {
                "text": "Ауырыуҙан һуң яҡшырыу.",
                "examples": [
                    "Ул һауыҡты."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "һауығырға",
            "тиҙ һауығырға"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recovered",
        "v3": "һауыҡҡан",
        "theme": "health_medicine",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_health_medicine_004"
    },
    {
        "word": "заказ биреү",
        "definitions": [
            {
                "text": "Алдан һаҡлап ҡалдырыу.",
                "examples": [
                    "Ул номер заказ бирҙе."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ҡунаҡхана броньларға",
            "билет броньларға"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "booked",
        "v3": "заказ бирҙе",
        "theme": "travel",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_013"
    },
    {
        "word": "йыйыу",
        "definitions": [
            {
                "text": "Сумкаға нәмәләр йыйыу.",
                "examples": [
                    "Ул сумкахын йыйҙы."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "сумка йыйырға",
            "чемодан йыйырға"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "йыйған",
        "theme": "travel",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_014"
    },
    {
        "word": "бөтөрөү",
        "definitions": [
            {
                "text": "Заказды юҡҡа сығарыу.",
                "examples": [
                    "Ул барыуҙы бөтөрҙө."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "рейсты юҡҡа сығарырға",
            "осрашыуҙы юҡҡа сығарырға"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "бөтөргән",
        "theme": "travel",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_015"
    },
    {
        "word": "һағыныу",
        "definitions": [
            {
                "text": "Берәй кешене һағыныу йәки ваҡытты юғалтыу.",
                "examples": [
                    "Мин һине һағынам."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "поездға һуңға ҡалырға",
            "берәүҙе һағынырға"
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "missed",
        "v3": "һағынған",
        "theme": "travel",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_016"
    },
    {
        "word": "заказ биреү",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "",
        "synonyms": [
            "ризыҡ заказ бирергә",
            "онлайн заказ бирергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмә һорау.",
                "examples": [
                    "Ул аш заказ бирҙе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ordered",
        "v3": "заказ бирҙе",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_032"
    },
    {
        "word": "аңлатыу",
        "level": "starter",
        "theme": "work",
        "emoji": "💡",
        "subtext": "",
        "synonyms": [
            "процесты аңлатырға",
            "асыҡ аңлатырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Мәғәнәһен төшөндөрөү.",
                "examples": [
                    "Ул ҡағиҙәне аңлатты."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "explained",
        "v3": "аңлатҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_033"
    },
    {
        "word": "рәхмәт әйтеү",
        "level": "starter",
        "theme": "social",
        "emoji": "🙏",
        "subtext": "",
        "synonyms": [
            "рәхмәт әйтергә",
            "рәхмәт һеҙгә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Рәхмәт белдереү.",
                "examples": [
                    "Ул рәхмәт әйтте."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "thanked",
        "v3": "рәхмәт әйтте",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_018"
    },
    {
        "word": "таныштырыу",
        "level": "starter",
        "theme": "social",
        "emoji": "🤝",
        "subtext": "",
        "synonyms": [
            "таныштырырға",
            "үҙеңде тәҡдим итергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Яңы кеше менән таныштырыу.",
                "examples": [
                    "Ул дуҫын таныштырҙы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "introduced",
        "v3": "таныштырған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_019"
    },
    {
        "word": "ял итеү",
        "level": "starter",
        "theme": "social",
        "emoji": "🧘",
        "subtext": "",
        "synonyms": [
            "өйҙә ял итергә",
            "ял итергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Тынысланыу.",
                "examples": [
                    "Ул ял итә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "relaxed",
        "v3": "ял иткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_020"
    },
    {
        "word": "төҙөтеү",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛠️",
        "subtext": "",
        "synonyms": [
            "төҙәтергә",
            "ремонтлау"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ватылған нәмәне рәтләү.",
                "examples": [
                    "Ул машинаһын төҙөтә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repaired",
        "v3": "төҙөткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_furniture_005"
    },
    {
        "word": "булыу",
        "level": "starter",
        "theme": "social",
        "emoji": "❔",
        "subtext": "",
        "synonyms": [
            "нәрсә булды",
            "булып алырға",
            "шулай була"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндәйҙер ваҡиға булыу.",
                "examples": [
                    "Ни булды?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "happened",
        "v3": "булған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_021"
    },
    {
        "word": "тойола",
        "level": "starter",
        "theme": "social",
        "emoji": "🎭",
        "subtext": "",
        "synonyms": [
            "яхшы булып күренергә",
            "шат булып күренергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Күренеү.",
                "examples": [
                    "Был яҡшы тойола."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "seemed",
        "v3": "тойолған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_022"
    },
    {
        "word": "аңлата",
        "level": "starter",
        "theme": "school",
        "emoji": "❔",
        "subtext": "бу нәмә аңлата",
        "synonyms": [
            "нәрсәлер аңлатырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Мәғәнәгә эйә булыу.",
                "examples": [
                    "Был һүҙ ни аңлата?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "meant",
        "v3": "аңлатҡан",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_school_013"
    },
    {
        "word": "этеү",
        "level": "starter",
        "theme": "work",
        "emoji": "👣",
        "subtext": "",
        "synonyms": [
            "инструкцияларға эйәрергә",
            "яңылыҡтарҙы күҙәтергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Артынан барыу.",
                "examples": [
                    "Ул минең артымдан килә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "followed",
        "v3": "этеү",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_034"
    },
    {
        "word": "дауам итеү",
        "level": "starter",
        "theme": "school",
        "emoji": "⏩",
        "subtext": "",
        "synonyms": [
            "эште дауам итергә",
            "дауам итергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Туҡтамай эшләү.",
                "examples": [
                    "Ул эшен дауам итә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "continued",
        "v3": "дауам иткән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_school_014"
    },
    {
        "word": "үҫеү",
        "level": "starter",
        "theme": "work",
        "emoji": "📈",
        "subtext": "",
        "synonyms": [
            "бизнес үҫтерергә",
            "тиҙ үҫергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ҙурайыу.",
                "examples": [
                    "Бала үҫә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "grew",
        "v3": "үҫкән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_035"
    },
    {
        "word": "үҙ эсенә алыу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "➕",
        "subtext": "",
        "synonyms": [
            "үҙ эсенә алырға",
            "индерергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәнең составында булыу.",
                "examples": [
                    "Был үҙ эсенә ашты ала."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "included",
        "v3": "алған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_018"
    },
    {
        "word": "булыу",
        "level": "starter",
        "theme": "work",
        "emoji": "✨",
        "subtext": "",
        "synonyms": [
            "менеджер булып китергә",
            "танылыу алырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндәйҙер хәлгә килеү.",
                "examples": [
                    "Ул директор булды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "became",
        "v3": "булған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_036"
    },
    {
        "word": "ҡарау",
        "level": "starter",
        "theme": "work",
        "emoji": "📎",
        "subtext": "",
        "synonyms": [
            "берәүгә ҡарарға",
            "тейешле урында булырға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәй нәмәнең милке булыу.",
                "examples": [
                    "Был китап миңә ҡарай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "belonged",
        "v3": "ҡараған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_037"
    },
    {
        "word": "һайлау",
        "level": "starter",
        "theme": "social",
        "emoji": "👉",
        "subtext": "",
        "synonyms": [
            "һайларға",
            "эшләргә һайларға",
            "иғтибар менән һайларға"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Бер нисә нәмәнән алыу.",
                "examples": [
                    "Ул китап һайланы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "chose",
        "v3": "һайлаған",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_social_023"
    },
    {
        "word": "төҙөү",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "",
        "synonyms": [
            "карьера төҙөргә",
            "команда төҙөргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Йорт йәки бина һалыу.",
                "examples": [
                    "Улар йорт төҙөй."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "built",
        "v3": "төҙөгән",
        "group": "vowel",
        "auxiliary": "ине",
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_work_038"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
