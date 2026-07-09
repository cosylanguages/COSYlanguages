// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Aporie",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤔",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ein Zustand der Ratlosigkeit oder Schwierigkeit, der sich aus Widersprüchen in einem Argument ergibt.",
                "examples": [
                    "Der Dialog endet in einer Aporie, ohne dass eine zufriedenstellende Antwort erreicht wurde."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_language_001",
        "transcription": ""
    },
    {
        "word": "Teleologie",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎯",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Die philosophische Lehre von der Zweckbestimmtheit oder Zielgerichtetheit in Natur oder Geschichte.",
                "examples": [
                    "Sein Argument beruht auf einer teleologischen Sicht des menschlichen Fortschritts."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_language_002",
        "transcription": ""
    },
    {
        "word": "Ontologie",
        "level": "proficiency",
        "theme": "language",
        "emoji": "👻",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Der Zweig der Philosophie, der sich mit der Natur des Seins oder der Existenz befasst.",
                "examples": [
                    "Ihre ontologischen Überzeugungen prägen ihr gesamtes Argument."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_language_003",
        "transcription": ""
    },
    {
        "word": "Reifikation",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Der Prozess der Behandlung von etwas Abstraktem, als wäre es eine konkrete, reale Sache; Verdinglichung.",
                "examples": [
                    "Die Reifikation von Marktkräften verschleiert die menschlichen Entscheidungen dahinter."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_language_004",
        "transcription": ""
    },
    {
        "word": "Dialektik",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Eine Methode der Argumentation, die Widerspruch und Auflösung beinhaltet.",
                "examples": [
                    "Die Dialektik zwischen Freiheit und Sicherheit prägt das liberale Denken."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_language_005",
        "transcription": ""
    },
    {
        "word": "Heuristik",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ein Problemlösungsansatz, der auf Erfahrung statt auf garantiertem Beweis basiert.",
                "examples": [
                    "'Folge dem Geld' ist eine nützliche Heuristik im investigativen Journalismus."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_psychology_001",
        "transcription": ""
    },
    {
        "word": "Apophenie",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🕸️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Die Tendenz, bedeutungsvolle Verbindungen zwischen nicht zusammenhängenden Dingen wahrzunehmen.",
                "examples": [
                    "Verschwörungsdenken wird durch Apophenie angetrieben."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_psychology_002",
        "transcription": ""
    },
    {
        "word": "motivierte Kognition",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧠",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Der Einfluss von Wünschen und Emotionen auf das Denken und die Glaubensbildung.",
                "examples": [
                    "Motivierte Kognition erklärt, warum Menschen sich unwillkommenen Beweisen widersetzen."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_psychology_003",
        "transcription": ""
    },
    {
        "word": "proaktives Prinzip",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚀",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Die Ansicht, dass die Risiken der Untätigkeit gegen die Risiken des Handelns abgewogen werden sollten.",
                "examples": [
                    "Transhumanisten berufen sich oft auf das proaktive Prinzip."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_social_001",
        "transcription": ""
    },
    {
        "word": "Vorsorgeprinzip",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Die Ansicht, dass Handlungen mit unbekannten, aber potenziell schädlichen Folgen vermieden werden sollten.",
                "examples": [
                    "Das Umweltrecht wendet häufig das Vorsorgeprinzip an."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_social_002",
        "transcription": ""
    },
    {
        "word": "liberale Neutralität",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Der liberale Grundsatz, dass der Staat keine bestimmte Vision des guten Lebens bevorzugen sollte.",
                "examples": [
                    "Kritiker argumentieren, dass liberale Neutralität selbst eine materielle moralische Position ist."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_social_003",
        "transcription": ""
    },
    {
        "word": "Pronatalismus",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Eine Politik oder Ideologie, die Menschen dazu ermutigt, mehr Kinder zu haben.",
                "examples": [
                    "Sie kritisierte die pronatalistischen Annahmen in der Familiensteuerpolitik."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_social_004",
        "transcription": ""
    },
    {
        "word": "Sublimierung",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Die Umleitung eines primitiven Impulses in eine gesellschaftlich akzeptable Tätigkeit.",
                "examples": [
                    "Kunst wird seit langem als eine Form der Sublimierung verstanden."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_psychology_004",
        "transcription": ""
    },
    {
        "word": "Jouissance",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "In der psychoanalytischen Theorie eine exzessive oder transgressive Form des Genusses.",
                "examples": [
                    "Žižek verwendet das Konzept der Jouissance, um ideologische Bindung zu erklären."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_psychology_005",
        "transcription": ""
    },
    {
        "word": "Thanatos",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💀",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "In der Freudschen Theorie der Todestrieb.",
                "examples": [
                    "Der Roman untersucht die Spannung zwischen Eros und Thanatos."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_psychology_006",
        "transcription": ""
    },
    {
        "word": "Bathos",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "📉",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ein abrupter, enttäuschender Übergang vom Erhabenen zum Trivialen.",
                "examples": [
                    "Die Rede versank im entscheidenden Moment im Bathos."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_art_culture_001",
        "transcription": ""
    },
    {
        "word": "Apophase",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ein rhetorisches Mittel, bei dem Aufmerksamkeit auf etwas gelenkt wird, indem man behauptet, es nicht zu erwähnen.",
                "examples": [
                    "'Ich werde sein Vorstrafenregister nicht erwähnen' ist eine klassische Apophase."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_language_006",
        "transcription": ""
    },
    {
        "word": "Paralipse",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🙊",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ein anderer Begriff für Apophase.",
                "examples": [
                    "Politische Rhetorik stützt sich oft auf Paralipse."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_language_007",
        "transcription": ""
    },
    {
        "word": "liminaler Raum",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Eine Übergangsphase oder ein Schwellenmoment zwischen zwei Seinszuständen.",
                "examples": [
                    "Die Lebensmitte kann als liminaler Raum zwischen Jugend und Alter verstanden werden."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_language_008",
        "transcription": ""
    },
    {
        "word": "Chiasmus",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ein rhetorisches Mittel, bei dem der zweite Teil eine Umkehrung des ersten ist.",
                "examples": [
                    "'Frage nicht, was dein Land für dich tun kann' verwendet Chiasmus."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_language_009",
        "transcription": ""
    },
    {
        "word": "Schibboleth",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ein Brauch, eine Phrase oder ein Glaube, der verwendet wird, um Mitglieder einer bestimmten Gruppe zu identifizieren.",
                "examples": [
                    "'Hart arbeitende Familien' ist zu einem politischen Schibboleth geworden."
                ]
            }
        ],
        "lang": "de",
        "id": "de_proficiency_language_010",
        "transcription": ""
    }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();