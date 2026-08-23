// TODO: verify level classification
(function() {
    const lang = "en";
    const data = [
    {
        "id": "en_proficiency_psychology_001",
        "word": "philosopher",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧐",
        "form": "noun",
        "classification": "regular",
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
        ],
        "transcription": ""
    },
    {
        "id": "en_proficiency_technology_001",
        "word": "blockchain",
        "lang": "en",
        "level": "proficiency",
        "theme": "technology",
        "emoji": "⛓️",
        "form": "noun",
        "classification": "regular",
        "plural": "blockchains",
        "definitions": [
            {
                "text": "A distributed, decentralized, public ledger that records transactions across many computers.",
                "examples": [
                    "The blockchain ensures that the record cannot be altered retroactively."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "en_proficiency_psychology_002",
        "word": "existentialism",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "A philosophical theory that emphasizes the existence of the individual person as a free and responsible agent.",
                "examples": [
                    "Sartre and Camus are two of the most famous thinkers associated with existentialism."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "en_proficiency_psychology_003",
        "word": "paradigm shift",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔄",
        "form": "noun",
        "classification": "regular",
        "plural": "paradigm shifts",
        "definitions": [
            {
                "text": "A fundamental change in approach or underlying assumptions.",
                "examples": [
                    "The discovery of DNA caused a paradigm shift in biological research."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "en_proficiency_language_001",
        "word": "aporia",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤔",
        "form": "noun",
        "classification": "regular",
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
        "id": "en_proficiency_language_002",
        "word": "teleology",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎯",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 ˌtiːliˈɒlədʒi | 🇺🇸 ˌtiːliˈɑːlədʒi",
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
        "id": "en_proficiency_language_003",
        "word": "ontology",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "👻",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 ɒnˈtɒlədʒi | 🇺🇸 ɑːnˈtɑːlədʒi",
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
        "id": "en_proficiency_language_004",
        "word": "reification",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
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
        "id": "en_proficiency_language_005",
        "word": "dialectic",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
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
        "id": "en_proficiency_psychology_004",
        "word": "heuristic",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
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
        "id": "en_proficiency_psychology_005",
        "word": "apophenia",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🕸️",
        "form": "noun",
        "classification": "regular",
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
        "id": "en_proficiency_psychology_006",
        "word": "motivated cognition",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 ˈməʊtɪveɪtɪd kɒɡˈnɪʃn | 🇺🇸 ˈmoʊtɪveɪtɪd kɑːɡˈnɪʃn",
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
        "id": "en_proficiency_psychology_007",
        "word": "proactionary principle",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🚀",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 prəʊˈækʃənəri ˈprɪnsəpl | 🇺🇸 proʊˈækʃənəri ˈprɪnsəpl",
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
        "id": "en_proficiency_psychology_008",
        "word": "precautionary principle",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🛡️",
        "form": "noun",
        "classification": "regular",
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
        "id": "en_proficiency_social_001",
        "word": "liberal neutrality",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
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
        "id": "en_proficiency_social_002",
        "word": "pronatalism",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 ˌprəʊˈneɪtəlɪzəm | 🇺🇸 ˌproʊˈneɪtəlɪzəm",
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
        "id": "en_proficiency_psychology_009",
        "word": "sublimation",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
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
        "id": "en_proficiency_psychology_010",
        "word": "jouissance",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 ˌʒwiːsɒ̃s | 🇺🇸 ˌʒwiːsɑː̃s",
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
        "id": "en_proficiency_psychology_011",
        "word": "thanatos",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💀",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 ˈθænətɒs | 🇺🇸 ˈθænətɑːs",
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
        "id": "en_proficiency_art_culture_001",
        "word": "bathos",
        "lang": "en",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "📉",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 ˈbeɪθɒs | 🇺🇸 ˈbeɪθɑːs",
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
        "id": "en_proficiency_language_006",
        "word": "apophasis",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 əˈpɒfəsɪs | 🇺🇸 əˈpɑːfəsɪs",
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
        "id": "en_proficiency_language_007",
        "word": "paralepsis",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🙊",
        "form": "noun",
        "classification": "regular",
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
        "id": "en_proficiency_language_008",
        "word": "liminal space",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "noun phrase",
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
        "subtext": "threshold state"
    },
    {
        "id": "en_proficiency_language_009",
        "word": "chiasmus",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "noun",
        "classification": "regular",
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
        "id": "en_proficiency_language_010",
        "word": "shibboleth",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
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
    },
    {
        "id": "en_proficiency_language_011",
        "word": "phenomenology",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 fəˌnɒmɪˈnɒlədʒi | 🇺🇸 fəˌnɑːmɪˈnɑːlədʒi",
        "definitions": [
            {
                "text": "The philosophical study of structures of experience and consciousness.",
                "examples": [
                    "He drew on phenomenology to describe the lived experience of unemployment."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "study of consciousness"
    },
    {
        "id": "en_proficiency_language_012",
        "word": "contingency",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎲",
        "form": "noun",
        "classification": "regular",
        "plural": "contingencies",
        "transcription": "kənˈtɪndʒənsi",
        "definitions": [
            {
                "text": "The quality of being possible but not certain; dependent on circumstances.",
                "examples": [
                    "History is full of contingency — it could always have gone otherwise."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "possibility/chance"
    },
    {
        "id": "en_proficiency_language_013",
        "word": "hermeneutics",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "noun",
        "classification": "regular",
        "transcription": "ˌhɜːmɪˈnjuːtɪks",
        "definitions": [
            {
                "text": "The theory and methodology of interpretation, especially of texts.",
                "examples": [
                    "The hermeneutic approach treats every utterance as context-dependent."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "method of interpretation"
    },
    {
        "id": "en_proficiency_language_014",
        "word": "polysemy",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔠",
        "form": "noun",
        "classification": "regular",
        "transcription": "pəˈlɪsɪmi",
        "definitions": [
            {
                "text": "The property of a word or phrase having multiple related meanings.",
                "examples": [
                    "The polysemy of 'freedom' makes political argument almost inevitable."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "multiple meanings"
    },
    {
        "id": "en_proficiency_language_015",
        "word": "epistemic injustice",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun phrase",
        "transcription": "ˌepɪˈstiːmɪk ɪnˈdʒʌstɪs",
        "definitions": [
            {
                "text": "A wrong done to someone in their capacity as a knower, such as dismissing their testimony.",
                "examples": [
                    "Miranda Fricker identified testimonial credibility gaps as a form of epistemic injustice."
                ]
            }
        ],
        "subtext": "unfairness in knowledge"
    },
    {
        "id": "en_proficiency_language_016",
        "word": "catachresis",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📣",
        "form": "noun",
        "classification": "regular",
        "transcription": "ˌkætəˈkriːsɪs",
        "definitions": [
            {
                "text": "The deliberate misuse or stretching of a word to create meaning.",
                "examples": [
                    "He deployed catachresis brilliantly, calling the policy 'a solution without a problem'."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "stretched metaphor"
    },
    {
        "id": "en_proficiency_language_017",
        "word": "antinomy",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
        "plural": "antinomies",
        "transcription": "ænˈtɪnəmi",
        "definitions": [
            {
                "text": "A contradiction between two apparently reasonable principles.",
                "examples": [
                    "The antinomy between freedom and security lies at the heart of liberal theory."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "logical contradiction"
    },
    {
        "id": "en_proficiency_psychology_012",
        "word": "repression",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🤐",
        "form": "noun",
        "classification": "regular",
        "transcription": "rɪˈpreʃn",
        "definitions": [
            {
                "text": "The unconscious suppression of thoughts or desires too painful to acknowledge.",
                "examples": [
                    "Repression does not eliminate conflict — it delays it."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "unconscious suppression"
    },
    {
        "id": "en_proficiency_psychology_013",
        "word": "the uncanny",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧟",
        "form": "noun phrase",
        "transcription": "ði ʌnˈkæni",
        "definitions": [
            {
                "text": "Something familiar made strange in a way that produces unease.",
                "examples": [
                    "Freud's concept of the uncanny captures the horror of the almost-human."
                ]
            }
        ],
        "subtext": "disturbing familiarity"
    },
    {
        "id": "en_proficiency_psychology_014",
        "word": "displacement",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🏹",
        "form": "noun",
        "classification": "regular",
        "transcription": "dɪsˈpleɪsmənt",
        "definitions": [
            {
                "text": "The unconscious shifting of feelings from one object to a safer one.",
                "examples": [
                    "Displacement explains why people take work frustrations out on their families."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "shifted emotions"
    },
    {
        "id": "en_proficiency_social_003",
        "word": "dialectical materialism",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛠️",
        "form": "noun phrase",
        "transcription": "ˌdaɪəˈlektɪkl məˈtɪəriəlɪzəm",
        "definitions": [
            {
                "text": "The Marxist method of analysis based on the conflict between opposing social forces.",
                "examples": [
                    "Dialectical materialism predicts that capitalism generates the conditions of its own negation."
                ]
            }
        ],
        "subtext": "Marxist theory"
    },
    {
        "id": "en_proficiency_social_004",
        "word": "post-colonialism",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌍",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 ˌpəʊstkəˈləʊniəlɪzəm | 🇺🇸 ˌpoʊstkəˈloʊniəlɪzəm",
        "definitions": [
            {
                "text": "A body of theory examining the lasting cultural and political effects of colonialism.",
                "examples": [
                    "Post-colonialism challenges the universality of Enlightenment values."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "critique of colonialism"
    },
    {
        "id": "en_proficiency_social_005",
        "word": "biopolitics",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧬",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 ˌbaɪəʊˈpɒlətɪks | 🇺🇸 ˌbaɪoʊˈpɑːlətɪks",
        "definitions": [
            {
                "text": "Foucault's concept of the exercise of political power over biological life.",
                "examples": [
                    "The pandemic made biopolitics suddenly legible to ordinary citizens."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "power over life"
    },
    {
        "id": "en_proficiency_social_006",
        "word": "alienation",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "transcription": "ˌeɪliəˈneɪʃn",
        "definitions": [
            {
                "text": "In Marxist theory, the estrangement of workers from the product and process of their labour.",
                "examples": [
                    "Marx argued that wage labour produces alienation as its necessary by-product."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "worker estrangement"
    },
    {
        "id": "en_proficiency_social_007",
        "word": "commodification",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 kəˌmɒdɪfɪˈkeɪʃn | 🇺🇸 kəˌmɑːdɪfɪˈkeɪʃn",
        "definitions": [
            {
                "text": "The process of transforming something into a tradeable commodity.",
                "examples": [
                    "The commodification of care work devalues it while making it visible."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "treating as commodity"
    },
    {
        "id": "en_proficiency_psychology_015",
        "word": "bad faith",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎭",
        "form": "noun phrase",
        "transcription": "bæd feɪθ",
        "definitions": [
            {
                "text": "In Sartrean existentialism, self-deception about one's freedom and responsibility.",
                "examples": [
                    "Taking a job you find meaningless and telling yourself you have no choice is bad faith."
                ]
            }
        ],
        "subtext": "self-deception"
    },
    {
        "id": "en_proficiency_psychology_016",
        "word": "the banality of evil",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🏢",
        "form": "noun phrase",
        "transcription": "ðə bəˈnæləti əv ˈiːvl",
        "definitions": [
            {
                "text": "Hannah Arendt's concept that great evil is often carried out by ordinary, unthinking individuals.",
                "examples": [
                    "Corporate misconduct demonstrates the banality of evil in bureaucratic settings."
                ]
            }
        ],
        "subtext": "ordinary evil"
    },
    {
        "id": "en_proficiency_time_001",
        "word": "finitude",
        "lang": "en",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⏳",
        "form": "noun",
        "classification": "regular",
        "transcription": "ˈfɪnɪtjuːd",
        "definitions": [
            {
                "text": "The state of having limits; especially the fact of being mortal.",
                "examples": [
                    "Awareness of finitude is the precondition for a meaningful adult life."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "state of being finite"
    },
    {
        "id": "en_proficiency_time_002",
        "word": "nostalgia",
        "lang": "en",
        "level": "proficiency",
        "theme": "time",
        "emoji": "📻",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 nɒˈstældʒə | 🇺🇸 nɑːˈstældʒə",
        "definitions": [
            {
                "text": "A sentimental longing for the past, sometimes idealised.",
                "examples": [
                    "Political nostalgia for a simpler era drives much of the populist vote."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "longing for the past"
    },
    {
        "id": "en_proficiency_time_003",
        "word": "entropy",
        "lang": "en",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌪️",
        "form": "noun",
        "classification": "regular",
        "transcription": "ˈentrəpi",
        "definitions": [
            {
                "text": "The tendency of systems to move toward disorder; also used metaphorically for decline.",
                "examples": [
                    "He described the organisation's collapse as a form of social entropy."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "move toward disorder"
    },
    {
        "id": "en_proficiency_time_004",
        "word": "eschatology",
        "lang": "en",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌋",
        "form": "noun",
        "classification": "regular",
        "transcription": "🇬🇧 ˌeskəˈtɒlədʒi | 🇺🇸 ˌeskəˈtɑːlədʒi",
        "definitions": [
            {
                "text": "Theological or philosophical doctrine about the ultimate fate of the world or humanity.",
                "examples": [
                    "Secular eschatology has replaced divine judgement with existential risk."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "end-times study"
    },
    {
        "id": "en_proficiency_art_culture_002",
        "word": "mimesis",
        "lang": "en",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🎭",
        "form": "noun",
        "classification": "regular",
        "transcription": "mɪˈmiːsɪs",
        "definitions": [
            {
                "text": "Representation or imitation of reality in art or literature.",
                "examples": [
                    "Aristotle's concept of mimesis shaped Western aesthetic theory for centuries."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "artistic imitation"
    },
    {
        "id": "en_proficiency_art_culture_003",
        "word": "defamiliarisation",
        "lang": "en",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🌀",
        "form": "noun",
        "classification": "regular",
        "transcription": "diːfəˌmɪliəraɪˈzeɪʃn",
        "definitions": [
            {
                "text": "A literary technique making familiar things seem strange to prompt fresh perception.",
                "examples": [
                    "Defamiliarisation is central to the modernist aesthetic project."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "strange perception"
    },
    {
        "id": "en_proficiency_art_culture_004",
        "word": "the sublime",
        "lang": "en",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🏔️",
        "form": "noun phrase",
        "transcription": "ðə səˈblaɪm",
        "definitions": [
            {
                "text": "An aesthetic quality producing awe mixed with fear at something vast or overwhelming.",
                "examples": [
                    "Burke and Kant gave very different accounts of the sublime."
                ]
            }
        ],
        "subtext": "awesome vastness"
    },
    {
        "id": "en_proficiency_art_culture_005",
        "word": "kitsch",
        "lang": "en",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🦩",
        "form": "noun",
        "classification": "regular",
        "transcription": "kɪtʃ",
        "definitions": [
            {
                "text": "Art or objects considered to be in poor taste but appreciated ironically or for sentimental reasons.",
                "examples": [
                    "He argued that kitsch represents the aesthetic of a society without memory."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "garish art"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();