import os

sessions_data = [
    # 1. KUS - Screen Time (B1)
    {
        "filepath": "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/screen-time-kids-development-intermediate.html",
        "title": "Scientists Tracked Kids for 8 Years — Screen Time Result (B1)",
        "club_name": "Keeping Up with Science",
        "club_href": "../../keeping-up-with-science.html",
        "theme_color": "linear-gradient(135deg, #0F6E56, #073822)",
        "icon": "🔬",
        "level_str": "Intermediate (B1)",
        "level_code": "B1",
        "theme": "Child Development, Screen Time, & Behavioral Science",
        "date": "26 August 2026",
        "summary": "An 8-year longitudinal study followed children from early childhood into adolescence to examine how daily screen time alters attention spans, emotional regulation, and cognitive growth.",
        "url": "https://www.sciencedaily.com/releases/2026/08/260815064803.htm",
        "source_name": "ScienceDaily (August 15, 2026)",
        "audio_title": "Audio Brief: 8-Year Child Screen Time Research",
        "vocab": [
            ("longitudinal study", "A research investigation that tracks the same group of individuals over an extended period.", "Researchers relied on a longitudinal study to observe how habits shift over eight years.", ["cross-sectional survey"]),
            ("cognitive growth", "The gradual development of mental skills like thinking, memory, and problem-solving.", "Balanced screen habits support healthy cognitive growth during school years.", ["mental decline"]),
            ("screen exposure", "The total amount of time spent looking at digital devices such as smartphones or screens.", "Parents monitored daily screen exposure to notice subtle mood changes.", ["screen absence"]),
            ("emotional regulation", "The ability to manage and respond to emotional experiences appropriately.", "Unrestricted device use can make emotional regulation more challenging for younger kids.", ["emotional instability"]),
            ("attention span", "The length of time a person can concentrate on a single task without distraction.", "Reading physical books often helps children lengthen their attention span.", ["distractibility"])
        ],
        "round1": [
            "How many hours of screen time did you have as a child, and how does that compare to kids today?",
            "What daily activities in your childhood replaced digital entertainment?",
            "Do you think digital devices help or hinder early communication skills?"
        ],
        "round2": [
            "If an 8-year study shows screen time impacts attention, should schools limit digital tablet use in class?",
            "How can parents teach children healthy digital boundaries without completely banning screens?",
            "What strategies help adults reduce their own screen time when working long hours?"
        ],
        "grammar": {
            "title": "Expressing Cause & Result (B1)",
            "rule": "Use connectors like <strong>due to</strong>, <strong>as a result</strong>, and <strong>leads to</strong> to describe cause and effect relationships clearly.",
            "examples": [
                "Screen exposure increased, <strong>as a result</strong> children spent less time playing outdoors.",
                "Poor sleep patterns are often <strong>due to</strong> late-night device usage.",
                "Consistent reading <strong>leads to</strong> stronger vocabulary development over time."
            ]
        },
        "teacher_notes": "Guide B1 learners to discuss screen habits neutrally without judging parenting choices. Encourage using cause-and-effect connectors during Round 2."
    },
    # 2. KUS - Multilingual Brains (A2)
    {
        "filepath": "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/multilingual-brains-younger-elementary.html",
        "title": "Multilingual People Have Younger Brains (A2)",
        "club_name": "Keeping Up with Science",
        "club_href": "../../keeping-up-with-science.html",
        "theme_color": "linear-gradient(135deg, #0F6E56, #073822)",
        "icon": "🧠",
        "level_str": "Elementary (A2)",
        "level_code": "A2",
        "theme": "Neuroplasticity & Language Learning",
        "date": "26 August 2026",
        "summary": "Scientists discovered that speaking more than one language keeps your brain active and healthy, making it appear up to 13 years younger.",
        "url": "https://www.sciencedaily.com/releases/2026/08/260821012226.htm",
        "source_name": "ScienceDaily (August 21, 2026)",
        "audio_title": "Audio Brief: Languages and Brain Age",
        "vocab": [
            ("multilingual", "Able to speak two or more languages well.", "She is multilingual and speaks English, Spanish, and French fluently.", ["monolingual"]),
            ("brain health", "The state of how well your brain functions in daily life.", "Learning new words every day is great for your brain health.", ["cognitive illness"]),
            ("stay active", "To keep busy and use your mind or body regularly.", "Solving puzzles helps your mind stay active as you grow older.", ["remain idle"]),
            ("memory test", "An exercise to see how well you remember information.", "He scored very high on the memory test after studying languages.", ["forgetfulness"]),
            ("daily habit", "Something you do regularly every single day.", "Reading in a foreign language became her favorite daily habit.", ["rare occurrence"])
        ],
        "round1": [
            "What languages do you speak or want to learn in the future?",
            "When did you start learning your second language?",
            "Do you feel your brain working hard when you speak English?"
        ],
        "round2": [
            "If speaking two languages keeps your brain 13 years younger, why do many people wait to start learning?",
            "What simple daily habit helps you remember new vocabulary words?",
            "How does learning a new language change how you view other cultures?"
        ],
        "grammar": {
            "title": "Comparative Adjectives & Modifiers (A2)",
            "rule": "Use <strong>younger than</strong> or <strong>much more active</strong> to compare brain function and habits.",
            "examples": [
                "Multilingual brains stay <strong>younger than</strong> monolingual brains.",
                "Learning words is <strong>much more effective</strong> when practiced daily.",
                "Her memory is <strong>stronger</strong> today than it was two years ago."
            ]
        },
        "teacher_notes": "Keep language simple for A2 students. Focus on personal motivation for learning languages and daily habits."
    },
    # 3. KUS - Multilingual Brains (B1)
    {
        "filepath": "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/multilingual-brains-younger-intermediate.html",
        "title": "Multilingual People Have Younger Brains (B1)",
        "club_name": "Keeping Up with Science",
        "club_href": "../../keeping-up-with-science.html",
        "theme_color": "linear-gradient(135deg, #0F6E56, #073822)",
        "icon": "🧠",
        "level_str": "Intermediate (B1)",
        "level_code": "B1",
        "theme": "Neuroplasticity & Cognitive Reserve",
        "date": "26 August 2026",
        "summary": "New neuroimaging research demonstrates that bilingual and multilingual adults possess enhanced neural connectivity, delaying cognitive aging by up to 13 years.",
        "url": "https://www.sciencedaily.com/releases/2026/08/260821012226.htm",
        "source_name": "ScienceDaily (August 21, 2026)",
        "audio_title": "Audio Brief: Cognitive Reserve in Multilinguals",
        "vocab": [
            ("cognitive reserve", "The brain's ability to improvise, find alternate neural pathways, and withstand damage.", "Bilingualism builds strong cognitive reserve throughout a person's life.", ["brain vulnerability"]),
            ("neural connectivity", "The network of connections between neurons that process thoughts and memories.", "Switching between languages enhances neural connectivity in executive centers.", ["neural breakdown"]),
            ("delay aging", "To slow down the natural process of getting older or declining.", "Mental exercises and bilingual practice help delay aging in cortical areas.", ["accelerate decline"]),
            ("bilingual advantage", "The cognitive benefit gained from managing two active language systems.", "Researchers frequently measure the bilingual advantage in attention tests.", ["monolingual baseline"]),
            ("mental flexibility", "The capacity to adapt thought processes when faced with new information.", "Speaking multiple tongues improves mental flexibility when solving complex tasks.", ["rigidity"])
        ],
        "round1": [
            "How often do you switch between languages during a typical day?",
            "Have you noticed any changes in your concentration since learning English?",
            "What is the hardest mental challenge when learning a foreign language?"
        ],
        "round2": [
            "How might education systems redesign language courses if cognitive benefits are proven early?",
            "Does code-switching (mixing languages in conversation) strengthen or confuse neural pathways?",
            "In what ways can adult learners achieve brain benefits comparable to childhood bilinguals?"
        ],
        "grammar": {
            "title": "Modals of Ability & Possibility (B1)",
            "rule": "Use <strong>can</strong>, <strong>could</strong>, and <strong>might</strong> to discuss scientific potential and cognitive benefits.",
            "examples": [
                "Bilingual practice <strong>can delay</strong> symptoms of memory loss.",
                "Scientists believe adult learners <strong>could achieve</strong> similar neural growth.",
                "Regular language study <strong>might protect</strong> brain cells against aging."
            ]
        },
        "teacher_notes": "Prompt B1 students to connect their personal language journeys with neuroscientific findings."
    },
    # 4. KUS - Coffee Drinkers (C1)
    {
        "filepath": "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/coffee-drinkers-muscle-hormones-advanced.html",
        "title": "Coffee Drinkers: Fat, Muscle, and Hormones (C1)",
        "club_name": "Keeping Up with Science",
        "club_href": "../../keeping-up-with-science.html",
        "theme_color": "linear-gradient(135deg, #0F6E56, #073822)",
        "icon": "☕",
        "level_str": "Advanced (C1)",
        "level_code": "C1",
        "theme": "Metabolism, Endocrinology, & Physiology",
        "date": "26 August 2026",
        "summary": "Large-scale endocrine research reveals habitual coffee drinkers display favorable visceral fat distribution, preserved lean muscle mass, and distinct biomarker profiles.",
        "url": "https://www.sciencedaily.com/releases/2026/08/260819041228.htm",
        "source_name": "ScienceDaily (August 19, 2026)",
        "audio_title": "Endocrine Biomarkers in Coffee Consumers",
        "vocab": [
            ("visceral fat", "Body fat stored within the abdominal cavity around key internal organs.", "Lower levels of visceral fat reduce risk factors for metabolic syndrome.", ["subcutaneous lipid"]),
            ("endocrine marker", "A biological molecule in blood or tissue that indicates hormonal system function.", "Coffee polyphenols favorably influence key endocrine markers related to insulin.", ["pathological indicator"]),
            ("metabolic rate", "The speed at which the human body converts food into usable energy.", "Caffeine intake modestly elevates basal metabolic rate during active hours.", ["metabolic stasis"]),
            ("lean muscle mass", "The proportion of total body weight composed of muscle tissue excluding fat.", "Habitual coffee consumption was associated with higher preserved lean muscle mass.", ["muscle atrophy"]),
            ("physiological interplay", "The complex mutual interactions between different bodily organs and hormonal pathways.", "Understanding the physiological interplay between gut bioactives and hormones requires multi-omics analysis.", ["isolated function"])
        ],
        "round1": [
            "What role does coffee or tea play in your daily productivity routine?",
            "How do health news headlines about coffee shift public perception over decades?",
            "Do you notice physiological changes when consuming caffeine regularly?"
        ],
        "round2": [
            "How should nutritional science distinguish between correlation and causation in dietary studies?",
            "Given metabolic variability, is it ethical for wellness brands to promote coffee as a therapeutic supplement?",
            "What implications do biomarker studies have for personalized medicine and biohacking trends?"
        ],
        "grammar": {
            "title": "Advanced Subjunctive & Hypothesis Structures (C1)",
            "rule": "Use inverted conditionals (e.g., <strong>Were caffeine to be...</strong>) and advanced hypothetical phrases to debate scientific findings.",
            "examples": [
                "<strong>Were caffeine to be classified</strong> as a metabolic modulator, regulations might tighten.",
                "<strong>Had researchers isolated</strong> sweetener variables, results might have proven even clearer.",
                "It is essential that dietary recommendations <strong>be tailored</strong> to individual metabolic profiles."
            ]
        },
        "teacher_notes": "Facilitate a high-level academic debate on nutritional science methodologies, biomarker interpretation, and correlation vs causation."
    },
    # 5. KUS - Human Family Tree (C1)
    {
        "filepath": "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/rewriting-human-family-tree-advanced.html",
        "title": "Rewriting the Human Family Tree (C1)",
        "club_name": "Keeping Up with Science",
        "club_href": "../../keeping-up-with-science.html",
        "theme_color": "linear-gradient(135deg, #0F6E56, #073822)",
        "icon": "🦴",
        "level_str": "Advanced (C1)",
        "level_code": "C1",
        "theme": "Paleoanthropology & Human Evolution",
        "date": "26 August 2026",
        "summary": "Fossil discoveries and ancient DNA sequencing challenge traditional linear models of hominin evolution, suggesting a complex braided stream of interbreeding species.",
        "url": "https://www.sciencedaily.com/releases/2026/08/260820002413.htm",
        "source_name": "ScienceDaily (August 20, 2026)",
        "audio_title": "Paleoanthropological Paradigm Shifts",
        "vocab": [
            ("paleoanthropology", "The scientific study of human evolution through fossilized remains.", "Recent discoveries in paleoanthropology are overturning decades of consensus.", ["modern sociology"]),
            ("hominin lineage", "The evolutionary line comprising modern humans and extinct ancestral relatives.", "Genetic mapping reveals unexpected branches within our hominin lineage.", ["unrelated clade"]),
            ("braided stream model", "A model of evolution where lineages separate, adapt, and periodically interbreed.", "Anthropologists increasingly favor a braided stream model over a straight evolutionary tree.", ["linear progression"]),
            ("genomic sequencing", "The process of determining the entire DNA sequence of an organism's genome.", "Ancient genomic sequencing unlocked hidden interbreeding events between hominin species.", ["morphological study"]),
            ("paradigm shift", "A fundamental change in the basic concepts and experimental practices of a discipline.", "The discovery of new fossil specimens caused a major paradigm shift in human origin theories.", ["dogmatic persistence"])
        ],
        "round1": [
            "What fascinating facts about prehistoric human ancestors have caught your interest recently?",
            "Why does the origin story of humanity continue to captivate scientists and the public alike?",
            "How does learning about ancient human survival alter your perspective on modern life?"
        ],
        "round2": [
            "If human evolution was a braided stream rather than a linear tree, how does this redefine human identity?",
            "What challenges do paleontologists face when communicating revised scientific models to the general public?",
            "How might future genomic advances reshape our understanding of human adaptation to climate and environment?"
        ],
        "grammar": {
            "title": "Discourse Markers & Nuanced Argumentation (C1)",
            "rule": "Use sophisticated markers like <strong>notwithstanding</strong>, <strong>consequently</strong>, and <strong>in light of</strong> to articulate complex hypotheses.",
            "examples": [
                "<strong>Notwithstanding</strong> earlier fossil evidence, new DNA data alters our evolutionary models.",
                "<strong>In light of</strong> recent genomic sequencing, linear evolutionary trees appear overly simplified.",
                "Lineages repeatedly converged; <strong>consequently</strong>, hominin boundaries were far more fluid."
            ]
        },
        "teacher_notes": "Encourage C1 participants to analyze evolutionary biology metaphors (tree vs braided stream) and critique scientific paradigm shifts."
    },

    # 6. Let's Celebrate - Kiss and Make Up Day (B1)
    {
        "filepath": "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/kiss-and-make-up-day-intermediate.html",
        "title": "Kiss and Make Up Day (B1)",
        "club_name": "Let's Celebrate",
        "club_href": "../../lets-celebrate.html",
        "theme_color": "linear-gradient(135deg, #BA7517, #5C380A)",
        "icon": "🕊️",
        "level_str": "Intermediate (B1)",
        "level_code": "B1",
        "theme": "Forgiveness, Reconciliation, & Interpersonal Repair",
        "date": "25 August 2026",
        "summary": "Observed annually on August 25th, Kiss and Make Up Day offers an official opportunity to let go of grudges, resolve minor conflicts, and rebuild trust in relationships.",
        "url": None,
        "source_name": "Global Observance Ledger",
        "audio_title": "Understanding Reconciliation & Forgiveness",
        "vocab": [
            ("reconciliation", "The restoration of friendly relations after a disagreement or quarrel.", "Reconciliation requires honest effort and active listening from both sides.", ["alienation"]),
            ("hold a grudge", "To maintain feelings of anger or resentment toward someone over past actions.", "Holding a grudge consumes energy that could be spent building positive connections.", ["forgive readily"]),
            ("olive branch", "An offer of peace or goodwill extended to end a disagreement.", "She extended an olive branch by inviting her former friend for coffee.", ["declaration of feud"]),
            ("clear the air", "To remove tension or misunderstandings by discussing issues openly.", "Having an honest talk helped clear the air between the team members.", ["foster resentment"]),
            ("mutual respect", "Shared admiration and consideration between two or more people.", "A strong friendship relies on mutual respect even when opinions differ.", ["disregard"])
        ],
        "round1": [
            "What does 'making up' look like in your culture after a small argument?",
            "Is it easier for you to apologize first or wait for the other person to reach out?",
            "Why do minor misunderstandings sometimes become bigger than they need to be?"
        ],
        "round2": [
            "Why is admitting fault often difficult, even when we value the relationship?",
            "What role does active listening play in repairing trust after a disagreement?",
            "Can dedicated holidays like Kiss and Make Up Day encourage people to take positive action?"
        ],
        "grammar": {
            "title": "Second Conditional for Hypothetical Reconciliation (B1)",
            "rule": "Use <strong>if + past simple, would + infinitive</strong> to discuss hypothetical peaceful resolutions.",
            "examples": [
                "If I <strong>were</strong> in your position, I <strong>would send</strong> a quick message to clear the air.",
                "If people <strong>talked</strong> more openly, fewer grudges <strong>would persist</strong> over time.",
                "She <strong>would offer</strong> an olive branch if she knew how he felt."
            ]
        },
        "teacher_notes": "Maintain a warm, empathetic group atmosphere. Focus on constructive communication skills and language for apologizing and making peace."
    },

    # 7. Greatest Quotes - Dalai Lama (A2)
    {
        "filepath": "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dalai-lama-happier-minds-elementary.html",
        "title": "Dalai Lama: Happier Minds (A2)",
        "club_name": "The Greatest Quotes",
        "club_href": "../../the-greatest-quotes.html",
        "theme_color": "linear-gradient(135deg, #5D4037, #2D1E19)",
        "icon": "📿",
        "level_str": "Elementary (A2)",
        "level_code": "A2",
        "theme": "Compassion, Positive Thinking, & Inner Peace",
        "date": "26 August 2026",
        "quote": "A number of people have said to me, after hearing your thinking, their mind becomes much happier.",
        "quote_author": "Dalai Lama",
        "summary": "Explore how gentle listening, positive words, and mindful thoughts can bring happiness and quiet calm to everyday life.",
        "url": None,
        "source_name": "The Greatest Quotes Archive",
        "audio_title": "Quote Reflection: Dalai Lama on Mindful Happiness",
        "vocab": [
            ("kind words", "Gentle, helpful words spoken to make someone feel good.", "Hearing kind words can turn a difficult day into a good one.", ["harsh criticism"]),
            ("inner peace", "A feeling of calm and quiet happiness inside your heart and mind.", "Meditation and walking in nature help people find inner peace.", ["mental stress"]),
            ("positive thoughts", "Good and hopeful ideas that help you feel happy.", "Focusing on positive thoughts gives you extra energy.", ["negative worries"]),
            ("listen carefully", "To give full attention when another person is talking.", "Good friends listen carefully when you share your feelings.", ["ignore"]),
            ("feel happier", "To experience more joy and satisfaction in life.", "People feel happier when they spend time with loved ones.", ["feel sad"])
        ],
        "round1": [
            "What kind words made you feel happy this week?",
            "Who in your life gives you calm and positive advice?",
            "What do you do when you want your mind to relax?"
        ],
        "round2": [
            "How does listening to positive ideas change your mood during a busy day?",
            "Can one person's happy thinking help a whole group of people feel better?",
            "What simple daily act helps you keep your mind peaceful?"
        ],
        "grammar": {
            "title": "Comparative Forms for Feelings (A2)",
            "rule": "Use <strong>much happier</strong>, <strong>calmer</strong>, or <strong>more peaceful</strong> to describe emotional changes.",
            "examples": [
                "After listening to peaceful music, my mind becomes <strong>much happier</strong>.",
                "Walking in nature makes her feel <strong>calmer</strong> than watching news.",
                "Positive thoughts make daily work <strong>more enjoyable</strong>."
            ]
        },
        "teacher_notes": "Encourage A2 students to share simple personal stories about positive thinking, kindness, and feeling happy."
    },
    # 8. Greatest Quotes - Dalai Lama (B1)
    {
        "filepath": "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dalai-lama-happier-minds-intermediate.html",
        "title": "Dalai Lama: Happier Minds (B1)",
        "club_name": "The Greatest Quotes",
        "club_href": "../../the-greatest-quotes.html",
        "theme_color": "linear-gradient(135deg, #5D4037, #2D1E19)",
        "icon": "📿",
        "level_str": "Intermediate (B1)",
        "level_code": "B1",
        "theme": "Compassion, Mind Training, & Emotional Well-Being",
        "date": "26 August 2026",
        "quote": "A number of people have said to me, after hearing your thinking, their mind becomes much happier.",
        "quote_author": "Dalai Lama",
        "summary": "Examine the psychological impact of compassionate philosophy, active listening, and mental discipline on personal well-being.",
        "url": None,
        "source_name": "The Greatest Quotes Archive",
        "audio_title": "Quote Analysis: Dalai Lama on Emotional Harmony",
        "vocab": [
            ("compassionate mindset", "An attitude focused on understanding and helping relieve the suffering of others.", "Adopting a compassionate mindset transforms how we handle conflicts.", ["indifference"]),
            ("emotional balance", "The state of maintaining mental stability during stressful situations.", "Mindfulness practices foster emotional balance in challenging times.", ["emotional turmoil"]),
            ("uplifting dialogue", "Conversation that encourages, inspires, and inspires hope.", "Engaging in uplifting dialogue leaves participants feeling renewed energy.", ["depressing rant"]),
            ("mental outlook", "A person's general attitude and way of interpreting life events.", "A constructive mental outlook enables people to bounce back from setbacks.", ["pessimism"]),
            ("contemplative wisdom", "Insight gained through deep thought, reflection, and quiet observation.", "Sharing contemplative wisdom helps build stronger community bonds.", ["superficial chatter"])
        ],
        "round1": [
            "Whose ideas or books have had a profound positive effect on your mental outlook?",
            "How does hearing calm, thoughtful perspectives change your reaction to stressful news?",
            "Do you find it easy to practice compassion toward people with whom you disagree?"
        ],
        "round2": [
            "Why does hearing positive, compassionate thinking make human minds happier?",
            "How can individuals protect their emotional balance in an era of constant online noise?",
            "In what ways can we cultivate a habit of offering uplifting dialogue to those around us?"
        ],
        "grammar": {
            "title": "Gerunds as Subjects & Prepositional Objects (B1)",
            "rule": "Use gerunds (<strong>-ing</strong> forms) as noun concepts when discussing psychological states and actions.",
            "examples": [
                "<strong>Hearing positive perspectives</strong> helps quiet anxious thoughts.",
                "They spoke about <strong>cultivating emotional balance</strong> through daily reflection.",
                "<strong>Practicing compassion</strong> benefits the giver as much as the receiver."
            ]
        },
        "teacher_notes": "Encourage B1 participants to reflect on how philosophy and mindfulness influence daily decision-making."
    },

    # 9. Debatable & Relatable - Chatting AI vs Human (A2)
    {
        "filepath": "apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-elementary.html",
        "title": "Chatting with AI vs Chatting with a Human (A2)",
        "club_name": "Debatable & Relatable",
        "club_href": "../../debatable-relatable.html",
        "theme_color": "linear-gradient(135deg, #993C1D, #4D1E0E)",
        "icon": "💬",
        "level_str": "Elementary (A2)",
        "level_code": "A2",
        "theme": "Artificial Intelligence vs Human Conversation",
        "date": "26 August 2026",
        "summary": "We explore chatting with an AI versus chatting with a real person as a friend, teacher, penpal, or helper. Which do you prefer for practice and conversation?",
        "url": None,
        "source_name": "Debatable & Relatable Placards",
        "audio_title": "Debate Overview: AI vs Human Chatting",
        "vocab": [
            ("chat partner", "A person or chatbot you talk to for practice or fun.", "An AI can be a helpful chat partner when you practice English late at night.", ["solitary speaker"]),
            ("fast answers", "Responses that arrive quickly without waiting.", "The chatbot gives fast answers to basic questions.", ["delayed response"]),
            ("real feelings", "True emotions like happiness, sadness, or empathy.", "A real human friend understands your real feelings best.", ["synthetic output"]),
            ("practice practice", "Doing an activity regularly to get better.", "Chatting daily is good language practice.", ["inactivity"]),
            ("patient listener", "Someone who waits quietly and listens without interrupting.", "The computer program is always a patient listener.", ["impatient talker"])
        ],
        "round1": [
            "Have you ever chatted with an AI chatbot like ChatGPT?",
            "Do you prefer asking a friend for advice or searching with AI?",
            "What is your favorite thing about chatting with a real human friend?"
        ],
        "round2": [
            "Is chatting with an AI helper better for learning English than chatting with a real person?",
            "Can an AI chatbot ever be a true friend, or is human contact always necessary?",
            "What should you never share when chatting with an online chatbot?"
        ],
        "grammar": {
            "title": "Expressing Opinions with 'I think' & 'In my opinion' (A2)",
            "rule": "Use simple opinion phrases to state your preference clearly.",
            "examples": [
                "<strong>In my opinion</strong>, chatting with AI is fast and easy.",
                "<strong>I think</strong> human friends understand our feelings better.",
                "<strong>I believe</strong> both AI and humans can help us learn languages."
            ]
        },
        "teacher_notes": "Help A2 students express pros and cons using basic opinion phrases. Keep tone open and light."
    },
    # 10. Debatable & Relatable - Chatting AI vs Human (B1)
    {
        "filepath": "apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-intermediate.html",
        "title": "Chatting with AI vs Chatting with a Human (B1)",
        "club_name": "Debatable & Relatable",
        "club_href": "../../debatable-relatable.html",
        "theme_color": "linear-gradient(135deg, #993C1D, #4D1E0E)",
        "icon": "🤖",
        "level_str": "Intermediate (B1)",
        "level_code": "B1",
        "theme": "Digital Companionship & Psychological Boundaries",
        "date": "26 August 2026",
        "summary": "From virtual psychologists and language tutors to romantic partners and penpals: how does conversing with AI compare to authentic human interaction?",
        "url": None,
        "source_name": "Debatable & Relatable Placards",
        "audio_title": "Debate Placard: AI Companion vs Human Connection",
        "vocab": [
            ("digital companion", "An artificial intelligence program designed to simulate conversation and companionship.", "Many people use a digital companion for language practice or late-night chats.", ["human confidant"]),
            ("emotional empathy", "The capacity to genuinely feel and share another person's emotional state.", "AI can generate supportive words, but it lacks genuine emotional empathy.", ["robotic apathy"]),
            ("judgment-free space", "An environment where one can speak freely without fear of criticism.", "Users appreciate that chatbots offer a judgment-free space for confidential questions.", ["critical scrutiny"]),
            ("authentic connection", "A genuine, reciprocal bond formed between real human beings.", "Building an authentic connection requires mutual vulnerability and shared experiences.", ["simulated interaction"]),
            ("parasocial bond", "A one-sided relationship where a user feels emotional closeness to a non-human entity.", "Developing a parasocial bond with an AI model can sometimes replace real-life socializing.", ["reciprocal friendship"])
        ],
        "round1": [
            "In what roles (tutor, assistant, sounding board) do you currently find AI most helpful?",
            "Have you ever felt relieved to talk to an AI because it won't judge you?",
            "What is the biggest difference in feeling when receiving a message from a friend vs an AI?"
        ],
        "round2": [
            "If someone uses an AI as a therapist or sounding board, is that a healthy coping tool or a risk?",
            "Can AI conversations help lonely people build confidence, or will it isolate them further?",
            "What boundaries should we establish when interacting with conversational AI in daily life?"
        ],
        "grammar": {
            "title": "Concession & Contrast Structures (B1)",
            "rule": "Use <strong>although</strong>, <strong>whereas</strong>, and <strong>on the one hand / on the other hand</strong> to weigh both sides of the debate.",
            "examples": [
                "<strong>Although</strong> AI provides immediate responses, it cannot offer genuine empathy.",
                "AI is available 24/7, <strong>whereas</strong> human friends have limited time.",
                "<strong>On the one hand</strong> AI is convenient; <strong>on the other hand</strong> human bonds are deeper."
            ]
        },
        "teacher_notes": "Encourage B1 learners to weigh nuanced roles (tutor vs therapist vs friend) using contrasting linking words."
    },
    # 11. Debatable & Relatable - Chatting AI vs Human (B2)
    {
        "filepath": "apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-upper-intermediate.html",
        "title": "Chatting with AI vs Chatting with a Human (B2)",
        "club_name": "Debatable & Relatable",
        "club_href": "../../debatable-relatable.html",
        "theme_color": "linear-gradient(135deg, #993C1D, #4D1E0E)",
        "icon": "🤖",
        "level_str": "Upper-Intermediate (B2)",
        "level_code": "B2",
        "theme": "Synthetic Relationships, Ethics, & Human Attachment",
        "date": "26 August 2026",
        "summary": "As AI models assume roles ranging from virtual romantic partners to mental health advisors, we debate the societal impacts, ethical boundary lines, and nature of intimacy.",
        "url": None,
        "source_name": "Debatable & Relatable Placards",
        "audio_title": "Debate Analysis: Synthetic Relationships & Ethical Frontiers",
        "vocab": [
            ("synthetic intimacy", "Simulated warmth and affection created by conversational algorithms.", "Relying on synthetic intimacy may weaken a person's motivation to navigate real conflict.", ["genuine vulnerability"]),
            ("algorithmic bias", "Systematic errors or pre-programmed assumptions present within automated outputs.", "Therapeutic AI tools must be scrutinized for algorithmic bias and safety risks.", ["neutral evaluation"]),
            ("reciprocal vulnerability", "The shared openness and emotional exposure that deepens trust between humans.", "True intimacy requires reciprocal vulnerability that no machine can truly experience.", ["one-sided projection"]),
            ("anthropomorphism", "The tendency to attribute human traits, emotions, or intentions to non-human entities.", "Anthropomorphism leads users to treat text generators as conscious emotional entities.", ["objective detachment"]),
            ("social atrophy", "The gradual erosion of interpersonal communication skills due to disuse.", "Over-reliance on friction-free AI interaction could contribute to widespread social atrophy.", ["interpersonal fluency"])
        ],
        "round1": [
            "Why are increasing numbers of adults seeking emotional companionship from artificial intelligence?",
            "How does chatting with an entity that never gets tired or angry alter our expectations of friends?",
            "Where do you draw the line between using AI as a productive tool vs an emotional substitute?"
        ],
        "round2": [
            "Should regulatory bodies place warnings on AI applications designed to mimic human affection?",
            "Will future generations raised alongside hyper-realistic AI companions view human relationships as inconvenient?",
            "Does AI therapy democratize mental health support or pose unacceptable psychological risks?"
        ],
        "grammar": {
            "title": "Complex Hypotheticals & Mixed Conditionals (B2)",
            "rule": "Use mixed conditionals (e.g., <strong>If AI hadn't advanced... we wouldn't be questioning...</strong>) to discuss technological shifts.",
            "examples": [
                "If conversational AI <strong>had not advanced</strong> so rapidly, we <strong>would not be questioning</strong> human attachment today.",
                "If users <strong>understood</strong> the underlying code, they <strong>would have been less likely to form</strong> emotional dependencies.",
                "Had developers <strong>implemented stricter guards</strong>, fewer vulnerable users would be reliance-prone."
            ]
        },
        "teacher_notes": "Prompt B2 students to debate the ethical and psychological ramifications of synthetic intimacy and algorithmic therapy."
    },

    # 12. Life - Hearing Abilities (B1)
    {
        "filepath": "apps/premium-events/clubs/life/sessions/my-life-with-without/hearing-abilities-intermediate.html",
        "title": "My Life With & My Life Without Hearing Abilities (B1)",
        "club_name": "My Life With & My Life Without",
        "club_href": "../../my-life-with-without.html",
        "theme_color": "linear-gradient(135deg, #3B6D11, #1C3806)",
        "icon": "👂",
        "level_str": "Intermediate (B1)",
        "level_code": "B1",
        "theme": "Auditory Perception, Silence, & Sensory Experience",
        "date": "26 August 2026",
        "summary": "Imagine living in a world of vivid sound versus total silence: how hearing shapes our daily safety, musical enjoyment, memory, and personal connection.",
        "url": None,
        "source_name": "Narrative Ledger Batches",
        "audio_title": "Narrative Perspective: The World of Sound and Silence",
        "vocab": [
            ("auditory landscape", "The collection of everyday sounds that fill an environment.", "The auditory landscape of a city includes traffic, footsteps, and laughter.", ["silent void"]),
            ("ambient noise", "Background sounds present in a location, like wind or hums.", "Soft ambient noise helps some people concentrate while studying.", ["deafening silence"]),
            ("non-verbal cues", "Body language, eye contact, and gestures used to communicate.", "When sound is missing, non-verbal cues become essential for understanding.", ["spoken words"]),
            ("sensory awareness", "The conscious perception of sights, sounds, smells, and textures around you.", "Losing one sense often heightens your sensory awareness of the remaining ones.", ["sensory numbness"]),
            ("acoustic comfort", "A state of feeling relaxed and comfortable with surrounding sound levels.", "A quiet library provides acoustic comfort for focused reading.", ["noise pollution"])
        ],
        "round1": [
            "What is your favorite sound in nature or daily life that instantly makes you feel happy?",
            "How do you feel when you spend an entire day in complete silence?",
            "Have you ever experienced temporary hearing loss (e.g., during a cold or loud concert)? How did it feel?"
        ],
        "round2": [
            "If you had to live without hearing for a month, what daily habit or activity would be hardest to adapt?",
            "How do environmental sounds shape your memory of specific places and trips?",
            "In what ways can cities improve acoustic design so environments are less overwhelming?"
        ],
        "grammar": {
            "title": "Describing Sensory Experiences with 'Looks like', 'Sounds like', & 'Feels like' (B1)",
            "rule": "Use sensory verbs paired with prepositions to evoke vivid descriptions.",
            "examples": [
                "Walking through a forest <strong>sounds like</strong> soft rustling leaves.",
                "A world without noise <strong>feels like</strong> stepping into a peaceful dream.",
                "Navigating a bustling market without hearing <strong>looks like</strong> a silent movie."
            ]
        },
        "teacher_notes": "Encourage B1 participants to use descriptive sensory language to contrast sound-filled daily routines with moments of quiet."
    },
    # 13. Life - Hearing Abilities (B2)
    {
        "filepath": "apps/premium-events/clubs/life/sessions/my-life-with-without/hearing-abilities-upper-intermediate.html",
        "title": "My Life With & My Life Without Hearing Abilities (B2)",
        "club_name": "My Life With & My Life Without",
        "club_href": "../../my-life-with-without.html",
        "theme_color": "linear-gradient(135deg, #3B6D11, #1C3806)",
        "icon": "👂",
        "level_str": "Upper-Intermediate (B2)",
        "level_code": "B2",
        "theme": "Auditory Perception, Accessibility, & Soundscapes",
        "date": "26 August 2026",
        "summary": "Exploring the profound dualities of sensory presence and absence: acoustic architecture, sign language linguistics, urban noise pollution, and Deaf culture.",
        "url": None,
        "source_name": "Narrative Ledger Batches",
        "audio_title": "Narrative Exploration: Sensory Dualities & Acoustic Realities",
        "vocab": [
            ("soundscape architecture", "The intentional design of sonic environments in public and private spaces.", "Modern architects pay close attention to soundscape architecture in healthcare centers.", ["acoustic neglect"]),
            ("auditory fatigue", "State of mental exhaustion caused by prolonged exposure to loud or complex noise.", "Working in an open-plan office often leads to auditory fatigue by late afternoon.", ["acoustic clarity"]),
            ("tactile resonance", "Vibrational feedback felt through the body when sound waves travel through objects.", "Deaf concertgoers enjoy live music by feeling its tactile resonance through wooden floors.", ["inaudible wave"]),
            ("deaf culture", "The rich set of social beliefs, art, history, and sign languages of Deaf communities.", "Learning sign language opens up deep insights into Deaf culture and visual communication.", ["hearing normativity"]),
            ("sensory compensation", "The brain's adaptation to enhance remaining senses when one sense is reduced.", "Through sensory compensation, visual acuity often becomes sharper in silent environments.", ["sensory deficit"])
        ],
        "round1": [
            "How does continuous urban noise pollution affect mental health and stress levels in modern cities?",
            "What visual or tactile ways do you rely on to gauge a person's mood besides their tone of voice?",
            "How has technology (e.g., bone conduction, real-time captioning) changed the lives of people with hearing differences?"
        ],
        "round2": [
            "If human society had evolved primarily using visual-gestural language rather than spoken tongue, how would our world differ?",
            "Should public spaces enforce quiet zones to combat auditory fatigue and sensory overload?",
            "How does music transcend literal hearing to connect with emotion, rhythm, and bodily resonance?"
        ],
        "grammar": {
            "title": "Inversion for Emphasis & Dramatic Contrast (B2)",
            "rule": "Use inverted sentence structures like <strong>Not only... but also...</strong> and <strong>Seldom do we...</strong> to highlight sensory dualities.",
            "examples": [
                "<strong>Not only does silence reduce</strong> stress, <strong>but it also allows</strong> deeper self-reflection.",
                "<strong>Seldom do we appreciate</strong> our auditory landscape until we experience temporary hearing loss.",
                "<strong>Only when noise recedes</strong> can true acoustic comfort be restored."
            ]
        },
        "teacher_notes": "Guide B2 learners to explore broader topics like urban acoustic design, Deaf culture, sign language, and sensory adaptation."
    },

    # 14. Mind Matters - Why Friends Correct You (B1)
    {
        "filepath": "apps/premium-events/clubs/mind/sessions/mind-matters/why-friends-correct-your-story-intermediate.html",
        "title": "Why Some Friends Always Try to Correct You (B1)",
        "club_name": "Mind Matters",
        "club_href": "../../mind-matters.html",
        "theme_color": "linear-gradient(135deg, #993556, #4D1A2B)",
        "icon": "🧩",
        "level_str": "Intermediate (B1)",
        "level_code": "B1",
        "theme": "Social Psychology, Interpersonal Dynamics, & Conversational Control",
        "date": "26 August 2026",
        "summary": "Psychological analysis of why certain friends feel compelled to interrupt, adjust minor details, or fix your stories during group conversations.",
        "url": "https://www.psychologytoday.com/us/blog/lifetime-connections/202508/why-your-friend-always-has-to-fix-your-story",
        "source_name": "Psychology Today (August 2025)",
        "audio_title": "Case Study: The Need for Conversational Accuracy",
        "vocab": [
            ("narrative control", "The desire to direct or correct how a story is told to others.", "His constant interruptions were driven by a subtle need for narrative control.", ["passive listening"]),
            ("fact-checking habit", "A compulsive tendency to fix minor errors in details, dates, or names.", "Her fact-checking habit made casual conversations feel like an interrogation.", ["accepting exaggeration"]),
            ("conversational flow", "The smooth, natural exchange of ideas between speakers without awkward interruptions.", "Constantly correcting minor details disrupts the conversational flow.", ["disjointed talk"]),
            ("validation seeking", "Behavior aimed at getting approval, recognition, or correctness status from peers.", "Underneath the need to correct others is often quiet validation seeking.", ["self-assurance"]),
            ("social friction", "Minor tension or irritation created during social interactions.", "Unsolicited corrections can create unnecessary social friction among close friends.", ["group harmony"])
        ],
        "round1": [
            "Do you have a friend or family member who frequently corrects small details when you tell a story?",
            "How do you feel when someone interrupts you to say, 'No, it was Tuesday, not Wednesday!'?",
            "Have you ever caught yourself correcting someone else's minor error during a group chat?"
        ],
        "round2": [
            "Why do some people prioritize factual accuracy over emotional connection in casual conversations?",
            "Is correcting a friend's story a sign of insecurity, habit, or a genuine desire for truth?",
            "What polite conversational phrases can help redirect a friend without starting an argument?"
        ],
        "grammar": {
            "title": "Reporting Verbs & Indirect Speech (B1)",
            "rule": "Use reporting verbs like <strong>pointed out</strong>, <strong>insisted</strong>, and <strong>claimed</strong> to analyze conversational exchanges.",
            "examples": [
                "She <strong>pointed out</strong> that the event happened three years ago, not two.",
                "He <strong>insisted on correcting</strong> the name of the restaurant during dinner.",
                "Psychologists <strong>claim that</strong> story correction stems from anxiety about accuracy."
            ]
        },
        "teacher_notes": "Encourage B1 participants to analyze social psychology with empathy, sharing relatable experiences without naming or criticizing friends."
    }
]

