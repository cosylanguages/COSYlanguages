// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "abrupto",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "⏱️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Súbito e inesperado; brusco y áspero en el trato.",
                "examples": [
                    "La conversation llegó a un fin abrupto e inesperado."
                ]
            }
        ],
        "subtext": "un fin abrupto / trato abrupto / se detuvo abruptamente",
        "comparative": "más abrupto",
        "superlative": "el más abrupto",
        "synonyms": [
            "súbito",
            "brusco"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_001",
        "antonyms": [
            "gradual"
        ],
        "transcription": ""
    },
    {
        "word": "abstruso",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "oscuro",
            "recondito"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_002",
        "antonyms": [
            "simple"
        ],
        "transcription": ""
    },
    {
        "word": "anacrónico",
        "level": "proficiency",
        "theme": "art_culture",
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
        "synonyms": [
            "anticuado",
            "arcaico"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_art_culture_001",
        "antonyms": [
            "contemporáneo"
        ],
        "transcription": ""
    },
    {
        "word": "antitético",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "contrario",
            "opuesto"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_001",
        "antonyms": [
            "idéntico"
        ],
        "transcription": ""
    },
    {
        "word": "arcano",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "misterioso",
            "secreto"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_003",
        "antonyms": [
            "común"
        ],
        "transcription": ""
    },
    {
        "word": "atípico",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "inusual",
            "anormal"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_002",
        "antonyms": [
            "típico"
        ],
        "transcription": ""
    },
    {
        "word": "binario",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "dual",
            "doble"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_003",
        "antonyms": [
            "unitario"
        ],
        "transcription": ""
    },
    {
        "word": "categórico",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "absoluto",
            "incondicional"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_004",
        "antonyms": [
            "matizado"
        ],
        "transcription": ""
    },
    {
        "word": "circunspecto",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "prudente",
            "cauteloso"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_004",
        "antonyms": [
            "temerario"
        ],
        "transcription": ""
    },
    {
        "word": "encubierto",
        "level": "proficiency",
        "theme": "social",
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
        "synonyms": [
            "secreto",
            "clandestino"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_001",
        "antonyms": [
            "abierto"
        ],
        "transcription": ""
    },
    {
        "word": "dialéctico",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "lógico",
            "analítico"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_005",
        "transcription": ""
    },
    {
        "word": "difuso",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "disperso",
            "vago"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_006",
        "antonyms": [
            "concentrado"
        ],
        "transcription": ""
    },
    {
        "word": "elusivo",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "evasivo",
            "esquivo"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_005",
        "antonyms": [
            "alcanzable"
        ],
        "transcription": ""
    },
    {
        "word": "esotérico",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "arcano",
            "oscuro"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_006",
        "antonyms": [
            "exotérico"
        ],
        "transcription": ""
    },
    {
        "word": "falaz",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "falso",
            "erróneo"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_007",
        "antonyms": [
            "sólido"
        ],
        "transcription": ""
    },
    {
        "word": "inmutable",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "fijo",
            "permanente"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_007",
        "antonyms": [
            "mutable"
        ],
        "transcription": ""
    },
    {
        "word": "imparcial",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que no favorece a un lado sobre otro; justo.",
                "examples": [
                    "El panel debe ser completamente imparcial in su juicio."
                ]
            }
        ],
        "subtext": "completamente imparcial / estrictamente imparcial / un observador imparcial",
        "comparative": "más imparcial",
        "superlative": "el más imparcial",
        "synonyms": [
            "justo",
            "neutro"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_008",
        "antonyms": [
            "parcial"
        ],
        "transcription": ""
    },
    {
        "word": "incidental",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "secundario",
            "menor"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_008",
        "antonyms": [
            "central"
        ],
        "transcription": ""
    },
    {
        "word": "inherente",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "innato",
            "intrínseco"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_009",
        "antonyms": [
            "extrínseco"
        ],
        "transcription": ""
    },
    {
        "word": "inimitable",
        "level": "proficiency",
        "theme": "art_culture",
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
        "synonyms": [
            "único",
            "inigualable"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_art_culture_002",
        "antonyms": [
            "común"
        ],
        "transcription": ""
    },
    {
        "word": "insidioso",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "subrepticio",
            "sutil"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_010",
        "antonyms": [
            "directo"
        ],
        "transcription": ""
    },
    {
        "word": "irreconciliable",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "incompatible",
            "conflictivo"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_009",
        "antonyms": [
            "compatible"
        ],
        "transcription": ""
    },
    {
        "word": "liminal",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "transicional",
            "umbral"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_011",
        "transcription": ""
    },
    {
        "word": "múltiplo",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "numeroso",
            "diverso"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_012",
        "antonyms": [
            "único"
        ],
        "transcription": ""
    },
    {
        "word": "nebuloso",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "vago",
            "difuso"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_013",
        "antonyms": [
            "distinto"
        ],
        "transcription": ""
    },
    {
        "word": "normativo",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "prescriptivo",
            "estandarizador"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_014",
        "antonyms": [
            "descriptivo"
        ],
        "transcription": ""
    },
    {
        "word": "matizado",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "sutil",
            "refinado"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_010",
        "antonyms": [
            "tosco"
        ],
        "transcription": ""
    },
    {
        "word": "oblicuo",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "indirecto",
            "sesgado"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_011",
        "antonyms": [
            "directo"
        ],
        "transcription": ""
    },
    {
        "word": "opaco",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "oscuro",
            "poco claro"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_012",
        "antonyms": [
            "transparente"
        ],
        "transcription": ""
    },
    {
        "word": "ostensible",
        "level": "proficiency",
        "theme": "language",
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
        "subtext": "el objetivo ostensible / ostensiblemente correcto / motivation ostensible",
        "comparative": "más ostensible",
        "superlative": "el más ostensible",
        "synonyms": [
            "aparente",
            "supuesto"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_013",
        "antonyms": [
            "genuino"
        ],
        "transcription": ""
    },
    {
        "word": "paradójico",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "contradictorio",
            "irónico"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_014",
        "antonyms": [
            "coherente"
        ],
        "transcription": ""
    },
    {
        "word": "pervasivo",
        "level": "proficiency",
        "theme": "art_culture",
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
        "synonyms": [
            "difuso",
            "prevalente"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_art_culture_003",
        "antonyms": [
            "raro"
        ],
        "transcription": ""
    },
    {
        "word": "polarizador",
        "level": "proficiency",
        "theme": "social",
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
        "synonyms": [
            "divisivo",
            "conflictivo"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_002",
        "antonyms": [
            "unificador"
        ],
        "transcription": ""
    },
    {
        "word": "precario",
        "level": "proficiency",
        "theme": "psychology",
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
        "synonyms": [
            "inestable",
            "arriesgado"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_015",
        "antonyms": [
            "estable"
        ],
        "transcription": ""
    },
    {
        "word": "prescriptivo",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "dictatorial",
            "rígido"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_015",
        "antonyms": [
            "descriptivo"
        ],
        "transcription": ""
    },
    {
        "word": "prolongado",
        "level": "proficiency",
        "theme": "art_culture",
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
        "synonyms": [
            "extenso",
            "largo"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_art_culture_004",
        "antonyms": [
            "breve"
        ],
        "transcription": ""
    },
    {
        "word": "reductor",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "simplista",
            "minimalista"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_016",
        "antonyms": [
            "complejo"
        ],
        "transcription": ""
    },
    {
        "word": "seminal",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Muy importante e influyente; original.",
                "examples": [
                    "Este fue un momento seminal in la historia de la empresa."
                ]
            }
        ],
        "subtext": "verdaderamente seminal / una obra seminal / una figura seminal",
        "comparative": "más seminal",
        "superlative": "el más seminal",
        "synonyms": [
            "influente",
            "innovador"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_art_culture_005",
        "antonyms": [
            "insignificante"
        ],
        "transcription": ""
    },
    {
        "word": "especioso",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "engañoso",
            "ilusorio"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_017",
        "antonyms": [
            "válido"
        ],
        "transcription": ""
    },
    {
        "word": "espurio",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "falso",
            "ficticio"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_018",
        "antonyms": [
            "auténtico"
        ],
        "transcription": ""
    },
    {
        "word": "subversivo",
        "level": "proficiency",
        "theme": "social",
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
        "synonyms": [
            "rebelde",
            "disruptivo"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_003",
        "antonyms": [
            "conformista"
        ],
        "transcription": ""
    },
    {
        "word": "tácito",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "implícito",
            "sobrentendido"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_019",
        "antonyms": [
            "explícito"
        ],
        "transcription": ""
    },
    {
        "word": "tenue",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "frágil",
            "débil"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_020",
        "antonyms": [
            "fuerte"
        ],
        "transcription": ""
    },
    {
        "word": "transitorio",
        "level": "proficiency",
        "theme": "time",
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
        "synonyms": [
            "temporal",
            "fugaz"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_time_001",
        "antonyms": [
            "permanente"
        ],
        "transcription": ""
    },
    {
        "word": "ubicuista",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que aparece en todas partes; muy común.",
                "examples": [
                    "Los smartphones se han vuelto ubiquistas in la vida cotidiana."
                ]
            }
        ],
        "subtext": "verdaderamente ubiquista / aparentemente ubiquista / volverse ubiquista",
        "comparative": "más ubiquista",
        "superlative": "el más ubiquista",
        "synonyms": [
            "omnipresente",
            "omnipresente"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_art_culture_006",
        "antonyms": [
            "raro"
        ],
        "transcription": ""
    },
    {
        "word": "inequívoco",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "unívoco",
            "claro"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_021",
        "antonyms": [
            "ambiguo"
        ],
        "transcription": ""
    },
    {
        "word": "sin precedentes",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🚀",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que nunca ha ocurrido antes.",
                "examples": [
                    "La empresa alcanzó un crecimiento sin precedentes in cinco años."
                ]
            }
        ],
        "subtext": "verdaderamente sin precedentes / completamente sin precedentes / un evento sin precedentes",
        "comparative": "más inaudito",
        "superlative": "el más inaudito",
        "synonyms": [
            "único",
            "innovador"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_art_culture_007",
        "antonyms": [
            "común"
        ],
        "transcription": ""
    },
    {
        "word": "insostenible",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "indefendible",
            "insostenible"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_022",
        "antonyms": [
            "defendible"
        ],
        "transcription": ""
    },
    {
        "word": "pesado",
        "level": "proficiency",
        "theme": "language",
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
        "synonyms": [
            "engorroso",
            "farragoso"
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_023",
        "antonyms": [
            "manejable"
        ],
        "transcription": ""
    },
    {
        "word": "hermenéutico",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relativo a la interpretación de textos o significados.",
                "examples": [
                    "Adoptó un enfoque hermenéutico para analizar los discursos políticos."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_024",
        "transcription": ""
    },
    {
        "word": "tautológico",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Decir lo mismo dos veces con palabras diferentes; razonamiento circular.",
                "examples": [
                    "El argumento es tautológico: asume lo que pretende demostrar."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_025",
        "transcription": ""
    },
    {
        "word": "polisémico",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔠",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que tiene múltiples significados.",
                "examples": [
                    "La palabra 'libertad' es profundamente polisémica in el discurso político."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_026",
        "transcription": ""
    },
    {
        "word": "postcolonial",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relativo al periodo posterior al dominio colonial, o a la crítica de los legados coloniales.",
                "examples": [
                    "La teoría postcolonial cuestiona los supuestos occidentales sobre el progreso."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_004",
        "transcription": ""
    },
    {
        "word": "multipolar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que describe un orden mundial con varios centros de poder in lugar de uno o dos.",
                "examples": [
                    "Un mundo multipolar puede ser más inestable pero más representativo."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_005",
        "transcription": ""
    },
    {
        "word": "cosmopolita",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏙️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Familiarizado y a gusto in muchos países y culturas diferentes.",
                "examples": [
                    "Tenía una visión cosmopolita de la obligación política."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_006",
        "transcription": ""
    },
    {
        "word": "narcisista",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🪞",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que tiene un interés excesivo in sí mismo y in su apariencia o logros.",
                "examples": [
                    "Algunos críticos describen la cultura de las celebridades como narcisista."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_psychology_016",
        "transcription": ""
    },
    {
        "word": "heterodoxo",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚩",
        "form": "adjective",
        "definitions": [
            {
                "text": "Contrario a las creencias o doctrinas establecidas o aceptadas.",
                "examples": [
                    "Sus puntos de vista económicos heterodoxos no eran populares in la academia tradicional."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_language_027",
        "transcription": ""
    }
];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
