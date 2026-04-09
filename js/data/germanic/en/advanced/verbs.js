(function() {
    const data = [
        {
            "word": "interrogate",
            "level": "advanced",
            "theme": "discourse_argument_C1",
            "emoji": "🔍",
            "subtext": "interrogate assumptions / interrogate data / interrogate a text",
            "form": "verb",
            "transcription": "ɪnˈterəɡeɪt",
            "definitions": [
                {
                    "text": "To question something very closely and critically.",
                    "examples": [
                        "We need to interrogate the assumptions behind this policy."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "interrogated",
            "v3": "interrogated",
            "group": "regular"
        },
        {
            "word": "problematise",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "❓",
            "subtext": "problematise a concept / problematise the idea / problematise assumptions",
            "form": "verb",
            "transcription": "ˈprɒbləmətaɪz",
            "definitions": [
                {
                    "text": "To treat something as a problem worthy of critical analysis.",
                    "examples": [
                        "The seminar sought to problematise the concept of meritocracy."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "problematised",
            "v3": "problematised",
            "group": "regular"
        },
        {
            "word": "contextualise",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "🖼️",
            "subtext": "contextualise findings / contextualise within / contextualise an argument",
            "form": "verb",
            "transcription": "kənˈtekstʃuəlaɪz",
            "definitions": [
                {
                    "text": "To place something in its broader context to aid understanding.",
                    "examples": [
                        "We must contextualise these statistics within a global framework."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "contextualised",
            "v3": "contextualised",
            "group": "regular"
        },
        {
            "word": "theorise",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "🎓",
            "subtext": "theorise about / theorise that / theorise a connection",
            "form": "verb",
            "transcription": "ˈθɪəraɪz",
            "definitions": [
                {
                    "text": "To develop or propose a theory about something.",
                    "examples": [
                        "He theorised that social media amplifies existing inequalities."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "theorised",
            "v3": "theorised",
            "group": "regular"
        },
        {
            "word": "elucidate",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "💡",
            "subtext": "elucidate a point / elucidate the relationship / help elucidate",
            "form": "verb",
            "transcription": "ɪˈluːsɪdeɪt",
            "definitions": [
                {
                    "text": "To make something clear by explaining it in detail.",
                    "examples": [
                        "The paper elucidates the relationship between poverty and health."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "elucidated",
            "v3": "elucidated",
            "group": "regular"
        },
        {
            "word": "posit",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "📍",
            "subtext": "posit a theory / posit that / posit the existence of",
            "form": "verb",
            "transcription": "ˈpɒzɪt",
            "definitions": [
                {
                    "text": "To suggest or assume the existence of something as a basis for argument.",
                    "examples": [
                        "She posits that late-stage capitalism generates its own critique."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "posited",
            "v3": "posited",
            "group": "regular"
        },
        {
            "word": "extrapolate",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "📈",
            "subtext": "extrapolate from / extrapolate data / extrapolate conclusions",
            "form": "verb",
            "transcription": "ɪkˈstræpəleɪt",
            "definitions": [
                {
                    "text": "To extend conclusions from known data to unknown situations.",
                    "examples": [
                        "It is dangerous to extrapolate from one country's experience."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "extrapolated",
            "v3": "extrapolated",
            "group": "regular"
        },
        {
            "word": "hypothesise",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "🧪",
            "subtext": "hypothesise that / hypothesise a connection / working hypothesis",
            "form": "verb",
            "transcription": "haɪˈpɒθəsaɪz",
            "definitions": [
                {
                    "text": "To put forward a hypothesis or tentative explanation.",
                    "examples": [
                        "The researchers hypothesised a link between sleep and decision quality."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "hypothesised",
            "v3": "hypothesised",
            "group": "regular"
        },
        {
            "word": "coerce",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "⛓️",
            "subtext": "coerce someone into / coercive pressure / coerce compliance",
            "form": "verb",
            "transcription": "kəʊˈɜːs",
            "definitions": [
                {
                    "text": "To force someone to do something by using threats or pressure.",
                    "examples": [
                        "Workers claimed they were coerced into signing the new contracts."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "coerced",
            "v3": "coerced",
            "group": "regular"
        },
        {
            "word": "manipulate",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "🕹️",
            "subtext": "manipulate data / manipulate someone / feel manipulated",
            "form": "verb",
            "transcription": "məˈnɪpjuleɪt",
            "definitions": [
                {
                    "text": "To control someone or something cleverly and dishonestly.",
                    "examples": [
                        "The data had been manipulated to support the desired conclusion."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "manipulated",
            "v3": "manipulated",
            "group": "regular"
        },
        {
            "word": "undermine",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "⛏️",
            "subtext": "undermine confidence / undermine authority / undermine a position",
            "form": "verb",
            "transcription": "ˌʌndəˈmaɪn",
            "definitions": [
                {
                    "text": "To weaken or damage something gradually or insidiously.",
                    "examples": [
                        "The leaks undermined confidence in the leadership team."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "undermined",
            "v3": "undermined",
            "group": "regular"
        },
        {
            "word": "legitimise",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "✅",
            "subtext": "legitimise a position / legitimise violence / lend legitimacy",
            "form": "verb",
            "transcription": "lɪˈdʒɪtɪmaɪz",
            "definitions": [
                {
                    "text": "To make something appear acceptable or lawful.",
                    "examples": [
                        "Media coverage can legitimise extreme political positions."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "legitimised",
            "v3": "legitimised",
            "group": "regular"
        },
        {
            "word": "co-opt",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "🤝",
            "subtext": "co-opt a movement / co-opt language / be co-opted by",
            "form": "verb",
            "transcription": "kəʊˈɒpt",
            "definitions": [
                {
                    "text": "To absorb someone or something into a group, often to neutralise opposition.",
                    "examples": [
                        "The government co-opted the language of protest to justify the policy."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "co-opted",
            "v3": "co-opted",
            "group": "regular"
        },
        {
            "word": "exert",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "💪",
            "subtext": "exert pressure / exert influence / exert control",
            "form": "verb",
            "transcription": "ɪɡˈzɜːt",
            "definitions": [
                {
                    "text": "To apply force, influence or pressure.",
                    "examples": [
                        "Corporations exert enormous influence over government policy."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "exerted",
            "v3": "exerted",
            "group": "regular"
        },
        {
            "word": "consolidate",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "🧱",
            "subtext": "consolidate power / consolidate a position / consolidate gains",
            "form": "verb",
            "transcription": "kənˈsɒlɪdeɪt",
            "definitions": [
                {
                    "text": "To combine things to make them stronger or more secure.",
                    "examples": [
                        "The merger consolidated their position as the market leader."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "consolidated",
            "v3": "consolidated",
            "group": "regular"
        },
        {
            "word": "compel",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "⚖️",
            "subtext": "compel someone to / feel compelled / compelling evidence",
            "form": "verb",
            "transcription": "kəmˈpel",
            "definitions": [
                {
                    "text": "To force someone to do something.",
                    "examples": [
                        "The evidence compelled the committee to reconsider its position."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "compelled",
            "v3": "compelled",
            "group": "regular"
        },
        {
            "word": "perpetuate",
            "level": "advanced",
            "theme": "sociology_structures_C1",
            "emoji": "🔄",
            "subtext": "perpetuate a myth / perpetuate inequality / perpetuate a cycle",
            "form": "verb",
            "transcription": "pəˈpetʃueɪt",
            "definitions": [
                {
                    "text": "To make something continue indefinitely, especially something bad.",
                    "examples": [
                        "Stereotyping perpetuates inequality across generations."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "perpetuated",
            "v3": "perpetuated",
            "group": "regular"
        },
        {
            "word": "normalise",
            "level": "advanced",
            "theme": "sociology_structures_C1",
            "emoji": "📏",
            "subtext": "normalise a behaviour / normalise the idea / increasingly normalised",
            "form": "verb",
            "transcription": "ˈnɔːməlaɪz",
            "definitions": [
                {
                    "text": "To cause something unusual to be regarded as normal.",
                    "examples": [
                        "Social media has normalised constant availability."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "normalised",
            "v3": "normalised",
            "group": "regular"
        },
        {
            "word": "reinforce",
            "level": "advanced",
            "theme": "sociology_structures_C1",
            "emoji": "🏗️",
            "subtext": "reinforce a belief / reinforce inequality / mutually reinforce",
            "form": "verb",
            "transcription": "ˌriːɪnˈfɔːs",
            "definitions": [
                {
                    "text": "To strengthen or support something already existing.",
                    "examples": [
                        "Poor pay structures reinforce the gender pay gap."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "reinforced",
            "v3": "reinforced",
            "group": "regular"
        },
        {
            "word": "resist",
            "level": "advanced",
            "theme": "sociology_structures_C1",
            "emoji": "🛡️",
            "subtext": "resist change / resist pressure / offer resistance",
            "form": "verb",
            "transcription": "rɪˈzɪst",
            "definitions": [
                {
                    "text": "To oppose or struggle against something.",
                    "examples": [
                        "Workers resisted the attempts to increase surveillance."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "resisted",
            "v3": "resisted",
            "group": "regular"
        },
        {
            "word": "challenge",
            "level": "advanced",
            "theme": "discourse_argument_C1",
            "emoji": "🥊",
            "subtext": "challenge assumptions / challenge authority / challenge the status quo",
            "form": "verb",
            "transcription": "ˈtʃælɪndʒ",
            "definitions": [
                {
                    "text": "To question the validity or truth of something.",
                    "examples": [
                        "She challenged the premise of the argument itself."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "challenged",
            "v3": "challenged",
            "group": "regular"
        },
        {
            "word": "endorse",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "👍",
            "subtext": "endorse a position / endorse a candidate / officially endorse",
            "form": "verb",
            "transcription": "ɪnˈdɔːs",
            "definitions": [
                {
                    "text": "To officially approve or support something.",
                    "examples": [
                        "The union endorsed the new working conditions agreement."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "endorsed",
            "v3": "endorsed",
            "group": "regular"
        },
        {
            "word": "internalise",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🧠",
            "subtext": "internalise values / internalise criticism / deeply internalised",
            "form": "verb",
            "transcription": "ɪnˈtɜːnəlaɪz",
            "definitions": [
                {
                    "text": "To absorb and accept ideas or values as one's own.",
                    "examples": [
                        "He internalised the belief that hard work always leads to success."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "internalised",
            "v3": "internalised",
            "group": "regular"
        },
        {
            "word": "project",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🎭",
            "subtext": "project feelings onto / project blame / psychological projection",
            "form": "verb",
            "transcription": "prəˈdʒekt",
            "definitions": [
                {
                    "text": "To attribute one's own feelings to someone else.",
                    "examples": [
                        "She accused him of projecting his own anxieties onto the team."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "projected",
            "v3": "projected",
            "group": "regular"
        },
        {
            "word": "rationalise",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🧐",
            "subtext": "rationalise a decision / rationalise behaviour / rationalise fear",
            "form": "verb",
            "transcription": "ˈræʃnəlaɪz",
            "definitions": [
                {
                    "text": "To attempt to explain one's behaviour with plausible but false reasons.",
                    "examples": [
                        "He rationalised his decision to stay in the bad job as loyalty."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "rationalised",
            "v3": "rationalised",
            "group": "regular"
        },
        {
            "word": "suppress",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🤐",
            "subtext": "suppress emotions / suppress information / hard to suppress",
            "form": "verb",
            "transcription": "səˈpres",
            "definitions": [
                {
                    "text": "To consciously prevent a feeling or information from being expressed.",
                    "examples": [
                        "She suppressed her frustration and continued the meeting."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "suppressed",
            "v3": "suppressed",
            "group": "regular"
        },
        {
            "word": "repress",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🧠",
            "subtext": "repress memories / repress desires / psychologically repressed",
            "form": "verb",
            "transcription": "rɪˈpres",
            "definitions": [
                {
                    "text": "To prevent thoughts from entering conscious awareness.",
                    "examples": [
                        "Freud argued that we repress desires that are socially unacceptable."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "repressed",
            "v3": "repressed",
            "group": "regular"
        },
        {
            "word": "displace",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "⚗️",
            "subtext": "displace anger / displacement activity / emotionally displaced",
            "form": "verb",
            "transcription": "dɪsˈpleɪs",
            "definitions": [
                {
                    "text": "To shift an emotion from its true target to a safer one.",
                    "examples": [
                        "He displaced his anger at his employer onto his family."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "displaced",
            "v3": "displaced",
            "group": "regular"
        },
        {
            "word": "nuance",
            "level": "advanced",
            "theme": "discourse_argument_C1",
            "emoji": "🎨",
            "subtext": "nuance an argument / a nuanced position / lack nuance",
            "form": "verb",
            "transcription": "ˈnjuːɑːns",
            "definitions": [
                {
                    "text": "To give subtle and fine distinctions to an argument or position.",
                    "examples": [
                        "She nuanced her argument to acknowledge the complexity involved."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "nuanced",
            "v3": "nuanced",
            "group": "regular"
        },
        {
            "word": "qualify",
            "level": "advanced",
            "theme": "discourse_argument_C1",
            "emoji": "🏷️",
            "subtext": "qualify a statement / with the caveat / qualifying remark",
            "form": "verb",
            "transcription": "ˈkwɒlɪfaɪ",
            "definitions": [
                {
                    "text": "To modify a statement to limit its scope or add conditions.",
                    "examples": [
                        "He qualified his optimism with a list of serious reservations."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "qualified",
            "v3": "qualified",
            "group": "regular"
        },
        {
            "word": "reconcile",
            "level": "advanced",
            "theme": "discourse_argument_C1",
            "emoji": "⚖️",
            "subtext": "reconcile ideas / hard to reconcile / reconcile differences",
            "form": "verb",
            "transcription": "ˈrekənsaɪl",
            "definitions": [
                {
                    "text": "To make two apparently conflicting things compatible.",
                    "examples": [
                        "She struggled to reconcile her ambitions with her values."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "reconciled",
            "v3": "reconciled",
            "group": "regular"
        },
        {
            "word": "unpack",
            "level": "advanced",
            "theme": "discourse_argument_C1",
            "emoji": "📦",
            "subtext": "unpack an idea / unpack assumptions / unpack the implications",
            "form": "verb",
            "transcription": "ʌnˈpæk",
            "definitions": [
                {
                    "text": "To examine the components or implications of something in detail.",
                    "examples": [
                        "Let us unpack what is meant by the term 'flexible working'."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "unpacked",
            "v3": "unpacked",
            "group": "regular"
        },
        {
            "word": "articulate",
            "level": "advanced",
            "theme": "language_persuasion_C1",
            "emoji": "🗣️",
            "subtext": "articulate an idea / well-articulated / articulate clearly",
            "form": "verb",
            "transcription": "ɑːˈtɪkjuleɪt",
            "definitions": [
                {
                    "text": "To express thoughts or feelings fluently and coherently.",
                    "examples": [
                        "He articulates the problem more clearly than anyone else."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "articulated",
            "v3": "articulated",
            "group": "regular"
        },
        {
            "word": "elaborate",
            "level": "advanced",
            "theme": "language_persuasion_C1",
            "emoji": "➕",
            "subtext": "elaborate on / elaborate further / need to elaborate",
            "form": "verb",
            "transcription": "ɪˈlæbəreɪt",
            "definitions": [
                {
                    "text": "To add more detail or explanation to something said or written.",
                    "examples": [
                        "Could you elaborate further on that point about wellbeing?"
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "elaborated",
            "v3": "elaborated",
            "group": "regular"
        },
        {
            "word": "abolish",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "🚫",
            "subtext": "abolish a law / abolish the death penalty / be abolished",
            "form": "verb",
            "transcription": "əˈbɒlɪʃ",
            "definitions": [
                {
                    "text": "To formally put an end to a law, system or institution.",
                    "examples": [
                        "The committee voted to abolish the outdated rule."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "abolished",
            "v3": "abolished",
            "group": "regular"
        },
        {
            "word": "accelerate",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🚀",
            "subtext": "accelerate growth / accelerate change / accelerate the process",
            "form": "verb",
            "transcription": "əkˈseləreɪt",
            "definitions": [
                {
                    "text": "To increase the speed of something; to cause to happen sooner.",
                    "examples": [
                        "The pandemic accelerated the shift to remote working by years."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "accelerated",
            "v3": "accelerated",
            "group": "regular"
        },
        {
            "word": "adhere",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "📎",
            "subtext": "adhere to a rule / adhere to a principle / strict adherence",
            "form": "verb",
            "transcription": "ədˈhɪə",
            "definitions": [
                {
                    "text": "To follow or stick to a rule or principle.",
                    "examples": [
                        "The company must adhere strictly to data protection regulations."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "adhered",
            "v3": "adhered",
            "group": "regular"
        },
        {
            "word": "advocate",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "📢",
            "subtext": "advocate for / advocate a position / be an advocate of",
            "form": "verb",
            "transcription": "ˈædvəkeɪt",
            "definitions": [
                {
                    "text": "To publicly support or recommend a policy or cause.",
                    "examples": [
                        "She advocates for better mental health support in workplaces."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "advocated",
            "v3": "advocated",
            "group": "regular"
        },
        {
            "word": "allocate",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "💰",
            "subtext": "allocate resources / allocate funding / be allocated to",
            "form": "verb",
            "transcription": "ˈæləkeɪt",
            "definitions": [
                {
                    "text": "To decide that something is to be used for a purpose.",
                    "examples": [
                        "More resources were allocated to the struggling marketing team."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "allocated",
            "v3": "allocated",
            "group": "regular"
        },
        {
            "word": "amend",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "📝",
            "subtext": "amend a law / amend a contract / propose an amendment",
            "form": "verb",
            "transcription": "əˈmend",
            "definitions": [
                {
                    "text": "To change a law, document or statement slightly.",
                    "examples": [
                        "The board voted to amend the employment contract conditions."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "amended",
            "v3": "amended",
            "group": "regular"
        },
        {
            "word": "assert",
            "level": "advanced",
            "theme": "language_persuasion_C1",
            "emoji": "‼️",
            "subtext": "assert a right / assert yourself / assertive communication",
            "form": "verb",
            "transcription": "əˈsɜːt",
            "definitions": [
                {
                    "text": "To state something confidently and directly.",
                    "examples": [
                        "She asserted her right to see the original documents."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "asserted",
            "v3": "asserted",
            "group": "regular"
        },
        {
            "word": "attain",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🏆",
            "subtext": "attain a qualification / attain a goal / attain a standard",
            "form": "verb",
            "transcription": "əˈteɪn",
            "definitions": [
                {
                    "text": "To achieve something after effort.",
                    "examples": [
                        "He attained a professional qualification while working full-time."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "attained",
            "v3": "attained",
            "group": "regular"
        },
        {
            "word": "cease",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🛑",
            "subtext": "cease operations / cease to exist / cease trading",
            "form": "verb",
            "transcription": "siːs",
            "definitions": [
                {
                    "text": "To stop doing something; to come to an end.",
                    "examples": [
                        "The company ceased operations in three markets last year."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "ceased",
            "v3": "ceased",
            "group": "regular"
        },
        {
            "word": "characterise",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🖋️",
            "subtext": "characterise something as / be characterised by / characterise a period",
            "form": "verb",
            "transcription": "ˈkærəktəraɪz",
            "definitions": [
                {
                    "text": "To describe the nature or key features of something.",
                    "examples": [
                        "The period was characterised by rapid economic uncertainty."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "characterised",
            "v3": "characterised",
            "group": "regular"
        },
        {
            "word": "commission",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "📜",
            "subtext": "commission a report / commission research / be commissioned to",
            "form": "verb",
            "transcription": "kəˈmɪʃn",
            "definitions": [
                {
                    "text": "To formally order or authorise someone to produce something.",
                    "examples": [
                        "The government commissioned an independent review of the policy."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "commissioned",
            "v3": "commissioned",
            "group": "regular"
        },
        {
            "word": "comprise",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🧩",
            "subtext": "comprise of / be comprised of / comprise several elements",
            "form": "verb",
            "transcription": "kəmˈpraɪz",
            "definitions": [
                {
                    "text": "To consist of or be made up of parts.",
                    "examples": [
                        "The board comprises seven independent non-executive directors."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "comprised",
            "v3": "comprised",
            "group": "regular"
        },
        {
            "word": "conceal",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🙈",
            "subtext": "conceal information / conceal the truth / deliberately conceal",
            "form": "verb",
            "transcription": "kənˈsiːl",
            "definitions": [
                {
                    "text": "To hide something or keep it secret.",
                    "examples": [
                        "The report concealed several significant conflicts of interest."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "concealed",
            "v3": "concealed",
            "group": "regular"
        },
        {
            "word": "confront",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🤜",
            "subtext": "confront a problem / confront someone / be confronted with",
            "form": "verb",
            "transcription": "kənˈfrʌnt",
            "definitions": [
                {
                    "text": "To face a problem or person directly.",
                    "examples": [
                        "She confronted the difficult issue at the board meeting."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "confronted",
            "v3": "confronted",
            "group": "regular"
        },
        {
            "word": "contemplate",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🧘",
            "subtext": "contemplate a change / contemplate doing / contemplate the future",
            "form": "verb",
            "transcription": "ˈkɒntəmpleɪt",
            "definitions": [
                {
                    "text": "To think about something carefully; to consider doing it.",
                    "examples": [
                        "He is contemplating a complete career change at forty."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "contemplated",
            "v3": "contemplated",
            "group": "regular"
        },
        {
            "word": "contend",
            "level": "advanced",
            "theme": "discourse_argument_C1",
            "emoji": "🗣️",
            "subtext": "contend that / strongly contend / the argument contends",
            "form": "verb",
            "transcription": "kənˈtend",
            "definitions": [
                {
                    "text": "To argue or assert something strongly.",
                    "examples": [
                        "She contends that the new policy will widen inequality."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "contended",
            "v3": "contended",
            "group": "regular"
        },
        {
            "word": "convey",
            "level": "advanced",
            "theme": "language_persuasion_C1",
            "emoji": "✉️",
            "subtext": "convey a message / convey information / convey clearly",
            "form": "verb",
            "transcription": "kənˈveɪ",
            "definitions": [
                {
                    "text": "To communicate or make known a message or idea.",
                    "examples": [
                        "The email failed to convey the urgency of the situation."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "conveyed",
            "v3": "conveyed",
            "group": "regular"
        },
        {
            "word": "cultivate",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🌱",
            "subtext": "cultivate a skill / cultivate relationships / cultivate an interest",
            "form": "verb",
            "transcription": "ˈkʌltɪveɪt",
            "definitions": [
                {
                    "text": "To develop and nurture a skill, relationship or attitude.",
                    "examples": [
                        "She deliberately cultivated relationships with industry leaders."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "cultivated",
            "v3": "cultivated",
            "group": "regular"
        },
        {
            "word": "denounce",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "👎",
            "subtext": "denounce something / publicly denounce / denounce as unacceptable",
            "form": "verb",
            "transcription": "dɪˈnaʊns",
            "definitions": [
                {
                    "text": "To publicly criticise or condemn something.",
                    "examples": [
                        "The union denounced the new contract as deeply unfair."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "denounced",
            "v3": "denounced",
            "group": "regular"
        },
        {
            "word": "devote",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "❤️",
            "subtext": "devote time to / devote yourself to / be devoted to",
            "form": "verb",
            "transcription": "dɪˈvəʊt",
            "definitions": [
                {
                    "text": "To give time or effort exclusively to something.",
                    "examples": [
                        "He devoted three years to developing the new system."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "devoted",
            "v3": "devoted",
            "group": "regular"
        },
        {
            "word": "embrace",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🤗",
            "subtext": "embrace change / embrace an idea / embrace new technology",
            "form": "verb",
            "transcription": "ɪmˈbreɪs",
            "definitions": [
                {
                    "text": "To accept something enthusiastically.",
                    "examples": [
                        "The company enthusiastically embraced the new remote working model."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "embraced",
            "v3": "embraced",
            "group": "regular"
        },
        {
            "word": "facilitate",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🤝",
            "subtext": "facilitate a process / facilitate communication / facilitate change",
            "form": "verb",
            "transcription": "fəˈsɪlɪteɪt",
            "definitions": [
                {
                    "text": "To make something easier or help it happen.",
                    "examples": [
                        "Good leadership facilitates open and honest communication."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "facilitated",
            "v3": "facilitated",
            "group": "regular"
        },
        {
            "word": "generate",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "⚡",
            "subtext": "generate revenue / generate ideas / generate interest",
            "form": "verb",
            "transcription": "ˈdʒenəreɪt",
            "definitions": [
                {
                    "text": "To produce something; to create.",
                    "examples": [
                        "The new marketing strategy generated excellent results."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "generated",
            "v3": "generated",
            "group": "regular"
        },
        {
            "word": "hinder",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🚧",
            "subtext": "hinder progress / hinder growth / hinder someone from doing",
            "form": "verb",
            "transcription": "ˈhɪndə",
            "definitions": [
                {
                    "text": "To slow down or make something difficult.",
                    "examples": [
                        "Bureaucracy can seriously hinder innovation in large organisations."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "hindered",
            "v3": "hindered",
            "group": "regular"
        },
        {
            "word": "initiate",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "▶️",
            "subtext": "initiate a process / initiate a conversation / initiate change",
            "form": "verb",
            "transcription": "ɪˈnɪʃieɪt",
            "definitions": [
                {
                    "text": "To cause something to begin.",
                    "examples": [
                        "She initiated the performance review process six months early."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "initiated",
            "v3": "initiated",
            "group": "regular"
        },
        {
            "word": "mitigate",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🛡️",
            "subtext": "mitigate risk / mitigate the impact / mitigate against",
            "form": "verb",
            "transcription": "ˈmɪtɪɡeɪt",
            "definitions": [
                {
                    "text": "To make something less severe or serious.",
                    "examples": [
                        "The new policy aims to mitigate the impact on low earners."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "mitigated",
            "v3": "mitigated",
            "group": "regular"
        },
        {
            "word": "negotiate",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🤝",
            "subtext": "negotiate terms / negotiate a deal / negotiate a salary",
            "form": "verb",
            "transcription": "nɪˈɡəʊʃieɪt",
            "definitions": [
                {
                    "text": "To discuss to reach an agreement.",
                    "examples": [
                        "The union successfully negotiated better terms for all workers."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "negotiated",
            "v3": "negotiated",
            "group": "regular"
        },
        {
            "word": "give way to",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "⬇️",
            "subtext": "give way to pressure / give way to a trend",
            "form": "verb",
            "transcription": "ɡɪv weɪ tuː",
            "definitions": [
                {
                    "text": "To be replaced by something else; to yield to pressure.",
                    "examples": [
                        "Traditional offices slowly gave way to open-plan workspaces."
                    ]
                }
            ],
            "classification": "irregular",
            "aspect": "action",
            "v2": "gave way to",
            "v3": "given way to",
            "group": "irregular"
        },
        {
            "word": "set out",
            "level": "advanced",
            "theme": "discourse_argument_C1",
            "emoji": "🗺️",
            "subtext": "set out a plan / set out to achieve / set out clearly",
            "form": "verb",
            "transcription": "set aʊt",
            "definitions": [
                {
                    "text": "To begin a journey; to explain something in detail.",
                    "examples": [
                        "The document sets out the company's environmental commitments."
                    ]
                }
            ],
            "classification": "irregular",
            "aspect": "action",
            "v2": "set out",
            "v3": "set out",
            "group": "irregular"
        },
        {
            "word": "bear out",
            "level": "advanced",
            "theme": "discourse_argument_C1",
            "emoji": "✅",
            "subtext": "bear out a theory / be borne out by evidence",
            "form": "verb",
            "transcription": "beə aʊt",
            "definitions": [
                {
                    "text": "To confirm or support a theory or claim.",
                    "examples": [
                        "The results clearly bear out everything the report predicted."
                    ]
                }
            ],
            "classification": "irregular",
            "aspect": "action",
            "v2": "bore out",
            "v3": "borne out",
            "group": "irregular"
        },
        {
            "word": "bring about",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "✨",
            "subtext": "bring about change / bring about a result / bring about reform",
            "form": "verb",
            "transcription": "brɪŋ əˈbaʊt",
            "definitions": [
                {
                    "text": "To cause something to happen.",
                    "examples": [
                        "The new management brought about a major cultural change."
                    ]
                }
            ],
            "classification": "irregular",
            "aspect": "action",
            "v2": "brought about",
            "v3": "brought about",
            "group": "irregular"
        },
        {
            "word": "call into question",
            "level": "advanced",
            "theme": "discourse_argument_C1",
            "emoji": "❓",
            "subtext": "call into question / be called into question",
            "form": "verb",
            "transcription": "kɔːl ˈɪntə ˈkwestʃən",
            "definitions": [
                {
                    "text": "To cause doubt about something.",
                    "examples": [
                        "The new evidence calls into question the entire official account."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "called into question",
            "v3": "called into question",
            "group": "regular"
        }
    ];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
