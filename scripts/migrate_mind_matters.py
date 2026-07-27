import os
import re
import sys
from bs4 import BeautifulSoup

# Define the 13 English merged files to split
MERGED_FILES = {
    "the-bye-now-effect.html",
    "why-do-they-say-ai-is-inevitable.html",
    "bluewashing.html",
    "redwashing.html",
    "sportswashing.html",
    "purple-washing.html",
    "whitewashing.html",
    "pinkwashing.html",
    "brainwashing.html",
    "bounded-rationality.html",
    "aspiration-vs-inspiration.html",
    "conversations-avoid-enjoy.html",
    "guilt-moving-abroad.html"
}

# The unique attributes for each Mind Matters theme for the .mind-profile-box
MIND_PROFILES = {
    "mind-great-literature": {
        "tendency": "Intellectual Empathy",
        "trigger": "Narrative Metaphors",
        "phenomenon": "Narrative Transportation",
        "anchor": "Storytelling & Personal Identity"
    },
    "simmel-objective-freedom": {
        "tendency": "Desire for Autonomy",
        "trigger": "Modern Urban Anonymity",
        "phenomenon": "Objective vs. Subjective Culture",
        "anchor": "Individualism in Mass Society"
    },
    "moving-new-city-true-self": {
        "tendency": "Identity Reconstruction",
        "trigger": "Geographical Dislocation",
        "phenomenon": "Tabula Rasa Effect",
        "anchor": "Defining Self outside Comfort Zones"
    },
    "the-bye-now-effect": {
        "tendency": "Unconscious Asset Association",
        "trigger": "Auditory Homophones (Bye/Buy)",
        "phenomenon": "Semantic Priming",
        "anchor": "Daily Spending Impulses"
    },
    "why-do-they-say-ai-is-inevitable": {
        "tendency": "Fatalistic Surrender to Progress",
        "trigger": "Rapid Technological Milestones",
        "phenomenon": "Technological Determinism",
        "anchor": "Personal Agency & Career Fears"
    },
    "bluewashing": {
        "tendency": "Seeking Ethical Reassurance",
        "trigger": "Corporate Sustainability Pledges",
        "phenomenon": "Moral Licensing",
        "anchor": "Discerning True Corporate Intent"
    },
    "redwashing": {
        "tendency": "Empathy Exploitation",
        "trigger": "Pro-Social or Socialist Slogans",
        "phenomenon": "Virtue Signaling & Co-optation",
        "anchor": "Discerning Genuine Social Solidarity"
    },
    "sportswashing": {
        "tendency": "Hero & Spectacle Adoration",
        "trigger": "Elite Athletic Wins & Sports Events",
        "phenomenon": "Halo Effect & Associative Distraction",
        "anchor": "Separating Entertainment from Ethics"
    },
    "purple-washing": {
        "tendency": "Support for Equality",
        "trigger": "Feminist Branding & Marketing Slogans",
        "phenomenon": "Performative Allyship & Tokenism",
        "anchor": "Actions vs. Stated Progressive Values"
    },
    "whitewashing": {
        "tendency": "Discomfort with Historic Injustice",
        "trigger": "Revisionist Narratives & Media Portrayals",
        "phenomenon": "Cognitive Reframing",
        "anchor": "Embracing Uncomfortable Historical Truths"
    },
    "pinkwashing": {
        "tendency": "Compassion for Minority Groups",
        "trigger": "LGBTQ+ Pride Campaign Commercials",
        "phenomenon": "Rainbow Capitalism",
        "anchor": "Genuine Allyship vs. Profit Motives"
    },
    "brainwashing": {
        "tendency": "Social Conformity & Compliance",
        "trigger": "High-Pressure Group Environments",
        "phenomenon": "Coercive Persuasion",
        "anchor": "Safeguarding Independent Critical Thought"
    },
    "blue-eyes-brown-eyes-experiment": {
        "tendency": "Group Categorization & Outgroup Bias",
        "trigger": "Arbitrary Authority Mandates",
        "phenomenon": "Ingroup Favoritism & Pygmalion Effect",
        "anchor": "Recognizing Learned Societal Prejudices"
    },
    "brain-discipline-dopamine": {
        "tendency": "Instant Gratification Pursuit",
        "trigger": "Digital Notifications & Micro-Rewards",
        "phenomenon": "Dopamine Baseline Adjustments",
        "anchor": "Finding Joy in Deliberate Discomfort"
    },
    "guilt-moving-abroad": {
        "tendency": "Familial Duty & Attachment",
        "trigger": "Physical Separation & Milestone Absences",
        "phenomenon": "Immigrant Guilt",
        "anchor": "Reconciling Personal Growth with Family Roots"
    },
    "expert-defend-language-mistakes": {
        "tendency": "Perfectionism & Fear of Judgment",
        "trigger": "Conversational Fluency Breakdowns",
        "phenomenon": "Affective Filter Hypothesis",
        "anchor": "Embracing Mistakes as Vital Progress"
    },
    "ne-ispravlyay-rech": {
        "tendency": "Perfectionism & Fear of Judgment",
        "trigger": "Conversational Fluency Breakdowns",
        "phenomenon": "Affective Filter Hypothesis",
        "anchor": "Embracing Mistakes as Vital Progress"
    },
    "how-to-love-your-work": {
        "tendency": "Purpose & Meaning Seeking",
        "trigger": "Daily Corporate Routines & Metrics",
        "phenomenon": "Intrinsic Motivation Theory",
        "anchor": "Finding Authentic Career Alignment"
    },
    "nazi-race-propaganda": {
        "tendency": "Dehumanization & Systematic Othering",
        "trigger": "Totalitarian State Media & Crisis Narratives",
        "phenomenon": "Mass Cognitive Desensitization",
        "anchor": "Preserving Moral Empathy in Hostile Climates"
    },
    "benjamin-franklin-effect": {
        "tendency": "Consistency of Self-Image",
        "trigger": "Performing Small Favors for Others",
        "phenomenon": "Cognitive Dissonance Resolution",
        "anchor": "Rationalizing Interpersonal Relationships"
    },
    "maze-of-biases": {
        "tendency": "Mental Energy Conservation",
        "trigger": "Complex Real-World Data Surfeits",
        "phenomenon": "Confirmation Bias & Heuristics",
        "anchor": "Identifying Patterns of Subjective Logic"
    },
    "finding-the-right-person": {
        "tendency": "Desire for Perfect Unconditional Belonging",
        "trigger": "Romantic Media Representations",
        "phenomenon": "The Myth of the Soulmate",
        "anchor": "Accepting Human Flaws in Romantic Intimacy"
    },
    "fear-of-love-control": {
        "tendency": "Self-Protection & Vulnerability Avoidance",
        "trigger": "Deepening Emotional Intimacy",
        "phenomenon": "Avoidant Attachment Patterns",
        "anchor": "Overcoming Defensive Relational Barriers"
    },
    "depersonalization": {
        "tendency": "Sensory & Emotional Shielding",
        "trigger": "Prolonged Psychological Stress & Exhaustion",
        "phenomenon": "Dissociative De-realization",
        "anchor": "Grounding Yourself in Present Physical Reality"
    },
    "broken-children-grown-bodies": {
        "tendency": "Internalizing Childhood Adaptations",
        "trigger": "Current Relational Conflicts & Triggers",
        "phenomenon": "Inner Child Activation & Repetition Compulsion",
        "anchor": "Healing Adult Behavioral Shadows"
    },
    "anticipatory-grief": {
        "tendency": "Emotional Shielding against Loss",
        "trigger": "Terminal Illness or Imminent Life Transitions",
        "phenomenon": "Anticipatory Grief",
        "anchor": "Sharing Vulnerability inside Grief Processing"
    },
    "law-of-attraction": {
        "tendency": "Magical Thinking & Desire for Control",
        "trigger": "Situational Helplessness or High Ambitions",
        "phenomenon": "Just-World Hypothesis & Confirmation Bias",
        "anchor": "Balancing Personal Agency with Reality"
    },
    "impersonation": {
        "tendency": "Parasocial Adoration & Escapism",
        "trigger": "Celebrity Social Media Feeds",
        "phenomenon": "Persona Projection & Trust Deficits",
        "anchor": "Authentic Relationships vs. Virtual Facades"
    },
    "limerence": {
        "tendency": "Obsessive Romantic Idealization",
        "trigger": "Intermittent Reinforcement & Distance",
        "phenomenon": "Dopamine-Driven Romance Fantasy",
        "anchor": "Grounding Romantic Longing in Real Connection"
    },
    "kidlins-law": {
        "tendency": "Avoidance of Cognitive Load & Stress",
        "trigger": "Undefined and Intimidating Complex Challenges",
        "phenomenon": "Structured Formulation Relief",
        "anchor": "The Clarity of Writing Down Your Concerns"
    },
    "murphys-law": {
        "tendency": "Hyper-Vigilance & Negative Bias",
        "trigger": "Unfavorable Unexpected Real-World Outcomes",
        "phenomenon": "Selective Memory Retentiveness",
        "anchor": "Keeping a Sense of Humor when Plans Fail"
    },
    "wilsons-law": {
        "tendency": "Thirst for Knowledge and Competence",
        "trigger": "Challenging Problems & Skill Shortfalls",
        "phenomenon": "Competence Valuation Effect",
        "anchor": "Trusting Your Psychological Development"
    },
    "gilberts-law": {
        "tendency": "Desire for External Validation & Direction",
        "trigger": "Vague Professional Expectations or Roles",
        "phenomenon": "Executive Autonomy Dissonance",
        "anchor": "Owning Your Responsibilities and Style"
    },
    "science-of-sleep": {
        "tendency": "Underestimating Essential Biological Needs",
        "trigger": "Constant Digital Connectivity & Screen Stimulation",
        "phenomenon": "Sleep Deprivation Accumulation",
        "anchor": "Prioritizing Rest as Vital Self-Care"
    },
    "psychology-of-smiles": {
        "tendency": "Social Harmony Preservation",
        "trigger": "Tense or Uncomfortable Group Interactions",
        "phenomenon": "Duchenne vs. Non-Duchenne Distinctions",
        "anchor": "Discerning Real Joy from Social Masks"
    },
    "psychology-of-action-bias": {
        "tendency": "Avoidance of Patient Inaction",
        "trigger": "High-Pressure or Threatening Scenarios",
        "phenomenon": "Action Bias & Illusion of Control",
        "anchor": "Learning to Wait in Challenging Situations"
    },
    "power-of-habits": {
        "tendency": "Mental Routine Automatization",
        "trigger": "Environmental Cues & Boredom",
        "phenomenon": "Habit Loop (Cue, Routine, Reward)",
        "anchor": "Designing Better Daily Rituals for Inner Peace"
    },
    "syn-vlyubilsya-v-druga": {
        "tendency": "Fear of Social Disapproval",
        "trigger": "Unexpected Personal Revelations",
        "phenomenon": "Cognitive Reframing & Parental Protective Guidance",
        "anchor": "Reconciling Parental Love with Societal Prejudices"
    }
}

