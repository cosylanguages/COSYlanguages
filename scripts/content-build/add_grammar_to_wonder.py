import os
import re
import random
from bs4 import BeautifulSoup

DATABASE_EN = {
    "is-bad-weather-gods-anger.html": {
        "focus": "Concessive & Adversative Connectors",
        "explanation": "Use connectors of concession and contrast (<strong>despite</strong>, <strong>in spite of</strong>, <strong>whereas</strong>, <strong>although</strong>, <strong>nonetheless</strong>) to contrast ancient beliefs with modern rationalism.",
        "rule_part_a": "Complete the rule: We use <span class=\"grammar-gap\" data-answer=\"despite\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> or 'in spite of' followed by a noun or gerund. We use <span class=\"grammar-gap\" data-answer=\"whereas\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> or 'while' to compare two contrasting facts in different clauses.",
        "tasks": [
            "Ancient people worshipped deities <span class=\"grammar-gap\" data-answer=\"despite\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> having no scientific evidence of their existence.",
            "They offered sacrifices to stop the storms, <span class=\"grammar-gap\" data-answer=\"whereas\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> we simply check our smartphone apps.",
            "The skies remained dark and threatening; <span class=\"grammar-gap\" data-answer=\"nonetheless\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, they continued their outdoor rituals.",
            "<span class=\"grammar-gap\" data-answer=\"Although\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> meteorologists can predict rain, they cannot control its destructive force.",
            "They lived in fear of cosmic wrath <span class=\"grammar-gap\" data-answer=\"in spite of\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> their elaborate prayers."
        ],
        "chips": ["despite", "whereas", "nonetheless", "Although", "in spite of", "despite", "whereas"],
        "speaking": "Compare how ancient and modern societies deal with unexpected natural events. Use concessive connectors to highlight the differences in mindset.",
        "keywords": ["despite", "whereas", "nonetheless", "although", "in spite of", "wrath", "deity"]
    },
    "do-insects-hide-when-it-rains.html": {
        "focus": "Prepositions of Place & Direction",
        "explanation": "Use advanced prepositions of place and direction (<strong>beneath</strong>, <strong>within</strong>, <strong>throughout</strong>, <strong>amidst</strong>, <strong>towards</strong>) to describe where and how tiny creatures find shelter in nature.",
        "rule_part_a": "Complete the rule: To describe being inside or surrounded by something, we use <span class=\"grammar-gap\" data-answer=\"within\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> or 'amidst'. To describe a position directly under a protecting surface, we use <span class=\"grammar-gap\" data-answer=\"beneath\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "The tiny ladybug found the perfect sanctuary <span class=\"grammar-gap\" data-answer=\"beneath\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a broad green leaf.",
            "Whole colonies of ants seek safety deep <span class=\"grammar-gap\" data-answer=\"within\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> their subterranean nests.",
            "Raindrops splashed violently <span class=\"grammar-gap\" data-answer=\"throughout\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the forest canopy, disrupting insect flights.",
            "<span class=\"grammar-gap\" data-answer=\"Amidst\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the chaos of the sudden storm, a single butterfly struggled to fly.",
            "The bees flew directly <span class=\"grammar-gap\" data-answer=\"towards\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the safety of their communal hive."
        ],
        "chips": ["within", "beneath", "beneath", "within", "throughout", "Amidst", "towards"],
        "speaking": "Imagine you are an insect trying to survive a sudden summer deluge. Describe your journey using prepositions of place and direction.",
        "keywords": ["beneath", "within", "throughout", "amidst", "towards", "sanctuary", "deluge"]
    },
    "ugly-produce-anti-waste.html": {
        "focus": "Evaluative Adverbs",
        "explanation": "Use <strong>Evaluative Adverbs</strong> (<em>utterly, perfectly, highly, deeply, exceptionally</em>) to modify adjectives and express your strong personal opinion, judgment, or feeling about a characteristic.",
        "rule_part_a": "Complete the rule: Evaluative adverbs are placed <span class=\"grammar-gap\" data-answer=\"before\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the adjectives they modify. We use <span class=\"grammar-gap\" data-answer=\"utterly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> for negative emphasis, and <span class=\"grammar-gap\" data-answer=\"perfectly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> for positive or reassuring qualities.",
        "tasks": [
            "This misshapen tomato is <span class=\"grammar-gap\" data-answer=\"perfectly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> delicious despite its weird looks.",
            "Throwing away edible food simply because of its shape is <span class=\"grammar-gap\" data-answer=\"utterly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> ridiculous.",
            "Consumers are <span class=\"grammar-gap\" data-answer=\"highly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> critical of visual imperfections in supermarkets.",
            "She was <span class=\"grammar-gap\" data-answer=\"deeply\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> concerned about the scale of global organic waste.",
            "Selling ugly vegetables is an <span class=\"grammar-gap\" data-answer=\"exceptionally\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> smart way to reduce anti-waste."
        ],
        "chips": ["before", "utterly", "perfectly", "highly", "deeply", "exceptionally"],
        "speaking": "Discuss your view on buying 'ugly' food. Is it perfectly acceptable, or utterly unappealing to you? Explain why.",
        "keywords": ["perfectly", "utterly", "highly", "deeply", "exceptionally", "ridiculous"]
    },
    "appreciating-amy-winehouse-after-death.html": {
        "focus": "Speculative Regrets",
        "explanation": "Use past modals (<strong>should have</strong>, <strong>would have</strong>, <strong>could have</strong> + past participle) or <strong>If only / I wish + Past Perfect</strong> to express speculation, remorse, or regret about past occurrences.",
        "rule_part_a": "Complete the rule: To express regret about a past action that didn't happen, use 'should' or 'would' + <span class=\"grammar-gap\" data-answer=\"have\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + the <span class=\"grammar-gap\" data-answer=\"past participle\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> form of the verb.",
        "tasks": [
            "The public <span class=\"grammar-gap\" data-answer=\"should have protected\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> her privacy instead of feeding on her pain.",
            "If only the industry <span class=\"grammar-gap\" data-answer=\"had intervened\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> before her struggle became terminal.",
            "She <span class=\"grammar-gap\" data-answer=\"would have created\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> many more beautiful albums if she had survived.",
            "I wish they <span class=\"grammar-gap\" data-answer=\"had not exploited\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> her vulnerability for ratings.",
            "How <span class=\"grammar-gap\" data-answer=\"could we have acted\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> differently to save her life?"
        ],
        "chips": ["have", "past participle", "should have protected", "had intervened", "would have created", "had not exploited", "could we have acted"],
        "speaking": "Reflect on a historical figure or artist who died young. What should the people around them or society have done differently to support them?",
        "keywords": ["should have", "would have", "could have", "if only", "had", "regret"]
    },
    "why-do-we-try-to-relate-to-adhd.html": {
        "focus": "Adverbs of Degree & Mitigators",
        "explanation": "Use <strong>Adverbs of Degree</strong> (<em>virtually, barely, slightly, highly, somewhat, mildly</em>) to express precise levels of intensity and carefully qualify psychological claims.",
        "rule_part_a": "Complete the rule: To express almost 100% or complete similarity, use <span class=\"grammar-gap\" data-answer=\"virtually\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. To show a very small, almost non-existent level of degree or struggle, use <span class=\"grammar-gap\" data-answer=\"barely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "With modern distractions, it is <span class=\"grammar-gap\" data-answer=\"virtually\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> impossible for some to read a full page without checking their phone.",
            "I could <span class=\"grammar-gap\" data-answer=\"barely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> focus during that two-hour lecture because of the constant noise.",
            "Many of us relate <span class=\"grammar-gap\" data-answer=\"somewhat\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to the symptoms of ADHD without actually having the condition.",
            "The student felt <span class=\"grammar-gap\" data-answer=\"mildly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> distracted, but managed to complete the exam successfully.",
            "Psychologists are <span class=\"grammar-gap\" data-answer=\"highly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> critical of self-diagnoses made on social media platforms."
        ],
        "chips": ["virtually", "barely", "somewhat", "mildly", "highly"],
        "speaking": "How easily do you get distracted? Do you find it virtually impossible to study without music, or can you barely tolerate any background noise?",
        "keywords": ["virtually", "barely", "somewhat", "mildly", "highly", "symptom", "distraction"]
    },
    "does-euthanasia-reduce-suicide-rates.html": {
        "focus": "Complex Modals & Ethical Assertions",
        "explanation": "Use advanced modal structures (<strong>ought to</strong>, <strong>ought not to</strong>, <strong>should be</strong> + past participle, <strong>must have been</strong>) to formulate strong, precise, and polite ethical assertions.",
        "rule_part_a": "Complete the rule: To express ethical obligation or strong advice, we can use <span class=\"grammar-gap\" data-answer=\"ought to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> as a synonym for 'should'. For negative ethical statements, we use <span class=\"grammar-gap\" data-answer=\"ought not to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Sufferers <span class=\"grammar-gap\" data-answer=\"ought to be allowed\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to make decisions about their own dignity.",
            "A patient's request for death <span class=\"grammar-gap\" data-answer=\"must be evaluated\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> by independent medical commissions.",
            "Medical ethics <span class=\"grammar-gap\" data-answer=\"ought not to be influenced\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> by corporate financial incentives.",
            "The psychological support <span class=\"grammar-gap\" data-answer=\"should have been provided\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> before any final decision was reached.",
            "Laws <span class=\"grammar-gap\" data-answer=\"must not be changed\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> without extensive public debate."
        ],
        "chips": ["ought to", "ought not to", "ought to be allowed", "must be evaluated", "ought not to be influenced", "should have been provided", "must not be changed"],
        "speaking": "Argue whether states ought to regulate individual end-of-the-road decisions. What ethical guardrails must be maintained?",
        "keywords": ["ought to", "ought not to", "should be", "must be", "must not", "should have been"]
    },
    "is-parenting-instinct-a-real-thing-or-scam.html": {
        "focus": "Double Comparatives",
        "explanation": "Use double comparative structures (<strong>the more... the more...</strong>, <strong>the harder... the better...</strong>) to describe proportional relationships and social pressures.",
        "rule_part_a": "Complete the rule: Form a double comparative using: 'The' + comparative adjective/adverb + subject + verb, followed by 'the' + <span class=\"grammar-gap\" data-answer=\"comparative\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + subject + verb.",
        "tasks": [
            "<span class=\"grammar-gap\" data-answer=\"The more\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> society demands perfect parents, the more insecure mothers feel.",
            "The harder we try to meet unrealistic social expectations, <span class=\"grammar-gap\" data-answer=\"the more\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> we doubt our natural abilities.",
            "The earlier new parents receive communal support, <span class=\"grammar-gap\" data-answer=\"the easier\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the bonding process becomes.",
            "<span class=\"grammar-gap\" data-answer=\"The less\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> we rely on commercial parenting books, the better we hear our inner instinct.",
            "The closer the maternal bond, <span class=\"grammar-gap\" data-answer=\"the stronger\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the child's sense of security."
        ],
        "chips": ["comparative", "The more", "the more", "the easier", "The less", "the stronger"],
        "speaking": "Discuss modern parenting pressure. Do you agree that the more resources we have, the harder it is to raise a child simply? Use double comparatives.",
        "keywords": ["The more", "the more", "the easier", "The less", "the stronger", "instinct", "bonding"]
    },
    "whether-raindrops-select-where-to-fall.html": {
        "focus": "Speculative Conjunctions",
        "explanation": "Use advanced <strong>Speculative Conjunctions</strong> (<strong>as if</strong>, <strong>whether... or</strong>, <strong>provided that</strong>, <strong>lest</strong>) to describe alternative realities, chance, and philosophical conditions.",
        "rule_part_a": "Complete the rule: Use <span class=\"grammar-gap\" data-answer=\"as if\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to describe a hypothetical manner, and <span class=\"grammar-gap\" data-answer=\"lest\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in formal English to prevent an undesirable outcome (meaning 'for fear that').",
        "tasks": [
            "The raindrop fell <span class=\"grammar-gap\" data-answer=\"as if\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> it had selected its exact destination.",
            "<span class=\"grammar-gap\" data-answer=\"Whether\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> we live by design <span class=\"grammar-gap\" data-answer=\"or\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> by pure chance, we must find our own meaning.",
            "We must preserve our environment, <span class=\"grammar-gap\" data-answer=\"lest\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> we destroy our own home.",
            "<span class=\"grammar-gap\" data-answer=\"Provided that\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the cloud remains cold enough, snow will fall instead of rain.",
            "He behaved <span class=\"grammar-gap\" data-answer=\"as though\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> he could control the wind."
        ],
        "chips": ["as if", "lest", "Whether", "or", "Provided that", "as though"],
        "speaking": "Discuss whether our life paths are chosen by design or by pure coincidence, using 'provided that' or 'as if'.",
        "keywords": ["as if", "whether", "or", "lest", "provided that", "as though"]
    },
    "feeling-empty-after-series.html": {
        "focus": "Gerunds vs Infinitives",
        "explanation": "Master when to use a <strong>gerund</strong> (verb-ing) or an <strong>infinitive</strong> (to + verb) after emotional or process verbs like <strong>finish</strong>, <strong>struggle</strong>, or <strong>avoid</strong>.",
        "rule_part_a": "Complete the rule: Verbs like 'finish' and 'avoid' are followed by a <span class=\"grammar-gap\" data-answer=\"gerund\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. Verbs like 'struggle' and 'decide' require an <span class=\"grammar-gap\" data-answer=\"infinitive\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "I finished <span class=\"grammar-gap\" data-answer=\"watching\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the final episode of my favorite series last night.",
            "She struggled <span class=\"grammar-gap\" data-answer=\"to return\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to real-world tasks after the emotional finale.",
            "Many viewers try to avoid <span class=\"grammar-gap\" data-answer=\"feeling\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> empty by immediately starting a new show.",
            "We enjoy <span class=\"grammar-gap\" data-answer=\"reminiscing\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> about the best plot twists with our friends.",
            "He decided <span class=\"grammar-gap\" data-answer=\"to write\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a fan fiction story to keep the characters alive."
        ],
        "chips": ["gerund", "infinitive", "watching", "to return", "feeling", "reminiscing", "to write"],
        "speaking": "Talk about a book or series you finished reading or watching. Did you struggle to move on, or did you enjoy discussing it?",
        "keywords": ["watching", "feeling", "reminiscing", "to return", "to write", "avoid", "struggled to"]
    },
    "death-of-the-album.html": {
        "focus": "Habits in the Past vs. Present",
        "explanation": "Use structures like <strong>used to</strong>, <strong>would</strong> + base verb, and <strong>be/get used to</strong> to contrast bygone consumption habits with modern digital norms.",
        "rule_part_a": "Complete the rule: For past habits or states that are no longer true, we use <span class=\"grammar-gap\" data-answer=\"used to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. For past repeated actions, we can also use <span class=\"grammar-gap\" data-answer=\"would\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. To talk about things that are familiar now, we use be/get <span class=\"grammar-gap\" data-answer=\"used to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + verb-ing.",
        "tasks": [
            "We <span class=\"grammar-gap\" data-answer=\"used to buy\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> physical records and listen to them from start to finish.",
            "Every Friday, my friends and I <span class=\"grammar-gap\" data-answer=\"would sit\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> together just to appreciate a new release.",
            "Now, listeners are <span class=\"grammar-gap\" data-answer=\"used to skipping\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> tracks after hearing only a ten-second snippet.",
            "We eventually <span class=\"grammar-gap\" data-answer=\"got used to having\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> millions of songs available in our pockets.",
            "I never thought I <span class=\"grammar-gap\" data-answer=\"would prefer\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> single tracks over a cohesive album."
        ],
        "chips": ["used to", "would", "used to", "used to buy", "would sit", "used to skipping", "got used to having", "would prefer"],
        "speaking": "Contrast your own past music habits with your current ones. What did you use to do that you no longer do now? Are you fully used to algorithmic playlists?",
        "keywords": ["used to", "would", "used to", "get used to", "nostalgia", "modernity", "tracklist"]
    },
    "always-watched-in-a-crowd.html": {
        "focus": "Passive vs Active Voice",
        "explanation": "Use the <strong>Passive Voice</strong> (<strong>to be + past participle</strong>) to describe situations where you feel like the object of public attention, rather than the active observer.",
        "rule_part_a": "Complete the rule: In passive constructions, the target of the action becomes the <span class=\"grammar-gap\" data-answer=\"subject\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> of the sentence. Form the passive using the auxiliary verb <span class=\"grammar-gap\" data-answer=\"be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> followed by the past participle.",
        "tasks": [
            "Our minor fashion choices <span class=\"grammar-gap\" data-answer=\"are scrutinized\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> far less than we think.",
            "She hates <span class=\"grammar-gap\" data-answer=\"being watched\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> when she is eating in public cafés.",
            "How easily <span class=\"grammar-gap\" data-answer=\"are we influenced\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> by the silent gaze of the crowd?",
            "Our public mistakes <span class=\"grammar-gap\" data-answer=\"should be forgotten\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, but social media preserves them forever.",
            "He felt <span class=\"grammar-gap\" data-answer=\"judged\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> by every passenger on the train."
        ],
        "chips": ["subject", "be", "are scrutinized", "being watched", "are we influenced", "should be forgotten", "judged"],
        "speaking": "Have you ever felt heavily scrutinized or judged in a public space? How did you react to being observed?",
        "keywords": ["are scrutinized", "being watched", "are we influenced", "should be forgotten", "judged", "perceived"]
    },
    "why-is-everyone-copying-me.html": {
        "focus": "Causative Verbs",
        "explanation": "Use causative verbs (<strong>make</strong>, <strong>get</strong>, <strong>have</strong>) to describe how we influence others' style and behavior, or how they influence us.",
        "rule_part_a": "Complete the rule: We use 'make' + object + <span class=\"grammar-gap\" data-answer=\"base form\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> of the verb to express force or strong influence. We use 'get' + object + <span class=\"grammar-gap\" data-answer=\"to-infinitive\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to express persuasion.",
        "tasks": [
            "Her authentic style managed to <span class=\"grammar-gap\" data-answer=\"get\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> her friends to buy the exact same dress.",
            "Superficial trends <span class=\"grammar-gap\" data-answer=\"make\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> millions of people replicate the same virtual aesthetics.",
            "I will <span class=\"grammar-gap\" data-answer=\"have\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> my designer customize my outfit so copycats cannot copy it.",
            "How can we <span class=\"grammar-gap\" data-answer=\"get\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> people to express their unique identity authentically?",
            "Seeing someone blatantly copy you can <span class=\"grammar-gap\" data-answer=\"make\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> you feel deeply frustrated."
        ],
        "chips": ["base form", "to-infinitive", "get", "make", "have", "get", "make"],
        "speaking": "Discuss social media influence. Do platforms make us replicate other people's lives, or do they simply get us to express ourselves in a modern way?",
        "keywords": ["make", "get", "have", "copycat", "mirroring", "authentic"]
    },
    "are-traditions-hidden-monogamy.html": {
        "focus": "Inversion with Negative Adverbials",
        "explanation": "Use inversion after negative or restrictive adverbials (<strong>rarely</strong>, <strong>seldom</strong>, <strong>not only</strong>, <strong>under no circumstances</strong>, <strong>only when</strong>) to add dramatic emphasis, formal tone, or rhetorical power to your arguments.",
        "rule_part_a": "Complete the rule: When we place a negative or restrictive adverbial at the beginning of a sentence, we must invert the subject and the <span class=\"grammar-gap\" data-answer=\"auxiliary verb\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. If there is no auxiliary verb, we use the appropriate form of <span class=\"grammar-gap\" data-answer=\"do\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "<span class=\"grammar-gap\" data-answer=\"Rarely do we\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> question the customs we inherit from our ancestors.",
            "Not only <span class=\"grammar-gap\" data-answer=\"do traditions provide\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a sense of community, but they also offer comfort in times of crisis.",
            "Under no circumstances <span class=\"grammar-gap\" data-answer=\"should we allow\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> outdated rituals to compromise basic human rights.",
            "Seldom <span class=\"grammar-gap\" data-answer=\"has a society\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> progressed without challenging its most sacred dogmas.",
            "Only when we step away from our comfort zone <span class=\"grammar-gap\" data-answer=\"can we see\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the arbitrary nature of our habits."
        ],
        "chips": ["auxiliary verb", "do", "Rarely do we", "do traditions provide", "should we allow", "has a society", "can we see"],
        "speaking": "Discuss whether we should actively break old traditions. Start at least three sentences with negative or restrictive adverbials to add emphasis.",
        "keywords": ["rarely", "not only", "under no circumstances", "seldom", "only when", "inversion", "adverbial"]
    },
    "collective-guilt-global-crisis.html": {
        "focus": "Mixed Conditionals",
        "explanation": "Use mixed conditionals (<strong>If + Past Perfect, would + base verb</strong>) to connect past decisions, actions, or historical failures to their direct consequences in the present day.",
        "rule_part_a": "To connect a hypothetical past action with a present result, use 'if' + <span class=\"grammar-gap\" data-answer=\"Past Perfect\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in the condition clause, and 'would' / 'could' + <span class=\"grammar-gap\" data-answer=\"base form\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in the result clause.",
        "tasks": [
            "If we <span class=\"grammar-gap\" data-answer=\"had listened\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to early environmental warnings in the 1970s, our planet <span class=\"grammar-gap\" data-answer=\"would not be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in such a critical state today.",
            "If major powers had resolved their diplomatic differences years ago, citizens <span class=\"grammar-gap\" data-answer=\"would not feel\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> this constant anxiety about global conflict now.",
            "If they had regulated plastic production earlier, oceans <span class=\"grammar-gap\" data-answer=\"would have\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> far less microplastic pollution today.",
            "If our ancestors <span class=\"grammar-gap\" data-answer=\"had built\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> sustainable infrastructure, we would not struggle to find eco-friendly options.",
            "If society had prioritized global cooperation, we <span class=\"grammar-gap\" data-answer=\"would experience\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> much less collective guilt today."
        ],
        "chips": ["Past Perfect", "base form", "had listened", "would not be", "would not feel", "would have", "had built", "would experience"],
        "speaking": "Reflect on a major environmental or political decision from the past. How would your daily life or the state of the world be different today if a different choice had been made? Use mixed conditionals.",
        "keywords": ["if", "had", "would be", "would feel", "would have", "mixed conditional", "consequences"]
    },
    "are-traditions-hidden-monogamy-upper-intermediate.html": {
        "focus": "Passive Reporting Verbs",
        "explanation": "Use <strong>Passive Reporting Verbs</strong> (<strong>it is said that</strong>, <strong>is believed to</strong>, <strong>is thought to be</strong>, <strong>is considered to</strong>) to talk about general beliefs, customs, and traditional expectations without mentioning a specific subject.",
        "rule_part_a": "Complete the rule: We form passive reporting verbs in two main ways: 1) 'It' + passive reporting verb + <span class=\"grammar-gap\" data-answer=\"that\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>-clause (e.g., 'It is believed that...'), or 2) Subject + passive reporting verb + <span class=\"grammar-gap\" data-answer=\"to-infinitive\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> (e.g., 'He is said to be...').",
        "tasks": [
            "It <span class=\"grammar-gap\" data-answer=\"is believed that\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> our ancestors started this autumn festival to celebrate the harvest.",
            "Old family heirlooms are <span class=\"grammar-gap\" data-answer=\"thought to hold\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a deep emotional connection to the past.",
            "Traditional customs are generally <span class=\"grammar-gap\" data-answer=\"considered to be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> essential for preserving social conformity.",
            "It <span class=\"grammar-gap\" data-answer=\"is said that\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> breaking a mirror brings seven years of bad luck.",
            "Holiday rituals are <span class=\"grammar-gap\" data-answer=\"known to create\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a strong sense of community belonging."
        ],
        "chips": ["that", "to-infinitive", "is believed that", "thought to hold", "considered to be", "is said that", "known to create"],
        "speaking": "Discuss whether local customs are believed to be useful for modern city life, or if they are thought to limit individual freedom. Use at least three passive reporting structures.",
        "keywords": ["is said to", "is believed to", "is thought to", "is considered to", "it is said that", "it is believed that", "is believed that", "is said that", "thought to hold", "considered to be", "known to create"]
    },
    "i-have-no-time-for-it.html": {
        "focus": "Focus Adverbs",
        "explanation": "Use <strong>Focus Adverbs</strong> (<em>particularly, merely, simply, solely, precisely</em>) to limit, emphasize, or draw attention to specific parts of your statements regarding time and desire.",
        "rule_part_a": "Complete the rule: We use <span class=\"grammar-gap\" data-answer=\"merely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to mean 'just' or 'only' with a softening effect. We use <span class=\"grammar-gap\" data-answer=\"precisely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to add exact emphasis or to indicate complete agreement.",
        "tasks": [
            "Saying we don't have enough hours is <span class=\"grammar-gap\" data-answer=\"merely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a convenient pretext to hide our lack of interest.",
            "Our decisions about what to do with our free time are guided <span class=\"grammar-gap\" data-answer=\"solely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> by our personal motivation.",
            "I am <span class=\"grammar-gap\" data-answer=\"simply\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> too exhausted to prioritize socializing after a grueling week at the office.",
            "This issue is <span class=\"grammar-gap\" data-answer=\"particularly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> relevant in fast-paced metropolitan cities like Rennes.",
            "That is <span class=\"grammar-gap\" data-answer=\"precisely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> why we must learn to set healthy boundaries and say no."
        ],
        "chips": ["merely", "precisely", "solely", "simply", "particularly", "merely", "precisely"],
        "speaking": "Discuss a goal or habit you've been putting off on the pretext of 'no time'. Use focus adverbs to explain whether it's truly a time issue or simply a lack of motivation.",
        "keywords": ["merely", "precisely", "solely", "simply", "particularly", "pretext", "apathy", "prioritize", "armor", "decoy", "brushing off", "elusive", "bulletproof", "scarcity", "reckon"]
    }
}