def render_html(item):
    filepath = item["filepath"]
    rel_depth = "../../../..." # 6 levels deep: apps/premium-events/clubs/{club}/sessions/{subfolder}/
    title = item["title"]
    club_name = item["club_name"]
    club_href = item["club_href"]
    theme_color = item["theme_color"]
    icon = item["icon"]
    level_str = item["level_str"]
    level_code = item["level_code"]
    theme = item["theme"]
    date = item["date"]
    summary = item["summary"]
    url = item.get("url")
    source_name = item.get("source_name", "Research Brief")
    audio_title = item.get("audio_title", "Audio Research Brief")
    vocab = item["vocab"]
    round1 = item["round1"]
    round2 = item["round2"]
    grammar = item["grammar"]
    teacher_notes = item["teacher_notes"]
    quote = item.get("quote")
    quote_author = item.get("quote_author")

    # Vocab HTML
    vocab_cards_html = ""
    for term, defn, ex, antonyms in vocab:
        ant_html = ""
        if antonyms:
            ant_str = ", ".join(antonyms)
            ant_html = f'<div style="font-size:0.8rem; color:var(--ink-soft); margin-top:0.3rem;"><strong>≠</strong> {ant_str}</div>'

        # escaped quote for onclick
        term_esc = term.replace("'", "\\'")
        defn_esc = defn.replace("'", "\\'")
        ex_esc = ex.replace("'", "\\'")
        ant_esc = ", ".join(antonyms).replace("'", "\\'") if antonyms else ""

        vocab_cards_html += f'''
<div class="vocab-card" onclick="COSY.addToDict('{term_esc}', '{defn_esc}', '{ex_esc}', '{ant_esc}')" style="cursor:pointer;">
<div class="vocab-term">{term}</div>
<div class="vocab-def">{defn}</div>
<div class="vocab-ex">"{ex}"</div>
{ant_html}
<div style="margin-top:0.5rem; font-size:0.75rem; color:var(--brand-primary); font-weight:600;">+ Click to save to dictionary</div>
</div>'''

    # Round 1 HTML
    r1_html = "".join([f'<li>{q}</li>\n' for q in round1])
    # Round 2 HTML
    r2_html = "".join([f'<li>{q}</li>\n' for q in round2])

    # Grammar examples HTML
    g_ex_html = "".join([f'<li>{e}</li>\n' for e in grammar["examples"]])

    # Article link block
    resource_block = ""
    if url:
        resource_block = f'''
<section style="margin-top: 2.5rem; background: rgba(15, 110, 86, 0.04); border: 1px solid rgba(15, 110, 86, 0.15); border-radius: 16px; padding: 1.5rem;">
<h3 style="margin-top:0; font-family:'Playfair Display', serif; color:var(--ink-dense);">🔬 Article Source & Reference</h3>
<p style="margin-bottom: 0.8rem; color:var(--ink-soft); font-size:0.95rem;">Explore the original published report for deeper reading and discussion preparation:</p>
<a href="{url}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.5rem; background:var(--brand-primary, #0F6E56); color:#fff; text-decoration:none; padding:0.6rem 1.2rem; border-radius:8px; font-weight:600; font-size:0.9rem;">
Read Full Article on {source_name} ➔
</a>
</section>'''

    # Quote block if present
    quote_block = ""
    if quote:
        quote_block = f'''
<blockquote style="margin: 1.5rem 0; padding: 1.2rem 1.5rem; background: #FFFDF9; border-left: 4px solid #5D4037; border-radius: 0 12px 12px 0; font-family: 'Playfair Display', serif; font-size: 1.15rem; font-style: italic; color: #3E2723; line-height: 1.6;">
"{quote}"
<footer style="margin-top: 0.5rem; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-style: normal; font-weight: 600; color: #5D4037;">: {quote_author}</footer>
</blockquote>'''

    html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>{title} : COSYlanguages</title>
