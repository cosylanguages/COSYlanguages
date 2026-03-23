(function() {
    const data = [
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
        ]
    },
    {
        "word": "lavorare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "lavorare in ufficio, lavorare sodo",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un lavoro per guadagnare denaro.",
                "examples": [
                    "Lavoro cinque giorni a settimana.",
                    "Lei lavora in banca."
                ]
            }
        ]
    },
    {
        "word": "dormire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "dormire 8 ore, andare a dormire",
        "opposite": "svegliarsi",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Riposare con gli occhi chiusi.",
                "examples": [
                    "Ho bisogno di dormire.",
                    "Il bambino dorme."
                ]
            }
        ]
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
        ]
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
        ]
    },
    {
        "word": "essere",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "form": "verb",
        "definitions": [
            {
                "text": "Esistere o vivere.",
                "examples": [
                    "Io sono uno studente.",
                    "Lei è felice."
                ]
            }
        ]
    },
    {
        "word": "avere",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Possedere qualcosa.",
                "examples": [
                    "Ho una macchina rossa.",
                    "Abbiamo due gatti."
                ]
            }
        ]
    },
    {
        "word": "andare",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Spostarsi da un luogo all'altro.",
                "examples": [
                    "Vado a scuola in autobus.",
                    "Andiamo a casa."
                ]
            }
        ]
    },
    {
        "word": "mangiare",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "mangiare una mela, mangiare la cena",
        "opposite": "bere",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere cibo in bocca e deglutire.",
                "examples": [
                    "Mangio una mela ogni giorno.",
                    "Cosa vuoi mangiare?"
                ]
            }
        ]
    },
    {
        "word": "bere",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "bere acqua, bere caffè",
        "opposite": "mangiare",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendere un liquido per bocca e deglutire.",
                "examples": [
                    "Bevo molta acqua.",
                    "Vuoi bere qualcosa?"
                ]
            }
        ]
    },
    {
        "word": "fare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb",
        "definitions": [
            {
                "text": "Compiere un'azione o un'attività.",
                "examples": [
                    "Faccio i compiti nel pomeriggio.",
                    "Cosa fai ?"
                ]
            }
        ]
    },
    {
        "word": "parlare",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare la propria voce per dire parole.",
                "examples": [
                    "Parlo italiano e inglese.",
                    "Per favore, parla lentamente."
                ]
            }
        ]
    },
    {
        "word": "sapere",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere informazioni nella propria mente.",
                "examples": [
                    "So la risposta.",
                    "Sai dov'è ?"
                ]
            }
        ]
    },
    {
        "word": "pensare",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare la propria mente per avere idee o opinioni.",
                "examples": [
                    "Penso che sia una buona idea.",
                    "Cosa ne pensi ?"
                ]
            }
        ]
    },
    {
        "word": "vedere",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👁️",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare i propri occhi per guardare qualcosa.",
                "examples": [
                    "Vedo un uccello.",
                    "Hai visto quel film ?"
                ]
            }
        ]
    },
    {
        "word": "volere",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "form": "verb",
        "definitions": [
            {
                "text": "Desiderare di avere o fare qualcosa.",
                "examples": [
                    "Voglio un bicchiere d'acqua.",
                    "Voglio andare a casa."
                ]
            }
        ]
    },
    {
        "word": "amare",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "❤️",
        "form": "verb",
        "definitions": [
            {
                "text": "Provare un forte affetto per qualcuno o qualcosa.",
                "examples": [
                    "Amo la mia famiglia.",
                    "Amo viaggiare."
                ]
            }
        ]
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
        ]
    },
    {
        "word": "venire",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "form": "verb",
        "definitions": [
            {
                "text": "Spostarsi verso il luogo dove si trova chi parla.",
                "examples": [
                    "Vieni qui, per favore.",
                    "Viene alla festa."
                ]
            }
        ]
    },
    {
        "word": "dare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Consegnare qualcosa a qualcuno.",
                "examples": [
                    "Puoi darmi quel libro ?",
                    "Do dei regali alla mia famiglia."
                ]
            }
        ]
    },
    {
        "word": "prendere",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Afferrare o ottenere qualcosa.",
                "examples": [
                    "Prendo l'autobus per andare al lavoro.",
                    "Lei scatta delle belle foto."
                ]
            }
        ]
    },
    {
        "word": "trovare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "form": "verb",
        "definitions": [
            {
                "text": "Incontrare qualcosa dopo averlo cercato.",
                "examples": [
                    "Non riesco a trovare le mie chiavi.",
                    "Hai trovato la strada ?"
                ]
            }
        ]
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "Esprimere qualcosa a parole.",
                "examples": [
                    "Dimmi una storia.",
                    "Le ha detto la verità."
                ]
            }
        ]
    },
    {
        "word": "chiedere",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "form": "verb",
        "definitions": [
            {
                "text": "Rivolgersi a qualcuno per sapere o ottenere qualcosa.",
                "examples": [
                    "Devo fare una domanda.",
                    "Mi ha chiesto aiuto."
                ]
            }
        ]
    },
    {
        "word": "sentire",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "form": "verb",
        "definitions": [
            {
                "text": "Provare un'emozione o una sensazione fisica.",
                "examples": [
                    "Mi sento felice oggi.",
                    "Hai freddo ?"
                ]
            }
        ]
    },
    {
        "word": "provare",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🎯",
        "form": "verb",
        "definitions": [
            {
                "text": "Tentare di fare qualcosa.",
                "examples": [
                    "Provo a fare esercizio ogni giorno.",
                    "Prova uno di questi biscotti."
                ]
            }
        ]
    },
    {
        "word": "partire",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚪",
        "form": "verb",
        "definitions": [
            {
                "text": "Andare via da un luogo.",
                "examples": [
                    "Parto per il lavoro alle 8.",
                    "Non lasciare la borsa qui."
                ]
            }
        ]
    },
    {
        "word": "chiamare",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "form": "verb",
        "definitions": [
            {
                "text": "Telefonare a qualcuno o gridare il suo nome.",
                "examples": [
                    "Chiamami più tardi.",
                    "Ha chiamato il mio nome."
                ]
            }
        ]
    },
    {
        "word": "utilizzare",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "form": "verb",
        "definitions": [
            {
                "text": "Servirsi di qualcosa per compiere un compito.",
                "examples": [
                    "Uso un computer per il lavoro.",
                    "Posso usare la tua penna ?"
                ]
            }
        ]
    },
    {
        "word": "ottenere",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "form": "verb",
        "definitions": [
            {
                "text": "Ricevere o comprare qualcosa.",
                "examples": [
                    "Ricevo molte e-mail.",
                    "Puoi prendere del latte ?"
                ]
            }
        ]
    },
    {
        "word": "iniziare",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Cominciare a fare qualcosa.",
                "examples": [
                    "Il film inizia alle 19.",
                    "Iniziamo la riunione."
                ]
            }
        ]
    },
    {
        "word": "aiutare",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare qualcosa per qualcuno per rendere un compito più facile.",
                "examples": [
                    "Puoi aiutarmi ?",
                    "Aiuto mia madre con la spesa."
                ]
            }
        ]
    },
    {
        "word": "giocare",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "form": "verb",
        "definitions": [
            {
                "text": "Divertirsi o partecipare a un gioco.",
                "examples": [
                    "Gioco a calcio con i miei amici.",
                    "Le piace giocare ai videogiochi."
                ]
            }
        ]
    },
    {
        "word": "correre",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi molto velocemente sulle proprie gambe.",
                "examples": [
                    "Corro nel parco.",
                    "Corre per prendere l'autobus."
                ]
            }
        ]
    },
    {
        "word": "vivere",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere la propria casa in un luogo particolare.",
                "examples": [
                    "Vivo a Londra.",
                    "Vive con la sua famiglia."
                ]
            }
        ]
    },
    {
        "word": "portare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendere qualcuno o qualcosa con sé in un luogo.",
                "examples": [
                    "Per favore, portami un bicchiere d'acqua.",
                    "Porta il pranzo al lavoro."
                ]
            }
        ]
    },
    {
        "word": "sedersi",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "Poggiare il proprio peso sul sedere invece che sui piedi.",
                "examples": [
                    "Per favore, siediti.",
                    "Mi siedo su una sedia."
                ]
            }
        ]
    },
    {
        "word": "stare in piedi",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "Essere sui propri piedi in posizione eretta.",
                "examples": [
                    "Per favore, stai in piedi.",
                    "È in piedi vicino alla porta."
                ]
            }
        ]
    },
    {
        "word": "perdere",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "Fallire nel vincere o non riuscire a trovare qualcosa.",
                "examples": [
                    "Non voglio perdere la partita.",
                    "Perdo spesso le chiavi."
                ]
            }
        ]
    },
    {
        "word": "pagare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare denaro per qualcosa.",
                "examples": [
                    "Pago il mio caffè.",
                    "Come vuoi pagare ?"
                ]
            }
        ]
    },
    {
        "word": "incontrare",
        "level": "starter",
        "theme": "society_politics",
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
        ]
    },
    {
        "word": "imparare",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📚",
        "form": "verb",
        "definitions": [
            {
                "text": "Ottenere conoscenza o un'abilità.",
                "examples": [
                    "Voglio imparare l'italiano.",
                    "I bambini imparano in fretta."
                ]
            }
        ]
    },
    {
        "word": "cambiare",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere qualcosa diverso.",
                "examples": [
                    "Voglio cambiare i miei vestiti.",
                    "Il tempo cambia rapidamente."
                ]
            }
        ]
    },
    {
        "word": "capire",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💡",
        "form": "verb",
        "definitions": [
            {
                "text": "Conoscere il significato di qualcosa.",
                "examples": [
                    "Non capisco questa parola.",
                    "Capisci l'italiano ?"
                ]
            }
        ]
    },
    {
        "word": "fermarsi",
        "level": "starter",
        "theme": "time",
        "emoji": "🛑",
        "form": "verb",
        "definitions": [
            {
                "text": "Finire di fare qualcosa o non muoversi più.",
                "examples": [
                    "Ferma la macchina.",
                    "Per favore, smetti di parlare."
                ]
            }
        ]
    },
    {
        "word": "aggiungere",
        "level": "starter",
        "theme": "numbers_math",
        "emoji": "➕",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere insieme delle cose per formare un gruppo più grande.",
                "examples": [
                    "Aggiungi dello zucchero al tè.",
                    "Quanto fa cinque più cinque ?"
                ]
            }
        ]
    },
    {
        "word": "spendere",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare denaro per pagare le cose.",
                "examples": [
                    "Spendo molto denaro per il cibo."
                ]
            }
        ]
    },
    {
        "word": "aprire",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Spostare qualcosa in modo che un'apertura non sia coperta.",
                "examples": [
                    "Apri la porta.",
                    "Puoi aprire la finestra ?"
                ]
            }
        ]
    },
    {
        "word": "vincere",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "Essere il migliore in un gioco o in una competizione.",
                "examples": [
                    "Vogliamo vincere la partita."
                ]
            }
        ]
    },
    {
        "word": "camminare",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi sulle proprie gambe a velocità normale.",
                "examples": [
                    "Cammino verso scuola.",
                    "Facciamo una camminata nel parco."
                ]
            }
        ]
    },
    {
        "word": "ricordare",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb",
        "definitions": [
            {
                "text": "Mantenere le informazioni nella propria mente.",
                "examples": [
                    "Ricordo il tuo nome.",
                    "Ti ricordi di me ?"
                ]
            }
        ]
    },
    {
        "word": "comprare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Ottenere qualcosa pagando denaro.",
                "examples": [
                    "Voglio comprare un nuovo telefono.",
                    "Dove posso comprare del latte ?"
                ]
            }
        ]
    },
    {
        "word": "morire",
        "level": "starter",
        "theme": "health_body",
        "emoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Smettere di vivere.",
                "examples": [
                    "Le piante muoiono senza acqua."
                ]
            }
        ]
    },
    {
        "word": "inviare",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare in modo che qualcosa vada verso un luogo.",
                "examples": [
                    "Invio un'e-mail ogni mattina.",
                    "Puoi inviarmi una foto ?"
                ]
            }
        ]
    },
    {
        "word": "cadere",
        "level": "starter",
        "theme": "environment_nature",
        "emoji": "🍂",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi verso il basso verso il suolo.",
                "examples": [
                    "Le foglie cadono in autunno.",
                    "Fai attenzione, non cadere."
                ]
            }
        ]
    },
    {
        "word": "tagliare",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare un coltello o le forbici per dividere qualcosa.",
                "examples": [
                    "Taglio il pane.",
                    "Puoi tagliare la carta ?"
                ]
            }
        ]
    },
    {
        "word": "passare",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🏔️",
        "form": "verb",
        "definitions": [
            {
                "text": "Oltrepassare qualcosa o superare un esame.",
                "examples": [
                    "Passo davanti al parco tornando a casa.",
                    "Spero di passare l'esame."
                ]
            }
        ]
    },
    {
        "word": "vendere",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare qualcosa a qualcuno in cambio di denaro.",
                "examples": [
                    "Vendono frutta al mercato."
                ]
            }
        ]
    },
    {
        "word": "tirare",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "Spostare qualcosa verso di sé.",
                "examples": [
                    "Tira la porta per aprirla."
                ]
            }
        ]
    },
    {
        "word": "spingere",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Spostare qualcosa lontano da sé.",
                "examples": [
                    "Spingi il bottone.",
                    "Spingo il carrello della spesa."
                ]
            }
        ]
    },
    {
        "word": "sperare",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🤞",
        "form": "verb",
        "definitions": [
            {
                "text": "Volere che qualcosa accada.",
                "examples": [
                    "Spero che tu ti senta meglio.",
                    "Speriamo di vederti presto."
                ]
            }
        ]
    },
    {
        "word": "cucinare",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "verb",
        "definitions": [
            {
                "text": "Preparare il cibo scaldandolo.",
                "examples": [
                    "Cucino la cena per la mia famiglia.",
                    "Le piace cucinare."
                ]
            }
        ]
    },
    {
        "word": "chiudere",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere qualcosa in posizione chiusa.",
                "examples": [
                    "Chiudi la porta.",
                    "Non dimenticare di chiudere la finestra."
                ]
            }
        ]
    },
    {
        "word": "finire",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Terminare un'azione.",
                "examples": [
                    "Finisco il mio lavoro alle 17.",
                    "Hai finito il tuo libro ?"
                ]
            }
        ]
    },
    {
        "word": "noleggiare",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Pagare denaro per usare una casa o un appartamento che appartiene a qualcun altro.",
                "examples": [
                    "Noleggiamo un appartamento in città."
                ]
            }
        ]
    },
    {
        "word": "risparmiare",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Tenere il denaro invece di spenderlo.",
                "examples": [
                    "Lei risparmia denaro ogni mese."
                ]
            }
        ]
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
                    "L'appartamento costa molto."
                ]
            }
        ]
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
        ]
    },
    {
        "word": "viaggiare",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "form": "verb",
        "definitions": [
            {
                "text": "Andare da un luogo all'altro.",
                "examples": [
                    "Amo viaggiare.",
                    "Viaggiamo in treno."
                ]
            }
        ]
    },
    {
        "word": "pulire",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧹",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere pulito qualcosa.",
                "examples": [
                    "Pulisco la mia camera ogni settimana."
                ]
            }
        ]
    },
    {
        "word": "esercitarsi",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare attività fisica per restare in salute.",
                "examples": [
                    "Mi esercito ogni mattina."
                ]
            }
        ]
    },
    {
        "word": "fare il pendolare",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare il viaggio tra casa e lavoro.",
                "examples": [
                    "Faccio il pendolare in treno."
                ]
            }
        ]
    },
    {
        "word": "lavare",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧼",
        "form": "verb",
        "definitions": [
            {
                "text": "Pulire con acqua e sapone.",
                "examples": [
                    "Lavo le mani.",
                    "Puoi lavare la macchina ?"
                ]
            }
        ]
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
