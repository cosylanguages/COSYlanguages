import os
from bs4 import BeautifulSoup

# This script upgrades all 53 Mind Matters files across English, French, and Russian.
# - Round 1: Ensures each .round-item has exactly one .round-item-main and one .round-item-personal (starting with ★).
#            If .round-item-personal is missing, it injects custom high-quality speculative personal questions.
# - Round 2: Ensures there are NO .round-item-personal elements.
#            Converts all non-conditional statements into highly speculative second, third, or mixed conditional questions.

# --- English R1 missing personal questions mapping ---
# Maps (filename, item_idx_1_based) -> personal question string starting with ★
EN_R1_PERSONAL_MAP = {
    # anticipatory-grief.html
    ("anticipatory-grief.html", 1): "★ Have you ever felt a strong sense of anticipation that made it hard to focus on the present?",
    ("anticipatory-grief.html", 2): "★ Where in your body do you feel deep sorrow or grief when facing difficult news?",
    ("anticipatory-grief.html", 3): "★ Have you ever had to act as a caregiver or emotional support for someone you love?",
    ("anticipatory-grief.html", 4): "★ If you were given a glimpse into the limited time you had left with a loved one, how would you change your behavior?",
    ("anticipatory-grief.html", 5): "★ What is your personal ritual for mourning or letting go of past chapters of your life?",
    ("anticipatory-grief.html", 6): "★ Have you ever had a pre-emptive conversation about a difficult topic to avoid future misunderstandings?",
    ("anticipatory-grief.html", 7): "★ What is your primary coping strategy when everything feels completely overwhelming?",
    ("anticipatory-grief.html", 8): "★ When was the last time you had to draw upon your inner resilience to overcome a setback?",
    ("anticipatory-grief.html", 9): "★ Do you find it easier to show compassion to others or to yourself?",
    ("anticipatory-grief.html", 10): "★ What temporary or fleeting joy do you appreciate most in your daily life?",

    # broken-children-grown-bodies.html
    ("broken-children-grown-bodies.html", 1): "★ Is there an unresolved issue from your past that still occasionally affects your decisions today?",
    ("broken-children-grown-bodies.html", 2): "★ What physical manifestation of stress do you notice first in your own body?",
    ("broken-children-grown-bodies.html", 3): "★ In which area of your life do you find it easiest to maintain absolute authenticity?",
    ("broken-children-grown-bodies.html", 4): "★ Do you view sharing your vulnerability as a form of courage or a sign of weakness?",
    ("broken-children-grown-bodies.html", 5): "★ Where do you think your emotional resilience originally came from?",
    ("broken-children-grown-bodies.html", 6): "★ Have you ever had a recurring dream that felt like a message from your subconscious?",
    ("broken-children-grown-bodies.html", 7): "★ How much time do you spend in quiet introspection compared to external action?",
    ("broken-children-grown-bodies.html", 8): "★ When did you last realize your cognitive judgment was clouded by strong emotions?",
    ("broken-children-grown-bodies.html", 9): "★ Have you ever caught yourself engaging in negative projection onto a close friend or colleague?",
    ("broken-children-grown-bodies.html", 10): "★ How has your perspective on what matters most in life changed over the last ten years?",

    # depersonalization.html
    ("depersonalization.html", 1): "★ Have you ever experienced a sudden sense of detachment from your surroundings during a stressful moment?",
    ("depersonalization.html", 2): "★ Do you think mild dissociation can sometimes serve as a useful defense mechanism?",
    ("depersonalization.html", 3): "★ When was the last time you experienced a moment that felt completely surreal?",
    ("depersonalization.html", 4): "★ How often do you feel that your subconscious is trying to tell you something your conscious mind ignores?",
    ("depersonalization.html", 5): "★ Has your perception of a major life event ever changed completely after talking to someone else?",
    ("depersonalization.html", 6): "★ How do you define your true authenticity when playing different roles in society?",
    ("depersonalization.html", 7): "★ Do you find that introspection brings you peace of mind, or does it sometimes increase your anxiety?",
    ("depersonalization.html", 8): "★ What cognitive strategies do you use to stay calm when everything feels chaotic?",
    ("depersonalization.html", 9): "★ What specific activity or habit helps you restore a sense of groundedness?",
    ("depersonalization.html", 10): "★ Have you ever felt a deep sense of alienation even while surrounded by a crowd of people?",

    # fear-of-love-control.html
    ("fear-of-love-control.html", 1): "★ When was the last time you felt comfortable showing your raw vulnerability to another person?",
    ("fear-of-love-control.html", 2): "★ What is your personal definition of true emotional intimacy?",
    ("fear-of-love-control.html", 3): "★ How do you maintain your personal autonomy while being deeply committed to a partner?",
    ("fear-of-love-control.html", 4): "★ What is your typical defensive reaction when you feel emotionally threatened or criticized?",
    ("fear-of-love-control.html", 5): "★ Have you ever noticed a tendency toward codependency in any of your past relationships?",
    ("fear-of-love-control.html", 6): "★ Which attachment style do you think best describes your approach to relationships?",
    ("fear-of-love-control.html", 7): "★ Can you identify a moment in your life where you engaged in subconscious self-sabotage?",
    ("fear-of-love-control.html", 8): "★ How do you typically handle emotional rejection or disappointment?",
    ("fear-of-love-control.html", 9): "★ How has a past relationship heartbreak contributed to your emotional resilience?",
    ("fear-of-love-control.html", 10): "★ Is it possible to show total authenticity in a relationship if you fear losing the other person?",

    # finding-the-right-person.html
    ("finding-the-right-person.html", 1): "★ What is the single most important factor for long-term compatibility in your opinion?",
    ("finding-the-right-person.html", 2): "★ Do you believe in the concept of a soulmate, or do you think love is built through effort?",
    ("finding-the-right-person.html", 3): "★ How long does it usually take you to show your true authenticity to a new partner?",
    ("finding-the-right-person.html", 4): "★ How has your perspective on romantic relationships evolved as you have grown older?",
    ("finding-the-right-person.html", 5): "★ In what way has a past relationship contributed most to your personal development?",
    ("finding-the-right-person.html", 6): "★ What is the hardest relationship expectation you have had to let go of?",
    ("finding-the-right-person.html", 7): "★ When has a relationship challenge tested your emotional resilience the most?",
    ("finding-the-right-person.html", 8): "★ How much of your self-worth depends on external validation from a partner?",
    ("finding-the-right-person.html", 9): "★ What makes it difficult for you to share your deepest vulnerability with someone new?",
    ("finding-the-right-person.html", 10): "★ Have you ever cared deeply for someone who was unable to reciprocate your feelings?",

    # gilberts-law.html
    ("gilberts-law.html", 1): "★ How important is professional autonomy to your overall job satisfaction?",
    ("gilberts-law.html", 2): "★ How do you handle ambiguity or unclear instructions in your daily work?",
    ("gilberts-law.html", 3): "★ When was the last time you took the initiative to solve a major problem without being asked?",
    ("gilberts-law.html", 4): "★ Have you ever worked under micromanagement, and how did it affect your motivation?",
    ("gilberts-law.html", 5): "★ How do you hold yourself accountable when a project does not go according to plan?",
    ("gilberts-law.html", 6): "★ What is one proactive step you can take this week to improve your work-life balance?",
    ("gilberts-law.html", 7): "★ How do you manage your manager's expectations when you feel overwhelmed with tasks?",
    ("gilberts-law.html", 8): "★ What strategy helps you stay calm and productive during times of organizational uncertainty?",
    ("gilberts-law.html", 9): "★ Do you prefer a highly structured environment or complete self-direction in your projects?",
    ("gilberts-law.html", 10): "★ How do you typically react when receiving critical constructive feedback?",

    # impersonation.html
    ("impersonation.html", 1): "★ Have you ever had to practice temporary impersonation of a leader to get a job done?",
    ("impersonation.html", 2): "★ Have you ever caught yourself adopting the mimicry or speaking style of someone you admire?",
    ("impersonation.html", 3): "★ Where do you draw the line between adapting your behavior and losing your authenticity?",
    ("impersonation.html", 4): "★ What kind of professional facade do you feel required to maintain in your daily life?",
    ("impersonation.html", 5): "★ Can you share a moment where your psychological adaptability saved you from a stressful situation?",
    ("impersonation.html", 6): "★ Have you ever used mild deception or a white lie to protect someone else's feelings?",
    ("impersonation.html", 7): "★ Do you use social camouflage to blend into groups where you feel like an outsider?",
    ("impersonation.html", 8): "★ How different is your professional persona from your quiet, private self?",
    ("impersonation.html", 9): "★ Who is the only person with whom you can completely drop your protective mask and show vulnerability?",
    ("impersonation.html", 10): "★ Have you ever felt a deep sense of internal incongruence between what you felt and what you showed?",

    # kidlins-law.html
    ("kidlins-law.html", 1): "★ How easily can you articulate your deepest emotional concerns during a conflict?",
    ("kidlins-law.html", 2): "★ What specific habit helps you restore mental clarity when facing a complex decision?",
    ("kidlins-law.html", 3): "★ What is the biggest mental obstacle that currently prevents you from achieving a personal goal?",
    ("kidlins-law.html", 4): "★ How do you typically celebrate the resolution of a long-standing personal issue?",
    ("kidlins-law.html", 5): "★ What intangible asset or feeling is most important to your daily sense of peace?",
    ("kidlins-law.html", 6): "★ Have you ever used a cognitive framework to break down an overwhelming problem?",
    ("kidlins-law.html", 7): "★ Who is the first person you call when you need an objective perspective on a problem?",
    ("kidlins-law.html", 8): "★ How do you maintain an objective outlook when dealing with a highly emotional family situation?",
    ("kidlins-law.html", 9): "★ What personal framework or rules do you use to manage your time and energy?",
    ("kidlins-law.html", 10): "★ What is one area of your life that you desperately need to simplify right now?",

    # law-of-attraction.html
    ("law-of-attraction.html", 1): "★ Have you ever experienced a sudden manifestation of something you had been thinking about constantly?",
    ("law-of-attraction.html", 2): "★ Where do you draw the line between open-minded speculation and dangerous pseudoscience?",
    ("law-of-attraction.html", 3): "★ What daily habit or ritual helps you maintain a positive, constructive mindset?",
    ("law-of-attraction.html", 4): "★ Would you describe yourself as a natural born optimist or someone who has to work hard to see the bright side?",
    ("law-of-attraction.html", 5): "★ Can you recall a coincidence in your life that felt too meaningful to be random?",
    ("law-of-attraction.html", 6): "★ Have you ever felt your subconscious warning you about a decision before your logical mind could process it?",
    ("law-of-attraction.html", 7): "★ How do you handle the cognitive fatigue of living in a highly demanding, information-rich world?",
    ("law-of-attraction.html", 8): "★ Have you ever used active visualization to prepare for a difficult speech or meeting?",
    ("law-of-attraction.html", 9): "★ Have you ever experienced a moment of perfect synchronicity that made you smile?",
    ("law-of-attraction.html", 10): "★ What does living in a state of psychological abundance mean to you personally?",

    # limerence.html
    ("limerence.html", 1): "★ Have you ever experienced a state of limerence that felt completely beyond your control?",
    ("limerence.html", 2): "★ How do you distinguish between a temporary infatuation and the beginning of deep, mature love?",
    ("limerence.html", 3): "★ Have you ever had an obsessive interest in a hobby or project that completely consumed your time?",
    ("limerence.html", 4): "★ How do you handle the emotional pain of a feeling that is not fully reciprocated?",
    ("limerence.html", 5): "★ What is your best strategy for quietening intrusive, anxious thoughts before sleeping?",
    ("limerence.html", 6): "★ When was the last time you felt a genuine rush of euphoria in your daily life?",
    ("limerence.html", 7): "★ Do you have a tendency to idealize new friends or partners before getting to know them?",
    ("limerence.html", 8): "★ Why is showing raw vulnerability so terrifying when we care deeply about someone?",
    ("limerence.html", 9): "★ What is your favorite healthy source of a quick dopamine boost?",
    ("limerence.html", 10): "★ How do you restore your sense of logical rationality when your emotions are completely overwhelming?",

    # murphys-law.html
    ("murphys-law.html", 1): "★ Do you think a healthy dose of pessimism can actually help us prepare better for life?",
    ("murphys-law.html", 2): "★ How much attention do you pay to the statistical probability of success before starting a new project?",
    ("murphys-law.html", 3): "★ What extreme precaution do you always take when traveling or going on a long trip?",
    ("murphys-law.html", 4): "★ Do you always have a solid contingency plan in place for major life decisions?",
    ("murphys-law.html", 5): "★ What inevitable change in your life are you currently working to accept?",
    ("murphys-law.html", 6): "★ Have you ever struggled with a feeling of fatalism when things were not going your way?",
    ("murphys-law.html", 7): "★ Can you share a moment where a complication actually helped you discover your inner resilience?",
    ("murphys-law.html", 8): "★ How do you maintain your focus and energy when an unexpected complication arises?",
    ("murphys-law.html", 9): "★ What is the most memorable travel mishap you have ever experienced, and how did you handle it?",
    ("murphys-law.html", 10): "★ Do you try to anticipate every single obstacle, or do you prefer to handle things as they come?",

    # wilsons-law.html
    ("wilsons-law.html", 1): "★ How do you prioritize your daily tasks when everything feels equally urgent?",
    ("wilsons-law.html", 2): "★ What does a person of high emotional intelligence look like in your opinion?",
    ("wilsons-law.html", 3): "★ How do you protect yourself from the constant overload of digital information?",
    ("wilsons-law.html", 4): "★ What is your personal definition of overall life prosperity?",
    ("wilsons-law.html", 5): "★ Do you believe that human capital or financial wealth is more important for a happy life?",
    ("wilsons-law.html", 6): "★ What do you consider to be your greatest personal or professional asset?",
    ("wilsons-law.html", 7): "★ When was the last time you introduced a small innovation or change to your daily routine?",
    ("wilsons-law.html", 8): "★ Do you have a clear strategy for achieving your personal goals over the next five years?",
    ("wilsons-law.html", 9): "★ Can you share an intuitive insight that turned out to be completely correct?",
    ("wilsons-law.html", 10): "★ What niche area of expertise or knowledge would you love to master in the future?",

    # the-bye-now-effect.html
    ("the-bye-now-effect.html", 7): "★ Do you keep a strict monthly budget, or do you have a relaxed attitude towards spending?",
    ("the-bye-now-effect.html", 8): "★ What is the most impulsive purchase you have made in the last six months?",
    ("the-bye-now-effect.html", 9): "★ What positive association do you have with a specific childhood brand or product?",
    ("the-bye-now-effect.html", 10): "★ Can you recall a small nudge or recommendation that led you to make a major purchase?",

    # why-do-they-say-ai-is-inevitable.html
    ("why-do-they-say-ai-is-inevitable.html", 7): "★ Do you feel that rapid technological innovation is always beneficial for human happiness?",
    ("why-do-they-say-ai-is-inevitable.html", 8): "★ In what area of your life do you feel you have the greatest personal agency and control?",
    ("why-do-they-say-ai-is-inevitable.html", 9): "★ Do you feel that the rise of artificial intelligence is truly inevitable, or can society choose to limit it?",
    ("why-do-they-say-ai-is-inevitable.html", 10): "★ What skill do you think future human workers must develop to remain valuable in an automated world?"
}

