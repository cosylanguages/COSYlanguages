(function() {
    const lang = "fr";
    const data = [
    {
        "word": "matin",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "matins",
        "subtext": "tôt le matin, bonjour",
        "definitions": [
            {
                "text": "La partie de la journée avant 12 heures.",
                "examples": [
                    "Je commence le travail le matin."
                ]
            }
        ],
        "transcription": "/ma.tɛ̃/",
        "lang": "fr",
        "id": "fr_starter_time_001"
    },
    {
        "word": "soir",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "soirs",
        "subtext": "ce soir, bonsoir",
        "definitions": [
            {
                "text": "La partie de la journée après l'après-midi.",
                "examples": [
                    "Nous dînons le soir."
                ]
            }
        ],
        "transcription": "/swaʁ/",
        "lang": "fr",
        "id": "fr_starter_time_002"
    },
    {
        "word": "jour",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "jours",
        "definitions": [
            {
                "text": "Une période de 24 heures.",
                "examples": [
                    "Je travaille cinq jours par semaine."
                ]
            }
        ],
        "transcription": "/ʒuʁ/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "diurnus"
        },
        "lang": "fr",
        "id": "fr_starter_time_003"
    },
    {
        "word": "semaine",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "semaines",
        "subtext": "la semaine prochaine, la semaine dernière",
        "definitions": [
            {
                "text": "Une période de sept jours.",
                "examples": [
                    "Je travaille cinq jours par semaine."
                ]
            }
        ],
        "transcription": "/sə.mɛn/",
        "lang": "fr",
        "id": "fr_starter_time_004"
    },
    {
        "word": "chaque jour",
        "level": "starter",
        "theme": "time",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Tous les jours sans exception.",
                "examples": [
                    "Je bois du café chaque jour."
                ]
            }
        ],
        "transcription": "/ʃak ʒuʁ/",
        "lang": "fr",
        "id": "fr_starter_time_005"
    },
    {
        "word": "week-end",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "emoji": "🗓️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "week-ends",
        "definitions": [
            {
                "text": "Samedi et dimanche.",
                "examples": [
                    "Je me détends le week-end."
                ]
            }
        ],
        "transcription": "/wi.kɛnd/",
        "lang": "fr",
        "id": "fr_starter_time_006"
    },
    {
        "word": "nuit",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nuits",
        "definitions": [
            {
                "text": "Temps quand il fait noir.",
                "examples": [
                    "Bonne nuit."
                ]
            }
        ],
        "transcription": "/nɥi/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "nox"
        },
        "lang": "fr",
        "id": "fr_starter_time_007"
    },
    {
        "word": "aujourd'hui",
        "level": "starter",
        "theme": "time",
        "article": "",
        "gender": "",
        "emoji": "📅",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Le jour présent.",
                "examples": [
                    "Je travaille aujourd'hui."
                ]
            }
        ],
        "transcription": "/o.ʒuʁ.dɥi/",
        "lang": "fr",
        "id": "fr_starter_time_008"
    },
    {
        "word": "demain",
        "level": "starter",
        "theme": "time",
        "article": "",
        "gender": "",
        "emoji": "⏭️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Le jour après aujourd'hui.",
                "examples": [
                    "On se voit demain."
                ]
            }
        ],
        "transcription": "/də.mɛ̃/",
        "lang": "fr",
        "id": "fr_starter_time_009"
    },
    {
        "word": "lundi",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lundis",
        "definitions": [
            {
                "text": "Premier jour de la semaine.",
                "examples": [
                    "Lundi est difficile."
                ]
            }
        ],
        "transcription": "/lœ̃.di/",
        "lang": "fr",
        "id": "fr_starter_time_010"
    },
    {
        "word": "mardi",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mardis",
        "definitions": [
            {
                "text": "Deuxième jour de la semaine.",
                "examples": [
                    "Mardi, j'ai sport."
                ]
            }
        ],
        "transcription": "/maʁ.di/",
        "lang": "fr",
        "id": "fr_starter_time_011"
    },
    {
        "word": "mercredi",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mercredis",
        "definitions": [
            {
                "text": "Troisième jour de la semaine.",
                "examples": [
                    "Mercredi est calme."
                ]
            }
        ],
        "transcription": "/mɛʁ.kʁə.di/",
        "lang": "fr",
        "id": "fr_starter_time_012"
    },
    {
        "word": "jeudi",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "jeudis",
        "definitions": [
            {
                "text": "Quatrième jour de la semaine.",
                "examples": [
                    "Jeudi soir."
                ]
            }
        ],
        "transcription": "/ʒø.di/",
        "lang": "fr",
        "id": "fr_starter_time_013"
    },
    {
        "word": "vendredi",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "vendredis",
        "definitions": [
            {
                "text": "Cinquième jour de la semaine.",
                "examples": [
                    "Vendredi, c'est le week-end."
                ]
            }
        ],
        "transcription": "/vɑ̃.dʁə.di/",
        "lang": "fr",
        "id": "fr_starter_time_014"
    },
    {
        "word": "samedi",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "samedis",
        "definitions": [
            {
                "text": "Sixième jour de la semaine.",
                "examples": [
                    "Je fais les courses samedi."
                ]
            }
        ],
        "transcription": "/sam.di/",
        "lang": "fr",
        "id": "fr_starter_time_015"
    },
    {
        "word": "dimanche",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dimanches",
        "definitions": [
            {
                "text": "Septième jour de la semaine.",
                "examples": [
                    "Dimanche est un jour de repos."
                ]
            }
        ],
        "transcription": "/di.mɑ̃ʃ/",
        "lang": "fr",
        "id": "fr_starter_time_016"
    },
    {
        "word": "janvier",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "janviers",
        "definitions": [
            {
                "text": "Premier mois de l'année.",
                "examples": [
                    "En janvier, il fait froid."
                ]
            }
        ],
        "transcription": "/ʒɑ̃.vje/",
        "lang": "fr",
        "id": "fr_starter_time_017"
    },
    {
        "word": "février",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "févriers",
        "definitions": [
            {
                "text": "Deuxième mois de l'année.",
                "examples": [
                    "Février est court."
                ]
            }
        ],
        "transcription": "/fe.vʁi.je/",
        "lang": "fr",
        "id": "fr_starter_time_018"
    },
    {
        "word": "mars",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mars",
        "definitions": [
            {
                "text": "Troisième mois de l'année.",
                "examples": [
                    "Le printemps commence en mars."
                ]
            }
        ],
        "transcription": "/maʁs/",
        "lang": "fr",
        "id": "fr_starter_time_019"
    },
    {
        "word": "avril",
        "level": "starter",
        "theme": "time",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌧️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "avrils",
        "definitions": [
            {
                "text": "Quatrième mois de l'année.",
                "examples": [
                    "En avril, ne te découvre pas d'un fil."
                ]
            }
        ],
        "transcription": "/a.vʁil/",
        "lang": "fr",
        "id": "fr_starter_time_020"
    },
    {
        "word": "mai",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mais",
        "definitions": [
            {
                "text": "Cinquième mois de l'année.",
                "examples": [
                    "Fais ce qu'il te plaît en mai."
                ]
            }
        ],
        "transcription": "/mɛ/",
        "lang": "fr",
        "id": "fr_starter_time_021"
    },
    {
        "word": "juin",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "juins",
        "definitions": [
            {
                "text": "Sixième mois de l'année.",
                "examples": [
                    "L'été commence en juin."
                ]
            }
        ],
        "transcription": "/ʒɥɛ̃/",
        "lang": "fr",
        "id": "fr_starter_time_022"
    },
    {
        "word": "juillet",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "juillets",
        "definitions": [
            {
                "text": "Septième mois de l'année.",
                "examples": [
                    "Je pars en vacances en juillet."
                ]
            }
        ],
        "transcription": "/ʒɥi.jɛ/",
        "lang": "fr",
        "id": "fr_starter_time_023"
    },
    {
        "word": "août",
        "level": "starter",
        "theme": "time",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏖️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "aoûts",
        "definitions": [
            {
                "text": "Huitième mois de l'année.",
                "examples": [
                    "Il fait chaud en août."
                ]
            }
        ],
        "transcription": "/ut/",
        "lang": "fr",
        "id": "fr_starter_time_024"
    },
    {
        "word": "septembre",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "septembres",
        "definitions": [
            {
                "text": "Neuvième mois de l'année.",
                "examples": [
                    "La rentrée est en septembre."
                ]
            }
        ],
        "transcription": "/sɛp.tɑ̃bʁ/",
        "lang": "fr",
        "id": "fr_starter_time_025"
    },
    {
        "word": "octobre",
        "level": "starter",
        "theme": "time",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "octobres",
        "definitions": [
            {
                "text": "Dixième mois de l'année.",
                "examples": [
                    "Halloween est en octobre."
                ]
            }
        ],
        "transcription": "/ɔk.tɔbʁ/",
        "lang": "fr",
        "id": "fr_starter_time_026"
    },
    {
        "word": "novembre",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌫️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "novembres",
        "definitions": [
            {
                "text": "Onzième mois de l'année.",
                "examples": [
                    "Il pleut souvent en novembre."
                ]
            }
        ],
        "transcription": "/nɔ.vɑ̃bʁ/",
        "lang": "fr",
        "id": "fr_starter_time_027"
    },
    {
        "word": "décembre",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "décembres",
        "definitions": [
            {
                "text": "Douzième mois de l'année.",
                "examples": [
                    "Noël est en décembre."
                ]
            }
        ],
        "transcription": "/de.sɑ̃bʁ/",
        "lang": "fr",
        "id": "fr_starter_time_028"
    },
    {
        "word": "encore",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "🔁",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Une autre fois.",
                "examples": [
                    "Encore une fois."
                ]
            }
        ],
        "transcription": "/ɑ̃.kɔʁ/",
        "lang": "fr",
        "id": "fr_starter_language_001"
    },
    {
        "word": "il y a",
        "level": "starter",
        "theme": "duration_expressions",
        "article": "",
        "gender": "",
        "emoji": "🕰️",
        "form": "phrase",
        "plural": "",
        "definitions": [
            {
                "text": "Indique un temps passé.",
                "examples": [
                    "Il y a deux jours."
                ]
            }
        ],
        "transcription": "/i.l‿i.j‿a/",
        "lang": "fr",
        "id": "fr_starter_duration_expressions_001"
    },
    {
        "word": "temps",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "⏱️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "",
        "definitions": [
            {
                "text": "Heure ou durée.",
                "examples": [
                    "Je n'ai pas le temps."
                ]
            }
        ],
        "transcription": "/tɑ̃/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "tempus"
        },
        "lang": "fr",
        "id": "fr_starter_time_029"
    },
    {
        "word": "heure",
        "level": "starter",
        "theme": "time",
        "article": "l'",
        "gender": "feminine",
        "emoji": "⌚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "heures",
        "definitions": [
            {
                "text": "Soixante minutes.",
                "examples": [
                    "Il est une heure."
                ]
            }
        ],
        "transcription": "/œʁ/",
        "lang": "fr",
        "id": "fr_starter_time_030"
    },
    {
        "word": "minute",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "⏱️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "minutes",
        "definitions": [
            {
                "text": "Soixante secondes.",
                "examples": [
                    "Attends une minute."
                ]
            }
        ],
        "transcription": "/mi.nyt/",
        "lang": "fr",
        "id": "fr_starter_time_031"
    },
    {
        "word": "seconde",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "⏱️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "secondes",
        "definitions": [
            {
                "text": "Temps très court.",
                "examples": [
                    "Une seconde, s'il vous plaît."
                ]
            }
        ],
        "transcription": "/sə.ɡɔ̃d/",
        "lang": "fr",
        "id": "fr_starter_time_032"
    },
    {
        "word": "hier",
        "level": "starter",
        "theme": "time",
        "article": "",
        "gender": "",
        "emoji": "🔙",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Le jour avant aujourd'hui.",
                "examples": [
                    "Hier, j'étais fatigué."
                ]
            }
        ],
        "transcription": "/jɛʁ/",
        "lang": "fr",
        "id": "fr_starter_time_033"
    },
    {
        "word": "matinée",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "matinées",
        "definitions": [
            {
                "text": "Temps du matin.",
                "examples": [
                    "Bonne matinée !"
                ]
            }
        ],
        "transcription": "/ma.ti.ne/",
        "lang": "fr",
        "id": "fr_starter_time_034"
    },
    {
        "word": "après-midi",
        "level": "starter",
        "theme": "time",
        "article": "l'",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "après-midi",
        "definitions": [
            {
                "text": "Après 12 heures.",
                "examples": [
                    "Je travaille l'après-midi."
                ]
            }
        ],
        "transcription": "/a.pʁɛ mi.di/",
        "lang": "fr",
        "id": "fr_starter_time_035"
    },
    {
        "word": "soirée",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "soirées",
        "definitions": [
            {
                "text": "Temps du soir.",
                "examples": [
                    "Bonne soirée !"
                ]
            }
        ],
        "transcription": "/swa.ʁe/",
        "lang": "fr",
        "id": "fr_starter_time_036"
    },
    {
        "word": "minuit",
        "level": "starter",
        "theme": "time",
        "article": "",
        "gender": "masculine",
        "emoji": "🕛",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "",
        "definitions": [
            {
                "text": "Douze heures de la nuit.",
                "examples": [
                    "Il est minuit."
                ]
            }
        ],
        "transcription": "/mi.nɥi/",
        "lang": "fr",
        "id": "fr_starter_time_037"
    },
    {
        "word": "midi",
        "level": "starter",
        "theme": "time",
        "article": "",
        "gender": "masculine",
        "emoji": "🕛",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "",
        "definitions": [
            {
                "text": "Douze heures du jour.",
                "examples": [
                    "Il est midi."
                ]
            }
        ],
        "transcription": "/mi.di/",
        "lang": "fr",
        "id": "fr_starter_time_038"
    },
    {
        "word": "montre",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "⌚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "montres",
        "definitions": [
            {
                "text": "Petit appareil pour l'heure.",
                "examples": [
                    "Ma montre avance."
                ]
            }
        ],
        "transcription": "/mɔ̃tʁ/",
        "lang": "fr",
        "id": "fr_starter_time_039"
    },
    {
        "word": "réveil",
        "level": "starter",
        "theme": "time",
        "article": "le",
        "gender": "masculine",
        "emoji": "⏰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "réveils",
        "definitions": [
            {
                "text": "Objet pour se réveiller.",
                "examples": [
                    "Le réveil a sonné."
                ]
            }
        ],
        "transcription": "/ʁe.vɛj/",
        "lang": "fr",
        "id": "fr_starter_time_040"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
