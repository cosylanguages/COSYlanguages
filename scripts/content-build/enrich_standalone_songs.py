import os
import re

BASE_DIR = "apps/premium-events/nights/karaoke/sessions/karaoke-club/"

DATA = {
    # --------------------------------------------------------------------------
    # ITALIAN (4 files)
    # --------------------------------------------------------------------------
    "it/due-grosse-lacrime-bianche.html": {
        "title_theme": "Dolore silenzioso & Dignità nel ricordo",
        "theme_bullets": ["La sofferenza amorosa", "Le lacrime come sfogo", "La memoria della felicità", "La dignità nel dolore"],
        "vocab": [
            {"word": "La lacrima", "def": "Goccia di liquido secreto dagli occhi per commozione o dolore.", "ex": "Due grosse lacrime bianche scendono sul suo viso nel silenzio.", "opp": "Il sorriso"},
            {"word": "La solitudine", "def": "Condizione di chi è solo, senza la presenza dell'amato.", "ex": "La solitudine diventa più pesante nelle serate invernali.", "opp": "La compagnia"},
            {"word": "L'orgoglio", "def": "Fierezza personale che impedisce di mostrare debolezza.", "ex": "Il suo orgoglio le impedisce di supplicarlo di tornare.", "opp": "L'umiltà"},
            {"word": "Scomparire", "def": "Svanire dalla vista o dalla vita di qualcuno.", "ex": "Veder scomparire un amore lascia un vuoto incolmabile.", "opp": "Rimanere"},
            {"word": "Il ricordo", "def": "Immagine conservata nella memoria di eventi passati.", "ex": "Ogni angolo della casa custodisce un dolce ricordo di loro.", "opp": "L'oblio"},
            {"word": "Soffrire", "def": "Provare un dolore fisico o morale profondo.", "ex": "Soffrire in silenzio richiede una grande forza d'animo.", "opp": "Gioire"},
            {"word": "L'illusione", "def": "Speranza ingannevole non corrispondente alla realtà.", "ex": "Crederlo ancora innamorato era soltanto un'illusione.", "opp": "La realtà"},
            {"word": "Il silenzio", "def": "Assenza di rumore o di parole comunicate.", "ex": "Nel silenzio della stanza risuonano i suoi pensieri felici.", "opp": "Il frastuono"},
            {"word": "Rassegnarsi", "def": "Accettare con pazienza un evento doloroso e inevitabile.", "ex": "Rassegnarsi alla fine di una storia richiede tempo e coraggio.", "opp": "Ribellarsi"},
            {"word": "La nostalgia", "def": "Rimpianto malinconico di persone o momenti passati.", "ex": "La nostalgia la assale quando riascolta la loro canzone.", "opp": "L'entusiasmo"}
        ],
        "round1": [
            ("In 'Due grosse lacrime bianche', Iva Zanicchi canta il dolore di un addio silenzioso. Perché il colore bianco delle lacrime simboleggia la purezza del sentimento rispetto al rancore?", "★ Ti è mai capitato di vivere un momento di commozione così profondo da non riuscire a parlare?"),
            ("La canzone descrive il contrasto tra i ricordi felici e l'amara realtà della separazione. Come ci si può liberare dalla **nostalgia** quando un amore finisce?", "★ Conservi con cura gli oggetti e le foto che ti ricordano le relazioni passate?"),
            ("La cantante trattiene il proprio dolore dietro un velo di **orgoglio**. È preferibile mostrare subito la propria vulnerabilità o difendersi nel **silenzio**?", "★ Secondo te, piangere davanti agli altri è un segno di debolezza o di autenticità?"),
            ("Il testo evoca l'incapacità di accettare che l'altro sia diventato un estraneo. In che modo si impara a **rassegnarsi** all'evidenza di un addio?", "★ Qual è la strategia migliore per superare l'amarezza delle promesse infrante?"),
            ("Nonostante la tristezza, la voce di Iva Zanicchi esprime una forte **dignità**. Come si fa a custodire il rispetto per se stessi anche nei momenti di sconforto?", "★ Quale canzone italiana ascolti quando hai bisogno di sfogare le tue emozioni?")
        ],
        "round2": [
            "Il dolore per la fine di un amore è un passaggio indispensabile per maturare ed essere pronti a una nuova felicità. Dibattiamone.",
            "Nascondere le proprie lacrime per **orgoglio** è un errore che prolunga la sofferenza invece di guarirla. Cosa ne pensi?",
            "La **solitudine** dopo una rottura è più feconda se vissuta in isolamento anziché cercando subito nuove distrazioni. Condividi il tuo parere."
        ],
        "lang_focus_title": "L'espressione del contrasto con 'mentre' e il passato prossimo dei verbi di movimento",
        "lang_focus_desc": "Per contrapporre due azioni simultanee si usa 'mentre + indicativo' (es: 'Mentre lui partiva, lei piangeva'). I verbi di cambiamento di stato usano il verbo ausiliare 'essere' al passato prossimo (es: 'È scomparso', 'È scesa').",
        "lang_focus_examples": [
            "Due lacrime sono scese sul suo viso mentre guardava la pioggia.",
            "L'illusione è svanita nel momento in cui ha pronunciato quell'addio.",
            "Mentre ascoltavamo la musica, la nostalgia si è impadronita di noi."
        ],
        "final_challenge": "In coppia, Simulate un dialogo drammatico ma maturo in cui due persone si dicono addio con rispetto e dignità prima di prendere strade diverse.",
        "mistakes": [
            ("Lei <span class=\"mistake-highlight\">ha scomparsa</span> senza dire niente.", "Lei <span class=\"mistake-highlight\">è scomparsa</span> senza dire niente.", "(I verbi intransitivi come 'scomparire' usano l'ausiliare 'essere'.)"),
            ("Soffro <span class=\"mistake-highlight\">per la</span> solitudine.", "Soffro <span class=\"mistake-highlight\">di</span> solitudine.", "(Con il verbo 'soffrire' riferito a uno stato d'animo si usa la preposizione 'di'.)"),
            ("Mentre <span class=\"mistake-highlight\">che</span> lui parlava, io tacevo.", "Mentre lui parlava, io tacevo.", "(Non aggiungere 'che' dopo la congiunzione 'mentre'.)")
        ]
    },

    "it/luomo-che-amava-le-donne.html": {
        "title_theme": "Seduzione, Ironia & Incostanza",
        "theme_bullets": ["Il fascino del seduttore", "L'indipendenza femminile", "La superficialità in amore", "L'ironia di fronte alla delusione"],
        "vocab": [
            {"word": "Il seduttore", "def": "Uomo affascinante che conquista facilmente il cuore altrui.", "ex": "L'uomo che amava le donne è un classico seduttore d'altri tempi.", "opp": "Il timido"},
            {"word": "L'incostanza", "def": "Mancanza di stabilità nei sentimenti e nei legami.", "ex": "La sua incostanza gli impedisce di costruire un futuro di coppia.", "opp": "La fedeltà"},
            {"word": "L'incanto", "def": "Sensazione di viva ammirazione ed estasi temporanea.", "ex": "Il suo sguardo felino esercita un incanto irresistibile.", "opp": "La delusione"},
            {"word": "L'inganno", "def": "Azione diretta a far credere ciò che non è vero.", "ex": "Capire l'inganno la spinge a sorridere piuttosto che a soffrire.", "opp": "La sincerità"},
            {"word": "L'ironia", "def": "Atteggiamento di amabile distacco e sarcasmo intelligente.", "ex": "Nina Zilli usa un'ironia travolgente per smascherare il Don Giovanni.", "opp": "La pesantezza"},
            {"word": "Conquistare", "def": "Ottenere l'affetto o l'attenzione con garbo e astuzia.", "ex": "Lui sa come conquistare una donna con complimenti raffinati.", "opp": "Allontanare"},
            {"word": "La leggerezza", "def": "Modo di vivere il presente senza troppi drammi o impegni.", "ex": "Amare con troppa leggerezza porta a ferire i sentimenti altrui.", "opp": "La gravità"},
            {"word": "L'illusione", "def": "Speranza di poter cambiare il carattere di un libertino.", "ex": "È un'illusione credere che un seduttore seriale diventi fedele.", "opp": "La lucidità"},
            {"word": "L'indipendenza", "def": "Autonomia emotiva e rifiuto di sottomettersi.", "ex": "La sua indipendenza la rende immune ai tranelli dell'amore.", "opp": "La dipendenza"},
            {"word": "Il fascino", "def": "Attrattiva intensa e misteriosa esercitata sugli altri.", "ex": "Il suo fascino naturale fa dimenticare i suoi difetti.", "opp": "La banalità"}
        ],
        "round1": [
            ("In 'L'uomo che amava le donne', Nina Zilli canta di un seduttore irresistibile ma incapace di amare una sola persona. Perché il fascino dei Don Giovanni continua ad attirare e insieme insospettire?", "★ Ti è mai capitato di conoscere qualcuno la cui simpatia nascondeva una palese **incostanza**?"),
            ("La canzone affronta la delusione amorosa con un ritmo soul travolgente e molta **ironia**. Usare l'ironia è un buon modo per proteggere il cuore dagli inganni?", "★ Preferisci reagire a una delusione con il sorriso e l'ironia o prenderti del tempo per riflettere?"),
            ("Il protagonista ama tutte le donne in modo superficiale ma passionale. È possibile considerare questo atteggiamento come una forma di apprezzamento o è solo egoismo?", "★ Credi che una persona fortemente abituata alla **seduzione** possa cambiare per amore?"),
            ("Nina Zilli rivendica la propria **indipendenza** rifiutando di diventare l'ennesima conquista sulla lista. Come si riconoscono i confini tra un interesse sincero e un semplice gioco?", "★ Quali sono i segnali che ti fanno capire che qualcuno sta facendo sul serio con te?"),
            ("La canzone si ispira al famoso film di François Truffaut. In che modo la musica e il cinema riescono a rendere affascinanti anche i personaggi più imperfetti?", "★ Qual è il seduttore più iconico della storia del cinema o della musica secondo te?")
        ],
        "round2": [
            "La seduzione superficiale è un gioco innocuo finché entrambe le parti conoscono le regole e le intenzioni. Dibattiamone.",
            "Chi ama 'troppe persone' in realtà non ama nessuno e vive in una perenne fuga da se stesso. Cosa ne pensi?",
            "L'**ironia** e l'indipendenza emotiva sono le uniche vere armi per non soffrire nelle relazioni moderne. Condividi il tuo parere."
        ],
        "lang_focus_title": "Il periodo ipotetico della possibilità e l'uso dell'aggettivo 'quello'",
        "lang_focus_desc": "Per esprimere un'ipotesi possibile nel presente o futuro si usa 'se + congiuntivo imperfetto ... condizionale presente' (es: 'Se lui mi chiamasse, non risponderei'). Per indicare una persona specifica si usa 'colui che' o 'quello che'.",
        "lang_focus_examples": [
            "Se un seduttore mi facesse mille promesse, ci riderei sopra.",
            "L'uomo che amava le donne non conosceva il valore della fedeltà.",
            "Se fossi più lucida, non cadrei nei suoi trabocchetti affascinanti."
        ],
        "final_challenge": "In piccoli gruppi, organizzate uno sketch comico in cui una donna smonta con arguzia e ironia le scuse classiche di un seduttore incallito.",
        "mistakes": [
            ("Se lui <span class=\"mistake-highlight\">chiamerebbe</span>, non risponderei.", "Se lui <span class=\"mistake-highlight\">chiamasse</span>, non risponderei.", "(Nella frase ipotetica introduttiva con 'se' si usa il congiuntivo, non il condizionale.)"),
            ("Lui ama <span class=\"mistake-highlight\">a tutte</span> le donne.", "Lui ama <span class=\"mistake-highlight\">tutte</span> le donne.", "(In italiano il complemento oggetto diretto non richiede la preposizione 'a'.)"),
            ("È immune <span class=\"mistake-highlight\">da i</span> suoi complimenti.", "È immune <span class=\"mistake-highlight\">ai</span> suoi complimenti.", "(Usare la preposizione articolata corretta 'ai' da 'a + i'.)")
        ]
    },

    "it/un-raggio-di-sole.html": {
        "title_theme": "Ottimismo, Gratitudine & Gioia di vivere",
        "theme_bullets": ["La luce nell'oscurità", "La gratitudine quotidiana", "L'amore come fonte di energia", "La semplicità dei gesti felici"],
        "vocab": [
            {"word": "Il raggio", "def": "Fascio sottile di luce che illumina l'oscurità.", "ex": "Un raggio di sole basta a trasformare una giornata grigia.", "opp": "L'ombra"},
            {"word": "L'ottimismo", "def": "Disposizione d'animo a cogliere gli aspetti positivi.", "ex": "L'ottimismo contagioso di Jovanotti trasmette una grande energia.", "opp": "Il pessimismo"},
            {"word": "La gratitudine", "def": "Sentimento di affettuoso apprezzamento per un bene ricevuto.", "ex": "Provare gratitudine per le piccole cose rende la vita più ricca.", "opp": "L'ingratitudine"},
            {"word": "Illuminare", "def": "Rendere chiaro e luminoso un luogo o un pensiero.", "ex": "Il tuo sorriso sa illuminare anche i momenti più bui.", "opp": "Oscurare"},
            {"word": "La semplicità", "def": "Qualità di ciò che è genuino, spontaneo e privo di artifici.", "ex": "La vera felicità risiede spesso nella semplicità degli affetti.", "opp": "La complicazione"},
            {"word": "Riscaldare", "def": "Dare calore al corpo o conforto all'anima.", "ex": "La sua presenza riesce a riscaldare il cuore nei giorni freddi.", "opp": "Raffreddare"},
            {"word": "L'energia", "def": "Vigore fisico e morale che spinge all'azione entusiasta.", "ex": "Cantare insieme questa canzone dona una carica di energia positiva.", "opp": "L'apatia"},
            {"word": "L'abbraccio", "def": "Gesto di affetto stringendo qualcuno tra le braccia.", "ex": "Un caloroso abbraccio vale più di mille parole di conforto.", "opp": "Il distacco"},
            {"word": "La speranza", "def": "Fiduciosa attesa di un futuro sereno e felice.", "ex": "Vedere il sole sorgere rinnova la speranza in ognuno di noi.", "opp": "La disperazione"},
            {"word": "Sereno", "def": "Tranquillo, limpido e privo di preoccupazioni affannose.", "ex": "Dopo la tempesta si riscopre un cielo sereno e luminoso.", "opp": "Agitato"}
        ],
        "round1": [
            ("In 'Un raggio di sole', Jovanotti canta : 'Che cosa fai, dove sei, mi basta un raggio di sole per te'. In che modo l'amore e l'amicizia riescono a portare luce anche nelle giornate più grigie?", "★ Qual è quell'elemento semplice nella tua routine che rappresenta il tuo personalissimo 'raggio di sole'?"),
            ("La canzone celebra la gioia di vivere il presente senza troppi calcoli. Perché la **semplicità** è spesso la chiave per riscoprire la vera **gratitudine**?", "★ Ti capita spesso di fermarti ad apprezzare le piccole meraviglie della vita quotidiana?"),
            ("Jovanotti esprime il proprio affetto con un entusiasmo travolgente e solare. Quanto conta l'**ottimismo** quando si affrontano periodi di incertezza?", "★ Come riesci a trasmettere carica ed **energia** alle persone a cui vuoi bene quando sono giù di morale?"),
            ("Nel testo la presenza dell'amato viene paragonata a un rifugio sicuro che sa **riscaldare** l'anima. Che valore attribuisci a un gesto sincero come un **abbraccio**?", "★ Qual è il miglior gesto di affetto che hai ricevuto di recente e che ti ha scaldato il cuore?"),
            ("Questa canzone è diventata un classico della musica italiana per la sua capacità di infondere **speranza**. Qual è il potere della musica pop quando trasmette messaggi positivi?", "★ Quale brano musicale ti mette subito di buon umore appena premi play?")
        ],
        "round2": [
            "Mantenere un atteggiamento di costante **ottimismo** è una scelta di coraggio e non un'ingenua illusione. Dibattiamone.",
            "Nelle relazioni moderne si tende a complicare tutto invece di godere della **semplicità** dei sentimenti autentici. Cosa ne pensi?",
            "L'energia positiva della musica può influire concretamente sulla salute e sul benessere psicologico delle persone. Condividi il tuo parere."
        ],
        "lang_focus_title": "L'espressione della sufficienza con 'bastare' e le frasi interrogative dirette",
        "lang_focus_desc": "Il verbo 'bastare' si usa al singolare o al plurale per indicare che qualcosa è sufficiente (es: 'Mi basta un sorriso', 'Basta poco per essere felici').",
        "lang_focus_examples": [
            "Mi basta ascoltare questa canzone per ritrovare il buon umore.",
            "Bastano poche parole d'affetto per illuminare una giornata no.",
            "Ci basta stare insieme per sentirci completamente sereni."
        ],
        "final_challenge": "In coppia, create un breve messaggio vocale di auguri o di ringraziamento destinato a un amico per esprimergli gratitudine e trasmettergli carica positiva.",
        "mistakes": [
            ("Mi <span class=\"mistake-highlight\">bastano</span> un raggio di sole.", "Mi <span class=\"mistake-highlight\">basta</span> un raggio di sole.", "(Usa il singolare 'basta' davanti a un soggetto singolare.)"),
            ("Sono grato <span class=\"mistake-highlight\">per la</span> tua amicizia.", "Sono grato <span class=\"mistake-highlight\">per</span> la tua amicizia.", "(In italiano 'grato per' è corretto, evita la fusione errata.)"),
            ("Questo mi fa <span class=\"mistake-highlight\">felice</span>.", "Questo mi rende <span class=\"mistake-highlight\">felice</span>.", "(Usa il verbo 'rendere' seguito da un aggettivo di stato d'animo.)")
        ]
    },

    "it/unatta-estate.html": {
        "title_theme": "Estate che cambia & Nostalgia dei ricordi",
        "theme_bullets": ["La fine della bella stagione", "La malinconia del mare", "La metamorfosi del tempo", "La ricerca di stabilità"],
        "vocab": [
            {"word": "L'estate", "def": "Stagione calda caratterizzata da luce, mare e vacanze.", "ex": "Diodato canta un'altra estate che se ne va lasciando ricordi vividi.", "opp": "L'inverno"},
            {"word": "La malinconia", "def": "Dolce tristezza legata al ricordo di cose passate.", "ex": "Camminare sulla spiaggia vuota a settembre suscita una profonda malinconia.", "opp": "L'allegria"},
            {"word": "Lo scoglio", "def": "Roccia affiorante dal mare, simbolo di solidità.", "ex": "Restare seduti sullo scoglio a guardare le onde aiuta a pensare.", "opp": "L'abisso"},
            {"word": "Svanire", "def": "Dissiparsi lentamente fino a scomparire del tutto.", "ex": "Il calore dei giorni estivi inizia a svanire con le prime piogge.", "opp": "Apparire"},
            {"word": "La spiaggia", "def": "Litorale sabbioso lungo il mare dove ci si ritrova.", "ex": "La spiaggia ombreggiata di fine stagione ha un fascino unico.", "opp": "La città"},
            {"word": "Riflettere", "def": "Meditare a fondo su di sé e sulle proprie scelte.", "ex": "La fine delle vacanze è il momento ideale per riflettere sul futuro.", "opp": "Agire d'impulso"},
            {"word": "Il vento", "def": "Spostamento d'aria che porta ristoro e aria di cambiamento.", "ex": "Un vento fresco di settembre annuncia che l'autunno è vicino.", "opp": "La bonaccia"},
            {"word": "La metamorfosi", "def": "Trasformazione profonda di un luogo o di una persona.", "ex": "La città vive una vera metamorfosi quando finiscono le ferie.", "opp": "La stasi"},
            {"word": "Sospeso", "def": "Incertezza o attesa in un tempo che sembra essersi fermato.", "ex": "Quel pomeriggio di fine agosto sembrava vivere in un tempo sospeso.", "opp": "Definito"},
            {"word": "Il saluto", "def": "Gesto o parola di commiato da luoghi e persone care.", "ex": "Un ultimo sguardo al mare è il nostro sincero saluto all'estate.", "opp": "L'accoglienza"}
        ],
        "round1": [
            ("In 'Un'altra estate', Diodato riflette sul momento in cui la bella stagione giunge al termine. Perché il mare di fine estate suscita una **malinconia** così poetica e profonda?", "★ Quali sensazioni ti trasmette la fine delle vacanze e il ritorno alla routine quotidiana?"),
            ("La canzone descrive il contrasto tra l'affollamento di luglio e la solitudine di settembre sulla **spiaggia**. Preferisci i luoghi turistici nel pieno della stagione o quando sono tranquilli?", "★ Hai un luogo del cuore legato ai ricordi estivi dove ami tornare per ricaricarti?"),
            ("Il cantante osserva il tempo che passa mentre il caldo inizia a **svanire**. In che modo i cambi di stagione influenzano il tuo umore e le tue decisioni?", "★ Qual è la stagione dell'anno in cui ti senti più propenso a fare progetti importanti?"),
            ("Diodato parla di 'cercare un punto fermo' come uno **scoglio** in mezzo alle onde. Quali sono i punti fermi nella tua vita quando avverti che tutto sta cambiando?", "★ A chi o a cosa ti aggrappi quando senti il bisogno di stabilità emotiva?"),
            ("La melodia intensa e intima accompagna un bilancio interiore prima di ripartire. In che modo una pausa estiva ci aiuta a **riflettere** e a rinnovarci?", "★ Qual è la lezione o il ricordo più bello che ti ha lasciato l'ultima estate?")
        ],
        "round2": [
            "La nostalgia per l'estate passata è soltanto un'illusione: l'autunno offre molte più opportunità di crescita e concentrazione. Dibattiamone.",
            "I luoghi di mare svuotati dai turisti rivelano la loro vera anima e bellezza al di là delle mode estive. Cosa ne pensi?",
            "Accettare che tutto cambi e **svanisca** è il segreto per godersi appieno ogni singolo momento presente. Condividi il tuo parere."
        ],
        "lang_focus_title": "L'uso del futuro semplice per fare previsioni ed esprimere incertezza",
        "lang_focus_desc": "Il futuro semplice si usa non solo per azioni future ma anche per esprimere un'ipotesi nel presente (es: 'Sarà l'estate che finisce', 'Arriverà l'autunno').",
        "lang_focus_examples": [
            "Un'altra estate se ne andrà lasciando un dolce ricordo nel cuore.",
            "Torneremo presto su questa spiaggia quando il vento rinfrescherà l'aria.",
            "Chissà come sarà la nostra vita quando la prossima estate comincerà."
        ],
        "final_challenge": "Riscrivi o racconta sotto forma di pagina di diario le tue riflessioni personali nell'ultimo giorno di una vacanza speciale prima di ripartire.",
        "mistakes": [
            ("L'estate se <span class=\"mistake-highlight\">va via</span> lentamente.", "L'estate se <span class=\"mistake-highlight\">ne va</span> lentamente.", "(Usa la forma pronominale corretta 'andarsene' -> 'se ne va'.)"),
            ("Penso <span class=\"mistake-highlight\">su i</span> miei ricordi estivi.", "Rifletto <span class=\"mistake-highlight\">sui</span> miei ricordi estivi.", "(Fondi la preposizione 'su + i' nella preposizione articolata 'sui'.)"),
            ("Sulla spiaggia <span class=\"mistake-highlight\">non c'è nessuno uomo</span>.", "Sulla spiaggia <span class=\"mistake-highlight\">non c'è nessuno</span>.", "(In italiano 'nessuno' si usa da solo senza aggiungere 'uomo'.)")
        ]
    },

    # --------------------------------------------------------------------------
    # GREEK (3 files)
    # --------------------------------------------------------------------------
    "el/an-einai-i-agapi-amartia.html": {
        "title_theme": "Απόλυτο Πάθος & Κοινωνική Κριτική",
        "theme_bullets": ["Η αφοσίωση στην αγάπη", "Η πρόκληση των κανόνων", "Η εσωτερική δύναμη", "Η αποδοχή των συνεπειών"],
        "vocab": [
            {"word": "Η αμαρτία", "def": "Πράξη που παραβιάζει ηθικούς ή θρησκευτικούς κανόνες.", "ex": "Αν είναι η αγάπη αμαρτία, η τραγουδίστρια δηλώνει έτοιμη να την υπερασπιστεί.", "opp": "Η αρετή"},
            {"word": "Το πάθος", "def": "Έντονο και δυνατό αίσθημα που κυριεύει την ψυχή.", "ex": "Το πάθος της για εκείνον ξεπερνά κάθε λογικό εμπόδιο.", "opp": "Η λογική"},
            {"word": "Η αφοσίωση", "def": "Σταθερή και απόλυτη αγάπη και πίστη σε έναν άνθρωπο.", "ex": "Η απόλυτη αφοσίωση είναι σπάνια στις μέρες μας.", "opp": "Η προδοσία"},
            {"word": "Η κόλαση", "def": "Τόπος ή κατάσταση μεγάλης δοκιμασίας και τιμωρίας.", "ex": "Προτιμά να πάει στην κόλαση παρά να απαρνηθεί τον έρωτά της.", "opp": "Ο παράδεισος"},
            {"word": "Η επανάσταση", "def": "Αντίδραση και εξέγερση απέναντι στους περιορισμούς.", "ex": "Ο έρωτας είναι συχνά μια προσωπική επανάσταση απέναντι στην κοινωνία.", "opp": "Η υποταγή"},
            {"word": "Η κριτική", "def": "Η κρίση και τα σχόλια των άλλων για τις επιλογές μας.", "ex": "Δεν την ενδιαφέρει η αρνητική κριτική του κόσμου.", "opp": "Η αποδοχή"},
            {"word": "Η θυσία", "def": "Η προσφορά και παραίτηση από κάτι για χάρη της αγάπης.", "ex": "Κάθε μεγάλος έρωτας απαιτεί μια μικρή ή μεγάλη θυσία.", "opp": "Ο εγωισμός"},
            {"word": "Η τόλμη", "def": "Το θάρρος να ζει κανείς σύμφωνα με την καρδιά του.", "ex": "Χρειάζεται τόλμη για να διεκδικήσεις αυτό που πραγματικά αγαπάς.", "opp": "Ο φοβος"},
            {"word": "Η λύτρωση", "def": "Η απελευθέρωση από τις ενοχές και τους φόβους.", "ex": "Η παραδοχή των συναισθημάτων φέρνει τελικά τη λύτρωση.", "opp": "Η καταπίεση"},
            {"word": "Η αλήθεια", "def": "Η γνησιότητα και ειλικρίνεια των συναισθημάτων.", "ex": "Η αλήθεια της καρδιάς είναι πιο δυνατή από τους κανόνες.", "opp": "Το ψέμα"}
        ],
        "round1": [
            ("Στο τραγούδι 'Αν είναι η αγάπη αμαρτία', η Έλενα Παπαρίζου εκφράζει ένα πάθος που αψηφά τις κοινωνικές προκαταλήψεις. Γιατί ο αγνός έρωτας θεωρείται μερικές φορές **επανάσταση**;", "★ Έχεις νιώσει ποτέ την ανάγκη να υπερασπιστείς μια συναισθηματική σου επιλογή απέναντι στους άλλους;"),
            ("Η στίχος λέει πως αν η αγάπη είναι αμαρτία, η πρωταγωνίστρια δέχεται να πληρώσει οποιοδήποτε τίμημα. Είναι η **αφοσίωση** μια μορφή δύναμης;", "★ Πιστεύεις ότι οι άνθρωποι σήμερα είναι διατεθειμένοι να κάνουν θυσίες για την αγάπη;"),
            ("Το τραγούδι αντιπαραθέτει την ηθική της κοινωνίας με την **αλήθεια** των συναισθημάτων. Πώς μπορούμε να διατηρήσουμε την αυθεντικότητά μας όταν δεχόμαστε **κριτική**;", "★ Πόσο επηρεάζει η γνώμη του κοινωνικού περιβάλλοντος τις προσωπικές σου αποφάσεις;"),
            ("Η ερμηνεία ξεχειλίζει από **τόλμη** και συναίσθημα. Γιατί τα δραματικά ερωτικά τραγούδια παραμένουν τόσο δημοφιλή στην ελληνική μουσική;", "★ Ποιο είναι το αγαπημένο σου ελληνικό ερωτικό τραγούδι που σου προκαλεί δυνατά συναισθήματα;"),
            ("Η αποδοχή των συνεπειών μιας επιλογής φέρνει την εσωτερική **λύτρωση**. Πώς ξεπερνάμε τις ενοχές που μας επιβάλλουν οι άλλοι;", "★ Ποιο είναι το πιο σημαντικό μάθημα που σου έχει διδάξει μια δυνατή ερωτική εμπειρία;")
        ],
        "round2": [
            "Η απόλυτη αφοσίωση στον έρωτα είναι ιδανικό που εμπνέει, αλλά μπορεί να γίνει επικίνδυνη αν χάσει κανείς τον εαυτό του. Ας το συζητήσουμε.",
            "Οι κοινωνικοί κανόνες για τις σχέσεις έχουν αλλάξει, όμως η φωνή της κοινωνικής **κριτικής** παραμένει ισχυρή. Τι πιστεύετε;",
            "Η αληθινή αγάπη δεν χρειάζεται την έγκριση κανενός για να είναι έγκυρη και πολύτιμη. Μοιραστείτε την άποψή σας."
        ],
        "lang_focus_title": "Υποθετικοί λόγοι του πραγματικού και έκφραση όρου ('Αν είναι ... τότε')",
        "lang_focus_desc": "Για να εκφράσουμε μια υπόθεση στο παρόν ή το μέλλον χρησιμοποιούμε τη δομή 'Αν + Οριστική ... τότε + Οριστική/Προστακτική' (π.χ. 'Αν είναι η αγάπη αμαρτία, πάω στην κόλαση').",
        "lang_focus_examples": [
            "Αν είναι η αγάπη αμαρτία, τότε κανείς δεν είναι αθώος.",
            "Αν νιώθεις έτοιμος να διεκδικήσεις τα όνειρά σου, μη διστάζεις.",
            "Αν ακούσουμε την καρδιά μας, θα βρούμε τη σωστή απάντηση."
        ],
        "final_challenge": "Σε ζευγάρια, δραματοποιήστε έναν διάλογο όπου ο ένας χαρακτήρας διστάζει να εκφράσει τα συναισθήματά του λόγω φόβου και ο άλλος τον ενθαρρύνει με τόλμη.",
        "mistakes": [
            ("Αν <span class=\"mistake-highlight\">θα είναι</span> η αγάπη αμαρτία.", "Αν <span class=\"mistake-highlight\">είναι</span> η αγάπη αμαρτία.", "(Στην υποθετική πρόταση μετά το 'αν' δεν χρησιμοποιούμε το 'θα'.)"),
            ("Δεν με νοιάζει <span class=\"mistake-highlight\">για την</span> κριτική.", "Δεν με νοιάζει <span class=\"mistake-highlight\">η</span> κριτική.", "(Το ρήμα 'με νοιάζει' συντάσσεται με ονομαστική.)"),
            ("Είναι έτοιμη <span class=\"mistake-highlight\">για να πάει</span>.", "Είναι έτοιμη <span class=\"mistake-highlight\">να πάει</span>.", "(Μετά το 'έτοιμος' χρησιμοποιούμε απευθείας το 'να'.)")
        ]
    },

    "el/faros.html": {
        "title_theme": "Ελπίδα, Καθοδήγηση & Φιλία",
        "theme_bullets": ["Ο φάρος ως σύμβολο", "Η υποστήριξη στα δύσκολα", "Η αναζήτηση κατεύθυνσης", "Η ζεστασιά της συντροφικότητας"],
        "vocab": [
            {"word": "Ο φάρος", "def": "Ψηλό κτίσμα με ισχυρό φως στη θάλασσα για καθοδήγηση των πλοίων.", "ex": "Ο φάρος φωτίζει το σκοτάδι και δείχνει το δρόμο της επιστροφής.", "opp": "Το σκοτάδι"},
            {"word": "Η καθοδήγηση", "def": "Η παροχή βοήθειας και προσανατολισμού σε κάποιον που ψάχνει λύση.", "ex": "Στις δύσκολες στιγμές χρειαζόμαστε την καθοδήγηση ενός αληθινού φίλου.", "opp": "Η παραπλάνηση"},
            {"word": "Το καταφύγιο", "def": "Ασφαλές μέρος προστασίας από τις καταιγίδες της ζωής.", "ex": "Η αγκαλιά των αγαπημένων μας είναι το πιο ζεστό καταφύγιο.", "opp": "Η έκθεση"},
            {"word": "Η ελπίδα", "def": "Προσδοκία και αισιόδοξη πίστη για ένα καλύτερο μέλλον.", "ex": "Το φως του φάρου κρατά ζωντανή την ελπίδα των ναυτικών.", "opp": "Η απελπισία"},
            {"word": "Η τρικυμία", "def": "Μεγάλη θαλασσοταραχή, μεταφορικά οι δυσκολίες της ζωής.", "ex": "Μετά από κάθε τρικυμία έρχεται πάντα η γαλήνη.", "opp": "Η γαλήνη"},
            {"word": "Ο προσανατολισμός", "def": "Η ικανότητα να βρίσκει κανείς τη σωστή κατεύθυνση.", "ex": "Χωρίς στόχους χάνεται ο προσανατολισμός μας στην καθημερινότητα.", "opp": "Η σύγχυση"},
            {"word": "Η αλληλεγγύη", "def": "Η έμπρακτη συμπαράσταση και υποστήριξη μεταξύ των ανθρώπων.", "ex": "Η αλληλεγγύη είναι η δύναμη που μας κρατά ενωμένους.", "opp": "Ο ατομικισμός"},
            {"word": "Η γαλήνη", "def": "Ηρεμία της θάλασσας και εσωτερική ειρήνη της ψυχής.", "ex": "Η γαλήνη επιστρέφει μόλις φανεί το λιμάνι.", "opp": "Η ταραχή"},
            {"word": "Το λιμάνι", "def": "Ασφαλής χώρος υποδοχής πλοίων, συμβολικά η εστία.", "ex": "Όλοι ψάχνουμε ένα φιλόξενο λιμάνι να ξαποστάσουμε.", "opp": "Πέλαγος"},
            {"word": "Η συντροφικότητα", "def": "Η ζεστή σχέση φιλίας και αμοιβαίας συμπαράστασης.", "ex": "Η συντροφικότητα κάνει το ταξίδι της ζωής πιο όμορφο.", "opp": "Η μοναξιά"}
        ],
        "round1": [
            ("Στο τραγούδι 'Φάρος', ο Κωστής Μαραβέγιας χρησιμοποιεί την εικόνα του φάρου ως σύμβολο ελπίδας και προστασίας. Ποιος άνθρωπος στη ζωή σου λειτουργεί ως **φάρος** στις δύσκολες στιγμές;", "★ Πώς προσπαθείς εσύ να γίνεις στήριγμα για τους φίλους σου όταν αντιμετωπίζουν μια **τρικυμία**;"),
            ("Ο στίχος μιλά για την ανάγκη να βρούμε ένα ασφαλές **καταφύγιο** όταν όλα γύρω μας αλλάζουν. Τι σου προσφέρει εσωτερική **γαλήνη** και ηρεμία;", "★ Ποιο είναι το δικό σου αγαπημένο μέρος όπου καταφεύγεις για να ξεκουραστείς;"),
            ("Η μουσική του Μαραβέγια είναι γεμάτη θετική ενέργεια και **συντροφικότητα**. Πώς μπορεί η αλληλεγγύη να αλλάξει την ατμόσφαιρα σε μια ομάδα;", "★ Θυμάσαι μια στιγμή που η βοήθεια ενός αγνώστου σου έδωσε ξανά **ελπίδα**;"),
            ("Η αναζήτηση σωστού **προσανατολισμού** είναι κεντρικό θέμα στη νεανική ηλικία. Πώς παίρνεις σημαντικές αποφάσεις όταν νιώθεις χαμένος;", "★ Προτιμάς να συμβουλεύεσαι δικούς σου ανθρώπους ή να εμπιστεύεσαι το ένστικτό σου;"),
            ("Το τραγούδι μας θυμίζει πως μετά από κάθε φουρτούνα υπάρχει ένα φιλόξενο **λιμάνι**. Ποια είναι η πιο όμορφη ανάμνηση που έχεις από ένα ταξίδι στη θάλασσα;", "★ Ποιο μουσικό κομμάτι σε ταξιδεύει αμέσως στο ελληνικό καλοκαίρι;")
        ],
        "round2": [
            "Ο καθένας μας οφείλει να γίνει ο 'φάρος' του εαυτού του αντί να περιμένει καθοδήγηση από τους άλλους. Ας το συζητήσουμε.",
            "Στη σύγχρονη εποχή της τεχνολογίας, οι άνθρωποι έχουν χάσει την πραγματική **συντροφικότητα** και την **αλληλεγγύη**. Τι πιστεύετε;",
            "Οι δυσκολίες και οι 'τρικυμίες' της ζωής είναι απαραίτητες για να εκτιμήσουμε την αξία της γαλήνης. Μοιραστείτε την άποψή σας."
        ],
        "lang_focus_title": "Εκφράσεις σκοπού και παρομοίωσης ('σαν ... να', 'για να')",
        "lang_focus_desc": "Για να εκφράσουμε σκοπό χρησιμοποιούμε το 'για να + Υποτακτική' και για παρομοίωση το 'σαν + Ουσιαστικό' ή 'σαν να + Υποτακτική'.",
        "lang_focus_examples": [
            "Στέκεται εκεί σαν φάρος για να φωτίζει το δρόμο μας.",
            "Ταξιδεύουμε για να ανακαλύψουμε νέες εμπειρίες.",
            "Μιλάει σαν να γνωρίζει όλα τα μυστικά της θάλασσας."
        ],
        "final_challenge": "Σε ομάδες, ετοιμάστε μια σύντομη κάρτα ή μήνυμα εμψύχωσης προς έναν φίλο που δοκιμάζεται, χρησιμοποιώντας μεταφορές από τη θάλασσα και το φως.",
        "mistakes": [
            ("Είναι σαν <span class=\"mistake-highlight\">ένας</span> φάρος.", "Είναι σαν <span class=\"mistake-highlight\">φάρος</span> στη νύχτα.", "(Μετά το 'σαν' σε γενικές παρομοιώσεις παραλείπουμε το αόριστο άρθρο.)"),
            ("Ήρθε <span class=\"mistake-highlight\">για να βοήθεια</span>.", "Ήρθε <span class=\"mistake-highlight\">για βοήθεια / για να βοηθήσει</span>.", "(Μετά το 'για να' απαιτείται ρήμα, ενώ το 'για' συντάσσεται με ουσιαστικό.)"),
            ("Χρειάζομαι <span class=\"mistake-highlight\">από</span> γαλήνη.", "Χρειάζομαι γαλήνη.", "(Το ρήμα 'χρειάζομαι' συντάσσεται απευθείας με αιτιατική χωρίς πρόθεση.)")
        ]
    },

    "el/na-i-agapi-na.html": {
        "title_theme": "Ερχομός της Αγάπης & Χαρά",
        "theme_bullets": ["Η συνάντηση με τον έρωτα", "Η χαρά της υπόσχεσης", "Η τρυφερότητα", "Η αναγέννηση της ψυχής"],
        "vocab": [
            {"word": "Η αγάπη", "def": "Το βαθύ αίσθημα στοργής, αφοσίωσης και συντροφικότητας.", "ex": "Να η αγάπη να, έρχεται να ομορφύνει τη ζωή μας.", "opp": "Το μίσος"},
            {"word": "Η προσμονή", "def": "Η λαχτάρα και η αναμονή για κάτι όμορφο που περιμένουμε.", "ex": "Η προσμονή του έρωτα κάνει την καρδιά να χτυπά πιο γρήγορα.", "opp": "Η αδιαφορία"},
            {"word": "Η τρυφερότητα", "def": "Γλυκιά και απαλή συμπεριφορά γεμάτη φροντίδα.", "ex": "Ένα βλέμμα γεμάτο τρυφερότητα αρκεί για να διώξει τη λύπη.", "opp": "Η σκληρότητα"},
            {"word": "Η αναγέννηση", "def": "Το ξαναγέννημα της ελπίδας και της διάθεσης για ζωή.", "ex": "Ο ερχομός της αγάπης φέρνει μια πραγματική αναγέννηση.", "opp": "Ο μαρασμός"},
            {"word": "Το θαύμα", "def": "Γεγονός που προκαλεί ανεξήγητη χαρά και θαυμασμό.", "ex": "Η συνάντηση δύο ανθρώπων μοιάζει συχνά με θαύμα.", "opp": "Η ρουτίνα"},
            {"word": "Η αγκαλιά", "def": "Το άνοιγμα των χεριών για να σφίξουμε τον αγαπημένο μας.", "ex": "Στην αγκαλιά σου βρίσκω όλη τη ζεστασιά που έψαχνα.", "opp": "Η απόσταση"},
            {"word": "Το χαμόγελο", "def": "Έκφραση χαράς στο πρόσωπο που φωτίζει τη μέρα.", "ex": "Το χαμόγελό της ήταν η καλύτερη υπόσχεση για το μέλλον.", "opp": "Το δάκρυ"},
            {"word": "Η ευτυχία", "def": "Κατάσταση πλήρους ικανοποίησης και ψυχικής γαλήνης.", "ex": "Η ευτυχία κρύβεται στις απλές στιγμές που μοιραζόμαστε.", "opp": "Η δυστυχία"},
            {"word": "Η πίστη", "def": "Η ακλόνητη εμπιστοσύνη στη δύναμη των συναισθημάτων.", "ex": "Διατηρεί την πίστη του ότι ο αληθινός έρωτας θα φανεί.", "opp": "Η αμφιβολία"},
            {"word": "Η γιορτή", "def": "Εκδήλωση μεγάλης χαράς και ενθουσιασμού.", "ex": "Κάθε μέρα μαζί σου μοιάζει με αληθινή γιορτή.", "opp": "Πένθος"}
        ],
        "round1": [
            ("Στο διαχρονικό τραγούδι 'Να η αγάπη να', ο Γιάννης Πάριος τραγουδά για τη στιγμή που ο έρωτας φτάνει επιτέλους στη ζωή μας. Πώς αλλάζει η οπτική μας για τον κόσμο όταν νιώθουμε αυτή την **αναγέννηση**;", "★ Θυμάσαι μια στιγμή που ένιωσες ότι μια νέα γνωριμία έφερε αληθινή χαρά στη μέρα σου;"),
            ("Ο στίχος εκφράζει την ανακούφιση μετά από μια περίοδο **προσμονής**. Γιατί η αναμονή κάνει την τελική συνάντηση να μοιάζει με **θαύμα**;", "★ Πιστεύεις ότι τα καλύτερα πράγματα στη ζωή έρχονται εκεί που δεν τα περιμένουμε;"),
            ("Ο Πάριος είναι ο κατεξοχήν τραγουδιστής της **τρυφερότητας**. Πόσο σημαντικό είναι να εκφράζουμε τα συναισθήματά μας με λόγια και **αγκαλιές**;", "★ Είναι εύκολο για εσένα να λες 'σ' αγαπώ' στους ανθρώπους που νοιάζεσαι;"),
            ("Το τραγούδι μετατρέπει την καθημερινότητα σε μια μικρή **γιορτή**. Ποιες είναι οι απλές συνήθειες που φέρνουν **ευτυχία** στη δική σου ζωή;", "★ Πώς γιορτάζεις τις μικρές προσωπικές σου επιτυχίες με τους φίλους σου;"),
            ("Η μελωδία αποπνέει ζεστασιά και αισιοδοξία. Ποιος είναι ο ρόλος της ερωτικής μουσικής στη διατήρηση της **πίστης** μας στην αγάπη;", "★ Ποιο ερωτικό τραγούδι θεωρείς το πιο ρομαντικό στην ελληνική δισκογραφία;")
        ],
        "round2": [
            "Ο ερχομός της αγάπης δεν είναι θέμα τύχης αλλά ετοιμότητας της δικής μας ψυχής να υποδεχτεί τον άλλο. Ας το συζητήσουμε.",
            "Στις μέρες μας, οι άνθρωποι φοβούνται την **τρυφερότητα** και προτιμούν τη συναισθηματική απόσταση. Τι πιστεύετε;",
            "Η αληθινή **ευτυχία** χτίζεται μέρα με τη μέρα και δεν εξαρτάται μόνο από τον αρχικό ενθουσιασμό. Μοιραστείτε την άποψή σας."
        ],
        "lang_focus_title": "Δεικτικά μορίσματα και έκφραση άμεσης παρουσίας ('Να ... που')",
        "lang_focus_desc": "Το δεικτικό μόριο 'να' χρησιμοποιείται για να στρέψουμε την προσοχή σε κάτι που φτάνει ή εμφανίζεται τώρα (π.χ. 'Να η αγάπη', 'Να το λεωφορείο').",
        "lang_focus_examples": [
            "Να η αγάπη που περιμέναμε τόσον καιρό!",
            "Να η ευκαιρία να αλλάξουμε τη ζωή μας προς το καλύτερο.",
            "Να τα αποτελέσματα της προσπάθειάς μας που φέρνουν χαμόγελα."
        ],
        "final_challenge": "Σε ζευγάρια, ετοιμάστε έναν σύντομο ρομαντικό διάλογο υποδοχής ή συνάντησης δύο ανθρώπων που ξαναβρίσκονται μετά από καιρό.",
        "mistakes": [
            ("Να <span class=\"mistake-highlight\">η αγάπη έρχεται</span>.", "Να <span class=\"mistake-highlight\">η αγάπη</span>! / Να που έρχεται η αγάπη.", "(Μετά το 'να' χρησιμοποιούμε απευθείας ουσιαστικό ή τη σύνδεση 'να που'.)"),
            ("Νιώθω <span class=\"mistake-highlight\">μεγάλη ευτυχία για</span> σένα.", "Νιώθω μεγάλη ευτυχία μαζί σου.", "(Χρησιμοποιούμε την πρόθεση 'μαζί' για να δηλώσουμε κοινή ευτυχία.)"),
            ("Περιμένω <span class=\"mistake-highlight\">για την</span> αγάπη.", "Περιμένω την αγάπη.", "(Το ρήμα 'περιμένω' συντάσσεται απευθείας με αιτιατική χωρίς την πρόθεση 'για'.)")
        ]
    },

    # --------------------------------------------------------------------------
    # RUSSIAN (3 files)
    # --------------------------------------------------------------------------
    "ru/jim-beam.html": {
        "title_theme": "Побег от реальности & Осенняя меланхолия",
        "theme_bullets": ["Осенняя тоска", "Бегство от быта", "Искренность юности", "Ночные разговоры"],
        "vocab": [
            {"word": "Танцплощадка", "def": "Открытое или закрытое место для танцев и встреч.", "ex": "Грустная танцплощадка пустует в осеннем парке.", "opp": "Уединение"},
            {"word": "Лихорадка", "def": "Взволнованное, неспокойное состояние духа.", "ex": "Танцы как в лихорадке помогают забыть о проблемах.", "opp": "Спокойствие"},
            {"word": "Тревога", "def": "Чувство беспокойства и ожидания неприятностей.", "ex": "Её голос излучает тихую тревогу и грусть.", "opp": "Умиротворение"},
            {"word": "Побег", "def": "Желание уйти от серости или сложных обстоятельств.", "ex": "Ночные гуляния под звёздами — это их маленький побег.", "opp": "Возвращение"},
            {"word": "Меланхолия", "def": "Мягкая грусть, задумчивое настроение.", "ex": "Осенний дождь настраивает на романтическую меланхолию.", "opp": "Радость"},
            {"word": "Искренность", "def": "Открытость и подлинность в проявлении чувств.", "ex": "Земфира ценят за редкую искренность в каждой строчке.", "opp": "Фальшь"},
            {"word": "Крыша", "def": "Верхнее покрытие здания, место встреч над городом.", "ex": "Разговоры на крыше под звёздами запоминаются навсегда.", "opp": "Подвал"},
            {"word": "Осень", "def": "Время года, символизирующее увядание и уединение.", "ex": "Осень срывает последние листья с городских деревьев.", "opp": "Весна"},
            {"word": "Бунт", "def": "Протест против скучных правил и банальности.", "ex": "В её песнях всегда чувствуется дух юношеского бунта.", "opp": "Покорность"},
            {"word": "Риск", "def": "Готовность к смелым поступкам вопреки страху.", "ex": "Мы рискуем и допиваем до дна, не думая о завтрашнем дне.", "opp": "Осторожность"}
        ],
        "round1": [
            ("В песне 'Jim Beam' Земфира поёт: 'Грустная танцплощадка... ну а я излучаю тревогу и грусть'. Почему осенняя **меланхолия** в юности ощущается так остро и поэтично?", "★ Помните ли вы момент из своей жизни, когда вам хотелось уйти с шумного праздника и побыть в тишине?"),
            ("Герои песни пьют из высоких стаканов и собираются гулять по крыше под звёздами. Почему необычные места помогают почувствовать свободный **побег** от быта?", "★ Есть ли у вас в городе любимое место, где приятно посмотреть на город с высоты?"),
            ("Строчки 'Осень срывает листья, полетели по небу нервы' передают эмоциональный накал. Как вы справляетесь с осенней **тревогой** и усталостью?", "★ Какое занятие или напиток помогает вам согреться и вернуть душевный покой в холодные дни?"),
            ("В песне упоминается группа 'Агата Кристи' и 1991 год. Какая музыка ассоциируется у вас с вашими подростковыми годами и первым **бунтом**?", "★ Какая группа или исполнитель стали для вас главным музыкальным открытием юности?"),
            ("Смелость 'допить до дна' и шагнуть вперёд отражает готовность к **риску**. Что для вас означает жить искренне и не бояться ошибок?", "★ Считаете ли вы, что небольшая спонтанность необходима для счастья?")
        ],
        "round2": [
            "Побег от реальности с помощью ночных прогулок и музыки — это естественный этап взросления, а не проявление слабости. Давайте поспорим.",
            "Искренняя **меланхолия** в искусстве привлекает людей больше, чем наигранный позитив. Что вы думаете?",
            "Юношеский **бунт** и романтика со временем неизбежно уступают место практичности и спокойствию. Поделитесь мнением."
        ],
        "lang_focus_title": "Употребление предлогов направления и места ('по', 'на', 'в')",
        "lang_focus_desc": "Для выражения движения по поверхности используется предлог 'по + дательный падеж' (es: 'по крышам', 'по стаканам'). Местонахождение обозначается 'на/в + предложный падеж' (es: 'на крыше').",
        "lang_focus_examples": [
            "Мы гуляли по осеннему городу и слушали любимые песни.",
            "На крыше под звёздами было удивительно тепло и тихо.",
            "Разговоры по душам помогают преодолеть любую тревогу."
        ],
        "final_challenge": "В парах разыграйте разговор двух друзей, которые сидят на осенней террасе и делятся своими сокровенными мечтами о будущем.",
        "mistakes": [
            ("Мы гуляли <span class=\"mistake-highlight\">по крышу</span>.", "Мы гуляли <span class=\"mistake-highlight\">по крыше</span>.", "(После предлога 'по' при обозначении движения по поверхности используется дательный падеж.)"),
            ("Я скучаю <span class=\"mistake-highlight\">за</span> летом.", "Я скучаю <span class=\"mistake-highlight\">по</span> лету.", "(С глаголом 'скучать' в литературном русском языке используется предлог 'по'.)"),
            ("Это делает меня <span class=\"mistake-highlight\">грустным</span>.", "Это заставляет меня <span class=\"mistake-highlight\">грустить</span> / наводит на меня грусть.", "(Избегайте буквального перевода 'make me sadness'.)")
        ]
    },

    "ru/u-mamy-est-sekret.html": {
        "title_theme": "Материнство, Тайная жизнь & Личность",
        "theme_bullets": ["Личность за ролью матери", "Скрытые мечты", "Семейные тайны", "Стереотипы о женщинах"],
        "vocab": [
            {"word": "Секрет", "def": "То, что держится в тайне от других людей.", "ex": "У мамы есть секрет, о котором никто в семье не догадывается.", "opp": "Явность"},
            {"word": "Личность", "def": "Человек с его индивидуальными чертами и интересами.", "ex": "За ролью заботливой матери скрывается яркая личность.", "opp": "Безликость"},
            {"word": "Стереотип", "def": "Упрощённое и шаблонное представление о человеке.", "ex": "Песня разрывает стереотипы о том, как должна вести себя мать.", "opp": "Индивидуальность"},
            {"word": "Мечта", "def": "Заветное желание, дарящее вдохновение.", "ex": "Каждый человек имеет право на личные мечты и увлечения.", "opp": "Явь"},
            {"word": "Забота", "def": "Внимание и поддержка, оказываемые близким.", "ex": "Материнская забота требует огромных душевных сил.", "opp": "Равнодушие"},
            {"word": "Свобода", "def": "Возможность действовать по своему усмотрению.", "ex": "Сохранять личную свободу важно даже в крепком браке.", "opp": "Зависимость"},
            {"word": "Ирония", "def": "Тонкая насмешка, позволяющая говорить о сложном.", "ex": "Монеточка с иронией поёт о семейных буднях и секретах.", "opp": "Серьёзность"},
            {"word": "Профессия", "def": "Род трудовой деятельности и призвание.", "ex": "Совмещать профессию и воспитание детей — нелёгкий труд.", "opp": "Безделье"},
            {"word": "Принятие", "def": "Признание права другого человека быть собой.", "ex": "Принятие близких со всеми их тайнами укрепляет семью.", "opp": "Осуждение"},
            {"word": "Удивление", "def": "Чувство, вызванное чем-то неожиданным.", "ex": "Открытие маминого секрета вызвало у детей доброе удивление.", "opp": "Привычность"}
        ],
        "round1": [
            ("В песне 'У мамы есть секрет' Монеточка показывает, что у родителей есть своя личная жизнь, не связанная с бытом. Почему детям часто трудно увидеть в маме отдельную **личность** со своими мечтами?", "★ Узнавали ли вы когда-нибудь неожиданные факты о прошлом или увлечениях своих родителей?"),
            ("Текст с юмором разрушает социальные **стереотипы** о 'идеальной матери'. Должна ли женщина жертвовать всеми своими интересами ради семьи?", "★ Как, по-вашему, сохранить баланс между семейным долгом и личной **свободой**?"),
            ("Песня подчеркивает важность того, чтобы у каждого человека было пространство для личного **секрета**. Нужна ли полная откровенность в отношениях?", "★ Считаете ли вы, что личные границы необходимы даже между самыми близкими людьми?"),
            ("Монеточка использует лёгкую **иронию**, чтобы поднять важную тему женской самореализации. Помогает ли юмор обсуждать сложные семейные вопросы?", "★ В каких ситуациях шутка помогала вам разрядить напряжение дома?"),
            ("Понимание того, что родители — обычные люди со своими слабостями, приходит с возрастом. Как это открытие меняет наше отношение к ним?", "★ Какое главное качество вы больше всего цените в своих родителях?")
        ],
        "round2": [
            "Каждый член семьи имеет право на личные секреты и увлечения, о которых не обязаны знать остальные. Давайте поспорим.",
            "Современное общество продолжает предъявлять к матерям завышенные требования и **стереотипы**. Что вы думаете?",
            "Искреннее **принятие** индивидуальности друг друга — это основа крепкого и счастливого брака. Поделитесь мнением."
        ],
        "lang_focus_title": "Употребление конструкции 'У + родительный падеж + есть'",
        "lang_focus_desc": "Для выражения обладания или наличия качеств используется конструкция 'У (кого?) + есть + (что?)' (es: 'У мамы есть секрет', 'У них есть мечты').",
        "lang_focus_examples": [
            "У каждого человека есть свои тайны и мечты.",
            "У родителей есть право на личное время и отдых.",
            "У нас есть глубокое уважение к выбору каждого члена семьи."
        ],
        "final_challenge": "В парах разыграйте сцену, где взрослый ребёнок случайно узнаёт о необычном хобби своего родителя и поддерживает его.",
        "mistakes": [
            ("У маме <span class=\"mistake-highlight\">есть</span> секрет.", "У <span class=\"mistake-highlight\">мамы</span> есть секрет.", "(После предлога 'у' существительное используется в родительном падеже.)"),
            ("Она хочет <span class=\"mistake-highlight\">быть свободная</span>.", "Она хочет быть <span class=\"mistake-highlight\">свободной</span>.", "(После глагола 'быть' прилагательное употребляется в творительном падеже.)"),
            ("Я согласен <span class=\"mistake-highlight\">с этим стереотипом</span>.", "Я не согласен <span class=\"mistake-highlight\">с этим стереотипом</span>.", "(Следите за корректным согласованием предлога 'с' и творительного падежа.)")
        ]
    },

    "ru/vyshe-domov.html": {
        "title_theme": "Юность, Полёт & Поиск себя",
        "theme_bullets": ["Романтика больших городов", "Чувство свободы", "Воспоминания о юности", "Преодоление страха"],
        "vocab": [
            {"word": "Высота", "def": "Пространство высоко над землёй, символ свободы.", "ex": "Подняться выше домов — значит увидеть мир по-новому.", "opp": "Глубина"},
            {"word": "Полёт", "def": "Движение в воздухе, состояние эмоционального подъёма.", "ex": "Ощущение полёта дарит надежду на перемены.", "opp": "Падение"},
            {"word": "Пространство", "def": "Свободное место вокруг, дарящее ощущение шири.", "ex": "Ночной город открывает бесконечное пространство для мечты.", "opp": "Теснота"},
            {"word": "Вдохновение", "def": "Творческий подъём и прилив душевных сил.", "ex": "Музыка Сироткина дарит особое вдохновение и светлость.", "opp": "Апатия"},
            {"word": "Свобода", "def": "Отсутствие ограничений и возможность выбирать свой путь.", "ex": "Быть выше крыш — это метафора абсолютной свободы.", "opp": "Неволя"},
            {"word": "Город", "def": "Крупный населённый пункт с высокими зданиями.", "ex": "Ночной город сияет тысячами огней под ногами.", "opp": "Деревня"},
            {"word": "Дуэт", "def": "Совместное исполнение или близкий союз двух людей.", "ex": "Их искренний дуэт звучит очень трогательно и чисто.", "opp": "Соло"},
            {"word": "Дыхание", "def": "Процесс вдоха и выдоха, знак жизни и энергии.", "ex": "Затаить дыхание от красоты ночного пейзажа.", "opp": "Удушье"},
            {"word": "Мечтательность", "def": "Склонность предаваться фантазиям и мечтам.", "ex": "Юношеская мечтательность помогает верить в чудеса.", "opp": "Прагматизм"},
            {"word": "Горизонт", "def": "Видимая линия соединения неба и земли, перспектив.", "ex": "Перед ними открываются новые далёкие горизонты.", "opp": "Тупик"}
        ],
        "round1": [
            ("В песне 'Выше домов' Сироткин создаёт образ взлёта над повседневным городом. Почему стремление подняться над рутиной так важно для сохранения **вдохновения**?", "★ Какое место или занятие помогает вам оторваться от забот и почувствовать себя свободным?"),
            ("Клип и музыка передают дух юношеской дружбы и поиска своего места. Помните ли вы то ощущение бесконечных возможностей, когда вы были младше?", "★ Что из мечтаний вашей юности вам удалось воплотить в реальность?"),
            ("Метафора 'выше домов' символизирует победу над страхами и сомнениями. Как научиться доверять себе и не бояться **высоты** во всех смыслах?", "★ Какой смелый шаг в жизни дался вам труднее всего, но принёс радость?"),
            ("Атмосфера песни сочетает в себе светлую грусть и ночной романтизм большого **города**. Любите ли вы прогулки по ночному городу?", "★ Чем для вас городская ночная атмосфера отличается от дневной суеты?"),
            ("Мелодичный голос и акустический звук создают чувство полного **полёта**. Какое значение вы придаёте искренности в современной indie-музыке?", "★ Какая песня всегда помогает вам обрести душевное равновесие?")
        ],
        "round2": [
            "Чувство полёта и романтическая **мечтательность** необходимы человеку в любом возрасте, а не только в юности. Давайте поспорим.",
            "Жизнь в большом городе скорее ограничивает личную **свободу**, чем дарит ощущение пространства. Что вы думаете?",
            "Умение преодолевать свои внутренние страхи — это главный источник личного роста. Поделитесь мнением."
        ],
        "lang_focus_title": "Сравнительная степень наречий и прилагательных ('выше', 'сильнее')",
        "lang_focus_desc": "Простая сравнительная степень образуется с помощью суффиксов '-е', '-ее' (es: 'выше домов', 'сильнее страха', 'быстрее ветра').",
        "lang_focus_examples": [
            "Мечты взлетают выше самых высоких городских домов.",
            "С каждым днём наше стремление к свободе становится сильнее.",
            "Ночной город кажется тише и уютнее, чем днём."
        ],
        "final_challenge": "Напишите короткое поэтическое эссе или рассказ от первого лица о ночном виде на город с высоты птичьего полёта.",
        "mistakes": [
            ("Подняться <span class=\"mistake-highlight\">более выше</span> домов.", "Подняться <span class=\"mistake-highlight\">выше</span> домов.", "(Не сочетайте 'более' с простой сравнительной степенью на '-ее/-е'.)"),
            ("Я чувствую себя <span class=\"mistake-highlight\">свободно</span>.", "Я чувствую себя <span class=\"mistake-highlight\">свободным</span>.", "(После 'чувствовать себя' используется творительный падеж прилагательного.)"),
            ("Смотреть <span class=\"mistake-highlight\">на город с высоту</span>.", "Смотреть <span class=\"mistake-highlight\">на город с высоты</span>.", "(После предлога 'с' существительное стоит в родительном падеже.)")
        ]
    },

    # --------------------------------------------------------------------------
    # SPANISH (1 file)
    # --------------------------------------------------------------------------
    "es/nuevo-verano.html": {
        "title_theme": "Nuevo Verano & Nostalgia de la Infancia",
        "theme_bullets": ["El paso del tiempo", "La melancolía estival", "Crecer y madurar", "La luz de los recuerdos"],
        "vocab": [
            {"word": "El verano", "def": "Estación cálida asociada con las vacaciones y la libertad.", "ex": "Un nuevo verano llega cargado de promesas y nostalgia.", "opp": "El invierno"},
            {"word": "La infancia", "def": "Período de la vida humana desde el nacimiento hasta la pubertad.", "ex": "Los recuerdos de la infancia regresan siempre con el calor estival.", "opp": "La madurez"},
            {"word": "Nostalgia", "def": "Pena de verse ausente de personas o lugares queridos.", "ex": "Amaia canta con una dulce nostalgia por los tiempos pasados.", "opp": "Entusiasmo futuro"},
            {"word": "Madurar", "def": "Crecer en experiencia y dejar atrás la ingenuidad.", "ex": "Madurar implica aceptar que los veranos ya no son como antes.", "opp": "Permanecer infantil"},
            {"word": "La brisa", "def": "Viento suave y fresco que alivia el calor.", "ex": "La brisa marina trae aromas de recuerdos olvidados.", "opp": "El bochorno"},
            {"word": "El refugio", "def": "Lugar o momento que ofrece seguridad y consuelo.", "ex": "El pueblo de la infancia es su refugio favorito durante el año.", "opp": "La intemperie"},
            {"word": "Efímero", "def": "Que tiene una duración muy corta en el tiempo.", "ex": "La belleza del estío es efímera pero deja una huella imborrable.", "opp": "Duradero"},
            {"word": "La inocencia", "def": "Falta de malicia y mirada pura ante el mundo.", "ex": "Perder la inocencia es parte inevitable del proceso de crecer.", "opp": "La malicia"},
            {"word": "El reencuentro", "def": "Volver a encontrarse con amigos de siempre.", "ex": "El verano es el tiempo perfecto para el reencuentro con los seres queridos.", "opp": "La despedida"},
            {"word": "La transformación", "def": "Cambio de forma o de actitud ante la vida.", "ex": "Cada estación trae consigo una sutil transformación interior.", "opp": "La permanencia"}
        ],
        "round1": [
            ("En 'Nuevo Verano', Amaia reflexiona sobre el comienzo de un nuevo estío y el contraste con los veranos de la infancia. ¿Por qué los veranos de cuando éramos niños parecían infinitos?", "★ ¿Conservas algún hábito o tradición especial cuando llega la época estival?"),
            ("La canción combina una melodía luminosa con una letra cargada de **nostalgia**. ¿Es posible sentir melancolía y felicidad al mismo tiempo?", "★ ¿Qué aroma o sonido te transporta de inmediato a tus vacaciones pasadas?"),
            ("Amaia habla del proceso de **madurar** y de cómo cambian nuestras prioridades con los años. ¿Qué es lo que más echas de menos de tu **infancia**?", "★ ¿Sientes que has mantenido viva tu curiosidad infantil al hacerte adulto?"),
            ("El tema evoca los lugares que sirven de **refugio** frente al ajetreo de la vida cotidiana. ¿Cuál es tu lugar favorito para desconectar del estrés?", "★ ¿Prefieres pasar el verano en la tranquilidad del pueblo o explorando nuevos destinos?"),
            ("La fugacidad de los días estivales nos recuerda que todo es **efímero**. ¿De qué manera aprovechas al máximo el tiempo libre con tus amigos?", "★ ¿Cuál es el recuerdo estival más bonito que guardas en tu corazón?")
        ],
        "round2": [
            "Los veranos de la edad adulta pueden ser mucho más enriquecedores y libres que los de la infancia. Debatamos al respecto.",
            "La **nostalgia** por el pasado nos impide disfrutar plenamente del presente que estamos viviendo. ¿Qué opinas?",
            "Mantener un 'refugio' emocional al que regresar es indispensable para no perder nuestra identidad al crecer. Comparte tu punto de vista."
        ],
        "lang_focus_title": "El uso del pretérito imperfecto para describir recuerdos y rutinas pasadas",
        "lang_focus_desc": "Para evocar hábitos y estados emocionales en el pasado se utiliza el pretérito imperfecto de indicativo (ej: 'Jugábamos en la playa', 'Las tardes eran infinitas').",
        "lang_focus_examples": [
            "Cuando era niña, los veranos duraban una eternidad.",
            "Paseábamos por la orilla del mar mientras caía el sol.",
            "Amaia recordaba con cariño la inocencia de aquellos años."
        ],
        "final_challenge": "En parejas, redactad una postal o carta breve dirigida a vuestro 'yo' del pasado recordando un verano inolvidable.",
        "mistakes": [
            ("Cuando era niño, yo <span class=\"mistake-highlight\">he jugado</span> todo el día.", "Cuando era niño, yo <span class=\"mistake-highlight\">jugaba</span> todo el día.", "(Para rutinas pasadas en la infancia usa el pretérito imperfecto 'jugaba'.)"),
            ("Tengo nostalgia <span class=\"mistake-highlight\">de los</span> veranos pasados.", "Siento nostalgia <span class=\"mistake-highlight\">por</span> los veranos pasados.", "(Se suele decir 'sentir / tener nostalgia por algo'.)"),
            ("El verano me hace <span class=\"mistake-highlight\">sentir feliz</span>.", "El verano me pone <span class=\"mistake-highlight\">feliz</span> / me hace feliz.", "(Ambas formas son válidas, pero evita decir 'hace sentir feliz a mí'.)")
        ]
    }
}