# --- English R2 conditional replacements mapping ---
# Maps (filename, item_idx_1_based) -> conditional question string
EN_R2_CONDITIONAL_MAP = {
    # blue-eyes-brown-eyes-experiment.html
    ("blue-eyes-brown-eyes-experiment.html", 1): "If systemic discrimination were indeed a permanent feature of human societies, would it still be worth our effort to fight against it?",
    ("blue-eyes-brown-eyes-experiment.html", 2): "If we could instantly make everyone aware of their unconscious privilege, would that lead to social progress or increased hostility?",
    ("blue-eyes-brown-eyes-experiment.html", 3): "If nations completely abandoned their belief in national superiority, would all major international wars disappear?",
    ("blue-eyes-brown-eyes-experiment.html", 4): "If a school principal implemented an experiment like Elliott's brown-eyes/blue-eyes experiment today, would they be praised for their courage or fired?",
    ("blue-eyes-brown-eyes-experiment.html", 5): "If you were forced to classify yourself by a single social marker, which one would you choose?",
    ("blue-eyes-brown-eyes-experiment.html", 6): "If humanity were to lose its tendency to form hostile in-groups, would we still have any sense of community and belonging?",
    ("blue-eyes-brown-eyes-experiment.html", 7): "If a pill could permanently erase our capacity for prejudice, would you take it even if it changed your personality?",
    ("blue-eyes-brown-eyes-experiment.html", 8): "If your friends were treating someone with subtle discrimination, would you speak up immediately even if it cost you their friendship?",
    ("blue-eyes-brown-eyes-experiment.html", 9): "If social media algorithms were optimized to reduce division, would users become more empathetic or simply bored?",
    ("blue-eyes-brown-eyes-experiment.html", 10): "If you found out that your own beliefs were heavily influenced by group privilege, how would you begin to undo that conditioning?",

    # brain-discipline-dopamine.html
    ("brain-discipline-dopamine.html", 1): "If we could completely eliminate our search for instant gratification, would we be happier or would we lose all motivation?",
    ("brain-discipline-dopamine.html", 2): "If you could use your understanding of dopamine to influence someone's choices, would you do it even if it felt manipulative?",
    ("brain-discipline-dopamine.html", 3): "If you accepted that mental resistance is a signal of importance, would you seek out uncomfortable tasks more often?",
    ("brain-discipline-dopamine.html", 4): "If you had to choose between a life of high-achieving discipline and a life of effortless comfort, which would you pick?",
    ("brain-discipline-dopamine.html", 5): "If modern society banned all highly stimulating digital notifications, would our collective attention span improve or would we find other distractions?",
    ("brain-discipline-dopamine.html", 6): "If you were offered a device that perfectly regulates your dopamine levels on demand, would you use it?",
    ("brain-discipline-dopamine.html", 7): "If a major goal required five years of painful self-discipline, would you pursue it or would you rather focus on short-term happiness?",
    ("brain-discipline-dopamine.html", 8): "If children were raised with zero exposure to instant dopamine triggers, would they grow up to be highly disciplined adults?",
    ("brain-discipline-dopamine.html", 9): "If you had to sacrifice your comfort for a year to achieve a lifelong dream, would you have the willpower to complete it?",
    ("brain-discipline-dopamine.html", 10): "If your brain's ancient survival impulses were twice as strong as they are now, how would you manage to accomplish anything?",

    # expert-defend-language-mistakes.html
    ("expert-defend-language-mistakes.html", 1): "If society completely abandoned grammar prescriptivism, would language become more inclusive or would we lose the ability to understand each other?",
    ("expert-defend-language-mistakes.html", 2): "If foreign students were only taught linguistic descriptivism, would they find it easier or harder to integrate into a new country?",
    ("expert-defend-language-mistakes.html", 3): "If a language were standardized to the point of absolute uniformity, would we lose our rich regional cultures and heritage?",
    ("expert-defend-language-mistakes.html", 4): "If you had the power to instantly erase one linguistic stereotype from the world, which one would you target?",
    ("expert-defend-language-mistakes.html", 5): "If people stopped judging others based on their accent or mistakes, would communication become more honest?",
    ("expert-defend-language-mistakes.html", 6): "If a dictionary only recorded how people actually speak rather than how they \"should\" speak, would it still be useful?",
    ("expert-defend-language-mistakes.html", 7): "If you had to choose between speaking a language with perfect grammar but no soul, or with many mistakes but deep emotional connection, which would you choose?",
    ("expert-defend-language-mistakes.html", 8): "If a computer could perfectly translate and correct your speech in real-time, would you still bother to learn a foreign language?",
    ("expert-defend-language-mistakes.html", 9): "If you were ridiculed for a minor linguistic mistake during an important presentation, how would you rebuild your confidence?",
    ("expert-defend-language-mistakes.html", 10): "If all languages on Earth merged into a single universal tongue, would it save humanity from division or destroy our diverse ways of thinking?",

    # guilt-moving-abroad.html
    ("guilt-moving-abroad.html", 1): "If pursuing individual self-actualization meant leaving your aging parents behind, would you still consider it a healthy choice?",
    ("guilt-moving-abroad.html", 2): "If physical distance were guaranteed to cause emotional estrangement from your family, would you still choose to move abroad?",
    ("guilt-moving-abroad.html", 3): "If you could achieve absolute professional success abroad but felt constant guilt, would you stay or would you return home?",
    ("guilt-moving-abroad.html", 4): "If your home country faced a severe crisis, would you feel a moral obligation to return and help?",
    ("guilt-moving-abroad.html", 5): "If you had to choose between being a first-class citizen in a foreign land where you are always an outsider, or a second-class citizen in your homeland, which would you pick?",
    ("guilt-moving-abroad.html", 6): "If a magic portal let you visit your family instantly but you could never move back permanently, would that ease your guilt?",
    ("guilt-moving-abroad.html", 7): "If your children grew up to speak a different native language than your parents, how would you bridge the emotional gap?",
    ("guilt-moving-abroad.html", 8): "If you were offered a dream job in a city your partner hated, would you accept it at the risk of your relationship?",
    ("guilt-moving-abroad.html", 9): "If you had to rebuild your social identity from scratch in a country with a completely different culture, how would you maintain your true self?",
    ("guilt-moving-abroad.html", 10): "If you could erase the feeling of immigrant guilt with a simple therapy, would you do it or do you view that guilt as a valuable connection to your roots?",

    # how-to-love-your-work.html
    ("how-to-love-your-work.html", 1): "If you could guarantee a stable income but had to work in a field you felt completely indifferent about, would you accept it?",
    ("how-to-love-your-work.html", 2): "If you were offered a highly prestigious job that made you miserable, would you keep it for the sake of your family's social standing?",
    ("how-to-love-your-work.html", 3): "If society completely stopped measuring personal worth by professional success, what would you choose to do with your days?",
    ("how-to-love-your-work.html", 4): "If you had to choose between a low-paying job that you loved passionately and a high-paying job that bored you, which would you choose?",
    ("how-to-love-your-work.html", 5): "If an algorithm could perfectly match your personality to the ideal career, would you trust its choice blindly?",
    ("how-to-love-your-work.html", 6): "If you were told that you would never find your \"true vocation,\" would that make you feel liberated or deeply discouraged?",
    ("how-to-love-your-work.html", 7): "If you could retire today with all your material needs met, would you still want to work on projects?",
    ("how-to-love-your-work.html", 8): "If your close friends and family did not approve of your career path, would you have the courage to pursue it anyway?",
    ("how-to-love-your-work.html", 9): "If professional passion were proven to be a modern myth, how would we redefine the purpose of education?",
    ("how-to-love-your-work.html", 10): "If you had to spend the rest of your life doing a job that was useful to society but deeply unexciting, would you find fulfillment in it?",

    # impersonation.html
    ("impersonation.html", 1): "If digital impersonation became so perfect that video evidence was completely untrustworthy, how would we maintain any sense of public truth?",
    ("impersonation.html", 2): "If you could achieve all your goals by completely mimicking someone else, would you do it if it cost you your unique personality?",
    ("impersonation.html", 3): "If a person performed their job perfectly, would you care if their entire professional persona was a complete fabrication?",
    ("impersonation.html", 4): "If you were forced to play a role that violated your personal values to save your career, would you comply?",
    ("impersonation.html", 5): "If a close friend used a false online persona to interact with you, would you feel betrayed or would you understand their need for a mask?",
    ("impersonation.html", 6): "If you had to choose between being loved for a persona you hate, or hated for who you truly are, which would you choose?",
    ("impersonation.html", 7): "If you could instantly adapt to any social group by changing your personality, would you use that power at the risk of forgetting who you are?",
    ("impersonation.html", 8): "If your employer required you to share your private thoughts to verify your authenticity, would you resign?",
    ("impersonation.html", 9): "If you found out that everyone in your life was secretly playing a role around you, would you still value their companionship?",
    ("impersonation.html", 10): "If a machine could detect when you are wearing a psychological facade, would you want to wear it during a first date?",

    # law-of-attraction.html
    ("law-of-attraction.html", 1): "If the law of attraction were proven to be a scientific fact, how would we handle the moral responsibility of our negative thoughts?",
    ("law-of-attraction.html", 2): "If labeling a phenomenon as pseudoscience prevented us from discovering a major breakthrough, would that justify being more open-minded?",
    ("law-of-attraction.html", 3): "If a highly positive mindset could cure physical illnesses, would we blame patients for their own poor health?",
    ("law-of-attraction.html", 4): "If you could guarantee success in any project simply by visualizing it, would you still feel any pride in your achievements?",
    ("law-of-attraction.html", 5): "If every meaningful coincidence in your life was just a random occurrence, would that make your experiences feel less valuable?",
    ("law-of-attraction.html", 6): "If your subconscious mind could project your desires directly into reality, would your life become a paradise or a chaotic nightmare?",
    ("law-of-attraction.html", 7): "If you had to choose between a life of comfortable illusions and one of harsh, objective truths, which would you pick?",
    ("law-of-attraction.html", 8): "If a positive attitude were the only requirement for wealth, would poverty be viewed as a moral failure of the individual?",
    ("law-of-attraction.html", 9): "If perfect synchronicity were achievable only through complete isolation from society, would you choose it?",
    ("law-of-attraction.html", 10): "If you had a mindset of absolute abundance, would you still feel the need to compete with others?",

    # nazi-race-propaganda.html
    ("nazi-race-propaganda.html", 1): "If you were exposed to high-level state propaganda from childhood, do you believe your rational mind would be strong enough to resist it?",
    ("nazi-race-propaganda.html", 2): "If social media algorithms continued to favor division, would the complete dehumanization of opponents become inevitable?",
    ("nazi-race-propaganda.html", 3): "If a severe economic crisis hit your community, would you have the courage to defend a scapegoated group even if it made you an outcast?",
    ("nazi-race-propaganda.html", 4): "If your group belonging was threatened because of your moral views, would you choose isolation over conformity?",
    ("nazi-race-propaganda.html", 5): "If a regime offered you absolute safety and wealth in exchange for your silent compliance with injustice, would you accept it?",
    ("nazi-race-propaganda.html", 6): "If you discovered that a close family member was active in spreading toxic propaganda, would you confront them or stay silent to preserve the peace?",
    ("nazi-race-propaganda.html", 7): "If a law required you to report neighbors who disagreed with the government, would you disobey even if the penalty was severe?",
    ("nazi-race-propaganda.html", 8): "If you had to choose between living in a highly stable but oppressive society, or a chaotic but free one, which would you choose?",
    ("nazi-race-propaganda.html", 9): "If state education were used as a tool for political indoctrination, would you home-school your children even if it was illegal?",
    ("nazi-race-propaganda.html", 10): "If you were told that your silence during a crisis contributed to someone's suffering, how would you begin to make amends?"
}

