(function() {
    const data = [
    {
        "word": "быть",
        "level": "starter",
        "theme": "social",
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
        "group": "ть",
        "transcription": "/bɨtʲ/",
        "auxiliary": "быть",
        "tenses": {
            "present_simple": {
                "positive": [
                    "",
                    "",
                    "есть",
                    "",
                    "",
                    "суть"
                ]
            },
            "future_simple": {
                "positive": [
                    "буду",
                    "будешь",
                    "будет",
                    "будем",
                    "будете",
                    "будут"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "byti"
        },
        "lang": "ru",
        "id": "ru_starter_social_001"
    },
    {
        "word": "иметь",
        "level": "starter",
        "theme": "work",
        "emoji": "👜",
        "subtext": "иметь работу / иметь проблему",
        "synonyms": [
            "обедать"
        ],
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
        "group": "1st_conj",
        "transcription": "/iˈmʲetʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_001"
    },
    {
        "word": "чувствовать",
        "level": "starter",
        "theme": "health_medicine",
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
        "group": "1st_conj",
        "transcription": "/ˈtʃustvəvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_health_medicine_001"
    },
    {
        "word": "давать",
        "level": "starter",
        "theme": "shopping",
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
        "v2": "давал",
        "v3": "давала",
        "group": "1st_conj",
        "transcription": "/daˈvatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "брать"
        ],
        "id": "ru_starter_shopping_001"
    },
    {
        "word": "брать",
        "level": "starter",
        "theme": "travel",
        "emoji": "👜",
        "subtext": "",
        "synonyms": [
            "садиться в автобус",
            "принимать лекарство"
        ],
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
        "group": "1st_conj",
        "transcription": "/bratʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "давать"
        ],
        "id": "ru_starter_travel_001"
    },
    {
        "word": "получать",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📥",
        "subtext": "",
        "synonyms": [
            "получить работу",
            "уставать",
            "становиться лучше"
        ],
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
        "group": "1st_conj",
        "transcription": "/paluˈtʃatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_shopping_002"
    },
    {
        "word": "класть",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📥",
        "subtext": "класть",
        "synonyms": [
            "убирать",
            "положить телефон"
        ],
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
        "group": "1st_conj",
        "transcription": "/klastʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_furniture_001"
    },
    {
        "word": "делать",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "делать кофе",
        "synonyms": [
            "принимать решение",
            "совершать ошибку"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈdʲelətʲ/",
        "auxiliary": "быть",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "dělati"
        },
        "lang": "ru",
        "id": "ru_starter_work_002"
    },
    {
        "word": "делать",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/ˈdʲelətʲ/",
        "auxiliary": "быть",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "dělati"
        },
        "lang": "ru",
        "id": "ru_starter_work_003"
    },
    {
        "word": "использовать",
        "level": "starter",
        "theme": "technology",
        "emoji": "🛠️",
        "subtext": "",
        "synonyms": [
            "пользоваться телефоном",
            "пользоваться транспортом"
        ],
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
        "group": "1st_conj",
        "transcription": "/iˈspolʲzəvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_technology_001"
    },
    {
        "word": "открывать",
        "level": "starter",
        "theme": "shopping",
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
        "v2": "открывал",
        "v3": "открывала",
        "group": "1st_conj",
        "transcription": "/atkʁɨˈvatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "закрывать"
        ],
        "id": "ru_starter_shopping_003"
    },
    {
        "word": "закрывать",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "subtext": "закрывать дверь",
        "synonyms": [
            "закрываться в шесть"
        ],
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
        "group": "1st_conj",
        "transcription": "/zakʁɨˈvatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "открывать"
        ],
        "id": "ru_starter_shopping_004"
    },
    {
        "word": "начинать",
        "level": "starter",
        "theme": "work",
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
        "v2": "начинал",
        "v3": "начинала",
        "group": "1st_conj",
        "transcription": "/natʃʲiˈnatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "заканчивать"
        ],
        "id": "ru_starter_work_004"
    },
    {
        "word": "заканчивать",
        "level": "starter",
        "theme": "work",
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
        "v2": "заканчивал",
        "v3": "заканчивала",
        "group": "1st_conj",
        "transcription": "/zaˈkantʃʲivətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "начинать"
        ],
        "id": "ru_starter_work_005"
    },
    {
        "word": "помогать",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "subtext": "помогать кому-то / помогать с",
        "synonyms": [
            "просить о помощи"
        ],
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
        "group": "1st_conj",
        "transcription": "/pamaˈɡatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_006"
    },
    {
        "word": "пробовать",
        "level": "starter",
        "theme": "school",
        "emoji": "🎯",
        "subtext": "пробовать делать / пробовать новое",
        "synonyms": [
            "стараться"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈprobəvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_school_001"
    },
    {
        "word": "показывать",
        "level": "starter",
        "theme": "language",
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
        "group": "1st_conj",
        "transcription": "/paˈkazɨvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_language_001"
    },
    {
        "word": "находить",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔍",
        "subtext": "",
        "synonyms": [
            "найти работу",
            "обнаружить",
            "найти время"
        ],
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
        "group": "2nd_conj",
        "transcription": "/naxaˈdʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_shopping_005"
    },
    {
        "word": "хранить",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "",
        "synonyms": [
            "продолжать",
            "молчать",
            "вести учет"
        ],
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
        "group": "2nd_conj",
        "transcription": "/xraˈnʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_007"
    },
    {
        "word": "терять",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📉",
        "subtext": "терять деньги / терять вес",
        "synonyms": [
            "потерять работу"
        ],
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
        "group": "1st_conj",
        "transcription": "/tʲiˈrʲatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "побеждать"
        ],
        "id": "ru_starter_shopping_006"
    },
    {
        "word": "резать",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "subtext": "резать пополам",
        "synonyms": [
            "сокращать расходы",
            "сокращать время"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈrʲezətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_food_drink_001"
    },
    {
        "word": "поворачивать",
        "level": "starter",
        "theme": "travel",
        "emoji": "🔄",
        "subtext": "поворачивать налево",
        "synonyms": [
            "включать",
            "выключать",
            "направо"
        ],
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
        "group": "1st_conj",
        "transcription": "/pavaˈratʃʲivətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_travel_002"
    },
    {
        "word": "приносить",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🎁",
        "subtext": "приносить еду / приносить документ",
        "synonyms": [
            "приводить кого-то"
        ],
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
        "group": "2nd_conj",
        "transcription": "/pʁʲinaˈsʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_food_drink_002"
    },
    {
        "word": "сказать",
        "level": "starter",
        "theme": "social",
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
        "group": "1st_conj",
        "transcription": "/skaˈzatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_002"
    },
    {
        "word": "рассказывать",
        "level": "starter",
        "theme": "language",
        "emoji": "🗣️",
        "subtext": "рассказывать историю / рассказывать кому-то",
        "synonyms": [
            "говорить правду"
        ],
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
        "group": "1st_conj",
        "transcription": "/rasˈkazɨvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_language_002"
    },
    {
        "word": "спрашивать",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "subtext": "спрашивать о",
        "synonyms": [
            "задавать вопрос",
            "просить о помощи"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈspraʂɨvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_language_003"
    },
    {
        "word": "говорить",
        "level": "starter",
        "theme": "social",
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
        "group": "2nd_conj",
        "transcription": "/ɡavaˈrʲitʲ/",
        "auxiliary": "быть",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "govoriti"
        },
        "lang": "ru",
        "id": "ru_starter_social_003"
    },
    {
        "word": "разговаривать",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "subtext": "разговаривать с кем-то / разговаривать о",
        "synonyms": [
            "открыто говорить"
        ],
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
        "group": "1st_conj",
        "transcription": "/razɡavaˈrʲivətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_004"
    },
    {
        "word": "звонить",
        "level": "starter",
        "theme": "technology",
        "emoji": "📞",
        "subtext": "звонить кому-то",
        "synonyms": [
            "перезванивать",
            "назначать встречу"
        ],
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
        "group": "2nd_conj",
        "transcription": "/zvaˈnʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_technology_002"
    },
    {
        "word": "писать",
        "level": "starter",
        "theme": "school",
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
        "v2": "писал",
        "v3": "писала",
        "group": "1st_conj",
        "transcription": "/pʲiˈsatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "читать"
        ],
        "id": "ru_starter_school_002"
    },
    {
        "word": "читать",
        "level": "starter",
        "theme": "school",
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
        "classification": "irregular",
        "aspect": "action",
        "v2": "читал",
        "v3": "читала",
        "group": "1st_conj",
        "transcription": "/tʃʲiˈtatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "писать"
        ],
        "id": "ru_starter_school_003"
    },
    {
        "word": "слушать",
        "level": "starter",
        "theme": "school",
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
        "group": "1st_conj",
        "transcription": "/ˈsluʂətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_school_004"
    },
    {
        "word": "отвечать",
        "level": "starter",
        "theme": "language",
        "emoji": "📞",
        "subtext": "отвечать на вопрос / отвечать на звонок",
        "synonyms": [
            "на письмо"
        ],
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
        "group": "1st_conj",
        "transcription": "/atvʲiˈtʃatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_language_004"
    },
    {
        "word": "повторять",
        "level": "starter",
        "theme": "school",
        "emoji": "🔁",
        "subtext": "",
        "synonyms": [
            "повторить это",
            "повторяться",
            "повторить заказ"
        ],
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
        "group": "1st_conj",
        "transcription": "/paftaˈrʲatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_school_005"
    },
    {
        "word": "идти",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "идти на работу / идти домой",
        "synonyms": [
            "выходить"
        ],
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
        "v3": "шёл",
        "group": "1st_conj",
        "transcription": "/iˈtʲi/",
        "auxiliary": "быть",
        "tenses": {
            "present_simple": {
                "positive": [
                    "иду",
                    "идешь",
                    "идет",
                    "идем",
                    "идете",
                    "идут"
                ]
            }
        },
        "lang": "ru",
        "id": "ru_starter_travel_003"
    },
    {
        "word": "приходить",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏃‍♂️",
        "subtext": "приходить домой / приходить сюда",
        "synonyms": [
            "возвращаться"
        ],
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
        "group": "2nd_conj",
        "transcription": "/pʁʲixaˈdʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "идти"
        ],
        "id": "ru_starter_travel_004"
    },
    {
        "word": "гулять",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "идти на работу пешком / гулять медленно",
        "synonyms": [
            "идти домой"
        ],
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
        "group": "1st_conj",
        "transcription": "/ɡuˈlʲatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_travel_005"
    },
    {
        "word": "водить",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "subtext": "водить машину",
        "synonyms": [
            "ехать на работу",
            "ехать домой"
        ],
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
        "group": "2nd_conj",
        "transcription": "/vaˈdʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_travel_006"
    },
    {
        "word": "летать",
        "level": "starter",
        "theme": "travel",
        "emoji": "✈️",
        "subtext": "",
        "synonyms": [
            "лететь в город",
            "лететь бизнес-классом"
        ],
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
        "group": "1st_conj",
        "transcription": "/lʲiˈtatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_travel_007"
    },
    {
        "word": "приезжать",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "приезжать на работу / приезжать поздно",
        "synonyms": [
            "вовремя"
        ],
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
        "group": "1st_conj",
        "transcription": "/pʁʲijezˈʐatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_008"
    },
    {
        "word": "уходить",
        "level": "starter",
        "theme": "work",
        "emoji": "🚪",
        "subtext": "уходить из дома / уходить рано",
        "synonyms": [
            "с работы"
        ],
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
        "group": "2nd_conj",
        "transcription": "/uxaˈdʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_009"
    },
    {
        "word": "двигаться",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📦",
        "subtext": "двигаться вперед",
        "synonyms": [
            "переезжать",
            "переезжать в город"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈdvʲiɡətsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_furniture_002"
    },
    {
        "word": "возвращаться",
        "level": "starter",
        "theme": "travel",
        "emoji": "🔙",
        "subtext": "возвращаться домой",
        "synonyms": [
            "на работу"
        ],
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
        "group": "1st_conj",
        "transcription": "/vazvraˈɕːatsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_travel_008"
    },
    {
        "word": "путешествовать",
        "level": "starter",
        "theme": "travel",
        "emoji": "✈️",
        "subtext": "путешествовать по работе",
        "synonyms": [
            "за границу"
        ],
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
        "group": "1st_conj",
        "transcription": "/putʲiˈʂestvəvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_travel_009"
    },
    {
        "word": "есть",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "subtext": "",
        "synonyms": [
            "завтракать",
            "обедать",
            "ужинать"
        ],
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
        "group": "ть",
        "transcription": "/jesʲtʲ/",
        "auxiliary": "быть",
        "tenses": {
            "present_simple": {
                "positive": [
                    "ем",
                    "ешь",
                    "ест",
                    "едим",
                    "едите",
                    "едят"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "ěsti"
        },
        "lang": "ru",
        "antonyms": [
            "пить"
        ],
        "id": "ru_starter_food_drink_003"
    },
    {
        "word": "пить",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "subtext": "пить кофе / пить чай / пить воду",
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
        "group": "2nd_conj",
        "transcription": "/pʲitʲ/",
        "auxiliary": "быть",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "piti"
        },
        "lang": "ru",
        "antonyms": [
            "есть"
        ],
        "id": "ru_starter_food_drink_004"
    },
    {
        "word": "спать",
        "level": "starter",
        "theme": "time",
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
        "v2": "спал",
        "v3": "спала",
        "group": "1st_conj",
        "transcription": "/spatʲ/",
        "auxiliary": "быть",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "sъpati"
        },
        "lang": "ru",
        "antonyms": [
            "просыпаться"
        ],
        "id": "ru_starter_time_001"
    },
    {
        "word": "готовить",
        "level": "starter",
        "theme": "food_drink",
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
        "group": "2nd_conj",
        "transcription": "/ɡaˈtovʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_food_drink_005"
    },
    {
        "word": "чистить",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧹",
        "subtext": "чистить квартиру / чистить кухню",
        "synonyms": [
            "убираться"
        ],
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
        "group": "2nd_conj",
        "transcription": "/ˈtʃistʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_furniture_003"
    },
    {
        "word": "носить",
        "level": "starter",
        "theme": "clothes",
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
        "group": "2nd_conj",
        "transcription": "/naˈsʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_clothes_001"
    },
    {
        "word": "мыть",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧼",
        "subtext": "мыть посуду / мыть руки",
        "synonyms": [
            "стирать одежду"
        ],
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
        "group": "1st_conj",
        "transcription": "/mɨtʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_furniture_004"
    },
    {
        "word": "покупать",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "subtext": "покупать еду / покупать билет",
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
        "group": "1st_conj",
        "transcription": "/pakuˈpatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "продавать"
        ],
        "id": "ru_starter_shopping_007"
    },
    {
        "word": "платить",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💳",
        "subtext": "платить за аренду / платить картой",
        "synonyms": [
            "оплачивать счет"
        ],
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
        "group": "2nd_conj",
        "transcription": "/plaˈtʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_shopping_008"
    },
    {
        "word": "тратить",
        "level": "starter",
        "theme": "shopping",
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
        "group": "2nd_conj",
        "transcription": "/ˈtratʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_shopping_009"
    },
    {
        "word": "сохранять",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "subtext": "",
        "synonyms": [
            "копить деньги",
            "копить на дом",
            "экономить время"
        ],
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
        "group": "1st_conj",
        "transcription": "/saxraˈnʲatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "тратить"
        ],
        "id": "ru_starter_shopping_010"
    },
    {
        "word": "работать",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/raˈbotətʲ/",
        "auxiliary": "быть",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "orbota"
        },
        "lang": "ru",
        "id": "ru_starter_work_010"
    },
    {
        "word": "жить",
        "level": "starter",
        "theme": "places",
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
        "classification": "regular",
        "aspect": "stative",
        "v2": "жил",
        "v3": "жила",
        "group": "2nd_conj",
        "transcription": "/ʐɨtʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "умирать"
        ],
        "id": "ru_starter_places_001"
    },
    {
        "word": "думать",
        "level": "starter",
        "theme": "social",
        "emoji": "💭",
        "subtext": "думать о / внимательно думать",
        "synonyms": [
            "размышлять"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈdumətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_005"
    },
    {
        "word": "знать",
        "level": "starter",
        "theme": "school",
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
        "group": "1st_conj",
        "transcription": "/znatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_school_006"
    },
    {
        "word": "хотеть",
        "level": "starter",
        "theme": "emotions",
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
        "group": "ть",
        "transcription": "/xaˈtʲetʲ/",
        "auxiliary": "быть",
        "tenses": {
            "present_simple": {
                "positive": [
                    "хочу",
                    "хочешь",
                    "хочет",
                    "хотим",
                    "хотите",
                    "хотят"
                ]
            }
        },
        "lang": "ru",
        "id": "ru_starter_emotions_001"
    },
    {
        "word": "нуждаться",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🆘",
        "subtext": "нуждаться в помощи / нуждаться во времени",
        "synonyms": [
            "в деньгах"
        ],
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
        "group": "1st_conj",
        "transcription": "/nuʐˈdatsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_emotions_002"
    },
    {
        "word": "нравиться",
        "level": "starter",
        "theme": "emotions",
        "emoji": "👍",
        "subtext": "",
        "synonyms": [
            "мне нравится работа",
            "нравится путешествовать",
            "нравится идея"
        ],
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
        "group": "2nd_conj",
        "transcription": "/ˈnravʲitsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_emotions_003"
    },
    {
        "word": "любить",
        "level": "starter",
        "theme": "emotions",
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
        "group": "2nd_conj",
        "transcription": "/lʲuˈbʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_emotions_004"
    },
    {
        "word": "ненавидеть",
        "level": "starter",
        "theme": "emotions",
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
        "group": "1st_conj",
        "transcription": "/nʲinaˈvʲidʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_emotions_005"
    },
    {
        "word": "надеяться",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🤞",
        "subtext": "надеяться на / надеяться сделать",
        "synonyms": [
            "надеюсь",
            "что так"
        ],
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
        "group": "1st_conj",
        "transcription": "/naˈdʲejətsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_emotions_006"
    },
    {
        "word": "помнить",
        "level": "starter",
        "theme": "school",
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
        "group": "2nd_conj",
        "transcription": "/ˈpomnʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_school_007"
    },
    {
        "word": "забывать",
        "level": "starter",
        "theme": "school",
        "emoji": "🤔",
        "subtext": "",
        "synonyms": [
            "забыть имя",
            "забыть сделать",
            "совсем забыть"
        ],
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
        "group": "1st_conj",
        "transcription": "/zabɨˈvatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_school_008"
    },
    {
        "word": "понимать",
        "level": "starter",
        "theme": "language",
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
        "group": "1st_conj",
        "transcription": "/panʲiˈmatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_language_005"
    },
    {
        "word": "решать",
        "level": "starter",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "решать сделать / решать по поводу",
        "synonyms": [
            "принимать решение"
        ],
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
        "group": "1st_conj",
        "transcription": "/rʲiˈʂatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_006"
    },
    {
        "word": "наслаждаться",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "subtext": "наслаждаться делом / наслаждаться едой",
        "synonyms": [
            "своей работой"
        ],
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
        "group": "1st_conj",
        "transcription": "/naslaʐˈdatsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_emotions_007"
    },
    {
        "word": "видеть",
        "level": "starter",
        "theme": "body",
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
        "group": "1st_conj",
        "transcription": "/ˈvʲidʲitʲ/",
        "auxiliary": "быть",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "viděti"
        },
        "lang": "ru",
        "id": "ru_starter_body_001"
    },
    {
        "word": "слышать",
        "level": "starter",
        "theme": "body",
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
        "group": "1st_conj",
        "transcription": "/ˈslɨʂətʲ/",
        "auxiliary": "быть",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "slyšati"
        },
        "lang": "ru",
        "id": "ru_starter_body_002"
    },
    {
        "word": "просыпаться",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "рано просыпаться / просыпаться в 7 / просыпаться уставшим",
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
        "group": "1st_conj",
        "transcription": "/pʁasɨˈpatsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "antonyms": [
            "спать"
        ],
        "id": "ru_starter_work_011"
    },
    {
        "word": "смотреть",
        "level": "starter",
        "theme": "social",
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
        "group": "1st_conj",
        "transcription": "/smaˈtrʲetʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_007"
    },
    {
        "word": "смотреть",
        "level": "starter",
        "theme": "people",
        "emoji": "👀",
        "subtext": "смотреть",
        "synonyms": [
            "искать",
            "выглядеть счастливым"
        ],
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
        "group": "1st_conj",
        "transcription": "/smaˈtrʲetʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_people_001"
    },
    {
        "word": "играть",
        "level": "starter",
        "theme": "social",
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
        "group": "1st_conj",
        "transcription": "/iˈɡratʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_008"
    },
    {
        "word": "бегать",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏃",
        "subtext": "бегать",
        "synonyms": [
            "бежать гонку",
            "управлять бизнесом"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈbʲeɡətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_sports_001"
    },
    {
        "word": "сидеть",
        "level": "starter",
        "theme": "work",
        "emoji": "🪑",
        "subtext": "сидеть / сидеть за столом / сидеть на встрече",
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
        "group": "1st_conj",
        "transcription": "/sʲiˈdʲetʲ/",
        "auxiliary": "быть",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "sěděti"
        },
        "lang": "ru",
        "antonyms": [
            "стоять"
        ],
        "id": "ru_starter_work_012"
    },
    {
        "word": "стоять",
        "level": "starter",
        "theme": "work",
        "emoji": "🧍",
        "subtext": "стоять / стоять в очереди",
        "synonyms": [
            "вставать"
        ],
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
        "group": "1st_conj",
        "transcription": "/staˈjatʲ/",
        "auxiliary": "быть",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "stojati"
        },
        "lang": "ru",
        "antonyms": [
            "сидеть"
        ],
        "id": "ru_starter_work_013"
    },
    {
        "word": "встречать",
        "level": "starter",
        "theme": "work",
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
        "subtext": "встречать кого-то",
        "synonyms": [
            "встретиться за обедом"
        ],
        "group": "1st_conj",
        "transcription": "/vstrʲiˈtʃatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_014"
    },
    {
        "word": "учить",
        "level": "starter",
        "theme": "school",
        "emoji": "📚",
        "subtext": "учить / учить язык",
        "synonyms": [
            "учиться быстро"
        ],
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
        "group": "2nd_conj",
        "transcription": "/uˈtʃʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_school_009"
    },
    {
        "word": "менять",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/mʲiˈnʲatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_015"
    },
    {
        "word": "останавливать",
        "level": "starter",
        "theme": "work",
        "emoji": "🛑",
        "subtext": "останавливать",
        "synonyms": [
            "перестать делать",
            "остановить кого-то"
        ],
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
        "group": "1st_conj",
        "transcription": "/astaˈnavlʲivətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_016"
    },
    {
        "word": "добавлять",
        "level": "starter",
        "theme": "numbers",
        "emoji": "➕",
        "subtext": "добавлять",
        "synonyms": [
            "добавить комментарий",
            "добавить сахар"
        ],
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
        "group": "1st_conj",
        "transcription": "/dabavˈlʲatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_numbers_001"
    },
    {
        "word": "побеждать",
        "level": "starter",
        "theme": "social",
        "emoji": "🏆",
        "subtext": "побеждать",
        "synonyms": [
            "выиграть приз",
            "выиграть контракт"
        ],
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
        "group": "1st_conj",
        "transcription": "/pabʲiʐˈdatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "терять"
        ],
        "id": "ru_starter_social_009"
    },
    {
        "word": "ждать",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "subtext": "ждать / ждать кого-то",
        "synonyms": [
            "подождать минутку"
        ],
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
        "group": "1st_conj",
        "transcription": "/ʐdatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_017"
    },
    {
        "word": "умирать",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "⚰️",
        "subtext": "умирать / умирать от",
        "synonyms": [
            "вымирать"
        ],
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
        "group": "1st_conj",
        "transcription": "/umʲiˈratʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "жить"
        ],
        "id": "ru_starter_health_medicine_002"
    },
    {
        "word": "посылать",
        "level": "starter",
        "theme": "work",
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
        "subtext": "посылать",
        "synonyms": [
            "отправить письмо",
            "отправить сообщение"
        ],
        "group": "1st_conj",
        "transcription": "/pasɨˈlatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_018"
    },
    {
        "word": "оставаться",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏨",
        "subtext": "оставаться / оставаться дома",
        "synonyms": [
            "остановиться в отеле"
        ],
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
        "group": "1st_conj",
        "transcription": "/astaˈvatsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_travel_010"
    },
    {
        "word": "падать",
        "level": "starter",
        "theme": "nature",
        "emoji": "🍂",
        "subtext": "падать",
        "synonyms": [
            "влюбиться",
            "заснуть"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈpadətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_nature_001"
    },
    {
        "word": "проходить",
        "level": "starter",
        "theme": "school",
        "emoji": "🏔️",
        "subtext": "проходить",
        "synonyms": [
            "сдать экзамен",
            "проводить время"
        ],
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
        "group": "2nd_conj",
        "transcription": "/pʁaxadʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_school_010"
    },
    {
        "word": "продавать",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "subtext": "продавать / продавать онлайн / продавать на рынке",
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
        "group": "1st_conj",
        "transcription": "/pradaˈvatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "покупать"
        ],
        "id": "ru_starter_shopping_011"
    },
    {
        "word": "тянуть",
        "level": "starter",
        "theme": "work",
        "emoji": "🚜",
        "subtext": "тянуть / тянуть дверь",
        "synonyms": [
            "отъезжать"
        ],
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
        "group": "1st_conj",
        "transcription": "/tʲiˈnutʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "толкать"
        ],
        "id": "ru_starter_work_019"
    },
    {
        "word": "толкать",
        "level": "starter",
        "theme": "work",
        "emoji": "🛒",
        "subtext": "толкать / толкать тележку",
        "synonyms": [
            "нажать кнопку"
        ],
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
        "group": "1st_conj",
        "transcription": "/talˈkatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "тянуть"
        ],
        "id": "ru_starter_work_020"
    },
    {
        "word": "нести",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/nʲisʲˈtʲi/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_021"
    },
    {
        "word": "ломать",
        "level": "starter",
        "theme": "describing",
        "emoji": "💔",
        "subtext": "ломать",
        "synonyms": [
            "разбить стекло",
            "сделать перерыв"
        ],
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
        "group": "1st_conj",
        "transcription": "/laˈmatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_describing_001"
    },
    {
        "word": "получать",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📩",
        "subtext": "получать",
        "synonyms": [
            "получить письмо",
            "получить платеж"
        ],
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
        "group": "1st_conj",
        "transcription": "/paluˈtʃatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_shopping_012"
    },
    {
        "word": "соглашаться",
        "level": "starter",
        "theme": "social",
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
        "group": "1st_conj",
        "transcription": "/saɡlaˈʂatsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_social_010"
    },
    {
        "word": "рисовать",
        "level": "starter",
        "theme": "social",
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
        "group": "1st_conj",
        "transcription": "/ʁʲisaˈvatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_011"
    },
    {
        "word": "делиться",
        "level": "starter",
        "theme": "social",
        "emoji": "🍕",
        "subtext": "делиться / делиться идеей",
        "synonyms": [
            "делить комнату"
        ],
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
        "group": "2nd_conj",
        "transcription": "/dʲiˈlʲitsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_social_012"
    },
    {
        "word": "улыбаться",
        "level": "starter",
        "theme": "people",
        "emoji": "😊",
        "subtext": "улыбаться / улыбаться кому-то / широко улыбаться",
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
        "group": "1st_conj",
        "transcription": "/ulɨˈbatsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "antonyms": [
            "плакать"
        ],
        "id": "ru_starter_people_002"
    },
    {
        "word": "плакать",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😢",
        "subtext": "плакать / плакать о помощи / плакать из-за чего-то",
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
        "group": "1st_conj",
        "transcription": "/ˈplakətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "antonyms": [
            "улыбаться"
        ],
        "id": "ru_starter_emotions_008"
    },
    {
        "word": "танцевать",
        "level": "starter",
        "theme": "music",
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
        "group": "1st_conj",
        "transcription": "/tantsɨˈvatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_music_001"
    },
    {
        "word": "петь",
        "level": "starter",
        "theme": "music",
        "emoji": "🎤",
        "subtext": "петь / петь песню",
        "synonyms": [
            "подпевать"
        ],
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
        "group": "1st_conj",
        "transcription": "/pʲetʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_music_002"
    },
    {
        "word": "прыгать",
        "level": "starter",
        "theme": "sports",
        "emoji": "🦘",
        "subtext": "прыгать / прыгать высоко",
        "synonyms": [
            "перепрыгивать"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈprɨɡətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_sports_002"
    },
    {
        "word": "плавать",
        "level": "starter",
        "theme": "sports",
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
        "group": "1st_conj",
        "transcription": "/ˈplavətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_sports_003"
    },
    {
        "word": "учиться",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "учиться",
        "synonyms": [
            "учить английский",
            "готовиться к экзамену"
        ],
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
        "group": "2nd_conj",
        "transcription": "/uˈtʃʲitsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_school_011"
    },
    {
        "word": "преподавать",
        "level": "starter",
        "theme": "school",
        "emoji": "👨‍🏫",
        "subtext": "преподавать / преподавать предмет",
        "synonyms": [
            "учить кого-то"
        ],
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
        "group": "1st_conj",
        "transcription": "/pʁʲipadaˈvatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_school_012"
    },
    {
        "word": "ездить на работу",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚆",
        "subtext": "ездить на работу",
        "synonyms": [
            "ежедневная поездка",
            "долгая поездка"
        ],
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
        "group": "2nd_conj",
        "transcription": "/ˈjezʲdʲitʲ na raˈbotu/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_travel_011"
    },
    {
        "word": "снимать",
        "level": "starter",
        "theme": "travel",
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
        "group": "1st_conj",
        "transcription": "/snʲiˈmatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_travel_012"
    },
    {
        "word": "тренироваться",
        "level": "starter",
        "theme": "social",
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
        "subtext": "тренироваться / тренироваться регулярно",
        "synonyms": [
            "в зале"
        ],
        "group": "1st_conj",
        "transcription": "/trʲinʲiraˈvatsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_social_013"
    },
    {
        "word": "стоить",
        "level": "starter",
        "theme": "shopping",
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
        "group": "2nd_conj",
        "transcription": "/ˈstoitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_shopping_013"
    },
    {
        "word": "приглашать",
        "level": "starter",
        "theme": "social",
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
        "subtext": "приглашать",
        "synonyms": [
            "пригласить кого-то",
            "пригласить на ужин"
        ],
        "group": "1st_conj",
        "transcription": "/pʁʲiɡlaˈʂatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_014"
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
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/vstaˈvatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_022"
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
        "subtext": "завтракать дома",
        "synonyms": [
            "быстрый завтрак",
            "пропускать завтрак"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "завтракал",
        "v3": "завтракала",
        "theme": "work",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/ˈzaftrəkəvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_023"
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
        "subtext": "возвращаться домой / возвращаться поздно",
        "synonyms": [
            "из поездки"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "возвращался",
        "v3": "возвращалась",
        "theme": "work",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/vazvraˈɕːatsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_work_024"
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
        "subtext": "ложиться спать рано",
        "synonyms": [
            "ложиться поздно",
            "ложиться уставшим"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ложился спать",
        "v3": "ложилась спать",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "2nd_conj",
        "transcription": "/laˈʐɨtsə spatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_025"
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
        "theme": "work",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/pʁavʲiˈrʲatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_026"
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
        "theme": "work",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/atvʲiˈtʃatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_027"
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
        "subtext": "презентовать отчет / презентовать идеи",
        "synonyms": [
            "клиенту"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "презентовал",
        "v3": "презентовала",
        "theme": "work",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/pʁʲizʲintaˈvatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_028"
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
        "theme": "work",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/pasʲiˈɕːatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_029"
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
        "subtext": "управлять командой / управлять проектом",
        "synonyms": [
            "временем"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "управлял",
        "v3": "управляла",
        "theme": "work",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/upravˈlʲatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_030"
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
        "subtext": "",
        "synonyms": [
            "взимать комиссию",
            "плата за услугу",
            "брать дополнительно"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "взимал плату",
        "v3": "взимала плату",
        "theme": "shopping",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/vzʲiˈmatʲ ˈplatu/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_shopping_014"
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
        "theme": "shopping",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "2nd_conj",
        "transcription": "/paˈzvolʲitʲ sʲiˈbʲe/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_shopping_015"
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
        "subtext": "быть должным деньги / быть должным кому-то",
        "synonyms": [
            "много"
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "был должен",
        "v3": "была должна",
        "theme": "shopping",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/bɨtʲ ˈdolʐnɨm/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_shopping_016"
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
        "subtext": "зарабатывать зарплату / зарабатывать деньги",
        "synonyms": [
            "больше"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "зарабатывал",
        "v3": "зарабатывала",
        "theme": "shopping",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/zaˈrabatɨvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_shopping_017"
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
        "subtext": "навещать семью",
        "synonyms": [
            "навестить друга",
            "посетить город"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "навещал",
        "v3": "навещала",
        "theme": "social",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/navʲiˈɕːatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_015"
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
        "subtext": "праздновать день рождения / праздновать успех",
        "synonyms": [
            "вместе"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "праздновал",
        "v3": "праздновала",
        "theme": "social",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/ˈprazdnəvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_016"
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
        "subtext": "рекомендовать место / рекомендовать кого-то",
        "synonyms": [
            "фильм"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "рекомендовал",
        "v3": "рекомендовала",
        "theme": "social",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/rʲikəmʲindaˈvatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_017"
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
        "subtext": "",
        "synonyms": [
            "болит спина",
            "причинить боль кому-то",
            "это больно"
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "болел",
        "v3": "болела",
        "theme": "health_medicine",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/baˈlʲetʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_health_medicine_003"
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
        "subtext": "отдыхать дома / отдыхать после работы",
        "synonyms": [
            "нужен отдых"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "отдыхал",
        "v3": "отдыхала",
        "theme": "work",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/addɨˈxatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_031"
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
        "subtext": "выздоравливать после болезни",
        "synonyms": [
            "быстро",
            "полностью"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "выздоравливал",
        "v3": "выздоравливала",
        "theme": "health_medicine",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/vɨzdaˈravlʲivətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_health_medicine_004"
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
        "subtext": "бронировать отель / бронировать рейс",
        "synonyms": [
            "столик"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "бронировал",
        "v3": "бронировала",
        "theme": "travel",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/braˈnʲirəvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_travel_013"
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
        "subtext": "",
        "synonyms": [
            "собирать сумку",
            "собирать чемодан",
            "собираться налегке"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "собирал вещи",
        "v3": "собирала вещи",
        "theme": "travel",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/sabʲiˈratʲ ˈvʲeɕːi/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_travel_014"
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
        "subtext": "",
        "synonyms": [
            "отменить рейс",
            "отменить бронь",
            "отменить встречу"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "отменял",
        "v3": "отменяла",
        "theme": "travel",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/atmʲiˈnʲatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_travel_015"
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
        "subtext": "скучать по кому-то",
        "synonyms": [
            "опоздать на поезд",
            "опоздать на рейс"
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "скучал",
        "v3": "скучала",
        "theme": "travel",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/skuˈtʃatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_travel_016"
    },
    {
        "word": "заказывать",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/zaˈkazɨvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_032"
    },
    {
        "word": "объяснять",
        "level": "starter",
        "theme": "work",
        "emoji": "💡",
        "subtext": "объяснять процесс / объяснять четко",
        "synonyms": [
            "кому-то"
        ],
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
        "group": "1st_conj",
        "transcription": "/abjizˈnʲatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_033"
    },
    {
        "word": "благодарить",
        "level": "starter",
        "theme": "social",
        "emoji": "🙏",
        "subtext": "благодарить кого-то / благодарить за",
        "synonyms": [
            "большое спасибо"
        ],
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
        "group": "2nd_conj",
        "transcription": "/blaɡadaˈrʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_018"
    },
    {
        "word": "представлять",
        "level": "starter",
        "theme": "social",
        "emoji": "🤝",
        "subtext": "",
        "synonyms": [
            "представиться",
            "представить кого-то",
            "представить тему"
        ],
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
        "group": "1st_conj",
        "transcription": "/prʲidstavˈlʲatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_019"
    },
    {
        "word": "расслабляться",
        "level": "starter",
        "theme": "social",
        "emoji": "🧘",
        "subtext": "расслабляться дома",
        "synonyms": [
            "после работы",
            "на отдыхе"
        ],
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
        "group": "1st_conj",
        "transcription": "/raslaˈblʲatsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_social_020"
    },
    {
        "word": "чинить",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛠️",
        "subtext": "чинить что-то",
        "synonyms": [
            "отремонтировать",
            "стоимость ремонта"
        ],
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
        "group": "2nd_conj",
        "transcription": "/tʃʲiˈnʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_furniture_005"
    },
    {
        "word": "случаться",
        "level": "starter",
        "theme": "social",
        "emoji": "❔",
        "subtext": "",
        "synonyms": [
            "что случилось",
            "случиться с кем-то",
            "это случается"
        ],
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
        "group": "1st_conj",
        "transcription": "/sluˈtʃatsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_social_021"
    },
    {
        "word": "казаться",
        "level": "starter",
        "theme": "social",
        "emoji": "🎭",
        "subtext": "казаться хорошим / казаться обеспокоенным",
        "synonyms": [
            "счастливым"
        ],
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
        "group": "1st_conj",
        "transcription": "/kaˈzatsə/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_social_022"
    },
    {
        "word": "значить",
        "level": "starter",
        "theme": "school",
        "emoji": "❔",
        "subtext": "значить что-то",
        "synonyms": [
            "что это значит",
            "иметь в виду"
        ],
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
        "group": "2nd_conj",
        "transcription": "/ˈznatʃʲitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_school_013"
    },
    {
        "word": "следовать",
        "level": "starter",
        "theme": "work",
        "emoji": "👣",
        "subtext": "следовать инструкциям / следовать за кем-то",
        "synonyms": [
            "за новостями"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈslʲedəvətʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_034"
    },
    {
        "word": "продолжать",
        "level": "starter",
        "theme": "school",
        "emoji": "⏩",
        "subtext": "продолжать работать / продолжать делать",
        "synonyms": [
            "задачу"
        ],
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
        "group": "1st_conj",
        "transcription": "/pradalˈʐatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_school_014"
    },
    {
        "word": "расти",
        "level": "starter",
        "theme": "work",
        "emoji": "📈",
        "subtext": "расти быстро",
        "synonyms": [
            "развивать бизнес",
            "превращаться в"
        ],
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
        "group": "1st_conj",
        "transcription": "/rasˈtʲi/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_035"
    },
    {
        "word": "включать",
        "level": "starter",
        "theme": "shopping",
        "emoji": "➕",
        "subtext": "включать что-то / включать в",
        "synonyms": [
            "не включено"
        ],
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
        "group": "1st_conj",
        "transcription": "/fklʲuˈtʃatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_shopping_018"
    },
    {
        "word": "становиться",
        "level": "starter",
        "theme": "work",
        "emoji": "✨",
        "subtext": "",
        "synonyms": [
            "стать менеджером",
            "стать популярным",
            "стать понятным"
        ],
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
        "group": "2nd_conj",
        "transcription": "/stanavʲitˈsʲa/",
        "auxiliary": "быть",
        "reflexive": true,
        "lang": "ru",
        "id": "ru_starter_work_036"
    },
    {
        "word": "принадлежать",
        "level": "starter",
        "theme": "work",
        "emoji": "📎",
        "subtext": "принадлежать кому-то / принадлежать к",
        "synonyms": [
            "чувствовать себя своим"
        ],
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
        "group": "1st_conj",
        "transcription": "/pʁʲinadlʲiˈʐatʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_037"
    },
    {
        "word": "выбирать",
        "level": "starter",
        "theme": "social",
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
        "group": "1st_conj",
        "transcription": "/vɨbʲiˈratʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_social_023"
    },
    {
        "word": "строить",
        "level": "starter",
        "theme": "work",
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
        "group": "2nd_conj",
        "transcription": "/ˈstroitʲ/",
        "auxiliary": "быть",
        "lang": "ru",
        "id": "ru_starter_work_038"
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
})();