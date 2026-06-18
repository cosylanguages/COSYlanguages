// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "сад",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Общественный сад или парк.",
                "examples": []
            }
        ],
        "countability": "countable",
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_places_042"
    },
    {
        "word": "художник",
        "level": "elementary",
        "theme": "art_culture",
        "gender": "masculine",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "plural": "художники",
        "definitions": [
            {
                "text": "Человек, который создает картины или рисунки.",
                "examples": [
                    "Художник рисует красивую картину.",
                    "Она — известная художница."
                ]
            },
            {
                "text": "Этот человек часто работает в мастерской.",
                "examples": [
                    "Художники используют краски и кисти."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_art_culture_004"
    },
    {
        "word": "повар",
        "level": "elementary",
        "theme": "food_drink",
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "form": "noun",
        "classification": "regular",
        "plural": "повара",
        "definitions": [
            {
                "text": "Профессиональный кулинар, который работает в ресторане.",
                "examples": [
                    "Повар готовит вкусный обед.",
                    "Наш повар очень талантлив."
                ]
            },
            {
                "text": "Этот человек работает на кухне.",
                "examples": [
                    "Повара носят высокий белый колпак."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_food_drink_023"
    },
    {
        "word": "блины",
        "level": "elementary",
        "theme": "food_drink",
        "gender": "plural",
        "emoji": "🥞",
        "form": "noun",
        "classification": "regular",
        "plural": "блины",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "блины",
                "examples": []
            }
        ],
        "id": "ru_elementary_food_drink_024"
    },
    {
        "word": "пирожки",
        "level": "elementary",
        "theme": "food_drink",
        "gender": "plural",
        "form": "noun",
        "classification": "regular",
        "plural": "пирожки",
        "lang": "ru",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "пирожки",
                "examples": []
            }
        ],
        "id": "ru_elementary_food_drink_025"
    },
    {
        "word": "сыр",
        "level": "elementary",
        "theme": "food_drink",
        "gender": "masculine",
        "emoji": "🧀",
        "form": "noun",
        "classification": "regular",
        "plural": "сыры",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "сыр",
                "examples": []
            }
        ],
        "id": "ru_elementary_food_drink_026"
    },
    {
        "word": "рис",
        "level": "elementary",
        "theme": "food_drink",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "classification": "regular",
        "plural": "рис",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "рис",
                "examples": []
            }
        ],
        "id": "ru_elementary_food_drink_027"
    },
    {
        "word": "помидор",
        "level": "elementary",
        "theme": "food_drink",
        "gender": "masculine",
        "emoji": "🍅",
        "form": "noun",
        "classification": "regular",
        "plural": "помидоры",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "помидор",
                "examples": []
            }
        ],
        "id": "ru_elementary_food_drink_028"
    },
    {
        "word": "картофель",
        "level": "elementary",
        "theme": "food_drink",
        "gender": "masculine",
        "emoji": "🥔",
        "form": "noun",
        "classification": "regular",
        "plural": "картофель",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "картофель",
                "examples": []
            }
        ],
        "id": "ru_elementary_food_drink_029"
    },
    {
        "word": "вино",
        "level": "elementary",
        "theme": "food_drink",
        "gender": "neuter",
        "baseWord": "вино",
        "emoji": "🍷",
        "form": "noun",
        "classification": "regular",
        "plural": "вино",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "вино",
                "examples": []
            }
        ],
        "id": "ru_elementary_food_drink_030"
    },
    {
        "word": "пиво",
        "level": "elementary",
        "theme": "food_drink",
        "gender": "neuter",
        "baseWord": "пиво",
        "emoji": "🍺",
        "form": "noun",
        "classification": "regular",
        "plural": "пиво",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "пиво",
                "examples": []
            }
        ],
        "id": "ru_elementary_food_drink_031"
    },
    {
        "word": "морс",
        "level": "elementary",
        "theme": "food_drink",
        "form": "noun",
        "classification": "regular",
        "plural": "морсы",
        "definitions": [
            {
                "text": "Напиток из ягод с водой и сахаром.",
                "examples": [
                    "Клюквенный морс очень полезен.",
                    "Мы заказали графин морса."
                ]
            },
            {
                "text": "Это традиционный русский ягодный напиток.",
                "examples": [
                    "Морс обычно подают холодным."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "emoji": "❓",
        "id": "ru_elementary_food_drink_032"
    },
    {
        "word": "больница",
        "level": "elementary",
        "theme": "health_medicine",
        "gender": "feminine",
        "emoji": "🏥",
        "form": "noun",
        "classification": "regular",
        "plural": "больницы",
        "definitions": [
            {
                "text": "Медицинское учреждение, где лечат больных.",
                "examples": [
                    "Скорая помощь едет в больницу.",
                    "Она работает в больнице."
                ]
            },
            {
                "text": "Это место, куда вы идете, чтобы увидеть врача или медсестру.",
                "examples": [
                    "Больницы работают круглосуточно."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_health_medicine_001"
    },
    {
        "word": "кинотеатр",
        "level": "elementary",
        "theme": "art_culture",
        "gender": "masculine",
        "emoji": "🎬",
        "form": "noun",
        "classification": "regular",
        "plural": "кинотеатры",
        "definitions": [
            {
                "text": "Место, где показывают фильмы на большом экране.",
                "examples": [
                    "Пойдем сегодня в кинотеатр.",
                    "Кинотеатр находится рядом с домом."
                ]
            },
            {
                "text": "Это место, где можно поесть попкорн и посмотреть кино.",
                "examples": [
                    "Я люблю ходить в кинотеатр с друзьями."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_art_culture_005"
    },
    {
        "word": "ресторан",
        "level": "elementary",
        "theme": "food_drink",
        "gender": "masculine",
        "emoji": "🍴",
        "form": "noun",
        "classification": "regular",
        "plural": "рестораны",
        "definitions": [
            {
                "text": "Место, где можно купить и поесть приготовленную еду.",
                "examples": [
                    "Пойдем в итальянский ресторан.",
                    "Ресторан уже открыт."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_food_drink_033"
    },
    {
        "word": "супермаркет",
        "level": "elementary",
        "theme": "shopping",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "plural": "супермаркеты",
        "definitions": [
            {
                "text": "Большой магазин, где покупают еду и товары для дома.",
                "examples": [
                    "Я иду в супермаркет за продуктами.",
                    "В супермаркете много людей."
                ]
            },
            {
                "text": "В этом магазине покупатели используют тележки.",
                "examples": [
                    "Супермаркет работает до поздна."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_shopping_002"
    },
    {
        "word": "платье",
        "level": "elementary",
        "theme": "shopping",
        "gender": "neuter",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "plural": "платья",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "платье",
                "examples": []
            }
        ],
        "id": "ru_elementary_shopping_003"
    },
    {
        "word": "куртка",
        "level": "elementary",
        "theme": "shopping",
        "gender": "feminine",
        "emoji": "🧥",
        "form": "noun",
        "classification": "regular",
        "plural": "куртки",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "куртка",
                "examples": []
            }
        ],
        "id": "ru_elementary_shopping_004"
    },
    {
        "word": "юбка",
        "level": "elementary",
        "theme": "shopping",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "plural": "юбки",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "юбка",
                "examples": []
            }
        ],
        "id": "ru_elementary_shopping_005"
    },
    {
        "word": "диван",
        "level": "elementary",
        "theme": "furniture",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "classification": "regular",
        "plural": "диваны",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "диван",
                "examples": []
            }
        ],
        "id": "ru_elementary_furniture_001"
    },
    {
        "word": "лампа",
        "level": "elementary",
        "theme": "furniture",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "plural": "лампы",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "лампа",
                "examples": []
            }
        ],
        "id": "ru_elementary_furniture_002"
    },
    {
        "word": "письменный стол",
        "level": "elementary",
        "theme": "furniture",
        "gender": "masculine",
        "emoji": "⌨️",
        "form": "noun",
        "classification": "regular",
        "plural": "письменные столы",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "письменный стол",
                "examples": []
            }
        ],
        "id": "ru_elementary_furniture_003"
    },
    {
        "word": "чистить зубы",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "🪥",
        "form": "verb",
        "classification": "regular",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "чистить зубы",
                "examples": []
            }
        ],
        "id": "ru_elementary_furniture_004"
    },
    {
        "word": "принимать душ",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "🚿",
        "form": "verb",
        "classification": "regular",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "принимать душ",
                "examples": []
            }
        ],
        "id": "ru_elementary_furniture_005"
    },
    {
        "word": "часы",
        "level": "elementary",
        "theme": "clothes",
        "form": "noun",
        "classification": "regular",
        "plural": "часы",
        "lang": "ru",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "часы",
                "examples": []
            }
        ],
        "id": "ru_elementary_clothes_001"
    },
    {
        "word": "кошелек",
        "level": "elementary",
        "theme": "clothes",
        "gender": "masculine",
        "emoji": "👛",
        "form": "noun",
        "classification": "regular",
        "plural": "кошельки",
        "definitions": [
            {
                "text": "Небольшая сумочка для денег и карточек.",
                "examples": [
                    "Я потерял кошелек.",
                    "Положи деньги в кошелек."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_clothes_002"
    },
    {
        "word": "очки",
        "level": "elementary",
        "theme": "clothes",
        "emoji": "👓",
        "form": "noun",
        "classification": "regular",
        "plural": "очки",
        "definitions": [
            {
                "text": "Предмет, который носят на лице, чтобы лучше видеть.",
                "examples": [
                    "Мне нужны новые очки.",
                    "Он носит черные очки."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_clothes_003"
    },
    {
        "word": "лев",
        "level": "elementary",
        "theme": "animals",
        "gender": "masculine",
        "emoji": "🦁",
        "form": "noun",
        "classification": "regular",
        "plural": "львы",
        "definitions": [
            {
                "text": "Крупная дикая кошка, которая живет в Африке; его называют 'царем зверей'.",
                "examples": [
                    "Лев очень сильный.",
                    "Мы видели льва в зоопарке."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_animals_004"
    },
    {
        "word": "тигр",
        "level": "elementary",
        "theme": "animals",
        "gender": "masculine",
        "emoji": "🐯",
        "form": "noun",
        "classification": "regular",
        "plural": "тигры",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "тигр",
                "examples": []
            }
        ],
        "id": "ru_elementary_animals_005"
    },
    {
        "word": "плечо",
        "level": "elementary",
        "theme": "health_medicine",
        "gender": "neuter",
        "form": "noun",
        "classification": "regular",
        "plural": "плечи",
        "lang": "ru",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "плечо",
                "examples": []
            }
        ],
        "id": "ru_elementary_body_012"
    },
    {
        "word": "университет",
        "level": "elementary",
        "theme": "jobs",
        "gender": "masculine",
        "emoji": "🎓",
        "form": "noun",
        "classification": "regular",
        "plural": "университеты",
        "definitions": [
            {
                "text": "Высшее учебное заведение.",
                "examples": [
                    "Он учится в университете.",
                    "В университете большая библиотека."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_work_041"
    },
    {
        "word": "местная кухня",
        "level": "elementary",
        "theme": "food_drink",
        "gender": "feminine",
        "emoji": "🍜",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Традиционная еда определенной местности.",
                "examples": [
                    "Мне нравится пробовать местную кухню.",
                    "Местная кухня здесь очень острая."
                ]
            },
            {
                "text": "Знакомство с местной кухней — важная часть путешествия.",
                "examples": [
                    "В местной кухне используются свежие региональные продукты."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_food_drink_034"
    },
    {
        "word": "море",
        "level": "elementary",
        "theme": "nature",
        "gender": "neuter",
        "baseWord": "море",
        "numberPlural": "много море",
        "answer": "много морей",
        "emoji": "🌊",
        "form": "noun",
        "classification": "regular",
        "plural": "морей",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "more"
        },
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "море",
                "examples": []
            }
        ],
        "id": "ru_elementary_nature_002"
    },
    {
        "word": "казаться",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤔",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "казаться",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_025"
    },
    {
        "word": "становиться",
        "level": "elementary",
        "theme": "people",
        "emoji": "🦋",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "становиться",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_026"
    },
    {
        "word": "двигать",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "📦",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "двигать",
                "examples": []
            }
        ],
        "id": "ru_elementary_furniture_006"
    },
    {
        "word": "верить",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🙏",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "верить",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_001"
    },
    {
        "word": "случаться",
        "level": "elementary",
        "theme": "describing",
        "emoji": "⚡",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "случаться",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_002"
    },
    {
        "word": "включать",
        "level": "elementary",
        "theme": "describing",
        "emoji": "➕",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "включать",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_003"
    },
    {
        "word": "продолжать",
        "level": "elementary",
        "theme": "describing",
        "emoji": "➡️",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "продолжать",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_004"
    },
    {
        "word": "устанавливать",
        "level": "elementary",
        "theme": "describing",
        "emoji": "⚙️",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "устанавливать",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_005"
    },
    {
        "word": "вести",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "👑",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "вести",
                "examples": []
            }
        ],
        "id": "ru_elementary_work_042"
    },
    {
        "word": "следовать",
        "level": "elementary",
        "theme": "describing",
        "emoji": "👣",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "следовать",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_006"
    },
    {
        "word": "создавать",
        "level": "elementary",
        "theme": "social",
        "emoji": "✨",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "создавать",
                "examples": []
            }
        ],
        "id": "ru_elementary_social_031"
    },
    {
        "word": "позволять",
        "level": "elementary",
        "theme": "describing",
        "emoji": "✅",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "позволять",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_007"
    },
    {
        "word": "расти",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌱",
        "form": "verb",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "расти",
                "examples": []
            }
        ],
        "id": "ru_elementary_environment_006"
    },
    {
        "word": "переработка",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "⏰",
        "gender": "feminine",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Дополнительные часы работы сверх нормы рабочего дня.",
                "examples": [
                    "Она работает сверхурочно, чтобы закончить проект."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_work_043"
    },
    {
        "word": "повышение",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📈",
        "gender": "neuter",
        "form": "noun",
        "classification": "regular",
        "plural": "повышения",
        "definitions": [
            {
                "text": "Переход на более высокую и лучше оплачиваемую должность в той же компании.",
                "examples": [
                    "В прошлом месяце он получил повышение."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_work_044"
    },
    {
        "word": "собеседование",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🤝",
        "gender": "neuter",
        "form": "noun",
        "classification": "regular",
        "plural": "собеседования",
        "definitions": [
            {
                "text": "Формальная встреча, на которой человеку задают вопросы при приеме на работу.",
                "examples": [
                    "У меня собеседование в понедельник."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_work_045"
    },
    {
        "word": "контракт",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📄",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "контракты",
        "definitions": [
            {
                "text": "Письменное соглашение между работодателем и работником.",
                "examples": [
                    "Она подписала двухлетний контракт."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_work_046"
    },
    {
        "word": "дедлайн",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "⏳",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "дедлайны",
        "definitions": [
            {
                "text": "Крайний срок, к которому работа должна быть закончена.",
                "examples": [
                    "Крайний срок — в пятницу."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_work_047"
    },
    {
        "word": "опыт",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🧠",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Знания или навыки, полученные в процессе какой-либо деятельности.",
                "examples": [
                    "У него пять лет опыта."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_work_048"
    },
    {
        "word": "ипотека",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏠",
        "gender": "feminine",
        "form": "noun",
        "classification": "regular",
        "plural": "ипотеки",
        "definitions": [
            {
                "text": "Кредит в банке на покупку дома или квартиры.",
                "examples": [
                    "У них большая ипотека."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_numbers_001"
    },
    {
        "word": "кредит",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💰",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "кредиты",
        "definitions": [
            {
                "text": "Деньги, взятые в долг у банка, которые должны быть возвращены.",
                "examples": [
                    "Она взяла кредит, чтобы купить машину."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_numbers_002"
    },
    {
        "word": "счёт",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🧾",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "счета",
        "definitions": [
            {
                "text": "Документ, в котором указано, сколько денег вы должны заплатить.",
                "examples": [
                    "Я оплачиваю счет за электричество каждый месяц."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_numbers_003"
    },
    {
        "word": "долг",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💸",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "долги",
        "definitions": [
            {
                "text": "Деньги, которые вы должны другому человеку или банку.",
                "examples": [
                    "У него много долгов."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_numbers_004"
    },
    {
        "word": "банковский счёт",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏦",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "банковские счета",
        "definitions": [
            {
                "text": "Соглашение с банком о хранении ваших денег.",
                "examples": [
                    "У меня есть сберегательный счет."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_numbers_005"
    },
    {
        "word": "бюджет",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📊",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "бюджеты",
        "definitions": [
            {
                "text": "План того, как тратить деньги.",
                "examples": [
                    "Нам нужен ежемесячный бюджет."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_numbers_006"
    },
    {
        "word": "диета",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🥗",
        "gender": "feminine",
        "form": "noun",
        "classification": "regular",
        "plural": "диеты",
        "definitions": [
            {
                "text": "Пища, которую человек обычно ест; или специальный план питания.",
                "examples": [
                    "Она на здоровой диете."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_food_drink_035"
    },
    {
        "word": "приём",
        "level": "elementary",
        "theme": "health_medicine",
        "emoji": "📅",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "приёмы",
        "definitions": [
            {
                "text": "Время, когда вы договариваетесь о встрече с кем-то, например, с врачом.",
                "examples": [
                    "У меня прием у врача во вторник."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_health_medicine_002"
    },
    {
        "word": "лишний вес",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "⚖️",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Вес больше того, который считается здоровым.",
                "examples": [
                    "Врач сказал, что у него небольшой лишний вес."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_food_drink_036"
    },
    {
        "word": "витамин",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "💊",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "витамины",
        "definitions": [
            {
                "text": "Природное вещество в пище, которое необходимо вашему организму для здоровья.",
                "examples": [
                    "Апельсины содержат витамин С."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_food_drink_037"
    },
    {
        "word": "боль",
        "level": "elementary",
        "theme": "health_medicine",
        "emoji": "🤕",
        "gender": "feminine",
        "form": "noun",
        "classification": "regular",
        "plural": "боли",
        "definitions": [
            {
                "text": "Неприятное ощущение в теле, когда что-то не так.",
                "examples": [
                    "У нее боль в спине."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_health_medicine_003"
    },
    {
        "word": "поддержка",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "gender": "feminine",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Помощь или поощрение, оказываемые кому-либо.",
                "examples": [
                    "Мне нужна твоя поддержка."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_people_027"
    },
    {
        "word": "доверие",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "gender": "neuter",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Убежденность в том, что кто-то честен и надежен.",
                "examples": [
                    "Доверие важно в отношениях."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_people_028"
    },
    {
        "word": "компромисс",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "компромиссы",
        "definitions": [
            {
                "text": "Соглашение, при котором обе стороны принимают меньше, чем хотели.",
                "examples": [
                    "Хорошие отношения требуют компромисса."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_people_029"
    },
    {
        "word": "путешествие",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🛤️",
        "gender": "neuter",
        "form": "noun",
        "classification": "regular",
        "plural": "путешествия",
        "definitions": [
            {
                "text": "Поездка из одного места в другое.",
                "examples": [
                    "Поездка на работу занимает 40 минут."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_travel_028"
    },
    {
        "word": "за границу",
        "level": "elementary",
        "theme": "travel",
        "emoji": "✈️",
        "form": "adverb",
        "definitions": [
            {
                "text": "В другую страну.",
                "examples": [
                    "Они ездят за границу каждое лето."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_travel_029"
    },
    {
        "word": "пункт назначения",
        "level": "elementary",
        "theme": "travel",
        "emoji": "📍",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "пункты назначения",
        "definitions": [
            {
                "text": "Место, куда вы направляетесь.",
                "examples": [
                    "Париж — популярное направление."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_travel_030"
    },
    {
        "word": "рейс",
        "level": "elementary",
        "theme": "travel",
        "emoji": "✈️",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "рейсы",
        "definitions": [
            {
                "text": "Путешествие, совершенное на самолете.",
                "examples": [
                    "Полет в Лондон занимает два часа."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_travel_031"
    },
    {
        "word": "багаж",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🧳",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Сумки и чемоданы, которые вы берете с собой в поездку.",
                "examples": [
                    "У нее много багажа."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_travel_032"
    },
    {
        "word": "район",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "🏘️",
        "gender": "masculine",
        "form": "noun",
        "classification": "regular",
        "plural": "районы",
        "definitions": [
            {
                "text": "Местность вокруг вашего дома.",
                "examples": [
                    "Мы живем в безопасном районе."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_places_043"
    },
    {
        "word": "сообщество",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "👥",
        "gender": "neuter",
        "form": "noun",
        "classification": "regular",
        "plural": "сообщества",
        "definitions": [
            {
                "text": "Группа людей, живущих в одной местности или имеющих общие интересы.",
                "examples": [
                    "Она активно участвует в жизни местного сообщества."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_places_044"
    },
    {
        "word": "загрязнение",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🏭",
        "gender": "neuter",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ущерб окружающей среде, вызванный вредными веществами.",
                "examples": [
                    "Загрязнение воздуха — большая проблема здесь."
                ]
            }
        ],
        "lang": "ru",
        "transcription": "",
        "id": "ru_elementary_environment_007"
    }
];
})();