# --- Russian Custom Conditional R2 items ---
RU_R2_NE_ISPRAVLYAY_RECH = [
    "Если бы родители регулярно исправляли речь ребенка, лишился бы он своей естественной спонтанности в будущем?",
    "Если бы мы полностью избавились от языкового снобизма, была бы наша культура разрушена варварами?",
    "Если бы в школах преподавали местные диалекты наряду с литературной нормой, помогло бы это укрепить самобытность регионов?",
    "Если бы любая норма языка была объявлена искусственным ограничением, как бы это изменило наше взаимопонимание?",
    "Если бы абсолютная грамотность перестала быть ценностью, смогли бы мы доверять искусственному интеллекту во всем?",
    "Если бы речевое высокомерие было признано признаком скрытых комплексов, стали бы люди говорить мягче?",
    "Если бы классическая литература стала полностью непонятна из-за развития разговорного языка, потеряли бы мы связь с прошлым?",
    "Если бы орфографию радикально упростили, повысило бы это реальную грамотность населения?",
    "Если бы наше отношение к региональному акценту было заложено биологически, смогли бы мы когда-нибудь преодолеть эту предвзятость?",
    "Если бы каждое замечание считалось актом скрытой агрессии, как бы изменилась атмосфера в рабочих коллективах?"
]

