(function() {
    const data = [
    {
        "word": "просыпаться",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "просыпаться рано, просыпаться в 7 утра",
        "opposite": "спать",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Перестать спать и открыть глаза.",
                "examples": [
                    "Я просыпаюсь в семь часов.",
                    "Во сколько ты просыпаешься?"
                ]
            }
        ]
    },
    {
        "word": "работать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "работать в офисе, много работать",
        "form": "verb",
        "definitions": [
            {
                "text": "Заниматься делом, чтобы зарабатывать деньги.",
                "examples": [
                    "Я работаю пять дней в неделю.",
                    "Она работает в банке."
                ]
            }
        ]
    },
    {
        "word": "спать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "спать 8 часов, ложиться спать",
        "opposite": "просыпаться",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Отдыхать с закрытыми глазами.",
                "examples": [
                    "Мне нужно поспать.",
                    "Ребёнок спит."
                ]
            }
        ]
    },
    {
        "word": "смотреть",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "смотреть телевизор, смотреть фильм",
        "definitions": [
            {
                "text": "Направлять взгляд на что-либо.",
                "examples": [
                    "Я смотрю телевизор вечером.",
                    "Они смотрят на птиц."
                ]
            }
        ]
    },
    {
        "word": "читать",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "form": "verb",
        "subtext": "читать книгу, читать газету",
        "opposite": "писать",
        "oppositeEmoji": "✍️",
        "definitions": [
            {
                "text": "Воспринимать и понимать написанное.",
                "examples": [
                    "Я читаю книгу каждый вечер.",
                    "Она умеет читать по-русски."
                ]
            }
        ]
    },
    {
        "word": "быть",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "form": "verb",
        "definitions": [
            {
                "text": "Существовать или находиться где-либо.",
                "examples": [
                    "Я хочу быть учителем.",
                    "Где ты был вчера?"
                ]
            }
        ]
    },
    {
        "word": "иметь",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Обладать чем-либо.",
                "examples": [
                    "У меня есть кошка (Я имею кошку).",
                    "Иметь значение."
                ]
            }
        ]
    },
    {
        "word": "идти",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Передвигаться пешком.",
                "examples": [
                    "Я иду в школу.",
                    "Пошли домой."
                ]
            }
        ]
    },
    {
        "word": "есть",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "синоним: кушать",
        "opposite": "пить",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Принимать пищу.",
                "examples": [
                    "Я ем яблоко каждый день.",
                    "Что ты хочешь поесть?"
                ]
            }
        ]
    },
    {
        "word": "кушать",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "синоним: есть",
        "opposite": "пить",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Принимать пищу (более вежливый или детский вариант).",
                "examples": [
                    "Садись кушать.",
                    "Приятного аппетита!"
                ]
            }
        ]
    },
    {
        "word": "пить",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "пить воду, пить кофе",
        "opposite": "кушать",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Поглощать жидкость.",
                "examples": [
                    "Я пью много воды.",
                    "Хочешь что-нибудь попить?"
                ]
            }
        ]
    },
    {
        "word": "делать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb",
        "definitions": [
            {
                "text": "Совершать какое-либо действие.",
                "examples": [
                    "Я делаю уроки днём.",
                    "Что ты делаешь?"
                ]
            }
        ]
    },
    {
        "word": "говорить",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "Пользоваться устной речью.",
                "examples": [
                    "Я говорю по-русски.",
                    "Говорите медленнее, пожалуйста."
                ]
            }
        ]
    },
    {
        "word": "знать",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb",
        "definitions": [
            {
                "text": "Обладать информацией.",
                "examples": [
                    "Я знаю ответ.",
                    "Ты знаешь, где он?"
                ]
            }
        ]
    },
    {
        "word": "думать",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "form": "verb",
        "definitions": [
            {
                "text": "Размышлять, иметь мнение.",
                "examples": [
                    "Я думаю, это хорошая идея.",
                    "О чём ты думаешь?"
                ]
            }
        ]
    },
    {
        "word": "видеть",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👁️",
        "form": "verb",
        "definitions": [
            {
                "text": "Воспринимать зрением.",
                "examples": [
                    "Я вижу птицу.",
                    "Ты видел этот фильм?"
                ]
            }
        ]
    },
    {
        "word": "хотеть",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "form": "verb",
        "definitions": [
            {
                "text": "Желать чего-либо.",
                "examples": [
                    "Я хочу пить.",
                    "Я хочу домой."
                ]
            }
        ]
    },
    {
        "word": "любить",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "❤️",
        "form": "verb",
        "definitions": [
            {
                "text": "Чувствовать привязанность или глубокую симпатию.",
                "examples": [
                    "Я люблю свою семью.",
                    "Я люблю путешествовать."
                ]
            }
        ]
    },
    {
        "word": "писать",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Изображать знаки на бумаге или экране.",
                "examples": [
                    "Я пишу в дневнике каждый день.",
                    "Она пишет детские книги."
                ]
            }
        ]
    },
    {
        "word": "приходить",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "form": "verb",
        "definitions": [
            {
                "text": "Идя, достигать какого-либо места.",
                "examples": [
                    "Приходи ко мне в гости.",
                    "Он скоро придёт."
                ]
            }
        ]
    },
    {
        "word": "давать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Передавать что-либо другому.",
                "examples": [
                    "Дай мне эту книгу.",
                    "Я дарю подарки семье."
                ]
            }
        ]
    },
    {
        "word": "брать",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Захватывать руками или получать в пользование.",
                "examples": [
                    "Возьми автобус до работы.",
                    "Она делает красивые фото."
                ]
            }
        ]
    },
    {
        "word": "находить",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "form": "verb",
        "definitions": [
            {
                "text": "Обнаруживать в результате поиска.",
                "examples": [
                    "Я не могу найти ключи.",
                    "Ты нашёл дорогу?"
                ]
            }
        ]
    },
    {
        "word": "рассказывать",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "Излагать что-либо устно.",
                "examples": [
                    "Расскажи мне сказку.",
                    "Он сказал ей правду."
                ]
            }
        ]
    },
    {
        "word": "спрашивать",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "form": "verb",
        "definitions": [
            {
                "text": "Обращаться с вопросом.",
                "examples": [
                    "Мне нужно спросить.",
                    "Она попросила меня о помощи."
                ]
            }
        ]
    },
    {
        "word": "чувствовать",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "form": "verb",
        "definitions": [
            {
                "text": "Испытывать эмоции или физические ощущения.",
                "examples": [
                    "Я чувствую себя счастливым.",
                    "Тебе холодно?"
                ]
            }
        ]
    },
    {
        "word": "пробовать",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🎯",
        "form": "verb",
        "definitions": [
            {
                "text": "Пытаться что-то сделать или проверять вкус.",
                "examples": [
                    "Я стараюсь делать упражнения каждый день.",
                    "Попробуй это печенье."
                ]
            }
        ]
    },
    {
        "word": "уходить",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚪",
        "form": "verb",
        "definitions": [
            {
                "text": "Удаляться из какого-либо места.",
                "examples": [
                    "Я ухожу на работу в 8 утра.",
                    "Не оставляй сумку здесь."
                ]
            }
        ]
    },
    {
        "word": "звонить",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "form": "verb",
        "definitions": [
            {
                "text": "Вызывать по телефону или громко звать.",
                "examples": [
                    "Позвони мне позже.",
                    "Он позвал меня по имени."
                ]
            }
        ]
    },
    {
        "word": "использовать",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "form": "verb",
        "definitions": [
            {
                "text": "Применять что-либо для достижения цели.",
                "examples": [
                    "Я использую компьютер для работы.",
                    "Можно взять твою ручку?"
                ]
            }
        ]
    },
    {
        "word": "получать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "form": "verb",
        "definitions": [
            {
                "text": "Принимать что-либо присланное или заработанное.",
                "examples": [
                    "Я получаю много писем.",
                    "Можешь купить молока?"
                ]
            }
        ]
    },
    {
        "word": "начинать",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Приступать к какому-либо действию.",
                "examples": [
                    "Фильм начинается в 7 вечера.",
                    "Давайте начнём собрание."
                ]
            }
        ]
    },
    {
        "word": "помогать",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Оказывать содействие кому-либо.",
                "examples": [
                    "Можешь мне помочь?",
                    "Я помогаю маме с покупками."
                ]
            }
        ]
    },
    {
        "word": "играть",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "form": "verb",
        "definitions": [
            {
                "text": "Заниматься игрой, развлекаться.",
                "examples": [
                    "Я играю в футбол с друзьями.",
                    "Ей нравится играть в видеоигры."
                ]
            }
        ]
    },
    {
        "word": "бегать",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "form": "verb",
        "definitions": [
            {
                "text": "Быстро передвигаться на ногах.",
                "examples": [
                    "Я бегаю в парке.",
                    "Он бежит, чтобы успеть на автобус."
                ]
            }
        ]
    },
    {
        "word": "жить",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Находиться где-либо, имея жильё.",
                "examples": [
                    "Я живу в Лондоне.",
                    "Она живёт с семьёй."
                ]
            }
        ]
    },
    {
        "word": "приносить",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Неся, доставлять что-либо.",
                "examples": [
                    "Пожалуйста, принеси мне стакан воды.",
                    "Он приносит обед с собой."
                ]
            }
        ]
    },
    {
        "word": "сидеть",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "Находиться в вертикальном положении на сиденье.",
                "examples": [
                    "Садись, пожалуйста.",
                    "Я сижу на стуле."
                ]
            }
        ]
    },
    {
        "word": "стоять",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "Находиться в вертикальном положении на ногах.",
                "examples": [
                    "Встаньте, пожалуйста.",
                    "Она стоит у двери."
                ]
            }
        ]
    },
    {
        "word": "проигрывать",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "Терпеть поражение в игре или споре.",
                "examples": [
                    "Я не хочу проигрывать.",
                    "Я часто теряю ключи."
                ]
            }
        ]
    },
    {
        "word": "платить",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Отдавать деньги за что-либо.",
                "examples": [
                    "Я плачу за кофе.",
                    "Как вы хотите заплатить?"
                ]
            }
        ]
    },
    {
        "word": "встречать",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Видеться с кем-либо.",
                "examples": [
                    "Рад познакомиться.",
                    "Мы встречаемся каждую пятницу."
                ]
            }
        ]
    },
    {
        "word": "учить",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📚",
        "form": "verb",
        "definitions": [
            {
                "text": "Приобретать знания или навыки.",
                "examples": [
                    "Я хочу выучить русский язык.",
                    "Дети быстро учатся."
                ]
            }
        ]
    },
    {
        "word": "менять",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать иным, заменять.",
                "examples": [
                    "Я хочу переодеться.",
                    "Погода быстро меняется."
                ]
            }
        ]
    },
    {
        "word": "понимать",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💡",
        "form": "verb",
        "definitions": [
            {
                "text": "Постигать смысл чего-либо.",
                "examples": [
                    "Я не понимаю это слово.",
                    "Ты понимаешь по-русски?"
                ]
            }
        ]
    },
    {
        "word": "останавливаться",
        "level": "starter",
        "theme": "time",
        "emoji": "🛑",
        "form": "verb",
        "definitions": [
            {
                "text": "Прекращать движение или действие.",
                "examples": [
                    "Остановите машину.",
                    "Перестань говорить, пожалуйста."
                ]
            }
        ]
    },
    {
        "word": "добавлять",
        "level": "starter",
        "theme": "numbers_math",
        "emoji": "➕",
        "form": "verb",
        "definitions": [
            {
                "text": "Прибавлять одно к другому.",
                "examples": [
                    "Добавь сахара в чай.",
                    "Сколько будет пять плюс пять?"
                ]
            }
        ]
    },
    {
        "word": "тратить",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "Расходовать деньги.",
                "examples": [
                    "Я трачу много денег на еду."
                ]
            }
        ]
    },
    {
        "word": "открывать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать доступным, размыкать.",
                "examples": [
                    "Открой дверь.",
                    "Можешь открыть окно?"
                ]
            }
        ]
    },
    {
        "word": "побеждать",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "Одерживать победу.",
                "examples": [
                    "Мы хотим победить в матче."
                ]
            }
        ]
    },
    {
        "word": "гулять",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Идти пешком, прогуливаться.",
                "examples": [
                    "Я иду в школу пешком.",
                    "Давай погуляем в парке."
                ]
            }
        ]
    },
    {
        "word": "помнить",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb",
        "definitions": [
            {
                "text": "Удерживать в памяти.",
                "examples": [
                    "Я помню твоё имя.",
                    "Ты меня помнишь?"
                ]
            }
        ]
    },
    {
        "word": "покупать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Приобретать за деньги.",
                "examples": [
                    "Я хочу купить новый телефон.",
                    "Где я могу купить молоко?"
                ]
            }
        ]
    },
    {
        "word": "умирать",
        "level": "starter",
        "theme": "health_body",
        "emoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Переставать жить.",
                "examples": [
                    "Растения умирают без воды."
                ]
            }
        ]
    },
    {
        "word": "отправлять",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Посылать что-либо.",
                "examples": [
                    "Я отправляю письмо каждое утро.",
                    "Можешь отправить мне фото?"
                ]
            }
        ]
    },
    {
        "word": "падать",
        "level": "starter",
        "theme": "environment_nature",
        "emoji": "🍂",
        "form": "verb",
        "definitions": [
            {
                "text": "Валиться вниз под действием силы тяжести.",
                "examples": [
                    "Листья падают осенью.",
                    "Осторожно, не упади."
                ]
            }
        ]
    },
    {
        "word": "резать",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "form": "verb",
        "definitions": [
            {
                "text": "Разделять на части острым инструментом.",
                "examples": [
                    "Я режу хлеб.",
                    "Можешь разрезать бумагу?"
                ]
            }
        ]
    },
    {
        "word": "проходить",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🏔️",
        "form": "verb",
        "definitions": [
            {
                "text": "Идя, перемещаться мимо чего-либо или сдавать экзамен.",
                "examples": [
                    "Я прохожу мимо парка по пути домой.",
                    "Я надеюсь, я сдам тест."
                ]
            }
        ]
    },
    {
        "word": "продавать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Отдавать товар за деньги.",
                "examples": [
                    "Они продают фрукты на рынке."
                ]
            }
        ]
    },
    {
        "word": "тянуть",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "Прилагать усилие, чтобы приблизить что-либо.",
                "examples": [
                    "Потяни дверь, чтобы открыть."
                ]
            }
        ]
    },
    {
        "word": "толкать",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Прилагать усилие, чтобы удалить что-либо от себя.",
                "examples": [
                    "Нажми на кнопку.",
                    "Я толкаю тележку."
                ]
            }
        ]
    },
    {
        "word": "надеяться",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🤞",
        "form": "verb",
        "definitions": [
            {
                "text": "Желать осуществления чего-либо.",
                "examples": [
                    "Я надеюсь, ты чувствуешь себя лучше.",
                    "Мы надеемся скоро вас увидеть."
                ]
            }
        ]
    },
    {
        "word": "готовить",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать пищу годной для еды.",
                "examples": [
                    "Я готовлю ужин для семьи.",
                    "Ей нравится готовить."
                ]
            }
        ]
    },
    {
        "word": "закрывать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Приводить в закрытое состояние.",
                "examples": [
                    "Закрой дверь.",
                    "Не забудь закрыть окно."
                ]
            }
        ]
    },
    {
        "word": "заканчивать",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Доводить до конца.",
                "examples": [
                    "Я заканчиваю работу в 5 вечера.",
                    "Ты закончил книгу?"
                ]
            }
        ]
    },
    {
        "word": "арендовать",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Платить деньги за пользование домом или квартирой.",
                "examples": [
                    "Мы арендуем квартиру в городе."
                ]
            }
        ]
    },
    {
        "word": "копить",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Сохранять деньги, не тратя их.",
                "examples": [
                    "Она копит деньги каждый месяц."
                ]
            }
        ]
    },
    {
        "word": "стоить",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Иметь цену.",
                "examples": [
                    "Квартира стоит дорого."
                ]
            }
        ]
    },
    {
        "word": "приглашать",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Просить кого-либо прийти куда-либо.",
                "examples": [
                    "Я приглашаю друзей на ужин."
                ]
            }
        ]
    },
    {
        "word": "путешествовать",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ездить в разные места.",
                "examples": [
                    "Я люблю путешествовать.",
                    "Мы путешествуем на поезде."
                ]
            }
        ]
    },
    {
        "word": "чистить",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧹",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать чистым.",
                "examples": [
                    "Я чищу свою комнату каждую неделю."
                ]
            }
        ]
    },
    {
        "word": "тренироваться",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Заниматься физической активностью для здоровья.",
                "examples": [
                    "Я тренируюсь каждое утро."
                ]
            }
        ]
    },
    {
        "word": "ездить на работу",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "form": "verb",
        "definitions": [
            {
                "text": "Совершать поездку между домом и работой.",
                "examples": [
                    "Я езжу на работу на поезде."
                ]
            }
        ]
    },
    {
        "word": "мыть",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧼",
        "form": "verb",
        "definitions": [
            {
                "text": "Чистить водой и мылом.",
                "examples": [
                    "Я мою руки.",
                    "Ты можешь помыть машину?"
                ]
            }
        ]
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
