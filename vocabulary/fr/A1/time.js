(function() {
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
        "transcription": "ma.tɛ̃",
        "id": "fr_starter_time_001",
        "lang": "fr"
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
        "transcription": "swaʁ",
        "id": "fr_starter_time_002",
        "lang": "fr"
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
        "transcription": "ʒuʁ",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "diurnus"
        },
        "id": "fr_starter_time_003",
        "lang": "fr"
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
        "transcription": "sə.mɛn",
        "id": "fr_starter_time_004",
        "lang": "fr"
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
        "transcription": "ʃak ʒuʁ",
        "id": "fr_starter_time_005",
        "lang": "fr"
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
        "transcription": "wi.kɛnd",
        "id": "fr_starter_time_006",
        "lang": "fr"
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
        "transcription": "nɥi",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "nox"
        },
        "id": "fr_starter_time_007",
        "lang": "fr"
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
        "transcription": "o.ʒuʁ.dɥi",
        "id": "fr_starter_time_008",
        "lang": "fr"
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
        "transcription": "də.mɛ̃",
        "id": "fr_starter_time_009",
        "lang": "fr"
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
        "transcription": "lœ̃.di",
        "id": "fr_starter_time_010",
        "lang": "fr"
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
        "transcription": "maʁ.di",
        "id": "fr_starter_time_011",
        "lang": "fr"
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
        "transcription": "mɛʁ.kʁə.di",
        "id": "fr_starter_time_012",
        "lang": "fr"
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
        "transcription": "ʒø.di",
        "id": "fr_starter_time_013",
        "lang": "fr"
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
        "transcription": "vɑ̃.dʁə.di",
        "id": "fr_starter_time_014",
        "lang": "fr"
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
        "transcription": "sam.di",
        "id": "fr_starter_time_015",
        "lang": "fr"
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
        "transcription": "di.mɑ̃ʃ",
        "id": "fr_starter_time_016",
        "lang": "fr"
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
        "transcription": "ʒɑ̃.vje",
        "id": "fr_starter_time_017",
        "lang": "fr"
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
        "transcription": "fe.vʁi.je",
        "id": "fr_starter_time_018",
        "lang": "fr"
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
        "transcription": "maʁs",
        "id": "fr_starter_time_019",
        "lang": "fr"
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
        "transcription": "a.vʁil",
        "id": "fr_starter_time_020",
        "lang": "fr"
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
        "transcription": "mɛ",
        "id": "fr_starter_time_021",
        "lang": "fr"
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
        "transcription": "ʒɥɛ̃",
        "id": "fr_starter_time_022",
        "lang": "fr"
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
        "transcription": "ʒɥi.jɛ",
        "id": "fr_starter_time_023",
        "lang": "fr"
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
        "transcription": "ut",
        "id": "fr_starter_time_024",
        "lang": "fr"
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
        "transcription": "sɛp.tɑ̃bʁ",
        "id": "fr_starter_time_025",
        "lang": "fr"
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
        "transcription": "ɔk.tɔbʁ",
        "id": "fr_starter_time_026",
        "lang": "fr"
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
        "transcription": "nɔ.vɑ̃bʁ",
        "id": "fr_starter_time_027",
        "lang": "fr"
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
        "transcription": "de.sɑ̃bʁ",
        "id": "fr_starter_time_028",
        "lang": "fr"
    },
    {
        "word": "encore",
        "level": "starter",
        "theme": "frequency_adverbs",
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
        "transcription": "ɑ̃.kɔʁ",
        "id": "fr_starter_time_029",
        "lang": "fr"
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
        "transcription": "i.l‿i.j‿a",
        "id": "fr_starter_time_030",
        "lang": "fr"
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
        "transcription": "tɑ̃",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "tempus"
        },
        "id": "fr_starter_time_031",
        "lang": "fr"
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
        "transcription": "œʁ",
        "id": "fr_starter_time_032",
        "lang": "fr"
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
        "transcription": "mi.nyt",
        "id": "fr_starter_time_033",
        "lang": "fr"
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
        "transcription": "sə.ɡɔ̃d",
        "id": "fr_starter_time_034",
        "lang": "fr"
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
        "transcription": "jɛʁ",
        "id": "fr_starter_time_035",
        "lang": "fr"
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
        "transcription": "ma.ti.ne",
        "id": "fr_starter_time_036",
        "lang": "fr"
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
        "transcription": "a.pʁɛ mi.di",
        "id": "fr_starter_time_037",
        "lang": "fr"
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
        "transcription": "swa.ʁe",
        "id": "fr_starter_time_038",
        "lang": "fr"
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
        "transcription": "mi.nɥi",
        "id": "fr_starter_time_039",
        "lang": "fr"
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
        "transcription": "mi.di",
        "id": "fr_starter_time_040",
        "lang": "fr"
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
        "transcription": "mɔ̃tʁ",
        "id": "fr_starter_time_041",
        "lang": "fr"
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
        "transcription": "ʁe.vɛj",
        "id": "fr_starter_time_042",
        "lang": "fr"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();