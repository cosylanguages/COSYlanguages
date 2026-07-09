(function() {
    const data = [
    {
        "word": "mère",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mères",
        "subtext": "",
        "synonyms": [
            "maman"
        ],
        "definitions": [
            {
                "text": "La femme qui est votre parent.",
                "examples": [
                    "Ma mère est gentille."
                ]
            }
        ],
        "transcription": "/mɛʁ/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mater",
            "origin_meaning": "mother"
        },
        "lang": "fr",
        "id": "fr_starter_people_001"
    },
    {
        "word": "père",
        "level": "starter",
        "theme": "people",
        "article": "le",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pères",
        "subtext": "",
        "synonyms": [
            "papa"
        ],
        "definitions": [
            {
                "text": "L'homme qui est votre parent.",
                "examples": [
                    "Mon père est au travail."
                ]
            }
        ],
        "transcription": "/pɛʁ/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "pater",
            "origin_meaning": "father"
        },
        "lang": "fr",
        "id": "fr_starter_people_002"
    },
    {
        "word": "famille",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "familles",
        "definitions": [
            {
                "text": "Un groupe de personnes qui sont liées.",
                "examples": [
                    "Ma famille est grande."
                ]
            }
        ],
        "transcription": "/fa.mij/",
        "lang": "fr",
        "id": "fr_starter_people_003"
    },
    {
        "word": "ami",
        "level": "starter",
        "theme": "people",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "amis",
        "definitions": [
            {
                "text": "Une personne que vous aimez et connaissez bien.",
                "examples": [
                    "Elle est mon amie."
                ]
            }
        ],
        "transcription": "/a.mi/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "amicus",
            "origin_meaning": "friend"
        },
        "lang": "fr",
        "id": "fr_starter_people_004"
    },
    {
        "word": "relation",
        "level": "starter",
        "theme": "social",
        "article": "la",
        "emoji": "❤️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "relations",
        "subtext": "",
        "synonyms": [
            "rapport",
            "lien"
        ],
        "definitions": [
            {
                "text": "Une connexion entre deux personnes.",
                "examples": [
                    "Ils ont une bonne relation."
                ]
            }
        ],
        "transcription": "/ʁə.la.sjɔ̃/",
        "lang": "fr",
        "id": "fr_starter_social_001"
    },
    {
        "word": "ensemble",
        "level": "starter",
        "theme": "social",
        "emoji": "👫",
        "form": "adverb",
        "definitions": [
            {
                "text": "Avec une autre personne ou un groupe.",
                "examples": [
                    "Nous dînons ensemble."
                ]
            }
        ],
        "transcription": "/ɑ̃.sɑ̃bl/",
        "lang": "fr",
        "antonyms": [
            "seul"
        ],
        "id": "fr_starter_social_002"
    },
    {
        "word": "mari",
        "level": "starter",
        "theme": "people",
        "article": "le",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "maris",
        "definitions": [
            {
                "text": "Homme marié.",
                "examples": [
                    "Mon mari est gentil."
                ]
            }
        ],
        "transcription": "/ma.ʁi/",
        "lang": "fr",
        "id": "fr_starter_people_005"
    },
    {
        "word": "femme",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "femmes",
        "definitions": [
            {
                "text": "Femme mariée ou adulte.",
                "examples": [
                    "C'est sa femme."
                ]
            }
        ],
        "transcription": "/fam/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "femina"
        },
        "lang": "fr",
        "id": "fr_starter_people_006"
    },
    {
        "word": "enfant",
        "level": "starter",
        "theme": "people",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "enfants",
        "definitions": [
            {
                "text": "Jeune personne.",
                "examples": [
                    "Ils ont un enfant."
                ]
            }
        ],
        "transcription": "/ɑ̃.fɑ̃/",
        "lang": "fr",
        "id": "fr_starter_people_007"
    },
    {
        "word": "parent",
        "level": "starter",
        "theme": "people",
        "article": "le",
        "gender": "masculine",
        "emoji": "👪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "parents",
        "definitions": [
            {
                "text": "Mère ou père.",
                "examples": [
                    "Mes parents habitent ici."
                ]
            }
        ],
        "transcription": "/pa.ʁɑ̃/",
        "lang": "fr",
        "id": "fr_starter_people_008"
    },
    {
        "word": "soeur",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "soeurs",
        "definitions": [
            {
                "text": "Fille née des mêmes parents.",
                "examples": [
                    "J'ai une soeur."
                ]
            }
        ],
        "transcription": "/sœʁ/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "soror",
            "origin_meaning": "sister"
        },
        "lang": "fr",
        "id": "fr_starter_people_009"
    },
    {
        "word": "frère",
        "level": "starter",
        "theme": "people",
        "article": "le",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "frères",
        "definitions": [
            {
                "text": "Garçon né des mêmes parents.",
                "examples": [
                    "Mon frère a dix ans."
                ]
            }
        ],
        "transcription": "/fʁɛʁ/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "frater",
            "origin_meaning": "brother"
        },
        "lang": "fr",
        "id": "fr_starter_people_010"
    },
    {
        "word": "fils",
        "level": "starter",
        "theme": "people",
        "article": "le",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fils",
        "definitions": [
            {
                "text": "Enfant mâle.",
                "examples": [
                    "C'est mon fils."
                ]
            }
        ],
        "transcription": "/fis/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "filius",
            "origin_meaning": "son"
        },
        "lang": "fr",
        "id": "fr_starter_people_011"
    },
    {
        "word": "grand-père",
        "level": "starter",
        "theme": "people",
        "article": "le",
        "gender": "masculine",
        "emoji": "👴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "grands-pères",
        "definitions": [
            {
                "text": "Père d'un parent.",
                "examples": [
                    "Mon grand-père est vieux."
                ]
            }
        ],
        "transcription": "/ɡʁɑ̃.pɛʁ/",
        "lang": "fr",
        "id": "fr_starter_people_012"
    },
    {
        "word": "grand-mère",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "grands-mères",
        "definitions": [
            {
                "text": "Mère d'un parent.",
                "examples": [
                    "Ma grand-mère cuisine bien."
                ]
            }
        ],
        "transcription": "/ɡʁɑ̃.mɛʁ/",
        "lang": "fr",
        "id": "fr_starter_people_013"
    },
    {
        "word": "oncle",
        "level": "starter",
        "theme": "people",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "oncles",
        "definitions": [
            {
                "text": "Frère du père ou de la mère.",
                "examples": [
                    "Mon oncle vit à Paris."
                ]
            }
        ],
        "transcription": "/ɔ̃kl/",
        "lang": "fr",
        "id": "fr_starter_people_014"
    },
    {
        "word": "tante",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tantes",
        "definitions": [
            {
                "text": "Soeur du père ou de la mère.",
                "examples": [
                    "Ma tante est médecin."
                ]
            }
        ],
        "transcription": "/tɑ̃t/",
        "lang": "fr",
        "id": "fr_starter_people_015"
    },
    {
        "word": "cousin",
        "level": "starter",
        "theme": "people",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cousins",
        "definitions": [
            {
                "text": "Enfant d'un oncle ou d'une tante.",
                "examples": [
                    "C'est mon cousin."
                ]
            }
        ],
        "transcription": "/ku.zɛ̃/",
        "lang": "fr",
        "id": "fr_starter_people_016"
    },
    {
        "word": "bébé",
        "level": "starter",
        "theme": "people",
        "article": "le",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bébés",
        "definitions": [
            {
                "text": "Très jeune enfant.",
                "examples": [
                    "Le bébé dort."
                ]
            }
        ],
        "transcription": "/be.be/",
        "lang": "fr",
        "id": "fr_starter_people_017"
    },
    {
        "word": "invité",
        "level": "starter",
        "theme": "social",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "invités",
        "definitions": [
            {
                "text": "Personne que l'on reçoit.",
                "examples": [
                    "Nous avons des invités."
                ]
            }
        ],
        "transcription": "/ɛ̃.vi.te/",
        "lang": "fr",
        "id": "fr_starter_social_003"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();