// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_proficiency_language_041",
        "word": "interdisciplinary",
        "emoji": "🧪",
        "form": "adjective",
        "definitions": [
            {
                "text": "interdisciplinary",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_042",
        "word": "hermeneutic",
        "emoji": "📜",
        "form": "adjective",
        "transcription": "ˌhɜːmɪˈnjuːtɪk",
        "definitions": [
            {
                "text": "Relating to the interpretation of texts or meaning.",
                "examples": [
                    "He took a hermeneutic approach to analysing political speeches."
                ]
            }
        ],
        "subtext": "textual interpretation",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_043",
        "word": "tautological",
        "emoji": "🔄",
        "form": "adjective",
        "transcription": "🇬🇧 ˌtɔːtəˈlɒdʒɪkl | 🇺🇸 ˌtɔːtəˈlɑːdʒɪkl",
        "definitions": [
            {
                "text": "Saying the same thing twice in different words; circular in reasoning.",
                "examples": [
                    "The argument is tautological: it assumes what it sets out to prove."
                ]
            }
        ],
        "subtext": "circular reasoning",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_linguistics_theory_001",
        "word": "polysemous",
        "emoji": "🔠",
        "form": "adjective",
        "transcription": "🇬🇧 ˌpɒliˈsiːməs | 🇺🇸 ˌpɑːliˈsiːməs",
        "definitions": [
            {
                "text": "Having multiple meanings.",
                "examples": [
                    "The word 'freedom' is deeply polysemous in political discourse."
                ]
            }
        ],
        "subtext": "multiple meanings",
        "lang": "en",
        "level": "proficiency",
        "theme": "linguistics_theory",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_044",
        "word": "heuristic",
        "emoji": "💡",
        "form": "adjective",
        "transcription": "hjuˈrɪstɪk",
        "definitions": [
            {
                "text": "A problem-solving approach based on experience rather than guaranteed proof.",
                "examples": [
                    "They employed a heuristic approach to find a solution that was good enough for their needs."
                ]
            }
        ],
        "subtext": "experience-based",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_001",
        "word": "post-colonial",
        "emoji": "🌍",
        "form": "adjective",
        "transcription": "🇬🇧 ˌpəʊstkəˈləʊniəl | 🇺🇸 ˌpoʊstkəˈloʊniəl",
        "definitions": [
            {
                "text": "Relating to the period after colonial rule, or to the critique of colonial legacies.",
                "examples": [
                    "Post-colonial theory questions Western assumptions about progress."
                ]
            }
        ],
        "subtext": "after colonial rule",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_002",
        "word": "multipolar",
        "emoji": "🌐",
        "form": "adjective",
        "transcription": "🇬🇧 ˌmʌltiˈpəʊlər | 🇺🇸 ˌmʌltiˈpoʊlər",
        "definitions": [
            {
                "text": "Describing a world order with several centres of power rather than one or two.",
                "examples": [
                    "A multipolar world may be more unstable but more representative."
                ]
            }
        ],
        "subtext": "multiple power centers",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_003",
        "word": "cosmopolitan",
        "emoji": "🏙️",
        "form": "adjective",
        "transcription": "🇬🇧 ˌkɒzməˈpɒlɪtən | 🇺🇸 ˌkɑːzməˈpɑːlɪtən",
        "definitions": [
            {
                "text": "Familiar with and at ease in many different countries and cultures; or relating to cosmopolitanism.",
                "examples": [
                    "She held a cosmopolitan view of political obligation."
                ]
            }
        ],
        "subtext": "world-citizen perspective",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_psychoanalysis_unconscious_003",
        "word": "narcissistic",
        "emoji": "🪞",
        "form": "adjective",
        "transcription": "ˌnɑːrsɪˈsɪstɪk",
        "definitions": [
            {
                "text": "Having excessive interest in oneself and one's appearance or achievements.",
                "examples": [
                    "Some critics describe celebrity culture as narcissistic."
                ]
            }
        ],
        "subtext": "self-obsessed",
        "lang": "en",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_045",
        "word": "heterodox",
        "emoji": "🚩",
        "form": "adjective",
        "transcription": "🇬🇧 ˈhetərədɒks | 🇺🇸 ˈhetərədɑːks",
        "definitions": [
            {
                "text": "Contrary to established or accepted beliefs or doctrine.",
                "examples": [
                    "Her heterodox economic views were not popular in mainstream academia."
                ]
            }
        ],
        "subtext": "unconventional",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_046",
        "word": "immanent",
        "emoji": "⚛️",
        "form": "adjective",
        "transcription": "ˈɪmənənt",
        "definitions": [
            {
                "text": "Existing or operating within something; not transcendent.",
                "examples": [
                    "For Spinoza, God is immanent in nature, not external to it."
                ]
            }
        ],
        "subtext": "internal/inherent",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_047",
        "word": "abrupt",
        "emoji": "⏱️",
        "form": "adjective",
        "transcription": "əˈbrʌpt",
        "definitions": [
            {
                "text": "Sudden and unexpected; short and rude in manner.",
                "examples": [
                    "The conversation came to an abrupt and unexpected end."
                ]
            }
        ],
        "subtext": "an abrupt end / abrupt manner / abruptly stopped",
        "comparative": "more abrupt",
        "superlative": "the most abrupt",
        "synonyms": [
            "sudden",
            "curt"
        ],
        "opposite": "gradual",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_048",
        "word": "abstruse",
        "emoji": "🧐",
        "form": "adjective",
        "transcription": "əbˈstruːs",
        "definitions": [
            {
                "text": "Difficult to understand; obscure.",
                "examples": [
                    "The paper was criticised for its abstruse theoretical framing."
                ]
            }
        ],
        "subtext": "very abstruse / quite abstruse / an abstruse argument",
        "comparative": "more abstruse",
        "superlative": "the most abstruse",
        "synonyms": [
            "obscure",
            "recondite"
        ],
        "opposite": "simple",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_004",
        "word": "anachronistic",
        "emoji": "⌛",
        "form": "adjective",
        "transcription": "əˌnækrəˈnɪstɪk",
        "definitions": [
            {
                "text": "Out of date; belonging to an earlier period.",
                "examples": [
                    "The policy seems completely anachronistic in today's context."
                ]
            }
        ],
        "subtext": "utterly anachronistic / increasingly anachronistic / deeply anachronistic",
        "comparative": "more anachronistic",
        "superlative": "the most anachronistic",
        "synonyms": [
            "outdated",
            "archaic"
        ],
        "opposite": "contemporary",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_049",
        "word": "antithetical",
        "emoji": "⚖️",
        "form": "adjective",
        "transcription": "ˌæntɪˈθetɪkl",
        "definitions": [
            {
                "text": "Directly opposed or contrary to something.",
                "examples": [
                    "His actions were antithetical to the values he claimed to hold."
                ]
            }
        ],
        "subtext": "directly antithetical / completely antithetical / antithetical to",
        "comparative": "more antithetical",
        "superlative": "the most antithetical",
        "synonyms": [
            "contrary",
            "opposed"
        ],
        "opposite": "identical",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_050",
        "word": "arcane",
        "emoji": "🔮",
        "form": "adjective",
        "transcription": "ɑːˈkeɪn",
        "definitions": [
            {
                "text": "Known by only a few people; mysterious and secret.",
                "examples": [
                    "The procedure was needlessly arcane and inaccessible."
                ]
            }
        ],
        "subtext": "very arcane / entirely arcane / arcane knowledge",
        "comparative": "more arcane",
        "superlative": "the most arcane",
        "synonyms": [
            "mysterious",
            "secret"
        ],
        "opposite": "common",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_051",
        "word": "atypical",
        "emoji": "🦄",
        "form": "adjective",
        "transcription": "ˌeɪˈtɪpɪkl",
        "definitions": [
            {
                "text": "Not typical; not normal or usual.",
                "examples": [
                    "This was an atypical case that does not reflect the norm."
                ]
            }
        ],
        "subtext": "very atypical / highly atypical / statistically atypical",
        "comparative": "more atypical",
        "superlative": "the most atypical",
        "synonyms": [
            "unusual",
            "abnormal"
        ],
        "opposite": "typical",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_052",
        "word": "binary",
        "emoji": "🔢",
        "form": "adjective",
        "transcription": "ˈbaɪnəri",
        "definitions": [
            {
                "text": "Consisting of two things; based on either/or.",
                "examples": [
                    "The debate presents a false binary between growth and justice."
                ]
            }
        ],
        "subtext": "a false binary / a binary choice / not purely binary",
        "comparative": "more binary",
        "superlative": "the most binary",
        "synonyms": [
            "dual",
            "double"
        ],
        "opposite": "unitary",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_053",
        "word": "categorical",
        "emoji": "❗",
        "form": "adjective",
        "transcription": "🇬🇧 ˌkætəˈɡɒrɪkl | 🇺🇸 ˌkætəˈɡɑːrɪkl",
        "definitions": [
            {
                "text": "Absolute; expressed without any exceptions or conditions.",
                "examples": [
                    "She gave a categorical denial of the allegations."
                ]
            }
        ],
        "subtext": "a categorical denial / categorically refused / absolutely categorical",
        "comparative": "more categorical",
        "superlative": "the most categorical",
        "synonyms": [
            "absolute",
            "unconditional"
        ],
        "opposite": "qualified",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_005",
        "word": "circumspect",
        "emoji": "🛡️",
        "form": "adjective",
        "transcription": "ˈsɜːkəmspekt",
        "definitions": [
            {
                "text": "Careful to consider all circumstances; cautious.",
                "examples": [
                    "He was circumspect in his public statements."
                ]
            }
        ],
        "subtext": "very circumspect / extremely circumspect / remain circumspect",
        "comparative": "more circumspect",
        "superlative": "the most circumspect",
        "synonyms": [
            "cautious",
            "wary"
        ],
        "opposite": "reckless",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_006",
        "word": "covert",
        "emoji": "🕵️",
        "form": "adjective",
        "transcription": "ˈkʌvət",
        "definitions": [
            {
                "text": "Hidden; secret; not openly acknowledged.",
                "examples": [
                    "The operation involved covert surveillance of the group."
                ]
            }
        ],
        "subtext": "completely covert / a covert operation / deeply covert",
        "comparative": "more covert",
        "superlative": "the most covert",
        "synonyms": [
            "secret",
            "clandestine"
        ],
        "opposite": "overt",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_054",
        "word": "dialectical",
        "emoji": "⚖️",
        "form": "adjective",
        "transcription": "ˌdaɪəˈlektɪkl",
        "definitions": [
            {
                "text": "Relating to the logical discussion of ideas through opposites.",
                "examples": [
                    "The analysis employs a dialectical method throughout."
                ]
            }
        ],
        "subtext": "a dialectical approach / dialectical tension / dialectically resolved",
        "comparative": "more dialectical",
        "superlative": "the most dialectical",
        "synonyms": [
            "logical",
            "analytical"
        ],
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_055",
        "word": "diffuse",
        "emoji": "🌫️",
        "form": "adjective",
        "transcription": "dɪˈfjuːs",
        "definitions": [
            {
                "text": "Spread over a wide area; lacking clarity.",
                "examples": [
                    "The argument was too diffuse to make a strong impression."
                ]
            }
        ],
        "subtext": "too diffuse / very diffuse / a diffuse response",
        "comparative": "more diffuse",
        "superlative": "the most diffuse",
        "synonyms": [
            "scattered",
            "vague"
        ],
        "opposite": "concentrated",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_056",
        "word": "elusive",
        "emoji": "🌬️",
        "form": "adjective",
        "transcription": "ɪˈluːsɪv",
        "definitions": [
            {
                "text": "Difficult to find, catch or achieve.",
                "examples": [
                    "The truth in this case proved remarkably elusive."
                ]
            },
            {
                "text": "Hard to find, achieve or remember.",
                "examples": [
                    "A clear consensus remains elusive."
                ]
            }
        ],
        "subtext": "very elusive / remain elusive / an elusive goal / an elusive quality",
        "comparative": "more elusive",
        "superlative": "the most elusive",
        "synonyms": [
            "evasive",
            "slippery"
        ],
        "opposite": "attainable",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_057",
        "word": "esoteric",
        "emoji": "🗝️",
        "form": "adjective",
        "transcription": "ˌesəˈterɪk",
        "definitions": [
            {
                "text": "Understood by or intended for only a small group.",
                "examples": [
                    "The debate became too esoteric for a general audience."
                ]
            }
        ],
        "subtext": "very esoteric / quite esoteric / deeply esoteric",
        "comparative": "more esoteric",
        "superlative": "the most esoteric",
        "synonyms": [
            "arcane",
            "obscure"
        ],
        "opposite": "mainstream",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_058",
        "word": "fallacious",
        "emoji": "❌",
        "form": "adjective",
        "transcription": "fəˈleɪʃəs",
        "definitions": [
            {
                "text": "Based on false reasoning; misleading.",
                "examples": [
                    "Her argument is fundamentally fallacious."
                ]
            }
        ],
        "subtext": "deeply fallacious / logically fallacious / a fallacious claim",
        "comparative": "more fallacious",
        "superlative": "the most fallacious",
        "synonyms": [
            "false",
            "erroneous"
        ],
        "opposite": "sound",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_059",
        "word": "immutable",
        "emoji": "🧱",
        "form": "adjective",
        "transcription": "ɪˈmjuːtəbl",
        "definitions": [
            {
                "text": "Not able to be changed; fixed and permanent.",
                "examples": [
                    "Language is not immutable — it constantly evolves."
                ]
            }
        ],
        "subtext": "completely immutable / not immutable / an immutable fact",
        "comparative": "more immutable",
        "superlative": "the most immutable",
        "synonyms": [
            "fixed",
            "permanent"
        ],
        "opposite": "mutable",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_007",
        "word": "impartial",
        "emoji": "⚖️",
        "form": "adjective",
        "transcription": "ɪmˈpɑːʃl",
        "definitions": [
            {
                "text": "Not favouring one side over another; fair.",
                "examples": [
                    "The panel must be completely impartial in its judgement."
                ]
            }
        ],
        "subtext": "completely impartial / strictly impartial / an impartial observer",
        "comparative": "more impartial",
        "superlative": "the most impartial",
        "synonyms": [
            "fair",
            "neutral"
        ],
        "opposite": "biased",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_060",
        "word": "incidental",
        "emoji": "🍃",
        "form": "adjective",
        "transcription": "ˌɪnsɪˈdentl",
        "definitions": [
            {
                "text": "Happening as a minor part of something else.",
                "examples": [
                    "The savings were incidental rather than the main goal."
                ]
            }
        ],
        "subtext": "purely incidental / merely incidental / incidental to",
        "comparative": "more incidental",
        "superlative": "the most incidental",
        "synonyms": [
            "secondary",
            "minor"
        ],
        "opposite": "central",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_061",
        "word": "inherent",
        "emoji": "⚛️",
        "form": "adjective",
        "transcription": "ɪnˈhɪərənt",
        "definitions": [
            {
                "text": "Existing in something as a natural and permanent quality.",
                "examples": [
                    "The system is inherently flawed and needs redesigning."
                ]
            }
        ],
        "subtext": "inherently flawed / inherently biased / inherently problematic",
        "comparative": "more inherent",
        "superlative": "the most inherent",
        "synonyms": [
            "innate",
            "intrinsic"
        ],
        "opposite": "extrinsic",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_aesthetics_criticism_009",
        "word": "inimitable",
        "emoji": "🌟",
        "form": "adjective",
        "transcription": "ɪˈnɪmɪtəbl",
        "definitions": [
            {
                "text": "So good or unusual as to be impossible to copy.",
                "examples": [
                    "She has an inimitable way of making complex ideas clear."
                ]
            }
        ],
        "subtext": "truly inimitable / absolutely inimitable / an inimitable style",
        "comparative": "more inimitable",
        "superlative": "the most inimitable",
        "synonyms": [
            "unique",
            "matchless"
        ],
        "opposite": "commonplace",
        "lang": "en",
        "level": "proficiency",
        "theme": "aesthetics_criticism",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_008",
        "word": "insidious",
        "emoji": "🐍",
        "form": "adjective",
        "transcription": "ɪnˈsɪdiəs",
        "definitions": [
            {
                "text": "Proceeding gradually in a harmful way.",
                "examples": [
                    "The effects of long-term stress can be insidious."
                ]
            }
        ],
        "subtext": "very insidious / deeply insidious / an insidious process",
        "comparative": "more insidious",
        "superlative": "the most insidious",
        "synonyms": [
            "stealthy",
            "subtle"
        ],
        "opposite": "straightforward",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_062",
        "word": "irreconcilable",
        "emoji": "🚫",
        "form": "adjective",
        "transcription": "ɪˌrekənˈsaɪləbl",
        "definitions": [
            {
                "text": "Not able to be made to agree or be compatible.",
                "examples": [
                    "The two positions are fundamentally irreconcilable."
                ]
            }
        ],
        "subtext": "fundamentally irreconcilable / completely irreconcilable / irreconcilable differences",
        "comparative": "more irreconcilable",
        "superlative": "the most irreconcilable",
        "synonyms": [
            "incompatible",
            "conflicting"
        ],
        "opposite": "compatible",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_063",
        "word": "liminal",
        "emoji": "🚪",
        "form": "adjective",
        "transcription": "ˈlɪmɪnl",
        "definitions": [
            {
                "text": "Relating to a transitional or in-between state.",
                "examples": [
                    "The months after redundancy are a truly liminal period."
                ]
            }
        ],
        "subtext": "a liminal space / a liminal phase / deeply liminal",
        "comparative": "more liminal",
        "superlative": "the most liminal",
        "synonyms": [
            "transitional",
            "threshold"
        ],
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_064",
        "word": "manifold",
        "emoji": "🔢",
        "form": "adjective",
        "transcription": "🇬🇧 ˈmænɪfəʊld | 🇺🇸 ˈmænɪfoʊld",
        "definitions": [
            {
                "text": "Many and of several different kinds.",
                "examples": [
                    "The implications of this decision are manifold."
                ]
            }
        ],
        "subtext": "manifold implications / manifold problems / manifold challenges",
        "comparative": "more manifold",
        "superlative": "the most manifold",
        "synonyms": [
            "numerous",
            "diverse"
        ],
        "opposite": "singular",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_065",
        "word": "nebulous",
        "emoji": "☁️",
        "form": "adjective",
        "transcription": "ˈnebjələs",
        "definitions": [
            {
                "text": "Not clear; vague and ill-defined.",
                "examples": [
                    "The concept remains somewhat nebulous in the report."
                ]
            }
        ],
        "subtext": "very nebulous / rather nebulous / dangerously nebulous",
        "comparative": "more nebulous",
        "superlative": "the most nebulous",
        "synonyms": [
            "vague",
            "fuzzy"
        ],
        "opposite": "distinct",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_009",
        "word": "normative",
        "emoji": "📏",
        "form": "adjective",
        "transcription": "ˈnɔːmətɪv",
        "definitions": [
            {
                "text": "Relating to a standard; prescribing what should be.",
                "examples": [
                    "This is a normative claim, not a descriptive one."
                ]
            }
        ],
        "subtext": "a normative framework / normative assumption / normative claim",
        "comparative": "more normative",
        "superlative": "the most normative",
        "synonyms": [
            "prescriptive",
            "standardizing"
        ],
        "opposite": "descriptive",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_066",
        "word": "nuanced",
        "emoji": "🌗",
        "form": "adjective",
        "transcription": "ˈnjuːɑːnst",
        "definitions": [
            {
                "text": "Showing subtle distinctions; not simple or extreme.",
                "examples": [
                    "The report gives a very nuanced account of the issue."
                ]
            }
        ],
        "subtext": "very nuanced / highly nuanced / a nuanced argument",
        "comparative": "more nuanced",
        "superlative": "the most nuanced",
        "synonyms": [
            "subtle",
            "refined"
        ],
        "opposite": "crude",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_067",
        "word": "oblique",
        "emoji": "↗️",
        "form": "adjective",
        "transcription": "əˈbliːk",
        "definitions": [
            {
                "text": "Not straight; indirect; not direct or open.",
                "examples": [
                    "He gave an oblique answer that satisfied no one."
                ]
            }
        ],
        "subtext": "rather oblique / very oblique / an oblique reference",
        "comparative": "more oblique",
        "superlative": "the most oblique",
        "synonyms": [
            "indirect",
            "slanting"
        ],
        "opposite": "direct",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_068",
        "word": "opaque",
        "emoji": "🌑",
        "form": "adjective",
        "transcription": "🇬🇧 əʊˈpeɪk | 🇺🇸 oʊˈpeɪk",
        "definitions": [
            {
                "text": "Not transparent; difficult to understand.",
                "examples": [
                    "The government's reasoning has been completely opaque."
                ]
            }
        ],
        "subtext": "very opaque / completely opaque / deeply opaque",
        "comparative": "more opaque",
        "superlative": "the most opaque",
        "synonyms": [
            "obscure",
            "unclear"
        ],
        "opposite": "transparent",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_069",
        "word": "ostensible",
        "emoji": "🎭",
        "form": "adjective",
        "transcription": "🇬🇧 ɒˈstensəbl | 🇺🇸 ɑːˈstensəbl",
        "definitions": [
            {
                "text": "Appearing to be something; stated as real or true.",
                "examples": [
                    "The ostensible aim was efficiency; the real aim was control."
                ]
            }
        ],
        "subtext": "the ostensible purpose / ostensibly correct / ostensible motivation",
        "comparative": "more ostensible",
        "superlative": "the most ostensible",
        "synonyms": [
            "apparent",
            "seeming"
        ],
        "opposite": "genuine",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_070",
        "word": "paradoxical",
        "emoji": "🔄",
        "form": "adjective",
        "transcription": "🇬🇧 ˌpærəˈdɒksɪkl | 🇺🇸 ˌpærəˈdɑːksɪkl",
        "definitions": [
            {
                "text": "Contradicting itself while containing truth.",
                "examples": [
                    "It is paradoxical that doing less can sometimes achieve more."
                ]
            }
        ],
        "subtext": "seemingly paradoxical / deeply paradoxical / a paradoxical situation",
        "comparative": "more paradoxical",
        "superlative": "the most paradoxical",
        "synonyms": [
            "contradictory",
            "ironic"
        ],
        "opposite": "consistent",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_010",
        "word": "pervasive",
        "emoji": "🌊",
        "form": "adjective",
        "transcription": "pəˈveɪsɪv",
        "definitions": [
            {
                "text": "Present throughout; spreading widely.",
                "examples": [
                    "A culture of overwork is pervasive in this sector."
                ]
            }
        ],
        "subtext": "very pervasive / increasingly pervasive / all-pervasive",
        "comparative": "more pervasive",
        "superlative": "the most pervasive",
        "synonyms": [
            "widespread",
            "prevalent"
        ],
        "opposite": "rare",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_011",
        "word": "polarising",
        "emoji": "🧲",
        "form": "adjective",
        "transcription": "🇬🇧 ˈpəʊləraɪzɪŋ | 🇺🇸 ˈpoʊləraɪzɪŋ",
        "definitions": [
            {
                "text": "Causing people to take opposing positions.",
                "examples": [
                    "The proposal was deeply polarising within the organisation."
                ]
            }
        ],
        "subtext": "deeply polarising / extremely polarising / highly polarising",
        "comparative": "more polarising",
        "superlative": "the most polarising",
        "synonyms": [
            "divisive",
            "confrontational"
        ],
        "opposite": "unifying",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_ontology_existence_001",
        "word": "precarious",
        "emoji": "🧗",
        "form": "adjective",
        "transcription": "prɪˈkeəriəs",
        "definitions": [
            {
                "text": "Not safe or certain; dependent on chance.",
                "examples": [
                    "She left a precarious freelance life for a stable role."
                ]
            }
        ],
        "subtext": "very precarious / deeply precarious / a precarious position",
        "comparative": "more precarious",
        "superlative": "the most precarious",
        "synonyms": [
            "unstable",
            "risky"
        ],
        "opposite": "stable",
        "lang": "en",
        "level": "proficiency",
        "theme": "ontology_existence",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_linguistics_theory_002",
        "word": "prescriptive",
        "emoji": "📜",
        "form": "adjective",
        "transcription": "prɪˈskrɪptɪv",
        "definitions": [
            {
                "text": "Dictating what should be done; laying down rules.",
                "examples": [
                    "The guidelines are too prescriptive to allow creativity."
                ]
            }
        ],
        "subtext": "very prescriptive / highly prescriptive / overly prescriptive",
        "comparative": "more prescriptive",
        "superlative": "the most prescriptive",
        "synonyms": [
            "dictatorial",
            "rigid"
        ],
        "opposite": "descriptive",
        "lang": "en",
        "level": "proficiency",
        "theme": "linguistics_theory",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_012",
        "word": "protracted",
        "emoji": "⌛",
        "form": "adjective",
        "transcription": "prəˈtræktɪd",
        "definitions": [
            {
                "text": "Lasting longer than expected; prolonged.",
                "examples": [
                    "The legal dispute was long and protracted."
                ]
            }
        ],
        "subtext": "very protracted / extremely protracted / a protracted process",
        "comparative": "more protracted",
        "superlative": "the most protracted",
        "synonyms": [
            "prolonged",
            "extended"
        ],
        "opposite": "brief",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_071",
        "word": "reductive",
        "emoji": "📉",
        "form": "adjective",
        "transcription": "rɪˈdʌktɪv",
        "definitions": [
            {
                "text": "Oversimplifying something complex.",
                "examples": [
                    "It would be reductive to explain it all as simply greed."
                ]
            }
        ],
        "subtext": "very reductive / deeply reductive / a reductive analysis",
        "comparative": "more reductive",
        "superlative": "the most reductive",
        "synonyms": [
            "simplistic",
            "minimalist"
        ],
        "opposite": "complex",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_013",
        "word": "seminal",
        "emoji": "🌱",
        "form": "adjective",
        "transcription": "ˈsemɪnl",
        "definitions": [
            {
                "text": "Very important and influential; original.",
                "examples": [
                    "This was a seminal moment in the company's history."
                ]
            }
        ],
        "subtext": "truly seminal / a seminal work / a seminal figure",
        "comparative": "more seminal",
        "superlative": "the most seminal",
        "synonyms": [
            "influential",
            "groundbreaking"
        ],
        "opposite": "insignificant",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_072",
        "word": "specious",
        "emoji": "🤥",
        "form": "adjective",
        "transcription": "ˈspiːʃəs",
        "definitions": [
            {
                "text": "Seeming right but actually wrong; misleading.",
                "examples": [
                    "The argument is superficially appealing but ultimately specious."
                ]
            }
        ],
        "subtext": "very specious / a specious claim / fundamentally specious",
        "comparative": "more specious",
        "superlative": "the most specious",
        "synonyms": [
            "misleading",
            "deceptive"
        ],
        "opposite": "valid",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_073",
        "word": "spurious",
        "emoji": "🤡",
        "form": "adjective",
        "transcription": "ˈspjʊəriəs",
        "definitions": [
            {
                "text": "Not genuine; based on false reasoning.",
                "examples": [
                    "This is a spurious comparison that distorts the debate."
                ]
            }
        ],
        "subtext": "completely spurious / totally spurious / a spurious argument",
        "comparative": "more spurious",
        "superlative": "the most spurious",
        "synonyms": [
            "fake",
            "bogus"
        ],
        "opposite": "authentic",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_014",
        "word": "subversive",
        "emoji": "💣",
        "form": "adjective",
        "transcription": "səbˈvɜːsɪv",
        "definitions": [
            {
                "text": "Intended to undermine an established system.",
                "examples": [
                    "The artwork was seen as subversive by the authorities."
                ]
            }
        ],
        "subtext": "quietly subversive / deeply subversive / overtly subversive",
        "comparative": "more subversive",
        "superlative": "the most subversive",
        "synonyms": [
            "rebellious",
            "disruptive"
        ],
        "opposite": "conformist",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_074",
        "word": "tacit",
        "emoji": "🤫",
        "form": "adjective",
        "transcription": "ˈtæsɪt",
        "definitions": [
            {
                "text": "Understood or agreed without being stated.",
                "examples": [
                    "There was a tacit understanding between them."
                ]
            }
        ],
        "subtext": "a tacit agreement / tacit approval / remain tacit",
        "comparative": "more tacit",
        "superlative": "the most tacit",
        "synonyms": [
            "implicit",
            "unspoken"
        ],
        "opposite": "explicit",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_075",
        "word": "tenuous",
        "emoji": "🕸️",
        "form": "adjective",
        "transcription": "ˈtenjuəs",
        "definitions": [
            {
                "text": "Very weak or slight; not firmly established.",
                "examples": [
                    "The connection between the two events is very tenuous."
                ]
            }
        ],
        "subtext": "very tenuous / rather tenuous / a tenuous link",
        "comparative": "more tenuous",
        "superlative": "the most tenuous",
        "synonyms": [
            "fragile",
            "weak"
        ],
        "opposite": "strong",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_time_002",
        "word": "transient",
        "emoji": "🌅",
        "form": "adjective",
        "transcription": "ˈtrænziənt",
        "definitions": [
            {
                "text": "Not permanent; passing quickly.",
                "examples": [
                    "The benefits were transient and disappeared within months."
                ]
            }
        ],
        "subtext": "very transient / merely transient / a transient effect",
        "comparative": "more transient",
        "superlative": "the most transient",
        "synonyms": [
            "temporary",
            "fleeting"
        ],
        "opposite": "permanent",
        "lang": "en",
        "level": "proficiency",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_015",
        "word": "ubiquitous",
        "emoji": "🌍",
        "form": "adjective",
        "transcription": "juːˈbɪkwɪtəs",
        "definitions": [
            {
                "text": "Appearing everywhere; very common.",
                "examples": [
                    "Smartphones have become ubiquitous in daily life."
                ]
            }
        ],
        "subtext": "truly ubiquitous / seemingly ubiquitous / become ubiquitous",
        "comparative": "more ubiquitous",
        "superlative": "the most ubiquitous",
        "synonyms": [
            "ever-present",
            "omnipresent"
        ],
        "opposite": "rare",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_076",
        "word": "unequivocal",
        "emoji": "📢",
        "form": "adjective",
        "transcription": "ˌʌnɪˈkwɪvəkl",
        "definitions": [
            {
                "text": "Leaving no doubt; completely clear.",
                "examples": [
                    "Her support for the decision was unequivocal."
                ]
            }
        ],
        "subtext": "completely unequivocal / absolutely unequivocal / an unequivocal rejection",
        "comparative": "more unequivocal",
        "superlative": "the most unequivocal",
        "synonyms": [
            "unambiguous",
            "clear"
        ],
        "opposite": "ambiguous",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_social_016",
        "word": "unprecedented",
        "emoji": "🚀",
        "form": "adjective",
        "transcription": "ʌnˈpresɪdentɪd",
        "definitions": [
            {
                "text": "Never having happened before.",
                "examples": [
                    "The company achieved unprecedented growth in five years."
                ]
            }
        ],
        "subtext": "truly unprecedented / completely unprecedented / an unprecedented event",
        "comparative": "more unprecedented",
        "superlative": "the most unprecedented",
        "synonyms": [
            "unparalleled",
            "novel"
        ],
        "opposite": "common",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_077",
        "word": "untenable",
        "emoji": "🏗️",
        "form": "adjective",
        "transcription": "ʌnˈtenəbl",
        "definitions": [
            {
                "text": "Not able to be maintained or defended.",
                "examples": [
                    "Her position became completely untenable."
                ]
            }
        ],
        "subtext": "completely untenable / utterly untenable / an untenable argument",
        "comparative": "more untenable",
        "superlative": "the most untenable",
        "synonyms": [
            "indefensible",
            "unsustainable"
        ],
        "opposite": "defensible",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_proficiency_language_078",
        "word": "unwieldy",
        "emoji": "📦",
        "form": "adjective",
        "transcription": "ʌnˈwiːldi",
        "definitions": [
            {
                "text": "Difficult to handle or manage because of size.",
                "examples": [
                    "The process has become unwieldy and inefficient."
                ]
            }
        ],
        "subtext": "very unwieldy / rather unwieldy / an unwieldy system",
        "comparative": "more unwieldy",
        "superlative": "the most unwieldy",
        "synonyms": [
            "clumsy",
            "awkward"
        ],
        "opposite": "manageable",
        "lang": "en",
        "level": "proficiency",
        "theme": "language",
        "sub_theme": null
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();