(function() {
    const data = [
    {
        "id": "en_advanced_discourse_argument_verb_interrogate",
        "word": "interrogate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "interrogating",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_problematise",
        "word": "problematise",
        "emoji": "❓",
        "subtext": "problematise a concept / problematise the idea / problematise assumptions",
        "form": "verb",
        "transcription": "🇬🇧 ˈprɒbləmətaɪz | 🇺🇸 ˈprɑːbləmətaɪz",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "problematising",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_contextualise",
        "word": "contextualise",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "contextualising",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_theorise",
        "word": "theorise",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "theorising",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_elucidate",
        "word": "elucidate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "elucidating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_posit",
        "word": "posit",
        "emoji": "📍",
        "subtext": "posit a theory / posit that / posit the existence of",
        "form": "verb",
        "transcription": "🇬🇧 ˈpɒzɪt | 🇺🇸 ˈpɑːzɪt",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "positing",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_extrapolate",
        "word": "extrapolate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "extrapolating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_hypothesise",
        "word": "hypothesise",
        "emoji": "🧪",
        "subtext": "hypothesise that / hypothesise a connection / working hypothesis",
        "form": "verb",
        "transcription": "🇬🇧 haɪˈpɒθəsaɪz | 🇺🇸 haɪˈpɑːθəsaɪz",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "hypothesising",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_coerce",
        "word": "coerce",
        "emoji": "⛓️",
        "subtext": "coerce someone into / coercive pressure / coerce compliance",
        "form": "verb",
        "transcription": "🇬🇧 kəʊˈɜːs | 🇺🇸 koʊˈɜːs",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "coercing",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_manipulate",
        "word": "manipulate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "manipulating",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_undermine",
        "word": "undermine",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "undermining",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_legitimise",
        "word": "legitimise",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "legitimising",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_co-opt",
        "word": "co-opt",
        "emoji": "🤝",
        "subtext": "co-opt a movement / co-opt language / be co-opted by",
        "form": "verb",
        "transcription": "🇬🇧 kəʊˈɒpt | 🇺🇸 koʊˈɑːpt",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "co-opting",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_exert",
        "word": "exert",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "exerting",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_consolidate",
        "word": "consolidate",
        "emoji": "🧱",
        "subtext": "consolidate power / consolidate a position / consolidate gains",
        "form": "verb",
        "transcription": "🇬🇧 kənˈsɒlɪdeɪt | 🇺🇸 kənˈsɑːlɪdeɪt",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "consolidating",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_compel",
        "word": "compel",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "compeling",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_sociology_structures_c1_verb_perpetuate",
        "word": "perpetuate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "perpetuating",
        "lang": "en",
        "level": "advanced",
        "theme": "sociology_structures_c1",
        "sub_theme": null
    },
    {
        "id": "en_advanced_sociology_structures_c1_verb_normalise",
        "word": "normalise",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "normalising",
        "lang": "en",
        "level": "advanced",
        "theme": "sociology_structures_c1",
        "sub_theme": null
    },
    {
        "id": "en_advanced_sociology_structures_c1_verb_reinforce",
        "word": "reinforce",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "reinforcing",
        "lang": "en",
        "level": "advanced",
        "theme": "sociology_structures_c1",
        "sub_theme": null
    },
    {
        "id": "en_advanced_sociology_structures_c1_verb_resist",
        "word": "resist",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "resisting",
        "lang": "en",
        "level": "advanced",
        "theme": "sociology_structures_c1",
        "sub_theme": null
    },
    {
        "id": "en_advanced_discourse_argument_verb_challenge",
        "word": "challenge",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "challenging",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_endorse",
        "word": "endorse",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "endorsing",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_emotions_verb_internalise",
        "word": "internalise",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "internalising",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_advanced_emotions_verb_project",
        "word": "project",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "projecting",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_advanced_emotions_verb_rationalise",
        "word": "rationalise",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "rationalising",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_advanced_emotions_verb_suppress",
        "word": "suppress",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "suppressing",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_advanced_emotions_verb_repress",
        "word": "repress",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "repressing",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_advanced_emotions_verb_displace",
        "word": "displace",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "displacing",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_advanced_discourse_argument_verb_nuance",
        "word": "nuance",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "nuancing",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null
    },
    {
        "id": "en_advanced_discourse_argument_verb_qualify",
        "word": "qualify",
        "emoji": "🏷️",
        "subtext": "qualify a statement / with the caveat / qualifying remark",
        "form": "verb",
        "transcription": "🇬🇧 ˈkwɒlɪfaɪ | 🇺🇸 ˈkwɑːlɪfaɪ",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "qualifying",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null
    },
    {
        "id": "en_advanced_discourse_argument_verb_reconcile",
        "word": "reconcile",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "reconciling",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null
    },
    {
        "id": "en_advanced_discourse_argument_verb_unpack",
        "word": "unpack",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "unpacking",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_articulate",
        "word": "articulate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "articulating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_elaborate",
        "word": "elaborate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "elaborating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_abolish",
        "word": "abolish",
        "emoji": "🚫",
        "subtext": "abolish a law / abolish the death penalty / be abolished",
        "form": "verb",
        "transcription": "🇬🇧 əˈbɒlɪʃ | 🇺🇸 əˈbɑːlɪʃ",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "abolishing",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_accelerate",
        "word": "accelerate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "accelerating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_adhere",
        "word": "adhere",
        "emoji": "📎",
        "subtext": "adhere to a rule / adhere to a principle / strict adherence",
        "form": "verb",
        "transcription": "🇬🇧 ədˈhɪə | 🇺🇸 ədˈhɪər",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "adhering",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_advocate",
        "word": "advocate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "advocating",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_allocate",
        "word": "allocate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "allocating",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_amend",
        "word": "amend",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "amending",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_assert",
        "word": "assert",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "asserting",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_attain",
        "word": "attain",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "attaining",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_cease",
        "word": "cease",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "ceasing",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_characterise",
        "word": "characterise",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "characterising",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_commission",
        "word": "commission",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "commissioning",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_comprise",
        "word": "comprise",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "comprising",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_conceal",
        "word": "conceal",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "concealing",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_emotions_verb_confront",
        "word": "confront",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "confronting",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_advanced_emotions_verb_contemplate",
        "word": "contemplate",
        "emoji": "🧘",
        "subtext": "contemplate a change / contemplate doing / contemplate the future",
        "form": "verb",
        "transcription": "🇬🇧 ˈkɒntəmpleɪt | 🇺🇸 ˈkɑːntəmpleɪt",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "contemplating",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_advanced_discourse_argument_verb_contend",
        "word": "contend",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "contending",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_convey",
        "word": "convey",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "conveying",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_cultivate",
        "word": "cultivate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "cultivating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_work_verb_denounce",
        "word": "denounce",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "denouncing",
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_devote",
        "word": "devote",
        "emoji": "❤️",
        "subtext": "devote time to / devote yourself to / be devoted to",
        "form": "verb",
        "transcription": "🇬🇧 dɪˈvəʊt | 🇺🇸 dɪˈvoʊt",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "devoting",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_embrace",
        "word": "embrace",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "embracing",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_facilitate",
        "word": "facilitate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "facilitating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_generate",
        "word": "generate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "generating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_hinder",
        "word": "hinder",
        "emoji": "🚧",
        "subtext": "hinder progress / hinder growth / hinder someone from doing",
        "form": "verb",
        "transcription": "🇬🇧 ˈhɪndə | 🇺🇸 ˈhɪndər",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "hindering",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_initiate",
        "word": "initiate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "initiating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_mitigate",
        "word": "mitigate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "mitigating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_negotiate",
        "word": "negotiate",
        "emoji": "🤝",
        "subtext": "negotiate terms / negotiate a deal / negotiate a salary",
        "form": "verb",
        "transcription": "🇬🇧 nɪˈɡəʊʃieɪt | 🇺🇸 nɪˈɡoʊʃieɪt",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "negotiating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_give_way_to",
        "word": "give way to",
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
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_discourse_argument_verb_set_out",
        "word": "set out",
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
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null
    },
    {
        "id": "en_advanced_discourse_argument_verb_bear_out",
        "word": "bear out",
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
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null
    },
    {
        "id": "en_advanced_language_verb_bring_about",
        "word": "bring about",
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
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_advanced_discourse_argument_verb_call_into_question",
        "word": "call into question",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "call into questioning",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null
    },
    {
        "id": "en_advanced_sociology_structures_c1_verb_commodify",
        "word": "commodify",
        "emoji": "🏷️",
        "subtext": "commodify relationships / commodify culture / process of commodification",
        "form": "verb",
        "transcription": "🇬🇧 kəˈmɒdɪfaɪ | 🇺🇸 kəˈmɑːdɪfaɪ",
        "definitions": [
            {
                "text": "To treat something as a commercial product, especially something that should not be.",
                "examples": [
                    "Modern culture tends to commodify personal relationships."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "commodified",
        "v3": "commodified",
        "group": "regular",
        "auxiliary": "have",
        "v4": "commodifying",
        "lang": "en",
        "level": "advanced",
        "theme": "sociology_structures_c1",
        "sub_theme": null
    },
    {
        "id": "en_advanced_moral_philosophy_verb_instrumentalise",
        "word": "instrumentalise",
        "emoji": "🛠️",
        "subtext": "instrumentalise people / instrumentalise an idea / purely instrumental",
        "form": "verb",
        "transcription": "ˌɪnstrʊˈmentəlaɪz",
        "definitions": [
            {
                "text": "To use a person or concept purely as a means to achieve an end.",
                "examples": [
                    "She argued that performance reviews instrumentalise employees."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "instrumentalised",
        "v3": "instrumentalised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "instrumentalising",
        "lang": "en",
        "level": "advanced",
        "theme": "moral_philosophy",
        "sub_theme": null
    },
    {
        "id": "en_advanced_emotions_verb_sublimate",
        "word": "sublimate",
        "emoji": "⚗️",
        "subtext": "sublimate desires / sublimate aggression / psychological sublimation",
        "form": "verb",
        "transcription": "ˈsʌblɪmeɪt",
        "definitions": [
            {
                "text": "To redirect a desire or impulse into something socially acceptable.",
                "examples": [
                    "Freud argued that art allows us to sublimate aggressive drives."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sublimated",
        "v3": "sublimated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "sublimating",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_advanced_discourse_argument_verb_elide",
        "word": "elide",
        "emoji": "🌫️",
        "subtext": "elide distinctions / elide differences / elide details",
        "form": "verb",
        "transcription": "ɪˈlaɪd",
        "definitions": [
            {
                "text": "To omit or ignore a distinction; to merge or obscure differences.",
                "examples": [
                    "The report elides the distinction between correlation and causation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "elided",
        "v3": "elided",
        "group": "regular",
        "auxiliary": "have",
        "v4": "eliding",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null
    },
    {
        "id": "en_advanced_sociology_structures_c1_verb_valorise",
        "word": "valorise",
        "emoji": "💎",
        "subtext": "valorise productivity / valorise tradition / valorise the individual",
        "form": "verb",
        "transcription": "ˈvæləraɪz",
        "definitions": [
            {
                "text": "To give or assign value to something, often in a cultural or ideological context.",
                "examples": [
                    "Contemporary culture valorises productivity above all else."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "valorised",
        "v3": "valorised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "valorising",
        "lang": "en",
        "level": "advanced",
        "theme": "sociology_structures_c1",
        "sub_theme": null
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
})();