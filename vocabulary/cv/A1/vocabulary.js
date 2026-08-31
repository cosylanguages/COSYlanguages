// TODO: verify level classification
(function() {
    const lang = "cv";
    const data = [
    {
        "word": "çăкăр",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍞",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Тĕп апат, çунтарса пĕçернĕ апат:",
                "examples": [
                    "Ирхине ăшă çăкăр илтĕм."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_001"
    },
    {
        "word": "шыв",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "💧",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Пĕтĕм чĕрĕ япалашăн кăра чылай ĕçме:",
                "examples": [
                    "Уçă шыв ĕçрĕм."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_002"
    },
    {
        "word": "чей",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Вĕри ĕçме, чей япрахĕнчен пĕçернĕ:",
                "examples": [
                    "Эпир сĕтлĕ чей ĕçетпĕр."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_003"
    },
    {
        "word": "сĕт",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Шурă тĕслĕ ĕçме:",
                "examples": [
                    "Ĕне сĕт парать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_004"
    },
    {
        "word": "ят",
        "level": "starter",
        "theme": "people",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çын ячĕ, палăртмалли сăмах:",
                "examples": [
                    "Манăн ятăм — Илемпи."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_vocab_005"
    },
    {
        "word": "пĕрре",
        "level": "starter",
        "theme": "numbers_0_9",
        "emoji": "1️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Тĕп хисеп, 1:",
                "examples": [
                    "Манăн пĕр кĕнеке бар."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_numbers_0_9_vocab_006"
    },
    {
        "word": "вуннă",
        "level": "starter",
        "theme": "numbers_10_99",
        "emoji": "🔟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Тĕп хисеп, 10:",
                "examples": [
                    "Вучахра вунă ача вĕренет."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_numbers_10_99_vocab_007"
    },
    {
        "word": "çĕр",
        "level": "starter",
        "theme": "numbers_100_999",
        "emoji": "💯",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Тĕп хисеп, 100:",
                "examples": [
                    "Çак кĕнекере çĕр страница."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_numbers_100_999_vocab_008"
    },
    {
        "word": "панулми",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Тутлă улма, йывăç çинче çусланакан:",
                "examples": [
                    "Хĕрлĕ панулми питĕ тутлă."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_009"
    },
    {
        "word": "çĕр улми",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥔",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Çĕр айĕнче çусланакан пахча çимĕçĕ:",
                "examples": [
                    "Çĕр улми яшкара тутлă."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_010"
    },
    {
        "word": "хăяр",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Симĕс тĕслĕ пахча çимĕçĕ:",
                "examples": [
                    "Пахчара çĕнĕ хăяр тухрĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_011"
    },
    {
        "word": "помидор",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Хĕрлĕ тĕслĕ пахча çимĕçĕ:",
                "examples": [
                    "Анне хĕрлĕ помидор çичĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_012"
    },
    {
        "word": "пахча",
        "level": "starter",
        "theme": "nature",
        "emoji": "🏡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çурт çумĕнчи улма-çырла үстерекен вырăн:",
                "examples": [
                    "Пахчара симĕс курăк усен каять."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_013"
    },
    {
        "word": "йывăç",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çурт-кĕрĕтра яки вăрманра усен каякан пысăк өсемлек:",
                "examples": [
                    "Пакчара пысăк йывăç ларать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_014"
    },
    {
        "word": "чечек",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Илемлĕ, хитре шăшлă чечек:",
                "examples": [
                    "Çуркунне хитре чечексем çусланаççĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_015"
    },
    {
        "word": "курăк",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌿",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Çĕр çинче çусланакан симĕс курăк:",
                "examples": [
                    "Çухине курăк симĕс пулать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_016"
    },
    {
        "word": "вăрман",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Нумай йывăçсем усен каякан пысăк вырăн:",
                "examples": [
                    "Вăрманра кайăксем юрлаççĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_017"
    },
    {
        "word": "пĕлĕт",
        "level": "starter",
        "theme": "nature",
        "emoji": "☁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Сывлăшри шурă яки кăвак пĕлĕт:",
                "examples": [
                    "Пĕлĕтре хĕвел ялкăшать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_018"
    },
    {
        "word": "хĕвел",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Кунсене çутăртакан çăлтăр:",
                "examples": [
                    "Паян хĕвел ялкăш çутатать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_019"
    },
    {
        "word": "уйăх",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Каçхи пĕлĕтре çутăртакан уйăх:",
                "examples": [
                    "Каçхине уйăх тухрĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_020"
    },
    {
        "word": "çăлтăр",
        "level": "starter",
        "theme": "nature",
        "emoji": "⭐",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Каçхи пĕлĕтри пĕчĕк çăлтăрсем:",
                "examples": [
                    "Пĕлĕтре нумай çăлтăр ялкăшать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_021"
    },
    {
        "word": "çумăр",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌧️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Пĕлĕтрен çуйăнкан шыв:",
                "examples": [
                    "Урамра çумăр çуать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_022"
    },
    {
        "word": "юр",
        "level": "starter",
        "theme": "nature",
        "emoji": "❄️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Хĕлле çуйăнкан шурă юр:",
                "examples": [
                    "Урамра юр выртать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_023"
    },
    {
        "word": "çил",
        "level": "starter",
        "theme": "nature",
        "emoji": "💨",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Вăйлă сывлăш куçăмĕ:",
                "examples": [
                    "Вăрманта хытă çил ĕфеть."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_024"
    },
    {
        "word": "кун",
        "level": "starter",
        "theme": "time",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Вăхăт виçи, çутă вăхăт:",
                "examples": [
                    "Паян ăшă кун."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_time_vocab_025"
    },
    {
        "word": "каç",
        "level": "starter",
        "theme": "time",
        "emoji": "🌃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Тĕттĕм вăхăт, кун хыççăн пулакан:",
                "examples": [
                    "Каçхине урамра шăп."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_time_vocab_026"
    },
    {
        "word": "ир",
        "level": "starter",
        "theme": "time",
        "emoji": "🌅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çутăлакан ирхи вăхăт:",
                "examples": [
                    "Ирхине шурăмпуç тухрĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_time_vocab_027"
    },
    {
        "word": "кăнтăр",
        "level": "starter",
        "theme": "time",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Кун вăрри, кăнтăрлахи вăхăт:",
                "examples": [
                    "Кăнтăрла апат çиетпĕр."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_time_vocab_028"
    },
    {
        "word": "çулталăк",
        "level": "starter",
        "theme": "time",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Вун-икĕ уйăх тăршшĕ вăхăт:",
                "examples": [
                    "Çĕнĕ çулталăк пуçланчĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_time_vocab_029"
    },
    {
        "word": "эрне",
        "level": "starter",
        "theme": "time",
        "emoji": "🗓️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çичĕ кун тăршшĕ вăхăт:",
                "examples": [
                    "Эрнекун шкула каймалла."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_time_vocab_030"
    },
    {
        "word": "çемье",
        "level": "starter",
        "theme": "people",
        "emoji": "👨‍👩‍👧‍👦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çывăх çынсен ушăмĕ:",
                "examples": [
                    "Пирĕн çемье пысăк."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_vocab_031"
    },
    {
        "word": "анне",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Анне, иң çывăх çын:",
                "examples": [
                    "Анне ялта пурăнать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_vocab_032"
    },
    {
        "word": "атте",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Атте, çемье пуçĕ:",
                "examples": [
                    "Атте ĕçре."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_vocab_033"
    },
    {
        "word": "пичче",
        "level": "starter",
        "theme": "people",
        "emoji": "👦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Асли пичче:",
                "examples": [
                    "Мăн пичче шкулта уçăлать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_vocab_034"
    },
    {
        "word": "аппа",
        "level": "starter",
        "theme": "people",
        "emoji": "👧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Асли аппа:",
                "examples": [
                    "Пирĕн аппа институтра вĕренет."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_vocab_035"
    },
    {
        "word": "асатте",
        "level": "starter",
        "theme": "people",
        "emoji": "👴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Аттен аттĕшĕ:",
                "examples": [
                    "Асатте юмах каласа парать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_vocab_036"
    },
    {
        "word": "асанне",
        "level": "starter",
        "theme": "people",
        "emoji": "👵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Аттен аннĕшĕ:",
                "examples": [
                    "Асанне тутлă хуплу пĕçереть."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_vocab_037"
    },
    {
        "word": "çурт",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Пурăнмалли вырăн, çурт-кĕрĕт:",
                "examples": [
                    "Пирĕн çурт мăн та çутă."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_vocab_038"
    },
    {
        "word": "пĕлĕм",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🚪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çурт ăшĕнчи пĕр вырăн, пӳлĕм:",
                "examples": [
                    "Ку пĕлĕмре сĕтел ларать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_vocab_039"
    },
    {
        "word": "сĕтел",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Апат çимĕç ямалли сĕтел-пукан:",
                "examples": [
                    "Сĕтел çинче кĕнеке выртать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_vocab_040"
    },
    {
        "word": "покан",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Лармалли сĕтел-пукан, пукан:",
                "examples": [
                    "Покан çине лар."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_vocab_041"
    },
    {
        "word": "диван",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛋️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çемçе лармалли сĕтел-пукан:",
                "examples": [
                    "Çемçе диван çинче канаем."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_vocab_042"
    },
    {
        "word": "кăмака",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çурт ăшĕнче ăшă паракан кăмака:",
                "examples": [
                    "Кăмакара ăшă вут çунать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_vocab_043"
    },
    {
        "word": "алăк",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🚪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çурт кĕрмелли алăк:",
                "examples": [
                    "Алăка уçса пĕлĕме кĕрĕм."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_vocab_044"
    },
    {
        "word": "чӳрече",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🪟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çурта çутă яракан чӳрече:",
                "examples": [
                    "Чӳречерен урам куранать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_vocab_045"
    },
    {
        "word": "кĕнеке",
        "level": "starter",
        "theme": "school",
        "emoji": "📚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Вуламалли кĕнеке:",
                "examples": [
                    "Çак кĕнекере çĕр страница."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_vocab_046"
    },
    {
        "word": "тедрать",
        "level": "starter",
        "theme": "school",
        "emoji": "📓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çырмалли тетрадь:",
                "examples": [
                    "Тетрадре буквăсем çыратăп."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_vocab_047"
    },
    {
        "word": "ручка",
        "level": "starter",
        "theme": "school",
        "emoji": "🖊️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Тетрадре çырмалли ручка:",
                "examples": [
                    "Хура ручка сĕтел çинче."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_vocab_048"
    },
    {
        "word": "карандаш",
        "level": "starter",
        "theme": "school",
        "emoji": "✏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ӳкермелли карандаш:",
                "examples": [
                    "Сарă карандашпа ӳкеретĕп."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_vocab_049"
    },
    {
        "word": "шкул",
        "level": "starter",
        "theme": "school",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ачасем вĕренекен çурт:",
                "examples": [
                    "Пирĕн ялта çĕнĕ шкул тунă."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_vocab_050"
    },
    {
        "word": "партă",
        "level": "starter",
        "theme": "school",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Урокра лармалли партă:",
                "examples": [
                    "Партă çинче кĕнеке ларать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_vocab_051"
    },
    {
        "word": "класс",
        "level": "starter",
        "theme": "school",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Шкул ăшĕнчи вĕренмелли пĕлĕм:",
                "examples": [
                    "Классра шăп."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_vocab_052"
    },
    {
        "word": "урок",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Шкул вĕренĕвĕн пĕр пайĕ:",
                "examples": [
                    "Паян пĕрремĕш урок — чăваш чĕлхи."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_vocab_053"
    },
    {
        "word": "тумтир",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👕",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Çын тăхăнмалли япаласем:",
                "examples": [
                    "Анне çĕнĕ тумтир туянчĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_clothes_vocab_054"
    },
    {
        "word": "кĕпе",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çиелти тумтир:",
                "examples": [
                    "Анне çĕнĕ кĕпе тăхăнчĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_clothes_vocab_055"
    },
    {
        "word": "йĕм",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ура тумтирĕ, йĕм-шалавар:",
                "examples": [
                    "Хура йĕм яланах юрăхлă."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_clothes_vocab_056"
    },
    {
        "word": "шапка",
        "level": "starter",
        "theme": "clothes",
        "emoji": "🧢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Пуçа тăхăнмалли япала:",
                "examples": [
                    "Хĕлле ăшă шапка тăхăнаççĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_clothes_vocab_057"
    },
    {
        "word": "çăпата",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Йăла йăлинчи ура тумтирĕ:",
                "examples": [
                    "Мăн асатте çăпата сыратчĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_clothes_vocab_058"
    },
    {
        "word": "тăла",
        "level": "starter",
        "theme": "clothes",
        "emoji": "🧦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ураран тăхăнмалли япала:",
                "examples": [
                    "Хĕлле йăлтах ăшă тăла тăхăнаççĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_clothes_vocab_059"
    },
    {
        "word": "атă",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çиелти ура тумтирĕ, атă:",
                "examples": [
                    "Хĕллехи атă ăшă."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_clothes_vocab_060"
    },
    {
        "word": "алшалли",
        "level": "starter",
        "theme": "clothes",
        "emoji": "🧣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Мăйра тăхăнмалли алшалли:",
                "examples": [
                    "Мăйра хĕрлĕ алшалли бар."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_clothes_vocab_061"
    },
    {
        "word": "пуç",
        "level": "starter",
        "theme": "body",
        "emoji": "🗣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ӳт-пӳн çиелти пайĕ:",
                "examples": [
                    "Паян манăн пуç ыратать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_body_vocab_062"
    },
    {
        "word": "алă",
        "level": "starter",
        "theme": "body",
        "emoji": "✋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Тытмалли тата ĕçлемелли орган:",
                "examples": [
                    "Апат çиес умĕн аллуна çу."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_body_vocab_063"
    },
    {
        "word": "ура",
        "level": "starter",
        "theme": "body",
        "emoji": "🦶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Утмалли орган:",
                "examples": [
                    "Урамра утса ура аранчĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_body_vocab_064"
    },
    {
        "word": "куç",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Курмалли орган:",
                "examples": [
                    "Унăн куçĕсем хура."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_body_vocab_065"
    },
    {
        "word": "хăлха",
        "level": "starter",
        "theme": "body",
        "emoji": "👂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Илтмелли орган:",
                "examples": [
                    "Хăлхапа юрă илтетпĕр."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_body_vocab_066"
    },
    {
        "word": "çăвар",
        "level": "starter",
        "theme": "body",
        "emoji": "👄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çимелли тата каламалли орган:",
                "examples": [
                    "Çăварпа сăмах калатпăр."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_body_vocab_067"
    },
    {
        "word": "шăл",
        "level": "starter",
        "theme": "body",
        "emoji": "🦷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çиме вакламалли шăлсем:",
                "examples": [
                    "Ирхине шăл çумалла."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_body_vocab_068"
    },
    {
        "word": "чĕлхе",
        "level": "starter",
        "theme": "body",
        "emoji": "👅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Калаçмалли орган яки чĕлхе:",
                "examples": [
                    "Чăваш чĕлхи — тăван чĕлхе."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_body_vocab_069"
    },
    {
        "word": "кушак",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Килти пĕчĕк килти кушак:",
                "examples": [
                    "Мăнтăр кушак сĕтел çинче ларать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_animals_vocab_070"
    },
    {
        "word": "йытă",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çурт сыхлакан йытă:",
                "examples": [
                    "Усал йытă урамра абрать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_animals_vocab_071"
    },
    {
        "word": "ĕне",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Сĕт паракан килти выльăх:",
                "examples": [
                    "Ĕне сĕт парать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_animals_vocab_072"
    },
    {
        "word": "лаша",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Утмалли тата ĕçлемелли лаша:",
                "examples": [
                    "Лаша урамра чупат."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_animals_vocab_073"
    },
    {
        "word": "сурăх",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çăм паракан сурăх:",
                "examples": [
                    "Сурăх симĕс курăк çиет."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_animals_vocab_074"
    },
    {
        "word": "кайăк",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Пĕлĕтре вĕçекен кайăк:",
                "examples": [
                    "Кайăк йывăç çинче юрлайт."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_animals_vocab_075"
    },
    {
        "word": "пулă",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Шывра ишекен пулă:",
                "examples": [
                    "Юханшывра пулă бар."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_animals_vocab_076"
    },
    {
        "word": "машина",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Урампа чупакан машина:",
                "examples": [
                    "Хăвăрт машина урампа каять."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_vocab_077"
    },
    {
        "word": "поезд",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çул çинче куçакан поезд:",
                "examples": [
                    "Поезд Мускава каять."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_vocab_078"
    },
    {
        "word": "автобус",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çынсене турттаракан автобус:",
                "examples": [
                    "Автобус хула вăррине çитрĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_vocab_079"
    },
    {
        "word": "велосипед",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Урапа яракан велосипед:",
                "examples": [
                    "Ача велосипедпа чупат."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_vocab_080"
    },
    {
        "word": "çул",
        "level": "starter",
        "theme": "travel",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Машинсем тата çынсем утнакан çул:",
                "examples": [
                    "Вăрăм çул яла каять."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_travel_vocab_081"
    },
    {
        "word": "урам",
        "level": "starter",
        "theme": "places",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çуртсем хушшинчи урам:",
                "examples": [
                    "Урамра çутă та таса."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_places_vocab_082"
    },
    {
        "word": "хула",
        "level": "starter",
        "theme": "places",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Нумай çуртлă пысăк хула:",
                "examples": [
                    "Шупашкар — хитре хула."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_places_vocab_083"
    },
    {
        "word": "ял",
        "level": "starter",
        "theme": "places",
        "emoji": "🌾",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çынсем пурăнакан пĕчĕк ял:",
                "examples": [
                    "Ялта питĕ шăп."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_places_vocab_084"
    },
    {
        "word": "базар",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Япаласем сутакан базар:",
                "examples": [
                    "Базаррта çĕнĕ улма туянрăм."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_shopping_vocab_085"
    },
    {
        "word": "лавкка",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çăкăр тата апат сутакан лавкка:",
                "examples": [
                    "Лавккаран чей илтĕм."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_shopping_vocab_086"
    },
    {
        "word": "укçа",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💵",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Япала туянмалли укçа:",
                "examples": [
                    "Паян манăн укçа бар."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_shopping_vocab_087"
    },
    {
        "word": "ĕç",
        "level": "starter",
        "theme": "work",
        "emoji": "💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ĕç-хĕл, тăрăшу:",
                "examples": [
                    "Паян манăн ĕç чылай."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_work_vocab_088"
    },
    {
        "word": "уяв",
        "level": "starter",
        "theme": "social",
        "emoji": "🎉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Савăнăçлă уяв кунĕ:",
                "examples": [
                    "Çĕнĕ çул — мăн уяв."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_vocab_089"
    },
    {
        "word": "юрă",
        "level": "starter",
        "theme": "music",
        "emoji": "🎵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Сасăпа юрламалли юрă:",
                "examples": [
                    "Чăваш юрри питĕ илемлĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_music_vocab_090"
    },
    {
        "word": "ташă",
        "level": "starter",
        "theme": "music",
        "emoji": "💃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Уяври хитре ташă:",
                "examples": [
                    "Ачасем уявра ташлаççĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_music_vocab_091"
    },
    {
        "word": "сăмах",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Калаçмалли сăмах:",
                "examples": [
                    "Тĕрĕс сăмах çырса хурар."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_vocab_092"
    },
    {
        "word": "юмах",
        "level": "starter",
        "theme": "social",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ачасемшăн калакан юмах:",
                "examples": [
                    "Асатте кăсăклă юмах калать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_vocab_093"
    },
    {
        "word": "хисеп",
        "level": "starter",
        "theme": "school",
        "emoji": "🔢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Шутлав, хисеп ячĕ:",
                "examples": [
                    "Çак хисепе çырса хурар."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_vocab_094"
    },
    {
        "word": "çанталăк",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌤️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Урамри çанталăк:",
                "examples": [
                    "Паян хĕвеллĕ çанталăк."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_095"
    },
    {
        "word": "сывлăш",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌬️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Сывламалли таса сывлăш:",
                "examples": [
                    "Вăрманта таса сывлăш."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_096"
    },
    {
        "word": "салам",
        "level": "starter",
        "theme": "social",
        "emoji": "👋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Тус-эш хушшинче саламламалли сăмах:",
                "examples": [
                    "Салам, Петĕр!"
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_vocab_097"
    },
    {
        "word": "яшка",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Аш-пăшпа пĕçернĕ вĕри яшка:",
                "examples": [
                    "Ăшă яшка питĕ тутлă."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_098"
    },
    {
        "word": "çăмарта",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Чăх тунă çăмарта:",
                "examples": [
                    "Ирхине çăмарта çирĕм."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_099"
    },
    {
        "word": "çу",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🧈",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Çăкăр çине сăрмалли çу:",
                "examples": [
                    "Çăкăр çинче тутлă çу."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_100"
    },
    {
        "word": "пăр",
        "level": "starter",
        "theme": "nature",
        "emoji": "🧊",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Хĕллехи сивĕ пăр:",
                "examples": [
                    "Кӳлĕ çинче пăр выртать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_101"
    },
    {
        "word": "сахар",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍬",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Чейме çимелли тутлă сахар:",
                "examples": [
                    "Чейме сахар хушрăм."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_102"
    },
    {
        "word": "тăвар",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🧂",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Апата хушмалли тăвар:",
                "examples": [
                    "Яшкара тăвар бар."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_103"
    },
    {
        "word": "стакан",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Шыв ĕçмелли стакан:",
                "examples": [
                    "Стаканра таса шыв."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_104"
    },
    {
        "word": "чашăк",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍽️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Апат ямалли чашăк:",
                "examples": [
                    "Чашăк çинче апат ларать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_105"
    },
    {
        "word": "çĕççĕ",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🔪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çăкăр касмалли çĕççĕ:",
                "examples": [
                    "Çĕççĕпе çăкăр касрăм."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_106"
    },
    {
        "word": "кашăк",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Яшка çимелли кашăк:",
                "examples": [
                    "Сĕтел çинче кашăк выртать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_107"
    },
    {
        "word": "сумка",
        "level": "starter",
        "theme": "shopping",
        "emoji": "👜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Кĕнекесем ямалли сумка:",
                "examples": [
                    "Сумкара çĕнĕ тетрадь."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_shopping_vocab_108"
    },
    {
        "word": "юханшыв",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Пысăк куçакан шыв, юханшыв:",
                "examples": [
                    "Волга — мăн юханшыв."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_109"
    },
    {
        "word": "кӳлĕ",
        "level": "starter",
        "theme": "nature",
        "emoji": "🏞️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Шăп шывлă кӳлĕ:",
                "examples": [
                    "Кӳлĕре пулăсем бар."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_110"
    },
    {
        "word": "парк",
        "level": "starter",
        "theme": "places",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Хулари уçăлмалли парк:",
                "examples": [
                    "Паркра ачасем выляççĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_places_vocab_111"
    },
    {
        "word": "вакăр",
        "level": "starter",
        "theme": "describing",
        "emoji": "🔵",
        "form": "adjective",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Кăвак, пĕлĕт тĕсĕ:",
                "examples": [
                    "Пĕлĕт вакăр тĕслĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_describing_vocab_112"
    },
    {
        "word": "япрах",
        "level": "starter",
        "theme": "nature",
        "emoji": "🍃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Йывăç çинче çусланакан симĕс япрах:",
                "examples": [
                    "Йывăç çинче симĕс япрах усен каять."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_113"
    },
    {
        "word": "кăмăл",
        "level": "starter",
        "theme": "emotions",
        "emoji": "❤️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Çыннăн кăмăл-тĕсĕ:",
                "examples": [
                    "Манăн кăмăл паян питĕ лайăх."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_emotions_vocab_114"
    },
    {
        "word": "пӳлĕм",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🚪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çурт ăшĕнчи пĕлĕм, пӳлĕм:",
                "examples": [
                    "Ку пӳлĕмре сĕтел ларать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_vocab_115"
    },
    {
        "word": "вăрманлăх",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Пысăк вăрман вырăнĕ:",
                "examples": [
                    "Вăрманлăхра ачасем уçăлаççĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_116"
    },
    {
        "word": "какай",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥩",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Аш-пăш апат:",
                "examples": [
                    "Какай шӳрпи тутлă."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_117"
    },
    {
        "word": "улма",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍏",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Йывăç çинчи улма-çырла:",
                "examples": [
                    "Пахчара улма пиçсе çитрĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_118"
    },
    {
        "word": "çырла",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Вăрманта тухакан хĕрлĕ çырла:",
                "examples": [
                    "Вăрманта тутлă çырла туптăмăр."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_119"
    },
    {
        "word": "кăмпа",
        "level": "starter",
        "theme": "nature",
        "emoji": "🍄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Вăрманра çумăр хыççăн тухакан кăмпа:",
                "examples": [
                    "Çумăр хыççăн кăмпасем тухрĕç."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_nature_vocab_120"
    },
    {
        "word": "аш",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥩",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Аш-пăш, апат-çимĕç:",
                "examples": [
                    "Пĕçернĕ аш сĕтел çинче."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_food_drink_vocab_121"
    },
    {
        "word": "пасар",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Базар, япаласем сутакан пасар:",
                "examples": [
                    "Пасаррта çĕнĕ тумтир илтĕмĕр."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_shopping_vocab_122"
    },
    {
        "word": "çăм",
        "level": "starter",
        "theme": "clothes",
        "emoji": "🧶",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Сурăхран тухнă ăшă çăм:",
                "examples": [
                    "Сурăх çăмĕнчен йĕм тĕртĕç."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_clothes_vocab_123"
    },
    {
        "word": "кану",
        "level": "starter",
        "theme": "social",
        "emoji": "🏖️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Ĕç хыççăн канакан вăхăт:",
                "examples": [
                    "Кану кунĕнче ялта уçăлатпăр."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_vocab_124"
    },
    {
        "word": "сывлăх",
        "level": "starter",
        "theme": "body",
        "emoji": "💪",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Çыннăн сывлăх-пурнăçĕ:",
                "examples": [
                    "Сывлăх пире вăй парать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_body_vocab_125"
    },
    {
        "word": "хыпар",
        "level": "starter",
        "theme": "social",
        "emoji": "📰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çĕнĕтен уçăлнă хыпар:",
                "examples": [
                    "Хаçатта лайăх хыпар вулатпăр."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_vocab_126"
    },
    {
        "word": "буквă",
        "level": "starter",
        "theme": "school",
        "emoji": "🔤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çырмалли буквăсем:",
                "examples": [
                    "Çĕнĕ буквăсем вĕренетпĕр."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_school_vocab_127"
    },
    {
        "word": "уçăлав",
        "level": "starter",
        "theme": "social",
        "emoji": "🚶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Сывлăшри уçăлав:",
                "examples": [
                    "Каçхи уçăлав сывлăхшăн ушлă."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_social_vocab_128"
    },
    {
        "word": "кашта",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🪜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Çурт каштийĕ, кĕнеке ямалли:",
                "examples": [
                    "Кашта çинче кĕнеке ларать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_furniture_vocab_129"
    },
    {
        "word": "кукаçи",
        "level": "starter",
        "theme": "people",
        "emoji": "👴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Аннен аттĕшĕ:",
                "examples": [
                    "Кукаçи пире чей пĕçерсе патĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_vocab_130"
    },
    {
        "word": "кукамай",
        "level": "starter",
        "theme": "people",
        "emoji": "👵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Аннен аннĕшĕ:",
                "examples": [
                    "Кукамай хуплу пĕçереть."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_vocab_131"
    },
    {
        "word": "шăллă",
        "level": "starter",
        "theme": "people",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Кĕçĕн шăллă:",
                "examples": [
                    "Шăллă шкула васкать."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_vocab_132"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
