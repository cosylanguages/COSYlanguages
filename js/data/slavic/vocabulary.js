(function() {
    const data = {
    "ru": [
        {
            "word": "врач",
            "level": "starter",
            "theme": "jobs_A0",
            "numberPlural": "2 врач",
            "answer": "два врача",
            "emoji": "🧑‍⚕️",
            "form": "noun",
            "plural": "врача",
            "definitions": [
                {
                    "text": "Человек, который лечит людей.",
                    "examples": [
                        "Врачи работают в больнице.",
                        "Он хороший врач."
                    ]
                },
                {
                    "text": "Этот человек обычно работает в больнице или поликлинике.",
                    "examples": [
                        "Врачи носят белые халаты."
                    ]
                }
            ]
        },
        {
            "word": "инженер",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "👷",
            "form": "noun",
            "plural": "инженеры",
            "definitions": [
                {
                    "text": "Человек, который проектирует или строит машины, двигатели или сооружения.",
                    "examples": [
                        "Инженер работает над новым мостом.",
                        "Он хочет стать инженером-строителем."
                    ]
                },
                {
                    "text": "Этот человек часто работает в офисе или на стройке.",
                    "examples": [
                        "Инженеры используют компьютеры для проектирования."
                    ]
                }
            ]
        },
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
            "word": "пилот",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "🧑‍✈️",
            "form": "noun",
            "plural": "пилоты",
            "definitions": [
                {
                    "text": "Человек, который управляет самолетом или вертолетом.",
                    "examples": [
                        "Пилот находится в кабине.",
                        "Он хочет стать пилотом."
                    ]
                },
                {
                    "text": "Этот человек работает в небе и в аэропорту.",
                    "examples": [
                        "Пилоты носят униформу."
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
            "word": "юрист",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "⚖️",
            "form": "noun",
            "plural": "юристы",
            "definitions": [
                {
                    "text": "Человек, который дает юридические советы и представляет людей в суде.",
                    "examples": [
                        "Мне нужно поговорить с моим юристом.",
                        "Юрист находится в суде."
                    ]
                },
                {
                    "text": "Этот человек часто работает в офисе или в суде.",
                    "examples": [
                        "Юристы читают много документов."
                    ]
                }
            ]
        },
        {
            "word": "учитель",
            "level": "starter",
            "theme": "jobs_A0",
            "emoji": "🧑‍🏫",
            "form": "noun",
            "plural": "учителя",
            "definitions": [
                {
                    "text": "Человек, который помогает учиться.",
                    "examples": [
                        "Учитель зашел в класс.",
                        "Наш учитель добрый."
                    ]
                },
                {
                    "text": "Этот человек обычно работает в школе или университете.",
                    "examples": [
                        "Учителя объясняют новые темы."
                    ]
                }
            ]
        },
        {
            "word": "борщ",
            "level": "starter",
            "theme": "food_drink_A0",
            "form": "noun",
            "plural": "борщи"
        },
        {
            "word": "пельмени",
            "level": "intermediate",
            "theme": "society_community_B1",
            "form": "noun",
            "plural": "пельмени"
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
            "word": "салат оливье",
            "level": "starter",
            "theme": "food_drink_A0",
            "form": "noun",
            "plural": "салат оливья"
        },
        {
            "word": "пирожки",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "form": "noun",
            "plural": "пирожки"
        },
        {
            "word": "шашлык",
            "level": "intermediate",
            "theme": "society_community_B1",
            "form": "noun",
            "plural": "шашлыки"
        },
        {
            "word": "яблоко",
            "level": "starter",
            "theme": "food_drink_A0",
            "numberPlural": "4 яблоко",
            "answer": "четыре яблока",
            "emoji": "🍎",
            "form": "noun",
            "plural": "яблока",
            "definitions": [
                {
                    "text": "Круглый фрукт, красный или зеленый.",
                    "examples": [
                        "Мальчик ест яблоко.",
                        "Яблоко очень вкусное."
                    ]
                }
            ]
        },
        {
            "word": "хлеб",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🍞",
            "form": "noun",
            "plural": "хлеб",
            "definitions": [
                {
                    "text": "Еда, приготовленная из муки и воды, затем испеченная.",
                    "examples": [
                        "Я люблю свежий хлеб.",
                        "Можешь купить хлеба?"
                    ]
                }
            ]
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
            "word": "яйцо",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🥚",
            "form": "noun",
            "plural": "яйца"
        },
        {
            "word": "молоко",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🥛",
            "form": "noun",
            "plural": "молоко"
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
            "word": "пицца",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🍕",
            "form": "noun",
            "plural": "пиццы",
            "definitions": [
                {
                    "text": "Лепешка с сыром и помидорами.",
                    "examples": [
                        "Я люблю сырную пиццу.",
                        "Давай закажем пиццу."
                    ]
                }
            ]
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
            "word": "кофе",
            "level": "starter",
            "theme": "food_drink_A0",
            "gender": "он",
            "baseWord": "кофе",
            "emoji": "☕",
            "form": "noun",
            "plural": "кофе"
        },
        {
            "word": "чай",
            "level": "starter",
            "theme": "food_drink_A0",
            "gender": "он",
            "baseWord": "чай",
            "emoji": "🍵",
            "form": "noun",
            "plural": "чай"
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
            "word": "сок",
            "level": "starter",
            "theme": "food_drink_A0",
            "gender": "он",
            "baseWord": "сок",
            "emoji": "🧃",
            "form": "noun",
            "plural": "сок"
        },
        {
            "word": "вода",
            "level": "starter",
            "theme": "food_drink_A0",
            "gender": "она",
            "baseWord": "вода",
            "emoji": "🚰",
            "form": "noun",
            "plural": "вода",
            "definitions": [
                {
                    "text": "Прозрачная жидкость, которую мы пьем, чтобы жить.",
                    "examples": [
                        "Я пью стакан воды.",
                        "Вода холодная."
                    ]
                }
            ]
        },
        {
            "word": "квас",
            "level": "intermediate",
            "theme": "society_community_B1",
            "form": "noun",
            "plural": "квасы",
            "definitions": [
                {
                    "text": "Традиционный русский напиток из хлеба.",
                    "examples": [
                        "Холодный квас хорош в жару.",
                        "Я люблю домашний квас."
                    ]
                },
                {
                    "text": "Этот напиток получается путем брожения.",
                    "examples": [
                        "Из кваса делают окрошку."
                    ]
                }
            ]
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
            "word": "парк",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🌳",
            "form": "noun",
            "plural": "парки",
            "definitions": [
                {
                    "text": "Место с деревьями и дорожками для прогулок.",
                    "examples": [
                        "Мы гуляем в парке.",
                        "В парке есть детская площадка."
                    ]
                }
            ]
        },
        {
            "word": "школа",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏫",
            "form": "noun",
            "plural": "школы",
            "definitions": [
                {
                    "text": "Место, куда дети ходят учиться.",
                    "examples": [
                        "Я еду в школу на автобусе.",
                        "Моя школа рядом с домом."
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
            "word": "библиотека",
            "level": "intermediate",
            "theme": "travel_cultural_B1",
            "emoji": "📚",
            "form": "noun",
            "plural": "библиотеки",
            "definitions": [
                {
                    "text": "Место, где много книг, которые можно читать или брать домой.",
                    "examples": [
                        "Я занимаюсь в университетской библиотеке.",
                        "Публичная библиотека очень большая."
                    ]
                },
                {
                    "text": "Это тихое место для учебы и исследований.",
                    "examples": [
                        "В библиотеке нужно соблюдать тишину."
                    ]
                }
            ]
        },
        {
            "word": "музей",
            "level": "intermediate",
            "theme": "travel_cultural_B1",
            "emoji": "🏛️",
            "form": "noun",
            "plural": "музеи",
            "definitions": [
                {
                    "text": "Здание, где можно посмотреть на важные предметы из прошлого.",
                    "examples": [
                        "Мы видели кости динозавров в музее.",
                        "В музее собрана коллекция старых картин."
                    ]
                },
                {
                    "text": "Это место, где можно узнать об истории, искусстве или науке.",
                    "examples": [
                        "Вход в музей бесплатный по воскресеньям."
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
            "word": "аптека",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "💊",
            "form": "noun",
            "plural": "аптеки",
            "definitions": [
                {
                    "text": "Магазин, в котором продаются лекарства.",
                    "examples": [
                        "Мне нужно купить аспирин в аптеке.",
                        "Где здесь ближайшая аптека?"
                    ]
                },
                {
                    "text": "В аптеке можно получить лекарства по рецепту.",
                    "examples": [
                        "Фармацевт работает в аптеке."
                    ]
                }
            ]
        },
        {
            "word": "аэропорт",
            "level": "intermediate",
            "theme": "travel_cultural_B1",
            "emoji": "✈️",
            "form": "noun",
            "plural": "аэропорты",
            "definitions": [
                {
                    "text": "Место, где самолеты взлетают и приземляются.",
                    "examples": [
                        "Мы едем в аэропорт.",
                        "Аэропорт находится за городом."
                    ]
                },
                {
                    "text": "Это место, откуда люди отправляются в полеты.",
                    "examples": [
                        "В аэропорту нужно пройти контроль."
                    ]
                }
            ]
        },
        {
            "word": "футболка",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👕",
            "form": "noun",
            "plural": "футболки"
        },
        {
            "word": "брюки",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👖",
            "form": "noun",
            "plural": "брюки"
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
            "word": "обувь",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👟",
            "form": "noun",
            "plural": "обувь"
        },
        {
            "word": "шапка",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👒",
            "form": "noun",
            "plural": "шапки"
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
            "word": "стул",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🪑",
            "form": "noun",
            "plural": "стулы"
        },
        {
            "word": "стол",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🪑",
            "form": "noun",
            "plural": "столы"
        },
        {
            "word": "кровать",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🛏️",
            "form": "noun",
            "plural": "кровать"
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
            "word": "шкаф",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "👗",
            "form": "noun",
            "plural": "шкафы"
        },
        {
            "word": "высокий",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "высокий",
            "definitions": [
                {
                    "text": "Человек или предмет большого роста или высоты.",
                    "examples": [
                        "Он очень высокий.",
                        "Это здание высокое."
                    ]
                }
            ]
        },
        {
            "word": "низкий",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "низкий",
            "definitions": [
                {
                    "text": "Человек или предмет небольшого роста или высоты.",
                    "examples": [
                        "Она низкого роста.",
                        "Карандаш короткий."
                    ]
                }
            ]
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
            "word": "худой",
            "level": "intermediate",
            "theme": "society_community_B1",
            "form": "noun",
            "plural": "худой"
        },
        {
            "word": "молодой",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "молодой"
        },
        {
            "word": "старый",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "старый"
        },
        {
            "word": "просыпаться",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "⏰",
            "form": "noun",
            "plural": "просыпатьси"
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
            "word": "спать",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "😴",
            "subtext": "спать 8 часов, идти спать",
            "form": "noun",
            "plural": "спать"
        },
        {
            "word": "ключ",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🔑",
            "form": "noun",
            "plural": "ключи",
            "definitions": [
                {
                    "text": "Металлический предмет для открывания двери или завода машины.",
                    "examples": [
                        "Я не могу найти свои ключи.",
                        "Вот ключ от вашей комнаты."
                    ]
                },
                {
                    "text": "Что-то очень важное (например, ключ к успеху).",
                    "examples": [
                        "Практика — это ключ к обучению.",
                        "В чем заключается ключевой фактор?"
                    ]
                }
            ]
        },
        {
            "word": "телефон",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📱",
            "form": "noun",
            "plural": "телефоны"
        },
        {
            "word": "книга",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📖",
            "form": "noun",
            "plural": "книги",
            "definitions": [
                {
                    "text": "Произведение печати в виде переплетенных листов с текстом.",
                    "examples": [
                        "Я купил новую книгу.",
                        "Книга лежит на полке."
                    ]
                }
            ]
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
            "word": "зонт",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "☂️",
            "form": "adjective"
        },
        {
            "word": "кот",
            "level": "starter",
            "theme": "weather_A0",
            "gender": "он",
            "baseWord": "кот",
            "emoji": "🐈",
            "numberPlural": "2 кот",
            "answer": "два кота",
            "form": "adjective",
            "plural": "кота",
            "definitions": [
                {
                    "text": "Маленькое пушистое животное, которое многие держат дома.",
                    "examples": [
                        "Мой кот спит.",
                        "Я люблю кошек."
                    ]
                }
            ]
        },
        {
            "word": "собака",
            "level": "starter",
            "theme": "weather_A0",
            "gender": "она",
            "baseWord": "собака",
            "emoji": "🐕",
            "numberPlural": "5 собака",
            "answer": "пять собак",
            "form": "adjective",
            "plural": "собак",
            "definitions": [
                {
                    "text": "Животное, которое часто называют 'лучшим другом человека'.",
                    "examples": [
                        "Я гуляю с собакой в парке.",
                        "Собака лает."
                    ]
                }
            ]
        },
        {
            "word": "птица",
            "level": "starter",
            "theme": "weather_A0",
            "emoji": "🐦",
            "form": "noun",
            "plural": "птицы",
            "definitions": [
                {
                    "text": "Животное с перьями и крыльями, которое обычно умеет летать.",
                    "examples": [
                        "Птица поет.",
                        "Посмотри на эту красивую птицу!"
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
            "word": "слон",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🐘",
            "form": "adjective"
        },
        {
            "word": "солнечно",
            "level": "starter",
            "theme": "weather_A0",
            "emoji": "☀️",
            "form": "noun",
            "plural": "солнечна"
        },
        {
            "word": "дождливо",
            "level": "starter",
            "theme": "weather_A0",
            "emoji": "🌧️",
            "form": "noun",
            "plural": "дождлива"
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
            "word": "жарко",
            "level": "intermediate",
            "theme": "environment_sustainability_B1",
            "emoji": "🔥",
            "form": "noun",
            "plural": "жарка"
        },
        {
            "word": "холодно",
            "level": "starter",
            "theme": "weather_A0",
            "emoji": "❄️",
            "form": "noun",
            "plural": "холодна"
        },
        {
            "word": "голова",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👤",
            "form": "noun",
            "plural": "головы",
            "definitions": [
                {
                    "text": "Верхняя часть тела человека, в которой находится мозг.",
                    "examples": [
                        "На голове у него шляпа.",
                        "Он кивнул головой."
                    ]
                },
                {
                    "text": "Руководитель группы или организации.",
                    "examples": [
                        "Он — голова всему делу.",
                        "Кто здесь глава?"
                    ]
                }
            ]
        },
        {
            "word": "рука",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "✋",
            "form": "noun",
            "plural": "руки",
            "definitions": [
                {
                    "text": "Часть тела от плеча до кончиков пальцев.",
                    "examples": [
                        "Помой руки перед едой.",
                        "Дай мне руку."
                    ]
                },
                {
                    "text": "Помощь или поддержка.",
                    "examples": [
                        "Тебе нужна рука помощи?",
                        "Протянуть руку помощи."
                    ]
                }
            ]
        },
        {
            "word": "нога",
            "level": "starter",
            "theme": "body_A0",
            "form": "noun",
            "plural": "ноги"
        },
        {
            "word": "глаз",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👁️",
            "form": "noun",
            "plural": "глаза",
            "definitions": [
                {
                    "text": "Орган зрения.",
                    "examples": [
                        "Закрой глаза.",
                        "У нее голубые глаза."
                    ]
                }
            ]
        },
        {
            "word": "нос",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👃",
            "form": "noun",
            "plural": "носы"
        },
        {
            "word": "рот",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👄",
            "form": "noun",
            "plural": "роты"
        },
        {
            "word": "ухо",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👂",
            "form": "noun",
            "plural": "уха"
        },
        {
            "word": "плечо",
            "level": "elementary",
            "theme": "health_body_A2",
            "form": "noun",
            "plural": "плеча"
        },
        {
            "word": "стопа",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "🦶",
            "form": "noun",
            "plural": "стопы"
        },
        {
            "word": "разработчик по",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "💻",
            "form": "noun",
            "plural": "разработчик па"
        },
        {
            "word": "психолог",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "🧠",
            "form": "noun",
            "plural": "психологи"
        },
        {
            "word": "философ",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧐",
            "form": "noun",
            "plural": "философы"
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
            "word": "психическое здоровье",
            "level": "intermediate",
            "theme": "mental_health_B1",
            "emoji": "🧠",
            "form": "noun",
            "definitions": [
                {
                    "text": "Η κατάσταση της συναισθηματικής και ψυχολογικής ευεξίας.",
                    "examples": [
                        "Η ψυχική υγεία είναι εξίσου σημαντική με τη σωματική.",
                        "Πρέπει να φροντίζουμε την ψυχική μας υγεία."
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
            "word": "мать",
            "level": "starter",
            "theme": "immediate_family_A0",
            "emoji": "👩",
            "form": "noun",
            "definitions": [
                {
                    "text": "Женщина-родитель.",
                    "examples": [
                        "Моя мать очень добрая.",
                        "Мать любит детей."
                    ]
                },
                {
                    "text": "Этот человек обычно является женой вашего отца (или другого родителя).",
                    "examples": [
                        "Матери заботятся о своих детях."
                    ]
                }
            ]
        },
        {
            "word": "отец",
            "level": "starter",
            "theme": "immediate_family_A0",
            "emoji": "👨",
            "form": "noun",
            "definitions": [
                {
                    "text": "Мужчина-родитель.",
                    "examples": [
                        "Мой отец сейчас на работе.",
                        "Отец читает книгу."
                    ]
                },
                {
                    "text": "Этот человек обычно является мужем вашей матери (или другого родителя).",
                    "examples": [
                        "Мой отец много работает."
                    ]
                }
            ]
        },
        {
            "word": "кофе",
            "theme": "food_drink_A0",
            "level": "starter",
            "gender": "он",
            "baseWord": "кофе",
            "emoji": "☕",
            "form": "noun",
            "plural": "кофе"
        },
        {
            "word": "вода",
            "theme": "food_drink_A0",
            "level": "starter",
            "gender": "она",
            "baseWord": "вода",
            "emoji": "🚰",
            "form": "noun",
            "plural": "вода",
            "definitions": [
                {
                    "text": "Прозрачная жидкость, которую мы пьем, чтобы жить.",
                    "examples": [
                        "Я пью стакан воды.",
                        "Вода холодная."
                    ]
                }
            ]
        },
        {
            "word": "окно",
            "theme": "home_A0",
            "level": "starter",
            "gender": "оно",
            "baseWord": "окно",
            "emoji": "🪟",
            "form": "noun",
            "plural": "окна"
        },
        {
            "word": "книга",
            "theme": "home_A0",
            "level": "starter",
            "gender": "она",
            "baseWord": "книга",
            "numberPlural": "2 книга",
            "answer": "две книги",
            "emoji": "📖",
            "form": "noun",
            "plural": "две книги",
            "definitions": [
                {
                    "text": "Много страниц со словами и картинками, которые вы читаете.",
                    "examples": [
                        "Я читаю книгу каждый вечер.",
                        "Эта книга интересная."
                    ]
                }
            ]
        },
        {
            "word": "стол",
            "level": "starter",
            "theme": "home_A0",
            "gender": "он",
            "baseWord": "стол",
            "numberPlural": "3 стол",
            "answer": "три стола",
            "emoji": "🪑",
            "form": "noun",
            "plural": "стола"
        },
        {
            "word": "машина",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "gender": "она",
            "baseWord": "машина",
            "numberPlural": "4 машина",
            "answer": "четыре машины",
            "emoji": "🚗",
            "form": "noun",
            "plural": "машины"
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
            "word": "быть",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "👤",
            "subtext": "мне холодно, мне 20 лет",
            "form": "noun",
            "plural": "быть"
        },
        {
            "word": "иметь",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👜",
            "subtext": "завтракать, иметь машину",
            "form": "noun",
            "plural": "иметь"
        },
        {
            "word": "идти",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🚶",
            "subtext": "идти в школу, идти домой",
            "form": "noun",
            "plural": "идти"
        },
        {
            "word": "делать",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🛠️",
            "subtext": "делать уроки, заниматься спортом",
            "form": "noun",
            "plural": "делать"
        },
        {
            "word": "работать",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "💼",
            "subtext": "работать в офисе, много работать",
            "form": "noun",
            "plural": "работать"
        },
        {
            "word": "говорить",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🗣️",
            "subtext": "говорить по-английски, говорить медленно",
            "form": "noun",
            "plural": "говорить"
        },
        {
            "word": "знать",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🧠",
            "subtext": "знать ответ, знать человека",
            "form": "noun",
            "plural": "знать"
        },
        {
            "word": "думать",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "💭",
            "subtext": "думать о, думать что",
            "form": "noun",
            "plural": "думать"
        },
        {
            "word": "хотеть",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🙏",
            "subtext": "хотеть воды, хотеть пойти",
            "form": "noun",
            "plural": "хотеть"
        },
        {
            "word": "нравиться",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "👍",
            "subtext": "мне нравится шоколад, мне нравится танцевать",
            "form": "noun",
            "plural": "нравитьси"
        },
        {
            "word": "любить",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "❤️",
            "subtext": "любить мою семью, любить путешествовать",
            "form": "noun",
            "plural": "любить"
        },
        {
            "word": "брать",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👜",
            "subtext": "сесть в автобус, сфотографировать",
            "opposite": "давать",
            "oppositeEmoji": "🎁",
            "form": "noun",
            "plural": "брать"
        },
        {
            "word": "находить",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🔍",
            "form": "noun",
            "plural": "находить"
        },
        {
            "word": "рассказывать",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🗣️",
            "form": "noun",
            "plural": "рассказывать"
        },
        {
            "word": "спрашивать",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "❓",
            "form": "noun",
            "plural": "спрашивать"
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
            "word": "чувствовать",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "🌡️",
            "form": "noun",
            "plural": "чувствовать"
        },
        {
            "word": "пробовать",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🎯",
            "form": "noun",
            "plural": "пробовать"
        },
        {
            "word": "уходить",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🚪",
            "form": "noun",
            "plural": "уходить"
        },
        {
            "word": "звонить",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📞",
            "form": "noun",
            "plural": "звонить"
        },
        {
            "word": "смотреть",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "📺",
            "form": "noun",
            "plural": "смотреть"
        },
        {
            "word": "использовать",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🛠️",
            "form": "noun",
            "plural": "использовать"
        },
        {
            "word": "получать",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📩",
            "form": "noun",
            "plural": "получать"
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
            "word": "начинать",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "▶️",
            "opposite": "заканчивать",
            "oppositeEmoji": "🏁",
            "form": "noun",
            "plural": "начинать"
        },
        {
            "word": "помогать",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🤝",
            "form": "noun",
            "plural": "помогать"
        },
        {
            "word": "играть",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🎮",
            "form": "noun",
            "plural": "играть"
        },
        {
            "word": "бегать",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏃",
            "form": "noun",
            "plural": "бегать"
        },
        {
            "word": "двигать",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "📦",
            "form": "adjective"
        },
        {
            "word": "жить",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🏠",
            "opposite": "умирать",
            "oppositeEmoji": "⚰️",
            "form": "noun",
            "plural": "жить"
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
            "word": "приносить",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🎁",
            "form": "noun",
            "plural": "приносить"
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
            "word": "сидеть",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🪑",
            "opposite": "стоять",
            "oppositeEmoji": "🧍",
            "form": "noun",
            "plural": "сидеть"
        },
        {
            "word": "стоять",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🧍",
            "opposite": "сидеть",
            "oppositeEmoji": "🪑",
            "form": "noun",
            "plural": "стоять"
        },
        {
            "word": "терять",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📉",
            "opposite": "выигрывать",
            "oppositeEmoji": "🏆",
            "form": "noun",
            "plural": "терять"
        },
        {
            "word": "платить",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "💰",
            "form": "noun",
            "plural": "платить"
        },
        {
            "word": "встречать",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🤝",
            "form": "noun",
            "plural": "встречать"
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
            "word": "учить",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "📚",
            "form": "noun",
            "plural": "учить"
        },
        {
            "word": "менять",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🔄",
            "form": "noun",
            "plural": "менять"
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
            "word": "понимать",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "💡",
            "form": "noun",
            "plural": "понимать"
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
            "word": "останавливаться",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🛑",
            "form": "noun",
            "plural": "останавливатьси"
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
            "word": "добавлять",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "➕",
            "form": "noun",
            "plural": "добавлять"
        },
        {
            "word": "тратить",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "💸",
            "form": "noun",
            "plural": "тратить"
        },
        {
            "word": "расти",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "🌱",
            "form": "noun",
            "plural": "расти"
        }
    ]
};
    window.vocabularyData = { ...window.vocabularyData, ...data };
})();
