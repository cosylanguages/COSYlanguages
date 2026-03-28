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
        "group": "irregular"
    },
    {
        "word": "ия булу",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "have a job / have lunch / have a problem / have time",
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
        "group": "regular"
    },
    {
        "word": "тою",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "feel tired / feel better / feel ill / feel stressed",
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
        "group": "regular"
    },
    {
        "word": "бирү",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "give advice / give money / give a present / give information",
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
        "group": "regular"
    },
    {
        "word": "алу",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "take the bus / take medicine / take a break / take time",
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
        "group": "regular"
    },
    {
        "word": "алу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "get a job / get tired / get better / get home",
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
        "group": "regular"
    },
    {
        "word": "салу",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "put on / put away / put the phone down / put money aside",
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
        "group": "regular"
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "make coffee / make a decision / make a mistake / make money",
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
        "group": "regular"
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "do work / do the shopping / do exercise / do nothing",
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
        "group": "regular"
    },
    {
        "word": "куллану",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer / use time",
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
        "group": "regular"
    },
    {
        "word": "ачу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "open a door / open an account / open a shop / open at nine",
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
        "group": "regular"
    },
    {
        "word": "ябу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "close a door / close at six / close an account / close the meeting",
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
        "group": "regular"
    },
    {
        "word": "башлау",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "start work / start a meeting / start a new job",
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
        "group": "regular"
    },
    {
        "word": "тәмамлау",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finish work / finish a project / finish early / finish late",
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
        "group": "regular"
    },
    {
        "word": "ярдәм итү",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "help someone / help with a task / help out / ask for help",
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
        "group": "regular"
    },
    {
        "word": "тырышу",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "try to do / try hard / try something new / give it a try",
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
        "group": "regular"
    },
    {
        "word": "күрсәтү",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "show someone how / show a document / show interest",
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
        "group": "regular"
    },
    {
        "word": "табу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "find a job / find out / find it difficult / find time",
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
        "group": "regular"
    },
    {
        "word": "саклау",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "keep going / keep quiet / keep a record / keep in touch",
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
        "group": "regular"
    },
    {
        "word": "югалту",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "lose a job / lose money / lose weight / lose time",
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
        "group": "regular"
    },
    {
        "word": "кисү",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "cut costs / cut spending / cut short / cut in half",
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
        "group": "regular"
    },
    {
        "word": "бору",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "turn on / turn off / turn left / turn right",
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
        "group": "regular"
    },
    {
        "word": "китерү",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🎁",
        "subtext": "bring someone / bring food / bring a document / bring up",
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
        "group": "regular"
    },
    {
        "word": "әйтү",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗨️",
        "subtext": "say hello / say yes / say no / say something",
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
        "group": "regular"
    },
    {
        "word": "сөйләү",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "tell the truth / tell someone / tell a story / tell someone about",
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
        "group": "regular"
    },
    {
        "word": "сорау",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "ask a question / ask for help / ask about / ask someone",
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
        "group": "regular"
    },
    {
        "word": "сөйләшү",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "speak to someone / speak English / speak clearly / speak at a meeting",
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
        "group": "regular"
    },
    {
        "word": "сөйләшү",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "💬",
        "subtext": "talk to someone / talk about / talk openly / talk for a long time",
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
        "group": "regular"
    },
    {
        "word": "шалтырату",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
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
        "group": "regular"
    },
    {
        "word": "языу",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "write an email / write a report / write a letter / write notes",
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
        "group": "regular"
    },
    {
        "word": "уку",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "read a book / read the news / read a contract / read carefully",
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
        "group": "regular"
    },
    {
        "word": "тыңлау",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "listen to music / listen carefully / listen to a podcast",
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
        "group": "regular"
    },
    {
        "word": "җавап бирү",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "answer a question / answer the phone / answer an email",
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
        "group": "regular"
    },
    {
        "word": "кабатлау",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "repeat that / repeat yourself / repeat an order",
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
        "group": "regular"
    },
    {
        "word": "бару",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "go to work / go home / go out / go shopping",
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
        "group": "regular"
    },
    {
        "word": "килү",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "come home / come to work / come back / come here",
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
        "group": "regular"
    },
    {
        "word": "җәяү йөрү",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "walk to work / walk home / walk slowly / walk every day",
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
        "group": "regular"
    },
    {
        "word": "машина йөртү",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "drive to work / drive a car / drive home / drive carefully",
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
        "group": "regular"
    },
    {
        "word": "очу",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "fly to a city / fly business class / fly economy",
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
        "group": "regular"
    },
    {
        "word": "килеп җитү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "arrive at work / arrive late / arrive on time / arrive home",
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
        "group": "regular"
    },
    {
        "word": "китү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "leave home / leave work / leave early / leave late",
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
        "group": "regular"
    },
    {
        "word": "күчү",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "move to a new place / move in / move out / move house",
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
        "group": "regular"
    },
    {
        "word": "кайту",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "return home / return to work / return a call / return from",
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
        "group": "regular"
    },
    {
        "word": "сәяхәт итү",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "travel for work / travel abroad / travel by train",
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
        "group": "regular"
    },
    {
        "word": "ашау",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
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
        "group": "regular"
    },
    {
        "word": "эчү",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "drink coffee / drink tea / drink water / drink beer",
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
        "group": "regular"
    },
    {
        "word": "йоклау",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
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
        "group": "regular"
    },
    {
        "word": "аш пешерү",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cook dinner / cook a meal / cook at home / cook for someone",
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
        "group": "regular"
    },
    {
        "word": "тазарту",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "clean the flat / clean the kitchen / clean up / clean regularly",
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
        "group": "regular"
    },
    {
        "word": "кию",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "wear a suit / wear glasses / wear casual clothes",
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
        "group": "regular"
    },
    {
        "word": "юу",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "wash the dishes / wash clothes / wash your hands",
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
        "group": "regular"
    },
    {
        "word": "сатып алу",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "buy food / buy a ticket / buy online / buy a house",
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
        "group": "regular"
    },
    {
        "word": "тотону",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "spend money / spend on food / spend on rent / spend time",
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
        "group": "regular"
    },
    {
        "word": "саклау",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "save money / save for a holiday / save for a house",
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
        "group": "regular"
    },
    {
        "word": "эшләү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "work from home / work full-time / work hard / work late",
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
        "group": "regular"
    },
    {
        "word": "яшәү",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
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
        "group": "regular"
    },
    {
        "word": "уйлау",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "think about / think of / think it is / think carefully",
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
        "group": "regular"
    },
    {
        "word": "белү",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "know someone / know the answer / know a place / know how to",
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
        "group": "regular"
    },
    {
        "word": "теләү",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🙏",
        "subtext": "want a job / want to leave / want more money / want help",
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
        "group": "regular"
    },
    {
        "word": "кирәк булу",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "need help / need time / need money / need to rest",
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
        "group": "regular"
    },
    {
        "word": "ошату",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
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
        "group": "regular"
    },
    {
        "word": "ярату",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "love someone / love doing / love a place / love the idea",
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
        "group": "regular"
    },
    {
        "word": "нәфрәт итү",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😡",
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
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
        "group": "regular"
    },
    {
        "word": "өмет итү",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "hope for / hope to do / hope that / I hope so",
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
        "group": "regular"
    },
    {
        "word": "хәтерләү",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "remember to do / remember a name / remember clearly",
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
        "group": "regular"
    },
    {
        "word": "оныту",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "forget a name / forget to do / forget about / completely forget",
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
        "group": "regular"
    },
    {
        "word": "аңлау",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💡",
        "subtext": "understand a problem / understand someone / understand clearly",
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
        "group": "regular"
    },
    {
        "word": "карар итү",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "decide to do / decide on / make a decision / hard to decide",
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
        "group": "regular"
    },
    {
        "word": "ләззәт алу",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
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
        "group": "regular"
    },
    {
        "word": "күрү",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "see a doctor / see friends / see the problem / see clearly",
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
        "group": "regular"
    },
    {
        "word": "ишетү",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "hear news / hear from someone / hear a sound / hear clearly",
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
        "group": "regular"
    },
    {
        "word": "уяну",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "wake up early / wake up late / wake up tired",
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
        "group": "regular"
    },
    {
        "word": "карау",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "watch TV / watch a film / watch the news / watch closely",
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
        "group": "regular"
    },
    {
        "word": "карау",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "look at / look for / look like / look happy",
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
        "group": "regular"
    },
    {
        "word": "уйнау",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "play sport / play a game / play music / play a role",
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
        "group": "regular"
    },
    {
        "word": "йөгерү",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "run a race / run a business / run out of / run late",
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
        "group": "regular"
    },
    {
        "word": "утыру",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "sit down / sit at a desk / sit in a meeting / sit quietly",
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
        "group": "regular"
    },
    {
        "word": "тору",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "stand up / stand in a queue / stand by / stand out",
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
        "group": "regular"
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
        "subtext": "meet a client / meet a colleague / meet for lunch / meet online",
        "group": "regular"
    },
    {
        "word": "өйрәнү",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "learn a language / learn a skill / learn from / learn how to",
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
        "group": "regular"
    },
    {
        "word": "үзгәртү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "change jobs / change your mind / change the plan / change something",
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
        "group": "regular"
    },
    {
        "word": "туктау",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "stop doing / stop working / stop a habit / stop someone",
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
        "group": "regular"
    },
    {
        "word": "өстәү",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "add some sugar / add to / add up / add a comment",
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
        "group": "regular"
    },
    {
        "word": "җиңү",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "win a game / win a prize / win an award / win a contract",
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
        "group": "regular"
    },
    {
        "word": "көтү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "wait for someone / wait in a queue / wait a moment",
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
        "group": "regular"
    },
    {
        "word": "үлү",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "die of / die for / die from / die out",
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
        "group": "regular"
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
        "subtext": "send an email / send a message / send a report / send a file",
        "group": "regular"
    },
    {
        "word": "калу",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "stay at home / stay in a hotel / stay up late / stay with someone",
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
        "group": "regular"
    },
    {
        "word": "егылу",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "fall down / fall off / fall in love / fall asleep",
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
        "group": "regular"
    },
    {
        "word": "үтү",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "pass an exam / pass the ball / pass time / pass the sugar",
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
        "group": "regular"
    },
    {
        "word": "сату",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "sell products / sell online / sell at the market / best seller",
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
        "group": "regular"
    },
    {
        "word": "тарту",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "pull the door / pull something / pull up / pull away",
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
        "group": "regular"
    },
    {
        "word": "этәрү",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "push the button / push a cart / push away / push through",
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
        "group": "regular"
    },
    {
        "word": "ташу",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "carry a bag / carry notes / carry out / carry on",
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
        "group": "regular"
    },
    {
        "word": "сыну",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "break the glass / break a law / take a break / break down",
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
        "group": "regular"
    },
    {
        "word": "алу",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "receive an email / receive a gift / receive payment / receive news",
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
        "group": "regular"
    },
    {
        "word": "риза булу",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "agree with someone / agree to do / agree on / I agree",
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
        "group": "regular"
    },
    {
        "word": "рәсем ясау",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "draw a picture / draw a conclusion / draw attention / draw a line",
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
        "group": "regular"
    },
    {
        "word": "бүлешү",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "share a room / share information / share an idea / share with",
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
        "group": "regular"
    },
    {
        "word": "елмаю",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "smile at someone / a big smile / smile broadly",
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
        "group": "regular"
    },
    {
        "word": "елау",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "cry for help / cry out / start crying / cry about something",
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
        "group": "regular"
    },
    {
        "word": "бию",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "dance to music / go dancing / dance together / slow dance",
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
        "group": "regular"
    },
    {
        "word": "җырлау",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "sing a song / sing along / sing well / lead singer",
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
        "group": "regular"
    },
    {
        "word": "сикерү",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "jump high / jump over / jump up / jump in",
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
        "group": "regular"
    },
    {
        "word": "йөзү",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "go swimming / swim across / swim laps / swim well",
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
        "group": "regular"
    },
    {
        "word": "өйрәнү",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "study English / study for an exam / study hard / self-study",
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
        "group": "regular"
    },
    {
        "word": "укыту",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "teach someone / teach a subject / teach how to / teach a class",
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
        "group": "regular"
    },
    {
        "word": "эшкә йөрү",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "commute to work / daily commute / long commute / commute by train",
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
        "group": "regular"
    },
    {
        "word": "урнашу",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "rent a flat / rent a property / rent out a room",
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
        "group": "regular"
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
        "subtext": "exercise regularly / exercise at the gym / exercise outdoors",
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
        "subtext": "cost a lot / cost money / cost too much / cost less",
        "group": "regular"
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
        "subtext": "invite someone / invite to dinner / invite to a party",
        "group": "regular"
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
        "subtext": "get up early / get up late / get up quickly",
        "classification": "regular",
        "aspect": "action",
        "v2": "got up",
        "v3": "торган",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "have breakfast at home / have a quick breakfast / skip breakfast",
        "classification": "regular",
        "aspect": "action",
        "v2": "had breakfast",
        "v3": "ашаган",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "come back home / come back late / come back from a trip",
        "classification": "regular",
        "aspect": "action",
        "v2": "came back",
        "v3": "кайткан",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "go to bed early / go to bed late / go to bed tired",
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "яткан",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "check emails / check messages / check a document / check the time",
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
        "word": "җавап бирү",
        "definitions": [
            {
                "text": "Җавап бирү.",
                "examples": [
                    "Ул хатка җавап бирде."
                ]
            }
        ],
        "subtext": "reply to an email / reply quickly / reply to a message",
        "classification": "regular",
        "aspect": "action",
        "v2": "replied",
        "v3": "җавап биргән",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "present a report / present ideas / present to a client",
        "classification": "regular",
        "aspect": "action",
        "v2": "presented",
        "v3": "тәкъдим иткән",
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "attend a meeting / attend a course / attend an event",
        "classification": "regular",
        "aspect": "action",
        "v2": "attended",
        "v3": "катнашкан",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "manage a team / manage a project / manage time / manage stress",
        "classification": "regular",
        "aspect": "action",
        "v2": "managed",
        "v3": "идарә иткән",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "charge a fee / charge for a service / charge extra",
        "classification": "regular",
        "aspect": "action",
        "v2": "charged",
        "v3": "алган",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "afford a house / afford to travel / afford something",
        "classification": "regular",
        "aspect": "stative",
        "v2": "afforded",
        "v3": "ала алган",
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "owe money / owe someone / owe a lot / owe nothing",
        "classification": "regular",
        "aspect": "stative",
        "v2": "owed",
        "v3": "бурычлы булган",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "earn a salary / earn money / earn more / earn enough",
        "classification": "regular",
        "aspect": "action",
        "v2": "earned",
        "v3": "эшләп алган",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "visit family / visit a friend / visit a city / visit regularly",
        "classification": "regular",
        "aspect": "action",
        "v2": "visited",
        "v3": "барган",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "celebrate a birthday / celebrate success / celebrate together",
        "classification": "regular",
        "aspect": "action",
        "v2": "celebrated",
        "v3": "бәйрәм иткән",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "recommend a place / recommend someone / recommend a film",
        "classification": "regular",
        "aspect": "action",
        "v2": "recommended",
        "v3": "тәкъдим иткән",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "hurt your back / hurt someone / hurt yourself / it hurts",
        "classification": "regular",
        "aspect": "both",
        "v2": "hurt",
        "v3": "авырткан",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "rest at home / rest after work / need rest / get some rest",
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
        "word": "савыгу",
        "definitions": [
            {
                "text": "Авырудан соң яхшыру.",
                "examples": [
                    "Ул савыкты."
                ]
            }
        ],
        "subtext": "recover from illness / recover quickly / recover fully",
        "classification": "regular",
        "aspect": "action",
        "v2": "recovered",
        "v3": "савыккан",
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "book a hotel / book a flight / book a table / book in advance",
        "classification": "regular",
        "aspect": "action",
        "v2": "booked",
        "v3": "заказ биргән",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "pack a bag / pack a suitcase / pack lightly",
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "җыйган",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "cancel a flight / cancel a booking / cancel a meeting",
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "бетергән",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "regular"
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
        "subtext": "miss a train / miss a flight / miss someone / miss work",
        "classification": "regular",
        "aspect": "both",
        "v2": "missed",
        "v3": "сагынган",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "заказ бирү",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "order food / order a drink / order online / order supplies",
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
        "group": "regular"
    },
    {
        "word": "аңлату",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💡",
        "subtext": "explain a process / explain clearly / explain to someone",
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
        "group": "regular"
    },
    {
        "word": "рәхмәт әйтү",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "thank someone / thank you for / many thanks",
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
        "group": "regular"
    },
    {
        "word": "таныштыру",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "introduce yourself / introduce someone / introduce a topic",
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
        "group": "regular"
    },
    {
        "word": "ял итү",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "relax at home / relax after work / relax on holiday",
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
        "group": "regular"
    },
    {
        "word": "төзәтү",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "repair something / get repaired / repair costs",
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
        "group": "regular"
    },
    {
        "word": "булу",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "what happened / happen to someone / it happens / happen again",
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
        "group": "regular"
    },
    {
        "word": "тояла",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🎭",
        "subtext": "seem fine / seem worried / seem happy / seem like",
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
        "group": "regular"
    },
    {
        "word": "аңлата",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "mean something / what does it mean / mean to do / I didn't mean to",
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
        "group": "regular"
    },
    {
        "word": "иярү",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "follow instructions / follow someone / follow the news / follow up",
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
        "group": "regular"
    },
    {
        "word": "дәвам итү",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "continue working / continue to do / continue with / continue a task",
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
        "group": "regular"
    },
    {
        "word": "үсү",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "grow a business / grow quickly / grow by / grow into",
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
        "group": "regular"
    },
    {
        "word": "үз эченә алу",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "include something / include in / not included / price includes",
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
        "group": "regular"
    },
    {
        "word": "булу",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "become a manager / become popular / become clear / become important",
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
        "group": "regular"
    },
    {
        "word": "карау",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "belong to someone / belong in / feel like you belong",
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
        "group": "regular"
    },
    {
        "word": "сайлау",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "choose between / choose to do / choose carefully / choose a career",
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
        "group": "regular"
    },
    {
        "word": "төзү",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "build a career / build a team / build experience / build trust",
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
        "group": "regular"
    }
];
    const lang = "tt";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();