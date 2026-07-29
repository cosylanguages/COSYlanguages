import os
import re
from bs4 import BeautifulSoup

MM_DIR = "events/sessions/mind-matters"

BATCH3_THEMES = {
    "benjamin-franklin-effect": {
        "title": "The Benjamin Franklin Effect — COSYlanguages",
        "h1": "The Benjamin Franklin Effect — The Psychology of Interpersonal Chemistry",
        "desc": "This session deconstructs the counter-intuitive Benjamin Franklin Effect—the psychological mechanism where performing a favor for someone actually increases our affection for them. We will examine how the brain resolves cognitive dissonance by reframing our social preferences to align with our investments of effort.",
        "profile": {
            "tendency": "Consistency of Self-Image",
            "trigger": "Performing Small Favors for Others",
            "phenomenon": "Cognitive Dissonance Resolution",
            "anchor": "Rationalizing Interpersonal Relationships"
        },
        "vocab": [
            ("Interpersonal chemistry", "the psychological and emotional connection that develops between individuals.", "They mistook their shared project struggles for a rare, organic interpersonal chemistry."),
            ("Cognitive dissonance", "the mental discomfort that occurs when a person's behavior contradicts their beliefs.", "Asking an adversary for a favor triggers cognitive dissonance, forcing them to re-evaluate their dislike."),
            ("Self-perception theory", "the psychological model suggesting we determine our attitudes by observing our own behavior.", "According to self-perception theory, we conclude we like someone because we chose to help them."),
            ("Reciprocity", "the social norm of exchanging actions, kindness, or benefits for mutual advantage.", "True connection transcends simple reciprocity; it reshapes our underlying emotional alignments."),
            ("Adversary", "an opponent, competitor, or person who opposes or is hostile toward another.", "Franklin successfully transformed a bitter political adversary into a lifelong, cooperative ally."),
            ("Attitude", "a settled way of thinking or feeling about someone, typically reflected in behavior.", "His hostile attitude softened immediately after he agreed to lend his rare book."),
            ("Favor", "an act of kindness or helpfulness beyond what is strictly required or expected.", "Lending the rare book was a strategic favor designed to resolve political tension."),
            ("Connection", "an emotional or intellectual relationship characterized by deep mutual understanding.", "A small, cooperative gesture can establish a profound, lasting connection between complete strangers."),
            ("Indebtedness", "the state of feeling obliged or duty-bound to return a benefit or kindness.", "He disliked the feeling of social indebtedness, preferring to keep his relationships strictly transactional."),
            ("Cooperate", "to work or act together with others to achieve shared goals or mutual benefits.", "When forced to cooperate on a crisis, rivals often discover their shared humanity and values.")
        ],
        "warmup": [
            "Do we help people because we like them, or do we like them because we have helped them?",
            "Is our affection for other people just a story we tell ourselves to justify our actions?"
        ],
        "r1": [
            ("How does the brain utilize <strong>Interpersonal chemistry</strong> as a convenient cover for simple self-justification?", "★ Have you ever felt a sudden spark of <strong>Interpersonal chemistry</strong> that you later realized was purely situational?"),
            ("Why does performing a favor for an <strong>Adversary</strong> trigger intense <strong>Cognitive dissonance</strong> in their mind?", "★ When was the last time you experienced severe <strong>Cognitive dissonance</strong> after helping someone you didn't respect?"),
            ("How does <strong>Self-perception theory</strong> challenge the romantic notion that our likes and dislikes are deeply authentic?", "★ Do you determine your own beliefs by analyzing your past behavior, or do you feel they are innate?"),
            ("Is social <strong>Reciprocity</strong> a universal human instinct, or is it a calculated survival mechanism?", "★ How do you react when someone violates the unwritten rules of social <strong>Reciprocity</strong> in your network?"),
            ("Why is it psychologically easier to ask an <strong>Adversary</strong> for help than to offer them a direct gift?", "★ Have you ever swallowed your pride to ask a professional <strong>Adversary</strong> for technical assistance?"),
            ("To what extent can we consciously reprogram our hostile <strong>Attitude</strong> toward a colleague through small shared tasks?", "★ What is the hardest part about maintaining a neutral, professional <strong>Attitude</strong> in a toxic workplace?"),
            ("What distinguishes a genuine <strong>Favor</strong> from a calculated, manipulative transaction in corporate networking?", "★ Can you recall a time you did a substantial <strong>Favor</strong> for someone who never acknowledged your effort?"),
            ("How do simple, shared activities slowly build a secure, psychological <strong>Connection</strong> between strangers?", "★ Where do you feel the most secure emotional <strong>Connection</strong> in your current professional circle?"),
            ("Why does a sense of social <strong>Indebtedness</strong> often make us feel uncomfortable and defensive?", "★ Have you ever avoided a colleague because you felt an overwhelming sense of <strong>Indebtedness</strong> toward them?"),
            ("Do people automatically learn to respect rivals when they are forced to <strong>Cooperate</strong> under high stress?", "★ How do you motivate yourself to <strong>Cooperate</strong> with someone whose personality you deeply dislike?")
        ],
        "lst": "The Chemistry Formula: Imagine you are a negotiator trying to reconcile two bitter corporate founders. Design a strategy to build a connection using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you asked your rival for a small <strong>Favor</strong> tomorrow, would they secretly begin to respect you more?",
            "If modern society banned all transactional favors, do you think we would still experience social <strong>Reciprocity</strong>?",
            "If your brain automatically resolved all <strong>Cognitive dissonance</strong>, would you lose your capacity for self-reflection?",
            "If you had applied <strong>Self-perception theory</strong> to your last conflict, would you have avoided that bitter argument?",
            "If they had chosen to <strong>Cooperate</strong> back then, would their company have achieved industry dominance today?",
            "If your past partner had shown true <strong>Sincerity</strong> in their actions, would you still be together today?",
            "If you had not felt that subtle sense of <strong>Indebtedness</strong>, would you have quit that high-pressure job much sooner?",
            "If you had never developed that unique <strong>Connection</strong> with your mentor, where would you be working today?",
            "If their toxic <strong>Attitude</strong> had not been addressed by HR last year, would you still be with the company today?",
            "If you had known the psychology of the Franklin effect, would you have transformed that <strong>Adversary</strong> into an ally?"
        ]
    },
    "bounded-rationality": {
        "title": "Bounded Rationality: The Limits of Decision Making",
        "h1": "Bounded Rationality — The Limits of Decision Making",
        "desc": "This session explores Bounded Rationality—the psychological reality that human decision-making is strictly limited by cognitive constraints, time, and available information. We will examine how our minds default to 'satisficing' (choosing a good-enough option) rather than optimizing, and discuss how this shapes modern consumer choices and financial anxiety.",
        "profile": {
            "tendency": "Seeking Perfection in Complex Situations",
            "trigger": "Information Overload & Time Constraints",
            "phenomenon": "Satisficing vs. Optimizing",
            "anchor": "Accepting Cognitive and Information Limits"
        },
        "vocab": [
            ("Satisficing", "the decision-making strategy of choosing an option that is 'good enough' rather than optimal.", "Faced with fifty different options, he settled on a satisficing choice to save time and energy."),
            ("Optimizing", "the cognitively demanding process of searching for the absolute best possible outcome.", "The algorithm spent hours optimizing the route, while the driver preferred a simple, satisficing path."),
            ("Heuristic", "a cognitive shortcut or rule of thumb used to make decisions quickly.", "She relied on a simple heuristic: if a product has thousands of positive reviews, it is safe to buy."),
            ("Cognitive limit", "the boundary of human mental capacity to process complex data and variables.", "The sudden influx of market data pushed his cognitive limit to the absolute breaking point."),
            ("Anxiety", "the feeling of worry, nervousness, or unease about an uncertain outcome.", "Information overload in the modern digital landscape directly fuels our chronic decision anxiety."),
            ("Sovereignty", "the state of having independent authority or complete freedom of choice.", "Consumer sovereignty is often an illusion manufactured by sophisticated marketing algorithms."),
            ("Pragmatic", "dealing with things sensibly and realistically in a way that is based on practical considerations.", "He took a pragmatic approach to his career, choosing stability over a risky search for a perfect dream job."),
            ("Optimization", "the action of making the best or most effective use of a situation or resource.", "The constant optimization of our personal lives through tracking apps can lead to severe burnout."),
            ("Satiation", "the state of being completely satisfied or filled to maximum capacity.", "The constant stream of entertainment leads to mental satiation, making simple pleasures feel boring."),
            ("Information-processing", "the cognitive system of gathering, analyzing, and storing external data.", "Our brain's information-processing speed has not kept pace with the rapid growth of the digital world.")
        ],
        "warmup": [
            "Are we truly rational decision-makers, or are we just tired biological systems looking for 'good enough' shortcuts?",
            "Why does having unlimited options often make us feel less satisfied with our ultimate choice?"
        ],
        "r1": [
            ("How does <strong>Satisficing</strong> protect our psychological well-being from the exhaustion of modern consumer culture?", "★ When was the last time you made a quick, <strong>Satisficing</strong> decision that turned out to be perfect?"),
            ("Why is the pursuit of absolute <strong>Optimizing</strong> in relationships a recipe for chronic dissatisfaction?", "★ Have you ever felt paralyzed by the pressure of <strong>Optimizing</strong> every single aspect of your career?"),
            ("Which mental <strong>Heuristic</strong> do you rely on most often when navigating high-stakes professional crises?", "★ Can you identify a personal <strong>Heuristic</strong> that has occasionally led you to make a major error?"),
            ("How does modern software exploit our <strong>Cognitive limit</strong> to nudge us toward predictable behavior?", "★ When did you last feel that you had reached your absolute <strong>Cognitive limit</strong> during a discussion?"),
            ("Why does the illusion of unlimited choice directly trigger deep, underlying decision <strong>Anxiety</strong>?", "★ How do you personally manage your <strong>Anxiety</strong> when forced to make a life-changing choice under pressure?"),
            ("To what extent does algorithmic targeting undermine our individual decision <strong>Sovereignty</strong>?", "★ Do you believe that you retain complete <strong>Sovereignty</strong> over your daily political and social opinions?"),
            ("Why is a <strong>Pragmatic</strong> choice often far more valuable than a theoretically perfect solution in business?", "★ How <strong>Pragmatic</strong> are you when managing your household budget versus your creative passions?"),
            ("Does the continuous <strong>Optimization</strong> of our lives leave any room for spontaneous joy and chance?", "★ What is one area of your life where you refuse to practice any form of self-<strong>Optimization</strong>?"),
            ("Why does digital media aim for complete sensory <strong>Satiation</strong> rather than intellectual growth?", "★ Have you ever reached a point of complete <strong>Satiation</strong> where even your favorite hobby felt boring?"),
            ("How can we improve our <strong>Information-processing</strong> habits to protect ourselves from digital burnout?", "★ What strategy do you use to filter out irrelevant data and protect your <strong>Information-processing</strong> focus?")
        ],
        "lst": "The Choice Paradox: Imagine you are advising a friend who is paralyzed by choice while looking for a new apartment. Guide them to a decision using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you adopted a purely <strong>Satisficing</strong> strategy tomorrow, would your daily stress levels drop significantly?",
            "If search engines stopped ranking results, would you find <strong>Optimizing</strong> your purchases completely impossible?",
            "If you relied solely on a logical <strong>Heuristic</strong>, would you lose your capacity for creative intuition?",
            "If you had respected your <strong>Cognitive limit</strong> last year, would you have avoided that severe burnout?",
            "If they had designed a more <strong>Pragmatic</strong> interface, would their software have dominated the market today?",
            "If your brain had not been overwhelmed by choice, would you now feel less decision <strong>Anxiety</strong> about your path?",
            "If you had maintained complete <strong>Sovereignty</strong> over your time back then, would you be living in a different city today?",
            "If your self-<strong>Optimization</strong> habits had been less intense, would you feel more content with your life today?",
            "If we had reached a state of digital <strong>Satiation</strong> years ago, would we now spend more time in nature?",
            "If our <strong>Information-processing</strong> speed had been doubled by evolution, would we still struggle with modern complexity today?"
        ]
    },
    "gilberts-law": {
        "title": "Gilbert's Law: The Challenge of Autonomy",
        "h1": "Gilbert's Law — The Silent Burden of Autonomy",
        "desc": "This session deconstructs Gilbert's Law—the workplace reality that 'the biggest problem with a job is that no one tells you exactly what to do.' We will discuss the psychological tension between the desire for professional freedom and the acute anxiety of navigating undefined roles and ambiguous expectations. Together, we will analyze strategies to foster self-direction and build confidence under uncertain environments.",
        "profile": {
            "tendency": "Desire for External Validation & Direction",
            "trigger": "Vague Professional Expectations or Roles",
            "phenomenon": "Executive Autonomy Dissonance",
            "anchor": "Owning Your Responsibilities and Style"
        },
        "vocab": [
            ("Autonomy", "the right or capacity of self-government, independent decision-making, and freedom.", "She demanded complete professional autonomy, refusing to be micro-managed by her supervisor."),
            ("Ambiguity", "the quality of being open to more than one interpretation; lack of clarity.", "The extreme ambiguity of his new corporate role triggered a sense of deep insecurity."),
            ("Initiative", "the ability to assess and start things independently without external prompting.", "He showed great initiative by designing a new workflow before the manager even identified the bottleneck."),
            ("Micromanagement", "the controlling style of management characterized by excessive attention to minor details.", "Constant micromanagement destroys employee morale and completely stifles individual creativity."),
            ("Accountability", "the obligation to explain, justify, or take responsibility for one's actions.", "With great autonomy comes absolute accountability for both successes and failures."),
            ("Proactive", "taking action in advance to control a situation rather than responding after the fact.", "An exceptionally proactive employee anticipates market changes and adapts before a crisis occurs."),
            ("Expectation", "a strong belief or blueprint regarding what should happen or how one should behave.", "The primary source of conflict in partnerships is a set of unexpressed, rigid expectations."),
            ("Uncertainty", "the psychological state of having doubt, lack of clarity, or unpredictable outcomes.", "Navigating career uncertainty requires a high degree of emotional resilience and adaptability."),
            ("Self-direction", "the capacity to regulate, direct, and motivate one's own activities and choices.", "Remote work structures require an advanced level of self-direction to prevent procrastination."),
            ("Feedback", "critical information about reactions to a product or a person's performance used for improvement.", "Constructive, timely feedback is the psychological fuel that drives professional development.")
        ],
        "warmup": [
            "Why do we crave professional freedom but panic when we are given no clear instructions?",
            "Is the silent burden of 'figuring it out alone' the hidden cost of a high-status career?"
        ],
        "r1": [
            ("How does having total <strong>Autonomy</strong> in a creative project occasionally trigger cognitive paralysis?", "★ How important is professional <strong>Autonomy</strong> to your daily sense of job satisfaction?"),
            ("Why is <strong>Ambiguity</strong> in corporate communication often used as a tool to shift blame?", "★ How do you personally handle <strong>Ambiguity</strong> when receiving critical instructions from a client?"),
            ("In what professional situations is taking the <strong>Initiative</strong> far more valuable than following the rulebook?", "★ When was the last time you took the <strong>Initiative</strong> to resolve an urgent problem at work?"),
            ("Why does executive <strong>Micromanagement</strong> suggest a manager's deep-seated fear of losing control?", "★ Have you ever had to work under severe <strong>Micromanagement</strong>, and how did you survive?"),
            ("Who should hold ultimate <strong>Accountability</strong> when a project fails due to vague instructions?", "★ How do you personally handle your professional <strong>Accountability</strong> when a risk does not pay off?"),
            ("What does it mean to be genuinely <strong>Proactive</strong> in a role that has no defined metrics of success?", "★ What is one <strong>Proactive</strong> step you can take this week to optimize your daily productivity?"),
            ("How can we prevent our personal self-worth from being dictated by corporate <strong>Expectation</strong>?", "★ How do you manage your supervisor's <strong>Expectation</strong> when you feel completely overwhelmed?"),
            ("How do you psychologically cope with the chronic <strong>Uncertainty</strong> of starting an undefined project?", "★ What strategy helps you stay calm and focused during times of extreme organizational <strong>Uncertainty</strong>?"),
            ("Is <strong>Self-direction</strong> a psychological trait we are born with, or is it a muscle we must train?", "★ Do you prefer a highly structured environment with a clear manual, or complete <strong>Self-direction</strong>?"),
            ("Why is regular <strong>Feedback</strong> so essential when navigating a role with no existing roadmaps?", "★ How do you typically react when receiving critical, unfiltered <strong>Feedback</strong> on your creative work?")
        ],
        "lst": "The Autonomy Manifesto: Imagine you have been hired to redesign a company culture that is suffering from chronic micromanagement and employee paralysis. Propose a new framework using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you were granted total <strong>Autonomy</strong> tomorrow, would you choose to remain in your current industry?",
            "If there were absolutely no <strong>Ambiguity</strong> in your career path, do you think you would find your life too predictable?",
            "If you stopped taking the <strong>Initiative</strong> today, how long would it take for your team to notice the change?",
            "If your manager began practicing extreme <strong>Micromanagement</strong>, would you resign immediately or attempt to negotiate?",
            "If you had been given full <strong>Accountability</strong> for that past corporate failure, how would you have justified your choices?",
            "If you had not been so <strong>Proactive</strong> last year, would you have secured your recent promotion?",
            "If every corporate <strong>Expectation</strong> had been clearly documented years ago, would you have developed your self-direction?",
            "If you had not learned to tolerate professional <strong>Uncertainty</strong>, would you feel as confident in your skills today?",
            "If <strong>Self-direction</strong> was the only requirement for a high-paying role, would you apply for it today?",
            "If you had received zero constructive <strong>Feedback</strong> this year, would you now assume that your performance was perfect today?"
        ]
    },
    "kidlins-law": {
        "title": "Kidlin's Law: The Power of Clarity",
        "h1": "Kidlin's Law — The Psychological Power of Clarity",
        "desc": "This session explores Kidlin's Law—the psychological reality that 'if you can write down a problem clearly, then the matter is half-solved.' We will examine the cognitive benefits of externalizing our worries, how structured writing reduces cortisol levels, and why defining our obstacles is an act of emotional courage. By learning to articulate our silent anxieties, we can regain immediate cognitive control and make proactive decisions.",
        "profile": {
            "tendency": "Avoidance of Cognitive Load & Stress",
            "trigger": "Undefined and Intimidating Complex Challenges",
            "phenomenon": "Structured Formulation Relief",
            "anchor": "The Clarity of Writing Down Your Concerns"
        },
        "vocab": [
            ("Articulate", "express an idea, feeling, or problem fluently, coherently, and precisely.", "He struggled to articulate his underlying anxiety, defaulting instead to passive-aggressive remarks."),
            ("Clarity", "the quality of being clear, coherent, transparent, and easy to comprehend.", "Writing down my racing thoughts brought instant clarity to a situation previously filled with confusion."),
            ("Obstacle", "a mental, physical, or systematic barrier that hinders progress or development.", "The biggest obstacle to personal change is our subconscious attachment to familiar routines."),
            ("Resolution", "the action of solving a problem, dispute, or achieving internal peace.", "We spent hours debating, but we failed to reach a mutually satisfactory resolution."),
            ("Intangible", "unable to be touched or physically defined; abstract, psychological, or emotional.", "Anxiety often feels like an intangible threat, making it incredibly difficult to fight directly."),
            ("Cognitive", "relating to the mental processes of perception, memory, judgment, and reasoning.", "A cognitive reframing exercise can completely transform how we perceive a painful setback."),
            ("Perspective", "a particular attitude toward or way of regarding something; a cognitive point of view.", "Gaining a fresh perspective often requires stepping away from the environment that caused the stress."),
            ("Objective", "not influenced by personal feelings, biases, or subjective interpretations.", "It is nearly impossible to remain objective when evaluating our own childhood conditioning."),
            ("Framework", "a basic structure, system of rules, or methodology underlying a concept.", "The therapist provided a simple cognitive framework for breaking down overwhelming anxieties."),
            ("Simplify", "to make something simpler, less complex, or easier to comprehend and execute.", "We must simplify our daily schedules if we want to restore our mental clarity and focus.")
        ],
        "warmup": [
            "Why does writing a problem down on paper instantly reduce its emotional power over us?",
            "Is the act of leaving our worries undefined a subconscious strategy to avoid taking action?"
        ],
        "r1": [
            ("Why is it so psychologically difficult to <strong>Articulate</strong> our deepest insecurities to our closest friends?", "★ How easily can you <strong>Articulate</strong> your emotional boundaries during a heated argument?"),
            ("How does achieving sudden mental <strong>Clarity</strong> affect our biological response to high-stress situations?", "★ What specific ritual helps you restore your mental <strong>Clarity</strong> when facing a major life transition?"),
            ("What is the most common cognitive <strong>Obstacle</strong> we construct to avoid facing uncomfortable truths?", "★ What is the biggest mental <strong>Obstacle</strong> that currently prevents you from pursuing your creative passion?"),
            ("Does every complex emotional conflict require a perfect <strong>Resolution</strong>, or is simple acceptance enough?", "★ How do you typically celebrate the successful <strong>Resolution</strong> of a long-standing personal issue?"),
            ("How do we transform an <strong>Intangible</strong> dread into a practical, solvable problem?", "★ What <strong>Intangible</strong> asset or quality is most important to your sense of daily professional peace?"),
            ("Which <strong>Cognitive</strong> defense mechanisms do we use to protect our egos from admitting failure?", "★ Have you ever used a structured <strong>Cognitive</strong> journal to process an overwhelming day?"),
            ("How does viewing our lives from a third-person <strong>Perspective</strong> completely dismantle our anxiety?", "★ Who is the first person you contact when you desperately need an objective <strong>Perspective</strong> on a crisis?"),
            ("Is it actually possible for a human to be completely <strong>Objective</strong> when analyzing their own life choices?", "★ How do you maintain an <strong>Objective</strong> outlook when dealing with a highly emotional family conflict?"),
            ("What structured <strong>Framework</strong> do you rely on most when forced to make a rapid decision?", "★ What personal <strong>Framework</strong> do you use to protect your energy from toxic social dynamics?"),
            ("Why is our first instinct to complicate our problems rather than to <strong>Simplify</strong> them?", "★ What is one complex relationship in your life that you desperately need to <strong>Simplify</strong> right now?")
        ],
        "lst": "The Clarifying Audit: Imagine you are speaking to a close colleague who is completely paralyzed by an undefined, overwhelming crisis. Help them untangle their thoughts using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you could <strong>Articulate</strong> one message to your teenage self tomorrow, what would you choose to say?",
            "If you had absolute <strong>Clarity</strong> about your ultimate career destination, would you still feel motivated to work today?",
            "If a massive systematic <strong>Obstacle</strong> appeared tomorrow, who would be the first person you would call for help?",
            "If a perfect <strong>Resolution</strong> were impossible, would you still try to manage the situation with grace?",
            "If all <strong>Intangible</strong> social trusts disappeared tomorrow, do you think modern communities would survive?",
            "If your <strong>Cognitive</strong> capabilities had been doubled in childhood, would you have chosen a different career today?",
            "If you had viewed your past trauma from a fresh <strong>Perspective</strong> years ago, would you feel more secure today?",
            "If you had been completely <strong>Objective</strong> back then, would you have accepted that bad corporate offer?",
            "If you had followed a strict logical <strong>Framework</strong> last year, would you now be happier in your personal life?",
            "If you had simplified your daily schedule years ago, would your mental health be significantly stronger today?"
        ]
    },
    "law-of-attraction": {
        "title": "The Law of Attraction — COSYlanguages",
        "h1": "The Law of Attraction — Manifestation vs. Confirmation Bias",
        "desc": "This session deconstructs the controversial 'Law of Attraction' from a psychological standpoint. We will examine how 'manifestation' functions not through magic, but through environmental priming, reticular activating system focus, and selective attention, separating authentic optimism from toxic positivity.",
        "profile": {
            "tendency": "Desire for Control over Unpredictable Reality",
            "trigger": "Existential Uncertainty or Personal Setbacks",
            "phenomenon": "Reticular Activating System Priming",
            "anchor": "Grounded Optimism and Proactive Effort"
        },
        "vocab": [
            ("Environmental priming", "the cognitive phenomenon where exposure to a stimulus influences our response to later stimuli.", "Vision boards are a physical form of environmental priming that keeps our goals fresh in our subconscious."),
            ("Reticular activating system", "the bundle of nerves in our brainstem that filters out irrelevant noise, focusing on what we prioritize.", "By visualizing success daily, you prime your reticular activating system to spot rare opportunities."),
            ("Selective attention", "the cognitive process of focusing on a specific stimulus while ignoring other predictable data.", "The Law of Attraction is often just selective attention highlighting positive coincidences."),
            ("Confirmation bias", "the tendency to search for, interpret, and recall information in a way that confirms one's beliefs.", "He fell victim to confirmation bias, believing his success was magical rather than the result of hard work."),
            ("Manifestation", "the practice of bringing a desired goal into reality through focused belief and environmental alignment.", "Scientific psychology views manifestation as a combination of goal clarity and proactive behavior."),
            ("Toxic positivity", "the excessive and ineffective overgeneralization of a happy, optimistic state across all situations.", "Enforcing toxic positivity on grieving employees destroys trust and suppresses authentic emotion."),
            ("Optimism", "hopefulness and confidence about the future or the successful outcome of something.", "Grounded optimism must be paired with realistic risk analysis to achieve lasting success."),
            ("Setback", "a reversal or check in progress; a temporary defeat or psychological disappointment.", "An emotional setback is not a sign of failure, but a necessary checkpoint for self-reflection."),
            ("Intention", "a thing intended; an aim, plan, or mental blueprint for action.", "Setting a clear intention in the morning helps guide your cognitive focus throughout a chaotic day."),
            ("Intuition", "the ability to understand something instinctively, without the need for conscious reasoning.", "Her intuition warned her that the business partner was presenting a veneer of sincerity.")
        ],
        "warmup": [
            "Does visualizing our goals actually help us achieve them, or does it just make us feel good while doing nothing?",
            "Why is the modern wellness industry so obsessed with 'vibrational alignment' and manifestation?"
        ],
        "r1": [
            ("How does <strong>Environmental priming</strong> quietly shape our daily subconscious decisions without our consent?", "★ Have you ever set up an environment to prime yourself for a healthy habit, and did it work?"),
            ("Why is understanding the <strong>Reticular activating system</strong> critical for separating science from pseudo-science?", "★ Have you ever started noticing a specific car everywhere after thinking about buying it?"),
            ("How does <strong>Selective attention</strong> explain why positive people seem to experience more 'lucky' coincidences?", "★ Do you feel that 'luck' is a random external force, or a result of selective cognitive focus?"),
            ("How does the human ego use <strong>Confirmation bias</strong> to defend the validity of magical thinking?", "★ When was the last time you caught yourself relying on <strong>Confirmation bias</strong> to justify an opinion?"),
            ("Is modern <strong>Manifestation</strong> just a polished, commercialized version of ancient religious prayer?", "★ What is one goal you successfully achieved that felt like a perfect, natural <strong>Manifestation</strong>?"),
            ("Why is <strong>Toxic positivity</strong> so deeply damaging to our collective capacity for empathy and grief?", "★ Have you ever had to deal with a colleague who practiced chronic <strong>Toxic positivity</strong>?"),
            ("What is the psychological difference between passive hope and active, grounded <strong>Optimism</strong>?", "★ How do you maintain your personal <strong>Optimism</strong> when facing a series of professional setbacks?"),
            ("How do you emotionally process a sudden, painful <strong>Setback</strong> without losing your motivation?", "★ Can you share a major <strong>Setback</strong> in your past that eventually led to an unexpected victory?"),
            ("Why does setting a clear, written <strong>Intention</strong> in the morning improve our cognitive focus?", "★ What is your primary <strong>Intention</strong> for your personal and professional development this year?"),
            ("When should we trust our psychological <strong>Intuition</strong> over empirical, objective data?", "★ Has your <strong>Intuition</strong> ever saved you from making a disastrous relationship mistake?")
        ],
        "lst": "The Manifestation Debate: Imagine you are debating a life coach who claims that 'vibrations' control financial success. Critique their philosophy using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you practiced daily visualization, do you think your <strong>Reticular activating system</strong> would spot more opportunities?",
            "If the wellness industry banned 'vibrational alignment' slogans tomorrow, would manifestation culture collapse?",
            "If we stopped relying on <strong>Confirmation bias</strong>, would we lose our comforting sense of destiny?",
            "If you had used <strong>Environmental priming</strong> last year, would you now be more disciplined in your daily routines?",
            "If your past <strong>Intuition</strong> had been completely ignored, would you be living in the same country today?",
            "If they had not enforced <strong>Toxic positivity</strong> in their previous company, would their employees have felt more valued today?",
            "If your last major <strong>Setback</strong> had never occurred, would your emotional resilience be as strong as it is today?",
            "If you had set a clearer <strong>Intention</strong> years ago, would your self-concept be more integrated today?",
            "If we completely surrendered to passive <strong>Optimism</strong>, would we still find the energy to fight systemic injustice?",
            "If the Law of Attraction were actually real, would the global distribution of wealth look completely different today?"
        ]
    },
    "maze-of-biases": {
        "title": "The Maze of Biases — COSYlanguages",
        "h1": "The Maze of Biases — Surviving Our Cognitive Flaws",
        "desc": "This session explores the psychological labyrinth of cognitive biases that distort our daily judgment. We will analyze the Dunning-Kruger effect, loss aversion, status quo bias, and the halo effect, discussing how these evolutionary survival shortcuts frequently lead to irrational modern choices.",
        "profile": {
            "tendency": "Desire for Absolute Objectivity & Certainty",
            "trigger": "Evaluating Complex, High-Stakes Alternatives",
            "phenomenon": "Cognitive Heuristic Distortion",
            "anchor": "Embracing Cognitive Humility & Logical Audits"
        },
        "vocab": [
            ("Loss aversion", "the psychological phenomenon where the pain of losing is twice as powerful as the pleasure of gaining.", "Due to intense loss aversion, she chose to keep her secure, boring job rather than starting a business."),
            ("Status quo bias", "the cognitive preference for the current state of affairs, viewing any change as a loss.", "The company's resistance to remote work was a textbook case of status quo bias."),
            ("Halo effect", "the cognitive bias where our overall impression of a person influences how we feel about their character.", "The attractive candidate benefited from the halo effect, as the board assumed he was highly competent."),
            ("Dunning-Kruger effect", "the cognitive bias where people with limited competence overestimate their own abilities.", "His arrogant confidence during the negotiation was a classic display of the Dunning-Kruger effect."),
            ("Sunk cost fallacy", "the behavior loop of continuing an endeavor because of previously invested resources.", "Clinging to a failing project simply because you spent years on it is the sunk cost fallacy."),
            ("Cognitive humility", "the awareness of the limitations and fallibility of one's own mind and knowledge.", "Practicing cognitive humility prevents us from falling into the trap of ideological dogmatism."),
            ("Heuristic", "a mental shortcut that allows people to solve problems and make judgments quickly.", "While a heuristic saves time, it often introduces systematic errors into our financial decisions."),
            ("Audit", "a systematic, critical inspection of one's own beliefs, finances, or decisions.", "Conducting a regular cognitive audit helps us identify which biases are currently dictating our choices."),
            ("Distortion", "the alteration of original data, creating a false or misleading cognitive representation.", "Her memory of the conflict was a complete emotional distortion designed to protect her ego."),
            ("Overconfidence", "the subjective state of holding unwarranted confidence in one's own judgment or skills.", "His overconfidence during the stock market boom led to a devastating financial loss.")
        ],
        "warmup": [
            "Are our brains designed to find the absolute truth, or are they just designed to help us survive in the jungle?",
            "Why is it so much easier to spot cognitive biases in other people than in ourselves?"
        ],
        "r1": [
            ("How does <strong>Loss aversion</strong> prevent us from making necessary, courageous career changes?", "★ Have you ever held onto a bad investment or relationship due to intense <strong>Loss aversion</strong>?"),
            ("Why is <strong>Status quo bias</strong> the primary enemy of innovation in traditional corporate environments?", "★ How do you personally fight off <strong>Status quo bias</strong> when planning your annual goals?"),
            ("How does the <strong>Halo effect</strong> distort our capacity to evaluate the real competence of public figures?", "★ Have you ever realized you liked a colleague simply because they had an attractive appearance?"),
            ("Why does the <strong>Dunning-Kruger effect</strong> seem to thrive so intensely on modern social media platforms?", "★ Have you ever suffered from the opposite of Dunning-Kruger—imposter syndrome—in your career?"),
            ("How does the <strong>Sunk cost fallacy</strong> trap us in unfulfilling relationships and obsolete professions?", "★ When was the last time you walked away from a project, successfully defeating the <strong>Sunk cost fallacy</strong>?"),
            ("Why is cultivating <strong>Cognitive humility</strong> the ultimate defense against ideological manipulation?", "★ In what specific area of your life do you need to practice more <strong>Cognitive humility</strong> right now?"),
            ("How do evolutionary <strong>Heuristic</strong> shortcuts cause systematic errors in modern financial planning?", "★ What is your favorite cognitive shortcut when forced to evaluate a stranger's character quickly?"),
            ("What are the practical benefits of conducting a weekly cognitive <strong>Audit</strong> of our emotional triggers?", "★ How do you audit your own thoughts when you feel a sudden surge of irrational anger?"),
            ("In what ways does emotional stress introduce severe cognitive <strong>Distortion</strong> into our memories?", "★ Have you ever discovered that your memory of a major family event was a complete <strong>Distortion</strong>?"),
            ("Why is professional <strong>Overconfidence</strong> often rewarded in corporate leadership while humility is ignored?", "★ Has your own <strong>Overconfidence</strong> ever led you to make a significant professional mistake?")
        ],
        "lst": "The Bias Audit: Imagine you are auditing a corporate board that is completely blinded by overconfidence and sunk cost fallacies. Present your critique using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you stopped letting <strong>Loss aversion</strong> dictate your investments tomorrow, would you take more calculated risks?",
            "If society completely abandoned its <strong>Status quo bias</strong>, do you think we would achieve total progress faster?",
            "If your brain were immune to the <strong>Halo effect</strong>, would you evaluate people with absolute objectivity?",
            "If you had recognized the <strong>Dunning-Kruger effect</strong> in your previous boss, would you have resigned much sooner?",
            "If they had walked away from that failing project years ago, would they have saved millions today?",
            "If we had cultivated more <strong>Cognitive humility</strong> back then, would we have avoided that ideological conflict?",
            "If that mental <strong>Heuristic</strong> had not saved your ancestor's life, would you be sitting here discussing psychology today?",
            "If you had conducted a rigorous cognitive <strong>Audit</strong> last year, would you now feel more aligned with your values today?",
            "If your memory had not introduced that protective <strong>Distortion</strong>, would your self-concept be shattered today?",
            "If your <strong>Overconfidence</strong> had been checked by a wise mentor, would you have avoided that major business mistake?"
        ]
    },
    "murphys-law": {
        "title": "Murphy's Law — COSYlanguages",
        "h1": "Murphy's Law — The Psychology of Pessimism",
        "desc": "This session explores Murphy's Law—the classic adage that 'anything that can go wrong will go wrong.' We will analyze this concept not as a law of physics, but as a psychological coping mechanism, examining how defensive pessimism, selective memory, and hyper-vigilance protect our minds from disappointment. Through this lens, we will discover how planning for vulnerability can actually build true psychological resilience.",
        "profile": {
            "tendency": "Desire to Avoid Disappointment & Failure",
            "trigger": "Planning High-Stakes Projects or Events",
            "phenomenon": "Defensive Pessimism & Hyper-vigilance",
            "anchor": "Developing Grounded, Resilient Optimism"
        },
        "vocab": [
            ("Defensive pessimism", "the cognitive strategy of preparing for the worst-case scenario to manage anxiety and prevent disappointment.", "She practiced defensive pessimism, visualizing every potential failure before stepping onto the stage."),
            ("Hyper-vigilance", "the state of extreme alertness and sensory sensitivity, scanning the environment for threats.", "His chronic hyper-vigilance kept him exhausted, as his brain treated every minor change as a crisis."),
            ("Pessimism", "a tendency to see the worst aspect of things or believe that the worst will happen.", "While some view Murphy's Law as pure pessimism, others see it as a practical planning tool."),
            ("Mitigate", "to make less severe, serious, painful, or to reduce a potential risk.", "We must design a redundant backup system to mitigate the risk of a complete server crash."),
            ("Redundancy", "the inclusion of extra components or backup systems to ensure safety in case of failure.", "In software development, redundancy is not a waste of resources; it is an absolute necessity."),
            ("Vulnerability", "the state of being exposed to the possibility of being attacked, harmed, or failing.", "The sudden power outage exposed the severe vulnerability of our data storage systems."),
            ("Unpredictable", "not able to be foreseen, known, or declared in advance; chaotic.", "The modern stock market is highly unpredictable, making rigid financial models completely obsolete."),
            ("Cognitive priming", "the psychological mechanism where exposure to a concept prepares the brain to spot it in reality.", "Constant focus on failure creates a negative cognitive priming, making you miss positive opportunities."),
            ("Resilience", "the capacity to recover quickly from difficulties; emotional toughness and adaptability.", "True resilience is not about never falling; it is about rebuilding your identity after a catastrophic setback."),
            ("Hindsight bias", "the tendency to believe, after an event has occurred, that we predicted or expected it.", "Hindsight bias makes us believe we knew a project would fail, even if we were highly optimistic at the start.")
        ],
        "warmup": [
            "Is Murphy's Law a realistic planning philosophy, or is it just a convenient excuse for negative thinkers?",
            "Why do we remember the one time we forgot our umbrella and it rained, but forget the fifty times it didn't?"
        ],
        "r1": [
            ("How does <strong>Defensive pessimism</strong> serve as a highly effective anxiety-management tool for high-achievers?", "★ Do you personally rely on <strong>Defensive pessimism</strong> when preparing for a critical job interview?"),
            ("When does healthy planning cross the line into exhausting, chronic <strong>Hyper-vigilance</strong>?", "★ How do you calm your mind when your brain defaults to a state of anxious <strong>Hyper-vigilance</strong>?"),
            ("Is deep <strong>Pessimism</strong> an evolutionary survival mechanism that protects us from catastrophic risks?", "★ Do you consider yourself a realist, a defensive pessimist, or an ungrounded optimist?"),
            ("What strategies can we implement to <strong>Mitigate</strong> the psychological impact of a sudden professional crisis?", "★ How do you <strong>Mitigate</strong> the risk of burnout when forced to work long, exhausting hours?"),
            ("Why is building psychological <strong>Redundancy</strong> in our support networks critical for emotional safety?", "★ What backup plan or <strong>Redundancy</strong> do you have in place if your current career path fails?"),
            ("How can we learn to embrace our raw, human <strong>Vulnerability</strong> without feeling constantly defensive?", "★ What is the hardest part about exposing your creative <strong>Vulnerability</strong> to a room full of critics?"),
            ("How do you maintain your focus and peace of mind when operating in a highly <strong>Unpredictable</strong> environment?", "★ How do you handle the <strong>Unpredictable</strong> mood swings of a difficult family member or colleague?"),
            ("How does constant exposure to negative news create a toxic <strong>Cognitive priming</strong> in our minds?", "★ Have you noticed how your cognitive priming affects the way you interact with strangers on the street?"),
            ("Why does surviving a major crisis contribute more to our <strong>Resilience</strong> than perfect, uninterrupted success?", "★ Which specific life event has contributed the most to building your current emotional <strong>Resilience</strong>?"),
            ("How does <strong>Hindsight bias</strong> distort our capacity to learn objective lessons from our past failures?", "★ Have you ever fallen victim to <strong>Hindsight bias</strong>, claiming you 'knew it all along' after a disaster?")
        ],
        "lst": "The Crisis Manual: Imagine you are a flight director during a highly complex space mission where multiple redundant systems have failed. Address your crew using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you practiced extreme <strong>Defensive pessimism</strong> tomorrow, would you feel more prepared for your presentation?",
            "If your career environment were completely <strong>Unpredictable</strong>, would you still feel secure in your skills?",
            "If we could eliminate all human <strong>Vulnerability</strong>, would we lose our capacity for deep empathy?",
            "If you had designed a backup plan last year, would you have <strong>Mitigated</strong> the financial loss of that setback?",
            "If they had built more <strong>Redundancy</strong> into their infrastructure, would the system have collapsed during the storm?",
            "If your mind had not been trapped in chronic <strong>Hyper-vigilance</strong>, would you have enjoyed your vacation more?",
            "If you had not survived that difficult transition years ago, would your <strong>Resilience</strong> be as strong today?",
            "If your brain had not been rewired by negative <strong>Cognitive priming</strong>, would you now see more opportunities?",
            "If you had recognized your own <strong>Hindsight bias</strong> back then, would you have evaluated your choices more fairly?",
            "If Murphy's Law were an absolute physical rule, do you think humanity would have ever reached the space age today?"
        ]
    },
    "psychology-of-action-bias": {
        "title": "The Psychology of Action Bias — COSYlanguages",
        "h1": "The Psychology of Action Bias — The Illusion of Activity",
        "desc": "This session examines the Psychology of Action Bias—our subconscious impulse to act, even when inaction is the more rational and productive choice. We will explore why goalkeeper statistics, stock trading, and corporate crisis management reveal that humans prefer visible, failed efforts over patient, strategic stillness.",
        "profile": {
            "tendency": "The Urge to React Instantly under Pressure",
            "trigger": "Anxiety-Inducing Crises or Uncomfortable Silence",
            "phenomenon": "Action Bias & Performative Activity",
            "anchor": "Embracing Strategic Inaction and Patient Stillness"
        },
        "vocab": [
            ("Action bias", "the psychological impulse to take action to resolve a problem, even if it is counterproductive.", "Driven by intense action bias, the manager fired the consultant without analyzing the real root cause."),
            ("Strategic inaction", "the calculated, highly disciplined choice to remain still and observe rather than reacting.", "In stock trading, strategic inaction is often far more profitable than hyper-active buying and selling."),
            ("Hyper-reactivity", "the state of reacting excessively or instantly to external stimuli and emotional triggers.", "Social media algorithms are designed to exploit and amplify our collective hyper-reactivity."),
            ("Anxiety", "a feeling of worry, nervousness, or unease about an uncertain, high-stakes outcome.", "The pressure to show performative progress is a major source of modern corporate anxiety."),
            ("Performative activity", "visible, superficial effort designed to show others you are busy rather than achieving results.", "Filling your calendar with endless back-to-back meetings is a classic form of performative activity."),
            ("Impulsivity", "the tendency to act on a sudden urge or whim without conscious planning or risk analysis.", "Her financial impulsivity led her to buy volatile assets during the height of the market hype."),
            ("Equilibrium", "a state of physical, emotional, or cognitive balance and stability.", "Meditation helps restore our emotional equilibrium after a highly chaotic day in the office."),
            ("Restraint", "the cognitive capacity to hold back or control an impulse or emotional reaction.", "Showing professional restraint during a heated argument is the hallmark of emotional intelligence."),
            ("Trigger", "an environmental stimulus or word that causes an intense, immediate emotional reaction.", "He realized that criticism about his work ethic was a major childhood trigger that caused him to panic."),
            ("Intuition", "the ability to understand something instinctively, without the need for conscious reasoning.", "While intuition is valuable, we must check it against objective data when managing a corporate crisis.")
        ],
        "warmup": [
            "Why is it so much harder to sit quietly and do nothing than to run around doing something useless?",
            "Does our modern culture treat silence and stillness as laziness rather than a high-level strategy?"
        ],
        "r1": [
            ("How does <strong>Action bias</strong> frequently cause goalkeepers to dive unnecessarily during penalty kicks?", "★ Have you ever taken a rapid, unnecessary action just to feel like you were in control of a crisis?"),
            ("Why does <strong>Strategic inaction</strong> require far more psychological discipline than hyper-active reaction?", "★ When was the last time you chose <strong>Strategic inaction</strong>, and did it pay off in the end?"),
            ("How do we protect our focus from the corporate culture of <strong>Hyper-reactivity</strong>?", "★ How do you personally handle colleagues who exhibit extreme <strong>Hyper-reactivity</strong> over minor errors?"),
            ("Why does the pressure of undefined <strong>Anxiety</strong> make us more susceptible to making impulsive choices?", "★ How do you restore your sense of calm when <strong>Anxiety</strong> begins to cloud your strategic judgment?"),
            ("How do we dismantle the exhausting corporate habit of <strong>Performative activity</strong>?", "★ What is the most common form of <strong>Performative activity</strong> you see in your current workplace?"),
            ("What is the psychological relationship between digital addiction and high <strong>Impulsivity</strong>?", "★ Have you identified a specific trigger that increases your cognitive <strong>Impulsivity</strong>?"),
            ("How can we maintain our internal <strong>Equilibrium</strong> when our environment is in complete chaos?", "★ What daily ritual contributes the most to restoring your emotional <strong>Equilibrium</strong>?"),
            ("Why is showing active <strong>Restraint</strong> during a crisis viewed by some as a sign of weakness?", "★ When did you last have to exercise extreme <strong>Restraint</strong> to avoid saying something you would regret?"),
            ("How do we identify our core psychological <strong>Trigger</strong> before we react to a difficult colleague?", "★ What is one personal <strong>Trigger</strong> you have successfully learned to manage in professional contexts?"),
            ("Should we rely on our immediate <strong>Intuition</strong> when forced to make a rapid decision under pressure?", "★ How do you distinguish between a genuine, wise <strong>Intuition</strong> and a fear-driven impulse?")
        ],
        "lst": "The Patient General: Imagine you are a general during a historic battle where your officers are screaming to attack prematurely. Convince them to hold their positions using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you practiced <strong>Strategic inaction</strong> tomorrow, do you think your long-term results would improve?",
            "If society rewarded patient stillness, would we see a massive reduction in corporate <strong>Anxiety</strong>?",
            "If you could eliminate all digital <strong>Impulsivity</strong>, would you feel more focused on your long-term goals?",
            "If you had exercised extreme <strong>Restraint</strong> during that argument, would your partnership still be intact today?",
            "If they had not surrendered to intense <strong>Action bias</strong>, would their startup have survived the crisis last year?",
            "If your manager had not demanded constant <strong>Performative activity</strong>, would you have felt more productive today?",
            "If you had not restored your emotional <strong>Equilibrium</strong> back then, would you have made a disastrous choice?",
            "If your core psychological <strong>Trigger</strong> had been identified years ago, would you now feel more secure in conflicts?",
            "If we completely relied on immediate <strong>Intuition</strong>, would we fail to solve complex modern challenges today?",
            "If you had not reacted with such <strong>Hyper-reactivity</strong>, would your relationship be more peaceful today?"
        ]
    },
    "the-bye-now-effect": {
        "title": "The Bye-Now Effect — COSYlanguages",
        "h1": "The Bye-Now Effect — The Psychology of Separation and Buying",
        "desc": "This session explores the psychological mechanism of the 'Bye-Now Effect'—the bizarre cognitive link where saying goodbye or anticipating a separation activates our subconscious buying impulses. We will discuss how our minds use material acquisition as a symbolic anchor to cope with emotional parting and existential transition.",
        "profile": {
            "tendency": "Coping with the Anxiety of Separation & Parting",
            "trigger": "Anticipating Sayonara Moments or Transitions",
            "phenomenon": "Material Acquisition as an Emotional Anchor",
            "anchor": "Accepting Transitions without Material Substitutes"
        },
        "vocab": [
            ("Bye-Now Effect", "the cognitive mechanism where saying goodbye triggers an immediate, subconscious impulse to buy.", "The airport duty-free shop exploits the Bye-Now Effect by placing luxury items right before the boarding gates."),
            ("Acquisition", "the act of gaining possession of a material object, asset, or abstract quality.", "He used the constant acquisition of new gadgets to distract himself from his loneliness."),
            ("Separation anxiety", "the feeling of distress or fear triggered by parting from a loved person, place, or routine.", "The child's separation anxiety was managed through a gentle transition routine."),
            ("Transition", "the process of changing from one state, stage, or place to another.", "Moving abroad is a profound, exhausting transition that requires high emotional resilience."),
            ("Symbolic", "serving as a visible or material representation of something abstract or emotional.", "Buying a souvenir is a symbolic attempt to freeze a beautiful memory in a physical object."),
            ("Sentimentality", "exaggerated self-indulgent tenderness, sadness, or nostalgic attachment.", "Her intense sentimentality made it nearly impossible for her to throw away old, useless letters."),
            ("Nostalgia", "a sentimental longing or wistful affection for a period in the past.", "Advertisers frequently exploit our collective nostalgia to sell retro-themed products."),
            ("Coping mechanism", "a psychological strategy used to manage stress, anxiety, or emotional setbacks.", "Retail therapy is a temporary, expensive coping mechanism that fails to solve the underlying problem."),
            ("Detachment", "the state of being objective, aloof, or emotionally independent of material things.", "Practicing Zen detachment helps us accept the impermanence of all beautiful life chapters."),
            ("Impermanence", "the state or fact of lasting for only a limited period of time; transience.", "Accepting the absolute impermanence of life makes our current relationships feel far more precious.")
        ],
        "warmup": [
            "Why do we feel an overwhelming urge to buy expensive souvenirs right before leaving a beautiful vacation spot?",
            "Can a physical object ever truly preserve the emotional essence of a beautiful memory?"
        ],
        "r1": [
            ("How does the <strong>Bye-Now Effect</strong> illustrate our brain's tendency to confuse emotional pain with material lack?", "★ Have you ever made an impulsive purchase right after saying a difficult goodbye to a friend?"),
            ("Why does the constant <strong>Acquisition</strong> of material things fail to cure our underlying existential dread?", "★ What is the most precious object in your home, and does its value come from its history?"),
            ("How does adult <strong>Separation anxiety</strong> manifest in our daily professional and romantic relationships?", "★ How do you personally handle the physical distance and separation from your closest family members?"),
            ("What psychological support do we need to successfully navigate a major life <strong>Transition</strong>?", "★ What has been the most challenging personal <strong>Transition</strong> you have had to face in the last five years?"),
            ("Why is buying a physical souvenir a highly <strong>Symbolic</strong> attempt to cheat time and memory?", "★ What is one <strong>Symbolic</strong> gesture or object that instantly restores your sense of peace and alignment?"),
            ("When does healthy appreciation of the past cross the line into paralyzing, stagnant <strong>Sentimentality</strong>?", "★ Do you struggle with <strong>Sentimentality</strong> when cleaning out your closet or throwing away old objects?"),
            ("Why does corporate marketing rely so heavily on manufactured, bittersweet <strong>Nostalgia</strong> to drive sales?", "★ What retro design or piece of music instantly triggers a deep wave of childhood <strong>Nostalgia</strong> for you?"),
            ("Is retail therapy a harmless <strong>Coping mechanism</strong>, or is it a toxic distraction from real self-actualization?", "★ What is your primary, healthy <strong>Coping mechanism</strong> when you feel completely overwhelmed by professional stress?"),
            ("How can we practice emotional <strong>Detachment</strong> from material possessions in a hyper-consumerist society?", "★ How easy or difficult is it for you to practice complete <strong>Detachment</strong> from your digital devices for a weekend?"),
            ("How does embracing the absolute <strong>Impermanence</strong> of life liberate us from the fear of future endings?", "★ Has reflecting on the <strong>Impermanence</strong> of your current career chapter made you appreciate it more?")
        ],
        "lst": "The Farewell Gift: Imagine you are a psychological consultant hired to help departing expats transition to their new countries without falling into the trap of retail therapy. Present your advice using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you understood the <strong>Bye-Now Effect</strong>, would you avoid shopping at airport duty-free stores entirely?",
            "If modern society completely embraced Zen <strong>Detachment</strong>, do you think shopping malls would go bankrupt?",
            "If we could freeze our favorite moments in time, would we still feel that wistful wave of <strong>Nostalgia</strong>?",
            "If you had not relied on retail therapy as a <strong>Coping mechanism</strong> last year, would your savings be larger today?",
            "If they had designed a more gentle <strong>Transition</strong> program back then, would they have adapted faster?",
            "If your brain had not used material <strong>Acquisition</strong> to mask separation anxiety, would you have faced your grief sooner?",
            "If you had not clung to that stagnant <strong>Sentimentality</strong>, would you have cleared your physical clutter years ago?",
            "If that souvenir had not held such <strong>Symbolic</strong> value, would you have lost that beautiful memory today?",
            "If you had fully accepted the <strong>Impermanence</strong> of that relationship back then, would you feel more at peace today?",
            "If your childhood <strong>Separation anxiety</strong> had been handled with more empathy, would you now feel more secure today?"
        ]
    },
    "why-do-they-say-ai-is-inevitable": {
        "title": "Is AI Inevitable? — COSYlanguages",
        "h1": "Is AI Inevitable? — Technological Determinism vs. Human Agency",
        "desc": "This session explores the psychological impact of the 'inevitability' narrative surrounding Artificial Intelligence. We will discuss technological determinism, cognitive submission, FOMO (fear of missing out), and how corporations utilize a sense of inevitable destiny to minimize public resistance and enforce rapid adaptation.",
        "profile": {
            "tendency": "Desire to Align with the Winning Side",
            "trigger": "Aggressive Tech Marketing & Automation News",
            "phenomenon": "Technological Determinism & Cognitive Submission",
            "anchor": "Reclaiming Individual Human Agency"
        },
        "vocab": [
            ("Technological determinism", "the theory that a society's technology drives its social structure and cultural values.", "Clinging to technological determinism makes us feel like helpless passengers on a train driven by silicon."),
            ("Cognitive submission", "the psychological state of surrendering one's critical judgment and agency to an external system.", "The narrative of AI inevitability forces a quiet cognitive submission in millions of modern workers."),
            ("Human agency", "the capacity of individuals to act independently and make their own free choices.", "We must reclaim our human agency, remembering that technology is a tool we design, not our master."),
            ("Adaptation", "the process of altering behavior or structure to fit a changing environment.", "Rapid corporate adaptation to AI is driven far more by fear of obsolescence than by real efficiency gains."),
            ("Obsolescence", "the state of being no longer useful, active, or relevant due to technological progress.", "The fear of professional obsolescence keeps many software engineers in a state of chronic anxiety."),
            ("Inevitability", "the state of being certain to happen and impossible to avoid or prevent.", "Marketers plaster the word 'inevitability' on AI progress to neutralize ethical and legal resistance."),
            ("Sovereignty", "the supreme power or authority of a person, nation, or system to govern itself.", "Algorithmic recommendations are slowly eroding our individual cognitive sovereignty over our tastes."),
            ("Coercion", "the practice of persuading someone to do something by using force, threats, or manufactured fear.", "True integration of technology should be a democratic choice, not a result of economic coercion."),
            ("Optimism", "hopefulness and confidence about the future or the success of a technology.", "Blind technological optimism often ignores the severe environmental and social costs of automation."),
            ("Dystopian", "relating to or denoting an imagined state or society where there is great suffering or injustice.", "We must reject the dystopian narrative that humans are destined to become obsolete biological relics.")
        ],
        "warmup": [
            "Why is the public relations narrative around AI always framed as 'adapt or die'?",
            "Do you feel that you are actively choosing to use modern technology, or are you just forced to use it to survive?"
        ],
        "r1": [
            ("How does the myth of <strong>Technological determinism</strong> reduce our collective capacity to regulate tech giants?", "★ Do you believe that the path of technological progress is a unpreventable force of nature?"),
            ("Why does constant exposure to AI marketing trigger a quiet, defensive <strong>Cognitive submission</strong> in us?", "★ Have you ever felt a sense of helpless surrender when reading about the latest automation models?"),
            ("How can we actively assert our individual <strong>Human agency</strong> when algorithms dictate our career paths?", "★ What is one daily decision you make completely offline to preserve your independent <strong>Human agency</strong>?"),
            ("Why is corporate <strong>Adaptation</strong> to new software often driven by panic rather than actual utility?", "★ How do you personally handle the constant pressure to learn new digital tools in your career?"),
            ("How does the constant fear of professional <strong>Obsolescence</strong> affect the mental health of modern workers?", "★ Have you ever worried that your unique skills might face complete <strong>Obsolescence</strong> within ten years?"),
            ("Why do tech executives rely so heavily on the rhetoric of <strong>Inevitability</strong> during public debates?", "★ Does the word 'inevitable' inspire you with hope, or does it trigger a sense of claustrophobia?"),
            ("To what extent are we sacrificing our cognitive <strong>Sovereignty</strong> to automated recommendation systems?", "★ Do you feel you retain complete <strong>Sovereignty</strong> over your daily schedule, or does your phone manage you?"),
            ("How do tech giants use the threat of economic isolation as a form of social <strong>Coercion</strong>?", "★ Have you ever felt forced into using an application or platform that you deeply disliked?"),
            ("What is the psychological difference between blind tech <strong>Optimism</strong> and grounded, critical skepticism?", "★ How do you maintain a healthy, balanced perspective amidst the extreme hype and doom of tech news?"),
            ("Why is it so much easier for our minds to imagine a <strong>Dystopian</strong> future than a balanced, ecological one?", "★ What does your personal, ideal future look like—is it filled with silicon or with nature?")
        ],
        "lst": "The Tech Summit: Imagine you are speaking at a global technology conference. Challenge the narrative of AI inevitability and defend human agency, utilizing at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If society rejected <strong>Technological determinism</strong> tomorrow, would we regulate tech giants far more aggressively?",
            "If you could reclaim your complete cognitive <strong>Sovereignty</strong>, would you delete all your social media accounts?",
            "If we stopped panicking about professional <strong>Obsolescence</strong>, would we focus more on deep, creative mastery?",
            "If they had not manufactured a sense of absolute <strong>Inevitability</strong>, would the public have resisted automation?",
            "If you had not submitted to that quiet <strong>Cognitive submission</strong>, would you have chosen a different major in college?",
            "If they had respected <strong>Human agency</strong> years ago, would our digital workspaces be more comfortable today?",
            "If your previous company had not rushed its <strong>Adaptation</strong> last year, would they have saved their core talent?",
            "If the government had not surrendered to tech lobby <strong>Coercion</strong>, would our data be more secure today?",
            "If we had maintained a healthy tech skepticism instead of blind <strong>Optimism</strong>, would we have fewer digital addictions today?",
            "If you had to live in a highly automated, <strong>Dystopian</strong> city, would you choose to escape to a rural community?"
        ]
    },
    "wilsons-law": {
        "title": "Wilson's Law — COSYlanguages",
        "h1": "Wilson's Law — The Primacy of Knowledge and Capital",
        "desc": "This session examines Wilson's Law—the modern economic reality that 'if you prioritize intelligence and information, the money will naturally follow.' We will discuss the shift from physical capital to cognitive assets, and analyze whether information priority leads to financial prosperity or oversimplifies wealth creation. Together, we will reflect on how to balance expertise with action to cultivate true professional resilience.",
        "profile": {
            "tendency": "Thirst for Knowledge and Competence",
            "trigger": "Challenging Problems & Skill Shortfalls",
            "phenomenon": "Competence Valuation Effect",
            "anchor": "Trusting Your Psychological Development"
        },
        "vocab": [
            ("Prioritize", "designate or treat something as more important than other things.", "Successful professionals prioritize deep learning over quick, distracting entertainment."),
            ("Intelligence", "the cognitive capacity to acquire and apply complex knowledge and skills.", "Emotional intelligence is just as critical as logical thinking in corporate negotiations."),
            ("Information", "facts, data, and insights learned or received about a specific topic.", "In the modern digital landscape, access to verified information is a massive competitive advantage."),
            ("Prosperity", "the psychological and financial state of being successful, flourishing, and secure.", "True prosperity is not just about financial wealth; it includes emotional and social well-being."),
            ("Capital", "wealth in the form of money, assets, or human expertise owned by an individual.", "Startups often fail because they lack the initial intellectual capital to survive market setbacks."),
            ("Asset", "a useful, valuable, or legally defined possession, quality, or personal trait.", "An individual's personal reputation is their most valuable intangible asset."),
            ("Innovation", "the action or process of creating completely new, revolutionary methodologies and products.", "Continuous innovation is absolutely required to survive in a rapidly changing technical market."),
            ("Strategy", "a comprehensive, long-term plan of action designed to achieve a major goal.", "He developed a rigorous strategy to transition his career into artificial intelligence."),
            ("Insight", "a deep, intuitive, and sudden understanding of a complex person or situation.", "Market research provided a sudden insight that completely re-oriented the company's product line."),
            ("Expertise", "expert skill, knowledge, and mastery in a highly specialized professional field.", "Her technical expertise in software architecture made her an indispensable member of the team.")
        ],
        "warmup": [
            "Is intelligence without wisdom just a highly sophisticated trap?",
            "What was the most valuable piece of information you acquired this past year?"
        ],
        "r1": [
            ("How do you personally <strong>Prioritize</strong> your learning goals amidst an overwhelming daily schedule?", "★ How do you prioritize your tasks when everything in your office feels equally urgent?"),
            ("Can artificial <strong>Intelligence</strong> ever fully replicate the deep, intuitive nuance of human empathy?", "★ What does a person of exceptionally high emotional <strong>Intelligence</strong> look like in your opinion?"),
            ("Why is 'information overload' as dangerous to our focus as a complete lack of <strong>Information</strong>?", "★ What practical strategy do you use to filter out irrelevant digital noise in your life?"),
            ("What is the most critical psychological barrier to achieving long-term financial <strong>Prosperity</strong>?", "★ What is your personal, unvarnished definition of a highly prosperous and successful life?"),
            ("Is human intellectual <strong>Capital</strong> far more valuable than raw physical resources today?", "★ Do you believe that human capital or financial wealth is more important for a happy life?"),
            ("Why should a professional's network of trust be considered their most important <strong>Asset</strong>?", "★ What do you consider to be your greatest personal or professional <strong>Asset</strong>?"),
            ("How does rapid <strong>Innovation</strong> in education change the way we evaluate traditional credentials?", "★ When was the last time you introduced a small <strong>Innovation</strong> into your daily routine?"),
            ("What is your personal, unvarnished <strong>Strategy</strong> for maintaining your competitive edge?", "★ Do you have a clear, written <strong>Strategy</strong> for achieving your personal goals over the next five years?"),
            ("Can you share a time when a sudden psychological <strong>Insight</strong> completely re-oriented your life path?", "★ Can you share an intuitive <strong>Insight</strong> of yours that turned out to be completely correct?"),
            ("How long does it typically take to build a level of <strong>Expertise</strong> that others respect?", "★ What niche area of expertise or knowledge would you love to master in the future?")
        ],
        "lst": "The Knowledge Audit: Imagine you are advising a young startup that is prioritizing financial capital while ignoring intellectual expertise. Critique their strategy using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you had to <strong>Prioritize</strong> only one technical skill tomorrow, which would you choose?",
            "If collective human <strong>Intelligence</strong> were the only tool to solve global warming, would we succeed?",
            "If all premium <strong>Information</strong> became free and instant, how would that affect your job security?",
            "If national <strong>Prosperity</strong> depended solely on automation, which countries would lead the world?",
            "If you lost all your financial <strong>Capital</strong> tomorrow, which skill would help you recover fastest?",
            "If your most valuable <strong>Asset</strong> were taken away tomorrow, how would you reinvent yourself?",
            "If technological <strong>Innovation</strong> stopped for a decade, would our daily lives change for the worse?",
            "If your current career <strong>Strategy</strong> failed tomorrow, what would be your immediate Plan B?",
            "If you had sudden <strong>Insight</strong> into the future, would you use it for personal gain or public good?",
            "If your specialized <strong>Expertise</strong> became obsolete overnight, how would you respond?"
        ]
    }
}

