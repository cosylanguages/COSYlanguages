(function() {
    const data = [
    {
        "id": "ru_starter_places_024",
        "word": "сад",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Общественный сад или парк.",
                "examples": []
            }
        ],
        "image": "images/vocabulary/actions/to garden.png",
        "emoji": "🌳",
        "classification": "regular",
        "countability": "countable"
    },
    {
        "id": "ru_starter_jobs_002",
        "word": "врач",
        "lang": "ru",
        "level": "starter",
        "theme": "jobs",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, который лечит больных людей.",
                "examples": [
                    "Врач работает в больнице.",
                    "Мне нужно пойти к врачу."
                ]
            }
        ],
        "image": "images/vocabulary/jobs/doctor.png",
        "gender": "masculine",
        "numberPlural": "2 врач",
        "answer": "два врача",
        "emoji": "🧑‍⚕️",
        "classification": "regular",
        "countability": "countable",
        "plural": "врачи",
        "subtext": "пойти к врачу, семейный врач",
        "transcription": "/vratʃ/"
    },
    {
        "id": "ru_starter_body_001",
        "word": "рука",
        "lang": "ru",
        "level": "starter",
        "theme": "body",
        "form": "noun",
        "definitions": [
            {
                "text": "Часть тела от плеча до кисти.",
                "examples": [
                    "Она сломала руку."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "💪",
        "classification": "regular",
        "countability": "countable",
        "plural": "руки",
        "subtext": "сломать руку, левая рука",
        "transcription": "/ruˈka/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "rǫka"
        }
    },
    {
        "id": "ru_starter_body_002",
        "word": "нога",
        "lang": "ru",
        "level": "starter",
        "theme": "body",
        "form": "noun",
        "definitions": [
            {
                "text": "Часть тела внизу, на которой мы ходим.",
                "examples": [
                    "У меня болит нога."
                ]
            }
        ],
        "gender": "feminine",
        "numberPlural": "2 нога",
        "answer": "две ноги",
        "emoji": "🦶",
        "classification": "regular",
        "countability": "countable",
        "plural": "ноги",
        "transcription": "/naˈɡa/",
        "subtext": "",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "noga"
        }
    },
    {
        "id": "ru_starter_jobs_003",
        "word": "учитель",
        "lang": "ru",
        "level": "starter",
        "theme": "jobs",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, который помогает узнавать новое.",
                "examples": [
                    "Учитель сейчас в классе."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🧑‍🏫",
        "classification": "regular",
        "countability": "countable",
        "plural": "учителя",
        "subtext": "учитель русского языка, школьный учитель"
    },
    {
        "id": "ru_starter_food_drink_031",
        "word": "яблоко",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Круглый фрукт красного, зеленого или желтого цвета.",
                "examples": []
            },
            {
                "word": "рыба",
                "image": "images/vocabulary/actions/to fish.png",
                "level": "starter",
                "theme": "food_drink",
                "gender": "feminine",
                "emoji": "🐟",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "definitions": [
                    {
                        "text": "Мясо рыбы, употребляемое в пищу.",
                        "examples": [
                            "Я люблю жареную рыбу на ужин."
                        ]
                    }
                ],
                "transcription": "/ˈrɨbə/",
                "etymology": {
                    "origin_lang": "Proto-Slavic",
                    "origin_word": "ryba"
                }
            }
        ],
        "image": "images/vocabulary/food/apple.png",
        "gender": "neuter",
        "emoji": "🍎",
        "numberPlural": "4 яблоко",
        "answer": "четыре яблока",
        "classification": "regular",
        "countability": "countable",
        "plural": "яблоки",
        "transcription": "/ˈjabləkə/",
        "subtext": ""
    },
    {
        "id": "ru_starter_food_drink_032",
        "word": "хлеб",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Продукт из муки и воды.",
                "examples": [
                    "Я ем хлеб на завтрак."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🍞",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "свежий хлеб, батон",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "xlěbъ"
        }
    },
    {
        "id": "ru_starter_food_drink_033",
        "word": "яйцо",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Овальный продукт, который несет курица.",
                "examples": [
                    "Я ем два яйца каждое утро."
                ]
            }
        ],
        "gender": "neuter",
        "emoji": "🥚",
        "classification": "regular",
        "countability": "countable",
        "plural": "яйца",
        "subtext": "варёное яйцо, омлет"
    },
    {
        "id": "ru_starter_food_drink_034",
        "word": "молоко",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Белая жидкость от коровы.",
                "examples": [
                    "Она добавляет молоко в кофе."
                ]
            }
        ],
        "gender": "neuter",
        "emoji": "🥛",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "стакан молока, свежее молоко",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "mleko"
        }
    },
    {
        "id": "ru_starter_food_drink_035",
        "word": "пицца",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Итальянское блюдо из теста с томатами и сыром.",
                "examples": []
            }
        ],
        "gender": "feminine",
        "emoji": "🍕",
        "classification": "regular",
        "countability": "countable",
        "plural": "пиццы",
        "transcription": "/ˈpittsa/",
        "subtext": ""
    },
    {
        "id": "ru_starter_food_drink_036",
        "word": "рис",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Маленькие белые зерна, которые варят и едят.",
                "examples": []
            }
        ],
        "gender": "masculine",
        "emoji": "🍚",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "белый рис, плов",
        "transcription": "/ris/"
    },
    {
        "id": "ru_starter_food_drink_037",
        "word": "мясо",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Продукт питания из животных.",
                "examples": []
            }
        ],
        "gender": "neuter",
        "emoji": "🥩",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "свежее мясо, говядина, курица",
        "transcription": "/ˈmjasə/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "męso"
        }
    },
    {
        "id": "ru_starter_food_drink_038",
        "word": "еда",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "То, что люди едят.",
                "examples": [
                    "Здесь вкусная еда."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🍲",
        "classification": "regular",
        "countability": "countable",
        "plural": "еда",
        "subtext": ""
    },
    {
        "id": "ru_starter_food_drink_039",
        "word": "фрукт",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Сладкая часть растения с семенами.",
                "examples": [
                    "Фрукты — это полезно."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🍎",
        "classification": "regular",
        "countability": "countable",
        "plural": "фрукты",
        "subtext": "свежий фрукт, фруктовый сок",
        "transcription": "/frukt/"
    },
    {
        "id": "ru_starter_food_drink_040",
        "word": "овощ",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Растение, которое едят, например, морковь или помидор.",
                "examples": [
                    "Он ест овощи каждый день."
                ]
            },
            {
                "word": "перекус",
                "image": "images/vocabulary/actions/to have a snack.png",
                "level": "starter",
                "theme": "food_drink",
                "emoji": "🥨",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "gender": "masculine",
                "definitions": [
                    {
                        "text": "Небольшое количество еды, съедаемое между основными приемами пищи.",
                        "examples": [
                            "Я люблю здоровые перекусы, например фрукты."
                        ]
                    }
                ],
                "transcription": "/pʲɪrʲɪˈkus/"
            }
        ],
        "gender": "masculine",
        "emoji": "🥦",
        "classification": "regular",
        "countability": "countable",
        "plural": "овощи",
        "subtext": "свежие овощи, зелёные овощи",
        "transcription": "/ˈovəɕː/"
    },
    {
        "id": "ru_starter_food_drink_041",
        "word": "кофе",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Горячий тёмный напиток из кофейных зерен.",
                "examples": [
                    "Я пью кофе каждое утро."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "☕",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "чёрный кофе, чашка кофе"
    },
    {
        "id": "ru_starter_food_drink_042",
        "word": "чай",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Горячий напиток из чайных листьев.",
                "examples": [
                    "Она пьёт чай после ужина."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🍵",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "зелёный чай, чашка чая"
    },
    {
        "id": "ru_starter_food_drink_043",
        "word": "сок",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Жидкость из фруктов или овощей.",
                "examples": [
                    "Я хочу стакан сока."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🧃",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "апельсиновый сок, яблочный сок"
    },
    {
        "id": "ru_starter_food_drink_044",
        "word": "вода",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Прозрачная жидкость, которая нужна всем.",
                "examples": [
                    "Пожалуйста, пейте больше воды."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🚰",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "холодная вода, стакан воды",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "voda"
        }
    },
    {
        "id": "ru_starter_food_drink_045",
        "word": "завтрак",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Первый приём пищи за день.",
                "examples": [
                    "Завтрак в семь часов."
                ]
            }
        ],
        "image": "images/vocabulary/actions/to have breakfast.png",
        "gender": "masculine",
        "emoji": "🍳",
        "classification": "regular",
        "countability": "countable",
        "plural": "завтраки",
        "subtext": ""
    },
    {
        "id": "ru_starter_food_drink_046",
        "word": "ужин",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Последний основной приём пищи за день.",
                "examples": [
                    "Ужин в восемь часов вечера."
                ]
            }
        ],
        "image": "images/vocabulary/actions/to have dinner.png",
        "gender": "masculine",
        "emoji": "🍽️",
        "classification": "regular",
        "countability": "countable",
        "plural": "ужины",
        "subtext": ""
    },
    {
        "id": "ru_starter_food_drink_047",
        "word": "обед",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Приём пищи в середине дня.",
                "examples": [
                    "Я обедаю в час дня."
                ]
            }
        ],
        "image": "images/vocabulary/actions/to have lunch.png",
        "gender": "masculine",
        "emoji": "🍱",
        "classification": "regular",
        "countability": "countable",
        "plural": "обеды",
        "subtext": ""
    },
    {
        "id": "ru_starter_places_025",
        "word": "парк",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Общественный сад для прогулок.",
                "examples": [
                    "Давай погуляем в парке."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🌳",
        "classification": "regular",
        "countability": "countable",
        "plural": "парки",
        "subtext": ""
    },
    {
        "id": "ru_starter_places_026",
        "word": "школа",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Место, где дети учатся.",
                "examples": [
                    "Моя школа рядом с домом."
                ]
            }
        ],
        "image": "images/vocabulary/actions/to go to school.png",
        "gender": "feminine",
        "emoji": "🏫",
        "classification": "regular",
        "countability": "countable",
        "plural": "школы",
        "subtext": "",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "schola"
        }
    },
    {
        "id": "ru_starter_places_027",
        "word": "магазин",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Место, где можно купить товары.",
                "examples": [
                    "Магазин открыт."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🛒",
        "classification": "regular",
        "countability": "countable",
        "plural": "магазины",
        "subtext": ""
    },
    {
        "id": "ru_starter_clothes_001",
        "word": "футболка",
        "lang": "ru",
        "level": "starter",
        "theme": "clothes",
        "form": "noun",
        "definitions": [
            {
                "text": "Лёгкая одежда с короткими рукавами.",
                "examples": [
                    "На мне белая футболка."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "👕",
        "classification": "regular",
        "countability": "countable",
        "plural": "футболки",
        "subtext": ""
    },
    {
        "id": "ru_starter_clothes_002",
        "word": "брюки",
        "lang": "ru",
        "level": "starter",
        "theme": "clothes",
        "form": "noun",
        "definitions": [
            {
                "text": "Одежда для ног.",
                "examples": [
                    "Мне нужны новые брюки."
                ]
            }
        ],
        "gender": "plural",
        "emoji": "👖",
        "classification": "regular",
        "countability": "countable",
        "plural": "брюки",
        "subtext": ""
    },
    {
        "id": "ru_starter_clothes_003",
        "word": "обувь",
        "lang": "ru",
        "level": "starter",
        "theme": "clothes",
        "form": "noun",
        "definitions": [
            {
                "text": "То, что мы носим на ногах.",
                "examples": [
                    "Надень обувь."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "👟",
        "classification": "regular",
        "countability": "countable",
        "plural": "обувь",
        "subtext": ""
    },
    {
        "id": "ru_starter_clothes_004",
        "word": "шапка",
        "lang": "ru",
        "level": "starter",
        "theme": "clothes",
        "form": "noun",
        "definitions": [
            {
                "text": "То, что мы носим на голове.",
                "examples": [
                    "На ней красивая шапка."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "👒",
        "classification": "regular",
        "countability": "countable",
        "plural": "шапки",
        "subtext": ""
    },
    {
        "id": "ru_starter_furniture_028",
        "word": "стул",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Мебель для сидения со спинкой.",
                "examples": []
            }
        ],
        "gender": "masculine",
        "emoji": "🪑",
        "classification": "regular",
        "countability": "countable",
        "plural": "стулья",
        "subtext": "деревянный стул, сесть на стул",
        "transcription": "/stul/",
        "etymology": {
            "origin_lang": "German",
            "origin_word": "Stuhl"
        }
    },
    {
        "id": "ru_starter_furniture_029",
        "word": "стол",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Мебель с плоской поверхностью и ножками.",
                "examples": []
            }
        ],
        "gender": "masculine",
        "emoji": "🪑",
        "classification": "regular",
        "countability": "countable",
        "plural": "столы",
        "subtext": "кухонный стол, на столе",
        "transcription": "/stol/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "stolъ"
        }
    },
    {
        "id": "ru_starter_furniture_030",
        "word": "кровать",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Мебель, на которой спят.",
                "examples": []
            }
        ],
        "gender": "feminine",
        "emoji": "🛏️",
        "classification": "regular",
        "countability": "countable",
        "plural": "кровати",
        "subtext": "удобная кровать, лечь в кровать",
        "transcription": "/kraˈvatʲ/",
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "krabbatos"
        }
    },
    {
        "id": "ru_starter_furniture_031",
        "word": "ключ",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Металлический предмет для открывания дверей.",
                "examples": [
                    "Где мои ключи?"
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🔑",
        "classification": "regular",
        "countability": "countable",
        "plural": "ключи",
        "subtext": ""
    },
    {
        "id": "ru_starter_technology_006",
        "word": "телефон",
        "lang": "ru",
        "level": "starter",
        "theme": "technology",
        "form": "noun",
        "definitions": [
            {
                "text": "Устройство для разговоров на расстоянии.",
                "examples": [
                    "Я говорю по телефону."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "📱",
        "classification": "regular",
        "countability": "countable",
        "plural": "телефоны",
        "subtext": ""
    },
    {
        "id": "ru_starter_furniture_032",
        "word": "книга",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Страницы с текстом, которые мы читаем.",
                "examples": [
                    "Я читаю книгу."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "📖",
        "classification": "regular",
        "countability": "countable",
        "plural": "книги",
        "transcription": "/ˈkniɡə/",
        "subtext": ""
    },
    {
        "id": "ru_starter_furniture_033",
        "word": "сумка",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Предмет для переноски вещей.",
                "examples": [
                    "У меня в сумке есть деньги."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "👜",
        "classification": "regular",
        "countability": "countable",
        "plural": "сумки",
        "subtext": ""
    },
    {
        "id": "ru_starter_furniture_034",
        "word": "ручка",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Предмет для письма чернилами.",
                "examples": [
                    "Можно взять твою ручку?"
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🖊️",
        "classification": "regular",
        "countability": "countable",
        "plural": "ручки",
        "transcription": "/ˈrutʃkə/",
        "subtext": ""
    },
    {
        "id": "ru_starter_animals_010",
        "word": "кот",
        "lang": "ru",
        "level": "starter",
        "theme": "animals",
        "form": "noun",
        "definitions": [
            {
                "text": "Маленькое домашнее животное, которое ловит мышей.",
                "examples": []
            }
        ],
        "gender": "masculine",
        "emoji": "🐈",
        "numberPlural": "2 кот",
        "answer": "два кота",
        "classification": "regular",
        "countability": "countable",
        "plural": "коты",
        "transcription": "/kot/",
        "subtext": ""
    },
    {
        "id": "ru_starter_animals_011",
        "word": "собака",
        "lang": "ru",
        "level": "starter",
        "theme": "animals",
        "form": "noun",
        "definitions": [
            {
                "text": "Домашнее животное, лучший друг человека.",
                "examples": []
            }
        ],
        "gender": "feminine",
        "emoji": "🐕",
        "numberPlural": "5 собака",
        "answer": "пять собак",
        "classification": "regular",
        "countability": "countable",
        "plural": "собаки",
        "transcription": "/saˈbakə/",
        "subtext": ""
    },
    {
        "id": "ru_starter_animals_012",
        "word": "птица",
        "lang": "ru",
        "level": "starter",
        "theme": "animals",
        "form": "noun",
        "definitions": [
            {
                "text": "Животное с перьями и крыльями.",
                "examples": [
                    "Птица поёт."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🐦",
        "classification": "regular",
        "countability": "countable",
        "plural": "птицы",
        "transcription": "/ˈptitsə/",
        "subtext": "",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "pъtica"
        }
    },
    {
        "id": "ru_starter_animals_013",
        "word": "рыба",
        "lang": "ru",
        "level": "starter",
        "theme": "animals",
        "form": "noun",
        "definitions": [
            {
                "text": "Животное, которое живет в воде.",
                "examples": [
                    "Рыба плавает."
                ]
            }
        ],
        "image": "images/vocabulary/nature/fish.png",
        "gender": "feminine",
        "emoji": "🐟",
        "classification": "regular",
        "countability": "countable",
        "plural": "рыбы",
        "transcription": "/ˈrɨbə/",
        "subtext": "",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "ryba"
        }
    },
    {
        "id": "ru_starter_body_003",
        "word": "голова",
        "lang": "ru",
        "level": "starter",
        "theme": "body",
        "form": "noun",
        "definitions": [
            {
                "text": "Верхняя часть тела.",
                "examples": [
                    "У меня на голове шапка."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "👤",
        "classification": "regular",
        "countability": "countable",
        "plural": "головы",
        "subtext": "головная боль, кивать головой",
        "transcription": "/ɡəlaˈva/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "golva"
        }
    },
    {
        "id": "ru_starter_body_004",
        "word": "глаз",
        "lang": "ru",
        "level": "starter",
        "theme": "body",
        "form": "noun",
        "definitions": [
            {
                "text": "Часть тела, которой мы видим.",
                "examples": [
                    "У неё голубые глаза."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "👁️",
        "classification": "regular",
        "countability": "countable",
        "plural": "глаза",
        "subtext": "голубые глаза, закрыть глаза",
        "transcription": "/ɡlas/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "glazъ"
        }
    },
    {
        "id": "ru_starter_body_005",
        "word": "нос",
        "lang": "ru",
        "level": "starter",
        "theme": "body",
        "form": "noun",
        "definitions": [
            {
                "text": "Часть лица, которой мы чувствуем запахи.",
                "examples": [
                    "У него маленький нос."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "👃",
        "classification": "regular",
        "countability": "countable",
        "plural": "носы",
        "transcription": "/nos/",
        "subtext": "",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "nosъ"
        }
    },
    {
        "id": "ru_starter_body_006",
        "word": "рот",
        "lang": "ru",
        "level": "starter",
        "theme": "body",
        "form": "noun",
        "definitions": [
            {
                "text": "Часть лица, которой мы едим и говорим.",
                "examples": [
                    "Открой рот."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "👄",
        "classification": "regular",
        "countability": "countable",
        "plural": "рты",
        "subtext": "открыть рот, молчать",
        "transcription": "/rot/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "rъtъ"
        }
    },
    {
        "id": "ru_starter_body_007",
        "word": "ухо",
        "lang": "ru",
        "level": "starter",
        "theme": "body",
        "form": "noun",
        "definitions": [
            {
                "text": "Часть тела, которой мы слышим.",
                "examples": [
                    "У меня два уха."
                ]
            }
        ],
        "gender": "neuter",
        "emoji": "👂",
        "classification": "regular",
        "countability": "countable",
        "plural": "уши",
        "subtext": "левое ухо, правое ухо, боль в ухе",
        "transcription": "/ˈuxə/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "uxo"
        }
    },
    {
        "id": "ru_starter_body_008",
        "word": "спина",
        "lang": "ru",
        "level": "starter",
        "theme": "body",
        "form": "noun",
        "definitions": [
            {
                "text": "Задняя часть тела от шеи до поясницы.",
                "examples": [
                    "У меня болит спина."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🚶",
        "classification": "regular",
        "countability": "countable",
        "plural": "спины",
        "subtext": "боль в спине, лежать на спине"
    },
    {
        "id": "ru_starter_people_011",
        "word": "мать",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Женщина по отношению к своим детям.",
                "examples": []
            }
        ],
        "gender": "feminine",
        "emoji": "👩",
        "classification": "regular",
        "countability": "countable",
        "plural": "матери",
        "transcription": "/matʲ/",
        "subtext": "",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "mati"
        }
    },
    {
        "id": "ru_starter_people_012",
        "word": "отец",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Мужчина по отношению к своим детям.",
                "examples": []
            }
        ],
        "gender": "masculine",
        "emoji": "👨",
        "classification": "regular",
        "countability": "countable",
        "plural": "отцы",
        "transcription": "/aˈtjets/",
        "subtext": "",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "otьcь"
        }
    },
    {
        "id": "ru_starter_people_013",
        "word": "семья",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Группа людей, состоящая из родителей и детей.",
                "examples": []
            }
        ],
        "gender": "feminine",
        "emoji": "👪",
        "classification": "regular",
        "countability": "countable",
        "plural": "семьи",
        "transcription": "/sʲiˈmja/",
        "subtext": ""
    },
    {
        "id": "ru_starter_people_014",
        "word": "друг",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, которого вы любите и хорошо знаете.",
                "examples": []
            }
        ],
        "gender": "masculine",
        "emoji": "👫",
        "classification": "regular",
        "countability": "countable",
        "plural": "друзья",
        "transcription": "/druk/",
        "subtext": ""
    },
    {
        "id": "ru_starter_people_015",
        "word": "партнёр",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, с которым вы живете или состоите в паре.",
                "examples": []
            }
        ],
        "gender": "masculine",
        "emoji": "💑",
        "classification": "regular",
        "countability": "countable",
        "plural": "партнёры",
        "transcription": "/paʁtˈnʲor/",
        "subtext": ""
    },
    {
        "id": "ru_starter_body_009",
        "word": "мужчина",
        "lang": "ru",
        "level": "starter",
        "theme": "body",
        "form": "noun",
        "definitions": [
            {
                "text": "Взрослый человек мужского пола.",
                "examples": []
            }
        ],
        "gender": "masculine",
        "numberPlural": "2 мужчина",
        "answer": "два мужчины",
        "emoji": "👨",
        "classification": "regular",
        "countability": "countable",
        "plural": "мужчины",
        "transcription": "/muˈɕːinə/",
        "subtext": ""
    },
    {
        "id": "ru_starter_body_010",
        "word": "женщина",
        "lang": "ru",
        "level": "starter",
        "theme": "body",
        "form": "noun",
        "definitions": [
            {
                "text": "Взрослый человек женского пола.",
                "examples": []
            },
            {
                "word": "щетина",
                "image": "images/vocabulary/appearance/stubble.bristle.png",
                "level": "starter",
                "theme": "people",
                "emoji": "🧔",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "gender": "feminine",
                "definitions": [
                    {
                        "text": "Короткие жесткие волоски, отрастающие на лице мужчины, если он не брился несколько дней.",
                        "examples": [
                            "У него небольшая щетина."
                        ]
                    }
                ],
                "transcription": "/ɕːɪˈtʲinə/"
            }
        ],
        "gender": "feminine",
        "numberPlural": "2 женщина",
        "answer": "две женщины",
        "emoji": "👩",
        "classification": "regular",
        "countability": "countable",
        "plural": "женщины",
        "transcription": "/ˈʐenɕːinə/",
        "subtext": "",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "žena"
        }
    },
    {
        "id": "ru_starter_furniture_035",
        "word": "дом",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Здание, где живет семья.",
                "examples": []
            }
        ],
        "image": "images/vocabulary/actions/to go home.png",
        "gender": "masculine",
        "emoji": "🏡",
        "classification": "regular",
        "countability": "countable",
        "plural": "дома",
        "subtext": "",
        "synonyms": [
            "дома",
            "идти домой"
        ],
        "transcription": "/dom/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "domъ"
        }
    },
    {
        "id": "ru_starter_furniture_036",
        "word": "квартира",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Набор комнат на одном этаже здания.",
                "examples": [
                    "Она живет в квартире."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🏢",
        "classification": "regular",
        "countability": "countable",
        "plural": "квартиры",
        "subtext": "квартира, жить в квартире",
        "transcription": "/kvaʁˈtiʁə/"
    },
    {
        "id": "ru_starter_furniture_037",
        "word": "офис",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Комната или здание, где работают люди.",
                "examples": [
                    "Он в офисе."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🏢",
        "classification": "regular",
        "countability": "countable",
        "plural": "офисы",
        "subtext": "место работы, большой офис"
    },
    {
        "id": "ru_starter_travel_016",
        "word": "машина",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Транспортное средство с четырьмя колесами и двигателем.",
                "examples": [
                    "Его машина красная."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🚗",
        "classification": "regular",
        "countability": "countable",
        "plural": "машины",
        "subtext": "водить машину, быстрая машина",
        "transcription": "/maˈʂɨnə/"
    },
    {
        "id": "ru_starter_travel_017",
        "word": "автобус",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Большое транспортное средство для многих людей.",
                "examples": [
                    "Я езжу на работу на автобусе."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🚌",
        "classification": "regular",
        "countability": "countable",
        "plural": "автобусы",
        "subtext": "ехать на автобусе, автобусная остановка"
    },
    {
        "id": "ru_starter_travel_018",
        "word": "поезд",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Транспорт, который движется по рельсам.",
                "examples": [
                    "Поезд едет быстро."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🚆",
        "classification": "regular",
        "countability": "countable",
        "plural": "поезда",
        "subtext": "ехать на поезде, на поезде, вокзал"
    },
    {
        "id": "ru_starter_shopping_006",
        "word": "деньги",
        "lang": "ru",
        "level": "starter",
        "theme": "shopping",
        "form": "noun",
        "definitions": [
            {
                "text": "Монеты или купюры для покупки товаров.",
                "examples": []
            }
        ],
        "gender": "plural",
        "emoji": "💰",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "тратить деньги, копить деньги",
        "transcription": "/ˈdʲenʲɡi/"
    },
    {
        "id": "ru_starter_time_012",
        "word": "утро",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "noun",
        "definitions": [
            {
                "text": "Часть дня до полудня.",
                "examples": []
            }
        ],
        "gender": "neuter",
        "emoji": "🌅",
        "classification": "regular",
        "countability": "countable",
        "plural": "утра",
        "transcription": "/ˈutrə/",
        "subtext": ""
    },
    {
        "id": "ru_starter_time_013",
        "word": "вечер",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "noun",
        "definitions": [
            {
                "text": "Часть дня после полудня.",
                "examples": []
            }
        ],
        "gender": "masculine",
        "emoji": "🌆",
        "classification": "regular",
        "countability": "countable",
        "plural": "вечера",
        "transcription": "/ˈvjetʃʲiʁ/",
        "subtext": ""
    },
    {
        "id": "ru_starter_time_014",
        "word": "день",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "noun",
        "definitions": [
            {
                "text": "Период времени в 24 часа.",
                "examples": []
            }
        ],
        "gender": "masculine",
        "emoji": "☀️",
        "classification": "regular",
        "countability": "countable",
        "plural": "дни",
        "transcription": "/djenʲ/",
        "subtext": "",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "dьnь"
        }
    },
    {
        "id": "ru_starter_time_015",
        "word": "неделя",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "noun",
        "definitions": [
            {
                "text": "Период времени в семь дней.",
                "examples": []
            }
        ],
        "gender": "feminine",
        "emoji": "📅",
        "classification": "regular",
        "countability": "countable",
        "plural": "недели",
        "transcription": "/nʲiˈdʲelʲə/",
        "subtext": ""
    },
    {
        "id": "ru_starter_work_027",
        "word": "босс",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, который руководит на работе.",
                "examples": [
                    "Мой босс очень дружелюбный."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "👨‍💼",
        "classification": "regular",
        "countability": "countable",
        "plural": "боссы",
        "subtext": "",
        "synonyms": [
            "начальник"
        ]
    },
    {
        "id": "ru_starter_work_028",
        "word": "коллега",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, с которым вы работаете.",
                "examples": [
                    "Мои коллеги всегда помогают."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🧑‍💼",
        "classification": "regular",
        "countability": "countable",
        "plural": "коллеги",
        "transcription": "/kalˈlʲeɡə/",
        "subtext": ""
    },
    {
        "id": "ru_starter_work_029",
        "word": "зарплата",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Деньги, которые человек получает за свою работу каждый месяц.",
                "examples": [
                    "У неё хорошая зарплата."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "💰",
        "classification": "regular",
        "countability": "countable",
        "plural": "зарплаты",
        "subtext": "",
        "synonyms": [
            "заработная плата"
        ],
        "transcription": "/zaʁˈplatə/"
    },
    {
        "id": "ru_starter_work_030",
        "word": "собрание",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Время, когда люди собираются вместе, чтобы что-то обсудить.",
                "examples": [
                    "У нас собрание каждый понедельник."
                ]
            }
        ],
        "gender": "neuter",
        "emoji": "🤝",
        "classification": "regular",
        "countability": "countable",
        "plural": "собрания",
        "subtext": "",
        "synonyms": [
            "встреча",
            "совещание"
        ]
    },
    {
        "id": "ru_starter_travel_019",
        "word": "поездка на работу",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Путь на работу и обратно каждый день.",
                "examples": [
                    "Моя поездка на работу занимает один час."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🚆",
        "classification": "regular",
        "countability": "countable",
        "subtext": ""
    },
    {
        "id": "ru_starter_work_031",
        "word": "стресс",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Чувство беспокойства, вызванное трудной ситуацией.",
                "examples": [
                    "У меня много стресса на работе."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "😫",
        "classification": "regular",
        "countability": "countable",
        "transcription": "/strɛs/",
        "subtext": ""
    },
    {
        "id": "ru_starter_travel_020",
        "word": "аренда",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Деньги, выплачиваемые за пользование домом или квартирой, которые принадлежат кому-то другому.",
                "examples": [
                    "Аренда в этом городе дорогая."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🏠",
        "classification": "regular",
        "countability": "countable",
        "transcription": "/aˈrʲendə/",
        "subtext": ""
    },
    {
        "id": "ru_starter_places_028",
        "word": "сосед",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, который живет рядом с вами.",
                "examples": [
                    "Мои соседи очень приятные люди."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🏠",
        "classification": "regular",
        "countability": "countable",
        "plural": "соседи",
        "transcription": "/saˈsʲet/",
        "subtext": ""
    },
    {
        "id": "ru_starter_furniture_038",
        "word": "комната",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Отдельная часть здания со стенами и дверью.",
                "examples": [
                    "В квартире три комнаты."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🚪",
        "classification": "regular",
        "countability": "countable",
        "plural": "комнаты",
        "transcription": "/ˈkomnətə/",
        "subtext": ""
    },
    {
        "id": "ru_starter_furniture_039",
        "word": "кухня",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Комната в доме, где готовят еду.",
                "examples": [
                    "Я готовлю на кухне."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🍳",
        "classification": "regular",
        "countability": "countable",
        "plural": "кухни",
        "subtext": ""
    },
    {
        "id": "ru_starter_work_032",
        "word": "сон",
        "lang": "ru",
        "level": "starter",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Естественный отдых, в котором ваше тело нуждается каждую ночь.",
                "examples": [
                    "Мне нужен восьмичасовой сон."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "😴",
        "classification": "regular",
        "countability": "countable",
        "transcription": "/son/",
        "subtext": ""
    },
    {
        "id": "ru_starter_social_025",
        "word": "упражнение",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Физическая активность, которая поддерживает вас в форме и здоровье.",
                "examples": [
                    "Я делаю упражнения три раза в неделю."
                ]
            }
        ],
        "gender": "neuter",
        "emoji": "🏋️",
        "classification": "regular",
        "countability": "countable",
        "plural": "упражнения",
        "transcription": "/upʁaʐˈnʲenʲijə/",
        "subtext": ""
    },
    {
        "id": "ru_starter_shopping_007",
        "word": "цена",
        "lang": "ru",
        "level": "starter",
        "theme": "shopping",
        "form": "noun",
        "definitions": [
            {
                "text": "Количество денег, которое вы платите за что-то.",
                "examples": [
                    "Цена на еду высокая."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🏷️",
        "classification": "regular",
        "countability": "countable",
        "plural": "цены",
        "subtext": ""
    },
    {
        "id": "ru_starter_shopping_008",
        "word": "стоимость",
        "lang": "ru",
        "level": "starter",
        "theme": "shopping",
        "form": "noun",
        "definitions": [
            {
                "text": "Количество денег, необходимое для покупки чего-либо.",
                "examples": [
                    "Стоимость квартиры очень высокая."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "💰",
        "classification": "regular",
        "countability": "countable",
        "subtext": ""
    },
    {
        "id": "ru_starter_people_016",
        "word": "отношения",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Связь между двумя людьми.",
                "examples": [
                    "У них хорошие отношения."
                ]
            }
        ],
        "gender": "plural",
        "emoji": "❤️",
        "classification": "regular",
        "countability": "countable",
        "subtext": "",
        "synonyms": [
            "связь"
        ],
        "transcription": "/atnaˈʂenʲijə/"
    },
    {
        "id": "ru_starter_travel_021",
        "word": "отпуск",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Период времени вдали от работы, когда вы путешествуете или отдыхаете.",
                "examples": [
                    "У нас отпуск в июле."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🏖️",
        "classification": "regular",
        "countability": "countable",
        "plural": "отпуска",
        "subtext": "",
        "synonyms": [
            "каникулы"
        ]
    },
    {
        "id": "ru_starter_travel_022",
        "word": "путешествие",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Поездка из одного места в другое.",
                "examples": [
                    "Я люблю путешествия."
                ]
            }
        ],
        "gender": "neuter",
        "emoji": "✈️",
        "classification": "regular",
        "countability": "countable",
        "plural": "путешествия",
        "subtext": ""
    },
    {
        "id": "ru_starter_travel_023",
        "word": "отель",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Здание, где люди платят за ночлег.",
                "examples": [
                    "Отель находится рядом с вокзалом."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🏨",
        "classification": "regular",
        "countability": "countable",
        "plural": "отели",
        "subtext": "",
        "synonyms": [
            "гостиница"
        ],
        "transcription": "/aˈtɛlʲ/"
    },
    {
        "id": "ru_starter_time_016",
        "word": "выходные",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "noun",
        "definitions": [
            {
                "text": "Суббота и воскресенье.",
                "examples": [
                    "Я отдыхаю в выходные."
                ]
            }
        ],
        "gender": "plural",
        "emoji": "🗓️",
        "classification": "regular",
        "countability": "countable",
        "subtext": "",
        "synonyms": [
            "уикенд"
        ],
        "transcription": "/vɨxadˈnɨjə/"
    },
    {
        "id": "ru_starter_social_026",
        "word": "свободное время",
        "lang": "ru",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Время, когда вы не работаете и можете делать то, что хотите.",
                "examples": [
                    "Я читаю книги в свободное время."
                ]
            }
        ],
        "gender": "neuter",
        "emoji": "🎮",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "досуг",
            "отдых"
        ],
        "transcription": "/svaˈbodnəjə ˈvrʲemʲə/"
    },
    {
        "id": "ru_starter_food_drink_048",
        "word": "пиво",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Популярный алкогольный напиток из зерна.",
                "examples": [
                    "Он пьёт пиво по выходным."
                ]
            }
        ],
        "gender": "neuter",
        "emoji": "🍺",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "холодное пиво, светлое пиво",
        "transcription": "/ˈpʲivə/"
    },
    {
        "id": "ru_starter_food_drink_049",
        "word": "вино",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Алкогольный напиток из винограда.",
                "examples": [
                    "Она пьёт бокал вина вечером."
                ]
            }
        ],
        "gender": "neuter",
        "emoji": "🍷",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "красное вино, белое вино, бокал вина",
        "transcription": "/vʲiˈno/"
    },
    {
        "id": "ru_starter_furniture_040",
        "word": "дверь",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Плоская панель, которая открывается и закрывается.",
                "examples": [
                    "Пожалуйста, закройте дверь."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🚪",
        "classification": "regular",
        "countability": "countable",
        "plural": "двери",
        "subtext": "открыть дверь, входная дверь",
        "transcription": "/dvʲeʁʲ/"
    },
    {
        "id": "ru_starter_furniture_041",
        "word": "окно",
        "lang": "ru",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Проём в стене со стеклом для света и воздуха.",
                "examples": [
                    "Открой окно — жарко."
                ]
            },
            {
                "word": "портфель",
                "image": "images/vocabulary/actions/to go to work.png",
                "level": "starter",
                "theme": "furniture_objects",
                "emoji": "💼",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "gender": "masculine",
                "definitions": [
                    {
                        "text": "Плоская сумка для переноски бумаг и документов.",
                        "examples": [
                            "Он носит свои документы в портфеле."
                        ]
                    }
                ],
                "transcription": "/pɐrtˈfʲelʲ/"
            }
        ],
        "gender": "neuter",
        "emoji": "🪟",
        "classification": "regular",
        "countability": "countable",
        "plural": "окна",
        "subtext": "открыть окно, подоконник",
        "transcription": "/akˈno/"
    },
    {
        "id": "ru_starter_jobs_004",
        "word": "медсестра",
        "lang": "ru",
        "level": "starter",
        "theme": "jobs",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, обученный уходу за больными.",
                "examples": [
                    "Медсестра проверяет давление."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🧑‍⚕️",
        "classification": "regular",
        "countability": "countable",
        "plural": "медсёстры",
        "subtext": "медицинский брат, помощник врача",
        "transcription": "/mʲitsʲisˈtra/"
    },
    {
        "id": "ru_starter_jobs_005",
        "word": "водитель",
        "lang": "ru",
        "level": "starter",
        "theme": "jobs",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, который управляет транспортным средством.",
                "examples": [
                    "Водитель автобуса был вежлив."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🚗",
        "classification": "regular",
        "countability": "countable",
        "plural": "водители",
        "subtext": "шофёр, водитель автобуса",
        "transcription": "/vaˈdʲitʲilʲ/"
    },
    {
        "id": "ru_starter_jobs_006",
        "word": "повар",
        "lang": "ru",
        "level": "starter",
        "theme": "jobs",
        "form": "noun",
        "definitions": [
            {
                "text": "Профессиональный кулинар, часто главный на кухне.",
                "examples": [
                    "Повар готовит отличную еду."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "classification": "regular",
        "countability": "countable",
        "plural": "повара",
        "subtext": "шеф-повар, кулинар",
        "transcription": "/ˈpovəʁ/"
    },
    {
        "id": "ru_starter_jobs_007",
        "word": "менеджер",
        "lang": "ru",
        "level": "starter",
        "theme": "jobs",
        "form": "noun",
        "definitions": [
            {
                "text": "Человек, который руководит командой или бизнесом.",
                "examples": [
                    "Мой менеджер работает допоздна."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🧑‍💼",
        "classification": "regular",
        "countability": "countable",
        "plural": "менеджеры",
        "subtext": "",
        "synonyms": [
            "руководитель",
            "директор"
        ],
        "transcription": "/ˈmɛnɨdʐɨʁ/"
    },
    {
        "id": "ru_starter_travel_024",
        "word": "самолёт",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Летательный аппарат с крыльями.",
                "examples": [
                    "Самолёт приземляется в девять часов."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "✈️",
        "classification": "regular",
        "countability": "countable",
        "plural": "самолёты",
        "subtext": "лететь на самолёте, рейс",
        "transcription": "/samaˈlʲot/"
    },
    {
        "id": "ru_starter_travel_025",
        "word": "велосипед",
        "lang": "ru",
        "level": "starter",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Двухколёсное транспортное средство с педалями.",
                "examples": [
                    "Он ездит на работу на велосипеде."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🚲",
        "classification": "regular",
        "countability": "countable",
        "plural": "велосипеды",
        "subtext": "велик, кататься на велосипеде",
        "transcription": "/vʲilasʲiˈpʲet/"
    },
    {
        "id": "ru_starter_places_029",
        "word": "больница",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Место, где лечат больных людей.",
                "examples": [
                    "Его отвезли в больницу на скорой."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🏥",
        "classification": "regular",
        "countability": "countable",
        "plural": "больницы",
        "subtext": "госпиталь, лежать в больнице",
        "transcription": "/balʲˈnʲitsə/"
    },
    {
        "id": "ru_starter_places_030",
        "word": "ресторан",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Место, где люди едят готовую еду за деньги.",
                "examples": [
                    "Мы ходим в ресторан по пятницам."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🍴",
        "classification": "regular",
        "countability": "countable",
        "plural": "рестораны",
        "subtext": "итальянский ресторан, идти в ресторан",
        "transcription": "/ʁʲistaˈran/"
    },
    {
        "id": "ru_starter_places_031",
        "word": "банк",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Место, где хранят деньги и проводят финансовые операции.",
                "examples": [
                    "Банк находится рядом с моим офисом."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🏦",
        "classification": "regular",
        "countability": "countable",
        "plural": "банки",
        "subtext": "банковский счёт, пойти в банк"
    },
    {
        "id": "ru_starter_places_032",
        "word": "станция",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Здание, где останавливаются поезда или автобусы.",
                "examples": [
                    "Станция в десяти минутах отсюда."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🚉",
        "classification": "regular",
        "countability": "countable",
        "plural": "станции",
        "subtext": "",
        "synonyms": [
            "вокзал",
            "автобусная остановка"
        ]
    },
    {
        "id": "ru_starter_places_033",
        "word": "супермаркет",
        "lang": "ru",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Большой магазин с продуктами и товарами для дома.",
                "examples": [
                    "Я хожу в супермаркет по субботам."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🛒",
        "classification": "regular",
        "countability": "countable",
        "plural": "супермаркеты",
        "subtext": "зайти в супермаркет",
        "transcription": "/supʲiʁˈmaʁkʲit/"
    },
    {
        "id": "ru_starter_nature_021",
        "word": "солнце",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "noun",
        "definitions": [
            {
                "text": "Звезда, которая даёт свет и тепло днём.",
                "examples": [
                    "Сегодня очень сильное солнце."
                ]
            }
        ],
        "gender": "neuter",
        "emoji": "☀️",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "яркое солнце, утреннее солнце",
        "transcription": "/ˈsontsə/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "sъlnьce"
        }
    },
    {
        "id": "ru_starter_nature_022",
        "word": "дождь",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "noun",
        "definitions": [
            {
                "text": "Вода, падающая из облаков каплями.",
                "examples": [
                    "Осенью часто идут дожди."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "🌧️",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "сильный дождь, резиновые сапоги",
        "transcription": "/doʃtʲ/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "dъždь"
        }
    },
    {
        "id": "ru_starter_nature_023",
        "word": "ветер",
        "lang": "ru",
        "level": "starter",
        "theme": "nature",
        "form": "noun",
        "definitions": [
            {
                "text": "Движение воздуха.",
                "examples": [
                    "Сегодня очень сильный ветер."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "💨",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "сильный ветер, холодный ветер",
        "transcription": "/ˈvʲetʲiʁ/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "větrъ"
        }
    },
    {
        "id": "ru_starter_time_017",
        "word": "ночь",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "noun",
        "definitions": [
            {
                "text": "Тёмное время суток между вечером и утром.",
                "examples": [
                    "Я сплю восемь часов каждую ночь."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "🌙",
        "classification": "regular",
        "countability": "countable",
        "plural": "ночи",
        "subtext": "",
        "synonyms": [
            "спокойной ночи",
            "ночью"
        ],
        "transcription": "/notʃʲ/",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "noťь"
        }
    },
    {
        "id": "ru_starter_time_018",
        "word": "завтра",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "adverb",
        "definitions": [
            {
                "text": "На следующий день после сегодня.",
                "examples": [
                    "У неё завтра визит к врачу."
                ]
            }
        ],
        "emoji": "⏭️",
        "subtext": "завтра утром, до завтра",
        "transcription": "/ˈzaftrə/"
    },
    {
        "id": "ru_starter_people_017",
        "word": "муж",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Мужчина, состоящий в браке.",
                "examples": [
                    "Её муж — врач."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "👨",
        "classification": "regular",
        "countability": "countable",
        "plural": "мужья",
        "oppositeEmoji": "👩",
        "subtext": "",
        "synonyms": [
            "супруг",
            "партнёр"
        ],
        "transcription": "/muʂ/",
        "antonyms": [
            "жена"
        ]
    },
    {
        "id": "ru_starter_people_018",
        "word": "жена",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Женщина, состоящая в браке.",
                "examples": [
                    "Его жена работает в финансах."
                ]
            }
        ],
        "gender": "feminine",
        "emoji": "👩",
        "classification": "regular",
        "countability": "countable",
        "plural": "жёны",
        "oppositeEmoji": "👨",
        "subtext": "",
        "synonyms": [
            "супруга",
            "партнёрша"
        ],
        "transcription": "/ʐɨˈna/",
        "antonyms": [
            "муж"
        ]
    },
    {
        "id": "ru_starter_people_019",
        "word": "ребёнок",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Молодой человек; сын или дочь.",
                "examples": [
                    "У них двое детей."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "👶",
        "classification": "regular",
        "countability": "countable",
        "plural": "дети",
        "subtext": "",
        "synonyms": [
            "малыш",
            "дитя"
        ],
        "transcription": "/rʲiˈbʲonək/"
    },
    {
        "id": "ru_starter_people_020",
        "word": "родитель",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Отец или мать.",
                "examples": [
                    "Мои родители живут на севере."
                ]
            }
        ],
        "gender": "masculine",
        "emoji": "👪",
        "classification": "regular",
        "countability": "countable",
        "plural": "родители",
        "subtext": "",
        "synonyms": [
            "мать или отец"
        ],
        "transcription": "/raˈdʲitʲilʲ/"
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();