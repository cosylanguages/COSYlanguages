(function() {
    const data = [
    {
        "word": "occhiali",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "gli",
        "gender": "masculine",
        "emoji": "👓",
        "form": "noun",
        "plural": "occhiali",
        "definitions": [
            {
                "text": "Oggetto per vedere meglio.",
                "examples": [
                    "I miei occhiali sono sul tavolo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "degli"
    },
    {
        "word": "centro",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "plural": "centri",
        "definitions": [
            {
                "text": "Il mezzo di un luogo.",
                "examples": [
                    "Il centro città."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈʧɛntro"
    },
    {
        "word": "città",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "plural": "città",
        "definitions": [
            {
                "text": "Luogo con molte case.",
                "examples": [
                    "Roma è una grande città."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ʧitˈta"
    },
    {
        "word": "edificio",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "edifici",
        "definitions": [
            {
                "text": "Grande costruzione urbana.",
                "examples": [
                    "Un bell'edificio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ediˈfiʧo"
    },
    {
        "word": "indirizzo",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏠",
        "form": "noun",
        "transcription": "indiˈrittso",
        "plural": "indirizzi",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Il luogo dove si vive o si trova un edificio.",
                "examples": [
                    "Qual è il tuo indirizzo?"
                ]
            }
        ]
    },
    {
        "word": "paese",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🗺️",
        "form": "noun",
        "plural": "paesi",
        "definitions": [
            {
                "text": "Territorio di una nazione.",
                "examples": [
                    "L'Italia è un bel paese."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "paˈeze"
    },
    {
        "word": "piazza",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "plural": "piazze",
        "definitions": [
            {
                "text": "Spazio pubblico aperto.",
                "examples": [
                    "La piazza del Duomo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpjattsa"
    },
    {
        "word": "quartiere",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "plural": "quartieri",
        "definitions": [
            {
                "text": "Parte di una città.",
                "examples": [
                    "È il mio quartiere."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kwarˈtjɛre"
    },
    {
        "word": "sentiero",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👣",
        "form": "noun",
        "plural": "sentieri",
        "definitions": [
            {
                "text": "Piccola strada.",
                "examples": [
                    "Il sentiero nel bosco."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "strada",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "plural": "strade",
        "definitions": [
            {
                "text": "Via in una città.",
                "examples": [
                    "Abito in questa strada."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈstrada"
    },
    {
        "word": "via",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "plural": "vie",
        "definitions": [
            {
                "text": "Strada di città.",
                "examples": [
                    "In che via?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈvia"
    },
    {
        "word": "vicino",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "emoji": "🏠",
        "form": "noun",
        "plural": "vicini",
        "definitions": [
            {
                "text": "Una persona che vive accanto a te o vicino a te.",
                "examples": [
                    "I miei vicini sono molto simpatici."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "viˈʧino"
    },
    {
        "word": "villaggio",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "villaggi",
        "definitions": [
            {
                "text": "Piccolo centro abitato.",
                "examples": [
                    "Un bel villaggio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "vilˈladʤo"
    },
    {
        "word": "età",
        "level": "starter",
        "theme": "age_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎂",
        "form": "noun",
        "plural": "età",
        "definitions": [
            {
                "text": "Numero di anni vissuti.",
                "examples": [
                    "Che età hai?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'"
    },
    {
        "word": "cane",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "emoji": "🐕",
        "numberPlural": "5 cane",
        "answer": "cinque cani",
        "form": "noun",
        "plural": "cani",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un animale domestico comune che abbaia.",
                "examples": [
                    "Il mio cane si chiama Fido.",
                    "Un grosso cane nero."
                ]
            }
        ],
        "transcription": "ˈkane",
        "subtext": "animale domestico"
    },
    {
        "word": "cavallo",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🐴",
        "form": "noun",
        "plural": "cavalli",
        "definitions": [
            {
                "text": "Un animale che si può cavalcare.",
                "examples": [
                    "Vado a cavallo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kaˈvallo"
    },
    {
        "word": "coniglio",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🐰",
        "form": "noun",
        "plural": "conigli",
        "definitions": [
            {
                "text": "Piccolo animale con lunghe orecchie.",
                "examples": [
                    "Il coniglio mangia una carota."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "elefante",
        "level": "starter",
        "theme": "animals_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🐘",
        "form": "noun",
        "plural": "elefanti",
        "definitions": [
            {
                "text": "Un animale molto grande con la proboscide.",
                "examples": [
                    "L'elefante è grigio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "eleˈfante"
    },
    {
        "word": "gatto",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "emoji": "🐈",
        "numberPlural": "2 gatto",
        "answer": "due gatti",
        "form": "noun",
        "plural": "gatti",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un piccolo animale domestico con i baffi che fa le fusa.",
                "examples": [
                    "Il gatto dorme sul divano.",
                    "Un gatto bianco e nero."
                ]
            }
        ],
        "transcription": "ˈɡatto",
        "subtext": "animale domestico"
    },
    {
        "word": "leone",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦁",
        "form": "noun",
        "plural": "leoni",
        "definitions": [
            {
                "text": "Un grande felino selvaggio.",
                "examples": [
                    "Il leone è il re."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "leˈone"
    },
    {
        "word": "mucca",
        "level": "starter",
        "theme": "animals_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐮",
        "form": "noun",
        "plural": "mucche",
        "definitions": [
            {
                "text": "L'animale che dà il latte.",
                "examples": [
                    "La mucca è nel prato."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmukka"
    },
    {
        "word": "pecora",
        "level": "starter",
        "theme": "animals_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐑",
        "form": "noun",
        "plural": "pecore",
        "definitions": [
            {
                "text": "Animale con la lana bianca.",
                "examples": [
                    "Un gregge di pecore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpɛkora"
    },
    {
        "word": "pesce",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "emoji": "🐟",
        "form": "noun",
        "plural": "pesci",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un animale che vive e respira nell'acqua.",
                "examples": [
                    "Un pesce rosso.",
                    "Mangiare pesce fresco."
                ]
            }
        ],
        "transcription": "ˈpeʃʃe",
        "subtext": "animale acquatico"
    },
    {
        "word": "uccello",
        "level": "starter",
        "theme": "animals_A1",
        "article": "l'",
        "emoji": "🐦",
        "form": "noun",
        "plural": "uccelli",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Un animale con le ali e le piume che può volare.",
                "examples": [
                    "L'uccello canta sull'albero.",
                    "Un uccello colorato."
                ]
            }
        ],
        "transcription": "utˈtʃɛllo",
        "subtext": "animale volante"
    },
    {
        "word": "chi",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "👤",
        "form": "pronoun",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede di una persona.",
                "examples": [
                    "Chi è lì?"
                ]
            }
        ],
        "transcription": "ki"
    },
    {
        "word": "come",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "⚙️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede la maniera.",
                "examples": [
                    "Come stai?"
                ]
            }
        ],
        "transcription": "ˈkome"
    },
    {
        "word": "conversazione",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💬",
        "form": "noun",
        "plural": "conversazioni",
        "definitions": [
            {
                "text": "Parlare insieme.",
                "examples": [
                    "Una conversazione interessante."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "konversatˈtsjone"
    },
    {
        "word": "cosa",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "❓",
        "form": "pronoun",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede di una cosa.",
                "examples": [
                    "Cos'è?"
                ]
            }
        ],
        "transcription": "ˈkɔza"
    },
    {
        "word": "domanda",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "❓",
        "form": "noun",
        "plural": "domande",
        "definitions": [
            {
                "text": "Ciò che si chiede.",
                "examples": [
                    "Ho una domanda."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "doˈmanda"
    },
    {
        "word": "dove",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "📍",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede di un luogo.",
                "examples": [
                    "Dove abiti?"
                ]
            }
        ],
        "transcription": "ˈdove"
    },
    {
        "word": "no",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "❌",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Negazione.",
                "examples": [
                    "No, grazie."
                ]
            }
        ],
        "transcription": "no"
    },
    {
        "word": "problema",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "❓",
        "form": "noun",
        "plural": "problemi",
        "definitions": [
            {
                "text": "Una difficoltà.",
                "examples": [
                    "C'è un problema."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "quando",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "⏰",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede del tempo.",
                "examples": [
                    "Quando vieni?"
                ]
            }
        ],
        "transcription": "ˈkwando"
    },
    {
        "word": "risposta",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "risposte",
        "definitions": [
            {
                "text": "Ciò che si dice dopo una domanda.",
                "examples": [
                    "La risposta è corretta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "risˈpɔsta"
    },
    {
        "word": "sì",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "✅",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Affermazione.",
                "examples": [
                    "Sì, voglio bene."
                ]
            }
        ],
        "transcription": "si"
    },
    {
        "word": "aceto",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏺",
        "form": "noun",
        "plural": "aceti",
        "definitions": [
            {
                "text": "Liquido acido per insalata.",
                "examples": [
                    "Sale, pepe e aceto."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dell'",
        "transcription": "aˈʧeto"
    },
    {
        "word": "aglio",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧄",
        "form": "noun",
        "plural": "agli",
        "definitions": [
            {
                "text": "Pianta con un forte odore.",
                "examples": [
                    "Cucino con l'aglio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈaʎʎo"
    },
    {
        "word": "arancia",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🍊",
        "form": "noun",
        "plural": "arance",
        "definitions": [
            {
                "text": "Un frutto arancione e tondo.",
                "examples": [
                    "Mangio un'arancia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aˈranʧa"
    },
    {
        "word": "burro",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧈",
        "form": "noun",
        "plural": "burri",
        "definitions": [
            {
                "text": "Prodotto grasso del latte.",
                "examples": [
                    "Del burro sul pane."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "del",
        "transcription": "ˈburro"
    },
    {
        "word": "carne",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥩",
        "form": "noun",
        "plural": null,
        "subtext": "cibo",
        "countability": "uncountable",
        "partitive": "della",
        "definitions": [
            {
                "text": "La parte muscolare degli animali usata come cibo.",
                "examples": [
                    "Non mangio carne.",
                    "Carne di manzo."
                ]
            }
        ],
        "transcription": "ˈkarne"
    },
    {
        "word": "carota",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥕",
        "form": "noun",
        "plural": "carote",
        "definitions": [
            {
                "text": "Verdura arancione lunga.",
                "examples": [
                    "Il coniglio mangia una carota."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "kaˈrɔta"
    },
    {
        "word": "cibo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "emoji": "🍲",
        "form": "noun",
        "plural": "cibi",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Cose che le persone e gli animali mangiano per vivere.",
                "examples": [
                    "Il cibo è pronto.",
                    "Amo il cibo italiano."
                ]
            }
        ],
        "transcription": "ˈtʃibo",
        "subtext": "alimento"
    },
    {
        "word": "cioccolato",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍫",
        "form": "noun",
        "plural": "cioccolati",
        "definitions": [
            {
                "text": "Cibo dolce marrone.",
                "examples": [
                    "Amo il cioccolato."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ʧokkoˈlato"
    },
    {
        "word": "cipolla",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧅",
        "form": "noun",
        "plural": "cipolle",
        "definitions": [
            {
                "text": "Verdura forte che fa piangere.",
                "examples": [
                    "Taglio una cipolla."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ʧiˈpɔlla"
    },
    {
        "word": "formaggio",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧀",
        "form": "noun",
        "plural": "formaggi",
        "definitions": [
            {
                "text": "Prodotto fatto col latte.",
                "examples": [
                    "Mi piace il formaggio."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "del"
    },
    {
        "word": "fragola",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍓",
        "form": "noun",
        "plural": "fragole",
        "definitions": [
            {
                "text": "Un piccolo frutto rosso dolce.",
                "examples": [
                    "Mi piacciono le fragole."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈfraɡola"
    },
    {
        "word": "frutta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍎",
        "form": "noun",
        "plural": null,
        "subtext": "frutta fresca, succo di frutta",
        "definitions": [
            {
                "text": "La parte dolce di una pianta che contiene semi, usata come cibo.",
                "examples": [
                    "La frutta è sana."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈfrutta"
    },
    {
        "word": "gelato",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍦",
        "form": "noun",
        "plural": "gelati",
        "definitions": [
            {
                "text": "Cibo freddo e dolce.",
                "examples": [
                    "Un gelato alla vaniglia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ʤeˈlato"
    },
    {
        "word": "insalata",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🥗",
        "form": "noun",
        "plural": "insalate",
        "definitions": [
            {
                "text": "Piatto di verdure fredde.",
                "examples": [
                    "Un'insalata piccola, per favore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "insaˈlata"
    },
    {
        "word": "lasagna",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "form": "noun",
        "transcription": "laˈzaɲɲa",
        "plural": "lasagne",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un piatto di pasta italiano a strati con carne o verdure.",
                "examples": [
                    "La lasagna della nonna è la migliore.",
                    "Una porzione di lasagna."
                ]
            }
        ],
        "subtext": "piatto tipico"
    },
    {
        "word": "latte",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "transcription": "ˈlatte",
        "plural": null,
        "subtext": "bevanda",
        "countability": "uncountable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un liquido bianco prodotto da mucche o altri animali.",
                "examples": [
                    "Un bicchiere di latte.",
                    "Caffè con latte."
                ]
            }
        ]
    },
    {
        "word": "limone",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍋",
        "form": "noun",
        "plural": "limoni",
        "definitions": [
            {
                "text": "Un frutto giallo acido.",
                "examples": [
                    "Del limone nel mio tè."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "maiale",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥩",
        "form": "noun",
        "plural": "maiali",
        "definitions": [
            {
                "text": "Carne di maiale.",
                "examples": [
                    "Lei non mangia maiale."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "maˈjale"
    },
    {
        "word": "manzo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥩",
        "form": "noun",
        "plural": "manzi",
        "definitions": [
            {
                "text": "Carne di mucca.",
                "examples": [
                    "Mangio del manzo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈmandzo"
    },
    {
        "word": "mela",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "emoji": "🍎",
        "numberPlural": "4 mela",
        "answer": "quattro mele",
        "form": "noun",
        "transcription": "ˈmela",
        "plural": "mele",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un frutto rotondo con la buccia rossa, verde o gialla.",
                "examples": [
                    "Mangiare una mela al giorno.",
                    "Mela rossa dolce."
                ]
            }
        ],
        "subtext": "frutto"
    },
    {
        "word": "olio",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏺",
        "form": "noun",
        "plural": "oli",
        "definitions": [
            {
                "text": "Liquido per condire.",
                "examples": [
                    "Olio d'oliva."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dell'",
        "transcription": "ˈɔljo"
    },
    {
        "word": "pane",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍞",
        "form": "noun",
        "transcription": "ˈpane",
        "plural": null,
        "subtext": "alimento base",
        "countability": "uncountable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un cibo comune fatto di farina, acqua e lievito.",
                "examples": [
                    "Pane fresco.",
                    "Un panino al prosciutto."
                ]
            }
        ]
    },
    {
        "word": "pasta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "emoji": "🍝",
        "form": "noun",
        "transcription": "ˈpasta",
        "plural": "pasta",
        "definitions": [
            {
                "text": "Un cibo tipico italiano fatto di farina.",
                "examples": [
                    "Amo la pasta al pomodoro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "patata",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥔",
        "form": "noun",
        "plural": "patate",
        "definitions": [
            {
                "text": "Un tubero commestibile.",
                "examples": [
                    "Patatine fritte fatte con le patate."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "paˈtata"
    },
    {
        "word": "pepe",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧂",
        "form": "noun",
        "plural": "pepi",
        "definitions": [
            {
                "text": "Polvere nera piccante.",
                "examples": [
                    "Metti il pepe."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "del",
        "transcription": "ˈpɛpe"
    },
    {
        "word": "pollo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍗",
        "form": "noun",
        "plural": "polli",
        "definitions": [
            {
                "text": "Carne di gallina.",
                "examples": [
                    "Mi piace il pollo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "pomodoro",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍅",
        "form": "noun",
        "plural": "pomodori",
        "definitions": [
            {
                "text": "Un frutto rosso mangiato come verdura.",
                "examples": [
                    "Il pomodoro è maturo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "pomoˈdɔro"
    },
    {
        "word": "riso",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "transcription": "ˈrizo",
        "plural": null,
        "subtext": "cereale",
        "countability": "uncountable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Piccoli chicchi bianchi o marroni coltivati in acqua.",
                "examples": [
                    "Riso ai funghi.",
                    "Un piatto di riso."
                ]
            }
        ]
    },
    {
        "word": "sale",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧂",
        "form": "noun",
        "plural": "sali",
        "definitions": [
            {
                "text": "Polvere bianca per salare.",
                "examples": [
                    "Un po' di sale."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "del",
        "transcription": "ˈsale"
    },
    {
        "word": "torta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍰",
        "form": "noun",
        "plural": "torte",
        "definitions": [
            {
                "text": "Dolce cotto al forno.",
                "examples": [
                    "Una torta al cioccolato."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈtɔrta"
    },
    {
        "word": "uovo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🥚",
        "form": "noun",
        "transcription": "ˈwɔvo",
        "plural": "uova",
        "subtext": "alimento",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Un oggetto ovale con il guscio prodotto dagli uccelli.",
                "examples": [
                    "Uovo sodo.",
                    "Un uovo di gallina."
                ]
            }
        ]
    },
    {
        "word": "uva",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🍇",
        "form": "noun",
        "plural": "uve",
        "definitions": [
            {
                "text": "Piccoli frutti per fare il vino.",
                "examples": [
                    "Un grappolo d'uva."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈuva"
    },
    {
        "word": "verdura",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥦",
        "form": "noun",
        "plural": "verdure",
        "subtext": "verdura fresca, verdure verdi",
        "definitions": [
            {
                "text": "Una pianta che viene mangiata come cibo, come una carota o un pomodoro.",
                "examples": [
                    "Lui mangia verdura ogni giorno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "verˈdura"
    },
    {
        "word": "zucchero",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "plural": "zuccheri",
        "definitions": [
            {
                "text": "Polvere dolce per i dolci.",
                "examples": [
                    "Niente zucchero nel mio tè."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dello"
    },
    {
        "word": "zuppa",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥣",
        "form": "noun",
        "plural": "zuppe",
        "definitions": [
            {
                "text": "Piatto liquido caldo.",
                "examples": [
                    "La zuppa è buona."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈtsuppa"
    },
    {
        "word": "veramente",
        "level": "starter",
        "theme": "basic_intensifiers_A1",
        "article": "",
        "gender": "",
        "emoji": "‼️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Realmente.",
                "examples": [
                    "È veramente bello."
                ]
            }
        ],
        "transcription": "veraˈmente"
    },
    {
        "word": "computer",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💻",
        "form": "noun",
        "plural": "computer",
        "definitions": [
            {
                "text": "Macchina elettronica per lavorare.",
                "examples": [
                    "Il mio computer è veloce."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "komˈpjutər"
    },
    {
        "word": "computer portatile",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💻",
        "form": "noun",
        "plural": "computer portatili",
        "definitions": [
            {
                "text": "Piccolo computer che si trasporta.",
                "examples": [
                    "Uso il mio computer portatile."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "email",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "📧",
        "form": "noun",
        "plural": "email",
        "definitions": [
            {
                "text": "Posta elettronica.",
                "examples": [
                    "Rispondo alle email."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "iˈmejl"
    },
    {
        "word": "macchina fotografica",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📷",
        "form": "noun",
        "plural": "macchine fotografiche",
        "definitions": [
            {
                "text": "Apparecchio per fare foto.",
                "examples": [
                    "Ho una nuova macchina fotografica."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmakkina fotoˈɡrafika"
    },
    {
        "word": "messaggio",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "✉️",
        "form": "noun",
        "plural": "messaggi",
        "definitions": [
            {
                "text": "Informazione inviata.",
                "examples": [
                    "Hai un messaggio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "mesˈsadʤo"
    },
    {
        "word": "mouse",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🖱️",
        "form": "noun",
        "plural": "mouse",
        "definitions": [
            {
                "text": "Oggetto per muovere il cursore.",
                "examples": [
                    "Il mouse è rotto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "maus"
    },
    {
        "word": "password",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🔑",
        "form": "noun",
        "plural": "password",
        "definitions": [
            {
                "text": "Codice segreto.",
                "examples": [
                    "Ho dimenticato la password."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "radio",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📻",
        "form": "noun",
        "plural": "radio",
        "definitions": [
            {
                "text": "Apparecchio audio.",
                "examples": [
                    "Ascoltare la radio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈradjo"
    },
    {
        "word": "schermo",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "schermi",
        "definitions": [
            {
                "text": "Parte del computer per vedere.",
                "examples": [
                    "Lo schermo è luminoso."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "ˈskɛrmo"
    },
    {
        "word": "sito web",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌐",
        "form": "noun",
        "plural": "siti web",
        "definitions": [
            {
                "text": "Pagine su internet.",
                "examples": [
                    "Guarda questo sito."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈsito wɛb"
    },
    {
        "word": "tastiera",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⌨️",
        "form": "noun",
        "plural": "tastiere",
        "definitions": [
            {
                "text": "Oggetto per scrivere al computer.",
                "examples": [
                    "Una tastiera nuova."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "tasˈtjɛra"
    },
    {
        "word": "telefono",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "emoji": "📱",
        "form": "noun",
        "plural": "telefoni",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un apparecchio usato per parlare con persone lontane.",
                "examples": [
                    "Rispondi al telefono.",
                    "Il mio numero di telefono."
                ]
            }
        ],
        "transcription": "teˈlɛfono",
        "subtext": "comunicazione"
    },
    {
        "word": "televisione",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📺",
        "form": "noun",
        "plural": "televisioni",
        "definitions": [
            {
                "text": "Apparecchio per guardare i film.",
                "examples": [
                    "Guardo la televisione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "televiziˈone"
    },
    {
        "word": "wifi",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📶",
        "form": "noun",
        "transcription": "ˈwaɪfaɪ",
        "plural": null,
        "countability": "uncountable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Connessione internet senza fili.",
                "examples": [
                    "Qual è la password del wifi?"
                ]
            }
        ]
    },
    {
        "word": "bocca",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "emoji": "👄",
        "form": "noun",
        "plural": "bocche",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "La parte del viso usata per mangiare e parlare.",
                "examples": [
                    "Apri la bocca.",
                    "Bocca chiusa."
                ]
            }
        ],
        "transcription": "ˈbokka",
        "subtext": "parte del corpo"
    },
    {
        "word": "braccio",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💪",
        "form": "noun",
        "plural": "braccia",
        "subtext": "braccio rotto, braccio sinistro",
        "definitions": [
            {
                "text": "La parte del corpo dalla spalla alla mano.",
                "examples": [
                    "Si è rotta il braccio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "collo",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦒",
        "form": "noun",
        "plural": "colli",
        "definitions": [
            {
                "text": "Parte tra la testa e il corpo.",
                "examples": [
                    "Ho male al collo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "dito",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☝️",
        "form": "noun",
        "plural": "dita",
        "definitions": [
            {
                "text": "Una delle cinque parti della mano.",
                "examples": [
                    "Ho dieci dita."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "dito del piede",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦶",
        "form": "noun",
        "plural": "dita dei piedi",
        "definitions": [
            {
                "text": "Un dito del piede.",
                "examples": [
                    "Mi fa male il dito del piede."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "gamba",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "emoji": "🦵",
        "form": "noun",
        "plural": "gambe",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Una delle parti del corpo usate per camminare.",
                "examples": [
                    "Ho male a una gamba.",
                    "Gambe lunghe."
                ]
            }
        ],
        "transcription": "ˈɡamba",
        "subtext": "parte del corpo"
    },
    {
        "word": "ginocchio",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦵",
        "form": "noun",
        "plural": "ginocchia",
        "definitions": [
            {
                "text": "Parte a metà della gamba.",
                "examples": [
                    "Cado sul ginocchio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "mano",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "emoji": "✋",
        "form": "noun",
        "plural": "mani",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "La parte del corpo alla fine del braccio.",
                "examples": [
                    "Dammi la mano.",
                    "Lavarsi le mani."
                ]
            }
        ],
        "transcription": "ˈmano",
        "subtext": "parte del corpo"
    },
    {
        "word": "naso",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "emoji": "👃",
        "form": "noun",
        "plural": "nasi",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "La parte del viso usata per respirare e odorare.",
                "examples": [
                    "Un naso piccolo.",
                    "Soffiarsi il naso."
                ]
            }
        ],
        "transcription": "ˈnazo",
        "subtext": "parte del corpo"
    },
    {
        "word": "occhio",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "l'",
        "emoji": "👁️",
        "form": "noun",
        "plural": "occhi",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "La parte del corpo usata per vedere.",
                "examples": [
                    "Chiudi gli occhi.",
                    "Occhi azzurri."
                ]
            }
        ],
        "subtext": "parte del corpo",
        "transcription": "ˈɔkkjo"
    },
    {
        "word": "orecchio",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "l'",
        "emoji": "👂",
        "form": "noun",
        "plural": "orecchi",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "La parte del corpo usata per sentire i suoni.",
                "examples": [
                    "Ho mal d'orecchio.",
                    "Le orecchie del coniglio."
                ]
            }
        ],
        "transcription": "oˈrekkjo",
        "subtext": "parte del corpo"
    },
    {
        "word": "piede",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "numberPlural": "2 piede",
        "answer": "due piedi",
        "emoji": "🦶",
        "form": "noun",
        "transcription": "ˈpjɛde",
        "plural": "piedi",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "La parte del corpo alla fine della gamba.",
                "examples": [
                    "Andare a piedi.",
                    "Piedi freddi."
                ]
            }
        ],
        "subtext": "parte del corpo"
    },
    {
        "word": "schiena",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚶",
        "form": "noun",
        "plural": "schiene",
        "subtext": "mal di schiena, sdraiarsi sulla schiena",
        "definitions": [
            {
                "text": "La parte posteriore del corpo, dal collo al sedere.",
                "examples": [
                    "Ho dolore alla schiena."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈskjɛna"
    },
    {
        "word": "spalla",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👤",
        "form": "noun",
        "plural": "spalle",
        "definitions": [
            {
                "text": "Parte del corpo tra il collo e il braccio.",
                "examples": [
                    "Mi fa male la spalla."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈspalla"
    },
    {
        "word": "stomaco",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🤰",
        "form": "noun",
        "plural": "stomaci",
        "definitions": [
            {
                "text": "Parte del corpo per digerire.",
                "examples": [
                    "Ho male allo stomaco."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello"
    },
    {
        "word": "testa",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "emoji": "👤",
        "form": "noun",
        "plural": "teste",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "La parte superiore del corpo che contiene il cervello.",
                "examples": [
                    "Ho mal di testa.",
                    "Muovere la testa."
                ]
            }
        ],
        "transcription": "ˈtɛsta",
        "subtext": "parte del corpo"
    },
    {
        "word": "film",
        "level": "starter",
        "theme": "cinema_film_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎞️",
        "form": "noun",
        "plural": "film",
        "definitions": [
            {
                "text": "Storia vista al cinema.",
                "examples": [
                    "Guardo un film."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "film"
    },
    {
        "word": "viola",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🟣",
        "form": "noun",
        "plural": "viola",
        "definitions": [
            {
                "text": "Colore tra blu e rosso.",
                "examples": [
                    "Ho una borsa viola."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈvjɔla"
    },
    {
        "word": "calcio",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Sport con palla tonda.",
                "examples": [
                    "Giochiamo a calcio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈkalʧo"
    },
    {
        "word": "nuoto",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏊",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "L'atto di nuotare.",
                "examples": [
                    "Mi piace il nuoto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈnwɔto"
    },
    {
        "word": "sport",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "sport",
        "definitions": [
            {
                "text": "Attività fisica.",
                "examples": [
                    "Faccio sport."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "spɔrt"
    },
    {
        "word": "tennis",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎾",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Sport con la racchetta.",
                "examples": [
                    "Lui gioca a tennis."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtɛnnis"
    },
    {
        "word": "anche",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "➕",
        "form": "adjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Pure.",
                "examples": [
                    "Anch'io."
                ]
            }
        ]
    },
    {
        "word": "e",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Aggiunge qualcosa.",
                "examples": [
                    "Tu ed io."
                ]
            }
        ],
        "transcription": "e"
    },
    {
        "word": "ma",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Indica una opposizione.",
                "examples": [
                    "È buono ma costoso."
                ]
            }
        ],
        "transcription": "ma"
    },
    {
        "word": "perché",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Dà una ragione.",
                "examples": [
                    "Dormo perché sono stanco."
                ]
            }
        ],
        "transcription": "perˈke"
    },
    {
        "word": "lettera",
        "level": "starter",
        "theme": "contact_details_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "✉️",
        "form": "noun",
        "transcription": "ˈlɛttera",
        "plural": "lettere",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un messaggio scritto su carta.",
                "examples": [
                    "Scrivo una lettera al mio amico."
                ]
            }
        ]
    },
    {
        "word": "impiego",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛠️",
        "form": "noun",
        "plural": "impieghi",
        "definitions": [
            {
                "text": "Lavoro o occupazione.",
                "examples": [
                    "Ho un nuovo impiego."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "imˈpjɛɡo"
    },
    {
        "word": "lavoro",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💼",
        "form": "noun",
        "plural": "lavori",
        "definitions": [
            {
                "text": "Ciò che si fa per vivere.",
                "examples": [
                    "Vado al lavoro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "laˈvoro"
    },
    {
        "word": "sonno",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "il",
        "emoji": "😴",
        "form": "noun",
        "definitions": [
            {
                "text": "Il riposo naturale di cui il corpo ha bisogno ogni notte.",
                "examples": [
                    "Dormo otto ore a notte."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "domenica",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📅",
        "form": "noun",
        "plural": "domeniche",
        "definitions": [
            {
                "text": "Settimo giorno della settimana.",
                "examples": [
                    "Domenica è un giorno di riposo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "doˈmenika"
    },
    {
        "word": "giovedì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "giovedì",
        "definitions": [
            {
                "text": "Quarto giorno della settimana.",
                "examples": [
                    "Giovedì sera."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ʤoveˈdi"
    },
    {
        "word": "lunedì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "lunedì",
        "definitions": [
            {
                "text": "Primo giorno della settimana.",
                "examples": [
                    "Il lunedì è difficile."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "luneˈdi"
    },
    {
        "word": "martedì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "martedì",
        "definitions": [
            {
                "text": "Secondo giorno della settimana.",
                "examples": [
                    "Martedì ho sport."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "marteˈdi"
    },
    {
        "word": "mercoledì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "mercoledì",
        "definitions": [
            {
                "text": "Terzo giorno della settimana.",
                "examples": [
                    "Il mercoledì è calmo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "merkoleˈdi"
    },
    {
        "word": "sabato",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "sabati",
        "definitions": [
            {
                "text": "Sesto giorno della settimana.",
                "examples": [
                    "Faccio la spesa sabato."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈsabato"
    },
    {
        "word": "venerdì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "venerdì",
        "definitions": [
            {
                "text": "Quinto giorno della settimana.",
                "examples": [
                    "Venerdì è il weekend."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "venerˈdi"
    },
    {
        "word": "acqua",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚰",
        "form": "noun",
        "plural": null,
        "subtext": "bevanda",
        "countability": "uncountable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Il liquido trasparente essenziale per la vita.",
                "examples": [
                    "Un bicchiere d'acqua.",
                    "Acqua minerale."
                ]
            }
        ],
        "transcription": "ˈakkwa"
    },
    {
        "word": "birra",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍺",
        "form": "noun",
        "plural": null,
        "subtext": "birra fredda, alla spina",
        "definitions": [
            {
                "text": "Una bevanda alcolica popolare fatta dal grano.",
                "examples": [
                    "Lui beve una birra nel fine settimana."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈbirra"
    },
    {
        "word": "caffè",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "plural": null,
        "subtext": "bevanda",
        "countability": "uncountable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una bevanda scura ed energizzante fatta con i chicchi tostati.",
                "examples": [
                    "Un caffè espresso.",
                    "Prendere un caffè."
                ]
            }
        ],
        "transcription": "kafˈfɛ"
    },
    {
        "word": "succo",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧃",
        "form": "noun",
        "plural": null,
        "subtext": "bevanda",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Il liquido che proviene dalla frutta.",
                "examples": [
                    "Succo d'arancia.",
                    "Un succo di mela."
                ]
            }
        ],
        "transcription": "ˈsukko"
    },
    {
        "word": "tè",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍵",
        "form": "noun",
        "plural": null,
        "subtext": "bevanda",
        "countability": "uncountable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una bevanda calda fatta con foglie essiccate.",
                "examples": [
                    "Tè al limone.",
                    "Una tazza di tè."
                ]
            }
        ],
        "transcription": "ˈtɛ"
    },
    {
        "word": "vino",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍷",
        "form": "noun",
        "plural": null,
        "subtext": "vino rosso, vino bianco, bicchiere di vino",
        "definitions": [
            {
                "text": "Una bevanda alcolica fatta dall'uva.",
                "examples": [
                    "Lei beve un bicchiere di vino la sera."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈvino"
    },
    {
        "word": "fa",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "article": "",
        "gender": "",
        "emoji": "🕰️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Indica tempo passato.",
                "examples": [
                    "Due giorni fa."
                ]
            }
        ],
        "transcription": "fa"
    },
    {
        "word": "acquisto",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "acquisti",
        "definitions": [
            {
                "text": "Atto di comprare.",
                "examples": [
                    "Un acquisto utile."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "akˈkwisto"
    },
    {
        "word": "boutique",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "plural": "boutique",
        "definitions": [
            {
                "text": "Piccolo negozio elegante.",
                "examples": [
                    "Una bella boutique."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "buˈtik"
    },
    {
        "word": "centro commerciale",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏬",
        "form": "noun",
        "plural": "centri commerciali",
        "definitions": [
            {
                "text": "Luogo con molti negozi.",
                "examples": [
                    "Andiamo al centro commerciale."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈʧɛntro kommerˈʧale"
    },
    {
        "word": "consegna",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚚",
        "form": "noun",
        "plural": "consegne",
        "definitions": [
            {
                "text": "Trasporto di merci.",
                "examples": [
                    "Consegna a domicilio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "konˈseɲɲa"
    },
    {
        "word": "denaro",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "plural": null,
        "subtext": "soldi",
        "countability": "uncountable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Soldi usati per comprare cose.",
                "examples": [
                    "Non ho molto denaro.",
                    "Denaro contante."
                ]
            }
        ],
        "transcription": "deˈnaro"
    },
    {
        "word": "francobollo",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "✉️",
        "form": "noun",
        "transcription": "frankoˈbollo",
        "plural": "francobolli",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un piccolo pezzo di carta per spedire lettere.",
                "examples": [
                    "Serve un francobollo per questa busta."
                ]
            }
        ]
    },
    {
        "word": "mercato",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "mercati",
        "definitions": [
            {
                "text": "Luogo per comprare cibo fresco.",
                "examples": [
                    "Andiamo al mercato."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "merˈkato"
    },
    {
        "word": "offerta",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "offerte",
        "definitions": [
            {
                "text": "Proposta di prezzo.",
                "examples": [
                    "Un'offerta speciale."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'"
    },
    {
        "word": "ordine",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📦",
        "form": "noun",
        "plural": "ordini",
        "definitions": [
            {
                "text": "Acquisto richiesto.",
                "examples": [
                    "Fare un ordine."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈordine"
    },
    {
        "word": "portafoglio",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👛",
        "form": "noun",
        "plural": "portafogli",
        "definitions": [
            {
                "text": "Oggetto per i soldi.",
                "examples": [
                    "Ho il mio portafoglio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "portafˈfɔʎʎo"
    },
    {
        "word": "prodotto",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📦",
        "form": "noun",
        "plural": "prodotti",
        "definitions": [
            {
                "text": "Cosa fabbricata.",
                "examples": [
                    "Un nuovo prodotto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "proˈdɔtto"
    },
    {
        "word": "regalo",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎁",
        "form": "noun",
        "plural": "regali",
        "definitions": [
            {
                "text": "Ciò che si offre a qualcuno.",
                "examples": [
                    "È un regalo per te."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "reˈɡalo"
    },
    {
        "word": "vendita",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "vendite",
        "definitions": [
            {
                "text": "Atto di vendere.",
                "examples": [
                    "In vendita."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈvendita"
    },
    {
        "word": "cugino",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑",
        "form": "noun",
        "plural": "cugini",
        "definitions": [
            {
                "text": "Figlio di uno zio o di una zia.",
                "examples": [
                    "È mio cugino."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "nonna",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👵",
        "form": "noun",
        "plural": "nonne",
        "definitions": [
            {
                "text": "Madre di un genitore.",
                "examples": [
                    "Mia nonna cucina bene."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈnɔnna"
    },
    {
        "word": "nonno",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👴",
        "form": "noun",
        "plural": "nonni",
        "definitions": [
            {
                "text": "Padre di un genitore.",
                "examples": [
                    "Mio nonno è vecchio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈnɔnno"
    },
    {
        "word": "zia",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "zie",
        "definitions": [
            {
                "text": "Sorella del padre o della madre.",
                "examples": [
                    "Mia zia è medico."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈtsia"
    },
    {
        "word": "zio",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "zii",
        "definitions": [
            {
                "text": "Fratello del padre o della madre.",
                "examples": [
                    "Mio zio vive a Roma."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "ˈtsio"
    },
    {
        "word": "insieme",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👫",
        "form": "adverb",
        "opposite": "solo",
        "oppositeEmoji": "🧍",
        "definitions": [
            {
                "text": "Con un'altra persona o gruppo.",
                "examples": [
                    "Ceniamo insieme."
                ]
            }
        ],
        "transcription": "inˈsjɛme"
    },
    {
        "word": "ospite",
        "level": "starter",
        "theme": "family_life_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "ospiti",
        "definitions": [
            {
                "text": "Persona che si riceve.",
                "examples": [
                    "Abbiamo ospiti."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈɔspite"
    },
    {
        "word": "relazione",
        "level": "starter",
        "theme": "family_life_A1",
        "article": "la",
        "emoji": "❤️",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "della",
        "transcription": "relatˈtsjone"
    },
    {
        "word": "ancora",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🔁",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Un'altra volta.",
                "examples": [
                    "Ancora una volta."
                ]
            }
        ],
        "transcription": "anˈkora"
    },
    {
        "word": "mai",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🚫",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Nessuna volta.",
                "examples": [
                    "Non fumo mai."
                ]
            }
        ],
        "transcription": "ˈmaj"
    },
    {
        "word": "qualche volta",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "⏱️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Talvolta.",
                "examples": [
                    "Arriva qualche volta in ritardo."
                ]
            }
        ],
        "transcription": "ˈkwalke ˈvɔlta"
    },
    {
        "word": "sempre",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "♾️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Tutto il tempo.",
                "examples": [
                    "Bevo sempre acqua."
                ]
            }
        ],
        "transcription": "ˈsɛmpre"
    },
    {
        "word": "solitamente",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🔄",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Di solito.",
                "examples": [
                    "Di solito finisco alle 18."
                ]
            }
        ],
        "transcription": "solitaˈmente"
    },
    {
        "word": "spesso",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🔁",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Molte volte.",
                "examples": [
                    "Vado spesso al cinema."
                ]
            }
        ]
    },
    {
        "word": "armadio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "armadi",
        "definitions": [
            {
                "text": "Mobile per vestiti.",
                "examples": [
                    "Riorganizzare l'armadio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'"
    },
    {
        "word": "asciugamano",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧺",
        "form": "noun",
        "plural": "asciugamani",
        "definitions": [
            {
                "text": "Panno per asciugarsi.",
                "examples": [
                    "Un asciugamano pulito."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aʃʃugaˈmano"
    },
    {
        "word": "bicchiere",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "plural": "bicchieri",
        "definitions": [
            {
                "text": "Recipiente per bere.",
                "examples": [
                    "Un bicchiere d'acqua."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "bikˈkjɛre"
    },
    {
        "word": "borsa",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "emoji": "👜",
        "form": "noun",
        "plural": "borse",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un oggetto usato per trasportare cose personali.",
                "examples": [
                    "Una borsa di pelle.",
                    "Mettere le chiavi nella borsa."
                ]
            }
        ],
        "transcription": "ˈborsa",
        "subtext": "accessorio"
    },
    {
        "word": "bottiglia",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍼",
        "form": "noun",
        "plural": "bottiglie",
        "definitions": [
            {
                "text": "Recipiente per liquidi.",
                "examples": [
                    "Una bottiglia d'acqua."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "botˈtiʎʎa"
    },
    {
        "word": "carta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📄",
        "form": "noun",
        "plural": "carte",
        "definitions": [
            {
                "text": "Materiale in fogli.",
                "examples": [
                    "Un foglio di carta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈkarta"
    },
    {
        "word": "chiave",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "emoji": "🔑",
        "form": "noun",
        "plural": "chiavi",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un oggetto di metallo usato per aprire le porte.",
                "examples": [
                    "Le chiavi di casa.",
                    "Ho perso le chiavi."
                ]
            }
        ],
        "transcription": "ˈkjaːve",
        "subtext": "oggetto"
    },
    {
        "word": "coltello",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🔪",
        "form": "noun",
        "plural": "coltelli",
        "definitions": [
            {
                "text": "Utensile per tagliare.",
                "examples": [
                    "Il coltello taglia bene."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kolˈtɛllo"
    },
    {
        "word": "coperta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧶",
        "form": "noun",
        "plural": "coperte",
        "definitions": [
            {
                "text": "Telo caldo per il letto.",
                "examples": [
                    "Una coperta di lana."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "koˈpɛrta"
    },
    {
        "word": "cucchiaio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥄",
        "form": "noun",
        "plural": "cucchiai",
        "definitions": [
            {
                "text": "Utensile per la minestra.",
                "examples": [
                    "Un cucchiaio di zucchero."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kukˈkjajo"
    },
    {
        "word": "cuscino",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☁️",
        "form": "noun",
        "plural": "cuscini",
        "definitions": [
            {
                "text": "Appoggio per la testa.",
                "examples": [
                    "Un cuscino morbido."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kuʃˈʃino"
    },
    {
        "word": "divano",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "divani",
        "definitions": [
            {
                "text": "Grande seduta per più persone.",
                "examples": [
                    "Dormire sul divano."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "diˈvano"
    },
    {
        "word": "finestra",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪟",
        "form": "noun",
        "plural": "finestre",
        "subtext": "aprire la finestra, vetrina",
        "definitions": [
            {
                "text": "Un'apertura in una parete riempita di vetro che lascia entrare la luce.",
                "examples": [
                    "Apri la finestra — fa caldo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "fiˈnɛstra"
    },
    {
        "word": "forchetta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "forchette",
        "definitions": [
            {
                "text": "Utensile con rebbi.",
                "examples": [
                    "Mangio con la forchetta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "forˈketta"
    },
    {
        "word": "lampada",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "lampade",
        "definitions": [
            {
                "text": "Oggetto che fa luce.",
                "examples": [
                    "Accendi la lampada."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈlampada"
    },
    {
        "word": "letto",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "letti",
        "subtext": "arredamento",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un mobile usato per dormire.",
                "examples": [
                    "Andare a letto.",
                    "Un letto comodo."
                ]
            }
        ],
        "transcription": "ˈlɛtto"
    },
    {
        "word": "libro",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "emoji": "📖",
        "form": "noun",
        "plural": "libri",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un insieme di fogli stampati e rilegati.",
                "examples": [
                    "Leggere un libro.",
                    "Un libro di storia."
                ]
            }
        ],
        "transcription": "ˈlibro",
        "subtext": "cultura"
    },
    {
        "word": "matita",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "✏️",
        "form": "noun",
        "plural": "matite",
        "definitions": [
            {
                "text": "Oggetto per scrivere.",
                "examples": [
                    "Una matita colorata."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "maˈtita"
    },
    {
        "word": "mobili",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "mobili",
        "countability": "countable",
        "partitive": "dei",
        "definitions": [
            {
                "text": "Oggetti come sedie e tavoli in una casa.",
                "examples": [
                    "Dobbiamo comprare i mobili nuovi."
                ]
            }
        ]
    },
    {
        "word": "orologio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "⏰",
        "form": "noun",
        "plural": "orologi",
        "definitions": [
            {
                "text": "Oggetto per dare l'ora.",
                "examples": [
                    "Guarda l'orologio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "oroˈlɔʤo"
    },
    {
        "word": "penna",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "emoji": "🖊️",
        "form": "noun",
        "plural": "penne",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un oggetto usato per scrivere con l'inchiostro.",
                "examples": [
                    "Scrivere con la penna.",
                    "Prestami una penna."
                ]
            }
        ],
        "transcription": "ˈpɛnna",
        "subtext": "cancelleria"
    },
    {
        "word": "piatto",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "piatti",
        "definitions": [
            {
                "text": "Oggetto piatto per mangiare.",
                "examples": [
                    "Metti il piatto sul tavolo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈpjatto"
    },
    {
        "word": "poltrona",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "poltrone",
        "definitions": [
            {
                "text": "Seduta comoda.",
                "examples": [
                    "Sedersi in poltrona."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "porta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "porte",
        "subtext": "aprire la porta, porta d'ingresso",
        "definitions": [
            {
                "text": "Un pannello piatto che si apre e si chiude per far entrare e uscire le persone.",
                "examples": [
                    "Per favore, chiudi la porta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpɔrta"
    },
    {
        "word": "rubinetto",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚰",
        "form": "noun",
        "plural": "rubinetti",
        "definitions": [
            {
                "text": "Oggetto per l'acqua.",
                "examples": [
                    "Chiudi il rubinetto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "scaffale",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "📶",
        "form": "noun",
        "plural": "scaffali",
        "definitions": [
            {
                "text": "Ripiano per libri.",
                "examples": [
                    "Uno scaffale pieno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "skafˈfale"
    },
    {
        "word": "scatola",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📦",
        "form": "noun",
        "plural": "scatole",
        "definitions": [
            {
                "text": "Contenitore cavo.",
                "examples": [
                    "Il gatto è nella scatola."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈskatola"
    },
    {
        "word": "scrivania",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "scrivanie",
        "definitions": [
            {
                "text": "Tavolo per lavorare.",
                "examples": [
                    "Sono alla mia scrivania."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "sedia",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪑",
        "form": "noun",
        "plural": "sedie",
        "subtext": "arredamento",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un mobile su cui sedersi.",
                "examples": [
                    "Siediti sulla sedia.",
                    "Una sedia di legno."
                ]
            }
        ],
        "transcription": "ˈsɛdja"
    },
    {
        "word": "specchio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🪞",
        "form": "noun",
        "plural": "specchi",
        "definitions": [
            {
                "text": "Superficie che riflette l'immagine.",
                "examples": [
                    "Mi guardo allo specchio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello"
    },
    {
        "word": "tavolo",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🪑",
        "form": "noun",
        "plural": "tavoli",
        "subtext": "arredamento",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un mobile con una superficie piana sostenuta da gambe.",
                "examples": [
                    "Mettere i piatti sul tavolo.",
                    "Un tavolo rotondo."
                ]
            }
        ],
        "transcription": "ˈtavolo"
    },
    {
        "word": "tazza",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "☕",
        "form": "noun",
        "plural": "tazze",
        "definitions": [
            {
                "text": "Piccolo recipiente con manico.",
                "examples": [
                    "Una tazza di caffè."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈtattsa"
    },
    {
        "word": "decisione",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "decisioni",
        "definitions": [
            {
                "text": "Ciò che si decide.",
                "examples": [
                    "Prendere una decisione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "deʧiˈzjone"
    },
    {
        "word": "idea",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "idee",
        "definitions": [
            {
                "text": "Ciò che si pensa.",
                "examples": [
                    "È una buona idea."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "iˈdɛa"
    },
    {
        "word": "opinione",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "opinioni",
        "definitions": [
            {
                "text": "Giudizio personale.",
                "examples": [
                    "Un'opinione forte."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "opiniˈone"
    },
    {
        "word": "parere",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💬",
        "form": "noun",
        "plural": "pareri",
        "definitions": [
            {
                "text": "Ciò che si crede su un tema.",
                "examples": [
                    "Dammi il tuo parere."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "paˈrere"
    },
    {
        "word": "scelta",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👉",
        "form": "noun",
        "plural": "scelte",
        "definitions": [
            {
                "text": "Atto di scegliere.",
                "examples": [
                    "È la tua scelta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈʃɛlta"
    },
    {
        "word": "consiglio",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💡",
        "form": "noun",
        "plural": "consigli",
        "definitions": [
            {
                "text": "Suggerimento per aiutare.",
                "examples": [
                    "Dammi un consiglio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "grazie",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🙏",
        "form": "noun",
        "plural": "grazie",
        "definitions": [
            {
                "text": "Formula per ringraziare.",
                "examples": [
                    "Grazie mille."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈgrattsje"
    },
    {
        "word": "per favore",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "",
        "gender": "",
        "emoji": "🙏",
        "form": "phrase",
        "plural": "",
        "definitions": [
            {
                "text": "Formula di cortesia.",
                "examples": [
                    "Un caffè, per favore."
                ]
            }
        ],
        "transcription": "per faˈvore"
    },
    {
        "word": "scusa",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🙇",
        "form": "noun",
        "plural": "scuse",
        "definitions": [
            {
                "text": "Formula per scusarsi.",
                "examples": [
                    "Scusa, sono in ritardo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈskuza"
    },
    {
        "word": "foto",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📷",
        "form": "noun",
        "plural": "foto",
        "definitions": [
            {
                "text": "Immagine da una macchina fotografica.",
                "examples": [
                    "Una foto ricordo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈfɔto"
    },
    {
        "word": "sapone",
        "level": "starter",
        "theme": "household_tasks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧼",
        "form": "noun",
        "plural": "saponi",
        "definitions": [
            {
                "text": "Prodotto per lavarsi.",
                "examples": [
                    "Lavarsi col sapone."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "amico",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👫",
        "form": "noun",
        "plural": "amici",
        "definitions": [
            {
                "text": "Una persona che amate e conoscete bene.",
                "examples": [
                    "Lei è la mia amica."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aˈmiko"
    },
    {
        "word": "bambino",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "famiglia",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👪",
        "form": "noun",
        "plural": "famiglie",
        "definitions": [
            {
                "text": "Un gruppo di persone che sono legate.",
                "examples": [
                    "Mia famiglia è grande."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "faˈmiʎʎa"
    },
    {
        "word": "figlia",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "plural": "figlie",
        "definitions": [
            {
                "text": "Figlia femmina.",
                "examples": [
                    "È mia figlia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈfiʎʎa"
    },
    {
        "word": "figlio",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "plural": "figli",
        "definitions": [
            {
                "text": "Figlio maschio.",
                "examples": [
                    "È mio figlio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈfiʎʎo"
    },
    {
        "word": "fratello",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "plural": "fratelli",
        "definitions": [
            {
                "text": "Figlio degli stessi genitori.",
                "examples": [
                    "Mio fratello ha dieci anni."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "fraˈtɛllo"
    },
    {
        "word": "genitore",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👪",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "del",
        "transcription": "ʤeniˈtore"
    },
    {
        "word": "madre",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmadre",
        "opposite": "padre"
    },
    {
        "word": "marito",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "mariti",
        "opposite": "moglie",
        "oppositeEmoji": "👩",
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
        "countability": "countable",
        "partitive": "del",
        "transcription": "maˈrito"
    },
    {
        "word": "moglie",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "mogli",
        "opposite": "marito",
        "oppositeEmoji": "👨",
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
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmɔʎʎe"
    },
    {
        "word": "neonato",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "plural": "neonati",
        "definitions": [
            {
                "text": "Bambino molto piccolo.",
                "examples": [
                    "Il neonato dorme."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "neoˈnato"
    },
    {
        "word": "padre",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈpadre",
        "opposite": "madre"
    },
    {
        "word": "sorella",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "plural": "sorelle",
        "definitions": [
            {
                "text": "Figlia degli stessi genitori.",
                "examples": [
                    "Ho una sorella."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "soˈrɛlla"
    },
    {
        "word": "ape",
        "level": "starter",
        "theme": "insects_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🐝",
        "form": "noun",
        "transcription": "ˈape",
        "plural": "api",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Un insetto che produce miele.",
                "examples": [
                    "L'ape vola sui fiori."
                ]
            }
        ]
    },
    {
        "word": "farfalla",
        "level": "starter",
        "theme": "insects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🦋",
        "form": "noun",
        "transcription": "farˈfalla",
        "plural": "farfalle",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un insetto con ali colorate.",
                "examples": [
                    "Guarda quella bella farfalla!"
                ]
            }
        ]
    },
    {
        "word": "formica",
        "level": "starter",
        "theme": "insects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐜",
        "form": "noun",
        "transcription": "forˈmika",
        "plural": "formiche",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un piccolo insetto sociale.",
                "examples": [
                    "Le formiche lavorano insieme."
                ]
            }
        ]
    },
    {
        "word": "zanzara",
        "level": "starter",
        "theme": "insects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🦟",
        "form": "noun",
        "transcription": "dzanˈdzara",
        "plural": "zanzare",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un piccolo insetto che punge.",
                "examples": [
                    "C'è una zanzara in camera."
                ]
            }
        ]
    },
    {
        "word": "berretto",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧢",
        "form": "noun",
        "plural": "berretti",
        "definitions": [
            {
                "text": "Cappello sportivo.",
                "examples": [
                    "Mettere un berretto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "calzini",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧦",
        "form": "noun",
        "plural": "calzini",
        "definitions": [
            {
                "text": "Vestiti per i piedi.",
                "examples": [
                    "I miei calzini sono blu."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dei",
        "transcription": "kalˈtsini"
    },
    {
        "word": "camicia",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👔",
        "form": "noun",
        "plural": "camicie",
        "definitions": [
            {
                "text": "Indumento con bottoni.",
                "examples": [
                    "Una camicia bianca."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "cappello",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "emoji": "👒",
        "form": "noun",
        "plural": "cappelli",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un accessorio che si indossa sulla testa.",
                "examples": [
                    "Un cappello di lana.",
                    "Mettersi il cappello."
                ]
            }
        ],
        "transcription": "kapˈpɛllo",
        "subtext": "abbigliamento"
    },
    {
        "word": "cappotto",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧥",
        "form": "noun",
        "plural": "cappotti",
        "definitions": [
            {
                "text": "Vestito caldo per fuori.",
                "examples": [
                    "Metti il cappotto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kapˈpɔtto"
    },
    {
        "word": "cintura",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎗️",
        "form": "noun",
        "plural": "cinture",
        "definitions": [
            {
                "text": "Per tenere i pantaloni.",
                "examples": [
                    "Una cintura di pelle."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ʧinˈtura"
    },
    {
        "word": "costume da bagno",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🩱",
        "form": "noun",
        "plural": "costumi da bagno",
        "definitions": [
            {
                "text": "Per nuotare.",
                "examples": [
                    "Prendere il costume."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kosˈtume da ˈbaɲɲo"
    },
    {
        "word": "giacca",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧥",
        "form": "noun",
        "plural": "giacche",
        "definitions": [
            {
                "text": "Cappotto leggero.",
                "examples": [
                    "Una giacca leggera."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈʤakka"
    },
    {
        "word": "gonna",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "plural": "gonne",
        "definitions": [
            {
                "text": "Vestito che copre dai fianchi in giù.",
                "examples": [
                    "Una gonna corta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈɡɔnna"
    },
    {
        "word": "guanti",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧤",
        "form": "noun",
        "plural": "guanti",
        "definitions": [
            {
                "text": "Per le mani.",
                "examples": [
                    "Un paio di guanti."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dei",
        "transcription": "ˈɡwanti"
    },
    {
        "word": "jeans",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "👖",
        "form": "noun",
        "plural": "jeans",
        "definitions": [
            {
                "text": "Pantaloni di tela blu.",
                "examples": [
                    "Indossare i jeans."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dei"
    },
    {
        "word": "maglietta",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "emoji": "👕",
        "form": "noun",
        "plural": "magliette",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un capo d'abbigliamento leggero a maniche corte.",
                "examples": [
                    "Una maglietta bianca.",
                    "Mettersi la maglietta."
                ]
            }
        ],
        "transcription": "maʎˈʎetta",
        "subtext": "abbigliamento"
    },
    {
        "word": "maglione",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧶",
        "form": "noun",
        "plural": "maglioni",
        "definitions": [
            {
                "text": "Vestito caldo di lana.",
                "examples": [
                    "Metto un maglione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "maʎˈʎone"
    },
    {
        "word": "pantaloni",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "emoji": "👖",
        "form": "noun",
        "plural": "pantaloni",
        "countability": "countable",
        "partitive": "dei",
        "definitions": [
            {
                "text": "Un capo d'abbigliamento che copre le gambe.",
                "examples": [
                    "Un paio di pantaloni.",
                    "Pantaloni blu."
                ]
            }
        ],
        "transcription": "pantaˈloni",
        "subtext": "abbigliamento"
    },
    {
        "word": "pigiama",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛌",
        "form": "noun",
        "plural": "pigiami",
        "definitions": [
            {
                "text": "Per dormire.",
                "examples": [
                    "Mettere il pigiama."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "scarpe",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "emoji": "👟",
        "form": "noun",
        "plural": "scarpe",
        "countability": "countable",
        "partitive": "delle",
        "definitions": [
            {
                "text": "Accessori che si indossano ai piedi per camminare.",
                "examples": [
                    "Scarpe da ginnastica.",
                    "Mettersi le scarpe."
                ]
            }
        ],
        "transcription": "ˈskarpe",
        "subtext": "abbigliamento"
    },
    {
        "word": "sciarpa",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧣",
        "form": "noun",
        "plural": "sciarpe",
        "definitions": [
            {
                "text": "Per il collo.",
                "examples": [
                    "Indossare la sciarpa."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "stivali",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "gli",
        "gender": "masculine",
        "emoji": "🥾",
        "form": "noun",
        "plural": "stivali",
        "definitions": [
            {
                "text": "Scarpe alte.",
                "examples": [
                    "Stivali per la pioggia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "degli",
        "transcription": "stiˈvali"
    },
    {
        "word": "t-shirt",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👕",
        "form": "noun",
        "plural": "t-shirt",
        "definitions": [
            {
                "text": "Maglietta a maniche corte.",
                "examples": [
                    "Una t-shirt di cotone."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "vestito",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👗",
        "form": "noun",
        "plural": "vestiti",
        "definitions": [
            {
                "text": "Abito intero.",
                "examples": [
                    "Lei ha un bel vestito."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "vesˈtito"
    },
    {
        "word": "zuccotto",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🧣",
        "form": "noun",
        "plural": "zuccotti",
        "definitions": [
            {
                "text": "Cappello di lana.",
                "examples": [
                    "Uno zuccotto caldo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello"
    },
    {
        "word": "artista",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎨",
        "form": "noun",
        "plural": "artisti",
        "definitions": [
            {
                "text": "Persona che fa arte.",
                "examples": [
                    "Lei è una grande artista."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "arˈtista"
    },
    {
        "word": "attore",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎭",
        "form": "noun",
        "plural": "attori",
        "definitions": [
            {
                "text": "Persona che recita.",
                "examples": [
                    "È un attore famoso."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "atˈtore"
    },
    {
        "word": "autista",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "autisti",
        "definitions": [
            {
                "text": "Persona che guida un veicolo.",
                "examples": [
                    "L'autista dell'autobus è gentile."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "auˈtista"
    },
    {
        "word": "chef",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "chef",
        "definitions": [
            {
                "text": "Un cuoco professionista.",
                "examples": [
                    "Lo chef prepara il pasto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello"
    },
    {
        "word": "conducente",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "conducenti",
        "subtext": "",
        "synonyms": [
            "autista",
            "guidatore"
        ],
        "definitions": [
            {
                "text": "Una persona che guida un veicolo per lavoro.",
                "examples": [
                    "L'autista dell'autobus era amichevole."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "konduˈʧɛnte"
    },
    {
        "word": "cuoco",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "cuochi",
        "subtext": "",
        "synonyms": [
            "chef",
            "cuciniere"
        ],
        "definitions": [
            {
                "text": "Un cuoco professionista, specialmente il capo cuoco in un ristorante.",
                "examples": [
                    "Il cuoco prepara un cibo eccellente."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈkwɔko"
    },
    {
        "word": "direttore",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "direttori",
        "subtext": "",
        "synonyms": [
            "manager",
            "dirigente"
        ],
        "definitions": [
            {
                "text": "Una persona che è a capo di un team o di un'azienda.",
                "examples": [
                    "Il mio direttore lavora per molte ore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "diretˈtore"
    },
    {
        "word": "infermiere",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "infermieri",
        "subtext": "",
        "synonyms": [
            "infermiera",
            "assistente"
        ],
        "definitions": [
            {
                "text": "Una persona addestrata per curare malati o feriti.",
                "examples": [
                    "L'infermiere controlla la pressione sanguigna."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'"
    },
    {
        "word": "insegnante",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "transcription": "inseɲˈɲante",
        "plural": "insegnanti",
        "definitions": [
            {
                "text": "Una persona che aiuta a imparare cose nuove.",
                "examples": [
                    "L'insegnante è in classe."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'"
    },
    {
        "word": "medico",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "numberPlural": "2 medico",
        "answer": "due medici",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "transcription": "ˈmɛdiko",
        "plural": "medici",
        "definitions": [
            {
                "text": "Una persona che aiuta le persone malate.",
                "examples": [
                    "Il medico è all'ospedale.",
                    "Devo vedere un medico."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "mestiere",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👔",
        "form": "noun",
        "plural": "mestieri",
        "definitions": [
            {
                "text": "Professione.",
                "examples": [
                    "Qual è il tuo mestiere?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "mesˈtjɛre"
    },
    {
        "word": "occupazione",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "💼",
        "form": "noun",
        "transcription": "okkupatˈtsjone",
        "plural": "occupazioni",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Il lavoro o l'attività di una persona.",
                "examples": [
                    "La mia occupazione è l'insegnamento."
                ]
            }
        ]
    },
    {
        "word": "lavastoviglie",
        "level": "starter",
        "theme": "kitchen_items_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧼",
        "form": "noun",
        "transcription": "lavastoˈviʎʎe",
        "plural": "lavastoviglie",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Macchina per lavare i piatti.",
                "examples": [
                    "Carico la lavastoviglie."
                ]
            }
        ]
    },
    {
        "word": "compagno di classe",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "compagni di classe",
        "definitions": [
            {
                "text": "Persona nella stessa classe.",
                "examples": [
                    "Il mio compagno è simpatico."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "errore",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "❌",
        "form": "noun",
        "plural": "errori",
        "definitions": [
            {
                "text": "Sbaglio.",
                "examples": [
                    "Fare un errore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "erˈrore"
    },
    {
        "word": "frase",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📝",
        "form": "noun",
        "plural": "frasi",
        "definitions": [
            {
                "text": "Insieme di parole.",
                "examples": [
                    "Fai una frase."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈfraze"
    },
    {
        "word": "lingua",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "lingue",
        "definitions": [
            {
                "text": "Ciò che si parla.",
                "examples": [
                    "L'italiano è una lingua."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈliŋɡwa"
    },
    {
        "word": "parola",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📝",
        "form": "noun",
        "plural": "parole",
        "definitions": [
            {
                "text": "Unità del linguaggio.",
                "examples": [
                    "Una parola difficile."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "paˈrɔla"
    },
    {
        "word": "sbaglio",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "⚠️",
        "form": "noun",
        "plural": "sbagli",
        "definitions": [
            {
                "text": "Mancanza o errore.",
                "examples": [
                    "Uno sbaglio di grammatica."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello"
    },
    {
        "word": "studente",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🧑‍🎓",
        "form": "noun",
        "plural": "studenti",
        "definitions": [
            {
                "text": "Persona che studia.",
                "examples": [
                    "Sono uno studente."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "stuˈdɛnte"
    },
    {
        "word": "esercizio",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "l'",
        "emoji": "🏋️",
        "form": "noun",
        "plural": "esercizi",
        "definitions": [
            {
                "text": "Attività fisica che ti mantiene in forma e in salute.",
                "examples": [
                    "Faccio esercizio tre volte a settimana."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "eserˈʧitsjo"
    },
    {
        "word": "festa",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎉",
        "form": "noun",
        "plural": "feste",
        "definitions": [
            {
                "text": "Momento per divertirsi insieme.",
                "examples": [
                    "Buona festa!"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈfɛsta"
    },
    {
        "word": "tempo libero",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎮",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "svago",
            "relax"
        ],
        "definitions": [
            {
                "text": "Momento in cui non lavori e puoi fare ciò che vuoi.",
                "examples": [
                    "Leggo libri nel mio tempo libero."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "banca",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏦",
        "form": "noun",
        "plural": "banche",
        "subtext": "conto in banca, andare in banca",
        "definitions": [
            {
                "text": "Un luogo dove le persone tengono i soldi e fanno transazioni finanziarie.",
                "examples": [
                    "La banca è vicino al mio ufficio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈbaŋka"
    },
    {
        "word": "bar",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "plural": "bar",
        "definitions": [
            {
                "text": "Luogo dove si beve il caffè.",
                "examples": [
                    "Andiamo al bar."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "bar"
    },
    {
        "word": "farmacia",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💊",
        "form": "noun",
        "plural": "farmacie",
        "definitions": [
            {
                "text": "Luogo per comprare medicine.",
                "examples": [
                    "Dov'è la farmacia?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "farmaˈʧia"
    },
    {
        "word": "mensa",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "mense",
        "definitions": [
            {
                "text": "Ristorante per lavoratori o studenti.",
                "examples": [
                    "Mangiamo in mensa."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmɛnsa"
    },
    {
        "word": "negozio",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "emoji": "🛒",
        "form": "noun",
        "plural": "negozi",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un luogo dove si comprano cose.",
                "examples": [
                    "Un negozio di vestiti.",
                    "Andare in negozio."
                ]
            }
        ],
        "transcription": "neˈɡɔttsjo",
        "subtext": "luogo"
    },
    {
        "word": "ospedale",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏥",
        "form": "noun",
        "plural": "ospedali",
        "subtext": "andare all'ospedale, pronto soccorso",
        "definitions": [
            {
                "text": "Un luogo dove le persone malate o ferite ricevono cure mediche.",
                "examples": [
                    "È andato all'ospedale in ambulanza."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ospeˈdale"
    },
    {
        "word": "parco",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "emoji": "🌳",
        "form": "noun",
        "plural": "parchi",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una grande area verde pubblica con alberi e fiori.",
                "examples": [
                    "Andare al parco.",
                    "Correre nel parco."
                ]
            }
        ],
        "transcription": "ˈparko",
        "subtext": "luogo"
    },
    {
        "word": "ristorante",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "ristoranti",
        "subtext": "ristorante italiano, andare al ristorante",
        "definitions": [
            {
                "text": "Un luogo dove paghi per mangiare i pasti.",
                "examples": [
                    "Andiamo al ristorante il venerdì."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ristoˈrante"
    },
    {
        "word": "scuola",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "emoji": "🏫",
        "form": "noun",
        "plural": "scuole",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un luogo dove si impara e si studia.",
                "examples": [
                    "Andare a scuola.",
                    "La mia scuola è vicina."
                ]
            }
        ],
        "transcription": "ˈskwɔla",
        "subtext": "istruzione"
    },
    {
        "word": "stazione",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚉",
        "form": "noun",
        "plural": "stazioni",
        "subtext": "stazione ferroviaria, stazione degli autobus",
        "definitions": [
            {
                "text": "Un edificio dove i treni o gli autobus si fermano per i passeggeri.",
                "examples": [
                    "La stazione è a dieci minuti da qui."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "statˈtsjone"
    },
    {
        "word": "supermercato",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "supermercati",
        "subtext": "andare al supermercato",
        "definitions": [
            {
                "text": "Un grande negozio che vende cibo e altri beni per la casa.",
                "examples": [
                    "Vado al supermercato il sabato."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "supermerˈkato"
    },
    {
        "word": "fidanzata",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "fidanzate",
        "definitions": [
            {
                "text": "Partner femminile.",
                "examples": [
                    "La sua fidanzata è italiana."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "fidanˈtsata"
    },
    {
        "word": "fidanzato",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "fidanzati",
        "definitions": [
            {
                "text": "Partner maschile.",
                "examples": [
                    "Il mio fidanzato è qui."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "fidanˈtsato"
    },
    {
        "word": "partner",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💑",
        "form": "noun",
        "plural": "partner",
        "subtext": "marito, moglie, fidanzato, fidanzata",
        "definitions": [
            {
                "text": "La persona con cui vivi o hai una relazione.",
                "examples": [
                    "Il mio partner lavora qui."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "cena",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "cene",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Il pasto che si consuma la sera.",
                "examples": [
                    "Cosa c'è per cena?",
                    "Invitare a cena."
                ]
            }
        ],
        "transcription": "ˈtʃena",
        "subtext": "pasto"
    },
    {
        "word": "colazione",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "emoji": "🍳",
        "form": "noun",
        "plural": "colazioni",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Il primo pasto della giornata.",
                "examples": [
                    "Fare colazione.",
                    "Caffè e cornetto a colazione."
                ]
            }
        ],
        "transcription": "kolaˈttstsjone",
        "subtext": "pasto"
    },
    {
        "word": "merenda",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍪",
        "form": "noun",
        "plural": "merende",
        "definitions": [
            {
                "text": "Pasto del pomeriggio.",
                "examples": [
                    "I bambini fanno merenda."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "meˈrɛnda"
    },
    {
        "word": "pasto",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "pasti",
        "definitions": [
            {
                "text": "L'atto di mangiare.",
                "examples": [
                    "Un pasto abbondante."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈpasto"
    },
    {
        "word": "pranzo",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "il",
        "emoji": "🍱",
        "form": "noun",
        "plural": "pranzi",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Il pasto che si consuma a metà giornata.",
                "examples": [
                    "Cosa mangi a pranzo?",
                    "Un pranzo veloce."
                ]
            }
        ],
        "transcription": "ˈprandzo",
        "subtext": "pasto"
    },
    {
        "word": "spuntino",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🥣",
        "form": "noun",
        "plural": "spuntini",
        "definitions": [
            {
                "text": "Piccolo pasto.",
                "examples": [
                    "Fare uno spuntino."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "spunˈtino"
    },
    {
        "word": "aereo",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "aerei",
        "subtext": "prendere l'aereo, volo",
        "definitions": [
            {
                "text": "Un veicolo con ali che vola nell'aria.",
                "examples": [
                    "L'aereo atterra alle nove."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aˈɛreo"
    },
    {
        "word": "autobus",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚌",
        "form": "noun",
        "plural": "autobus",
        "subtext": "prendere l'autobus, fermata dell'autobus",
        "definitions": [
            {
                "text": "Un grande veicolo che trasporta molte persone.",
                "examples": [
                    "Prendo l'autobus per andare al lavoro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈautobus"
    },
    {
        "word": "barca",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⛵",
        "form": "noun",
        "plural": "barche",
        "definitions": [
            {
                "text": "Veicolo per l'acqua.",
                "examples": [
                    "La barca è sul mare."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈbarka"
    },
    {
        "word": "bicicletta",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚲",
        "form": "noun",
        "plural": "biciclette",
        "subtext": "bici, andare in bici",
        "definitions": [
            {
                "text": "Un veicolo a due ruote che guidi spingendo i pedali.",
                "examples": [
                    "Lui va al lavoro in bicicletta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "biʧikˈkletta"
    },
    {
        "word": "macchina",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "macchine",
        "subtext": "guidare una macchina, macchina veloce",
        "definitions": [
            {
                "text": "Un veicolo con quattro ruote e un motore.",
                "examples": [
                    "La sua macchina è rossa."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmakkina"
    },
    {
        "word": "treno",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚆",
        "form": "noun",
        "plural": "treni",
        "subtext": "prendere il treno, in treno, stazione",
        "definitions": [
            {
                "text": "Un veicolo che circola su rotaie.",
                "examples": [
                    "Il treno è veloce."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtrɛno"
    },
    {
        "word": "velocità",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏎️",
        "form": "noun",
        "plural": "velocità",
        "definitions": [
            {
                "text": "Rapidità di movimento.",
                "examples": [
                    "Limitare la velocità."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "veloʧiˈta"
    },
    {
        "word": "banconota",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💵",
        "form": "noun",
        "plural": "banconote",
        "definitions": [
            {
                "text": "Soldi di carta.",
                "examples": [
                    "Una banconota da dieci euro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "baŋkoˈnɔta"
    },
    {
        "word": "biglietto",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎟️",
        "form": "noun",
        "plural": "biglietti",
        "definitions": [
            {
                "text": "Tagliando per bus o cinema.",
                "examples": [
                    "Un biglietto per il treno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "biʎˈʎetto"
    },
    {
        "word": "carta di credito",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💳",
        "form": "noun",
        "plural": "carte di credito",
        "definitions": [
            {
                "text": "Carta per pagare.",
                "examples": [
                    "Pago con la carta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈkarta di ˈkrɛdito"
    },
    {
        "word": "contanti",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "💵",
        "form": "noun",
        "plural": "contanti",
        "definitions": [
            {
                "text": "Soldi liquidi.",
                "examples": [
                    "Non ho contanti."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dei",
        "transcription": "konˈtanti"
    },
    {
        "word": "conto",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏦",
        "form": "noun",
        "plural": "conti",
        "definitions": [
            {
                "text": "Conto in banca.",
                "examples": [
                    "Aprire un conto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈkonto"
    },
    {
        "word": "costo",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "emoji": "💰",
        "form": "noun",
        "plural": "costi",
        "definitions": [
            {
                "text": "La quantità di denaro necessaria per comprare qualcosa.",
                "examples": [
                    "L'appartamento costa molto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈkɔsto"
    },
    {
        "word": "fattura",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💳",
        "form": "noun",
        "plural": "fatture",
        "definitions": [
            {
                "text": "Documento di pagamento.",
                "examples": [
                    "Pago la fattura."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "fatˈtura"
    },
    {
        "word": "monete",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "gender": "feminine",
        "emoji": "🪙",
        "form": "noun",
        "plural": "monete",
        "definitions": [
            {
                "text": "Soldi metallici.",
                "examples": [
                    "Hai delle monete?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "delle",
        "transcription": "moˈnete"
    },
    {
        "word": "pagamento",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💳",
        "form": "noun",
        "plural": "pagamenti",
        "definitions": [
            {
                "text": "Azione di pagare.",
                "examples": [
                    "Pagamento con carta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "paɡaˈmento"
    },
    {
        "word": "prezzo",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "prezzi",
        "definitions": [
            {
                "text": "La quantità di denaro che paghi per qualcosa.",
                "examples": [
                    "Il prezzo del cibo è alto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈprɛttso"
    },
    {
        "word": "ricevuta",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📄",
        "form": "noun",
        "plural": "ricevute",
        "definitions": [
            {
                "text": "Foglio che prova il pagamento.",
                "examples": [
                    "Tieni la ricevuta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "riʧeˈvuta"
    },
    {
        "word": "risparmio",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "plural": "risparmi",
        "definitions": [
            {
                "text": "Soldi messi da parte.",
                "examples": [
                    "I miei risparmi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "risˈparmjo"
    },
    {
        "word": "spesa",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💸",
        "form": "noun",
        "plural": "spese",
        "definitions": [
            {
                "text": "Soldi che escono.",
                "examples": [
                    "Ridurre le spese."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "della",
        "transcription": "ˈspeza"
    },
    {
        "word": "agosto",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "agosti",
        "definitions": [
            {
                "text": "Ottavo mese dell'anno.",
                "examples": [
                    "Fa molto caldo in agosto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'"
    },
    {
        "word": "aprile",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌧️",
        "form": "noun",
        "plural": "aprili",
        "definitions": [
            {
                "text": "Quarto mese dell'anno.",
                "examples": [
                    "In aprile piove spesso."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'"
    },
    {
        "word": "dicembre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎄",
        "form": "noun",
        "plural": "dicembri",
        "definitions": [
            {
                "text": "Dodicesimo mese dell'anno.",
                "examples": [
                    "Natale è in dicembre."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "diˈʧɛmbre"
    },
    {
        "word": "febbraio",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "plural": "febbrai",
        "definitions": [
            {
                "text": "Secondo mese dell'anno.",
                "examples": [
                    "Febbraio è corto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "febˈbrajo"
    },
    {
        "word": "gennaio",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "plural": "gennai",
        "definitions": [
            {
                "text": "Primo mese dell'anno.",
                "examples": [
                    "A gennaio fa freddo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ʤenˈnajo"
    },
    {
        "word": "giugno",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "giugni",
        "definitions": [
            {
                "text": "Sesto mese dell'anno.",
                "examples": [
                    "L'estate inizia in giugno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈʤuɲɲo"
    },
    {
        "word": "luglio",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "lugli",
        "definitions": [
            {
                "text": "Settimo mese dell'anno.",
                "examples": [
                    "Vado in vacanza in luglio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "maggio",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌸",
        "form": "noun",
        "plural": "maggi",
        "definitions": [
            {
                "text": "Quinto mese dell'anno.",
                "examples": [
                    "Maggio è un bel mese."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈmadʤo"
    },
    {
        "word": "marzo",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌱",
        "form": "noun",
        "plural": "marzi",
        "definitions": [
            {
                "text": "Terzo mese dell'anno.",
                "examples": [
                    "La primavera comincia in marzo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈmartso"
    },
    {
        "word": "novembre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌫️",
        "form": "noun",
        "plural": "novembri",
        "definitions": [
            {
                "text": "Undicesimo mese dell'anno.",
                "examples": [
                    "Piove spesso in novembre."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "noˈvɛmbre"
    },
    {
        "word": "ottobre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎃",
        "form": "noun",
        "plural": "ottobri",
        "definitions": [
            {
                "text": "Decimo mese dell'anno.",
                "examples": [
                    "Halloween è in ottobre."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "otˈtobre"
    },
    {
        "word": "settembre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍂",
        "form": "noun",
        "plural": "settembri",
        "definitions": [
            {
                "text": "Nono mese dell'anno.",
                "examples": [
                    "La scuola inizia in settembre."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "setˈtɛmbre"
    },
    {
        "word": "band",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎸",
        "form": "noun",
        "plural": "band",
        "definitions": [
            {
                "text": "Gruppo di musicisti.",
                "examples": [
                    "Una rock band."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "bɛnd"
    },
    {
        "word": "canzone",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎤",
        "form": "noun",
        "plural": "canzoni",
        "definitions": [
            {
                "text": "Parole con musica.",
                "examples": [
                    "È una bella canzone."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "kanˈtsone"
    },
    {
        "word": "concerto",
        "level": "starter",
        "theme": "music_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎵",
        "form": "noun",
        "plural": "concerti",
        "definitions": [
            {
                "text": "Spettacolo musicale.",
                "examples": [
                    "Un concerto di piano."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "konˈʧɛrto"
    },
    {
        "word": "musica",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎵",
        "form": "noun",
        "plural": "musiche",
        "definitions": [
            {
                "text": "Suoni melodici.",
                "examples": [
                    "Ascolto musica."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "della",
        "transcription": "ˈmuzika"
    },
    {
        "word": "chitarra",
        "level": "starter",
        "theme": "musical_instruments_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎸",
        "form": "noun",
        "transcription": "kiˈtarra",
        "plural": "chitarre",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Uno strumento musicale a corde.",
                "examples": [
                    "Suona la chitarra."
                ]
            }
        ]
    },
    {
        "word": "pianoforte",
        "level": "starter",
        "theme": "musical_instruments_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎹",
        "form": "noun",
        "transcription": "pjanofˈfɔrte",
        "plural": "pianoforti",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un grande strumento musicale a tastiera.",
                "examples": [
                    "Suono il pianoforte."
                ]
            }
        ]
    },
    {
        "word": "violino",
        "level": "starter",
        "theme": "musical_instruments_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎻",
        "form": "noun",
        "transcription": "vjoˈlino",
        "plural": "violini",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Uno strumento musicale a quattro corde.",
                "examples": [
                    "Il violino è difficile da suonare."
                ]
            }
        ]
    },
    {
        "word": "arrivederci",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👋",
        "form": "noun",
        "plural": "arrivederci",
        "definitions": [
            {
                "text": "Saluto quando si parte.",
                "examples": [
                    "Arrivederci, signore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "arrivederˈʧi"
    },
    {
        "word": "ciao",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👋",
        "form": "noun",
        "plural": "ciao",
        "definitions": [
            {
                "text": "Saluto amichevole.",
                "examples": [
                    "Ciao a tutti."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈʧao",
        "synonyms": [
            "salve"
        ]
    },
    {
        "word": "cognome",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🆔",
        "form": "noun",
        "transcription": "koɲˈɲome",
        "plural": "cognomi",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Il nome di famiglia di una persona.",
                "examples": [
                    "Il mio cognome è Rossi."
                ]
            }
        ]
    },
    {
        "word": "nome",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🆔",
        "form": "noun",
        "plural": "nomi",
        "definitions": [
            {
                "text": "Come ci si chiama.",
                "examples": [
                    "Il mio nome è Mario."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈnome"
    },
    {
        "word": "signora",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "signore",
        "definitions": [
            {
                "text": "Donna adulta.",
                "examples": [
                    "Grazie, signora."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "siˈɲɲora"
    },
    {
        "word": "signore",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "signori",
        "definitions": [
            {
                "text": "Uomo adulto.",
                "examples": [
                    "Buongiorno, signore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "siˈɲɲore"
    },
    {
        "word": "aria",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🌬️",
        "form": "noun",
        "plural": "arie",
        "definitions": [
            {
                "text": "Gas che si respira.",
                "examples": [
                    "L'aria è pura qui."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dell'",
        "transcription": "ˈarja"
    },
    {
        "word": "campagna",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚜",
        "form": "noun",
        "plural": "campagne",
        "definitions": [
            {
                "text": "Luogo fuori città.",
                "examples": [
                    "Vivere in campagna."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "kamˈpaɲɲa"
    },
    {
        "word": "cielo",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌌",
        "form": "noun",
        "plural": "cieli",
        "definitions": [
            {
                "text": "Spazio sopra la Terra.",
                "examples": [
                    "Il cielo è blu."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈʧɛlo"
    },
    {
        "word": "erba",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🌱",
        "form": "noun",
        "plural": "erbe",
        "definitions": [
            {
                "text": "Piccole piante verdi a terra.",
                "examples": [
                    "L'erba è verde."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈɛrba"
    },
    {
        "word": "fiume",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏞️",
        "form": "noun",
        "plural": "fiumi",
        "definitions": [
            {
                "text": "Corso d'acqua.",
                "examples": [
                    "L'acqua del fiume è fredda."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈfjume"
    },
    {
        "word": "foresta",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌲",
        "form": "noun",
        "plural": "foreste",
        "definitions": [
            {
                "text": "Luogo con molti alberi.",
                "examples": [
                    "Camminiamo nella foresta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "lago",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏞️",
        "form": "noun",
        "plural": "laghi",
        "definitions": [
            {
                "text": "Grande distesa di acqua dolce.",
                "examples": [
                    "Il lago è calmo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈlaɡo"
    },
    {
        "word": "luna",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "plural": "lune",
        "definitions": [
            {
                "text": "Astro che brilla di notte.",
                "examples": [
                    "La luna è tonda."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "mare",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌊",
        "form": "noun",
        "plural": "mari",
        "definitions": [
            {
                "text": "Vasta distesa di acqua salata.",
                "examples": [
                    "Nuoto nel mare."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈmare"
    },
    {
        "word": "mondo",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌍",
        "form": "noun",
        "plural": "mondi",
        "definitions": [
            {
                "text": "L'intera Terra.",
                "examples": [
                    "Tutto il mondo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "montagna",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏔️",
        "form": "noun",
        "plural": "montagne",
        "definitions": [
            {
                "text": "Grande massa di terra elevata.",
                "examples": [
                    "La montagna è alta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "monˈtaɲɲa"
    },
    {
        "word": "natura",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌿",
        "form": "noun",
        "transcription": "naˈtura",
        "plural": "nature",
        "countability": "uncountable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Il mondo fisico che include piante, animali e paesaggi.",
                "examples": [
                    "Amo stare in mezzo alla natura."
                ]
            }
        ]
    },
    {
        "word": "nuvola",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "☁️",
        "form": "noun",
        "plural": "nuvole",
        "definitions": [
            {
                "text": "Massa bianca nel cielo.",
                "examples": [
                    "Ci sono delle nuvole."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈnuvola"
    },
    {
        "word": "ponte",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌉",
        "form": "noun",
        "plural": "ponti",
        "definitions": [
            {
                "text": "Passaggio sopra l'acqua.",
                "examples": [
                    "Il ponte è vecchio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈponte"
    },
    {
        "word": "spiaggia",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "spiagge",
        "definitions": [
            {
                "text": "Riva del mare con sabbia.",
                "examples": [
                    "Andiamo in spiaggia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "stella",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⭐",
        "form": "noun",
        "plural": "stelle",
        "definitions": [
            {
                "text": "Punto luminoso nel cielo di notte.",
                "examples": [
                    "Guardo le stelle."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈstɛlla"
    },
    {
        "word": "adulto",
        "level": "starter",
        "theme": "people_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑",
        "form": "noun",
        "plural": "adulti",
        "definitions": [
            {
                "text": "Persona non più bambina.",
                "examples": [
                    "Un biglietto per adulti."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aˈdulto"
    },
    {
        "word": "gente",
        "level": "starter",
        "theme": "people_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👥",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Persone in generale.",
                "examples": [
                    "C'è molta gente."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "della",
        "transcription": "ˈʤɛnte"
    },
    {
        "word": "ragazza",
        "level": "starter",
        "theme": "people_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "plural": "ragazze",
        "definitions": [
            {
                "text": "Giovane femmina.",
                "examples": [
                    "È una brava ragazza."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "raˈɡattsa"
    },
    {
        "word": "ragazzo",
        "level": "starter",
        "theme": "people_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "plural": "ragazzi",
        "definitions": [
            {
                "text": "Giovane maschio.",
                "examples": [
                    "È un bel ragazzo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "raˈɡattso"
    },
    {
        "word": "compleanno",
        "level": "starter",
        "theme": "personal_identity_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎂",
        "form": "noun",
        "plural": "compleanni",
        "definitions": [
            {
                "text": "Giorno della nascita.",
                "examples": [
                    "Buon compleanno!"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kompleˈanno"
    },
    {
        "word": "nazionalità",
        "level": "starter",
        "theme": "personal_identity_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌍",
        "form": "noun",
        "transcription": "natsjonalità",
        "plural": "nazionalità",
        "countability": "uncountable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Lo stato di appartenenza a una nazione.",
                "examples": [
                    "Ho la nazionalità italiana."
                ]
            }
        ]
    },
    {
        "word": "donna",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "article": "la",
        "numberPlural": "2 donna",
        "answer": "due donne",
        "emoji": "👩",
        "form": "noun",
        "plural": "donne",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un essere umano adulto di sesso femminile.",
                "examples": [
                    "Una donna coraggiosa.",
                    "Lei è una donna d'affari."
                ]
            }
        ],
        "transcription": "ˈdɔnna",
        "opposite": "uomo",
        "subtext": "persona"
    },
    {
        "word": "uomo",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "article": "l'",
        "numberPlural": "2 uomo",
        "answer": "due uomini",
        "emoji": "👨",
        "form": "noun",
        "plural": "uomini",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Un essere umano adulto di sesso maschile.",
                "examples": [
                    "Un uomo gentile.",
                    "Quell'uomo è mio padre."
                ]
            }
        ],
        "opposite": "donna",
        "subtext": "persona",
        "transcription": "ˈwɔmo"
    },
    {
        "word": "arte",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎨",
        "form": "noun",
        "plural": "arti",
        "definitions": [
            {
                "text": "Creazione di cose belle.",
                "examples": [
                    "Amo l'arte moderna."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈarte"
    },
    {
        "word": "biblioteca",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📚",
        "form": "noun",
        "plural": "biblioteche",
        "definitions": [
            {
                "text": "Luogo con molti libri.",
                "examples": [
                    "Vado in biblioteca."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "cinema",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎬",
        "form": "noun",
        "plural": "cinema",
        "definitions": [
            {
                "text": "Luogo per vedere i film.",
                "examples": [
                    "Andiamo al cinema."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈʧinema"
    },
    {
        "word": "museo",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "musei",
        "definitions": [
            {
                "text": "Luogo con oggetti d'arte.",
                "examples": [
                    "Il museo è grande."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "muˈzɛo"
    },
    {
        "word": "albero",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌳",
        "form": "noun",
        "plural": "alberi",
        "definitions": [
            {
                "text": "Grande pianta con un tronco.",
                "examples": [
                    "L'albero è verde."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈalbero"
    },
    {
        "word": "fiore",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌸",
        "form": "noun",
        "plural": "fiori",
        "definitions": [
            {
                "text": "Parte colorata di una pianta.",
                "examples": [
                    "Il fiore profuma."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈfjore"
    },
    {
        "word": "a",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "Luogo o direzione.",
                "examples": [
                    "Vado a Roma."
                ]
            }
        ]
    },
    {
        "word": "in",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "All'interno di.",
                "examples": [
                    "Il gatto è nella scatola."
                ]
            }
        ],
        "transcription": "in"
    },
    {
        "word": "lì",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "👉",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "In quel posto.",
                "examples": [
                    "Il gatto è lì."
                ]
            }
        ]
    },
    {
        "word": "sotto",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "Al di sotto di.",
                "examples": [
                    "Il cane è sotto il tavolo."
                ]
            }
        ],
        "transcription": "ˈsotto"
    },
    {
        "word": "su",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "A contatto con il sopra di.",
                "examples": [
                    "Il libro è sul tavolo."
                ]
            }
        ],
        "transcription": "su"
    },
    {
        "word": "aeroporto",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "aeroporti",
        "definitions": [
            {
                "text": "Luogo per prendere l'aereo.",
                "examples": [
                    "Vado all'aeroporto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aeropˈpɔrto"
    },
    {
        "word": "banchina",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛤️",
        "form": "noun",
        "plural": "banchine",
        "definitions": [
            {
                "text": "Bordo del binario.",
                "examples": [
                    "Il treno arriva alla banchina 3."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "binario",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛤️",
        "form": "noun",
        "plural": "binari",
        "definitions": [
            {
                "text": "Percorso del treno.",
                "examples": [
                    "Il binario è libero."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "fermata dell'autobus",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚌",
        "form": "noun",
        "plural": "fermate dell'autobus",
        "definitions": [
            {
                "text": "Luogo dei bus.",
                "examples": [
                    "Aspettare alla fermata."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ferˈmata delˈlautobus"
    },
    {
        "word": "metropolitana",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚇",
        "form": "noun",
        "plural": "metropolitane",
        "definitions": [
            {
                "text": "Treno sotterraneo.",
                "examples": [
                    "Prendere la metro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "metropoliˈtana"
    },
    {
        "word": "taxi",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚕",
        "form": "noun",
        "plural": "taxi",
        "definitions": [
            {
                "text": "Auto con autista.",
                "examples": [
                    "Chiamare un taxi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "tragitto",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "emoji": "🚆",
        "form": "noun",
        "plural": "tragitti",
        "definitions": [
            {
                "text": "Il viaggio per andare e tornare dal lavoro ogni giorno.",
                "examples": [
                    "Il mio tragitto dura un'ora."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "traˈʤitto"
    },
    {
        "word": "viaggiatore",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "viaggiatori",
        "definitions": [
            {
                "text": "Persona che viaggia.",
                "examples": [
                    "Il treno è pieno di viaggiatori."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "vjadʤaˈtore"
    },
    {
        "word": "volo",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "voli",
        "definitions": [
            {
                "text": "Viaggio in aereo.",
                "examples": [
                    "Un volo notturno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈvɔlo"
    },
    {
        "word": "ufficio",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "uffici",
        "subtext": "luogo di lavoro, grande ufficio",
        "definitions": [
            {
                "text": "Una stanza o un edificio dove lavorano le persone.",
                "examples": [
                    "Lui è in ufficio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ufˈfiʧo"
    },
    {
        "word": "appartamento",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "appartamenti",
        "subtext": "flat, vivere in un appartamento",
        "definitions": [
            {
                "text": "Un insieme di stanze su un piano di un edificio.",
                "examples": [
                    "Lei vive in un appartamento."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "appartaˈmento"
    },
    {
        "word": "ascensore",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛗",
        "form": "noun",
        "plural": "ascensori",
        "definitions": [
            {
                "text": "Apparecchio per salire i piani.",
                "examples": [
                    "Prendere l'ascensore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aʃʃenˈsore"
    },
    {
        "word": "bagno",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚿",
        "form": "noun",
        "plural": "bagni",
        "definitions": [
            {
                "text": "Stanza per lavarsi.",
                "examples": [
                    "Il bagno è piccolo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈbaɲɲo"
    },
    {
        "word": "camera da letto",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "camere da letto",
        "definitions": [
            {
                "text": "Stanza per dormire.",
                "examples": [
                    "La mia camera è pulita."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈkamera da ˈlɛtto"
    },
    {
        "word": "casa",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏡",
        "form": "noun",
        "plural": "case",
        "subtext": "a casa, tornare a casa",
        "definitions": [
            {
                "text": "Un edificio dove vive una famiglia.",
                "examples": [
                    "Hanno una grande casa."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈkaza"
    },
    {
        "word": "corridoio",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👣",
        "form": "noun",
        "plural": "corridoi",
        "definitions": [
            {
                "text": "Passaggio lungo e stretto.",
                "examples": [
                    "Il corridoio è buio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "korriˈdojo"
    },
    {
        "word": "cucina",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "emoji": "🍳",
        "form": "noun",
        "plural": "cucine",
        "definitions": [
            {
                "text": "La stanza di una casa dove si prepara il cibo.",
                "examples": [
                    "Cucino in cucina."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "kuˈʧina"
    },
    {
        "word": "doccia",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚿",
        "form": "noun",
        "plural": "docce",
        "definitions": [
            {
                "text": "Installazione per lavarsi in piedi.",
                "examples": [
                    "Fare una doccia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "entrata",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "entrate",
        "definitions": [
            {
                "text": "Luogo da cui si entra.",
                "examples": [
                    "L'entrata della casa."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "enˈtrata"
    },
    {
        "word": "garage",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "garage",
        "definitions": [
            {
                "text": "Luogo per l'auto.",
                "examples": [
                    "L'auto è in garage."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ɡaˈraʒ"
    },
    {
        "word": "giardino",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏡",
        "form": "noun",
        "plural": "giardini",
        "definitions": [
            {
                "text": "Terreno con piante.",
                "examples": [
                    "Lavorare in giardino."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ʤarˈdino"
    },
    {
        "word": "muri",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧱",
        "form": "noun",
        "plural": "muri",
        "definitions": [
            {
                "text": "Pareti di una stanza.",
                "examples": [
                    "Muri bianchi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dei",
        "transcription": "ˈmuri"
    },
    {
        "word": "sala da pranzo",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "sale da pranzo",
        "definitions": [
            {
                "text": "Stanza per mangiare.",
                "examples": [
                    "Cenare in sala da pranzo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "scale",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "feminine",
        "emoji": "🪜",
        "form": "noun",
        "plural": "scale",
        "definitions": [
            {
                "text": "Serie di scalini.",
                "examples": [
                    "Salire le scale."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "delle",
        "transcription": "ˈskale"
    },
    {
        "word": "soggiorno",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "soggiorni",
        "definitions": [
            {
                "text": "Stanza per stare insieme.",
                "examples": [
                    "Guardare la tv in soggiorno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "sodˈʤorno"
    },
    {
        "word": "stanza",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "emoji": "🚪",
        "form": "noun",
        "plural": "stanze",
        "subtext": "",
        "synonyms": [
            "camera"
        ],
        "definitions": [
            {
                "text": "Una parte separata di un edificio con pareti e una porta.",
                "examples": [
                    "L'appartamento ha tre stanze."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "tetto",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏠",
        "form": "noun",
        "plural": "tetti",
        "definitions": [
            {
                "text": "Copertura di una casa.",
                "examples": [
                    "Il gatto è sul tetto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtetto"
    },
    {
        "word": "uscita",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "uscite",
        "definitions": [
            {
                "text": "Luogo da cui si esce.",
                "examples": [
                    "L'uscita è lì."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "uʃˈʃita"
    },
    {
        "word": "autunno",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🍂",
        "form": "noun",
        "plural": "autunni",
        "definitions": [
            {
                "text": "Stagione quando cadono le foglie.",
                "examples": [
                    "L'autunno è bello."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "auˈtunno"
    },
    {
        "word": "estate",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "estati",
        "definitions": [
            {
                "text": "La stagione più calda.",
                "examples": [
                    "Amo l'estate."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "esˈtate"
    },
    {
        "word": "inverno",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "plural": "inverni",
        "definitions": [
            {
                "text": "La stagione più fredda.",
                "examples": [
                    "Nevica in inverno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "inˈvɛrno"
    },
    {
        "word": "primavera",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌱",
        "form": "noun",
        "plural": "primavere",
        "definitions": [
            {
                "text": "Stagione dopo l'inverno.",
                "examples": [
                    "In primavera i fiori sbocciano."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "primaˈvɛra"
    },
    {
        "word": "palla",
        "level": "starter",
        "theme": "sports_equipment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "palle",
        "definitions": [
            {
                "text": "Oggetto tondo per lo sport.",
                "examples": [
                    "Giochiamo con la palla."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpalla"
    },
    {
        "word": "minuto",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⏱️",
        "form": "noun",
        "plural": "minuti",
        "definitions": [
            {
                "text": "Sessanta secondi.",
                "examples": [
                    "Aspetta un minuto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "miˈnuto"
    },
    {
        "word": "ora",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "ore",
        "definitions": [
            {
                "text": "Sessanta minuti.",
                "examples": [
                    "È l'una."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈora"
    },
    {
        "word": "orario",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "orari",
        "definitions": [
            {
                "text": "Tempo stabilito.",
                "examples": [
                    "L'orario dei treni."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "oˈrarjo"
    },
    {
        "word": "secondo",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⏱️",
        "form": "noun",
        "plural": "secondi",
        "definitions": [
            {
                "text": "Tempo molto breve.",
                "examples": [
                    "Un secondo, per favore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "seˈkondo"
    },
    {
        "word": "sveglia",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⏰",
        "form": "noun",
        "plural": "sveglie",
        "definitions": [
            {
                "text": "Orologio che suona al mattino.",
                "examples": [
                    "La sveglia suona."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈzveʎʎa"
    },
    {
        "word": "tempo",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "tempi",
        "definitions": [
            {
                "text": "La durata o l'ora.",
                "examples": [
                    "Non ho tempo."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "del",
        "transcription": "ˈtɛmpo"
    },
    {
        "word": "domani",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "",
        "gender": "",
        "emoji": "⏭️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Il giorno dopo oggi.",
                "examples": [
                    "Ci vediamo domani."
                ]
            }
        ],
        "transcription": "doˈmani"
    },
    {
        "word": "fine settimana",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "emoji": "🗓️",
        "form": "noun",
        "plural": "fine settimana",
        "subtext": "fine settimana",
        "definitions": [
            {
                "text": "Sabato e domenica.",
                "examples": [
                    "Mi rilasso nel fine settimana."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "giorno",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "emoji": "☀️",
        "form": "noun",
        "plural": "giorni",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un periodo di ventiquattr'ore.",
                "examples": [
                    "Un bel giorno.",
                    "Giorno dopo giorno."
                ]
            }
        ],
        "transcription": "ˈdʒorno",
        "subtext": "tempo"
    },
    {
        "word": "ieri",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "",
        "gender": "",
        "emoji": "🔙",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Il giorno prima di oggi.",
                "examples": [
                    "Ieri ero stanco."
                ]
            }
        ],
        "transcription": "ˈjɛri"
    },
    {
        "word": "mattina",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌅",
        "form": "noun",
        "plural": "mattine",
        "subtext": "mattina presto, buongiorno",
        "definitions": [
            {
                "text": "La parte della giornata prima delle 12.",
                "examples": [
                    "Inizio a lavorare la mattina."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "matˈtina"
    },
    {
        "word": "mezzanotte",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🕛",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Le dodici di notte.",
                "examples": [
                    "È mezzanotte."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "meddzaˈnɔtte"
    },
    {
        "word": "mezzogiorno",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🕛",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Le dodici del giorno.",
                "examples": [
                    "È mezzogiorno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "meddzoˈʤorno"
    },
    {
        "word": "notte",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "plural": "notti",
        "subtext": "buonanotte, di notte",
        "definitions": [
            {
                "text": "Il periodo di oscurità tra sera e mattina.",
                "examples": [
                    "Dormo otto ore ogni notte."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈnɔtte"
    },
    {
        "word": "oggi",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "",
        "gender": "",
        "emoji": "📅",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Il giorno presente.",
                "examples": [
                    "Lavoro oggi."
                ]
            }
        ],
        "transcription": "ˈɔddʤi"
    },
    {
        "word": "ogni giorno",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Tutti i giorni senza eccezioni.",
                "examples": [
                    "Bevo caffè ogni giorno."
                ]
            }
        ],
        "transcription": "ˈoɲɲi ˈʤorno"
    },
    {
        "word": "pomeriggio",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "pomeriggi",
        "subtext": "questo pomeriggio, buon pomeriggio",
        "definitions": [
            {
                "text": "La parte della giornata da mezzogiorno fino a sera.",
                "examples": [
                    "Finisco di lavorare alle cinque del pomeriggio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "pomeˈriddʤo"
    },
    {
        "word": "sera",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌆",
        "form": "noun",
        "plural": "sere",
        "subtext": "",
        "synonyms": [
            "stasera",
            "buonasera"
        ],
        "definitions": [
            {
                "text": "La parte della giornata dopo il pomeriggio.",
                "examples": [
                    "Ceniamo la sera."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈsera"
    },
    {
        "word": "settimana",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "emoji": "📅",
        "form": "noun",
        "plural": "settimane",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un periodo di sette giorni.",
                "examples": [
                    "La prossima settimana.",
                    "I giorni della settimana."
                ]
            }
        ],
        "transcription": "settiˈmana",
        "subtext": "tempo"
    },
    {
        "word": "arrivo",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛬",
        "form": "noun",
        "plural": "arrivi",
        "definitions": [
            {
                "text": "Azione di arrivare.",
                "examples": [
                    "L'ora dell'arrivo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "arˈrivo"
    },
    {
        "word": "bagagli",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧳",
        "form": "noun",
        "plural": "bagagli",
        "definitions": [
            {
                "text": "Effetti personali.",
                "examples": [
                    "Portare i bagagli."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dei",
        "transcription": "baˈgaʎʎi"
    },
    {
        "word": "camera d'albergo",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏨",
        "form": "noun",
        "plural": "camere d'albergo",
        "definitions": [
            {
                "text": "Stanza in albergo.",
                "examples": [
                    "Prenotare una camera d'albergo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "mappa",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗺️",
        "form": "noun",
        "plural": "mappe",
        "definitions": [
            {
                "text": "Disegno di un luogo.",
                "examples": [
                    "Guarda la mappa."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmappa"
    },
    {
        "word": "partenza",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛫",
        "form": "noun",
        "plural": "partenze",
        "definitions": [
            {
                "text": "Azione di partire.",
                "examples": [
                    "L'ora della partenza."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "parˈtentsa"
    },
    {
        "word": "passaporto",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛂",
        "form": "noun",
        "plural": "passaporti",
        "definitions": [
            {
                "text": "Documento per viaggiare.",
                "examples": [
                    "Dov'è il passaporto?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "piantina",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📍",
        "form": "noun",
        "plural": "piantine",
        "definitions": [
            {
                "text": "Mappa di una città.",
                "examples": [
                    "La piantina di Roma."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "pjanˈtina"
    },
    {
        "word": "prenotazione",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📖",
        "form": "noun",
        "plural": "prenotazioni",
        "definitions": [
            {
                "text": "Azione di prenotare.",
                "examples": [
                    "Fare una prenotazione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "reception",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛎️",
        "form": "noun",
        "plural": "reception",
        "definitions": [
            {
                "text": "Accoglienza in hotel.",
                "examples": [
                    "Andare alla reception."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "riˈsɛpʃon"
    },
    {
        "word": "vacanza",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "vacanze",
        "definitions": [
            {
                "text": "Un periodo di tempo lontano dal lavoro quando viaggi o ti rilassi.",
                "examples": [
                    "Andiamo in vacanza a luglio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "vaˈkanttsa"
    },
    {
        "word": "valigia",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧳",
        "form": "noun",
        "plural": "valigie",
        "definitions": [
            {
                "text": "Contenitore per i viaggi.",
                "examples": [
                    "Preparo la valigia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "vaˈliʤa"
    },
    {
        "word": "viaggio",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "il",
        "emoji": "✈️",
        "form": "noun",
        "plural": "viaggi",
        "definitions": [
            {
                "text": "L'atto di andare da un luogo all'altro.",
                "examples": [
                    "Amo i viaggi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈvjadʤo"
    },
    {
        "word": "zaino",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🎒",
        "form": "noun",
        "plural": "zaini",
        "definitions": [
            {
                "text": "Sacca da spalla.",
                "examples": [
                    "Ho un grosso zaino."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "ˈdzajno"
    },
    {
        "word": "affitto",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "article": "l'",
        "emoji": "🏠",
        "form": "noun",
        "plural": "affitti",
        "definitions": [
            {
                "text": "Il denaro pagato per usare una casa o un appartamento che appartiene a qualcun altro.",
                "examples": [
                    "L'affitto è alto in città."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "afˈfitto"
    },
    {
        "word": "hotel",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "article": "l'",
        "emoji": "🏨",
        "form": "noun",
        "plural": "hotel",
        "definitions": [
            {
                "text": "Un edificio dove le persone pagano per pernottare.",
                "examples": [
                    "L'hotel è vicino alla stazione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'"
    },
    {
        "word": "università",
        "level": "starter",
        "theme": "types_of_education_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎓",
        "form": "noun",
        "plural": "università",
        "definitions": [
            {
                "text": "Scuola superiore.",
                "examples": [
                    "Vado all'università."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "universiˈta"
    },
    {
        "word": "app",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "📱",
        "form": "noun",
        "transcription": "ɛp",
        "plural": "app",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Un programma per smartphone.",
                "examples": [
                    "Ho scaricato una nuova app."
                ]
            }
        ]
    },
    {
        "word": "meteo",
        "level": "starter",
        "theme": "weather_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌤️",
        "form": "noun",
        "transcription": "ˈmɛteo",
        "plural": null,
        "countability": "uncountable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Le condizioni del tempo atmosferico.",
                "examples": [
                    "Guardo il meteo in TV."
                ]
            }
        ]
    },
    {
        "word": "ombrello",
        "level": "starter",
        "theme": "weather_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "☂️",
        "form": "noun",
        "plural": "ombrelli",
        "definitions": [
            {
                "text": "Oggetto contro la pioggia.",
                "examples": [
                    "Prendi l'ombrello."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "omˈbrɛllo"
    },
    {
        "word": "pioggia",
        "level": "starter",
        "theme": "weather_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌧️",
        "form": "noun",
        "plural": null,
        "subtext": "forte pioggia, stivali da pioggia",
        "definitions": [
            {
                "text": "Acqua che cade dalle nuvole in gocce.",
                "examples": [
                    "C'è molta pioggia in autunno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "sole",
        "level": "starter",
        "theme": "weather_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": null,
        "subtext": "sole caldo, sole del mattino",
        "definitions": [
            {
                "text": "La stella che dà luce e calore durante il giorno.",
                "examples": [
                    "Il sole è molto forte oggi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈsole"
    },
    {
        "word": "temperatura",
        "level": "starter",
        "theme": "weather_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌡️",
        "form": "noun",
        "transcription": "temperaˈtura",
        "plural": "temperature",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Il grado di caldo o freddo.",
                "examples": [
                    "La temperatura è bassa oggi."
                ]
            }
        ]
    },
    {
        "word": "vento",
        "level": "starter",
        "theme": "weather_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💨",
        "form": "noun",
        "plural": null,
        "subtext": "vento forte, vento freddo",
        "definitions": [
            {
                "text": "Aria che si muove, a volte fortemente.",
                "examples": [
                    "Il vento è molto forte oggi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈvɛnto"
    },
    {
        "word": "affari",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "gli",
        "gender": "masculine",
        "emoji": "💼",
        "form": "noun",
        "plural": "affari",
        "definitions": [
            {
                "text": "Attività commerciali.",
                "examples": [
                    "Viaggia per affari."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "degli",
        "transcription": "afˈfari"
    },
    {
        "word": "azienda",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "aziende",
        "definitions": [
            {
                "text": "Luogo di lavoro o servizio.",
                "examples": [
                    "È una grande azienda."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "adˈdzjɛnda"
    },
    {
        "word": "capo",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "emoji": "👨‍💼",
        "form": "noun",
        "plural": "capi",
        "definitions": [
            {
                "text": "La persona che è responsabile al lavoro.",
                "examples": [
                    "Il mio capo è molto gentile."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈkapo"
    },
    {
        "word": "cliente",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "clienti",
        "definitions": [
            {
                "text": "Persona che compra un servizio.",
                "examples": [
                    "Il cliente ha ragione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kliˈɛnte"
    },
    {
        "word": "clientela",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👥",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Insieme dei clienti.",
                "examples": [
                    "Una clientela fedele."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della"
    },
    {
        "word": "collega",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "colleghi",
        "definitions": [
            {
                "text": "Una persona con cui lavori.",
                "examples": [
                    "I miei colleghi sono d'aiuto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kolˈlɛga"
    },
    {
        "word": "informazione",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "ℹ️",
        "form": "noun",
        "transcription": "informattˈtsjone",
        "plural": "informazioni",
        "countability": "uncountable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Dati o notizie su qualcosa.",
                "examples": [
                    "Ho bisogno di un'informazione."
                ]
            }
        ]
    },
    {
        "word": "piano",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "piani",
        "definitions": [
            {
                "text": "Ciò che si prevede di fare.",
                "examples": [
                    "Qual è il piano?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del"
    },
    {
        "word": "progetto",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📊",
        "form": "noun",
        "plural": "progetti",
        "definitions": [
            {
                "text": "Lavoro programmato.",
                "examples": [
                    "Un nuovo progetto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "proˈʤɛtto"
    },
    {
        "word": "riunione",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "la",
        "emoji": "🤝",
        "form": "noun",
        "plural": "riunioni",
        "subtext": "",
        "synonyms": [
            "meeting"
        ],
        "definitions": [
            {
                "text": "Un momento in cui le persone si riuniscono per parlare di qualcosa.",
                "examples": [
                    "Abbiamo una riunione ogni lunedì."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "rjuˈnjone"
    },
    {
        "word": "servizio",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🤝",
        "form": "noun",
        "plural": "servizi",
        "definitions": [
            {
                "text": "Azione di aiutare.",
                "examples": [
                    "Un buon servizio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "serˈvitsjo"
    },
    {
        "word": "stipendio",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "lo",
        "emoji": "💰",
        "form": "noun",
        "plural": "stipendi",
        "subtext": "",
        "synonyms": [
            "salario"
        ],
        "definitions": [
            {
                "text": "Il denaro che una persona guadagna dal proprio lavoro ogni mese.",
                "examples": [
                    "Il suo stipendio è buono."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "stiˈpɛndjo"
    },
    {
        "word": "stress",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "lo",
        "emoji": "😫",
        "form": "noun",
        "definitions": [
            {
                "text": "Una sensazione di preoccupazione causata da una situazione difficile.",
                "examples": [
                    "Ho molto stress al lavoro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello"
    },
    {
        "word": "successo",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏆",
        "form": "noun",
        "plural": "successi",
        "definitions": [
            {
                "text": "Riuscita positiva.",
                "examples": [
                    "È un successo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "sukˈʧɛsso"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
