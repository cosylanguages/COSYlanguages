import os
import re
from bs4 import BeautifulSoup

MM_DIR = "events/sessions/mind-matters"

BATCH5_THEMES = {
    "blue-eyes-brown-eyes-experiment": {
        "title": "Blue Eyes - Brown Eyes Experiment — COSYlanguages",
        "h1": "The Blue Eyes - Brown Eyes Experiment",
        "desc": "This session deconstructs Jane Elliott's landmark 'Blue Eyes - Brown Eyes' simulation to explore the psychological anatomy of systemic discrimination, outgroup bias, and the Pygmalion effect. We will discuss how arbitrarily assigned group statuses immediately alter human behavior, executive performance, and peer compliance, and analyze the psychological courage required to recognize and dismantle learned social prejudices.",
        "profile": {
            "tendency": "Group Categorization & Outgroup Bias",
            "trigger": "Arbitrary Authority Mandates",
            "phenomenon": "Ingroup Favoritism & Pygmalion Effect",
            "anchor": "Recognizing Learned Societal Prejudices"
        },
        "vocab": [
            ("Discrimination", "the prejudicial treatment of different categories of people based on arbitrary social markers.", "Jane Elliott's simulation illustrated how rapidly discrimination can be manufactured and normalized."),
            ("Privilege", "a special right, advantage, or immunity granted only to a particular favored group.", "The favored group enjoyed the privilege of extra recess time, which altered their self-concept."),
            ("Superiority", "the psychological belief or attitude of being higher in status, intellect, or value than others.", "Arbitrary praise from authority figures instantly triggered a sense of hostile superiority in the children."),
            ("Inferiority", "the state of feeling lower in status, capability, or cognitive worth than another.", "The stigmatized students suffered from a temporary, performance-disrupting feeling of inferiority."),
            ("In-group favoritism", "the evolutionary tendency to show preference and warmth to members of one's own identified group.", "In-group favoritism is a survival shortcut that can be easily manipulated by toxic political narratives."),
            ("Out-group derogation", "the cognitive act of painting those outside one's group as hostile, inferior, or untrustworthy.", "The media often relies on out-group derogation to unite fragmented populaces behind a single banner."),
            ("Internalize", "to make an external attitude, bias, or social conditioning a core part of one's subconscious nature.", "Children quickly internalize the subtle prejudices and stereotypes expressed by adult role models."),
            ("Pygmalion effect", "the psychological phenomenon where high expectations lead to improved performance, and low expectations lead to worse.", "The drop in test scores among the unfavored students was a direct manifestation of the Pygmalion effect."),
            ("Empathy", "the capacity to understand, share, and cognitively step into the emotional state of another.", "By experiencing simulated prejudice, participants built a deep, visceral empathy for marginalized groups."),
            ("Conditioning", "the process of training or accustoming a human system to behave in a predetermined, automated way.", "Dismantling our cultural conditioning requires constant, conscious effort and cognitive audit.")
        ],
        "warmup": [
            "Why are humans evolutionary primed to divide themselves into competing tribes so easily over arbitrary differences?",
            "Can simulated roleplay teach genuine, lasting empathy, or does it merely create performative understanding?"
        ],
        "r1": [
            ("How does systemic <strong>Discrimination</strong> immediately disrupt an individual's intellectual and cognitive performance?", "★ Have you ever noticed yourself making a snap judgment about a stranger based on their appearance?"),
            ("Why is recognizing our own systemic <strong>Privilege</strong> so emotionally uncomfortable and defensive for the ego?", "★ What is one privilege in your life that you have had to consciously acknowledge and appreciate?"),
            ("How do authority figures utilize manufactured narratives of <strong>Superiority</strong> to enforce group compliance?", "★ How do you typically react when a professional colleague acts with an arrogant sense of superiority?"),
            ("What strategies can we use to protect our self-worth from a socially imposed feeling of <strong>Inferiority</strong>?", "★ Have you ever felt unqualified or out of place at a high-stakes professional summit?"),
            ("Why does <strong>In-group favoritism</strong> trigger a rapid decline in our capacity for objective, fair judgment?", "★ Do you feel a strong sense of loyalty to a local club, sports team, or professional network?"),
            ("In what ways do modern media platforms exploit <strong>Out-group derogation</strong> to maximize user engagement?", "★ How do you maintain critical thinking when your social circle is criticizing an external group?"),
            ("How do we deprogram the toxic biases and prejudices we did <strong>Internalize</strong> during childhood?", "★ What is one deep-seated belief from your upbringing that you have had to actively unlearn as an adult?"),
            ("How does the <strong>Pygmalion effect</strong> explain why some students thrive under praise while others collapse under doubt?", "★ Has a supervisor's high expectation ever motivated you to achieve an impossible goal?"),
            ("Why is raw, emotional <strong>Empathy</strong> far more difficult to cultivate than simple, polite intellectual sympathy?", "★ When was the last time you felt a profound wave of empathy for a complete stranger's struggle?"),
            ("How can we identify our subtle social <strong>Conditioning</strong> before it dictates our daily interactions?", "★ What is one habit or custom of your culture that you only realized was bizarre after traveling abroad?")
        ],
        "lst": "The Diversity Dialogue: Imagine you are a corporate consultant addressing a board of directors about hidden structural prejudices. Deliver a speech advocating for reform, utilizing at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If systemic <strong>Discrimination</strong> were completely eliminated tomorrow, do you think academic performance gaps would vanish?",
            "If everyone acknowledged their unconscious <strong>Privilege</strong> today, would social conflicts dissolve immediately?",
            "If a company promoted employees based on a belief in intellectual <strong>Superiority</strong>, would it lose its best talent?",
            "If you had to battle a persistent feeling of <strong>Inferiority</strong> in childhood, would you now be as confident today?",
            "If we had not relied on <strong>In-group favoritism</strong> for survival back then, would humanity have developed communities today?",
            "If the media had not engaged in systematic <strong>Out-group derogation</strong> last year, would our elections have been less polarized today?",
            "If you had not managed to <strong>Internalize</strong> those healthy boundaries in your youth, would you struggle with burnout today?",
            "If your past teacher had leveraged the <strong>Pygmalion effect</strong> positively, would you have chosen a different field?",
            "If you had shown true <strong>Empathy</strong> instead of cold detachment during that crisis, would your friendship still be intact today?",
            "If our early cultural <strong>Conditioning</strong> had been completely different, would we now hold the same core values today?"
        ],
        "mistakes": [
            ("They were discriminated because their eyes", "They were discriminated against because of their eyes", "(Prepositional collocation: use 'discriminate against' and 'because of' before a noun phrase)"),
            ("He behaves like he is superiority", "He behaves like he is superior", "(Grammar structure: use the adjective 'superior' instead of the abstract noun 'superiority')"),
            ("I feel empathy to them", "I feel empathy for them / I empathize with them", "(Collocation error: we feel empathy 'for' someone, or we 'empathize with' someone)")
        ]
    },
    "nazi-race-propaganda": {
        "title": "Nazi Race Propaganda — COSYlanguages",
        "h1": "Nazi Race Propaganda — Would you survive?",
        "desc": "This session explores the terrifying psychological mechanics of mass indoctrination, dehumanization, and systematic compliance under state control. We will analyze how propaganda aligns with subconscious fears, how social conformity suppresses moral empathy, and reflect on the cognitive strategies required to maintain individual moral resistance in hostile social climates.",
        "profile": {
            "tendency": "Dehumanization & Systematic Othering",
            "trigger": "Totalitarian State Media & Crisis Narratives",
            "phenomenon": "Mass Cognitive Desensitization",
            "anchor": "Preserving Moral Empathy in Hostile Climates"
        },
        "vocab": [
            ("Indoctrination", "the systematic process of teaching a population to accept a set of beliefs uncritically.", "The totalitarian regime relied on early childhood education as a tool for political indoctrination."),
            ("Dehumanization", "the cognitive process of depriving a group of positive human qualities, reducing them to subhuman levels.", "Systematic dehumanization in state media was a pre-emptive step to justify future atrocities."),
            ("Scapegoat", "a person or group blamed for the wrongdoings, economic failures, or struggles of others.", "Faced with hyperinflation, the corrupt government chose to use minorities as a convenient scapegoat."),
            ("Pseudoscience", "a collection of beliefs mistakenly regarded as being based on scientific methodology.", "Nazi racial hygiene was supported by elaborate, manufactured academic pseudoscience to gain credibility."),
            ("Conformity", "behavior in accordance with socially accepted conventions, rules, or group standards.", "Extreme social conformity made it dangerous for ordinary citizens to express any doubt about the state."),
            ("Coercion", "the practice of persuading someone to comply by using threats, economic isolation, or force.", "The citizens were kept in a state of quiet submission through a combination of propaganda and physical coercion."),
            ("Subjugation", "the action of bringing someone or something under complete domination or control.", "The military victory led to the absolute subjugation of neighboring sovereign states."),
            ("Caricature", "a highly exaggerated, offensive representation of a person's features for grotesque effect.", "The regime published distorted caricatures of minority groups to desensitize the public's empathy."),
            ("Bystander", "a person who is present at an event but chooses not to participate or intervene.", "History teaches us that the passive bystander is just as critical to the rise of tyranny as the oppressor."),
            ("Complicity", "the state of being involved with others in an illegal activity, moral wrongdoing, or silence.", "By remaining silent during the neighbors' arrest, the ordinary citizens drifted into moral complicity.")
        ],
        "warmup": [
            "Why is group belonging and state-approved pride so intoxicating that individuals willingly surrender their moral compass?",
            "How do we distinguish between healthy national patriotism and dangerous, exclusionary state indoctrination?"
        ],
        "r1": [
            ("How does early childhood <strong>Indoctrination</strong> permanently alter a person's neurological capacity for critical thinking?", "★ Have you ever identified a bias in your own thinking that was planted by your early schooling?"),
            ("What psychological defense mechanisms allow ordinary citizens to ignore the active <strong>Dehumanization</strong> of their neighbors?", "★ How do you react when you see polarizing labels used to mock opponents on social media?"),
            ("Why does the human ego crave a <strong>Scapegoat</strong> when facing overwhelming financial or personal crises?", "★ Have you ever been unfairly blamed for a major failure in a group project or workplace?"),
            ("How do modern commercial brands use biased <strong>Pseudoscience</strong> to sell products and manipulate consumer behavior?", "★ What is one scientific claim you recently saw online that triggered your critical skepticism?"),
            ("To what extent does social <strong>Conformity</strong> suppress our willingness to speak out against obvious injustice?", "★ Have you ever stayed silent during a meeting because everyone else agreed with a bad decision?"),
            ("What is the psychological boundary between voluntary peer compliance and systemic state <strong>Coercion</strong>?", "★ Have you ever felt forced by corporate rules to act against your personal ethical beliefs?"),
            ("How does the psychological <strong>Subjugation</strong> of a population differ from physical, militaristic imprisonment?", "★ Do you believe modern data tracking has slowly subjugated our cognitive freedom of choice?"),
            ("Why are offensive visual media forms like a biased <strong>Caricature</strong> so effective at bypassing logical resistance?", "★ What is your opinion on using humor and satirical cartoons to criticize political leaders?"),
            ("Under what conditions does an ordinary, passive <strong>Bystander</strong> find the courage to intervene during a public crisis?", "★ Have you ever intervened to support a complete stranger who was being harassed in public?"),
            ("Why is admitting moral <strong>Complicity</strong> in a historical injustice so difficult for subsequent generations?", "★ What is our individual responsibility when we discover our employer is practicing unethical methods?")
        ],
        "lst": "The Resistance Broadcast: Imagine you are an underground radio host broadcasting from an occupied territory during a totalitarian regime. Deliver an address urging moral resistance, utilizing at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you were exposed to high-level state <strong>Indoctrination</strong> from birth, would your critical thinking survive?",
            "If social media algorithms continued to accelerate the <strong>Dehumanization</strong> of opponents, would a crisis occur?",
            "If a severe economic crisis hit your city, would your community search for a convenient <strong>Scapegoat</strong>?",
            "If you had exposed their racial hygiene theories as pure <strong>Pseudoscience</strong> back then, would you have faced execution?",
            "If they had not demanded such absolute social <strong>Conformity</strong>, would more citizens have spoken out?",
            "If the state had relied solely on physical <strong>Coercion</strong> without propaganda, would the regime have collapsed faster?",
            "If you had witnessed the systematic <strong>Subjugation</strong> of human rights, would you have joined the resistance?",
            "If they had not published those grotesque <strong>Caricature</strong> drawings, would public empathy have remained intact?",
            "If you had chosen to remain a passive <strong>Bystander</strong> back then, how would you live with your conscience today?",
            "If our ancestors had acknowledged their moral <strong>Complicity</strong> years ago, would we have avoided these modern divisions today?"
        ],
        "mistakes": [
            ("The government made them to believe it", "The government made them believe it", "(Causative verb structure: 'make' + object + bare infinitive verb without 'to')"),
            ("I am not agree with this propaganda", "I do not agree with this propaganda / I disagree with this propaganda", "(Word class error: 'agree' is a verb, so it takes 'do not agree' or 'disagree' instead of 'am not agree')"),
            ("We discussed about the psychological impact", "We discussed the psychological impact / had a discussion about the psychological impact", "(Preposition redundancy: 'discuss' is transitive and does not take 'about'; use 'have a discussion about')")
        ]
    },
    "simmel-objective-freedom": {
        "title": "Georg Simmel: Objective Freedom — COSYlanguages",
        "h1": "Georg Simmel: Objective Freedom",
        "desc": "This session deconstructs Georg Simmel's sociology of 'The Stranger' and the concept of objective freedom. We will explore how entering a new space as an outsider liberates us from the suffocating conformity of traditional communities, analyzing the psychological trade-offs between local belonging and the pristine autonomy of modern urban anonymity.",
        "profile": {
            "tendency": "Desire for Autonomy",
            "trigger": "Modern Urban Anonymity",
            "phenomenon": "Objective vs. Subjective Culture",
            "anchor": "Individualism in Mass Society"
        },
        "vocab": [
            ("Authenticity", "the psychological alignment of one's external choices with their core, unvarnished self.", "Simmel argued that urban anonymity allows individuals to discover a deeper level of authenticity."),
            ("Conformity", "behavior in accordance with socially accepted conventions, local traditions, or standards.", "Small, traditional villages often demand absolute conformity, stifling individual expression."),
            ("Autonomy", "the state of having personal independence, self-governance, and freedom of choice.", "Being a stranger in a bustling metropolis grants us an unprecedented degree of social autonomy."),
            ("Suppression", "the conscious or subconscious act of keeping one's true desires, traits, or voice hidden.", "Familiar environments often reinforce the suppression of our non-traditional personality traits."),
            ("Rebellion", "the act of resisting established authority, social conventions, or expectations.", "His relocation to a foreign city was a quiet rebellion against his family's rigid expectations."),
            ("Subconscious", "the part of the mental system that processes desires and memories below active awareness.", "Our subconscious mind craves the safety of the known, even when it restricts our growth."),
            ("Self-discovery", "the process of gaining critical insight into one's own character, boundaries, and potential.", "Traveling alone is a catalyst for self-discovery because it strips away all familiar identity crutches."),
            ("Persona", "the social mask or aspect of character presented to and perceived by others.", "In a digital workspace, we construct a polished professional persona that may hide our true feelings."),
            ("Individuality", "the unique collection of traits, opinions, and values that distinguish a person from a group.", "Mass culture often attempts to standardize our tastes, threatening our unique individuality."),
            ("Dignity", "the quality of being worthy of honor, respect, and self-worth on one's own terms.", "Maintaining your personal dignity requires you to resist pressure to conform to unethical norms.")
        ],
        "warmup": [
            "Does entering a new city where absolutely nobody knows your past grant you a pristine, authentic self?",
            "Why is it psychologically easier to share our deepest secrets with a complete stranger than with a sibling?"
        ],
        "r1": [
            ("How does the pressure of local judgment threaten our capacity for raw <strong>Authenticity</strong>?", "★ When was the last time you felt you had to pretend to be someone else to preserve the peace?"),
            ("Why is <strong>Conformity</strong> often rewarded in traditional communities while independence is stigmatized?", "★ How comfortable are you with violating minor social conventions to protect your comfort?"),
            ("What is the psychological trade-off between absolute personal <strong>Autonomy</strong> and warm group belonging?", "★ Have you ever felt that a close relationship was restricting your individual freedom?"),
            ("In what ways does constant <strong>Suppression</strong> of our unique opinions affect our long-term mental stability?", "★ Can you recall a part of your personality that you suppressed in school to avoid teasing?"),
            ("Can a quiet, non-violent <strong>Rebellion</strong> against social norms be an act of psychological healing?", "★ What is the most rebellious choice you have ever made, and did you regret it?"),
            ("How does our <strong>Subconscious</strong> mind use the fear of isolation to keep us locked in old survival habits?", "★ Have you ever had a strong gut feeling that warned you to step away from a toxic social group?"),
            ("Why is genuine, painful <strong>Self-discovery</strong> nearly impossible when we never leave our comfort zone?", "★ What is the most surprising thing you discovered about your resilience during your last trip?"),
            ("How does adopting a professional <strong>Persona</strong> protect our emotional core from corporate criticism?", "★ Do you feel a major gap between your public persona and your private thoughts?"),
            ("Is our <strong>Individuality</strong> defined by the choices we make when we are completely alone?", "★ How do you protect your unique individuality from being swallowed by modern consumer trends?"),
            ("How can we maintain our personal <strong>Dignity</strong> when forced to operate in highly competitive spaces?", "★ Have you ever had to walk away from a high-paying role to preserve your self-worth?")
        ],
        "lst": "The Stranger's Monologue: Imagine you are a traveler arriving in a sprawling, anonymous city where nobody knows your history. Deliver a reflection on your newly found freedom, using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you moved to a sprawling metropolis tomorrow, would your capacity for <strong>Authenticity</strong> improve?",
            "If society completely abandoned its demand for <strong>Conformity</strong>, would we lose our sense of shared safety?",
            "If a relationship demanded you to sacrifice your <strong>Autonomy</strong>, would you choose to singlehood instead?",
            "If you stopped the constant <strong>Suppression</strong> of your desires today, what is the first change you would make?",
            "If children were never taught to conform, do you think <strong>Rebellion</strong> would still exist naturally?",
            "If your <strong>Subconscious</strong> was governed entirely by a desire for safety, would you ever leave your hometown?",
            "If you had not embarked on that journey of <strong>Self-discovery</strong> years ago, would you now be as self-aware today?",
            "If you had not adopted a polished professional <strong>Persona</strong> last year, would you have survived that toxic office?",
            "If mass media completely standardized our tastes, would true <strong>Individuality</strong> survive in the future?",
            "If they had treated your boundaries with basic <strong>Dignity</strong> back then, would you have stayed with that team today?"
        ],
        "mistakes": [
            ("He have went to Paris", "He has gone to Paris", "(Present perfect third-person singular auxiliary 'has' + past participle 'gone', never 'have went')"),
            ("We discussed about the problem", "We discussed the problem / had a discussion about the problem", "(Transitive verb syntax: 'discuss' directly takes the object without the preposition 'about')"),
            ("I am agree with you", "I agree with you", "(Verb class syntax: 'agree' is an active verb; do not use it with the auxiliary 'am' in active voice)")
        ]
    },
    "expert-defend-language-mistakes": {
        "title": "Why Experts Defend Language Mistakes — COSYlanguages",
        "h1": "Why Experts Defend Language Mistakes",
        "desc": "This session deconstructs our obsession with linguistic perfection and the social biases it masks. We will analyze the psychological clash between prescriptive and descriptive views of grammar, explore how error-stigmatization raises the affective filter, and discuss how language standards are leveraged to enforce cultural elitism and class divisions.",
        "profile": {
            "tendency": "Perfectionism & Fear of Judgment",
            "trigger": "Conversational Fluency Breakdowns",
            "phenomenon": "Affective Filter Hypothesis",
            "anchor": "Embracing Mistakes as Vital Progress"
        },
        "vocab": [
            ("Prescriptivism", "the ideological belief that language must adhere to rigid, static, and pre-established rules.", "Linguistic prescriptivism is often used in educational systems to filter out non-standard dialects."),
            ("Descriptivism", "the objective, scientific study of how language is actually used by its native speakers.", "Linguists advocate for descriptivism, arguing that dictionaries should record usage rather than police it."),
            ("Standardization", "the process of establishing a single dialect or spelling convention as the official national norm.", "The standardization of grammar historically served to consolidate political power and marginalize minorities."),
            ("Stigmatize", "to brand a particular dialect, accent, or linguistic error as worthy of social disapproval.", "We must stop trying to stigmatize foreign accents, which are simply badges of multilingual courage."),
            ("Arbitrary", "based on random historical choice or whim rather than on any logical, systematic reasoning.", "Many spelling rules in English are completely arbitrary, reflecting obsolete printing press standards."),
            ("Pedantry", "excessive, hyper-vigilant concern with minor grammar rules, definitions, and academic guidelines.", "Grammar pedantry raises the student's affective filter, causing them to freeze during conversations."),
            ("Colloquial", "relating to ordinary, informal, and dynamic spoken communication rather than formal writing.", "Slang and colloquial expressions are the most vibrant and rapidly evolving parts of a language."),
            ("Elitist", "demonstrating a snobbish belief in the cultural or social superiority of a dominant class.", "Insisting on perfect Shakespearean structures in a modern business meeting can feel incredibly elitist."),
            ("Evolve", "to develop, adapt, and grow organically over time to reflect changing cultural and technological realities.", "Languages must evolve; a static language with zero organic mutations is a dead tongue."),
            ("Linguistic", "relating to language, grammar, dialects, or the scientific study of linguistics.", "Our linguistic identity is deeply intertwined with our subconscious sense of cultural belonging.")
        ],
        "warmup": [
            "Why does a minor grammatical error or a foreign accent trigger such immediate, harsh social judgment from others?",
            "Is the pursuit of absolute grammatical perfection a sign of intelligence, or is it a tool for cultural elitism?"
        ],
        "r1": [
            ("How does systemic <strong>Prescriptivism</strong> in schools discourage creative self-expression in young writers?", "★ Did your school teachers focus more on correcting your errors or on encouraging your ideas?"),
            ("How does adopting a <strong>Descriptivism</strong> mindset help language learners overcome their fear of speaking?", "★ Do you prefer learning formal grammar rules or studying real, organic slang from movies?"),
            ("Why does the <strong>Standardization</strong> of global English often marginalize highly vibrant regional varieties?", "★ Does your native region speak a standard dialect or a unique, colorful local variation?"),
            ("How do native speakers use pronunciation to <strong>Stigmatize</strong> and evaluate a traveler's intelligence?", "★ Have you ever felt self-conscious or judged when speaking a foreign language with a native speaker?"),
            ("Why is defending an <strong>Arbitrary</strong> grammar rule from the 18th century so critical for traditionalists?", "★ What is the most confusing or illogical spelling pattern you have had to memorize in English?"),
            ("Why is grammar <strong>Pedantry</strong> often a sign of insecure social status rather than true educational expertise?", "★ How do you react when a friend or colleague interrupts you to correct a minor pronunciation error?"),
            ("Under what professional circumstances is it completely appropriate to use <strong>Colloquial</strong> language?", "★ Do you prefer working in an environment with formal communication or casual, friendly dialogue?"),
            ("How does an <strong>Elitist</strong> approach to accents preserve class divisions in professional environments?", "★ Do you believe that a person's level of education is immediately visible in their casual speech?"),
            ("How does internet and text-messaging culture cause modern syntax to <strong>Evolve</strong> at an unprecedented speed?", "★ What online acronyms or emojis do you find most useful for conveying emotional nuance in text?"),
            ("How does our <strong>Linguistic</strong> style shape our subconscious feeling of safety and cultural belonging?", "★ Do you feel that your personality, sense of humor, or confidence shifts when you change languages?")
        ],
        "lst": "The Pedantry Debate: Imagine you are a descriptive linguist debating a strict prescriptive grammarian on a live podcast. Defend language evolution, utilizing at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If schools completely abandoned linguistic <strong>Prescriptivism</strong> tomorrow, would literacy rates improve?",
            "If foreign students were only taught <strong>Descriptivism</strong>, would they integrate into corporate roles faster?",
            "If a language achieved absolute <strong>Standardization</strong>, would we lose our diverse cultural heritages in the future?",
            "If we did not <strong>Stigmatize</strong> minor spelling mistakes, would people write more honest, creative emails today?",
            "If spelling was not completely <strong>Arbitrary</strong>, would learning a language take half the time today?",
            "If your teacher had practiced extreme grammar <strong>Pedantry</strong>, would you have given up your language studies?",
            "If you spoke only formal, non-<strong>Colloquial</strong> English, would you find it harder to build close friendships today?",
            "If they had not maintained such an <strong>Elitist</strong> standard back then, would regional accents be respected today?",
            "If language did not <strong>Evolve</strong> organically, would we be able to discuss modern technology today?",
            "If you had to sacrifice your unique <strong>Linguistic</strong> identity to fit in, would you feel like a different person today?"
        ],
        "mistakes": [
            ("Linguistics are very interesting", "Linguistics is very interesting", "(Subject-verb agreement: academic subjects ending in -ics like linguistics are singular)"),
            ("He explained me the rule", "He explained the rule to me", "(Verb complementation: 'explain' requires a direct object followed by 'to' + indirect object)"),
            ("They make less mistakes today", "They make fewer mistakes today", "(Quantifier syntax: use 'fewer' for countable nouns like mistakes, and 'less' for uncountable nouns)")
        ]
    },
    "conversations-avoid-enjoy": {
        "title": "Conversations to Avoid and Enjoy — COSYlanguages",
        "h1": "Conversations to Avoid and Enjoy",
        "desc": "This session explores the social psychology of conversation—analyzing why humans naturally dread polite, superficial small talk while craving deep, vulnerable exchanges. We will discuss the affective filters, cognitive loads, and social dynamics that govern our daily interactions, and investigate how to guide conversations away from sterile scripts into meaningful psychological connections.",
        "profile": {
            "tendency": "Craving Deep Emotional Connection",
            "trigger": "Sterile, Scripted Small Talk or Gossip",
            "phenomenon": "Interpersonal Depth Resonance",
            "anchor": "Steering Dialogue toward Authenticity"
        },
        "vocab": [
            ("Superficial", "existing or occurring only on the surface; lacking depth, substance, or sincerity.", "Sterile small talk about the weather is a superficial exchange that rarely builds connection."),
            ("Vulnerability", "the state of exposing one's raw thoughts, emotions, and boundaries to potential judgment.", "True intimacy is forged when both speakers find the courage to display their vulnerability."),
            ("Superfluous", "unnecessary, redundant, or exceeding what is sufficient or useful.", "I found his elaborate corporate introductions completely superfluous and waste of meeting time."),
            ("Affective filter", "the psychological barrier of anxiety, self-doubt, or fear that blocks fluent communication.", "A high affective filter prevents language learners from enjoying casual, spontaneous conversations."),
            ("Introvert", "a person whose energy is focused inward, preferring quiet, deep, and reflective interactions.", "An introvert often finds noisy networking events exhausting, preferring one-on-one dialogues."),
            ("Extrovert", "an outgoing, socially expressive person who gains energy from active group dynamics.", "An extrovert thrives in busy social spaces, utilizing small talk as a bridge to initial contact."),
            ("Introspection", "the focused examination of one's own mental and emotional processes.", "A high capacity for introspection allows individuals to articulate their thoughts with great clarity."),
            ("Colloquial", "relating to informal, ordinary spoken language rather than formal academic writing.", "Learning colloquial idioms is critical for understanding the natural humor of native speakers."),
            ("Empathy", "the capacity to step into, comprehend, and share another person's emotional state.", "Active listening is the ultimate tool for conveying deep, non-judgmental empathy."),
            ("Stigmatize", "to regard or describe a social behavior or trait as worthy of disapproval or shame.", "We should not stigmatize silent pauses in conversation, which often indicate thoughtful processing.")
        ],
        "warmup": [
            "Why do we feel so physically and mentally exhausted after an hour of polite, superficial small talk at a networking event?",
            "How can we politely guide a sterile conversation away from standard scripts ('What do you do?') toward meaningful topics?"
        ],
        "r1": [
            ("How does a highly <strong>Superficial</strong> dialogue trigger feelings of isolation even in a crowded social space?", "★ Have you ever felt deeply lonely while attending a bustling corporate party or family gathering?"),
            ("Why does sharing mutual <strong>Vulnerability</strong> immediately dismantle social anxiety between complete strangers?", "★ What is one topic you find incredibly easy to discuss with anyone, and why does it build trust?"),
            ("Why do many corporate communication guidelines enforce so much <strong>Superfluous</strong> politeness?", "★ What is the most redundant or annoying corporate phrase you have to write in your daily emails?"),
            ("How can a supportive, non-judgmental conversational partner lower our <strong>Affective filter</strong>?", "★ When did you last feel completely comfortable and fluent while speaking a foreign language?"),
            ("How can a quiet <strong>Introvert</strong> survive and thrive in a professional culture designed for extroverts?", "★ Do you consider yourself more of an introvert, an extrovert, or a balanced ambivert?"),
            ("Why is there a common misconception that an <strong>Extrovert</strong> is incapable of deep, reflective thinking?", "★ Do you gain energy by being around large crowds, or do you require solitude to recharge?"),
            ("How does a persistent habit of <strong>Introspection</strong> enrich the quality of our daily conversations?", "★ What is one personal realization you achieved during a moment of quiet, solo introspection?"),
            ("Why is using formal academic grammar often counterproductive when trying to learn <strong>Colloquial</strong> fluency?", "★ What casual idiom in English do you find particularly expressive or amusing?"),
            ("How does showing non-verbal <strong>Empathy</strong> (like active nodding) change the emotional depth of a dialogue?", "★ Have you ever felt that someone was listening to you with absolute, non-judgmental empathy?"),
            ("Why does modern culture continue to <strong>Stigmatize</strong> comfortable silence during social interactions?", "★ How comfortable are you with silence when sitting next to a close friend or partner?")
        ],
        "lst": "The Networking Audit: Imagine you are a communications coach advising a highly introverted professional on how to survive a major industry conference. Deliver your advice, explaining how they can build real connection using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you only engaged in deep conversations tomorrow, would your overall social circle shrink or grow?",
            "If society completely banned <strong>Superficial</strong> small talk, would introverts become the dominant social leaders?",
            "If sharing raw <strong>Vulnerability</strong> was completely risk-free, would we still value true intimacy?",
            "If we cut out all <strong>Superfluous</strong> jargon from business emails, would corporate productivity double today?",
            "If your conversational partner always lowered your <strong>Affective filter</strong>, would you be fully fluent today?",
            "If you were a highly expressive <strong>Extrovert</strong> in childhood, would you have chosen a different career today?",
            "If you spent your weekends in absolute quiet <strong>Introspection</strong>, would you feel more grounded on Monday?",
            "If you spoke only in formal sentences and avoided <strong>Colloquial</strong> terms, would you feel socially isolated today?",
            "If they had shown true <strong>Empathy</strong> during your past crisis, would your relationship be stronger today?",
            "If we did not <strong>Stigmatize</strong> awkward pauses today, would our conversations feel less stressful?"
        ],
        "mistakes": [
            ("I am introverted person", "I am an introverted person / I am an introvert", "(Article syntax: singular countable nouns like 'person' or 'introvert' require the indefinite article 'an')"),
            ("I am agree with your opinion", "I agree with your opinion / I disagree with your opinion", "(Verb class syntax: 'agree' is a verb; do not use it with 'am' in active voice)"),
            ("She explained me what happened", "She explained to me what happened", "(Verb complementation: the verb 'explain' requires 'to' before the indirect object 'me')")
        ]
    },
    "guilt-moving-abroad": {
        "title": "The Guilt of Moving Abroad — COSYlanguages",
        "h1": "The Guilt of Moving Abroad",
        "desc": "This session dissects the complex, painful psychology of relocation guilt—often referred to as 'expat guilt'. We will explore the emotional conflict between the pursuit of personal autonomy and the heavy burden of familial and cultural expectations, analyzing the subconscious mourning of missed milestones and strategies to build self-continuity across borders.",
        "profile": {
            "tendency": "Seeking Personal Growth & Global Autonomy",
            "trigger": "Missing Family Milestones or Caregiver Needs",
            "phenomenon": "Relocation Guilt (Expat Guilt)",
            "anchor": "Fostering Compassionate Self-Continuity"
        },
        "vocab": [
            ("Relocation guilt", "the complex feeling of remorse and anxiety experienced by expats for leaving their home and family behind.", "Relocation guilt often intensifies during major holidays or when elderly parents experience health issues."),
            ("Autonomy", "the capacity to make independent life choices, govern oneself, and pursue individual growth.", "She chose to relocate to London to assert her professional and personal autonomy."),
            ("Expectation", "a strong belief or blueprint held by family or society regarding how one should behave.", "Confronting his family's rigid expectation was the hardest part of his decision to move abroad."),
            ("Alienation", "the state of feeling isolated, foreign, or disconnected from both one's host country and home culture.", "The expat experienced severe social alienation during her first winter in a cold, unfamiliar city."),
            ("Mourning", "the psychological process of expressing deep sorrow for a lost lifestyle, home, or relationship.", "Moving abroad triggers a unique mourning period for the physical spaces and routines we left behind."),
            ("Resilience", "the capacity to adapt to cultural shock and recover from emotional setbacks across borders.", "Building a solid local support network is critical for nurturing expat resilience."),
            ("Subconscious", "the part of the mind that processes emotional triggers and memories below active awareness.", "His relocation guilt was an automated, subconscious reaction to his childhood conditioning."),
            ("Introspection", "the focused, critical examination of one's own motivations, anxieties, and emotional state.", "Relocation requires deep introspection to ensure you are moving toward a goal rather than running away."),
            ("Perspective", "a cognitive lens or attitude regarding personal growth, family history, and cultural distance.", "Gaining a broader perspective allowed him to see that his parents' anger was just a manifestation of fear."),
            ("Authenticity", "the practice of aligning your external decisions and lifestyle with your genuine internal values.", "Living abroad with raw authenticity means accepting that you can never fully go back to who you were.")
        ],
        "warmup": [
            "Why do we feel a deep, irrational sense of betrayal and guilt for choosing our own growth over our parents' physical presence?",
            "How can we maintain a warm, meaningful connection with our family of origin when we live thousands of miles away?"
        ],
        "r1": [
            ("How does systemic <strong>Relocation guilt</strong> slowly hijack an expat's capacity to celebrate their professional success?", "★ Have you ever felt a sudden wave of guilt while enjoying a beautiful experience abroad?"),
            ("Why is the pursuit of personal <strong>Autonomy</strong> often labeled as selfish or ungrateful by traditional families?", "★ How did your family react when you made your first major, independent life-changing decision?"),
            ("How do we manage the weight of familial <strong>Expectation</strong> without sacrificing our own dreams?", "★ What is one cultural or familial expectation that you have had to courageously reject?"),
            ("Why is experiencing double <strong>Alienation</strong> (feeling like a foreigner in both countries) so common for expats?", "★ Where do you feel a true, uncompromised sense of cultural and emotional belonging today?"),
            ("What physical spaces or cultural comforts of your childhood did you find yourself <strong>Mourning</strong> after moving?", "★ How do you typically handle the bittersweet nostalgia of looking at old childhood photos?"),
            ("How can we build the psychological <strong>Resilience</strong> required to survive the initial year of cultural shock?", "★ What was the hardest emotional obstacle you had to overcome when you first lived on your own?"),
            ("How does our <strong>Subconscious</strong> mind use guilt as a tool to try and pull us back to familiar family roles?", "★ Have you ever felt that your anxiety was trying to force you to conform to what others wanted?"),
            ("Why is quiet, honest <strong>Introspection</strong> necessary to distinguish expat guilt from genuine family duty?", "★ How do you process your thoughts when you feel torn between two equally important values?"),
            ("How does cultural distance help us gain a healthier, more compassionate <strong>Perspective</strong> on our parents?", "★ How has living in different environments changed your overall perspective on family responsibilities?"),
            ("Why is maintaining our <strong>Authenticity</strong> in a foreign culture a constant, exhausting daily effort?", "★ What part of your native culture or language do you hold onto most tightly to preserve your identity?")
        ],
        "lst": "The Expat Consultation: Imagine you are a therapist consulting a client who has moved abroad but is paralyzed by relocation guilt and family expectations. Deliver your advice, explaining how they can build self-continuity using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you moved to another continent tomorrow, would you struggle with intense <strong>Relocation guilt</strong>?",
            "If you chose absolute personal <strong>Autonomy</strong> over family duty today, would you feel truly liberated?",
            "If you failed to meet your family's major <strong>Expectation</strong> today, how would you manage their disappointment?",
            "If you did not have a supportive local network, would expat <strong>Alienation</strong> completely overwhelm you?",
            "If you had not spent months <strong>Mourning</strong> your previous lifestyle, would you have integrated into this culture today?",
            "If they had trained expats to build emotional <strong>Resilience</strong>, would relocation success rates be higher?",
            "If your <strong>Subconscious</strong> guilt had not been addressed in therapy, would you have returned home years ago?",
            "If you had not practiced honest, painful <strong>Introspection</strong>, would you still be running from your past today?",
            "If you had not gained a global <strong>Perspective</strong> on your culture, would you still hold those rigid biases today?",
            "If you could live with absolute, uncompromised <strong>Authenticity</strong> today, where in the world would you choose to reside?"
        ],
        "mistakes": [
            ("I am feeling guilty of leaving them", "I feel guilty about leaving them / I experience relocation guilt for leaving them", "(Prepositional syntax: the adjective 'guilty' collocates with 'about' + gerund, or use 'guilt for' + gerund)"),
            ("It is more better to stay", "It is much better to stay / It is better to stay", "(Comparative error: 'better' is already a comparative; do not pair it with 'more', use 'much' for emphasis)"),
            ("They are not understanding my choices", "They do not understand my choices", "(Stative verb grammar: 'understand' is a stative verb and is rarely used in the continuous [-ing] form)")
        ]
    }
}

