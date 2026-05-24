// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
        {
            "word": "abrupto",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⏱️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Súbito e inesperado; brusco e indelicado na maneira de agir.",
                    "examples": [
                        "A conversa chegou a um fim abrupto e inesperado."
                    ]
                }
            ],
            "subtext": "um fim abrupto / maneira abrupta / parou abruptamente",
            "comparative": "mais abrupto",
            "superlative": "o mais abrupto",
            "synonyms": ["súbito", "brusco"],
            "opposite": "gradual"
        },
        {
            "word": "abstruso",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🧐",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Difícil de compreender; obscuro ou complexo.",
                    "examples": [
                        "O artigo foi criticado por seu enquadramento teórico abstruso."
                    ]
                }
            ],
            "subtext": "muito abstruso / bastante abstruso / um argumento abstruso",
            "comparative": "mais abstruso",
            "superlative": "o mais abstruso",
            "synonyms": ["obscuro", "recondito"],
            "opposite": "simples"
        },
        {
            "word": "anacrónico",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Antiquado; pertencente a uma época anterior.",
                    "examples": [
                        "A política parece completamente anacrónica no contexto atual."
                    ]
                }
            ],
            "subtext": "totalmente anacrónico / cada vez mais anacrónico / profundamente anacrónico",
            "comparative": "mais anacrónico",
            "superlative": "o mais anacrónico",
            "synonyms": ["antiquado", "arcaico"],
            "opposite": "contemporâneo"
        },
        {
            "word": "antitético",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Diretamente oposto ou contrário a algo.",
                    "examples": [
                        "Suas ações eram antitéticas aos valores que ele alegava defender."
                    ]
                }
            ],
            "subtext": "diretamente antitético / completamente antitético / antitético a",
            "comparative": "mais antitético",
            "superlative": "o mais antitético",
            "synonyms": ["contrário", "oposto"],
            "opposite": "idêntico"
        },
        {
            "word": "arcano",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🔮",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Conhecido apenas por poucas pessoas; misterioso e secreto.",
                    "examples": [
                        "O procedimento era desnecessariamente arcano e inacessível."
                    ]
                }
            ],
            "subtext": "muito arcano / totalmente arcano / conhecimento arcano",
            "comparative": "mais arcano",
            "superlative": "o mais arcano",
            "synonyms": ["misterioso", "secreto"],
            "opposite": "comum"
        },
        {
            "word": "atípico",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🦄",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Não típico; não normal ou habitual.",
                    "examples": [
                        "Este foi um caso atípico que não reflete a norma."
                    ]
                }
            ],
            "subtext": "muito atípico / altamente atípico / estatisticamente atípico",
            "comparative": "mais atípico",
            "superlative": "o mais atípico",
            "synonyms": ["incomum", "anormal"],
            "opposite": "típico"
        },
        {
            "word": "binário",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Composto por duas coisas; baseado em uma dicotomia.",
                    "examples": [
                        "O debate apresenta um falso binário entre crescimento e justiça."
                    ]
                }
            ],
            "subtext": "um falso binário / uma escolha binária / não puramente binário",
            "comparative": "mais binário",
            "superlative": "o mais binário",
            "synonyms": ["dual", "duplo"],
            "opposite": "unitário"
        },
        {
            "word": "categórico",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "❗",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Absoluto; expresso sem quaisquer exceções ou condições.",
                    "examples": [
                        "Ela deu uma negação categórica das acusações."
                    ]
                }
            ],
            "subtext": "uma negação categórica / recusado categoricamente / absolutamente categórico",
            "comparative": "mais categórico",
            "superlative": "o mais categórico",
            "synonyms": ["absoluto", "incondicional"],
            "opposite": "qualificado"
        },
        {
            "word": "circunspecto",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🛡️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Cuidado ao considerar todas as circunstâncias; cauteloso.",
                    "examples": [
                        "Ele foi circunspecto em suas declarações públicas."
                    ]
                }
            ],
            "subtext": "muito circunspecto / extremamente circunspecto / permanecer circunspecto",
            "comparative": "mais circunspecto",
            "superlative": "o mais circunspecto",
            "synonyms": ["cauteloso", "prudente"],
            "opposite": "temerário"
        },
        {
            "word": "encoberto",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🕵️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Escondido; secreto; não reconhecido abertamente.",
                    "examples": [
                        "A operação envolveu vigilância encoberta do grupo."
                    ]
                }
            ],
            "subtext": "completamente encoberto / uma operação encoberta / profundamente encoberto",
            "comparative": "mais encoberto",
            "superlative": "o mais encoberto",
            "synonyms": ["secreto", "clandestino"],
            "opposite": "aberto"
        },
        {
            "word": "dialético",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Relativo à discussão lógica de ideias através de opostos.",
                    "examples": [
                        "A análise emprega um método dialético por completo."
                    ]
                }
            ],
            "subtext": "uma abordagem dialética / tensão dialética / resolvido dialeticamente",
            "comparative": "mais dialético",
            "superlative": "o mais dialético",
            "synonyms": ["lógico", "analítico"]
        },
        {
            "word": "difuso",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌫️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Espalhado por uma área ampla; sem clareza.",
                    "examples": [
                        "O argumento foi muito difuso para causar uma forte impressão."
                    ]
                }
            ],
            "subtext": "muito difuso / bastante difuso / uma resposta difusa",
            "comparative": "mais difuso",
            "superlative": "o mais difuso",
            "synonyms": ["disperso", "vago"],
            "opposite": "concentrado"
        },
        {
            "word": "elusivo",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🌬️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Difícil de encontrar, capturar ou alcançar.",
                    "examples": [
                        "A verdade neste caso revelou-se notavelmente elusiva."
                    ]
                },
                {
                    "text": "Difícil de encontrar, realizar ou lembrar.",
                    "examples": [
                        "Um consenso claro continua sendo elusivo."
                    ]
                }
            ],
            "subtext": "muito elusivo / permanece elusivo / um objetivo elusivo / uma qualidade elusiva",
            "comparative": "mais elusivo",
            "superlative": "o mais elusivo",
            "synonyms": ["evasivo", "fugidio"],
            "opposite": "alcançável"
        },
        {
            "word": "esotérico",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🗝️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Compreendido por ou destinado apenas a um pequeno grupo.",
                    "examples": [
                        "O debate tornou-se demasiado esotérico para um público geral."
                    ]
                }
            ],
            "subtext": "muito esotérico / bastante esotérico / profundamente esotérico",
            "comparative": "mais esotérico",
            "superlative": "o mais esotérico",
            "synonyms": ["arcano", "obscuro"],
            "opposite": "exotérico"
        },
        {
            "word": "falaz",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "❌",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Baseado em raciocínio falso; enganoso.",
                    "examples": [
                        "Seu argumento é fundamentalmente falaz."
                    ]
                }
            ],
            "subtext": "profundamente falaz / logicamente falaz / uma afirmação falaz",
            "comparative": "mais falaz",
            "superlative": "o mais falaz",
            "synonyms": ["falso", "errado"],
            "opposite": "sólido"
        },
        {
            "word": "imutável",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧱",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Não capaz de ser alterado; fixo e permanente.",
                    "examples": [
                        "A linguagem não é imutável — ela evolui constantemente."
                    ]
                }
            ],
            "subtext": "completamente imutável / não imutável / um fato imutável",
            "comparative": "mais imutável",
            "superlative": "o mais imutável",
            "synonyms": ["fixo", "permanente"],
            "opposite": "mutável"
        },
        {
            "word": "imparcial",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que não favorece um lado em detrimento de outro; justo.",
                    "examples": [
                        "O painel deve ser completamente imparcial em seu julgamento."
                    ]
                }
            ],
            "subtext": "completamente imparcial / estritamente imparcial / um observador imparcial",
            "comparative": "mais imparcial",
            "superlative": "o mais imparcial",
            "synonyms": ["justo", "neutro"],
            "opposite": "parcial"
        },
        {
            "word": "incidental",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🍃",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Acontecendo como uma parte menor de outra coisa.",
                    "examples": [
                        "A economia foi incidental em vez do objetivo principal."
                    ]
                }
            ],
            "subtext": "puramente incidental / meramente incidental / incidental a",
            "comparative": "mais incidental",
            "superlative": "o mais incidental",
            "synonyms": ["secundário", "menor"],
            "opposite": "central"
        },
        {
            "word": "inerente",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Existindo em algo como uma qualidade natural e permanente.",
                    "examples": [
                        "O sistema é inerentemente defeituoso e precisa ser redesenhado."
                    ]
                }
            ],
            "subtext": "inerentemente defeituoso / inerentemente tendencioso / inerentemente problemático",
            "comparative": "mais inerente",
            "superlative": "o mais inerente",
            "synonyms": ["inato", "intrínseco"],
            "opposite": "extrínseco"
        },
        {
            "word": "inimitável",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "emoji": "🌟",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Tão bom ou incomum que é impossível de copiar.",
                    "examples": [
                        "Ela tem uma maneira inimitável de tornar claras ideias complexas."
                    ]
                }
            ],
            "subtext": "verdadeiramente inimitável / absolutamente inimitável / um estilo inimitável",
            "comparative": "mais inimitável",
            "superlative": "o mais inimitável",
            "synonyms": ["único", "inigualável"],
            "opposite": "comum"
        },
        {
            "word": "insidioso",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🐍",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que progride gradualmente de uma maneira prejudicial.",
                    "examples": [
                        "Os efeitos do estresse a longo prazo podem ser insidiosos."
                    ]
                }
            ],
            "subtext": "muito insidioso / profundamente insidioso / um processo insidioso",
            "comparative": "mais insidioso",
            "superlative": "o mais insidioso",
            "synonyms": ["furtivo", "subtil"],
            "opposite": "direto"
        },
        {
            "word": "irreconciliável",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚫",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que não se pode conciliar ou tornar compatível.",
                    "examples": [
                        "As duas posições são fundamentalmente irreconciliáveis."
                    ]
                }
            ],
            "subtext": "fundamentalmente irreconciliável / completamente irreconciliável / diferenças irreconciliáveis",
            "comparative": "mais irreconciliável",
            "superlative": "o mais irreconciliável",
            "synonyms": ["incompatível", "conflitante"],
            "opposite": "compatível"
        },
        {
            "word": "liminal",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🚪",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Relativo a um estado de transição ou intermediário.",
                    "examples": [
                        "Os meses após a demissão são um período verdadeiramente liminal."
                    ]
                }
            ],
            "subtext": "um espaço liminal / uma fase liminal / profundamente liminal",
            "comparative": "mais liminal",
            "superlative": "o mais liminal",
            "synonyms": ["transicional", "limiar"]
        },
        {
            "word": "múltiplo",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Numeroso e de vários tipos diferentes.",
                    "examples": [
                        "As implicações desta decisão são múltiplas."
                    ]
                }
            ],
            "subtext": "implicações múltiplas / problemas múltiplos / desafios múltiplos",
            "comparative": "mais múltiplo",
            "superlative": "o mais múltiplo",
            "synonyms": ["numeroso", "diverso"],
            "opposite": "único"
        },
        {
            "word": "nebuloso",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "☁️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Não claro; vago e mal definido.",
                    "examples": [
                        "O conceito permanece um pouco nebuloso no relatório."
                    ]
                }
            ],
            "subtext": "muito nebuloso / bastante nebuloso / perigosamente nebuloso",
            "comparative": "mais nebuloso",
            "superlative": "o mais nebuloso",
            "synonyms": ["vago", "difuso"],
            "opposite": "distinto"
        },
        {
            "word": "normativo",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "📏",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Relativo a uma norma; que prescreve o que deveria ser.",
                    "examples": [
                        "Esta é uma afirmação normativa, não descritiva."
                    ]
                }
            ],
            "subtext": "un quadro normativo / pressuposto normativo / afirmação normativa",
            "comparative": "mais normativo",
            "superlative": "o mais normativo",
            "synonyms": ["prescritivo", "padronizador"],
            "opposite": "descritivo"
        },
        {
            "word": "nuanceado",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌗",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que mostra distinções sutis; não simples ou extremo.",
                    "examples": [
                        "O relatório faz um relato muito nuanceado da questão."
                    ]
                }
            ],
            "subtext": "muito nuanceado / altamente nuanceado / um argumento nuanceado",
            "comparative": "mais nuanceado",
            "superlative": "o mais nuanceado",
            "synonyms": ["sutil", "refinado"],
            "opposite": "tosco"
        },
        {
            "word": "oblíquo",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "↗️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Não direto; indireto; que não é reto ou aberto.",
                    "examples": [
                        "Ele deu uma resposta oblíqua que não satisfez a ninguém."
                    ]
                }
            ],
            "subtext": "um pouco oblíquo / muito oblíquo / uma referência oblíqua",
            "comparative": "mais oblíquo",
            "superlative": "o mais oblíquo",
            "synonyms": ["indireto", "enviesado"],
            "opposite": "direto"
        },
        {
            "word": "opaco",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌑",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Não transparente; difícil de compreender.",
                    "examples": [
                        "O raciocínio do governo foi completamente opaco."
                    ]
                }
            ],
            "subtext": "muito opaco / completamente opaco / profundamente opaco",
            "comparative": "mais opaco",
            "superlative": "o mais opaco",
            "synonyms": ["obscuro", "pouco claro"],
            "opposite": "transparente"
        },
        {
            "word": "ostensível",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🎭",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que parece ser algo; declarado como real ou verdadeiro.",
                    "examples": [
                        "O objetivo ostensível era a eficiência; o real era o controle."
                    ]
                }
            ],
            "subtext": "o objetivo ostensível / ostensivamente correto / motivação ostensível",
            "comparative": "mais ostensível",
            "superlative": "o mais ostensível",
            "synonyms": ["aparente", "suposto"],
            "opposite": "genuíno"
        },
        {
            "word": "paradoxal",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que se contradiz mas que contém uma verdade.",
                    "examples": [
                        "É paradoxal que fazer menos possa, por vezes, alcançar mais."
                    ]
                }
            ],
            "subtext": "aparentemente paradoxal / profundamente paradoxal / uma situação paradoxal",
            "comparative": "mais paradoxal",
            "superlative": "o mais paradoxal",
            "synonyms": ["contraditório", "irônico"],
            "opposite": "coerente"
        },
        {
            "word": "pervasivo",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌊",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Presente em toda parte; que se espalha amplamente.",
                    "examples": [
                        "Uma cultura de excesso de trabalho é pervasiva neste setor."
                    ]
                }
            ],
            "subtext": "muito pervasivo / cada vez mais pervasivo / pervasivo",
            "comparative": "mais pervasivo",
            "superlative": "o mais pervasivo",
            "synonyms": ["difuso", "prevalente"],
            "opposite": "raro"
        },
        {
            "word": "polarizador",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🧲",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que faz com que as pessoas tomem posições opostas.",
                    "examples": [
                        "A proposta foi profundamente polarizadora dentro da organização."
                    ]
                }
            ],
            "subtext": "profundamente polarizador / extremamente polarizador / altamente polarizador",
            "comparative": "mais polarizador",
            "superlative": "o mais polarizador",
            "synonyms": ["divisivo", "conflitante"],
            "opposite": "unificador"
        },
        {
            "word": "precário",
            "level": "proficiency",
            "theme": "ontology_existence_C2",
            "emoji": "🧗",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Não seguro ou certo; dependente do acaso.",
                    "examples": [
                        "Ela deixou uma vida de freelancer precário por um cargo estável."
                    ]
                }
            ],
            "subtext": "muito precário / profundamente precário / uma posição precária",
            "comparative": "mais precário",
            "superlative": "o mais precário",
            "synonyms": ["instável", "arriscado"],
            "opposite": "estável"
        },
        {
            "word": "prescritivo",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que dita o que deve ser feito; que estabelece regras.",
                    "examples": [
                        "As diretrizes são demasiado prescritivas para permitir a criatividade."
                    ]
                }
            ],
            "subtext": "muito prescritivo / altamente prescritivo / excessivamente prescritivo",
            "comparative": "mais prescritivo",
            "superlative": "o mais prescritivo",
            "synonyms": ["ditatorial", "rígido"],
            "opposite": "descritivo"
        },
        {
            "word": "prolongado",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que dura mais do que o esperado; dilatado.",
                    "examples": [
                        "A disputa legal foi longa e prolongada."
                    ]
                }
            ],
            "subtext": "muito prolongado / extremamente prolongado / um processo prolongado",
            "comparative": "mais prolongado",
            "superlative": "o mais prolongado",
            "synonyms": ["extenso", "longo"],
            "opposite": "breve"
        },
        {
            "word": "redutor",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📉",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que simplifica excessivamente algo complexo.",
                    "examples": [
                        "Seria redutor explicar tudo apenas como ganância."
                    ]
                }
            ],
            "subtext": "muito redutor / profundamente redutor / uma análise redutora",
            "comparative": "mais redutor",
            "superlative": "o mais redutor",
            "synonyms": ["simplista", "minimalista"],
            "opposite": "complexo"
        },
        {
            "word": "seminal",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌱",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Muito importante e influente; original.",
                    "examples": [
                        "Este foi um momento seminal na história da empresa."
                    ]
                }
            ],
            "subtext": "verdadeiramente seminal / uma obra seminal / uma figura seminal",
            "comparative": "mais seminal",
            "superlative": "o mais seminal",
            "synonyms": ["influente", "inovador"],
            "opposite": "insignificante"
        },
        {
            "word": "especioso",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🤥",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que parece correto mas é, na realidade, falso; enganoso.",
                    "examples": [
                        "O argumento é superficialmente atraente, mas finalmente especioso."
                    ]
                }
            ],
            "subtext": "muito especioso / uma afirmação especiosa / fundamentalmente especioso",
            "comparative": "mais especioso",
            "superlative": "o mais especioso",
            "synonyms": ["enganoso", "ilusório"],
            "opposite": "válido"
        },
        {
            "word": "espúrio",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🤡",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Não genuíno; baseado em um raciocínio falso.",
                    "examples": [
                        "Esta é uma comparação espúria que distorce o debate."
                    ]
                }
            ],
            "subtext": "completamente espúrio / totalmente espúrio / um argumento espúrio",
            "comparative": "mais espúrio",
            "superlative": "o mais espúrio",
            "synonyms": ["falso", "fictício"],
            "opposite": "autêntico"
        },
        {
            "word": "subversivo",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "💣",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Destinado a minar um sistema estabelecido.",
                    "examples": [
                        "A obra de arte foi vista como subversiva pelas autoridades."
                    ]
                }
            ],
            "subtext": "discretamente subversivo / profundamente subversivo / abertamente subversivo",
            "comparative": "mais subversivo",
            "superlative": "o mais subversivo",
            "synonyms": ["rebelde", "disruptivo"],
            "opposite": "conformista"
        },
        {
            "word": "tácito",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "🤫",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Entendido ou acordado sem ser declarado.",
                    "examples": [
                        "Havia um entendimento tácito entre eles."
                    ]
                }
            ],
            "subtext": "um acordo tácito / aprovação tácita / permanecer tácito",
            "comparative": "mais tácito",
            "superlative": "o mais tácito",
            "synonyms": ["implícito", "subentendido"],
            "opposite": "explícito"
        },
        {
            "word": "ténue",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🕸️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Muito fraco ou ligeiro; não estabelecido firmemente.",
                    "examples": [
                        "A ligação entre os dois eventos é muito ténue."
                    ]
                }
            ],
            "subtext": "muito ténue / bastante ténue / um elo ténue",
            "comparative": "mais ténue",
            "superlative": "o mais ténue",
            "synonyms": ["frágil", "fraco"],
            "opposite": "forte"
        },
        {
            "word": "transitório",
            "level": "proficiency",
            "theme": "mortality_time_C2",
            "emoji": "🌅",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Não permanente; que passa rapidamente.",
                    "examples": [
                        "Os benefícios foram transitórios e desapareceram em meses."
                    ]
                }
            ],
            "subtext": "muito transitório / meramente transitório / um efeito transitório",
            "comparative": "mais transitório",
            "superlative": "o mais transitório",
            "synonyms": ["temporal", "fugaz"],
            "opposite": "permanente"
        },
        {
            "word": "ubíquo",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que aparece em toda parte; muito comum.",
                    "examples": [
                        "Os smartphones tornaram-se ubíquos na vida quotidiana."
                    ]
                }
            ],
            "subtext": "verdadeiramente ubíquo / aparentemente ubíquo / tornar-se ubíquo",
            "comparative": "mais ubíquo",
            "superlative": "o mais ubíquo",
            "synonyms": ["omnipresente", "omnipresente"],
            "opposite": "raro"
        },
        {
            "word": "inequívoco",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "📢",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que não deixa dúvidas; completamente claro.",
                    "examples": [
                        "Seu apoio à decisão foi inequívoco."
                    ]
                }
            ],
            "subtext": "completamente inequívoco / absolutamente inequívoco / uma rejeição inequívoca",
            "comparative": "mais inequívoco",
            "superlative": "o mais inequívoco",
            "synonyms": ["unívoco", "claro"],
            "opposite": "ambíguo"
        },
        {
            "word": "sem precedentes",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🚀",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que nunca aconteceu antes.",
                    "examples": [
                        "A empresa alcançou um crescimento sem precedentes em cinco anos."
                    ]
                }
            ],
            "subtext": "verdadeiramente sem precedentes / completamente sem precedentes / um evento sem precedentes",
            "comparative": "mais inaudito",
            "superlative": "o mais inaudito",
            "synonyms": ["único", "inovador"],
            "opposite": "comum"
        },
        {
            "word": "insustentável",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🏗️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Não capaz de ser mantido ou defendido.",
                    "examples": [
                        "Sua posição tornou-se completamente insustentável."
                    ]
                }
            ],
            "subtext": "completamente insustentável / totalmente insustentável / um argumento insustentável",
            "comparative": "mais insustentável",
            "superlative": "o mais insustentável",
            "synonyms": ["indefensável", "insustentável"],
            "opposite": "defensável"
        },
        {
            "word": "pesado",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📦",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Difícil de manusear ou gerir devido ao tamanho ou complexidade.",
                    "examples": [
                        "O processo tornou-se pesado e ineficiente."
                    ]
                }
            ],
            "subtext": "muito pesado / bastante pesado / um sistema pesado",
            "comparative": "mais pesado",
            "superlative": "o mais pesado",
            "synonyms": ["desajeitado", "moroso"],
            "opposite": "manejável"
        }
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data,
{
        "word": "hermenêutico",
        "level": "proficiency",
        "theme": "philosophy_language_C2",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Relativo à interpretação de textos ou significados.",
                        "examples": [
                                "Ele adotou uma abordagem hermenêutica para analisar discursos políticos."
                        ]
                }
        ]
},
{
        "word": "tautológico",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction_C2",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Dizer a mesma coisa duas vezes com palavras diferentes; raciocínio circular.",
                        "examples": [
                                "O argumento é tautológico: assume o que pretende provar."
                        ]
                }
        ]
},
{
        "word": "polissêmico",
        "level": "proficiency",
        "theme": "linguistics_theory_C2",
        "emoji": "🔠",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Que possui múltiplos significados.",
                        "examples": [
                                "A palavra 'liberdade' é profundamente polissêmica no discurso político."
                        ]
                }
        ]
},
{
        "word": "pós-colonial",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Relativo ao período após o domínio colonial, ou à crítica dos legados coloniais.",
                        "examples": [
                                "A teoria pós-colonial questiona as suposições ocidentais sobre o progresso."
                        ]
                }
        ]
},
{
        "word": "multipolar",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Descreve uma ordem mundial com vários centros de poder em vez de um ou dois.",
                        "examples": [
                                "Um mundo multipolar pode ser mais instável, mas mais representativo."
                        ]
                }
        ]
},
{
        "word": "cosmopolita",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🏙️",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Familiarizado e à vontade em muitos países e culturas diferentes.",
                        "examples": [
                                "Ela tinha uma visão cosmopolita da obrigação política."
                        ]
                }
        ]
},
{
        "word": "narcisista",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious_C2",
        "emoji": "🪞",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Ter interesse excessivo em si mesmo e na própria aparência ou realizações.",
                        "examples": [
                                "Alguns críticos descrevem a cultura das celebridades como narcisista."
                        ]
                }
        ]
},
{
        "word": "heterodoxo",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction_C2",
        "emoji": "🚩",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Contrário às crenças ou doutrinas estabelecidas ou aceitas.",
                        "examples": [
                                "Suas visões econômicas heterodoxas não eram populares na academia tradicional."
                        ]
                }
        ]
}
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];

    if ("adjectivesData" !== "vocabularyData") {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();