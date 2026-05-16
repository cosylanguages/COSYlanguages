(function() {
    const lang = "de";
    const data = [
        {
            "word": "abrupt",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⏱️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Plötzlich und unerwartet; schroff und unhöflich im Verhalten.",
                    "examples": [
                        "Das Gespräch nahm ein abruptes und unerwartetes Ende."
                    ]
                }
            ],
            "subtext": "ein abruptes Ende / abrupte Art / abrupt stehen bleiben",
            "comparative": "abrupter",
            "superlative": "am abruptesten",
            "synonyms": ["plötzlich", "schroff"],
            "opposite": "allmählich"
        },
        {
            "word": "abstrus",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🧐",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Schwer zu verstehen; unklar oder komplex.",
                    "examples": [
                        "Der Artikel wurde wegen seines abstrusen theoretischen Rahmens kritisiert."
                    ]
                }
            ],
            "subtext": "sehr abstrus / ziemlich abstrus / ein abstruses Argument",
            "comparative": "abstruser",
            "superlative": "am abstrusesten",
            "synonyms": ["unklar", "verworren"],
            "opposite": "einfach"
        },
        {
            "word": "anachronistisch",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Altmodisch; einer früheren Zeit angehörend.",
                    "examples": [
                        "Die Politik wirkt im heutigen Kontext völlig anachronistisch."
                    ]
                }
            ],
            "subtext": "völlig anachronistisch / zunehmend anachronistisch / tief anachronistisch",
            "comparative": "anachronistischer",
            "superlative": "am anachronistischsten",
            "synonyms": ["altmodisch", "archaisch"],
            "opposite": "zeitgemäß"
        },
        {
            "word": "antithetisch",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Einer Sache direkt entgegengesetzt oder widersprüchlich.",
                    "examples": [
                        "Sein Handeln stand im krassen Gegensatz zu den Werten, die er angeblich vertrat."
                    ]
                }
            ],
            "subtext": "direkt antithetisch / völlig antithetisch / antithetisch zu",
            "comparative": "antithetischer",
            "superlative": "am antithetischsten",
            "synonyms": ["gegensätzlich", "widersprüchlich"],
            "opposite": "identisch"
        },
        {
            "word": "arkan",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🔮",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Nur wenigen Menschen bekannt; geheimnisvoll und geheim.",
                    "examples": [
                        "Das Verfahren war unnötig arkan und unzugänglich."
                    ]
                }
            ],
            "subtext": "sehr arkan / völlig arkan / arkane Kenntnisse",
            "comparative": "arkaner",
            "superlative": "am arkansten",
            "synonyms": ["geheimnisvoll", "geheim"],
            "opposite": "allgemeinbekannt"
        },
        {
            "word": "atypisch",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🦄",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Nicht typisch; nicht normal oder üblich.",
                    "examples": [
                        "Dies war ein atypischer Fall, der nicht die Norm widerspiegelt."
                    ]
                }
            ],
            "subtext": "sehr atypisch / höchst atypisch / statistisch atypisch",
            "comparative": "atypischer",
            "superlative": "am atypischsten",
            "synonyms": ["unüblich", "anormal"],
            "opposite": "typisch"
        },
        {
            "word": "binär",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Aus zwei Dingen bestehend; auf einer Dichotomie basierend.",
                    "examples": [
                        "Die Debatte präsentiert eine falsche Binärität zwischen Wachstum und Gerechtigkeit."
                    ]
                }
            ],
            "subtext": "eine falsche Binärität / eine binäre Wahl / nicht rein binär",
            "comparative": "binärer",
            "superlative": "am binärsten",
            "synonyms": ["dual", "doppelt"],
            "opposite": "unitär"
        },
        {
            "word": "kategorisch",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "❗",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Absolut; ohne Ausnahmen oder Bedingungen ausgedrückt.",
                    "examples": [
                        "Sie gab ein kategorisches Dementi der Anschuldigungen ab."
                    ]
                }
            ],
            "subtext": "ein kategorisches Dementi / kategorisch abgelehnt / absolut kategorisch",
            "comparative": "kategorischer",
            "superlative": "am kategorischsten",
            "synonyms": ["absolut", "vorbehaltlos"],
            "opposite": "eingeschränkt"
        },
        {
            "word": "beherrscht",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🛡️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Vorsichtig unter Berücksichtigung aller Umstände; besonnen.",
                    "examples": [
                        "Er war in seinen öffentlichen Äußerungen sehr beherrscht."
                    ]
                }
            ],
            "subtext": "sehr beherrscht / äußerst beherrscht / beherrscht bleiben",
            "comparative": "beherrschter",
            "superlative": "am beherrschtesten",
            "synonyms": ["vorsichtig", "besonnen"],
            "opposite": "tollkühn"
        },
        {
            "word": "verdeckt",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🕵️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Versteckt; geheim; nicht offen anerkannt.",
                    "examples": [
                        "Die Operation beinhaltete eine verdeckte Überwachung der Gruppe."
                    ]
                }
            ],
            "subtext": "völlig verdeckt / eine verdeckte Operation / tief verdeckt",
            "comparative": "verdeckter",
            "superlative": "am verdecktesten",
            "synonyms": ["geheim", "klandestin"],
            "opposite": "offen"
        },
        {
            "word": "dialektisch",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Bezieht sich auf die logische Erörterung von Ideen durch Gegensätze.",
                    "examples": [
                        "Die Analyse wendet durchgehend eine dialektische Methode an."
                    ]
                }
            ],
            "subtext": "ein dialektischer Ansatz / dialektische Spannung / dialektisch gelöst",
            "comparative": "dialektischer",
            "superlative": "am dialektischsten",
            "synonyms": ["logisch", "analytisch"]
        },
        {
            "word": "diffus",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌫️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Über ein weites Gebiet verstreut; mangelnde Klarheit.",
                    "examples": [
                        "Das Argument war zu diffus, um einen starken Eindruck zu hinterlassen."
                    ]
                }
            ],
            "subtext": "sehr diffus / ziemlich diffus / eine diffuse Antwort",
            "comparative": "diffuser",
            "superlative": "am diffusesten",
            "synonyms": ["verstreut", "vage"],
            "opposite": "konzentriert"
        },
        {
            "word": "elusiv",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🌬️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Schwer zu finden, einzufangen oder zu erreichen.",
                    "examples": [
                        "Die Wahrheit erwies sich in diesem Fall als bemerkenswert elusiv."
                    ]
                },
                {
                    "text": "Schwer zu fassen oder zu behalten.",
                    "examples": [
                        "Ein klarer Konsens bleibt weiterhin elusiv."
                    ]
                }
            ],
            "subtext": "sehr elusiv / bleibt elusiv / ein elusives Ziel / eine elusive Qualität",
            "comparative": "elusiver",
            "superlative": "am elusivsten",
            "synonyms": ["flüchtig", "schwer fassbar"],
            "opposite": "erreichbar"
        },
        {
            "word": "esoterisch",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🗝️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Nur für einen kleinen, eingeweihten Kreis verständlich oder bestimmt.",
                    "examples": [
                        "Die Debatte wurde für ein allgemeines Publikum zu esoterisch."
                    ]
                }
            ],
            "subtext": "sehr esoterisch / ziemlich esoterisch / tief esoterisch",
            "comparative": "esoterischer",
            "superlative": "am esoterischsten",
            "synonyms": ["arkan", "geheimnisvoll"],
            "opposite": "exoterisch"
        },
        {
            "word": "trügerisch",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "❌",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Auf falschen Schlussfolgerungen beruhend; irreführend.",
                    "examples": [
                        "Ihr Argument ist im Kern trügerisch."
                    ]
                }
            ],
            "subtext": "tief trügerisch / logisch trügerisch / eine trügerische Behauptung",
            "comparative": "trügerischer",
            "superlative": "am trügerischsten",
            "synonyms": ["falsch", "irrigerweise"],
            "opposite": "fundiert"
        },
        {
            "word": "unveränderlich",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧱",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Unfähig, geändert zu werden; fest und dauerhaft.",
                    "examples": [
                        "Sprache ist nicht unveränderlich – sie entwickelt sich ständig weiter."
                    ]
                }
            ],
            "subtext": "völlig unveränderlich / nicht unveränderlich / eine unveränderliche Tatsache",
            "comparative": "unveränderlicher",
            "superlative": "am unveränderlichsten",
            "synonyms": ["fest", "permanent"],
            "opposite": "veränderlich"
        },
        {
            "word": "unparteiisch",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Begünstigt keine Seite gegenüber einer anderen; gerecht.",
                    "examples": [
                        "Das Gremium muss in seinem Urteil völlig unparteiisch sein."
                    ]
                }
            ],
            "subtext": "völlig unparteiisch / streng unparteiisch / ein unparteiischer Beobachter",
            "comparative": "unparteiischer",
            "superlative": "am unparteiischsten",
            "synonyms": ["gerecht", "neutral"],
            "opposite": "parteiisch"
        },
        {
            "word": "inzidentell",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🍃",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Geschieht als unwichtiger Teil von etwas anderem.",
                    "examples": [
                        "Die Ersparnis war eher inzidentell als das Hauptziel."
                    ]
                }
            ],
            "subtext": "rein inzidentell / bloß inzidentell / inzidentell zu",
            "comparative": "inzidenteller",
            "superlative": "am inzidentellsten",
            "synonyms": ["nebensächlich", "geringfügig"],
            "opposite": "zentral"
        },
        {
            "word": "inhärent",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Existiert in etwas als natürliche und dauerhafte Eigenschaft.",
                    "examples": [
                        "Das System ist inhärent fehlerhaft und muss überarbeitet werden."
                    ]
                }
            ],
            "subtext": "inhärent fehlerhaft / inhärent voreingenommen / inhärent problematisch",
            "comparative": "inhärenter",
            "superlative": "am inhärentesten",
            "synonyms": ["angeboren", "intrinsisch"],
            "opposite": "extrinsisch"
        },
        {
            "word": "unnachahmlich",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "emoji": "🌟",
            "form": "adjective",
            "definitions": [
                {
                    "text": "So gut oder ungewöhnlich, dass es unmöglich zu kopieren ist.",
                    "examples": [
                        "Sie hat eine unnachahmliche Art, komplexe Ideen klar zu machen."
                    ]
                }
            ],
            "subtext": "wahrhaft unnachahmlich / absolut unnachahmlich / ein unnachahmlicher Stil",
            "comparative": "unnachahmlicher",
            "superlative": "am unnachahmlichsten",
            "synonyms": ["einzigartig", "unvergleichlich"],
            "opposite": "gewöhnlich"
        },
        {
            "word": "insidiös",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🐍",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Schreitet allmählich auf schädliche Weise voran.",
                    "examples": [
                        "Die Auswirkungen von langfristigem Stress können insidiös sein."
                    ]
                }
            ],
            "subtext": "sehr insidiös / tief insidiös / ein insidiöser Prozess",
            "comparative": "insidiöser",
            "superlative": "am insidiösesten",
            "synonyms": ["hinterhältig", "subtil"],
            "opposite": "direkt"
        },
        {
            "word": "unvereinbar",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚫",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Kann nicht in Einklang gebracht oder kompatibel gemacht werden.",
                    "examples": [
                        "Die beiden Positionen sind grundlegend unvereinbar."
                    ]
                }
            ],
            "subtext": "grundlegend unvereinbar / völlig unvereinbar / unvereinbare Differenzen",
            "comparative": "unvereinbarer",
            "superlative": "am unvereinbarsten",
            "synonyms": ["inkompatibel", "konfliktär"],
            "opposite": "vereinbar"
        },
        {
            "word": "liminal",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🚪",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Bezieht sich auf einen Übergangs- oder Zwischenzustand.",
                    "examples": [
                        "Die Monate nach der Entlassung sind eine wahrlich liminale Zeit."
                    ]
                }
            ],
            "subtext": "ein liminaler Raum / eine liminale Phase / tief liminal",
            "comparative": "liminaler",
            "superlative": "am liminalsten",
            "synonyms": ["übergangsweise", "schwellenhaft"]
        },
        {
            "word": "vielfältig",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Zahlreich und von verschiedenen Arten.",
                    "examples": [
                        "Die Auswirkungen dieser Entscheidung sind vielfältig."
                    ]
                }
            ],
            "subtext": "vielfältige Auswirkungen / vielfältige Probleme / vielfältige Herausforderungen",
            "comparative": "vielfältiger",
            "superlative": "am vielfältigsten",
            "synonyms": ["zahlreich", "divers"],
            "opposite": "einzig"
        },
        {
            "word": "nebulös",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "☁️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Unklar; vage und schlecht definiert.",
                    "examples": [
                        "Das Konzept bleibt im Bericht etwas nebulös."
                    ]
                }
            ],
            "subtext": "sehr nebulös / ziemlich nebulös / gefährlich nebulös",
            "comparative": "nebulöser",
            "superlative": "am nebulösesten",
            "synonyms": ["vage", "diffus"],
            "opposite": "deutlich"
        },
        {
            "word": "normativ",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "📏",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Bezieht sich auf eine Norm; schreibt vor, was sein sollte.",
                    "examples": [
                        "Dies ist eine normative Aussage, keine deskriptive."
                    ]
                }
            ],
            "subtext": "ein normativer Rahmen / normative Annahme / normative Aussage",
            "comparative": "normativer",
            "superlative": "am normativsten",
            "synonyms": ["präskriptiv", "standardgebend"],
            "opposite": "deskriptiv"
        },
        {
            "word": "nuanciert",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌗",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Zeigt feine Unterschiede; nicht einfach oder extrem.",
                    "examples": [
                        "Der Bericht gibt eine sehr nuancierte Darstellung des Themas."
                    ]
                }
            ],
            "subtext": "sehr nuanciert / höchst nuanciert / ein nuanciertes Argument",
            "comparative": "nuancierter",
            "superlative": "am nuanciertesten",
            "synonyms": ["subtil", "verfeinert"],
            "opposite": "grob"
        },
        {
            "word": "indirekt",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "↗️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Nicht direkt; umständlich; nicht gerade oder offen.",
                    "examples": [
                        "Er gab eine indirekte Antwort, die niemanden zufriedenstellte."
                    ]
                }
            ],
            "subtext": "etwas indirekt / sehr indirekt / eine indirekte Anspielung",
            "comparative": "indirekter",
            "superlative": "am indirektesten",
            "synonyms": ["umwegig", "vermittelt"],
            "opposite": "direkt"
        },
        {
            "word": "opak",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌑",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Nicht transparent; schwer zu verstehen.",
                    "examples": [
                        "Die Begründung der Regierung war völlig opak."
                    ]
                }
            ],
            "subtext": "sehr opak / völlig opak / tief opak",
            "comparative": "opaker",
            "superlative": "am opakesten",
            "synonyms": ["unklar", "undurchsichtig"],
            "opposite": "transparent"
        },
        {
            "word": "scheinbar",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🎭",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Scheint etwas zu sein; als real oder wahr ausgegeben.",
                    "examples": [
                        "Das scheinbare Ziel war Effizienz; das wahre war Kontrolle."
                    ]
                }
            ],
            "subtext": "das scheinbare Ziel / scheinbar korrekt / scheinbare Motivation",
            "comparative": "scheinbarer",
            "superlative": "am scheinbarsten",
            "synonyms": ["vordergründig", "vermeintlich"],
            "opposite": "echt"
        },
        {
            "word": "paradox",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Widerspricht sich selbst, enthält aber eine Wahrheit.",
                    "examples": [
                        "Es ist paradox, dass man durch weniger Tun manchmal mehr erreichen kann."
                    ]
                }
            ],
            "subtext": "scheinbar paradox / tief paradox / eine paradoxe Situation",
            "comparative": "paradoxer",
            "superlative": "am paradoxesten",
            "synonyms": ["widersprüchlich", "ironisch"],
            "opposite": "kohärent"
        },
        {
            "word": "durchdringend",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌊",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Überall vorhanden; verbreitet sich weitläufig.",
                    "examples": [
                        "Eine Kultur der Überarbeitung ist in diesem Sektor durchdringend."
                    ]
                }
            ],
            "subtext": "sehr durchdringend / zunehmend durchdringend / durchdringend",
            "comparative": "durchdringender",
            "superlative": "am durchdringendsten",
            "synonyms": ["allgegenwärtig", "prävalent"],
            "opposite": "selten"
        },
        {
            "word": "polarisierend",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🧲",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Bringt Menschen dazu, gegensätzliche Positionen einzunehmen.",
                    "examples": [
                        "Der Vorschlag wirkte innerhalb der Organisation tief polarisierend."
                    ]
                }
            ],
            "subtext": "tief polarisierend / äußerst polarisierend / höchst polarisierend",
            "comparative": "polarisierender",
            "superlative": "am polarisierendsten",
            "synonyms": ["spaltend", "konfliktträchtig"],
            "opposite": "einigend"
        },
        {
            "word": "prekär",
            "level": "proficiency",
            "theme": "ontology_existence_C2",
            "emoji": "🧗",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Nicht sicher oder gewiss; vom Zufall abhängig.",
                    "examples": [
                        "Sie verließ ein prekäres Freelancer-Leben für eine feste Stelle."
                    ]
                }
            ],
            "subtext": "sehr prekär / tief prekär / eine prekäre Lage",
            "comparative": "prekärer",
            "superlative": "am prekärsten",
            "synonyms": ["instabil", "riskant"],
            "opposite": "stabil"
        },
        {
            "word": "präskriptiv",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Schreibt vor, was getan werden soll; legt Regeln fest.",
                    "examples": [
                        "Die Richtlinien sind zu präskriptiv, um Kreativität zuzulassen."
                    ]
                }
            ],
            "subtext": "sehr präskriptiv / höchst präskriptiv / übermäßig präskriptiv",
            "comparative": "präskriptiver",
            "superlative": "am präskriptivsten",
            "synonyms": ["diktatorisch", "starr"],
            "opposite": "deskriptiv"
        },
        {
            "word": "langwierig",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Dauert länger als erwartet.",
                    "examples": [
                        "Der Rechtsstreit war lang und langwierig."
                    ]
                }
            ],
            "subtext": "sehr langwierig / äußerst langwierig / ein langwieriger Prozess",
            "comparative": "langwieriger",
            "superlative": "am langwierigsten",
            "synonyms": ["ausgedehnt", "lange dauernd"],
            "opposite": "kurz"
        },
        {
            "word": "reduktionistisch",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📉",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Vereinfacht etwas Komplexes übermäßig.",
                    "examples": [
                        "Es wäre reduktionistisch, alles nur mit Gier zu erklären."
                    ]
                }
            ],
            "subtext": "sehr reduktionistisch / tief reduktionistisch / eine reduktionistische Analyse",
            "comparative": "reduktionistischer",
            "superlative": "am reduktionistischsten",
            "synonyms": ["vereinfachend", "minimalistisch"],
            "opposite": "komplex"
        },
        {
            "word": "seminal",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌱",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Sehr wichtig und einflussreich; bahnbrechend.",
                    "examples": [
                        "Dies war ein seminaler Moment in der Geschichte des Unternehmens."
                    ]
                }
            ],
            "subtext": "wahrhaft seminal / ein seminales Werk / eine seminale Figur",
            "comparative": "seminaler",
            "superlative": "am seminalsten",
            "synonyms": ["einflussreich", "wegweisend"],
            "opposite": "unbedeutend"
        },
        {
            "word": "speziös",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🤥",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Scheint korrekt zu sein, ist aber in Wirklichkeit falsch; irreführend.",
                    "examples": [
                        "Das Argument ist vordergründig attraktiv, aber letztlich speziös."
                    ]
                }
            ],
            "subtext": "sehr speziös / eine speziöse Behauptung / grundlegend speziös",
            "comparative": "speziöser",
            "superlative": "am speziösten",
            "synonyms": ["irreführend", "illusorisch"],
            "opposite": "stichhaltig"
        },
        {
            "word": "spurios",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🤡",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Nicht echt; auf einer falschen Argumentation beruhend.",
                    "examples": [
                        "Dies ist ein spurioser Vergleich, der die Debatte verzerrt."
                    ]
                }
            ],
            "subtext": "völlig spurios / gänzlich spurios / ein spurioses Argument",
            "comparative": "spurioser",
            "superlative": "am spuriosesten",
            "synonyms": ["falsch", "fiktiv"],
            "opposite": "authentisch"
        },
        {
            "word": "subversiv",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "💣",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Bestimmt, ein etabliertes System zu untergraben.",
                    "examples": [
                        "Das Kunstwerk wurde von den Behörden als subversiv eingestuft."
                    ]
                }
            ],
            "subtext": "diskret subversiv / tief subversiv / offen subversiv",
            "comparative": "subversiver",
            "superlative": "am subversivsten",
            "synonyms": ["rebellisch", "disruptiv"],
            "opposite": "konformistisch"
        },
        {
            "word": "implizit",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "🤫",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Verstanden oder vereinbart, ohne ausgesprochen zu werden.",
                    "examples": [
                        "Es gab ein implizites Verständnis zwischen ihnen."
                    ]
                }
            ],
            "subtext": "eine implizite Vereinbarung / implizite Zustimmung / implizit bleiben",
            "comparative": "impliziter",
            "superlative": "am implizitesten",
            "synonyms": ["stillschweigend", "mitverstanden"],
            "opposite": "explizit"
        },
        {
            "word": "schwach",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🕸️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Sehr schwach oder gering; nicht fest etabliert.",
                    "examples": [
                        "Die Verbindung zwischen den beiden Ereignissen ist sehr schwach."
                    ]
                }
            ],
            "subtext": "sehr schwach / ziemlich schwach / eine schwache Verbindung",
            "comparative": "schwächer",
            "superlative": "am schwächsten",
            "synonyms": ["zerbrechlich", "fein"],
            "opposite": "stark"
        },
        {
            "word": "transitorisch",
            "level": "proficiency",
            "theme": "mortality_time_C2",
            "emoji": "🌅",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Nicht von Dauer; schnell vergehend.",
                    "examples": [
                        "Die Vorteile waren transitorisch und verschwanden innerhalb von Monaten."
                    ]
                }
            ],
            "subtext": "sehr transitorisch / bloß transitorisch / ein transitorischer Effekt",
            "comparative": "transitorischer",
            "superlative": "am transitorischsten",
            "synonyms": ["vorübergehend", "flüchtig"],
            "opposite": "permanent"
        },
        {
            "word": "ubiquitär",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Überall auftretend; sehr verbreitet.",
                    "examples": [
                        "Smartphones sind im täglichen Leben ubiquitär geworden."
                    ]
                }
            ],
            "subtext": "wahrhaft ubiquitär / scheinbar ubiquitär / ubiquitär werden",
            "comparative": "ubiquitärer",
            "superlative": "am ubiquitärsten",
            "synonyms": ["allgegenwärtig", "weitverbreitet"],
            "opposite": "selten"
        },
        {
            "word": "unmissverständlich",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "📢",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Lässt keine Zweifel offen; völlig klar.",
                    "examples": [
                        "Seine Unterstützung für die Entscheidung war unmissverständlich."
                    ]
                }
            ],
            "subtext": "völlig unmissverständlich / absolut unmissverständlich / eine unmissverständliche Ablehnung",
            "comparative": "unmissverständlicher",
            "superlative": "am unmissverständlichsten",
            "synonyms": ["eindeutig", "klar"],
            "opposite": "ambivalent"
        },
        {
            "word": "beispiellos",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🚀",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Noch nie zuvor geschehen.",
                    "examples": [
                        "Das Unternehmen erreichte in fünf Jahren ein beispielloses Wachstum."
                    ]
                }
            ],
            "subtext": "wahrhaft beispiellos / völlig beispiellos / ein beispielloses Ereignis",
            "comparative": "beispielloser",
            "superlative": "am beispiellosesten",
            "synonyms": ["einzigartig", "bahnbrechend"],
            "opposite": "üblich"
        },
        {
            "word": "unhaltbar",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🏗️",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Kann nicht aufrechterhalten oder verteidigt werden.",
                    "examples": [
                        "Seine Position wurde völlig unhaltbar."
                    ]
                }
            ],
            "subtext": "völlig unhaltbar / gänzlich unhaltbar / ein unhaltbares Argument",
            "comparative": "unhaltbarer",
            "superlative": "am unhaltbarsten",
            "synonyms": ["unvertretbar", "instabil"],
            "opposite": "vertretbar"
        },
        {
            "word": "schwerfällig",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📦",
            "form": "adjective",
            "definitions": [
                {
                    "text": "Schwer zu handhaben oder zu verwalten aufgrund von Größe oder Komplexität.",
                    "examples": [
                        "Der Prozess wurde schwerfällig und ineffizient."
                    ]
                }
            ],
            "subtext": "sehr schwerfällig / ziemlich schwerfällig / ein schwerfälliges System",
            "comparative": "schwerfälliger",
            "superlative": "am schwerfälligsten",
            "synonyms": ["behäbig", "mühsam"],
            "opposite": "handlich"
        }
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
