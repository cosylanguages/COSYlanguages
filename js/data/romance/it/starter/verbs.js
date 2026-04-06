(function() {
    const data = [
    {
        "word": "abitare",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏢",
        "subtext": "abitare a Roma / abitare in via...",
        "transcription": "abiˈtare",
        "definitions": [
            {
                "text": "Vivere in un determinato luogo.",
                "examples": [
                    "Abito a Milano da due anni.",
                    "Dove abiti?"
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
        "subtext": "addebitare sul conto",
        "transcription": "addebiˈtare",
        "definitions": [
            {
                "text": "Chiedere una somma di denaro per un servizio.",
                "examples": [
                    "Il meccanico ha addebitato trecento euro."
                ]
            }
        ],
        "classification": "regular",
        "v3": "addebitato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "alzarsi",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "subtext": "alzarsi presto",
        "transcription": "alˈtsarsi",
        "definitions": [
            {
                "text": "Alzarsi dal letto dopo essersi svegliati.",
                "examples": [
                    "Si alza alle sette e fa subito il caffè."
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
        "subtext": "amare qualcuno / amare fare qualcosa",
        "transcription": "aˈmare",
        "definitions": [
            {
                "text": "Avere un forte affetto per; godere grandemente.",
                "examples": [
                    "Lei ama il suo lavoro.",
                    "Lui ama viaggiare."
                ]
            }
        ],
        "classification": "regular",
        "v3": "amato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "andare a letto",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "subtext": "andare a letto tardi",
        "transcription": "anˈdaːre a ˈlɛtto",
        "definitions": [
            {
                "text": "Mettersi a letto per dormire.",
                "examples": [
                    "Vanno a letto alle undici ogni sera."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "andato a letto",
        "group": "locution",
        "auxiliary": "essere"
    },
    {
        "word": "arrivare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "arrivare in ufficio / arrivare in tempo",
        "transcription": "arriˈvare",
        "definitions": [
            {
                "text": "Raggiungere una destinazione.",
                "examples": [
                    "Lui arriva in ufficio alle nove.",
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
        "word": "aspettare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "aspettare l autobus",
        "transcription": "aspeˈttare",
        "definitions": [
            {
                "text": "Stare in un posto finché non succede qualcosa.",
                "examples": [
                    "Aspetta l autobus qui.",
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
        "word": "avere",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "avere un appuntamento",
        "transcription": "aˈvere",
        "definitions": [
            {
                "text": "Possedere qualcosa; provare qualcosa.",
                "examples": [
                    "Ho un lavoro.",
                    "Lei ha mal di testa."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "avuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "avere bisogno di",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "avere bisogno di qualcosa",
        "transcription": "aˈveːre biˈzoɲɲo di",
        "definitions": [
            {
                "text": "Richiedere qualcosa.",
                "examples": [
                    "Ho bisogno di una pausa.",
                    "Lei ha bisogno di più tempo."
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
        "subtext": "ballare il tango",
        "transcription": "balˈlare",
        "definitions": [
            {
                "text": "Muovere il corpo a tempo di musica.",
                "examples": [
                    "Amo ballare.",
                    "Stanno ballando."
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
        "subtext": "barrare la casella",
        "transcription": "barˈraːre",
        "definitions": [
            {
                "text": "Mettere un segno (X) accanto a qualcosa per mostrare che è sbagliato.",
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
        "subtext": "bere acqua",
        "transcription": "ˈbere",
        "definitions": [
            {
                "text": "Ingoiare del liquido.",
                "examples": [
                    "Lei beve caffè ogni mattina.",
                    "Bevo acqua al lavoro."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "bevuto",
        "group": "ere",
        "auxiliary": "avere"
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
                "text": "Colpire qualcosa con il piede.",
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
        "subtext": "cambiare i vestiti / cambiare idea",
        "transcription": "kamˈbjaːre",
        "definitions": [
            {
                "text": "Rendere qualcosa diverso.",
                "examples": [
                    "Voglio cambiare i miei vestiti.",
                    "Il tempo cambia velocemente."
                ]
            }
        ],
        "classification": "regular",
        "v3": "cambiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "cantare",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "cantare una canzone",
        "transcription": "kanˈtare",
        "definitions": [
            {
                "text": "Fare suoni musicali con la voce.",
                "examples": [
                    "Mi piace cantare sotto la doccia.",
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
        "subtext": "capire un problema / capire qualcuno",
        "transcription": "kaˈpire",
        "definitions": [
            {
                "text": "Afferrare il significato di qualcosa.",
                "examples": [
                    "Capisco il contratto.",
                    "Lei capisce il francese."
                ]
            }
        ],
        "classification": "regular",
        "v3": "capito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "chiamare",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📞",
        "subtext": "chiamare qualcuno / chiamare al telefono",
        "transcription": "kjaˈmare",
        "definitions": [
            {
                "text": "Telefonare a qualcuno.",
                "examples": [
                    "Chiamo i miei clienti ogni mattina.",
                    "Mi chiami più tardi?"
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
        "subtext": "chiedere aiuto / chiedere di",
        "transcription": "ˈkjedere",
        "definitions": [
            {
                "text": "Porre una domanda a qualcuno; richiedere qualcosa.",
                "examples": [
                    "Lei fa molte domande.",
                    "Chiedo consiglio al mio capo."
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
        "subtext": "colorare un disegno",
        "transcription": "koloˈraːre",
        "definitions": [
            {
                "text": "Usare una penna o una matita per mettere il colore su un'immagine.",
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
        "subtext": "combattere contro",
        "transcription": "komˈbattere",
        "definitions": [
            {
                "text": "Usare la forza fisica per cercare di ferire qualcuno o vincere qualcosa.",
                "examples": [
                    "I due ragazzi stanno combattendo."
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
        "subtext": "cominciare a lavorare",
        "transcription": "kominˈtʃaːre",
        "definitions": [
            {
                "text": "Iniziare a fare qualcosa.",
                "examples": [
                    "Cominciamo la riunione alle nove."
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
                "text": "Dire o scrivere le lettere di una parola nell'ordine corretto.",
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
        "subtext": "comprare il giornale",
        "transcription": "komˈprare",
        "definitions": [
            {
                "text": "Ottenere qualcosa pagando denaro.",
                "examples": [
                    "Lei compra la spesa online.",
                    "Lui vuole comprare un appartamento."
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
        "subtext": "condividere un pasto",
        "transcription": "kondiˈviːdere",
        "definitions": [
            {
                "text": "Dare una parte di qualcosa ad altri.",
                "examples": [
                    "Condividiamo la pizza.",
                    "Condivido la stanza con mio fratello."
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
        "subtext": "conoscere gente nuova",
        "transcription": "koˈnoʃʃere",
        "definitions": [
            {
                "text": "Avere familiarità con una persona, un luogo o una cosa.",
                "examples": [
                    "Conosco bene questa città.",
                    "Piacere di conoscerti!"
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
        "subtext": "consigliare un ristorante",
        "transcription": "konsiʎˈʎaːre",
        "definitions": [
            {
                "text": "Suggerire qualcosa come buono o adatto.",
                "examples": [
                    "Puoi consigliare un buon ristorante vicino all ufficio?"
                ]
            }
        ],
        "classification": "regular",
        "v3": "consigliato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "continuare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "continuare a leggere",
        "transcription": "kontiˈnwaːre",
        "definitions": [
            {
                "text": "Continuare a fare qualcosa senza fermarsi.",
                "examples": [
                    "Ha continuato a lavorare dopo le sei."
                ]
            }
        ],
        "classification": "regular",
        "v3": "continuato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "correre",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "correre veloce",
        "transcription": "ˈkorrere",
        "definitions": [
            {
                "text": "Muoversi molto velocemente sulle gambe.",
                "examples": [
                    "Corro nel parco.",
                    "Lui corre per prendere l autobus."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "corso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "credere",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🙏",
        "subtext": "credere alle favole",
        "transcription": "ˈkreːdere",
        "definitions": [
            {
                "text": "Pensare che qualcosa sia vero.",
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
        "word": "cucinare",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cucinare la cena",
        "transcription": "kutʃiˈnaːre",
        "definitions": [
            {
                "text": "Preparare il cibo usando il calore.",
                "examples": [
                    "Lei cucina la cena ogni sera.",
                    "Lui cucina per la squadra."
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
        "subtext": "dare un bacio / dare una mano",
        "transcription": "ˈdare",
        "definitions": [
            {
                "text": "Consegnare o trasferire qualcosa a qualcuno.",
                "examples": [
                    "Lui mi dà un sacco di lavoro.",
                    "Lei dà consigli."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "dato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "dipingere",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "emoji": "🎨",
        "subtext": "dipingere un quadro",
        "transcription": "diˈpindʒere",
        "definitions": [
            {
                "text": "Fare un'immagine usando la pittura.",
                "examples": [
                    "Mi piace dipingere fiori."
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
        "subtext": "dire la verità / dire a qualcuno",
        "transcription": "ˈdire",
        "definitions": [
            {
                "text": "Dare informazioni a qualcuno.",
                "examples": [
                    "Dice la verità.",
                    "Lei mi racconta della sua giornata."
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
        "subtext": "disegnare un volto / disegnare una linea",
        "transcription": "dizeɲˈɲaːre",
        "definitions": [
            {
                "text": "Fare un immagine con una penna o una matita.",
                "examples": [
                    "Mi piace disegnare uccelli.",
                    "Puoi disegnare una mappa?"
                ]
            }
        ],
        "classification": "regular",
        "v3": "disegnato",
        "group": "are",
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
                "text": "Essere obbligato a fare qualcosa; essere tenuti a pagare.",
                "examples": [
                    "Deve alla banca cinquantamila euro.",
                    "Devo andare adesso."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "dovuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "essere",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👤",
        "subtext": "essere felice",
        "transcription": "ˈɛssere",
        "definitions": [
            {
                "text": "Esistere; avere una qualità o uno stato.",
                "examples": [
                    "Sono stanco.",
                    "Lei è un medico.",
                    "Siamo in ritardo."
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
        "subtext": "mi fa male la testa",
        "transcription": "ˈfar ˈmaːle",
        "definitions": [
            {
                "text": "Causare dolore; o sentire dolore.",
                "examples": [
                    "Mi fa male la schiena dopo essere stato seduto tutto il giorno."
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
        "subtext": "fare colazione / fare sport",
        "transcription": "ˈfare",
        "definitions": [
            {
                "text": "Creare o produrre qualcosa; compiere un azione.",
                "examples": [
                    "Faccio il caffè al mattino.",
                    "Lei fa la spesa."
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
        "subtext": "fare colazione al bar",
        "transcription": "ˈfaːre kolaˈttsjoːne",
        "definitions": [
            {
                "text": "Fare il pasto del mattino.",
                "examples": [
                    "Fa sempre colazione prima di uscire di casa."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "fatto colazione",
        "group": "locution",
        "auxiliary": "avere"
    },
    {
        "word": "fermare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "fermare la macchina",
        "transcription": "ferˈmaːre",
        "definitions": [
            {
                "text": "Finire di fare qualcosa o non muoversi più.",
                "examples": [
                    "Ferma la macchina.",
                    "Per favore smetti di parlare."
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
        "subtext": "festeggiare il compleanno",
        "transcription": "festedˈdʒare",
        "definitions": [
            {
                "text": "Fare qualcosa di piacevole per un occasione speciale.",
                "examples": [
                    "Festeggiano ogni anniversario di lavoro insieme."
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
        "subtext": "finire il lavoro",
        "transcription": "fiˈnire",
        "definitions": [
            {
                "text": "Completare qualcosa; giungere al termine.",
                "examples": [
                    "Lui finisce il lavoro alle cinque.",
                    "Lei finisce il rapporto."
                ]
            }
        ],
        "classification": "regular",
        "v3": "finito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "girare",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "girare a sinistra",
        "transcription": "dʒiˈraːre",
        "definitions": [
            {
                "text": "Muoversi in una direzione; cambiare stato.",
                "examples": [
                    "Gira a sinistra all ufficio.",
                    "Lei spegne la luce."
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
        "subtext": "godere di / godere della vista",
        "transcription": "ɡoˈdeːre",
        "definitions": [
            {
                "text": "Trarre piacere da qualcosa.",
                "examples": [
                    "Gode di lavorare da casa.",
                    "Lei gode del suo nuovo ruolo."
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
                "text": "Dire qualcosa a voce molto alta.",
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
        "subtext": "guadagnare bene",
        "transcription": "ɡwadaɲˈɲare",
        "definitions": [
            {
                "text": "Ricevere denaro per il lavoro svolto.",
                "examples": [
                    "Guadagna un buon stipendio come project manager."
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
        "subtext": "guardare la televisione",
        "transcription": "ɡwarˈdare",
        "definitions": [
            {
                "text": "Dirigere gli occhi verso qualcosa.",
                "examples": [
                    "Guarda questa foto.",
                    "Lui sta cercando le sue chiavi."
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
        "subtext": "guarire presto",
        "transcription": "ɡwaˈriːre",
        "definitions": [
            {
                "text": "Tornare in buona salute dopo una malattia o un infortunio.",
                "examples": [
                    "Sta guarendo da un infortunio alla schiena."
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
        "subtext": "guidare con prudenza",
        "transcription": "ɡwiˈdare",
        "definitions": [
            {
                "text": "Azionare un veicolo.",
                "examples": [
                    "Lei guida verso il lavoro.",
                    "Lui guida un auto aziendale."
                ]
            }
        ],
        "classification": "regular",
        "v3": "guidato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "indicare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "☝️",
        "subtext": "indicare la direzione",
        "transcription": "indiˈkaːre",
        "definitions": [
            {
                "text": "Mostrare qualcosa tenendo il dito verso di esso.",
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
        "subtext": "indossare la giacca",
        "transcription": "indosˈsaːre",
        "definitions": [
            {
                "text": "Avere vestiti o accessori sul corpo.",
                "examples": [
                    "Lei indossa un completo per il lavoro.",
                    "Lui indossa gli occhiali."
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
        "subtext": "iniziare a studiare",
        "transcription": "initˈtsjare",
        "definitions": [
            {
                "text": "Iniziare a fare qualcosa.",
                "examples": [
                    "Inizio a lavorare alle otto e mezza.",
                    "Lei inizia un nuovo lavoro."
                ]
            }
        ],
        "classification": "regular",
        "v3": "iniziato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "invitare",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "subtext": "invitare a cena",
        "transcription": "inviˈtaːre",
        "definitions": [
            {
                "text": "Chiedere a qualcuno di venire in un posto o a un evento.",
                "examples": [
                    "Invito gli amici a cena."
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
                "text": "Far muovere qualcosa nell'aria spingendolo dalla mano.",
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
        "subtext": "lavare i piatti",
        "transcription": "laˈvaːre",
        "definitions": [
            {
                "text": "Pulire qualcosa con l acqua.",
                "examples": [
                    "Lava la sua macchina ogni domenica.",
                    "Lavati le mani."
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
        "subtext": "lavorare in ufficio / lavorare sodo",
        "transcription": "lavoˈrare",
        "definitions": [
            {
                "text": "Svolgere compiti per guadagnare denaro.",
                "examples": [
                    "Lavora da casa tre giorni a settimana.",
                    "Lei lavora sodo."
                ]
            }
        ],
        "classification": "regular",
        "v3": "lavorato",
        "group": "are",
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
                "text": "Inviare un messaggio da un telefono cellulare.",
                "examples": [
                    "Mandami un SMS quando arrivi."
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
        "subtext": "mangiare sano",
        "transcription": "manˈdʒare",
        "definitions": [
            {
                "text": "Mettere cibo in bocca e consumarlo.",
                "examples": [
                    "Mangiamo il pranzo all una.",
                    "Lei mangia alla sua scrivania."
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
        "subtext": "mettere in ordine",
        "transcription": "ˈmettere",
        "definitions": [
            {
                "text": "Mettere qualcosa in una posizione.",
                "examples": [
                    "Metti la borsa qui.",
                    "Lei mette i soldi in banca."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "messo",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "mostrare",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "mostrare a qualcuno / mostrare come",
        "transcription": "mosˈtrare",
        "definitions": [
            {
                "text": "Lasciare che qualcuno veda qualcosa; spiegare.",
                "examples": [
                    "Lei mi mostra la mappa.",
                    "Lui mostra il suo lavoro."
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
        "subtext": "muovere i primi passi",
        "transcription": "ˈmwɔːvere",
        "definitions": [
            {
                "text": "Cambiare posizione; spostare.",
                "examples": [
                    "Si sono mossi velocemente.",
                    "Lei si sposta in un team diverso."
                ]
            }
        ],
        "classification": "regular",
        "v3": "mosso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "notare",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👀",
        "subtext": "notare i dettagli",
        "transcription": "noˈtaːre",
        "definitions": [
            {
                "text": "Vedere o diventare consapevoli di qualcosa.",
                "examples": [
                    "Hai notato il nuovo ufficio?"
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
        "subtext": "nuotare in mare / nuotare in piscina",
        "transcription": "nwoˈtaːre",
        "definitions": [
            {
                "text": "Muoversi attraverso l acqua usando braccia e gambe.",
                "examples": [
                    "Nuoto ogni mattina.",
                    "Sai nuotare?"
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
        "subtext": "odiare fare / odiare qualcuno",
        "transcription": "oˈdjaːre",
        "definitions": [
            {
                "text": "Fortemente non gradire.",
                "examples": [
                    "Odia fare il pendolare in autobus.",
                    "Lei odia le lunghe riunioni."
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
        "subtext": "odorare un fiore",
        "transcription": "odoˈraːre",
        "definitions": [
            {
                "text": "Notare o riconoscere qualcosa con il naso.",
                "examples": [
                    "Sento l'odore del caffè.",
                    "Odora questo profumo."
                ]
            }
        ],
        "classification": "regular",
        "v3": "odorato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "ottenere",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "ottenere risultati",
        "transcription": "otteˈnere",
        "definitions": [
            {
                "text": "Ricevere, ottenere o diventare.",
                "examples": [
                    "Ottengo un buon stipendio.",
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
        "word": "partecipare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "subtext": "partecipare a una riunione",
        "transcription": "partetʃiˈpare",
        "definitions": [
            {
                "text": "Andare a un evento o a una riunione.",
                "examples": [
                    "Partecipo a una riunione di direzione ogni lunedì."
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
        "subtext": "partire per le vacanze",
        "transcription": "parˈtire",
        "definitions": [
            {
                "text": "Allontanarsi da un luogo.",
                "examples": [
                    "Parto da casa alle otto.",
                    "Lei è partita l anno scorso."
                ]
            }
        ],
        "classification": "regular",
        "v3": "partito",
        "group": "ire",
        "auxiliary": "essere"
    },
    {
        "word": "piacere",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "mi piace il lavoro / mi piace l idea",
        "transcription": "pjaˈtʃere",
        "definitions": [
            {
                "text": "Trovare qualcosa di piacevole.",
                "examples": [
                    "Mi piace il mio lavoro.",
                    "A lui piace il caffè."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "piaciuto",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "pianificare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "subtext": "pianificare il futuro",
        "transcription": "pjanifiˈkare",
        "definitions": [
            {
                "text": "Decidere cosa farai.",
                "examples": [
                    "Stiamo pianificando un viaggio."
                ]
            }
        ],
        "classification": "regular",
        "v3": "pianificato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "potere",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💪",
        "subtext": "non potere venire",
        "transcription": "poˈtere",
        "definitions": [
            {
                "text": "Avere la capacità o il permesso di fare qualcosa.",
                "examples": [
                    "Posso aiutarti?",
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
        "subtext": "preferire il mare",
        "transcription": "prefeˈriːre",
        "definitions": [
            {
                "text": "Preferire una cosa a un'altra.",
                "examples": [
                    "Preferisco il tè al caffè."
                ]
            }
        ],
        "classification": "regular",
        "v3": "preferito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "preoccuparsi",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "subtext": "preoccuparsi di / preoccuparsi per",
        "transcription": "preokkuˈparsi",
        "definitions": [
            {
                "text": "Pensare a problemi o cose spiacevoli che potrebbero accadere.",
                "examples": [
                    "Non preoccuparti, andrà tutto bene."
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
        "subtext": "preparare la tavola",
        "transcription": "prepaˈraːre",
        "definitions": [
            {
                "text": "Mettere in ordine o apprestare qualcosa.",
                "examples": [
                    "Lui prepara la cena.",
                    "Prepariamo il viaggio."
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
        "subtext": "presentare un amico",
        "transcription": "prezenˈtare",
        "definitions": [
            {
                "text": "Presentare qualcuno a un altra persona.",
                "examples": [
                    "Si è presentata all inizio della riunione."
                ]
            }
        ],
        "classification": "regular",
        "v3": "presentato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "ridere",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😂",
        "subtext": "ridere di cuore",
        "transcription": "ˈriːdere",
        "definitions": [
            {
                "text": "Fare suoni con la voce perché pensi che qualcosa sia divertente.",
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
        "subtext": "rilassarsi sul divano",
        "transcription": "rilasˈsarsi",
        "definitions": [
            {
                "text": "Smettere di lavorare e riposare; diventare meno tesi.",
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
                "text": "Muoversi verso l'alto o lontano dopo aver colpito una superficie.",
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
        "word": "ripetere",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "ripetere la frase / ripetere un ordine",
        "transcription": "riˈpɛːtere",
        "definitions": [
            {
                "text": "Dire o fare qualcosa di nuovo.",
                "examples": [
                    "Per favore ripeti quello.",
                    "Ha ripetuto l istruzione due volte."
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
        "subtext": "riposare un po",
        "transcription": "ripoˈzaːre",
        "definitions": [
            {
                "text": "Smettere di lavorare e rilassarsi per recuperare energia.",
                "examples": [
                    "Riposa per un ora dopo pranzo ogni giorno."
                ]
            }
        ],
        "classification": "regular",
        "v3": "riposato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "rispondere",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "rispondere a una domanda / rispondere al telefono",
        "transcription": "risˈpondere",
        "definitions": [
            {
                "text": "Rispondere a una domanda o a una comunicazione.",
                "examples": [
                    "Risponde a tutte le email velocemente.",
                    "Lei ha risposto al telefono."
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
        "subtext": "rompere il ghiaccio",
        "transcription": "ˈrompere",
        "definitions": [
            {
                "text": "Separare qualcosa in due o più pezzi.",
                "examples": [
                    "Non rompere il vetro.",
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
        "word": "saltellare",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🐇",
        "subtext": "saltellare nel prato",
        "transcription": "saltelˈlare",
        "definitions": [
            {
                "text": "Saltare su un piede.",
                "examples": [
                    "Puoi saltellare come un coniglio?"
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
        "subtext": "salutare tutti",
        "transcription": "saluˈtare",
        "definitions": [
            {
                "text": "Muovere la mano da un lato all'altro per dire ciao o arrivederci.",
                "examples": [
                    "Saluta il tuo amico con la mano."
                ]
            }
        ],
        "classification": "regular",
        "v3": "salutato",
        "group": "are",
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
                "text": "Selezionare tra opzioni.",
                "examples": [
                    "Ha scelto di lavorare a tempo parziale."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "scelto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "sdraiarsi",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "subtext": "sdraiarsi sul divano",
        "transcription": "zdraˈjarsi",
        "definitions": [
            {
                "text": "Essere in posizione orizzontale su una superficie.",
                "examples": [
                    "Mi piace sdraiarmi sulla spiaggia."
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
        "subtext": "sedersi a un tavolo",
        "transcription": "seˈdersi",
        "definitions": [
            {
                "text": "Prendere posto su una sedia o su un altra superficie.",
                "examples": [
                    "Per favore siediti.",
                    "Mi siedo sul divano."
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
        "subtext": "segnare il punto",
        "transcription": "seˈɲɲaːre",
        "definitions": [
            {
                "text": "Mettere un segno (v) accanto a qualcosa per mostrare che è corretta.",
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
        "subtext": "seguire le regole",
        "transcription": "seˈɡwire",
        "definitions": [
            {
                "text": "Venire dopo; obbedire a regole o istruzioni.",
                "examples": [
                    "Per favore segui attentamente le istruzioni. Lui segue le notizie."
                ]
            }
        ],
        "classification": "regular",
        "v3": "seguito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "sognare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💭",
        "subtext": "sognare ad occhi aperti",
        "transcription": "soɲˈɲaːre",
        "definitions": [
            {
                "text": "Avere immagini o idee in mente durante il sonno.",
                "examples": [
                    "Ho sognato una vacanza ieri notte."
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
        "subtext": "sorridere a tutti",
        "transcription": "sorˈridere",
        "definitions": [
            {
                "text": "Fare un espressione felice con la bocca.",
                "examples": [
                    "Ha un bellissimo sorriso.",
                    "Sorridi per la macchina fotografica."
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
        "subtext": "spazzolare i capelli",
        "transcription": "spattsolˈlaːre",
        "definitions": [
            {
                "text": "Pulire qualcosa con una spazzola.",
                "examples": [
                    "Mi spazzolo i denti ogni mattina."
                ]
            }
        ],
        "classification": "regular",
        "v3": "spazzolato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sperare",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "sperare di fare / sperare in",
        "transcription": "speˈraːre",
        "definitions": [
            {
                "text": "Desiderare che succeda qualcosa.",
                "examples": [
                    "Spero di ottenere una promozione.",
                    "Lei spera in una paga migliore."
                ]
            }
        ],
        "classification": "regular",
        "v3": "sperato",
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
                "text": "Spostare qualcosa lontano da sé.",
                "examples": [
                    "Premi il pulsante.",
                    "Spingo il carrello della spesa."
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
        "subtext": "stare in piedi tutto il giorno",
        "transcription": "ˈstaːre in ˈpjɛːdi",
        "definitions": [
            {
                "text": "Essere sui piedi in posizione eretta.",
                "examples": [
                    "Per favore alzati.",
                    "Lei sta in piedi vicino alla porta."
                ]
            }
        ],
        "classification": "irregular",
        "v3": "stato in piedi",
        "group": "locution",
        "auxiliary": "essere"
    },
    {
        "word": "suonare",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🔔",
        "subtext": "suonare il campanello / suonare uno strumento",
        "transcription": "swoˈnaːre",
        "definitions": [
            {
                "text": "Emettere un suono; o produrre musica con uno strumento.",
                "examples": [
                    "Il telefono suona.",
                    "Suona la chitarra."
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
        "subtext": "sussurrare all orecchio",
        "transcription": "sussurˈraːre",
        "definitions": [
            {
                "text": "Parlare molto piano in modo che gli altri non possano sentirti.",
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
        "word": "tagliare",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "tagliare il pane / tagliare a pezzi",
        "transcription": "taʎˈʎaːre",
        "definitions": [
            {
                "text": "Dividere con qualcosa di affilato; ridurre.",
                "examples": [
                    "Lei taglia la sua pausa pranzo.",
                    "Taglio il pane."
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
        "subtext": "tenere un segreto",
        "transcription": "teˈneːre",
        "definitions": [
            {
                "text": "Continuare ad avere o fare qualcosa.",
                "examples": [
                    "Tieni la ricevuta.",
                    "Lei tiene il telefono acceso."
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
        "subtext": "tirare la fune",
        "transcription": "tiˈraːre",
        "definitions": [
            {
                "text": "Spostare qualcosa verso di sé.",
                "examples": [
                    "Tira la porta per aprirla."
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
        "subtext": "non toccare!",
        "transcription": "tokˈkare",
        "definitions": [
            {
                "text": "Mettere la mano o un'altra parte del corpo su qualcosa.",
                "examples": [
                    "Non toccare la vernice fresca!"
                ]
            }
        ],
        "classification": "regular",
        "v3": "toccato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "trasportare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "trasportare pacchi",
        "transcription": "trasporˈtaːre",
        "definitions": [
            {
                "text": "Tenere qualcosa e spostarlo da un posto all altro.",
                "examples": [
                    "Porto la mia borsa a scuola.",
                    "Puoi aiutarmi a trasportare questa scatola?"
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
        "subtext": "trovare una soluzione",
        "transcription": "troˈvare",
        "definitions": [
            {
                "text": "Scoprire o localizzare qualcosa.",
                "examples": [
                    "Trovo il lavoro interessante.",
                    "Lei ha trovato un nuovo lavoro."
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
        "subtext": "udire notizie / udire un suono",
        "transcription": "uˈdiːre",
        "definitions": [
            {
                "text": "Percepire il suono attraverso le orecchie.",
                "examples": [
                    "Odo l allarme ogni mattina.",
                    "Puoi udirmi?"
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
        "subtext": "usare un telefono / usare un computer",
        "transcription": "uˈzare",
        "definitions": [
            {
                "text": "Impiegare qualcosa per uno scopo.",
                "examples": [
                    "Uso il mio telefono per tutto.",
                    "Lei usa i mezzi pubblici."
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
        "subtext": "uscire con gli amici",
        "transcription": "uʃˈʃire",
        "definitions": [
            {
                "text": "Andare fuori da un luogo; frequentare qualcuno.",
                "examples": [
                    "Esco dall'ufficio alle sei.",
                    "Stasera esco con i miei amici."
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
        "subtext": "vedere un dottore / vedere gli amici",
        "transcription": "veˈdere",
        "definitions": [
            {
                "text": "Notare o percepire con gli occhi.",
                "examples": [
                    "Vedo il mio dottore domani.",
                    "Lei vede il problema."
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
        "subtext": "vendere la macchina",
        "transcription": "ˈvendere",
        "definitions": [
            {
                "text": "Dare qualcosa a qualcuno in cambio di denaro.",
                "examples": [
                    "Vendono frutta al mercato."
                ]
            }
        ],
        "classification": "regular",
        "v3": "venduto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "visitare",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "subtext": "visitare i parenti",
        "transcription": "viziˈtaːre",
        "definitions": [
            {
                "text": "Andare a vedere una persona o un luogo.",
                "examples": [
                    "Visita i suoi genitori a fine settimana alterni."
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
        "subtext": "vivere in un appartamento / vivere da soli",
        "transcription": "ˈviːvere",
        "definitions": [
            {
                "text": "Avere la propria casa in un luogo; essere vivo.",
                "examples": [
                    "Lei vive in un appartamento vicino al centro.",
                    "Viviamo insieme."
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
        "subtext": "volare in aereo",
        "transcription": "voˈlare",
        "definitions": [
            {
                "text": "Viaggiare in aereo.",
                "examples": [
                    "Lei vola a Parigi per riunioni.",
                    "Lui odia volare."
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
        "subtext": "volere qualcosa / volere fare",
        "transcription": "voˈlere",
        "definitions": [
            {
                "text": "Desiderare o augurarsi qualcosa.",
                "examples": [
                    "Voglio un caffè.",
                    "Lei vuole una promozione."
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