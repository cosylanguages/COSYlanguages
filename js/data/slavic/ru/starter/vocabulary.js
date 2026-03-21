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
        "word": "учитель",
        "level": "starter",
        "theme": "job_titles_professions_A0",
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
        "theme": "basic_foods_A0",
        "form": "noun",
        "plural": "борщи"
    },
    {
        "word": "салат оливье",
        "level": "starter",
        "theme": "basic_foods_A0",
        "form": "noun",
        "plural": "салат оливья"
    },
    {
        "word": "яблоко",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        "theme": "basic_foods_A0",
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
        "form": "noun",
        "plural": "молоко"
    },
    {
        "word": "пицца",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        "word": "кофе",
        "level": "starter",
        "theme": "basic_foods_A0",
        "gender": "он",
        "baseWord": "кофе",
        "emoji": "☕",
        "form": "noun",
        "plural": "кофе"
    },
    {
        "word": "чай",
        "level": "starter",
        "theme": "basic_foods_A0",
        "gender": "он",
        "baseWord": "чай",
        "emoji": "🍵",
        "form": "noun",
        "plural": "чай"
    },
    {
        "word": "сок",
        "level": "starter",
        "theme": "basic_foods_A0",
        "gender": "он",
        "baseWord": "сок",
        "emoji": "🧃",
        "form": "noun",
        "plural": "сок"
    },
    {
        "word": "вода",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        "word": "парк",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
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
        "theme": "neighbourhood_local_A2",
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
        "word": "футболка",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "👕",
        "form": "noun",
        "plural": "футболки"
    },
    {
        "word": "брюки",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "👖",
        "form": "noun",
        "plural": "брюки"
    },
    {
        "word": "обувь",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "👟",
        "form": "noun",
        "plural": "обувь"
    },
    {
        "word": "шапка",
        "level": "starter",
        "theme": "furniture_objects_A0",
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
        "plural": "стулы"
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
        "plural": "кровать"
    },
    {
        "word": "высокий",
        "level": "starter",
        "theme": "size_shape_A0",
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
        "theme": "size_shape_A0",
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
        "word": "молодой",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "noun",
        "plural": "молодой"
    },
    {
        "word": "старый",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "noun",
        "plural": "старый"
    },
    {
        "word": "просыпаться",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "⏰",
        "form": "noun",
        "plural": "просыпатьси"
    },
    {
        "word": "спать",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "😴",
        "subtext": "спать 8 часов, идти спать",
        "form": "noun",
        "plural": "спать"
    },
    {
        "word": "ключ",
        "level": "starter",
        "theme": "furniture_objects_A0",
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
        "theme": "furniture_objects_A0",
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
        "theme": "body_parts_A0",
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
        "theme": "body_parts_A0",
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
        "theme": "body_parts_A0",
        "form": "noun",
        "plural": "ноги"
    },
    {
        "word": "глаз",
        "level": "starter",
        "theme": "body_parts_A0",
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
        "plural": "роты"
    },
    {
        "word": "ухо",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👂",
        "form": "noun",
        "plural": "уха"
    },
    {
        "word": "стопа",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "🦶",
        "form": "noun",
        "plural": "стопы"
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
        "theme": "basic_foods_A0",
        "level": "starter",
        "gender": "он",
        "baseWord": "кофе",
        "emoji": "☕",
        "form": "noun",
        "plural": "кофе"
    },
    {
        "word": "вода",
        "theme": "basic_foods_A0",
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
        "theme": "furniture_objects_A0",
        "level": "starter",
        "gender": "оно",
        "baseWord": "окно",
        "emoji": "🪟",
        "form": "noun",
        "plural": "окна"
    },
    {
        "word": "книга",
        "theme": "furniture_objects_A0",
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
        "theme": "furniture_objects_A0",
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
        "theme": "neighbourhood_local_A2",
        "gender": "она",
        "baseWord": "машина",
        "numberPlural": "4 машина",
        "answer": "четыре машины",
        "emoji": "🚗",
        "form": "noun",
        "plural": "машины"
    },
    {
        "word": "быть",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👤",
        "subtext": "мне холодно, мне 20 лет",
        "form": "noun",
        "plural": "быть"
    },
    {
        "word": "иметь",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "👜",
        "subtext": "завтракать, иметь машину",
        "form": "noun",
        "plural": "иметь"
    },
    {
        "word": "идти",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🚶",
        "subtext": "идти в школу, идти домой",
        "form": "noun",
        "plural": "идти"
    },
    {
        "word": "делать",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🛠️",
        "subtext": "делать уроки, заниматься спортом",
        "form": "noun",
        "plural": "делать"
    },
    {
        "word": "работать",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "💼",
        "subtext": "работать в офисе, много работать",
        "form": "noun",
        "plural": "работать"
    },
    {
        "word": "говорить",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🗣️",
        "subtext": "говорить по-английски, говорить медленно",
        "form": "noun",
        "plural": "говорить"
    },
    {
        "word": "знать",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🧠",
        "subtext": "знать ответ, знать человека",
        "form": "noun",
        "plural": "знать"
    },
    {
        "word": "думать",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "💭",
        "subtext": "думать о, думать что",
        "form": "noun",
        "plural": "думать"
    },
    {
        "word": "хотеть",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🙏",
        "subtext": "хотеть воды, хотеть пойти",
        "form": "noun",
        "plural": "хотеть"
    },
    {
        "word": "нравиться",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👍",
        "subtext": "мне нравится шоколад, мне нравится танцевать",
        "form": "noun",
        "plural": "нравитьси"
    },
    {
        "word": "любить",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "❤️",
        "subtext": "любить мою семью, любить путешествовать",
        "form": "noun",
        "plural": "любить"
    },
    {
        "word": "брать",
        "level": "starter",
        "theme": "furniture_objects_A0",
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
        "theme": "furniture_objects_A0",
        "emoji": "🔍",
        "form": "noun",
        "plural": "находить"
    },
    {
        "word": "рассказывать",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "рассказывать"
    },
    {
        "word": "спрашивать",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "❓",
        "form": "noun",
        "plural": "спрашивать"
    },
    {
        "word": "чувствовать",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "🌡️",
        "form": "noun",
        "plural": "чувствовать"
    },
    {
        "word": "пробовать",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🎯",
        "form": "noun",
        "plural": "пробовать"
    },
    {
        "word": "уходить",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🚪",
        "form": "noun",
        "plural": "уходить"
    },
    {
        "word": "звонить",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "📞",
        "form": "noun",
        "plural": "звонить"
    },
    {
        "word": "смотреть",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "📺",
        "form": "noun",
        "plural": "смотреть"
    },
    {
        "word": "использовать",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🛠️",
        "form": "noun",
        "plural": "использовать"
    },
    {
        "word": "получать",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "📩",
        "form": "noun",
        "plural": "получать"
    },
    {
        "word": "начинать",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "▶️",
        "opposite": "заканчивать",
        "oppositeEmoji": "🏁",
        "form": "noun",
        "plural": "начинать"
    },
    {
        "word": "помогать",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🤝",
        "form": "noun",
        "plural": "помогать"
    },
    {
        "word": "играть",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🎮",
        "form": "noun",
        "plural": "играть"
    },
    {
        "word": "бегать",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏃",
        "form": "noun",
        "plural": "бегать"
    },
    {
        "word": "жить",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🏠",
        "opposite": "умирать",
        "oppositeEmoji": "⚰️",
        "form": "noun",
        "plural": "жить"
    },
    {
        "word": "приносить",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🎁",
        "form": "noun",
        "plural": "приносить"
    },
    {
        "word": "сидеть",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🪑",
        "opposite": "стоять",
        "oppositeEmoji": "🧍",
        "form": "noun",
        "plural": "сидеть"
    },
    {
        "word": "стоять",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🧍",
        "opposite": "сидеть",
        "oppositeEmoji": "🪑",
        "form": "noun",
        "plural": "стоять"
    },
    {
        "word": "терять",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "📉",
        "opposite": "выигрывать",
        "oppositeEmoji": "🏆",
        "form": "noun",
        "plural": "терять"
    },
    {
        "word": "платить",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "💰",
        "form": "noun",
        "plural": "платить"
    },
    {
        "word": "встречать",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🤝",
        "form": "noun",
        "plural": "встречать"
    },
    {
        "word": "учить",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "📚",
        "form": "noun",
        "plural": "учить"
    },
    {
        "word": "менять",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🔄",
        "form": "noun",
        "plural": "менять"
    },
    {
        "word": "понимать",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "💡",
        "form": "noun",
        "plural": "понимать"
    },
    {
        "word": "останавливаться",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🛑",
        "form": "noun",
        "plural": "останавливатьси"
    },
    {
        "word": "добавлять",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "➕",
        "form": "noun",
        "plural": "добавлять"
    },
    {
        "word": "тратить",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "💸",
        "form": "noun",
        "plural": "тратить"
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
