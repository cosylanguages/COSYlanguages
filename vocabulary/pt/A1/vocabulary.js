// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "garden",
        "level": "starter",
        "theme": "places",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A public garden or large green area in a city for everyone to use.",
                "examples": []
            }
        ],
        "lang": "pt",
        "sub_theme": "city",
        "id": "pt_starter_places_010"
    },
    {
        "word": "médico",
        "level": "starter",
        "theme": "jobs",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Pessoa que ajuda os doentes.",
                "examples": [
                    "O médico trabalha no hospital."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈmédico",
        "lang": "pt",
        "sub_theme": "professions",
        "id": "pt_starter_jobs_002"
    },
    {
        "word": "pé",
        "level": "starter",
        "theme": "body",
        "emoji": "🦶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte do corpo na base da perna.",
                "examples": [
                    "O meu pé dói."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈpé",
        "lang": "pt",
        "sub_theme": "limbs",
        "id": "pt_starter_body_002"
    },
    {
        "word": "professor",
        "level": "starter",
        "theme": "jobs",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Pessoa que ajuda a aprender.",
                "examples": [
                    "O professor está na sala de aula."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈprofessor",
        "lang": "pt",
        "sub_theme": "professions",
        "id": "pt_starter_jobs_003"
    },
    {
        "word": "pizza",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Pão achatado com queijo e tomate.",
                "examples": [
                    "Eu gosto de pizza com queijo."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈpizza",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_023"
    },
    {
        "word": "massa",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Alimento feito de farinha e ovos.",
                "examples": [
                    "Comemos massa hoje."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈmassa",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_024"
    },
    {
        "word": "maçã",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Fruta redonda, vermelha ou verde.",
                "examples": [
                    "A maçã é vermelha."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈmaçã",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_025"
    },
    {
        "word": "pão",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Alimento comum de farinha e água.",
                "examples": [
                    "Compro pão todas as manhãs."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈpão",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_026"
    },
    {
        "word": "ovo",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Objeto oval posto por uma galinha.",
                "examples": [
                    "Um ovo para o pequeno-almoço."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈovo",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_027"
    },
    {
        "word": "leite",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Líquido branco das vacas.",
                "examples": [
                    "Bebo leite frio."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈleite",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_028"
    },
    {
        "word": "banana",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Fruta amarela longa.",
                "examples": [
                    "A banana é amarela."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈbanana",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_029"
    },
    {
        "word": "café",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Bebida castanha quente.",
                "examples": [
                    "Tomo café sem açúcar."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈcafé",
        "lang": "pt",
        "sub_theme": "drinks",
        "id": "pt_starter_food_drink_030"
    },
    {
        "word": "chá",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Bebida quente de folhas.",
                "examples": [
                    "Um chá quente, por favor."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈchá",
        "lang": "pt",
        "sub_theme": "drinks",
        "id": "pt_starter_food_drink_031"
    },
    {
        "word": "água",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🚰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Líquido transparente que bebemos.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈágua",
        "lang": "pt",
        "sub_theme": "drinks",
        "id": "pt_starter_food_drink_032"
    },
    {
        "word": "escola",
        "level": "starter",
        "theme": "places",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Lugar onde as crianças aprendem.",
                "examples": [
                    "A escola abre às oito."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈescola",
        "lang": "pt",
        "sub_theme": "city",
        "id": "pt_starter_places_011"
    },
    {
        "word": "t-shirt",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Camisa casual de manga curta.",
                "examples": [
                    "Uso uma t-shirt azul."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈt-shirt",
        "lang": "pt",
        "sub_theme": "everyday",
        "id": "pt_starter_clothes_003"
    },
    {
        "word": "calças",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Roupa para as pernas.",
                "examples": [
                    "Estas calças são novas."
                ]
            }
        ],
        "article": "as",
        "gender": "feminine",
        "transcription": "ˈcalças",
        "lang": "pt",
        "sub_theme": "everyday",
        "id": "pt_starter_clothes_004"
    },
    {
        "word": "sapato",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Algo que se usa nos pés.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈsapato",
        "lang": "pt",
        "sub_theme": "everyday",
        "id": "pt_starter_clothes_005"
    },
    {
        "word": "chapéu",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Algo que se usa na cabeça.",
                "examples": [
                    "Ela usa um chapéu para o sol."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈchapéu",
        "lang": "pt",
        "sub_theme": "everyday",
        "id": "pt_starter_clothes_006"
    },
    {
        "word": "cadeira",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Móvel com encosto, geralmente de quatro pés, para uma pessoa se sentar.",
                "examples": [
                    "Sento-me na cadeira."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "kɐ.ˈðej.ɾɐ",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_005"
    },
    {
        "word": "mesa",
        "level": "starter",
        "theme": "furniture",
        "emoji": "table",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Móvel composto por um tampo horizontal sustentado por um ou mais pés.",
                "examples": [
                    "Coloca o livro sobre a mesa."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈme.zɐ",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_006"
    },
    {
        "word": "cama",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Móvel destinado ao sono ou ao descanso.",
                "examples": [
                    "Vou para a cama às dez horas."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈkɐ.mɐ",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_007"
    },
    {
        "word": "chave",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Instrumento metálico para abrir ou fechar uma fechadura.",
                "examples": [
                    "Perdi a minha chave."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈʃa.vɨ",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_008"
    },
    {
        "word": "telefone",
        "level": "starter",
        "theme": "technology",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Dispositivo para falar com pessoas.",
                "examples": [
                    "O meu telefone não funciona."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈtelefone",
        "lang": "pt",
        "sub_theme": "devices",
        "id": "pt_starter_technology_008"
    },
    {
        "word": "livro",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Conjunto de folhas de papel impressas e encadernadas.",
                "examples": [
                    "Leio um livro interessante."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈli.vɾu",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_009"
    },
    {
        "word": "mala",
        "level": "starter",
        "theme": "furniture",
        "emoji": "👜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Recipiente para carregar coisas.",
                "examples": [
                    "Levo as minhas coisas na mala."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈmala",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_010"
    },
    {
        "word": "caneta",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🖊️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Objeto para escrever com tinta.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈcaneta",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_011"
    },
    {
        "word": "gato",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐈",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Animal pequeno com pelo.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈgato",
        "lang": "pt",
        "sub_theme": "pets",
        "id": "pt_starter_animals_002"
    },
    {
        "word": "cão",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "O melhor amigo do homem.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈcão",
        "lang": "pt",
        "sub_theme": "pets",
        "id": "pt_starter_animals_003"
    },
    {
        "word": "mão",
        "level": "starter",
        "theme": "body",
        "emoji": "✋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte do braço com dedos.",
                "examples": [
                    "Lava as mãos."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈmão",
        "lang": "pt",
        "sub_theme": "limbs",
        "id": "pt_starter_body_003"
    },
    {
        "word": "perna",
        "level": "starter",
        "theme": "body",
        "emoji": "🦵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte do corpo para caminhar.",
                "examples": [
                    "Ela tem pernas longas."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈperna",
        "lang": "pt",
        "sub_theme": "limbs",
        "id": "pt_starter_body_004"
    },
    {
        "word": "olho",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte do corpo para ver.",
                "examples": [
                    "Ele tem olhos verdes."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈolho",
        "lang": "pt",
        "sub_theme": "limbs",
        "id": "pt_starter_body_005"
    },
    {
        "word": "nariz",
        "level": "starter",
        "theme": "body",
        "emoji": "👃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte do rosto para cheirar.",
                "examples": [
                    "Respiramos pelo nariz."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈnariz",
        "lang": "pt",
        "sub_theme": "limbs",
        "id": "pt_starter_body_006"
    },
    {
        "word": "boca",
        "level": "starter",
        "theme": "body",
        "emoji": "👄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte do rosto para comer.",
                "examples": [
                    "Abre a boca."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈboca",
        "lang": "pt",
        "sub_theme": "limbs",
        "id": "pt_starter_body_007"
    },
    {
        "word": "orelha",
        "level": "starter",
        "theme": "body",
        "emoji": "👂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte do corpo para ouvir.",
                "examples": [
                    "Ouvimos com as orelhas."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈorelha",
        "lang": "pt",
        "sub_theme": "limbs",
        "id": "pt_starter_body_008"
    },
    {
        "word": "mãe",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Mulher que é mãe.",
                "examples": [
                    "A mulher lê o jornal."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈmãe",
        "lang": "pt",
        "sub_theme": "family",
        "id": "pt_starter_people_013"
    },
    {
        "word": "pai",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Homem que é pai.",
                "examples": [
                    "Aquele homem é o meu tio."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈpai",
        "lang": "pt",
        "sub_theme": "family",
        "id": "pt_starter_people_014"
    },
    {
        "word": "trabalho",
        "level": "starter",
        "theme": "jobs",
        "emoji": "💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Emprego; lugar para ganhar dinheiro.",
                "examples": [
                    "Procuro um emprego novo."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈtrabalho",
        "lang": "pt",
        "sub_theme": "professions",
        "id": "pt_starter_jobs_004"
    },
    {
        "word": "casa",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "O lugar onde se vive.",
                "examples": [
                    "Volto para casa tarde."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈcasa",
        "lang": "pt",
        "sub_theme": "rooms",
        "id": "pt_starter_furniture_012"
    },
    {
        "word": "carro",
        "level": "starter",
        "theme": "social",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Veículo de quatro rodas.",
                "examples": [
                    "Conduzo um carro vermelho."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈcarro",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_260"
    },
    {
        "word": "autocarro",
        "level": "starter",
        "theme": "social",
        "emoji": "🚌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Veículo grande para muitas pessoas.",
                "examples": [
                    "O autocarro chega cedo."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈautocarro",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_261"
    },
    {
        "word": "comboio",
        "level": "starter",
        "theme": "social",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Veículo que anda sobre carris.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈcomboio",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_262"
    },
    {
        "word": "dinheiro",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Moedas e notas que se usam para comprar.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "di.ˈɲɐj.ɾu",
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_014"
    },
    {
        "word": "loja",
        "level": "starter",
        "theme": "places",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Lugar para comprar coisas.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈloja",
        "lang": "pt",
        "sub_theme": "city",
        "id": "pt_starter_places_012"
    },
    {
        "word": "família",
        "level": "starter",
        "theme": "people",
        "emoji": "👪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Grupo de pessoas aparentadas.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈfamília",
        "lang": "pt",
        "sub_theme": "family",
        "id": "pt_starter_people_015"
    },
    {
        "word": "amigo",
        "level": "starter",
        "theme": "people",
        "emoji": "👫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Pessoa de quem se gosta.",
                "examples": [
                    "Ele é o meu melhor amigo."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈamigo",
        "lang": "pt",
        "sub_theme": "family",
        "id": "pt_starter_people_016"
    },
    {
        "word": "dia",
        "level": "starter",
        "theme": "time",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Período de 24 horas.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈdia",
        "lang": "pt",
        "sub_theme": "clock",
        "id": "pt_starter_time_004"
    },
    {
        "word": "semana",
        "level": "starter",
        "theme": "time",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Período de sete dias.",
                "examples": [
                    "Hoje é um bom dia."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈsemana",
        "lang": "pt",
        "sub_theme": "clock",
        "id": "pt_starter_time_005"
    },
    {
        "word": "comida",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Coisas que as pessoas comem.",
                "examples": [
                    "El almoço está pronto."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈcomida",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_033"
    },
    {
        "word": "pequeno-almoço",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Primeira refeição do dia.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈpequeno-almoço",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_034"
    },
    {
        "word": "almoço",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Refeição do meio do dia.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈalmoço",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_035"
    },
    {
        "word": "jantar",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍽️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Refeição principal da noite.",
                "examples": [
                    "Jantamos às oito."
                ]
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈjantar",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_036"
    },
    {
        "word": "manhã",
        "level": "starter",
        "theme": "time",
        "emoji": "🌅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte do dia antes do meio-dia.",
                "examples": [
                    "Está frio esta manhã."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈmanhã",
        "lang": "pt",
        "sub_theme": "clock",
        "id": "pt_starter_time_006"
    },
    {
        "word": "tarde",
        "level": "starter",
        "theme": "time",
        "emoji": "🌆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte do dia depois da tarde.",
                "examples": [
                    "Saímos à noite."
                ]
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈtarde",
        "lang": "pt",
        "sub_theme": "clock",
        "id": "pt_starter_time_007"
    },
    {
        "word": "noite",
        "level": "starter",
        "theme": "time",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Período de escuridão.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈnoite",
        "lang": "pt",
        "sub_theme": "clock",
        "id": "pt_starter_time_008"
    },
    {
        "word": "hoje",
        "level": "starter",
        "theme": "time",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Neste dia.",
                "examples": []
            }
        ],
        "article": "hoje",
        "gender": "adverb",
        "transcription": "ˈhoje",
        "lang": "pt",
        "sub_theme": "clock",
        "id": "pt_starter_time_009"
    },
    {
        "word": "amanhã",
        "level": "starter",
        "theme": "time",
        "emoji": "⏭️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "No dia depois de hoje.",
                "examples": []
            }
        ],
        "article": "amanhã",
        "gender": "adverb",
        "transcription": "ˈamanhã",
        "lang": "pt",
        "sub_theme": "clock",
        "id": "pt_starter_time_010"
    },
    {
        "word": "marido",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Homem casado.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈmarido",
        "lang": "pt",
        "sub_theme": "family",
        "id": "pt_starter_people_017"
    },
    {
        "word": "mulher",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Mulher casada.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈmulher",
        "lang": "pt",
        "sub_theme": "family",
        "id": "pt_starter_people_018"
    },
    {
        "word": "criança",
        "level": "starter",
        "theme": "people",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Pessoa jovem.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈcriança",
        "lang": "pt",
        "sub_theme": "family",
        "id": "pt_starter_people_019"
    },
    {
        "word": "sol",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Estrela que dá luz e calor.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine",
        "transcription": "ˈsol",
        "lang": "pt",
        "sub_theme": "weather",
        "id": "pt_starter_nature_016"
    },
    {
        "word": "chuva",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌧️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Água que cai das nuvens.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine",
        "transcription": "ˈchuva",
        "lang": "pt",
        "sub_theme": "weather",
        "id": "pt_starter_nature_017"
    },
    {
        "word": "sim",
        "level": "starter",
        "theme": "language",
        "emoji": "✅",
        "form": "adverb",
        "transcription": "ˈsĩ",
        "definitions": [
            {
                "text": "Exprime afirmação.",
                "examples": [
                    "Sim, por favor."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "não"
        ],
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_018"
    },
    {
        "word": "não",
        "level": "starter",
        "theme": "language",
        "emoji": "❌",
        "form": "adverb",
        "transcription": "ˈnɐ̃w̃",
        "definitions": [
            {
                "text": "Exprime negação.",
                "examples": [
                    "Não, obrigado."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "sim"
        ],
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_019"
    },
    {
        "word": "quem",
        "level": "starter",
        "theme": "language",
        "emoji": "👤",
        "form": "pronoun",
        "transcription": "ˈkẽj̃",
        "definitions": [
            {
                "text": "Usado para perguntar pela identidade de uma pessoa.",
                "examples": [
                    "Quem é ele?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "pronome interrogativo",
        "antonyms": [],
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_020"
    },
    {
        "word": "onde",
        "level": "starter",
        "theme": "language",
        "emoji": "📍",
        "form": "adverb",
        "transcription": "ˈõdɨ",
        "definitions": [
            {
                "text": "Usado para perguntar por um lugar.",
                "examples": [
                    "Onde moras?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "advérbio interrogativo",
        "antonyms": [],
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_021"
    },
    {
        "word": "quando",
        "level": "starter",
        "theme": "language",
        "emoji": "⌚",
        "form": "adverb",
        "transcription": "ˈkwɐ̃du",
        "definitions": [
            {
                "text": "Usado para perguntar pelo tempo.",
                "examples": [
                    "Quando chegas?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "advérbio interrogativo",
        "antonyms": [],
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_022"
    },
    {
        "word": "cidade",
        "level": "starter",
        "theme": "places",
        "article": "a",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cidades",
        "partitive": "da",
        "transcription": "si.ˈða.ðɨ",
        "definitions": [
            {
                "text": "Povoação grande onde vivem muitas pessoas.",
                "examples": []
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "campo"
        ],
        "lang": "pt",
        "sub_theme": "geography",
        "id": "pt_starter_places_013"
    },
    {
        "word": "mapa",
        "level": "starter",
        "theme": "school",
        "article": "o",
        "gender": "masculine",
        "emoji": "🗺️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mapas",
        "partitive": "do",
        "transcription": "ˈmapɐ",
        "definitions": [
            {
                "text": "Representação gráfica de um território.",
                "examples": [
                    "Olha para o mapa da cidade."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "pt",
        "sub_theme": "classroom",
        "id": "pt_starter_school_002"
    },
    {
        "word": "presente",
        "level": "starter",
        "theme": "social",
        "article": "o",
        "gender": "masculine",
        "emoji": "🎁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "presentes",
        "partitive": "do",
        "transcription": "pɾɨˈzẽtɨ",
        "definitions": [
            {
                "text": "Coisa que se dá a alguém sem querer dinheiro.",
                "examples": [
                    "Este é um presente para ti."
                ]
            }
        ],
        "synonyms": [
            "prenda"
        ],
        "subtext": "",
        "antonyms": [],
        "lang": "pt",
        "sub_theme": "going_out",
        "id": "pt_starter_social_263"
    },
    {
        "word": "bolsa",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "👜",
        "definitions": [
            {
                "text": "Termo para bag.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_013"
    },
    {
        "word": "porta",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🚪",
        "definitions": [
            {
                "text": "Abertura numa parede para entrar ou sair.",
                "examples": []
            }
        ],
        "transcription": "ˈpɔɾ.tɐ",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_014"
    },
    {
        "word": "janela",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🪟",
        "definitions": [
            {
                "text": "Abertura numa parede para dar luz e ventilação.",
                "examples": []
            }
        ],
        "transcription": "ʒɐ.ˈnɛ.lɐ",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_015"
    },
    {
        "word": "prato",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🍽️",
        "definitions": [
            {
                "text": "Recipiente baixo e circular para servir comida.",
                "examples": []
            }
        ],
        "transcription": "ˈpɾa.tu",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_016"
    },
    {
        "word": "chávena",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "☕",
        "definitions": [
            {
                "text": "Termo para cup.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_017"
    },
    {
        "word": "copo",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🍷",
        "definitions": [
            {
                "text": "Termo para glass.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_018"
    },
    {
        "word": "garfo",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🍴",
        "definitions": [
            {
                "text": "Termo para fork.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_019"
    },
    {
        "word": "colher",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🥄",
        "definitions": [
            {
                "text": "Termo para spoon.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_020"
    },
    {
        "word": "faca",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🔪",
        "definitions": [
            {
                "text": "Termo para knife.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_021"
    },
    {
        "word": "secretária",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🖥️",
        "definitions": [
            {
                "text": "Termo para desk.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_022"
    },
    {
        "word": "lâmpada",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "💡",
        "definitions": [
            {
                "text": "Termo para lamp.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_023"
    },
    {
        "word": "relógio",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "⏰",
        "definitions": [
            {
                "text": "Termo para clock.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_024"
    },
    {
        "word": "espelho",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🪞",
        "definitions": [
            {
                "text": "Termo para mirror.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_025"
    },
    {
        "word": "garrafa",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🍾",
        "definitions": [
            {
                "text": "Termo para bottle.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_026"
    },
    {
        "word": "caixa",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "📦",
        "definitions": [
            {
                "text": "Termo para box.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_027"
    },
    {
        "word": "lápis",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "✏️",
        "definitions": [
            {
                "text": "Termo para pencil.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_028"
    },
    {
        "word": "papel",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "📄",
        "definitions": [
            {
                "text": "Termo para paper.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_029"
    },
    {
        "word": "frigorífico",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧊",
        "definitions": [
            {
                "text": "Termo para fridge.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_030"
    },
    {
        "word": "forno",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🥯",
        "definitions": [
            {
                "text": "Termo para oven.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_031"
    },
    {
        "word": "sabão",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧼",
        "definitions": [
            {
                "text": "Termo para soap.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_032"
    },
    {
        "word": "toalha",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧖",
        "definitions": [
            {
                "text": "Termo para towel.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_033"
    },
    {
        "word": "sofá",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🛋️",
        "definitions": [
            {
                "text": "Termo para sofa.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_034"
    },
    {
        "word": "estante",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🪜",
        "definitions": [
            {
                "text": "Termo para shelf.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_035"
    },
    {
        "word": "escova de dentes",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🪥",
        "definitions": [
            {
                "text": "Termo para toothbrush.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_036"
    },
    {
        "word": "pasta de dentes",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🦷",
        "definitions": [
            {
                "text": "Termo para toothpaste.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_037"
    },
    {
        "word": "champô",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧴",
        "definitions": [
            {
                "text": "Termo para shampoo.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_038"
    },
    {
        "word": "pente",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🪮",
        "definitions": [
            {
                "text": "Termo para comb.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_039"
    },
    {
        "word": "armário",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "👗",
        "definitions": [
            {
                "text": "Termo para wardrobe.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_040"
    },
    {
        "word": "parede",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧱",
        "definitions": [
            {
                "text": "Termo para wall.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_041"
    },
    {
        "word": "chão",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🪵",
        "definitions": [
            {
                "text": "Termo para floor.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_042"
    },
    {
        "word": "telhado",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🏠",
        "definitions": [
            {
                "text": "Termo para roof.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_043"
    },
    {
        "word": "jardim",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🏡",
        "definitions": [
            {
                "text": "Termo para garden.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_044"
    },
    {
        "word": "por favor",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🙏",
        "definitions": [
            {
                "text": "Termo para please.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_264"
    },
    {
        "word": "obrigado",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🙏",
        "definitions": [
            {
                "text": "Termo para thanks.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_265"
    },
    {
        "word": "olá",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "👋",
        "definitions": [
            {
                "text": "Termo para hello.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_266"
    },
    {
        "word": "adeus",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "👋",
        "definitions": [
            {
                "text": "Termo para goodbye.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_267"
    },
    {
        "word": "com licença",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🙇",
        "definitions": [
            {
                "text": "Termo para excuse me.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_268"
    },
    {
        "word": "bem-vindo",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🤝",
        "definitions": [
            {
                "text": "Termo para welcome.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_269"
    },
    {
        "word": "o quê",
        "level": "starter",
        "theme": "language",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Termo para what.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_023"
    },
    {
        "word": "porquê",
        "level": "starter",
        "theme": "language",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🤷",
        "definitions": [
            {
                "text": "Termo para why.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_024"
    },
    {
        "word": "como",
        "level": "starter",
        "theme": "language",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🤔",
        "definitions": [
            {
                "text": "Termo para how.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_025"
    },
    {
        "word": "quantos",
        "level": "starter",
        "theme": "language",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🔢",
        "definitions": [
            {
                "text": "Termo para how many.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_026"
    },
    {
        "word": "país",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🗺️",
        "definitions": [
            {
                "text": "Termo para country.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "geography",
        "id": "pt_starter_places_014"
    },
    {
        "word": "montanha",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "⛰️",
        "definitions": [
            {
                "text": "Termo para mountain.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "geography",
        "id": "pt_starter_places_015"
    },
    {
        "word": "mar",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🌊",
        "definitions": [
            {
                "text": "Termo para sea.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "geography",
        "id": "pt_starter_places_016"
    },
    {
        "word": "rio",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🏞️",
        "definitions": [
            {
                "text": "Termo para river.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "geography",
        "id": "pt_starter_places_017"
    },
    {
        "word": "praia",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🏖️",
        "definitions": [
            {
                "text": "Termo para beach.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "geography",
        "id": "pt_starter_places_018"
    },
    {
        "word": "floresta",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🌲",
        "definitions": [
            {
                "text": "Termo para forest.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "geography",
        "id": "pt_starter_places_019"
    },
    {
        "word": "rua",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🛣️",
        "definitions": [
            {
                "text": "Termo para street.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "geography",
        "id": "pt_starter_places_020"
    },
    {
        "word": "parque",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🌳",
        "definitions": [
            {
                "text": "Termo para park.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "geography",
        "id": "pt_starter_places_021"
    },
    {
        "word": "ponte",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🌉",
        "definitions": [
            {
                "text": "Termo para bridge.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "geography",
        "id": "pt_starter_places_022"
    },
    {
        "word": "preço",
        "level": "starter",
        "theme": "shopping",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🏷️",
        "definitions": [
            {
                "text": "Termo para price.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_015"
    },
    {
        "word": "recibo",
        "level": "starter",
        "theme": "shopping",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧾",
        "definitions": [
            {
                "text": "Termo para receipt.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_016"
    },
    {
        "word": "mercado",
        "level": "starter",
        "theme": "shopping",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧺",
        "definitions": [
            {
                "text": "Termo para market.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_017"
    },
    {
        "word": "cartão",
        "level": "starter",
        "theme": "shopping",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "💳",
        "definitions": [
            {
                "text": "Termo para card.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_018"
    }
];

const lang = "pt";
window.vocabularyData = window.vocabularyData || {};
window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