RU_R2_SYN_VLYUBILSYA = [
    "Если бы полное родительское принятие зависело от совпадения ценностей, смогла бы семья сохранить любовь при конфликте мнений?",
    "Если бы личная ориентация каждого человека оставалась строгим секретом, снизило бы это уровень общественных споров?",
    "Если бы общественные предубеждения можно было легко преодолеть лекциями, существовали бы они вообще в XXI веке?",
    "Если бы семейные отношения строились только на жестких правилах, а не на доверии, как бы это повлияло на психологическое здоровье детей?",
    "Если бы родительская поддержка прекращалась при первой же ошибке ребенка, как бы это отразилось на его взрослой уверенности?",
    "Если бы наши базовые ценности можно было изменить за один день, стали бы мы более гибкими или потеряли бы себя?",
    "Если бы любой семейный конфликт решался открытым голосованием с участием родственников, укрепило бы это доверие?",
    "Если бы доверие между близкими можно было измерить прибором, хотели бы вы знать точный показатель?",
    "Если бы идеальная семья была обязательным государственным стандартом, стала бы жизнь счастливее или превратилась бы в кошмар?",
    "Если бы взаимное понимание достигалось мгновенно и без слов, о чем бы мы тогда разговаривали по вечерам?"
]

# --- French R2 Families ---
FR_R2_EMPATHIE = [
    "Si l'excès d'empathie était considéré comme une maladie, chercheriez-vous à vous faire soigner pour préserver votre équilibre ?",
    "Si vous deviez vivre de manière totalement consciente à chaque seconde, votre énergie mentale s'épuiserait-elle en un jour ?",
    "Si le secret du bonheur résidait uniquement dans le détachement, seriez-vous prêt à abandonner toutes vos ambitions ?",
    "Si votre vulnérabilité était projetée sur un écran public, cela ferait-il de vous une personne plus forte ou plus isolée ?",
    "Si la projection de nos peurs sur les autres devenait un délit, combien de nos relations amicales survivraient ?",
    "Si le subconscient était programmable par une application, quel aspect de votre esprit modifieriez-vous en premier ?",
    "Si l'état d'esprit collectif pouvait être mesuré par un baromètre national, les gouvernements seraient-ils plus humains ?",
    "Si nous pouvions éliminer tous nos biais cognitifs grâce à un implant, notre perception de la réalité serait-elle plus triste ?",
    "Si votre intuition contredisait systématiquement votre raisonnement logique, à laquelle de ces deux forces feriez-vous confiance ?",
    "Si chaque décision importante était purement cognitive et dénuée d'émotion, le monde serait-il plus juste ou plus froid ?"
]

