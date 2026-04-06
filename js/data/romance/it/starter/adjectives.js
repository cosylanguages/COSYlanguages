(function() {
    const data = [
    {
        "word": "sano",
        "level": "starter",
        "theme": "basic_foods_A1",
        "form": "adjective",
        "feminine": "sana",
        "plural": "sani",
        "femininePlural": "sane",
        "definitions": [
            {
                "text": "Che gode di buona salute; che fa bene alla salute.",
                "examples": [
                    "È un bambino sano e forte.",
                    "Mangiare frutta è sano."
                ]
            }
        ],
        "subtext": "stile di vita sano / cibo sano",
        "comparative": "più sano",
        "superlative": "il più sano",
        "opposite": "malato",
        "oppositeEmoji": "🍔",
        "transcription": "ˈsano"
    },
    {
        "word": "affamato",
        "feminine": "affamata",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🤤",
        "form": "adjective",
        "transcription": "affaˈmato",
        "plural": "affamati",
        "femininePlural": "affamate",
        "definitions": [
            {
                "text": "Che ha bisogno di cibo.",
                "examples": [
                    "Ho fame — sono già le due."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "sentire fame",
            "molta fame",
            "soffrire la fame"
        ],
        "comparative": "più affamato",
        "superlative": "il più affamato"
    },
    {
        "word": "annoiato",
        "feminine": "annoiata",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😐",
        "form": "adjective",
        "transcription": "annoˈjaːto",
        "plural": "annoiati",
        "femininePlural": "annoiate",
        "definitions": [
            {
                "text": "Sentirsi disinteressato o irrequieto.",
                "examples": [
                    "Si annoia nelle lunghe riunioni."
                ]
            }
        ],
        "subtext": "sentirsi annoiato / annoiato da / che si annoia facilmente",
        "comparative": "più annoiato",
        "superlative": "il più annoiato"
    },
    {
        "word": "arrabbiato",
        "feminine": "arrabbiata",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😠",
        "form": "adjective",
        "transcription": "arrabˈbjaːto",
        "plural": "arrabbiati",
        "femininePlural": "arrabbiate",
        "definitions": [
            {
                "text": "Sentire un forte dispiacere.",
                "examples": [
                    "Era arrabbiata per la decisione."
                ]
            }
        ],
        "subtext": "sentirsi arrabbiato / arrabbiato con qualcuno / molto arrabbiato",
        "comparative": "più arrabbiato",
        "superlative": "il più arrabbiato"
    },
    {
        "word": "assetato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🥤",
        "form": "adjective",
        "transcription": "asseˈtato",
        "definitions": [
            {
                "text": "Che ha bisogno di bere.",
                "examples": [
                    "Ho sete, sono molto assetato.",
                    "Il corridore è assetato dopo la gara."
                ]
            }
        ],
        "subtext": "sentirsi assetato",
        "feminine": "assetata",
        "plural": "assetati",
        "femininePlural": "assetate"
    },
    {
        "word": "deluso",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "transcription": "deˈluːzo",
        "feminine": "delusa",
        "plural": "delusi",
        "femininePlural": "deluse",
        "definitions": [
            {
                "text": "Sentirsi tristi perché qualcosa non è stato all'altezza delle aspettative.",
                "examples": [
                    "Era delusa per non aver ottenuto il lavoro."
                ]
            }
        ],
        "subtext": "sentirsi deluso / profondamente deluso / deluso da",
        "comparative": "più deluso",
        "superlative": "il più deluso"
    },
    {
        "word": "dispiaciuto",
        "feminine": "dispiaciuta",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🥺",
        "form": "adjective",
        "transcription": "dispjaˈtʃuːto",
        "plural": "dispiaciuti",
        "femininePlural": "dispiaciute",
        "definitions": [
            {
                "text": "Sentire rammarico o tristezza.",
                "examples": [
                    "Le dispiace per il ritardo."
                ]
            }
        ],
        "subtext": "sentirsi dispiaciuto / dispiaciuto per",
        "synonyms": [
            "scusarsi di"
        ],
        "comparative": "più dispiaciuto",
        "superlative": "il più dispiaciuto"
    },
    {
        "word": "infelice",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "transcription": "infeˈliːtʃe",
        "feminine": "infelice",
        "plural": "infelici",
        "femininePlural": "infelici",
        "definitions": [
            {
                "text": "Non sentirsi soddisfatto o felice.",
                "examples": [
                    "È infelice con il suo attuale stipendio."
                ]
            }
        ],
        "subtext": "infelice per qualcosa / profondamente infelice",
        "comparative": "più infelice",
        "superlative": "il più infelice"
    },
    {
        "word": "nervoso",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "transcription": "nerˈvoːzo",
        "feminine": "nervosa",
        "plural": "nervosi",
        "femininePlural": "nervose",
        "definitions": [
            {
                "text": "Sentirsi ansioso o preoccupato.",
                "examples": [
                    "Era nervoso prima del colloquio di lavoro."
                ]
            }
        ],
        "subtext": "nervoso prima di un colloquio / molto nervoso",
        "comparative": "più nervoso",
        "superlative": "il più nervoso"
    },
    {
        "word": "preoccupato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "transcription": "preokkuˈpaːto",
        "feminine": "preoccupata",
        "plural": "preoccupati",
        "femininePlural": "preoccupate",
        "definitions": [
            {
                "text": "Che si sente ansioso per qualcosa che potrebbe accadere.",
                "examples": [
                    "È preoccupata per il suo lavoro."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ansioso"
        ],
        "comparative": "più preoccupato",
        "superlative": "il più preoccupato",
        "opposite": "calm",
        "oppositeEmoji": "😌"
    },
    {
        "word": "spaventato",
        "feminine": "spaventata",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😨",
        "form": "adjective",
        "transcription": "spavenˈtaːto",
        "plural": "spaventati",
        "femininePlural": "spaventate",
        "definitions": [
            {
                "text": "Sentire paura.",
                "examples": [
                    "Ha paura di commettere errori."
                ]
            }
        ],
        "subtext": "profondamente spaventato",
        "synonyms": [
            "paura di",
            "avere paura"
        ],
        "comparative": "più spaventato",
        "superlative": "il più spaventato"
    },
    {
        "word": "stanco",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "feminine": "stanca",
        "plural": "stanchi",
        "femininePlural": "stanche",
        "definitions": [
            {
                "text": "Che sente il bisogno di riposare.",
                "examples": [
                    "Sono stanco dopo il lavoro.",
                    "Ti vedi molto stanco."
                ]
            }
        ],
        "subtext": "sentirsi stanco / troppo stanco",
        "comparative": "più stanco",
        "superlative": "il più stanco",
        "transcription": "ˈstanko"
    },
    {
        "word": "stressato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "transcription": "stresˈsaːto",
        "feminine": "stressata",
        "plural": "stressati",
        "femininePlural": "stressate",
        "definitions": [
            {
                "text": "Sentirsi preoccupati e tesi per la pressione.",
                "examples": [
                    "Si sente stressata prima di ogni scadenza."
                ]
            }
        ],
        "subtext": "sentirsi stressato / molto stressato",
        "synonyms": [
            "esaurito"
        ],
        "comparative": "più stressato",
        "superlative": "il più stressato"
    },
    {
        "word": "triste",
        "feminine": "triste",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😢",
        "form": "adjective",
        "plural": "tristi",
        "femininePlural": "tristi",
        "definitions": [
            {
                "text": "Che prova dolore o malinconia.",
                "examples": [
                    "È una storia molto triste.",
                    "Perché sei così triste?"
                ]
            }
        ],
        "subtext": "musica triste / volto triste",
        "comparative": "più triste",
        "superlative": "il più triste",
        "transcription": "ˈtriste"
    },
    {
        "word": "emozionato",
        "feminine": "emozionata",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤩",
        "form": "adjective",
        "transcription": "emottstsoˈnaːto",
        "plural": "emozionati",
        "femininePlural": "emozionate",
        "definitions": [
            {
                "text": "Sentire entusiasmo e impazienza.",
                "examples": [
                    "È emozionata per il suo nuovo lavoro."
                ]
            }
        ],
        "subtext": "sentirsi emozionato / molto emozionato",
        "synonyms": [
            "eccitato per"
        ],
        "comparative": "più emozionato",
        "superlative": "il più emozionato"
    },
    {
        "word": "felice",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "feminine": "felice",
        "plural": "felici",
        "femininePlural": "felici",
        "definitions": [
            {
                "text": "Che prova gioia o contentezza.",
                "examples": [
                    "Sono felice di vederti.",
                    "È un bambino molto felice."
                ]
            }
        ],
        "subtext": "famiglia felice / sentirsi felice",
        "comparative": "più felice",
        "superlative": "il più felice",
        "transcription": "feˈlitʃe"
    },
    {
        "word": "fortunato",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🍀",
        "form": "adjective",
        "transcription": "fortuˈnato",
        "definitions": [
            {
                "text": "Che ha fortuna.",
                "examples": [
                    "Sei un uomo fortunato.",
                    "Un giorno fortunato."
                ]
            }
        ],
        "subtext": "molto fortunato",
        "feminine": "fortunata",
        "plural": "fortunati",
        "femininePlural": "fortunate",
        "opposite": "sfortunato"
    },
    {
        "word": "rilassato",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "transcription": "rilasˈsaːto",
        "feminine": "rilassata",
        "plural": "rilassati",
        "femininePlural": "rilassate",
        "definitions": [
            {
                "text": "Calmo; non preoccupato o stressato.",
                "examples": [
                    "Mi sento rilassato nel fine settimana."
                ]
            }
        ],
        "subtext": "calmo, sentirsi rilassato",
        "comparative": "più rilassato",
        "superlative": "il più rilassato",
        "opposite": "stressato",
        "oppositeEmoji": "😫"
    },
    {
        "word": "sfortunato",
        "feminine": "sfortunata",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😿",
        "form": "adjective",
        "plural": "sfortunati",
        "femininePlural": "sfortunate",
        "definitions": [
            {
                "text": "Che non ha fortuna.",
                "examples": [
                    "È un uomo sfortunato.",
                    "Un evento sfortunato."
                ]
            }
        ],
        "subtext": "poco fortunato",
        "comparative": "più sfortunato",
        "superlative": "il più sfortunato",
        "transcription": "sfortuˈnato",
        "opposite": "fortunato"
    },
    {
        "word": "sorpreso",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "transcription": "sorˈpreːzo",
        "feminine": "sorpresa",
        "plural": "sorpresi",
        "femininePlural": "sorprese",
        "definitions": [
            {
                "text": "Sentire shock per qualcosa di inaspettato.",
                "examples": [
                    "È rimasto sorpreso di ricevere un aumento di stipendio."
                ]
            }
        ],
        "subtext": "sentirsi sorpreso / molto sorpreso / piacevolmente sorpreso",
        "comparative": "più sorpreso",
        "superlative": "il più sorpreso"
    },
    {
        "word": "online",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "transcription": "onˈlaːjn",
        "definitions": [
            {
                "text": "Utilizzando internet.",
                "examples": [
                    "A volte compro cibo online."
                ]
            }
        ],
        "subtext": "shopping online / corso online / restare online",
        "comparative": "più online",
        "superlative": "il più online",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "feminine": "online",
        "plural": "online",
        "femininePlural": "online"
    },
    {
        "word": "arancione",
        "feminine": "arancione",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟧",
        "form": "adjective",
        "transcription": "aranˈtʃoːne",
        "plural": "arancioni",
        "femininePlural": "arancioni",
        "definitions": [
            {
                "text": "Che ha il colore dell'arancia.",
                "examples": [
                    "Ha comprato una giacca arancione."
                ]
            }
        ],
        "subtext": "arancione acceso / arancione scuro / luce arancione",
        "comparative": "più arancione",
        "superlative": "il più arancione"
    },
    {
        "word": "argentato",
        "feminine": "argentata",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⚪",
        "form": "adjective",
        "transcription": "ardʒenˈtaːto",
        "plural": "argentati",
        "femininePlural": "argentate",
        "definitions": [
            {
                "text": "Che ha il colore o la lucentezza dell'argento.",
                "examples": [
                    "Capelli argentati.",
                    "Un vassoio argentato."
                ]
            }
        ],
        "subtext": "colore argento",
        "comparative": "più argentato",
        "superlative": "il più argentato"
    },
    {
        "word": "bianco",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "vino bianco / neve bianca",
        "definitions": [
            {
                "text": "Del colore del latte o della neve.",
                "examples": [
                    "Le pareti sono bianche.",
                    "Mangio riso bianco."
                ]
            }
        ],
        "feminine": "bianca",
        "plural": "bianchi",
        "femininePlural": "bianche",
        "comparative": "più bianco",
        "superlative": "il più bianco",
        "transcription": "ˈbjaŋko"
    },
    {
        "word": "blu",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "mare blu / cielo blu",
        "synonyms": [
            "azzurro"
        ],
        "definitions": [
            {
                "text": "Del colore del cielo sereno.",
                "examples": [
                    "I suoi occhi sono blu.",
                    "Ho una macchina blu."
                ]
            }
        ],
        "feminine": "blu",
        "plural": "blu",
        "femininePlural": "blu",
        "comparative": "più blu",
        "superlative": "il più blu",
        "transcription": "ˈblu"
    },
    {
        "word": "dorato",
        "feminine": "dorata",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟡",
        "form": "adjective",
        "transcription": "doˈraːto",
        "plural": "dorati",
        "femininePlural": "dorate",
        "definitions": [
            {
                "text": "Che ha il colore o la lucentezza dell'oro.",
                "examples": [
                    "Una cornice dorata.",
                    "Campi di grano dorati."
                ]
            }
        ],
        "subtext": "colore oro",
        "comparative": "più dorato",
        "superlative": "il più dorato"
    },
    {
        "word": "giallo",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "sole giallo / fiori gialli",
        "synonyms": [
            "luce gialla"
        ],
        "definitions": [
            {
                "text": "Del colore dell'oro o del limone.",
                "examples": [
                    "Il sole è giallo.",
                    "Ha un ombrello giallo."
                ]
            }
        ],
        "feminine": "gialla",
        "plural": "gialli",
        "femininePlural": "gialle",
        "comparative": "più giallo",
        "superlative": "il più giallo",
        "transcription": "ˈdʒallo"
    },
    {
        "word": "grigio",
        "feminine": "grigia",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩶",
        "form": "adjective",
        "transcription": "ˈɡriːdʒo",
        "plural": "grigi",
        "femininePlural": "grigie",
        "definitions": [
            {
                "text": "Che ha un colore tra il nero e il bianco.",
                "examples": [
                    "Ha i capelli grigi e un viso gentile."
                ]
            }
        ],
        "subtext": "cielo grigio / grigio pallido",
        "synonyms": [
            "zona grigia"
        ],
        "comparative": "più grigio",
        "superlative": "il più grigio"
    },
    {
        "word": "marrone",
        "feminine": "marrone",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟫",
        "form": "adjective",
        "transcription": "marˈroːne",
        "plural": "marroni",
        "femininePlural": "marroni",
        "definitions": [
            {
                "text": "Che ha il colore del legno o della terra.",
                "examples": [
                    "Ha gli occhi marroni e i capelli scuri."
                ]
            }
        ],
        "subtext": "marrone scuro / marrone chiaro",
        "synonyms": [
            "pane integrale"
        ],
        "comparative": "più marrone",
        "superlative": "il più marrone"
    },
    {
        "word": "nero",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "caffè nero / gatto nero",
        "definitions": [
            {
                "text": "Il colore più scuro; opposto al bianco.",
                "examples": [
                    "Porta sempre vestiti neri.",
                    "C'è un gatto nero in giardino."
                ]
            }
        ],
        "feminine": "nera",
        "plural": "neri",
        "femininePlural": "nere",
        "comparative": "più nero",
        "superlative": "il più nero",
        "transcription": "ˈnero"
    },
    {
        "word": "rosa",
        "feminine": "rosa",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩷",
        "form": "adjective",
        "transcription": "ˈrɔːza",
        "plural": "rosa",
        "femininePlural": "rosa",
        "definitions": [
            {
                "text": "Che ha un colore rosso pallido.",
                "examples": [
                    "Preferisce il rosa al rosso."
                ]
            }
        ],
        "subtext": "rosa chiaro / rosa acceso / rosa shocking",
        "comparative": "più rosa",
        "superlative": "il più rosa"
    },
    {
        "word": "rosso",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "vino rosso / penna rossa",
        "synonyms": [
            "faccia rossa"
        ],
        "definitions": [
            {
                "text": "Del colore del sangue o del fuoco.",
                "examples": [
                    "Ha i capelli rossi.",
                    "Indossa una maglia rossa."
                ]
            }
        ],
        "feminine": "rossa",
        "plural": "rossi",
        "femininePlural": "rosse",
        "comparative": "più rosso",
        "superlative": "il più rosso",
        "transcription": "ˈrosso"
    },
    {
        "word": "verde",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "prato verde / tè verde",
        "definitions": [
            {
                "text": "Del colore dell'erba.",
                "examples": [
                    "La mela è verde.",
                    "Il semaforo è verde."
                ]
            }
        ],
        "feminine": "verde",
        "plural": "verdi",
        "femininePlural": "verdi",
        "comparative": "più verde",
        "superlative": "il più verde",
        "transcription": "ˈverde"
    },
    {
        "word": "a tempo parziale",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "transcription": "a ˈtɛmpo parˈtsjaːle",
        "opposite": "a tempo pieno",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Che lavora meno ore di una settimana lavorativa standard.",
                "examples": [
                    "Lavora a tempo parziale il sabato."
                ]
            }
        ],
        "subtext": "lavoro a tempo parziale",
        "synonyms": [
            "studente lavoratore"
        ],
        "comparative": "più a tempo parziale",
        "superlative": "il più a tempo parziale",
        "feminine": "a tempo parziale",
        "plural": "a tempo parziale",
        "femininePlural": "a tempo parziale"
    },
    {
        "word": "a tempo pieno",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "transcription": "a ˈtɛmpo ˈpjɛːno",
        "opposite": "a tempo parziale",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Che lavora il numero completo di ore in una settimana lavorativa.",
                "examples": [
                    "Ha un lavoro a tempo pieno in banca."
                ]
            }
        ],
        "subtext": "lavoro a tempo pieno / impiegato a tempo pieno",
        "comparative": "più a tempo pieno",
        "superlative": "il più a tempo pieno",
        "feminine": "a tempo pieno",
        "plural": "a tempo pieno",
        "femininePlural": "a tempo pieno"
    },
    {
        "word": "occupato",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Impegnato in un'attività; non libero.",
                "examples": [
                    "Il bagno è occupato.",
                    "Lui è sempre molto occupato."
                ]
            }
        ],
        "feminine": "occupata",
        "plural": "occupati",
        "femininePlural": "occupate",
        "subtext": "sempre occupato / posto occupato",
        "synonyms": [
            "programma fitto"
        ],
        "comparative": "più occupato",
        "superlative": "il più occupato",
        "transcription": "okkuˈpato"
    },
    {
        "word": "amichevole",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "amiˈkeːvole",
        "feminine": "amichevole",
        "plural": "amichevoli",
        "femininePlural": "amichevoli",
        "definitions": [
            {
                "text": "Gentile e piacevole; facile con cui parlare.",
                "examples": [
                    "Il nuovo manager è molto amichevole e disponibile."
                ]
            }
        ],
        "subtext": "molto amichevole / atmosfera amichevole",
        "synonyms": [
            "un volto amico"
        ],
        "comparative": "più amichevole",
        "superlative": "il più amichevole"
    },
    {
        "word": "antico",
        "feminine": "antica",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏛️",
        "form": "adjective",
        "plural": "antichi",
        "femininePlural": "antiche",
        "definitions": [
            {
                "text": "Molto vecchio; che appartiene al passato.",
                "examples": [
                    "È un mobile antico.",
                    "Roma è una città antica."
                ]
            }
        ],
        "subtext": "castello antico / storia antica",
        "comparative": "più antico",
        "superlative": "il più antico",
        "transcription": "anˈtiko"
    },
    {
        "word": "antipatico",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "antiˈpatiko",
        "subtext": "persona antipatica / comportamento antipatico",
        "definitions": [
            {
                "text": "Che ispira antipatia; non piacevole.",
                "examples": [
                    "Quel cameriere è antipatico.",
                    "Non essere antipatico!"
                ]
            }
        ],
        "feminine": "antipatica",
        "plural": "antipatici",
        "femininePlural": "antipatiche"
    },
    {
        "word": "attento",
        "feminine": "attenta",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⚠️",
        "form": "adjective",
        "plural": "attenti",
        "femininePlural": "attente",
        "definitions": [
            {
                "text": "Che presta attenzione.",
                "examples": [
                    "Sii attento quando guidi.",
                    "Uno studente molto attento."
                ]
            }
        ],
        "subtext": "fare attenzione",
        "comparative": "più attento",
        "superlative": "il più attento",
        "transcription": "atˈtɛnto"
    },
    {
        "word": "attivo",
        "feminine": "attiva",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏃",
        "form": "adjective",
        "plural": "attivi",
        "femininePlural": "attive",
        "definitions": [
            {
                "text": "Che agisce; energico.",
                "examples": [
                    "Uno stile di vita attivo.",
                    "Sempre molto attivo."
                ]
            }
        ],
        "subtext": "molto dinamico",
        "comparative": "più attivo",
        "superlative": "il più attivo",
        "transcription": "atˈtivo"
    },
    {
        "word": "bello",
        "feminine": "bella",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😊",
        "form": "adjective",
        "plural": "belli",
        "femininePlural": "belle",
        "definitions": [
            {
                "text": "Piacevole alla vista; attraente.",
                "examples": [
                    "Che bel vestito!",
                    "È una bella giornata di sole."
                ]
            }
        ],
        "subtext": "bel panorama / bella giornata",
        "synonyms": [
            "una bella giornata",
            "un bel posto",
            "una bella persona"
        ],
        "comparative": "più bello",
        "superlative": "il più bello",
        "transcription": "ˈbɛllo"
    },
    {
        "word": "carino",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "kaˈriːno",
        "feminine": "carina",
        "plural": "carini",
        "femininePlural": "carine",
        "definitions": [
            {
                "text": "Piacevole da guardare; piuttosto attraente.",
                "examples": [
                    "La nuova sala riunioni è molto carina."
                ]
            }
        ],
        "subtext": "abbastanza carino",
        "synonyms": [
            "piuttosto bene",
            "un bel posto"
        ],
        "comparative": "più carino",
        "superlative": "il più carino"
    },
    {
        "word": "chiaro",
        "feminine": "chiara",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💧",
        "form": "adjective",
        "transcription": "ˈkjaːro",
        "plural": "chiari",
        "femininePlural": "chiare",
        "definitions": [
            {
                "text": "Luminoso; facile da capire; di colore tenue.",
                "examples": [
                    "Un cielo chiaro.",
                    "Un concetto chiaro.",
                    "Blu chiaro."
                ]
            }
        ],
        "subtext": "opposto di scuro",
        "comparative": "più chiaro",
        "superlative": "il più chiaro"
    },
    {
        "word": "codardo",
        "feminine": "codarda",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🐭",
        "form": "adjective",
        "transcription": "koˈdardo",
        "plural": "codardi",
        "femininePlural": "codarde",
        "definitions": [
            {
                "text": "Che non ha coraggio; vigliacco.",
                "examples": [
                    "Un comportamento codardo.",
                    "Non essere codardo!"
                ]
            }
        ],
        "subtext": "opposto di coraggioso",
        "comparative": "più codardo",
        "superlative": "il più codardo"
    },
    {
        "word": "comune",
        "feminine": "comune",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🔄",
        "form": "adjective",
        "transcription": "koˈmuːne",
        "plural": "comuni",
        "femininePlural": "comuni",
        "definitions": [
            {
                "text": "Che appartiene a tutti; frequente; ordinario.",
                "examples": [
                    "Un errore comune.",
                    "Un senso comune."
                ]
            }
        ],
        "subtext": "molto frequente",
        "comparative": "più comune",
        "superlative": "il più comune"
    },
    {
        "word": "coraggioso",
        "feminine": "coraggiosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🦁",
        "form": "adjective",
        "transcription": "koradˈdʒoːzo",
        "plural": "coraggiosi",
        "femininePlural": "coraggiose",
        "definitions": [
            {
                "text": "Che ha coraggio; audace.",
                "examples": [
                    "Un soldato coraggioso.",
                    "È stata una scelta coraggiosa."
                ]
            }
        ],
        "subtext": "molto coraggioso",
        "comparative": "più coraggioso",
        "superlative": "il più coraggioso"
    },
    {
        "word": "corretto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "korˈrɛtto",
        "feminine": "corretta",
        "plural": "corretti",
        "femininePlural": "corrette",
        "definitions": [
            {
                "text": "Vero o giusto; senza errori.",
                "examples": [
                    "Per favore verifica che le cifre siano corrette."
                ]
            }
        ],
        "subtext": "il modo corretto / completamente corretto",
        "synonyms": [
            "risposta corretta"
        ],
        "comparative": "più corretto",
        "superlative": "il più corretto"
    },
    {
        "word": "creativo",
        "feminine": "creativa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🎨",
        "form": "adjective",
        "plural": "creativi",
        "femininePlural": "creative",
        "definitions": [
            {
                "text": "Capace di creare e inventare.",
                "examples": [
                    "Un artista creativo.",
                    "Un'idea creativa."
                ]
            }
        ],
        "subtext": "molto creativo",
        "comparative": "più creativo",
        "superlative": "il più creativo",
        "transcription": "kreaˈtivo"
    },
    {
        "word": "debole",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "ˈdeːbole",
        "feminine": "debole",
        "plural": "deboli",
        "femininePlural": "deboli",
        "definitions": [
            {
                "text": "Mancanza di forza o potere.",
                "examples": [
                    "Il segnale è debole all'ultimo piano."
                ]
            }
        ],
        "subtext": "connessione debole / un argomento debole / molto debole",
        "comparative": "più debole",
        "superlative": "il più debole"
    },
    {
        "word": "differente",
        "feminine": "differente",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "↔️",
        "form": "adjective",
        "transcription": "diffeˈrɛnte",
        "plural": "differenti",
        "femininePlural": "differenti",
        "definitions": [
            {
                "text": "Non uguale a un altro.",
                "examples": [
                    "Questo lavoro è molto differente dal mio precedente."
                ]
            }
        ],
        "subtext": "differente da",
        "synonyms": [
            "completamente diverso",
            "molto diverso"
        ],
        "comparative": "più differente",
        "superlative": "il più differente"
    },
    {
        "word": "divertente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "divertente",
        "plural": "divertenti",
        "femininePlural": "divertenti",
        "definitions": [
            {
                "text": "Che diverte; piacevole e allegro.",
                "examples": [
                    "È un film molto divertente.",
                    "Siamo stati bene, è stato divertente."
                ]
            }
        ],
        "subtext": "gioco divertente / serata divertente",
        "comparative": "più divertente",
        "superlative": "il più divertente",
        "transcription": "diverˈtɛnte"
    },
    {
        "word": "eccellente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "etʃtʃelˈlɛnte",
        "feminine": "eccellente",
        "plural": "eccellenti",
        "femininePlural": "eccellenti",
        "definitions": [
            {
                "text": "Estremamente buono; di uno standard molto elevato.",
                "examples": [
                    "Ha ricevuto un'eccellente recensione."
                ]
            }
        ],
        "subtext": "lavoro eccellente / assolutamente eccellente",
        "synonyms": [
            "risultati eccellenti"
        ],
        "comparative": "più eccellente",
        "superlative": "il più eccellente"
    },
    {
        "word": "educato",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "eduˈkaːto",
        "feminine": "educata",
        "plural": "educati",
        "femininePlural": "educate",
        "definitions": [
            {
                "text": "Comportarsi in modo rispettoso e cortese.",
                "examples": [
                    "È sempre educato con i clienti."
                ]
            }
        ],
        "subtext": "molto educato",
        "synonyms": [
            "richiesta gentile",
            "abbastanza cortese"
        ],
        "comparative": "più educato",
        "superlative": "il più educato"
    },
    {
        "word": "falso",
        "feminine": "falsa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🎭",
        "form": "adjective",
        "plural": "falsi",
        "femininePlural": "false",
        "definitions": [
            {
                "text": "Non vero; artificiale.",
                "examples": [
                    "Documenti falsi.",
                    "Un falso allarme."
                ]
            }
        ],
        "subtext": "completamente falso",
        "comparative": "più falso",
        "superlative": "il più falso",
        "transcription": "ˈfalso",
        "opposite": "vero"
    },
    {
        "word": "fantastico",
        "feminine": "fantastica",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤩",
        "form": "adjective",
        "transcription": "fanˈtastiko",
        "plural": "fantastici",
        "femininePlural": "fantastiche",
        "definitions": [
            {
                "text": "Estremamente buono.",
                "examples": [
                    "Il nuovo sistema funziona in modo fantastico."
                ]
            }
        ],
        "subtext": "davvero fantastico",
        "synonyms": [
            "notizie fantastiche",
            "una fantastica opportunità"
        ],
        "comparative": "più fantastico",
        "superlative": "il più fantastico"
    },
    {
        "word": "forte",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "ˈfɔrte",
        "feminine": "forte",
        "plural": "forti",
        "femininePlural": "forti",
        "definitions": [
            {
                "text": "Che ha grande forza fisica o mentale.",
                "examples": [
                    "È una leader forte e molto rispettata."
                ]
            }
        ],
        "subtext": "caffè forte / opinione forte / molto forte",
        "comparative": "più forte",
        "superlative": "il più forte"
    },
    {
        "word": "gentile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "gentile",
        "plural": "gentili",
        "femininePlural": "gentili",
        "definitions": [
            {
                "text": "Cortese e premuroso verso gli altri.",
                "examples": [
                    "Grazie, sei molto gentile.",
                    "È un uomo molto gentile."
                ]
            }
        ],
        "subtext": "persona gentile / molto gentile",
        "comparative": "più gentile",
        "superlative": "il più gentile",
        "transcription": "dʒenˈtile"
    },
    {
        "word": "giusto",
        "feminine": "giusta",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "plural": "giusti",
        "femininePlural": "giuste",
        "definitions": [
            {
                "text": "Corretto; equo.",
                "examples": [
                    "È la risposta giusta.",
                    "Un prezzo giusto."
                ]
            }
        ],
        "subtext": "proprio giusto",
        "synonyms": [
            "risposta giusta"
        ],
        "comparative": "più giusto",
        "superlative": "il più giusto",
        "transcription": "ˈdʒusto",
        "opposite": "sbagliato"
    },
    {
        "word": "importante",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "riunione importante / persona importante",
        "synonyms": [
            "essenziale",
            "fondamentale"
        ],
        "definitions": [
            {
                "text": "Che ha grande valore o influenza.",
                "examples": [
                    "È un documento molto importante.",
                    "Ho una notizia importante."
                ]
            }
        ],
        "feminine": "importante",
        "plural": "importanti",
        "femininePlural": "importanti",
        "comparative": "più importante",
        "superlative": "il più importante",
        "transcription": "imporˈtante"
    },
    {
        "word": "impossibile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "imposˈsiːbile",
        "feminine": "impossibile",
        "plural": "impossibili",
        "femininePlural": "impossibili",
        "definitions": [
            {
                "text": "Non in grado di accadere o di essere fatto.",
                "examples": [
                    "È impossibile finire in un giorno."
                ]
            }
        ],
        "subtext": "praticamente impossibile / rendere impossibile / quasi impossibile",
        "comparative": "più impossibile",
        "superlative": "il più impossibile"
    },
    {
        "word": "incredibile",
        "feminine": "incredibile",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😲",
        "form": "adjective",
        "transcription": "inkreˈdiːbile",
        "plural": "incredibili",
        "femininePlural": "incredibili",
        "definitions": [
            {
                "text": "Che causa grande sorpresa o ammirazione.",
                "examples": [
                    "Ha fatto una presentazione incredibile."
                ]
            }
        ],
        "subtext": "un risultato incredibile / un'offerta incredibile / davvero incredibile",
        "comparative": "più incredibile",
        "superlative": "il più incredibile"
    },
    {
        "word": "intelligente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "intelligente",
        "plural": "intelligenti",
        "femininePlural": "intelligenti",
        "definitions": [
            {
                "text": "Dotato di intelligenza; acuto.",
                "examples": [
                    "È una ragazza molto intelligente.",
                    "Hai avuto un'idea intelligente."
                ]
            }
        ],
        "subtext": "studente intelligente / idea intelligente",
        "synonyms": [
            "abbastanza scaltro"
        ],
        "comparative": "più intelligente",
        "superlative": "il più intelligente",
        "transcription": "intelliˈdʒɛnte"
    },
    {
        "word": "interessante",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "interessante",
        "plural": "interessanti",
        "femininePlural": "interessanti",
        "definitions": [
            {
                "text": "Che suscita interesse o curiosità.",
                "examples": [
                    "Il documentario è interessante.",
                    "È un'offerta interessante."
                ]
            }
        ],
        "subtext": "libro interessante / film interessante",
        "comparative": "più interessante",
        "superlative": "il più interessante",
        "transcription": "interesˈsante"
    },
    {
        "word": "inutile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "iˈnuːtile",
        "feminine": "inutile",
        "plural": "inutili",
        "femininePlural": "inutili",
        "definitions": [
            {
                "text": "Senza alcun valore utile; non d'aiuto.",
                "examples": [
                    "Questo software è inutile per le nostre esigenze."
                ]
            }
        ],
        "subtext": "completamente inutile / rivelarsi inutile / un'idea inutile",
        "comparative": "più inutile",
        "superlative": "il più inutile"
    },
    {
        "word": "luminoso",
        "feminine": "luminosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💡",
        "form": "adjective",
        "transcription": "lumiˈnoːzo",
        "plural": "luminosi",
        "femininePlural": "luminose",
        "definitions": [
            {
                "text": "Che emette o riflette molta luce.",
                "examples": [
                    "Una stanza luminosa.",
                    "Stelle luminose."
                ]
            }
        ],
        "subtext": "pieno di luce",
        "comparative": "più luminoso",
        "superlative": "il più luminoso"
    },
    {
        "word": "maleducato",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "maleduˈkaːto",
        "feminine": "maleducata",
        "plural": "maleducati",
        "femininePlural": "maleducate",
        "definitions": [
            {
                "text": "Non educato; che mostra mancanza di rispetto.",
                "examples": [
                    "Quell'email era piuttosto maleducata e non professionale."
                ]
            }
        ],
        "subtext": "molto maleducato",
        "synonyms": [
            "incredibilmente scortese",
            "deliberatamente offensivo"
        ],
        "comparative": "più maleducato",
        "superlative": "il più maleducato"
    },
    {
        "word": "meraviglioso",
        "feminine": "meravigliosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✨",
        "form": "adjective",
        "transcription": "meraviʎˈʎoːzo",
        "plural": "meravigliosi",
        "femininePlural": "meravigliose",
        "definitions": [
            {
                "text": "Estremamente buono; che causa delizia.",
                "examples": [
                    "Avevano una squadra meravigliosa."
                ]
            }
        ],
        "subtext": "un tempo meraviglioso",
        "synonyms": [
            "una meravigliosa opportunità"
        ],
        "comparative": "più meraviglioso",
        "superlative": "il più meraviglioso"
    },
    {
        "word": "moderno",
        "feminine": "moderna",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏙️",
        "form": "adjective",
        "plural": "moderni",
        "femininePlural": "moderne",
        "definitions": [
            {
                "text": "Recente; che appartiene al tempo presente.",
                "examples": [
                    "Abita in un palazzo moderno.",
                    "Mi piace lo stile moderno."
                ]
            }
        ],
        "subtext": "arte moderna / edificio moderno",
        "comparative": "più moderno",
        "superlative": "il più moderno",
        "transcription": "moˈdɛrno"
    },
    {
        "word": "necessario",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "netʃesˈsaːrjo",
        "feminine": "necessaria",
        "plural": "necessari",
        "femininePlural": "necessarie",
        "definitions": [
            {
                "text": "Necessario; richiesto per poter fare qualcosa.",
                "examples": [
                    "Una buona connessione internet è necessaria per il lavoro a distanza."
                ]
            }
        ],
        "subtext": "assolutamente necessario / se necessario / necessario da fare",
        "comparative": "più necessario",
        "superlative": "il più necessario"
    },
    {
        "word": "noioso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "noiosa",
        "plural": "noiosi",
        "femininePlural": "noiose",
        "definitions": [
            {
                "text": "Che causa noia; non divertente.",
                "examples": [
                    "La riunione è stata noiosa.",
                    "Non essere noioso!"
                ]
            }
        ],
        "subtext": "film noioso / lezione noiosa",
        "synonyms": [
            "una riunione noiosa"
        ],
        "comparative": "più noioso",
        "superlative": "il più noioso",
        "transcription": "noˈjozo"
    },
    {
        "word": "onesto",
        "feminine": "onesta",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😇",
        "form": "adjective",
        "transcription": "oˈnɛsto",
        "plural": "onesti",
        "femininePlural": "oneste",
        "definitions": [
            {
                "text": "Che agisce con rettitudine e sincerità.",
                "examples": [
                    "Un uomo onesto.",
                    "Sii onesto con me."
                ]
            }
        ],
        "subtext": "molto sincero",
        "comparative": "più onesto",
        "superlative": "il più onesto"
    },
    {
        "word": "orgoglioso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "orɡoʎˈʎoːzo",
        "feminine": "orgogliosa",
        "plural": "orgogliosi",
        "femininePlural": "orgogliose",
        "definitions": [
            {
                "text": "Sentirsi orgogliosi per un risultato.",
                "examples": [
                    "Era orgoglioso di ottenere la sua prima promozione."
                ]
            }
        ],
        "subtext": "orgoglioso di",
        "synonyms": [
            "sentirsi fiero",
            "molto fiero"
        ],
        "comparative": "più orgoglioso",
        "superlative": "il più di orgoglioso"
    },
    {
        "word": "orribile",
        "feminine": "orribile",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤮",
        "form": "adjective",
        "transcription": "orˈriːbile",
        "plural": "orribili",
        "femininePlural": "orribili",
        "definitions": [
            {
                "text": "Molto cattivo o spiacevole.",
                "examples": [
                    "Il rumore nell'open space è orribile."
                ]
            }
        ],
        "subtext": "tempo orribile / semplicemente orribile",
        "synonyms": [
            "pessime notizie"
        ],
        "comparative": "più orribile",
        "superlative": "il più orribile"
    },
    {
        "word": "paziente",
        "feminine": "paziente",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🧘",
        "form": "adjective",
        "plural": "pazienti",
        "femininePlural": "pazienti",
        "definitions": [
            {
                "text": "Che sa aspettare con calma.",
                "examples": [
                    "È un insegnante molto paziente.",
                    "Bisogna essere pazienti."
                ]
            }
        ],
        "subtext": "persona paziente",
        "comparative": "più paziente",
        "superlative": "il più paziente",
        "transcription": "patˈtsjɛnte"
    },
    {
        "word": "perfetto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "perˈfɛtto",
        "feminine": "perfetta",
        "plural": "perfetti",
        "femininePlural": "perfette",
        "definitions": [
            {
                "text": "Senza alcun difetto; completamente corretto.",
                "examples": [
                    "Il tempismo del lancio è stato perfetto."
                ]
            }
        ],
        "subtext": "tempismo perfetto / assolutamente perfetto",
        "synonyms": [
            "una perfetta opportunità"
        ],
        "comparative": "più perfetto",
        "superlative": "il più perfetto"
    },
    {
        "word": "pigro",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "ˈpiːɡro",
        "feminine": "pigra",
        "plural": "pigri",
        "femininePlural": "pigre",
        "definitions": [
            {
                "text": "Non disposto a lavorare o a sforzarsi.",
                "examples": [
                    "Ha la reputazione di essere pigro con i follow-up."
                ]
            }
        ],
        "subtext": "molto pigro / un approccio pigro / troppo pigro",
        "comparative": "più pigro",
        "superlative": "il più pigro"
    },
    {
        "word": "popolare",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "popoˈlaːre",
        "feminine": "popolare",
        "plural": "popolari",
        "femininePlural": "popolari",
        "definitions": [
            {
                "text": "Apprezzato da molte persone.",
                "examples": [
                    "Il nuovo bar vicino all'ufficio è molto popolare."
                ]
            }
        ],
        "subtext": "molto popolare / scelta popolare / il più popolare",
        "comparative": "più popolare",
        "superlative": "il più popolare"
    },
    {
        "word": "possibile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "posˈsiːbile",
        "feminine": "possibile",
        "plural": "possibili",
        "femininePlural": "possibili",
        "definitions": [
            {
                "text": "In grado di accadere o di essere raggiunto.",
                "examples": [
                    "È possibile finire entro venerdì?"
                ]
            }
        ],
        "subtext": "al più presto possibile / è possibile / rendere possibile",
        "comparative": "più possibile",
        "superlative": "il più possibile"
    },
    {
        "word": "preferito",
        "feminine": "preferita",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⭐",
        "form": "adjective",
        "plural": "preferiti",
        "femininePlural": "preferite",
        "definitions": [
            {
                "text": "Che si preferisce tra gli altri.",
                "examples": [
                    "Il mio colore preferito è il blu.",
                    "Qual è il tuo piatto preferito?"
                ]
            }
        ],
        "subtext": "il più amato",
        "comparative": "più preferito",
        "superlative": "il più preferito",
        "transcription": "prefeˈrito"
    },
    {
        "word": "rumoroso",
        "feminine": "rumorosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🔊",
        "form": "adjective",
        "transcription": "rumoˈroːzo",
        "plural": "rumorosi",
        "femininePlural": "rumorose",
        "definitions": [
            {
                "text": "Che fa molto rumore.",
                "examples": [
                    "L'ufficio open space è troppo rumoroso."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "forte rumore",
            "troppo forte",
            "una voce forte"
        ],
        "comparative": "più rumoroso",
        "superlative": "il più rumoroso"
    },
    {
        "word": "sbagliato",
        "feminine": "sbagliata",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❌",
        "form": "adjective",
        "plural": "sbagliati",
        "femininePlural": "sbagliate",
        "definitions": [
            {
                "text": "Non corretto.",
                "examples": [
                    "Hai preso la strada sbagliata.",
                    "Numero sbagliato."
                ]
            }
        ],
        "subtext": "tutto sbagliato",
        "synonyms": [
            "risposta sbagliata",
            "andare male"
        ],
        "comparative": "più sbagliato",
        "superlative": "il più sbagliato",
        "transcription": "zbaʎˈʎato",
        "opposite": "giusto"
    },
    {
        "word": "scuro",
        "feminine": "scura",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌑",
        "form": "adjective",
        "transcription": "ˈskuːro",
        "plural": "scuri",
        "femininePlural": "scure",
        "definitions": [
            {
                "text": "Privo di luce; di colore tendente al nero.",
                "examples": [
                    "Una stanza scura.",
                    "Blu scuro."
                ]
            }
        ],
        "subtext": "opposto di chiaro",
        "comparative": "più scuro",
        "superlative": "il più scuro"
    },
    {
        "word": "semplice",
        "feminine": "semplice",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "transcription": "ˈsɛmpliːtʃe",
        "plural": "semplici",
        "femininePlural": "semplici",
        "definitions": [
            {
                "text": "Facile da capire o da fare; non complesso.",
                "examples": [
                    "Un esercizio semplice.",
                    "Vivere in modo semplice."
                ]
            }
        ],
        "subtext": "molto facile",
        "comparative": "più semplice",
        "superlative": "il più semplice"
    },
    {
        "word": "serio",
        "feminine": "seria",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🧐",
        "form": "adjective",
        "plural": "seri",
        "femininePlural": "serie",
        "definitions": [
            {
                "text": "Che non ride; impegnato; grave.",
                "examples": [
                    "È un uomo molto serio.",
                    "Un problema serio."
                ]
            }
        ],
        "subtext": "molto serio / serio nel lavoro",
        "comparative": "più serio",
        "superlative": "il più serio",
        "transcription": "ˈsɛrjo"
    },
    {
        "word": "sicuro di sé",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "siˈkuːro di ˈsɛ",
        "feminine": "sicura di sé",
        "plural": "sicuri di sé",
        "femininePlural": "sicure di sé",
        "definitions": [
            {
                "text": "Sentirsi sicuri delle proprie capacità.",
                "examples": [
                    "È molto sicura di sé nelle presentazioni ai clienti."
                ]
            }
        ],
        "subtext": "fiducia in se stessi",
        "synonyms": [
            "sentirsi fiduciosi",
            "molto sicuri"
        ],
        "comparative": "più sicuro di sé",
        "superlative": "il più sicuro di sé"
    },
    {
        "word": "silenzioso",
        "feminine": "silenziosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤫",
        "form": "adjective",
        "transcription": "silenˈtsjoːzo",
        "plural": "silenziosi",
        "femininePlural": "silenziose",
        "definitions": [
            {
                "text": "Che fa poco o nessun rumore; pacifico.",
                "examples": [
                    "L'ufficio è silenzioso all'ora di pranzo."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "zona silenziosa",
            "stare zitti",
            "bello e tranquillo"
        ],
        "comparative": "più silenzioso",
        "superlative": "il più silenzioso"
    },
    {
        "word": "simile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "ˈsiːmiːle",
        "feminine": "simile",
        "plural": "simili",
        "femininePlural": "simili",
        "definitions": [
            {
                "text": "Quasi lo stesso; che ha molte caratteristiche comuni.",
                "examples": [
                    "I nostri approcci sono molto simili."
                ]
            }
        ],
        "subtext": "molto simile / simile a",
        "synonyms": [
            "risultati simili"
        ],
        "comparative": "più simile",
        "superlative": "il più simile"
    },
    {
        "word": "simpatico",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "simˈpatiko",
        "subtext": "persona simpatica / ragazzo simpatico",
        "definitions": [
            {
                "text": "Che ispira simpatia; piacevole.",
                "examples": [
                    "Il tuo amico è molto simpatico.",
                    "È un insegnante simpatico."
                ]
            }
        ],
        "feminine": "simpatica",
        "plural": "simpatici",
        "femininePlural": "simpatiche"
    },
    {
        "word": "speciale",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "speˈtʃaːle",
        "feminine": "speciale",
        "plural": "speciali",
        "femininePlural": "speciali",
        "definitions": [
            {
                "text": "Diverso dal solito; particolarmente importante.",
                "examples": [
                    "Ha un talento speciale per la risoluzione dei problemi."
                ]
            }
        ],
        "subtext": "un'offerta speciale / occasione speciale / molto speciale",
        "comparative": "più speciale",
        "superlative": "il più speciale"
    },
    {
        "word": "stesso",
        "feminine": "stessa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "identical",
        "form": "adjective",
        "transcription": "ˈstesso",
        "plural": "stessi",
        "femininePlural": "stesse",
        "definitions": [
            {
                "text": "Non differente; identico.",
                "examples": [
                    "Guadagnano lo stesso stipendio."
                ]
            }
        ],
        "subtext": "lo stesso di / esattamente lo stesso",
        "synonyms": [
            "contemporaneamente"
        ],
        "comparative": "più stesso",
        "superlative": "il più stesso"
    },
    {
        "word": "terribile",
        "feminine": "terribile",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😫",
        "form": "adjective",
        "transcription": "terˈriːbile",
        "plural": "terribili",
        "femininePlural": "terribili",
        "definitions": [
            {
                "text": "Estremamente cattivo.",
                "examples": [
                    "Il traffico stamattina era terribile."
                ]
            }
        ],
        "subtext": "tempo terribile / un terribile errore",
        "synonyms": [
            "notizie terribili"
        ],
        "comparative": "più terribile",
        "superlative": "il più terribile"
    },
    {
        "word": "utile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "transcription": "ˈuːtile",
        "feminine": "utile",
        "plural": "utili",
        "femininePlural": "utili",
        "definitions": [
            {
                "text": "D'aiuto; che ha uno scopo pratico.",
                "examples": [
                    "Un'auto è molto utile in campagna."
                ]
            }
        ],
        "subtext": "utile, pratico",
        "comparative": "più utile",
        "superlative": "il più utile",
        "opposite": "inutile",
        "oppositeEmoji": "🗑️"
    },
    {
        "word": "vero",
        "feminine": "vera",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💎",
        "form": "adjective",
        "plural": "veri",
        "femininePlural": "vere",
        "definitions": [
            {
                "text": "Reale; non falso.",
                "examples": [
                    "È un diamante vero?",
                    "Un vero amico."
                ]
            }
        ],
        "subtext": "davvero vero",
        "comparative": "più vero",
        "superlative": "il più vero",
        "transcription": "ˈvero",
        "opposite": "falso"
    },
    {
        "word": "lontano",
        "feminine": "lontana",
        "level": "starter",
        "theme": "distance_A1",
        "emoji": "🔭",
        "form": "adjective",
        "plural": "lontani",
        "femininePlural": "lontane",
        "definitions": [
            {
                "text": "A grande distanza.",
                "examples": [
                    "Abita molto lontano.",
                    "Un futuro lontano."
                ]
            }
        ],
        "subtext": "lontano da qui",
        "comparative": "più lontano",
        "superlative": "il più lontano",
        "transcription": "lonˈtano",
        "opposite": "vicino"
    },
    {
        "word": "vicino",
        "feminine": "vicina",
        "level": "starter",
        "theme": "distance_A1",
        "emoji": "📍",
        "form": "adjective",
        "plural": "vicini",
        "femininePlural": "vicine",
        "definitions": [
            {
                "text": "A breve distanza nello spazio o nel tempo.",
                "examples": [
                    "La farmacia è vicina.",
                    "Siamo vicini alla meta."
                ]
            }
        ],
        "subtext": "vicino a casa / molto vicino",
        "comparative": "più vicino",
        "superlative": "il più vicino",
        "transcription": "viˈtʃino",
        "opposite": "lontano"
    },
    {
        "word": "aperto",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "chiuso",
        "oppositeEmoji": "🔒",
        "subtext": "negozio aperto / porta aperta",
        "synonyms": [
            "libero",
            "non chiuso"
        ],
        "definitions": [
            {
                "text": "Che non è chiuso; accessibile.",
                "examples": [
                    "La finestra è aperta.",
                    "Il supermercato è aperto 24 ore."
                ]
            }
        ],
        "feminine": "aperta",
        "plural": "aperti",
        "femininePlural": "aperte",
        "comparative": "più aperto",
        "superlative": "il più aperto",
        "transcription": "aˈpɛrto"
    },
    {
        "word": "chiuso",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "aperto",
        "oppositeEmoji": "📖",
        "subtext": "ufficio chiuso / strada chiusa",
        "synonyms": [
            "non accessibile"
        ],
        "definitions": [
            {
                "text": "Che non è aperto; non accessibile.",
                "examples": [
                    "Il museo è chiuso il lunedì.",
                    "Tieni la bocca chiusa."
                ]
            }
        ],
        "feminine": "chiusa",
        "plural": "chiusi",
        "femininePlural": "chiuse",
        "comparative": "più chiuso",
        "superlative": "il più chiuso",
        "transcription": "ˈkjudzo"
    },
    {
        "word": "costoso",
        "feminine": "costosa",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "transcription": "kosˈtoːzo",
        "plural": "costosi",
        "femininePlural": "costose",
        "definitions": [
            {
                "text": "Che costa molti soldi.",
                "examples": [
                    "Quell'auto è costosa."
                ]
            },
            {
                "text": "Ad alto prezzo.",
                "examples": [
                    "Il centro città è costoso per l'affitto."
                ]
            }
        ],
        "subtext": "costoso, prezzo alto / molto costoso / troppo costoso",
        "synonyms": [
            "gusti costosi"
        ],
        "comparative": "più costoso",
        "superlative": "il più costoso",
        "opposite": "economico",
        "oppositeEmoji": "🏷️"
    },
    {
        "word": "economico",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "transcription": "ekoˈnɔːmiko",
        "opposite": "costoso",
        "oppositeEmoji": "💎",
        "feminine": "economica",
        "plural": "economici",
        "femininePlural": "economiche",
        "definitions": [
            {
                "text": "Non costoso; a basso prezzo.",
                "examples": [
                    "Questo caffè è economico."
                ]
            },
            {
                "text": "A basso prezzo.",
                "examples": [
                    "Il pranzo vicino all'ufficio è molto economico."
                ]
            }
        ],
        "subtext": "prezzo basso, non costoso / volo economico / molto economico",
        "synonyms": [
            "alla mano"
        ],
        "comparative": "più economico",
        "superlative": "il più economico"
    },
    {
        "word": "libero",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "tempo libero / posto libero",
        "synonyms": [
            "gratis",
            "senza costi"
        ],
        "definitions": [
            {
                "text": "Non occupato; che può agire senza costrizioni.",
                "examples": [
                    "Il sabato sono libero.",
                    "C'è un posto libero qui?"
                ]
            }
        ],
        "feminine": "libera",
        "plural": "liberi",
        "femininePlural": "libere",
        "comparative": "più libero",
        "superlative": "il più libero",
        "transcription": "ˈlibero"
    },
    {
        "word": "solo",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "transcription": "ˈsoːlo",
        "opposite": "insieme",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Senza altre persone; da solo.",
                "examples": [
                    "Vive da sola."
                ]
            }
        ],
        "subtext": "vivere da solo / viaggiare da solo / sentirsi solo",
        "comparative": "più solo",
        "superlative": "il più solo",
        "feminine": "sola",
        "plural": "soli",
        "femininePlural": "sole"
    },
    {
        "word": "comodo",
        "feminine": "comoda",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🛋️",
        "form": "adjective",
        "plural": "comodi",
        "femininePlural": "comode",
        "definitions": [
            {
                "text": "Che offre agio e benessere fisico.",
                "examples": [
                    "Queste scarpe sono molto comode.",
                    "Il letto è comodo."
                ]
            }
        ],
        "subtext": "scarpe comode / divano comodo",
        "comparative": "più comodo",
        "superlative": "il più comodo",
        "transcription": "ˈkɔmodo"
    },
    {
        "word": "pulito",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "sporco",
        "oppositeEmoji": "💩",
        "subtext": "camera pulita / vestiti puliti",
        "synonyms": [
            "ordinato",
            "limpido"
        ],
        "definitions": [
            {
                "text": "Privo di sporco o macchie.",
                "examples": [
                    "La cucina è perfettamente pulita.",
                    "Indosso una camicia pulita."
                ]
            }
        ],
        "feminine": "pulita",
        "plural": "puliti",
        "femininePlural": "pulite",
        "comparative": "più pulito",
        "superlative": "il più pulito",
        "transcription": "puˈlito"
    },
    {
        "word": "sporco",
        "feminine": "sporca",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "💩",
        "form": "adjective",
        "plural": "sporchi",
        "femininePlural": "sporche",
        "definitions": [
            {
                "text": "Coperto di sporcizia; non pulito.",
                "examples": [
                    "Le scarpe sono sporche di fango.",
                    "Non toccare, è sporco!"
                ]
            }
        ],
        "subtext": "mani sporche / pavimento sporco",
        "synonyms": [
            "mani sporche",
            "vestiti sporchi",
            "sporcarsi"
        ],
        "comparative": "più sporco",
        "superlative": "il più sporco",
        "transcription": "ˈsporko"
    },
    {
        "word": "in forma",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "transcription": "in ˈfɔrma",
        "feminine": "in forma",
        "plural": "in forma",
        "femininePlural": "in forma",
        "definitions": [
            {
                "text": "In buone condizioni fisiche grazie all'esercizio.",
                "examples": [
                    "Si mantiene in forma andando al lavoro in bicicletta ogni giorno."
                ]
            }
        ],
        "subtext": "in forma fisica / restare in forma / mantenersi in forma",
        "comparative": "più in forma",
        "superlative": "il più in forma"
    },
    {
        "word": "malato",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "feminine": "malata",
        "plural": "malati",
        "femininePlural": "malate",
        "definitions": [
            {
                "text": "Che non sta bene; colpito da una malattia.",
                "examples": [
                    "Oggi non vado a scuola, sono malato.",
                    "Il nonno è malato."
                ]
            }
        ],
        "subtext": "sentirsi malato / persona malata",
        "synonyms": [
            "indisposto",
            "sentirsi male"
        ],
        "comparative": "più malato",
        "superlative": "il più malato",
        "opposite": "sano",
        "oppositeEmoji": "💪",
        "transcription": "maˈlato"
    },
    {
        "word": "morto",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "💀",
        "form": "adjective",
        "transcription": "ˈmɔrto",
        "definitions": [
            {
                "text": "Che non è più in vita.",
                "examples": [
                    "Il gatto è morto ieri.",
                    "Fiori morti."
                ]
            }
        ],
        "subtext": "essere morto",
        "feminine": "morta",
        "plural": "morti",
        "femininePlural": "morte",
        "opposite": "vivo"
    },
    {
        "word": "pericoloso",
        "feminine": "pericolosa",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "⚠️",
        "form": "adjective",
        "plural": "pericolosi",
        "femininePlural": "pericolose",
        "definitions": [
            {
                "text": "Che può causare danni o pericoli.",
                "examples": [
                    "È uno sport pericoloso.",
                    "Attenzione, il cane è pericoloso."
                ]
            }
        ],
        "subtext": "strada pericolosa / gioco pericoloso",
        "synonyms": [
            "situazione pericolosa"
        ],
        "comparative": "più pericoloso",
        "superlative": "il più pericoloso",
        "transcription": "perikoˈlozo",
        "opposite": "sicuro"
    },
    {
        "word": "sicuro",
        "feminine": "sicura",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛡️",
        "form": "adjective",
        "plural": "sicuri",
        "femininePlural": "sicure",
        "definitions": [
            {
                "text": "Privo di pericoli; certo.",
                "examples": [
                    "Qui siamo al sicuro.",
                    "Sei sicuro di quello che dici?"
                ]
            }
        ],
        "subtext": "posto sicuro / sentirsi sicuro",
        "synonyms": [
            "zona sicura"
        ],
        "comparative": "più sicuro",
        "superlative": "il più sicuro",
        "transcription": "siˈkuro",
        "opposite": "pericoloso"
    },
    {
        "word": "single",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "👤",
        "form": "adjective",
        "transcription": "ˈsiŋɡəl",
        "definitions": [
            {
                "text": "Che non è sposato né fidanzato.",
                "examples": [
                    "Lui è single.",
                    "Vita da single."
                ]
            }
        ],
        "subtext": "opposto di sposato",
        "feminine": "single",
        "plural": "single",
        "femininePlural": "single",
        "opposite": "sposato"
    },
    {
        "word": "sposato",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "💍",
        "form": "adjective",
        "transcription": "spoˈzato",
        "definitions": [
            {
                "text": "Che ha contratto matrimonio.",
                "examples": [
                    "Sei sposato?",
                    "Una coppia sposata."
                ]
            }
        ],
        "subtext": "opposto di single",
        "feminine": "sposata",
        "plural": "sposati",
        "femininePlural": "sposate",
        "opposite": "single"
    },
    {
        "word": "povero",
        "feminine": "povera",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "🏚️",
        "form": "adjective",
        "plural": "poveri",
        "femininePlural": "povere",
        "definitions": [
            {
                "text": "Che ha pochi soldi o mezzi.",
                "examples": [
                    "Aiutano le persone povere.",
                    "Quel povero cane ha fame."
                ]
            }
        ],
        "subtext": "famiglia povera / povero me",
        "comparative": "più povero",
        "superlative": "il più povero",
        "transcription": "ˈpɔvero"
    },
    {
        "word": "ricco",
        "feminine": "ricca",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "adjective",
        "plural": "ricchi",
        "femininePlural": "ricche",
        "definitions": [
            {
                "text": "Che possiede molti soldi o beni.",
                "examples": [
                    "È un uomo molto ricco.",
                    "L'Italia è ricca di storia."
                ]
            }
        ],
        "subtext": "uomo ricco / paese ricco",
        "comparative": "più ricco",
        "superlative": "il più ricco",
        "transcription": "ˈrikko"
    },
    {
        "word": "molti",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "🔢",
        "form": "adjective",
        "transcription": "ˈmolti",
        "definitions": [
            {
                "text": "In gran numero.",
                "examples": [
                    "Ci sono molti studenti.",
                    "Ho molte idee."
                ]
            }
        ],
        "subtext": "molti di più",
        "feminine": "molta",
        "plural": "molti",
        "femininePlural": "molte",
        "opposite": "pochi"
    },
    {
        "word": "pochi",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "🤏",
        "form": "adjective",
        "transcription": "ˈpɔki",
        "definitions": [
            {
                "text": "In numero ridotto.",
                "examples": [
                    "Ci sono pochi posti liberi.",
                    "Ho poche monete."
                ]
            }
        ],
        "subtext": "solo pochi",
        "feminine": "poca",
        "plural": "pochi",
        "femininePlural": "poche",
        "opposite": "molti"
    },
    {
        "word": "famoso",
        "feminine": "famosa",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "🌟",
        "form": "adjective",
        "transcription": "faˈmoːzo",
        "plural": "famosi",
        "femininePlural": "famose",
        "definitions": [
            {
                "text": "Conosciuto da moltissime persone.",
                "examples": [
                    "Un attore famoso.",
                    "Un luogo famoso."
                ]
            }
        ],
        "subtext": "molto noto",
        "comparative": "più famoso",
        "superlative": "il più famoso"
    },
    {
        "word": "proprio",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👤",
        "form": "adjective",
        "transcription": "ˈprɔprjo",
        "definitions": [
            {
                "text": "Che appartiene a se stesso.",
                "examples": [
                    "Ho una mia propria stanza.",
                    "Per il proprio bene."
                ]
            }
        ],
        "subtext": "personale",
        "feminine": "propria",
        "plural": "propri",
        "femininePlural": "proprie"
    },
    {
        "word": "impaziente",
        "feminine": "impaziente",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "⌚",
        "form": "adjective",
        "plural": "impazienti",
        "femininePlural": "impazienti",
        "definitions": [
            {
                "text": "Che non sa aspettare.",
                "examples": [
                    "Non essere così impaziente!",
                    "Un bambino impaziente."
                ]
            }
        ],
        "subtext": "molto impaziente",
        "comparative": "più impaziente",
        "superlative": "il più impaziente",
        "transcription": "impatˈtsjɛnte"
    },
    {
        "word": "poco amichevole",
        "feminine": "poco amichevole",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "😠",
        "form": "adjective",
        "plural": "poco amichevoli",
        "femininePlural": "poco amichevoli",
        "definitions": [
            {
                "text": "Non gentile; scostante.",
                "examples": [
                    "Un atteggiamento poco amichevole.",
                    "Lui è stato poco amichevole con me."
                ]
            }
        ],
        "subtext": "piuttosto freddo",
        "comparative": "più poco amichevole",
        "superlative": "il più poco amichevole",
        "transcription": "ˈpɔko amiˈkevole"
    },
    {
        "word": "biondo",
        "feminine": "bionda",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👱",
        "form": "adjective",
        "plural": "biondi",
        "femininePlural": "bionde",
        "definitions": [
            {
                "text": "Di colore giallo oro (riferito ai capelli).",
                "examples": [
                    "Ha i capelli biondi.",
                    "Una ragazza bionda."
                ]
            }
        ],
        "subtext": "capelli biondi",
        "comparative": "più biondo",
        "superlative": "il più biondo",
        "transcription": "ˈbjondo"
    },
    {
        "word": "brutto",
        "feminine": "brutta",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👹",
        "form": "adjective",
        "plural": "brutti",
        "femininePlural": "brutte",
        "definitions": [
            {
                "text": "Sgradevole alla vista; non attraente.",
                "examples": [
                    "È un brutto film.",
                    "Ho fatto un brutto sogno."
                ]
            }
        ],
        "subtext": "brutto sogno / tempo brutto",
        "comparative": "più brutto",
        "superlative": "il più brutto",
        "transcription": "ˈbrutto"
    },
    {
        "word": "grasso",
        "feminine": "grassa",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🍔",
        "form": "adjective",
        "transcription": "ˈɡrasso",
        "plural": "grassi",
        "femininePlural": "grasse",
        "definitions": [
            {
                "text": "Che ha molto grasso corporeo.",
                "examples": [
                    "Un gatto grasso.",
                    "Cibo troppo grasso."
                ]
            }
        ],
        "subtext": "opposto di magro",
        "comparative": "più grasso",
        "superlative": "il più grasso"
    },
    {
        "word": "liscio",
        "feminine": "liscia",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "📏",
        "form": "adjective",
        "transcription": "ˈliʃʃo",
        "plural": "lisci",
        "femininePlural": "lisce",
        "definitions": [
            {
                "text": "Senza rugosità o increspature; dritto.",
                "examples": [
                    "Pelle liscia.",
                    "Capelli lisci."
                ]
            }
        ],
        "subtext": "opposto di riccio o ruvido",
        "comparative": "più liscio",
        "superlative": "il più liscio"
    },
    {
        "word": "magro",
        "feminine": "magra",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🥬",
        "form": "adjective",
        "transcription": "ˈmaːɡro",
        "plural": "magri",
        "femininePlural": "magre",
        "definitions": [
            {
                "text": "Che ha poco grasso corporeo; sottile.",
                "examples": [
                    "È diventato molto magro.",
                    "Un ragazzo magro."
                ]
            }
        ],
        "subtext": "opposto di grasso",
        "comparative": "più magro",
        "superlative": "il più magro"
    },
    {
        "word": "riccio",
        "feminine": "riccia",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🌀",
        "form": "adjective",
        "transcription": "ˈrittʃo",
        "plural": "ricci",
        "femininePlural": "ricce",
        "definitions": [
            {
                "text": "Che ha forma di ricciolo (riferito ai capelli).",
                "examples": [
                    "Ha i capelli ricci.",
                    "Una pecora dal vello riccio."
                ]
            }
        ],
        "subtext": "capelli ricci",
        "comparative": "più riccio",
        "superlative": "il più riccio"
    },
    {
        "word": "naturale",
        "feminine": "naturale",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌱",
        "form": "adjective",
        "transcription": "natuˈraːle",
        "plural": "naturali",
        "femininePlural": "naturali",
        "definitions": [
            {
                "text": "Che appartiene alla natura; non artificiale.",
                "examples": [
                    "Prodotti naturali.",
                    "Bellezza naturale."
                ]
            }
        ],
        "subtext": "dalla natura",
        "comparative": "più naturale",
        "superlative": "il più naturale"
    },
    {
        "word": "vivo",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌱",
        "form": "adjective",
        "transcription": "ˈvivo",
        "definitions": [
            {
                "text": "Che è in vita.",
                "examples": [
                    "La pianta è ancora viva.",
                    "Sentirsi vivi."
                ]
            }
        ],
        "subtext": "ancora vivo",
        "feminine": "viva",
        "plural": "vivi",
        "femininePlural": "vive",
        "opposite": "morto"
    },
    {
        "word": "ovale",
        "feminine": "ovale",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🥚",
        "form": "adjective",
        "plural": "ovali",
        "femininePlural": "ovali",
        "definitions": [
            {
                "text": "Che ha forma di uovo.",
                "examples": [
                    "Uno specchio ovale.",
                    "Un viso ovale."
                ]
            }
        ],
        "subtext": "forma ovale",
        "comparative": "più ovale",
        "superlative": "il più ovale",
        "transcription": "oˈvale"
    },
    {
        "word": "rettangolare",
        "feminine": "rettangolare",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "▭",
        "form": "adjective",
        "plural": "rettangolari",
        "femininePlural": "rettangolari",
        "definitions": [
            {
                "text": "Che ha forma di rettangolo.",
                "examples": [
                    "Un tavolo rettangolare.",
                    "Una stanza rettangolare."
                ]
            }
        ],
        "subtext": "forma a rettangolo",
        "comparative": "più rettangolare",
        "superlative": "il più rettangolare",
        "transcription": "rettaŋgoˈlare"
    },
    {
        "word": "triangolare",
        "feminine": "triangolare",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🔺",
        "form": "adjective",
        "plural": "triangolari",
        "femininePlural": "triangolari",
        "definitions": [
            {
                "text": "Che ha forma di triangolo.",
                "examples": [
                    "Un segnale triangolare.",
                    "Una forma triangolare."
                ]
            }
        ],
        "subtext": "forma a triangolo",
        "comparative": "più triangolare",
        "superlative": "il più triangolare",
        "transcription": "triaŋgoˈlare"
    },
    {
        "word": "largo",
        "feminine": "larga",
        "level": "starter",
        "theme": "size_measurements_A1",
        "emoji": "↔️",
        "form": "adjective",
        "transcription": "ˈlarɡo",
        "plural": "larghi",
        "femininePlural": "larghe",
        "definitions": [
            {
                "text": "Che ha un'ampiezza superiore alla media.",
                "examples": [
                    "Una strada larga.",
                    "Pantaloni larghi."
                ]
            }
        ],
        "subtext": "molto ampio",
        "comparative": "più largo",
        "superlative": "il più largo"
    },
    {
        "word": "stretto",
        "feminine": "stretta",
        "level": "starter",
        "theme": "size_measurements_A1",
        "emoji": "⬇️",
        "form": "adjective",
        "transcription": "ˈstretto",
        "plural": "stretti",
        "femininePlural": "strette",
        "definitions": [
            {
                "text": "Che ha un'ampiezza ridotta; non largo.",
                "examples": [
                    "Un vicolo stretto.",
                    "Scarpe troppo strette."
                ]
            }
        ],
        "subtext": "opposto di largo",
        "comparative": "più stretto",
        "superlative": "il più stretto"
    },
    {
        "word": "alto",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "corto",
        "oppositeEmoji": "📏",
        "feminine": "alta",
        "emoji": "🦒",
        "plural": "alti",
        "femininePlural": "alte",
        "definitions": [
            {
                "text": "Di statura superiore alla media; che si estende verso l'alto.",
                "examples": [
                    "È un uomo molto alto.",
                    "L'edificio è alto venti metri."
                ]
            }
        ],
        "subtext": "edificio alto / uomo alto",
        "synonyms": [
            "una persona alta"
        ],
        "comparative": "più alto",
        "superlative": "il più alto",
        "transcription": "ˈalto"
    },
    {
        "word": "basso",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "feminine": "bassa",
        "emoji": "📉",
        "plural": "bassi",
        "femininePlural": "basse",
        "definitions": [
            {
                "text": "Di statura inferiore alla media; vicino al suolo.",
                "examples": [
                    "Lui è un po' basso.",
                    "Il tavolo è troppo basso."
                ]
            }
        ],
        "subtext": "prezzo basso / uomo basso",
        "synonyms": [
            "bassa qualità"
        ],
        "comparative": "più basso",
        "superlative": "il più basso",
        "transcription": "ˈbasso"
    },
    {
        "word": "buono",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "cattivo",
        "oppositeEmoji": "👎",
        "feminine": "buona",
        "plural": "buoni",
        "femininePlural": "buone",
        "definitions": [
            {
                "text": "Di qualità positiva; piacevole o utile.",
                "examples": [
                    "Questa è una buona notizia.",
                    "Il caffè è molto buono."
                ]
            }
        ],
        "subtext": "buona idea / buon cibo",
        "synonyms": [
            "ottimo",
            "piacevole",
            "buona idea",
            "buona fortuna",
            "buon valore"
        ],
        "comparative": "migliore",
        "superlative": "il migliore",
        "transcription": "ˈbwɔno"
    },
    {
        "word": "cattivo",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "buono",
        "oppositeEmoji": "👍",
        "feminine": "cattiva",
        "plural": "cattivi",
        "femininePlural": "cattive",
        "definitions": [
            {
                "text": "Di qualità negativa; non piacevole.",
                "examples": [
                    "Oggi c'è cattivo tempo.",
                    "È un cattivo esempio per i bambini."
                ]
            }
        ],
        "subtext": "cattivo tempo / cattivo odore",
        "synonyms": [
            "terribile",
            "pessimo",
            "spiacevole",
            "cattive notizie",
            "sfortuna",
            "cattiva decisione"
        ],
        "comparative": "peggiore",
        "superlative": "il peggiore",
        "transcription": "katˈtivo"
    },
    {
        "word": "corto",
        "feminine": "corta",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "corti",
        "femininePlural": "corte",
        "definitions": [
            {
                "text": "Di lunghezza inferiore alla media.",
                "examples": [
                    "Porta i capelli corti.",
                    "Questa gonna è troppo corta."
                ]
            }
        ],
        "subtext": "capelli corti / strada corta",
        "synonyms": [
            "un breve viaggio",
            "capelli corti"
        ],
        "comparative": "più corto",
        "superlative": "il più corto",
        "opposite": "alto",
        "oppositeEmoji": "🗼",
        "transcription": "ˈkorto"
    },
    {
        "word": "difficile",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "facile",
        "oppositeEmoji": "✅",
        "feminine": "difficile",
        "plural": "difficili",
        "femininePlural": "difficili",
        "definitions": [
            {
                "text": "Che richiede molto sforzo o abilità.",
                "examples": [
                    "È una lingua difficile da imparare.",
                    "Il problema è molto difficile."
                ]
            }
        ],
        "subtext": "lavoro difficile / scelta difficile",
        "comparative": "più difficile",
        "superlative": "il più difficile",
        "transcription": "difˈfittʃile"
    },
    {
        "word": "duro",
        "feminine": "dura",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🧱",
        "form": "adjective",
        "transcription": "ˈduːro",
        "plural": "duri",
        "femininePlural": "dure",
        "definitions": [
            {
                "text": "Compatto e solido; difficile.",
                "examples": [
                    "La sedia è molto dura e scomoda."
                ]
            }
        ],
        "subtext": "lavoro duro / troppo duro",
        "synonyms": [
            "una decisione difficile"
        ],
        "comparative": "più duro",
        "superlative": "il più duro"
    },
    {
        "word": "facile",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difficile",
        "oppositeEmoji": "❌",
        "feminine": "facile",
        "plural": "facili",
        "femininePlural": "facili",
        "definitions": [
            {
                "text": "Che richiede poco sforzo; non difficile.",
                "examples": [
                    "L'esame è stato facile.",
                    "È facile arrivare in centro."
                ]
            }
        ],
        "subtext": "compito facile / facile da fare",
        "synonyms": [
            "semplice e veloce"
        ],
        "comparative": "più facile",
        "superlative": "il più facile",
        "transcription": "ˈfatʃile"
    },
    {
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "feminine": "giovane",
        "plural": "giovani",
        "femininePlural": "giovani",
        "definitions": [
            {
                "text": "Che ha vissuto per poco tempo; non vecchio.",
                "examples": [
                    "È un'attrice molto giovane.",
                    "I giovani amano viaggiare."
                ]
            }
        ],
        "comparative": "più giovane",
        "superlative": "il più giovane",
        "opposite": "vecchio",
        "oppositeEmoji": "👴",
        "subtext": "giovane donna / sentirsi giovane",
        "synonyms": [
            "giovane persona",
            "giovane professionista",
            "giovane dentro"
        ],
        "word": "giovane",
        "transcription": "ˈdʒovane"
    },
    {
        "word": "grande",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "piccolo",
        "oppositeEmoji": "🐭",
        "feminine": "grande",
        "plural": "grandi",
        "femininePlural": "grandi",
        "definitions": [
            {
                "text": "Di notevoli dimensioni o importanza.",
                "examples": [
                    "Viviamo in una casa grande.",
                    "Roma è una grande città."
                ]
            }
        ],
        "subtext": "casa grande / grande città",
        "synonyms": [
            "ampio",
            "enorme"
        ],
        "comparative": "più grande",
        "superlative": "il più grande",
        "transcription": "ˈgrande"
    },
    {
        "word": "leggero",
        "feminine": "leggera",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🪶",
        "form": "adjective",
        "transcription": "ledˈdʒɛːro",
        "plural": "leggeri",
        "femininePlural": "leggere",
        "definitions": [
            {
                "text": "Non pesante; di colore chiaro.",
                "examples": [
                    "Porta una borsa leggera al lavoro ogni giorno."
                ]
            }
        ],
        "subtext": "traffico leggero / un pasto leggero",
        "synonyms": [
            "pioggerella"
        ],
        "comparative": "più leggero",
        "superlative": "il più leggero"
    },
    {
        "word": "lento",
        "feminine": "lenta",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐢",
        "form": "adjective",
        "plural": "lenti",
        "femininePlural": "lente",
        "definitions": [
            {
                "text": "Che si muove con scarsa rapidità.",
                "examples": [
                    "Il treno è molto lento.",
                    "Sei troppo lento a mangiare."
                ]
            }
        ],
        "subtext": "internet lento / camminata lenta",
        "synonyms": [
            "progressi lenti"
        ],
        "comparative": "più lento",
        "superlative": "il più lento",
        "transcription": "ˈlento"
    },
    {
        "word": "lungo",
        "feminine": "lunga",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "lunghi",
        "femininePlural": "lunghe",
        "definitions": [
            {
                "text": "Di grande lunghezza; che dura molto tempo.",
                "examples": [
                    "È un lungo viaggio in treno.",
                    "Ha i capelli lunghi e neri."
                ]
            }
        ],
        "subtext": "viaggio lungo / capelli lunghi",
        "synonyms": [
            "una lunga giornata",
            "molto tempo"
        ],
        "comparative": "più lungo",
        "superlative": "il più lungo",
        "transcription": "ˈluŋgo"
    },
    {
        "word": "morbido",
        "feminine": "morbida",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "☁️",
        "form": "adjective",
        "transcription": "ˈmɔrbido",
        "plural": "morbidi",
        "femininePlural": "morbide",
        "definitions": [
            {
                "text": "Non duro; delicato al tatto.",
                "examples": [
                    "Il divano è molto morbido e comodo."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "luce soffusa",
            "musica dolce",
            "soft skills"
        ],
        "comparative": "più morbido",
        "superlative": "il più morbido"
    },
    {
        "word": "nuovo",
        "feminine": "nuova",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🆕",
        "form": "adjective",
        "plural": "nuovi",
        "femininePlural": "nuove",
        "definitions": [
            {
                "text": "Recente; mai usato o visto prima.",
                "examples": [
                    "Ho comprato un libro nuovo.",
                    "Il suo ufficio è nuovo."
                ]
            }
        ],
        "subtext": "nuovo lavoro / auto nuova",
        "synonyms": [
            "fiammante"
        ],
        "comparative": "più nuovo",
        "superlative": "il più nuovo",
        "transcription": "ˈnwɔvo"
    },
    {
        "word": "ordinario",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "transcription": "ordiˈnaːrjo",
        "opposite": "speciale",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Normale o usuale; non speciale.",
                "examples": [
                    "Era una giornata ordinaria."
                ]
            }
        ],
        "subtext": "giorno ordinario / niente di ordinario",
        "synonyms": [
            "vita ordinaria"
        ],
        "comparative": "più ordinario",
        "superlative": "il più ordinario",
        "feminine": "ordinaria",
        "plural": "ordinari",
        "femininePlural": "ordinarie"
    },
    {
        "word": "pesante",
        "feminine": "pesante",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🏋️",
        "form": "adjective",
        "transcription": "peˈzante",
        "plural": "pesanti",
        "femininePlural": "pesanti",
        "definitions": [
            {
                "text": "Di grande peso; difficile da trasportare.",
                "examples": [
                    "La borsa è molto pesante con tutti quei documenti."
                ]
            }
        ],
        "subtext": "traffico pesante / troppo pesante",
        "synonyms": [
            "pioggia forte"
        ],
        "comparative": "più pesante",
        "superlative": "il più pesante"
    },
    {
        "word": "piccolo",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "grande",
        "oppositeEmoji": "🐘",
        "feminine": "piccola",
        "plural": "piccoli",
        "femininePlural": "piccole",
        "definitions": [
            {
                "text": "Di dimensioni ridotte.",
                "examples": [
                    "Il gatto è piccolo.",
                    "Abito in un piccolo appartamento."
                ]
            }
        ],
        "subtext": "piccolo cane / ufficio piccolo",
        "comparative": "più piccolo",
        "superlative": "il più piccolo",
        "transcription": "ˈpikkolo"
    },
    {
        "word": "pieno",
        "feminine": "piena",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🥛",
        "form": "adjective",
        "plural": "pieni",
        "femininePlural": "piene",
        "definitions": [
            {
                "text": "Che contiene tutto ciò che può contenere.",
                "examples": [
                    "Il bicchiere è pieno d'acqua.",
                    "L'autobus è troppo pieno."
                ]
            }
        ],
        "subtext": "bicchiere pieno / autobus pieno",
        "synonyms": [
            "una giornata piena"
        ],
        "comparative": "più pieno",
        "superlative": "il più pieno",
        "transcription": "ˈpjɛno"
    },
    {
        "word": "poco profondo",
        "feminine": "poco profonda",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "transcription": "ˈpɔko proˈfondo",
        "plural": "poco profondi",
        "femininePlural": "poco profonde",
        "definitions": [
            {
                "text": "Che ha poca profondità.",
                "examples": [
                    "Acqua poco profonda.",
                    "Un respiro poco profondo."
                ]
            }
        ],
        "subtext": "opposto di profondo",
        "comparative": "più poco profondo",
        "superlative": "il più poco profondo"
    },
    {
        "word": "profondo",
        "feminine": "profonda",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🕳️",
        "form": "adjective",
        "transcription": "proˈfondo",
        "plural": "profondi",
        "femininePlural": "profonde",
        "definitions": [
            {
                "text": "Che si estende molto verso il basso o l'interno.",
                "examples": [
                    "Un pozzo profondo.",
                    "Un respiro profondo."
                ]
            }
        ],
        "subtext": "opposto di superficiale o poco profondo",
        "comparative": "più profondo",
        "superlative": "il più profondo"
    },
    {
        "word": "quadrato",
        "feminine": "quadrata",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⬛",
        "form": "adjective",
        "plural": "quadrati",
        "femininePlural": "quadrate",
        "definitions": [
            {
                "text": "Che ha forma di quadrato.",
                "examples": [
                    "Una scatola quadrata.",
                    "Un foglio quadrato."
                ]
            }
        ],
        "subtext": "forma a quadrato",
        "comparative": "più quadrato",
        "superlative": "il più quadrato",
        "transcription": "kwaˈdrato"
    },
    {
        "word": "rotondo",
        "feminine": "rotonda",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⭕",
        "form": "adjective",
        "plural": "rotondi",
        "femininePlural": "rotonde",
        "definitions": [
            {
                "text": "Che ha forma di cerchio o sfera.",
                "examples": [
                    "Un tavolo rotondo.",
                    "Una faccia rotonda."
                ]
            }
        ],
        "subtext": "forma a cerchio",
        "comparative": "più rotondo",
        "superlative": "il più rotondo",
        "transcription": "roˈtondo"
    },
    {
        "word": "vecchio",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "giovane",
        "oppositeEmoji": "👶",
        "feminine": "vecchia",
        "emoji": "👴",
        "plural": "vecchi",
        "femininePlural": "vecchie",
        "definitions": [
            {
                "text": "Che esiste da molto tempo; non giovane.",
                "examples": [
                    "È un vecchio amico di famiglia.",
                    "Questo castello è molto vecchio."
                ]
            }
        ],
        "subtext": "vecchio amico / libro vecchio",
        "synonyms": [
            "vecchie abitudini"
        ],
        "comparative": "più vecchio",
        "superlative": "il più vecchio",
        "transcription": "ˈvɛkkjo"
    },
    {
        "word": "veloce",
        "feminine": "veloce",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⚡",
        "form": "adjective",
        "plural": "veloci",
        "femininePlural": "veloci",
        "definitions": [
            {
                "text": "Che si muove con rapidità.",
                "examples": [
                    "L'auto è molto veloce.",
                    "È un corridore veloce."
                ]
            }
        ],
        "subtext": "treno veloce / corsa veloce",
        "synonyms": [
            "fast food"
        ],
        "comparative": "più veloce",
        "superlative": "il più veloce",
        "transcription": "veˈlotʃe"
    },
    {
        "word": "vuoto",
        "feminine": "vuota",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🫙",
        "form": "adjective",
        "plural": "vuoti",
        "femininePlural": "vuote",
        "definitions": [
            {
                "text": "Che non contiene nulla.",
                "examples": [
                    "La scatola è vuota.",
                    "L'ufficio oggi è vuoto."
                ]
            }
        ],
        "subtext": "scatola vuota / stomaco vuoto",
        "synonyms": [
            "una stanza vuota"
        ],
        "comparative": "più vuoto",
        "superlative": "il più vuoto",
        "transcription": "ˈvwɔto"
    },
    {
        "word": "emozionante",
        "feminine": "emozionante",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "emozionanti",
        "femininePlural": "emozionanti",
        "definitions": [
            {
                "text": "Che provoca forte emozione.",
                "examples": [
                    "Un film emozionante.",
                    "Un viaggio emozionante."
                ]
            }
        ],
        "subtext": "molto emozionante",
        "comparative": "più emozionante",
        "superlative": "il più emozionante",
        "transcription": "emottstsoˈnante"
    },
    {
        "word": "acido",
        "feminine": "acida",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🍋",
        "form": "adjective",
        "transcription": "ˈaːtʃido",
        "plural": "acidi",
        "femininePlural": "acide",
        "definitions": [
            {
                "text": "Che ha il sapore del limone o dell'aceto.",
                "examples": [
                    "Un limone acido.",
                    "Sapore acido."
                ]
            }
        ],
        "subtext": "sapore aspro",
        "comparative": "più acido",
        "superlative": "il più acido"
    },
    {
        "word": "amaro",
        "feminine": "amara",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "☕",
        "form": "adjective",
        "transcription": "aˈmaːro",
        "plural": "amari",
        "femininePlural": "amare",
        "definitions": [
            {
                "text": "Che ha il sapore del caffè non zuccherato o del fiele.",
                "examples": [
                    "Il caffè è amaro.",
                    "Un retrogusto amaro."
                ]
            }
        ],
        "subtext": "opposto di dolce",
        "comparative": "più amaro",
        "superlative": "il più amaro"
    },
    {
        "word": "delizioso",
        "feminine": "deliziosa",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "😋",
        "form": "adjective",
        "plural": "deliziosi",
        "femininePlural": "deliziose",
        "definitions": [
            {
                "text": "Molto gradevole al gusto o all'olfatto.",
                "examples": [
                    "Una torta deliziosa.",
                    "Un profumo delizioso."
                ]
            }
        ],
        "subtext": "davvero delizioso",
        "comparative": "più delizioso",
        "superlative": "il più delizioso",
        "transcription": "deliˈttstsozo"
    },
    {
        "word": "dolce",
        "feminine": "dolce",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🍬",
        "form": "adjective",
        "plural": "dolci",
        "femininePlural": "dolci",
        "definitions": [
            {
                "text": "Che ha il sapore dello zucchero; gentile.",
                "examples": [
                    "Un caffè dolce.",
                    "Una persona molto dolce."
                ]
            }
        ],
        "subtext": "dolce come il miele",
        "comparative": "più dolce",
        "superlative": "il più dolce",
        "transcription": "ˈdoltʃe"
    },
    {
        "word": "salato",
        "feminine": "salata",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🧂",
        "form": "adjective",
        "transcription": "saˈlaːto",
        "plural": "salati",
        "femininePlural": "salate",
        "definitions": [
            {
                "text": "Che sa di sale.",
                "examples": [
                    "L'acqua del mare è salata.",
                    "Un pasto troppo salato."
                ]
            }
        ],
        "subtext": "opposto di dolce",
        "comparative": "più salato",
        "superlative": "il più salato"
    },
    {
        "word": "presto",
        "feminine": "presto",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌅",
        "form": "adjective",
        "plural": "presto",
        "femininePlural": "presto",
        "definitions": [
            {
                "text": "In un momento vicino o prima del previsto.",
                "examples": [
                    "Devo andare via presto.",
                    "Torna a casa presto!"
                ]
            }
        ],
        "subtext": "arrivare presto / svegliarsi presto",
        "comparative": "più presto",
        "superlative": "il più presto",
        "transcription": "ˈprɛsto",
        "opposite": "tardi"
    },
    {
        "word": "tardi",
        "feminine": "tardi",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌙",
        "form": "adjective",
        "plural": "tardi",
        "femininePlural": "tardi",
        "definitions": [
            {
                "text": "In un momento lontano o dopo il previsto.",
                "examples": [
                    "È troppo tardi per uscire.",
                    "Arrivo sempre tardi."
                ]
            }
        ],
        "subtext": "arrivare tardi / fare tardi",
        "comparative": "più tardi",
        "superlative": "il più tardi",
        "transcription": "ˈtardi",
        "opposite": "presto"
    },
    {
        "word": "asciutto",
        "feminine": "asciutta",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🏜️",
        "form": "adjective",
        "transcription": "aʃˈʃutto",
        "plural": "asciutti",
        "femininePlural": "asciutte",
        "definitions": [
            {
                "text": "Senza acqua o liquido; non bagnato.",
                "examples": [
                    "Il magazzino deve rimanere asciutto."
                ]
            }
        ],
        "subtext": "stare all'asciutto",
        "synonyms": [
            "tempo secco",
            "pelle secca"
        ],
        "comparative": "più asciutto",
        "superlative": "il più asciutto"
    },
    {
        "word": "bagnato",
        "feminine": "bagnata",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🚿",
        "form": "adjective",
        "transcription": "baɲˈɲaːto",
        "plural": "bagnati",
        "femininePlural": "bagnate",
        "definitions": [
            {
                "text": "Coperto d'acqua o liquido.",
                "examples": [
                    "La sua giacca è bagnata dalla pioggia."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "tempo umido",
            "vestiti bagnati",
            "bagnarsi"
        ],
        "comparative": "più bagnato",
        "superlative": "il più bagnato"
    },
    {
        "word": "caldo",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "freddo",
        "oppositeEmoji": "❄️",
        "subtext": "clima caldo / latte caldo",
        "definitions": [
            {
                "text": "Che ha un'alta temperatura.",
                "examples": [
                    "Il latte è ancora caldo.",
                    "Fa molto caldo oggi."
                ]
            }
        ],
        "feminine": "calda",
        "plural": "caldi",
        "femininePlural": "calde",
        "comparative": "più caldo",
        "superlative": "il più caldo",
        "transcription": "ˈkaldo"
    },
    {
        "word": "freddo",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "caldo",
        "oppositeEmoji": "🔥",
        "subtext": "acqua fredda / vento freddo",
        "definitions": [
            {
                "text": "Che ha una bassa temperatura.",
                "examples": [
                    "L'acqua del mare è fredda.",
                    "Ho le mani fredde."
                ]
            }
        ],
        "feminine": "fredda",
        "plural": "freddi",
        "femininePlural": "fredde",
        "comparative": "più freddo",
        "superlative": "il più freddo",
        "transcription": "ˈfreddo"
    },
    {
        "word": "fresco",
        "feminine": "fresca",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌬️",
        "form": "adjective",
        "transcription": "ˈfresko",
        "plural": "freschi",
        "femininePlural": "fresche",
        "definitions": [
            {
                "text": "Leggermente freddo; piacevolmente fresco.",
                "examples": [
                    "Preferisce il tempo fresco per lavorare."
                ]
            }
        ],
        "subtext": "tempo fresco / stare al fresco",
        "synonyms": [
            "una bevanda fresca"
        ],
        "comparative": "più fresco",
        "superlative": "il più fresco"
    },
    {
        "word": "nebbioso",
        "feminine": "nebbiosa",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌫️",
        "form": "adjective",
        "transcription": "nebˈbjoːzo",
        "plural": "nebbiosi",
        "femininePlural": "nebbiose",
        "definitions": [
            {
                "text": "Caratterizzato dalla nebbia.",
                "examples": [
                    "Un mattino nebbioso.",
                    "Clima nebbioso."
                ]
            }
        ],
        "subtext": "molto nebbioso",
        "comparative": "più nebbioso",
        "superlative": "il più nebbioso"
    },
    {
        "word": "nevoso",
        "feminine": "nevosa",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "plural": "nevosi",
        "femininePlural": "nevose",
        "definitions": [
            {
                "text": "Accompagnato da neve.",
                "examples": [
                    "Un inverno nevoso.",
                    "Tempo nevoso."
                ]
            }
        ],
        "subtext": "pieno di neve",
        "comparative": "più nevoso",
        "superlative": "il più nevoso",
        "transcription": "neˈvozo"
    },
    {
        "word": "nuvoloso",
        "feminine": "nuvolosa",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☁️",
        "form": "adjective",
        "plural": "nuvolosi",
        "femininePlural": "nuvolose",
        "definitions": [
            {
                "text": "Coperto di nuvole.",
                "examples": [
                    "Il cielo oggi è nuvoloso.",
                    "Tempo nuvoloso."
                ]
            }
        ],
        "subtext": "cielo coperto",
        "comparative": "più nuvoloso",
        "superlative": "il più nuvoloso",
        "transcription": "nuvoˈlozo"
    },
    {
        "word": "piovoso",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "transcription": "pjoˈvoːzo",
        "definitions": [
            {
                "text": "Con molta pioggia.",
                "examples": [
                    "È una giornata piovosa.",
                    "Indossa un cappotto, fuori piove."
                ]
            }
        ],
        "subtext": "tempo piovoso",
        "synonyms": [
            "giornata di pioggia",
            "stagione delle piogge"
        ],
        "comparative": "più piovoso",
        "superlative": "il più piovoso",
        "feminine": "piovosa",
        "plural": "piovosi",
        "femininePlural": "piovose"
    },
    {
        "word": "soleggiato",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "transcription": "soledˈdʒaːto",
        "definitions": [
            {
                "text": "Con molta luce dal sole.",
                "examples": [
                    "È una giornata soleggiata.",
                    "Mi piace il tempo soleggiato."
                ]
            }
        ],
        "subtext": "tempo soleggiato",
        "synonyms": [
            "giornata di sole",
            "schiarite"
        ],
        "comparative": "più soleggiato",
        "superlative": "il più soleggiato",
        "feminine": "soleggiata",
        "plural": "soleggiati",
        "femininePlural": "soleggiate"
    },
    {
        "word": "tempestoso",
        "feminine": "tempestosa",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "⛈️",
        "form": "adjective",
        "plural": "tempestosi",
        "femininePlural": "tempestose",
        "definitions": [
            {
                "text": "Caratterizzato da tempeste.",
                "examples": [
                    "Un mare tempestoso.",
                    "Una notte tempestosa."
                ]
            }
        ],
        "subtext": "tempo brutto",
        "comparative": "più tempestoso",
        "superlative": "il più tempestoso",
        "transcription": "tempestoˈzo"
    },
    {
        "word": "tiepido",
        "feminine": "tiepida",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "transcription": "ˈtjɛːpido",
        "plural": "tiepidi",
        "femininePlural": "tiepide",
        "definitions": [
            {
                "text": "Leggermente caldo; piacevolmente riscaldato.",
                "examples": [
                    "L'ufficio è tiepido e confortevole."
                ]
            }
        ],
        "subtext": "tempo tiepido",
        "synonyms": [
            "un caloroso benvenuto",
            "stare al caldo"
        ],
        "comparative": "più tiepido",
        "superlative": "il più tiepido"
    },
    {
        "word": "ventoso",
        "feminine": "ventosa",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "💨",
        "form": "adjective",
        "plural": "ventosi",
        "femininePlural": "ventose",
        "definitions": [
            {
                "text": "Caratterizzato da vento forte.",
                "examples": [
                    "È una giornata ventosa.",
                    "Un clima ventoso."
                ]
            }
        ],
        "subtext": "molto ventoso",
        "comparative": "più ventoso",
        "superlative": "il più ventoso",
        "transcription": "venˈtozo"
    }
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();