import os
import re
from bs4 import BeautifulSoup

CXG_DIR = 'apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/crazy-ex-girlfriend-challenge/'

CXG_BATCH1_DATA = {
    'lets-generalize-about-men': {
        'title': "Let's Generalize About Men",
        'id_suffix': 'lets-generalize-about-men',
        'vocab': [
            {'word': 'Generalize', 'def': 'To make a broad, sweeping statement by inferring from specific cases.', 'ex': 'Instead of processing one bad date, we decided to generalize about three billion men.', 'opp': 'Specify'},
            {'word': 'Satire', 'def': 'The use of humor, irony, or exaggeration to expose and criticize absurdity.', 'ex': 'The song is a brilliant satire of late-night alcohol-fueled group vent sessions.', 'opp': 'Sincerity'},
            {'word': 'Condescending', 'def': 'Having or showing a feeling of patronizing superiority.', 'ex': 'He gave a condescending explanation about a topic she had a PhD in.', 'opp': 'Humble'},
            {'word': 'Repressed', 'def': 'Restrained, inhibited, or oppressed, especially regarding emotions.', 'ex': 'Ranting about exes is a classic way to release years of repressed frustration.', 'opp': 'Expressed'},
            {'word': 'Anger', 'def': 'A strong feeling of annoyance, displeasure, or hostility.', 'ex': 'Her righteous anger was quickly converted into an upbeat 80s pop dance routine.', 'opp': 'Calm'},
            {'word': 'Blanket', 'def': 'Covering all cases or classes; total and indiscriminate.', 'ex': 'Issuing a blanket condemnation of an entire gender is scientifically flawed but cathartic.', 'opp': 'Targeted'},
            {'word': 'Conflate', 'def': 'To combine two or more texts, ideas, or individuals into one.', 'ex': 'It is easy to conflate bad personal choices with universal human flaws.', 'opp': 'Separate'},
            {'word': 'Exception', 'def': 'A person or thing that is excluded from a general statement.', 'ex': 'They intentionally ignored every good guy as an unhelpful exception to their rule.', 'opp': 'Rule'},
            {'word': 'Distinguish', 'def': 'To recognize or point out a difference between items or people.', 'ex': 'When you are furious, you rarely bother to distinguish nuance from malice.', 'opp': 'Confuse'},
            {'word': 'Nuance', 'def': 'A subtle difference in or shade of meaning, expression, or sound.', 'ex': 'Nuance completely disappears the moment a group anthem starts.', 'opp': 'Crudeness'}
        ],
        'r1': [
            ("In 'Let's Generalize About Men', Paula and Rebecca decide that every man on Earth is identical. How does <strong>Generalize</strong> mock internet outrage?", "★ When you are upset, do you tend to <strong>Generalize</strong> or look at individual facts?"),
            ("The song uses 80s synth-pop <strong>Satire</strong> to highlight absurd groupthink. Why does music make social critiques so fun?", "★ What is your favorite piece of cultural <strong>Satire</strong> that made you laugh at everyday habits?"),
            ("When dealing with a <strong>Condescending</strong> comment, why is it tempting to write off the entire group?", "★ How do you calmly handle a <strong>Condescending</strong> remark from a colleague or acquaintance?"),
            ("The characters release <strong>Repressed</strong> annoyance through exaggerated accusations. Is venting hyperbole healthy?", "★ What is your go-to method for releasing <strong>Repressed</strong> stress after a long week?"),
            ("How does turning individual <strong>Anger</strong> into a synchronized pop dance number subvert traditional heartbreak songs?", "★ Do you prefer working through <strong>Anger</strong> through humor or quiet solitude?"),
            ("The lyrics issue a hilarious <strong>Blanket</strong> statement that 'all men are total trash'. Why is sweeping drama so addictive?", "★ Why do people love making dramatic <strong>Blanket</strong> statements when complaining with friends?"),
            ("Why do we tend to <strong>Conflate</strong> one ex-partner's bad habits with every future person we meet?", "★ How do you stop yourself from trying to <strong>Conflate</strong> past bad experiences with new opportunities?"),
            ("In the song, any decent man is dismissed as a useless <strong>Exception</strong>. Why does nuance ruin a good rant?", "★ Have you ever been the lone <strong>Exception</strong> to a stereotype someone held about your group?"),
            ("The characters intentionally refuse to <strong>Distinguish</strong> between mild flaws and terrible crimes. How does hyperbole work?", "★ Is it important to <strong>Distinguish</strong> small mistakes from major red flags in dating?"),
            ("Why is emotional <strong>Nuance</strong> the first casualty of an angry group vent session?", "★ How do you maintain <strong>Nuance</strong> when discussing polarizing topics online?")
        ],
        'r2': [
            "Making sweeping <strong>Blanket</strong> statements about groups of people is a necessary coping mechanism during emotional distress. Let's debate this perspective.",
            "Humorous <strong>Satire</strong> is far better at exposing cultural absurdities than solemn, serious lectures. Share your thoughts.",
            "Refusing to acknowledge <strong>Nuance</strong> in relationships inevitably leads to repetitive personal drama. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Indefinite Pronouns & Universal Quantifiers (*all, every, no one*)',
        'lang_desc': 'In the song <strong>Let\'s Generalize About Men</strong>, the satirical exaggeration highlights <strong>Universal Quantifiers & Sweep Hyperbole</strong> (e.g., <em>all men, every single one, no man ever</em>). This structure supports analyzing comedic hyperbole.',
        'lang_examples': [
            'All men, everywhere, without exception, are completely identical!',
            'Every single time I try to reason, no one ever listens to nuance.',
            'No man in human history has ever cleaned a sink properly.'
        ],
        'note_items': [
            ("Let's generalize <span class=\"mistake-highlight\">for all men</span>", "→", "Let's generalize about all men", "(Use the preposition 'about' after 'generalize'.)"),
            ("They conflate his mistake <span class=\"mistake-highlight\">with all the humanity</span>", "→", "They conflate his mistake with universal flaws", "(Use 'conflate A with B' without unnecessary articles.)"),
            ("He is an exception <span class=\"mistake-highlight\">of the rule</span>", "→", "He is an exception to the rule", "(Use the fixed prepositional phrase 'exception to the rule'.)")
        ]
    },

    'so-maternal': {
        'title': 'So Maternal',
        'id_suffix': 'so-maternal',
        'theme_title': '❤️ Theme: Competitive Parenting & Aggressive Nurturing',
        'theme_bullets': ['Maternal', 'Overzealous', 'Competitive', 'Personal reflection'],
        'vocab': [
            {'word': 'Maternal', 'def': 'Relating to a mother, especially in showing affection or instinct.', 'ex': 'Rebecca\'s sudden maternal urge was less about love and more about proving a point.', 'opp': 'Paternal'},
            {'word': 'Overzealous', 'def': 'Too zealous; overly enthusiastic and aggressive in pursuit of a goal.', 'ex': 'An overzealous babysitter can turn a peaceful afternoon into a military exercise.', 'opp': 'Indifferent'},
            {'word': 'Compulsive', 'def': 'Resulting from or acting on an irresistible urge or impulse.', 'ex': 'Her compulsive need to fix other people\'s lives masked her own chaos.', 'opp': 'Deliberate'},
            {'word': 'Harrowing', 'def': 'Acutely distressing, painful, or terrifying.', 'ex': 'Babysitting a toddler proved to be a far more harrowing ordeal than expected.', 'opp': 'Soothing'},
            {'word': 'Matriarch', 'def': 'A woman who is the head of a family, group, or organizational hierarchy.', 'ex': 'She strutted into the nursery acting like an ancient, all-knowing matriarch.', 'opp': 'Patriarch'},
            {'word': 'Expectations', 'def': 'Strong beliefs that something will or should happen in a certain way.', 'ex': 'Unrealistic parenting expectations generate endless unnecessary guilt.', 'opp': 'Reality'},
            {'word': 'Instinctual', 'def': 'Relating to or prompted by natural impulse rather than training.', 'ex': 'She claimed her aggressive childcare methods were purely instinctual.', 'opp': 'Learned'},
            {'word': 'Tireless', 'def': 'Capable of working or continuing for a long time without fatigue.', 'ex': 'Her tireless devotion to organic gluten-free snacks exhausted everyone.', 'opp': 'Lethargic'},
            {'word': 'Raising', 'def': 'The process of bringing up and educating a child.', 'ex': 'Raising kids requires patience rather than performative perfection.', 'opp': 'Abandoning'},
            {'word': 'Perfect', 'def': 'Free from all flaws or defects; ideal in every way.', 'ex': 'Trying to appear like a perfect parent online is a recipe for burnout.', 'opp': 'Flawed'}
        ],
        'r1': [
            ("In 'So Maternal', Rebecca turns a brief babysitting gig into an aggressive ego flex. How does the song mock <strong>Maternal</strong> competition?", "★ Have you ever felt judged by someone displaying an <strong>Maternal</strong> or superior attitude?"),
            ("Why do <strong>Overzealous</strong> people often make simple tasks ten times more chaotic for everyone else?", "★ How do you handle an <strong>Overzealous</strong> coworker or friend who takes over a shared project?"),
            ("Rebecca\'s <strong>Compulsive</strong> urge to win at babysitting leads to total disaster. Why is validation so addictive?", "★ How do you keep <strong>Compulsive</strong> perfectionism from ruining your enjoyment of hobbies?"),
            ("The song turns a routine afternoon into a <strong>Harrowing</strong> comedy of errors. Why is over-parenting funny in fiction?", "★ What was a minor task that turned into a surprisingly <strong>Harrowing</strong> situation for you?"),
            ("Rebecca declares herself the ultimate <strong>Matriarch</strong> after two hours with a kid. How does vanity blind us?", "★ Who is the undisputed <strong>Matriarch</strong> or pillar of leadership in your family or friend group?"),
            ("How do modern social media <strong>Expectations</strong> pressure people to perform ideal adult lives?", "★ How do you manage your own <strong>Expectations</strong> when starting something completely new?"),
            ("Rebecca insists her aggressive skills are <strong>Instinctual</strong>, despite knowing nothing about kids. How does confidence mislead?", "★ Do you trust your <strong>Instinctual</strong> gut feelings or prefer thorough research first?"),
            ("The track parodies <strong>Tireless</strong> mom-bloggers who never drop the act. Why is performative energy tiring?", "★ What is an activity where you possess <strong>Tireless</strong> energy and focus?"),
            ("How does the song show that <strong>Raising</strong> children is about genuine care rather than winning awards?", "★ What valuable lesson did your family teach you about <strong>Raising</strong> good human beings?"),
            ("Why is the myth of the <strong>Perfect</strong> caretaker or adult impossible to achieve in real life?", "★ How do you embrace your flaws instead of striving for a <strong>Perfect</strong> image?")
        ],
        'r2': [
            "Modern culture turns parenting into a competitive sport driven by performative <strong>Expectations</strong> rather than genuine care. Let's debate this perspective.",
            "Acts of extreme <strong>Overzealous</strong> help are often motivated by personal insecurity rather than genuine altruism. Share your thoughts.",
            "Striving to appear <strong>Perfect</strong> in any role inevitably creates a <strong>Harrowing</strong> environment for those around you. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Self-Aggrandizing Exclamations & Comparative Adjectives',
        'lang_desc': 'In the song <strong>So Maternal</strong>, the exaggerated self-praise highlights <strong>Comparative Adjectives & Ego Claims</strong> (e.g., <em>so much better, far more capable, the most instinctual</em>). This structure supports analyzing comedic boastfulness.',
        'lang_examples': [
            'I am so much more maternal than any real mother could ever be!',
            'She is far more efficient at managing chaos than her colleagues.',
            'This is the most incredible demonstration of parenting in history.'
        ],
        'note_items': [
            ("She is so maternal <span class=\"mistake-highlight\">than her sister</span>", "→", "She is more maternal than her sister", "(Use 'more... than' for comparative adjectives, reserve 'so' for intensity without 'than'.)"),
            ("She is good <span class=\"mistake-highlight\">in raising kids</span>", "→", "She is good at raising kids", "(Use 'good at' when expressing skill or competence.)"),
            ("They have high expectations <span class=\"mistake-highlight\">for the child</span>", "→", "They have high expectations of the child", "(Use 'expectations of' someone.)")
        ]
    },

    'face-your-fears': {
        'title': 'Face Your Fears',
        'id_suffix': 'face-your-fears',
        'theme_title': '❤️ Theme: Comedic Bad Advice & Absurd Recklessness',
        'theme_bullets': ['Insecurity', 'Reckless', 'Platitudes', 'Personal reflection'],
        'vocab': [
            {'word': 'Insecurity', 'def': 'Uncertainty or anxiety about oneself; lack of confidence.', 'ex': 'Paula\'s gospel anthem encourages Rebecca to ignore basic self-preservation due to insecurity.', 'opp': 'Confidence'},
            {'word': 'Fear', 'def': 'An unpleasant emotion caused by belief in impending danger.', 'ex': 'Facing your fear is good advice, unless your fear is jumping off a cliff without a parachute.', 'opp': 'Calm'},
            {'word': 'Tiptoe', 'def': 'To walk quietly and carefully with heels raised.', 'ex': 'You cannot tiptoe through life if you want to make a bold impact.', 'opp': 'Stomp'},
            {'word': 'Frightened', 'def': 'Afraid, anxious, or fearful.', 'ex': 'She was frightened of public speaking, so she pictured the audience in pajamas.', 'opp': 'Fearless'},
            {'word': 'Stare', 'def': 'To look fixedly or vacantly at someone or something with eyes wide open.', 'ex': 'The song literally advises you to stare directly into a bear\'s eyes.', 'opp': 'Glance'},
            {'word': 'Scary', 'def': 'Causing fear; frightening.', 'ex': 'Taking a career risk is scary, but so is staying stuck forever.', 'opp': 'Comforting'},
            {'word': 'Courage', 'def': 'Bravery and mind strength in the face of pain or grief.', 'ex': 'True courage is distinguishing between brave risk-taking and sheer stupidity.', 'opp': 'Cowardice'},
            {'word': 'Reckless', 'def': 'Without caution; careless of consequences or danger.', 'ex': 'Paula\'s motivational speech crosses the line into hilarious, reckless endangerment.', 'opp': 'Cautious'},
            {'word': 'Platitude', 'def': 'A flat, dull, or trite remark uttered as if it were fresh or profound.', 'ex': 'Self-help books are often full of empty platitudes that ignore reality.', 'opp': 'Insight'},
            {'word': 'Danger', 'def': 'The possibility of suffering harm or injury.', 'ex': 'Ignoring actual danger in the name of confidence is a terrible strategy.', 'opp': 'Safety'}
        ],
        'r1': [
            ("In 'Face Your Fears', Paula sings a gospel choir anthem giving lethal advice like 'run with scissors'. How does it spoof motivational <strong>Platitudes</strong>?", "★ What is the worst or most cliché motivational <strong>Platitude</strong> you have ever received?"),
            ("The song advises ignoring healthy <strong>Insecurity</strong> and jumping off buildings. Why is blind confidence dangerous?", "★ How do you distinguish between healthy caution and irrational <strong>Insecurity</strong>?"),
            ("When Paula urges Rebecca to run straight toward <strong>Danger</strong>, how does the show highlight bad decision-making?", "★ Have you ever ignored clear signs of <strong>Danger</strong> because you wanted to prove something?"),
            ("Why is it bad advice to <strong>Stare</strong> down a literal bear in the woods?", "★ What is a hilarious example of advice that sounds inspiring but is completely <strong>Reckless</strong> in practice?"),
            ("The song tells you never to <strong>Tiptoe</strong> through life. Where is the balance between caution and bold action?", "★ In what situation did you stop trying to <strong>Tiptoe</strong> and finally take a bold stand?"),
            ("Why are people so <strong>Frightened</strong> of failure that they listen to absurd gurus?", "★ When you feel <strong>Frightened</strong> about trying something new, how do you calm your mind?"),
            ("The track turns a <strong>Scary</strong> situation into a triumphant gospel celebration. How does music change perception?", "★ What is something that used to feel deeply <strong>Scary</strong> to you that you now handle easily?"),
            ("How does the song redefine <strong>Courage</strong> by showing that unthinking bravery is just foolishness?", "★ What does genuine, thoughtful <strong>Courage</strong> look like in everyday adult life?"),
            ("Paula urges Rebecca to be completely <strong>Reckless</strong> in her pursuit of love. Why do friends encourage bad choices?", "★ Why are we often far more <strong>Reckless</strong> when giving advice to friends than when acting for ourselves?"),
            ("How does confronting a real <strong>Fear</strong> differ from taking an unnecessary, stupid risk?", "★ What is one genuine <strong>Fear</strong> you successfully faced and overcame?")
        ],
        'r2': [
            "Most self-help <strong>Platitudes</strong> encourage <strong>Reckless</strong> behavior by confusing basic caution with cowardice. Let's debate this perspective.",
            "True <strong>Courage</strong> lies in knowing when to walk away from <strong>Danger</strong> rather than stubbornly facing every threat. Share your thoughts.",
            "People follow bad advice because the fear of staying stuck outweighs the fear of making a <strong>Scary</strong> mistake. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Imperatives & Comedic Extreme Directives',
        'lang_desc': 'In the song <strong>Face Your Fears</strong>, the parody of gospel advice highlights <strong>Direct Imperatives & Hyperbolic Directives</strong> (e.g., <em>run with scissors, jump out of the plane, stare at the sun</em>). This structure supports analyzing comedic commands.',
        'lang_examples': [
            'Run directly with scissors toward your ultimate destiny!',
            'Stare straight into the bear\'s eyes and assert your dominance.',
            'Jump out of the airplane without checking your parachute!'
        ],
        'note_items': [
            ("She told him to face <span class=\"mistake-highlight\">to his fears</span>", "→", "She told him to face his fears", "(Do not insert 'to' after the transitive verb 'face'.)"),
            ("He is frightened <span class=\"mistake-highlight\">from the dark</span>", "→", "He is frightened of the dark", "(Use 'frightened of' or 'frightened by'.)"),
            ("Running with scissors is a <span class=\"mistake-highlight\">reckless act of danger</span>", "→", "Running with scissors is a reckless, dangerous act", "(Use adjectives in sequence cleanly.)")
        ]
    },

    'sexy-getting-ready-song': {
        'title': 'Sexy Getting Ready Song',
        'id_suffix': 'sexy-getting-ready-song',
        'theme_title': '❤️ Theme: Beauty Standards, Patriarchal Labor & Grooming Reality',
        'theme_bullets': ['Grooming', 'Patriarchal', 'Absurd', 'Personal reflection'],
        'vocab': [
            {'word': 'Grooming', 'def': 'The practice of maintaining a neat and clean personal appearance.', 'ex': 'The song contrasts R&B glamour with the gory, painful reality of female grooming.', 'opp': 'Neglect'},
            {'word': 'Patriarchal', 'def': 'Relating to a system or society controlled by men.', 'ex': 'She realizes her painful beauty routine is an obligation imposed by a patriarchal society.', 'opp': 'Matriarchal'},
            {'word': 'Absurd', 'def': 'Wildly unreasonable, illogical, or ridiculous.', 'ex': 'Bleeding from body hair removal while preparing for a casual date is totally absurd.', 'opp': 'Sensible'},
            {'word': 'Shaving', 'def': 'The removal of hair from the body using a razor.', 'ex': 'Shaving in a cramped shower leads to inevitable cuts and frustration.', 'opp': 'Growing'},
            {'word': 'Painful', 'def': 'Causing physical or mental pain.', 'ex': 'Waxing body hair is a painful price paid in the pursuit of arbitrary beauty norms.', 'opp': 'Painless'},
            {'word': 'Silhouette', 'def': 'The dark shape and outline of someone or something visible against a lighter background.', 'ex': 'Squeezing into body-shaping underwear alters your natural silhouette.', 'opp': 'Detail'},
            {'word': 'Waxing', 'def': 'The process of removing hair from the root using sticky wax.', 'ex': 'Hot waxing requires a level of pain tolerance usually reserved for torture.', 'opp': 'Trimming'},
            {'word': 'Plucking', 'def': 'Pulling out hair or feathers with a sudden pull.', 'ex': 'Plucking eyebrows under harsh bathroom lighting is a meticulous ordeal.', 'opp': 'Inserting'},
            {'word': 'Spanx', 'def': 'Tight, elastic undergarments worn to shape the body.', 'ex': 'Wrestling yourself into a pair of Spanx is a full-body workout in itself.', 'opp': 'Loose clothing'},
            {'word': 'Apologize', 'def': 'To express regret for something one has done wrong.', 'ex': 'The guest rapper takes one look at her grooming process and stops to apologize for men.', 'opp': 'Defend'}
        ],
        'r1': [
            ("In 'Sexy Getting Ready Song', Rachel Bloom parodies smooth R&B music by showing the bloody reality of female <strong>Grooming</strong>. Why is this contrast funny?", "★ What is the most <strong>Absurd</strong> or tedious beauty routine you have ever witnessed or tried?"),
            ("When the guest rapper learns what women go through, he pauses to <strong>Apologize</strong> on behalf of men. How does the song expose gender gaps?", "★ Do you think men and women face equal pressure regarding personal <strong>Grooming</strong> today?"),
            ("The song explicitly calls out the <strong>Patriarchal</strong> expectations behind beauty standards. How do societal norms dictate appearance?", "★ How can people resist <strong>Patriarchal</strong> or artificial beauty standards in daily life?"),
            ("Why is the process of body hair removal portrayed as so bloody and <strong>Painful</strong> in the video?", "★ Why do people willingly endure <strong>Painful</strong> fashion or beauty trends for social occasions?"),
            ("Squeezing into restrictive clothing to change one's <strong>Silhouette</strong> is a major theme. Why is comfort often sacrificed?", "★ Do you prioritize physical comfort or formal elegance when dressing for an event?"),
            ("How does the song highlight the hidden physical labor of <strong>Shaving</strong>, <strong>Waxing</strong>, and <strong>Plucking</strong>?", "★ What is a daily routine task that takes far more time and effort than people realize?"),
            ("The lyrics detail wrestling with <strong>Spanx</strong> before a date. How does fashion restrict natural movement?", "★ Why has body-shaping innerwear become such a multi-billion dollar industry?"),
            ("How does the track use graphic visual realism to dismantle the fantasy of 'effortless' beauty?", "★ Why is the myth of 'effortless beauty' harmful to young people's self-esteem?"),
            ("What makes the sudden transition from sultry R&B music to horror-movie imagery so effective as satire?", "★ How does satire help us talk about uncomfortable cultural topics?"),
            ("Ultimately, the song asks who beauty is really for. Do we dress up for ourselves or for others?", "★ When you get dressed up, do you do it for your own confidence or to meet external standards?")
        ],
        'r2': [
            "Modern beauty standards are a form of mandatory <strong>Patriarchal</strong> labor that inflicts unnecessary financial and physical strain. Let's debate this perspective.",
            "The cultural expectation of 'effortless elegance' is an <strong>Absurd</strong> myth built on hidden, uncomfortable work. Share your thoughts.",
            "Men and women will never have equal preparation pressure until media representations portray realistic <strong>Grooming</strong> routines. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Present Continuous for Active Preparation & Labor',
        'lang_desc': 'In the song <strong>Sexy Getting Ready Song</strong>, the contrast between sultry music and active labor highlights <strong>Present Continuous for Ongoing Preparation</strong> (e.g., <em>shaving my legs, waxing my skin, squeezing into Spanx</em>). This structure supports describing active tasks.',
        'lang_examples': [
            'I am currently wrestling myself into this restrictive dress.',
            'She is spending two hours plucking and waxing before the date.',
            'They are getting ready while evaluating double standards.'
        ],
        'note_items': [
            ("She is getting ready <span class=\"mistake-highlight\">for go out</span>", "→", "She is getting ready to go out", "(Use 'ready to + infinitive' or 'ready for + noun'.)"),
            ("He apologized <span class=\"mistake-highlight\">for the patriarchal system</span>", "→", "He apologized on behalf of men for the patriarchal system", "(Use 'on behalf of' when representing a group.)"),
            ("Squeezing into Spanx is <span class=\"mistake-highlight\">a very painful work</span>", "→", "Squeezing into Spanx is very painful work", "(Do not use indefinite article 'a' with uncountable noun 'work'.)")
        ]
    },

    'sex-with-a-stranger': {
        'title': 'Sex with a Stranger',
        'id_suffix': 'sex-with-a-stranger',
        'theme_title': '❤️ Theme: Paranoia, True Crime & Hookup Anxiety',
        'theme_bullets': ['Paranoia', 'True Crime', 'Awkwardness', 'Personal reflection'],
        'vocab': [
            {'word': 'Stranger', 'def': 'A person whom one does not know or with whom one is not familiar.', 'ex': 'Hooking up with a stranger sounds romantic until your true crime brain kicks in.', 'opp': 'Acquaintance'},
            {'word': 'Dangerous', 'def': 'Able or likely to cause harm or injury.', 'ex': 'She convinced herself that a mild-mannered guy named Scott was a dangerous serial killer.', 'opp': 'Safe'},
            {'word': 'Paranoia', 'def': 'Unjustified suspicion and mistrust of other people.', 'ex': 'Watching too many murder documentaries induces acute, hilarious paranoia.', 'opp': 'Trust'},
            {'word': 'Hotel', 'def': 'An establishment providing accommodation, meals, and other services.', 'ex': 'A neutral hotel room feels like a crime scene waiting to happen when you are anxious.', 'opp': 'Home'},
            {'word': 'Murderer', 'def': 'A person who commits murder.', 'ex': 'Every strange noise made her suspect he was secretly an escaped murderer.', 'opp': 'Victim'},
            {'word': 'Excitement', 'def': 'A feeling of great enthusiasm and eagerness.', 'ex': 'The initial excitement of casual dating was completely drowned out by fear.', 'opp': 'Boredom'},
            {'word': 'Safe', 'def': 'Protected from or not exposed to danger or risk.', 'ex': 'She texted her best friend her exact GPS location just to feel safe.', 'opp': 'Vulnerable'},
            {'word': 'Intimacy', 'def': 'Close familiarity or friendship; closeness.', 'ex': 'Attempting physical intimacy with someone whose last name you don\'t know is awkward.', 'opp': 'Distance'},
            {'word': 'Kidney', 'def': 'Either of a pair of organs that filter blood, often featured in urban legends.', 'ex': 'She worried she would wake up in an ice bath missing an entire kidney.', 'opp': 'N/A'},
            {'word': 'Awkward', 'def': 'Causing or feeling embarrassment or inconvenience.', 'ex': 'Navigating small talk with a stranger in a quiet bedroom is deeply awkward.', 'opp': 'Graceful'}
        ],
        'r1': [
            ("In 'Sex with a Stranger', Rebecca\'s inner monologue is dominated by true crime <strong>Paranoia</strong>. Why do people suspect the worst?", "★ Has watching true crime podcasts or shows ever made you unnecessarily suspicious of a <strong>Stranger</strong>?"),
            ("The song contrasts sultry romantic intentions with the fear of a secret <strong>Murderer</strong>. Why is this juxtaposition hilarious?", "★ How do you handle situations where your brain jumps to the most dramatic, <strong>Dangerous</strong> conclusion?"),
            ("Rebecca constantly worries about whether she is in a <strong>Safe</strong> environment. What precautions do modern daters take?", "★ What safety rules or boundaries do you or your friends use when meeting new people?"),
            ("The lyrics mention urban legends about waking up without a <strong>Kidney</strong>. Why do ridiculous myths persist?", "★ What is a funny urban legend or rumor that you secretly worried was real when you were younger?"),
            ("How does the song capture the extreme <strong>Awkward</strong> tension of casual hookup small talk?", "★ How do you break the ice when entering an <strong>Awkward</strong> social or professional situation?"),
            ("Why does the initial thrill of <strong>Excitement</strong> in dating often turn into overthinking and anxiety?", "★ How do you stay present and calm when feeling anxious about a new venture?"),
            ("Rebecca plans her escape route from the <strong>Hotel</strong> room just in case. Is over-preparing a sign of wisdom or stress?", "★ Are you an over-preparer who plans worst-case scenarios, or do you go with the flow?"),
            ("How does the track explore the difficulty of building real <strong>Intimacy</strong> when trust hasn\'t been earned yet?", "★ What does it take for you to feel genuine trust and <strong>Intimacy</strong> with someone new?"),
            ("How does the song show that modern true crime media has permanently altered how we perceive casual encounters?", "★ Do you think true crime entertainment makes society safer or just more paranoid?"),
            ("Ultimately, how does Rebecca balance her romantic desires against her wild <strong>Paranoia</strong>?", "★ How do you balance being cautious with remaining open to new people and experiences?")
        ],
        'r2': [
            "Overconsumption of true crime media has ruined casual social interactions by instilling constant <strong>Paranoia</strong>. Let's debate this perspective.",
            "Taking extreme safety precautions when meeting a <strong>Stranger</strong> is practical common sense, not irrational fear. Share your thoughts.",
            "True emotional <strong>Intimacy</strong> is impossible to achieve in casual dating settings without prior trust. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Modals of Deduction & Anxiety (*must be, could be*)',
        'lang_desc': 'In the song <strong>Sex with a Stranger</strong>, the anxious internal monologue highlights <strong>Modals of Speculation & Deduction</strong> (e.g., <em>he must be an axe murderer, he could be hiding an axe, he might harvest my kidney</em>). This structure supports expressing dramatic suspicions.',
        'lang_examples': [
            'He must be an escaped murderer because his bathroom is too clean!',
            'She could be texting her friends my exact location right now.',
            'That strange noise might be a warning sign that I should run.'
        ],
        'note_items': [
            ("She is afraid from <span class=\"mistake-highlight\">the stranger</span>", "→", "She is afraid of the stranger", "(Use 'afraid of' when expressing fear toward someone or something.)"),
            ("He must to be <span class=\"mistake-highlight\">a murderer</span>", "→", "He must be a murderer", "(Do not use 'to' after modal auxiliary 'must'.)"),
            ("She wants to feel <span class=\"mistake-highlight\">safely in the room</span>", "→", "She wants to feel safe in the room", "(Use predicate adjective 'safe' after linking verb 'feel'.)")
        ]
    },

    'settle-for-me': {
        'title': 'Settle for Me',
        'id_suffix': 'settle-for-me',
        'theme_title': '❤️ Theme: Self-Deprecating Courtship & Second Choice Elegance',
        'theme_bullets': ['Settle', 'Ballroom', 'Second Choice', 'Personal reflection'],
        'vocab': [
            {'word': 'Settle', 'def': 'To accept or agree to something that is not one\'s first choice or ideal.', 'ex': 'Greg\'s courtship pitch is an invitation for Rebecca to settle for him as a backup plan.', 'opp': 'Demand'},
            {'word': 'Second', 'def': 'Coming next after the first in order, rank, or preference.', 'ex': 'Being someone\'s second choice is awkward, but Greg turns it into a vintage Fred Astaire dance.', 'opp': 'First'},
            {'word': 'Choice', 'def': 'An act of selecting or choosing between options.', 'ex': 'He openly acknowledges he is her last choice, but promises to be a reliable one.', 'opp': 'Mandate'},
            {'word': 'Dance', 'def': 'To move rhythmically to music, often in a stylized courtship ritual.', 'ex': 'They perform an elegant ballroom dance while singing about tragic romantic compromise.', 'opp': 'Stillness'},
            {'word': 'Compromise', 'def': 'An agreement reached by each side making concessions.', 'ex': 'Relationships require healthy compromise, but settling out of desperation is different.', 'opp': 'Stubbornness'},
            {'word': 'Ballroom', 'def': 'A large room used for formal dancing.', 'ex': 'The classic Hollywood ballroom aesthetic contrasts hilariously with the pathetic lyrics.', 'opp': 'Street'},
            {'word': 'Desperation', 'def': 'A state of despair, typically one which results in reckless behavior.', 'ex': 'Accepting a date out of sheer desperation rarely leads to lasting happiness.', 'opp': 'Serenity'},
            {'word': 'Romance', 'def': 'A feeling of excitement and mystery associated with love.', 'ex': 'Greg tries to package uninspired second-place affection as classic romance.', 'opp': 'Cynicism'},
            {'word': 'Subpar', 'def': 'Below an average, usual, or normal level or quality.', 'ex': 'He pitches himself as a subpar alternative to her unobtainable crush.', 'opp': 'Superior'},
            {'word': 'Suitcase', 'def': 'A case with a handle and hinged lid, used for carrying clothes.', 'ex': 'She kept her emotional baggage packed in a suitcase, ready to run.', 'opp': 'N/A'}
        ],
        'r1': [
            ("In 'Settle for Me', Greg sings a suave Fred Astaire-style duet asking Rebecca to <strong>Settle</strong> for him. Why is this sales pitch so funny?", "★ What is the most hilarious or self-deprecating pitch someone has ever made to you?"),
            ("Greg openly accepts being her <strong>Second</strong> choice behind Josh. How does the song mock romantic pride?", "★ How would you feel if someone explicitly told you that you were their <strong>Second</strong> choice?"),
            ("The track uses vintage <strong>Ballroom</strong> elegance to deliver pathetic, desperate lyrics. Why does style contrast work?", "★ What is a movie or musical where the visual style completely contradicted the story?"),
            ("Greg promises that if she lowers her standards, he is a reliable <strong>Choice</strong>. Is reliability underrated in dating?", "★ What qualities do you value most when making an important personal <strong>Choice</strong>?"),
            ("The song presents romantic <strong>Compromise</strong> in the most uninspiring light possible. Where is the line between compromise and settling?", "★ What is the difference between a healthy <strong>Compromise</strong> and settling for less than you deserve?"),
            ("Why does Greg\'s self-deprecating honesty make his character endearing despite his low self-esteem?", "★ Do you find self-deprecating humor charming or annoying in social settings?"),
            ("How does the song show that acting out of romantic <strong>Desperation</strong> can lead to bizarre relationship dynamics?", "★ How do you maintain your self-respect and avoid making decisions out of <strong>Desperation</strong>?"),
            ("How does 'Settle for Me' subvert classic Hollywood <strong>Romance</strong> tropes where the hero effortlessly wins the girl?", "★ What classic <strong>Romance</strong> trope in movies do you find most unrealistic in real life?"),
            ("Greg pitches himself as a <strong>Subpar</strong> option who is 'okay-ish'. Why do people downplay their worth?", "★ How do you overcome self-doubt when you feel your work or effort is <strong>Subpar</strong>?"),
            ("Ultimately, does Rebecca agree to dance because she likes Greg, or because she hates being alone?", "★ Why do people sometimes stay in relationships that they know are not right for them?")
        ],
        'r2': [
            "Accepting a <strong>Second</strong> choice option and agreeing to <strong>Settle</strong> is better than remaining alone in perpetual ideal fantasy. Let's debate this perspective.",
            "Packaging romantic <strong>Desperation</strong> in charming <strong>Ballroom</strong> aesthetics does not make settling healthy. Share your thoughts.",
            "Self-deprecating honesty is far more attractive in dating than arrogant, unearned confidence. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Subjunctive & Conditional Invitations (*If you\'re tired of... then settle*)',
        'lang_desc': 'In the song <strong>Settle for Me</strong>, the self-deprecating proposal highlights <strong>Conditional Conditional Invitations & Low Expectations</strong> (e.g., <em>If you can\'t have him, then settle for me; Should you give up, I\'ll be right here</em>). This structure supports analyzing ironic offers.',
        'lang_examples': [
            'If you are completely out of options, then you can settle for me!',
            'Should your ideal crush reject you, I am right here as a second choice.',
            'If you lower your expectations, you might actually enjoy the date.'
        ],
        'note_items': [
            ("Don't settle <span class=\"mistake-highlight\">with less</span> than you deserve", "→", "Don't settle for less than you deserve", "(Use 'settle for' when accepting an alternative option.)"),
            ("He is her second choice <span class=\"mistake-highlight\">after Josh</span>", "→", "He is her second choice after Josh / behind Josh", "(Proper prepositions of ranking.)"),
            ("They danced in <span class=\"mistake-highlight\">a ballroom room</span>", "→", "They danced in a ballroom", "(Omit redundant 'room' after 'ballroom'.)")
        ]
    },

    'im-a-good-person': {
        'title': "I'm a Good Person",
        'id_suffix': 'im-a-good-person',
        'theme_title': '❤️ Theme: Performative Altruism & Passive-Aggressive Virtue',
        'theme_bullets': ['Good Person', 'Performative', 'Altruism', 'Personal reflection'],
        'vocab': [
            {'word': 'Person', 'def': 'A human being regarded as an individual.', 'ex': 'Rebecca aggressively insists to a room full of strangers that she is a good person.', 'opp': 'N/A'},
            {'word': 'Donate', 'def': 'To give money or goods to a good cause, especially to a charity.', 'ex': 'Bragging about how much you donate completely ruins the altruistic gesture.', 'opp': 'Withhold'},
            {'word': 'Altruism', 'def': 'The belief in or practice of disinterested and selfless concern for others.', 'ex': 'Performative altruism is motivated by a desire for public applause.', 'opp': 'Egoism'},
            {'word': 'Friendly', 'def': 'Kind and pleasant in demeanor.', 'ex': 'She delivers her friendly greetings with a terrifying, passive-aggressive glare.', 'opp': 'Hostile'},
            {'word': 'Good', 'def': 'To be desired or approved of; showing high moral standards.', 'ex': 'Truly good people don\'t need to curse and threaten you to prove their virtue.', 'opp': 'Bad'},
            {'word': 'Humble', 'def': 'Having or showing a modest or low estimate of one\'s own importance.', 'ex': 'Proclaiming "I am the most humble person in this town" is completely ironic.', 'opp': 'Arrogant'},
            {'word': 'Validation', 'def': 'Recognition or affirmation that a person or their feelings are valid.', 'ex': 'Her desperate need for external validation drives her aggressive friendliness.', 'opp': 'Rejection'},
            {'word': 'Performative', 'def': 'Relating to or denoting an action done for show or effect.', 'ex': 'Posting every charitable deed on social media is peak performative behavior.', 'opp': 'Genuine'},
            {'word': 'Righteous', 'def': 'Morally right or justifiable; virtuous.', 'ex': 'Her righteous indignation erupted when a stranger failed to compliment her.', 'opp': 'Sinful'},
            {'word': 'Ego', 'def': 'A person\'s sense of self-esteem or self-importance.', 'ex': 'Her fragile ego required constant praise from everyone in the bar.', 'opp': 'Modesty'}
        ],
        'r1': [
            ("In 'I'm a Good Person', Rebecca aggressively threatens people until they agree she is nice. How does this parody <strong>Performative</strong> virtue?", "★ Have you ever met someone whose kindness felt completely forced or <strong>Performative</strong>?"),
            ("When someone boasts about how much they <strong>Donate</strong> to charity, does it lessen the goodwill?", "★ Why is genuine, quiet <strong>Altruism</strong> far more respected than public bragging?"),
            ("Rebecca screams that she is the most <strong>Humble</strong> person in the city. Why is 'humblebragging' so annoying?", "★ What is a funny example of a 'humblebrag' you have seen online or in real life?"),
            ("The song shows that a desperate search for <strong>Validation</strong> can drive people to act erratically. Why is self-worth key?", "★ How do you build internal self-worth without relying on social media <strong>Validation</strong>?"),
            ("Why does Rebecca feel the need to prove she is a <strong>Good</strong> <strong>Person</strong> to complete strangers?", "★ Why do people care so much about whether strangers view them as a 'good <strong>Person</strong>'??"),
            ("How does the track contrast a sweet <strong>Friendly</strong> pop tune with profane, aggressive lyrics?", "★ Why is passive-aggressive friendliness sometimes scarier than open anger?"),
            ("Rebecca\'s <strong>Righteous</strong> anger explodes when someone questions her intentions. Why do defensive reactions happen?", "★ How do you react when someone misinterprets your intentions or actions?"),
            ("How does the song expose the role of <strong>Ego</strong> in performative charity work?", "★ How can people ensure their charitable efforts actually help others rather than just feed their <strong>Ego</strong>?"),
            ("Why is it ironic that Rebecca uses threats and insults to prove her moral superiority?", "★ Why do people who shout loudest about their morals often have the most to hide?"),
            ("Ultimately, what does 'I'm a Good Person' teach us about authentic human decency?", "★ What is your personal definition of what makes someone a genuinely good human being?")
        ],
        'r2': [
            "Boasting about charitable acts and seeking public <strong>Validation</strong> turns genuine <strong>Altruism</strong> into hollow PR. Let's debate this perspective.",
            "Truly <strong>Good</strong> people do not need to constantly defend their character or demand praise from others. Share your thoughts.",
            "Modern culture encourages <strong>Performative</strong> morality where looking virtuous online is valued over quiet, real-world decency. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Aggressive Assertions & Self-Proclamations (*I am the most...*)',
        'lang_desc': 'In the song <strong>I\'m a Good Person</strong>, the passive-aggressive virtue-signaling highlights <strong>Superlative Self-Proclamations & Aggressive Assertions</strong> (e.g., <em>I\'m the most humble, I\'m a good person, ask anyone</em>). This structure supports analyzing performative speech.',
        'lang_examples': [
            'I am literally the most generous person you will ever meet in this town!',
            'Ask anyone in this bar and they will tell you how humble I am.',
            'She is constantly asserting that her intentions are completely pure.'
        ],
        'note_items': [
            ("She boasts about how she is <span class=\"mistake-highlight\">a good person to everyone</span>", "→", "She boasts that she is a good person to everyone", "(Use 'boasts that' before a clause.)"),
            ("He donates money <span class=\"mistake-highlight\">for the charity</span>", "→", "He donates money to charity", "(Use 'donate to' without unnecessary articles before abstract 'charity'.)"),
            ("She is desperate <span class=\"mistake-highlight\">for validation of others</span>", "→", "She is desperate for validation from others", "(Use 'validation from' people.)")
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
        # Remove any orphaned round-2 outside round-body
        for old_r2 in d_block.find_all('div', class_='round-2'):
            if old_r2.parent != d_body:
                old_r2.extract()

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

def update_cxg_batch1():
    idx_path = os.path.join(CXG_DIR, 'index.html')
    with open(idx_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    for song_slug, data in CXG_BATCH1_DATA.items():
        print(f"Updating {song_slug} in index.html...")
        update_song_in_soup(soup, song_slug, data, is_standalone=False)

    with open(idx_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))

    for song_slug, data in CXG_BATCH1_DATA.items():
        standalone_path = os.path.join(CXG_DIR, f"{song_slug}.html")
        if os.path.exists(standalone_path):
            print(f"Updating standalone file {standalone_path}...")
            with open(standalone_path, 'r', encoding='utf-8') as f:
                s_soup = BeautifulSoup(f.read(), 'html.parser')
            update_song_in_soup(s_soup, song_slug, data, is_standalone=True)
            with open(standalone_path, 'w', encoding='utf-8') as f:
                f.write(str(s_soup))

    print("Batch 1 CXG Challenge files successfully updated with BeautifulSoup!")

if __name__ == '__main__':
    update_cxg_batch1()
