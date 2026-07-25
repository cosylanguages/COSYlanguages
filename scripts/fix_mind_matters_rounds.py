import os
from bs4 import BeautifulSoup

DATA = {
    "science-of-sleep.html": {
        "r1": [
            ("How does our internal <strong>Circadian rhythm</strong> dictate why the brain needs to \"shut down\" every night?", "★ How do you feel if you get less than 6 hours of sleep?"),
            ("What is the most common \"bad habit\" that triggers chronic <strong>Insomnia</strong> and ruins sleep quality?", "★ Do you use your phone in bed?"),
            ("How does a lack of <strong>REM sleep</strong> affect your daily emotional stability?", "★ Are you more irritable or stressed when you are tired?"),
            ("How does practicing poor <strong>Sleep hygiene</strong> disrupt vital sleep phases like REM sleep?", "★ Do you often remember your dreams?"),
            ("How does the disruption of human sleep patterns by modern screens degrade our long-term <strong>Cognitive function</strong>?", "★ Do you think our ancestors slept better than we do?"),
            ("Does altering your weekend sleep schedule interfere with the natural release of <strong>Melatonin</strong>?", "★ Do you try to \"catch up\" on sleep or maintain a consistent routine?"),
            ("How does severe <strong>Sleep deprivation</strong> amplify the onset of daytime somnolence?", "★ Have you ever woken up from a nap feeling worse than before?"),
            ("How does caffeine interfere with the memory <strong>Consolidation</strong> process during deep sleep?", "★ What is the latest time in the day you can drink coffee?"),
            ("Why is memory consolidation so difficult when we suffer from persistent daytime <strong>Somnolence</strong>?", "★ Have you ever \"slept on a problem\" and found the solution in the morning?"),
            ("If a pill could permanently erase daytime <strong>Drowsiness</strong>, would you still choose to sleep for 8 hours?", "★ What would you do with the extra 6 hours every day?")
        ],
        "r2": [
            "If schools and offices were to start at 10 AM, how would aligning with our <strong>Circadian rhythm</strong> improve public health within a single year?",
            "If you had optimized your sleep environment years ago, would you have successfully cured your <strong>Insomnia</strong> and been more productive?",
            "If a company fired you for protecting your <strong>REM sleep</strong> and ignoring midnight emails, would you take legal action?",
            "If a brain implant could compress sleep into 1 hour, would traditional <strong>Sleep hygiene</strong> become completely obsolete?",
            "If managing somnolence were mandatory, would it boost collective <strong>Cognitive function</strong> and make colleagues more professional?",
            "If you had avoided your phone last night, would the natural surge of <strong>Melatonin</strong> have made you feel more alert today?",
            "If scientists proved that dreams predict the future, would fear-induced <strong>Sleep deprivation</strong> become a global crisis?",
            "If we required no sleep, how would we handle the cognitive <strong>Consolidation</strong> of knowledge without down-time?",
            "If recording your dreams revealed chronic daytime <strong>Somnolence</strong> to your friends, would you feel embarrassed?",
            "If society valued rest as much as work, would eliminating constant <strong>Drowsiness</strong> have accelerated our progress?"
        ]
    },
    "benjamin-franklin-effect.html": {
        "r1": [
            ("Have you ever wondered whether you liked someone because of who they were—or because you had already done them a <strong>Favor</strong>?", "★ Looking back, can you think of a relationship that may have started this way?"),
            ("Why does our brain seem to protect our self-image by changing our <strong>Relationship</strong> with someone we previously disliked?", "★ Do you usually trust your first impressions, or do they change after spending time with someone?"),
            ("Can doing repeated small favors slowly create emotional <strong>Trust</strong> even when two people have very little in common?", "★ Have you ever become close to someone who was completely different from you?"),
            ("Could the Benjamin Franklin effect explain why some people build a deep <strong>Connection</strong> after a conflict instead of leaving?", "★ Have you ever appreciated someone more after overcoming a disagreement?"),
            ("Do people become emotionally attached to colleagues when they are forced to <strong>Cooperate</strong> on a difficult task?", "★ What have you become attached to simply because you invested a lot in it?"),
            ("Can someone persuade you to like them without saying anything—simply by shifting your <strong>Attitude</strong> through small shared actions?", "★ Have you ever realized someone was slowly becoming important in your life without knowing exactly why?"),
            ("Is reciprocity one of the reasons people are so easy to <strong>Persuade</strong> when they feel indebted to someone?", "★ Have you ever mistaken gratitude for a deeper connection?"),
            ("Which changes people more: resolving a personal <strong>Conflict</strong> by receiving kindness, or by giving it?", "★ Which has changed your own attitude more often?"),
            ("Could social media encourage us to like profiles by giving us simple, low-effort ways to <strong>Appreciate</strong> and help others?", "★ Do you feel more connected to people after interacting online, or is it mostly an illusion?"),
            ("If our feelings can change simply because of our own actions, is the law of <strong>Reciprocity</strong> more powerful than we realize?", "★ Has understanding psychology ever changed the way you see yourself?")
        ],
        "r2": [
            "If you discovered that your closest friendship began because of a strategic <strong>Favor</strong> rather than genuine chemistry, would that change your appreciation of the bond?",
            "If you had known this psychological effect ten years ago, would any of your major life decisions or a key <strong>Relationship</strong> have turned out differently?",
            "If you were forced to end a conflict by asking your opponent for a favor, would you be able to rebuild mutual <strong>Trust</strong>?",
            "If we were impossible to persuade by psychological tricks, would we still be able to form a meaningful social <strong>Connection</strong> as easily?",
            "If scientists proved that we only value those we assist, would you actively seek out new people to <strong>Cooperate</strong> with?",
            "If you were an employer, how would you change your <strong>Attitude</strong> toward a candidate who actively asks for help?",
            "If you had to become friends with an enemy, would you attempt to <strong>Persuade</strong> them by asking them for assistance?",
            "If you were in a high-stakes professional <strong>Conflict</strong>, would you dare to ask your opponent for a small, simple favor to break the ice?",
            "If everyone had forgotten every favor you ever did, would you still <strong>Appreciate</strong> the silent psychological benefits of your past kindness?",
            "If an AI chose your future partner based on moments of mutual cooperation, would you trust the algorithm to manage <strong>Reciprocity</strong> more than your own intuition?"
        ]
    },
    "maze-of-biases.html": {
        "r1": [
            ("Can you recall a time you were sure you were right, but later realized you were blinded by a strong <strong>Cognitive Bias</strong>?", "★ Have you ever tried to intentionally look for information that contradicts your opinion?"),
            ("Why do we actively search for information that matches our existing beliefs, showing clear <strong>Confirmation Bias</strong>?", "★ Can you think of a recent event where you felt hindsight bias?"),
            ("Why do we often think 'I knew it all along' after an event occurs, demonstrating a strong <strong>Hindsight Bias</strong>?", "★ Do you usually check prices from different sources before buying something expensive?"),
            ("How do marketers use a high initial price as an <strong>Anchor</strong> to influence our spending habits?", "★ Has anyone ever successfully changed your mind about a deeply held belief?"),
            ("Why does our brain rely on a simple <strong>Heuristic</strong> to make fast, automatic decisions under pressure?", "★ Have you noticed your \"feed\" only showing you things you already like or believe?"),
            ("What is the 'halo effect' and how does it compromise our objective <strong>Rationality</strong> when judging others?", "★ Have you ever assumed someone was smart just because they were well-dressed or attractive?"),
            ("How does our brain make a quick <strong>Inference</strong> about safety based on recent news stories?", "★ Are you more afraid of things that are frequently in the news, even if they are statistically rare?"),
            ("Why do we so often confuse a mere <strong>Correlation</strong> with a direct cause-and-effect relationship?", "★ What is your personal strategy for making objective decisions?"),
            ("How does 'groupthink' distort our individual <strong>Perception</strong> of reality in professional environments?", "★ Have you ever stayed silent in a meeting because everyone else agreed on a bad idea?"),
            ("Which cognitive bias causes the most uncomfortable <strong>Dissonance</strong> in your daily life when your beliefs are challenged?", "★ Do you think education can help people overcome these mental traps?")
        ],
        "r2": [
            "If you had been fully aware of your own <strong>Cognitive Bias</strong>, would you have made the same choice in your last major purchase?",
            "If you were in charge of a large company, how would you prevent <strong>Confirmation Bias</strong> from ruining your recruitment choices?",
            "If you could eliminate <strong>Hindsight Bias</strong>, would you be more forgiving of your past mistakes?",
            "If you had no initial numbers to act as an <strong>Anchor</strong>, how would you calculate the fair value of a new home?",
            "If social media didn't feed our primitive need for a quick <strong>Heuristic</strong>, would our political biases be less extreme?",
            "If you had realized your own limitations of <strong>Rationality</strong> sooner, would your career path have been different?",
            "If an AI were perfectly objective, would you trust its logical <strong>Inference</strong> to make your medical decisions?",
            "If we didn't search for a <strong>Correlation</strong> in random events, would the world feel more chaotic?",
            "If you moved to a different culture, how would your <strong>Perception</strong> of success and failure be altered?",
            "If you had to pick one bias to eliminate to reduce cognitive <strong>Dissonance</strong> from the world, which would it be?"
        ]
    },
    "conversations-avoid-enjoy.html": {
        "r1": [
            ("Why do we assume a stranger will be uninteresting before we even speak to them, and how can we overcome this <strong>Cognitive bias</strong>?", "★ When was the last time you were surprised by someone after talking to them?"),
            ("Why does a simple conversation feel like a major risk, and how does our <strong>Social perception</strong> shape this fear?", "★ Do you ever hesitate before starting small talk?"),
            ("Why do people often experience intense <strong>Anticipatory anxiety</strong> before starting a conversation with an unfamiliar face?", "★ Do you tend to replay social situations in your mind afterwards?"),
            ("How much of our social life is shaped by a <strong>Negative expectation</strong> rather than real, hands-on experience?", "★ Do you think you miss opportunities because of expectations?"),
            ("Why do we usually underestimate the <strong>Social reward</strong> of casual, spontaneous conversations?", "★ Have you ever walked away from a chat feeling unexpectedly good?"),
            ("Why is our <strong>Emotional forecasting</strong> so incredibly unreliable when it comes to social situations?", "★ Can you think of a time you avoided something that turned out fine?"),
            ("What actually creates <strong>Perceived awkwardness</strong> — is it silence, the other person, or simply our own thoughts?", "★ What makes a conversation feel awkward for you personally?"),
            ("Do you think persistent <strong>Social avoidance</strong> is primarily a consequence of personality or just a bad habit?", "★ In what situations do you avoid talking to people?"),
            ("How can a very short, random chat still result in a deep and genuine <strong>Interpersonal connection</strong>?", "★ Have you ever felt “strangely connected” to a stranger?"),
            ("How does a <strong>Self-fulfilling prediction</strong> shape the outcome of a social interaction before it even begins?", "★ Do you think confidence changes outcomes or just feelings?")
        ],
        "r2": [
            "If you were told that most strangers secretly enjoy being talked to, would you start more conversations or would your <strong>Cognitive bias</strong> still hold you back?",
            "If you could see a 'probability score' above people’s heads showing how likely a conversation is to go well, would that alter your <strong>Social perception</strong> of strangers?",
            "If you had to choose, would you rather relive the <strong>Anticipatory anxiety</strong> of every conversation you avoided, or the awkwardness of those you had?",
            "If you were permanently free from any <strong>Negative expectation</strong>, do you think your personality would become more open?",
            "If you discovered that your best future friend was sitting next to you on a train today, would you speak to them to claim that <strong>Social reward</strong>?",
            "If we always trusted our negative <strong>Emotional forecasting</strong>, would we ever be pleasantly surprised by a new interaction?",
            "If your past self could prove that <strong>Perceived awkwardness</strong> is actually quite normal, would you be more confident today?",
            "If every conversation you avoided resulted in a feeling of regret, would you finally stop your habits of <strong>Social avoidance</strong>?",
            "If you had to live in a world where every <strong>Interpersonal connection</strong> was guaranteed to be safe but boring, how would you find excitement?",
            "If you realized that confidence is simply a <strong>Self-fulfilling prediction</strong>, would your social life have been different?"
        ]
    },
    "psychology-of-action-bias.html": {
        "r1": [
            ("Why do human minds treat uncertainty as something that must be immediately resolved, and how does <strong>Action bias</strong> fuel this behavior?", "★ Do you feel uncomfortable when you don’t act quickly in uncertain situations?"),
            ("Has modern life made us so uncomfortable with <strong>Uncertainty</strong> that we treat instant action as the only correct path?", "★ When do you notice yourself acting without reflection?"),
            ("Why does doing nothing feel psychologically heavier than acting on a sudden, unreflective <strong>Impulse</strong>?", "★ When was the last time you chose action just to escape waiting?"),
            ("What does it say about our society that we feel a strong pressure to appear <strong>Decisive</strong> even when we lack necessary facts?", "★ Do you prefer a wrong decision or no decision?"),
            ("How has constant digital stimulation increased our chances of feeling <strong>Regret</strong> after making rapid choices?", "★ Do you still enjoy slow thinking, or does it feel unnatural now?"),
            ("Why do we find it so difficult to slowly <strong>Gather information</strong> before responding to an urgent email or message?", "★ Have you ever pretended to be more certain than you were?"),
            ("Can a quick reaction ever be as effective as taking the time to <strong>Weigh the pros and cons</strong> of a complex situation?", "★ Do your impulses usually feel right in the moment?"),
            ("Why do people often lack the necessary <strong>Patience</strong> to wait for more evidence, even when the stakes are high?", "★ Do you regret actions more than inactions, or the opposite?"),
            ("How does the constant social and professional <strong>Pressure</strong> for speed influence our daily decision-making?", "★ What feels worse to you: waiting too long or acting too fast?"),
            ("If a bias toward action is built into modern life, how can we prevent ourselves from making a <strong>Hasty</strong> and destructive choice?", "★ When do you manage to slow your thinking down?")
        ],
        "r2": [
            "If you were forced to wait 24 hours before making any decision, how would you manage your own subconscious <strong>Action bias</strong>?",
            "If humans hadn't evolved to fear <strong>Uncertainty</strong>, would we still have survived as a species?",
            "If you had never acted on your first <strong>Impulse</strong>, would you be in the same profession you are in today?",
            "If society rewarded patience more than speed, would the pressure to look <strong>Decisive</strong> completely disappear?",
            "If you could always anticipate when you were about to feel <strong>Regret</strong>, would you make more slow, deliberate decisions?",
            "If you were to start your life over with more willingness to <strong>Gather information</strong>, which major mistake would you have avoided?",
            "If an AI could instantly <strong>Weigh the pros and cons</strong> of every personal decision for you, would you trust its advice?",
            "If you had to choose between never feeling regret and having infinite <strong>Patience</strong>, which would be more valuable to you?",
            "If your career had been free from any professional <strong>Pressure</strong>, how would your level of achievement look today?",
            "If you lived in a world where nothing was ever urgent, would you still be prone to making a <strong>Hasty</strong> decision?"
        ]
    },
    "psychology-of-smiles.html": {
        "r1": [
            ("Why do humans rely on smiling so heavily, and how does a genuine <strong>Duchenne smile</strong> differ from a forced one?", "★ Do you think your smile is more emotional or more social?"),
            ("How often do you feel forced <strong>To fake a smile</strong> during a typical day to maintain social harmony?", "★ Do you ever feel like your smile has an “automatic mode”?"),
            ("Why is a polite, curated <strong>Social smile</strong> often easier than explaining our actual feelings?", "★ What emotions do you most often hide behind a smile?"),
            ("If our <strong>Facial cues</strong> are so expressive, why do we still misunderstand each other's feelings?", "★ Have you ever completely misjudged someone based on their expression?"),
            ("Why does a fleeting <strong>Micro-expression</strong> tend to appear when we are under intense emotional pressure?", "★ Have you ever noticed a “split second” emotion on someone’s face that contradicted what they said?"),
            ("What does genuine <strong>Eye involvement</strong> reveal that a simple movement of the lips cannot hide?", "★ Do you trust eyes more than words when judging sincerity?"),
            ("Why do we notice <strong>Emotional leakage</strong> in others much faster than we notice it in ourselves?", "★ Has anyone ever pointed out an emotion you were trying to hide?"),
            ("If <strong>Non-verbal communication</strong> is more honest than speech, why do we still focus so much on spoken words?", "★ In conflict situations, do you trust tone/body language or spoken arguments more?"),
            ("Is constant <strong>Social masking</strong> a necessary skill, or does it slowly disconnect us from our true selves?", "★ In which environments do you feel you “perform” the most?"),
            ("How much of your smiling behavior is natural, and how much is governed by your community's <strong>Cultural display rules</strong>?", "★ Have you noticed big differences in smiling behavior between cultures?")
        ],
        "r2": [
            "If you could instantly identify a genuine <strong>Duchenne smile</strong>, how would your professional interactions change?",
            "If you lived in a culture where people never had <strong>To fake a smile</strong>, would you find it easier to make friends?",
            "If you were banned from using a <strong>Social smile</strong>, how would you navigate polite, professional greetings?",
            "If people could see your exact <strong>Facial cues</strong> at all times, would you feel too exposed and vulnerable?",
            "If you had mastered the detection of every <strong>Micro-expression</strong>, would you have avoided major personal conflicts?",
            "If a genuine smile requires <strong>Eye involvement</strong>, can we ever train ourselves to fake true happiness perfectly?",
            "In a high-stakes meeting, how do you prevent <strong>Emotional leakage</strong> when receiving disappointing news?",
            "If you stopped using polite <strong>Non-verbal communication</strong> for a week, how many of your daily chats would become awkward?",
            "If you could eliminate one form of <strong>Social masking</strong> from your workspace, which one would it be?",
            "How do you adapt your smile when traveling to a country with completely different <strong>Cultural display rules</strong>?"
        ]
    },
    "power-of-habits.html": {
        "r1": [
            ("What is the biggest habit you've successfully changed, and did it require raw <strong>Willpower</strong> or environmental design?", "★ How did you feel before and after the change?"),
            ("Why do most New Year's resolutions fail by February, and how can we cultivate better <strong>Consistency</strong>?", "★ Have you ever made a resolution that actually stuck?"),
            ("How do daily triggers work in our environment, and why is relying on pure <strong>Discipline</strong> often unsustainable?", "★ What is a common trigger that leads you to a bad habit?"),
            ("How does a simple sensory <strong>Trigger</strong> initiate our automated daily routines?", "★ Do you gratify yourself when you stick to a new habituation?"),
            ("What is the role of instant <strong>Gratification</strong> in reinforcing a bad habit?", "★ Do you find it takes more or less than the famous 21 days?"),
            ("Why is <strong>Incremental</strong>, small-scale progress more reliable than a sudden, drastic life change?", "★ What do you do on days when you have zero motivation?"),
            ("How does the psychological process of <strong>Habituation</strong> make new behaviors feel completely natural over time?", "★ Can you think of a habit you could \"stack\" onto your morning coffee?"),
            ("How does the mental <strong>Automation</strong> of habits free up cognitive energy for other tasks?", "★ Do you describe yourself by your habits (e.g., \"I am a runner\")?"),
            ("How do tiny, daily choices <strong>Compound</strong> over several years into major life outcomes?", "★ Have you ever tried hiding your phone to focus better?"),
            ("How much of our daily behavior is governed by <strong>Subconscious</strong> patterns rather than conscious choices?", "★ Is there something you could start today using only one minute?")
        ],
        "r2": [
            "If you had started your most important habit five years earlier, would you have needed as much <strong>Willpower</strong> to succeed?",
            "If schools taught habit management, would students build the lifelong <strong>Consistency</strong> needed for self-study?",
            "If you could delete any bad habit instantly with an implant, would that destroy your capacity for self-<strong>Discipline</strong>?",
            "If you hadn't removed every negative environmental <strong>Trigger</strong> this morning, would you have been more productive?",
            "If we lived in a world without instant <strong>Gratification</strong>, would it be much easier to maintain positive habits?",
            "If you focused entirely on making <strong>Incremental</strong> improvements, how would your career look in five years?",
            "If your brain resisted positive <strong>Habituation</strong>, would you ever be able to learn a new language?",
            "If we had to think about every action instead of relying on <strong>Automation</strong>, would we be completely exhausted by noon?",
            "If you could see the <strong>Compound</strong> interest of your daily efforts in real-time, would you work harder?",
            "If you were fully conscious of every decision, would you lose the speed and comfort of <strong>Subconscious</strong> behaviors?"
        ]
    }
}

