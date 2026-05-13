/**
 * DAILY CHALLENGE CONTENT BANK
 * ----------------------------
 * A centralized store for Daily Challenge topics and micro-tasks.
 * Structured by level: Beginner (b), Intermediate (i), Advanced (a).
 */

window.DAILY_BANK = {
    // Mondays: Vocabulary & Basics
    'vocab': [
        {
            id: 101,
            title: "Morning Routine",
            subtitle: "Start your day with the right words",
            levels: {
                b: {
                    prompt: "List 5 things you do every morning (e.g., drink coffee, brush teeth).",
                    tip: "Use simple present tense: 'I drink...', 'I eat...'",
                    micro: {
                        title: "Action Verbs",
                        instruction: "Find the translation for 'to wake up' and 'to get dressed' in your target language.",
                        example: "English: I wake up at 7am."
                    }
                },
                i: {
                    prompt: "Describe your ideal morning routine vs. your actual one. What would you change?",
                    tip: "Use frequency adverbs like 'usually', 'rarely', and 'ideally'.",
                    micro: {
                        title: "Reflexive Verbs",
                        instruction: "Write 3 sentences using reflexive verbs related to grooming.",
                        example: "French: Je me rase tous les matins."
                    }
                },
                a: {
                    prompt: "Discuss the impact of morning habits on long-term productivity and mental health.",
                    tip: "Use advanced connectors: 'consequently', 'furthermore', 'notwithstanding'.",
                    micro: {
                        title: "Idioms & Nuance",
                        instruction: "Explain the idiom 'to get up on the wrong side of the bed' and find a local equivalent.",
                        example: "Meaning: To start the day in a bad mood."
                    }
                }
            }
        },
        {
            id: 102,
            title: "Food & Dining",
            subtitle: "Navigating the kitchen and restaurants",
            levels: {
                b: {
                    prompt: "What is your favorite meal? Name 3 ingredients used in it.",
                    tip: "Focus on nouns: 'pizza', 'cheese', 'tomato'.",
                    micro: {
                        title: "At the Table",
                        instruction: "Learn how to ask for the bill/check politely.",
                        example: "Italian: Il conto, per favore."
                    }
                },
                i: {
                    prompt: "Describe a traditional dish from your country. How is it prepared?",
                    tip: "Use sequence markers: 'firstly', 'then', 'after that'.",
                    micro: {
                        title: "Cooking Methods",
                        instruction: "Differentiate between 'frying', 'boiling', and 'baking' in your target language.",
                        example: "Spanish: Freír vs. Hervir."
                    }
                },
                a: {
                    prompt: "Analyze the globalization of cuisine. Is authentic traditional food disappearing?",
                    tip: "Use speculative language: 'It could be argued that...', 'Presumably...'",
                    micro: {
                        title: "Gourmet Vocabulary",
                        instruction: "Find 5 adjectives to describe texture (e.g., crunchy, succulent, bland).",
                        example: "English: The pastry was delightfully flaky."
                    }
                }
            }
        }
    ],

    // Tuesdays: Travel & Culture
    'travel': [
        {
            id: 201,
            title: "Dream Destinations",
            subtitle: "Where would you go if money was no object?",
            levels: {
                b: {
                    prompt: "Choose a country you want to visit. Name 2 things you want to see there.",
                    tip: "Use 'I want to see...' or 'I want to go to...'",
                    micro: {
                        title: "Transport",
                        instruction: "Name 3 modes of transport you use to travel.",
                        example: "German: Der Zug, das Flugzeug, das Auto."
                    }
                },
                i: {
                    prompt: "Compare a beach holiday to a city break. Which do you prefer and why?",
                    tip: "Use comparative adjectives: 'busier', 'more relaxing', 'quieter'.",
                    micro: {
                        title: "Booking",
                        instruction: "Practice asking if a hotel room has a view or air conditioning.",
                        example: "Greek: Έχει το δωμάτιο κλιματισμό;"
                    }
                },
                a: {
                    prompt: "Evaluate the ethics of 'dark tourism' or over-tourism in historical sites.",
                    tip: "Use conditional sentences (Type 2 and 3) to discuss hypothetical impacts.",
                    micro: {
                        title: "Cultural Nuance",
                        instruction: "Research a unique social etiquette rule in your target language's culture.",
                        example: "Japan: Tipping is often considered rude."
                    }
                }
            }
        }
    ],

    // Wednesdays: Work & Society
    'society': [
        {
            id: 301,
            title: "Future of Work",
            subtitle: "AI, remote work, and the 4-day week",
            levels: {
                b: {
                    prompt: "What is your job? (or your dream job). Do you work in an office?",
                    tip: "Use 'I am a...' or 'I work in...'",
                    micro: {
                        title: "Jobs",
                        instruction: "Translate 5 common professions.",
                        example: "Russian: Врач, Учитель, Инженер."
                    }
                },
                i: {
                    prompt: "Do you think working from home is better than working in an office? Why?",
                    tip: "Use 'In my opinion...', 'I believe...', 'On the other hand...'",
                    micro: {
                        title: "Office Items",
                        instruction: "Identify 5 items you see on a desk every day.",
                        example: "French: L'ordinateur, le stylo, le clavier."
                    }
                },
                a: {
                    prompt: "Discuss how Artificial Intelligence might redefine the concept of a 'career' by 2050.",
                    tip: "Use future perfect: 'By 2050, AI will have replaced...'",
                    micro: {
                        title: "Business Idioms",
                        instruction: "Explain what it means to 'touch base' or 'circle back' and find equivalents.",
                        example: "Meaning: To make contact/reconnect."
                    }
                }
            }
        }
    ],

    // Thursdays: Emotions & Philosophy
    'philosophy': [
        {
            id: 401,
            title: "Happiness",
            subtitle: "What makes life worth living?",
            levels: {
                b: {
                    prompt: "Name 3 things that make you happy.",
                    tip: "Use simple sentences: 'Coffee makes me happy.'",
                    micro: {
                        title: "Emotions",
                        instruction: "Learn how to say 'Happy', 'Sad', 'Excited', and 'Tired'.",
                        example: "Italian: Felice, Triste, Emozionato, Stanco."
                    }
                },
                i: {
                    prompt: "Is it more important to be successful or to be happy? Can you be both?",
                    tip: "Use modals of possibility: 'might', 'could', 'may'.",
                    micro: {
                        title: "Adjectives of Personality",
                        instruction: "Find 3 positive and 3 negative traits to describe someone.",
                        example: "English: Kind vs. Selfish."
                    }
                },
                a: {
                    prompt: "Critique the 'pursuit of happiness' as a modern cultural mandate. Does it lead to more stress?",
                    tip: "Use academic verbs: 'illustrate', 'advocate', 'contradict'.",
                    micro: {
                        title: "Abstract Nouns",
                        instruction: "Translate 'Resilience', 'Integrity', and 'Solitude'.",
                        example: "Portuguese: Resiliência, Integridade, Solidão."
                    }
                }
            }
        }
    ],

    // Fridays: Hobbies & Creative
    'creative': [
        {
            id: 501,
            title: "Music & Art",
            subtitle: "Expressing the soul",
            levels: {
                b: {
                    prompt: "What music do you like? Do you play an instrument?",
                    tip: "Use 'I like...' or 'I listen to...'",
                    micro: {
                        title: "Instruments",
                        instruction: "Learn the names of 4 common musical instruments.",
                        example: "Spanish: Guitarra, Piano, Batería, Violín."
                    }
                },
                i: {
                    prompt: "If you could be a famous artist or musician for a day, who would you be and why?",
                    tip: "Use second conditional: 'If I were... I would...'",
                    micro: {
                        title: "Genres",
                        instruction: "Translate 5 different genres of music or art.",
                        example: "German: Rock, Klassik, Jazz, Pop."
                    }
                },
                a: {
                    prompt: "Can AI-generated art ever truly be considered 'art' without human lived experience?",
                    tip: "Use rhetorical questions to structure your argument.",
                    micro: {
                        title: "Artistic Criticism",
                        instruction: "Find verbs used to describe artistic processes (e.g., to compose, to sculpt, to depict).",
                        example: "French: Dépeindre, sculpter."
                    }
                }
            }
        }
    ],

    // Weekend: Review & Storytelling
    'storytelling': [
        {
            id: 601,
            title: "The Time Traveler",
            subtitle: "Past, Present, and Future",
            levels: {
                b: {
                    prompt: "Where did you go yesterday? What did you do?",
                    tip: "Use past tense: 'I went...', 'I saw...'",
                    micro: {
                        title: "Time Markers",
                        instruction: "Learn 'Yesterday', 'Today', 'Tomorrow', 'Last week'.",
                        example: "Russian: Вчера, Сегодня, Завтра."
                    }
                },
                i: {
                    prompt: "If you could travel to any year in the past, which would it be? What would you do there?",
                    tip: "Focus on historical vocabulary and past conditionals.",
                    micro: {
                        title: "Historical Eras",
                        instruction: "How do you say 'Middle Ages', 'Renaissance', or 'Century'?",
                        example: "Greek: Μεσαίωνας, Αναγέννηση, Αιώνας."
                    }
                },
                a: {
                    prompt: "If you could change one event in human history, what would it be and how would it affect the present?",
                    tip: "Use third conditional: 'If I had changed X, Y would have happened...'",
                    micro: {
                        title: "Narrative Tenses",
                        instruction: "Practice using the past perfect vs. past continuous to set a scene.",
                        example: "English: I had been waiting for hours when..."
                    }
                }
            }
        }
    ]
};

window.DAILY_SCHEDULE = {
    1: 'vocab',        // Monday
    2: 'travel',       // Tuesday
    3: 'society',      // Wednesday
    4: 'philosophy',   // Thursday
    5: 'creative',     // Friday
    6: 'storytelling', // Saturday
    0: 'storytelling'  // Sunday
};
