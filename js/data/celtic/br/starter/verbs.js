(function() {
    const data = [
    {
        "word": "bezañ",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👤",
        "subtext": "skuizh bezañ / laouen bezañ / el labour bezañ / prest bezañ",
        "form": "verb",
        "definitions": [
            {
                "text": "Bezañ en ur stad bennak, pe bezañ o chom.",
                "examples": [
                    "Skuizh on.",
                    "Medisin eo.",
                    "Diwezhat omp."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": null,
        "v3": "bet",
        "group": "irregular"
    },
    {
        "word": "kaout",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "have a job / have lunch / have a problem / have time",
        "form": "verb",
        "definitions": [
            {
                "text": "Perc'hennañ un dra bennak.",
                "examples": [
                    "Ur labour am eus.",
                    "Ur c'harr en deus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "had",
        "v3": "bet",
        "group": "irregular"
    },
    {
        "word": "santout",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "feel tired / feel better / feel ill / feel stressed",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout ur santimant pe ur santadur fisikel.",
                "examples": [
                    "Skuizh e sent."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "felt",
        "v3": "santet",
        "group": "irregular"
    },
    {
        "word": "reiñ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "give advice / give money / give a present / give information",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Reiñ un dra bennak da unan bennak.",
                "examples": [
                    "Reiñ a ra kalz labour din."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave",
        "v3": "roet",
        "group": "irregular"
    },
    {
        "word": "kemer",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "take the bus / take medicine / take a break / take time",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Kemer un dra bennak gant e zaouarn.",
                "examples": [
                    "Kemer a ran ar c'harr-boutin evit mont d'al labour."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took",
        "v3": "kemeret",
        "group": "irregular"
    },
    {
        "word": "kaout",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "get a job / get tired / get better / get home",
        "form": "verb",
        "definitions": [
            {
                "text": "Resev un dra bennak.",
                "examples": [
                    "Ur gopr mat am eus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "got",
        "v3": "bet",
        "group": "irregular"
    },
    {
        "word": "lakaat",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "put on / put away / put the phone down / put money aside",
        "form": "verb",
        "definitions": [
            {
                "text": "Lakaat un dra bennak en ul lec'h.",
                "examples": [
                    "Lakait ho sac'h amañ."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "put",
        "v3": "lakaet",
        "group": "irregular"
    },
    {
        "word": "ober",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "make coffee / make a decision / make a mistake / make money",
        "form": "verb",
        "definitions": [
            {
                "text": "Sevel pe fardañ un dra bennak.",
                "examples": [
                    "Fardañ a ran kafe d'ar mintin."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "made",
        "v3": "graet",
        "group": "irregular"
    },
    {
        "word": "ober",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "do work / do the shopping / do exercise / do nothing",
        "form": "verb",
        "definitions": [
            {
                "text": "Seveniñ un ober bennak.",
                "examples": [
                    "Ober a ran ma labour bemdez."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": null,
        "v3": "graet",
        "group": "irregular"
    },
    {
        "word": "implijout",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer / use time",
        "form": "verb",
        "definitions": [
            {
                "text": "Ober gant un dra bennak.",
                "examples": [
                    "Implijout a ran ma fellgomz evit pep tra."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "implijet",
        "group": "regular"
    },
    {
        "word": "digeriñ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "open a door / open an account / open a shop / open at nine",
        "opposite": "close",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Digeriñ un dra bennak serr.",
                "examples": [
                    "Digeriñ a ra ar burev da eizh eur."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "opened",
        "v3": "digoret",
        "group": "iñ"
    },
    {
        "word": "serriñ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "close a door / close at six / close an account / close the meeting",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Serriñ un dra bennak digor.",
                "examples": [
                    "Serriñ a ra ar burev da c'hwec'h eur."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "closed",
        "v3": "serret",
        "group": "iñ"
    },
    {
        "word": "kregiñ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "start work / start a meeting / start a new job",
        "opposite": "finish",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Kregiñ gant un ober bennak.",
                "examples": [
                    "Kregiñ a ran gant ma labour da eizh eur hanter."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "started",
        "v3": "kroget",
        "group": "iñ"
    },
    {
        "word": "echuiñ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finish work / finish a project / finish early / finish late",
        "opposite": "start",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Echuiñ gant un dra bennak.",
                "examples": [
                    "Echuiñ a ra he labour da bemp eur."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "finished",
        "v3": "echuet",
        "group": "iñ"
    },
    {
        "word": "sikour",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "help someone / help with a task / help out / ask for help",
        "form": "verb",
        "definitions": [
            {
                "text": "Reiñ dorn da unan bennak.",
                "examples": [
                    "Sikour a ra he c'henlabourerien nevez."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "helped",
        "v3": "sikouret",
        "group": "regular"
    },
    {
        "word": "klask",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "try to do / try hard / try something new / give it a try",
        "form": "verb",
        "definitions": [
            {
                "text": "Klask ober un dra bennak.",
                "examples": [
                    "Klask a ran respont d'ar c'hemennadurioù bepred."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tried",
        "v3": "klasket",
        "group": "regular"
    },
    {
        "word": "diskouez",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "show someone how / show a document / show interest",
        "form": "verb",
        "definitions": [
            {
                "text": "Lakaat unan bennak da welet un dra bennak.",
                "examples": [
                    "Gallout a rit diskouez din penaos e ya ar reizhiad en-dro?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "showed",
        "v3": "diskouezet",
        "group": "irregular"
    },
    {
        "word": "kavout",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "find a job / find out / find it difficult / find time",
        "form": "verb",
        "definitions": [
            {
                "text": "Kavout un dra bennak a glasker.",
                "examples": [
                    "Kavet am eus ul labour nevez."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "found",
        "v3": "kavet",
        "group": "irregular"
    },
    {
        "word": "derc'hel",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "keep going / keep quiet / keep a record / keep in touch",
        "form": "verb",
        "definitions": [
            {
                "text": "Derc'hel un dra bennak gantañ.",
                "examples": [
                    "Dalc'hit ar skrid-resev."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "kept",
        "v3": "dalc'het",
        "group": "irregular"
    },
    {
        "word": "koll",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "lose a job / lose money / lose weight / lose time",
        "opposite": "win",
        "oppositeEmoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "Koll un dra bennak.",
                "examples": [
                    "Kollet am eus ma alc'hwezioù."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lost",
        "v3": "kollet",
        "group": "irregular"
    },
    {
        "word": "troc'hañ",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "cut costs / cut spending / cut short / cut in half",
        "form": "verb",
        "definitions": [
            {
                "text": "Troc'hañ un dra bennak gant ur gontell.",
                "examples": [
                    "Troc'hañ a ra ar bara."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cut",
        "v3": "troc'het",
        "group": "irregular"
    },
    {
        "word": "treiñ",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "turn on / turn off / turn left / turn right",
        "form": "verb",
        "definitions": [
            {
                "text": "Cheñch tu.",
                "examples": [
                    "Troit a-gleiz e-kichen ar burev."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned",
        "v3": "troet",
        "group": "iñ"
    },
    {
        "word": "degas",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🎁",
        "subtext": "bring someone / bring food / bring a document / bring up",
        "form": "verb",
        "definitions": [
            {
                "text": "Degas un dra bennak gant unan.",
                "examples": [
                    "Degasit ho pasporzh."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "brought",
        "v3": "degaset",
        "group": "irregular"
    },
    {
        "word": "lavarout",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗨️",
        "subtext": "say hello / say yes / say no / say something",
        "form": "verb",
        "definitions": [
            {
                "text": "Lavarout un dra bennak gant ar genou.",
                "examples": [
                    "Lavarout a ra 'demat' d'ar mintin."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "said",
        "v3": "lavaret",
        "group": "irregular"
    },
    {
        "word": "kontañ",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "tell the truth / tell someone / tell a story / tell someone about",
        "form": "verb",
        "definitions": [
            {
                "text": "Reiñ titouroù da unan bennak.",
                "examples": [
                    "Kontañ a ra d'ar skipailh ar cheñchamantoù."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "told",
        "v3": "kontet",
        "group": "irregular"
    },
    {
        "word": "goulenn",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "ask a question / ask for help / ask about / ask someone",
        "form": "verb",
        "definitions": [
            {
                "text": "Goulenn un dra bennak digant unan bennak.",
                "examples": [
                    "Goulenn a ra o ali goude pep displegadenn."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asked",
        "v3": "goulennet",
        "group": "regular"
    },
    {
        "word": "komz",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "speak to someone / speak English / speak clearly / speak at a meeting",
        "form": "verb",
        "definitions": [
            {
                "text": "Komz gant unan bennak.",
                "examples": [
                    "Komz a ra galleg."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spoke",
        "v3": "komzet",
        "group": "irregular"
    },
    {
        "word": "kaozeal",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "💬",
        "subtext": "talk to someone / talk about / talk openly / talk for a long time",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaozeal gant unan bennak.",
                "examples": [
                    "Kaozeal a ra gant e rener diwar-benn ar gudenn."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "talked",
        "v3": "kaozeet",
        "group": "al"
    },
    {
        "word": "gervel",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
        "form": "verb",
        "definitions": [
            {
                "text": "Gervel unan bennak dre bellgomz.",
                "examples": [
                    "Gervel a ran ma fratid amzer d'ar mintin."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "galvet",
        "group": "el"
    },
    {
        "word": "skrivañ",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "write an email / write a report / write a letter / write notes",
        "opposite": "read",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Skrivañ gerioù war baper pe war ur skramm.",
                "examples": [
                    "Skrivañ a ran posteloù e-pad an deiz."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wrote",
        "v3": "skrivet",
        "group": "irregular"
    },
    {
        "word": "lenn",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "read a book / read the news / read a contract / read carefully",
        "opposite": "write",
        "oppositeEmoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Lenn gerioù skrivet.",
                "examples": [
                    "Lenn a ra keleier bemdez."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "read",
        "v3": "lennet",
        "group": "irregular"
    },
    {
        "word": "selaou",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "listen to music / listen carefully / listen to a podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "Selaou ouzh un dra bennak.",
                "examples": [
                    "Selaou a ran podkastoù pa vezan o labourat."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "listened",
        "v3": "selaouet",
        "group": "regular"
    },
    {
        "word": "respont",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "answer a question / answer the phone / answer an email",
        "form": "verb",
        "definitions": [
            {
                "text": "Respont d'ur goulenn.",
                "examples": [
                    "Respont a ra buan d'ar posteloù."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "answered",
        "v3": "respontet",
        "group": "regular"
    },
    {
        "word": "adzlavarout",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "repeat that / repeat yourself / repeat an order",
        "form": "verb",
        "definitions": [
            {
                "text": "Lavarout un dra bennak ur wech ouzhpenn.",
                "examples": [
                    "Adlavarit an dra-se, mar plij."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repeated",
        "v3": "adlavaret",
        "group": "regular"
    },
    {
        "word": "mont",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "go to work / go home / go out / go shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "Mont d'ul lec'h bennak.",
                "examples": [
                    "Mont a ran d'al labour gant ar c'harr-boutin."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": null,
        "v3": "aet",
        "group": "irregular"
    },
    {
        "word": "dont",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "come home / come to work / come back / come here",
        "opposite": "go",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Dont d'ul lec'h bennak.",
                "examples": [
                    "Dont a ra d'ar burev da nav eur."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "came",
        "v3": "deut",
        "group": "irregular"
    },
    {
        "word": "bale",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "walk to work / walk home / walk slowly / walk every day",
        "form": "verb",
        "definitions": [
            {
                "text": "Mont war-droad.",
                "examples": [
                    "Bale a ra bemdez evit mont d'al labour."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "walked",
        "v3": "balet",
        "group": "regular"
    },
    {
        "word": "bleniañ",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "drive to work / drive a car / drive home / drive carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "Bleniañ ur c'harr.",
                "examples": [
                    "Bleniañ a ra e garr."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drove",
        "v3": "bleniet",
        "group": "irregular"
    },
    {
        "word": "nijout",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "fly to a city / fly business class / fly economy",
        "form": "verb",
        "definitions": [
            {
                "text": "Mont dre an aer.",
                "examples": [
                    "Nijout a ra da Bariz evit emvodoù."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "flew",
        "v3": "nijet",
        "group": "irregular"
    },
    {
        "word": "degouezhout",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "arrive at work / arrive late / arrive on time / arrive home",
        "form": "verb",
        "definitions": [
            {
                "text": "Degouezhout en ul lec'h bennak.",
                "examples": [
                    "Degouezhout a ra d'ar burev da nav eur."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arrived",
        "v3": "degouezhet",
        "group": "regular"
    },
    {
        "word": "kuitaat",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "leave home / leave work / leave early / leave late",
        "form": "verb",
        "definitions": [
            {
                "text": "Kuitaat ul lec'h bennak.",
                "examples": [
                    "Kuitaat a ran ar gêr da eizh eur hag ur c'hard."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "left",
        "v3": "kuitaet",
        "group": "irregular"
    },
    {
        "word": "dilec'hiañ",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "move to a new place / move in / move out / move house",
        "form": "verb",
        "definitions": [
            {
                "text": "Mont da chom pe da labourat en ul lec'h all.",
                "examples": [
                    "Dilojet o deus en un ranndi brasoc'h."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "moved",
        "v3": "dilec'hiet",
        "group": "añ"
    },
    {
        "word": "distreiñ",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "return home / return to work / return a call / return from",
        "form": "verb",
        "definitions": [
            {
                "text": "Distreiñ d'al lec'h ma oad.",
                "examples": [
                    "Distreiñ a ra eus e veaj d'ar gwener."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "returned",
        "v3": "distroet",
        "group": "iñ"
    },
    {
        "word": "beajiñ",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "travel for work / travel abroad / travel by train",
        "form": "verb",
        "definitions": [
            {
                "text": "Mont eus ul lec'h d'un lec'h all pell.",
                "examples": [
                    "Beajiñ a ra teir gwech ar miz evit e labour."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "traveled",
        "v3": "beajet",
        "group": "iñ"
    },
    {
        "word": "debriñ",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
        "opposite": "drink",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Lakaat boued en e c'henou hag e lonkañ.",
                "examples": [
                    "Debriñ a reomp da seizh eur."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ate",
        "v3": "debret",
        "group": "irregular"
    },
    {
        "word": "evañ",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "drink coffee / drink tea / drink water / drink beer",
        "opposite": "eat",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Lakaat dourenn en e c'henou hag e lonkañ.",
                "examples": [
                    "Evañ a ran dour."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drank",
        "v3": "evet",
        "group": "irregular"
    },
    {
        "word": "kousket",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
        "opposite": "wake up",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Diskuizhañ gant an daoulagad serret.",
                "examples": [
                    "Kousket a ra seizh eurvezh an deiz."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "slept",
        "v3": "kousket",
        "group": "irregular"
    },
    {
        "word": "poazhañ",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cook dinner / cook a meal / cook at home / cook for someone",
        "form": "verb",
        "definitions": [
            {
                "text": "Fardañ boued.",
                "examples": [
                    "Poazhañ a ra koan bemdez."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cooked",
        "v3": "poazhet",
        "group": "añ"
    },
    {
        "word": "naetaat",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "clean the flat / clean the kitchen / clean up / clean regularly",
        "form": "verb",
        "definitions": [
            {
                "text": "Lakaat un dra bennak da vezañ naet.",
                "examples": [
                    "Naetaat a ran an ranndi bep sizhun."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cleaned",
        "v3": "naetaet",
        "group": "regular"
    },
    {
        "word": "dougen",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "wear a suit / wear glasses / wear casual clothes",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout dilhad war an norf.",
                "examples": [
                    "Dougen a ra ur gwiskamant evit mont d'al labour."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wore",
        "v3": "douget",
        "group": "irregular"
    },
    {
        "word": "walc'hiñ",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "wash the dishes / wash clothes / wash your hands",
        "form": "verb",
        "definitions": [
            {
                "text": "Naetaat un dra bennak gant dour.",
                "examples": [
                    "Walc'hiñ a ra e garr bep sul."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "walc'het",
        "group": "iñ"
    },
    {
        "word": "prenañ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "buy food / buy a ticket / buy online / buy a house",
        "opposite": "sell",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout un dra bennak gant arc'hant.",
                "examples": [
                    "Prenañ a ra boued enlinenn."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bought",
        "v3": "prenet",
        "group": "irregular"
    },
    {
        "word": "paeañ",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "pay a bill / pay rent / pay by card / pay in cash",
        "form": "verb",
        "definitions": [
            {
                "text": "Reiñ arc'hant evit un dra bennak.",
                "examples": [
                    "Paeañ a ran ma fakturennoù."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "paid",
        "v3": "paeet",
        "group": "irregular"
    },
    {
        "word": "dispendiñ",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "spend money / spend on food / spend on rent / spend time",
        "form": "verb",
        "definitions": [
            {
                "text": "Implijout arc'hant evit paeañ traoù.",
                "examples": [
                    "Dispendiñ a ra re a arc'hant evit ar boued."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spent",
        "v3": "dispendet",
        "group": "irregular"
    },
    {
        "word": "espern",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "save money / save for a holiday / save for a house",
        "opposite": "spend",
        "oppositeEmoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "Mirout arc'hant.",
                "examples": [
                    "Espern a ra kant euro bep miz."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "saved",
        "v3": "espernet",
        "group": "regular"
    },
    {
        "word": "labourat",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "work from home / work full-time / work hard / work late",
        "form": "verb",
        "definitions": [
            {
                "text": "Seveniñ labourioù.",
                "examples": [
                    "Labourat a ra er gêr teir gwech ar sizhun."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "worked",
        "v3": "labouret",
        "group": "regular"
    },
    {
        "word": "bevañ",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout un ti en ul lec'h bennak.",
                "examples": [
                    "Bevañ a ra en un ranndi e-kichen ar greizenn-gêr."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "bevet",
        "group": "añ"
    },
    {
        "word": "soñjal",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "think about / think of / think it is / think carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout ur soñj pe un ali.",
                "examples": [
                    "Soñjal a ran eo ur mennozh mat."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "thought",
        "v3": "soñjet",
        "group": "irregular"
    },
    {
        "word": "gouzout",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "know someone / know the answer / know a place / know how to",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout titouroù diwar-benn un dra bennak.",
                "examples": [
                    "Gouzout a ran he anv."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "knew",
        "v3": "gouezet",
        "group": "irregular"
    },
    {
        "word": "fellout",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🙏",
        "subtext": "want a job / want to leave / want more money / want help",
        "form": "verb",
        "definitions": [
            {
                "text": "C'hoantaat un dra bennak.",
                "examples": [
                    "Fellout a ra din kafe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "fallet",
        "group": "regular"
    },
    {
        "word": "ezhomm",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "need help / need time / need money / need to rest",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout ezhomm eus un dra bennak.",
                "examples": [
                    "Ezhomm am eus diskuizhañ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "needed",
        "v3": "ezhommet",
        "group": "regular"
    },
    {
        "word": "karet",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout plijadur gant un dra bennak.",
                "examples": [
                    "Karet a ran ma labour."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liked",
        "v3": "karet",
        "group": "et"
    },
    {
        "word": "karout",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "love someone / love doing / love a place / love the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout karantez evit unan bennak.",
                "examples": [
                    "Karout a ra e labour."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "loved",
        "v3": "karet",
        "group": "regular"
    },
    {
        "word": "kazout",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😡",
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout kasoni evit un dra bennak.",
                "examples": [
                    "Kazout a ra an emvodoù hir."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hated",
        "v3": "kazet",
        "group": "regular"
    },
    {
        "word": "esperout",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "hope for / hope to do / hope that / I hope so",
        "form": "verb",
        "definitions": [
            {
                "text": "C'hoantaat e vefe un dra bennak.",
                "examples": [
                    "Esperout a ran kaout ur sav-prizioù er bloaz-mañ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoped",
        "v3": "esperet",
        "group": "regular"
    },
    {
        "word": "kaout soñj",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "remember to do / remember a name / remember clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "Mirout un dra bennak en e eñvor.",
                "examples": [
                    "Kaout soñj eus an deiziad, mar plij."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "remembered",
        "v3": "bet soñj",
        "group": "regular"
    },
    {
        "word": "ankounac'haat",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "forget a name / forget to do / forget about / completely forget",
        "form": "verb",
        "definitions": [
            {
                "text": "Na gaout soñj ken eus un dra bennak.",
                "examples": [
                    "N'ankounac'hait ket an emvod."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "forgot",
        "v3": "ankounac'haet",
        "group": "irregular"
    },
    {
        "word": "kompren",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💡",
        "subtext": "understand a problem / understand someone / understand clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "Kompren ster un dra bennak.",
                "examples": [
                    "Kompren a ran ar gevrat."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "understood",
        "v3": "komprenet",
        "group": "irregular"
    },
    {
        "word": "divizout",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "decide to do / decide on / make a decision / hard to decide",
        "form": "verb",
        "definitions": [
            {
                "text": "Dibab un dra bennak.",
                "examples": [
                    "Divizet he deus cheñch micher."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "decided",
        "v3": "divizet",
        "group": "regular"
    },
    {
        "word": "plijout",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout plijadur gant un dra bennak.",
                "examples": [
                    "Plijout a ra dezhi labourat er gêr."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "enjoyed",
        "v3": "plijet",
        "group": "regular"
    },
    {
        "word": "gwelet",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "see a doctor / see friends / see the problem / see clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "Gwelet gant an daoulagad.",
                "examples": [
                    "Gwelet a rin ma medisin war-choaz."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "saw",
        "v3": "gwelet",
        "group": "irregular"
    },
    {
        "word": "klevet",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "hear news / hear from someone / hear a sound / hear clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "Klevet gant an divskouarn.",
                "examples": [
                    "Klevet a ran ar fust-dihun bep mintin."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "heard",
        "v3": "klevet",
        "group": "irregular"
    },
    {
        "word": "dihuniñ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "wake up early / wake up late / wake up tired",
        "opposite": "sleep",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Paouez da gousket.",
                "examples": [
                    "Dihuniñ a ran da c'hwec'h eur hanter bep mintin."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "woke up",
        "v3": "dihunet",
        "group": "irregular"
    },
    {
        "word": "sellet",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "watch TV / watch a film / watch the news / watch closely",
        "definitions": [
            {
                "text": "Sellet ouzh un dra bennak e-pad un tamm amzer.",
                "examples": [
                    "Sellet a ra ouzh ar c'heleier bep mintin."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "watched",
        "v3": "sellet",
        "group": "et"
    },
    {
        "word": "sellout",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "look at / look for / look like / look happy",
        "form": "verb",
        "definitions": [
            {
                "text": "Sellout ouzh un dra bennak.",
                "examples": [
                    "Sellout ouzh al luc'hskeudenn-mañ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "looked",
        "v3": "sellet",
        "group": "regular"
    },
    {
        "word": "c'hoari",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "play sport / play a game / play music / play a role",
        "form": "verb",
        "definitions": [
            {
                "text": "C'hoari ur c'hoari pe ur sport.",
                "examples": [
                    "C'hoari a ra mell-droad d'an dibenn-sizhun."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "played",
        "v3": "c'hoariet",
        "group": "regular"
    },
    {
        "word": "redek",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "run a race / run a business / run out of / run late",
        "form": "verb",
        "definitions": [
            {
                "text": "Redek buan gant e dreid.",
                "examples": [
                    "Redek a ran er park."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ran",
        "v3": "redet",
        "group": "irregular"
    },
    {
        "word": "azezañ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "sit down / sit at a desk / sit in a meeting / sit quietly",
        "opposite": "stand",
        "oppositeEmoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "Azezañ war ur gador.",
                "examples": [
                    "Azezañ a ra ouzh e vurev e-pad eizh eurvezh an deiz."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sat",
        "v3": "azezeet",
        "group": "irregular"
    },
    {
        "word": "sevel",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "stand up / stand in a queue / stand by / stand out",
        "opposite": "sit",
        "oppositeEmoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "Chom en e sav.",
                "examples": [
                    "Sevel a ra pa gomz."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "stood",
        "v3": "savet",
        "group": "irregular"
    },
    {
        "word": "kejañ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Kejañ gant unan bennak.",
                "examples": [
                    "Kejañ a reomp bep lun."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "met",
        "v3": "kejet",
        "subtext": "meet a client / meet a colleague / meet for lunch / meet online",
        "group": "irregular"
    },
    {
        "word": "deskiñ",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "learn a language / learn a skill / learn from / learn how to",
        "form": "verb",
        "definitions": [
            {
                "text": "Deskiñ un dra bennak nevez.",
                "examples": [
                    "Deskiñ a ra spagnoleg evit he labour nevez."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "learned / learnt",
        "v3": "desket",
        "group": "iñ"
    },
    {
        "word": "cheñch",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "change jobs / change your mind / change the plan / change something",
        "form": "verb",
        "definitions": [
            {
                "text": "Lakaat un dra bennak da vezañ disheñvel.",
                "examples": [
                    "Cheñchet he deus labour div wech e-pad tri bloaz."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "changed",
        "v3": "cheñchet",
        "group": "regular"
    },
    {
        "word": "paouez",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "stop doing / stop working / stop a habit / stop someone",
        "form": "verb",
        "definitions": [
            {
                "text": "Paouez gant un ober bennak.",
                "examples": [
                    "Paouezet en deus da vont gant ar c'harr-boutin."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stopped",
        "v3": "paouezet",
        "group": "regular"
    },
    {
        "word": "ouzhpennañ",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "add some sugar / add to / add up / add a comment",
        "form": "verb",
        "definitions": [
            {
                "text": "Lakaat un dra bennak ouzhpenn.",
                "examples": [
                    "Ouzhpennit un tamm sukr en ho te."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "added",
        "v3": "ouzhpennet",
        "group": "añ"
    },
    {
        "word": "gounit",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "win a game / win a prize / win an award / win a contract",
        "opposite": "lose",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "Gounit ur c'hoari pe ur genstrivadeg.",
                "examples": [
                    "Fellout a ra dimp gounit ar c'hoari."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "won",
        "v3": "gounezet",
        "group": "irregular"
    },
    {
        "word": "gortoz",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "wait for someone / wait in a queue / wait a moment",
        "form": "verb",
        "definitions": [
            {
                "text": "Gortoz e-pad un tamm amzer.",
                "examples": [
                    "Gortozet en deus ugent munutenn a-raok ma krogfe an emvod."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waited",
        "v3": "gortozet",
        "group": "regular"
    },
    {
        "word": "mervel",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "die of / die for / die from / die out",
        "opposite": "live",
        "oppositeEmoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Paouez da vevañ.",
                "examples": [
                    "Ar plant a varv hep dour."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "died",
        "v3": "marvet",
        "group": "el"
    },
    {
        "word": "kas",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Kas un dra bennak da unan bennak.",
                "examples": [
                    "Kas a ra ugent postel a-raok lein."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sent",
        "v3": "kaset",
        "subtext": "send an email / send a message / send a report / send a file",
        "group": "irregular"
    },
    {
        "word": "chom",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "stay at home / stay in a hotel / stay up late / stay with someone",
        "form": "verb",
        "definitions": [
            {
                "text": "Chom en ul lec'h bennak.",
                "examples": [
                    "Chom a ran er gêr d'ar sul."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stayed",
        "v3": "chomet",
        "group": "regular"
    },
    {
        "word": "kouezhañ",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "fall down / fall off / fall in love / fall asleep",
        "form": "verb",
        "definitions": [
            {
                "text": "Kouezhañ d'an douar.",
                "examples": [
                    "Ar reilh-derv a gouezh en diskar-amzer."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fell",
        "v3": "kouezhet",
        "group": "irregular"
    },
    {
        "word": "tremen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "pass an exam / pass the ball / pass time / pass the sugar",
        "form": "verb",
        "definitions": [
            {
                "text": "Tremen e-biou un dra bennak.",
                "examples": [
                    "Tremen a ran e-biou ar park evit mont d'ar gêr."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "passed",
        "v3": "tremenet",
        "group": "regular"
    },
    {
        "word": "gwerzhañ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "sell products / sell online / sell at the market / best seller",
        "opposite": "buy",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Reiñ un dra bennak evit arc'hant.",
                "examples": [
                    "Gwerzhañ a reont frouezh er marc'had."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sold",
        "v3": "gwerzhet",
        "group": "irregular"
    },
    {
        "word": "Sachañ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "pull the door / pull something / pull up / pull away",
        "opposite": "push",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Sachañ un dra bennak davedoc'h.",
                "examples": [
                    "Sachit war an nor evit he digeriñ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pulled",
        "v3": "sachet",
        "group": "añ"
    },
    {
        "word": "pousañ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "push the button / push a cart / push away / push through",
        "opposite": "pull",
        "oppositeEmoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "Pousañ un dra bennak kuit ac'hanoc'h.",
                "examples": [
                    "Pousit war ar bouton."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pushed",
        "v3": "pouset",
        "group": "añ"
    },
    {
        "word": "dougen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "carry a bag / carry notes / carry out / carry on",
        "form": "verb",
        "definitions": [
            {
                "text": "Dougen un dra bennak ganeoc'h.",
                "examples": [
                    "Dougen a ran ma urzhiataer hezoug bep tro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried",
        "v3": "douget",
        "group": "regular"
    },
    {
        "word": "terriñ",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "break the glass / break a law / take a break / break down",
        "form": "verb",
        "definitions": [
            {
                "text": "Terriñ un dra bennak e meur a damm.",
                "examples": [
                    "Na dorrit ket ar gwerennoù."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "broke",
        "v3": "torret",
        "group": "irregular"
    },
    {
        "word": "resev",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "receive an email / receive a gift / receive payment / receive news",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout un dra bennak kaset gant unan bennak.",
                "examples": [
                    "Resev a ran kalz lizhiri."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "received",
        "v3": "resevet",
        "group": "regular"
    },
    {
        "word": "emglev",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "agree with someone / agree to do / agree on / I agree",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout ar memes ali hag unan bennak all.",
                "examples": [
                    "A-du on ganeoc'h."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "agreed",
        "v3": "emglezet",
        "group": "regular"
    },
    {
        "word": "treset",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "draw a picture / draw a conclusion / draw attention / draw a line",
        "form": "verb",
        "definitions": [
            {
                "text": "Sevel ur skeudenn gant ur c'hreyon.",
                "examples": [
                    "Plijout a ra din tresañ laboused."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew",
        "v3": "treset",
        "group": "irregular"
    },
    {
        "word": "lodennañ",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "share a room / share information / share an idea / share with",
        "form": "verb",
        "definitions": [
            {
                "text": "Reiñ un darn eus un dra bennak da unan bennak all.",
                "examples": [
                    "Lodennañ a reomp ar pizza."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shared",
        "v3": "lodennet",
        "group": "añ"
    },
    {
        "word": "mousc'hoarzhin",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "smile at someone / a big smile / smile broadly",
        "opposite": "cry",
        "oppositeEmoji": "😢",
        "form": "verb",
        "definitions": [
            {
                "text": "Diskouez plijadur gant e c'henou.",
                "examples": [
                    "Ur mousc'hoarzh brav he deus."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "smiled",
        "v3": "mousc'hoarzhet",
        "group": "regular"
    },
    {
        "word": "gouelañ",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "cry for help / cry out / start crying / cry about something",
        "opposite": "smile",
        "oppositeEmoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "Gouelañ gant an daeroù.",
                "examples": [
                    "Gouelañ a ra ar bugel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cried",
        "v3": "gouelet",
        "group": "añ"
    },
    {
        "word": "dañsal",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "dance to music / go dancing / dance together / slow dance",
        "form": "verb",
        "definitions": [
            {
                "text": "Dañsal gant sonerezh.",
                "examples": [
                    "Plijout a ra din dañsal."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "danced",
        "v3": "dañset",
        "group": "al"
    },
    {
        "word": "kanañ",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "sing a song / sing along / sing well / lead singer",
        "form": "verb",
        "definitions": [
            {
                "text": "Kanañ gant e vouezh.",
                "examples": [
                    "Plijout a ra din kanañ er strinkadell."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sang",
        "v3": "kanet",
        "group": "irregular"
    },
    {
        "word": "lammat",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "jump high / jump over / jump up / jump in",
        "form": "verb",
        "definitions": [
            {
                "text": "Sevel kuit diouzh an douar.",
                "examples": [
                    "Gallout a rit lammat uhel?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "jumped",
        "v3": "lammet",
        "group": "regular"
    },
    {
        "word": "neuñvial",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "go swimming / swim across / swim laps / swim well",
        "form": "verb",
        "definitions": [
            {
                "text": "Neuñvial en dour.",
                "examples": [
                    "Neuñvial a ran bep mintin."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "swam",
        "v3": "neuñviet",
        "group": "irregular"
    },
    {
        "word": "studiañ",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "study English / study for an exam / study hard / self-study",
        "form": "verb",
        "definitions": [
            {
                "text": "Studiañ evit deskiñ traoù.",
                "examples": [
                    "Studiañ a ra evit ur skrid-testeni micherel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "studied",
        "v3": "studiet",
        "group": "añ"
    },
    {
        "word": "kelenn",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "teach someone / teach a subject / teach how to / teach a class",
        "form": "verb",
        "definitions": [
            {
                "text": "Reiñ kentelioù da unan bennak.",
                "examples": [
                    "Kelenn a ra barregezhioù kehentiñ."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "taught",
        "v3": "kelennet",
        "group": "irregular"
    },
    {
        "word": "beajiñ bemdez",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "commute to work / daily commute / long commute / commute by train",
        "form": "verb",
        "definitions": [
            {
                "text": "Mont hag dont etre ar gêr hag al labour bemdez.",
                "examples": [
                    "Mont a ran d'ar gêr gant an tren."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "commuted",
        "v3": "beajet bemdez",
        "group": "regular"
    },
    {
        "word": "feurmiñ",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "rent a flat / rent a property / rent out a room",
        "form": "verb",
        "definitions": [
            {
                "text": "Reiñ arc'hant evit implijout un ti pe ur c'harr.",
                "examples": [
                    "Feurmiñ a reont un ranndi gant div gambr."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rented",
        "v3": "feurmet",
        "group": "iñ"
    },
    {
        "word": "ober sport",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ober sport evit ar yec'hed.",
                "examples": [
                    "Ober a ra sport peder gwech ar sizhun er sal-sport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercised",
        "v3": "graet sport",
        "subtext": "exercise regularly / exercise at the gym / exercise outdoors",
        "group": "regular"
    },
    {
        "word": "koustañ",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Prizioù un dra bennak.",
                "examples": [
                    "Koustañ a ra an ranndi mil daou c'hant euro ar miz."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "cost",
        "v3": "koustet",
        "subtext": "cost a lot / cost money / cost too much / cost less",
        "group": "irregular"
    },
    {
        "word": "pediñ",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Pediñ unan bennak d'un darvoud.",
                "examples": [
                    "Pedet o deus o holl genseurted d'ar fest."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "pedet",
        "subtext": "invite someone / invite to dinner / invite to a party",
        "group": "iñ"
    },
    {
        "word": "sevel",
        "definitions": [
            {
                "text": "Sevel diouzh ar gwele d'ar mintin.",
                "examples": [
                    "Sevel a ra da seizh eur ha fardañ kafe raktal."
                ]
            }
        ],
        "subtext": "get up early / get up late / get up quickly",
        "classification": "irregular",
        "aspect": "action",
        "v2": "got up",
        "v3": "savet",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
    },
    {
        "word": "lein",
        "definitions": [
            {
                "text": "Debriñ lein d'ar mintin.",
                "examples": [
                    "Leinañ a ra bepred a-raok kuitaat an ti."
                ]
            }
        ],
        "subtext": "have breakfast at home / have a quick breakfast / skip breakfast",
        "classification": "irregular",
        "aspect": "action",
        "v2": "had breakfast",
        "v3": "leinet",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
    },
    {
        "word": "distreiñ",
        "definitions": [
            {
                "text": "Distreiñ d'ul lec'h bennak.",
                "examples": [
                    "Distreiñ a ra eus e lein da div eur."
                ]
            }
        ],
        "subtext": "come back home / come back late / come back from a trip",
        "classification": "irregular",
        "aspect": "action",
        "v2": "came back",
        "v3": "distroet",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
    },
    {
        "word": "mont da gousket",
        "definitions": [
            {
                "text": "Mont er gwele evit kousket.",
                "examples": [
                    "Mont a reont da gousket da unnek eur bep noz."
                ]
            }
        ],
        "subtext": "go to bed early / go to bed late / go to bed tired",
        "classification": "irregular",
        "aspect": "action",
        "v2": null,
        "v3": "aet da gousket",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
    },
    {
        "word": "gwiriañ",
        "definitions": [
            {
                "text": "Gwiriañ un dra bennak.",
                "examples": [
                    "Gwiriañ a ran ma fosteloù bep mintin."
                ]
            }
        ],
        "subtext": "check emails / check messages / check a document / check the time",
        "classification": "regular",
        "aspect": "action",
        "v2": "checked",
        "v3": "gwiriet",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "añ"
    },
    {
        "word": "respont",
        "definitions": [
            {
                "text": "Respont d'ur postel pe d'ur goulenn.",
                "examples": [
                    "Respont a ra bepred d'ar posteloù er memes deiz."
                ]
            }
        ],
        "subtext": "reply to an email / reply quickly / reply to a message",
        "classification": "regular",
        "aspect": "action",
        "v2": "replied",
        "v3": "respontet",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "displegañ",
        "definitions": [
            {
                "text": "Displegañ un dra bennak d'ur strollad tud.",
                "examples": [
                    "Displegañ a ra an disoc'hoù bep gwener."
                ]
            }
        ],
        "subtext": "present a report / present ideas / present to a client",
        "classification": "regular",
        "aspect": "action",
        "v2": "presented",
        "v3": "displeget",
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "añ"
    },
    {
        "word": "kemer perzh",
        "definitions": [
            {
                "text": "Mont d'un emvod pe d'un darvoud.",
                "examples": [
                    "Kemer a ran perzh en emvod merañ bep lun."
                ]
            }
        ],
        "subtext": "attend a meeting / attend a course / attend an event",
        "classification": "regular",
        "aspect": "action",
        "v2": "attended",
        "v3": "kemeret perzh",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "merañ",
        "definitions": [
            {
                "text": "Merañ tud pe ur stad.",
                "examples": [
                    "Merañ a ra ur skipailh a eizh den."
                ]
            }
        ],
        "subtext": "manage a team / manage a project / manage time / manage stress",
        "classification": "regular",
        "aspect": "action",
        "v2": "managed",
        "v3": "meret",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "añ"
    },
    {
        "word": "fakturiñ",
        "definitions": [
            {
                "text": "Goulenn arc'hant evit ur servij.",
                "examples": [
                    "Ar mekaniker en deus fakturet tri c'hant euro."
                ]
            }
        ],
        "subtext": "charge a fee / charge for a service / charge extra",
        "classification": "regular",
        "aspect": "action",
        "v2": "charged",
        "v3": "fakturet",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "iñ"
    },
    {
        "word": "gellet paeañ",
        "definitions": [
            {
                "text": "Kaout arc'hant a-walc'h evit paeañ un dra bennak.",
                "examples": [
                    "Ne c'hellont ket paeañ un ranndi e-kreiz-kêr."
                ]
            }
        ],
        "subtext": "afford a house / afford to travel / afford something",
        "classification": "regular",
        "aspect": "stative",
        "v2": "afforded",
        "v3": "gallet paeañ",
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "añ"
    },
    {
        "word": "dleout",
        "definitions": [
            {
                "text": "Dleout arc'hant da unan bennak.",
                "examples": [
                    "Dleout a ra hanter-kant mil euro d'ar bank."
                ]
            }
        ],
        "subtext": "owe money / owe someone / owe a lot / owe nothing",
        "classification": "regular",
        "aspect": "stative",
        "v2": "owed",
        "v3": "dleet",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "gounit arc'hant",
        "definitions": [
            {
                "text": "Kaout arc'hant gant e labour.",
                "examples": [
                    "Gounit a ra ur gopr mat evel rener raktresoù."
                ]
            }
        ],
        "subtext": "earn a salary / earn money / earn more / earn enough",
        "classification": "regular",
        "aspect": "action",
        "v2": "earned",
        "v3": "gounezet arc'hant",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "gweladenniñ",
        "definitions": [
            {
                "text": "Mont da welet unan bennak pe ul lec'h bennak.",
                "examples": [
                    "Gweladenniñ a ra e dud bep eil dibenn-sizhun."
                ]
            }
        ],
        "subtext": "visit family / visit a friend / visit a city / visit regularly",
        "classification": "regular",
        "aspect": "action",
        "v2": "visited",
        "v3": "gweladennet",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "iñ"
    },
    {
        "word": "lidat",
        "definitions": [
            {
                "text": "Lidat un darvoud plijus.",
                "examples": [
                    "Lidat a reont o deiz-ha-bloaz labour asambles."
                ]
            }
        ],
        "subtext": "celebrate a birthday / celebrate success / celebrate together",
        "classification": "regular",
        "aspect": "action",
        "v2": "celebrated",
        "v3": "lidet",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "erbediñ",
        "definitions": [
            {
                "text": "Lavarout eo mat un dra bennak.",
                "examples": [
                    "Gallout a rit erbediñ din ur pretis mat e-kichen ar burev?"
                ]
            }
        ],
        "subtext": "recommend a place / recommend someone / recommend a film",
        "classification": "regular",
        "aspect": "action",
        "v2": "recommended",
        "v3": "erbedet",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "iñ"
    },
    {
        "word": "ober droug",
        "definitions": [
            {
                "text": "Ober droug pe santout droug.",
                "examples": [
                    "Droug am eus em c'hein goude bezañ chomet azezet e-pad an deiz."
                ]
            }
        ],
        "subtext": "hurt your back / hurt someone / hurt yourself / it hurts",
        "classification": "irregular",
        "aspect": "both",
        "v2": "hurt",
        "v3": "graet droug",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
    },
    {
        "word": "diskuizhañ",
        "definitions": [
            {
                "text": "Paouez da labourat evit adkemer nerzh.",
                "examples": [
                    "Diskuizhañ a ra e-pad un eurvezh goude lein bemdez."
                ]
            }
        ],
        "subtext": "rest at home / rest after work / need rest / get some rest",
        "classification": "regular",
        "aspect": "action",
        "v2": "rested",
        "v3": "diskuizhet",
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "añ"
    },
    {
        "word": "pareañ",
        "definitions": [
            {
                "text": "Paouez da vezañ klañv.",
                "examples": [
                    "Pareañ a ra eus e c'hloaz d'ar c'hein."
                ]
            }
        ],
        "subtext": "recover from illness / recover quickly / recover fully",
        "classification": "regular",
        "aspect": "action",
        "v2": "recovered",
        "v3": "pareet",
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "añ"
    },
    {
        "word": "mirout",
        "definitions": [
            {
                "text": "Mirout ul lec'h pe ur servij a-raok.",
                "examples": [
                    "Mirout a ran ma ostaleri enlinenn bepred."
                ]
            }
        ],
        "subtext": "book a hotel / book a flight / book a table / book in advance",
        "classification": "regular",
        "aspect": "action",
        "v2": "booked",
        "v3": "miret",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "aozañ ar malizenn",
        "definitions": [
            {
                "text": "Lakaat traoù en ur valizenn.",
                "examples": [
                    "Aozañ a ra he malizenn an noz a-raok he beaj."
                ]
            }
        ],
        "subtext": "pack a bag / pack a suitcase / pack lightly",
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "aozet ar malizenn",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "nullañ",
        "definitions": [
            {
                "text": "Divizout na vo ket graet un dra bennak bet raktreset.",
                "examples": [
                    "Nullañ e nijadenn en deus ranket ober abalamour m'edo klañv."
                ]
            }
        ],
        "subtext": "cancel a flight / cancel a booking / cancel a meeting",
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "nullet",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "añ"
    },
    {
        "word": "mankout",
        "definitions": [
            {
                "text": "Mankout an tren pe bezañ trist abalamour da unan bennak.",
                "examples": [
                    "Manket en deus e dren hag e ranko gortoz un eurvezh."
                ]
            }
        ],
        "subtext": "miss a train / miss a flight / miss someone / miss work",
        "classification": "regular",
        "aspect": "both",
        "v2": "missed",
        "v3": "manket",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "urzhiañ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "order food / order a drink / order online / order supplies",
        "form": "verb",
        "definitions": [
            {
                "text": "Goulenn boued pe traoù all en ur pretis pe ur stal.",
                "examples": [
                    "Urzhiañ a ran lein bepred er memes lec'h e-kichen ar burev."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ordered",
        "v3": "urzhiet",
        "group": "añ"
    },
    {
        "word": "displegañ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💡",
        "subtext": "explain a process / explain clearly / explain to someone",
        "form": "verb",
        "definitions": [
            {
                "text": "Lakaat un dra bennak da vezañ sklaer.",
                "examples": [
                    "Displegañ a ra bepred an argerzh d'an izili nevez er skipailh."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "explained",
        "v3": "displeget",
        "group": "añ"
    },
    {
        "word": "trugarekaat",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "thank someone / thank you for / many thanks",
        "form": "verb",
        "definitions": [
            {
                "text": "Lavarout trugarez da unan bennak.",
                "examples": [
                    "Trugarekaet en deus e skipailh evit o labour kalet."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "thanked",
        "v3": "trugarekaet",
        "group": "regular"
    },
    {
        "word": "en em ginnig",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "introduce yourself / introduce someone / introduce a topic",
        "form": "verb",
        "definitions": [
            {
                "text": "Lavarout e anv da unan bennak.",
                "examples": [
                    "En em ginniget en deus e penn-kentañ an emvod."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "introduced",
        "v3": "en em ginniget",
        "group": "regular"
    },
    {
        "word": "en em zistendañ",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "relax at home / relax after work / relax on holiday",
        "form": "verb",
        "definitions": [
            {
                "text": "Paouez gant al labour evit bezañ didrous.",
                "examples": [
                    "En em zistendañ a ran e-pad an dibenn-sizhun ha ne wirian ket ma fosteloù morse."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "relaxed",
        "v3": "en em zistendet",
        "group": "añ"
    },
    {
        "word": "ratreañ",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "repair something / get repaired / repair costs",
        "form": "verb",
        "definitions": [
            {
                "text": "Ratreañ traoù torret.",
                "examples": [
                    "Ar perc'henn a ratre an traoù en ranndi hogen n'eo ket buan."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repaired",
        "v3": "ratreet",
        "group": "añ"
    },
    {
        "word": "degouezhout",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "what happened / happen to someone / it happens / happen again",
        "form": "verb",
        "definitions": [
            {
                "text": "Degouezhout un dra bennak.",
                "examples": [
                    "Petra a zo degouezhet e-pad an emvod?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "happened",
        "v3": "degouezhet",
        "group": "regular"
    },
    {
        "word": "hañvalout",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🎭",
        "subtext": "seem fine / seem worried / seem happy / seem like",
        "form": "verb",
        "definitions": [
            {
                "text": "Hañvalout bezañ un dra bennak.",
                "examples": [
                    "Hañvalout a ra bezañ en e aes gant ar bratided."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "seemed",
        "v3": "hañvalet",
        "group": "regular"
    },
    {
        "word": "talvout",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "mean something / what does it mean / mean to do / I didn't mean to",
        "form": "verb",
        "definitions": [
            {
                "text": "Talvout kement hag un dra bennak.",
                "examples": [
                    "Petra a dalv ar rann-mañ er gevrat?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "meant",
        "v3": "talvezet",
        "group": "irregular"
    },
    {
        "word": "heuliañ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "follow instructions / follow someone / follow the news / follow up",
        "form": "verb",
        "definitions": [
            {
                "text": "Heuliañ reolennoù pe urzhiadoù.",
                "examples": [
                    "Heuilhit an urzhiadoù gant evezh, mar plij."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "followed",
        "v3": "heuliet",
        "group": "añ"
    },
    {
        "word": "kenderc'hel",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "continue working / continue to do / continue with / continue a task",
        "form": "verb",
        "definitions": [
            {
                "text": "Kenderc'hel da ober un dra bennak.",
                "examples": [
                    "Kendalc'het en deus da labourat goude c'hwec'h eur daoust ma ne oa ket e-tailh."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "continued",
        "v3": "kendalc'het",
        "group": "el"
    },
    {
        "word": "kreskiñ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "grow a business / grow quickly / grow by / grow into",
        "form": "verb",
        "definitions": [
            {
                "text": "Kreskiñ e ment pe e niver.",
                "examples": [
                    "Kresket eo an embregerezh a ugent dre gant er bloaz paseet."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "grew",
        "v3": "kresket",
        "group": "irregular"
    },
    {
        "word": "e-barzh",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "include something / include in / not included / price includes",
        "form": "verb",
        "definitions": [
            {
                "text": "Kaout un dra bennak e-barzh.",
                "examples": [
                    "Al lein hag ar goan a zo e-barzh ar priz."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "included",
        "v3": "bet e-barzh",
        "group": "regular"
    },
    {
        "word": "dont da vezañ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "become a manager / become popular / become clear / become important",
        "form": "verb",
        "definitions": [
            {
                "text": "Dont da vezañ un dra bennak.",
                "examples": [
                    "Dont a reas da vezañ rener goude daou vloaz hepken."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "became",
        "v3": "deut da vezañ",
        "group": "irregular"
    },
    {
        "word": "bezañ da",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "belong to someone / belong in / feel like you belong",
        "form": "verb",
        "definitions": [
            {
                "text": "Bezañ perc'henniezh unan bennak.",
                "examples": [
                    "Ar gont-mañ a zo d'ar rann arc'hant."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "belonged",
        "v3": "bet da",
        "group": "regular"
    },
    {
        "word": "dibab",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "choose between / choose to do / choose carefully / choose a career",
        "form": "verb",
        "definitions": [
            {
                "text": "Dibab un dra bennak e-touez traoù all.",
                "examples": [
                    "Dibabet he deus labourat hanter-amzer."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "chose",
        "v3": "dibabet",
        "group": "irregular"
    },
    {
        "word": "sevel",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "build a career / build a team / build experience / build trust",
        "form": "verb",
        "definitions": [
            {
                "text": "Sevel un dra bennak e-pad un amzer.",
                "examples": [
                    "Savet en deus ur brud vat e-pad dek vloaz."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "built",
        "v3": "savet",
        "group": "irregular"
    }
];
    const lang = "br";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();