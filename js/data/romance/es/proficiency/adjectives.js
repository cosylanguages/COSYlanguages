(function() {
    const lang = "es";
    const data = [
        {
            "word": "abrupto",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⏱️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Súbito e inesperado; brusco y áspero en el trato.",
                    "examples": [
                        "La conversación llegó a un fin abrupto e inesperado."
                    ]
                }
            ],
            "subtext": "un fin abrupto / trato abrupto / se detuvo abruptamente",
            "comparative": "más abrupto",
            "superlative": "el más abrupto",
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
                    "text": "Difícil de comprender; oscuro o complejo.",
                    "examples": [
                        "El artículo fue criticado por su marco teórico abstruso."
                    ]
                }
            ],
            "subtext": "muy abstruso / bastante abstruso / un argumento abstruso",
            "comparative": "más abstruso",
            "superlative": "el más abstruso",
            "synonyms": ["oscuro", "recondito"],
            "opposite": "simple"
        },
        {
            "word": "anacrónico",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Anticuado; que pertenece a una época anterior.",
                    "examples": [
                        "La política parece completamente anacrónica en el contexto actual."
                    ]
                }
            ],
            "subtext": "totalmente anacrónico / cada vez más anacrónico / profundamente anacrónico",
            "comparative": "más anacrónico",
            "superlative": "el más anacrónico",
            "synonyms": ["anticuado", "arcaico"],
            "opposite": "contemporáneo"
        },
        {
            "word": "antitético",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Directamente opuesto o contrario a algo.",
                    "examples": [
                        "Sus acciones eran antitéticas a los valores que decía defender."
                    ]
                }
            ],
            "subtext": "directamente antitético / completamente antitético / antitético a",
            "comparative": "más antitético",
            "superlative": "el más antitético",
            "synonyms": ["contrario", "opuesto"],
            "opposite": "idéntico"
        },
        {
            "word": "arcano",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🔮",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Conocido solo por pocas personas; misterioso y secreto.",
                    "examples": [
                        "El procedimiento era innecesariamente arcano e inaccesible."
                    ]
                }
            ],
            "subtext": "muy arcano / totalmente arcano / conocimiento arcano",
            "comparative": "más arcano",
            "superlative": "el más arcano",
            "synonyms": ["misterioso", "secreto"],
            "opposite": "común"
        },
        {
            "word": "atípico",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🦄",
            "form": "adjective",
            "definitions": [
                {
                    "text": "No típico; no normal o habitual.",
                    "examples": [
                        "Este fue un caso atípico que no refleja la norma."
                    ]
                }
            ],
            "subtext": "muy atípico / altamente atípico / estadísticamente atípico",
            "comparative": "más atípico",
            "superlative": "el más atípico",
            "synonyms": ["inusual", "anormal"],
            "opposite": "típico"
        },
        {
            "word": "binario",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Compuesto por dos cosas; basado en una dicotomía.",
                    "examples": [
                        "El debate presenta un falso binario entre crecimiento y justicia."
                    ]
                }
            ],
            "subtext": "un falso binario / una elección binaria / no puramente binario",
            "comparative": "más binario",
            "superlative": "el más binario",
            "synonyms": ["dual", "doble"],
            "opposite": "unitario"
        },
        {
            "word": "categórico",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "❗",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Absoluto; expresado sin excepciones ni condiciones.",
                    "examples": [
                        "Ella dio una negación categórica de las acusaciones."
                    ]
                }
            ],
            "subtext": "una negación categórica / rechazado categóricamente / absolutamente categórico",
            "comparative": "más categórico",
            "superlative": "el más categórico",
            "synonyms": ["absoluto", "incondicional"],
            "opposite": "matizado"
        },
        {
            "word": "circunspecto",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🛡️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Cauteloso al considerar todas las circunstancias; prudente.",
                    "examples": [
                        "Fue circunspecto en sus declaraciones públicas."
                    ]
                }
            ],
            "subtext": "muy circunspecto / extremadamente circunspecto / permanecer circunspecto",
            "comparative": "más circunspecto",
            "superlative": "el más circunspecto",
            "synonyms": ["prudente", "cauteloso"],
            "opposite": "temerario"
        },
        {
            "word": "encubierto",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🕵️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Oculto; secreto; no reconocido abiertamente.",
                    "examples": [
                        "La operación involucró vigilancia encubierta del grupo."
                    ]
                }
            ],
            "subtext": "totalmente encubierto / una operación encubierta / profundamente encubierto",
            "comparative": "más encubierto",
            "superlative": "el más encubierto",
            "synonyms": ["secreto", "clandestino"],
            "opposite": "abierto"
        },
        {
            "word": "dialéctico",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Relativo a la discusión lógica de ideas a través de opuestos.",
                    "examples": [
                        "El análisis emplea un método dialéctico en su totalidad."
                    ]
                }
            ],
            "subtext": "un enfoque dialéctico / tensión dialéctica / resuelto dialécticamente",
            "comparative": "más dialéctico",
            "superlative": "el más dialéctico",
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
                    "text": "Extendido por un área amplia; falto de claridad.",
                    "examples": [
                        "El argumento fue demasiado difuso para causar una fuerte impresión."
                    ]
                }
            ],
            "subtext": "muy difuso / bastante difuso / una respuesta difusa",
            "comparative": "más difuso",
            "superlative": "el más difuso",
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
                    "text": "Difícil de encontrar, capturar o alcanzar.",
                    "examples": [
                        "La verdad en este caso resultó notablemente elusiva."
                    ]
                },
                {
                    "text": "Difícil de comprender o recordar.",
                    "examples": [
                        "Un consenso claro sigue siendo elusivo."
                    ]
                }
            ],
            "subtext": "muy elusivo / permanece elusivo / un objetivo elusivo / una cualidad elusiva",
            "comparative": "más elusivo",
            "superlative": "el más elusivo",
            "synonyms": ["evasivo", "esquivo"],
            "opposite": "alcanzable"
        },
        {
            "word": "esotérico",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🗝️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Comprendido por o destinado solo a un pequeño grupo.",
                    "examples": [
                        "El debate se volvió demasiado esotérico para un público general."
                    ]
                }
            ],
            "subtext": "muy esotérico / bastante esotérico / profundamente esotérico",
            "comparative": "más esotérico",
            "superlative": "el más esotérico",
            "synonyms": ["arcano", "oscuro"],
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
                    "text": "Basado en un razonamiento falso; engañoso.",
                    "examples": [
                        "Su argumento es fundamentalmente falaz."
                    ]
                }
            ],
            "subtext": "profundamente falaz / lógicamente falaz / una afirmación falaz",
            "comparative": "más falaz",
            "superlative": "el más falaz",
            "synonyms": ["falso", "erróneo"],
            "opposite": "sólido"
        },
        {
            "word": "inmutable",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧱",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Incapaz de ser alterado; fijo y permanente.",
                    "examples": [
                        "El lenguaje no es inmutable — evoluciona constantemente."
                    ]
                }
            ],
            "subtext": "completamente inmutable / no inmutable / un hecho inmutable",
            "comparative": "más inmutable",
            "superlative": "el más inmutable",
            "synonyms": ["fijo", "permanente"],
            "opposite": "mutable"
        },
        {
            "word": "imparcial",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que no favorece a un lado sobre otro; justo.",
                    "examples": [
                        "El panel debe ser completamente imparcial en su juicio."
                    ]
                }
            ],
            "subtext": "completamente imparcial / estrictamente imparcial / un observador imparcial",
            "comparative": "más imparcial",
            "superlative": "el más imparcial",
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
                    "text": "Que ocurre como una parte menor de otra cosa.",
                    "examples": [
                        "El ahorro fue incidental en lugar del objetivo principal."
                    ]
                }
            ],
            "subtext": "puramente incidental / meramente incidental / incidental a",
            "comparative": "más incidental",
            "superlative": "el más incidental",
            "synonyms": ["secundario", "menor"],
            "opposite": "central"
        },
        {
            "word": "inherente",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Existente en algo como una cualidad natural y permanente.",
                    "examples": [
                        "El sistema es inherentemente defectuoso y necesita ser rediseñado."
                    ]
                }
            ],
            "subtext": "inherentemente defectuoso / inherentemente sesgado / inherentemente problemático",
            "comparative": "más inherente",
            "superlative": "el más inherente",
            "synonyms": ["innato", "intrínseco"],
            "opposite": "extrínseco"
        },
        {
            "word": "inimitable",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "emoji": "🌟",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Tan bueno o inusual que es imposible de copiar.",
                    "examples": [
                        "Ella tiene una manera inimitable de aclarar ideas complejas."
                    ]
                }
            ],
            "subtext": "verdaderamente inimitable / absolutamente inimitable / un estilo inimitable",
            "comparative": "más inimitable",
            "superlative": "el más inimitable",
            "synonyms": ["único", "inigualable"],
            "opposite": "común"
        },
        {
            "word": "insidioso",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🐍",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que progresa gradualmente de una manera perjudicial.",
                    "examples": [
                        "Los efectos del estrés a largo plazo pueden ser insidiosos."
                    ]
                }
            ],
            "subtext": "muy insidioso / profundamente insidioso / un proceso insidioso",
            "comparative": "más insidioso",
            "superlative": "el más insidioso",
            "synonyms": ["subrepticio", "sutil"],
            "opposite": "directo"
        },
        {
            "word": "irreconciliable",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚫",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Incapaz de ser conciliado o hecho compatible.",
                    "examples": [
                        "Las dos posiciones son fundamentalmente irreconciliables."
                    ]
                }
            ],
            "subtext": "fundamentalmente irreconciliable / completamente irreconciliable / diferencias irreconciliables",
            "comparative": "más irreconciliable",
            "superlative": "el más irreconciliable",
            "synonyms": ["incompatible", "conflictivo"],
            "opposite": "compatible"
        },
        {
            "word": "liminal",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🚪",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Relativo a un estado de transición o intermedio.",
                    "examples": [
                        "Los meses posteriores al despido son un período verdaderamente liminal."
                    ]
                }
            ],
            "subtext": "un espacio liminal / una fase liminal / profundamente liminal",
            "comparative": "más liminal",
            "superlative": "el más liminal",
            "synonyms": ["transicional", "umbral"]
        },
        {
            "word": "múltiplo",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Numeroso y de varios tipos diferentes.",
                    "examples": [
                        "Las implicaciones de esta decisión son múltiples."
                    ]
                }
            ],
            "subtext": "implicaciones múltiples / problemas múltiples / desafíos múltiples",
            "comparative": "más múltiplo",
            "superlative": "el más múltiplo",
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
                    "text": "No claro; vago y mal definido.",
                    "examples": [
                        "El concepto permanece un poco nebuloso en el informe."
                    ]
                }
            ],
            "subtext": "muy nebuloso / bastante nebuloso / peligrosamente nebuloso",
            "comparative": "más nebuloso",
            "superlative": "el más nebuloso",
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
                    "text": "Relativo a una norma; que prescribe lo que debería ser.",
                    "examples": [
                        "Esta es una afirmación normativa, no descriptiva."
                    ]
                }
            ],
            "subtext": "un marco normativo / presupuesto normativo / afirmación normativa",
            "comparative": "más normativo",
            "superlative": "el más normativo",
            "synonyms": ["prescriptivo", "estandarizador"],
            "opposite": "descriptivo"
        },
        {
            "word": "matizado",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌗",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que muestra distinciones sutiles; no simple o extremo.",
                    "examples": [
                        "El informe hace un relato muy matizado del asunto."
                    ]
                }
            ],
            "subtext": "muy matizado / altamente matizado / un argumento matizado",
            "comparative": "más matizado",
            "superlative": "el más matizado",
            "synonyms": ["sutil", "refinado"],
            "opposite": "tosco"
        },
        {
            "word": "oblicuo",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "↗️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "No directo; indirecto; que no es recto o abierto.",
                    "examples": [
                        "Dio una respuesta oblicua que no satisfizo a nadie."
                    ]
                }
            ],
            "subtext": "un poco oblicuo / muy oblicuo / una referencia oblicua",
            "comparative": "más oblicuo",
            "superlative": "el más oblicuo",
            "synonyms": ["indirecto", "sesgado"],
            "opposite": "directo"
        },
        {
            "word": "opaco",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌑",
            "form": "adjective",
            "definitions": [
                {
                    "text": "No transparente; difícil de comprender.",
                    "examples": [
                        "El razonamiento del gobierno fue completamente opaco."
                    ]
                }
            ],
            "subtext": "muy opaco / completamente opaco / profundamente opaco",
            "comparative": "más opaco",
            "superlative": "el más opaco",
            "synonyms": ["oscuro", "poco claro"],
            "opposite": "transparente"
        },
        {
            "word": "ostensible",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🎭",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que parece ser algo; declarado como real o verdadero.",
                    "examples": [
                        "El objetivo ostensible era la eficiencia; el real era el control."
                    ]
                }
            ],
            "subtext": "el objetivo ostensible / ostensiblemente correcto / motivación ostensible",
            "comparative": "más ostensible",
            "superlative": "el más ostensible",
            "synonyms": ["aparente", "supuesto"],
            "opposite": "genuino"
        },
        {
            "word": "paradójico",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que se contradice pero que contiene una verdad.",
                    "examples": [
                        "Es paradójico que hacer menos pueda, a veces, lograr más."
                    ]
                }
            ],
            "subtext": "aparentemente paradójico / profundamente paradójico / una situación paradójica",
            "comparative": "más paradójico",
            "superlative": "el más paradójico",
            "synonyms": ["contradictorio", "irónico"],
            "opposite": "coherente"
        },
        {
            "word": "pervasivo",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌊",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Presente en todas partes; que se extiende ampliamente.",
                    "examples": [
                        "Una cultura de exceso de trabajo es pervasiva en este sector."
                    ]
                }
            ],
            "subtext": "muy pervasivo / cada vez más pervasivo / pervasivo",
            "comparative": "más pervasivo",
            "superlative": "el más pervasivo",
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
                    "text": "Que hace que las personas tomen posiciones opuestas.",
                    "examples": [
                        "La propuesta fue profundamente polarizadora dentro de la organización."
                    ]
                }
            ],
            "subtext": "profundamente polarizador / extremadamente polarizador / altamente polarizador",
            "comparative": "más polarizador",
            "superlative": "el más polarizador",
            "synonyms": ["divisivo", "conflictivo"],
            "opposite": "unificador"
        },
        {
            "word": "precario",
            "level": "proficiency",
            "theme": "ontology_existence_C2",
            "emoji": "🧗",
            "form": "adjective",
            "definitions": [
                {
                    "text": "No seguro o cierto; dependiente del azar.",
                    "examples": [
                        "Ella dejó una vida de freelance precario por un puesto estable."
                    ]
                }
            ],
            "subtext": "muy precario / profundamente precario / una posición precaria",
            "comparative": "más precario",
            "superlative": "el más precario",
            "synonyms": ["inestable", "arriesgado"],
            "opposite": "estable"
        },
        {
            "word": "prescriptivo",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que dicta lo que debe hacerse; que establece reglas.",
                    "examples": [
                        "Las directrices son demasiado prescriptivas para permitir la creatividad."
                    ]
                }
            ],
            "subtext": "muy prescriptivo / altamente prescriptivo / excesivamente prescriptivo",
            "comparative": "más prescriptivo",
            "superlative": "el más prescriptivo",
            "synonyms": ["dictatorial", "rígido"],
            "opposite": "descriptivo"
        },
        {
            "word": "prolongado",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que dura más de lo esperado; dilatado.",
                    "examples": [
                        "La disputa legal fue larga y prolongada."
                    ]
                }
            ],
            "subtext": "muy prolongado / extremadamente prolongado / un proceso prolongado",
            "comparative": "más prolongado",
            "superlative": "el más prolongado",
            "synonyms": ["extenso", "largo"],
            "opposite": "breve"
        },
        {
            "word": "reductor",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📉",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que simplifica excesivamente algo complejo.",
                    "examples": [
                        "Sería reductor explicar todo solo como codicia."
                    ]
                }
            ],
            "subtext": "muy reductor / profundamente reductor / una análisis reductor",
            "comparative": "más reductor",
            "superlative": "el más reductor",
            "synonyms": ["simplista", "minimalista"],
            "opposite": "complejo"
        },
        {
            "word": "seminal",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌱",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Muy importante e influyente; original.",
                    "examples": [
                        "Este fue un momento seminal en la historia de la empresa."
                    ]
                }
            ],
            "subtext": "verdaderamente seminal / una obra seminal / una figura seminal",
            "comparative": "más seminal",
            "superlative": "el más seminal",
            "synonyms": ["influente", "innovador"],
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
                    "text": "Que parece correcto pero es, en realidad, falso; engañoso.",
                    "examples": [
                        "El argumento es superficialmente atractivo, pero finalmente especioso."
                    ]
                }
            ],
            "subtext": "muy especioso / una afirmación especiosa / fundamentalmente especioso",
            "comparative": "más especioso",
            "superlative": "el más especioso",
            "synonyms": ["engañoso", "ilusorio"],
            "opposite": "válido"
        },
        {
            "word": "espurio",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🤡",
            "form": "adjective",
            "definitions": [
                {
                    "text": "No genuino; basado en un razonamiento falso.",
                    "examples": [
                        "Esta es una comparación espuria que distorsiona el debate."
                    ]
                }
            ],
            "subtext": "completamente espurio / totalmente espurio / un argumento espurio",
            "comparative": "más espurio",
            "superlative": "el más espurio",
            "synonyms": ["falso", "ficticio"],
            "opposite": "auténtico"
        },
        {
            "word": "subversivo",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "💣",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Destinado a socavar un sistema establecido.",
                    "examples": [
                        "La obra de arte fue vista como subversiva por las autoridades."
                    ]
                }
            ],
            "subtext": "discretamente subversivo / profundamente subversivo / abiertamente subversivo",
            "comparative": "más subversivo",
            "superlative": "el más subversivo",
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
                    "text": "Entendido o acordado sin ser declarado.",
                    "examples": [
                        "Había un entendimiento tácito entre ellos."
                    ]
                }
            ],
            "subtext": "un acuerdo tácito / aprobación tácita / permanecer tácito",
            "comparative": "más tácito",
            "superlative": "el más tácito",
            "synonyms": ["implícito", "sobrentendido"],
            "opposite": "explícito"
        },
        {
            "word": "tenue",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🕸️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Muy débil o ligero; no establecido firmemente.",
                    "examples": [
                        "El vínculo entre los dos eventos es muy tenue."
                    ]
                }
            ],
            "subtext": "muy tenue / bastante tenue / un vínculo tenue",
            "comparative": "más tenue",
            "superlative": "el más tenue",
            "synonyms": ["frágil", "débil"],
            "opposite": "fuerte"
        },
        {
            "word": "transitorio",
            "level": "proficiency",
            "theme": "mortality_time_C2",
            "emoji": "🌅",
            "form": "adjective",
            "definitions": [
                {
                    "text": "No permanente; que pasa rápidamente.",
                    "examples": [
                        "Los beneficios fueron transitorios y desaparecieron en meses."
                    ]
                }
            ],
            "subtext": "muy transitorio / meramente transitorio / un efecto transitorio",
            "comparative": "más transitorio",
            "superlative": "el más transitorio",
            "synonyms": ["temporal", "fugaz"],
            "opposite": "permanente"
        },
        {
            "word": "ubicuista",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que aparece en todas partes; muy común.",
                    "examples": [
                        "Los smartphones se han vuelto ubiquistas en la vida cotidiana."
                    ]
                }
            ],
            "subtext": "verdaderamente ubiquista / aparentemente ubiquista / volverse ubiquista",
            "comparative": "más ubiquista",
            "superlative": "el más ubiquista",
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
                    "text": "Que no deja dudas; completamente claro.",
                    "examples": [
                        "Su apoyo a la decisión fue inequívoco."
                    ]
                }
            ],
            "subtext": "completamente inequívoco / absolutamente inequívoco / un rechazo inequívoco",
            "comparative": "más inequívoco",
            "superlative": "el más inequívoco",
            "synonyms": ["unívoco", "claro"],
            "opposite": "ambiguo"
        },
        {
            "word": "sin precedentes",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🚀",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Que nunca ha ocurrido antes.",
                    "examples": [
                        "La empresa alcanzó un crecimiento sin precedentes en cinco años."
                    ]
                }
            ],
            "subtext": "verdaderamente sin precedentes / completamente sin precedentes / un evento sin precedentes",
            "comparative": "más inaudito",
            "superlative": "el más inaudito",
            "synonyms": ["único", "innovador"],
            "opposite": "común"
        },
        {
            "word": "insostenible",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🏗️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "No capaz de ser mantenido o defendido.",
                    "examples": [
                        "Su posición se volvió completamente insostenible."
                    ]
                }
            ],
            "subtext": "completamente insostenible / totalmente insostenible / un argumento insostenible",
            "comparative": "más insostenible",
            "superlative": "el más insostenible",
            "synonyms": ["indefendible", "insostenible"],
            "opposite": "defendible"
        },
        {
            "word": "pesado",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📦",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Difícil de manejar o gestionar debido al tamaño o la complejidad.",
                    "examples": [
                        "El proceso se volvió pesado e ineficiente."
                    ]
                }
            ],
            "subtext": "muy pesado / bastante pesado / un sistema pesado",
            "comparative": "más pesado",
            "superlative": "el más pesado",
            "synonyms": ["engorroso", "farragoso"],
            "opposite": "manejable"
        }
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