<link href="../../../../../../images/logos/cosylanguages.png" rel="icon"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&amp;family=DM+Sans:wght@300;400;500&amp;family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&amp;display=swap" rel="stylesheet"/>
<link href="../../../../../../css/tokens.css" rel="stylesheet"/>
<link href="../../../../../../css/base.css" rel="stylesheet"/>
<link href="../../../../../../css/components.css" rel="stylesheet"/>
<link href="../../../../../../css/layout.css" rel="stylesheet"/>
<link href="../../../../../../css/events.css" rel="stylesheet"/>
</head>
<body>
<nav id="cosy-nav"></nav>
<header class="session-hero" style="background: {theme_color};">
<div class="club-tag">{club_name}</div>
<div class="session-decorator-icon">{icon}</div>
<h1>{title}</h1>
<p class="session-date">{date}</p>
</header>
<main class="content-container">
<nav class="cosy-breadcrumbs">
<a href="../../../../../../index.html">Home</a> <span class="sep">/</span>
<a href="../../../../../../events/index.html">Events</a> <span class="sep">/</span>
<a href="{club_href}">{club_name}</a> <span class="sep">/</span>
<span class="current">{title}</span>
</nav>
<a class="back-link" href="{club_href}">← Back to Club</a>
<div class="session-meta-grid">
<div class="meta-item"><h4>Duration</h4><p>60 minutes</p></div>
<div class="meta-item"><h4>Languages</h4><p>🇬🇧 English</p></div>
<div class="meta-item"><h4>Level</h4><p>{level_str}</p></div>
<div class="meta-item"><h4>Theme</h4><p>{theme}</p></div>
</div>

