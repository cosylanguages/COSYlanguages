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
        },
        {
            id: 103,
            title: "Digital Life & Tech",
            subtitle: "Screen time, social media, and staying connected",
            levels: {
                b: {
                    prompt: "Which 3 apps do you open most often on your phone?",
                    tip: "Use simple present verbs: 'I check...', 'I watch...'",
                    micro: {
                        title: "Tech Basics",
                        instruction: "Find the words for 'screen', 'password', and 'charger' in your target language.",
                        example: "French: Le mot de passe."
                    }
                },
                i: {
                    prompt: "How has your screen time changed over the past few years? Do you take digital detoxes?",
                    tip: "Use time references like 'lately', 'in recent years', or 'from time to time'.",
                    micro: {
                        title: "Digital Verbs",
                        instruction: "Write 3 sentences using verbs like 'to download', 'to share', or 'to mute'.",
                        example: "Spanish: Descargar una aplicación."
                    }
                },
                a: {
                    prompt: "Do modern social platforms deepen real human connections or foster superficial interactions?",
                    tip: "Structure your contrast using 'while', 'whereas', or 'on the flip side'.",
                    micro: {
                        title: "Nuanced Terms",
                        instruction: "Translate terms like 'echo chamber', 'algorithms', and 'digital footprint'.",
                        example: "German: Der digitale Fußabdruck."
                    }
                }
            }
        },
        {
            id: 104,
            title: "Health & Wellness",
            subtitle: "Balancing movement, sleep, and rest",
            levels: {
                b: {
                    prompt: "What do you like to do to stay active or unwind after work?",
                    tip: "Use simple leisure verbs: 'I walk...', 'I sleep...', 'I do yoga...'",
                    micro: {
                        title: "Body & Care",
                        instruction: "Learn how to express feeling tired or asking for advice on resting.",
                        example: "Italian: Sono stanco."
                    }
                },
                i: {
                    prompt: "How do you manage stress when facing a crowded schedule?",
                    tip: "Use modal verbs: 'I try to...', 'I ought to...', 'I must make time...'",
                    micro: {
                        title: "Wellbeing Adjectives",
                        instruction: "Find 4 adjectives describing physical or mental states (e.g., refreshed, exhausted).",
                        example: "Spanish: Restaurado, Agotado."
                    }
                },
                a: {
                    prompt: "Should wellness be viewed as an individual responsibility or a societal duty?",
                    tip: "Use evaluation markers: 'fundamentally', 'crucially', 'it is paramount that...'",
                    micro: {
                        title: "Medical & Health Idioms",
                        instruction: "Explain the idiom 'a picture of health' and find a local equivalent.",
                        example: "Meaning: Being in remarkably good health."
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
        },
        {
            id: 202,
            title: "Neighborhood Walks",
            subtitle: "Discovering hidden gems in your local town",
            levels: {
                b: {
                    prompt: "Describe 3 places in your neighborhood (e.g., a bakery, a park, a library).",
                    tip: "Use location phrases: 'There is a...', 'Next to the...'",
                    micro: {
                        title: "City Words",
                        instruction: "Learn the words for 'street', 'square', and 'market'.",
                        example: "French: La rue, la place, le marché."
                    }
                },
                i: {
                    prompt: "What makes your hometown unique? Where would you take a friend visiting for the first time?",
                    tip: "Use recommendation phrases: 'I highly recommend...', 'You shouldn't miss...'",
                    micro: {
                        title: "Giving Directions",
                        instruction: "Write 3 sentences explaining how to get to your favorite local spot.",
                        example: "Spanish: Gira a la izquierda en la esquina."
                    }
                },
                a: {
                    prompt: "How does urban gentrification alter the cultural fabric of historic city centers?",
                    tip: "Use analytical vocabulary: 'displacement', 'heritage', 'revitalization'.",
                    micro: {
                        title: "Architectural Terms",
                        instruction: "Find terms used to describe city landscapes and historic facades.",
                        example: "Italian: Il centro storico."
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
        },
        {
            id: 302,
            title: "Sustainable Living",
            subtitle: "Small daily habits for a greener future",
            levels: {
                b: {
                    prompt: "What simple things do you do to help the environment at home?",
                    tip: "Use simple action verbs: 'I recycle...', 'I save water...'",
                    micro: {
                        title: "Eco Vocab",
                        instruction: "Learn the target words for 'recycle', 'nature', and 'energy'.",
                        example: "German: Recyceln, die Natur."
                    }
                },
                i: {
                    prompt: "Is individual action enough to tackle climate change, or must governments lead?",
                    tip: "Use contrast phrases: 'While personal efforts count, large policy change is vital.'",
                    micro: {
                        title: "Environmental Phrases",
                        instruction: "Find expressions for 'renewable energy' and 'carbon footprint'.",
                        example: "French: L'empreinte carbone."
                    }
                },
                a: {
                    prompt: "Evaluate whether economic growth can truly be decoupled from environmental resource depletion.",
                    tip: "Use advanced argumentative frameworks: 'notably', 'conversely', 'paradoxically'.",
                    micro: {
                        title: "Policy Terminology",
                        instruction: "Translate terms like 'biodiversity', 'sustainability', and 'circular economy'.",
                        example: "Spanish: Economía circular."
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
        },
        {
            id: 402,
            title: "Friendship & Connection",
            subtitle: "Nurturing deep bonds in a fast world",
            levels: {
                b: {
                    prompt: "Describe your best friend in 3 simple words.",
                    tip: "Use clear adjectives: 'kind', 'funny', 'honest'.",
                    micro: {
                        title: "Friendship Basics",
                        instruction: "Learn how to say 'friend', 'trust', and 'together'.",
                        example: "Spanish: Amigo, Confianza."
                    }
                },
                i: {
                    prompt: "How have your friendships evolved over time as life becomes busier?",
                    tip: "Use present perfect forms: 'We have stayed close...', 'We have grown...'",
                    micro: {
                        title: "Relationship Idioms",
                        instruction: "Find expressions for 'to keep in touch' and 'to hit it off'.",
                        example: "French: Garder le contact."
                    }
                },
                a: {
                    prompt: "In an era of mobility and remote life, how is the nature of lifelong community changing?",
                    tip: "Use deep reflective vocabulary: 'ephemeral', 'enduring', 'interconnectedness'.",
                    micro: {
                        title: "Nuanced Qualities",
                        instruction: "Translate abstract values like 'empathy', 'reciprocation', and 'loyalty'.",
                        example: "Greek: Ενσυναίσθηση, Αφοσίωση."
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
        },
        {
            id: 502,
            title: "Books & Storytelling",
            subtitle: "Exploring worlds through words and literature",
            levels: {
                b: {
                    prompt: "What was the last book or article you read? Did you like it?",
                    tip: "Use past tense starters: 'I read...', 'It was good...'",
                    micro: {
                        title: "Book Terms",
                        instruction: "Learn words for 'author', 'chapter', and 'story'.",
                        example: "Italian: L'autore, il capitolo."
                    }
                },
                i: {
                    prompt: "Do you prefer reading physical printed books or digital e-readers? Why?",
                    tip: "Use preference verbs: 'I prefer...', 'I tend to choose...'",
                    micro: {
                        title: "Literary Genres",
                        instruction: "Translate 4 genres like fiction, biography, mystery, or fantasy.",
                        example: "Spanish: Novela negra, Fantasía."
                    }
                },
                a: {
                    prompt: "Why do certain ancient myths and classic novels continue to resonate across cultures centuries later?",
                    tip: "Use analytical framing: 'attributable to', 'underlying human archetype', 'timelessness'.",
                    micro: {
                        title: "Narrative Nuance",
                        instruction: "Find terms for 'plot twist', 'foreshadowing', and 'protagonist'.",
                        example: "French: Le protagoniste, le coup de théâtre."
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
