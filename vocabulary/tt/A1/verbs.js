// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "булу",
        "level": "starter",
        "theme": "name_greeting",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "алу",
        "oppositeEmoji": "👜",
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
        "auxiliary": "иде"
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
        "opposite": "бирү",
        "oppositeEmoji": "🎁",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
    },
    {
        "word": "салу",
        "level": "starter",
        "theme": "furniture_objects",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "ябу",
        "oppositeEmoji": "🔒",
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
        "auxiliary": "иде"
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
        "opposite": "ачу",
        "oppositeEmoji": "📖",
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
        "auxiliary": "иде"
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
        "opposite": "тәмамлау",
        "oppositeEmoji": "🏁",
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
        "auxiliary": "иде"
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
        "opposite": "башлау",
        "oppositeEmoji": "▶️",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "җиңү",
        "oppositeEmoji": "🏆",
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
        "auxiliary": "иде"
    },
    {
        "word": "кисү",
        "level": "starter",
        "theme": "cooking_methods",
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
        "auxiliary": "иде"
    },
    {
        "word": "бору",
        "level": "starter",
        "theme": "directions_navigation",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
    },
    {
        "word": "әйтү",
        "level": "starter",
        "theme": "greetings_social_phrases",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
    },
    {
        "word": "сөйләшү",
        "level": "starter",
        "theme": "greetings_social_phrases",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "уку",
        "oppositeEmoji": "📖",
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
        "auxiliary": "иде"
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
        "opposite": "языу",
        "oppositeEmoji": "✍️",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
    },
    {
        "word": "кабатлау",
        "level": "starter",
        "theme": "classroom_language",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "бару",
        "oppositeEmoji": "🚶",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
    },
    {
        "word": "сәяхәт итү",
        "level": "starter",
        "theme": "public_transport",
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
        "auxiliary": "иде"
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
        "opposite": "эчү",
        "oppositeEmoji": "🥛",
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
        "auxiliary": "иде"
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
        "opposite": "ашау",
        "oppositeEmoji": "🍎",
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
        "auxiliary": "иде"
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
        "opposite": "уяну",
        "oppositeEmoji": "⏰",
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
        "auxiliary": "иде"
    },
    {
        "word": "аш пешерү",
        "level": "starter",
        "theme": "cooking_methods",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "сату",
        "oppositeEmoji": "🏷️",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "тотону",
        "oppositeEmoji": "💸",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "үлү",
        "oppositeEmoji": "⚰️",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "йоклау",
        "oppositeEmoji": "😴",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "тору",
        "oppositeEmoji": "🧍",
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
        "auxiliary": "иде"
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
        "opposite": "утыру",
        "oppositeEmoji": "🪑",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "югалту",
        "oppositeEmoji": "📉",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "яшәү",
        "oppositeEmoji": "🏠",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "сатып алу",
        "oppositeEmoji": "🛒",
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
        "auxiliary": "иде"
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
        "opposite": "этәрү",
        "oppositeEmoji": "🛒",
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
        "auxiliary": "иде"
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
        "opposite": "тарту",
        "oppositeEmoji": "🚜",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
    },
    {
        "word": "рәсем ясау",
        "level": "starter",
        "theme": "cinema_film",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "opposite": "елау",
        "oppositeEmoji": "😢",
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
        "auxiliary": "иде"
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
        "opposite": "елмаю",
        "oppositeEmoji": "😊",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
    },
    {
        "word": "эшкә йөрү",
        "level": "starter",
        "theme": "public_transport",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "theme": "public_transport",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "vowel",
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
    },
    {
        "word": "рәхмәт әйтү",
        "level": "starter",
        "theme": "greetings_social_phrases",
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
        "auxiliary": "иде"
    },
    {
        "word": "таныштыру",
        "level": "starter",
        "theme": "name_greeting",
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
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
        "auxiliary": "иде"
    }
];
    const lang = "tt";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();