# The remaining specs can be handled with similar targeted precision
def refactor_file(filename, spec_key):
    filepath = os.path.join(MM_DIR, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} (not found)")
        return

    spec = BATCH3_THEMES[spec_key]
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Detect level B1 or B2
    is_b1 = ("-intermediate.html" in filename or filename in ["benjamin-franklin-effect.html", "gilberts-law.html", "kidlins-law.html", "law-of-attraction.html", "maze-of-biases.html", "murphys-law.html", "psychology-of-action-bias.html", "wilsons-law.html"]) and "-upper-intermediate.html" not in filename
    level_suffix = " (B1)" if is_b1 else " (B2)"
    level_full = "Intermediate (B1)" if is_b1 else "Upper-Intermediate (B2)"

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

    # Update Meta Level
    meta_grid = soup.find(class_='session-meta-grid')
    if meta_grid:
        for item in meta_grid.find_all(class_='meta-item'):
            h4 = item.find('h4')
            if h4 and h4.get_text(strip=True) == "Level":
                p = item.find('p')
                if p:
                    p.string = level_full

    # Update Description Box (the div under metadata with inline style containing margin-bottom)
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
            # parse bold strings
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

    # Normalize s-mistakes header to avoid BS4 prettify multi-line spacing issue on <strong> or previous formatting
    mistakes_el = soup.find(id='s-mistakes')
    if mistakes_el:
        header = mistakes_el.find(class_='mistake-header')
        if header:
            span = header.find('span')
            if span:
                span.clear()
                span.string = "✏️ Teacher's Note (Linguistic Corrections)"

    # Save file
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(soup.prettify(formatter=None))
    print(f"Refactored: {filepath}")