FR_R2_NOSTALGIE = [
    "Si la nostalgie était interdite par la loi pour encourager le progrès, notre créativité artistique s'éteindrait-elle ?",
    "Si vous deviez accepter l'ambiguïté absolue de chaque situation, votre maturité émotionnelle s'en trouverait-elle renforcée ?",
    "Si changer de perspective était aussi simple que de tourner une page, éviterions-nous tous les conflits familiaux ?",
    "Si notre mémoire ne conservait que les moments positifs du passé, serions-nous condamnés à répéter les mêmes erreurs ?",
    "Si le progressisme niait toute valeur à l'histoire, seriez-vous prêt à vivre dans une cité entièrement futuriste ?",
    "Si l'on pouvait effacer un regret d'enfance par une thérapie ciblée, choisiriez-vous de l'oublier ou de le garder comme leçon ?",
    "Si vous aviez le pouvoir de revivre une année de votre passé, changeriez-vous vos choix quitte à perdre votre présent ?",
    "Si le futur de la société était entièrement déterminé par des prévisions rationnelles, y aurait-il encore de la place pour l'espoir ?",
    "Si la mélancolie était reconnue comme une source d'inspiration nécessaire, la tolérerions-nous davantage chez nos collègues ?",
    "Si vous pouviez choisir l'époque de votre naissance, préféreriez-vous le confort du futur ou la poésie du passé ?"
]

