// TODO: verify level classification
(function() {
const data = [
    {
        "id": "en_intermediate_social_032",
        "word": "photograph",
        "emoji": "📷",
        "form": "verb",
        "subtext": "photograph a wedding, photograph wildlife",
        "definitions": [
            {
                "text": "To take a picture of someone or something using a camera.",
                "examples": [
                    "He spent the day photographing the local wildlife."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "photographed",
        "v3": "photographed",
        "transcription": "🇬🇧 ˈfəʊtəɡrɑːf | 🇺🇸 ˈfoʊtəɡrɑːf",
        "group": "regular",
        "auxiliary": "have",
        "v4": "photographing",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_033",
        "word": "garden",
        "emoji": "🪴",
        "form": "verb",
        "subtext": "garden on weekends, organic gardening",
        "definitions": [
            {
                "text": "To work in a garden, taking care of plants and flowers.",
                "examples": [
                    "My grandmother loves to garden in the morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "gardened",
        "v3": "gardened",
        "transcription": "ˈɡɑːdn",
        "group": "regular",
        "auxiliary": "have",
        "v4": "gardening",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_034",
        "word": "fish",
        "image": "images/vocabulary/actions/to fish.png",
        "emoji": "🎣",
        "form": "verb",
        "subtext": "go fishing, fish for trout",
        "definitions": [
            {
                "text": "To try to catch fish using a net or a line.",
                "examples": [
                    "They fish in the river every summer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fished",
        "v3": "fished",
        "transcription": "fɪʃ",
        "group": "regular",
        "auxiliary": "have",
        "v4": "fishing",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": "sea"
    },
    {
        "id": "en_intermediate_social_035",
        "word": "volunteer",
        "emoji": "🙋",
        "form": "verb",
        "subtext": "volunteer work, unpaid work",
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
        "classification": "regular",
        "aspect": "action",
        "v2": "volunteered",
        "v3": "volunteered",
        "transcription": "🇬🇧 ˌvɒlənˈtɪə | 🇺🇸 ˌvɑːlənˈtɪər",
        "group": "regular",
        "auxiliary": "have",
        "v4": "volunteering",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_environment_010",
        "word": "recycle",
        "emoji": "♻️",
        "form": "verb",
        "transcription": "ˌriːˈsaɪkl",
        "subtext": "recycle plastic, recycling bin",
        "definitions": [
            {
                "text": "To convert waste into reusable material.",
                "examples": [
                    "They recycle glass, paper and plastic every week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recycled",
        "v3": "recycled",
        "group": "regular",
        "auxiliary": "have",
        "v4": "recycling",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_structured_argument_006",
        "word": "argue",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "ˈɑːɡjuː",
        "subtext": "argue about, argue for",
        "definitions": [
            {
                "text": "To present reasons supporting a particular view.",
                "examples": [
                    "She argued that remote work reduces productivity."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "argued",
        "v3": "argued",
        "group": "regular",
        "auxiliary": "have",
        "v4": "arguing",
        "lang": "en",
        "level": "intermediate",
        "theme": "structured_argument",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_009",
        "word": "suggest",
        "emoji": "💡",
        "form": "verb",
        "transcription": "səˈdʒɛst",
        "subtext": "suggest a change / suggest that / suggest an alternative",
        "definitions": [
            {
                "text": "To put forward an idea for consideration.",
                "examples": [
                    "She suggested reviewing the policy after six months."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "suggested",
        "v3": "suggested",
        "group": "regular",
        "auxiliary": "have",
        "v4": "suggesting",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_structured_argument_007",
        "word": "claim",
        "emoji": "📢",
        "form": "verb",
        "transcription": "kleɪm",
        "subtext": "claim that / make a claim / claim responsibility",
        "definitions": [
            {
                "text": "To state something as true without necessarily proving it.",
                "examples": [
                    "He claims the new system will reduce costs by thirty percent."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "claimed",
        "v3": "claimed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "claiming",
        "lang": "en",
        "level": "intermediate",
        "theme": "structured_argument",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_values_beliefs_008",
        "word": "believe",
        "emoji": "💭",
        "form": "verb",
        "transcription": "bɪˈliːv",
        "subtext": "believe that / strongly believe / believe in something",
        "definitions": [
            {
                "text": "To hold something as true; to have confidence in something.",
                "examples": [
                    "I believe remote working improves productivity overall."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "believed",
        "v3": "believed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "believing",
        "lang": "en",
        "level": "intermediate",
        "theme": "values_beliefs",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_010",
        "word": "deny",
        "emoji": "🚫",
        "form": "verb",
        "transcription": "dɪˈnaɪ",
        "subtext": "deny a claim / deny responsibility / flatly deny",
        "definitions": [
            {
                "text": "To say that something is not true.",
                "examples": [
                    "She denied that the company had broken the contract."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "denied",
        "v3": "denied",
        "group": "regular",
        "auxiliary": "have",
        "v4": "denying",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_039",
        "word": "consider",
        "emoji": "🤔",
        "form": "verb",
        "transcription": "🇬🇧 kənˈsɪdə | 🇺🇸 kənˈsɪdər",
        "subtext": "consider an option / consider carefully / consider someone for a role",
        "definitions": [
            {
                "text": "To think carefully about something; to regard something in a certain way.",
                "examples": [
                    "The board is considering a new flexible working policy."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "considered",
        "v3": "considered",
        "group": "regular",
        "auxiliary": "have",
        "v4": "considering",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_011",
        "word": "assume",
        "emoji": "💭",
        "form": "verb",
        "transcription": "əˈsjuːm",
        "subtext": "assume that / make an assumption / never assume",
        "definitions": [
            {
                "text": "To accept something as true without proof.",
                "examples": [
                    "He assumed the meeting was cancelled without checking."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "assumed",
        "v3": "assumed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "assuming",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_012",
        "word": "admit",
        "emoji": "🙊",
        "form": "verb",
        "transcription": "ədˈmɪt",
        "subtext": "admit a mistake / admit to / reluctantly admit",
        "definitions": [
            {
                "text": "To confess or accept that something is true.",
                "examples": [
                    "She admitted that the project had not gone as planned."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "admitted",
        "v3": "admitted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "admiting",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_013",
        "word": "acknowledge",
        "emoji": "🤝",
        "form": "verb",
        "transcription": "🇬🇧 əkˈnɒlɪdʒ | 🇺🇸 əkˈnɑːlɪdʒ",
        "subtext": "acknowledge a problem / acknowledge someone / acknowledge that",
        "definitions": [
            {
                "text": "To recognise or accept the existence or truth of something.",
                "examples": [
                    "He acknowledged the problem but offered no solution."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acknowledged",
        "v3": "acknowledged",
        "group": "regular",
        "auxiliary": "have",
        "v4": "acknowledging",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_probability_certainty_003",
        "word": "doubt",
        "emoji": "❓",
        "form": "verb",
        "transcription": "daʊt",
        "subtext": "doubt that / have doubts / seriously doubt",
        "definitions": [
            {
                "text": "To feel uncertain about something.",
                "examples": [
                    "She doubts the new strategy will work in practice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "doubted",
        "v3": "doubted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "doubting",
        "lang": "en",
        "level": "intermediate",
        "theme": "probability_certainty",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_014",
        "word": "insist",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "ɪnˈsɪst",
        "subtext": "insist on / insist that / strongly insist",
        "definitions": [
            {
                "text": "To demand something firmly; to maintain a position strongly.",
                "examples": [
                    "He insisted on a written confirmation of the agreement."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "insisted",
        "v3": "insisted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "insisting",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_015",
        "word": "present",
        "emoji": "📊",
        "form": "verb",
        "transcription": "prɪˈzɛnt",
        "subtext": "present data / present a proposal / present to a client",
        "definitions": [
            {
                "text": "To show or explain information to an audience.",
                "examples": [
                    "She presents the quarterly results to the board every month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "presented",
        "v3": "presented",
        "group": "regular",
        "auxiliary": "have",
        "v4": "presenting",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_016",
        "word": "implement",
        "emoji": "⚙️",
        "form": "verb",
        "transcription": "ˈɪmplɪmɛnt",
        "subtext": "implement a policy / implement changes / implement a strategy",
        "definitions": [
            {
                "text": "To put a plan or decision into action.",
                "examples": [
                    "The new policy will be implemented from January."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "implemented",
        "v3": "implemented",
        "group": "regular",
        "auxiliary": "have",
        "v4": "implementing",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_040",
        "word": "achieve",
        "emoji": "🏆",
        "form": "verb",
        "transcription": "əˈtʃiːv",
        "subtext": "achieve a goal / achieve results / achieve success",
        "definitions": [
            {
                "text": "To successfully reach a goal through effort.",
                "examples": [
                    "The team achieved all its targets for the quarter."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "achieved",
        "v3": "achieved",
        "group": "regular",
        "auxiliary": "have",
        "v4": "achieving",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_017",
        "word": "contribute",
        "emoji": "🤝",
        "form": "verb",
        "transcription": "kənˈtrɪbjuːt",
        "subtext": "contribute to / contribute ideas / make a contribution",
        "definitions": [
            {
                "text": "To give something — time, money or ideas — to a shared purpose.",
                "examples": [
                    "She contributes valuable experience to every project."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contributed",
        "v3": "contributed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "contributing",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_018",
        "word": "identify",
        "emoji": "🔍",
        "form": "verb",
        "transcription": "aɪˈdɛntɪfaɪ",
        "subtext": "identify a problem / identify a solution / identify risks",
        "definitions": [
            {
                "text": "To recognise or find something specific.",
                "examples": [
                    "The report identified three key problems with the system."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "identified",
        "v3": "identified",
        "group": "regular",
        "auxiliary": "have",
        "v4": "identifying",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_041",
        "word": "adapt",
        "emoji": "🔄",
        "form": "verb",
        "transcription": "əˈdæpt",
        "subtext": "adapt to change / adapt a plan / be adaptable",
        "definitions": [
            {
                "text": "To change in order to suit new conditions.",
                "examples": [
                    "He quickly adapted to the new working environment."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "adapted",
        "v3": "adapted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "adapting",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_042",
        "word": "motivate",
        "emoji": "🔥",
        "form": "verb",
        "transcription": "🇬🇧 ˈməʊtɪveɪt | 🇺🇸 ˈmoʊtɪveɪt",
        "subtext": "motivate a team / feel motivated / self-motivated",
        "definitions": [
            {
                "text": "To give someone a reason to do something; to inspire action.",
                "examples": [
                    "A good leader motivates the team even under pressure."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "motivated",
        "v3": "motivated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "motivating",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_019",
        "word": "prioritise",
        "emoji": "🔝",
        "form": "verb",
        "transcription": "🇬🇧 praɪˈɒrɪtaɪz | 🇺🇸 praɪˈɑːrɪtaɪz",
        "subtext": "prioritise work / prioritise health / set priorities",
        "definitions": [
            {
                "text": "To treat one thing as more important than another.",
                "examples": [
                    "She had to prioritise the urgent client deadline."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "prioritised",
        "v3": "prioritised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "prioritising",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_020",
        "word": "resolve",
        "emoji": "✅",
        "form": "verb",
        "transcription": "🇬🇧 rɪˈzɒlv | 🇺🇸 rɪˈzɑːlv",
        "subtext": "resolve a conflict / resolve an issue / resolve quickly",
        "definitions": [
            {
                "text": "To find a solution to a problem or disagreement.",
                "examples": [
                    "They resolved the dispute through mediation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "resolved",
        "v3": "resolved",
        "group": "regular",
        "auxiliary": "have",
        "v4": "resolving",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_043",
        "word": "develop",
        "emoji": "📈",
        "form": "verb",
        "transcription": "dɪˈvɛləp",
        "subtext": "develop a skill / develop a plan / develop over time",
        "definitions": [
            {
                "text": "To grow or cause something to grow more advanced.",
                "examples": [
                    "The company is developing a new product line."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "developed",
        "v3": "developed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "developing",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_finances_investment_003",
        "word": "increase",
        "emoji": "📈",
        "form": "verb",
        "transcription": "ɪnˈkriːs",
        "subtext": "increase productivity / increase costs / dramatically increase",
        "definitions": [
            {
                "text": "To become or make something larger in amount or level.",
                "examples": [
                    "Stress levels have increased significantly since the restructure."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "increased",
        "v3": "increased",
        "group": "regular",
        "auxiliary": "have",
        "v4": "increasing",
        "lang": "en",
        "level": "intermediate",
        "theme": "finances_investment",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_finances_investment_004",
        "word": "reduce",
        "emoji": "📉",
        "form": "verb",
        "transcription": "rɪˈdjuːs",
        "subtext": "reduce costs / reduce stress / significantly reduce",
        "definitions": [
            {
                "text": "To make something smaller in size, amount or degree.",
                "examples": [
                    "The company is trying to reduce its carbon footprint."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reduced",
        "v3": "reduced",
        "group": "regular",
        "auxiliary": "have",
        "v4": "reducing",
        "lang": "en",
        "level": "intermediate",
        "theme": "finances_investment",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_environment_011",
        "word": "affect",
        "emoji": "⚖️",
        "form": "verb",
        "transcription": "əˈfɛkt",
        "subtext": "affect someone / affect the result / negatively affect",
        "definitions": [
            {
                "text": "To have an impact on something or someone.",
                "examples": [
                    "Remote working has affected team communication."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "affected",
        "v3": "affected",
        "group": "regular",
        "auxiliary": "have",
        "v4": "affecting",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_environment_012",
        "word": "cause",
        "emoji": "⚡",
        "form": "verb",
        "transcription": "kɔːz",
        "subtext": "cause a problem / cause stress / cause damage",
        "definitions": [
            {
                "text": "To make something happen, especially something bad.",
                "examples": [
                    "Long commutes can cause significant stress and fatigue."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "caused",
        "v3": "caused",
        "group": "regular",
        "auxiliary": "have",
        "v4": "causing",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_044",
        "word": "improve",
        "emoji": "✨",
        "form": "verb",
        "transcription": "ɪmˈpruːv",
        "subtext": "improve performance / improve health / room for improvement",
        "definitions": [
            {
                "text": "To make something better, or to become better.",
                "examples": [
                    "She improved her public speaking skills significantly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "improved",
        "v3": "improved",
        "group": "regular",
        "auxiliary": "have",
        "v4": "improving",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_021",
        "word": "replace",
        "emoji": "🔄",
        "form": "verb",
        "transcription": "rɪˈpleɪs",
        "subtext": "replace something / replace someone / be replaced by",
        "definitions": [
            {
                "text": "To take the place of something or someone.",
                "examples": [
                    "The new system will replace the current one next year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "replaced",
        "v3": "replaced",
        "group": "regular",
        "auxiliary": "have",
        "v4": "replacing",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_022",
        "word": "report",
        "emoji": "📄",
        "form": "verb",
        "transcription": "rɪˈpɔːt",
        "subtext": "report findings / report to someone / report a problem",
        "definitions": [
            {
                "text": "To give a formal account of something.",
                "examples": [
                    "She reported the findings to the senior management team."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reported",
        "v3": "reported",
        "group": "regular",
        "auxiliary": "have",
        "v4": "reporting",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_023",
        "word": "warn",
        "emoji": "⚠️",
        "form": "verb",
        "transcription": "wɔːn",
        "subtext": "warn someone / warn about a risk / issue a warning",
        "definitions": [
            {
                "text": "To tell someone about a possible danger or difficulty.",
                "examples": [
                    "The consultant warned that the timeline was too ambitious."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "warned",
        "v3": "warned",
        "group": "regular",
        "auxiliary": "have",
        "v4": "warning",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_024",
        "word": "confirm",
        "emoji": "✅",
        "form": "verb",
        "transcription": "kənˈfɜːm",
        "subtext": "confirm a booking / confirm receipt / confirm in writing",
        "definitions": [
            {
                "text": "To state that something is definitely true or correct.",
                "examples": [
                    "Please confirm your attendance before Friday."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "confirmed",
        "v3": "confirmed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "confirming",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_025",
        "word": "explain",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "ɪkˈspleɪn",
        "subtext": "explain a process / explain to someone / clearly explain",
        "definitions": [
            {
                "text": "To make something clear by describing it in detail.",
                "examples": [
                    "He explained the new process to the whole team."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "explained",
        "v3": "explained",
        "group": "regular",
        "auxiliary": "have",
        "v4": "explaining",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_026",
        "word": "describe",
        "emoji": "💬",
        "form": "verb",
        "transcription": "dɪˈskraɪb",
        "subtext": "describe a problem / describe a situation / describe someone",
        "definitions": [
            {
                "text": "To give details of what something or someone is like.",
                "examples": [
                    "Can you describe the main challenges of your current role?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "described",
        "v3": "described",
        "group": "regular",
        "auxiliary": "have",
        "v4": "describing",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_036",
        "word": "vote",
        "emoji": "🗳️",
        "form": "verb",
        "transcription": "🇬🇧 vəʊt | 🇺🇸 voʊt",
        "subtext": "vote for / vote against / vote in an election",
        "definitions": [
            {
                "text": "To express a choice formally, especially in an election.",
                "examples": [
                    "She votes in every local and national election."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "voted",
        "v3": "voted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "voting",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_037",
        "word": "participate",
        "emoji": "🙋",
        "form": "verb",
        "transcription": "pɑːˈtɪsɪpeɪt",
        "subtext": "participate in / actively participate / participation rate",
        "definitions": [
            {
                "text": "To take part in something.",
                "examples": [
                    "He participates actively in community meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "participated",
        "v3": "participated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "participating",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_038",
        "word": "protest",
        "emoji": "📢",
        "form": "verb",
        "transcription": "prəˈtɛst",
        "subtext": "protest against / stage a protest / peaceful protest",
        "definitions": [
            {
                "text": "To express disagreement or opposition publicly.",
                "examples": [
                    "Workers protested against the proposed pay cuts."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "protested",
        "v3": "protested",
        "group": "regular",
        "auxiliary": "have",
        "v4": "protesting",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_039",
        "word": "support",
        "emoji": "🤝",
        "form": "verb",
        "transcription": "səˈpɔːt",
        "subtext": "support a cause / support someone / show support",
        "definitions": [
            {
                "text": "To agree with and help a cause or person.",
                "examples": [
                    "She supports the campaign for better public transport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "supported",
        "v3": "supported",
        "group": "regular",
        "auxiliary": "have",
        "v4": "supporting",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_040",
        "word": "raise",
        "emoji": "📈",
        "form": "verb",
        "transcription": "reɪz",
        "subtext": "raise awareness / raise a concern / raise an issue",
        "definitions": [
            {
                "text": "To increase knowledge or concern about an issue.",
                "examples": [
                    "The campaign raised awareness of workplace mental health."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "raised",
        "v3": "raised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "raising",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_stress_anxiety_012",
        "word": "worry",
        "emoji": "😟",
        "form": "verb",
        "transcription": "ˈwʌri",
        "subtext": "worry about / stop worrying / cause worry",
        "definitions": [
            {
                "text": "To feel anxious about something uncertain.",
                "examples": [
                    "He worries constantly about job security."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "worried",
        "v3": "worried",
        "group": "regular",
        "auxiliary": "have",
        "v4": "worrying",
        "lang": "en",
        "level": "intermediate",
        "theme": "stress_anxiety",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_018",
        "word": "regret",
        "emoji": "😔",
        "form": "verb",
        "transcription": "rɪˈɡrɛt",
        "subtext": "regret a decision / deeply regret / no regrets",
        "definitions": [
            {
                "text": "To feel sorry about something you did or did not do.",
                "examples": [
                    "She regrets not negotiating a higher salary at the start."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "regretted",
        "v3": "regretted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "regreting",
        "lang": "en",
        "level": "intermediate",
        "theme": "mental_health_wellbeing",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_019",
        "word": "resent",
        "emoji": "😠",
        "form": "verb",
        "transcription": "rɪˈzɛnt",
        "subtext": "resent something / resent someone / feel resentment",
        "definitions": [
            {
                "text": "To feel bitter or angry about something you consider unfair.",
                "examples": [
                    "He resents the fact that junior colleagues earn more."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "resented",
        "v3": "resented",
        "group": "regular",
        "auxiliary": "have",
        "v4": "resenting",
        "lang": "en",
        "level": "intermediate",
        "theme": "mental_health_wellbeing",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_027",
        "word": "appreciate",
        "emoji": "🙏",
        "form": "verb",
        "transcription": "əˈpriːʃieɪt",
        "subtext": "appreciate something / appreciate someone's work / deeply appreciate",
        "definitions": [
            {
                "text": "To recognise the value of something or someone.",
                "examples": [
                    "She genuinely appreciates honest feedback from her team."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "appreciated",
        "v3": "appreciated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "appreciating",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_028",
        "word": "blame",
        "emoji": "👈",
        "form": "verb",
        "transcription": "bleɪm",
        "subtext": "blame someone / blame yourself / shift the blame",
        "definitions": [
            {
                "text": "To hold someone responsible for something bad.",
                "examples": [
                    "She blamed the failure on poor communication within the team."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "blamed",
        "v3": "blamed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "blaming",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_029",
        "word": "encourage",
        "emoji": "🙌",
        "form": "verb",
        "transcription": "ɪnˈkʌrɪdʒ",
        "subtext": "encourage someone / encourage a behaviour / be encouraging",
        "definitions": [
            {
                "text": "To give confidence or support to someone.",
                "examples": [
                    "A good manager encourages the team during difficult periods."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "encouraged",
        "v3": "encouraged",
        "group": "regular",
        "auxiliary": "have",
        "v4": "encouraging",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_030",
        "word": "take on",
        "emoji": "📋",
        "form": "verb",
        "transcription": "🇬🇧 teɪk ɒn | 🇺🇸 teɪk ɑːn",
        "subtext": "take on responsibility / take on more work / take on a role",
        "definitions": [
            {
                "text": "To accept a new responsibility or challenge.",
                "examples": [
                    "She took on the new project despite her full workload."
                ]
            }
        ],
        "classification": "phrasal",
        "aspect": "action",
        "v2": "took on",
        "v3": "taken on",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_031",
        "word": "put off",
        "emoji": "⏳",
        "form": "verb",
        "transcription": "🇬🇧 pʊt ɒf | 🇺🇸 pʊt ɑːf",
        "subtext": "put off a decision / stop putting things off / keep putting off",
        "definitions": [
            {
                "text": "To delay something to a later time.",
                "examples": [
                    "He keeps putting off the difficult conversation with his manager."
                ]
            }
        ],
        "classification": "phrasal",
        "aspect": "action",
        "v2": "put off",
        "v3": "put off",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_032",
        "word": "come across",
        "emoji": "🤝",
        "form": "verb",
        "transcription": "🇬🇧 kʌm əˈkrɒs | 🇺🇸 kʌm əˈkrɑːs",
        "subtext": "come across well / come across a problem / come across as",
        "definitions": [
            {
                "text": "To meet or find something unexpectedly; to make an impression.",
                "examples": [
                    "She came across as very confident in the interview."
                ]
            }
        ],
        "classification": "phrasal",
        "aspect": "both",
        "v2": "came across",
        "v3": "come across",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_033",
        "word": "deal with",
        "emoji": "🛠️",
        "form": "verb",
        "transcription": "diːl wɪð",
        "subtext": "deal with a problem / deal with stress / hard to deal with",
        "definitions": [
            {
                "text": "To handle or take responsibility for a situation.",
                "examples": [
                    "He dealt with the client complaint professionally."
                ]
            }
        ],
        "classification": "phrasal",
        "aspect": "action",
        "v2": "dealt with",
        "v3": "dealt with",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_041",
        "word": "stand for",
        "emoji": "🛡️",
        "form": "verb",
        "transcription": "stænd fɔː",
        "subtext": "stand for something / not stand for / what does it stand for",
        "definitions": [
            {
                "text": "To represent or tolerate something.",
                "examples": [
                    "What values does your company stand for?"
                ]
            }
        ],
        "classification": "phrasal",
        "aspect": "stative",
        "v2": "stood for",
        "v3": "stood for",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_045",
        "word": "build up",
        "emoji": "🏗️",
        "form": "verb",
        "transcription": "bɪld ʌp",
        "subtext": "build up experience / build up savings / build up trust",
        "definitions": [
            {
                "text": "To gradually increase or develop something.",
                "examples": [
                    "She has built up a strong professional network over ten years."
                ]
            }
        ],
        "classification": "phrasal",
        "aspect": "action",
        "v2": "built up",
        "v3": "built up",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_finances_investment_005",
        "word": "run out",
        "emoji": "📉",
        "form": "verb",
        "transcription": "rʌn aʊt",
        "subtext": "run out of money / run out of time / run out of ideas",
        "definitions": [
            {
                "text": "To have no more of something left.",
                "examples": [
                    "The project ran out of budget three weeks early."
                ]
            }
        ],
        "classification": "phrasal",
        "aspect": "action",
        "v2": "ran out",
        "v3": "run out",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "intermediate",
        "theme": "finances_investment",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_034",
        "word": "look into",
        "emoji": "🔍",
        "form": "verb",
        "transcription": "lʊk ˈɪntə",
        "subtext": "look into a matter / look into a complaint / look into options",
        "definitions": [
            {
                "text": "To investigate or examine something in detail.",
                "examples": [
                    "The HR team looked into the complaint immediately."
                ]
            }
        ],
        "classification": "phrasal",
        "aspect": "action",
        "v2": "looked into",
        "v3": "looked into",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);

})();