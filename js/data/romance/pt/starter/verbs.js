(function() {
    const data = [
    {
        "word": "ser",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👤",
        "subtext": "estar cansado / ser feliz / estar no trabalho / estar pronto",
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
        "subtext": "have a job / have lunch / have a problem / have time",
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
        "subtext": "feel tired / feel better / feel ill / feel stressed",
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
        "subtext": "give advice / give money / give a present / give information",
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
        "subtext": "take the bus / take medicine / take a break / take time",
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
        "subtext": "get a job / get tired / get better / get home",
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
        "subtext": "put on / put away / put the phone down / put money aside",
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
        "subtext": "make coffee / make a decision / make a mistake / make money",
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
        "word": "fazer",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "do work / do the shopping / do exercise / do nothing",
        "form": "verb",
        "definitions": [
            {
                "text": "Realizar uma ação ou atividade.",
                "examples": [
                    "Eu faço o meu trabalho todos os dias.",
                    "Ela faz as compras."
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
        "subtext": "use a phone / use public transport / use a computer / use time",
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
        "subtext": "open a door / open an account / open a shop / open at nine",
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
        "subtext": "close a door / close at six / close an account / close the meeting",
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
        "subtext": "start work / start a meeting / start a new job",
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
        "subtext": "finish work / finish a project / finish early / finish late",
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
        "subtext": "help someone / help with a task / help out / ask for help",
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
        "subtext": "try to do / try hard / try something new / give it a try",
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
        "subtext": "show someone how / show a document / show interest",
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
        "subtext": "find a job / find out / find it difficult / find time",
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
        "subtext": "keep going / keep quiet / keep a record / keep in touch",
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
        "subtext": "lose a job / lose money / lose weight / lose time",
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
        "subtext": "cut costs / cut spending / cut short / cut in half",
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
        "subtext": "turn on / turn off / turn left / turn right",
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
        "subtext": "bring someone / bring food / bring a document / bring up",
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
        "subtext": "say hello / say yes / say no / say something",
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
        "subtext": "tell the truth / tell someone / tell a story / tell someone about",
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
        "subtext": "ask a question / ask for help / ask about / ask someone",
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
        "subtext": "speak to someone / speak English / speak clearly / speak at a meeting",
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
        "word": "falar",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "💬",
        "subtext": "talk to someone / talk about / talk openly / talk for a long time",
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
        "auxiliary": "ter"
    },
    {
        "word": "ligar",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
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
        "subtext": "write an email / write a report / write a letter / write notes",
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
        "subtext": "read a book / read the news / read a contract / read carefully",
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
        "subtext": "listen to music / listen carefully / listen to a podcast",
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
        "subtext": "answer a question / answer the phone / answer an email",
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
        "subtext": "repeat that / repeat yourself / repeat an order",
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
        "subtext": "go to work / go home / go out / go shopping",
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
        "subtext": "come home / come to work / come back / come here",
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
        "subtext": "walk to work / walk home / walk slowly / walk every day",
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
        "subtext": "drive to work / drive a car / drive home / drive carefully",
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
        "subtext": "fly to a city / fly business class / fly economy",
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
        "subtext": "arrive at work / arrive late / arrive on time / arrive home",
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
        "subtext": "leave home / leave work / leave early / leave late",
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
        "subtext": "move to a new place / move in / move out / move house",
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
        "subtext": "return home / return to work / return a call / return from",
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
        "subtext": "travel for work / travel abroad / travel by train",
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
        "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
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
        "subtext": "drink coffee / drink tea / drink water / drink beer",
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
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
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
        "subtext": "cook dinner / cook a meal / cook at home / cook for someone",
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
        "subtext": "clean the flat / clean the kitchen / clean up / clean regularly",
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
        "subtext": "wear a suit / wear glasses / wear casual clothes",
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
        "subtext": "wash the dishes / wash clothes / wash your hands",
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
        "subtext": "buy food / buy a ticket / buy online / buy a house",
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
        "subtext": "pay a bill / pay rent / pay by card / pay in cash",
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
        "subtext": "spend money / spend on food / spend on rent / spend time",
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
        "subtext": "save money / save for a holiday / save for a house",
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
        "subtext": "work from home / work full-time / work hard / work late",
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
        "subtext": "live in a flat / live alone / live with someone / live abroad",
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
        "subtext": "think about / think of / think it is / think carefully",
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
        "subtext": "know someone / know the answer / know a place / know how to",
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
        "subtext": "want a job / want to leave / want more money / want help",
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
        "subtext": "need help / need time / need money / need to rest",
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
        "subtext": "like work / like to travel / like someone / like the idea",
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
        "subtext": "love someone / love doing / love a place / love the idea",
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
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
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
        "subtext": "hope for / hope to do / hope that / I hope so",
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
        "subtext": "remember to do / remember a name / remember clearly",
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
        "subtext": "forget a name / forget to do / forget about / completely forget",
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
        "subtext": "understand a problem / understand someone / understand clearly",
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
        "subtext": "decide to do / decide on / make a decision / hard to decide",
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
        "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
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
        "subtext": "see a doctor / see friends / see the problem / see clearly",
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
        "word": "ouvir",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "hear news / hear from someone / hear a sound / hear clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "Perceber o som através dos ouvidos.",
                "examples": [
                    "Oiço o alarme todas as manhãs.",
                    "Pode ouvir-me?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "ouvi",
        "v3": "ouvido",
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "acordar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "wake up early / wake up late / wake up tired",
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
        "subtext": "watch TV / watch a film / watch the news / watch closely",
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
        "subtext": "look at / look for / look like / look happy",
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
        "subtext": "play sport / play a game / play music / play a role",
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
        "subtext": "run a race / run a business / run out of / run late",
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
        "subtext": "sit down / sit at a desk / sit in a meeting / sit quietly",
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
        "subtext": "stand up / stand in a queue / stand by / stand out",
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
        "subtext": "meet a client / meet a colleague / meet for lunch / meet online",
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "aprender",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "learn a language / learn a skill / learn from / learn how to",
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
        "subtext": "change jobs / change your mind / change the plan / change something",
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
        "subtext": "stop doing / stop working / stop a habit / stop someone",
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
        "subtext": "add some sugar / add to / add up / add a comment",
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
        "subtext": "win a game / win a prize / win an award / win a contract",
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
        "word": "esperar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "wait for someone / wait in a queue / wait a moment",
        "form": "verb",
        "definitions": [
            {
                "text": "Ficar num lugar até que algo aconteça.",
                "examples": [
                    "Ele esperou vinte minutos para a reunião começar."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "esperei",
        "v3": "esperado",
        "group": "ar",
        "auxiliary": "ter"
    },
    {
        "word": "morrer",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "die of / die for / die from / die out",
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
        "subtext": "send an email / send a message / send a report / send a file",
        "group": "irregular",
        "auxiliary": "ter"
    },
    {
        "word": "ficar",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "stay at home / stay in a hotel / stay up late / stay with someone",
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
        "subtext": "fall down / fall off / fall in love / fall asleep",
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
        "subtext": "pass an exam / pass the ball / pass time / pass the sugar",
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
        "subtext": "sell products / sell online / sell at the market / best seller",
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
        "subtext": "pull the door / pull something / pull up / pull away",
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
        "subtext": "push the button / push a cart / push away / push through",
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
        "subtext": "carry a bag / carry notes / carry out / carry on",
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
        "subtext": "break the glass / break a law / take a break / break down",
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
        "subtext": "receive an email / receive a gift / receive payment / receive news",
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
        "subtext": "agree with someone / agree to do / agree on / I agree",
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
        "subtext": "draw a picture / draw a conclusion / draw attention / draw a line",
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
        "subtext": "share a room / share information / share an idea / share with",
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
        "subtext": "smile at someone / a big smile / smile broadly",
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
        "subtext": "cry for help / cry out / start crying / cry about something",
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
        "subtext": "dance to music / go dancing / dance together / slow dance",
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
        "subtext": "sing a song / sing along / sing well / lead singer",
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
        "subtext": "jump high / jump over / jump up / jump in",
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
        "subtext": "go swimming / swim across / swim laps / swim well",
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
        "subtext": "study English / study for an exam / study hard / self-study",
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
        "subtext": "teach someone / teach a subject / teach how to / teach a class",
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
        "subtext": "commute to work / daily commute / long commute / commute by train",
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
        "subtext": "rent a flat / rent a property / rent out a room",
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
        "subtext": "exercise regularly / exercise at the gym / exercise outdoors",
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
        "subtext": "cost a lot / cost money / cost too much / cost less",
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
        "subtext": "invite someone / invite to dinner / invite to a party",
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
        "subtext": "get up early / get up late / get up quickly",
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
        "subtext": "have breakfast at home / have a quick breakfast / skip breakfast",
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
        "word": "voltar",
        "definitions": [
            {
                "text": "Regressar a um lugar.",
                "examples": [
                    "Ela volta do almoço às duas. Ele volta para casa cansado."
                ]
            }
        ],
        "subtext": "come back home / come back late / come back from a trip",
        "classification": "irregular",
        "aspect": "action",
        "v2": "voltei",
        "v3": "voltado",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
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
        "subtext": "go to bed early / go to bed late / go to bed tired",
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
        "subtext": "check emails / check messages / check a document / check the time",
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
        "word": "responder",
        "definitions": [
            {
                "text": "Responder a uma mensagem ou pergunta.",
                "examples": [
                    "Ele responde sempre aos e-mails no mesmo dia."
                ]
            }
        ],
        "subtext": "reply to an email / reply quickly / reply to a message",
        "classification": "regular",
        "aspect": "action",
        "v2": "respondi",
        "v3": "respondido",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "er",
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
        "subtext": "present a report / present ideas / present to a client",
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
        "word": "assistir",
        "definitions": [
            {
                "text": "Ir a um evento ou reunião.",
                "examples": [
                    "Assisto a uma reunião de gestão todas as segundas-feiras."
                ]
            }
        ],
        "subtext": "attend a meeting / attend a course / attend an event",
        "classification": "regular",
        "aspect": "action",
        "v2": "assisti",
        "v3": "assistido",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "ir",
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
        "subtext": "manage a team / manage a project / manage time / manage stress",
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
        "subtext": "charge a fee / charge for a service / charge extra",
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
        "subtext": "afford a house / afford to travel / afford something",
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
        "subtext": "owe money / owe someone / owe a lot / owe nothing",
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
        "word": "ganhar",
        "definitions": [
            {
                "text": "Receber dinheiro pelo trabalho realizado.",
                "examples": [
                    "Ela ganha um bom salário como gestora de projetos."
                ]
            }
        ],
        "subtext": "earn a salary / earn money / earn more / earn enough",
        "classification": "regular",
        "aspect": "action",
        "v2": "ganhei",
        "v3": "ganhado",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "ar",
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
        "subtext": "visit family / visit a friend / visit a city / visit regularly",
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
        "subtext": "celebrate a birthday / celebrate success / celebrate together",
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
        "subtext": "recommend a place / recommend someone / recommend a film",
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
        "subtext": "hurt your back / hurt someone / hurt yourself / it hurts",
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
        "subtext": "rest at home / rest after work / need rest / get some rest",
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
        "subtext": "recover from illness / recover quickly / recover fully",
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
        "subtext": "book a hotel / book a flight / book a table / book in advance",
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
        "subtext": "pack a bag / pack a suitcase / pack lightly",
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
        "subtext": "cancel a flight / cancel a booking / cancel a meeting",
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
        "word": "perder",
        "definitions": [
            {
                "text": "Falhar em apanhar uma ligação de transporte; ou sentir-se triste pela ausência.",
                "examples": [
                    "Ele perdeu o comboio e teve de esperar uma hora."
                ]
            }
        ],
        "subtext": "miss a train / miss a flight / miss someone / miss work",
        "classification": "regular",
        "aspect": "both",
        "v2": "perdi",
        "v3": "perdido",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "ter"
    },
    {
        "word": "encomendar",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "order food / order a drink / order online / order supplies",
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
        "subtext": "explain a process / explain clearly / explain to someone",
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
        "subtext": "thank someone / thank you for / many thanks",
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
        "word": "apresentar",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "introduce yourself / introduce someone / introduce a topic",
        "form": "verb",
        "definitions": [
            {
                "text": "Apresentar alguém a outra pessoa.",
                "examples": [
                    "Ela apresentou-se no início da reunião."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "apresentei",
        "v3": "apresentado",
        "group": "ar",
        "auxiliary": "ter"
    },
    {
        "word": "relaxar",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "relax at home / relax after work / relax on holiday",
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
        "subtext": "repair something / get repaired / repair costs",
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
        "subtext": "what happened / happen to someone / it happens / happen again",
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
        "subtext": "seem fine / seem worried / seem happy / seem like",
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
        "subtext": "mean something / what does it mean / mean to do / I didn't mean to",
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
        "subtext": "follow instructions / follow someone / follow the news / follow up",
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
        "subtext": "continue working / continue to do / continue with / continue a task",
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
        "subtext": "grow a business / grow quickly / grow by / grow into",
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
        "subtext": "include something / include in / not included / price includes",
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
        "subtext": "become a manager / become popular / become clear / become important",
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
        "subtext": "belong to someone / belong in / feel like you belong",
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
        "subtext": "choose between / choose to do / choose carefully / choose a career",
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
        "subtext": "build a career / build a team / build experience / build trust",
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
    }
];
    const lang = "pt";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();