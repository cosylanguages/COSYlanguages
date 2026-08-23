// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "reifizieren",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🗿",
        "subtext": "ein Konzept reifizieren / den Markt reifizieren / Reifizierung der Arbeit",
        "form": "verb",
        "definitions": [
            {
                "text": "Ein abstraktes Konzept so behandeln, als wäre es eine konkrete, reale Sache.",
                "examples": [
                    "Ökonomische Modelle reifizieren Marktkräfte und lassen sie natürlich und unvermeidlich erscheinen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reifizierte",
        "v3": "reifiziert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_001",
        "transcription": ""
    },
    {
        "word": "sublimieren",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌫️",
        "subtext": "Verlangen sublimieren / Sublimierung von Impulsen / umleiten in",
        "form": "verb",
        "definitions": [
            {
                "text": "Einen Wunsch oder Impuls in eine gesellschaftlich akzeptable Form umleiten.",
                "examples": [
                    "Er sublimierte seine politische Frustration in akademische Forschung."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sublimierte",
        "v3": "sublimiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_002",
        "transcription": ""
    },
    {
        "word": "basieren auf",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏗️",
        "subtext": "basieren auf / einen Anspruch begründen / basierend auf der Annahme",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine Aussage oder Handlung auf eine bestimmte Bedingung stützen; behaupten.",
                "examples": [
                    "Ihr Argument basiert auf einem Maße an institutionellem Vertrauen, das nicht mehr existiert."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "basierte auf",
        "v3": "basiert auf",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_001",
        "transcription": ""
    },
    {
        "word": "instanziieren",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "subtext": "ein Konzept instanziieren / in der Praxis instanziieren / konkrete Instanziierung",
        "form": "verb",
        "definitions": [
            {
                "text": "Ein abstraktes Konzept in einem konkreten Beispiel darstellen.",
                "examples": [
                    "Die Fallstudie instanziiert die Theorie der regulatorischen Vereinnahmung."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "instanziierte",
        "v3": "instanziiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_003",
        "transcription": ""
    },
    {
        "word": "negieren",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🚫",
        "subtext": "ein Argument negieren / ein Recht negieren / dialektische Negation",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas unwirksam machen oder seine Wirkung umkehren.",
                "examples": [
                    "Die neue Klausel negiert effektiv das Recht, das sie zu gewähren scheint."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "negierte",
        "v3": "negiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_001",
        "transcription": ""
    },
    {
        "word": "transzendieren",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌌",
        "subtext": "Grenzen transzendieren / Kategorien transzendieren / das Persönliche transzendieren",
        "form": "verb",
        "definitions": [
            {
                "text": "Über die Grenzen von etwas hinausgehen.",
                "examples": [
                    "Große Kunst transzendiert den historischen Moment ihrer Entstehung."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "transzendierte",
        "v3": "transzendiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_004",
        "transcription": ""
    },
    {
        "word": "vermitteln",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "⚖️",
        "subtext": "vermitteln zwischen / einen Konflikt vermitteln / sozial vermittelt",
        "form": "verb",
        "definitions": [
            {
                "text": "Als Vermittler zwischen zwei Dingen oder Personen fungieren; eine Beziehung modifizieren.",
                "examples": [
                    "Sprache vermittelt unsere Beziehung zur Realität."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "vermittelte",
        "v3": "vermittelt",
        "group": "eln",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_002",
        "transcription": ""
    },
    {
        "word": "elidieren",
        "level": "proficiency",
        "theme": "language",
        "emoji": "✂️",
        "subtext": "eine Unterscheidung elidieren / den Unterschied elidieren / bewusst elidiert",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas verschmelzen oder auslassen, insbesondere eine entscheidende Unterscheidung.",
                "examples": [
                    "Der Bericht elidiert den Unterschied zwischen Armut und Entbehrung."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "elidierte",
        "v3": "elidiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_005",
        "transcription": ""
    },
    {
        "word": "verschleiern",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🌫️",
        "subtext": "die Wahrheit verschleiern / bewusste Verschleierung / mit Jargon verschleiern",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas absichtlich unklar oder schwer verständlich machen.",
                "examples": [
                    "Die Fachsprache wurde verwendet, um eher zu verschleiern als zu klären."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "verschleierte",
        "v3": "verschleiert",
        "group": "ern",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_003",
        "transcription": ""
    },
    {
        "word": "verschmelzen",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔀",
        "subtext": "Themen verschmelzen / konfundieren mit / gefährlich verschmelzen",
        "form": "verb",
        "definitions": [
            {
                "text": "Zwei verschiedene Dinge so kombinieren, als wären sie dasselbe.",
                "examples": [
                    "Die Debatte verschmilzt Einwanderung mit illegaler Migration."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "verschmolz",
        "v3": "verschmolzen",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_006",
        "transcription": ""
    },
    {
        "word": "sich berufen auf",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📜",
        "subtext": "sich auf ein Recht berufen / einen Präzedenzfall anführen",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas heranziehen oder zitieren, um ein Argument zu stützen.",
                "examples": [
                    "Sie berief sich auf das Recht auf freie Meinungsäußerung, um die Veröffentlichung zu verteidigen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "berief sich auf",
        "v3": "berufen auf",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_002",
        "transcription": ""
    },
    {
        "word": "in den Vordergrund stellen",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔦",
        "subtext": "ein Thema in den Vordergrund stellen / eine Perspektive betonen",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas zum prominentesten oder wichtigsten Element machen.",
                "examples": [
                    "Der Film stellt Rasse als zentrale organisierende Linse in den Vordergrund."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stellte in den Vordergrund",
        "v3": "in den Vordergrund gestellt",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_004",
        "transcription": ""
    },
    {
        "word": "rekuperieren",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧽",
        "subtext": "eine Bewegung rekuperieren / rekuperiert werden durch / kulturelle Rekuperation",
        "form": "verb",
        "definitions": [
            {
                "text": "Subversive Ideen innerhalb eines dominanten Systems absorbieren und neutralisieren.",
                "examples": [
                    "Die Modeindustrie rekuperierte die rebellische Ästhetik des Punk."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rekuperierte",
        "v3": "rekuperiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_003",
        "transcription": ""
    },
    {
        "word": "destabilisieren",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌪️",
        "subtext": "ein Regime destabilisieren / Annahmen destabilisieren / bewusst destabilisieren",
        "form": "verb",
        "definitions": [
            {
                "text": "Die Stabilität eines Systems, Konzepts oder einer Position untergraben.",
                "examples": [
                    "Das Argument destabilisiert die zentrale Prämisse des Liberalismus."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "destabilisierte",
        "v3": "destabilisiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_004",
        "transcription": ""
    },
    {
        "word": "kommodifizieren",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏷️",
        "subtext": "Arbeit kommodifizieren / Pflege kommodifizieren / Kommodifizierung der Aufmerksamkeit",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas, das kein Produkt ist, als kommerzielle Ware behandeln.",
                "examples": [
                    "Die Wellness-Industrie kommodifiziert psychische Gesundheit und Selbstfürsorge."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "kommodifizierte",
        "v3": "kommodifiziert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_005",
        "transcription": ""
    },
    {
        "word": "instrumentalisieren",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛠️",
        "subtext": "Menschen instrumentalisieren / eine Idee instrumentalisieren / zum Instrument degradieren",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas als bloßes Werkzeug oder Mittel zum Zweck behandeln.",
                "examples": [
                    "Kritiker argumentierten, dass die Politik die Gesundheit der Arbeiter instrumentalisierte."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "instrumentalisierte",
        "v3": "instrumentalisiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_006",
        "transcription": ""
    },
    {
        "word": "valorisieren",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🎖️",
        "subtext": "Arbeit valorisieren / ein Konzept valorisieren / kulturell valorisiert werden",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas einen Wert beimessen, insbesondere in einem kulturellen oder ideologischen Sinne.",
                "examples": [
                    "Die moderne Kultur valorisiert Produktivität auf Kosten der Ruhe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "valorisierte",
        "v3": "valorisiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_007",
        "transcription": ""
    },
    {
        "word": "fetischisieren",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧿",
        "subtext": "eine Idee fetischisieren / Warenfetischismus / Wachstum fetischisieren",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine übermäßige Verehrung für etwas haben; oder in der marxistischen Theorie, sozialen Beziehungen fälschlicherweise Objekten zuschreiben.",
                "examples": [
                    "Die Startup-Kultur fetischisiert Disruption als Selbstzweck."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fetischisierte",
        "v3": "fetischisiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_008",
        "transcription": ""
    },
    {
        "word": "hegemonisieren",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👑",
        "subtext": "den Diskurs hegemonisieren / hegemonisierende Tendenz / Resistenz gegen Hegemonisierung",
        "form": "verb",
        "definitions": [
            {
                "text": "Dominanz durch kulturelle oder ideologische Mittel etablieren oder ausweiten.",
                "examples": [
                    "Eine einzelne Plattform kann den öffentlichen Diskurs nicht ohne Widerstand hegemonisieren.",
                    "Ein theoretischer Rahmen ist dazu gekommen, das Feld zu hegemonisieren."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hegemonisierte",
        "v3": "hegemonisiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_009",
        "transcription": ""
    },
    {
        "word": "entfremden",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⛓️",
        "subtext": "jemanden entfremden / sich entfremdet fühlen / marxistische Entfremdung",
        "form": "verb",
        "definitions": [
            {
                "text": "In der marxistischen Theorie: Arbeiter vom Produkt ihrer Arbeit trennen; allgemeiner: Entfremdung verursachen.",
                "examples": [
                    "Industrielle Arbeitsbedingungen entfremden die Arbeiter von jedem Gefühl für ihr Handwerk."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "entfremdete",
        "v3": "entfremdet",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_010",
        "transcription": ""
    },
    {
        "word": "demarkieren",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "📏",
        "subtext": "eine Grenze demarkieren / klar abgrenzen / Demarkationslinie",
        "form": "verb",
        "definitions": [
            {
                "text": "Die Grenze oder die Limits von etwas festlegen.",
                "examples": [
                    "Das Gesetz versucht, die Linie zwischen Regulierung und Zensur zu demarkieren."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "demarkierte",
        "v3": "demarkiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_005",
        "transcription": ""
    },
    {
        "word": "eingrenzen",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🚧",
        "subtext": "den Umfang eingrenzen / ein Konzept delimitieren / sorgfältig eingegrenzt",
        "form": "verb",
        "definitions": [
            {
                "text": "Die Grenzen von etwas bestimmen.",
                "examples": [
                    "Die Studie grenzt ihren Umfang bewusst ein, um Übergeneralisierungen zu vermeiden."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "grenzte ein",
        "v3": "eingrenzt",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_006",
        "transcription": ""
    },
    {
        "word": "entgegenstehen",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "militieren gegen / stark entgegenstehen / für etwas sprechen",
        "form": "verb",
        "definitions": [
            {
                "text": "Ein mächtiger Faktor sein, der gegen etwas arbeitet.",
                "examples": [
                    "Die Komplexität des Systems steht einer effektiven Reform entgegen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "stand entgegen",
        "v3": "entgegengestanden",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_011",
        "transcription": ""
    },
    {
        "word": "beeinträchtigen",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧪",
        "subtext": "einen Anspruch entkräften / ein Argument beeinträchtigen / rechtlich entwertet",
        "form": "verb",
        "definitions": [
            {
                "text": "Die Qualität oder Wirksamkeit von etwas verschlechtern; ungültig machen.",
                "examples": [
                    "Der methodische Fehler beeinträchtigt die Schlussfolgerungen der gesamten Studie."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "beeinträchtigte",
        "v3": "beeinträchtigt",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_007",
        "transcription": ""
    },
    {
        "word": "bestreiten",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🗣️",
        "subtext": "schwer zu bestreiten / niemand kann leugnen / einen Anspruch bestreiten",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas leugnen oder widersprechen.",
                "examples": [
                    "Es ist schwierig, die vom Ausschuss vorgelegten Beweise zu bestreiten."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bestritt",
        "v3": "bestritten",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_008",
        "transcription": ""
    },
    {
        "word": "aufheben",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🔨",
        "subtext": "eine Vereinbarung aufheben / einen Vertrag abrogieren / einseitige Aufhebung",
        "form": "verb",
        "definitions": [
            {
                "text": "Ein Gesetz oder eine Vereinbarung formell widerrufen oder abschaffen.",
                "examples": [
                    "Die Regierung versuchte, das Handelsabkommen einseitig aufzuheben."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "hob auf",
        "v3": "aufgehoben",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_012",
        "transcription": ""
    },
    {
        "word": "dekonstruieren",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🏚️",
        "subtext": "ein Argument dekonstruieren / einen Text dekonstruieren / Derrida'sche Dekonstruktion",
        "form": "verb",
        "definitions": [
            {
                "text": "Die Annahmen und Widersprüche innerhalb eines Textes oder Arguments analysieren.",
                "examples": [
                    "Sie dekonstruierte das Grundsatzdokument, um dessen ideologische Annahmen offenzulegen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dekonstruierte",
        "v3": "dekonstruiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_009",
        "transcription": ""
    },
    {
        "word": "problematisieren",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❓",
        "subtext": "ein Konzept problematisieren / dem Drang zu problematisieren widerstehen",
        "form": "verb",
        "definitions": [
            {
                "text": "Die problematischen Aspekte eines Konzepts oder einer Praxis identifizieren und artikulieren.",
                "examples": [
                    "Der Vortrag problematisiert den Begriff der individuellen Wahl in der Konsumgesellschaft."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "problematisierte",
        "v3": "problematisiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_007",
        "transcription": ""
    },
    {
        "word": "analysieren",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "📦",
        "subtext": "eine Annahme entpacken / Auswirkungen analysieren / sorgfältig entfalten",
        "form": "verb",
        "definitions": [
            {
                "text": "Die Komponenten und Auswirkungen von etwas aufschlüsseln und untersuchen.",
                "examples": [
                    "Bevor wir fortfahren, lassen Sie uns analysieren, was wir hier unter Rechenschaftspflicht verstehen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "analysierte",
        "v3": "analysiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_010",
        "transcription": ""
    },
    {
        "word": "ausschließen",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🚪",
        "subtext": "eine Option ausschließen / die Debatte verhindern / die Möglichkeit ausschließen",
        "form": "verb",
        "definitions": [
            {
                "text": "Verhindern, dass eine Möglichkeit in Betracht gezogen wird; verunmöglichen.",
                "examples": [
                    "Die Formulierung der Frage schließt die interessantesten Antworten aus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "schloss aus",
        "v3": "ausgeschlossen",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_011",
        "transcription": ""
    },
    {
        "word": "dialektisieren",
        "level": "proficiency",
        "theme": "language",
        "emoji": "☯️",
        "subtext": "einen Binärwert dialektisieren / dialektische Methode / These und Antithese",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich etwas durch die Methode des dialektischen Denkens nähern.",
                "examples": [
                    "Er dialektisiert den Gegensatz zwischen Freiheit und Sicherheit."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dialektisierte",
        "v3": "dialektisiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_008",
        "transcription": ""
    },
    {
        "word": "verstoßen gegen",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📜",
        "subtext": "gegen ein Gesetz verstoßen / gegen Vorschriften verstoßen",
        "form": "verb",
        "definitions": [
            {
                "text": "Gegen eine Regel, ein Gesetz oder eine Vereinbarung handeln.",
                "examples": [
                    "Es wurde festgestellt, dass die Entscheidung gegen das EU-Wettbewerbsrecht verstößt."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "verstieß gegen",
        "v3": "verstoßen gegen",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_013",
        "transcription": ""
    },
    {
        "word": "subsumieren",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📂",
        "subtext": "subsumieren unter / subsumiert werden durch / in eine Kategorie subsumieren",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas in eine größere Kategorie einschließen oder darin absorbieren.",
                "examples": [
                    "Seine Theorie subsumiert alle bisherigen Darstellungen in einem einzigen Rahmen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "subsumierte",
        "v3": "subsumiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_009",
        "transcription": ""
    },
    {
        "word": "akzentuieren",
        "level": "proficiency",
        "theme": "language",
        "emoji": "💡",
        "subtext": "einen Unterschied akzentuieren / das Positive betonen / akzentuiert werden durch",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas prominenter oder auffälliger machen.",
                "examples": [
                    "Die Krise akzentuierte die bestehenden Ungleichheiten in der Belegschaft."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "akzentuierte",
        "v3": "akzentuiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_010",
        "transcription": ""
    },
    {
        "word": "einwilligen",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🤝",
        "subtext": "einwilligen in / widerwillige Duldung",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas ohne Einspruch akzeptieren.",
                "examples": [
                    "Er willigte in die Entscheidung des Vorstands ein, trotz starker Vorbehalte."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "willigte ein",
        "v3": "eingewilligt",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_014",
        "transcription": ""
    },
    {
        "word": "lindern",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🩹",
        "subtext": "Leiden lindern / Armut lindern / Druck lindern",
        "form": "verb",
        "definitions": [
            {
                "text": "Ein Problem weniger schwerwiegend machen.",
                "examples": [
                    "Die neue Politik trug wenig dazu bei, die Wohnungsnot zu lindern."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "linderte",
        "v3": "gelindert",
        "group": "ern",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_015",
        "transcription": ""
    },
    {
        "word": "umgehen",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🔄",
        "subtext": "Regeln umgehen / ein Problem umgehen / Kontrollen umgehen",
        "form": "verb",
        "definitions": [
            {
                "text": "Einen Weg finden, eine Regel oder Schwierigkeit zu vermeiden.",
                "examples": [
                    "Sie fand einen legalen Weg, das bürokratische Hindernis zu umgehen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "umging",
        "v3": "umgangen",
        "group": "en",
        "auxiliary": "sein",
        "lang": "de",
        "id": "de_proficiency_social_016",
        "transcription": ""
    },
    {
        "word": "bestätigen",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "✅",
        "subtext": "einen Anspruch korroborieren / Beweise bestätigen",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine Aussage durch Beweise bestätigen oder stützen.",
                "examples": [
                    "Die Aussage des Zeugen bestätigte die urkundlichen Beweise vollumfänglich."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "bestätigte",
        "v3": "bestätigt",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_012",
        "transcription": ""
    },
    {
        "word": "verbreiten",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "📢",
        "subtext": "Informationen verbreiten / Ergebnisse disseminieren / weit verbreitet",
        "form": "verb",
        "definitions": [
            {
                "text": "Informationen oder Ideen weitflächig ausstreuen.",
                "examples": [
                    "Die Ergebnisse wurden über internationale Forschungsnetzwerke verbreitet."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "verbreitete",
        "v3": "verbreitet",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_013",
        "transcription": ""
    },
    {
        "word": "zusammenfassen",
        "level": "proficiency",
        "theme": "language",
        "emoji": "💊",
        "subtext": "eine Idee kapseln / das Problem auf den Punkt bringen",
        "form": "verb",
        "definitions": [
            {
                "text": "Die wesentlichen Merkmale von etwas prägnant ausdrücken.",
                "examples": [
                    "Der Satz fasst das Paradoxon der modernen Arbeit perfekt zusammen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fasste zusammen",
        "v3": "zusammengefasst",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_011",
        "transcription": ""
    },
    {
        "word": "hervorrufen",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌱",
        "subtext": "Vertrauen erzeugen / Konflikte hervorrufen / Unmut erzeugen",
        "form": "verb",
        "definitions": [
            {
                "text": "Ein Gefühl oder eine Situation verursachen oder entstehen lassen.",
                "examples": [
                    "Die neue Politik rief erheblichen Unmut unter den Mitarbeitern hervor."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rief hervor",
        "v3": "hervorgerufen",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_017",
        "transcription": ""
    },
    {
        "word": "verschlimmern",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📈",
        "subtext": "ein Problem verschlimmern / Spannungen exazerbieren / Ungleichheit verstärken",
        "form": "verb",
        "definitions": [
            {
                "text": "Ein Problem oder eine Situation verschlechtern.",
                "examples": [
                    "Der wirtschaftliche Abschwung verschlimmerte die bestehenden sozialen Ungleichheiten."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "verschlimmerte",
        "v3": "verschlimmert",
        "group": "ern",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_018",
        "transcription": ""
    },
    {
        "word": "exemplifizieren",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌟",
        "subtext": "etwas beispielhaft darstellen / das Problem verdeutlichen",
        "form": "verb",
        "definitions": [
            {
                "text": "Ein perfektes Beispiel für etwas sein.",
                "examples": [
                    "Ihre Karriere exemplifiziert die Herausforderungen, mit denen Frauen in Führungspositionen konfrontiert sind."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "exemplifizierte",
        "v3": "exemplifiziert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_012",
        "transcription": ""
    },
    {
        "word": "behindern",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛑",
        "subtext": "den Fortschritt behindern / das Wachstum hemmen / jemanden daran hindern",
        "form": "verb",
        "definitions": [
            {
                "text": "Den Fortgang von etwas verzögern oder verhindern.",
                "examples": [
                    "Übermäßige Regulierung kann Innovationen in neuen Branchen behindern."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "behinderte",
        "v3": "behindert",
        "group": "ern",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_019",
        "transcription": ""
    },
    {
        "word": "mildern",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "subtext": "Risiken mindern / die Auswirkungen mildern / entgegenwirken",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine schädliche Wirkung weniger schwerwiegend machen.",
                "examples": [
                    "Gute Kommunikation kann helfen, die Auswirkungen von Veränderungen zu mildern."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "milderte",
        "v3": "gemildert",
        "group": "ern",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_020",
        "transcription": ""
    },
    {
        "word": "verpflichten",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📜",
        "subtext": "verpflichtet sein / jemanden verpflichten zu / sich verpflichtet fühlen",
        "form": "verb",
        "definitions": [
            {
                "text": "Jemanden gesetzlich oder moralisch dazu anhalten, etwas zu tun.",
                "examples": [
                    "Das Gesetz verpflichtet alle Arbeitgeber, ein sicheres Arbeitsumfeld bereitzustellen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "verpflichtete",
        "v3": "verpflichtet",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_social_021",
        "transcription": ""
    },
    {
        "word": "durchdringen",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌊",
        "subtext": "die Organisation durchdringen / durchdrungen sein von / allgegenwärtig",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich ausbreiten und in jedem Teil von etwas vorhanden sein.",
                "examples": [
                    "Eine Kultur der Überarbeitung durchdringt den Finanzdienstleistungssektor."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "durchdrang",
        "v3": "durchdrungen",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_time_001",
        "transcription": ""
    },
    {
        "word": "ausschließen",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🚫",
        "subtext": "jemanden ausschließen / die Möglichkeit ausschließen / nicht ausschließen",
        "form": "verb",
        "definitions": [
            {
                "text": "Verhindern, dass etwas passiert.",
                "examples": [
                    "Sein Mangel an einschlägiger Erfahrung schloss ihn von der engeren Auswahl aus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "schloss aus",
        "v3": "ausgeschlossen",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_014",
        "transcription": ""
    },
    {
        "word": "vereinbaren",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤝",
        "subtext": "Ideen vereinbaren / schwer zu vereinbaren / Differenzen beilegen",
        "form": "verb",
        "definitions": [
            {
                "text": "Freundschaftliche Beziehungen wiederherstellen; kompatibel machen.",
                "examples": [
                    "Sie fand es unmöglich, ihre Werte mit der Unternehmenskultur zu vereinbaren."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "vereinbarte",
        "v3": "vereinbart",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_013",
        "transcription": ""
    },
    {
        "word": "ersetzen",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🚀",
        "subtext": "ein Gesetz ersetzen / frühere Richtlinien ablösen / ersetzt werden durch",
        "form": "verb",
        "definitions": [
            {
                "text": "Den Platz von etwas früher Verwendetem einnehmen.",
                "examples": [
                    "Die neuen Richtlinien werden alle früheren Versionen ersetzen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ersetzte",
        "v3": "ersetzt",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_time_002",
        "transcription": ""
    },
    {
        "word": "untermauern",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🏗️",
        "subtext": "ein Argument untermauern / Erfolg begründen / untermauert werden durch",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas stützen oder das Fundament für etwas bilden.",
                "examples": [
                    "Starkes Vertrauen untermauert jede erfolgreiche langfristige Partnerschaft."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "untermauerte",
        "v3": "untermauert",
        "group": "ern",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_014",
        "transcription": ""
    },
    {
        "word": "rechtfertigen",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "⚖️",
        "subtext": "jemanden rehabilitieren / eine Entscheidung rechtfertigen / sich gerechtfertigt fühlen",
        "form": "verb",
        "definitions": [
            {
                "text": "Jemanden von Schuld freisprechen; zeigen, dass etwas berechtigt war.",
                "examples": [
                    "Die Ergebnisse rechtfertigten ihre umstrittene Entscheidung zwei Jahre später."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rechtfertigte",
        "v3": "gerechtfertigt",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_psychology_015",
        "transcription": ""
    },
    {
        "word": "abhängen von",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "subtext": "abhängen von einer Entscheidung / abhängen von einem einzigen Faktor",
        "form": "verb",
        "definitions": [
            {
                "text": "Gänzlich von einem bestimmten Faktor bestimmt werden.",
                "examples": [
                    "Der gesamte Erfolg des Projekts hängt von der Zustimmung des Kunden ab."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "hing ab von",
        "v3": "abgehangen von",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_015",
        "transcription": ""
    },
    {
        "word": "ringen mit",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤼",
        "subtext": "mit einem Problem ringen / sich mit Auswirkungen auseinandersetzen",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich bemühen, etwas zu verstehen oder damit umzugehen.",
                "examples": [
                    "Politikgestalter ringen immer noch mit den Auswirkungen der KI."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rang mit",
        "v3": "gerungen mit",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_016",
        "transcription": ""
    },
    {
        "word": "beschönigen",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎨",
        "subtext": "ein Problem beschönigen / über Details hinweggehen",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas zu schnell behandeln, um Schwierigkeiten zu vermeiden.",
                "examples": [
                    "Der Bericht beschönigt die umstrittensten finanziellen Details."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "beschönigte",
        "v3": "beschönigt",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_017",
        "transcription": ""
    },
    {
        "word": "kaschieren",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📄",
        "subtext": "ein Problem kaschieren / Risse übertünchen / Differenzen überdecken",
        "form": "verb",
        "definitions": [
            {
                "text": "Ein Problem verbergen oder verschleiern, ohne es zu lösen.",
                "examples": [
                    "Die Vereinbarung hat lediglich die tiefen strukturellen Spaltungen kaschiert."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "kaschierte",
        "v3": "kaschiert",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_language_018",
        "transcription": ""
    },
    {
        "word": "Paradigmenwechsel",
        "level": "proficiency",
        "theme": "work",
        "emoji": "🔄",
        "subtext": "eine grundlegende Änderung des Ansatzes",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine grundlegende Änderung des Ansatzes oder der zugrunde liegenden Annahmen.",
                "examples": [
                    "Die Einführung dieser neuen Technologie stellt einen Paradigmenwechsel in der Branche dar."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "vollzog einen Paradigmenwechsel",
        "v3": "vollzogener Paradigmenwechsel",
        "group": "en",
        "auxiliary": "haben",
        "lang": "de",
        "id": "de_proficiency_academic_general_001",
        "transcription": ""
    }
];
    const lang = "de";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();