# Vocabulary adaptations
B1_VOCAB_ADAPTATIONS = {
    "homophone": ("homophone", "a word that sounds like another word but has a different meaning.", "The words 'bye' and 'buy' sound the same but mean different things."),
    "subconscious": ("subconscious", "the part of your mind that you are not fully aware of.", "Our subconscious mind responds quickly to ads we see in our city."),
    "influence": ("influence", "the power to change how someone acts or thinks.", "Famous stars have a big influence on what young people buy."),
    "rational": ("rational", "based on logic, reason, and clear thinking.", "A rational person plans a budget and does not spend money on impulse."),
    "irrational": ("irrational", "not based on logic or clear reason.", "It is irrational to buy things you do not need when you are sad."),
    "linguistic": ("linguistic", "relating to language or words.", "The store uses linguistic tricks to make us buy more items."),
    "trigger": ("trigger", "to cause a sudden action or feeling.", "Low prices can trigger a strong desire to go shopping."),
    "spending": ("spending", "using money to buy goods or services.", "My monthly spending went down after I started cooking at home."),
    "impulsive": ("impulsive", "acting quickly without thinking or planning.", "Her impulsive shopping trip cost her a lot of money."),
    "association": ("association", "a mental connection between two things.", "She has a happy association with the smell of sweet flowers."),
    "nudge": ("nudge", "a gentle push or encouragement to do something.", "Placing healthy fruit near the door is a nudge to eat well."),
    "inevitable": ("inevitable", "certain to happen and impossible to avoid.", "Changes in technology are inevitable in the modern world."),
    "automation": ("automation", "using machines or computers to do work instead of humans.", "The automation of factory work happened very quickly."),
    "algorithm": ("algorithm", "a set of rules that a computer follows to solve a problem.", "The search algorithm shows you products based on your past clicks."),
    "workforce": ("workforce", "all the people who work in a country or company.", "The local workforce must adapt to new computer tools."),
    "disruption": ("disruption", "a major change that stops a process from continuing normally.", "The internet caused a huge disruption in the news industry."),
    "upskill": ("upskill", "to learn new skills for your job.", "Workers need to upskill to keep their jobs in the future."),
    "redundant": ("redundant", "no longer needed for a job or task.", "When the shop closed, many workers became redundant."),
    "ai": ("AI", "artificial intelligence; machines that can learn and think.", "AI programs can write letters and draw pictures very fast."),
    "human": ("human", "relating to people instead of machines.", "We need human care and love that machines cannot give."),
    "adaptation": ("adaptation", "the process of changing to fit a new situation.", "Moving to a new city requires a lot of adaptation."),
    "optimism": ("optimism", "a feeling of hope and belief that good things will happen.", "She has a lot of optimism about her career future."),
    "bluewashing": ("bluewashing", "when a company pretends to be ethical to hide bad practices.", "Activists accused the big firm of bluewashing its image."),
    "corporate": ("corporate", "relating to a large company or business group.", "The corporate office made a plan to reduce plastic waste."),
    "pact": ("pact", "a formal agreement between people, groups, or countries.", "The nations signed a global pact to protect ocean waters."),
    "strategy": ("strategy", "a detailed plan to achieve a specific goal.", "Our marketing strategy focuses on social media ads."),
    "facade": ("facade", "a false outward appearance that hides a different reality.", "His happy smile was just a facade to hide his stress."),
    "sincerity": ("sincerity", "the quality of being open, honest, and genuine.", "We trust him because we can feel his true sincerity."),
    "deception": ("deception", "the act of hiding the truth to trick someone.", "Using fake reviews is a form of online deception."),
    "shield": ("shield", "a person or thing that protects someone from danger or blame.", "He used his status as a shield against public criticism."),
    "compliance": ("compliance", "obeying a rule, law, or official agreement.", "The factory is in full compliance with safety laws."),
    "marketing": ("marketing", "the business of presenting and selling products.", "Good marketing can make even simple products very popular."),
    "public relations": ("public relations", "managing the public image of a company or person.", "The public relations team answered questions from reporters."),
    "redwashing": ("redwashing", "pretending to care about social equality for profit.", "The brand was accused of redwashing during the labor protests."),
    "illusion": ("illusion", "something that looks real but is actually false.", "The magic trick created a beautiful illusion of flying birds."),
    "solidarity": ("solidarity", "support or agreement between people with common goals.", "The workers showed deep solidarity during the factory strike."),
    "co-opt": ("co-opt", "to take an idea or movement and use it for your own goals.", "The major company tried to co-opt the local art style."),
    "pro-social": ("pro-social", "intended to help other people and society.", "Volunteering at the hospital is a very pro-social activity."),
    "authentic": ("authentic", "real, genuine, and true to its origins.", "The restaurant serves authentic Italian pizza and pasta."),
    "disingenuous": ("disingenuous", "not candid or sincere; pretending to know less than one does.", "Her fake apology felt very disingenuous to the team."),
    "slogan": ("slogan", "a short and striking phrase used in advertising.", "The company's new slogan is simple and easy to remember."),
    "exploit": ("exploit", "to use someone or something unfairly for your own advantage.", "Some bad firms exploit young workers by paying very low wages."),
    "gesture": ("gesture", "an action done to show a feeling or intention.", "Sending flowers was a warm gesture of friendship."),
    "sentiment": ("sentiment", "a general feeling, opinion, or attitude.", "Public sentiment towards the new law is mostly positive."),
    "sportswashing": ("sportswashing", "using sports events to improve a bad reputation.", "The government used the football cup as a form of sportswashing."),
    "prestige": ("prestige", "respect or admiration gained through success or status.", "Winning the championship brought great prestige to the small school."),
    "diversion": ("diversion", "something that takes your attention away from a main issue.", "The bad news was a diversion from the financial crisis."),
    "regimes": ("regimes", "governments, especially authoritarian or undemocratic ones.", "Some regimes control all media in their countries."),
    "spectacle": ("spectacle", "a visually striking performance or public show.", "The opening ceremony of the sports event was a beautiful spectacle."),
    "host": ("host", "to organize and provide resources for an event.", "Our city is proud to host the international chess game."),
    "reputation": ("reputation", "the general opinion that people have about someone.", "The clinic has an excellent reputation for patient care."),
    "distraction": ("distraction", "something that stops you from focusing on your work.", "Playing mobile games is a major distraction for students."),
    "image": ("image", "the general impression that a person or organization presents.", "The brand spent millions to build a young and active image."),
    "reality": ("reality", "the state of things as they actually exist.", "His dream was to travel, but the reality was that he had no money."),
    "leverage": ("leverage", "the power to influence people and get what you want.", "The union used the strike as leverage to demand higher pay."),
    "purple-washing": ("purple-washing", "pretending to support women's rights for corporate gain.", "The tech firm's ad was criticized as simple purple-washing."),
    "instrumentalisation": ("instrumentalisation", "using someone or something as a tool for a goal.", "The political party was accused of the instrumentalisation of local charity."),
    "feminism": ("feminism", "the belief that women should have equal rights to men.", "She joined the feminism group to fight for equal wages."),
    "performative": ("performative", "done just for show rather than from real belief.", "Her donation felt performative because she filmed it for social media."),
    "equality": ("equality", "the state of having the same rights and opportunities.", "We strive for complete social and financial equality."),
    "empower": ("empower", "to give someone the power and confidence to succeed.", "Education can empower young girls to build bright careers."),
    "marginalise": ("marginalise", "to treat a person or group as insignificant or secondary.", "We must not marginalise elderly citizens in our community."),
    "allyship": ("allyship", "actively supporting and defending a minority group.", "True allyship requires daily actions, not just empty words."),
    "agenda": ("agenda", "a list of items or secret goals to be discussed or achieved.", "The team met to plan the agenda for the annual meeting."),
    "tokenism": ("tokenism", "doing something only to show that you are inclusive.", "Hiring just one woman on the board felt like simple tokenism."),
    "whitewashing": ("whitewashing", "covering up vices, crimes, or scandals to protect an image.", "The movie was criticized for whitewashing historical mistakes."),
    "sanitization": ("sanitization", "cleaning something to make it seem safe and acceptable.", "Her biography was a complete sanitization of her troubled past."),
    "legacy": ("legacy", "something handed down from the past or an ancestor.", "He left a proud legacy of charity and service."),
    "history": ("history", "the study of past events and social developments.", "Learning history helps us understand the modern world."),
    "controversial": ("controversial", "causing a lot of public disagreement or argument.", "The mayor's decision to close the park was highly controversial."),
    "narrative": ("narrative", "a story or a specific way of explaining events.", "The museum created a beautiful narrative about early explorers."),
    "exclude": ("exclude", "to keep someone or something out of a group.", "The club rules exclude children under twelve years of age."),
    "confront": ("confront", "to face a difficult situation or truth directly.", "We must confront our fears to grow stronger in life."),
    "evade": ("evade", "to escape or avoid something, especially by trickery.", "The suspect tried to evade the police by running down an alley."),
    "distortion": ("distortion", "changing something to make it false or misleading.", "The news article was a complete distortion of what actually happened."),
    "heritage": ("heritage", "valued traditions, culture, and objects passed down.", "We must protect our national heritage for future generations."),
    "pinkwashing": ("pinkwashing", "promoting LGBTQ+ rights to distract from other issues.", "Many firms are accused of pinkwashing during Pride month."),
    "commodification": ("commodification", "treating something as a product to be bought and sold.", "The commodification of traditional holidays irritates many citizens."),
    "diversity": ("diversity", "including people from different backgrounds and cultures.", "Our school values diversity and welcomes students from all countries."),
    "capitalise": ("capitalise", "to take advantage of a situation for financial gain.", "Stores capitalise on the holiday season to raise prices."),
    "pride": ("pride", "a feeling of self-respect and celebration of identity.", "The city hosted a parade to celebrate local pride."),
    "inclusivity": ("inclusivity", "the practice of including all kinds of people in society.", "The new club policy ensures full inclusivity for disabled members."),
    "cynicism": ("cynicism", "believing that people are motivated only by selfishness.", "Her constant cynicism makes it hard for her to trust coworkers."),
    "commercialise": ("commercialise", "to manage something mainly for financial profit.", "Some people feel that we commercialise Christmas too much."),
    "token": ("token", "done only as a small and symbolic gesture.", "They hired one minority worker as a token gesture of diversity."),
    "brainwashing": ("brainwashing", "forcing someone to believe something using high pressure.", "The group used brainwashing to make members obey their rules."),
    "architecture": ("architecture", "the design or organization of something.", "We studied the complex architecture of the human nervous system."),
    "coercive": ("coercive", "using force or threats to make someone do something.", "The police warned against coercive behavior in the family."),
    "persuasion": ("persuasion", "the act of convincing someone to do or believe something.", "He used gentle persuasion to convince us to join his club."),
    "manipulation": ("manipulation", "controlling or influencing someone in an unfair way.", "He is an expert at emotional manipulation and guilt."),
    "indoctrinate": ("indoctrinate", "to teach someone to accept a set of beliefs without question.", "The school tried to indoctrinate students with political slogans."),
    "vulnerability": ("vulnerability", "the state of being easily hurt or influenced.", "Her financial trouble increased her vulnerability to online scams."),
    "resistance": ("resistance", "refusing to accept or comply with something.", "There was strong public resistance to the new tax system."),
    "conformity": ("conformity", "acting in the same way as everyone else in a group.", "Teenagers often show conformity in their clothing choices."),
    "critical": ("critical", "expressing objective analysis and evaluation.", "Critical thinking is the most important skill for a young student."),
    "destabilise": ("destabilise", "to make a system, government, or mind unstable.", "The sudden financial crisis threatened to destabilise the country."),
    "bounded": ("bounded", "limited in size, amount, or scope.", "Our budget is bounded, so we must spend our money very carefully."),
    "rationality": ("rationality", "the quality of being consistent with logic and reason.", "We must make decisions based on rationality, not sudden fear."),
    "constrained": ("constrained", "restricted or limited by external forces.", "The school felt constrained by the very small playground."),
    "cognitive": ("cognitive", "relating to the mental processes of perception and thought.", "Reading books helps protect our cognitive health as we grow older."),
    "satisficing": ("satisficing", "choosing an option that is good enough, not perfect.", "Satisficing is a useful strategy when you have very little time."),
    "heuristics": ("heuristics", "simple mental shortcuts used to make quick decisions.", "We often use heuristics when we buy groceries at the store."),
    "bias": ("bias", "a preference for or against something, often unfair.", "The manager showed a clear bias toward his old friends."),
    "optimize": ("optimize", "to make something as perfect or effective as possible.", "We need to optimize our study schedule to get better grades."),
    "settle": ("settle", "to accept a choice that is stable, even if not ideal.", "Since we were tired, we decided to settle on the nearest hotel."),
    "decision-making": ("decision-making", "the process of making choices, especially major ones.", "Good decision-making requires calm thinking and reliable data."),
    "limits": ("limits", "the points or lines where something must stop.", "Every human mind has natural limits to what it can remember."),
    "aspiration": ("aspiration", "a strong hope or ambition of achieving something.", "Her highest aspiration is to become a research scientist."),
    "inspiration": ("inspiration", "a sudden brilliant idea or feeling that guides you.", "The beautiful sunset was the main inspiration for his new painting."),
    "goal-oriented": ("goal-oriented", "focused on achieving specific and clear results.", "He is very goal-oriented and tracks his progress every week."),
    "drive": ("drive", "a strong determination and energy to succeed.", "You need true personal drive to study a new language alone."),
    "internal": ("internal", "coming from inside a person, system, or organization.", "Intrinsic motivation is an internal force that guides our habits."),
    "external": ("external", "coming from outside a person, system, or organization.", "Grades and money are external rewards that influence students."),
    "pursue": ("pursue", "to follow or chase a goal, path, or person.", "She decided to pursue a university degree in foreign literature."),
    "spark": ("spark", "a small quality or event that starts a major process.", "The teacher's warm words were the spark that started my hobby."),
    "imitation": ("imitation", "copying the behavior, style, or look of someone else.", "The child's drawing was a simple imitation of her mother's art."),
    "long-term": ("long-term", "occurring over a long period of time.", "Learning a language is a long-term project that requires patience."),
    "motivate": ("motivate", "to provide someone with a strong reason to do something.", "We want to motivate young people to read more books."),
    "avoid": ("avoid", "to keep away from or stop oneself from doing something.", "I try to avoid drinking sweet soda before going to bed."),
    "enjoy": ("enjoy", "to take pleasure or find satisfaction in something.", "We enjoy walking in the green forest on sunny mornings."),
    "empathy": ("empathy", "the ability to understand and share the feelings of another.", "A good therapist shows deep empathy toward their patients."),
    "connection": ("connection", "a feeling of closeness and understanding between people.", "Sharing a hot meal creates a warm connection between friends."),
    "awkward": ("awkward", "causing or feeling embarrassed or uncomfortable.", "There was an awkward silence when no one knew what to say."),
    "smooth": ("smooth", "without difficulties, problems, or sudden interruptions.", "Our conversation was very smooth and lasted for three hours."),
    "comfort": ("comfort", "a state of physical ease and freedom from pain or worry.", "He found great comfort in reading his favorite childhood books."),
    "vulnerability": ("vulnerability", "showing your true feelings and risking being hurt.", "Sharing your fears requires a lot of personal vulnerability."),
    "trust": ("trust", "believing that someone is honest, good, and reliable.", "A strong friendship is always built on mutual trust."),
    "listening": ("listening", "paying close attention to what someone is saying.", "Good listening is just as important as speaking clearly."),
    "shallow": ("shallow", "simple and not deep; focusing only on easy topics.", "We had a shallow chat about the warm summer weather."),
    "self-actualization": ("self-actualization", "realizing or fulfilling your personal talents and potential.", "Moving to a global city offered her the career self-actualization she wanted."),
    "estrangement": ("estrangement", "being alienated or separated from family or home culture.", "Long physical distance can sometimes lead to emotional estrangement from old friends."),
    "guilt-ridden": ("guilt-ridden", "deeply troubled by persistent feelings of guilt.", "Many expats feel guilt-ridden when celebrating major events away from parents."),
    "nostalgia": ("nostalgia", "a sentimental longing or sweet memory of the past.", "She felt a wave of sweet nostalgia when she heard her childhood song."),
    "modernity": ("modernity", "the quality of being modern, up-to-date, and advanced.", "The cold modernity of the big city made her long for her quiet village."),
    "alienation": ("alienation", "the feeling of being isolated or separated from a group.", "Not speaking the local language can intensify a feeling of alienation."),
    "resentment": ("resentment", "bitter anger at being treated unfairly or left behind.", "She struggled with subtle resentment from friends who stayed behind."),
    "adaptability": ("adaptability", "the ability to adjust easily to brand new conditions.", "Moving abroad requires high emotional adaptability and patience."),
    "belonging": ("belonging", "a comfortable feeling of acceptance in a place or group.", "It takes several years of living in a country to develop a sense of belonging."),
    "sacrifice": ("sacrifice", "giving up something valued for a more important goal.", "Leaving your country is a massive sacrifice for future career chances."),
    "reconcile": ("reconcile", "making two different situations or feelings exist together.", "Expats must learn how to reconcile their roots with their new lives.")
}