def build_vocab_html(vocab_list, lang):
    cards_html = []

    # Headers by language
    headers = {
        "it": ("❤️ Concetti chiave ed emozioni", "🗣️ Vita, azioni e connessioni"),
        "el": ("❤️ Βασικές έννοιες & Συναισθήματα", "🗣️ Ζωή, Δράσεις & Σύνδεση"),
        "ru": ("❤️ Ключевые понятия и чувства", "🗣️ Жизнь, действия и связи"),
        "es": ("❤️ Conceptos clave y emociones", "🗣️ Vida, acciones y conexión")
    }
    h1, h2 = headers.get(lang, ("❤️ Key Concepts & Emotions", "🗣️ Life & Actions"))

    # 5 Key concepts
    cards_html.append(f'<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo);">{h1}</h3>')
    for item in vocab_list[:5]:
        opp_label = {"it": "Contrario", "el": "Αντίθετο", "ru": "Противоположность", "es": "Opuesto"}.get(lang, "Opposite")
        opp_html = f'<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>{opp_label} :</strong> <span class="vocab-opp-word" style="font-weight: 600;">{item["opp"]}</span></div>' if "opp" in item else ''
        w_esc = item['word'].replace("'", "\\'")
        d_esc = item['def'].replace("'", "\\'")
        e_esc = item['ex'].replace("'", "\\'")
        card = f'''<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">{item['word']}</div>
<div class="vocab-def">{item['def']}</div>
<div class="vocab-example">{item['ex']}</div>
{opp_html}
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{w_esc}', definition:'{d_esc}', example:'{e_esc}'}}, this)">+ Dictionary</button>
</div>'''
        cards_html.append(card)

    # 5 Actions/Life
    cards_html.append(f'<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo);">{h2}</h3>')
    for item in vocab_list[5:]:
        opp_label = {"it": "Contrario", "el": "Αντίθετο", "ru": "Противоположность", "es": "Opuesto"}.get(lang, "Opposite")
        opp_html = f'<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>{opp_label} :</strong> <span class="vocab-opp-word" style="font-weight: 600;">{item["opp"]}</span></div>' if "opp" in item else ''
        w_esc = item['word'].replace("'", "\\'")
        d_esc = item['def'].replace("'", "\\'")
        e_esc = item['ex'].replace("'", "\\'")
        card = f'''<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">{item['word']}</div>
<div class="vocab-def">{item['def']}</div>
<div class="vocab-example">{item['ex']}</div>
{opp_html}
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{w_esc}', definition:'{d_esc}', example:'{e_esc}'}}, this)">+ Dictionary</button>
</div>'''
        cards_html.append(card)

    title_step = {"it": "📚 Fase 2: Vocabolario", "el": "📚 Στάδιο 2: Λεξιλόγιο", "ru": "📚 Этап 2: Словарь", "es": "📚 Etapa 2: Vocabulario"}.get(lang, "📚 Stage 2: Vocabulary")

    return f'''<div class="round-block open" id="vocabulary">
      <div class="round-header" style="background:#E1F5EE; cursor:pointer;" onclick="COSY.toggleRound('vocabulary')">
        <span>{title_step}</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
        <div class="vocab-grid-10">
        {"\n".join(cards_html)}
        </div>
      </div>
    </div>'''


