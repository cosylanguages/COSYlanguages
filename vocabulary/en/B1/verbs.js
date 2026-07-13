// TODO: verify level classification
(function() {
const data = [
    {
        "id": "en_intermediate_social_054",
        "word": "photograph",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To take a picture of someone or something using a camera.",
                "examples": [
                    "He spent the day photographing the local wildlife."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈfəʊtəɡrɑːf | 🇺🇸 ˈfoʊtəɡrɑːf",
        "emoji": "📷",
        "_legacy": {
            "subtext": "photograph a wedding, photograph wildlife",
            "classification": "regular",
            "aspect": "action",
            "v2": "photographed",
            "v3": "photographed",
            "group": "regular",
            "auxiliary": "have",
            "v4": "photographing"
        }
    },
    {
        "id": "en_intermediate_social_055",
        "word": "garden",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To work in a garden, taking care of plants and flowers.",
                "examples": [
                    "My grandmother loves to garden in the morning."
                ]
            }
        ],
        "transcription": "ˈɡɑːdn",
        "emoji": "🪴",
        "_legacy": {
            "subtext": "garden on weekends, organic gardening",
            "classification": "regular",
            "aspect": "action",
            "v2": "gardened",
            "v3": "gardened",
            "group": "regular",
            "auxiliary": "have",
            "v4": "gardening"
        }
    },
    {
        "id": "en_intermediate_social_056",
        "word": "fish",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To try to catch fish using a net or a line.",
                "examples": [
                    "They fish in the river every summer."
                ]
            }
        ],
        "transcription": "fɪʃ",
        "emoji": "🎣",
        "_legacy": {
            "image": "images/vocabulary/actions/to fish.png",
            "subtext": "go fishing, fish for trout",
            "classification": "regular",
            "aspect": "action",
            "v2": "fished",
            "v3": "fished",
            "group": "regular",
            "auxiliary": "have",
            "v4": "fishing",
            "etymology": {
                "origin_lang": "Proto-Germanic",
                "origin_word": "fiskaz"
            }
        }
    },
    {
        "id": "en_intermediate_social_057",
        "word": "volunteer",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To offer to do something without being paid.",
                "examples": [
                    "She volunteers at the local food bank.",
                    "I want to volunteer for the charity event.",
                    "She volunteers at the local food bank every Saturday."
                ]
            }
        ],
        "transcription": "🇬🇧 ˌvɒlənˈtɪə | 🇺🇸 ˌvɑːlənˈtɪər",
        "emoji": "🙋",
        "_legacy": {
            "subtext": "volunteer work, unpaid work",
            "classification": "regular",
            "aspect": "action",
            "v2": "volunteered",
            "v3": "volunteered",
            "group": "regular",
            "auxiliary": "have",
            "v4": "volunteering"
        }
    },
    {
        "id": "en_intermediate_environment_010",
        "word": "recycle",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "verb",
        "definitions": [
            {
                "text": "To convert waste into reusable material.",
                "examples": [
                    "They recycle glass, paper and plastic every week."
                ]
            }
        ],
        "transcription": "ˌriːˈsaɪkl",
        "emoji": "♻️",
        "_legacy": {
            "subtext": "recycle plastic, recycling bin",
            "classification": "regular",
            "aspect": "action",
            "v2": "recycled",
            "v3": "recycled",
            "group": "regular",
            "auxiliary": "have",
            "v4": "recycling"
        }
    },
    {
        "id": "en_intermediate_structured_argument_006",
        "word": "argue",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "verb",
        "definitions": [
            {
                "text": "To present reasons supporting a particular view.",
                "examples": [
                    "She argued that remote work reduces productivity."
                ]
            }
        ],
        "transcription": "ˈɑːɡjuː",
        "emoji": "🗣️",
        "_legacy": {
            "subtext": "argue about, argue for",
            "classification": "regular",
            "aspect": "action",
            "v2": "argued",
            "v3": "argued",
            "group": "regular",
            "auxiliary": "have",
            "v4": "arguing"
        }
    },
    {
        "id": "en_intermediate_work_033",
        "word": "suggest",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To put forward an idea for consideration.",
                "examples": [
                    "She suggested reviewing the policy after six months."
                ]
            }
        ],
        "transcription": "səˈdʒɛst",
        "emoji": "💡",
        "_legacy": {
            "subtext": "suggest a change / suggest that / suggest an alternative",
            "classification": "regular",
            "aspect": "action",
            "v2": "suggested",
            "v3": "suggested",
            "group": "regular",
            "auxiliary": "have",
            "v4": "suggesting"
        }
    },
    {
        "id": "en_intermediate_structured_argument_007",
        "word": "claim",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "verb",
        "definitions": [
            {
                "text": "To state something as true without necessarily proving it.",
                "examples": [
                    "He claims the new system will reduce costs by thirty percent."
                ]
            }
        ],
        "transcription": "kleɪm",
        "emoji": "📢",
        "_legacy": {
            "subtext": "claim that / make a claim / claim responsibility",
            "classification": "regular",
            "aspect": "action",
            "v2": "claimed",
            "v3": "claimed",
            "group": "regular",
            "auxiliary": "have",
            "v4": "claiming"
        }
    },
    {
        "id": "en_intermediate_values_beliefs_008",
        "word": "believe",
        "lang": "en",
        "level": "intermediate",
        "theme": "psychology",
        "form": "verb",
        "definitions": [
            {
                "text": "To hold something as true; to have confidence in something.",
                "examples": [
                    "I believe remote working improves productivity overall."
                ]
            }
        ],
        "transcription": "bɪˈliːv",
        "emoji": "💭",
        "_legacy": {
            "subtext": "believe that / strongly believe / believe in something",
            "classification": "regular",
            "aspect": "stative",
            "v2": "believed",
            "v3": "believed",
            "group": "regular",
            "auxiliary": "have",
            "v4": "believing"
        }
    },
    {
        "id": "en_intermediate_work_034",
        "word": "deny",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To say that something is not true.",
                "examples": [
                    "She denied that the company had broken the contract."
                ]
            }
        ],
        "transcription": "dɪˈnaɪ",
        "emoji": "🚫",
        "_legacy": {
            "subtext": "deny a claim / deny responsibility / flatly deny",
            "classification": "regular",
            "aspect": "action",
            "v2": "denied",
            "v3": "denied",
            "group": "regular",
            "auxiliary": "have",
            "v4": "denying"
        }
    },
    {
        "id": "en_intermediate_career_development_039",
        "word": "consider",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To think carefully about something; to regard something in a certain way.",
                "examples": [
                    "The board is considering a new flexible working policy."
                ]
            }
        ],
        "transcription": "🇬🇧 kənˈsɪdə | 🇺🇸 kənˈsɪdər",
        "emoji": "🤔",
        "_legacy": {
            "subtext": "consider an option / consider carefully / consider someone for a role",
            "classification": "regular",
            "aspect": "both",
            "v2": "considered",
            "v3": "considered",
            "group": "regular",
            "auxiliary": "have",
            "v4": "considering"
        }
    },
    {
        "id": "en_intermediate_work_035",
        "word": "assume",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To accept something as true without proof.",
                "examples": [
                    "He assumed the meeting was cancelled without checking."
                ]
            }
        ],
        "transcription": "əˈsjuːm",
        "emoji": "💭",
        "_legacy": {
            "subtext": "assume that / make an assumption / never assume",
            "classification": "regular",
            "aspect": "stative",
            "v2": "assumed",
            "v3": "assumed",
            "group": "regular",
            "auxiliary": "have",
            "v4": "assuming"
        }
    },
    {
        "id": "en_intermediate_work_036",
        "word": "admit",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To confess or accept that something is true.",
                "examples": [
                    "She admitted that the project had not gone as planned."
                ]
            }
        ],
        "transcription": "ədˈmɪt",
        "emoji": "🙊",
        "_legacy": {
            "subtext": "admit a mistake / admit to / reluctantly admit",
            "classification": "regular",
            "aspect": "action",
            "v2": "admitted",
            "v3": "admitted",
            "group": "regular",
            "auxiliary": "have",
            "v4": "admiting"
        }
    },
    {
        "id": "en_intermediate_work_037",
        "word": "acknowledge",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To recognise or accept the existence or truth of something.",
                "examples": [
                    "He acknowledged the problem but offered no solution."
                ]
            }
        ],
        "transcription": "🇬🇧 əkˈnɒlɪdʒ | 🇺🇸 əkˈnɑːlɪdʒ",
        "emoji": "🤝",
        "_legacy": {
            "subtext": "acknowledge a problem / acknowledge someone / acknowledge that",
            "classification": "regular",
            "aspect": "action",
            "v2": "acknowledged",
            "v3": "acknowledged",
            "group": "regular",
            "auxiliary": "have",
            "v4": "acknowledging"
        }
    },
    {
        "id": "en_intermediate_probability_certainty_003",
        "word": "doubt",
        "lang": "en",
        "level": "intermediate",
        "theme": "describing",
        "form": "verb",
        "definitions": [
            {
                "text": "To feel uncertain about something.",
                "examples": [
                    "She doubts the new strategy will work in practice."
                ]
            }
        ],
        "transcription": "daʊt",
        "emoji": "❓",
        "_legacy": {
            "subtext": "doubt that / have doubts / seriously doubt",
            "classification": "regular",
            "aspect": "stative",
            "v2": "doubted",
            "v3": "doubted",
            "group": "regular",
            "auxiliary": "have",
            "v4": "doubting"
        }
    },
    {
        "id": "en_intermediate_work_038",
        "word": "insist",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To demand something firmly; to maintain a position strongly.",
                "examples": [
                    "He insisted on a written confirmation of the agreement."
                ]
            }
        ],
        "transcription": "ɪnˈsɪst",
        "emoji": "🗣️",
        "_legacy": {
            "subtext": "insist on / insist that / strongly insist",
            "classification": "regular",
            "aspect": "action",
            "v2": "insisted",
            "v3": "insisted",
            "group": "regular",
            "auxiliary": "have",
            "v4": "insisting"
        }
    },
    {
        "id": "en_intermediate_work_039",
        "word": "present",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To show or explain information to an audience.",
                "examples": [
                    "She presents the quarterly results to the board every month."
                ]
            }
        ],
        "transcription": "prɪˈzɛnt",
        "emoji": "📊",
        "_legacy": {
            "subtext": "present data / present a proposal / present to a client",
            "classification": "regular",
            "aspect": "action",
            "v2": "presented",
            "v3": "presented",
            "group": "regular",
            "auxiliary": "have",
            "v4": "presenting"
        }
    },
    {
        "id": "en_intermediate_work_040",
        "word": "implement",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To put a plan or decision into action.",
                "examples": [
                    "The new policy will be implemented from January."
                ]
            }
        ],
        "transcription": "ˈɪmplɪmɛnt",
        "emoji": "⚙️",
        "_legacy": {
            "subtext": "implement a policy / implement changes / implement a strategy",
            "classification": "regular",
            "aspect": "action",
            "v2": "implemented",
            "v3": "implemented",
            "group": "regular",
            "auxiliary": "have",
            "v4": "implementing"
        }
    },
    {
        "id": "en_intermediate_career_development_040",
        "word": "achieve",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To successfully reach a goal through effort.",
                "examples": [
                    "The team achieved all its targets for the quarter."
                ]
            }
        ],
        "transcription": "əˈtʃiːv",
        "emoji": "🏆",
        "_legacy": {
            "subtext": "achieve a goal / achieve results / achieve success",
            "classification": "regular",
            "aspect": "action",
            "v2": "achieved",
            "v3": "achieved",
            "group": "regular",
            "auxiliary": "have",
            "v4": "achieving"
        }
    },
    {
        "id": "en_intermediate_work_041",
        "word": "contribute",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To give something — time, money or ideas — to a shared purpose.",
                "examples": [
                    "She contributes valuable experience to every project."
                ]
            }
        ],
        "transcription": "kənˈtrɪbjuːt",
        "emoji": "🤝",
        "_legacy": {
            "subtext": "contribute to / contribute ideas / make a contribution",
            "classification": "regular",
            "aspect": "action",
            "v2": "contributed",
            "v3": "contributed",
            "group": "regular",
            "auxiliary": "have",
            "v4": "contributing"
        }
    },
    {
        "id": "en_intermediate_work_042",
        "word": "identify",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To recognise or find something specific.",
                "examples": [
                    "The report identified three key problems with the system."
                ]
            }
        ],
        "transcription": "aɪˈdɛntɪfaɪ",
        "emoji": "🔍",
        "_legacy": {
            "subtext": "identify a problem / identify a solution / identify risks",
            "classification": "regular",
            "aspect": "action",
            "v2": "identified",
            "v3": "identified",
            "group": "regular",
            "auxiliary": "have",
            "v4": "identifying"
        }
    },
    {
        "id": "en_intermediate_career_development_041",
        "word": "adapt",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To change in order to suit new conditions.",
                "examples": [
                    "He quickly adapted to the new working environment."
                ]
            }
        ],
        "transcription": "əˈdæpt",
        "emoji": "🔄",
        "_legacy": {
            "subtext": "adapt to change / adapt a plan / be adaptable",
            "classification": "regular",
            "aspect": "both",
            "v2": "adapted",
            "v3": "adapted",
            "group": "regular",
            "auxiliary": "have",
            "v4": "adapting"
        }
    },
    {
        "id": "en_intermediate_career_development_042",
        "word": "motivate",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To give someone a reason to do something; to inspire action.",
                "examples": [
                    "A good leader motivates the team even under pressure."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈməʊtɪveɪt | 🇺🇸 ˈmoʊtɪveɪt",
        "emoji": "🔥",
        "_legacy": {
            "subtext": "motivate a team / feel motivated / self-motivated",
            "classification": "regular",
            "aspect": "action",
            "v2": "motivated",
            "v3": "motivated",
            "group": "regular",
            "auxiliary": "have",
            "v4": "motivating"
        }
    },
    {
        "id": "en_intermediate_work_043",
        "word": "prioritise",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To treat one thing as more important than another.",
                "examples": [
                    "She had to prioritise the urgent client deadline."
                ]
            }
        ],
        "transcription": "🇬🇧 praɪˈɒrɪtaɪz | 🇺🇸 praɪˈɑːrɪtaɪz",
        "emoji": "🔝",
        "_legacy": {
            "subtext": "prioritise work / prioritise health / set priorities",
            "classification": "regular",
            "aspect": "action",
            "v2": "prioritised",
            "v3": "prioritised",
            "group": "regular",
            "auxiliary": "have",
            "v4": "prioritising"
        }
    },
    {
        "id": "en_intermediate_work_044",
        "word": "resolve",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To find a solution to a problem or disagreement.",
                "examples": [
                    "They resolved the dispute through mediation."
                ]
            }
        ],
        "transcription": "🇬🇧 rɪˈzɒlv | 🇺🇸 rɪˈzɑːlv",
        "emoji": "✅",
        "_legacy": {
            "subtext": "resolve a conflict / resolve an issue / resolve quickly",
            "classification": "regular",
            "aspect": "action",
            "v2": "resolved",
            "v3": "resolved",
            "group": "regular",
            "auxiliary": "have",
            "v4": "resolving"
        }
    },
    {
        "id": "en_intermediate_career_development_043",
        "word": "develop",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To grow or cause something to grow more advanced.",
                "examples": [
                    "The company is developing a new product line."
                ]
            }
        ],
        "transcription": "dɪˈvɛləp",
        "emoji": "📈",
        "_legacy": {
            "subtext": "develop a skill / develop a plan / develop over time",
            "classification": "regular",
            "aspect": "action",
            "v2": "developed",
            "v3": "developed",
            "group": "regular",
            "auxiliary": "have",
            "v4": "developing"
        }
    },
    {
        "id": "en_intermediate_finances_investment_003",
        "word": "increase",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "To become or make something larger in amount or level.",
                "examples": [
                    "Stress levels have increased significantly since the restructure."
                ]
            }
        ],
        "transcription": "ɪnˈkriːs",
        "emoji": "📈",
        "_legacy": {
            "subtext": "increase productivity / increase costs / dramatically increase",
            "classification": "regular",
            "aspect": "action",
            "v2": "increased",
            "v3": "increased",
            "group": "regular",
            "auxiliary": "have",
            "v4": "increasing"
        }
    },
    {
        "id": "en_intermediate_finances_investment_004",
        "word": "reduce",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something smaller in size, amount or degree.",
                "examples": [
                    "The company is trying to reduce its carbon footprint."
                ]
            }
        ],
        "transcription": "rɪˈdjuːs",
        "emoji": "📉",
        "_legacy": {
            "subtext": "reduce costs / reduce stress / significantly reduce",
            "classification": "regular",
            "aspect": "action",
            "v2": "reduced",
            "v3": "reduced",
            "group": "regular",
            "auxiliary": "have",
            "v4": "reducing"
        }
    },
    {
        "id": "en_intermediate_environment_011",
        "word": "affect",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "verb",
        "definitions": [
            {
                "text": "To have an impact on something or someone.",
                "examples": [
                    "Remote working has affected team communication."
                ]
            }
        ],
        "transcription": "əˈfɛkt",
        "emoji": "⚖️",
        "_legacy": {
            "subtext": "affect someone / affect the result / negatively affect",
            "classification": "regular",
            "aspect": "action",
            "v2": "affected",
            "v3": "affected",
            "group": "regular",
            "auxiliary": "have",
            "v4": "affecting"
        }
    },
    {
        "id": "en_intermediate_environment_012",
        "word": "cause",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something happen, especially something bad.",
                "examples": [
                    "Long commutes can cause significant stress and fatigue."
                ]
            }
        ],
        "transcription": "kɔːz",
        "emoji": "⚡",
        "_legacy": {
            "subtext": "cause a problem / cause stress / cause damage",
            "classification": "regular",
            "aspect": "action",
            "v2": "caused",
            "v3": "caused",
            "group": "regular",
            "auxiliary": "have",
            "v4": "causing"
        }
    },
    {
        "id": "en_intermediate_career_development_044",
        "word": "improve",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something better, or to become better.",
                "examples": [
                    "She improved her public speaking skills significantly."
                ]
            }
        ],
        "transcription": "ɪmˈpruːv",
        "emoji": "✨",
        "_legacy": {
            "subtext": "improve performance / improve health / room for improvement",
            "classification": "regular",
            "aspect": "both",
            "v2": "improved",
            "v3": "improved",
            "group": "regular",
            "auxiliary": "have",
            "v4": "improving"
        }
    },
    {
        "id": "en_intermediate_work_045",
        "word": "replace",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To take the place of something or someone.",
                "examples": [
                    "The new system will replace the current one next year."
                ]
            }
        ],
        "transcription": "rɪˈpleɪs",
        "emoji": "🔄",
        "_legacy": {
            "subtext": "replace something / replace someone / be replaced by",
            "classification": "regular",
            "aspect": "action",
            "v2": "replaced",
            "v3": "replaced",
            "group": "regular",
            "auxiliary": "have",
            "v4": "replacing"
        }
    },
    {
        "id": "en_intermediate_work_046",
        "word": "report",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To give a formal account of something.",
                "examples": [
                    "She reported the findings to the senior management team."
                ]
            }
        ],
        "transcription": "rɪˈpɔːt",
        "emoji": "📄",
        "_legacy": {
            "subtext": "report findings / report to someone / report a problem",
            "classification": "regular",
            "aspect": "action",
            "v2": "reported",
            "v3": "reported",
            "group": "regular",
            "auxiliary": "have",
            "v4": "reporting"
        }
    },
    {
        "id": "en_intermediate_work_047",
        "word": "warn",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To tell someone about a possible danger or difficulty.",
                "examples": [
                    "The consultant warned that the timeline was too ambitious."
                ]
            }
        ],
        "transcription": "wɔːn",
        "emoji": "⚠️",
        "_legacy": {
            "subtext": "warn someone / warn about a risk / issue a warning",
            "classification": "regular",
            "aspect": "action",
            "v2": "warned",
            "v3": "warned",
            "group": "regular",
            "auxiliary": "have",
            "v4": "warning"
        }
    },
    {
        "id": "en_intermediate_work_048",
        "word": "confirm",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To state that something is definitely true or correct.",
                "examples": [
                    "Please confirm your attendance before Friday."
                ]
            }
        ],
        "transcription": "kənˈfɜːm",
        "emoji": "✅",
        "_legacy": {
            "subtext": "confirm a booking / confirm receipt / confirm in writing",
            "classification": "regular",
            "aspect": "action",
            "v2": "confirmed",
            "v3": "confirmed",
            "group": "regular",
            "auxiliary": "have",
            "v4": "confirming"
        }
    },
    {
        "id": "en_intermediate_work_049",
        "word": "explain",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something clear by describing it in detail.",
                "examples": [
                    "He explained the new process to the whole team."
                ]
            }
        ],
        "transcription": "ɪkˈspleɪn",
        "emoji": "🗣️",
        "_legacy": {
            "subtext": "explain a process / explain to someone / clearly explain",
            "classification": "regular",
            "aspect": "action",
            "v2": "explained",
            "v3": "explained",
            "group": "regular",
            "auxiliary": "have",
            "v4": "explaining"
        }
    },
    {
        "id": "en_intermediate_work_050",
        "word": "describe",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To give details of what something or someone is like.",
                "examples": [
                    "Can you describe the main challenges of your current role?"
                ]
            }
        ],
        "transcription": "dɪˈskraɪb",
        "emoji": "💬",
        "_legacy": {
            "subtext": "describe a problem / describe a situation / describe someone",
            "classification": "regular",
            "aspect": "action",
            "v2": "described",
            "v3": "described",
            "group": "regular",
            "auxiliary": "have",
            "v4": "describing"
        }
    },
    {
        "id": "en_intermediate_social_058",
        "word": "vote",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To express a choice formally, especially in an election.",
                "examples": [
                    "She votes in every local and national election."
                ]
            }
        ],
        "transcription": "🇬🇧 vəʊt | 🇺🇸 voʊt",
        "emoji": "🗳️",
        "_legacy": {
            "subtext": "vote for / vote against / vote in an election",
            "classification": "regular",
            "aspect": "action",
            "v2": "voted",
            "v3": "voted",
            "group": "regular",
            "auxiliary": "have",
            "v4": "voting"
        }
    },
    {
        "id": "en_intermediate_social_059",
        "word": "participate",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To take part in something.",
                "examples": [
                    "He participates actively in community meetings."
                ]
            }
        ],
        "transcription": "pɑːˈtɪsɪpeɪt",
        "emoji": "🙋",
        "_legacy": {
            "subtext": "participate in / actively participate / participation rate",
            "classification": "regular",
            "aspect": "action",
            "v2": "participated",
            "v3": "participated",
            "group": "regular",
            "auxiliary": "have",
            "v4": "participating"
        }
    },
    {
        "id": "en_intermediate_social_060",
        "word": "protest",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To express disagreement or opposition publicly.",
                "examples": [
                    "Workers protested against the proposed pay cuts."
                ]
            }
        ],
        "transcription": "prəˈtɛst",
        "emoji": "📢",
        "_legacy": {
            "subtext": "protest against / stage a protest / peaceful protest",
            "classification": "regular",
            "aspect": "action",
            "v2": "protested",
            "v3": "protested",
            "group": "regular",
            "auxiliary": "have",
            "v4": "protesting"
        }
    },
    {
        "id": "en_intermediate_social_061",
        "word": "support",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To agree with and help a cause or person.",
                "examples": [
                    "She supports the campaign for better public transport."
                ]
            }
        ],
        "transcription": "səˈpɔːt",
        "emoji": "🤝",
        "_legacy": {
            "subtext": "support a cause / support someone / show support",
            "classification": "regular",
            "aspect": "both",
            "v2": "supported",
            "v3": "supported",
            "group": "regular",
            "auxiliary": "have",
            "v4": "supporting"
        }
    },
    {
        "id": "en_intermediate_social_062",
        "word": "raise",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To increase knowledge or concern about an issue.",
                "examples": [
                    "The campaign raised awareness of workplace mental health."
                ]
            }
        ],
        "transcription": "reɪz",
        "emoji": "📈",
        "_legacy": {
            "subtext": "raise awareness / raise a concern / raise an issue",
            "classification": "regular",
            "aspect": "action",
            "v2": "raised",
            "v3": "raised",
            "group": "regular",
            "auxiliary": "have",
            "v4": "raising"
        }
    },
    {
        "id": "en_intermediate_stress_anxiety_012",
        "word": "worry",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "verb",
        "definitions": [
            {
                "text": "To feel anxious about something uncertain.",
                "examples": [
                    "He worries constantly about job security."
                ]
            }
        ],
        "transcription": "ˈwʌri",
        "emoji": "😟",
        "_legacy": {
            "subtext": "worry about / stop worrying / cause worry",
            "classification": "regular",
            "aspect": "stative",
            "v2": "worried",
            "v3": "worried",
            "group": "regular",
            "auxiliary": "have",
            "v4": "worrying"
        }
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_018",
        "word": "regret",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "verb",
        "definitions": [
            {
                "text": "To feel sorry about something you did or did not do.",
                "examples": [
                    "She regrets not negotiating a higher salary at the start."
                ]
            }
        ],
        "transcription": "rɪˈɡrɛt",
        "emoji": "😔",
        "_legacy": {
            "subtext": "regret a decision / deeply regret / no regrets",
            "classification": "regular",
            "aspect": "stative",
            "v2": "regretted",
            "v3": "regretted",
            "group": "regular",
            "auxiliary": "have",
            "v4": "regreting"
        }
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_019",
        "word": "resent",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "verb",
        "definitions": [
            {
                "text": "To feel bitter or angry about something you consider unfair.",
                "examples": [
                    "He resents the fact that junior colleagues earn more."
                ]
            }
        ],
        "transcription": "rɪˈzɛnt",
        "emoji": "😠",
        "_legacy": {
            "subtext": "resent something / resent someone / feel resentment",
            "classification": "regular",
            "aspect": "stative",
            "v2": "resented",
            "v3": "resented",
            "group": "regular",
            "auxiliary": "have",
            "v4": "resenting"
        }
    },
    {
        "id": "en_intermediate_work_051",
        "word": "appreciate",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To recognise the value of something or someone.",
                "examples": [
                    "She genuinely appreciates honest feedback from her team."
                ]
            }
        ],
        "transcription": "əˈpriːʃieɪt",
        "emoji": "🙏",
        "_legacy": {
            "subtext": "appreciate something / appreciate someone's work / deeply appreciate",
            "classification": "regular",
            "aspect": "stative",
            "v2": "appreciated",
            "v3": "appreciated",
            "group": "regular",
            "auxiliary": "have",
            "v4": "appreciating"
        }
    },
    {
        "id": "en_intermediate_work_052",
        "word": "blame",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To hold someone responsible for something bad.",
                "examples": [
                    "She blamed the failure on poor communication within the team."
                ]
            }
        ],
        "transcription": "bleɪm",
        "emoji": "👈",
        "_legacy": {
            "subtext": "blame someone / blame yourself / shift the blame",
            "classification": "regular",
            "aspect": "stative",
            "v2": "blamed",
            "v3": "blamed",
            "group": "regular",
            "auxiliary": "have",
            "v4": "blaming"
        }
    },
    {
        "id": "en_intermediate_work_053",
        "word": "encourage",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To give confidence or support to someone.",
                "examples": [
                    "A good manager encourages the team during difficult periods."
                ]
            }
        ],
        "transcription": "ɪnˈkʌrɪdʒ",
        "emoji": "🙌",
        "_legacy": {
            "subtext": "encourage someone / encourage a behaviour / be encouraging",
            "classification": "regular",
            "aspect": "action",
            "v2": "encouraged",
            "v3": "encouraged",
            "group": "regular",
            "auxiliary": "have",
            "v4": "encouraging"
        }
    },
    {
        "id": "en_intermediate_work_054",
        "word": "take on",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To accept a new responsibility or challenge.",
                "examples": [
                    "She took on the new project despite her full workload."
                ]
            }
        ],
        "transcription": "🇬🇧 teɪk ɒn | 🇺🇸 teɪk ɑːn",
        "emoji": "📋",
        "_legacy": {
            "subtext": "take on responsibility / take on more work / take on a role",
            "classification": "phrasal",
            "aspect": "action",
            "v2": "took on",
            "v3": "taken on",
            "group": "regular",
            "auxiliary": "have"
        }
    },
    {
        "id": "en_intermediate_work_055",
        "word": "put off",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To delay something to a later time.",
                "examples": [
                    "He keeps putting off the difficult conversation with his manager."
                ]
            }
        ],
        "transcription": "🇬🇧 pʊt ɒf | 🇺🇸 pʊt ɑːf",
        "emoji": "⏳",
        "_legacy": {
            "subtext": "put off a decision / stop putting things off / keep putting off",
            "classification": "phrasal",
            "aspect": "action",
            "v2": "put off",
            "v3": "put off",
            "group": "regular",
            "auxiliary": "have"
        }
    },
    {
        "id": "en_intermediate_work_056",
        "word": "come across",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To meet or find something unexpectedly; to make an impression.",
                "examples": [
                    "She came across as very confident in the interview."
                ]
            }
        ],
        "transcription": "🇬🇧 kʌm əˈkrɒs | 🇺🇸 kʌm əˈkrɑːs",
        "emoji": "🤝",
        "_legacy": {
            "subtext": "come across well / come across a problem / come across as",
            "classification": "phrasal",
            "aspect": "both",
            "v2": "came across",
            "v3": "come across",
            "group": "regular",
            "auxiliary": "have"
        }
    },
    {
        "id": "en_intermediate_work_057",
        "word": "deal with",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To handle or take responsibility for a situation.",
                "examples": [
                    "He dealt with the client complaint professionally."
                ]
            }
        ],
        "transcription": "diːl wɪð",
        "emoji": "🛠️",
        "_legacy": {
            "subtext": "deal with a problem / deal with stress / hard to deal with",
            "classification": "phrasal",
            "aspect": "action",
            "v2": "dealt with",
            "v3": "dealt with",
            "group": "regular",
            "auxiliary": "have"
        }
    },
    {
        "id": "en_intermediate_social_063",
        "word": "stand for",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To represent or tolerate something.",
                "examples": [
                    "What values does your company stand for?"
                ]
            }
        ],
        "transcription": "stænd fɔː",
        "emoji": "🛡️",
        "_legacy": {
            "subtext": "stand for something / not stand for / what does it stand for",
            "classification": "phrasal",
            "aspect": "stative",
            "v2": "stood for",
            "v3": "stood for",
            "group": "regular",
            "auxiliary": "have"
        }
    },
    {
        "id": "en_intermediate_career_development_045",
        "word": "build up",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To gradually increase or develop something.",
                "examples": [
                    "She has built up a strong professional network over ten years."
                ]
            }
        ],
        "transcription": "bɪld ʌp",
        "emoji": "🏗️",
        "_legacy": {
            "subtext": "build up experience / build up savings / build up trust",
            "classification": "phrasal",
            "aspect": "action",
            "v2": "built up",
            "v3": "built up",
            "group": "regular",
            "auxiliary": "have"
        }
    },
    {
        "id": "en_intermediate_finances_investment_005",
        "word": "run out",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "To have no more of something left.",
                "examples": [
                    "The project ran out of budget three weeks early."
                ]
            }
        ],
        "transcription": "rʌn aʊt",
        "emoji": "📉",
        "_legacy": {
            "subtext": "run out of money / run out of time / run out of ideas",
            "classification": "phrasal",
            "aspect": "action",
            "v2": "ran out",
            "v3": "run out",
            "group": "regular",
            "auxiliary": "have"
        }
    },
    {
        "id": "en_intermediate_work_058",
        "word": "look into",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "verb",
        "definitions": [
            {
                "text": "To investigate or examine something in detail.",
                "examples": [
                    "The HR team looked into the complaint immediately."
                ]
            }
        ],
        "transcription": "lʊk ˈɪntə",
        "emoji": "🔍",
        "_legacy": {
            "subtext": "look into a matter / look into a complaint / look into options",
            "classification": "phrasal",
            "aspect": "action",
            "v2": "looked into",
            "v3": "looked into",
            "group": "regular",
            "auxiliary": "have"
        }
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);


    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();