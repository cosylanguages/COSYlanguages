(function() {
    const data = [
    {
        "word": "dans",
        "image": "images/vocabulary/in.png",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "À l'intérieur de.",
                "examples": [
                    "Le chat est dans la boîte."
                ]
            }
        ],
        "transcription": "/dɑ̃/"
    },
    {
        "word": "sur",
        "image": "images/vocabulary/on.png",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "En contact avec le haut de.",
                "examples": [
                    "Le livre est sur la table."
                ]
            }
        ],
        "transcription": "/syʁ/"
    },
    {
        "word": "à",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "Lieu ou direction.",
                "examples": [
                    "Je vais à Paris."
                ]
            }
        ],
        "transcription": "/a/"
    },
    {
        "word": "sous",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "En dessous de.",
                "examples": [
                    "Le chien est sous la table."
                ]
            }
        ],
        "transcription": "/su/"
    },
    {
        "word": "toujours",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "♾️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Tout le temps.",
                "examples": [
                    "Je bois toujours de l'eau."
                ]
            }
        ],
        "transcription": "/tu.ʒuʁ/"
    },
    {
        "word": "habituellement",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🔄",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "D'habitude.",
                "examples": [
                    "D'habitude, je finis à 18h."
                ]
            }
        ],
        "transcription": "/a.bi.tɥɛl.mɑ̃/"
    },
    {
        "word": "souvent",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🔁",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Plusieurs fois.",
                "examples": [
                    "Je vais souvent au cinéma."
                ]
            }
        ],
        "transcription": "/su.vɑ̃/"
    },
    {
        "word": "quelquefois",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "⏱️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Parfois.",
                "examples": [
                    "Il arrive quelquefois en retard."
                ]
            }
        ],
        "transcription": "/kɛl.kə.fwa/"
    },
    {
        "word": "jamais",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🚫",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Aucune fois.",
                "examples": [
                    "Je ne fume jamais."
                ]
            }
        ],
        "transcription": "/ʒa.mɛ/"
    },
    {
        "word": "qui",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "👤",
        "form": "pronoun",
        "plural": "",
        "definitions": [
            {
                "text": "Interroge sur une personne.",
                "examples": [
                    "Qui est là ?"
                ]
            }
        ],
        "transcription": "/ki/"
    },
    {
        "word": "quoi",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "❓",
        "form": "pronoun",
        "plural": "",
        "definitions": [
            {
                "text": "Interroge sur une chose.",
                "examples": [
                    "C'est quoi ?"
                ]
            }
        ],
        "transcription": "/kwa/"
    },
    {
        "word": "où",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "📍",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Interroge sur un lieu.",
                "examples": [
                    "Où habites-tu ?"
                ]
            }
        ],
        "transcription": "/u/"
    },
    {
        "word": "quand",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "⏰",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Interroge sur le temps.",
                "examples": [
                    "Quand viens-tu ?"
                ]
            }
        ],
        "transcription": "/kɑ̃/"
    },
    {
        "word": "pourquoi",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "❓",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Interroge sur la raison.",
                "examples": [
                    "Pourquoi dors-tu ?"
                ]
            }
        ],
        "transcription": "/puʁ.kwa/"
    },
    {
        "word": "comment",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "⚙️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Interroge sur la manière.",
                "examples": [
                    "Comment vas-tu ?"
                ]
            }
        ],
        "transcription": "/kɔ.mɑ̃/"
    },
    {
        "word": "je",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👤",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé par la personne qui parle pour se désigner elle-même.",
                "examples": [
                    "Je suis étudiant.",
                    "Je m'appelle Marc."
                ]
            }
        ],
        "transcription": "ʒə"
    },
    {
        "word": "tu",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👤",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé pour s'adresser à une seule personne.",
                "examples": [
                    "Comment vas-tu ?",
                    "Tu es très gentil."
                ]
            }
        ],
        "transcription": "ty"
    },
    {
        "word": "il",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👨",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé pour désigner un homme ou un garçon dont on a déjà parlé.",
                "examples": [
                    "Il travaille à Paris.",
                    "Est-ce qu'il est là ?"
                ]
            }
        ],
        "transcription": "il"
    },
    {
        "word": "elle",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👩",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé pour désigner une femme ou une fille dont on a déjà parlé.",
                "examples": [
                    "Elle habite à Lyon.",
                    "Est-ce qu'elle est prête ?"
                ]
            }
        ],
        "transcription": "ɛl"
    },
    {
        "word": "nous",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé par la personne qui parle pour se désigner elle-même ainsi que d'autres personnes.",
                "examples": [
                    "Nous allons au cinéma.",
                    "Nous sommes amis."
                ]
            }
        ],
        "transcription": "nu"
    },
    {
        "word": "vous",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé pour s'adresser à plusieurs personnes, ou à une seule personne de manière formelle.",
                "examples": [
                    "Comment allez-vous ?",
                    "Est-ce que vous voulez du café ?"
                ]
            }
        ],
        "transcription": "vu"
    },
    {
        "word": "ils",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👨‍👨‍👦",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé pour désigner plusieurs personnes (masculin).",
                "examples": [
                    "Ils sont en vacances.",
                    "Ils habitent ensemble."
                ]
            }
        ],
        "transcription": "il"
    },
    {
        "word": "elles",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👩‍👩‍👧",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé pour désigner plusieurs personnes (féminin).",
                "examples": [
                    "Elles étudient le français.",
                    "Est-ce qu'elles sont arrivées ?"
                ]
            }
        ],
        "transcription": "ɛl"
    },
    {
        "word": "mon",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🙋",
        "form": "determiner",
        "definitions": [
            {
                "text": "Déterminant possessif utilisé par la personne qui parle pour désigner quelque chose qui lui appartient (masculin).",
                "examples": [
                    "C'est mon livre.",
                    "Voici mon ami."
                ]
            }
        ],
        "transcription": "mɔ̃"
    },
    {
        "word": "ma",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🙋",
        "form": "determiner",
        "definitions": [
            {
                "text": "Déterminant possessif utilisé par la personne qui parle pour désigner quelque chose qui lui appartient (féminin).",
                "examples": [
                    "C'est ma voiture.",
                    "Voici ma maison."
                ]
            }
        ],
        "transcription": "ma"
    },
    {
        "word": "mes",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🙋",
        "form": "determiner",
        "definitions": [
            {
                "text": "Déterminant possessif utilisé par la personne qui parle pour désigner plusieurs choses qui lui appartiennent.",
                "examples": [
                    "Ce sont mes clés.",
                    "Voici mes enfants."
                ]
            }
        ],
        "transcription": "me"
    },
    {
        "word": "ton",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👤",
        "form": "determiner",
        "definitions": [
            {
                "text": "Déterminant possessif utilisé pour désigner quelque chose qui appartient à la personne à qui l'on parle (masculin).",
                "examples": [
                    "Où est ton sac ?",
                    "C'est ton tour."
                ]
            }
        ],
        "transcription": "tɔ̃"
    },
    {
        "word": "son",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👨",
        "form": "determiner",
        "definitions": [
            {
                "text": "Déterminant possessif utilisé pour désigner quelque chose qui appartient à une tierce personne (masculin).",
                "examples": [
                    "C'est son bureau.",
                    "Où est son frère ?"
                ]
            }
        ],
        "transcription": "sɔ̃"
    },
    {
        "word": "un",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "1️⃣",
        "form": "determiner",
        "definitions": [
            {
                "text": "Article indéfini singulier masculin.",
                "examples": [
                    "J'ai un chien.",
                    "C'est un bon jour."
                ]
            }
        ],
        "transcription": "œ̃"
    },
    {
        "word": "une",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "1️⃣",
        "form": "determiner",
        "definitions": [
            {
                "text": "Article indéfini singulier féminin.",
                "examples": [
                    "C'est une pomme.",
                    "J'ai une idée."
                ]
            }
        ],
        "transcription": "yn"
    },
    {
        "word": "le",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "📦",
        "form": "determiner",
        "definitions": [
            {
                "text": "Article défini singulier masculin.",
                "examples": [
                    "Le soleil brille.",
                    "Où est le chat ?"
                ]
            }
        ],
        "transcription": "lə"
    },
    {
        "word": "la",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "📦",
        "form": "determiner",
        "definitions": [
            {
                "text": "Article défini singulier féminin.",
                "examples": [
                    "La porte est ouverte.",
                    "Regarde la lune."
                ]
            }
        ],
        "transcription": "la"
    },
    {
        "word": "les",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "📦",
        "form": "determiner",
        "definitions": [
            {
                "text": "Article défini pluriel.",
                "examples": [
                    "Les enfants jouent.",
                    "J'aime les fleurs."
                ]
            }
        ],
        "transcription": "le"
    },
    {
        "word": "ce",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👉",
        "form": "determiner",
        "definitions": [
            {
                "text": "Déterminant utilisé pour désigner quelque chose ou quelqu'un de proche (masculin).",
                "examples": [
                    "Ce livre est intéressant.",
                    "Regarde ce garçon."
                ]
            }
        ],
        "transcription": "sə"
    },
    {
        "word": "ou",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "emoji": "❓",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Mot utilisé pour relier deux choix ou possibilités.",
                "examples": [
                    "Thé ou café ?",
                    "Aujourd'hui ou demain ?"
                ]
            }
        ],
        "transcription": "u"
    },
    {
        "word": "si",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "emoji": "❓",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Mot utilisé pour introduire une condition.",
                "examples": [
                    "S'il pleut, nous resterons à la maison.",
                    "Je ne sais pas si elle vient."
                ]
            }
        ],
        "transcription": "si"
    },
    {
        "word": "donc",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "emoji": "➡️",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Mot utilisé pour introduire un résultat ou une conclusion.",
                "examples": [
                    "Je pense, donc je suis.",
                    "Il est tard, donc je dois partir."
                ]
            }
        ],
        "transcription": "dɔ̃k"
    },
    {
        "word": "devant",
        "image": "images/vocabulary/in front of.png",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "emoji": "🚪",
        "form": "preposition",
        "definitions": [
            {
                "text": "En face de quelque chose ou quelqu'un.",
                "examples": [
                    "Le chat est devant la porte.",
                    "Il y a un jardin devant la maison."
                ]
            }
        ],
        "transcription": "dəvɑ̃"
    },
    {
        "word": "derrière",
        "image": "images/vocabulary/behind.png",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "emoji": "🚪",
        "form": "preposition",
        "definitions": [
            {
                "text": "À la partie postérieure de quelque chose ou quelqu'un.",
                "examples": [
                    "La voiture est derrière la maison.",
                    "Qui est derrière toi ?"
                ]
            }
        ],
        "transcription": "dɛʁjɛʁ"
    },
    {
        "word": "en",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "📍",
        "form": "preposition",
        "definitions": [
            {
                "text": "Préposition indiquant le lieu ou le temps.",
                "examples": [
                    "Il habite en France.",
                    "Nous partons en été."
                ]
            }
        ],
        "transcription": "ɑ̃"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();