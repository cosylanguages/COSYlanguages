(function() {
    const speakingData = {
    "ru": {
        "opinionArena": [
            {
                "text": "Является ли завтрак самым важным приемом пищи?",
                "level": "starter",
                "theme": "basic_foods_A1"
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
                "topic": "Кофе или чай — что лучше?",
                "sideA": "Кофе",
                "sideB": "Чай",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Дает энергию", "Приятно пахнет"],
                "ideasB": ["Очень полезно", "Помогает расслабиться"]
            },
            {
                "topic": "Ресторан или домашняя еда — что лучше?",
                "sideA": "Ресторан",
                "sideB": "Домашняя еда",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Не нужно мыть посуду", "Профессиональные повара"],
                "ideasB": ["Это дешевле", "Это полезнее"]
            },
            {
                "topic": "Завтрак или без завтрака — что лучше?",
                "sideA": "Завтрак",
                "sideB": "Без завтрака",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Энергия на утро", "Хорошее начало дня"],
                "ideasB": ["Экономит время", "Я не голоден"]
            },
            {
                "topic": "Вода или сок — что лучше?",
                "sideA": "Вода",
                "sideB": "Сок",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Ноль калорий", "Очень полезно"],
                "ideasB": ["Сладкий вкус", "Хорошие витамины"]
            },
            {
                "topic": "Мясо или овощи — что важнее?",
                "sideA": "Мясо",
                "sideB": "Овощи",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Много белка", "Очень вкусно"],
                "ideasB": ["Много витаминов", "Полезно для здоровья"]
            },
            {
                "topic": "Дом или квартира — что лучше?",
                "sideA": "Дом",
                "sideB": "Квартира",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Больше места", "Свой сад"],
                "ideasB": ["Это безопаснее", "Легко убирать"]
            },
            {
                "topic": "Город или деревня — что лучше?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Магазины и кино", "Много людей"],
                "ideasB": ["Тихое место", "Чистый воздух"]
            },
            {
                "topic": "Наличные или карта — что лучше?",
                "sideA": "Наличные",
                "sideB": "Карта",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Легко видеть деньги", "Не нужны технологии"],
                "ideasB": ["Очень быстро", "Безопасно носить"]
            },
            {
                "topic": "Копить или тратить — что лучше?",
                "sideA": "Копить",
                "sideB": "Тратить",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Хорошо для будущего", "Купить большие вещи"],
                "ideasB": ["Весело сейчас", "Помогает магазинам"]
            },
            {
                "topic": "Аренда или покупка — что лучше?",
                "sideA": "Аренда",
                "sideB": "Покупка",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Это гибко", "Не нужен ремонт"],
                "ideasB": ["Это ваше", "Хорошая инвестиция"]
            },
            {
                "topic": "Работа утром или работа вечером — что лучше?",
                "sideA": "Утром",
                "sideB": "Вечером",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Закончить рано", "Свободный вечер"],
                "ideasB": ["Долго спать", "Тихое время"]
            },
            {
                "topic": "Машина или автобус — что лучше?",
                "sideA": "Машина",
                "sideB": "Автобус",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Приватно и быстро", "Ехать куда угодно"],
                "ideasB": ["Это дешево", "Хорошо для природы"]
            },
            {
                "topic": "Пешком или на машине — что лучше?",
                "sideA": "Пешком",
                "sideB": "Машина",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Это бесплатно", "Хорошая зарядка"],
                "ideasB": ["Нет дождя", "Очень удобно"]
            },
            {
                "topic": "Офис или дом — что лучше для работы?",
                "sideA": "Офис",
                "sideB": "Дом",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Видеть друзей", "Лучше фокус"],
                "ideasB": ["Не нужно ехать", "Удобная одежда"]
            },
            {
                "topic": "Жаворонок или сова — что лучше?",
                "sideA": "Жаворонок",
                "sideB": "Сова",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Видеть солнце", "Тихое время"],
                "ideasB": ["Творческое время", "Нет шума"]
            },
            {
                "topic": "Лето или зима — что лучше?",
                "sideA": "Лето",
                "sideB": "Зима",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Пляж", "Солнечная погода"],
                "ideasB": ["Снег", "Горячий шоколад"]
            },
            {
                "topic": "Короткий отпуск или длинный отпуск — что лучше?",
                "sideA": "Короткий",
                "sideB": "Длинный",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Легко планировать", "Много поездок"],
                "ideasB": ["Больше отдыха", "Увидеть больше мест"]
            },
            {
                "topic": "Звонок или сообщение — что лучше?",
                "sideA": "Звонок",
                "sideB": "Сообщение",
                "level": "starter",
                "theme": "basic_technology_devices_A1",
                "ideasA": ["Слышать голос", "Это быстрее"],
                "ideasB": ["Подумать перед письмом", "Прочитать позже"]
            },
            {
                "topic": "Душ утром или душ вечером — что лучше?",
                "sideA": "Утром",
                "sideB": "Вечером",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Проснуться", "Начать свежим"],
                "ideasB": ["Помогает расслабиться", "Чистая кровать"]
            },
            {
                "topic": "Понедельник или пятница — что лучше?",
                "sideA": "Понедельник",
                "sideB": "Пятница",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Начать проекты", "Новая неделя"],
                "ideasB": ["Выходные скоро", "Время праздника"]
            },
            {
                "topic": "Слишком жарко или слишком холодно — что хуже?",
                "sideA": "Жарко",
                "sideB": "Холодно",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Нельзя спать", "Слишком много солнца"],
                "ideasB": ["Нужно много одежды", "Мороз"]
            },
            {
                "topic": "Место у окна или у прохода — что лучше?",
                "sideA": "Окно",
                "sideB": "Проход",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Видеть облака", "Делать фото"],
                "ideasB": ["Легко ходить", "Больше места"]
            },
            {
                "topic": "Красный против синего — что лучше?",
                "sideA": "Красный",
                "sideB": "Синий",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Сильный цвет", "Любовь"],
                "ideasB": ["Спокойный цвет", "Море и небо"]
            },
            {
                "topic": "Желтый против зеленого — какой цвет радостнее?",
                "sideA": "Желтый",
                "sideB": "Зеленый",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Как солнце", "Яркий"],
                "ideasB": ["Цвет природы", "Как деревья"]
            },
            {
                "topic": "Черный против белого — что лучше?",
                "sideA": "Черный",
                "sideB": "Белый",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Элегантный", "Ко всему подходит"],
                "ideasB": ["Чистый", "Яркий"]
            },
            {
                "topic": "Розовый против фиолетового — что лучше?",
                "sideA": "Розовый",
                "sideB": "Фиолетовый",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Милый цвет", "Цветы"],
                "ideasB": ["Королевский цвет", "Вкусный фрукт"]
            },
            {
                "topic": "Большие против маленьких чисел — что веселее?",
                "sideA": "Большие",
                "sideB": "Маленькие",
                "level": "starter",
                "theme": "numbers_0_9_A1",
                "ideasA": ["Больше денег", "Крупный счет"],
                "ideasB": ["Легко учить", "Быстро"]
            },
            {
                "topic": "Мяч против куклы — что лучше?",
                "sideA": "Мяч",
                "sideB": "Кукла",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Играть с друзьями", "Спорт"],
                "ideasB": ["Рассказывать истории", "Украшение"]
            },
            {
                "topic": "Карандаш против ручки — что лучше?",
                "sideA": "Карандаш",
                "sideB": "Ручка",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Можно стереть", "Хорошо для рисования"],
                "ideasB": ["Навсегда", "Чистое письмо"]
            },
            {
                "topic": "Книга против картинки — что лучше?",
                "sideA": "Книга",
                "sideB": "Картинка",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Читать истории", "Нет батарейки"],
                "ideasB": ["Быстро увидеть", "Красиво"]
            },
            {
                "topic": "Стул против пола — что лучше?",
                "sideA": "Стул",
                "sideB": "Пол",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Хорошо для спины", "Работа за столом"],
                "ideasB": ["Много места", "Отдых"]
            },
            {
                "topic": "Кошка против собаки — что лучше?",
                "sideA": "Кошка",
                "sideB": "Собака",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Независимая", "Тихая"],
                "ideasB": ["Верный друг", "Играть на улице"]
            },
            {
                "topic": "Рыба против птицы — что лучше?",
                "sideA": "Рыба",
                "sideB": "Птица",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Красивые цвета", "Легкий уход"],
                "ideasB": ["Может петь", "Веселые звуки"]
            },
            {
                "topic": "Большие против маленьких животных — что лучше?",
                "sideA": "Большие",
                "sideB": "Маленькие",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Сильные", "Интересные"],
                "ideasB": ["Милые", "Мало места"]
            },
            {
                "topic": "Кролик против хомяка — что лучше?",
                "sideA": "Кролик",
                "sideB": "Хомяк",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Длинные уши", "Мягкий"],
                "ideasB": ["Маленький", "Приятно смотреть"]
            },
            {
                "topic": "Яблоко против банана — какой фрукт лучше?",
                "sideA": "Яблоко",
                "sideB": "Банан",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Хрустящее", "Сладкое"],
                "ideasB": ["Легко чистить", "Мягкий"]
            },
            {
                "topic": "Хлеб против риса — что лучше?",
                "sideA": "Хлеб",
                "sideB": "Рис",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Много видов", "Бутерброды"],
                "ideasB": ["Полезно", "Хорошо с мясом"]
            },
            {
                "topic": "Молоко против воды — что лучше?",
                "sideA": "Молоко",
                "sideB": "Вода",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Кальций", "Хорошо для костей"],
                "ideasB": ["Свежая", "Базовая"]
            },
            {
                "topic": "Розовый против оранжевого — что лучше?",
                "sideA": "Розовый",
                "sideB": "Оранжевый",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Милый цвет", "Цветы"],
                "ideasB": ["Яркий", "Как фрукт"]
            },
            {
                "topic": "Стул против дивана — что лучше?",
                "sideA": "Стул",
                "sideB": "Диван",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Хорошо для спины", "Формально"],
                "ideasB": ["Очень мягко", "Смотреть ТВ"]
            },
            {
                "topic": "Сумка против коробки — что лучше?",
                "sideA": "Сумка",
                "sideB": "Коробка",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Легко носить", "Для школы"],
                "ideasB": ["Для игрушек", "Защищает вещи"]
            },
            {
                "topic": "Лев против слона — что лучше?",
                "sideA": "Лев",
                "sideB": "Слон",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Король", "Сильный"],
                "ideasB": ["Большие уши", "Очень умный"]
            },
            {
                "topic": "Ложка против вилки — что лучше?",
                "sideA": "Ложка",
                "sideB": "Вилка",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Для супа", "Просто"],
                "ideasB": ["Для пасты", "Мясо"]
            },
            {
                "topic": "Шапка против обуви — что лучше?",
                "sideA": "Шапка",
                "sideB": "Обувь",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Крутой стиль", "Защита от солнца"],
                "ideasB": ["Защита ног", "Для прогулок"]
            },
            {
                "topic": "Солнце против луны — что лучше?",
                "sideA": "Солнце",
                "sideB": "Луна",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Тепло", "Свет"],
                "ideasB": ["Красиво", "Ночной свет"]
            },
            {
                "topic": "Носки или без носков — что лучше?",
                "sideA": "Носки",
                "sideB": "Без носков",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Теплые ноги", "Удобно"],
                "ideasB": ["Прохладные ноги", "Лето"]
            },
            {
                "topic": "Жить с семьей или жить одному — что лучше?",
                "sideA": "Семья",
                "sideB": "Одному",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Никогда не одинок", "Помощь с едой"],
                "ideasB": ["Покой", "Твои правила"]
            },
            {
                "topic": "Брат или сестра — что лучше?",
                "sideA": "Брат",
                "sideB": "Сестра",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Играть в игры", "Защита"],
                "ideasB": ["Делиться секретами", "Добрая"]
            },
            {
                "topic": "Большая или маленькая семья — что лучше?",
                "sideA": "Большая семья",
                "sideB": "Маленькая семья",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Оживленный дом", "Много друзей"],
                "ideasB": ["Тихо", "Больше места"]
            },
            {
                "topic": "Быть старшим или младшим ребенком — что лучше?",
                "sideA": "Старший",
                "sideB": "Младший",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Лидер", "Ответственный"],
                "ideasB": ["Помогают", "Расслаблен"]
            },
            {
                "topic": "Школа утром или школа днем — что лучше?",
                "sideA": "Утром",
                "sideB": "Днем",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Свободный день", "Рутина"],
                "ideasB": ["Долго спать", "Тихое утро"]
            },
            {
                "topic": "Чтение или математика — что веселее?",
                "sideA": "Чтение",
                "sideB": "Математика",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Истории", "Новые слова"],
                "ideasB": ["Логика", "Числа"]
            },
            {
                "topic": "Учиться в школе или учиться дома — что лучше?",
                "sideA": "Школа",
                "sideB": "Дом",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Друзья", "Учитель"],
                "ideasB": ["Расслабленно", "Не надо ехать"]
            },
            {
                "topic": "Делать или не делать домашку — что больше помогает?",
                "sideA": "Домашка",
                "sideB": "Без домашки",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Практика", "Больше знаний"],
                "ideasB": ["Больше игр", "Меньше стресса"]
            },
            {
                "topic": "Работать одному или с напарником — что лучше?",
                "sideA": "Одному",
                "sideB": "Напарник",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Фокус", "Быстро"],
                "ideasB": ["Общие идеи", "Весело"]
            },
            {
                "topic": "Писать на бумаге или на компьютере — что лучше?",
                "sideA": "Бумага",
                "sideB": "Компьютер",
                "level": "starter",
                "theme": "basic_technology_devices_A1",
                "ideasA": ["Нет экрана", "Просто"],
                "ideasB": ["Быстро", "Исправляет ошибки"]
            },
            {
                "topic": "Завтрак или ужин — что важнее?",
                "sideA": "Завтрак",
                "sideB": "Ужин",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Энергия на утро", "Начать день"],
                "ideasB": ["Время с семьей", "Много еды"]
            },
            {
                "topic": "Горячая или холодная еда — что лучше?",
                "sideA": "Горячая",
                "sideB": "Холодная",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Зимой", "Вкусно"],
                "ideasB": ["Летом", "Салат"]
            },
            {
                "topic": "Сладкая или соленая еда — что лучше?",
                "sideA": "Сладкая",
                "sideB": "Соленая",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Вкусно", "Лакомство"],
                "ideasB": ["Настоящая еда", "Соль"]
            },
            {
                "topic": "Готовить с родителем или покупать готовую еду — что лучше?",
                "sideA": "Готовить",
                "sideB": "Готовая еда",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Учиться", "Весело"],
                "ideasB": ["Быстро", "Нет беспорядка"]
            },
            {
                "topic": "Вставать рано или вставать поздно — что лучше?",
                "sideA": "Рано",
                "sideB": "Поздно",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Больше времени", "Продуктивно"],
                "ideasB": ["Больше сна", "Расслабленно"]
            },
            {
                "topic": "Утро или вечер — что лучше?",
                "sideA": "Утро",
                "sideB": "Вечер",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Свежесть", "Солнце"],
                "ideasB": ["Тишина", "Отдых"]
            },
            {
                "topic": "Будни или выходные — что лучше?",
                "sideA": "Будни",
                "sideB": "Выходные",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Рутина", "Школа"],
                "ideasB": ["Веселье", "Хобби"]
            },
            {
                "topic": "Ложиться рано или поздно — что здоровее?",
                "sideA": "Рано",
                "sideB": "Поздно",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Здоровье", "Отдохнувший"],
                "ideasB": ["Весело", "Кино"]
            },
            {
                "topic": "Твоя спальня или гостиная — что лучше?",
                "sideA": "Спальня",
                "sideB": "Гостиная",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Приватно", "Твои вещи"],
                "ideasB": ["Большой ТВ", "Диван"]
            },
            {
                "topic": "Игры дома или игры на улице — что веселее?",
                "sideA": "Дома",
                "sideB": "На улице",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Нет дождя", "Настолки"],
                "ideasB": ["Солнце", "Бегать"]
            },
            {
                "topic": "Смотреть ТВ или читать книгу — что лучше?",
                "sideA": "ТВ",
                "sideB": "Книга",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Отдых", "Визуально"],
                "ideasB": ["Воображение", "Глубоко"]
            },
            {
                "topic": "Спорт или видеоигры — что веселее?",
                "sideA": "Спорт",
                "sideB": "Видеоигры",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Здоровье", "Активно"],
                "ideasB": ["Навыки", "История"]
            },
            {
                "topic": "Рисование или пение — что лучше?",
                "sideA": "Рисование",
                "sideB": "Пение",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Искусство", "Тихо"],
                "ideasB": ["Голос", "Музыка"]
            },
            {
                "topic": "Играть одному или с друзьями — что веселее?",
                "sideA": "Одному",
                "sideB": "Друзья",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Фокус", "Творчество"],
                "ideasB": ["Делиться", "Смеяться"]
            },
            {
                "topic": "Плавание или бег — что лучше?",
                "sideA": "Плавание",
                "sideB": "Бег",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Прохладная вода", "Все тело"],
                "ideasB": ["Свежий воздух", "Просто"]
            },
            {
                "topic": "Музыка или спорт — что лучше?",
                "sideA": "Музыка",
                "sideB": "Спорт",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Слушать", "Хорошее настроение"],
                "ideasB": ["Активно", "Здоровье"]
            },
            {
                "topic": "Домашние или дикие животные — что интереснее?",
                "sideA": "Домашние",
                "sideB": "Дикие",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Еда", "Полезные"],
                "ideasB": ["Джунгли", "Захватывающе"]
            },
            {
                "topic": "Дождь или солнце — что лучше?",
                "sideA": "Дождь",
                "sideB": "Солнце",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Растения", "Уютно"],
                "ideasB": ["Пляж", "Энергия"]
            },
            {
                "topic": "Море или горы — что лучше для отпуска?",
                "sideA": "Море",
                "sideB": "Горы",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Плавание", "Песок"],
                "ideasB": ["Походы", "Вид"]
            },
            {
                "topic": "Цветы или деревья — что красивее?",
                "sideA": "Цветы",
                "sideB": "Деревья",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Запахи", "Цвета"],
                "ideasB": ["Тень", "Кислород"]
            },
            {
                "topic": "Пешком или на велике — что лучше для прогулок?",
                "sideA": "Пешком",
                "sideB": "Велосипед",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Бесплатно", "Просто"],
                "ideasB": ["Быстро", "Весело"]
            },
            {
                "topic": "Путешествовать одному или с семьей — что веселее?",
                "sideA": "Одному",
                "sideB": "Семья",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Твой путь", "Тишина"],
                "ideasB": ["Общее веселье", "Безопасно"]
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Мое любимое воспоминание из детства",
                "level": "starter",
                "theme": "immediate_family_A1"
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