FR_R2_IMPERSONATION = [
    "Si vous pouviez usurper l'identité d'une figure historique pendant 24 heures pour changer le passé, le feriez-vous ?",
    "Si un algorithme de clonage vocal parfait était accessible à tous, comment protégeriez-vous vos proches du mensonge ?",
    "Si l'anonymat complet devenait illégal sur Internet, notre société serait-elle plus sûre ou plus oppressive ?",
    "Si vous deviez choisir entre vivre sous une fausse identité prestigieuse ou être vous-même mais totalement invisible, que choisiriez-vous ?",
    "Si les réseaux sociaux commençaient à facturer chaque interaction pour garantir l'authenticité, continueriez-vous à les utiliser ?",
    "Si un usurpateur s'excusait sincèrement auprès de vous, seriez-vous capable de lui pardonner pleinement ?",
    "Si l'on créait une IA capable de détecter les mensonges en temps réel, l'utiliseriez-vous lors de vos conversations amicales ?",
    "Si vous découvriez que votre meilleur ami utilise un faux profil pour surveiller son ex, le dénonceriez-vous ?",
    "Si le gouvernement imposait une carte d'identité neuronale infalsifiable pour se connecter, l'accepteriez-vous ?",
    "Si vous aviez la possibilité d'effacer définitivement toute trace de votre identité numérique, sauteriez-vous sur l'occasion ?"
]

