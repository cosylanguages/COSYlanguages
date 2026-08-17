import os
import re
from bs4 import BeautifulSoup

CXG_DIR = 'apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/crazy-ex-girlfriend-challenge/'

CXG_BATCH2_DATA = {
    'im-the-villain-in-my-own-story': {
        'title': "I'm the Villain in My Own Story",
        'id_suffix': 'im-the-villain-in-my-own-story',
        'vocab': [
            {'word': 'Villain', 'def': 'A character whose evil actions or motives are important to the plot.', 'ex': 'Rebecca realizes she is not the fairytale heroine, but the villain in her own story.', 'opp': 'Hero'},
            {'word': 'Witch', 'def': 'A woman thought to have magic powers, often portrayed as wicked.', 'ex': 'She dresses as a classic Disney witch to dramatically celebrate her bad choices.', 'opp': 'Fairy Godmother'},
            {'word': 'Ego', 'def': 'A person\'s sense of self-esteem or self-importance.', 'ex': 'Her inflated ego makes her believe even her mistakes deserve an orchestral theme song.', 'opp': 'Modesty'},
            {'word': 'Manipulate', 'def': 'To control or influence a person or situation cleverly, unfairly, or maliciously.', 'ex': 'Trying to manipulate people\'s relationships always backfires in hilarious ways.', 'opp': 'Guide'},
            {'word': 'Antagonist', 'def': 'A person who actively opposes or is hostile to someone or something.', 'ex': 'It is shocking when you realize you have become the antagonist in someone else\'s life.', 'opp': 'Protagonist'},
            {'word': 'Jealousy', 'def': 'The state or feeling of being envious of someone\'s achievements or advantages.', 'ex': 'Her intense jealousy pushed her to scheme against an innocent rival.', 'opp': 'Contentment'},
            {'word': 'Scheming', 'def': 'Given to or involved in making secret, devious plans.', 'ex': 'Scheming in secret feels powerful until your plot collapses in public.', 'opp': 'Transparent'},
            {'word': 'Moral', 'def': 'Concerned with the principles of right and wrong behavior.', 'ex': 'She struggles with her moral compass while executing terrible decisions.', 'opp': 'Immoral'},
            {'word': 'Plot', 'def': 'A secret plan made by a group to do something unlawful or harmful.', 'ex': 'Her elaborate plot to ruin a wedding was doomed from the start.', 'opp': 'Truth'},
            {'word': 'Self-aware', 'def': 'Having conscious knowledge of one\'s own character and feelings.', 'ex': 'Being self-aware doesn\'t help if you continue making bad choices anyway.', 'opp': 'Oblivious'}
        ],
        'r1': [
            ("In 'I'm the Villain in My Own Story', Rebecca embraces her wicked side in a dramatic fairytale song. Why is being the <strong>Villain</strong> so fun in fiction?", "★ Have you ever realized in hindsight that you were the <strong>Villain</strong> or wrong party in a disagreement?"),
            ("The song parodies classic animated <strong>Witch</strong> anthems. How do theatrical tropes make bad behavior entertaining?", "★ What is your favorite villainous or <strong>Witch</strong> character from film or theater?"),
            ("Rebecca\'s <strong>Ego</strong> transforms her personal guilt into a grand theatrical performance. Why do people dramatize their flaws?", "★ How do you keep your <strong>Ego</strong> in check when you feel tempted to make things all about you?"),
            ("How does her attempt to <strong>Manipulate</strong> the people around her highlight her deep insecurities?", "★ What is the best way to handle someone who is trying to <strong>Manipulate</strong> a group dynamic?"),
            ("Realizing you are the <strong>Antagonist</strong> of someone else\'s story is a painful epiphany. How does self-reflection hurt?", "★ How do you react when someone views you as the <strong>Antagonist</strong> in their personal narrative?"),
            ("How does <strong>Jealousy</strong> drive Rebecca to abandon her ethics and scheme against Valencia?", "★ What strategy helps you overcome sudden feelings of <strong>Jealousy</strong> or envy?"),
            ("The lyrics celebrate devious <strong>Scheming</strong> with comedic relish. Why do convoluted revenge plots always fail?", "★ Why are simple, honest conversations so much more effective than secret <strong>Scheming</strong>?"),
            ("How does the song explore the boundary between a person\'s <strong>Moral</strong> ideals and their impulsive actions?", "★ What personal <strong>Moral</strong> boundary would you never cross, no matter how upset you were?"),
            ("Rebecca\'s villainous <strong>Plot</strong> involves poisoned apples and dramatic curses. How does fantasy warp reality?", "★ Why do people construct elaborate mental <strong>Plot</strong> lines instead of facing simple truths?"),
            ("Does being <strong>Self-aware</strong> make Rebecca\'s bad choices better or worse?", "★ Why is being <strong>Self-aware</strong> useless if you don\'t change your actions?")
        ],
        'r2': [
            "Being <strong>Self-aware</strong> about your bad behavior without changing it makes you far worse than someone who acts out of genuine ignorance. Let's debate this perspective.",
            "Fiction glorifies the <strong>Villain</strong> because society secretly envies people who act without moral restraint. Share your thoughts.",
            "Uncontrolled <strong>Jealousy</strong> is the single most destructive emotion in personal relationships. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Narrative Self-Identification & Dramatic Labels',
        'lang_desc': 'In the song <strong>I\'m the Villain in My Own Story</strong>, the theatrical self-awareness highlights <strong>Dramatic Self-Labeling & Narrative Role Assignment</strong> (e.g., <em>I\'m the villain, I\'m the witch, I\'m the evil rival</em>). This structure supports analyzing character archetypes.',
        'lang_examples': [
            'I have officially become the villain in this office drama!',
            'She casts herself as the misunderstood hero in every conflict.',
            'They assigned him the role of antagonist without asking his side.'
        ],
        'note_items': [
            ("She is the villain <span class=\"mistake-highlight\">of her own story</span>", "→", "She is the villain in her own story", "(Use 'villain in' a story/narrative.)"),
            ("He is jealous <span class=\"mistake-highlight\">about his rival</span>", "→", "He is jealous of his rival", "(Use 'jealous of' someone or something.)"),
            ("She manipulated him <span class=\"mistake-highlight\">to do bad things</span>", "→", "She manipulated him into doing bad things", "(Use 'manipulate someone into + -ing'.)")
        ]
    },

    'oh-my-god-i-think-i-like-you': {
        'title': 'Oh My God I Think I Like You',
        'id_suffix': 'oh-my-god-i-think-i-like-you',
        'vocab': [
            {'word': 'Panic', 'def': 'Sudden uncontrollable fear or anxiety, often causing wildly unthinking behavior.', 'ex': 'Realizing you have genuine feelings for a casual hookup induces pure panic.', 'opp': 'Calm'},
            {'word': 'Vulnerable', 'def': 'Exposed to the possibility of being attacked or harmed, either physically or emotionally.', 'ex': 'Admitting you care about someone makes you feel terrified and vulnerable.', 'opp': 'Protected'},
            {'word': 'Casual', 'def': 'Relaxed and unconcerned; not formal or serious.', 'ex': 'They agreed to keep their relationship strictly casual, but emotions intervened.', 'opp': 'Serious'},
            {'word': 'Horrified', 'def': 'Filled with horror; extremely shocked or dismayed.', 'ex': 'She was horrified to discover that sweet romantic thoughts had entered her head.', 'opp': 'Delighted'},
            {'word': 'Affection', 'def': 'A gentle feeling of liking or fondness.', 'ex': 'Unwanted affection can catch you completely off guard during a simple conversation.', 'opp': 'Dislike'},
            {'word': 'Denial', 'def': 'The action of declaring something to be untrue; refusal to accept reality.', 'ex': 'She stayed in complete denial until her heart started racing around him.', 'opp': 'Acceptance'},
            {'word': 'Accidental', 'def': 'Happening by chance, unintentionally, or unexpectedly.', 'ex': 'An accidental moment of genuine warmth shattered her cynical rules.', 'opp': 'Intentional'},
            {'word': 'Overwhelmed', 'def': 'Completely overcome in mind or feeling by a superior force.', 'ex': 'Feeling overwhelmed by unexpected intimacy is a common dater experience.', 'opp': 'Unmoved'},
            {'word': 'Complicated', 'def': 'Consisting of many interconnecting parts or elements; intricate.', 'ex': 'What started as a simple physical arrangement quickly became deeply complicated.', 'opp': 'Simple'},
            {'word': 'Terrified', 'def': 'Cause to feel extreme fear.', 'ex': 'She was terrified of ruining her independent lifestyle for love.', 'opp': 'Reassured'}
        ],
        'r1': [
            ("In 'Oh My God I Think I Like You', Rebecca experiences intense <strong>Panic</strong> when emotional attachment ruins her casual hookup. Why is falling in love scary?", "★ When was a time you felt sudden <strong>Panic</strong> because feelings caught you unprepared?"),
            ("Why does being emotionally <strong>Vulnerable</strong> feel far scarier than physical intimacy for many people?", "★ How do you build up the courage to be <strong>Vulnerable</strong> with someone new?"),
            ("The song parodies the modern myth of the purely <strong>Casual</strong> relationship. Can people really separate feelings from intimacy?", "★ Do you believe a strictly <strong>Casual</strong> romantic arrangement is sustainable over time?"),
            ("Rebecca is hilarious <strong>Horrified</strong> that she enjoys cuddling and sweet talk. Why do cynics resist affection?", "★ Why do people who act tough often feel <strong>Horrified</strong> by sentimental moments?"),
            ("How does unexpected <strong>Affection</strong> disrupt carefully built emotional defense mechanisms?", "★ What is the sweetest or most surprising gesture of <strong>Affection</strong> you have received?"),
            ("How does Rebecca use humorous <strong>Denial</strong> to fight against her obvious feelings for Greg?", "★ How can you tell when a friend is in complete <strong>Denial</strong> about their feelings?"),
            ("The track shows how an <strong>Accidental</strong> realization can change the entire dynamic between two people. Has this happened to you?", "★ How do you navigate a relationship when an <strong>Accidental</strong> comment changes everything?"),
            ("Why does feeling <strong>Overwhelmed</strong> by love lead to energetic, funny internal monologues?", "★ How do you calm yourself down when you feel <strong>Overwhelmed</strong> by sudden life changes?"),
            ("How does the song capture the transition from a simple physical arrangement to a <strong>Complicated</strong> romance?", "★ Why do humans have a tendency to make simple situations emotionally <strong>Complicated</strong>?"),
            ("Rebecca is <strong>Terrified</strong> that liking Greg will give him power over her. Is love inherently risky?", "★ Why is taking emotional risks worth the fear of getting hurt?")
        ],
        'r2': [
            "Attempting to maintain a strictly <strong>Casual</strong> intimate relationship without developing feelings is an unrealistic myth. Let's debate this perspective.",
            "Being emotionally <strong>Vulnerable</strong> requires far more courage than putting up defensive walls. Share your thoughts.",
            "Initial romantic <strong>Panic</strong> is usually a sign that a connection is genuinely important to you. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Sudden Epiphanies & Involuntary Realizations',
        'lang_desc': 'In the song <strong>Oh My God I Think I Like You</strong>, the frantic internal realization highlights <strong>Sudden Epiphanies & Exclamatory Realizations</strong> (e.g., <em>Oh my god, I think I like you; Wait a minute, what is happening?</em>). This structure supports expressing unexpected discoveries.',
        'lang_examples': [
            'Oh my god, I think I actually enjoy this terrible job!',
            'Wait a second, did I just accidentally agree to host the party?',
            'Suddenly she realized that she had developed feelings for her rival.'
        ],
        'note_items': [
            ("She is terrified <span class=\"mistake-highlight\">about falling in love</span>", "→", "She is terrified of falling in love", "(Use 'terrified of + -ing'.)"),
            ("He is vulnerable <span class=\"mistake-highlight\">for emotional pain</span>", "→", "He is vulnerable to emotional pain", "(Use 'vulnerable to'.)"),
            ("They are in denial <span class=\"mistake-highlight\">for their feelings</span>", "→", "They are in denial about their feelings", "(Use 'in denial about'.)")
        ]
    },

    'wheres-the-bathroom': {
        'title': "Where's the Bathroom",
        'id_suffix': 'wheres-the-bathroom',
        'vocab': [
            {'word': 'Bathroom', 'def': 'A room containing a toilet and sink, often sought as a refuge from awkwardness.', 'ex': 'Searching frantically for the bathroom is Naomi\'s cover for inspecting Rebecca\'s life.', 'opp': 'N/A'},
            {'word': 'Criticism', 'def': 'The expression of disapproval of someone or something based on perceived faults.', 'ex': 'Naomi delivers ninety relentless criticisms in under two minutes.', 'opp': 'Praise'},
            {'word': 'Guilt', 'def': 'A feeling of having done wrong or failed in an obligation.', 'ex': 'Maternal guilt is weaponized as an art form in this rapid-fire patter song.', 'opp': 'Innocence'},
            {'word': 'Relentless', 'def': 'Unyieldingly severe, strict, or harsh; never stopping.', 'ex': 'Her relentless barrage of questions leaves Rebecca completely paralyzed.', 'opp': 'Gentle'},
            {'word': 'Judgment', 'def': 'An opinion or conclusion formed after careful consideration, often negative.', 'ex': 'Every corner of the apartment is subjected to harsh maternal judgment.', 'opp': 'Acceptance'},
            {'word': 'Fast-paced', 'def': 'Moving, acting, or happening with great speed.', 'ex': 'The fast-paced Broadway melody mirrors the frantic anxiety of family visits.', 'opp': 'Slow'},
            {'word': 'Invasive', 'def': 'Tending to intrude on a person\'s thoughts or privacy.', 'ex': 'Asking about marital prospects and bank accounts within ten seconds is highly invasive.', 'opp': 'Respectful'},
            {'word': 'Expectation', 'def': 'A strong belief that something will or should happen.', 'ex': 'Crushed by maternal expectation, Rebecca scrambles to look successful.', 'opp': 'Freedom'},
            {'word': 'Disapproval', 'def': 'Possession or expression of an unfavorable opinion.', 'ex': 'A single look of disapproval from her mother can ruin Rebecca\'s week.', 'opp': 'Approval'},
            {'word': 'Exhausting', 'def': 'Making one feel completely drained of energy.', 'ex': 'Defending your life choices to critical family members is utterly exhausting.', 'opp': 'Energizing'}
        ],
        'r1': [
            ("In 'Where's the Bathroom', Tovah Feldshuh plays Naomi, a mother who attacks with rapid-fire <strong>Criticism</strong>. Why is family interrogation funny in theater?", "★ How do you handle unsolicited <strong>Criticism</strong> or advice from older family members?"),
            ("Naomi uses maternal <strong>Guilt</strong> as her primary tool of influence. Why is guilt such a powerful motivator in family dynamics?", "★ How do you set healthy boundaries when family members use <strong>Guilt</strong> trips?"),
            ("The song\'s <strong>Relentless</strong> pace leaves no room for Rebecca to respond. How does speed convey anxiety?", "★ Have you ever experienced a <strong>Relentless</strong> barrage of questions during an interview or meeting?"),
            ("Naomi passes immediate <strong>Judgment</strong> on Rebecca\'s apartment, weight, and career choices. How can we ignore harsh opinions?", "★ How do you protect your peace of mind from unfair external <strong>Judgment</strong>?"),
            ("How does the <strong>Fast-paced</strong> tempo of the song capture the chaos of a surprise family visit?", "★ What is your strategy for surviving a stressful, <strong>Fast-paced</strong> family gathering?"),
            ("Naomi\'s questions about marriage and finances are deeply <strong>Invasive</strong>. Where should parents draw the line?", "★ What is a topic you consider strictly private and off-limits from <strong>Invasive</strong> questioning?"),
            ("How do unfulfilled parental <strong>Expectation</strong> burden adult children in their careers?", "★ How do you balance fulfilling your own dreams versus meeting family <strong>Expectation</strong>?"),
            ("Why does a small sigh of <strong>Disapproval</strong> from a parent carry more weight than an insult from a stranger?", "★ Why do we care so much about avoiding the <strong>Disapproval</strong> of people who love us?"),
            ("Why is trying to maintain a 'perfect' image for visiting relatives so physically <strong>Exhausting</strong>?", "★ What simple comfort helps you recover after an <strong>Exhausting</strong> social obligation?"),
            ("Ultimately, why does Naomi open with 'Where\'s the <strong>Bathroom</strong>' before launching into her tirade?", "★ Why do people often use minor logistical requests as a doorway to initiate bigger conversations?")
        ],
        'r2': [
            "Parents who weaponize <strong>Guilt</strong> and <strong>Criticism</strong> do so out of anxious love, not malice. Let's debate this perspective.",
            "Setting strict, uncompromising boundaries with <strong>Invasive</strong> family members is necessary for adult mental health. Share your thoughts.",
            "It is impossible to feel truly successful until you stop seeking parental <strong>Approval</strong>. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Rapid Patter & Stacked Interrogatives',
        'lang_desc': 'In the song <strong>Where\'s the Bathroom</strong>, the overwhelming interrogation highlights <strong>Rapid Patter & Stacked Questions</strong> (e.g., <em>Where\'s the bathroom? Why are you pale? Who is this guy? Why haven\'t you called?</em>). This structure supports analyzing fast conversational pressure.',
        'lang_examples': [
            'Where is the bathroom, why is it cold, and why haven\'t you bought a rug?',
            'Did you get promoted, are you dating anyone, and why are you wearing that?',
            'She fired off ten questions before I even had time to take off my coat.'
        ],
        'note_items': [
            ("She asked where is <span class=\"mistake-highlight\">the bathroom</span>", "→", "She asked where the bathroom was", "(Use indirect question word order: 'where + subject + verb'.)"),
            ("He is critical <span class=\"mistake-highlight\">for her lifestyle</span>", "→", "He is critical of her lifestyle", "(Use 'critical of' someone or something.)"),
            ("She feels guilty <span class=\"mistake-highlight\">about not call</span>", "→", "She feels guilty for not calling / about not calling", "(Use preposition + gerund '-ing'.)")
        ]
    },

    'whos-the-new-guy': {
        'title': "Who's the New Guy",
        'id_suffix': 'whos-the-new-guy',
        'vocab': [
            {'word': 'Newcomer', 'def': 'A person who has recently arrived in a place or joined a group.', 'ex': 'The arrival of a newcomer at the law firm threatens the established social dynamic.', 'opp': 'Veteran'},
            {'word': 'Suspicion', 'def': 'A feeling or thought that something is possible, likely, or true.', 'ex': 'The office staff treats the replacement character with hilarious suspicion.', 'opp': 'Trust'},
            {'word': 'Meta', 'def': 'Self-referential; referring to itself or the conventions of its genre.', 'ex': 'The song is brilliantly meta, mocking television recasting and new cast additions.', 'opp': 'Earnest'},
            {'word': 'Disrupt', 'def': 'To interrupt an event, activity, or process by causing a disturbance or problem.', 'ex': 'A new employee can completely disrupt the delicate balance of office gossip.', 'opp': 'Harmonize'},
            {'word': 'Dynamic', 'def': 'The forces or properties that stimulate growth or change within a system or group.', 'ex': 'Adding a new person alters the emotional dynamic of the entire group.', 'opp': 'Stagnation'},
            {'word': 'Replacement', 'def': 'A person or thing that takes the place of another.', 'ex': 'Nobody likes feeling like an unwanted replacement for a beloved friend.', 'opp': 'Original'},
            {'word': 'Gossip', 'def': 'Casual or unconstrained conversation or reports about other people.', 'ex': 'Office gossip spikes whenever a mysterious new guy walks through the door.', 'opp': 'Fact'},
            {'word': 'Intruder', 'def': 'A person who enters a place or situation where they are not wanted.', 'ex': 'They initially view Scott as an unwelcome intruder invading their song routines.', 'opp': 'Guest'},
            {'word': 'Resentment', 'def': 'Bitter indignation at having been treated unfairly.', 'ex': 'Unearned resentment builds up when team members fear losing their standing.', 'opp': 'Warmth'},
            {'word': 'Integration', 'def': 'The action or process of integrating or combining into an equal group.', 'ex': 'Successful integration into a tight-knit workplace takes time and effort.', 'opp': 'Isolation'}
        ],
        'r1': [
            ("In 'Who\'s the New Guy', the office staff sings a clever <strong>Meta</strong> song about a replacement character joining their show. How does self-aware humor work?", "★ What is your favorite TV show or movie that broke the fourth wall with <strong>Meta</strong> jokes?"),
            ("The staff treats the <strong>Newcomer</strong> with absurd hostility and skepticism. Why are tight groups afraid of newcomers?", "★ Have you ever felt like the anxious <strong>Newcomer</strong> trying to fit into an established group?"),
            ("Why is sudden <strong>Suspicion</strong> the default reaction when an outsider joins a workplace team?", "★ How do you build trust quickly when joining a new team or department?"),
            ("How does introducing a new member <strong>Disrupt</strong> the established habits and routines of a friend group?", "★ Have you ever seen a new person completely <strong>Disrupt</strong> an existing social circle?"),
            ("The song explores how the social <strong>Dynamic</strong> shifts when someone leaves and another arrives. How do groups adapt?", "★ How has the <strong>Dynamic</strong> of your workplace or friend group evolved over the years?"),
            ("Why do people often resist a <strong>Replacement</strong> even when the new person is perfectly nice?", "★ Why is it hard for people to accept a <strong>Replacement</strong> for a popular leader or colleague?"),
            ("How does workplace <strong>Gossip</strong> explode when basic details about a new hire are unknown?", "★ Why is office <strong>Gossip</strong> so addictive, and how can teams keep it constructive?"),
            ("The characters treat Scott like an <strong>Intruder</strong> stealing screen time. How does envy drive group rejection?", "★ What advice would you give to someone feeling like an unwanted <strong>Intruder</strong> at a party?"),
            ("How can team leaders prevent petty <strong>Resentment</strong> when onboarding new talent?", "★ What is the best way to resolve lingering <strong>Resentment</strong> between colleagues?"),
            ("What makes the final <strong>Integration</strong> of a new member into a team satisfying?", "★ What deliberate effort helps smooth the <strong>Integration</strong> of a new member into your circle?")
        ],
        'r2': [
            "Tight-knit social groups naturally create hostile environments for any <strong>Newcomer</strong> attempting to join. Let's debate this perspective.",
            "Self-referential <strong>Meta</strong> humor in television is a lazy substitute for genuine character storytelling. Share your thoughts.",
            "Workplace <strong>Gossip</strong> is an inevitable and essential bonding mechanism for stressed teams. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Fourth-Wall Breaking & Meta Inquiries (*Who is this guy?*)',
        'lang_desc': 'In the song <strong>Who\'s the New Guy</strong>, the self-aware TV parody highlights <strong>Meta Inquiries & Group Interrogatives</strong> (e.g., <em>Who is the new guy? Why is he here? Is he replacing someone?</em>). This structure supports analyzing self-referential questions.',
        'lang_examples': [
            'Who is the new guy and why is he getting his own solo in episode three?',
            'Are we supposed to pretend we haven\'t noticed this major character change?',
            'They asked who brought the newcomer into our private group chat.'
        ],
        'note_items': [
            ("Who is <span class=\"mistake-highlight\">the new guy guy</span>", "→", "Who is the new guy", "(Avoid accidental noun doubling.)"),
            ("They are suspicious <span class=\"mistake-highlight\">about the newcomer</span>", "→", "They are suspicious of the newcomer", "(Use 'suspicious of'.)"),
            ("He tried to integrate <span class=\"mistake-highlight\">to the team</span>", "→", "He tried to integrate into the team", "(Use 'integrate into' a group or team.)")
        ]
    },

    'group-hang': {
        'title': 'Group Hang',
        'id_suffix': 'group-hang',
        'vocab': [
            {'word': 'Group', 'def': 'A number of people or things that are located, gathered, or classed together.', 'ex': 'She suggested a group hang to avoid being alone with her crush on a real date.'},
            {'word': 'Awkward', 'def': 'Causing or feeling embarrassment or inconvenience.', 'ex': 'A eight-person dinner at a noisy restaurant is the definition of awkward chaos.'},
            {'word': 'Dilute', 'def': 'To make something weaker or less intense by adding other elements.', 'ex': 'Adding six extra acquaintances dilutes romantic tension until it vanishes.'},
            {'word': 'Buffer', 'def': 'A person or thing that reduces a shock or forms a barrier between incompatible things.', 'ex': 'Using your friends as a buffer against romantic intimacy usually backfires.'},
            {'word': 'Chaos', 'def': 'Complete disorder and confusion.', 'ex': 'Trying to order group tapas for eight people creates absolute chaos.'},
            {'word': 'Tapas', 'def': 'Small Spanish savory dishes, typically served with drinks at a bar.', 'ex': 'Splitting three tiny plates of tapas among eight hungry people satisfies no one.'},
            {'word': 'Shallow', 'def': 'Lacking depth of intellect, emotion, or knowledge.', 'ex': 'Group conversations inevitably default to shallow topics like the weather.'},
            {'word': 'Distraction', 'def': 'A thing that prevents someone from giving full attention to something else.', 'ex': 'The loud ambient restaurant noise provided a welcome distraction from her feelings.'},
            {'word': 'Escape', 'def': 'An act of breaking free from confinement or control.', 'ex': 'Suggesting a group hang was her cowardly escape from a one-on-one date.'},
            {'word': 'Social', 'def': 'Relating to society or its organization; needing companionship.', 'ex': 'Navigating group social anxiety requires constant energy.'}
        ],
        'r1': [
            ("In 'Group Hang', Rebecca parodies Latin pop while organizing an eight-person dinner to avoid one-on-one romance. Why do people use a <strong>Group</strong> as a shield?", "★ Have you ever invited extra friends along just to avoid an <strong>Awkward</strong> one-on-one meeting?"),
            ("The song explains how inviting too many people will <strong>Dilute</strong> intimacy. Why are big group dinners terrible for real conversation?", "★ What is the ideal group size for a meaningful, fun dinner conversation?"),
            ("Rebecca relies on her friends as a human <strong>Buffer</strong>. When is having a buffer helpful versus cowardly?", "★ Have you ever had to act as a <strong>Buffer</strong> between two awkward or clashing friends?"),
            ("How does trying to split the bill or share <strong>Tapas</strong> among eight people turn into hilarious <strong>Chaos</strong>?", "★ What is your worst or funniest experience trying to split a group restaurant bill?"),
            ("The lyrics note that group hangs force everyone into <strong>Shallow</strong> small talk. How can you have deep chats in a crowd?", "★ How do you steer a large group conversation away from <strong>Shallow</strong> topics?"),
            ("Why is constant phone usage and loud music such a common <strong>Distraction</strong> during group outings?", "★ How do you feel when people spend an entire group hang staring at their phones?"),
            ("Rebecca views the noisy party as a clever <strong>Escape</strong> from emotional risk. Why is vulnerability frightening?", "★ When is it better to face a difficult one-on-one talk instead of seeking an <strong>Escape</strong>?"),
            ("How does the song parody the performative joy of <strong>Social</strong> gatherings that are actually uncomfortable?", "★ Why do people feel pressured to act like they are having the 'best time ever' at parties?"),
            ("What makes the Latin pop rhythm of 'Group Hang' such a funny match for mundane restaurant struggles?", "★ Why does putting mundane, daily annoyances into energetic music make them so funny?"),
            ("Ultimately, did the group hang successfully protect Rebecca, or did it just create new headaches?", "★ Why do complicated social workarounds usually create more trouble than being direct?")
        ],
        'r2': [
            "Organizing a large <strong>Group</strong> outing is usually a cowardly tactic to avoid genuine one-on-one connection. Let's debate this perspective.",
            "Shared group dining with <strong>Tapas</strong> and split bills is inherently flawed and always causes unnecessary friction. Share your thoughts.",
            "Modern <strong>Social</strong> gatherings are more about creating content for social media than enjoying real company. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Evasive Suggestions & Diluted Directives (*Let\'s all go together!*)',
        'lang_desc': 'In the song <strong>Group Hang</strong>, the evasive group planning highlights <strong>Inclusive Plural Directives & Evasive Suggestions</strong> (e.g., <em>Let\'s all hang out, why don\'t we all go together, the more the merrier</em>). This structure supports analyzing social deflection tactics.',
        'lang_examples': [
            'Let\'s all go together as a huge group so nobody feels left out!',
            'Why don\'t we invite six more colleagues to make it a real party?',
            'The more people we bring, the less awkward the evening will be.'
        ],
        'note_items': [
            ("They went on a <span class=\"mistake-highlight\">group hanging</span>", "→", "They went on a group hang / group outing", "(Use 'group hang' or 'group outing' as a noun phrase.)"),
            ("She used her friends <span class=\"mistake-highlight\">like a buffer</span>", "→", "She used her friends as a buffer", "(Use 'as a buffer' when serving in that role.)"),
            ("He diluted the topic <span class=\"mistake-highlight\">with many details</span>", "→", "He diluted the topic with unnecessary details", "(Proper usage of 'dilute with'.)")
        ]
    },

    'fit-hot-guys-have-problems-too': {
        'title': 'Fit Hot Guys Have Problems Too',
        'id_suffix': 'fit-hot-guys-have-problems-too',
        'vocab': [
            {'word': 'Shallow', 'def': 'Lacking depth of intellect, emotion, or seriousness.', 'ex': 'The song parodies male models complaining about trivial problems with absurd seriousness.'},
            {'word': 'Privilege', 'def': 'A special right, advantage, or immunity granted to a particular person or group.', 'ex': 'They whine about handsome privilege while strutting around in a boyband routine.'},
            {'word': 'Superficial', 'def': 'Existing or occurring at or on the surface; not thorough or deep.', 'ex': 'Complaining that your abs are too defined is the definition of a superficial problem.'},
            {'word': 'Absurd', 'def': 'Wildly unreasonable, illogical, or ridiculous.', 'ex': 'Watching three gorgeous guys cry over trivial minor inconveniences is absurd.'},
            {'word': 'Sympathy', 'def': 'Feelings of pity and sorrow for someone else\'s misfortune.', 'ex': 'They demand deep sympathy from the audience for problems nobody cares about.'},
            {'word': 'Symmetric', 'def': 'Made up of exactly similar parts facing each other on an axis.', 'ex': 'Having a perfectly symmetric face apparently carries immense emotional weight.'},
            {'word': 'Boyband', 'def': 'A pop group composed of young attractive men, performing synchronized routines.', 'ex': 'The song parodies classic late 90s boyband dance moves and dramatic emotional poses.'},
            {'word': 'Trivial', 'def': 'Of little value or importance.', 'ex': 'Confusing a genuinely hard life with trivial aesthetic problems is hilarious satire.'},
            {'word': 'Validation', 'def': 'Recognition or affirmation that a person or their feelings are valid.', 'ex': 'Even incredibly attractive people crave constant external validation.'},
            {'word': 'Glamour', 'def': 'An attractive or exciting quality that makes certain people seem appealing.', 'ex': 'The glamour of being ridiculously hot comes with unexpected comedic downside.'}
        ],
        'r1': [
            ("In 'Fit Hot Guys Have Problems Too', three handsome men perform a 90s <strong>Boyband</strong> routine weeping over minor struggles. Why is this satire effective?", "★ What is a funny example of someone complaining about a problem that is actually a massive <strong>Privilege</strong>?"),
            ("The characters demand deep <strong>Sympathy</strong> because their lives are 'so hard'. Why is it hard to feel sorry for privileged people?", "★ How do you politely react when someone complains incessantly about a truly <strong>Trivial</strong> issue?"),
            ("How does the song mock the <strong>Superficial</strong> obsession with physical appearance in modern culture?", "★ Why do people place so much emphasis on <strong>Superficial</strong> traits when meeting others?"),
            ("Why is complaining that your face is too <strong>Symmetric</strong> or your abs are too cut completely <strong>Absurd</strong>?", "★ What is the most <strong>Absurd</strong> complaint you have ever heard someone utter with a straight face?"),
            ("The lyrics contrast genuine world problems with the <strong>Glamour</strong> and minor troubles of attractive people. What makes this contrast funny?", "★ Why is satire so effective at puncturing the inflated egos of the <strong>Glamour</strong> industry?"),
            ("How does the track show that even attractive people suffer from insecurity and a need for <strong>Validation</strong>?", "★ Why does external physical praise fail to build lasting internal self-esteem?"),
            ("The song uses 90s <strong>Boyband</strong> tropes like dramatic rain and synchronized water dances. How does music genre heighten comedy?", "★ What classic 90s or 00s <strong>Boyband</strong> video cliche do you find most hilarious?"),
            ("Why do people often assume that good-looking individuals have zero real emotional problems?", "★ Is 'pretty privilege' real in everyday life, or is it exaggerated by social media?"),
            ("How do the characters confuse <strong>Shallow</strong> vanity struggles with true human suffering?", "★ How can people cultivate perspective so they don\'t blow minor inconveniences out of proportion?"),
            ("Ultimately, what does 'Fit Hot Guys Have Problems Too' teach us about empathy and privilege?", "★ How can society balance genuine empathy with calling out unearned privilege?")
        ],
        'r2': [
            "Society holds extreme double standards regarding physical attractiveness, underestimating the real social struggles of handsome people. Let's debate this perspective.",
            "Parodying 90s <strong>Boyband</strong> routines is the ultimate format for mocking performative emotional drama. Share your thoughts.",
            "Complaining about <strong>Trivial</strong> aesthetic inconveniences completely destroys a person\'s credibility in real conversations. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Absurd Claims of Hardship & Overstated Struggles',
        'lang_desc': 'In the song <strong>Fit Hot Guys Have Problems Too</strong>, the boyband parody highlights <strong>Absurd Claims of Hardship & Overstated Complaints</strong> (e.g., <em>My life is so hard because I am too hot, people treat me like an object, it is tough being perfect</em>). This structure supports analyzing comedic complaints.',
        'lang_examples': [
            'My life is so difficult because people constantly stare at my symmetric face!',
            'It is genuinely exhausting having to maintain eight-pack abs every single day.',
            'They complained about how hard it is to be ridiculously attractive.'
        ],
        'note_items': [
            ("He complained about <span class=\"mistake-highlight\">his fit body problem</span>", "→", "He complained about his body issues", "(Use standard phrasing 'body issues'.)"),
            ("They are jealous <span class=\"mistake-highlight\">about his symmetry</span>", "→", "They are jealous of his symmetry", "(Use 'jealous of'.)"),
            ("They demand sympathy <span class=\"mistake-highlight\">for their shallow problems</span>", "→", "They demand sympathy for their shallow problems", "(Correct usage.)")
        ]
    }
}

def generate_vocab_html(vocab_list):
    html = '<div class="vocab-grid-10">\n<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo);">❤️ Core Concepts &amp; Feelings</h3>\n'
    for idx, v in enumerate(vocab_list):
        if idx == 5:
            html += '<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo);">🗣️ Life, Actions &amp; Connection</h3>\n'

        word = v['word'].replace("'", "&apos;")
        definition = v['def'].replace("'", "&apos;")
        example = v['ex'].replace("'", "&apos;")
        opp = v.get('opp', 'N/A').replace("'", "&apos;")

        # JS string escaping
        js_word = v['word'].replace("'", "\\'").replace('"', '&quot;')
        js_def = v['def'].replace("'", "\\'").replace('"', '&quot;')
        js_ex = v['ex'].replace("'", "\\'").replace('"', '&quot;')

        html += f'''<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">{word}</div>
<div class="vocab-def">{definition}</div>
<div class="vocab-example">{example}</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Opposite:</strong> <span class="vocab-opp-word" style="font-weight: 600;">{opp}</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:\'{js_word}\', definition:\'{js_def}\', example:\'{js_ex}\'}}, this)">+ Dictionary</button>
</div>\n'''
    html += '</div>'
    return html

def generate_discussion_html(r1_tuples, r2_list):
    html = '<div class="round-1" style="margin-bottom: 2rem;">\n<h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>\n'
    for q_main, q_pers in r1_tuples:
        html += f'''<div class="round-item"><div class="round-item-main">{q_main}</div>
<div class="round-item-personal">{q_pers}</div>
</div>\n'''
    html += '</div>\n<div class="round-2" style="margin-top: 2rem;">\n<h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>\n'
    for q_deb in r2_list:
        html += f'''<div class="round-item"><div class="round-item-main">{q_deb}</div>
</div>\n'''
    html += '</div>'
    return html

def generate_lang_focus_html(title, desc, examples):
    html = f'''<div style="background: var(--cream); border-left: 4px solid var(--indigo); padding: 1.5rem; border-radius: 0 16px 16px 0; margin-bottom: 1.5rem;">
<h3 style="margin-top: 0; font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--indigo);">{title}</h3>
<p style="font-size: 0.92rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 1rem;">{desc}</p>
<strong style="font-size: 0.85rem; text-transform: uppercase; color: var(--muted); letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">Let\'s Practise — Three Examples:</strong>
<ul style="margin: 0; padding-left: 1.2rem; color: var(--indigo);">\n'''
    for ex in examples:
        html += f'<li style="margin-bottom: 0.5rem; font-size: 0.9rem;">{ex}</li>\n'
    html += '</ul>\n</div>'
    return html

def generate_teacher_note_html(items):
    html = '<div class="mistake-body" style="display:block;">\n'
    for wrong, arrow, right, note in items:
        html += f'''<div class="mistake-item">
<span class="mistake-wrong">{wrong}</span>
<span class="mistake-arrow">{arrow}</span>
<span class="mistake-right">{right}</span>
<span class="mistake-note-text">{note}</span>
</div>\n'''
    html += '</div>'
    return html

def update_song_in_soup(soup, song_slug, data, is_standalone=False):
    id_suffix = data['id_suffix']

    v_id = 'vocabulary' if is_standalone else f'vocabulary-{id_suffix}'
    d_id = 'discussion' if is_standalone else f'discussion-{id_suffix}'
    lf_id = 'lang-focus' if is_standalone else f'lang-focus-{id_suffix}'
    tn_id = 's-mistakes' if is_standalone else f's-mistakes-{id_suffix}'

    # 1. Vocab
    v_block = soup.find(id=v_id)
    if v_block:
        v_body = v_block.find('div', class_='round-body')
        if v_body:
            v_body.clear()
            for child in list(BeautifulSoup(generate_vocab_html(data['vocab']), 'html.parser').children):
                v_body.append(child)

    # 2. Discussion
    d_block = soup.find(id=d_id)
    if d_block:
        d_body = d_block.find('div', class_='round-body')
        if d_body:
            checkpoints = [cp.extract() for cp in d_body.find_all('div', class_='lyrics-checkpoint')]
            d_body.clear()
            for child in list(BeautifulSoup(generate_discussion_html(data['r1'], data['r2']), 'html.parser').children):
                d_body.append(child)
            for cp in checkpoints:
                d_body.append(cp)

    # 3. Language Focus
    lf_block = soup.find(id=lf_id)
    if lf_block:
        lf_body = lf_block.find('div', class_='round-body')
        if lf_body:
            lf_body.clear()
            for child in list(BeautifulSoup(generate_lang_focus_html(data['lang_title'], data['lang_desc'], data['lang_examples']), 'html.parser').children):
                lf_body.append(child)

    # 4. Teacher Note
    tn_block = soup.find(id=tn_id)
    if tn_block:
        mb = tn_block.find('div', class_='mistake-body')
        if mb:
            mb.clear()
            new_tn_soup = BeautifulSoup(generate_teacher_note_html(data['note_items']), 'html.parser')
            inner_mb = new_tn_soup.find('div', class_='mistake-body')
            if inner_mb:
                for child in list(inner_mb.children):
                    mb.append(child)

def update_cxg_batch2():
    idx_path = os.path.join(CXG_DIR, 'index.html')
    with open(idx_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    for song_slug, data in CXG_BATCH2_DATA.items():
        print(f"Updating {song_slug} in index.html...")
        update_song_in_soup(soup, song_slug, data, is_standalone=False)

    with open(idx_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))

    for song_slug, data in CXG_BATCH2_DATA.items():
        standalone_path = os.path.join(CXG_DIR, f"{song_slug}.html")
        if os.path.exists(standalone_path):
            print(f"Updating standalone file {standalone_path}...")
            with open(standalone_path, 'r', encoding='utf-8') as f:
                s_soup = BeautifulSoup(f.read(), 'html.parser')
            update_song_in_soup(s_soup, song_slug, data, is_standalone=True)
            with open(standalone_path, 'w', encoding='utf-8') as f:
                f.write(str(s_soup))

    print("Batch 2 CXG Challenge files successfully updated with BeautifulSoup!")

if __name__ == '__main__':
    update_cxg_batch2()