<div style="margin-bottom: 2rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">
<p>{summary}</p>
{quote_block}
</div>

<!-- Audio Player Brief -->
<div class="science-audio-player" style="background: rgba(0,0,0,0.03); border: 1px solid var(--border); border-radius: 16px; padding: 1.25rem; margin-bottom: 2rem;">
<div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
<div>
<h4 style="margin: 0 0 0.25rem; font-family: 'DM Sans', sans-serif;">🎧 {audio_title}</h4>
<p style="margin: 0; font-size: 0.85rem; color: var(--muted);">Listen to a 2-minute overview before joining the live session.</p>
</div>
<button id="science-draft-play-btn" style="background: var(--brand-primary, #0F6E56); color: #fff; border: none; border-radius: 50px; padding: 0.5rem 1.25rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
<span>▶</span> Play Brief
</button>
</div>
<details class="transcript-details" style="margin-top: 1rem; border-top: 1px solid var(--border); padding-top: 0.75rem;">
<summary style="cursor: pointer; font-size: 0.85rem; color: var(--brand-primary, #0F6E56); font-weight: 600;">Show Audio Transcript</summary>
<p style="margin-top: 0.5rem; font-size: 0.9rem; line-height: 1.5; color: var(--ink-soft);">{summary}</p>
</details>
</div>

