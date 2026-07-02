// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "булыу",
        "level": "starter",
        "theme": "name_greeting_A1",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "алыу",
        "oppositeEmoji": "👜",
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
        "auxiliary": "ине"
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
        "opposite": "биреү",
        "oppositeEmoji": "🎁",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
    },
    {
        "word": "һалыу",
        "level": "starter",
        "theme": "furniture_objects_A1",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "ябыу",
        "oppositeEmoji": "🔒",
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
        "auxiliary": "ине"
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
        "opposite": "асыу",
        "oppositeEmoji": "📖",
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
        "auxiliary": "ине"
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
        "opposite": "тамамлау",
        "oppositeEmoji": "🏁",
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
        "auxiliary": "ине"
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
        "opposite": "башлау",
        "oppositeEmoji": "▶️",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "еңеү",
        "oppositeEmoji": "🏆",
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
        "auxiliary": "ине"
    },
    {
        "word": "киҫеү",
        "level": "starter",
        "theme": "cooking_methods_A1",
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
        "auxiliary": "ине"
    },
    {
        "word": "бороу",
        "level": "starter",
        "theme": "directions_navigation_A1",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
    },
    {
        "word": "әйтеү",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
    },
    {
        "word": "һөйләшеү",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "уҡыу",
        "oppositeEmoji": "📖",
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
        "auxiliary": "ине"
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
        "opposite": "яҙыу",
        "oppositeEmoji": "✍️",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
    },
    {
        "word": "ҡабатлау",
        "level": "starter",
        "theme": "classroom_language_A1",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "барыу",
        "oppositeEmoji": "🚶",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
    },
    {
        "word": "сәйәхәт итеү",
        "level": "starter",
        "theme": "public_transport_A1",
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
        "auxiliary": "ине"
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
        "opposite": "эсеү",
        "oppositeEmoji": "🥛",
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
        "auxiliary": "ине"
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
        "opposite": "ашау",
        "oppositeEmoji": "🍎",
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
        "auxiliary": "ине"
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
        "opposite": "уяныу",
        "oppositeEmoji": "⏰",
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
        "auxiliary": "ине"
    },
    {
        "word": "аш бешереү",
        "level": "starter",
        "theme": "cooking_methods_A1",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "һатыу",
        "oppositeEmoji": "🏷️",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "тотоноу",
        "oppositeEmoji": "💸",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "үлеү",
        "oppositeEmoji": "⚰️",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "йоҡлау",
        "oppositeEmoji": "😴",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "тороу",
        "oppositeEmoji": "🧍",
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
        "auxiliary": "ине"
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
        "opposite": "олтороу",
        "oppositeEmoji": "🪑",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "юғалтыу",
        "oppositeEmoji": "📉",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "йәшәү",
        "oppositeEmoji": "🏠",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "һатып алыу",
        "oppositeEmoji": "🛒",
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
        "auxiliary": "ине"
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
        "opposite": "этәреү",
        "oppositeEmoji": "🛒",
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
        "auxiliary": "ине"
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
        "opposite": "тартыу",
        "oppositeEmoji": "🚜",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
    },
    {
        "word": "һүрәт төшөрөү",
        "level": "starter",
        "theme": "cinema_film_A1",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "opposite": "илау",
        "oppositeEmoji": "😢",
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
        "auxiliary": "ине"
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
        "opposite": "елмәйеү",
        "oppositeEmoji": "😊",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
    },
    {
        "word": "эшкә йөрөү",
        "level": "starter",
        "theme": "public_transport_A1",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
    },
    {
        "word": "рәхмәт әйтеү",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "auxiliary": "ине"
    },
    {
        "word": "таныштырыу",
        "level": "starter",
        "theme": "name_greeting_A1",
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
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
        "auxiliary": "ине"
    }
];
    const lang = "ba";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();