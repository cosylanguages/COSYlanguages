(function() {
    const data = [
    {
        "word": "médico",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "definitions": [
            {
                "text": "Pessoa que ajuda os doentes.",
                "examples": ["O médico trabalha no hospital."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "pé",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦶",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte do corpo na base da perna.",
                "examples": ["O meu pé dói."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "professor",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "definitions": [
            {
                "text": "Pessoa que ajuda a aprender.",
                "examples": ["O professor está na sala de aula."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "pizza",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍕",
        "form": "noun",
        "definitions": [
            {
                "text": "Pão achatado com queijo e tomate.",
                "examples": ["Eu gosto de pizza com queijo."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "massa",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍝",
        "form": "noun",
        "definitions": [
            {
                "text": "Alimento feito de farinha e ovos.",
                "examples": ["Comemos massa hoje."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "maçã",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍎",
        "form": "noun",
        "definitions": [
            {
                "text": "Fruta redonda, vermelha ou verde.",
                "examples": ["A maçã é vermelha."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "pão",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍞",
        "form": "noun",
        "definitions": [
            {
                "text": "Alimento comum de farinha e água.",
                "examples": ["Compro pão todas as manhãs."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "ovo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥚",
        "form": "noun",
        "definitions": [
            {
                "text": "Objeto oval posto por uma galinha.",
                "examples": ["Um ovo para o pequeno-almoço."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "leite",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥛",
        "form": "noun",
        "definitions": [
            {
                "text": "Líquido branco das vacas.",
                "examples": ["Bebo leite frio."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "banana",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍌",
        "form": "noun",
        "definitions": [
            {
                "text": "Fruta amarela longa.",
                "examples": ["A banana é amarela."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "café",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "☕",
        "form": "noun",
        "definitions": [
            {
                "text": "Bebida castanha quente.",
                "examples": ["Tomo café sem açúcar."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "chá",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🍵",
        "form": "noun",
        "definitions": [
            {
                "text": "Bebida quente de folhas.",
                "examples": ["Um chá quente, por favor."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "água",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🚰",
        "form": "noun",
        "definitions": [
            {
                "text": "Líquido transparente que bebemos.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "escola",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🏫",
        "form": "noun",
        "definitions": [
            {
                "text": "Lugar onde as crianças aprendem.",
                "examples": ["A escola abre às oito."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "t-shirt",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "form": "noun",
        "definitions": [
            {
                "text": "Camisa casual de manga curta.",
                "examples": ["Uso uma t-shirt azul."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "calças",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👖",
        "form": "noun",
        "definitions": [
            {
                "text": "Roupa para as pernas.",
                "examples": ["Estas calças são novas."]
            }
        ],
        "article": "as",
        "gender": "feminine"
    },
    {
        "word": "sapato",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👞",
        "form": "noun",
        "definitions": [
            {
                "text": "Algo que se usa nos pés.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "chapéu",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👒",
        "form": "noun",
        "definitions": [
            {
                "text": "Algo que se usa na cabeça.",
                "examples": ["Ela usa um chapéu para o sol."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "cadeira",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "noun",
        "definitions": [
            {
                "text": "Móvel para uma pessoa se sentar.",
                "examples": ["Senta-te nesta cadeira."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "mesa",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "noun",
        "definitions": [
            {
                "text": "Móvel com quatro pernas.",
                "examples": ["O livro está em cima da mesa."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "cama",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🛏️",
        "form": "noun",
        "definitions": [
            {
                "text": "Móvel onde se dorme.",
                "examples": ["A cama é muito grande."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "chave",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🔑",
        "form": "noun",
        "definitions": [
            {
                "text": "Objeto de metal para abrir portas.",
                "examples": ["Perdi a minha chave."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "telefone",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📱",
        "form": "noun",
        "definitions": [
            {
                "text": "Dispositivo para falar com pessoas.",
                "examples": ["O meu telefone não funciona."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "livro",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📚",
        "form": "noun",
        "definitions": [
            {
                "text": "Muitas páginas com palavras para ler.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "mala",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "👜",
        "form": "noun",
        "definitions": [
            {
                "text": "Recipiente para carregar coisas.",
                "examples": ["Levo as minhas coisas na mala."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "caneta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🖊️",
        "form": "noun",
        "definitions": [
            {
                "text": "Objeto para escrever com tinta.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "gato",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐈",
        "form": "noun",
        "definitions": [
            {
                "text": "Animal pequeno com pelo.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "cão",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐕",
        "form": "noun",
        "definitions": [
            {
                "text": "O melhor amigo do homem.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "mão",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "✋",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte do braço com dedos.",
                "examples": ["Lava as mãos."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "perna",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦵",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte do corpo para caminhar.",
                "examples": ["Ela tem pernas longas."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "olho",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte do corpo para ver.",
                "examples": ["Ele tem olhos verdes."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "nariz",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👃",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte do rosto para cheirar.",
                "examples": ["Respiramos pelo nariz."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "boca",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👄",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte do rosto para comer.",
                "examples": ["Abre a boca."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "orelha",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte do corpo para ouvir.",
                "examples": ["Ouvimos com as orelhas."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "mãe",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Mulher que é mãe.",
                "examples": ["A mulher lê o jornal."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "pai",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Homem que é pai.",
                "examples": ["Aquele homem é o meu tio."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "trabalho",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "💼",
        "form": "noun",
        "definitions": [
            {
                "text": "Emprego; lugar para ganhar dinheiro.",
                "examples": ["Procuro um emprego novo."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "casa",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🏠",
        "form": "noun",
        "definitions": [
            {
                "text": "O lugar onde se vive.",
                "examples": ["Volto para casa tarde."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "carro",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "form": "noun",
        "definitions": [
            {
                "text": "Veículo de quatro rodas.",
                "examples": ["Conduzo um carro vermelho."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "autocarro",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚌",
        "form": "noun",
        "definitions": [
            {
                "text": "Veículo grande para muitas pessoas.",
                "examples": ["O autocarro chega cedo."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "comboio",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚆",
        "form": "noun",
        "definitions": [
            {
                "text": "Veículo que anda sobre carris.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "dinheiro",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💰",
        "form": "noun",
        "definitions": [
            {
                "text": "Moedas ou notas.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "loja",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛒",
        "form": "noun",
        "definitions": [
            {
                "text": "Lugar para comprar coisas.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "família",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👪",
        "form": "noun",
        "definitions": [
            {
                "text": "Grupo de pessoas aparentadas.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "amigo",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👫",
        "form": "noun",
        "definitions": [
            {
                "text": "Pessoa de quem se gosta.",
                "examples": ["Ele é o meu melhor amigo."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "dia",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "Período de 24 horas.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "semana",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "Período de sete dias.",
                "examples": ["Hoje é um bom dia."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "comida",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍲",
        "form": "noun",
        "definitions": [
            {
                "text": "Coisas que as pessoas comem.",
                "examples": ["El almoço está pronto."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "pequeno-almoço",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍳",
        "form": "noun",
        "definitions": [
            {
                "text": "Primeira refeição do dia.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "almoço",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍱",
        "form": "noun",
        "definitions": [
            {
                "text": "Refeição do meio do dia.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "jantar",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍽️",
        "form": "noun",
        "definitions": [
            {
                "text": "Refeição principal da noite.",
                "examples": ["Jantamos às oito."]
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "manhã",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌅",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte do dia antes do meio-dia.",
                "examples": ["Está frio esta manhã."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "tarde",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌆",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte do dia depois da tarde.",
                "examples": ["Saímos à noite."]
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "noite",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌙",
        "form": "noun",
        "definitions": [
            {
                "text": "Período de escuridão.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "hoje",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "Neste dia.",
                "examples": []
            }
        ],
        "article": "hoje",
        "gender": "adverb"
    },
    {
        "word": "amanhã",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "⏭️",
        "form": "noun",
        "definitions": [
            {
                "text": "No dia depois de hoje.",
                "examples": []
            }
        ],
        "article": "amanhã",
        "gender": "adverb"
    },
    {
        "word": "marido",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Homem casado.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "mulher",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Mulher casada.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "criança",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👶",
        "form": "noun",
        "definitions": [
            {
                "text": "Pessoa jovem.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine"
    },
    {
        "word": "sol",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "Estrela que dá luz e calor.",
                "examples": []
            }
        ],
        "article": "o",
        "gender": "masculine"
    },
    {
        "word": "chuva",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "noun",
        "definitions": [
            {
                "text": "Água que cai das nuvens.",
                "examples": []
            }
        ],
        "article": "a",
        "gender": "feminine"
    }
];
    const lang = "pt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();