def main():
    print("Beginning Mind Matters Batch 3 Refactoring...")
    for spec_key, spec in BATCH3_THEMES.items():
        if spec_key == "bounded-rationality":
            files = ["bounded-rationality-intermediate.html", "bounded-rationality-upper-intermediate.html"]
        elif spec_key == "the-bye-now-effect":
            files = ["the-bye-now-effect-intermediate.html", "the-bye-now-effect-upper-intermediate.html"]
        elif spec_key == "why-do-they-say-ai-is-inevitable":
            files = ["why-do-they-say-ai-is-inevitable-intermediate.html", "why-do-they-say-ai-is-inevitable-upper-intermediate.html"]
        elif spec_key == "benjamin-franklin-effect":
            files = ["benjamin-franklin-effect.html"]
        elif spec_key == "gilberts-law":
            files = ["gilberts-law.html"]
        elif spec_key == "kidlins-law":
            files = ["kidlins-law.html"]
        elif spec_key == "law-of-attraction":
            files = ["law-of-attraction.html"]
        elif spec_key == "maze-of-biases":
            files = ["maze-of-biases.html"]
        elif spec_key == "murphys-law":
            files = ["murphys-law.html"]
        elif spec_key == "psychology-of-action-bias":
            files = ["psychology-of-action-bias.html"]
        elif spec_key == "wilsons-law":
            files = ["wilsons-law.html"]
        else:
            files = [f"{spec_key}.html"]

        for filename in files:
            refactor_file(filename, spec_key)

    print("Batch 3 completed successfully!")

if __name__ == "__main__":
    main()
