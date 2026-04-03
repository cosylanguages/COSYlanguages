(function() {
    const data = [
    {
        "word": "essere",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👤",
        "subtext": "essere pronto / essere stanco / essere a casa",
        "form": "verb",
        "transcription": "ˈɛssere",
        "image": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=150&h=150&fit=crop",
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
        "v3": "stato",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "avere",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "avere un lavoro / avere un problema",
        "synonyms": ["pranzare"],
        "form": "verb",
        "transcription": "aˈvere",
        "image": "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=150&h=150&fit=crop",
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
        "v3": "avuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "sentire",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "",
        "synonyms": ["sentirsi stanco", "sentirsi meglio", "sentirsi bene"],
        "form": "verb",
        "transcription": "senˈtire",
        "image": "https://images.unsplash.com/photo-1499209974431-9dac3adaf477?w=150&h=150&fit=crop",
        "definitions": [
            {
                "text": "Provare un emozione o una sensazione fisica.",
                "examples": [
                    "Mi sento stanco.",
                    "Lei si sente stressata.",
                    "Lui si sente meglio."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "sentito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "dare",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "dare consigli / dare soldi / dare un regalo",
        "opposite": "prendere",
        "oppositeEmoji": "👜",
        "form": "verb",
        "transcription": "ˈdare",
        "image": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=150&h=150&fit=crop",
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
        "v3": "dato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "prendere",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "prendere l autobus / prendere una medicina",
        "synonyms": ["fare una pausa"],
        "opposite": "dare",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "transcription": "ˈprɛndere",
        "image": "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=150&h=150&fit=crop",
        "definitions": [
            {
                "text": "Tenere e spostare qualcosa; usare o consumare.",
                "examples": [
                    "Prendo l autobus per andare al lavoro.",
                    "Lei prende le medicine."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "preso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "ottenere",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "ottenere un lavoro",
        "synonyms": ["stancarsi", "migliorare"],
        "form": "verb",
        "transcription": "otteˈnere",
        "image": "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=150&h=150&fit=crop",
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
        "v3": "ottenuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "mettere",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "mettere / mettere giù il telefono",
        "synonyms": ["riporre"],
        "form": "verb",
        "transcription": "ˈmettere",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?w=150&h=150&fit=crop",
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
        "v3": "messo",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "fare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "fare il caffè / fare un errore",
        "synonyms": ["prendere una decisione"],
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
        "v3": "fatto",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "fare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "fare il lavoro / fare la spesa / fare esercizio",
        "form": "verb",
        "definitions": [
            {
                "text": "Compiere un azione o un attività.",
                "examples": [
                    "Faccio il mio lavoro ogni giorno.",
                    "Lei fa la spesa."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "fatto",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "usare",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
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
        "v3": "usato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "aprire",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "aprire una porta / aprire un conto / aprire un negozio",
        "opposite": "chiudere",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare in modo che qualcosa non sia chiuso; o iniziare.",
                "examples": [
                    "Lui apre l ufficio alle otto.",
                    "Lei apre un conto bancario."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "aperto",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "chiudere",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "chiudere una porta / chiudere alle sei / chiudere un conto",
        "opposite": "aprire",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare in modo che qualcosa non sia aperto; o finire.",
                "examples": [
                    "L ufficio chiude alle sei.",
                    "Lei chiude il portatile."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "chiuso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "iniziare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "iniziare il lavoro / iniziare una riunione / iniziare un nuovo lavoro",
        "opposite": "finire",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "transcription": "initˈtsjare",
        "image": "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=150&h=150&fit=crop",
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
        "v3": "iniziato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "finire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finire il lavoro / finire un progetto / finire presto",
        "opposite": "iniziare",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "transcription": "fiˈnire",
        "image": "https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?w=150&h=150&fit=crop",
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
        "v3": "finito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "aiutare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "aiutare qualcuno / aiutare con",
        "synonyms": ["chiedere aiuto"],
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
        "v3": "aiutato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "provare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "provare a fare / provare sodo / provare qualcosa",
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
        "v3": "provato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "mostrare",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "classification": "irregular",
        "aspect": "action",
        "v3": "mostrato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "trovare",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "trovare un lavoro / trovare difficile",
        "synonyms": ["scoprire"],
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
        "classification": "irregular",
        "aspect": "action",
        "v3": "trovato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "tenere",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "tenere un registro",
        "synonyms": ["continuare", "stare zitti"],
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
        "v3": "tenuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "perdere",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "perdere un lavoro / perdere soldi / perdere peso",
        "opposite": "vincere",
        "oppositeEmoji": "🏆",
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
        "v3": "perso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "tagliare",
        "level": "starter",
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
        "classification": "irregular",
        "aspect": "action",
        "v3": "tagliato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "girare",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "girare a sinistra / girare a destra",
        "synonyms": ["accendere", "spegnere"],
        "form": "verb",
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
        "aspect": "action",
        "v3": "girato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "portare",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🎁",
        "subtext": "portare qualcuno / portare cibo / portare un documento",
        "form": "verb",
        "definitions": [
            {
                "text": "Trasportare qualcosa in un posto.",
                "examples": [
                    "Porta il tuo documento all intervista.",
                    "Lui porta il pranzo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "portato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "v3": "detto",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "dire la verità / dire a qualcuno",
        "synonyms": ["raccontare una storia"],
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
        "v3": "detto",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "chiedere",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "chiedere aiuto / chiedere di",
        "synonyms": ["fare una domanda"],
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
        "classification": "regular",
        "aspect": "action",
        "v3": "chiesto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "parlare",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "classification": "irregular",
        "aspect": "action",
        "v3": "parlato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "parlare",
        "level": "starter",
        "theme": "family_life_A1",
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
        "v3": "parlato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "chiamare",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📞",
        "subtext": "chiamare qualcuno",
        "synonyms": ["richiamare", "convocare una riunione"],
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
        "v3": "chiamato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "scrivere",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "scrivere un email / scrivere un rapporto / scrivere una lettera",
        "opposite": "leggere",
        "oppositeEmoji": "📖",
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
        "v3": "scritto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "leggere",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "leggere un libro / leggere le notizie / leggere un contratto",
        "opposite": "scrivere",
        "oppositeEmoji": "✍️",
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
        "v3": "letto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "ascoltare",
        "level": "starter",
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
        "v3": "ascoltato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "rispondere",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "v3": "risposto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "ripetere",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "ripetere quello / ripetere un ordine",
        "synonyms": ["ripetersi"],
        "form": "verb",
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
        "aspect": "action",
        "v3": "ripetuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "andare",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "andare al lavoro / andare a casa",
        "synonyms": ["uscire"],
        "form": "verb",
        "definitions": [
            {
                "text": "Spostarsi da un luogo a un altro.",
                "examples": [
                    "Vado al lavoro in treno.",
                    "Lei va all estero ogni anno."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "andato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "venire",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "venire a casa / venire al lavoro",
        "synonyms": ["tornare"],
        "opposite": "andare",
        "oppositeEmoji": "🚶",
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
        "v3": "venuto",
        "group": "ire",
        "auxiliary": "essere"
    },
    {
        "word": "camminare",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "camminare verso il lavoro / camminare verso casa / camminare",
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
        "v3": "camminato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "guidare",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "guidare verso il lavoro / guidare la macchina / guidare verso casa",
        "form": "verb",
        "definitions": [
            {
                "text": "Azionare un veicolo.",
                "examples": [
                    "Lei guida verso il lavoro.",
                    "Lui guida un auto aziendale."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "guidato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "volare",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "volare verso una città / volare in business class",
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
        "classification": "irregular",
        "aspect": "action",
        "v3": "volato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "arrivare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "v3": "arrivato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "partire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "partire presto",
        "synonyms": ["lasciare casa", "lasciare il lavoro"],
        "form": "verb",
        "definitions": [
            {
                "text": "Allontanarsi da un luogo.",
                "examples": [
                    "Parto da casa alle otto.",
                    "Lei ha lasciato l azienda l anno scorso."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "partito",
        "group": "ire",
        "auxiliary": "essere"
    },
    {
        "word": "muovere",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "trasferirsi in una città",
        "synonyms": ["traslocare", "andare avanti"],
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
        "classification": "regular",
        "aspect": "action",
        "v3": "mosso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "tornare",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "tornare a casa / tornare al lavoro",
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
        "v3": "tornato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "viaggiare",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "viaggiare per lavoro / viaggiare all estero",
        "form": "verb",
        "definitions": [
            {
                "text": "Andare da un posto all altro, spesso lontano.",
                "examples": [
                    "Lei viaggia per lavoro una volta al mese.",
                    "Lui ama viaggiare."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "viaggiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "mangiare",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "",
        "synonyms": ["fare colazione", "pranzare", "cenare"],
        "opposite": "bere",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere cibo in bocca e consumarlo.",
                "examples": [
                    "Mangiamo il pranzo all una.",
                    "Lei mangia alla sua scrivania."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "mangiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "bere",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "bere caffè / bere tè / bere acqua",
        "opposite": "mangiare",
        "oppositeEmoji": "🍎",
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
        "v3": "bevuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "dormire",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "dormire bene / dormire male / dormire otto ore",
        "opposite": "svegliarsi",
        "oppositeEmoji": "⏰",
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
        "classification": "irregular",
        "aspect": "action",
        "v3": "dormito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "cucinare",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cucinare la cena / cucinare un pasto",
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
        "v3": "cucinato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "pulire",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "pulire l appartamento / pulire tutto / pulire la cucina",
        "form": "verb",
        "definitions": [
            {
                "text": "Rimuovere lo sporco da qualcosa.",
                "examples": [
                    "Pulisco l appartamento il sabato.",
                    "Lui pulisce la sua scrivania ogni giorno."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "pulito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "indossare",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "indossare un completo / indossare gli occhiali",
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
        "classification": "irregular",
        "aspect": "action",
        "v3": "indossato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "lavare",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "lavare i piatti / lavare i vestiti",
        "synonyms": ["lavarsi le mani"],
        "form": "verb",
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
        "aspect": "action",
        "v3": "lavato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "comprare",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "comprare cibo / comprare un biglietto",
        "opposite": "vendere",
        "oppositeEmoji": "🏷️",
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
        "classification": "irregular",
        "aspect": "action",
        "v3": "comprato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "pagare",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "pagare una bolletta / pagare l affitto / pagare con carta",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare denaro in cambio di qualcosa.",
                "examples": [
                    "Pago l affitto mensilmente.",
                    "Lei paga con carta."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "pagato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "spendere",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "spendere soldi / spendere tempo",
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
        "v3": "speso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "risparmiare",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "risparmiare soldi / risparmiare per una casa",
        "opposite": "spendere",
        "oppositeEmoji": "💸",
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
        "v3": "risparmiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "lavorare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "lavorare da casa / lavorare a tempo pieno",
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
        "v3": "lavorato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "vivere",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "vivere in un appartamento / vivere da soli",
        "opposite": "morire",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere la propria casa in un luogo ; essere vivo.",
                "examples": [
                    "Lei vive in un appartamento vicino al centro.",
                    "Viviamo insieme."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "vissuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "pensare",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "pensare a / pensare di / pensare attentamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare la mente; avere un opinione.",
                "examples": [
                    "Penso che sia una buona idea.",
                    "Lei pensa di dimettersi."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "pensato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sapere",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "sapere la risposta / sapere come",
        "synonyms": ["conoscere qualcuno"],
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
        "v3": "saputo",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "volere",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "classification": "regular",
        "aspect": "stative",
        "v3": "voluto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "avere bisogno di",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "",
        "synonyms": ["bisogno di aiuto", "bisogno di tempo", "bisogno di soldi"],
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
        "v3": "avuto bisogno",
        "group": "locution",
        "auxiliary": "avere"
    },
    {
        "word": "piacere",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "mi piace il lavoro / mi piace l idea",
        "synonyms": ["mi piace viaggiare"],
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
        "classification": "regular",
        "aspect": "stative",
        "v3": "piaciuto",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "amare",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "v3": "amato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "odiare",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "v3": "odiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sperare",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "sperare / sperare di fare",
        "synonyms": ["spero di sì"],
        "form": "verb",
        "definitions": [
            {
                "text": "Desiderare che succeda qualcosa.",
                "examples": [
                    "Spero di ottenere una promozione quest anno.",
                    "Lei spera in una paga migliore."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "sperato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "ricordare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "ricordare di fare / ricordare un nome",
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
        "v3": "ricordato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "dimenticare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "dimenticare un nome / dimenticare di fare",
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
        "classification": "irregular",
        "aspect": "stative",
        "v3": "dimenticato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "capire",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "v3": "capito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "decidere",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "decidere di fare / decidere su",
        "synonyms": ["prendere una decisione"],
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
        "classification": "regular",
        "aspect": "stative",
        "v3": "deciso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "godere",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "godere di fare",
        "synonyms": ["godersi un pasto", "godersi il lavoro"],
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
        "v3": "goduto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "vedere",
        "level": "starter",
        "theme": "body_parts_A1",
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
        "v3": "visto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "udire",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "udire notizie / udire qualcuno / udire un suono",
        "form": "verb",
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
        "aspect": "both",
        "v3": "udito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "svegliarsi",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "svegliarsi presto / svegliarsi alle 7 / svegliarsi stanco",
        "opposite": "dormire",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Smettere di dormire e aprire gli occhi.",
                "examples": [
                    "Mi sveglio alle sette.",
                    "A che ora ti svegli?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "svegliato",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "guardare",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "guardare la TV / guardare un film",
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
        "v3": "guardato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "guardare",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "guardare",
        "synonyms": ["cercare", "assomigliare a"],
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
        "v3": "guardato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "giocare",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "giocare al sport / giocare a un gioco / giocare un ruolo",
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
        "v3": "giocato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "correre",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "correre / correre una corsa",
        "synonyms": ["dirigere un impresa"],
        "form": "verb",
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
        "aspect": "action",
        "v3": "corso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "s asseoir",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "sedersi a un ufficio",
        "synonyms": ["sedersi", "sedersi in riunione"],
        "opposite": "stare in piedi",
        "oppositeEmoji": "🧍",
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
        "v3": "seduto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "stare in piedi",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "stare in piedi",
        "synonyms": ["alzarsi", "essere in piedi"],
        "opposite": "s asseoir",
        "oppositeEmoji": "🪑",
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
        "v3": "stato in piedi",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "incontrare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
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
        "classification": "irregular",
        "aspect": "action",
        "v3": "incontrato",
        "subtext": "incontrare qualcuno / incontrare per il pranzo",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "imparare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "imparare / imparare una lingua / imparare in fretta",
        "form": "verb",
        "definitions": [
            {
                "text": "Ottenere conoscenza o un abilità.",
                "examples": [
                    "Voglio imparare l italiano.",
                    "I bambini imparano in fretta."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v3": "imparato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "cambiare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "cambiare / cambiare idea / cambiare piano",
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
        "v3": "cambiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "fermare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "fermare / fermare qualcuno",
        "synonyms": ["smettere di fare"],
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
        "v3": "fermato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "aggiungere",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "aggiungere / aggiungere un commento / aggiungere zucchero",
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
        "classification": "regular",
        "aspect": "action",
        "v3": "aggiunto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "vincere",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "vincere / vincere un premio / vincere un contratto",
        "opposite": "perdere",
        "oppositeEmoji": "📉",
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
        "v3": "vinto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "aspettare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "aspettare / aspettare qualcuno / aspettare un momento",
        "form": "verb",
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
        "aspect": "action",
        "v3": "aspettato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "morire",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "morire / morire di",
        "synonyms": ["estinguersi"],
        "opposite": "vivere",
        "oppositeEmoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Smettere di vivere.",
                "examples": [
                    "Le piante muoiono senza acqua."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "morto",
        "group": "ire",
        "auxiliary": "essere"
    },
    {
        "word": "inviare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Far sì che qualcosa vada in un posto.",
                "examples": [
                    "Invio un email ogni mattina.",
                    "Puoi inviarmi una foto?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "inviato",
        "subtext": "inviare / inviare un email / inviare un messaggio",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "restare",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "restare / restare a casa / stare in un hotel",
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
        "v3": "restato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "cadere",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "cadere",
        "synonyms": ["innamorarsi", "addormentarsi"],
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
        "v3": "caduto",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "passare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "passare / passare un esame / passare il tempo",
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
        "v3": "passato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "vendere",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "vendere / vendere online / vendere al mercato",
        "opposite": "comprare",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare qualcosa a qualcuno in cambio di denaro.",
                "examples": [
                    "Vendono frutta al mercato."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "venduto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "tirare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "tirare / tirare la porta",
        "synonyms": ["allontanarsi"],
        "opposite": "spingere",
        "oppositeEmoji": "🛒",
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
        "v3": "tirato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "spingere",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "spingere / spingere il pulsante / spingere il carrello",
        "opposite": "tirare",
        "oppositeEmoji": "🚜",
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
        "classification": "regular",
        "aspect": "action",
        "v3": "spinto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "trasportare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "trasportare / trasportare una borsa / trasportare note",
        "form": "verb",
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
        "aspect": "action",
        "v3": "trasportato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "rompere",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "rompere / rompere il vetro",
        "synonyms": ["fare una pausa"],
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
        "v3": "rotto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "ricevere",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "ricevere / ricevere un email / ricevere un pagamento",
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
        "v3": "ricevuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "essere d accordo",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "essere d accordo / essere d accordo con qualcuno",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere la stessa opinione di qualcuno.",
                "examples": [
                    "Sono d accordo con te.",
                    "Siamo d accordo sul piano."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "stato d accordo",
        "group": "locution",
        "auxiliary": "essere"
    },
    {
        "word": "disegnare",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "disegnare / disegnare un immagine / disegnare una linea",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un immagine con una penna o una matita.",
                "examples": [
                    "Mi piace disegnare uccelli.",
                    "Puoi disegnare una mappa?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "disegnato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "condividere",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "condividere / condividere una stanza / condividere un idea",
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
        "classification": "regular",
        "aspect": "action",
        "v3": "condiviso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "sorridere",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "sorridere / sorridere a qualcuno / sorridere ampiamente",
        "opposite": "piangere",
        "oppositeEmoji": "😢",
        "form": "verb",
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
        "aspect": "action",
        "v3": "sorriso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "piangere",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "piangere / piangere per aiuto / piangere per qualcosa",
        "opposite": "sorridere",
        "oppositeEmoji": "😊",
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
        "classification": "regular",
        "aspect": "action",
        "v3": "pianto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "ballare",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "ballare / ballare a tempo di musica / andare a ballare",
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
        "v3": "ballato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "cantare",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "cantare / cantare una canzone / cantare insieme",
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
        "classification": "irregular",
        "aspect": "action",
        "v3": "cantato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "saltare",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "saltare / saltare in alto / saltare oltre",
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
        "v3": "saltato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "nuotare",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "nuotare / andare a nuotare / nuotare vasche",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi attraverso l acqua usando braccia e gambe.",
                "examples": [
                    "Nuoto ogni mattina.",
                    "Sai nuotare?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "nuotato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "studiare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "studiare / studiare inglese / studiare per un esame",
        "form": "verb",
        "definitions": [
            {
                "text": "Passare del tempo a imparare un argomento.",
                "examples": [
                    "Studio l inglese a scuola.",
                    "Sta studiando per i suoi esami."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "studiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "insegnare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "insegnare / insegnare a qualcuno / insegnare un argomento",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare conoscenza agli altri.",
                "examples": [
                    "Insegno inglese.",
                    "Insegna in un università."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "insegnato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "fare il pendolare",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "fare il pendolare",
        "synonyms": ["pendolarismo quotidiano", "lungo pendolarismo"],
        "form": "verb",
        "definitions": [
            {
                "text": "Viaggiare per una certa distanza tra la propria casa e il posto di lavoro regolarmente.",
                "examples": [
                    "Faccio il pendolare verso la città in treno."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "fatto il pendolare",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "affittare",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "affittare / affittare un appartamento / affittare una stanza",
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
        "v3": "affittato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "esercitarsi",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
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
        "v3": "esercitato",
        "subtext": "esercitarsi / esercitarsi regolarmente / esercitarsi in palestra",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "costare",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere un certo prezzo.",
                "examples": [
                    "L appartamento costa molto."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "costato",
        "subtext": "costare / costare molto / costare soldi",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "invitare",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
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
        "v3": "invitato",
        "subtext": "invitare / invitare qualcuno / invitare a cena",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "alzarsi",
        "definitions": [
            {
                "text": "Alzarsi dal letto dopo essersi svegliati.",
                "examples": [
                    "Si alza alle sette e fa subito il caffè."
                ]
            }
        ],
        "subtext": "alzarsi presto / alzarsi tardi / alzarsi velocemente",
        "classification": "irregular",
        "aspect": "action",
        "v3": "alzato",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "fare colazione",
        "definitions": [
            {
                "text": "Fare il pasto del mattino.",
                "examples": [
                    "Fa sempre colazione prima di uscire di casa."
                ]
            }
        ],
        "subtext": "fare colazione a casa",
        "synonyms": ["colazione veloce", "saltare la colazione"],
        "classification": "irregular",
        "aspect": "action",
        "v3": "fatto colazione",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "locution",
        "auxiliary": "avere"
    },
    {
        "word": "tornare",
        "definitions": [
            {
                "text": "Tornare in un luogo.",
                "examples": [
                    "Torna dal pranzo alle due."
                ]
            }
        ],
        "subtext": "tornare a casa / tornare tardi / tornare da un viaggio",
        "classification": "irregular",
        "aspect": "action",
        "v3": "tornato",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "andare a letto",
        "definitions": [
            {
                "text": "Mettersi a letto per dormire.",
                "examples": [
                    "Vanno a letto alle undici ogni sera."
                ]
            }
        ],
        "subtext": "andare a letto presto / andare a letto tardi / andare a letto stanchi",
        "classification": "irregular",
        "aspect": "action",
        "v3": "andato a letto",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "controllare",
        "definitions": [
            {
                "text": "Esaminare o verificare qualcosa.",
                "examples": [
                    "Controllo le mie email come prima cosa ogni mattina."
                ]
            }
        ],
        "subtext": "controllare le email / controllare i messaggi / controllare un documento",
        "classification": "regular",
        "aspect": "action",
        "v3": "controllato",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "rispondere",
        "definitions": [
            {
                "text": "Rispondere a un messaggio o a una domanda.",
                "examples": [
                    "Risponde sempre alle email il giorno stesso."
                ]
            }
        ],
        "subtext": "rispondere a un email / rispondere velocemente / rispondere a un messaggio",
        "classification": "regular",
        "aspect": "action",
        "v3": "risposto",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "presentare",
        "definitions": [
            {
                "text": "Mostrare o spiegare qualcosa a un gruppo.",
                "examples": [
                    "Presenta i risultati ogni venerdì pomeriggio."
                ]
            }
        ],
        "subtext": "presentare un rapporto / presentare idee / presentare a un cliente",
        "classification": "regular",
        "aspect": "action",
        "v3": "presentato",
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "partecipare",
        "definitions": [
            {
                "text": "Andare a un evento o a una riunione.",
                "examples": [
                    "Partecipo a una riunione di direzione ogni lunedì."
                ]
            }
        ],
        "subtext": "partecipare a una riunione / partecipare a un evento",
        "synonyms": ["frequentare un corso"],
        "classification": "regular",
        "aspect": "action",
        "v3": "partecipato",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "gestire",
        "definitions": [
            {
                "text": "Essere responsabile di persone o di una situazione.",
                "examples": [
                    "Gestisce un team di otto persone."
                ]
            }
        ],
        "subtext": "gestire un team / gestire un progetto / gestire il tempo",
        "classification": "regular",
        "aspect": "action",
        "v3": "gestito",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "addebitare",
        "definitions": [
            {
                "text": "Chiedere una somma di denaro per un servizio.",
                "examples": [
                    "Il meccanico ha addebitato trecento euro."
                ]
            }
        ],
        "subtext": "addebitare una tariffa / far pagare un servizio",
        "synonyms": ["far pagare extra"],
        "classification": "regular",
        "aspect": "action",
        "v3": "addebitato",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "permettersi",
        "definitions": [
            {
                "text": "Avere abbastanza soldi per qualcosa.",
                "examples": [
                    "Non possono permettersi di comprare un appartamento in centro città."
                ]
            }
        ],
        "subtext": "permettersi una casa / permettersi di viaggiare / permettersi qualcosa",
        "classification": "regular",
        "aspect": "stative",
        "v3": "permesso",
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "dovere",
        "definitions": [
            {
                "text": "Essere tenuti a pagare soldi a qualcuno.",
                "examples": [
                    "Deve alla banca cinquantamila euro."
                ]
            }
        ],
        "subtext": "dovere dei soldi / dovere a qualcuno / dovere molto",
        "classification": "regular",
        "aspect": "stative",
        "v3": "dovuto",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "guadagnare",
        "definitions": [
            {
                "text": "Ricevere denaro per il lavoro svolto.",
                "examples": [
                    "Guadagna un buon stipendio come project manager."
                ]
            }
        ],
        "subtext": "guadagnare uno stipendio / guadagnare soldi / guadagnare di più",
        "classification": "regular",
        "aspect": "action",
        "v3": "guadagnato",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "visitare",
        "definitions": [
            {
                "text": "Andare a vedere una persona o un luogo.",
                "examples": [
                    "Visita i suoi genitori a fine settimana alterni."
                ]
            }
        ],
        "subtext": "visitare la famiglia / andare a trovare un amico / visitare una città",
        "classification": "regular",
        "aspect": "action",
        "v3": "visitato",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "festeggiare",
        "definitions": [
            {
                "text": "Fare qualcosa di piacevole per un occasione speciale.",
                "examples": [
                    "Festeggiano ogni anniversario di lavoro insieme."
                ]
            }
        ],
        "subtext": "festeggiare un compleanno / festeggiare il successo / festeggiare insieme",
        "classification": "regular",
        "aspect": "action",
        "v3": "festeggiato",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "consigliare",
        "definitions": [
            {
                "text": "Suggerire qualcosa come buono o adatto.",
                "examples": [
                    "Puoi consigliare un buon ristorante vicino all ufficio?"
                ]
            }
        ],
        "subtext": "consigliare un posto / consigliare un film",
        "synonyms": ["raccomandare qualcuno"],
        "classification": "regular",
        "aspect": "action",
        "v3": "consigliato",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "far male",
        "definitions": [
            {
                "text": "Causare dolore; o sentire dolore.",
                "examples": [
                    "Mi fa male la schiena dopo essere stato seduto tutto il giorno."
                ]
            }
        ],
        "subtext": "farsi male alla schiena / far male a qualcuno",
        "synonyms": ["fa male"],
        "classification": "irregular",
        "aspect": "both",
        "v3": "fatto male",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "riposare",
        "definitions": [
            {
                "text": "Smettere di lavorare e rilassarsi per recuperare energia.",
                "examples": [
                    "Riposa per un ora dopo pranzo ogni giorno."
                ]
            }
        ],
        "subtext": "riposare a casa / riposare dopo il lavoro / aver bisogno di riposo",
        "classification": "regular",
        "aspect": "action",
        "v3": "riposato",
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "guarire",
        "definitions": [
            {
                "text": "Tornare in buona salute dopo una malattia o un infortunio.",
                "examples": [
                    "Sta guarendo da un infortunio alla schiena."
                ]
            }
        ],
        "subtext": "guarire da una malattia / guarire velocemente / guarire completamente",
        "classification": "regular",
        "aspect": "action",
        "v3": "guarito",
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "ire",
        "auxiliary": "essere"
    },
    {
        "word": "prenotare",
        "definitions": [
            {
                "text": "Riservare un posto, un biglietto o un servizio in anticipo.",
                "examples": [
                    "Prenoto sempre gli hotel online."
                ]
            }
        ],
        "subtext": "prenotare un hotel / prenotare un volo / prenotare un tavolo",
        "classification": "regular",
        "aspect": "action",
        "v3": "prenotato",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "fare le valigie",
        "definitions": [
            {
                "text": "Mettere gli oggetti in una borsa o in una valigia per un viaggio.",
                "examples": [
                    "Fa le valigie la sera prima di un viaggio."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["fare lo zaino", "fare i bagagli", "fare bagagli leggeri"],
        "classification": "regular",
        "aspect": "action",
        "v3": "fatto le valigie",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "annullare",
        "definitions": [
            {
                "text": "Decidere che qualcosa di pianificato non avverrà.",
                "examples": [
                    "Ha dovuto annullare il suo volo a causa di una malattia."
                ]
            }
        ],
        "subtext": "annullare un volo / annullare una prenotazione / annullare una riunione",
        "classification": "regular",
        "aspect": "action",
        "v3": "annullato",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "perdere",
        "definitions": [
            {
                "text": "Non riuscire a prendere un mezzo di trasporto; o sentirsi tristi per l assenza.",
                "examples": [
                    "Ha perso il treno e ha dovuto aspettare un ora."
                ]
            }
        ],
        "subtext": "perdere un treno / perdere un volo / sentire la mancanza di qualcuno",
        "classification": "regular",
        "aspect": "both",
        "v3": "perso",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "ordinare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "ordinare cibo / ordinare da bere / ordinare online",
        "form": "verb",
        "definitions": [
            {
                "text": "Richiedere qualcosa formalmente, specialmente cibo o merci.",
                "examples": [
                    "Ordino sempre il pranzo dallo stesso posto vicino all ufficio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ordinato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "spiegare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💡",
        "subtext": "spiegare un processo / spiegare chiaramente / spiegare a qualcuno",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere qualcosa chiaro fornendo dettagli.",
                "examples": [
                    "Spiega sempre il processo ai nuovi membri del team."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "spiegato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "ringraziare",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "ringraziare qualcuno / ringraziare per",
        "synonyms": ["molte grazie"],
        "form": "verb",
        "definitions": [
            {
                "text": "Esprimere gratitudine a qualcuno.",
                "examples": [
                    "Ha ringraziato il team per il duro lavoro sul progetto."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ringraziato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "presentare",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "presentare qualcuno / presentare un argomento",
        "synonyms": ["presentarsi"],
        "form": "verb",
        "definitions": [
            {
                "text": "Presentare qualcuno a un altra persona.",
                "examples": [
                    "Si è presentata all inizio della riunione."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "presentato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "rilassarsi",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "rilassarsi a casa / rilassarsi dopo il lavoro / rilassarsi in vacanza",
        "form": "verb",
        "definitions": [
            {
                "text": "Smettere di lavorare e riposare; diventare meno tesi.",
                "examples": [
                    "Mi rilasso nel fine settimana e non controllo mai le email."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "rilassato",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "riparare",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "riparare qualcosa / far riparare",
        "synonyms": ["costi di riparazione"],
        "form": "verb",
        "definitions": [
            {
                "text": "Aggiustare qualcosa che è rotto.",
                "examples": [
                    "Il proprietario è lento a riparare le cose nell appartamento."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "riparato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "succedere",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "succedere a qualcuno",
        "synonyms": ["cos è successo", "succede"],
        "form": "verb",
        "definitions": [
            {
                "text": "Aver luogo; accadere.",
                "examples": [
                    "Cos è successo alla riunione? Qualcosa è andato storto."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "successo",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "sembrare",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🎭",
        "subtext": "sembrare bene / sembrare preoccupato / sembrare felice",
        "form": "verb",
        "definitions": [
            {
                "text": "Apparire come qualcosa; dare un impressione.",
                "examples": [
                    "Sembra molto sicura di sé nelle riunioni con i clienti."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "sembrato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "significare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "significare qualcosa",
        "synonyms": ["cosa significa", "voler dire"],
        "form": "verb",
        "definitions": [
            {
                "text": "Avere un particolare significato; avere l intenzione.",
                "examples": [
                    "Cosa significa questa clausola nel contratto?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "significato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "seguire",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "seguire le istruzioni / seguire qualcuno / seguire le notizie",
        "form": "verb",
        "definitions": [
            {
                "text": "Venire dopo; obbedire a regole o istruzioni.",
                "examples": [
                    "Per favore segui attentamente le istruzioni. Lui segue le notizie."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "seguito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "continuare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "continuare a lavorare / continuare a fare / continuare un compito",
        "form": "verb",
        "definitions": [
            {
                "text": "Continuare a fare qualcosa senza fermarsi.",
                "examples": [
                    "Ha continuato a lavorare dopo le sei nonostante si sentisse male."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "continuato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "crescere",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "far crescere un azienda / crescere velocemente",
        "synonyms": ["trasformarsi in"],
        "form": "verb",
        "definitions": [
            {
                "text": "Aumentare di dimensioni o quantità; svilupparsi.",
                "examples": [
                    "L azienda è cresciuta del venti percento l anno scorso."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "cresciuto",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "includere",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "includere qualcosa / includere in",
        "synonyms": ["non incluso"],
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere qualcosa parte di un tutto.",
                "examples": [
                    "Il prezzo include la colazione e la cena."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "incluso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "diventare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "diventare manager / diventare popolare / diventare chiaro",
        "form": "verb",
        "definitions": [
            {
                "text": "Iniziare a essere qualcosa.",
                "examples": [
                    "È diventata manager dopo soli due anni nel ruolo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "diventato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "appartenere",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "appartenere a qualcuno / appartenere a",
        "synonyms": ["sentirsi a casa"],
        "form": "verb",
        "definitions": [
            {
                "text": "Essere di proprietà di qualcuno; essere un membro.",
                "examples": [
                    "Quel conto appartiene al dipartimento finanziario."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "appartenuto",
        "group": "ere",
        "auxiliary": "essere"
    },
    {
        "word": "scegliere",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "scegliere tra / scegliere di fare / scegliere con cura",
        "form": "verb",
        "definitions": [
            {
                "text": "Selezionare tra opzioni.",
                "examples": [
                    "Ha scelto di lavorare a tempo parziale per passare più tempo con la famiglia."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "scelto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "costruire",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "costruire una carriera / costruire un team / costruire fiducia",
        "form": "verb",
        "definitions": [
            {
                "text": "Costruire qualcosa; sviluppare qualcosa nel tempo.",
                "examples": [
                    "Ha costruito una solida reputazione in dieci anni."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "costruito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "cominciare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Iniziare a fare qualcosa.",
                "examples": [
                    "Cominciamo la riunione alle nove."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "cominciato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "finire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Finire ; fermarsi.",
                "examples": [
                    "La lezione finisce alle tre."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "finito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "spazzolare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪥",
        "form": "verb",
        "definitions": [
            {
                "text": "Pulire qualcosa con una spazzola.",
                "examples": [
                    "Mi spazzolo i denti ogni mattina."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "spazzolato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "cavalcare",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚲",
        "form": "verb",
        "definitions": [
            {
                "text": "Viaggiare in bicicletta o a cavallo.",
                "examples": [
                    "Vado al lavoro in bicicletta."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "cavalcato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sognare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💭",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere immagini o idee in mente durante il sonno.",
                "examples": [
                    "Ho sognato una vacanza ieri notte."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "sognato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "credere",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🙏",
        "form": "verb",
        "definitions": [
            {
                "text": "Pensare che qualcosa sia vero.",
                "examples": [
                    "Ti credo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "creduto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "preferire",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "form": "verb",
        "definitions": [
            {
                "text": "Preferire una cosa a un'altra.",
                "examples": [
                    "Preferisco il tè al caffè."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "preferito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "prendere",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🧤",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendere qualcosa ; salire su un autobus o un treno.",
                "examples": [
                    "Devo prendere l'autobus alle otto."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "preso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "riparare",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "form": "verb",
        "definitions": [
            {
                "text": "Riparare qualcosa che è rotto.",
                "examples": [
                    "Puoi riparare il mio telefono?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "riparato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "creare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🎨",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare qualcosa di nuovo.",
                "examples": [
                    "Lei crea bellissimi siti web."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "creato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "notare",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👀",
        "form": "verb",
        "definitions": [
            {
                "text": "Vedere o diventare consapevoli di qualcosa.",
                "examples": [
                    "Hai notato il nuovo ufficio?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "notato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "migliorare",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📈",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere qualcosa migliore.",
                "examples": [
                    "Voglio migliorare il mio italiano."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "migliorato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "preparare",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🥘",
        "form": "verb",
        "definitions": [
            {
                "text": "Preparare qualcosa.",
                "examples": [
                    "Lui prepara la cena."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "preparato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "organizzare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📂",
        "form": "verb",
        "definitions": [
            {
                "text": "Pianificare o organizzare qualcosa.",
                "examples": [
                    "Lei organizza tutte le riunioni."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "organizzato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "pianificare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "form": "verb",
        "definitions": [
            {
                "text": "Decidere cosa farai.",
                "examples": [
                    "Stiamo pianificando un viaggio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "pianificato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "prendere in prestito",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📥",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendere qualcosa per un breve periodo e poi restituirlo.",
                "examples": [
                    "Posso prendere in prestito la tua penna?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "preso in prestito",
        "group": "locution",
        "auxiliary": "avere"
    },
    {
        "word": "prestare",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📤",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare qualcosa per un breve periodo.",
                "examples": [
                    "Posso prestarti dei soldi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "prestato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "odorare",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👃",
        "form": "verb",
        "definitions": [
            {
                "text": "Notare o riconoscere qualcosa con il naso.",
                "examples": [
                    "Sento l'odore del caffè."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "odorato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "assaggiare",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "👅",
        "form": "verb",
        "definitions": [
            {
                "text": "Sentire il sapore di qualcosa in bocca.",
                "examples": [
                    "Assaggia questa zuppa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "assaggiato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sdraiarsi",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "form": "verb",
        "definitions": [
            {
                "text": "Essere in posizione orizzontale su una superficie.",
                "examples": [
                    "Mi piace sdraiarmi sulla spiaggia."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "sdraiato",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "ridere",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😂",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare suoni con la voce perché pensi che qualcosa sia divertente.",
                "examples": [
                    "Ridevano della sua battuta."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "riso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "preoccuparsi",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "verb",
        "definitions": [
            {
                "text": "Pensare a problemi o cose spiacevoli che potrebbero accadere.",
                "examples": [
                    "Non preoccuparti, andrà tutto bene."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "preoccupato",
        "group": "riflessivo",
        "auxiliary": "essere"
    },
    {
        "word": "suonare",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👂",
        "form": "verb",
        "definitions": [
            {
                "text": "Sembrare qualcosa da quello che hai sentito o letto.",
                "examples": [
                    "Sembra una buona idea."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "suonato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "compitare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔤",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire o scrivere le lettere di una parola nell'ordine corretto.",
                "examples": [
                    "Come si compita il tuo nome?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "compitato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "indicare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "☝️",
        "form": "verb",
        "definitions": [
            {
                "text": "Mostrare qualcosa tenendo il dito verso di esso.",
                "examples": [
                    "Indica la finestra."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "indicato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "gridare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "📢",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire qualcosa a voce molto alta.",
                "examples": [
                    "Non gridare in classe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "gridato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "salutare",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👋",
        "form": "verb",
        "definitions": [
            {
                "text": "Muovere la mano da un lato all'altro per dire ciao o arrivederci.",
                "examples": [
                    "Saluta il tuo amico con la mano."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "salutato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "calciare",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🦶",
        "form": "verb",
        "definitions": [
            {
                "text": "Colpire qualcosa con il piede.",
                "examples": [
                    "Calcia la palla!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "calciato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "lanciare",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "⚾",
        "form": "verb",
        "definitions": [
            {
                "text": "Far muovere qualcosa nell'aria spingendolo dalla mano.",
                "examples": [
                    "Puoi lanciarmi la palla?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "lanciato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "rimbalzare",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏀",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi verso l'alto o lontano dopo aver colpito una superficie.",
                "examples": [
                    "La palla rimbalza."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "rimbalzato",
        "group": "are",
        "auxiliary": "essere"
    },
    {
        "word": "dipingere",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "emoji": "🎨",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un'immagine usando la pittura.",
                "examples": [
                    "Mi piace dipingere fiori."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "dipinto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "saltellare",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🐇",
        "form": "verb",
        "definitions": [
            {
                "text": "Saltare su un piede.",
                "examples": [
                    "Puoi saltellare come un coniglio?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "saltellato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "saltare",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏃",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi saltando da un piede all'altro.",
                "examples": [
                    "I bambini saltano la corda nel parco giochi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "saltato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "contare",
        "level": "starter",
        "theme": "numbers_0_9_A1",
        "emoji": "🔢",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire i numeri in ordine.",
                "examples": [
                    "Puoi contare da uno a dieci?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "contato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "segnare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "✅",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere un segno (v) accanto a qualcosa per mostrare che è corretto.",
                "examples": [
                    "Segna la risposta corretta."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "segnato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "barrare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "❌",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere un segno (X) accanto a qualcosa per mostrare che è sbagliato.",
                "examples": [
                    "Barra la risposta sbagliata."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "barrato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "colorare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🖍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare una penna o una matita per mettere il colore su un'immagine.",
                "examples": [
                    "Colora l'immagine di blu."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "colorato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "tenere",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🤲",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere o tenere qualcosa nelle mani o nelle braccia.",
                "examples": [
                    "Tieni il bambino con cura."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "tenuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "guidare",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "form": "verb",
        "definitions": [
            {
                "text": "Controllare un gruppo di persone, un paese o una situazione.",
                "examples": [
                    "Lei guida una piccola squadra."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "guidato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "combattere",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "⚔️",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare la forza fisica per cercare di ferire qualcuno o vincere qualcosa.",
                "examples": [
                    "I due ragazzi stanno combattendo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "combattuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "nascondere",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🙈",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere qualcosa o qualcuno in un posto dove non possono essere visti.",
                "examples": [
                    "Si nasconde dietro la porta."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "nascondo",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "cercare",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🔍",
        "form": "verb",
        "definitions": [
            {
                "text": "Cercare di trovare o ottenere qualcosa.",
                "examples": [
                    "Stanno giocando a nascondino."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "cercato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "suonare",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🔔",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un suono come una campana.",
                "examples": [
                    "Il telefono squilla."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "suonato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "mandare un SMS",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "📱",
        "form": "verb",
        "definitions": [
            {
                "text": "Inviare un messaggio da un telefono cellulare.",
                "examples": [
                    "Mandami un SMS quando arrivi."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "mandato un SMS",
        "group": "locution",
        "auxiliary": "avere"
    },
    {
        "word": "sussurrare",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🤫",
        "form": "verb",
        "definitions": [
            {
                "text": "Parlare molto piano in modo che gli altri non possano sentirti.",
                "examples": [
                    "Mi ha sussurrato la risposta."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "sussurrato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "toccare",
        "level": "starter",
        "theme": "five_senses_A1",
        "emoji": "🫫",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere la mano o un'altra parte del corpo su qualcosa.",
                "examples": [
                    "Non toccare la vernice fresca!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "toccato",
        "group": "are",
        "auxiliary": "avere"
    },
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();