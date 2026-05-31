// TODO: verify level classification
(function() {
const data = [
    {
        "word": "ser",
        "level": "starter",
        "theme": "social",
        "emoji": "👤",
        "subtext": "ser feliz",
        "synonyms": [
            "estar cansado",
            "estar no trabalho",
            "estar pronto"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Existir; ter uma qualidade ou estado permanente.",
                "examples": [
                    "Eu sou estudante.",
                    "O carro é vermelho."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "fui",
        "v3": "sido",
        "group": "er",
        "auxiliary": "ter",
        "tenses": {
            "present_simple": {
                "positive": [
                    "sou",
                    "és",
                    "é",
                    "somos",
                    "sois",
                    "são"
                ]
            }
        },
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_166"
    },
    {
        "word": "ter",
        "level": "starter",
        "theme": "work",
        "emoji": "👜",
        "subtext": "ter um emprego / ter um problema / ter tempo",
        "synonyms": [
            "almoçar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Possuir algo; vivenciar algo.",
                "examples": [
                    "Eu tenho um emprego.",
                    "Ele tem um carro."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "tive",
        "v3": "tido",
        "group": "er",
        "auxiliary": "ter",
        "tenses": {
            "present_simple": {
                "positive": [
                    "tenho",
                    "tens",
                    "tem",
                    "temos",
                    "tendes",
                    "têm"
                ]
            }
        },
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_008"
    },
    {
        "word": "sentir",
        "level": "starter",
        "theme": "social",
        "emoji": "🌡️",
        "subtext": "sentir-se cansado / sentir-se melhor / sentir-se doente / sentir-se estressado",
        "form": "verb",
        "definitions": [
            {
                "text": "Experimentar um estado físico ou emocional.",
                "examples": [
                    "Ela se sente exausta depois de uma semana longa."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "senti",
        "v3": "sentido",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_167"
    },
    {
        "word": "dar",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "subtext": "dar conselhos / dar dinheiro / dar um presente / dar informações",
        "opposite": "tomar",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Entregar ou transferir algo a alguém.",
                "examples": [
                    "Ele me dá muito trabalho.",
                    "Ela dá conselhos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "dei",
        "v3": "dado",
        "group": "ar",
        "auxiliary": "ter",
        "tenses": {
            "present_simple": {
                "positive": [
                    "dou",
                    "dás",
                    "dá",
                    "damos",
                    "dais",
                    "dão"
                ]
            }
        },
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_006"
    },
    {
        "word": "tomar",
        "level": "starter",
        "theme": "social",
        "emoji": "👜",
        "subtext": "tomar remédios",
        "synonyms": [
            "apanhar o autocarro",
            "fazer uma pausa",
            "levar tempo"
        ],
        "opposite": "dar",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Segurar e mover algo; usar ou consumir.",
                "examples": [
                    "Eu tomo o autocarro para o trabalho.",
                    "Ela toma remédios."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "tomei",
        "v3": "tomado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_168"
    },
    {
        "word": "obter",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📥",
        "subtext": "",
        "synonyms": [
            "conseguir um emprego",
            "ficar cansado",
            "melhorar",
            "chegar a casa"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Receber, obter ou tornar-se.",
                "examples": [
                    "Eu obtenho um bom salário.",
                    "Ele se cansa rapidamente.",
                    "Ela obtém uma promoção."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "obtive",
        "v3": "obtido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_007"
    },
    {
        "word": "pôr",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📥",
        "subtext": "pôr",
        "synonyms": [
            "arrumar",
            "desligar o telefone",
            "poupar dinheiro"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Colocar algo em uma posição.",
                "examples": [
                    "Põe a tua bolsa aqui.",
                    "Ela põe dinheiro no banco."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "pus",
        "v3": "posto",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "household_items",
        "id": "pt_starter_furniture_004"
    },
    {
        "word": "fazer",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "fazer café",
        "synonyms": [
            "tomar uma decisão",
            "cometer um erro",
            "ganhar dinheiro"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Criar ou produzir algo; causar algo.",
                "examples": [
                    "Eu faço café de manhã.",
                    "Ela faz uma decisão."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fiz",
        "v3": "feito",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_009"
    },
    {
        "word": "usar",
        "level": "starter",
        "theme": "technology",
        "emoji": "🛠️",
        "subtext": "usar um telefone / usar transportes públicos / usar um computador / usar o tempo",
        "form": "verb",
        "definitions": [
            {
                "text": "Empregar algo para um propósito.",
                "examples": [
                    "Eu uso o meu telemóvel para tudo.",
                    "Ela usa transportes públicos."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "usei",
        "v3": "usado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "usando",
        "lang": "pt",
        "sub_theme": "devices",
        "id": "pt_starter_technology_006"
    },
    {
        "word": "abrir",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "subtext": "abrir uma porta / abrir uma conta / abrir uma loja / abrir às nove",
        "opposite": "fechar",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer com que algo não esteja fechado; ou começar.",
                "examples": [
                    "Ele abre o escritório às oito.",
                    "Ela abre uma conta bancária."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "abri",
        "v3": "aberto",
        "group": "ir",
        "auxiliary": "ter",
        "v4": "abriendo",
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_008"
    },
    {
        "word": "fechar",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "subtext": "fechar uma porta / fechar às seis / fechar uma conta / fechar a reunião",
        "opposite": "abrir",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer com que algo não esteja aberto; ou terminar.",
                "examples": [
                    "O escritório fecha às seis.",
                    "Ela fecha o portátil."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fechei",
        "v3": "fechado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "fechando",
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_009"
    },
    {
        "word": "começar",
        "level": "starter",
        "theme": "work",
        "emoji": "▶️",
        "subtext": "começar a trabalhar / começar uma reunião / começar um novo emprego",
        "opposite": "terminar",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Iniciar uma atividade ou período.",
                "examples": [
                    "Começo a trabalhar às oito e meia.",
                    "Ela começa um novo emprego no próximo mês."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "comecei",
        "v3": "começado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "começando",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_010"
    },
    {
        "word": "terminar",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "terminar o trabalho / terminar um projeto / terminar cedo / terminar tarde",
        "opposite": "começar",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Completar algo.",
                "examples": [
                    "Ele termina o trabalho às cinco.",
                    "Ela termina o relatório ao meio-dia."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "terminei",
        "v3": "terminado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "terminando",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_011"
    },
    {
        "word": "ajudar",
        "level": "starter",
        "theme": "social",
        "emoji": "🤝",
        "subtext": "ajudar alguém / ajudar com uma tarefa",
        "synonyms": [
            "dar uma mão",
            "pedir ajuda"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Tornar mais fácil para alguém fazer algo.",
                "examples": [
                    "Ele ajuda os novos colegas a entender os sistemas."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ajudei",
        "v3": "ajudado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "ajudando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_169"
    },
    {
        "word": "tentar",
        "level": "starter",
        "theme": "social",
        "emoji": "🎯",
        "subtext": "tentar fazer / tentar algo novo",
        "synonyms": [
            "esforçar-se",
            "experimentar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Tentar fazer algo; testar algo.",
                "examples": [
                    "Eu tento sempre responder a todas as mensagens numa hora."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tentei",
        "v3": "tentado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "tentando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_170"
    },
    {
        "word": "mostrar",
        "level": "starter",
        "theme": "language",
        "emoji": "📽️",
        "subtext": "mostrar como / mostrar um documento / mostrar interesse",
        "form": "verb",
        "definitions": [
            {
                "text": "Deixar alguém ver ou demonstrar algo.",
                "examples": [
                    "Pode mostrar-me como funciona o sistema?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "mostrei",
        "v3": "mostrado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_013"
    },
    {
        "word": "encontrar",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔍",
        "subtext": "encontrar um emprego / encontrar tempo",
        "synonyms": [
            "descobrir",
            "achar difícil"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Descobrir ou localizar algo.",
                "examples": [
                    "Acho o trabalho interessante.",
                    "Ela encontrou um novo emprego."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "encontrei",
        "v3": "encontrado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_010"
    },
    {
        "word": "manter",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "manter-se calado / manter um registo / manter o contacto",
        "synonyms": [
            "continuar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Continuar a ter ou a fazer algo.",
                "examples": [
                    "Guarda o recibo.",
                    "Ela mantém o telemóvel ligado o dia todo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "mantive",
        "v3": "mantido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_012"
    },
    {
        "word": "perder",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📉",
        "subtext": "perder um emprego / perder dinheiro / perder peso / perder tempo",
        "opposite": "ganhar",
        "oppositeEmoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "Deixar de ter algo; falhar em ganhar.",
                "examples": [
                    "Perdi as minhas chaves.",
                    "Ela perdeu o emprego."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "perdi",
        "v3": "perdido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_011"
    },
    {
        "word": "cortar",
        "level": "starter",
        "theme": "social",
        "emoji": "✂️",
        "subtext": "cortar custos / cortar gastos / cortar ao meio",
        "synonyms": [
            "interromper"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Dividir com algo afiado; reduzir.",
                "examples": [
                    "Ela corta a sua pausa para o almoço.",
                    "Reduz os custos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cortei",
        "v3": "cortado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_171"
    },
    {
        "word": "virar",
        "level": "starter",
        "theme": "social",
        "emoji": "🔄",
        "subtext": "virar à esquerda / virar à direita",
        "synonyms": [
            "ligar",
            "desligar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Mover-se numa direção; mudar de estado.",
                "examples": [
                    "Vire à esquerda no escritório.",
                    "Ela desliga a luz."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "virei",
        "v3": "virado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "virando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_172"
    },
    {
        "word": "trazer",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🎁",
        "subtext": "trazer alguém / trazer comida / trazer um documento",
        "synonyms": [
            "mencionar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Levar algo para um lugar.",
                "examples": [
                    "Traz a tua identificação para a entrevista.",
                    "Ele traz o almoço."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "trouxe",
        "v3": "trazido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_020"
    },
    {
        "word": "dizer",
        "level": "starter",
        "theme": "social",
        "emoji": "🗨️",
        "subtext": "dizer olá / dizer que sim / dizer que não / dizer algo",
        "form": "verb",
        "definitions": [
            {
                "text": "Expressar algo por palavras.",
                "examples": [
                    "Ela diz olá todas as manhãs.",
                    "Ele diz que é difícil."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "disse",
        "v3": "dito",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_173"
    },
    {
        "word": "contar",
        "level": "starter",
        "theme": "language",
        "emoji": "🗣️",
        "subtext": "contar uma história / contar a alguém sobre",
        "synonyms": [
            "dizer a verdade",
            "dizer a alguém"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Dar informações ou instruções a alguém.",
                "examples": [
                    "Ela conta à equipa as mudanças antes de acontecerem."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "contei",
        "v3": "contado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_014"
    },
    {
        "word": "perguntar",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "subtext": "perguntar sobre / perguntar a alguém",
        "synonyms": [
            "fazer uma pergunta",
            "pedir ajuda"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer uma pergunta ou pedido.",
                "examples": [
                    "Ela pede feedback depois de cada apresentação."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "perguntei",
        "v3": "perguntado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "perguntando",
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_015"
    },
    {
        "word": "falar",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "subtext": "falar com alguém / falar sobre / falar abertamente / falar durante muito tempo",
        "form": "verb",
        "definitions": [
            {
                "text": "Comunicar falando.",
                "examples": [
                    "Ele fala com o seu gerente sobre o problema."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "falei",
        "v3": "falado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "falando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_174"
    },
    {
        "word": "ligar",
        "level": "starter",
        "theme": "technology",
        "emoji": "📞",
        "subtext": "ligar para alguém / ligar a dizer que está doente",
        "synonyms": [
            "retribuir a chamada",
            "convocar uma reunião"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Telefonar a alguém.",
                "examples": [
                    "Ligo aos meus clientes todas as manhãs antes de verificar os e-mails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "liguei",
        "v3": "ligado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "ligando",
        "lang": "pt",
        "sub_theme": "devices",
        "id": "pt_starter_technology_007"
    },
    {
        "word": "escrever",
        "level": "starter",
        "theme": "social",
        "emoji": "✍️",
        "subtext": "escrever um e-mail / escrever um relatório / escrever uma carta",
        "synonyms": [
            "tirar notas"
        ],
        "opposite": "ler",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Colocar palavras em papel ou ecrã.",
                "examples": [
                    "Escrevo e-mails o dia todo.",
                    "Ela escreve um relatório todas as sextas-feiras."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "escrevi",
        "v3": "escrito",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_175"
    },
    {
        "word": "ler",
        "level": "starter",
        "theme": "social",
        "emoji": "📖",
        "subtext": "ler um livro / ler as notícias / ler um contrato / ler com atenção",
        "opposite": "escrever",
        "oppositeEmoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Olhar para e entender palavras escritas.",
                "examples": [
                    "Ela lê as notícias todas as manhãs.",
                    "Ele lê contratos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "li",
        "v3": "lido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_176"
    },
    {
        "word": "ouvir",
        "level": "starter",
        "theme": "social",
        "emoji": "🎧",
        "subtext": "ouvir música / ouvir com atenção / ouvir um podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "Prestar atenção a sons ou à fala.",
                "examples": [
                    "Oiço podcasts no trabalho.",
                    "Ela ouve atentamente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ouvi",
        "v3": "ouvido",
        "group": "ir",
        "auxiliary": "ter",
        "v4": "ouviendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_177"
    },
    {
        "word": "responder",
        "level": "starter",
        "theme": "language",
        "emoji": "📞",
        "subtext": "responder a uma pergunta / responder a um e-mail",
        "synonyms": [
            "atender o telefone"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Responder a uma pergunta ou comunicação.",
                "examples": [
                    "Ele responde a todos os e-mails rapidamente.",
                    "Ela atendeu o telefone."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "respondi",
        "v3": "respondido",
        "group": "er",
        "auxiliary": "ter",
        "v4": "respondiendo",
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_016"
    },
    {
        "word": "repetir",
        "level": "starter",
        "theme": "school",
        "emoji": "🔁",
        "subtext": "repetir isso / repetir-se / repetir um pedido",
        "form": "verb",
        "definitions": [
            {
                "text": "Dizer ou fazer algo novamente.",
                "examples": [
                    "Por favor, repita isso.",
                    "Ele repetiu a instrução duas vezes."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repeti",
        "v3": "repetido",
        "group": "ir",
        "auxiliary": "ter",
        "v4": "repetiendo",
        "lang": "pt",
        "sub_theme": "classroom",
        "id": "pt_starter_school_001"
    },
    {
        "word": "ir",
        "level": "starter",
        "theme": "social",
        "emoji": "🚶",
        "subtext": "ir para o trabalho / ir para casa / ir às compras",
        "synonyms": [
            "sair"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Mover-se de um lugar para outro.",
                "examples": [
                    "Vou para o trabalho de autocarro.",
                    "Ela vai ao médico."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fui",
        "v3": "ido",
        "group": "ir",
        "auxiliary": "ter",
        "tenses": {
            "present_simple": {
                "positive": [
                    "vou",
                    "vais",
                    "vai",
                    "vamos",
                    "ides",
                    "vão"
                ]
            }
        },
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_178"
    },
    {
        "word": "vir",
        "level": "starter",
        "theme": "social",
        "emoji": "🏃‍♂️",
        "subtext": "vir para casa / vir para o trabalho / vir aqui",
        "synonyms": [
            "voltar"
        ],
        "opposite": "ir",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Mover-se em direção a um lugar ou pessoa.",
                "examples": [
                    "Ele vem ao escritório às nove.",
                    "Ela vem para casa tarde."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "vim",
        "v3": "vindo",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_179"
    },
    {
        "word": "caminhar",
        "level": "starter",
        "theme": "social",
        "emoji": "🚶",
        "subtext": "caminhar para o trabalho / caminhar para casa / caminhar devagar / caminhar todos os dias",
        "form": "verb",
        "definitions": [
            {
                "text": "Mover-se a pé num ritmo normal.",
                "examples": [
                    "Ele caminha para o trabalho todos os dias.",
                    "Ela caminha durante a sua pausa para o almoço."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "caminhei",
        "v3": "caminhado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "caminhando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_180"
    },
    {
        "word": "conduzir",
        "level": "starter",
        "theme": "social",
        "emoji": "🚗",
        "subtext": "conduzir para o trabalho / conduzir um carro / conduzir para casa / conduzir com cuidado",
        "form": "verb",
        "definitions": [
            {
                "text": "Operar um veículo.",
                "examples": [
                    "Ela conduz para o trabalho.",
                    "Ele conduz um carro da empresa."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "conduzi",
        "v3": "conduzido",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_181"
    },
    {
        "word": "voar",
        "level": "starter",
        "theme": "social",
        "emoji": "✈️",
        "subtext": "voar para uma cidade / voar em classe executiva / voar em classe económica",
        "form": "verb",
        "definitions": [
            {
                "text": "Viajar de avião.",
                "examples": [
                    "Ela voa para Paris para reuniões.",
                    "Ele odeia voar."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "voei",
        "v3": "voado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_182"
    },
    {
        "word": "chegar",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "chegar ao trabalho / chegar tarde / chegar a tempo / chegar a casa",
        "form": "verb",
        "definitions": [
            {
                "text": "Chegar a um destino.",
                "examples": [
                    "Ele chega ao escritório às nove. O comboio chega a tempo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cheguei",
        "v3": "chegado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "chegando",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_013"
    },
    {
        "word": "partir",
        "level": "starter",
        "theme": "work",
        "emoji": "🚪",
        "subtext": "",
        "synonyms": [
            "sair de casa",
            "sair do trabalho",
            "sair cedo",
            "sair tarde"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Afastar-se de um lugar.",
                "examples": [
                    "Saio de casa às oito e quinze. Ela sai do trabalho às seis."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "parti",
        "v3": "partido",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_014"
    },
    {
        "word": "mover",
        "level": "starter",
        "theme": "social",
        "emoji": "📦",
        "subtext": "mudar-se para um novo lugar",
        "synonyms": [
            "instalar-se",
            "mudar-se",
            "mudar de casa"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ir morar ou trabalhar num lugar diferente.",
                "examples": [
                    "Eles mudaram-se para um apartamento maior quando tiveram filhos."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "movi",
        "v3": "movido",
        "group": "er",
        "auxiliary": "ter",
        "v4": "moviendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_183"
    },
    {
        "word": "voltar",
        "level": "starter",
        "theme": "social",
        "emoji": "🔙",
        "subtext": "voltar a casa / voltar ao trabalho / voltar de",
        "synonyms": [
            "retribuir uma chamada"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Vir ou ir de volta para um lugar.",
                "examples": [
                    "Ele volta de uma viagem na sexta-feira.",
                    "Ela devolveu a chamada."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "voltei",
        "v3": "voltado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "voltando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_184"
    },
    {
        "word": "viajar",
        "level": "starter",
        "theme": "social",
        "emoji": "✈️",
        "subtext": "viajar em trabalho / viajar para o estrangeiro / viajar de comboio",
        "form": "verb",
        "definitions": [
            {
                "text": "Ir de um lugar para outro, especialmente longe.",
                "examples": [
                    "Ela viaja por trabalho três vezes por mês."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "viajei",
        "v3": "viajado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "viajando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_185"
    },
    {
        "word": "comer",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "subtext": "comer fora",
        "synonyms": [
            "tomar o pequeno-almoço",
            "almoçar",
            "jantar"
        ],
        "opposite": "beber",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Colocar comida na boca e engolir.",
                "examples": [
                    "Comemos o jantar às sete.",
                    "Ele almoça na sua secretária."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "comi",
        "v3": "comido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "meals",
        "id": "pt_starter_food_drink_021"
    },
    {
        "word": "beber",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "subtext": "beber café / beber chá / beber água / beber cerveja",
        "opposite": "comer",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Colocar líquido na boca e engolir.",
                "examples": [
                    "Ela bebe café todas as manhãs.",
                    "Eu bebo água."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bebi",
        "v3": "bebido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "drinks",
        "id": "pt_starter_food_drink_022"
    },
    {
        "word": "dormir",
        "level": "starter",
        "theme": "time",
        "emoji": "😴",
        "subtext": "dormir bem / dormir mal / dormir oito horas / dormir até tarde",
        "opposite": "acordar",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Descansar com os olhos fechados num estado natural de inconsciência.",
                "examples": [
                    "Ele dorme sete horas por noite.",
                    "Durmo mal."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "dormi",
        "v3": "dormido",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "clock",
        "id": "pt_starter_time_003"
    },
    {
        "word": "cozinhar",
        "level": "starter",
        "theme": "social",
        "emoji": "🍳",
        "subtext": "cozinhar o jantar / cozinhar uma refeição / cozinhar em casa / cozinhar para alguém",
        "form": "verb",
        "definitions": [
            {
                "text": "Preparar comida aquecendo-a.",
                "examples": [
                    "Ela cozinha o jantar todas as noites. Eu não cozinho — encomendo comida."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cozinhei",
        "v3": "cozinhado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "cozinhando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_186"
    },
    {
        "word": "limpar",
        "level": "starter",
        "theme": "social",
        "emoji": "🧹",
        "subtext": "limpar o apartamento / limpar a cozinha / limpar regularmente",
        "synonyms": [
            "arrumar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Remover a sujidade de algo.",
                "examples": [
                    "Limpo o apartamento todos os sábados. Ele limpa a sua secretária todas as manhãs."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "limpei",
        "v3": "limpado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "limpando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_187"
    },
    {
        "word": "vestir",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👕",
        "subtext": "vestir um fato / vestir roupa informal",
        "synonyms": [
            "usar óculos"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ter roupas ou acessórios no seu corpo.",
                "examples": [
                    "Ela veste um fato para o trabalho.",
                    "Ele usa óculos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "vesti",
        "v3": "vestido",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "everyday",
        "id": "pt_starter_clothes_002"
    },
    {
        "word": "lavar",
        "level": "starter",
        "theme": "social",
        "emoji": "🧼",
        "subtext": "lavar a louça / lavar a roupa / lavar as mãos",
        "form": "verb",
        "definitions": [
            {
                "text": "Limpar algo com água.",
                "examples": [
                    "Ele lava o carro todos os domingos.",
                    "Lava as tuas mãos."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "lavei",
        "v3": "lavado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "lavando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_188"
    },
    {
        "word": "comprar",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "subtext": "comprar comida / comprar um bilhete / comprar on-line / comprar uma casa",
        "opposite": "vender",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Obter algo em troca de dinheiro.",
                "examples": [
                    "Ela compra comida on-line.",
                    "Ele quer comprar um apartamento."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "comprei",
        "v3": "comprado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_012"
    },
    {
        "word": "pagar",
        "level": "starter",
        "theme": "social",
        "emoji": "💳",
        "subtext": "pagar uma conta / pagar a renda / pagar com cartão / pagar em dinheiro",
        "form": "verb",
        "definitions": [
            {
                "text": "Dar dinheiro em troca de algo.",
                "examples": [
                    "Pago as minhas contas por débito direto."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "paguei",
        "v3": "pagado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_189"
    },
    {
        "word": "gastar",
        "level": "starter",
        "theme": "social",
        "emoji": "💸",
        "subtext": "gastar dinheiro / gastar em comida / gastar na renda",
        "synonyms": [
            "passar tempo"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Usar dinheiro para pagar coisas.",
                "examples": [
                    "Ele gasta demasiado dinheiro em comida de take-away."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gastei",
        "v3": "gastado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_190"
    },
    {
        "word": "poupar",
        "level": "starter",
        "theme": "social",
        "emoji": "💰",
        "subtext": "poupar dinheiro / poupar para umas férias / poupar para uma casa",
        "opposite": "gastar",
        "oppositeEmoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "Guardar dinheiro em vez de o gastar.",
                "examples": [
                    "Ela poupa cem euros todos os meses."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "poupai",
        "v3": "poupado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "poupando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_191"
    },
    {
        "word": "trabalhar",
        "level": "starter",
        "theme": "work",
        "emoji": "💼",
        "subtext": "trabalhar a partir de casa / trabalhar a tempo inteiro / trabalhar muito / trabalhar até tarde",
        "form": "verb",
        "definitions": [
            {
                "text": "Realizar tarefas como parte de um emprego.",
                "examples": [
                    "Ela trabalha a partir de casa três dias por semana."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "trabalhei",
        "v3": "trabalhado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "trabalhando",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_015"
    },
    {
        "word": "viver",
        "level": "starter",
        "theme": "social",
        "emoji": "🏠",
        "subtext": "viver num apartamento / viver sozinho / viver com alguém / viver no estrangeiro",
        "opposite": "morrer",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ter a sua casa num lugar; estar vivo.",
                "examples": [
                    "Ele vive num apartamento perto do centro.",
                    "Vivemos juntos."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "vivi",
        "v3": "vivido",
        "group": "er",
        "auxiliary": "ter",
        "v4": "viviendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_192"
    },
    {
        "word": "pensar",
        "level": "starter",
        "theme": "social",
        "emoji": "💭",
        "subtext": "pensar sobre / pensar em / pensar que é / pensar com atenção",
        "form": "verb",
        "definitions": [
            {
                "text": "Ter uma crença ou opinião; usar a mente.",
                "examples": [
                    "Penso que é uma boa ideia.",
                    "Ela pensa no seu trabalho."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "pensei",
        "v3": "pensado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_193"
    },
    {
        "word": "saber",
        "level": "starter",
        "theme": "social",
        "emoji": "🧠",
        "subtext": "saber a resposta / saber como",
        "synonyms": [
            "conhecer alguém",
            "conhecer um lugar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ter informação ou consciência sobre algo.",
                "examples": [
                    "Sei o nome dele.",
                    "Ela sabe a resposta.",
                    "Conhece-o?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "soube",
        "v3": "sabido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_194"
    },
    {
        "word": "querer",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🙏",
        "subtext": "querer um emprego / querer sair / querer mais dinheiro / querer ajuda",
        "form": "verb",
        "definitions": [
            {
                "text": "Desejar algo.",
                "examples": [
                    "Quero um café.",
                    "Ela quer um emprego melhor.",
                    "Ele quer reformar-se."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "quis",
        "v3": "querido",
        "group": "er",
        "auxiliary": "ter",
        "v4": "queriendo",
        "lang": "pt",
        "sub_theme": "positive",
        "id": "pt_starter_emotions_006"
    },
    {
        "word": "precisar",
        "level": "starter",
        "theme": "social",
        "emoji": "🆘",
        "subtext": "precisar de ajuda / precisar de tempo / precisar de dinheiro / precisar de descansar",
        "form": "verb",
        "definitions": [
            {
                "text": "Necessitar de algo; sentir que algo é necessário.",
                "examples": [
                    "Preciso de uma pausa.",
                    "Ela precisa de ajuda.",
                    "Precisamos de mais tempo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "precisei",
        "v3": "precisado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "precisando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_195"
    },
    {
        "word": "gostar",
        "level": "starter",
        "theme": "emotions",
        "emoji": "👍",
        "subtext": "gostar do trabalho / gostar de viajar / gostar de alguém / gostar da ideia",
        "form": "verb",
        "definitions": [
            {
                "text": "Achar algo agradável; desfrutar.",
                "examples": [
                    "Gosto do meu trabalho.",
                    "Ela gosta de cozinhar.",
                    "Ele gosta de café."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "gostei",
        "v3": "gostado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "gostando",
        "lang": "pt",
        "sub_theme": "positive",
        "id": "pt_starter_emotions_007"
    },
    {
        "word": "amar",
        "level": "starter",
        "theme": "emotions",
        "emoji": "❤️",
        "subtext": "amar alguém / amar fazer / amar um lugar / amar a ideia",
        "form": "verb",
        "definitions": [
            {
                "text": "Ter forte afeição por; desfrutar muito.",
                "examples": [
                    "Ela ama o seu trabalho.",
                    "Ele ama viajar por trabalho."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "amei",
        "v3": "amado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "amando",
        "lang": "pt",
        "sub_theme": "positive",
        "id": "pt_starter_emotions_008"
    },
    {
        "word": "odiar",
        "level": "starter",
        "theme": "social",
        "emoji": "😡",
        "subtext": "odiar fazer / odiar alguém / odiar reuniões / odiar o trajecto para o trabalho",
        "form": "verb",
        "definitions": [
            {
                "text": "Detestar fortemente.",
                "examples": [
                    "Ele odeia viajar de autocarro.",
                    "Ela odeia reuniões longas."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "odiei",
        "v3": "odiado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "odiando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_196"
    },
    {
        "word": "esperar",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🤞",
        "subtext": "esperar / esperar fazer / esperar que",
        "synonyms": [
            "espero que sim"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Desejar que algo aconteça.",
                "examples": [
                    "Espero obter uma promoção este ano.",
                    "Ela espera por um melhor pagamento."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "esperei",
        "v3": "esperado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "esperando",
        "lang": "pt",
        "sub_theme": "positive",
        "id": "pt_starter_emotions_009"
    },
    {
        "word": "lembrar",
        "level": "starter",
        "theme": "social",
        "emoji": "🧠",
        "subtext": "lembrar-se de fazer / lembrar-se de um nome / lembrar-se com clareza",
        "form": "verb",
        "definitions": [
            {
                "text": "Ter uma memória de; não esquecer.",
                "examples": [
                    "Por favor, lembre-se do prazo.",
                    "Ela lembra-se de cada cliente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lembrei",
        "v3": "lembrado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "lembrando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_197"
    },
    {
        "word": "esquecer",
        "level": "starter",
        "theme": "social",
        "emoji": "🤔",
        "subtext": "esquecer um nome / esquecer-se de fazer / esquecer-se de / esquecer completamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Falhar em lembrar.",
                "examples": [
                    "Não te esqueças da reunião.",
                    "Ele esquece-se sempre das palavras-passe."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "esqueci",
        "v3": "esquecido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_198"
    },
    {
        "word": "entender",
        "level": "starter",
        "theme": "language",
        "emoji": "💡",
        "subtext": "entender um problema / entender alguém / entender com clareza",
        "form": "verb",
        "definitions": [
            {
                "text": "Entender o significado de algo.",
                "examples": [
                    "Entendo o contrato.",
                    "Ela entende francês."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "entendi",
        "v3": "entendido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "discourse",
        "id": "pt_starter_language_017"
    },
    {
        "word": "decidir",
        "level": "starter",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "decidir fazer / decidir sobre / difícil de decidir",
        "synonyms": [
            "tomar uma decisão"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer uma escolha.",
                "examples": [
                    "Ela decidiu mudar de carreira.",
                    "Ele decide rapidamente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "decidi",
        "v3": "decidido",
        "group": "ir",
        "auxiliary": "ter",
        "v4": "decidiendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_199"
    },
    {
        "word": "desfrutar",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "subtext": "desfrutar de fazer / desfrutar de uma refeição / desfrutar do seu trabalho / desfrutar da vida",
        "form": "verb",
        "definitions": [
            {
                "text": "Ter prazer com algo.",
                "examples": [
                    "Ela desfruta muito de trabalhar a partir de casa três dias por semana."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "desfrutei",
        "v3": "desfrutado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "desfrutando",
        "lang": "pt",
        "sub_theme": "positive",
        "id": "pt_starter_emotions_010"
    },
    {
        "word": "ver",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "subtext": "ver um médico / ver amigos / ver o problema / ver com clareza",
        "form": "verb",
        "definitions": [
            {
                "text": "Notar ou perceber com os olhos.",
                "examples": [
                    "Vejo o meu médico amanhã.",
                    "Ela vê o problema."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "vi",
        "v3": "visto",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "limbs",
        "id": "pt_starter_body_001"
    },
    {
        "word": "acordar",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "acordar cedo / acordar tarde / acordar cansado",
        "opposite": "dormir",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Parar de dormir; tornar-se consciente após o sono.",
                "examples": [
                    "Acordo às seis e meia todas as manhãs."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "acordei",
        "v3": "acordado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_016"
    },
    {
        "word": "assistir",
        "level": "starter",
        "theme": "social",
        "emoji": "📺",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "ver televisão",
            "ver um filme",
            "ver as notícias",
            "observar atentamente"
        ],
        "definitions": [
            {
                "text": "Olhar para algo por um período de tempo.",
                "examples": [
                    "Ela assiste às notícias do mercado todas as manhãs antes do trabalho."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "assisti",
        "v3": "assistido",
        "group": "ir",
        "auxiliary": "ter",
        "v4": "assistiendo",
        "lang": "pt",
        "sub_theme": "going_out",
        "id": "pt_starter_social_200"
    },
    {
        "word": "olhar",
        "level": "starter",
        "theme": "social",
        "emoji": "👀",
        "subtext": "olhar para",
        "synonyms": [
            "procurar",
            "parecer-se com",
            "parecer feliz"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Dirigir os seus olhos para algo.",
                "examples": [
                    "Olhe para esta foto.",
                    "Ele está a olhar para as suas chaves."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "olhei",
        "v3": "olhado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "olhando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_201"
    },
    {
        "word": "jogar",
        "level": "starter",
        "theme": "social",
        "emoji": "🎮",
        "subtext": "jogar um jogo",
        "synonyms": [
            "praticar desporto",
            "tocar música",
            "desempenhar um papel"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Participar num jogo ou desporto; produzir música.",
                "examples": [
                    "Ele joga futebol ao fim de semana para desestressar."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "joguei",
        "v3": "jogado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "jogando",
        "lang": "pt",
        "sub_theme": "going_out",
        "id": "pt_starter_social_202"
    },
    {
        "word": "correr",
        "level": "starter",
        "theme": "social",
        "emoji": "🏃",
        "subtext": "correr uma corrida",
        "synonyms": [
            "gerir um negócio",
            "ficar sem",
            "chegar tarde"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Mover-se muito rápido nas suas pernas.",
                "examples": [
                    "Corro no parque.",
                    "Ele corre para apanhar o autocarro."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "corri",
        "v3": "corrido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_203"
    },
    {
        "word": "sentar",
        "level": "starter",
        "theme": "work",
        "emoji": "🪑",
        "subtext": "sentar-se / sentar-se a uma secretária / sentar-se em silêncio",
        "synonyms": [
            "estar numa reunião"
        ],
        "opposite": "estar de pé",
        "oppositeEmoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "Estar ou tomar uma posição sentada.",
                "examples": [
                    "Ele senta-se na sua secretária durante oito horas por dia."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sentei",
        "v3": "sentado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_017"
    },
    {
        "word": "estar de pé",
        "level": "starter",
        "theme": "work",
        "emoji": "🧍",
        "subtext": "",
        "synonyms": [
            "levantar-se",
            "estar numa fila",
            "apoiar",
            "destacar-se"
        ],
        "opposite": "sentar",
        "oppositeEmoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "Estar em ou levantar-se para uma posição vertical.",
                "examples": [
                    "Ela fica de pé quando apresenta para manter a sua energia."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "estive de pé",
        "v3": "estado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_018"
    },
    {
        "word": "conhecer",
        "level": "starter",
        "theme": "social",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Juntar-se a alguém, especialmente por uma razão planeada.",
                "examples": [
                    "Encontramo-nos todas as segundas-feiras para discutir a semana."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "conheci",
        "v3": "conhecido",
        "subtext": "conhecer-se on-line",
        "synonyms": [
            "encontrar um cliente",
            "encontrar um colega",
            "encontrar-se para almoçar"
        ],
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_204"
    },
    {
        "word": "aprender",
        "level": "starter",
        "theme": "social",
        "emoji": "📚",
        "subtext": "aprender uma língua / aprender uma competência / aprender com / aprender como",
        "form": "verb",
        "definitions": [
            {
                "text": "Ganhar conhecimento ou habilidade.",
                "examples": [
                    "Ela está a aprender espanhol para o seu novo emprego no estrangeiro."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "aprendi",
        "v3": "aprendido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_205"
    },
    {
        "word": "mudar",
        "level": "starter",
        "theme": "work",
        "emoji": "🔄",
        "subtext": "mudar de emprego / mudar de ideias / mudar o plano / mudar algo",
        "form": "verb",
        "definitions": [
            {
                "text": "Tornar-se diferente; fazer algo diferente.",
                "examples": [
                    "Ela mudou de emprego duas vezes em três anos. As coisas mudam depressa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mudei",
        "v3": "mudado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "mudando",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_019"
    },
    {
        "word": "parar",
        "level": "starter",
        "theme": "work",
        "emoji": "🛑",
        "subtext": "parar de fazer / parar de trabalhar / parar um hábito / parar alguém",
        "form": "verb",
        "definitions": [
            {
                "text": "Terminar uma atividade ou movimento.",
                "examples": [
                    "Ela parou de apanhar o autocarro e agora vai de bicicleta para o trabalho."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "parei",
        "v3": "parado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "parando",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_020"
    },
    {
        "word": "adicionar",
        "level": "starter",
        "theme": "social",
        "emoji": "➕",
        "subtext": "adicionar açúcar / adicionar a / adicionar um comentário",
        "synonyms": [
            "somar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Juntar coisas para fazer um grupo maior.",
                "examples": [
                    "Adicione um pouco de açúcar ao chá.",
                    "Quanto é cinco mais cinco?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "adicionei",
        "v3": "adicionado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "adicionando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_206"
    },
    {
        "word": "ganhar",
        "level": "starter",
        "theme": "social",
        "emoji": "🏆",
        "subtext": "ganhar um jogo / ganhar um prémio / ganhar um galardão / ganhar um contrato",
        "opposite": "perder",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "Ser o melhor num jogo ou competição.",
                "examples": [
                    "Queremos ganhar o jogo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ganhei",
        "v3": "ganhado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "going_out",
        "id": "pt_starter_social_207"
    },
    {
        "word": "morrer",
        "level": "starter",
        "theme": "social",
        "emoji": "⚰️",
        "subtext": "morrer de / morrer por / morrer de...",
        "synonyms": [
            "extinguir-se"
        ],
        "opposite": "viver",
        "oppositeEmoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Parar de viver.",
                "examples": [
                    "As plantas morrem sem água."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "morri",
        "v3": "morto",
        "group": "er",
        "auxiliary": "ter",
        "v4": "morriendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_208"
    },
    {
        "word": "enviar",
        "level": "starter",
        "theme": "social",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Transmitir algo a alguém, especialmente eletronicamente.",
                "examples": [
                    "Ela envia vinte e-mails antes do almoço."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "enviei",
        "v3": "enviado",
        "subtext": "enviar um e-mail / enviar uma mensagem / enviar um relatório / enviar um ficheiro",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_209"
    },
    {
        "word": "ficar",
        "level": "starter",
        "theme": "social",
        "emoji": "🏨",
        "subtext": "ficar em casa / ficar num hotel / ficar acordado até tarde / ficar com alguém",
        "form": "verb",
        "definitions": [
            {
                "text": "Continuar a estar num lugar.",
                "examples": [
                    "Fico em casa aos domingos.",
                    "Estamos a ficar num hotel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fiquei",
        "v3": "ficado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "ficando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_210"
    },
    {
        "word": "cair",
        "level": "starter",
        "theme": "nature",
        "emoji": "🍂",
        "subtext": "cair / cair de",
        "synonyms": [
            "apaixonar-se",
            "adormecer"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Mover-se para baixo em direção ao chão.",
                "examples": [
                    "As folhas caem no outono.",
                    "Cuidado, não caias."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "caí",
        "v3": "caído",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "seasons",
        "id": "pt_starter_nature_015"
    },
    {
        "word": "passar",
        "level": "starter",
        "theme": "social",
        "emoji": "🏔️",
        "subtext": "passar num exame / passar a bola / passar o tempo / passar o açúcar",
        "form": "verb",
        "definitions": [
            {
                "text": "Passar por algo ou ter sucesso num exame.",
                "examples": [
                    "Passo pelo parque a caminho de casa.",
                    "Espero passar no teste."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "passei",
        "v3": "passado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "passando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_211"
    },
    {
        "word": "vender",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "subtext": "vender produtos / vender on-line / vender no mercado",
        "synonyms": [
            "campeão de vendas"
        ],
        "opposite": "comprar",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Dar algo a alguém por dinheiro.",
                "examples": [
                    "Eles vendem fruta no mercado."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "vendi",
        "v3": "vendido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "money",
        "id": "pt_starter_shopping_013"
    },
    {
        "word": "puxar",
        "level": "starter",
        "theme": "work",
        "emoji": "🚜",
        "subtext": "puxar a porta / puxar algo",
        "synonyms": [
            "encostar",
            "arrancar"
        ],
        "opposite": "empurrar",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Mover algo em sua direção.",
                "examples": [
                    "Puxe a porta para abri-la."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "puxei",
        "v3": "puxado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "puxando",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_021"
    },
    {
        "word": "empurrar",
        "level": "starter",
        "theme": "work",
        "emoji": "🛒",
        "subtext": "empurrar um carrinho",
        "synonyms": [
            "carregar no botão",
            "afastar",
            "levar por diante"
        ],
        "opposite": "puxar",
        "oppositeEmoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "Mover algo para longe de si.",
                "examples": [
                    "Pressione o botão.",
                    "Empurro o carrinho de compras."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "empurrei",
        "v3": "empurrado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "empurrando",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_022"
    },
    {
        "word": "levar",
        "level": "starter",
        "theme": "work",
        "emoji": "🎒",
        "subtext": "levar uma mala / levar notas",
        "synonyms": [
            "realizar",
            "continuar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Segurar e levar algo consigo.",
                "examples": [
                    "Levo o meu portátil e notas para cada reunião."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "levei",
        "v3": "levado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "levando",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_023"
    },
    {
        "word": "quebrar",
        "level": "starter",
        "theme": "social",
        "emoji": "💔",
        "subtext": "",
        "synonyms": [
            "partir o vidro",
            "infringir uma lei",
            "fazer uma pausa",
            "avariar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Separar algo em duas ou mais partes.",
                "examples": [
                    "Não quebres o vidro.",
                    "Ele partiu a perna."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "quebrei",
        "v3": "quebrado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_212"
    },
    {
        "word": "receber",
        "level": "starter",
        "theme": "social",
        "emoji": "📩",
        "subtext": "receber um e-mail / receber um presente / receber um pagamento / receber notícias",
        "form": "verb",
        "definitions": [
            {
                "text": "Obter algo que alguém lhe deu ou enviou.",
                "examples": [
                    "Recebo muito correio.",
                    "Ela recebeu um presente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recebi",
        "v3": "recebido",
        "group": "er",
        "auxiliary": "ter",
        "v4": "recebiendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_213"
    },
    {
        "word": "concordar",
        "level": "starter",
        "theme": "social",
        "emoji": "👍",
        "subtext": "concordar com alguém / concordar em fazer",
        "synonyms": [
            "chegar a acordo",
            "eu concordo"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ter a mesma opinião que alguém.",
                "examples": [
                    "Concordo consigo.",
                    "Concordamos com o plano."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "concordei",
        "v3": "concordado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "concordando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_214"
    },
    {
        "word": "desenhar",
        "level": "starter",
        "theme": "social",
        "emoji": "🎨",
        "subtext": "desenhar um quadro",
        "synonyms": [
            "tirar uma conclusão",
            "atrair a atenção",
            "traçar uma linha"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer uma imagem com uma caneta ou lápis.",
                "examples": [
                    "Gosto de desenhar pássaros.",
                    "Consegue desenhar um mapa?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "desenhei",
        "v3": "desenhado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_215"
    },
    {
        "word": "partilhar",
        "level": "starter",
        "theme": "social",
        "emoji": "🍕",
        "subtext": "partilhar um quarto / partilhar informações / partilhar uma ideia / partilhar com",
        "form": "verb",
        "definitions": [
            {
                "text": "Dar uma parte de algo a outros.",
                "examples": [
                    "Vamos partilhar a pizza.",
                    "Partilho um quarto com o meu irmão."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "partilhei",
        "v3": "partilhado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "partilhando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_216"
    },
    {
        "word": "sorrir",
        "level": "starter",
        "theme": "social",
        "emoji": "😊",
        "subtext": "sorrir para alguém / sorrir abertamente",
        "synonyms": [
            "um grande sorriso"
        ],
        "opposite": "chorar",
        "oppositeEmoji": "😢",
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer uma expressão feliz com a boca.",
                "examples": [
                    "Ela tem um sorriso lindo.",
                    "Sorria para a câmara."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sorri",
        "v3": "sorrido",
        "group": "ir",
        "auxiliary": "ter",
        "v4": "sorriendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_217"
    },
    {
        "word": "chorar",
        "level": "starter",
        "theme": "social",
        "emoji": "😢",
        "subtext": "começar a chorar / chorar por algo",
        "synonyms": [
            "pedir socorro",
            "gritar"
        ],
        "opposite": "sorrir",
        "oppositeEmoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "Produzir lágrimas porque está triste ou com dor.",
                "examples": [
                    "O bebé está a chorar.",
                    "Não chores."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "chorei",
        "v3": "chorado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "chorando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_218"
    },
    {
        "word": "dançar",
        "level": "starter",
        "theme": "music",
        "emoji": "💃",
        "subtext": "dançar ao som da música / ir dançar / dançar juntos",
        "synonyms": [
            "dança lenta"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Mover o seu corpo ao som da música.",
                "examples": [
                    "Adoro dançar.",
                    "Eles estão a dançar."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dancei",
        "v3": "dançado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "dançando",
        "lang": "pt",
        "sub_theme": "performance",
        "id": "pt_starter_music_002"
    },
    {
        "word": "cantar",
        "level": "starter",
        "theme": "music",
        "emoji": "🎤",
        "subtext": "cantar uma canção / acompanhar a cantar / cantar bem",
        "synonyms": [
            "vocalista"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer sons musicais com a voz.",
                "examples": [
                    "Gosto de cantar no duche.",
                    "Ela canta muito bem."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cantei",
        "v3": "cantado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "performance",
        "id": "pt_starter_music_003"
    },
    {
        "word": "saltar",
        "level": "starter",
        "theme": "social",
        "emoji": "🦘",
        "subtext": "saltar alto / saltar por cima / saltar / saltar para dentro",
        "form": "verb",
        "definitions": [
            {
                "text": "Impulsionar-se do chão com as pernas.",
                "examples": [
                    "Consegue saltar alto?",
                    "O gato saltou para cima da mesa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "saltei",
        "v3": "saltado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "saltando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_219"
    },
    {
        "word": "nadar",
        "level": "starter",
        "theme": "social",
        "emoji": "🏊",
        "subtext": "ir nadar / nadar bem",
        "synonyms": [
            "atravessar a nado",
            "fazer piscinas"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Mover-se na água usando os braços e as pernas.",
                "examples": [
                    "Nado todas as manhãs.",
                    "Sabe nadar?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "nadei",
        "v3": "nadado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_220"
    },
    {
        "word": "estudar",
        "level": "starter",
        "theme": "social",
        "emoji": "📖",
        "subtext": "estudar inglês / estudar para um exame / estudar muito",
        "synonyms": [
            "auto-estudo"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ler e praticar para ganhar conhecimento.",
                "examples": [
                    "Ele está a estudar para uma qualificação profissional."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "estudei",
        "v3": "estudado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "estudando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_221"
    },
    {
        "word": "ensinar",
        "level": "starter",
        "theme": "social",
        "emoji": "👨‍🏫",
        "subtext": "ensinar alguém / ensinar uma matéria / ensinar como",
        "synonyms": [
            "dar uma aula"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Dar instrução numa matéria.",
                "examples": [
                    "Ela ensina competências de comunicação a gestores seniores."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ensinei",
        "v3": "ensinado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_222"
    },
    {
        "word": "viajar diariamente",
        "level": "starter",
        "theme": "social",
        "emoji": "🚆",
        "subtext": "deslocar-se para o trabalho",
        "synonyms": [
            "trajecto diário",
            "trajecto longo",
            "deslocar-se de comboio"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Viajar alguma distância entre a casa e o local de trabalho de forma regular.",
                "examples": [
                    "Viajo diariamente para a cidade de comboio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "viajei diariamente",
        "v3": "viajado diariamente",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "viajar diariamenando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_223"
    },
    {
        "word": "alugar",
        "level": "starter",
        "theme": "social",
        "emoji": "🏠",
        "subtext": "alugar um apartamento / alugar uma propriedade / alugar um quarto",
        "form": "verb",
        "definitions": [
            {
                "text": "Pagar dinheiro para usar uma propriedade que pertence a outra pessoa.",
                "examples": [
                    "Eles alugam um apartamento de dois quartos perto do centro da cidade."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "aluguei",
        "v3": "alugado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "alugando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_224"
    },
    {
        "word": "exercitar",
        "level": "starter",
        "theme": "social",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer atividade física para a saúde e fitness.",
                "examples": [
                    "Ele exercita-se quatro vezes por semana no ginásio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercitei",
        "v3": "exercitado",
        "subtext": "exercitar-se regularmente / exercitar-se no ginásio / exercitar-se ao ar livre",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "exercitando",
        "lang": "pt",
        "sub_theme": "going_out",
        "id": "pt_starter_social_225"
    },
    {
        "word": "custar",
        "level": "starter",
        "theme": "social",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Ter um preço de.",
                "examples": [
                    "O apartamento custa mil e duzentos euros por mês."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "custou",
        "v3": "custado",
        "subtext": "custar muito / custar dinheiro / custar demasiado / custar menos",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_226"
    },
    {
        "word": "convidar",
        "level": "starter",
        "theme": "social",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Pedir a alguém para vir a um evento ou lugar.",
                "examples": [
                    "Convidaram todos os seus colegas para a festa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "convidei",
        "v3": "convidado",
        "subtext": "convidar alguém / convidar para jantar / convidar para uma festa",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "convidando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_227"
    },
    {
        "word": "levantar-se",
        "definitions": [
            {
                "text": "Levantar-se da cama depois de acordar.",
                "examples": [
                    "Ele levanta-se às sete e faz café imediatamente."
                ]
            }
        ],
        "subtext": "levantar-se cedo / levantar-se tarde / levantar-se rapidamente",
        "classification": "irregular",
        "aspect": "action",
        "v2": "levantei-me",
        "v3": "levantado",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "reflexive": true,
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_024"
    },
    {
        "word": "tomar o pequeno-almoço",
        "definitions": [
            {
                "text": "Comer a refeição da manhã.",
                "examples": [
                    "Ela toma sempre o pequeno-almoço antes de sair de casa."
                ]
            }
        ],
        "subtext": "tomar o pequeno-almoço em casa / tomar um pequeno-almoço rápido",
        "synonyms": [
            "saltar o pequeno-almoço"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "tomei o pequeno-almoço",
        "v3": "tomado",
        "theme": "work",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_025"
    },
    {
        "word": "deitar-se",
        "definitions": [
            {
                "text": "Entrar na cama para dormir.",
                "examples": [
                    "Eles deitam-se às onze todas as noites."
                ]
            }
        ],
        "subtext": "deitar-se cedo / deitar-se tarde / deitar-se cansado",
        "classification": "irregular",
        "aspect": "action",
        "v2": "deitei-me",
        "v3": "deitado",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "reflexive": true,
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_026"
    },
    {
        "word": "verificar",
        "definitions": [
            {
                "text": "Examinar ou verificar algo.",
                "examples": [
                    "Verifico os meus e-mails logo de manhã."
                ]
            }
        ],
        "subtext": "verificar e-mails / verificar mensagens / verificar um documento",
        "synonyms": [
            "ver as horas"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "verifiquei",
        "v3": "verificado",
        "theme": "social",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "verificando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_228"
    },
    {
        "word": "apresentar",
        "definitions": [
            {
                "text": "Mostrar ou explicar algo a um grupo.",
                "examples": [
                    "Ela apresenta os resultados todas as sextas-feiras à tarde."
                ]
            }
        ],
        "subtext": "apresentar um relatório / apresentar ideias / apresentar a um cliente",
        "classification": "regular",
        "aspect": "action",
        "v2": "apresentei",
        "v3": "apresentado",
        "theme": "social",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "apresentando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_229"
    },
    {
        "word": "gerir",
        "definitions": [
            {
                "text": "Estar encarregado de pessoas ou de uma situação.",
                "examples": [
                    "Ela gere uma equipa de oito pessoas."
                ]
            }
        ],
        "subtext": "gerir uma equipa / gerir um projeto / gerir o tempo / gerir o stress",
        "classification": "regular",
        "aspect": "action",
        "v2": "geri",
        "v3": "gerido",
        "theme": "social",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "ir",
        "auxiliary": "ter",
        "v4": "geriendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_230"
    },
    {
        "word": "cobrar",
        "definitions": [
            {
                "text": "Pedir uma quantia em dinheiro por um serviço.",
                "examples": [
                    "O mecânico cobrou trezentos euros."
                ]
            }
        ],
        "subtext": "cobrar uma taxa / cobrar por um serviço / cobrar extra",
        "classification": "regular",
        "aspect": "action",
        "v2": "cobrei",
        "v3": "cobrado",
        "theme": "social",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "cobrando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_231"
    },
    {
        "word": "ter meios para",
        "definitions": [
            {
                "text": "Ter dinheiro suficiente para algo.",
                "examples": [
                    "Eles não têm meios para comprar um apartamento no centro da cidade."
                ]
            }
        ],
        "subtext": "ter dinheiro para uma casa / ter meios para algo",
        "synonyms": [
            "poder viajar"
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "tive meios para",
        "v3": "tido",
        "theme": "social",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "ter",
        "v4": "ter meios paiendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_232"
    },
    {
        "word": "dever",
        "definitions": [
            {
                "text": "Ser obrigado a pagar dinheiro a alguém.",
                "examples": [
                    "Ele deve ao banco cinquenta mil euros."
                ]
            }
        ],
        "subtext": "dever dinheiro / dever a alguém / dever muito / não dever nada",
        "classification": "regular",
        "aspect": "stative",
        "v2": "devi",
        "v3": "devido",
        "theme": "social",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "ter",
        "v4": "deviendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_233"
    },
    {
        "word": "visitar",
        "definitions": [
            {
                "text": "Ir ver uma pessoa ou lugar.",
                "examples": [
                    "Ela visita os pais a cada dois fins de semana."
                ]
            }
        ],
        "subtext": "visitar a família / visitar um amigo / visitar uma cidade / visitar regularmente",
        "classification": "regular",
        "aspect": "action",
        "v2": "visitei",
        "v3": "visitado",
        "theme": "social",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "visitando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_234"
    },
    {
        "word": "celebrar",
        "definitions": [
            {
                "text": "Fazer algo agradável para uma ocasião especial.",
                "examples": [
                    "Eles celebram cada aniversário de trabalho juntos."
                ]
            }
        ],
        "subtext": "celebrar um aniversário / celebrar o sucesso / celebrar juntos",
        "classification": "regular",
        "aspect": "action",
        "v2": "celebrei",
        "v3": "celebrado",
        "theme": "social",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "celebrando",
        "lang": "pt",
        "sub_theme": "going_out",
        "id": "pt_starter_social_235"
    },
    {
        "word": "recomendar",
        "definitions": [
            {
                "text": "Sugerir algo como bom ou adequado.",
                "examples": [
                    "Pode recomendar um bom restaurante perto do escritório?"
                ]
            }
        ],
        "subtext": "recomendar um lugar / recomendar alguém / recomendar um filme",
        "classification": "regular",
        "aspect": "action",
        "v2": "recomendei",
        "v3": "recomendado",
        "theme": "social",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "recomendando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_236"
    },
    {
        "word": "magoar",
        "definitions": [
            {
                "text": "Causar dor; ou sentir dor.",
                "examples": [
                    "As minhas costas doem depois de estar sentado o dia todo."
                ]
            }
        ],
        "subtext": "magoar as costas / magoar alguém / magoar-se",
        "synonyms": [
            "dói"
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "magoei",
        "v3": "magoado",
        "theme": "social",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_237"
    },
    {
        "word": "descansar",
        "definitions": [
            {
                "text": "Parar de trabalhar e relaxar para recuperar energia.",
                "examples": [
                    "Ele descansa uma hora depois do almoço todos os dias."
                ]
            }
        ],
        "subtext": "descansar em casa / descansar depois do trabalho / descansar um pouco",
        "synonyms": [
            "precisar de descanso"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "descansei",
        "v3": "descansado",
        "theme": "work",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "descansando",
        "lang": "pt",
        "sub_theme": "office",
        "id": "pt_starter_work_027"
    },
    {
        "word": "recuperar",
        "definitions": [
            {
                "text": "Voltar a ter boa saúde após uma doença ou lesão.",
                "examples": [
                    "Ela está a recuperar de uma lesão nas costas."
                ]
            }
        ],
        "subtext": "recuperar de uma doença / recuperar rapidamente / recuperar totalmente",
        "classification": "regular",
        "aspect": "action",
        "v2": "recuperei",
        "v3": "recuperado",
        "theme": "social",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "recuperando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_238"
    },
    {
        "word": "reservar",
        "definitions": [
            {
                "text": "Reservar um lugar, bilhete ou serviço com antecedência.",
                "examples": [
                    "Reservo sempre hotéis on-line."
                ]
            }
        ],
        "subtext": "reservar um hotel / reservar um voo / reservar uma mesa / reservar com antecedência",
        "classification": "regular",
        "aspect": "action",
        "v2": "reservei",
        "v3": "reservado",
        "theme": "social",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "reservando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_239"
    },
    {
        "word": "fazer as malas",
        "definitions": [
            {
                "text": "Colocar itens num saco ou mala para uma viagem.",
                "examples": [
                    "Ele faz as malas na noite anterior a uma viagem."
                ]
            }
        ],
        "subtext": "fazer as malas",
        "synonyms": [
            "fazer a mala",
            "levar pouca bagagem"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fiz as malas",
        "v3": "feito",
        "theme": "social",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "ter",
        "v4": "fazer as maliendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_240"
    },
    {
        "word": "cancelar",
        "definitions": [
            {
                "text": "Decidir que algo planeado não irá acontecer.",
                "examples": [
                    "Ela teve de cancelar o seu voo devido a doença."
                ]
            }
        ],
        "subtext": "cancelar um voo / cancelar uma reserva / cancelar uma reunião",
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelai",
        "v3": "cancelado",
        "theme": "social",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "cancelando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_241"
    },
    {
        "word": "encomendar",
        "level": "starter",
        "theme": "social",
        "emoji": "📦",
        "subtext": "encomendar comida / encomendar on-line / encomendar material",
        "synonyms": [
            "pedir uma bebida"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Pedir algo formalmente, especialmente comida ou mercadorias.",
                "examples": [
                    "Encomendo sempre o almoço do mesmo sítio perto do escritório."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "encomendei",
        "v3": "encomendado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "encomendando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_242"
    },
    {
        "word": "explicar",
        "level": "starter",
        "theme": "social",
        "emoji": "💡",
        "subtext": "explicar um processo / explicar com clareza / explicar a alguém",
        "form": "verb",
        "definitions": [
            {
                "text": "Tornar algo claro dando detalhes.",
                "examples": [
                    "Ele explica sempre o processo aos novos membros da equipa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "expliquei",
        "v3": "explicado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "explicando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_243"
    },
    {
        "word": "agradecer",
        "level": "starter",
        "theme": "social",
        "emoji": "🙏",
        "subtext": "agradecer a alguém",
        "synonyms": [
            "obrigado por",
            "muito obrigado"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Expressar gratidão a alguém.",
                "examples": [
                    "Ele agradeceu à equipa pelo seu árduo trabalho no projeto."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "agradeci",
        "v3": "agradecido",
        "group": "er",
        "auxiliary": "ter",
        "v4": "agradeciendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_244"
    },
    {
        "word": "relaxar",
        "level": "starter",
        "theme": "social",
        "emoji": "🧘",
        "subtext": "relaxar em casa / relaxar após o trabalho / relaxar nas férias",
        "form": "verb",
        "definitions": [
            {
                "text": "Parar de trabalhar e descansar; tornar-se menos tenso.",
                "examples": [
                    "Relaxo ao fim de semana e nunca verifico e-mails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "relaxei",
        "v3": "relaxado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "relaxando",
        "lang": "pt",
        "sub_theme": "going_out",
        "id": "pt_starter_social_245"
    },
    {
        "word": "reparar",
        "level": "starter",
        "theme": "social",
        "emoji": "🛠️",
        "subtext": "reparar algo / mandar reparar",
        "synonyms": [
            "custos de reparação"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Consertar algo que está partido.",
                "examples": [
                    "O senhorio é lento a reparar as coisas no apartamento."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reparei",
        "v3": "reparado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "reparando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_246"
    },
    {
        "word": "acontecer",
        "level": "starter",
        "theme": "social",
        "emoji": "❔",
        "subtext": "acontecer a alguém / acontecer novamente",
        "synonyms": [
            "o que aconteceu",
            "acontece"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ter lugar; ocorrer.",
                "examples": [
                    "O que aconteceu na reunião? Algo correu mal."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "aconteceu",
        "v3": "acontecido",
        "group": "er",
        "auxiliary": "ter",
        "v4": "aconteciendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_247"
    },
    {
        "word": "parecer",
        "level": "starter",
        "theme": "social",
        "emoji": "🎭",
        "subtext": "parecer bem / parecer preocupado / parecer feliz / parecer-se com",
        "form": "verb",
        "definitions": [
            {
                "text": "Aparecer como algo; dar uma impressão.",
                "examples": [
                    "Ela parece muito confiante nas reuniões com os clientes."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "pareci",
        "v3": "parecido",
        "group": "er",
        "auxiliary": "ter",
        "v4": "pareciendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_248"
    },
    {
        "word": "significar",
        "level": "starter",
        "theme": "social",
        "emoji": "❔",
        "subtext": "significar algo / não foi por mal",
        "synonyms": [
            "o que significa",
            "querer dizer"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ter um significado particular; ter a intenção.",
                "examples": [
                    "O que significa esta cláusula no contrato?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "significou",
        "v3": "significado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_249"
    },
    {
        "word": "seguir",
        "level": "starter",
        "theme": "social",
        "emoji": "👣",
        "subtext": "seguir instruções / seguir alguém",
        "synonyms": [
            "acompanhar as notícias",
            "fazer o acompanhamento"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Vir depois; obedecer a regras ou instruções.",
                "examples": [
                    "Por favor, siga as instruções cuidadosamente. Ele segue as notícias."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "segui",
        "v3": "seguido",
        "group": "ir",
        "auxiliary": "ter",
        "v4": "seguiendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_250"
    },
    {
        "word": "continuar",
        "level": "starter",
        "theme": "social",
        "emoji": "⏩",
        "subtext": "continuar a trabalhar / continuar a fazer / continuar com / continuar uma tarefa",
        "form": "verb",
        "definitions": [
            {
                "text": "Continuar a fazer algo sem parar.",
                "examples": [
                    "Ele continuou a trabalhar depois das seis, apesar de se sentir doente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "continuei",
        "v3": "continuado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "continuando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_251"
    },
    {
        "word": "crescer",
        "level": "starter",
        "theme": "social",
        "emoji": "📈",
        "subtext": "fazer crescer um negócio / crescer rapidamente / crescer em...",
        "synonyms": [
            "tornar-se"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Aumentar de tamanho ou quantidade; desenvolver-se.",
                "examples": [
                    "A empresa cresceu vinte por cento no ano passado."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cresci",
        "v3": "crescido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_252"
    },
    {
        "word": "incluir",
        "level": "starter",
        "theme": "social",
        "emoji": "➕",
        "subtext": "incluir algo / incluir em",
        "synonyms": [
            "não incluído",
            "o preço inclui"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Tornar algo parte de um todo.",
                "examples": [
                    "O preço inclui o pequeno-almoço e as refeições da noite."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "incluí",
        "v3": "incluído",
        "group": "ir",
        "auxiliary": "ter",
        "v4": "incluiendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_253"
    },
    {
        "word": "tornar-se",
        "level": "starter",
        "theme": "social",
        "emoji": "✨",
        "subtext": "tornar-se gestor / tornar-se popular / tornar-se claro / tornar-se importante",
        "form": "verb",
        "definitions": [
            {
                "text": "Começar a ser algo.",
                "examples": [
                    "Ela tornou-se gestora após apenas dois anos no cargo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "tornei-me",
        "v3": "tornado",
        "group": "ar",
        "auxiliary": "ter",
        "reflexive": true,
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_254"
    },
    {
        "word": "pertencer",
        "level": "starter",
        "theme": "social",
        "emoji": "📎",
        "subtext": "pertencer a alguém / pertencer a",
        "synonyms": [
            "sentir-se integrado"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ser propriedade de alguém; ser um membro.",
                "examples": [
                    "Aquela conta pertence ao departamento financeiro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "pertenci",
        "v3": "pertencido",
        "group": "er",
        "auxiliary": "ter",
        "v4": "pertenciendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_255"
    },
    {
        "word": "escolher",
        "level": "starter",
        "theme": "social",
        "emoji": "👉",
        "subtext": "escolher entre / escolher fazer / escolher com cuidado / escolher uma carreira",
        "form": "verb",
        "definitions": [
            {
                "text": "Selecionar entre opções.",
                "examples": [
                    "Ele escolheu trabalhar a tempo parcial para passar mais tempo com a família."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "escolhi",
        "v3": "escolhido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_256"
    },
    {
        "word": "construir",
        "level": "starter",
        "theme": "social",
        "emoji": "🏗️",
        "subtext": "construir uma carreira",
        "synonyms": [
            "formar uma equipa",
            "ganhar experiência",
            "criar confiança"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Construir algo; desenvolver algo ao longo do tempo.",
                "examples": [
                    "Ela construiu uma reputação sólida ao longo de dez anos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "construí",
        "v3": "construído",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_257"
    },
    {
        "word": "produzir",
        "level": "starter",
        "theme": "social",
        "form": "verb",
        "transcription": "pɾu.ðu.ˈziɾ",
        "group": "ir",
        "classification": "irregular",
        "v3": "produzido",
        "auxiliary": "ter",
        "subtext": "produzir resultados",
        "definitions": [
            {
                "text": "Criar ou fabricar algo.",
                "examples": [
                    "Portugal produz muito vinho."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": null,
        "emoji": "🇵🇹",
        "id": "pt_starter_social_258"
    },
    {
        "word": "projetar",
        "level": "starter",
        "theme": "social",
        "form": "verb",
        "transcription": "pɾu.ʒɛ.ˈtaɾ",
        "group": "ar",
        "classification": "regular",
        "v3": "projetado",
        "auxiliary": "ter",
        "subtext": "projetar uma casa",
        "definitions": [
            {
                "text": "Planear ou idear um projeto.",
                "examples": [
                    "Eles projetam viajar pelo mundo."
                ]
            }
        ],
        "v4": "projetando",
        "lang": "pt",
        "sub_theme": null,
        "emoji": "🇵🇹",
        "id": "pt_starter_social_259"
    }
];
    const lang = "pt";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);

})();