def simplify_rounds_for_b1(rounds_html, file_vocab_keys):
    text = rounds_html
    substitutions = {
        "subconsciously nudges": "nudges us",
        "subconscious triggers": "triggers",
        "technological determinism": "AI technology",
        "socio-political pressures": "social pressures",
        "pathological pain": "pain",
        "synaptic transmission": "signals",
        "pathways": "routes",
        "systemic chaos": "chaos",
        "unpredictability": "changes",
        "cognitive adaptations": "thinking",
        "mitigation consensus": "consensus",
        "thermonuclear fusion": "fusion energy",
        "demographic contraction": "fewer young people",
        "lexical attrition": "losing words",
        "parasocial": "one-sided",
        "idealization": "dreaming",
        "cognitive intrusion": "constant thoughts",
        "dopamine-driven": "excited",
        "intermittent reinforcement": "sometimes being rewarded",
        "unattainable": "distant",
        "self-actualization": "<strong>self-actualization</strong>",
        "estrangement": "<strong>estrangement</strong>",
        "guilt-ridden": "<strong>guilt-ridden</strong>",
        "nostalgia": "<strong>nostalgia</strong>",
        "modernity": "<strong>modernity</strong>",
        "alienation": "<strong>alienation</strong>",
        "resentment": "<strong>resentment</strong>",
        "adaptability": "<strong>adaptability</strong>",
        "belonging": "<strong>belonging</strong>",
        "sacrifice": "<strong>sacrifice</strong>",
        "reconcile": "<strong>reconcile</strong>",
    }
    for k, v in substitutions.items():
        text = re.sub(r'\b' + re.escape(k) + r'\b', v, text, flags=re.IGNORECASE)

    for v_key in file_vocab_keys:
        pattern = r'(?<!<strong>)\b' + re.escape(v_key) + r'\b(?!</strong>)'
        text = re.sub(pattern, f"<strong>{v_key}</strong>", text, flags=re.IGNORECASE)
        if "≠" in v_key:
            parts = [p.strip() for p in v_key.split("≠")]
            for p in parts:
                p_pattern = r'(?<!<strong>)\b' + re.escape(p) + r'\b(?!</strong>)'
                text = re.sub(p_pattern, f"<strong>{p}</strong>", text, flags=re.IGNORECASE)
    return text

