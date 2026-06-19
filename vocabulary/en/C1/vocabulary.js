(function() {
    const data = [
    {
        "word": "firefighter",
        "level": "advanced",
        "theme": "advanced_register_c1",
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
        "theme": "advanced_register_c1",
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
        "theme": "science_tech_society_c1",
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
        "theme": "science_tech_society_c1",
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
        "theme": "science_tech_society_c1",
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
        "theme": "science_tech_society_c1",
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
        "theme": "science_tech_society_c1",
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
        "theme": "science_tech_society_c1",
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
        "theme": "science_tech_society_c1",
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
        "theme": "science_tech_society_c1",
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
        "theme": "science_tech_society_c1",
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
    }];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();