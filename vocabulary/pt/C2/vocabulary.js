// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "aporia",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤔",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Um estado de perplexidade ou dificuldade decorrente de contradições em um argumento.",
                "examples": [
                    "O diálogo termina em aporia, sem que se chegue a nenhuma resposta satisfatória."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_language_001"
    },
    {
        "word": "teleologia",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎯",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "O estudo filosófico do propósito ou finalidade na natureza ou na história.",
                "examples": [
                    "O seu argumento baseia-se numa visão teleológica do progresso humano."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_language_002"
    },
    {
        "word": "ontologia",
        "level": "proficiency",
        "theme": "language",
        "emoji": "👻",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "O ramo da filosofia preocupado com a natureza do ser ou da existência.",
                "examples": [
                    "Os seus compromissos ontológicos moldam todo o seu argumento."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_language_003"
    },
    {
        "word": "reificação",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "O processo de tratar algo abstrato como se fosse uma coisa concreta e real.",
                "examples": [
                    "A reificação das forças de mercado mascara as decisões humanas por trás delas."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_language_004"
    },
    {
        "word": "dialética",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Um método de argumentação que envolve contradição e resolução.",
                "examples": [
                    "A dialética entre liberdade e segurança define o pensamento liberal."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_language_005"
    },
    {
        "word": "heurística",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Uma abordagem de resolução de problemas baseada na experiência em vez de prova garantida.",
                "examples": [
                    "'Siga o dinheiro' é uma heurística útil no jornalismo de investigação."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_psychology_001"
    },
    {
        "word": "apofenia",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🕸️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "A tendência de perceber conexões significativas entre coisas não relacionadas.",
                "examples": [
                    "O pensamento conspiratório é impulsionado pela apofenia."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_psychology_002"
    },
    {
        "word": "cognição motivada",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧠",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A influência de desejos e emoções no raciocínio e na formação de crenças.",
                "examples": [
                    "A cognição motivada explica por que as pessoas resistem a evidências indesejadas."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_psychology_003"
    },
    {
        "word": "princípio proativo",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚀",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A visão de que os riscos da inação devem ser pesados contra os riscos da ação.",
                "examples": [
                    "Os transumanistas invocam frequentemente o princípio proativo."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_social_001"
    },
    {
        "word": "princípio da precaução",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A visão de que ações com consequências desconhecidas mas potencialmente prejudiciais devem ser evitadas.",
                "examples": [
                    "O direito ambiental aplica frequentemente o princípio da precaução."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_social_002"
    },
    {
        "word": "neutralidade liberal",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "O princípio liberal de que o Estado não deve favorecer nenhuma visão particular da vida boa.",
                "examples": [
                    "Os críticos argumentam que a neutralidade liberal é, ela própria, uma posição moral substantiva."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_social_003"
    },
    {
        "word": "pronatalismo",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Uma política ou ideologia que incentiva as pessoas a terem mais filhos.",
                "examples": [
                    "Ela criticou os pressupostos pronatalistas incorporados na política fiscal familiar."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_social_004"
    },
    {
        "word": "sublimação",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "O redirecionamento de um impulso primitivo para uma atividade socialmente aceitável.",
                "examples": [
                    "A arte tem sido entendida há muito tempo como uma forma de sublimação."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_psychology_004"
    },
    {
        "word": "jouissance",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Na teoria psicanalítica, uma forma excessiva ou transgressiva de prazer.",
                "examples": [
                    "Žižek usa o conceito de jouissance para explicar o apego ideológico."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_psychology_005"
    },
    {
        "word": "thanatos",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💀",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Na teoria freudiana, a pulsão de morte.",
                "examples": [
                    "O romance explora a tensão entre eros e thanatos."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_psychology_006"
    },
    {
        "word": "bathos",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "📉",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Uma transição abrupta e decepcionante do elevado para o trivial.",
                "examples": [
                    "O discurso descambou para o bathos no momento crucial."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_art_culture_001"
    },
    {
        "word": "apófase",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Um recurso retórico de chamar a atenção para algo afirmando não mencioná-lo.",
                "examples": [
                    "'Não mencionarei o seu registo criminal' é uma apófase clássica."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_language_006"
    },
    {
        "word": "paralepsis",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🙊",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Outro termo para apófase.",
                "examples": [
                    "A retórica política baseia-se frequentemente na paralepsis."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_language_007"
    },
    {
        "word": "espaço liminar",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Uma fase de transição ou momento de limiar entre dois estados de ser.",
                "examples": [
                    "A meia-idade pode ser entendida como um espaço liminar."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_language_008"
    },
    {
        "word": "quiasmo",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Um recurso retórico em que a segunda parte é uma inversão da primeira.",
                "examples": [
                    "'Não perguntes o que o teu país pode fazer por ti' usa o quiasmo."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_language_009"
    },
    {
        "word": "shibboleth",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Um costume, frase ou crença usada para identificar membros de um grupo específico.",
                "examples": [
                    "'Famílias trabalhadoras' tornou-se um shibboleth político."
                ]
            }
        ],
        "lang": "pt",
        "id": "pt_proficiency_language_010"
    }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();