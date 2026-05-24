// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "garden",
        "image": "images/vocabulary/places/garden.png",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🌳",
        "form": "noun", "classification": "regular",
        "definitions": [{ "text": "A public garden or large green area in a city for everyone to use.", "examples": [] }],
        "countability": "countable"
    },
{
        "word": "philosopher",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🧐",
        "form": "noun", "classification": "regular",
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
        "form": "noun", "classification": "regular",
        "plural": "blockchains"
    },
{
        "word": "existentialism",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "👤",
        "form": "noun", "classification": "regular",
        "countability": "uncountable"
    },
{
        "word": "paradigm shift",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🔄",
        "form": "noun", "classification": "regular",
        "plural": "paradigm shifts"
    },
{
        "word": "aporia",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🤔",
        "form": "noun", "classification": "regular",
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
        "form": "noun", "classification": "regular",
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
        "word": "ontology",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "👻",
        "form": "noun", "classification": "regular",
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
        "word": "reification",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🧱",
        "form": "noun", "classification": "regular",
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
        "form": "noun", "classification": "regular",
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
        "form": "noun", "classification": "regular",
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
        "form": "noun", "classification": "regular",
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
        "form": "noun", "classification": "regular",
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
        "word": "proactionary principle",
        "level": "proficiency",
        "theme": "ethics_advanced_C2",
        "emoji": "🚀",
        "form": "noun", "classification": "regular",
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
        "word": "precautionary principle",
        "level": "proficiency",
        "theme": "ethics_advanced_C2",
        "emoji": "🛡️",
        "form": "noun", "classification": "regular",
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
        "form": "noun", "classification": "regular",
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
        "form": "noun", "classification": "regular",
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
        "word": "sublimation",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious_C2",
        "emoji": "🎨",
        "form": "noun", "classification": "regular",
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
        "form": "noun", "classification": "regular",
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
        "word": "thanatos",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious_C2",
        "emoji": "💀",
        "form": "noun", "classification": "regular",
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
        "word": "bathos",
        "level": "proficiency",
        "theme": "aesthetics_criticism_C2",
        "emoji": "📉",
        "form": "noun", "classification": "regular",
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
        "word": "apophasis",
        "level": "proficiency",
        "theme": "rhetoric_persuasion_C2",
        "emoji": "🤫",
        "form": "noun", "classification": "regular",
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
        "word": "paralepsis",
        "level": "proficiency",
        "theme": "rhetoric_persuasion_C2",
        "emoji": "🙊",
        "form": "noun", "classification": "regular",
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
        "form": "noun", "classification": "regular",
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
        "form": "noun", "classification": "regular",
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
        "form": "noun", "classification": "regular",
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
        "word": "phenomenology",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🧠",
        "form": "noun", "classification": "regular",
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
        "word": "contingency",
        "level": "proficiency",
        "theme": "ontology_existence_C2",
        "emoji": "🎲",
        "form": "noun", "classification": "regular",
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
        "word": "hermeneutics",
        "level": "proficiency",
        "theme": "linguistics_theory_C2",
        "emoji": "📜",
        "form": "noun", "classification": "regular",
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
        "word": "polysemy",
        "level": "proficiency",
        "theme": "linguistics_theory_C2",
        "emoji": "🔠",
        "form": "noun", "classification": "regular",
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
        "word": "epistemic injustice",
        "level": "proficiency",
        "theme": "epistemology_truth_C2",
        "emoji": "⚖️",
        "form": "noun", "classification": "regular",
        "transcription": "ˌepɪˈstiːmɪk ɪnˈdʒʌstɪs",
        "definitions": [
            {
                "text": "A wrong done to someone in their capacity as a knower, such as dismissing their testimony.",
                "examples": [
                    "Miranda Fricker identified testimonial credibility gaps as a form of epistemic injustice."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "unfairness in knowledge"
    },
{
        "word": "catachresis",
        "level": "proficiency",
        "theme": "rhetoric_persuasion_C2",
        "emoji": "📣",
        "form": "noun", "classification": "regular",
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
        "word": "antinomy",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction_C2",
        "emoji": "⚖️",
        "form": "noun", "classification": "regular",
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
        "word": "repression",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious_C2",
        "emoji": "🤐",
        "form": "noun", "classification": "regular",
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
        "word": "the uncanny",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious_C2",
        "emoji": "🧟",
        "form": "noun", "classification": "regular",
        "transcription": "ði ʌnˈkæni",
        "definitions": [
            {
                "text": "Something familiar made strange in a way that produces unease.",
                "examples": [
                    "Freud's concept of the uncanny captures the horror of the almost-human."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "disturbing familiarity"
    },
{
        "word": "displacement",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious_C2",
        "emoji": "🏹",
        "form": "noun", "classification": "regular",
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
        "word": "dialectical materialism",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🛠️",
        "form": "noun", "classification": "regular",
        "transcription": "ˌdaɪəˈlektɪkl məˈtɪəriəlɪzəm",
        "definitions": [
            {
                "text": "The Marxist method of analysis based on the conflict between opposing social forces.",
                "examples": [
                    "Dialectical materialism predicts that capitalism generates the conditions of its own negation."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "Marxist theory"
    },
{
        "word": "post-colonialism",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🌍",
        "form": "noun", "classification": "regular",
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
        "word": "biopolitics",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🧬",
        "form": "noun", "classification": "regular",
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
        "word": "alienation",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "👤",
        "form": "noun", "classification": "regular",
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
        "word": "commodification",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🏷️",
        "form": "noun", "classification": "regular",
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
        "word": "bad faith",
        "level": "proficiency",
        "theme": "ontology_existence_C2",
        "emoji": "🎭",
        "form": "noun", "classification": "regular",
        "transcription": "bæd feɪθ",
        "definitions": [
            {
                "text": "In Sartrean existentialism, self-deception about one's freedom and responsibility.",
                "examples": [
                    "Taking a job you find meaningless and telling yourself you have no choice is bad faith."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "self-deception"
    },
{
        "word": "the banality of evil",
        "level": "proficiency",
        "theme": "ethics_advanced_C2",
        "emoji": "🏢",
        "form": "noun", "classification": "regular",
        "transcription": "ðə bəˈnæləti əv ˈiːvl",
        "definitions": [
            {
                "text": "Hannah Arendt's concept that great evil is often carried out by ordinary, unthinking individuals.",
                "examples": [
                    "Corporate misconduct demonstrates the banality of evil in bureaucratic settings."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "ordinary evil"
    },
{
        "word": "finitude",
        "level": "proficiency",
        "theme": "mortality_time_C2",
        "emoji": "⏳",
        "form": "noun", "classification": "regular",
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
        "word": "nostalgia",
        "level": "proficiency",
        "theme": "mortality_time_C2",
        "emoji": "📻",
        "form": "noun", "classification": "regular",
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
        "word": "entropy",
        "level": "proficiency",
        "theme": "civilisation_history_C2",
        "emoji": "🌪️",
        "form": "noun", "classification": "regular",
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
        "word": "eschatology",
        "level": "proficiency",
        "theme": "civilisation_history_C2",
        "emoji": "🌋",
        "form": "noun", "classification": "regular",
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
        "word": "mimesis",
        "level": "proficiency",
        "theme": "aesthetics_criticism_C2",
        "emoji": "🎭",
        "form": "noun", "classification": "regular",
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
        "word": "defamiliarisation",
        "level": "proficiency",
        "theme": "aesthetics_criticism_C2",
        "emoji": "🌀",
        "form": "noun", "classification": "regular",
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
        "word": "the sublime",
        "level": "proficiency",
        "theme": "aesthetics_criticism_C2",
        "emoji": "🏔️",
        "form": "noun", "classification": "regular",
        "transcription": "ðə səˈblaɪm",
        "definitions": [
            {
                "text": "An aesthetic quality producing awe mixed with fear at something vast or overwhelming.",
                "examples": [
                    "Burke and Kant gave very different accounts of the sublime."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "awesome vastness"
    },
{
        "word": "kitsch",
        "level": "proficiency",
        "theme": "aesthetics_criticism_C2",
        "emoji": "🦩",
        "form": "noun", "classification": "regular",
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
    },
{}
];
})();
