// TODO: verify level classification
(function() {
const data = [
    {
        "id": "en_proficiency_language_001",
        "word": "reify",
        "emoji": "🗿",
        "subtext": "reify a concept / reify the market / reification of labour",
        "form": "verb",
        "transcription": "ˈreɪɪfaɪ",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "reifying",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_002",
        "word": "sublimate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "sublimating",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_001",
        "word": "predicate",
        "emoji": "🏗️",
        "subtext": "predicate on / predicate a claim / predicated on the assumption",
        "form": "verb",
        "transcription": "ˈpredɪkeɪt",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "predicating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_003",
        "word": "instantiate",
        "emoji": "🧱",
        "subtext": "instantiate a concept / instantiate in practice / concrete instantiation",
        "form": "verb",
        "transcription": "ɪnˈstænʃieɪt",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "instantiating",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_004",
        "word": "negate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "negating",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_005",
        "word": "transcend",
        "emoji": "🌌",
        "subtext": "transcend limits / transcend categories / transcend the personal",
        "form": "verb",
        "transcription": "trænˈsend",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "transcending",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_006",
        "word": "mediate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "mediating",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_007",
        "word": "elide",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "eliding",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_008",
        "word": "obfuscate",
        "emoji": "🌫️",
        "subtext": "obfuscate the truth / deliberate obfuscation / obfuscate with jargon",
        "form": "verb",
        "transcription": "ˈɒbfʌskeɪt",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "obfuscating",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_009",
        "word": "conflate",
        "emoji": "🔔",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "conflating",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_002",
        "word": "invoke",
        "emoji": "📜",
        "subtext": "invoke a right / invoke precedent / invoke an argument",
        "form": "verb",
        "transcription": "ɪnˈvəʊk",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "invoking",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_010",
        "word": "foreground",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "foregrounding",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_003",
        "word": "recuperate",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "recuperating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_004",
        "word": "destabilise",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "destabilising",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_005",
        "word": "commodify",
        "emoji": "🏷️",
        "subtext": "commodify labour / commodify care / commodification of attention",
        "form": "verb",
        "transcription": "kəˈmɒdɪfaɪ",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "commodifying",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_006",
        "word": "instrumentalise",
        "emoji": "🛠️",
        "transcription": "ˌɪnstrəˈmentəlaɪz",
        "subtext": "instrumentalise people / instrumentalise an idea / reduce to an instrument",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "instrumentalising",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_007",
        "word": "valorise",
        "emoji": "🎖️",
        "transcription": "ˈvæləraɪz",
        "subtext": "valorise labour / valorise a concept / be valorised by culture",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "valorising",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_008",
        "word": "fetishise",
        "emoji": "🧿",
        "transcription": "ˈfetɪʃaɪz",
        "subtext": "fetishise an idea / commodity fetishism / fetishise growth",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "fetishising",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_009",
        "word": "hegemonise",
        "emoji": "👑",
        "transcription": "hɪˈdʒemənaɪz",
        "subtext": "hegemonise discourse / hegemonising tendency / resist hegemonisation",
        "form": "verb",
        "definitions": [
            {
                "text": "To establish or extend dominance through cultural or ideological means.",
                "examples": [
                    "One theoretical framework has come to hegemonise the field."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hegemonised",
        "v3": "hegemonised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "hegemonising",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_010",
        "word": "alienate",
        "emoji": "⛓️",
        "transcription": "ˈeɪliəneɪt",
        "subtext": "alienate someone / feel alienated / Marxist alienation",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "alienating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_011",
        "word": "demarcate",
        "emoji": "📏",
        "transcription": "ˈdiːmɑːkeɪt",
        "subtext": "demarcate a boundary / clearly demarcate / demarcation line",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "demarcating",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_012",
        "word": "delimit",
        "emoji": "🚧",
        "transcription": "diːˈlɪmɪt",
        "subtext": "delimit the scope / delimit a concept / carefully delimited",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "delimiting",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_011",
        "word": "militate",
        "emoji": "⚖️",
        "transcription": "ˈmɪlɪteɪt",
        "subtext": "militate against / strongly militate / militate in favour of",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "militating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_epistemology_truth_001",
        "word": "vitiate",
        "emoji": "🧪",
        "transcription": "ˈvɪʃieɪt",
        "subtext": "vitiate a claim / vitiate an argument / legally vitiated",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "vitiating",
        "lang": "en",
        "level": "proficiency",
        "theme": "epistemology_truth",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_epistemology_truth_002",
        "word": "gainsay",
        "emoji": "🗣️",
        "transcription": "ˌɡeɪnˈseɪ",
        "subtext": "difficult to gainsay / no one can gainsay / gainsay a claim",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "proficiency",
        "theme": "epistemology_truth",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_012",
        "word": "abrogate",
        "emoji": "🔨",
        "transcription": "ˈæbrəɡeɪt",
        "subtext": "abrogate an agreement / abrogate a treaty / unilateral abrogation",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "abrogating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_013",
        "word": "deconstruct",
        "emoji": "🏚️",
        "transcription": "ˌdiːkənˈstrʌkt",
        "subtext": "deconstruct an argument / deconstruct a text / Derridean deconstruction",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "deconstructing",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_014",
        "word": "problematise",
        "emoji": "❓",
        "transcription": "ˈprɒbləmətaɪz",
        "subtext": "problematise a concept / resist the urge to problematise / critically problematise",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "problematising",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_015",
        "word": "unpack",
        "emoji": "📦",
        "transcription": "ˌʌnˈpæk",
        "subtext": "unpack an assumption / unpack the implications / carefully unpack",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "unpacking",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_016",
        "word": "foreclose",
        "emoji": "🚪",
        "transcription": "fɔːˈkləʊz",
        "subtext": "foreclose an option / foreclose debate / foreclose the possibility of",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "foreclosing",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_017",
        "word": "dialecticise",
        "emoji": "☯️",
        "transcription": "ˌdaɪəˈlektɪsaɪz",
        "subtext": "dialecticise a binary / dialectical method / thesis and antithesis",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "dialecticising",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_013",
        "word": "contravene",
        "emoji": "📜",
        "transcription": "ˌkɒntrəˈviːn",
        "subtext": "contravene a law / contravene regulations / contravene an agreement",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "contravening",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_018",
        "word": "subsume",
        "emoji": "📂",
        "transcription": "səbˈsjuːm",
        "subtext": "subsume under / be subsumed by / subsume into a category",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "subsuming",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_019",
        "word": "accentuate",
        "emoji": "💡",
        "transcription": "əkˈsentʃueɪt",
        "subtext": "accentuate a difference / accentuate the positive / be accentuated by",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "accentuating",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_014",
        "word": "acquiesce",
        "emoji": "🤝",
        "transcription": "ˌækwiˈes",
        "subtext": "acquiesce to / acquiesce in / reluctant acquiescence",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "acquiescing",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_015",
        "word": "alleviate",
        "emoji": "🩹",
        "transcription": "əˈliːvieɪt",
        "subtext": "alleviate suffering / alleviate poverty / alleviate pressure",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "alleviating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_016",
        "word": "circumvent",
        "emoji": "🔄",
        "transcription": "ˌsɜːkəmˈvent",
        "subtext": "circumvent the rules / circumvent a problem / circumvent embassy",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "circumventing",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_epistemology_truth_003",
        "word": "corroborate",
        "emoji": "✅",
        "transcription": "kəˈrɒbəreɪt",
        "subtext": "corroborate a claim / corroborate evidence / be corroborated by",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "corroborating",
        "lang": "en",
        "level": "proficiency",
        "theme": "epistemology_truth",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_020",
        "word": "disseminate",
        "emoji": "📢",
        "transcription": "dɪˈsemɪneɪt",
        "subtext": "disseminate information / disseminate findings / widely disseminated",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "disseminating",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_021",
        "word": "encapsulate",
        "emoji": "💊",
        "transcription": "ɪnˈkæpsjuleɪt",
        "subtext": "encapsulate an idea / encapsulate the problem / neatly encapsulate",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "encapsulating",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_017",
        "word": "engender",
        "emoji": "🌱",
        "transcription": "ɪnˈdʒendə",
        "subtext": "engender trust / engender conflict / engender resentment",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "engendering",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_018",
        "word": "exacerbate",
        "emoji": "📈",
        "transcription": "ɪɡˈzæsəbeɪt",
        "subtext": "exacerbate a problem / exacerbate tensions / exacerbate inequality",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "exacerbating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_022",
        "word": "exemplify",
        "emoji": "🌟",
        "transcription": "ɪɡˈzemplɪfaɪ",
        "subtext": "exemplify something / exemplify the problem / clearly exemplify",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "exemplifying",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_019",
        "word": "impede",
        "emoji": "🛑",
        "transcription": "ɪmˈpiːd",
        "subtext": "impede progress / impede growth / impede someone from doing",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "impeding",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_020",
        "word": "mitigate",
        "emoji": "🛡️",
        "transcription": "ˈmɪtɪɡeɪt",
        "subtext": "mitigate risk / mitigate the impact / mitigate against",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "mitigating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_021",
        "word": "oblige",
        "emoji": "📜",
        "transcription": "əˈblaɪdʒ",
        "subtext": "be obliged to / oblige someone to / feel obliged",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "obliging",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_022",
        "word": "pervade",
        "emoji": "🌊",
        "transcription": "pəˈveɪd",
        "subtext": "pervade the organisation / be pervaded by / all-pervading",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "pervading",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_023",
        "word": "preclude",
        "emoji": "🚫",
        "transcription": "prɪˈkluːd",
        "subtext": "preclude someone from / preclude the possibility / not preclude",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "precluding",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_024",
        "word": "reconcile",
        "emoji": "🤝",
        "transcription": "ˈrekənsaɪl",
        "subtext": "reconcile ideas / hard to reconcile / reconcile differences",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "reconciling",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_023",
        "word": "supersede",
        "emoji": "🚀",
        "transcription": "ˌsuːpəˈsiːd",
        "subtext": "supersede a law / supersede previous guidelines / be superseded by",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "superseding",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_025",
        "word": "underpin",
        "emoji": "🏗️",
        "transcription": "ˌʌndəˈpɪn",
        "subtext": "underpin an argument / underpin success / be underpinned by",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "underpining",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_epistemology_truth_004",
        "word": "vindicate",
        "emoji": "⚖️",
        "transcription": "ˈvɪndɪkeɪt",
        "subtext": "vindicate someone / vindicate a decision / feel vindicated",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "vindicating",
        "lang": "en",
        "level": "proficiency",
        "theme": "epistemology_truth",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_026",
        "word": "hinge on",
        "emoji": "🚪",
        "transcription": "hɪndʒ ɒn",
        "subtext": "hinge on a decision / hinge on a single factor / everything hinges on",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "hinge oning",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_027",
        "word": "grapple with",
        "emoji": "🤼",
        "transcription": "ˈɡræpl wɪð",
        "subtext": "grapple with a problem / grapple with the implications / grapple with complexity",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "grapple withing",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_028",
        "word": "gloss over",
        "emoji": "🎨",
        "transcription": "ɡlɒs ˈəʊvə",
        "subtext": "gloss over a problem / gloss over the details / not gloss over",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "gloss overing",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_029",
        "word": "paper over",
        "emoji": "📄",
        "transcription": "ˈpeɪpə ˈəʊvə",
        "subtext": "paper over a problem / paper over cracks / paper over differences",
        "form": "verb",
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
        "group": "regular",
        "auxiliary": "have",
        "v4": "paper overing",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_030",
        "word": "paradigm shift",
        "emoji": "🔄",
        "transcription": "ˈpærədaɪm ʃɪft",
        "subtext": "a paradigm shift / shift the paradigm / fundamental paradigm shift",
        "form": "verb",
        "definitions": [
            {
                "text": "A fundamental change in approach or underlying assumptions.",
                "examples": [
                    "The transition to renewable energy requires a total paradigm shift."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "paradigm shifted",
        "v3": "paradigm shifted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "paradigm shifting",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);

})();