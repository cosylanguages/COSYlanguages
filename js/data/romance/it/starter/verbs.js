(function() {
    const data = [
    {
        "word": "abitare",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏢",
        "subtext": "abitare a Roma",
        "transcription": "abiˈtare",
        "definitions": [
            {
                "text": "Vivere in un determinato luogo.",
                "examples": [
                    "Abito a Milano da due anni."
                ]
            }
        ],
        "classification": "regular",
        "v3": "abitato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "addebitare",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "addebitare trecento euro",
        "transcription": "addebiˈtare",
        "definitions": [
            {
                "text": "Chiedere denaro.",
                "examples": [
                    "Il meccanico ha addebitato."
                ]
            }
        ],
        "classification": "regular",
        "v3": "addebitato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "affittare",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "affittare una stanza",
        "transcription": "affitˈtare",
        "definitions": [
            {
                "text": "Pagare per usare casa.",
                "examples": [
                    "Affittiamo in città."
                ]
            }
        ],
        "classification": "regular",
        "v3": "affittato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "aggiungere",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "aggiungere zucchero",
        "transcription": "adˈdʒundʒere",
        "definitions": [
            {
                "text": "Mettere insieme.",
                "examples": [
                    "Aggiungi zucchero."
                ]
            }
        ],
        "classification": "regular",
        "v3": "aggiunto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "aiutare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "aiutare i colleghi",
        "transcription": "ajuˈtare",
        "definitions": [
            {
                "text": "Aiutare qualcuno.",
                "examples": [
                    "Aiuta i colleghi."
                ]
            }
        ],
        "classification": "regular",
        "v3": "aiutato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "alzarsi",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "subtext": "alzarsi alle sette",
        "transcription": "alˈtsarsi",
        "definitions": [
            {
                "text": "Alzarsi dal letto.",
                "examples": [
                    "Si alza alle sette."
                ]
            }
        ],
        "classification": "regular",
        "v3": "alzato",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "amare",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "amare viaggiare",
        "transcription": "aˈmare",
        "definitions": [
            {
                "text": "Avere un forte affetto per.",
                "examples": [
                    "Lei ama il suo lavoro."
                ]
            }
        ],
        "classification": "regular",
        "v3": "amato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "andare",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "andare all estero",
        "transcription": "anˈdare",
        "definitions": [
            {
                "text": "Spostarsi.",
                "examples": [
                    "Vado al lavoro."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "andato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "andare a letto",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "subtext": "andare a letto presto",
        "transcription": "anˈdaːre a ˈlɛtto",
        "definitions": [
            {
                "text": "Mettersi a letto.",
                "examples": [
                    "Vanno a letto alle undici."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "andato a letto",
        "group": "locution",
        "auxiliary": "essere"
    },
    {
        "word": "annullare",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "subtext": "annullare il volo",
        "transcription": "annulˈlaːre",
        "definitions": [
            {
                "text": "Non avverrà.",
                "examples": [
                    "Ha dovuto annullare."
                ]
            }
        ],
        "classification": "regular",
        "v3": "annullato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "appartenere",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "appartenere al dipartimento",
        "transcription": "apparteˈneːre",
        "definitions": [
            {
                "text": "Di proprietà.",
                "examples": [
                    "Quel conto appartiene."
                ]
            }
        ],
        "classification": "regular",
        "v3": "appartenuto",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "arrivare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "arrivare in orario",
        "transcription": "arriˈvare",
        "definitions": [
            {
                "text": "Raggiungere una destinazione.",
                "examples": [
                    "Il treno arriva in ritardo."
                ]
            }
        ],
        "classification": "regular",
        "v3": "arrivato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "ascoltare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "ascoltare musica",
        "transcription": "askolˈtare",
        "definitions": [
            {
                "text": "Prestare attenzione.",
                "examples": [
                    "Ascolto podcast."
                ]
            }
        ],
        "classification": "regular",
        "v3": "ascoltato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "aspettare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "aspettare un amico",
        "transcription": "aspeˈttare",
        "definitions": [
            {
                "text": "Stare in un posto.",
                "examples": [
                    "Sto aspettando il mio amico."
                ]
            }
        ],
        "classification": "regular",
        "v3": "aspettato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "assaggiare",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "👅",
        "subtext": "assaggiare la zuppa",
        "transcription": "assadˈdʒare",
        "definitions": [
            {
                "text": "Sentire sapore.",
                "examples": [
                    "Assaggia questa zuppa."
                ]
            }
        ],
        "classification": "regular",
        "v3": "assaggiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "avere bisogno di",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "bisogno di tempo",
        "transcription": "aˈveːre biˈzoɲɲo di",
        "definitions": [
            {
                "text": "Richiedere qualcosa.",
                "examples": [
                    "Ho bisogno di una pausa."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "avuto bisogno",
        "group": "locution",
        "auxiliary": "avere"
    },
    {
        "word": "ballare",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "ballare insieme",
        "transcription": "balˈlare",
        "definitions": [
            {
                "text": "Muovere il corpo a tempo.",
                "examples": [
                    "Amo ballare."
                ]
            }
        ],
        "classification": "regular",
        "v3": "ballato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "barrare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "❌",
        "subtext": "barrare la risposta",
        "transcription": "barˈraːre",
        "definitions": [
            {
                "text": "Mettere un segno (X).",
                "examples": [
                    "Barra la risposta sbagliata."
                ]
            }
        ],
        "classification": "regular",
        "v3": "barrato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "bere",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "bere caffè",
        "transcription": "ˈbere",
        "definitions": [
            {
                "text": "Ingoiare liquido.",
                "examples": [
                    "Bevo acqua."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "bevuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "cadere",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "le foglie cadono",
        "transcription": "kaˈdeːre",
        "definitions": [
            {
                "text": "Muoversi verso il basso.",
                "examples": [
                    "Le foglie cadono."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "caduto",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "calciare",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🦶",
        "subtext": "calciare la palla",
        "transcription": "kalˈtʃaːre",
        "definitions": [
            {
                "text": "Colpire con il piede.",
                "examples": [
                    "Calcia la palla!"
                ]
            }
        ],
        "classification": "regular",
        "v3": "calciato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "cambiare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "cambiare piano",
        "transcription": "kamˈbjaːre",
        "definitions": [
            {
                "text": "Rendere diverso.",
                "examples": [
                    "Voglio cambiare i vestiti."
                ]
            }
        ],
        "classification": "regular",
        "v3": "cambiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "camminare",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "camminare verso casa",
        "transcription": "kammiˈnaːre",
        "definitions": [
            {
                "text": "Muoversi a piedi.",
                "examples": [
                    "Lui cammina ogni giorno."
                ]
            }
        ],
        "classification": "regular",
        "v3": "camminato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "cantare",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "cantare molto bene",
        "transcription": "kanˈtare",
        "definitions": [
            {
                "text": "Suoni musicali con voce.",
                "examples": [
                    "Canta molto bene."
                ]
            }
        ],
        "classification": "regular",
        "v3": "cantato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "capire",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💡",
        "subtext": "capire qualcuno",
        "transcription": "kaˈpire",
        "definitions": [
            {
                "text": "Afferrare il significato di qualcosa.",
                "examples": [
                    "Capisco il contratto."
                ]
            }
        ],
        "classification": "regular",
        "v3": "capito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "cavalcare",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚲",
        "subtext": "cavalcare in bicicletta",
        "transcription": "kavalˈkaːre",
        "definitions": [
            {
                "text": "Viaggiare in sella.",
                "examples": [
                    "Vado in bicicletta."
                ]
            }
        ],
        "classification": "regular",
        "v3": "cavalcato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "cercare",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🔍",
        "subtext": "giocare a nascondino",
        "transcription": "tʃerˈkare",
        "definitions": [
            {
                "text": "Trovare.",
                "examples": [
                    "Stanno giocando."
                ]
            }
        ],
        "classification": "regular",
        "v3": "cercato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "chiamare",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📞",
        "subtext": "chiamare i clienti",
        "transcription": "kjaˈmare",
        "definitions": [
            {
                "text": "Telefonare a qualcuno.",
                "examples": [
                    "Chiamo i miei clienti ogni mattina."
                ]
            }
        ],
        "classification": "regular",
        "v3": "chiamato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "chiedere",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "chiedere aiuto",
        "transcription": "ˈkjedere",
        "definitions": [
            {
                "text": "Porre una domanda a qualcuno.",
                "examples": [
                    "Lei fa molte domande."
                ]
            }
        ],
        "classification": "regular",
        "v3": "chiesto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "colorare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🖍️",
        "subtext": "colorare di blu",
        "transcription": "koloˈraːre",
        "definitions": [
            {
                "text": "Mettere il colore.",
                "examples": [
                    "Colora l'immagine di blu."
                ]
            }
        ],
        "classification": "regular",
        "v3": "colorato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "combattere",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "⚔️",
        "subtext": "combattere per vincere",
        "transcription": "komˈbattere",
        "definitions": [
            {
                "text": "Usare la forza fisica.",
                "examples": [
                    "I ragazzi stanno combattendo."
                ]
            }
        ],
        "classification": "regular",
        "v3": "combattuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "cominciare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "cominciare la riunione",
        "transcription": "kominˈtʃaːre",
        "definitions": [
            {
                "text": "Iniziare.",
                "examples": [
                    "Cominciamo alle nove."
                ]
            }
        ],
        "classification": "regular",
        "v3": "cominciato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "compitare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔤",
        "subtext": "compitare il nome",
        "transcription": "kompiˈtaːre",
        "definitions": [
            {
                "text": "Dire le lettere.",
                "examples": [
                    "Come si compita il tuo nome?"
                ]
            }
        ],
        "classification": "regular",
        "v3": "compitato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "comprare",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "comprare cibo",
        "transcription": "komˈprare",
        "definitions": [
            {
                "text": "Ottenere pagando.",
                "examples": [
                    "Lei compra online."
                ]
            }
        ],
        "classification": "regular",
        "v3": "comprato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "condividere",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "condividere un idea",
        "transcription": "kondiˈviːdere",
        "definitions": [
            {
                "text": "Dare una parte.",
                "examples": [
                    "Condividiamo la pizza."
                ]
            }
        ],
        "classification": "regular",
        "v3": "condiviso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "conoscere",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤝",
        "subtext": "conoscere la città",
        "transcription": "koˈnoʃʃere",
        "definitions": [
            {
                "text": "Avere familiarità.",
                "examples": [
                    "Conosco bene la città."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "conosciuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "consigliare",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "consigliare un film",
        "transcription": "konsiʎˈʎaːre",
        "definitions": [
            {
                "text": "Suggerire.",
                "examples": [
                    "Puoi consigliare un ristorante?"
                ]
            }
        ],
        "classification": "regular",
        "v3": "consigliato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "contare",
        "level": "starter",
        "theme": "numbers_0_9_A1",
        "emoji": "🔢",
        "subtext": "contare da uno a dieci",
        "transcription": "konˈtare",
        "definitions": [
            {
                "text": "Dire i numeri.",
                "examples": [
                    "Puoi contare?"
                ]
            }
        ],
        "classification": "regular",
        "v3": "contato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "continuare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "continuare a lavorare",
        "transcription": "kontiˈnwaːre",
        "definitions": [
            {
                "text": "Non fermarsi.",
                "examples": [
                    "Ha continuato alle sei."
                ]
            }
        ],
        "classification": "regular",
        "v3": "continuato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "controllare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "subtext": "controllare le email",
        "transcription": "kontrolˈlaːre",
        "definitions": [
            {
                "text": "Esaminare.",
                "examples": [
                    "Controllo le email."
                ]
            }
        ],
        "classification": "regular",
        "v3": "controllato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "correre",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "correre nel parco",
        "transcription": "ˈkorrere",
        "definitions": [
            {
                "text": "Muoversi velocemente.",
                "examples": [
                    "Corro nel parco."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "corso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "costare",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "quanto costa?",
        "transcription": "kosˈtaːre",
        "definitions": [
            {
                "text": "Avere un prezzo.",
                "examples": [
                    "L appartamento costa molto."
                ]
            }
        ],
        "classification": "regular",
        "v3": "costato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "costruire",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "costruire una carriera",
        "transcription": "kostruˈiːre",
        "definitions": [
            {
                "text": "Costruire o sviluppare.",
                "examples": [
                    "Ha costruito una reputazione."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "costruito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "creare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🎨",
        "subtext": "creare siti web",
        "transcription": "kreˈaːre",
        "definitions": [
            {
                "text": "Fare nuovo.",
                "examples": [
                    "Lei crea siti."
                ]
            }
        ],
        "classification": "regular",
        "v3": "creato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "credere",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🙏",
        "subtext": "ti credo",
        "transcription": "ˈkreːdere",
        "definitions": [
            {
                "text": "Pensare che sia vero.",
                "examples": [
                    "Ti credo."
                ]
            }
        ],
        "classification": "regular",
        "v3": "creduto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "crescere",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "crescere del venti percento",
        "transcription": "ˈkreʃʃere",
        "definitions": [
            {
                "text": "Aumentare dimensioni.",
                "examples": [
                    "L azienda è cresciuta."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "cresciuto",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "cucinare",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cucinare per la squadra",
        "transcription": "kutʃiˈnaːre",
        "definitions": [
            {
                "text": "Preparare il cibo.",
                "examples": [
                    "Lei cucina la cena."
                ]
            }
        ],
        "classification": "regular",
        "v3": "cucinato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "dare",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "dare consigli",
        "transcription": "ˈdare",
        "definitions": [
            {
                "text": "Consegnare.",
                "examples": [
                    "Lui mi dà lavoro."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "dato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "dimenticare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "dimenticare il nome",
        "transcription": "dimenˈtikare",
        "definitions": [
            {
                "text": "Mancare di ricordare.",
                "examples": [
                    "Non dimenticare la riunione."
                ]
            }
        ],
        "classification": "regular",
        "v3": "dimenticato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "dipingere",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "emoji": "🎨",
        "subtext": "dipingere fiori",
        "transcription": "diˈpindʒere",
        "definitions": [
            {
                "text": "Usare la pittura.",
                "examples": [
                    "Mi piace dipingere."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "dipinto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "dire la verità",
        "transcription": "ˈdire",
        "definitions": [
            {
                "text": "Dare informazioni a qualcuno.",
                "examples": [
                    "Dice la verità."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "detto",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "disegnare",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "disegnare una mappa",
        "transcription": "dizeɲˈɲaːre",
        "definitions": [
            {
                "text": "Fare un immagine.",
                "examples": [
                    "Mi piace disegnare uccelli."
                ]
            }
        ],
        "classification": "regular",
        "v3": "disegnato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "diventare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "diventare popolare",
        "transcription": "divenˈtaːre",
        "definitions": [
            {
                "text": "Iniziare a essere.",
                "examples": [
                    "È diventata manager."
                ]
            }
        ],
        "classification": "regular",
        "v3": "diventato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "dormire",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "dormire male",
        "transcription": "dorˈmire",
        "definitions": [
            {
                "text": "Riposare incosciente.",
                "examples": [
                    "Lui dorme sette ore."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "dormito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "dovere",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "dovere dei soldi",
        "transcription": "doˈveːre",
        "definitions": [
            {
                "text": "Essere obbligato.",
                "examples": [
                    "Deve alla banca."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "dovuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "esercitarsi",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "subtext": "esercitarsi in palestra",
        "transcription": "ezertʃiˈtarsi",
        "definitions": [
            {
                "text": "Attività fisica.",
                "examples": [
                    "Mi esercito ogni mattina."
                ]
            }
        ],
        "classification": "regular",
        "v3": "esercitato",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "essere",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👤",
        "subtext": "essere medico",
        "transcription": "ˈɛssere",
        "definitions": [
            {
                "text": "Esistere.",
                "examples": [
                    "Sono stanco."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "stato",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "far male",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "subtext": "mi fa male la schiena",
        "transcription": "ˈfar ˈmaːle",
        "definitions": [
            {
                "text": "Sentire dolore.",
                "examples": [
                    "Mi fa male la schiena."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "fatto male",
        "group": "locution",
        "auxiliary": "avere"
    },
    {
        "word": "fare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "fare un errore",
        "transcription": "ˈfare",
        "definitions": [
            {
                "text": "Creare o compiere.",
                "examples": [
                    "Faccio il caffè."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "fatto",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "fare colazione",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "subtext": "fare colazione a casa",
        "transcription": "ˈfaːre kolaˈttsjoːne",
        "definitions": [
            {
                "text": "Pasto del mattino.",
                "examples": [
                    "Fa sempre colazione."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "fatto colazione",
        "group": "locution",
        "auxiliary": "avere"
    },
    {
        "word": "fare il pendolare",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "pendolare in treno",
        "transcription": "ˈfaːre il pendoˈlaːre",
        "definitions": [
            {
                "text": "Viaggiare per lavoro.",
                "examples": [
                    "Faccio il pendolare."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "fatto il pendolare",
        "group": "locution",
        "auxiliary": "avere"
    },
    {
        "word": "fare le valigie",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "subtext": "preparare le valigie",
        "transcription": "ˈfaːre le vaˈliːdʒe",
        "definitions": [
            {
                "text": "Mettere oggetti in borsa.",
                "examples": [
                    "Fa le valigie."
                ]
            }
        ],
        "classification": "regular",
        "v3": "fatto le valigie",
        "group": "locution",
        "auxiliary": "avere"
    },
    {
        "word": "fermare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "fermare qualcuno",
        "transcription": "ferˈmaːre",
        "definitions": [
            {
                "text": "Finire di fare.",
                "examples": [
                    "Ferma la macchina."
                ]
            }
        ],
        "classification": "regular",
        "v3": "fermato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "festeggiare",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "subtext": "festeggiare il successo",
        "transcription": "festedˈdʒare",
        "definitions": [
            {
                "text": "Occasione speciale.",
                "examples": [
                    "Festeggiano insieme."
                ]
            }
        ],
        "classification": "regular",
        "v3": "festeggiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "finire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finire presto",
        "transcription": "fiˈnire",
        "definitions": [
            {
                "text": "Completare.",
                "examples": [
                    "Lui finisce alle cinque."
                ]
            }
        ],
        "classification": "regular",
        "v3": "finito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "gestire",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "subtext": "gestire un team",
        "transcription": "dʒesˈtiːre",
        "definitions": [
            {
                "text": "Responsabile di persone.",
                "examples": [
                    "Gestisce un team."
                ]
            }
        ],
        "classification": "regular",
        "v3": "gestito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "giocare",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "giocare ai videogiochi",
        "transcription": "dʒoˈkare",
        "definitions": [
            {
                "text": "Divertimento.",
                "examples": [
                    "Gioco a calcio."
                ]
            }
        ],
        "classification": "regular",
        "v3": "giocato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "girare",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "girare a destra",
        "transcription": "dʒiˈraːre",
        "definitions": [
            {
                "text": "Muoversi in direzione.",
                "examples": [
                    "Gira a sinistra."
                ]
            }
        ],
        "classification": "regular",
        "v3": "girato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "godere",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "godere del sole",
        "transcription": "ɡoˈdeːre",
        "definitions": [
            {
                "text": "Trarre piacere da qualcosa.",
                "examples": [
                    "Gode di lavorare da casa."
                ]
            }
        ],
        "classification": "regular",
        "v3": "goduto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "gridare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "📢",
        "subtext": "gridare aiuto",
        "transcription": "ɡriˈdaːre",
        "definitions": [
            {
                "text": "Dire qualcosa a voce alta.",
                "examples": [
                    "Non gridare in classe."
                ]
            }
        ],
        "classification": "regular",
        "v3": "gridato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "guadagnare",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "subtext": "guadagnare uno stipendio",
        "transcription": "ɡwadaɲˈɲare",
        "definitions": [
            {
                "text": "Ricevere denaro.",
                "examples": [
                    "Guadagna bene."
                ]
            }
        ],
        "classification": "regular",
        "v3": "guadagnato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "guardare",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "guardare la foto",
        "transcription": "ɡwarˈdare",
        "definitions": [
            {
                "text": "Dirigere gli occhi.",
                "examples": [
                    "Guarda questa foto."
                ]
            }
        ],
        "classification": "regular",
        "v3": "guardato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "guarire",
        "level": "starter",
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "subtext": "guarire completamente",
        "transcription": "ɡwaˈriːre",
        "definitions": [
            {
                "text": "Tornare in salute.",
                "examples": [
                    "Sta guarendo."
                ]
            }
        ],
        "classification": "regular",
        "v3": "guarito",
        "group": "ire",
        "auxiliary": "essere"
    },
    {
        "word": "guidare",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "guidare la macchina",
        "transcription": "ɡwiˈdare",
        "definitions": [
            {
                "text": "Azionare un veicolo.",
                "examples": [
                    "Lei guida verso il lavoro."
                ]
            }
        ],
        "classification": "regular",
        "v3": "guidato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "imparare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "imparare l italiano",
        "transcription": "impaˈraːre",
        "definitions": [
            {
                "text": "Ottenere conoscenza.",
                "examples": [
                    "Voglio imparare l italiano."
                ]
            }
        ],
        "classification": "regular",
        "v3": "imparato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "includere",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "include la colazione",
        "transcription": "inˈkluːdere",
        "definitions": [
            {
                "text": "Rendere parte.",
                "examples": [
                    "Il prezzo include tutto."
                ]
            }
        ],
        "classification": "regular",
        "v3": "incluso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "incontrare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "incontriamo ogni venerdì",
        "transcription": "inkonˈtraːre",
        "definitions": [
            {
                "text": "Vedere per prima volta.",
                "examples": [
                    "Ci incontriamo."
                ]
            }
        ],
        "classification": "regular",
        "v3": "incontrato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "indicare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "☝️",
        "subtext": "indicare la finestra",
        "transcription": "indiˈkaːre",
        "definitions": [
            {
                "text": "Mostrare con il dito.",
                "examples": [
                    "Indica la finestra."
                ]
            }
        ],
        "classification": "regular",
        "v3": "indicato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "indossare",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "indossare gli occhiali",
        "transcription": "indosˈsaːre",
        "definitions": [
            {
                "text": "Avere addosso.",
                "examples": [
                    "Lei indossa un completo."
                ]
            }
        ],
        "classification": "regular",
        "v3": "indossato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "iniziare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "iniziare un nuovo lavoro",
        "transcription": "initˈtsjare",
        "definitions": [
            {
                "text": "Iniziare.",
                "examples": [
                    "Inizio alle otto."
                ]
            }
        ],
        "classification": "regular",
        "v3": "iniziato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "insegnare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "insegnare inglese",
        "transcription": "inseɲˈɲaːre",
        "definitions": [
            {
                "text": "Dare conoscenza.",
                "examples": [
                    "Insegno inglese."
                ]
            }
        ],
        "classification": "regular",
        "v3": "insegnato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "inviare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✉️",
        "subtext": "inviare un messaggio",
        "transcription": "inviˈaːre",
        "definitions": [
            {
                "text": "Far andare in posto.",
                "examples": [
                    "Invio un email."
                ]
            }
        ],
        "classification": "regular",
        "v3": "inviato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "invitare",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "subtext": "invitare gli amici",
        "transcription": "inviˈtaːre",
        "definitions": [
            {
                "text": "Chiedere di venire.",
                "examples": [
                    "Invito gli amici."
                ]
            }
        ],
        "classification": "regular",
        "v3": "invitato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "lanciare",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "⚾",
        "subtext": "lanciare la palla",
        "transcription": "lanˈtʃaːre",
        "definitions": [
            {
                "text": "Far muovere nell'aria.",
                "examples": [
                    "Puoi lanciarmi la palla?"
                ]
            }
        ],
        "classification": "regular",
        "v3": "lanciato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "lavare",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "lavare i vestiti",
        "transcription": "laˈvaːre",
        "definitions": [
            {
                "text": "Pulire con acqua.",
                "examples": [
                    "Lava la macchina."
                ]
            }
        ],
        "classification": "regular",
        "v3": "lavato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "lavorare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "lavorare a tempo pieno",
        "transcription": "lavoˈrare",
        "definitions": [
            {
                "text": "Svolgere compiti.",
                "examples": [
                    "Lavora da casa."
                ]
            }
        ],
        "classification": "regular",
        "v3": "lavorato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "leggere",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "leggere le notizie",
        "transcription": "ˈlɛddʒere",
        "definitions": [
            {
                "text": "Capire parole scritte.",
                "examples": [
                    "Lei legge le notizie."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "letto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "mandare un SMS",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "📱",
        "subtext": "mandare un messaggio veloce",
        "transcription": "manˈdare un ɛsse-ɛmme-ɛsse",
        "definitions": [
            {
                "text": "Inviare messaggio.",
                "examples": [
                    "Mandami un SMS."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "mandato un SMS",
        "group": "locution",
        "auxiliary": "avere"
    },
    {
        "word": "mangiare",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "mangiare a tavola",
        "transcription": "manˈdʒare",
        "definitions": [
            {
                "text": "Consumare cibo.",
                "examples": [
                    "Mangiamo all una."
                ]
            }
        ],
        "classification": "regular",
        "v3": "mangiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "mettere",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "mettere in banca",
        "transcription": "ˈmettere",
        "definitions": [
            {
                "text": "Mettere in posizione.",
                "examples": [
                    "Metti la borsa qui."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "messo",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "migliorare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📈",
        "subtext": "voglio migliorare",
        "transcription": "miʎʎoˈraːre",
        "definitions": [
            {
                "text": "Rendere migliore.",
                "examples": [
                    "Voglio migliorare il mio italiano."
                ]
            }
        ],
        "classification": "regular",
        "v3": "migliorato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "morire",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "morire di freddo",
        "transcription": "moˈriːre",
        "definitions": [
            {
                "text": "Smettere di vivere.",
                "examples": [
                    "Le piante muoiono."
                ]
            }
        ],
        "classification": "regular",
        "v3": "morto",
        "group": "ire",
        "auxiliary": "essere"
    },
    {
        "word": "mostrare",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "mostrare la mappa",
        "transcription": "mosˈtrare",
        "definitions": [
            {
                "text": "Lasciare che qualcuno veda qualcosa.",
                "examples": [
                    "Lei mi mostra la mappa."
                ]
            }
        ],
        "classification": "regular",
        "v3": "mostrato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "muovere",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "muovere velocemente",
        "transcription": "ˈmwɔːvere",
        "definitions": [
            {
                "text": "Spostare.",
                "examples": [
                    "Si sono mossi."
                ]
            }
        ],
        "classification": "regular",
        "v3": "mosso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "nascondere",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🙈",
        "subtext": "nascondersi dietro la porta",
        "transcription": "nasˈkondere",
        "definitions": [
            {
                "text": "Mettere dove non visto.",
                "examples": [
                    "Si nasconde."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "nascosto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "notare",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👀",
        "subtext": "notare il nuovo ufficio",
        "transcription": "noˈtaːre",
        "definitions": [
            {
                "text": "Vedere o accorgersi.",
                "examples": [
                    "Hai notato l ufficio?"
                ]
            }
        ],
        "classification": "regular",
        "v3": "notato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "nuotare",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "nuotare ogni mattina",
        "transcription": "nwoˈtaːre",
        "definitions": [
            {
                "text": "Muoversi nell acqua.",
                "examples": [
                    "Nuoto ogni mattina."
                ]
            }
        ],
        "classification": "regular",
        "v3": "nuotato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "odiare",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😡",
        "subtext": "odiare le riunioni",
        "transcription": "oˈdjaːre",
        "definitions": [
            {
                "text": "Fortemente non gradire.",
                "examples": [
                    "Odia fare il pendolare."
                ]
            }
        ],
        "classification": "regular",
        "v3": "odiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "odorare",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👃",
        "subtext": "odorare il caffè",
        "transcription": "odoˈraːre",
        "definitions": [
            {
                "text": "Riconoscere qualcosa con il naso.",
                "examples": [
                    "Sento l'odore del caffè."
                ]
            }
        ],
        "classification": "regular",
        "v3": "odorato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "ordinare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "ordinare il pranzo",
        "transcription": "ordiˈnare",
        "definitions": [
            {
                "text": "Richiedere formalmente.",
                "examples": [
                    "Ordino il pranzo."
                ]
            }
        ],
        "classification": "regular",
        "v3": "ordinato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "organizzare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📂",
        "subtext": "organizzare tutte le riunioni",
        "transcription": "organidˈdzaːre",
        "definitions": [
            {
                "text": "Pianificare.",
                "examples": [
                    "Lei organizza."
                ]
            }
        ],
        "classification": "regular",
        "v3": "organizzato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "ottenere",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "ottenere una promozione",
        "transcription": "otteˈnere",
        "definitions": [
            {
                "text": "Ricevere.",
                "examples": [
                    "Lei ottiene una promozione."
                ]
            }
        ],
        "classification": "regular",
        "v3": "ottenuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "pagare",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "pagare con carta",
        "transcription": "paˈgare",
        "definitions": [
            {
                "text": "Dare denaro.",
                "examples": [
                    "Pago l affitto."
                ]
            }
        ],
        "classification": "regular",
        "v3": "pagato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "partecipare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "subtext": "partecipare alla riunione",
        "transcription": "partetʃiˈpare",
        "definitions": [
            {
                "text": "Andare a evento.",
                "examples": [
                    "Partecipo a riunione."
                ]
            }
        ],
        "classification": "regular",
        "v3": "partecipato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "partire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "partire presto",
        "transcription": "parˈtire",
        "definitions": [
            {
                "text": "Allontanarsi.",
                "examples": [
                    "Parto alle otto."
                ]
            }
        ],
        "classification": "regular",
        "v3": "partito",
        "group": "ire",
        "auxiliary": "essere"
    },
    {
        "word": "passare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "passare un esame",
        "transcription": "pasˈsaːre",
        "definitions": [
            {
                "text": "Oltrepassare o superare.",
                "examples": [
                    "Spero di superare il test."
                ]
            }
        ],
        "classification": "regular",
        "v3": "passato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "pensare",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "penso che sia...",
        "transcription": "penˈsare",
        "definitions": [
            {
                "text": "Usare la mente.",
                "examples": [
                    "Penso sia buona idea."
                ]
            }
        ],
        "classification": "regular",
        "v3": "pensato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "permettersi",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "subtext": "permettersi un appartamento",
        "transcription": "perˈmettersi",
        "definitions": [
            {
                "text": "Avere abbastanza soldi.",
                "examples": [
                    "Non possono permettersi."
                ]
            }
        ],
        "classification": "regular",
        "v3": "permesso",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "piacere",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "mi piace viaggiare",
        "transcription": "pjaˈtʃere",
        "definitions": [
            {
                "text": "Trovare qualcosa di piacevole.",
                "examples": [
                    "Mi piace il mio lavoro."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "piaciuto",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "piangere",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "il bambino piange",
        "transcription": "ˈpjandʒere",
        "definitions": [
            {
                "text": "Produrre lacrime.",
                "examples": [
                    "Non piangere."
                ]
            }
        ],
        "classification": "regular",
        "v3": "pianto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "pianificare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "subtext": "pianificare un viaggio",
        "transcription": "pjanifiˈkare",
        "definitions": [
            {
                "text": "Decidere cosa farai.",
                "examples": [
                    "Stiamo pianificando."
                ]
            }
        ],
        "classification": "regular",
        "v3": "pianificato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "portare",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🎁",
        "subtext": "portare il pranzo",
        "transcription": "porˈtare",
        "definitions": [
            {
                "text": "Trasportare.",
                "examples": [
                    "Porta il tuo documento."
                ]
            }
        ],
        "classification": "regular",
        "v3": "portato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "potere",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💪",
        "subtext": "posso aiutarti?",
        "transcription": "poˈtere",
        "definitions": [
            {
                "text": "Avere capacità.",
                "examples": [
                    "Lei può parlare tre lingue."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "potuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "preferire",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "preferire il tè",
        "transcription": "prefeˈriːre",
        "definitions": [
            {
                "text": "Scegliere tra due.",
                "examples": [
                    "Preferisco il tè."
                ]
            }
        ],
        "classification": "regular",
        "v3": "preferito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "prendere",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "prendere l autobus",
        "transcription": "ˈprɛndere",
        "definitions": [
            {
                "text": "Tenere o usare.",
                "examples": [
                    "Prendo l autobus."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "preso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "prendere in prestito",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📥",
        "subtext": "prendere in prestito la penna",
        "transcription": "ˈprɛndere in ˈprɛstito",
        "definitions": [
            {
                "text": "Prendere e restituire.",
                "examples": [
                    "Posso prendere in prestito?"
                ]
            }
        ],
        "classification": "irregular",
        "v3": "preso in prestito",
        "group": "locution",
        "auxiliary": "avere"
    },
    {
        "word": "prenotare",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "subtext": "prenotare l hotel",
        "transcription": "prenoˈtare",
        "definitions": [
            {
                "text": "Riservare in anticipo.",
                "examples": [
                    "Prenoto gli hotel online."
                ]
            }
        ],
        "classification": "regular",
        "v3": "prenotato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "preoccuparsi",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "subtext": "non preoccuparti",
        "transcription": "preokkuˈparsi",
        "definitions": [
            {
                "text": "Pensare a problemi.",
                "examples": [
                    "Non preoccuparti, andrà bene."
                ]
            }
        ],
        "classification": "regular",
        "v3": "preoccupato",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "preparare",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🥘",
        "subtext": "preparare la cena",
        "transcription": "prepaˈraːre",
        "definitions": [
            {
                "text": "Apprestare qualcosa.",
                "examples": [
                    "Lui prepara la cena."
                ]
            }
        ],
        "classification": "regular",
        "v3": "preparato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "presentare",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "presentarsi all inizio",
        "transcription": "prezenˈtare",
        "definitions": [
            {
                "text": "Presentare a qualcuno.",
                "examples": [
                    "Si è presentata."
                ]
            }
        ],
        "classification": "regular",
        "v3": "presentato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "prestare",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📤",
        "subtext": "prestare dei soldi",
        "transcription": "presˈtaːre",
        "definitions": [
            {
                "text": "Dare temporaneamente.",
                "examples": [
                    "Posso prestarti soldi."
                ]
            }
        ],
        "classification": "regular",
        "v3": "prestato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "provare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "provare sodo",
        "transcription": "proˈvaːre",
        "definitions": [
            {
                "text": "Tentare.",
                "examples": [
                    "Provo a fare il meglio."
                ]
            }
        ],
        "classification": "regular",
        "v3": "provato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "pulire",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "pulire la cucina",
        "transcription": "puˈliːre",
        "definitions": [
            {
                "text": "Rimuovere lo sporco.",
                "examples": [
                    "Pulisco il sabato."
                ]
            }
        ],
        "classification": "regular",
        "v3": "pulito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "restare",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "restare in un hotel",
        "transcription": "resˈtaːre",
        "definitions": [
            {
                "text": "Continuare a essere.",
                "examples": [
                    "Resto a casa."
                ]
            }
        ],
        "classification": "regular",
        "v3": "restato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "ricevere",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "ricevere un regalo",
        "transcription": "riˈtʃeːvere",
        "definitions": [
            {
                "text": "Ottenere da qualcuno.",
                "examples": [
                    "Ricevo molta posta."
                ]
            }
        ],
        "classification": "regular",
        "v3": "ricevuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "ricordare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "ricordare la scadenza",
        "transcription": "rikorˈdare",
        "definitions": [
            {
                "text": "Non dimenticare.",
                "examples": [
                    "Per favore ricorda."
                ]
            }
        ],
        "classification": "regular",
        "v3": "ricordato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "ridere",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😂",
        "subtext": "ridere di una battuta",
        "transcription": "ˈriːdere",
        "definitions": [
            {
                "text": "Fare suoni con la voce.",
                "examples": [
                    "Ridevano della sua battuta."
                ]
            }
        ],
        "classification": "regular",
        "v3": "riso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "rilassarsi",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "rilassarsi a casa",
        "transcription": "rilasˈsarsi",
        "definitions": [
            {
                "text": "Riposare.",
                "examples": [
                    "Mi rilasso nel fine settimana."
                ]
            }
        ],
        "classification": "regular",
        "v3": "rilassato",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "rimbalzare",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏀",
        "subtext": "la palla rimbalza",
        "transcription": "rimbalˈtsaːre",
        "definitions": [
            {
                "text": "Muoversi lontano dopo un colpo.",
                "examples": [
                    "La palla rimbalza."
                ]
            }
        ],
        "classification": "regular",
        "v3": "rimbalzato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "riparare",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "riparare il telefono",
        "transcription": "ripaˈraːre",
        "definitions": [
            {
                "text": "Aggiustare.",
                "examples": [
                    "Puoi riparare il telefono?"
                ]
            }
        ],
        "classification": "regular",
        "v3": "riparato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "ripetere",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "ripetere due volte",
        "transcription": "riˈpɛːtere",
        "definitions": [
            {
                "text": "Dire di nuovo.",
                "examples": [
                    "Per favore ripeti quello."
                ]
            }
        ],
        "classification": "regular",
        "v3": "ripetuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "riposare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "subtext": "riposare dopo il lavoro",
        "transcription": "ripoˈzaːre",
        "definitions": [
            {
                "text": "Smettere di lavorare.",
                "examples": [
                    "Riposa per un ora."
                ]
            }
        ],
        "classification": "regular",
        "v3": "riposato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "risparmiare",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "risparmiare cento euro",
        "transcription": "risparˈmjaːre",
        "definitions": [
            {
                "text": "Tenere invece di spendere.",
                "examples": [
                    "Risparmia ogni mese."
                ]
            }
        ],
        "classification": "regular",
        "v3": "risparmiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "rispondere",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "rispondere al telefono",
        "transcription": "risˈpondere",
        "definitions": [
            {
                "text": "Rispondere a una domanda.",
                "examples": [
                    "Risponde a tutte le email."
                ]
            }
        ],
        "classification": "regular",
        "v3": "risposto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "rompere",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "rompere il vetro",
        "transcription": "ˈrompere",
        "definitions": [
            {
                "text": "Separare in pezzi.",
                "examples": [
                    "Si è rotto la gamba."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "rotto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "saltare",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "saltare in alto",
        "transcription": "salˈtare",
        "definitions": [
            {
                "text": "Spingersi lontano dal suolo.",
                "examples": [
                    "Il gatto è saltato."
                ]
            }
        ],
        "classification": "regular",
        "v3": "saltato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "saltellare",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🐇",
        "subtext": "saltellare come un coniglio",
        "transcription": "saltelˈlare",
        "definitions": [
            {
                "text": "Saltare su un piede.",
                "examples": [
                    "Puoi saltellare?"
                ]
            }
        ],
        "classification": "regular",
        "v3": "saltellato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "salutare",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👋",
        "subtext": "salutare con la mano",
        "transcription": "saluˈtare",
        "definitions": [
            {
                "text": "Dire ciao.",
                "examples": [
                    "Saluta il tuo amico."
                ]
            }
        ],
        "classification": "regular",
        "v3": "salutato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sapere",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "sapere come fare",
        "transcription": "saˈpeːre",
        "definitions": [
            {
                "text": "Avere informazioni.",
                "examples": [
                    "Conosco il suo nome."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "saputo",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "scegliere",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "scegliere con cura",
        "transcription": "ˈʃeʎʎere",
        "definitions": [
            {
                "text": "Selezionare.",
                "examples": [
                    "Ha scelto di lavorare."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "scelto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "scrivere",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "scrivere un email",
        "transcription": "ˈskrivere",
        "definitions": [
            {
                "text": "Segni su carta.",
                "examples": [
                    "Scrivo email tutto il giorno."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "scritto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "sdraiarsi",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "subtext": "sdraiarsi sulla spiaggia",
        "transcription": "zdraˈjarsi",
        "definitions": [
            {
                "text": "Posizione orizzontale.",
                "examples": [
                    "Mi piace sdraiarmi."
                ]
            }
        ],
        "classification": "regular",
        "v3": "sdraiato",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "sedersi",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "sedersi in ufficio",
        "transcription": "seˈdersi",
        "definitions": [
            {
                "text": "Prendere posto.",
                "examples": [
                    "Per favore siediti."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "seduto",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "segnare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "✅",
        "subtext": "segnare la risposta",
        "transcription": "seˈɲɲaːre",
        "definitions": [
            {
                "text": "Mettere un segno.",
                "examples": [
                    "Segna la risposta corretta."
                ]
            }
        ],
        "classification": "regular",
        "v3": "segnato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "seguire",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "seguire attentamente",
        "transcription": "seˈɡwire",
        "definitions": [
            {
                "text": "Venire dopo o obbedire.",
                "examples": [
                    "Segui le istruzioni."
                ]
            }
        ],
        "classification": "regular",
        "v3": "seguito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "sembrare",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🎭",
        "subtext": "sembrare felice",
        "transcription": "semˈbraːre",
        "definitions": [
            {
                "text": "Apparire.",
                "examples": [
                    "Sembra molto sicura."
                ]
            }
        ],
        "classification": "regular",
        "v3": "sembrato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "sentire",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "sentirsi stanco",
        "transcription": "senˈtire",
        "definitions": [
            {
                "text": "Provare sensazione.",
                "examples": [
                    "Mi sento stanco."
                ]
            }
        ],
        "classification": "regular",
        "v3": "sentito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "significare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "voler dire",
        "transcription": "siɲɲifiˈkaːre",
        "definitions": [
            {
                "text": "Avere significato.",
                "examples": [
                    "Cosa significa questa clausola?"
                ]
            }
        ],
        "classification": "regular",
        "v3": "significato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sognare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💭",
        "subtext": "sognare di viaggiare",
        "transcription": "soɲˈɲaːre",
        "definitions": [
            {
                "text": "Immagini nel sonno.",
                "examples": [
                    "Ho sognato una vacanza."
                ]
            }
        ],
        "classification": "regular",
        "v3": "sognato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sorridere",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "sorridere per la macchina",
        "transcription": "sorˈridere",
        "definitions": [
            {
                "text": "Espressione felice.",
                "examples": [
                    "Ha un bel sorriso."
                ]
            }
        ],
        "classification": "regular",
        "v3": "sorriso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "spazzolare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪥",
        "subtext": "spazzolare i denti",
        "transcription": "spattsolˈlaːre",
        "definitions": [
            {
                "text": "Pulire con spazzola.",
                "examples": [
                    "Mi spazzolo i denti."
                ]
            }
        ],
        "classification": "regular",
        "v3": "spazzolato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "spendere",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "spendere troppo",
        "transcription": "ˈspɛndere",
        "definitions": [
            {
                "text": "Usare denaro.",
                "examples": [
                    "Lui spende troppo."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "speso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "sperare",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "sperare di sì",
        "transcription": "speˈraːre",
        "definitions": [
            {
                "text": "Desiderare che succeda qualcosa.",
                "examples": [
                    "Spero di ottenere una promozione."
                ]
            }
        ],
        "classification": "regular",
        "v3": "sperato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "spiegare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💡",
        "subtext": "spiegare il processo",
        "transcription": "spjeˈɡaːre",
        "definitions": [
            {
                "text": "Rendere chiaro.",
                "examples": [
                    "Spiega il processo."
                ]
            }
        ],
        "classification": "regular",
        "v3": "spiegato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "spingere",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "spingere il carrello",
        "transcription": "ˈspindʒere",
        "definitions": [
            {
                "text": "Spostare lontano.",
                "examples": [
                    "Premi il pulsante."
                ]
            }
        ],
        "classification": "regular",
        "v3": "spinto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "stare in piedi",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "stare in piedi vicino alla porta",
        "transcription": "ˈstaːre in ˈpjɛːdi",
        "definitions": [
            {
                "text": "Posizione eretta.",
                "examples": [
                    "Lei sta in piedi."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "stato in piedi",
        "group": "locution",
        "auxiliary": "essere"
    },
    {
        "word": "studiare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "studiare per un esame",
        "transcription": "stuˈdjare",
        "definitions": [
            {
                "text": "Imparare un argomento.",
                "examples": [
                    "Studio l inglese."
                ]
            }
        ],
        "classification": "regular",
        "v3": "studiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "succedere",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "cos è successo?",
        "transcription": "sutˈtʃɛdere",
        "definitions": [
            {
                "text": "Accadere.",
                "examples": [
                    "Cos è successo?"
                ]
            }
        ],
        "classification": "regular",
        "v3": "successo",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "suonare",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🔔",
        "subtext": "suonare la chitarra",
        "transcription": "swoˈnaːre",
        "definitions": [
            {
                "text": "Emettere un suono.",
                "examples": [
                    "Il telefono suona."
                ]
            }
        ],
        "classification": "regular",
        "v3": "suonato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sussurrare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🤫",
        "subtext": "sussurrare la risposta",
        "transcription": "sussurˈraːre",
        "definitions": [
            {
                "text": "Parlare molto piano.",
                "examples": [
                    "Mi ha sussurrato la risposta."
                ]
            }
        ],
        "classification": "regular",
        "v3": "sussurrato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "svegliarsi",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "subtext": "svegliarsi stanco",
        "transcription": "zveʎˈʎarsi",
        "definitions": [
            {
                "text": "Smettere di dormire.",
                "examples": [
                    "Mi sveglio alle sette."
                ]
            }
        ],
        "classification": "regular",
        "v3": "svegliato",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "tagliare",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "tagliare il pane",
        "transcription": "taʎˈʎaːre",
        "definitions": [
            {
                "text": "Dividere con affilato.",
                "examples": [
                    "Lei taglia il pane."
                ]
            }
        ],
        "classification": "regular",
        "v3": "tagliato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "tenere",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "tenere la ricevuta",
        "transcription": "teˈneːre",
        "definitions": [
            {
                "text": "Continuare ad avere.",
                "examples": [
                    "Tieni la ricevuta."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "tenuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "tirare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "tirare la porta",
        "transcription": "tiˈraːre",
        "definitions": [
            {
                "text": "Spostare verso di sé.",
                "examples": [
                    "Tira la porta."
                ]
            }
        ],
        "classification": "regular",
        "v3": "tirato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "toccare",
        "level": "starter",
        "theme": "five_senses_A1",
        "emoji": "🫫",
        "subtext": "toccare la vernice",
        "transcription": "tokˈkare",
        "definitions": [
            {
                "text": "Mettere la mano.",
                "examples": [
                    "Non toccare!"
                ]
            }
        ],
        "classification": "regular",
        "v3": "toccato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "tornare",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "tornare da un viaggio",
        "transcription": "torˈnare",
        "definitions": [
            {
                "text": "Venire o tornare.",
                "examples": [
                    "Lui torna venerdì."
                ]
            }
        ],
        "classification": "regular",
        "v3": "tornato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "trasportare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "trasportare borse",
        "transcription": "trasporˈtaːre",
        "definitions": [
            {
                "text": "Spostare da un posto all altro.",
                "examples": [
                    "Porto la mia borsa."
                ]
            }
        ],
        "classification": "regular",
        "v3": "trasportato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "trovare",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "trovare le chiavi",
        "transcription": "troˈvare",
        "definitions": [
            {
                "text": "Scoprire.",
                "examples": [
                    "Lei ha trovato un lavoro."
                ]
            }
        ],
        "classification": "regular",
        "v3": "trovato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "udire",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "udire un rumore",
        "transcription": "uˈdiːre",
        "definitions": [
            {
                "text": "Percepire il suono.",
                "examples": [
                    "Odo l allarme ogni mattina."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "udito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "usare",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🛠️",
        "subtext": "usare il computer",
        "transcription": "uˈzare",
        "definitions": [
            {
                "text": "Impiegare qualcosa per uno scopo.",
                "examples": [
                    "Uso il mio telefono per tutto."
                ]
            }
        ],
        "classification": "regular",
        "v3": "usato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "uscire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "uscire dall ufficio",
        "transcription": "uʃˈʃire",
        "definitions": [
            {
                "text": "Andare fuori.",
                "examples": [
                    "Esco alle sei."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "uscito",
        "group": "ire",
        "auxiliary": "essere"
    },
    {
        "word": "vedere",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "vedere gli amici",
        "transcription": "veˈdere",
        "definitions": [
            {
                "text": "Percepire con gli occhi.",
                "examples": [
                    "Vedo il mio dottore domani."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "visto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "vendere",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "vendere frutta",
        "transcription": "ˈvendere",
        "definitions": [
            {
                "text": "Dare in cambio di denaro.",
                "examples": [
                    "Vendono frutta."
                ]
            }
        ],
        "classification": "regular",
        "v3": "venduto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "venire",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "venire a casa",
        "transcription": "veˈnire",
        "definitions": [
            {
                "text": "Spostarsi verso.",
                "examples": [
                    "Lui viene alle nove."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "venuto",
        "group": "ire",
        "auxiliary": "essere"
    },
    {
        "word": "viaggiare",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "viaggiare all estero",
        "transcription": "vjadˈdʒaːre",
        "definitions": [
            {
                "text": "Andare da un posto all altro.",
                "examples": [
                    "Lui ama viaggiare."
                ]
            }
        ],
        "classification": "regular",
        "v3": "viaggiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "vincere",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "vincere un premio",
        "transcription": "ˈvintʃere",
        "definitions": [
            {
                "text": "Essere il migliore.",
                "examples": [
                    "Vogliamo vincere."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "vinto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "visitare",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "subtext": "visitare i genitori",
        "transcription": "viziˈtaːre",
        "definitions": [
            {
                "text": "Andare a vedere.",
                "examples": [
                    "Visita i genitori."
                ]
            }
        ],
        "classification": "regular",
        "v3": "visitato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "vivere",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "vivere da soli",
        "transcription": "ˈviːvere",
        "definitions": [
            {
                "text": "Avere la propria casa in un luogo.",
                "examples": [
                    "Lei vive in un appartamento."
                ]
            }
        ],
        "classification": "regular",
        "v3": "vissuto",
        "group": "ere",
        "auxiliary": "avere",
        "opposite": "morire"
    },
    {
        "word": "volare",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "volare a Parigi",
        "transcription": "voˈlare",
        "definitions": [
            {
                "text": "Viaggiare in aereo.",
                "examples": [
                    "Lei vola a Parigi."
                ]
            }
        ],
        "classification": "regular",
        "v3": "volato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "volere",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🙏",
        "subtext": "voglio un caffè",
        "transcription": "voˈlere",
        "definitions": [
            {
                "text": "Desiderare o augurarsi qualcosa.",
                "examples": [
                    "Voglio un caffè."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "voluto",
        "group": "ere",
        "auxiliary": "avere"
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();