def parse_and_split(filepath, filename):
    # Read the full file content first
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # Extract original text details
    title_match = re.search(r'<title>(.*?)</title>', content)
    original_title = title_match.group(1).replace(" — COSYlanguages", "") if title_match else "Session Title"

    h1_match = re.search(r'<h1>(.*?)</h1>', content)
    original_h1 = h1_match.group(1) if h1_match else "Session Title"

    breadcrumbs_match = re.search(r'<span class="current">(.*?)</span>', content)
    original_current = breadcrumbs_match.group(1) if breadcrumbs_match else "Session Title"

    slug = filename.replace(".html", "")
    profile = MIND_PROFILES.get(slug, {
        "tendency": "Cognitive Processing",
        "trigger": "Subconscious Stimuli",
        "phenomenon": "Psychological Reflection",
        "anchor": "Personal Self-Discovery"
    })

    profile_html = f"""
  <div class="mind-profile-box">
    <h3>🧠 Subconscious Mind Profile</h3>
    <div class="mind-profile-grid">
      <div class="mind-profile-item">
        <strong>Core Human Tendency</strong>
        <span>{profile['tendency']}</span>
      </div>
      <div class="mind-profile-item">
        <strong>Subconscious Trigger</strong>
        <span>{profile['trigger']}</span>
      </div>
      <div class="mind-profile-item">
        <strong>Psychological Phenomenon</strong>
        <span>{profile['phenomenon']}</span>
      </div>
      <div class="mind-profile-item">
        <strong>Self-Reflection Anchor</strong>
        <span>{profile['anchor']}</span>
      </div>
    </div>
  </div>
"""

    vocab_grid = soup.find(class_='vocab-grid-10')
    if not vocab_grid:
        print(f"No vocab-grid-10 in {filename}", file=sys.stderr)
        return

    # Parse vocab cards using BeautifulSoup find_all
    vocab_cards = vocab_grid.find_all(class_='vocab-card')
    parsed_cards = []
    for card in vocab_cards:
        word_div = card.find(class_='vocab-word')
        def_div = card.find(class_='vocab-def')
        ex_div = card.find(class_='vocab-example')
        if word_div and def_div and ex_div:
            parsed_cards.append({
                "word": word_div.get_text().strip(),
                "definition": def_div.get_text().strip(),
                "example": ex_div.get_text().strip()
            })

    vocab_keys = [c["word"] for c in parsed_cards]

    rounds_match = re.search(r'<section id="structure">.*?</main>', content, re.DOTALL)
    if not rounds_match:
        rounds_match = re.search(r'<section id="structure-rounds">.*?</main>', content, re.DOTALL)

    if not rounds_match:
        print(f"Could not find structure/rounds block in {filename}", file=sys.stderr)
        return

    original_rounds_html = rounds_match.group(0)

    # ─── B1 (Intermediate) Version ───
    b1_filename = filename.replace(".html", "-intermediate.html")
    b1_level_label = "Intermediate (B1)"

    b1_cards_html = ""
    for card in parsed_cards:
        w = card["word"]
        w_lower = w.lower()
        adapted = None
        for k, v in B1_VOCAB_ADAPTATIONS.items():
            if k in w_lower:
                adapted = v
                break

        if adapted:
            adapted_word, adapted_def, adapted_example = adapted
            word_to_use = w
            def_to_use = adapted_def
            example_to_use = adapted_example
        else:
            word_to_use = w
            def_to_use = card["definition"]
            example_to_use = card["example"]

        b1_cards_html += f"""      <div class="vocab-card"><div class="vocab-word">{word_to_use}</div>
<div class="vocab-def">{def_to_use}</div>
<div class="vocab-example">{example_to_use}</div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{word_to_use.replace("'", "\\'")}', definition:'{def_to_use.replace("'", "\\'")}', example:'{example_to_use.replace("'", "\\'")}'}}, this)">Add to Dictionary</button>
</div>\n"""

    b1_vocab_section = f"""<section id="vocabulary">
    <h2 class="section-title">📖 Session Vocabulary</h2>
    <div class="vocab-grid-10">
{b1_cards_html}    </div>
  </section>"""

    b1_rounds_html = simplify_rounds_for_b1(original_rounds_html, vocab_keys)

    b1_content = content
    b1_content = b1_content.replace(f"<title>{original_title} — COSYlanguages</title>", f"<title>{original_title} (Intermediate) — COSYlanguages</title>")
    b1_content = b1_content.replace(f"<h1>{original_h1}</h1>", f"<h1>{original_h1.split(':')[0]} (Intermediate)</h1>")
    b1_content = b1_content.replace(f'<span class="current">{original_current}</span>', f'<span class="current">{original_current} (B1)</span>')

    b1_content = re.sub(r'<h4>Level</h4><p>.*?</p>', f'<h4>Level</h4><p>{b1_level_label}</p>', b1_content)
    b1_content = re.sub(r'<h4>Niveau</h4><p>.*?</p>', f'<h4>Niveau</h4><p>Intermédiaire (B1)</p>', b1_content)

    vocab_start_idx = b1_content.find('<section id="vocabulary">')
    main_end_idx = b1_content.find('</main>')

    if vocab_start_idx != -1 and main_end_idx != -1:
        rounds_clean = b1_rounds_html
        if rounds_clean.endswith('</main>'):
            rounds_clean = rounds_clean[:-7]
        adapted_block = b1_vocab_section + "\n  " + rounds_clean
        b1_content = b1_content[:vocab_start_idx] + adapted_block + b1_content[main_end_idx:]

    b1_content = b1_content.replace('<section id="vocabulary">', profile_html + '\n  <section id="vocabulary">')

    b1_path = os.path.join(os.path.dirname(filepath), b1_filename)
    with open(b1_path, 'w', encoding='utf-8') as f:
        f.write(b1_content)
    print(f"Generated B1 session: {b1_path}")


    # ─── B2 (Upper-Intermediate) / C2 (Proficiency) Version ───
    b2_suffix = "-proficiency.html" if "guilt-moving-abroad" in filename else "-upper-intermediate.html"
    b2_level_tag = "Proficiency (C2)" if "guilt-moving-abroad" in filename else "Upper-Intermediate (B2)"
    b2_level_short = "C2" if "guilt-moving-abroad" in filename else "B2"

    b2_filename = filename.replace(".html", b2_suffix)

    b2_content = content
    b2_content = b2_content.replace(f"<title>{original_title} — COSYlanguages</title>", f"<title>{original_title} ({b2_level_tag.split(' ')[0]}) — COSYlanguages</title>")
    b2_content = b2_content.replace(f"<h1>{original_h1}</h1>", f"<h1>{original_h1.split(':')[0]} ({b2_level_tag.split(' ')[0]})</h1>")
    b2_content = b2_content.replace(f'<span class="current">{original_current}</span>', f'<span class="current">{original_current} ({b2_level_short})</span>')

    b2_content = re.sub(r'<h4>Level</h4><p>.*?</p>', f'<h4>Level</h4><p>{b2_level_tag}</p>', b2_content)
    b2_content = re.sub(r'<h4>Niveau</h4><p>.*?</p>', f'<h4>Niveau</h4><p>{b2_level_tag}</p>', b2_content)

    b2_content = b2_content.replace('<section id="vocabulary">', profile_html + '\n  <section id="vocabulary">')

    rounds_match_b2 = re.search(r'(<section id="structure">.*?</main>|<section id="structure-rounds">.*?</main>)', b2_content, re.DOTALL)
    if rounds_match_b2:
        orig_rounds_b2 = rounds_match_b2.group(0)
        calibrated_rounds_b2 = orig_rounds_b2
        for v_key in vocab_keys:
            pattern = r'(?<!<strong>)\b' + re.escape(v_key) + r'\b(?!</strong>)'
            calibrated_rounds_b2 = re.sub(pattern, f"<strong>{v_key}</strong>", calibrated_rounds_b2, flags=re.IGNORECASE)
            if "≠" in v_key:
                parts = [p.strip() for p in v_key.split("≠")]
                for p in parts:
                    p_pattern = r'(?<!<strong>)\b' + re.escape(p) + r'\b(?!</strong>)'
                    calibrated_rounds_b2 = re.sub(p_pattern, f"<strong>{p}</strong>", calibrated_rounds_b2, flags=re.IGNORECASE)
        b2_content = b2_content.replace(orig_rounds_b2, calibrated_rounds_b2)

    b2_path = os.path.join(os.path.dirname(filepath), b2_filename)
    with open(b2_path, 'w', encoding='utf-8') as f:
        f.write(b2_content)
    print(f"Generated B2/C2 session: {b2_path}")

    # Remove the original merged file
    os.remove(filepath)
    print(f"Removed original merged file: {filepath}")