def build_discussion_html(round1_items, round2_items, lang):
    r1_html = []
    for main_q, pers_q in round1_items:
        item = f'''<div class="round-item"><div class="round-item-main">{main_q}</div>
<div class="round-item-personal">{pers_q}</div>
</div>'''
        r1_html.append(item)

    r2_html = []
    for debate_q in round2_items:
        item = f'''<div class="round-item"><div class="round-item-main">{debate_q}</div>
</div>'''
        r2_html.append(item)

    title_step = {"it": "💬 Fase 4: Discussione", "el": "💬 Στάδιο 4: Συζήτηση", "ru": "💬 Этап 4: Обсуждение", "es": "💬 Etapa 4: Discusión"}.get(lang, "💬 Stage 4: Discussion")

    return f'''<div class="round-block open" id="discussion">
      <div class="round-header" style="background:#EEEDFE; cursor:pointer;" onclick="COSY.toggleRound('discussion')">
        <span>{title_step}</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
        <div class="round-1" style="margin-bottom: 2rem;">
          <h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
{"\n".join(r1_html)}
        </div>
        <div class="round-2" style="margin-top: 2rem;">
          <h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
{"\n".join(r2_html)}
        </div>
      </div>
    </div>'''


def build_lang_focus_html(title, desc, examples, lang):
    ex_html = "\n".join([f'<li style="margin-bottom: 0.5rem; font-size: 0.9rem;">{ex}</li>' for ex in examples])
    title_step = {"it": "✨ Fase 5: Focus linguistico", "el": "✨ Στάδιο 5: Γλωσσικό σημείο", "ru": "✨ Этап 5: Языковой фокус", "es": "✨ Etapa 5: Enfoque lingüístico"}.get(lang, "✨ Stage 5: Language Focus")
    ex_label = {"it": "Esempi pratici:", "el": "Πρακτικά παραδείγματα:", "ru": "Практические примеры:", "es": "Ejemplos prácticos:"}.get(lang, "Practical examples:")

    return f'''<div class="round-block open" id="lang-focus">
      <div class="round-header" style="background:#FFF9E6; cursor:pointer;" onclick="COSY.toggleRound('lang-focus')">
        <span>{title_step}</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
        <div style="background: var(--cream); border-left: 4px solid var(--indigo); padding: 1.5rem; border-radius: 0 16px 16px 0; margin-bottom: 1.5rem;">
          <h3 style="margin-top: 0; font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--indigo);">{title}</h3>
          <p style="font-size: 0.92rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 1rem;">{desc}</p>
          <strong style="font-size: 0.85rem; text-transform: uppercase; color: var(--muted); letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">{ex_label}</strong>
          <ul style="margin: 0; padding-left: 1.2rem; color: var(--indigo);">
            {ex_html}
          </ul>
        </div>
      </div>
    </div>'''


