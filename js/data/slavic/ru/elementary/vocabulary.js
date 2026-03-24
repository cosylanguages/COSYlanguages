(function() {
    const data = [
    {
        "word": "художник",
        "level": "elementary",
        "theme": "art_design_A2",
        "gender": "он",
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
        "theme": "restaurants_ordering_A2",
        "gender": "он",
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
        "gender": "они",
        "emoji": "🥞",
        "form": "noun",
        "plural": "блины"
    },
    {
        "word": "пирожки",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "gender": "они",
        "form": "noun",
        "plural": "пирожки"
    },
    {
        "word": "сыр",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "gender": "он",
        "emoji": "🧀",
        "form": "noun",
        "plural": "сыры"
    },
    {
        "word": "рис",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "gender": "он",
        "emoji": "🍚",
        "form": "noun",
        "plural": "рис"
    },
    {
        "word": "помидор",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "gender": "он",
        "emoji": "🍅",
        "form": "noun",
        "plural": "помидоры"
    },
    {
        "word": "картофель",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "gender": "он",
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
        "theme": "medical_appointments_A1",
        "gender": "она",
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
        "theme": "theatre_performance_A2",
        "gender": "он",
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
        "theme": "restaurants_ordering_A2",
        "gender": "он",
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
        "theme": "shopping_for_food_A2",
        "gender": "он",
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
        "theme": "shopping_for_clothes_A2",
        "gender": "оно",
        "emoji": "👗",
        "form": "noun",
        "plural": "платья"
    },
    {
        "word": "куртка",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "gender": "она",
        "emoji": "🧥",
        "form": "noun",
        "plural": "куртки"
    },
    {
        "word": "юбка",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "gender": "она",
        "emoji": "👗",
        "form": "noun",
        "plural": "юбки"
    },
    {
        "word": "диван",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "gender": "он",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "диваны"
    },
    {
        "word": "лампа",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "gender": "она",
        "emoji": "💡",
        "form": "noun",
        "plural": "лампы"
    },
    {
        "word": "письменный стол",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "gender": "он",
        "emoji": "⌨️",
        "form": "noun",
        "plural": "письменные столы"
    },
    {
        "word": "чистить зубы",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🪥",
        "form": "noun"
    },
    {
        "word": "принимать душ",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🚿",
        "form": "noun"
    },
    {
        "word": "часы",
        "level": "elementary",
        "theme": "accessories_A1",
        "form": "noun",
        "plural": "часы"
    },
    {
        "word": "кошелек",
        "level": "elementary",
        "theme": "accessories_A1",
        "gender": "он",
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
        "theme": "accessories_A1",
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
        "theme": "animals_nature_A2",
        "gender": "он",
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
        "theme": "animals_nature_A2",
        "gender": "он",
        "emoji": "🐯",
        "form": "noun",
        "plural": "тигры"
    },
    {
        "word": "плечо",
        "level": "elementary",
        "theme": "body_parts_A0",
        "gender": "оно",
        "form": "noun",
        "plural": "плечи"
    },
    {
        "word": "университет",
        "level": "elementary",
        "theme": "career_development_A2",
        "gender": "он",
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
        "gender": "она",
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
        "theme": "landscape_geography_A2",
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
        "theme": "personal_qualities_A2",
        "emoji": "🤔",
        "form": "verb"
    },
    {
        "word": "становиться",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🦋",
        "form": "verb"
    },
    {
        "word": "двигать",
        "level": "elementary",
        "theme": "moving_home_A2",
        "emoji": "📦",
        "form": "verb"
    },
    {
        "word": "верить",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🙏",
        "form": "verb"
    },
    {
        "word": "случаться",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb"
    },
    {
        "word": "включать",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➕",
        "form": "verb"
    },
    {
        "word": "продолжать",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➡️",
        "form": "verb"
    },
    {
        "word": "устанавливать",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "⚙️",
        "form": "verb"
    },
    {
        "word": "вести",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👑",
        "form": "verb"
    },
    {
        "word": "следовать",
        "level": "elementary",
        "theme": "directions_navigation_A1",
        "emoji": "👣",
        "form": "verb"
    },
    {
        "word": "создавать",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "✨",
        "form": "verb"
    },
    {
        "word": "позволять",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "✅",
        "form": "verb"
    },
    {
        "word": "расти",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌱",
        "form": "verb"
    },
    {
        "word": "переработка",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏰",
        "gender": "она",
        "form": "noun",
        "definitions": [
            {
                "text": "Дополнительные часы работы сверх нормы рабочего дня.",
                "examples": [
                    "Она работает сверхурочно, чтобы закончить проект."
                ]
            }
        ]
    },
    {
        "word": "повышение",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "gender": "оно",
        "form": "noun",
        "plural": "повышения",
        "definitions": [
            {
                "text": "Переход на более высокую и лучше оплачиваемую должность в той же компании.",
                "examples": [
                    "В прошлом месяце он получил повышение."
                ]
            }
        ]
    },
    {
        "word": "собеседование",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "gender": "оно",
        "form": "noun",
        "plural": "собеседования",
        "definitions": [
            {
                "text": "Формальная встреча, на которой человеку задают вопросы при приеме на работу.",
                "examples": [
                    "У меня собеседование в понедельник."
                ]
            }
        ]
    },
    {
        "word": "контракт",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📄",
        "gender": "он",
        "form": "noun",
        "plural": "контракты",
        "definitions": [
            {
                "text": "Письменное соглашение между работодателем и работником.",
                "examples": [
                    "Она подписала двухлетний контракт."
                ]
            }
        ]
    },
    {
        "word": "дедлайн",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏳",
        "gender": "он",
        "form": "noun",
        "plural": "дедлайны",
        "definitions": [
            {
                "text": "Крайний срок, к которому работа должна быть закончена.",
                "examples": [
                    "Крайний срок — в пятницу."
                ]
            }
        ]
    },
    {
        "word": "опыт",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧠",
        "gender": "он",
        "form": "noun",
        "definitions": [
            {
                "text": "Знания или навыки, полученные в процессе какой-либо деятельности.",
                "examples": [
                    "У него пять лет опыта."
                ]
            }
        ]
    },
    {
        "word": "ипотека",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏠",
        "gender": "она",
        "form": "noun",
        "plural": "ипотеки",
        "definitions": [
            {
                "text": "Кредит в банке на покупку дома или квартиры.",
                "examples": [
                    "У них большая ипотека."
                ]
            }
        ]
    },
    {
        "word": "кредит",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "💰",
        "gender": "он",
        "form": "noun",
        "plural": "кредиты",
        "definitions": [
            {
                "text": "Деньги, взятые в долг у банка, которые должны быть возвращены.",
                "examples": [
                    "Она взяла кредит, чтобы купить машину."
                ]
            }
        ]
    },
    {
        "word": "счёт",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🧾",
        "gender": "он",
        "form": "noun",
        "plural": "счета",
        "definitions": [
            {
                "text": "Документ, в котором указано, сколько денег вы должны заплатить.",
                "examples": [
                    "Я оплачиваю счет за электричество каждый месяц."
                ]
            }
        ]
    },
    {
        "word": "долг",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "gender": "он",
        "form": "noun",
        "plural": "долги",
        "definitions": [
            {
                "text": "Деньги, которые вы должны другому человеку или банку.",
                "examples": [
                    "У него много долгов."
                ]
            }
        ]
    },
    {
        "word": "банковский счёт",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏦",
        "gender": "он",
        "form": "noun",
        "plural": "банковские счета",
        "definitions": [
            {
                "text": "Соглашение с банком о хранении ваших денег.",
                "examples": [
                    "У меня есть сберегательный счет."
                ]
            }
        ]
    },
    {
        "word": "бюджет",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📊",
        "gender": "он",
        "form": "noun",
        "plural": "бюджеты",
        "definitions": [
            {
                "text": "План того, как тратить деньги.",
                "examples": [
                    "Нам нужен ежемесячный бюджет."
                ]
            }
        ]
    },
    {
        "word": "диета",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥗",
        "gender": "она",
        "form": "noun",
        "plural": "диеты",
        "definitions": [
            {
                "text": "Пища, которую человек обычно ест; или специальный план питания.",
                "examples": [
                    "Она на здоровой диете."
                ]
            }
        ]
    },
    {
        "word": "приём",
        "level": "elementary",
        "theme": "medical_appointments_A1",
        "emoji": "📅",
        "gender": "он",
        "form": "noun",
        "plural": "приёмы",
        "definitions": [
            {
                "text": "Время, когда вы договариваетесь о встрече с кем-то, например, с врачом.",
                "examples": [
                    "У меня прием у врача во вторник."
                ]
            }
        ]
    },
    {
        "word": "лишний вес",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "gender": "он",
        "form": "noun",
        "definitions": [
            {
                "text": "Вес больше того, который считается здоровым.",
                "examples": [
                    "Врач сказал, что у него небольшой лишний вес."
                ]
            }
        ]
    },
    {
        "word": "витамин",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "💊",
        "gender": "он",
        "form": "noun",
        "plural": "витамины",
        "definitions": [
            {
                "text": "Природное вещество в пище, которое необходимо вашему организму для здоровья.",
                "examples": [
                    "Апельсины содержат витамин С."
                ]
            }
        ]
    },
    {
        "word": "боль",
        "level": "elementary",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "gender": "она",
        "form": "noun",
        "plural": "боли",
        "definitions": [
            {
                "text": "Неприятное ощущение в теле, когда что-то не так.",
                "examples": [
                    "У нее боль в спине."
                ]
            }
        ]
    },
    {
        "word": "поддержка",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "gender": "она",
        "form": "noun",
        "definitions": [
            {
                "text": "Помощь или поощрение, оказываемые кому-либо.",
                "examples": [
                    "Мне нужна твоя поддержка."
                ]
            }
        ]
    },
    {
        "word": "доверие",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "gender": "оно",
        "form": "noun",
        "definitions": [
            {
                "text": "Убежденность в том, что кто-то честен и надежен.",
                "examples": [
                    "Доверие важно в отношениях."
                ]
            }
        ]
    },
    {
        "word": "компромисс",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "gender": "он",
        "form": "noun",
        "plural": "компромиссы",
        "definitions": [
            {
                "text": "Соглашение, при котором обе стороны принимают меньше, чем хотели.",
                "examples": [
                    "Хорошие отношения требуют компромисса."
                ]
            }
        ]
    },
    {
        "word": "путешествие",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "🛤️",
        "gender": "оно",
        "form": "noun",
        "plural": "путешествия",
        "definitions": [
            {
                "text": "Поездка из одного места в другое.",
                "examples": [
                    "Поездка на работу занимает 40 минут."
                ]
            }
        ]
    },
    {
        "word": "за границу",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "✈️",
        "form": "adverb",
        "definitions": [
            {
                "text": "В другую страну.",
                "examples": [
                    "Они ездят за границу каждое лето."
                ]
            }
        ]
    },
    {
        "word": "пункт назначения",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "📍",
        "gender": "он",
        "form": "noun",
        "plural": "пункты назначения",
        "definitions": [
            {
                "text": "Место, куда вы направляетесь.",
                "examples": [
                    "Париж — популярное направление."
                ]
            }
        ]
    },
    {
        "word": "рейс",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "✈️",
        "gender": "он",
        "form": "noun",
        "plural": "рейсы",
        "definitions": [
            {
                "text": "Путешествие, совершенное на самолете.",
                "examples": [
                    "Полет в Лондон занимает два часа."
                ]
            }
        ]
    },
    {
        "word": "багаж",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "🧳",
        "gender": "он",
        "form": "noun",
        "definitions": [
            {
                "text": "Сумки и чемоданы, которые вы берете с собой в поездку.",
                "examples": [
                    "У нее много багажа."
                ]
            }
        ]
    },
    {
        "word": "район",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏘️",
        "gender": "он",
        "form": "noun",
        "plural": "районы",
        "definitions": [
            {
                "text": "Местность вокруг вашего дома.",
                "examples": [
                    "Мы живем в безопасном районе."
                ]
            }
        ]
    },
    {
        "word": "сообщество",
        "level": "elementary",
        "theme": "community_neighbourhood_local_A2",
        "emoji": "👥",
        "gender": "оно",
        "form": "noun",
        "plural": "сообщества",
        "definitions": [
            {
                "text": "Группа людей, живущих в одной местности или имеющих общие интересы.",
                "examples": [
                    "Она активно участвует в жизни местного сообщества."
                ]
            }
        ]
    },
    {
        "word": "загрязнение",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🏭",
        "gender": "оно",
        "form": "noun",
        "definitions": [
            {
                "text": "Ущерб окружающей среде, вызванный вредными веществами.",
                "examples": [
                    "Загрязнение воздуха — большая проблема здесь."
                ]
            }
        ]
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
