(function() {
    const data = [
    {
        "word": "alto",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "baixo",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "Uma pessoa ou coisa que é grande de baixo para cima.",
                "examples": [
                    "Ele é muito alto.",
                    "Aquele edifício é alto."
                ]
            }
        ],
        "subtext": "um edifício alto / alto o suficiente",
        "synonyms": ["uma pessoa alta"],
        "comparative": "mais alto",
        "superlative": "o mais alto",
        "feminine": "alta",
        "plural": "altos",
        "femininePlural": "altas"
    },
    {
        "word": "baixo",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "alto",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "Uma pessoa ou coisa que não é alta.",
                "examples": [
                    "Ela é baixa.",
                    "O lápis é curto."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["uma viagem curta", "cabelo curto", "curto demais"],
        "comparative": "mais baixo",
        "superlative": "o mais baixo",
        "feminine": "baixa",
        "plural": "baixos",
        "femininePlural": "baixas"
    },
    {
        "word": "jovem",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "velho",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "Que viveu ou existiu por pouco tempo.",
                "examples": [
                    "Ele é um homem jovem."
                ]
            }
        ],
        "subtext": "pessoa jovem / jovem profissional / jovem de coração",
        "comparative": "mais jovem",
        "superlative": "o mais jovem",
        "feminine": "jovem",
        "plural": "jovens",
        "femininePlural": "jovens"
    },
    {
        "word": "velho",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "jovem",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "Que viveu ou existiu por muito tempo.",
                "examples": [
                    "Este é um livro velho."
                ]
            }
        ],
        "subtext": "velho amigo / velhos hábitos / muito velho",
        "comparative": "mais velho",
        "superlative": "o mais velho",
        "feminine": "velha",
        "plural": "velhos",
        "femininePlural": "velhas"
    },
    {
        "word": "ensolarado",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que tem muita luz do sol.",
                "examples": [
                    "Está um dia ensolarado."
                ]
            }
        ],
        "subtext": "dia ensolarado / tempo ensolarado / período ensolarado",
        "comparative": "mais ensolarado",
        "superlative": "o mais ensolarado",
        "feminine": "ensolarada",
        "plural": "ensolarados",
        "femininePlural": "ensolaradas"
    },
    {
        "word": "chuvoso",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que tem muita chuva.",
                "examples": [
                    "Está um dia chuvoso."
                ]
            }
        ],
        "subtext": "dia chuvoso / tempo chuvoso",
        "synonyms": ["época das chuvas"],
        "comparative": "mais chuvoso",
        "superlative": "o mais chuvoso",
        "feminine": "chuvosa",
        "plural": "chuvosos",
        "femininePlural": "chuvosas"
    },
    {
        "word": "quente",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "frio",
        "oppositeEmoji": "❄️",
        "subtext": "muito quente / tempo quente / uma bebida quente / quente demais",
        "definitions": [
            {
                "text": "Que tem uma temperatura alta.",
                "examples": [
                    "O café está quente."
                ]
            }
        ],
        "comparative": "mais quente",
        "superlative": "o mais quente",
        "feminine": "quente",
        "plural": "quentes",
        "femininePlural": "quentes"
    },
    {
        "word": "frio",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "quente",
        "oppositeEmoji": "🔥",
        "subtext": "muito frio / tempo frio / frio demais",
        "synonyms": ["manhã fria", "uma bebida fria"],
        "definitions": [
            {
                "text": "Que tem uma temperatura baixa.",
                "examples": [
                    "A água está fria."
                ]
            }
        ],
        "comparative": "mais frio",
        "superlative": "o mais frio",
        "feminine": "fria",
        "plural": "frios",
        "femininePlural": "frias"
    },
    {
        "word": "comum",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "especial",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Normal ou habitual; não especial.",
                "examples": [
                    "Foi um dia comum."
                ]
            }
        ],
        "subtext": "dia comum / vida comum / nada fora do comum",
        "comparative": "mais comum",
        "superlative": "o mais comum",
        "feminine": "comum",
        "plural": "comuns",
        "femininePlural": "comuns"
    },
    {
        "word": "barato",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "caro",
        "oppositeEmoji": "💎",
        "subtext": "preço baixo, barato / voo barato / muito barato",
        "synonyms": ["simples e bom"],
        "definitions": [
            {
                "text": "Não caro; de baixo preço.",
                "examples": [
                    "Este café é barato."
                ]
            }
        ],
        "comparative": "mais barato",
        "superlative": "o mais barato",
        "feminine": "barata",
        "plural": "baratos",
        "femininePlural": "baratas"
    },
    {
        "word": "caro",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "barato",
        "oppositeEmoji": "🏷️",
        "subtext": "caro / muito caro / gosto caro / caro demais",
        "definitions": [
            {
                "text": "Que custa muito dinheiro.",
                "examples": [
                    "Aquele carro é caro."
                ]
            }
        ],
        "comparative": "mais caro",
        "superlative": "o mais caro",
        "feminine": "cara",
        "plural": "caros",
        "femininePlural": "caras"
    },
    {
        "word": "bom",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "mau",
        "oppositeEmoji": "👎",
        "subtext": "bom valor",
        "synonyms": ["ótimo", "agradável", "boa ideia", "boa sorte"],
        "definitions": [
            {
                "text": "De alta qualidade ou agradável.",
                "examples": [
                    "Este é um bom trabalho."
                ]
            }
        ],
        "comparative": "melhor",
        "superlative": "o melhor",
        "feminine": "boa",
        "plural": "bons",
        "femininePlural": "boas"
    },
    {
        "word": "mau",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "bom",
        "oppositeEmoji": "👍",
        "subtext": "",
        "synonyms": ["terrível", "horrível", "más notícias", "má sorte", "má decisão"],
        "definitions": [
            {
                "text": "Não bom; desagradável.",
                "examples": [
                    "O tempo está mau hoje."
                ]
            }
        ],
        "comparative": "pior",
        "superlative": "o pior",
        "feminine": "má",
        "plural": "maus",
        "femininePlural": "más"
    },
    {
        "word": "grande",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "pequeno",
        "oppositeEmoji": "🐭",
        "subtext": "grande, enorme / uma casa grande / um grande problema / grande o suficiente",
        "definitions": [
            {
                "text": "De tamanho grande.",
                "examples": [
                    "É um escritório grande."
                ]
            }
        ],
        "comparative": "mais grande",
        "superlative": "o maior",
        "feminine": "grande",
        "plural": "grandes",
        "femininePlural": "grandes"
    },
    {
        "word": "pequeno",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "grande",
        "oppositeEmoji": "🐘",
        "subtext": "pequeno, minúsculo / um apartamento pequeno / um salário pequeno / pequeno demais",
        "definitions": [
            {
                "text": "De tamanho pequeno.",
                "examples": [
                    "Ela tem um apartamento pequeno."
                ]
            }
        ],
        "comparative": "mais pequeno",
        "superlative": "o menor",
        "feminine": "pequena",
        "plural": "pequenos",
        "femininePlural": "pequenas"
    },
    {
        "word": "fácil",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difícil",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "Não difícil.",
                "examples": [
                    "O teste é fácil."
                ]
            }
        ],
        "subtext": "fácil de fazer / simples e fácil / não é fácil",
        "comparative": "mais fácil",
        "superlative": "o mais fácil",
        "feminine": "fácil",
        "plural": "fáceis",
        "femininePlural": "fáceis"
    },
    {
        "word": "difícil",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "fácil",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Duro de fazer ou entender.",
                "examples": [
                    "Este trabalho é difícil."
                ]
            }
        ],
        "subtext": "difícil de fazer / muito difícil / achar difícil",
        "comparative": "mais difícil",
        "superlative": "o mais difícil",
        "feminine": "difícil",
        "plural": "difíceis",
        "femininePlural": "difíceis"
    },
    {
        "word": "feliz",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "sentir-se feliz / feliz com algo / um dia feliz",
        "synonyms": ["alegre", "contente"],
        "definitions": [
            {
                "text": "Que sente prazer ou alegria.",
                "examples": [
                    "Estou feliz hoje."
                ]
            }
        ],
        "comparative": "mais feliz",
        "superlative": "o mais feliz",
        "feminine": "feliz",
        "plural": "felizes",
        "femininePlural": "felizes"
    },
    {
        "word": "cansado",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "sentir-se cansado / cansado de algo / muito cansado",
        "synonyms": ["sonolento", "exausto"],
        "definitions": [
            {
                "text": "Que precisa de descanso ou sono.",
                "examples": [
                    "Estou muito cansado depois do trabalho."
                ]
            }
        ],
        "comparative": "mais cansado",
        "superlative": "o mais cansado",
        "feminine": "cansada",
        "plural": "cansados",
        "femininePlural": "cansadas"
    },
    {
        "word": "a tempo inteiro",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "a tempo parcial",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Que trabalha o número total de horas.",
                "examples": [
                    "Ela tem um emprego a tempo inteiro."
                ]
            }
        ],
        "subtext": "trabalho a tempo inteiro / funcionário a tempo inteiro",
        "synonyms": ["tempo integral"],
        "comparative": null,
        "superlative": null,
        "feminine": "a tempo inteiro",
        "plural": "a tempo inteiro",
        "femininePlural": "a tempo inteiro"
    },
    {
        "word": "a tempo parcial",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "a tempo inteiro",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Que trabalha menos horas que uma semana padrão.",
                "examples": [
                    "Ele trabalha a tempo parcial aos sábados."
                ]
            }
        ],
        "subtext": "trabalho a tempo parcial / emprego a tempo parcial / estudante a tempo parcial",
        "comparative": null,
        "superlative": null,
        "feminine": "a tempo parcial",
        "plural": "a tempo parcial",
        "femininePlural": "a tempo parcial"
    },
    {
        "word": "limpo",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "sujo",
        "oppositeEmoji": "💩",
        "subtext": "arrumado, limpo / um quarto limpo / manter limpo",
        "synonyms": ["roupas limpas"],
        "definitions": [
            {
                "text": "Livre de sujidade.",
                "examples": [
                    "O apartamento está limpo agora."
                ]
            }
        ],
        "comparative": "mais limpo",
        "superlative": "o mais limpo",
        "feminine": "limpa",
        "plural": "limpos",
        "femininePlural": "limpas"
    },
    {
        "word": "saudável",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔",
        "subtext": "dieta saudável",
        "synonyms": ["bem", "em forma"],
        "definitions": [
            {
                "text": "Bom para o corpo; não doente.",
                "examples": [
                    "Os vegetais são comida saudável."
                ]
            }
        ],
        "comparative": "mais saudável",
        "superlative": "o mais saudável",
        "feminine": "saudável",
        "plural": "saudáveis",
        "femininePlural": "saudáveis"
    },
    {
        "word": "doente",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "well",
        "oppositeEmoji": "💪",
        "subtext": "doente",
        "synonyms": ["sentir-se mal"],
        "definitions": [
            {
                "text": "Não bem; doente.",
                "examples": [
                    "Sinto-me doente hoje."
                ]
            }
        ],
        "comparative": "mais doente",
        "superlative": "o mais doente",
        "feminine": "doente",
        "plural": "doentes",
        "femininePlural": "doentes"
    },
    {
        "word": "on-line",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Usando a internet.",
                "examples": [
                    "Compro comida on-line às vezes."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["compras online", "curso online", "manter-se online"],
        "comparative": null,
        "superlative": null,
        "feminine": "on-line",
        "plural": "on-line",
        "femininePlural": "on-line"
    },
    {
        "word": "sozinho",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "together",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Sem outras pessoas; por si mesmo.",
                "examples": [
                    "Ela vive sozinha."
                ]
            }
        ],
        "subtext": "viver sozinho / viajar sozinho / sentir-se sozinho",
        "comparative": "mais sozinho",
        "superlative": "o mais sozinho",
        "feminine": "sozinha",
        "plural": "sozinhos",
        "femininePlural": "sozinhas"
    },
    {
        "word": "relaxado",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "estressado",
        "oppositeEmoji": "😫",
        "subtext": "sentir-se relaxado",
        "synonyms": ["calmo"],
        "definitions": [
            {
                "text": "Calmo; não preocupado ou estressado.",
                "examples": [
                    "Sinto-me relaxado ao fim de semana."
                ]
            }
        ],
        "comparative": "mais relaxado",
        "superlative": "o mais relaxado",
        "feminine": "relaxada",
        "plural": "relaxados",
        "femininePlural": "relaxadas"
    },
    {
        "word": "preocupado",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "",
        "synonyms": ["anxious"],
        "definitions": [
            {
                "text": "Que sente ansiedade por algo que possa acontecer.",
                "examples": [
                    "Ela está preocupada com o trabalho."
                ]
            }
        ],
        "comparative": "mais preocupado",
        "superlative": "o mais preocupado",
        "feminine": "preocupada",
        "plural": "preocupados",
        "femininePlural": "preocupadas"
    },
    {
        "word": "ocupado",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "muito ocupado / dia ocupado / ocupado demais",
        "synonyms": ["agenda cheia"],
        "definitions": [
            {
                "text": "Que tem muitas coisas para fazer.",
                "examples": [
                    "Estou muito ocupado esta semana."
                ]
            }
        ],
        "comparative": "mais ocupado",
        "superlative": "o mais ocupado",
        "feminine": "ocupada",
        "plural": "ocupados",
        "femininePlural": "ocupadas"
    },
    {
        "word": "útil",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "inútil",
        "oppositeEmoji": "🗑️",
        "subtext": "útil",
        "synonyms": ["prático"],
        "definitions": [
            {
                "text": "Útil; que tem um propósito prático.",
                "examples": [
                    "Um carro é muito útil no campo."
                ]
            }
        ],
        "comparative": "mais útil",
        "superlative": "o mais útil",
        "feminine": "útil",
        "plural": "úteis",
        "femininePlural": "úteis"
    },
    {
        "word": "importante",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "reunião importante / muito importante / mais importante",
        "synonyms": ["essencial"],
        "definitions": [
            {
                "text": "Que tem grande valor ou efeito.",
                "examples": [
                    "Dormir é muito importante."
                ]
            }
        ],
        "comparative": "mais importante",
        "superlative": "o mais importante",
        "feminine": "importante",
        "plural": "importantes",
        "femininePlural": "importantes"
    },
    {
        "word": "vermelho",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "vermelho escuro, vermelho vivo / rosto vermelho / sinal vermelho",
        "synonyms": ["vinho tinto"],
        "definitions": [
            {
                "text": "Da cor do sangue.",
                "examples": [
                    "Ela tem uma mala vermelha."
                ]
            }
        ],
        "comparative": "mais vermelho",
        "superlative": "o mais vermelho",
        "feminine": "vermelha",
        "plural": "vermelhos",
        "femininePlural": "vermelhas"
    },
    {
        "word": "azul",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "azul claro, azul escuro / azul escuro / azul claro / céu azul",
        "definitions": [
            {
                "text": "Da cor de um céu limpo.",
                "examples": [
                    "O carro dele é azul."
                ]
            }
        ],
        "comparative": "mais azul",
        "superlative": "o mais azul",
        "feminine": "azul",
        "plural": "azuis",
        "femininePlural": "azuis"
    },
    {
        "word": "verde",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "verde claro, verde escuro / energia verde / espaço verde / verde vivo",
        "definitions": [
            {
                "text": "Da cor da erva.",
                "examples": [
                    "Ela veste um vestido verde."
                ]
            }
        ],
        "comparative": "mais verde",
        "superlative": "o mais verde",
        "feminine": "verde",
        "plural": "verdes",
        "femininePlural": "verdes"
    },
    {
        "word": "branco",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "branco puro, branco neve / vinho branco / branco sujo / branco brilhante",
        "definitions": [
            {
                "text": "Da cor da neve.",
                "examples": [
                    "As paredes são brancas."
                ]
            }
        ],
        "comparative": "mais branco",
        "superlative": "o mais branco",
        "feminine": "branca",
        "plural": "brancos",
        "femininePlural": "brancas"
    },
    {
        "word": "preto",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "preto carvão, escuro / café preto / preto intenso",
        "synonyms": ["mercado negro"],
        "definitions": [
            {
                "text": "Da cor mais escura.",
                "examples": [
                    "Ele veste um casaco preto."
                ]
            }
        ],
        "comparative": "mais preto",
        "superlative": "o mais preto",
        "feminine": "preta",
        "plural": "pretos",
        "femininePlural": "pretas"
    },
    {
        "word": "amarelo",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "amarelo vivo, limão / amarelo pálido / amarelo brilhante",
        "synonyms": ["luz amarela"],
        "definitions": [
            {
                "text": "Da cor do sol.",
                "examples": [
                    "Ela tem um guarda-chuva amarelo."
                ]
            }
        ],
        "comparative": "mais amarelo",
        "superlative": "o mais amarelo",
        "feminine": "amarela",
        "plural": "amarelos",
        "femininePlural": "amarelas"
    },
    {
        "word": "grátis",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "grátis, brinde",
        "synonyms": ["tempo livre", "sem custos", "livre para fazer"],
        "definitions": [
            {
                "text": "Que não custa dinheiro.",
                "examples": [
                    "O museu é grátis aos domingos."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "grátis",
        "plural": "grátis",
        "femininePlural": "grátis"
    },
    {
        "word": "aberto",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "fechado",
        "oppositeEmoji": "🔒",
        "subtext": "aberto, aberto ao público / aberto a ideias",
        "synonyms": ["porta aberta", "escancarado"],
        "definitions": [
            {
                "text": "Não fechado.",
                "examples": [
                    "A loja está aberta até às oito."
                ]
            }
        ],
        "comparative": "mais aberto",
        "superlative": "o mais aberto",
        "feminine": "aberta",
        "plural": "abertos",
        "femininePlural": "abertas"
    },
    {
        "word": "fechado",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "aberto",
        "oppositeEmoji": "📖",
        "subtext": "fechado, fechado temporariamente / fechado para almoço",
        "synonyms": ["mente fechada", "porta fechada"],
        "definitions": [
            {
                "text": "Não aberto.",
                "examples": [
                    "O banco está fechado aos domingos."
                ]
            }
        ],
        "comparative": "mais fechado",
        "superlative": "o mais fechado",
        "feminine": "fechada",
        "plural": "fechados",
        "femininePlural": "fechadas"
    },
    {
        "word": "grande",
        "level": "starter",
        "form": "adjective",
        "subtext": "uma cidade grande / uma empresa grande / uma grande quantidade",
        "definitions": [
            {
                "text": "De tamanho ou quantidade superior à média.",
                "examples": [
                    "Lisboa é uma cidade muito grande."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais grande",
        "superlative": "o maior",
        "feminine": "grande",
        "plural": "grandes",
        "femininePlural": "grandes"
    },
    {
        "word": "pequeno",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["a little bit", "a little money", "too little"],
        "definitions": [
            {
                "text": "Pequeno em tamanho.",
                "examples": [
                    "Ele conduz um carro pequeno."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais pequeno",
        "superlative": "o menor",
        "feminine": "pequena",
        "plural": "pequenos",
        "femininePlural": "pequenas"
    },
    {
        "word": "longo",
        "level": "starter",
        "form": "adjective",
        "subtext": "um longo dia",
        "synonyms": ["uma longa viagem", "muito tempo"],
        "definitions": [
            {
                "text": "De grande comprimento.",
                "examples": [
                    "Ela tem uma viagem longa todos os dias."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais longo",
        "superlative": "o mais longo",
        "feminine": "longa",
        "plural": "longos",
        "femininePlural": "longas"
    },
    {
        "word": "alto",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["high price", "high rent", "high quality"],
        "definitions": [
            {
                "text": "De altura ou nível superior à média.",
                "examples": [
                    "A renda nesta zona é muito alta."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais alto",
        "superlative": "o mais alto",
        "feminine": "alta",
        "plural": "altos",
        "femininePlural": "alta"
    },
    {
        "word": "baixo",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["low price", "low salary", "low quality"],
        "definitions": [
            {
                "text": "De altura ou nível inferior à média.",
                "examples": [
                    "O salário é demasiado baixo."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais baixo",
        "superlative": "o mais baixo",
        "feminine": "baixa",
        "plural": "baixos",
        "femininePlural": "baixas"
    },
    {
        "word": "cheio",
        "level": "starter",
        "form": "adjective",
        "subtext": "cheio de gente",
        "synonyms": ["tempo integral", "um dia inteiro"],
        "definitions": [
            {
                "text": "Que contém tanto quanto possível.",
                "examples": [
                    "Sinto-me cheio depois do almoço."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais cheio",
        "superlative": "o mais cheio",
        "feminine": "cheia",
        "plural": "cheios",
        "femininePlural": "cheias"
    },
    {
        "word": "vazio",
        "level": "starter",
        "form": "adjective",
        "subtext": "um apartamento vazio / um quarto vazio / quase vazio",
        "definitions": [
            {
                "text": "Que não contém nada.",
                "examples": [
                    "O escritório está vazio aos fins de semana."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais vazio",
        "superlative": "o mais vazio",
        "feminine": "vazia",
        "plural": "vazios",
        "femininePlural": "vazias"
    },
    {
        "word": "morno",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["warm weather", "a warm welcome", "keep warm"],
        "definitions": [
            {
                "text": "Ligeiramente quente.",
                "examples": [
                    "O escritório está morno e confortável."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "mais morno",
        "superlative": "o mais morno",
        "feminine": "morna",
        "plural": "mornos",
        "femininePlural": "mornas"
    },
    {
        "word": "fresco",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["cool weather", "a cool drink", "stay cool"],
        "definitions": [
            {
                "text": "Ligeiramente frio.",
                "examples": [
                    "Ela prefere tempo fresco para trabalhar."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "mais fresco",
        "superlative": "o mais fresco",
        "feminine": "fresca",
        "plural": "frescos",
        "femininePlural": "frescas"
    },
    {
        "word": "molhado",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["wet weather", "wet clothes", "get wet"],
        "definitions": [
            {
                "text": "Coberto com água ou líquido.",
                "examples": [
                    "O casaco dele está molhado da chuva."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "mais molhado",
        "superlative": "o mais molhado",
        "feminine": "molhada",
        "plural": "molhados",
        "femininePlural": "molhadas"
    },
    {
        "word": "seco",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["dry weather", "dry skin", "keep dry"],
        "definitions": [
            {
                "text": "Sem água ou líquido.",
                "examples": [
                    "O armazém deve estar seco."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "mais seco",
        "superlative": "o mais seco",
        "feminine": "seca",
        "plural": "secos",
        "femininePlural": "secas"
    },
    {
        "word": "sujo",
        "level": "starter",
        "theme": "household_tasks_A1",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["mãos sujas", "roupas sujas", "sujar-se"],
        "definitions": [
            {
                "text": "Coberto de sujidade.",
                "examples": [
                    "As mãos dele estão sujas."
                ]
            }
        ],
        "comparative": "mais sujo",
        "superlative": "o mais sujo",
        "feminine": "suja",
        "plural": "sujos",
        "femininePlural": "sujas"
    },
    {
        "word": "duro",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["trabalho árduo", "uma decisão difícil", "difícil demais"],
        "definitions": [
            {
                "text": "Firme e sólido; difícil.",
                "examples": [
                    "A cadeira é muito dura."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais duro",
        "superlative": "o mais duro",
        "feminine": "dura",
        "plural": "duros",
        "femininePlural": "duras"
    },
    {
        "word": "macio",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["soft light", "soft music", "soft skills"],
        "definitions": [
            {
                "text": "Não duro; gentil ao toque.",
                "examples": [
                    "O sofá é muito macio."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais macio",
        "superlative": "o mais macio",
        "feminine": "macia",
        "plural": "macios",
        "femininePlural": "macias"
    },
    {
        "word": "pesado",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["heavy traffic", "heavy rain", "too heavy"],
        "definitions": [
            {
                "text": "De grande peso; difícil de transportar.",
                "examples": [
                    "A mala é muito pesada."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais pesado",
        "superlative": "o mais pesado",
        "feminine": "pesada",
        "plural": "pesados",
        "femininePlural": "pesadas"
    },
    {
        "word": "leve",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["light rain", "light traffic", "a light meal"],
        "definitions": [
            {
                "text": "Não pesado.",
                "examples": [
                    "Ela leva uma mala leve."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais leve",
        "superlative": "o mais leve",
        "feminine": "leve",
        "plural": "leves",
        "femininePlural": "leves"
    },
    {
        "word": "castanho",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["dark brown", "light brown", "brown bread"],
        "definitions": [
            {
                "text": "Da cor da madeira ou da terra.",
                "examples": [
                    "Ela tem olhos castanhos."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "mais castanho",
        "superlative": "o mais castanho",
        "feminine": "castanha",
        "plural": "castanhos",
        "femininePlural": "castanhas"
    },
    {
        "word": "cinzento",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["grey area", "grey sky", "pale grey"],
        "definitions": [
            {
                "text": "De uma cor entre o branco e o preto.",
                "examples": [
                    "Ele tem cabelo cinzento."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "mais cinzento",
        "superlative": "o mais cinzento",
        "feminine": "cinzenta",
        "plural": "cinzentos",
        "femininePlural": "cinzentas"
    },
    {
        "word": "cor-de-rosa",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["light pink", "bright pink", "hot pink"],
        "definitions": [
            {
                "text": "De uma cor vermelha pálida.",
                "examples": [
                    "Ela prefere o cor-de-rosa ao vermelho."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "mais cor-de-rosa",
        "superlative": "o mais cor-de-rosa",
        "feminine": "cor-de-rosa",
        "plural": "cor-de-rosa",
        "femininePlural": "cor-de-rosa"
    },
    {
        "word": "laranja",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["bright orange", "dark orange", "orange light"],
        "definitions": [
            {
                "text": "Da cor de uma laranja.",
                "examples": [
                    "Ele comprou um casaco laranja."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "mais laranja",
        "superlative": "o mais laranja",
        "feminine": "laranja",
        "plural": "laranjas",
        "femininePlural": "laranjas"
    },
    {
        "word": "ótimo",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["uma excelente ideia", "uma excelente oportunidade", "excelente valor"],
        "definitions": [
            {
                "text": "Extremamente bom.",
                "examples": [
                    "Ela é uma ótima gestora."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "melhor",
        "superlative": "o melhor",
        "feminine": "ótima",
        "plural": "ótimos",
        "femininePlural": "ótimas"
    },
    {
        "word": "simpático",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["um dia agradável", "um lugar agradável", "uma pessoa agradável"],
        "definitions": [
            {
                "text": "Agradável ou amável.",
                "examples": [
                    "O novo escritório é muito agradável."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "mais simpático",
        "superlative": "o mais simpático",
        "feminine": "simpática",
        "plural": "simpáticos",
        "femininePlural": "simpáticas"
    },
    {
        "word": "maravilhoso",
        "level": "starter",
        "form": "adjective",
        "subtext": "um tempo maravilhoso",
        "synonyms": ["uma oportunidade maravilhosa"],
        "definitions": [
            {
                "text": "Extremamente bom; que causa deleite.",
                "examples": [
                    "Tinham uma equipa maravilhosa."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "mais maravilhoso",
        "superlative": "o mais maravilhoso",
        "feminine": "maravilhosa",
        "plural": "maravilhosos",
        "femininePlural": "maravilhosas"
    },
    {
        "word": "terrível",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["terrible weather", "a terrible mistake", "terrible news"],
        "definitions": [
            {
                "text": "Extremamente mau.",
                "examples": [
                    "O trânsito esta manhã foi terrível."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "mais terrível",
        "superlative": "o mais terrível",
        "feminine": "terrível",
        "plural": "terríveis",
        "femininePlural": "terríveis"
    },
    {
        "word": "horrível",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["awful weather", "awful news", "simply awful"],
        "definitions": [
            {
                "text": "Muito mau ou desagradável.",
                "examples": [
                    "O ruído é horrível."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "mais horrível",
        "superlative": "o mais horrível",
        "feminine": "horrível",
        "plural": "horríveis",
        "femininePlural": "horríveis"
    },
    {
        "word": "incrível",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["an amazing result", "an amazing offer", "truly amazing"],
        "definitions": [
            {
                "text": "Que causa grande surpresa ou admiração.",
                "examples": [
                    "Ela deu uma apresentação incrível."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "mais incrível",
        "superlative": "o mais incrível",
        "feminine": "incrível",
        "plural": "incríveis",
        "femininePlural": "incríveis"
    },
    {
        "word": "fantástico",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["fantastic news", "a fantastic opportunity", "truly fantastic"],
        "definitions": [
            {
                "text": "Extremamente bom.",
                "examples": [
                    "O novo sistema funciona de forma fantástica."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "mais fantástico",
        "superlative": "o mais fantástico",
        "feminine": "fantástica",
        "plural": "fantásticos",
        "femininePlural": "fantásticas"
    },
    {
        "word": "triste",
        "level": "starter",
        "form": "adjective",
        "subtext": "sentir-se triste / uma situação triste / profundamente triste",
        "definitions": [
            {
                "text": "Que se sente infeliz ou pesaroso.",
                "examples": [
                    "Ele ficou triste por deixar a empresa."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "mais triste",
        "superlative": "o mais triste",
        "feminine": "triste",
        "plural": "tristes",
        "femininePlural": "tristes"
    },
    {
        "word": "faminto",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["ter fome", "muita fome", "passar fome"],
        "definitions": [
            {
                "text": "Que precisa de comida.",
                "examples": [
                    "Estou com fome, já são duas horas."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "mais faminto",
        "superlative": "o mais faminto",
        "feminine": "faminta",
        "plural": "famintos",
        "femininePlural": "famintas"
    },
    {
        "word": "zangado",
        "level": "starter",
        "form": "adjective",
        "subtext": "sentir-se zangado / zangado com alguém / muito zangado",
        "definitions": [
            {
                "text": "Que sente um forte desagrado.",
                "examples": [
                    "Ela estava zangada com a decisão."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "mais zangado",
        "superlative": "o mais zangado",
        "feminine": "zangada",
        "plural": "zangados",
        "femininePlural": "zangadas"
    },
    {
        "word": "entediado",
        "level": "starter",
        "form": "adjective",
        "subtext": "sentir-se entediado / entediado com",
        "synonyms": ["entedia-se facilmente"],
        "definitions": [
            {
                "text": "Que se sente sem interesse.",
                "examples": [
                    "Ele sente-se entediado em reuniões longas."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "mais entediado",
        "superlative": "o mais entediado",
        "feminine": "entediada",
        "plural": "entediados",
        "femininePlural": "entediadas"
    },
    {
        "word": "entusiasmado",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "subtext": "sentir-se entusiasmado / entusiasmado com / muito entusiasmado",
        "definitions": [
            {
                "text": "Que sente entusiasmo.",
                "examples": [
                    "Ela está entusiasmada com o novo emprego."
                ]
            }
        ],
        "comparative": "mais entusiasmado",
        "superlative": "o mais entusiasmado",
        "feminine": "entusiasmada",
        "plural": "entusiasmados",
        "femininePlural": "entusiasmadas"
    },
    {
        "word": "assustado",
        "level": "starter",
        "form": "adjective",
        "subtext": "muito assustado",
        "synonyms": ["medo de", "sentir medo"],
        "definitions": [
            {
                "text": "Que sente medo.",
                "examples": [
                    "Ele tem medo de cometer erros."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "mais assustado",
        "superlative": "o mais assustado",
        "feminine": "assustada",
        "plural": "assustados",
        "femininePlural": "assustadas"
    },
    {
        "word": "arrependido",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["sentir muito", "lamento por", "desculpe por"],
        "definitions": [
            {
                "text": "Que sente pesar ou tristeza.",
                "examples": [
                    "Ela sente muito pelo atraso."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "mais arrependido",
        "superlative": "o mais arrependido",
        "feminine": "arrependida",
        "plural": "arrependidos",
        "femininePlural": "arrependidas"
    },
    {
        "word": "correto",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["resposta certa", "momento certo", "toda a razão"],
        "definitions": [
            {
                "text": "Correto; adequado.",
                "examples": [
                    "Este é o escritório correto?"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "mais correto",
        "superlative": "o mais correto",
        "feminine": "correta",
        "plural": "corretos",
        "femininePlural": "corretas"
    },
    {
        "word": "errado",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["wrong answer", "go wrong", "completely wrong"],
        "definitions": [
            {
                "text": "Não correto; não adequado.",
                "examples": [
                    "Essa foi a decisão errada."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "mais errado",
        "superlative": "o mais errado",
        "feminine": "errada",
        "plural": "errados",
        "femininePlural": "erradas"
    },
    {
        "word": "novo",
        "level": "starter",
        "form": "adjective",
        "subtext": "trabalho novo / completamente novo",
        "synonyms": ["novinho em folha"],
        "definitions": [
            {
                "text": "Que não existia antes.",
                "examples": [
                    "Ela tem um novo emprego."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais novo",
        "superlative": "o mais novo",
        "feminine": "nova",
        "plural": "novos",
        "femininePlural": "novas"
    },
    {
        "word": "diferente",
        "level": "starter",
        "form": "adjective",
        "subtext": "completamente diferente / muito diferente / diferente de",
        "definitions": [
            {
                "text": "Não é o mesmo que outro.",
                "examples": [
                    "Este emprego é muito diferente do meu último."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "mais diferente",
        "superlative": "o mais diferente",
        "feminine": "diferente",
        "plural": "diferentes",
        "femininePlural": "diferentes"
    },
    {
        "word": "mesmo",
        "level": "starter",
        "form": "adjective",
        "subtext": "o mesmo que / exatamente o mesmo / ao mesmo tempo",
        "definitions": [
            {
                "text": "Não diferente; idêntico.",
                "examples": [
                    "Eles ganham o mesmo salário."
                ]
            }
        ],
        "subtext": "o mesmo que / exatamente o mesmo / ao mesmo tempo",
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "mesma",
        "plural": "mesmos",
        "femininePlural": "mesmas"
    },
    {
        "word": "rápido",
        "level": "starter",
        "form": "adjective",
        "subtext": "comboio rápido / muito rápido",
        "synonyms": ["comida rápida"],
        "definitions": [
            {
                "text": "Que se move ou acontece rapidamente.",
                "examples": [
                    "O comboio para o trabalho é rápido."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais rápido",
        "superlative": "o mais rápido",
        "feminine": "rápida",
        "plural": "rápidos",
        "femininePlural": "rápidas"
    },
    {
        "word": "lento",
        "level": "starter",
        "form": "adjective",
        "subtext": "progresso lento / muito lento",
        "synonyms": ["internet lenta"],
        "definitions": [
            {
                "text": "Não rápido.",
                "examples": [
                    "O novo sistema é muito lento."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "mais lento",
        "superlative": "o mais lento",
        "feminine": "lenta",
        "plural": "lentos",
        "femininePlural": "lentas"
    },
    {
        "word": "silencioso",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["zona tranquila", "manter-se calado", "agradável e calmo"],
        "definitions": [
            {
                "text": "Que faz pouco ou nenhum ruído.",
                "examples": [
                    "O escritório é silencioso à hora do almoço."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "mais silencioso",
        "superlative": "o mais silencioso",
        "feminine": "silenciosa",
        "plural": "silenciosos",
        "femininePlural": "silenciosas"
    },
    {
        "word": "barulhento",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["loud noise", "too loud", "a loud voice"],
        "definitions": [
            {
                "text": "Que faz muito ruído.",
                "examples": [
                    "O escritório é demasiado barulhento."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "mais barulhento",
        "superlative": "o mais barulhento",
        "feminine": "barulhenta",
        "plural": "barulhentos",
        "femininePlural": "barulhentas"
    },
    {
        "word": "seguro",
        "level": "starter",
        "form": "adjective",
        "subtext": "seguro para fazer / sentir-se seguro",
        "synonyms": ["zona segura"],
        "definitions": [
            {
                "text": "Não perigoso.",
                "examples": [
                    "Este bairro é muito seguro."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "mais seguro",
        "superlative": "o mais seguro",
        "feminine": "segura",
        "plural": "seguros",
        "femininePlural": "seguras"
    },
    {
        "word": "perigoso",
        "level": "starter",
        "form": "adjective",
        "subtext": "muito perigoso / potencialmente perigoso",
        "synonyms": ["situação perigosa"],
        "definitions": [
            {
                "text": "Que pode causar dano.",
                "examples": [
                    "Aquela estrada é perigosa."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "mais perigoso",
        "superlative": "o mais perigoso",
        "feminine": "perigosa",
        "plural": "perigosos",
        "femininePlural": "perigosas"
    },
    {
        "word": "infeliz",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Não se sente satisfeito ou feliz.",
                "examples": [
                    "Ele está infeliz com o salário atual."
                ]
            }
        ],
        "subtext": "sentir-se infeliz / muito infeliz / infeliz com",
        "comparative": "mais infeliz",
        "superlative": "o mais infeliz",
        "feminine": "infeliz",
        "plural": "infelizes",
        "femininePlural": "infelizes"
    },
    {
        "word": "nervoso",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que sente ansiedade.",
                "examples": [
                    "Ele estava nervoso antes da entrevista."
                ]
            }
        ],
        "subtext": "sentir-se nervoso / nervoso com / muito nervoso",
        "comparative": "mais nervoso",
        "superlative": "o mais nervoso",
        "feminine": "nervosa",
        "plural": "nervosos",
        "femininePlural": "nervosas"
    },
    {
        "word": "estressado",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que sente preocupação e tensão.",
                "examples": [
                    "Ela sente-se estressada antes de cada prazo."
                ]
            }
        ],
        "subtext": "sentir-se estressado / muito estressado / estressado",
        "comparative": "mais estressado",
        "superlative": "o mais estressado",
        "feminine": "estressada",
        "plural": "estressados",
        "femininePlural": "estressadas"
    },
    {
        "word": "confiante",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Seguro das suas próprias capacidades.",
                "examples": [
                    "Ela é muito confiante em apresentações."
                ]
            }
        ],
        "subtext": "sentir-se confiante / muito confiante",
        "synonyms": ["autoconfiante"],
        "comparative": "mais confiante",
        "superlative": "o mais confiante",
        "feminine": "confiante",
        "plural": "confiantes",
        "femininePlural": "confiantes"
    },
    {
        "word": "orgulhoso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que se sente satisfeito com uma conquista.",
                "examples": [
                    "Ele estava orgulhoso do seu primeiro aumento."
                ]
            }
        ],
        "subtext": "sentir-se orgulhoso / muito orgulhoso / orgulhoso de",
        "comparative": "mais orgulhoso",
        "superlative": "o mais orgulhoso",
        "feminine": "orgulhosa",
        "plural": "orgulhosos",
        "femininePlural": "orgulhosas"
    },
    {
        "word": "assustado",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que sente medo de algo.",
                "examples": [
                    "Ela estava assustada em dar a apresentação."
                ]
            }
        ],
        "subtext": "sentir-se assustado / assustado de / muito assustado",
        "comparative": "mais assustado",
        "superlative": "o mais assustado",
        "feminine": "assustada",
        "plural": "assustados",
        "femininePlural": "assustadas"
    },
    {
        "word": "surpreendido",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que sente choque com algo inesperado.",
                "examples": [
                    "Ele ficou surpreendido ao receber um aumento."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["sentir-se surpreso", "muito surpreso", "agradavelmente surpreso"],
        "comparative": "mais surpreendido",
        "superlative": "o mais surpreendido",
        "feminine": "surpreendida",
        "plural": "surpreendidos",
        "femininePlural": "surpreendidas"
    },
    {
        "word": "dececionado",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que se sente triste porque algo não foi como esperado.",
                "examples": [
                    "Ela ficou dececionada por não conseguir o emprego."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["sentir-se decepcionado", "muito decepcionado", "decepcionado com"],
        "comparative": "mais dececionado",
        "superlative": "o mais dececionado",
        "feminine": "dececionada",
        "plural": "dececionados",
        "femininePlural": "dececionadas"
    },
    {
        "word": "bonito",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Atraente e agradável de olhar.",
                "examples": [
                    "Ela tem um escritório bonito."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["beautiful view", "beautiful city", "absolutely beautiful"],
        "comparative": "mais bonito",
        "superlative": "o mais bonito",
        "feminine": "bonita",
        "plural": "bonitos",
        "femininePlural": "bonitas"
    },
    {
        "word": "lindo",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Agradável de olhar.",
                "examples": [
                    "A nova sala de reuniões é muito linda."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["muito bom", "um lugar bonito", "bastante bonito"],
        "comparative": "mais lindo",
        "superlative": "o mais lindo",
        "feminine": "linda",
        "plural": "lindos",
        "femininePlural": "lindas"
    },
    {
        "word": "forte",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que tem grande poder físico ou mental.",
                "examples": [
                    "Ela é uma líder forte."
                ]
            }
        ],
        "subtext": "café forte / opinião forte / muito forte",
        "comparative": "mais forte",
        "superlative": "o mais forte",
        "feminine": "forte",
        "plural": "fortes",
        "femininePlural": "fortes"
    },
    {
        "word": "fraco",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que carece de força ou poder.",
                "examples": [
                    "O sinal é fraco."
                ]
            }
        ],
        "subtext": "argumento fraco / muito fraco",
        "synonyms": ["conexão fraca"],
        "comparative": "mais fraco",
        "superlative": "o mais fraco",
        "feminine": "fraca",
        "plural": "fracos",
        "femininePlural": "fracas"
    },
    {
        "word": "em forma",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Em boa condição física.",
                "examples": [
                    "Ela mantém-se em forma."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["physically fit", "stay fit", "keep fit"],
        "comparative": "mais em forma",
        "superlative": "o mais em forma",
        "feminine": "em forma",
        "plural": "em forma",
        "femininePlural": "em forma"
    },
    {
        "word": "excelente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extremamente bom.",
                "examples": [
                    "Ela recebeu uma avaliação excelente."
                ]
            }
        ],
        "subtext": "trabalho excelente / excelentes resultados / absolutamente excelente",
        "comparative": "mais excelente",
        "superlative": "o mais excelente",
        "feminine": "excelente",
        "plural": "excelentes",
        "femininePlural": "excelentes"
    },
    {
        "word": "perfeito",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sem falhas; completamente correto.",
                "examples": [
                    "O momento do lançamento foi perfeito."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["a perfect opportunity", "perfect timing", "absolutely perfect"],
        "comparative": "mais perfeito",
        "superlative": "o mais perfeito",
        "feminine": "perfeita",
        "plural": "perfeitos",
        "femininePlural": "perfeitas"
    },
    {
        "word": "inútil",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sem valor útil; não ajuda.",
                "examples": [
                    "Este software é inútil."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["completely useless", "prove useless", "a useless idea"],
        "comparative": "mais inútil",
        "superlative": "o mais inútil",
        "feminine": "inútil",
        "plural": "inúteis",
        "femininePlural": "inúteis"
    },
    {
        "word": "correto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Verdadeiro ou correto.",
                "examples": [
                    "Por favor, verifique se os números estão corretos."
                ]
            }
        ],
        "subtext": "totalmente correto",
        "synonyms": ["resposta correta", "a forma correta"],
        "comparative": "mais correto",
        "superlative": "o mais correto",
        "feminine": "correta",
        "plural": "corretos",
        "femininePlural": "corretas"
    },
    {
        "word": "interessante",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que atrai a atenção.",
                "examples": [
                    "A nova proposta é muito interessante."
                ]
            }
        ],
        "subtext": "achar interessante / muito interessante / uma ideia interessante",
        "comparative": "mais interessante",
        "superlative": "o mais interessante",
        "feminine": "interessante",
        "plural": "interessantes",
        "femininePlural": "interessantes"
    },
    {
        "word": "aborrecido",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Não interessante; enfadonho.",
                "examples": [
                    "A sessão de formação foi muito aborrecida."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["muito chato", "uma reunião chata", "achar chato"],
        "comparative": "mais aborrecido",
        "superlative": "o mais aborrecido",
        "feminine": "aborrecida",
        "plural": "aborrecidos",
        "femininePlural": "aborrecidas"
    },
    {
        "word": "necessário",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Necessário; requerido para fazer algo.",
                "examples": [
                    "Uma boa ligação à internet é necessária."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["absolutely necessary", "if necessary", "necessary to do"],
        "comparative": "mais necessário",
        "superlative": "o mais necessário",
        "feminine": "necessária",
        "plural": "necessários",
        "femininePlural": "necessárias"
    },
    {
        "word": "possível",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Capaz de acontecer ou ser alcançado.",
                "examples": [
                    "É possível terminar até sexta-feira?"
                ]
            }
        ],
        "subtext": "as soon as possible",
        "synonyms": ["it is possible", "make possible"],
        "comparative": "mais possível",
        "superlative": "o mais possível",
        "feminine": "possível",
        "plural": "possíveis",
        "femininePlural": "possíveis"
    },
    {
        "word": "impossível",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Não capaz de acontecer ou ser feito.",
                "examples": [
                    "É impossível terminar num dia."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["virtually impossible", "make impossible", "nearly impossible"],
        "comparative": "mais impossível",
        "superlative": "o mais impossível",
        "feminine": "impossível",
        "plural": "impossíveis",
        "femininePlural": "impossíveis"
    },
    {
        "word": "especial",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Diferente do habitual.",
                "examples": [
                    "Ela tem um talento especial."
                ]
            }
        ],
        "subtext": "uma oferta especial / ocasião especial / muito especial",
        "comparative": "mais especial",
        "superlative": "o mais especial",
        "feminine": "especial",
        "plural": "especiais",
        "femininePlural": "especiais"
    },
    {
        "word": "popular",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "De que muita gente gosta.",
                "examples": [
                    "O novo café é muito popular."
                ]
            }
        ],
        "subtext": "muito popular / escolha popular / mais popular",
        "comparative": "mais popular",
        "superlative": "o mais popular",
        "feminine": "popular",
        "plural": "populares",
        "femininePlural": "populares"
    },
    {
        "word": "semelhante",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Quase o mesmo.",
                "examples": [
                    "As nossas abordagens são muito semelhantes."
                ]
            }
        ],
        "subtext": "muito semelhante / semelhante a / resultados semelhantes",
        "comparative": "mais semelhante",
        "superlative": "o mais semelhante",
        "feminine": "semelhante",
        "plural": "semelhantes",
        "femininePlural": "semelhantes"
    },
    {
        "word": "amigável",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Amável e agradável.",
                "examples": [
                    "O novo gestor é muito amigável."
                ]
            }
        ],
        "subtext": "muito amigável / um rosto amigável / atmosfera amigável",
        "comparative": "mais amigável",
        "superlative": "o mais amigável",
        "feminine": "amigável",
        "plural": "amigáveis",
        "femininePlural": "amigáveis"
    },
    {
        "word": "bondoso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Generoso com os outros.",
                "examples": [
                    "Ela é bondosa com todos."
                ]
            }
        ],
        "subtext": "gentil da sua parte",
        "synonyms": ["muito amável", "uma pessoa gentil"],
        "comparative": "mais bondoso",
        "superlative": "o mais bondoso",
        "feminine": "bondosa",
        "plural": "bondosos",
        "femininePlural": "bondosas"
    },
    {
        "word": "engraçado",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que faz rir.",
                "examples": [
                    "Ele tem uma forma engraçada de explicar."
                ]
            }
        ],
        "subtext": "muito engraçado / achar engraçado",
        "synonyms": ["história engraçada"],
        "comparative": "mais engraçado",
        "superlative": "o mais engraçado",
        "feminine": "engraçada",
        "plural": "engraçados",
        "femininePlural": "engraçadas"
    },
    {
        "word": "esperto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Inteligente; rápido a entender.",
                "examples": [
                    "Ela é uma negociadora esperta."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["muito inteligente", "uma ideia inteligente", "inteligente o suficiente"],
        "comparative": "mais esperto",
        "superlative": "o mais esperto",
        "feminine": "esperta",
        "plural": "espertos",
        "femininePlural": "espertas"
    },
    {
        "word": "educado",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que se comporta de forma respeitosa.",
                "examples": [
                    "Ele é sempre educado com os clientes."
                ]
            }
        ],
        "subtext": "muito educado / pedido educado / educado o suficiente",
        "comparative": "mais educado",
        "superlative": "o mais educado",
        "feminine": "educada",
        "plural": "educados",
        "femininePlural": "educadas"
    },
    {
        "word": "grosseiro",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Não educado.",
                "examples": [
                    "Aquele e-mail foi bastante grosseiro."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["muito rude", "incrivelmente rude", "deliberadamente rude"],
        "comparative": "mais grosseiro",
        "superlative": "o mais grosseiro",
        "feminine": "grosseira",
        "plural": "grosseiros",
        "femininePlural": "grosseiras"
    },
    {
        "word": "preguiçoso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Não disposto a trabalhar.",
                "examples": [
                    "Tem reputação de ser preguiçoso."
                ]
            }
        ],
        "subtext": "muito preguiçoso / preguiçoso demais",
        "synonyms": ["uma abordagem preguiçosa"],
        "comparative": "mais preguiçoso",
        "superlative": "o mais preguiçoso",
        "feminine": "preguiçosa",
        "plural": "preguiçosos",
        "femininePlural": "preguiçosas"
    },
    {
        "word": "honesto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que diz a verdade.",
                "examples": [
                    "Ela é conhecida por ser honesta."
                ]
            }
        ],
        "subtext": "muito honesto / brutalmente honesto / completamente honesto",
        "comparative": "mais honesto",
        "superlative": "o mais honesto",
        "feminine": "honesta",
        "plural": "honestos",
        "femininePlural": "honestas"
    },
    {
        "word": "barulhento",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que faz muito som.",
                "examples": [
                    "O escritório é muito barulhento."
                ]
            }
        ],
        "subtext": "muito barulhento / ambiente barulhento / barulhento demais",
        "comparative": "mais barulhento",
        "superlative": "o mais barulhento",
        "feminine": "barulhenta",
        "plural": "barulhentos",
        "femininePlural": "barulhentas"
    }
];
    const lang = "pt";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();