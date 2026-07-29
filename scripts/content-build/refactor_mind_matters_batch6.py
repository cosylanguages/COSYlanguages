import os
import re
from bs4 import BeautifulSoup

MM_DIR = "events/sessions/mind-matters"

BATCH6_THEMES = {
    "brain-discipline-dopamine": {
        "title": "Trick Your Brain Into Discipline — COSYlanguages",
        "h1": "How to Trick Your Brain Into Liking Discipline",
        "desc": "This session explores the neurobiology of self-discipline, dopamine baseline adjustments, and behavior modification. We will discuss why our brains resist long-term planning, how modern instant gratification mechanisms hijack our neural pathways, and analyze practical cognitive techniques to trick our chemistry into enjoying deliberate discomfort.",
        "profile": {
            "tendency": "Instant Gratification Pursuit",
            "trigger": "Digital Notifications & Micro-Rewards",
            "phenomenon": "Dopamine Baseline Adjustments",
            "anchor": "Finding Joy in Deliberate Discomfort"
        },
        "vocab": [
            ("Gratification", "pleasure or satisfaction gained from the fulfillment of a desire, goal, or impulse.", "Our modern digital landscape is engineered to flood our brains with instant, low-effort gratification."),
            ("Dopamine", "a neurotransmitter that plays a major role in reward prediction, motivation, and motor control.", "Checking notifications triggers an immediate spike in dopamine, followed by a subsequent dip below baseline."),
            ("Resistance", "the internal psychological pushback experienced before undertaking a challenging, effortful task.", "The hardest part of any deep work session is overcoming the initial ten minutes of acute mental resistance."),
            ("Procrastination", "the counterproductive delay of a task, often functioning as an emotional coping mechanism.", "Chronic procrastination is rarely a sign of laziness; it is a subconscious strategy to avoid immediate stress."),
            ("Willpower", "the cognitive capacity to regulate, direct, and restrain short-term impulses to achieve long-term goals.", "Relying purely on conscious willpower is a fragile strategy, as it is rapidly depleted by fatigue."),
            ("Detoxification", "the process of removing overstimulation and toxic inputs to restore optimal cognitive sensitivity.", "A periodic digital detoxification weekend can successfully recalibrate your brain's baseline dopamine levels."),
            ("Stimulus", "any environmental trigger or input that evokes a functional reaction or grabs cognitive focus.", "The endless stream of notifications is a hyper-stimulating stimulus that fractures our attention span."),
            ("Frictionless", "achieved or designed with absolute ease, requiring zero effort, resistance, or structural barriers.", "Streaming platforms make consuming low-value entertainment completely frictionless, promoting passivity."),
            ("Satiation", "the psychological state of being completely satisfied, leading to a temporary loss of motivation.", "Immediate satiation of every physical craving destroys our long-term drive to pursue challenging goals."),
            ("Habituate", "to become accustomed, adapted, or desensitized to a specific routine, environment, or input over time.", "If you study at the exact same hour daily, your brain will slowly habituate, reducing cognitive friction.")
        ],
        "warmup": [
            "Why do our brains struggle so intensely with self-discipline when we logically understand its long-term benefits?",
            "How can we engineer our physical environment to make healthy habits frictionless and bad habits effortful?"
        ],
        "r1": [
            ("Why has our capacity for delaying <strong>Gratification</strong> decayed so dramatically in the era of high-speed algorithms?", "★ What is your ultimate, low-effort guilty pleasure that you find yourself indulging in daily?"),
            ("How do tech giants use variable reward schedules to hijack our <strong>Dopamine</strong> pathways?", "★ Have you ever had to delete a highly addictive application because it was draining your daily focus?"),
            ("What specific cognitive strategies do you use to bypass the initial mental <strong>Resistance</strong> before working?", "★ Do you have a starting ritual or specific workspace design to trigger a productive mindset?"),
            ("How does chronic <strong>Procrastination</strong> erode our professional self-esteem and feed into our baseline anxiety?", "★ What major professional task have you been putting off or delaying over the past week?"),
            ("Why is conscious <strong>Willpower</strong> a finite biological resource that gets depleted as cognitive demand increases?", "★ Are you more disciplined and productive in the early morning hours or late at night?"),
            ("How does a structured period of <strong>Detoxification</strong> reset our appreciation for slow-paced activities?", "★ Have you ever spent a full forty-eight hours completely disconnected from the digital grid?"),
            ("How does constant exposure to high-frequency visual <strong>Stimulus</strong> shorten our collective attention spans?", "★ Do you find yourself checking your phone during brief pauses in conversation or elevator rides?"),
            ("Why does living a highly comfortable, <strong>Frictionless</strong> life often increase our anxiety and lower our resilience?", "★ What is the physically or mentally hardest challenge you have successfully completed recently?"),
            ("How does immediate <strong>Satiation</strong> of all desires ruin a student's capacity for deep, specialized learning?", "★ Did you have to save money or work hard to purchase your first major computer or phone?"),
            ("How can we leverage our brain's tendency to <strong>Habituate</strong> to automate healthy, high-effort routines?", "★ What positive, disciplined habit have you successfully integrated into your life over the past year?")
        ],
        "lst": "The Dopamine Pitch: Imagine you are pitching a new productivity app that helps users bypass instant gratification loops. Explain the science and persuade the panel, using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you completely eliminated your search for instant <strong>Gratification</strong> tomorrow, would your life feel more peaceful?",
            "If tech companies were legally required to stop exploiting our <strong>Dopamine</strong> loops, would social media collapse?",
            "If you accepted that mental <strong>Resistance</strong> is simply a signal of value, would you seek out harder challenges?",
            "If you had not succumbed to chronic <strong>Procrastination</strong> last semester, would your final results be different today?",
            "If your conscious <strong>Willpower</strong> had been twice as strong during that crisis, would you have chosen a different path?",
            "If they had completed a digital <strong>Detoxification</strong> retreat last year, would they feel more focused today?",
            "If we removed every distracting <strong>Stimulus</strong> from our workspaces, would we find deep work completely natural?",
            "If daily life became completely <strong>Frictionless</strong>, do you think human happiness would decline in the future?",
            "If immediate <strong>Satiation</strong> was impossible, would children be more motivated to study today?",
            "If your brain did not <strong>Habituate</strong> to repetitive inputs, would you find every daily routine exhausting today?"
        ],
        "mistakes": [
            ("This video learned me how to focus", "This video taught me how to focus", "(Verb syntax: teachers teach; students learn. 'Teach' takes an indirect object of who is receiving instruction)"),
            ("I am procrastinating my study since Monday", "I have been procrastinating my studies since Monday", "(Verb aspect: use the present perfect continuous with 'since' to denote action starting in the past and continuing)"),
            ("We discussed about the psychological impact", "We discussed the psychological impact / had a discussion about the psychological impact", "(Preposition redundancy: 'discuss' is transitive; do not use 'about' directly after it)")
        ]
    },
    "power-of-habits": {
        "title": "The Power of Habits — COSYlanguages",
        "h1": "The Power of Habits — Automating the Self",
        "desc": "This session examines the psychology of habit loops—the automatic neurological routines that govern over forty percent of our daily behavior. We will explore environmental priming, cue-routine-reward loops, and discuss how to consciously overwrite destructive patterns to construct sustainable self-discipline and cognitive freedom.",
        "profile": {
            "tendency": "Seeking Behavioral Automation & Stability",
            "trigger": "Familiar Environmental Cues & Triggers",
            "phenomenon": "Cue-Routine-Reward Loop & Environmental Priming",
            "anchor": "Overwriting Negative Subconscious Routines"
        },
        "vocab": [
            ("Cue", "an environmental or sensory trigger that signals the brain to activate an automated habit.", "A vibrating phone is a powerful cue that instantly triggers the routine of checking social media."),
            ("Routine", "the physical, mental, or emotional behavior that is performed automatically following a cue.", "Replacing your sweet snack routine with hot tea is an effective way to overwrite unhealthy habits."),
            ("Reward", "the positive feedback or neurochemical payoff that reinforces a specific behavior loop.", "The dopamine hit from scrolling through news is the primary reward that locks in the habit loop."),
            ("Automation", "the process of executing behavior patterns with minimal conscious effort or decision energy.", "Habits are the brain's mechanism of automation, saving valuable mental energy for complex tasks."),
            ("Overwrite", "to replace or rebuild an existing automated routine with a healthier, conscious choice.", "To break a bad habit, you must keep the same cue and reward, but actively overwrite the routine."),
            ("Willpower", "the mental capacity to control impulses, focus attention, and regulate behavior.", "Since willpower is easily depleted by stress, designing a supportive environment is far more reliable."),
            ("Environmental priming", "arranging one's surroundings to naturally trigger desired behaviors and block bad ones.", "Placing your book on your pillow in the morning is a simple form of environmental priming."),
            ("Friction", "any barrier, effort, or obstacle that increases the difficulty of performing an action.", "By adding physical friction—like hiding the remote control—you can dramatically reduce TV watching."),
            ("Desensitization", "the gradual reduction of emotional or neurochemical reactivity to a repetitive stimulus.", "Constant exposure to notification pings leads to sensory desensitization, making real-life conversations feel dull."),
            ("Habituate", "to make or become accustomed to a specific behavior or mental process over time.", "Once you habituate to drinking water in the morning, the behavior requires zero conscious effort.")
        ],
        "warmup": [
            "Why is it so incredibly easy to form a destructive habit and so frustratingly difficult to build a positive one?",
            "Do you believe that we are truly free individuals, or are we just a collection of automated routines?"
        ],
        "r1": [
            ("How can we identify our subtle environmental <strong>Cue</strong> before it triggers a destructive routine?", "★ What is one sensory cue that instantly makes you feel hungry, stressed, or distracted?"),
            ("Why is a rigid morning <strong>Routine</strong> so highly valued by elite athletes and successful professionals?", "★ What is the absolute first thing you do immediately after waking up in the morning?"),
            ("How does our subconscious confuse a temporary chemical <strong>Reward</strong> with genuine emotional fulfillment?", "★ What is the most satisfying reward you look forward to after completing an exhausting workday?"),
            ("How does the brain's reliance on behavioral <strong>Automation</strong> free up our cognitive energy for complex tasks?", "★ What complex task at work have you successfully automated so that it requires minimal effort?"),
            ("Why is it psychologically impossible to erase a habit, forcing us to <strong>Overwrite</strong> it instead?", "★ Have you ever successfully overwritten an unhealthy habit with a highly productive one?"),
            ("Under what daily circumstances is your conscious <strong>Willpower</strong> most likely to fail completely?", "★ When in your day do you feel your focus and discipline are at their lowest point?"),
            ("How can we leverage <strong>Environmental priming</strong> to make study sessions feel completely natural?", "★ How have you designed your current workspace to minimize distractions and prime your focus?"),
            ("How does adding a small amount of physical <strong>Friction</strong> help us break addictive behavior loops?", "★ What is one app or website that you have added friction to (like logging out) to reduce your usage?"),
            ("Does chronic exposure to high-speed digital entertainment cause a permanent <strong>Desensitization</strong> to boredom?", "★ How do you handle moments of pure, quiet boredom when you don't have access to your devices?"),
            ("How long does it typically take for a foreign language student to <strong>Habituate</strong> to a daily study routine?", "★ What new habit are you currently trying to habituate into your weekly schedule?")
        ],
        "lst": "The Habit Redesign: Imagine you are presenting a self-improvement framework to a group of busy professionals. Guide them on how to overwrite a bad habit using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you identified every environmental <strong>Cue</strong> tomorrow, would you be able to control your impulses?",
            "If your morning <strong>Routine</strong> were completely disrupted tomorrow, would you still have a productive day?",
            "If we removed the immediate digital <strong>Reward</strong>, would we stop checking our phones altogether?",
            "If our brains lost their capacity for behavioral <strong>Automation</strong>, would we find daily life exhausting today?",
            "If you had to <strong>Overwrite</strong> your biggest professional habit today, which routine would you target first?",
            "If you had not relied purely on conscious <strong>Willpower</strong> last year, would you have achieved your health goals?",
            "If you had practiced <strong>Environmental priming</strong> in your previous home, would you be more organized today?",
            "If they had added physical <strong>Friction</strong> to their spending habits years ago, would they have saved more money?",
            "If you had not experienced sensory <strong>Desensitization</strong>, would you appreciate simple pleasures more today?",
            "If you managed to <strong>Habituate</strong> to reading every night, would your focus be significantly stronger today?"
        ],
        "mistakes": [
            ("I have a habit to check my phone", "I have a habit of checking my phone / I am in the habit of checking my phone", "(Grammar structure: use 'habit of' followed by a gerund [-ing] instead of the infinitive 'to check')"),
            ("It is more easy to build habits", "It is easier to build habits / It is much easier to build habits", "(Comparative syntax: 'easy' is a short adjective; its comparative form is 'easier', not 'more easy')"),
            ("We discussed about our routines", "We discussed our routines / had a discussion about our routines", "(Transitive verb: the verb 'discuss' takes a direct object without 'about')")
        ]
    },
    "science-of-sleep": {
        "title": "The Science of Sleep — COSYlanguages",
        "h1": "The Science of Sleep — Recalibrating the Mind",
        "desc": "This session explores the clinical and cognitive science of sleep—analyzing sleep architecture, circadian rhythms, and memory consolidation. We will discuss the psychological toll of chronic sleep deprivation, how the sleeping brain cleanses itself of metabolic waste, and investigate strategies to optimize our sleep hygiene for enhanced emotional resilience and cognitive processing.",
        "profile": {
            "tendency": "Desire for High Cognitive Performance & Energy",
            "trigger": "Insomnia, Stress, or High Workspace Demand",
            "phenomenon": "Glymphatic Cleansing & Memory Consolidation",
            "anchor": "Prioritizing Rest as a Strategic Choice"
        },
        "vocab": [
            ("Circadian rhythm", "the natural, internal process that regulates the sleep-wake cycle, repeating roughly every 24 hours.", "Artificial blue light from screens disrupts your circadian rhythm, delaying melatonin production."),
            ("Consolidation", "the cognitive process where the brain stabilizes and organizes temporary memories into long-term storage.", "Deep sleep is absolutely critical for the consolidation of vocabulary words learned during the day."),
            ("Insomnia", "habitual sleeplessness or the persistent inability to fall asleep and stay asleep.", "High professional stress and digital overstimulation are the primary triggers of modern insomnia."),
            ("Glymphatic system", "the functional waste clearance system that cleanses the brain of metabolic waste during deep sleep.", "During deep sleep, the glymphatic system becomes highly active, flushing out toxic proteins."),
            ("Cognitive deficit", "a reduction or impairment in mental capabilities, including focus, memory, and decision speed.", "Just one night of poor sleep introduces a severe cognitive deficit equivalent to mild intoxication."),
            ("Deprivation", "the state of lacking a basic necessity or biological requirement, such as sleep or food.", "Chronic sleep deprivation destroys emotional regulation, making individuals hyper-reactive to stress."),
            ("Somatic", "relating to the body as distinct from the mind; physical manifestations of physiological stress.", "Chronic fatigue is a somatic manifestation of underlying neurological exhaustion."),
            ("Restoration", "the process of returning a system to its original, healthy, and fully functioning state.", "The primary purpose of slow-wave sleep is physical restoration and immune system repair."),
            ("Stimulus", "an environmental or sensory input that activates a physiological response or keeps the brain awake.", "Consuming caffeine in the late afternoon acts as a strong chemical stimulus that blocks sleep signals."),
            ("Habituate", "to adapt, adjust, or become accustomed to a specific sleep schedule or routine over time.", "Once you habituate to waking up at dawn, your body will naturally align its hormone cycles.")
        ],
        "warmup": [
            "Why do we treat sleep deprivation as a badge of honor in modern corporate and academic cultures?",
            "How does your overall emotional stability, patience, and humor change after a night of poor sleep?"
        ],
        "r1": [
            ("How does traveling across multiple time zones disrupt our biological <strong>Circadian rhythm</strong>?", "★ How sensitive is your personal sleep schedule to minor changes in your daily routine?"),
            ("Why is deep, uninterrupted sleep essential for the <strong>Consolidation</strong> of newly acquired language skills?", "★ What is your primary strategy for remembering complex information before a major exam or meeting?"),
            ("How can we break the anxious psychological cycle of lying awake worrying about <strong>Insomnia</strong>?", "★ Have you ever suffered from temporary insomnia, and what was the root cause of your sleeplessness?"),
            ("How does understanding the <strong>Glymphatic system</strong> change our view of sleep from a passive luxury to an active necessity?", "★ Do you view sleeping eight hours as a strategic choice or a waste of productive time?"),
            ("What is the most noticeable <strong>Cognitive deficit</strong> you experience when operating on less than six hours of sleep?", "★ Have you ever made a major professional error due to simple fatigue and lack of focus?"),
            ("What are the long-term psychological consequences of chronic sleep <strong>Deprivation</strong> on our emotional resilience?", "★ How do you manage your mood and communication style when you are completely exhausted?"),
            ("In what ways does a lack of deep rest translate into chronic, painful <strong>Somatic</strong> tension in the body?", "★ Where in your body do you physically experience the effects of a poor night's sleep?"),
            ("Why is psychological <strong>Restoration</strong> during dreaming sleep critical for processing traumatic emotional events?", "★ Can you recall a vivid dream that seemed to help you process a real-life anxiety?"),
            ("How can we remove sleep-disrupting <strong>Stimulus</strong> inputs from our bedrooms to optimize our hygiene?", "★ What is your current evening routine, and how do you prepare your mind for restful sleep?"),
            ("How long does it take for a person to <strong>Habituate</strong> to a non-traditional night-shift work schedule?", "★ What is the ideal sleep schedule that makes you feel most energized and creative?")
        ],
        "lst": "The Sleep Manifesto: Imagine you are addressing a corporate board that expects employees to answer emails at midnight. Present your case for sleep optimization, using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you synchronized your lifestyle with your natural <strong>Circadian rhythm</strong> tomorrow, would your productivity double?",
            "If you prioritized sleep consolidation, would you find learning a foreign language far easier today?",
            "If you suffered from chronic <strong>Insomnia</strong> tomorrow, would you refuse to take sleep medication?",
            "If the <strong>Glymphatic system</strong> stopped functioning during sleep, would our brains age rapidly today?",
            "If you did not have a severe <strong>Cognitive deficit</strong> today, would you complete your tasks in half the time?",
            "If we had not normalized chronic sleep <strong>Deprivation</strong>, would modern office cultures be less toxic today?",
            "If your <strong>Somatic</strong> fatigue had been addressed years ago, would you now have more physical energy today?",
            "If you had experienced deep psychological <strong>Restoration</strong> last night, would you feel less anxious today?",
            "If we removed every digital <strong>Stimulus</strong> from our bedroom, would our sleep quality improve tonight?",
            "If you managed to <strong>Habituate</strong> to waking up at dawn, would your overall lifestyle be healthier today?"
        ],
        "mistakes": [
            ("I am sleeping very bad", "I sleep very poorly / I have been sleeping very poorly", "(Grammar: use the adverb 'poorly' to modify the verb 'sleep' instead of the adjective 'bad')"),
            ("It is important to have a good sleep", "It is important to get good sleep / It is important to sleep well", "(Collocation error: we 'get good sleep' or 'sleep well', rather than 'having a good sleep')"),
            ("We discussed about our sleep habits", "We discussed our sleep habits / had a discussion about our sleep habits", "(Verb transitivity: 'discuss' is transitive and does not take 'about' directly)")
        ]
    },
    "how-to-love-your-work": {
        "title": "How to Love Your Work — COSYlanguages",
        "h1": "How to Love Your Work — Intrinsic Motivation",
        "desc": "This session explores self-determination theory and the social psychology of career satisfaction. We will discuss why pursuing extrinsic rewards like money or status often leads to burnout and existential dread, and analyze how to cultivate autonomy, competence, and relatedness to find true intrinsic motivation and fulfillment in our professional lives.",
        "profile": {
            "tendency": "Desire for Professional Fulfillment & Meaning",
            "trigger": "Burnout, Toxic Corporate Cultures, or Boredom",
            "phenomenon": "Self-Determination Theory & Intrinsic Motivation",
            "anchor": "Aligning Professional Choices with Personal Values"
        },
        "vocab": [
            ("Intrinsic motivation", "the drive to engage in an activity because it is inherently satisfying, enjoyable, or meaningful.", "True career longevity and creative success are fueled by deep intrinsic motivation."),
            ("Autonomy", "the psychological need to feel in control of one's own choices, actions, and destiny.", "Micromanagement destroys a worker's sense of autonomy, leading to psychological detachment."),
            ("Competence", "the feeling of mastery, skill, and effectiveness in one's chosen field.", "Gaining professional competence is a slow process that requires consistent, deliberate practice."),
            ("Extrinsic rewards", "external incentives or payoffs, such as money, prestige, status, or praise.", "While extrinsic rewards are useful, they fail to sustain long-term engagement on their own."),
            ("Alienation", "the feeling of isolation, disconnection, or meaninglessness in one's daily work.", "Performing repetitive, meaningless tasks leads to a profound sense of workplace alienation."),
            ("Resilience", "the capacity of the mind to recover quickly from professional setbacks and business failures.", "A supportive professional community is essential for maintaining psychological resilience."),
            ("Perspective", "a cognitive lens or attitude regarding career success, work-life balance, and fulfillment.", "Gaining a fresh perspective on your career can help you prioritize happiness over raw income."),
            ("Authenticity", "the practice of aligning one's daily work and choices with their genuine core values.", "She sacrificed corporate status to find a role that allowed her to live with absolute authenticity."),
            ("Introspection", "the focused, critical examination of one's own motivations, career goals, and values.", "Choosing a new career path requires deep introspection to avoid repeating past mistakes."),
            ("Satiation", "the psychological state of being completely filled or satisfied with material success, leading to stagnation.", "The immediate satiation of all material desires often leaves wealthy professionals feeling empty.")
        ],
        "warmup": [
            "Do we work to live, or do we live to work? Where do you draw the boundary between your identity and your job?",
            "Why is the modern corporate landscape so obsessed with outward status symbols rather than employee happiness?"
        ],
        "r1": [
            ("How does cultivating <strong>Intrinsic motivation</strong> protect our mental health from the threat of burnout?", "★ What aspect of your current job do you find genuinely satisfying and enjoyable on its own?"),
            ("Why is personal <strong>Autonomy</strong> considered the most critical factor for creative freedom in the office?", "★ How much freedom do you have to decide your own daily tasks and project schedules?"),
            ("How does a lack of professional <strong>Competence</strong> feed into a beginner's daily imposter syndrome?", "★ What specific professional skill of yours are you actively working to master right now?"),
            ("Why do <strong>Extrinsic rewards</strong> like a high salary eventually lose their power to motivate us?", "★ Have you ever accepted a lower-paying job because it offered more meaning and freedom?"),
            ("How does performing specialized, fragmented tasks contribute to a feeling of modern <strong>Alienation</strong>?", "★ Have you ever felt that your daily efforts were completely disconnected from the final product?"),
            ("What role does self-compassion play in building our <strong>Resilience</strong> against professional setbacks?", "★ What is the most challenging career setback you have successfully navigated in your life?"),
            ("How does changing our overall <strong>Perspective</strong> on money alter our career ambitions?", "★ What is your personal, unvarnished definition of a highly successful and prosperous career?"),
            ("Why is maintaining our <strong>Authenticity</strong> in a highly political corporate space so exhausting?", "★ Have you ever had to hide your true opinions or personality to fit into a corporate culture?"),
            ("Why is regular <strong>Introspection</strong> required to identify when our career has drifted away from our values?", "★ How often do you reflect on whether your current job is contributing to your long-term growth?"),
            ("Why does the rapid <strong>Satiation</strong> of all career ambitions often lead to a profound existential crisis?", "★ If you achieved all your professional goals tomorrow, what would you choose to do next?")
        ],
        "lst": "The Career Consultation: Imagine you are a career coach advising a high-earning corporate executive who is miserable and wants to find intrinsic meaning. Deliver your advice, explaining how they can pivot using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you prioritized <strong>Intrinsic motivation</strong> tomorrow, would you choose to resign from your current job?",
            "If your manager granted you absolute <strong>Autonomy</strong> today, would your daily productivity improve?",
            "If you lacked professional <strong>Competence</strong> in your field, would you still feel confident today?",
            "If society completely banned <strong>Extrinsic rewards</strong> like bonuses, would people still work hard?",
            "If you had not experienced that profound workplace <strong>Alienation</strong>, would you have started your startup today?",
            "If they had supported your creative <strong>Resilience</strong> years ago, would you still be with that team today?",
            "If you had not gained a healthier <strong>Perspective</strong> on success last year, would you still be burnt out today?",
            "If you could live with absolute, uncompromised <strong>Authenticity</strong>, what would your ideal job be today?",
            "If you had not practiced honest, painful <strong>Introspection</strong>, would you still be trapped in that role today?",
            "If your career goals reached immediate <strong>Satiation</strong> tomorrow, would you retire or start a new passion?"
        ],
        "mistakes": [
            ("I am working as a doctor since five years", "I have been working as a doctor for five years", "(Grammar: use present perfect continuous with 'for' to denote a duration of time)"),
            ("It is a high-paid job", "It is a high-paying job / It is a lucrative career", "(Collocation error: use 'high-paying job' or 'well-paying job' instead of 'high-paid')"),
            ("We discussed about our career paths", "We discussed our career paths / had a discussion about our career paths", "(Transitive verb syntax: 'discuss' directly takes the object without the preposition 'about')")
        ]
    },
    "aspiration-vs-inspiration": {
        "title": "Aspiration vs. Inspiration — COSYlanguages",
        "h1": "Aspiration vs. Inspiration — The Fuel of the Mind",
        "desc": "This session explores the psychological distinction between aspiration—the goal-directed, future-focused desire for achievement—and inspiration—the spontaneous, emotionally driven spark of creativity. We will discuss how to balance these two mental forces to prevent chronic productivity anxiety and foster authentic, self-directed development.",
        "profile": {
            "tendency": "Desire for Continuous Achievement & Creation",
            "trigger": "Productivity Anxiety or Creative Blocks",
            "phenomenon": "Spontaneous Inspiration vs. Structured Aspiration",
            "anchor": "Harmonizing Strategic Goals with Spontaneous Play"
        },
        "vocab": [
            ("Aspiration", "a hope, ambition, or future-focused goal of achieving a specific high-status target.", "His main career aspiration was to lead a global environmental nonprofit organization."),
            ("Inspiration", "the spontaneous, emotionally driven spark of mental stimulation that triggers creative action.", "She found her main artistic inspiration in the chaotic, vibrant street life of Paris."),
            ("Spontaneous", "performed or occurring as a result of a sudden inner impulse, without pre-meditation.", "Spontaneous ideas are often far more brilliant than those generated through forced brainstorming."),
            ("Anxiety", "the feeling of worry, nervousness, or unease about an uncertain future or performance.", "The relentless pressure to achieve our aspirations can fuel chronic decision anxiety."),
            ("Authenticity", "the practice of aligning one's creative output and goals with their genuine core values.", "Creative success requires us to trade commercial trends for raw, uncompromised authenticity."),
            ("Introspection", "the focused, critical examination of one's own mental processes, goals, and emotional triggers.", "A period of quiet introspection is essential for separating your true goals from societal pressure."),
            ("Satiation", "the psychological state of being completely filled or satisfied, leading to a temporary loss of drive.", "Immediate satiation of all goals can leave high-achievers feeling stagnant and unmotivated."),
            ("Evolve", "to develop, adapt, and grow gradually over time to reflect changing internal and external realities.", "Our personal goals must evolve as we acquire more life experience and wisdom."),
            ("Perspective", "a cognitive lens, point of view, or attitude regarding personal growth and creative success.", "Gaining a broader perspective allowed him to see that slow progress is still progress."),
            ("Resilience", "the capacity of the mind to recover quickly from creative blocks, setbacks, and failures.", "Nurturing emotional resilience is critical for surviving the unpredictable ups and downs of a creative career.")
        ],
        "warmup": [
            "Do you find that your best ideas come to you when you are actively trying to brainstorm, or when you are completely relaxed?",
            "How do we separate our genuine, internal aspirations from the status-driven goals imposed on us by society?"
        ],
        "r1": [
            ("How can a highly structured <strong>Aspiration</strong> turn into a source of chronic productivity pressure?", "★ What is your primary professional aspiration for the next five years of your career?"),
            ("Why is relying solely on spontaneous <strong>Inspiration</strong> a dangerous strategy for professional artists?", "★ Where do you typically find your strongest creative inspiration when you are feeling blocked?"),
            ("What are the psychological benefits of leaving room for <strong>Spontaneous</strong>, unstructured play in our daily schedules?", "★ Can you recall a spontaneous decision you made that led to an unexpected, beautiful opportunity?"),
            ("Why does our modern 'hustle culture' directly fuel an underlying state of baseline <strong>Anxiety</strong>?", "★ How do you personally manage your anxiety when you feel you are not achieving your goals fast enough?"),
            ("Why is maintaining our creative <strong>Authenticity</strong> so difficult when our survival depends on commercial success?", "★ How do you protect your authenticity when forced to adapt your work to please others?"),
            ("How does deep <strong>Introspection</strong> help us identify when our aspirations are actually just projections of others' desires?", "★ Have you ever achieved a major goal only to realize, through introspection, that it didn't make you happy?"),
            ("Why does the rapid <strong>Satiation</strong> of our immediate desires often cause a temporary loss of ambition?", "★ Have you ever experienced a sudden dip in motivation immediately after completing a major project?"),
            ("How must our creative style <strong>Evolve</strong> if we want to avoid repeating ourselves and becoming obsolete?", "★ In what specific ways has your personality or creative taste evolved over the past decade?"),
            ("How does a change in our global <strong>Perspective</strong> alter the way we evaluate our life's purpose?", "★ How has your perspective on what constitutes a successful life changed since you were twenty?"),
            ("How can we build the psychological <strong>Resilience</strong> required to handle constant creative rejection?", "★ What is your primary coping strategy when a project you poured your heart into receives criticism?")
        ],
        "lst": "The Creative Pivot: Imagine you are advising a burnt-out artist who is struggling with severe creative blocks and productivity anxiety. Help them rebalance their creative process using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you abandoned every status-driven <strong>Aspiration</strong> tomorrow, would your daily anxiety levels drop?",
            "If you relied solely on spontaneous <strong>Inspiration</strong> today, would you complete any of your projects?",
            "If your work schedule became completely <strong>Spontaneous</strong> tomorrow, would you feel liberated or anxious?",
            "If modern society did not impose such rigid goals, would we feel less productivity <strong>Anxiety</strong> today?",
            "If you could create with absolute <strong>Authenticity</strong> today, what masterpiece would you build?",
            "If you had not practiced honest, painful <strong>Introspection</strong>, would you still be pursuing that obsolete goal today?",
            "If your immediate career goals reached absolute <strong>Satiation</strong> tomorrow, would you stop working completely?",
            "If your personal taste did not <strong>Evolve</strong> over time, would you still enjoy the same hobbies today?",
            "If you had not gained a healthier <strong>Perspective</strong> on failure last year, would you have given up your passions?",
            "If your emotional <strong>Resilience</strong> had not been tested by past setbacks, would you possess your current maturity today?"
        ],
        "mistakes": [
            ("I am inspired from his story", "I am inspired by his story / I drew inspiration from his story", "(Collocation syntax: use 'inspired by' to indicate the source of inspiration, or 'draw inspiration from')"),
            ("It is more better to be spontaneous", "It is much better to be spontaneous / It is better to be spontaneous", "(Comparative syntax: 'better' is already a comparative; do not double-mark it with 'more')"),
            ("We discussed about our aspirations", "We discussed our aspirations / had a discussion about our aspirations", "(Verb transitivity: 'discuss' directly takes the object without the preposition 'about')")
        ]
    },
    "impersonation": {
        "title": "Impersonation — COSYlanguages",
        "h1": "Impersonation — The Art of the Mask",
        "desc": "This session explores the psychological mechanics of impersonation and roleplay—analyzing why humans adopt social masks, the cognitive load of playing a persona, and the phenomenon of 'imposter syndrome'. We will discuss how temporary behavior mimicry can help us discover hidden aspects of our authenticity, and analyze how to maintain our core identity under social pressure.",
        "profile": {
            "tendency": "Desire for Adaptability & Social Fit",
            "trigger": "Entering Unfamiliar, High-Status Social Circles",
            "phenomenon": "Imposter Syndrome & Persona Modeling",
            "anchor": "Integrating the Mask with the True Self"
        },
        "vocab": [
            ("Impersonation", "the act of pretending to be another person, typically for entertainment, fraud, or social adaptation.", "Social survival often requires a mild form of impersonation to fit into high-status environments."),
            ("Persona", "the social mask or aspect of character presented to and perceived by others.", "He constructed a highly confident public persona to mask his deep-seated academic insecurities."),
            ("Authenticity", "the psychological alignment of one's external choices and behavior with their core self.", "Trading social approval for raw authenticity is the final step of psychological maturity."),
            ("Vulnerability", "the state of being exposed to emotional risk, uncertainty, and potential judgment.", "True connection is built when we drop our personas and expose our raw vulnerability."),
            ("Conformity", "behavior in accordance with socially accepted conventions, rules, or peer standards.", "The corporate environment demanded absolute conformity, suppressing any unique individuality."),
            ("Subconscious", "the part of the mind that processes memories, fears, and patterns below active awareness.", "His imposter syndrome was an automated, subconscious response to his childhood conditioning."),
            ("Introspection", "the focused, critical examination of one's own mental and emotional processes.", "Through quiet introspection, we can separate our true desires from the social masks we wear."),
            ("Resilience", "the capacity of the mind to recover quickly from social rejection, criticism, and setbacks.", "Building emotional resilience is critical for navigating highly competitive, political workspaces."),
            ("Perspective", "a cognitive lens, attitude, or point of view regarding personal growth and social dynamics.", "Gaining a broader perspective allowed him to view social interactions as a playful game rather than a threat."),
            ("Stigmatize", "to brand a particular behavioral trait, background, or accent as worthy of social disapproval.", "We must stop trying to stigmatize those who do not fit standard corporate molds.")
        ],
        "warmup": [
            "Do we possess a single, authentic 'true self', or are we just a collection of different social masks that we wear?",
            "Why is the feeling of being an 'imposter' so common among highly successful and competent professionals?"
        ],
        "r1": [
            ("How does constant social <strong>Impersonation</strong> contribute to baseline psychological exhaustion?", "★ Have you ever had to act like a completely different person to survive a professional event?"),
            ("Why is adopting a polished <strong>Persona</strong> necessary for protecting our emotional core in high-stakes fields?", "★ Do you feel a major gap between your public persona and your private thoughts?"),
            ("How can we maintain our <strong>Authenticity</strong> when forced to operate in highly competitive environments?", "★ What is the hardest part about staying true to your core values under social pressure?"),
            ("Why does exposing our raw <strong>Vulnerability</strong> build a stronger social trust than performative perfection?", "★ When did you last feel safe enough to drop your mask and show your true feelings to someone?"),
            ("How does intense peer <strong>Conformity</strong> slowly erode our capacity for original, independent thinking?", "★ Have you ever agreed with a group decision even though your gut told you it was wrong?"),
            ("How does our <strong>Subconscious</strong> mind use the fear of exposure to fuel our persistent imposter syndrome?", "★ Have you ever worried that people would suddenly discover you are not as competent as they think?"),
            ("Why is regular, honest <strong>Introspection</strong> required to separate our true self from our corporate masks?", "★ What is one personal habit or value that you refuse to compromise for any professional status?"),
            ("How does surviving a major social setback or rejection contribute to our psychological <strong>Resilience</strong>?", "★ What was the most challenging social or professional rejection you have successfully navigated?"),
            ("How does cultural distance help us gain a healthier, more compassionate <strong>Perspective</strong> on social hierarchies?", "★ How has your perspective on what constitutes high social status shifted over the last ten years?"),
            ("Why does modern professional culture continue to <strong>Stigmatize</strong> those who do not speak with standard accents?", "★ Have you ever felt self-conscious or judged because of your foreign accent or dialect?")
        ],
        "lst": "The Imposter Audit: Imagine you are advising a highly successful professional who is paralyzed by severe imposter syndrome before a major promotion. Deliver your advice, explaining how they can integrate their masks using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you abandoned every social mask tomorrow, would your close relationships improve or disintegrate?",
            "If your public <strong>Persona</strong> were completely stripped away, who would you be to a stranger?",
            "If you had to sacrifice your career status to protect your <strong>Authenticity</strong> today, would you do it?",
            "If you showed raw <strong>Vulnerability</strong> during your next conflict, how would your opponent respond?",
            "If you had conformed to every family expectation back then, would you be living in this city today?",
            "If your <strong>Subconscious</strong> imposter fears had been resolved in childhood, would you now be more bold today?",
            "If you had not practiced honest <strong>Introspection</strong>, would you still be wearing that exhausting mask today?",
            "If your overall social <strong>Resilience</strong> was doubled today, what high-status group would you approach first?",
            "If you had not gained a healthier <strong>Perspective</strong> on status, would you still be chasing empty validation today?",
            "If society did not <strong>Stigmatize</strong> minor errors, would you feel completely comfortable speaking today?"
        ],
        "mistakes": [
            ("I feel like an imposter person", "I feel like an imposter / I experience imposter syndrome", "(Article & Noun syntax: 'imposter' is a noun; use 'an imposter' or the phrase 'imposter syndrome')"),
            ("It makes me feeling fake", "It makes me feel fake", "(Causative verb syntax: the verb 'make' + object requires a bare infinitive without -ing)"),
            ("We discussed about our masks", "We discussed our masks / had a discussion about our masks", "(Transitive syntax: 'discuss' directly takes the object without the preposition 'about')")
        ]
    },
    "psychology-of-smiles": {
        "title": "The Psychology of Smiles — COSYlanguages",
        "h1": "The Psychology of Smiles — The Authentic vs. Duchenne Smile",
        "desc": "This session deconstructs the psychology of facial expressions, focusing on the distinction between the Duchenne smile (authentic enjoyment) and the social, performative smile (compliance/politeness). We will discuss how smiles are leveraged to manipulate trust, the emotional toll of performative emotional labor, and analyze the biological feedback loop between facial muscles and neural chemistry.",
        "profile": {
            "tendency": "Desire for Social Safety & Validation",
            "trigger": "High-Stakes Interpersonal Negotiations",
            "phenomenon": "Duchenne Alignment & Emotional Labor",
            "anchor": "Differentiating True Warmth from Performative Politeness"
        },
        "vocab": [
            ("Duchenne smile", "a genuine smile of enjoyment characterized by the contraction of both the major zygomatic muscle and orbicularis oculi.", "The clinician instantly spotted the difference between her polite social smirk and her authentic Duchenne smile."),
            ("Authenticity", "the psychological alignment of one's physical expressions and behavior with their genuine emotions.", "In corporate service roles, maintaining emotional authenticity is a constant, exhausting struggle."),
            ("Conformity", "behavior or facial expressions modified to meet socially accepted expectations and polite standards.", "Her polite, continuous nodding was a classic display of social conformity in a tense boardroom."),
            ("Defensive", "characterized by expressions or postures designed to shield the ego from perceived social threats.", "He crossed his arms and adopted a tight, defensive grin to block further personal questioning."),
            ("Deceptive", "giving an appearance or impression different from the true, underlying reality; misleading.", "The scam artist used a highly practiced, deceptive smile to bypass his victims' logical skepticism."),
            ("Subconscious", "the part of the mind that processes emotional triggers and somatic reactions below active awareness.", "Our micro-expressions are automated by the subconscious, making true emotions difficult to completely hide."),
            ("Introspection", "the focused, critical examination of one's own internal feelings, motivations, and mental state.", "A moment of introspection helped her realize that her happy public persona was a mask for deep burnout."),
            ("Resilience", "the capacity of the mind to recover quickly from emotional exhaustion and high-stress negotiations.", "Nurturing genuine, shared laughter with close friends is essential for restoring your psychological resilience."),
            ("Perspective", "a cognitive lens, attitude, or point of view regarding social dynamics and emotional labor.", "Gaining an objective perspective on non-verbal cues can help you negotiate high-stakes deals with confidence."),
            ("Somatic", "relating to the body as distinct from the mind; physiological feedback of emotional expressions.", "Forcing your face to smile actually triggers a somatic feedback loop that can mildly elevate your mood.")
        ],
        "warmup": [
            "Can we ever truly trust a continuous, warm smile in a highly competitive corporate environment?",
            "Why is performative smiling (emotional labor) in customer service so physically and mentally exhausting?"
        ],
        "r1": [
            ("What ocular indicators distinguish an authentic <strong>Duchenne smile</strong> from a forced, polite smirk?", "★ Have you ever caught yourself giving a fake smile to a supervisor or difficult client?"),
            ("Why is maintaining emotional <strong>Authenticity</strong> so deeply challenging when our income depends on customer satisfaction?", "★ Under what circumstances do you find it easiest to share your absolute, unforced joy?"),
            ("How does social <strong>Conformity</strong> force us to smile when we are actually feeling intense disagreement or anger?", "★ Have you ever had to smile and nod during a meeting when you wanted to scream?"),
            ("Why do we adopt a tight, <strong>Defensive</strong> grin when our professional authority is being publicly challenged?", "★ How do you personally handle colleagues who use sarcasm wrapped in a polite smile to criticize you?"),
            ("How can we protect ourselves from the highly <strong>Deceptive</strong> warmth of a sophisticated manipulator?", "★ Has anyone ever gained your trust using a friendly persona, only to later betray your expectations?"),
            ("How does our <strong>Subconscious</strong> immediately detect when a conversational partner's smile is inauthentic?", "★ Have you ever had a strong gut feeling that someone was fake, even though they were perfectly polite?"),
            ("How does deep <strong>Introspection</strong> help us identify when our happy social mask is hiding deep burnout?", "★ What is one warning sign that tells you that you are spending too much energy pleasing others?"),
            ("How does sharing genuine, unforced laughter contribute to our psychological <strong>Resilience</strong> after a crisis?", "★ What shared activity with your closest friends always succeeds in restoring your emotional energy?"),
            ("How does understanding facial micro-expressions change our overall <strong>Perspective</strong> on human negotiations?", "★ Do you pay close attention to body language and eye contact when evaluating a stranger's character?"),
            ("What does the <strong>Somatic</strong> feedback hypothesis suggest about the power of forcing ourselves to smile when sad?", "★ Have you ever tried to smile in the mirror to improve your mood, and did it actually work?")
        ],
        "lst": "The Emotional Labor Audit: Imagine you are a union representative addressing the management of a major airline about the mental toll of forced smiling on flight attendants. Deliver your speech, utilizing at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If everyone displayed only authentic <strong>Duchenne smile</strong> patterns tomorrow, would polite society collapse?",
            "If your job allowed absolute emotional <strong>Authenticity</strong>, would you stop smiling at customers today?",
            "If social <strong>Conformity</strong> didn't require polite expressions, would boardroom meetings be more hostile today?",
            "If you dropped your <strong>Defensive</strong> grin during conflicts, would you feel more vulnerable or more secure today?",
            "If you had to deal with a highly <strong>Deceptive</strong> negotiator tomorrow, would you trust your gut or the data?",
            "If your <strong>Subconscious</strong> had not warned you about that fake smile last year, would you have made that bad deal?",
            "If you had not practiced honest <strong>Introspection</strong>, would you still be wearing that exhausting mask today?",
            "If your overall emotional <strong>Resilience</strong> was doubled today, would you take more risks in your negotiations?",
            "If you had not gained a healthier <strong>Perspective</strong> on emotional labor, would you still be burnt out today?",
            "If the <strong>Somatic</strong> feedback loop were twice as powerful, would you force yourself to smile every single morning?"
        ],
        "mistakes": [
            ("She smiled me in the office", "She smiled at me in the office", "(Preposition syntax: the verb 'smile' is intransitive; it requires 'at' before the direct object 'me')"),
            ("It makes me feeling happier", "It makes me feel happier", "(Causative verb grammar: 'make' + object takes a bare infinitive without -ing)"),
            ("We discussed about her expression", "We discussed her expression / had a discussion about her expression", "(Transitive verb: the verb 'discuss' takes a direct object without 'about')")
        ]
    },
    "mind-great-literature": {
        "title": "The Mind in Great Literature — COSYlanguages",
        "h1": "The Mind in Great Literature — Psychological Narrative",
        "desc": "This session explores the deep psychological landscapes of classic literature—analyzing how narratives function as high-resolution maps of human conditioning, moral choices, and the subconscious. We will discuss the therapeutic value of narrative identity, how literature builds our capacity for empathy, and reflect on the classic archetypes that shape our modern self-concept.",
        "profile": {
            "tendency": "Desire for Narrative Depth & Archetypal Meaning",
            "trigger": "Reflecting on Life's Complex Moral Paradoxes",
            "phenomenon": "Narrative Identity & Cognitive Empathy Modeling",
            "anchor": "Integrating Your Personal Life Story with Universal Themes"
        },
        "vocab": [
            ("Narrative identity", "the internalized, evolving story a person constructs to make sense of their life.", "Great novels provide us with the cognitive scaffolding to articulate our own narrative identity."),
            ("Conditioning", "the process of training or accustoming a person to behave in a certain way based on culture.", "Reading classic literature allows us to observe and question our own cultural conditioning."),
            ("Subconscious", "the part of the mind that processes memories, fears, and archetypes below active awareness.", "Dostoevsky's characters are masterfully written studies of the raw, unfiltered subconscious."),
            ("Empathy", "the capacity to step into, share, and cognitively process the emotional reality of another.", "Studies show that reading deep fiction directly improves our capacity for real-world empathy."),
            ("Archetype", "a universal, primal symbol, character, or theme that recurs across human storytelling.", "The shadow, the hero, and the caregiver are powerful archetypes that shape our self-concept."),
            ("Resilience", "the psychological capacity to recover from setbacks, grief, and moral crises.", "Tracing a protagonist's journey through tragedy can teach us profound lessons about resilience."),
            ("Perspective", "a cognitive lens, point of view, or attitude regarding personal growth and ethics.", "Literature offers us a multi-dimensional perspective on complex human dilemmas."),
            ("Authenticity", "the practice of aligning one's choices and lifestyle with their core values rather than group norms.", "The ultimate struggle of many tragic literary heroes is the pursuit of uncompromised authenticity."),
            ("Introspection", "the focused, critical examination of one's own mental and emotional processes.", "Reading a pensive, slow-paced novel triggers a state of deep, peaceful introspection."),
            ("Stigmatize", "to brand a particular character trait, choice, or background as worthy of social disapproval.", "Great writers refuse to stigmatize their flawed characters, choosing to show their underlying humanity.")
        ],
        "warmup": [
            "Why do we find it easier to understand our own emotional complexes when we see them reflected in a fictional character?",
            "Can reading high-quality literature actually replace therapy, or does it simply serve as a comforting distraction?"
        ],
        "r1": [
            ("How does classic literature help us construct a highly coherent <strong>Narrative identity</strong>?", "★ Which fictional character from a book you read in childhood do you feel closest to today?"),
            ("Why is exposing ourselves to diverse literary worlds the best tool for questioning our <strong>Conditioning</strong>?", "★ What is one cultural belief of yours that was completely shattered by reading a foreign novel?"),
            ("How do master writers like Dostoevsky map the dark, contradictory layers of the human <strong>Subconscious</strong>?", "★ Have you ever read a book that felt like it was reading your private, subconscious thoughts?"),
            ("How does deep fiction train our capacity for cognitive <strong>Empathy</strong> far more effectively than self-help books?", "★ Can you recall a book that made you cry, and what did that reaction teach you about your empathy?"),
            ("What universal human <strong>Archetype</strong> (the rebel, the orphan, the sage) do you find yourself playing most often?", "★ Which archetype did your parents encourage you to embody during your childhood?"),
            ("How does analyzing a tragic protagonist's collapse build our own psychological <strong>Resilience</strong>?", "★ What story or novel has given you the most comfort and strength during a major personal crisis?"),
            ("How does a great novel offer us a compassionate, non-judgmental <strong>Perspective</strong> on human flaws?", "★ How has your perspective on what constitutes a good person changed through reading literature?"),
            ("Why is the tragic hero's pursuit of <strong>Authenticity</strong> always met with such severe societal pushback?", "★ Have you ever had to defend your authenticity against the rigid expectations of your peers?"),
            ("Why is pensive literature so much more effective at triggering deep <strong>Introspection</strong> than social media?", "★ How do you maintain your capacity for deep, long-form reading in an era of rapid digital distractions?"),
            ("Why do great novelists refuse to <strong>Stigmatize</strong> their villains, opting instead to expose their vulnerabilities?", "★ Have you ever found yourself root for a deeply flawed or villainous character in a story, and why?")
        ],
        "lst": "The Literature Audit: Imagine you are a literature professor defending the inclusion of psychological fiction in a university curriculum. Present your case, explaining its impact on empathy using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you could step into the <strong>Narrative identity</strong> of your favorite hero tomorrow, would you do it?",
            "If schools banned all classic literature today, would our capacity for critical thinking decline?",
            "If we completely mapped the human <strong>Subconscious</strong>, would great storytelling lose its mystery?",
            "If you had not read that profound novel last year, would you possess your current level of <strong>Empathy</strong> today?",
            "If they had not utilized universal <strong>Archetype</strong> themes, would their stories still be read today?",
            "If your personal <strong>Resilience</strong> had not been inspired by tragedy, would you struggle with minor setbacks today?",
            "If you had not gained a broader <strong>Perspective</strong> through fiction, would you still hold those rigid biases today?",
            "If you could live with absolute <strong>Authenticity</strong> today, which classic novel's setting would you choose?",
            "If you had not spent hours in quiet <strong>Introspection</strong> over that book, would your goals be different today?",
            "If we did not <strong>Stigmatize</strong> flawed characters, would we understand real-world human behavior better today?"
        ],
        "mistakes": [
            ("I read this book since three hours", "I have been reading this book for three hours", "(Grammar structure: use present perfect continuous with 'for' to denote ongoing duration)"),
            ("This character is same like me", "This character is just like me / This character is the same as me", "(Comparative grammar: use 'just like' or 'the same as' instead of 'same like')"),
            ("We discussed about the novel's theme", "We discussed the novel's theme / had a discussion about the novel's theme", "(Verb transitivity: 'discuss' directly takes the object without 'about')")
        ]
    }
}

