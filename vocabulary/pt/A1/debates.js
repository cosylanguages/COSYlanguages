(function() {
    const data = [
    {
        "topic": "Café vs chá — qual bebida da manhã é melhor?",
        "sideA": "Café",
        "sideB": "Chá",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Energia",
            "Cheira bem"
        ],
        "ideasB": [
            "Saudável",
            "Relaxamento"
        ],
        "word": "Café vs chá — qual bebida da manhã é melhor?",
        "lang": "pt",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Café vs chá — qual bebida da manhã é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_food_drink_001"
    },
    {
        "topic": "Restaurante vs cozinhar em casa — o que é melhor?",
        "sideA": "Restaurante",
        "sideB": "Cozinha em casa",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Sem louça para lavar",
            "Chefs profissionais"
        ],
        "ideasB": [
            "É mais barato",
            "É mais saudável"
        ],
        "word": "Restaurante vs cozinhar em casa — o que é melhor?",
        "lang": "pt",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Restaurante vs cozinhar em casa — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_food_drink_002"
    },
    {
        "topic": "Verão vs inverno — qual estação é melhor?",
        "sideA": "Verão",
        "sideB": "Inverno",
        "level": "starter",
        "theme": "nature",
        "ideasA": [
            "Sol",
            "Praia"
        ],
        "ideasB": [
            "Neve",
            "Esqui"
        ],
        "word": "Verão vs inverno — qual estação é melhor?",
        "lang": "pt",
        "sub_theme": "seasons",
        "form": "phrase",
        "definitions": [
            {
                "text": "Verão vs inverno — qual estação é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_nature_001"
    },
    {
        "topic": "Livro vs filme — o que é melhor?",
        "sideA": "Livro",
        "sideB": "Filme",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Use sua imaginação",
            "Aprenda muitas coisas"
        ],
        "ideasB": [
            "É rápido",
            "Ver com amigos"
        ],
        "word": "Livro vs filme — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Livro vs filme — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_social_001"
    },
    {
        "topic": "Bicicleta vs carro — o que é melhor para a cidade?",
        "sideA": "Bicicleta",
        "sideB": "Carro",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Bom para o corpo",
            "É grátis"
        ],
        "ideasB": [
            "É muito rápido",
            "Quente quando chove"
        ],
        "word": "Bicicleta vs carro — o que é melhor para a cidade?",
        "lang": "pt",
        "sub_theme": "transport",
        "form": "phrase",
        "definitions": [
            {
                "text": "Bicicleta vs carro — o que é melhor para a cidade?",
                "examples": []
            }
        ],
        "id": "pt_starter_travel_001"
    },
    {
        "topic": "Pizza vs hambúrguer — o que é melhor?",
        "sideA": "Pizza",
        "sideB": "Hambúrguer",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Pode partilhar",
            "Muito queijo"
        ],
        "ideasB": [
            "Fácil de comer",
            "Bom com batatas fritas"
        ],
        "word": "Pizza vs hambúrguer — o que é melhor?",
        "lang": "pt",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Pizza vs hambúrguer — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_food_drink_003"
    },
    {
        "topic": "Cidade vs campo — qual é o melhor lugar para morar?",
        "sideA": "Cidade",
        "sideB": "Campo",
        "level": "starter",
        "theme": "furniture",
        "ideasA": [
            "Muitas lojas",
            "Sair à noite"
        ],
        "ideasB": [
            "É muito calmo",
            "Ar puro"
        ],
        "word": "Cidade vs campo — qual é o melhor lugar para morar?",
        "lang": "pt",
        "sub_theme": "rooms",
        "form": "phrase",
        "definitions": [
            {
                "text": "Cidade vs campo — qual é o melhor lugar para morar?",
                "examples": []
            }
        ],
        "id": "pt_starter_furniture_001"
    },
    {
        "topic": "Manhã vs tarde — qual parte do dia é mais agradável?",
        "sideA": "Manhã",
        "sideB": "Tarde",
        "level": "starter",
        "theme": "time",
        "ideasA": [
            "Muita energia",
            "O sol nasce"
        ],
        "ideasB": [
            "Pode descansar",
            "Ver filmes"
        ],
        "word": "Manhã vs tarde — qual parte do dia é mais agradável?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Manhã vs tarde — qual parte do dia é mais agradável?",
                "examples": []
            }
        ],
        "id": "pt_starter_time_001"
    },
    {
        "topic": "Comboio vs avião — o que é melhor para viajar?",
        "sideA": "Comboio",
        "sideB": "Avião",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Ver a paisagem",
            "Melhor para a natureza"
        ],
        "ideasB": [
            "É muito rápido",
            "Ir muito longe"
        ],
        "word": "Comboio vs avião — o que é melhor para viajar?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Comboio vs avião — o que é melhor para viajar?",
                "examples": []
            }
        ],
        "id": "pt_starter_travel_002"
    },
    {
        "topic": "Mar vs montanhas — o que é melhor para as férias?",
        "sideA": "Mar",
        "sideB": "Montanhas",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Nadar",
            "Sol"
        ],
        "ideasB": [
            "Caminhar",
            "Bonito"
        ],
        "word": "Mar vs montanhas — o que é melhor para as férias?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Mar vs montanhas — o que é melhor para as férias?",
                "examples": []
            }
        ],
        "id": "pt_starter_travel_003"
    },
    {
        "topic": "Trabalhar sozinho vs com parceiro — o que é melhor?",
        "sideA": "Sozinho",
        "sideB": "Parceiro",
        "level": "starter",
        "theme": "work",
        "ideasA": [
            "Focar melhor",
            "Ir mais rápido"
        ],
        "ideasB": [
            "Mais ideias",
            "Mais divertido"
        ],
        "word": "Trabalhar sozinho vs com parceiro — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Trabalhar sozinho vs com parceiro — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_work_001"
    },
    {
        "topic": "Chamada vs mensagem de texto — o que é melhor?",
        "sideA": "Chamada",
        "sideB": "Mensagem",
        "level": "starter",
        "theme": "technology",
        "ideasA": [
            "Mais direto",
            "Ouvir a voz"
        ],
        "ideasB": [
            "É mais rápido",
            "Responder mais tarde"
        ],
        "word": "Chamada vs mensagem de texto — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Chamada vs mensagem de texto — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_technology_001"
    },
    {
        "topic": "Roupa confortável vs roupa elegante — o que é melhor?",
        "sideA": "Confortável",
        "sideB": "Elegante",
        "level": "starter",
        "theme": "clothes",
        "ideasA": [
            "Sentir-se bem",
            "Prática"
        ],
        "ideasB": [
            "Muito bonita",
            "Boa para o trabalho"
        ],
        "word": "Roupa confortável vs roupa elegante — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Roupa confortável vs roupa elegante — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_clothes_001"
    },
    {
        "topic": "Açúcar vs sal — o que é mais importante?",
        "sideA": "Açúcar",
        "sideB": "Sal",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Para sobremesas",
            "Toda a gente ama chocolate"
        ],
        "ideasB": [
            "Para refeições principais",
            "Dá sabor"
        ],
        "word": "Açúcar vs sal — o que é mais importante?",
        "lang": "pt",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Açúcar vs sal — o que é mais importante?",
                "examples": []
            }
        ],
        "id": "pt_starter_food_drink_004"
    },
    {
        "topic": "Festas grandes vs jantares pequenos — o que é melhor?",
        "sideA": "Grandes festas",
        "sideB": "Jantares pequenos",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Conhecer pessoas novas",
            "Música alta"
        ],
        "ideasB": [
            "Falar com calma",
            "É relaxante"
        ],
        "word": "Festas grandes vs jantares pequenos — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Festas grandes vs jantares pequenos — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_social_002"
    },
    {
        "topic": "Casa vs apartamento — o que é melhor para morar?",
        "sideA": "Casa",
        "sideB": "Apartamento",
        "level": "starter",
        "theme": "furniture",
        "ideasA": [
            "Jardim",
            "Espaço"
        ],
        "ideasB": [
            "Barato",
            "Fácil de limpar"
        ],
        "word": "Casa vs apartamento — o que é melhor para morar?",
        "lang": "pt",
        "sub_theme": "rooms",
        "form": "phrase",
        "definitions": [
            {
                "text": "Casa vs apartamento — o que é melhor para morar?",
                "examples": []
            }
        ],
        "id": "pt_starter_furniture_002"
    },
    {
        "topic": "Dinheiro vs tempo livre — o que é mais importante?",
        "sideA": "Dinheiro",
        "sideB": "Tempo livre",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Pode comprar coisas",
            "É segurança"
        ],
        "ideasB": [
            "Aproveitar a vida",
            "Menos stress"
        ],
        "word": "Dinheiro vs tempo livre — o que é mais importante?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Dinheiro vs tempo livre — o que é mais importante?",
                "examples": []
            }
        ],
        "id": "pt_starter_social_003"
    },
    {
        "topic": "Chocolate amargo vs chocolate ao leite — o que é melhor?",
        "sideA": "Amargo",
        "sideB": "Ao leite",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Bom para o coração",
            "Menos açúcar"
        ],
        "ideasB": [
            "Muito doce",
            "Bom com café"
        ],
        "word": "Chocolate amargo vs chocolate ao leite — o que é melhor?",
        "lang": "pt",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Chocolate amargo vs chocolate ao leite — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_food_drink_005"
    },
    {
        "topic": "Cinema vs Netflix em casa — o que é melhor?",
        "sideA": "Cine",
        "sideB": "Netflix",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Ecrã grande",
            "O som é ótimo"
        ],
        "ideasB": [
            "Está confortável",
            "Pode parar o filme"
        ],
        "word": "Cinema vs Netflix em casa — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Cinema vs Netflix em casa — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_social_004"
    },
    {
        "topic": "Viajar sozinho vs viajar com amigos — o que é melhor?",
        "sideA": "Sozinho",
        "sideB": "Amigos",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Escolhe tudo",
            "Conhecer mais pessoas"
        ],
        "ideasB": [
            "Partilhar memórias",
            "É mais barato"
        ],
        "word": "Viajar sozinho vs viajar com amigos — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Viajar sozinho vs viajar com amigos — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_travel_004"
    },
    {
        "topic": "Podcasts vs música — o que é melhor no carro?",
        "sideA": "Podcasts",
        "sideB": "Música",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Aprender coisas",
            "Histórias interessantes"
        ],
        "ideasB": [
            "Pode cantar",
            "Dá energia"
        ],
        "word": "Podcasts vs música — o que é melhor no carro?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Podcasts vs música — o que é melhor no carro?",
                "examples": []
            }
        ],
        "id": "pt_starter_social_005"
    },
    {
        "topic": "Chuva vs vento — o que é pior?",
        "sideA": "Chuva",
        "sideB": "Vento",
        "level": "starter",
        "theme": "nature",
        "ideasA": [
            "Tudo fica molhado",
            "Humor triste"
        ],
        "ideasB": [
            "Faz frio",
            "Mau para o cabelo"
        ],
        "word": "Chuva vs vento — o que é pior?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Chuva vs vento — o que é pior?",
                "examples": []
            }
        ],
        "id": "pt_starter_nature_002"
    },
    {
        "topic": "Presente surpresa vs escolher o seu presente — o que é melhor?",
        "sideA": "Surpresa",
        "sideB": "Escolher",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Emoção forte",
            "É gentil"
        ],
        "ideasB": [
            "Ter o que quer",
            "Sem más surpresas"
        ],
        "word": "Presente surpresa vs escolher o seu presente — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Presente surpresa vs escolher o seu presente — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_social_006"
    },
    {
        "topic": "Escrever no papel vs escrever no tablet — o que é melhor?",
        "sideA": "Papel",
        "sideB": "Tablet",
        "level": "starter",
        "theme": "technology",
        "ideasA": [
            "Sem bateria",
            "Boa sensação"
        ],
        "ideasB": [
            "Rápido",
            "Poupar papel"
        ],
        "word": "Escrever no papel vs escrever no tablet — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Escrever no papel vs escrever no tablet — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_technology_002"
    },
    {
        "topic": "Sanduíche vs salada — o que é melhor para o almoço?",
        "sideA": "Sanduíche",
        "sideB": "Salada",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Fácil de levar",
            "Estômago cheio"
        ],
        "ideasB": [
            "Comida leve",
            "Muitas vitaminas"
        ],
        "word": "Sanduíche vs salada — o que é melhor para o almoço?",
        "lang": "pt",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Sanduíche vs salada — o que é melhor para o almoço?",
                "examples": []
            }
        ],
        "id": "pt_starter_food_drink_006"
    },
    {
        "topic": "Hotel vs campismo — o que é melhor para as férias?",
        "sideA": "Hotel",
        "sideB": "Campismo",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Confortável",
            "Tem pequeno-almoço"
        ],
        "ideasB": [
            "Na natureza",
            "É uma aventura"
        ],
        "word": "Hotel vs campismo — o que é melhor para as férias?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Hotel vs campismo — o que é melhor para as férias?",
                "examples": []
            }
        ],
        "id": "pt_starter_travel_005"
    },
    {
        "topic": "Falar vs ouvir — o que é mais importante?",
        "sideA": "Falar",
        "sideB": "Ouvir",
        "level": "starter",
        "theme": "work",
        "ideasA": [
            "Partilhar ideias",
            "Importante para o líder"
        ],
        "ideasB": [
            "Aprender com os outros",
            "É gentil"
        ],
        "word": "Falar vs ouvir — o que é mais importante?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Falar vs ouvir — o que é mais importante?",
                "examples": []
            }
        ],
        "id": "pt_starter_work_002"
    },
    {
        "topic": "Primavera vs outono — o que é melhor?",
        "sideA": "Primavera",
        "sideB": "Outono",
        "level": "starter",
        "theme": "nature",
        "ideasA": [
            "Flores crescem",
            "Tempo mais quente"
        ],
        "ideasB": [
            "Folhas bonitas",
            "Agradável para caminhar"
        ],
        "word": "Primavera vs outono — o que é melhor?",
        "lang": "pt",
        "sub_theme": "seasons",
        "form": "phrase",
        "definitions": [
            {
                "text": "Primavera vs outono — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_nature_003"
    },
    {
        "topic": "Fruta vs legumes — o que é melhor?",
        "sideA": "Fruta",
        "sideB": "Legumes",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "São doces",
            "Ótimo para lanches"
        ],
        "ideasB": [
            "Muito saudável",
            "Bom para cozinhar"
        ],
        "word": "Fruta vs legumes — o que é melhor?",
        "lang": "pt",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Fruta vs legumes — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_food_drink_007"
    },
    {
        "topic": "Filmes de ação vs comédias — o que é melhor?",
        "sideA": "Ação",
        "sideB": "Comédia",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Emocionante e rápido",
            "Efeitos fixes"
        ],
        "ideasB": [
            "Fazem rir",
            "Bom para relaxar"
        ],
        "word": "Filmes de ação vs comédias — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Filmes de ação vs comédias — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_social_007"
    },
    {
        "topic": "Lavar louça vs aspirar — o que é melhor?",
        "sideA": "Louça",
        "sideB": "Aspirar",
        "level": "starter",
        "theme": "furniture",
        "ideasA": [
            "Água quente é bom",
            "Trabalho calmo"
        ],
        "ideasB": [
            "É rápido",
            "Ver resultado imediato"
        ],
        "word": "Lavar louça vs aspirar — o que é melhor?",
        "lang": "pt",
        "sub_theme": "rooms",
        "form": "phrase",
        "definitions": [
            {
                "text": "Lavar louça vs aspirar — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_furniture_003"
    },
    {
        "topic": "Música pop vs música rock — o que é melhor?",
        "sideA": "Pop",
        "sideB": "Rock",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Músicas orelhudas",
            "Bom para dançar"
        ],
        "ideasB": [
            "Instrumentos fixes",
            "Energia forte"
        ],
        "word": "Música pop vs música rock — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Música pop vs música rock — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_social_008"
    },
    {
        "topic": "Madrugador vs noctívago — o que é melhor?",
        "sideA": "Madrugador",
        "sideB": "Noctívago",
        "level": "starter",
        "theme": "time",
        "ideasA": [
            "Manhã calma",
            "Dia produtivo"
        ],
        "ideasB": [
            "Criativo à noite",
            "Dormir até tarde"
        ],
        "word": "Madrugador vs noctívago — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Madrugador vs noctívago — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_time_002"
    },
    {
        "topic": "Caminhar vs correr — o que é melhor?",
        "sideA": "Caminhar",
        "sideB": "Correr",
        "level": "starter",
        "theme": "health_medicine",
        "ideasA": [
            "Relaxante",
            "Pode ver a natureza"
        ],
        "ideasB": [
            "Bom para o coração",
            "Muito rápido"
        ],
        "word": "Caminhar vs correr — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Caminhar vs correr — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_health_medicine_001"
    },
    {
        "topic": "Portátil vs computador de secretária — o que é melhor?",
        "sideA": "Portátil",
        "sideB": "Secretária",
        "level": "starter",
        "theme": "technology",
        "ideasA": [
            "Pode mover",
            "Trabalhar em qualquer lugar"
        ],
        "ideasB": [
            "Ecrã maior",
            "Mais potente"
        ],
        "word": "Portátil vs computador de secretária — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Portátil vs computador de secretária — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_technology_003"
    },
    {
        "topic": "Transporte público vs táxi — o que é melhor?",
        "sideA": "Autocarro/Comboio",
        "sideB": "Táxi",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Mais barato",
            "Melhor para a natureza"
        ],
        "ideasB": [
            "Direto a casa",
            "Mais confortável"
        ],
        "word": "Transporte público vs táxi — o que é melhor?",
        "lang": "pt",
        "sub_theme": "transport",
        "form": "phrase",
        "definitions": [
            {
                "text": "Transporte público vs táxi — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_travel_006"
    },
    {
        "topic": "Gelado vs bolo — qual é a melhor sobremesa?",
        "sideA": "Gelado",
        "sideB": "Bolo",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Frio",
            "Fresco"
        ],
        "ideasB": [
            "Quente",
            "Aniversário"
        ],
        "word": "Gelado vs bolo — qual é a melhor sobremesa?",
        "lang": "pt",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Gelado vs bolo — qual é a melhor sobremesa?",
                "examples": []
            }
        ],
        "id": "pt_starter_food_drink_008"
    },
    {
        "topic": "E-mail vs carta — o que é melhor?",
        "sideA": "E-mail",
        "sideB": "Carta",
        "level": "starter",
        "theme": "technology",
        "ideasA": [
            "Muito rápido",
            "Grátis"
        ],
        "ideasB": [
            "Mais pessoal",
            "Bonito de guardar"
        ],
        "word": "E-mail vs carta — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "E-mail vs carta — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_technology_004"
    },
    {
        "topic": "Praia vs parque — o que é melhor?",
        "sideA": "Praia",
        "sideB": "Parque",
        "level": "starter",
        "theme": "nature",
        "ideasA": [
            "Pode nadar",
            "Areia é divertido"
        ],
        "ideasB": [
            "Árvores e sombra",
            "Bom para piqueniques"
        ],
        "word": "Praia vs parque — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Praia vs parque — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_nature_004"
    },
    {
        "topic": "Cozinhar vs limpar — o que é melhor?",
        "sideA": "Cozinhar",
        "sideB": "Limpar",
        "level": "starter",
        "theme": "furniture",
        "ideasA": [
            "Criativo",
            "Resultado delicioso"
        ],
        "ideasB": [
            "Casa organizada",
            "Tarefa relaxante"
        ],
        "word": "Cozinhar vs limpar — o que é melhor?",
        "lang": "pt",
        "sub_theme": "rooms",
        "form": "phrase",
        "definitions": [
            {
                "text": "Cozinhar vs limpar — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_furniture_004"
    },
    {
        "topic": "Férias curtas vs férias longas — o que é melhor?",
        "sideA": "Curtas",
        "sideB": "Longas",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Planeamento fácil",
            "Muitas viagens"
        ],
        "ideasB": [
            "Relaxar mais",
            "Ver mais"
        ],
        "word": "Férias curtas vs férias longas — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Férias curtas vs férias longas — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_travel_007"
    },
    {
        "topic": "Ficção vs não ficção — o que é melhor?",
        "sideA": "Ficção",
        "sideB": "Não ficção",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Histórias emocionantes",
            "Escapismo"
        ],
        "ideasB": [
            "Aprender factos",
            "Informação real"
        ],
        "word": "Ficção vs não ficção — o que é melhor?",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Ficção vs não ficção — o que é melhor?",
                "examples": []
            }
        ],
        "id": "pt_starter_social_009"
    }
];
    const lang = "pt";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();