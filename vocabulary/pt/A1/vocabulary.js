(function() {
    const data = [
    {
        "word": "jardim",
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
        "id": "pt_starter_vocabulary_001",
        "lang": "pt",
        "transcription": ""
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
        "id": "pt_starter_vocabulary_002",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "pes"
        },
        "id": "pt_starter_vocabulary_003",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_004",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_005",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_006",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_007",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "panis"
        },
        "id": "pt_starter_vocabulary_008",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_009",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "lac"
        },
        "id": "pt_starter_vocabulary_010",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_011",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_012",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_013",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "aqua"
        },
        "id": "pt_starter_vocabulary_014",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "schola"
        },
        "id": "pt_starter_vocabulary_015",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_016",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_017",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_018",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_019",
        "lang": "pt"
    },
    {
        "word": "cadeira",
        "level": "starter",
        "theme": "furniture_objects",
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "cathedra"
        },
        "id": "pt_starter_vocabulary_020",
        "lang": "pt"
    },
    {
        "word": "mesa",
        "level": "starter",
        "theme": "furniture_objects",
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mensa"
        },
        "id": "pt_starter_vocabulary_021",
        "lang": "pt"
    },
    {
        "word": "cama",
        "level": "starter",
        "theme": "furniture_objects",
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
        "etymology": {
            "origin_lang": "Vulgar Latin",
            "origin_word": "cama"
        },
        "id": "pt_starter_vocabulary_022",
        "lang": "pt"
    },
    {
        "word": "chave",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_023",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_024",
        "lang": "pt"
    },
    {
        "word": "livro",
        "level": "starter",
        "theme": "furniture_objects",
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "liber"
        },
        "id": "pt_starter_vocabulary_025",
        "lang": "pt"
    },
    {
        "word": "mala",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_026",
        "lang": "pt"
    },
    {
        "word": "caneta",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_027",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "cattus"
        },
        "id": "pt_starter_vocabulary_028",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "canis"
        },
        "id": "pt_starter_vocabulary_029",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "manus"
        },
        "id": "pt_starter_vocabulary_030",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_031",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "oculus"
        },
        "id": "pt_starter_vocabulary_032",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "nasus"
        },
        "id": "pt_starter_vocabulary_033",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "bucca"
        },
        "id": "pt_starter_vocabulary_034",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "auricula"
        },
        "id": "pt_starter_vocabulary_035",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mater"
        },
        "id": "pt_starter_vocabulary_036",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "pater"
        },
        "id": "pt_starter_vocabulary_037",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_038",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "casa",
            "etymology": {
                "origin_lang": "Latin",
                "origin_word": "casa",
                "etymology": {
                    "origin_lang": "Latin",
                    "origin_word": "casa"
                }
            }
        },
        "id": "pt_starter_vocabulary_039",
        "lang": "pt"
    },
    {
        "word": "carro",
        "level": "starter",
        "theme": "travel",
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
        "id": "pt_starter_vocabulary_040",
        "lang": "pt"
    },
    {
        "word": "autocarro",
        "level": "starter",
        "theme": "travel",
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
        "id": "pt_starter_vocabulary_041",
        "lang": "pt"
    },
    {
        "word": "comboio",
        "level": "starter",
        "theme": "travel",
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
        "id": "pt_starter_vocabulary_042",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "denarius"
        },
        "id": "pt_starter_vocabulary_043",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_044",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_045",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_046",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "dies"
        },
        "id": "pt_starter_vocabulary_047",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_048",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_049",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_050",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_051",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_052",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_053",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_054",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "nox"
        },
        "id": "pt_starter_vocabulary_055",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_056",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_057",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_058",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mulier"
        },
        "id": "pt_starter_vocabulary_059",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_060",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "sol",
            "etymology": {
                "origin_lang": "Latin",
                "origin_word": "sol",
                "etymology": {
                    "origin_lang": "Latin",
                    "origin_word": "sol"
                }
            }
        },
        "id": "pt_starter_vocabulary_061",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "pluvia"
        },
        "id": "pt_starter_vocabulary_062",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_063",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_064",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_065",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_066",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_067",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "civitas"
        },
        "id": "pt_starter_vocabulary_068",
        "lang": "pt"
    },
    {
        "word": "mapa",
        "level": "starter",
        "theme": "classroom_language",
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
        "id": "pt_starter_vocabulary_069",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_070",
        "lang": "pt"
    },
    {
        "word": "bolsa",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_071",
        "lang": "pt"
    },
    {
        "word": "porta",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_072",
        "lang": "pt"
    },
    {
        "word": "janela",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_073",
        "lang": "pt"
    },
    {
        "word": "prato",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_074",
        "lang": "pt"
    },
    {
        "word": "chávena",
        "level": "starter",
        "theme": "furniture_objects",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "☕",
        "definitions": [
            {
                "text": "Termo para chávena.",
                "examples": []
            }
        ],
        "transcription": "",
        "id": "pt_starter_vocabulary_075",
        "lang": "pt"
    },
    {
        "word": "copo",
        "level": "starter",
        "theme": "furniture_objects",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🍷",
        "definitions": [
            {
                "text": "Termo para copo.",
                "examples": []
            }
        ],
        "transcription": "",
        "id": "pt_starter_vocabulary_076",
        "lang": "pt"
    },
    {
        "word": "garfo",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_077",
        "lang": "pt"
    },
    {
        "word": "colher",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_078",
        "lang": "pt"
    },
    {
        "word": "faca",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_079",
        "lang": "pt"
    },
    {
        "word": "secretária",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_080",
        "lang": "pt"
    },
    {
        "word": "lâmpada",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_081",
        "lang": "pt"
    },
    {
        "word": "relógio",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_082",
        "lang": "pt"
    },
    {
        "word": "espelho",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_083",
        "lang": "pt"
    },
    {
        "word": "garrafa",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_084",
        "lang": "pt"
    },
    {
        "word": "caixa",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_085",
        "lang": "pt"
    },
    {
        "word": "lápis",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_086",
        "lang": "pt"
    },
    {
        "word": "papel",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_087",
        "lang": "pt"
    },
    {
        "word": "frigorífico",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_088",
        "lang": "pt"
    },
    {
        "word": "forno",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_089",
        "lang": "pt"
    },
    {
        "word": "sabão",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_090",
        "lang": "pt"
    },
    {
        "word": "toalha",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_091",
        "lang": "pt"
    },
    {
        "word": "sofá",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_092",
        "lang": "pt"
    },
    {
        "word": "estante",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_093",
        "lang": "pt"
    },
    {
        "word": "escova de dentes",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_094",
        "lang": "pt"
    },
    {
        "word": "pasta de dentes",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_095",
        "lang": "pt"
    },
    {
        "word": "champô",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_096",
        "lang": "pt"
    },
    {
        "word": "pente",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_097",
        "lang": "pt"
    },
    {
        "word": "armário",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_098",
        "lang": "pt"
    },
    {
        "word": "parede",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_099",
        "lang": "pt"
    },
    {
        "word": "chão",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_100",
        "lang": "pt"
    },
    {
        "word": "telhado",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_101",
        "lang": "pt"
    },
    {
        "word": "jardim",
        "level": "starter",
        "theme": "furniture_objects",
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
        "id": "pt_starter_vocabulary_102",
        "lang": "pt"
    },
    {
        "word": "por favor",
        "level": "starter",
        "theme": "greetings_social_phrases",
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
        "id": "pt_starter_vocabulary_103",
        "lang": "pt"
    },
    {
        "word": "obrigado",
        "level": "starter",
        "theme": "greetings_social_phrases",
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
        "id": "pt_starter_vocabulary_104",
        "lang": "pt"
    },
    {
        "word": "olá",
        "level": "starter",
        "theme": "greetings_social_phrases",
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
        "id": "pt_starter_vocabulary_105",
        "lang": "pt"
    },
    {
        "word": "adeus",
        "level": "starter",
        "theme": "greetings_social_phrases",
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
        "id": "pt_starter_vocabulary_106",
        "lang": "pt"
    },
    {
        "word": "com licença",
        "level": "starter",
        "theme": "greetings_social_phrases",
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
        "id": "pt_starter_vocabulary_107",
        "lang": "pt"
    },
    {
        "word": "bem-vindo",
        "level": "starter",
        "theme": "greetings_social_phrases",
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
        "id": "pt_starter_vocabulary_108",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_109",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_110",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_111",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_112",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_113",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_114",
        "lang": "pt"
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mare"
        },
        "id": "pt_starter_vocabulary_115",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_116",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_117",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_118",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_119",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_120",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_121",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_122",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_123",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_124",
        "lang": "pt"
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
        "id": "pt_starter_vocabulary_125",
        "lang": "pt"
    }
];
    const lang = "pt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();