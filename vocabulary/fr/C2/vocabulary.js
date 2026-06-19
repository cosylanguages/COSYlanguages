// TODO: verify level classification
(function() {
    const lang = "fr";
    const data = [
    {
        "id": "fr_proficiency_language_001",
        "word": "aporie",
        "lang": "fr",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤔",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_language_002",
        "word": "téléologie",
        "lang": "fr",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎯",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_language_003",
        "word": "ontologie",
        "lang": "fr",
        "level": "proficiency",
        "theme": "language",
        "emoji": "👻",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_language_004",
        "word": "réification",
        "lang": "fr",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_language_005",
        "word": "dialectique",
        "lang": "fr",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_psychology_001",
        "word": "heuristique",
        "lang": "fr",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_psychology_002",
        "word": "apophénie",
        "lang": "fr",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🕸️",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_psychology_003",
        "word": "cognition motivée",
        "lang": "fr",
        "level": "proficiency",
        "theme": "psychology",
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
        "id": "fr_proficiency_psychology_004",
        "word": "principe proactif",
        "lang": "fr",
        "level": "proficiency",
        "theme": "psychology",
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
        "id": "fr_proficiency_psychology_005",
        "word": "principe de précaution",
        "lang": "fr",
        "level": "proficiency",
        "theme": "psychology",
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
        "id": "fr_proficiency_social_001",
        "word": "neutralité libérale",
        "lang": "fr",
        "level": "proficiency",
        "theme": "social",
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
        "id": "fr_proficiency_social_002",
        "word": "pronatalisme",
        "lang": "fr",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_psychology_006",
        "word": "sublimation",
        "lang": "fr",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_psychology_007",
        "word": "jouissance",
        "lang": "fr",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_psychology_008",
        "word": "thanatos",
        "lang": "fr",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💀",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_art_culture_001",
        "word": "bathos",
        "lang": "fr",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "📉",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_language_006",
        "word": "apophase",
        "lang": "fr",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_language_007",
        "word": "paralepsis",
        "lang": "fr",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🙊",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_language_008",
        "word": "espace liminal",
        "lang": "fr",
        "level": "proficiency",
        "theme": "language",
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
        "id": "fr_proficiency_language_009",
        "word": "chiasme",
        "lang": "fr",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "noun",
        "classification": "regular",
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
        "id": "fr_proficiency_language_010",
        "word": "shibboleth",
        "lang": "fr",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
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