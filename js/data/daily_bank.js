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
                    prompt: "List 5 things you do every morning, like drinking coffee or brushing your teeth.",
                    tip: "Use simple present tense: 'I drink...', 'I eat...'",
                    micro: {
                        title: "Action Verbs",
                        instruction: "Find the translation for 'to wake up' and 'to get dressed' in your target language.",
                        example: "English: I wake up at 7am."
                    }
                },
                i: {
                    prompt: "How does your ideal morning compare to what actually happens? What would you change?",
                    tip: "Use frequency adverbs like 'usually', 'rarely', and 'ideally'.",
                    micro: {
                        title: "Reflexive Verbs",
                        instruction: "Write 3 sentences using reflexive verbs related to your daily routine.",
                        example: "French: Je me rase tous les matins."
                    }
                },
                a: {
                    prompt: "How much do morning habits really shape long-term focus and wellbeing?",
                    tip: "Use advanced connectors like 'consequently', 'furthermore', or 'notwithstanding'.",
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
                    prompt: "What is your favorite meal? Name 3 main ingredients in it.",
                    tip: "Focus on simple nouns like 'pizza', 'cheese', or 'tomato'.",
                    micro: {
                        title: "At the Table",
                        instruction: "Learn how to ask for the bill or check politely.",
                        example: "Italian: Il conto, per favore."
                    }
                },
                i: {
                    prompt: "Describe a classic dish from your region. How do you make it step by step?",
                    tip: "Use sequence markers like 'first', 'then', or 'after that'.",
                    micro: {
                        title: "Cooking Methods",
                        instruction: "Differentiate between 'frying', 'boiling', and 'baking' in your target language.",
                        example: "Spanish: Freír vs. Hervir."
                    }
                },
                a: {
                    prompt: "As global food chains expand everywhere, are authentic local recipes getting lost?",
                    tip: "Use speculative language like 'It could be argued that...' or 'Presumably...'",
                    micro: {
                        title: "Gourmet Vocabulary",
                        instruction: "Find 5 adjectives to describe texture, such as crunchy, succulent, or flaky.",
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
            subtitle: "Where would you head if money was no object?",
            levels: {
                b: {
                    prompt: "Pick a country you want to visit and name 2 things you hope to see there.",
                    tip: "Use 'I want to see...' or 'I want to go to...'",
                    micro: {
                        title: "Transport",
                        instruction: "Name 3 types of transport you use when traveling.",
                        example: "German: Der Zug, das Flugzeug, das Auto."
                    }
                },
                i: {
                    prompt: "Would you rather relax on a quiet beach or explore a bustling city? Why?",
                    tip: "Use comparative adjectives like 'quieter', 'more energetic', or 'less crowded'.",
                    micro: {
                        title: "Booking",
                        instruction: "Practice asking if a hotel room includes a sea view or air conditioning.",
                        example: "Greek: Έχει το δωμάτιο κλιματισμό;"
                    }
                },
                a: {
                    prompt: "Does heavy tourism preserve historical sites or end up destroying their charm?",
                    tip: "Use conditionals to discuss potential long-term impacts.",
                    micro: {
                        title: "Cultural Nuance",
                        instruction: "Research a unique social etiquette rule in your target culture.",
                        example: "Japan: Tipping is often considered unexpected or rude."
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
            subtitle: "Remote teams, technology, and flexible schedules",
            levels: {
                b: {
                    prompt: "What line of work are you in, or what is your dream job? Do you work in an office?",
                    tip: "Use simple starters like 'I am a...' or 'I work in...'",
                    micro: {
                        title: "Jobs",
                        instruction: "Translate 5 common professions.",
                        example: "Russian: Врач, Учитель, Инженер."
                    }
                },
                i: {
                    prompt: "Do you think working remotely beats being in an office every day? Why?",
                    tip: "Use opinion phrases like 'In my view...', 'I find that...', or 'On the other hand...'",
                    micro: {
                        title: "Office Items",
                        instruction: "Identify 5 items you see on a desk every day.",
                        example: "French: L'ordinateur, le stylo, le clavier."
                    }
                },
                a: {
                    prompt: "How will automated tools and changing tech reshape standard careers over the next few decades?",
                    tip: "Use future perfect forms like 'By 2050, automation will have changed...'",
                    micro: {
                        title: "Business Idioms",
                        instruction: "Explain what it means to 'touch base' or 'circle back' and find local equivalents.",
                        example: "Meaning: To catch up or follow up on a topic."
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
            subtitle: "What makes everyday life feel meaningful?",
            levels: {
                b: {
                    prompt: "Name 3 simple things that always brighten your day.",
                    tip: "Use straightforward phrases: 'Good coffee makes me happy.'",
                    micro: {
                        title: "Emotions",
                        instruction: "Learn how to say 'Happy', 'Sad', 'Excited', and 'Tired'.",
                        example: "Italian: Felice, Triste, Emozionato, Stanco."
                    }
                },
                i: {
                    prompt: "Is personal fulfillment more important than external success? Can you balance both?",
                    tip: "Use modal verbs of possibility like 'might', 'could', or 'may'.",
                    micro: {
                        title: "Adjectives of Personality",
                        instruction: "Find 3 positive and 3 negative traits to describe someone.",
                        example: "English: Kind vs. Selfish."
                    }
                },
                a: {
                    prompt: "Does constant pressure to stay positive make people feel more stressed than fulfilled?",
                    tip: "Use precise verbs like 'illustrate', 'advocate', or 'challenge'.",
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
            subtitle: "Expressing ideas and human creativity",
            levels: {
                b: {
                    prompt: "What kind of music do you listen to? Do you play any instrument?",
                    tip: "Use simple verbs like 'I like...' or 'I listen to...'",
                    micro: {
                        title: "Instruments",
                        instruction: "Learn the names of 4 common musical instruments.",
                        example: "Spanish: Guitarra, Piano, Batería, Violín."
                    }
                },
                i: {
                    prompt: "If you could step into the shoes of any musician or artist for a day, who would it be?",
                    tip: "Use the second conditional: 'If I could be... I would...'",
                    micro: {
                        title: "Genres",
                        instruction: "Translate 5 different genres of music or visual art.",
                        example: "German: Rock, Klassik, Jazz, Pop."
                    }
                },
                a: {
                    prompt: "Can creative work produced by algorithms ever carry genuine emotional depth?",
                    tip: "Use thoughtful open questions to structure your response.",
                    micro: {
                        title: "Artistic Criticism",
                        instruction: "Find verbs used to describe artistic processes, such as to compose, to sculpt, or to depict.",
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
            subtitle: "Reflecting on the past and imagining the future",
            levels: {
                b: {
                    prompt: "Where did you go yesterday, and what did you get up to?",
                    tip: "Use simple past verbs: 'I went...', 'I saw...'",
                    micro: {
                        title: "Time Markers",
                        instruction: "Learn 'Yesterday', 'Today', 'Tomorrow', and 'Last week'.",
                        example: "Russian: Вчера, Сегодня, Завтра."
                    }
                },
                i: {
                    prompt: "If you could visit any historical era for a week, where would you go and why?",
                    tip: "Focus on historical vocabulary and past conditional structures.",
                    micro: {
                        title: "Historical Eras",
                        instruction: "Learn how to say 'Middle Ages', 'Renaissance', or 'Century'.",
                        example: "Greek: Μεσαίωνας, Αναγέννηση, Αιώνας."
                    }
                },
                a: {
                    prompt: "If you could alter one key moment in world history, how would it ripple into the present?",
                    tip: "Use third conditional patterns: 'If I had changed X, Y would have unfolded differently...'",
                    micro: {
                        title: "Narrative Tenses",
                        instruction: "Practice combining the past perfect and past continuous to set the background of a scene.",
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
