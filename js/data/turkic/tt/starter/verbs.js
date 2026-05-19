(function() {
    const data = [
    {
        "word": "булу",
        "level": "starter",
        "theme": "name_greeting_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "ия булу",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "тою",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "бирү",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "алу",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "алу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "салу",
        "level": "starter",
        "theme": "furniture_objects_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "куллану",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "ачу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "ябу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "башлау",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "тәмамлау",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "ярдәм итү",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "тырышу",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "күрсәтү",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "табу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "саклау",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "югалту",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "кисү",
        "level": "starter",
        "theme": "cooking_methods_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "бору",
        "level": "starter",
        "theme": "directions_navigation_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "китерү",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "әйтү",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "сөйләү",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "сорау",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "сөйләшү",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "сөйләшү",
        "level": "starter",
        "theme": "family_life_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "шалтырату",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "языу",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "уку",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "тыңлау",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "җавап бирү",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "кабатлау",
        "level": "starter",
        "theme": "classroom_language_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "бару",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "килү",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "җәяү йөрү",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "",
        "synonyms": [
            "эшкә җայәү барырга",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "машина йөртү",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "очу",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "бизнес класс белән օչըрга",
        "synonyms": [
            "шәһәргә օչըрга"
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "килеп җитү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "китү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "күчү",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "кайту",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "сәяхәт итү",
        "level": "starter",
        "theme": "public_transport_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "ашау",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "эчү",
        "level": "starter",
        "theme": "drinks_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "йоклау",
        "level": "starter",
        "theme": "times_day_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "аш пешерү",
        "level": "starter",
        "theme": "cooking_methods_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "тазарту",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "кию",
        "level": "starter",
        "theme": "items_of_clothing_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "юу",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "сатып алу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "түләү",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "тотону",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "саклау",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "яшәү",
        "level": "starter",
        "theme": "address_location_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "уйлау",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "белү",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "теләү",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "кирәк булу",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "ошату",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "ярату",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "нәфрәт итү",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "өмет итү",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "хәтерләү",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "оныту",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "аңлау",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "карар итү",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "ләззәт алу",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "күрү",
        "level": "starter",
        "theme": "body_parts_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "ишетү",
        "level": "starter",
        "theme": "body_parts_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "уяну",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "карау",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "карау",
        "level": "starter",
        "theme": "physical_appearance_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "уйнау",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "йөгерү",
        "level": "starter",
        "theme": "common_sports_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "утыру",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "тору",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "очрашу",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "өйрәнү",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "үзгәртү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "туктау",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "өстәү",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "",
        "synonyms": [
            "шикәր өстәргә",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "җиңү",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "көтү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "үлү",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "җибәрү",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "калу",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "егылу",
        "level": "starter",
        "theme": "seasons_climate_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "үтү",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "сату",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "тарту",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "этәрү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "ташу",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "сыну",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "алу",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "",
        "synonyms": [
            "хат алырга",
            "бүләկ алырга",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "риза булу",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "рәсем ясау",
        "level": "starter",
        "theme": "cinema_film_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "бүлешү",
        "level": "starter",
        "theme": "family_life_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "елмаю",
        "level": "starter",
        "theme": "physical_appearance_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "елау",
        "level": "starter",
        "theme": "surprise_interest_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "бию",
        "level": "starter",
        "theme": "music_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "җырлау",
        "level": "starter",
        "theme": "music_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "сикерү",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "йөзү",
        "level": "starter",
        "theme": "common_sports_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "өйрәнү",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "укыту",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "эшкә йөрү",
        "level": "starter",
        "theme": "public_transport_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "урнашу",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "күнегүләр ясау",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "тора",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "чакыру",
        "level": "starter",
        "theme": "family_life_A1",
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
        "group": "regular",
        "auxiliary": ""
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
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
            "хатка җаваպ бирергә",
            "тиз җаваպ бирергә"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "replied",
        "v3": "җавап биргән",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
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
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "заказ бирү",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "аңлату",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "рәхмәт әйтү",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "",
        "synonyms": [
            "рәхмәտ әйтергә",
            "рәхмәտ сезгә"
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "таныштыру",
        "level": "starter",
        "theme": "name_greeting_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "ял итү",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "төзәтү",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "булу",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "тояла",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "аңлата",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "иярү",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "дәвам итү",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "үсү",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "үз эченә алу",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "булу",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "карау",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "сайлау",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "group": "regular",
        "auxiliary": ""
    },
    {
        "word": "төзү",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "regular",
        "auxiliary": ""
    }
];
    const lang = "tt";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();