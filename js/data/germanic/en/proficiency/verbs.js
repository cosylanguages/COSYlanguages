(function() {
    const data = [
        {
            "word": "reify",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🗿",
            "subtext": "reify a concept / reify the market / reification of labour",
            "form": "verb",
            "transcription": "ˈriːɪfaɪ",
            "definitions": [
                {
                    "text": "To treat an abstract concept as if it were a concrete, real thing.",
                    "examples": [
                        "Economic models reify market forces, making them appear natural and inevitable."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "reified",
            "v3": "reified",
            "group": "regular"
        },
        {
            "word": "sublimate",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🌫️",
            "subtext": "sublimate desire / sublimation of impulse / redirect into",
            "form": "verb",
            "transcription": "ˈsʌblɪmeɪt",
            "definitions": [
                {
                    "text": "To redirect a desire or impulse into a socially acceptable form.",
                    "examples": [
                        "He sublimated his political frustration into academic research."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "sublimated",
            "v3": "sublimated",
            "group": "regular"
        },
        {
            "word": "predicate",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🏗️",
            "subtext": "predicate on / predicate a claim / predicated on the assumption",
            "form": "verb",
            "transcription": "ˈprɛdɪkeɪt",
            "definitions": [
                {
                    "text": "To base a statement or action on a particular condition; to assert.",
                    "examples": [
                        "Her argument predicates a level of institutional trust that no longer exists."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "predicated",
            "v3": "predicated",
            "group": "regular"
        },
        {
            "word": "instantiate",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧱",
            "subtext": "instantiate a concept / instantiate in practice / concrete instantiation",
            "form": "verb",
            "transcription": "ɪnˈstænʃɪeɪt",
            "definitions": [
                {
                    "text": "To represent an abstract concept in a concrete example.",
                    "examples": [
                        "The case study instantiates the theory of regulatory capture."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "instantiated",
            "v3": "instantiated",
            "group": "regular"
        },
        {
            "word": "negate",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🚫",
            "subtext": "negate an argument / negate a right / dialectical negation",
            "form": "verb",
            "transcription": "nɪˈɡeɪt",
            "definitions": [
                {
                    "text": "To make something ineffective or reverse its effect.",
                    "examples": [
                        "The new clause effectively negates the right it appears to grant."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "negated",
            "v3": "negated",
            "group": "regular"
        },
        {
            "word": "transcend",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🌌",
            "subtext": "transcend limits / transcend categories / transcend the personal",
            "form": "verb",
            "transcription": "trænˈsɛnd",
            "definitions": [
                {
                    "text": "To go beyond the limits of something.",
                    "examples": [
                        "Great art transcends the historical moment of its creation."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "both",
            "v2": "transcended",
            "v3": "transcended",
            "group": "regular"
        },
        {
            "word": "mediate",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "⚖️",
            "subtext": "mediate between / mediate a conflict / socially mediated",
            "form": "verb",
            "transcription": "ˈmiːdieɪt",
            "definitions": [
                {
                    "text": "To act as an intermediary between two things or people; to modify a relationship.",
                    "examples": [
                        "Language mediates our relationship with reality."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "mediated",
            "v3": "mediated",
            "group": "regular"
        },
        {
            "word": "elide",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "✂️",
            "subtext": "elide a distinction / elide the difference / deliberately elide",
            "form": "verb",
            "transcription": "ɪˈlaɪd",
            "definitions": [
                {
                    "text": "To merge or omit something, especially a crucial distinction.",
                    "examples": [
                        "The report elides the difference between poverty and deprivation."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "elided",
            "v3": "elided",
            "group": "regular"
        },
        {
            "word": "obfuscate",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🌫️",
            "subtext": "obfuscate the truth / deliberate obfuscation / obfuscate with jargon",
            "form": "verb",
            "transcription": "🇬🇧 ˈɒbfʌskeɪt | 🇺🇸 ˈɑːbfʌskeɪt",
            "definitions": [
                {
                    "text": "To make something unclear or difficult to understand deliberately.",
                    "examples": [
                        "The technical language was used to obfuscate rather than clarify."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "obfuscated",
            "v3": "obfuscated",
            "group": "regular"
        },
        {
            "word": "conflate",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔀",
            "subtext": "conflate issues / conflate with / dangerously conflate",
            "form": "verb",
            "transcription": "kənˈfleɪt",
            "definitions": [
                {
                    "text": "To combine two distinct things as if they were the same.",
                    "examples": [
                        "The debate conflates immigration with illegal migration."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "conflated",
            "v3": "conflated",
            "group": "regular"
        },
        {
            "word": "invoke",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "📜",
            "subtext": "invoke a right / invoke precedent / invoke an argument",
            "form": "verb",
            "transcription": "🇬🇧 ɪnˈvəʊk | 🇺🇸 ɪnˈvoʊk",
            "definitions": [
                {
                    "text": "To call upon or cite something to support an argument.",
                    "examples": [
                        "She invoked the right to free speech to defend the publication."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "invoked",
            "v3": "invoked",
            "group": "regular"
        },
        {
            "word": "foreground",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🔦",
            "subtext": "foreground an issue / foreground a perspective / deliberately foreground",
            "form": "verb",
            "transcription": "ˈfɔːɡraʊnd",
            "definitions": [
                {
                    "text": "To make something the most prominent or important element.",
                    "examples": [
                        "The film foregrounds race as the central organising lens."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "foregrounded",
            "v3": "foregrounded",
            "group": "regular"
        },
        {
            "word": "recuperate",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🧽",
            "subtext": "recuperate a movement / be recuperated by / cultural recuperation",
            "form": "verb",
            "transcription": "rɪˈkuːpəreɪt",
            "definitions": [
                {
                    "text": "To absorb and neutralise subversive ideas within a dominant system.",
                    "examples": [
                        "The fashion industry recuperated punk's rebellious aesthetic."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "recuperated",
            "v3": "recuperated",
            "group": "regular"
        },
        {
            "word": "destabilise",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌪️",
            "subtext": "destabilise a regime / destabilise assumptions / deliberately destabilise",
            "form": "verb",
            "transcription": "ˌdiːˈsteɪbəlaɪz",
            "definitions": [
                {
                    "text": "To undermine the stability of a system, concept or position.",
                    "examples": [
                        "The argument destabilises the central premise of liberalism."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "destabilised",
            "v3": "destabilised",
            "group": "regular"
        },
        {
            "word": "commodify",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🏷️",
            "subtext": "commodify labour / commodify care / commodification of attention",
            "form": "verb",
            "transcription": "🇬🇧 kəˈmɒdɪfaɪ | 🇺🇸 kəˈmɑːdɪfaɪ",
            "definitions": [
                {
                    "text": "To treat something that is not a product as a commercial commodity.",
                    "examples": [
                        "The wellness industry commodifies mental health and self-care."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "commodified",
            "v3": "commodified",
            "group": "regular"
        },
        {
            "word": "instrumentalise",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🛠️",
            "subtext": "instrumentalise people / instrumentalise an idea / reduce to an instrument",
            "form": "verb",
            "transcription": "ˌɪnstrʊˈmɛntəlaɪz",
            "definitions": [
                {
                    "text": "To treat something as a mere tool or means to an end.",
                    "examples": [
                        "Critics argued that the policy instrumentalised workers' health."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "instrumentalised",
            "v3": "instrumentalised",
            "group": "regular"
        },
        {
            "word": "valorise",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🎖️",
            "subtext": "valorise labour / valorise a concept / be valorised by culture",
            "form": "verb",
            "transcription": "ˈvæləraɪz",
            "definitions": [
                {
                    "text": "To attribute value to something, especially in a cultural or ideological sense.",
                    "examples": [
                        "Modern culture valorises productivity at the expense of rest."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "valorised",
            "v3": "valorised",
            "group": "regular"
        },
        {
            "word": "fetishise",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🧿",
            "subtext": "fetishise an idea / commodity fetishism / fetishise growth",
            "form": "verb",
            "transcription": "ˈfɛtɪʃaɪz",
            "definitions": [
                {
                    "text": "To have an excessive reverence for something; or in Marxist theory, to misattribute social relations to objects.",
                    "examples": [
                        "Startup culture fetishises disruption as an end in itself."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "fetishised",
            "v3": "fetishised",
            "group": "regular"
        },
        {
            "word": "hegemonise",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "👑",
            "subtext": "hegemonise discourse / hegemonising tendency / resist hegemonisation",
            "form": "verb",
            "transcription": "hɪˈɡɛmənaɪz",
            "definitions": [
                {
                    "text": "To establish or extend dominance through cultural or ideological means.",
                    "examples": [
                        "A single platform cannot hegemonise public discourse without resistance.",
                        "One theoretical framework has come to hegemonise the field."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "hegemonised",
            "v3": "hegemonised",
            "group": "regular"
        },
        {
            "word": "alienate",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "⛓️",
            "subtext": "alienate someone / feel alienated / Marxist alienation",
            "form": "verb",
            "transcription": "ˈeɪliəneɪt",
            "definitions": [
                {
                    "text": "In Marxist theory, to separate workers from the product of their labour; more broadly, to cause estrangement.",
                    "examples": [
                        "Industrial working conditions alienate workers from any sense of craft."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "alienated",
            "v3": "alienated",
            "group": "regular"
        },
        {
            "word": "demarcate",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "📏",
            "subtext": "demarcate a boundary / clearly demarcate / demarcation line",
            "form": "verb",
            "transcription": "ˈdiːmɑːkeɪt",
            "definitions": [
                {
                    "text": "To establish the boundary or limits of something.",
                    "examples": [
                        "The law attempts to demarcate the line between regulation and censorship."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "demarcated",
            "v3": "demarcated",
            "group": "regular"
        },
        {
            "word": "delimit",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🚧",
            "subtext": "delimit the scope / delimit a concept / carefully delimited",
            "form": "verb",
            "transcription": "ˌdiːˈlɪmɪt",
            "definitions": [
                {
                    "text": "To determine the limits of something.",
                    "examples": [
                        "The study deliberately delimits its scope to avoid overgeneralisation."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "delimited",
            "v3": "delimited",
            "group": "regular"
        },
        {
            "word": "militate",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "⚖️",
            "subtext": "militate against / strongly militate / militate in favour of",
            "form": "verb",
            "transcription": "ˈmɪlɪteɪt",
            "definitions": [
                {
                    "text": "To be a powerful factor working against something.",
                    "examples": [
                        "The complexity of the system militates against effective reform."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "militated",
            "v3": "militated",
            "group": "regular"
        },
        {
            "word": "vitiate",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "emoji": "🧪",
            "subtext": "vitiate a claim / vitiate an argument / legally vitiated",
            "form": "verb",
            "transcription": "ˈvɪʃieɪt",
            "definitions": [
                {
                    "text": "To impair the quality or effectiveness of something; to invalidate.",
                    "examples": [
                        "The methodological flaw vitiates the entire study's conclusions."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "vitiated",
            "v3": "vitiated",
            "group": "regular"
        },
        {
            "word": "gainsay",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "emoji": "🗣️",
            "subtext": "difficult to gainsay / no one can gainsay / gainsay a claim",
            "form": "verb",
            "transcription": "ˌɡeɪnˈseɪ",
            "definitions": [
                {
                    "text": "To deny or contradict something.",
                    "examples": [
                        "It is difficult to gainsay the evidence presented by the committee."
                    ]
                }
            ],
            "classification": "irregular",
            "aspect": "action",
            "v2": "gainsaid",
            "v3": "gainsaid",
            "group": "irregular"
        },
        {
            "word": "abrogate",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🔨",
            "subtext": "abrogate an agreement / abrogate a treaty / unilateral abrogation",
            "form": "verb",
            "transcription": "ˈæbrəɡeɪt",
            "definitions": [
                {
                    "text": "To formally repeal or abolish a law or agreement.",
                    "examples": [
                        "The government sought to abrogate the trade agreement unilaterally."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "abrogated",
            "v3": "abrogated",
            "group": "regular"
        },
        {
            "word": "deconstruct",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🏚️",
            "subtext": "deconstruct an argument / deconstruct a text / Derridean deconstruction",
            "form": "verb",
            "transcription": "ˌdiːkənˈstrʌkt",
            "definitions": [
                {
                    "text": "To analyse the assumptions and contradictions within a text or argument.",
                    "examples": [
                        "She deconstructed the policy document to reveal its ideological assumptions."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "deconstructed",
            "v3": "deconstructed",
            "group": "regular"
        },
        {
            "word": "problematise",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "❓",
            "subtext": "problematise a concept / resist the urge to problematise / critically problematise",
            "form": "verb",
            "transcription": "🇬🇧 ˈprɒbləmətaɪz | 🇺🇸 ˈprɑːbləmətaɪz",
            "definitions": [
                {
                    "text": "To identify and articulate the problematic aspects of a concept or practice.",
                    "examples": [
                        "The lecture problematises the notion of individual choice in consumer society."
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
            "word": "unpack",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "📦",
            "subtext": "unpack an assumption / unpack the implications / carefully unpack",
            "form": "verb",
            "transcription": "ʌnˈpæk",
            "definitions": [
                {
                    "text": "To break down and examine the components and implications of something.",
                    "examples": [
                        "Before we proceed, let us unpack what we mean by accountability here."
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
            "word": "foreclose",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🚪",
            "subtext": "foreclose an option / foreclose debate / foreclose the possibility of",
            "form": "verb",
            "transcription": "🇬🇧 fɔːˈkləʊz | 🇺🇸 fɔːˈkloʊz",
            "definitions": [
                {
                    "text": "To prevent a possibility from being considered; to preclude.",
                    "examples": [
                        "The framing of the question forecloses the most interesting answers."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "foreclosed",
            "v3": "foreclosed",
            "group": "regular"
        },
        {
            "word": "dialecticise",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "☯️",
            "subtext": "dialecticise a binary / dialectical method / thesis and antithesis",
            "form": "verb",
            "transcription": "ˌdaɪəˈlɛktɪsaɪz",
            "definitions": [
                {
                    "text": "To approach something through the method of dialectical reasoning.",
                    "examples": [
                        "He dialecticises the opposition between freedom and security."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "dialecticised",
            "v3": "dialecticised",
            "group": "regular"
        },
        {
            "word": "contravene",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "📜",
            "subtext": "contravene a law / contravene regulations / contravene an agreement",
            "form": "verb",
            "transcription": "🇬🇧 ˌkɒntrəˈviːn | 🇺🇸 ˌkɑːntrəˈviːn",
            "definitions": [
                {
                    "text": "To act against a rule, law or agreement.",
                    "examples": [
                        "The decision was found to contravene EU competition law."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "contravened",
            "v3": "contravened",
            "group": "regular"
        },
        {
            "word": "subsume",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📂",
            "subtext": "subsume under / be subsumed by / subsume into a category",
            "form": "verb",
            "transcription": "səbˈsjuːm",
            "definitions": [
                {
                    "text": "To include or absorb something within a larger category.",
                    "examples": [
                        "His theory subsumes all previous accounts within a single framework."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "subsumed",
            "v3": "subsumed",
            "group": "regular"
        },
        {
            "word": "accentuate",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "💡",
            "subtext": "accentuate a difference / accentuate the positive / be accentuated by",
            "form": "verb",
            "transcription": "əkˈsentʃueɪt",
            "definitions": [
                {
                    "text": "To make something more prominent or noticeable.",
                    "examples": [
                        "The crisis accentuated existing inequalities across the workforce."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "accentuated",
            "v3": "accentuated",
            "group": "regular"
        },
        {
            "word": "acquiesce",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🤝",
            "subtext": "acquiesce to / acquiesce in / reluctant acquiescence",
            "form": "verb",
            "transcription": "ˌækwiˈes",
            "definitions": [
                {
                    "text": "To accept something without objecting.",
                    "examples": [
                        "He acquiesced to the board's decision despite strong reservations."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "acquiesced",
            "v3": "acquiesced",
            "group": "regular"
        },
        {
            "word": "alleviate",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🩹",
            "subtext": "alleviate suffering / alleviate poverty / alleviate pressure",
            "form": "verb",
            "transcription": "əˈliːvieɪt",
            "definitions": [
                {
                    "text": "To make a problem less severe.",
                    "examples": [
                        "The new policy did little to alleviate the housing crisis."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "alleviated",
            "v3": "alleviated",
            "group": "regular"
        },
        {
            "word": "circumvent",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🔄",
            "subtext": "circumvent the rules / circumvent a problem / circumvent controls",
            "form": "verb",
            "transcription": "ˌsɜːkəmˈvent",
            "definitions": [
                {
                    "text": "To find a way to avoid a rule or difficulty.",
                    "examples": [
                        "She found a legal way to circumvent the bureaucratic obstacle."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "circumvented",
            "v3": "circumvented",
            "group": "regular"
        },
        {
            "word": "corroborate",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "emoji": "✅",
            "subtext": "corroborate a claim / corroborate evidence / be corroborated by",
            "form": "verb",
            "transcription": "🇬🇧 kəˈrɒbəreɪt | 🇺🇸 kəˈrɑːbəreɪt",
            "definitions": [
                {
                    "text": "To confirm or support a statement with evidence.",
                    "examples": [
                        "The witness's testimony fully corroborated the documentary evidence."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "corroborated",
            "v3": "corroborated",
            "group": "regular"
        },
        {
            "word": "disseminate",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "📢",
            "subtext": "disseminate information / disseminate findings / widely disseminated",
            "form": "verb",
            "transcription": "dɪˈsemɪneɪt",
            "definitions": [
                {
                    "text": "To spread information or ideas widely.",
                    "examples": [
                        "The findings were disseminated across international research networks."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "disseminated",
            "v3": "disseminated",
            "group": "regular"
        },
        {
            "word": "encapsulate",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "💊",
            "subtext": "encapsulate an idea / encapsulate the problem / neatly encapsulate",
            "form": "verb",
            "transcription": "ɪnˈkæpsjuleɪt",
            "definitions": [
                {
                    "text": "To express the essential features of something concisely.",
                    "examples": [
                        "The phrase perfectly encapsulates the paradox of modern work."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "encapsulated",
            "v3": "encapsulated",
            "group": "regular"
        },
        {
            "word": "engender",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌱",
            "subtext": "engender trust / engender conflict / engender resentment",
            "form": "verb",
            "transcription": "ɪnˈdʒendər",
            "definitions": [
                {
                    "text": "To cause or give rise to a feeling or situation.",
                    "examples": [
                        "The new policy engendered considerable resentment among staff."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "engendered",
            "v3": "engendered",
            "group": "regular"
        },
        {
            "word": "exacerbate",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "📈",
            "subtext": "exacerbate a problem / exacerbate tensions / exacerbate inequality",
            "form": "verb",
            "transcription": "ɪɡˈzæsəbeɪt",
            "definitions": [
                {
                    "text": "To make a problem or situation worse.",
                    "examples": [
                        "The economic downturn exacerbated existing social inequalities."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "exacerbated",
            "v3": "exacerbated",
            "group": "regular"
        },
        {
            "word": "exemplify",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌟",
            "subtext": "exemplify something / exemplify the problem / clearly exemplify",
            "form": "verb",
            "transcription": "ɪɡˈzemplɪfaɪ",
            "definitions": [
                {
                    "text": "To be a perfect example of something.",
                    "examples": [
                        "Her career exemplifies the challenges facing women in senior roles."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "exemplified",
            "v3": "exemplified",
            "group": "regular"
        },
        {
            "word": "impede",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🛑",
            "subtext": "impede progress / impede growth / impede someone from doing",
            "form": "verb",
            "transcription": "ɪmˈpiːd",
            "definitions": [
                {
                    "text": "To delay or prevent the progress of something.",
                    "examples": [
                        "Excessive regulation can impede innovation in new industries."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "impeded",
            "v3": "impeded",
            "group": "regular"
        },
        {
            "word": "mitigate",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🛡️",
            "subtext": "mitigate risk / mitigate the impact / mitigate against",
            "form": "verb",
            "transcription": "ˈmɪtɪɡeɪt",
            "definitions": [
                {
                    "text": "To make a harmful effect less severe.",
                    "examples": [
                        "Good communication can help mitigate the impact of change."
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
            "word": "oblige",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "📜",
            "subtext": "be obliged to / oblige someone to / feel obliged",
            "form": "verb",
            "transcription": "əˈblaɪdʒ",
            "definitions": [
                {
                    "text": "To require someone to do something by law or moral duty.",
                    "examples": [
                        "The law obliges all employers to provide a safe working environment."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "obliged",
            "v3": "obliged",
            "group": "regular"
        },
        {
            "word": "pervade",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌊",
            "subtext": "pervade the organisation / be pervaded by / all-pervading",
            "form": "verb",
            "transcription": "pəˈveɪd",
            "definitions": [
                {
                    "text": "To spread through and be present in every part of something.",
                    "examples": [
                        "A culture of overwork pervades the financial services sector."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "pervaded",
            "v3": "pervaded",
            "group": "regular"
        },
        {
            "word": "preclude",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🚫",
            "subtext": "preclude someone from / preclude the possibility / not preclude",
            "form": "verb",
            "transcription": "prɪˈkluːd",
            "definitions": [
                {
                    "text": "To prevent something from happening.",
                    "examples": [
                        "His lack of relevant experience precluded him from the shortlist."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "precluded",
            "v3": "precluded",
            "group": "regular"
        },
        {
            "word": "reconcile",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🤝",
            "subtext": "reconcile ideas / hard to reconcile / reconcile differences",
            "form": "verb",
            "transcription": "ˈrekənsaɪl",
            "definitions": [
                {
                    "text": "To restore friendly relations; to make compatible.",
                    "examples": [
                        "She found it impossible to reconcile her values with the company culture."
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
            "word": "supersede",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🚀",
            "subtext": "supersede a law / supersede previous guidelines / be superseded by",
            "form": "verb",
            "transcription": "ˌsuːpəˈsiːd",
            "definitions": [
                {
                    "text": "To take the place of something previously in use.",
                    "examples": [
                        "The new guidelines will supersede all previous versions."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "superseded",
            "v3": "superseded",
            "group": "regular"
        },
        {
            "word": "underpin",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🏗️",
            "subtext": "underpin an argument / underpin success / be underpinned by",
            "form": "verb",
            "transcription": "ˌʌndəˈpɪn",
            "definitions": [
                {
                    "text": "To support or form the foundation of something.",
                    "examples": [
                        "Strong trust underpins every successful long-term partnership."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "underpinned",
            "v3": "underpinned",
            "group": "regular"
        },
        {
            "word": "vindicate",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "emoji": "⚖️",
            "subtext": "vindicate someone / vindicate a decision / feel vindicated",
            "form": "verb",
            "transcription": "ˈvɪndɪkeɪt",
            "definitions": [
                {
                    "text": "To clear someone of blame; to show something was justified.",
                    "examples": [
                        "The results vindicated her controversial decision two years later."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "vindicated",
            "v3": "vindicated",
            "group": "regular"
        },
        {
            "word": "hinge on",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🚪",
            "subtext": "hinge on a decision / hinge on a single factor / everything hinges on",
            "form": "verb",
            "transcription": "🇬🇧 hɪndʒ ɒn | 🇺🇸 hɪndʒ ɑːn",
            "definitions": [
                {
                    "text": "To depend entirely on a particular factor.",
                    "examples": [
                        "The entire success of the project hinges on client approval."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "hinged on",
            "v3": "hinged on",
            "group": "regular"
        },
        {
            "word": "grapple with",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🤼",
            "subtext": "grapple with a problem / grapple with the implications / grapple with complexity",
            "form": "verb",
            "transcription": "ˈɡræpl wɪð",
            "definitions": [
                {
                    "text": "To struggle to understand or deal with something.",
                    "examples": [
                        "Policy makers are still grappling with the implications of AI."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "grappled with",
            "v3": "grappled with",
            "group": "regular"
        },
        {
            "word": "gloss over",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🎨",
            "subtext": "gloss over a problem / gloss over the details / not gloss over",
            "form": "verb",
            "transcription": "🇬🇧 ɡlɒs ˈəʊvər | 🇺🇸 ɡlɑːs ˈoʊvər",
            "definitions": [
                {
                    "text": "To deal with something too quickly to avoid difficulty.",
                    "examples": [
                        "The report glosses over the most controversial financial details."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "glossed over",
            "v3": "glossed over",
            "group": "regular"
        },
        {
            "word": "paper over",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "📄",
            "subtext": "paper over a problem / paper over cracks / paper over differences",
            "form": "verb",
            "transcription": "🇬🇧 ˈpeɪpər ˈəʊvər | 🇺🇸 ˈpeɪpər ˈoʊvər",
            "definitions": [
                {
                    "text": "To hide or obscure a problem without resolving it.",
                    "examples": [
                        "The agreement merely papered over the deep structural divisions."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "papered over",
            "v3": "papered over",
            "group": "regular"
        }
    ];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
