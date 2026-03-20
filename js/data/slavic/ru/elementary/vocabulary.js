(function() {
    const data = [
    {
        "word": "художник",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🎨",
        "form": "noun",
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
        ]
    },
    {
        "word": "повар",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "👨‍🍳",
        "form": "noun",
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
        ]
    },
    {
        "word": "блины",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥞",
        "form": "noun",
        "plural": "блины"
    },
    {
        "word": "пирожки",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "form": "noun",
        "plural": "пирожки"
    },
    {
        "word": "сыр",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🧀",
        "form": "noun",
        "plural": "сыры"
    },
    {
        "word": "рис",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍚",
        "form": "noun",
        "plural": "рис"
    },
    {
        "word": "помидор",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍅",
        "form": "noun",
        "plural": "помидоры"
    },
    {
        "word": "картофель",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥔",
        "form": "noun",
        "plural": "картофель"
    },
    {
        "word": "вино",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "gender": "оно",
        "baseWord": "вино",
        "emoji": "🍷",
        "form": "noun",
        "plural": "вино"
    },
    {
        "word": "пиво",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "gender": "оно",
        "baseWord": "пиво",
        "emoji": "🍺",
        "form": "noun",
        "plural": "пиво"
    },
    {
        "word": "морс",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "form": "noun",
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
        ]
    },
    {
        "word": "больница",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏥",
        "form": "noun",
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
        ]
    },
    {
        "word": "кинотеатр",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🎬",
        "form": "noun",
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
        ]
    },
    {
        "word": "ресторан",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🍴",
        "form": "noun",
        "plural": "рестораны",
        "definitions": [
            {
                "text": "Место, где можно купить и поесть приготовленную еду.",
                "examples": [
                    "Пойдем в итальянский ресторан.",
                    "Ресторан уже открыт."
                ]
            }
        ]
    },
    {
        "word": "супермаркет",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🛒",
        "form": "noun",
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
        ]
    },
    {
        "word": "платье",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "👗",
        "form": "noun",
        "plural": "платья"
    },
    {
        "word": "куртка",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🧥",
        "form": "noun",
        "plural": "куртки"
    },
    {
        "word": "юбка",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "👗",
        "form": "noun",
        "plural": "юбки"
    },
    {
        "word": "диван",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "диваны"
    },
    {
        "word": "лампа",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "💡",
        "form": "noun",
        "plural": "лампы"
    },
    {
        "word": "письменный стол",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "⌨️",
        "form": "noun",
        "plural": "письменный столы"
    },
    {
        "word": "красивый",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "form": "noun",
        "plural": "красивый"
    },
    {
        "word": "сильный",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "form": "noun",
        "plural": "сильный"
    },
    {
        "word": "чистить зубы",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🪥",
        "form": "noun",
        "plural": "чистить зубы"
    },
    {
        "word": "принимать душ",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🚿",
        "form": "noun",
        "plural": "принимать души"
    },
    {
        "word": "часы",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "form": "noun",
        "plural": "часы"
    },
    {
        "word": "кошелек",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "👛",
        "form": "noun",
        "plural": "кошельки",
        "definitions": [
            {
                "text": "Небольшая сумочка для денег и карточек.",
                "examples": [
                    "Я потерял кошелек.",
                    "Положи деньги в кошелек."
                ]
            }
        ]
    },
    {
        "word": "очки",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "👓",
        "form": "noun",
        "plural": "очки",
        "definitions": [
            {
                "text": "Предмет, который носят на лице, чтобы лучше видеть.",
                "examples": [
                    "Мне нужны новые очки.",
                    "Он носит черные очки."
                ]
            }
        ]
    },
    {
        "word": "лев",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🦁",
        "form": "noun",
        "plural": "львы",
        "definitions": [
            {
                "text": "Крупная дикая кошка, которая живет в Африке; его называют 'царем зверей'.",
                "examples": [
                    "Лев очень сильный.",
                    "Мы видели льва в зоопарке."
                ]
            }
        ]
    },
    {
        "word": "тигр",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🐯",
        "form": "adjective"
    },
    {
        "word": "снежно",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "❄️",
        "form": "noun",
        "plural": "снежна"
    },
    {
        "word": "облачно",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "☁️",
        "form": "noun",
        "plural": "облачна"
    },
    {
        "word": "плечо",
        "level": "elementary",
        "theme": "health_body_A2",
        "form": "noun",
        "plural": "плеча"
    },
    {
        "word": "университет",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "🎓",
        "form": "noun",
        "plural": "университеты",
        "definitions": [
            {
                "text": "Высшее учебное заведение.",
                "examples": [
                    "Он учится в университете.",
                    "В университете большая библиотека."
                ]
            }
        ]
    },
    {
        "word": "местная кухня",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍜",
        "form": "noun",
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
        ]
    },
    {
        "word": "море",
        "level": "elementary",
        "theme": "places_streets_locations_A2",
        "gender": "оно",
        "baseWord": "море",
        "numberPlural": "много море",
        "answer": "много морей",
        "emoji": "🌊",
        "form": "noun",
        "plural": "морей"
    },
    {
        "word": "казаться",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "noun",
        "plural": "казатьси"
    },
    {
        "word": "становиться",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🦋",
        "form": "noun",
        "plural": "становитьси"
    },
    {
        "word": "двигать",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "📦",
        "form": "adjective"
    },
    {
        "word": "верить",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🙏",
        "form": "noun",
        "plural": "верить"
    },
    {
        "word": "случаться",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⚡",
        "form": "noun",
        "plural": "случатьси"
    },
    {
        "word": "включать",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "➕",
        "form": "adjective"
    },
    {
        "word": "продолжать",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "➡️",
        "form": "noun",
        "plural": "продолжать"
    },
    {
        "word": "устанавливать",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "⚙️",
        "form": "noun",
        "plural": "устанавливать"
    },
    {
        "word": "вести",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👑",
        "form": "noun",
        "plural": "вести"
    },
    {
        "word": "следовать",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "👣",
        "form": "noun",
        "plural": "следовать"
    },
    {
        "word": "создавать",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "emoji": "✨",
        "form": "noun",
        "plural": "создавать"
    },
    {
        "word": "позволять",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "✅",
        "form": "noun",
        "plural": "позволять"
    },
    {
        "word": "расти",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "🌱",
        "form": "noun",
        "plural": "расти"
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
