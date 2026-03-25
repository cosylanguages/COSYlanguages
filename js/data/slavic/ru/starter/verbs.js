(function() {
    const data = [
    {
        "word": "быть",
        "level": "baby",
        "theme": "name_greeting_A0",
        "emoji": "👤",
        "subtext": "быть готовым / быть уставшим / быть дома",
        "form": "verb",
        "definitions": [
            {
                "text": "Существовать, находиться в каком-либо состоянии.",
                "examples": [
                    "Я был уставшим.",
                    "Она врач.",
                    "Мы опоздали."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "irregular",
        "v2": "был",
        "v3": "была"
    },
    {
        "word": "иметь",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "иметь работу / обедать / иметь проблему",
        "form": "verb",
        "definitions": [
            {
                "text": "Обладать чем-либо.",
                "examples": [
                    "У меня есть работа.",
                    "У него есть машина.",
                    "У неё болит голова."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v2": "имел",
        "v3": "имела"
    },
    {
        "word": "чувствовать",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🌡️",
        "subtext": "чувствовать усталость / чувствовать себя лучше",
        "form": "verb",
        "definitions": [
            {
                "text": "Испытывать какое-либо чувство, физическое или душевное состояние.",
                "examples": [
                    "Я чувствую усталость.",
                    "Она чувствует стресс.",
                    "Он чувствует себя лучше."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "1st_conj",
        "v2": "чувствовал",
        "v3": "чувствовала"
    },
    {
        "word": "давать",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "давать советы / давать деньги / давать подарок",
        "form": "verb",
        "definitions": [
            {
                "text": "Вручать, передавать что-либо.",
                "examples": [
                    "Он дает мне много работы.",
                    "Она дает советы."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "давал",
        "v3": "давала"
    },
    {
        "word": "брать",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "subtext": "садиться в автобус / принимать лекарство",
        "form": "verb",
        "definitions": [
            {
                "text": "Принимать, захватывать руками или иным способом.",
                "examples": [
                    "Я еду на работу на автобусе.",
                    "Она принимает лекарство."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "брал",
        "v3": "брала"
    },
    {
        "word": "получать",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "subtext": "получить работу / уставать / становиться лучше",
        "form": "verb",
        "definitions": [
            {
                "text": "Приобретать, становиться обладателем чего-либо.",
                "examples": [
                    "Я получаю хорошую зарплату.",
                    "Он быстро устает.",
                    "Она получает повышение."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "получал",
        "v3": "получала"
    },
    {
        "word": "класть",
        "level": "baby",
        "theme": "furniture_objects_A0",
        "emoji": "📥",
        "subtext": "класть / убирать / положить телефон",
        "form": "verb",
        "definitions": [
            {
                "text": "Помещать что-либо куда-либо.",
                "examples": [
                    "Положи свою сумку здесь.",
                    "Она кладет деньги в банк."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "клал",
        "v3": "клала"
    },
    {
        "word": "делать",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "делать кофе / принимать решение / совершать ошибку",
        "form": "verb",
        "definitions": [
            {
                "text": "Создавать или производить что-либо.",
                "examples": [
                    "Я делаю кофе утром.",
                    "Она быстро принимает решения."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "делал",
        "v3": "делала"
    },
    {
        "word": "делать",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "делать работу / делать покупки / делать упражнения",
        "form": "verb",
        "definitions": [
            {
                "text": "Заниматься какой-либо деятельностью.",
                "examples": [
                    "Я делаю свою работу каждый день.",
                    "Она делает покупки."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "делал",
        "v3": "делала"
    },
    {
        "word": "использовать",
        "level": "baby",
        "theme": "basic_technology_devices_A0",
        "emoji": "🛠️",
        "subtext": "пользоваться телефоном / пользоваться транспортом",
        "form": "verb",
        "definitions": [
            {
                "text": "Пользоваться чем-либо.",
                "examples": [
                    "Я пользуюсь телефоном для всего.",
                    "Она пользуется общественным транспортом."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "использовал",
        "v3": "использовала"
    },
    {
        "word": "открывать",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "subtext": "открывать дверь / открывать счет / открывать магазин",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать доступным, открытым.",
                "examples": [
                    "Он открывает офис в восемь.",
                    "Она открывает банковский счет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "открывал",
        "v3": "открывала"
    },
    {
        "word": "закрывать",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "subtext": "закрывать дверь / закрываться в шесть",
        "form": "verb",
        "definitions": [
            {
                "text": "Прекращать доступ куда-либо; заканчивать.",
                "examples": [
                    "Офис закрывается в шесть.",
                    "Она закрывает ноутбук."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "закрывал",
        "v3": "закрывала"
    },
    {
        "word": "начинать",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "начинать работу / начинать встречу / начинать рано",
        "form": "verb",
        "definitions": [
            {
                "text": "Приступать к какому-либо действию.",
                "examples": [
                    "Я начинаю работать в восемь тридцать.",
                    "Она начинает новую работу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "начинал",
        "v3": "начинала"
    },
    {
        "word": "заканчивать",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "заканчивать работу / заканчивать проект",
        "form": "verb",
        "definitions": [
            {
                "text": "Доводить до конца, завершать.",
                "examples": [
                    "Он заканчивает работу в пять.",
                    "Она заканчивает отчет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "заканчивал",
        "v3": "заканчивала"
    },
    {
        "word": "помогать",
        "level": "baby",
        "theme": "family_life_A1",
        "emoji": "🤝",
        "subtext": "помогать кому-то / помогать с / просить о помощи",
        "form": "verb",
        "definitions": [
            {
                "text": "Оказывать помощь кому-либо.",
                "examples": [
                    "Он помогает коллегам.",
                    "Вы можете мне помочь?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "помогал",
        "v3": "помогала"
    },
    {
        "word": "пробовать",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "пробовать делать / стараться / пробовать новое",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать попытку что-либо совершить.",
                "examples": [
                    "Я всегда стараюсь делать всё возможное на работе.",
                    "Попробуйте кофе здесь."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "пробовал",
        "v3": "пробовала"
    },
    {
        "word": "показывать",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "📽️",
        "subtext": "показывать кому-то / показывать как / показывать документ",
        "form": "verb",
        "definitions": [
            {
                "text": "Давать возможность увидеть что-либо.",
                "examples": [
                    "Она показывает мне карту.",
                    "Он показывает свою работу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "показывал",
        "v3": "показывала"
    },
    {
        "word": "находить",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "subtext": "найти работу / обнаружить / найти время",
        "form": "verb",
        "definitions": [
            {
                "text": "Обнаруживать что-либо скрытое или потерянное.",
                "examples": [
                    "Я нахожу работу интересной.",
                    "Она нашла новую работу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "находил",
        "v3": "находила"
    },
    {
        "word": "хранить",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "продолжать / молчать / вести учет / оставаться на связи",
        "form": "verb",
        "definitions": [
            {
                "text": "Сохранять что-либо в течение времени.",
                "examples": [
                    "Храните чек.",
                    "Она держит телефон включенным весь день."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "2nd_conj",
        "v2": "хранил",
        "v3": "хранила"
    },
    {
        "word": "терять",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📉",
        "subtext": "потерять работу / терять деньги / терять вес",
        "form": "verb",
        "definitions": [
            {
                "text": "Лишаться чего-либо.",
                "examples": [
                    "Я потерял ключи.",
                    "Она потеряла работу.",
                    "Он никогда не проигрывает."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "терял",
        "v3": "теряла"
    },
    {
        "word": "резать",
        "level": "baby",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "сокращать расходы / резать пополам / сокращать время",
        "form": "verb",
        "definitions": [
            {
                "text": "Разделять на части чем-то острым.",
                "examples": [
                    "Она сокращает обеденный перерыв.",
                    "Это сокращает расходы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "резал",
        "v3": "резала"
    },
    {
        "word": "поворачивать",
        "level": "baby",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "включать / выключать / поворачивать налево / направо",
        "form": "verb",
        "definitions": [
            {
                "text": "Изменять направление движения.",
                "examples": [
                    "Поверните налево у офиса.",
                    "Она выключает свет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "поворачивал",
        "v3": "поворачивала"
    },
    {
        "word": "приносить",
        "level": "baby",
        "theme": "meals_of_the_day_A0",
        "emoji": "🎁",
        "subtext": "приводить кого-то / приносить еду / приносить документ",
        "form": "verb",
        "definitions": [
            {
                "text": "Доставлять что-либо куда-либо.",
                "examples": [
                    "Принесите удостоверение личности на собеседование.",
                    "Он приносит обед."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "приносил",
        "v3": "приносила"
    },
    {
        "word": "сказать",
        "level": "baby",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🗨️",
        "subtext": "сказать привет / сказать да / сказать нет",
        "form": "verb",
        "definitions": [
            {
                "text": "Выразить что-либо словами.",
                "examples": [
                    "Она говорит «привет» каждое утро.",
                    "Он говорит, что это хорошо."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "сказал",
        "v3": "сказала"
    },
    {
        "word": "рассказывать",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "🗣️",
        "subtext": "говорить правду / рассказывать историю / рассказывать кому-то",
        "form": "verb",
        "definitions": [
            {
                "text": "Сообщать что-либо кому-либо.",
                "examples": [
                    "Он говорит правду.",
                    "Она рассказывает мне о своем дне."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "рассказывал",
        "v3": "рассказывала"
    },
    {
        "word": "спрашивать",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "❓",
        "subtext": "задавать вопрос / просить о помощи / спрашивать о",
        "form": "verb",
        "definitions": [
            {
                "text": "Обращаться к кому-либо с вопросом.",
                "examples": [
                    "Она задает хорошие вопросы.",
                    "Я прошу совета у начальника."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "спрашивал",
        "v3": "спрашивала"
    },
    {
        "word": "говорить",
        "level": "baby",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🗣️",
        "subtext": "говорить с кем-то / говорить на языке / говорить четко",
        "form": "verb",
        "definitions": [
            {
                "text": "Выражать мысли словами; владеть языком.",
                "examples": [
                    "Он говорит на трех языках.",
                    "Она говорит со своим менеджером."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "говорил",
        "v3": "говорила"
    },
    {
        "word": "разговаривать",
        "level": "baby",
        "theme": "greetings_social_phrases_A0",
        "emoji": "💬",
        "subtext": "разговаривать с кем-то / разговаривать о / открыто говорить",
        "form": "verb",
        "definitions": [
            {
                "text": "Вести беседу с кем-либо.",
                "examples": [
                    "Мы разговариваем о работе каждый понедельник.",
                    "Она много разговаривает."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "разговаривал",
        "v3": "разговаривала"
    },
    {
        "word": "звонить",
        "level": "baby",
        "theme": "using_a_smartphone_A1",
        "emoji": "📞",
        "subtext": "звонить кому-то / перезванивать / назначать встречу",
        "form": "verb",
        "definitions": [
            {
                "text": "Вызывать по телефону.",
                "examples": [
                    "Я звоню клиентам каждое утро.",
                    "Она назначает встречу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "звонил",
        "v3": "звонила"
    },
    {
        "word": "писать",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "писать письмо / писать отчет / писать заметки",
        "form": "verb",
        "definitions": [
            {
                "text": "Изображать знаки на бумаге или экране.",
                "examples": [
                    "Я пишу электронные письма весь день.",
                    "Она пишет отчет каждую пятницу."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "писал",
        "v3": "писала"
    },
    {
        "word": "читать",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "читать книгу / читать новости / читать внимательно",
        "form": "verb",
        "definitions": [
            {
                "text": "Воспринимать написанное.",
                "examples": [
                    "Она читает новости каждое утро.",
                    "Он читает контракты."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "читал",
        "v3": "читала"
    },
    {
        "word": "слушать",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "слушать музыку / слушать внимательно / слушать подкаст",
        "form": "verb",
        "definitions": [
            {
                "text": "Направлять слух на что-либо.",
                "examples": [
                    "Я слушаю подкасты на работе.",
                    "Она слушает внимательно."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "слушал",
        "v3": "слушала"
    },
    {
        "word": "отвечать",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "📞",
        "subtext": "отвечать на вопрос / отвечать на звонок / на письмо",
        "form": "verb",
        "definitions": [
            {
                "text": "Давать ответ на вопрос или сообщение.",
                "examples": [
                    "Он быстро отвечает на все письма.",
                    "Она ответила на телефонный звонок."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "отвечал",
        "v3": "отвечала"
    },
    {
        "word": "повторять",
        "level": "baby",
        "theme": "classroom_language_A0",
        "emoji": "🔁",
        "subtext": "повторить это / повторяться / повторить заказ",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать или говорить что-либо снова.",
                "examples": [
                    "Пожалуйста, повторите это.",
                    "Он повторил инструкцию дважды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "повторял",
        "v3": "повторяла"
    },
    {
        "word": "идти",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🚶",
        "subtext": "идти на работу / идти домой / выходить / ходить по магазинам",
        "form": "verb",
        "definitions": [
            {
                "text": "Двигаться, перемещаться в пространстве.",
                "examples": [
                    "Я еду на работу на поезде.",
                    "Она уезжает за границу каждый год."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "шёл",
        "v3": "шла"
    },
    {
        "word": "приходить",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🏃‍♂️",
        "subtext": "приходить домой / возвращаться / приходить сюда",
        "form": "verb",
        "definitions": [
            {
                "text": "Прибывать куда-либо.",
                "examples": [
                    "Он приходит в офис в девять.",
                    "Она поздно приходит домой."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "приходил",
        "v3": "приходила"
    },
    {
        "word": "гулять",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "идти на работу пешком / идти домой / гулять медленно",
        "form": "verb",
        "definitions": [
            {
                "text": "Идти пешком.",
                "examples": [
                    "Он гуляет до работы каждый день.",
                    "Она гуляет во время обеденного перерыва."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "гулял",
        "v3": "гуляла"
    },
    {
        "word": "водить",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "subtext": "ехать на работу / водить машину / ехать домой",
        "form": "verb",
        "definitions": [
            {
                "text": "Управлять транспортным средством.",
                "examples": [
                    "Она водит служебный автомобиль.",
                    "Он ездит на встречи на машине."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "водил",
        "v3": "водила"
    },
    {
        "word": "летать",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "subtext": "лететь в город / лететь бизнес-классом / эконом-классом",
        "form": "verb",
        "definitions": [
            {
                "text": "Перемещаться по воздуху.",
                "examples": [
                    "Она летает в Париж на встречи.",
                    "Он ненавидит летать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "летал",
        "v3": "летала"
    },
    {
        "word": "приезжать",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🏁",
        "subtext": "приезжать на работу / приезжать поздно / вовремя",
        "form": "verb",
        "definitions": [
            {
                "text": "Прибывать к месту назначения.",
                "examples": [
                    "Он приезжает в офис в девять.",
                    "Поезд приезжает поздно."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "приезжал",
        "v3": "приезжала"
    },
    {
        "word": "уходить",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🚪",
        "subtext": "уходить из дома / с работы / уходить рано / поздно",
        "form": "verb",
        "definitions": [
            {
                "text": "Отправляться из какого-либо места.",
                "examples": [
                    "Я ухожу из дома в восемь.",
                    "Она ушла из компании в прошлом году."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "уходил",
        "v3": "уходила"
    },
    {
        "word": "двигаться",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "переезжать / переезжать в город / двигаться вперед",
        "form": "verb",
        "definitions": [
            {
                "text": "Изменять положение или место жительства.",
                "examples": [
                    "Они переехали в новую квартиру.",
                    "Она переходит в другую команду."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "двигался",
        "v3": "двигалась"
    },
    {
        "word": "возвращаться",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🔙",
        "subtext": "возвращаться домой / на работу / возвращать звонок",
        "form": "verb",
        "definitions": [
            {
                "text": "Приходить или возвращаться в какое-либо место.",
                "examples": [
                    "Он возвращается из поездки в пятницу.",
                    "Она перезвонила."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "возвращался",
        "v3": "возвращалась"
    },
    {
        "word": "путешествовать",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "✈️",
        "subtext": "путешествовать по работе / за границу / на поезде",
        "form": "verb",
        "definitions": [
            {
                "text": "Ездить из одного места в другое, часто далеко.",
                "examples": [
                    "Она путешествует по работе раз в месяц.",
                    "Он любит путешествовать."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "путешествовал",
        "v3": "путешествовала"
    },
    {
        "word": "есть",
        "level": "baby",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍎",
        "subtext": "завтракать / обедать / ужинать / есть вне дома",
        "form": "verb",
        "definitions": [
            {
                "text": "Принимать пищу.",
                "examples": [
                    "Мы обедаем в час дня.",
                    "Она ест за своим столом."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "irregular",
        "v2": "ел",
        "v3": "ела"
    },
    {
        "word": "пить",
        "level": "baby",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "пить кофе / пить чай / пить воду / пить алкоголь",
        "form": "verb",
        "definitions": [
            {
                "text": "Поглощать жидкость.",
                "examples": [
                    "Она пьет кофе каждое утро.",
                    "Я пью воду на работе."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "пил",
        "v3": "пила"
    },
    {
        "word": "спать",
        "level": "baby",
        "theme": "times_day_A0",
        "emoji": "😴",
        "subtext": "хорошо спать / плохо спать / спать восемь часов",
        "form": "verb",
        "definitions": [
            {
                "text": "Находиться в состоянии сна.",
                "examples": [
                    "Он спит по семь часов в сутки.",
                    "Она плохо спит."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "спал",
        "v3": "спала"
    },
    {
        "word": "готовить",
        "level": "baby",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "готовить ужин / готовить еду / готовить дома",
        "form": "verb",
        "definitions": [
            {
                "text": "Подготавливать пищу с помощью тепла.",
                "examples": [
                    "Она готовит ужин каждый вечер.",
                    "Он готовит для команды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "готовил",
        "v3": "готовила"
    },
    {
        "word": "чистить",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "чистить квартиру / убираться / чистить кухню",
        "form": "verb",
        "definitions": [
            {
                "text": "Удалять грязь с чего-либо.",
                "examples": [
                    "Я убираю квартиру по субботам.",
                    "Он чистит свой стол ежедневно."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "чистил",
        "v3": "чистила"
    },
    {
        "word": "носить",
        "level": "baby",
        "theme": "items_of_clothing_A0",
        "emoji": "👕",
        "subtext": "носить костюм / носить очки / носить повседневную одежду",
        "form": "verb",
        "definitions": [
            {
                "text": "Иметь на себе одежду или аксессуары.",
                "examples": [
                    "Она носит костюм на работу.",
                    "Он носит очки."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "носил",
        "v3": "носила"
    },
    {
        "word": "мыть",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "мыть посуду / стирать одежду / мыть руки",
        "form": "verb",
        "definitions": [
            {
                "text": "Очищать что-либо водой.",
                "examples": [
                    "Он моет машину каждое воскресенье.",
                    "Помой руки."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "мыл",
        "v3": "мыла"
    },
    {
        "word": "покупать",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "subtext": "покупать еду / покупать билет / покупать онлайн",
        "form": "verb",
        "definitions": [
            {
                "text": "Приобретать что-либо за деньги.",
                "examples": [
                    "Она покупает продукты онлайн.",
                    "Он хочет купить квартиру."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "покупал",
        "v3": "покупала"
    },
    {
        "word": "платить",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "оплачивать счет / платить за аренду / платить картой",
        "form": "verb",
        "definitions": [
            {
                "text": "Отдавать деньги в обмен на что-либо.",
                "examples": [
                    "Я плачу за аренду ежемесячно.",
                    "Она платит картой."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "платил",
        "v3": "платила"
    },
    {
        "word": "тратить",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "тратить деньги / тратить время / тратить на аренду",
        "form": "verb",
        "definitions": [
            {
                "text": "Использовать деньги или время.",
                "examples": [
                    "Он слишком много тратит на еду навынос.",
                    "Она тратит время на дорогу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "тратил",
        "v3": "тратила"
    },
    {
        "word": "сохранять",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "копить деньги / копить на дом / экономить время",
        "form": "verb",
        "definitions": [
            {
                "text": "Беречь деньги, не тратя их.",
                "examples": [
                    "Она откладывает сто евро в месяц.",
                    "Сохраните свою работу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "сохранял",
        "v3": "сохраняла"
    },
    {
        "word": "работать",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "работать из дома / работать полный день / усердно работать",
        "form": "verb",
        "definitions": [
            {
                "text": "Заниматься трудом для заработка денег.",
                "examples": [
                    "Он работает из дома три дня в неделю.",
                    "Она усердно работает."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "работал",
        "v3": "работала"
    },
    {
        "word": "жить",
        "level": "baby",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "жить в квартире / жить одному / жить с кем-то",
        "form": "verb",
        "definitions": [
            {
                "text": "Иметь жилище в каком-либо месте; существовать.",
                "examples": [
                    "Она живет в квартире рядом с центром.",
                    "Мы живем вместе."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "1st_conj",
        "v2": "жил",
        "v3": "жила"
    },
    {
        "word": "думать",
        "level": "baby",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "думать о / размышлять / внимательно думать",
        "form": "verb",
        "definitions": [
            {
                "text": "Размышлять; иметь мнение.",
                "examples": [
                    "Я думаю, что это хорошая идея.",
                    "Она подумывает об увольнении."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "1st_conj",
        "v2": "думал",
        "v3": "думала"
    },
    {
        "word": "знать",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "знать кого-то / знать ответ / знать как",
        "form": "verb",
        "definitions": [
            {
                "text": "Обладать информацией или быть знакомым с чем-либо.",
                "examples": [
                    "Я знаю его имя.",
                    "Она знает, как вести переговоры."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v2": "знал",
        "v3": "знала"
    },
    {
        "word": "хотеть",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🙏",
        "subtext": "хотеть работу / хотеть сделать / хотеть больше",
        "form": "verb",
        "definitions": [
            {
                "text": "Иметь желание или намерение.",
                "examples": [
                    "Я хочу кофе.",
                    "Она хочет повышения.",
                    "Он хочет выйти на пенсию."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "mixed_conj",
        "v2": "хотел",
        "v3": "хотела"
    },
    {
        "word": "нуждаться",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "🆘",
        "subtext": "нуждаться в помощи / нуждаться во времени / в деньгах",
        "form": "verb",
        "definitions": [
            {
                "text": "Испытывать потребность в чем-либо.",
                "examples": [
                    "Мне нужен перерыв.",
                    "Ей нужно больше времени.",
                    "Ему нужна помощь."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v2": "нуждался",
        "v3": "нуждалась"
    },
    {
        "word": "нравиться",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "👍",
        "subtext": "мне нравится работа / нравится путешествовать / нравится идея",
        "form": "verb",
        "definitions": [
            {
                "text": "Вызывать симпатию.",
                "examples": [
                    "Мне нравится моя работа.",
                    "Ей нравится готовить дома.",
                    "Ему нравится кофе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "2nd_conj",
        "v2": "нравился",
        "v3": "нравилась"
    },
    {
        "word": "любить",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "❤️",
        "subtext": "любить кого-то / любить делать / любить место",
        "form": "verb",
        "definitions": [
            {
                "text": "Испытывать глубокую привязанность; очень наслаждаться.",
                "examples": [
                    "Она любит свою работу.",
                    "Он любит путешествовать по работе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "2nd_conj",
        "v2": "любил",
        "v3": "любила"
    },
    {
        "word": "ненавидеть",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😡",
        "subtext": "ненавидеть делать / ненавидеть кого-то / ненавидеть встречи",
        "form": "verb",
        "definitions": [
            {
                "text": "Испытывать сильную неприязнь.",
                "examples": [
                    "Он ненавидит ездить на автобусе.",
                    "Она ненавидит долгие встречи."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "2nd_conj",
        "v2": "ненавидел",
        "v3": "ненавидела"
    },
    {
        "word": "надеяться",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🤞",
        "subtext": "надеяться на / надеяться сделать / надеюсь, что так",
        "form": "verb",
        "definitions": [
            {
                "text": "Желать, чтобы что-то произошло.",
                "examples": [
                    "Я надеюсь получить повышение в этом году.",
                    "Она надеется на лучшую зарплату."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v2": "надеялся",
        "v3": "надеялась"
    },
    {
        "word": "помнить",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "помнить сделать / помнить имя / ясно помнить",
        "form": "verb",
        "definitions": [
            {
                "text": "Удерживать в памяти; не забывать.",
                "examples": [
                    "Пожалуйста, помните о крайнем сроке.",
                    "Она помнит каждого клиента."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "2nd_conj",
        "v2": "помнил",
        "v3": "помнила"
    },
    {
        "word": "забывать",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "забыть имя / забыть сделать / совсем забыть",
        "form": "verb",
        "definitions": [
            {
                "text": "Переставать помнить.",
                "examples": [
                    "Не забудьте о встрече.",
                    "Он всегда забывает пароли."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v2": "забывал",
        "v3": "забывала"
    },
    {
        "word": "понимать",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "💡",
        "subtext": "понимать проблему / понимать кого-то / ясно понимать",
        "form": "verb",
        "definitions": [
            {
                "text": "Осознавать смысл чего-либо.",
                "examples": [
                    "Я понимаю контракт.",
                    "Она понимает по-французски."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v2": "понимал",
        "v3": "понимала"
    },
    {
        "word": "решать",
        "level": "baby",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "решать сделать / решать по поводу / принимать решение",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать выбор.",
                "examples": [
                    "Она решила сменить карьеру.",
                    "Он решает быстро."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v2": "решал",
        "v3": "решала"
    },
    {
        "word": "наслаждаться",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "subtext": "наслаждаться делом / наслаждаться едой / своей работой",
        "form": "verb",
        "definitions": [
            {
                "text": "Получать удовольствие от чего-либо.",
                "examples": [
                    "Ему нравится работать из дома.",
                    "Она наслаждается своей новой ролью."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v2": "наслаждался",
        "v3": "наслаждалась"
    },
    {
        "word": "видеть",
        "level": "baby",
        "theme": "body_parts_A0",
        "emoji": "👁️",
        "subtext": "видеть врача / видеть друзей / видеть проблему / ясно видеть",
        "form": "verb",
        "definitions": [
            {
                "text": "Воспринимать зрением.",
                "examples": [
                    "Я увижу своего врача завтра.",
                    "Она видит проблему."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "2nd_conj",
        "v2": "видел",
        "v3": "видела"
    },
    {
        "word": "слышать",
        "level": "baby",
        "theme": "body_parts_A0",
        "emoji": "👂",
        "subtext": "слышать новости / слышать кого-то / слышать звук",
        "form": "verb",
        "definitions": [
            {
                "text": "Воспринимать звуки ушами.",
                "examples": [
                    "Я слышу будильник каждое утро.",
                    "Вы меня слышите?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "2nd_conj",
        "v2": "слышал",
        "v3": "слышала"
    },
    {
        "word": "просыпаться",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "subtext": "рано просыпаться, просыпаться в 7",
        "form": "verb",
        "definitions": [
            {
                "text": "Переставать спать и открывать глаза.",
                "examples": [
                    "Я просыпаюсь в семь часов.",
                    "Во сколько ты просыпаешься?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "просыпался",
        "v3": "просыпалась"
    },
    {
        "word": "смотреть",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "subtext": "смотреть телевизор, смотреть фильм",
        "form": "verb",
        "definitions": [
            {
                "text": "Наблюдать за чем-либо в течение времени.",
                "examples": [
                    "Я смотрю телевизор вечером.",
                    "Они смотрят на птиц."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "смотрел",
        "v3": "смотрела"
    },
    {
        "word": "смотреть",
        "level": "baby",
        "theme": "health_body",
        "emoji": "👀",
        "subtext": "смотреть",
        "form": "verb",
        "definitions": [
            {
                "text": "Направлять взгляд на что-либо.",
                "examples": [
                    "Посмотри на это фото.",
                    "Он ищет свои ключи."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "2nd_conj",
        "v2": "смотрел",
        "v3": "смотрела"
    },
    {
        "word": "играть",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "играть",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать что-то для удовольствия или в игре.",
                "examples": [
                    "Я играю в футбол с друзьями.",
                    "Она любит играть в видеоигры."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "играл",
        "v3": "играла"
    },
    {
        "word": "бегать",
        "level": "baby",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "subtext": "бегать",
        "form": "verb",
        "definitions": [
            {
                "text": "Двигаться очень быстро на ногах.",
                "examples": [
                    "Я бегаю в парке.",
                    "Он бежит, чтобы успеть на автобус."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "бегал",
        "v3": "бегала"
    },
    {
        "word": "сидеть",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🪑",
        "subtext": "сидеть",
        "form": "verb",
        "definitions": [
            {
                "text": "Находиться в положении, при котором опора приходится на ягодицы.",
                "examples": [
                    "Пожалуйста, садись.",
                    "Я сижу на стуле."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "сидел",
        "v3": "сидела"
    },
    {
        "word": "стоять",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🧍",
        "subtext": "стоять",
        "form": "verb",
        "definitions": [
            {
                "text": "Находиться на ногах в вертикальном положении.",
                "examples": [
                    "Пожалуйста, встаньте.",
                    "Она стоит у двери."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "стоял",
        "v3": "стояла"
    },
    {
        "word": "встречать",
        "level": "baby",
        "theme": "society_politics",
        "emoji": "🤝",
        "subtext": "встречать",
        "form": "verb",
        "definitions": [
            {
                "text": "Видеть и разговаривать с кем-то впервые.",
                "examples": [
                    "Рад познакомиться.",
                    "Мы встречаемся каждую пятницу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "встречал",
        "v3": "встречала"
    },
    {
        "word": "учить",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "📚",
        "subtext": "учить",
        "form": "verb",
        "definitions": [
            {
                "text": "Получать знания или навыки.",
                "examples": [
                    "Я хочу учить английский.",
                    "Дети учатся быстро."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "учил",
        "v3": "учила"
    },
    {
        "word": "менять",
        "level": "baby",
        "theme": "time",
        "emoji": "🔄",
        "subtext": "менять",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать что-либо другим.",
                "examples": [
                    "Я хочу сменить одежду.",
                    "Погода быстро меняется."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "менял",
        "v3": "меняла"
    },
    {
        "word": "останавливать",
        "level": "baby",
        "theme": "time",
        "emoji": "🛑",
        "subtext": "останавливать",
        "form": "verb",
        "definitions": [
            {
                "text": "Заканчивать что-то делать или переставать двигаться.",
                "examples": [
                    "Остановите машину.",
                    "Пожалуйста, перестаньте говорить."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "останавливал",
        "v3": "останавливала"
    },
    {
        "word": "добавлять",
        "level": "baby",
        "theme": "numbers_math",
        "emoji": "➕",
        "subtext": "добавлять",
        "form": "verb",
        "definitions": [
            {
                "text": "Соединять вещи вместе для создания большой группы.",
                "examples": [
                    "Добавьте немного сахара в чай.",
                    "Сколько будет пять плюс пять?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "добавлял",
        "v3": "добавляла"
    },
    {
        "word": "побеждать",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "побеждать",
        "form": "verb",
        "definitions": [
            {
                "text": "Быть лучшим в игре или соревновании.",
                "examples": [
                    "Мы хотим победить в игре."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "побеждал",
        "v3": "побеждала"
    },
    {
        "word": "ждать",
        "level": "baby",
        "theme": "time",
        "emoji": "⏳",
        "subtext": "ждать",
        "form": "verb",
        "definitions": [
            {
                "text": "Оставаться на месте, пока что-то не произойдет.",
                "examples": [
                    "Ждите автобус здесь.",
                    "Я жду своего друга."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "ждал",
        "v3": "ждала"
    },
    {
        "word": "умирать",
        "level": "baby",
        "theme": "health_body",
        "emoji": "⚰️",
        "subtext": "умирать",
        "form": "verb",
        "definitions": [
            {
                "text": "Прекращать жить.",
                "examples": [
                    "Растения умирают без воды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "умирал",
        "v3": "умирала"
    },
    {
        "word": "посылать",
        "level": "baby",
        "theme": "language_communication",
        "emoji": "✉️",
        "subtext": "посылать",
        "form": "verb",
        "definitions": [
            {
                "text": "Заставлять что-либо переместиться в какое-то место.",
                "examples": [
                    "Я отправляю письмо каждое утро.",
                    "Вы можете прислать мне фото?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "посылал",
        "v3": "посылала"
    },
    {
        "word": "оставаться",
        "level": "baby",
        "theme": "places_geography",
        "emoji": "🏨",
        "subtext": "оставаться",
        "form": "verb",
        "definitions": [
            {
                "text": "Продолжать находиться в каком-либо месте.",
                "examples": [
                    "Я остаюсь дома по воскресеньям.",
                    "Мы остановились в отеле."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "оставался",
        "v3": "оставалась"
    },
    {
        "word": "падать",
        "level": "baby",
        "theme": "environment_nature",
        "emoji": "🍂",
        "subtext": "падать",
        "form": "verb",
        "definitions": [
            {
                "text": "Перемещаться вниз к земле.",
                "examples": [
                    "Листья падают осенью.",
                    "Осторожно, не упади."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "падал",
        "v3": "падала"
    },
    {
        "word": "проходить",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "🏔️",
        "subtext": "проходить",
        "form": "verb",
        "definitions": [
            {
                "text": "Проходить мимо чего-либо или успешно сдать экзамен.",
                "examples": [
                    "Я прохожу мимо парка по дороге домой.",
                    "Надеюсь, я сдам тест."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "проходил",
        "v3": "проходила"
    },
    {
        "word": "продавать",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "subtext": "продавать",
        "form": "verb",
        "definitions": [
            {
                "text": "Отдавать что-либо кому-либо за деньги.",
                "examples": [
                    "Они продают фрукты на рынке."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "продавал",
        "v3": "продавала"
    },
    {
        "word": "тянуть",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🚜",
        "subtext": "тянуть",
        "form": "verb",
        "definitions": [
            {
                "text": "Перемещать что-либо к себе.",
                "examples": [
                    "Потяните дверь, чтобы открыть её."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "тянул",
        "v3": "тянула"
    },
    {
        "word": "толкать",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🛒",
        "subtext": "толкать",
        "form": "verb",
        "definitions": [
            {
                "text": "Перемещать что-либо от себя.",
                "examples": [
                    "Нажмите на кнопку.",
                    "Я толкаю тележку в магазине."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "толкал",
        "v3": "толкала"
    },
    {
        "word": "нести",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🎒",
        "subtext": "нести",
        "form": "verb",
        "definitions": [
            {
                "text": "Держать что-либо и перемещать это из одного места в другое.",
                "examples": [
                    "Я несу сумку в школу.",
                    "Вы можете помочь мне донести эту коробку?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "нёс",
        "v3": "несла"
    },
    {
        "word": "ломать",
        "level": "baby",
        "theme": "describing_things",
        "emoji": "💔",
        "subtext": "ломать",
        "form": "verb",
        "definitions": [
            {
                "text": "Разделять что-либо на две или более частей.",
                "examples": [
                    "Не разбей стекло.",
                    "Он сломал ногу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "ломал",
        "v3": "ломала"
    },
    {
        "word": "получать",
        "level": "baby",
        "theme": "language_communication",
        "emoji": "📩",
        "subtext": "получать",
        "form": "verb",
        "definitions": [
            {
                "text": "Принимать то, что кто-то дал или послал вам.",
                "examples": [
                    "Я получаю много почты.",
                    "Она получила подарок."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "получал",
        "v3": "получала"
    },
    {
        "word": "соглашаться",
        "level": "baby",
        "theme": "opinion_debate",
        "emoji": "👍",
        "subtext": "соглашаться",
        "form": "verb",
        "definitions": [
            {
                "text": "Иметь такое же мнение, как и кто-то другой.",
                "examples": [
                    "Я согласен с вами.",
                    "Мы согласны с планом."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v2": "соглашался",
        "v3": "соглашалась"
    },
    {
        "word": "рисовать",
        "level": "baby",
        "theme": "culture_arts",
        "emoji": "🎨",
        "subtext": "рисовать",
        "form": "verb",
        "definitions": [
            {
                "text": "Создавать изображение ручкой или карандашом.",
                "examples": [
                    "Мне нравится рисовать птиц.",
                    "Вы можете нарисовать карту?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "рисовал",
        "v3": "рисовала"
    },
    {
        "word": "делиться",
        "level": "baby",
        "theme": "society_politics",
        "emoji": "🍕",
        "subtext": "делиться",
        "form": "verb",
        "definitions": [
            {
                "text": "Отдавать часть чего-либо другим.",
                "examples": [
                    "Давайте поделимся пиццей.",
                    "Я живу в одной комнате с братом."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "делился",
        "v3": "делилась"
    },
    {
        "word": "улыбаться",
        "level": "baby",
        "theme": "feelings_emotions",
        "emoji": "😊",
        "subtext": "улыбаться",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать счастливое выражение лица ртом.",
                "examples": [
                    "У нее красивая улыбка.",
                    "Улыбнитесь на камеру."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "улыбался",
        "v3": "улыбалась"
    },
    {
        "word": "плакать",
        "level": "baby",
        "theme": "feelings_emotions",
        "emoji": "😢",
        "subtext": "плакать",
        "form": "verb",
        "definitions": [
            {
                "text": "Выделять слезы из-за грусти или боли.",
                "examples": [
                    "Ребенок плачет.",
                    "Не плачь."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "плакал",
        "v3": "плакала"
    },
    {
        "word": "танцевать",
        "level": "baby",
        "theme": "culture_arts",
        "emoji": "💃",
        "subtext": "танцевать",
        "form": "verb",
        "definitions": [
            {
                "text": "Двигаться телом под музыку.",
                "examples": [
                    "Я люблю танцевать.",
                    "Они танцуют."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "танцевал",
        "v3": "танцевала"
    },
    {
        "word": "петь",
        "level": "baby",
        "theme": "culture_arts",
        "emoji": "🎤",
        "subtext": "петь",
        "form": "verb",
        "definitions": [
            {
                "text": "Издавать музыкальные звуки голосом.",
                "examples": [
                    "Мне нравится петь в душе.",
                    "Она очень хорошо поет."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "пел",
        "v3": "пела"
    },
    {
        "word": "прыгать",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🦘",
        "subtext": "прыгать",
        "form": "verb",
        "definitions": [
            {
                "text": "Отталкиваться от земли ногами.",
                "examples": [
                    "Ты можешь прыгнуть высоко?",
                    "Кошка прыгнула на стол."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "прыгал",
        "v3": "прыгала"
    },
    {
        "word": "плавать",
        "level": "baby",
        "theme": "common_sports_A0",
        "emoji": "🏊",
        "subtext": "плавать",
        "form": "verb",
        "definitions": [
            {
                "text": "Передвигаться в воде, используя руки и ноги.",
                "examples": [
                    "Я плаваю каждое утро.",
                    "Ты умеешь плавать?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "плавал",
        "v3": "плавала"
    },
    {
        "word": "изучать",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "📖",
        "subtext": "изучать",
        "form": "verb",
        "definitions": [
            {
                "text": "Тратить время на изучение предмета.",
                "examples": [
                    "Я учу английский в школе.",
                    "Он готовится к экзаменам."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "изучал",
        "v3": "изучала"
    },
    {
        "word": "учить",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "👨‍🏫",
        "subtext": "учить",
        "form": "verb",
        "definitions": [
            {
                "text": "Передавать знания другим.",
                "examples": [
                    "Я учу английскому.",
                    "Она преподает в университете."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v2": "учил",
        "v3": "учила"
    },
    {
        "word": "ездить на работу",
        "level": "baby",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "ездить на работу",
        "form": "verb",
        "definitions": [
            {
                "text": "Регулярно ездить на работу и обратно.",
                "examples": [
                    "Я езжу на работу в город на поезде."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "locution",
        "v2": "ездил на работу",
        "v3": "ездила на работу"
    },
    {
        "word": "арендовать",
        "level": "baby",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "арендовать",
        "form": "verb",
        "definitions": [
            {
                "text": "Платить деньги за пользование домом или квартирой, принадлежащей кому-то другому.",
                "examples": [
                    "Мы снимаем квартиру в городе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "арендовал",
        "v3": "арендовала"
    },
    {
        "word": "тренироваться",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "subtext": "тренироваться",
        "form": "verb",
        "definitions": [
            {
                "text": "Заниматься физической активностью, чтобы оставаться здоровым.",
                "examples": [
                    "Я тренируюсь каждое утро."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v2": "тренировался",
        "v3": "тренировалась"
    },
    {
        "word": "стоить",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "стоить",
        "form": "verb",
        "definitions": [
            {
                "text": "Иметь определенную цену.",
                "examples": [
                    "Квартира стоит дорого."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "2nd_conj",
        "v2": "стоил",
        "v3": "стоила"
    },
    {
        "word": "приглашать",
        "level": "baby",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "subtext": "приглашать",
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
        "group": "1st_conj",
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