def process_standalone(filepath, filename):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    slug = filename.replace(".html", "")
    profile = MIND_PROFILES.get(slug)
    if not profile:
        if filename == "ne-ispravlyay-rech.html":
            profile = MIND_PROFILES["expert-defend-language-mistakes"]
        elif filename == "syn-vlyubilsya-v-druga.html":
            profile = MIND_PROFILES["syn-vlyubilsya-v-druga"]
        else:
            for k, v in MIND_PROFILES.items():
                if k in slug or slug in k:
                    profile = v
                    break

    if not profile:
        profile = {
            "tendency": "Cognitive Processing",
            "trigger": "Subconscious Stimuli",
            "phenomenon": "Psychological Reflection",
            "anchor": "Personal Self-Discovery"
        }

    profile_html = f"""
  <div class="mind-profile-box">
    <h3>🧠 Subconscious Mind Profile</h3>
    <div class="mind-profile-grid">
      <div class="mind-profile-item">
        <strong>Core Human Tendency</strong>
        <span>{profile['tendency']}</span>
      </div>
      <div class="mind-profile-item">
        <strong>Subconscious Trigger</strong>
        <span>{profile['trigger']}</span>
      </div>
      <div class="mind-profile-item">
        <strong>Psychological Phenomenon</strong>
        <span>{profile['phenomenon']}</span>
      </div>
      <div class="mind-profile-item">
        <strong>Self-Reflection Anchor</strong>
        <span>{profile['anchor']}</span>
      </div>
    </div>
  </div>
"""

    if "class=\"mind-profile-box\"" in content:
        return

    if '<section id="vocabulary">' in content:
        content = content.replace('<section id="vocabulary">', profile_html + '\n  <section id="vocabulary">')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Injected profile box into standalone: {filepath}")

def main():
    en_dir = "events/sessions/mind-matters"
    filenames = sorted(os.listdir(en_dir))
    for filename in filenames:
        if not filename.endswith(".html"):
            continue
        filepath = os.path.join(en_dir, filename)
        if filename in MERGED_FILES:
            parse_and_split(filepath, filename)
        else:
            process_standalone(filepath, filename)

    fr_dir = "events/fr/sessions/mind-matters"
    if os.path.exists(fr_dir):
        for filename in sorted(os.listdir(fr_dir)):
            if filename.endswith(".html"):
                filepath = os.path.join(fr_dir, filename)
                process_standalone(filepath, filename)

    ru_dir = "events/ru/sessions/mind-matters"
    if os.path.exists(ru_dir):
        for filename in sorted(os.listdir(ru_dir)):
            if filename.endswith(".html"):
                filepath = os.path.join(ru_dir, filename)
                process_standalone(filepath, filename)

if __name__ == "__main__":
    main()
