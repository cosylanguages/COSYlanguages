(function() {
    const lang = "ru";
    const data = [
    {
        "id": "ru_starter_food_drink_001",
        "word": "Кофе или Чай — какой утренний напиток лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Кофе или Чай — какой утренний напиток лучше?",
                "examples": []
            }
        ],
        "topic": "Кофе или Чай — какой утренний напиток лучше?",
        "sideA": "Кофе",
        "sideB": "Чай",
        "ideasA": [
            "Энергия",
            "Приятно пахнет"
        ],
        "ideasB": [
            "Здоровье",
            "Отдых"
        ]
    },
    {
        "id": "ru_starter_food_drink_002",
        "word": "Ресторан или домашняя еда — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Ресторан или домашняя еда — что лучше?",
                "examples": []
            }
        ],
        "topic": "Ресторан или домашняя еда — что лучше?",
        "sideA": "Ресторан",
        "sideB": "Домашняя еда",
        "ideasA": [
            "Не нужно мыть посуду",
            "Профессиональные повара"
        ],
        "ideasB": [
            "Это дешевле",
            "Это полезнее"
        ]
    },
    {
        "id": "ru_starter_food_drink_003",
        "word": "Завтрак или без завтрака — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Завтрак или без завтрака — что лучше?",
                "examples": []
            }
        ],
        "topic": "Завтрак или без завтрака — что лучше?",
        "sideA": "Завтрак",
        "sideB": "Без завтрака",
        "ideasA": [
            "Энергия на утро",
            "Хорошее начало дня"
        ],
        "ideasB": [
            "Экономит время",
            "Я не голоден"
        ]
    },
    {
        "id": "ru_starter_food_drink_004",
        "word": "Вода или Сок — что полезнее?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Вода или Сок — что полезнее?",
                "examples": []
            }
        ],
        "topic": "Вода или Сок — что полезнее?",
        "sideA": "Вода",
        "sideB": "Сок",
        "ideasA": [
            "Без калорий",
            "Натурально"
        ],
        "ideasB": [
            "Витамины",
            "Сладкая"
        ]
    },
    {
        "id": "ru_starter_food_drink_005",
        "word": "Мясо или Овощи — что важнее в еде?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Мясо или Овощи — что важнее в еде?",
                "examples": []
            }
        ],
        "topic": "Мясо или Овощи — что важнее в еде?",
        "sideA": "Мясо",
        "sideB": "Овощи",
        "ideasA": [
            "Белки",
            "Вкусно"
        ],
        "ideasB": [
            "Витамины",
            "Здоровье"
        ]
    },
    {
        "id": "ru_starter_furniture_001",
        "word": "Дом или Квартира — где лучше жить?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Дом или Квартира — где лучше жить?",
                "examples": []
            }
        ],
        "topic": "Дом или Квартира — где лучше жить?",
        "sideA": "Дом",
        "sideB": "Квартира",
        "ideasA": [
            "Сад",
            "Больше места"
        ],
        "ideasB": [
            "Дешево",
            "Легче убирать"
        ]
    },
    {
        "id": "ru_starter_furniture_002",
        "word": "Город или Деревня — где лучше жить?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Город или Деревня — где лучше жить?",
                "examples": []
            }
        ],
        "topic": "Город или Деревня — где лучше жить?",
        "sideA": "Город",
        "sideB": "Деревня",
        "ideasA": [
            "Магазины",
            "Кино"
        ],
        "ideasB": [
            "Тихо",
            "Воздух"
        ]
    },
    {
        "id": "ru_starter_work_001",
        "word": "Наличные или Карта — чем лучше платить?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Наличные или Карта — чем лучше платить?",
                "examples": []
            }
        ],
        "topic": "Наличные или Карта — чем лучше платить?",
        "sideA": "Наличные",
        "sideB": "Карта",
        "ideasA": [
            "Видишь деньги",
            "Не нужны технологии"
        ],
        "ideasB": [
            "Быстро",
            "Безопасно"
        ]
    },
    {
        "id": "ru_starter_work_002",
        "word": "Копить или Тратить — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Копить или Тратить — что лучше?",
                "examples": []
            }
        ],
        "topic": "Копить или Тратить — что лучше?",
        "sideA": "Копить",
        "sideB": "Тратить",
        "ideasA": [
            "Будущее",
            "Большие покупки"
        ],
        "ideasB": [
            "Весело сейчас",
            "Магазины"
        ]
    },
    {
        "id": "ru_starter_work_003",
        "word": "Аренда или Покупка — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Аренда или Покупка — что лучше?",
                "examples": []
            }
        ],
        "topic": "Аренда или Покупка — что лучше?",
        "sideA": "Аренда",
        "sideB": "Покупка",
        "ideasA": [
            "Гибкость",
            "Без ремонта"
        ],
        "ideasB": [
            "Инвестиция",
            "Это ваше"
        ]
    },
    {
        "id": "ru_starter_work_004",
        "word": "Работа утром или работа вечером — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Работа утром или работа вечером — что лучше?",
                "examples": []
            }
        ],
        "topic": "Работа утром или работа вечером — что лучше?",
        "sideA": "Утром",
        "sideB": "Вечером",
        "ideasA": [
            "Закончить рано",
            "Свободный вечер"
        ],
        "ideasB": [
            "Долго спать",
            "Тихое время"
        ]
    },
    {
        "id": "ru_starter_travel_001",
        "word": "Машина или Автобус — на чем лучше путешествовать?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Машина или Автобус — на чем лучше путешествовать?",
                "examples": []
            }
        ],
        "topic": "Машина или Автобус — на чем лучше путешествовать?",
        "sideA": "Машина",
        "sideB": "Автобус",
        "ideasA": [
            "Приватно",
            "Быстро"
        ],
        "ideasB": [
            "Дешево",
            "Общение"
        ]
    },
    {
        "id": "ru_starter_travel_002",
        "word": "Пешком или Машина — что лучше в городе?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Пешком или Машина — что лучше в городе?",
                "examples": []
            }
        ],
        "topic": "Пешком или Машина — что лучше в городе?",
        "sideA": "Пешком",
        "sideB": "Машина",
        "ideasA": [
            "Бесплатно",
            "Упражнения"
        ],
        "ideasB": [
            "Без дождя",
            "Удобно"
        ]
    },
    {
        "id": "ru_starter_work_005",
        "word": "Офис или Дом — где лучше работать?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Офис или Дом — где лучше работать?",
                "examples": []
            }
        ],
        "topic": "Офис или Дом — где лучше работать?",
        "sideA": "Офис",
        "sideB": "Дом",
        "ideasA": [
            "Фокус",
            "Коллеги"
        ],
        "ideasB": [
            "Не надо ехать",
            "Удобная одежда"
        ]
    },
    {
        "id": "ru_starter_furniture_003",
        "word": "Жаворонок или сова — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Жаворонок или сова — что лучше?",
                "examples": []
            }
        ],
        "topic": "Жаворонок или сова — что лучше?",
        "sideA": "Жаворонок",
        "sideB": "Сова",
        "ideasA": [
            "Видеть солнце",
            "Тихое время"
        ],
        "ideasB": [
            "Творческое время",
            "Нет шума"
        ]
    },
    {
        "id": "ru_starter_nature_001",
        "word": "Лето или Зима — какое время года лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "phrase",
        "definitions": [
            {
                "text": "Лето или Зима — какое время года лучше?",
                "examples": []
            }
        ],
        "topic": "Лето или Зима — какое время года лучше?",
        "sideA": "Лето",
        "sideB": "Зима",
        "ideasA": [
            "Солнечно",
            "Пляж"
        ],
        "ideasB": [
            "Снег",
            "Лыжи"
        ]
    },
    {
        "id": "ru_starter_places_001",
        "word": "Короткий отпуск или длинный отпуск — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "phrase",
        "definitions": [
            {
                "text": "Короткий отпуск или длинный отпуск — что лучше?",
                "examples": []
            }
        ],
        "topic": "Короткий отпуск или длинный отпуск — что лучше?",
        "sideA": "Короткий",
        "sideB": "Длинный",
        "ideasA": [
            "Легко планировать",
            "Много поездок"
        ],
        "ideasB": [
            "Больше отдыха",
            "Увидеть больше мест"
        ]
    },
    {
        "id": "ru_starter_technology_001",
        "word": "Звонок или сообщение — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "technology",
        "form": "phrase",
        "definitions": [
            {
                "text": "Звонок или сообщение — что лучше?",
                "examples": []
            }
        ],
        "topic": "Звонок или сообщение — что лучше?",
        "sideA": "Звонок",
        "sideB": "Сообщение",
        "ideasA": [
            "Слышать голос",
            "Это быстрее"
        ],
        "ideasB": [
            "Подумать перед письмом",
            "Прочитать позже"
        ]
    },
    {
        "id": "ru_starter_furniture_004",
        "word": "Душ утром или душ вечером — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Душ утром или душ вечером — что лучше?",
                "examples": []
            }
        ],
        "topic": "Душ утром или душ вечером — что лучше?",
        "sideA": "Утром",
        "sideB": "Вечером",
        "ideasA": [
            "Проснуться",
            "Начать свежим"
        ],
        "ideasB": [
            "Помогает расслабиться",
            "Чистая кровать"
        ]
    },
    {
        "id": "ru_starter_furniture_005",
        "word": "Понедельник или пятница — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Понедельник или пятница — что лучше?",
                "examples": []
            }
        ],
        "topic": "Понедельник или пятница — что лучше?",
        "sideA": "Понедельник",
        "sideB": "Пятница",
        "ideasA": [
            "Начать проекты",
            "Новая неделя"
        ],
        "ideasB": [
            "Выходные скоро",
            "Время праздника"
        ]
    },
    {
        "id": "ru_starter_nature_002",
        "word": "Слишком жарко или слишком холодно — что хуже?",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "phrase",
        "definitions": [
            {
                "text": "Слишком жарко или слишком холодно — что хуже?",
                "examples": []
            }
        ],
        "topic": "Слишком жарко или слишком холодно — что хуже?",
        "sideA": "Жарко",
        "sideB": "Холодно",
        "ideasA": [
            "Нельзя спать",
            "Слишком много солнца"
        ],
        "ideasB": [
            "Нужно много одежды",
            "Мороз"
        ]
    },
    {
        "id": "ru_starter_places_002",
        "word": "Место у окна или у прохода — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "phrase",
        "definitions": [
            {
                "text": "Место у окна или у прохода — что лучше?",
                "examples": []
            }
        ],
        "topic": "Место у окна или у прохода — что лучше?",
        "sideA": "Окно",
        "sideB": "Проход",
        "ideasA": [
            "Видеть облака",
            "Делать фото"
        ],
        "ideasB": [
            "Легко ходить",
            "Больше места"
        ]
    },
    {
        "id": "ru_starter_colours_001",
        "word": "Красный против синего — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "phrase",
        "definitions": [
            {
                "text": "Красный против синего — что лучше?",
                "examples": []
            }
        ],
        "topic": "Красный против синего — что лучше?",
        "sideA": "Красный",
        "sideB": "Синий",
        "ideasA": [
            "Сильный цвет",
            "Любовь"
        ],
        "ideasB": [
            "Спокойный цвет",
            "Море и небо"
        ]
    },
    {
        "id": "ru_starter_colours_002",
        "word": "Желтый против зеленого — какой цвет радостнее?",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "phrase",
        "definitions": [
            {
                "text": "Желтый против зеленого — какой цвет радостнее?",
                "examples": []
            }
        ],
        "topic": "Желтый против зеленого — какой цвет радостнее?",
        "sideA": "Желтый",
        "sideB": "Зеленый",
        "ideasA": [
            "Как солнце",
            "Яркий"
        ],
        "ideasB": [
            "Цвет природы",
            "Как деревья"
        ]
    },
    {
        "id": "ru_starter_colours_003",
        "word": "Черный против белого — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "phrase",
        "definitions": [
            {
                "text": "Черный против белого — что лучше?",
                "examples": []
            }
        ],
        "topic": "Черный против белого — что лучше?",
        "sideA": "Черный",
        "sideB": "Белый",
        "ideasA": [
            "Элегантный",
            "Ко всему подходит"
        ],
        "ideasB": [
            "Чистый",
            "Яркий"
        ]
    },
    {
        "id": "ru_starter_colours_004",
        "word": "Розовый против фиолетового — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "phrase",
        "definitions": [
            {
                "text": "Розовый против фиолетового — что лучше?",
                "examples": []
            }
        ],
        "topic": "Розовый против фиолетового — что лучше?",
        "sideA": "Розовый",
        "sideB": "Фиолетовый",
        "ideasA": [
            "Милый цвет",
            "Цветы"
        ],
        "ideasB": [
            "Королевский цвет",
            "Вкусный фрукт"
        ]
    },
    {
        "id": "ru_starter_numbers_001",
        "word": "Большие против маленьких чисел — что веселее?",
        "lang": "ru",
        "level": "starter",
        "theme": "numbers",
        "form": "phrase",
        "definitions": [
            {
                "text": "Большие против маленьких чисел — что веселее?",
                "examples": []
            }
        ],
        "topic": "Большие против маленьких чисел — что веселее?",
        "sideA": "Большие",
        "sideB": "Маленькие",
        "ideasA": [
            "Больше денег",
            "Крупный счет"
        ],
        "ideasB": [
            "Легко учить",
            "Быстро"
        ]
    },
    {
        "id": "ru_starter_social_001",
        "word": "Мяч против куклы — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Мяч против куклы — что лучше?",
                "examples": []
            }
        ],
        "topic": "Мяч против куклы — что лучше?",
        "sideA": "Мяч",
        "sideB": "Кукла",
        "ideasA": [
            "Играть с друзьями",
            "Спорт"
        ],
        "ideasB": [
            "Рассказывать истории",
            "Украшение"
        ]
    },
    {
        "id": "ru_starter_work_006",
        "word": "Карандаш против ручки — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Карандаш против ручки — что лучше?",
                "examples": []
            }
        ],
        "topic": "Карандаш против ручки — что лучше?",
        "sideA": "Карандаш",
        "sideB": "Ручка",
        "ideasA": [
            "Можно стереть",
            "Хорошо для рисования"
        ],
        "ideasB": [
            "Навсегда",
            "Чистое письмо"
        ]
    },
    {
        "id": "ru_starter_work_007",
        "word": "Книга против картинки — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Книга против картинки — что лучше?",
                "examples": []
            }
        ],
        "topic": "Книга против картинки — что лучше?",
        "sideA": "Книга",
        "sideB": "Картинка",
        "ideasA": [
            "Читать истории",
            "Нет батарейки"
        ],
        "ideasB": [
            "Быстро увидеть",
            "Красиво"
        ]
    },
    {
        "id": "ru_starter_furniture_006",
        "word": "Стул против пола — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Стул против пола — что лучше?",
                "examples": []
            }
        ],
        "topic": "Стул против пола — что лучше?",
        "sideA": "Стул",
        "sideB": "Пол",
        "ideasA": [
            "Хорошо для спины",
            "Работа за столом"
        ],
        "ideasB": [
            "Много места",
            "Отдых"
        ]
    },
    {
        "id": "ru_starter_animals_001",
        "word": "Кошка против собаки — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "animals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Кошка против собаки — что лучше?",
                "examples": []
            }
        ],
        "topic": "Кошка против собаки — что лучше?",
        "sideA": "Кошка",
        "sideB": "Собака",
        "ideasA": [
            "Независимая",
            "Тихая"
        ],
        "ideasB": [
            "Верный друг",
            "Играть на улице"
        ]
    },
    {
        "id": "ru_starter_animals_002",
        "word": "Рыба против птицы — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "animals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Рыба против птицы — что лучше?",
                "examples": []
            }
        ],
        "topic": "Рыба против птицы — что лучше?",
        "sideA": "Рыба",
        "sideB": "Птица",
        "ideasA": [
            "Красивые цвета",
            "Легкий уход"
        ],
        "ideasB": [
            "Может петь",
            "Веселые звуки"
        ]
    },
    {
        "id": "ru_starter_animals_003",
        "word": "Большие против маленьких животных — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "animals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Большие против маленьких животных — что лучше?",
                "examples": []
            }
        ],
        "topic": "Большие против маленьких животных — что лучше?",
        "sideA": "Большие",
        "sideB": "Маленькие",
        "ideasA": [
            "Сильные",
            "Интересные"
        ],
        "ideasB": [
            "Милые",
            "Мало места"
        ]
    },
    {
        "id": "ru_starter_animals_004",
        "word": "Кролик против хомяка — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "animals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Кролик против хомяка — что лучше?",
                "examples": []
            }
        ],
        "topic": "Кролик против хомяка — что лучше?",
        "sideA": "Кролик",
        "sideB": "Хомяк",
        "ideasA": [
            "Длинные уши",
            "Мягкий"
        ],
        "ideasB": [
            "Маленький",
            "Приятно смотреть"
        ]
    },
    {
        "id": "ru_starter_food_drink_006",
        "word": "Яблоко против банана — какой фрукт лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Яблоко против банана — какой фрукт лучше?",
                "examples": []
            }
        ],
        "topic": "Яблоко против банана — какой фрукт лучше?",
        "sideA": "Яблоко",
        "sideB": "Банан",
        "ideasA": [
            "Хрустящее",
            "Сладкое"
        ],
        "ideasB": [
            "Легко чистить",
            "Мягкий"
        ]
    },
    {
        "id": "ru_starter_food_drink_007",
        "word": "Хлеб против риса — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Хлеб против риса — что лучше?",
                "examples": []
            }
        ],
        "topic": "Хлеб против риса — что лучше?",
        "sideA": "Хлеб",
        "sideB": "Рис",
        "ideasA": [
            "Много видов",
            "Бутерброды"
        ],
        "ideasB": [
            "Полезно",
            "Хорошо с мясом"
        ]
    },
    {
        "id": "ru_starter_food_drink_008",
        "word": "Молоко против воды — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Молоко против воды — что лучше?",
                "examples": []
            }
        ],
        "topic": "Молоко против воды — что лучше?",
        "sideA": "Молоко",
        "sideB": "Вода",
        "ideasA": [
            "Кальций",
            "Хорошо для костей"
        ],
        "ideasB": [
            "Свежая",
            "Базовая"
        ]
    },
    {
        "id": "ru_starter_colours_005",
        "word": "Розовый против оранжевого — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "colours",
        "form": "phrase",
        "definitions": [
            {
                "text": "Розовый против оранжевого — что лучше?",
                "examples": []
            }
        ],
        "topic": "Розовый против оранжевого — что лучше?",
        "sideA": "Розовый",
        "sideB": "Оранжевый",
        "ideasA": [
            "Милый цвет",
            "Цветы"
        ],
        "ideasB": [
            "Яркий",
            "Как фрукт"
        ]
    },
    {
        "id": "ru_starter_furniture_007",
        "word": "Стул против дивана — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Стул против дивана — что лучше?",
                "examples": []
            }
        ],
        "topic": "Стул против дивана — что лучше?",
        "sideA": "Стул",
        "sideB": "Диван",
        "ideasA": [
            "Хорошо для спины",
            "Формально"
        ],
        "ideasB": [
            "Очень мягко",
            "Смотреть ТВ"
        ]
    },
    {
        "id": "ru_starter_furniture_008",
        "word": "Сумка против коробки — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Сумка против коробки — что лучше?",
                "examples": []
            }
        ],
        "topic": "Сумка против коробки — что лучше?",
        "sideA": "Сумка",
        "sideB": "Коробка",
        "ideasA": [
            "Легко носить",
            "Для школы"
        ],
        "ideasB": [
            "Для игрушек",
            "Защищает вещи"
        ]
    },
    {
        "id": "ru_starter_animals_005",
        "word": "Лев против слона — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "animals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Лев против слона — что лучше?",
                "examples": []
            }
        ],
        "topic": "Лев против слона — что лучше?",
        "sideA": "Лев",
        "sideB": "Слон",
        "ideasA": [
            "Король",
            "Сильный"
        ],
        "ideasB": [
            "Большие уши",
            "Очень умный"
        ]
    },
    {
        "id": "ru_starter_furniture_009",
        "word": "Ложка или Вилка — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Ложка или Вилка — что лучше?",
                "examples": []
            }
        ],
        "topic": "Ложка или Вилка — что лучше?",
        "sideA": "Ложка",
        "sideB": "Вилка",
        "ideasA": [
            "Для супа",
            "Просто"
        ],
        "ideasB": [
            "Для пасты",
            "Мясо"
        ]
    },
    {
        "id": "ru_starter_furniture_010",
        "word": "Шапка или Обувь — что важнее?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Шапка или Обувь — что важнее?",
                "examples": []
            }
        ],
        "topic": "Шапка или Обувь — что важнее?",
        "sideA": "Шапка",
        "sideB": "Обувь",
        "ideasA": [
            "Крутой стиль",
            "Защита от солнца"
        ],
        "ideasB": [
            "Защита ног",
            "Для прогулок"
        ]
    },
    {
        "id": "ru_starter_nature_003",
        "word": "Солнце против луны — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "phrase",
        "definitions": [
            {
                "text": "Солнце против луны — что лучше?",
                "examples": []
            }
        ],
        "topic": "Солнце против луны — что лучше?",
        "sideA": "Солнце",
        "sideB": "Луна",
        "ideasA": [
            "Тепло",
            "Свет"
        ],
        "ideasB": [
            "Красиво",
            "Ночной свет"
        ]
    },
    {
        "id": "ru_starter_furniture_011",
        "word": "Носки или Без носков — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Носки или Без носков — что лучше?",
                "examples": []
            }
        ],
        "topic": "Носки или Без носков — что лучше?",
        "sideA": "Носки",
        "sideB": "Без носков",
        "ideasA": [
            "Теплые ноги",
            "Удобно"
        ],
        "ideasB": [
            "Прохладные ноги",
            "Лето"
        ]
    },
    {
        "id": "ru_starter_people_001",
        "word": "Жить с семьей или жить одному — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "phrase",
        "definitions": [
            {
                "text": "Жить с семьей или жить одному — что лучше?",
                "examples": []
            }
        ],
        "topic": "Жить с семьей или жить одному — что лучше?",
        "sideA": "Семья",
        "sideB": "Одному",
        "ideasA": [
            "Никогда не одинок",
            "Помощь с едой"
        ],
        "ideasB": [
            "Покой",
            "Твои правила"
        ]
    },
    {
        "id": "ru_starter_social_002",
        "word": "Брат или Сестра — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Брат или Сестра — что лучше?",
                "examples": []
            }
        ],
        "topic": "Брат или Сестра — что лучше?",
        "sideA": "Брат",
        "sideB": "Сестра",
        "ideasA": [
            "Играть в игры",
            "Защита"
        ],
        "ideasB": [
            "Делиться секретами",
            "Добрая"
        ]
    },
    {
        "id": "ru_starter_social_003",
        "word": "Большая семья или Маленькая семья — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Большая семья или Маленькая семья — что лучше?",
                "examples": []
            }
        ],
        "topic": "Большая семья или Маленькая семья — что лучше?",
        "sideA": "Большая семья",
        "sideB": "Маленькая семья",
        "ideasA": [
            "Оживленный дом",
            "Много друзей"
        ],
        "ideasB": [
            "Тихо",
            "Больше места"
        ]
    },
    {
        "id": "ru_starter_social_004",
        "word": "Старший или Младший — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Старший или Младший — что лучше?",
                "examples": []
            }
        ],
        "topic": "Старший или Младший — что лучше?",
        "sideA": "Старший",
        "sideB": "Младший",
        "ideasA": [
            "Лидер",
            "Ответственный"
        ],
        "ideasB": [
            "Помогают",
            "Расслаблен"
        ]
    },
    {
        "id": "ru_starter_social_005",
        "word": "Школа утром или школа днем — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Школа утром или школа днем — что лучше?",
                "examples": []
            }
        ],
        "topic": "Школа утром или школа днем — что лучше?",
        "sideA": "Утром",
        "sideB": "Днем",
        "ideasA": [
            "Свободный день",
            "Рутина"
        ],
        "ideasB": [
            "Долго спать",
            "Тихое утро"
        ]
    },
    {
        "id": "ru_starter_social_006",
        "word": "Чтение или математика — что веселее?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Чтение или математика — что веселее?",
                "examples": []
            }
        ],
        "topic": "Чтение или математика — что веселее?",
        "sideA": "Чтение",
        "sideB": "Математика",
        "ideasA": [
            "Истории",
            "Новые слова"
        ],
        "ideasB": [
            "Логика",
            "Числа"
        ]
    },
    {
        "id": "ru_starter_work_008",
        "word": "Школа или Дом — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Школа или Дом — что лучше?",
                "examples": []
            }
        ],
        "topic": "Школа или Дом — что лучше?",
        "sideA": "Школа",
        "sideB": "Дом",
        "ideasA": [
            "Друзья",
            "Учитель"
        ],
        "ideasB": [
            "Расслаблен",
            "Не надо ехать"
        ]
    },
    {
        "id": "ru_starter_work_009",
        "word": "Домашка или Без домашки — что больше помогает?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Домашка или Без домашки — что больше помогает?",
                "examples": []
            }
        ],
        "topic": "Домашка или Без домашки — что больше помогает?",
        "sideA": "Домашка",
        "sideB": "Без домашки",
        "ideasA": [
            "Практика",
            "Больше знаний"
        ],
        "ideasB": [
            "Больше игр",
            "Меньше стресса"
        ]
    },
    {
        "id": "ru_starter_work_010",
        "word": "Одному или Напарник — что ты предпочитаешь?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Одному или Напарник — что ты предпочитаешь?",
                "examples": []
            }
        ],
        "topic": "Одному или Напарник — что ты предпочитаешь?",
        "sideA": "Одному",
        "sideB": "Напарник",
        "ideasA": [
            "Фокус",
            "Быстро"
        ],
        "ideasB": [
            "Общие идеи",
            "Весело"
        ]
    },
    {
        "id": "ru_starter_technology_002",
        "word": "Писать на бумаге или на компьютере — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "technology",
        "form": "phrase",
        "definitions": [
            {
                "text": "Писать на бумаге или на компьютере — что лучше?",
                "examples": []
            }
        ],
        "topic": "Писать на бумаге или на компьютере — что лучше?",
        "sideA": "Бумага",
        "sideB": "Компьютер",
        "ideasA": [
            "Нет экрана",
            "Просто"
        ],
        "ideasB": [
            "Быстро",
            "Исправляет ошибки"
        ]
    },
    {
        "id": "ru_starter_food_drink_009",
        "word": "Завтрак или Ужин — какой прием пищи важнее?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Завтрак или Ужин — какой прием пищи важнее?",
                "examples": []
            }
        ],
        "topic": "Завтрак или Ужин — какой прием пищи важнее?",
        "sideA": "Завтрак",
        "sideB": "Ужин",
        "ideasA": [
            "Энергия утром",
            "Начать день"
        ],
        "ideasB": [
            "Время с семьей",
            "Много еды"
        ]
    },
    {
        "id": "ru_starter_food_drink_010",
        "word": "Горячая или Холодная — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Горячая или Холодная — что лучше?",
                "examples": []
            }
        ],
        "topic": "Горячая или Холодная — что лучше?",
        "sideA": "Горячая",
        "sideB": "Холодная",
        "ideasA": [
            "Зимой",
            "Вкусно"
        ],
        "ideasB": [
            "Лето",
            "Салат"
        ]
    },
    {
        "id": "ru_starter_food_drink_011",
        "word": "Сладкая или Соленая — что ты предпочитаешь?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Сладкая или Соленая — что ты предпочитаешь?",
                "examples": []
            }
        ],
        "topic": "Сладкая или Соленая — что ты предпочитаешь?",
        "sideA": "Сладкая",
        "sideB": "Соленая",
        "ideasA": [
            "Вкусно",
            "Лакомство"
        ],
        "ideasB": [
            "Настоящая еда",
            "Соль"
        ]
    },
    {
        "id": "ru_starter_food_drink_012",
        "word": "Готовить с родителем или покупать готовую еду — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Готовить с родителем или покупать готовую еду — что лучше?",
                "examples": []
            }
        ],
        "topic": "Готовить с родителем или покупать готовую еду — что лучше?",
        "sideA": "Готовить",
        "sideB": "Готовая еда",
        "ideasA": [
            "Учиться",
            "Весело"
        ],
        "ideasB": [
            "Быстро",
            "Нет беспорядка"
        ]
    },
    {
        "id": "ru_starter_time_001",
        "word": "Рано или Поздно — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "phrase",
        "definitions": [
            {
                "text": "Рано или Поздно — что лучше?",
                "examples": []
            }
        ],
        "topic": "Рано или Поздно — что лучше?",
        "sideA": "Рано",
        "sideB": "Поздно",
        "ideasA": [
            "Тихое утро",
            "Продуктивно"
        ],
        "ideasB": [
            "Творчество",
            "Долго спать"
        ]
    },
    {
        "id": "ru_starter_time_002",
        "word": "Утро или Вечер — какое время дня приятнее?",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "phrase",
        "definitions": [
            {
                "text": "Утро или Вечер — какое время дня приятнее?",
                "examples": []
            }
        ],
        "topic": "Утро или Вечер — какое время дня приятнее?",
        "sideA": "Утро",
        "sideB": "Вечер",
        "ideasA": [
            "Много энергии",
            "Солнце встает"
        ],
        "ideasB": [
            "Отдых",
            "Кино"
        ]
    },
    {
        "id": "ru_starter_time_003",
        "word": "Будни или Выходные — что ты предпочитаешь?",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "phrase",
        "definitions": [
            {
                "text": "Будни или Выходные — что ты предпочитаешь?",
                "examples": []
            }
        ],
        "topic": "Будни или Выходные — что ты предпочитаешь?",
        "sideA": "Будни",
        "sideB": "Выходные",
        "ideasA": [
            "Рутина",
            "Школа"
        ],
        "ideasB": [
            "Весело",
            "Хобби"
        ]
    },
    {
        "id": "ru_starter_furniture_012",
        "word": "Спальня или Гостиная — какую комнату ты предпочитаешь?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Спальня или Гостиная — какую комнату ты предпочитаешь?",
                "examples": []
            }
        ],
        "topic": "Спальня или Гостиная — какую комнату ты предпочитаешь?",
        "sideA": "Спальня",
        "sideB": "Гостиная",
        "ideasA": [
            "Приватно",
            "Твои вещи"
        ],
        "ideasB": [
            "Большой ТВ",
            "Диван"
        ]
    },
    {
        "id": "ru_starter_social_007",
        "word": "Дома или На улице — что веселее?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Дома или На улице — что веселее?",
                "examples": []
            }
        ],
        "topic": "Дома или На улице — что веселее?",
        "sideA": "Дома",
        "sideB": "На улице",
        "ideasA": [
            "Нет дождя",
            "Настолки"
        ],
        "ideasB": [
            "Солнце",
            "Бег"
        ]
    },
    {
        "id": "ru_starter_social_008",
        "word": "ТВ или Книга — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "ТВ или Книга — что лучше?",
                "examples": []
            }
        ],
        "topic": "ТВ или Книга — что лучше?",
        "sideA": "ТВ",
        "sideB": "Книга",
        "ideasA": [
            "Отдых",
            "Визуально"
        ],
        "ideasB": [
            "Воображение",
            "Глубоко"
        ]
    },
    {
        "id": "ru_starter_social_009",
        "word": "Спорт или видеоигры — что веселее?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Спорт или видеоигры — что веселее?",
                "examples": []
            }
        ],
        "topic": "Спорт или видеоигры — что веселее?",
        "sideA": "Спорт",
        "sideB": "Видеоигры",
        "ideasA": [
            "Здоровье",
            "Активно"
        ],
        "ideasB": [
            "Навыки",
            "История"
        ]
    },
    {
        "id": "ru_starter_social_010",
        "word": "Рисование или Пение — какое хобби лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Рисование или Пение — какое хобби лучше?",
                "examples": []
            }
        ],
        "topic": "Рисование или Пение — какое хобби лучше?",
        "sideA": "Рисование",
        "sideB": "Пение",
        "ideasA": [
            "Искусство",
            "Тихо"
        ],
        "ideasB": [
            "Голос",
            "Музыка"
        ]
    },
    {
        "id": "ru_starter_social_011",
        "word": "Одному или Друзья — что веселее?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Одному или Друзья — что веселее?",
                "examples": []
            }
        ],
        "topic": "Одному или Друзья — что веселее?",
        "sideA": "Одному",
        "sideB": "Друзья",
        "ideasA": [
            "Фокус",
            "Творчество"
        ],
        "ideasB": [
            "Делиться",
            "Смеяться"
        ]
    },
    {
        "id": "ru_starter_health_medicine_001",
        "word": "Плавание или Бег — какой спорт вы предпочитаете?",
        "lang": "ru",
        "level": "starter",
        "theme": "health_medicine",
        "form": "phrase",
        "definitions": [
            {
                "text": "Плавание или Бег — какой спорт вы предпочитаете?",
                "examples": []
            }
        ],
        "topic": "Плавание или Бег — какой спорт вы предпочитаете?",
        "sideA": "Плавание",
        "sideB": "Бег",
        "ideasA": [
            "Прохладная вода",
            "Все тело"
        ],
        "ideasB": [
            "Свежий воздух",
            "Просто"
        ]
    },
    {
        "id": "ru_starter_social_012",
        "word": "Музыка или спорт — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Музыка или спорт — что лучше?",
                "examples": []
            }
        ],
        "topic": "Музыка или спорт — что лучше?",
        "sideA": "Музыка",
        "sideB": "Спорт",
        "ideasA": [
            "Слушать",
            "Хорошее настроение"
        ],
        "ideasB": [
            "Активно",
            "Здоровье"
        ]
    },
    {
        "id": "ru_starter_animals_006",
        "word": "Домашние или Дикие — что интереснее?",
        "lang": "ru",
        "level": "starter",
        "theme": "animals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Домашние или Дикие — что интереснее?",
                "examples": []
            }
        ],
        "topic": "Домашние или Дикие — что интереснее?",
        "sideA": "Домашние",
        "sideB": "Дикие",
        "ideasA": [
            "Полезные",
            "Еда"
        ],
        "ideasB": [
            "Джунгли",
            "Захватывающе"
        ]
    },
    {
        "id": "ru_starter_nature_004",
        "word": "Дождь или Солнце — какую погоду ты предпочитаешь?",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "phrase",
        "definitions": [
            {
                "text": "Дождь или Солнце — какую погоду ты предпочитаешь?",
                "examples": []
            }
        ],
        "topic": "Дождь или Солнце — какую погоду ты предпочитаешь?",
        "sideA": "Дождь",
        "sideB": "Солнце",
        "ideasA": [
            "Растения",
            "Уютно"
        ],
        "ideasB": [
            "Пляж",
            "Энергия"
        ]
    },
    {
        "id": "ru_starter_travel_003",
        "word": "Море или Горы — что лучше для отпуска?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Море или Горы — что лучше для отпуска?",
                "examples": []
            }
        ],
        "topic": "Море или Горы — что лучше для отпуска?",
        "sideA": "Море",
        "sideB": "Горы",
        "ideasA": [
            "Плавание",
            "Солнце"
        ],
        "ideasB": [
            "Походы",
            "Цветы"
        ]
    },
    {
        "id": "ru_starter_nature_005",
        "word": "Цветы или Деревья — что красивее?",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "phrase",
        "definitions": [
            {
                "text": "Цветы или Деревья — что красивее?",
                "examples": []
            }
        ],
        "topic": "Цветы или Деревья — что красивее?",
        "sideA": "Цветы",
        "sideB": "Деревья",
        "ideasA": [
            "Цвета",
            "Запахи"
        ],
        "ideasB": [
            "Тень",
            "Кислород"
        ]
    },
    {
        "id": "ru_starter_travel_004",
        "word": "Пешком или Велосипед — что лучше для прогулок?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Пешком или Велосипед — что лучше для прогулок?",
                "examples": []
            }
        ],
        "topic": "Пешком или Велосипед — что лучше для прогулок?",
        "sideA": "Пешком",
        "sideB": "Велосипед",
        "ideasA": [
            "Бесплатно",
            "Просто"
        ],
        "ideasB": [
            "Быстро",
            "Весело"
        ]
    },
    {
        "id": "ru_starter_places_003",
        "word": "Путешествовать одному или с семьей — что веселее?",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "phrase",
        "definitions": [
            {
                "text": "Путешествовать одному или с семьей — что веселее?",
                "examples": []
            }
        ],
        "topic": "Путешествовать одному или с семьей — что веселее?",
        "sideA": "Одному",
        "sideB": "Семья",
        "ideasA": [
            "Твой путь",
            "Тишина"
        ],
        "ideasB": [
            "Общее веселье",
            "Безопасно"
        ]
    },
    {
        "id": "ru_starter_social_013",
        "word": "С ними или Без них — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "С ними или Без них — что лучше?",
                "examples": []
            }
        ],
        "topic": "С ними или Без них — что лучше?",
        "sideA": "С ними",
        "sideB": "Без них",
        "ideasA": [
            "Помогают",
            "Узнать истории"
        ],
        "ideasB": [
            "Больше места",
            "Тихий дом"
        ]
    },
    {
        "id": "ru_starter_food_drink_013",
        "word": "Мама или Папа — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Мама или Папа — что лучше?",
                "examples": []
            }
        ],
        "topic": "Мама или Папа — что лучше?",
        "sideA": "Мама",
        "sideB": "Папа",
        "ideasA": [
            "Вкусная паста",
            "Много любви"
        ],
        "ideasB": [
            "Лучшая пицца",
            "Новые рецепты"
        ]
    },
    {
        "id": "ru_starter_social_014",
        "word": "Математика или ИЗО — что веселее?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Математика или ИЗО — что веселее?",
                "examples": []
            }
        ],
        "topic": "Математика или ИЗО — что веселее?",
        "sideA": "Математика",
        "sideB": "ИЗО",
        "ideasA": [
            "Логика",
            "Числа"
        ],
        "ideasB": [
            "Цвета",
            "Рисование"
        ]
    },
    {
        "id": "ru_starter_technology_003",
        "word": "Бумага или Планшет — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "technology",
        "form": "phrase",
        "definitions": [
            {
                "text": "Бумага или Планшет — что лучше?",
                "examples": []
            }
        ],
        "topic": "Бумага или Планшет — что лучше?",
        "sideA": "Бумага",
        "sideB": "Планшет",
        "ideasA": [
            "Нет экрана",
            "Просто"
        ],
        "ideasB": [
            "Быстро",
            "Бережем бумагу"
        ]
    },
    {
        "id": "ru_starter_nature_006",
        "word": "Парк или Пляж — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "phrase",
        "definitions": [
            {
                "text": "Парк или Пляж — что лучше?",
                "examples": []
            }
        ],
        "topic": "Парк или Пляж — что лучше?",
        "sideA": "Парк",
        "sideB": "Пляж",
        "ideasA": [
            "Зеленая трава",
            "Деревья"
        ],
        "ideasB": [
            "Песок",
            "Море"
        ]
    },
    {
        "id": "ru_starter_animals_007",
        "word": "Кошки или Собаки — какой питомец более надоедливый?",
        "lang": "ru",
        "level": "starter",
        "theme": "animals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Кошки или Собаки — какой питомец более надоедливый?",
                "examples": []
            }
        ],
        "topic": "Кошки или Собаки — какой питомец более надоедливый?",
        "sideA": "Кошки",
        "sideB": "Собаки",
        "ideasA": [
            "Разбитое стекло",
            "Беспорядок"
        ],
        "ideasB": [
            "Нет обуви",
            "Дорого"
        ]
    },
    {
        "id": "ru_starter_food_drink_014",
        "word": "Есть пиццу вилкой или руками — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Есть пиццу вилкой или руками — что лучше?",
                "examples": []
            }
        ],
        "topic": "Есть пиццу вилкой или руками — что лучше?",
        "sideA": "Вилкой",
        "sideB": "Руками",
        "ideasA": [
            "Чистые руки",
            "Элегантно"
        ],
        "ideasB": [
            "Быстро",
            "Настоящий способ"
        ]
    },
    {
        "id": "ru_starter_furniture_013",
        "word": "В носках или Без носков — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "В носках или Без носков — что лучше?",
                "examples": []
            }
        ],
        "topic": "В носках или Без носков — что лучше?",
        "sideA": "В носках",
        "sideB": "Без носков",
        "ideasA": [
            "Теплые ноги",
            "Уютно"
        ],
        "ideasB": [
            "Свежая",
            "Удобно"
        ]
    },
    {
        "id": "ru_starter_work_011",
        "word": "Полный день или Неполный день — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Полный день или Неполный день — что лучше?",
                "examples": []
            }
        ],
        "topic": "Полный день или Неполный день — что лучше?",
        "sideA": "Полный день",
        "sideB": "Неполный день",
        "ideasA": [
            "Деньги",
            "Проекты"
        ],
        "ideasB": [
            "Свободное время",
            "Меньше стресса"
        ]
    },
    {
        "id": "ru_starter_work_012",
        "word": "Любовь или Деньги — что важнее?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Любовь или Деньги — что важнее?",
                "examples": []
            }
        ],
        "topic": "Любовь или Деньги — что важнее?",
        "sideA": "Любовь",
        "sideB": "Деньги",
        "ideasA": [
            "Счастлив",
            "Меньше стресса"
        ],
        "ideasB": [
            "Дом",
            "Без проблем"
        ]
    },
    {
        "id": "ru_starter_places_004",
        "word": "Большой город или маленький город — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "phrase",
        "definitions": [
            {
                "text": "Большой город или маленький город — что лучше?",
                "examples": []
            }
        ],
        "topic": "Большой город или маленький город — что лучше?",
        "sideA": "Большой город",
        "sideB": "Маленький город",
        "ideasA": [
            "Магазины",
            "Кинотеатры"
        ],
        "ideasB": [
            "Дружелюбно",
            "Тихо"
        ]
    },
    {
        "id": "ru_starter_social_015",
        "word": "Дети или Без детей — какая жизнь лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Дети или Без детей — какая жизнь лучше?",
                "examples": []
            }
        ],
        "topic": "Дети или Без детей — какая жизнь лучше?",
        "sideA": "Дети",
        "sideB": "Без детей",
        "ideasA": [
            "Семья",
            "Весело"
        ],
        "ideasB": [
            "Свободное время",
            "Путешествия"
        ]
    },
    {
        "id": "ru_starter_social_016",
        "word": "Заниматься спортом каждый день или отдыхать — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Заниматься спортом каждый день или отдыхать — что лучше?",
                "examples": []
            }
        ],
        "topic": "Заниматься спортом каждый день или отдыхать — что лучше?",
        "sideA": "Спорт",
        "sideB": "Отдых",
        "ideasA": [
            "Сильное тело",
            "Энергия"
        ],
        "ideasB": [
            "Восстановление",
            "Расслабление"
        ]
    },
    {
        "id": "ru_starter_furniture_014",
        "word": "Идти к врачу или подождать — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Идти к врачу или подождать — что лучше?",
                "examples": []
            }
        ],
        "topic": "Идти к врачу или подождать — что лучше?",
        "sideA": "Врач",
        "sideB": "Подождать",
        "ideasA": [
            "Быстрая помощь",
            "Безопасно"
        ],
        "ideasB": [
            "Экономия денег",
            "Естественно"
        ]
    },
    {
        "id": "ru_starter_health_medicine_002",
        "word": "8 часов или Меньше — что реалистичнее для взрослых?",
        "lang": "ru",
        "level": "starter",
        "theme": "health_medicine",
        "form": "phrase",
        "definitions": [
            {
                "text": "8 часов или Меньше — что реалистичнее для взрослых?",
                "examples": []
            }
        ],
        "topic": "8 часов или Меньше — что реалистичнее для взрослых?",
        "sideA": "8 часов",
        "sideB": "Меньше",
        "ideasA": [
            "Здоровье",
            "Отдохнувший"
        ],
        "ideasB": [
            "Больше работы",
            "Играть"
        ]
    },
    {
        "id": "ru_starter_furniture_015",
        "word": "Онлайн или Магазин — что ты предпочитаешь?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Онлайн или Магазин — что ты предпочитаешь?",
                "examples": []
            }
        ],
        "topic": "Онлайн или Магазин — что ты предпочитаешь?",
        "sideA": "Онлайн",
        "sideB": "Магазин",
        "ideasA": [
            "Просто",
            "Быстро"
        ],
        "ideasB": [
            "Видеть товары",
            "Пробовать"
        ]
    },
    {
        "id": "ru_starter_furniture_016",
        "word": "Дорогие или Дешевые — что выгоднее?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Дорогие или Дешевые — что выгоднее?",
                "examples": []
            }
        ],
        "topic": "Дорогие или Дешевые — что выгоднее?",
        "sideA": "Дорогие",
        "sideB": "Дешевые",
        "ideasA": [
            "Качество",
            "Долговечно"
        ],
        "ideasB": [
            "Деньги",
            "Много вещей"
        ]
    },
    {
        "id": "ru_starter_furniture_017",
        "word": "Новое или Б/у — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Новое или Б/у — что лучше?",
                "examples": []
            }
        ],
        "topic": "Новое или Б/у — что лучше?",
        "sideA": "Новое",
        "sideB": "Б/у",
        "ideasA": [
            "Чистая кухня",
            "Модное"
        ],
        "ideasB": [
            "Дешево",
            "Природа"
        ]
    },
    {
        "id": "ru_starter_travel_005",
        "word": "Семья или Друзья — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Семья или Друзья — что лучше?",
                "examples": []
            }
        ],
        "topic": "Семья или Друзья — что лучше?",
        "sideA": "Семья",
        "sideB": "Друзья",
        "ideasA": [
            "Безопасно",
            "Без затрат"
        ],
        "ideasB": [
            "Захватывающе",
            "Время праздника"
        ]
    },
    {
        "id": "ru_starter_places_005",
        "word": "Остаться в своей стране или поехать за границу — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "phrase",
        "definitions": [
            {
                "text": "Остаться в своей стране или поехать за границу — что лучше?",
                "examples": []
            }
        ],
        "topic": "Остаться в своей стране или поехать за границу — что лучше?",
        "sideA": "Моя страна",
        "sideB": "За границу",
        "ideasA": [
            "Просто",
            "Без самолета"
        ],
        "ideasB": [
            "Новая культура",
            "Приключение"
        ]
    },
    {
        "id": "ru_starter_work_013",
        "word": "Сразу или Потом — что профессиональнее?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Сразу или Потом — что профессиональнее?",
                "examples": []
            }
        ],
        "topic": "Сразу или Потом — что профессиональнее?",
        "sideA": "Сразу",
        "sideB": "Потом",
        "ideasA": [
            "Быстро",
            "Профессионально"
        ],
        "ideasB": [
            "Думать",
            "Без спешки"
        ]
    },
    {
        "id": "ru_starter_furniture_018",
        "word": "Сразу или До завтра — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Сразу или До завтра — что лучше?",
                "examples": []
            }
        ],
        "topic": "Сразу или До завтра — что лучше?",
        "sideA": "Сразу",
        "sideB": "До завтра",
        "ideasA": [
            "Чистая кухня",
            "Утро"
        ],
        "ideasB": [
            "Отдых",
            "Потом"
        ]
    },
    {
        "id": "ru_starter_work_014",
        "word": "Всегда приходить раньше или всегда на пять минут позже — что хуже?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Всегда приходить раньше или всегда на пять минут позже — что хуже?",
                "examples": []
            }
        ],
        "topic": "Всегда приходить раньше или всегда на пять минут позже — что хуже?",
        "sideA": "Раньше",
        "sideB": "Позже",
        "ideasA": [
            "Долго ждать",
            "Скучно"
        ],
        "ideasB": [
            "Невежливо",
            "Пропустить начало"
        ]
    },
    {
        "id": "ru_starter_work_015",
        "word": "Очень организованный стол или беспорядок на столе — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Очень организованный стол или беспорядок на столе — что лучше?",
                "examples": []
            }
        ],
        "topic": "Очень организованный стол или беспорядок на столе — что лучше?",
        "sideA": "Организованный",
        "sideB": "Беспорядок",
        "ideasA": [
            "Находить вещи",
            "Концентрация"
        ],
        "ideasB": [
            "Творчески",
            "Быстро"
        ]
    },
    {
        "id": "ru_starter_food_drink_015",
        "word": "О работе или Без работы — какое правило лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "О работе или Без работы — какое правило лучше?",
                "examples": []
            }
        ],
        "topic": "О работе или Без работы — какое правило лучше?",
        "sideA": "О работе",
        "sideB": "Без работы",
        "ideasA": [
            "Проблемы",
            "Делиться"
        ],
        "ideasB": [
            "Отдых",
            "Время с семьей"
        ]
    },
    {
        "id": "ru_starter_work_016",
        "word": "Утро или Днем — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Утро или Днем — что лучше?",
                "examples": []
            }
        ],
        "topic": "Утро или Днем — что лучше?",
        "sideA": "Утро",
        "sideB": "Днем",
        "ideasA": [
            "Свободный день",
            "Рутина"
        ],
        "ideasB": [
            "Долго спать",
            "Тихое утро"
        ]
    },
    {
        "id": "ru_starter_food_drink_016",
        "word": "Дом или Ресторан — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Дом или Ресторан — что лучше?",
                "examples": []
            }
        ],
        "topic": "Дом или Ресторан — что лучше?",
        "sideA": "Дом",
        "sideB": "Ресторан",
        "ideasA": [
            "Дешевле",
            "Полезнее"
        ],
        "ideasB": [
            "Не нужно мыть",
            "Профессионалы"
        ]
    },
    {
        "id": "ru_starter_food_drink_017",
        "word": "Пицца или Паста — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Пицца или Паста — что лучше?",
                "examples": []
            }
        ],
        "topic": "Пицца или Паста — что лучше?",
        "sideA": "Пицца",
        "sideB": "Паста",
        "ideasA": [
            "Можно делиться",
            "Много сыра"
        ],
        "ideasB": [
            "Много видов",
            "Вкусный соус"
        ]
    },
    {
        "id": "ru_starter_food_drink_018",
        "word": "Мороженое или Торт — какой десерт лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Мороженое или Торт — какой десерт лучше?",
                "examples": []
            }
        ],
        "topic": "Мороженое или Торт — какой десерт лучше?",
        "sideA": "Мороженое",
        "sideB": "Торт",
        "ideasA": [
            "Холодная",
            "Свежая"
        ],
        "ideasB": [
            "Теплый",
            "День рождения"
        ]
    },
    {
        "id": "ru_starter_nature_007",
        "word": "Короткие дни или Длинные дни — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "phrase",
        "definitions": [
            {
                "text": "Короткие дни или Длинные дни — что лучше?",
                "examples": []
            }
        ],
        "topic": "Короткие дни или Длинные дни — что лучше?",
        "sideA": "Короткие дни",
        "sideB": "Длинные дни",
        "ideasA": [
            "Уютные вечера",
            "Больше спать"
        ],
        "ideasB": [
            "Больше солнца",
            "Играть outside"
        ]
    },
    {
        "id": "ru_starter_travel_006",
        "word": "Самолет или Поезд — что веселее?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Самолет или Поезд — что веселее?",
                "examples": []
            }
        ],
        "topic": "Самолет или Поезд — что веселее?",
        "sideA": "Самолет",
        "sideB": "Поезд",
        "ideasA": [
            "Быстро",
            "Облака"
        ],
        "ideasB": [
            "Природа",
            "Больше места"
        ]
    },
    {
        "id": "ru_starter_food_drink_019",
        "word": "Завтрак или Без завтрака — что лучше для тебя?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Завтрак или Без завтрака — что лучше для тебя?",
                "examples": []
            }
        ],
        "topic": "Завтрак или Без завтрака — что лучше для тебя?",
        "sideA": "Завтрак",
        "sideB": "Без завтрака",
        "ideasA": [
            "Энергия утром",
            "Хорошее начало"
        ],
        "ideasB": [
            "Экономит время",
            "Нет голода"
        ]
    },
    {
        "id": "ru_starter_time_004",
        "word": "Утро или Ночь — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "phrase",
        "definitions": [
            {
                "text": "Утро или Ночь — что лучше?",
                "examples": []
            }
        ],
        "topic": "Утро или Ночь — что лучше?",
        "sideA": "Утро",
        "sideB": "Ночь",
        "ideasA": [
            "Солнце",
            "Продуктивно"
        ],
        "ideasB": [
            "Творчество",
            "Без шума"
        ]
    },
    {
        "id": "ru_starter_travel_007",
        "word": "Короткий или Долгий — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Короткий или Долгий — что лучше?",
                "examples": []
            }
        ],
        "topic": "Короткий или Долгий — что лучше?",
        "sideA": "Короткий",
        "sideB": "Долгий",
        "ideasA": [
            "Легкое планирование",
            "Много поездок"
        ],
        "ideasB": [
            "Больше отдыхать",
            "Увидеть больше"
        ]
    },
    {
        "id": "ru_starter_technology_004",
        "word": "Звонок или Сообщение — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "technology",
        "form": "phrase",
        "definitions": [
            {
                "text": "Звонок или Сообщение — что лучше?",
                "examples": []
            }
        ],
        "topic": "Звонок или Сообщение — что лучше?",
        "sideA": "Звонок",
        "sideB": "Сообщение",
        "ideasA": [
            "Слышать голос",
            "Быстро"
        ],
        "ideasB": [
            "Подумать перед",
            "Потом"
        ]
    },
    {
        "id": "ru_starter_time_005",
        "word": "Понедельник или Пятница — какой день лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "phrase",
        "definitions": [
            {
                "text": "Понедельник или Пятница — какой день лучше?",
                "examples": []
            }
        ],
        "topic": "Понедельник или Пятница — какой день лучше?",
        "sideA": "Понедельник",
        "sideB": "Пятница",
        "ideasA": [
            "Проекты",
            "Новая неделя"
        ],
        "ideasB": [
            "Выходные",
            "Время праздника"
        ]
    },
    {
        "id": "ru_starter_nature_008",
        "word": "Слишком жарко или Слишком холодно — что хуже?",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "phrase",
        "definitions": [
            {
                "text": "Слишком жарко или Слишком холодно — что хуже?",
                "examples": []
            }
        ],
        "topic": "Слишком жарко или Слишком холодно — что хуже?",
        "sideA": "Слишком жарко",
        "sideB": "Слишком холодно",
        "ideasA": [
            "Нельзя спать",
            "Солнце"
        ],
        "ideasB": [
            "Одежда",
            "Мороз"
        ]
    },
    {
        "id": "ru_starter_travel_008",
        "word": "Окно или Проход — что лучше в самолете?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Окно или Проход — что лучше в самолете?",
                "examples": []
            }
        ],
        "topic": "Окно или Проход — что лучше в самолете?",
        "sideA": "Окно",
        "sideB": "Проход",
        "ideasA": [
            "Облака",
            "Фото"
        ],
        "ideasB": [
            "Зарядка",
            "Больше места"
        ]
    },
    {
        "id": "ru_starter_work_017",
        "word": "Люди или Одному — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Люди или Одному — что лучше?",
                "examples": []
            }
        ],
        "topic": "Люди или Одному — что лучше?",
        "sideA": "Люди",
        "sideB": "Одному",
        "ideasA": [
            "Больше идей",
            "Весело"
        ],
        "ideasB": [
            "Фокус",
            "Быстро"
        ]
    },
    {
        "id": "ru_starter_furniture_019",
        "word": "Big city или Small town — где лучше взрослому?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Big city или Small town — где лучше взрослому?",
                "examples": []
            }
        ],
        "topic": "Big city или Small town — где лучше взрослому?",
        "sideA": "Big city",
        "sideB": "Small town",
        "ideasA": [
            "Рабочие места",
            "Культура"
        ],
        "ideasB": [
            "Дружелюбно",
            "Дешево"
        ]
    },
    {
        "id": "ru_starter_food_drink_020",
        "word": "Дома или В кафе — что лучше для жизни?",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "phrase",
        "definitions": [
            {
                "text": "Дома или В кафе — что лучше для жизни?",
                "examples": []
            }
        ],
        "topic": "Дома или В кафе — что лучше для жизни?",
        "sideA": "Дома",
        "sideB": "В кафе",
        "ideasA": [
            "Дешевле",
            "Полезнее"
        ],
        "ideasB": [
            "Экономит время",
            "Без беспорядка"
        ]
    },
    {
        "id": "ru_starter_furniture_020",
        "word": "Снимать или Купить — что лучше для молодежи?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Снимать или Купить — что лучше для молодежи?",
                "examples": []
            }
        ],
        "topic": "Снимать или Купить — что лучше для молодежи?",
        "sideA": "Снимать",
        "sideB": "Купить",
        "ideasA": [
            "Дешевле",
            "Никакой ответственности"
        ],
        "ideasB": [
            "Инвестиция",
            "Больше места"
        ]
    },
    {
        "id": "ru_starter_health_medicine_003",
        "word": "Зарядка или Отдых — что лучше для здоровья?",
        "lang": "ru",
        "level": "starter",
        "theme": "health_medicine",
        "form": "phrase",
        "definitions": [
            {
                "text": "Зарядка или Отдых — что лучше для здоровья?",
                "examples": []
            }
        ],
        "topic": "Зарядка или Отдых — что лучше для здоровья?",
        "sideA": "Зарядка",
        "sideB": "Отдых",
        "ideasA": [
            "Крепкое тело",
            "Энергия"
        ],
        "ideasB": [
            "Восстановление",
            "Отдых"
        ]
    },
    {
        "id": "ru_starter_health_medicine_004",
        "word": "Врач или Ждать — что лучше, если ты заболел?",
        "lang": "ru",
        "level": "starter",
        "theme": "health_medicine",
        "form": "phrase",
        "definitions": [
            {
                "text": "Врач или Ждать — что лучше, если ты заболел?",
                "examples": []
            }
        ],
        "topic": "Врач или Ждать — что лучше, если ты заболел?",
        "sideA": "Врач",
        "sideB": "Ждать",
        "ideasA": [
            "Быстрая помощь",
            "Безопасно"
        ],
        "ideasB": [
            "Экономить деньги",
            "Натурально"
        ]
    },
    {
        "id": "ru_starter_travel_009",
        "word": "Пешком или Машина — что лучше для здоровья?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Пешком или Машина — что лучше для здоровья?",
                "examples": []
            }
        ],
        "topic": "Пешком или Машина — что лучше для здоровья?",
        "sideA": "Пешком",
        "sideB": "Машина",
        "ideasA": [
            "Упражнения",
            "Свежий воздух"
        ],
        "ideasB": [
            "Удобно",
            "Быстро"
        ]
    },
    {
        "id": "ru_starter_social_017",
        "word": "ТВ дома или Гулять — какой вечер лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "ТВ дома или Гулять — какой вечер лучше?",
                "examples": []
            }
        ],
        "topic": "ТВ дома или Гулять — какой вечер лучше?",
        "sideA": "ТВ дома",
        "sideB": "Гулять",
        "ideasA": [
            "Удобно",
            "Дешево"
        ],
        "ideasB": [
            "Друзья",
            "Новые места"
        ]
    },
    {
        "id": "ru_starter_travel_010",
        "word": "Своя страна или За границу — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Своя страна или За границу — что лучше?",
                "examples": []
            }
        ],
        "topic": "Своя страна или За границу — что лучше?",
        "sideA": "Своя страна",
        "sideB": "За границу",
        "ideasA": [
            "Просто",
            "Без самолета"
        ],
        "ideasB": [
            "Культура",
            "Приключения"
        ]
    },
    {
        "id": "ru_starter_social_018",
        "word": "Спорт или Чтение — какое хобби лучше для взрослых?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Спорт или Чтение — какое хобби лучше для взрослых?",
                "examples": []
            }
        ],
        "topic": "Спорт или Чтение — какое хобби лучше для взрослых?",
        "sideA": "Спорт",
        "sideB": "Чтение",
        "ideasA": [
            "Здоровье",
            "Активно"
        ],
        "ideasB": [
            "Отдых",
            "Знания"
        ]
    },
    {
        "id": "ru_starter_social_019",
        "word": "Друзья или Одиночество — что важнее?",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Друзья или Одиночество — что важнее?",
                "examples": []
            }
        ],
        "topic": "Друзья или Одиночество — что важнее?",
        "sideA": "Друзья",
        "sideB": "Одиночество",
        "ideasA": [
            "Весело",
            "Воспоминания"
        ],
        "ideasB": [
            "Покой",
            "Хобби"
        ]
    },
    {
        "id": "ru_starter_work_018",
        "word": "Порядок или Беспорядок — кто продуктивнее?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Порядок или Беспорядок — кто продуктивнее?",
                "examples": []
            }
        ],
        "topic": "Порядок или Беспорядок — кто продуктивнее?",
        "sideA": "Порядок",
        "sideB": "Беспорядок",
        "ideasA": [
            "Найти вещи",
            "Фокус"
        ],
        "ideasB": [
            "Творчество",
            "Быстро"
        ]
    },
    {
        "id": "ru_starter_nature_009",
        "word": "Лето или Зимой — какое время года лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "phrase",
        "definitions": [
            {
                "text": "Лето или Зимой — какое время года лучше?",
                "examples": []
            }
        ],
        "topic": "Лето или Зимой — какое время года лучше?",
        "sideA": "Лето",
        "sideB": "Зимой",
        "ideasA": [
            "Солнце",
            "Пляж"
        ],
        "ideasB": [
            "Снег",
            "Можно на лыжи"
        ]
    },
    {
        "id": "ru_starter_nature_010",
        "word": "Короткие дни или Долгие дни — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "phrase",
        "definitions": [
            {
                "text": "Короткие дни или Долгие дни — что лучше?",
                "examples": []
            }
        ],
        "topic": "Короткие дни или Долгие дни — что лучше?",
        "sideA": "Короткие дни",
        "sideB": "Долгие дни",
        "ideasA": [
            "Уютные ночи",
            "Больше сна"
        ],
        "ideasB": [
            "Больше солнца",
            "Игры на улице"
        ]
    },
    {
        "id": "ru_starter_travel_011",
        "word": "Зарядка или Велосипед — на чем лучше передвигаться?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Зарядка или Велосипед — на чем лучше передвигаться?",
                "examples": []
            }
        ],
        "topic": "Зарядка или Велосипед — на чем лучше передвигаться?",
        "sideA": "Зарядка",
        "sideB": "Велосипед",
        "ideasA": [
            "Бесплатно",
            "Просто"
        ],
        "ideasB": [
            "Быстро",
            "Весело"
        ]
    },
    {
        "id": "ru_starter_time_006",
        "word": "Утро или Вечер — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "phrase",
        "definitions": [
            {
                "text": "Утро или Вечер — что лучше?",
                "examples": []
            }
        ],
        "topic": "Утро или Вечер — что лучше?",
        "sideA": "Утро",
        "sideB": "Вечер",
        "ideasA": [
            "Проснуться",
            "Начать свежим"
        ],
        "ideasB": [
            "Расслабляет",
            "Чистая кровать"
        ]
    },
    {
        "id": "ru_starter_travel_012",
        "word": "Машина или Автобус — на чем лучше ехать на работу?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Машина или Автобус — на чем лучше ехать на работу?",
                "examples": []
            }
        ],
        "topic": "Машина или Автобус — на чем лучше ехать на работу?",
        "sideA": "Машина",
        "sideB": "Автобус",
        "ideasA": [
            "Приватно",
            "Быстро"
        ],
        "ideasB": [
            "Дешево",
            "Природа"
        ]
    },
    {
        "id": "ru_starter_travel_013",
        "word": "Зарядка или Машина — что лучше в городе?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Зарядка или Машина — что лучше в городе?",
                "examples": []
            }
        ],
        "topic": "Зарядка или Машина — что лучше в городе?",
        "sideA": "Зарядка",
        "sideB": "Машина",
        "ideasA": [
            "Бесплатно",
            "Зарядка"
        ],
        "ideasB": [
            "Нет дождя",
            "Удобно"
        ]
    },
    {
        "id": "ru_starter_time_007",
        "word": "Утро или Вечер — что правильно?",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "phrase",
        "definitions": [
            {
                "text": "Утро или Вечер — что правильно?",
                "examples": []
            }
        ],
        "topic": "Утро или Вечер — что правильно?",
        "sideA": "Утро",
        "sideB": "Вечер",
        "ideasA": [
            "Проснуться",
            "Начать свежим"
        ],
        "ideasB": [
            "Расслабляет",
            "Чистая кровать"
        ]
    },
    {
        "id": "ru_starter_work_019",
        "word": "Офис или Дом — что ты предпочитаешь?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Офис или Дом — что ты предпочитаешь?",
                "examples": []
            }
        ],
        "topic": "Офис или Дом — что ты предпочитаешь?",
        "sideA": "Офис",
        "sideB": "Дом",
        "ideasA": [
            "Коллеги",
            "Фокус"
        ],
        "ideasB": [
            "Удобно",
            "Не надо ехать"
        ]
    },
    {
        "id": "ru_starter_travel_014",
        "word": "Короткий или Долгий — что приемлеμεε?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Короткий или Долгий — что приемлеμεε?",
                "examples": []
            }
        ],
        "topic": "Короткий или Долгий — что приемлеμεε?",
        "sideA": "Короткий",
        "sideB": "Долгий",
        "ideasA": [
            "Свободное время",
            "Меньше стресса"
        ],
        "ideasB": [
            "Музыка",
            "Чтение"
        ]
    },
    {
        "id": "ru_starter_furniture_021",
        "word": "Одному или Напарник — что лучше?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Одному или Напарник — что лучше?",
                "examples": []
            }
        ],
        "topic": "Одному или Напарник — что лучше?",
        "sideA": "Одному",
        "sideB": "Напарник",
        "ideasA": [
            "Покой",
            "Правила"
        ],
        "ideasB": [
            "Делить жизнь",
            "Помощь"
        ]
    },
    {
        "id": "ru_starter_travel_015",
        "word": "Зарядка или Машина — что лучше для здоровья?",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "phrase",
        "definitions": [
            {
                "text": "Зарядка или Машина — что лучше для здоровья?",
                "examples": []
            }
        ],
        "topic": "Зарядка или Машина — что лучше для здоровья?",
        "sideA": "Зарядка",
        "sideB": "Машина",
        "ideasA": [
            "Зарядка",
            "Свежий воздух"
        ],
        "ideasB": [
            "Удобно",
            "Быстро"
        ]
    },
    {
        "id": "ru_starter_work_020",
        "word": "Копить или Тратить — что мудрее?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Копить или Тратить — что мудрее?",
                "examples": []
            }
        ],
        "topic": "Копить или Тратить — что мудрее?",
        "sideA": "Копить",
        "sideB": "Тратить",
        "ideasA": [
            "Безопасность",
            "Покой"
        ],
        "ideasB": [
            "Счастлив сегодня",
            "Воспоминания"
        ]
    },
    {
        "id": "ru_starter_furniture_022",
        "word": "Дорого или Дешево — что выгоднее?",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "phrase",
        "definitions": [
            {
                "text": "Дорого или Дешево — что выгоднее?",
                "examples": []
            }
        ],
        "topic": "Дорого или Дешево — что выгоднее?",
        "sideA": "Дорого",
        "sideB": "Дешево",
        "ideasA": [
            "Качество",
            "Долго служат"
        ],
        "ideasB": [
            "Деньги",
            "Много вещей"
        ]
    },
    {
        "id": "ru_starter_work_021",
        "word": "Рано или Поздно — что хуже на работе?",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "phrase",
        "definitions": [
            {
                "text": "Рано или Поздно — что хуже на работе?",
                "examples": []
            }
        ],
        "topic": "Рано или Поздно — что хуже на работе?",
        "sideA": "Рано",
        "sideB": "Поздно",
        "ideasA": [
            "Долго ждать",
            "Скучно"
        ],
        "ideasB": [
            "Невежливо",
            "Пропустить старт"
        ]
    }
];
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();
