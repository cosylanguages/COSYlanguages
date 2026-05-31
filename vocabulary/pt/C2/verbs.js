// TODO: verify level classification
(function() {
const data = [
    {
        "word": "reificar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🗿",
        "subtext": "reificar um conceito / reificar o mercado / reificação do trabalho",
        "form": "verb",
        "definitions": [
            {
                "text": "Considerar uma ideia abstrata como se fosse algo material ou concreto.",
                "examples": [
                    "Os modelos económicos reificam as forças de mercado, fazendo-as parecer naturais."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reifiquei",
        "v3": "reificado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "reificando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_082"
    },
    {
        "word": "sublimar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🎭",
        "subtext": "sublimar o desejo / sublimação do impulso / redirecionar para",
        "form": "verb",
        "definitions": [
            {
                "text": "Canalizar impulsos ou sentimentos para atividades socialmente aceites ou criativas.",
                "examples": [
                    "Ele sublimou a sua frustração política na escrita académica."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sublimei",
        "v3": "sublimado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "sublimando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_083"
    },
    {
        "word": "predicar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🗣️",
        "subtext": "predicar de / predicar uma afirmação / baseado no pressuposto",
        "form": "verb",
        "definitions": [
            {
                "text": "Afirmar algo do sujeito; ou basear uma afirmação em algo.",
                "examples": [
                    "O seu argumento predica um nível de confiança que já não existe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "prediquei",
        "v3": "predicado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "predicando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_084"
    },
    {
        "word": "instanciar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📋",
        "subtext": "instanciar um conceito / instanciar na prática",
        "form": "verb",
        "definitions": [
            {
                "text": "Representar ou ilustrar algo abstrato através de um exemplo concreto.",
                "examples": [
                    "O estudo de caso instancia a teoria da captura regulatória."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "instanciei",
        "v3": "instanciado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "instanciando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_085"
    },
    {
        "word": "negar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "❌",
        "subtext": "negar um argumento / negar um direito / negação dialética",
        "form": "verb",
        "definitions": [
            {
                "text": "Invalidar ou anular algo.",
                "examples": [
                    "A nova cláusula nega efetivamente o direito que parece conceder."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "neguei",
        "v3": "negado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_086"
    },
    {
        "word": "transcender",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌌",
        "subtext": "transcender limites / transcender categorias / transcender o pessoal",
        "form": "verb",
        "definitions": [
            {
                "text": "Ir além dos limites de algo.",
                "examples": [
                    "A grande arte transcende o momento histórico da sua criação."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "transcendi",
        "v3": "transcendido",
        "group": "er",
        "auxiliary": "ter",
        "v4": "transcendiendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_087"
    },
    {
        "word": "mediar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "mediar entre / mediar um conflito / socialmente mediado",
        "form": "verb",
        "definitions": [
            {
                "text": "Intervir para reconciliar ou conectar duas partes.",
                "examples": [
                    "A linguagem medeia a nossa relação com o mundo exterior."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "mediei",
        "v3": "mediado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_088"
    },
    {
        "word": "elidir",
        "level": "proficiency",
        "theme": "social",
        "emoji": "✂️",
        "subtext": "elidir uma distinção / elidir a diferença / elidir deliberadamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Omitir ou passar por alto algo intencionalmente.",
                "examples": [
                    "O relatório elide a diferença entre pobreza e privação."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "elidi",
        "v3": "elidido",
        "group": "ir",
        "auxiliary": "ter",
        "v4": "elidiendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_089"
    },
    {
        "word": "ofuscar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌫️",
        "subtext": "ofuscar a verdade / ofuscação deliberada / ofuscar com jargão",
        "form": "verb",
        "definitions": [
            {
                "text": "Tornar algo confuso ou difícil de entender, muitas vezes deliberadamente.",
                "examples": [
                    "A linguagem técnica parecia desenhada para ofuscar, não para clarificar."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ofusquei",
        "v3": "ofuscado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "ofuscando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_090"
    },
    {
        "word": "conflacionar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌀",
        "subtext": "conflacionar questões / conflacionar com / conflacionar perigosamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Combinar duas ou mais ideias numa só, muitas vezes de forma errada.",
                "examples": [
                    "O debate conflaciona a migração irregular com a imigração ilegal."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "conflacionei",
        "v3": "conflacionado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "conflacionando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_091"
    },
    {
        "word": "invocar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📜",
        "subtext": "invocar um direito / invocar um precedente / invocar um argumento",
        "form": "verb",
        "definitions": [
            {
                "text": "Citar ou apelar a algo como autoridade para uma ação.",
                "examples": [
                    "Ela invocou o direito à liberdade de expressão na sua defesa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invoquei",
        "v3": "invocado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "invocando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_092"
    },
    {
        "word": "destacar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🔦",
        "subtext": "destacar um problema / destacar uma perspetiva / destacar deliberadamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer com que algo seja o foco de atenção.",
                "examples": [
                    "O filme destaca deliberadamente a raça como a sua lente central."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "destaquei",
        "v3": "destacado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "destacando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_093"
    },
    {
        "word": "recuperar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "♻️",
        "subtext": "recuperar um movimento / ser recuperado por / recuperação cultural",
        "form": "verb",
        "definitions": [
            {
                "text": "Incorporar algo (como uma estética rebelde) na cultura dominante.",
                "examples": [
                    "A indústria da moda recuperou a estética rebelde do punk."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recuperei",
        "v3": "recuperado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "recuperando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_094"
    },
    {
        "word": "desestabilizar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "desestabilizar um regime / desestabilizar pressupostos / desestabilizar deliberadamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer com que algo se torne instável ou perca o seu equilíbrio.",
                "examples": [
                    "A evidência desestabiliza a premissa central do relatório."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "desestabilizei",
        "v3": "desestabilizado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "desestabilizando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_095"
    },
    {
        "word": "mercantilizar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "💰",
        "subtext": "mercantilizar o trabalho / mercantilizar o cuidado / mercantilização da atenção",
        "form": "verb",
        "definitions": [
            {
                "text": "Tratar algo como um produto comercial que pode ser comprado e vendido.",
                "examples": [
                    "A indústria do bem-estar mercantiliza a saúde mental e o autocuidado."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mercantilizei",
        "v3": "mercantilizado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "mercantilizando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_096"
    },
    {
        "word": "instrumentalizar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛠️",
        "subtext": "instrumentalizar pessoas / instrumentalizar uma ideia",
        "form": "verb",
        "definitions": [
            {
                "text": "Utilizar algo ou alguém simplesmente como um meio para atingir um fim.",
                "examples": [
                    "Os críticos argumentaram que a política instrumentalizava o bem-estar dos trabalhadores."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "instrumentalizei",
        "v3": "instrumentalizado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "instrumentalizando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_097"
    },
    {
        "word": "valorizar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "💎",
        "subtext": "valorizar o trabalho / valorizar um conceito / ser valorizado pela cultura",
        "form": "verb",
        "definitions": [
            {
                "text": "Atribuir um grande valor ou importância a algo.",
                "examples": [
                    "A cultura moderna valoriza a produtividade acima do descanso e da quietude."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "valorizei",
        "v3": "valorizado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "valorizando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_098"
    },
    {
        "word": "fetichizar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧿",
        "subtext": "fetichizar uma ideia / fetichismo da mercadoria / fetichizar o crescimento",
        "form": "verb",
        "definitions": [
            {
                "text": "Ter um compromisso ou interesse excessivo e irracional por algo.",
                "examples": [
                    "A cultura das startups fetichiza a disrupção como um fim em si mesma."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fetichizei",
        "v3": "fetichizado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "fetichizando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_099"
    },
    {
        "word": "alienar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👽",
        "subtext": "alienar alguém / sentir-se alienado / alienação do trabalho",
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer com que alguém se sinta isolado ou separado do seu ambiente ou de si mesmo.",
                "examples": [
                    "As condições industriais alienam os trabalhadores de qualquer sentido de ofício."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "alienei",
        "v3": "alienado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "alienando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_100"
    },
    {
        "word": "demarcar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚧",
        "subtext": "demarcar um limite / demarcar claramente / linha de demarcação",
        "form": "verb",
        "definitions": [
            {
                "text": "Estabelecer os limites de algo.",
                "examples": [
                    "A lei tenta demarcar a linha entre regulação e censura."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "demarquei",
        "v3": "demarcado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "demarcando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_101"
    },
    {
        "word": "delimitar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📏",
        "subtext": "delimitar o alcance / delimitar um conceito / cuidadosamente delimitado",
        "form": "verb",
        "definitions": [
            {
                "text": "Determinar ou fixar com precisão os limites de algo.",
                "examples": [
                    "O estudo delimita deliberadamente o seu alcance para evitar a sobregeneralização."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "delimitei",
        "v3": "delimitado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "delimitando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_102"
    },
    {
        "word": "militar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "subtext": "militar contra / militar fortemente / militar a favor de",
        "form": "verb",
        "definitions": [
            {
                "text": "(De um facto ou circunstância) ter peso ou influência contra algo.",
                "examples": [
                    "A complexidade do sistema milita contra uma reforma eficaz."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "militei",
        "v3": "militado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "militando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_103"
    },
    {
        "word": "viciar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "☣️",
        "subtext": "viciar uma afirmação / viciar um argumento / legalmente viciado",
        "form": "verb",
        "definitions": [
            {
                "text": "Invalidar ou arruinar a eficácia de algo.",
                "examples": [
                    "A falha metodológica vicia as conclusões centrais do estudo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "viciei",
        "v3": "viciado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "viciando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_104"
    },
    {
        "word": "contradizer",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🗣️",
        "subtext": "difícil de contradizer / ninguém pode contradizer / contradizer uma afirmação",
        "form": "verb",
        "definitions": [
            {
                "text": "Negar ou dizer o contrário do que alguém disse.",
                "examples": [
                    "É difícil contradizer a evidência apresentada pelo inquérito."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "contradisse",
        "v3": "contraditado",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_105"
    },
    {
        "word": "ab-rogar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📜",
        "subtext": "ab-rogar um acordo / ab-rogar um tratado / ab-rogação unilateral",
        "form": "verb",
        "definitions": [
            {
                "text": "Abolir ou anular uma lei ou acordo formal.",
                "examples": [
                    "O governo procurou ab-rogar o tratado unilateralmente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ab-roguei",
        "v3": "ab-rogado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "ab-rogando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_106"
    },
    {
        "word": "contrair",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚫",
        "subtext": "contrair uma lei / contrair regulamentos / contrair um acordo",
        "form": "verb",
        "definitions": [
            {
                "text": "Agir contra o que estabelece uma lei ou norma.",
                "examples": [
                    "A decisão foi considerada como contraindo a lei de concorrência da UE."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "contravim",
        "v3": "contravindo",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_107"
    },
    {
        "word": "subsumir",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📂",
        "subtext": "subsumir sob / ser subsumido por / subsumir numa categoria",
        "form": "verb",
        "definitions": [
            {
                "text": "Incluir algo como parte de um grupo ou categoria mais ampla.",
                "examples": [
                    "A sua teoria subsume todos os relatos anteriores dentro de um quadro único."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "subsumi",
        "v3": "subsumido",
        "group": "ir",
        "auxiliary": "ter",
        "v4": "subsumiendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_108"
    },
    {
        "word": "desconstruir",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧩",
        "subtext": "desconstruir um argumento / desconstruir um texto / desconstrução derridiana",
        "form": "verb",
        "definitions": [
            {
                "text": "Analisar um texto ou argumento para expor as suas contradições internas e pressupostos.",
                "examples": [
                    "Ela desconstruiu a política para revelar o seu viés ideológico."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "desconstruí",
        "v3": "desconstruído",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_109"
    },
    {
        "word": "precluir",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚪",
        "subtext": "precluir uma opção / precluir o debate / precluir a possibilidade de",
        "form": "verb",
        "definitions": [
            {
                "text": "Impedir ou excluir algo com antecedência.",
                "examples": [
                    "A formulação da pergunta preclui as respostas mais interessantes."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "precluí",
        "v3": "precluído",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_110"
    },
    {
        "word": "dialetizar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "☯️",
        "subtext": "dialetizar um binário / método dialético / tese e antítese",
        "form": "verb",
        "definitions": [
            {
                "text": "Tratar algo de forma dialética, considerando a interação de forças opostas.",
                "examples": [
                    "Ele dialetiza a oposição entre liberdade e segurança."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dialetizei",
        "v3": "dialetizado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "dialetizando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_111"
    },
    {
        "word": "hegemonizar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👑",
        "subtext": "hegemonizar o discurso / resistir à hegemonização",
        "form": "verb",
        "definitions": [
            {
                "text": "Exercer uma influência dominante sobre um campo ou discurso.",
                "examples": [
                    "Um quadro teórico passou a hegemonizar todo o campo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hegemonizei",
        "v3": "hegemonizado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "hegemonizando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_112"
    },
    {
        "word": "acentuar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🔊",
        "subtext": "acentuar uma diferença / acentuar o positivo / ser acentuado por",
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer com que algo seja mais notável ou proeminente.",
                "examples": [
                    "A crise acentuou as desigualdades existentes em toda a força de trabalho."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acentuei",
        "v3": "acentuado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "acentuando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_113"
    },
    {
        "word": "aquiescer",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🤝",
        "subtext": "aquiescer a / aquiescer em / aquiescência relutante",
        "form": "verb",
        "definitions": [
            {
                "text": "Aceitar ou concordar com algo, muitas vezes de forma silenciosa ou passiva.",
                "examples": [
                    "Ele aquiesceu à decisão da administração apesar das suas fortes reservas."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "aquiesci",
        "v3": "aquiescido",
        "group": "er",
        "auxiliary": "ter",
        "v4": "aquiesciendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_114"
    },
    {
        "word": "aliviar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🩹",
        "subtext": "aliviar o sofrimento / aliviar a pobreza / aliviar a pressão",
        "form": "verb",
        "definitions": [
            {
                "text": "Fazer com que um problema ou sintoma seja menos grave.",
                "examples": [
                    "A nova política fez pouco para aliviar a crise na habitação."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "aliviei",
        "v3": "aliviado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "aliviando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_115"
    },
    {
        "word": "contornar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏃",
        "subtext": "contornar as regras / contornar um problema / contornar controlos",
        "form": "verb",
        "definitions": [
            {
                "text": "Evitar habilmente uma dificuldade ou obstáculo.",
                "examples": [
                    "Ela encontrou uma forma legal de contornar o obstáculo burocrático."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contornei",
        "v3": "contornado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "contornando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_116"
    },
    {
        "word": "corroborar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "✅",
        "subtext": "corroborar uma afirmação / corroborar evidência / ser corroborado por",
        "form": "verb",
        "definitions": [
            {
                "text": "Confirmar ou apoiar uma teoria ou declaração com evidência adicional.",
                "examples": [
                    "O depoimento da testemunha corroborou plenamente a prova documental."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "corroborei",
        "v3": "corroborado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "corroborando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_117"
    },
    {
        "word": "disseminar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📢",
        "subtext": "disseminar informação / disseminar descobertas / amplamente disseminado",
        "form": "verb",
        "definitions": [
            {
                "text": "Espalhar informação ou conhecimentos amplamente.",
                "examples": [
                    "As descobertas foram disseminadas através de redes de investigação internacionais."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "disseminei",
        "v3": "disseminado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "disseminando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_118"
    },
    {
        "word": "encapsular",
        "level": "proficiency",
        "theme": "social",
        "emoji": "💊",
        "subtext": "encapsular uma ideia / encapsular o problema / encapsular perfeitamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Expressar as características essenciais de algo de forma concisa.",
                "examples": [
                    "A frase encapsula perfeitamente o paradoxo do trabalho moderno."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "encapsulei",
        "v3": "encapsulado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "encapsulando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_119"
    },
    {
        "word": "engendrar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌱",
        "subtext": "engendrar confiança / engendrar conflito / engendrar ressentimento",
        "form": "verb",
        "definitions": [
            {
                "text": "Causar ou dar lugar a um sentimento, situação ou condição.",
                "examples": [
                    "A nova política engendrou um ressentimento considerável entre o pessoal."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "engendrei",
        "v3": "engendrado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "engendrando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_120"
    },
    {
        "word": "exacerbar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🔥",
        "subtext": "exacerbar um problema / exacerbar tensões / exacerbar a desigualdade",
        "form": "verb",
        "definitions": [
            {
                "text": "Tornar um problema ou situação negativa ainda pior.",
                "examples": [
                    "A recessão económica exacerbou as desigualdades sociais existentes."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exacerbei",
        "v3": "exacerbado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "exacerbando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_121"
    },
    {
        "word": "exemplificar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📖",
        "subtext": "exemplificar algo / exemplificar o problema / exemplificar claramente",
        "form": "verb",
        "definitions": [
            {
                "text": "Ser um exemplo típico de algo.",
                "examples": [
                    "A sua carreira exemplifica os desafios que as mulheres enfrentam em cargos de alta direção."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exemplifiquei",
        "v3": "exemplificado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "exemplificando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_122"
    },
    {
        "word": "impedir",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚧",
        "subtext": "impedir o progresso / impedir o crescimento / impedir alguém de fazer",
        "form": "verb",
        "definitions": [
            {
                "text": "Dificultar ou atrasar o progresso de algo.",
                "examples": [
                    "A regulação excessiva pode impedir a inovação em novas indústrias."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "impedi",
        "v3": "impedido",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_123"
    },
    {
        "word": "mitigar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "subtext": "mitigar o risco / mitigar o impacto / mitigar contra",
        "form": "verb",
        "definitions": [
            {
                "text": "Tornar algo menos grave, sério ou doloroso.",
                "examples": [
                    "Uma boa comunicação pode ajudar a mitigar o impacto da mudança."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mitiguei",
        "v3": "mitigado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "mitigando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_124"
    },
    {
        "word": "obrigar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "ser obrigado a / obrigar alguém a / sentir-se obrigado",
        "form": "verb",
        "definitions": [
            {
                "text": "Compelir alguém a fazer algo, legal ou moralmente.",
                "examples": [
                    "A lei obriga todos os empregadores a fornecer um ambiente de trabalho seguro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "obriguei",
        "v3": "obrigado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "obrigando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_125"
    },
    {
        "word": "pervadir",
        "level": "proficiency",
        "theme": "social",
        "emoji": "💧",
        "subtext": "pervadir a organização / ser pervadido por / omnipresente",
        "form": "verb",
        "definitions": [
            {
                "text": "Estar presente em todas as partes de algo.",
                "examples": [
                    "Uma cultura de excesso de trabalho pervade o setor de serviços financeiros."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "pervadi",
        "v3": "pervadido",
        "group": "ir",
        "auxiliary": "ter",
        "v4": "pervadiendo",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_126"
    },
    {
        "word": "excluir",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚫",
        "subtext": "excluir alguém de / excluir a possibilidade / não excluir",
        "form": "verb",
        "definitions": [
            {
                "text": "Impedir que algo aconteça ou que alguém participe.",
                "examples": [
                    "A sua falta de experiência relevante excluiu-o da lista de candidatos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "excluí",
        "v3": "excluído",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_127"
    },
    {
        "word": "reconciliar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🤝",
        "subtext": "reconciliar ideias / difícil de reconciliar / reconciliar diferenças",
        "form": "verb",
        "definitions": [
            {
                "text": "Encontrar uma forma de duas ideias ou situações opostas existirem juntas.",
                "examples": [
                    "Ela considerou impossível reconciliar os seus valores com a cultura da empresa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reconciliei",
        "v3": "reconciliado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "reconciliando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_128"
    },
    {
        "word": "substituir",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🔄",
        "subtext": "substituir uma lei / substituir diretrizes anteriores / ser substituído por",
        "form": "verb",
        "definitions": [
            {
                "text": "Tomar o lugar de algo que era usado anteriormente.",
                "examples": [
                    "As novas diretrizes irão substituir todas as versões anteriores."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "substituí",
        "v3": "substituído",
        "group": "ir",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_129"
    },
    {
        "word": "alicerçar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚓",
        "subtext": "alicerçar um argumento / alicerçar o sucesso / ser alicerçado por",
        "form": "verb",
        "definitions": [
            {
                "text": "Servir como base ou apoio para algo.",
                "examples": [
                    "Uma forte confiança alicerça todas as parcerias de sucesso a longo prazo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "alicercei",
        "v3": "alicerçado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "alicerçando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_130"
    },
    {
        "word": "vincular",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏆",
        "subtext": "vincular alguém / vincular uma decisão / sentir-se vinculado",
        "form": "verb",
        "definitions": [
            {
                "text": "Demonstrar que alguém ou algo está correto ou justificado.",
                "examples": [
                    "Os resultados vincularam a sua decisão polémica dois anos depois."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "vinculei",
        "v3": "vinculado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "vinculando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_131"
    },
    {
        "word": "depender de",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⛓️",
        "subtext": "depender de uma decisão / depender de um único fator / tudo depende de",
        "form": "verb",
        "definitions": [
            {
                "text": "Estar determinado por ou condicionado a algo.",
                "examples": [
                    "Todo o sucesso do projeto depende da aprovação do cliente."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "dependeu de",
        "v3": "dependido",
        "group": "er",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_132"
    },
    {
        "word": "lidar com",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🤼",
        "subtext": "lidar com um problema / lidar com as implicações / lidar com a complexidade",
        "form": "verb",
        "definitions": [
            {
                "text": "Esforçar-se para tratar ou compreender um problema difícil.",
                "examples": [
                    "Os decisores políticos ainda estão a lidar com as implicações da IA."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lidei com",
        "v3": "lidado",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_133"
    },
    {
        "word": "ignorar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🙈",
        "subtext": "ignorar um problema / ignorar os detalhes / não ignorar",
        "form": "verb",
        "definitions": [
            {
                "text": "Tratar algo como se não fosse importante; passar por alto.",
                "examples": [
                    "O relatório ignora os detalhes financeiros mais polémicos."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ignorei",
        "v3": "ignorado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "ignorando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_134"
    },
    {
        "word": "disfarçar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🩹",
        "subtext": "disfarçar um problema / disfarçar fendas / disfarçar diferenças",
        "form": "verb",
        "definitions": [
            {
                "text": "Tentar esconder ou ignorar uma situação difícil para que pareça melhor do que é.",
                "examples": [
                    "O acordo apenas disfarçou as profundas divisões estruturais."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "disfarcei",
        "v3": "disfarçado",
        "group": "ar",
        "auxiliary": "ter",
        "v4": "disfarçando",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_135"
    },
    {
        "word": "mudança de paradigma",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🔄",
        "subtext": "uma mudança fundamental na abordagem",
        "form": "verb",
        "definitions": [
            {
                "text": "Uma mudança fundamental na abordagem ou nos pressupostos subjacentes.",
                "examples": [
                    "A adoção desta nova tecnologia representa uma mudança de paradigma na indústria."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "mudou de paradigma",
        "v3": "mudado de paradigma",
        "group": "ar",
        "auxiliary": "ter",
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_proficiency_social_136"
    }
];
    const lang = "pt";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);

})();