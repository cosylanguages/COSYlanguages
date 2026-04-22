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
        "subtext": "kaout ul labour / kaout ur gudenn / kaout amzer",
        "synonyms": ["merenniñ"],
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
        "v2": "en devoe",
        "v3": "bet",
        "group": "irregular"
    },
    {
        "word": "santout",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "en em santiñ skuizh / en em santiñ gwelloc'h / en em santiñ klañv",
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
        "v2": "santas",
        "v3": "santet",
        "group": "irregular"
    },
    {
        "word": "reiñ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "reiñ kuzul / reiñ arc'hant / reiñ ur proad / reiñ titouroù",
        "opposite": "kemer",
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
        "v2": "roas",
        "v3": "roet",
        "group": "irregular"
    },
    {
        "word": "kemer",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "kemer ar c'harr-boutin / kemer louzoù / kemer un ehan",
        "opposite": "reiñ",
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
        "v2": "kemeras",
        "v3": "kemeret",
        "group": "irregular"
    },
    {
        "word": "kaout",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "kaout ul labour",
        "synonyms": ["bezañ skuizh", "gwellat", "mont d'ar gêr"],
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
        "v2": "en devoe",
        "v3": "bet",
        "group": "irregular"
    },
    {
        "word": "lakaat",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "lakaat / lakaat a-gostez / lakaat arc'hant a-gostez",
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
        "v2": "lakas",
        "v3": "lakaet",
        "group": "irregular"
    },
    {
        "word": "ober",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "ober kafe / ober ur fazi",
        "synonyms": ["kemer un diviz", "gounit arc'hant"],
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
        "v2": "reas",
        "v3": "graet",
        "group": "irregular"
    },
    {
        "word": "ober",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "ober e labour / ober ar gwerzh / ober sport / ober netra",
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
        "v2": "reas",
        "v3": "graet",
        "group": "irregular"
    },
    {
        "word": "implijout",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🛠️",
        "subtext": "implijout ur pellgomz / implijout an treuzdougen / implijout un urzhiataer",
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
        "v2": "implijas",
        "v3": "implijet",
        "group": "regular"
    },
    {
        "word": "digeriñ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "digeriñ un nor / digeriñ ur gont / digeriñ ur stal",
        "opposite": "serriñ",
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
        "v2": "digoras",
        "v3": "digoret",
        "group": "iñ"
    },
    {
        "word": "serriñ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "serriñ un nor / serriñ da c'hwec'h eur / serriñ ur gont",
        "opposite": "digeriñ",
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
        "v2": "serras",
        "v3": "serret",
        "group": "iñ"
    },
    {
        "word": "kregiñ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "kregiñ gant al labour / kregiñ gant an emvod / kregiñ gant ul labour nevez",
        "opposite": "echuiñ",
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
        "v2": "krogas",
        "v3": "kroget",
        "group": "iñ"
    },
    {
        "word": "echuiñ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "echuiñ gant al labour / echuiñ ur raktres / echuiñ abred",
        "opposite": "kregiñ",
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
        "v2": "echuas",
        "v3": "echuet",
        "group": "iñ"
    },
    {
        "word": "sikour",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "sikour unan bennak / sikour gant ul labour / goulenn sikour",
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
        "v2": "sikouras",
        "v3": "sikouret",
        "group": "regular"
    },
    {
        "word": "klask",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "klask ober / klask kalet / klask un dra nevez",
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
        "v2": "klaskas",
        "v3": "klasket",
        "group": "regular"
    },
    {
        "word": "diskouez",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "diskouez da unan bennak / diskouez un teul / diskouez dedenn",
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
        "v2": "diskouezas",
        "v3": "diskouezet",
        "group": "irregular"
    },
    {
        "word": "kavout",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "kavout ul labour / kavout amzer / kavout diaes",
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
        "v2": "kavas",
        "v3": "kavet",
        "group": "irregular"
    },
    {
        "word": "derc'hel",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "",
        "synonyms": ["kenderc'hel", "chom sioul", "chom e darempred"],
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
        "v2": "dalc'has",
        "v3": "dalc'het",
        "group": "irregular"
    },
    {
        "word": "koll",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "koll ul labour / koll arc'hant / koll pouez",
        "opposite": "gounit",
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
        "v2": "hollas",
        "v3": "kollet",
        "group": "irregular"
    },
    {
        "word": "troc'hañ",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "",
        "synonyms": ["trochañ mizoù", "trochañ e div"],
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
        "v2": "troc'has",
        "v3": "troc'het",
        "group": "irregular"
    },
    {
        "word": "treiñ",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "treiñ a-gleiz / treiñ a-zehou",
        "synonyms": ["enaouiñ", "lazhañ"],
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
        "v2": "troas",
        "v3": "troet",
        "group": "iñ"
    },
    {
        "word": "degas",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🎁",
        "subtext": "degas unan bennak / degas boued",
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
        "v2": "degasas",
        "v3": "degaset",
        "group": "irregular"
    },
    {
        "word": "lavarout",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗨️",
        "subtext": "lavarout demat / lavarout ya / lavarout nann / lavarout un dra bennak",
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
        "v2": "lavaras",
        "v3": "lavaret",
        "group": "irregular"
    },
    {
        "word": "kontañ",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "kontañ ar wirionez / kontañ da unan bennak / kontañ un istor",
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
        "v2": "kontas",
        "v3": "kontet",
        "group": "irregular"
    },
    {
        "word": "goulenn",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "goulenn ur goulenn / goulenn sikour / goulenn diwar-benn",
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
        "v2": "goulenne",
        "v3": "goulennet",
        "group": "regular"
    },
    {
        "word": "komz",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "komz ouzh unan bennak / komz saozneg / komz sklaer",
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
        "v2": "komzas",
        "v3": "komzet",
        "group": "irregular"
    },
    {
        "word": "kaozeal",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "💬",
        "subtext": "komz ouzh unan bennak",
        "synonyms": ["komz diwar-benn", "komz sklaer"],
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
        "v2": "kaozeas",
        "v3": "kaozeet",
        "group": "al"
    },
    {
        "word": "gervel",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📞",
        "subtext": "gervel unan bennak / gervel en-dro",
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
        "v2": "galvas",
        "v3": "galvet",
        "group": "el"
    },
    {
        "word": "skrivañ",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "skrivañ ur postel / skrivañ un danevell / skrivañ ul lizher",
        "opposite": "lenn",
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
        "v2": "skrivas",
        "v3": "skrivet",
        "group": "irregular"
    },
    {
        "word": "lenn",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "lenn ul levr / lenn ar c'heleier / lenn ur gevrat",
        "opposite": "skrivañ",
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
        "v2": "lennas",
        "v3": "lennet",
        "group": "irregular"
    },
    {
        "word": "selaou",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "selaou ouzh sonerezh / selaou gant evezh",
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
        "v2": "selaouas",
        "v3": "selaouet",
        "group": "regular"
    },
    {
        "word": "respont",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "respont d'ur goulenn / respont d'ar pellgomz",
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
        "v2": "respontas",
        "v3": "respontet",
        "group": "regular"
    },
    {
        "word": "adzlavarout",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "",
        "synonyms": ["adzilavarout an dra-se", "adober un urzh"],
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
        "v2": "adlavaras",
        "v3": "adlavaret",
        "group": "regular"
    },
    {
        "word": "mont",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "mont d'al labour / mont d'ar gêr / mont er-maez / mont da brenañ",
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
        "subtext": "dont d'ar gêr / dont d'al labour / dont en-dro / dont amañ",
        "opposite": "mont",
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
        "v2": "deuas",
        "v3": "deut",
        "group": "irregular"
    },
    {
        "word": "bale",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "mont d'al labour war droad / mont d'ar gêr war droad",
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
        "v2": "baleas",
        "v3": "balet",
        "group": "regular"
    },
    {
        "word": "bleniañ",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "mont d'al labour gant ar c'harr / bleniañ ur c'harr",
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
        "v2": "blenias",
        "v3": "bleniet",
        "group": "irregular"
    },
    {
        "word": "nijout",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "nijout d'ur gêr / nijout e kentañ klas",
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
        "v2": "nijas",
        "v3": "nijet",
        "group": "irregular"
    },
    {
        "word": "degouezhout",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "",
        "synonyms": ["erruout d'al labour", "erruout diwezhat"],
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
        "v2": "degouezhas",
        "v3": "degouezhet",
        "group": "regular"
    },
    {
        "word": "kuitaat",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "kuitaat ar gêr / kuitaat al labour / kuitaat abred",
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
        "v2": "kuitaas",
        "v3": "kuitaet",
        "group": "irregular"
    },
    {
        "word": "dilec'hiañ",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "mont da chom d'ul lec'h nevez",
        "synonyms": ["dilojiñ"],
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
        "v2": "dilec'hias",
        "v3": "dilec'hiet",
        "group": "añ"
    },
    {
        "word": "distreiñ",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "distreiñ d'ar gêr / distreiñ d'al labour",
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
        "v2": "distroas",
        "v3": "distroet",
        "group": "iñ"
    },
    {
        "word": "beajiñ",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "beajiñ evit al labour / beajiñ d'an estrenvro",
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
        "v2": "beajas",
        "v3": "beajet",
        "group": "iñ"
    },
    {
        "word": "debriñ",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "debriñ lein / debriñ merenn / debriñ koan / debriñ er-maez",
        "opposite": "evañ",
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
        "v2": "debras",
        "v3": "debret",
        "group": "irregular"
    },
    {
        "word": "evañ",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "evañ kafe / evañ te / evañ dour / evañ bier",
        "opposite": "debriñ",
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
        "v2": "evas",
        "v3": "evet",
        "group": "irregular"
    },
    {
        "word": "kousket",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "kousket mat / kousket fall / kousket kalz",
        "opposite": "dihuniñ",
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
        "v2": "kouskas",
        "v3": "kousket",
        "group": "irregular"
    },
    {
        "word": "poazhañ",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "",
        "synonyms": ["aozañ koan", "aozañ ur meuz"],
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
        "v2": "poazhas",
        "v3": "poazhet",
        "group": "añ"
    },
    {
        "word": "naetaat",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "naetaat an ranndi / naetaat ar gegin",
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
        "v2": "naetaas",
        "v3": "naetaet",
        "group": "regular"
    },
    {
        "word": "dougen",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "dougen un dilhad / dougen lunedoù",
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
        "v2": "dougas",
        "v3": "douget",
        "group": "irregular"
    },
    {
        "word": "walc'hiñ",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "walc'hiñ al listri / walc'hiñ an daouarn",
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
        "v2": "walc'has",
        "v3": "walc'het",
        "group": "iñ"
    },
    {
        "word": "prenañ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "prenañ boued / prenañ un tikeդ / prenañ enlinenn",
        "opposite": "gwerzhañ",
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
        "v2": "prenas",
        "v3": "prenet",
        "group": "irregular"
    },
    {
        "word": "paeañ",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "paeañ ur fakturenn / paeañ ar feurm",
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
        "v2": "paeas",
        "v3": "paeet",
        "group": "irregular"
    },
    {
        "word": "dispendiñ",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "",
        "synonyms": ["dispend arc'hant", "dispend amzer"],
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
        "v2": "dispendas",
        "v3": "dispendet",
        "group": "irregular"
    },
    {
        "word": "espern",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "espern arc'hant / espern evit ar vakañsoù",
        "opposite": "dispendiñ",
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
        "v2": "espernas",
        "v3": "espernet",
        "group": "regular"
    },
    {
        "word": "labourat",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "labourat er gêr / labourat leun-amzer / labourat kalet",
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
        "v2": "labouras",
        "v3": "labouret",
        "group": "regular"
    },
    {
        "word": "bevañ",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "bevañ en un ranndi / bevañ e-unan / bevañ d'an estrenvro",
        "opposite": "mervel",
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
        "v2": "bevas",
        "v3": "bevet",
        "group": "añ"
    },
    {
        "word": "soñjal",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "soñjal e / soñjal diwar-benn / soñjal gant evezh",
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
        "v2": "soñjas",
        "v3": "soñjet",
        "group": "irregular"
    },
    {
        "word": "gouzout",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "gouzout ar respont",
        "synonyms": ["anavezout unan bennak", "anavezout ul lec'h"],
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
        "v2": "gouezas",
        "v3": "gouezet",
        "group": "irregular"
    },
    {
        "word": "fellout",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🙏",
        "subtext": "fellout ul labour / fellout kuitaat / fellout muioc'h a arc'hant",
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
        "v2": "falas",
        "v3": "fallet",
        "group": "regular"
    },
    {
        "word": "ezhomm",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "kaout ezhomm sikour / kaout ezhomm amzer / kaout ezhomm arc'hant",
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
        "v2": "ezhommas",
        "v3": "ezhommet",
        "group": "regular"
    },
    {
        "word": "karet",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "karet al labour / karet beajiñ / karet unan bennak / karet ar mennozh",
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
        "v2": "karas",
        "v3": "karet",
        "group": "et"
    },
    {
        "word": "karout",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "",
        "synonyms": ["karet unan bennak", "karet ober"],
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
        "v2": "karas",
        "v3": "karet",
        "group": "regular"
    },
    {
        "word": "kazout",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😡",
        "subtext": "",
        "synonyms": ["kaout kasoni ouzh", "kasoni ober"],
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
        "v2": "kazas",
        "v3": "kazet",
        "group": "regular"
    },
    {
        "word": "esperout",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "esperout",
        "synonyms": ["kaout goanag", "spi am eus"],
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
        "v2": "esperas",
        "v3": "esperet",
        "group": "regular"
    },
    {
        "word": "kaout soñj",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "kaout soñj",
        "synonyms": ["kounaat un anv", "soñjal sklaer"],
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
        "v2": "en devoe soñj",
        "v3": "bet soñj",
        "group": "regular"
    },
    {
        "word": "ankounac'haat",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "ankounac'haat un anv",
        "synonyms": ["disoñjal ober"],
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
        "v2": "ankounac'haas",
        "v3": "ankounac'haet",
        "group": "irregular"
    },
    {
        "word": "kompren",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💡",
        "subtext": "kompren ur gudenn / kompren sklaer",
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
        "v2": "komprenas",
        "v3": "komprenet",
        "group": "irregular"
    },
    {
        "word": "divizout",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "divizout ober",
        "synonyms": ["kemer un diviz"],
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
        "v2": "divizas",
        "v3": "divizet",
        "group": "regular"
    },
    {
        "word": "plijout",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "kemer plijadur oc'h ober / kemer plijadur gant ar vuhez",
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
        "v2": "plijas",
        "v3": "plijet",
        "group": "regular"
    },
    {
        "word": "gwelet",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "gwelet ur mezeg / gwelet mignoned / gwelet sklaer",
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
        "v2": "gwelas",
        "v3": "gwelet",
        "group": "irregular"
    },
    {
        "word": "klevet",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "",
        "synonyms": ["klevout keleier", "klevout unan bennak"],
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
        "v2": "klevas",
        "v3": "klevet",
        "group": "irregular"
    },
    {
        "word": "dihuniñ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "",
        "synonyms": ["diwennañ abred", "diwennañ diwezhat"],
        "opposite": "kousket",
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
        "v2": "dihunas",
        "v3": "dihunet",
        "group": "irregular"
    },
    {
        "word": "sellet",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "sellet ouzh an tele / sellet ouzh ur film",
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
        "v2": "sellas",
        "v3": "sellet",
        "group": "et"
    },
    {
        "word": "sellout",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "",
        "synonyms": ["sellet ouzh", "klask", "bezañ heñvel ouzh"],
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
        "v2": "sellas",
        "v3": "sellet",
        "group": "regular"
    },
    {
        "word": "c'hoari",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "c'hoari sport / c'hoari ur c'hoari",
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
        "v2": "c'hoarias",
        "v3": "c'hoariet",
        "group": "regular"
    },
    {
        "word": "redek",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "redek / redek ur redadeg",
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
        "v2": "redas",
        "v3": "redet",
        "group": "irregular"
    },
    {
        "word": "azezañ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "azezañ / azezañ ouzh un daol",
        "opposite": "sevel",
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
        "v2": "azezas",
        "v3": "azezeet",
        "group": "irregular"
    },
    {
        "word": "sevel",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "sevel en e sav / chom en e sav",
        "opposite": "azezañ",
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
        "v2": "savas",
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
        "v2": "kejas",
        "v3": "kejet",
        "subtext": "kejañ gant ur c'hliant / kejañ evit merenniñ",
        "group": "irregular"
    },
    {
        "word": "deskiñ",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "deskiñ ur yezh / deskiñ un ampartiz",
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
        "v2": "deskas",
        "v3": "desket",
        "group": "iñ"
    },
    {
        "word": "cheñch",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "cheñch labour / cheñch soñj / cheñch ar raktres",
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
        "v2": "cheñchas",
        "v3": "cheñchet",
        "group": "regular"
    },
    {
        "word": "paouez",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "paouez d'ober / paouez da labourat",
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
        "v2": "paouezas",
        "v3": "paouezet",
        "group": "regular"
    },
    {
        "word": "ouzhpennañ",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "ouzhpennañ sukr / ouzhpennañ",
        "synonyms": ["lakaat un evezhiadenn"],
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
        "v2": "ouzhpennas",
        "v3": "ouzhpennet",
        "group": "añ"
    },
    {
        "word": "gounit",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "gounit ur c'hoari / gounit ur priz",
        "opposite": "koll",
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
        "v2": "gounezas",
        "v3": "gounezet",
        "group": "irregular"
    },
    {
        "word": "gortoz",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "gortoz unan bennak / gortoz ur pennad",
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
        "v2": "gortozas",
        "v3": "gortozet",
        "group": "regular"
    },
    {
        "word": "mervel",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "mervel gant / mervel evit",
        "opposite": "bevañ",
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
        "v2": "marvas",
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
        "v2": "kasas",
        "v3": "kaset",
        "subtext": "kas ur postel / kas ur gemennadenn",
        "group": "irregular"
    },
    {
        "word": "chom",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "chom er gêr / chom en ul leti",
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
        "v2": "chomas",
        "v3": "chomet",
        "group": "regular"
    },
    {
        "word": "kouezhañ",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "kouezhañ d'an douar / kouezhañ e karantez",
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
        "v2": "kouezhas",
        "v3": "kouezhet",
        "group": "irregular"
    },
    {
        "word": "tremen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "tremen un arnodenn / tremen an amzer",
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
        "v2": "tremenas",
        "v3": "tremenet",
        "group": "regular"
    },
    {
        "word": "gwerzhañ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "gwerzhañ produioù / gwerzhañ enlinenn",
        "opposite": "prenañ",
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
        "v2": "gwerzhas",
        "v3": "gwerzhet",
        "group": "irregular"
    },
    {
        "word": "Sachañ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "tennañ un dra bennak",
        "synonyms": ["tennañ an nor"],
        "opposite": "pousañ",
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
        "v2": "sachas",
        "v3": "sachet",
        "group": "añ"
    },
    {
        "word": "pousañ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "pousañ ar bouton / pousañ ur c'harrig",
        "opposite": "sachañ",
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
        "v2": "pousas",
        "v3": "pouset",
        "group": "añ"
    },
    {
        "word": "dougen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "dougen ur sac'h / dougen notennoù",
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
        "v2": "dougas",
        "v3": "douget",
        "group": "regular"
    },
    {
        "word": "terriñ",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "terriñ ar werenn / terriñ ul lezenn",
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
        "v2": "torras",
        "v3": "torret",
        "group": "irregular"
    },
    {
        "word": "resev",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "",
        "synonyms": ["degemer ur postel", "degemer ur road"],
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
        "v2": "resevas",
        "v3": "resevet",
        "group": "regular"
    },
    {
        "word": "emglev",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "bezañ a-du gant unan bennak",
        "synonyms": ["a-du emaon"],
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
        "v2": "emglezas",
        "v3": "emglezet",
        "group": "regular"
    },
    {
        "word": "treset",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "treset ur skeudenn / treset ul linenn",
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
        "v2": "tresas",
        "v3": "treset",
        "group": "irregular"
    },
    {
        "word": "lodennañ",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "",
        "synonyms": ["rannañ ur gambr", "rannañ titouroù"],
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
        "v2": "lodennas",
        "v3": "lodennet",
        "group": "añ"
    },
    {
        "word": "mousc'hoarzhin",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "mousc'hoarzhin",
        "synonyms": ["strakal ur mousc'hoarzh"],
        "opposite": "gouelañ",
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
        "v2": "mousc'hoarzhinas",
        "v3": "mousc'hoarzhet",
        "group": "regular"
    },
    {
        "word": "gouelañ",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "",
        "synonyms": ["krial evit sikour", "kregiñ da ouelañ"],
        "opposite": "mousc'hoarzhin",
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
        "v2": "gouelas",
        "v3": "gouelet",
        "group": "añ"
    },
    {
        "word": "dañsal",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "dañsal gant sonerezh / dañsal asambles",
        "synonyms": ["mont da zañsal"],
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
        "v2": "dañsas",
        "v3": "dañset",
        "group": "al"
    },
    {
        "word": "kanañ",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "kanañ ur ganaouenn / kanañ asambles",
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
        "v2": "kanas",
        "v3": "kanet",
        "group": "irregular"
    },
    {
        "word": "lammat",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "lammat uhel / lammat dreist",
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
        "v2": "lammas",
        "v3": "lammet",
        "group": "regular"
    },
    {
        "word": "neuñvial",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "",
        "synonyms": ["mont da neuñviñ", "neuñviñ mat"],
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
        "v2": "neuñvias",
        "v3": "neuñviet",
        "group": "irregular"
    },
    {
        "word": "studiañ",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "studiañ saozneg / studiañ evit un arnodenn",
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
        "v2": "studias",
        "v3": "studiet",
        "group": "añ"
    },
    {
        "word": "kelenn",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "kelenn unan bennak / kelenn ur danvez",
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
        "v2": "kelennas",
        "v3": "kelennet",
        "group": "irregular"
    },
    {
        "word": "beajiñ bemdez",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "",
        "synonyms": ["beajiñ d'al labour", "beaj pemdeziek"],
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
        "v2": "beajas bemdez",
        "v3": "beajet bemdez",
        "group": "regular"
    },
    {
        "word": "feurmiñ",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "feurmiñ un ranndi / feurmiñ ur gambr",
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
        "v2": "feurmas",
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
        "v2": "reas sport",
        "v3": "graet sport",
        "subtext": "ober sport / ober sport ingալ",
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
        "v2": "koustas",
        "v3": "koustet",
        "subtext": "",
        "synonyms": ["koust kalz", "koust arc'hant"],
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
        "v2": "pedas",
        "v3": "pedet",
        "subtext": "pediñ unan bennak / pediñ da goaniañ",
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
        "subtext": "sevel abred / sevel diwezhat",
        "classification": "irregular",
        "aspect": "action",
        "v2": "savas",
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
        "subtext": "debriñ lein er gêr",
        "classification": "irregular",
        "aspect": "action",
        "v2": "leinas",
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
        "subtext": "distreiñ d'ar gêr / distreiñ diwezhat",
        "classification": "irregular",
        "aspect": "action",
        "v2": "distroas",
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
        "subtext": "mont da gousket abred / mont da gousket diwezhat",
        "classification": "irregular",
        "aspect": "action",
        "v2": "eas da gousket",
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
        "subtext": "gwiriañ ar postelioù / gwiriañ an amzer",
        "classification": "regular",
        "aspect": "action",
        "v2": "gwirias",
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
        "subtext": "respont d'ur postel / respont prim",
        "classification": "regular",
        "aspect": "action",
        "v2": "respontas",
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
        "subtext": "",
        "synonyms": ["disկouez un danevell", "kinnig mennozhioù"],
        "classification": "regular",
        "aspect": "action",
        "v2": "displegas",
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
        "subtext": "kemer perzh en un emvod / kemer perzh en ur c'hourse",
        "classification": "regular",
        "aspect": "action",
        "v2": "kemeras perzh",
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
        "subtext": "merañ ur skipailh / merañ ur raktres",
        "classification": "regular",
        "aspect": "action",
        "v2": "meras",
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
        "subtext": "dougen evit ur servij",
        "synonyms": ["dougen ur freuz"],
        "classification": "regular",
        "aspect": "action",
        "v2": "fakturas",
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
        "subtext": "kaout an tu da brenañ un ti",
        "classification": "regular",
        "aspect": "stative",
        "v2": "gallas paeañ",
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
        "subtext": "dleout arc'hant / dleout da unan bennak",
        "classification": "regular",
        "aspect": "stative",
        "v2": "dleas",
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
        "subtext": "gounit arc'hant",
        "synonyms": ["gounit ur gopr"],
        "classification": "regular",
        "aspect": "action",
        "v2": "gounezas arc'hant",
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
        "subtext": "gweladenniñ ar familh / gweladenniñ ur mignon",
        "classification": "regular",
        "aspect": "action",
        "v2": "gweladennias",
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
        "subtext": "lidat un deiz-ha-bloaz / lidat ar berzh",
        "classification": "regular",
        "aspect": "action",
        "v2": "lidas",
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
        "subtext": "erbediñ ul lec'h / erbediñ unan bennak",
        "classification": "regular",
        "aspect": "action",
        "v2": "erbedas",
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
        "subtext": "ober droug d'e gein / ober droug da unan bennak",
        "classification": "irregular",
        "aspect": "both",
        "v2": "reas droug",
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
        "subtext": "diskuizhañ er gêr / diskuizhañ goude al labour",
        "classification": "regular",
        "aspect": "action",
        "v2": "diskuizhas",
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
        "subtext": "pareañ / pareañ buan",
        "classification": "regular",
        "aspect": "action",
        "v2": "pareas",
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
        "subtext": "mirout ul leti / mirout ur rann",
        "classification": "regular",
        "aspect": "action",
        "v2": "miras",
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
        "subtext": "",
        "synonyms": ["ober e sac'h", "ober e valizenn"],
        "classification": "regular",
        "aspect": "action",
        "v2": "aozas ar malizenn",
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
        "subtext": "nullañ un nijadenn / nullañ ur miridigezh",
        "classification": "regular",
        "aspect": "action",
        "v2": "nullas",
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
        "subtext": "mankout un tren / mankout unan bennak",
        "classification": "regular",
        "aspect": "both",
        "v2": "mankas",
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
        "subtext": "urzhiañ boued / urzhiañ enlinenn",
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
        "v2": "urzhias",
        "v3": "urzhiet",
        "group": "añ"
    },
    {
        "word": "displegañ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💡",
        "subtext": "displegañ un argerzh / displegañ sklaer",
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
        "v2": "displegas",
        "v3": "displeget",
        "group": "añ"
    },
    {
        "word": "trugarekaat",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "trugarekaat unan bennak",
        "synonyms": ["trugarez deoc'h"],
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
        "v2": "trugarekaas",
        "v3": "trugarekaet",
        "group": "regular"
    },
    {
        "word": "en em ginnig",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "en em ginnig",
        "synonyms": ["kinnig unan bennak"],
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
        "v2": "en em ginnigas",
        "v3": "en em ginniget",
        "group": "regular"
    },
    {
        "word": "en em zistendañ",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "en em zistendañ",
        "synonyms": ["diskuizhañ er gêr"],
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
        "v2": "en em zistendas",
        "v3": "en em zistendet",
        "group": "añ"
    },
    {
        "word": "ratreañ",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "repaerañ un dra bennak",
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
        "v2": "ratreas",
        "v3": "ratreet",
        "group": "añ"
    },
    {
        "word": "degouezhout",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "petra a zo c'hoarvezet / c'hoarvezout gant unan bennak",
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
        "v2": "degouezhas",
        "v3": "degouezhet",
        "group": "regular"
    },
    {
        "word": "hañvalout",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🎭",
        "subtext": "",
        "synonyms": ["seblantout bezañ mat", "seblantout bezañ laouen"],
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
        "v2": "hañvalas",
        "v3": "hañvalet",
        "group": "regular"
    },
    {
        "word": "talvout",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "ster un dra bennak",
        "synonyms": ["petra a dalv"],
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
        "v2": "talvezas",
        "v3": "talvezet",
        "group": "irregular"
    },
    {
        "word": "heuliañ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "heuliañ an urzhioù / heuliañ unan bennak",
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
        "v2": "heulias",
        "v3": "heuliet",
        "group": "añ"
    },
    {
        "word": "kenderc'hel",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "kenderc'hel da labourat / kenderc'hel gant",
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
        "v2": "kendalc'has",
        "v3": "kendalc'het",
        "group": "el"
    },
    {
        "word": "kreskiñ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "kreskiñ un embregerezh / kreskiñ buan",
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
        "v2": "kreskas",
        "v3": "kresket",
        "group": "irregular"
    },
    {
        "word": "e-barzh",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "endalvout un dra bennak / e-barzh",
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
        "v2": "oa e-barzh",
        "v3": "bet e-barzh",
        "group": "regular"
    },
    {
        "word": "dont da vezañ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "dont da vezañ merour / dont da vezañ brudet",
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
        "v2": "deuas da vezañ",
        "v3": "deut da vezañ",
        "group": "irregular"
    },
    {
        "word": "bezañ da",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "bezañ da unan bennak / bezañ en e blas",
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
        "v2": "oa da",
        "v3": "bet da",
        "group": "regular"
    },
    {
        "word": "dibab",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "dibab etre / dibab ober / dibab gant evezh",
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
        "v2": "dibabas",
        "v3": "dibabet",
        "group": "irregular"
    },
    {
        "word": "sevel",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "sevel ur vicher / sevel ur skipailh",
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
        "v2": "savas",
        "v3": "savet",
        "group": "irregular"
    }
]
    const lang = "br";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();