import os
import re
from bs4 import BeautifulSoup

CXG_DIR = 'apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/crazy-ex-girlfriend-challenge/'

CXG_BATCH3_DATA = {
    'sexy-french-depression': {
        'title': 'Sexy French Depression',
        'id_suffix': 'sexy-french-depression',
        'vocab': [
            {'word': 'Depression', 'def': 'A mental health state characterized by persistent sadness and loss of interest.', 'ex': 'The song contrasts glamorous movie tropes with the unglamorous reality of real clinical depression.', 'opp': 'Joy'},
            {'word': 'Glamorize', 'def': 'To make something seem desirable, romantic, or exciting when it is actually painful.', 'ex': 'Pop culture often attempts to glamorize sadness with artistic film filters.', 'opp': 'Demystify'},
            {'word': 'Apathy', 'def': 'Lack of interest, enthusiasm, or emotional concern.', 'ex': 'Severe depression causes overwhelming apathy where even getting out of bed feels impossible.', 'opp': 'Enthusiasm'},
            {'word': 'Unwashed', 'def': 'Not washed or cleaned; uncleaned.', 'ex': 'Staying unwashed for days in a dark bedroom is a realistic symptom of depression.', 'opp': 'Clean'},
            {'word': 'Despair', 'def': 'The complete loss or absence of hope.', 'ex': 'True emotional despair is unromantic and deeply exhausting.', 'opp': 'Hope'},
            {'word': 'Lethargy', 'def': 'A state of sluggishness, tiredness, and lack of energy.', 'ex': 'Heavy lethargy prevents her from finishing basic daily chores.', 'opp': 'Vigor'},
            {'word': 'Isolation', 'def': 'The state of being separated from others or lacking social contact.', 'ex': 'Social isolation worsens depression by cutting off supportive relationships.', 'opp': 'Connection'},
            {'word': 'Cliche', 'def': 'A phrase or opinion that is overused and betrays a lack of original thought.', 'ex': 'Pouting in a beret with a cigarette is a classic French cinema cliché.', 'opp': 'Originality'},
            {'word': 'Melancholy', 'def': 'A feeling of pensive sadness, typically with no obvious cause.', 'ex': 'Cinematic melancholy looks elegant on screen, but real sadness feels heavy.', 'opp': 'Cheerfulness'},
            {'word': 'Stigma', 'def': 'A mark of disgrace associated with a particular circumstance, quality, or person.', 'ex': 'Breaking the stigma around mental illness requires honest, unglamorized conversations.', 'opp': 'Acceptance'}
        ],
        'r1': [
            ("In 'Sexy French Depression', Rachel Bloom parodies Nouvelle Vague cinema tropes to expose how media glorifies sadness. How does media <strong>Glamorize</strong> mental distress?", "★ Have you ever noticed movies or TV shows trying to make sadness look artistic or stylish?"),
            ("The song contrasts black-and-white art-house aesthetics with realistic <strong>Depression</strong> symptoms like poor hygiene. Why is this contrast powerful?", "★ Why is it important for media to distinguish between artistic <strong>Melancholy</strong> and actual depression?"),
            ("How does severe emotional <strong>Apathy</strong> make even small, simple tasks feel insurmountable?", "★ How do you gently encourage yourself or a friend when feeling stuck in a state of <strong>Apathy</strong>?"),
            ("Why does the song highlight being <strong>Unwashed</strong> in bed for days rather than sitting gracefully in a café?", "★ Why do people feel uncomfortable discussing the unglamorous, physical sides of mental struggles?"),
            ("The lyrics mock French cinema's romanticized version of <strong>Despair</strong>. How do cultural stereotypes shape how we view sadness?", "★ What is a common cultural <strong>Cliche</strong> about emotion that you find completely inaccurate?"),
            ("How does prolonged <strong>Lethargy</strong> affect a person's physical health and daily routine?", "★ What healthy habits help you regain energy when experiencing physical or mental <strong>Lethargy</strong>?"),
            ("Why is social <strong>Isolation</strong> both a symptom and a accelerator of mental health struggles?", "★ What strategies help you stay connected with loved ones when you feel like retreating into <strong>Isolation</strong>?"),
            ("How does the track dismantle the <strong>Cliche</strong> that sad people are just pensive, poetic thinkers?", "★ Why is open, honest dialogue better than maintaining a poetic facade?"),
            ("How does artistic <strong>Melancholy</strong> differ from clinical conditions that require professional support?", "★ How can friends offer meaningful support without romanticizing or minimizing someone's pain?"),
            ("Why is dismantling the societal <strong>Stigma</strong> around mental health essential for recovery?", "★ What positive changes have you seen in public attitudes toward mental health in recent years?")
        ],
        'r2': [
            "Media depictions that <strong>Glamorize</strong> mental illness do genuine harm by trivializing clinical conditions into fashion statements. Let's debate this perspective.",
            "Art and music have a right to explore <strong>Melancholy</strong> aesthetics without having to act as medical educational tools. Share your thoughts.",
            "Openly discussing the unglamorous realities of emotional struggles is the single most effective way to eliminate social <strong>Stigma</strong>. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Contrastive Conjunctions & De-dramatizing Idioms (*In movies vs. In reality*)',
        'lang_desc': 'In the song <strong>Sexy French Depression</strong>, the satire contrasts media tropes with reality using <strong>Contrastive Structures & Reality Checks</strong> (e.g., <em>In movies it looks chic, whereas in reality it is unwashed apathy; Instead of brooding poetically, she hasn\'t showered</em>). This structure supports evaluating misconceptions.',
        'lang_examples': [
            'In French films depression looks stylish, whereas in real life it is just exhausting.',
            'Instead of writing brilliant poetry, she spent three days eating cereal in bed.',
            'Film tropes depict sadness as pensive, but actual clinical apathy removes all motivation.'
        ],
        'note_items': [
            ("She suffers from <span class=\"mistake-highlight\">the depression</span>", "→", "She suffers from depression", "(Do not use definite article 'the' with uncountable condition 'depression'.)"),
            ("Media glamorizes <span class=\"mistake-highlight\">about mental illness</span>", "→", "Media glamorizes mental illness", "(Do not insert 'about' after transitive verb 'glamorize'.)"),
            ("He stays isolated <span class=\"mistake-highlight\">from everyone</span>", "→", "He stays isolated from everyone", "(Correct usage of 'isolated from'.)")
        ]
    },

    'antidepressants-are-so-not-a-big-deal': {
        'title': 'Antidepressants Are So Not a Big Deal',
        'id_suffix': 'antidepressants-are-so-not-a-big-deal',
        'vocab': [
            {'word': 'Antidepressant', 'def': 'A medication used to alleviate clinical depression or anxiety.', 'ex': 'The song celebrates taking antidepressants in a joyous, high-energy 1920s tap dance.'},
            {'word': 'Stigma', 'def': 'A mark of disgrace associated with a particular circumstance or treatment.', 'ex': 'Taking daily medication for mental health still carries an unfair social stigma.'},
            {'word': 'Chemical', 'def': 'Relating to chemistry, or a substance used in or produced by chemical processes.', 'ex': 'Depression is a chemical imbalance in the brain, not a personal flaw.'},
            {'word': 'Serotonin', 'def': 'A neurotransmitter that regulates mood, sleep, and emotional stability.', 'ex': 'If your brain doesn\'t produce enough serotonin, store-bought medication is fine.'},
            {'word': 'Normal', 'def': 'Conforming to a standard, usual, or typical type.', 'ex': 'Normalizing mental health treatment helps millions of people seek help.'},
            {'word': 'Therapy', 'def': 'Treatment intended to relieve or heal a disorder, especially mental.', 'ex': 'Combining therapy with prescribed medication yields the best long-term outcomes.'},
            {'word': 'Shame', 'def': 'A painful feeling of humiliation or distress caused by consciousness of guilt.', 'ex': 'There should be zero shame in taking medication to stay healthy.'},
            {'word': 'Prescription', 'def': 'An instruction written by a medical practitioner authorizing a medicine.', 'ex': 'Getting a prescription for mental health is no different than getting glasses.'},
            {'word': 'Imbalance', 'def': 'A lack of proportion or relation between corresponding things.', 'ex': 'Addressing a brain imbalance with science is a sensible health decision.'},
            {'word': 'Routine', 'def': 'A sequence of actions regularly followed; a fixed program.', 'ex': 'Taking a pill each morning becomes a simple, unremarkable daily routine.'}
        ],
        'r1': [
            ("In 'Antidepressants Are So Not a Big Deal', the cast performs a upbeat Broadway tap dance celebrating mental health medication. Why is joy effective at fighting <strong>Stigma</strong>?", "★ Why do people feel comfortable taking medication for physical illnesses but hesitate over an <strong>Antidepressant</strong>?"),
            ("The lyrics explain that depression is a <strong>Chemical</strong> <strong>Imbalance</strong> rather than a character failure. How does science shift perspective?", "★ How does understanding the role of <strong>Serotonin</strong> and brain chemistry reduce self-blame?"),
            ("Why is making mental healthcare feel <strong>Normal</strong> so important for young adults?", "★ What everyday conversation topics have become far more <strong>Normal</strong> in your community over time?"),
            ("How do <strong>Therapy</strong> and prescription medication complement each other in long-term wellness?", "★ What is the most constructive attitude a friend can take when someone shares they are in <strong>Therapy</strong>?"),
            ("The song aggressively rejects societal <strong>Shame</strong> surrounding psychiatric care. Why does judgment persist?", "★ How can society actively eliminate <strong>Shame</strong> around seeking medical mental health help?"),
            ("Why should picking up a <strong>Prescription</strong> for anxiety be viewed like wearing corrective eyeglasses?", "★ What analogy best explains why taking care of mental health is a basic medical necessity?"),
            ("How does establishing a consistent daily <strong>Routine</strong> support emotional stability?", "★ What small habits or <strong>Routine</strong> practices keep your mind feeling balanced?"),
            ("The track shows suburban neighbors surprising each other by admitting they all take meds. Why do people hide shared struggles?", "★ Have you ever discovered that a friend or colleague shared a struggle you thought you faced alone?"),
            ("What makes using an upbeat La La Land-style musical routine so cathartic for this subject?", "★ How can uplifting art help destigmatize taboo medical topics?"),
            ("Ultimately, how does the song empower people to prioritize their health over other people's opinions?", "★ What advice would you give to someone afraid of judgment for seeking healthcare?")
        ],
        'r2': [
            "Psychiatric medication should be treated with the exact same casual acceptance as blood pressure medicine or eyeglasses. Let's debate this perspective.",
            "Performative musical numbers about medical treatments risk trivializing the complex process of finding the right <strong>Prescription</strong>. Share your thoughts.",
            "Society\'s lingering <strong>Stigma</strong> around mental health stems from a lack of scientific literacy about <strong>Chemical</strong> imbalances. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Normalizing Statements & Cause-and-Effect Explanations',
        'lang_desc': 'In the song <strong>Antidepressants Are So Not a Big Deal</strong>, the upbeat destigmatization highlights <strong>Normalizing Declarations & Scientific Cause-Effect</strong> (e.g., <em>It\'s just serotonin, if you can\'t make it then store-bought is fine; It\'s not a big deal at all</em>). This structure supports presenting rational health facts.',
        'lang_examples': [
            'Taking a daily pill for anxiety is so not a big deal.',
            'If your brain doesn\'t produce enough serotonin, store-bought is totally fine.',
            'They normalized discussing therapy openly at the dinner table.'
        ],
        'note_items': [
            ("He takes an antidepressant <span class=\"mistake-highlight\">for be happy</span>", "→", "He takes an antidepressant to be happy / to balance his mood", "(Use 'to + infinitive' for purpose.)"),
            ("There is no shame <span class=\"mistake-highlight\">for taking medication</span>", "→", "There is no shame in taking medication", "(Use 'shame in + gerund'.)"),
            ("It is a chemical imbalance <span class=\"mistake-highlight\">of the brain</span>", "→", "It is a chemical imbalance in the brain", "(Use 'imbalance in' a organ/system.)")
        ]
    },

    'a-diagnosis': {
        'title': 'A Diagnosis',
        'id_suffix': 'a-diagnosis',
        'vocab': [
            {'word': 'Diagnosis', 'def': 'The identification of the nature of an illness or problem by examination.', 'ex': 'Rebecca eagerly anticipates a formal diagnosis as the master key to understanding her life.'},
            {'word': 'Relief', 'def': 'A feeling of reassurance and relaxation following release from anxiety.', 'ex': 'Receiving an accurate diagnosis brings immense emotional relief and validation.'},
            {'word': 'Identity', 'def': 'The fact of being who or what a person or thing is.', 'ex': 'She mistakenly tries to build her entire personal identity around a medical label.'},
            {'word': 'Validation', 'def': 'Recognition or affirmation that a person or their feelings are valid.', 'ex': 'Finally having a name for her struggles offers long-awaited validation.'},
            {'word': 'Label', 'def': 'A classifying phrase or name applied to a person or thing.', 'ex': 'A medical label can guide treatment, but it does not define your human worth.'},
            {'word': 'Clarification', 'def': 'The action of making a statement or situation less confused and more comprehensible.', 'ex': 'She hoped a clinical diagnosis would provide instant clarification for her past mistakes.'},
            {'word': 'Symptom', 'def': 'A physical or mental feature indicating a condition of disease.', 'ex': 'Understanding that her actions were symptoms gave her a path to healing.'},
            {'word': 'Expectation', 'def': 'A strong belief that something will happen in a specific way.', 'ex': 'Unrealistic expectations that a diagnosis will automatically fix your life lead to disappointment.'},
            {'word': 'Treatment', 'def': 'Medical care given to a patient for an illness or injury.', 'ex': 'A diagnosis is not the final cure; it is simply the starting line for proper treatment.'},
            {'word': 'Hopeful', 'def': 'Feeling or inspiring optimism about a future event or situation.', 'ex': 'She sings with hopeful enthusiasm as she walks into her doctor\'s office.'}
        ],
        'r1': [
            ("In 'A Diagnosis', Rebecca marches joyfully toward her psychiatrist\'s office expecting a label to fix her whole life. Why does getting a <strong>Diagnosis</strong> bring <strong>Relief</strong>?", "★ Why do people find comfort in finally receiving a formal name or <strong>Diagnosis</strong> for their struggles?"),
            ("The song shows Rebecca treating a medical <strong>Label</strong> like a magical club membership. What are the dangers of over-identifying with a label?", "★ Where is the line between using a medical <strong>Label</strong> for help versus letting it define your entire <strong>Identity</strong>?"),
            ("How does receiving clinical <strong>Validation</strong> help someone let go of self-blame for past mistakes?", "★ Why is external <strong>Validation</strong> from a qualified professional so powerful when facing uncertainty?"),
            ("Rebecca expects instant <strong>Clarification</strong> for years of chaotic choices. Is a diagnosis a cure or a starting point?", "★ How do you handle situations where getting an answer creates new work rather than an instant fix?"),
            ("The lyrics contrast past confusing <strong>Symptom</strong> list items with a structured path forward. How does clarity reduce fear?", "★ How does gaining knowledge about a problem help reduce your fear of it?"),
            ("Why does Rebecca\'s extreme <strong>Expectation</strong> set her up for a complicated emotional reality later?", "★ How do you manage your <strong>Expectations</strong> when seeking help for a complex personal challenge?"),
            ("How does a medical diagnosis serve as the blueprint for an effective <strong>Treatment</strong> plan?", "★ Why is it important to remember that a <strong>Treatment</strong> plan requires active personal effort?"),
            ("Why is the song\'s bright, <strong>Hopeful</strong> Disney-heroine style so tragicomic given her situation?", "★ How does energetic optimism help us take the first difficult steps toward personal growth?"),
            ("How does 'A Diagnosis' capture the modern human desire to categorize and understand our minds?", "★ Why are people so fascinated by personality tests, diagnoses, and mental health categories today?"),
            ("Ultimately, what does the song teach us about the difference between understanding a problem and solving it?", "★ What is the difference between knowing why you act a certain way and actually changing your behavior?")
        ],
        'r2': [
            "Receiving a formal <strong>Diagnosis</strong> is essential because you cannot fix a problem that you cannot name. Let's debate this perspective.",
            "Modern culture encourages people to make medical <strong>Labels</strong> their entire personal <strong>Identity</strong>, which hinders real growth. Share your thoughts.",
            "A medical <strong>Diagnosis</strong> provides <strong>Validation</strong>, but true healing requires personal accountability and hard work. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Future Expectations & Categorical Belonging (*Now I\'ll know what I am*)',
        'lang_desc': 'In the song <strong>A Diagnosis</strong>, the optimistic expectation highlights <strong>Future Tense Declarations & Categorical Placement</strong> (e.g., <em>Now I\'ll have a name, soon I\'ll belong to a group, this will explain everything</em>). This structure supports analyzing high expectations.',
        'lang_examples': [
            'Once I get a diagnosis, everything in my past will finally make sense.',
            'Soon I will have an exact label for what I have been experiencing.',
            'She expected the test results to provide instant clarity for her future.'
        ],
        'note_items': [
            ("She is searching for <span class=\"mistake-highlight\">a diagnosis of her life</span>", "→", "She is searching for a diagnosis for her condition", "(Use 'diagnosis for' a condition/illness.)"),
            ("He feels relief <span class=\"mistake-highlight\">from getting the news</span>", "→", "He feels relief at getting the news / upon getting the news", "(Use 'relief at/upon' receiving news.)"),
            ("She identified herself <span class=\"mistake-highlight\">with a label</span>", "→", "She identified herself by a label / with a group", "(Proper prepositional use with 'identify'.)")
        ]
    },

    'i-hate-everything-but-you': {
        'title': 'I Hate Everything But You',
        'id_suffix': 'i-hate-everything-but-you',
        'vocab': [
            {'word': 'Cynicism', 'def': 'An inclination to believe that people are motivated by self-interest; skepticism.', 'ex': 'Greg and Rebecca share a bond built on relentless cynicism toward the world.'},
            {'word': 'Affection', 'def': 'A gentle feeling of liking or fondness.', 'ex': 'Expressing affection through shared hatred of everything else is their unique romantic language.'},
            {'word': 'Irritation', 'def': 'The state of feeling annoyed, impatient, or angry.', 'ex': 'They list every minor daily irritation, from traffic to beach sand, with passionate disgust.'},
            {'word': 'Bonding', 'def': 'The establishment of a relationship with someone based on shared feelings or interests.', 'ex': 'Complaining together about terrible things is a surprisingly effective form of bonding.'},
            {'word': 'Exceptions', 'def': 'People or things that are excluded from a general rule or statement.', 'ex': 'In Greg\'s eyes, Rebecca is the sole exception to his universal dislike of humanity.'},
            {'word': 'Pessimism', 'def': 'A tendency to see the worst aspect of things or believe that the worst will happen.', 'ex': 'Their shared pessimism creates a cozy, defensive bubble against the outside world.'},
            {'word': 'Disgust', 'def': 'A feeling of revulsion or strong disapproval aroused by something unpleasant.', 'ex': 'Singing about mutual disgust brings them unexpectedly closer together.'},
            {'word': 'Romantic', 'def': 'Conducive to or characterized by the expression of love.', 'ex': 'Declaring "I hate everything but you" is a strangely romantic gesture for cynical people.'},
            {'word': 'Selective', 'def': 'Relating to or involving the selection of the most suitable or desirable.', 'ex': 'His affection is hyper-selective, reserved exclusively for one person.'},
            {'word': 'Sarcasm', 'def': 'The use of irony to mock or convey contempt.', 'ex': 'Their conversation is heavily coated in dry sarcasm and mutual understanding.'}
        ],
        'r1': [
            ("In 'I Hate Everything But You', Greg sings a romantic duet expressing love by listing everything else he detests. Why is shared <strong>Cynicism</strong> romantic to some?", "★ Have you ever bonded with a close friend or partner over a shared dislike or pet peeve?"),
            ("The song lists trivial annoyances like traffic and crowds as sources of constant <strong>Irritation</strong>. Why is complaining fun?", "★ What is a hilarious minor <strong>Irritation</strong> in daily life that always makes you rant?"),
            ("How does Greg make Rebecca feel special by declaring her the ultimate <strong>Exception</strong> to his rule?", "★ How does it feel when someone who normally dislikes group activities makes an <strong>Exception</strong> for you?"),
            ("The track demonstrates how mutual <strong>Pessimism</strong> can build an intimate, defensive wall around two people. Is this healthy?", "★ Where is the line between cozy shared bonding and toxic negative <strong>Pessimism</strong>?"),
            ("Why is expressing sweet <strong>Affection</strong> through sarcastic insults easier for defensive people?", "★ Why do some people find direct, earnest compliments uncomfortable compared to witty banter?"),
            ("How does Greg\'s hyper-<strong>Selective</strong> warmth highlight his fear of getting hurt by the general world?", "★ Why do cynical people guard their inner warmth so fiercely?"),
            ("How does the song use <strong>Sarcasm</strong> and rock ballad music to subvert traditional love songs?", "★ What is your favorite 'anti-romantic' love song that subverts traditional clichés?"),
            ("Why does shared <strong>Disgust</strong> toward fake social trends create instant solidarity between friends?", "★ What social trend or cliché do you and your friends secretly agree is ridiculous?"),
            ("Is declaring 'I hate everything but you' a sign of deep devotion or red-flag codependency?", "★ Do you prefer romantic partners who love the world enthusiastically or who share your critical eye?"),
            ("Ultimately, how does finding one person you genuinely like make a cynical world bearable?", "★ How can a single positive relationship change your overall outlook on life?")
        ],
        'r2': [
            "Bonding over shared negative opinions and <strong>Cynicism</strong> builds stronger, more authentic ties than superficial positivity. Let's debate this perspective.",
            "Relying on one person as your sole <strong>Exception</strong> in a world you detest creates an unhealthy, codependent burden. Share your thoughts.",
            "Sarcastic anti-love songs are far more realistic and meaningful for modern couples than traditional fairy-tale ballads. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Exclusive Quantification & Universal Exclusion (*Everything except/but...*)',
        'lang_desc': 'In the song <strong>I Hate Everything But You</strong>, the cynical romantic declaration highlights <strong>Universal Exclusionary Phrases</strong> (e.g., <em>I hate everything except you, everyone is terrible but you, everything annoys me but this</em>). This structure supports expressing hyper-selective preferences.',
        'lang_examples': [
            'I detest almost everything about this city except for this cozy café.',
            'Everyone at the party was irritating, but you made the evening bearable.',
            'She dislikes public speaking, but she made an exception for her best friend\'s wedding.'
        ],
        'note_items': [
            ("I hate everything <span class=\"mistake-highlight\">besides of you</span>", "→", "I hate everything besides you / except you / but you", "(Use 'besides', 'except', or 'but' without 'of'.)"),
            ("He is cynical <span class=\"mistake-highlight\">for the world</span>", "→", "He is cynical about the world", "(Use 'cynical about'.)"),
            ("She made an exception <span class=\"mistake-highlight\">for him</span>", "→", "She made an exception for him", "(Correct usage of 'exception for'.)")
        ]
    },

    'whatll-it-be': {
        'title': "What'll It Be",
        'id_suffix': 'whatll-it-be',
        'vocab': [
            {'word': 'Stagnation', 'def': 'The state of not flowing or moving; lack of activity, growth, or development.', 'ex': 'Greg sings about the depressing stagnation of staying in his hometown forever.'},
            {'word': 'Hometown', 'def': 'The town or city where a person was born or grew up.', 'ex': 'Leaving your hometown requires courage, especially when routine feels comfortable.'},
            {'word': 'Regret', 'def': 'A feeling of sadness or disappointment over something that has happened or been done.', 'ex': 'He is paralyzed by the fear of looking back on his life with bitter regret.'},
            {'word': 'Ambition', 'def': 'A strong desire to do or to achieve something, typically requiring determination.', 'ex': 'His buried ambition conflicts with his fear of stepping outside his comfort zone.'},
            {'word': 'Bartender', 'def': 'A person who serves drinks at a bar.', 'ex': 'As a local bartender, he listens to everyone else\'s dreams while ignoring his own.'},
            {'word': 'Trapped', 'def': 'Prevented from escaping from a place or situation.', 'ex': 'He feels completely trapped in a small-town cycle that repeats endlessly.'},
            {'word': 'Escape', 'def': 'An act of breaking free from a place, danger, or limitation.', 'ex': 'Planning his escape to Emory University in Atlanta is his long-cherished dream.'},
            {'word': 'Resignation', 'def': 'The acceptance of something undesirable but inevitable.', 'ex': 'His melancholic song balances hopeful longing with weary resignation.'},
            {'word': 'Mediocrity', 'def': 'The quality or state of being mediocre; ordinary or moderate quality.', 'ex': 'He dreads settling into lifelong small-town mediocrity without trying.'},
            {'word': 'Longing', 'def': 'A yearning desire for something distant or unobtainable.', 'ex': 'The classic Billy Joel-style piano ballad captures profound acoustic longing.'}
        ],
        'r1': [
            ("In 'What'll It Be', Greg pours drinks at a local bar while singing about his fear of small-town <strong>Stagnation</strong>. Why is leaving home difficult?", "★ Have you ever felt stuck in a location or job where you feared personal <strong>Stagnation</strong>?"),
            ("Greg watches older patrons at the bar and fears a future full of <strong>Regret</strong>. How does fear of regret motivate action?", "★ How do you ensure your current choices won't lead to future <strong>Regret</strong>?"),
            ("The song captures the conflict between cozy small-town comfort and personal <strong>Ambition</strong>. How do you balance peace with drive?", "★ What is a personal <strong>Ambition</strong> that requires you to step outside your comfort zone?"),
            ("As a local <strong>Bartender</strong>, Greg serves as an observer of other people's lives. How does watching others affect self-esteem?", "★ Have you ever felt like an observer watching everyone else move forward in life?"),
            ("Why do people who feel <strong>Trapped</strong> in their routine often hesitate to take the leap and leave?", "★ What advice would you give to someone who feels emotionally or professionally <strong>Trapped</strong>?"),
            ("Greg dreams of an <strong>Escape</strong> to Atlanta, but fears failure. Is fear of failure worse than fear of staying?", "★ How do you overcome the fear of failure when pursuing an ambitious <strong>Escape</strong> or change?"),
            ("How does the lyrics show the slow slide from youthful excitement into quiet <strong>Resignation</strong>?", "★ How do you reignite your enthusiasm when you feel a sense of weary <strong>Resignation</strong> creeping in?"),
            ("Greg dreads settling for <strong>Mediocrity</strong>. What does living a fulfilling life mean to you beyond societal status?", "★ How do you define a 'successful life' for yourself regardless of external prestige?"),
            ("How does the Billy Joel / 'Piano Man' style of music enhance the feeling of small-town melancholic <strong>Longing</strong>?", "★ Why do piano ballads resonate so deeply when exploring themes of longing and lost dreams?"),
            ("Ultimately, what holds Greg back more: his small town, or his own internal self-doubt?", "★ Are we usually trapped by external circumstances or by our own internal fears?")
        ],
        'r2': [
            "Staying in your <strong>Hometown</strong> and building a quiet life is often a wiser choice than chasing stressful external <strong>Ambition</strong>. Let's debate this perspective.",
            "Fear of future <strong>Regret</strong> is a far more powerful motivator for personal growth than the desire for success. Share your thoughts.",
            "Most people who feel <strong>Trapped</strong> in life are held back by their own internal self-doubt rather than actual external barriers. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Expressing Unfulfilled Ambitions & Hypothetical Regrets',
        'lang_desc': 'In the song <strong>What\'ll It Be</strong>, the melancholic longing highlights <strong>Conditional Statements of Unfulfilled Potential & Future Regret</strong> (e.g., <em>If I don\'t leave now, I\'ll spend my whole life here; What if I\'m stuck here forever?</em>). This structure supports analyzing career crossroad choices.',
        'lang_examples': [
            'If I don\'t make a change now, I will spend the next ten years wondering what if.',
            'What if I stay in this town and turn into the bitter guy at the end of the bar?',
            'He feared that his unfulfilled ambition would turn into permanent regret.'
        ],
        'note_items': [
            ("He is afraid to be <span class=\"mistake-highlight\">trapped in his town</span>", "→", "He is afraid of being trapped in his town", "(Use 'afraid of + gerund'.)"),
            ("He regrets <span class=\"mistake-highlight\">to not leave earlier</span>", "→", "He regrets not leaving earlier", "(Use 'regret + gerund' for past actions.)"),
            ("He is waiting <span class=\"mistake-highlight\">for escape from the bar</span>", "→", "He is waiting to escape from the bar / waiting for an escape", "(Proper grammar structure.)")
        ]
    },

    'after-everything-ive-done-for-you': {
        'title': "After Everything I've Done for You",
        'id_suffix': 'after-everything-ive-done-for-you',
        'vocab': [
            {'word': 'Transaction', 'def': 'An instance of buying or selling something; a business deal.', 'ex': 'Paula views her friendship with Rebecca as a debt-filled emotional transaction.'},
            {'word': 'Resentment', 'def': 'Bitter indignation at having been treated unfairly or taken for granted.', 'ex': 'Years of secret meddling build up a terrifying wave of explosive resentment.'},
            {'word': 'Entitlement', 'def': 'The amount to which a person has a right; belief that one is deserving of privileges.', 'ex': 'Her entitlement stems from believing her illegal favors buy Rebecca\'s total loyalty.'},
            {'word': 'Manipulation', 'def': 'The action of manipulating someone in a clever or unscrupulous way.', 'ex': 'She lists every act of manipulation as proof of her ultimate love and devotion.'},
            {'word': 'Obligation', 'def': 'An act or course of action to which a person is morally or legally bound.', 'ex': 'Creating a sense of heavy obligation is a classic guilt-trip strategy.'},
            {'word': 'Sacrifice', 'def': 'An act of giving up something valued for the sake of something else.', 'ex': 'She exaggerates her personal sacrifice to make Rebecca feel completely indebted.'},
            {'word': 'Showstopper', 'def': 'A song or performance receiving prolonged applause, stopping the show.', 'ex': 'Paula delivers a jaw-dropping Gypsy-style Broadway showstopper of rage.'},
            {'word': 'Boundaries', 'def': 'A line that marks the limits of an area; emotional limits in relationships.', 'ex': 'Neither Paula nor Rebecca has any healthy respect for personal boundaries.'},
            {'word': 'Indebted', 'def': 'Owing gratitude or money to someone in return for an engine or favor.', 'ex': 'She demands that Rebecca feel forever indebted for her secret schemes.'},
            {'word': 'Explosive', 'def': 'Able or likely to shatter violently or burst out in anger.', 'ex': 'The sudden, explosive confrontation shatters their cozy dynamic.'}
        ],
        'r1': [
            ("In 'After Everything I've Done for You', Donna Lynne Champlin delivers a powerhouse Broadway showstopper demanding gratitude for illegal favors. How do toxic favors work?", "★ Have you ever felt trapped by a favor that someone did for you without your asking?"),
            ("Paula treats friendship as a transactional debt ledger. Why is viewing love as a <strong>Transaction</strong> destructive?", "★ How do you maintain genuine generosity without keeping a score or mental ledger?"),
            ("How does years of unexpressed <strong>Resentment</strong> turn a close friendship into a ticking time bomb?", "★ How do you address minor boundary violations before they build into explosive <strong>Resentment</strong>?"),
            ("Paula feels intense <strong>Entitlement</strong> to control Rebecca's personal life because of her secret help. How can help turn into control?", "★ Where is the line between helping a friend and trying to exert control over them?"),
            ("The lyrics list extreme <strong>Manipulation</strong> (like faking DNA tests) as proof of friendship. Why is this comedic and terrifying?", "★ Why do people sometimes justify terrible actions by claiming 'I did it out of love'?"),
            ("Paula uses heavy guilt to impose an emotional <strong>Obligation</strong> on Rebecca. How do you handle guilt trips?", "★ What is your go-to response when someone tries to place an unearned guilt trip on you?"),
            ("How does Paula's grand narrative of <strong>Sacrifice</strong> ignore the fact that nobody asked her to commit crimes?", "★ Why do people make unwanted sacrifices for others and then demand praise for them?"),
            ("What makes this Gypsy / 'Rose's Turn' style Broadway <strong>Showstopper</strong> so iconic and thrilling to perform?", "★ Why are dramatic villain/confrontation showstoppers so captivating in musical theater?"),
            ("How does the complete lack of personal <strong>Boundaries</strong> ruin both of their lives throughout the show?", "★ What personal <strong>Boundaries</strong> are essential for keeping a friendship healthy and equal?"),
            ("Ultimately, how does feeling perpetually <strong>Indebted</strong> destroy genuine warmth between friends?", "★ Can a friendship recover after one person demands total obedience as payment for past favors?")
        ],
        'r2': [
            "Any favor done with the expectation of future payback is an emotional <strong>Transaction</strong>, not true generosity. Let's debate this perspective.",
            "Unwanted <strong>Sacrifice</strong> made without permission creates toxic guilt and destroys equal friendships. Share your thoughts.",
            "Establishing strict personal <strong>Boundaries</strong> is more important for a friendship's survival than unconditional loyalty. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Present Perfect for Accumulated Grievance & Transactional Demands',
        'lang_desc': 'In the song <strong>After Everything I\'ve Done for You</strong>, the explosive demand for gratitude highlights <strong>Present Perfect for Cumulative Past Actions & Demands for Reciprocity</strong> (e.g., <em>After everything I\'ve done for you, I\'ve stolen, I\'ve lied, I\'ve sacrificed my life</em>). This structure supports summarizing accumulated effort.',
        'lang_examples': [
            'After everything I have done for this company, this is how I am treated!',
            'She has sacrificed her entire weekend to help you move into your apartment.',
            'I have lied, cheated, and broken rules all in the name of our friendship.'
        ],
        'note_items': [
            ("After everything I did for you <span class=\"mistake-highlight\">since three years</span>", "→", "After everything I've done for you for three years", "(Use Present Perfect 'I've done' + 'for' duration.)"),
            ("She feels indebted <span class=\"mistake-highlight\">toward her friend</span>", "→", "She feels indebted to her friend", "(Use 'indebted to' someone.)"),
            ("He sacrificed his career <span class=\"mistake-highlight\">for help her</span>", "→", "He sacrificed his career to help her", "(Use 'to + infinitive' for purpose.)")
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

def update_cxg_batch3():
    idx_path = os.path.join(CXG_DIR, 'index.html')
    with open(idx_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    for song_slug, data in CXG_BATCH3_DATA.items():
        print(f"Updating {song_slug} in index.html...")
        update_song_in_soup(soup, song_slug, data, is_standalone=False)

    with open(idx_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))

    for song_slug, data in CXG_BATCH3_DATA.items():
        standalone_path = os.path.join(CXG_DIR, f"{song_slug}.html")
        if os.path.exists(standalone_path):
            print(f"Updating standalone file {standalone_path}...")
            with open(standalone_path, 'r', encoding='utf-8') as f:
                s_soup = BeautifulSoup(f.read(), 'html.parser')
            update_song_in_soup(s_soup, song_slug, data, is_standalone=True)
            with open(standalone_path, 'w', encoding='utf-8') as f:
                f.write(str(s_soup))

    print("Batch 3 CXG Challenge files successfully updated with BeautifulSoup!")

if __name__ == '__main__':
    update_cxg_batch3()