# Add aspiration-vs-inspiration files:
# aspiration-vs-inspiration-intermediate.html, aspiration-vs-inspiration-upper-intermediate.html

def refactor_file(filename, spec_key):
    filepath = os.path.join(MM_DIR, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} (not found)")
        return

    spec = BATCH6_THEMES[spec_key]
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Detect Level
    is_b1 = "-intermediate.html" in filename
    level_suffix = " (B1)" if is_b1 else " (B2)"
    level_full = "Intermediate (B1)" if is_b1 else "Upper-Intermediate (B2)"

    if spec_key in ["brain-discipline-dopamine", "power-of-habits", "science-of-sleep", "how-to-love-your-work", "impersonation", "psychology-of-smiles", "mind-great-literature"]:
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
            base_name = spec_key.replace("-", " ").title().replace("Of", "of").replace("Vs", "vs").replace("To", "to")
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
    print("Beginning Mind Matters Batch 6 Refactoring...")
    for spec_key in BATCH6_THEMES.keys():
        if spec_key == "aspiration-vs-inspiration":
            files = ["aspiration-vs-inspiration-intermediate.html", "aspiration-vs-inspiration-upper-intermediate.html"]
        elif spec_key in ["brain-discipline-dopamine", "power-of-habits", "science-of-sleep", "how-to-love-your-work", "impersonation", "psychology-of-smiles", "mind-great-literature"]:
            files = [f"{spec_key}.html"]
        else:
            files = [f"{spec_key}.html"]

        for filename in files:
            refactor_file(filename, spec_key)

    print("Batch 6 completed successfully!")

if __name__ == "__main__":
    main()