DATABASE_FR = {
    "ugly-produce-anti-waste.html": {
        "focus": "Adverbes d'évaluation",
        "explanation": "Utilisez des <strong>Adverbes d'évaluation</strong> (<em>parfaitement, totalement, profondément, particulièrement</em>) pour exprimer un jugement d'opinion sur un adjectif.",
        "rule_part_a": "Complétez la règle : Les adverbes d'évaluation se placent généralement <span class=\"grammar-gap\" data-answer=\"avant\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> l'adjectif qu'ils modifient. On utilise <span class=\"grammar-gap\" data-answer=\"totalement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> pour exprimer une opinion négative ou absolue.",
        "tasks": [
            "Jeter de la nourriture saine sous prétexte qu'elle est laide est <span class=\"grammar-gap\" data-answer=\"totalement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> ridicule.",
            "Ce légume moche est <span class=\"grammar-gap\" data-answer=\"parfaitement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> comestible et délicieux.",
            "Les clients sont <span class=\"grammar-gap\" data-answer=\"profondément\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> habitués à des critères de beauté superficiels.",
            "C'est une idée <span class=\"grammar-gap\" data-answer=\"particulièrement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> intelligente pour réduire le gaspillage.",
            "Nous sommes <span class=\"grammar-gap\" data-answer=\"extrêmement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> satisfaits de cette démarche écologique."
        ],
        "chips": ["avant", "totalement", "parfaitement", "profondément", "particulièrement", "extrêmement"],
        "speaking": "Est-ce parfaitement acceptable ou totalement inacceptable d'acheter des fruits 'moches' ? Expliquez votre point de vue.",
        "keywords": ["parfaitement", "totalement", "profondément", "particulièrement", "extrêmement", "ridicule"]
    },
    "why-do-we-try-to-relate-to-adhd.html": {
        "focus": "Adverbes d'intensité et atténuateurs",
        "explanation": "Utilisez des <strong>Adverbes d'intensité</strong> (<em>pratiquement, à peine, légèrement, hautement, quelque peu</em>) pour nuancer vos affirmations et exprimer des degrés précis de ressenti.",
        "rule_part_a": "Complétez la règle : Pour exprimer une quasi-totalité (presque 100%), on utilise <span class=\"grammar-gap\" data-answer=\"pratiquement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. Pour exprimer un degré extrêmement faible ou une difficulté d'action, on utilise <span class=\"grammar-gap\" data-answer=\"à peine\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Avec les distractions modernes, il est <span class=\"grammar-gap\" data-answer=\"pratiquement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> impossible de rester concentré sans son téléphone.",
            "J'arrivais <span class=\"grammar-gap\" data-answer=\"à peine\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> à écouter le professeur à cause du bruit dans la rue.",
            "Nous nous identifions <span class=\"grammar-gap\" data-answer=\"quelque peu\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> aux symptômes du TDAH sans pour autant être diagnostiqués.",
            "Elle s'est sentie <span class=\"grammar-gap\" data-answer=\"légèrement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> distraite par les notifications de sa montre.",
            "Les experts sont <span class=\"grammar-gap\" data-answer=\"hautement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> sceptiques face aux diagnostics amateurs sur TikTok."
        ],
        "chips": ["pratiquement", "à peine", "quelque peu", "légèrement", "hautement"],
        "speaking": "Parvenez-vous facilement à vous concentrer ? Est-ce pratiquement impossible pour vous dans un environnement bruyant, ou y arrivez-vous à peine ?",
        "keywords": ["pratiquement", "à peine", "quelque peu", "légèrement", "hautement", "symptôme", "distraction"]
    },
    "is-parenting-instinct-a-real-thing-or-scam.html": {
        "focus": "Double comparatif et structures proportionnelles",
        "explanation": "Utilisez les structures comparatives proportionnelles (<strong>plus... plus...</strong>, <strong>moins... moins...</strong>) pour exprimer des relations de cause à effet et des pressions sociales.",
        "rule_part_a": "Complétez la règle : En français, pour exprimer une proportion, on utilise 'plus' ou 'moins' en début de proposition, suivi de la structure sujet + verbe, <span class=\"grammar-gap\" data-answer=\"sans\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> ajouter l'article 'le' devant 'plus' ou 'moins'.",
        "tasks": [
            "Plus la société exige la perfection, <span class=\"grammar-gap\" data-answer=\"plus\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> les mères se sentent coupables.",
            "Plus on essaie de correspondre à des modèles irréalistes, <span class=\"grammar-gap\" data-answer=\"plus\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> on doute de nos capacités naturelles.",
            "Moins on s'appuie sur les manuels commerciaux, <span class=\"grammar-gap\" data-answer=\"mieux\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> on écoute notre propre instinct.",
            "Plus le soutien de l'entourage est fort, <span class=\"grammar-gap\" data-answer=\"plus\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> l'apprentissage est facile.",
            "<span class=\"grammar-gap\" data-answer=\"Moins\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> nous subissons de pression sociale, mieux nous réussissons à éduquer nos enfants."
        ],
        "chips": ["sans", "Plus", "plus", "mieux", "plus", "Moins"],
        "speaking": "Pensez-vous que plus on lit de livres sur l'éducation des enfants, plus on se sent perdu ? Utilisez des structures proportionnelles.",
        "keywords": ["Plus", "plus", "Moins", "moins", "mieux", "instinct", "éducation"]
    },
    "feeling-empty-after-series.html": {
        "focus": "Formes verbales et infinitifs",
        "explanation": "Maîtrisez l'usage de l'infinitif (<em>faire, lire</em>) ou de la forme nominale après des verbes de sentiment ou de processus comme <em>éviter de, commencer à, continuer de</em>.",
        "rule_part_a": "Complétez la règle : En français, après des verbes comme 'éviter de' ou 'décider de', on utilise toujours le verbe à l'<span class=\"grammar-gap\" data-answer=\"infinitif\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "J'ai terminé de <span class=\"grammar-gap\" data-answer=\"regarder\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> la série hier soir.",
            "Elle a décidé de <span class=\"grammar-gap\" data-answer=\"lire\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> des critiques pour mieux comprendre la fin.",
            "Nous essayons d'éviter de <span class=\"grammar-gap\" data-answer=\"ressentir\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> ce vide en commençant un nouveau film.",
            "On adore <span class=\"grammar-gap\" data-answer=\"partager\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> nos théories favorites avec nos amis.",
            "Ils continuent de <span class=\"grammar-gap\" data-answer=\"penser\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> aux personnages bien après le dernier épisode."
        ],
        "chips": ["infinitif", "regarder", "lire", "ressentir", "partager", "penser"],
        "speaking": "Racontez votre expérience après avoir terminé une œuvre marquante. Avez-vous eu tendance à éviter d'y penser ou à en partager directement ?",
        "keywords": ["éviter de", "décidé de", "terminé de", "adore", "penser", "partager"]
    },
    "death-of-the-album.html": {
        "focus": "Habitudes passées et présentes",
        "explanation": "Utilisez <strong>l'imparfait</strong>, l'expression <strong>avoir l'habitude de</strong> ou le verbe <strong>s'habituer à</strong> pour contraster les habitudes d'écoute d'autrefois avec l'époque moderne.",
        "rule_part_a": "Complétez la règle : Pour décrire une habitude passée révolue, on utilise généralement <span class=\"grammar-gap\" data-answer=\"l'imparfait\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. Pour parler d'un processus d'adaptation en cours ou achevé, on utilise le verbe <span class=\"grammar-gap\" data-answer=\"s'habituer à\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Avant, nous <span class=\"grammar-gap\" data-answer=\"achetions\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> des albums complets sans pouvoir sauter les morceaux.",
            "Chaque week-end, j'<span class=\"grammar-gap\" data-answer=\"avais l'habitude d'\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> écouter un vinyle entier dans mon salon.",
            "Aujourd'hui, nous <span class=\"grammar-gap\" data-answer=\"sommes habitués à\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> consommer des playlists générées par des algorithmes.",
            "Les jeunes générations <span class=\"grammar-gap\" data-answer=\"s'habituent\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> rapidement aux formats de dix secondes.",
            "Je ne pensais pas que je <span class=\"grammar-gap\" data-answer=\"finirais\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> par abandonner l'écoute d'albums physiques."
        ],
        "chips": ["l'imparfait", "s'habituer à", "achetions", "avais l'habitude d'", "sommes habitués à", "s'habituent", "finirais"],
        "speaking": "Comparez vos habitudes d'écoute passées avec vos habitudes actuelles. Étiez-vous plus patient autrefois ? Vous êtes-vous habitué au streaming ?",
        "keywords": ["habitude", "habitués", "achetions", "s'habituent", "nostalgie", "modernité"]
    }
}

