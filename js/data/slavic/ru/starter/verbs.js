(function() {
    const data = [
    {
        "word": "быть",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "subtext": "быть уставшим / быть счастливым / быть на работе / быть готовым",
        "form": "verb",
        "definitions": [
            {
                "text": "Существовать, находиться в каком-либо состоянии.",
                "examples": [
                    "Я был уставшим. Она врач. Мы опоздали."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "неправильный",
        "v2": "был",
        "v3": "была"
    },
    {
        "word": "иметь",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "subtext": "иметь работу / иметь проблему / иметь время",
        "form": "verb",
        "definitions": [
            {
                "text": "Обладать чем-либо.",
                "examples": [
                    "У меня есть работа. У него есть машина. У неё болит голова."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1-е спряжение",
        "v2": "имел",
        "v3": "имела"
    },
    {
        "word": "делать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "делать работу / делать покупки / делать упражнения / ничего не делать",
        "form": "verb",
        "definitions": [
            {
                "text": "Заниматься какой-либо деятельностью, создавать что-либо.",
                "examples": [
                    "Я делаю свою работу каждый день. Она делает покупки."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "делал",
        "v3": "делала"
    },
    {
        "word": "идти",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "идти на работу / идти домой / выходить / ходить за покупками",
        "form": "verb",
        "definitions": [
            {
                "text": "Двигаться, перемещаться шагом.",
                "examples": [
                    "Я иду на работу пешком. Она идет к врачу."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "шёл",
        "v3": "шла"
    },
    {
        "word": "приходить",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "subtext": "приходить домой / приходить на работу / возвращаться / приходить сюда",
        "opposite": "идти",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Прибывать куда-либо.",
                "examples": [
                    "Он приходит в офис в девять. Она поздно приходит домой."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2-е спряжение",
        "v2": "приходил",
        "v3": "приходила"
    },
    {
        "word": "есть",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "завтракать / обедать / ужинать / есть вне дома",
        "opposite": "пить",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Принимать пищу.",
                "examples": [
                    "Мы ужинаем в семь. Он обедает за своим столом."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "неправильный",
        "v2": "ел",
        "v3": "ела"
    },
    {
        "word": "пить",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "пить кофе / пить чай / пить воду / пить пиво",
        "opposite": "есть",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Поглощать какую-либо жидкость.",
                "examples": [
                    "Она пьет кофе каждое утро. Я пью воду."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "пил",
        "v3": "пила"
    },
    {
        "word": "спать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "хорошо спать / плохо спать / спать восемь часов / поздно ложиться спать",
        "opposite": "просыпаться",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Находиться в состоянии сна.",
                "examples": [
                    "Он спит по семь часов в сутки. Я плохо сплю."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "2-е спряжение",
        "v2": "спал",
        "v3": "спала"
    },
    {
        "word": "работать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "работать из дома / работать полный рабочий день / усердно работать / работать допоздна",
        "form": "verb",
        "definitions": [
            {
                "text": "Заниматься трудом, делом.",
                "examples": [
                    "Она работает в больнице. Я работаю из дома."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "работал",
        "v3": "работала"
    },
    {
        "word": "жить",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "subtext": "жить в квартире / жить одному / жить с кем-то / жить за границей",
        "opposite": "умирать",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Существовать; иметь местожительство.",
                "examples": [
                    "Он живет в квартире рядом с центром. Мы живем вместе."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "1-е спряжение",
        "v2": "жил",
        "v3": "жила"
    },
    {
        "word": "нравиться",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "👍",
        "subtext": "мне нравится работа / мне нравится путешествовать / мне нравится идея",
        "form": "verb",
        "definitions": [
            {
                "text": "Вызывать симпатию, быть по вкусу.",
                "examples": [
                    "Мне нравится моя работа. Ей нравится готовить. Ему нравится кофе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "2-е спряжение",
        "v2": "нравился",
        "v3": "нравилась"
    },
    {
        "word": "хотеть",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "subtext": "хотеть работу / хотеть уехать / хотеть больше денег / хотеть помощи",
        "form": "verb",
        "definitions": [
            {
                "text": "Иметь желание или намерение.",
                "examples": [
                    "Я хочу кофе. Она хочет лучшую работу. Он хочет выйти на пенсию."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "разноспрягаемый",
        "v2": "хотел",
        "v3": "хотела"
    },
    {
        "word": "нуждаться",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🆘",
        "subtext": "нуждаться в помощи / нуждаться во времени / нуждаться в деньгах / нужно отдохнуть",
        "form": "verb",
        "definitions": [
            {
                "text": "Испытывать потребность в чем-либо.",
                "examples": [
                    "Мне нужен перерыв. Ей нужна помощь. Нам нужно больше времени."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1-е спряжение",
        "v2": "нуждался",
        "v3": "нуждалась"
    },
    {
        "word": "видеть",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👁️",
        "subtext": "видеть врача / видеть друзей / видеть проблему / ясно видеть",
        "form": "verb",
        "definitions": [
            {
                "text": "Воспринимать зрением.",
                "examples": [
                    "Я увижу своего врача завтра. Она видит проблему."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "2-е спряжение (искл.)",
        "v2": "видел",
        "v3": "видела"
    },
    {
        "word": "слышать",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👂",
        "subtext": "слышать новости / слышать кого-то / слышать звук / отчетливо слышать",
        "form": "verb",
        "definitions": [
            {
                "text": "Воспринимать слухом.",
                "examples": [
                    "Я слышу будильник каждое утро. Вы меня слышите?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "2-е спряжение (искл.)",
        "v2": "слышал",
        "v3": "слышала"
    },
    {
        "word": "чувствовать",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "subtext": "чувствовать усталость / чувствовать себя лучше / чувствовать себя хорошо / чувствовать стресс",
        "form": "verb",
        "definitions": [
            {
                "text": "Испытывать какое-либо чувство, физическое или душевное состояние.",
                "examples": [
                    "Я чувствую усталость. Она чувствует стресс. Он чувствует себя лучше."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "1-е спряжение",
        "v2": "чувствовал",
        "v3": "чувствовала"
    },
    {
        "word": "знать",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "subtext": "знать кого-то / знать ответ / знать место / знать как сделать",
        "form": "verb",
        "definitions": [
            {
                "text": "Обладать какими-либо сведениями, знаниями.",
                "examples": [
                    "Я знаю его имя. Она знает ответ. Вы его знаете?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1-е спряжение",
        "v2": "знал",
        "v3": "знала"
    },
    {
        "word": "думать",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "subtext": "думать о / думать о чем-то / думать что / внимательно думать",
        "form": "verb",
        "definitions": [
            {
                "text": "Размышлять, иметь мнение.",
                "examples": [
                    "Я думаю, это хорошая идея. Она думает о своей работе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "1-е спряжение",
        "v2": "думал",
        "v3": "думала"
    },
    {
        "word": "говорить",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "subtext": "говорить с кем-то / говорить по-русски / говорить четко / говорить на встрече",
        "form": "verb",
        "definitions": [
            {
                "text": "Выражать мысли словами; владеть языком.",
                "examples": [
                    "Он говорит по-французски. Она каждый день говорит со своим менеджером."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2-е спряжение",
        "v2": "говорил",
        "v3": "говорила"
    },
    {
        "word": "сказать",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗨️",
        "subtext": "сказать привет / сказать да / сказать нет / сказать что-нибудь",
        "form": "verb",
        "definitions": [
            {
                "text": "Выразить что-либо словами.",
                "examples": [
                    "Она говорит «привет» каждое утро. Он говорит, что это трудно."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "сказал",
        "v3": "сказала"
    },
    {
        "word": "спрашивать",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "subtext": "задавать вопрос / просить о помощи / спрашивать кого-то / просить о",
        "form": "verb",
        "definitions": [
            {
                "text": "Обращаться к кому-либо с вопросом или просьбой.",
                "examples": [
                    "Она задает много вопросов. Я прошу совета у начальника."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "спрашивал",
        "v3": "спрашивала"
    },
    {
        "word": "давать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "давать советы / давать деньги / давать подарок / давать информацию",
        "opposite": "брать",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Вручать, передавать что-либо.",
                "examples": [
                    "Он дает мне много работы. Она дает советы."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "давал",
        "v3": "давала"
    },
    {
        "word": "брать",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "subtext": "садиться в автобус / принимать лекарство / делать перерыв / занимать время",
        "opposite": "давать",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Принимать, захватывать руками или иным способом.",
                "examples": [
                    "Я еду на работу на автобусе. Она принимает лекарство."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "брал",
        "v3": "брала"
    },
    {
        "word": "получать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "subtext": "получить работу / уставать / становиться лучше / приходить домой",
        "form": "verb",
        "definitions": [
            {
                "text": "Приобретать, становиться обладателем чего-либо.",
                "examples": [
                    "Я получаю хорошую зарплату. Он быстро устает. Она получает повышение."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "получал",
        "v3": "получала"
    },
    {
        "word": "платить",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "subtext": "платить за аренду / платить картой / платить наличными / оплачивать счета",
        "form": "verb",
        "definitions": [
            {
                "text": "Отдавать деньги за что-либо.",
                "examples": [
                    "Я плачу за аренду каждый месяц. Он платит картой."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "2-е спряжение",
        "v2": "платил",
        "v3": "платила"
    },
    {
        "word": "покупать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "subtext": "покупать еду / покупать билет / покупать онлайн / покупать дом",
        "opposite": "продавать",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Приобретать за деньги.",
                "examples": [
                    "Она покупает еду онлайн. Он хочет купить квартиру."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "покупал",
        "v3": "покупала"
    },
    {
        "word": "открывать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "subtext": "открывать дверь / открывать счет / открывать магазин / открываться в девять",
        "opposite": "закрывать",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать доступным, открытым.",
                "examples": [
                    "Он открывает офис в восемь. Она открывает банковский счет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "открывал",
        "v3": "открывала"
    },
    {
        "word": "закрывать",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "subtext": "закрывать дверь / закрываться в шесть / закрывать счет / закрывать встречу",
        "opposite": "открывать",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Прекращать доступ куда-либо; заканчивать.",
                "examples": [
                    "Офис закрывается в шесть. Она закрывает ноутбук."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "закрывал",
        "v3": "закрывала"
    },
    {
        "word": "начинать",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "subtext": "начинать работу / начинать встречу / начинать новую работу / начинать рано",
        "opposite": "заканчивать",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Приступать к какому-либо действию.",
                "examples": [
                    "Я начинаю работать в восемь тридцать. Она начинает новую работу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "начинал",
        "v3": "начинала"
    },
    {
        "word": "заканчивать",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
        "subtext": "заканчивать работу / заканчивать проект / заканчивать рано / заканчивать поздно",
        "opposite": "начинать",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Доводить до конца, завершать.",
                "examples": [
                    "Он заканчивает работу в пять. Она заканчивает отчет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "заканчивал",
        "v3": "заканчивала"
    },
    {
        "word": "использовать",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "subtext": "пользоваться телефоном / пользоваться общественным транспортом / использовать компьютер / тратить время",
        "form": "verb",
        "definitions": [
            {
                "text": "Пользоваться чем-либо.",
                "examples": [
                    "Я пользуюсь телефоном для всего. Она пользуется общественным транспортом."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "использовал",
        "v3": "использовала"
    },
    {
        "word": "гулять",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "идти на работу / идти домой / медленно гулять / гулять каждый день",
        "form": "verb",
        "definitions": [
            {
                "text": "Идти пешком ради удовольствия или перемещения.",
                "examples": [
                    "Он гуляет до работы каждый день. Она гуляет во время обеденного перерыва."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "гулял",
        "v3": "гуляла"
    },
    {
        "word": "водить",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "subtext": "ехать на работу / водить машину / ехать домой / осторожно водить",
        "form": "verb",
        "definitions": [
            {
                "text": "Управлять транспортным средством.",
                "examples": [
                    "Она едет на работу на машине. Он водит служебный автомобиль."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "2-е спряжение",
        "v2": "водил",
        "v3": "водила"
    },
    {
        "word": "звонить",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "subtext": "звонить кому-то / назначать встречу / перезванивать / звонить по болезни",
        "form": "verb",
        "definitions": [
            {
                "text": "Вызывать по телефону.",
                "examples": [
                    "Я звоню начальнику каждое утро. Она назначает встречу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2-е спряжение",
        "v2": "звонил",
        "v3": "звонила"
    },
    {
        "word": "просыпаться",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "рано просыпаться, просыпаться в 7",
        "opposite": "спать",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Переставать спать.",
                "examples": [
                    "Я просыпаюсь в семь.",
                    "Во сколько ты просыпаешься?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "просыпался",
        "v3": "просыпалась"
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
                    "Я смотрю телевизор по вечерам.",
                    "Они смотрят на птиц."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "2-е спряжение (искл.)",
        "v2": "смотрел",
        "v3": "смотрела"
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
                "text": "Воспринимать написанное.",
                "examples": [
                    "Я читаю книгу каждую ночь.",
                    "Она умеет читать по-русски."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "читал",
        "v3": "читала"
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
                    "Она пишет книги для детей."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "писал",
        "v3": "писала"
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
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1-е спряжение",
        "v2": "приглашал",
        "v3": "приглашала"
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
