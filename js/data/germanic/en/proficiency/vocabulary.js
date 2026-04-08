(function() {
    const data = [
    {
        "word": "philosopher",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🧐",
        "form": "noun",
        "plural": "philosophers",
        "definitions": [
            {
                "text": "A person who thinks about the meaning of life and truth.",
                "examples": [
                    "Socrates was a famous philosopher.",
                    "The philosopher wrote many essays."
                ]
            },
            {
                "text": "This person reads many books and asks difficult questions.",
                "examples": [
                    "Philosophers discuss ethics and logic."
                ]
            }
        ]
    },
    {
        "word": "blockchain",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "⛓️",
        "form": "noun",
        "plural": "blockchains"
    },
    {
        "word": "existentialism",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "👤",
        "form": "noun",
        "plural": "existentialisms"
    },
    {
        "word": "paradigm shift",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🔄",
        "form": "noun",
        "plural": "paradigm shifts"
    },
    {
        "word": "aporia",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🤔",
        "form": "noun",
        "plural": "aporias",
        "transcription": "əˈpɔːriə",
        "definitions": [
            {
                "text": "A state of puzzlement or difficulty arising from contradictions in an argument.",
                "examples": [
                    "The dialogue ends in aporia, with no satisfactory answer reached."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "philosophical puzzle"
    },
    {
        "word": "teleology",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🎯",
        "form": "noun",
        "plural": "teleologies",
        "transcription": "ˌtiːliˈɒlədʒi",
        "definitions": [
            {
                "text": "The philosophical study of purpose or goal-directedness in nature or history.",
                "examples": [
                    "His argument rests on a teleological view of human progress."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "study of purpose"
    },
    {
        "word": "ontology",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "👻",
        "form": "noun",
        "plural": "ontologies",
        "transcription": "ɒnˈtɒlədʒi",
        "definitions": [
            {
                "text": "The branch of philosophy concerned with the nature of being or existence.",
                "examples": [
                    "Her ontological commitments shape her entire argument."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "nature of being"
    },
    {
        "word": "reification",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🧱",
        "form": "noun",
        "plural": "reifications",
        "transcription": "ˌriːɪfɪˈkeɪʃn",
        "definitions": [
            {
                "text": "The process of treating something abstract as if it were a concrete, real thing.",
                "examples": [
                    "Reification of market forces masks the human decisions behind them."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "making abstract concrete"
    },
    {
        "word": "dialectic",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction_C2",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "dialectics",
        "transcription": "ˌdaɪəˈlektɪk",
        "definitions": [
            {
                "text": "A method of argument involving contradiction and resolution; or the tension between opposing forces.",
                "examples": [
                    "The dialectic between freedom and security defines liberal thought."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "argument by contradiction"
    },
    {
        "word": "heuristic",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "💡",
        "form": "noun",
        "plural": "heuristics",
        "transcription": "hjuˈrɪstɪk",
        "definitions": [
            {
                "text": "A problem-solving approach based on experience rather than guaranteed proof.",
                "examples": [
                    "'Follow the money' is a useful heuristic in investigative journalism."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "mental shortcut"
    },
    {
        "word": "apophenia",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "🕸️",
        "form": "noun",
        "transcription": "ˌæpəˈfiːniə",
        "definitions": [
            {
                "text": "The tendency to perceive meaningful connections between unrelated things.",
                "examples": [
                    "Conspiracy thinking is driven by apophenia."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "perceived patterns"
    },
    {
        "word": "motivated cognition",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "🧠",
        "form": "noun",
        "transcription": "ˈmoʊtɪveɪtɪd kɒɡˈnɪʃn",
        "definitions": [
            {
                "text": "The influence of desires and emotions on reasoning and belief formation.",
                "examples": [
                    "Motivated cognition explains why people resist unwelcome evidence."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "biased reasoning"
    },
    {
        "word": "proactionary principle",
        "level": "proficiency",
        "theme": "ethics_advanced_C2",
        "emoji": "🚀",
        "form": "noun",
        "transcription": "proʊˈækʃənəri ˈprɪnsəpl",
        "definitions": [
            {
                "text": "The view that the risks of inaction should be weighed against the risks of action when evaluating new technologies.",
                "examples": [
                    "Transhumanists often invoke the proactionary principle."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "risk of inaction"
    },
    {
        "word": "precautionary principle",
        "level": "proficiency",
        "theme": "ethics_advanced_C2",
        "emoji": "🛡️",
        "form": "noun",
        "transcription": "prɪˈkɔːʃənəri ˈprɪnsəpl",
        "definitions": [
            {
                "text": "The view that actions with unknown but potentially harmful consequences should be avoided.",
                "examples": [
                    "Environmental law frequently applies the precautionary principle."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "safety first"
    },
    {
        "word": "liberal neutrality",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "⚖️",
        "form": "noun",
        "transcription": "ˈlɪbərəl njuːˈtræləti",
        "definitions": [
            {
                "text": "The liberal principle that the state should not favour any particular vision of the good life.",
                "examples": [
                    "Critics argue that liberal neutrality is itself a substantive moral position."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "state impartiality"
    },
    {
        "word": "pronatalism",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "👶",
        "form": "noun",
        "transcription": "ˌproʊˈneɪtəlɪzəm",
        "definitions": [
            {
                "text": "A policy or ideology that encourages people to have more children.",
                "examples": [
                    "She critiqued the pronatalist assumptions embedded in family tax policy."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "encouraging birth"
    },
    {
        "word": "sublimation",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious_C2",
        "emoji": "🎨",
        "form": "noun",
        "transcription": "ˌsʌblɪˈmeɪʃn",
        "definitions": [
            {
                "text": "The redirection of a primitive impulse into a socially acceptable activity.",
                "examples": [
                    "Art has long been understood as a form of sublimation."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "redirected impulse"
    },
    {
        "word": "jouissance",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious_C2",
        "emoji": "🔥",
        "form": "noun",
        "transcription": "ˌʒwiːsɒ̃s",
        "definitions": [
            {
                "text": "In psychoanalytic theory, an excessive or transgressive form of enjoyment.",
                "examples": [
                    "Žižek uses the concept of jouissance to explain ideological attachment."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "excessive enjoyment"
    },
    {
        "word": "thanatos",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious_C2",
        "emoji": "💀",
        "form": "noun",
        "transcription": "ˈθænətɒs",
        "definitions": [
            {
                "text": "In Freudian theory, the death drive; an instinct towards self-destruction.",
                "examples": [
                    "The novel explores the tension between eros and thanatos."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "death drive"
    },
    {
        "word": "bathos",
        "level": "proficiency",
        "theme": "aesthetics_criticism_C2",
        "emoji": "📉",
        "form": "noun",
        "transcription": "ˈbeɪθɒs",
        "definitions": [
            {
                "text": "An abrupt, disappointing transition from the elevated to the trivial.",
                "examples": [
                    "The speech descended into bathos at the crucial moment."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "anti-climax"
    },
    {
        "word": "apophasis",
        "level": "proficiency",
        "theme": "rhetoric_persuasion_C2",
        "emoji": "🤫",
        "form": "noun",
        "transcription": "əˈpɒfəsɪs",
        "definitions": [
            {
                "text": "A rhetorical device of drawing attention to something by claiming not to mention it.",
                "examples": [
                    "'I won't mention his criminal record' is a classic apophasis."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "mentioning by denial"
    },
    {
        "word": "paralepsis",
        "level": "proficiency",
        "theme": "rhetoric_persuasion_C2",
        "emoji": "🙊",
        "form": "noun",
        "transcription": "ˌpærəˈlepsɪs",
        "definitions": [
            {
                "text": "Another term for apophasis; pretending to pass over something while actually emphasising it.",
                "examples": [
                    "Political rhetoric often relies on paralepsis to insinuate without asserting."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "emphasizing by omission"
    },
    {
        "word": "liminal space",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🚪",
        "form": "noun",
        "plural": "liminal spaces",
        "transcription": "ˈlɪmɪnl speɪs",
        "definitions": [
            {
                "text": "A transitional phase or threshold moment between two states of being.",
                "examples": [
                    "Midlife can be understood as a liminal space between youth and age."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "threshold state"
    },
    {
        "word": "chiasmus",
        "level": "proficiency",
        "theme": "rhetoric_persuasion_C2",
        "emoji": "❌",
        "form": "noun",
        "plural": "chiasmi",
        "transcription": "kaɪˈæzməs",
        "definitions": [
            {
                "text": "A rhetorical device in which the second part is a reversal of the first.",
                "examples": [
                    "'Ask not what your country can do for you' uses chiasmus."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "inverted parallelism"
    },
    {
        "word": "shibboleth",
        "level": "proficiency",
        "theme": "linguistics_theory_C2",
        "emoji": "🔑",
        "form": "noun",
        "plural": "shibboleths",
        "transcription": "ˈʃɪbəleθ",
        "definitions": [
            {
                "text": "A custom, phrase, or belief used to identify members of a particular group.",
                "examples": [
                    "'Hard-working families' has become a political shibboleth."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "group identifier"
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
