import os
import re
from bs4 import BeautifulSoup

CXG_DIR = 'apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/crazy-ex-girlfriend-challenge/'

CXG_BATCH4_DATA = {
    'dont-be-a-lawyer': {
        'title': "Don't Be a Lawyer",
        'id_suffix': 'dont-be-a-lawyer',
        'vocab': [
            {'word': 'Profession', 'def': 'A paid occupation, especially one that involves prolonged training and a formal qualification.', 'ex': 'Jim sings an upbeat 80s R&B song warning young people against choosing law as a profession.'},
            {'word': 'Disillusionment', 'def': 'A feeling of disappointment resulting from the discovery that something is not as good as believed.', 'ex': 'Many law graduates experience deep disillusionment when faced with endless paperwork and billing hours.'},
            {'word': 'Burnout', 'def': 'State of emotional, physical, and mental exhaustion caused by excessive and prolonged stress.', 'ex': 'Working 80-hour weeks at a corporate firm is a guaranteed recipe for career burnout.'},
            {'word': 'Litigation', 'def': 'The process of taking legal action in court.', 'ex': 'Corporate litigation often involves reviewing thousands of dry documents rather than dramatic court arguments.'},
            {'word': 'Billable', 'def': 'Capable of being billed to a client, especially for professional services.', 'ex': 'Lawyers live under constant pressure to record as many billable hours as possible each day.'},
            {'word': 'Alternative', 'def': 'Available as another possibility or choice.', 'ex': 'The song humorously suggests almost any alternative career is better than practicing law.'},
            {'word': 'Prestige', 'def': 'Widespread respect and admiration felt for someone on the basis of their achievements or quality.', 'ex': 'People choose legal careers for societal prestige, but prestige does not guarantee happiness.'},
            {'word': 'Debt', 'def': 'A sum of money that is owed or due.', 'ex': 'Taking on huge student debt for law school forces graduates to take corporate jobs they dislike.'},
            {'word': 'Fulfillment', 'def': 'Satisfaction or happiness as a result of fully developing one\'s abilities or character.', 'ex': 'Finding personal fulfillment in your job is far more valuable than a impressive job title.'},
            {'word': 'Sabbatical', 'def': 'A period of paid or unpaid leave granted for study, travel, or rest.', 'ex': 'Jim took a permanent sabbatical from law to run a local broom shop instead.'}
        ],
        'r1': [
            ("In 'Don't Be a Lawyer', B2-level humor parodies 80s funk/R&B to warn against choosing law for status. Why does society push high-prestige careers?", "★ Have you ever felt pressure from society or family to choose a high-prestige career?"),
            ("The song highlights corporate <strong>Litigation</strong> and <strong>Billable</strong> hour pressure. What makes daily office work exhausting?", "★ What is the most tedious or repetitive aspect of your current profession or field of study?"),
            ("How does high student <strong>Debt</strong> trap professionals in jobs that cause severe <strong>Burnout</strong>?", "★ How do financial commitments like debt influence career decisions and job choices?"),
            ("Jim describes his total <strong>Disillusionment</strong> with law despite earning a high salary. Can money compensate for job misery?", "★ Would you accept higher stress and long hours for a significantly higher salary? Why or why not?"),
            ("Why is finding genuine <strong>Fulfillment</strong> in daily work often difficult in corporate environments?", "★ What single factor contributes most to your personal sense of job satisfaction or fulfillment?"),
            ("The lyrics list funny <strong>Alternative</strong> jobs like 'shoe cobbler' or 'sweeping up leaves'. Why are hands-on jobs appealing?", "★ If you could try any alternative career for one year without financial risk, what would you choose?"),
            ("How does the pursuit of external <strong>Prestige</strong> prevent people from listening to their true desires?", "★ Why do people care so much about how their job title sounds to acquaintances at parties?"),
            ("Why is taking a break or <strong>Sabbatical</strong> often necessary when facing severe work exhaustion?", "★ What activities or lifestyle changes help you recharge when work stress starts building up?"),
            ("What makes using an upbeat 80s dance track (like Bobby Brown\'s style) so hilarious for a song about career regret?", "★ Why is satire such an effective tool for discussing workplace frustration and career decisions?"),
            ("Ultimately, what is the song\'s message about making career choices for yourself versus for other people?", "★ What advice would you give to a university student choosing their career path today?")
        ],
        'r2': [
            "Choosing a stable, high-paying <strong>Profession</strong> despite high stress is smarter than pursuing risky personal passion. Let's debate this perspective.",
            "Societal <strong>Prestige</strong> attached to certain job titles is an outdated illusion that causes widespread career unhappiness. Share your thoughts.",
            "Workplace <strong>Burnout</strong> is an inevitable part of modern professional success that people must learn to manage. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Expressing Career Warnings & Strong Negative Recommendations',
        'lang_desc': 'In the song <strong>Don\'t Be a Lawyer</strong>, the energetic satire uses <strong>Imperative Warnings & Strongly Worded Recommendations</strong> (e.g., <em>Don\'t be a lawyer, do anything else; It\'s a trap, don\'t do it; You\'d be better off doing literally anything else</em>). This structure supports giving emphatic career advice.',
        'lang_examples': [
            'Whatever you do, don\'t choose a profession purely for the salary.',
            'You would be much better off pursuing a field that actually interests you.',
            'Under no circumstances should you accept a job that demands 80 hours a week.'
        ],
        'note_items': [
            ("Don't be a lawyer <span class=\"mistake-highlight\">for get rich</span>", "→", "Don't become a lawyer to get rich", "(Use 'to + infinitive' for purpose.)"),
            ("He is tired <span class=\"mistake-highlight\">from his job</span>", "→", "He is tired of his job / exhausted from his job", "(Use 'tired of' for boredom/dissatisfaction.)"),
            ("She works <span class=\"mistake-highlight\">as lawyer</span>", "→", "She works as a lawyer", "(Include indefinite article 'a' with professions.)")
        ]
    },

    'slow-motion': {
        'title': 'Slow Motion',
        'id_suffix': 'slow-motion',
        'vocab': [
            {'word': 'Cinematic', 'def': 'Relating to literature or motion pictures; having qualities characteristic of films.', 'ex': 'The women perform a hilarious parody of cinematic slow-motion walking in action movies.'},
            {'word': 'Absurdity', 'def': 'The quality or state of being ridiculous or wildly unreasonable.', 'ex': 'The song exposes the absurdity of movie tropes that make walking look dramatic.'},
            {'word': 'Exaggeration', 'def': 'A statement that represents something as better or worse than it really is.', 'ex': 'Slow-motion walking in real life is an awkward exaggeration that causes windburn.'},
            {'word': 'Glamour', 'def': 'An attractive or exciting quality that makes certain people or things seem appealing.', 'ex': 'Media creates fake glamour around mundane daily moments like walking down the street.'},
            {'word': 'Pacing', 'def': 'The speed at which something happens or is done.', 'ex': 'Slowing down your walking pacing in public looks bizarre to passersby.'},
            {'word': 'Self-Conscious', 'def': 'Feeling undue awareness of oneself, one\'s appearance, or one\'s actions.', 'ex': 'Trying to look cool in public often makes people feel painfully self-conscious.'},
            {'word': 'Trope', 'def': 'A figurative or metaphorical use of a word or expression; a common or overused theme.', 'ex': 'The dramatic entrance is a classic movie trope used to build hero status.'},
            {'word': 'Windburn', 'def': 'Redness and irritation of the skin caused by exposure to wind.', 'ex': 'They joke that staring unblinking into the wind for cinematic effect just causes windburn.'},
            {'word': 'Awkwardness', 'def': 'The quality of an informal situation being embarrassing or difficult.', 'ex': 'In reality, walking in slow motion takes forever and creates extreme physical awkwardness.'},
            {'word': 'Parody', 'def': 'An imitation of the style of a particular writer, artist, or genre with deliberate exaggeration.', 'ex': 'The song is a brilliant parody of N.E.R.D. and 2000s hip-hop music videos.'}
        ],
        'r1': [
            ("In 'Slow Motion', Rebecca, Valencia, and Heather perform a hip-hop parody mocking movie slow-mo shots. Why do movies use <strong>Cinematic</strong> slow motion?", "★ What is your favorite <strong>Cinematic</strong> visual effect in movies that would look totally ridiculous in real life?"),
            ("The song highlights the physical <strong>Absurdity</strong> of trying to walk dramatically in public. Why do people care about looking cool?", "★ Have you ever tried to act cool or dramatic in public, only for it to end in hilarious <strong>Awkwardness</strong>?"),
            ("How does movie <strong>Exaggeration</strong> create unrealistic expectations about everyday moments?", "★ What everyday activity (like waking up or walking) is portrayed completely unrealistically in movies?"),
            ("The lyrics mock media-created <strong>Glamour</strong> by pointing out that slow walking causes <strong>Windburn</strong> and leg cramps. Why is this contrast funny?", "★ Why is pointing out unglamorous physical details the best way to debunk media perfection?"),
            ("Why does trying to control your physical <strong>Pacing</strong> and posture in front of others make you feel <strong>Self-Conscious</strong>?", "★ In what social situations do you feel most self-conscious about your body language or posture?"),
            ("How does the track deconstruct the classic 'hero entrance' movie <strong>Trope</strong>?", "★ What overused movie trope or cliché are you most tired of seeing in modern films?"),
            ("Why does walking in slow motion actually take three times as long and waste precious time?", "★ What is something people do to impress others that is actually a massive waste of time and energy?"),
            ("How does <strong>Parody</strong> help us laugh at the ridiculous expectations media places on women\'s appearances?", "★ How can humor and comedy help demystify unrealistic beauty and behavior standards?"),
            ("What makes 2000s hip-hop beats so perfect for a song about struts and false swagger?", "★ How does music affect the way you walk or feel when listening with headphones in public?"),
            ("Ultimately, what does the song reveal about the difference between looking cool and feeling comfortable?", "★ Would you rather look impeccably stylish or feel 100% physically comfortable?")
        ],
        'r2': [
            "Media tropes that romanticize daily life with fake <strong>Glamour</strong> make people permanently dissatisfied with reality. Let's debate this perspective.",
            "Being able to laugh at our own physical <strong>Awkwardness</strong> and <strong>Self-Conscious</strong> moments is the key to true self-confidence. Share your thoughts.",
            "Visual <strong>Parody</strong> is a far more effective tool for social critique than serious academic criticism. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Describing Physical Movements & Media Tropes (*It looks like... but actually*)',
        'lang_desc': 'In the song <strong>Slow Motion</strong>, the hip-hop satire contrasts appearance with reality using <strong>Visual Comparison & Physical Reality Structures</strong> (e.g., <em>In movies it looks badass, but in reality it takes 20 minutes to cross the street; You look like a cool hero, but your legs are cramping</em>). This structure supports describing visual contrast.',
        'lang_examples': [
            'In action movies slow-motion walking looks heroic, whereas in real life it looks ridiculous.',
            'Instead of feeling like a movie star, she just got windburn on her face.',
            'They tried to strut dramatically, but they ended up tripping over the curb.'
        ],
        'note_items': [
            ("They walk in slow motion <span class=\"mistake-highlight\">for look cool</span>", "→", "They walk in slow motion to look cool", "(Use 'to + infinitive' for purpose.)"),
            ("She feels self-conscious <span class=\"mistake-highlight\">about her walking</span>", "→", "She feels self-conscious about her walking", "(Correct preposition usage.)"),
            ("The movie has many <span class=\"mistake-highlight\">tropes cinema</span>", "→", "The movie has many cinematic tropes", "(Position adjective before noun.)")
        ]
    },

    'without-love-you-can-save-the-world': {
        'title': "Without Love, You Can Save the World",
        'id_suffix': 'without-love-you-can-save-the-world',
        'vocab': [
            {'word': 'Distraction', 'def': 'A thing that prevents someone from giving full attention to something else.', 'ex': 'The characters discover that romantic obsession is a massive, time-consuming distraction.'},
            {'word': 'Productivity', 'def': 'The effectiveness of productive effort, especially in industry or personal life.', 'ex': 'Without romantic drama, Rebecca\'s daily productivity skyrockets to extraordinary levels.'},
            {'word': 'Obsession', 'def': 'An unhealthy idea or thought that continually preoccupies or intrudes on a mind.', 'ex': 'Chasing romance felt like a full-time job driven by obsessive energy.'},
            {'word': 'Potential', 'def': 'Having or showing the capacity to become or develop into something in the future.', 'ex': 'Free from love, they realize they have the potential to solve global crises.'},
            {'word': 'Focus', 'def': 'The center of interest or activity; intense mental effort on a goal.', 'ex': 'Redirecting romantic focus into career and charity leads to remarkable results.'},
            {'word': 'Freedom', 'def': 'The power or right to act, speak, or think as one wants without hindrance.', 'ex': 'Singlehood gives them total personal freedom to manage their schedules.'},
            {'word': 'Achievement', 'def': 'A thing done successfully with effort, skill, or courage.', 'ex': 'Building a house for charity is a concrete achievement made possible by single life.'},
            {'word': 'Priorities', 'def': 'Things that are regarded as more important than others.', 'ex': 'Removing dating drama forces them to reevaluate their life priorities.'},
            {'word': 'Energy', 'def': 'The strength and vitality required for sustained physical or mental activity.', 'ex': 'Romantic longing drains emotional energy that could be spent on noble causes.'},
            {'word': 'Liberation', 'def': 'The act of setting someone free from imprisonment, slavery, or oppression.', 'ex': 'Giving up on love feels like an unexpected form of personal liberation.'}
        ],
        'r1': [
            ("In 'Without Love, You Can Save the World', the cast sings a 1960s Hairspray-style Broadway anthem celebrating freedom from dating. Is romance a <strong>Distraction</strong>?", "★ Have you ever noticed how much time and emotional energy dating and romantic drama consume?"),
            ("The song humorously claims that single people achieve incredible <strong>Productivity</strong> (like curing diseases or building houses). How does focus shift when single?", "★ What ambitious project or hobby would you tackle if you had 100% uninterrupted free time?"),
            ("How does romantic <strong>Obsession</strong> blind people to their larger personal and professional <strong>Potential</strong>?", "★ Why do people often put their personal ambitions on hold when falling in love?"),
            ("Why is total single <strong>Freedom</strong> rarely celebrated in pop music compared to romantic love songs?", "★ Why do you think love songs dominate the music industry while songs celebrating independence are rare?"),
            ("The lyrics contrast tiny relationship arguments with world-changing <strong>Achievement</strong>. Why is perspective important?", "★ How do you step back and gain perspective when minor personal drama feels overwhelming?"),
            ("How does changing your daily <strong>Priorities</strong> away from dating alter your social life and friendships?", "★ How do your friendships change when you or your friends transition between being single and in a relationship?"),
            ("Where does emotional <strong>Energy</strong> go when a person stops constantly seeking romantic validation?", "★ What is the most rewarding way you channel your mental and creative <strong>Energy</strong>?"),
            ("Why does giving up on searching for a partner feel like a moment of true <strong>Liberation</strong> for the characters?", "★ Why can letting go of the pressure to find 'the one' bring immense peace of mind?"),
            ("What makes 1960s pop-rock (like 'Without Love' from Hairspray) so perfect for satirizing grand romantic declarations?", "★ How does parodying famous Broadway showstoppers heighten the comedic satire?"),
            ("Ultimately, can a person balance deep romantic love with world-changing ambition, or must one suffer?", "★ Do you believe romantic relationships require sacrifices in personal ambition, or can they enhance it?")
        ],
        'r2': [
            "Romantic love is a major <strong>Distraction</strong> that prevents individuals from achieving their highest professional <strong>Potential</strong>. Let's debate this perspective.",
            "Society places far too much value on romantic status compared to single independence and community <strong>Achievement</strong>. Share your thoughts.",
            "Personal <strong>Liberation</strong> and peace of mind are much easier to maintain when you are single than when in a relationship. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Expressing Cause-and-Effect & Unlocked Potential (*Without X, you can Y*)',
        'lang_desc': 'In the song <strong>Without Love, You Can Save the World</strong>, the upbeat satire highlights <strong>Conditional Capability & Liberation Structures</strong> (e.g., <em>Without love, you can build a house; Free from romance, we have time to cure disease; Once you stop dating, your energy multiplies</em>). This structure supports discussing newfound free time.',
        'lang_examples': [
            'Without the distraction of romantic drama, she finished her master\'s degree in record time.',
            'Free from constantly checking dating apps, he focused entirely on his health and fitness.',
            'Once they stopped obsessing over romance, their professional productivity tripled.'
        ],
        'note_items': [
            ("Without love you can <span class=\"mistake-highlight\">to save the world</span>", "→", "Without love you can save the world", "(Use bare infinitive 'save' after modal verb 'can'.)"),
            ("She is focused <span class=\"mistake-highlight\">in her career</span>", "→", "She is focused on her career", "(Use 'focused on'.)"),
            ("He has more time <span class=\"mistake-highlight\">for build a house</span>", "→", "He has more time to build a house", "(Use 'time to + infinitive'.)")
        ]
    },

    'women-gotta-stick-together': {
        'title': 'Women Gotta Stick Together',
        'id_suffix': 'women-gotta-stick-together',
        'vocab': [
            {'word': 'Solidarity', 'def': 'Unity or agreement of feeling or action, especially among individuals with a common interest.', 'ex': 'Valencia sings a country pop song claiming female solidarity while insulting every woman she meets.'},
            {'word': 'Hypocrisy', 'def': 'The practice of claiming to have moral standards or beliefs to which one\'s own behavior does not conform.', 'ex': 'The song is a masterpiece of hilarious hypocrisy and passive-aggressive backhanded compliments.'},
            {'word': 'Backhanded', 'def': 'Of a compliment: flattering on the surface but insultingly critical in reality.', 'ex': 'Calling someone brave for wearing a dress that doesn\'t flatter them is a classic backhanded compliment.'},
            {'word': 'Rivalry', 'def': 'Competition for the same objective or for superiority in the same field.', 'ex': 'Internalized rivalry causes women in the song to judge each other constantly while preaching sisterhood.'},
            {'word': 'Sincerity', 'def': 'The quality of being free from pretense or deceit in manner or actions.', 'ex': 'Her smile lacks total sincerity as she delivers razor-sharp personal insults.'},
            {'word': 'Judgment', 'def': 'An opinion or conclusion formed after consideration; critical evaluation.', 'ex': 'Harsh physical judgment is masked under the guise of friendly advice.'},
            {'word': 'Superficial', 'def': 'Existing or occurring at or on the surface; lacking depth of character.', 'ex': 'Their fake friendship is based on superficial praise and hidden competition.'},
            {'word': 'Support', 'def': 'Bear all or part of the weight of; give assistance to.', 'ex': 'True support requires celebrating other people without secretly tearing them down.'},
            {'word': 'Insecurity', 'def': 'Uncertainty or anxiety about oneself; lack of confidence.', 'ex': 'Critiquing other people\'s flaws is usually a cover for one\'s own deep insecurity.'},
            {'word': 'Sisterhood', 'def': 'The feeling of kinship and closeness among women.', 'ex': 'Preaching sisterhood while criticizing everyone you see is the central joke of the track.'}
        ],
        'r1': [
            ("In 'Women Gotta Stick Together', Valencia performs a Shania Twain-style country song preaching female <strong>Solidarity</strong> while ruthlessly insulting women. Why is fake support funny?", "★ Have you ever encountered someone who preaches kindness and <strong>Solidarity</strong> but acts judgmentally in practice?"),
            ("The lyrics are filled with <strong>Backhanded</strong> compliments. Why are subtle, passive-aggressive insults often more hurtful than direct ones?", "★ What is the most memorable <strong>Backhanded</strong> compliment you have ever heard or received?"),
            ("How does internalized <strong>Rivalry</strong> cause people to view peers as competitors rather than allies?", "★ Why do social media and modern culture foster competitive <strong>Rivalry</strong> among peers?"),
            ("Why does Valencia\'s utter lack of <strong>Sincerity</strong> make her song so hilariously transparent to the audience?", "★ How can you tell when someone\'s praise or encouragement lacks genuine <strong>Sincerity</strong>?"),
            ("How does harsh physical <strong>Judgment</strong> disguised as 'friendly advice' damage trust between friends?", "★ How do you respond when someone gives you unsolicited 'advice' that is actually a hidden critique?"),
            ("The song exposes <strong>Superficial</strong> friendships built on polite smiles and gossip. What makes a friendship authentic?", "★ What qualities distinguish a deep, authentic friendship from a <strong>Superficial</strong> social acquaintance?"),
            ("How can people offer genuine, unconditional <strong>Support</strong> to others without letting competitive feelings interfere?", "★ How do you celebrate a friend\'s success when you are going through a difficult time yourself?"),
            ("Why is projecting personal <strong>Insecurity</strong> onto others the main reason people criticize strangers?", "★ Why do people feel the urge to judge or critique strangers on the street or online?"),
            ("How does the upbeat country-pop melody amplify the comedic <strong>Hypocrisy</strong> of the lyrics?", "★ Why does putting cheerful, sunny music over mean or sarcastic lyrics create great comedy?"),
            ("Ultimately, what does true female <strong>Sisterhood</strong> and mutual respect look like in everyday life?", "★ How can we actively foster genuine <strong>Solidarity</strong> and mutual support in our communities?")
        ],
        'r2': [
            "Performative declarations of <strong>Solidarity</strong> often hide deep competitive <strong>Insecurity</strong> and judgment. Let's debate this perspective.",
            "Passive-aggressive <strong>Backhanded</strong> compliments are more damaging to social trust than direct confrontation. Share your thoughts.",
            "Genuine peer <strong>Support</strong> requires actively resisting the cultural urge to compare and judge others. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Backhanded Compliments & Passive-Aggressive Modifiers (*You look great, considering...*)',
        'lang_desc': 'In the song <strong>Women Gotta Stick Together</strong>, the country satire uses <strong>Backhanded Framing & Passive-Aggressive Qualification</strong> (e.g., <em>She\'s so brave for wearing that dress; You look great for your age; I love how you don\'t care what people think of you</em>). This structure supports identifying veiled critiques.',
        'lang_examples': [
            'She is so brave for choosing such an unconventional outfit.',
            'You did a surprisingly good job on this presentation, considering how little you prepared.',
            'I love how you just say whatever comes into your head without worrying about politeness.'
        ],
        'note_items': [
            ("She gives a backhanded compliment <span class=\"mistake-highlight\">to her friend</span>", "→", "She gives a backhanded compliment to her friend", "(Correct preposition usage.)"),
            ("Women gotta stick <span class=\"mistake-highlight\">together each other</span>", "→", "Women gotta stick together / stick with each other", "(Use 'stick together' without 'each other'.)"),
            ("She is jealous <span class=\"mistake-highlight\">from her peer</span>", "→", "She is jealous of her peer", "(Use 'jealous of' someone.)")
        ]
    },

    'eleven-oclock': {
        'title': "11 O'Clock",
        'id_suffix': 'eleven-oclock',
        'vocab': [
            {'word': 'Epiphany', 'def': 'A moment of sudden and great revelation or realization.', 'ex': 'In classic Broadway fashion, Rebecca expects a dramatic 11 o\'clock epiphany to solve her life.'},
            {'word': 'Resolution', 'def': 'A firm decision to do or not to do something; the action of solving a problem.', 'ex': 'Real life rarely grants a clean, musical-style resolution in five minutes.'},
            {'word': 'Realization', 'def': 'An act of becoming fully aware of something as a fact.', 'ex': 'Her realization that she is the problem in her own story is both painful and liberating.'},
            {'word': 'Pattern', 'def': 'A repeated decorative design; a regular and intelligible form or sequence in actions.', 'ex': 'Recognizing her toxic behavioral patterns is the first step toward genuine change.'},
            {'word': 'Climax', 'def': 'The most intense, exciting, or important point of something.', 'ex': 'An 11 o\'clock number serves as the emotional climax of a traditional musical.'},
            {'word': 'Accountability', 'def': 'The fact or condition of being accountable; responsibility.', 'ex': 'Taking personal accountability means stopping the search for easy scapegoats.'},
            {'word': 'Self-Awareness', 'def': 'Conscious knowledge of one\'s own character, feelings, motives, and desires.', 'ex': 'Developing true self-awareness is a slow, gradual process, not a sudden song cue.'},
            {'word': 'Transformation', 'def': 'A thorough or dramatic change in form, appearance, or character.', 'ex': 'Personal transformation requires ongoing daily practice rather than a single theatrical speech.'},
            {'word': 'Breakthrough', 'def': 'A sudden, dramatic, and important discovery or development.', 'ex': 'She realizes her grand emotional breakthrough was just another dramatic performance.'},
            {'word': 'Maturity', 'def': 'The state, fact, or period of being mature; wisdom gained through experience.', 'ex': 'True maturity is accepting that life is messy and does not follow a scripted finale.'}
        ],
        'r1': [
            ("In '11 O'Clock', Rebecca parodies the classic Broadway 11 o'clock number where the hero has a grand <strong>Epiphany</strong>. Why do we crave dramatic epiphanies?", "★ Have you ever waited for a 'dramatic epiphany' moment to change your life, only to realize change is gradual?"),
            ("The song highlights the search for a clean <strong>Resolution</strong> to complex personal problems. Is life ever that neat?", "★ Why is it difficult for human beings to accept that real life rarely has clean, cinematic resolutions?"),
            ("Rebecca experiences the painful <strong>Realization</strong> that she cannot blame others for her choices. Why is self-honesty hard?", "★ What is a moment in your life when a difficult realization helped you grow as a person?"),
            ("How does identifying a negative behavioral <strong>Pattern</strong> help you prevent repeating past mistakes?", "★ How do you identify and break negative habits or daily <strong>Pattern</strong> behaviors in your routine?"),
            ("Why is an emotional <strong>Climax</strong> in a movie or musical so satisfying compared to real-life progress?", "★ What is your favorite emotional climax scene in a musical or movie, and why does it move you?"),
            ("How does taking total <strong>Accountability</strong> for your actions differ from blaming external circumstances?", "★ What does accepting <strong>Accountability</strong> look like in mature adult relationships?"),
            ("Why is genuine <strong>Self-Awareness</strong> an ongoing process rather than a one-time event?", "★ How do you cultivate deeper <strong>Self-Awareness</strong> in your daily decision-making?"),
            ("Rebecca discovers that real <strong>Transformation</strong> requires hard work after the music stops. Why is post-realization work tough?", "★ Why do people often struggle to maintain positive changes after a big personal <strong>Breakthrough</strong>?"),
            ("How does parodying famous Broadway showstoppers (like Gypsy\'s 'Rose\'s Turn') highlight the artificial nature of theater?", "★ How does understanding theatrical conventions make parodies like Crazy Ex-Girlfriend even funnier?"),
            ("Ultimately, what does true emotional <strong>Maturity</strong> look like when you stop treating your life like a TV show?", "★ What does personal <strong>Maturity</strong> mean to you today compared to when you were younger?")
        ],
        'r2': [
            "Expecting sudden, theatrical <strong>Breakthrough</strong> moments prevents people from doing the slow, daily work of self-improvement. Let's debate this perspective.",
            "Taking total personal <strong>Accountability</strong> for your life choices is the single most liberating step toward adult <strong>Maturity</strong>. Share your thoughts.",
            "Stories and fiction lie to us by giving clean <strong>Resolution</strong> endings to messy human problems. Defend or oppose."
        ],
        'lang_title': 'Language Focus: Expressing Dramatic Realization & Self-Correction (*I thought X, but actually Y*)',
        'lang_desc': 'In the song <strong>11 O\'Clock</strong>, the theatrical climax uses <strong>Realization & Self-Correction Structures</strong> (e.g., <em>I used to think my life was a show, but now I realize I\'m just making excuses; It hit me that I am the problem; I finally see that real change takes time</em>). This structure supports expressing profound realizations.',
        'lang_examples': [
            'I used to blame external circumstances, but now I realize I was making excuses.',
            'It suddenly hit her that she was repeating the exact same pattern as before.',
            'He finally came to the realization that theatrical speeches cannot replace actual effort.'
        ],
        'note_items': [
            ("She had an epiphany <span class=\"mistake-highlight\">about her life</span>", "→", "She had an epiphany about her life", "(Correct usage of 'epiphany about'.)"),
            ("He takes accountability <span class=\"mistake-highlight\">for his actions</span>", "→", "He takes accountability for his actions", "(Correct usage of 'accountability for'.)"),
            ("She realized <span class=\"mistake-highlight\">that she is wrong</span>", "→", "She realized that she was wrong", "(Maintain past tense agreement with 'realized'.)")
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

def update_cxg_batch4():
    idx_path = os.path.join(CXG_DIR, 'index.html')
    with open(idx_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    for song_slug, data in CXG_BATCH4_DATA.items():
        print(f"Updating {song_slug} in index.html...")
        update_song_in_soup(soup, song_slug, data, is_standalone=False)

    with open(idx_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))

    for song_slug, data in CXG_BATCH4_DATA.items():
        standalone_path = os.path.join(CXG_DIR, f"{song_slug}.html")
        if os.path.exists(standalone_path):
            print(f"Updating standalone file {standalone_path}...")
            with open(standalone_path, 'r', encoding='utf-8') as f:
                s_soup = BeautifulSoup(f.read(), 'html.parser')
            update_song_in_soup(s_soup, song_slug, data, is_standalone=True)
            with open(standalone_path, 'w', encoding='utf-8') as f:
                f.write(str(s_soup))

    print("Batch 4 CXG Challenge files successfully updated with BeautifulSoup!")

if __name__ == '__main__':
    update_cxg_batch4()