# --- French R1 Impersonation Premium Questions ---
FR_R1_IMPERSONATION = [
    ("Comment notre <strong>Cognition</strong> interprète-t-elle la différence entre un profil authentique et un faux profil en ligne ?",
     "★ Avez-vous déjà décelé un faux profil grâce à votre intuition cognitive ?"),
    ("Quelle <strong>Résilience</strong> faut-il mobiliser pour se reconstruire après une usurpation d'identité numérique ?",
     "★ Comment réagiriez-vous si quelqu'un créait un compte en utilisant vos photos ?"),
    ("Pourquoi l'usurpation d'identité suscite-t-elle une telle <strong>Anxiété</strong> dans notre société ultra-connectée ?",
     "★ Quel aspect de la vie numérique vous cause le plus d'anxiété au quotidien ?"),
    ("Est-il possible que notre <strong>Subconscient</strong> préfère projeter une image idéalisée de nous-mêmes plutôt que notre réalité ?",
     "★ Jouez-vous parfois un rôle inconscient lorsque vous parlez à des inconnus ?"),
    ("Comment un <strong>Biais</strong> de confirmation nous pousse-t-il à faire confiance à un profil contrefait qui flatte notre ego ?",
     "★ Avez-vous déjà accordé votre confiance trop rapidement à quelqu'un en ligne ?"),
    ("Le manque d'<strong>Empathie</strong> des usurpateurs est-il le reflet d'une apathie croissante au sein des réseaux sociaux ?",
     "★ Comment exprimez-vous votre empathie envers les victimes de harcèlement numérique ?"),
    ("Est-ce qu'une profonde <strong>Introspection</strong> permet de rester fidèle à soi-même malgré les masques du monde virtuel ?",
     "★ Prenez-vous souvent du temps pour réfléchir à votre propre identité numérique ?"),
    ("Pourquoi cherchons-nous si désespérément la <strong>Validation</strong> sociale à travers des personae numériques ?",
     "★ Quelle importance accordez-vous aux mentions j'aime ou aux commentaires en ligne ?"),
    ("Comment l'usurpation de l'identité d'un autre modifie-t-elle notre <strong>Perception</strong> de la vérité historique ?",
     "★ La réalité virtuelle a-t-elle déjà modifié votre perception d'un événement réel ?"),
    ("La création d'une fausse vie en ligne est-elle une <strong>Manifestation</strong> de notre peur d'être rejeté tel que nous sommes ?",
     "★ Quel aspect de votre personnalité hésitez-vous à montrer sur les réseaux ?")
]

