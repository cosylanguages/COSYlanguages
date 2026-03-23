(function() {
    const data = [
    {
        "word": "врач",
        "level": "starter",
        "theme": "job_titles_professions_A0",
        "gender": "он",
        "numberPlural": "2 врач",
        "answer": "два врача",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "врачи",
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
        "word": "нога",
        "level": "starter",
        "theme": "body_parts_A0",
        "gender": "она",
        "numberPlural": "2 нога",
        "answer": "две ноги",
        "emoji": "🦶",
        "form": "noun",
        "plural": "ноги"
    },
    {
        "word": "учитель",
        "level": "starter",
        "theme": "job_titles_professions_A0",
        "gender": "он",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "plural": "учителя",
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
        "theme": "basic_foods_A0",
        "gender": "он",
        "form": "noun",
        "definitions": [
            {
                "text": "Традиционный русский суп со свеклой."
            }
        ]
    },
    {
        "word": "салат оливье",
        "level": "starter",
        "theme": "basic_foods_A0",
        "gender": "он",
        "form": "noun"
    },
    {
        "word": "яблоко",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        "theme": "basic_foods_A0",
        "gender": "он",
        "emoji": "🍞",
        "form": "noun",
        "plural": "хлеба"
    },
    {
        "word": "яйцо",
        "level": "starter",
        "theme": "basic_foods_A0",
        "gender": "оно",
        "emoji": "🥚",
        "form": "noun",
        "plural": "яйца"
    },
    {
        "word": "молоко",
        "level": "starter",
        "theme": "basic_foods_A0",
        "gender": "оно",
        "emoji": "🥛",
        "form": "noun"
    },
    {
        "word": "пицца",
        "level": "starter",
        "theme": "basic_foods_A0",
        "gender": "она",
        "emoji": "🍕",
        "form": "noun"
    },
    {
        "word": "рис",
        "level": "starter",
        "theme": "basic_foods_A0",
        "gender": "он",
        "emoji": "🍚",
        "form": "noun"
    },
    {
        "word": "мясо",
        "level": "starter",
        "theme": "basic_foods_A0",
        "gender": "оно",
        "emoji": "🥩",
        "form": "noun"
    },
    {
        "word": "еда",
        "level": "starter",
        "theme": "basic_foods_A0",
        "gender": "она",
        "emoji": "🍲",
        "form": "noun"
    },
    {
        "word": "кофе",
        "level": "starter",
        "theme": "drinks_A0",
        "gender": "он",
        "emoji": "☕",
        "form": "noun"
    },
    {
        "word": "чай",
        "level": "starter",
        "theme": "drinks_A0",
        "gender": "он",
        "emoji": "🍵",
        "form": "noun"
    },
    {
        "word": "сок",
        "level": "starter",
        "theme": "drinks_A0",
        "gender": "он",
        "emoji": "🧃",
        "form": "noun"
    },
    {
        "word": "вода",
        "level": "starter",
        "theme": "drinks_A0",
        "gender": "она",
        "emoji": "🚰",
        "form": "noun"
    },
    {
        "word": "завтрак",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "gender": "он",
        "emoji": "🍳",
        "form": "noun"
    },
    {
        "word": "ужин",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "gender": "он",
        "emoji": "🍽️",
        "form": "noun"
    },
    {
        "word": "обед",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "gender": "он",
        "emoji": "🍱",
        "form": "noun"
    },
    {
        "word": "парк",
        "level": "starter",
        "theme": "local_places_services_A0",
        "gender": "он",
        "emoji": "🌳",
        "form": "noun"
    },
    {
        "word": "школа",
        "level": "starter",
        "theme": "local_places_services_A0",
        "gender": "она",
        "emoji": "🏫",
        "form": "noun",
        "plural": "школы"
    },
    {
        "word": "магазин",
        "level": "starter",
        "theme": "local_places_services_A0",
        "gender": "он",
        "emoji": "🛒",
        "form": "noun",
        "plural": "магазины"
    },
    {
        "word": "футболка",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "gender": "она",
        "emoji": "👕",
        "form": "noun",
        "plural": "футболки"
    },
    {
        "word": "брюки",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "gender": "они",
        "emoji": "👖",
        "form": "noun"
    },
    {
        "word": "обувь",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "gender": "она",
        "emoji": "👟",
        "form": "noun"
    },
    {
        "word": "шапка",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "gender": "она",
        "emoji": "👒",
        "form": "noun",
        "plural": "шапки"
    },
    {
        "word": "стул",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "gender": "он",
        "emoji": "🪑",
        "form": "noun",
        "plural": "стулья"
    },
    {
        "word": "стол",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "gender": "он",
        "emoji": "🪑",
        "form": "noun",
        "plural": "столы"
    },
    {
        "word": "кровать",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "gender": "она",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "кровати"
    },
    {
        "word": "ключ",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "gender": "он",
        "emoji": "🔑",
        "form": "noun",
        "plural": "ключи"
    },
    {
        "word": "телефон",
        "level": "starter",
        "theme": "basic_technology_devices_A0",
        "gender": "он",
        "emoji": "📱",
        "form": "noun",
        "plural": "телефоны"
    },
    {
        "word": "книга",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "gender": "она",
        "emoji": "📖",
        "form": "noun",
        "plural": "книги"
    },
    {
        "word": "сумка",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "gender": "она",
        "emoji": "👜",
        "form": "noun",
        "plural": "сумки"
    },
    {
        "word": "ручка",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "gender": "она",
        "emoji": "🖊️",
        "form": "noun",
        "plural": "ручки"
    },
    {
        "word": "высокий",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "низкий",
        "oppositeEmoji": "📏"
    },
    {
        "word": "низкий",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "высокий",
        "oppositeEmoji": "🗼"
    },
    {
        "word": "молодой",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "старый",
        "oppositeEmoji": "👴"
    },
    {
        "word": "старый",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "молодой",
        "oppositeEmoji": "👶"
    },
    {
        "word": "хороший",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "плохой",
        "oppositeEmoji": "👎"
    },
    {
        "word": "плохой",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "хороший",
        "oppositeEmoji": "👍"
    },
    {
        "word": "лёгкий",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "трудный",
        "oppositeEmoji": "❌"
    },
    {
        "word": "трудный",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "лёгкий",
        "oppositeEmoji": "✅"
    },
    {
        "word": "большой",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "маленький",
        "oppositeEmoji": "🐭"
    },
    {
        "word": "маленький",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "большой",
        "oppositeEmoji": "🐘"
    },
    {
        "word": "счастливый",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "form": "adjective"
    },
    {
        "word": "усталый",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "обеспокоенный",
        "oppositeEmoji": "😟",
        "definitions": [
            {
                "text": "Чувство потребности в отдыхе или сне.",
                "examples": [
                    "Я очень устал после работы."
                ]
            }
        ]
    },
    {
        "word": "кот",
        "level": "starter",
        "theme": "animals_A0",
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
        "theme": "animals_A0",
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
        "theme": "animals_A0",
        "gender": "она",
        "emoji": "🐦",
        "form": "noun",
        "plural": "птицы"
    },
    {
        "word": "рыба",
        "level": "starter",
        "theme": "animals_A0",
        "gender": "она",
        "emoji": "🐟",
        "form": "noun",
        "plural": "рыбы"
    },
    {
        "word": "голова",
        "level": "starter",
        "theme": "body_parts_A0",
        "gender": "она",
        "emoji": "👤",
        "form": "noun",
        "plural": "головы"
    },
    {
        "word": "рука",
        "level": "starter",
        "theme": "body_parts_A0",
        "gender": "она",
        "emoji": "✋",
        "form": "noun",
        "plural": "руки"
    },
    {
        "word": "глаз",
        "level": "starter",
        "theme": "body_parts_A0",
        "gender": "он",
        "emoji": "👁️",
        "form": "noun",
        "plural": "глаза"
    },
    {
        "word": "нос",
        "level": "starter",
        "theme": "body_parts_A0",
        "gender": "он",
        "emoji": "👃",
        "form": "noun",
        "plural": "носы"
    },
    {
        "word": "рот",
        "level": "starter",
        "theme": "body_parts_A0",
        "gender": "он",
        "emoji": "👄",
        "form": "noun",
        "plural": "рты"
    },
    {
        "word": "ухо",
        "level": "starter",
        "theme": "body_parts_A0",
        "gender": "оно",
        "emoji": "👂",
        "form": "noun",
        "plural": "уши"
    },
    {
        "word": "мать",
        "level": "starter",
        "theme": "immediate_family_A0",
        "gender": "она",
        "emoji": "👩",
        "form": "noun",
        "plural": "матери"
    },
    {
        "word": "отец",
        "level": "starter",
        "theme": "immediate_family_A0",
        "gender": "он",
        "emoji": "👨",
        "form": "noun",
        "plural": "отцы"
    },
    {
        "word": "семья",
        "level": "starter",
        "theme": "immediate_family_A0",
        "gender": "она",
        "emoji": "👪",
        "form": "noun",
        "plural": "семьи"
    },
    {
        "word": "друг",
        "level": "starter",
        "theme": "immediate_family_A0",
        "gender": "он",
        "emoji": "👫",
        "form": "noun",
        "plural": "друзья"
    },
    {
        "word": "партнёр",
        "level": "starter",
        "theme": "marital_status_A0",
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
        "theme": "rooms_of_a_home_A0",
        "gender": "он",
        "emoji": "🏡",
        "form": "noun",
        "plural": "дома",
        "subtext": "дома, идти домой"
    },
    {
        "word": "квартира",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
        "gender": "она",
        "emoji": "🏢",
        "form": "noun",
        "plural": "квартиры"
    },
    {
        "word": "офис",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A0",
        "gender": "он",
        "emoji": "🏢",
        "form": "noun",
        "plural": "офисы"
    },
    {
        "word": "машина",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "gender": "она",
        "emoji": "🚗",
        "form": "noun",
        "plural": "машины"
    },
    {
        "word": "автобус",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "gender": "он",
        "emoji": "🚌",
        "form": "noun",
        "plural": "автобусы"
    },
    {
        "word": "поезд",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "gender": "он",
        "emoji": "🚆",
        "form": "noun",
        "plural": "поезда"
    },
    {
        "word": "деньги",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "gender": "они",
        "emoji": "💰",
        "form": "noun"
    },
    {
        "word": "дорогой",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "дешёвый",
        "oppositeEmoji": "🏷️"
    },
    {
        "word": "дешёвый",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "дорогой",
        "oppositeEmoji": "💎"
    },
    {
        "word": "утро",
        "level": "starter",
        "theme": "times_day_A0",
        "gender": "оно",
        "emoji": "🌅",
        "form": "noun",
        "plural": "утра"
    },
    {
        "word": "вечер",
        "level": "starter",
        "theme": "times_day_A0",
        "gender": "он",
        "emoji": "🌆",
        "form": "noun",
        "plural": "вечера"
    },
    {
        "word": "день",
        "level": "starter",
        "theme": "times_day_A0",
        "gender": "он",
        "emoji": "☀️",
        "form": "noun",
        "plural": "дни"
    },
    {
        "word": "неделя",
        "level": "starter",
        "theme": "times_day_A0",
        "gender": "она",
        "emoji": "📅",
        "form": "noun",
        "plural": "недели"
    },
    {
        "word": "каждый день",
        "level": "starter",
        "theme": "times_day_A0",
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
        "word": "полный рабочий день",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Работа в течение полного количества часов в рабочую неделю.",
                "examples": [
                    "У неё работа на полный рабочий день в банке."
                ]
            }
        ]
    },
    {
        "word": "неполный рабочий день",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Работа меньшее количество часов, чем стандартная рабочая неделя.",
                "examples": [
                    "Он работает неполный рабочий день по субботам."
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
        "subtext": "начальник",
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
        "subtext": "заработная плата",
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
        "subtext": "встреча, совещание",
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
        "theme": "rooms_of_a_home_A0",
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
        "theme": "rooms_of_a_home_A0",
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
        "word": "чистый",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "грязный",
        "oppositeEmoji": "💩",
        "definitions": [
            {
                "text": "Свободный от грязи.",
                "examples": [
                    "Моя комната чистая."
                ]
            }
        ]
    },
    {
        "word": "здоровый",
        "level": "starter",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍎",
        "form": "adjective",
        "opposite": "больной",
        "definitions": [
            {
                "text": "Полезный для тела; не больной.",
                "examples": [
                    "Овощи — это здоровая еда."
                ]
            }
        ]
    },
    {
        "word": "больной",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "здоровый",
        "definitions": [
            {
                "text": "Чувствующий себя плохо; страдающий от болезни.",
                "examples": [
                    "Я чувствую себя больным сегодня."
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
        "word": "онлайн",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "С использованием интернета.",
                "examples": [
                    "Я иногда покупаю еду онлайн."
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
        "subtext": "связь",
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
        "word": "один",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "🧍",
        "form": "adjective",
        "opposite": "вместе",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Без других людей; сам по себе.",
                "examples": [
                    "Она живет одна."
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
        "theme": "travel_vocabulary_basics_A0",
        "gender": "он",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "отпуска",
        "subtext": "каникулы",
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
        "theme": "travel_vocabulary_basics_A0",
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
        "subtext": "гостиница",
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
        "theme": "times_day_A0",
        "gender": "они",
        "emoji": "🗓️",
        "form": "noun",
        "subtext": "уикенд",
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
        "word": "расслабленный",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "напряженный",
        "definitions": [
            {
                "text": "Спокойный; не встревоженный и не напряженный.",
                "examples": [
                    "Я чувствую себя расслабленным в выходные."
                ]
            }
        ]
    },
    {
        "word": "обеспокоенный",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "спокойный",
        "definitions": [
            {
                "text": "Чувство тревоги из-за того, что может случиться.",
                "examples": [
                    "Она обеспокоена своей работой."
                ]
            }
        ]
    },
    {
        "word": "занятой",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "свободный",
        "definitions": [
            {
                "text": "Имеющий много дел.",
                "examples": [
                    "Я очень занят на этой неделе."
                ]
            }
        ]
    },
    {
        "word": "полезный",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "бесполезный",
        "definitions": [
            {
                "text": "Помогающий; имеющий практическую цель.",
                "examples": [
                    "Машина очень полезна в деревне."
                ]
            }
        ]
    },
    {
        "word": "важный",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "💎",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий большое значение или влияние.",
                "examples": [
                    "Сон очень важен."
                ]
            }
        ]
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
