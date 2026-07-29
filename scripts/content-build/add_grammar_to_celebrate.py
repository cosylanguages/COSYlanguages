import os
import re
import random
from bs4 import BeautifulSoup

DATABASE = {
    "national-simplicity-day.html": {
        "level": "Beginner (A1)",
        "focus": "Simple Present Structure",
        "explanation": "The <strong>Simple Present Structure</strong> is used to talk about regular habits, routines, and permanent facts.",
        "rule_part_a_html": "Complete the rule: For general habits or routines, we use the Simple Present. For third-person singular (he/she/it), we add <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"-s/-es\">_____</span> to the base verb. We use the auxiliary verb <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"do\">_____</span> or <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"does\">_____</span> for questions and negatives.",
        "tasks": [
            "She <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"tidies\">_____</span> her room every Saturday morning.",
            "They <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"do not like\">_____</span> busy city noise.",
            "Do you <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"spend\">_____</span> time in nature often?",
            "He <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"has\">_____</span> a very simple daily routine.",
            "My neighborhood <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"is\">_____</span> exceptionally peaceful and quiet."
        ],
        "chips": ["-s/-es", "do", "does", "tidies", "do not like", "spend", "has", "is"],
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
        "explanation": "Modal verbs of obligation (<strong>must</strong>, <strong>have to</strong>, <strong>should</strong>) express rules, necessity, and advice.",
        "rule_part_a_html": "Complete the rule: To express a strong duty, we use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"must\">_____</span> or <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"have to\">_____</span>. For soft recommendations or advice, we use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"should\">_____</span>.",
        "rule_answers": "must, have to, should",
        "tasks": [
            "You look exhausted; you <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"should take\">_____</span> a holiday.",
            "Employees <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"must finish\">_____</span> their daily tasks before leaving.",
            "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"must not work\">_____</span> on Sundays; it is a strict company rule.",
            "She <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"has to arrive\">_____</span> at the office by 9:00 AM every day.",
            "You <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"should not stress\">_____</span> too much about this small issue."
        ],
        "chips": ["must", "have to", "should", "should take", "must finish", "must not work", "has to arrive", "should not stress"],
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
        "explanation": "Use <strong>Simple Present</strong> for general facts, matching the singular or plural forms of the nouns.",
        "rule_part_a_html": "Complete the rule: Plural nouns usually end with <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"-s\">_____</span>. When the subject is singular (e.g., 'a bee'), the verb takes <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"-s/-es\">_____</span>. When the subject is plural (e.g., 'bees'), we use the <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"base\">_____</span> verb.",
        "rule_answers": "-s, -s/-es, base",
        "tasks": [
            "A beekeeper <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"helps\">_____</span> the bees in the garden.",
            "Many beautiful <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"flowers\">_____</span> grow near my house.",
            "Bees <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"make\">_____</span> sweet honey.",
            "This small insect <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"flies\">_____</span> very fast.",
            "Two green <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"trees\">_____</span> stand in front of my window."
        ],
        "chips": ["-s", "-s/-es", "base", "helps", "flowers", "make", "flies", "trees"],
        "speaking": "Look around your room. Name 3 singular objects (e.g., 'a chair') and 3 plural objects (e.g., 'books') and describe what they are or do.",
        "r1": [
            {"main": "How <strong>does</strong> a little yellow <strong>bee</strong> find sweet <strong>flowers</strong> in a big city?", "personal": "Do you see busy bees flying near your house?"},
            {"main": "Why <strong>do</strong> bees make <strong>honey</strong>, and how <strong>does</strong> it taste?", "personal": "Do you like to eat sweet honey on your bread?"},
            {"main": "<strong>Does</strong> an urban <strong>garden</strong> have many plants, and who <strong>helps</strong> water them?", "personal": "Is there a beautiful park or garden near your home?"},
            {"main": "Why <strong>does</strong> a colorful <strong>flower</strong> grow best when it has water and sunlight?", "personal": "Do you have a favorite flower?"},
            {"main": "How <strong>does</strong> a big green <strong>tree</strong> help clean the air in our crowded streets?", "personal": "Are there many tall trees in your neighborhood?"},
            {"main": "<strong>Do</strong> you want to <strong>help</strong> local beekeepers protect wild hives?", "personal": "Do you help your friends keep their balconies clean?"},
            {"main": "What <strong>makes</strong> fresh, natural honey so incredibly <strong>sweet</strong>?", "personal": "Do you prefer sweet fruit or sugary candies?"},
            {"main": "How <strong>does</strong> a modern <strong>city</strong> change when citizens grow plants on every balcony?", "personal": "Do you live in a big city or a small village?"},
            {"main": "<strong>Does</strong> a quiet green <strong>house</strong> feel more relaxed than a noisy city apartment?", "personal": "Do you live in a multi-story house or a single-floor flat?"},
            {"main": "Why <strong>do</strong> some people feel afraid when a small <strong>insect</strong> flies near their face?", "personal": "What is your favorite small insect in nature?"}
        ],
        "r2": [
            {"main": "In the future, every <strong>house</strong> in the city <strong>has</strong> a small green roof with flowers to attract bees.", "personal": "Do you want to have a colorful flower garden on the roof of your <strong>house</strong>?"},
            {"main": "People <strong>do</strong> not buy sugar, they only <strong>use</strong> <strong>sweet</strong> honey as a healthy alternative.", "personal": "Do you prefer to use <strong>sweet</strong> honey or white sugar in your warm tea?"},
            {"main": "Every school <strong>has</strong> a beautiful <strong>garden</strong> with fruit trees to teach kids about pollination.", "personal": "Do you want to help water plants in a school <strong>garden</strong>?"},
            {"main": "Robots <strong>protect</strong> every green <strong>tree</strong> in the urban forest from destruction.", "personal": "Do you like to sit under a big green <strong>tree</strong> to read a book?"},
            {"main": "Children <strong>learn</strong> about every <strong>insect</strong> from real observation, not from computer screens.", "personal": "Do you prefer to look at a small <strong>insect</strong> in nature or in a video game?"},
            {"main": "Cars <strong>do</strong> not enter the <strong>city</strong> center, making the streets safe for local bee colonies.", "personal": "Do you like to ride an electric bike or walk in your <strong>city</strong>?"},
            {"main": "All citizens <strong>learn</strong> how to <strong>help</strong> keep local parks clean and green.", "personal": "Do you like to <strong>help</strong> street animals in your area?"},
            {"main": "Every urban balcony <strong>has</strong> a red <strong>flower</strong> to create a massive corridor for bees.", "personal": "Do you have a colorful <strong>flower</strong> at home?"},
            {"main": "Beekeepers <strong>build</strong> warm wooden hotels for every little <strong>bee</strong> to survive the winter.", "personal": "Do you want to help build a small house for a <strong>bee</strong>?"},
            {"main": "People <strong>live</strong> in harmony with nature and <strong>make</strong> delicious, organic <strong>honey</strong> in their backyards.", "personal": "Would you like to collect fresh <strong>honey</strong> with a beekeeper?"}
        ]
    },
    "urban-beekeeping-day-elementary.html": {
        "level": "Elementary (A2)",
        "focus": "Adverbs of Frequency & Prepositions of Place",
        "explanation": "<strong>Adverbs of frequency</strong> describe how often we do things, and <strong>prepositions of place</strong> show where things are.",
        "rule_part_a_html": "Complete the rule: Adverbs of frequency go <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"before\">_____</span> the main verb, but <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"after\">_____</span> the verb 'to be'. Prepositions of place show <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"where\">_____</span> something is located.",
        "rule_answers": "before, after, where",
        "tasks": [
            "Bees are <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"often\">_____</span> found <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"in\">_____</span> beautiful gardens.",
            "He <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"never\">_____</span> puts honey <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"on\">_____</span> his warm toast.",
            "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"sometimes\">_____</span> sit <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"under\">_____</span> the big green tree.",
            "The beekeeper <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"always\">_____</span> works <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"at\">_____</span> the hive.",
            "There is a sweet flower <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"next to\">_____</span> the wooden box."
        ],
        "chips": ["before", "after", "where", "often", "in", "never", "on", "sometimes", "under", "always", "at", "next to"],
        "speaking": "Describe where you usually keep honey and plants in your home using frequency adverbs and prepositions of place (e.g., 'I always keep flowers on the table').",
        "r1": [
            {"main": "How <strong>usually</strong> do you find green parks in your crowded <strong>urban</strong> area, and what plants grow there?", "personal": "Do you prefer living in highly <strong>urban</strong> cities or quiet, rural villages?"},
            {"main": "Why can we <strong>always</strong> <strong>protect</strong> bees from city pollution by planting flowers on balconies?", "personal": "Do you buy organic products to <strong>protect</strong> the local environment?"},
            {"main": "Why does a beekeeper <strong>sometimes</strong> place a wooden <strong>hive</strong> on a tall building roof?", "personal": "Have you ever stood near a real <strong>hive</strong> with active bees?"},
            {"main": "How does city traffic noise <strong>usually</strong> affect the delicate natural <strong>environment</strong>?", "personal": "Do you try to save water to help protect our <strong>environment</strong>?"},
            {"main": "How can a local <strong>community</strong> <strong>often</strong> build a green garden together in their neighborhood?", "personal": "Are you active in your local neighborhood <strong>community</strong>?"},
            {"main": "Why do we <strong>sometimes</strong> find beautiful, <strong>wild</strong> flowers growing between concrete blocks?", "personal": "When was the last time you walked in a <strong>wild</strong>, untouched forest?"},
            {"main": "What tools does a modern <strong>beekeeper</strong> <strong>always</strong> use when working in the apiary?", "personal": "Would you like to try the work of a <strong>beekeeper</strong> for one day?"},
            {"main": "Is growing green plants on windowsills <strong>usually</strong> a relaxing <strong>hobby</strong> for city residents?", "personal": "What is your favorite outdoor <strong>hobby</strong>?"},
            {"main": "Why do people <strong>sometimes</strong> keep a delicate <strong>plant</strong> on their busy office desk?", "personal": "Do you prefer green houseplants or colorful flowers in your room?"},
            {"main": "Why are insects like honey bees <strong>always</strong> incredibly <strong>useful</strong> for our city's food supply?", "personal": "What is the most <strong>useful</strong> tips you have learned about saving energy?"}
        ],
        "r2": [
            {"main": "In the future, every <strong>urban</strong> school will <strong>always</strong> have a honey <strong>hive</strong> on its roof.", "personal": "Would you support having a bee <strong>hive</strong> at your local school?"},
            {"main": "Governments will <strong>sometimes</strong> pay citizens to <strong>protect</strong> rare <strong>wild</strong> flowers on balconies.", "personal": "Would you grow more flowers if the government paid you to <strong>protect</strong> them?"},
            {"main": "Humans will <strong>never</strong> destroy the natural <strong>environment</strong> completely to live in underground cities.", "personal": "Would you want to live in a clean virtual city if the real <strong>environment</strong> became too polluted?"},
            {"main": "Every local <strong>community</strong> will <strong>usually</strong> grow its own organic food in vertical gardens.", "personal": "Do you think vertical gardens are a <strong>useful</strong> way to grow food in cities?"},
            {"main": "Being a <strong>beekeeper</strong> will <strong>often</strong> become the most fashionable outdoor <strong>hobby</strong> for young adults.", "personal": "Would you tell your friends if your new <strong>hobby</strong> was keeping bees?"},
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
        "explanation": "Use <strong>Past Simple</strong>, <strong>Past Continuous</strong>, and <strong>Past Perfect</strong> to tell historical or personal past stories.",
        "rule_part_a_html": "Complete the rule: Use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Past Simple\">_____</span> for completed past actions, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Past Continuous\">_____</span> for background actions in progress, and <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Past Perfect\">_____</span> for actions that occurred before another past action.",
        "rule_answers": "Past Simple, Past Continuous, Past Perfect",
        "tasks": [
            "While she <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"was decorating\">_____</span> the floor with rangoli, guests arrived.",
            "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had already cleansed\">_____</span> the entire house before the festival started.",
            "Last year, they <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"celebrated\">_____</span> Diwali with a grand feast.",
            "When we arrived, they <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were lighting\">_____</span> dozens of colorful diyas.",
            "My grandfather <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"told\">_____</span> us many myths that he had learned in his youth."
        ],
        "chips": ["Past Simple", "Past Continuous", "Past Perfect", "was decorating", "had already cleansed", "celebrated", "were lighting", "told"],
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
        "explanation": "To express support and subjunctive wishes, use <strong>I wish + Past Simple / would</strong> or <strong>It is crucial / essential that + Subject + base verb</strong>.",
        "rule_part_a_html": "Complete the rule: To express hypothetical wishes for others' welfare, use <strong>I wish + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Past Simple\">_____</span></strong>. For urgent importance, use <strong>It is crucial/essential that + Subject + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"base verb\">_____</span></strong>.",
        "rule_answers": "Past Simple, base verb",
        "tasks": [
            "It is essential that the migrant worker <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"receive\">_____</span> fair treatment.",
            "I wish my family <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"lived\">_____</span> closer so we could celebrate together.",
            "We hope that this financial support <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"helps\">_____</span> them open a new business.",
            "It is crucial that he <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"transfer\">_____</span> the household income today.",
            "I wish the transaction fees <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were\">_____</span> much lower."
        ],
        "chips": ["Past Simple", "base verb", "receive", "lived", "helps", "transfer", "were"],
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
        "explanation": "To make speculative future predictions, we use modal verbs like <strong>will</strong>, <strong>may</strong>, <strong>might</strong>, or the phrase <strong>is/are likely to</strong>.",
        "rule_part_a_html": "Complete the rule: To express absolute future certainty, we use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"will\">_____</span>. For less certain predictions or speculations, we use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"may\">_____</span> or <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"might\">_____</span>.",
        "rule_answers": "will, may, might",
        "tasks": [
            "Scientists <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"will probably discover\">_____</span> a new asteroid next year.",
            "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"might not colonize\">_____</span> Mars in this century, but it is possible.",
            "Space tourism <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"is\">_____</span> likely to become cheaper soon.",
            "A major collision <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"might cause\">_____</span> global climate changes.",
            "Astronomers <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"will detect\">_____</span> small objects using the new telescope."
        ],
        "chips": ["will", "may", "might", "will probably discover", "might not colonize", "is", "might cause", "will detect"],
        "speaking": "Share 2 speculative predictions about what space exploration and planet protection will look like in 50 years using 'might' and 'will'.",
        "r1": [
            {"main": "What high-tech methods <strong>will</strong> emergency astronomers use to locate a rogue <strong>asteroid</strong> before it gets too close?", "personal": "Do you regularly read news about astronomical breakthroughs and space updates?"},
            {"main": "How <strong>might</strong> a sudden, massive asteroid <strong>impact</strong> challenge our current planetary defense protocols?", "personal": "Have you ever experienced or observed a meteor shower or a shooting star?"},
            {"main": "Why <strong>is</strong> an unmonitored space rock <strong>likely to</strong> be viewed as a major existential <strong>threat</strong> by governments?", "personal": "Do you believe humanity is capable of acting collectively during a sudden planetary crisis?"},
            {"main": "What precise sensory equipment <strong>will</strong> engineers use to <strong>detect</strong> small, dark objects in outer space?", "personal": "Would you enjoy having a high-powered telescope on your home roof?"},
            {"main": "Why <strong>might</strong> a planetary defense system struggle to alter a rock's <strong>orbit</strong> if warning times are too short?", "personal": "How do you feel when you contemplate the immense scale of the cosmos?"},
            {"main": "How <strong>will</strong> building defensive stations in deep <strong>space</strong> change our approach to protecting Earth?", "personal": "Would you purchase a ticket for a suborbital space flight if it were affordable?"},
            {"main": "What ecological strategies <strong>will</strong> we deploy to <strong>protect</strong> our atmosphere from industrial debris?", "personal": "Do you participate in localized environmental cleanup or preservation efforts?"},
            {"main": "How <strong>can</strong> international defense networks <strong>predict</strong> exact collision trajectories years in advance?", "personal": "How frequently do you consult meteorological reports or weather alerts on your phone?"},
            {"main": "What critical duties <strong>will</strong> a planetary defense <strong>scientist</strong> manage during a high-stakes simulation?", "personal": "Do you think working as a deep-space scientist would be thrilling or stressful?"},
            {"main": "What international protocols <strong>are likely to</strong> make citizens feel completely <strong>safe</strong> during a global alarm?", "personal": "How safe and secure do you feel in your local urban environment?"}
        ],
        "r2": [
            {"main": "In the future, a private corporate monopoly <strong>will</strong> claim ownership of every valuable <strong>asteroid</strong> in orbit.", "personal": "Would you support strict international laws banning the privatization of space resources?"},
            {"main": "We <strong>might</strong> build a giant laser deflection shield in <strong>space</strong> to vaporize minor objects before they breach the atmosphere.", "personal": "Do you believe nations will prioritize planetary shields over military budgets?"},
            {"main": "Every country <strong>will</strong> establish its own dedicated <strong>scientist</strong> division to collaborate on planetary defense.", "personal": "Should a space scientist have a mandatory seat on national security councils?"},
            {"main": "A sudden orbital <strong>threat</strong> <strong>is likely to</strong> force competing superpower nations to completely merge their space programs.", "personal": "Does it take an external threat like an asteroid to make humanity unite?"},
            {"main": "Supercomputers <strong>will</strong> calculate space debris trajectories so accurately they can <strong>predict</strong> impacts down to the second.", "personal": "Would you prefer to know the exact date of a potential global impact, or is ignorance bliss?"},
            {"main": "We <strong>may</strong> use heavy kinetic impactor rockets to safely shift the <strong>orbit</strong> of any hazardous cosmic bodies.", "personal": "Do you think humanity has the right to alter the orbits of natural celestial objects?"},
            {"main": "Future cities <strong>might</strong> construct massive subterranean shelters to keep the population completely <strong>safe</strong>.", "personal": "Could you happily adapt to living in a high-tech underground city with artificial light?"},
            {"main": "Advanced satellite arrays <strong>will</strong> monitor the solar system to immediately <strong>detect</strong> chemical anomalies in approaching rocks.", "personal": "Do you think space exploration funding is more important than solving local poverty?"},
            {"main": "A major asteroid <strong>impact</strong> <strong>is likely to</strong> erase all online data servers, forcing a return to physical archives.", "personal": "How would you preserve your family's personal memories if all digital systems collapsed?"},
            {"main": "We <strong>will</strong> eventually construct self-sustaining orbital colonies to <strong>protect</strong> our species from planetary disasters.", "personal": "Would you volunteer to be an early settler in a hazardous space colony?"}
        ]
    },
    "international-asteroid-day-upper-intermediate.html": {
        "level": "Upper-Intermediate (B2)",
        "focus": "Speculative Future Predictions",
        "explanation": "For advanced future speculation, use <strong>Future Continuous</strong> (<em>will be + verb-ing</em>) and <strong>Future Perfect</strong> (<em>will have + past participle</em>).",
        "rule_part_a_html": "Complete the rule: To describe an action in progress in the future, use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Future Continuous\">_____</span>. To describe an action completed by a specific future point, use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Future Perfect\">_____</span>.",
        "rule_answers": "Future Continuous, Future Perfect",
        "tasks": [
            "By 2050, scientists <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"will have established\">_____</span> a permanent lunar observatory.",
            "This time next year, astronauts <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"will be training\">_____</span> for the deep-space mission.",
            "Space agencies <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"may\">_____</span> well have diverted the asteroid by the end of the decade.",
            "By the turn of the next century, humans <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"will have explored\">_____</span> far beyond Mars.",
            "Scientists <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"will be monitoring\">_____</span> solar storms continuously over the next few years."
        ],
        "chips": ["Future Continuous", "Future Perfect", "will have established", "will be training", "may", "will have explored", "will be monitoring"],
        "speaking": "What major astronomical or defensive milestone will humanity have achieved by 2080? Explain what scientists will be working on then.",
        "r1": [
            {"main": "What early warning telemetry <strong>will</strong> astronomers <strong>have identified</strong> before a hazardous <strong>asteroid</strong> enters our collision course?", "personal": "Are you generally optimistic about humanity's long-term survival against celestial hazards?"},
            {"main": "How <strong>will</strong> global defense coalitions <strong>be mitigating</strong> the potential <strong>impact</strong> of a meteor during the upcoming years?", "personal": "What is the most scientifically accurate space film you have ever watched?"},
            {"main": "By the end of this century, <strong>will</strong> international space forces <strong>have neutralized</strong> every potential orbital <strong>threat</strong>?", "personal": "Do you believe national governments allocate enough financial resources to planetary defense?"},
            {"main": "What advanced quantum arrays <strong>will</strong> monitoring satellites <strong>be using</strong> to <strong>detect</strong> dark, non-reflective bodies?", "personal": "Would you enjoy a career that requires analyzing complex space data all night?"},
            {"main": "How <strong>will</strong> scientists <strong>have altered</strong> the <strong>orbit</strong> of key near-Earth objects by the year 2050?", "personal": "Does learning about the scale of the universe make daily human conflicts feel trivial?"},
            {"main": "By 2060, <strong>will</strong> astronauts <strong>have constructed</strong> emergency survival <strong>spaces</strong> inside hollowed-out lunar craters?", "personal": "Would you volunteer for a one-way mission to establish a scientific colony on another planet?"},
            {"main": "What atmospheric shields <strong>will</strong> environmental teams <strong>be implementing</strong> to <strong>protect</strong> our biosphere from dust?", "personal": "Do you think individual conservation actions are enough, or do we need massive systemic pivots?"},
            {"main": "How <strong>will</strong> orbital computers <strong>have perfected</strong> their models to <strong>predict</strong> solar winds and magnetic disruptions?", "personal": "Are you concerned that solar storms might permanently disrupt global communication networks?"},
            {"main": "What predictive algorithms <strong>will</strong> a leading space <strong>scientist</strong> <strong>be running</strong> when the drill begins tomorrow?", "personal": "Which scientific field do you believe will experience the most exponential growth in the next few decades?"},
            {"main": "How <strong>will</strong> municipal leaders <strong>have guaranteed</strong> a completely <strong>safe</strong> refuge network for urban residents by 2045?", "personal": "What does a truly resilient and 'safe' smart city look like to you?"}
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
        "explanation": "Phrasal verbs of connection describe how we relate to, communicate with, and unite with others.",
        "rule_part_a_html": "Complete the rule: Phrasal verbs consist of a <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"verb\">_____</span> + a particle. For connections, 'to bring people together' means to <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"unite\">_____</span>, and 'to bond with someone' means to <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"form a relationship\">_____</span>.",
        "rule_answers": "verb, unite, form a relationship",
        "tasks": [
            "Festivals are wonderful because they bring people <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"together\">_____</span>.",
            "It is easy to bond <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"with\">_____</span> others over a delicious traditional meal.",
            "We should reach <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"out\">_____</span> to lonely neighbors during major holidays.",
            "How well do you get <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"along\">_____</span> with your neighbors?",
            "Art helps us connect <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"with\">_____</span> diverse communities."
        ],
        "chips": ["verb", "unite", "form a relationship", "together", "with", "out", "along", "with"],
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
        "explanation": "Use advanced phrasal verbs and prepositional collocations to discuss connection and social unity.",
        "rule_part_a_html": "Complete the rule: To connect across differences is to <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"bridge\">_____</span> the gap. To defend or support someone is to <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"stand\">_____</span> up for them. To become receptive or reveal feelings is to <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"open\">_____</span> up.",
        "rule_answers": "bridge, stand, open",
        "tasks": [
            "Cultural exchange programs help bridge the <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"gap\">_____</span> between divided nations.",
            "It takes courage for individuals to open <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"up\">_____</span> to unfamiliar perspectives.",
            "We must stand <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"up\">_____</span> for marginalized groups to ensure social justice.",
            "Global communities need to reach <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"out\">_____</span> to international partners.",
            "Shared artistic celebrations help colleagues bond <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"with\">_____</span> each other."
        ],
        "chips": ["bridge", "stand", "open", "gap", "up", "up", "out", "with"],
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
        "explanation": "Zodiac traits and traditions require specific prepositional collocations.",
        "rule_part_a_html": "Complete the rule: When describing traits, use the prepositions: associated <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"with\">_____</span>, rely <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"on\">_____</span>, famous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"for\">_____</span>, and celebrated <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"in\">_____</span> a specific month.",
        "rule_answers": "with, on, for, in",
        "tasks": [
            "The Tiger is closely associated <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"with\">_____</span> bravery and strength.",
            "Families heavily rely <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"on\">_____</span> traditional reunions to maintain their bonds.",
            "Lunar New Year is celebrated <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"in\">_____</span> late January or early February.",
            "This ancient festival is famous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"for\">_____</span> its vibrant dragon dances.",
            "Red envelopes symbolize a positive shift <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"in\">_____</span> fortune."
        ],
        "chips": ["with", "on", "for", "in", "with", "on", "in", "for", "in"],
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
        "explanation": "Define people and things using relative pronouns (<em>who, which, that</em>) and clarify purpose using <em>to + verb</em>.",
        "rule_part_a_html": "Complete the rule: We use relative pronouns like <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"who\">_____</span> for people, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"which\">_____</span> for things, and <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"where\">_____</span> for places. To explain the purpose of an action, we use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"to\">_____</span> + verb.",
        "rule_answers": "who, which, where, to",
        "tasks": [
            "She is a person <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"who\">_____</span> always helps others when they are in trouble.",
            "I went to the florist <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"to buy\">_____</span> some fresh flowers for my mother.",
            "This is the park <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"where\">_____</span> we first met on a sunny afternoon.",
            "Gratitude is a habit <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"to keep\">_____</span> our minds positive and healthy.",
            "He wrote a heartfelt card <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"to say\">_____</span> thank you to his mentor."
        ],
        "chips": ["who", "which", "where", "to", "who", "to buy", "where", "to keep", "to say"],
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
        "explanation": "Differentiate between defining and non-defining clauses and use advanced purpose constructions.",
        "rule_part_a_html": "Complete the rule: In formal contexts, use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"whose\">_____</span> as a relative pronoun for ownership, and <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"whom\">_____</span> for people as objects. For advanced purpose, use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"in\">_____</span> order to or <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"so\">_____</span> as to.",
        "rule_answers": "whose, whom, in, so",
        "tasks": [
            "My mentor, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"who\">_____</span> lives in Canada, sent me a lovely appreciation card.",
            "We organized a surprise celebration in order <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"to show\">_____</span> our deep respect.",
            "This is the colleague, the efforts of <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"whom\">_____</span> saved our project from failure.",
            "He designed a personalized gift so <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"as\">_____</span> to honor her milestone.",
            "We must cherish those mentors upon <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"whom\">_____</span> we rely for wisdom."
        ],
        "chips": ["whose", "whom", "in", "so", "who", "to show", "whom", "as", "whom"],
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
        "explanation": "The Second Conditional is used to talk about speculative, highly unlikely, or imaginary situations.",
        "rule_part_a_html": "Complete the rule: In the Second Conditional, the if-clause uses the <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Past Simple\">_____</span> tense, and the main clause uses <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would\">_____</span> + base verb.",
        "rule_answers": "Past Simple, would",
        "tasks": [
            "If there <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were\">_____</span> no rules, society would be in total chaos.",
            "I <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would join\">_____</span> the public flash mob if I had more free time.",
            "If you had to choose between absolute silence and total noise, which <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would\">_____</span> you prefer?",
            "If your home <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"fell\">_____</span> into chaos, what would you do first?",
            "If you could live a completely unpredictable life, where <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would\">_____</span> you go?"
        ],
        "chips": ["Past Simple", "would", "were", "would join", "would", "fell", "would"],
        "speaking": "If you could create a brand-new national holiday to celebrate something chaotic, what would it be and how would people celebrate it?",
        "r1": [
            {"main": "If you woke up tomorrow and found your city in complete <strong>chaos</strong> because all rules had disappeared, what <strong>would</strong> you do first?", "personal": "Do you find a little <strong>chaos</strong> in your daily life fun or stressful? When does it become too much?"},
            {"main": "If your daily life became 100% <strong>predictable</strong> and every single hour was planned, how long <strong>would</strong> you survive before going crazy?", "personal": "What is the most <strong>surprising</strong> thing that has happened to you recently?"},
            {"main": "If you <strong>could</strong> make one completely <strong>spontaneous</strong> decision right now without worrying about money or time, what <strong>would</strong> it be?", "personal": "Are you usually a <strong>spontaneous</strong> traveler or a detailed planner?"},
            {"main": "If you <strong>designed</strong> the world's most <strong>energetic</strong> festival to celebrate Pandemonium Day, what wild activities <strong>would</strong> you include?", "personal": "How do you feel when you are in a very loud, <strong>energetic</strong> crowd?"},
            {"main": "If a friend asked you to break your morning <strong>routine</strong> for one day to do something completely crazy, <strong>would</strong> you agree?", "personal": "What is the most boring part of your daily <strong>routine</strong>?"},
            {"main": "If you <strong>received</strong> a mysterious letter in a language you don't speak, <strong>would</strong> you feel absolute <strong>confusion</strong> or excitement?", "personal": "How do you usually handle moments of <strong>confusion</strong> in your workplace?"},
            {"main": "If you woke up to find everyone in your office had swapped jobs without warning, <strong>would</strong> you find it <strong>thrilling</strong> or terrifying?", "personal": "What is the most <strong>thrilling</strong> adventure you have ever had?"},
            {"main": "If we removed all strict <strong>organization</strong> from public transport for a day, how <strong>would</strong> people get to work?", "personal": "Is your desk currently a model of perfect <strong>organization</strong>, or is it a bit of a mess?"},
            {"main": "If you had to choose between living in a perfectly clean but boring room and a <strong>messy</strong> room full of art, which <strong>would</strong> you pick?", "personal": "Does a <strong>messy</strong> kitchen make you angry or relaxed?"},
            {"main": "If an <strong>unexpected</strong> guest knocked on your door at midnight to celebrate Pandemonium Day, how <strong>would</strong> you welcome them?", "personal": "Do you enjoy <strong>unexpected</strong> changes to your weekend plans?"}
        ],
        "r2": [
            {"main": "If every office celebrated Pandemonium Day once a year, employees <strong>would</strong> embrace healthy <strong>chaos</strong> and become much more creative.", "personal": "If you <strong>could</strong> declare one day of absolute <strong>chaos</strong> at your work, what rule <strong>would</strong> you eliminate first?"},
            {"main": "If modern cities became completely <strong>predictable</strong> and sterile, citizens <strong>would</strong> intentionally break harmless rules to feel alive.", "personal": "If you woke up tomorrow and realized your day was 100% <strong>predictable</strong>, how <strong>would</strong> you feel?"},
            {"main": "If schools replaced strict grades with <strong>spontaneous</strong> play, children <strong>would</strong> grow up to be much more confident and happy.", "personal": "If you <strong>could</strong> make a <strong>spontaneous</strong> career change today, what profession <strong>would</strong> you choose?"},
            {"main": "If communities built giant, chaotic playgrounds for adults, neighborhoods <strong>would</strong> feel much more <strong>energetic</strong> and united.", "personal": "If you <strong>were</strong> invited to a wild, <strong>energetic</strong> street parade, <strong>would</strong> you join in?"},
            {"main": "If families spent one day a week without making any plans, breaking every <strong>routine</strong>, they <strong>would</strong> enjoy each other's company more.", "personal": "If you <strong>could</strong> break one daily <strong>routine</strong> permanently, which one <strong>would</strong> it be?"},
            {"main": "If a sudden computer glitch changed everyone's job titles for a day, the initial <strong>confusion</strong> <strong>would</strong> lead to hilarious memories.", "personal": "If your boss got your name and title wrong in a major meeting, how <strong>would</strong> you clear up the <strong>confusion</strong>?"},
            {"main": "If restaurants let customers invent the menu on the spot, dining out <strong>would</strong> become a <strong>thrilling</strong>, unpredictable experience.", "personal": "If you <strong>could</strong> have one <strong>thrilling</strong>, unplanned dish right now, what <strong>would</strong> you want to eat?"},
            {"main": "If society completely abandoned strict <strong>organization</strong> for a week, we <strong>would</strong> discover that humans are naturally cooperative.", "personal": "If you had to run a massive event without any pre-planned <strong>organization</strong>, how <strong>would</strong> you start?"},
            {"main": "If everyone intentionally kept a <strong>messy</strong>, unstructured desk, productivity <strong>would</strong> actually increase due to high creative flow.", "personal": "If someone complained that your workspace was too <strong>messy</strong>, how <strong>would</strong> you defend yourself?"},
            {"main": "If we embraced <strong>unexpected</strong> changes of plans as blessings, daily stress levels in modern cities <strong>would</strong> drop to zero.", "personal": "If you <strong>could</strong> design an <strong>unexpected</strong> surprise party for a close friend, what theme <strong>would</strong> you choose?"}
        ]
    },
    "pandemonium-day-upper-intermediate.html": {
        "level": "Upper-Intermediate (B2)",
        "focus": "Speculative Conditional Clauses",
        "explanation": "Master the Third Conditional and Mixed Conditionals to speculate about hypothetical past events and present situations.",
        "rule_part_a_html": "Complete the rule: In the Third Conditional, the if-clause uses the <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Past Perfect\">_____</span> tense, and the main clause uses <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would have\">_____</span> + past participle.",
        "rule_answers": "Past Perfect, would have",
        "tasks": [
            "If they <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had planned\">_____</span> the event better, there wouldn't be so much chaos now.",
            "If I had not attended the festival, I <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would not have met\">_____</span> my best friend.",
            "If the government <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had not intervened\">_____</span> yesterday, pandemonium would still be ongoing.",
            "If security forces had not controlled the access points, the crowd <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would have caused\">_____</span> stampedes.",
            "If you <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had been\">_____</span> there, would you have been afraid?"
        ],
        "chips": ["Past Perfect", "would have", "had planned", "would not have met", "had not intervened", "would have caused", "had been"],
        "speaking": "Reflect on a chaotic or highly unpredictable event in your past. How would your life or current situation be different today if that event had never occurred?",
        "r1": [
            {"main": "If you had been invited to the very first celebration of Pandemonium Day, how <strong>would</strong> you <strong>have defined</strong> the wild <strong>pandemonium</strong>?", "personal": "Do you think absolute <strong>pandemonium</strong> in public can ever be a positive force?"},
            {"main": "If our ancestors had lived in absolute <strong>chaos</strong> without any social <strong>order</strong>, how <strong>would</strong> modern civilization have developed differently?", "personal": "Have you ever had to restore absolute <strong>order</strong> in a situation that had devolved into total <strong>chaos</strong>?"},
            {"main": "If you had made a completely <strong>spontaneous</strong> decision to drop everything and travel last year, how <strong>would</strong> your life be different today?", "personal": "What is the most successful <strong>spontaneous</strong> purchase or choice you have ever made?"},
            {"main": "If the weather during your most memorable holiday had been completely <strong>unpredictable</strong>, how <strong>would</strong> you <strong>have salvaged</strong> the trip?", "personal": "Do you find dealing with highly <strong>unpredictable</strong> people exhausting or exciting?"},
            {"main": "If the library in your town had allowed complete <strong>disorder</strong> in its book archives, how <strong>would</strong> researchers have found any information?", "personal": "How do you react when you enter a room that is in a state of absolute <strong>disorder</strong>?"},
            {"main": "If highly organized planners and wild creatives had not experienced some professional <strong>friction</strong>, <strong>would</strong> the project have been as unique?", "personal": "How have you successfully resolved interpersonal <strong>friction</strong> during a group project?"},
            {"main": "If you had introduced a bit of playful <strong>spontaneity</strong> into your university studies, how <strong>would</strong> your academic experience have changed?", "personal": "Do you think modern society values efficiency too much at the expense of <strong>spontaneity</strong>?"},
            {"main": "If you had participated in a massive, unplanned street dance, <strong>would</strong> you <strong>have found</strong> the experience <strong>exhilarating</strong> or overwhelming?", "personal": "What is the most <strong>exhilarating</strong> physical activity you have ever tried?"},
            {"main": "If your school had completely lacked any rigid academic <strong>structure</strong>, how <strong>would</strong> you <strong>have managed</strong> your own learning progress?", "personal": "Do you prefer a manager who provides a clear <strong>structure</strong> or one who gives you total creative freedom?"},
            {"main": "If your schedule had not been so incredibly <strong>hectic</strong> last month, what creative hobbies <strong>would</strong> you <strong>have pursued</strong> instead?", "personal": "How do you protect your mental peace when your professional routine becomes too <strong>hectic</strong>?"}
        ],
        "r2": [
            {"main": "If municipal authorities had banned all festive street parades last year, the city's spirit would now be dead, avoiding positive <strong>pandemonium</strong>.", "personal": "If a sudden flash mob erupted in your local supermarket right now, how <strong>would</strong> you respond to the <strong>pandemonium</strong>?"},
            {"main": "If urban planners had prioritized sterile efficiency, our neighborhoods would have lost the happy accidents that thrive in creative <strong>chaos</strong>.", "personal": "Do you believe that absolute <strong>order</strong> is necessary for human happiness, or do we need some <strong>chaos</strong>?"},
            {"main": "If society had not forced us into rigid schedules, we would be living far more <strong>spontaneous</strong>, stress-free lives today.", "personal": "If you had been given the chance to live a completely <strong>spontaneous</strong> life from childhood, <strong>would</strong> you have taken it?"},
            {"main": "If calendar systems had never been invented, our daily interactions would have remained delightfully <strong>unpredictable</strong> and adventurous.", "personal": "If your work schedule suddenly became completely <strong>unpredictable</strong>, how <strong>would</strong> you adapt?"},
            {"main": "If the world's most successful startups had been obsessed with cleanliness, their creative <strong>disorder</strong> would never have produced revolutionary ideas.", "personal": "Have you ever found a brilliant solution to a problem while working in a state of physical <strong>disorder</strong>?"},
            {"main": "If team members had never clashed or experienced creative <strong>friction</strong>, the final product would have been incredibly boring and predictable.", "personal": "Do you think healthy intellectual <strong>friction</strong> is essential for a high-performing team?"},
            {"main": "If school systems had incorporated weekly classes dedicated to pure <strong>spontaneity</strong>, children would have grown up much more resilient.", "personal": "How can parents encourage a healthy balance between structured routines and absolute <strong>spontaneity</strong>?"},
            {"main": "If you had never experienced the <strong>exhilarating</strong> feeling of a last-minute unplanned trip, your perspective on travel would be very limited.", "personal": "What is the most <strong>exhilarating</strong>, spontaneous adventure you would love to go on in the near future?"},
            {"main": "If early humans had refused to build any hierarchical <strong>structure</strong>, we would still be living in small cooperative bands without states.", "personal": "Do you think the complex <strong>structure</strong> of modern society has liberated us or trapped us?"},
            {"main": "If families had not abandoned their <strong>hectic</strong> routines during holidays, they would have missed the true joy of doing absolutely nothing.", "personal": "If you could eliminate the most <strong>hectic</strong> day of your week permanently, how <strong>would</strong> you spend that free time?"}
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

    # 1. Remove any existing grammar sections
    existing_grammar = soup.find(id="grammar")
    if existing_grammar:
        existing_grammar.decompose()

    # Decompose if any is found inside rounds container as well
    for el in soup.find_all(id="s-grammar"):
        el.decompose()

    # 2. Build the new interactive, game-logic grammar section
    # Shuffle or randomize the chips to make it a fun challenge!
    chips = list(data["chips"])
    # Filter out duplicates to keep it clean
    unique_chips = list(dict.fromkeys(chips))
    random.shuffle(unique_chips)

    chips_html_list = []
    for chip in unique_chips:
        chips_html_list.append(f'<span class="grammar-tap-chip" style="background:#FFFDF9; border:1px solid #BA7517; padding:5px 12px; border-radius:20px; cursor:pointer; font-weight:600; color:#BA7517; font-size:0.85rem; user-select:none; transition:all 0.2s;" onclick="COSY.selectGrammarChip(this)">{chip}</span>')
    chips_html = "\n            ".join(chips_html_list)

    tasks_html_list = []
    for t in data["tasks"]:
        tasks_html_list.append(f'<li>{t}</li>')
    tasks_html = "\n            ".join(tasks_html_list)

    grammar_html = f"""<div class="round-block grammar open" id="s-grammar">
<div class="round-header" onclick="COSY.toggleRound('s-grammar')" style="background:#FFF3E0; border-left: 5px solid #BA7517;">
<span>⚡ Grammar Practice — {data['focus']}</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block; padding:1.5rem 1.25rem;">
<div class="grammar-interactive-game" style="position:relative; z-index:2;">
<h3>⚡ Grammar Explanation ({data['level']})</h3>
<p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">
{data['explanation']}
</p>
<div style="background: rgba(186, 117, 23, 0.03); border: 1px dashed rgba(186, 117, 23, 0.3); padding: 1.25rem; border-radius: 12px; margin-bottom: 1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #5c390b;">🧩 Interactive Word Bank:</strong>
<p style="font-size:0.82rem; color:var(--muted); margin:0 0 0.75rem 0;">Tap a word chip below, then tap any empty bracket <code>[_____]</code> to place it!</p>
<div class="grammar-word-bank" style="display:flex; flex-wrap:wrap; gap:8px;">
{chips_html}
</div>
</div>
<div class="grammar-task-item" style="background: rgba(186, 117, 23, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #BA7517; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #5c390b;">📝 Task 1 — Part A: Rule Formulation:</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.8;">
{data['rule_part_a_html']}
</p>
</div>
<div class="grammar-task-item" style="background: rgba(186, 117, 23, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #BA7517; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #5c390b;">📝 Task 1 — Part B: Structured Practice:</strong>
<ol style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--ink); line-height: 2.0;">
{tasks_html}</ol>
</div>
<div style="display:flex; gap:10px; margin-bottom:1.5rem;">
<button class="btn-verify" style="background:#0F6E56; color:white; border:none; padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;" onclick="COSY.verifyGrammarGame(this)">Check Answers</button>
<button class="btn-reset" style="background:transparent; border:1px solid var(--border); color:var(--muted); padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;" onclick="COSY.resetGrammarGame(this)">Reset Board</button>
</div>
<div class="grammar-task-item" style="background: rgba(186, 117, 23, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #BA7517; box-shadow: var(--shadow-sm);">
<strong style="display: block; margin-bottom: 0.5rem; color: #5c390b;">🗣️ Task 2 — Interactive Speaking:</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.6;">
{data['speaking']}
</p>
</div>
</div>
</div>
</div>"""

    # Parse grammar block HTML
    grammar_block_soup = BeautifulSoup(grammar_html, "html.parser")

    # 3. Find Warm-up block to insert grammar right after it
    warmup_block = soup.find(id="s-warm")
    if warmup_block:
        warmup_block.insert_after(grammar_block_soup)
    else:
        # Fallback to rounds-container top
        rounds_container = soup.find(class_="rounds-container")
        if rounds_container:
            rounds_container.insert(0, grammar_block_soup)
        else:
            print(f"Warning: rounds container not found in {filename}")

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
        f.write("<!DOCTYPE html>\n" + str(soup).replace("<!DOCTYPE html>\n", "").replace("<!DOCTYPE html>", ""))

    print(f"Successfully enriched: {filename}")


if __name__ == "__main__":
    for fname in DATABASE.keys():
        process_file(fname)