def build_final_challenge_html(text, lang):
    title_step = {"it": "🎭 Fase 6: Sfida finale", "el": "🎭 Στάδιο 6: Τελική πρόκληση", "ru": "🎭 Этап 6: Финальный вызов", "es": "🎭 Etapa 6: Desafío final"}.get(lang, "🎭 Stage 6: Final Challenge")
    return f'''<div class="round-block open" id="final-challenge">
      <div class="round-header" style="background:#FEEAEA; cursor:pointer;" onclick="COSY.toggleRound('final-challenge')">
        <span>{title_step}</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
        <div style="background: var(--cream); border: 2px dashed var(--indigo); padding: 1.5rem; border-radius: 16px; display: flex; align-items: flex-start; gap: 1rem;">
          <span style="font-size: 2rem;">🎭</span>
          <div>
            <p style="margin-top: 0; font-size: 1rem; line-height: 1.6; color: var(--ink); font-weight: 500;">{text}</p>
          </div>
        </div>
      </div>
    </div>'''


def build_mistakes_html(mistakes_list, lang):
    items_html = []
    for wrong, right, note in mistakes_list:
        item = f'''<div class="mistake-item">
            <span class="mistake-wrong">{wrong}</span>
            <span class="mistake-arrow">→</span>
            <span class="mistake-right">{right}</span>
            <span class="mistake-note-text">{note}</span>
          </div>'''
        items_html.append(item)

    header_title = {
        "it": "✏️ Note dell'Insegnante (Correzioni Linguistiche)",
        "el": "✏️ Σημειώσεις Καθηγητή (Γλωσσικές Διορθώσεις)",
        "ru": "✏️ Заметки преподавателя (исправление ошибок)",
        "es": "✏️ Notas del Profesor (Correcciones Lingüísticas)"
    }.get(lang, "✏️ Teacher's Note")

    return f'''<div class="mistake-block open" id="s-mistakes">
      <div class="mistake-header" onclick="COSY.toggleBlock('s-mistakes')">
        <span>{header_title}</span><span class="round-toggle">▲</span>
      </div>
      <div class="mistake-body" style="display:block;">
        {"\n".join(items_html)}
      </div>
    </div>'''


