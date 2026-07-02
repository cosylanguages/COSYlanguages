// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "красивый",
        "level": "elementary",
        "theme": "describing",
        "form": "adjective",
        "emoji": "✨",
        "feminine": "красивая",
        "neuter": "красивое",
        "plural": "красивые",
        "comparative": "более красивый",
        "superlative": "самый красивый",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "красивый",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_008"
    },
    {
        "word": "сильный",
        "level": "elementary",
        "theme": "describing",
        "form": "adjective",
        "emoji": "💪",
        "feminine": "сильная",
        "neuter": "сильное",
        "plural": "сильные",
        "comparative": "более сильный",
        "superlative": "самый сильный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "сильный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_009"
    },
    {
        "word": "блондин",
        "level": "elementary",
        "theme": "describing",
        "form": "adjective",
        "emoji": "👱",
        "feminine": "блондинка",
        "neuter": "блондин",
        "plural": "блондины",
        "comparative": "более блондин",
        "superlative": "самый блондин",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "блондин",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_010"
    },
    {
        "word": "снежный",
        "level": "elementary",
        "theme": "nature",
        "emoji": "❄️",
        "form": "adjective",
        "feminine": "снежная",
        "neuter": "снежное",
        "plural": "снежные",
        "comparative": "более снежный",
        "superlative": "самый снежный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "снежный",
                "examples": []
            }
        ],
        "id": "ru_elementary_nature_003"
    },
    {
        "word": "ветреный",
        "level": "elementary",
        "theme": "nature",
        "emoji": "💨",
        "form": "adjective",
        "feminine": "ветреная",
        "neuter": "ветреное",
        "plural": "ветреные",
        "comparative": "более ветреный",
        "superlative": "самый ветреный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "ветреный",
                "examples": []
            }
        ],
        "id": "ru_elementary_nature_004"
    },
    {
        "word": "облачный",
        "level": "elementary",
        "theme": "nature",
        "emoji": "☁️",
        "form": "adjective",
        "feminine": "облачная",
        "neuter": "облачное",
        "plural": "облачные",
        "comparative": "более облачный",
        "superlative": "самый облачный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "облачный",
                "examples": []
            }
        ],
        "id": "ru_elementary_nature_005"
    },
    {
        "word": "атлетичный",
        "level": "elementary",
        "theme": "people",
        "form": "adjective",
        "emoji": "🏃",
        "feminine": "атлетичная",
        "neuter": "атлетичное",
        "plural": "атлетичные",
        "comparative": "более атлетичный",
        "superlative": "самый атлетичный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "атлетичный",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_030"
    },
    {
        "word": "в форме",
        "level": "elementary",
        "theme": "sports",
        "emoji": "💪",
        "form": "adjective",
        "feminine": "в форме",
        "neuter": "в форме",
        "plural": "в форме",
        "comparative": "более в форме",
        "superlative": "самый в форме",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "в форме",
                "examples": []
            }
        ],
        "id": "ru_elementary_sports_001"
    },
    {
        "word": "с лишним весом",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "⚖️",
        "form": "adjective",
        "feminine": "с лишним весом",
        "neuter": "с лишним весом",
        "plural": "с лишним весом",
        "comparative": "более с лишним весом",
        "superlative": "самый с лишним весом",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "с лишним весом",
                "examples": []
            }
        ],
        "id": "ru_elementary_food_drink_038"
    },
    {
        "word": "удобный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "👌",
        "form": "adjective",
        "feminine": "удобная",
        "neuter": "удобное",
        "plural": "удобные",
        "comparative": "более удобный",
        "superlative": "самый удобный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "удобный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_011"
    },
    {
        "word": "стрессовый",
        "level": "elementary",
        "theme": "describing",
        "emoji": "😫",
        "form": "adjective",
        "feminine": "стрессовая",
        "neuter": "стрессовое",
        "plural": "стрессовые",
        "comparative": "более стрессовый",
        "superlative": "самый стрессовый",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "стрессовый",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_012"
    },
    {
        "word": "комфортный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🛋️",
        "form": "adjective",
        "feminine": "комфортная",
        "neuter": "комфортное",
        "plural": "комфортные",
        "comparative": "более комфортный",
        "superlative": "самый комфортный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "комфортный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_013"
    },
    {
        "word": "практичный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🛠️",
        "form": "adjective",
        "feminine": "практичная",
        "neuter": "практичное",
        "plural": "практичные",
        "comparative": "более практичный",
        "superlative": "самый практичный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "практичный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_014"
    },
    {
        "word": "популярный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🌟",
        "form": "adjective",
        "feminine": "популярная",
        "neuter": "популярное",
        "plural": "популярные",
        "comparative": "более популярный",
        "superlative": "самый популярный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "популярный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_015"
    },
    {
        "word": "занятый",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🏃",
        "form": "adjective",
        "feminine": "занятая",
        "neuter": "занятое",
        "plural": "занятые",
        "comparative": "более занятый",
        "superlative": "самый занятый",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "занятый",
                "examples": []
            }
        ],
        "id": "ru_elementary_work_049"
    },
    {
        "word": "гибкий",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🧘",
        "form": "adjective",
        "feminine": "гибкая",
        "neuter": "гибкое",
        "plural": "гибкие",
        "comparative": "более гибкий",
        "superlative": "самый гибкий",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "гибкий",
                "examples": []
            }
        ],
        "id": "ru_elementary_work_050"
    },
    {
        "word": "организованный",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📁",
        "form": "adjective",
        "feminine": "организованная",
        "neuter": "организованное",
        "plural": "организованные",
        "comparative": "более организованный",
        "superlative": "самый организованный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "организованный",
                "examples": []
            }
        ],
        "id": "ru_elementary_work_051"
    },
    {
        "word": "профессиональный",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "👔",
        "form": "adjective",
        "feminine": "профессиональная",
        "neuter": "профессиональное",
        "plural": "профессиональные",
        "comparative": "более профессиональный",
        "superlative": "самый профессиональный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "профессиональный",
                "examples": []
            }
        ],
        "id": "ru_elementary_work_052"
    },
    {
        "word": "ответственный",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🛡️",
        "form": "adjective",
        "feminine": "ответственная",
        "neuter": "ответственное",
        "plural": "ответственные",
        "comparative": "более ответственный",
        "superlative": "самый ответственный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "ответственный",
                "examples": []
            }
        ],
        "id": "ru_elementary_work_053"
    },
    {
        "word": "опытный",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🎓",
        "form": "adjective",
        "feminine": "опытная",
        "neuter": "опытное",
        "plural": "опытные",
        "comparative": "более опытный",
        "superlative": "самый опытный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "опытный",
                "examples": []
            }
        ],
        "id": "ru_elementary_work_054"
    },
    {
        "word": "квалифицированный",
        "level": "elementary",
        "theme": "school",
        "emoji": "✅",
        "form": "adjective",
        "feminine": "квалифицированная",
        "neuter": "квалифицированное",
        "plural": "квалифицированные",
        "comparative": "более квалифицированный",
        "superlative": "самый квалифицированный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "квалифицированный",
                "examples": []
            }
        ],
        "id": "ru_elementary_school_001"
    },
    {
        "word": "доступный",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🙋",
        "form": "adjective",
        "feminine": "доступная",
        "neuter": "доступное",
        "plural": "доступные",
        "comparative": "более доступный",
        "superlative": "самый доступный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "доступный",
                "examples": []
            }
        ],
        "id": "ru_elementary_work_055"
    },
    {
        "word": "успешный",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🏆",
        "form": "adjective",
        "feminine": "успешная",
        "neuter": "успешное",
        "plural": "успешные",
        "comparative": "более успешный",
        "superlative": "самый успешный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "успешный",
                "examples": []
            }
        ],
        "id": "ru_elementary_work_056"
    },
    {
        "word": "амбициозный",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🚀",
        "form": "adjective",
        "feminine": "амбициозная",
        "neuter": "амбициозное",
        "plural": "амбициозные",
        "comparative": "более амбициозный",
        "superlative": "самый амбициозный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "амбициозный",
                "examples": []
            }
        ],
        "id": "ru_elementary_work_057"
    },
    {
        "word": "творческий",
        "level": "elementary",
        "theme": "people",
        "emoji": "🎨",
        "form": "adjective",
        "feminine": "творческая",
        "neuter": "творческое",
        "plural": "творческие",
        "comparative": "более творческий",
        "superlative": "самый творческий",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "творческий",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_031"
    },
    {
        "word": "продуктивный",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "⚙️",
        "form": "adjective",
        "feminine": "продуктивная",
        "neuter": "продуктивное",
        "plural": "продуктивные",
        "comparative": "более продуктивный",
        "superlative": "самый продуктивный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "продуктивный",
                "examples": []
            }
        ],
        "id": "ru_elementary_work_058"
    },
    {
        "word": "надежный",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "form": "adjective",
        "feminine": "надежная",
        "neuter": "надежное",
        "plural": "надежные",
        "comparative": "более надежный",
        "superlative": "самый надежный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "надежный",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_032"
    },
    {
        "word": "независимый",
        "level": "elementary",
        "theme": "people",
        "emoji": "🦅",
        "form": "adjective",
        "feminine": "независимая",
        "neuter": "независимое",
        "plural": "независимые",
        "comparative": "более независимый",
        "superlative": "самый независимый",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "независимый",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_033"
    },
    {
        "word": "дешевый",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏷️",
        "form": "adjective",
        "feminine": "дешевая",
        "neuter": "дешевое",
        "plural": "дешевые",
        "comparative": "более дешевый",
        "superlative": "самый дешевый",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "дешевый",
                "examples": []
            }
        ],
        "id": "ru_elementary_numbers_007"
    },
    {
        "word": "дорогой",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💎",
        "form": "adjective",
        "feminine": "дорогая",
        "neuter": "дорогое",
        "plural": "дорогие",
        "comparative": "более дорогой",
        "superlative": "самый дорогой",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "дорогой",
                "examples": []
            }
        ],
        "id": "ru_elementary_numbers_008"
    },
    {
        "word": "доступный по цене",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💵",
        "form": "adjective",
        "feminine": "доступная по цене",
        "neuter": "доступное по цене",
        "plural": "доступные по цене",
        "comparative": "более доступный по цене",
        "superlative": "самый доступный по цене",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "доступный по цене",
                "examples": []
            }
        ],
        "id": "ru_elementary_numbers_009"
    },
    {
        "word": "стоит",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💰",
        "form": "adjective",
        "feminine": "стоит",
        "neuter": "стоит",
        "plural": "стоит",
        "comparative": "более стоит",
        "superlative": "самый стоит",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "стоит",
                "examples": []
            }
        ],
        "id": "ru_elementary_numbers_010"
    },
    {
        "word": "бесплатный",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🎁",
        "form": "adjective",
        "feminine": "бесплатная",
        "neuter": "бесплатное",
        "plural": "бесплатные",
        "comparative": "более бесплатный",
        "superlative": "самый бесплатный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "бесплатный",
                "examples": []
            }
        ],
        "id": "ru_elementary_numbers_011"
    },
    {
        "word": "на мели",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📉",
        "form": "adjective",
        "feminine": "на мели",
        "neuter": "на мели",
        "plural": "на мели",
        "comparative": "более на мели",
        "superlative": "самый на мели",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "на мели",
                "examples": []
            }
        ],
        "id": "ru_elementary_numbers_012"
    },
    {
        "word": "богатый",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏦",
        "form": "adjective",
        "feminine": "богатая",
        "neuter": "богатое",
        "plural": "богатые",
        "comparative": "более богатый",
        "superlative": "самый богатый",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "богатый",
                "examples": []
            }
        ],
        "id": "ru_elementary_numbers_013"
    },
    {
        "word": "бедный",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏚️",
        "form": "adjective",
        "feminine": "бедная",
        "neuter": "бедное",
        "plural": "бедные",
        "comparative": "более бедный",
        "superlative": "самый бедный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "бедный",
                "examples": []
            }
        ],
        "id": "ru_elementary_numbers_014"
    },
    {
        "word": "здоровый",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🍎",
        "form": "adjective",
        "feminine": "здоровая",
        "neuter": "здоровое",
        "plural": "здоровые",
        "comparative": "более здоровый",
        "superlative": "самый здоровый",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "здоровый",
                "examples": []
            }
        ],
        "id": "ru_elementary_food_drink_039"
    },
    {
        "word": "нездоровый",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🍔",
        "form": "adjective",
        "feminine": "нездоровая",
        "neuter": "нездоровое",
        "plural": "нездоровые",
        "comparative": "более нездоровый",
        "superlative": "самый нездоровый",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "нездоровый",
                "examples": []
            }
        ],
        "id": "ru_elementary_food_drink_040"
    },
    {
        "word": "больной",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🤒",
        "form": "adjective",
        "feminine": "больная",
        "neuter": "больное",
        "plural": "больные",
        "comparative": "более больной",
        "superlative": "самый больной",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "больной",
                "examples": []
            }
        ],
        "id": "ru_elementary_food_drink_041"
    },
    {
        "word": "уставший",
        "level": "elementary",
        "theme": "describing",
        "emoji": "😴",
        "form": "adjective",
        "feminine": "уставшая",
        "neuter": "уставшое",
        "plural": "уставшие",
        "comparative": "более уставший",
        "superlative": "самый уставший",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "уставший",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_016"
    },
    {
        "word": "напряженный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "😫",
        "form": "adjective",
        "feminine": "напряженная",
        "neuter": "напряженное",
        "plural": "напряженные",
        "comparative": "более напряженный",
        "superlative": "самый напряженный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "напряженный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_017"
    },
    {
        "word": "дружелюбный",
        "level": "elementary",
        "theme": "people",
        "emoji": "👋",
        "form": "adjective",
        "feminine": "дружелюбная",
        "neuter": "дружелюбное",
        "plural": "дружелюбные",
        "comparative": "более дружелюбный",
        "superlative": "самый дружелюбный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "дружелюбный",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_034"
    },
    {
        "word": "добрый",
        "level": "elementary",
        "theme": "people",
        "emoji": "❤️",
        "form": "adjective",
        "feminine": "добрая",
        "neuter": "доброе",
        "plural": "добрые",
        "comparative": "более добрый",
        "superlative": "самый добрый",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "добрый",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_035"
    },
    {
        "word": "честный",
        "level": "elementary",
        "theme": "people",
        "emoji": "⚖️",
        "form": "adjective",
        "feminine": "честная",
        "neuter": "честное",
        "plural": "честные",
        "comparative": "более честный",
        "superlative": "самый честный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "честный",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_036"
    },
    {
        "word": "терпеливый",
        "level": "elementary",
        "theme": "people",
        "emoji": "⏳",
        "form": "adjective",
        "feminine": "терпеливая",
        "neuter": "терпеливое",
        "plural": "терпеливые",
        "comparative": "более терпеливый",
        "superlative": "самый терпеливый",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "терпеливый",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_037"
    },
    {
        "word": "вежливый",
        "level": "elementary",
        "theme": "people",
        "emoji": "🙇",
        "form": "adjective",
        "feminine": "вежливая",
        "neuter": "вежливое",
        "plural": "вежливые",
        "comparative": "более вежливый",
        "superlative": "самый вежливый",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "вежливый",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_038"
    },
    {
        "word": "поддерживающий",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "form": "adjective",
        "feminine": "поддерживающая",
        "neuter": "поддерживающее",
        "plural": "поддерживающие",
        "comparative": "более поддерживающий",
        "superlative": "самый поддерживающий",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "поддерживающий",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_039"
    },
    {
        "word": "уверенный",
        "level": "elementary",
        "theme": "people",
        "emoji": "✨",
        "form": "adjective",
        "feminine": "уверенная",
        "neuter": "уверенное",
        "plural": "уверенные",
        "comparative": "более уверенный",
        "superlative": "самый уверенный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "уверенный",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_040"
    },
    {
        "word": "общительный",
        "level": "elementary",
        "theme": "people",
        "emoji": "🗣️",
        "form": "adjective",
        "feminine": "общительная",
        "neuter": "общительное",
        "plural": "общительные",
        "comparative": "более общительный",
        "superlative": "самый общительный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "общительный",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_041"
    },
    {
        "word": "современный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🏙️",
        "form": "adjective",
        "feminine": "современная",
        "neuter": "современное",
        "plural": "современные",
        "comparative": "более современный",
        "superlative": "самый современный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "современный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_018"
    },
    {
        "word": "традиционный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🏛️",
        "form": "adjective",
        "feminine": "традиционная",
        "neuter": "традиционное",
        "plural": "традиционные",
        "comparative": "более традиционный",
        "superlative": "самый традиционный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "традиционный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_019"
    },
    {
        "word": "местный",
        "level": "elementary",
        "theme": "places",
        "emoji": "📍",
        "form": "adjective",
        "feminine": "местная",
        "neuter": "местное",
        "plural": "местные",
        "comparative": "более местный",
        "superlative": "самый местный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "местный",
                "examples": []
            }
        ],
        "id": "ru_elementary_places_045"
    },
    {
        "word": "международный",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🌎",
        "form": "adjective",
        "feminine": "международная",
        "neuter": "международное",
        "plural": "международные",
        "comparative": "более международный",
        "superlative": "самый международный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "международный",
                "examples": []
            }
        ],
        "id": "ru_elementary_work_059"
    },
    {
        "word": "интересный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💡",
        "form": "adjective",
        "feminine": "интересная",
        "neuter": "интересное",
        "plural": "интересные",
        "comparative": "более интересный",
        "superlative": "самый интересный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "интересный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_020"
    },
    {
        "word": "скучный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💤",
        "form": "adjective",
        "feminine": "скучная",
        "neuter": "скучное",
        "plural": "скучные",
        "comparative": "более скучный",
        "superlative": "самый скучный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "скучный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_021"
    },
    {
        "word": "странный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "❓",
        "form": "adjective",
        "feminine": "странная",
        "neuter": "странное",
        "plural": "странные",
        "comparative": "более странный",
        "superlative": "самый странный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "странный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_022"
    },
    {
        "word": "нормальный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "✅",
        "form": "adjective",
        "feminine": "нормальная",
        "neuter": "нормальное",
        "plural": "нормальные",
        "comparative": "более нормальный",
        "superlative": "самый нормальный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "нормальный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_023"
    },
    {
        "word": "типичный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🔄",
        "form": "adjective",
        "feminine": "типичная",
        "neuter": "типичное",
        "plural": "типичные",
        "comparative": "более типичный",
        "superlative": "самый типичный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "типичный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_024"
    },
    {
        "word": "общий",
        "level": "elementary",
        "theme": "describing",
        "emoji": "📍",
        "form": "adjective",
        "feminine": "общая",
        "neuter": "общее",
        "plural": "общие",
        "comparative": "более общий",
        "superlative": "самый общий",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "общий",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_025"
    },
    {
        "word": "редкий",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💎",
        "form": "adjective",
        "feminine": "редкая",
        "neuter": "редкое",
        "plural": "редкие",
        "comparative": "более редкий",
        "superlative": "самый редкий",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "редкий",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_026"
    },
    {
        "word": "определенный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🎯",
        "form": "adjective",
        "feminine": "определенная",
        "neuter": "определенное",
        "plural": "определенные",
        "comparative": "более определенный",
        "superlative": "самый определенный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "определенный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_027"
    },
    {
        "word": "ясный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🔍",
        "form": "adjective",
        "feminine": "ясная",
        "neuter": "ясное",
        "plural": "ясные",
        "comparative": "более ясный",
        "superlative": "самый ясный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "ясный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_028"
    },
    {
        "word": "трудный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🧩",
        "form": "adjective",
        "feminine": "трудная",
        "neuter": "трудное",
        "plural": "трудные",
        "comparative": "более трудный",
        "superlative": "самый трудный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "трудный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_029"
    },
    {
        "word": "простой",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💡",
        "form": "adjective",
        "feminine": "простая",
        "neuter": "простое",
        "plural": "простые",
        "comparative": "более простой",
        "superlative": "самый простой",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "простой",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_030"
    },
    {
        "word": "сложный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🕸️",
        "form": "adjective",
        "feminine": "сложная",
        "neuter": "сложное",
        "plural": "сложные",
        "comparative": "более сложный",
        "superlative": "самый сложный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "сложный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_031"
    },
    {
        "word": "серьезный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "👔",
        "form": "adjective",
        "feminine": "серьезная",
        "neuter": "серьезное",
        "plural": "серьезные",
        "comparative": "более серьезный",
        "superlative": "самый серьезный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "серьезный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_032"
    },
    {
        "word": "смешной",
        "level": "elementary",
        "theme": "people",
        "emoji": "😂",
        "form": "adjective",
        "feminine": "смешная",
        "neuter": "смешное",
        "plural": "смешные",
        "comparative": "более смешной",
        "superlative": "самый смешной",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "смешной",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_042"
    },
    {
        "word": "прямой",
        "level": "elementary",
        "theme": "people",
        "emoji": "➡️",
        "form": "adjective",
        "feminine": "прямая",
        "neuter": "прямое",
        "plural": "прямые",
        "comparative": "более прямой",
        "superlative": "самый прямой",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "прямой",
                "examples": []
            }
        ],
        "id": "ru_elementary_people_043"
    },
    {
        "word": "ежедневный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "📅",
        "form": "adjective",
        "feminine": "ежедневная",
        "neuter": "ежедневное",
        "plural": "ежедневные",
        "comparative": "более ежедневный",
        "superlative": "самый ежедневный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "ежедневный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_033"
    },
    {
        "word": "регулярный",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🔁",
        "form": "adjective",
        "feminine": "регулярная",
        "neuter": "регулярное",
        "plural": "регулярные",
        "comparative": "более регулярный",
        "superlative": "самый регулярный",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "регулярный",
                "examples": []
            }
        ],
        "id": "ru_elementary_describing_034"
    },
    {
        "word": "недавний",
        "level": "elementary",
        "theme": "time",
        "emoji": "🕒",
        "form": "adjective",
        "feminine": "недавняя",
        "neuter": "недавнее",
        "plural": "недавние",
        "comparative": "более недавний",
        "superlative": "самый недавний",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "недавний",
                "examples": []
            }
        ],
        "id": "ru_elementary_time_002"
    },
    {
        "word": "текущий",
        "level": "elementary",
        "theme": "time",
        "emoji": "📍",
        "form": "adjective",
        "feminine": "текущая",
        "neuter": "текущее",
        "plural": "текущие",
        "comparative": "более текущий",
        "superlative": "самый текущий",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "текущий",
                "examples": []
            }
        ],
        "id": "ru_elementary_time_003"
    },
    {
        "word": "будущий",
        "level": "elementary",
        "theme": "time",
        "emoji": "🔮",
        "form": "adjective",
        "feminine": "будущая",
        "neuter": "будущее",
        "plural": "будущие",
        "comparative": "более будущий",
        "superlative": "самый будущий",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "будущий",
                "examples": []
            }
        ],
        "id": "ru_elementary_time_004"
    },
    {
        "word": "предыдущий",
        "level": "elementary",
        "theme": "time",
        "emoji": "⬅️",
        "form": "adjective",
        "feminine": "предыдущая",
        "neuter": "предыдущее",
        "plural": "предыдущие",
        "comparative": "более предыдущий",
        "superlative": "самый предыдущий",
        "lang": "ru",
        "transcription": "",
        "definitions": [
            {
                "text": "предыдущий",
                "examples": []
            }
        ],
        "id": "ru_elementary_time_005"
    }
];
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData['ru'] = [...(window.adjectivesData['ru'] || []), ...data];
})();