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
        "group": "irregular"
    },
    {
        "word": "эйә булыу",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "эшле булырға / төшке аш ашарға / проблема булырға / вакыт булырға",
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
        "group": "regular"
    },
    {
        "word": "тойоу",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "арып хис итергә / яҡшыраҡ хис итергә / ауырыу хис итергә",
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
        "group": "regular"
    },
    {
        "word": "биреү",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "кәңәш бирергә / аҡса бирергә / бүләк бирергә",
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
        "group": "regular"
    },
    {
        "word": "алыу",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "автобусҡа ултырырға / дарыу алырға / тәнәфес яһарға",
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
        "group": "regular"
    },
    {
        "word": "алыу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "эшкә урынлашырға / арырға / терелергә / өйгә ҡайтып йәтергә",
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
        "group": "regular"
    },
    {
        "word": "һалыу",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "put on / put away / put the phone down / put money aside",
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
        "group": "regular"
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "кофе яһарға / ҡарар ҡабул итергә / хата яһарға / аҡса эшләргә",
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
        "group": "regular"
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "эшләргә / кибеткә барырға / күнегеүҙәр яһарға / бер ни эшләмәҫкә",
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
        "group": "regular"
    },
    {
        "word": "ҡулланыу",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🛠️",
        "subtext": "телефон ҡулланырға / транспорт ҡулланырға / компьютер ҡулланырға",
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
        "group": "regular"
    },
    {
        "word": "асыу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "ишек асырға / хисап асырға / кибет асырға",
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
        "group": "regular"
    },
    {
        "word": "ябыу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "ишек ябырға / алтыла ябылырға / йыйылышты тамамларға",
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
        "group": "regular"
    },
    {
        "word": "башлау",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "эш башларға / йыйылыш башларға / яңы эш башларға",
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
        "group": "regular"
    },
    {
        "word": "тамамлау",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "эште тамамларға / проектты тамамларға / иртә тамамларға",
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
        "group": "regular"
    },
    {
        "word": "ярҙам итеү",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "берәүгә ярҙам итергә / ярҙам һорарға",
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
        "group": "regular"
    },
    {
        "word": "тырышыу",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "эшләп ҡарарға / тырышырға / яңы нәмәне һынап ҡарарға",
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
        "group": "regular"
    },
    {
        "word": "күрһәтеү",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "күрһәтергә / документты күрһәтергә / ҡызыҡһыныу күрһәтергә",
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
        "group": "regular"
    },
    {
        "word": "табыу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "эш табырға / белергә / ауыр тип табырға / вакыт табырға",
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
        "group": "regular"
    },
    {
        "word": "һаҡлау",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "keep going / keep quiet / keep a record / keep in touch",
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
        "group": "regular"
    },
    {
        "word": "юғалтыу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "lose a job / lose money / lose weight / lose time",
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
        "group": "regular"
    },
    {
        "word": "киҫеү",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "cut costs / cut spending / cut short / cut in half",
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
        "group": "regular"
    },
    {
        "word": "бороу",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "turn on / turn off / turn left / turn right",
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
        "group": "regular"
    },
    {
        "word": "килтереү",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🎁",
        "subtext": "bring someone / bring food / bring a document / bring up",
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
        "group": "regular"
    },
    {
        "word": "әйтеү",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗨️",
        "subtext": "исәнләшергә / эйе тиергә / юк тиергә / берәр нәмә әйтергә",
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
        "group": "regular"
    },
    {
        "word": "һөйләү",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "дөрөҫөн әйтергә / һөйләргә / хикәйә һөйләргә",
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
        "group": "regular"
    },
    {
        "word": "һорау",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "һорау бирергә / ярҙам һорарға / нәмә тураһындалыр һорарға",
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
        "group": "regular"
    },
    {
        "word": "һөйләшеү",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "һөйләшергә / инглизсә һөйләшергә / асыҡ һөйләргә",
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
        "group": "regular"
    },
    {
        "word": "һөйләшеү",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "💬",
        "subtext": "кем менән дә һөйләшергә / асыҡ һөйләшергә",
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
        "group": "regular"
    },
    {
        "word": "шыңғыртыу",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
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
        "group": "regular"
    },
    {
        "word": "яҙыу",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "хат яҙырға / отчет яҙырға / яҙмалар яһарға",
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
        "group": "regular"
    },
    {
        "word": "уҡыу",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "китап уҡырға / яңылыҡтар уҡырға / контракт уҡырға",
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
        "group": "regular"
    },
    {
        "word": "тыңлау",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "музыка тыңларға / иғтибар менән тыңларға",
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
        "group": "regular"
    },
    {
        "word": "яуап биреү",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "answer a question / answer the phone / answer an email",
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
        "group": "regular"
    },
    {
        "word": "ҡабатлау",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "repeat that / repeat yourself / repeat an order",
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
        "group": "regular"
    },
    {
        "word": "барыу",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "эшкә барырға / өйгә барырға / урамға сығырға / кибеткә барырға",
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
        "group": "regular"
    },
    {
        "word": "килеү",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "өйгә ҡайтырға / эшкә килергә / кире ҡайтырға",
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
        "group": "regular"
    },
    {
        "word": "йәйәү йөрөү",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "эшкә йәйәү барырға / өйгә барырға / аҡрын барырға",
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
        "group": "regular"
    },
    {
        "word": "машина йөрөтөү",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "машинала эшкә барырға / машина йөрөтөргә",
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
        "group": "regular"
    },
    {
        "word": "осоу",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "ҡалаға օչոռға / бизнес класс менән օչոռға",
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
        "group": "regular"
    },
    {
        "word": "килеп етеү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "arrive at work / arrive late / arrive on time / arrive home",
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
        "group": "regular"
    },
    {
        "word": "китеү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "leave home / leave work / leave early / leave late",
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
        "group": "regular"
    },
    {
        "word": "күсеү",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "яңы урынға күсенергә / күсенергә",
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
        "group": "regular"
    },
    {
        "word": "ҡайтыу",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "өйгә ҡайтырға / эшкә ҡайтырға / кире шалтыратырға",
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
        "group": "regular"
    },
    {
        "word": "сәйәхәт итеү",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "travel for work / travel abroad / travel by train",
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
        "group": "regular"
    },
    {
        "word": "ашау",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "иртәнге аш ашарға / төшке аш ашарға / киске аш ашарға",
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
        "group": "regular"
    },
    {
        "word": "эсеү",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "кофе эсергә / сәй эсергә / һыу эсергә / һыра эсергә",
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
        "group": "regular"
    },
    {
        "word": "йоҡлау",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
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
        "group": "regular"
    },
    {
        "word": "аш бешереү",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cook dinner / cook a meal / cook at home / cook for someone",
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
        "group": "regular"
    },
    {
        "word": "таҙартыу",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "clean the flat / clean the kitchen / clean up / clean regularly",
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
        "group": "regular"
    },
    {
        "word": "кейеү",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "wear a suit / wear glasses / wear casual clothes",
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
        "group": "regular"
    },
    {
        "word": "йыуыу",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "wash the dishes / wash clothes / wash your hands",
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
        "group": "regular"
    },
    {
        "word": "һатып алыу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "buy food / buy a ticket / buy online / buy a house",
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
        "group": "regular"
    },
    {
        "word": "түләү",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "pay a bill / pay rent / pay by card / pay in cash",
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
        "group": "regular"
    },
    {
        "word": "тотоноу",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "spend money / spend on food / spend on rent / spend time",
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
        "group": "regular"
    },
    {
        "word": "һаҡлау",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "save money / save for a holiday / save for a house",
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
        "group": "regular"
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "өйҙән эшләргә / тулы көн эшләргә / тырышып эшләргә",
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
        "group": "regular"
    },
    {
        "word": "йәшәү",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "фатирҙа йәшәргә / ялғыҙ йәшәргә / сит илдәрҙә йәшәргә",
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
        "group": "regular"
    },
    {
        "word": "уйлау",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "уйларға / уйлап ҡарарға / җентекләп уйларға",
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
        "group": "regular"
    },
    {
        "word": "белеү",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "танырға / яуапты белергә / урынды белергә",
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
        "group": "regular"
    },
    {
        "word": "теләү",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🙏",
        "subtext": "эш теләргә / китергә теләргә / күберәк аҡса теләргә",
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
        "group": "regular"
    },
    {
        "word": "кәрәк булыу",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "ярҙам кәрәк булырға / вакыт кәрәк булырға / ял кәрәк булырға",
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
        "group": "regular"
    },
    {
        "word": "ошатыу",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "эште ошатырға / сәйәхәт итергә ошатырға / идеяны ошатырға",
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
        "group": "regular"
    },
    {
        "word": "яратыу",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "берәүҙе яратырға / эшләргә яратырға",
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
        "group": "regular"
    },
    {
        "word": "нәфрәт итеү",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😡",
        "subtext": "эшләргә яратмаҫҡа / берәүҙе күралмаҫҡа",
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
        "group": "regular"
    },
    {
        "word": "өмит итеү",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "өмөтләнергә / өмөт итәм",
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
        "group": "regular"
    },
    {
        "word": "хәтерләү",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "эшләргә хәтерләргә / исемде хәтерләргә",
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
        "group": "regular"
    },
    {
        "word": "онотоу",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "исемде юғалтырға / эшләргә юғалтырға",
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
        "group": "regular"
    },
    {
        "word": "аңлау",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💡",
        "subtext": "проблеманы аңларға / берәүҙе аңларға",
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
        "group": "regular"
    },
    {
        "word": "ҡарар итеү",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "эшләргә ҡарар ҡылырға / ҡарар ҡабул итергә",
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
        "group": "regular"
    },
    {
        "word": "ләззәт алыу",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "эшләүҙән ләззәт алырға / тормоштан ләззәт алырға",
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
        "group": "regular"
    },
    {
        "word": "күреү",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "табибты күрергә / дуҫтарҙы күрергә",
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
        "group": "regular"
    },
    {
        "word": "ишетеү",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "яңылыҡтар ишетергә / берәүҙән ишетергә",
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
        "group": "regular"
    },
    {
        "word": "уяныу",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "иртә уянырға / һуң уянырға / арып уянырға",
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
        "group": "regular"
    },
    {
        "word": "ҡарау",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "ТВ ҡарарға / фильм ҡарарға / яңылыҡтар ҡарарға",
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
        "group": "regular"
    },
    {
        "word": "ҡарау",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "ҡарарға / эҙләргә / оҡшарға",
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
        "group": "regular"
    },
    {
        "word": "уйнау",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "спорт менән шөғөлләнергә / уйын уйнарға",
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
        "group": "regular"
    },
    {
        "word": "йүгереү",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "йүгерергә / бизнес алып барырға / һуңға ҡалырға",
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
        "group": "regular"
    },
    {
        "word": "олтороу",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "ултырырға / өҫтәл артына ултырырға",
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
        "group": "regular"
    },
    {
        "word": "тороу",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "баҫырға / чиратта баҫып торорға",
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
        "group": "regular"
    },
    {
        "word": "осрашыу",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "subtext": "клиент менән осрашырға / коллега менән осрашырға",
        "group": "regular"
    },
    {
        "word": "өйрәнеү",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "тел өйрәнергә / һөнәр өйрәнергә",
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
        "group": "regular"
    },
    {
        "word": "үҙгәртеү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "эште алыштырырға / уйҙы үҙгәртергә",
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
        "group": "regular"
    },
    {
        "word": "туҡтау",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "туҡтарға / эште туҡтатырға",
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
        "group": "regular"
    },
    {
        "word": "өҫтәү",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "шикәр өҫтәргә / өҫтәргә / комментарий өҫтәргә",
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
        "group": "regular"
    },
    {
        "word": "еңеү",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "уйында еңергә / приз алырға",
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
        "group": "regular"
    },
    {
        "word": "көтөү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "берәүҙе көтөргә / чиратта көтөргә",
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
        "group": "regular"
    },
    {
        "word": "үлеү",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "үлергә / һәләк булырға",
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
        "group": "regular"
    },
    {
        "word": "ебәреү",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "subtext": "хат ебәрергә / хәбәр ебәрергә",
        "group": "regular"
    },
    {
        "word": "ҡалыу",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "өйҙә ҡалырға / ҡунаҡханала ҡалырға",
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
        "group": "regular"
    },
    {
        "word": "йығылыу",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "йығылырға / ғашиҡ булырға / йоҡлап китергә",
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
        "group": "regular"
    },
    {
        "word": "үтеү",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "имтихан тапшырырға / тупты биреү / ваҡыт уҙҙырыу",
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
        "group": "regular"
    },
    {
        "word": "һатыу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "товар һатырға / онлайн һатырға",
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
        "group": "regular"
    },
    {
        "word": "тартыу",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "ишекте тартырға / нәрсәнелер тартырға",
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
        "group": "regular"
    },
    {
        "word": "этәреү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "төймәгә баҫырға / этәргә",
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
        "group": "regular"
    },
    {
        "word": "ташыу",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "сумка күтәреп барырға / үтәргә",
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
        "group": "regular"
    },
    {
        "word": "һыныу",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "быяла ватырға / законды боҙорға / тәнәфес яһарға",
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
        "group": "regular"
    },
    {
        "word": "алыу",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "хат алырға / бүләк алырға / түләү алырға",
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
        "group": "regular"
    },
    {
        "word": "риза булыу",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "берәү менән килешергә / килешәм",
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
        "group": "regular"
    },
    {
        "word": "һүрәт төшөрөү",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "рәсем яһарға / нәтижә яһарға",
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
        "group": "regular"
    },
    {
        "word": "бүлешеү",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "бүлмәлә йәшәргә / мәғлүмәт менән бүлешергә",
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
        "group": "regular"
    },
    {
        "word": "елмәйеү",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "елмайырға / берәүгә елмайырға",
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
        "group": "regular"
    },
    {
        "word": "илау",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "ярҙамға саҡырырға / ҡысҡырырға / илап ебәрергә",
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
        "group": "regular"
    },
    {
        "word": "бейеү",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "музыкаға бейергә / бейергә барырға",
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
        "group": "regular"
    },
    {
        "word": "йырлау",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "йыр йырларға / ҡушылып йырларға",
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
        "group": "regular"
    },
    {
        "word": "һикереү",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "бейеккә һикерергә / аша һикерергә",
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
        "group": "regular"
    },
    {
        "word": "йөҙөү",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "йөҙөргә барырға / йөҙөргә",
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
        "group": "regular"
    },
    {
        "word": "өйрәнеү",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "инглизсә өйрәнергә / имтиханға әҙерләнергә",
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
        "group": "regular"
    },
    {
        "word": "уҡытыу",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "өйрәтергә / предметты өйрәтергә",
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
        "group": "regular"
    },
    {
        "word": "эшкә йөрөү",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "эшкә барып ҡайтырға / поезда барырға",
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
        "group": "regular"
    },
    {
        "word": "ҡуртымға алыу",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "фатир арендаларға / бүлмә арендаға бирергә",
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
        "group": "regular"
    },
    {
        "word": "күнегеүҙәр эшләү",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "subtext": "күнегеүҙәр яһарға / спортзал барырға",
        "group": "regular"
    },
    {
        "word": "тора",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "subtext": "ҡыйбат торорға / аҡса торорға",
        "group": "regular"
    },
    {
        "word": "саҡырыу",
        "level": "starter",
        "theme": "family_life_A1",
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
        "subtext": "берәүҙе саҡырырға / төшке ашҡа саҡырырға",
        "group": "regular"
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
        "subtext": "иртә торорға / тиҙ торорға",
        "classification": "regular",
        "aspect": "action",
        "v2": "got up",
        "v3": "торған",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "өйгә ҡайтырға / һуң ҡайтырға",
        "classification": "regular",
        "aspect": "action",
        "v2": "came back",
        "v3": "ҡайтҡан",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "иртә йоҡларға ятырға / һуң ятырға",
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "ятҡан",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "хаттарҙы тикшерергә / ваҡытты тикшерергә",
        "classification": "regular",
        "aspect": "action",
        "v2": "checked",
        "v3": "тикшергән",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "хатҡа яуապ бирергә / тиҙ яуապ бирергә",
        "classification": "regular",
        "aspect": "action",
        "v2": "replied",
        "v3": "яуап бирҙе",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "отчет тәҡдим итергә / идеялар тәҡдим итергә",
        "classification": "regular",
        "aspect": "action",
        "v2": "presented",
        "v3": "тәҡдим иткән",
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "йыйылышта булырға / курска барырға",
        "classification": "regular",
        "aspect": "action",
        "v2": "attended",
        "v3": "ҡатнашҡан",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "түләү алырға / хеҙмәт өсөн түләү",
        "classification": "regular",
        "aspect": "action",
        "v2": "charged",
        "v3": "алған",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "аҡса бурыслы булырға",
        "classification": "regular",
        "aspect": "stative",
        "v2": "owed",
        "v3": "бурыслы булған",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "хеҙмәт хаҡы алырға / аҡса эшләргә",
        "classification": "regular",
        "aspect": "action",
        "v2": "earned",
        "v3": "эшләп алған",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "ғаиләгә барырға / дуҫ янына барырға",
        "classification": "regular",
        "aspect": "action",
        "v2": "visited",
        "v3": "барған",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "кәңәш итергә / тәҡдим итергә",
        "classification": "regular",
        "aspect": "action",
        "v2": "recommended",
        "v3": "тәҡдим иткән",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "арҡаны ауыртырға / берәүҙе рәнйетергә",
        "classification": "regular",
        "aspect": "both",
        "v2": "hurt",
        "v3": "ауыртҡан",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "өйҙә ял итергә / эштән һуң ял итергә",
        "classification": "regular",
        "aspect": "action",
        "v2": "rested",
        "v3": "ял иткән",
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "һауығырға / тиҙ һауығырға",
        "classification": "regular",
        "aspect": "action",
        "v2": "recovered",
        "v3": "һауыҡҡан",
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "ҡунаҡхана броньларға / билет броньларға",
        "classification": "regular",
        "aspect": "action",
        "v2": "booked",
        "v3": "заказ бирҙе",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "сумка йыйырға / чемодан йыйырға",
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "йыйған",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "рейсты юҡҡа сығарырға / осрашыуҙы юҡҡа сығарырға",
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "бөтөргән",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "поездға һуңға ҡалырға / берәүҙе һағынырға",
        "classification": "regular",
        "aspect": "both",
        "v2": "missed",
        "v3": "һағынған",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "заказ биреү",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "ризыҡ заказ бирергә / онлайн заказ бирергә",
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
        "group": "regular"
    },
    {
        "word": "аңлатыу",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💡",
        "subtext": "процесты аңлатырға / асыҡ аңлатырға",
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
        "group": "regular"
    },
    {
        "word": "рәхмәт әйтеү",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "рәхмәт әйтергә / рәхмәт һеҙгә",
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
        "group": "regular"
    },
    {
        "word": "таныштырыу",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "таныштырырға / үҙеңде тәҡдим итергә",
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
        "group": "regular"
    },
    {
        "word": "ял итеү",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "өйҙә ял итергә / ял итергә",
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
        "group": "regular"
    },
    {
        "word": "төҙөтеү",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "төҙәтергә / ремонтлау",
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
        "group": "regular"
    },
    {
        "word": "булыу",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "нәрсә булды / булып алырға / шулай була",
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
        "group": "regular"
    },
    {
        "word": "тойола",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🎭",
        "subtext": "яхшы булып күренергә / шат булып күренергә",
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
        "group": "regular"
    },
    {
        "word": "аңлата",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "нәрсәлер аңлатырға / бу нәмә аңлата",
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
        "group": "regular"
    },
    {
        "word": "этеү",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "инструкцияларға эйәрергә / яңылыҡтарҙы күҙәтергә",
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
        "group": "regular"
    },
    {
        "word": "дауам итеү",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "эште дауам итергә / дауам итергә",
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
        "group": "regular"
    },
    {
        "word": "үҫеү",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "бизнес үҫтерергә / тиҙ үҫергә",
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
        "group": "regular"
    },
    {
        "word": "үҙ эсенә алыу",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "үҙ эсенә алырға / инդергә",
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
        "group": "regular"
    },
    {
        "word": "булыу",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "менеджер булып китергә / танылыу алырға",
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
        "group": "regular"
    },
    {
        "word": "ҡарау",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "берәүгә ҡарарға / тейешле урында булырға",
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
        "group": "regular"
    },
    {
        "word": "һайлау",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "һайларға / эшләргә һайларға / иғтиբар менән һайларға",
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
        "group": "regular"
    },
    {
        "word": "төҙөү",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "карьера төҙөргә / команда төҙөргә",
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
        "group": "regular"
    }
];
    const lang = "ba";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();