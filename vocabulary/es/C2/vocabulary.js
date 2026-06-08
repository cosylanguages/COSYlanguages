// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "aporía",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🤔",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Estado de perplejidad o dificultad que surge de contradicciones en un argumento.",
                "examples": [
                    "El diálogo termina en aporía, sin llegar a ninguna respuesta satisfactoria."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_033"
    },
    {
        "word": "teleología",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎯",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "El estudio filosófico del propósito o la finalidad en la naturaleza o la historia.",
                "examples": [
                    "Su argumento se basa en una visión teleológica del progreso humano."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_034"
    },
    {
        "word": "ontología",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "👻",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "La rama de la filosofía que se ocupa de la naturaleza del ser o la existencia.",
                "examples": [
                    "Sus compromisos ontológicos dan forma a todo su argumento."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_035"
    },
    {
        "word": "cosificación",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "El proceso de tratar algo abstracto como si fuera una cosa concreta y real.",
                "examples": [
                    "La cosificación de las fuerzas del mercado oculta las decisiones humanas detrás de ellas."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_036"
    },
    {
        "word": "dialéctica",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un método de argumentación que implica contradicción y resolución.",
                "examples": [
                    "La dialéctica entre libertad y seguridad define el pensamiento liberal."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_044"
    },
    {
        "word": "heurístico",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un enfoque de resolución de problemas basado en la experiencia en lugar de una prueba garantizada.",
                "examples": [
                    "'Sigue el dinero' es una heurística útil en el periodismo de investigación."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_037"
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
                "text": "La tendencia a percibir conexiones significativas entre cosas no relacionadas.",
                "examples": [
                    "El pensamiento conspirativo es impulsado por la apofenia."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_038"
    },
    {
        "word": "cognición motivada",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧠",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "La influencia de los deseos y emociones en el razonamiento y la formación de creencias.",
                "examples": [
                    "La cognición motivada explica por qué la gente se resiste a la evidencia no deseada."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_039"
    },
    {
        "word": "principio proactivo",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🚀",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "La visión de que los riesgos de la inacción deben sopesarse frente a los riesgos de la acción.",
                "examples": [
                    "Los transhumanistas a menudo invocan el principio proactivo."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "behavior",
        "id": "es_proficiency_psychology_040"
    },
    {
        "word": "principio de precaución",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🛡️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "La visión de que deben evitarse las acciones con consecuencias desconocidas pero potencialmente dañinas.",
                "examples": [
                    "El derecho ambiental aplica frecuentemente el principio de precaución."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "behavior",
        "id": "es_proficiency_psychology_041"
    },
    {
        "word": "neutralidad liberal",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "El principio liberal de que el estado no debe favorecer ninguna visión particular de la buena vida.",
                "examples": [
                    "Los críticos argumentan que la neutralidad liberal es en sí misma una posición moral sustantiva."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_032"
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
                "text": "Una política o ideología que anima a la gente a tener más hijos.",
                "examples": [
                    "Ella criticó los supuestos pronatalistas integrados en la política fiscal familiar."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_033"
    },
    {
        "word": "sublimación",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "La redirección de un impulso primitivo hacia una actividad socialmente aceptable.",
                "examples": [
                    "El arte ha sido entendido durante mucho tiempo como una forma de sublimación."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "behavior",
        "id": "es_proficiency_psychology_042"
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
                "text": "En la teoría psicoanalítica, una forma excesiva o transgresora de disfrute.",
                "examples": [
                    "Žižek utiliza el concepto de jouissance para explicar el apego ideológico."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "behavior",
        "id": "es_proficiency_psychology_043"
    },
    {
        "word": "tánatos",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💀",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "En la teoría freudiana, la pulsión de muerte.",
                "examples": [
                    "La novela explora la tensión entre eros y tánatos."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "behavior",
        "id": "es_proficiency_psychology_044"
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
                "text": "Una transición abrupta y decepcionante de lo elevado a lo trivial.",
                "examples": [
                    "El discurso descendió al bathos en el momento crucial."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "art",
        "id": "es_proficiency_art_culture_013"
    },
    {
        "word": "apofasis",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un recurso retórico de llamar la atención sobre algo afirmando no mencionarlo.",
                "examples": [
                    "'No mencionaré sus antecedentes penales' es una apofasis clásica."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_045"
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
                "text": "Otro término para la apofasis.",
                "examples": [
                    "La retórica política a menudo se basa en la paralepsis."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_046"
    },
    {
        "word": "espacio liminal",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🚪",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Una fase de transición o momento umbral entre dos estados del ser.",
                "examples": [
                    "La mediana edad puede entenderse como un espacio liminal."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_045"
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
                "text": "Un recurso retórico en el que la segunda parte es una inversión de la primera.",
                "examples": [
                    "'No preguntes qué puede hacer tu país por ti' usa el quiasmo."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_047"
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
                "text": "Una costumbre, frase o creencia utilizada para identificar a los miembros de un grupo particular.",
                "examples": [
                    "'Familias trabajadoras' se ha convertido en un shibboleth político."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "phonetics",
        "id": "es_proficiency_language_048"
    }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();