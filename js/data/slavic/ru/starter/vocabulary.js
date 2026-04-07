(function() {
    const data = [
    {
        "word": "врач",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "gender": "он",
        "numberPlural": "2 врач",
        "answer": "два врача",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "врачи",
        "subtext": "пойти к врачу, семейный врач",
        "definitions": [
            {
                "text": "Человек, который лечит больных людей.",
                "examples": [
                    "Врач работает в больнице.",
                    "Мне нужно пойти к врачу."
                ]
            }
        ]
    },
    {
        "word": "рука",
        "level": "starter",
        "theme": "body_parts_A1",
        "gender": "она",
        "emoji": "💪",
        "form": "noun",
        "plural": "руки",
        "subtext": "сломать руку, левая рука",
        "definitions": [
            {
                "text": "Часть тела от плеча до кисти.",
                "examples": [
                    "Она сломала руку."
                ]
            }
        ]
    },
    {
        "word": "нога",
        "level": "starter",
        "theme": "body_parts_A1",
        "gender": "она",
        "numberPlural": "2 нога",
        "answer": "две ноги",
        "emoji": "🦶",
        "form": "noun",
        "plural": "ноги",
        "definitions": [
            {
                "text": "Часть тела внизу, на которой мы ходим.",
                "examples": [
                    "У меня болит нога."
                ]
            }
        ]
    },
    {
        "word": "учитель",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "gender": "он",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "plural": "учителя",
        "subtext": "учитель русского языка, школьный учитель",
        "definitions": [
            {
                "text": "Человек, который помогает узнавать новое.",
                "examples": [
                    "Учитель сейчас в классе."
                ]
            }
        ]
    },
    {
        "word": "борщ",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "он",
        "form": "noun",
        "plural": "борщи",
        "definitions": [
            {
                "text": "Традиционный русский суп со свеклой."
            }
        ]
    },
    {
        "word": "салат оливье",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "он",
        "form": "noun",
        "plural": "салаты оливье"
    },
    {
        "word": "яблоко",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "оно",
        "emoji": "🍎",
        "numberPlural": "4 яблоко",
        "answer": "четыре яблока",
        "form": "noun",
        "plural": "яблоки"
    },
    {
        "word": "хлеб",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "он",
        "emoji": "🍞",
        "form": "noun",
        "plural": null,
        "subtext": "свежий хлеб, батон",
        "definitions": [
            {
                "text": "Продукт из муки и воды.",
                "examples": [
                    "Я ем хлеб на завтрак."
                ]
            }
        ]
    },
    {
        "word": "яйцо",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "оно",
        "emoji": "🥚",
        "form": "noun",
        "plural": "яйца",
        "subtext": "варёное яйцо, омлет",
        "definitions": [
            {
                "text": "Овальный продукт, который несет курица.",
                "examples": [
                    "Я ем два яйца каждое утро."
                ]
            }
        ]
    },
    {
        "word": "молоко",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "оно",
        "emoji": "🥛",
        "form": "noun",
        "plural": null,
        "subtext": "стакан молока, свежее молоко",
        "definitions": [
            {
                "text": "Белая жидкость от коровы.",
                "examples": [
                    "Она добавляет молоко в кофе."
                ]
            }
        ]
    },
    {
        "word": "пицца",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "она",
        "emoji": "🍕",
        "form": "noun",
        "plural": "пиццы"
    },
    {
        "word": "рис",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "он",
        "emoji": "🍚",
        "form": "noun",
        "plural": null,
        "subtext": "белый рис, плов"
    },
    {
        "word": "мясо",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "оно",
        "emoji": "🥩",
        "form": "noun",
        "plural": null,
        "subtext": "свежее мясо, говядина, курица"
    },
    {
        "word": "еда",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "она",
        "emoji": "🍲",
        "form": "noun",
        "plural": "еда",
        "definitions": [
            {
                "text": "То, что люди едят.",
                "examples": [
                    "Здесь вкусная еда."
                ]
            }
        ]
    },
    {
        "word": "фрукт",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "он",
        "emoji": "🍎",
        "form": "noun",
        "plural": "фрукты",
        "subtext": "свежий фрукт, фруктовый сок",
        "definitions": [
            {
                "text": "Сладкая часть растения с семенами.",
                "examples": [
                    "Фрукты — это полезно."
                ]
            }
        ]
    },
    {
        "word": "овощ",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "он",
        "emoji": "🥦",
        "form": "noun",
        "plural": "овощи",
        "subtext": "свежие овощи, зелёные овощи",
        "definitions": [
            {
                "text": "Растение, которое едят, например, морковь или помидор.",
                "examples": [
                    "Он ест овощи каждый день."
                ]
            }
        ]
    },
    {
        "word": "кофе",
        "level": "starter",
        "theme": "drinks_A1",
        "gender": "он",
        "emoji": "☕",
        "form": "noun",
        "plural": null,
        "subtext": "чёрный кофе, чашка кофе",
        "definitions": [
            {
                "text": "Горячий тёмный напиток из кофейных зерен.",
                "examples": [
                    "Я пью кофе каждое утро."
                ]
            }
        ]
    },
    {
        "word": "чай",
        "level": "starter",
        "theme": "drinks_A1",
        "gender": "он",
        "emoji": "🍵",
        "form": "noun",
        "plural": null,
        "subtext": "зелёный чай, чашка чая",
        "definitions": [
            {
                "text": "Горячий напиток из чайных листьев.",
                "examples": [
                    "Она пьёт чай после ужина."
                ]
            }
        ]
    },
    {
        "word": "сок",
        "level": "starter",
        "theme": "drinks_A1",
        "gender": "он",
        "emoji": "🧃",
        "form": "noun",
        "plural": null,
        "subtext": "апельсиновый сок, яблочный сок",
        "definitions": [
            {
                "text": "Жидкость из фруктов или овощей.",
                "examples": [
                    "Я хочу стакан сока."
                ]
            }
        ]
    },
    {
        "word": "вода",
        "level": "starter",
        "theme": "drinks_A1",
        "gender": "она",
        "emoji": "🚰",
        "form": "noun",
        "plural": null,
        "subtext": "холодная вода, стакан воды",
        "definitions": [
            {
                "text": "Прозрачная жидкость, которая нужна всем.",
                "examples": [
                    "Пожалуйста, пейте больше воды."
                ]
            }
        ]
    },
    {
        "word": "завтрак",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "gender": "он",
        "emoji": "🍳",
        "form": "noun",
        "plural": "завтраки",
        "definitions": [
            {
                "text": "Первый приём пищи за день.",
                "examples": [
                    "Завтрак в семь часов."
                ]
            }
        ]
    },
    {
        "word": "ужин",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "gender": "он",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "ужины",
        "definitions": [
            {
                "text": "Последний основной приём пищи за день.",
                "examples": [
                    "Ужин в восемь часов вечера."
                ]
            }
        ]
    },
    {
        "word": "обед",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "gender": "он",
        "emoji": "🍱",
        "form": "noun",
        "plural": "обеды",
        "definitions": [
            {
                "text": "Приём пищи в середине дня.",
                "examples": [
                    "Я обедаю в час дня."
                ]
            }
        ]
    },
    {
        "word": "парк",
        "level": "starter",
        "theme": "local_places_services_A1",
        "gender": "он",
        "emoji": "🌳",
        "form": "noun",
        "plural": "парки",
        "definitions": [
            {
                "text": "Общественный сад для прогулок.",
                "examples": [
                    "Давай погуляем в парке."
                ]
            }
        ]
    },
    {
        "word": "школа",
        "level": "starter",
        "theme": "local_places_services_A1",
        "gender": "она",
        "emoji": "🏫",
        "form": "noun",
        "plural": "школы",
        "definitions": [
            {
                "text": "Место, где дети учатся.",
                "examples": [
                    "Моя школа рядом с домом."
                ]
            }
        ]
    },
    {
        "word": "магазин",
        "level": "starter",
        "theme": "local_places_services_A1",
        "gender": "он",
        "emoji": "🛒",
        "form": "noun",
        "plural": "магазины",
        "definitions": [
            {
                "text": "Место, где можно купить товары.",
                "examples": [
                    "Магазин открыт."
                ]
            }
        ]
    },
    {
        "word": "футболка",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "gender": "она",
        "emoji": "👕",
        "form": "noun",
        "plural": "футболки",
        "definitions": [
            {
                "text": "Лёгкая одежда с короткими рукавами.",
                "examples": [
                    "На мне белая футболка."
                ]
            }
        ]
    },
    {
        "word": "брюки",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "gender": "они",
        "emoji": "👖",
        "form": "noun",
        "plural": "брюки",
        "definitions": [
            {
                "text": "Одежда для ног.",
                "examples": [
                    "Мне нужны новые брюки."
                ]
            }
        ]
    },
    {
        "word": "обувь",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "gender": "она",
        "emoji": "👟",
        "form": "noun",
        "plural": "обувь",
        "definitions": [
            {
                "text": "То, что мы носим на ногах.",
                "examples": [
                    "Надень обувь."
                ]
            }
        ]
    },
    {
        "word": "шапка",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "gender": "она",
        "emoji": "👒",
        "form": "noun",
        "plural": "шапки",
        "definitions": [
            {
                "text": "То, что мы носим на голове.",
                "examples": [
                    "На ней красивая шапка."
                ]
            }
        ]
    },
    {
        "word": "стул",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "gender": "он",
        "emoji": "🪑",
        "form": "noun",
        "plural": "стулья",
        "subtext": "деревянный стул, сесть на стул"
    },
    {
        "word": "стол",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "gender": "он",
        "emoji": "🪑",
        "form": "noun",
        "plural": "столы",
        "subtext": "кухонный стол, на столе"
    },
    {
        "word": "кровать",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "gender": "она",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "кровати",
        "subtext": "удобная кровать, лечь в кровать"
    },
    {
        "word": "ключ",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "gender": "он",
        "emoji": "🔑",
        "form": "noun",
        "plural": "ключи",
        "definitions": [
            {
                "text": "Металлический предмет для открывания дверей.",
                "examples": [
                    "Где мои ключи?"
                ]
            }
        ]
    },
    {
        "word": "телефон",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "gender": "он",
        "emoji": "📱",
        "form": "noun",
        "plural": "телефоны",
        "definitions": [
            {
                "text": "Устройство для разговоров на расстоянии.",
                "examples": [
                    "Я говорю по телефону."
                ]
            }
        ]
    },
    {
        "word": "книга",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "gender": "она",
        "emoji": "📖",
        "form": "noun",
        "plural": "книги",
        "definitions": [
            {
                "text": "Страницы с текстом, которые мы читаем.",
                "examples": [
                    "Я читаю книгу."
                ]
            }
        ]
    },
    {
        "word": "сумка",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "gender": "она",
        "emoji": "👜",
        "form": "noun",
        "plural": "сумки",
        "definitions": [
            {
                "text": "Предмет для переноски вещей.",
                "examples": [
                    "У меня в сумке есть деньги."
                ]
            }
        ]
    },
    {
        "word": "ручка",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "gender": "она",
        "emoji": "🖊️",
        "form": "noun",
        "plural": "ручки",
        "definitions": [
            {
                "text": "Предмет для письма чернилами.",
                "examples": [
                    "Можно взять твою ручку?"
                ]
            }
        ]
    },
    {
        "word": "кот",
        "level": "starter",
        "theme": "animals_A1",
        "gender": "он",
        "emoji": "🐈",
        "numberPlural": "2 кот",
        "answer": "два кота",
        "form": "noun",
        "plural": "коты"
    },
    {
        "word": "собака",
        "level": "starter",
        "theme": "animals_A1",
        "gender": "она",
        "emoji": "🐕",
        "numberPlural": "5 собака",
        "answer": "пять собак",
        "form": "noun",
        "plural": "собаки"
    },
    {
        "word": "птица",
        "level": "starter",
        "theme": "animals_A1",
        "gender": "она",
        "emoji": "🐦",
        "form": "noun",
        "plural": "птицы",
        "definitions": [
            {
                "text": "Животное с перьями и крыльями.",
                "examples": [
                    "Птица поёт."
                ]
            }
        ]
    },
    {
        "word": "рыба",
        "level": "starter",
        "theme": "animals_A1",
        "gender": "она",
        "emoji": "🐟",
        "form": "noun",
        "plural": "рыбы",
        "definitions": [
            {
                "text": "Животное, которое живет в воде.",
                "examples": [
                    "Рыба плавает."
                ]
            }
        ]
    },
    {
        "word": "голова",
        "level": "starter",
        "theme": "body_parts_A1",
        "gender": "она",
        "emoji": "👤",
        "form": "noun",
        "plural": "головы",
        "subtext": "головная боль, кивать головой",
        "definitions": [
            {
                "text": "Верхняя часть тела.",
                "examples": [
                    "У меня на голове шапка."
                ]
            }
        ]
    },
    {
        "word": "рука",
        "level": "starter",
        "theme": "body_parts_A1",
        "gender": "она",
        "emoji": "✋",
        "form": "noun",
        "plural": "руки",
        "subtext": "левая рука, правая рука, мыть руки",
        "definitions": [
            {
                "text": "Часть тела от плеча до кисти.",
                "examples": [
                    "Помой руки."
                ]
            }
        ]
    },
    {
        "word": "глаз",
        "level": "starter",
        "theme": "body_parts_A1",
        "gender": "он",
        "emoji": "👁️",
        "form": "noun",
        "plural": "глаза",
        "subtext": "голубые глаза, закрыть глаза",
        "definitions": [
            {
                "text": "Часть тела, которой мы видим.",
                "examples": [
                    "У неё голубые глаза."
                ]
            }
        ]
    },
    {
        "word": "нос",
        "level": "starter",
        "theme": "body_parts_A1",
        "gender": "он",
        "emoji": "👃",
        "form": "noun",
        "plural": "носы",
        "definitions": [
            {
                "text": "Часть лица, которой мы чувствуем запахи.",
                "examples": [
                    "У него маленький нос."
                ]
            }
        ]
    },
    {
        "word": "рот",
        "level": "starter",
        "theme": "body_parts_A1",
        "gender": "он",
        "emoji": "👄",
        "form": "noun",
        "plural": "рты",
        "subtext": "открыть рот, молчать",
        "definitions": [
            {
                "text": "Часть лица, которой мы едим и говорим.",
                "examples": [
                    "Открой рот."
                ]
            }
        ]
    },
    {
        "word": "ухо",
        "level": "starter",
        "theme": "body_parts_A1",
        "gender": "оно",
        "emoji": "👂",
        "form": "noun",
        "plural": "уши",
        "subtext": "левое ухо, правое ухо, боль в ухе",
        "definitions": [
            {
                "text": "Часть тела, которой мы слышим.",
                "examples": [
                    "У меня два уха."
                ]
            }
        ]
    },
    {
        "word": "спина",
        "level": "starter",
        "theme": "body_parts_A1",
        "gender": "она",
        "emoji": "🚶",
        "form": "noun",
        "plural": "спины",
        "subtext": "боль в спине, лежать на спине",
        "definitions": [
            {
                "text": "Задняя часть тела от шеи до поясницы.",
                "examples": [
                    "У меня болит спина."
                ]
            }
        ]
    },
    {
        "word": "мать",
        "level": "starter",
        "theme": "immediate_family_A1",
        "gender": "она",
        "emoji": "👩",
        "form": "noun",
        "plural": "матери"
    },
    {
        "word": "отец",
        "level": "starter",
        "theme": "immediate_family_A1",
        "gender": "он",
        "emoji": "👨",
        "form": "noun",
        "plural": "отцы"
    },
    {
        "word": "семья",
        "level": "starter",
        "theme": "immediate_family_A1",
        "gender": "она",
        "emoji": "👪",
        "form": "noun",
        "plural": "семьи"
    },
    {
        "word": "друг",
        "level": "starter",
        "theme": "immediate_family_A1",
        "gender": "он",
        "emoji": "👫",
        "form": "noun",
        "plural": "друзья"
    },
    {
        "word": "партнёр",
        "level": "starter",
        "theme": "marital_status_A1",
        "gender": "он",
        "emoji": "💑",
        "form": "noun",
        "plural": "партнёры"
    },
    {
        "word": "мужчина",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "gender": "он",
        "numberPlural": "2 мужчина",
        "answer": "два мужчины",
        "emoji": "👨",
        "form": "noun",
        "plural": "мужчины"
    },
    {
        "word": "женщина",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "gender": "она",
        "numberPlural": "2 женщина",
        "answer": "две женщины",
        "emoji": "👩",
        "form": "noun",
        "plural": "женщины"
    },
    {
        "word": "дом",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "gender": "он",
        "emoji": "🏡",
        "form": "noun",
        "plural": "дома",
        "subtext": "",
        "synonyms": [
            "дома",
            "идти домой"
        ]
    },
    {
        "word": "квартира",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "gender": "она",
        "emoji": "🏢",
        "form": "noun",
        "plural": "квартиры",
        "subtext": "flat, жить в квартире",
        "definitions": [
            {
                "text": "Набор комнат на одном этаже здания.",
                "examples": [
                    "Она живет в квартире."
                ]
            }
        ]
    },
    {
        "word": "офис",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A1",
        "gender": "он",
        "emoji": "🏢",
        "form": "noun",
        "plural": "офисы",
        "subtext": "место работы, большой офис",
        "definitions": [
            {
                "text": "Комната или здание, где работают люди.",
                "examples": [
                    "Он в офисе."
                ]
            }
        ]
    },
    {
        "word": "машина",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "gender": "она",
        "emoji": "🚗",
        "form": "noun",
        "plural": "машины",
        "subtext": "водить машину, быстрая машина",
        "definitions": [
            {
                "text": "Транспортное средство с четырьмя колесами и двигателем.",
                "examples": [
                    "Его машина красная."
                ]
            }
        ]
    },
    {
        "word": "автобус",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "gender": "он",
        "emoji": "🚌",
        "form": "noun",
        "plural": "автобусы",
        "subtext": "ехать на автобусе, автобусная остановка",
        "definitions": [
            {
                "text": "Большое транспортное средство для многих людей.",
                "examples": [
                    "Я езжу на работу на автобусе."
                ]
            }
        ]
    },
    {
        "word": "поезд",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "gender": "он",
        "emoji": "🚆",
        "form": "noun",
        "plural": "поезда",
        "subtext": "ехать на поезде, на поезде, вокзал",
        "definitions": [
            {
                "text": "Транспорт, который движется по рельсам.",
                "examples": [
                    "Поезд едет быстро."
                ]
            }
        ]
    },
    {
        "word": "деньги",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "gender": "они",
        "emoji": "💰",
        "form": "noun",
        "plural": null,
        "subtext": "тратить деньги, копить деньги"
    },
    {
        "word": "утро",
        "level": "starter",
        "theme": "times_day_A1",
        "gender": "оно",
        "emoji": "🌅",
        "form": "noun",
        "plural": "утра"
    },
    {
        "word": "вечер",
        "level": "starter",
        "theme": "times_day_A1",
        "gender": "он",
        "emoji": "🌆",
        "form": "noun",
        "plural": "вечера"
    },
    {
        "word": "день",
        "level": "starter",
        "theme": "times_day_A1",
        "gender": "он",
        "emoji": "☀️",
        "form": "noun",
        "plural": "дни"
    },
    {
        "word": "неделя",
        "level": "starter",
        "theme": "times_day_A1",
        "gender": "она",
        "emoji": "📅",
        "form": "noun",
        "plural": "недели"
    },
    {
        "word": "каждый день",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Ежедневно, без исключений.",
                "examples": [
                    "Я пью кофе каждый день."
                ]
            }
        ]
    },
    {
        "word": "босс",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "gender": "он",
        "emoji": "👨‍💼",
        "form": "noun",
        "plural": "боссы",
        "subtext": "",
        "synonyms": [
            "начальник"
        ],
        "definitions": [
            {
                "text": "Человек, который руководит на работе.",
                "examples": [
                    "Мой босс очень дружелюбный."
                ]
            }
        ]
    },
    {
        "word": "коллега",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "gender": "он",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "коллеги",
        "definitions": [
            {
                "text": "Человек, с которым вы работаете.",
                "examples": [
                    "Мои коллеги всегда помогают."
                ]
            }
        ]
    },
    {
        "word": "зарплата",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "gender": "она",
        "emoji": "💰",
        "form": "noun",
        "plural": "зарплаты",
        "subtext": "",
        "synonyms": [
            "заработная плата"
        ],
        "definitions": [
            {
                "text": "Деньги, которые человек получает за свою работу каждый месяц.",
                "examples": [
                    "У неё хорошая зарплата."
                ]
            }
        ]
    },
    {
        "word": "собрание",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "gender": "оно",
        "emoji": "🤝",
        "form": "noun",
        "plural": "собрания",
        "subtext": "",
        "synonyms": [
            "встреча",
            "совещание"
        ],
        "definitions": [
            {
                "text": "Время, когда люди собираются вместе, чтобы что-то обсудить.",
                "examples": [
                    "У нас собрание каждый понедельник."
                ]
            }
        ]
    },
    {
        "word": "поездка на работу",
        "level": "starter",
        "theme": "public_transport_A1",
        "gender": "она",
        "emoji": "🚆",
        "form": "noun",
        "definitions": [
            {
                "text": "Путь на работу и обратно каждый день.",
                "examples": [
                    "Моя поездка на работу занимает один час."
                ]
            }
        ]
    },
    {
        "word": "стресс",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "gender": "он",
        "emoji": "😫",
        "form": "noun",
        "definitions": [
            {
                "text": "Чувство беспокойства, вызванное трудной ситуацией.",
                "examples": [
                    "У меня много стресса на работе."
                ]
            }
        ]
    },
    {
        "word": "аренда",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "gender": "она",
        "emoji": "🏠",
        "form": "noun",
        "definitions": [
            {
                "text": "Деньги, выплачиваемые за пользование домом или квартирой, которые принадлежат кому-то другому.",
                "examples": [
                    "Аренда в этом городе дорогая."
                ]
            }
        ]
    },
    {
        "word": "сосед",
        "level": "starter",
        "theme": "address_location_A1",
        "gender": "он",
        "emoji": "🏠",
        "form": "noun",
        "plural": "соседи",
        "definitions": [
            {
                "text": "Человек, который живет рядом с вами.",
                "examples": [
                    "Мои соседи очень приятные люди."
                ]
            }
        ]
    },
    {
        "word": "комната",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "gender": "она",
        "emoji": "🚪",
        "form": "noun",
        "plural": "комнаты",
        "definitions": [
            {
                "text": "Отдельная часть здания со стенами и дверью.",
                "examples": [
                    "В квартире три комнаты."
                ]
            }
        ]
    },
    {
        "word": "кухня",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "gender": "она",
        "emoji": "🍳",
        "form": "noun",
        "plural": "кухни",
        "definitions": [
            {
                "text": "Комната в доме, где готовят еду.",
                "examples": [
                    "Я готовлю на кухне."
                ]
            }
        ]
    },
    {
        "word": "сон",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "gender": "он",
        "emoji": "😴",
        "form": "noun",
        "definitions": [
            {
                "text": "Естественный отдых, в котором ваше тело нуждается каждую ночь.",
                "examples": [
                    "Мне нужен восьмичасовой сон."
                ]
            }
        ]
    },
    {
        "word": "упражнение",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "gender": "оно",
        "emoji": "🏋️",
        "form": "noun",
        "plural": "упражнения",
        "definitions": [
            {
                "text": "Физическая активность, которая поддерживает вас в форме и здоровье.",
                "examples": [
                    "Я делаю упражнения три раза в неделю."
                ]
            }
        ]
    },
    {
        "word": "цена",
        "level": "starter",
        "theme": "money_payment_A1",
        "gender": "она",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "цены",
        "definitions": [
            {
                "text": "Количество денег, которое вы платите за что-то.",
                "examples": [
                    "Цена на еду высокая."
                ]
            }
        ]
    },
    {
        "word": "стоимость",
        "level": "starter",
        "theme": "money_payment_A1",
        "gender": "она",
        "emoji": "💰",
        "form": "noun",
        "definitions": [
            {
                "text": "Количество денег, необходимое для покупки чего-либо.",
                "examples": [
                    "Стоимость квартиры очень высокая."
                ]
            }
        ]
    },
    {
        "word": "отношения",
        "level": "starter",
        "theme": "family_life_A1",
        "gender": "они",
        "emoji": "❤️",
        "form": "noun",
        "subtext": "",
        "synonyms": [
            "связь"
        ],
        "definitions": [
            {
                "text": "Связь между двумя людьми.",
                "examples": [
                    "У них хорошие отношения."
                ]
            }
        ]
    },
    {
        "word": "вместе",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👫",
        "form": "adverb",
        "opposite": "один",
        "oppositeEmoji": "🧍",
        "definitions": [
            {
                "text": "С другим человеком или группой.",
                "examples": [
                    "Мы ужинаем вместе."
                ]
            }
        ]
    },
    {
        "word": "отпуск",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "gender": "он",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "отпуска",
        "subtext": "",
        "synonyms": [
            "каникулы"
        ],
        "definitions": [
            {
                "text": "Период времени вдали от работы, когда вы путешествуете или отдыхаете.",
                "examples": [
                    "У нас отпуск в июле."
                ]
            }
        ]
    },
    {
        "word": "путешествие",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "gender": "оно",
        "emoji": "✈️",
        "form": "noun",
        "plural": "путешествия",
        "definitions": [
            {
                "text": "Поездка из одного места в другое.",
                "examples": [
                    "Я люблю путешествия."
                ]
            }
        ]
    },
    {
        "word": "отель",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "gender": "он",
        "emoji": "🏨",
        "form": "noun",
        "plural": "отели",
        "subtext": "",
        "synonyms": [
            "гостиница"
        ],
        "definitions": [
            {
                "text": "Здание, где люди платят за ночлег.",
                "examples": [
                    "Отель находится рядом с вокзалом."
                ]
            }
        ]
    },
    {
        "word": "выходные",
        "level": "starter",
        "theme": "times_day_A1",
        "gender": "они",
        "emoji": "🗓️",
        "form": "noun",
        "subtext": "",
        "synonyms": [
            "уикенд"
        ],
        "definitions": [
            {
                "text": "Суббота и воскресенье.",
                "examples": [
                    "Я отдыхаю в выходные."
                ]
            }
        ]
    },
    {
        "word": "свободное время",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "gender": "оно",
        "emoji": "🎮",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "досуг",
            "отдых"
        ],
        "definitions": [
            {
                "text": "Время, когда вы не работаете и можете делать то, что хотите.",
                "examples": [
                    "Я читаю книги в свободное время."
                ]
            }
        ]
    },
    {
        "word": "пиво",
        "level": "starter",
        "theme": "drinks_A1",
        "gender": "оно",
        "emoji": "🍺",
        "form": "noun",
        "plural": null,
        "subtext": "холодное пиво, светлое пиво",
        "definitions": [
            {
                "text": "Популярный алкогольный напиток из зерна.",
                "examples": [
                    "Он пьёт пиво по выходным."
                ]
            }
        ]
    },
    {
        "word": "вино",
        "level": "starter",
        "theme": "drinks_A1",
        "gender": "оно",
        "emoji": "🍷",
        "form": "noun",
        "plural": null,
        "subtext": "красное вино, белое вино, бокал вина",
        "definitions": [
            {
                "text": "Алкогольный напиток из винограда.",
                "examples": [
                    "Она пьёт бокал вина вечером."
                ]
            }
        ]
    },
    {
        "word": "дверь",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "gender": "она",
        "emoji": "🚪",
        "form": "noun",
        "plural": "двери",
        "subtext": "открыть дверь, входная дверь",
        "definitions": [
            {
                "text": "Плоская панель, которая открывается и закрывается.",
                "examples": [
                    "Пожалуйста, закройте дверь."
                ]
            }
        ]
    },
    {
        "word": "окно",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "gender": "оно",
        "emoji": "🪟",
        "form": "noun",
        "plural": "окна",
        "subtext": "открыть окно, подоконник",
        "definitions": [
            {
                "text": "Проём в стене со стеклом для света и воздуха.",
                "examples": [
                    "Открой окно — жарко."
                ]
            }
        ]
    },
    {
        "word": "медсестра",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "gender": "она",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "медсёстры",
        "subtext": "медицинский брат, помощник врача",
        "definitions": [
            {
                "text": "Человек, обученный уходу за больными.",
                "examples": [
                    "Медсестра проверяет давление."
                ]
            }
        ]
    },
    {
        "word": "водитель",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "gender": "он",
        "emoji": "🚗",
        "form": "noun",
        "plural": "водители",
        "subtext": "шофёр, водитель автобуса",
        "definitions": [
            {
                "text": "Человек, который управляет транспортным средством.",
                "examples": [
                    "Водитель автобуса был вежлив."
                ]
            }
        ]
    },
    {
        "word": "повар",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "gender": "он",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "повара",
        "subtext": "шеф-повар, кулинар",
        "definitions": [
            {
                "text": "Профессиональный кулинар, часто главный на кухне.",
                "examples": [
                    "Повар готовит отличную еду."
                ]
            }
        ]
    },
    {
        "word": "менеджер",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "gender": "он",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "менеджеры",
        "subtext": "",
        "synonyms": [
            "руководитель",
            "директор"
        ],
        "definitions": [
            {
                "text": "Человек, который руководит командой или бизнесом.",
                "examples": [
                    "Мой менеджер работает допоздна."
                ]
            }
        ]
    },
    {
        "word": "самолёт",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "gender": "он",
        "emoji": "✈️",
        "form": "noun",
        "plural": "самолёты",
        "subtext": "лететь на самолёте, рейс",
        "definitions": [
            {
                "text": "Летательный аппарат с крыльями.",
                "examples": [
                    "Самолёт приземляется в девять часов."
                ]
            }
        ]
    },
    {
        "word": "велосипед",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "gender": "он",
        "emoji": "🚲",
        "form": "noun",
        "plural": "велосипеды",
        "subtext": "велик, кататься на велосипеде",
        "definitions": [
            {
                "text": "Двухколёсное транспортное средство с педалями.",
                "examples": [
                    "Он ездит на работу на велосипеде."
                ]
            }
        ]
    },
    {
        "word": "больница",
        "level": "starter",
        "theme": "local_places_services_A1",
        "gender": "она",
        "emoji": "🏥",
        "form": "noun",
        "plural": "больницы",
        "subtext": "госпиталь, лежать в больнице",
        "definitions": [
            {
                "text": "Место, где лечат больных людей.",
                "examples": [
                    "Его отвезли в больницу на скорой."
                ]
            }
        ]
    },
    {
        "word": "ресторан",
        "level": "starter",
        "theme": "local_places_services_A1",
        "gender": "он",
        "emoji": "🍴",
        "form": "noun",
        "plural": "рестораны",
        "subtext": "итальянский ресторан, идти в ресторан",
        "definitions": [
            {
                "text": "Место, где люди едят готовую еду за деньги.",
                "examples": [
                    "Мы ходим в ресторан по пятницам."
                ]
            }
        ]
    },
    {
        "word": "банк",
        "level": "starter",
        "theme": "local_places_services_A1",
        "gender": "он",
        "emoji": "🏦",
        "form": "noun",
        "plural": "банки",
        "subtext": "банковский счёт, пойти в банк",
        "definitions": [
            {
                "text": "Место, где хранят деньги и проводят финансовые операции.",
                "examples": [
                    "Банк находится рядом с моим офисом."
                ]
            }
        ]
    },
    {
        "word": "станция",
        "level": "starter",
        "theme": "local_places_services_A1",
        "gender": "она",
        "emoji": "🚉",
        "form": "noun",
        "plural": "станции",
        "subtext": "",
        "synonyms": [
            "вокзал",
            "автобусная остановка"
        ],
        "definitions": [
            {
                "text": "Здание, где останавливаются поезда или автобусы.",
                "examples": [
                    "Станция в десяти минутах отсюда."
                ]
            }
        ]
    },
    {
        "word": "супермаркет",
        "level": "starter",
        "theme": "local_places_services_A1",
        "gender": "он",
        "emoji": "🛒",
        "form": "noun",
        "plural": "супермаркеты",
        "subtext": "зайти в супермаркет",
        "definitions": [
            {
                "text": "Большой магазин с продуктами и товарами для дома.",
                "examples": [
                    "Я хожу в супермаркет по субботам."
                ]
            }
        ]
    },
    {
        "word": "солнце",
        "level": "starter",
        "theme": "weather_A1",
        "gender": "оно",
        "emoji": "☀️",
        "form": "noun",
        "plural": null,
        "subtext": "яркое солнце, утреннее солнце",
        "definitions": [
            {
                "text": "Звезда, которая даёт свет и тепло днём.",
                "examples": [
                    "Сегодня очень сильное солнце."
                ]
            }
        ]
    },
    {
        "word": "дождь",
        "level": "starter",
        "theme": "weather_A1",
        "gender": "он",
        "emoji": "🌧️",
        "form": "noun",
        "plural": null,
        "subtext": "сильный дождь, резиновые сапоги",
        "definitions": [
            {
                "text": "Вода, падающая из облаков каплями.",
                "examples": [
                    "Осенью часто идут дожди."
                ]
            }
        ]
    },
    {
        "word": "ветер",
        "level": "starter",
        "theme": "weather_A1",
        "gender": "он",
        "emoji": "💨",
        "form": "noun",
        "plural": null,
        "subtext": "сильный ветер, холодный ветер",
        "definitions": [
            {
                "text": "Движение воздуха.",
                "examples": [
                    "Сегодня очень сильный ветер."
                ]
            }
        ]
    },
    {
        "word": "днём",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "☀️",
        "form": "adverb",
        "definitions": [
            {
                "text": "В дневное время.",
                "examples": [
                    "Я заканчиваю работу в пять часов дня."
                ]
            }
        ]
    },
    {
        "word": "ночь",
        "level": "starter",
        "theme": "times_day_A1",
        "gender": "она",
        "emoji": "🌙",
        "form": "noun",
        "plural": "ночи",
        "subtext": "",
        "synonyms": [
            "спокойной ночи",
            "ночью"
        ],
        "definitions": [
            {
                "text": "Тёмное время суток между вечером и утром.",
                "examples": [
                    "Я сплю восемь часов каждую ночь."
                ]
            }
        ]
    },
    {
        "word": "сегодня",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "adverb",
        "subtext": "сегодняшняя встреча, начать сегодня",
        "definitions": [
            {
                "text": "В этот день.",
                "examples": [
                    "У меня сегодня встреча в десять."
                ]
            }
        ]
    },
    {
        "word": "завтра",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "⏭️",
        "form": "adverb",
        "subtext": "завтра утром, до завтра",
        "definitions": [
            {
                "text": "На следующий день после сегодня.",
                "examples": [
                    "У неё завтра визит к врачу."
                ]
            }
        ]
    },
    {
        "word": "муж",
        "level": "starter",
        "theme": "immediate_family_A1",
        "gender": "он",
        "emoji": "👨",
        "form": "noun",
        "plural": "мужья",
        "opposite": "жена",
        "oppositeEmoji": "👩",
        "subtext": "",
        "synonyms": [
            "супруг",
            "партнёр"
        ],
        "definitions": [
            {
                "text": "Мужчина, состоящий в браке.",
                "examples": [
                    "Её муж — врач."
                ]
            }
        ]
    },
    {
        "word": "жена",
        "level": "starter",
        "theme": "immediate_family_A1",
        "gender": "она",
        "emoji": "👩",
        "form": "noun",
        "plural": "жёны",
        "opposite": "муж",
        "oppositeEmoji": "👨",
        "subtext": "",
        "synonyms": [
            "супруга",
            "партнёрша"
        ],
        "definitions": [
            {
                "text": "Женщина, состоящая в браке.",
                "examples": [
                    "Его жена работает в финансах."
                ]
            }
        ]
    },
    {
        "word": "ребёнок",
        "level": "starter",
        "theme": "immediate_family_A1",
        "gender": "он",
        "emoji": "👶",
        "form": "noun",
        "plural": "дети",
        "subtext": "",
        "synonyms": [
            "малыш",
            "дитя"
        ],
        "definitions": [
            {
                "text": "Молодой человек; сын или дочь.",
                "examples": [
                    "У них двое детей."
                ]
            }
        ]
    },
    {
        "word": "родитель",
        "level": "starter",
        "theme": "immediate_family_A1",
        "gender": "он",
        "emoji": "👪",
        "form": "noun",
        "plural": "родители",
        "subtext": "",
        "synonyms": [
            "мать или отец"
        ],
        "definitions": [
            {
                "text": "Отец или мать.",
                "examples": [
                    "Мои родители живут на севере."
                ]
            }
        ]
    },
    {
        "word": "яблоко",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "neuter",
        "emoji": "🍎",
        "form": "noun",
        "plural": "яблоки",
        "transcription": "ˈjabləkə",
        "countability": "countable",
        "definitions": [
            {
                "text": "Круглый фрукт красного, зеленого или желтого цвета.",
                "examples": [
                    "Я ем яблоко каждый день."
                ]
            }
        ]
    },
    {
        "word": "хлеб",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "masculine",
        "emoji": "🍞",
        "form": "noun",
        "plural": "хлеба",
        "transcription": "xlʲep",
        "countability": "countable",
        "definitions": [
            {
                "text": "Продукт из муки и воды.",
                "examples": [
                    "Я покупаю хлеб в магазине."
                ]
            }
        ]
    },
    {
        "word": "собака",
        "level": "starter",
        "theme": "animals_A1",
        "gender": "feminine",
        "emoji": "🐕",
        "form": "noun",
        "plural": "собаки",
        "transcription": "sɐˈbakə",
        "countability": "countable",
        "definitions": [
            {
                "text": "Домашнее животное, которое лает.",
                "examples": [
                    "Моя собака очень преданная."
                ]
            }
        ]
    },
    {
        "word": "кошка",
        "level": "starter",
        "theme": "animals_A1",
        "gender": "feminine",
        "emoji": "🐈",
        "form": "noun",
        "plural": "кошки",
        "transcription": "ˈkoʂkə",
        "countability": "countable",
        "definitions": [
            {
                "text": "Домашнее животное, которое мяукает.",
                "examples": [
                    "Кошка спит на диване."
                ]
            }
        ]
    },
    {
        "word": "дом",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "gender": "masculine",
        "emoji": "🏠",
        "form": "noun",
        "plural": "дома",
        "transcription": "dom",
        "countability": "countable",
        "definitions": [
            {
                "text": "Здание, в котором живут люди.",
                "examples": [
                    "Дом очень большой."
                ]
            }
        ]
    },
    {
        "word": "школа",
        "level": "starter",
        "theme": "local_places_services_A1",
        "gender": "feminine",
        "emoji": "🏫",
        "form": "noun",
        "plural": "школы",
        "transcription": "ˈʂkolə",
        "countability": "countable",
        "definitions": [
            {
                "text": "Место, где дети учатся.",
                "examples": [
                    "Я иду в школу."
                ]
            }
        ]
    },
    {
        "word": "книга",
        "level": "starter",
        "theme": "learning_studying_A1",
        "gender": "feminine",
        "emoji": "📖",
        "form": "noun",
        "plural": "книги",
        "transcription": "ˈknʲiɡə",
        "countability": "countable",
        "definitions": [
            {
                "text": "То, что человек читает.",
                "examples": [
                    "Я читаю интересную книгу."
                ]
            }
        ]
    },
    {
        "word": "стол",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "gender": "masculine",
        "emoji": "🪑",
        "form": "noun",
        "plural": "столы",
        "transcription": "stol",
        "countability": "countable",
        "definitions": [
            {
                "text": "Предмет мебели для еды или работы.",
                "examples": [
                    "Еда на столе."
                ]
            }
        ]
    },
    {
        "word": "вода",
        "level": "starter",
        "theme": "drinks_A1",
        "gender": "feminine",
        "emoji": "💧",
        "form": "noun",
        "plural": "воды",
        "transcription": "vɐˈda",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Прозрачная жидкость, которую мы пьем.",
                "examples": [
                    "Я пью воду."
                ]
            }
        ]
    },
    {
        "word": "кофе",
        "level": "starter",
        "theme": "drinks_A1",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "plural": "кофе",
        "transcription": "ˈkofʲe",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Темный напиток.",
                "examples": [
                    "Я пью кофе утром."
                ]
            }
        ]
    }
];

    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();