def enrich_file(filepath, is_fr=False):
    filename = os.path.basename(filepath)
    db = DATABASE_FR if is_fr else DATABASE_EN
    data = db.get(filename)
    if not data:
        print(f"No configuration found for {filename}")
        return

    print(f"Processing: {filepath}")

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    soup = BeautifulSoup(content, "html.parser")

    # Decompose existing grammar block if any exists
    existing_g = soup.find(id="s-grammar")
    if existing_g:
        existing_g.decompose()
    for el in soup.find_all(class_="grammar"):
        el.decompose()

    # Determine CEFR level
    meta_grid = soup.find(class_="session-meta-grid")
    level = "B1 – C2"
    if meta_grid:
        level_el = meta_grid.find(string=re.compile("Level|Niveau"))
        if level_el:
            parent = level_el.find_parent()
            val_el = parent.find_next_sibling() if parent else None
            if val_el:
                level = val_el.get_text().strip()

    # Generate custom Interactive Grammar Practice block themed in Deep Purple/Indigo (#3F2B96)
    chips = list(data["chips"])
    random.shuffle(chips)

    chips_html_list = []
    for chip in chips:
        chips_html_list.append(f'<span class="grammar-tap-chip" style="background:#FFFDF9; border:1px solid #3F2B96; padding:5px 12px; border-radius:20px; cursor:pointer; font-weight:600; color:#3F2B96; font-size:0.85rem; user-select:none; transition:all 0.2s;" onclick="COSY.selectGrammarChip(this)">{chip}</span>')
    chips_html = "\n            ".join(chips_html_list)

    tasks_html_list = []
    for t in data["tasks"]:
        tasks_html_list.append(f'<li>{t}</li>')
    tasks_html = "\n            ".join(tasks_html_list)

    # Localized texts
    title_label = "⚡ Pratique Grammaticale — " if is_fr else "⚡ Grammar Practice — "
    explanation_label = "⚡ Explication Grammaticale (" if is_fr else "⚡ Grammar Explanation ("
    word_bank_label = "🧩 Banque de mots interactive :" if is_fr else "🧩 Interactive Word Bank:"
    word_bank_help = "Appuyez sur un mot ci-dessous, puis sur des crochets vides <code>[_____]</code> pour le placer !" if is_fr else "Tap a word chip below, then tap any empty bracket <code>[_____]</code> to place it!"
    task1a_label = "📝 Exercice 1 — Partie A : Formulation de la règle :" if is_fr else "📝 Task 1 — Part A: Rule Formulation:"
    task1b_label = "📝 Exercice 1 — Partie B : Pratique structurée :" if is_fr else "📝 Task 1 — Part B: Structured Practice:"
    check_btn_label = "Vérifier les réponses" if is_fr else "Check Answers"
    reset_btn_label = "Réinitialiser" if is_fr else "Reset Board"
    task2_label = "🗣️ Exercice 2 — Expression orale interactive :" if is_fr else "🗣️ Task 2 — Interactive Speaking:"

    grammar_html = f"""<div class="round-block grammar open" id="s-grammar">
<div class="round-header" onclick="COSY.toggleRound('s-grammar')" style="background:#EEEDFE; border-left: 5px solid #3F2B96;">
<span>{title_label}{data['focus']}</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block; padding:1.5rem 1.25rem;">
<div class="grammar-interactive-game" style="position:relative; z-index:2;">
<h3>{explanation_label}{level})</h3>
<p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">
{data['explanation']}
</p>
<div style="background: rgba(63, 43, 150, 0.03); border: 1px dashed rgba(63, 43, 150, 0.3); padding: 1.25rem; border-radius: 12px; margin-bottom: 1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #1F104D;">{word_bank_label}</strong>
<p style="font-size:0.82rem; color:var(--muted); margin:0 0 0.75rem 0;">{word_bank_help}</p>
<div class="grammar-word-bank" style="display:flex; flex-wrap:wrap; gap:8px;">
{chips_html}
</div>
</div>
<div class="grammar-task-item" style="background: rgba(63, 43, 150, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #3F2B96; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #1F104D;">{task1a_label}</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.8;">
{data['rule_part_a']}
</p>
</div>
<div class="grammar-task-item" style="background: rgba(63, 43, 150, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #3F2B96; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #1F104D;">{task1b_label}</strong>
<ol style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--ink); line-height: 2.0;">
{tasks_html}</ol>
</div>
<div style="display:flex; gap:10px; margin-bottom:1.5rem;">
<button class="btn-verify" style="background:#3F2B96; color:white; border:none; padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;" onclick="COSY.verifyGrammarGame(this)">{check_btn_label}</button>
<button class="btn-reset" style="background:transparent; border:1px solid var(--border); color:var(--muted); padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;" onclick="COSY.resetGrammarGame(this)">{reset_btn_label}</button>
</div>
<div class="grammar-task-item" style="background: rgba(63, 43, 150, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #3F2B96; box-shadow: var(--shadow-sm);">
<strong style="display: block; margin-bottom: 0.5rem; color: #1F104D;">{task2_label}</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.6;">
{data['speaking']}
</p>
</div>
</div>
</div>
</div>"""

    # Insert grammar block immediately after Warm-up (s-warm)
    warmup_block = soup.find(id="s-warm")
    grammar_block_soup = BeautifulSoup(grammar_html, "html.parser")
    if warmup_block:
        warmup_block.insert_after(grammar_block_soup)
    else:
        rounds_container = soup.find(class_="rounds-container")
        if rounds_container:
            rounds_container.insert(0, grammar_block_soup)

    # Weave and emphasize target grammar structures directly into both Round 1 and Round 2 questions
    keywords = data.get("keywords", [])
    for r_class in ["round-1", "round-2"]:
        r_block = soup.find(class_=r_class)
        if r_block:
            items = r_block.find_all(class_="round-item")
            for item in items:
                main_div = item.find(class_="round-item-main")
                if main_div:
                    text = main_div.get_text()
                    for kw in keywords:
                        # Case-insensitive word boundary replace
                        pattern = re.compile(rf'\b({re.escape(kw)})\b', re.IGNORECASE)
                        text = pattern.sub(r'<strong>\1</strong>', text)
                    main_div.clear()
                    main_div.append(BeautifulSoup(text, "html.parser"))

                pers_div = item.find(class_="round-item-personal")
                if pers_div:
                    text = pers_div.get_text()
                    for kw in keywords:
                        pattern = re.compile(rf'\b({re.escape(kw)})\b', re.IGNORECASE)
                        text = pattern.sub(r'<strong>\1</strong>', text)
                    pers_div.clear()
                    pers_div.append(BeautifulSoup(text, "html.parser"))

    # Write changes back to the file
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("<!DOCTYPE html>\n" + str(soup).replace("<!DOCTYPE html>\n", "").replace("<!DOCTYPE html>", ""))

    print(f"Successfully processed {filename}")


def main():
    # Process all English files
    en_dir = "events/sessions/i-couldnt-help-but-wonder/"
    for filename in sorted(os.listdir(en_dir)):
        if filename.endswith(".html") and not filename.startswith("template"):
            enrich_file(os.path.join(en_dir, filename), is_fr=False)

    # Process all French files
    fr_dir = "events/fr/sessions/i-couldnt-help-but-wonder/"
    for filename in sorted(os.listdir(fr_dir)):
        if filename.endswith(".html") and not filename.startswith("template"):
            enrich_file(os.path.join(fr_dir, filename), is_fr=True)


if __name__ == "__main__":
    main()
