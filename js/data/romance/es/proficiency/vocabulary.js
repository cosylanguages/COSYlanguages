(function() {
    const lang = "es";
    const data = [
        {
                "word": "aporía",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🤔",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Estado de perplejidad o dificultad que surge de contradicciones en un argumento.",
                                "examples": [
                                        "El diálogo termina en aporía, sin llegar a ninguna respuesta satisfactoria."
                                ]
                        }
                ]
        },
        {
                "word": "teleología",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🎯",
                "form": "noun",
                "definitions": [
                        {
                                "text": "El estudio filosófico del propósito o la finalidad en la naturaleza o la historia.",
                                "examples": [
                                        "Su argumento se basa en una visión teleológica del progreso humano."
                                ]
                        }
                ]
        },
        {
                "word": "ontología",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "👻",
                "form": "noun",
                "definitions": [
                        {
                                "text": "La rama de la filosofía que se ocupa de la naturaleza del ser o la existencia.",
                                "examples": [
                                        "Sus compromisos ontológicos dan forma a todo su argumento."
                                ]
                        }
                ]
        },
        {
                "word": "cosificación",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🧱",
                "form": "noun",
                "definitions": [
                        {
                                "text": "El proceso de tratar algo abstracto como si fuera una cosa concreta y real.",
                                "examples": [
                                        "La cosificación de las fuerzas del mercado oculta las decisiones humanas detrás de ellas."
                                ]
                        }
                ]
        },
        {
                "word": "dialéctica",
                "level": "proficiency",
                "theme": "meta_argument_deconstruction_C2",
                "emoji": "⚖️",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Un método de argumentación que implica contradicción y resolución.",
                                "examples": [
                                        "La dialéctica entre libertad y seguridad define el pensamiento liberal."
                                ]
                        }
                ]
        },
        {
                "word": "heurístico",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "💡",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Un enfoque de resolución de problemas basado en la experiencia en lugar de una prueba garantizada.",
                                "examples": [
                                        "'Sigue el dinero' es una heurística útil en el periodismo de investigación."
                                ]
                        }
                ]
        },
        {
                "word": "apofenia",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🕸️",
                "form": "noun",
                "definitions": [
                        {
                                "text": "La tendencia a percibir conexiones significativas entre cosas no relacionadas.",
                                "examples": [
                                        "El pensamiento conspirativo es impulsado por la apofenia."
                                ]
                        }
                ]
        },
        {
                "word": "cognición motivada",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🧠",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "La influencia de los deseos y emociones en el razonamiento y la formación de creencias.",
                                "examples": [
                                        "La cognición motivada explica por qué la gente se resiste a la evidencia no deseada."
                                ]
                        }
                ]
        },
        {
                "word": "principio proactivo",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🚀",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "La visión de que los riesgos de la inacción deben sopesarse frente a los riesgos de la acción.",
                                "examples": [
                                        "Los transhumanistas a menudo invocan el principio proactivo."
                                ]
                        }
                ]
        },
        {
                "word": "principio de precaución",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🛡️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "La visión de que deben evitarse las acciones con consecuencias desconocidas pero potencialmente dañinas.",
                                "examples": [
                                        "El derecho ambiental aplica frecuentemente el principio de precaución."
                                ]
                        }
                ]
        },
        {
                "word": "neutralidad liberal",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "⚖️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "El principio liberal de que el estado no debe favorecer ninguna visión particular de la buena vida.",
                                "examples": [
                                        "Los críticos argumentan que la neutralidad liberal es en sí misma una posición moral sustantiva."
                                ]
                        }
                ]
        },
        {
                "word": "pronatalismo",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "👶",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Una política o ideología que anima a la gente a tener más hijos.",
                                "examples": [
                                        "Ella criticó los supuestos pronatalistas integrados en la política fiscal familiar."
                                ]
                        }
                ]
        },
        {
                "word": "sublimación",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🎨",
                "form": "noun",
                "definitions": [
                        {
                                "text": "La redirección de un impulso primitivo hacia una actividad socialmente aceptable.",
                                "examples": [
                                        "El arte ha sido entendido durante mucho tiempo como una forma de sublimación."
                                ]
                        }
                ]
        },
        {
                "word": "jouissance",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🔥",
                "form": "noun",
                "definitions": [
                        {
                                "text": "En la teoría psicoanalítica, una forma excesiva o transgresora de disfrute.",
                                "examples": [
                                        "Žižek utiliza el concepto de jouissance para explicar el apego ideológico."
                                ]
                        }
                ]
        },
        {
                "word": "tánatos",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "💀",
                "form": "noun",
                "definitions": [
                        {
                                "text": "En la teoría freudiana, la pulsión de muerte.",
                                "examples": [
                                        "La novela explora la tensión entre eros y tánatos."
                                ]
                        }
                ]
        },
        {
                "word": "bathos",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "emoji": "📉",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Una transición abrupta y decepcionante de lo elevado a lo trivial.",
                                "examples": [
                                        "El discurso descendió al bathos en el momento crucial."
                                ]
                        }
                ]
        },
        {
                "word": "apofasis",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🤫",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Un recurso retórico de llamar la atención sobre algo afirmando no mencionarlo.",
                                "examples": [
                                        "'No mencionaré sus antecedentes penales' es una apofasis clásica."
                                ]
                        }
                ]
        },
        {
                "word": "paralepsis",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🙊",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Otro término para la apofasis.",
                                "examples": [
                                        "La retórica política a menudo se basa en la paralepsis."
                                ]
                        }
                ]
        },
        {
                "word": "espacio liminal",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🚪",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Una fase de transición o momento umbral entre dos estados del ser.",
                                "examples": [
                                        "La mediana edad puede entenderse como un espacio liminal."
                                ]
                        }
                ]
        },
        {
                "word": "quiasmo",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "❌",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Un recurso retórico en el que la segunda parte es una inversión de la primera.",
                                "examples": [
                                        "'No preguntes qué puede hacer tu país por ti' usa el quiasmo."
                                ]
                        }
                ]
        },
        {
                "word": "shibboleth",
                "level": "proficiency",
                "theme": "linguistics_theory_C2",
                "emoji": "🔑",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Una costumbre, frase o creencia utilizada para identificar a los miembros de un grupo particular.",
                                "examples": [
                                        "'Familias trabajadoras' se ha convertido en un shibboleth político."
                                ]
                        }
                ]
        }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();