<!-- Vocabulary Section -->
<section style="margin-bottom: 2.5rem;">
<h2 class="section-title">📖 Session Vocabulary</h2>
<p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 1rem;">Click any card to automatically save the term to your personal COSY dictionary.</p>
<div class="vocab-grid">
{vocab_cards_html}
</div>
</section>

<!-- Discussion Structure -->
<section style="margin-bottom: 2.5rem;">
<h2 class="section-title">🎙️ Discussion Structure</h2>
<div style="display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
<div style="background: #FFF; border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem;">
<h3 style="margin-top:0; color:var(--brand-primary, #0F6E56); font-family:'Playfair Display', serif;">Round 1: Personal Observations</h3>
<ul style="padding-left: 1.2rem; line-height: 1.6; color: var(--ink-soft);">
{r1_html}
</ul>
</div>
<div style="background: #FFF; border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem;">
<h3 style="margin-top:0; color:var(--brand-primary, #0F6E56); font-family:'Playfair Display', serif;">Round 2: Deep Analysis & Reflection</h3>
<ul style="padding-left: 1.2rem; line-height: 1.6; color: var(--ink-soft);">
{r2_html}
</ul>
</div>
</div>
</section>

<!-- Language Focus -->
<section style="margin-bottom: 2.5rem; background: #FFFDF9; border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem;">
<h2 class="section-title" style="margin-top:0;">⚡ {grammar["title"]}</h2>
<p style="line-height: 1.6; color: var(--ink-soft);">{grammar["rule"]}</p>
<ul style="padding-left: 1.2rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 0;">
{g_ex_html}
</ul>
</section>

