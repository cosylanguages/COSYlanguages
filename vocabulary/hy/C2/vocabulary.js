// TODO: verify level classification
(function() {
    const lang = "hy";
    const data = [
        {
                "word": "ապորիա",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🤔",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "A state of puzzlement or difficulty arising from contradictions in an argument.",
                                "examples": [
                                        "The dialogue ends in aporia, with no satisfactory answer reached."
                                ]
                        }
                ]
        },
        {
                "word": "տելեոլոգիա",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🎯",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "The philosophical study of purpose or goal-directedness in nature or history.",
                                "examples": [
                                        "His argument rests on a teleological view of human progress."
                                ]
                        }
                ]
        },
        {
                "word": "օնտոլոգիա",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "👻",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "The branch of philosophy concerned with the nature of being or existence.",
                                "examples": [
                                        "Her ontological commitments shape her entire argument."
                                ]
                        }
                ]
        },
        {
                "word": "ռեիֆիկացիա",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🧱",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "The process of treating something abstract as if it were a concrete, real thing.",
                                "examples": [
                                        "Reification of market forces masks the human decisions behind them."
                                ]
                        }
                ]
        },
        {
                "word": "դիալեկտիկա",
                "level": "proficiency",
                "theme": "meta_argument_deconstruction_C2",
                "emoji": "⚖️",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "A method of argument involving contradiction and resolution; or the tension between opposing forces.",
                                "examples": [
                                        "The dialectic between freedom and security defines liberal thought."
                                ]
                        }
                ]
        },
        {
                "word": "հևրիստիկ",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "💡",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "A problem-solving approach based on experience rather than guaranteed proof.",
                                "examples": [
                                        "'Follow the money' is a useful heuristic in investigative journalism."
                                ]
                        }
                ]
        },
        {
                "word": "ապոֆենիա",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🕸️",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "The tendency to perceive meaningful connections between unrelated things.",
                                "examples": [
                                        "Conspiracy thinking is driven by apophenia."
                                ]
                        }
                ]
        },
        {
                "word": "մոտիվացված կոգնիցիա",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🧠",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "The influence of desires and emotions on reasoning and belief formation.",
                                "examples": [
                                        "Motivated cognition explains why people resist unwelcome evidence."
                                ]
                        }
                ]
        },
        {
                "word": "պրոակտիվ սկզբունք",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🚀",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "The view that the risks of inaction should be weighed against the risks of action when evaluating new technologies.",
                                "examples": [
                                        "Transhumanists often invoke the proactionary principle."
                                ]
                        }
                ]
        },
        {
                "word": "նախազգուշական սկզբունք",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🛡️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "The view that actions with unknown but potentially harmful consequences should be avoided.",
                                "examples": [
                                        "Environmental law frequently applies the precautionary principle."
                                ]
                        }
                ]
        },
        {
                "word": "լիբերալ չեզոքություն",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "⚖️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "The liberal principle that the state should not favour any particular vision of the good life.",
                                "examples": [
                                        "Critics argue that liberal neutrality is itself a substantive moral position."
                                ]
                        }
                ]
        },
        {
                "word": "պրոնատալիզմ",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "👶",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "A policy or ideology that encourages people to have more children.",
                                "examples": [
                                        "She critiqued the pronatalist assumptions embedded in family tax policy."
                                ]
                        }
                ]
        },
        {
                "word": "սուբլիմացիա",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🎨",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "The redirection of a primitive impulse into a socially acceptable activity.",
                                "examples": [
                                        "Art has long been understood as a form of sublimation."
                                ]
                        }
                ]
        },
        {
                "word": "ժուիսանս",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🔥",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "In psychoanalytic theory, an excessive or transgressive form of enjoyment.",
                                "examples": [
                                        "Žižek uses the concept of jouissance to explain ideological attachment."
                                ]
                        }
                ]
        },
        {
                "word": "թանատոս",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "💀",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "In Freudian theory, the death drive; an instinct towards self-destruction.",
                                "examples": [
                                        "The novel explores the tension between eros and thanatos."
                                ]
                        }
                ]
        },
        {
                "word": "բաթոս",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "emoji": "📉",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "An abrupt, disappointing transition from the elevated to the trivial.",
                                "examples": [
                                        "The speech descended into bathos at the crucial moment."
                                ]
                        }
                ]
        },
        {
                "word": "ապոֆազիս",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🤫",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "A rhetorical device of drawing attention to something by claiming not to mention it.",
                                "examples": [
                                        "'I won't mention his criminal record' is a classic apophasis."
                                ]
                        }
                ]
        },
        {
                "word": "պարալեպսիս",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🙊",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Another term for apophasis; pretending to pass over something while actually emphasising it.",
                                "examples": [
                                        "Political rhetoric often relies on paralepsis to insinuate without asserting."
                                ]
                        }
                ]
        },
        {
                "word": "լիմինալ տարածություն",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🚪",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "A transitional phase or threshold moment between two states of being.",
                                "examples": [
                                        "Midlife can be understood as a liminal space between youth and age."
                                ]
                        }
                ]
        },
        {
                "word": "քիազմ",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "❌",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "A rhetorical device in which the second part is a reversal of the first.",
                                "examples": [
                                        "'Ask not what your country can do for you' uses chiasmus."
                                ]
                        }
                ]
        },
        {
                "word": "շիբոլեթ",
                "level": "proficiency",
                "theme": "linguistics_theory_C2",
                "emoji": "🔑",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "A custom, phrase, or belief used to identify members of a particular group.",
                                "examples": [
                                        "'Hard-working families' has become a political shibboleth."
                                ]
                        }
                ]
        }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();