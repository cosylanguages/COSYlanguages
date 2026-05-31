// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "aporia",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_137"
    },
    {
        "word": "teleologia",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_138"
    },
    {
        "word": "ontologia",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_139"
    },
    {
        "word": "reificação",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_140"
    },
    {
        "word": "dialética",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_141"
    },
    {
        "word": "heurística",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_142"
    },
    {
        "word": "apofenia",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_143"
    },
    {
        "word": "cognição motivada",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_144"
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
        "sub_theme": null,
        "id": "pt_proficiency_social_145"
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
        "sub_theme": null,
        "id": "pt_proficiency_social_146"
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
        "sub_theme": null,
        "id": "pt_proficiency_social_147"
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
        "sub_theme": null,
        "id": "pt_proficiency_social_148"
    },
    {
        "word": "sublimação",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_149"
    },
    {
        "word": "jouissance",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_150"
    },
    {
        "word": "thanatos",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_151"
    },
    {
        "word": "bathos",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_152"
    },
    {
        "word": "apófase",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_153"
    },
    {
        "word": "paralepsis",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_154"
    },
    {
        "word": "espaço liminar",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_155"
    },
    {
        "word": "quiasmo",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_156"
    },
    {
        "word": "shibboleth",
        "level": "proficiency",
        "theme": "social",
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
        "sub_theme": null,
        "id": "pt_proficiency_social_157"
    }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();