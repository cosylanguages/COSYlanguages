(function() {
    const data = [
    {
        "word": "accurate",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🎯",
        "form": "adjective",
        "transcription": "ˈækjərət",
        "subtext": "Formal | highly accurate / very accurate / accurate data",
        "definitions": [
            {
                "text": "Correct in every detail; free from error.",
                "examples": [
                    "Scientists need accurate measurements for experiments."
                ]
            }
        ],
        "comparative": "more accurate",
        "superlative": "the most accurate",
        "opposite": "inaccurate"
    },
    {
        "word": "adequate",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🆗",
        "form": "adjective",
        "transcription": "ˈædɪkwət",
        "subtext": "Formal | barely adequate / more than adequate / deemed adequate",
        "definitions": [
            {
                "text": "Enough for the purpose; satisfactory.",
                "examples": [
                    "Critics argued the funding was not adequate to meet demand."
                ]
            }
        ],
        "comparative": "more adequate",
        "superlative": "the most adequate",
        "opposite": "inadequate"
    },
    {
        "word": "appropriate",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "✅",
        "form": "adjective",
        "transcription": "əˈprəʊprieɪt",
        "subtext": "Neutral | entirely appropriate / wholly appropriate / deem appropriate",
        "definitions": [
            {
                "text": "Suitable for a particular situation.",
                "examples": [
                    "The minister questioned whether the response was appropriate."
                ]
            }
        ],
        "comparative": "more appropriate",
        "superlative": "the most appropriate",
        "opposite": "inappropriate"
    },
    {
        "word": "crucial",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "❗",
        "form": "adjective",
        "transcription": "ˈkruːʃl",
        "subtext": "Formal | absolutely crucial / play a crucial role / of crucial importance",
        "definitions": [
            {
                "text": "Extremely important; critical.",
                "examples": [
                    "Timing proved crucial to the success of the plan."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "trivial"
    },
    {
        "word": "genuine",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "💎",
        "form": "adjective",
        "transcription": "ˈdʒɛnjuɪn",
        "subtext": "Neutral | a genuine concern / completely genuine / genuinely interested",
        "definitions": [
            {
                "text": "Truly what it appears to be; authentic.",
                "examples": [
                    "She showed a genuine interest in the project."
                ]
            }
        ],
        "comparative": "more genuine",
        "superlative": "the most genuine",
        "opposite": "fake"
    },
    {
        "word": "outstanding",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🌟",
        "form": "adjective",
        "transcription": "aʊtˈstændɪŋ",
        "subtext": "Formal | truly outstanding / outstanding work / an outstanding candidate",
        "definitions": [
            {
                "text": "Exceptionally good; beyond the expected level.",
                "examples": [
                    "She demonstrated outstanding leadership under pressure."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "mediocre"
    },
    {
        "word": "remarkable",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "😲",
        "form": "adjective",
        "transcription": "rɪˈmɑːkəbl",
        "subtext": "Formal | truly remarkable / quite remarkable / a remarkable result",
        "definitions": [
            {
                "text": "Worthy of special notice; impressive.",
                "examples": [
                    "The team made a remarkable recovery after a slow start."
                ]
            }
        ],
        "comparative": "more remarkable",
        "superlative": "the most remarkable",
        "opposite": "unremarkable"
    },
    {
        "word": "sufficient",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "📈",
        "form": "adjective",
        "transcription": "səˈfɪʃnt",
        "subtext": "Formal | more than sufficient / quite sufficient / deemed sufficient",
        "definitions": [
            {
                "text": "Enough for the purpose.",
                "examples": [
                    "Authorities confirmed there was sufficient evidence to proceed."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "insufficient"
    },
    {
        "word": "tough",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🧱",
        "form": "adjective",
        "transcription": "tʌf",
        "subtext": "Neutral | very tough / a tough decision / incredibly tough",
        "definitions": [
            {
                "text": "Difficult; demanding strength or effort.",
                "examples": [
                    "The government faces some tough decisions on spending."
                ]
            }
        ],
        "comparative": "tougher",
        "superlative": "the toughest",
        "opposite": "easy"
    },
    {
        "word": "worthwhile",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "💎",
        "form": "adjective",
        "transcription": "ˌwɜːθˈwaɪl",
        "subtext": "Neutral | well worthwhile / very worthwhile / prove worthwhile",
        "definitions": [
            {
                "text": "Worth the time, money or effort spent.",
                "examples": [
                    "Learning a language is a worthwhile investment of time."
                ]
            }
        ],
        "comparative": "more worthwhile",
        "superlative": "the most worthwhile",
        "opposite": "pointless"
    },
    {
        "word": "absurd",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🤡",
        "form": "adjective",
        "transcription": "əbˈsɜːd",
        "subtext": "Neutral | utterly absurd / perfectly absurd / sound absurd",
        "definitions": [
            {
                "text": "Completely unreasonable or illogical; ridiculous.",
                "examples": [
                    "The proposal was dismissed as completely absurd."
                ]
            }
        ],
        "comparative": "more absurd",
        "superlative": "the most absurd",
        "opposite": "sensible"
    },
    {
        "word": "ridiculous",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "😂",
        "form": "adjective",
        "transcription": "rɪˈdɪkjələs",
        "subtext": "Neutral | absolutely ridiculous / utterly ridiculous / totally ridiculous",
        "definitions": [
            {
                "text": "Deserving to be laughed at; very unreasonable.",
                "examples": [
                    "The price they quoted was completely ridiculous."
                ]
            }
        ],
        "comparative": "more ridiculous",
        "superlative": "the most ridiculous",
        "opposite": "sensible"
    },
    {
        "word": "subtle",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🌓",
        "form": "adjective",
        "transcription": "ˈsʌtl",
        "subtext": "Formal | very subtle / quite subtle / a subtle distinction",
        "definitions": [
            {
                "text": "Not obvious; delicate and careful.",
                "examples": [
                    "There is a subtle difference between the two approaches."
                ]
            }
        ],
        "comparative": "subtler",
        "superlative": "the subtlest",
        "opposite": "obvious"
    },
    {
        "word": "anxious",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "😟",
        "form": "adjective",
        "transcription": "ˈæŋkʃəs",
        "subtext": "Neutral | feel anxious / deeply anxious / increasingly anxious",
        "definitions": [
            {
                "text": "Worried and nervous about something.",
                "examples": [
                    "Investors are increasingly anxious about the outlook."
                ]
            }
        ],
        "comparative": "more anxious",
        "superlative": "the most anxious",
        "opposite": "calm"
    },
    {
        "word": "ashamed",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "🤦",
        "form": "adjective",
        "transcription": "əˈʃeɪmd",
        "subtext": "Neutral | feel ashamed / deeply ashamed / ashamed of",
        "definitions": [
            {
                "text": "Feeling guilt or embarrassment.",
                "examples": [
                    "He was ashamed of how he handled the situation."
                ]
            }
        ],
        "comparative": "more ashamed",
        "superlative": "the most ashamed",
        "opposite": "proud"
    },
    {
        "word": "bitter",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "🍋",
        "form": "adjective",
        "transcription": "ˈbɪtə",
        "subtext": "Neutral | feel bitter / bitterly disappointed / a bitter argument",
        "definitions": [
            {
                "text": "Feeling strong anger and sadness; sharp in taste.",
                "examples": [
                    "She felt bitter about the way she was treated."
                ]
            }
        ],
        "comparative": "bitterer",
        "superlative": "the bitterest",
        "opposite": "sweet"
    },
    {
        "word": "concerned",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "😟",
        "form": "adjective",
        "transcription": "kənˈsɜːnd",
        "subtext": "Neutral | deeply concerned / seriously concerned / concerned about",
        "definitions": [
            {
                "text": "Worried or troubled about something.",
                "examples": [
                    "Doctors are concerned about the rise in stress-related illness."
                ]
            }
        ],
        "comparative": "more concerned",
        "superlative": "the most concerned",
        "opposite": "indifferent"
    },
    {
        "word": "convinced",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🧠",
        "form": "adjective",
        "transcription": "kənˈvɪnst",
        "subtext": "Neutral | fully convinced / utterly convinced / not entirely convinced",
        "definitions": [
            {
                "text": "Completely certain; having no doubt.",
                "examples": [
                    "After reviewing the data, she was convinced it would work."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "doubtful"
    },
    {
        "word": "delighted",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "😊",
        "form": "adjective",
        "transcription": "dɪˈlaɪtɪd",
        "subtext": "Neutral | absolutely delighted / truly delighted / delighted to hear",
        "definitions": [
            {
                "text": "Feeling great pleasure or happiness.",
                "examples": [
                    "The team was absolutely delighted with the results."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "disappointed"
    },
    {
        "word": "depressed",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "😔",
        "form": "adjective",
        "transcription": "dɪˈprɛst",
        "subtext": "Neutral | feel depressed / deeply depressed / clinically depressed",
        "definitions": [
            {
                "text": "Feeling very unhappy and without hope.",
                "examples": [
                    "Prolonged uncertainty can leave people feeling depressed."
                ]
            }
        ],
        "comparative": "more depressed",
        "superlative": "the most depressed",
        "opposite": "cheerful"
    },
    {
        "word": "eager",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "🤩",
        "form": "adjective",
        "transcription": "ˈiːɡə",
        "subtext": "Neutral | very eager / keen and eager / eager to learn",
        "definitions": [
            {
                "text": "Very willing and enthusiastic; keen.",
                "examples": [
                    "The new recruit was eager to prove herself quickly."
                ]
            }
        ],
        "comparative": "eagerer",
        "superlative": "the eagerest",
        "opposite": "indifferent"
    },
    {
        "word": "enthusiastic",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "🙌",
        "form": "adjective",
        "transcription": "ɪnˌθjuːziˈæstɪk",
        "subtext": "Neutral | very enthusiastic / wildly enthusiastic / enthusiastically",
        "definitions": [
            {
                "text": "Showing great excitement and interest.",
                "examples": [
                    "She received enthusiastic support from the whole team."
                ]
            }
        ],
        "comparative": "more enthusiastic",
        "superlative": "the most enthusiastic",
        "opposite": "apathetic"
    },
    {
        "word": "frustrated",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "😤",
        "form": "adjective",
        "transcription": "frʌˈstreɪtɪd",
        "subtext": "Neutral | deeply frustrated / increasingly frustrated / frustrated by",
        "definitions": [
            {
                "text": "Annoyed because you cannot achieve something.",
                "examples": [
                    "Teachers are frustrated by lack of resources and support."
                ]
            }
        ],
        "comparative": "more frustrated",
        "superlative": "the most frustrated",
        "opposite": "satisfied"
    },
    {
        "word": "furious",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "😡",
        "form": "adjective",
        "transcription": "ˈfjʊəriəs",
        "subtext": "Neutral | absolutely furious / utterly furious / furious about",
        "definitions": [
            {
                "text": "Extremely angry.",
                "examples": [
                    "The client was absolutely furious about the error."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "calm"
    },
    {
        "word": "impatient",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "⌚",
        "form": "adjective",
        "transcription": "ɪmˈpeɪʃnt",
        "subtext": "Neutral | grow impatient / very impatient / increasingly impatient",
        "definitions": [
            {
                "text": "Unwilling to wait; easily irritated.",
                "examples": [
                    "Shareholders are growing impatient with the lack of progress."
                ]
            }
        ],
        "comparative": "more impatient",
        "superlative": "the most impatient",
        "opposite": "patient"
    },
    {
        "word": "miserable",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "😫",
        "form": "adjective",
        "transcription": "ˈmɪzrəbl",
        "subtext": "Neutral | absolutely miserable / make someone miserable / feel miserable",
        "definitions": [
            {
                "text": "Very unhappy and uncomfortable.",
                "examples": [
                    "Working conditions in the department are miserable."
                ]
            }
        ],
        "comparative": "more miserable",
        "superlative": "the most miserable",
        "opposite": "cheerful"
    },
    {
        "word": "relieved",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "😌",
        "form": "adjective",
        "transcription": "rɪˈliːvd",
        "subtext": "Neutral | greatly relieved / hugely relieved / relieved to find out",
        "definitions": [
            {
                "text": "Feeling happy because a worry has ended.",
                "examples": [
                    "She was relieved to finally receive the contract."
                ]
            }
        ],
        "comparative": "more relieved",
        "superlative": "the most relieved",
        "opposite": "anxious"
    },
    {
        "word": "sympathetic",
        "level": "upper-intermediate",
        "theme": "emotional_intelligence_B2",
        "emoji": "🤝",
        "form": "adjective",
        "transcription": "ˌsɪmpəˈθɛtɪk",
        "subtext": "Neutral | very sympathetic / quite sympathetic / a sympathetic ear",
        "definitions": [
            {
                "text": "Showing understanding of another's problems.",
                "examples": [
                    "The HR team were sympathetic to his situation."
                ]
            }
        ],
        "comparative": "more sympathetic",
        "superlative": "the most sympathetic",
        "opposite": "unsympathetic"
    },
    {
        "word": "aggressive",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "👊",
        "form": "adjective",
        "transcription": "əˈɡrɛsɪv",
        "subtext": "Neutral | very aggressive / highly aggressive / an aggressive approach",
        "definitions": [
            {
                "text": "Ready to attack; forceful in a negative way.",
                "examples": [
                    "The company adopted an aggressive expansion strategy."
                ]
            }
        ],
        "comparative": "more aggressive",
        "superlative": "the most aggressive",
        "opposite": "gentle"
    },
    {
        "word": "bold",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "emoji": "🦁",
        "form": "adjective",
        "transcription": "bəʊld",
        "subtext": "Neutral | very bold / incredibly bold / a bold move",
        "definitions": [
            {
                "text": "Willing to take risks; very confident.",
                "examples": [
                    "The architect proposed a bold and unconventional design."
                ]
            }
        ],
        "comparative": "bolder",
        "superlative": "the boldest",
        "opposite": "timid"
    },
    {
        "word": "capable",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "emoji": "💪",
        "form": "adjective",
        "transcription": "ˈkeɪpəbl",
        "subtext": "Neutral | very capable / highly capable / fully capable",
        "definitions": [
            {
                "text": "Having the ability to do something.",
                "examples": [
                    "She is an extremely capable and independent professional."
                ]
            }
        ],
        "comparative": "more capable",
        "superlative": "the most capable",
        "opposite": "incapable"
    },
    {
        "word": "charming",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "✨",
        "form": "adjective",
        "transcription": "ˈtʃɑːmɪŋ",
        "subtext": "Neutral | very charming / utterly charming / naturally charming",
        "definitions": [
            {
                "text": "Pleasing and attractive in a persuasive way.",
                "examples": [
                    "The CEO is known for being charming with investors."
                ]
            }
        ],
        "comparative": "more charming",
        "superlative": "the most charming",
        "opposite": "unpleasant"
    },
    {
        "word": "dishonest",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "emoji": "🤥",
        "form": "adjective",
        "transcription": "dɪsˈɒnɪst",
        "subtext": "Neutral | completely dishonest / deeply dishonest / dishonest about",
        "definitions": [
            {
                "text": "Not truthful; intended to deceive.",
                "examples": [
                    "The committee found the evidence was deliberately dishonest."
                ]
            }
        ],
        "comparative": "more dishonest",
        "superlative": "the most dishonest",
        "opposite": "honest"
    },
    {
        "word": "modest",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "emoji": "🙇",
        "form": "adjective",
        "transcription": "ˈmɒdɪst",
        "subtext": "Neutral | very modest / quite modest / genuinely modest",
        "definitions": [
            {
                "text": "Not boasting about your abilities.",
                "examples": [
                    "Despite her success, she remains genuinely modest."
                ]
            }
        ],
        "comparative": "more modest",
        "superlative": "the most modest",
        "opposite": "arrogant"
    },
    {
        "word": "stubborn",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "emoji": "🐂",
        "form": "adjective",
        "transcription": "ˈstʌbən",
        "subtext": "Neutral | very stubborn / incredibly stubborn / stubbornly refused",
        "definitions": [
            {
                "text": "Refusing to change your opinion or plans.",
                "examples": [
                    "He is too stubborn to admit when he is wrong."
                ]
            }
        ],
        "comparative": "more stubborn",
        "superlative": "the most stubborn",
        "opposite": "flexible"
    },
    {
        "word": "selfish",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "emoji": "🤳",
        "form": "adjective",
        "transcription": "ˈsɛlfɪʃ",
        "subtext": "Neutral | very selfish / deeply selfish / incredibly selfish",
        "definitions": [
            {
                "text": "Thinking only of yourself; not caring about others.",
                "examples": [
                    "It was selfish to take credit for the whole team's work."
                ]
            }
        ],
        "comparative": "more selfish",
        "superlative": "the most selfish",
        "opposite": "selfless"
    },
    {
        "word": "optimistic",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "🌅",
        "form": "adjective",
        "transcription": "ˌɒptɪˈmɪstɪk",
        "subtext": "Neutral | cautiously optimistic / very optimistic / remain optimistic",
        "definitions": [
            {
                "text": "Expecting the best outcome; hopeful.",
                "examples": [
                    "She remains optimistic despite the challenging market."
                ]
            }
        ],
        "comparative": "more optimistic",
        "superlative": "the most optimistic",
        "opposite": "pessimistic"
    },
    {
        "word": "pessimistic",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "emoji": "☁️",
        "form": "adjective",
        "transcription": "ˌpɛsɪˈmɪstɪk",
        "subtext": "Neutral | deeply pessimistic / very pessimistic / unduly pessimistic",
        "definitions": [
            {
                "text": "Expecting the worst; not hopeful.",
                "examples": [
                    "He has a pessimistic view of the company's future."
                ]
            }
        ],
        "comparative": "more pessimistic",
        "superlative": "the most pessimistic",
        "opposite": "optimistic"
    },
    {
        "word": "democratic",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🗳️",
        "form": "adjective",
        "transcription": "ˌdɛməˈkrætɪk",
        "subtext": "Formal | fully democratic / more democratic / democratic process",
        "definitions": [
            {
                "text": "Based on the principle of equal rights and representation.",
                "examples": [
                    "The company promotes a democratic decision-making process."
                ]
            }
        ],
        "comparative": "more democratic",
        "superlative": "the most democratic",
        "opposite": "authoritarian"
    },
    {
        "word": "controversial",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🗣️",
        "form": "adjective",
        "transcription": "ˌkɒntrəˈvɜːʃl",
        "subtext": "Formal | highly controversial / deeply controversial / spark controversy",
        "definitions": [
            {
                "text": "Causing disagreement or strong public debate.",
                "examples": [
                    "The new policy proved highly controversial."
                ]
            }
        ],
        "comparative": "more controversial",
        "superlative": "the most controversial",
        "opposite": "uncontroversial"
    },
    {
        "word": "corrupt",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "💸",
        "form": "adjective",
        "transcription": "kəˈrʌpt",
        "subtext": "Formal | deeply corrupt / completely corrupt / a corrupt system",
        "definitions": [
            {
                "text": "Acting dishonestly for personal gain.",
                "examples": [
                    "The investigation revealed that the official was corrupt."
                ]
            }
        ],
        "comparative": "more corrupt",
        "superlative": "the most corrupt",
        "opposite": "honest"
    },
    {
        "word": "diverse",
        "level": "upper-intermediate",
        "theme": "globalisation_geography_B2",
        "emoji": "🌍",
        "form": "adjective",
        "transcription": "daɪˈvɜːs",
        "subtext": "Neutral | very diverse / hugely diverse / ethnically diverse",
        "definitions": [
            {
                "text": "Having a great deal of variety.",
                "examples": [
                    "The company prides itself on its diverse workforce."
                ]
            }
        ],
        "comparative": "more diverse",
        "superlative": "the most diverse",
        "opposite": "homogeneous"
    },
    {
        "word": "domestic",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🏠",
        "form": "adjective",
        "transcription": "dəˈmɛstɪk",
        "subtext": "Formal | domestic market / domestic policy / domestic violence",
        "definitions": [
            {
                "text": "Relating to the home or one's own country.",
                "examples": [
                    "Domestic demand for the product has fallen sharply."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "international"
    },
    {
        "word": "liberal",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🗽",
        "form": "adjective",
        "transcription": "ˈlɪbərəl",
        "subtext": "Neutral | very liberal / quite liberal / a liberal approach",
        "definitions": [
            {
                "text": "Open to new ideas; favouring individual freedom.",
                "examples": [
                    "The company has liberal policies on remote working."
                ]
            }
        ],
        "comparative": "more liberal",
        "superlative": "the most liberal",
        "opposite": "conservative"
    },
    {
        "word": "radical",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🧨",
        "form": "adjective",
        "transcription": "ˈrædɪkl",
        "subtext": "Neutral | quite radical / deeply radical / a radical idea",
        "definitions": [
            {
                "text": "Very different from traditional; extreme in change.",
                "examples": [
                    "She proposed a radical restructuring of the organisation."
                ]
            }
        ],
        "comparative": "more radical",
        "superlative": "the most radical",
        "opposite": "moderate"
    },
    {
        "word": "widespread",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🌍",
        "form": "adjective",
        "transcription": "ˈwaɪdsprɛd",
        "subtext": "Formal | increasingly widespread / very widespread / extremely widespread",
        "definitions": [
            {
                "text": "Found or occurring over a large area.",
                "examples": [
                    "Burnout is widespread across the financial sector."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "rare"
    },
    {
        "word": "complex",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🧩",
        "form": "adjective",
        "transcription": "ˈkɒmplɛks",
        "subtext": "Formal | very complex / highly complex / increasingly complex",
        "definitions": [
            {
                "text": "Consisting of many related parts; not simple.",
                "examples": [
                    "The situation is far more complex than it first appears."
                ]
            }
        ],
        "comparative": "more complex",
        "superlative": "the most complex",
        "opposite": "simple"
    },
    {
        "word": "comprehensive",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "📚",
        "form": "adjective",
        "transcription": "ˌkɒmprɪˈhɛnsɪv",
        "subtext": "Formal | truly comprehensive / very comprehensive / a comprehensive review",
        "definitions": [
            {
                "text": "Including all or most of what is needed.",
                "examples": [
                    "The report gives a very comprehensive overview."
                ]
            }
        ],
        "comparative": "more comprehensive",
        "superlative": "the most comprehensive",
        "opposite": "partial"
    },
    {
        "word": "consistent",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🔄",
        "form": "adjective",
        "transcription": "kənˈsɪstənt",
        "subtext": "Formal | highly consistent / very consistent / entirely consistent",
        "definitions": [
            {
                "text": "Always acting in the same way; regular.",
                "examples": [
                    "She produces consistently high-quality work."
                ]
            }
        ],
        "comparative": "more consistent",
        "superlative": "the most consistent",
        "opposite": "inconsistent"
    },
    {
        "word": "conventional",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🎩",
        "form": "adjective",
        "transcription": "kənˈvɛnʃənl",
        "subtext": "Formal | very conventional / highly conventional / conventional thinking",
        "definitions": [
            {
                "text": "Following what is traditional or expected.",
                "examples": [
                    "A more conventional approach was taken to the problem."
                ]
            }
        ],
        "comparative": "more conventional",
        "superlative": "the most conventional",
        "opposite": "unconventional"
    },
    {
        "word": "distinct",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🌓",
        "form": "adjective",
        "transcription": "dɪˈstɪŋkt",
        "subtext": "Formal | clearly distinct / quite distinct / a distinct difference",
        "definitions": [
            {
                "text": "Clearly different; easily recognised.",
                "examples": [
                    "There are two distinct approaches to the problem."
                ]
            }
        ],
        "comparative": "more distinct",
        "superlative": "the most distinct",
        "opposite": "indistinct"
    },
    {
        "word": "dominant",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🦁",
        "form": "adjective",
        "transcription": "ˈdɒmɪnənt",
        "subtext": "Formal | largely dominant / clearly dominant / the dominant force",
        "definitions": [
            {
                "text": "Most important or powerful.",
                "examples": [
                    "English remains the dominant language of business."
                ]
            }
        ],
        "comparative": "more dominant",
        "superlative": "the most dominant",
        "opposite": "subordinate"
    },
    {
        "word": "fundamental",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🧱",
        "form": "adjective",
        "transcription": "ˌfʌndəˈmɛntl",
        "subtext": "Formal | absolutely fundamental / truly fundamental / a fundamental flaw",
        "definitions": [
            {
                "text": "Central to and essential to the existence of.",
                "examples": [
                    "Trust is fundamental to any successful partnership."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "superficial"
    },
    {
        "word": "inherent",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🧬",
        "form": "adjective",
        "transcription": "ɪnˈhɪərənt",
        "subtext": "Formal | inherent risk / inherent problem / naturally inherent",
        "definitions": [
            {
                "text": "Existing as a natural part of something.",
                "examples": [
                    "There are inherent risks in every business venture."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "acquired"
    },
    {
        "word": "rational",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🧠",
        "form": "adjective",
        "transcription": "ˈræʃənl",
        "subtext": "Formal | entirely rational / very rational / a rational approach",
        "definitions": [
            {
                "text": "Based on clear and logical thinking.",
                "examples": [
                    "We need to make a rational decision based on the facts."
                ]
            }
        ],
        "comparative": "more rational",
        "superlative": "the most rational",
        "opposite": "irrational"
    },
    {
        "word": "relevant",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🔗",
        "form": "adjective",
        "transcription": "ˈrɛləvənt",
        "subtext": "Neutral | directly relevant / highly relevant / relevant to",
        "definitions": [
            {
                "text": "Directly connected to the matter being discussed.",
                "examples": [
                    "Please only share relevant information in the meeting."
                ]
            }
        ],
        "comparative": "more relevant",
        "superlative": "the most relevant",
        "opposite": "irrelevant"
    },
    {
        "word": "significant",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "📈",
        "form": "adjective",
        "transcription": "sɪɡˈnɪfɪkənt",
        "subtext": "Formal | very significant / highly significant / statistically significant",
        "definitions": [
            {
                "text": "Important; large enough to have an effect.",
                "examples": [
                    "There has been a significant improvement in results."
                ]
            }
        ],
        "comparative": "more significant",
        "superlative": "the most significant",
        "opposite": "insignificant"
    },
    {
        "word": "straightforward",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "📏",
        "form": "adjective",
        "transcription": "ˌstreɪtˈfɔːwəd",
        "subtext": "Neutral | very straightforward / quite straightforward / perfectly straightforward",
        "definitions": [
            {
                "text": "Easy to understand; not complicated.",
                "examples": [
                    "The process is actually quite straightforward."
                ]
            }
        ],
        "comparative": "more straightforward",
        "superlative": "the most straightforward",
        "opposite": "complex"
    },
    {
        "word": "underlying",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "⚓",
        "form": "adjective",
        "transcription": "ˌʌndəˈlaɪɪŋ",
        "subtext": "Formal | the underlying cause / underlying issue / underlying trend",
        "definitions": [
            {
                "text": "Existing beneath the surface; basic and important.",
                "examples": [
                    "We need to address the underlying causes of the problem."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "superficial"
    },
    {
        "word": "valid",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "✅",
        "form": "adjective",
        "transcription": "ˈvælɪd",
        "subtext": "Formal | entirely valid / perfectly valid / a valid argument",
        "definitions": [
            {
                "text": "Legally or officially acceptable; well-founded.",
                "examples": [
                    "She made a very valid point in the meeting."
                ]
            }
        ],
        "comparative": "more valid",
        "superlative": "the most valid",
        "opposite": "invalid"
    },
    {
        "word": "enormous",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🐘",
        "form": "adjective",
        "transcription": "ɪˈnɔːməs",
        "subtext": "Neutral | an enormous amount / enormous pressure / truly enormous",
        "definitions": [
            {
                "text": "Very large in size or amount.",
                "examples": [
                    "The company made an enormous profit this year."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "tiny"
    },
    {
        "word": "extreme",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🌋",
        "form": "adjective",
        "transcription": "ɪkˈstriːm",
        "subtext": "Neutral | extremely well / at the extreme end / an extreme case",
        "definitions": [
            {
                "text": "Very great in degree; going beyond normal limits.",
                "examples": [
                    "The work pressure reached an extreme level."
                ]
            }
        ],
        "comparative": "more extreme",
        "superlative": "the most extreme",
        "opposite": "moderate"
    },
    {
        "word": "intense",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🔥",
        "form": "adjective",
        "transcription": "ɪnˈtɛns",
        "subtext": "Neutral | very intense / highly intense / an intense debate",
        "definitions": [
            {
                "text": "Very strong or concentrated.",
                "examples": [
                    "The competition in this market is very intense."
                ]
            }
        ],
        "comparative": "intenser",
        "superlative": "the intensest",
        "opposite": "mild"
    },
    {
        "word": "massive",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🏔️",
        "form": "adjective",
        "transcription": "ˈmæsɪv",
        "subtext": "Neutral | a massive difference / truly massive / a massive problem",
        "definitions": [
            {
                "text": "Very large in amount or degree.",
                "examples": [
                    "There was a massive increase in demand last quarter."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "tiny"
    },
    {
        "word": "moderate",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "🌡️",
        "form": "adjective",
        "transcription": "ˈmɒdərət",
        "subtext": "Formal | very moderate / fairly moderate / a moderate improvement",
        "definitions": [
            {
                "text": "Average; not extreme.",
                "examples": [
                    "The economy is growing at a moderate pace."
                ]
            }
        ],
        "comparative": "more moderate",
        "superlative": "the most moderate",
        "opposite": "extreme"
    },
    {
        "word": "severe",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "⛈️",
        "form": "adjective",
        "transcription": "sɪˈvɪə",
        "subtext": "Formal | very severe / extremely severe / severe consequences",
        "definitions": [
            {
                "text": "Very serious or intense.",
                "examples": [
                    "The company faced severe financial difficulties."
                ]
            }
        ],
        "comparative": "severer",
        "superlative": "the severest",
        "opposite": "mild"
    },
    {
        "word": "substantial",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "emoji": "💰",
        "form": "adjective",
        "transcription": "səbˈstænʃl",
        "subtext": "Formal | very substantial / quite substantial / a substantial amount",
        "definitions": [
            {
                "text": "Large in size, amount or importance.",
                "examples": [
                    "She received a substantial pay increase this year."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "insignificant"
    },
    {
        "word": "civic",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🏛️",
        "form": "adjective",
        "transcription": "ˈsɪvɪk",
        "subtext": "Formal | civic duty / civic engagement / civic improvement",
        "definitions": [
            {
                "text": "Relating to a town, city, or the people who live there.",
                "examples": [
                    "Voting is a civic duty.",
                    "The city was awarded a prize for civic improvement."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": null
    },
    {
        "word": "chronic",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "emoji": "⏳🤒",
        "form": "adjective",
        "transcription": "ˈkrɒnɪk",
        "subtext": "Formal | chronic pain / chronic illness / chronic respiratory condition",
        "definitions": [
            {
                "text": "Lasting a long time; of a health condition that is persistent.",
                "examples": [
                    "She suffers from chronic back pain.",
                    "He has a chronic respiratory condition."
                ]
            }
        ],
        "comparative": "more chronic",
        "superlative": "the most chronic",
        "opposite": "acute"
    },
    {
        "word": "preventive",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "emoji": "🛡️",
        "form": "adjective",
        "transcription": "prɪˈvɛntɪv",
        "subtext": "Formal | preventive medicine / preventive measure / preventive action",
        "definitions": [
            {
                "text": "Designed to stop something bad from happening.",
                "examples": [
                    "Preventive medicine reduces long-term costs.",
                    "They took preventive action to avoid a strike."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "opposite": null
    },
    {
        "word": "moral",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "emoji": "⚖️",
        "form": "adjective",
        "transcription": "ˈmɒrəl",
        "subtext": "Neutral | moral decision / moral obligation / moral issue",
        "definitions": [
            {
                "text": "Relating to principles of right and wrong behaviour.",
                "examples": [
                    "She made a moral decision to refuse the money.",
                    "Is it a moral issue or a legal one?"
                ]
            }
        ],
        "comparative": "more moral",
        "superlative": "the most moral",
        "opposite": "immoral"
    },
    {
        "word": "ethical",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "emoji": "🤔⚖️",
        "form": "adjective",
        "transcription": "ˈɛθɪkl",
        "subtext": "Formal | ethical investment / ethical standards / ethical way",
        "definitions": [
            {
                "text": "Relating to ethics; following accepted rules of right conduct.",
                "examples": [
                    "Companies must operate in an ethical way.",
                    "Is it ethical to experiment on animals?"
                ]
            }
        ],
        "comparative": "more ethical",
        "superlative": "the most ethical",
        "opposite": "unethical"
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
