import os
import re
from bs4 import BeautifulSoup

DATABASE = {
    "national-simplicity-day.html": {
        "level": "Beginner (A1)",
        "focus": "Simple Present Structure",
        "explanation": "The <strong>Simple Present Structure</strong> is used to talk about regular habits, routines, and permanent facts. For third-person singular subjects (he/she/it), we add <strong>-s</strong> or <strong>-es</strong> to the base verb (e.g., <em>tidy</em> becomes <em>tidies</em>, <em>go</em> becomes <em>goes</em>). Use <em>do/does</em> for questions and <em>don't/doesn't</em> for negative sentences.",
        "tasks": [
            "He always <strong>_____</strong> (tidy) his desk every Saturday morning. <em>(Answer: tidies)</em>",
            "We <strong>_____</strong> (not / live) in a noisy city; we prefer a quiet cottage. <em>(Answer: do not live / don't live)</em>",
            "<strong>_____</strong> you <strong>_____</strong> (spend) time in nature often? <em>(Answer: Do, spend)</em>"
        ],
        "speaking": "Describe your daily morning routine to your partner in 3 simple sentences using the Simple Present tense.",
        "r1": [
            {"main": "What <strong>does</strong> it mean to live a <strong>simple</strong> life, and how <strong>do</strong> you start?", "personal": "What is one simple thing that makes you very happy?"},
            {"main": "Why <strong>is</strong> it important to spend time in a <strong>quiet</strong> place, and what <strong>does</strong> it change?", "personal": "Where do you go when you want a quiet moment?"},
            {"main": "How <strong>do</strong> we <strong>reduce</strong> our monthly expenses easily?", "personal": "What monthly expense did you reduce recently?"},
            {"main": "Why <strong>do</strong> people feel more relaxed when they <strong>are</strong> in <strong>nature</strong>?", "personal": "How often do you walk in a forest or park?"},
            {"main": "What <strong>is</strong> your morning <strong>routine</strong> and how <strong>does</strong> it help you?", "personal": "Is your daily routine busy or relaxed?"},
            {"main": "How <strong>does</strong> your family <strong>celebrate</strong> traditional holidays?", "personal": "How did you celebrate your last birthday?"},
            {"main": "Why <strong>does</strong> it feel satisfying when you <strong>tidy</strong> your wardrobe?", "personal": "Do you need to tidy your bedroom desk today?"},
            {"main": "What <strong>makes</strong> a neighborhood feel <strong>peaceful</strong> and calm?", "personal": "Is your current neighborhood peaceful or noisy?"},
            {"main": "<strong>Does</strong> a physical <strong>hobby</strong> feel better than a digital one?", "personal": "What hobbies do you practice in your free time?"},
            {"main": "Why <strong>do</strong> we feel <strong>thankful</strong> for simple things like fresh coffee?", "personal": "What simple thing are you most thankful for today?"}
        ],
        "r2": [
            {"main": "In the future, hyper-connectivity <strong>becomes</strong> so overwhelming that people <strong>demand</strong> a legal right to <strong>reduce</strong> screen time.", "personal": "Have you ever tried to <strong>reduce</strong> your social media use and go off-grid?"},
            {"main": "The rise of smart homes <strong>makes</strong> our daily <strong>routine</strong> so automated that we <strong>lose</strong> the simple joy of physical chores.", "personal": "Do you find doing simple tasks like washing dishes to be a good daily <strong>routine</strong>?"},
            {"main": "Governments <strong>introduce</strong> a simplicity tax to force citizens to lead a <strong>simple</strong> lifestyle with fewer possessions.", "personal": "Do you think a <strong>simple</strong> life with only 100 personal possessions is possible?"},
            {"main": "As urban areas <strong>grow</strong>, access to quiet, undisturbed <strong>nature</strong> <strong>becomes</strong> an expensive luxury reserved only for the wealthy.", "personal": "How much would you pay to spend a weekend in beautiful <strong>nature</strong> with absolute silence?"},
            {"main": "Slow, traditional <strong>hobbies</strong> like gardening <strong>disappear</strong> completely as virtual reality <strong>becomes</strong> more immersive.", "personal": "Would you prefer a physical <strong>hobby</strong> like growing real tomatoes to a virtual reality game?"},
            {"main": "We <strong>celebrate</strong> 'quiet quitting' and <strong>prefer</strong> rest over professional career success.", "personal": "Would you choose to <strong>celebrate</strong> a low-paying job if it gave you more free time?"},
            {"main": "Minimalist micro-housing <strong>becomes</strong> the standard way of living, forcing people to <strong>tidy</strong> up their homes permanently.", "personal": "Could you happily <strong>tidy</strong> your life and live in a tiny, minimalist home?"},
            {"main": "In a hyper-commercialized future, we <strong>feel</strong> <strong>thankful</strong> for simplicity only when it <strong>is</strong> sold as an expensive lifestyle brand.", "personal": "Have you ever felt <strong>thankful</strong> for buying an expensive minimalist product?"},
            {"main": "Future school systems <strong>replace</strong> academic grading with classes in mindfulness to help children live a <strong>peaceful</strong> life.", "personal": "Do you think your childhood would have been more <strong>peaceful</strong> if you spent more time doing nothing?"},
            {"main": "The desire for a <strong>quiet</strong> life <strong>leads</strong> to a massive reverse-migration from modern megacities back to small villages.", "personal": "If you could move to a <strong>quiet</strong> country cottage, would you leave the city behind?"}
        ]
    },
    "national-workaholics-day.html": {
        "level": "Beginner (A1)",
        "focus": "Modal Verbs of Obligation",
        "explanation": "Modal verbs of obligation (<strong>must</strong>, <strong>have to</strong>, <strong>should</strong>) express rules, necessity, and advice. Use <strong>must</strong> and <strong>have to</strong> for strong, mandatory obligations (e.g., <em>'I must work overtime'</em>). Use <strong>should</strong> for recommendation, suggestions, or good advice (e.g., <em>'You should take a holiday'</em>). Remember that modal verbs are followed by the base form of the verb without <em>'to'</em> (except <em>have to</em>).",
        "tasks": [
            "To avoid extreme stress, you <strong>_____</strong> (take) a holiday. <em>(Answer: should take)</em>",
            "Employees <strong>_____</strong> (finish) their daily tasks before they leave. <em>(Answer: must finish / have to finish)</em>",
            "We <strong>_____</strong> (not work) on Sundays; it is a strict company rule. <em>(Answer: must not work / don't have to work)</em>"
        ],
        "speaking": "Tell your partner 3 things you \"must\" or \"have to\" do in your job, and 2 things you \"should\" do to relax.",
        "r1": [
            {"main": "Why <strong>must</strong> we maintain a healthy work-life <strong>balance</strong> to protect our mental health?", "personal": "What is the most important thing for your daily balance?"},
            {"main": "Why <strong>should</strong> a person think twice before committing to a demanding <strong>career</strong>?", "personal": "Do you want to change your career in the future?"},
            {"main": "How much <strong>overtime</strong> <strong>must</strong> employees work in your country's corporate culture?", "personal": "Did you work overtime last week?"},
            {"main": "Why <strong>should</strong> deep breathing be your primary method of <strong>relaxation</strong>?", "personal": "How do you relax after a very busy day?"},
            {"main": "When work causes too much <strong>stress</strong>, what immediate steps <strong>should</strong> you take?", "personal": "What causes you the most stress at work or school?"},
            {"main": "How <strong>busy</strong> <strong>must</strong> your schedule be before you decide you <strong>have to</strong> take a break?", "personal": "Are you busy this weekend, or do you have free time?"},
            {"main": "Why <strong>should</strong> families spend their <strong>holiday</strong> entirely disconnected from work emails?", "personal": "Where did you go for your last holiday?"},
            {"main": "What urgent tasks <strong>have to</strong> be completed before you can enjoy your <strong>free time</strong>?", "personal": "What free-time activities do you do with your family?"},
            {"main": "Why <strong>must</strong> a modern <strong>office</strong> design quiet relaxation spaces for its employees?", "personal": "Is your current office comfortable for you?"},
            {"main": "Which difficult <strong>task</strong> <strong>should</strong> you delegate to others to reduce your stress?", "personal": "What is your most difficult task today?"}
        ],
        "r2": [
            {"main": "In the future, the <strong>balance</strong> between work and personal life <strong>must</strong> be legally protected as our brains are permanently online.", "personal": "How do you keep a good <strong>balance</strong> when your smartphone is always in your pocket?"},
            {"main": "Universal basic income will mean we don't <strong>have to</strong> be <strong>busy</strong> with jobs to survive, changing our sense of purpose.", "personal": "If you never had to be <strong>busy</strong> with jobs, what would you do to feel useful?"},
            {"main": "As artificial intelligence takes over every productive <strong>task</strong>, humans <strong>should</strong> learn to enjoy doing absolutely nothing.", "personal": "Have you ever felt anxious during a day without any <strong>task</strong> to do?"},
            {"main": "The physical <strong>office</strong> will become obsolete, meaning we <strong>must</strong> set strict boundaries at home.", "personal": "Do you work better when there is a clear boundary between your <strong>office</strong> and your bedroom?"},
            {"main": "Future employers <strong>must</strong> monitor <strong>stress</strong> levels and force employees to take mandatory breaks.", "personal": "Would you feel comfortable if your boss could track your emotional <strong>stress</strong> in real-time?"},
            {"main": "Working <strong>overtime</strong> <strong>should</strong> be classified as an addictive behavior and treated with therapy.", "personal": "Have you ever worked <strong>overtime</strong> to avoid dealing with personal life problems?"},
            {"main": "In the future, we <strong>should</strong> judge a person's worth by how they spend their <strong>free time</strong> rather than their job.", "personal": "What creative activity would you pursue if you had unlimited <strong>free time</strong>?"},
            {"main": "We <strong>must</strong> reduce retirement ages globally, turning every day into a lifelong <strong>holiday</strong>.", "personal": "At what age do you hope to stop working and start your permanent <strong>holiday</strong>?"},
            {"main": "A highly successful <strong>career</strong> <strong>should</strong> not require you to sacrifice having a family.", "personal": "Do you believe it is possible to have a top-tier <strong>career</strong> and a thriving family life at the same time?"},
            {"main": "In the future, we <strong>have to</strong> negotiate more <strong>relaxation</strong> hours as automation replaces human labor.", "personal": "If you could redesign the workweek for better <strong>relaxation</strong>, how many hours would be ideal?"}
        ]
    },
    "urban-beekeeping-day-starter.html": {
        "level": "Starter / Beginner (A1)",
        "focus": "Simple Present & Singular/Plural Nouns",
        "explanation": "Use <strong>Simple Present</strong> for general facts. For singular nouns (one thing), add <strong>-s</strong> or <strong>-es</strong> to the verb (e.g., <em>The bee fly<strong>s</strong></em> -> <em>The bee fl<strong>ies</strong></em>). For plural nouns (more than one, usually ending in <strong>-s</strong> like <em>bees</em>, <em>flowers</em>), use the base verb (e.g., <em>Bees fly</em>).",
        "tasks": [
            "A beekeeper <strong>_____</strong> (help) the bees in the garden. <em>(Answer: helps)</em>",
            "Many beautiful <strong>_____</strong> (flower) grow near my house. <em>(Answer: flowers)</em>",
            "Bees <strong>_____</strong> (make) sweet honey. <em>(Answer: make)</em>"
        ],
        "speaking": "Look around your room. Name 3 singular objects (e.g., 'a chair') and 3 plural objects (e.g., 'books') and describe what they are or do.",
        "r1": [
            {"main": "Where <strong>does</strong> a yellow <strong>bee</strong> live, and what <strong>does</strong> it do?", "personal": "Do you see bees in your town?"},
            {"main": "<strong>Do</strong> you eat <strong>honey</strong> in the morning, and <strong>does</strong> it taste sweet?", "personal": "Do you put honey in your warm tea?"},
            {"main": "<strong>Is</strong> there a green <strong>garden</strong> near your school, and <strong>do</strong> trees grow in it?", "personal": "Do you like to walk in a green garden?"},
            {"main": "What color <strong>is</strong> your favorite <strong>flower</strong>, and where <strong>does</strong> it grow?", "personal": "Do you have a flower on your window?"},
            {"main": "<strong>Does</strong> a big <strong>tree</strong> help the environment in a city?", "personal": "Do you like to sit under a big tree?"},
            {"main": "How <strong>do</strong> you <strong>help</strong> plants grow in your flat?", "personal": "Do you help your friends water their plants?"},
            {"main": "What <strong>makes</strong> your favorite drink so <strong>sweet</strong>?", "personal": "Do you like sweet fruit or sweet chocolate?"},
            {"main": "<strong>Is</strong> your <strong>city</strong> very big, and <strong>do</strong> many people live there?", "personal": "Do you like your city, or do you prefer the countryside?"},
            {"main": "<strong>Does</strong> a green park near your <strong>house</strong> help you relax?", "personal": "Do you live in a house or a flat?"},
            {"main": "<strong>Do</strong> you feel afraid when a small <strong>insect</strong> flies near you?", "personal": "What is your favorite small insect?"}
        ],
        "r2": [
            {"main": "In the future, every <strong>house</strong> in the city <strong>has</strong> a small green roof with flowers.", "personal": "Do you want to have flowers on the roof of your <strong>house</strong>?"},
            {"main": "People <strong>do</strong> not buy sugar, they only <strong>use</strong> <strong>sweet</strong> honey.", "personal": "Do you prefer <strong>sweet</strong> honey or white sugar?"},
            {"main": "Every school <strong>has</strong> a beautiful <strong>garden</strong> with fruit trees.", "personal": "Do you want to help water plants in a school <strong>garden</strong>?"},
            {"main": "Robots <strong>protect</strong> every green <strong>tree</strong> in the forest.", "personal": "Do you like to climb a big <strong>tree</strong>?"},
            {"main": "Children <strong>learn</strong> about every <strong>insect</strong> from computer games, not from nature.", "personal": "Do you prefer to look at an <strong>insect</strong> in nature or in a game?"},
            {"main": "Cars <strong>do</strong> not enter the <strong>city</strong>, only small electric bikes.", "personal": "Do you like to ride a bike in your <strong>city</strong>?"},
            {"main": "All children <strong>learn</strong> how to <strong>help</strong> animals and birds at school.", "personal": "Do you like to <strong>help</strong> street animals?"},
            {"main": "Every balcony <strong>has</strong> a red <strong>flower</strong> to make bees happy.", "personal": "Do you have a red <strong>flower</strong> at home?"},
            {"main": "Beekeepers <strong>build</strong> warm hotels for every little <strong>bee</strong> during the cold winter.", "personal": "Do you want to build a small house for a <strong>bee</strong>?"},
            {"main": "People <strong>live</strong> in green forests and <strong>make</strong> delicious <strong>honey</strong> every day.", "personal": "Would you like to live in a forest and collect <strong>honey</strong>?"}
        ]
    },
    "urban-beekeeping-day-elementary.html": {
        "level": "Elementary (A2)",
        "focus": "Adverbs of Frequency & Prepositions of Place",
        "explanation": "<strong>Adverbs of frequency</strong> (<em>always, often, usually, sometimes, never</em>) describe how often we do things. They go <strong>before</strong> main verbs, but <strong>after</strong> the verb <em>'to be'</em>. <strong>Prepositions of place</strong> (<em>in, on, at, under, next to</em>) show where things are.",
        "tasks": [
            "Bees are <strong>_____</strong> (often) found <strong>_____</strong> (in) beautiful gardens. <em>(Answer: often, in)</em>",
            "He <strong>_____</strong> (never) puts honey <strong>_____</strong> (on) his warm toast. <em>(Answer: never, on)</em>",
            "We <strong>_____</strong> (sometimes) sit <strong>_____</strong> (under) the big green tree. <em>(Answer: sometimes, under)</em>"
        ],
        "speaking": "Describe where you usually keep honey and plants in your home using frequency adverbs and prepositions of place (e.g., 'I always keep flowers on the table').",
        "r1": [
            {"main": "What green spaces do you <strong>always</strong> find in your <strong>urban</strong> area?", "personal": "Do you prefer living in urban cities or quiet villages?"},
            {"main": "How can we <strong>always</strong> <strong>protect</strong> bees from city pollution?", "personal": "Do you buy eco-friendly products to help protect the earth?"},
            {"main": "Would you <strong>sometimes</strong> put a wooden <strong>hive</strong> on your balcony?", "personal": "Have you ever seen a real hive with active bees?"},
            {"main": "How does city noise <strong>usually</strong> impact our local <strong>environment</strong>?", "personal": "Do you try to recycle your plastic bottles to keep the environment clean?"},
            {"main": "How can a local <strong>community</strong> <strong>often</strong> build a green garden together?", "personal": "Are you active in your local neighborhood community?"},
            {"main": "Do you <strong>never</strong> want to see <strong>wild</strong> flowers in neat city parks?", "personal": "When was the last time you walked in a wild forest?"},
            {"main": "What skills does a modern <strong>beekeeper</strong> <strong>always</strong> need to learn?", "personal": "Would you like to try the work of a beekeeper for one day?"},
            {"main": "Is growing green vegetables <strong>usually</strong> a popular <strong>hobby</strong> in your country?", "personal": "What is your favorite outdoor hobby?"},
            {"main": "Do you <strong>sometimes</strong> keep a delicate <strong>plant</strong> on your bedroom desk?", "personal": "Do you prefer green houseplants or colorful flowers?"},
            {"main": "Why are insects like honey bees <strong>always</strong> so <strong>useful</strong> for humans?", "personal": "What is the most useful tip you learned about saving electricity?"}
        ],
        "r2": [
            {"main": "In the future, every <strong>urban</strong> school will <strong>always</strong> have a honey <strong>hive</strong> for students.", "personal": "Would you support having a bee <strong>hive</strong> at your local school?"},
            {"main": "Governments will <strong>sometimes</strong> pay citizens to <strong>protect</strong> rare wild flowers on balconies.", "personal": "Would you grow more flowers if the government paid you?"},
            {"main": "Humans will <strong>never</strong> destroy the natural <strong>environment</strong> completely to live in underground cities.", "personal": "Would you want to live in a clean virtual city if the real world became too polluted?"},
            {"main": "Every local <strong>community</strong> will <strong>usually</strong> grow its own organic food on vertical walls.", "personal": "Do you think vertical walls are a <strong>useful</strong> way to grow food?"},
            {"main": "Being a <strong>beekeeper</strong> will <strong>often</strong> become the most fashionable outdoor <strong>hobby</strong>.", "personal": "Would you tell your friends if your new <strong>hobby</strong> was keeping bees?"},
            {"main": "We will <strong>sometimes</strong> build gigantic artificial trees to help clean the <strong>urban</strong> air.", "personal": "Do you think artificial trees are <strong>useful</strong> or a waste of money?"},
            {"main": "A robotic <strong>plant</strong> will <strong>always</strong> clean the dust inside our apartments.", "personal": "Would you buy a robotic <strong>plant</strong> or a real green fern?"},
            {"main": "City laws will <strong>usually</strong> make it illegal to use chemical sprays to save <strong>wild</strong> insects.", "personal": "Do you actively avoid chemical sprays in your household?"},
            {"main": "Every citizen will <strong>sometimes</strong> have to help their <strong>community</strong> in local parks.", "personal": "Would you enjoy spending a weekend cleaning parks with your neighbors?"},
            {"main": "A tiny tracking chip will <strong>usually</strong> be placed on queen bees to <strong>protect</strong> hives.", "personal": "Do you think tracking queen bees is <strong>useful</strong> for science?"}
        ]
    },
    "diwali-festival.html": {
        "level": "Intermediate (B1)",
        "focus": "Narrative Past Tenses",
        "explanation": "Use <strong>Past Simple</strong> for completed past actions (e.g., <em>'We lit diyas last night'</em>). Use <strong>Past Continuous</strong> for background events in progress in the past (e.g., <em>'We were preparing the feast when guests arrived'</em>). Use <strong>Past Perfect</strong> for actions that had completed before another point in the past (e.g., <em>'They had cleansed the house before the festivity began'</em>).",
        "tasks": [
            "While she <strong>_____</strong> (decorate) the floor with rangoli, guests arrived. <em>(Answer: was decorating)</em>",
            "We <strong>_____</strong> (already cleanse) the entire house before the festival started. <em>(Answer: had already cleansed)</em>",
            "Last year, they <strong>_____</strong> (celebrate) Diwali with a grand feast. <em>(Answer: celebrated)</em>"
        ],
        "speaking": "Describe a memorable holiday celebration from your childhood. What were you doing when it started, and what had your family prepared beforehand?",
        "r1": [
            {"main": "Why did lighting tiny clay <strong>diyas</strong> hold such a profound emotional significance when families <strong>were celebrating</strong> in the past?", "personal": "Are there any multi-religious festivals in your country?"},
            {"main": "How did creating a colorful <strong>rangoli</strong> pattern reflect community spirit when neighbors <strong>were gathering</strong> outside?", "personal": "Do you have any long multi-day celebrations in your culture?"},
            {"main": "Why did cultural ancestors place so much emphasis on wishing for financial and spiritual <strong>prosperity</strong>?", "personal": "Do you usually clean your home before a big holiday?"},
            {"main": "What main ingredients turned a regular social gathering into a true public <strong>festivity</strong> last year?", "personal": "What is the most common gift in your culture?"},
            {"main": "While people <strong>were setting off</strong> loud <strong>firecrackers</strong>, how did others discuss modern environmental concerns?", "personal": "Do you prefer fixed dates or lunar dates for holidays?"},
            {"main": "Why was offering sweets and open-door <strong>hospitality</strong> considered a moral obligation during historical holidays?", "personal": "Do you usually buy new clothes for special occasions?"},
            {"main": "How has ancient <strong>mythology</strong> shaped the modern-day rituals that our families <strong>had practiced</strong> for centuries?", "personal": "Are there any \"unusual\" traditions in your family?"},
            {"main": "When families <strong>were preparing</strong> a grand communal <strong>feast</strong>, what was the ultimate way to foster reconciliation?", "personal": "How do you welcome guests into your home?"},
            {"main": "Why did humans feel a deep psychological need to <strong>cleanse</strong> their physical spaces before the festival <strong>had even begun</strong>?", "personal": "Does your favorite holiday have more than one name?"},
            {"main": "What was the universal <strong>symbolism</strong> of light conquering darkness, and why did it resonate so strongly in past centuries?", "personal": "Which festival brings the most people together in your country?"}
        ],
        "r2": [
            {"main": "Traditional <strong>firecrackers</strong> will eventually be banned globally, which is what many environmentalists <strong>had predicted</strong> years ago.", "personal": "Would you miss <strong>firecrackers</strong> if they were replaced by silent laser shows?"},
            {"main": "The intense commercialization of cultural holidays will eventually overshadow the ancient spiritual and <strong>mythology</strong> meanings that <strong>had guided</strong> previous generations.", "personal": "Do you think gift-giving is the most important part of a <strong>mythology</strong> celebration?"},
            {"main": "In the future, virtual celebrations will replace the physical <strong>feast</strong> with family, which <strong>was taking place</strong> in-person for centuries.", "personal": "Have you ever celebrated a grand <strong>feast</strong> from a culture that wasn't your own?"},
            {"main": "Global migration will lead to a world where different traditions merge, creating a new universal <strong>symbolism</strong> for light and hope that no one <strong>had anticipated</strong>.", "personal": "Should your country have more public holidays for different religions to share their <strong>symbolism</strong>?"},
            {"main": "Wishing friends <strong>prosperity</strong> via instant messaging will replace the traditional act of sending physical greeting cards that families <strong>had cherished</strong>.", "personal": "Do you prefer a physical card wishing you <strong>prosperity</strong> or a digital message?"},
            {"main": "Synthetic, mass-produced plastic decorations will eventually be outlawed, making people appreciate handmade art forms like <strong>rangoli</strong> that they <strong>had forgotten</strong>.", "personal": "Do you value handmade art forms like <strong>rangoli</strong> more if you know they were made by hand?"},
            {"main": "The traditional practice to <strong>cleanse</strong> and prepare the home before holidays will be fully automated by domestic robots, replacing the manual effort we <strong>were doing</strong>.", "personal": "How often do you <strong>cleanse</strong> your digital life of clutter?"},
            {"main": "Cultural fusion will become so prominent that traditional holidays will merge, creating globally shared moments of <strong>festivity</strong> that <strong>were developing</strong> slowly.", "personal": "What is your favorite example of cultural fusion and shared <strong>festivity</strong>?"},
            {"main": "Physical <strong>diyas</strong> and oil lamps will eventually be replaced by interactive, high-tech LED projections, making real oil lamps something we <strong>had used</strong> only in history.", "personal": "Why do humans find hope in the symbol of lighting traditional <strong>diyas</strong>?"},
            {"main": "In an increasingly individualistic world, extreme family <strong>hospitality</strong> that <strong>had characterized</strong> old communities will survive only as a paid professional service.", "personal": "What is the most memorable act of <strong>hospitality</strong> a stranger has ever shown to you?"}
        ]
    },
    "family-remittances-day.html": {
        "level": "Intermediate (B1)",
        "focus": "Expressing Support & Subjunctive Wishes",
        "explanation": "To express wishes and hopes for support, we use patterns like <strong>I wish + Past Simple / would</strong> for unlikely/imaginary present situations (e.g., <em>'I wish my family were here'</em>), and subjunctive-like structures such as <strong>It is crucial / essential that + Subject + base verb</strong> (e.g., <em>'It is essential that he send the remittance on time'</em>). We can also use <strong>I hope + Present Simple</strong> for realistic future wishes.",
        "tasks": [
            "It is essential that the migrant worker <strong>_____</strong> (receive) fair treatment. <em>(Answer: receive)</em>",
            "I wish my family <strong>_____</strong> (live) closer so we could celebrate together. <em>(Answer: lived)</em>",
            "We hope that this financial support <strong>_____</strong> (help) them open a new business. <em>(Answer: helps)</em>"
        ],
        "speaking": "Share 3 wishes or hopes you have for your family's future financial stability and prosperity using 'I wish' and 'I hope' structures.",
        "r1": [
            {"main": "I wish that sending a regular <strong>remittance</strong> <strong>were</strong> less complicated for separated families who require immediate help.", "personal": "Is sending money abroad a common practice in your community?"},
            {"main": "It is essential that a <strong>migrant worker</strong> <strong>feel</strong> welcomed and supported by their new host community.", "personal": "What are the hardest challenges for people working abroad?"},
            {"main": "We hope that receiving direct <strong>financial support</strong> <strong>assists</strong> children in securing a better education.", "personal": "How can families use financial support to improve their lives?"},
            {"main": "I wish that rising global <strong>living expenses</strong> <strong>did not pressure</strong> families so heavily.", "personal": "Have you noticed a big rise in your daily living expenses recently?"},
            {"main": "It is crucial that each <strong>bank transfer</strong> <strong>be</strong> processed securely and quickly.", "personal": "Do you prefer traditional bank transfers or mobile apps?"},
            {"main": "We hope that the low transaction <strong>fee</strong> <strong>allows</strong> workers to send more money back home.", "personal": "Do you think transfer fees should be capped by governments?"},
            {"main": "It is vital that a <strong>developing country</strong> <strong>invest</strong> remittance inflows into local schools and infrastructure.", "personal": "How can a nation help its citizens who work abroad?"},
            {"main": "I wish that every stable <strong>household income</strong> <strong>enabled</strong> local families to open their own businesses.", "personal": "What is the best way to manage a family budget?"},
            {"main": "We hope that the positive <strong>economic impact</strong> of global trade <strong>improves</strong> local job markets.", "personal": "How does your country's economic state affect your career choices?"},
            {"main": "It is essential that financial institutions <strong>promote</strong> <strong>financial inclusion</strong> for unbanked rural populations.", "personal": "Do you think everyone should have access to digital banking?"}
        ],
        "r2": [
            {"main": "In the future, we hope that global transactions <strong>take</strong> place instantly with a zero <strong>fee</strong> guarantee.", "personal": "Do you feel wishing someone <strong>prosperity</strong> via a digital transfer is as meaningful as physical envelopes?"},
            {"main": "It is crucial that governments <strong>implement</strong> basic income so no <strong>migrant worker</strong> <strong>need</strong> to travel for employment.", "personal": "Have you ever celebrated a major family <strong>reunion</strong> over a video call?"},
            {"main": "I wish that decentralized finance <strong>replaced</strong> the traditional <strong>bank transfer</strong> entirely to speed up global transfers.", "personal": "Do you follow any traditional <strong>ritual</strong> that you secretly find silly?"},
            {"main": "We hope that remote work <strong>allows</strong> employees to stay with their families while reducing <strong>living expenses</strong>.", "personal": "Do you think a modern shopping <strong>festival</strong> has replaced the true spirit of traditional holidays?"},
            {"main": "It is vital that AI algorithms <strong>manage</strong> the <strong>economic impact</strong> of remittances to prevent sudden inflation.", "personal": "Do you think we should follow a <strong>lunar</strong> calendar, or do you prefer a standard solar calendar?"},
            {"main": "I wish that young generations <strong>continued</strong> to prioritize supporting extended families to boost <strong>household income</strong>.", "personal": "Would you support a ban on physical <strong>offering</strong> burning if it made city air cleaner?"},
            {"main": "It is important that citizens <strong>protect</strong> their privacy as states seek to control <strong>financial inclusion</strong>.", "personal": "Do you know your <strong>zodiac</strong> animal sign, and do you think it describes your personality?"},
            {"main": "We hope that smart platforms <strong>allow</strong> workers to send target-specific 'smart <strong>financial support</strong>' for education.", "personal": "Would you want to consult an AI clone of a deceased <strong>ancestor</strong>?"},
            {"main": "It is essential that a <strong>developing country</strong> <strong>create</strong> modern jobs so families don't have to rely on remittances.", "personal": "Which holiday dish has the best power to <strong>symbolize</strong> your family roots?"},
            {"main": "I wish that the emotional stress of sending a regular <strong>remittance</strong> <strong>did not discourage</strong> workers from seeking global careers.", "personal": "Do you ever feel pressured by the need to continue a family <strong>tradition</strong>?"}
        ]
    },
    "international-asteroid-day-intermediate.html": {
        "level": "Intermediate (B1)",
        "focus": "Speculative Future Predictions",
        "explanation": "To make speculative future predictions, we use modal verbs like <strong>will</strong>, <strong>may</strong>, <strong>might</strong>, or the phrase <strong>is/are likely to</strong> + base verb. Use <strong>will</strong> when you are certain, <strong>may/might</strong> when you are unsure or speculating, and <strong>is likely to</strong> for probable events.",
        "tasks": [
            "Scientists <strong>_____</strong> (probably discover) a new asteroid next year. <em>(Answer: will probably discover)</em>",
            "We <strong>_____</strong> (not colonize) Mars in this century, but it is possible. <em>(Answer: might not colonize / may not colonize)</em>",
            "Space tourism <strong>_____</strong> (be) likely to become cheaper soon. <em>(Answer: is likely to be)</em>"
        ],
        "speaking": "Share 2 speculative predictions about what space exploration and planet protection will look like in 50 years using 'might' and 'will'.",
        "r1": [
            {"main": "What scientific methods <strong>will</strong> astronomers use to detect a distant <strong>asteroid</strong>?", "personal": "Do you enjoy reading news about outer space and astronomical discoveries?"},
            {"main": "How <strong>might</strong> a major space rock <strong>impact</strong> affect the global climate of our planet?", "personal": "Have you ever seen a shooting star or a meteor shower in the night sky?"},
            {"main": "Why <strong>is</strong> a collision <strong>likely to</strong> be considered a major global security <strong>threat</strong>?", "personal": "Do you think humanity is prepared to handle a sudden natural crisis?"},
            {"main": "What high-tech equipment <strong>will</strong> scientists use to <strong>detect</strong> small space objects?", "personal": "Would you like to have a powerful telescope in your backyard?"},
            {"main": "Why <strong>might</strong> an asteroid remain in a stable <strong>orbit</strong> around the sun for millions of years?", "personal": "How do you feel when you think about the infinite size of the universe?"},
            {"main": "How <strong>will</strong> exploring deep <strong>space</strong> benefit future generations of students?", "personal": "Would you buy a ticket to travel into space if you had the money?"},
            {"main": "What steps <strong>should</strong> we take to <strong>protect</strong> our local environment from pollution?", "personal": "Do you participate in any local environmental clean-up projects?"},
            {"main": "How <strong>can</strong> meteorologists <strong>predict</strong> extreme weather events with high accuracy?", "personal": "How often do you check the weather forecast on your phone?"},
            {"main": "What daily tasks <strong>will</strong> a space <strong>scientist</strong> perform in a research laboratory?", "personal": "Do you think a scientist has an exciting or a boring job?"},
            {"main": "What measures <strong>are likely to</strong> make a neighborhood feel completely <strong>safe</strong>?", "personal": "Is your neighborhood safe enough to walk in at night?"}
        ],
        "r2": [
            {"main": "In the future, a private company <strong>will</strong> own every large <strong>asteroid</strong> in our solar system.", "personal": "Would you miss <strong>firecrackers</strong> if they were replaced by silent laser shows?"},
            {"main": "We <strong>might</strong> build a giant laser shield in <strong>space</strong> to destroy any threat before it reaches Earth.", "personal": "Do you think gift-giving is the most important part of a <strong>mythology</strong> celebration?"},
            {"main": "Every country <strong>will</strong> have its own planetary defense <strong>scientist</strong> team to monitor the skies.", "personal": "Have you ever celebrated a grand <strong>feast</strong> from a culture that wasn't your own?"},
            {"main": "A major <strong>threat</strong> from a space rock <strong>is likely to</strong> force all nations to work together.", "personal": "Should your country have more public holidays for different religions to share their <strong>symbolism</strong>?"},
            {"main": "Computers <strong>will</strong> become so smart they <strong>will</strong> <strong>predict</strong> exact weather patterns ten years in advance.", "personal": "Do you prefer a physical card wishing you <strong>prosperity</strong> or a digital message?"},
            {"main": "We <strong>may</strong> use special rockets to change the <strong>orbit</strong> of any dangerous rock heading our way.", "personal": "Do you value handmade art forms like <strong>rangoli</strong> more if you know they were made by hand?"},
            {"main": "Future cities <strong>might</strong> be built underground to keep everyone completely <strong>safe</strong> from space impacts.", "personal": "How often do you <strong>cleanse</strong> your digital life of clutter?"},
            {"main": "We <strong>will</strong> use smart satellites to immediately <strong>detect</strong> when a volcano is going to erupt.", "personal": "What is your favorite example of cultural fusion and shared <strong>festivity</strong>?"},
            {"main": "An asteroid <strong>impact</strong> <strong>is likely to</strong> destroy all human libraries, leaving no record of our history.", "personal": "Why do humans find hope in the symbol of lighting traditional <strong>diyas</strong>?"},
            {"main": "We <strong>will</strong> eventually have to leave Earth to <strong>protect</strong> our species from extinction.", "personal": "What is the most memorable act of <strong>hospitality</strong> a stranger has ever shown to you?"}
        ]
    },
    "international-asteroid-day-upper-intermediate.html": {
        "level": "Upper-Intermediate (B2)",
        "focus": "Speculative Future Predictions",
        "explanation": "For advanced future speculation, use <strong>Future Continuous</strong> (<em>will be + verb-ing</em>) for actions in progress in the future, and <strong>Future Perfect</strong> (<em>will have + past participle</em>) for actions completed before a certain future point. You can also use speculative modals like <strong>may well</strong>, <strong>could</strong>, or <strong>should</strong> to express varying levels of certainty.",
        "tasks": [
            "By 2050, scientists <strong>_____</strong> (establish) a permanent lunar observatory. <em>(Answer: will have established)</em>",
            "This time next year, astronauts <strong>_____</strong> (train) for the deep-space mission. <em>(Answer: will be training)</em>",
            "Space agencies <strong>_____</strong> well have diverted the asteroid by the end of the decade. <em>(Answer: may / could / should)</em>"
        ],
        "speaking": "What major astronomical or defensive milestone will humanity have achieved by 2080? Explain what scientists will be working on then.",
        "r1": [
            {"main": "What warning signs <strong>will</strong> astronomers <strong>have identified</strong> before a hazardous <strong>asteroid</strong> approaches Earth?", "personal": "Are you optimistic about humanity's ability to survive space threats?"},
            {"main": "How <strong>will</strong> scientists <strong>be mitigating</strong> the devastating <strong>impact</strong> of a collision in the next decade?", "personal": "What is the most impressive space movie you have ever watched?"},
            {"main": "By the end of this century, <strong>will</strong> we <strong>have neutralized</strong> every planetary <strong>threat</strong>?", "personal": "Do you think governments allocate enough budget to space research?"},
            {"main": "What advanced technologies <strong>will</strong> space telescopes <strong>be using</strong> to <strong>detect</strong> distant dark objects?", "personal": "Would you enjoy working as an astronomer looking at screens all night?"},
            {"main": "How <strong>will</strong> space agencies <strong>have altered</strong> the <strong>orbit</strong> of dangerous space rocks by 2040?", "personal": "How does learning about space influence your view of human conflicts?"},
            {"main": "By 2050, <strong>will</strong> humans <strong>have established</strong> self-sustaining colony <strong>spaces</strong> on the moon?", "personal": "Would you volunteer for a one-way trip to colonize another planet?"},
            {"main": "What environmental strategies <strong>will</strong> we <strong>be implementing</strong> to <strong>protect</strong> our atmosphere?", "personal": "Do you think individual actions can make a real difference in saving the environment?"},
            {"main": "How <strong>will</strong> meteorologists <strong>have perfected</strong> their ability to <strong>predict</strong> solar flares?", "personal": "Are you worried about solar storms affecting our internet connection?"},
            {"main": "What breakthrough research <strong>will</strong> a leading space <strong>scientist</strong> <strong>be conducting</strong> tomorrow?", "personal": "Which scientific field do you think will grow the fastest in the next ten years?"},
            {"main": "How <strong>will</strong> global communities <strong>have guaranteed</strong> a <strong>safe</strong> living environment for future generations?", "personal": "What does a 'safe city' look like to you in terms of technology?"}
        ],
        "r2": [
            {"main": "By 2075, private space conglomerates <strong>will have monopolized</strong> resource extraction on every mineral-rich <strong>asteroid</strong>.", "personal": "Would you support a ban on private companies owning resources in space?"},
            {"main": "In the next decade, international coalitions <strong>will be deploying</strong> laser defense platforms in orbit to eliminate any space <strong>threat</strong>.", "personal": "Do you think space weapons could be misused by competing nations?"},
            {"main": "By the end of the century, a planetary defense <strong>scientist</strong> <strong>will have been appointed</strong> to the security council of every major nation.", "personal": "Would having a space scientist in government make you feel safer?"},
            {"main": "An imminent space <strong>threat</strong> <strong>will have forced</strong> all rival nations to unite under a single global government by 2050.", "personal": "Do you think it takes a global crisis to make humanity unite?"},
            {"main": "Supercomputers <strong>will be simulating</strong> exact solar and planetary movements centuries in advance, allowing us to <strong>predict</strong> every danger.", "personal": "Would you want to know the exact date of a future global catastrophe?"},
            {"main": "By 2045, engineers <strong>will have successfully redirected</strong> the <strong>orbit</strong> of a major celestial body for the first time.", "personal": "Would modifying the solar system make you feel proud or anxious?"},
            {"main": "To survive cosmic radiation, future generations <strong>will be constructing</strong> subterranean cities to keep citizens <strong>safe</strong>.", "personal": "Could you adapt to living in a high-tech underground city with artificial sunlight?"},
            {"main": "Advanced quantum sensors <strong>will be monitoring</strong> deep space, allowing us to <strong>detect</strong> anomalies instantly.", "personal": "Do you think quantum technology will solve our space navigation problems?"},
            {"main": "A catastrophic <strong>impact</strong> <strong>could well have erased</strong> all digital data servers, forcing a return to physical archives.", "personal": "How would you preserve human knowledge if all digital systems failed?"},
            {"main": "By the turn of the next century, humans <strong>will have abandoned</strong> fragile ecosystems to <strong>protect</strong> them from industrial decay.", "personal": "Do you think leaving nature completely alone is the only way to save it?"}
        ]
    },
    "international-peace-love-day-intermediate.html": {
        "level": "Intermediate (B1)",
        "focus": "Phrasal Verbs of Connection",
        "explanation": "Phrasal verbs of connection describe how we relate to, communicate with, and unite with others. Common examples include: <strong>bring together</strong> (to unite), <strong>bond with</strong> (to form a close relationship), <strong>reach out to</strong> (to contact or offer help), <strong>get along with</strong> (to have a friendly relationship), and <strong>connect with</strong>.",
        "tasks": [
            "Festivals are wonderful because they bring people <strong>_____</strong> (together). <em>(Answer: together)</em>",
            "It is easy to bond <strong>_____</strong> (with) others over a delicious traditional meal. <em>(Answer: with)</em>",
            "We should reach <strong>_____</strong> (out) to lonely neighbors during major holidays. <em>(Answer: out)</em>"
        ],
        "speaking": "Describe a time when a holiday, festival, or group activity helped you bond with someone new or bring your friends together.",
        "r1": [
            {"main": "How does art help us <strong>connect with</strong> others and cultivate <strong>empathy</strong> in divided communities?", "personal": "Do you find it easy to connect with people who have different opinions?"},
            {"main": "In what ways do local festivals <strong>bring together</strong> people to share <strong>kindness</strong>?", "personal": "When was the last time a stranger showed unexpected kindness to you?"},
            {"main": "Why is it important to <strong>reach out to</strong> neighbors and offer <strong>compassion</strong> during difficult times?", "personal": "How do you usually support a friend who is going through a hard time?"},
            {"main": "How does volunteering help citizens <strong>get along with</strong> different members of their <strong>community</strong>?", "personal": "Have you ever volunteered for a local project or charity?"},
            {"main": "Why do people easily <strong>bond with</strong> others when they join in a global <strong>celebration</strong>?", "personal": "What is the most joyful celebration you have ever attended?"},
            {"main": "How can music help us <strong>bridge the gap</strong> and express <strong>affection</strong> across linguistic barriers?", "personal": "Is there a song that always makes you feel connected to your friends?"},
            {"main": "Why does a shared meal help relatives <strong>open up to</strong> each other and achieve <strong>reconciliation</strong>?", "personal": "How does your family resolve disagreements during holiday dinners?"},
            {"main": "How can we <strong>stand up for</strong> others to ensure a <strong>peaceful</strong> neighborhood environment?", "personal": "Do you think your neighborhood is a peaceful place to grow up in?"},
            {"main": "What daily habits help you <strong>get along with</strong> colleagues and foster <strong>goodwill</strong>?", "personal": "What is your secret to maintaining good relationships at work or school?"},
            {"main": "How can we <strong>reach out to</strong> younger generations to pass on the value of <strong>harmony</strong>?", "personal": "Who taught you the most about living in harmony with others?"}
        ],
        "r2": [
            {"main": "In the future, translation technology will help everyone <strong>get along with</strong> other cultures, creating universal <strong>harmony</strong>.", "personal": "Would you miss the challenge of learning languages if instant translation was perfect?"},
            {"main": "Virtual reality platforms will <strong>bring together</strong> divided families, generating high-fidelity digital <strong>affection</strong>.", "personal": "Can a virtual hug ever feel as meaningful as a physical one?"},
            {"main": "To prevent future conflicts, school systems will <strong>always</strong> <strong>reach out to</strong> international partners to build global <strong>goodwill</strong>.", "personal": "Did your school have international exchange programs when you were young?"},
            {"main": "As megacities grow, local neighborhood associations will struggle to <strong>bring together</strong> a fractured <strong>community</strong>.", "personal": "Do you know the names of the people who live next door to you?"},
            {"main": "A universal basic empathy score will determine how citizens <strong>get along with</strong> others during public <strong>celebrations</strong>.", "personal": "Would you want your empathy levels to be measured by a computer?"},
            {"main": "Social media algorithms will be redesigned to help users <strong>bond with</strong> offline neighbors, fostering real-world <strong>empathy</strong>.", "personal": "Do you think social media currently connects us or divides us more?"},
            {"main": "We will see the rise of digital reconciliation booths designed to help families <strong>open up to</strong> each other and achieve <strong>reconciliation</strong>.", "personal": "Would you use an AI mediator to help resolve a family argument?"},
            {"main": "Synthetic pets will be introduced in care homes to help elderly citizens <strong>bond with</strong> active companions and experience <strong>compassion</strong>.", "personal": "Do you think a robotic pet can offer real emotional comfort?"},
            {"main": "To ensure a <strong>peaceful</strong> future, global citizens will <strong>stand up for</strong> human rights in decentralized online assemblies.", "personal": "What is a cause you would be willing to stand up for online?"},
            {"main": "AI companions will teach children how to <strong>reach out to</strong> lonely classmates and share <strong>kindness</strong>.", "personal": "Do you believe children are naturally kind, or must they be taught kindness?"}
        ]
    },
    "international-peace-love-day-upper-intermediate.html": {
        "level": "Upper-Intermediate (B2)",
        "focus": "Phrasal Verbs of Connection",
        "explanation": "Use advanced phrasal verbs and prepositional collocations to discuss connection and social unity. Key structures include: <strong>bridge the gap between</strong> (to reduce differences), <strong>open up to</strong> (to become receptive/express feelings), <strong>stand up for</strong> (to defend/support), <strong>reach out to</strong> (to initiate contact), and <strong>bond with</strong>.",
        "tasks": [
            "Cultural exchange programs help bridge the <strong>_____</strong> between divided nations. <em>(Answer: gap)</em>",
            "It takes courage for individuals to open <strong>_____</strong> to unfamiliar perspectives. <em>(Answer: up)</em>",
            "We must stand <strong>_____</strong> for marginalized groups to ensure social justice. <em>(Answer: up)</em>"
        ],
        "speaking": "Discuss how international artistic collaborations can bridge the gap between competing nations. How do creators bond with each other during such tasks?",
        "r1": [
            {"main": "How does public art enable us to <strong>connect with</strong> diverse audiences and stimulate deep <strong>empathy</strong>?", "personal": "Do you believe that art has a genuine power to change political opinions?"},
            {"main": "In what ways do community initiatives <strong>bring together</strong> polarized groups to practice systemic <strong>kindness</strong>?", "personal": "How do you define kindness in a highly competitive society?"},
            {"main": "Why is it imperative that we <strong>reach out to</strong> disenfranchised groups to demonstrate authentic <strong>compassion</strong>?", "personal": "Is compassion something that can be trained, or is it an innate trait?"},
            {"main": "How can local leaders help citizens <strong>get along with</strong> newcomers to strengthen the <strong>community</strong>?", "personal": "How welcoming is your city or town to international visitors?"},
            {"main": "Why do individuals so rapidly <strong>bond with</strong> peers during a shared artistic <strong>celebration</strong>?", "personal": "What is the most creative festival or event you have ever participated in?"},
            {"main": "How can cross-cultural music projects help <strong>bridge the gap</strong> and convey profound <strong>affection</strong>?", "personal": "Why do you think music is often called 'the universal language'?"},
            {"main": "Why does sharing historical narratives help opposing factions <strong>open up to</strong> each other and achieve <strong>reconciliation</strong>?", "personal": "What is the most difficult aspect of forgiving someone who has hurt you?"},
            {"main": "How can average citizens <strong>stand up for</strong> democratic values to maintain a <strong>peaceful</strong> society?", "personal": "Do you feel a personal responsibility to engage in social or political activism?"},
            {"main": "What communicative strategies allow diverse teams to <strong>get along with</strong> one another and promote <strong>goodwill</strong>?", "personal": "How do you handle working in a team with very diverse personalities?"},
            {"main": "How can we <strong>reach out to</strong> younger generations to ensure the preservation of societal <strong>harmony</strong>?", "personal": "Do you think the world is becoming more or less harmonious over time?"}
        ],
        "r2": [
            {"main": "In the future, advanced neural interfaces will enable us to <strong>connect with</strong> others directly, creating a hive-mind of absolute <strong>empathy</strong>.", "personal": "Would you link your brain to a network if it meant you could feel everyone's emotions?"},
            {"main": "Immersive holographic hubs will <strong>bring together</strong> global citizens, allowing them to express simulated <strong>affection</strong> across oceans.", "personal": "Do you think virtual presence will ever fully satisfy our need for human contact?"},
            {"main": "To prevent geopolitical conflicts, international organizations will <strong>reach out to</strong> youth leaders to build sustainable <strong>goodwill</strong>.", "personal": "What role should young people play in international diplomacy?"},
            {"main": "As urbanization accelerates, decentralized municipal hubs will <strong>bridge the gap</strong> inside a highly fragmented <strong>community</strong>.", "personal": "How can big cities prevent residents from feeling isolated and disconnected?"},
            {"main": "A computerized social-cohesion index will monitor how well citizens <strong>get along with</strong> their neighbors during public <strong>celebrations</strong>.", "personal": "Would you support a system that rewards citizens for being active in their community?"},
            {"main": "AI-driven algorithms will be optimized to help users <strong>bond with</strong> local activists, turning digital screen time into real-world <strong>empathy</strong>.", "personal": "Do you think technology can be redesigned to make us more community-oriented?"},
            {"main": "We will witness the establishment of automated diplomatic portals designed to help historic rivals <strong>open up to</strong> dialogue and achieve <strong>reconciliation</strong>.", "personal": "Is absolute reconciliation possible between nations with a history of conflict?"},
            {"main": "Biometric feedback devices will be introduced in workplaces to help colleagues <strong>bond with</strong> teammates and experience deep <strong>compassion</strong>.", "personal": "Would you want your employer to monitor your stress levels to help you relax?"},
            {"main": "To guarantee a stable and <strong>peaceful</strong> future, global networks of citizens will <strong>stand up for</strong> environmental justice.", "personal": "What environmental issue do you feel most passionate about protecting?"},
            {"main": "Intelligent counseling systems will teach children how to <strong>reach out to</strong> isolated peers and demonstrate proactive <strong>kindness</strong>.", "personal": "How can schools better foster a culture of kindness and inclusion?"}
        ]
    },
    "lunar-new-year.html": {
        "level": "Intermediate (B1)",
        "focus": "Zodiac Descriptions & Cultural Prepositions",
        "explanation": "When describing zodiac signs, personality traits, and cultural habits, pay close attention to correct prepositional collocations: <strong>associated with</strong> (not <em>'to'</em>), <strong>rely on</strong> (not <em>'to'</em>), <strong>celebrated in</strong> a month (e.g., <em>'in February'</em>) or <strong>on</strong> a day (e.g., <em>'on Monday'</em>), <strong>famous for</strong> (not <em>'about'</em>), and <strong>symbolizes a shift in</strong>.",
        "tasks": [
            "The Tiger is closely associated <strong>_____</strong> bravery and strength. <em>(Answer: with)</em>",
            "Families heavily rely <strong>_____</strong> traditional reunions to maintain their bonds. <em>(Answer: on)</em>",
            "Lunar New Year is celebrated <strong>_____</strong> late January or early February. <em>(Answer: in)</em>"
        ],
        "speaking": "Describe your own birth year or favorite zodiac animal. What personality traits are associated with it, and what do people rely on it for?",
        "r1": [
            {"main": "How does the intense focus on welcoming financial <strong>prosperity</strong>, which is associated <strong>with</strong> the color red, affect modern families' expectations?", "personal": "Is it common to see these celebrations in your city?"},
            {"main": "Why do young people sometimes struggle to rely <strong>on</strong> family <strong>tradition</strong> during large cultural holidays?", "personal": "Do you prefer holidays with fixed or changing dates?"},
            {"main": "Why does a simple yearly <strong>ritual</strong>, celebrated <strong>in</strong> many Asian countries, have such a powerful emotional effect?", "personal": "What is the \"lucky color\" in your culture?"},
            {"main": "Red envelopes <strong>symbolize</strong> a shift <strong>in</strong> luck and protection; what other holiday gifts carry deep symbolic meanings?", "personal": "When was the last time you received money as a gift?"},
            {"main": "Why is honoring one's <strong>ancestors</strong>, which is famous <strong>for</strong> bringing blessings, a central pillar of Lunar New Year?", "personal": "Do you know your family history or have special stories about your grandparents?"},
            {"main": "How has this ancient agricultural <strong>festival</strong>, celebrated <strong>on</strong> a changing lunar date, evolved to become a global celebration?", "personal": "What is the most important \"holiday food\" in your family?"},
            {"main": "Why does following a <strong>lunar</strong> calendar, famous <strong>for</strong> its seasonal rhythm, create a unique feeling compared to solar calendars?", "personal": "Do you usually do a big \"spring cleaning\" before major holidays?"},
            {"main": "How does the 12-year animal <strong>zodiac</strong> cycle, associated <strong>with</strong> specific personality traits, influence people's future choices?", "personal": "Do you know your zodiac animal, and do you think its description fits you?"},
            {"main": "Why is the traditional family <strong>reunion</strong> dinner, famous <strong>for</strong> bringing relatives together, considered the most sacred part of the holiday?", "personal": "Could you imagine traveling long distances just to have a single dinner with your family?"},
            {"main": "What is the spiritual significance of placing a food <strong>offering</strong> <strong>on</strong> a family altar during festive periods?", "personal": "Do you like traveling or staying home during the holidays?"}
        ],
        "r2": [
            {"main": "Digital 'red envelopes' wishing <strong>prosperity</strong>, associated <strong>with</strong> instant transfers, will completely replace physical ones.", "personal": "Do you feel wishing someone <strong>prosperity</strong> via a digital transfer is as meaningful as physical envelopes?"},
            {"main": "As families disperse globally, we will rely <strong>on</strong> virtual reunion dinners rather than physical <strong>reunions</strong>.", "personal": "Have you ever celebrated a major family <strong>reunion</strong> over a video call?"},
            {"main": "In the future, young generations will completely lose connection to family <strong>ritual</strong> practices, celebrated <strong>on</strong> traditional days.", "personal": "Do you follow any traditional <strong>ritual</strong> that you secretly find silly?"},
            {"main": "Major holidays will become purely commercial events driven by shopping <strong>festival</strong> sales, famous <strong>for</strong> huge discounts.", "personal": "Do you think a modern shopping <strong>festival</strong> has replaced the true spirit of traditional holidays?"},
            {"main": "In the future, the globalized world will rely <strong>on</strong> a single calendar, making any traditional <strong>lunar</strong> calendar obsolete.", "personal": "Do you think we should follow a <strong>lunar</strong> calendar, or do you prefer a standard solar calendar?"},
            {"main": "Future smart cities will ban all physical <strong>offering</strong> tables, famous <strong>for</strong> incense burning, to reduce pollution.", "personal": "Would you support a ban on physical <strong>offering</strong> burning if it made city air cleaner?"},
            {"main": "The psychological belief in <strong>zodiac</strong> signs, associated <strong>with</strong> ancient astrology, will be treated as a cognitive bias.", "personal": "Do you know your <strong>zodiac</strong> animal sign, and do you think it describes your personality?"},
            {"main": "The concept of respecting each <strong>ancestor</strong> will rely <strong>on</strong> creating digital AI clones to consult during holidays.", "personal": "Would you want to consult an AI clone of a deceased <strong>ancestor</strong>?"},
            {"main": "Traditional foods, famous <strong>for</strong> their history, will lose their power to <strong>symbolize</strong> a shift <strong>in</strong> the seasons.", "personal": "Which holiday dish has the best power to <strong>symbolize</strong> your family roots?"},
            {"main": "Keeping any ancient family <strong>tradition</strong>, celebrated <strong>in</strong> modern times, will be viewed as a toxic burden.", "personal": "Do you ever feel pressured by the need to continue a family <strong>tradition</strong>?"}
        ]
    },
    "national-someone-day-intermediate.html": {
        "level": "Intermediate (B1)",
        "focus": "Relative Clauses & Infinitive of Purpose",
        "explanation": "Use <strong>Relative Clauses</strong> with relative pronouns (<em>who, which, that, where</em>) to define or give extra information about a person, place, or thing (e.g., <em>'Someone <strong>who</strong> inspires me'</em>, <em>'A card <strong>that</strong> says thanks'</em>). Use <strong>Infinitive of Purpose</strong> (<em>to + verb</em>) to explain <strong>why</strong> you do an action (e.g., <em>'I called her <strong>to say</strong> thank you'</em>).",
        "tasks": [
            "She is a person <strong>_____</strong> always helps others when they are in trouble. <em>(Answer: who / that)</em>",
            "I went to the florist <strong>_____</strong> (buy) some fresh flowers for my mother. <em>(Answer: to buy)</em>",
            "This is the park <strong>_____</strong> we first met on a sunny afternoon. <em>(Answer: where)</em>"
        ],
        "speaking": "Describe someone who is very important in your life using a relative clause, and explain what you did recently to show them your appreciation using an infinitive of purpose.",
        "r1": [
            {"main": "Who is <strong>someone who</strong> has played a major role in your life, and what did they do <strong>to help</strong> you?", "personal": "Do you find it easy to express gratitude to people in your daily life?"},
            {"main": "Why is a handwritten <strong>letter</strong> <strong>that</strong> comes in the mail so much more powerful than a digital text?", "personal": "When was the last time you wrote a physical letter to someone?"},
            {"main": "How does buying a <strong>gift</strong> <strong>to celebrate</strong> a friend's success strengthen your relationship?", "personal": "Do you prefer giving gifts or receiving them?"},
            {"main": "Is there a specific <strong>holiday</strong> <strong>that</strong> you use <strong>to remember</strong> and honor important people in history?", "personal": "What is your favorite holiday for spending time with loved ones?"},
            {"main": "What is an active <strong>gesture</strong> <strong>who</strong>ever wants to show kindness can use <strong>to make</strong> a stranger smile?", "personal": "Have you ever made a random stranger smile with a small gesture?"},
            {"main": "Who is a <strong>hero</strong> <strong>who</strong> inspired you when you were growing up, and what did they do <strong>to change</strong> your views?", "personal": "Do you think we have enough real heroes in the media today?"},
            {"main": "Why is <strong>gratitude</strong> a habit <strong>that</strong> we need to practice daily <strong>to keep</strong> our minds happy?", "personal": "What are three simple things you are grateful for today?"},
            {"main": "What is a <strong>tradition</strong> <strong>that</strong> your community uses <strong>to support</strong> lonely neighbors during winter?", "personal": "Are there any special charity traditions in your neighborhood?"},
            {"main": "Why is <strong>kindness</strong> a language <strong>that</strong> everyone can understand, and how can we use it <strong>to unite</strong> people?", "personal": "How do you teach kindness to younger children?"},
            {"main": "Who is a <strong>teacher</strong> <strong>who</strong> went out of their way <strong>to guide</strong> you when you were struggling at school?", "personal": "Do you still stay in touch with any of your former teachers?"}
        ],
        "r2": [
            {"main": "In the future, we will use AI systems <strong>that</strong> analyze our relationships <strong>to schedule</strong> mandatory appreciation days.", "personal": "Would you want an AI to tell you when <strong>gratitude</strong> is required?"},
            {"main": "The act of sending a physical <strong>letter</strong>, <strong>which</strong> requires time and effort <strong>to write</strong>, will become completely extinct.", "personal": "Would you miss physical mail if everything became digital <strong>to save</strong> paper?"},
            {"main": "A global <strong>holiday</strong> <strong>that</strong> is designed <strong>to force</strong> people to be kind will backfire, making kindness feel fake.", "personal": "Can you force someone <strong>to show</strong> genuine appreciation?"},
            {"main": "Virtual reality will allow us to send a digital <strong>gift</strong> <strong>that</strong> uses sensory feedback <strong>to simulate</strong> a real hug.", "personal": "Would a virtual hug be enough <strong>to make</strong> you feel loved?"},
            {"main": "We will have a robotic <strong>hero</strong> <strong>that</strong> performs dangerous tasks <strong>to protect</strong> human lives in emergencies.", "personal": "Would you trust a robot <strong>to rescue</strong> you from a burning building?"},
            {"main": "Future schools will introduce classes in <strong>gratitude</strong> <strong>that</strong> use biometric bands <strong>to track</strong> sincerity.", "personal": "Is sincerity something <strong>that</strong> technology can measure?"},
            {"main": "A simple <strong>gesture</strong> <strong>that</strong> is captured on video will become a form of social currency <strong>to buy</strong> popularity.", "personal": "Have you ever shared a kind act on social media <strong>to get</strong> likes?"},
            {"main": "The ancient <strong>tradition</strong> of family gatherings, <strong>which</strong> people use <strong>to bond</strong>, will be replaced by neural connections.", "personal": "Would you prefer a neural connection <strong>to share</strong> thoughts instantly with family?"},
            {"main": "We will have a specialized city department <strong>that</strong> employs professional actors <strong>to spread</strong> <strong>kindness</strong> in public spaces.", "personal": "Would public kindness feel different if you knew the person was paid <strong>to do</strong> it?"},
            {"main": "A digital <strong>teacher</strong> <strong>that</strong> is programmed <strong>to understand</strong> your emotions will replace human educators.", "personal": "Can a computer program have the empathy <strong>that</strong> is needed <strong>to teach</strong> children?"}
        ]
    },
    "national-someone-day-upper-intermediate.html": {
        "level": "Upper-Intermediate (B2)",
        "focus": "Relative Clauses & Infinitive of Purpose",
        "explanation": "Distinguish between <strong>defining</strong> and <strong>non-defining</strong> relative clauses (non-defining clauses require commas and cannot use <em>'that'</em>). Use advanced relative structures like <strong>whose</strong>, <strong>whom</strong>, or prepositions with relative pronouns (e.g., <em>'the person to whom we owe thanks'</em>). For purpose, elevate your writing using <strong>in order to</strong>, <strong>so as to</strong>, or <strong>with the aim of + -ing</strong>.",
        "tasks": [
            "My mentor, <strong>_____</strong> lives in Canada, sent me a lovely appreciation card. <em>(Answer: who)</em>",
            "We organized a surprise celebration in order <strong>_____</strong> (show) our deep respect. <em>(Answer: to show)</em>",
            "This is the colleague, the efforts of <strong>_____</strong> saved our project from failure. <em>(Answer: whom)</em>"
        ],
        "speaking": "Describe an esteemed colleague or family member whose impact on your life is profound. What steps did you take in order to convey your appreciation to them?",
        "r1": [
            {"main": "Who is <strong>someone whose</strong> guidance has fundamentally shaped your career, and what did you do <strong>so as to</strong> reciprocate?", "personal": "Do you find it natural to articulate your appreciation to professional mentors?"},
            {"main": "Why does a physical <strong>letter</strong>, <strong>which</strong> requires deliberate effort to craft, resonate so much more deeply than an email?", "personal": "When did you last receive a piece of mail that you decided to keep permanently?"},
            {"main": "How does selecting a highly personalized <strong>gift</strong> <strong>in order to</strong> honor a colleague's milestone impact workplace synergy?", "personal": "What is the most thoughtful professional gift you have ever observed?"},
            {"main": "Is there a specific historical <strong>holiday</strong>, the origin of <strong>which</strong> remains controversial, that you utilize <strong>to reflect</strong> on societal progress?", "personal": "Which national holiday do you think has the most profound historical significance?"},
            {"main": "What kind of small <strong>gesture</strong>, <strong>which</strong> anyone can perform without expense, is most effective <strong>to uplift</strong> a demoralized peer?", "personal": "How do you usually respond when you notice a colleague is visibly stressed?"},
            {"main": "Who is a contemporary <strong>hero</strong>, for <strong>whom</strong> you have immense respect, and what did they sacrifice <strong>so as to</strong> defend their principles?", "personal": "Do you think modern media focuses too much on celebrity culture rather than real heroes?"},
            {"main": "Why is <strong>gratitude</strong>, <strong>which</strong> psychologists define as a transformative practice, essential <strong>to maintain</strong> emotional resilience?", "personal": "What specific aspects of your current life are you most profoundly grateful for?"},
            {"main": "What community <strong>tradition</strong>, the survival of <strong>which</strong> depends entirely on volunteers, is vital <strong>to prevent</strong> social isolation?", "personal": "How integrated do you feel within your local neighborhood's activities?"},
            {"main": "Why is proactive <strong>kindness</strong>, <strong>which</strong> we often take for granted, a crucial mechanism <strong>to bridge</strong> cultural divides?", "personal": "Can you recall a time when kindness completely de-escalated a tense situation?"},
            {"main": "Who is a <strong>teacher</strong> to <strong>whom</strong> you are eternally indebted, and what did they do <strong>in order to</strong> unlock your true potential?", "personal": "How did your favorite educator influence your approach to learning?"}
        ],
        "r2": [
            {"main": "In the future, we will utilize neural monitors <strong>that</strong> analyze our relationships <strong>in order to</strong> mandate appreciation intervals.", "personal": "Would you allow an algorithm to dictate when and how you express <strong>gratitude</strong>?"},
            {"main": "The tradition of writing a physical <strong>letter</strong>, <strong>which</strong> has historically preserved human history, will disappear completely <strong>so as to</strong> conserve resources.", "personal": "Would the complete death of physical mail represent a major cultural loss for future historians?"},
            {"main": "A federally mandated appreciation <strong>holiday</strong>, the parameters of <strong>which</strong> are strictly enforced, will make emotional expression feel entirely superficial.", "personal": "Is it possible for state-mandated appreciation to ever feel authentic?"},
            {"main": "Virtual reality will enable us to deliver a sensory <strong>gift</strong> <strong>that</strong> simulates real touch <strong>in order to</strong> bridge the physical gap between distant relatives.", "personal": "Could digital touch ever fully substitute for physical human warmth?"},
            {"main": "We will develop robotic emergency responders, <strong>whose</strong> primary directive is <strong>to protect</strong> human lives in hazardous zones.", "personal": "Would you feel completely secure putting your life in the hands of an autonomous machine?"},
            {"main": "Future educational systems will incorporate <strong>gratitude</strong> classes, the success of <strong>which</strong> will be evaluated using biometric stress-trackers.", "personal": "Do you think measuring emotional sincerity with technology is ethical?"},
            {"main": "A simple altruistic <strong>gesture</strong>, <strong>which</strong> is captured and broadcasted on decentralized feeds, will be leveraged <strong>to accumulate</strong> social credit.", "personal": "What are the dangers of turning kindness into a tool for public popularity?"},
            {"main": "The ancient <strong>tradition</strong> of multi-generational co-habitation, <strong>which</strong> fosters deep familial bonds, will be abandoned <strong>so as to</strong> maximize individual mobility.", "personal": "Is the decline of the extended family structure positive or negative for society?"},
            {"main": "We will establish municipal departments <strong>that</strong> deploy professional actors <strong>in order to</strong> perform random acts of <strong>kindness</strong> in public spaces.", "personal": "Would public kindness lose its magic if you discovered it was a staged municipal performance?"},
            {"main": "An interactive digital <strong>teacher</strong>, <strong>whose</strong> database contains all human knowledge, will replace human educators <strong>so as to</strong> standardize learning.", "personal": "What essential human qualities does an AI teacher lack that are vital for mentoring youth?"}
        ]
    },
    "pandemonium-day-intermediate.html": {
        "level": "Intermediate (B1)",
        "focus": "Speculative Conditional Clauses",
        "explanation": "Use the <strong>Second Conditional</strong> (<em>If + Past Simple, would + base verb</em>) to talk about imaginary, highly unlikely, or speculative situations in the present or future (e.g., <em>'If there were no rules, society would face total chaos'</em>). You can also use <em>could</em> or <em>might</em> to express potential possibility.",
        "tasks": [
            "If there <strong>_____</strong> (be) no rules, society would be in total chaos. <em>(Answer: were / was)</em>",
            "I <strong>_____</strong> (join) the public flash mob if I had more free time. <em>(Answer: would join)</em>",
            "If you had to choose between absolute silence and total noise, which <strong>_____</strong> you prefer? <em>(Answer: would)</em>"
        ],
        "speaking": "If you could create a brand-new national holiday to celebrate something chaotic, what would it be and how would people celebrate it?",
        "r1": [
            {"main": "If you had to describe <strong>pandemonium</strong> using only sounds, what noisy instruments <strong>would</strong> you choose?", "personal": "Do you prefer a quiet, calm home environment or a lively, noisy one?"},
            {"main": "If a massive flash mob <strong>happened</strong> in your street, <strong>would</strong> you join in the fun?", "personal": "Have you ever participated in or watched a public flash mob?"},
            {"main": "If we <strong>removed</strong> all structured <strong>schedule</strong> plans, <strong>would</strong> you feel liberated or anxious?", "personal": "How organized is your typical daily schedule?"},
            {"main": "If your home fell into temporary <strong>chaos</strong>, how <strong>would</strong> you restore peace?", "personal": "Do you find it easy to relax when your room is untidy?"},
            {"main": "If you <strong>could</strong> choose to live a completely <strong>unpredictable</strong> life, where <strong>would</strong> you go?", "personal": "Do you prefer to plan your holidays in advance or go spontaneously?"},
            {"main": "If the government <strong>banned</strong> all loud <strong>laughter</strong> in public, how <strong>would</strong> citizens react?", "personal": "Do you laugh easily, or are you a more serious person?"},
            {"main": "If you <strong>were</strong> in a large, excited <strong>crowd</strong>, <strong>would</strong> you feel energetic or overwhelmed?", "personal": "How do you feel when you are in a very crowded train or bus?"},
            {"main": "If our daily work lives <strong>lacked</strong> clear <strong>structure</strong>, how <strong>would</strong> productivity change?", "personal": "Do you work better when you have strict deadlines?"},
            {"main": "If you <strong>observed</strong> complete <strong>disorder</strong> in a supermarket, what <strong>would</strong> you do?", "personal": "How often do you reorganize your personal bookshelf?"},
            {"main": "If you <strong>designed</strong> a city park, what elements <strong>would</strong> you include to make it feel <strong>orderly</strong>?", "personal": "Is your neighborhood city park clean and well-maintained?"}
        ],
        "r2": [
            {"main": "If automated robots <strong>took</strong> over all manual chores, human schedules <strong>would</strong> lose their purpose, causing absolute <strong>chaos</strong>.", "personal": "If you had a domestic robot, what task <strong>would</strong> you ask it to do first?"},
            {"main": "If we <strong>lived</strong> in a world with no calendars, every day <strong>would</strong> feel like a random <strong>unpredictable</strong> adventure.", "personal": "If you woke up tomorrow with no sense of time, what <strong>would</strong> you do first?"},
            {"main": "If schools <strong>replaced</strong> standard grading with mindfulness, classrooms <strong>would</strong> become much more <strong>orderly</strong>.", "personal": "If you were a headteacher, what subject <strong>would</strong> you make mandatory?"},
            {"main": "If smart cities <strong>outlawed</strong> public assemblies, large <strong>crowds</strong> <strong>would</strong> meet in virtual spaces instead.", "personal": "If you could design a virtual hangout space, what <strong>would</strong> it look like?"},
            {"main": "If the internet <strong>collapsed</strong> for a month, global communication <strong>would</strong> spiral into complete <strong>pandemonium</strong>.", "personal": "If you lost internet access for a week, how <strong>would</strong> you spend your free time?"},
            {"main": "If a slow-living philosophy <strong>became</strong> mandatory, people <strong>would</strong> happily simplify their busy <strong>schedule</strong> lists.", "personal": "If you could eliminate one task from your weekly schedule, what <strong>would</strong> it be?"},
            {"main": "If cities <strong>built</strong> massive underground parks, children <strong>would</strong> spend their playtime away from urban <strong>disorder</strong>.", "personal": "If you had to live underground, what <strong>would</strong> you miss most about the surface?"},
            {"main": "If citizens <strong>were</strong> rewarded for doing nothing, we <strong>would</strong> see a dramatic decline in daily work-related <strong>structure</strong>.", "personal": "If you received a basic income, <strong>would</strong> you continue working at your job?"},
            {"main": "If acoustic technology <strong>silenced</strong> all street noise, urban environments <strong>would</strong> feel incredibly peaceful despite the population <strong>chaos</strong>.", "personal": "If your city was completely silent for a day, how <strong>would</strong> you feel?"},
            {"main": "If we <strong>shared</strong> a single global language, international communication <strong>would</strong> be much more <strong>orderly</strong>.", "personal": "If everyone spoke the same language, <strong>would</strong> the world lose its charm?"}
        ]
    },
    "pandemonium-day-upper-intermediate.html": {
        "level": "Upper-Intermediate (B2)",
        "focus": "Speculative Conditional Clauses",
        "explanation": "Master the <strong>Third Conditional</strong> (<em>If + Past Perfect, would have + past participle</em>) to speculate about imaginary past events and their hypothetical past outcomes. Use <strong>Mixed Conditionals</strong> (e.g., <em>If + Past Perfect, would + base verb</em>) to connect a hypothetical past action with a present state (e.g., <em>'If they had planned the festival better, there wouldn't be so much chaos now'</em>).",
        "tasks": [
            "If they <strong>_____</strong> (plan) the event better, there wouldn't be so much chaos now. <em>(Answer: had planned)</em>",
            "If I had not attended the festival, I <strong>_____</strong> (not meet) my best friend. <em>(Answer: would not have met)</em>",
            "If the government <strong>_____</strong> (not intervene) yesterday, pandemonium would still be ongoing. <em>(Answer: had not intervened)</em>"
        ],
        "speaking": "Reflect on a chaotic or highly unpredictable event in your past. How would your life or current situation be different today if that event had never occurred?",
        "r1": [
            {"main": "If you had been asked to define <strong>pandemonium</strong> using only historical events, which chaotic eras <strong>would</strong> you <strong>have highlighted</strong>?", "personal": "Do you find historical biographies or fictional accounts of chaos more compelling?"},
            {"main": "If a massive flash mob <strong>had erupted</strong> in your office last week, how <strong>would</strong> you <strong>have reacted</strong>?", "personal": "What is the most unexpected public disruption you have ever witnessed in person?"},
            {"main": "If you <strong>had abandoned</strong> your rigid <strong>schedule</strong> yesterday, what spontaneous opportunities <strong>would</strong> you <strong>have encountered</strong>?", "personal": "How do you cope when a carefully planned itinerary completely falls apart?"},
            {"main": "If a minor technical failure <strong>had plunged</strong> your city into temporary <strong>chaos</strong>, how <strong>would</strong> you <strong>have spent</strong> the night?", "personal": "What is your primary survival strategy during a power outage or natural disruption?"},
            {"main": "If you <strong>had chosen</strong> a completely <strong>unpredictable</strong> career path years ago, where <strong>would</strong> you <strong>be living</strong> today?", "personal": "Have you ever made a major life decision that felt like a complete gamble?"},
            {"main": "If the manager <strong>had prohibited</strong> spontaneous <strong>laughter</strong> during the meeting, the atmosphere <strong>would have been</strong> insufferable.", "personal": "How important is humor and laughter in your professional life?"},
            {"main": "If a dense and highly energetic <strong>crowd</strong> <strong>had blocked</strong> your exit, how <strong>would</strong> you <strong>have managed</strong> your anxiety?", "personal": "Do you actively avoid crowded public events, or do you thrive in busy spaces?"},
            {"main": "If our ancestors <strong>had structured</strong> their societies without any hierarchical <strong>structure</strong>, how <strong>would</strong> we <strong>be living</strong> today?", "personal": "Do you believe humans are naturally cooperative or inherently competitive?"},
            {"main": "If you <strong>had observed</strong> systemic <strong>disorder</strong> in your organization last year, how <strong>would</strong> you <strong>have addressed</strong> the issue?", "personal": "Have you ever had to manage a project that was in complete disarray?"},
            {"main": "If the architect <strong>had not designed</strong> an <strong>orderly</strong> evacuation route, the panic <strong>would have been</strong> far worse.", "personal": "How often do you pay attention to emergency exits when entering a new building?"}
        ],
        "r2": [
            {"main": "If smart-grid engineers <strong>had anticipated</strong> the solar storm, the resulting communication <strong>chaos</strong> <strong>would have been avoided</strong> entirely.", "personal": "How dependent is your daily routine on a stable internet connection?"},
            {"main": "If humanity <strong>had not adopted</strong> standardized calendars, our schedules <strong>would still be</strong> completely <strong>unpredictable</strong> and chaotic today.", "personal": "Do you think we rely too heavily on precise timekeeping?"},
            {"main": "If urban planners <strong>had prioritised</strong> green corridors, modern megacities <strong>would be</strong> far more <strong>orderly</strong> than they currently are.", "personal": "Does your city's layout feel logical to you, or does it feel chaotic?"},
            {"main": "If security forces <strong>had not controlled</strong> the access points, the dense <strong>crowd</strong> <strong>would have caused</strong> major stampedes.", "personal": "What measures should event organizers take to ensure crowd safety?"},
            {"main": "If the public <strong>had known</strong> about the impending financial collapse, widespread <strong>pandemonium</strong> <strong>would have erupted</strong> weeks ago.", "personal": "Do you believe governments should withhold bad news to prevent panic?"},
            {"main": "If the slow-living movement <strong>had not gained</strong> traction, our work <strong>schedules</strong> <strong>would have become</strong> completely unmanageable by now.", "personal": "How do you actively protect your personal time from work demands?"},
            {"main": "If developers <strong>had built</strong> larger parks, the visual <strong>disorder</strong> of the city <strong>would have been mitigated</strong> significantly.", "personal": "How does the presence of green spaces affect your mental well-being?"},
            {"main": "If we <strong>had not established</strong> international regulations, global trade <strong>would lack</strong> the stable <strong>structure</strong> we take for granted today.", "personal": "What is the most important international agreement in your opinion?"},
            {"main": "If municipal authorities <strong>had ignored</strong> the initial protests, public <strong>chaos</strong> <strong>would have escalated</strong> into a full revolution.", "personal": "At what point does public protest cross the line into unacceptable disorder?"},
            {"main": "If we <strong>had shared</strong> a single global currency, the economic transition <strong>would have been</strong> much more <strong>orderly</strong>.", "personal": "Would a single global currency be beneficial or detrimental to less developed nations?"}
        ]
    }
}

