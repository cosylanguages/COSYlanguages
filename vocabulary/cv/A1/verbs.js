// TODO: verify level classification
(function() {
    const lang = "cv";
    const data = [
    {
        "word": "пулма",
        "level": "starter",
        "theme": "social",
        "emoji": "👤",
        "subtext": "ывăннă пулма / телейлĕ пулма",
        "form": "verb",
        "definitions": [
            {
                "text": "Пурăнма, калăпăшра тăма:",
                "examples": [
                    "Эпĕ ялта пурăнатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "пулнă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_001"
    },
    {
        "word": "вулама",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "кĕнеке вулама / хаçат вулама",
        "form": "verb",
        "definitions": [
            {
                "text": "Буквăсене вуласа пĕлни:",
                "examples": [
                    "Ача кĕнеке вулать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "вуланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_002"
    },
    {
        "word": "çырма",
        "level": "starter",
        "theme": "school",
        "emoji": "✍️",
        "subtext": "тедрать çырма / сăмах çырма",
        "form": "verb",
        "definitions": [
            {
                "text": "Буквăсемпе текст туни:",
                "examples": [
                    "Тетрадре çыратăп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çырнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_003"
    },
    {
        "word": "ĕçлеме",
        "level": "starter",
        "theme": "work",
        "emoji": "💼",
        "subtext": "заводра ĕçлеме / ялта ĕçлеме",
        "form": "verb",
        "definitions": [
            {
                "text": "Тăрăшни, ĕç туни:",
                "examples": [
                    "Атте заводында ĕçлет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "ĕçленĕ",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_work_verb_004"
    },
    {
        "word": "вĕренме",
        "level": "starter",
        "theme": "school",
        "emoji": "🎓",
        "subtext": "чăваш чĕлхине вĕренме",
        "form": "verb",
        "definitions": [
            {
                "text": "Пĕлӳ илни, вĕренни:",
                "examples": [
                    "Эпĕ чăваш чĕлхине вĕренетĕп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "вĕреннĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_005"
    },
    {
        "word": "кайма",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "шкула кайма / яла кайма",
        "form": "verb",
        "definitions": [
            {
                "text": "Бĕр вырăнтан урăх вырăна куçни:",
                "examples": [
                    "Эпĕ шкула каятăп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "кайнă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_verb_006"
    },
    {
        "word": "килме",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏃",
        "subtext": "киле килме / ялтан килме",
        "form": "verb",
        "definitions": [
            {
                "text": "Çак вырăна çитни:",
                "examples": [
                    "Юлташ ялтан килчĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "килнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_verb_007"
    },
    {
        "word": "пăхма",
        "level": "starter",
        "theme": "social",
        "emoji": "👀",
        "subtext": "телевизор пăхма / чӳречерен пăхма",
        "form": "verb",
        "definitions": [
            {
                "text": "Куçпе курма, асархама:",
                "examples": [
                    "Ача телевизор пăхать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "пăхнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_008"
    },
    {
        "word": "чупма",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏃",
        "subtext": "хăвăрт чупма / урампа чупма",
        "form": "verb",
        "definitions": [
            {
                "text": "Хăвăрт утнаса куçни:",
                "examples": [
                    "Йытă урампа чупат."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "чупнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_verb_009"
    },
    {
        "word": "утма",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "паркра утма / явашла утма",
        "form": "verb",
        "definitions": [
            {
                "text": "Урапа хăвăрт мар куçни:",
                "examples": [
                    "Паркра утма юрататăп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "утнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_verb_010"
    },
    {
        "word": "çиме",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍽️",
        "subtext": "çăкăр çиме / апат çиме",
        "form": "verb",
        "definitions": [
            {
                "text": "Апат çини, çăварпа ваклани:",
                "examples": [
                    "Ирхине ăшă çăкăр çирĕм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çинĕ",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_verb_011"
    },
    {
        "word": "ĕçме",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "subtext": "шыв ĕçме / чей ĕçме",
        "form": "verb",
        "definitions": [
            {
                "text": "Шыв яки чей ĕçни:",
                "examples": [
                    "Сĕтлĕ чей ĕçетпĕр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "ĕçнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_verb_012"
    },
    {
        "word": "пĕçерме",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "subtext": "яшка пĕçерме / хуплу пĕçерме",
        "form": "verb",
        "definitions": [
            {
                "text": "Кăмакара апат туни:",
                "examples": [
                    "Анне тутлă хуплу пĕçереть."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "пĕçернĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_verb_013"
    },
    {
        "word": "юратма",
        "level": "starter",
        "theme": "emotions",
        "emoji": "❤️",
        "subtext": "тăван чĕлхене юратма",
        "form": "verb",
        "definitions": [
            {
                "text": "Кăмăллани, юратни:",
                "examples": [
                    "Эпĕ тăван чĕлхене юрататăп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "юратна",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_emotions_verb_014"
    },
    {
        "word": "пĕлме",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "хурава пĕлме / сăмаха пĕлме",
        "form": "verb",
        "definitions": [
            {
                "text": "Ăслама, пĕлӳпе усă курма:",
                "examples": [
                    "Вăл хурава пĕлет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "пĕлнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_015"
    },
    {
        "word": "илме",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛍️",
        "subtext": "кĕнеке илме / укçа илме",
        "form": "verb",
        "definitions": [
            {
                "text": "Тытма, алла илни:",
                "examples": [
                    "Лавккаран çăкăр илтĕм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "илнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_shopping_verb_016"
    },
    {
        "word": "парма",
        "level": "starter",
        "theme": "social",
        "emoji": "🎁",
        "subtext": "кĕнеке парма / салам парма",
        "form": "verb",
        "definitions": [
            {
                "text": "Бĕр çынна парне туни:",
                "examples": [
                    "Учитель тетрадь патĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "парнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_017"
    },
    {
        "word": "тума",
        "level": "starter",
        "theme": "work",
        "emoji": "🔨",
        "subtext": "çурт тума / ĕç тума",
        "form": "verb",
        "definitions": [
            {
                "text": "Япала яки ĕç туни:",
                "examples": [
                    "Атте пысăк çурт тунă."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "тунă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_work_verb_018"
    },
    {
        "word": "уçма",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🔓",
        "subtext": "алăка уçма / кĕнеке уçма",
        "form": "verb",
        "definitions": [
            {
                "text": "Хупă япалана уçни:",
                "examples": [
                    "Алăка уçса пĕлĕме кĕрĕм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "уçнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_objects_verb_019"
    },
    {
        "word": "хупма",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🔒",
        "subtext": "алăка хупма / чӳрече хупма",
        "form": "verb",
        "definitions": [
            {
                "text": "Уçă япалана хупни:",
                "examples": [
                    "Каçхине алăка хупрăм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "хупма",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_objects_verb_020"
    },
    {
        "word": "ларма",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🪑",
        "subtext": "покан çине ларма",
        "form": "verb",
        "definitions": [
            {
                "text": "Покан яки сĕтел çинче ларани:",
                "examples": [
                    "Сĕтел çумне лар."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "ларнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_objects_verb_021"
    },
    {
        "word": "тăма",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🧍",
        "subtext": "урамра тăма / сĕтел çумĕнче тăма",
        "form": "verb",
        "definitions": [
            {
                "text": "Ура çинче тăрани:",
                "examples": [
                    "Учитель класс умĕнче тăрать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "тăнă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_objects_verb_022"
    },
    {
        "word": "илтме",
        "level": "starter",
        "theme": "music",
        "emoji": "👂",
        "subtext": "юртта илтме / сасса илтме",
        "form": "verb",
        "definitions": [
            {
                "text": "Хăлхапа авăна илтни:",
                "examples": [
                    "Вăрманта кайăк юрри илтĕм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "илтнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_music_verb_023"
    },
    {
        "word": "калама",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "subtext": "сăмах калама / юмах калама",
        "form": "verb",
        "definitions": [
            {
                "text": "Çăварпа сăмахсем калани:",
                "examples": [
                    "Асатте юмах калать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "каланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_024"
    },
    {
        "word": "ыйтма",
        "level": "starter",
        "theme": "social",
        "emoji": "❓",
        "subtext": "ыйтни тума / кĕнеке ыйтма",
        "form": "verb",
        "definitions": [
            {
                "text": "Пĕлес тесе ыйту туни:",
                "examples": [
                    "Ача учительтен ыйтрĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "ыйтнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_025"
    },
    {
        "word": "хуравлама",
        "level": "starter",
        "theme": "school",
        "emoji": "✅",
        "subtext": "ыйтăва хуравлама",
        "form": "verb",
        "definitions": [
            {
                "text": "Ыйту çинче хурав пани:",
                "examples": [
                    "Ученик тĕрĕс хуравларĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "хуравланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_026"
    },
    {
        "word": "выляма",
        "level": "starter",
        "theme": "social",
        "emoji": "🎮",
        "subtext": "йыттапе выляма / ачасемпе выляма",
        "form": "verb",
        "definitions": [
            {
                "text": "Савăнса выляни:",
                "examples": [
                    "Ачасем урамра выляççĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "вылянă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_027"
    },
    {
        "word": "йĕрме",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😢",
        "subtext": "хурланса йĕрме",
        "form": "verb",
        "definitions": [
            {
                "text": "Куçран куççуль яракан йĕрни:",
                "examples": [
                    "Пĕчĕк ача йĕрет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "йĕрнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_emotions_verb_028"
    },
    {
        "word": "кулма",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😄",
        "subtext": "савăнса кулма",
        "form": "verb",
        "definitions": [
            {
                "text": "Кулянмасăр кулса ярани:",
                "examples": [
                    "Уявра йăлтах кулаççĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "кулнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_emotions_verb_029"
    },
    {
        "word": "вăранма",
        "level": "starter",
        "theme": "nature",
        "emoji": "⏰",
        "subtext": "ирхине вăранма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çывăрнă хыççăн уçăлни:",
                "examples": [
                    "Ирхине шурăмпуçра вăрантăм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "вăраннă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_030"
    },
    {
        "word": "çуйма",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🧼",
        "subtext": "алă çуйма / тумтир çуйма",
        "form": "verb",
        "definitions": [
            {
                "text": "Шывпа таса туни:",
                "examples": [
                    "Апат çиес умĕн аллуна çу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çунă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_objects_verb_031"
    },
    {
        "word": "тăхăнма",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👔",
        "subtext": "кĕпе тăхăнма / шапка тăхăнма",
        "form": "verb",
        "definitions": [
            {
                "text": "Тумтирт тăхăнса йөрĕни:",
                "examples": [
                    "Анне çĕнĕ кĕпе тăхăнчĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "тăхăннă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_clothes_verb_032"
    },
    {
        "word": "çитехме",
        "level": "starter",
        "theme": "travel",
        "emoji": "📍",
        "subtext": "хулана çитехме",
        "form": "verb",
        "definitions": [
            {
                "text": "Çак вырăна çитни:",
                "examples": [
                    "Поезд хулана çитрĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çитнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_verb_033"
    },
    {
        "word": "сутма",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "subtext": "базаррта сутма",
        "form": "verb",
        "definitions": [
            {
                "text": "Укçашăн япала пани:",
                "examples": [
                    "Лавккара çăкăр сутаççĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "сутнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_shopping_verb_034"
    },
    {
        "word": "туянма",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "subtext": "кĕнеке туянма",
        "form": "verb",
        "definitions": [
            {
                "text": "Укçа парса япала илни:",
                "examples": [
                    "Эпĕ çĕнĕ ручка туянрăм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "туяннă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_shopping_verb_035"
    },
    {
        "word": "усă курма",
        "level": "starter",
        "theme": "work",
        "emoji": "🛠️",
        "subtext": "компьютерпа усă курма",
        "form": "verb",
        "definitions": [
            {
                "text": "Япалапа усă куракан ĕç туни:",
                "examples": [
                    "Урокра ручкапа усă куратпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "усă курнă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_work_verb_036"
    },
    {
        "word": "пулăшма",
        "level": "starter",
        "theme": "social",
        "emoji": "🤝",
        "subtext": "аннене пулăшма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çынна пулăшу пани:",
                "examples": [
                    "Эпĕ аннене пахчара пулăшатăп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "пулăшнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_037"
    },
    {
        "word": "ĕненме",
        "level": "starter",
        "theme": "social",
        "emoji": "🙏",
        "subtext": "ырă хыпара ĕненме",
        "form": "verb",
        "definitions": [
            {
                "text": "Шанма, ĕненени:",
                "examples": [
                    "Эпĕ тусăма ĕненетĕп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "ĕненнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_038"
    },
    {
        "word": "шутлама",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "тĕрĕс шутлама",
        "form": "verb",
        "definitions": [
            {
                "text": "Ăсласа шутлав туни:",
                "examples": [
                    "Ача тĕрĕс шутлать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "шутланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_039"
    },
    {
        "word": "ăнланма",
        "level": "starter",
        "theme": "school",
        "emoji": "💡",
        "subtext": "урока ăнланма",
        "form": "verb",
        "definitions": [
            {
                "text": "Темана ăнланса илни:",
                "examples": [
                    "Ученик урока ăнланчĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "ăнланнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_040"
    },
    {
        "word": "манма",
        "level": "starter",
        "theme": "school",
        "emoji": "🙈",
        "subtext": "сăмаха манма",
        "form": "verb",
        "definitions": [
            {
                "text": "Асран тухса каяни:",
                "examples": [
                    "Йăнăш сăмаха манрăм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "маннă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_041"
    },
    {
        "word": "кĕтме",
        "level": "starter",
        "theme": "travel",
        "emoji": "⏳",
        "subtext": "автобус кĕтме",
        "form": "verb",
        "definitions": [
            {
                "text": "Çын яки поезда кĕтсе орани:",
                "examples": [
                    "Урамра автобус кĕтетпĕр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "кĕтнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_verb_042"
    },
    {
        "word": "уçăлма",
        "level": "starter",
        "theme": "social",
        "emoji": "🌿",
        "subtext": "паркра уçăлма",
        "form": "verb",
        "definitions": [
            {
                "text": "Сывлăшра утса йөрĕни:",
                "examples": [
                    "Каçхине паркра уçăлатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "уçăлнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_043"
    },
    {
        "word": "юрлама",
        "level": "starter",
        "theme": "music",
        "emoji": "🎤",
        "subtext": "илемлĕ юрă юрлама",
        "form": "verb",
        "definitions": [
            {
                "text": "Сасăпа юрă юрлани:",
                "examples": [
                    "Хĕрсем уявра юрлаççĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "юрланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_music_verb_044"
    },
    {
        "word": "ташлама",
        "level": "starter",
        "theme": "music",
        "emoji": "💃",
        "subtext": "уявра ташлама",
        "form": "verb",
        "definitions": [
            {
                "text": "Музыкапе ташласа выляни:",
                "examples": [
                    "Уявра ачасем ташлаççĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "ташланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_music_verb_045"
    },
    {
        "word": "çывăрма",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "😴",
        "subtext": "çемçе диван çинче çывăрма",
        "form": "verb",
        "definitions": [
            {
                "text": "Каçхине канатса çывăрни:",
                "examples": [
                    "Ача диван çинче çывăрать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çывăрнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_objects_verb_046"
    },
    {
        "word": "канама",
        "level": "starter",
        "theme": "social",
        "emoji": "🏖️",
        "subtext": "ĕç хыççăн канама",
        "form": "verb",
        "definitions": [
            {
                "text": "Ывăннă хыçăн канатни:",
                "examples": [
                    "Ĕç хыççăн ялта канатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "каннă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_047"
    },
    {
        "word": "пурнама",
        "level": "starter",
        "theme": "places",
        "emoji": "🏡",
        "subtext": "ялта пурнама / хулара пурнама",
        "form": "verb",
        "definitions": [
            {
                "text": "Çак вырăнта пурăни:",
                "examples": [
                    "Эпир Шупашкарта пурăнатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "пурăннă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_places_verb_048"
    },
    {
        "word": "тупма",
        "level": "starter",
        "theme": "school",
        "emoji": "🔍",
        "subtext": "тĕрĕс хурава тупма",
        "form": "verb",
        "definitions": [
            {
                "text": "Шыраса тупни:",
                "examples": [
                    "Тетрадре йăнăша туптăм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "тупнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_049"
    },
    {
        "word": "çухатма",
        "level": "starter",
        "theme": "shopping",
        "emoji": "❌",
        "subtext": "ручка çухатма",
        "form": "verb",
        "definitions": [
            {
                "text": "Шыраса тупайманни:",
                "examples": [
                    "Ача ручка çухатчĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çухатнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_shopping_verb_050"
    },
    {
        "word": "васкама",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏃",
        "subtext": "шкула васкама",
        "form": "verb",
        "definitions": [
            {
                "text": "Вăхăтра çитме васкани:",
                "examples": [
                    "Ирхине шкула васкатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "васканă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_verb_051"
    },
    {
        "word": "сыхлама",
        "level": "starter",
        "theme": "places",
        "emoji": "🛡️",
        "subtext": "çурта сыхлама",
        "form": "verb",
        "definitions": [
            {
                "text": "Çурт-кĕрĕт сыхлани:",
                "examples": [
                    "Йытă çурта сыхлать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "сыхланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_places_verb_052"
    },
    {
        "word": "кĕрме",
        "level": "starter",
        "theme": "places",
        "emoji": "🚪",
        "subtext": "шкула кĕрме",
        "form": "verb",
        "definitions": [
            {
                "text": "Çурт ăшне кĕрни:",
                "examples": [
                    "Ученик класса кĕрĕчĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "кĕрнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_places_verb_053"
    },
    {
        "word": "тухма",
        "level": "starter",
        "theme": "places",
        "emoji": "🚪",
        "subtext": "урама тухма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çуртран тухса каяни:",
                "examples": [
                    "Каçхине урама тухрăмăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "тухнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_places_verb_054"
    },
    {
        "word": "юлма",
        "level": "starter",
        "theme": "places",
        "emoji": "📍",
        "subtext": "килте юлма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çак вырăнта юлани:",
                "examples": [
                    "Паян ялта юлатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "юлнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_places_verb_055"
    },
    {
        "word": "тытма",
        "level": "starter",
        "theme": "nature",
        "emoji": "🐟",
        "subtext": "пулă тытма",
        "form": "verb",
        "definitions": [
            {
                "text": "Алăпа тытса илни:",
                "examples": [
                    "Асатте юханшывра пулă тытрĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "тытнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_056"
    },
    {
        "word": "вĕрентме",
        "level": "starter",
        "theme": "school",
        "emoji": "👨‍🏫",
        "subtext": "ачасене вĕрентме",
        "form": "verb",
        "definitions": [
            {
                "text": "Шкулта пĕлӳ пани:",
                "examples": [
                    "Учитель ачасене вĕрентет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "вĕрентнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_057"
    },
    {
        "word": "уявлама",
        "level": "starter",
        "theme": "social",
        "emoji": "🎉",
        "subtext": "Çĕнĕ çула уявлама",
        "form": "verb",
        "definitions": [
            {
                "text": "Савăнăçлă уяв туни:",
                "examples": [
                    "Ялта Çĕнĕ çул уявлатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "уявланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_058"
    },
    {
        "word": "саламлама",
        "level": "starter",
        "theme": "social",
        "emoji": "👋",
        "subtext": "туса саламлама",
        "form": "verb",
        "definitions": [
            {
                "text": "Салам калани:",
                "examples": [
                    "Учитель ачасене саламларĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "саламланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_059"
    },
    {
        "word": "паллашма",
        "level": "starter",
        "theme": "social",
        "emoji": "🤝",
        "subtext": "çĕнĕ туспа паллашма",
        "form": "verb",
        "definitions": [
            {
                "text": "Палла туни:",
                "examples": [
                    "Шкулта çĕнĕ туспа паллашрăм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "паллашнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_060"
    },
    {
        "word": "хăрама",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😨",
        "subtext": "усал йытран хăрама",
        "form": "verb",
        "definitions": [
            {
                "text": "Çинчен хăрани:",
                "examples": [
                    "Пĕчĕк ача йытран хăрать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "хăранă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_emotions_verb_061"
    },
    {
        "word": "савăнма",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "subtext": "ырă хыпаршăн савăнма",
        "form": "verb",
        "definitions": [
            {
                "text": "Кăмăллă пулни:",
                "examples": [
                    "Ачасем уявра савăнаççĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "савăннă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_emotions_verb_062"
    },
    {
        "word": "килĕшме",
        "level": "starter",
        "theme": "social",
        "emoji": "👍",
        "subtext": "шухăшпа килĕшме",
        "form": "verb",
        "definitions": [
            {
                "text": "Пĕр шухăшлă пулни:",
                "examples": [
                    "Эпир çак шухăшпа килĕшетпĕр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "килĕшнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_063"
    },
    {
        "word": "çумăр çума",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌧️",
        "subtext": "урамра çумăр çума",
        "form": "verb",
        "definitions": [
            {
                "text": "Пĕлĕтрен çумăр çуни:",
                "examples": [
                    "Урамра çумăр çуать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çунă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_064"
    },
    {
        "word": "юр çума",
        "level": "starter",
        "theme": "nature",
        "emoji": "❄️",
        "subtext": "хĕлле юр çума",
        "form": "verb",
        "definitions": [
            {
                "text": "Пĕлĕтрен юр çуни:",
                "examples": [
                    "Хĕлле урамра юр çуать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çунă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_065"
    },
    {
        "word": "çил ĕфме",
        "level": "starter",
        "theme": "nature",
        "emoji": "💨",
        "subtext": "вăйлă çил ĕфме",
        "form": "verb",
        "definitions": [
            {
                "text": "Сывлăш ĕфни:",
                "examples": [
                    "Вăрманта вăйлă çил ĕфеть."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "ĕфнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_066"
    },
    {
        "word": "хĕвел тухма",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌅",
        "subtext": "ирхине хĕвел тухма",
        "form": "verb",
        "definitions": [
            {
                "text": "Ирхине хĕвел пĕлĕтре тухни:",
                "examples": [
                    "Ирхине хĕвел тухрĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "тухнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_067"
    },
    {
        "word": "хĕвел батма",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌇",
        "subtext": "каçхине хĕвел батма",
        "form": "verb",
        "definitions": [
            {
                "text": "Каçхине хĕвел батни:",
                "examples": [
                    "Каçхине хĕвел батрĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "батнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_068"
    },
    {
        "word": "кун пуçланма",
        "level": "starter",
        "theme": "time",
        "emoji": "🌅",
        "subtext": "çĕнĕ кун пуçланма",
        "form": "verb",
        "definitions": [
            {
                "text": "Ирхине çĕнĕ кун пуçланни:",
                "examples": [
                    "Çĕнĕ кун пуçланчĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "пуçланнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_time_verb_069"
    },
    {
        "word": "каç килме",
        "level": "starter",
        "theme": "time",
        "emoji": "🌃",
        "subtext": "каç килсе çитме",
        "form": "verb",
        "definitions": [
            {
                "text": "Кун хыççăн каç килни:",
                "examples": [
                    "Каç килчĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "килнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_time_verb_070"
    },
    {
        "word": "çулталăк улшăнма",
        "level": "starter",
        "theme": "time",
        "emoji": "📅",
        "subtext": "çулталăк улшăнса кайма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çĕнĕ çулталăк çитни:",
                "examples": [
                    "Çулталăк улшăнчĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "улшăннă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_time_verb_071"
    },
    {
        "word": "уяв пулма",
        "level": "starter",
        "theme": "social",
        "emoji": "🎉",
        "subtext": "ялта мăн уяв пулма",
        "form": "verb",
        "definitions": [
            {
                "text": "Уяв кунĕ пулни:",
                "examples": [
                    "Паян ялта мăн уяв."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "пулнă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_072"
    },
    {
        "word": "лартма",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌱",
        "subtext": "пахчара чечек лартма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çĕр айне лартса туни:",
                "examples": [
                    "Пахчара чечек лартрăмăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "лартнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_073"
    },
    {
        "word": "çуратма",
        "level": "starter",
        "theme": "people",
        "emoji": "👶",
        "subtext": "ача çуратма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çĕнĕ пурнăç туни:",
                "examples": [
                    "Анне ача çуратрĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çуратнă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_verb_074"
    },
    {
        "word": "йăтма",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "📦",
        "subtext": "йивĕр япала йăтма",
        "form": "verb",
        "definitions": [
            {
                "text": "Алăпа йăтса каяни:",
                "examples": [
                    "Атте йивĕр сунтăх йăтать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "йăтнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_objects_verb_075"
    },
    {
        "word": "хисеплеме",
        "level": "starter",
        "theme": "people",
        "emoji": "🤝",
        "subtext": "ватă çынсене хисеплеме",
        "form": "verb",
        "definitions": [
            {
                "text": "Ырă кăмăлпа пăхни:",
                "examples": [
                    "Ватă çынсене хисеплемелле."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "хисепленĕ",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_verb_076"
    },
    {
        "word": "çулама",
        "level": "starter",
        "theme": "travel",
        "emoji": "🧳",
        "subtext": "инçетри яла çулама",
        "form": "verb",
        "definitions": [
            {
                "text": "Çул çинче куçса йөрĕни:",
                "examples": [
                    "Инçетри яла çулатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çуланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_verb_077"
    },
    {
        "word": "çунма",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🔥",
        "subtext": "кăмакара вут çунма",
        "form": "verb",
        "definitions": [
            {
                "text": "Вут-çулăм çунни:",
                "examples": [
                    "Кăмакара ăшă вут çунать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çуннă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_objects_verb_078"
    },
    {
        "word": "хăпарма",
        "level": "starter",
        "theme": "travel",
        "emoji": "🧗",
        "subtext": "сăрт çине хăпарма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çиелле куçса каяни:",
                "examples": [
                    "Сăрт çине хăпартăмăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "хăпарнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_verb_079"
    },
    {
        "word": "анма",
        "level": "starter",
        "theme": "travel",
        "emoji": "📉",
        "subtext": "сăртран анма",
        "form": "verb",
        "definitions": [
            {
                "text": "Аралла куçса анни:",
                "examples": [
                    "Сăртран яла анрăмăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "аннă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_verb_080"
    },
    {
        "word": "пăрахма",
        "level": "starter",
        "theme": "sports",
        "emoji": "⚽",
        "subtext": "топ пăрахма",
        "form": "verb",
        "definitions": [
            {
                "text": "Алăран япала яракани:",
                "examples": [
                    "Ача топ пăрахрĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "пăрахнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_sports_verb_081"
    },
    {
        "word": "çитерме",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌾",
        "subtext": "выльăхсене утă çитерме",
        "form": "verb",
        "definitions": [
            {
                "text": "Апат парса çитерни:",
                "examples": [
                    "Ĕнесене утă çитерчĕмĕр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çитернĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_082"
    },
    {
        "word": "тĕрĕслеме",
        "level": "starter",
        "theme": "school",
        "emoji": "📝",
        "subtext": "тедрадь тĕрĕслеме",
        "form": "verb",
        "definitions": [
            {
                "text": "Йăнăшсене пăхса тĕрĕслени:",
                "examples": [
                    "Учитель тетрадьсем тĕрĕслеет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "тĕрĕсленĕ",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_083"
    },
    {
        "word": "тупăшма",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏃",
        "subtext": "урамра тупăшма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çĕнтерме тăрашни:",
                "examples": [
                    "Ачасем урамра тупăшаççĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "тупăшнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_sports_verb_084"
    },
    {
        "word": "сывпуллашма",
        "level": "starter",
        "theme": "social",
        "emoji": "👋",
        "subtext": "туспа сывпуллашма",
        "form": "verb",
        "definitions": [
            {
                "text": "Сывă пулăр калани:",
                "examples": [
                    "Каçхине туспа сывпуллашрăмăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "сывпуллашнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_085"
    },
    {
        "word": "куçарма",
        "level": "starter",
        "theme": "school",
        "emoji": "🌐",
        "subtext": "текста чăвашла куçарма",
        "form": "verb",
        "definitions": [
            {
                "text": "Пĕр чĕлхерен урăх чĕлхе туни:",
                "examples": [
                    "Текста чăвашла куçаратпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "куçарнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_086"
    },
    {
        "word": "шутлав тума",
        "level": "starter",
        "theme": "school",
        "emoji": "🔢",
        "subtext": "хисепсемпе шутлав тума",
        "form": "verb",
        "definitions": [
            {
                "text": "Математика ĕçĕ туни:",
                "examples": [
                    "Урокра шутлав туратпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "шутлав тунă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_087"
    },
    {
        "word": "хурланма",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🥺",
        "subtext": "япăх хыпаршăн хурланма",
        "form": "verb",
        "definitions": [
            {
                "text": "Кăмăл уйăрса хурланни:",
                "examples": [
                    "Япăх хыпаршăн хурланрăмăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "хурланнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_emotions_verb_088"
    },
    {
        "word": "шăшма",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌸",
        "subtext": "чечек шăшне шăшма",
        "form": "verb",
        "definitions": [
            {
                "text": "Сăмсапа шăш илни:",
                "examples": [
                    "Чечек шăшĕ питĕ ачаш."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "шăшнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_089"
    },
    {
        "word": "туйма",
        "level": "starter",
        "theme": "emotions",
        "emoji": "❤️",
        "subtext": "ăшă кăмăл туйма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çинчен ăсласа туйни:",
                "examples": [
                    "Аннен ырă кăмăлне туятпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "туйнă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_emotions_verb_090"
    },
    {
        "word": "пĕлтерме",
        "level": "starter",
        "theme": "social",
        "emoji": "📢",
        "subtext": "çĕнĕ хыпар пĕлтерме",
        "form": "verb",
        "definitions": [
            {
                "text": "Сăмахпа пĕлтерни:",
                "examples": [
                    "Учитель урок вăхăтне пĕлтерчĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "пĕлтернĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_091"
    },
    {
        "word": "палăртма",
        "level": "starter",
        "theme": "work",
        "emoji": "📌",
        "subtext": "ĕç вăхăтне палăртма",
        "form": "verb",
        "definitions": [
            {
                "text": "Йĕркелесе палăртни:",
                "examples": [
                    "Ĕç вăхăтне палăртрăмăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "палăртнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_work_verb_092"
    },
    {
        "word": "хăварма",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "💼",
        "subtext": "сумкана сĕтел çинче хăварма",
        "form": "verb",
        "definitions": [
            {
                "text": "Япалана хăварса каяни:",
                "examples": [
                    "Сумкана сĕтел çинче хăвартăм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "хăварнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_objects_verb_093"
    },
    {
        "word": "илсе кайма",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛍️",
        "subtext": "пасарран апат илсе кайма",
        "form": "verb",
        "definitions": [
            {
                "text": "Аллан йăтса каяни:",
                "examples": [
                    "Пасарран улма илсе кайрăмăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "илсе кайнă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_shopping_verb_094"
    },
    {
        "word": "илсе килме",
        "level": "starter",
        "theme": "social",
        "emoji": "🎁",
        "subtext": "туспа пĕрле парне илсе килме",
        "form": "verb",
        "definitions": [
            {
                "text": "Çак вырăна пĕрле илсе килни:",
                "examples": [
                    "Ялтан ăшă çăкăр илсе килчĕмĕр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "илсе килнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_095"
    },
    {
        "word": "пĕрлешме",
        "level": "starter",
        "theme": "social",
        "emoji": "🤝",
        "subtext": "пĕрлехи ĕçре пĕрлешме",
        "form": "verb",
        "definitions": [
            {
                "text": "Пĕрле туса ĕçлени:",
                "examples": [
                    "Уявра йăлтах пĕрлешрĕмĕр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "пĕрлешнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_096"
    },
    {
        "word": "уйрăлма",
        "level": "starter",
        "theme": "social",
        "emoji": "👋",
        "subtext": "ĕç хыççăн уйрăлма",
        "form": "verb",
        "definitions": [
            {
                "text": "Уйрăм каяни:",
                "examples": [
                    "Ĕç хыççăн киле уйрăлрăмăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "уйрăлнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_097"
    },
    {
        "word": "çĕнтерме",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏆",
        "subtext": "тупăшура çĕнтерме",
        "form": "verb",
        "definitions": [
            {
                "text": "Çĕнтерӳ туни:",
                "examples": [
                    "Шкул команда тупăшура çĕнтерчĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çĕнтернĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_sports_verb_098"
    },
    {
        "word": "тĕрĕслев тума",
        "level": "starter",
        "theme": "school",
        "emoji": "📝",
        "subtext": "диктант тĕрĕслев тума",
        "form": "verb",
        "definitions": [
            {
                "text": "Тĕрĕс каланине пăхни:",
                "examples": [
                    "Диктант тĕрĕслев туратпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "тĕрĕслев тунă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_099"
    },
    {
        "word": "хăтланма",
        "level": "starter",
        "theme": "work",
        "emoji": "🎯",
        "subtext": "çĕнĕ ĕç тума хăтланма",
        "form": "verb",
        "definitions": [
            {
                "text": "Пĕр ĕçе туса пăхни:",
                "examples": [
                    "Çĕнĕ тетрадь çырма хăтланрăм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "хăтланнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_work_verb_100"
    },
    {
        "word": "пăхса хурма",
        "level": "starter",
        "theme": "people",
        "emoji": "👶",
        "subtext": "кĕçĕн шăллăна пăхса хурма",
        "form": "verb",
        "definitions": [
            {
                "text": "Ачана пăхса сыхлани:",
                "examples": [
                    "Анне каясан ачана пăхса хуратăп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "пăхса хурнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_verb_101"
    },
    {
        "word": "титĕрме",
        "level": "starter",
        "theme": "nature",
        "emoji": "🥶",
        "subtext": "сивĕ çилре титĕрме",
        "form": "verb",
        "definitions": [
            {
                "text": "Çилре шăнса титĕрни:",
                "examples": [
                    "Сивĕ урамра ача титĕрет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "титĕрнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_102"
    },
    {
        "word": "хыпарма",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐕",
        "subtext": "йытă алăран хыпарни:",
        "form": "verb",
        "definitions": [
            {
                "text": "Хыпса тытни:",
                "examples": [
                    "Йытă ула какай хыпарчĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "хыпарнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_animals_verb_103"
    },
    {
        "word": "тĕкĕнме",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌸",
        "subtext": "хитре чечекне тĕкĕнме",
        "form": "verb",
        "definitions": [
            {
                "text": "Алăпа тирпейлĕ тĕкĕнни:",
                "examples": [
                    "Чечекне алăпа тĕкĕнрĕм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "тĕкĕннĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_104"
    },
    {
        "word": "варклама",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "subtext": "туспа паркра варклама",
        "form": "verb",
        "definitions": [
            {
                "text": "Сăмахпа лапка калаçни:",
                "examples": [
                    "Паркра утса варклатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "варкланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_105"
    },
    {
        "word": "кăшкăрма",
        "level": "starter",
        "theme": "social",
        "emoji": "🔊",
        "subtext": "урамра вăйлă кăшкăрма",
        "form": "verb",
        "definitions": [
            {
                "text": "Вăйлă сасăпа калани:",
                "examples": [
                    "Урамра ачасем савăнса кăшкăраççĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "кăшкăрнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_106"
    },
    {
        "word": "шăп тăма",
        "level": "starter",
        "theme": "school",
        "emoji": "🤫",
        "subtext": "библиотекара шăп тăма",
        "form": "verb",
        "definitions": [
            {
                "text": "Сас-хус ярасăр ларани:",
                "examples": [
                    "Вулавăшра йăлтах шăп тăраççĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": null,
        "v3": "шăп тăнă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_107"
    },
    {
        "word": "хыпарлама",
        "level": "starter",
        "theme": "social",
        "emoji": "📢",
        "subtext": "çĕнĕ уяв çинчен хыпарлама",
        "form": "verb",
        "definitions": [
            {
                "text": "Вăйпа пĕлтерни:",
                "examples": [
                    "Радио çĕнĕ хыпарлама туть."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "хыпарланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_108"
    },
    {
        "word": "тăрашма",
        "level": "starter",
        "theme": "school",
        "emoji": "📚",
        "subtext": "урокра тирпейлĕ вĕренме тăрашма",
        "form": "verb",
        "definitions": [
            {
                "text": "Ĕçе паттăр туни:",
                "examples": [
                    "Ученик лайăх вĕренме тăрашать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "тăрашнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_109"
    },
    {
        "word": "уçса пама",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🗝️",
        "subtext": "алăка уçса пама",
        "form": "verb",
        "definitions": [
            {
                "text": "Урапа уçса пани:",
                "examples": [
                    "Асатте алăка уçса патĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "уçса панă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_objects_verb_110"
    },
    {
        "word": "хупса хурма",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🔐",
        "subtext": "çурта хупса хурма",
        "form": "verb",
        "definitions": [
            {
                "text": "Алăка хупса хăварни:",
                "examples": [
                    "Каясан çурта хупса хуратпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "хупса хурнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_objects_verb_111"
    },
    {
        "word": "çул тытма",
        "level": "starter",
        "theme": "travel",
        "emoji": "🗺️",
        "subtext": "Шупашкара çул тытма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çул çине тухса каяни:",
                "examples": [
                    "Эпир Шупашкара çул тытрăмăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çул тытнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_verb_112"
    },
    {
        "word": "илтсе илме",
        "level": "starter",
        "theme": "music",
        "emoji": "🎶",
        "subtext": "илемлĕ юрра илтсе илме",
        "form": "verb",
        "definitions": [
            {
                "text": "Сасса хăвăрт илтни:",
                "examples": [
                    "Вăрманра юрра илтсе илтĕм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "илтсе илнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_music_verb_113"
    },
    {
        "word": "вуласа тухма",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "кĕнекене вулса тухма",
        "form": "verb",
        "definitions": [
            {
                "text": "Пĕтĕмпех вуласа пĕтерни:",
                "examples": [
                    "Çак кĕнекене вуласа тухрăм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "вуласа тухнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_114"
    },
    {
        "word": "çырса хурма",
        "level": "starter",
        "theme": "school",
        "emoji": "📝",
        "subtext": "çĕнĕ сăмахсене çырса хурма",
        "form": "verb",
        "definitions": [
            {
                "text": "Тетрадре çырса хуракан:",
                "examples": [
                    "Çĕнĕ сăмахсене тетрадре çырса хуратăп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çырса хурнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_115"
    },
    {
        "word": "пĕçерсе хурма",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍲",
        "subtext": "тутлă яшка пĕçерсе хурма",
        "form": "verb",
        "definitions": [
            {
                "text": "Апат пĕçерсе пани:",
                "examples": [
                    "Анне тутлă яшка пĕçерсе хучĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "пĕçерсе хурнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_verb_116"
    },
    {
        "word": "çисе яма",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "subtext": "тутлă панулмине çисе яма",
        "form": "verb",
        "definitions": [
            {
                "text": "Пĕтĕмпех çисе пĕтерни:",
                "examples": [
                    "Ача панулмине çисе ячĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çисе янă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_verb_117"
    },
    {
        "word": "ĕçсе яма",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "subtext": "таса шыва ĕçсе яма",
        "form": "verb",
        "definitions": [
            {
                "text": "Пĕтĕмпех ĕçсе пĕтерни:",
                "examples": [
                    "Стаканри шыва ĕçсе ярăм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "ĕçсе янă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_verb_118"
    },
    {
        "word": "сывлăх сунма",
        "level": "starter",
        "theme": "social",
        "emoji": "🤝",
        "subtext": "туса сывлăх сунма",
        "form": "verb",
        "definitions": [
            {
                "text": "Сывлăх пултăр калани:",
                "examples": [
                    "Уявра туссене сывлăх сунатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "сывлăх суннă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_119"
    },
    {
        "word": "сăмах пама",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "subtext": "тĕрĕс тума сăмах пама",
        "form": "verb",
        "definitions": [
            {
                "text": "Шанчăклă калани:",
                "examples": [
                    "Учителе лайăх вĕренме сăмах патăм."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "сăмах панă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_120"
    },
    {
        "word": "ĕçе кайма",
        "level": "starter",
        "theme": "work",
        "emoji": "💼",
        "subtext": "ирхине ĕçе кайма",
        "form": "verb",
        "definitions": [
            {
                "text": "Заводра ĕçлеме каяни:",
                "examples": [
                    "Атте ирхине ĕçе каять."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "ĕçе кайнă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_work_verb_121"
    },
    {
        "word": "апат çиме",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍲",
        "subtext": "сĕтел çумĕнче апат çиме",
        "form": "verb",
        "definitions": [
            {
                "text": "Кăнтăрла апат çини:",
                "examples": [
                    "Кăнтăрла апат çиетпĕр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "апат çинĕ",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_verb_122"
    },
    {
        "word": "чей ĕçме",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "☕",
        "subtext": "ăшă сĕтлĕ чей ĕçме",
        "form": "verb",
        "definitions": [
            {
                "text": "Сĕтлĕ чей ĕçни:",
                "examples": [
                    "Сĕтлĕ чей ĕçме юрататпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "чей ĕçнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_verb_123"
    },
    {
        "word": "урама тухма",
        "level": "starter",
        "theme": "social",
        "emoji": "🌆",
        "subtext": "каçхине урама тухма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çуртран урама тухни:",
                "examples": [
                    "Каçхине урама тухрăмăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "урама тухнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_124"
    },
    {
        "word": "кĕнеке вулама",
        "level": "starter",
        "theme": "school",
        "emoji": "📚",
        "subtext": "кăсăклă кĕнеке вулама",
        "form": "verb",
        "definitions": [
            {
                "text": "Кĕнекере юмах вулани:",
                "examples": [
                    "Кăсăклă кĕнеке вулатăп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "кĕнеке вуланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_125"
    },
    {
        "word": "çурт тума",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🏗️",
        "subtext": "ялта çĕнĕ çурт тума",
        "form": "verb",
        "definitions": [
            {
                "text": "Çĕнĕ çурт тусе хурни:",
                "examples": [
                    "Ялта çĕнĕ çурт туратпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çурт тунă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_objects_verb_126"
    },
    {
        "word": "телевизор пăхма",
        "level": "starter",
        "theme": "social",
        "emoji": "📺",
        "subtext": "каçхине телевизор пăхма",
        "form": "verb",
        "definitions": [
            {
                "text": "Экранра хыпар пăхни:",
                "examples": [
                    "Каçхине телевизор пăхатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "телевизор пăхнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_127"
    },
    {
        "word": "музыка илтме",
        "level": "starter",
        "theme": "music",
        "emoji": "🎧",
        "subtext": "илемлĕ музыка илтме",
        "form": "verb",
        "definitions": [
            {
                "text": "Музыка илтсе канатни:",
                "examples": [
                    "Канатса музыка илтетĕп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "музыка илтнĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_music_verb_128"
    },
    {
        "word": "вĕренни",
        "level": "starter",
        "theme": "school",
        "emoji": "🎓",
        "subtext": "чăваш чĕлхине вĕренни",
        "form": "verb",
        "definitions": [
            {
                "text": "Пĕлӳ илни, кĕнеке вулав:",
                "examples": [
                    "Вĕрентĕкçĕ çĕнĕ урок ăнлантарать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "вĕреннĕ",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_129"
    },
    {
        "word": "çырни",
        "level": "starter",
        "theme": "school",
        "emoji": "✍️",
        "subtext": "тедрать çырни",
        "form": "verb",
        "definitions": [
            {
                "text": "Буквăсемпе текст туни:",
                "examples": [
                    "Тетрадре çыратăп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çырнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_verb_130"
    },
    {
        "word": "ĕçлени",
        "level": "starter",
        "theme": "work",
        "emoji": "💼",
        "subtext": "заводра ĕçлени",
        "form": "verb",
        "definitions": [
            {
                "text": "Тăрăшни, ĕç туни:",
                "examples": [
                    "Атте çак организацире ĕçлет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "ĕçленĕ",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_work_verb_131"
    },
    {
        "word": "утни",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "паркра утни",
        "form": "verb",
        "definitions": [
            {
                "text": "Урапа хăвăрт мар куçни:",
                "examples": [
                    "Паркра утма юрататăп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "утнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_verb_132"
    },
    {
        "word": "шăл çума",
        "level": "starter",
        "theme": "body",
        "emoji": "🪥",
        "subtext": "ирхине шăл çума",
        "form": "verb",
        "definitions": [
            {
                "text": "Шăлсем таса туни:",
                "examples": [
                    "Ирхине шăл çуатăп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "шăл çунă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_body_verb_133"
    },
    {
        "word": "çӳç ярма",
        "level": "starter",
        "theme": "body",
        "emoji": "💇",
        "subtext": "куç умĕнче çӳç ярма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çӳçе тирпейлĕ туни:",
                "examples": [
                    "Çӳç яратăп."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çӳç ярнă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_body_verb_134"
    },
    {
        "word": "усăлма",
        "level": "starter",
        "theme": "social",
        "emoji": "🧘",
        "subtext": "ĕç хыççăн уçăлса усăлма",
        "form": "verb",
        "definitions": [
            {
                "text": "Çемçе канатни:",
                "examples": [
                    "Ĕç хыççăн усăлатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "усăлнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_135"
    },
    {
        "word": "çутăртама",
        "level": "starter",
        "theme": "nature",
        "emoji": "💡",
        "subtext": "пĕлĕмре çутăртама",
        "form": "verb",
        "definitions": [
            {
                "text": "Çутă яракан ĕç туни:",
                "examples": [
                    "Хĕвел урамра çутăртать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çутăртанă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_verb_136"
    },
    {
        "word": "хурланса калама",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😢",
        "subtext": "хурланса сăмах калама",
        "form": "verb",
        "definitions": [
            {
                "text": "Кулянса калани:",
                "examples": [
                    "Хурланса сăмах каларĕ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "хурланса каланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_emotions_verb_137"
    },
    {
        "word": "савăнса юрлама",
        "level": "starter",
        "theme": "music",
        "emoji": "🎤",
        "subtext": "уявра савăнса юрлама",
        "form": "verb",
        "definitions": [
            {
                "text": "Савăнăçлă юрлани:",
                "examples": [
                    "Уявра савăнса юрлатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "савăнса юрланă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_music_verb_138"
    },
    {
        "word": "çемьепе чупма",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏃",
        "subtext": "паркра çемьепе чупма",
        "form": "verb",
        "definitions": [
            {
                "text": "Сывлăшра çемьепе чупни:",
                "examples": [
                    "Паркра çемьепе чупатпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "çемьепе чупнă",
        "group": "consonant",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_sports_verb_139"
    },
    {
        "word": "юлташпа выляма",
        "level": "starter",
        "theme": "social",
        "emoji": "🧩",
        "subtext": "урамра юлташпа выляма",
        "form": "verb",
        "definitions": [
            {
                "text": "Савăнса выляни:",
                "examples": [
                    "Урамра юлташпа вылятпăр."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "юлташпа вылянă",
        "group": "vowel",
        "auxiliary": "чĕ",
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_verb_140"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