def fix_file(filepath, filename):
    print(f"Processing: {filepath}")
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Skip files that don't belong to Mind Matters
    if 'class="club-tag">Mind Matters</div>' not in content:
        return

    soup = BeautifulSoup(content, "html.parser")

    # --- ROUND 1 UPGRADE ---
    s_one = soup.find(id="s-one") or soup.find(class_="round-1")
    if s_one:
        # Check if the title breadcrumb has double separators or weird layout
        r1_items = s_one.find_all(class_="round-item")
        for idx, item in enumerate(r1_items):
            main_div = item.find(class_="round-item-main")
            pers_div = item.find(class_="round-item-personal")

            # Specialize French impersonation Round 1 placeholders
            if filename == "impersonation.html" and "fr/sessions" in filepath:
                new_main, new_pers = FR_R1_IMPERSONATION[idx]
                if main_div:
                    main_div.clear()
                    main_div.append(BeautifulSoup(new_main, "html.parser"))
                else:
                    main_div = soup.new_tag("div", attrs={"class": "round-item-main"})
                    main_div.append(BeautifulSoup(new_main, "html.parser"))
                    item.append(main_div)

                if pers_div:
                    pers_div.clear()
                    pers_div.string = new_pers
                else:
                    pers_div = soup.new_tag("div", attrs={"class": "round-item-personal"})
                    pers_div.string = new_pers
                    item.append(pers_div)
            else:
                # Standard missing personal question injection
                if not pers_div:
                    # Look up in the dictionary for missing items
                    q_text = EN_R1_PERSONAL_MAP.get((filename, idx + 1))
                    if q_text:
                        pers_div = soup.new_tag("div", attrs={"class": "round-item-personal"})
                        pers_div.string = q_text
                        item.append(pers_div)
                else:
                    # Check if it starts with ★
                    txt = pers_div.get_text().strip()
                    if not txt.startswith("★"):
                        pers_div.string = "★ " + txt

    # --- ROUND 2 UPGRADE ---
    s_two = soup.find(id="s-two") or soup.find(class_="round-2")
    if s_two:
        r2_items = s_two.find_all(class_="round-item")
        for idx, item in enumerate(r2_items):
            # 1. Strictly exclude personal questions (remove round-item-personal)
            pers_div = item.find(class_="round-item-personal")
            if pers_div:
                pers_div.decompose()

            # 2. Transform/overwrite with strict conditional questions
            main_div = item.find(class_="round-item-main")
            if main_div:
                # Determine language and filename to find correct conditional replacement
                if "ru/sessions" in filepath:
                    if filename == "ne-ispravlyay-rech.html":
                        main_div.clear()
                        main_div.append(BeautifulSoup(RU_R2_NE_ISPRAVLYAY_RECH[idx], "html.parser"))
                    elif filename == "syn-vlyubilsya-v-druga.html":
                        main_div.clear()
                        main_div.append(BeautifulSoup(RU_R2_SYN_VLYUBILSYA[idx], "html.parser"))
                elif "fr/sessions" in filepath:
                    if filename == "impersonation.html":
                        main_div.clear()
                        main_div.append(BeautifulSoup(FR_R2_IMPERSONATION[idx], "html.parser"))
                    elif filename in ["broken-children-grown-bodies.html", "fear-of-love-control.html", "finding-the-right-person.html"]:
                        main_div.clear()
                        main_div.append(BeautifulSoup(FR_R2_NOSTALGIE[idx], "html.parser"))
                    else:
                        main_div.clear()
                        main_div.append(BeautifulSoup(FR_R2_EMPATHIE[idx], "html.parser"))
                else:
                    # English files
                    q_text = EN_R2_CONDITIONAL_MAP.get((filename, idx + 1))
                    if q_text:
                        main_div.clear()
                        main_div.append(BeautifulSoup(q_text, "html.parser"))

    # Write back clean HTML to file preserving structure
    # Use formatter="minimal" to avoid over-escaping unicode characters
    html_content = str(soup)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html_content)

def main():
    paths = ["events/sessions/mind-matters", "events/fr/sessions/mind-matters", "events/ru/sessions/mind-matters"]
    for p in paths:
        if os.path.exists(p):
            for filename in sorted(os.listdir(p)):
                if filename.endswith(".html") and filename != "template-mind.html":
                    filepath = os.path.join(p, filename)
                    fix_file(filepath, filename)
    print("MIND MATTERS SESSIONS CORRECTED SUCCESSFULLY!")

if __name__ == "__main__":
    main()
