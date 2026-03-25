(function() {
    const data = [
    {
        "word": "essere",
        "level": "baby",
        "theme": "name_greeting_A0",
        "emoji": "👤",
        "subtext": "essere pronto / essere stanco / essere a casa",
        "form": "verb",
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
        "aspect": "stative",
        "group": "essere",
        "v3": "stato"
    },
    {
        "word": "avere",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "avere un lavoro / pranzare / avere un problema",
        "form": "verb",
        "definitions": [
            {
                "text": "Possedere qualcosa; provare qualcosa.",
                "examples": [
                    "Ho un lavoro.",
                    "Lui ha una macchina.",
                    "Lei ha mal di testa."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "avere",
        "v3": "avuto"
    },
    {
        "word": "sentire",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🌡️",
        "subtext": "sentirsi stanco / sentirsi meglio / sentirsi bene",
        "form": "verb",
        "definitions": [
            {
                "text": "Provare un'emozione o una sensazione fisica.",
                "examples": [
                    "Mi sento stanco.",
                    "Lei si sente stressata.",
                    "Lui si sente meglio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "ire",
        "v3": "sentito"
    },
    {
        "word": "dare",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "dare consigli / dare soldi / dare un regalo",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "dato"
    },
    {
        "word": "prendere",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "subtext": "prendere l'autobus / prendere una medicina / fare una pausa",
        "form": "verb",
        "definitions": [
            {
                "text": "Tenere e spostare qualcosa; usare o consumare.",
                "examples": [
                    "Prendo l'autobus per andare al lavoro.",
                    "Lei prende le medicine."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "preso"
    },
    {
        "word": "ottenere",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "subtext": "ottenere un lavoro / stancarsi / migliorare",
        "form": "verb",
        "definitions": [
            {
                "text": "Ricevere, ottenere o diventare.",
                "examples": [
                    "Ottengo un buon stipendio.",
                    "Lui si stanca velocemente.",
                    "Lei ottiene una promozione."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "ottenuto"
    },
    {
        "word": "mettere",
        "level": "baby",
        "theme": "furniture_objects_A0",
        "emoji": "📥",
        "subtext": "mettere / riporre / mettere giù il telefono",
        "form": "verb",
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
        "aspect": "action",
        "group": "ere",
        "v3": "messo"
    },
    {
        "word": "fare",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "fare il caffè / prendere una decisione / fare un errore",
        "form": "verb",
        "definitions": [
            {
                "text": "Creare o produrre qualcosa; causare.",
                "examples": [
                    "Faccio il caffè al mattino.",
                    "Lei prende decisioni velocemente."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "are",
        "v3": "fatto"
    },
    {
        "word": "fare",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "fare il lavoro / fare la spesa / fare esercizio",
        "form": "verb",
        "definitions": [
            {
                "text": "Compiere un'azione o un'attività.",
                "examples": [
                    "Faccio il mio lavoro ogni giorno.",
                    "Lei fa la spesa."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "are",
        "v3": "fatto"
    },
    {
        "word": "usare",
        "level": "baby",
        "theme": "basic_technology_devices_A0",
        "emoji": "🛠️",
        "subtext": "usare un telefono / usare i mezzi pubblici / usare un computer",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "usato"
    },
    {
        "word": "aprire",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "subtext": "aprire una porta / aprire un conto / aprire un negozio",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare in modo che qualcosa non sia chiuso; o iniziare.",
                "examples": [
                    "Lui apre l'ufficio alle otto.",
                    "Lei apre un conto bancario."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ire",
        "v3": "aperto"
    },
    {
        "word": "chiudere",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "subtext": "chiudere una porta / chiudere alle sei / chiudere un conto",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare in modo che qualcosa non sia aperto; o finire.",
                "examples": [
                    "L'ufficio chiude alle sei.",
                    "Lei chiude il portatile."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "chiuso"
    },
    {
        "word": "iniziare",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "iniziare il lavoro / iniziare una riunione / iniziare un nuovo lavoro",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "iniziato"
    },
    {
        "word": "finire",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finire il lavoro / finire un progetto / finire presto",
        "form": "verb",
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
        "aspect": "action",
        "group": "ire",
        "v3": "finito"
    },
    {
        "word": "aiutare",
        "level": "baby",
        "theme": "family_life_A1",
        "emoji": "🤝",
        "subtext": "aiutare qualcuno / aiutare con / chiedere aiuto",
        "form": "verb",
        "definitions": [
            {
                "text": "Aiutare qualcuno.",
                "examples": [
                    "Aiuta i suoi colleghi.",
                    "Puoi aiutarmi?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "aiutato"
    },
    {
        "word": "provare",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "provare a fare / provare sodo / provare qualcosa di nuovo",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un sforzo; tentare qualcosa.",
                "examples": [
                    "Provo sempre a fare del mio meglio al lavoro.",
                    "Prova il caffè qui."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "provato"
    },
    {
        "word": "mostrare",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "📽️",
        "subtext": "mostrare a qualcuno / mostrare come / mostrare un documento",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "mostrato"
    },
    {
        "word": "trovare",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "subtext": "trovare un lavoro / scoprire / trovare difficile",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "trovato"
    },
    {
        "word": "tenere",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "continuare / stare zitti / tenere un registro",
        "form": "verb",
        "definitions": [
            {
                "text": "Continuare ad avere o fare qualcosa.",
                "examples": [
                    "Tieni la ricevuta.",
                    "Lei tiene il telefono acceso tutto il giorno."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "ere",
        "v3": "tenuto"
    },
    {
        "word": "perdere",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📉",
        "subtext": "perdere un lavoro / perdere soldi / perdere peso",
        "form": "verb",
        "definitions": [
            {
                "text": "Non avere più qualcosa; non riuscire a vincere.",
                "examples": [
                    "Ho perso le chiavi.",
                    "Lei ha perso il lavoro.",
                    "Lui non perde mai."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "perso"
    },
    {
        "word": "tagliare",
        "level": "baby",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "tagliare i costi / tagliare le spese / tagliare a metà",
        "form": "verb",
        "definitions": [
            {
                "text": "Dividere con qualcosa di affilato; ridurre.",
                "examples": [
                    "Lei taglia la sua pausa pranzo.",
                    "Riduce i costi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "tagliato"
    },
    {
        "word": "girare",
        "level": "baby",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "accendere / spegnere / girare a sinistra / girare a destra",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi in una direzione; cambiare stato.",
                "examples": [
                    "Gira a sinistra all'ufficio.",
                    "Lei spegne la luce."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "girato"
    },
    {
        "word": "portare",
        "level": "baby",
        "theme": "meals_of_the_day_A0",
        "emoji": "🎁",
        "subtext": "portare qualcuno / portare cibo / portare un documento",
        "form": "verb",
        "definitions": [
            {
                "text": "Trasportare qualcosa in un posto.",
                "examples": [
                    "Porta il tuo documento all'intervista.",
                    "Lui porta il pranzo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "portato"
    },
    {
        "word": "dire",
        "level": "baby",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🗨️",
        "subtext": "dire ciao / dire di sì / dire di no / dire qualcosa",
        "form": "verb",
        "definitions": [
            {
                "text": "Esprimere qualcosa a parole.",
                "examples": [
                    "Lei dice ciao ogni mattina.",
                    "Lui dice che è difficile."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ire",
        "v3": "detto"
    },
    {
        "word": "dire",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "🗣️",
        "subtext": "dire la verità / dire a qualcuno / raccontare una storia",
        "form": "verb",
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
        "aspect": "action",
        "group": "ire",
        "v3": "detto"
    },
    {
        "word": "chiedere",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "❓",
        "subtext": "fare una domanda / chiedere aiuto / chiedere di",
        "form": "verb",
        "definitions": [
            {
                "text": "Porre una domanda a qualcuno; richiedere qualcosa.",
                "examples": [
                    "Lei fa molte domande.",
                    "Chiedo consiglio al mio capo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "chiesto"
    },
    {
        "word": "parlare",
        "level": "baby",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🗣️",
        "subtext": "parlare con qualcuno / parlare una lingua / parlare chiaramente",
        "form": "verb",
        "definitions": [
            {
                "text": "Comunicare verbalmente; conoscere una lingua.",
                "examples": [
                    "Lui parla tre lingue.",
                    "Lei parla con il suo manager."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "parlato"
    },
    {
        "word": "parlare",
        "level": "baby",
        "theme": "greetings_social_phrases_A0",
        "emoji": "💬",
        "subtext": "parlare con qualcuno / parlare di / parlare apertamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere una conversazione.",
                "examples": [
                    "Parliamo di lavoro ogni lunedì.",
                    "Lei parla molto."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "parlato"
    },
    {
        "word": "chiamare",
        "level": "baby",
        "theme": "using_a_smartphone_A1",
        "emoji": "📞",
        "subtext": "chiamare qualcuno / richiamare / convocare una riunione",
        "form": "verb",
        "definitions": [
            {
                "text": "Telefonare a qualcuno.",
                "examples": [
                    "Chiamo i miei clienti ogni mattina.",
                    "Lei convoca una riunione."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "chiamato"
    },
    {
        "word": "scrivere",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "scrivere un'email / scrivere un rapporto / scrivere una lettera",
        "form": "verb",
        "definitions": [
            {
                "text": "Tracciare segni su carta o su uno schermo.",
                "examples": [
                    "Scrivo email tutto il giorno.",
                    "Lei scrive un rapporto ogni venerdì."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "scritto"
    },
    {
        "word": "leggere",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "leggere un libro / leggere le notizie / leggere un contratto",
        "form": "verb",
        "definitions": [
            {
                "text": "Guardare e capire parole scritte.",
                "examples": [
                    "Lei legge le notizie ogni mattina.",
                    "Lui legge i contratti."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "letto"
    },
    {
        "word": "ascoltare",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "ascoltare musica / ascoltare attentamente / ascoltare un podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "Prestare attenzione ai suoni o al parlato.",
                "examples": [
                    "Ascolto podcast al lavoro.",
                    "Lei ascolta attentamente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "ascoltato"
    },
    {
        "word": "rispondere",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "📞",
        "subtext": "rispondere a una domanda / rispondere al telefono",
        "form": "verb",
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
        "aspect": "action",
        "group": "ere",
        "v3": "risposto"
    },
    {
        "word": "ripetere",
        "level": "baby",
        "theme": "classroom_language_A0",
        "emoji": "🔁",
        "subtext": "ripetere quello / ripetersi / ripetere un ordine",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire o fare qualcosa di nuovo.",
                "examples": [
                    "Per favore ripeti quello.",
                    "Ha ripetuto l'istruzione due volte."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "ere",
        "v3": "ripetuto"
    },
    {
        "word": "andare",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🚶",
        "subtext": "andare al lavoro / andare a casa / uscire / andare a fare shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "Spostarsi da un luogo a un altro.",
                "examples": [
                    "Vado al lavoro in treno.",
                    "Lei va all'estero ogni anno."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "are",
        "v3": "andato"
    },
    {
        "word": "venire",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🏃‍♂️",
        "subtext": "venire a casa / tornare / venire al lavoro / venire qui",
        "form": "verb",
        "definitions": [
            {
                "text": "Spostarsi verso un luogo o una persona.",
                "examples": [
                    "Lui viene in ufficio alle nove.",
                    "Lei viene a casa tardi."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ire",
        "v3": "venuto"
    },
    {
        "word": "camminare",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "camminare verso il lavoro / camminare verso casa / camminare lentamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi a piedi a passo normale.",
                "examples": [
                    "Lui cammina verso il lavoro ogni giorno.",
                    "Lei cammina durante la pausa pranzo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "camminato"
    },
    {
        "word": "guidare",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "subtext": "guidare verso il lavoro / guidare la macchina / guidare verso casa",
        "form": "verb",
        "definitions": [
            {
                "text": "Azionare un veicolo.",
                "examples": [
                    "Lei guida verso il lavoro.",
                    "Lui guida un'auto aziendale."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "guidato"
    },
    {
        "word": "volare",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "subtext": "volare verso una città / volare in business class / volare in economy",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "volato"
    },
    {
        "word": "arrivare",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🏁",
        "subtext": "arrivare al lavoro / arrivare tardi / arrivare in orario",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "arrivato"
    },
    {
        "word": "partire",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🚪",
        "subtext": "lasciare casa / lasciare il lavoro / partire presto / partire tardi",
        "form": "verb",
        "definitions": [
            {
                "text": "Allontanarsi da un luogo.",
                "examples": [
                    "Parto da casa alle otto.",
                    "Lei ha lasciato l'azienda l'anno scorso."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ire",
        "v3": "partito"
    },
    {
        "word": "muovere",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "traslocare / trasferirsi in una città / andare avanti",
        "form": "verb",
        "definitions": [
            {
                "text": "Cambiare posizione o luogo di vita.",
                "examples": [
                    "Si sono trasferiti in un nuovo appartamento.",
                    "Lei si sposta in un team diverso."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "mosso"
    },
    {
        "word": "tornare",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🔙",
        "subtext": "tornare a casa / tornare al lavoro / ricambiare una chiamata",
        "form": "verb",
        "definitions": [
            {
                "text": "Venire o tornare in un luogo.",
                "examples": [
                    "Lui torna da un viaggio venerdì.",
                    "Lei ha ricambiato la chiamata."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "tornato"
    },
    {
        "word": "viaggiare",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "✈️",
        "subtext": "viaggiare per lavoro / viaggiare all'estero / viaggiare in treno",
        "form": "verb",
        "definitions": [
            {
                "text": "Andare da un posto all'altro, spesso lontano.",
                "examples": [
                    "Lei viaggia per lavoro una volta al mese.",
                    "Lui ama viaggiare."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "viaggiato"
    },
    {
        "word": "mangiare",
        "level": "baby",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍎",
        "subtext": "fare colazione / pranzare / cenare / mangiare fuori",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere cibo in bocca e consumarlo.",
                "examples": [
                    "Mangiamo il pranzo all'una.",
                    "Lei mangia alla sua scrivania."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "mangiato"
    },
    {
        "word": "bere",
        "level": "baby",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "bere caffè / bere tè / bere acqua / bere alcolici",
        "form": "verb",
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
        "aspect": "action",
        "group": "ere",
        "v3": "bevuto"
    },
    {
        "word": "dormire",
        "level": "baby",
        "theme": "times_day_A0",
        "emoji": "😴",
        "subtext": "dormire bene / dormire male / dormire otto ore",
        "form": "verb",
        "definitions": [
            {
                "text": "Riposare in uno stato di incoscienza.",
                "examples": [
                    "Lui dorme sette ore a notte.",
                    "Lei dorme male."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "ire",
        "v3": "dormito"
    },
    {
        "word": "cucinare",
        "level": "baby",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cucinare la cena / cucinare un pasto / cucinare a casa",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "cucinato"
    },
    {
        "word": "pulire",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "pulire l'appartamento / pulire tutto / pulire la cucina",
        "form": "verb",
        "definitions": [
            {
                "text": "Rimuovere lo sporco da qualcosa.",
                "examples": [
                    "Pulisco l'appartamento il sabato.",
                    "Lui pulisce la sua scrivania ogni giorno."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "ire",
        "v3": "pulito"
    },
    {
        "word": "indossare",
        "level": "baby",
        "theme": "items_of_clothing_A0",
        "emoji": "👕",
        "subtext": "indossare un completo / indossare gli occhiali / indossare vestiti casual",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "indossato"
    },
    {
        "word": "lavare",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "lavare i piatti / lavare i vestiti / lavarsi le mani",
        "form": "verb",
        "definitions": [
            {
                "text": "Pulire qualcosa con l'acqua.",
                "examples": [
                    "Lava la sua macchina ogni domenica.",
                    "Lavati le mani."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "lavato"
    },
    {
        "word": "comprare",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "subtext": "comprare cibo / comprare un biglietto / comprare online",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "comprato"
    },
    {
        "word": "pagare",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "pagare una bolletta / pagare l'affitto / pagare con carta",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare denaro in cambio di qualcosa.",
                "examples": [
                    "Pago l'affitto mensilmente.",
                    "Lei paga con carta."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "pagato"
    },
    {
        "word": "spendere",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "spendere soldi / spendere tempo / spendere per l'affitto",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare denaro o tempo.",
                "examples": [
                    "Lui spende troppo per il cibo da asporto.",
                    "Lei spende tempo per il pendolarismo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "speso"
    },
    {
        "word": "risparmiare",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "risparmiare soldi / risparmiare per una casa / risparmiare tempo",
        "form": "verb",
        "definitions": [
            {
                "text": "Tenere i soldi invece di spenderli.",
                "examples": [
                    "Risparmia cento euro al mese.",
                    "Salva il tuo lavoro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "risparmiato"
    },
    {
        "word": "lavorare",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "lavorare da casa / lavorare a tempo pieno / lavorare sodo",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "lavorato"
    },
    {
        "word": "vivere",
        "level": "baby",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "vivere in un appartamento / vivere da soli / vivere con qualcuno",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere la propria casa in un luogo; essere vivo.",
                "examples": [
                    "Lei vive in un appartamento vicino al centro.",
                    "Viviamo insieme."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "ere",
        "v3": "vissuto"
    },
    {
        "word": "pensare",
        "level": "baby",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "pensare a / pensare di / pensare attentamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare la mente; avere un'opinione.",
                "examples": [
                    "Penso che sia una buona idea.",
                    "Lei pensa di dimettersi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "are",
        "v3": "pensato"
    },
    {
        "word": "sapere",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "conoscere qualcuno / sapere la risposta / sapere come",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere informazioni o avere familiarità con.",
                "examples": [
                    "Conosco il suo nome.",
                    "Lei sa come negoziare."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "ere",
        "v3": "saputo"
    },
    {
        "word": "volere",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🙏",
        "subtext": "volere un lavoro / volere fare / volere di più",
        "form": "verb",
        "definitions": [
            {
                "text": "Desiderare o augurarsi qualcosa.",
                "examples": [
                    "Voglio un caffè.",
                    "Lei vuole una promozione.",
                    "Lui vuole andare in pensione."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "ere",
        "v3": "voluto"
    },
    {
        "word": "avere bisogno di",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "🆘",
        "subtext": "bisogno di aiuto / bisogno di tempo / bisogno di soldi",
        "form": "verb",
        "definitions": [
            {
                "text": "Richiedere qualcosa.",
                "examples": [
                    "Ho bisogno di una pausa.",
                    "Lei ha bisogno di più tempo.",
                    "Lui ha bisogno di aiuto."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "locution",
        "v3": "avuto bisogno"
    },
    {
        "word": "piacere",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "👍",
        "subtext": "mi piace il lavoro / mi piace viaggiare / mi piace l'idea",
        "form": "verb",
        "definitions": [
            {
                "text": "Trovare qualcosa di piacevole.",
                "examples": [
                    "Mi piace il mio lavoro.",
                    "A lei piace cucinare a casa.",
                    "A lui piace il caffè."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "ere",
        "v3": "piaciuto"
    },
    {
        "word": "amare",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "❤️",
        "subtext": "amare qualcuno / amare fare qualcosa / amare un posto",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere un forte affetto per; godere grandemente.",
                "examples": [
                    "Lei ama il suo lavoro.",
                    "Lui ama viaggiare per lavoro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "are",
        "v3": "amato"
    },
    {
        "word": "odiare",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😡",
        "subtext": "odiare fare / odiare qualcuno / odiare le riunioni",
        "form": "verb",
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
        "aspect": "stative",
        "group": "are",
        "v3": "odiato"
    },
    {
        "word": "sperare",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🤞",
        "subtext": "sperare / sperare di fare / spero di sì",
        "form": "verb",
        "definitions": [
            {
                "text": "Desiderare che succeda qualcosa.",
                "examples": [
                    "Spero di ottenere una promozione quest'anno.",
                    "Lei spera in una paga migliore."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "are",
        "v3": "sperato"
    },
    {
        "word": "ricordare",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "ricordare di fare / ricordare un nome / ricordare chiaramente",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere un ricordo di; non dimenticare.",
                "examples": [
                    "Per favore ricorda la scadenza.",
                    "Lei ricorda ogni cliente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "are",
        "v3": "ricordato"
    },
    {
        "word": "dimenticare",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "dimenticare un nome / dimenticare di fare / dimenticare del tutto",
        "form": "verb",
        "definitions": [
            {
                "text": "Mancare di ricordare.",
                "examples": [
                    "Non dimenticare la riunione.",
                    "Dimentica sempre le password."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "are",
        "v3": "dimenticato"
    },
    {
        "word": "capire",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "💡",
        "subtext": "capire un problema / capire qualcuno / capire chiaramente",
        "form": "verb",
        "definitions": [
            {
                "text": "Afferrare il significato di qualcosa.",
                "examples": [
                    "Capisco il contratto.",
                    "Lei capisce il francese."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "ire",
        "v3": "capito"
    },
    {
        "word": "decidere",
        "level": "baby",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "decidere di fare / decidere su / prendere una decisione",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare una scelta.",
                "examples": [
                    "Ha deciso di cambiare carriera.",
                    "Lui decide velocemente."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "ere",
        "v3": "deciso"
    },
    {
        "word": "godere",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "subtext": "godere di fare / godersi un pasto / godersi il lavoro",
        "form": "verb",
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
        "aspect": "stative",
        "group": "ere",
        "v3": "goduto"
    },
    {
        "word": "vedere",
        "level": "baby",
        "theme": "body_parts_A0",
        "emoji": "👁️",
        "subtext": "vedere un dottore / vedere gli amici / vedere il problema",
        "form": "verb",
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
        "aspect": "both",
        "group": "ere",
        "v3": "visto"
    },
    {
        "word": "udire",
        "level": "baby",
        "theme": "body_parts_A0",
        "emoji": "👂",
        "subtext": "udire notizie / udire qualcuno / udire un suono",
        "form": "verb",
        "definitions": [
            {
                "text": "Percepire il suono attraverso le orecchie.",
                "examples": [
                    "Odo l'allarme ogni mattina.",
                    "Puoi udirmi?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "ire",
        "v3": "udito"
    },
    {
        "word": "svegliarsi",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "subtext": "svegliarsi presto, svegliarsi alle 7",
        "form": "verb",
        "definitions": [
            {
                "text": "Smettere di dormire e aprire gli occhi.",
                "examples": [
                    "Mi sveglio alle sette.",
                    "A che ora ti svegli?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "svegliato"
    },
    {
        "word": "guardare",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "subtext": "guardare la TV, guardare un film",
        "form": "verb",
        "definitions": [
            {
                "text": "Guardare qualcosa per un periodo di tempo.",
                "examples": [
                    "Guardo la TV la sera.",
                    "Guardano gli uccelli."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "guardato"
    },
    {
        "word": "guardare",
        "level": "baby",
        "theme": "health_body",
        "emoji": "👀",
        "subtext": "guardare",
        "form": "verb",
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
        "aspect": "both",
        "group": "are",
        "v3": "guardato"
    },
    {
        "word": "giocare",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "giocare",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare qualcosa per divertimento o in un gioco.",
                "examples": [
                    "Gioco a calcio con i miei amici.",
                    "Le piace giocare ai videogiochi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "giocato"
    },
    {
        "word": "correre",
        "level": "baby",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "subtext": "correre",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi molto velocemente sulle gambe.",
                "examples": [
                    "Corro nel parco.",
                    "Lui corre per prendere l'autobus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "corso"
    },
    {
        "word": "sedersi",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🪑",
        "subtext": "sedersi",
        "form": "verb",
        "definitions": [
            {
                "text": "Riposare il peso sul sedere piuttosto che sui piedi.",
                "examples": [
                    "Per favore siediti.",
                    "Siedo su una sedia."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "seduto"
    },
    {
        "word": "stare in piedi",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🧍",
        "subtext": "stare in piedi",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "stato in piedi"
    },
    {
        "word": "incontrare",
        "level": "baby",
        "theme": "society_politics",
        "emoji": "🤝",
        "subtext": "incontrare",
        "form": "verb",
        "definitions": [
            {
                "text": "Vedere e parlare con qualcuno per la prima volta.",
                "examples": [
                    "Piacere di conoscerti.",
                    "Ci incontriamo ogni venerdì."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "incontrato"
    },
    {
        "word": "imparare",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "📚",
        "subtext": "imparare",
        "form": "verb",
        "definitions": [
            {
                "text": "Ottenere conoscenza o un'abilità.",
                "examples": [
                    "Voglio imparare l'italiano.",
                    "I bambini imparano in fretta."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "imparato"
    },
    {
        "word": "cambiare",
        "level": "baby",
        "theme": "time",
        "emoji": "🔄",
        "subtext": "cambiare",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "cambiato"
    },
    {
        "word": "fermare",
        "level": "baby",
        "theme": "time",
        "emoji": "🛑",
        "subtext": "fermare",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "fermato"
    },
    {
        "word": "aggiungere",
        "level": "baby",
        "theme": "numbers_math",
        "emoji": "➕",
        "subtext": "aggiungere",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere le cose insieme per formare un gruppo più grande.",
                "examples": [
                    "Aggiungi dello zucchero al tè.",
                    "Quanto fa cinque più cinque?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "aggiunto"
    },
    {
        "word": "vincere",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "vincere",
        "form": "verb",
        "definitions": [
            {
                "text": "Essere il migliore in un gioco o in una competizione.",
                "examples": [
                    "Vogliamo vincere la partita."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "vinto"
    },
    {
        "word": "aspettare",
        "level": "baby",
        "theme": "time",
        "emoji": "⏳",
        "subtext": "aspettare",
        "form": "verb",
        "definitions": [
            {
                "text": "Stare in un posto finché non succede qualcosa.",
                "examples": [
                    "Aspetta l'autobus qui.",
                    "Sto aspettando il mio amico."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "aspettato"
    },
    {
        "word": "morire",
        "level": "baby",
        "theme": "health_body",
        "emoji": "⚰️",
        "subtext": "morire",
        "form": "verb",
        "definitions": [
            {
                "text": "Smettere di vivere.",
                "examples": [
                    "Le piante muoiono senza acqua."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ire",
        "v3": "morto"
    },
    {
        "word": "inviare",
        "level": "baby",
        "theme": "language_communication",
        "emoji": "✉️",
        "subtext": "inviare",
        "form": "verb",
        "definitions": [
            {
                "text": "Far sì che qualcosa vada in un posto.",
                "examples": [
                    "Invio un'email ogni mattina.",
                    "Puoi inviarmi una foto?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "inviato"
    },
    {
        "word": "restare",
        "level": "baby",
        "theme": "places_geography",
        "emoji": "🏨",
        "subtext": "restare",
        "form": "verb",
        "definitions": [
            {
                "text": "Continuare a essere in un posto.",
                "examples": [
                    "Resto a casa la domenica.",
                    "Stiamo in un hotel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "restato"
    },
    {
        "word": "cadere",
        "level": "baby",
        "theme": "environment_nature",
        "emoji": "🍂",
        "subtext": "cadere",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi verso il basso verso il suolo.",
                "examples": [
                    "Le foglie cadono in autunno.",
                    "Fai attenzione, non cadere."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "caduto"
    },
    {
        "word": "passare",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "🏔️",
        "subtext": "passare",
        "form": "verb",
        "definitions": [
            {
                "text": "Passare oltre qualcosa o superare un esame.",
                "examples": [
                    "Passo davanti al parco mentre vado a casa.",
                    "Spero di superare il test."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "passato"
    },
    {
        "word": "vendere",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "subtext": "vendere",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare qualcosa a qualcuno in cambio di denaro.",
                "examples": [
                    "Vendono frutta al mercato."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "ere",
        "v3": "venduto"
    },
    {
        "word": "tirare",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🚜",
        "subtext": "tirare",
        "form": "verb",
        "definitions": [
            {
                "text": "Spostare qualcosa verso di sé.",
                "examples": [
                    "Tira la porta per aprirla."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "tirato"
    },
    {
        "word": "spingere",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🛒",
        "subtext": "spingere",
        "form": "verb",
        "definitions": [
            {
                "text": "Spostare qualcosa lontano da sé.",
                "examples": [
                    "Premi il pulsante.",
                    "Spingo il carrello della spesa."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "spinto"
    },
    {
        "word": "trasportare",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🎒",
        "subtext": "trasportare",
        "form": "verb",
        "definitions": [
            {
                "text": "Tenere qualcosa e spostarlo da un posto all'altro.",
                "examples": [
                    "Porto la mia borsa a scuola.",
                    "Puoi aiutarmi a trasportare questa scatola?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "trasportato"
    },
    {
        "word": "rompere",
        "level": "baby",
        "theme": "describing_things",
        "emoji": "💔",
        "subtext": "rompere",
        "form": "verb",
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
        "aspect": "action",
        "group": "ere",
        "v3": "rotto"
    },
    {
        "word": "ricevere",
        "level": "baby",
        "theme": "language_communication",
        "emoji": "📩",
        "subtext": "ricevere",
        "form": "verb",
        "definitions": [
            {
                "text": "Ottenere qualcosa che qualcuno ti ha dato o inviato.",
                "examples": [
                    "Ricevo molta posta.",
                    "Ha ricevuto un regalo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "ere",
        "v3": "ricevuto"
    },
    {
        "word": "essere d'accordo",
        "level": "baby",
        "theme": "opinion_debate",
        "emoji": "👍",
        "subtext": "essere d'accordo",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere la stessa opinione di qualcuno.",
                "examples": [
                    "Sono d'accordo con te.",
                    "Siamo d'accordo sul piano."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "locution",
        "v3": "stato d'accordo"
    },
    {
        "word": "disegnare",
        "level": "baby",
        "theme": "culture_arts",
        "emoji": "🎨",
        "subtext": "disegnare",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un'immagine con una penna o una matita.",
                "examples": [
                    "Mi piace disegnare uccelli.",
                    "Puoi disegnare una mappa?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "disegnato"
    },
    {
        "word": "condividere",
        "level": "baby",
        "theme": "society_politics",
        "emoji": "🍕",
        "subtext": "condividere",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare una parte di qualcosa ad altri.",
                "examples": [
                    "Condividiamo la pizza.",
                    "Condivido la stanza con mio fratello."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ire",
        "v3": "condiviso"
    },
    {
        "word": "sorridere",
        "level": "baby",
        "theme": "feelings_emotions",
        "emoji": "😊",
        "subtext": "sorridere",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un'espressione felice con la bocca.",
                "examples": [
                    "Ha un bellissimo sorriso.",
                    "Sorridi per la macchina fotografica."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "sorriso"
    },
    {
        "word": "piangere",
        "level": "baby",
        "theme": "feelings_emotions",
        "emoji": "😢",
        "subtext": "piangere",
        "form": "verb",
        "definitions": [
            {
                "text": "Produrre lacrime perché si è tristi o si prova dolore.",
                "examples": [
                    "Il bambino sta piangendo.",
                    "Non piangere."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "pianto"
    },
    {
        "word": "ballare",
        "level": "baby",
        "theme": "culture_arts",
        "emoji": "💃",
        "subtext": "ballare",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "ballato"
    },
    {
        "word": "cantare",
        "level": "baby",
        "theme": "culture_arts",
        "emoji": "🎤",
        "subtext": "cantare",
        "form": "verb",
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
        "aspect": "action",
        "group": "are",
        "v3": "cantato"
    },
    {
        "word": "saltare",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🦘",
        "subtext": "saltare",
        "form": "verb",
        "definitions": [
            {
                "text": "Spingersi lontano dal suolo con le gambe.",
                "examples": [
                    "Puoi saltare in alto?",
                    "Il gatto è saltato sul tavolo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "saltato"
    },
    {
        "word": "nuotare",
        "level": "baby",
        "theme": "common_sports_A0",
        "emoji": "🏊",
        "subtext": "nuotare",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi attraverso l'acqua usando braccia e gambe.",
                "examples": [
                    "Nuoto ogni mattina.",
                    "Sai nuotare?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "nuotato"
    },
    {
        "word": "studiare",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "📖",
        "subtext": "studiare",
        "form": "verb",
        "definitions": [
            {
                "text": "Passare del tempo a imparare un argomento.",
                "examples": [
                    "Studio l'inglese a scuola.",
                    "Sta studiando per i suoi esami."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "studiato"
    },
    {
        "word": "insegnare",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "👨‍🏫",
        "subtext": "insegnare",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare conoscenza agli altri.",
                "examples": [
                    "Insegno inglese.",
                    "Insegna in un'università."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "insegnato"
    },
    {
        "word": "fare il pendolare",
        "level": "baby",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "fare il pendolare",
        "form": "verb",
        "definitions": [
            {
                "text": "Viaggiare per una certa distanza tra la propria casa e il posto di lavoro regolarmente.",
                "examples": [
                    "Faccio il pendolare verso la città in treno."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "locution",
        "v3": "fatto il pendolare"
    },
    {
        "word": "affittare",
        "level": "baby",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "affittare",
        "form": "verb",
        "definitions": [
            {
                "text": "Pagare denaro per usare una casa o un appartamento che appartiene a qualcun altro.",
                "examples": [
                    "Affittiamo un appartamento in città."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "affittato"
    },
    {
        "word": "esercitarsi",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "subtext": "esercitarsi",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare attività fisica per mantenersi in salute.",
                "examples": [
                    "Mi esercito ogni mattina."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "esercitato"
    },
    {
        "word": "costare",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "costare",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere un certo prezzo.",
                "examples": [
                    "L'appartamento costa molto."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "are",
        "v3": "costato"
    },
    {
        "word": "invitare",
        "level": "baby",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "subtext": "invitare",
        "form": "verb",
        "definitions": [
            {
                "text": "Chiedere a qualcuno di venire in un posto o a un evento.",
                "examples": [
                    "Invito gli amici a cena."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "invitato"
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();