<!-- Teacher Notes -->
<section style="margin-bottom: 2.5rem; background: rgba(0,0,0,0.02); border-left: 4px solid var(--brand-primary, #0F6E56); padding: 1.25rem 1.5rem; border-radius: 0 12px 12px 0;">
<h4 style="margin-top: 0; font-family: 'DM Sans', sans-serif;">💡 Facilitator & Teacher's Note</h4>
<p style="margin-bottom: 0; font-size: 0.9rem; line-height: 1.5; color: var(--ink-soft);">{teacher_notes}</p>
</section>

{resource_block}

</main>

<footer class="site-footer">
<div class="footer-container">
<div class="footer-brand-col">
<div class="footer-logo">
<img alt="COSYlanguages" src="../../../../../../images/logos/cosylanguages.png"/>
<span>COSYlanguages</span>
</div>
<p class="footer-tagline">Humanized language acquisition through authentic peer discussion and structured pedagogical design.</p>
</div>
<div class="footer-links-col">
<h5 data-translate-key="footer_h5_courses">Courses</h5>
<a href="../../../../../../curriculum/index.html">Curriculum Hub</a>
<a href="../../../../../../grammar/index.html">Grammar Practice</a>
<a href="../../../../../../vocabulary/index.html">Vocabulary Engine</a>
</div>
<div class="footer-links-col">
<h5 data-translate-key="footer_h5_explore">Explore</h5>
<a href="../../../../../../events/index.html">Event Directory</a>
<a href="../../../../../../games/index.html">Language Games</a>
<a href="../../../../../../practice/index.html">Practice Hub</a>
</div>
<div class="footer-links-col">
<h5>Project</h5>
<a href="../../../../../../about/index.html">About Us</a>
<a href="../../../../../../privacy.html">Privacy &amp; Safety 🛡️</a>
</div>
<div class="footer-links-col">
<h5 data-translate-key="footer_h5_contact">Contact</h5>
<a href="https://wa.me/330766784195">WhatsApp 📱</a>
<a href="https://t.me/cosylanguagesproject">Telegram ✈️</a>
<a href="mailto:cosylanguages@gmail.com">cosylanguages@gmail.com ✉️</a>
</div>
</div>
<div class="footer-bottom" data-translate-key="footer_copy">© 2026 COSYlanguages : All rights reserved</div>
</footer>
<script src="../../../../../../js/core/engine.js"></script>
<script src="../../../../../../js/core/ui.js"></script>
</body>
</html>
'''
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"Generated {filepath}")

for item in sessions_data:
    render_html(item)