def process_file(filename):
    filepath = f"events/sessions/lets-celebrate/{filename}"
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    data = DATABASE.get(filename)
    if not data:
        print(f"No database configuration for {filename}")
        return

    print(f"Processing: {filename} ({data['level']} - {data['focus']})")

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    soup = BeautifulSoup(content, "html.parser")

    # 1. Remove any existing grammar section if it was previously added (to avoid duplicates)
    existing_grammar = soup.find(id="grammar")
    if existing_grammar:
        existing_grammar.decompose()

    # 2. Build the new grammar section
    tasks_html_list = "".join(f"<li>{t}</li>\n" for t in data["tasks"])
    grammar_html = f"""<section id="grammar" style="margin-bottom: 2.5rem;">
<h2 class="section-title">⚡ Grammar Practice — {data['focus']}</h2>
<div class="celebrate-theme-box" style="border-color: #BA7517;">
<h3>⚡ Grammar Explanation ({data['level']})</h3>
<p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem; z-index: 2; position: relative;">
{data['explanation']}
</p>
<div class="grammar-practice-tasks" style="display: flex; flex-direction: column; gap: 1rem; z-index: 2; position: relative; margin-top: 1rem;">
<div class="grammar-task-item" style="background: rgba(186, 117, 23, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #BA7517; box-shadow: var(--shadow-sm);">
<strong style="display: block; margin-bottom: 0.5rem; color: #5c390b;">📝 Task 1 — Structure Application:</strong>
<ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--ink); line-height: 1.6;">
{tasks_html_list}</ul>
</div>
<div class="grammar-task-item" style="background: rgba(186, 117, 23, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #BA7517; box-shadow: var(--shadow-sm);">
<strong style="display: block; margin-bottom: 0.5rem; color: #5c390b;">🗣️ Task 2 — Interactive Speaking:</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.6;">
{data['speaking']}
</p>
</div>
</div>
</div>
</section>"""

    # Parse grammar HTML
    grammar_soup = BeautifulSoup(grammar_html, "html.parser")

    # 3. Insert grammar section right after vocabulary section
    vocab_section = soup.find(id="vocabulary")
    if vocab_section:
        vocab_section.insert_after(grammar_soup)
    else:
        print(f"Warning: vocabulary section not found in {filename}")

    # 4. Update Round 1 items
    r1_block = soup.find(class_="round-1")
    if r1_block:
        r1_items = r1_block.find_all(class_="round-item")
        if len(r1_items) == 10:
            for idx, item in enumerate(r1_items):
                main_div = item.find(class_="round-item-main")
                pers_div = item.find(class_="round-item-personal")
                if main_div and idx < len(data["r1"]):
                    main_div.clear()
                    main_div.append(BeautifulSoup(data["r1"][idx]["main"], "html.parser"))
                if pers_div and idx < len(data["r1"]):
                    pers_div.clear()
                    pers_div.append(BeautifulSoup("★ " + data["r1"][idx]["personal"], "html.parser"))
        else:
            print(f"Warning: {filename} has {len(r1_items)} Round 1 items (expected 10)")
    else:
        print(f"Warning: round-1 block not found in {filename}")

    # 5. Update Round 2 items
    r2_block = soup.find(class_="round-2")
    if r2_block:
        r2_items = r2_block.find_all(class_="round-item")
        if len(r2_items) == 10:
            for idx, item in enumerate(r2_items):
                main_div = item.find(class_="round-item-main")
                pers_div = item.find(class_="round-item-personal")
                if main_div and idx < len(data["r2"]):
                    main_div.clear()
                    main_div.append(BeautifulSoup(data["r2"][idx]["main"], "html.parser"))
                if pers_div and idx < len(data["r2"]):
                    pers_div.clear()
                    pers_div.append(BeautifulSoup("★ " + data["r2"][idx]["personal"], "html.parser"))
        else:
            print(f"Warning: {filename} has {len(r2_items)} Round 2 items (expected 10)")
    else:
        print(f"Warning: round-2 block not found in {filename}")

    # 6. Re-save modified content
    with open(filepath, "w", encoding="utf-8") as f:
        # Avoid BeautifulSoup adding redundant wrappers
        f.write("<!DOCTYPE html>\n" + str(soup).replace("<!DOCTYPE html>\n", "").replace("<!DOCTYPE html>", ""))

    print(f"Successfully enriched: {filename}")


if __name__ == "__main__":
    for fname in DATABASE.keys():
        process_file(fname)
