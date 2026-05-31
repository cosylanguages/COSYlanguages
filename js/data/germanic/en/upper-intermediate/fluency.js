(function() {
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];

    const data = [
        {
            "id": "en_upper_intermediate_environment_008",
            "t": "The future of the world in 50 years",
            "h": [
                "What technological changes do you expect?",
                "How will the environment look?",
                "Will social structures be different?",
                "Is there anything you are worried about?",
                "What makes you optimistic about the future?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "environment",
            "sub_theme": null,
            "word": "The future of the world in 50 years",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The future of the world in 50 years",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_environment_009",
            "t": "The impact of climate change on local communities",
            "h": [
                "How has your local area changed?",
                "What specific risks do people face?",
                "Who is most vulnerable?",
                "Are enough measures being taken?",
                "What can individuals do to make a difference?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "environment",
            "sub_theme": null,
            "word": "The impact of climate change on local communities",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The impact of climate change on local communities",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_people_001",
            "t": "A belief you hold that most people around you don't share",
            "h": [
                "What is the belief?",
                "When did you form it?",
                "Have you ever been challenged on it?",
                "Does it affect your relationships?",
                "Has it ever changed because of a conversation?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "people",
            "sub_theme": null,
            "word": "A belief you hold that most people around you don't share",
            "form": "phrase",
            "definitions": [
                {
                    "text": "A belief you hold that most people around you don't share",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_social_027",
            "t": "What you would do if you weren't afraid",
            "h": [
                "What is one thing fear is stopping you from doing?",
                "Is it a rational or irrational fear?",
                "Has fear ever held you back and then you regretted it?",
                "What would your life look like on the other side of that fear?",
                "What would you say to someone facing the same fear?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "social",
            "sub_theme": null,
            "word": "What you would do if you weren't afraid",
            "form": "phrase",
            "definitions": [
                {
                    "text": "What you would do if you weren't afraid",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_places_001",
            "t": "The best and worst thing about where you grew up",
            "h": [
                "What shaped you most about that place?",
                "What do you feel grateful for?",
                "What do you wish had been different?",
                "How did it form your values?",
                "Would you raise children there?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "places",
            "sub_theme": null,
            "word": "The best and worst thing about where you grew up",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The best and worst thing about where you grew up",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_health_medicine_004",
            "t": "How you handle stress",
            "h": [
                "What are your go-to strategies?",
                "Do you think you handle stress well?",
                "What makes you most stressed?",
                "Has your relationship with stress changed?",
                "What advice would you give someone who struggles with stress?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "health_medicine",
            "sub_theme": "wellbeing",
            "word": "How you handle stress",
            "form": "phrase",
            "definitions": [
                {
                    "text": "How you handle stress",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_050",
            "t": "Something you used to judge and now understand",
            "h": [
                "What was it?",
                "What did you think before?",
                "What changed your perspective?",
                "Do you feel embarrassed about your old view?",
                "Has this made you less judgemental in general?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": null,
            "word": "Something you used to judge and now understand",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Something you used to judge and now understand",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_people_002",
            "t": "What friendship means to you as an adult",
            "h": [
                "Is adult friendship different from childhood friendship?",
                "How many close friends do you have?",
                "How do you maintain friendships across distance?",
                "Have you outgrown a friendship?",
                "What makes a friendship last?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "people",
            "sub_theme": "relationships",
            "word": "What friendship means to you as an adult",
            "form": "phrase",
            "definitions": [
                {
                    "text": "What friendship means to you as an adult",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_time_001",
            "t": "A time you got something completely wrong",
            "h": [
                "What happened?",
                "How long before you realised?",
                "What was the cost of being wrong?",
                "How did you handle it?",
                "What did you learn?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "time",
            "sub_theme": null,
            "word": "A time you got something completely wrong",
            "form": "phrase",
            "definitions": [
                {
                    "text": "A time you got something completely wrong",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_social_028",
            "t": "Your complicated relationship with social media",
            "h": [
                "Do you love it, hate it, or both?",
                "What do you get from it that you can't get elsewhere?",
                "Have you ever felt worse after using it?",
                "Do you think it changes how you present yourself?",
                "If you could redesign social media, what would you change?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "social",
            "sub_theme": null,
            "word": "Your complicated relationship with social media",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Your complicated relationship with social media",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_social_029",
            "t": "The most overrated thing in modern life",
            "h": [
                "What is it?",
                "Why do people value it so much?",
                "When did you realise you didn't think it was worth the hype?",
                "Does your opinion get a reaction from others?",
                "What would you replace it with?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "social",
            "sub_theme": null,
            "word": "The most overrated thing in modern life",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The most overrated thing in modern life",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_051",
            "t": "A moment that changed how you see yourself",
            "h": [
                "What happened?",
                "Were you expecting it to affect you?",
                "Did it change you immediately or gradually?",
                "Is the version of you after this moment better?",
                "Would you share this with someone close to you?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": null,
            "word": "A moment that changed how you see yourself",
            "form": "phrase",
            "definitions": [
                {
                    "text": "A moment that changed how you see yourself",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_052",
            "t": "Something you are quietly proud of",
            "h": [
                "What is it?",
                "Why quietly — why not loudly?",
                "How long did it take?",
                "Do the people close to you know about it?",
                "What does this say about what you value?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": null,
            "word": "Something you are quietly proud of",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Something you are quietly proud of",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_people_003",
            "t": "Your personal theory about why people are the way they are",
            "h": [
                "Is it nature, upbringing, or something else?",
                "Do you think people can fundamentally change?",
                "Has a person ever surprised you completely?",
                "Do you think you understand people well?",
                "What is the biggest mistake people make about each other?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "people",
            "sub_theme": null,
            "word": "Your personal theory about why people are the way they are",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Your personal theory about why people are the way they are",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_053",
            "t": "What you think about ambition",
            "h": [
                "Are you an ambitious person?",
                "Is ambition always a good thing?",
                "Can ambition damage your personal life?",
                "Do you admire highly ambitious people?",
                "How much is enough?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "cognitive_processes",
            "word": "What you think about ambition",
            "form": "phrase",
            "definitions": [
                {
                    "text": "What you think about ambition",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_054",
            "t": "The version of yourself five years ago",
            "h": [
                "What were you doing?",
                "What did you worry about?",
                "What did you think your life would look like now?",
                "What was the most important thing you didn't know yet?",
                "Would you and your past self get along?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": null,
            "word": "The version of yourself five years ago",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The version of yourself five years ago",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_055",
            "t": "How you make difficult decisions",
            "h": [
                "Do you follow your head or your gut?",
                "Do you make decisions quickly or slowly?",
                "Do you ask for advice or decide alone?",
                "What is the hardest decision you have ever made?",
                "Do you usually feel at peace with your decisions afterwards?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": null,
            "word": "How you make difficult decisions",
            "form": "phrase",
            "definitions": [
                {
                    "text": "How you make difficult decisions",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_emotions_001",
            "t": "Nostalgia and what it does to you",
            "h": [
                "What do you feel nostalgic about?",
                "Is nostalgia comforting or painful?",
                "Do you think the past was really better or just different?",
                "Does nostalgia ever stop you moving forward?",
                "What is a smell, sound or taste that triggers a memory?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "emotions",
            "sub_theme": null,
            "word": "Nostalgia and what it does to you",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Nostalgia and what it does to you",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_social_030",
            "t": "Fame — punishment or reward?",
            "h": [
                "Would you want to be famous?",
                "What kind of famous would you be?",
                "What would you lose?",
                "Do you think most famous people are happy?",
                "What is the difference between fame and respect?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "social",
            "sub_theme": null,
            "word": "Fame — punishment or reward?",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Fame — punishment or reward?",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_056",
            "t": "What bores you and what fascinates you",
            "h": [
                "What topic or activity could you talk about for hours?",
                "What can you absolutely not sit through?",
                "Does what fascinates you say something about you as a person?",
                "Has something that once bored you become interesting?",
                "What is something you find fascinating that surprises people?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": null,
            "word": "What bores you and what fascinates you",
            "form": "phrase",
            "definitions": [
                {
                    "text": "What bores you and what fascinates you",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_time_002",
            "t": "A time you had to start again",
            "h": [
                "What happened before the restart?",
                "Was it a choice or did life force it?",
                "What was the hardest part of beginning again?",
                "What did you keep from before?",
                "Are you glad it happened?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "time",
            "sub_theme": null,
            "word": "A time you had to start again",
            "form": "phrase",
            "definitions": [
                {
                    "text": "A time you had to start again",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_people_004",
            "t": "What people get wrong about you",
            "h": [
                "What is the most common misconception?",
                "Where does it come from?",
                "Does it bother you?",
                "Do you try to correct it or let it go?",
                "Is there any truth in it at all?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "people",
            "sub_theme": null,
            "word": "What people get wrong about you",
            "form": "phrase",
            "definitions": [
                {
                    "text": "What people get wrong about you",
                    "examples": []
                }
            ],
            "emoji": "📝"
        }
    ];

    const psychData = [
        {
            "id": "en_upper_intermediate_psychology_001",
            "t": "The AI Literacy Gap",
            "h": [
                "Why do we feel so confident using generative AI while our AI literacy lags behind?",
                "What are the risks of using AI without understanding its limitations?",
                "How can we improve AI literacy in schools and workplaces?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The AI Literacy Gap",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The AI Literacy Gap",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_002",
            "t": "Accountability Diffusion in AI",
            "h": [
                "Why do AI systems make responsibility feel like no one’s job?",
                "Who should be responsible when an AI makes a harmful mistake?",
                "How can we ensure human accountability in automated systems?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Accountability Diffusion in AI",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Accountability Diffusion in AI",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_003",
            "t": "The Action Bias",
            "h": [
                "Why do we prefer doing something to doing nothing?",
                "In what situations is 'strategic waiting' better than immediate action?",
                "Have you ever made a situation worse by acting too quickly?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Action Bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Action Bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_004",
            "t": "The Affect Heuristic",
            "h": [
                "Why do we rely on our current emotions when making quick decisions?",
                "How does being in a good or bad mood change your perception of risk?",
                "Can we ever truly separate logic from emotion in decision-making?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Affect Heuristic",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Affect Heuristic",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_005",
            "t": "The Ambiguity Effect",
            "h": [
                "Why do we prefer options we know over those with unknown probabilities?",
                "How does the fear of the unknown hold people back in their careers?",
                "Why do we often choose a 'safe' option even if it's clearly inferior?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Ambiguity Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Ambiguity Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_006",
            "t": "The Anchoring Bias",
            "h": [
                "Why do we compare everything to the first piece of information we received?",
                "How do retailers use anchoring to make sales look more attractive?",
                "How can you protect yourself from anchoring during a negotiation?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Anchoring Bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Anchoring Bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_007",
            "t": "The Attentional Bias",
            "h": [
                "Why do we focus more on some things than others?",
                "How do our recurring thoughts shape what we notice in our environment?",
                "Can we train our attention to notice things we usually ignore?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Attentional Bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Attentional Bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_008",
            "t": "The Authority Bias",
            "h": [
                "Why do we always trust the doctor or 'expert', even though they might be wrong?",
                "What are the dangers of blind obedience to authority?",
                "How can we respectfully challenge authority when something seems wrong?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Authority Bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Authority Bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_009",
            "t": "The Automation Bias",
            "h": [
                "Why do we accept the first plausible AI solution and stop searching?",
                "How does over-reliance on GPS or autocorrect affect our own skills?",
                "What happens when automated systems give incorrect advice that we follow?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Automation Bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Automation Bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_010",
            "t": "The Availability Heuristic",
            "h": [
                "Why do we tend to think that things that happened recently are more likely to happen again?",
                "How does media coverage of rare events (like shark attacks) distort our fears?",
                "How can we use statistics to counter the availability heuristic?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Availability Heuristic",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Availability Heuristic",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_011",
            "t": "The Bandwagon Effect",
            "h": [
                "Why do we support opinions as they become more popular?",
                "Can you think of a fashion or technology trend you followed just because everyone else did?",
                "How does the bandwagon effect influence political elections?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Bandwagon Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Bandwagon Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_012",
            "t": "The Barnum Effect",
            "h": [
                "Why do we believe our horoscopes or vague personality tests?",
                "How do 'psychics' use general statements to seem like they know you personally?",
                "Why is it so comforting to feel like a generic description is 'uniquely' about us?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Barnum Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Barnum Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_013",
            "t": "The Base Rate Fallacy",
            "h": [
                "Why do we rely on specific, striking information over broad statistics?",
                "Why are we more afraid of flying than driving, despite the statistics?",
                "How can we train ourselves to look at the 'big picture' numbers?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Base Rate Fallacy",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Base Rate Fallacy",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_014",
            "t": "Belief Perseverance",
            "h": [
                "Why do we maintain the same beliefs, even when we are proved wrong?",
                "Why is it so painful to admit that a core belief was incorrect?",
                "How can we create a culture where changing one's mind is seen as a strength?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Belief Perseverance",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Belief Perseverance",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_015",
            "t": "The Benjamin Franklin Effect",
            "h": [
                "Why do we like someone more after doing them a favor?",
                "How can you use this effect to improve a difficult relationship at work?",
                "Why does our brain try to justify our actions by changing our feelings?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Benjamin Franklin Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Benjamin Franklin Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_016",
            "t": "Bikeshedding",
            "h": [
                "Why do we focus on trivial things while ignoring complex, important issues?",
                "Why is it easier to argue about office coffee than the company's 10-year strategy?",
                "How can leaders keep meetings focused on high-value topics?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Bikeshedding",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Bikeshedding",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_017",
            "t": "Bounded Rationality",
            "h": [
                "Why are we satisfied by 'good enough' instead of the perfect solution?",
                "How do time pressure and limited information affect our choices?",
                "When is 'satisficing' actually a better strategy than optimizing?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Bounded Rationality",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Bounded Rationality",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_018",
            "t": "Choice Overload",
            "h": [
                "Why do we have a harder time choosing when we have more options?",
                "Have you ever walked out of a shop because there were too many varieties of a product?",
                "How can we simplify our lives to avoid choice paralysis?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Choice Overload",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Choice Overload",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_019",
            "t": "Cognitive Dissonance",
            "h": [
                "Why is it so hard to change someone's beliefs, even with facts?",
                "How do we justify our own behaviors when they contradict our values?",
                "Can cognitive dissonance be a positive force for personal growth?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Cognitive Dissonance",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Cognitive Dissonance",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_020",
            "t": "Decision Fatigue",
            "h": [
                "Why do we make worse decisions at the end of the day?",
                "How do supermarkets and shops exploit our tired brains?",
                "What strategies can we use to protect our most important decisions?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Decision Fatigue",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Decision Fatigue",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_021",
            "t": "Declinism",
            "h": [
                "Why do we think the past was better than the future?",
                "Is the world actually getting worse, or are we just remembering the past incorrectly?",
                "How does declinism affect our motivation to solve modern problems?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Declinism",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Declinism",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_022",
            "t": "The Decoy Effect",
            "h": [
                "Why do we feel more strongly about one option after a third, 'useless' one is added?",
                "How do companies use 'small, medium, large' pricing to trick us?",
                "How can we spot decoys when making a purchase?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Decoy Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Decoy Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_023",
            "t": "The Dunning–Kruger Effect",
            "h": [
                "Why do we fail to accurately gauge our own abilities?",
                "Why do beginners often feel more confident than experts?",
                "How can we develop more accurate self-awareness?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Dunning–Kruger Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Dunning–Kruger Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_024",
            "t": "The Endowment Effect",
            "h": [
                "Why do we value items more simply because they belong to us?",
                "Why is it so hard to declutter or sell things we no longer use?",
                "How does this effect influence the housing and stock markets?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Endowment Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Endowment Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_025",
            "t": "The Framing Effect",
            "h": [
                "Why do our decisions depend on how options are presented to us?",
                "Would you prefer a '90% fat-free' burger or one with '10% fat'?",
                "How can we 'reframe' negative situations in our lives to be more positive?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Framing Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Framing Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_026",
            "t": "The Fundamental Attribution Error",
            "h": [
                "Why do we underestimate the influence of the situation on people’s behavior?",
                "Why do we judge others by their character but ourselves by our circumstances?",
                "How can practicing empathy help us overcome this bias?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Fundamental Attribution Error",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Fundamental Attribution Error",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_027",
            "t": "The Halo Effect",
            "h": [
                "Why do positive impressions in one area (like looks) influence our opinions in others?",
                "How does the halo effect impact job interviews and performance reviews?",
                "Can a 'negative halo' (the Horns effect) destroy someone's reputation unfairly?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Halo Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Halo Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_028",
            "t": "Hindsight Bias",
            "h": [
                "Why do unpredictable events only seem predictable after they occur?",
                "How does 'I knew it all along' thinking stop us from learning from mistakes?",
                "How can we keep more accurate records of our predictions before events happen?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Hindsight Bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Hindsight Bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_029",
            "t": "The IKEA Effect",
            "h": [
                "Why do we place disproportionately high value on things we helped to create?",
                "Does a meal taste better if you cooked it yourself?",
                "How can companies use the IKEA effect to build customer loyalty?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The IKEA Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The IKEA Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_030",
            "t": "The Illusion of Control",
            "h": [
                "Why do we think we have more control over the world than we actually do?",
                "Why do people press the 'close door' button in elevators even if it's not connected?",
                "How does the illusion of control help or hurt our mental health?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Illusion of Control",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Illusion of Control",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_031",
            "t": "In-group Bias",
            "h": [
                "Why do we treat our in-group better than we do our out-group?",
                "How does this bias contribute to tribalism and social conflict?",
                "How can we expand our 'in-group' to include a wider range of people?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "In-group Bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "In-group Bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_032",
            "t": "Loss Aversion",
            "h": [
                "Why does the pain of losing 100 euros feel twice as strong as the joy of winning 100 euros?",
                "How does loss aversion stop people from making necessary changes in their lives?",
                "How do marketers use 'limited time offers' to exploit our fear of loss?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Loss Aversion",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Loss Aversion",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_033",
            "t": "Naive Realism",
            "h": [
                "Why do we believe we have an objective understanding of the world?",
                "Why is it so easy to believe that people who disagree with us are 'biased' while we are 'rational'?",
                "How can we stay humble about our own perspectives?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Naive Realism",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Naive Realism",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_034",
            "t": "The Negativity Bias",
            "h": [
                "Why does one piece of criticism hurt more than ten compliments feel good?",
                "Why is the news always so depressing?",
                "How can we train our brains to notice and appreciate positive events?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Negativity Bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Negativity Bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_035",
            "t": "The Omission Bias",
            "h": [
                "Why do we judge harmful actions as worse than equally harmful failures to act?",
                "Is 'doing nothing' really a neutral choice if it leads to a bad outcome?",
                "How does this bias affect our moral and legal decisions?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Omission Bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Omission Bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_036",
            "t": "The Optimism Bias",
            "h": [
                "Why do we overestimate the probability of our own success?",
                "How does optimism bias help us take risks but also lead to poor planning?",
                "Can we be 'realistically optimistic'?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Optimism Bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Optimism Bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_037",
            "t": "The Ostrich Effect",
            "h": [
                "Why do we prefer to ignore negative information?",
                "Why do investors stop checking their accounts when the market is down?",
                "What are the long-term costs of 'burying your head in the sand'?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Ostrich Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Ostrich Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_038",
            "t": "The Peak-end Rule",
            "h": [
                "How do our memories differ from our actual experiences?",
                "Why do we judge a whole holiday by the final day or the one big event?",
                "How can we use this rule to design better experiences for ourselves and others?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Peak-end Rule",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Peak-end Rule",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_039",
            "t": "The Planning Fallacy",
            "h": [
                "Why do we underestimate how long it will take to complete a task?",
                "Why is it so hard to learn from past experiences of being late or over-budget?",
                "How can we use 'buffer time' to create more realistic schedules?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Planning Fallacy",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Planning Fallacy",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_040",
            "t": "Rosy Retrospection",
            "h": [
                "Why do we think the 'good old days' were so much better than they really were?",
                "How does our brain filter out negative memories over time?",
                "Does rosy retrospection make us more or less happy in the present?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Rosy Retrospection",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Rosy Retrospection",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_041",
            "t": "The Self-serving Bias",
            "h": [
                "Why do we blame external factors for our mistakes but take full credit for our successes?",
                "How does this bias affect team dynamics and relationships?",
                "How can we learn to take more 'constructive' responsibility for our failures?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Self-serving Bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Self-serving Bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_042",
            "t": "The Spotlight Effect",
            "h": [
                "Why do we feel like we stand out more than we really do?",
                "Why are we so worried about a bad hair day or a small mistake that nobody else notices?",
                "How can the spotlight effect hold us back from being ourselves?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Spotlight Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Spotlight Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_043",
            "t": "The Sunk Cost Fallacy",
            "h": [
                "Why do we continue with a losing investment just because we've already spent money or time on it?",
                "Have you ever finished a book or movie you hated just because you started it?",
                "How can we develop the courage to 'cut our losses'?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "The Sunk Cost Fallacy",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The Sunk Cost Fallacy",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_044",
            "t": "Survivorship Bias",
            "h": [
                "Why do we misjudge groups by only looking at the 'winners' who made it through?",
                "Why is it dangerous to only study the habits of billionaires to learn how to be rich?",
                "What can we learn from the 'failures' that the 'winners' didn't experience?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Survivorship Bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Survivorship Bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_045",
            "t": "Levels of Processing Effect",
            "h": [
                "What is Levels of Processing Effect and how does it affect us?",
                "Can you think of a real-life example of Levels of Processing Effect?",
                "How can we overcome or mitigate the effects of Levels of Processing Effect?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Levels of Processing Effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Levels of Processing Effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_046",
            "t": "Illusion of Explanatory Depth",
            "h": [
                "What is Illusion of Explanatory Depth and how does it affect us?",
                "Can you think of a real-life example of Illusion of Explanatory Depth?",
                "How can we overcome or mitigate the effects of Illusion of Explanatory Depth?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "Illusion of Explanatory Depth",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Illusion of Explanatory Depth",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_047",
            "t": "hard-easy effect",
            "h": [
                "What is hard-easy effect and how does it affect our judgment?",
                "Can you give an example of the hard-easy effect in action?",
                "How can we be more aware of the hard-easy effect?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "hard-easy effect",
            "form": "phrase",
            "definitions": [
                {
                    "text": "hard-easy effect",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_048",
            "t": "impact bias",
            "h": [
                "What is impact bias and how does it affect our judgment?",
                "Can you give an example of the impact bias in action?",
                "How can we be more aware of the impact bias?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "impact bias",
            "form": "phrase",
            "definitions": [
                {
                    "text": "impact bias",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_upper_intermediate_psychology_049",
            "t": "incentivization",
            "h": [
                "What is incentivization and how does it affect our judgment?",
                "Can you give an example of the incentivization in action?",
                "How can we be more aware of the incentivization?"
            ],
            "lang": "en",
            "level": "upper_intermediate",
            "theme": "psychology",
            "sub_theme": "biases",
            "word": "incentivization",
            "form": "phrase",
            "definitions": [
                {
                    "text": "incentivization",
                    "examples": []
                }
            ],
            "emoji": "📝"
        }
    ];

    window.speakingData[lang]["talkThatTalk"].push(...data, ...psychData);
})();