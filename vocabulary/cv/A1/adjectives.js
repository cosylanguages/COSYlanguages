// TODO: verify level classification
(function() {
    const lang = "cv";
    const data = [
    {
        "word": "пысăк",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Аякра яки кăна виçеллĕ, мăн япала:",
                "examples": [
                    "Пирĕн ялта пысăк шкул бар."
                ]
            }
        ],
        "subtext": "пысăк çурт",
        "synonyms": [
            "мăн"
        ],
        "comparative": "пысăкрах",
        "superlative": "иң пысăк",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "пĕчĕк"
        ],
        "transcription": "",
        "emoji": "🐘",
        "id": "cv_starter_describing_001"
    },
    {
        "word": "пĕчĕк",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пысăк мар виçеллĕ япала:",
                "examples": [
                    "Пĕлĕмре пĕчĕк сĕтел ларать."
                ]
            }
        ],
        "subtext": "пĕчĕк ача",
        "synonyms": [
            "пĕчĕкçĕ"
        ],
        "comparative": "пĕчĕкрех",
        "superlative": "иң пĕчĕк",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "пысăк"
        ],
        "transcription": "",
        "emoji": "🐭",
        "id": "cv_starter_describing_002"
    },
    {
        "word": "ăшă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çемçе, ăшă температураллă:",
                "examples": [
                    "Паян урамра ăшă кун."
                ]
            }
        ],
        "subtext": "ăшă кун",
        "synonyms": [
            "çутă"
        ],
        "comparative": "ăшăрах",
        "superlative": "иң ăшă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "сивĕ"
        ],
        "transcription": "",
        "emoji": "☀️",
        "id": "cv_starter_describing_003"
    },
    {
        "word": "сивĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пăрлă яки пĕчĕк температураллă:",
                "examples": [
                    "Хĕлле сивĕ шыв ĕçмелле мар."
                ]
            }
        ],
        "subtext": "сивĕ шыв",
        "synonyms": [
            "шăнтăм"
        ],
        "comparative": "сивĕрех",
        "superlative": "иң сивĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "ăшă"
        ],
        "transcription": "",
        "emoji": "❄️",
        "id": "cv_starter_describing_004"
    },
    {
        "word": "çĕнĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нумай пулмашăн тунă яки илнĕ япала:",
                "examples": [
                    "Эпĕ çĕнĕ кĕнеке илтĕм."
                ]
            }
        ],
        "subtext": "çĕнĕ кĕнеке",
        "synonyms": [],
        "comparative": "çĕнĕрех",
        "superlative": "иң çĕнĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "ватă"
        ],
        "transcription": "",
        "emoji": "🆕",
        "id": "cv_starter_describing_005"
    },
    {
        "word": "ватă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Озак пурăннă яки кивĕ япала:",
                "examples": [
                    "Ватă эсче ялта пурăнать."
                ]
            }
        ],
        "subtext": "ватă çын",
        "synonyms": [
            "аксакал"
        ],
        "comparative": "ватăрах",
        "superlative": "иң ватă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "çĕнĕ",
            "çамрăк"
        ],
        "transcription": "",
        "emoji": "👴",
        "id": "cv_starter_describing_006"
    },
    {
        "word": "çамрăк",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çĕнĕтен çуралнă яки яш çын:",
                "examples": [
                    "Çамрăк ĕççĕ шкулта вĕрентет."
                ]
            }
        ],
        "subtext": "çамрăк çын",
        "synonyms": [
            "яш"
        ],
        "comparative": "çамрăкрах",
        "superlative": "иң çамрăк",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "ватă"
        ],
        "transcription": "",
        "emoji": "🌱",
        "id": "cv_starter_describing_007"
    },
    {
        "word": "лайăх",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Питĕ ушлы, юрăхлă, япăх мар:",
                "examples": [
                    "Ку лайăх хыпар."
                ]
            }
        ],
        "subtext": "лайăх ĕç",
        "synonyms": [
            "буян"
        ],
        "comparative": "лайăхрах",
        "superlative": "иң лайăх",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "япăх"
        ],
        "transcription": "",
        "emoji": "👍",
        "id": "cv_starter_describing_008"
    },
    {
        "word": "япăх",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Лайăх мар, ушсăр япала:",
                "examples": [
                    "Паян япăх çанталăк."
                ]
            }
        ],
        "subtext": "япăх кун",
        "synonyms": [
            "начар"
        ],
        "comparative": "япăхрах",
        "superlative": "иң япăх",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "лайăх"
        ],
        "transcription": "",
        "emoji": "👎",
        "id": "cv_starter_describing_009"
    },
    {
        "word": "хитре",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Куçа килĕшекен, илемлĕ:",
                "examples": [
                    "Ялта хитре чечексем çусланаççĕ."
                ]
            }
        ],
        "subtext": "хитре чечек",
        "synonyms": [
            "илемлĕ"
        ],
        "comparative": "хитререх",
        "superlative": "иң хитре",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "уродливи"
        ],
        "transcription": "",
        "emoji": "🌸",
        "id": "cv_starter_describing_010"
    },
    {
        "word": "çутă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çутăлакан, тĕттĕм мар:",
                "examples": [
                    "Пĕлĕм питĕ çутă."
                ]
            }
        ],
        "subtext": "çутă пĕлĕм",
        "synonyms": [
            "ялкăш"
        ],
        "comparative": "çутăрах",
        "superlative": "иң çутă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "тĕттĕм"
        ],
        "transcription": "",
        "emoji": "💡",
        "id": "cv_starter_describing_011"
    },
    {
        "word": "тĕттĕм",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çутă çук, каçхи пĕлĕт пек:",
                "examples": [
                    "Каçхине урамра тĕттĕм пулать."
                ]
            }
        ],
        "subtext": "тĕттĕм каç",
        "synonyms": [],
        "comparative": "тĕттĕмрех",
        "superlative": "иң тĕттĕм",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "çутă"
        ],
        "transcription": "",
        "emoji": "🌙",
        "id": "cv_starter_describing_012"
    },
    {
        "word": "ырă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кам-ха бĕр çынна пулăшакан, ырă кăмăллă:",
                "examples": [
                    "Манăн анне питĕ ырă."
                ]
            }
        ],
        "subtext": "ырă çын",
        "synonyms": [
            "кăмăллă"
        ],
        "comparative": "ырăрах",
        "superlative": "иң ырă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "усал"
        ],
        "transcription": "",
        "emoji": "❤️",
        "id": "cv_starter_describing_013"
    },
    {
        "word": "усал",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çынсене усал тăвакан:",
                "examples": [
                    "Усал йытă урамра абрать."
                ]
            }
        ],
        "subtext": "усал йытă",
        "synonyms": [],
        "comparative": "усалрах",
        "superlative": "иң усал",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "ырă"
        ],
        "transcription": "",
        "emoji": "😠",
        "id": "cv_starter_describing_014"
    },
    {
        "word": "пуян",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нумай укçалă яки япалаллă:",
                "examples": [
                    "Пуян купец пысăк çурт тунă."
                ]
            }
        ],
        "subtext": "пуян çын",
        "synonyms": [],
        "comparative": "пуянрах",
        "superlative": "иң пуян",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "чухăн"
        ],
        "transcription": "",
        "emoji": "💰",
        "id": "cv_starter_describing_015"
    },
    {
        "word": "чухăн",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Укçа та япала çук çын:",
                "examples": [
                    "Чухăн ял ачи вулать."
                ]
            }
        ],
        "subtext": "чухăн çын",
        "synonyms": [
            "камшак"
        ],
        "comparative": "чухăнрах",
        "superlative": "иң чухăн",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "пуян"
        ],
        "transcription": "",
        "emoji": "🏷️",
        "id": "cv_starter_describing_016"
    },
    {
        "word": "хăвăрт",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Вăхăта перекетлесе хăвăрт куçакан:",
                "examples": [
                    "Хăвăрт машина урампа чупат."
                ]
            }
        ],
        "subtext": "хăвăрт машина",
        "synonyms": [
            "васкавлă"
        ],
        "comparative": "хăвăртрах",
        "superlative": "иң хăвăрт",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "яваш"
        ],
        "transcription": "",
        "emoji": "⚡",
        "id": "cv_starter_describing_017"
    },
    {
        "word": "яваш",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Васкамасăр, майĕпен куçакан:",
                "examples": [
                    "Яваш утни сывлăхшăн ушлă."
                ]
            }
        ],
        "subtext": "яваш утăш",
        "synonyms": [
            "сәйĕр"
        ],
        "comparative": "явашрах",
        "superlative": "иң яваш",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "хăвăрт"
        ],
        "transcription": "",
        "emoji": "🐢",
        "id": "cv_starter_describing_018"
    },
    {
        "word": "вăрăм",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пысăк тăршшĕллĕ япала:",
                "examples": [
                    "Ку вăрăм çул яла каять."
                ]
            }
        ],
        "subtext": "вăрăм çул",
        "synonyms": [],
        "comparative": "вăрăмрах",
        "superlative": "иң вăрăм",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "кĕске"
        ],
        "transcription": "",
        "emoji": "📏",
        "id": "cv_starter_describing_019"
    },
    {
        "word": "кĕске",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пĕчĕк тăршшĕллĕ:",
                "examples": [
                    "Кĕске юмах тетрадре çырнă."
                ]
            }
        ],
        "subtext": "кĕске юмах",
        "synonyms": [],
        "comparative": "кĕскерех",
        "superlative": "иң кĕске",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "вăрăм"
        ],
        "transcription": "",
        "emoji": "✂️",
        "id": "cv_starter_describing_020"
    },
    {
        "word": "тутлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çиме питĕ юрăхлă, тутлă апат:",
                "examples": [
                    "Панулми питĕ тутлă."
                ]
            }
        ],
        "subtext": "тутлă апат",
        "synonyms": [
            "лапка"
        ],
        "comparative": "тутлăрах",
        "superlative": "иң тутлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "йӳçĕ"
        ],
        "transcription": "",
        "emoji": "🍎",
        "id": "cv_starter_describing_021"
    },
    {
        "word": "йӳçĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Лимон пек яки йӳçĕ тĕслĕ:",
                "examples": [
                    "Лимон питĕ йӳçĕ."
                ]
            }
        ],
        "subtext": "йӳçĕ лимон",
        "synonyms": [],
        "comparative": "йӳçĕрех",
        "superlative": "иң йӳçĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "тутлă"
        ],
        "transcription": "",
        "emoji": "🍋",
        "id": "cv_starter_describing_022"
    },
    {
        "word": "хĕрлĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хĕвел тата юн тĕсĕ:",
                "examples": [
                    "Хĕрлĕ панулми питĕ тутлă."
                ]
            }
        ],
        "subtext": "хĕрлĕ чечек",
        "synonyms": [],
        "comparative": "хĕрлĕрех",
        "superlative": "иң хĕрлĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🔴",
        "id": "cv_starter_describing_023"
    },
    {
        "word": "шурă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Юр тата сĕт тĕсĕ:",
                "examples": [
                    "Шурă юр урамра выртать."
                ]
            }
        ],
        "subtext": "шурă юр",
        "synonyms": [],
        "comparative": "шурăрах",
        "superlative": "иң шурă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "хура"
        ],
        "transcription": "",
        "emoji": "⚪",
        "id": "cv_starter_describing_024"
    },
    {
        "word": "хура",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Каçхи тата кăмăр тĕсĕ:",
                "examples": [
                    "Унăн куçĕсем хура."
                ]
            }
        ],
        "subtext": "хура куç",
        "synonyms": [],
        "comparative": "хурарах",
        "superlative": "иң хура",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "шурă"
        ],
        "transcription": "",
        "emoji": "⚫",
        "id": "cv_starter_describing_025"
    },
    {
        "word": "симĕс",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Утă тата япрах тĕсĕ:",
                "examples": [
                    "Çуркунне курăк симĕс пулать."
                ]
            }
        ],
        "subtext": "симĕс курăк",
        "synonyms": [],
        "comparative": "симĕсрех",
        "superlative": "иң симĕс",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🟢",
        "id": "cv_starter_describing_026"
    },
    {
        "word": "кăвак",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пĕлĕт тата шыв тĕсĕ:",
                "examples": [
                    "Пĕлĕт кăвак тĕслĕ."
                ]
            }
        ],
        "subtext": "кăвак пĕлĕт",
        "synonyms": [
            "вакăр"
        ],
        "comparative": "кăвакрах",
        "superlative": "иң кăвак",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🔵",
        "id": "cv_starter_describing_027"
    },
    {
        "word": "сарă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хĕвел тата акшар тĕсĕ:",
                "examples": [
                    "Сарă чечек варара çулать."
                ]
            }
        ],
        "subtext": "сарă хĕвел",
        "synonyms": [],
        "comparative": "сарăрах",
        "superlative": "иң сарă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🟡",
        "id": "cv_starter_describing_028"
    },
    {
        "word": "мăнтăр",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тап-таса, пысăк ӳт-пӳллĕ:",
                "examples": [
                    "Мăнтăр кушак сĕтел çинче ларать."
                ]
            }
        ],
        "subtext": "мăнтăр кушак",
        "synonyms": [
            "хулăн"
        ],
        "comparative": "мăнтăррах",
        "superlative": "иң мăнтăр",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "çинçе"
        ],
        "transcription": "",
        "emoji": "🐱",
        "id": "cv_starter_describing_029"
    },
    {
        "word": "çинçе",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Яш, пысăк мар тумтирлĕ яки ӳтллĕ:",
                "examples": [
                    "Çинçе йывăç варара пĕкĕнет."
                ]
            }
        ],
        "subtext": "çинçе йывăç",
        "synonyms": [],
        "comparative": "çинçерех",
        "superlative": "иң çинçе",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "мăнтăр"
        ],
        "transcription": "",
        "emoji": "🌾",
        "id": "cv_starter_describing_030"
    },
    {
        "word": "йивĕр",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пысăк тавăрлă яки йăтма йынăш:",
                "examples": [
                    "Йивĕр сунтăх урамра ларать."
                ]
            }
        ],
        "subtext": "йивĕр сунтăх",
        "synonyms": [],
        "comparative": "йивĕррех",
        "superlative": "иң йивĕр",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "çăмăл"
        ],
        "transcription": "",
        "emoji": "🏋️",
        "id": "cv_starter_describing_031"
    },
    {
        "word": "çăмăл",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Йăтма çăмăл, йивĕр мар:",
                "examples": [
                    "Çăмăл кĕнеке тетрадьпе пĕрле выртать."
                ]
            }
        ],
        "subtext": "çăмăл кĕнеке",
        "synonyms": [],
        "comparative": "çăмăлрах",
        "superlative": "иң çăмăл",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "йивĕр"
        ],
        "transcription": "",
        "emoji": "🪶",
        "id": "cv_starter_describing_032"
    },
    {
        "word": "уçă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хупман, уçнă вырăн яки алăк:",
                "examples": [
                    "Уçă алăк урлă шкула кĕрĕм."
                ]
            }
        ],
        "subtext": "уçă алăк",
        "synonyms": [],
        "comparative": "уçăрах",
        "superlative": "иң уçă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "хупă"
        ],
        "transcription": "",
        "emoji": "🔓",
        "id": "cv_starter_describing_033"
    },
    {
        "word": "хупă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Уçман, япăнă вырăн:",
                "examples": [
                    "Хупă шкăпра кĕнеке выртать."
                ]
            }
        ],
        "subtext": "хупă алăк",
        "synonyms": [],
        "comparative": "хупăрах",
        "superlative": "иң хупă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "уçă"
        ],
        "transcription": "",
        "emoji": "🔒",
        "id": "cv_starter_describing_034"
    },
    {
        "word": "таса",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Вараланман, тап-таса япала:",
                "examples": [
                    "Таса шыв ĕçес келет."
                ]
            }
        ],
        "subtext": "таса шыв",
        "synonyms": [
            "арпун"
        ],
        "comparative": "тасарах",
        "superlative": "иң таса",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "вара"
        ],
        "transcription": "",
        "emoji": "🧼",
        "id": "cv_starter_describing_035"
    },
    {
        "word": "вара",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Лач-лач вараланнă, таса мар:",
                "examples": [
                    "Вара тумтире çумалла."
                ]
            }
        ],
        "subtext": "вара тумтир",
        "synonyms": [],
        "comparative": "варарах",
        "superlative": "иң вара",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "таса"
        ],
        "transcription": "",
        "emoji": "🧦",
        "id": "cv_starter_describing_036"
    },
    {
        "word": "хăвăртлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Питех хăвăрт куçакан:",
                "examples": [
                    "Хăвăртлă поезд хуларан хула каять."
                ]
            }
        ],
        "subtext": "хăвăртлă поезд",
        "synonyms": [],
        "comparative": "хăвăртлăрах",
        "superlative": "иң хăвăртлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🚅",
        "id": "cv_starter_describing_037"
    },
    {
        "word": "шулăтрах",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Виçеллĕ, пĕчĕкрех мар:",
                "examples": [
                    "Шулăтрах базар хула вăрринче."
                ]
            }
        ],
        "subtext": "шулăтрах хула",
        "synonyms": [],
        "comparative": "шулăтрах",
        "superlative": "иң шулăтрах",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🏬",
        "id": "cv_starter_describing_038"
    },
    {
        "word": "тирпейлĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Йĕркеллĕ, таса та тирпейлĕ:",
                "examples": [
                    "Тирпейлĕ ученик тетрадне çырать."
                ]
            }
        ],
        "subtext": "тирпейлĕ çын",
        "synonyms": [],
        "comparative": "тирпейлĕрех",
        "superlative": "иң тирпейлĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "✨",
        "id": "cv_starter_describing_039"
    },
    {
        "word": "хаклă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нумай укçа тăракан:",
                "examples": [
                    "Хаклă саса йывăçран тунă."
                ]
            }
        ],
        "subtext": "хаклă япала",
        "synonyms": [],
        "comparative": "хаклăрах",
        "superlative": "иң хаклă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "йунçă"
        ],
        "transcription": "",
        "emoji": "💎",
        "id": "cv_starter_describing_040"
    },
    {
        "word": "йунçă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пĕчĕк укçа тăракан, арзан:",
                "examples": [
                    "Йунçă кĕнеке базаррта туянрăм."
                ]
            }
        ],
        "subtext": "йунçă япала",
        "synonyms": [
            "арзан"
        ],
        "comparative": "йунçăрах",
        "superlative": "иң йунçă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "хаклă"
        ],
        "transcription": "",
        "emoji": "🏷️",
        "id": "cv_starter_describing_041"
    },
    {
        "word": "паллă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пĕтĕм çын пĕлекен:",
                "examples": [
                    "Паллă поэт ялта çуралнă."
                ]
            }
        ],
        "subtext": "паллă çын",
        "synonyms": [
            "паллăлă"
        ],
        "comparative": "паллăрах",
        "superlative": "иң паллă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🌟",
        "id": "cv_starter_describing_042"
    },
    {
        "word": "кăсăклă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Интереслĕ, ăслама кăсăклă:",
                "examples": [
                    "Кăсăклă кĕнеке вулатăп."
                ]
            }
        ],
        "subtext": "кăсăклă кĕнеке",
        "synonyms": [],
        "comparative": "кăсăклăрах",
        "superlative": "иң кăсăклă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "кулянчăк"
        ],
        "transcription": "",
        "emoji": "📘",
        "id": "cv_starter_describing_043"
    },
    {
        "word": "кулянчăк",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Интерессĕр, асархаттарах мар:",
                "examples": [
                    "Паян кулянчăк урок пулчĕ."
                ]
            }
        ],
        "subtext": "кулянчăк кун",
        "synonyms": [],
        "comparative": "кулянчăкрах",
        "superlative": "иң кулянчăк",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "кăсăклă"
        ],
        "transcription": "",
        "emoji": "🥱",
        "id": "cv_starter_describing_044"
    },
    {
        "word": "шăп",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Сас-хус çук, шăп вырăн:",
                "examples": [
                    "Вулавăшра питĕ шăп."
                ]
            }
        ],
        "subtext": "шăп вырăн",
        "synonyms": [],
        "comparative": "шăпрах",
        "superlative": "иң шăп",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "шавлă"
        ],
        "transcription": "",
        "emoji": "🤫",
        "id": "cv_starter_describing_045"
    },
    {
        "word": "шавлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нумай сас-хуслă, абракан:",
                "examples": [
                    "Шавлă урамра утнашăн ывăнтăм."
                ]
            }
        ],
        "subtext": "шавлă урам",
        "synonyms": [],
        "comparative": "шавлăрах",
        "superlative": "иң шавлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "шăп"
        ],
        "transcription": "",
        "emoji": "🔊",
        "id": "cv_starter_describing_046"
    },
    {
        "word": "хытă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Йивĕр, çемçе мар япала:",
                "examples": [
                    "Хытă сĕтел çинче кĕнеке ларать."
                ]
            }
        ],
        "subtext": "хытă çăкăр",
        "synonyms": [],
        "comparative": "хытăрах",
        "superlative": "иң хытă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "çемçе"
        ],
        "transcription": "",
        "emoji": "🪨",
        "id": "cv_starter_describing_047"
    },
    {
        "word": "çемçе",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хытă мар, çемçе сĕтел-пукан:",
                "examples": [
                    "Çемçе диван çинче канатăп."
                ]
            }
        ],
        "subtext": "çемçе çулăк",
        "synonyms": [],
        "comparative": "çемçерех",
        "superlative": "иң çемçе",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "хытă"
        ],
        "transcription": "",
        "emoji": "🛋️",
        "id": "cv_starter_describing_048"
    },
    {
        "word": "çынлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нумай çын пухăннă вырăн:",
                "examples": [
                    "Паян базар питĕ çынлă."
                ]
            }
        ],
        "subtext": "çынлă хула",
        "synonyms": [],
        "comparative": "çынлăрах",
        "superlative": "иң çынлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "👥",
        "id": "cv_starter_describing_049"
    },
    {
        "word": "тĕрĕс",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Йăнăшсăр, тĕрĕс каланă:",
                "examples": [
                    "Ку тĕрĕс хурав."
                ]
            }
        ],
        "subtext": "тĕрĕс сăмах",
        "synonyms": [],
        "comparative": "тĕрĕсрех",
        "superlative": "иң тĕрĕс",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "йăнăш"
        ],
        "transcription": "",
        "emoji": "✅",
        "id": "cv_starter_describing_050"
    },
    {
        "word": "йăнăш",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тĕрĕс мар, йăнăш тунă:",
                "examples": [
                    "Тетрадре йăнăш сăмах бар."
                ]
            }
        ],
        "subtext": "йăнăш хурав",
        "synonyms": [],
        "comparative": "йăнăшрах",
        "superlative": "иң йăнăш",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "тĕрĕс"
        ],
        "transcription": "",
        "emoji": "❌",
        "id": "cv_starter_describing_051"
    },
    {
        "word": "хĕрхенчĕк",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хĕрхенекен, ырă кăмăллă:",
                "examples": [
                    "Хĕрхенчĕк ача йытта апат патĕ."
                ]
            }
        ],
        "subtext": "хĕрхенчĕк çын",
        "synonyms": [],
        "comparative": "хĕрхенчĕкрех",
        "superlative": "иң хĕрхенчĕк",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🥺",
        "id": "cv_starter_describing_052"
    },
    {
        "word": "хастар",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ĕçленĕ чухне хăвăрт, астарлă:",
                "examples": [
                    "Хастар ĕççĕ паян нумай тунă."
                ]
            }
        ],
        "subtext": "хастар ача",
        "synonyms": [
            "хастарлă"
        ],
        "comparative": "хастаррах",
        "superlative": "иң хастар",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "кашнă"
        ],
        "transcription": "",
        "emoji": "🏃",
        "id": "cv_starter_describing_053"
    },
    {
        "word": "кашнă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ĕçлесе ывăннă, кашнă:",
                "examples": [
                    "Кашнă йытă çĕр çинче выртать."
                ]
            }
        ],
        "subtext": "кашнă тухтăр",
        "synonyms": [],
        "comparative": "кашнăрах",
        "superlative": "иң кашнă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "хастар"
        ],
        "transcription": "",
        "emoji": "😴",
        "id": "cv_starter_describing_054"
    },
    {
        "word": "ачаш",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çемçе кăмăллă, ача евĕр:",
                "examples": [
                    "Ачаш кушак ачапе вылять."
                ]
            }
        ],
        "subtext": "ачаш кушак",
        "synonyms": [],
        "comparative": "ачашрах",
        "superlative": "иң ачаш",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🐱",
        "id": "cv_starter_describing_055"
    },
    {
        "word": "паттăр",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хăраман, паттăр кăмăллă:",
                "examples": [
                    "Паттăр салтак яла сыхлать."
                ]
            }
        ],
        "subtext": "паттăр салтак",
        "synonyms": [
            "хăраман"
        ],
        "comparative": "паттăррах",
        "superlative": "иң паттăр",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "хăракан"
        ],
        "transcription": "",
        "emoji": "🛡️",
        "id": "cv_starter_describing_056"
    },
    {
        "word": "хăракан",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Мĕнрен те пулин хăракан:",
                "examples": [
                    "Хăракан каян варара каять."
                ]
            }
        ],
        "subtext": "хăракан ача",
        "synonyms": [],
        "comparative": "хăраканрах",
        "superlative": "иң хăракан",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "паттăр"
        ],
        "transcription": "",
        "emoji": "😨",
        "id": "cv_starter_describing_057"
    },
    {
        "word": "хĕвеллĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хĕвел ялкăш çутатакан кун:",
                "examples": [
                    "Паян хĕвеллĕ çанталăк."
                ]
            }
        ],
        "subtext": "хĕвеллĕ кун",
        "synonyms": [],
        "comparative": "хĕвеллĕрех",
        "superlative": "иң хĕвеллĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "çумăрлă"
        ],
        "transcription": "",
        "emoji": "☀️",
        "id": "cv_starter_describing_058"
    },
    {
        "word": "çумăрлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çумăр çуакан, урамра нымлă:",
                "examples": [
                    "Çумăрлă кунра дзонтпа утсăр."
                ]
            }
        ],
        "subtext": "çумăрлă кун",
        "synonyms": [],
        "comparative": "çумăрлăрах",
        "superlative": "иң çумăрлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "хĕвеллĕ"
        ],
        "transcription": "",
        "emoji": "🌧️",
        "id": "cv_starter_describing_059"
    },
    {
        "word": "юрлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Юр çуакан хĕллехи кун:",
                "examples": [
                    "Юрлă хĕлле урамра шурă."
                ]
            }
        ],
        "subtext": "юрлă кун",
        "synonyms": [],
        "comparative": "юрлăрах",
        "superlative": "иң юрлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "❄️",
        "id": "cv_starter_describing_060"
    },
    {
        "word": "çиллĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хытă çил ĕфекен кун:",
                "examples": [
                    "Çиллĕ çанталăкра шапка тăхăнмалла."
                ]
            }
        ],
        "subtext": "çиллĕ кун",
        "synonyms": [],
        "comparative": "çиллĕрех",
        "superlative": "иң çиллĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "💨",
        "id": "cv_starter_describing_061"
    },
    {
        "word": "пĕлĕтлĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пĕлĕтсем хупнă хĕвел пĕлĕтĕ:",
                "examples": [
                    "Паян пĕлĕтлĕ кун."
                ]
            }
        ],
        "subtext": "пĕлĕтлĕ пĕлĕт",
        "synonyms": [],
        "comparative": "пĕлĕтлĕрех",
        "superlative": "иң пĕлĕтлĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "☁️",
        "id": "cv_starter_describing_062"
    },
    {
        "word": "пушă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Никам та япала та çук вырăн:",
                "examples": [
                    "Сĕтел çинче пушă чашăк ларать."
                ]
            }
        ],
        "subtext": "пушă вырăн",
        "synonyms": [],
        "comparative": "пушăрах",
        "superlative": "иң пушă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "тулă"
        ],
        "transcription": "",
        "emoji": "🫙",
        "id": "cv_starter_describing_063"
    },
    {
        "word": "тулă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Шыв яки япала тулнă:",
                "examples": [
                    "Тулă стакан сĕтел çинче."
                ]
            }
        ],
        "subtext": "тулă стакан",
        "synonyms": [],
        "comparative": "тулăрах",
        "superlative": "иң тулă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "пушă"
        ],
        "transcription": "",
        "emoji": "🥛",
        "id": "cv_starter_describing_064"
    },
    {
        "word": "шурăмпуçлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ирхине шурăмпуç тухнă хыçăн:",
                "examples": [
                    "Шурăмпуçлă ирпе вăрантăм."
                ]
            }
        ],
        "subtext": "шурăмпуçлă ир",
        "synonyms": [],
        "comparative": "шурăмпуçлăрах",
        "superlative": "иң шурăмпуçлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🌅",
        "id": "cv_starter_describing_065"
    },
    {
        "word": "каçхи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Каçхи вăхăтра пулакан:",
                "examples": [
                    "Каçхи уçăлни питĕ кăсăклă."
                ]
            }
        ],
        "subtext": "каçхи урам",
        "synonyms": [],
        "comparative": "каçхирех",
        "superlative": "иң каçхи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "ирхи"
        ],
        "transcription": "",
        "emoji": "🌃",
        "id": "cv_starter_describing_066"
    },
    {
        "word": "ирхи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ирхи вăхăтра пулакан:",
                "examples": [
                    "Ирхи чей ĕçме юрататăп."
                ]
            }
        ],
        "subtext": "ирхи чей",
        "synonyms": [],
        "comparative": "ирхирех",
        "superlative": "иң ирхи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "каçхи"
        ],
        "transcription": "",
        "emoji": "🌄",
        "id": "cv_starter_describing_067"
    },
    {
        "word": "кăнтăрлахи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кăнтăрла пулакан апат яки ĕç:",
                "examples": [
                    "Кăнтăрлахи апат питĕ тутлă."
                ]
            }
        ],
        "subtext": "кăнтăрлахи апат",
        "synonyms": [],
        "comparative": "кăнтăрлахирех",
        "superlative": "иң кăнтăрлахи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "☀️",
        "id": "cv_starter_describing_068"
    },
    {
        "word": "çухи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çулла пулакан кун яки ĕç:",
                "examples": [
                    "Çухи каникул ачасемшăн савăнăç."
                ]
            }
        ],
        "subtext": "çухи каникул",
        "synonyms": [],
        "comparative": "çухирех",
        "superlative": "иң çухи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "хĕллехи"
        ],
        "transcription": "",
        "emoji": "🏖️",
        "id": "cv_starter_describing_069"
    },
    {
        "word": "хĕллехи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хĕлле пулакан кун яки уяв:",
                "examples": [
                    "Хĕллехи вăрман питĕ хитре."
                ]
            }
        ],
        "subtext": "хĕллехи урам",
        "synonyms": [],
        "comparative": "хĕллехирех",
        "superlative": "иң хĕллехи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "çухи"
        ],
        "transcription": "",
        "emoji": "☃️",
        "id": "cv_starter_describing_070"
    },
    {
        "word": "кĕркуннехи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кĕркунне пулакан кун:",
                "examples": [
                    "Кĕркуннехи япрахсем сарă пулаççĕ."
                ]
            }
        ],
        "subtext": "кĕркуннехи япрах",
        "synonyms": [],
        "comparative": "кĕркуннехирех",
        "superlative": "иң кĕркуннехи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🍂",
        "id": "cv_starter_describing_071"
    },
    {
        "word": "çуркуннехи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çуркунне пулакан кун:",
                "examples": [
                    "Çуркуннехи хĕвел ăшă çутатать."
                ]
            }
        ],
        "subtext": "çуркуннехи кун",
        "synonyms": [],
        "comparative": "çуркуннехирех",
        "superlative": "иң çуркуннехи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🌱",
        "id": "cv_starter_describing_072"
    },
    {
        "word": "кӳршĕри",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кӳршĕре пурăнакан:",
                "examples": [
                    "Кӳршĕри юлташ шкула каять."
                ]
            }
        ],
        "subtext": "кӳршĕри çын",
        "synonyms": [],
        "comparative": "кӳршĕрирех",
        "superlative": "иң кӳршĕри",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🏡",
        "id": "cv_starter_describing_073"
    },
    {
        "word": "шалахи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çурт ăшĕнчи, шалахи вырăн:",
                "examples": [
                    "Шалахи пĕлĕм питĕ çутă."
                ]
            }
        ],
        "subtext": "шалахи пĕлĕм",
        "synonyms": [],
        "comparative": "шалахирех",
        "superlative": "иң шалахи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "тулашри"
        ],
        "transcription": "",
        "emoji": "🚪",
        "id": "cv_starter_describing_074"
    },
    {
        "word": "тулашри",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Урамри, çурт тулашри:",
                "examples": [
                    "Тулашри сывлăш таса."
                ]
            }
        ],
        "subtext": "тулашри урам",
        "synonyms": [],
        "comparative": "тулашрирех",
        "superlative": "иң тулашри",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "шалахи"
        ],
        "transcription": "",
        "emoji": "🌳",
        "id": "cv_starter_describing_075"
    },
    {
        "word": "сывă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чирлемен, сывă ӳт-пӳллĕ:",
                "examples": [
                    "Сывă ача урамра чупать."
                ]
            }
        ],
        "subtext": "сывă çын",
        "synonyms": [
            "сывлăхлă"
        ],
        "comparative": "сывăрах",
        "superlative": "иң сывă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "чирлĕ"
        ],
        "transcription": "",
        "emoji": "💪",
        "id": "cv_starter_describing_076"
    },
    {
        "word": "чирлĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чирленĕ, килте выртакан:",
                "examples": [
                    "Чирлĕ çын тухтăра кĕтсе орать."
                ]
            }
        ],
        "subtext": "чирлĕ çын",
        "synonyms": [],
        "comparative": "чирлĕрех",
        "superlative": "иң чирлĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "сывă"
        ],
        "transcription": "",
        "emoji": "🤒",
        "id": "cv_starter_describing_077"
    },
    {
        "word": "телейлĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çутă кăмăллă, телейлĕ çын:",
                "examples": [
                    "Телейлĕ ача кулса юрлать."
                ]
            }
        ],
        "subtext": "телейлĕ ача",
        "synonyms": [
            "савăнăçлă"
        ],
        "comparative": "телейлĕрех",
        "superlative": "иң телейлĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "кулянчăк"
        ],
        "transcription": "",
        "emoji": "😊",
        "id": "cv_starter_describing_078"
    },
    {
        "word": "хурлăхлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çук кăмăллă, хурланакан:",
                "examples": [
                    "Кулянчăк каян каллех йĕрет."
                ]
            }
        ],
        "subtext": "кулянчăк ача",
        "synonyms": [],
        "comparative": "кулянчăкрах",
        "superlative": "иң кулянчăк",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "телейлĕ"
        ],
        "transcription": "",
        "emoji": "😢",
        "id": "cv_starter_describing_079"
    },
    {
        "word": "çумри",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çумра тăракан яки выртакан:",
                "examples": [
                    "Çумри сĕтел çинче ручка выртать."
                ]
            }
        ],
        "subtext": "çумри сĕтел",
        "synonyms": [],
        "comparative": "çумрирех",
        "superlative": "иң çумри",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "📍",
        "id": "cv_starter_describing_080"
    },
    {
        "word": "инçетри",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Аякра, инçетре вырнаçнă:",
                "examples": [
                    "Инçетри ялтан юлташ килчĕ."
                ]
            }
        ],
        "subtext": "инçетри ял",
        "synonyms": [],
        "comparative": "инçетрирех",
        "superlative": "иң инçетри",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "çумри"
        ],
        "transcription": "",
        "emoji": "🗺️",
        "id": "cv_starter_describing_081"
    },
    {
        "word": "яллă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ялта пурăнакан, ялхи:",
                "examples": [
                    "Ялхи çынсем пахчара ĕçлеççĕ."
                ]
            }
        ],
        "subtext": "ялхи çын",
        "synonyms": [],
        "comparative": "ялхирех",
        "superlative": "иң ялхи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "хулахи"
        ],
        "transcription": "",
        "emoji": "🌾",
        "id": "cv_starter_describing_082"
    },
    {
        "word": "хулахи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хулара пурăнакан:",
                "examples": [
                    "Хулахи паркра нумай çын утса йөрĕвет."
                ]
            }
        ],
        "subtext": "хулахи парк",
        "synonyms": [],
        "comparative": "хулахирех",
        "superlative": "иң хулахи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "ялхи"
        ],
        "transcription": "",
        "emoji": "🏙️",
        "id": "cv_starter_describing_083"
    },
    {
        "word": "çинçепĕр",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çинçе, яш, лапка:",
                "examples": [
                    "Çинçепĕр хĕр юррăн юрлать."
                ]
            }
        ],
        "subtext": "çинçе хĕр",
        "synonyms": [],
        "comparative": "çинçепĕррех",
        "superlative": "иң çинçепĕр",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "💃",
        "id": "cv_starter_describing_084"
    },
    {
        "word": "мăншăн",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Мăн, пысăк, кăмăллă:",
                "examples": [
                    "Мăншăн çурт базар çумĕнче ларать."
                ]
            }
        ],
        "subtext": "мăн çурт",
        "synonyms": [],
        "comparative": "мăншăнрах",
        "superlative": "иң мăншăн",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🏢",
        "id": "cv_starter_describing_085"
    },
    {
        "word": "сĕтлĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Сĕт хушнă ĕçме яки апат:",
                "examples": [
                    "Эпир сĕтлĕ чей ĕçетпĕр."
                ]
            }
        ],
        "subtext": "сĕтлĕ чей",
        "synonyms": [],
        "comparative": "сĕтлĕрех",
        "superlative": "иң сĕтлĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "☕",
        "id": "cv_starter_describing_086"
    },
    {
        "word": "пăрлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пăр хушнă, питĕ сивĕ:",
                "examples": [
                    "Пăрлă шыв кăнтăрла ушлă."
                ]
            }
        ],
        "subtext": "пăрлă шыв",
        "synonyms": [],
        "comparative": "пăрлăрах",
        "superlative": "иң пăрлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🧊",
        "id": "cv_starter_describing_087"
    },
    {
        "word": "сахарлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Сахар хушнă тутлă чей:",
                "examples": [
                    "Сахарлă чей ĕçме юрататăп."
                ]
            }
        ],
        "subtext": "сахарлă чей",
        "synonyms": [],
        "comparative": "сахарлăрах",
        "superlative": "иң сахарлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🍬",
        "id": "cv_starter_describing_088"
    },
    {
        "word": "тăварлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тăвар хушнă, тăварлă шӳрпе:",
                "examples": [
                    "Тăварлă апат сывлăхшăн ушлă."
                ]
            }
        ],
        "subtext": "тăварлă апат",
        "synonyms": [],
        "comparative": "тăварлăрах",
        "superlative": "иң тăварлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🧂",
        "id": "cv_starter_describing_089"
    },
    {
        "word": "çуллă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çу нумай хушнă апат:",
                "examples": [
                    "Çуллă яшка ăшă сĕтел çинче."
                ]
            }
        ],
        "subtext": "çуллă яшка",
        "synonyms": [],
        "comparative": "çуллăрах",
        "superlative": "иң çуллă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🍲",
        "id": "cv_starter_describing_090"
    },
    {
        "word": "палăртнă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Палăртнă, йĕркеленĕ:",
                "examples": [
                    "Палăртнă вăхăтра урок пуçланать."
                ]
            }
        ],
        "subtext": "палăртнă урок",
        "synonyms": [],
        "comparative": "палăртнăрах",
        "superlative": "иң палăртнă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "⏰",
        "id": "cv_starter_describing_091"
    },
    {
        "word": "çырнă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тетрадре çырса хуракан:",
                "examples": [
                    "Тетрадре çырнă сăмахсем бар."
                ]
            }
        ],
        "subtext": "çырнă сăмах",
        "synonyms": [],
        "comparative": "çырнăрах",
        "superlative": "иң çырнă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "✍️",
        "id": "cv_starter_describing_092"
    },
    {
        "word": "вĕреннĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пĕлӳ илнĕ, вĕреннĕ çын:",
                "examples": [
                    "Вĕреннĕ çын мĕнле те пулин хурава пĕлет."
                ]
            }
        ],
        "subtext": "вĕреннĕ çын",
        "synonyms": [],
        "comparative": "вĕреннĕрех",
        "superlative": "иң вĕреннĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🎓",
        "id": "cv_starter_describing_093"
    },
    {
        "word": "пĕçернĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çу өсĕпе пĕçернĕ апат:",
                "examples": [
                    "Пĕçернĕ çăмарта кăнтăрла çирĕм."
                ]
            }
        ],
        "subtext": "пĕçернĕ апат",
        "synonyms": [],
        "comparative": "пĕçернĕрех",
        "superlative": "иң пĕçернĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🍳",
        "id": "cv_starter_describing_094"
    },
    {
        "word": "çунтарнă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кăмакара çунтарнă çăкăр:",
                "examples": [
                    "Çунтарнă çăкăр шăшĕ питĕ тутлă."
                ]
            }
        ],
        "subtext": "çунтарнă çăкăр",
        "synonyms": [],
        "comparative": "çунтарнăрах",
        "superlative": "иң çунтарнă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🍞",
        "id": "cv_starter_describing_095"
    },
    {
        "word": "унăннă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çемçелнĕ, яш:",
                "examples": [
                    "Унăннă çанталăк ялта уçăлма лайăх."
                ]
            }
        ],
        "subtext": "унăннă кун",
        "synonyms": [],
        "comparative": "унăннăрах",
        "superlative": "иң унăннă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🍃",
        "id": "cv_starter_describing_096"
    },
    {
        "word": "шутлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Шутласа тунă, виçнĕ:",
                "examples": [
                    "Шутлă хисеп тетрадьпе çырнă."
                ]
            }
        ],
        "subtext": "шутлă кĕнеке",
        "synonyms": [],
        "comparative": "шутлăрах",
        "superlative": "иң шутлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🔢",
        "id": "cv_starter_describing_097"
    },
    {
        "word": "пĕрлехи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пĕрле тунă, пĕрлехи ĕç:",
                "examples": [
                    "Пĕрлехи ĕç тирпейлĕ пулать."
                ]
            }
        ],
        "subtext": "пĕрлехи ĕç",
        "synonyms": [],
        "comparative": "пĕрлехирех",
        "superlative": "иң пĕрлехи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🤝",
        "id": "cv_starter_describing_098"
    },
    {
        "word": "уйрăм",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Уйрăм ларакан, уйрăм çурт:",
                "examples": [
                    "Уйрăм пĕлĕмре ĕçлетĕп."
                ]
            }
        ],
        "subtext": "уйрăм пĕлĕм",
        "synonyms": [],
        "comparative": "уйрăмрах",
        "superlative": "иң уйрăм",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🚪",
        "id": "cv_starter_describing_099"
    },
    {
        "word": "тĕп",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тĕп, чи пĕлтерĕшлĕ:",
                "examples": [
                    "Çăкăр — пирĕн тĕп апат."
                ]
            }
        ],
        "subtext": "тĕп апат",
        "synonyms": [],
        "comparative": "тĕпрех",
        "superlative": "иң тĕп",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "⭐",
        "id": "cv_starter_describing_100"
    },
    {
        "word": "кӳршĕ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çывăхри кӳршĕ çурт:",
                "examples": [
                    "Кӳршĕ килте ачасем выляççĕ."
                ]
            }
        ],
        "subtext": "кӳршĕ çурт",
        "synonyms": [],
        "comparative": "кӳршĕрех",
        "superlative": "иң кӳршĕ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🏡",
        "id": "cv_starter_describing_101"
    },
    {
        "word": "пĕрремĕш",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хисеп ретĕнче 1-мĕш:",
                "examples": [
                    "Пĕрремĕш кун шкулта кăсăклă пулчĕ."
                ]
            }
        ],
        "subtext": "пĕрремĕш кун",
        "synonyms": [],
        "comparative": "пĕрремĕшрех",
        "superlative": "иң пĕрремĕш",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "1️⃣",
        "id": "cv_starter_describing_102"
    },
    {
        "word": "иккĕмĕш",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хисеп ретĕнче 2-мĕш:",
                "examples": [
                    "Иккĕмĕш урок — чăваш чĕлхи."
                ]
            }
        ],
        "subtext": "иккĕмĕш урок",
        "synonyms": [],
        "comparative": "иккĕмĕшрех",
        "superlative": "иң иккĕмĕш",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "2️⃣",
        "id": "cv_starter_describing_103"
    },
    {
        "word": "виçкĕмĕш",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хисеп ретĕнче 3-мĕш:",
                "examples": [
                    "Виçкĕмĕш хутра пурăнатпăр."
                ]
            }
        ],
        "subtext": "виçкĕмĕш хут",
        "synonyms": [],
        "comparative": "виçкĕмĕшрех",
        "superlative": "иң виçкĕмĕш",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "3️⃣",
        "id": "cv_starter_describing_104"
    },
    {
        "word": "тăваткăмĕш",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хисеп ретĕнче 4-мĕш:",
                "examples": [
                    "Тăваткăмĕш этаж питĕ çутă."
                ]
            }
        ],
        "subtext": "тăваткăмĕш этаж",
        "synonyms": [],
        "comparative": "тăваткăмĕшрех",
        "superlative": "иң тăваткăмĕш",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "4️⃣",
        "id": "cv_starter_describing_105"
    },
    {
        "word": "пятекĕмĕш",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Хисеп ретĕнче 5-мĕш:",
                "examples": [
                    "Пятекĕмĕш кĕнеке сĕтел çинче."
                ]
            }
        ],
        "subtext": "пятекĕмĕш кĕнеке",
        "synonyms": [],
        "comparative": "пятекĕмĕшрех",
        "superlative": "иң пятекĕмĕш",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "5️⃣",
        "id": "cv_starter_describing_106"
    },
    {
        "word": "уçăмлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ăнланма çăмăл, уçăмлă:",
                "examples": [
                    "Уçăмлă хурав парпĕр."
                ]
            }
        ],
        "subtext": "уçăмлă хурав",
        "synonyms": [],
        "comparative": "уçăмлăрах",
        "superlative": "иң уçăмлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "💡",
        "id": "cv_starter_describing_107"
    },
    {
        "word": "йывăр",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ăнланма йынăш яки тума йывăр:",
                "examples": [
                    "Ку йывăр ĕç."
                ]
            }
        ],
        "subtext": "йывăр ĕç",
        "synonyms": [],
        "comparative": "йывăррах",
        "superlative": "иң йывăр",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "çăмăл"
        ],
        "transcription": "",
        "emoji": "🧩",
        "id": "cv_starter_describing_108"
    },
    {
        "word": "хăвăртлăхлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Сывлăш хăвăртлăхĕ бар:",
                "examples": [
                    "Хăвăртлăхлă куçăм урамра."
                ]
            }
        ],
        "subtext": "хăвăртлăхлă поезд",
        "synonyms": [],
        "comparative": "хăвăртлăхлăрах",
        "superlative": "иң хăвăртлăхлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🚀",
        "id": "cv_starter_describing_109"
    },
    {
        "word": "авалхи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нумай çул каялла пулнă:",
                "examples": [
                    "Авалхи ял кун-çулĕ кăсăклă."
                ]
            }
        ],
        "subtext": "авалхи ял",
        "synonyms": [],
        "comparative": "авалхирех",
        "superlative": "иң авалхи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "хальхи"
        ],
        "transcription": "",
        "emoji": "🏛️",
        "id": "cv_starter_describing_110"
    },
    {
        "word": "хальхи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çак вăхăтри, хальхи:",
                "examples": [
                    "Хальхи шкул питĕ пысăк."
                ]
            }
        ],
        "subtext": "хальхи шкул",
        "synonyms": [],
        "comparative": "хальхирех",
        "superlative": "иң хальхи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "авалхи"
        ],
        "transcription": "",
        "emoji": "📱",
        "id": "cv_starter_describing_111"
    },
    {
        "word": "çулталăкри",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çулталăк тăршшĕпе пулакан:",
                "examples": [
                    "Çулталăкри уявсем нумай."
                ]
            }
        ],
        "subtext": "çулталăкри уяв",
        "synonyms": [],
        "comparative": "çулталăкрирех",
        "superlative": "иң çулталăкри",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "📅",
        "id": "cv_starter_describing_112"
    },
    {
        "word": "кунселенхи",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кашнин кун пулакан ĕç:",
                "examples": [
                    "Кунселенхи ĕç пире хастар тăвать."
                ]
            }
        ],
        "subtext": "кунселенхи ĕç",
        "synonyms": [],
        "comparative": "кунселенхирех",
        "superlative": "иң кунселенхи",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "📆",
        "id": "cv_starter_describing_113"
    },
    {
        "word": "килти",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Килте бар, килти кушак:",
                "examples": [
                    "Килти кушак диван çинче уйăрать."
                ]
            }
        ],
        "subtext": "килти кушак",
        "synonyms": [],
        "comparative": "килтирех",
        "superlative": "иң килти",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "урамри"
        ],
        "transcription": "",
        "emoji": "🏠",
        "id": "cv_starter_describing_114"
    },
    {
        "word": "урамри",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Урамра ларакан яки утнакан:",
                "examples": [
                    "Урамри йытă абрать."
                ]
            }
        ],
        "subtext": "урамри йытă",
        "synonyms": [],
        "comparative": "урамрирех",
        "superlative": "иң урамри",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "килти"
        ],
        "transcription": "",
        "emoji": "🛣️",
        "id": "cv_starter_describing_115"
    },
    {
        "word": "тăван",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Çывăх, тăван çын яки чĕлхе:",
                "examples": [
                    "Чăваш чĕлхи — манăн тăван чĕлхе."
                ]
            }
        ],
        "subtext": "тăван чĕлхе",
        "synonyms": [],
        "comparative": "тăванрах",
        "superlative": "иң тăван",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🏡",
        "id": "cv_starter_describing_116"
    },
    {
        "word": "ятлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ят бар, ятлă кĕнеке:",
                "examples": [
                    "Ку ятлă поэт ялта çуралнă."
                ]
            }
        ],
        "subtext": "ятлă поэт",
        "synonyms": [],
        "comparative": "ятлăрах",
        "superlative": "иң ятлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🏷️",
        "id": "cv_starter_describing_117"
    },
    {
        "word": "лайăх кăмăллă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Питĕ ушлă та лайăх кăмăллă çын:",
                "examples": [
                    "Вĕрентӳçĕ лайăх кăмăллă."
                ]
            }
        ],
        "subtext": "лайăх кăмăллă çын",
        "synonyms": [],
        "comparative": "лайăх кăмăллăрах",
        "superlative": "иң лайăх кăмăллă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "😇",
        "id": "cv_starter_describing_118"
    },
    {
        "word": "чирлемен",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Сывă, чирлемен:",
                "examples": [
                    "Чирлемен ача шкула каять."
                ]
            }
        ],
        "subtext": "чирлемен ача",
        "synonyms": [],
        "comparative": "чирлеменрех",
        "superlative": "иң чирлемен",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🏃",
        "id": "cv_starter_describing_119"
    },
    {
        "word": "палламан",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Паллă мар, палламан çын:",
                "examples": [
                    "Палламан çын урамра утать."
                ]
            }
        ],
        "subtext": "палламан çын",
        "synonyms": [],
        "comparative": "палламанрах",
        "superlative": "иң палламан",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "❓",
        "id": "cv_starter_describing_120"
    },
    {
        "word": "вăйлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кăра, вăйлă, хăватлă:",
                "examples": [
                    "Вăйлă çил вăрманра ĕфеть."
                ]
            }
        ],
        "subtext": "вăйлă çил",
        "synonyms": [],
        "comparative": "вăйлырах",
        "superlative": "иң вăйлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "вăйсăр"
        ],
        "transcription": "",
        "emoji": "💪",
        "id": "cv_starter_describing_121"
    },
    {
        "word": "вăйсăр",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Вăй çук, хавшак:",
                "examples": [
                    "Вăйсăр ача сĕтел çинчен кĕнеке илте юлчĕ."
                ]
            }
        ],
        "subtext": "вăйсăр ача",
        "synonyms": [],
        "comparative": "вăйсăррах",
        "superlative": "иң вăйсăр",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "вăйлă"
        ],
        "transcription": "",
        "emoji": "🥀",
        "id": "cv_starter_describing_122"
    },
    {
        "word": "уçăмлăхлă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Пĕтĕмпех уçăмлă, таса:",
                "examples": [
                    "Уçăмлăхлă сăмах çырса хурар."
                ]
            }
        ],
        "subtext": "уçăмлăхлă сăмах",
        "synonyms": [],
        "comparative": "уçăмлăхлăрах",
        "superlative": "иң уçăмлăхлă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "✨",
        "id": "cv_starter_describing_123"
    },
    {
        "word": "ăслă",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ăс бар, нумай пĕлекен:",
                "examples": [
                    "Ăслă ученик урокра яланах пĕлет."
                ]
            }
        ],
        "subtext": "ăслă ача",
        "synonyms": [],
        "comparative": "ăслăрах",
        "superlative": "иң ăслă",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [],
        "transcription": "",
        "emoji": "🧠",
        "id": "cv_starter_describing_124"
    },
    {
        "word": "ăссăр",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ăс çук, шутламасăр тунă:",
                "examples": [
                    "Ăссăр ĕçрен йăнăш пулать."
                ]
            }
        ],
        "subtext": "ăссăр ĕç",
        "synonyms": [],
        "comparative": "ăссăррах",
        "superlative": "иң ăссăр",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "cv",
        "antonyms": [
            "ăслă"
        ],
        "transcription": "",
        "emoji": "🤷",
        "id": "cv_starter_describing_125"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
