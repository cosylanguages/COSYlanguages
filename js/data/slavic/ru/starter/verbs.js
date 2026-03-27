(function() {
    const data = [
    {
        "word": "быть",
        "level": "starter",
        "theme": "name_greeting_A1",
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
        "v2": "был",
        "v3": "была",
        "group": "irregular"
    },
    {
        "word": "иметь",
        "level": "starter",
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
        "classification": "irregular",
        "aspect": "stative",
        "v2": "имел",
        "v3": "имела",
        "group": "1st_conj"
    },
    {
        "word": "чувствовать",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
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
        "classification": "irregular",
        "aspect": "both",
        "v2": "чувствовал",
        "v3": "чувствовала",
        "group": "1st_conj"
    },
    {
        "word": "давать",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "давать советы / давать деньги / давать подарок",
        "opposite": "take",
        "oppositeEmoji": "👜",
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
        "v2": "давал",
        "v3": "давала",
        "group": "1st_conj"
    },
    {
        "word": "брать",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "садиться в автобус / принимать лекарство",
        "opposite": "give",
        "oppositeEmoji": "🎁",
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
        "v2": "брал",
        "v3": "брала",
        "group": "1st_conj"
    },
    {
        "word": "получать",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "получал",
        "v3": "получала",
        "group": "1st_conj"
    },
    {
        "word": "класть",
        "level": "starter",
        "theme": "furniture_objects_A1",
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
        "v2": "клал",
        "v3": "клала",
        "group": "1st_conj"
    },
    {
        "word": "делать",
        "level": "starter",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "делал",
        "v3": "делала",
        "group": "1st_conj"
    },
    {
        "word": "делать",
        "level": "starter",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "делал",
        "v3": "делала",
        "group": "1st_conj"
    },
    {
        "word": "использовать",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
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
        "v2": "использовал",
        "v3": "использовала",
        "group": "1st_conj"
    },
    {
        "word": "открывать",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "открывать дверь / открывать счет / открывать магазин",
        "opposite": "close",
        "oppositeEmoji": "🔒",
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
        "v2": "открывал",
        "v3": "открывала",
        "group": "1st_conj"
    },
    {
        "word": "закрывать",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "закрывать дверь / закрываться в шесть",
        "opposite": "open",
        "oppositeEmoji": "📖",
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
        "v2": "закрывал",
        "v3": "закрывала",
        "group": "1st_conj"
    },
    {
        "word": "начинать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "начинать работу / начинать встречу / начинать рано",
        "opposite": "finish",
        "oppositeEmoji": "🏁",
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
        "v2": "начинал",
        "v3": "начинала",
        "group": "1st_conj"
    },
    {
        "word": "заканчивать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "заканчивать работу / заканчивать проект",
        "opposite": "start",
        "oppositeEmoji": "▶️",
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
        "v2": "заканчивал",
        "v3": "заканчивала",
        "group": "1st_conj"
    },
    {
        "word": "помогать",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "v2": "помогал",
        "v3": "помогала",
        "group": "1st_conj"
    },
    {
        "word": "пробовать",
        "level": "starter",
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
        "classification": "regular",
        "aspect": "action",
        "v2": "пробовал",
        "v3": "пробовала",
        "group": "1st_conj"
    },
    {
        "word": "показывать",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "показывал",
        "v3": "показывала",
        "group": "1st_conj"
    },
    {
        "word": "находить",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "находил",
        "v3": "находила",
        "group": "2nd_conj"
    },
    {
        "word": "хранить",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "продолжать / молчать / вести учет",
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
        "classification": "irregular",
        "aspect": "both",
        "v2": "хранил",
        "v3": "хранила",
        "group": "2nd_conj"
    },
    {
        "word": "терять",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "потерять работу / терять деньги / терять вес",
        "opposite": "win",
        "oppositeEmoji": "🏆",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "терял",
        "v3": "теряла",
        "group": "1st_conj"
    },
    {
        "word": "резать",
        "level": "starter",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "резал",
        "v3": "резала",
        "group": "1st_conj"
    },
    {
        "word": "поворачивать",
        "level": "starter",
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
        "v2": "поворачивал",
        "v3": "поворачивала",
        "group": "1st_conj"
    },
    {
        "word": "приносить",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "приносил",
        "v3": "приносила",
        "group": "2nd_conj"
    },
    {
        "word": "сказать",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "v2": "сказал",
        "v3": "сказала",
        "group": "1st_conj"
    },
    {
        "word": "рассказывать",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "рассказывал",
        "v3": "рассказывала",
        "group": "1st_conj"
    },
    {
        "word": "спрашивать",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "v2": "спрашивал",
        "v3": "спрашивала",
        "group": "1st_conj"
    },
    {
        "word": "говорить",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "говорил",
        "v3": "говорила",
        "group": "2nd_conj"
    },
    {
        "word": "разговаривать",
        "level": "starter",
        "theme": "family_life_A1",
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
        "v2": "разговаривал",
        "v3": "разговаривала",
        "group": "1st_conj"
    },
    {
        "word": "звонить",
        "level": "starter",
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
        "v2": "звонил",
        "v3": "звонила",
        "group": "2nd_conj"
    },
    {
        "word": "писать",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "писать письмо / писать отчет / писать заметки",
        "opposite": "read",
        "oppositeEmoji": "📖",
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
        "v2": "писал",
        "v3": "писала",
        "group": "1st_conj"
    },
    {
        "word": "читать",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "читать книгу / читать новости / читать внимательно",
        "opposite": "write",
        "oppositeEmoji": "✍️",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "читал",
        "v3": "читала",
        "group": "1st_conj"
    },
    {
        "word": "слушать",
        "level": "starter",
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
        "v2": "слушал",
        "v3": "слушала",
        "group": "1st_conj"
    },
    {
        "word": "отвечать",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "v2": "отвечал",
        "v3": "отвечала",
        "group": "1st_conj"
    },
    {
        "word": "повторять",
        "level": "starter",
        "theme": "classroom_language_A1",
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
        "v2": "повторял",
        "v3": "повторяла",
        "group": "1st_conj"
    },
    {
        "word": "идти",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "идти на работу / идти домой / выходить",
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
        "v2": "шёл",
        "v3": "шла",
        "group": "1st_conj"
    },
    {
        "word": "приходить",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "приходить домой / возвращаться / приходить сюда",
        "opposite": "go",
        "oppositeEmoji": "🚶",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "приходил",
        "v3": "приходила",
        "group": "2nd_conj"
    },
    {
        "word": "гулять",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "v2": "гулял",
        "v3": "гуляла",
        "group": "1st_conj"
    },
    {
        "word": "водить",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "v2": "водил",
        "v3": "водила",
        "group": "2nd_conj"
    },
    {
        "word": "летать",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "лететь в город / лететь бизнес-классом",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "летал",
        "v3": "летала",
        "group": "1st_conj"
    },
    {
        "word": "приезжать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "v2": "приезжал",
        "v3": "приезжала",
        "group": "1st_conj"
    },
    {
        "word": "уходить",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "уходить из дома / с работы / уходить рано",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "уходил",
        "v3": "уходила",
        "group": "2nd_conj"
    },
    {
        "word": "двигаться",
        "level": "starter",
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
        "v2": "двигался",
        "v3": "двигалась",
        "group": "1st_conj"
    },
    {
        "word": "возвращаться",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "возвращаться домой / на работу",
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
        "v2": "возвращался",
        "v3": "возвращалась",
        "group": "1st_conj"
    },
    {
        "word": "путешествовать",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "путешествовать по работе / за границу",
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
        "v2": "путешествовал",
        "v3": "путешествовала",
        "group": "1st_conj"
    },
    {
        "word": "есть",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "завтракать / обедать / ужинать",
        "opposite": "drink",
        "oppositeEmoji": "🥛",
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
        "v2": "ел",
        "v3": "ела",
        "group": "irregular"
    },
    {
        "word": "пить",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "пить кофе / пить чай / пить воду",
        "opposite": "eat",
        "oppositeEmoji": "🍎",
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
        "v2": "пил",
        "v3": "пила",
        "group": "1st_conj"
    },
    {
        "word": "спать",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "хорошо спать / плохо спать / спать восемь часов",
        "opposite": "wake up",
        "oppositeEmoji": "⏰",
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
        "v2": "спал",
        "v3": "спала",
        "group": "2nd_conj"
    },
    {
        "word": "готовить",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "готовить ужин / готовить еду",
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
        "v2": "готовил",
        "v3": "готовила",
        "group": "2nd_conj"
    },
    {
        "word": "чистить",
        "level": "starter",
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
        "v2": "чистил",
        "v3": "чистила",
        "group": "2nd_conj"
    },
    {
        "word": "носить",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "носить костюм / носить очки",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "носил",
        "v3": "носила",
        "group": "2nd_conj"
    },
    {
        "word": "мыть",
        "level": "starter",
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
        "v2": "мыл",
        "v3": "мыла",
        "group": "1st_conj"
    },
    {
        "word": "покупать",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "покупать еду / покупать билет",
        "opposite": "sell",
        "oppositeEmoji": "🏷️",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "покупал",
        "v3": "покупала",
        "group": "1st_conj"
    },
    {
        "word": "платить",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
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
        "v2": "платил",
        "v3": "платила",
        "group": "2nd_conj"
    },
    {
        "word": "тратить",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "тратить деньги / тратить время",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "тратил",
        "v3": "тратила",
        "group": "2nd_conj"
    },
    {
        "word": "сохранять",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "копить деньги / копить на дом / экономить время",
        "opposite": "spend",
        "oppositeEmoji": "💸",
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
        "v2": "сохранял",
        "v3": "сохраняла",
        "group": "1st_conj"
    },
    {
        "word": "работать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "работать из дома / работать полный день",
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
        "v2": "работал",
        "v3": "работала",
        "group": "1st_conj"
    },
    {
        "word": "жить",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "жить в квартире / жить одному / жить с кем-то",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
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
        "classification": "regular",
        "aspect": "stative",
        "v2": "жил",
        "v3": "жила",
        "group": "1st_conj"
    },
    {
        "word": "думать",
        "level": "starter",
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
        "classification": "irregular",
        "aspect": "both",
        "v2": "думал",
        "v3": "думала",
        "group": "1st_conj"
    },
    {
        "word": "знать",
        "level": "starter",
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
        "classification": "irregular",
        "aspect": "stative",
        "v2": "знал",
        "v3": "знала",
        "group": "1st_conj"
    },
    {
        "word": "хотеть",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "v2": "хотел",
        "v3": "хотела",
        "group": "mixed_conj"
    },
    {
        "word": "нуждаться",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "v2": "нуждался",
        "v3": "нуждалась",
        "group": "1st_conj"
    },
    {
        "word": "нравиться",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "v2": "нравился",
        "v3": "нравилась",
        "group": "2nd_conj"
    },
    {
        "word": "любить",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "v2": "любил",
        "v3": "любила",
        "group": "2nd_conj"
    },
    {
        "word": "ненавидеть",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "v2": "ненавидел",
        "v3": "ненавидела",
        "group": "2nd_conj"
    },
    {
        "word": "надеяться",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "v2": "надеялся",
        "v3": "надеялась",
        "group": "1st_conj"
    },
    {
        "word": "помнить",
        "level": "starter",
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
        "v2": "помнил",
        "v3": "помнила",
        "group": "2nd_conj"
    },
    {
        "word": "забывать",
        "level": "starter",
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
        "classification": "irregular",
        "aspect": "stative",
        "v2": "забывал",
        "v3": "забывала",
        "group": "1st_conj"
    },
    {
        "word": "понимать",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "classification": "irregular",
        "aspect": "stative",
        "v2": "понимал",
        "v3": "понимала",
        "group": "1st_conj"
    },
    {
        "word": "решать",
        "level": "starter",
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
        "v2": "решал",
        "v3": "решала",
        "group": "1st_conj"
    },
    {
        "word": "наслаждаться",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "v2": "наслаждался",
        "v3": "наслаждалась",
        "group": "1st_conj"
    },
    {
        "word": "видеть",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "видеть врача / видеть друзей / видеть проблему",
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
        "v2": "видел",
        "v3": "видела",
        "group": "2nd_conj"
    },
    {
        "word": "слышать",
        "level": "starter",
        "theme": "body_parts_A1",
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
        "v2": "слышал",
        "v3": "слышала",
        "group": "2nd_conj"
    },
    {
        "word": "просыпаться",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "рано просыпаться / просыпаться в 7 / просыпаться уставшим",
        "opposite": "sleep",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Переставать спать и открывать глаза.",
                "examples": [
                    "Я просыпаюсь в семь часов.",
                    "Во сколько ты просыпаешься?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "просыпался",
        "v3": "просыпалась",
        "group": "1st_conj"
    },
    {
        "word": "смотреть",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "смотреть телевизор / смотреть фильм / смотреть новости",
        "definitions": [
            {
                "text": "Наблюдать за чем-либо в течение времени.",
                "examples": [
                    "Я смотрю телевизор вечером.",
                    "Они смотрят на птиц."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "смотрел",
        "v3": "смотрела",
        "group": "2nd_conj"
    },
    {
        "word": "смотреть",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "смотреть / искать / выглядеть счастливым",
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
        "classification": "regular",
        "aspect": "both",
        "v2": "смотрел",
        "v3": "смотрела",
        "group": "2nd_conj"
    },
    {
        "word": "играть",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "играть в спорт / играть в игру / играть роль",
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
        "v2": "играл",
        "v3": "играла",
        "group": "1st_conj"
    },
    {
        "word": "бегать",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "бегать / бежать гонку / управлять бизнесом",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "бегал",
        "v3": "бегала",
        "group": "1st_conj"
    },
    {
        "word": "сидеть",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "сидеть / сидеть за столом / сидеть на встрече",
        "opposite": "stand",
        "oppositeEmoji": "🧍",
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
        "v2": "сидел",
        "v3": "сидела",
        "group": "2nd_conj"
    },
    {
        "word": "стоять",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "стоять / вставать / стоять в очереди",
        "opposite": "sit",
        "oppositeEmoji": "🪑",
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
        "v2": "стоял",
        "v3": "стояла",
        "group": "2nd_conj"
    },
    {
        "word": "встречать",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "встречал",
        "v3": "встречала",
        "subtext": "встречать кого-то / встретиться за обедом",
        "group": "1st_conj"
    },
    {
        "word": "учить",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "учить / учить язык / учиться быстро",
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
        "classification": "both",
        "aspect": "action",
        "v2": "учил",
        "v3": "учила",
        "group": "2nd_conj"
    },
    {
        "word": "менять",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "менять / менять мнение / менять план",
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
        "v2": "менял",
        "v3": "меняла",
        "group": "1st_conj"
    },
    {
        "word": "останавливать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "останавливать / перестать делать / остановить кого-то",
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
        "v2": "останавливал",
        "v3": "останавливала",
        "group": "1st_conj"
    },
    {
        "word": "добавлять",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "добавлять / добавить комментарий / добавить сахар",
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
        "v2": "добавлял",
        "v3": "добавляла",
        "group": "1st_conj"
    },
    {
        "word": "побеждать",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "побеждать / выиграть приз / выиграть контракт",
        "opposite": "lose",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "Быть лучшим в игре или соревновании.",
                "examples": [
                    "Мы хотим победить в игре."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "побеждал",
        "v3": "побеждала",
        "group": "1st_conj"
    },
    {
        "word": "ждать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "ждать / ждать кого-то / подождать минутку",
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
        "classification": "regular",
        "aspect": "action",
        "v2": "ждал",
        "v3": "ждала",
        "group": "1st_conj"
    },
    {
        "word": "умирать",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "умирать / умирать от / вымирать",
        "opposite": "live",
        "oppositeEmoji": "🏠",
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
        "v2": "умирал",
        "v3": "умирала",
        "group": "1st_conj"
    },
    {
        "word": "посылать",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✉️",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "посылал",
        "v3": "посылала",
        "subtext": "посылать / отправить письмо / отправить сообщение",
        "group": "1st_conj"
    },
    {
        "word": "оставаться",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "оставаться / оставаться дома / остановиться в отеле",
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
        "v2": "оставался",
        "v3": "оставалась",
        "group": "1st_conj"
    },
    {
        "word": "падать",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "падать / влюбиться / заснуть",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "падал",
        "v3": "падала",
        "group": "1st_conj"
    },
    {
        "word": "проходить",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "проходить / сдать экзамен / проводить время",
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
        "v2": "проходил",
        "v3": "проходила",
        "group": "2nd_conj"
    },
    {
        "word": "продавать",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "продавать / продавать онлайн / продавать на рынке",
        "opposite": "buy",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Отдавать что-либо кому-либо за деньги.",
                "examples": [
                    "Они продают фрукты на рынке."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "продавал",
        "v3": "продавала",
        "group": "1st_conj"
    },
    {
        "word": "тянуть",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "тянуть / тянуть дверь / отъезжать",
        "opposite": "push",
        "oppositeEmoji": "🛒",
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
        "v2": "тянул",
        "v3": "тянула",
        "group": "1st_conj"
    },
    {
        "word": "толкать",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "толкать / нажать кнопку / толкать тележку",
        "opposite": "pull",
        "oppositeEmoji": "🚜",
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
        "v2": "толкал",
        "v3": "толкала",
        "group": "1st_conj"
    },
    {
        "word": "нести",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "нести / нести сумку / нести заметки",
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
        "classification": "regular",
        "aspect": "action",
        "v2": "нёс",
        "v3": "несла",
        "group": "1st_conj"
    },
    {
        "word": "ломать",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "ломать / разбить стекло / сделать перерыв",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "ломал",
        "v3": "ломала",
        "group": "1st_conj"
    },
    {
        "word": "получать",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "получать / получить письмо / получить платеж",
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
        "v2": "получал",
        "v3": "получала",
        "group": "1st_conj"
    },
    {
        "word": "соглашаться",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "соглашаться / соглашаться с кем-то",
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
        "v2": "соглашался",
        "v3": "соглашалась",
        "group": "1st_conj"
    },
    {
        "word": "рисовать",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "рисовать / рисовать картинку / рисовать линию",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "рисовал",
        "v3": "рисовала",
        "group": "1st_conj"
    },
    {
        "word": "делиться",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "делиться / делить комнату / делиться идеей",
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
        "v2": "делился",
        "v3": "делилась",
        "group": "2nd_conj"
    },
    {
        "word": "улыбаться",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "улыбаться / улыбаться кому-то / широко улыбаться",
        "opposite": "cry",
        "oppositeEmoji": "😢",
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
        "v2": "улыбался",
        "v3": "улыбалась",
        "group": "1st_conj"
    },
    {
        "word": "плакать",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "плакать / плакать о помощи / плакать из-за чего-то",
        "opposite": "smile",
        "oppositeEmoji": "😊",
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
        "v2": "плакал",
        "v3": "плакала",
        "group": "1st_conj"
    },
    {
        "word": "танцевать",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "танцевать / танцевать под музыку / идти танцевать",
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
        "v2": "танцевал",
        "v3": "танцевала",
        "group": "1st_conj"
    },
    {
        "word": "петь",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "петь / петь песню / подпевать",
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
        "v2": "пел",
        "v3": "пела",
        "group": "1st_conj"
    },
    {
        "word": "прыгать",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "прыгать / прыгать высоко / перепрыгивать",
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
        "v2": "прыгал",
        "v3": "прыгала",
        "group": "1st_conj"
    },
    {
        "word": "плавать",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "плавать / идти плавать / плавать кругами",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "плавал",
        "v3": "плавала",
        "group": "1st_conj"
    },
    {
        "word": "учиться",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "учиться / учить английский / готовиться к экзамену",
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
        "v2": "учился",
        "v3": "училась",
        "group": "2nd_conj"
    },
    {
        "word": "преподавать",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "преподавать / учить кого-то / преподавать предмет",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "преподавал",
        "v3": "преподавала",
        "group": "1st_conj"
    },
    {
        "word": "ездить на работу",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "ездить на работу / ежедневная поездка / долгая поездка",
        "form": "verb",
        "definitions": [
            {
                "text": "Регулярно ездить на работу и обратно.",
                "examples": [
                    "Я езжу на работу в город на поезде."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ездил на работу",
        "v3": "ездила на работу",
        "group": "locution"
    },
    {
        "word": "снимать",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "снимать / снимать квартиру / снимать комнату",
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
        "v2": "снимал",
        "v3": "снимала",
        "group": "1st_conj"
    },
    {
        "word": "тренироваться",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
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
        "v2": "тренировался",
        "v3": "тренировалась",
        "subtext": "тренироваться / тренироваться регулярно / в зале",
        "group": "1st_conj"
    },
    {
        "word": "стоить",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Иметь определенную цену.",
                "examples": [
                    "Квартира стоит дорого."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "стоил",
        "v3": "стоила",
        "subtext": "стоить / стоить дорого / стоить денег",
        "group": "2nd_conj"
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
        "v2": "приглашал",
        "v3": "приглашала",
        "subtext": "приглашать / пригласить кого-то / пригласить на ужин",
        "group": "1st_conj"
    },
    {
        "word": "вставать",
        "definitions": [
            {
                "text": "Вставать с постели после пробуждения.",
                "examples": [
                    "Он встает в семь и сразу делает кофе."
                ]
            }
        ],
        "subtext": "вставать рано / вставать поздно / вставать быстро",
        "classification": "irregular",
        "aspect": "action",
        "v2": "вставал",
        "v3": "вставала",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "завтракать",
        "definitions": [
            {
                "text": "Принимать утреннюю пищу.",
                "examples": [
                    "Она всегда завтракает перед выходом из дома."
                ]
            }
        ],
        "subtext": "завтракать дома / быстрый завтрак / пропускать завтрак",
        "classification": "irregular",
        "aspect": "action",
        "v2": "завтракал",
        "v3": "завтракала",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "возвращаться",
        "definitions": [
            {
                "text": "Вернуться в какое-либо место.",
                "examples": [
                    "Она возвращается с обеда в два."
                ]
            }
        ],
        "subtext": "возвращаться домой / возвращаться поздно / из поездки",
        "classification": "irregular",
        "aspect": "action",
        "v2": "возвращался",
        "v3": "возвращалась",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "ложиться спать",
        "definitions": [
            {
                "text": "Ложиться в постель, чтобы заснуть.",
                "examples": [
                    "Они ложатся спать в одиннадцать каждый вечер."
                ]
            }
        ],
        "subtext": "ложиться спать рано / ложиться поздно / ложиться уставшим",
        "classification": "irregular",
        "aspect": "action",
        "v2": "ложился спать",
        "v3": "ложилась спать",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "2nd_conj"
    },
    {
        "word": "проверять",
        "definitions": [
            {
                "text": "Изучать или проверять что-либо.",
                "examples": [
                    "Я проверяю электронную почту первым делом каждое утро."
                ]
            }
        ],
        "subtext": "проверять почту / проверять сообщения / проверять документ",
        "classification": "regular",
        "aspect": "action",
        "v2": "проверял",
        "v3": "проверяла",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "отвечать",
        "definitions": [
            {
                "text": "Отвечать на сообщение или вопрос.",
                "examples": [
                    "Он всегда отвечает на письма в тот же день."
                ]
            }
        ],
        "subtext": "отвечать на письмо / отвечать быстро / отвечать на сообщение",
        "classification": "regular",
        "aspect": "action",
        "v2": "отвечал",
        "v3": "отвечала",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "презентовать",
        "definitions": [
            {
                "text": "Показывать или объяснять что-то группе людей.",
                "examples": [
                    "Она презентует результаты каждую пятницу после обеда."
                ]
            }
        ],
        "subtext": "презентовать отчет / презентовать идеи / клиенту",
        "classification": "regular",
        "aspect": "action",
        "v2": "презентовал",
        "v3": "презентовала",
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "посещать",
        "definitions": [
            {
                "text": "Ходить на мероприятие или собрание.",
                "examples": [
                    "Я посещаю собрание руководства каждый понедельник."
                ]
            }
        ],
        "subtext": "посещать собрание / посещать курс / посещать мероприятие",
        "classification": "regular",
        "aspect": "action",
        "v2": "посещал",
        "v3": "посещала",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "управлять",
        "definitions": [
            {
                "text": "Руководить людьми или ситуацией.",
                "examples": [
                    "Она управляет командой из восьми человек."
                ]
            }
        ],
        "subtext": "управлять командой / управлять проектом / временем",
        "classification": "regular",
        "aspect": "action",
        "v2": "управлял",
        "v3": "управляла",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "взимать плату",
        "definitions": [
            {
                "text": "Просить сумму денег за услугу.",
                "examples": [
                    "Механик взял триста евро."
                ]
            }
        ],
        "subtext": "взимать комиссию / плата за услугу / брать дополнительно",
        "classification": "regular",
        "aspect": "action",
        "v2": "взимал плату",
        "v3": "взимала плату",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "позволить себе",
        "definitions": [
            {
                "text": "Иметь достаточно денег на что-либо.",
                "examples": [
                    "Они не могут позволить себе купить квартиру в центре города."
                ]
            }
        ],
        "subtext": "позволить себе дом / позволить себе путешествие",
        "classification": "regular",
        "aspect": "stative",
        "v2": "позволил себе",
        "v3": "позволила себе",
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "2nd_conj"
    },
    {
        "word": "быть должным",
        "definitions": [
            {
                "text": "Быть обязанным выплатить деньги кому-либо.",
                "examples": [
                    "Он должен банку пятьдесят тысяч евро."
                ]
            }
        ],
        "subtext": "быть должным деньги / быть должным кому-то / много",
        "classification": "irregular",
        "aspect": "stative",
        "v2": "был должен",
        "v3": "была должна",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
    },
    {
        "word": "зарабатывать",
        "definitions": [
            {
                "text": "Получать деньги за выполненную работу.",
                "examples": [
                    "Она зарабатывает хорошую зарплату в качестве менеджера проектов."
                ]
            }
        ],
        "subtext": "зарабатывать зарплату / зарабатывать деньги / больше",
        "classification": "regular",
        "aspect": "action",
        "v2": "зарабатывал",
        "v3": "зарабатывала",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "навещать",
        "definitions": [
            {
                "text": "Ходить в гости к человеку или посещать место.",
                "examples": [
                    "Она навещает своих родителей каждые вторые выходные."
                ]
            }
        ],
        "subtext": "навещать семью / навестить друга / посетить город",
        "classification": "regular",
        "aspect": "action",
        "v2": "навещал",
        "v3": "навещала",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "праздновать",
        "definitions": [
            {
                "text": "Заниматься чем-то приятным по особому случаю.",
                "examples": [
                    "Они вместе празднуют каждую годовщину работы."
                ]
            }
        ],
        "subtext": "праздновать день рождения / праздновать успех / вместе",
        "classification": "regular",
        "aspect": "action",
        "v2": "праздновал",
        "v3": "праздновала",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "рекомендовать",
        "definitions": [
            {
                "text": "Предлагать что-либо как хорошее или подходящее.",
                "examples": [
                    "Можете ли вы порекомендовать хороший ресторан рядом с офисом?"
                ]
            }
        ],
        "subtext": "рекомендовать место / рекомендовать кого-то / фильм",
        "classification": "regular",
        "aspect": "action",
        "v2": "рекомендовал",
        "v3": "рекомендовала",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "болеть",
        "definitions": [
            {
                "text": "Причинять боль; или чувствовать боль.",
                "examples": [
                    "У меня болит спина после того, как я просидел весь день."
                ]
            }
        ],
        "subtext": "болит спина / причинить боль кому-то / это больно",
        "classification": "irregular",
        "aspect": "both",
        "v2": "болел",
        "v3": "болела",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "2nd_conj"
    },
    {
        "word": "отдыхать",
        "definitions": [
            {
                "text": "Прекращать работу и расслабляться, чтобы восстановить силы.",
                "examples": [
                    "Он отдыхает по часу после обеда каждый день."
                ]
            }
        ],
        "subtext": "отдыхать дома / отдыхать после работы / нужен отдых",
        "classification": "regular",
        "aspect": "action",
        "v2": "отдыхал",
        "v3": "отдыхала",
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "выздоравливать",
        "definitions": [
            {
                "text": "Возвращаться к хорошему здоровью после болезни или травмы.",
                "examples": [
                    "Она выздоравливает после травмы спины."
                ]
            }
        ],
        "subtext": "выздоравливать после болезни / быстро / полностью",
        "classification": "regular",
        "aspect": "action",
        "v2": "выздоравливал",
        "v3": "выздоравливала",
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "бронировать",
        "definitions": [
            {
                "text": "Резервировать место, билет или услугу заранее.",
                "examples": [
                    "Я всегда бронирую отели онлайн."
                ]
            }
        ],
        "subtext": "бронировать отель / бронировать рейс / столик",
        "classification": "regular",
        "aspect": "action",
        "v2": "бронировал",
        "v3": "бронировала",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "собирать вещи",
        "definitions": [
            {
                "text": "Складывать предметы в сумку или чемодан для поездки.",
                "examples": [
                    "Он собирает чемодан накануне поездки."
                ]
            }
        ],
        "subtext": "собирать сумку / собирать чемодан / собираться налегке",
        "classification": "regular",
        "aspect": "action",
        "v2": "собирал вещи",
        "v3": "собирала вещи",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "отменять",
        "definitions": [
            {
                "text": "Решать, что запланированное не состоится.",
                "examples": [
                    "Ей пришлось отменить рейс из-за болезни."
                ]
            }
        ],
        "subtext": "отменить рейс / отменить бронь / отменить встречу",
        "classification": "regular",
        "aspect": "action",
        "v2": "отменял",
        "v3": "отменяла",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "скучать",
        "definitions": [
            {
                "text": "Опоздать на транспорт; или грустить об отсутствии кого-то.",
                "examples": [
                    "Он опоздал на поезд, и ему пришлось ждать час."
                ]
            }
        ],
        "subtext": "опоздать на поезд / опоздать на рейс / скучать по кому-то",
        "classification": "regular",
        "aspect": "both",
        "v2": "скучал",
        "v3": "скучала",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj"
    },
    {
        "word": "заказывать",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "заказывать еду / заказывать напиток / заказывать онлайн",
        "form": "verb",
        "definitions": [
            {
                "text": "Официально запрашивать что-либо, особенно еду или товары.",
                "examples": [
                    "Я всегда заказываю обед в одном и том же месте рядом с офисом."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "заказывал",
        "v3": "заказывала",
        "group": "1st_conj"
    },
    {
        "word": "объяснять",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💡",
        "subtext": "объяснять процесс / объяснять четко / кому-то",
        "form": "verb",
        "definitions": [
            {
                "text": "Разъяснять что-либо, приводя подробности.",
                "examples": [
                    "Он всегда объясняет процесс новым членам команды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "объяснял",
        "v3": "объясняла",
        "group": "1st_conj"
    },
    {
        "word": "благодарить",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "благодарить кого-то / благодарить за / большое спасибо",
        "form": "verb",
        "definitions": [
            {
                "text": "Выражать благодарность кому-либо.",
                "examples": [
                    "Он поблагодарил команду за усердную работу над проектом."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "благодарил",
        "v3": "благодарила",
        "group": "2nd_conj"
    },
    {
        "word": "представлять",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "представиться / представить кого-то / представить тему",
        "form": "verb",
        "definitions": [
            {
                "text": "Представлять кого-либо другому человеку.",
                "examples": [
                    "Она представилась в начале встречи."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "представлял",
        "v3": "представляла",
        "group": "1st_conj"
    },
    {
        "word": "расслабляться",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "расслабляться дома / после работы / на отдыхе",
        "form": "verb",
        "definitions": [
            {
                "text": "Прекращать работу и отдыхать; становиться менее напряженным.",
                "examples": [
                    "Я расслабляюсь на выходных и никогда не проверяю почту."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "расслаблялся",
        "v3": "расслаблялась",
        "group": "1st_conj"
    },
    {
        "word": "чинить",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "чинить что-то / отремонтировать / стоимость ремонта",
        "form": "verb",
        "definitions": [
            {
                "text": "Исправлять то, что сломано.",
                "examples": [
                    "Домовладелец не спешит чинить вещи в квартире."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "чинил",
        "v3": "чинила",
        "group": "2nd_conj"
    },
    {
        "word": "случаться",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "что случилось / случиться с кем-то / это случается",
        "form": "verb",
        "definitions": [
            {
                "text": "Происходить; иметь место.",
                "examples": [
                    "Что случилось на встрече? Что-то пошло не так."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "случался",
        "v3": "случалась",
        "group": "1st_conj"
    },
    {
        "word": "казаться",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🎭",
        "subtext": "казаться хорошим / казаться обеспокоенным / счастливым",
        "form": "verb",
        "definitions": [
            {
                "text": "Представляться чем-либо; производить впечатление.",
                "examples": [
                    "Она кажется очень уверенной на встречах с клиентами."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "казался",
        "v3": "казалась",
        "group": "1st_conj"
    },
    {
        "word": "значить",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "значить что-то / что это значит / иметь в виду",
        "form": "verb",
        "definitions": [
            {
                "text": "Иметь определенное значение; иметь намерение.",
                "examples": [
                    "Что значит этот пункт в контракте?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "значил",
        "v3": "значила",
        "group": "2nd_conj"
    },
    {
        "word": "следовать",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "следовать инструкциям / следовать за кем-то / за новостями",
        "form": "verb",
        "definitions": [
            {
                "text": "Идти следом; подчиняться правилам или инструкциям.",
                "examples": [
                    "Пожалуйста, внимательно следуйте инструкциям. Он следит за новостями."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "следовал",
        "v3": "следовала",
        "group": "1st_conj"
    },
    {
        "word": "продолжать",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "продолжать работать / продолжать делать / задачу",
        "form": "verb",
        "definitions": [
            {
                "text": "Продолжать делать что-либо не останавливаясь.",
                "examples": [
                    "Он продолжал работать после шести, несмотря на плохое самочувствие."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "продолжал",
        "v3": "продолжала",
        "group": "1st_conj"
    },
    {
        "word": "расти",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "развивать бизнес / расти быстро / превращаться в",
        "form": "verb",
        "definitions": [
            {
                "text": "Увеличиваться в размере или количестве; развиваться.",
                "examples": [
                    "Компания выросла на двадцать процентов в прошлом году."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "рос",
        "v3": "росла",
        "group": "1st_conj"
    },
    {
        "word": "включать",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "включать что-то / включать в / не включено",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать что-либо частью целого.",
                "examples": [
                    "В стоимость включены завтрак и ужин."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "включал",
        "v3": "включала",
        "group": "1st_conj"
    },
    {
        "word": "становиться",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "стать менеджером / стать популярным / стать понятным",
        "form": "verb",
        "definitions": [
            {
                "text": "Начинать быть кем-либо или чем-либо.",
                "examples": [
                    "Она стала менеджером всего через два года работы в этой роли."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "становился",
        "v3": "становилась",
        "group": "1st_conj"
    },
    {
        "word": "принадлежать",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "принадлежать кому-то / принадлежать к / чувствовать себя своим",
        "form": "verb",
        "definitions": [
            {
                "text": "Быть собственностью кого-либо; быть участником.",
                "examples": [
                    "Этот счет принадлежит финансовому отделу."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "принадлежал",
        "v3": "принадлежала",
        "group": "2nd_conj"
    },
    {
        "word": "выбирать",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "выбирать между / выбирать сделать / выбирать тщательно",
        "form": "verb",
        "definitions": [
            {
                "text": "Отбирать из вариантов.",
                "examples": [
                    "Он выбрал работу на неполный рабочий день, чтобы проводить больше времени с семьей."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "выбирал",
        "v3": "выбирала",
        "group": "1st_conj"
    },
    {
        "word": "строить",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "строить карьеру / строить команду / строить доверие",
        "form": "verb",
        "definitions": [
            {
                "text": "Сооружать что-либо; развивать что-либо со временем.",
                "examples": [
                    "Она построила прочную репутацию за десять лет."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "строил",
        "v3": "строила",
        "group": "2nd_conj"
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();