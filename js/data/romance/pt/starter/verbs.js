(function() {
    const data = [
    {
        "word": "ser",
        "level": "starter",
        "theme": "name_greeting_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "ter",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "sentir",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "dar",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "tomar",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "obter",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "pôr",
        "level": "starter",
        "theme": "furniture_objects_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "fazer",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "usar",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "abrir",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "fechar",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "começar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "terminar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "ajudar",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "tentar",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "mostrar",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "encontrar",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "manter",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "perder",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "cortar",
        "level": "starter",
        "theme": "cooking_methods_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "virar",
        "level": "starter",
        "theme": "directions_navigation_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "trazer",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "dizer",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "contar",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "perguntar",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "falar",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "falar com alguém / falar inglês / falar com clareza / falar numa reunião",
        "form": "verb",
        "definitions": [
            {
                "text": "Dizer palavras; comunicar verbalmente.",
                "examples": [
                    "Ele fala francês.",
                    "Ela fala com o seu gerente todos os dias."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "falei",
        "v3": "falado",
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "ligar",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "escrever",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "ler",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "ouvir",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "responder",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "repetir",
        "level": "starter",
        "theme": "classroom_language_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "ir",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "vir",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "caminhar",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "conduzir",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "voar",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "chegar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "partir",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "mover",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "voltar",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "viajar",
        "level": "starter",
        "theme": "public_transport_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "comer",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "beber",
        "level": "starter",
        "theme": "drinks_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "dormir",
        "level": "starter",
        "theme": "times_day_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "cozinhar",
        "level": "starter",
        "theme": "cooking_methods_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "limpar",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "vestir",
        "level": "starter",
        "theme": "items_of_clothing_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "lavar",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "comprar",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "pagar",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "gastar",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "poupar",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "trabalhar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "viver",
        "level": "starter",
        "theme": "address_location_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "pensar",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "saber",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "querer",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "precisar",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "gostar",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "amar",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "odiar",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "esperar",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "lembrar",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "esquecer",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "entender",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "decidir",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "desfrutar",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "ver",
        "level": "starter",
        "theme": "body_parts_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "acordar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "assistir",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "olhar",
        "level": "starter",
        "theme": "physical_appearance_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "jogar",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "correr",
        "level": "starter",
        "theme": "common_sports_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "sentar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "estar de pé",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "conhecer",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "aprender",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "mudar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "parar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "adicionar",
        "level": "starter",
        "theme": "numbers_100_999_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "ganhar",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "morrer",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "enviar",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "ficar",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "cair",
        "level": "starter",
        "theme": "seasons_climate_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "passar",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "vender",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "puxar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "empurrar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "levar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "quebrar",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "receber",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "concordar",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "desenhar",
        "level": "starter",
        "theme": "cinema_film_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "partilhar",
        "level": "starter",
        "theme": "family_life_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "sorrir",
        "level": "starter",
        "theme": "physical_appearance_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "chorar",
        "level": "starter",
        "theme": "surprise_interest_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "dançar",
        "level": "starter",
        "theme": "music_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "cantar",
        "level": "starter",
        "theme": "music_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "saltar",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "nadar",
        "level": "starter",
        "theme": "common_sports_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "estudar",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "ensinar",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "viajar diariamente",
        "level": "starter",
        "theme": "public_transport_A1",
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
        "group": "regular",
        "auxiliary": "ter"
    },
    {
        "word": "alugar",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "exercitar",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "custar",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "convidar",
        "level": "starter",
        "theme": "family_life_A1",
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
        "auxiliary": "ter"
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
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "ter"
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
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "ter"
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
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "ter"
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
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter"
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
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter"
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
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "ir",
        "auxiliary": "ter"
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
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter"
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
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": "ter"
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
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "ter"
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
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter"
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
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter"
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
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter"
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
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "ter"
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
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter"
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
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter"
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
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter"
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
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": "ter"
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
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "ter"
    },
    {
        "word": "encomendar",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "explicar",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "agradecer",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "relaxar",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "reparar",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "acontecer",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "parecer",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "significar",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "seguir",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "continuar",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "crescer",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "incluir",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "tornar-se",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "pertencer",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "ter"
    },
    {
        "word": "escolher",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "construir",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "produzir",
        "level": "starter",
        "theme": "work_employment_A1",
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
        ]
    },
    {
        "word": "projetar",
        "level": "starter",
        "theme": "work_employment_A1",
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
        ]
    }
];

    const lang = "pt";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
})();