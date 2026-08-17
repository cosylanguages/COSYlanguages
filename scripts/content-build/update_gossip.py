import os
import re

GC_DIR = 'apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/gossip-challenge/'

GOSSIP_DATA = {
    'casualties-of-war': {
        'title': 'Casualties of War',
        'id_suffix': 'casualties-of-war',
        'theme_title': '❤️ Theme: Emotional Trauma, Conflict & Lingering Scars',
        'theme_bullets': ['Casualties', 'War', 'Scars', 'Personal reflection'],
        'vocab': [
            {'word': 'casualties', 'def': 'Persons killed or injured in a war or accident, or victims of emotional conflict.', 'ex': 'Broken promises and bitter arguments leave emotional casualties on both sides.', 'opp': 'Survivors'},
            {'word': 'war', 'def': 'A state of armed conflict between different countries or groups, or intense conflict.', 'ex': 'In the war of words during a breakup, no one truly wins.', 'opp': 'Peace'},
            {'word': 'battles', 'def': 'Fights between organized armed forces, or personal struggles.', 'ex': 'Fighting daily battles against self-doubt requires quiet endurance.', 'opp': 'Agreement'},
            {'word': 'scars', 'def': 'Marks left on the skin or mind after a wound or injury has healed.', 'ex': 'Emotional scars remain long after the physical wounds have vanished.', 'opp': 'Purity'},
            {'word': 'fighting', 'def': 'Engaging in violent struggle or conflict with an opponent.', 'ex': 'Fighting for a relationship is honorable, but knowing when to stop is essential.', 'opp': 'Yielding'},
            {'word': 'freedom', 'def': 'The power or right to act, speak, or think as one wants.', 'ex': 'True freedom comes when you release the pain of past conflicts.', 'opp': 'Captivity'},
            {'word': 'strength', 'def': 'The quality or state of being physically or mentally strong.', 'ex': 'It takes tremendous strength to forgive someone who broke your trust.', 'opp': 'Weakness'},
            {'word': 'pain', 'def': 'Highly unpleasant physical or emotional sensation caused by illness or injury.', 'ex': 'Acknowledging your emotional pain is the first step toward healing.', 'opp': 'Comfort'},
            {'word': 'survive', 'def': 'Continue to live or exist, especially in spite of danger or hardship.', 'ex': 'They managed to survive the emotional storm and rebuild their lives.', 'opp': 'Perish'},
            {'word': 'peace', 'def': 'Freedom from disturbance; tranquility and emotional harmony.', 'ex': 'Finding inner peace is more valuable than winning a bitter argument.', 'opp': 'Turmoil'},
        ],
        'r1': [
            ("In 'Casualties of War', Gossip uses military metaphors to describe heartbreak. How does the track frame emotional <strong>casualties</strong>?", "★ When was a time you felt like an emotional casualty after a harsh conflict or breakup?"),
            ("The song captures the devastation left behind by relentless interpersonal <strong>war</strong>. Why do verbal battles leave long-lasting marks?", "★ How do you de-escalate tension before a disagreement turns into a damaging verbal <strong>war</strong>?"),
            ("Gossip sings about fighting continuous personal <strong>battles</strong>. How do daily struggles shape our resilience?", "★ What is a quiet personal <strong>battle</strong> you fought recently that made you stronger?"),
            ("The lyrics highlight carrying hidden emotional <strong>scars</strong>. How do past painful memories affect future relationships?", "★ Do you view emotional <strong>scars</strong> as badges of survival or burdens to overcome?"),
            ("When two people are constantly <strong>fighting</strong>, when does staying together become more damaging than separating?", "★ How do you distinguish between constructive conflict and destructive <strong>fighting</strong>?"),
            ("Gossip contrasts ongoing conflict with the urgent need for personal <strong>freedom</strong>. Why is peace worth walking away for?", "★ What boundaries do you set to preserve your emotional <strong>freedom</strong> and well-being?"),
            ("The lead vocals radiate raw emotional <strong>strength</strong>. How does vulnerability contribute to genuine power?", "★ Who in your life exemplifies quiet <strong>strength</strong> during emotional crises?"),
            ("The song confronts raw heartbreak and internal <strong>pain</strong> directly. Why is processing sorrow essential for growth?", "★ What healthy habits help you work through emotional <strong>pain</strong> when it arises?"),
            ("Gossip delivers an anthem about what it takes to <strong>survive</strong> betrayal. How do people rebuild trust after hardship?", "★ What gave you the hope to <strong>survive</strong> a difficult period in your past?"),
            ("Ultimately, the track urges listeners to stop fighting and seek internal <strong>peace</strong>. How do you cultivate calm after conflict?", "★ What brings you the greatest sense of calm and <strong>peace</strong> in your daily life?")
        ],
        'r2': [
            "In personal relationships, lingering emotional <strong>scars</strong> show that some conflicts leave permanent <strong>casualties</strong> that time cannot heal. Let's debate this perspective.",
            "Choosing to walk away from constant <strong>fighting</strong> to protect your inner <strong>peace</strong> is an act of courage, not surrender. Share your thoughts.",
            "Gossip's work demonstrates that true <strong>strength</strong> lies in confronting emotional <strong>pain</strong> rather than masking it behind stoicism. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Present Participles as Durative Modifiers',
        'lang_desc': 'In the song <strong>Casualties Of War</strong>, the theme of lingering heartbreak highlights <strong>Present Participles as Durative Modifiers</strong> (e.g., <em>carrying the scars, fighting through pain, enduring conflict</em>). This structure supports describing ongoing emotional states.',
        'lang_examples': [
            'We are casualties of war, carrying the scars of past betrayals.',
            'She moved forward, enduring pain while building a new life.',
            'They stood side by side, fighting through uncertainty with courage.'
        ],
        'final_challenge': 'Reconciliation or Reflection: Role-play a conversation between two former partners meeting 5 years after a bitter emotional conflict to discuss the casualties and lessons learned.',
        'note_items': [
            ("They are casualties <span class=\"mistake-highlight\">from the war</span>", "→", "They are casualties of war", "(Use 'of war' in the set phrase 'casualties of war'.)"),
            ("She is carrying scars <span class=\"mistake-highlight\">on her mind</span>", "→", "She is carrying scars in her mind", "(Use 'in her mind' or 'on her heart/skin' appropriately.)"),
            ("It is hard to survive <span class=\"mistake-highlight\">to such betrayal</span>", "→", "It is hard to survive such betrayal", "(Do not insert 'to' after the transitive verb 'survive'.)")
        ]
    },

    'heavy-cross': {
        'title': 'Heavy Cross',
        'id_suffix': 'heavy-cross',
        'theme_title': '❤️ Theme: A Cruel World & Carrying Your Own Heavy Cross',
        'theme_bullets': ['Cruel', 'Heavy', 'Cross', 'Personal reflection'],
        'vocab': [
            {'word': 'cruel', 'def': 'Wilfully causing pain or suffering to others, or unfeeling.', 'ex': 'Living in a cruel world requires immense inner strength and solidarity.', 'opp': 'Kind'},
            {'word': 'heavy', 'def': 'Of great weight, or difficult to bear emotionally.', 'ex': 'Carrying a heavy cross alone can exhaust even the strongest spirit.', 'opp': 'Light'},
            {'word': 'cross', 'def': 'A burden or trial that one must endure in life.', 'ex': 'Everyone has their own heavy cross to carry through turbulent times.', 'opp': 'Blessing'},
            {'word': 'rules', 'def': 'Established regulations or principles governing conduct.', 'ex': 'They broke society\'s unfair rules to stand firm for what was right.', 'opp': 'Anarchy'},
            {'word': 'choice', 'def': 'An act of selecting or choosing between two or more possibilities.', 'ex': 'Standing up for yourself is a brave choice when facing oppression.', 'opp': 'Coercion'},
            {'word': 'standing', 'def': 'Remaining upright or maintaining a firm position despite pressure.', 'ex': 'Standing tall in the face of judgment shows genuine courage.', 'opp': 'Falling'},
            {'word': 'shame', 'def': 'A painful feeling of humiliation caused by foolish or wrong behavior.', 'ex': 'Refusing to feel shame about who you are is the ultimate act of liberation.', 'opp': 'Pride'},
            {'word': 'reason', 'def': 'A cause, explanation, or justification for an action or event.', 'ex': 'She needed no outside reason to justify living life on her own terms.', 'opp': 'Caprice'},
            {'word': 'trouble', 'def': 'Difficulty, distress, or problems that cause worry.', 'ex': 'Navigating through trouble builds resilience and deepens character.', 'opp': 'Peace'},
            {'word': 'desire', 'def': 'A strong feeling of wanting to have something or wishing for something.', 'ex': 'Her fierce desire to overcome adversity kept her moving forward.', 'opp': 'Apathy'},
        ],
        'r1': [
            ("When Gossip sings about living in a <strong>cruel</strong> world, how does the song frame the struggle between societal cruelty and personal resilience?", "★ When was a time you had to stay strong in an environment that felt cold or <strong>cruel</strong>?"),
            ("The metaphor of a <strong>heavy</strong> burden runs throughout 'Heavy Cross'. How does the track suggest we carry emotional weight without collapsing?", "★ What is a <strong>heavy</strong> responsibility or worry that you are currently learning to manage?"),
            ("How does 'Heavy Cross' transform the symbolic <strong>cross</strong> from an emblem of suffering into a monument of endurance and pride?", "★ Do you believe everyone carries their own metaphorical <strong>cross</strong>, or are some burdens purely systemic?"),
            ("Gossip challenges the social <strong>rules</strong> that dictate who belongs and who is excluded. How does the song encourage breaking conformist norms?", "★ Which social or cultural <strong>rules</strong> in your community do you think are most in need of updating?"),
            ("The lyrics emphasize that staying true to oneself is an active <strong>choice</strong> rather than passive acceptance. Why is this distinction crucial?", "★ What was a difficult personal <strong>choice</strong> you made that ultimately made you stronger?"),
            ("In what ways does <strong>standing</strong> firm against prejudice require both emotional vulnerability and physical courage in 'Heavy Cross'?", "★ How do you react when you see someone <strong>standing</strong> up alone for what they believe in?"),
            ("Gossip rejects the notion that marginalized individuals should feel <strong>shame</strong> for their identity. How does the song dismantle judgment?", "★ What advice would you give to someone struggling with unearned <strong>shame</strong> or self-doubt?"),
            ("When faced with hardship, finding a clear <strong>reason</strong> to persevere becomes vital. How does 'Heavy Cross' inspire purpose?", "★ What is the main <strong>reason</strong> or motivation that keeps you grounded during challenging times?"),
            ("How does 'Heavy Cross' address the inevitability of <strong>trouble</strong> in life while maintaining an empowering, uplifting tone?", "★ What strategies help you keep your calm when unexpected <strong>trouble</strong> arises?"),
            ("The song captures an unyielding <strong>desire</strong> for freedom and self-determination. How does passion fuel personal triumphs?", "★ What is a goal or <strong>desire</strong> that you are passionately pursuing right now?")
        ],
        'r2': [
            "The central theme of carrying a <strong>heavy</strong> <strong>cross</strong> in a <strong>cruel</strong> world shows that true strength is forged through adversity rather than comfort. Let's debate this perspective.",
            "Refusing to comply with societal <strong>rules</strong> and rejecting unearned <strong>shame</strong> is the only way an individual can achieve authentic personal liberation. Share your thoughts.",
            "Gossip's work demonstrates that making the <strong>choice</strong> to stand firm together creates a collective force capable of overcoming systemic <strong>trouble</strong>. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Compound Adjectives for Emotional Burdens',
        'lang_desc': 'In the song <strong>Heavy Cross</strong>, the theme of carrying heavy burdens highlights the use of <strong>Compound Adjectives for Emotional Burdens</strong> (e.g., <em>heavy-hearted, battle-tested, soul-crushing</em>). This structure supports describing emotional resilience and endurance.',
        'lang_examples': [
            'She remained battle-tested despite the heavy-hearted news.',
            'Carrying a soul-crushing responsibility requires a strong support network.',
            'They emerged from the storm with a battle-hardened determination.'
        ],
        'final_challenge': 'Carrying the Burden: In pairs, describe a demanding project or life transition you had to carry through a cold or challenging environment, and how you found the strength to persevere.',
        'note_items': [
            ("She carries a <span class=\"mistake-highlight\">heavy cross of</span> her shoulders", "→", "She carries a heavy cross on her shoulders", "(Use 'on' after 'carries a burden/cross' to indicate physical or figurative placement.)"),
            ("They are standing firm <span class=\"mistake-highlight\">against of</span> the unfair rules", "→", "They are standing firm against the unfair rules", "(Do not insert 'of' after the preposition 'against'.)"),
            ("He made the choice <span class=\"mistake-highlight\">for to stay</span> true to himself", "→", "He made the choice to stay true to himself", "(Use 'to + infinitive' directly after 'choice' without 'for'.)")
        ]
    },

    'move-in-the-right-direction': {
        'title': 'Move in the Right Direction',
        'id_suffix': 'move-in-the-right-direction',
        'theme_title': '❤️ Theme: Overcoming Regret & Moving Forward',
        'theme_bullets': ['Motivation', 'Direction', 'Tears', 'Personal reflection'],
        'vocab': [
            {'word': 'motivation', 'def': 'The reason or desire to act or move toward a specific goal.', 'ex': 'Finding inner motivation helps overcome past mistakes and momentum loss.', 'opp': 'Apathy'},
            {'word': 'direction', 'def': 'The course along which someone or something moves.', 'ex': 'Choosing to move in the right direction requires letting go of past regrets.', 'opp': 'Aimlessness'},
            {'word': 'tears', 'def': 'Drops of clear salty liquid secreted by glands in the eye, drawn by sorrow or relief.', 'ex': 'Wiping away her tears was the first step toward reclaiming her peace.', 'opp': 'Laughter'},
            {'word': 'fears', 'def': 'An unpleasant emotion caused by the belief that someone or something is dangerous.', 'ex': 'Facing your deepest fears allows you to step confidently into the future.', 'opp': 'Confidence'},
            {'word': 'reminiscing', 'def': 'Indulging in enjoyable or painful recollection of past events.', 'ex': 'Reminiscing about old mistakes can trap you if you do not focus on today.', 'opp': 'Forgetting'},
            {'word': 'decision', 'def': 'A conclusion or resolution reached after consideration.', 'ex': 'Making a firm decision to move forward changes everything.', 'opp': 'Indecision'},
            {'word': 'progress', 'def': 'Forward or onward movement toward a destination or goal.', 'ex': 'Every small step forward counts as genuine progress.', 'opp': 'Regression'},
            {'word': 'future', 'def': 'The time or a period of time following the moment of speaking or writing.', 'ex': 'The future belongs to those who learn from the past without being held back by it.', 'opp': 'Past'},
            {'word': 'courage', 'def': 'The ability to do something that frightens one; bravery.', 'ex': 'It takes courage to walk away from situations that no longer serve you.', 'opp': 'Cowardice'},
            {'word': 'healing', 'def': 'The process of making or becoming sound or healthy again.', 'ex': 'Emotional healing begins when you forgive yourself for past errors.', 'opp': 'Wounding'},
        ],
        'r1': [
            ("In 'Move in the Right Direction', Gossip sings about breaking free from stagnation. How does the song define true <strong>motivation</strong>?", "★ What is your primary source of personal <strong>motivation</strong> when you feel stuck in a rut?"),
            ("The lyrics emphasize taking a new <strong>direction</strong> even when the future seems uncertain. Why is momentum so important?", "★ How do you evaluate whether your career or personal life is heading in the right <strong>direction</strong>?"),
            ("Gossip acknowledges that shed <strong>tears</strong> are part of the journey, not a sign of weakness. How does crying facilitate recovery?", "★ Do you view expressing <strong>tears</strong> as a necessary step toward emotional clarity?"),
            ("Confronting personal <strong>fears</strong> is a central theme in the song. How does Gossip inspire listeners to face hesitation?", "★ What strategy has helped you overcome one of your major personal <strong>fears</strong>?"),
            ("The speaker warns against constant <strong>reminiscing</strong> over past heartbreaks. Why can looking back impede growth?", "★ How do you balance fond <strong>reminiscing</strong> with staying focused on your present goals?"),
            ("Taking a definitive <strong>decision</strong> to change requires courage. How does 'Move in the Right Direction' capture this pivotal moment?", "★ What was a life-changing <strong>decision</strong> you made that required stepping out of your comfort zone?"),
            ("How does the energetic disco-pop beat reinforce the sense of optimistic <strong>progress</strong> throughout the song?", "★ How do you measure personal <strong>progress</strong> when working toward a long-term dream?"),
            ("The lyrics encourage looking toward a brighter <strong>future</strong> rather than dwelling on old regrets. How do you cultivate hope?", "★ What are you most excited about when you think about your <strong>future</strong>?"),
            ("It takes immense <strong>courage</strong> to forgive oneself and start over. How does the track model self-compassion?", "★ Who in your life exemplifies quiet <strong>courage</strong> during difficult transitions?"),
            ("How does the process of emotional <strong>healing</strong> unfold when you actively choose positive movement over passive sorrow?", "★ What habits or activities contribute most to your ongoing mental <strong>healing</strong>?")
        ],
        'r2': [
            "Constantly <strong>reminiscing</strong> about past errors prevents genuine emotional <strong>healing</strong> and halts personal <strong>progress</strong>. Let's debate this perspective.",
            "True <strong>motivation</strong> cannot be found externally; it requires the <strong>courage</strong> to face internal <strong>fears</strong> and make tough choices. Share your thoughts.",
            "Choosing to move in a new <strong>direction</strong> despite uncertainty is the single most empowering <strong>decision</strong> an individual can make. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Directional & Progressive Phrasal Verbs',
        'lang_desc': 'In the song <strong>Move in the Right Direction</strong>, the theme of forward movement highlights <strong>Directional & Progressive Phrasal Verbs</strong> (e.g., <em>move on, step forward, break away, carry on</em>). This structure supports discussing personal growth and future plans.',
        'lang_examples': [
            'It is time to break away from old habits and move on.',
            'She stepped forward to take charge of her own future.',
            'Despite the setbacks, they decided to carry on with confidence.'
        ],
        'final_challenge': 'The Forward Blueprint: Formulate a 3-step action plan for a friend feeling stuck in past regrets to help them let go of tears and move confidently in the right direction.',
        'note_items': [
            ("She is moving <span class=\"mistake-highlight\">to the right direction</span>", "→", "She is moving in the right direction", "(Use the preposition 'in' with 'direction' when indicating general course or alignment.)"),
            ("He stopped <span class=\"mistake-highlight\">to reminisce of</span> his old mistakes", "→", "He stopped reminiscing about his old mistakes", "(Use 'reminisce about' or the gerund form after 'stopped' when halting an ongoing habit.)"),
            ("It gave her motivation <span class=\"mistake-highlight\">for continue</span> pushing forward", "→", "It gave her motivation to continue pushing forward", "(Use 'to + infinitive' after the noun 'motivation'.)")
        ]
    },

    'standing-in-the-way-of-control': {
        'title': 'Standing in the Way of Control',
        'id_suffix': 'standing-in-the-way-of-control',
        'theme_title': '❤️ Theme: Resistance, Body Autonomy & Fighting Oppression',
        'theme_bullets': ['Control', 'Survive', 'Truth', 'Personal reflection'],
        'vocab': [
            {'word': 'control', 'def': 'The power to influence or direct people\'s behavior or the course of events.', 'ex': 'Standing in the way of control means demanding autonomy over your own body and future.', 'opp': 'Subjection'},
            {'word': 'survive', 'def': 'To continue to live or exist, especially in spite of danger or hardship.', 'ex': 'We will survive even when institutional systems try to suppress our rights.', 'opp': 'Perish'},
            {'word': 'truth', 'def': 'The quality or state of being true; real facts or reality.', 'ex': 'Speaking truth to power is the cornerstone of effective civil rights movement.', 'opp': 'Falsehood'},
            {'word': 'friends', 'def': 'People with whom one has a bond of mutual affection and solidarity.', 'ex': 'Leaning on trusted friends provides strength when resisting injustice.', 'opp': 'Enemies'},
            {'word': 'trying', 'def': 'Making an effort to achieve something difficult; difficult or annoying.', 'ex': 'Keep trying even when victory seems far out of reach.', 'opp': 'Surrendering'},
            {'word': 'resistance', 'def': 'The refusal to accept or comply with something; the attempt to prevent something.', 'ex': 'Organized resistance can dismantle oppressive laws and norms.', 'opp': 'Compliance'},
            {'word': 'autonomy', 'def': 'The right or condition of self-government and personal independence.', 'ex': 'Bodily autonomy is a fundamental human right that must be defended.', 'opp': 'Dependency'},
            {'word': 'freedom', 'def': 'The power or right to act, speak, or think as one wants without hindrance.', 'ex': 'Freedom is not given freely; it is fought for and maintained by brave people.', 'opp': 'Slavery'},
            {'word': 'unity', 'def': 'The state of being united or joined as a whole in purpose.', 'ex': 'Demonstrating unity gives marginalized groups a powerful collective voice.', 'opp': 'Division'},
            {'word': 'justice', 'def': 'Just behavior or treatment; fairness in society and law.', 'ex': 'Demanding justice requires persistent advocacy and community action.', 'opp': 'Injustice'},
        ],
        'r1': [
            ("Written in response to proposed constitutional bans on marriage equality, how does 'Standing in the Way of Control' frame the fight against state <strong>control</strong>?", "★ What comes to mind when you hear the phrase 'standing in the way of <strong>control</strong>'?"),
            ("Gossip sings 'it's the only way to <strong>survive</strong>'. How does the anthem reframe survival as an active, radical act of defiance?", "★ What daily practices help you stay resilient and <strong>survive</strong> during stressful political or social times?"),
            ("The lyrics demand that we live our authentic <strong>truth</strong> despite laws designed to silence us. Why is living openly so potent?", "★ Why is standing by your personal <strong>truth</strong> sometimes difficult in conventional settings?"),
            ("Gossip highlights the role of <strong>friends</strong> and allies in building social movements. How does community support sustain activism?", "★ How have your <strong>friends</strong> helped you stand up for your rights or values in the past?"),
            ("The relentless line 'your heart keeps <strong>trying</strong>' underscores perseverance. Why is stamina vital for social change?", "★ What is a cause or goal where you refuse to give up, no matter how hard <strong>trying</strong> becomes?"),
            ("How does the ferocious dance-punk instrumentation reflect the urgency of political <strong>resistance</strong> in this song?", "★ What forms of peaceful <strong>resistance</strong> do you find most inspiring or effective today?"),
            ("The song is a fiery declaration of personal <strong>autonomy</strong>. Why is self-determination essential for human dignity?", "★ What boundaries do you set to protect your personal space and bodily <strong>autonomy</strong>?"),
            ("Gossip's anthem connects individual liberation to collective <strong>freedom</strong>. How are our freedoms interconnected?", "★ What does true personal <strong>freedom</strong> mean to you in your day-to-day life?"),
            ("How does solidarity and <strong>unity</strong> among diverse groups amplify the power of a movement?", "★ How can communities build genuine <strong>unity</strong> when facing outside opposition?"),
            ("The track demands equal <strong>justice</strong> for all, regardless of identity. How does music help advance civil rights?", "★ What role can art and music play in the ongoing fight for social <strong>justice</strong>?")
        ],
        'r2': [
            "Standing up against institutional <strong>control</strong> and defending bodily <strong>autonomy</strong> is an obligation for every conscious citizen. Let's debate this perspective.",
            "Without genuine community <strong>unity</strong> and strong bonds among <strong>friends</strong>, individual acts of <strong>resistance</strong> cannot achieve lasting reform. Share your thoughts.",
            "Music and culture are far more effective tools for securing civil <strong>justice</strong> and <strong>freedom</strong> than traditional political lobbying. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Prepositional Phrases of Opposition (*against / in the way of*)',
        'lang_desc': 'In the song <strong>Standing in the Way of Control</strong>, the theme of resistance highlights <strong>Prepositional Phrases of Opposition</strong> (e.g., <em>standing against, in the way of, in defiance of</em>). This structure supports expressing resistance and standing up for rights.',
        'lang_examples': [
            'They stood in the way of oppressive legislation.',
            'She spoke out in defiance of unjust social expectations.',
            'We must stand together against discrimination.'
        ],
        'final_challenge': 'Defying Control: Role-play a dialogue where someone in authority tries to enforce unfair, rigid rules, and you politely yet firmly stand in the way of their control to defend bodily autonomy.',
        'note_items': [
            ("They are standing <span class=\"mistake-highlight\">in the way for control</span>", "→", "They are standing in the way of control", "(Use 'in the way of' when indicating an obstacle or resistance to something.)"),
            ("It is the only way <span class=\"mistake-highlight\">for survive</span> in this system", "→", "It is the only way to survive in this system", "(Use 'to + infinitive' after 'way'.)"),
            ("They fought <span class=\"mistake-highlight\">about their autonomy</span>", "→", "They fought for their autonomy", "(Use 'fight for' when advocating for a right, cause, or freedom.)")
        ]
    },

    'crazy-again': {
        'title': 'Crazy Again',
        'id_suffix': 'crazy-again',
        'theme_title': '❤️ Theme: Emotional Unpredictability & Re-embracing Passion',
        'theme_bullets': ['Romance', 'Savior', 'Crazy', 'Personal reflection'],
        'vocab': [
            {'word': 'romance', 'def': 'A feeling of excitement and mystery associated with love.', 'ex': 'Re-entering the realm of romance after heartbreak takes vulnerability.', 'opp': 'Pragmatism'},
            {'word': 'savior', 'def': 'A person who saves someone or something from danger or difficulty.', 'ex': 'Looking for a savior in a partner can create codependency.', 'opp': 'Destroyer'},
            {'word': 'crazy', 'def': 'Extremely enthusiastic, passionate, or wildly unpredictable.', 'ex': 'Going crazy again over someone brings back both thrill and terror.', 'opp': 'Sane'},
            {'word': 'obligation', 'def': 'An act or course of action to which a person is morally or legally bound.', 'ex': 'Love should feel like a joy, not a burdensome obligation.', 'opp': 'Option'},
            {'word': 'fragile', 'def': 'Easily broken, damaged, or emotionally vulnerable.', 'ex': 'Newly formed trust can feel fragile, requiring tender care.', 'opp': 'Robust'},
            {'word': 'passion', 'def': 'Barely controllable emotion or intense enthusiasm.', 'ex': 'Rekindling your inner passion makes life feel vivid and real.', 'opp': 'Indifference'},
            {'word': 'vulnerability', 'def': 'The quality or state of being exposed to emotional harm.', 'ex': 'Embracing vulnerability is necessary for deep connection.', 'opp': 'Invulnerability'},
            {'word': 'predictable', 'def': 'Able to be predicted; consistent and expected.', 'ex': 'A predictable routine feels safe, but passion craves surprise.', 'opp': 'Unpredictable'},
            {'word': 'spontaneity', 'def': 'The condition of being spontaneous; voluntary or natural impulse.', 'ex': 'Adding spontaneity keeps relationships fresh and exciting.', 'opp': 'Calculatedness'},
            {'word': 'surrender', 'def': 'The act of yielding to an emotion, force, or person.', 'ex': 'To feel intense love, one must sometimes surrender control.', 'opp': 'Resistance'},
        ],
        'r1': [
            ("In 'Crazy Again', Gossip explores falling head-over-heels into love after sworn caution. How does the song depict <strong>romance</strong>?", "★ Do you view intense <strong>romance</strong> as something to approach cautiously or dive into completely?"),
            ("The lyrics question whether a new partner is a true <strong>savior</strong> or just another emotional risk. Why is self-reliance vital?", "★ Why can expecting a partner to be your emotional <strong>savior</strong> lead to disappointment?"),
            ("When Gossip sings about feeling <strong>crazy</strong> again, how does the track capture the exhilarating chaos of new attraction?", "★ What is the 'craziest' or most spontaneous thing you have ever done for love or passion?"),
            ("Gossip contrasts authentic feeling with forced social <strong>obligation</strong>. How does duty kill romantic spark?", "★ How do you distinguish between doing something out of genuine love versus mere <strong>obligation</strong>?"),
            ("The song acknowledges that hearts are <strong>fragile</strong> after past wounds. How do people protect themselves while staying open?", "★ What helps you rebuild confidence when feeling emotionally <strong>fragile</strong>?"),
            ("How does 'Crazy Again' convey the raw, unfiltered <strong>passion</strong> that erupts when guardrails fall?", "★ In what area of your life do you express your deepest <strong>passion</strong>?"),
            ("Surrendering to new feelings requires accepting total <strong>vulnerability</strong>. Why is this both scary and beautiful?", "★ Do you find it easy or difficult to show emotional <strong>vulnerability</strong> to people you care about?"),
            ("How does the track contrast a calm, <strong>predictable</strong> life with the wild thrill of unexpected love?", "★ Do you prefer a steady, <strong>predictable</strong> daily rhythm or frequent spontaneous twists?"),
            ("How does Gossip use musical dynamics to mirror the rush of <strong>spontaneity</strong> when emotions overflow?", "★ When was the last time you embraced total <strong>spontaneity</strong> in your schedule?"),
            ("In what ways does 'Crazy Again' suggest that to truly love, one must eventually <strong>surrender</strong> their defense mechanisms?", "★ What does emotional <strong>surrender</strong> mean to you in the context of close relationships?")
        ],
        'r2': [
            "Falling <strong>crazy</strong> in love again requires accepting total emotional <strong>vulnerability</strong> and risking heartbreak. Let's debate this perspective.",
            "Expecting a romantic partner to act as your <strong>savior</strong> ruins true <strong>romance</strong> and replaces love with heavy <strong>obligation</strong>. Share your thoughts.",
            "Embracing <strong>spontaneity</strong> and unexpected <strong>passion</strong> is essential for living a fulfilling life, even if it disrupts a <strong>predictable</strong> routine. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Adverbs of Frequency & Gradable Intensity',
        'lang_desc': 'In the song <strong>Crazy Again</strong>, the theme of recurring emotional intensity highlights <strong>Adverbs of Frequency & Gradable Intensity</strong> (e.g., <em>wildly, once again, completely, unexpectedly</em>). This structure supports expressing fluctuating emotions.',
        'lang_examples': [
            'She found herself unexpectedly falling in love once again.',
            'He was wildly passionate about his creative pursuits.',
            'They were completely overwhelmed by the emotional rush.'
        ],
        'final_challenge': 'Embracing Spontaneity: Share a personal story of a time you took a wild emotional risk or jumped headfirst into a passionate pursuit, feeling \'crazy again\'.',
        'note_items': [
            ("She is going crazy <span class=\"mistake-highlight\">for again</span>", "→", "She is going crazy again", "(Place the adverb 'again' directly after the adjective or verb phrase.)"),
            ("He expects her to be his <span class=\"mistake-highlight\">savior for all</span> his problems", "→", "He expects her to be his savior from all his problems", "(Use 'savior from' or 'savior for' appropriately without extra prepositions.)"),
            ("Fulfilling feelings out of <span class=\"mistake-highlight\">the obligation</span> feels heavy", "→", "Fulfilling feelings out of obligation feels heavy", "(Omit the definite article 'the' in the fixed idiom 'out of obligation'.)")
        ]
    },

    'get-a-job': {
        'title': 'Get a Job',
        'id_suffix': 'get-a-job',
        'theme_title': '❤️ Theme: Economic Survival, Grind Culture & Social Satire',
        'theme_bullets': ['Bills', 'Grind', 'Work', 'Personal reflection'],
        'vocab': [
            {'word': 'bills', 'def': 'Printed or written statements of the money owed for goods or services.', 'ex': 'Stacking bills on the kitchen table is a constant reminder of financial pressure.', 'opp': 'Income'},
            {'word': 'working', 'def': 'Engaged in paid physical or mental effort.', 'ex': 'Working round the clock can leave little time for actual living.', 'opp': 'Idle'},
            {'word': 'job', 'def': 'A paid position of regular employment.', 'ex': 'Having a job provides income, but it shouldn\'t define your entire worth.', 'opp': 'Unemployment'},
            {'word': 'money', 'def': 'A current medium of exchange in the form of coins and banknotes.', 'ex': 'Chasing money without purpose often leads to corporate burnout.', 'opp': 'Debt'},
            {'word': 'grind', 'def': 'Hard, dull, or tiring work routine.', 'ex': 'Escaping the daily grind requires conscious effort and financial planning.', 'opp': 'Leisure'},
            {'word': 'living', 'def': 'The pursuit of a lifestyle or securing the necessities of life.', 'ex': 'Making a living is different from actually making a life.', 'opp': 'Dying'},
            {'word': 'alarm', 'def': 'A device that wakes people or alerts them to time.', 'ex': 'The morning alarm signals another day in the economic rat race.', 'opp': 'Silence'},
            {'word': 'clock', 'def': 'An instrument for measuring and showing time, often dictating shift work.', 'ex': 'Punching the clock every morning can feel soul-draining.', 'opp': 'Timelessness'},
            {'word': 'facing', 'def': 'Confronting or dealing with a difficult situation directly.', 'ex': 'Facing financial realities requires honesty and practical strategy.', 'opp': 'Avoiding'},
            {'word': 'free', 'def': 'Not under the control of another; enjoying personal liberty.', 'ex': 'True independence means feeling free from constant financial anxiety.', 'opp': 'Enslaved'},
        ],
        'r1': [
            ("In 'Get a Job', Gossip offers a sharp critique of modern work culture. How does the song depict the stress of monthly <strong>bills</strong>?", "★ How do you manage the mental weight of recurring financial obligations and <strong>bills</strong>?"),
            ("The track satirizes the endless routine of <strong>working</strong> just to survive. Where is the line between healthy work and overwork?", "★ What boundaries do you set to ensure <strong>working</strong> does not consume your personal life?"),
            ("When society tells someone to simply 'get a <strong>job</strong>', what systemic economic hurdles does that advice ignore?", "★ How has your definition of a meaningful <strong>job</strong> evolved throughout your career?"),
            ("Gossip explores how the obsession with <strong>money</strong> distorts human relationships and self-worth. How can we resist this mindset?", "★ What is something priceless in your life that <strong>money</strong> can never buy?"),
            ("The song critiques the glorified 'hustle' and daily <strong>grind</strong>. Why has overwork become a status symbol in modern culture?", "★ How do you step back and recharge when the daily <strong>grind</strong> feels overwhelming?"),
            ("Gossip contrasts merely earning a <strong>living</strong> with genuinely enjoying life. What does it mean to truly live?", "★ What activities make you feel most alive outside of your professional obligations?"),
            ("The jarring morning <strong>alarm</strong> symbolizes societal conditioning. How does strict time discipline shape our days?", "★ How does your morning routine set the tone for your independence and well-being?"),
            ("Watching the <strong>clock</strong> during a monotonous shift is a universal experience in the song. How do you maintain creativity at work?", "★ What helps you stay engaged when tasks feel repetitive and time-bound?"),
            ("Gossip calls out those who avoid <strong>facing</strong> harsh economic truths. Why is economic literacy crucial for empowerment?", "★ What was a tough financial truth you had to face, and how did you navigate it?"),
            ("Ultimately, the song asks what it means to be truly <strong>free</strong> in a capital-driven world. Can one achieve freedom within the system?", "★ What does personal and financial <strong>freedom</strong> look like in your ideal future?")
        ],
        'r2': [
            "Glorifying the daily <strong>grind</strong> and working non-stop for <strong>money</strong> is a toxic cultural trend that destroys physical and mental health. Let's debate this perspective.",
            "Modern society prioritizes making a <strong>living</strong> over actual quality of life, reducing human value to one's <strong>job</strong> and income. Share your thoughts.",
            "True personal <strong>freedom</strong> is impossible until an individual achieves complete independence from systemic financial pressure and <strong>bills</strong>. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Idioms of Labor, Effort & Economic Strain',
        'lang_desc': 'In the song <strong>Get a Job</strong>, the social satire on labor highlights <strong>Idioms of Labor, Effort & Economic Strain</strong> (e.g., <em>pay the bills, make ends meet, punch the clock, keep the wolf from the door</em>). This structure supports discussing employment and economy.',
        'lang_examples': [
            'Working two shifts just to make ends meet is exhausting.',
            'She punches the clock every morning at eight sharply.',
            'They are striving hard to pay the bills and build savings.'
        ],
        'final_challenge': 'Satirical Career Counseling: Create a humorous or satirical pitch advising a fictional burnt-out worker how to balance paying the bills with actually enjoying life outside the daily grind.',
        'note_items': [
            ("He is working hard <span class=\"mistake-highlight\">for make ends meet</span>", "→", "He is working hard to make ends meet", "(Use 'to + infinitive' to express purpose after 'working hard'.)"),
            ("She is worried <span class=\"mistake-highlight\">about her bills payments</span>", "→", "She is worried about paying her bills", "(Use 'paying her bills' or 'her bill payments' cleanly without awkward phrasing.)"),
            ("They want to be free <span class=\"mistake-highlight\">from the daily grinding</span>", "→", "They want to be free from the daily grind", "(Use the noun phrase 'the daily grind' rather than the gerund 'grinding'.)")
        ]
    },

    'men-in-love': {
        'title': 'Men In Love',
        'id_suffix': 'men-in-love',
        'theme_title': '❤️ Theme: Joyful Queer Romance, Public Affection & Unapologetic Pride',
        'theme_bullets': ['Romance', 'Pride', 'Love', 'Personal reflection'],
        'vocab': [
            {'word': 'romance', 'def': 'A feeling of excitement, affection, and mystery associated with love.', 'ex': 'Celebrating visible romance between men breaks down centuries of social stigma.', 'opp': 'Apathy'},
            {'word': 'passion', 'def': 'An intense, driving feeling or enthusiasm for love and life.', 'ex': 'Their shared passion radiated joy across the crowded dance floor.', 'opp': 'Coldness'},
            {'word': 'devotion', 'def': 'Love, loyalty, or enthusiasm for a person or cause.', 'ex': 'True devotion shines brightly when couples hold hands freely in public.', 'opp': 'Disloyalty'},
            {'word': 'sweet', 'def': 'Delightful, charming, or endearing in feelings and action.', 'ex': 'Watching a sweet moment of affection brings warmth to everyone around.', 'opp': 'Bitter'},
            {'word': 'desire', 'def': 'A strong feeling of affection, attraction, or wanting.', 'ex': 'Expressing genuine desire openly is an empowering act of pride.', 'opp': 'Repulsion'},
            {'word': 'street', 'def': 'A public road in a city or town, a venue for public life.', 'ex': 'Holding hands on the open street asserts the right to exist without fear.', 'opp': 'Privacy'},
            {'word': 'rhythm', 'def': 'A strong, regular, repeated pattern of movement or sound.', 'ex': 'Dancing to the upbeat rhythm of the song filled the crowd with pure happiness.', 'opp': 'Discord'},
            {'word': 'hands', 'def': 'The end part of a person\'s arm, held in partnership.', 'ex': 'Interlocking hands in public is a simple yet profound statement of love.', 'opp': 'Separation'},
            {'word': 'freedom', 'def': 'The power or right to act, speak, or love as one wants.', 'ex': 'The freedom to love who you choose is a fundamental human rights triumph.', 'opp': 'Oppression'},
            {'word': 'dancing', 'def': 'Moving rhythmically to music, expressing joy and freedom.', 'ex': 'Dancing openly together in the club celebrated their community and pride.', 'opp': 'Stillness'},
        ],
        'r1': [
            ("In 'Men In Love', Gossip delivers an upbeat, joyful anthem celebrating queer affection. How does the track frame visible <strong>romance</strong>?", "★ Why is celebrating visible, joyful <strong>romance</strong> so important for inclusive communities?"),
            ("The song radiates exuberant <strong>passion</strong> without apology or hesitation. How does music help normalize public expressions of love?", "★ How does seeing genuine <strong>passion</strong> and happiness in others uplift your own mood?"),
            ("Gossip honors the quiet strength and <strong>devotion</strong> shared between partners. How does holding space for love build resilience?", "★ What does authentic <strong>devotion</strong> look like in everyday, healthy relationships?"),
            ("The lyrics describe <strong>sweet</strong>, everyday moments of connection. Why are simple gestures of love so powerful?", "★ What is a <strong>sweet</strong> gesture of affection that always makes you smile?"),
            ("By expressing open <strong>desire</strong> on the dance floor, how does the song reclaim joy from societal taboo?", "★ Why is feeling confident in your feelings and <strong>desire</strong> essential for self-acceptance?"),
            ("Holding hands on the city <strong>street</strong> is a central image in the song. Why is public visibility vital for LGBTQ+ pride?", "★ How can cities make their <strong>street</strong>s and public spaces feel safer and welcoming for everyone?"),
            ("How does the infectious pop-rock <strong>rhythm</strong> mirror the carefree, euphoric feeling of falling in love?", "★ What song's <strong>rhythm</strong> instantly makes you want to get up and dance?"),
            ("The simple act of holding <strong>hands</strong> carries deep emotional weight in the lyrics. How does touch convey solidarity?", "★ What non-verbal gesture, like holding <strong>hands</strong>, brings you the most comfort?"),
            ("Gossip celebrates the ultimate <strong>freedom</strong> to love who you love without fear or shame. How does pride foster liberation?", "★ What does celebrating personal <strong>freedom</strong> mean in your own community?"),
            ("The image of two men <strong>dancing</strong> together in the spotlight embodies pure joy. How does dance express liberation?", "★ When was a time you felt completely free while <strong>dancing</strong> or enjoying music?")
        ],
        'r2': [
            "Public expressions of affection and visible <strong>romance</strong> are vital political statements that normalize diversity and promote safety in public spaces. Let's debate this perspective.",
            "True <strong>freedom</strong> means loving without seeking validation or approval from traditional societal norms. Share your thoughts.",
            "Upbeat, celebratory art that highlights joy and <strong>dancing</strong> is far more effective at changing hearts and minds than confrontational debate. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Present Continuous for Simultaneous Joyful Actions',
        'lang_desc': 'In the song <strong>Men In Love</strong>, the celebration of active romance highlights the <strong>Present Continuous for Simultaneous Joyful Actions</strong> (e.g., <em>holding hands, dancing together, smiling openly</em>). This structure supports describing ongoing celebratory events.',
        'lang_examples': [
            'They are holding hands and walking down the main street.',
            'Look at them dancing together with complete happiness.',
            'We are celebrating pride and expressing our authentic love.'
        ],
        'final_challenge': 'Joyful Celebration Speech: Prepare a short, uplifting toast or speech celebrating love, pride, and public affection at a friend\'s wedding or community celebration.',
        'note_items': [
            ("They are men <span class=\"mistake-highlight\">in the love</span>", "→", "They are men in love", "(Omit the definite article 'the' in the set phrase 'in love'.)"),
            ("They were holding <span class=\"mistake-highlight\">their hands together</span> on street", "→", "They were holding hands on the street", "(Use 'holding hands' without unnecessary possessives and include 'the' before 'street'.)"),
            ("It is important <span class=\"mistake-highlight\">for celebrate</span> public affection", "→", "It is important to celebrate public affection", "(Use 'to + infinitive' after the adjective 'important'.)")
        ]
    },

    'real-power': {
        'title': 'Real Power',
        'id_suffix': 'real-power',
        'theme_title': '❤️ Theme: Authentic Influence, Grassroots Strength & True Leadership',
        'theme_bullets': ['Strength', 'Voice', 'Truth', 'Power', 'Personal reflection'],
        'vocab': [
            {'word': 'strength', 'def': 'The capacity of an individual or group to withstand pressure or force.', 'ex': 'Real power comes from collective strength rather than top-down authority.', 'opp': 'Weakness'},
            {'word': 'voice', 'def': 'The sound produced in speaking or singing, or the right to express an opinion.', 'ex': 'Using your voice to lift others creates genuine grassroots change.', 'opp': 'Silence'},
            {'word': 'truth', 'def': 'The real facts about something, unvarnished by corporate spin.', 'ex': 'Standing firm in your truth commands respect that money cannot buy.', 'opp': 'Falsehood'},
            {'word': 'power', 'def': 'The ability or capacity to do something or act in a particular way.', 'ex': 'Real power belongs to the people when they unite for a common purpose.', 'opp': 'Powerlessness'},
            {'word': 'freedom', 'def': 'The state of being free or at liberty from oppressive restriction.', 'ex': 'Reclaiming your personal freedom starts with refusing to be manipulated.', 'opp': 'Subjugation'},
            {'word': 'town', 'def': 'An urban area with a fixed boundary, symbolizing local community.', 'ex': 'Change begins right in your own town through community organizing.', 'opp': 'Metropolis'},
            {'word': 'force', 'def': 'Strength or energy as an attribute of physical action or movement.', 'ex': 'A united community is an unstoppable force for positive reform.', 'opp': 'Impotence'},
            {'word': 'unity', 'def': 'The state of being united or joined as a whole.', 'ex': 'Building unity across differences turns isolated voices into a choir.', 'opp': 'Division'},
            {'word': 'stand', 'def': 'Maintain an upright position, or take a determined position on an issue.', 'ex': 'When you take a firm stand, you inspire others to do the same.', 'opp': 'Yield'},
            {'word': 'noise', 'def': 'A sound, especially one that is loud or unpleasant; public outcry.', 'ex': 'Making enough noise forces those in authority to pay attention.', 'opp': 'Quiet'},
        ],
        'r1': [
            ("In 'Real Power', Gossip contrasts superficial authority with genuine, authentic influence. Where does true <strong>power</strong> originate?", "★ What is your definition of someone who possesses 'real <strong>power</strong>' in today's world?"),
            ("The song emphasizes that real <strong>strength</strong> lies in vulnerability and community solidarity. How do you build internal resilience?", "★ Who in your life exemplifies quiet, enduring <strong>strength</strong> during crises?"),
            ("Gossip urges listeners to raise their <strong>voice</strong> against injustice. Why is speaking out so crucial for democratic health?", "★ When was a time you used your <strong>voice</strong> to advocate for yourself or a colleague?"),
            ("Standing in unvarnished <strong>truth</strong> cuts through political manipulation. How do you distinguish truth from spin?", "★ How do you ensure you stay grounded in your personal <strong>truth</strong> despite conflicting opinions?"),
            ("The lyrics link collective action directly to personal <strong>freedom</strong>. How does community engagement protect liberty?", "★ What local community group or initiative enhances <strong>freedom</strong> in your neighborhood?"),
            ("Gossip brings the message home to every local <strong>town</strong> and street. Why are local actions often the most impactful?", "★ What local issue in your <strong>town</strong> or city do you feel passionate about solving?"),
            ("How does the driving, energetic beat convey an unstoppable <strong>force</strong> of collective determination?", "★ What personal habit or value acts as a driving <strong>force</strong> in your career?"),
            ("The track shows that solid <strong>unity</strong> empowers marginalized groups. How can people bridge divides effectively?", "★ How do you foster <strong>unity</strong> when working with a diverse group of people?"),
            ("Taking a principled <strong>stand</strong> often requires sacrifice and courage. What makes a cause worth standing for?", "★ What is a boundary or value where you refuse to compromise and will always take a <strong>stand</strong>?"),
            ("Gossip encourages making enough constructive <strong>noise</strong> to disrupt complacency. When is disrupting quiet necessary?", "★ How can raising awareness and making <strong>noise</strong> lead to tangible social improvements?")
        ],
        'r2': [
            "Real <strong>power</strong> belongs to organized local communities and grassroots movements, not to politicians or wealthy corporations. Let's debate this perspective.",
            "Using your <strong>voice</strong> to speak <strong>truth</strong> to authority is a fundamental duty of citizenship that preserves societal <strong>freedom</strong>. Share your thoughts.",
            "Building genuine community <strong>unity</strong> is far more effective at creating lasting change than relying on individual charismatic leaders. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Emphatic Structures with *It is / What*',
        'lang_desc': 'In the song <strong>Real Power</strong>, the emphasis on true authority highlights <strong>Emphatic Cleft Sentences</strong> (e.g., <em>It is real power that transforms lives, What we need is unity</em>). This structure supports giving strong emphasis in speeches and debates.',
        'lang_examples': [
            'It is grassroots unity that creates real power.',
            'What we need most today is transparent leadership.',
            'It was her courageous voice that inspired the entire movement.'
        ],
        'final_challenge': 'Grassroots Campaign Pitch: In pairs, outline a community-led initiative for your town to solve a local issue, demonstrating where real grassroots power comes from.',
        'note_items': [
            ("They possess <span class=\"mistake-highlight\">a real power of</span> leadership", "→", "They possess real power in leadership", "(Omit 'a' before abstract noun 'power' when speaking generally.)"),
            ("It is unity <span class=\"mistake-highlight\">what gives us strength</span>", "→", "It is unity that gives us strength", "(Use 'that' or 'which' in cleft sentences: 'It is [noun] that [verb]'.)"),
            ("They took a stand <span class=\"mistake-highlight\">on front of</span> the building", "→", "They took a stand in front of the building", "(Use the correct fixed prepositional phrase 'in front of'.)")
        ]
    },

    'pop-goes-the-world': {
        'title': 'Pop Goes the World',
        'id_suffix': 'pop-goes-the-world',
        'theme_title': '❤️ Theme: Pop Culture, Fleeting Fame & Mass Consumerism',
        'theme_bullets': ['Pop', 'World', 'Rhythm', 'Personal reflection'],
        'vocab': [
            {'word': 'rhythm', 'def': 'A strong, regular, repeated pattern of movement or sound in music and life.', 'ex': 'The fast rhythm of modern pop culture moves at an exhausting speed.', 'opp': 'Discordance'},
            {'word': 'dancing', 'def': 'Moving rhythmically to music, escaping or embracing popular culture.', 'ex': 'Dancing to a hit song offers brief relief from global worries.', 'opp': 'Stillness'},
            {'word': 'radio', 'def': 'The transmission and reception of electromagnetic waves carrying music and news.', 'ex': 'Hearing a song on the radio used to define a generation\'s summer.', 'opp': 'Silence'},
            {'word': 'melody', 'def': 'A sequence of single notes that is musically satisfying; a tune.', 'ex': 'A catchy melody can make a profound message accessible to millions.', 'opp': 'Dissonance'},
            {'word': 'world', 'def': 'The earth with all its countries, peoples, and commercial networks.', 'ex': 'Pop culture shapes how young people across the world view beauty and success.', 'opp': 'Isolation'},
            {'word': 'sound', 'def': 'Vibrations that travel through the air and can be heard.', 'ex': 'The distinct sound of an era triggers instant nostalgia.', 'opp': 'Quiet'},
            {'word': 'vibration', 'def': 'A person\'s emotional aura or atmosphere, or physical musical pulse.', 'ex': 'Positive energy and high vibration bring people together on the dance floor.', 'opp': 'Stagnation'},
            {'word': 'beat', 'def': 'The main rhythm in music, or the pulse of contemporary life.', 'ex': 'Following the beat of commercial trends can lead to losing your individuality.', 'opp': 'Pause'},
            {'word': 'harmony', 'def': 'The combination of simultaneously sounded musical notes to produce chords.', 'ex': 'Finding personal harmony amid media noise requires intentional solitude.', 'opp': 'Conflict'},
            {'word': 'connected', 'def': 'Brought together or into contact so that a real link is established.', 'ex': 'Being digitally connected 24/7 doesn\'t guarantee feeling genuinely understood.', 'opp': 'Disconnected'},
        ],
        'r1': [
            ("In 'Pop Goes the World', Gossip comments on the rapid cycle of mass media and pop trends. How does <strong>radio</strong> shape global tastes?", "★ What is a classic song you first heard on the <strong>radio</strong> that still brings back vivid memories?"),
            ("The song captures how an infectious <strong>rhythm</strong> can unite millions across different cultures. Why does music transcend borders?", "★ How does listening to your favorite music's <strong>rhythm</strong> affect your daily productivity?"),
            ("Gossip observes people <strong>dancing</strong> through life's chaos. Is pop music an escape or a mirror of society?", "★ Do you use music and <strong>dancing</strong> primarily as an escape from stress or a way to feel connected?"),
            ("How does a memorable <strong>melody</strong> carry complex social critiques into mainstream culture?", "★ What is a song with a simple <strong>melody</strong> that carries a surprisingly deep message?"),
            ("The title 'Pop Goes the <strong>world</strong>' plays on nursery rhymes to mock commercial hype. How fast do media trends fade?", "★ How do you filter out temporary internet trends to focus on what truly matters in the <strong>world</strong>?",),
            ("Gossip experiments with electronic and dance-rock <strong>sound</strong>scapes. How has pop music evolved over the last decade?", "★ How has your personal taste in <strong>sound</strong> and music changed since your teenage years?"),
            ("The lyrics describe feeling a shared <strong>vibration</strong> in a crowded room. What creates genuine crowd energy?", "★ How do you describe the overall energy or <strong>vibration</strong> of the city or town where you live?"),
            ("Following the commercial <strong>beat</strong> can encourage consumerism. How do you protect your unique individuality?", "★ How do you stay true to your personal style rather than following every viral <strong>beat</strong>?"),
            ("The song seeks emotional <strong>harmony</strong> amid hyper-commercial noise. How do you find quiet in a noisy world?", "★ What daily practice helps you restore mental <strong>harmony</strong> when life feels frantic?"),
            ("While everyone is digitally <strong>connected</strong> today, many feel isolated. How can pop culture foster real community?", "★ What makes you feel genuinely <strong>connected</strong> to a community or creative movement?")
        ],
        'r2': [
            "Modern pop culture and viral media trends encourage superficial consumerism and destroy artistic originality. Let's debate this perspective.",
            "Pop music and global <strong>rhythm</strong>s provide a universal language that brings diverse people together across a divided <strong>world</strong>. Share your thoughts.",
            "Being constantly <strong>connected</strong> online creates an illusion of community while increasing personal isolation and digital burnout. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Passive Voice for Media & Cultural Phenomena',
        'lang_desc': 'In the song <strong>Pop Goes the World</strong>, the commentary on media culture highlights the <strong>Passive Voice for Cultural Phenomena</strong> (e.g., <em>is broadcasted, was broadcast, are influenced, is shaped by trends</em>). This structure supports analyzing mass culture.',
        'lang_examples': [
            'Global trends are shaped by viral social media algorithms.',
            'The song was broadcast across radio stations worldwide.',
            'Popular culture is constantly redefined by young artists.'
        ],
        'final_challenge': 'Pop Culture Capsule: Pitch a 90-second radio segment analyzing a current viral trend or song, debating whether it fosters genuine connection or temporary commercial noise.',
        'note_items': [
            ("Pop culture is influenced <span class=\"mistake-highlight\">from media</span>", "→", "Pop culture is influenced by media", "(Use 'by' to denote the agent in passive voice constructions.)"),
            ("The song was broadcasted <span class=\"mistake-highlight\">in the radio</span>", "→", "The song was broadcast on the radio", "(Use 'on the radio' for media broadcasts, and 'broadcast' as irregular past participle.)"),
            ("People are feeling connected <span class=\"mistake-highlight\">with each other</span> through music", "→", "People feel connected to each other through music", "(Use 'connected to' when describing interpersonal or conceptual links.)")
        ]
    }
}

def generate_vocab_html(vocab_list):
    html = '<div class="vocab-grid-10">\n<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo);">❤️ Core Concepts &amp; Feelings</h3>\n'
    for idx, v in enumerate(vocab_list):
        if idx == 5:
            html += '<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo);">🗣️ Life, Actions &amp; Connection</h3>\n'

        word = v['word']
        definition = v['def'].replace("'", "\\'")
        example = v['ex'].replace("'", "\\'")
        opp = v['opp']

        html += f'''<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">{v['word']}</div>
<div class="vocab-def">{v['def']}</div>
<div class="vocab-example">{v['ex']}</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Opposite:</strong> <span class="vocab-opp-word" style="font-weight: 600;">{opp}</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:\'{word}\', definition:\'{definition}\', example:\'{example}\'}}, this)">+ Dictionary</button>
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

def generate_final_challenge_html(text):
    return f'''<div style="background: var(--cream); border: 2px dashed var(--indigo); padding: 1.5rem; border-radius: 16px; display: flex; align-items: flex-start; gap: 1rem;">
<span style="font-size: 2rem;">🎭</span>
<div>
<p style="margin-top: 0; font-size: 1rem; line-height: 1.6; color: var(--ink); font-weight: 500;">{text}</p>
</div>
</div>'''

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

def update_html_text(content, song_slug, data):
    id_suffix = data['id_suffix']

    # 1. Update Vocab
    v_id = f'vocabulary-{id_suffix}' if f'id="vocabulary-{id_suffix}"' in content else 'vocabulary'
    v_start = content.find(f'id="{v_id}"')
    if v_start != -1:
        v_grid_start = content.find('<div class="vocab-grid-10">', v_start)
        v_grid_end = content.find('</div>\n</div>\n</div>', v_grid_start)
        if v_grid_start != -1 and v_grid_end != -1:
            new_vocab_html = generate_vocab_html(data['vocab'])
            content = content[:v_grid_start] + new_vocab_html + content[v_grid_end + 6:]

    # 2. Update Discussion
    d_id = f'discussion-{id_suffix}' if f'id="discussion-{id_suffix}"' in content else 'discussion'
    d_start = content.find(f'id="{d_id}"')
    if d_start != -1:
        r1_start = content.find('<div class="round-1"', d_start)
        r2_start = content.find('<div class="round-2"', r1_start)
        d_end = content.find('</div>\n</div>\n</div>', r2_start)
        if r1_start != -1 and d_end != -1:
            new_disc_html = generate_discussion_html(data['r1'], data['r2'])
            content = content[:r1_start] + new_disc_html + content[d_end + 6:]

    # 3. Update Language Focus
    lf_id = f'lang-focus-{id_suffix}' if f'id="lang-focus-{id_suffix}"' in content else 'lang-focus'
    lf_start = content.find(f'id="{lf_id}"')
    if lf_start != -1:
        lf_box_start = content.find('<div style="background: var(--cream); border-left: 4px solid var(--indigo);', lf_start)
        lf_box_end = content.find('</div>\n</div>\n</div>', lf_box_start)
        if lf_box_start != -1 and lf_box_end != -1:
            new_lf_html = generate_lang_focus_html(data['lang_title'], data['lang_desc'], data['lang_examples'])
            content = content[:lf_box_start] + new_lf_html + content[lf_box_end + 6:]

    # 4. Update Final Challenge
    fc_id = f'final-challenge-{id_suffix}' if f'id="final-challenge-{id_suffix}"' in content else 'final-challenge'
    fc_start = content.find(f'id="{fc_id}"')
    if fc_start != -1:
        fc_box_start = content.find('<div style="background: var(--cream); border: 2px dashed var(--indigo);', fc_start)
        fc_box_end = content.find('</div>\n</div>\n</div>', fc_box_start)
        if fc_box_start != -1 and fc_box_end != -1:
            new_fc_html = generate_final_challenge_html(data['final_challenge'])
            content = content[:fc_box_start] + new_fc_html + content[fc_box_end + 6:]

    # 5. Update Teacher Note
    tn_id = f's-mistakes-{id_suffix}' if f'id="s-mistakes-{id_suffix}"' in content else 's-mistakes'
    tn_start = content.find(f'id="{tn_id}"')
    if tn_start != -1:
        mb_start = content.find('<div class="mistake-body"', tn_start)
        mb_end = content.find('</div>\n</div>', mb_start)
        if mb_start != -1 and mb_end != -1:
            new_tn_html = generate_teacher_note_html(data['note_items'])
            content = content[:mb_start] + new_tn_html + content[mb_end + 6:]

    return content

# Run updates on all files
def main():
    # Update index.html
    idx_path = os.path.join(GC_DIR, 'index.html')
    with open(idx_path, 'r', encoding='utf-8') as f:
        idx_content = f.read()

    for song_slug, data in GOSSIP_DATA.items():
        print(f"Updating {song_slug} in index.html...")
        idx_content = update_html_text(idx_content, song_slug, data)

    with open(idx_path, 'w', encoding='utf-8') as f:
        f.write(idx_content)

    # Update standalone files
    for song_slug, data in GOSSIP_DATA.items():
        standalone_path = os.path.join(GC_DIR, f"{song_slug}.html")
        if os.path.exists(standalone_path):
            print(f"Updating standalone file {standalone_path}...")
            with open(standalone_path, 'r', encoding='utf-8') as f:
                s_content = f.read()
            s_content = update_html_text(s_content, song_slug, data)
            with open(standalone_path, 'w', encoding='utf-8') as f:
                f.write(s_content)

    print("All Gossip Challenge files successfully updated!")

if __name__ == '__main__':
    main()