def refactor_file(filename, spec_key):
    filepath = os.path.join(MM_DIR, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} (not found)")
        return

    spec = BATCH5_THEMES[spec_key]
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Detect Level
    is_b1 = "-intermediate.html" in filename
    is_proficiency = "-proficiency.html" in filename
    level_suffix = " (B1)" if is_b1 else (" (Proficiency)" if is_proficiency else " (B2)")
    level_full = "Intermediate (B1)" if is_b1 else ("Proficiency (C2)" if is_proficiency else "Upper-Intermediate (B2)")

    if spec_key in ["blue-eyes-brown-eyes-experiment", "nazi-race-propaganda", "simmel-objective-freedom"]:
        level_suffix = ""
        level_full = "Advanced (C1)"

    # Update Title
    title_tag = soup.find('title')
    if title_tag:
        title_tag.string = f"{spec['title']}"

    # Update H1
    h1_tag = soup.find('h1')
    if h1_tag:
        h1_tag.string = spec['h1']

    # Update Breadcrumb current level text
    breadcrumbs = soup.find(class_='cosy-breadcrumbs')
    if breadcrumbs:
        current_span = breadcrumbs.find(class_='current')
        if current_span:
            base_name = spec_key.replace("-", " ").title().replace("Ai", "AI")
            current_span.string = f"{base_name}{level_suffix}"

    # Update Meta Level and Topic
    meta_grid = soup.find(class_='session-meta-grid')
    if meta_grid:
        for item in meta_grid.find_all(class_='meta-item'):
            h4 = item.find('h4')
            if h4:
                text = h4.get_text(strip=True)
                if text == "Level":
                    p = item.find('p')
                    if p:
                        p.string = level_full
                elif text in ["Topic", "Theme"]:
                    p = item.find('p')
                    if p:
                        p.string = f"Psychology of {spec['profile']['phenomenon']}"

    # Update Description Box
    desc_p = soup.find(style=re.compile("margin-bottom: 2rem;"))
    if desc_p:
        inner_p = desc_p.find('p')
        if inner_p:
            inner_p.string = spec['desc']
        else:
            desc_p.string = spec['desc']

    # Update Profile Box
    profile_box = soup.find(class_='mind-profile-box')
    if profile_box:
        grid = profile_box.find(class_='mind-profile-grid')
        if grid:
            items = grid.find_all(class_='mind-profile-item')
            if len(items) >= 4:
                items[0].find('span').string = spec['profile']['tendency']
                items[1].find('span').string = spec['profile']['trigger']
                items[2].find('span').string = spec['profile']['phenomenon']
                items[3].find('span').string = spec['profile']['anchor']

    # Update Vocabulary Section
    vocab_grid = soup.find(class_='vocab-grid-10')
    if vocab_grid:
        vocab_grid.clear()
        for word, definition, example in spec['vocab']:
            card_html = f"""<div class="vocab-card">
        <div class="vocab-word">{word}</div>
        <div class="vocab-def">{definition}</div>
        <div class="vocab-example">{example}</div>
        <button class="btn-add-dict" onclick="COSY.addToDict({{word:'{word.replace("'", "\\'")}', definition:'{definition.replace("'", "\\'")}', example:'{example.replace("'", "\\'")}'}}, this)">Add to Dictionary</button>
      </div>"""
            card_soup = BeautifulSoup(card_html, 'html.parser')
            vocab_grid.append(card_soup)

    # Update Warm-up Block
    warmup_el = soup.find(id='s-warm')
    if warmup_el:
        body = warmup_el.find(class_='round-body')
        if body:
            questions_ul = body.find('ul', class_='round-questions')
            if questions_ul:
                questions_ul.clear()
                for q in spec['warmup']:
                    li = soup.new_tag('li')
                    li.string = q
                    questions_ul.append(li)

    # Update Round 1 Block
    r1_el = soup.find(id='s-r1')
    if r1_el:
        body = r1_el.find(class_='round-body')
        if body:
            # Clear previous round items
            for item in body.find_all(class_='round-item'):
                item.decompose()
            for rtb in body.find_all(class_='round-type-badge'):
                rtb.decompose()
            for vi in body.find_all(class_='vim-instruction'):
                vi.decompose()

            # Add badge and instruction
            badge = soup.new_tag('div', attrs={"class": "round-type-badge"})
            badge.string = "Questions"
            body.append(badge)

            vi = soup.new_tag('div', attrs={"class": "vim-instruction"})
            vi.string = "10 items required. Use .round-item-main and .round-item-personal."
            body.append(vi)

            for main_q, pers_q in spec['r1']:
                item_div = soup.new_tag('div', attrs={"class": "round-item"})

                main_div = soup.new_tag('div', attrs={"class": "round-item-main"})
                main_soup = BeautifulSoup(main_q, 'html.parser')
                for el in list(main_soup.contents):
                    main_div.append(el)

                pers_div = soup.new_tag('div', attrs={"class": "round-item-personal"})
                pers_soup = BeautifulSoup(pers_q, 'html.parser')
                for el in list(pers_soup.contents):
                    pers_div.append(el)

                item_div.append(main_div)
                item_div.append('\n')
                item_div.append(pers_div)
                item_div.append('\n')
                body.append(item_div)
                body.append('\n')

    # Update Let's Speak Together Block
    lst_el = soup.find(id='s-lst')
    if lst_el:
        body = lst_el.find(class_='round-body')
        if body:
            body.clear()
            p_note = soup.new_tag('p', attrs={"class": "round-note"})
            p_soup = BeautifulSoup(spec['lst'], 'html.parser')
            for el in list(p_soup.contents):
                p_note.append(el)
            body.append(p_note)

    # Update Round 2 Block
    r2_el = soup.find(id='s-r2')
    if r2_el:
        body = r2_el.find(class_='round-body')
        if body:
            # Clear previous round items
            for item in body.find_all(class_='round-item'):
                item.decompose()
            for rtb in body.find_all(class_='round-type-badge'):
                rtb.decompose()
            for vi in body.find_all(class_='vim-instruction'):
                vi.decompose()

            # Add badge and instruction
            badge = soup.new_tag('div', attrs={"class": "round-type-badge"})
            badge.string = "Dilemmas & Projections"
            body.append(badge)

            vi = soup.new_tag('div', attrs={"class": "vim-instruction"})
            vi.string = "10 items required. Speculate, brainstorm, and share your personal opinions and ideas."
            body.append(vi)

            for main_q in spec['r2_cond']:
                item_div = soup.new_tag('div', attrs={"class": "round-item"})

                main_div = soup.new_tag('div', attrs={"class": "round-item-main"})
                main_soup = BeautifulSoup(main_q, 'html.parser')
                for el in list(main_soup.contents):
                    main_div.append(el)

                item_div.append(main_div)
                item_div.append('\n')
                body.append(item_div)
                body.append('\n')

    # Update Teacher's Note (Linguistic Corrections)
    mistakes_el = soup.find(id='s-mistakes')
    if mistakes_el:
        header = mistakes_el.find(class_='mistake-header')
        if header:
            span = header.find('span')
            if span:
                span.clear()
                span.string = "✏️ Teacher's Note (Linguistic Corrections)"

        m_body = mistakes_el.find(class_='mistake-body')
        if m_body:
            m_body.clear()
            for wrong, right, note in spec['mistakes']:
                item_html = f"""<div class="mistake-item">
        <span class="mistake-wrong">{wrong}</span>
        <span class="mistake-arrow">→</span>
        <span class="mistake-right">{right}</span>
        <span class="mistake-note-text">{note}</span>
      </div>"""
                item_soup = BeautifulSoup(item_html, 'html.parser')
                m_body.append(item_soup)

    # Save file
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(soup.prettify(formatter=None))
    print(f"Refactored: {filepath}")

def main():
    print("Beginning Mind Matters Batch 5 Refactoring...")
    for spec_key in BATCH5_THEMES.keys():
        if spec_key == "conversations-avoid-enjoy":
            files = ["conversations-avoid-enjoy-intermediate.html", "conversations-avoid-enjoy-upper-intermediate.html"]
        elif spec_key == "guilt-moving-abroad":
            files = ["guilt-moving-abroad-intermediate.html", "guilt-moving-abroad-proficiency.html"]
        elif spec_key == "blue-eyes-brown-eyes-experiment":
            files = ["blue-eyes-brown-eyes-experiment.html"]
        elif spec_key == "nazi-race-propaganda":
            files = ["nazi-race-propaganda.html"]
        elif spec_key == "simmel-objective-freedom":
            files = ["simmel-objective-freedom.html"]
        elif spec_key == "expert-defend-language-mistakes":
            files = ["expert-defend-language-mistakes.html"]
        else:
            files = [f"{spec_key}.html"]

        for filename in files:
            refactor_file(filename, spec_key)

    print("Batch 5 completed successfully!")

if __name__ == "__main__":
    main()
