(function() {
    const data = [
    {
        "word": "analyse",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🔍",
        "form": "verb",
        "transcription": "ˈænəlaɪz",
        "subtext": "Formal | analyse data / analyse a situation / detailed analysis",
        "definitions": [
            {
                "text": "To examine something in detail to understand it.",
                "examples": [
                    "The report analyses the long-term impact of automation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "analysed",
        "v3": "analysed",
        "group": "regular"
    },
    {
        "word": "assess",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "📋",
        "form": "verb",
        "transcription": "əˈsɛs",
        "subtext": "Formal | assess risks / assess the situation / impact assessment",
        "definitions": [
            {
                "text": "To evaluate the quality or importance of something.",
                "examples": [
                    "They assessed all risks carefully before launching the product."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "assessed",
        "v3": "assessed",
        "group": "regular"
    },
    {
        "word": "examine",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🔬",
        "form": "verb",
        "transcription": "ɪɡˈzæmɪn",
        "subtext": "Formal | examine evidence / examine the impact / examine closely",
        "definitions": [
            {
                "text": "To look at something carefully to understand it.",
                "examples": [
                    "The committee examined the financial evidence thoroughly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "examined",
        "v3": "examined",
        "group": "regular"
    },
    {
        "word": "evaluate",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "⚖️",
        "form": "verb",
        "transcription": "ɪˈvæljueɪt",
        "subtext": "Formal | evaluate performance / evaluate results / cost-benefit evaluation",
        "definitions": [
            {
                "text": "To judge the value or effectiveness of something systematically.",
                "examples": [
                    "The government evaluated the scheme's effectiveness after a year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "evaluated",
        "v3": "evaluated",
        "group": "regular"
    },
    {
        "word": "investigate",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🕵️",
        "form": "verb",
        "transcription": "ɪnˈvɛstɪɡeɪt",
        "subtext": "Formal | investigate a case / investigate claims / conduct an investigation",
        "definitions": [
            {
                "text": "To carry out a systematic inquiry into something.",
                "examples": [
                    "Auditors investigated the financial irregularities in the accounts."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "investigated",
        "v3": "investigated",
        "group": "regular"
    },
    {
        "word": "interpret",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "ɪnˈtɜːprɪt",
        "subtext": "Formal | interpret data / interpret results / open to interpretation",
        "definitions": [
            {
                "text": "To understand or explain the meaning of something.",
                "examples": [
                    "The data can be interpreted in more than one legitimate way."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "interpreted",
        "v3": "interpreted",
        "group": "regular"
    },
    {
        "word": "measure",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "📏",
        "form": "verb",
        "transcription": "ˈmɛʒə",
        "subtext": "Neutral | measure success / measure impact / difficult to measure",
        "definitions": [
            {
                "text": "To determine the size, amount or extent of something.",
                "examples": [
                    "How do you actually measure the success of a flexible policy?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "measured",
        "v3": "measured",
        "group": "regular"
    },
    {
        "word": "determine",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🎯",
        "form": "verb",
        "transcription": "dɪˈtɜːmɪn",
        "subtext": "Formal | determine the cause / determine whether / be determined by",
        "definitions": [
            {
                "text": "To find out something precisely; to decide something.",
                "examples": [
                    "Tests were carried out to determine the cause of the failure."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "determined",
        "v3": "determined",
        "group": "regular"
    },
    {
        "word": "identify",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🆔",
        "form": "verb",
        "transcription": "aɪˈdɛntɪfaɪ",
        "subtext": "Neutral | identify a problem / identify a solution / identify risks",
        "definitions": [
            {
                "text": "To recognise or establish the identity of something.",
                "examples": [
                    "She identified three key weaknesses in the current system."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "identified",
        "v3": "identified",
        "group": "regular"
    },
    {
        "word": "distinguish",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🌓",
        "form": "verb",
        "transcription": "dɪˈstɪŋɡwɪʃ",
        "subtext": "Formal | distinguish between / clearly distinguish / hard to distinguish",
        "definitions": [
            {
                "text": "To recognise or show the difference between things.",
                "examples": [
                    "It is crucial to distinguish correlation from causation in research."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "distinguished",
        "v3": "distinguished",
        "group": "regular"
    },
    {
        "word": "argue",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "ˈɑːɡjuː",
        "subtext": "Neutral | argue that / argue for / argue against / strongly argue",
        "definitions": [
            {
                "text": "To present reasons in support of a position.",
                "examples": [
                    "She argues that automation creates more jobs than it destroys."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "argued",
        "v3": "argued",
        "group": "regular"
    },
    {
        "word": "counter",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🛡️",
        "form": "verb",
        "transcription": "ˈkaʊntə",
        "subtext": "Formal | counter an argument / counter a claim / offer a counter",
        "definitions": [
            {
                "text": "To respond to an argument with an opposing one.",
                "examples": [
                    "He countered her point with strong evidence from recent studies."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "countered",
        "v3": "countered",
        "group": "regular"
    },
    {
        "word": "challenge",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "❓",
        "form": "verb",
        "transcription": "ˈtʃælɪndʒ",
        "subtext": "Neutral | challenge an assumption / challenge a claim / challenge the status quo",
        "definitions": [
            {
                "text": "To question the truth or validity of something.",
                "examples": [
                    "The new report challenges the assumptions behind the policy."
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
        "word": "refute",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "❌",
        "form": "verb",
        "transcription": "rɪˈfjuːt",
        "subtext": "Formal | refute a claim / refute an argument / difficult to refute",
        "definitions": [
            {
                "text": "To prove that something is false or incorrect.",
                "examples": [
                    "She refuted the accusation with clear and detailed evidence."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "refuted",
        "v3": "refuted",
        "group": "regular"
    },
    {
        "word": "concede",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🏳️",
        "form": "verb",
        "transcription": "kənˈsiːd",
        "subtext": "Formal | concede a point / concede that / forced to concede",
        "definitions": [
            {
                "text": "To admit, often reluctantly, that something is true.",
                "examples": [
                    "He conceded that the policy had produced some positive results."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "conceded",
        "v3": "conceded",
        "group": "regular"
    },
    {
        "word": "justify",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "✅",
        "form": "verb",
        "transcription": "ˈdʒʌstɪfaɪ",
        "subtext": "Neutral | justify a decision / justify costs / hard to justify",
        "definitions": [
            {
                "text": "To show or prove that something is reasonable or right.",
                "examples": [
                    "Can the company justify the pay freeze to its employees?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "justified",
        "v3": "justified",
        "group": "regular"
    },
    {
        "word": "substantiate",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "📄",
        "form": "verb",
        "transcription": "səbˈstænʃieɪt",
        "subtext": "Formal | substantiate a claim / substantiate allegations / require substantiation",
        "definitions": [
            {
                "text": "To provide evidence to support a claim.",
                "examples": [
                    "She was unable to substantiate her allegations with any data."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "substantiated",
        "v3": "substantiated",
        "group": "regular"
    },
    {
        "word": "assert",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "📣",
        "form": "verb",
        "transcription": "əˈsɜːt",
        "subtext": "Formal | assert that / assert a right / boldly assert",
        "definitions": [
            {
                "text": "To state something confidently and forcefully.",
                "examples": [
                    "He asserted that the company had acted entirely within the law."
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
        "word": "maintain",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🧱",
        "form": "verb",
        "transcription": "meɪnˈteɪn",
        "subtext": "Formal | maintain that / firmly maintain / maintain a position",
        "definitions": [
            {
                "text": "To firmly state something as true despite opposition.",
                "examples": [
                    "She maintained that her decision was based entirely on evidence."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "maintained",
        "v3": "maintained",
        "group": "regular"
    },
    {
        "word": "dispute",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🚫",
        "form": "verb",
        "transcription": "dɪˈspjuːt",
        "subtext": "Formal | dispute a claim / dispute findings / hotly disputed",
        "definitions": [
            {
                "text": "To question the truth or validity of something.",
                "examples": [
                    "Several experts disputed the methodology used in the study."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "disputed",
        "v3": "disputed",
        "group": "regular"
    },
    {
        "word": "regulate",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "⚖️",
        "form": "verb",
        "transcription": "ˈrɛɡjuleɪt",
        "subtext": "Formal | regulate an industry / tightly regulated / self-regulation",
        "definitions": [
            {
                "text": "To control an activity through official rules or laws.",
                "examples": [
                    "The government plans to regulate the gig economy more strictly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "regulated",
        "v3": "regulated",
        "group": "regular"
    },
    {
        "word": "implement",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "⚙️",
        "form": "verb",
        "transcription": "ˈɪmplɪmɛnt",
        "subtext": "Formal | implement a policy / implement changes / implementation plan",
        "definitions": [
            {
                "text": "To put a decision or policy into effect.",
                "examples": [
                    "The new data protection rules will be implemented in spring."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "implemented",
        "v3": "implemented",
        "group": "regular"
    },
    {
        "word": "enforce",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "👮",
        "form": "verb",
        "transcription": "ɪnˈfɔːs",
        "subtext": "Formal | enforce a law / strictly enforce / difficult to enforce",
        "definitions": [
            {
                "text": "To compel people to comply with a law or rule.",
                "examples": [
                    "The new regulations will be difficult to enforce in practice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "enforced",
        "v3": "enforced",
        "group": "regular"
    },
    {
        "word": "reform",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🛠️",
        "form": "verb",
        "transcription": "rɪˈfɔːm",
        "subtext": "Formal | reform a system / structural reform / reform the law",
        "definitions": [
            {
                "text": "To change a system or institution to make it better.",
                "examples": [
                    "The government has promised to reform the pension system soon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reformed",
        "v3": "reformed",
        "group": "regular"
    },
    {
        "word": "allocate",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "💰",
        "form": "verb",
        "transcription": "ˈæləkeɪt",
        "subtext": "Formal | allocate resources / allocate funding / allocate responsibility",
        "definitions": [
            {
                "text": "To distribute resources for a specific purpose.",
                "examples": [
                    "The budget allocates more funding to mental health services."
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
        "word": "subsidise",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "💸",
        "form": "verb",
        "transcription": "ˈsʌbsɪdaɪz",
        "subtext": "Formal | subsidise an industry / heavily subsidised / public subsidy",
        "definitions": [
            {
                "text": "To support something financially with public money.",
                "examples": [
                    "The government subsidises renewable energy to encourage its use."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "subsidised",
        "v3": "subsidised",
        "group": "regular"
    },
    {
        "word": "restrict",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🚫",
        "form": "verb",
        "transcription": "rɪˈstrɪkt",
        "subtext": "Formal | restrict access / impose restrictions / tightly restricted",
        "definitions": [
            {
                "text": "To limit the size or range of something.",
                "examples": [
                    "Access to the building is restricted to badge holders only."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "restricted",
        "v3": "restricted",
        "group": "regular"
    },
    {
        "word": "ban",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🚫",
        "form": "verb",
        "transcription": "bæn",
        "subtext": "Neutral | ban something / ban the use of / impose a ban",
        "definitions": [
            {
                "text": "To officially forbid something.",
                "examples": [
                    "The city has banned single-use plastics in all public venues."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "banned",
        "v3": "banned",
        "group": "regular"
    },
    {
        "word": "introduce",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "✨",
        "form": "verb",
        "transcription": "ˌɪntrəˈdjuːs",
        "subtext": "Neutral | introduce a policy / introduce changes / introduce someone to",
        "definitions": [
            {
                "text": "To bring something new into use for the first time.",
                "examples": [
                    "The company introduced a new flexible working policy last spring."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "introduced",
        "v3": "introduced",
        "group": "regular"
    },
    {
        "word": "generate",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "⚡",
        "form": "verb",
        "transcription": "ˈdʒɛnəreɪt",
        "subtext": "Formal | generate income / generate jobs / generate growth",
        "definitions": [
            {
                "text": "To produce or create something, especially income.",
                "examples": [
                    "Tourism generates significant revenue for the local economy."
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
        "word": "redistribute",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "🔄",
        "form": "verb",
        "transcription": "ˌriːdɪˈstrɪbjuːt",
        "subtext": "Formal | redistribute wealth / redistribute income / redistribution policy",
        "definitions": [
            {
                "text": "To share something differently from before.",
                "examples": [
                    "Taxation is a key mechanism used to redistribute wealth."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "redistributed",
        "v3": "redistributed",
        "group": "regular"
    },
    {
        "word": "fluctuate",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "📈",
        "form": "verb",
        "transcription": "ˈflʌktʃueɪt",
        "subtext": "Formal | prices fluctuate / exchange rates fluctuate / wildly fluctuate",
        "definitions": [
            {
                "text": "To change frequently and irregularly.",
                "examples": [
                    "Oil prices fluctuated significantly throughout the past year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fluctuated",
        "v3": "fluctuated",
        "group": "regular"
    },
    {
        "word": "stimulate",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "🌱",
        "form": "verb",
        "transcription": "ˈstɪmjuleɪt",
        "subtext": "Formal | stimulate growth / stimulate demand / economic stimulus",
        "definitions": [
            {
                "text": "To encourage activity, growth or development.",
                "examples": [
                    "Low interest rates are designed to stimulate economic growth."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stimulated",
        "v3": "stimulated",
        "group": "regular"
    },
    {
        "word": "invest",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "📈",
        "form": "verb",
        "transcription": "ɪnˈvɛst",
        "subtext": "Neutral | invest in property / invest long-term / return on investment",
        "definitions": [
            {
                "text": "To put money into something expecting a return.",
                "examples": [
                    "The firm invested heavily in new technology last year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invested",
        "v3": "invested",
        "group": "regular"
    },
    {
        "word": "acquire",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "🤝",
        "form": "verb",
        "transcription": "əˈkwaɪə",
        "subtext": "Formal | acquire a company / acquire skills / acquire assets",
        "definitions": [
            {
                "text": "To obtain something, especially for a business.",
                "examples": [
                    "The company acquired a smaller competitor for twenty million."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acquired",
        "v3": "acquired",
        "group": "regular"
    },
    {
        "word": "depreciate",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "📉",
        "form": "verb",
        "transcription": "dɪˈpriːʃieɪt",
        "subtext": "Formal | depreciate in value / rapidly depreciate / depreciation rate",
        "definitions": [
            {
                "text": "To decrease in value over time.",
                "examples": [
                    "Cars depreciate quickly in the first three years."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "depreciated",
        "v3": "depreciated",
        "group": "regular"
    },
    {
        "word": "diversify",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "🔀",
        "form": "verb",
        "transcription": "daɪˈvɜːsɪfaɪ",
        "subtext": "Formal | diversify a portfolio / diversify the economy / diversify income",
        "definitions": [
            {
                "text": "To develop a wider range of products, skills or investments.",
                "examples": [
                    "She diversified her investment portfolio to reduce risk."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "diversified",
        "v3": "diversified",
        "group": "regular"
    },
    {
        "word": "contend",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "kənˈtɛnd",
        "subtext": "Formal | contend that / strongly contend / the argument contends",
        "definitions": [
            {
                "text": "To argue or assert something strongly.",
                "examples": [
                    "She contends that the policy will widen inequality."
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
        "word": "emphasise",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🎯",
        "form": "verb",
        "transcription": "ˈɛmfəsaɪz",
        "subtext": "Formal | emphasise the importance / emphasise a point / strongly emphasise",
        "definitions": [
            {
                "text": "To give particular importance or attention to something.",
                "examples": [
                    "The report emphasises the need for better regulation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "emphasised",
        "v3": "emphasised",
        "group": "regular"
    },
    {
        "word": "perceive",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "👁️",
        "form": "verb",
        "transcription": "pəˈsiːv",
        "subtext": "Formal | perceive something / be perceived as / widely perceived",
        "definitions": [
            {
                "text": "To become aware of or understand something.",
                "examples": [
                    "He is widely perceived as a strong and fair leader."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "perceived",
        "v3": "perceived",
        "group": "regular"
    },
    {
        "word": "attribute",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🏷️",
        "form": "verb",
        "transcription": "əˈtrɪbjuːt",
        "subtext": "Formal | attribute to / be attributed to / wrongly attribute",
        "definitions": [
            {
                "text": "To regard something as being caused by something else.",
                "examples": [
                    "The success was attributed to strong team leadership."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "attributed",
        "v3": "attributed",
        "group": "regular"
    },
    {
        "word": "infer",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "💡",
        "form": "verb",
        "transcription": "ɪnˈfɜː",
        "subtext": "Formal | infer from / reasonably infer / draw an inference",
        "definitions": [
            {
                "text": "To draw a conclusion from evidence without being told.",
                "examples": [
                    "From the data, we can clearly infer that demand is falling."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "inferred",
        "v3": "inferred",
        "group": "regular"
    },
    {
        "word": "overlook",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🙈",
        "form": "verb",
        "transcription": "ˌəʊvəˈlʊk",
        "subtext": "Neutral | overlook a detail / easy to overlook / overlook a problem",
        "definitions": [
            {
                "text": "To fail to notice; to choose not to consider something.",
                "examples": [
                    "The report completely overlooks the impact on lower earners."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "overlooked",
        "v3": "overlooked",
        "group": "regular"
    },
    {
        "word": "acknowledge",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "✅",
        "form": "verb",
        "transcription": "əkˈnɒlɪdʒ",
        "subtext": "Neutral | acknowledge a weakness / acknowledge that / widely acknowledged",
        "definitions": [
            {
                "text": "To recognise or accept the existence of something.",
                "examples": [
                    "He acknowledged the limitations of his own argument clearly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "acknowledged",
        "v3": "acknowledged",
        "group": "regular"
    },
    {
        "word": "emerge",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🌱",
        "form": "verb",
        "transcription": "ɪˈmɜːdʒ",
        "subtext": "Formal | emerge from / emerge as / emerge as a leader",
        "definitions": [
            {
                "text": "To become visible or known; to come out of.",
                "examples": [
                    "A clear consensus gradually emerged from the long discussion."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "emerged",
        "v3": "emerged",
        "group": "regular"
    },
    {
        "word": "enable",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🔓",
        "form": "verb",
        "transcription": "ɪˈneɪbl",
        "subtext": "Formal | enable someone to / enable growth / enable change",
        "definitions": [
            {
                "text": "To make something possible.",
                "examples": [
                    "The new technology enables remote teams to collaborate better."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "enabled",
        "v3": "enabled",
        "group": "regular"
    },
    {
        "word": "ensure",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "✅",
        "form": "verb",
        "transcription": "ɪnˈʃʊə",
        "subtext": "Formal | ensure that / ensure quality / ensure compliance",
        "definitions": [
            {
                "text": "To make certain that something happens.",
                "examples": [
                    "She checked everything twice to ensure accuracy in the report."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ensured",
        "v3": "ensured",
        "group": "regular"
    },
    {
        "word": "enhance",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "✨",
        "form": "verb",
        "transcription": "ɪnˈhɑːns",
        "subtext": "Formal | enhance performance / enhance the quality / enhance productivity",
        "definitions": [
            {
                "text": "To improve or increase the quality of something.",
                "examples": [
                    "The new system significantly enhanced team communication."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "enhanced",
        "v3": "enhanced",
        "group": "regular"
    },
    {
        "word": "contribute",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🤝",
        "form": "verb",
        "transcription": "kənˈtrɪbjuːt",
        "subtext": "Neutral | contribute to / contribute to success / make a contribution",
        "definitions": [
            {
                "text": "To add to something; to help cause a result.",
                "examples": [
                    "Many factors contributed to the company's poor performance."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contributed",
        "v3": "contributed",
        "group": "regular"
    },
    {
        "word": "obtain",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "📥",
        "form": "verb",
        "transcription": "əbˈteɪn",
        "subtext": "Formal | obtain permission / obtain a qualification / obtain information",
        "definitions": [
            {
                "text": "To get or acquire something, especially with effort.",
                "examples": [
                    "She obtained her professional qualification after two years."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "obtained",
        "v3": "obtained",
        "group": "regular"
    },
    {
        "word": "retain",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "📦",
        "form": "verb",
        "transcription": "rɪˈteɪn",
        "subtext": "Formal | retain staff / retain customers / retain information",
        "definitions": [
            {
                "text": "To keep or continue to have something.",
                "examples": [
                    "The company needs to retain its best employees at all costs."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "retained",
        "v3": "retained",
        "group": "regular"
    },
    {
        "word": "pursue",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🏃",
        "form": "verb",
        "transcription": "pəˈsjuː",
        "subtext": "Neutral | pursue a goal / pursue a career / pursue a claim",
        "definitions": [
            {
                "text": "To continue doing something; to try to achieve.",
                "examples": [
                    "He pursued his ambition of running his own business."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pursued",
        "v3": "pursued",
        "group": "regular"
    },
    {
        "word": "demonstrate",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "📊",
        "form": "verb",
        "transcription": "ˈdɛmənstreɪt",
        "subtext": "Neutral | demonstrate a skill / demonstrate that / demonstrate commitment",
        "definitions": [
            {
                "text": "To show or prove something clearly.",
                "examples": [
                    "She demonstrated excellent leadership skills under pressure."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "demonstrated",
        "v3": "demonstrated",
        "group": "regular"
    },
    {
        "word": "propose",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "💡",
        "form": "verb",
        "transcription": "prəˈpəʊz",
        "subtext": "Neutral | propose a solution / propose a change / propose that",
        "definitions": [
            {
                "text": "To suggest a plan or course of action formally.",
                "examples": [
                    "He proposed a new system for managing client accounts."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "proposed",
        "v3": "proposed",
        "group": "regular"
    },
    {
        "word": "assume",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🤔",
        "form": "verb",
        "transcription": "əˈsjuːm",
        "subtext": "Neutral | assume that / dangerous to assume / underlying assumption",
        "definitions": [
            {
                "text": "To accept something as true without proof.",
                "examples": [
                    "Do not assume that everyone agrees with you on this."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "assumed",
        "v3": "assumed",
        "group": "regular"
    },
    {
        "word": "constitute",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🧱",
        "form": "verb",
        "transcription": "ˈkɒnstɪtjuːt",
        "subtext": "Formal | constitute a breach / constitute evidence / constitute a problem",
        "definitions": [
            {
                "text": "To be or form something.",
                "examples": [
                    "This behaviour constitutes a serious breach of the contract."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "constituted",
        "v3": "constituted",
        "group": "regular"
    },
    {
        "word": "expose",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🔓",
        "form": "verb",
        "transcription": "ɪkˈspəʊz",
        "subtext": "Neutral | expose wrongdoing / expose someone to risk / be exposed to",
        "definitions": [
            {
                "text": "To reveal something hidden; to put at risk.",
                "examples": [
                    "The investigation exposed widespread financial misconduct."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exposed",
        "v3": "exposed",
        "group": "regular"
    },
    {
        "word": "challenge",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🏔️",
        "form": "verb",
        "transcription": "ˈtʃælɪndʒ",
        "subtext": "Neutral | challenge yourself / challenge assumptions / face a challenge",
        "definitions": [
            {
                "text": "To invite someone to do something difficult.",
                "examples": [
                    "She challenged herself to public speaking to develop her skills."
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
        "word": "overcome",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🏆",
        "form": "verb",
        "transcription": "ˌəʊvəˈkʌm",
        "subtext": "Neutral | overcome a challenge / overcome obstacles / overcome fear",
        "definitions": [
            {
                "text": "To succeed in dealing with a difficulty.",
                "examples": [
                    "He overcame significant obstacles to reach senior management."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "overcame",
        "v3": "overcome",
        "group": "irregular"
    },
    {
        "word": "affect",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "✨",
        "form": "verb",
        "transcription": "əˈfɛkt",
        "subtext": "Neutral | affect someone / negatively affect / affect the result",
        "definitions": [
            {
                "text": "To produce a change in someone or something.",
                "examples": [
                    "The merger affected every single department in the organisation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "affected",
        "v3": "affected",
        "group": "regular"
    },
    {
        "word": "extend",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "↔️",
        "form": "verb",
        "transcription": "ɪkˈstɛnd",
        "subtext": "Neutral | extend a contract / extend a deadline / extend beyond",
        "definitions": [
            {
                "text": "To make something longer, larger or wider.",
                "examples": [
                    "The company extended the contract by another twelve months."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "extended",
        "v3": "extended",
        "group": "regular"
    },
    {
        "word": "highlight",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🖍️",
        "form": "verb",
        "transcription": "ˈhaɪlaɪt",
        "subtext": "Neutral | highlight an issue / highlight a point / highlight the importance",
        "definitions": [
            {
                "text": "To draw particular attention to something important.",
                "examples": [
                    "The report highlighted several serious risks for the next year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "highlighted",
        "v3": "highlighted",
        "group": "regular"
    },
    {
        "word": "indicate",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "👉",
        "form": "verb",
        "transcription": "ˈɪndɪkeɪt",
        "subtext": "Formal | indicate that / indicate a trend / clearly indicate",
        "definitions": [
            {
                "text": "To show or suggest something; to point towards.",
                "examples": [
                    "The data indicates a clear and consistent trend upwards."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "indicated",
        "v3": "indicated",
        "group": "regular"
    },
    {
        "word": "adopt",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "✅",
        "form": "verb",
        "transcription": "əˈdɒpt",
        "subtext": "Neutral | adopt a policy / adopt an approach / adopt a new system",
        "definitions": [
            {
                "text": "To take on a new approach, idea or policy.",
                "examples": [
                    "The company adopted a fully remote working model in 2020."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "adopted",
        "v3": "adopted",
        "group": "regular"
    },
    {
        "word": "reflect",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🪞",
        "form": "verb",
        "transcription": "rɪˈflɛkt",
        "subtext": "Neutral | reflect on / reflect a view / reflect badly on / time to reflect",
        "definitions": [
            {
                "text": "To think carefully about something; to show.",
                "examples": [
                    "Her decision reflects a long period of careful thinking."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "reflected",
        "v3": "reflected",
        "group": "regular"
    },
    {
        "word": "draw on",
        "level": "upper-intermediate",
        "theme": "persuasion_rhetoric_B2",
        "emoji": "📚",
        "form": "verb",
        "transcription": "drɔː ɒn",
        "subtext": "Neutral | draw on experience / draw on resources / draw on expertise",
        "definitions": [
            {
                "text": "To make use of experience, knowledge or resources.",
                "examples": [
                    "She drew on ten years of experience to solve the problem."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew on",
        "v3": "drawn on",
        "group": "irregular"
    },
    {
        "word": "give rise to",
        "level": "upper-intermediate",
        "theme": "persuasion_rhetoric_B2",
        "emoji": "🌱",
        "form": "verb",
        "transcription": "ɡɪv raɪz tuː",
        "subtext": "Formal | give rise to problems / give rise to debate / give rise to concerns",
        "definitions": [
            {
                "text": "To cause something to happen.",
                "examples": [
                    "The new policy has given rise to considerable controversy."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave rise to",
        "v3": "given rise to",
        "group": "irregular"
    },
    {
        "word": "account for",
        "level": "upper-intermediate",
        "theme": "persuasion_rhetoric_B2",
        "emoji": "📝",
        "form": "verb",
        "transcription": "əˈkaʊnt fɔː",
        "subtext": "Neutral | account for something / account for the difference / hard to account for",
        "definitions": [
            {
                "text": "To explain the reason for; to make up a proportion.",
                "examples": [
                    "How do you account for the sharp drop in performance?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "accounted for",
        "v3": "accounted for",
        "group": "regular"
    },
    {
        "word": "build on",
        "level": "upper-intermediate",
        "theme": "persuasion_rhetoric_B2",
        "emoji": "🏗️",
        "form": "verb",
        "transcription": "bɪld ɒn",
        "subtext": "Neutral | build on success / build on experience / build on foundations",
        "definitions": [
            {
                "text": "To use something as a foundation for further development.",
                "examples": [
                    "The new strategy builds on the success of the previous one."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "built on",
        "v3": "built on",
        "group": "irregular"
    },
    {
        "word": "phase out",
        "level": "upper-intermediate",
        "theme": "persuasion_rhetoric_B2",
        "emoji": "📉",
        "form": "verb",
        "transcription": "feɪz aʊt",
        "subtext": "Neutral | phase out a product / phase out gradually / be phased out",
        "definitions": [
            {
                "text": "To gradually withdraw or eliminate something.",
                "examples": [
                    "The company is phasing out all single-use plastic packaging."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "phased out",
        "v3": "phased out",
        "group": "regular"
    },
    {
        "word": "stem from",
        "level": "upper-intermediate",
        "theme": "persuasion_rhetoric_B2",
        "emoji": "🌱",
        "form": "verb",
        "transcription": "stɛm frəm",
        "subtext": "Formal | stem from a cause / problems stem from / stem from a decision",
        "definitions": [
            {
                "text": "To originate from a particular source or cause.",
                "examples": [
                    "Many workplace problems stem from poor internal communication."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "stemmed from",
        "v3": "stemmed from",
        "group": "regular"
    },
    {
        "word": "stand out",
        "level": "upper-intermediate",
        "theme": "persuasion_rhetoric_B2",
        "emoji": "🌟",
        "form": "verb",
        "transcription": "stænd aʊt",
        "subtext": "Neutral | stand out from the crowd / stand out as / make something stand out",
        "definitions": [
            {
                "text": "To be noticeably better or different from others.",
                "examples": [
                    "Her clear presentation stood out from all the other candidates."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "stood out",
        "v3": "stood out",
        "group": "irregular"
    },
    {
        "word": "take into account",
        "level": "upper-intermediate",
        "theme": "persuasion_rhetoric_B2",
        "emoji": "🤔",
        "form": "verb",
        "transcription": "teɪk ˈɪntə əˈkaʊnt",
        "subtext": "Formal | take into account / fail to take into account / be taken into account",
        "definitions": [
            {
                "text": "To consider a factor when making a decision.",
                "examples": [
                    "You must take all the risks into account before you decide."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took into account",
        "v3": "taken into account",
        "group": "irregular"
    },
    {
        "word": "veto",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🚫",
        "form": "verb",
        "transcription": "ˈviːtəʊ",
        "subtext": "veto legislation, exercise a veto",
        "definitions": [
            {
                "text": "To refuse to allow something to be done.",
                "examples": [
                    "The president has the power to veto legislation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "vetoed",
        "v3": "vetoed",
        "group": "regular"
    }
];
    const lang = 'en';
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
