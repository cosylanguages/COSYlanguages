(function() {
    const speakingData = {
    "ru": {
        "opinionArena": [
            {
                "text": "Является ли завтрак самым важным приемом пищи?",
                "level": "baby",
                "theme": "basic_foods_A0"
            },
            {
                "text": "Собаки лучше кошек в качестве питомцев?",
                "level": "starter",
                "theme": "leisure_activities_A1"
            }
        ],
        "criticsCorner": [],
        "debates": [
            {
                "topic": "Кофе или чай — какой напиток лучше утром?",
                "sideA": "Кофе",
                "sideB": "Чай",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ресторан или домашняя еда — что лучше?",
                "sideA": "Ресторан",
                "sideB": "Домашняя еда",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Завтрак или без завтрака — что лучше для вас?",
                "sideA": "Завтрак",
                "sideB": "Без завтрака",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Вода или сок — что полезнее?",
                "sideA": "Вода",
                "sideB": "Сок",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мясо или овощи — что важнее в еде?",
                "sideA": "Мясо",
                "sideB": "Овощи",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дом или квартира — где лучше жить?",
                "sideA": "Дом",
                "sideB": "Квартира",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Город или деревня — где лучше жить?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Наличные или карта — чем лучше платить?",
                "sideA": "Наличные",
                "sideB": "Карта",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Копить деньги или тратить их — что лучше?",
                "sideA": "Копить",
                "sideB": "Тратить",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Аренда или покупка — что лучше?",
                "sideA": "Аренда",
                "sideB": "Покупка",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа утром или работа вечером — что лучше?",
                "sideA": "Утром",
                "sideB": "Вечером",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Машина или автобус — на чем лучше ездить на работу?",
                "sideA": "Машина",
                "sideB": "Автобус",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ходить пешком или водить машину — что лучше в городе?",
                "sideA": "Пешком",
                "sideB": "Машина",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Офис или дом — где лучше работать?",
                "sideA": "Офис",
                "sideB": "Дом",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жаворонок или сова — что лучше?",
                "sideA": "Жаворонок",
                "sideB": "Сова",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Лето или зима — какое время года лучше?",
                "sideA": "Лето",
                "sideB": "Зима",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Короткий отпуск или длинный отпуск — что лучше?",
                "sideA": "Короткий",
                "sideB": "Длинный",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Телефонный звонок или сообщение — что лучше?",
                "sideA": "Звонок",
                "sideB": "Сообщение",
                "level": "starter",
                "theme": "basic_technology_devices_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Душ утром или душ вечером — как правильно?",
                "sideA": "Утром",
                "sideB": "Вечером",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Понедельник или пятница — какой день лучше?",
                "sideA": "Понедельник",
                "sideB": "Пятница",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Слишком жарко или слишком холодно — что хуже?",
                "sideA": "Жарко",
                "sideB": "Холодно",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Место у окна или у прохода — что лучше в самолете?",
                "sideA": "У окна",
                "sideB": "У прохода",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Красный против синего — какой цвет лучше?",
                "sideA": "Красный",
                "sideB": "Синий",
                "level": "starter",
                "theme": "colours_patterns_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Желтый против зеленого — какой цвет более радостный?",
                "sideA": "Желтый",
                "sideB": "Зеленый",
                "level": "starter",
                "theme": "colours_patterns_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Черный против белого — какой цвет вы предпочитаете?",
                "sideA": "Черный",
                "sideB": "Белый",
                "level": "starter",
                "theme": "colours_patterns_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Розовый против фиолетового — какой цвет приятнее?",
                "sideA": "Розовый",
                "sideB": "Фиолетовый",
                "level": "starter",
                "theme": "colours_patterns_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Круг против квадрата — какая фигура полезнее?",
                "sideA": "Круг",
                "sideB": "Квадрат",
                "level": "starter",
                "theme": "numbers_0_9_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Большие против маленьких чисел — какие веселее?",
                "sideA": "Большие",
                "sideB": "Маленькие",
                "level": "starter",
                "theme": "numbers_0_9_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Треугольник против прямоугольника — какая фигура лучше?",
                "sideA": "Треугольник",
                "sideB": "Прямоугольник",
                "level": "starter",
                "theme": "numbers_0_9_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мяч против куклы — какая игрушка лучше?",
                "sideA": "Мяч",
                "sideB": "Кукла",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Карандаш против ручки — чем лучше писать?",
                "sideA": "Карандаш",
                "sideB": "Ручка",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Книга против картинки — по чему лучше учиться?",
                "sideA": "Книга",
                "sideB": "Картинка",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стул против пола — на чем лучше сидеть?",
                "sideA": "Стул",
                "sideB": "Пол",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кошка против собаки — какое животное лучше?",
                "sideA": "Кошка",
                "sideB": "Собака",
                "level": "starter",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рыба против птицы — кто лучший питомец?",
                "sideA": "Рыба",
                "sideB": "Птица",
                "level": "starter",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Большие против маленьких животных — какие милее?",
                "sideA": "Большие",
                "sideB": "Маленькие",
                "level": "starter",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кролик против хомяка — кто милее?",
                "sideA": "Кролик",
                "sideB": "Хомяк",
                "level": "starter",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Вода против сока — что лучше пить?",
                "sideA": "Вода",
                "sideB": "Сок",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Яблоко против банана — какой фрукт лучше?",
                "sideA": "Яблоко",
                "sideB": "Банан",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Хлеб против риса — что лучше есть?",
                "sideA": "Хлеб",
                "sideB": "Рис",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Молоко против воды — что вы предпочитаете?",
                "sideA": "Молоко",
                "sideB": "Вода",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Розовый против оранжевого — какой цвет приятнее?",
                "sideA": "Розовый",
                "sideB": "Оранжевый",
                "level": "starter",
                "theme": "colours_patterns_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Число 1 против числа 10 — какое число лучше?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_0_9_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стул против дивана — что удобнее?",
                "sideA": "Стул",
                "sideB": "Диван",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сумка против коробки — что полезнее?",
                "sideA": "Сумка",
                "sideB": "Коробка",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Лев против слона — какое животное лучше?",
                "sideA": "Лев",
                "sideB": "Слон",
                "level": "starter",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Шоколад против конфет — что лучше?",
                "sideA": "Шоколад",
                "sideB": "Конфеты",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ложка против вилки — что лучше?",
                "sideA": "Ложка",
                "sideB": "Вилка",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Шапка против обуви — что важнее?",
                "sideA": "Шапка",
                "sideB": "Обувь",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Солнце против луны — что лучше?",
                "sideA": "Солнце",
                "sideB": "Луна",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Носки против без носков — что приятнее?",
                "sideA": "Носки",
                "sideB": "Без носков",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Мое любимое воспоминание из детства",
                "level": "starter",
                "theme": "immediate_family_A0"
            },
            {
                "topic": "Работа моей мечты и почему",
                "level": "starter",
                "theme": "workplace_basics_A1"
            }
        ]
    }
};

    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["ru"]) window.speakingData["ru"] = {};

    for (const cat in speakingData["ru"]) {
        if (!window.speakingData["ru"][cat]) window.speakingData["ru"][cat] = [];
        window.speakingData["ru"][cat].push(...speakingData["ru"][cat]);
    }
})();
