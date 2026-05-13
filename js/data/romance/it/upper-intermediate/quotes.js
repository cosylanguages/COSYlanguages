(function() {
    const data = [
        {
            q: "Lo scopo della nostra vita è essere felici.",
            a: "Dalai Lama", o: "Leader spirituale tibetano", c: "Vita e felicità",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Sei d'accordo sul fatto che la felicità sia lo scopo principale della vita?",
                "C'è differenza tra piacere e felicità?",
                "Si può essere felici e sentire comunque che manca qualcosa?",
                "Pensi che alcune persone siano naturalmente più felici di altre?",
                "Qual è una cosa che ti rende sinceramente felice e che i soldi non possono comprare?"
            ],
            task: "Parafrasa questa citazione con parole tue, poi dì se pensi che sia un saggio consiglio o un'eccessiva semplificazione pericolosa."
        },
        {
            q: "La vita è ciò che ti accade mentre sei impegnato a fare altri progetti.",
            a: "John Lennon", o: "Beautiful Boy, 1980", c: "Vita e felicità",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Hai mai perso un momento importante perché eri concentrato su qualcos'altro?",
                "Pensi che passiamo troppo tempo a pianificare e non abbastanza a vivere?",
                "La spontaneità è un'abilità o un tratto della personalità?",
                "Cosa dice questa citazione sul modo in cui ci relazioniamo al momento presente?",
                "Riesci a pensare a un «progetto» che si è rivelato meno importante di quello che è successo invece?"
            ],
            task: "Racconta una breve storia — reale o inventata — che illustri perfettamente questa citazione. Poi dì quale lezione se ne potrebbe trarre."
        },
        {
            q: "Non tutti quelli che vagano sono persi.",
            a: "J.R.R. Tolkien", o: "La Compagnia dell'Anello, 1954", c: "Vita e felicità",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Cosa pensi intendesse Tolkien — letteralmente o metaforicamente?",
                "Pensi che la società spinga le persone a seguire un percorso fisso?",
                "Riesci a pensare a qualcuno il cui vagabondare lo ha portato verso qualcosa di meglio?",
                "C'è differenza tra essere persi e semplicemente non sapere ancora dove si sta andando?",
                "Ti sei mai sentito un vagabondo — ed è stata una bella o una brutta sensazione?"
            ],
            task: "Contesta questa citazione. Sostieni l'opposto — che vagare senza direzione sia in realtà un problema. Usa almeno due esempi."
        },
        {
            q: "Si vive una volta sola, ma se lo fai bene, una volta è abbastanza.",
            a: "Mae West", o: "Attrice e comica americana", c: "Vita e felicità",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Cosa significa per te «farlo bene»?",
                "Lo YOLO è una filosofia di vita per te o la trovi sconsiderata?",
                "Pensi che il rimpianto sia il segno che non hai fatto le cose bene?",
                "Qual è una cosa che vuoi fare prima che sia troppo tardi?",
                "Una sola vita è sufficiente, o l'idea di un'unica vita ti sembra limitante?"
            ],
            task: "Descrivi come sarebbe «farlo bene» nella tua vita — concretamente. Cosa faresti? A cosa avresti rinunciato?"
        },
        {
            q: "Sii te stesso; tutti gli altri sono già occupati.",
            a: "Oscar Wilde", o: "Poeta e drammaturgo irlandese", c: "Identità",
            level: "upper-intermediate", theme: "personal_identity",
            qs: [
                "È sempre facile o desiderabile essere se stessi?",
                "Senti mai la pressione di essere qualcuno di diverso in certe situazioni?",
                "Il «sé» è qualcosa di fisso o cambia a seconda del contesto?",
                "Pensi che Wilde lo intendesse seriamente o ironicamente?",
                "Riesci a pensare a un momento in cui essere te stesso ti è costato qualcosa?"
            ],
            task: "Dai a questa citazione un voto da una a cinque stelle e giustificalo. Cosa coglie correttamente? Cosa le sfugge?"
        },
        {
            q: "Ci vuole coraggio per crescere e diventare chi sei veramente.",
            a: "E.E. Cummings", o: "Poeta americano", c: "Identità",
            level: "upper-intermediate", theme: "personal_identity",
            qs: [
                "Pensi che crescere richieda coraggio?",
                "Cosa ostacola il diventare chi si è veramente?",
                "C'è una versione di te stesso per la quale hai dovuto lottare?",
                "La società rende più difficile o più facile essere autentici?",
                "A che età pensi che le persone inizino a diventare chi sono veramente?"
            ],
            task: "Pensa a qualcuno — reale o immaginario — che ha mostrato questo tipo di coraggio. Descrivi cosa ha fatto e perché ci è voluta bravura."
        },
        {
            q: "Sappiamo ciò che siamo, ma non sappiamo ciò che potremmo essere.",
            a: "William Shakespeare", o: "Amleto", c: "Identità",
            level: "upper-intermediate", theme: "personal_identity",
            qs: [
                "Pensi di conoscerti bene?",
                "Qualcuno ti ha mai sorpreso diventando una persona completamente diversa?",
                "L'idea del potenziale è eccitante o spaventosa?",
                "Questa citazione ti fa sentire speranzoso o incerto?",
                "Cosa potresti diventare che non riesci ancora a immaginare?"
            ],
            task: "Riscrivi questa citazione per un pubblico moderno — stessa idea, parole tue — poi spiega cosa hai cambiato e perché."
        },
        {
            q: "La forma più comune di disperazione è non essere chi sei.",
            a: "Søren Kierkegaard", o: "Filosofo danese", c: "Identità",
            level: "upper-intermediate", theme: "personal_identity",
            qs: [
                "Sei d'accordo che l'inautenticità causi sofferenza?",
                "Riesci a pensare a una situazione in cui qualcuno non è chiaramente se stesso?",
                "È sempre possibile essere chi si è veramente?",
                "Cosa significa per te disperazione — è diversa dalla tristezza?",
                "Cosa dovrebbe cambiare una persona per iniziare a essere chi è veramente?"
            ],
            task: "Concorda o dissenti con questa citazione in almeno un minuto di discorso. Usa un esempio personale o una persona che conosci (o che hai osservato) per supportare la tua opinione."
        },
        {
            q: "Non ho fallito. Ho solo trovato 10.000 modi che non funzionano.",
            a: "Thomas Edison", o: "Inventore americano", c: "Fallimento e resilienza",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Si tratta di una riformulazione stimolante o di un modo per evitare la parola «fallimento»?",
                "Pensi che il fallimento abbia una cattiva reputazione che non merita?",
                "Hai mai fallito in qualcosa per poi esserne felice?",
                "La persistenza è sempre ammirevole, o può diventare testardaggine?",
                "Qual è la differenza tra fallire e arrendersi?"
            ],
            task: "Racconta la storia di un fallimento — tuo o di qualcun altro — che si è rivelato più prezioso di quanto lo sarebbe stato il successo."
        },
        {
            q: "Cadi sette volte, rialzati otto.",
            a: "Proverbio giapponese", o: "Detto tradizionale", c: "Fallimento e resilienza",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "La resilienza è qualcosa con cui si nasce o qualcosa che si costruisce?",
                "Riesci a pensare a un momento in cui hai continuato ad andare avanti quando avresti voluto fermarti?",
                "C'è un punto in cui è saggio smettere di rialzarsi?",
                "Questo proverbio si applica in modo diverso nelle diverse culture?",
                "Cosa ti aiuta a rialzarti dopo un colpo basso?"
            ],
            task: "Confronta questo proverbio con uno della tua lingua o cultura. Quale trovi più potente e perché?"
        },
        {
            q: "Il successo è l'abilità di passare da un fallimento all'altro senza perdere l'entusiasmo.",
            a: "Winston Churchill", o: "Primo Ministro britannico", c: "Fallimento e resilienza",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Pensi che l'entusiasmo sia l'ingrediente chiave descritto da Churchill?",
                "Riesci a pensare a un esempio famoso di qualcuno che corrisponde a questa descrizione?",
                "Questa definizione di successo è troppo limitata — che dire delle persone che hanno indovinato al primo colpo?",
                "Come gestisci personalmente i fallimenti ripetuti?",
                "L'entusiasmo è qualcosa che si può mantenere deliberatamente o si esaurisce?"
            ],
            task: "Pensi che questa citazione sia sinceramente saggia o sia una cosa comoda da dire a posteriori? Argomenta la tua posizione con almeno due punti specifici."
        },
        {
            q: "È impossibile vivere senza fallire in qualcosa, a meno che non si viva così cautamente da non aver vissuto affatto.",
            a: "J.K. Rowling", o: "Discorso ad Harvard, 2008", c: "Fallimento e resilienza",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Pensi di vivere con prudenza o di correre rischi?",
                "Qual è la differenza tra prudenza sensata e paura?",
                "Non hai mai fatto qualcosa perché avevi paura di fallire?",
                "Pensi che questo messaggio sia più difficile da ascoltare per alcune persone rispetto ad altre?",
                "Come sarebbe la tua vita se avessi meno paura di fallire?"
            ],
            task: "Parafrasa questa citazione nel linguaggio più semplice possibile — come se la stessi spiegando a uno studente di livello A2. Poi fornisci un esempio che le dia vita."
        },
        {
            q: "L'unico modo per fare un ottimo lavoro è amare quello che fai.",
            a: "Steve Jobs", o: "Discorso a Stanford, 2005", c: "Lavoro e scopo",
            level: "upper-intermediate", theme: "work_employment",
            qs: [
                "Pensi che si debba amare il proprio lavoro per essere bravi a farlo?",
                "La passione è sempre accessibile a tutti, o è un privilegio?",
                "Un grande lavoro può derivare dalla disciplina e dal mestiere piuttosto che dall'amore?",
                "Hai mai amato qualcosa che poi è stata rovinata trasformandola in un lavoro?",
                "Cosa faresti gratuitamente che attualmente fai — o vorresti fare — per soldi?"
            ],
            task: "Questo è uno dei consigli di carriera più citati al mondo. Sostieni che si tratti in realtà di un cattivo consiglio — o che sia fondamentalmente giusto. Scegli una parte e difendila."
        },
        {
            q: "Nel mezzo di ogni difficoltà risiede l'opportunità.",
            a: "Albert Einstein", o: "Fisico teorico", c: "Fallimento e resilienza",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Cerchi naturalmente l'opportunità nelle situazioni difficili?",
                "Questa è una verità ottimistica o positività tossica?",
                "Riesci a pensare a una difficoltà globale che ha creato opportunità inaspettate?",
                "Questa idea sembra diversa a seconda della gravità della difficoltà?",
                "Quale opportunità ha creato una difficoltà nella tua vita?"
            ],
            task: "Prendi una difficoltà attuale — nel mondo, nel tuo paese o nella tua vita — e prova sinceramente a identificare l'opportunità al suo interno. Parla per almeno un minuto."
        },
        {
            q: "Due cose sono infinite: l'universo e la stupidità umana; e non sono sicuro dell'universo.",
            a: "Albert Einstein", o: "Attribuita", c: "Natura umana",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "È divertente, cinica o profondamente seria — o tutte e tre le cose?",
                "Pensi che gli esseri umani siano fondamentalmente saggi o fondamentalmente sciocchi?",
                "Riesci a pensare a un esempio di stupidità umana collettiva?",
                "È giusto generalizzare sulla «stupidità umana»?",
                "Questa citazione cambia il modo in cui vedi Einstein come persona?"
            ],
            task: "Reagisci a questa citazione come se fossi completamente in disaccordo. Presenta gli argomenti più forti possibili a favore dell'intelligenza e della saggezza umana."
        },
        {
            q: "Nessun uomo è un'isola, intero in se stesso.",
            a: "John Donne", o: "Meditazione XVII, 1624", c: "Natura umana",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Cosa pensi intendesse Donne con questo?",
                "Pensi che la vita moderna ci renda più o meno connessi agli altri?",
                "Riesci a pensare a una persona che sembra vivere come un'isola — e qual è il costo?",
                "L'interdipendenza è una forza o una vulnerabilità?",
                "In quali modi dipendi dagli altri senza rendertene sempre conto?"
            ],
            task: "Questa citazione ha 400 anni. Sostieni che sia più attuale oggi che mai — o che il mondo moderno l'abbia resa meno vera."
        },
        {
            q: "L'oscurità non può scacciare l'oscurità; solo la luce può farlo. L'odio non può scacciare l'odio; solo l'amore può farlo.",
            a: "Martin Luther King Jr.", o: "Strength to Love, 1963", c: "Natura umana",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Pensi che questo sia vero in pratica, o idealistico?",
                "Riesci a pensare a un esempio storico o personale in cui questa logica ha funzionato?",
                "L'amore è uno strumento politico o l'idea è forzata?",
                "Cosa ci chiede personalmente questa citazione?",
                "C'è qualcosa che può essere combattuto solo con il suo opposto — o la rabbia è a volte necessaria?"
            ],
            task: "Scegli un conflitto attuale — nel mondo, in una comunità o in una relazione — e applicagli questa citazione. La logica regge? Parla per almeno un minuto."
        },
        {
            q: "La creatività è l'intelligenza che si diverte.",
            a: "Albert Einstein", o: "Attribuita", c: "Creatività e arte",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Ti consideri una persona creativa?",
                "La creatività è legata all'intelligenza o sono cose separate?",
                "La creatività può essere insegnata o è innata?",
                "Qual è la cosa più creativa che hai mai fatto?",
                "Esiste un tipo di creatività che non coinvolge affatto il divertimento?"
            ],
            task: "Dissenti da questa citazione. Sostieni che creatività e intelligenza siano completamente separate — con almeno due esempi a supporto."
        },
        {
            q: "L'arte non è ciò che vedi, ma ciò che rendi visibile agli altri.",
            a: "Edgar Degas", o: "Pittore impressionista francese", c: "Creatività e arte",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Qual è la migliore opera d'arte — in qualsiasi forma — che ti ha fatto vedere le cose in modo diverso?",
                "Pensi che l'arte abbia la responsabilità di far vedere la verità alle persone?",
                "Qualcosa può essere arte se persone diverse vi vedono cose completamente diverse?",
                "C'è dell'arte che ti ha lasciato indifferente — e questo significa che ha fallito?",
                "L'interpretazione dello spettatore conta quanto l'intenzione dell'artista?"
            ],
            task: "Descrivi un'opera d'arte — un film, una canzone, un libro, un quadro, qualsiasi cosa — che ti ha fatto vedere sinceramente qualcosa che non avevi visto prima. Cosa ha cambiato in te?"
        },
        {
            q: "Il mondo sembra sempre più luminoso quando hai appena creato qualcosa che prima non c'era.",
            a: "Neil Gaiman", o: "Autore di Coraline, Good Omens", c: "Creatività e arte",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Hai mai creato qualcosa e ti sei sentito così?",
                "Perché pensi che la creazione produca questa sensazione?",
                "Questa sensazione è accessibile a tutti o solo alle persone «creative»?",
                "Qual è il più piccolo atto di creazione che conta ancora?",
                "Consumare arte è prezioso quanto crearla?"
            ],
            task: "Parlaci di qualcosa che hai creato — per quanto piccola — e se ti ha dato questa sensazione. Se no, dì perché."
        },
        {
            q: "La cosa migliore a cui aggrapparsi nella vita è l'un l'altro.",
            a: "Audrey Hepburn", o: "Attrice e umanitaria", c: "Amore e relazioni",
            level: "upper-intermediate", theme: "feelings_emotions",
            qs: [
                "Sei d'accordo che le relazioni siano la cosa più importante nella vita?",
                "È possibile aggrapparsi troppo strettamente alle altre persone?",
                "Cosa rende una relazione degna di essere portata avanti?",
                "Hai mai lasciato andare qualcuno per poi pentirtene?",
                "Ci si può aggrappare a un'idea, a un luogo o a un ricordo nello stesso modo?"
            ],
            task: "Riscrivi questa citazione — stesso sentimento, metafora completamente diversa. Poi spiega quale versione preferisci e perché."
        },
        {
            q: "Devi danzare come se nessuno ti stesse guardando, amare come se non dovessi mai essere ferito.",
            a: "William W. Purkey", o: "Autore e professore", c: "Amore e relazioni",
            level: "upper-intermediate", theme: "feelings_emotions",
            qs: [
                "Trovi facile essere vulnerabile con le persone che ami?",
                "Amare senza paura di essere feriti è saggio o ingenuo?",
                "Pensi che il dolore passato cambi il modo in cui amiamo in futuro?",
                "Cosa significa per te ballare come se nessuno ti guardasse — letteralmente e metaforicamente?",
                "C'è qualcosa nella tua vita da cui ti trattieni per paura di essere ferito?"
            ],
            task: "Questa è una delle citazioni più condivise su internet. È sinceramente saggia o solo rassicurante? Argomenta la tua posizione."
        },
        {
            q: "Accettiamo l'amore che pensiamo di meritare.",
            a: "Stephen Chbosky", o: "Noi siamo infinito, 1999", c: "Amore e relazioni",
            level: "upper-intermediate", theme: "feelings_emotions",
            qs: [
                "Pensi che questo sia psicologicamente vero?",
                "Sei mai rimasto in una relazione — di amicizia o romantica — che era meno di quanto meritassi?",
                "Cosa determina ciò che qualcuno pensa di meritare?",
                "La terapia, il tempo o l'esperienza possono cambiare ciò che pensiamo di meritare?",
                "Questa citazione è responsabilizzante o attribuisce troppa responsabilità alla persona ferita?"
            ],
            task: "Questa citazione viene da un romanzo su un adolescente. Si applica ugualmente agli adulti? Sostieni il sì o il no — con esempi."
        },
        {
            q: "L'ingiustizia ovunque è una minaccia alla giustizia ovunque.",
            a: "Martin Luther King Jr.", o: "Lettera dal carcere di Birmingham, 1963", c: "Libertà e giustizia",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Ti senti personalmente responsabile per l'ingiustizia che accade lontano?",
                "Riesci a pensare a un'ingiustizia in un posto che ha colpito persone altrove?",
                "Questa citazione è un invito all'azione — e se sì, quale azione?",
                "C'è un punto in cui la distanza rende l'ingiustizia impossibile da affrontare?",
                "Quale ingiustizia ti sta più a cuore e perché?"
            ],
            task: "Applica questa citazione a qualcosa che sta accadendo nel mondo in questo momento. Qual è l'ingiustizia e perché è importante oltre la sua posizione immediata?"
        },
        {
            q: "La libertà non vale la pena di essere avuta se non include la libertà di sbagliare.",
            a: "Mahatma Gandhi", o: "Leader dell'indipendenza indiana", c: "Libertà e giustizia",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Pensi che la società moderna dia alle persone abbastanza libertà di fallire?",
                "C'è tensione tra libertà e sicurezza?",
                "Quale errore sei felice di essere stato libero di commettere?",
                "La libertà può essere sottratta gradualmente senza che le persone se ne accorgano?",
                "La «cancel culture» è un esempio di limitazione della libertà — o di responsabilità?"
            ],
            task: "Pensa a una legge, una regola o una norma sociale che limita la libertà di commettere un particolare errore. Sostieni se tale limitazione sia giustificata o meno."
        },
        {
            q: "La verità vi renderà liberi, ma prima vi renderà miserabili.",
            a: "James A. Garfield", o: "20° Presidente USA, attribuita", c: "Libertà e giustizia",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Una verità ti ha mai reso miserabile prima di renderti libero?",
                "È sempre meglio conoscere la verità?",
                "Riesci a pensare a una situazione in cui non conoscere la verità è stata la scelta giusta?",
                "Qual è la differenza tra una verità che libera e una che ferisce semplicemente?",
                "C'è una verità su di te che non sei ancora pronto ad affrontare?"
            ],
            task: "Racconta una storia — reale, osservata o immaginaria — in cui qualcuno ha scoperto una verità dolorosa ma alla fine liberatoria. Qual è stato il punto di svolta?"
        },
        {
            q: "Ieri è storia, domani è un mistero, oggi è un dono — ecco perché si chiama presente.",
            a: "Eleanor Roosevelt", o: "Diplomatica e attivista, attribuita", c: "Cambiamento e tempo",
            level: "upper-intermediate", theme: "time",
            qs: [
                "Questa citazione è saggezza o un cliché?",
                "Passi più tempo a pensare al passato, al futuro o al presente?",
                "Vivere nel presente è sempre desiderabile — o abbiamo bisogno del passato e del futuro?",
                "Cosa significa effettivamente nella pratica trattare l'oggi come un dono?",
                "Riesci a pensare a un giorno recente che hai trattato sinceramente come un dono?"
            ],
            task: "Fai una recensione critica di questa citazione. Cosa coglie correttamente, cosa semplifica troppo e cosa aggiungeresti per renderla più onesta?"
        },
        {
            q: "La misura dell'intelligenza è la capacità di cambiare.",
            a: "Albert Einstein", o: "Fisico teorico, attribuita", c: "Cambiamento e tempo",
            level: "upper-intermediate", theme: "time",
            qs: [
                "Trovi facile o difficile cambiare opinione?",
                "Hai cambiato idea su qualcosa di importante recentemente?",
                "La testardaggine è sempre una debolezza — o può essere un punto di forza?",
                "Qual è la differenza tra cambiare idea e mancare di convinzione?",
                "Qual è una cosa che credevi un tempo e in cui non credi più?"
            ],
            task: "Pensa a una convinzione che hai avuto per molto tempo e che alla fine hai cambiato. Guidaci attraverso ciò che è successo — quale nuova informazione o esperienza ti ha spostato."
        },
        {
            q: "Dicono sempre che il tempo cambia le cose, ma in realtà devi cambiarle tu stesso.",
            a: "Andy Warhol", o: "Artista pop americano", c: "Cambiamento e tempo",
            level: "upper-intermediate", theme: "time",
            qs: [
                "Sei d'accordo che il tempo da solo non cambi le cose?",
                "Hai mai aspettato che qualcosa cambiasse e hai dovuto agire tu stesso alla fine?",
                "C'è qualcosa nella tua vita che stai aspettando che il tempo sistemi?",
                "Questa citazione è in contrasto con l'idea di accettazione e del lasciar andare?",
                "Chi è responsabile di cambiare le cose che non vanno nel mondo?"
            ],
            task: "Applica questa citazione a qualcosa nella tua vita o nel mondo. Cosa deve essere cambiato, chi deve cambiarlo e cosa impedisce che accada?"
        },
        {
            q: "Perché così serio?",
            a: "Il Joker", o: "Il Cavaliere Oscuro, 2008", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Prendere la vita seriamente è sempre una buona cosa?",
                "Il caos o l'assurdo possono rivelare qualcosa che la serietà manca?",
                "Pensi che l'umorismo sia sottovalutato nelle situazioni serie?",
                "C'è qualcosa nella tua vita che prendi troppo sul serio?",
                "Qual è la differenza tra non prendersi sul serio e non prendere la vita sul serio?"
            ],
            task: "Rispondi alla domanda — perché prendi le cose che prendi sul serio così seriamente? Parla per un minuto."
        },
        {
            q: "Verso l'infinito e oltre.",
            a: "Buzz Lightyear", o: "Toy Story, 1995", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Cosa significa «oltre» per te nella tua vita?",
                "L'ambizione senza limiti è stimolante o irrealistica?",
                "Qual è il tuo «infinito» personale — qualcosa che stai sempre cercando di raggiungere?",
                "Un film per bambini può contenere una saggezza genuina?",
                "Qual è una cosa che un tempo pensavi fosse impossibile e che si è rivelata non esserlo?"
            ],
            task: "Tratta questa citazione seriamente come una citazione di un filosofo. Cosa dice effettivamente sull'ambizione umana — e sei d'accordo?"
        },
        {
            q: "Da un grande potere derivano grandi responsabilità.",
            a: "Zio Ben / Voltaire", o: "Spider-Man / Attribuita a Voltaire", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Sei d'accordo che potere e responsabilità siano sempre collegati?",
                "Riesci a pensare a qualcuno con potere che ha ignorato le proprie responsabilità?",
                "Quale potere hai nella tua vita — e quale responsabilità ne deriva?",
                "Questa citazione si applica all'influenza dei social media?",
                "La responsabilità è qualcosa che le persone scelgono o qualcosa di imposto?"
            ],
            task: "Questa citazione è stata usata in tutto, dai film di supereroi ai discorsi politici. La ripetizione la rende più o meno vera? Discutine."
        },
        {
            q: "Dopo tutto questo tempo? Sempre.",
            a: "Severus Piton", o: "Harry Potter e i Doni della Morte, 2007", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Perché pensi che questa citazione colpisca così fortemente le persone?",
                "La lealtà su un lungo periodo di tempo è una virtù o un'ossessione?",
                "Riesci a pensare a qualcosa o qualcuno a cui sei sempre rimasto fedele?",
                "Il contesto cambia il significato di questa citazione — sapere la storia di Piton è importante?",
                "Qual è la differenza tra devozione ed essere incapaci di lasciar andare?"
            ],
            task: "Descrivi la tua reazione a questa citazione — emotivamente e intellettualmente. Pensi che il suo potere derivi dalle parole stesse o dalla storia che c'è dietro?"
        },
        {
            q: "Tu sei gentile, tu sei intelligente, tu sei importante.",
            a: "Aibileen Clark", o: "The Help, 2011", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Perché pensi che questa frase sia diventata così famosa?",
                "È importante che ti venga detto che sei importante — specialmente da bambino?",
                "Pensi che le persone intorno a te sappiano di essere importanti?",
                "C'è qualcosa di potente nel dire qualcosa di semplice e diretto?",
                "Chi ti ha detto qualcosa del genere — e ha cambiato qualcosa?"
            ],
            task: "Questa citazione usa deliberatamente un inglese grammaticalmente errato («You is...»). Perché? Cosa andrebbe perso se venisse «corretta»? Cosa dice questo sul linguaggio e sull'emozione?"
        },
        {
            q: "Non è chi sono sotto, ma quello che faccio che mi definisce.",
            a: "Bruce Wayne / Batman", o: "Batman Begins, 2005", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Pensi che le azioni ci definiscano più delle intenzioni?",
                "C'è un divario tra chi sei «sotto» e quello che fai?",
                "Qualcuno può essere una brava persona ma fare costantemente cose cattive?",
                "Questa citazione si applica a come giudichiamo i personaggi pubblici?",
                "Quale tua azione definisce meglio chi sei?"
            ],
            task: "Sostieni l'opposto — che chi siamo sotto conta più di quello che facciamo. Presenta il caso più forte possibile."
        },
        {
            q: "Zitto e nuota.",
            a: "Dory", o: "Alla ricerca di Nemo, 2003", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "La persistenza è sempre la risposta, o sapere quando fermarsi è altrettanto importante?",
                "Riesci a pensare a un momento in cui continuare ad andare avanti è stata esattamente la cosa giusta da fare?",
                "Questo semplice consiglio è a volte più utile di un consiglio complicato?",
                "Qual è la cosa nella tua vita attraverso la quale stai attualmente «nuotando»?",
                "L'ottimismo come quello di Dory è un tipo di personalità o una scelta?"
            ],
            task: "Confronta questo con un altro consiglio sulla persistenza — da un libro, una persona nella tua vita o la tua cultura. Quale è più utile e perché?"
        },
        {
            q: "L'inverno sta arrivando.",
            a: "Casata Stark", o: "Il Trono di Spade", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Cosa rappresenta per te «l'inverno» — quale cosa difficile sta arrivando?",
                "La preparazione è una virtù o ti deruba del momento presente?",
                "Riesci a pensare a un «inverno» che è arrivato senza preavviso?",
                "Tendi a prepararti per le difficoltà o ad affrontarle quando arrivano?",
                "Qual è una cosa per cui il mondo dovrebbe prepararsi ma non lo sta facendo?"
            ],
            task: "Usa questa citazione come metafora per qualcosa di reale — cambiamento climatico, crisi personale, instabilità politica. Sviluppa la metafora per almeno un minuto."
        },
        {
            q: "Sono così intelligente che a volte non capisco una singola parola di quello che dico.",
            a: "Oscar Wilde", o: "Il principe felice e altri racconti, 1888", c: "Arguzia e umorismo",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Wilde è autoironico, arrogante o entrambe le cose contemporaneamente?",
                "Hai mai parlato o scritto qualcosa che sembrava intelligente ma confondeva persino te?",
                "La complessità è un segno di intelligenza o a volte un segno di confusione?",
                "Pensi che le persone più intelligenti siano i migliori comunicatori?",
                "Riesci a pensare a qualcosa che sembra profondo ma in realtà è vuoto?"
            ],
            task: "Scrivi la cosa più simile a Wilde che puoi dire sulla tua intelligenza — poi analizzala."
        },
        {
            q: "Ho passato una serata perfettamente meravigliosa, ma non è stata questa.",
            a: "Groucho Marx", o: "Comico americano", c: "Arguzia e umorismo",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Hai mai dovuto essere educato quando eri tutt'altro?",
                "L'onestà brutale è migliore o peggiore della disonestà educata nelle situazioni sociali?",
                "L'umorismo può essere una forma di coraggio?",
                "Qual è la cosa educatamente devastante che ti sia mai stata detta?",
                "L'arguzia in una seconda lingua è più difficile o più facile da apprezzare rispetto alla tua prima?"
            ],
            task: "Descrivi una situazione in cui questa citazione sarebbe la cosa perfetta da dire — poi spiega perché probabilmente non la diresti."
        },
        {
            q: "Le donne ben educate raramente fanno la storia.",
            a: "Laurel Thatcher Ulrich", o: "Storica americana, 1976", c: "Arguzia e umorismo",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "È un invito a comportarsi male — o qualcosa di più sfumato?",
                "Chi è una donna nella storia che non è stata «ben educata» e ha cambiato le cose?",
                "Questa citazione si applica ugualmente agli uomini, o c'è qualcosa di specifico sulle donne in essa?",
                "Infrangere le regole è necessario per il progresso — o è romanticizzato?",
                "Cosa significa «ben educata», e chi lo decide?"
            ],
            task: "Applica questa citazione a un uomo. Funziona allo stesso modo? Cosa rivela la tua risposta sul modo in cui pensiamo al genere e alla storia?"
        },
        {
            q: "Non sono superstizioso, ma sono un po' stizioso.",
            a: "Michael Scott", o: "The Office (US), 2007", c: "Arguzia e umorismo",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Hai qualche superstizione — anche a cui non credi pienamente?",
                "Perché le persone intelligenti a volte hanno convinzioni irrazionali?",
                "C'è differenza tra superstizione e intuizione?",
                "Quali superstizioni sono comuni nella tua cultura?",
                "Avere una piccola convinzione irrazionale è innocuo o un terreno scivoloso?"
            ],
            task: "Difendi la superstizione. Presenta il miglior caso possibile sul perché un po' di pensiero magico sia in realtà buono per gli esseri umani."
        }
    ];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();
