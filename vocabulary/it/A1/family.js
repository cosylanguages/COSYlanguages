(function() {
    const lang = "it";
    const data = [
    {
        "word": "madre",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "madri",
        "subtext": "",
        "synonyms": [
            "mamma"
        ],
        "definitions": [
            {
                "text": "La donna che è vostra parente.",
                "examples": [
                    "Mia madre è gentile."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈmadre",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mater",
            "origin_meaning": "mother"
        },
        "lang": "it",
        "id": "it_starter_people_001"
    },
    {
        "word": "padre",
        "level": "starter",
        "theme": "people",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "padri",
        "subtext": "",
        "synonyms": [
            "papà"
        ],
        "definitions": [
            {
                "text": "L'uomo che è vostro parente.",
                "examples": [
                    "Mio padre è al lavoro."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈpadre",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "pater",
            "origin_meaning": "father"
        },
        "lang": "it",
        "id": "it_starter_people_002"
    },
    {
        "word": "famiglia",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "famiglie",
        "definitions": [
            {
                "text": "Un gruppo di persone che sono legate.",
                "examples": [
                    "Mia famiglia è grande."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "faˈmiʎʎa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_people_003"
    },
    {
        "word": "amico",
        "level": "starter",
        "theme": "people",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "amici",
        "definitions": [
            {
                "text": "Una persona che amate e conoscete bene.",
                "examples": [
                    "Lei è la mia amica."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "aˈmiko",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "amicus",
            "origin_meaning": "friend"
        },
        "lang": "it",
        "id": "it_starter_people_004"
    },
    {
        "word": "relazione",
        "level": "starter",
        "theme": "social",
        "article": "la",
        "emoji": "❤️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "relazioni",
        "subtext": "",
        "synonyms": [
            "rapporto",
            "legame"
        ],
        "definitions": [
            {
                "text": "Una connessione tra due persone.",
                "examples": [
                    "Hanno una buona relazione."
                ]
            }
        ],
        "gender": "masculine",
        "partitive": "della",
        "transcription": "relatˈtsjone",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_social_001"
    },
    {
        "word": "insieme",
        "level": "starter",
        "theme": "social",
        "emoji": "👫",
        "form": "adverb",
        "definitions": [
            {
                "text": "Con un'altra persona o gruppo.",
                "examples": [
                    "Ceniamo insieme."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "solo"
        ],
        "transcription": "ˈinsieme",
        "lang": "it",
        "id": "it_starter_social_002"
    },
    {
        "word": "marito",
        "level": "starter",
        "theme": "people",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mariti",
        "subtext": "",
        "synonyms": [
            "sposo",
            "compagno"
        ],
        "definitions": [
            {
                "text": "Un uomo sposato, in relazione a sua moglie.",
                "examples": [
                    "Suo marito è un medico."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "maˈrito",
        "antonyms": [
            "moglie"
        ],
        "lang": "it",
        "id": "it_starter_people_005"
    },
    {
        "word": "moglie",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mogli",
        "subtext": "",
        "synonyms": [
            "sposa",
            "compagna"
        ],
        "definitions": [
            {
                "text": "Una donna sposata, in relazione a suo marito.",
                "examples": [
                    "Sua moglie lavora in finanza."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈmɔʎʎe",
        "antonyms": [
            "marito"
        ],
        "lang": "it",
        "id": "it_starter_people_006"
    },
    {
        "word": "bambino",
        "level": "starter",
        "theme": "people",
        "article": "il",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bambini",
        "subtext": "",
        "synonyms": [
            "bimbo",
            "ragazzino"
        ],
        "definitions": [
            {
                "text": "Una giovane persona; un figlio o una figlia.",
                "examples": [
                    "Hanno due bambini."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "bamˈbino",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_people_007"
    },
    {
        "word": "genitore",
        "level": "starter",
        "theme": "people",
        "article": "il",
        "gender": "masculine",
        "emoji": "👪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "genitori",
        "subtext": "",
        "synonyms": [
            "madre o padre"
        ],
        "definitions": [
            {
                "text": "Una madre o un padre.",
                "examples": [
                    "I miei genitori vivono al nord."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "dʒeniˈtore",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_people_008"
    },
    {
        "word": "sorella",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sorelle",
        "definitions": [
            {
                "text": "Figlia degli stessi genitori.",
                "examples": [
                    "Ho una sorella."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "soˈrɛlla",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "sororcula",
            "origin_meaning": "little sister"
        },
        "lang": "it",
        "id": "it_starter_people_009"
    },
    {
        "word": "fratello",
        "level": "starter",
        "theme": "people",
        "article": "il",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fratelli",
        "definitions": [
            {
                "text": "Figlio degli stessi genitori.",
                "examples": [
                    "Mio fratello ha dieci anni."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "fraˈtɛllo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "fraterculus",
            "origin_meaning": "little brother"
        },
        "lang": "it",
        "id": "it_starter_people_010"
    },
    {
        "word": "figlio",
        "level": "starter",
        "theme": "people",
        "article": "il",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "figli",
        "definitions": [
            {
                "text": "Figlio maschio.",
                "examples": [
                    "È mio figlio."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈfiʎʎo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "filius",
            "origin_meaning": "son"
        },
        "lang": "it",
        "id": "it_starter_people_011"
    },
    {
        "word": "figlia",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "figlie",
        "definitions": [
            {
                "text": "Figlia femmina.",
                "examples": [
                    "È mia figlia."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈfiʎʎa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "filia",
            "origin_meaning": "daughter"
        },
        "lang": "it",
        "id": "it_starter_people_012"
    },
    {
        "word": "nonno",
        "level": "starter",
        "theme": "people",
        "article": "il",
        "gender": "masculine",
        "emoji": "👴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nonni",
        "definitions": [
            {
                "text": "Padre di un genitore.",
                "examples": [
                    "Mio nonno è vecchio."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈnɔnno",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_people_013"
    },
    {
        "word": "nonna",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nonne",
        "definitions": [
            {
                "text": "Madre di un genitore.",
                "examples": [
                    "Mia nonna cucina bene."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈnɔnna",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_people_014"
    },
    {
        "word": "zio",
        "level": "starter",
        "theme": "people",
        "article": "lo",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "zii",
        "definitions": [
            {
                "text": "Fratello del padre o della madre.",
                "examples": [
                    "Mio zio vive a Roma."
                ]
            }
        ],
        "partitive": "dello",
        "transcription": "ˈtsio",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_people_015"
    },
    {
        "word": "zia",
        "level": "starter",
        "theme": "people",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "zie",
        "definitions": [
            {
                "text": "Sorella del padre o della madre.",
                "examples": [
                    "Mia zia è medico."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈtsia",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_people_016"
    },
    {
        "word": "cugino",
        "level": "starter",
        "theme": "people",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cugini",
        "definitions": [
            {
                "text": "Figlio di uno zio o di una zia.",
                "examples": [
                    "È mio cugino."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "kuˈdʒino",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_people_017"
    },
    {
        "word": "neonato",
        "level": "starter",
        "theme": "people",
        "article": "il",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "neonati",
        "definitions": [
            {
                "text": "Bambino molto piccolo.",
                "examples": [
                    "Il neonato dorme."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "neoˈnato",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_people_018"
    },
    {
        "word": "ospite",
        "level": "starter",
        "theme": "social",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ospiti",
        "definitions": [
            {
                "text": "Persona che si riceve.",
                "examples": [
                    "Abbiamo ospiti."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ˈɔspite",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_social_003"
    },
    {
        "word": "nipote",
        "level": "starter",
        "theme": "people",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nipoti",
        "transcription": "niˈpote",
        "definitions": [
            {
                "text": "Figlio di un figlio o di un fratello/sorella.",
                "examples": [
                    "Mio nipote gioca a calcio."
                ]
            }
        ],
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_people_019"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
