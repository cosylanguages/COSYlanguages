(function() {
    const data = [
    {
        "word": "essere",
        "level": "starter",
        "theme": "name_greeting_A0",
        "emoji": "👤",
        "subtext": "essere stanco / essere felice / essere al lavoro / essere pronto",
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
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "avere un lavoro / avere un problema / avere tempo",
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
        "word": "fare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "fare il lavoro / fare la spesa / fare esercizio / non fare nulla",
        "form": "verb",
        "definitions": [
            {
                "text": "Compiere un'azione o un'attività; creare o produrre qualcosa.",
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
        "word": "andare",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🚶",
        "subtext": "andare al lavoro / andare a casa / uscire / fare shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "Spostarsi da un luogo a un altro.",
                "examples": [
                    "Vado al lavoro in autobus.",
                    "Lei va dal dottore."
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
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🏃‍♂️",
        "subtext": "venire a casa / venire al lavoro / tornare / venire qui",
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
        "group": "ire",
        "v3": "venuto"
    },
    {
        "word": "mangiare",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍎",
        "subtext": "mangiare la colazione / mangiare il pranzo / mangiare la cena / mangiare fuori",
        "opposite": "bere",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere cibo in bocca e deglutire.",
                "examples": [
                    "Mangiamo la cena alle sette.",
                    "Lui mangia il pranzo alla sua scrivania."
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
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "bere caffè / bere tè / bere acqua / bere birra",
        "opposite": "mangiare",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendere un liquido in bocca e deglutire.",
                "examples": [
                    "Lei beve caffè ogni mattina.",
                    "Io bevo acqua."
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
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "😴",
        "subtext": "dormire bene / dormire male / dormire otto ore / dormire tardi",
        "opposite": "svegliarsi",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Riposare con gli occhi chiusi in uno stato naturale di incoscienza.",
                "examples": [
                    "Lui dorme sette ore a notte.",
                    "Io dormo male."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "ire",
        "v3": "dormito"
    },
    {
        "word": "lavorare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "lavorare da casa / lavorare a tempo pieno / lavorare sodo / lavorare fino a tardi",
        "form": "verb",
        "definitions": [
            {
                "text": "Svolgere un lavoro per guadagnare denaro.",
                "examples": [
                    "Lei lavora in un ospedale.",
                    "Io lavoro da casa."
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
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "vivere in un appartamento / vivere da soli / vivere con qualcuno / vivere all'estero",
        "opposite": "morire",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere la propria casa in un luogo; essere vivo.",
                "examples": [
                    "Lui vive in un appartamento vicino al centro.",
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
        "word": "piacere",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "👍",
        "subtext": "mi piace il lavoro / mi piace viaggiare / mi piace l'idea",
        "form": "verb",
        "definitions": [
            {
                "text": "Trovare qualcosa di piacevole; gradire.",
                "examples": [
                    "Mi piace il mio lavoro.",
                    "A lei piace cucinare.",
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
        "word": "volere",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🙏",
        "subtext": "volere un lavoro / volere partire / volere più soldi / volere aiuto",
        "form": "verb",
        "definitions": [
            {
                "text": "Desiderare o augurarsi qualcosa.",
                "examples": [
                    "Voglio un caffè.",
                    "Lei vuole un lavoro migliore.",
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
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "🆘",
        "subtext": "bisogno di aiuto / bisogno di tempo / bisogno di soldi / bisogno di riposare",
        "form": "verb",
        "definitions": [
            {
                "text": "Richiedere qualcosa; sentire che qualcosa è necessario.",
                "examples": [
                    "Ho bisogno di una pausa.",
                    "Lei ha bisogno di aiuto.",
                    "Abbiamo bisogno di più tempo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "locution",
        "v3": "avuto bisogno"
    },
    {
        "word": "vedere",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👁️",
        "subtext": "vedere un dottore / vedere gli amici / vedere il problema / vedere chiaramente",
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
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👂",
        "subtext": "udire notizie / udire qualcuno / udire un suono / udire chiaramente",
        "form": "verb",
        "definitions": [
            {
                "text": "Percepire il suono attraverso le orecchie.",
                "examples": [
                    "Odo l'allarme ogni mattina.",
                    "Puoi udirmi?."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "ire",
        "v3": "udito"
    },
    {
        "word": "sentire",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🌡️",
        "subtext": "sentirsi stanco / sentirsi meglio / sentirsi bene / sentirsi stressato",
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
        "word": "sapere",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "conoscere qualcuno / sapere la risposta / conoscere un posto / sapere come fare",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere informazioni o consapevolezza di qualcosa.",
                "examples": [
                    "So il suo nome.",
                    "Lei sa la risposta.",
                    "Lo conosci?."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "ere",
        "v3": "saputo"
    },
    {
        "word": "pensare",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "pensare a / pensare di / pensare che / pensare attentamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere una credenza o un'opinione; usare la mente.",
                "examples": [
                    "Penso che sia una buona idea.",
                    "Lei pensa al suo lavoro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "are",
        "v3": "pensato"
    },
    {
        "word": "parlare",
        "level": "starter",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🗣️",
        "subtext": "parlare con qualcuno / parlare italiano / parlare chiaramente / parlare a una riunione",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire parole; comunicare verbalmente.",
                "examples": [
                    "Lui parla francese.",
                    "Lei parla con il suo manager ogni giorno."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "parlato"
    },
    {
        "word": "dire",
        "level": "starter",
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
        "word": "chiedere",
        "level": "starter",
        "theme": "asking_answering_questions_A0",
        "emoji": "❓",
        "subtext": "fare una domanda / chiedere aiuto / chiedere a qualcuno / chiedere di",
        "form": "verb",
        "definitions": [
            {
                "text": "Porre una domanda a qualcuno; richiedere qualcosa.",
                "examples": [
                    "Lei fa un sacco di domande.",
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
        "word": "dare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "dare consigli / dare soldi / dare un regalo / dare informazioni",
        "opposite": "prendere",
        "oppositeEmoji": "👜",
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
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "subtext": "prendere l'autobus / prendere una medicina / fare una pausa / prendere tempo",
        "opposite": "dare",
        "oppositeEmoji": "🎁",
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
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "subtext": "ottenere un lavoro / stancarsi / migliorare / tornare a casa",
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
        "word": "pagare",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "pagare l'affitto / pagare con carta / pagare in contanti / pagare una bolletta",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare denaro per qualcosa.",
                "examples": [
                    "Pago l'affitto ogni mese.",
                    "Lui paga con carta."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "pagato"
    },
    {
        "word": "comprare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "subtext": "comprare cibo / comprare un biglietto / comprare online / comprare casa",
        "opposite": "vendere",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ottenere qualcosa in cambio di denaro.",
                "examples": [
                    "Lei compra cibo online.",
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
        "word": "aprire",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "subtext": "aprire una porta / aprire un conto / aprire un negozio / aprire alle nove",
        "opposite": "chiudere",
        "oppositeEmoji": "🔒",
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
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "subtext": "chiudere una porta / chiudere alle sei / chiudere un conto / chiudere la riunione",
        "opposite": "aprire",
        "oppositeEmoji": "📖",
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
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "iniziare il lavoro / iniziare una riunione / iniziare un nuovo lavoro / iniziare presto",
        "opposite": "finire",
        "oppositeEmoji": "🏁",
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
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finire il lavoro / finire un progetto / finire presto / finire tardi",
        "opposite": "iniziare",
        "oppositeEmoji": "▶️",
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
        "word": "usare",
        "level": "starter",
        "theme": "basic_technology_devices_A0",
        "emoji": "🛠️",
        "subtext": "usare un telefono / usare i mezzi pubblici / usare un computer / usare il tempo",
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
        "word": "camminare",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "camminare verso il lavoro / camminare verso casa / camminare lentamente / camminare ogni giorno",
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
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "subtext": "guidare verso il lavoro / guidare la macchina / guidare verso casa / guidare con prudenza",
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
        "word": "chiamare",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "📞",
        "subtext": "chiamare qualcuno / convocare una riunione / richiamare / chiamare per malattia",
        "form": "verb",
        "definitions": [
            {
                "text": "Telefonare a qualcuno.",
                "examples": [
                    "Chiamo il mio capo ogni mattina.",
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
        "word": "svegliarsi",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "svegliarsi presto, svegliarsi alle 7",
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
        "classification": "regular",
        "aspect": "action",
        "group": "are",
        "v3": "svegliato"
    },
    {
        "word": "guardare",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "guardare la TV, guardare un film",
        "definitions": [
            {
                "text": "Fissare lo sguardo su qualcosa.",
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
        "word": "leggere",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "form": "verb",
        "subtext": "leggere un libro, leggere il giornale",
        "opposite": "scrivere",
        "oppositeEmoji": "✍️",
        "definitions": [
            {
                "text": "Guardare e capire parole scritte.",
                "examples": [
                    "Leggo un libro ogni notte.",
                    "Lei sa leggere l'italiano."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "letto"
    },
    {
        "word": "scrivere",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Tracciare segni su carta o su uno schermo.",
                "examples": [
                    "Scrivo nel mio diario ogni giorno.",
                    "Lei scrive libri per bambini."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ere",
        "v3": "scritto"
    },
    {
        "word": "invitare",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Chiedere a qualcuno di venire in un luogo o a un evento.",
                "examples": [
                    "Invito degli amici a cena."
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
