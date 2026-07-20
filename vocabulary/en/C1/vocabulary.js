(function() {
    const lang = "en";
    const data = [
    {
            "word": "firefighter",
            "level": "advanced",
            "theme": "language",
            "emoji": "👨‍🚒",
            "form": "noun",
            "classification": "regular",
            "plural": "firefighters",
            "transcription": "🇬🇧 ˈfaɪəˌfaɪtə | 🇺🇸 ˈfaɪəˌfaɪtər",
            "definitions": [
                    {
                            "text": "A person whose job is to stop fires from burning.",
                            "examples": [
                                    "The firefighter is wearing a helmet.",
                                    "Firefighters are very brave."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_advanced_register_c1_noun_firefighter"
    },
    {
            "word": "data scientist",
            "level": "advanced",
            "theme": "language",
            "emoji": "📊",
            "form": "noun",
            "classification": "regular",
            "plural": "data scientists",
            "transcription": "ˈdeɪtə ˈsaɪəntɪst",
            "definitions": [
                    {
                            "text": "A person who analyzes data to find patterns and insights.",
                            "examples": [
                                    "The data scientist is using machine learning.",
                                    "Data scientists help companies make better decisions."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_advanced_register_c1_noun_data_scientist"
    },
    {
            "word": "virtual reality",
            "level": "advanced",
            "theme": "technology",
            "emoji": "🥽",
            "form": "noun",
            "classification": "regular",
            "plural": "virtual realities",
            "transcription": "ˌvɜːtʃuəl riˈæləti",
            "definitions": [
                    {
                            "text": "The computer-generated simulation of a three-dimensional image or environment.",
                            "examples": [
                                    "Virtual reality is being used in medical training.",
                                    "He wore a headset to experience virtual reality."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_science_tech_society_c1_noun_virtual_reality"
    },
    {
            "word": "quantum mechanics",
            "level": "advanced",
            "theme": "technology",
            "emoji": "⚛️",
            "form": "noun",
            "classification": "regular",
            "transcription": "🇬🇧 ˈkwɒntəm mɪˈkænɪks | 🇺🇸 ˈkwɑːntəm mɪˈkænɪks",
            "definitions": [
                    {
                            "text": "The branch of mechanics that deals with the mathematical description of the motion and interaction of subatomic particles.",
                            "examples": [
                                    "Quantum mechanics challenges our classical intuition.",
                                    "He is studying advanced quantum mechanics."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_science_tech_society_c1_noun_quantum_mechanics"
    },
    {
            "word": "hegemony",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "👑",
            "subtext": "cultural hegemony / challenge hegemony / establish hegemony",
            "form": "noun",
            "classification": "regular",
            "transcription": "hɪˈdʒeməni",
            "definitions": [
                    {
                            "text": "The dominance of one group over others, often through cultural or political means.",
                            "examples": [
                                    "Western cultural hegemony influences media consumption globally."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_hegemony"
    },
    {
            "word": "ideology",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "🧠",
            "subtext": "prevailing ideology / political ideology / dominant ideology",
            "form": "noun",
            "classification": "regular",
            "plural": "ideologies",
            "transcription": "🇬🇧 ˌaɪdiˈɒlədʒi | 🇺🇸 ˌaɪdiˈɑːlədʒi",
            "definitions": [
                    {
                            "text": "A system of ideas and ideals, especially one which forms the basis of economic or political theory.",
                            "examples": [
                                    "The prevailing ideology emphasizes individual responsibility over collective welfare."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_ideology"
    },
    {
            "word": "intersectionality",
            "level": "advanced",
            "theme": "sociology_structures_c1",
            "emoji": "🕸️",
            "subtext": "intersectional lens / adopt intersectionality / intersectional approach",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˌɪntəsekʃəˈnæləti",
            "definitions": [
                    {
                            "text": "The interconnected nature of social categorizations such as race, class, and gender.",
                            "examples": [
                                    "Intersectionality is crucial for understanding how different forms of discrimination overlap."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_sociology_structures_c1_noun_intersectionality"
    },
    {
            "word": "meritocracy",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "🏆",
            "subtext": "belief in meritocracy / myth of meritocracy / move toward meritocracy",
            "form": "noun",
            "classification": "regular",
            "plural": "meritocracies",
            "transcription": "🇬🇧 ˌmerɪˈtɒkrəsi | 🇺🇸 ˌmerɪˈtɑːkrəsi",
            "definitions": [
                    {
                            "text": "A system where power and privilege are based on individual ability and effort.",
                            "examples": [
                                    "The idea of meritocracy is often used to justify existing social inequalities."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_meritocracy"
    },
    {
            "word": "neoliberalism",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "💹",
            "subtext": "rise of neoliberalism / neoliberal policies / neoliberal agenda",
            "form": "noun",
            "classification": "regular",
            "transcription": "🇬🇧 ˌniːəʊˈlɪbərəˌlɪzəm | 🇺🇸 ˌniːoʊˈlɪbərəˌlɪzəm",
            "definitions": [
                    {
                            "text": "A political approach that favors free-market capitalism, deregulation, and reduction in government spending.",
                            "examples": [
                                    "Neoliberalism has led to the privatization of many public services."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_neoliberalism"
    },
    {
            "word": "paradigm shift",
            "level": "advanced",
            "theme": "technology",
            "emoji": "🔄",
            "subtext": "undergo a paradigm shift / cause a paradigm shift / major paradigm shift",
            "form": "noun",
            "classification": "regular",
            "plural": "paradigm shifts",
            "transcription": "ˈpærədaɪm ʃɪft",
            "definitions": [
                    {
                            "text": "A fundamental change in approach or underlying assumptions.",
                            "examples": [
                                    "The discovery of penicillin caused a paradigm shift in medical science."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_science_tech_society_c1_noun_paradigm_shift"
    },
    {
            "word": "discourse",
            "level": "advanced",
            "theme": "discourse_argument_c1",
            "emoji": "🗣️",
            "subtext": "academic discourse / public discourse / dominant discourse",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˈdɪskɔːs",
            "definitions": [
                    {
                            "text": "Written or spoken communication or debate, often within a particular field.",
                            "examples": [
                                    "We need to change the public discourse surrounding mental health."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_discourse_argument_c1_noun_discourse"
    },
    {
            "word": "stratification",
            "level": "advanced",
            "theme": "sociology_structures_c1",
            "emoji": "🏙️",
            "subtext": "social stratification / vertical stratification / economic stratification",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˌstrætɪfɪˈkeɪʃn",
            "definitions": [
                    {
                            "text": "The arrangement or classification of something into different groups or layers.",
                            "examples": [
                                    "Social stratification remains a key topic in sociological research."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_sociology_structures_c1_noun_stratification"
    },
    {
            "word": "social mobility",
            "level": "advanced",
            "theme": "sociology_structures_c1",
            "emoji": "🪜",
            "subtext": "upward social mobility / lack of social mobility / facilitate social mobility",
            "form": "noun",
            "classification": "regular",
            "transcription": "🇬🇧 ˌsəʊʃl məʊˈbɪləti | 🇺🇸 ˌsoʊʃl moʊˈbɪləti",
            "definitions": [
                    {
                            "text": "The movement of individuals or groups between different social layers or statuses.",
                            "examples": [
                                    "Education is often seen as the primary engine of social mobility."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_sociology_structures_c1_noun_social_mobility"
    },
    {
            "word": "cultural capital",
            "level": "advanced",
            "theme": "sociology_structures_c1",
            "emoji": "🎭",
            "subtext": "possess cultural capital / accumulate cultural capital / lack of cultural capital",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˈkʌltʃərəl ˈkæpɪtl",
            "definitions": [
                    {
                            "text": "The social assets of a person that promote social mobility in a stratified society.",
                            "examples": [
                                    "Having cultural capital can provide significant advantages in the job market."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_sociology_structures_c1_noun_cultural_capital"
    },
    {
            "word": "agency",
            "level": "advanced",
            "theme": "sociology_structures_c1",
            "emoji": "🏃",
            "subtext": "human agency / exercise agency / sense of agency",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˈeɪdʒənsi",
            "definitions": [
                    {
                            "text": "The capacity of individuals to act independently and make free choices.",
                            "examples": [
                                    "The theory emphasizes the role of human agency in social change."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_sociology_structures_c1_noun_agency"
    },
    {
            "word": "subjectivity",
            "level": "advanced",
            "theme": "knowledge_epistemology_c1",
            "emoji": "👁️",
            "subtext": "inherent subjectivity / collective subjectivity / embrace subjectivity",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˌsʌbdʒekˈtɪvəti",
            "definitions": [
                    {
                            "text": "The quality of being based on or influenced by personal feelings, tastes, or opinions.",
                            "examples": [
                                    "The researcher acknowledged the inherent subjectivity in their qualitative analysis."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_knowledge_epistemology_c1_noun_subjectivity"
    },
    {
            "word": "objectivity",
            "level": "advanced",
            "theme": "knowledge_epistemology_c1",
            "emoji": "⚖️",
            "subtext": "maintain objectivity / lack of objectivity / objective reality",
            "form": "noun",
            "classification": "regular",
            "transcription": "🇬🇧 ˌɒbdʒekˈtɪvəti | 🇺🇸 ˌɑːbdʒekˈtɪvəti",
            "definitions": [
                    {
                            "text": "The quality of being impartial and based on facts rather than feelings or opinions.",
                            "examples": [
                                    "Scientific research strives for the highest possible level of objectivity."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_knowledge_epistemology_c1_noun_objectivity"
    },
    {
            "word": "empirical evidence",
            "level": "advanced",
            "theme": "knowledge_epistemology_c1",
            "emoji": "🧪",
            "subtext": "strong empirical evidence / lack of empirical evidence / gather empirical evidence",
            "form": "noun",
            "classification": "regular",
            "transcription": "ɪmˈpɪrɪkl ˈevɪdəns",
            "definitions": [
                    {
                            "text": "Information received by means of observation or experimentation.",
                            "examples": [
                                    "There is no empirical evidence to support the claim that the policy works."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_knowledge_epistemology_c1_noun_empirical_evidence"
    },
    {
            "word": "epistemology",
            "level": "advanced",
            "theme": "knowledge_epistemology_c1",
            "emoji": "📚",
            "subtext": "feminist epistemology / social epistemology / epistemological break",
            "form": "noun",
            "classification": "regular",
            "transcription": "🇬🇧 ɪˌpɪstəˈmɒlədʒi | 🇺🇸 ɪˌpɪstəˈmɑːlədʒi",
            "definitions": [
                    {
                            "text": "The theory of knowledge, especially with regard to its methods, validity, and scope.",
                            "examples": [
                                    "His research explores the epistemology of scientific discovery."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_knowledge_epistemology_c1_noun_epistemology"
    },
    {
            "word": "ontology",
            "level": "advanced",
            "theme": "knowledge_epistemology_c1",
            "emoji": "🌌",
            "subtext": "ontological status / social ontology / ontological security",
            "form": "noun",
            "classification": "regular",
            "transcription": "🇬🇧 ɒnˈtɒlədʒi | 🇺🇸 ɑːnˈtɑːlədʒi",
            "definitions": [
                    {
                            "text": "The branch of metaphysics dealing with the nature of being.",
                            "examples": [
                                    "The paper discusses the ontology of digital objects in the modern world."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_knowledge_epistemology_c1_noun_ontology"
    },
    {
            "word": "rhetoric",
            "level": "advanced",
            "theme": "rhetoric_persuasion_c1",
            "emoji": "🎙️",
            "subtext": "political rhetoric / empty rhetoric / use of rhetoric",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˈretərɪk",
            "definitions": [
                    {
                            "text": "The art of effective or persuasive speaking or writing.",
                            "examples": [
                                    "His political rhetoric often appeals to voters' emotions rather than facts."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_rhetoric_persuasion_c1_noun_rhetoric"
    },
    {
            "word": "dialectic",
            "level": "advanced",
            "theme": "knowledge_epistemology_c1",
            "emoji": "☯️",
            "subtext": "Hegelian dialectic / historical dialectic / internal dialectic",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˌdaɪəˈlektɪk",
            "definitions": [
                    {
                            "text": "The art of investigating or discussing the truth of opinions by resolving contradictions.",
                            "examples": [
                                    "The dialectic between tradition and progress is central to his work."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_knowledge_epistemology_c1_noun_dialectic"
    },
    {
            "word": "synthesis",
            "level": "advanced",
            "theme": "knowledge_epistemology_c1",
            "emoji": "🧪",
            "subtext": "creative synthesis / final synthesis / synthesis of ideas",
            "form": "noun",
            "classification": "regular",
            "plural": "syntheses",
            "transcription": "ˈsɪnθəsɪs",
            "definitions": [
                    {
                            "text": "The combination of components or elements to form a connected whole.",
                            "examples": [
                                    "The report is a synthesis of data from several different studies."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_knowledge_epistemology_c1_noun_synthesis"
    },
    {
            "word": "thesis",
            "level": "advanced",
            "theme": "discourse_argument_c1",
            "emoji": "📄",
            "subtext": "central thesis / support a thesis / defend a thesis",
            "form": "noun",
            "classification": "regular",
            "plural": "theses",
            "transcription": "ˈθiːsɪs",
            "definitions": [
                    {
                            "text": "A statement or theory that is put forward as a premise to be maintained or proved.",
                            "examples": [
                                    "The central thesis of the book is that technology changes how we think."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_discourse_argument_c1_noun_thesis"
    },
    {
            "word": "antithesis",
            "level": "advanced",
            "theme": "discourse_argument_c1",
            "emoji": "🚫",
            "subtext": "exact antithesis / complete antithesis / direct antithesis",
            "form": "noun",
            "classification": "regular",
            "plural": "antitheses",
            "transcription": "ænˈtɪθəsɪs",
            "definitions": [
                    {
                            "text": "A person or thing that is the direct opposite of someone or something else.",
                            "examples": [
                                    "His actions were the exact antithesis of his stated beliefs."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_discourse_argument_c1_noun_antithesis"
    },
    {
            "word": "norm",
            "level": "advanced",
            "theme": "sociology_structures_c1",
            "emoji": "📏",
            "subtext": "social norm / cultural norm / conform to norms",
            "form": "noun",
            "classification": "regular",
            "plural": "norms",
            "transcription": "nɔːm",
            "definitions": [
                    {
                            "text": "A standard or pattern, especially of social behaviour, that is typical or expected of a group.",
                            "examples": [
                                    "Wearing a tie to the office is no longer the social norm it once was."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_sociology_structures_c1_noun_norm"
    },
    {
            "word": "deviance",
            "level": "advanced",
            "theme": "sociology_structures_c1",
            "emoji": "👺",
            "subtext": "social deviance / criminal deviance / primary deviance",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˈdiːviəns",
            "definitions": [
                    {
                            "text": "Behaviour that departs from usual or accepted standards, especially in social matters.",
                            "examples": [
                                    "Sociologists study deviance to understand how social rules are formed and enforced."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_sociology_structures_c1_noun_deviance"
    },
    {
            "word": "alienation",
            "level": "advanced",
            "theme": "sociology_structures_c1",
            "emoji": "👤",
            "subtext": "sense of alienation / social alienation / alienation of labor",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˌeɪliəˈneɪʃn",
            "definitions": [
                    {
                            "text": "The state or experience of being isolated from a group or an activity to which one should belong.",
                            "examples": [
                                    "Long working hours can lead to a sense of alienation from family life."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_sociology_structures_c1_noun_alienation"
    },
    {
            "word": "commodity fetishism",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "🏷️",
            "subtext": "concept of commodity fetishism / critique of commodity fetishism",
            "form": "noun",
            "classification": "regular",
            "transcription": "🇬🇧 kəˈmɒdəti ˈfetɪʃɪzəm | 🇺🇸 kəˈmɑːdəti ˈfetɪʃɪzəm",
            "definitions": [
                    {
                            "text": "The perception of social relationships involved in production as economic relationships among money and commodities.",
                            "examples": [
                                    "Marx used the term commodity fetishism to describe how we value products over people."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_commodity_fetishism"
    },
    {
            "word": "reification",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "🧱",
            "subtext": "reification of ideas / process of reification / reification of power",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˌriːɪfɪˈkeɪʃn",
            "definitions": [
                    {
                            "text": "The process of making something abstract more concrete or real.",
                            "examples": [
                                    "The reification of complex social issues into simple statistics is problematic."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_reification"
    },
    {
            "word": "authenticity",
            "level": "advanced",
            "theme": "psychological_states_c1",
            "emoji": "💯",
            "subtext": "emotional authenticity / search for authenticity / lack of authenticity",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˌɔːθenˈtɪsəti",
            "definitions": [
                    {
                            "text": "The quality of being authentic, genuine, or true to oneself.",
                            "examples": [
                                    "Consumers are increasingly looking for authenticity in the brands they support."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_psychological_states_c1_noun_authenticity"
    },
    {
            "word": "liminality",
            "level": "advanced",
            "theme": "psychological_states_c1",
            "emoji": "🚪",
            "subtext": "sense of liminality / liminal space / experience liminality",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˌlɪmɪˈnæləti",
            "definitions": [
                    {
                            "text": "The quality of ambiguity or disorientation that occurs in the middle stage of a transition.",
                            "examples": [
                                    "The period between jobs is a state of liminality and uncertainty."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_psychological_states_c1_noun_liminality"
    },
    {
            "word": "paradigm",
            "level": "advanced",
            "theme": "technology",
            "emoji": "💎",
            "subtext": "shifting paradigm / dominant paradigm / existing paradigm",
            "form": "noun",
            "classification": "regular",
            "plural": "paradigms",
            "transcription": "ˈpærədaɪm",
            "definitions": [
                    {
                            "text": "A typical example or pattern of something; a model or worldview.",
                            "examples": [
                                    "The new research challenged the existing paradigm in the field of linguistics."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_science_tech_society_c1_noun_paradigm"
    },
    {
            "word": "nuance",
            "level": "advanced",
            "theme": "language_persuasion_c1",
            "emoji": "🎨",
            "subtext": "capture the nuance / subtle nuance / lack of nuance",
            "form": "noun",
            "classification": "regular",
            "plural": "nuances",
            "transcription": "ˈnjuːɑːns",
            "definitions": [
                    {
                            "text": "A subtle difference in or shade of meaning, expression, or sound.",
                            "examples": [
                                    "The translator managed to capture every nuance of the original poem."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_language_persuasion_c1_noun_nuance"
    },
    {
            "word": "paradox",
            "level": "advanced",
            "theme": "discourse_argument_c1",
            "emoji": "🌀",
            "subtext": "central paradox / apparent paradox / solve a paradox",
            "form": "noun",
            "classification": "regular",
            "plural": "paradoxes",
            "transcription": "🇬🇧 ˈpærədɒks | 🇺🇸 ˈpærədɑːks",
            "definitions": [
                    {
                            "text": "A seemingly absurd or self-contradictory statement that may prove to be true.",
                            "examples": [
                                    "The paradox of thrift suggests that saving more can lead to lower total savings."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_discourse_argument_c1_noun_paradox"
    },
    {
            "word": "ambiguity",
            "level": "advanced",
            "theme": "language_persuasion_c1",
            "emoji": "🌫️",
            "subtext": "moral ambiguity / legal ambiguity / avoid ambiguity",
            "form": "noun",
            "classification": "regular",
            "plural": "ambiguities",
            "transcription": "ˌæmbɪˈɡjuːəti",
            "definitions": [
                    {
                            "text": "The quality of being open to more than one interpretation; inexactness.",
                            "examples": [
                                    "The ambiguity of the law's wording led to several legal challenges."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_language_persuasion_c1_noun_ambiguity"
    },
    {
            "word": "dichotomy",
            "level": "advanced",
            "theme": "discourse_argument_c1",
            "emoji": "🌓",
            "subtext": "false dichotomy / clear dichotomy / sharp dichotomy",
            "form": "noun",
            "classification": "regular",
            "plural": "dichotomies",
            "transcription": "🇬🇧 daɪˈkɒtəmi | 🇺🇸 daɪˈkɑːtəmi",
            "definitions": [
                    {
                            "text": "A division or contrast between two things that are opposed or entirely different.",
                            "examples": [
                                    "There is a false dichotomy between economic growth and environmental protection."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_discourse_argument_c1_noun_dichotomy"
    },
    {
            "word": "spectrum",
            "level": "advanced",
            "theme": "discourse_argument_c1",
            "emoji": "🌈",
            "subtext": "broad spectrum / across the spectrum / full spectrum",
            "form": "noun",
            "classification": "regular",
            "plural": "spectrums",
            "transcription": "ˈspektrəm",
            "definitions": [
                    {
                            "text": "A scale used to classify something in terms of its position between two extreme points.",
                            "examples": [
                                    "Political opinions in the country cover a wide spectrum."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_discourse_argument_c1_noun_spectrum"
    },
    {
            "word": "infrastructure",
            "level": "advanced",
            "theme": "technology",
            "emoji": "🏗️",
            "subtext": "aging infrastructure / critical infrastructure / digital infrastructure",
            "form": "noun",
            "classification": "regular",
            "plural": "infrastructures",
            "transcription": "🇬🇧 ˈɪnfrəˌstrʌktʃə | 🇺🇸 ˈɪnfrəˌstrʌktʃər",
            "definitions": [
                    {
                            "text": "The basic physical and organizational structures needed for the operation of a society.",
                            "examples": [
                                    "The government has promised to invest heavily in the country's infrastructure."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_science_tech_society_c1_noun_infrastructure"
    },
    {
            "word": "superstructure",
            "level": "advanced",
            "theme": "sociology_structures_c1",
            "emoji": "🏛️",
            "subtext": "ideological superstructure / social superstructure",
            "form": "noun",
            "classification": "regular",
            "plural": "superstructures",
            "transcription": "🇬🇧 ˈsuːpəˌstrʌktʃə | 🇺🇸 ˈsuːpəˌstrʌktʃər",
            "definitions": [
                    {
                            "text": "The institutions and culture built on an economic base in Marxist theory.",
                            "examples": [
                                    "In Marxist theory, the superstructure includes laws, politics, and culture."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_sociology_structures_c1_noun_superstructure"
    },
    {
            "word": "consensus",
            "level": "advanced",
            "theme": "language_persuasion_c1",
            "emoji": "🤝",
            "subtext": "reach a consensus / general consensus / build a consensus",
            "form": "noun",
            "classification": "regular",
            "transcription": "kənˈsensəs",
            "definitions": [
                    {
                            "text": "A general agreement among a group of people.",
                            "examples": [
                                    "There is no consensus among scientists on the cause of the phenomenon."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_language_persuasion_c1_noun_consensus"
    },
    {
            "word": "dissent",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "🙅",
            "subtext": "suppress dissent / public dissent / political dissent",
            "form": "noun",
            "classification": "regular",
            "transcription": "dɪˈsent",
            "definitions": [
                    {
                            "text": "The expression or holding of opinions at variance with those commonly held.",
                            "examples": [
                                    "The government's new policy was met with widespread dissent."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_dissent"
    },
    {
            "word": "activism",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "📣",
            "subtext": "political activism / social activism / grassroots activism",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˈæktɪvɪzəm",
            "definitions": [
                    {
                            "text": "The policy or action of using campaigning to bring about political or social change.",
                            "examples": [
                                    "Her environmental activism has inspired many young people to take action."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_activism"
    },
    {
            "word": "advocacy",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "📢",
            "subtext": "consumer advocacy / policy advocacy / advocacy group",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˈædvəkəsi",
            "definitions": [
                    {
                            "text": "Public support for or recommendation of a particular cause or policy.",
                            "examples": [
                                    "The organization is known for its advocacy of human rights."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_advocacy"
    },
    {
            "word": "bureaucracy",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "📁",
            "subtext": "government bureaucracy / cut through bureaucracy / excessive bureaucracy",
            "form": "noun",
            "classification": "regular",
            "plural": "bureaucracies",
            "transcription": "🇬🇧 bjʊəˈrɒkrəsi | 🇺🇸 bjʊəˈrɑːkrəsi",
            "definitions": [
                    {
                            "text": "A system of government where decisions are made by state officials rather than elected representatives.",
                            "examples": [
                                    "Small businesses often struggle with the amount of bureaucracy involved in hiring."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_bureaucracy"
    },
    {
            "word": "centralization",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "🎯",
            "subtext": "administrative centralization / political centralization",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˌsentrəlaɪˈzeɪʃn",
            "definitions": [
                    {
                            "text": "The concentration of control of an activity or organization under a single authority.",
                            "examples": [
                                    "The centralization of power in the capital has led to resentment in other regions."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_centralization"
    },
    {
            "word": "decentralization",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "📡",
            "subtext": "fiscal decentralization / process of decentralization",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˌdiːsentrəlaɪˈzeɪʃn",
            "definitions": [
                    {
                            "text": "The transfer of authority from central to local government or organizations.",
                            "examples": [
                                    "The decentralization of the health service aims to improve efficiency."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_decentralization"
    },
    {
            "word": "globalization",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "🌐",
            "subtext": "economic globalization / cultural globalization / impact of globalization",
            "form": "noun",
            "classification": "regular",
            "transcription": "🇬🇧 ˌɡləʊbəlaɪˈzeɪʃn | 🇺🇸 ˌɡloʊbəlaɪˈzeɪʃn",
            "definitions": [
                    {
                            "text": "The process by which organizations develop international influence or start operating globally.",
                            "examples": [
                                    "Globalization has led to increased competition and lower prices for consumers."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_globalization"
    },
    {
            "word": "isolationism",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "🏝️",
            "subtext": "political isolationism / economic isolationism",
            "form": "noun",
            "classification": "regular",
            "transcription": "ˌaɪsəˈleɪʃənɪzəm",
            "definitions": [
                    {
                            "text": "A policy of remaining apart from the affairs or interests of other groups or countries.",
                            "examples": [
                                    "The country's shift toward isolationism worried its trading partners."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_isolationism"
    },
    {
            "word": "protectionism",
            "level": "advanced",
            "theme": "power_institutions_c1",
            "emoji": "🛡️",
            "subtext": "trade protectionism / rise of protectionism / economic protectionism",
            "form": "noun",
            "classification": "regular",
            "transcription": "prəˈtekʃənɪzəm",
            "definitions": [
                    {
                            "text": "The theory or practice of shielding domestic industries from foreign competition.",
                            "examples": [
                                    "Some economists argue that protectionism can lead to higher prices."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_power_institutions_c1_noun_protectionism"
    },
    {
            "word": "sustainability",
            "level": "advanced",
            "theme": "technology",
            "emoji": "🌱",
            "subtext": "environmental sustainability / long-term sustainability",
            "form": "noun",
            "classification": "regular",
            "transcription": "səˌsteɪnəˈbɪləti",
            "definitions": [
                    {
                            "text": "The ability to be maintained at a certain rate or level; avoidance of resource depletion.",
                            "examples": [
                                    "The company is committed to improving the sustainability of its operations."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_science_tech_society_c1_noun_sustainability"
    },
    {
            "word": "biodiversity",
            "level": "advanced",
            "theme": "technology",
            "emoji": "🦋",
            "subtext": "loss of biodiversity / conserve biodiversity / promote biodiversity",
            "form": "noun",
            "classification": "regular",
            "transcription": "🇬🇧 ˌbaɪəʊdaɪˈvɜːsəti | 🇺🇸 ˌbaɪoʊdaɪˈvɜːsəti",
            "definitions": [
                    {
                            "text": "The variety of plant and animal life in the world or in a particular habitat.",
                            "examples": [
                                    "The destruction of the rainforest is a major threat to global biodiversity."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_science_tech_society_c1_noun_biodiversity"
    },
    {
            "word": "ecological footprint",
            "level": "advanced",
            "theme": "technology",
            "emoji": "👣",
            "subtext": "large ecological footprint / measure ecological footprint",
            "form": "noun",
            "classification": "regular",
            "plural": "ecological footprints",
            "transcription": "🇬🇧 ˌiːkəˈlɒdʒɪkl ˈfʊtprɪnt | 🇺🇸 ˌiːkəˈlɑːdʒɪkl ˈfʊtprɪnt",
            "definitions": [
                    {
                            "text": "The impact of a person or community on the environment, expressed as land required.",
                            "examples": [
                                    "Reducing meat consumption is a way to lower your ecological footprint."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_science_tech_society_c1_noun_ecological_footprint"
    },
    {
            "word": "renewable energy",
            "level": "advanced",
            "theme": "technology",
            "emoji": "☀️",
            "subtext": "transition to renewable energy / sources of renewable energy",
            "form": "noun",
            "classification": "regular",
            "transcription": "rɪˈnjuːəbl ˈenədʒi",
            "definitions": [
                    {
                            "text": "Energy from a source that is not depleted when used, such as wind or solar power.",
                            "examples": [
                                    "The government is investing in renewable energy to reduce dependence on fossil fuels."
                            ]
                    }
            ],
            "lang": "en",
            "id": "en_advanced_science_tech_society_c1_noun_renewable_energy"
    },
    {
            "id": "en_advanced_psychology_001",
            "word": "autonomy",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the right or condition of self-government or personal freedom.",
                            "examples": [
                                    "Personal autonomy allows individuals to make crucial decisions about their own medical treatment."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_002",
            "word": "incurable",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "not able to be cured or healed.",
                            "examples": [
                                    "The patient was diagnosed with an incurable and progressive illness."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_003",
            "word": "euthanasia",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the painless killing of a patient suffering from an incurable and painful disease.",
                            "examples": [
                                    "The medical committee debated whether euthanasia should be legally permitted under strict regulations."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_004",
            "word": "compassion",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "sympathetic pity and concern for the sufferings or misfortunes of others.",
                            "examples": [
                                    "Providing comforting palliative care is an act of deep human compassion."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_005",
            "word": "legislation",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "laws, considered collectively, or the process of making laws.",
                            "examples": [
                                    "The French government worked on the new legislation for several months."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_006",
            "word": "safeguard",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a measure taken to protect someone or something or to prevent something undesirable.",
                            "examples": [
                                    "The bill contains strict medical safeguards to prevent any abuse of the system."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_007",
            "word": "palliative",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "relieving pain or alleviating a problem without dealing with the underlying cause.",
                            "examples": [
                                    "Palliative medicine focuses on optimizing the quality of life for terminally ill patients."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_008",
            "word": "dignity",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state or quality of being worthy of honor or respect.",
                            "examples": [
                                    "Every human being has the right to live and die with dignity."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_001",
            "word": "originality",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the ability to think independently and creatively.",
                            "examples": [
                                    "The designer's work is known for its originality."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_002",
            "word": "aesthetic",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "concerned with beauty or the appreciation of beauty.",
                            "examples": [
                                    "The painting has a very modern aesthetic."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_003",
            "word": "canvas",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a strong, coarse unbleached cloth used as a surface for painting.",
                            "examples": [
                                    "The artist prepared the canvas before starting to paint."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_004",
            "word": "masterpiece",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a work of outstanding artistry, skill, or workmanship.",
                            "examples": [
                                    "Many consider the Mona Lisa to be Da Vinci's masterpiece."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_005",
            "word": "inspiration",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the process of being mentally stimulated to do or feel something creative.",
                            "examples": [
                                    "Travel is a great source of inspiration for many artists."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_006",
            "word": "generative",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "having the power or function of generating, producing, or reproducing.",
                            "examples": [
                                    "Generative AI can create completely new images from text."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_007",
            "word": "subjective",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "based on or influenced by personal feelings, tastes, or opinions.",
                            "examples": [
                                    "Art is highly subjective; what one person loves, another may hate."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_008",
            "word": "craftsmanship",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "skill in a particular craft.",
                            "examples": [
                                    "You can see the incredible craftsmanship in this handmade furniture."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_009",
            "word": "copyright",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the exclusive legal right to reproduce, publish, sell, or distribute a work.",
                            "examples": [
                                    "There are many legal battles over AI and copyright."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_010",
            "word": "provocative",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "causing annoyance, anger, or another strong reaction, especially deliberately.",
                            "examples": [
                                    "The artist is known for his provocative and controversial works."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_001",
            "word": "hierarchy",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a system in which members of an organization are ranked according to status.",
                            "examples": [
                                    "The film highlights the intense corporate hierarchy of high fashion."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_002",
            "word": "ambitions",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "strong desires to achieve success, power, or distinction.",
                            "examples": [
                                    "The main characters balance their career ambitions with personal life."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_003",
            "word": "grief",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "intense sorrow, especially caused by someone's death.",
                            "examples": [
                                    "The narrative explores how the family copes with sudden, overwhelming grief."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_004",
            "word": "trauma",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a deeply distressing or disturbing experience.",
                            "examples": [
                                    "The protagonist struggles to overcome lingering childhood trauma."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_005",
            "word": "romance",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a feeling of excitement and mystery associated with love.",
                            "examples": [
                                    "Their romance is tested by societal expectations and historical events."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_006",
            "word": "replicate",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'The Substance'.",
                            "examples": [
                                    "The phrase 'Replicate' is delivered with incredible emotional weight in a pivotal scene of 'The Substance'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_007",
            "word": "side effect",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'The Substance'.",
                            "examples": [
                                    "The phrase 'side effect' is delivered with incredible emotional weight in a pivotal scene of 'The Substance'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_008",
            "word": "beauty",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'The Substance'.",
                            "examples": [
                                    "The phrase 'beauty' is delivered with incredible emotional weight in a pivotal scene of 'The Substance'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_009",
            "word": "flat broke",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "having absolutely no money.",
                            "examples": [
                                    "He was flat broke but refused to lose his elegant Manhattan style."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_010",
            "word": "fame",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state of being known or talked about by many people.",
                            "examples": [
                                    "The reality TV stars discover the fleeting nature of sudden media fame."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_011",
            "word": "deception",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the action of deceiving someone.",
                            "examples": [
                                    "The plot is a masterclass in elegant deception and shifting alliances."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_012",
            "word": "suspense",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a state of excited or anxious uncertainty about what may happen.",
                            "examples": [
                                    "The director relies on visual suspense rather than cheap jumpscares."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_013",
            "word": "clique",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a small, exclusive group of people.",
                            "examples": [
                                    "The narrative dissects the brutal dynamics of elite high school cliques."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_014",
            "word": "propaganda",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "information, especially of a biased or misleading nature, used to promote a cause.",
                            "examples": [
                                    "The citizens are fed corporate propaganda to hide the simulation."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_015",
            "word": "cabinet",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'The Regime'.",
                            "examples": [
                                    "The phrase 'cabinet' is delivered with incredible emotional weight in a pivotal scene of 'The Regime'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_016",
            "word": "vassal",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'The Regime'.",
                            "examples": [
                                    "The phrase 'vassal' is delivered with incredible emotional weight in a pivotal scene of 'The Regime'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_017",
            "word": "regime",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'The Regime'.",
                            "examples": [
                                    "The phrase 'regime' is delivered with incredible emotional weight in a pivotal scene of 'The Regime'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_018",
            "word": "ragoût",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a slow-cooked French stew of meat and vegetables.",
                            "examples": [
                                    "He prepared a traditional ragoût to impress the demanding food critic."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_019",
            "word": "surveillance",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "close observation, especially of a suspected person or group.",
                            "examples": [
                                    "The characters live under constant, high-tech state surveillance."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_020",
            "word": "survival",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state or fact of continuing to live or exist, especially in spite of difficult conditions.",
                            "examples": [
                                    "Survival in this dystopian future requires absolute secrecy and courage."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_021",
            "word": "solidarity",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "unity or agreement of feeling or action, especially among individuals.",
                            "examples": [
                                    "The resistance movement is built on quiet acts of human solidarity."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_022",
            "word": "superstition",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "excessively credulous belief in and reverence for supernatural forces.",
                            "examples": [
                                    "The old village is bound by dark superstition and fear of the woods."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_023",
            "word": "ghosting",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the practice of ending all communication with someone suddenly.",
                            "examples": [
                                    "Her sudden move to California was the ultimate form of romantic ghosting."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_024",
            "word": "stan",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "an overzealous, obsessive fan of a celebrity or person.",
                            "examples": [
                                    "She behaves like a complete stan when it comes to her former boyfriend."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_025",
            "word": "get a pass",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "be excused from a rule, obligation, or expectation.",
                            "examples": [
                                    "Because of her charming personality, she often gets a pass for bad behavior."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_026",
            "word": "deal-breaker",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a factor or issue that resolves in a boundary or rejection.",
                            "examples": [
                                    "Lying about your career plans is an absolute relationship deal-breaker."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_027",
            "word": "secrets",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "something that is kept or meant to be kept unknown or unseen.",
                            "examples": [
                                    "The historic mansion is filled with deadly secrets and symbols."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_028",
            "word": "optimism",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "hopefulness and confidence about the future or the success of something.",
                            "examples": [
                                    "Despite her setbacks, she maintains a bright and contagious optimism."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_029",
            "word": "parliament",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'The Iron Lady'.",
                            "examples": [
                                    "The phrase 'parliament' is delivered with incredible emotional weight in a pivotal scene of 'The Iron Lady'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_030",
            "word": "prime minister",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'The Iron Lady'.",
                            "examples": [
                                    "The phrase 'prime minister' is delivered with incredible emotional weight in a pivotal scene of 'The Iron Lady'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_031",
            "word": "strike",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'The Iron Lady'.",
                            "examples": [
                                    "The phrase 'strike' is delivered with incredible emotional weight in a pivotal scene of 'The Iron Lady'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_032",
            "word": "clackers",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang for high-heeled shoes or the women who wear them.",
                            "examples": [
                                    "The office was filled with the sound of clackers rushing through halls."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_033",
            "word": "clones",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "genetically identical copies of a living organism.",
                            "examples": [
                                    "The sci-fi epic explores the ethical and personal dilemmas of human clones."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_034",
            "word": "orison",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Cloud Atlas'.",
                            "examples": [
                                    "The phrase 'Orison' is delivered with incredible emotional weight in a pivotal scene of 'Cloud Atlas'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_035",
            "word": "fabricant",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Cloud Atlas'.",
                            "examples": [
                                    "The phrase 'fabricant' is delivered with incredible emotional weight in a pivotal scene of 'Cloud Atlas'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_036",
            "word": "reincarnation",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Cloud Atlas'.",
                            "examples": [
                                    "The phrase 'reincarnation' is delivered with incredible emotional weight in a pivotal scene of 'Cloud Atlas'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_037",
            "word": "clone",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Cloud Atlas'.",
                            "examples": [
                                    "The phrase 'clone' is delivered with incredible emotional weight in a pivotal scene of 'Cloud Atlas'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_038",
            "word": "poubelle",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "French for trash can or garbage.",
                            "examples": [
                                    "The young cook was nearly thrown out into the back alley poubelle."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_039",
            "word": "immortality",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the ability to live forever; eternal life.",
                            "examples": [
                                    "She learns that accidental immortality can lead to deep loneliness."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_040",
            "word": "infidelity",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the action of being unfaithful to a spouse or partner.",
                            "examples": [
                                    "The plot unravels through discoveries of mutual marital infidelity."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_041",
            "word": "séance",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Hereditary'.",
                            "examples": [
                                    "The phrase 'Séance' is delivered with incredible emotional weight in a pivotal scene of 'Hereditary'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_042",
            "word": "possession",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Hereditary'.",
                            "examples": [
                                    "The phrase 'possession' is delivered with incredible emotional weight in a pivotal scene of 'Hereditary'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_043",
            "word": "cult",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Hereditary'.",
                            "examples": [
                                    "The phrase 'cult' is delivered with incredible emotional weight in a pivotal scene of 'Hereditary'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_044",
            "word": "mythology",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a collection of myths, especially those belonging to a particular culture.",
                            "examples": [
                                    "The series slowly builds a complex, supernatural mythology."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_045",
            "word": "what's your damage?",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Heathers: The Musical'.",
                            "examples": [
                                    "The phrase 'What's your damage?' is delivered with incredible emotional weight in a pivotal scene of 'Heathers: The Musical'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_046",
            "word": "mythic bitch",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Heathers: The Musical'.",
                            "examples": [
                                    "The phrase 'mythic bitch' is delivered with incredible emotional weight in a pivotal scene of 'Heathers: The Musical'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_047",
            "word": "suicide pact",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Heathers: The Musical'.",
                            "examples": [
                                    "The phrase 'suicide pact' is delivered with incredible emotional weight in a pivotal scene of 'Heathers: The Musical'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_048",
            "word": "прорубь",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Russian for an ice hole.",
                            "examples": [
                                    "He fell through the thin ice straight into a freezing Siberian прорубь."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_049",
            "word": "coven",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Suspiria (2018)'.",
                            "examples": [
                                    "The phrase 'Coven' is delivered with incredible emotional weight in a pivotal scene of 'Suspiria (2018)'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_050",
            "word": "matriarch",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Suspiria (2018)'.",
                            "examples": [
                                    "The phrase 'matriarch' is delivered with incredible emotional weight in a pivotal scene of 'Suspiria (2018)'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_051",
            "word": "spellbound",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Suspiria (2018)'.",
                            "examples": [
                                    "The phrase 'spellbound' is delivered with incredible emotional weight in a pivotal scene of 'Suspiria (2018)'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_052",
            "word": "tribute",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Suspiria (2018)'.",
                            "examples": [
                                    "The phrase 'tribute' is delivered with incredible emotional weight in a pivotal scene of 'Suspiria (2018)'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_053",
            "word": "vigilante",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a member of a self-appointed group of citizens who undertake law enforcement.",
                            "examples": [
                                    "The masked vigilante fights against authoritarian political rule."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_054",
            "word": "obsession",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state of being obsessed with someone or something.",
                            "examples": [
                                    "The film warns against the dangers of creative and mental obsession."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_055",
            "word": "independence",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the fact or state of being independent and self-reliant.",
                            "examples": [
                                    "Her journey centers on her struggle for personal and financial independence."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_056",
            "word": "vulnerability",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the quality of being exposed to emotional or physical harm.",
                            "examples": [
                                    "Admitting fear is portrayed as a source of strength and emotional vulnerability."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_057",
            "word": "devotion",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "love, loyalty, or enthusiasm for a person, activity, or cause.",
                            "examples": [
                                    "His lifelong devotion is documented in beautiful, bittersweet letters."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_058",
            "word": "opt-in",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Black Mirror'.",
                            "examples": [
                                    "The phrase 'Opt-in' is delivered with incredible emotional weight in a pivotal scene of 'Black Mirror'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_059",
            "word": "rating",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Black Mirror'.",
                            "examples": [
                                    "The phrase 'rating' is delivered with incredible emotional weight in a pivotal scene of 'Black Mirror'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_060",
            "word": "system failure",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Black Mirror'.",
                            "examples": [
                                    "The phrase 'system failure' is delivered with incredible emotional weight in a pivotal scene of 'Black Mirror'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_061",
            "word": "addicted",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "slang term or famous dialogue referenced in the screenplay of 'Black Mirror'.",
                            "examples": [
                                    "The phrase 'addicted' is delivered with incredible emotional weight in a pivotal scene of 'Black Mirror'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_062",
            "word": "prejudice",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "preconceived opinion that is not based on reason or actual experience.",
                            "examples": [
                                    "The film addresses deep-rooted social prejudice in mid-century society."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_063",
            "word": "shambles",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a state of total disorder, chaos, or ruin.",
                            "examples": [
                                    "Her personal life was a complete shambles before she took control."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_064",
            "word": "dry run",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a rehearsal of a performance or procedure.",
                            "examples": [
                                    "They did a dry run of the presentation to make sure nothing went wrong."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_065",
            "word": "fancy",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "feel a romantic or sexual attraction to someone.",
                            "examples": [
                                    "He started to fancy his coworker after working late on the campaign."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_066",
            "word": "shag",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "British slang for sexual intercourse.",
                            "examples": [
                                    "The characters discuss their romantic misadventures with typical dry humor."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_067",
            "word": "breaking the fourth wall",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "speaking directly to the audience, bypassing the narrative.",
                            "examples": [
                                    "Her signature fourth-wall breaks create an intimate connection with viewers."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_068",
            "word": "unconditional",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "not subject to any conditions.",
                            "examples": [
                                    "Parents are often expected to provide unconditional love to their children regardless of their life choices."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_069",
            "word": "acceptance",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the action of consenting to receive or undertake something offered.",
                            "examples": [
                                    "Finding true acceptance within one's family is a vital part of the coming-out process."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_070",
            "word": "coming-out",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the process of revealing one's sexual orientation or gender identity to others.",
                            "examples": [
                                    "His coming-out story was met with a mix of surprise and support from his close friends."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_071",
            "word": "empathy",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the ability to understand and share the feelings of another.",
                            "examples": [
                                    "Practicing empathy allows parents to see the world through their child's eyes."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_072",
            "word": "validation",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "recognition or affirmation that a person or their feelings or opinions are valid or worthwhile.",
                            "examples": [
                                    "Seeking validation from one's parents is a natural human desire, especially during difficult times."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_073",
            "word": "reconciliation",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the restoration of friendly relations.",
                            "examples": [
                                    "The path to reconciliation between the father and son took many years of patient effort."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_074",
            "word": "sonder",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the profound feeling of realizing that everyone has a complex life.",
                            "examples": [
                                    "Walking through the crowded station, he was struck by a sudden sense of sonder."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_075",
            "word": "passerby",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a person who happens to be going past something or someone.",
                            "examples": [
                                    "The street musician played his violin as every passerby ignored him."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_076",
            "word": "vivid",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "producing powerful feelings or strong, clear images in the mind.",
                            "examples": [
                                    "He had a vivid memory of his first day at school."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_077",
            "word": "intricate",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "very complicated or detailed.",
                            "examples": [
                                    "The novel's plot was so intricate that I had to read it twice."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_078",
            "word": "anonymity",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the condition of being anonymous or unknown.",
                            "examples": [
                                    "The artist preferred anonymity and never showed his face in public."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_079",
            "word": "ephemeral",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "lasting for a very short time.",
                            "examples": [
                                    "Our interaction was ephemeral, but it left a lasting impression on me."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_080",
            "word": "internalize",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "make (attitudes or behavior) part of one's nature by learning or unconscious assimilation.",
                            "examples": [
                                    "It takes time to internalize the values of a new culture."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_081",
            "word": "multifaceted",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "having many sides or aspects.",
                            "examples": [
                                    "The problem is multifaceted and cannot be solved with a simple answer."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_082",
            "word": "subconscious",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "concerning the part of the mind of which one is not fully aware.",
                            "examples": [
                                    "Our subconscious fears often influence our daily decisions."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_083",
            "word": "tragedy",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "an event causing great suffering, destruction, and distress.",
                            "examples": [
                                    "The real tragedy of the situation was the lack of communication between the two sisters."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_084",
            "word": "maternal ≠ paternal",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "relating to a mother ≠ relating to a father.",
                            "examples": [
                                    "She showed a deeply protective maternal instinct, which beautifully complemented his strong paternal guidance."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_085",
            "word": "lineage",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "lineal descent from an ancestor; ancestry or pedigree.",
                            "examples": [
                                    "He was proud of his royal lineage and often spoke of his famous ancestors."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_086",
            "word": "archetype",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a very typical example of a certain person or thing.",
                            "examples": [
                                    "The 'sacrificing mother' is a powerful archetype found in literature across all cultures."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_087",
            "word": "stereotype",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a widely held but oversimplified image or idea of a particular type of person.",
                            "examples": [
                                    "We must work to break the stereotype that women are less suited for technical roles."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_088",
            "word": "generational",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "relating to or characteristic of a particular generation or generations.",
                            "examples": [
                                    "There is often a generational gap in how people view the role of women in the home."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_089",
            "word": "transformation",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a thorough or dramatic change in form or appearance.",
                            "examples": [
                                    "The caterpillar's transformation into a butterfly is a classic symbol of rebirth."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_090",
            "word": "metaphorical",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "characteristic of or relating to metaphor; figurative.",
                            "examples": [
                                    "When he spoke of \"dying first,\" he was using a metaphorical expression for personal growth."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_091",
            "word": "catalyst",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a person or thing that precipitates an event.",
                            "examples": [
                                    "The loss of his job served as a catalyst for him to finally start his own business."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_092",
            "word": "renunciation",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the formal rejection of something, typically a belief, claim, or course of action.",
                            "examples": [
                                    "Her renunciation of her old lifestyle allowed her to find peace in a simpler way of living."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_093",
            "word": "limitation",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a restriction or a point beyond which something does not or may not extend.",
                            "examples": [
                                    "Recognizing your own limitation is the first step toward overcoming it."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_094",
            "word": "resilience ≠ fragility",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the capacity to recover quickly from difficulties ≠ the quality of being easily broken or damaged.",
                            "examples": [
                                    "True resilience is forged by understanding and accepting our own emotional fragility."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_095",
            "word": "vulnerability ≠ invulnerability",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "state of being exposed to the possibility of being attacked or harmed ≠ the state of being impossible to harm or defeat.",
                            "examples": [
                                    "Embracing vulnerability is a far more courageous path than pretending to possess absolute invulnerability."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_096",
            "word": "humility",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "modest view of one's importance.",
                            "examples": [
                                    "He accepted the award with great humility."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_097",
            "word": "wisdom",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the quality of having experience, knowledge, and good judgment.",
                            "examples": [
                                    "Socrates is famous for his philosophical wisdom."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_098",
            "word": "ignorance",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "lack of knowledge or information.",
                            "examples": [
                                    "Ignorance of the law is no excuse."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_099",
            "word": "ethics",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "moral principles that govern behavior.",
                            "examples": [
                                    "He is studying the ethics of artificial intelligence."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_100",
            "word": "dialogue",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "conversation between two or more people.",
                            "examples": [
                                    "Plato's dialogues feature Socrates as the main speaker."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_101",
            "word": "virtue",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "behavior showing high moral standards.",
                            "examples": [
                                    "Patience is a virtue."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_102",
            "word": "logic",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "reasoning conducted according to strict principles of validity.",
                            "examples": [
                                    "Use logic to support your argument."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_103",
            "word": "idealized",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "regarded or represented as perfect or better than in reality.",
                            "examples": [
                                    "Social media often presents an idealized version of people's lives that is far from the truth."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_104",
            "word": "hypothetical",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "based on or serving as a hypothesis; supposed but not necessarily real or true.",
                            "examples": [
                                    "In the meeting, they discussed several hypothetical scenarios for the company's expansion."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_105",
            "word": "la nostalgia ≠ la modernidad",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "sentimiento de pena por la lejanía o el tiempo pasado ≠ cualidad de lo moderno o actual.",
                            "examples": [
                                    "Sintió una profunda nostalgia por el pueblo antiguo, un contraste total con la fría modernidad."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_106",
            "word": "melancholy",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a feeling of pensive sadness, typically with no obvious cause.",
                            "examples": [
                                    "The slow piano music filled the room with a sense of gentle melancholy."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_107",
            "word": "fulfillment",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "satisfaction or happiness as a result of fully developing one's abilities or character.",
                            "examples": [
                                    "Many people seek personal fulfillment through their work rather than just a high salary."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_108",
            "word": "disillusionment",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a feeling of disappointment resulting from the discovery that something is not as good as one believed it to be.",
                            "examples": [
                                    "The young politician faced a wave of disillusionment after seeing how the system actually worked."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_109",
            "word": "anticipation",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the action of anticipating something; expectation or prediction.",
                            "examples": [
                                    "There was a great deal of anticipation among the fans before the concert started."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_110",
            "word": "longing",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a strong wish for something or someone.",
                            "examples": [
                                    "He felt a deep longing to return to his childhood home."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_111",
            "word": "untranslatable",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "not able to be expressed in another language.",
                            "examples": [
                                    "Many Portuguese speakers believe that 'saudade' is completely untranslatable."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_112",
            "word": "wistful",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "having or showing a feeling of vague or regretful longing.",
                            "examples": [
                                    "She gave a wistful smile as she remembered her days at university."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_113",
            "word": "evocative",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "bringing strong images, memories, or feelings to mind.",
                            "examples": [
                                    "The smell of lavender was highly evocative of her grandmother's garden."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_114",
            "word": "bittersweet",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "arousing pleasure tinged with sadness or pain.",
                            "examples": [
                                    "It was a bittersweet moment when they said goodbye at the airport."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_115",
            "word": "poignant",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "evoking a keen sense of sadness or regret.",
                            "examples": [
                                    "The film's ending was incredibly poignant and left the audience in tears."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_116",
            "word": "resonance",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the quality in a sound or image of being deep, full, and reverberating.",
                            "examples": [
                                    "His words had a deep emotional resonance with everyone in the room."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_117",
            "word": "blindness",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state of being unable to see or perceive something.",
                            "examples": [
                                    "Cognitive blindness often prevents us from noticing errors in our own logical reasoning."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_118",
            "word": "bias",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "prejudice in favor of or against one thing, person, or group compared with another.",
                            "examples": [
                                    "The selection committee was accused of having a clear bias toward candidates from Ivy League schools."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_119",
            "word": "insular",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "ignorant of or uninterested in cultures, ideas, or peoples outside one's own experience.",
                            "examples": [
                                    "Living in an insular community can make it difficult to adapt to a multicultural workplace."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_120",
            "word": "fallacy",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a mistaken belief, especially one based on unsound argument.",
                            "examples": [
                                    "The idea that \"more expensive is always better\" is a common consumer fallacy."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_121",
            "word": "echo chamber",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "an environment in which a person encounters only beliefs or opinions that coincide with their own.",
                            "examples": [
                                    "It is important to read news from different sources to avoid being trapped in an echo chamber."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_122",
            "word": "intellectual",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "relating to the intellect; involving great mental capacity.",
                            "examples": [
                                    "Engaging in intellectual debates can help you sharpen your own critical thinking skills."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_123",
            "word": "dogma",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a principle or set of principles laid down by an authority as incontrovertibly true.",
                            "examples": [
                                    "Scientific progress often requires challenging the established dogma of the previous generation."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_124",
            "word": "essence",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the intrinsic nature or indispensable quality of something.",
                            "examples": [
                                    "Many believe that kindness is the true essence of humanity."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_125",
            "word": "consciousness",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state of being awake and aware of one's surroundings.",
                            "examples": [
                                    "The mystery of human consciousness continues to baffle even the most brilliant scientists."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_126",
            "word": "materialism",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a tendency to consider material possessions and physical comfort as more important than spiritual values.",
                            "examples": [
                                    "Extreme materialism often leads to a sense of emptiness, despite having many possessions."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_127",
            "word": "transcendent",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "beyond or above the range of normal or merely physical human experience.",
                            "examples": [
                                    "Listening to great music can be a transcendent experience that takes you out of your daily worries."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_128",
            "word": "spirituality",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the quality of being concerned with the human spirit or soul as opposed to material things.",
                            "examples": [
                                    "Personal spirituality can provide a source of strength during difficult life challenges."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_129",
            "word": "incarnation",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a person who embodies in the flesh a deity, spirit, or abstract quality.",
                            "examples": [
                                    "In many traditions, the body is seen as a temporary incarnation of the eternal soul."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_130",
            "word": "perception",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the ability to see, hear, or become aware of something through the senses.",
                            "examples": [
                                    "Our perception of reality is often limited by our past experiences and biases."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_131",
            "word": "existential",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "relating to existence.",
                            "examples": [
                                    "Facing a crisis often triggers an existential search for meaning and purpose."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_art_culture_132",
            "word": "intangible",
            "lang": "en",
            "level": "advanced",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "unable to be touched or grasped; not having physical presence.",
                            "examples": [
                                    "The most important things in life, like love and peace, are completely intangible."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_011",
            "word": "post-reproductive",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "relating to the period in a female's life after the capability to reproduce has ceased.",
                            "examples": [
                                    "A long post-reproductive lifespan is an extremely rare biological trait among mammals."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_012",
            "word": "longevity",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "long life or great duration of individual life.",
                            "examples": [
                                    "Our species' high cognitive longevity is linked to the historical support of elder generations."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_013",
            "word": "hypothesis",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a proposed explanation made on the basis of limited evidence for further investigation.",
                            "examples": [
                                    "The Grandmother Hypothesis suggests that grandmothering allowed human brains to grow larger."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_014",
            "word": "cooperative",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "involving mutual assistance in working toward a common goal.",
                            "examples": [
                                    "Human child-rearing is fundamentally cooperative, requiring support beyond the biological mother."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_015",
            "word": "offspring",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a person's child or children, or an animal's young.",
                            "examples": [
                                    "Grandmothers help gather extra nutrients to ensure the survival of their offspring's children."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_016",
            "word": "menopause",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the ceasing of menstruation, typically between 45 and 50 years of age.",
                            "examples": [
                                    "Humans are one of only five mammal species that experience menopause."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_017",
            "word": "evolutionary",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "relating to the gradual development of organisms over generations.",
                            "examples": [
                                    "The role of grandparents is a major evolutionary advantage of Homo sapiens."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_018",
            "word": "wean",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "to accustom an infant to food other than its mother's milk.",
                            "examples": [
                                    "Grandmothers help wean babies earlier, allowing mothers to reproduce sooner."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_019",
            "word": "foraging",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "searching for wild food or provisions in nature.",
                            "examples": [
                                    "In hunter-gatherer societies, grandmothers do most of the foraging for root vegetables."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_020",
            "word": "sociobiology",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the scientific study of biological aspects of social behavior in organisms.",
                            "examples": [
                                    "Sociobiology teaches us that family bonds are deeply rooted in genetic survival."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_021",
            "word": "inheritance",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the process by which genetic information is passed from parent to offspring.",
                            "examples": [
                                    "Mendel studied the inheritance of traits in pea plants."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_022",
            "word": "trait",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a distinguishing quality or characteristic, typically one belonging to a person.",
                            "examples": [
                                    "Eye color is a common physical trait passed down through genes."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_023",
            "word": "allele",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "one of two or more alternative forms of a gene that arise by mutation.",
                            "examples": [
                                    "Each parent contributes one allele for every gene to their child."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_024",
            "word": "mutation",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the changing of the structure of a gene, resulting in a variant form.",
                            "examples": [
                                    "Some mutations can lead to the development of new, beneficial traits."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_025",
            "word": "recessive",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "an allele that only expresses its phenotype when two copies are present.",
                            "examples": [
                                    "Blue eyes are a recessive trait, meaning both parents must carry the gene."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_026",
            "word": "genome",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the complete set of genes or genetic material present in a cell or organism.",
                            "examples": [
                                    "The human genome project took over a decade to complete."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_027",
            "word": "epigenetics",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the study of changes in organisms caused by modification of gene expression.",
                            "examples": [
                                    "Epigenetics shows how environment can affect which genes are active."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_028",
            "word": "probability",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the extent to which an event is likely to occur.",
                            "examples": [
                                    "Mendel used probability to predict the traits of future plant generations."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_029",
            "word": "anomaly",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "something that deviates from what is standard, normal, or expected.",
                            "examples": [
                                    "The breaking of Mendelian laws is considered a significant biological anomaly."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_030",
            "word": "democratization",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the action of making something accessible to everyone.",
                            "examples": [
                                    "The digitization of music recording software led to the democratization of music production."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_031",
            "word": "abundance",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a very large quantity of something.",
                            "examples": [
                                    "We have an abundance of high-quality learning content available for free online."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_032",
            "word": "monetization",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the action of earning revenue from an asset or online content.",
                            "examples": [
                                    "Platform monetization allows creators to quit their day jobs and focus on art."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_033",
            "word": "saturation",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state that occurs when no more of something can be absorbed or added.",
                            "examples": [
                                    "The market is facing high saturation with thousands of new podcasts launched daily."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_034",
            "word": "collaborative",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "produced by or involving two or more parties working together.",
                            "examples": [
                                    "Open-source software projects are massive collaborative efforts involving global teams."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_035",
            "word": "accessibility",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the quality of being easy to obtain, use, or understand.",
                            "examples": [
                                    "The accessibility of high-definition cameras has transformed mobile filmmaking."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_036",
            "word": "niche",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "relating to interests that appeal to a small, specialized audience.",
                            "examples": [
                                    "The internet allows creators to build sustainable businesses around highly niche topics."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_037",
            "word": "pre-emptive",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "serving or intended to forestall something, especially to prevent an attack.",
                            "examples": [
                                    "The brain's pre-emptive processing helps us avoid social conflict."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_038",
            "word": "neural firing",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the electrical signal that travels along an axon when a neuron is activated.",
                            "examples": [
                                    "Neural firing patterns can predict a social decision seconds before it is made."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_039",
            "word": "intuition",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the ability to understand something immediately, without the need for conscious reasoning.",
                            "examples": [
                                    "Social intuition is actually the result of rapid unconscious processing."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_040",
            "word": "social cue",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a verbal or non-verbal hint, which can be positive or negative, that guides social interaction.",
                            "examples": [
                                    "The brain is highly sensitive to even the smallest social cue."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_041",
            "word": "amygdala",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a part of the brain involved with the experiencing of emotions.",
                            "examples": [
                                    "The amygdala plays a central role in our immediate social reactions."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_042",
            "word": "inference",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a conclusion reached on the basis of evidence and reasoning.",
                            "examples": [
                                    "We often make rapid social inferences without having all the facts."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_043",
            "word": "breakthrough",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a sudden important discovery.",
                            "examples": [
                                    "Scientists made a breakthrough in cancer research."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_044",
            "word": "peer-reviewed",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "checked by other experts.",
                            "examples": [
                                    "This journal only publishes peer-reviewed articles."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_045",
            "word": "neural network",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a computer system modeled on the human brain.",
                            "examples": [
                                    "Deep learning uses artificial neural networks."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_046",
            "word": "dataset",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a collection of related data.",
                            "examples": [
                                    "The AI was trained on a massive image dataset."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_047",
            "word": "automation",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the use of machines to do work.",
                            "examples": [
                                    "Automation is changing the manufacturing industry."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_technology_048",
            "word": "turing test",
            "lang": "en",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a test of a machine's ability to exhibit intelligent behavior.",
                            "examples": [
                                    "Many modern chatbots can almost pass the Turing test."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_009",
            "word": "posthumous",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "occurring, awarded, or appearing after the death of the originator.",
                            "examples": [
                                    "She received posthumous recognition for her incredible contributions to soul music."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_010",
            "word": "tragic",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "causing or characterized by extreme distress or sorrow.",
                            "examples": [
                                    "Her tragic and untimely departure left a massive void in the music industry."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_011",
            "word": "canonize",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "to treat someone or something as being of great significance or authority.",
                            "examples": [
                                    "Society tends to canonize artists only after their struggles have ended."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_012",
            "word": "haunting",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "poignant and evocative; difficult to ignore or forget.",
                            "examples": [
                                    "Her haunting vocals continue to resonate with millions of listeners worldwide."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_013",
            "word": "untimely",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "happening or done at an unsuitable or premature time.",
                            "examples": [
                                    "The untimely passing of brilliant creators often cements their legendary status."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_014",
            "word": "legacy",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "something left or handed down by a predecessor.",
                            "examples": [
                                    "Her musical legacy is defined by authentic storytelling and emotional depth."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_015",
            "word": "exploitative",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "making use of a situation or treating others unfairly in order to gain an advantage.",
                            "examples": [
                                    "The tabloid media's constant pursuit of her was incredibly exploitative."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_016",
            "word": "artifact",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "an object made by a human being, typically of cultural or historical interest.",
                            "examples": [
                                    "Each recorded album is a beautiful, static artifact of her turbulent life."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_017",
            "word": "sensation",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a widespread reaction of interest and excitement.",
                            "examples": [
                                    "She became an overnight sensation, but the sudden attention proved overwhelming."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_018",
            "word": "taboo",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a social or religious custom prohibiting or forbidding a particular practice or association.",
                            "examples": [
                                    "Describing end-of-life choices remains a strict taboo in many traditional families."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_019",
            "word": "despair",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the complete loss or absence of hope.",
                            "examples": [
                                    "Deep despair can make a person feel like there are no alternatives left."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_020",
            "word": "sanctity",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state or quality of being holy, sacred, or saintly.",
                            "examples": [
                                    "Many ethical arguments are built around the sanctity of human life."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_021",
            "word": "compassionate",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "feeling or showing sympathy and concern for others.",
                            "examples": [
                                    "A compassionate society must address the suffering of terminally ill patients."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_022",
            "word": "dignified",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "having or showing a composed or serious manner that is worthy of respect.",
                            "examples": [
                                    "Every human being deserves a dignified and peaceful end to their life."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_023",
            "word": "spotlight",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "intense public scrutiny or attention.",
                            "examples": [
                                    "Walking down Fifth Avenue, she felt an imaginary spotlight following her every move."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_024",
            "word": "paranoia",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "unjustified suspicion and mistrust of other people.",
                            "examples": [
                                    "New York can breed a unique kind of urban paranoia where every glance feels like a judgment."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_025",
            "word": "conspicuous",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "standing out so as to be clearly visible.",
                            "examples": [
                                    "Wearing a bright red dress made her feel conspicuous in the sea of dark winter coats."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_026",
            "word": "scrutinize",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "examine or inspect closely and thoroughly.",
                            "examples": [
                                    "We tend to scrutinize our own flaws far more than anyone else ever would."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_027",
            "word": "self-conscious",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "feeling undue awareness of oneself, one's appearance, or one's actions.",
                            "examples": [
                                    "Meeting his ex-girlfriend made him incredibly self-conscious about his outfit."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_028",
            "word": "spectator",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a person who watches at a show, game, or other event.",
                            "examples": [
                                    "In the grand theater of city life, everyone is both an actor and a spectator."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_029",
            "word": "delusion",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "an idiosyncratic belief or impression that is firmly maintained despite being contradicted by what is generally accepted as reality.",
                            "examples": [
                                    "Believing that everyone in the crowd is analyzing your hair is a harmless urban delusion."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_030",
            "word": "intrusive",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "causing disruption or annoyance through being unwelcome or uninvited.",
                            "examples": [
                                    "Intrusive thoughts of being judged can ruin a perfectly lovely walk."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_031",
            "word": "limerence",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state of being infatuated or obsessed with another person.",
                            "examples": [
                                    "He realized that his intense feelings were a case of limerence rather than genuine love."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_032",
            "word": "infatuation",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "an intense but short-lived passion or admiration for someone or something.",
                            "examples": [
                                    "Their summer romance was a whirlwind of infatuation that faded by autumn."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_033",
            "word": "obsessive",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "preoccupied with something to a troubling or excessive degree.",
                            "examples": [
                                    "She had an obsessive need to check her phone for messages from him."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_034",
            "word": "reciprocate",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "respond to (a gesture or action) by making a corresponding one.",
                            "examples": [
                                    "It is painful when your deep feelings for someone are not reciprocated."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_035",
            "word": "euphoria",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a feeling or state of intense excitement and happiness.",
                            "examples": [
                                    "A single positive text message can trigger a sense of pure euphoria."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_036",
            "word": "idealize",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "regard or represent as perfect or better than in reality.",
                            "examples": [
                                    "We often idealize our partners at the beginning of a relationship, ignoring their flaws."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_037",
            "word": "dopamine",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a compound present in the body as a neurotransmitter associated with pleasure.",
                            "examples": [
                                    "Limerence is driven by a massive release of dopamine in the brain's reward system."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_038",
            "word": "rationality",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the quality of being based on or in accordance with reason or logic.",
                            "examples": [
                                    "Emotional intensity often clouds our rationality and leads to impulsive decisions."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_039",
            "word": "privilege",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a special right or advantage available only to a particular group.",
                            "examples": [
                                    "Having extra recess time was a privilege granted only to the blue-eyed children."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_040",
            "word": "superiority",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state of believing oneself to be better or higher in status than others.",
                            "examples": [
                                    "The children on the favored side quickly developed an arrogant sense of superiority."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_041",
            "word": "inferiority",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the condition of being lower in status, capability, or quality than another.",
                            "examples": [
                                    "The unfavored group suffered from a temporary feeling of complete academic inferiority."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_042",
            "word": "in-group",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "an exclusive group of people with a shared identity and interest.",
                            "examples": [
                                    "Humans are evolutionary primed to prioritize the safety of their own in-group."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_043",
            "word": "out-group",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "those people who do not belong to a specific in-group.",
                            "examples": [
                                    "Propaganda always focuses on painting the out-group as untrustworthy."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_044",
            "word": "conditioning",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the process of training or accustoming a person to behave in a certain way.",
                            "examples": [
                                    "Our social conditioning determines how we react to people from different backgrounds."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_045",
            "word": "anticipatory",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "happening, performed, or felt in anticipation of something.",
                            "examples": [
                                    "He felt a sense of anticipatory anxiety as the deadline for the major project approached."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_046",
            "word": "caregiver",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a family member or paid helper who regularly looks after a sick, elderly, or disabled person.",
                            "examples": [
                                    "Being a primary caregiver requires an incredible amount of emotional and physical resilience."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_047",
            "word": "mourning",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the expression of deep sorrow for someone who has died.",
                            "examples": [
                                    "The whole community was in mourning after the loss of their beloved local leader."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_048",
            "word": "coping",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "(of a person) dealing effectively with something difficult.",
                            "examples": [
                                    "She found that journaling was a helpful coping mechanism for managing her daily stress."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_049",
            "word": "enevitable",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "certain to happen; unavoidable.",
                            "examples": [
                                    "While loss is enevitable, the way we handle it defines our personal growth."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_050",
            "word": "detachment",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state of being objective or aloof.",
                            "examples": [
                                    "He felt a strange sense of detachment from the chaos happening all around him."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_051",
            "word": "dissociation",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a mental process of disconnecting from one's thoughts, feelings, memories or sense of identity.",
                            "examples": [
                                    "Dissociation is a common coping mechanism for people experiencing extreme stress or trauma."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_052",
            "word": "surreal",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "having the qualities of surrealism; bizarre.",
                            "examples": [
                                    "The empty streets of the city during the lockdown felt completely surreal."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_053",
            "word": "introspection",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the examination of one's own mental and emotional processes.",
                            "examples": [
                                    "Too much introspection can sometimes lead to a sense of disconnection from the physical world."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_054",
            "word": "groundedness",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the quality of being sensible and realistic; having a firm base in reality.",
                            "examples": [
                                    "Yoga and meditation are great tools for building a sense of physical groundedness."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_055",
            "word": "gratification",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "pleasure, especially when gained from the satisfaction of a desire.",
                            "examples": [
                                    "Our modern world is flooded with sources of instant gratification."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_056",
            "word": "resistance",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the refusal to accept or comply with something; the brain's internal pushback.",
                            "examples": [
                                    "We feel deep mental resistance when sitting down to do difficult tasks."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_057",
            "word": "procrastination",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the action of delaying or postponing something, especially out of habit.",
                            "examples": [
                                    "Chronic procrastination is often an emotional coping mechanism rather than laziness."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_058",
            "word": "willpower",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "control exerted to do something or restrain impulses.",
                            "examples": [
                                    "Relying purely on conscious willpower to build habits is a failing strategy."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_059",
            "word": "detoxification",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the process of removing overstimulation or toxic substances.",
                            "examples": [
                                    "A digital detoxification weekend helps restore our brain's default dopamine levels."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_060",
            "word": "stimulus",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a thing or event that evokes a specific reaction in an organ.",
                            "examples": [
                                    "Each phone buzz is a strong stimulus that pulls our focus away."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_061",
            "word": "frictionless",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "achieved without effort, struggle, or difficulty.",
                            "examples": [
                                    "Streaming platforms make consuming low-effort entertainment completely frictionless."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_062",
            "word": "satiation",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state of being completely full, leading to temporary loss of motivation.",
                            "examples": [
                                    "Immediate satiation of all desires ruins our drive to achieve long-term goals."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_063",
            "word": "habituate",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "to make or become accustomed or used to something over time.",
                            "examples": [
                                    "If you study every morning, your brain will slowly habituate to the routine."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_064",
            "word": "unresolved",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "not settled or find a solution to.",
                            "examples": [
                                    "Many adult anxieties are caused by unresolved conflicts from early childhood."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_065",
            "word": "manifestation",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "an event, action, or object that clearly shows or embodies something.",
                            "examples": [
                                    "Sudden anger can be a physical manifestation of long-term emotional stress."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_066",
            "word": "projection",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the unconscious transfer of one's own desires or emotions to another person.",
                            "examples": [
                                    "Anger toward a colleague is often a projection of frustration with oneself."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_067",
            "word": "intimacy",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "close familiarity or friendship; closeness.",
                            "examples": [
                                    "Many people fear physical intimacy because it requires a high level of trust."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_068",
            "word": "defensive",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "used or intended to defend or protect.",
                            "examples": [
                                    "She became very defensive when her partner asked about her plans for the future."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_069",
            "word": "codependency",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "excessive emotional or psychological reliance on a partner.",
                            "examples": [
                                    "It is important to distinguish between deep love and a harmful state of codependency."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_070",
            "word": "attachment",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "an extra part that is or may be connected to something.",
                            "examples": [
                                    "Our attachment style, formed in childhood, often dictates how we behave in adult relationships."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_071",
            "word": "self-sabotage",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the act of destroying or damaging something that you have built or are trying to build.",
                            "examples": [
                                    "He realized that his tendency to pick fights was a form of self-sabotage to avoid getting too close."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_072",
            "word": "rejection",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the dismissing or refusing of a proposal, idea, etc.",
                            "examples": [
                                    "The fear of rejection often prevents people from expressing their true feelings."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_073",
            "word": "indoctrination",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the process of teaching a person or group to accept a set of beliefs uncritically.",
                            "examples": [
                                    "State-controlled media was the primary tool for political indoctrination."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_074",
            "word": "dehumanization",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the process of depriving a person or group of positive human qualities.",
                            "examples": [
                                    "The propaganda relied heavily on the dehumanization of minority groups."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_075",
            "word": "scapegoat",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a person or group who is blamed for the wrongdoings or faults of others.",
                            "examples": [
                                    "Minorities were used as a scapegoat for the country's economic crisis."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_076",
            "word": "pseudoscience",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "beliefs or practices mistakenly regarded as being based on scientific method.",
                            "examples": [
                                    "Nazi racial theories were based on pure pseudoscience."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_077",
            "word": "conformity",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "behavior in accordance with socially accepted conventions or standards.",
                            "examples": [
                                    "Social conformity made it dangerous for ordinary citizens to speak out."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_078",
            "word": "coercion",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the practice of persuading someone to do something by using force or threats.",
                            "examples": [
                                    "The regime maintained absolute power through a mixture of propaganda and physical coercion."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_079",
            "word": "subjugation",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the action of bringing someone or something under domination or control.",
                            "examples": [
                                    "The military campaign led to the complete subjugation of neighboring populations."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_080",
            "word": "caricature",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a picture or description in which characteristics are exaggerated for grotesque effect.",
                            "examples": [
                                    "Newspapers published offensive caricatures of Jewish people to shape public opinion."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_081",
            "word": "bystander",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a person who is present at an event but does not take part.",
                            "examples": [
                                    "Many citizens chose to remain a passive bystander during the atrocities."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_082",
            "word": "complicity",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state of being involved with others in an illegal activity or wrongdoing.",
                            "examples": [
                                    "By staying silent, millions of people drifted into moral complicity."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_083",
            "word": "anchor",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "to rely too heavily on the first piece of information offered.",
                            "examples": [
                                    "The initial price anchors the negotiation."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_084",
            "word": "correlation",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a mutual relationship or connection between two or more things.",
                            "examples": [
                                    "Correlation does not always imply causation."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_psychology_085",
            "word": "dissonance",
            "lang": "en",
            "level": "advanced",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "lack of agreement; inconsistency.",
                            "examples": [
                                    "Cognitive dissonance occurs when we hold two conflicting beliefs."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_001",
            "word": "solace",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Where Is My Husband?'.",
                            "examples": [
                                    "This is an elegant example of using 'Solace'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_002",
            "word": "nightlife",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Where Is My Husband?'.",
                            "examples": [
                                    "This is an elegant example of using 'Nightlife'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_003",
            "word": "haze",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Where Is My Husband?'.",
                            "examples": [
                                    "This is an elegant example of using 'Haze'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_004",
            "word": "chaos",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Where Is My Husband?'.",
                            "examples": [
                                    "This is an elegant example of using 'Chaos'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_005",
            "word": "desperation",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a state of despair, resulting in rash behavior.",
                            "examples": [
                                    "In her desperation, she decided to seek professional help."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_006",
            "word": "numb",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Where Is My Husband?'.",
                            "examples": [
                                    "This is an elegant example of using 'Numb'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_007",
            "word": "void",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Where Is My Husband?'.",
                            "examples": [
                                    "This is an elegant example of using 'Void'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_008",
            "word": "illusion",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a thing that is likely to be wrongly perceived.",
                            "examples": [
                                    "The oasis in the desert was just an optical illusion."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_009",
            "word": "rapture",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Oh To Be in Love'.",
                            "examples": [
                                    "This is an elegant example of using 'Rapture'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_010",
            "word": "bewitched",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Oh To Be in Love'.",
                            "examples": [
                                    "This is an elegant example of using 'Bewitched'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_011",
            "word": "surrender",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "give up or hand over after a struggle.",
                            "examples": [
                                    "They decided to surrender their weapons and end the conflict."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_012",
            "word": "heartache",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Oh To Be in Love'.",
                            "examples": [
                                    "This is an elegant example of using 'Heartache'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_013",
            "word": "crisis",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Unlikely Lovers'.",
                            "examples": [
                                    "This is an elegant example of using 'Crisis'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_014",
            "word": "sanctuary",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Unlikely Lovers'.",
                            "examples": [
                                    "This is an elegant example of using 'Sanctuary'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_015",
            "word": "bond",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Unlikely Lovers'.",
                            "examples": [
                                    "This is an elegant example of using 'Bond'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_016",
            "word": "affection",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Unlikely Lovers'.",
                            "examples": [
                                    "This is an elegant example of using 'Affection'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_017",
            "word": "adversity",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Unlikely Lovers'.",
                            "examples": [
                                    "This is an elegant example of using 'Adversity'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_advanced_people_018",
            "word": "tenderness",
            "lang": "en",
            "level": "advanced",
            "theme": "people",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Unlikely Lovers'.",
                            "examples": [
                                    "This is an elegant example of using 'Tenderness'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    }
    ];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data.filter(x => x.form === "adjective")];
})();