def build_theme_box_html(title_theme, theme_bullets, lang):
    bullets_html = "\n".join([f'      <li>{b}</li>' for b in theme_bullets])
    label_theme = {"it": "Thème", "el": "Θέμα", "ru": "Тема", "es": "Tema"}.get(lang, "Theme")
    label_discuss = {"it": "Discuteremo di:", "el": "Θα συζητήσουμε για:", "ru": "Мы обсудим:", "es": "Discutiremos sobre:"}.get(lang, "We will discuss:")

    return f'''<div class="theme-box" style="background: var(--cream); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; border: 1px dashed var(--border);">
    <h3 style="margin-top:0; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ {label_theme}: {title_theme}</h3>
    <p style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--ink-soft);">{label_discuss}</p>
    <ul style="margin:0; padding-left:1.2rem; font-size:0.9rem; color:var(--ink-soft);">
{bullets_html}
    </ul>
  </div>'''


def process_file(rel_filename, data):
    filepath = os.path.join(BASE_DIR, rel_filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    lang = rel_filename.split('/')[0]

    content = open(filepath, 'r', encoding='utf-8').read()

    # Remove sources-section if present
    content = re.sub(r'<!-- Sources Section -->.*?<\/section>', '', content, flags=re.DOTALL)
    content = re.sub(r'<section class="sources-section".*?<\/section>', '', content, flags=re.DOTALL)

    # 1. Theme Box
    new_theme_box = build_theme_box_html(data["title_theme"], data["theme_bullets"], lang)
    content = re.sub(
        r'<div class="theme-box".*?</div>(?=\s*<div class="(?:speaking-time-gauge|rounds-container)")',
        new_theme_box,
        content,
        flags=re.DOTALL
    )

    # 2. Vocab block
    new_vocab = build_vocab_html(data["vocab"], lang)
    content = re.sub(
        r'<div class="round-block[^"]*" id="vocabulary">.*?</div>\n    </div>',
        new_vocab,
        content,
        flags=re.DOTALL
    )

    # 3. Discussion block
    new_discussion = build_discussion_html(data["round1"], data["round2"], lang)
    # Convert markdown bold **word** to <strong>word</strong>
    new_discussion = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', new_discussion)
    content = re.sub(
        r'<div class="round-block[^"]*" id="discussion">.*?</div>\n    </div>',
        new_discussion,
        content,
        flags=re.DOTALL
    )

    # 4. Lang focus block
    new_lang_focus = build_lang_focus_html(data["lang_focus_title"], data["lang_focus_desc"], data["lang_focus_examples"], lang)
    content = re.sub(
        r'<div class="round-block[^"]*" id="lang-focus">.*?</div>\n    </div>',
        new_lang_focus,
        content,
        flags=re.DOTALL
    )

    # 5. Final challenge block
    new_final = build_final_challenge_html(data["final_challenge"], lang)
    content = re.sub(
        r'<div class="round-block[^"]*" id="final-challenge">.*?</div>\n    </div>',
        new_final,
        content,
        flags=re.DOTALL
    )

    # 6. Mistakes block
    new_mistakes = build_mistakes_html(data["mistakes"], lang)
    content = re.sub(
        r'<div class="mistake-block[^"]*" id="s-mistakes">.*?</div>\n    </div>',
        new_mistakes,
        content,
        flags=re.DOTALL
    )

    open(filepath, 'w', encoding='utf-8').write(content)
    print(f"Successfully updated: {rel_filename}")


def main():
    for rel_filename, data in DATA.items():
        process_file(rel_filename, data)

if __name__ == "__main__":
    main()
