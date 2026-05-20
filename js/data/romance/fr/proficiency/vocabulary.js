(function() {
    const lang = "fr";
    const data = [
        {
                "word": "aporie",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🤔",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Un état de perplexité ou de difficulté découlant de contradictions dans un argument.",
                                "examples": [
                                        "Le dialogue se termine en aporie, sans qu'aucune réponse satisfaisante ne soit atteinte."
                                ]
                        }
                ]
        },
        {
                "word": "téléologie",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🎯",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "L'étude philosophique de la finalité ou de l'orientation vers un but dans la nature ou l'histoire.",
                                "examples": [
                                        "Son argument repose sur une vision téléologique du progrès humain."
                                ]
                        }
                ]
        },
        {
                "word": "ontologie",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "👻",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "La branche de la philosophie qui s'occupe de la nature de l'être ou de l'existence.",
                                "examples": [
                                        "Ses engagements ontologiques façonnent tout son argument."
                                ]
                        }
                ]
        },
        {
                "word": "réification",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🧱",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Le processus consistant à traiter quelque chose d'abstrait comme s'il s'agissait d'une chose concrète et réelle.",
                                "examples": [
                                        "La réification des forces du marché masque les décisions humaines qui les sous-tendent."
                                ]
                        }
                ]
        },
        {
                "word": "dialectique",
                "level": "proficiency",
                "theme": "meta_argument_deconstruction_C2",
                "emoji": "⚖️",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Une méthode d'argumentation impliquant la contradiction et la résolution.",
                                "examples": [
                                        "La dialectique entre liberté et sécurité définit la pensée libérale."
                                ]
                        }
                ]
        },
        {
                "word": "heuristique",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "💡",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Une approche de résolution de problèmes basée sur l'expérience plutôt que sur une preuve garantie.",
                                "examples": [
                                        "'Suivez l'argent' est une heuristique utile dans le journalisme d'investigation."
                                ]
                        }
                ]
        },
        {
                "word": "apophénie",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🕸️",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "La tendance à percevoir des liens significatifs entre des choses sans rapport.",
                                "examples": [
                                        "La pensée conspirationniste est alimentée par l'apophénie."
                                ]
                        }
                ]
        },
        {
                "word": "cognition motivée",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🧠",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "L'influence des désirs et des émotions sur le raisonnement et la formation des croyances.",
                                "examples": [
                                        "La cognition motivée explique pourquoi les gens résistent aux preuves importunes."
                                ]
                        }
                ]
        },
        {
                "word": "principe proactif",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🚀",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "La vision selon laquelle les risques de l'inaction doivent être pesés par rapport aux risques de l'action.",
                                "examples": [
                                        "Les transhumanistes invoquent souvent le principe proactif."
                                ]
                        }
                ]
        },
        {
                "word": "principe de précaution",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🛡️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "La vision selon laquelle les actions aux conséquences inconnues mais potentiellement nocives doivent être évitées.",
                                "examples": [
                                        "Le droit de l'environnement applique fréquemment le principe de précaution."
                                ]
                        }
                ]
        },
        {
                "word": "neutralité libérale",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "⚖️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Le principe libéral selon lequel l'État ne doit favoriser aucune vision particulière de la vie bonne.",
                                "examples": [
                                        "Les critiques soutiennent que la neutralité libérale est en soi une position morale substantielle."
                                ]
                        }
                ]
        },
        {
                "word": "pronatalisme",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "👶",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Une politique ou une idéologie qui encourage les gens à avoir plus d'enfants.",
                                "examples": [
                                        "Elle a critiqué les hypothèses pronatalistes intégrées dans la politique fiscale familiale."
                                ]
                        }
                ]
        },
        {
                "word": "sublimation",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🎨",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "La redirection d'une impulsion primitive vers une activité socialement acceptable.",
                                "examples": [
                                        "L'art est depuis longtemps compris comme une forme de sublimation."
                                ]
                        }
                ]
        },
        {
                "word": "jouissance",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🔥",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Dans la théorie psychanalytique, une forme excessive ou transgressive de plaisir.",
                                "examples": [
                                        "Žižek utilise le concept de jouissance pour expliquer l'attachement idéologique."
                                ]
                        }
                ]
        },
        {
                "word": "thanatos",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "💀",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Dans la théorie freudienne, la pulsion de mort.",
                                "examples": [
                                        "Le roman explore la tension entre eros et thanatos."
                                ]
                        }
                ]
        },
        {
                "word": "bathos",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "emoji": "📉",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Une transition brusque et décevante de l'élevé au trivial.",
                                "examples": [
                                        "Le discours est descendu dans le bathos au moment crucial."
                                ]
                        }
                ]
        },
        {
                "word": "apophase",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🤫",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Un procédé rhétorique consistant à attirer l'attention sur quelque chose en prétendant ne pas le mentionner.",
                                "examples": [
                                        "'Je ne mentionnerai pas son casier judiciaire' est une apophase classique."
                                ]
                        }
                ]
        },
        {
                "word": "paralepsis",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🙊",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Un autre terme pour apophase.",
                                "examples": [
                                        "La rhétorique politique repose souvent sur la paralepsis."
                                ]
                        }
                ]
        },
        {
                "word": "espace liminal",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🚪",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Une phase de transition ou un moment seuil entre deux états d'être.",
                                "examples": [
                                        "Le milieu de la vie peut être compris comme un espace liminal."
                                ]
                        }
                ]
        },
        {
                "word": "chiasme",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "❌",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Un procédé rhétorique dans lequel la seconde partie est une inversion de la première.",
                                "examples": [
                                        "'Ne demandez pas ce que votre pays peut faire pour vous' utilise le chiasme."
                                ]
                        }
                ]
        },
        {
                "word": "shibboleth",
                "level": "proficiency",
                "theme": "linguistics_theory_C2",
                "emoji": "🔑",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Une coutume, une expression ou une croyance utilisée pour identifier les membres d'un groupe particulier.",
                                "examples": [
                                        "'Les familles travailleuses' est devenu un shibboleth politique."
                                ]
                        }
                ]
        }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();