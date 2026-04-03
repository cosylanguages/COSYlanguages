(function() {
    const data = [
    {
        "word": "civic",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🏛️",
        "form": "adjective",
        "subtext": "civic duty, civic engagement",
        "definitions": [
            {
                "text": "Relating to a town, city, or the people who live there.",
                "examples": [
                    "Voting is a civic duty.",
                    "The city was awarded a prize for civic improvement."
                ]
            }
        ]
    },
    {
        "word": "chronic",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "emoji": "⏳🤒",
        "form": "adjective",
        "subtext": "chronic pain, chronic illness",
        "opposite": "acute",
        "definitions": [
            {
                "text": "Lasting a long time; of a health condition that is persistent.",
                "examples": [
                    "She suffers from chronic back pain.",
                    "He has a chronic respiratory condition."
                ]
            }
        ]
    },
    {
        "word": "preventive",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "emoji": "🛡️",
        "form": "adjective",
        "subtext": "preventive medicine, preventive measure",
        "definitions": [
            {
                "text": "Designed to stop something bad from happening.",
                "examples": [
                    "Preventive medicine reduces long-term costs.",
                    "They took preventive action to avoid a strike."
                ]
            }
        ]
    },
    {
        "word": "moral",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "emoji": "⚖️",
        "form": "adjective",
        "subtext": "moral decision, moral obligation",
        "definitions": [
            {
                "text": "Relating to principles of right and wrong behaviour.",
                "examples": [
                    "She made a moral decision to refuse the money.",
                    "Is it a moral issue or a legal one?"
                ]
            }
        ]
    },
    {
        "word": "ethical",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "emoji": "🤔⚖️",
        "form": "adjective",
        "subtext": "ethical investment, ethical standards",
        "definitions": [
            {
                "text": "Relating to ethics; following accepted rules of right conduct.",
                "examples": [
                    "Companies must operate in an ethical way.",
                    "Is it ethical to experiment on animals?"
                ]
            }
        ]
    },
    {
        "word": "accurate",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Correct in every detail; free from error.",
                "examples": [
                    "Scientists need accurate measurements for experiments."
                ]
            }
        ],
        "subtext": "highly accurate / very accurate / accurate data"
    },
    {
        "word": "adequate",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Enough for the purpose; satisfactory.",
                "examples": [
                    "Critics argued the funding was not adequate to meet demand."
                ]
            }
        ],
        "subtext": "barely adequate / more than adequate / deemed adequate"
    },
    {
        "word": "appropriate",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Suitable for a particular situation.",
                "examples": [
                    "The minister questioned whether the response was appropriate."
                ]
            }
        ],
        "subtext": "entirely appropriate / wholly appropriate / deem appropriate"
    },
    {
        "word": "crucial",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extremely important; critical.",
                "examples": [
                    "Timing proved crucial to the success of the plan."
                ]
            }
        ],
        "subtext": "absolutely crucial / play a crucial role / of crucial importance"
    },
    {
        "word": "genuine",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Truly what it appears to be; authentic.",
                "examples": [
                    "She showed a genuine interest in the project."
                ]
            }
        ],
        "subtext": "a genuine concern / completely genuine",
        "synonyms": ["genuinely interested"]
    },
    {
        "word": "outstanding",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Exceptionally good; beyond the expected level.",
                "examples": [
                    "She demonstrated outstanding leadership under pressure."
                ]
            }
        ],
        "subtext": "truly outstanding / outstanding work / an outstanding candidate"
    },
    {
        "word": "remarkable",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Worthy of special notice; impressive.",
                "examples": [
                    "The team made a remarkable recovery after a slow start."
                ]
            }
        ],
        "subtext": "truly remarkable / quite remarkable / a remarkable result"
    },
    {
        "word": "sufficient",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Enough for the purpose.",
                "examples": [
                    "Authorities confirmed there was sufficient evidence to proceed."
                ]
            }
        ],
        "subtext": "more than sufficient / quite sufficient / deemed sufficient"
    },
    {
        "word": "tough",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Difficult; demanding strength or effort.",
                "examples": [
                    "The government faces some tough decisions on spending."
                ]
            }
        ],
        "subtext": "very tough / a tough decision / incredibly tough"
    },
    {
        "word": "worthwhile",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Worth the time, money or effort spent.",
                "examples": [
                    "Learning a language is a worthwhile investment of time."
                ]
            }
        ],
        "subtext": "well worthwhile / very worthwhile / prove worthwhile"
    },
    {
        "word": "absurd",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Completely unreasonable or illogical; ridiculous.",
                "examples": [
                    "The proposal was dismissed as completely absurd."
                ]
            }
        ],
        "subtext": "utterly absurd / perfectly absurd / sound absurd"
    },
    {
        "word": "ridiculous",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Deserving to be laughed at; very unreasonable.",
                "examples": [
                    "The price they quoted was completely ridiculous."
                ]
            }
        ],
        "subtext": "absolutely ridiculous / utterly ridiculous / totally ridiculous"
    },
    {
        "word": "subtle",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not obvious; delicate and careful.",
                "examples": [
                    "There is a subtle difference between the two approaches."
                ]
            }
        ],
        "subtext": "very subtle / quite subtle / a subtle distinction"
    },
    {
        "word": "anxious",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Worried and nervous about something.",
                "examples": [
                    "Investors are increasingly anxious about the outlook."
                ]
            }
        ],
        "subtext": "feel anxious / deeply anxious / increasingly anxious"
    },
    {
        "word": "ashamed",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling guilt or embarrassment.",
                "examples": [
                    "He was ashamed of how he handled the situation."
                ]
            }
        ],
        "subtext": "feel ashamed / deeply ashamed / ashamed of"
    },
    {
        "word": "bitter",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling strong anger and sadness; sharp in taste.",
                "examples": [
                    "She felt bitter about the way she was treated."
                ]
            }
        ],
        "subtext": "feel bitter / a bitter argument",
        "synonyms": ["bitterly disappointed"]
    },
    {
        "word": "concerned",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Worried or troubled about something.",
                "examples": [
                    "Doctors are concerned about the rise in stress-related illness."
                ]
            }
        ],
        "subtext": "deeply concerned / seriously concerned / concerned about"
    },
    {
        "word": "convinced",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Completely certain; having no doubt.",
                "examples": [
                    "After reviewing the data, she was convinced it would work."
                ]
            }
        ],
        "subtext": "fully convinced / utterly convinced / not entirely convinced"
    },
    {
        "word": "delighted",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling great pleasure or happiness.",
                "examples": [
                    "The team was absolutely delighted with the results."
                ]
            }
        ],
        "subtext": "absolutely delighted / truly delighted / delighted to hear"
    },
    {
        "word": "depressed",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling very unhappy and without hope.",
                "examples": [
                    "Prolonged uncertainty can leave people feeling depressed."
                ]
            }
        ],
        "subtext": "feel depressed / deeply depressed / clinically depressed"
    },
    {
        "word": "eager",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very willing and enthusiastic; keen.",
                "examples": [
                    "The new recruit was eager to prove herself quickly."
                ]
            }
        ],
        "subtext": "very eager / keen and eager / eager to learn"
    },
    {
        "word": "enthusiastic",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Showing great excitement and interest.",
                "examples": [
                    "She received enthusiastic support from the whole team."
                ]
            }
        ],
        "subtext": "very enthusiastic / wildly enthusiastic",
        "synonyms": ["enthusiastically"]
    },
    {
        "word": "frustrated",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Annoyed because you cannot achieve something.",
                "examples": [
                    "Teachers are frustrated by lack of resources and support."
                ]
            }
        ],
        "subtext": "deeply frustrated / increasingly frustrated / frustrated by"
    },
    {
        "word": "furious",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extremely angry.",
                "examples": [
                    "The client was absolutely furious about the error."
                ]
            }
        ],
        "subtext": "absolutely furious / utterly furious / furious about"
    },
    {
        "word": "impatient",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Unwilling to wait; easily irritated.",
                "examples": [
                    "Shareholders are growing impatient with the lack of progress."
                ]
            }
        ],
        "subtext": "grow impatient / very impatient / increasingly impatient"
    },
    {
        "word": "miserable",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very unhappy and uncomfortable.",
                "examples": [
                    "Working conditions in the department are miserable."
                ]
            }
        ],
        "subtext": "absolutely miserable / make someone miserable / feel miserable"
    },
    {
        "word": "relieved",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling happy because a worry has ended.",
                "examples": [
                    "She was relieved to finally receive the contract."
                ]
            }
        ],
        "subtext": "greatly relieved / hugely relieved / relieved to find out"
    },
    {
        "word": "sympathetic",
        "level": "upper-intermediate",
        "theme": "emotional_intelligence_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Showing understanding of another's problems.",
                "examples": [
                    "The HR team were sympathetic to his situation."
                ]
            }
        ],
        "subtext": "very sympathetic / quite sympathetic / a sympathetic ear"
    },
    {
        "word": "aggressive",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ready to attack; forceful in a negative way.",
                "examples": [
                    "The company adopted an aggressive expansion strategy."
                ]
            }
        ],
        "subtext": "very aggressive / highly aggressive / an aggressive approach"
    },
    {
        "word": "bold",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Willing to take risks; very confident.",
                "examples": [
                    "The architect proposed a bold and unconventional design."
                ]
            }
        ],
        "subtext": "very bold / incredibly bold / a bold move"
    },
    {
        "word": "capable",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having the ability to do something.",
                "examples": [
                    "She is an extremely capable and independent professional."
                ]
            }
        ],
        "subtext": "very capable / highly capable / fully capable"
    },
    {
        "word": "charming",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Pleasing and attractive in a persuasive way.",
                "examples": [
                    "The CEO is known for being charming with investors."
                ]
            }
        ],
        "subtext": "very charming / utterly charming / naturally charming"
    },
    {
        "word": "dishonest",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not truthful; intended to deceive.",
                "examples": [
                    "The committee found the evidence was deliberately dishonest."
                ]
            }
        ],
        "subtext": "completely dishonest / deeply dishonest / dishonest about"
    },
    {
        "word": "modest",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not boasting about your abilities.",
                "examples": [
                    "Despite her success, she remains genuinely modest."
                ]
            }
        ],
        "subtext": "very modest / quite modest / genuinely modest"
    },
    {
        "word": "stubborn",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Refusing to change your opinion or plans.",
                "examples": [
                    "He is too stubborn to admit when he is wrong."
                ]
            }
        ],
        "subtext": "very stubborn / incredibly stubborn",
        "synonyms": ["stubbornly refused"]
    },
    {
        "word": "selfish",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Thinking only of yourself; not caring about others.",
                "examples": [
                    "It was selfish to take credit for the whole team's work."
                ]
            }
        ],
        "subtext": "very selfish / deeply selfish / incredibly selfish"
    },
    {
        "word": "optimistic",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Expecting the best outcome; hopeful.",
                "examples": [
                    "She remains optimistic despite the challenging market."
                ]
            }
        ],
        "subtext": "cautiously optimistic / very optimistic / remain optimistic"
    },
    {
        "word": "pessimistic",
        "level": "upper-intermediate",
        "theme": "complex_emotions_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Expecting the worst; not hopeful.",
                "examples": [
                    "He has a pessimistic view of the company's future."
                ]
            }
        ],
        "subtext": "deeply pessimistic / very pessimistic / unduly pessimistic"
    },
    {
        "word": "democratic",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Based on the principle of equal rights and representation.",
                "examples": [
                    "The company promotes a democratic decision-making process."
                ]
            }
        ],
        "subtext": "fully democratic / more democratic / democratic process"
    },
    {
        "word": "controversial",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Causing disagreement or strong public debate.",
                "examples": [
                    "The new policy proved highly controversial."
                ]
            }
        ],
        "subtext": "highly controversial / deeply controversial",
        "synonyms": ["spark controversy"]
    },
    {
        "word": "corrupt",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Acting dishonestly for personal gain.",
                "examples": [
                    "The investigation revealed that the official was corrupt."
                ]
            }
        ],
        "subtext": "deeply corrupt / completely corrupt / a corrupt system"
    },
    {
        "word": "diverse",
        "level": "upper-intermediate",
        "theme": "globalisation_geography_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a great deal of variety.",
                "examples": [
                    "The company prides itself on its diverse workforce."
                ]
            }
        ],
        "subtext": "very diverse / hugely diverse / ethnically diverse"
    },
    {
        "word": "domestic",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the home or one's own country.",
                "examples": [
                    "Domestic demand for the product has fallen sharply."
                ]
            }
        ],
        "subtext": "domestic market / domestic policy / domestic violence"
    },
    {
        "word": "liberal",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Open to new ideas; favouring individual freedom.",
                "examples": [
                    "The company has liberal policies on remote working."
                ]
            }
        ],
        "subtext": "very liberal / quite liberal / a liberal approach"
    },
    {
        "word": "radical",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very different from traditional; extreme in change.",
                "examples": [
                    "She proposed a radical restructuring of the organisation."
                ]
            }
        ],
        "subtext": "quite radical / deeply radical / a radical idea"
    },
    {
        "word": "widespread",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Found or occurring over a large area.",
                "examples": [
                    "Burnout is widespread across the financial sector."
                ]
            }
        ],
        "subtext": "increasingly widespread / very widespread / extremely widespread"
    },
    {
        "word": "complex",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Consisting of many related parts; not simple.",
                "examples": [
                    "The situation is far more complex than it first appears."
                ]
            }
        ],
        "subtext": "very complex / highly complex / increasingly complex"
    },
    {
        "word": "comprehensive",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Including all or most of what is needed.",
                "examples": [
                    "The report gives a very comprehensive overview."
                ]
            }
        ],
        "subtext": "truly comprehensive / very comprehensive / a comprehensive review"
    },
    {
        "word": "consistent",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Always acting in the same way; regular.",
                "examples": [
                    "She produces consistently high-quality work."
                ]
            }
        ],
        "subtext": "highly consistent / very consistent / entirely consistent"
    },
    {
        "word": "conventional",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Following what is traditional or expected.",
                "examples": [
                    "A more conventional approach was taken to the problem."
                ]
            }
        ],
        "subtext": "very conventional / highly conventional / conventional thinking"
    },
    {
        "word": "distinct",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Clearly different; easily recognised.",
                "examples": [
                    "There are two distinct approaches to the problem."
                ]
            }
        ],
        "subtext": "clearly distinct / quite distinct / a distinct difference"
    },
    {
        "word": "dominant",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Most important or powerful.",
                "examples": [
                    "English remains the dominant language of business."
                ]
            }
        ],
        "subtext": "largely dominant / clearly dominant / the dominant force"
    },
    {
        "word": "fundamental",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Central to and essential to the existence of.",
                "examples": [
                    "Trust is fundamental to any successful partnership."
                ]
            }
        ],
        "subtext": "absolutely fundamental / truly fundamental / a fundamental flaw"
    },
    {
        "word": "inherent",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Existing as a natural part of something.",
                "examples": [
                    "There are inherent risks in every business venture."
                ]
            }
        ],
        "subtext": "inherent risk / inherent problem / naturally inherent"
    },
    {
        "word": "rational",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Based on clear and logical thinking.",
                "examples": [
                    "We need to make a rational decision based on the facts."
                ]
            }
        ],
        "subtext": "entirely rational / very rational / a rational approach"
    },
    {
        "word": "relevant",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Directly connected to the matter being discussed.",
                "examples": [
                    "Please only share relevant information in the meeting."
                ]
            }
        ],
        "subtext": "directly relevant / highly relevant / relevant to"
    },
    {
        "word": "significant",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Important; large enough to have an effect.",
                "examples": [
                    "There has been a significant improvement in results."
                ]
            }
        ],
        "subtext": "very significant / highly significant / statistically significant"
    },
    {
        "word": "straightforward",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Easy to understand; not complicated.",
                "examples": [
                    "The process is actually quite straightforward."
                ]
            }
        ],
        "subtext": "very straightforward / quite straightforward / perfectly straightforward"
    },
    {
        "word": "underlying",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Existing beneath the surface; basic and important.",
                "examples": [
                    "We need to address the underlying causes of the problem."
                ]
            }
        ],
        "subtext": "the underlying cause / underlying issue / underlying trend"
    },
    {
        "word": "valid",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Legally or officially acceptable; well-founded.",
                "examples": [
                    "She made a very valid point in the meeting."
                ]
            }
        ],
        "subtext": "entirely valid / perfectly valid / a valid argument"
    },
    {
        "word": "enormous",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very large in size or amount.",
                "examples": [
                    "The company made an enormous profit this year."
                ]
            }
        ],
        "subtext": "an enormous amount / enormous pressure / truly enormous"
    },
    {
        "word": "extreme",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very great in degree; going beyond normal limits.",
                "examples": [
                    "The work pressure reached an extreme level."
                ]
            }
        ],
        "subtext": "at the extreme end / an extreme case",
        "synonyms": ["extremely well"]
    },
    {
        "word": "intense",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very strong or concentrated.",
                "examples": [
                    "The competition in this market is very intense."
                ]
            }
        ],
        "subtext": "very intense / highly intense / an intense debate"
    },
    {
        "word": "massive",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very large in amount or degree.",
                "examples": [
                    "There was a massive increase in demand last quarter."
                ]
            }
        ],
        "subtext": "a massive difference / truly massive / a massive problem"
    },
    {
        "word": "moderate",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Average; not extreme.",
                "examples": [
                    "The economy is growing at a moderate pace."
                ]
            }
        ],
        "subtext": "very moderate / fairly moderate / a moderate improvement"
    },
    {
        "word": "severe",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very serious or intense.",
                "examples": [
                    "The company faced severe financial difficulties."
                ]
            }
        ],
        "subtext": "very severe / extremely severe / severe consequences"
    },
    {
        "word": "substantial",
        "level": "upper-intermediate",
        "theme": "abstract_description_B2",
        "form": "adjective",
        "definitions": [
            {
                "text": "Large in size, amount or importance.",
                "examples": [
                    "She received a substantial pay increase this year."
                ]
            }
        ],
        "subtext": "very substantial / quite substantial / a substantial amount"
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