def fix_all():
    print("Fixing English sessions...")
    for filename, data in DATA.items():
        filepath = os.path.join('events/sessions/mind-matters', filename)
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            continue

        with open(filepath, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')

        # Fix s-r1
        r1_el = soup.find(id='s-r1')
        if r1_el:
            body = r1_el.find(class_='round-body')
            if body:
                # Remove all existing round-item elements
                for item in body.find_all(class_='round-item'):
                    item.decompose()
                # Remove vim-instruction if any
                for vi in body.find_all(class_='vim-instruction'):
                    vi.decompose()
                # Remove round-type-badge if any
                for rtb in body.find_all(class_='round-type-badge'):
                    rtb.decompose()

                # Re-add elements
                # 1. badge
                badge = soup.new_tag('div', attrs={"class": "round-type-badge"})
                badge.string = "Questions"
                body.append(badge)

                # 2. instruction
                vi = soup.new_tag('div', attrs={"class": "vim-instruction"})
                vi.string = "10 items required. Use .round-item-main and .round-item-personal."
                body.append(vi)

                # 3. 10 round items
                for main_q, pers_q in data["r1"]:
                    item_div = soup.new_tag('div', attrs={"class": "round-item"})

                    main_div = soup.new_tag('div', attrs={"class": "round-item-main"})
                    # Parse HTML string to BeautifulSoup tag
                    main_soup = BeautifulSoup(main_q, 'html.parser')
                    for element in list(main_soup.contents):
                        main_div.append(element)

                    pers_div = soup.new_tag('div', attrs={"class": "round-item-personal"})
                    pers_soup = BeautifulSoup(pers_q, 'html.parser')
                    for element in list(pers_soup.contents):
                        pers_div.append(element)

                    item_div.append(main_div)
                    item_div.append('\n')
                    item_div.append(pers_div)
                    item_div.append('\n')
                    body.append(item_div)
                    body.append('\n')

        # Fix s-r2
        r2_el = soup.find(id='s-r2')
        if r2_el:
            body = r2_el.find(class_='round-body')
            if body:
                # Remove all existing round-item elements
                for item in body.find_all(class_='round-item'):
                    item.decompose()
                # Remove vim-instruction if any
                for vi in body.find_all(class_='vim-instruction'):
                    vi.decompose()
                # Remove round-type-badge if any
                for rtb in body.find_all(class_='round-type-badge'):
                    rtb.decompose()

                # Re-add elements
                # 1. badge
                badge = soup.new_tag('div', attrs={"class": "round-type-badge"})
                badge.string = "Debate"
                body.append(badge)

                # 2. instruction
                vi = soup.new_tag('div', attrs={"class": "vim-instruction"})
                vi.string = "10 items required. Deep dilemma or future thinking about mental health."
                body.append(vi)

                # 3. 10 round items (only main questions for Mind Matters R2!)
                for main_q in data["r2"]:
                    item_div = soup.new_tag('div', attrs={"class": "round-item"})

                    main_div = soup.new_tag('div', attrs={"class": "round-item-main"})
                    main_soup = BeautifulSoup(main_q, 'html.parser')
                    for element in list(main_soup.contents):
                        main_div.append(element)

                    item_div.append(main_div)
                    item_div.append('\n')
                    body.append(item_div)
                    body.append('\n')

        with open(filepath, 'w', encoding='utf-8') as f:
            # use formatter=None to avoid double escaping HTML entities in BeautifulSoup
            f.write(soup.prettify(formatter=None))
        print(f"Fixed: {filepath}")

if __name__ == "__main__":
    fix_all()
