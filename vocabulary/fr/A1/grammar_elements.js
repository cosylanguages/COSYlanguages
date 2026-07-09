(function() {
    const data = [
    {
        "id": "fr_starter_language_008",
        "word": "dans",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "preposition",
        "definitions": [
            {
                "text": "À l'intérieur de.",
                "examples": [
                    "Le chat est dans la boîte."
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "",
        "plural": "",
        "transcription": "/dɑ̃/"
    },
    {
        "id": "fr_starter_language_009",
        "word": "sur",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "preposition",
        "definitions": [
            {
                "text": "En contact avec le haut de.",
                "examples": [
                    "Le livre est sur la table."
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "",
        "plural": "",
        "transcription": "/syʁ/"
    },
    {
        "id": "fr_starter_language_010",
        "word": "à",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "preposition",
        "definitions": [
            {
                "text": "Lieu ou direction.",
                "examples": [
                    "Je vais à Paris."
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "",
        "plural": "",
        "transcription": "/a/"
    },
    {
        "id": "fr_starter_language_011",
        "word": "sous",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "preposition",
        "definitions": [
            {
                "text": "En dessous de.",
                "examples": [
                    "Le chien est sous la table."
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "",
        "plural": "",
        "transcription": "/su/"
    },
    {
        "id": "fr_starter_language_012",
        "word": "toujours",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "adverb",
        "definitions": [
            {
                "text": "Tout le temps.",
                "examples": [
                    "Je bois toujours de l'eau."
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "♾️",
        "plural": "",
        "transcription": "/tu.ʒuʁ/"
    },
    {
        "id": "fr_starter_language_013",
        "word": "habituellement",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "adverb",
        "definitions": [
            {
                "text": "D'habitude.",
                "examples": [
                    "D'habitude, je finis à 18h."
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "🔄",
        "plural": "",
        "transcription": "/a.bi.tɥɛl.mɑ̃/"
    },
    {
        "id": "fr_starter_language_014",
        "word": "souvent",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "adverb",
        "definitions": [
            {
                "text": "Plusieurs fois.",
                "examples": [
                    "Je vais souvent au cinéma."
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "🔁",
        "plural": "",
        "transcription": "/su.vɑ̃/"
    },
    {
        "id": "fr_starter_language_015",
        "word": "quelquefois",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "adverb",
        "definitions": [
            {
                "text": "Parfois.",
                "examples": [
                    "Il arrive quelquefois en retard."
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "⏱️",
        "plural": "",
        "transcription": "/kɛl.kə.fwa/"
    },
    {
        "id": "fr_starter_language_016",
        "word": "jamais",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "adverb",
        "definitions": [
            {
                "text": "Aucune fois.",
                "examples": [
                    "Je ne fume jamais."
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "🚫",
        "plural": "",
        "transcription": "/ʒa.mɛ/"
    },
    {
        "id": "fr_starter_language_017",
        "word": "qui",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "pronoun",
        "definitions": [
            {
                "text": "Interroge sur une personne.",
                "examples": [
                    "Qui est là ?"
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "👤",
        "plural": "",
        "transcription": "/ki/"
    },
    {
        "id": "fr_starter_language_018",
        "word": "quoi",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "pronoun",
        "definitions": [
            {
                "text": "Interroge sur une chose.",
                "examples": [
                    "C'est quoi ?"
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "❓",
        "plural": "",
        "transcription": "/kwa/"
    },
    {
        "id": "fr_starter_language_019",
        "word": "où",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "adverb",
        "definitions": [
            {
                "text": "Interroge sur un lieu.",
                "examples": [
                    "Où habites-tu ?"
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "📍",
        "plural": "",
        "transcription": "/u/"
    },
    {
        "id": "fr_starter_language_020",
        "word": "quand",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "adverb",
        "definitions": [
            {
                "text": "Interroge sur le temps.",
                "examples": [
                    "Quand viens-tu ?"
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "⏰",
        "plural": "",
        "transcription": "/kɑ̃/"
    },
    {
        "id": "fr_starter_language_021",
        "word": "pourquoi",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "adverb",
        "definitions": [
            {
                "text": "Interroge sur la raison.",
                "examples": [
                    "Pourquoi dors-tu ?"
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "❓",
        "plural": "",
        "transcription": "/puʁ.kwa/"
    },
    {
        "id": "fr_starter_language_022",
        "word": "comment",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "form": "adverb",
        "definitions": [
            {
                "text": "Interroge sur la manière.",
                "examples": [
                    "Comment vas-tu ?"
                ]
            }
        ],
        "article": "",
        "gender": "",
        "emoji": "⚙️",
        "plural": "",
        "transcription": "/kɔ.mɑ̃/"
    },
    {
        "id": "fr_starter_language_023",
        "word": "je",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "👤",
        "transcription": "ʒə"
    },
    {
        "id": "fr_starter_language_024",
        "word": "tu",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "👤",
        "transcription": "ty"
    },
    {
        "id": "fr_starter_language_025",
        "word": "il",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "👨",
        "transcription": "il"
    },
    {
        "id": "fr_starter_language_026",
        "word": "elle",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "👩",
        "transcription": "ɛl"
    },
    {
        "id": "fr_starter_language_027",
        "word": "nous",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "👥",
        "transcription": "nu"
    },
    {
        "id": "fr_starter_language_028",
        "word": "vous",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "👥",
        "transcription": "vu"
    },
    {
        "id": "fr_starter_language_029",
        "word": "ils",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "👨‍👨‍👦",
        "transcription": "il"
    },
    {
        "id": "fr_starter_language_030",
        "word": "elles",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "👩‍👩‍👧",
        "transcription": "ɛl"
    },
    {
        "id": "fr_starter_language_031",
        "word": "mon",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "🙋",
        "transcription": "mɔ̃"
    },
    {
        "id": "fr_starter_language_032",
        "word": "ma",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "🙋",
        "transcription": "ma"
    },
    {
        "id": "fr_starter_language_033",
        "word": "mes",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "🙋",
        "transcription": "me"
    },
    {
        "id": "fr_starter_language_034",
        "word": "ton",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "👤",
        "transcription": "tɔ̃"
    },
    {
        "id": "fr_starter_language_035",
        "word": "son",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "👨",
        "transcription": "sɔ̃"
    },
    {
        "id": "fr_starter_language_036",
        "word": "un",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "1️⃣",
        "transcription": "œ̃",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "unus",
            "origin_meaning": "one"
        }
    },
    {
        "id": "fr_starter_language_037",
        "word": "une",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "1️⃣",
        "transcription": "yn"
    },
    {
        "id": "fr_starter_language_038",
        "word": "le",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "📦",
        "transcription": "lə"
    },
    {
        "id": "fr_starter_language_039",
        "word": "la",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "📦",
        "transcription": "la"
    },
    {
        "id": "fr_starter_language_040",
        "word": "les",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "📦",
        "transcription": "le"
    },
    {
        "id": "fr_starter_language_041",
        "word": "ce",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "👉",
        "transcription": "sə"
    },
    {
        "id": "fr_starter_language_042",
        "word": "ou",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "❓",
        "transcription": "u"
    },
    {
        "id": "fr_starter_language_043",
        "word": "si",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "❓",
        "transcription": "si"
    },
    {
        "id": "fr_starter_language_044",
        "word": "donc",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "➡️",
        "transcription": "dɔ̃k"
    },
    {
        "id": "fr_starter_language_045",
        "word": "devant",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "🚪",
        "transcription": "dəvɑ̃"
    },
    {
        "id": "fr_starter_language_046",
        "word": "derrière",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "🚪",
        "transcription": "dɛʁjɛʁ"
    },
    {
        "id": "fr_starter_language_047",
        "word": "en",
        "lang": "fr",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
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
        "emoji": "📍",
        "transcription": "ɑ̃"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();