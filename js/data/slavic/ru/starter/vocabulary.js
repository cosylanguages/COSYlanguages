(function() {
    const data = [
    {
        "word": "врач",
        "level": "starter",
        "theme": "job_titles_professions_A0",
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
        "form": "noun"
    },
    {
        "word": "яблоко",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        "emoji": "🍞",
        "form": "noun",
        "plural": "хлеба"
    },
    {
        "word": "яйцо",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🥚",
        "form": "noun",
        "plural": "яйца"
    },
    {
        "word": "молоко",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🥛",
        "form": "noun"
    },
    {
        "word": "пицца",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍕",
        "form": "noun"
    },
    {
        "word": "рис",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍚",
        "form": "noun"
    },
    {
        "word": "мясо",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🥩",
        "form": "noun"
    },
    {
        "word": "еда",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍲",
        "form": "noun"
    },
    {
        "word": "кофе",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "☕",
        "form": "noun"
    },
    {
        "word": "чай",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🍵",
        "form": "noun"
    },
    {
        "word": "сок",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🧃",
        "form": "noun"
    },
    {
        "word": "вода",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🚰",
        "form": "noun"
    },
    {
        "word": "завтрак",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍳",
        "form": "noun"
    },
    {
        "word": "ужин",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍽️",
        "form": "noun"
    },
    {
        "word": "обед",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍱",
        "form": "noun"
    },
    {
        "word": "парк",
        "level": "starter",
        "theme": "local_places_services_A0",
        "emoji": "🌳",
        "form": "noun"
    },
    {
        "word": "школа",
        "level": "starter",
        "theme": "local_places_services_A0",
        "emoji": "🏫",
        "form": "noun",
        "plural": "школы"
    },
    {
        "word": "магазин",
        "level": "starter",
        "theme": "local_places_services_A0",
        "emoji": "🛒",
        "form": "noun",
        "plural": "магазины"
    },
    {
        "word": "футболка",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👕",
        "form": "noun",
        "plural": "футболки"
    },
    {
        "word": "брюки",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👖",
        "form": "noun"
    },
    {
        "word": "обувь",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👟",
        "form": "noun"
    },
    {
        "word": "шапка",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👒",
        "form": "noun",
        "plural": "шапки"
    },
    {
        "word": "стул",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🪑",
        "form": "noun",
        "plural": "стулья"
    },
    {
        "word": "стол",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🪑",
        "form": "noun",
        "plural": "столы"
    },
    {
        "word": "кровать",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "кровати"
    },
    {
        "word": "ключ",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🔑",
        "form": "noun",
        "plural": "ключи"
    },
    {
        "word": "телефон",
        "level": "starter",
        "theme": "basic_technology_devices_A0",
        "emoji": "📱",
        "form": "noun",
        "plural": "телефоны"
    },
    {
        "word": "книга",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "📖",
        "form": "noun",
        "plural": "книги"
    },
    {
        "word": "сумка",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "👜",
        "form": "noun",
        "plural": "сумки"
    },
    {
        "word": "ручка",
        "level": "starter",
        "theme": "furniture_objects_A0",
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
        "form": "adjective"
    },
    {
        "word": "кот",
        "level": "starter",
        "theme": "animals_A0",
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
        "emoji": "🐦",
        "form": "noun",
        "plural": "птицы"
    },
    {
        "word": "рыба",
        "level": "starter",
        "theme": "animals_A0",
        "emoji": "🐟",
        "form": "noun",
        "plural": "рыбы"
    },
    {
        "word": "голова",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👤",
        "form": "noun",
        "plural": "головы"
    },
    {
        "word": "рука",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "✋",
        "form": "noun",
        "plural": "руки"
    },
    {
        "word": "глаз",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👁️",
        "form": "noun",
        "plural": "глаза"
    },
    {
        "word": "нос",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👃",
        "form": "noun",
        "plural": "носы"
    },
    {
        "word": "рот",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👄",
        "form": "noun",
        "plural": "рты"
    },
    {
        "word": "ухо",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👂",
        "form": "noun",
        "plural": "уши"
    },
    {
        "word": "мать",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👩",
        "form": "noun",
        "plural": "матери"
    },
    {
        "word": "отец",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👨",
        "form": "noun",
        "plural": "отцы"
    },
    {
        "word": "семья",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👪",
        "form": "noun",
        "plural": "семьи"
    },
    {
        "word": "друг",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👫",
        "form": "noun",
        "plural": "друзья"
    },
    {
        "word": "партнёр",
        "level": "starter",
        "theme": "marital_status_A0",
        "emoji": "💑",
        "form": "noun",
        "plural": "партнёры"
    },
    {
        "word": "мужчина",
        "level": "starter",
        "theme": "physical_appearance_A1",
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
        "emoji": "🏡",
        "form": "noun",
        "plural": "дома",
        "subtext": "дома, идти домой"
    },
    {
        "word": "квартира",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
        "emoji": "🏢",
        "form": "noun",
        "plural": "квартиры"
    },
    {
        "word": "офис",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A0",
        "emoji": "🏢",
        "form": "noun",
        "plural": "офисы"
    },
    {
        "word": "машина",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "form": "noun",
        "plural": "машины"
    },
    {
        "word": "автобус",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚌",
        "form": "noun",
        "plural": "автобусы"
    },
    {
        "word": "поезд",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚆",
        "form": "noun",
        "plural": "поезда"
    },
    {
        "word": "деньги",
        "level": "starter",
        "theme": "everyday_shopping_A0",
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
        "emoji": "🌅",
        "form": "noun",
        "plural": "утра"
    },
    {
        "word": "вечер",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "🌆",
        "form": "noun",
        "plural": "вечера"
    },
    {
        "word": "день",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "☀️",
        "form": "noun",
        "plural": "дни"
    },
    {
        "word": "неделя",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "📅",
        "form": "noun",
        "plural": "недели"
    },
    {
        "word": "каждый день",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "🔁",
        "form": "adverb"
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
