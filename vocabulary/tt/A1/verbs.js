// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "булу",
        "level": "starter",
        "theme": "social",
        "emoji": "👤",
        "subtext": "арган булу / бәхетле булу / эштә булу / әзер булу",
        "form": "verb",
        "definitions": [
            {
                "text": "Бар булу, ниндидер хәлдә булу.",
                "examples": [
                    "Мин арыган идем.",
                    "Ул табиб.",
                    "Без соңга калдык."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": null,
        "v3": "булган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_001"
    },
    {
        "word": "ия булу",
        "level": "starter",
        "theme": "work",
        "emoji": "👜",
        "subtext": "",
        "synonyms": [
            "эшле булырга",
            "төшке аш ашарга",
            "проблема булырга",
            "вакыт булырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндидер нәрсәгә хуҗа булу.",
                "examples": [
                    "Минем эшем бар.",
                    "Аның машинасы бар."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "had",
        "v3": "ия булган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_001"
    },
    {
        "word": "тою",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🌡️",
        "subtext": "",
        "synonyms": [
            "арган хис итәргә",
            "яхшырак хис итәргә",
            "авыру хис итәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндидер хәлне яки хис-тойгыны кичерү.",
                "examples": [
                    "Ул үзен арыган итеп тоя."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "felt",
        "v3": "тойган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_health_medicine_001"
    },
    {
        "word": "бирү",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "subtext": "",
        "synonyms": [
            "киңәш бирергә",
            "акча бирергә",
            "бүләк бирергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне икенче кешегә тапшыру.",
                "examples": [
                    "Ул миңа күп эш бирә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "gave",
        "v3": "биргән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "алу"
        ],
        "transcription": "",
        "id": "tt_starter_shopping_001"
    },
    {
        "word": "алу",
        "level": "starter",
        "theme": "travel",
        "emoji": "👜",
        "subtext": "",
        "synonyms": [
            "автобуска утырырга",
            "дару алырга",
            "тәнәфес ясарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне тоту яки куллану.",
                "examples": [
                    "Мин эшкә автобус белән барам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "took",
        "v3": "алган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "бирү"
        ],
        "transcription": "",
        "id": "tt_starter_travel_001"
    },
    {
        "word": "алу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📥",
        "subtext": "",
        "synonyms": [
            "эшкә урнашырга",
            "арырга",
            "терелергә",
            "өйгә кайтып җитәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне кабул итү яки хуҗа булу.",
                "examples": [
                    "Мин яхшы эш хакы алам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "got",
        "v3": "алган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_002"
    },
    {
        "word": "салу",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📥",
        "subtext": "",
        "synonyms": [
            "кияргә",
            "җыярга",
            "акча җыярга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне билгеле бер урынга кую.",
                "examples": [
                    "Сумкаңны монда сал."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "put",
        "v3": "салган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_furniture_001"
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "",
        "synonyms": [
            "кофе ясарга",
            "карар кабул итәргә",
            "хата ясарга",
            "акча эшләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне булдыру яки чыгару.",
                "examples": [
                    "Мин иртән кофе ясыйм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "made",
        "v3": "эшләгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_002"
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "work",
        "emoji": "🛠️",
        "subtext": "",
        "synonyms": [
            "эшләргә",
            "кибеткә барырга",
            "күнегүләр ясарга",
            "берни эшләмәскә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндидер эш-хәрәкәт башкару.",
                "examples": [
                    "Мин һәр көн эшлим."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "эшләгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_003"
    },
    {
        "word": "куллану",
        "level": "starter",
        "theme": "technology",
        "emoji": "🛠️",
        "subtext": "",
        "synonyms": [
            "телефон кулланырга",
            "транспорт кулланырга",
            "компьютер кулланырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне ниндидер максатта файдалану.",
                "examples": [
                    "Мин телефонымны һәрнәрсә өчен кулланам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "кулланган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_technology_001"
    },
    {
        "word": "ачу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "subtext": "",
        "synonyms": [
            "ишек ачарга",
            "хисап ачарга",
            "кибет ачарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ябык нәрсәне ачу.",
                "examples": [
                    "Ул офисны иртәнге сәгать сигездә ача."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "opened",
        "v3": "ачкан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "ябу"
        ],
        "transcription": "",
        "id": "tt_starter_shopping_003"
    },
    {
        "word": "ябу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "subtext": "",
        "synonyms": [
            "ишек ябарга",
            "алтыда ябылырга",
            "җыелышны тәмамларга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ачык нәрсәне ябу.",
                "examples": [
                    "Офис алтыда ябыла."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "closed",
        "v3": "япкан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "ачу"
        ],
        "transcription": "",
        "id": "tt_starter_shopping_004"
    },
    {
        "word": "башлау",
        "level": "starter",
        "theme": "work",
        "emoji": "▶️",
        "subtext": "",
        "synonyms": [
            "эш башларга",
            "җыелыш башларга",
            "яңа эш башларга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр эшне башлап җибәрү.",
                "examples": [
                    "Мин эшкә сигез тулганда башлыйм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "started",
        "v3": "башлаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "тәмамлау"
        ],
        "transcription": "",
        "id": "tt_starter_work_004"
    },
    {
        "word": "тәмамлау",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "",
        "synonyms": [
            "эшне тәмамларга",
            "проектны тәмамларга",
            "иртә тәмамларга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне бетерү.",
                "examples": [
                    "Ул эшен биштә тәмамлый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "finished",
        "v3": "тәмамлаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "башлау"
        ],
        "transcription": "",
        "id": "tt_starter_work_005"
    },
    {
        "word": "ярдәм итү",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "subtext": "",
        "synonyms": [
            "берәүгә ярдәм итәргә",
            "ярдәм сорарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр кешегә икенче нәрсәне эшләргә булышу.",
                "examples": [
                    "Ул яңа хезмәттәшләренә ярдәм итә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "helped",
        "v3": "ярдәм иткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_006"
    },
    {
        "word": "тырышу",
        "level": "starter",
        "theme": "school",
        "emoji": "🎯",
        "subtext": "яңа нәрсәне сынап карарга",
        "synonyms": [
            "эшләп карарга",
            "тырышырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне эшләргә маташу.",
                "examples": [
                    "Мин һәрвакыт җавап бирергә тырышам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tried",
        "v3": "тырышкан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_school_001"
    },
    {
        "word": "күрсәтү",
        "level": "starter",
        "theme": "language",
        "emoji": "📽️",
        "subtext": "",
        "synonyms": [
            "күрсәтергә",
            "документны күрсәтергә",
            "кызыксыну күрсәтергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне башкаларга күрергә мөмкинлек бирү.",
                "examples": [
                    "Сез миңа системаның ничек эшләгәнен күрсәтә аласызмы?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "showed",
        "v3": "күрсәткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_language_001"
    },
    {
        "word": "табу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔍",
        "subtext": "",
        "synonyms": [
            "эш табарга",
            "белергә",
            "авыр дип табарга",
            "вакыт табарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне эзләп табу.",
                "examples": [
                    "Мин яңа эш таптым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "found",
        "v3": "тапкан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_005"
    },
    {
        "word": "саклау",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "",
        "synonyms": [
            "дәвам итәргә",
            "тыныч булырга",
            "элемтәдә торырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне үзеңдә калдыру.",
                "examples": [
                    "Чекны саклагыз."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "kept",
        "v3": "саклаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_007"
    },
    {
        "word": "югалту",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📉",
        "subtext": "",
        "synonyms": [
            "эшне югалтырга",
            "акча югалтырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәгә хуҗа булудан туктау.",
                "examples": [
                    "Мин ачкычларымны югалттым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "lost",
        "v3": "югалткан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "җиңү"
        ],
        "transcription": "",
        "id": "tt_starter_shopping_006"
    },
    {
        "word": "кисү",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "subtext": "",
        "synonyms": [
            "чыгымнарны кыскарту"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне үткер нәрсә белән бүлү.",
                "examples": [
                    "Ул икмәкне кисә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cut",
        "v3": "кискән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_food_drink_001"
    },
    {
        "word": "бору",
        "level": "starter",
        "theme": "travel",
        "emoji": "🔄",
        "subtext": "",
        "synonyms": [
            "кабызырга",
            "сүндерергә",
            "сулга борылырга",
            "уңга борылырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр юнәлешкә борылу.",
                "examples": [
                    "Офис янында сулга борылыгыз."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned",
        "v3": "борган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_002"
    },
    {
        "word": "китерү",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🎁",
        "subtext": "",
        "synonyms": [
            "алып килергә",
            "ризык алып килергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне үзең белән алып килү.",
                "examples": [
                    "Эшкә үзең белән төшке аш китер."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "brought",
        "v3": "китергән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_food_drink_002"
    },
    {
        "word": "әйтү",
        "level": "starter",
        "theme": "social",
        "emoji": "🗨️",
        "subtext": "",
        "synonyms": [
            "исәнләшергә",
            "әйе дияргә",
            "юк дияргә",
            "берәр нәрсә әйтергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне сүз белән белдерү.",
                "examples": [
                    "Ул һәр иртә саумы дип әйтә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "said",
        "v3": "әйткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_002"
    },
    {
        "word": "сөйләү",
        "level": "starter",
        "theme": "language",
        "emoji": "🗣️",
        "subtext": "",
        "synonyms": [
            "дөресен әйтергә",
            "сөйләргә",
            "хикәя сөйләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр кешегә мәғлүмәт бирү.",
                "examples": [
                    "Ул үзе турында сөйли."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "told",
        "v3": "сөйләгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_language_002"
    },
    {
        "word": "сорау",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "subtext": "сорау бирергә",
        "synonyms": [
            "ярдәм сорарга",
            "нәрсә турындадыр сорарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр сорау бирү яки үтенес белдерү.",
                "examples": [
                    "Ул ярдәм сорый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asked",
        "v3": "сораган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_language_003"
    },
    {
        "word": "сөйләшү",
        "level": "starter",
        "theme": "social",
        "emoji": "🗣️",
        "subtext": "",
        "synonyms": [
            "сөйләшергә",
            "инглизчә сөйләшергә",
            "ачык сөйләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Сүзләр ярдәмендә аралашу.",
                "examples": [
                    "Ул татарча сөйләшә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "spoke",
        "v3": "сөйләшкән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_003"
    },
    {
        "word": "сөйләшү",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "subtext": "",
        "synonyms": [
            "кем беләндер сөйләшергә",
            "ачык сөйләшергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр кеше белән сөйләшү.",
                "examples": [
                    "Ул менеджеры белән сөйләшә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "talked",
        "v3": "сөйләшкән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_004"
    },
    {
        "word": "шалтырату",
        "level": "starter",
        "theme": "technology",
        "emoji": "📞",
        "subtext": "",
        "synonyms": [
            "шалтыратырга",
            "кире шалтыратырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Телефон аша бәйләнешкә керү.",
                "examples": [
                    "Мин һәр иртә дусларыма шалтыратам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "шалтыраткан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_technology_002"
    },
    {
        "word": "языу",
        "level": "starter",
        "theme": "school",
        "emoji": "✍️",
        "subtext": "",
        "synonyms": [
            "хат язарга",
            "отчет язарга",
            "язмалар ясарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Кагазьгә яки экранга сүзләр төшерү.",
                "examples": [
                    "Мин хат язам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "wrote",
        "v3": "язган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "уку"
        ],
        "transcription": "",
        "id": "tt_starter_school_002"
    },
    {
        "word": "уку",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "",
        "synonyms": [
            "китап укырга",
            "яңалыклар укырга",
            "контракт укырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Язылган сүзләрне аңлау.",
                "examples": [
                    "Ул китап укый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "read",
        "v3": "укыган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "языу"
        ],
        "transcription": "",
        "id": "tt_starter_school_003"
    },
    {
        "word": "тыңлау",
        "level": "starter",
        "theme": "school",
        "emoji": "🎧",
        "subtext": "",
        "synonyms": [
            "музыка тыңларга",
            "игътибар белән тыңларга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Тавышларга игътибар итү.",
                "examples": [
                    "Мин музыка тыңлыйм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "listened",
        "v3": "тыңлаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_school_004"
    },
    {
        "word": "җавап бирү",
        "level": "starter",
        "theme": "language",
        "emoji": "📞",
        "subtext": "",
        "synonyms": [
            "җавап бирергә",
            "шалтыратуга җавап бирергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Сорауга җавап кайтару.",
                "examples": [
                    "Ул сорауга җавап бирде."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "answered",
        "v3": "җавап биргән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_language_004"
    },
    {
        "word": "кабатлау",
        "level": "starter",
        "theme": "school",
        "emoji": "🔁",
        "subtext": "",
        "synonyms": [
            "кабатларга",
            "заказны кабатларга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Бер нәрсәне икенче тапкыр эшләү.",
                "examples": [
                    "Зинһар, кабатлагыз."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repeated",
        "v3": "кабатлаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_school_005"
    },
    {
        "word": "бару",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "",
        "synonyms": [
            "эшкә барырга",
            "өйгә барырга",
            "урамга чыгырга",
            "кибеткә барырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Бер урыннан икенче урынга күчү.",
                "examples": [
                    "Мин эшкә барам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "барган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_003"
    },
    {
        "word": "килү",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏃‍♂️",
        "subtext": "",
        "synonyms": [
            "өйгә кайтырга",
            "эшкә килергә",
            "кире кайтырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр урынга яки кешегә якынлашу.",
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
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "бару"
        ],
        "transcription": "",
        "id": "tt_starter_travel_004"
    },
    {
        "word": "җәяү йөрү",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "",
        "synonyms": [
            "эшкә җәяү барырга",
            "өйгә барырга",
            "акрын барырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Аяк белән атлап бару.",
                "examples": [
                    "Ул паркта җәяү йөри."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "walked",
        "v3": "йөргән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_005"
    },
    {
        "word": "машина йөртү",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "subtext": "",
        "synonyms": [
            "машинада эшкә барырга",
            "машина йөртергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Транспорт сарасын идарә итү.",
                "examples": [
                    "Ул машина йөртә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "drove",
        "v3": "йөрткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_006"
    },
    {
        "word": "очу",
        "level": "starter",
        "theme": "travel",
        "emoji": "✈️",
        "subtext": "бизнес класс белән очарга",
        "synonyms": [
            "шәһәргә очарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Һава аша хәрәкәт итү.",
                "examples": [
                    "Кошлар оча."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "flew",
        "v3": "очкан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_007"
    },
    {
        "word": "килеп җитү",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "",
        "synonyms": [
            "эшкә килергә",
            "соңга калып килергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Билгеләнгән урынга килү.",
                "examples": [
                    "Ул вакытында килеп җитте."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arrived",
        "v3": "килеп җиткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_008"
    },
    {
        "word": "китү",
        "level": "starter",
        "theme": "work",
        "emoji": "🚪",
        "subtext": "",
        "synonyms": [
            "өйдән китәргә",
            "эштән китәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр урыннан китеп бару.",
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
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_009"
    },
    {
        "word": "күчү",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📦",
        "subtext": "",
        "synonyms": [
            "яңа урынга күченергә",
            "күченергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Яшәү урынын үзгәртү.",
                "examples": [
                    "Алар яңа фатирга күчте."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "moved",
        "v3": "күчкән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_furniture_002"
    },
    {
        "word": "кайту",
        "level": "starter",
        "theme": "travel",
        "emoji": "🔙",
        "subtext": "",
        "synonyms": [
            "өйгә кайтырга",
            "эшкә кайтырга",
            "кире шалтыратырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Кире килү.",
                "examples": [
                    "Мин өйгә кайтам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "returned",
        "v3": "кайткан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_008"
    },
    {
        "word": "сәяхәт итү",
        "level": "starter",
        "theme": "travel",
        "emoji": "✈️",
        "subtext": "эш буенча сәяхәт итәргә",
        "synonyms": [
            "чит илгә барырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Бер урыннан икенче урынга сәфәр кылу.",
                "examples": [
                    "Мин сәяхәт итәргә яратам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "traveled",
        "v3": "сәяхәт иткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_009"
    },
    {
        "word": "ашау",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "subtext": "",
        "synonyms": [
            "иртәнге аш ашарга",
            "төшке аш ашарга",
            "кичке аш ашарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ризыкны авызга алып йоту.",
                "examples": [
                    "Ул алма ашый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ate",
        "v3": "ашаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "эчү"
        ],
        "transcription": "",
        "id": "tt_starter_food_drink_003"
    },
    {
        "word": "эчү",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "subtext": "",
        "synonyms": [
            "кофе эчәргә",
            "чәй эчәргә",
            "су эчәргә",
            "сыра эчәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Сыеклыкны авызга алып йоту.",
                "examples": [
                    "Мин су эчәм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "drank",
        "v3": "эчкән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "ашау"
        ],
        "transcription": "",
        "id": "tt_starter_food_drink_004"
    },
    {
        "word": "йоклау",
        "level": "starter",
        "theme": "time",
        "emoji": "😴",
        "subtext": "",
        "synonyms": [
            "яхшы йокларга",
            "начар йокларга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Күзләрне йомып ял итү.",
                "examples": [
                    "Бала йоклый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "slept",
        "v3": "йоклаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "уяну"
        ],
        "transcription": "",
        "id": "tt_starter_time_001"
    },
    {
        "word": "аш пешерү",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "subtext": "",
        "synonyms": [
            "кичке аш пешерергә",
            "өйдә пешерергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ризыкны җылытып әзерләү.",
                "examples": [
                    "Ул кичке аш пешерә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cooked",
        "v3": "пешергән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_food_drink_005"
    },
    {
        "word": "тазарту",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧹",
        "subtext": "",
        "synonyms": [
            "фатирны җыештырырга",
            "кухняны җыештырырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Керне яки пычракны бетерү.",
                "examples": [
                    "Ул бүлмәсен тазарта."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cleaned",
        "v3": "тазарткан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_furniture_003"
    },
    {
        "word": "кию",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👕",
        "subtext": "",
        "synonyms": [
            "костюм кияргә",
            "күзлек кияргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Өстә кием булу.",
                "examples": [
                    "Ул күлмәк кигән."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "wore",
        "v3": "кигән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_clothes_001"
    },
    {
        "word": "юу",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧼",
        "subtext": "",
        "synonyms": [
            "савыт-саба юарга",
            "кием юарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Нәрсәне су белән тазарту.",
                "examples": [
                    "Ул кулларын юа."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "юган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_furniture_004"
    },
    {
        "word": "сатып алу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "subtext": "",
        "synonyms": [
            "ризык сатып алырга",
            "билет сатып алырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Акчага нәрсә алу.",
                "examples": [
                    "Мин китап сатып алдым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "bought",
        "v3": "сатып алган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "сату"
        ],
        "transcription": "",
        "id": "tt_starter_shopping_007"
    },
    {
        "word": "түләү",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💳",
        "subtext": "",
        "synonyms": [
            "счетны түләргә",
            "аренда түләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсә өчен акча бирү.",
                "examples": [
                    "Мин хакын түлим."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "paid",
        "v3": "түләгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_008"
    },
    {
        "word": "тотону",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💸",
        "subtext": "",
        "synonyms": [
            "акча тотарга",
            "вакыт үткәрергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Акчаны билгеле бер нәрсәгә сарыф итү.",
                "examples": [
                    "Ул күп акча тотына."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "spent",
        "v3": "тотонган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_009"
    },
    {
        "word": "саклау",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "subtext": "",
        "synonyms": [
            "акча җыярга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Акчаны сарыф итмичә саклап тоту.",
                "examples": [
                    "Ул акча саклый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "saved",
        "v3": "саклаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "тотону"
        ],
        "transcription": "",
        "id": "tt_starter_shopping_010"
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "work",
        "emoji": "💼",
        "subtext": "",
        "synonyms": [
            "өйдән эшләргә",
            "тулы көн эшләргә",
            "тырышып эшләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндәйдер эш башкару.",
                "examples": [
                    "Мин көн һайын эшлим."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "worked",
        "v3": "эшләгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_010"
    },
    {
        "word": "яшәү",
        "level": "starter",
        "theme": "places",
        "emoji": "🏠",
        "subtext": "",
        "synonyms": [
            "фатирда яшәргә",
            "ялгыз яшәргә",
            "чит илләрдә яшәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр җирдә тору.",
                "examples": [
                    "Мин Казанла яшим."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "яшәгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "үлү"
        ],
        "transcription": "",
        "id": "tt_starter_places_001"
    },
    {
        "word": "уйлау",
        "level": "starter",
        "theme": "social",
        "emoji": "💭",
        "subtext": "",
        "synonyms": [
            "уйларга",
            "уйлап карарга",
            "җентекләп уйларга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Акылны кулланып фикер йөртү.",
                "examples": [
                    "Мин бу турыда уйлыйм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "thought",
        "v3": "уйлаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_005"
    },
    {
        "word": "белү",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "",
        "synonyms": [
            "танырга",
            "җавапны белергә",
            "урынны белергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Мәғлүмәткә ия булу.",
                "examples": [
                    "Мин аның исемен беләм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "knew",
        "v3": "белгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_school_006"
    },
    {
        "word": "теләү",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🙏",
        "subtext": "",
        "synonyms": [
            "эш теләргә",
            "китәргә теләргә",
            "күбрәк акча теләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне теләү.",
                "examples": [
                    "Мин су телим."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "теләгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_emotions_001"
    },
    {
        "word": "кирәк булу",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🆘",
        "subtext": "",
        "synonyms": [
            "ярдәм кирәк булырга",
            "вакыт кирәк булырга",
            "ял кирәк булырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндидер нәрсәгә мохтаҗлык кичерү.",
                "examples": [
                    "Миңа ярдәм кирәк."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "needed",
        "v3": "кирәк булган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_emotions_002"
    },
    {
        "word": "ошату",
        "level": "starter",
        "theme": "emotions",
        "emoji": "👍",
        "subtext": "",
        "synonyms": [
            "эшне ошатырга",
            "сәяхәт итәргә ошатырга",
            "идеяне ошатырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне ошату.",
                "examples": [
                    "Миңа бу китап ошый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liked",
        "v3": "ошаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_emotions_003"
    },
    {
        "word": "ярату",
        "level": "starter",
        "theme": "emotions",
        "emoji": "❤️",
        "subtext": "",
        "synonyms": [
            "берәүне яратырга",
            "эшләргә яратырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр кешене яки нәрсәне нык ярату.",
                "examples": [
                    "Мин сине яратам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "loved",
        "v3": "яраткан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_emotions_004"
    },
    {
        "word": "нәфрәт итү",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😡",
        "subtext": "",
        "synonyms": [
            "эшләргә яратмаска",
            "берәүне күралмаска"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне яратмау.",
                "examples": [
                    "Ул ялганны нәфрәт итә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hated",
        "v3": "нәфрәт иткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_emotions_005"
    },
    {
        "word": "өмет итү",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🤞",
        "subtext": "",
        "synonyms": [
            "өметләнергә",
            "өмет итәм"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Яхшы нәрсә булыр дип көтү.",
                "examples": [
                    "Мин яхшылыкка өмет итәм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoped",
        "v3": "өмет иткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_emotions_006"
    },
    {
        "word": "хәтерләү",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "",
        "synonyms": [
            "эшләргә хәтерләргә",
            "исемне хәтерләргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Уйда саклау.",
                "examples": [
                    "Мин сине хәтерлим."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "remembered",
        "v3": "хәтерләгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_school_007"
    },
    {
        "word": "оныту",
        "level": "starter",
        "theme": "school",
        "emoji": "🤔",
        "subtext": "",
        "synonyms": [
            "исемне онытырга",
            "эшләргә онытырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Хәтердән чыгару.",
                "examples": [
                    "Мин оныттым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "forgot",
        "v3": "оныткан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_school_008"
    },
    {
        "word": "аңлау",
        "level": "starter",
        "theme": "language",
        "emoji": "💡",
        "subtext": "",
        "synonyms": [
            "проблеманы аңларга",
            "берәүне аңларга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Мәгънәне төшенү.",
                "examples": [
                    "Мин сине аңлыйм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "understood",
        "v3": "аңлаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_language_005"
    },
    {
        "word": "карар итү",
        "level": "starter",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "",
        "synonyms": [
            "эшләргә карар кылырга",
            "карар кабул итәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр карарга килү.",
                "examples": [
                    "Ул барырга карар итте."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "decided",
        "v3": "карар иткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_006"
    },
    {
        "word": "ләззәт алу",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "subtext": "",
        "synonyms": [
            "эшләүдән ләззәт алырга",
            "тормыштан ләззәт алырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәнең рәхәтен күрү.",
                "examples": [
                    "Мин табигатьтән ләззәт алам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "enjoyed",
        "v3": "ләззәт алган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_emotions_007"
    },
    {
        "word": "күрү",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "subtext": "",
        "synonyms": [
            "табибны күрергә",
            "дусларны күрергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Күз белән күрү.",
                "examples": [
                    "Мин сине күрәм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "saw",
        "v3": "күргән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_body_001"
    },
    {
        "word": "ишетү",
        "level": "starter",
        "theme": "body",
        "emoji": "👂",
        "subtext": "",
        "synonyms": [
            "яңалыклар ишетергә",
            "берәүдән ишетергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Колак белән ишетү.",
                "examples": [
                    "Мин тавыш ишетәм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "heard",
        "v3": "ишеткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_body_002"
    },
    {
        "word": "уяну",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "иртә уянырга",
            "соң уянырга",
            "арып уянырга"
        ],
        "definitions": [
            {
                "text": "Йокыдан уяну.",
                "examples": [
                    "Мин иртән уяндым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "woke up",
        "v3": "уянган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "йоклау"
        ],
        "transcription": "",
        "id": "tt_starter_work_011"
    },
    {
        "word": "карау",
        "level": "starter",
        "theme": "social",
        "emoji": "📺",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "ТВ карарга",
            "фильм карарга",
            "яңалыклар карарга"
        ],
        "definitions": [
            {
                "text": "Берәр нәрсәгә күзәтеп тору.",
                "examples": [
                    "Ул телевизор карый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "watched",
        "v3": "караган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_007"
    },
    {
        "word": "карау",
        "level": "starter",
        "theme": "people",
        "emoji": "👀",
        "subtext": "",
        "synonyms": [
            "карарга",
            "эзләргә",
            "охшарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәгә күз салу.",
                "examples": [
                    "Монда карагыз."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "looked",
        "v3": "караган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_people_001"
    },
    {
        "word": "уйнау",
        "level": "starter",
        "theme": "social",
        "emoji": "🎮",
        "subtext": "",
        "synonyms": [
            "спорт белән шөгыльләнергә",
            "уен уйнарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Уйын уйнау.",
                "examples": [
                    "Балалар уйный."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "played",
        "v3": "уйнаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_008"
    },
    {
        "word": "йөгерү",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏃",
        "subtext": "",
        "synonyms": [
            "йөгерергә",
            "бизнес алып барырга",
            "соңга калырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Тиз хәрәкәт итү.",
                "examples": [
                    "Ул йөгерә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ran",
        "v3": "йөгергән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_sports_001"
    },
    {
        "word": "утыру",
        "level": "starter",
        "theme": "work",
        "emoji": "🪑",
        "subtext": "",
        "synonyms": [
            "утырырга",
            "өстәл артына утырырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Урындыкта яки җирдә утыру.",
                "examples": [
                    "Ул утыра."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sat",
        "v3": "утырган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "тору"
        ],
        "transcription": "",
        "id": "tt_starter_work_012"
    },
    {
        "word": "тору",
        "level": "starter",
        "theme": "work",
        "emoji": "🧍",
        "subtext": "",
        "synonyms": [
            "басарга",
            "чиратта басып торырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Аяк өстендә тору.",
                "examples": [
                    "Ул басып тора."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stood",
        "v3": "торган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "утыру"
        ],
        "transcription": "",
        "id": "tt_starter_work_013"
    },
    {
        "word": "очрашу",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр кеше белән күрешү.",
                "examples": [
                    "Алар очрашты."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "met",
        "v3": "очрашкан",
        "subtext": "",
        "synonyms": [
            "клиент белән очрашырга",
            "хезмәттәш белән очрашырга"
        ],
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_014"
    },
    {
        "word": "өйрәнү",
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
                "text": "Яңа белем алу.",
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
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_school_009"
    },
    {
        "word": "үзгәртү",
        "level": "starter",
        "theme": "work",
        "emoji": "🔄",
        "subtext": "",
        "synonyms": [
            "эшне алыштырырга",
            "уйны үзгәртергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Башка төрле итү.",
                "examples": [
                    "Ул планын үзгәртте."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "changed",
        "v3": "үзгәрткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_015"
    },
    {
        "word": "туктау",
        "level": "starter",
        "theme": "work",
        "emoji": "🛑",
        "subtext": "",
        "synonyms": [
            "туктарга",
            "эшне туктатырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Хәрәкәтне туктату.",
                "examples": [
                    "Машина туктады."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stopped",
        "v3": "туктаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_016"
    },
    {
        "word": "өстәү",
        "level": "starter",
        "theme": "numbers",
        "emoji": "➕",
        "subtext": "",
        "synonyms": [
            "шикәр өстәргә",
            "өстәргә",
            "комментарий өстәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәгә икенче нәрсәне кушу.",
                "examples": [
                    "Ул шәкәр өстәде."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "added",
        "v3": "өстәгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_numbers_001"
    },
    {
        "word": "җиңү",
        "level": "starter",
        "theme": "social",
        "emoji": "🏆",
        "subtext": "",
        "synonyms": [
            "уенда җиңәргә",
            "приз алырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ярышта җиңеп чыгу.",
                "examples": [
                    "Ул җиңде."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "won",
        "v3": "җиңгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "югалту"
        ],
        "transcription": "",
        "id": "tt_starter_social_009"
    },
    {
        "word": "көтү",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "subtext": "",
        "synonyms": [
            "берәүне көтәргә",
            "чиратта көтәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәнең булуын көтеп тору.",
                "examples": [
                    "Мин сине көтәм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waited",
        "v3": "көткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_017"
    },
    {
        "word": "үлү",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "⚰️",
        "subtext": "",
        "synonyms": [
            "үлгәргә",
            "һәлак булырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Яшәүдән туктау.",
                "examples": [
                    "Чәчәк үлде."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "died",
        "v3": "үлгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "яшәү"
        ],
        "transcription": "",
        "id": "tt_starter_health_medicine_002"
    },
    {
        "word": "җибәрү",
        "level": "starter",
        "theme": "work",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне җибәрү.",
                "examples": [
                    "Мин хат җибәрдем."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sent",
        "v3": "җибәргән",
        "subtext": "",
        "synonyms": [
            "хат җибәрергә",
            "хәбәр җибәрергә"
        ],
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_018"
    },
    {
        "word": "калу",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏨",
        "subtext": "",
        "synonyms": [
            "өйдә калырга",
            "кунакханәдә калырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр җирдә калу.",
                "examples": [
                    "Мин өйдә калдым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stayed",
        "v3": "калган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_010"
    },
    {
        "word": "егылу",
        "level": "starter",
        "theme": "nature",
        "emoji": "🍂",
        "subtext": "",
        "synonyms": [
            "егылырга",
            "гашыйк булырга",
            "йоклап китәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Җиргә төшү.",
                "examples": [
                    "Ул егылды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fell",
        "v3": "егылган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_nature_001"
    },
    {
        "word": "үтү",
        "level": "starter",
        "theme": "school",
        "emoji": "🏔️",
        "subtext": "",
        "synonyms": [
            "имтихан тапшырырга",
            "тупны бирү",
            "вакыт уздыру"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр җирдән үтеп китү яки имтихан тапшыру.",
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
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_school_010"
    },
    {
        "word": "сату",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "subtext": "",
        "synonyms": [
            "товар сатарга",
            "онлайн сатарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Акчага нәрсә бирү.",
                "examples": [
                    "Ул машинасын сатты."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sold",
        "v3": "саткан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "сатып алу"
        ],
        "transcription": "",
        "id": "tt_starter_shopping_011"
    },
    {
        "word": "тарту",
        "level": "starter",
        "theme": "work",
        "emoji": "🚜",
        "subtext": "",
        "synonyms": [
            "ишекне тартырга",
            "нәрсәнедер тартырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Үзеңә таба тарту.",
                "examples": [
                    "Ул ишекне тартты."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pulled",
        "v3": "тарткан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "этәрү"
        ],
        "transcription": "",
        "id": "tt_starter_work_019"
    },
    {
        "word": "этәрү",
        "level": "starter",
        "theme": "work",
        "emoji": "🛒",
        "subtext": "",
        "synonyms": [
            "төймәгә басарга",
            "этәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне үзеңнән этәрү.",
                "examples": [
                    "Ул төймәгә этәрде."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pushed",
        "v3": "этәргән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "тарту"
        ],
        "transcription": "",
        "id": "tt_starter_work_020"
    },
    {
        "word": "ташу",
        "level": "starter",
        "theme": "work",
        "emoji": "🎒",
        "subtext": "",
        "synonyms": [
            "сумка күтәреп барырга",
            "үтәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне күтәреп бару.",
                "examples": [
                    "Ул сумка ташый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried",
        "v3": "ташыган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_021"
    },
    {
        "word": "сыну",
        "level": "starter",
        "theme": "describing",
        "emoji": "💔",
        "subtext": "",
        "synonyms": [
            "пыяла ватырга",
            "законны бозарга",
            "тәнәфес ясарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне вату.",
                "examples": [
                    "Стакан сынды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "broke",
        "v3": "сынган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_describing_001"
    },
    {
        "word": "алу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📩",
        "subtext": "",
        "synonyms": [
            "хат алырга",
            "бүләк алырга",
            "түләү алырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне кабул итеп алу.",
                "examples": [
                    "Мин бүләк алдым."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "received",
        "v3": "алган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_012"
    },
    {
        "word": "риза булу",
        "level": "starter",
        "theme": "social",
        "emoji": "👍",
        "subtext": "",
        "synonyms": [
            "берәү белән килешергә",
            "килешәм"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Башка кешенең фикере белән килешү.",
                "examples": [
                    "Мин риза."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "agreed",
        "v3": "риза булган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_010"
    },
    {
        "word": "рәсем ясау",
        "level": "starter",
        "theme": "social",
        "emoji": "🎨",
        "subtext": "",
        "synonyms": [
            "рәсем ясарга",
            "нәтиҗә ясарга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Каләм белән рәсем ясау.",
                "examples": [
                    "Ул рәсем ясый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "drew",
        "v3": "ясаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_011"
    },
    {
        "word": "бүлешү",
        "level": "starter",
        "theme": "social",
        "emoji": "🍕",
        "subtext": "",
        "synonyms": [
            "б бүлмәдә яшәргә",
            "мәгълүмат белән бүлешергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәне башкалар белән бүлү.",
                "examples": [
                    "Без аш белән бүлештек."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shared",
        "v3": "бүлешкән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_012"
    },
    {
        "word": "елмаю",
        "level": "starter",
        "theme": "people",
        "emoji": "😊",
        "subtext": "",
        "synonyms": [
            "елмаерга",
            "берәүгә елмаерга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Йөздә шатлык белдерү.",
                "examples": [
                    "Ул елмая."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "smiled",
        "v3": "елмайган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "елау"
        ],
        "transcription": "",
        "id": "tt_starter_people_002"
    },
    {
        "word": "елау",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😢",
        "subtext": "",
        "synonyms": [
            "ярдәмгә чакырырга",
            "кычкырырга",
            "елап җибәрергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Күз яше түгү.",
                "examples": [
                    "Бала елый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cried",
        "v3": "елаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "antonyms": [
            "елмаю"
        ],
        "transcription": "",
        "id": "tt_starter_emotions_008"
    },
    {
        "word": "бию",
        "level": "starter",
        "theme": "music",
        "emoji": "💃",
        "subtext": "",
        "synonyms": [
            "музыкага биергә",
            "биергә барырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Музыкага хәрәкәт итү.",
                "examples": [
                    "Алар бии."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "danced",
        "v3": "биегән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_music_001"
    },
    {
        "word": "җырлау",
        "level": "starter",
        "theme": "music",
        "emoji": "🎤",
        "subtext": "",
        "synonyms": [
            "җыр җырларга",
            "кушылып җырларга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Җыр җырлау.",
                "examples": [
                    "Ул җырлый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sang",
        "v3": "җырлаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_music_002"
    },
    {
        "word": "сикерү",
        "level": "starter",
        "theme": "sports",
        "emoji": "🦘",
        "subtext": "",
        "synonyms": [
            "биеккә сикергә",
            "аша сикергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Җирдән югарыга сикерү.",
                "examples": [
                    "Ул сикерде."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "jumped",
        "v3": "сикергән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_sports_002"
    },
    {
        "word": "йөзү",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏊",
        "subtext": "",
        "synonyms": [
            "йөзәргә барырга",
            "йөзәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Суда йөзү.",
                "examples": [
                    "Мин йөзергә яратам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "swam",
        "v3": "йөзгән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_sports_003"
    },
    {
        "word": "өйрәнү",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "",
        "synonyms": [
            "инглизчә өйрәнергә",
            "имтиханга әзерләнергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Белем алу.",
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
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_school_011"
    },
    {
        "word": "укыту",
        "level": "starter",
        "theme": "school",
        "emoji": "👨‍🏫",
        "subtext": "",
        "synonyms": [
            "өйрәтергә",
            "предметны өйрәтергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Башкаларга белем бирү.",
                "examples": [
                    "Ул математика укыта."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "taught",
        "v3": "укыткан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_school_012"
    },
    {
        "word": "эшкә йөрү",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚆",
        "subtext": "",
        "synonyms": [
            "эшкә барып кайтырга",
            "поездда барырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Көн саен эшкә бару-кайту.",
                "examples": [
                    "Ул шәһәргә эшкә йөри."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "commuted",
        "v3": "йөргән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_011"
    },
    {
        "word": "урнашу",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏠",
        "subtext": "",
        "synonyms": [
            "фатир арендаларга",
            "бүлмә арендага бирергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Акчага вакытлыча файдалану.",
                "examples": [
                    "Алар фатир арендага алды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rented",
        "v3": "алган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_012"
    },
    {
        "word": "күнегүләр ясау",
        "level": "starter",
        "theme": "social",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Тән үстерү өчен эшләү.",
                "examples": [
                    "Ул күнегүләр ясый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercised",
        "v3": "ясаган",
        "subtext": "",
        "synonyms": [
            "күнегүләр ясарга",
            "спортзал барырга"
        ],
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_013"
    },
    {
        "word": "тора",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Хакы булу.",
                "examples": [
                    "Бу күп тора."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "cost",
        "v3": "торган",
        "subtext": "",
        "synonyms": [
            "кыйммәт торырга",
            "акча торырга"
        ],
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_013"
    },
    {
        "word": "чакыру",
        "level": "starter",
        "theme": "social",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр җиргә килергә сорау.",
                "examples": [
                    "Ул мине кунакка чакырды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "чакырган",
        "subtext": "",
        "synonyms": [
            "берәүне чакырырга",
            "төшке ашка чакырырга"
        ],
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_014"
    },
    {
        "word": "тору",
        "definitions": [
            {
                "text": "Йокыдан тору.",
                "examples": [
                    "Ул иртә тора."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "иртә торырга",
            "тиз торырга"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "got up",
        "v3": "торган",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_022"
    },
    {
        "word": "иртәнге ашны ашау",
        "definitions": [
            {
                "text": "Иртәнге ашны ашау.",
                "examples": [
                    "Мин иртәнге ашны ашадым."
                ]
            }
        ],
        "subtext": "өйдә иртәнге аш ашарга",
        "classification": "regular",
        "aspect": "action",
        "v2": "had breakfast",
        "v3": "ашаган",
        "theme": "work",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_023"
    },
    {
        "word": "кайту",
        "definitions": [
            {
                "text": "Кире кайту.",
                "examples": [
                    "Ул өйгә кайтты."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "өйгә кайтырга",
            "соң кайтырга"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "came back",
        "v3": "кайткан",
        "theme": "work",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_024"
    },
    {
        "word": "йокларга яту",
        "definitions": [
            {
                "text": "Йокларга яту.",
                "examples": [
                    "Мин кич йокларга яттым."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "иртә йокларга ятарга",
            "соң ятарга"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "яткан",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_025"
    },
    {
        "word": "тикшерү",
        "definitions": [
            {
                "text": "Берәр нәрсәне тикшерү.",
                "examples": [
                    "Ул почтасын тикшерә."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "хатларны тикшерергә",
            "вакытны тикшерергә"
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
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_026"
    },
    {
        "word": "җавап бирү",
        "definitions": [
            {
                "text": "Җавап бирү.",
                "examples": [
                    "Ул хатка җавап бирде."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "хатка җавап бирергә",
            "тиз җавап бирергә"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "replied",
        "v3": "җавап биргән",
        "theme": "work",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_027"
    },
    {
        "word": "тәкъдим итү",
        "definitions": [
            {
                "text": "Берәр нәрсәне күрсәтү.",
                "examples": [
                    "Ул проектын тәкъдим итте."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "отчет тәкъдим итәргә",
            "идеяләр тәкъдим итәргә"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "presented",
        "v3": "тәкъдим иткән",
        "theme": "work",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_028"
    },
    {
        "word": "катнашу",
        "definitions": [
            {
                "text": "Җыелышта катнашу.",
                "examples": [
                    "Мин киңәшмәдә катнаштым."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "җыелышта булырга",
            "курска барырга"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "attended",
        "v3": "катнашкан",
        "theme": "work",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_029"
    },
    {
        "word": "идарә итү",
        "definitions": [
            {
                "text": "Җитәкчелек итү.",
                "examples": [
                    "Ул коллектив белән идарә итә."
                ]
            }
        ],
        "subtext": "команда белән идарә итәргә / вакыт белән идарә итәргә",
        "classification": "regular",
        "aspect": "action",
        "v2": "managed",
        "v3": "идарә иткән",
        "theme": "work",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_030"
    },
    {
        "word": "түләү алу",
        "definitions": [
            {
                "text": "Акча сорау.",
                "examples": [
                    "Ул хакын алды."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "түләү алырга",
            "хезмәт өчен түләү"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "charged",
        "v3": "алган",
        "theme": "shopping",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_014"
    },
    {
        "word": "булдыра алу",
        "definitions": [
            {
                "text": "Акчасы җитү.",
                "examples": [
                    "Ул бу машинаны ала ала."
                ]
            }
        ],
        "subtext": "йорт алырга мөмкинлеге булырга",
        "classification": "regular",
        "aspect": "stative",
        "v2": "afforded",
        "v3": "ала алган",
        "theme": "shopping",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_015"
    },
    {
        "word": "бурычлы булу",
        "definitions": [
            {
                "text": "Акча бирергә тиеш булу.",
                "examples": [
                    "Ул миңа бурычлы."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "акча бурычлы булырга"
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "owed",
        "v3": "бурычлы булган",
        "theme": "shopping",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_016"
    },
    {
        "word": "эшләп алу",
        "definitions": [
            {
                "text": "Акча эшләү.",
                "examples": [
                    "Ул күп акча эшли."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "хезмәт хакы алырга",
            "акча эшләргә"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "earned",
        "v3": "эшләп алган",
        "theme": "shopping",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_017"
    },
    {
        "word": "бару",
        "definitions": [
            {
                "text": "Берәр кешегә бару.",
                "examples": [
                    "Ул ата-анасына барды."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "гаиләгә барырга",
            "дус янына барырга"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "visited",
        "v3": "барган",
        "theme": "social",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_015"
    },
    {
        "word": "бәйрәм итү",
        "definitions": [
            {
                "text": "Бәйрәм ясау.",
                "examples": [
                    "Без туган көнне бәйрәм иттек."
                ]
            }
        ],
        "subtext": "туган көнне билгеләп үтәргә",
        "classification": "regular",
        "aspect": "action",
        "v2": "celebrated",
        "v3": "бәйрәм иткән",
        "theme": "social",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_016"
    },
    {
        "word": "тәкъдим итү",
        "definitions": [
            {
                "text": "Яхшы нәрсәне киңәш итү.",
                "examples": [
                    "Ул бу ресторанны тәкъдим итте."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "киңәш итәргә",
            "тәкъдим итәргә"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recommended",
        "v3": "тәкъдим иткән",
        "theme": "social",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_017"
    },
    {
        "word": "авырту",
        "definitions": [
            {
                "text": "Авырту китерү.",
                "examples": [
                    "Минем билем авырта."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "арканы авырттырырга",
            "берәүне рәнҗетергә"
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "hurt",
        "v3": "авырткан",
        "theme": "health_medicine",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_health_medicine_003"
    },
    {
        "word": "ял итү",
        "definitions": [
            {
                "text": "Эштән соң ял итү.",
                "examples": [
                    "Ул ял итә."
                ]
            }
        ],
        "subtext": "эштән соң ял итәргә",
        "synonyms": [
            "өйдә ял итәргә"
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
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_031"
    },
    {
        "word": "савыгу",
        "definitions": [
            {
                "text": "Авырудан соң яхшыру.",
                "examples": [
                    "Ул савыкты."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "савыгырга",
            "тиз савыгырга"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recovered",
        "v3": "савыккан",
        "theme": "health_medicine",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_health_medicine_004"
    },
    {
        "word": "заказ бирү",
        "definitions": [
            {
                "text": "Алдан саклап калдыру.",
                "examples": [
                    "Ул номер заказ бирде."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "кунакханә броньларга",
            "билет броньларга"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "booked",
        "v3": "заказ биргән",
        "theme": "travel",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_013"
    },
    {
        "word": "җыю",
        "definitions": [
            {
                "text": "Сумкага нәрсәләр җыю.",
                "examples": [
                    "Ул сумкасын җыйды."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "сумка җыярга",
            "чемодан җыярга"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "җыйган",
        "theme": "travel",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_014"
    },
    {
        "word": "бетерү",
        "definitions": [
            {
                "text": "Заказны юкка чыгару.",
                "examples": [
                    "Ул баруны бетерде."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "рейсны юкка чыгарырга",
            "очрашуны юкка чыгарырга"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "бетергән",
        "theme": "travel",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_015"
    },
    {
        "word": "сагыну",
        "definitions": [
            {
                "text": "Берәр кешене сагыну яки вакытны югалту.",
                "examples": [
                    "Мин сине сагынам."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "поездга соңга калырга",
            "берәүне сагынырга"
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "missed",
        "v3": "сагынган",
        "theme": "travel",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_016"
    },
    {
        "word": "заказ бирү",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "",
        "synonyms": [
            "ризык заказ бирергә",
            "онлайн заказ бирергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсә сорау.",
                "examples": [
                    "Ул аш заказ бирде."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ordered",
        "v3": "заказ биргән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_032"
    },
    {
        "word": "аңлату",
        "level": "starter",
        "theme": "work",
        "emoji": "💡",
        "subtext": "",
        "synonyms": [
            "процессны аңлатырга",
            "ачык аңлатырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Мәгънәсен төшендерү.",
                "examples": [
                    "Ул кагыйдәне аңлатты."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "explained",
        "v3": "аңлаткан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_033"
    },
    {
        "word": "рәхмәт әйтү",
        "level": "starter",
        "theme": "social",
        "emoji": "🙏",
        "subtext": "",
        "synonyms": [
            "рәхмәт әйтергә",
            "рәхмәт сезгә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Рәхмәт белдерү.",
                "examples": [
                    "Ул рәхмәт әйтте."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "thanked",
        "v3": "әйткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_018"
    },
    {
        "word": "таныштыру",
        "level": "starter",
        "theme": "social",
        "emoji": "🤝",
        "subtext": "",
        "synonyms": [
            "таныштырырга",
            "үзеңне тәкъдим итәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Яңа кеше белән таныштыру.",
                "examples": [
                    "Ул дуслы таныштырды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "introduced",
        "v3": "таныштырган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_019"
    },
    {
        "word": "ял итү",
        "level": "starter",
        "theme": "social",
        "emoji": "🧘",
        "subtext": "",
        "synonyms": [
            "өйдә ял итәргә",
            "ял итәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Тынычлану.",
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
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_020"
    },
    {
        "word": "төзәтү",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛠️",
        "subtext": "",
        "synonyms": [
            "төзәтергә",
            "ремонтлау"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ватылган нәрсәне рәтләү.",
                "examples": [
                    "Ул машинасын төзәтә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repaired",
        "v3": "төзәткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_furniture_005"
    },
    {
        "word": "булу",
        "level": "starter",
        "theme": "social",
        "emoji": "❔",
        "subtext": "",
        "synonyms": [
            "нәрсә булды",
            "булып алырга",
            "шулай була"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндидер вакыйга булу.",
                "examples": [
                    "Ни булды?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "happened",
        "v3": "булган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_021"
    },
    {
        "word": "тояла",
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
                "text": "Күренү.",
                "examples": [
                    "Бу яхшы тояла."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "seemed",
        "v3": "тоялган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_022"
    },
    {
        "word": "аңлата",
        "level": "starter",
        "theme": "school",
        "emoji": "❔",
        "subtext": "бу нәрсә аңлата",
        "synonyms": [
            "нәрсәдер аңлатырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Мәгънәгә ия булу.",
                "examples": [
                    "Бу сүз ни аңлата?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "meant",
        "v3": "аңлаткан",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_school_013"
    },
    {
        "word": "иярү",
        "level": "starter",
        "theme": "work",
        "emoji": "👣",
        "subtext": "",
        "synonyms": [
            "инструкцияләргә иярергә",
            "яңалыкларны күзәтергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Артыннан бару.",
                "examples": [
                    "Ул минем артымнан килә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "followed",
        "v3": "ияргән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_034"
    },
    {
        "word": "дәвам итү",
        "level": "starter",
        "theme": "school",
        "emoji": "⏩",
        "subtext": "",
        "synonyms": [
            "эшне дәвам итәргә",
            "дәвам итәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Туктамыйча эшләү.",
                "examples": [
                    "Ул эшен дәвам итә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "continued",
        "v3": "дәвам иткән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_school_014"
    },
    {
        "word": "үсү",
        "level": "starter",
        "theme": "work",
        "emoji": "📈",
        "subtext": "",
        "synonyms": [
            "бизнес үстерергә",
            "тиз үсәргә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Зурайю.",
                "examples": [
                    "Бала үсә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "grew",
        "v3": "үскән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_035"
    },
    {
        "word": "үз эченә алу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "➕",
        "subtext": "",
        "synonyms": [
            "үз эченә алырга",
            "кертелгән"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәнең составында булу.",
                "examples": [
                    "Бу үз эсенә ашны ала."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "included",
        "v3": "алган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_018"
    },
    {
        "word": "булу",
        "level": "starter",
        "theme": "work",
        "emoji": "✨",
        "subtext": "",
        "synonyms": [
            "менеджер булып китәргә",
            "танылу алырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ниндидер хәлгә килү.",
                "examples": [
                    "Ул директор булды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "became",
        "v3": "булган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_036"
    },
    {
        "word": "карау",
        "level": "starter",
        "theme": "work",
        "emoji": "📎",
        "subtext": "",
        "synonyms": [
            "берәүгә карарга",
            "тиешле урында булырга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр нәрсәнең милке булу.",
                "examples": [
                    "Бу китап миңа карый."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "belonged",
        "v3": "караган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_037"
    },
    {
        "word": "сайлау",
        "level": "starter",
        "theme": "social",
        "emoji": "👉",
        "subtext": "",
        "synonyms": [
            "сайларга",
            "эшләргә сайларга",
            "игътибар белән сайларга"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Берничә нәрсәдән алу.",
                "examples": [
                    "Ул китап сайлады."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "chose",
        "v3": "сайлаган",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_social_023"
    },
    {
        "word": "төзү",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "",
        "synonyms": [
            "карьера төзергә",
            "команда төзергә"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Йорт яки бина салу.",
                "examples": [
                    "Алар йорт төзи."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "built",
        "v3": "төзегән",
        "group": "vowel",
        "auxiliary": "иде",
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_work_038"
    }
];
    const lang = "tt";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();