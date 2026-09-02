(function() {
  const lang = "it";
  const data = [
  {
    "id": "it_starter_idioms_001",
    "word": "avere fame",
    "form": "idiom",
    "definitions": [
      {
        "text": "Avere il bisogno fisico di mangiare.",
        "examples": [
          "Ho molta fame, andiamo a mangiare una pizza."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "food"
  },
  {
    "id": "it_starter_idioms_002",
    "word": "avere sete",
    "form": "idiom",
    "definitions": [
      {
        "text": "Avere il bisogno fisico di bere.",
        "examples": [
          "Dopo la corsa ho molta sete."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "food"
  },
  {
    "id": "it_starter_idioms_003",
    "word": "avere caldo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sentire una temperatura corporea elevata.",
        "examples": [
          "Apri la finestra, ho molto caldo."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "weather"
  },
  {
    "id": "it_starter_idioms_004",
    "word": "avere freddo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sentire una temperatura corporea bassa.",
        "examples": [
          "In inverno bisogna coprirsi per non avere freddo."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "weather"
  },
  {
    "id": "it_starter_idioms_005",
    "word": "avere paura",
    "form": "idiom",
    "definitions": [
      {
        "text": "Provare timore o ansia di fronte a un pericolo.",
        "examples": [
          "Il bambino ha paura del buio."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "it_starter_idioms_006",
    "word": "avere bisogno di",
    "form": "idiom",
    "definitions": [
      {
        "text": "Necessitare di qualcosa o qualcuno.",
        "examples": [
          "Ho bisogno di una penna per scrivere."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "it_starter_idioms_007",
    "word": "avere sonno",
    "form": "idiom",
    "definitions": [
      {
        "text": "Essere stanco e sentire il bisogno di dormire.",
        "examples": [
          "I bambini hanno sonno, vanno a letto."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "health"
  },
  {
    "id": "it_starter_idioms_008",
    "word": "avere fretta",
    "form": "idiom",
    "definitions": [
      {
        "text": "Dover fare le cose rapidamente per mancanza di tempo.",
        "examples": [
          "Non posso fermarmi, ho molta fretta."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_009",
    "word": "avere ragione",
    "form": "idiom",
    "definitions": [
      {
        "text": "Pensare o dire la verità.",
        "examples": [
          "Hai ragione tu, questo ristorante è ottimo."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "it_starter_idioms_010",
    "word": "avere torto",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sbagliarsi nel proprio giudizio.",
        "examples": [
          "Ha ammesso di avere torto sulla data."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "it_starter_idioms_011",
    "word": "avere voglia di",
    "form": "idiom",
    "definitions": [
      {
        "text": "Desiderare di fare o mangiare qualcosa.",
        "examples": [
          "Ho voglia di prendere un buon gelato."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "it_starter_idioms_012",
    "word": "avere fortuna",
    "form": "idiom",
    "definitions": [
      {
        "text": "Godere di una situazione molto favorevole.",
        "examples": [
          "Lei ha molta fortuna nel suo lavoro."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "it_starter_idioms_013",
    "word": "avere tempo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Disporre del tempo necessario per fare qualcosa.",
        "examples": [
          "Abbiamo tempo per bere un caffè insieme."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_014",
    "word": "avere intenzione di",
    "form": "idiom",
    "definitions": [
      {
        "text": "Progettare di fare qualcosa in futuro.",
        "examples": [
          "Ho intenzione di viaggiare in Italia quest'estate."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "it_starter_idioms_015",
    "word": "avere fretta di",
    "form": "idiom",
    "definitions": [
      {
        "text": "Essere molto impaziente di fare qualcosa.",
        "examples": [
          "Ho fretta di finire questo lavoro."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "it_starter_idioms_016",
    "word": "essere in ritardo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Arrivare dopo l'orario stabilito.",
        "examples": [
          "Scusa, sono in ritardo a causa del traffico."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_017",
    "word": "essere in anticipo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Arrivare prima dell'orario previsto.",
        "examples": [
          "Sono arrivato con dieci minuti di anticipo."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_018",
    "word": "essere in orario",
    "form": "idiom",
    "definitions": [
      {
        "text": "Arrivare esattamente all'ora stabilita.",
        "examples": [
          "Il treno per Roma è arrivato in orario."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_019",
    "word": "essere in forma",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sentirsi in ottima salute fisica e mentale.",
        "examples": [
          "Faccio sport ogni giorno per essere in forma."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "health"
  },
  {
    "id": "it_starter_idioms_020",
    "word": "essere d'accordo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Condividere l'opinione di un'altra persona.",
        "examples": [
          "Sono perfettamente d'accordo con la tua idea."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "it_starter_idioms_021",
    "word": "essere pronto",
    "form": "idiom",
    "definitions": [
      {
        "text": "Essere preparato per un'attività.",
        "examples": [
          "Tutti sono pronti per iniziare la lezione."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "it_starter_idioms_022",
    "word": "essere occupato",
    "form": "idiom",
    "definitions": [
      {
        "text": "Avere molte cose da fare in un momento.",
        "examples": [
          "Non può rispondere al telefono, è molto occupato."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "work"
  },
  {
    "id": "it_starter_idioms_023",
    "word": "essere spiacente",
    "form": "idiom",
    "definitions": [
      {
        "text": "Provarsi dispiaciuto per un inconveniente.",
        "examples": [
          "Sono spiacente di aver dimenticato il tuo nome."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_024",
    "word": "essere sorpreso",
    "form": "idiom",
    "definitions": [
      {
        "text": "Rimanere meravigliato per un fatto inatteso.",
        "examples": [
          "Siamo stati sorpresi di vederti qui."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "it_starter_idioms_025",
    "word": "fare colazione",
    "form": "idiom",
    "definitions": [
      {
        "text": "Consumare il primo pasto della mattina.",
        "examples": [
          "Faccio colazione ogni mattina alle sette."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "food"
  },
  {
    "id": "it_starter_idioms_026",
    "word": "fare la spesa",
    "form": "idiom",
    "definitions": [
      {
        "text": "Acquistare cibo e prodotti per la casa.",
        "examples": [
          "Il sabato mattina vado al supermercato a fare la spesa."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "shopping"
  },
  {
    "id": "it_starter_idioms_027",
    "word": "fare acquisti",
    "form": "idiom",
    "definitions": [
      {
        "text": "Comprarsi vestiti o oggetti nei negozi.",
        "examples": [
          "Ci piace fare acquisti nel centro commerciale."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "shopping"
  },
  {
    "id": "it_starter_idioms_028",
    "word": "fare festa",
    "form": "idiom",
    "definitions": [
      {
        "text": "Divertirsi e celebrare in compagnia.",
        "examples": [
          "Tutta la famiglia si è riunita per fare festa."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "social"
  },
  {
    "id": "it_starter_idioms_029",
    "word": "fare attenzione",
    "form": "idiom",
    "definitions": [
      {
        "text": "Essere prudenti e vigili di fronte a un rischio.",
        "examples": [
          "Fai attenzione quando attraversi la strada."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "actions"
  },
  {
    "id": "it_starter_idioms_030",
    "word": "fare la conoscenza di",
    "form": "idiom",
    "definitions": [
      {
        "text": "Incontrare una persona per la prima volta.",
        "examples": [
          "Piacere di fare la tua conoscenza."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "social"
  },
  {
    "id": "it_starter_idioms_031",
    "word": "fare la fila",
    "form": "idiom",
    "definitions": [
      {
        "text": "Aspettare il proprio turno in una coda.",
        "examples": [
          "Abbiamo dovuto fare la fila per comprare i biglietti."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "it_starter_idioms_032",
    "word": "fare sport",
    "form": "idiom",
    "definitions": [
      {
        "text": "Praticare regolarmente attività fisica.",
        "examples": [
          "Mio fratello fa sport tre volte alla settimana."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "it_starter_idioms_033",
    "word": "fare una passeggiata",
    "form": "idiom",
    "definitions": [
      {
        "text": "Camminare per rilassarsi e divertirsi.",
        "examples": [
          "Facciamo una passeggiata al parco oggi pomeriggio."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "leisure"
  },
  {
    "id": "it_starter_idioms_034",
    "word": "fare la doccia",
    "form": "idiom",
    "definitions": [
      {
        "text": "Lavarsi sotto il getto d'acqua.",
        "examples": [
          "Faccio una doccia calda prima di andare a letto."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "it_starter_idioms_035",
    "word": "fare il bagno",
    "form": "idiom",
    "definitions": [
      {
        "text": "Lavarsi o nuotare nell'acqua.",
        "examples": [
          "D'estate ci piace fare il bagno al mare."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "leisure"
  },
  {
    "id": "it_starter_idioms_036",
    "word": "prendere un caffè",
    "form": "idiom",
    "definitions": [
      {
        "text": "Bere una tazza di caffè in compagnia.",
        "examples": [
          "Prendiamo un caffè insieme al bar?"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "social"
  },
  {
    "id": "it_starter_idioms_037",
    "word": "prendere una decisione",
    "form": "idiom",
    "definitions": [
      {
        "text": "Scegliere con fermezza cosa fare.",
        "examples": [
          "Deve prendere una decisione importante per il suo futuro."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "it_starter_idioms_038",
    "word": "prendere l'autobus",
    "form": "idiom",
    "definitions": [
      {
        "text": "Utilizzare l'autobus per spostarsi.",
        "examples": [
          "Prendo l'autobus ogni mattina per andare a scuola."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "transport"
  },
  {
    "id": "it_starter_idioms_039",
    "word": "prendere appunti",
    "form": "idiom",
    "definitions": [
      {
        "text": "Scrivere i punti principali di una spiegazione.",
        "examples": [
          "Gli studenti prendono appunti durante la lezione."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "education"
  },
  {
    "id": "it_starter_idioms_040",
    "word": "prendersi del tempo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Agire con calma senza fretta.",
        "examples": [
          "Prenditi del tempo per pensare alla risposta."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_041",
    "word": "d'accordo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Parola usata per esprimere consenso.",
        "examples": [
          "D'accordo, ci vediamo davanti al cinema."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_042",
    "word": "per favore",
    "form": "idiom",
    "definitions": [
      {
        "text": "Formula di cortesia per chiedere qualcosa.",
        "examples": [
          "Un bicchiere d'acqua, per favore."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_043",
    "word": "prego",
    "form": "idiom",
    "definitions": [
      {
        "text": "Risposta cortese a chi ringrazia.",
        "examples": [
          "Grazie per l'aiuto! — Prego, figurati!"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_044",
    "word": "figurati",
    "form": "idiom",
    "definitions": [
      {
        "text": "Risposta informale che minimizza un favore.",
        "examples": [
          "Grazie mille! — Figurati, è stato un piacere!"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_045",
    "word": "per esempio",
    "form": "idiom",
    "definitions": [
      {
        "text": "Locuzione che introduce un'illustrazione.",
        "examples": [
          "Mi piace la frutta, per esempio le mele."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_046",
    "word": "invece",
    "form": "idiom",
    "definitions": [
      {
        "text": "Locuzione per introdurre una contrapposizione.",
        "examples": [
          "Io preferisco il tè, mio fratello invece prende il caffè."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_047",
    "word": "infatti",
    "form": "idiom",
    "definitions": [
      {
        "text": "Conferma di un'affermazione precedente.",
        "examples": [
          "Fa freddo oggi, infatti c'è la neve."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_048",
    "word": "inoltre",
    "form": "idiom",
    "definitions": [
      {
        "text": "Elemento aggiunto a quanto già detto.",
        "examples": [
          "La casa è bella e inoltre è vicina al centro."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_049",
    "word": "comunque",
    "form": "idiom",
    "definitions": [
      {
        "text": "In ogni caso o in qualsiasi modo.",
        "examples": [
          "Grazie comunque per l'invito."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_050",
    "word": "purtroppo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Espressione di rammarico per una brutta notizia.",
        "examples": [
          "Purtroppo oggi non posso venire alla festa."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_051",
    "word": "grazie mille",
    "form": "idiom",
    "definitions": [
      {
        "text": "Espressione di vivo ringraziamento.",
        "examples": [
          "Grazie mille per il tuo prezioso aiuto!"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_052",
    "word": "buon viaggio",
    "form": "idiom",
    "definitions": [
      {
        "text": "Augurio rivolto a chi parte per un tragitto.",
        "examples": [
          "Buon viaggio e divertiti a Parigi!"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "travel"
  },
  {
    "id": "it_starter_idioms_053",
    "word": "buona fortuna",
    "form": "idiom",
    "definitions": [
      {
        "text": "Augurio di successo per un evento imminente.",
        "examples": [
          "Buona fortuna per la tua sfilata!"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "success"
  },
  {
    "id": "it_starter_idioms_054",
    "word": "buon appetito",
    "form": "idiom",
    "definitions": [
      {
        "text": "Augurio caloroso all'inizio del pranzo.",
        "examples": [
          "Il pranzo è pronto, buon appetito a tutti!"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "food"
  },
  {
    "id": "it_starter_idioms_055",
    "word": "non importa",
    "form": "idiom",
    "definitions": [
      {
        "text": "Espressione usata per minimizzare una seccatura.",
        "examples": [
          "Sei arrivato tardi? Non importa, cominceremo ora."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_056",
    "word": "ci vediamo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Saluto informale con intenzione di rivedersi.",
        "examples": [
          "Ciao Marco, ci vediamo domani sera!"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_057",
    "word": "a presto",
    "form": "idiom",
    "definitions": [
      {
        "text": "Saluto affettuoso prima di un prossimo incontro.",
        "examples": [
          "Grazie per la bella giornata e a presto!"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_058",
    "word": "a dopo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Saluto rivolto a chi si rivede nella giornata.",
        "examples": [
          "Vado in biblioteca, a dopo cara!"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_059",
    "word": "a domani",
    "form": "idiom",
    "definitions": [
      {
        "text": "Saluto rivolto a chi si rivede il giorno seguente.",
        "examples": [
          "Buona serata e a domani in ufficio!"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_060",
    "word": "buona giornata",
    "form": "idiom",
    "definitions": [
      {
        "text": "Augurio di trascorrere ore serene.",
        "examples": [
          "Arrivederci signora, buona giornata!"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_061",
    "word": "buonasera",
    "form": "idiom",
    "definitions": [
      {
        "text": "Saluto rivolto dal tardo pomeriggio in poi.",
        "examples": [
          "Buonasera a tutti e benvenuti al concerto."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_062",
    "word": "buonanotte",
    "form": "idiom",
    "definitions": [
      {
        "text": "Augurio prima di andare a dormire.",
        "examples": [
          "È molto tardi, buonanotte a tutti."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_063",
    "word": "in questo momento",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nel tempo presente in cui si parla.",
        "examples": [
          "In questo momento sto studiando la grammatica."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_064",
    "word": "questa sera",
    "form": "idiom",
    "definitions": [
      {
        "text": "Durante la serata del giorno stesso.",
        "examples": [
          "Questa sera andiamo al teatro con gli amici."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_065",
    "word": "domani mattina",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nella prima parte del giorno seguente.",
        "examples": [
          "L'appuntamento è fissato per domani mattina."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_066",
    "word": "ieri sera",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nella serata del giorno precedente.",
        "examples": [
          "Ieri sera abbiamo visto un gran bel film."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_067",
    "word": "tutti i giorni",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ogni giorno senza alcuna eccezione.",
        "examples": [
          "Faccio una passeggiata tutti i giorni."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_068",
    "word": "tutto il tempo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Continuamente durante tutta la durata.",
        "examples": [
          "Mio fratello ascolta musica tutto il tempo."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_069",
    "word": "un po' di",
    "form": "idiom",
    "definitions": [
      {
        "text": "Una piccola quantità di materia.",
        "examples": [
          "Vuoi un po' di zucchero nel caffè?"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "quantities"
  },
  {
    "id": "it_starter_idioms_070",
    "word": "molto di",
    "form": "idiom",
    "definitions": [
      {
        "text": "Una parte consistente di qualcosa.",
        "examples": [
          "C'è molto di vero in questa storia."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "quantities"
  },
  {
    "id": "it_starter_idioms_071",
    "word": "troppo di",
    "form": "idiom",
    "definitions": [
      {
        "text": "Una quantità esagerata di qualcosa.",
        "examples": [
          "Non mettere troppo sale nel sugo."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "quantities"
  },
  {
    "id": "it_starter_idioms_072",
    "word": "abbastanza di",
    "form": "idiom",
    "definitions": [
      {
        "text": "Una quantità sufficiente per il bisogno.",
        "examples": [
          "Abbiamo abbastanza cibo per la cena."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "quantities"
  },
  {
    "id": "it_starter_idioms_073",
    "word": "in corso di",
    "form": "idiom",
    "definitions": [
      {
        "text": "Durante lo svolgimento di un'azione.",
        "examples": [
          "I lavori sono in corso di completamento."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "actions"
  },
  {
    "id": "it_starter_idioms_074",
    "word": "sul punto di",
    "form": "idiom",
    "definitions": [
      {
        "text": "In prossimità immediata di agire.",
        "examples": [
          "Il treno è sul punto di partire dal binario."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_075",
    "word": "in fondo a",
    "form": "idiom",
    "definitions": [
      {
        "text": "All'estremità di un ambiente o via.",
        "examples": [
          "In fondo al corridoio c'è la porta del bagno."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "it_starter_idioms_076",
    "word": "di fronte a",
    "form": "idiom",
    "definitions": [
      {
        "text": "In posizione opposta e frontale.",
        "examples": [
          "Abito proprio di fronte alla scuola."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "it_starter_idioms_077",
    "word": "accanto a",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nelle immediate vicinanze laterali.",
        "examples": [
          "La farmacia è accanto al bar."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "it_starter_idioms_078",
    "word": "in mezzo a",
    "form": "idiom",
    "definitions": [
      {
        "text": "Al centro di uno spazio o gruppo.",
        "examples": [
          "C'è una fontana in mezzo alla piazza."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "it_starter_idioms_079",
    "word": "sotto di",
    "form": "idiom",
    "definitions": [
      {
        "text": "In posizione inferior rispetto a qualcosa.",
        "examples": [
          "Il gatto dorme sotto la sedia."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "it_starter_idioms_080",
    "word": "sopra di",
    "form": "idiom",
    "definitions": [
      {
        "text": "In posizione superiore rispetto a qualcosa.",
        "examples": [
          "C'è un quadro sopra il divano."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "it_starter_idioms_081",
    "word": "a causa di",
    "form": "idiom",
    "definitions": [
      {
        "text": "Per via di un fattore per lo più negativo.",
        "examples": [
          "Il volo è stato cancellato a causa della nebbia."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "reasons"
  },
  {
    "id": "it_starter_idioms_082",
    "word": "grazie a",
    "form": "idiom",
    "definitions": [
      {
        "text": "Per merito di un fattore positivo.",
        "examples": [
          "Ho superato l'esame grazie ai tuoi consigli."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "reasons"
  },
  {
    "id": "it_starter_idioms_083",
    "word": "secondo me",
    "form": "idiom",
    "definitions": [
      {
        "text": "In base al mio giudizio personale.",
        "examples": [
          "Secondo me questa è la decisione migliore."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "it_starter_idioms_084",
    "word": "a mio parere",
    "form": "idiom",
    "definitions": [
      {
        "text": "In base alla mia opinione personale.",
        "examples": [
          "A mio parere la mostra è molto interessante."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "it_starter_idioms_085",
    "word": "per ora",
    "form": "idiom",
    "definitions": [
      {
        "text": "Al momento presente e provvisoriamente.",
        "examples": [
          "Per ora tutto procede senza intoppi."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_086",
    "word": "in generale",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nel complesso in modo ordinario.",
        "examples": [
          "In generale mi sveglio alle sette."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "it_starter_idioms_087",
    "word": "di solito",
    "form": "idiom",
    "definitions": [
      {
        "text": "Abitualmente secondo le consuetudini.",
        "examples": [
          "Di solito prendo il tè senza zucchero."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "it_starter_idioms_088",
    "word": "subito",
    "form": "idiom",
    "definitions": [
      {
        "text": "Immediatamente senza perdere un attimo.",
        "examples": [
          "Vieni qui subito, ti devo parlare."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_089",
    "word": "in futuro",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nel tempo a venire che deve accadere.",
        "examples": [
          "In futuro vorrei comprare una casa in campagna."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_090",
    "word": "per terra",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sul pavimento o sul suolo.",
        "examples": [
          "Attento, il tuo cappello è caduto per terra."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "it_starter_idioms_091",
    "word": "all'inizio",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nella fase iniziale di un evento.",
        "examples": [
          "All'inizio del film la musica è molto rilassante."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_092",
    "word": "alla fine",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nella fase conclusiva di un tempo.",
        "examples": [
          "Alla fine della partita tutti erano felicissimi."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_093",
    "word": "da un lato",
    "form": "idiom",
    "definitions": [
      {
        "text": "Introduce una prima prospettiva di analisi.",
        "examples": [
          "Da un lato vorrei uscire, dall'altro sono stanco."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_094",
    "word": "dall'altro lato",
    "form": "idiom",
    "definitions": [
      {
        "text": "Introduce una prospettiva opposta.",
        "examples": [
          "Dall'altro lato della strada c'è la fermata."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "it_starter_idioms_095",
    "word": "all'improvviso",
    "form": "idiom",
    "definitions": [
      {
        "text": "In modo inaspettato e fulmineo.",
        "examples": [
          "All'improvviso le luci della sala si sono spente."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_096",
    "word": "di nuovo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ancora una volta ripetendo l'azione.",
        "examples": [
          "Ha provato di nuovo ed è riuscito nell'intento."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "actions"
  },
  {
    "id": "it_starter_idioms_097",
    "word": "contemporaneamente",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nello stesso istante preciso.",
        "examples": [
          "Sono arrivati contemporaneamente alla stazione."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_098",
    "word": "vale a dire",
    "form": "idiom",
    "definitions": [
      {
        "text": "Locuzione usata per chiarire un concetto.",
        "examples": [
          "Partiamo venerdì, vale a dire domani mattina."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_099",
    "word": "almeno",
    "form": "idiom",
    "definitions": [
      {
        "text": "Indica una quantità o condizione minima.",
        "examples": [
          "Mangia almeno un frutto per merenda."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "quantities"
  },
  {
    "id": "it_starter_idioms_100",
    "word": "più o meno",
    "form": "idiom",
    "definitions": [
      {
        "text": "In modo approssimativo senza precisione.",
        "examples": [
          "Il viaggio dura più o meno due ore."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "quantities"
  },
  {
    "id": "it_starter_idioms_101",
    "word": "senza dubbio",
    "form": "idiom",
    "definitions": [
      {
        "text": "Con certezza assoluta senza esitazioni.",
        "examples": [
          "Verrà senza dubbio alla nostra cena."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "it_starter_idioms_102",
    "word": "in vacanza",
    "form": "idiom",
    "definitions": [
      {
        "text": "In periodo di riposo dal lavoro.",
        "examples": [
          "I miei vicini sono in vacanza in Sicilia."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "travel"
  },
  {
    "id": "it_starter_idioms_103",
    "word": "in corso",
    "form": "idiom",
    "definitions": [
      {
        "text": "Che si sta svolgendo attualmente.",
        "examples": [
          "La riunione è in corso nell'aula magna."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "work"
  },
  {
    "id": "it_starter_idioms_104",
    "word": "in guasto",
    "form": "idiom",
    "definitions": [
      {
        "text": "Che non funziona per un problema tecnico.",
        "examples": [
          "L'ascensore è in guasto da ieri."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "tech"
  },
  {
    "id": "it_starter_idioms_105",
    "word": "in pace",
    "form": "idiom",
    "definitions": [
      {
        "text": "In uno stato di tranquillità e armonia.",
        "examples": [
          "Lasciami leggere il libro in pace."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "it_starter_idioms_106",
    "word": "in collera",
    "form": "idiom",
    "definitions": [
      {
        "text": "Che prova una forte rabbia.",
        "examples": [
          "Il cliente era molto in collera per il ritardo."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "it_starter_idioms_107",
    "word": "in saldo",
    "form": "idiom",
    "definitions": [
      {
        "text": "In vendita a prezzo scontato.",
        "examples": [
          "Ho comprato questa bella camicia in saldo."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "shopping"
  },
  {
    "id": "it_starter_idioms_108",
    "word": "al mercato",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nella piazza dove si vendono i cibi.",
        "examples": [
          "Compra la frutta fresca al mercato ogni mattina."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "shopping"
  },
  {
    "id": "it_starter_idioms_109",
    "word": "al ristorante",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nel locale dove si servono pasti.",
        "examples": [
          "Stasera ceniamo al ristorante con gli amici."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "food"
  },
  {
    "id": "it_starter_idioms_110",
    "word": "al cinema",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nella sala di proiezione dei film.",
        "examples": [
          "Cosa andiamo a vedere al cinema stasera?"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "leisure"
  },
  {
    "id": "it_starter_idioms_111",
    "word": "a casa",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nel proprio domicilio residenziale.",
        "examples": [
          "La domenica mi piace restare a casa a riposare."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "home"
  },
  {
    "id": "it_starter_idioms_112",
    "word": "in città",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nel centro urbano principale.",
        "examples": [
          "Ho diverse commissioni da sbrigare in città."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "it_starter_idioms_113",
    "word": "in campagna",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nelle zone rurali fuori città.",
        "examples": [
          "I miei nonni vivono in una bella casa in campagna."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "it_starter_idioms_114",
    "word": "in montagna",
    "form": "idiom",
    "definitions": [
      {
        "text": "In una regione elevata di rilievo.",
        "examples": [
          "In inverno andiamo a sciare in montagna."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "it_starter_idioms_115",
    "word": "in spiaggia",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sulla riva del mare sabbiosa.",
        "examples": [
          "I bambini giocano in spiaggia con la sabbia."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "leisure"
  },
  {
    "id": "it_starter_idioms_116",
    "word": "di tanto in tanto",
    "form": "idiom",
    "definitions": [
      {
        "text": "Occasionalmente senza frequenza.",
        "examples": [
          "Vado al teatro di tanto in tanto."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_117",
    "word": "un giorno",
    "form": "idiom",
    "definitions": [
      {
        "text": "In un tempo indeterminato.",
        "examples": [
          "Un giorno mi piacerebbe visitare il Giappone."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_118",
    "word": "sempre",
    "form": "idiom",
    "definitions": [
      {
        "text": "In modo continuo e senza sosta.",
        "examples": [
          "Dice sempre la verità a tutti."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_119",
    "word": "mai dire mai",
    "form": "idiom",
    "definitions": [
      {
        "text": "Non bisogna mai escludere alcuna possibilità per il futuro.",
        "examples": [
          "В жизнь può succedere di tutto, mai dire mai."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_120",
    "word": "spesso",
    "form": "idiom",
    "definitions": [
      {
        "text": "Molte volte con frequenza alta.",
        "examples": [
          "Andiamo spesso a camminare lungo il fiume."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_121",
    "word": "talvolta",
    "form": "idiom",
    "definitions": [
      {
        "text": "A volte con frequenza moderata.",
        "examples": [
          "Talvolta preferisce cucinare piatti semplici."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_122",
    "word": "raramente",
    "form": "idiom",
    "definitions": [
      {
        "text": "Quasi mai in pochissime occasioni.",
        "examples": [
          "Mangia raramente dolci la sera."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_123",
    "word": "cantando",
    "form": "idiom",
    "definitions": [
      {
        "text": "Mentre si emettono canti.",
        "examples": [
          "Prepara la colazione cantando felice."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "actions"
  },
  {
    "id": "it_starter_idioms_124",
    "word": "ad alta voce",
    "form": "idiom",
    "definitions": [
      {
        "text": "Parlando con volume forte.",
        "examples": [
          "Il maestro legge la storia ad alta voce."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_125",
    "word": "in silenzio",
    "form": "idiom",
    "definitions": [
      {
        "text": "Senza fare il minimo rumore.",
        "examples": [
          "Gli studenti lavorano in silenzio nella sala."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "it_starter_idioms_126",
    "word": "al tempo stesso",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nello stesso momento simultaneamente.",
        "examples": [
          "È un ragazzo intelligente e gentile al tempo stesso."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "character"
  },
  {
    "id": "it_starter_idioms_127",
    "word": "da vicino",
    "form": "idiom",
    "definitions": [
      {
        "text": "Osservando da breve distanza.",
        "examples": [
          "Guarda questo quadro da vicino per vedere i dettagli."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "perception"
  },
  {
    "id": "it_starter_idioms_128",
    "word": "da lontano",
    "form": "idiom",
    "definitions": [
      {
        "text": "Osservando da grande distanza.",
        "examples": [
          "Si vede il campanile della chiesa da lontano."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "perception"
  },
  {
    "id": "it_starter_idioms_129",
    "word": "in libertà",
    "form": "idiom",
    "definitions": [
      {
        "text": "Senza essere recluso o condizionato.",
        "examples": [
          "Gli animali vivono in libertà nella riserva."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "nature"
  },
  {
    "id": "it_starter_idioms_130",
    "word": "al sicuro",
    "form": "idiom",
    "definitions": [
      {
        "text": "In un luogo protetto dai pericoli.",
        "examples": [
          "I documenti importanti sono al sicuro in cassaforte."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "safety"
  },
  {
    "id": "it_starter_idioms_131",
    "word": "in pericolo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Esposto a un grave rischio.",
        "examples": [
          "L'escursionista smarrito era in pericolo sulle rocce."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "safety"
  },
  {
    "id": "it_starter_idioms_132",
    "word": "al caldo",
    "form": "idiom",
    "definitions": [
      {
        "text": "In un luogo a temperatura mite.",
        "examples": [
          "Restiamo al caldo mentre fuori piove."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "home"
  },
  {
    "id": "it_starter_idioms_133",
    "word": "al fresco",
    "form": "idiom",
    "definitions": [
      {
        "text": "In un luogo condizionato e fresco.",
        "examples": [
          "Conserva il latte al fresco in frigorifero."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "home"
  },
  {
    "id": "it_starter_idioms_134",
    "word": "in diretta",
    "form": "idiom",
    "definitions": [
      {
        "text": "Trasmesso nello stesso momento in cui accade.",
        "examples": [
          "La partita è trasmessa in diretta alla televisione."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "leisure"
  },
  {
    "id": "it_starter_idioms_135",
    "word": "sul posto",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nel luogo stesso dove occorre il fatto.",
        "examples": [
          "Preferisci mangiare sul posto o portare via?"
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "food"
  },
  {
    "id": "it_starter_idioms_136",
    "word": "al primo piano",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nel livello immediatamente sopra il suolo.",
        "examples": [
          "L'appartamento si trova al primo piano del palazzo."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "home"
  },
  {
    "id": "it_starter_idioms_137",
    "word": "al piano terra",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nel livello a quota strada.",
        "examples": [
          "Il negozio è situato al piano terra."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "home"
  },
  {
    "id": "it_starter_idioms_138",
    "word": "all'aperto",
    "form": "idiom",
    "definitions": [
      {
        "text": "In uno spazio esterno senza tetto.",
        "examples": [
          "Ci piace pranzare all'aperto d'estate."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "leisure"
  },
  {
    "id": "it_starter_idioms_139",
    "word": "all'estero",
    "form": "idiom",
    "definitions": [
      {
        "text": "In un paese straniero fuori dai confini.",
        "examples": [
          "Ha lavorato tre anni all'estero per fare esperienza."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "travel"
  },
  {
    "id": "it_starter_idioms_140",
    "word": "in estate",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nella stagione calda dell'anno.",
        "examples": [
          "In estate andiamo in vacanza al mare."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_141",
    "word": "in inverno",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nella stagione fredda dell'anno.",
        "examples": [
          "In inverno c'è la neve sulle montagne."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_142",
    "word": "in autunno",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nella stagione delle foglie cadenti.",
        "examples": [
          "In autunno le foglie degli alberi diventano rosse."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_143",
    "word": "in primavera",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nella stagione dei fiori risvegliati.",
        "examples": [
          "In primavera i prati si riempiono di fiori colorati."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_144",
    "word": "di profilo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Di fianco rispetto all'osservatore.",
        "examples": [
          "L'artista ha disegnato il ritratto di profilo."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "art"
  },
  {
    "id": "it_starter_idioms_145",
    "word": "di fronte",
    "form": "idiom",
    "definitions": [
      {
        "text": "Davanti rispetto a chi guarda.",
        "examples": [
          "La porta d'ingresso si trova proprio di fronte."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "it_starter_idioms_146",
    "word": "a piedi nudi",
    "form": "idiom",
    "definitions": [
      {
        "text": "Senza scarpe né calze ai piedi.",
        "examples": [
          "Sulla sabbia calda mi piace camminare a piedi nudi."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "it_starter_idioms_147",
    "word": "a mano a mano",
    "form": "idiom",
    "definitions": [
      {
        "text": "Man mano che il tempo passa.",
        "examples": [
          "A mano a mano che studio comprendo meglio la lingua."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_148",
    "word": "di nascosto",
    "form": "idiom",
    "definitions": [
      {
        "text": "Senza farsi vedere da nessuno.",
        "examples": [
          "Il bambino ha preso un biscotto di nascosto."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "actions"
  },
  {
    "id": "it_starter_idioms_149",
    "word": "a stento",
    "form": "idiom",
    "definitions": [
      {
        "text": "Con grandissima difficoltà e sforzo.",
        "examples": [
          "Riusciva a stento a camminare dopo la gara."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "health"
  },
  {
    "id": "it_starter_idioms_150",
    "word": "a vista d'occhio",
    "form": "idiom",
    "definitions": [
      {
        "text": "In modo molto visibile e rapido.",
        "examples": [
          "I fiori in giardino crescono a vista d'occhio."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "nature"
  },
  {
    "id": "it_starter_idioms_151",
    "word": "di buon'ora",
    "form": "idiom",
    "definitions": [
      {
        "text": "Molto presto la mattina.",
        "examples": [
          "Il contadino si sveglia di buon'ora ogni giorno."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_152",
    "word": "fianco a fianco",
    "form": "idiom",
    "definitions": [
      {
        "text": "L'uno accanto all'altro in modo affiancato.",
        "examples": [
          "I due amici camminavano fianco a fianco nel parco."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "social"
  },
  {
    "id": "it_starter_idioms_153",
    "word": "a testa alta",
    "form": "idiom",
    "definitions": [
      {
        "text": "Con dignità e orgoglio personale.",
        "examples": [
          "Ha affrontato la prova a testa alta senza paura."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "character"
  },
  {
    "id": "it_starter_idioms_154",
    "word": "di sicuro",
    "form": "idiom",
    "definitions": [
      {
        "text": "Senza alcun dubbio con certezza.",
        "examples": [
          "Verrò di sicuro alla tua festa di compleanno."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "certainty"
  },
  {
    "id": "it_starter_idioms_155",
    "word": "per caso",
    "form": "idiom",
    "definitions": [
      {
        "text": "In modo fortuito senza pianificazione.",
        "examples": [
          "Ci siamo incontrati per caso al centro commerciale."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "luck"
  },
  {
    "id": "it_starter_idioms_156",
    "word": "di fretta",
    "form": "idiom",
    "definitions": [
      {
        "text": "In gran velocità per mancanza di tempo.",
        "examples": [
          "È uscito di fretta per non perdere il treno."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "it_starter_idioms_157",
    "word": "in ritardo di",
    "form": "idiom",
    "definitions": [
      {
        "text": "Con un ritardo misurato in tempo.",
        "examples": [
          "Il volo è arrivato in ritardo di mezz'ora."
        ]
      }
    ],
    "subtext": "espressione idiomatica",
    "lang": "it",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  }
];

  if (typeof window !== "undefined") {
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [
      ...(window.vocabularyData[lang] || []),
      ...data
    ];
  }
})();
