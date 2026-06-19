// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "giardino",
        "level": "elementary",
        "theme": "places",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un giardino pubblico o un parco.",
                "examples": []
            }
        ],
        "countability": "countable",
        "lang": "it",
        "transcription": "/dʒarˈdino/",
        "id": "it_elementary_places_024"
    },
    {
        "word": "artista",
        "level": "elementary",
        "theme": "art_culture",
        "article": "l'",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "plural": "artisti",
        "definitions": [
            {
                "text": "Una persona che crea dipinti o disegni.",
                "examples": [
                    "L'artista dipinge un bel quadro.",
                    "È un artista famoso."
                ]
            },
            {
                "text": "Questa persona lavora spesso in uno studio.",
                "examples": [
                    "Gli artisti usano colori e pennelli."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/arˈtista/",
        "id": "it_elementary_art_culture_001"
    },
    {
        "word": "chef",
        "level": "elementary",
        "theme": "jobs",
        "article": "lo",
        "emoji": "👨‍🍳",
        "form": "noun",
        "classification": "regular",
        "plural": "chef",
        "definitions": [
            {
                "text": "Un cuoco professionista che lavora in un ristorante.",
                "examples": [
                    "Lo chef prepara un pasto delizioso.",
                    "Il nostro chef ha molto talento."
                ]
            },
            {
                "text": "Questa persona lavora in cucina.",
                "examples": [
                    "Gli chef portano un alto cappello bianco."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/ʃɛf/",
        "id": "it_elementary_jobs_001"
    },
    {
        "word": "risotto",
        "level": "elementary",
        "theme": "food_drink",
        "article": "il",
        "emoji": "🍚",
        "form": "noun",
        "classification": "regular",
        "plural": "risotti",
        "definitions": [
            {
                "text": "Un piatto di riso cotto con brodo fino a diventare cremoso.",
                "examples": [
                    "Il risotto allo zafferano è giallo.",
                    "Mia nonna fa un ottimo risotto."
                ]
            },
            {
                "text": "È un primo piatto tipico del Nord Italia.",
                "examples": [
                    "Il risotto va servito ben caldo."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/riˈzotto/",
        "id": "it_elementary_food_drink_023"
    },
    {
        "word": "gelato",
        "level": "elementary",
        "theme": "food_drink",
        "article": "il",
        "emoji": "🍦",
        "form": "noun",
        "classification": "regular",
        "plural": "gelati",
        "definitions": [
            {
                "text": "Un dolce freddo fatto con latte e zucchero.",
                "examples": [
                    "Prendiamo un gelato al cioccolato.",
                    "Il gelato è rinfrescante in estate."
                ]
            },
            {
                "text": "L'Italia è famosa per il suo gelato artigianale.",
                "examples": [
                    "Il gelato può essere servito nel cono o nella coppetta."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/dʒeˈlato/",
        "id": "it_elementary_food_drink_024"
    },
    {
        "word": "formaggio",
        "level": "elementary",
        "theme": "food_drink",
        "article": "il",
        "emoji": "🧀",
        "form": "noun",
        "classification": "regular",
        "plural": "formaggi",
        "definitions": [
            {
                "text": "Un alimento solido ricavato dal latte.",
                "examples": [
                    "Mi piace il formaggio sulla pasta.",
                    "Esistono molti tipi di formaggio."
                ]
            },
            {
                "text": "L'Italia produce centinaia di formaggi diversi.",
                "examples": [
                    "Il parmigiano è un formaggio stagionato."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/forˈmaddʒo/",
        "id": "it_elementary_food_drink_025"
    },
    {
        "word": "riso",
        "level": "elementary",
        "theme": "food_drink",
        "article": "il",
        "emoji": "🍚",
        "form": "noun",
        "classification": "regular",
        "plural": "riso",
        "lang": "it",
        "transcription": "/ˈrizo/",
        "definitions": [
            {
                "text": "riso",
                "examples": []
            }
        ],
        "id": "it_elementary_food_drink_026"
    },
    {
        "word": "pomodoro",
        "level": "elementary",
        "theme": "food_drink",
        "article": "il",
        "emoji": "🍅",
        "form": "noun",
        "classification": "regular",
        "plural": "pomodori",
        "lang": "it",
        "transcription": "/pomoˈdɔro/",
        "definitions": [
            {
                "text": "pomodoro",
                "examples": []
            }
        ],
        "id": "it_elementary_food_drink_027"
    },
    {
        "word": "patata",
        "level": "elementary",
        "theme": "food_drink",
        "article": "la",
        "emoji": "🥔",
        "form": "noun",
        "classification": "regular",
        "plural": "patate",
        "lang": "it",
        "transcription": "/paˈtata/",
        "definitions": [
            {
                "text": "patata",
                "examples": []
            }
        ],
        "id": "it_elementary_food_drink_028"
    },
    {
        "word": "vino",
        "level": "elementary",
        "theme": "food_drink",
        "article": "il",
        "baseWord": "vino",
        "emoji": "🍷",
        "form": "noun",
        "classification": "regular",
        "plural": "vino",
        "lang": "it",
        "transcription": "/ˈvino/",
        "definitions": [
            {
                "text": "vino",
                "examples": []
            }
        ],
        "id": "it_elementary_food_drink_029"
    },
    {
        "word": "birra",
        "level": "elementary",
        "theme": "food_drink",
        "article": "la",
        "baseWord": "birra",
        "emoji": "🍺",
        "form": "noun",
        "classification": "regular",
        "plural": "birra",
        "lang": "it",
        "transcription": "/ˈbirra/",
        "definitions": [
            {
                "text": "birra",
                "examples": []
            }
        ],
        "id": "it_elementary_food_drink_030"
    },
    {
        "word": "ospedale",
        "level": "elementary",
        "theme": "health_medicine",
        "article": "l'",
        "emoji": "🏥",
        "form": "noun",
        "classification": "regular",
        "plural": "ospedali",
        "definitions": [
            {
                "text": "Un luogo dove si curano i malati e i feriti.",
                "examples": [
                    "L'ambulanza sta andando all'ospedale.",
                    "Lavora in ospedale."
                ]
            },
            {
                "text": "Questo è un luogo dove si va per vedere un medico o un infermiere.",
                "examples": [
                    "Gli ospedali sono aperti 24 ore su 24."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/ospeˈdale/",
        "id": "it_elementary_health_medicine_001"
    },
    {
        "word": "cinema",
        "level": "elementary",
        "theme": "art_culture",
        "article": "il",
        "emoji": "🎬",
        "form": "noun",
        "classification": "regular",
        "plural": "cinema",
        "definitions": [
            {
                "text": "Un luogo dove si proiettano film su un grande schermo.",
                "examples": [
                    "Andiamo al cinema stasera.",
                    "Cosa danno al cinema?"
                ]
            },
            {
                "text": "Questo è un luogo dove si possono mangiare popcorn e guardare un film.",
                "examples": [
                    "Mi piace andare al cinema con gli amici."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/ˈtʃinema/",
        "id": "it_elementary_art_culture_002"
    },
    {
        "word": "ristorante",
        "level": "elementary",
        "theme": "food_drink",
        "article": "il",
        "emoji": "🍴",
        "form": "noun",
        "classification": "regular",
        "plural": "ristoranti",
        "definitions": [
            {
                "text": "Un posto dove si può comprare e mangiare un pasto.",
                "examples": [
                    "Andiamo al ristorante stasera.",
                    "Il ristorante è chiuso."
                ]
            },
            {
                "text": "In questo luogo, un cameriere porta il cibo al tavolo.",
                "examples": [
                    "Abbiamo cenato in un ristorante elegante."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/ristoˈrante/",
        "id": "it_elementary_food_drink_031"
    },
    {
        "word": "supermercato",
        "level": "elementary",
        "theme": "shopping",
        "article": "il",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "plural": "supermercati",
        "definitions": [
            {
                "text": "Un grande negozio dove si comprano cibo e prodotti per la casa.",
                "examples": [
                    "Vado a fare la spesa al supermercato.",
                    "Il supermercato è vicino a casa."
                ]
            },
            {
                "text": "In questo luogo si usa un carrello per fare la spesa.",
                "examples": [
                    "Ci sono molte offerte al supermercato."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/supermerˈkato/",
        "id": "it_elementary_shopping_002"
    },
    {
        "word": "vestito",
        "level": "elementary",
        "theme": "clothes",
        "article": "il",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "plural": "vestiti",
        "lang": "it",
        "transcription": "/vesˈtito/",
        "definitions": [
            {
                "text": "vestito",
                "examples": []
            }
        ],
        "id": "it_elementary_clothes_004"
    },
    {
        "word": "giacca",
        "level": "elementary",
        "theme": "clothes",
        "article": "la",
        "emoji": "🧥",
        "form": "noun",
        "classification": "regular",
        "plural": "giacche",
        "lang": "it",
        "transcription": "/ˈdʒakka/",
        "definitions": [
            {
                "text": "giacca",
                "examples": []
            }
        ],
        "id": "it_elementary_clothes_005"
    },
    {
        "word": "gonna",
        "level": "elementary",
        "theme": "clothes",
        "article": "la",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "plural": "gonne",
        "lang": "it",
        "transcription": "/ˈɡonna/",
        "definitions": [
            {
                "text": "gonna",
                "examples": []
            }
        ],
        "id": "it_elementary_clothes_006"
    },
    {
        "word": "divano",
        "level": "elementary",
        "theme": "furniture",
        "article": "il",
        "emoji": "🛋️",
        "form": "noun",
        "classification": "regular",
        "plural": "divani",
        "lang": "it",
        "transcription": "/diˈvano/",
        "definitions": [
            {
                "text": "divano",
                "examples": []
            }
        ],
        "id": "it_elementary_furniture_001"
    },
    {
        "word": "lampada",
        "level": "elementary",
        "theme": "furniture",
        "article": "la",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "plural": "lampade",
        "lang": "it",
        "transcription": "/ˈlampada/",
        "definitions": [
            {
                "text": "lampada",
                "examples": []
            }
        ],
        "id": "it_elementary_furniture_002"
    },
    {
        "word": "scrivania",
        "level": "elementary",
        "theme": "furniture",
        "article": "la",
        "emoji": "⌨️",
        "form": "noun",
        "classification": "regular",
        "plural": "scrivanie",
        "lang": "it",
        "transcription": "/skrivaˈnia/",
        "definitions": [
            {
                "text": "scrivania",
                "examples": []
            }
        ],
        "id": "it_elementary_furniture_003"
    },
    {
        "word": "orologio",
        "level": "elementary",
        "theme": "clothes",
        "article": "l'",
        "emoji": "⌚",
        "form": "noun",
        "classification": "regular",
        "plural": "orologi",
        "definitions": [
            {
                "text": "Uno strumento per misurare il tempo.",
                "examples": [
                    "Il mio orologio è rotto.",
                    "Che ore sono sul tuo orologio?"
                ]
            }
        ],
        "lang": "it",
        "transcription": "/oroˈlɔdʒo/",
        "id": "it_elementary_clothes_001"
    },
    {
        "word": "portafoglio",
        "level": "elementary",
        "theme": "clothes",
        "article": "il",
        "emoji": "👛",
        "form": "noun",
        "classification": "regular",
        "plural": "portafogli",
        "definitions": [
            {
                "text": "Un piccolo contenitore per tenere soldi e carte.",
                "examples": [
                    "Ho perso il portafoglio.",
                    "Metti i soldi nel portafoglio."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/pɔrtaˈfɔʎo/",
        "id": "it_elementary_clothes_002"
    },
    {
        "word": "occhiali",
        "level": "elementary",
        "theme": "clothes",
        "article": "gli",
        "emoji": "👓",
        "form": "noun",
        "classification": "regular",
        "plural": "occhiali",
        "definitions": [
            {
                "text": "Uno strumento che si indossa sul viso per vedere meglio.",
                "examples": [
                    "Ho bisogno di occhiali nuovi.",
                    "Lui porta occhiali neri."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/okˈkjali/",
        "id": "it_elementary_clothes_003"
    },
    {
        "word": "leone",
        "level": "elementary",
        "theme": "animals",
        "article": "il",
        "emoji": "🦁",
        "form": "noun",
        "classification": "regular",
        "plural": "leoni",
        "definitions": [
            {
                "text": "Un grande felino selvatico che vive in Africa ed è chiamato 'il re della foresta'.",
                "examples": [
                    "Il leone è molto forte.",
                    "Abbiamo visto un leone allo zoo."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/leˈone/",
        "id": "it_elementary_animals_001"
    },
    {
        "word": "tigre",
        "level": "elementary",
        "theme": "animals",
        "article": "la",
        "emoji": "🐯",
        "form": "noun",
        "classification": "regular",
        "plural": "tigri",
        "lang": "it",
        "transcription": "/ˈtiɡre/",
        "definitions": [
            {
                "text": "tigre",
                "examples": []
            }
        ],
        "id": "it_elementary_animals_002"
    },
    {
        "word": "cavallo",
        "level": "elementary",
        "theme": "animals",
        "article": "il",
        "emoji": "🐎",
        "form": "noun",
        "classification": "regular",
        "plural": "cavalli",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "caballus"
        },
        "lang": "it",
        "transcription": "/kaˈvallo/",
        "definitions": [
            {
                "text": "cavallo",
                "examples": []
            }
        ],
        "id": "it_elementary_animals_003"
    },
    {
        "word": "braccio",
        "level": "elementary",
        "theme": "body",
        "article": "il",
        "emoji": "💪",
        "form": "noun",
        "classification": "regular",
        "plural": "braccia",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "bracchium"
        },
        "lang": "it",
        "transcription": "/ˈbrattʃo/",
        "definitions": [
            {
                "text": "braccio",
                "examples": []
            }
        ],
        "id": "it_elementary_body_012"
    },
    {
        "word": "università",
        "level": "elementary",
        "theme": "places",
        "article": "l'",
        "emoji": "🎓",
        "form": "noun",
        "classification": "regular",
        "plural": "università",
        "definitions": [
            {
                "text": "Un istituto di istruzione superiore.",
                "examples": [
                    "Studia all'università.",
                    "L'università ha una grande biblioteca."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/universiˈta/",
        "id": "it_elementary_places_029"
    },
    {
        "word": "cucina locale",
        "level": "elementary",
        "theme": "food_drink",
        "article": "la",
        "emoji": "🍜",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Il cibo tradizionale di una zona specifica.",
                "examples": [
                    "Amo provare la cucina locale.",
                    "La cucina locale qui è molto saporita."
                ]
            },
            {
                "text": "Provare la cucina locale è una parte importante del viaggio.",
                "examples": [
                    "La cucina locale usa ingredienti freschi della regione."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/kuˈtʃina loˈkale/",
        "id": "it_elementary_food_drink_032"
    },
    {
        "word": "straordinari",
        "level": "elementary",
        "theme": "work",
        "emoji": "⏰",
        "form": "noun",
        "classification": "regular",
        "article": "gli",
        "plural": "straordinari",
        "definitions": [
            {
                "text": "Ore di lavoro in più rispetto alla normale giornata lavorativa.",
                "examples": [
                    "Lavora facendo gli straordinari per finire il progetto."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/straordiˈnari/",
        "id": "it_elementary_work_004"
    },
    {
        "word": "promozione",
        "level": "elementary",
        "theme": "work",
        "emoji": "📈",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "promozioni",
        "definitions": [
            {
                "text": "Passaggio a un lavoro più alto e meglio retribuito all'interno della stessa azienda.",
                "examples": [
                    "Ha ottenuto una promozione il mese scorso."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/promoˈtsjone/",
        "id": "it_elementary_work_005"
    },
    {
        "word": "colloquio",
        "level": "elementary",
        "theme": "work",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "colloqui",
        "definitions": [
            {
                "text": "Un incontro formale in cui a qualcuno vengono fatte domande per un lavoro.",
                "examples": [
                    "Ho un colloquio di lavoro lunedì."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/kolˈlɔkwjo/",
        "id": "it_elementary_work_006"
    },
    {
        "word": "contratto",
        "level": "elementary",
        "theme": "work",
        "emoji": "📄",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "contratti",
        "definitions": [
            {
                "text": "Un accordo scritto tra un datore di lavoro e un dipendente.",
                "examples": [
                    "Ha firmato un contratto di due anni."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/konˈtratto/",
        "id": "it_elementary_work_007"
    },
    {
        "word": "scadenza",
        "level": "elementary",
        "theme": "work",
        "emoji": "⏳",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "scadenze",
        "definitions": [
            {
                "text": "L'ultimo momento entro il quale un lavoro deve essere terminato.",
                "examples": [
                    "La scadenza è venerdì."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/skaˈdɛntsa/",
        "id": "it_elementary_work_008"
    },
    {
        "word": "esperienza",
        "level": "elementary",
        "theme": "work",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "article": "l'",
        "plural": "esperienze",
        "definitions": [
            {
                "text": "Conoscenza o abilità acquisita facendo qualcosa.",
                "examples": [
                    "Ha cinque anni di esperienza."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/espeˈrjɛntsa/",
        "id": "it_elementary_work_009"
    },
    {
        "word": "mutuo",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "mutui",
        "definitions": [
            {
                "text": "Un prestito da una banca per comprare una casa o un appartamento.",
                "examples": [
                    "Hanno un mutuo alto."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/ˈmutwo/",
        "id": "it_elementary_numbers_001"
    },
    {
        "word": "prestito",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "prestiti",
        "definitions": [
            {
                "text": "Denaro preso in prestito da una banca che deve essere restituito.",
                "examples": [
                    "Ha chiesto un prestito per comprare un'auto."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/ˈprɛstito/",
        "id": "it_elementary_numbers_002"
    },
    {
        "word": "bolletta",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🧾",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "bollette",
        "definitions": [
            {
                "text": "Un documento che mostra quanto denaro devi pagare.",
                "examples": [
                    "Pago la bolletta della luce ogni mese."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/bolˈletta/",
        "id": "it_elementary_numbers_003"
    },
    {
        "word": "debito",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💸",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "debiti",
        "definitions": [
            {
                "text": "Denaro che devi a un'altra persona o a una banca.",
                "examples": [
                    "Ha molti debiti."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/ˈdebito/",
        "id": "it_elementary_numbers_004"
    },
    {
        "word": "conto",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏦",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "conti",
        "definitions": [
            {
                "text": "Un accordo con una banca per depositare i tuoi soldi.",
                "examples": [
                    "Ho un conto di risparmio."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/ˈkonto/",
        "id": "it_elementary_numbers_005"
    },
    {
        "word": "bilancio",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📊",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "bilanci",
        "definitions": [
            {
                "text": "Un piano su come spendere il denaro.",
                "examples": [
                    "Abbiamo bisogno di un bilancio mensile."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/biˈlantʃo/",
        "id": "it_elementary_numbers_006"
    },
    {
        "word": "dieta",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🥗",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "diete",
        "definitions": [
            {
                "text": "Il cibo che una persona mangia normalmente; o un piano alimentare speciale.",
                "examples": [
                    "Segue una dieta sana."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/ˈdjɛta/",
        "id": "it_elementary_food_drink_033"
    },
    {
        "word": "appuntamento",
        "level": "elementary",
        "theme": "health_medicine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "article": "l'",
        "plural": "appuntamenti",
        "definitions": [
            {
                "text": "Un momento che organizzi per incontrare qualcuno, ad esempio un medico.",
                "examples": [
                    "Ho un appuntamento dal medico martedì."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/appuntaˈmento/",
        "id": "it_elementary_health_medicine_002"
    },
    {
        "word": "vitamina",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "💊",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "vitamine",
        "definitions": [
            {
                "text": "Una sostanza naturale negli alimenti di cui il tuo corpo ha bisogno per stare in salute.",
                "examples": [
                    "Le arance contengono vitamina C."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/vitaˈmina/",
        "id": "it_elementary_food_drink_034"
    },
    {
        "word": "dolore",
        "level": "elementary",
        "theme": "health_medicine",
        "emoji": "🤕",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "dolori",
        "definitions": [
            {
                "text": "Una sensazione spiacevole nel corpo quando qualcosa non va.",
                "examples": [
                    "Ha dolore alla schiena."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/doˈlore/",
        "id": "it_elementary_health_medicine_003"
    },
    {
        "word": "sostegno",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "sostegni",
        "definitions": [
            {
                "text": "Aiuto o incoraggiamento dato a qualcuno.",
                "examples": [
                    "Ho bisogno del tuo sostegno."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/sosˈteɲɲo/",
        "id": "it_elementary_people_025"
    },
    {
        "word": "fiducia",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "definitions": [
            {
                "text": "Il credere che qualcuno sia onesto e affidabile.",
                "examples": [
                    "La fiducia è importante in una relazione."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/fiˈdutʃa/",
        "id": "it_elementary_people_026"
    },
    {
        "word": "compromesso",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "compromessi",
        "definitions": [
            {
                "text": "Un accordo in cui entrambe le parti accettano meno di quanto volevano.",
                "examples": [
                    "Le buone relazioni hanno bisogno di compromessi."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/komproˈmesso/",
        "id": "it_elementary_people_027"
    },
    {
        "word": "viaggio",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🛤️",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "viaggi",
        "definitions": [
            {
                "text": "Spostamento da un luogo a un altro.",
                "examples": [
                    "Il viaggio verso il lavoro dura 40 minuti."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/ˈvjaddʒo/",
        "id": "it_elementary_travel_026"
    },
    {
        "word": "all'estero",
        "level": "elementary",
        "theme": "travel",
        "emoji": "✈️",
        "form": "adverb",
        "definitions": [
            {
                "text": "In o verso un altro paese.",
                "examples": [
                    "Vanno all'estero ogni estate."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/alˈlɛstero/",
        "id": "it_elementary_travel_027"
    },
    {
        "word": "destinazione",
        "level": "elementary",
        "theme": "travel",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "destinazioni",
        "definitions": [
            {
                "text": "Il luogo verso cui stai viaggiando.",
                "examples": [
                    "Parigi è una destinazione popolare."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/destinatˈtsjone/",
        "id": "it_elementary_travel_028"
    },
    {
        "word": "volo",
        "level": "elementary",
        "theme": "travel",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "voli",
        "definitions": [
            {
                "text": "Uno spostamento fatto in aereo.",
                "examples": [
                    "Il volo per Londra dura due ore."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/ˈvɔlo/",
        "id": "it_elementary_travel_029"
    },
    {
        "word": "bagagli",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "article": "i",
        "plural": "bagagli",
        "definitions": [
            {
                "text": "Borse e valigie che porti con te quando viaggi.",
                "examples": [
                    "Ha molti bagagli."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/baˈɡaʎi/",
        "id": "it_elementary_travel_030"
    },
    {
        "word": "quartiere",
        "level": "elementary",
        "theme": "places",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "article": "il",
        "plural": "quartieri",
        "definitions": [
            {
                "text": "L'area intorno alla tua casa.",
                "examples": [
                    "Viviamo in un quartiere sicuro."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/kwarˈtjere/",
        "id": "it_elementary_places_025"
    },
    {
        "word": "comunità",
        "level": "elementary",
        "theme": "places",
        "emoji": "👥",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "comunità",
        "definitions": [
            {
                "text": "Un gruppo di persone che vivono nella stessa area o condividono interessi.",
                "examples": [
                    "È attiva nella sua comunità locale."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/komuniˈta/",
        "id": "it_elementary_places_026"
    },
    {
        "word": "inquinamento",
        "level": "elementary",
        "theme": "environment",
        "emoji": "🏭",
        "form": "noun",
        "classification": "regular",
        "article": "l'",
        "definitions": [
            {
                "text": "Danno all'ambiente causato da sostanze nocive.",
                "examples": [
                    "L'inquinamento dell'aria è un grosso problema qui."
                ]
            }
        ],
        "lang": "it",
        "transcription": "/inkwinaˈmento/",
        "id": "it_elementary_environment_007"
    }
];
})();
