import os
import re
import random
from bs4 import BeautifulSoup

DATABASE_EN = {
    "short-holiday-vs-long-holiday-elementary.html": {
        "focus": "Expressing Preferences",
        "explanation": "Use <strong>would rather</strong>, <strong>prefer ... to</strong>, or <strong>had better</strong> to discuss and compare travel options.",
        "rule_part_a": "Complete the rule: We use 'would rather' followed by the <span class=\"grammar-gap\" data-answer=\"base\">_____</span> form of the verb. We use 'prefer' followed by a gerund or noun, and connect choices with <span class=\"grammar-gap\" data-answer=\"to\">_____</span>.",
        "tasks": [
            "I would rather <span class=\"grammar-gap\" data-answer=\"travel\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> close to home than go on long-distance flights.",
            "He prefers packing a suitcase <span class=\"grammar-gap\" data-answer=\"to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> carrying a backpack.",
            "You had better <span class=\"grammar-gap\" data-answer=\"plan\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> your summer trip early to save money.",
            "She would rather <span class=\"grammar-gap\" data-answer=\"relax\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> on the beach than do sports.",
            "They prefer short weekend trips <span class=\"grammar-gap\" data-answer=\"to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> long vacations."
        ],
        "chips": ["base", "to", "travel", "to", "plan", "relax", "to"],
        "speaking": "Talk with your partner. Would you rather travel only once a year if the trip is long, or do you prefer short weekend trips to long ones?",
        "keywords": ["rather", "prefer", "preferring", "better"]
    },
    "short-holiday-vs-long-holiday-intermediate.html": {
        "focus": "Hypothetical Preferences",
        "explanation": "Use <strong>would rather + base verb</strong> or <strong>would prefer + to-infinitive</strong> to speculate on alternative vacation scenarios.",
        "rule_part_a": "Complete the rule: 'Would rather' takes a <span class=\"grammar-gap\" data-answer=\"bare infinitive\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> (verb without 'to'). 'Would prefer' takes a <span class=\"grammar-gap\" data-answer=\"to-infinitive\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "I would rather <span class=\"grammar-gap\" data-answer=\"recuperate\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in absolute silence than travel to an active resort.",
            "They would prefer <span class=\"grammar-gap\" data-answer=\"to design\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a highly spontaneous itinerary.",
            "She would rather <span class=\"grammar-gap\" data-answer=\"not carry\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a heavy suitcase during her leisure time.",
            "Would you prefer <span class=\"grammar-gap\" data-answer=\"to take\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> frequent short breaks or one long trip?",
            "We had better <span class=\"grammar-gap\" data-answer=\"consider\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the complex logistics before choosing our destination."
        ],
        "chips": ["bare infinitive", "to-infinitive", "recuperate", "to design", "not carry", "to take", "consider"],
        "speaking": "Speculate on your dream sabbatical. Would you rather spend six months in an immersive cultural retreat, or would you prefer to keep moving between destinations?",
        "keywords": ["rather", "prefer", "preferring", "better"]
    },
    "short-holiday-vs-long-holiday-upper-intermediate.html": {
        "focus": "Adversative Connectors & Comparison",
        "explanation": "Use <strong>whereas</strong>, <strong>while</strong>, <strong>on the contrary</strong>, and <strong>conversely</strong> to contrast travel values.",
        "rule_part_a": "Complete the rule: Use <span class=\"grammar-gap\" data-answer=\"whereas\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> or 'while' to connect two directly opposite facts in a single sentence. Use <span class=\"grammar-gap\" data-answer=\"conversely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to start a new sentence showing the reverse perspective.",
        "tasks": [
            "Some travelers love meticulous planning, <span class=\"grammar-gap\" data-answer=\"whereas\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> others thrive on spontaneity.",
            "Short holidays offer immediate stress relief; <span class=\"grammar-gap\" data-answer=\"conversely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, long trips provide complete cultural immersion.",
            "Frequent getaways generate high excitement, <span class=\"grammar-gap\" data-answer=\"while\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> long vacations allow for restorative deep rest.",
            "He prefers backpacking; on the <span class=\"grammar-gap\" data-answer=\"contrary\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, she refuses to travel without luxury suitcase comfort.",
            "Excessive flights are detrimental; <span class=\"grammar-gap\" data-answer=\"conversely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, staying home is highly beneficial for local ecosystems."
        ],
        "chips": ["whereas", "conversely", "whereas", "conversely", "while", "contrary", "conversely"],
        "speaking": "Compare the profiles of an active cultural explorer versus a lazy resort vacationer. Use at least two adversative connectors.",
        "keywords": ["whereas", "while", "contrary", "conversely"]
    },
    "4-day-work-week.html": {
        "focus": "Mixed Conditionals",
        "explanation": "Use <strong>Mixed Conditionals</strong> to link past events or actions with present results, or vice versa (e.g., <em>If we had transitioned sooner, we would be more productive today</em>).",
        "rule_part_a": "Complete the rule: To connect a past hypothetical cause with a present result, use 'If' + Past Perfect in the if-clause, and <span class=\"grammar-gap\" data-answer=\"would + base verb\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in the main clause. To connect a permanent state with a past result, use Past Simple in the if-clause and <span class=\"grammar-gap\" data-answer=\"would have + past participle\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in the main clause.",
        "tasks": [
            "If the company had launched the trial last year, we <span class=\"grammar-gap\" data-answer=\"would enjoy\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> higher employee retention today.",
            "We <span class=\"grammar-gap\" data-answer=\"would not be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> suffering from burnout now if they had reduced our workload.",
            "If they <span class=\"grammar-gap\" data-answer=\"cared\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> about our well-being, they would have implemented the schedule changes sooner.",
            "If we had optimized our output, the manager <span class=\"grammar-gap\" data-answer=\"would have approved\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the extra day off.",
            "Our corporate overhead <span class=\"grammar-gap\" data-answer=\"would be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> significantly lower today if we had closed the office on Fridays."
        ],
        "chips": ["would + base verb", "would have + past participle", "would enjoy", "would not be", "cared", "would have approved", "would be"],
        "speaking": "How would your personal well-being be different today if your company had adopted a 4-day work week five years ago?",
        "keywords": ["if", "would", "had", "could"]
    },
    "typing-vs-handwriting-elementary.html": {
        "focus": "Comparatives & Superlatives",
        "explanation": "Use <strong>Comparatives</strong> (<em>faster, slower, more comfortable</em>) and <strong>Superlatives</strong> (<em>the fastest, the easiest</em>) to compare digital and physical writing methods.",
        "rule_part_a": "Complete the rule: For short adjectives, we form the comparative by adding <span class=\"grammar-gap\" data-answer=\"-er\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. For long adjectives, we use <span class=\"grammar-gap\" data-answer=\"more\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + adjective.",
        "tasks": [
            "Typing on a mechanical keyboard is much <span class=\"grammar-gap\" data-answer=\"faster\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> than writing on paper.",
            "Writing with a fountain pen feels <span class=\"grammar-gap\" data-answer=\"more creative\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> than typing on a cold screen.",
            "This digital notebook is the <span class=\"grammar-gap\" data-answer=\"easiest\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> way to search your old notes.",
            "Sitting at an ergonomic desk is <span class=\"grammar-gap\" data-answer=\"more comfortable\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> than slouching in bed.",
            "Paper notes are <span class=\"grammar-gap\" data-answer=\"slower\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to produce, but they are great for memory."
        ],
        "chips": ["-er", "more", "faster", "more creative", "easiest", "more comfortable", "slower"],
        "speaking": "Compare writing in a paper diary to writing a post on social media. Which is faster, more private, and better for expressing yourself?",
        "keywords": ["faster", "slower", "creative", "comfortable", "easiest"]
    },
    "typing-vs-handwriting-intermediate.html": {
        "focus": "Adverbs of Manner & Degree",
        "explanation": "Use <strong>Adverbs of Manner</strong> (<em>efficiently, slowly, neatly</em>) and <strong>Adverbs of Degree</strong> (<em>extremely, relatively, slightly</em>) to describe writing processes.",
        "rule_part_a": "Complete the rule: Adverbs of manner explain <span class=\"grammar-gap\" data-answer=\"how\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> an action is done. Most of them are formed by adding <span class=\"grammar-gap\" data-answer=\"-ly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to the adjective.",
        "tasks": [
            "With a keyboard, we can record information extremely <span class=\"grammar-gap\" data-answer=\"efficiently\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
            "Students write more <span class=\"grammar-gap\" data-answer=\"slowly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> by hand, allowing time for cognitive synthesis.",
            "The teacher asked us to write our exams <span class=\"grammar-gap\" data-answer=\"neatly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to avoid reading errors.",
            "Digital sharing is <span class=\"grammar-gap\" data-answer=\"relatively\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> simple compared to scanning pages.",
            "My hand became <span class=\"grammar-gap\" data-answer=\"slightly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> stiff after writing for two hours in the notebook."
        ],
        "chips": ["how", "-ly", "efficiently", "slowly", "neatly", "relatively", "slightly"],
        "speaking": "Do you type extremely quickly on a touch screen, or do you prefer to type slowly and neatly on a physical keyboard? Explain why.",
        "keywords": ["efficiently", "slowly", "neatly", "extremely", "relatively", "slightly"]
    },
    "typing-vs-handwriting-upper-intermediate.html": {
        "focus": "Emphatic Inversion",
        "explanation": "Use <strong>Negative Inversions</strong> (<em>Seldom do we, Not only does, Rarely have I</em>) to form powerful, emphatic statements about technology and cognition.",
        "rule_part_a": "Complete the rule: When we start an emphatic sentence with a negative adverb, the word order changes: we place the <span class=\"grammar-gap\" data-answer=\"auxiliary verb\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> before the <span class=\"grammar-gap\" data-answer=\"subject\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Seldom <span class=\"grammar-gap\" data-answer=\"do we\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> pick up a physical pen in our fully digital workspace.",
            "Not only <span class=\"grammar-gap\" data-answer=\"does handwriting\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> stimulate cognitive hemisphere connectivity, but it also improves memory.",
            "Rarely <span class=\"grammar-gap\" data-answer=\"have I\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> experienced such satisfactory tactile feedback as on this mechanical keyboard.",
            "Only by using a stylus <span class=\"grammar-gap\" data-answer=\"can you\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> combine handwriting and digital efficiency.",
            "Under no circumstances <span class=\"grammar-gap\" data-answer=\"should schools\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> abandon teaching manual handwriting in primary education."
        ],
        "chips": ["auxiliary verb", "subject", "do we", "does handwriting", "have I", "can you", "should schools"],
        "speaking": "Formulate one emphatic statement using 'Seldom' or 'Not only' to defend either handwriting or typing.",
        "keywords": ["seldom", "not only", "rarely", "only", "should", "does", "have"]
    },
    "human-cloning-intermediate.html": {
        "focus": "First & Second Conditionals",
        "explanation": "Use the <strong>First Conditional</strong> for real possibilities, and the <strong>Second Conditional</strong> for hypothetical, imaginary, or controversial cloning scenarios.",
        "rule_part_a": "Complete the rule: The First Conditional uses Present Simple in the if-clause and <span class=\"grammar-gap\" data-answer=\"will\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + verb. The Second Conditional uses Past Simple and <span class=\"grammar-gap\" data-answer=\"would\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + verb.",
        "tasks": [
            "If researchers clone endangered animals, they <span class=\"grammar-gap\" data-answer=\"will protect\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> global biodiversity.",
            "What <span class=\"grammar-gap\" data-answer=\"would happen\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> if society banned all biotechnology advancement research?",
            "If they cloned a human, it <span class=\"grammar-gap\" data-answer=\"would violate\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the child's individual uniqueness.",
            "Scientists will not make progress unless governments <span class=\"grammar-gap\" data-answer=\"provide\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> adequate funding.",
            "If I had the chance to live forever, I <span class=\"grammar-gap\" data-answer=\"would refuse\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to clone my cells."
        ],
        "chips": ["will", "would", "will protect", "would happen", "would violate", "provide", "would refuse"],
        "speaking": "If you had the technical capability to clone a beloved deceased pet, would you do it, or would you let nature take its course?",
        "keywords": ["if", "would", "will", "unless"]
    },
    "human-cloning-upper-intermediate.html": {
        "focus": "Modals of Speculation & Deduction",
        "explanation": "Use modal structures (<strong>must be</strong>, <strong>might have been</strong>, <strong>cannot be</strong>) to speculate on cloning history and future biological constraints.",
        "rule_part_a": "Complete the rule: Use <span class=\"grammar-gap\" data-answer=\"must\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> for near-certainty in speculative arguments. Use <span class=\"grammar-gap\" data-answer=\"might\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> or 'could' for possibility, and 'cannot' for absolute impossibility.",
        "tasks": [
            "Establishing ethical boundaries for biotechnology <span class=\"grammar-gap\" data-answer=\"must be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> an urgent priority for global governments.",
            "The first successful cloning trials <span class=\"grammar-gap\" data-answer=\"might have been\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> conducted in secret.",
            "You <span class=\"grammar-gap\" data-answer=\"cannot expect\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a cloned embryo to possess the same soul or memory as the original.",
            "Slowing down scientific progress <span class=\"grammar-gap\" data-answer=\"could lead\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to delayed cures for terminal diseases.",
            "Dolly the sheep <span class=\"grammar-gap\" data-answer=\"must have suffered\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> from premature genetic aging constraints."
        ],
        "chips": ["must", "might", "must be", "might have been", "cannot expect", "could lead", "must have suffered"],
        "speaking": "Do you believe secret human cloning experiments must have already happened in hidden laboratories? Why or why not?",
        "keywords": ["must", "might", "could", "cannot", "must have"]
    },
    "assisted-dying.html": {
        "focus": "Complex Modals of Obligation",
        "explanation": "Use advanced modal verbs (<strong>ought to</strong>, <strong>should be + past participle</strong>) to construct precise, polite, and persuasive ethical assertions.",
        "rule_part_a": "Complete the rule: We use <span class=\"grammar-gap\" data-answer=\"ought to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> as a sophisticated synonym for 'should'. To build passive ethical rules, we combine the modal + <span class=\"grammar-gap\" data-answer=\"be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + past participle.",
        "tasks": [
            "Vulnerable patients <span class=\"grammar-gap\" data-answer=\"ought to be protected\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> from any subtle family or institutional pressure.",
            "The right to individual autonomy <span class=\"grammar-gap\" data-answer=\"should be balanced\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> against the sanctity of life.",
            "A terminal patient's consent <span class=\"grammar-gap\" data-answer=\"must be verified\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> by independent medical commissions.",
            "Palliative care funding <span class=\"grammar-gap\" data-answer=\"ought to be increased\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> worldwide before legislation is modified.",
            "We <span class=\"grammar-gap\" data-answer=\"ought not to make\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> critical legal changes without extensive public consultation."
        ],
        "chips": ["ought to", "be", "ought to be protected", "should be balanced", "must be verified", "ought to be increased", "ought not to make"],
        "speaking": "Ought a modern, civilized society to guarantee its citizens the right to assisted dying? What safeguards must be strictly enforced?",
        "keywords": ["ought", "should", "must", "be"]
    },
    "the-future-proof-educator.html": {
        "focus": "Double Comparatives",
        "explanation": "Use proportional <strong>Double Comparatives</strong> (<em>the more... the better...</em>) to describe educational cause-and-effect and pedagogical trends.",
        "rule_part_a": "Complete the rule: Double comparatives use: 'The' + <span class=\"grammar-gap\" data-answer=\"comparative\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + subject + verb, followed by 'the' + <span class=\"grammar-gap\" data-answer=\"comparative\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + subject + verb.",
        "tasks": [
            "The <span class=\"grammar-gap\" data-answer=\"more personalized\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the instruction is, the faster the students learn.",
            "The <span class=\"grammar-gap\" data-answer=\"greater\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> our AI literacy becomes, the more efficiently we can prepare lessons.",
            "The <span class=\"grammar-gap\" data-answer=\"harder\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> we push for standardized exams, the less time teachers have for inquiry-based learning.",
            "The <span class=\"grammar-gap\" data-answer=\"earlier\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> we foster a growth mindset, the better children adapt to modern challenges.",
            "The <span class=\"grammar-gap\" data-answer=\"more open\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the classroom management is, the more creative students' self-expression becomes."
        ],
        "chips": ["comparative", "comparative", "more personalized", "greater", "harder", "earlier", "more open"],
        "speaking": "Does pushing for higher-order thinking skills make classroom management easier? Formulate a double comparative argument.",
        "keywords": ["more", "greater", "harder", "earlier", "better", "less"]
    },
    "pedagogy-and-practice.html": {
        "focus": "The Present Subjunctive",
        "explanation": "Use the English <strong>Present Subjunctive</strong> (<em>demand that he do, suggest that she be</em>) after verbs of insistence, recommendation, or urgency.",
        "rule_part_a": "Complete the rule: In a 'that' clause following a verb of demand/suggestion, we use the <span class=\"grammar-gap\" data-answer=\"base form\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> of the verb for all subjects (including third person singular). The verb 'to be' is always written as <span class=\"grammar-gap\" data-answer=\"be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Communicative pedagogy suggests that a teacher <span class=\"grammar-gap\" data-answer=\"lower\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the affective filter in the classroom.",
            "Traditionalists insist that grammar translation <span class=\"grammar-gap\" data-answer=\"be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> maintained for absolute accuracy.",
            "We recommend that every student <span class=\"grammar-gap\" data-answer=\"practice\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> active metacognition daily.",
            "They demand that the institution <span class=\"grammar-gap\" data-answer=\"not ignore\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the benefits of physical response.",
            "It is vital that scaffolded instruction <span class=\"grammar-gap\" data-answer=\"provide\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> clear steps before independent tasks begin."
        ],
        "chips": ["base form", "be", "lower", "be", "practice", "not ignore", "provide"],
        "speaking": "If you were to design the perfect language class, what would you suggest that the teacher do to keep students motivated?",
        "keywords": ["insist", "suggest", "recommend", "demand", "be"]
    },
    "meta-subscriptions.html": {
        "focus": "The Passive Voice",
        "explanation": "Use the <strong>Passive Voice</strong> (<em>is processed, are harvested</em>) to focus on the technology or data being affected rather than the tech company itself.",
        "rule_part_a": "Complete the rule: To form the passive voice, use the appropriate tense of the verb <span class=\"grammar-gap\" data-answer=\"to be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> followed by the <span class=\"grammar-gap\" data-answer=\"past participle\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> of the main verb.",
        "tasks": [
            "Our private user data <span class=\"grammar-gap\" data-answer=\"is harvested\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> daily by massive social network algorithms.",
            "Subscription revenue <span class=\"grammar-gap\" data-answer=\"will be shared\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> directly with independent verified creators.",
            "Many spammers <span class=\"grammar-gap\" data-answer=\"are blocked\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> by charging automated bot accounts a standard fee.",
            "Your feed content <span class=\"grammar-gap\" data-answer=\"has been customized\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to maximize online engagement.",
            "Digital divide problems <span class=\"grammar-gap\" data-answer=\"are ignored\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> by ad-supported business models."
        ],
        "chips": ["to be", "past participle", "is harvested", "will be shared", "are blocked", "has been customized", "are ignored"],
        "speaking": "Do you believe our online privacy is completely violated by free networks? Argue using passive structures.",
        "keywords": ["is", "are", "been", "be", "was", "were"]
    },
    "ai-and-art.html": {
        "focus": "Cleft Sentences for Emphasis",
        "explanation": "Use <strong>Cleft Sentences</strong> starting with <em>What</em> or <em>It is...</em> to emphasize your core arguments about AI art and human genius.",
        "rule_part_a": "Complete the rule: To form a What-cleft sentence, place 'What' + clause + <span class=\"grammar-gap\" data-answer=\"is / was\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + the emphasized element. To form an It-cleft, use 'It is' + emphasized element + <span class=\"grammar-gap\" data-answer=\"that / who\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + clause.",
        "tasks": [
            "What generative AI lacks <span class=\"grammar-gap\" data-answer=\"is\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the subjective depth of human emotion.",
            "It is human craftsmanship <span class=\"grammar-gap\" data-answer=\"that\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> gives a physical canvas its historical masterpiece status.",
            "What sparks genuine artistic inspiration <span class=\"grammar-gap\" data-answer=\"is\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> suffering and real-world experience.",
            "It was copyright infringement <span class=\"grammar-gap\" data-answer=\"that\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> angered professional illustrators during neural training.",
            "What algorithmic design guarantees <span class=\"grammar-gap\" data-answer=\"is\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> flawless digital craftsmanship at zero cost."
        ],
        "chips": ["is / was", "that / who", "is", "that", "is", "that", "is"],
        "speaking": "Defend human painters. What is it that makes a human canvas superior to a generative AI masterpiece?",
        "keywords": ["what", "it is", "it was", "that", "is"]
    },
    "homework-ban.html": {
        "focus": "Gerunds as Subjects",
        "explanation": "Use <strong>Gerunds</strong> (verb + <em>-ing</em> acting as a noun) as subjects to discuss, evaluate, and debate educational policies.",
        "rule_part_a": "Complete the rule: When a gerund functions as the subject of a sentence, it always takes a <span class=\"grammar-gap\" data-answer=\"singular\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> verb (e.g. 'is' or 'helps'). A gerund is formed by adding <span class=\"grammar-gap\" data-answer=\"-ing\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to the base verb.",
        "tasks": [
            "<span class=\"grammar-gap\" data-answer=\"Banning\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> homework helps reduce students' psychological workload and academic stress.",
            "<span class=\"grammar-gap\" data-answer=\"Studying\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> under a rigid timeline can lead to premature professional burnout.",
            "Does <span class=\"grammar-gap\" data-answer=\"completing\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> complex research projects actually build independent intelligence?",
            "<span class=\"grammar-gap\" data-answer=\"Failing\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to provide structured practice limits the retention of grammar rules.",
            "Is <span class=\"grammar-gap\" data-answer=\"sitting\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> at a desk for six hours a day detrimental to child development?"
        ],
        "chips": ["singular", "-ing", "Banning", "Studying", "completing", "Failing", "sitting"],
        "speaking": "Debate with your partner: Is studying at night highly beneficial, or is having silent rest hours better for productivity?",
        "keywords": ["banning", "studying", "learning", "completing", "failing", "sitting"]
    },
    "upbringing-old-vs-modern.html": {
        "focus": "Used to & Would (Past Habits)",
        "explanation": "Use <strong>used to + infinitive</strong> for past states or habits that are no longer true, and <strong>would + infinitive</strong> only for repetitive past actions.",
        "rule_part_a": "Complete the rule: We use 'would' only to describe past repetitive <span class=\"grammar-gap\" data-answer=\"actions\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. We cannot use 'would' to describe past <span class=\"grammar-gap\" data-answer=\"states\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> (e.g., 'being a child' or 'having close ties').",
        "tasks": [
            "We used to <span class=\"grammar-gap\" data-answer=\"have\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a very close-knit community in our old neighborhood.",
            "My parents would <span class=\"grammar-gap\" data-answer=\"encourage\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> me to solve physical problems independently.",
            "Children used to <span class=\"grammar-gap\" data-answer=\"be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> more adaptable because they spent hours playing outside.",
            "Every weekend, my grandfather would <span class=\"grammar-gap\" data-answer=\"give\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> us valuable moral guidance.",
            "Modern parents did not use to <span class=\"grammar-gap\" data-answer=\"worry\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> so much about screen time and emotional safe spaces."
        ],
        "chips": ["actions", "states", "have", "encourage", "be", "give", "worry"],
        "speaking": "Recall your childhood upbringing. What activities did you use to do, and what would your parents say to keep you disciplined?",
        "keywords": ["used", "would", "accustomed", "get"]
    }
}

DATABASE_FR = {
    "la-semaine-de-4-jours.html": {
        "focus": "Le Conditionnel Présent & Passé",
        "explanation": "Utilisez le <strong>Conditionnel Présent</strong> pour exprimer une possibilité actuelle et le <strong>Conditionnel Passé</strong> pour exprimer un regret ou une hypothèse sur le passé.",
        "rule_part_a": "Complétez la règle : Le conditionnel présent se forme sur le radical du futur avec les terminaisons de <span class=\"grammar-gap\" data-answer=\"l'imparfait\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. Le conditionnel passé utilise l'auxiliaire être ou avoir au <span class=\"grammar-gap\" data-answer=\"conditionnel présent\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> suivi du participe passé.",
        "tasks": [
            "Si nous avions réduit le temps de trajet, nous <span class=\"grammar-gap\" data-answer=\"aurions évité\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> le surmenage des équipes.",
            "Les salariés <span class=\"grammar-gap\" data-answer=\"apprécieraient\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> grandement la flexibilité d'un week-end prolongé.",
            "Si la direction était plus moderne, elle <span class=\"grammar-gap\" data-answer=\"aurait lancé\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> cet essai l'année dernière.",
            "Le rendement global <span class=\"grammar-gap\" data-answer=\"serait\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> bien meilleur avec des employés reposés.",
            "Nous <span class=\"grammar-gap\" data-answer=\"aurions diminué\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> nos frais généraux si nous avions fermé le vendredi."
        ],
        "chips": ["l'imparfait", "conditionnel présent", "aurions évité", "apprécieraient", "aurait lancé", "serait", "aurions diminué"],
        "speaking": "Comment votre bien-être personnel aurait-il évolué si votre entreprise avait mis en œuvre la semaine de 4 jours plus tôt ?",
        "keywords": ["si", "serait", "aurait", "aurions", "apprécieraient"]
    },
    "l-aide-active-a-mourir.html": {
        "focus": "L'obligation et le devoir d'agir",
        "explanation": "Utilisez le verbe <strong>devoir</strong> ou la tournure impersonnelle <strong>il faut que</strong> au subjonctif pour formuler des nécessités éthiques et légales.",
        "rule_part_a": "Complétez la règle : La tournure 'il faut que' exige l'emploi du mode <span class=\"grammar-gap\" data-answer=\"subjonctif\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. Le verbe 'devoir' est quant à lui directement suivi d'un verbe à l'<span class=\"grammar-gap\" data-answer=\"infinitif\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "La loi doit <span class=\"grammar-gap\" data-answer=\"protéger\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> l'autonomie et le consentement des patients incurables.",
            "Il faut que la société <span class=\"grammar-gap\" data-answer=\"garantisse\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> l'accès universel aux soins de type palliatif.",
            "Les médecins doivent <span class=\"grammar-gap\" data-answer=\"vérifier\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> le garde-fou éthique avant tout acte.",
            "Il faut que chaque patient en phase terminale <span class=\"grammar-gap\" data-answer=\"puisse\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> choisir sa fin de vie dans la dignité.",
            "Une législation moderne devrait <span class=\"grammar-gap\" data-answer=\"encadrer\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> cette pratique humaine pour éviter tout abus."
        ],
        "chips": ["subjonctif", "infinitif", "protéger", "garantisse", "vérifier", "puisse", "encadrer"],
        "speaking": "Débattez : Faut-il que l'aide active à mourir soit encadrée par une législation stricte, ou doit-elle rester une liberté individuelle absolue ?",
        "keywords": ["doit", "doivent", "faut", "puisse", "devrait"]
    }
}

DATABASE_RU = {
    "4-dnevnaya-rabochaya-nedelya.html": {
        "focus": "Условное наклонение (Сослагательное)",
        "explanation": "Используйте частицу <strong>бы</strong> с глаголами в прошедшем времени для выражения гипотетических сценариев и условий (например, <em>Если бы мы перешли на этот график, удержание кадров улучшилось бы</em>).",
        "rule_part_a": "Заполните пропуск: Сослагательное наклонение образуется при помощи глагола в форме <span class=\"grammar-gap\" data-answer=\"прошедшего времени\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> и частицы <span class=\"grammar-gap\" data-answer=\"бы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Если бы мы сократили нагрузку, выгорание сотрудников <span class=\"grammar-gap\" data-answer=\"снизилось бы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
            "Наша продуктивность <span class=\"grammar-gap\" data-answer=\"выросла бы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, если бы руководство согласилось на эксперимент.",
            "Компания <span class=\"grammar-gap\" data-answer=\"сохранила бы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> доход, если бы вовремя оптимизировала затраты.",
            "Я <span class=\"grammar-gap\" data-answer=\"согласился бы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> работать сверхурочно ради трех выходных.",
            "Такой подход <span class=\"grammar-gap\" data-answer=\"привлек бы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> лучших специалистов на рынке."
        ],
        "chips": ["прошедшего времени", "бы", "снизилось бы", "выросла бы", "сохранила бы", "согласился бы", "привлек бы"],
        "speaking": "Согласились бы вы работать по 10 часов в день, если бы взамен у вас был гарантированный трехдневный выходной?",
        "keywords": ["бы", "если", "хотел", "мог"]
    }
}

def enrich_file(filepath, is_fr=False, is_ru=False):
    filename = os.path.basename(filepath)
    if is_fr:
        db = DATABASE_FR
        lang = "fr"
    elif is_ru:
        db = DATABASE_RU
        lang = "ru"
    else:
        db = DATABASE_EN
        lang = "en"

    data = db.get(filename)
    if not data:
        return

    print(f"Adding interactive grammar to {filename} ({lang})")

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    soup = BeautifulSoup(content, "html.parser")

    # Decompose existing grammar blocks to avoid duplication
    for el in soup.find_all(id="s-grammar"):
        el.decompose()
    for el in soup.find_all(class_="grammar"):
        el.decompose()

    # Determine labels based on language
    if is_fr:
        header_label = "🎯 Focus Linguistique (Grammaire)"
        task1a_label = "Tâche 1A : Formulation des règles"
        task1b_label = "Tâche 1B : Pratique structurée"
        task2_label = "Tâche 2 : Application orale libre"
        check_btn_label = "Vérifier"
        reset_btn_label = "Réinitialiser"
    elif is_ru:
        header_label = "🎯 Лингвистический фокус (Грамматика)"
        task1a_label = "Задание 1А: Формулирование правила"
        task1b_label = "Задание 1Б: Практика в контексте"
        task2_label = "Задание 2: Практика говения"
        check_btn_label = "Проверить"
        reset_btn_label = "Сбросить"
    else:
        header_label = "🎯 Linguistic Focus (Interactive Grammar)"
        task1a_label = "Task 1A: Rule Formulation"
        task1b_label = "Task 1B: Structured Practice"
        task2_label = "Task 2: Task-Specific Speaking Prompt"
        check_btn_label = "Verify Answers"
        reset_btn_label = "Reset Board"

    chips = list(data["chips"])
    random.shuffle(chips)

    # Terracotta styled chips (#993C1D) for Debate Club matching rules
    chips_html_list = []
    for chip in chips:
        chips_html_list.append(f'<span class="grammar-tap-chip" style="background:#FFFDF9; border:1px solid #993C1D; padding:5px 12px; border-radius:20px; cursor:pointer; font-weight:600; color:#993C1D; font-size:0.85rem; user-select:none; transition:all 0.2s;" onclick="COSY.selectGrammarChip(this)">{chip}</span>')
    chips_html = "\n            ".join(chips_html_list)

    tasks_html_list = []
    for t in data["tasks"]:
        tasks_html_list.append(f'<li style="margin-bottom:0.8rem;">{t}</li>')
    tasks_html = "\n            ".join(tasks_html_list)

    grammar_html = f"""
<div class="round-block grammar open" id="s-grammar" style="margin-bottom: 2rem;">
<div class="round-header" style="background:#FAEEE8;" onclick="COSY.toggleRound('s-grammar')">
<span>{header_label}</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block; padding: 1.5rem;">
<p class="round-note" style="margin-top: 0; font-size: 1rem; line-height: 1.6; color: var(--ink);">
{data['explanation']}
</p>
<div style="margin: 1.5rem 0;">
<div class="grammar-word-bank" style="background: #FFFDF9; border: 2px dashed #993C1D; padding: 1.25rem; border-radius: 12px; min-height: 50px;">
<strong style="display: block; margin-bottom: 0.75rem; color: #993C1D; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">📦 Word Bank (Tap to select)</strong>
<div class="grammar-chips-container" style="display: flex; flex-wrap: wrap; gap: 8px;">
{chips_html}
</div>
</div>
</div>
<div class="grammar-task-item" style="background: rgba(153, 60, 29, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #993C1D; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #993C1D;">{task1a_label}</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.8;">
{data['rule_part_a']}
</p>
</div>
<div class="grammar-task-item" style="background: rgba(153, 60, 29, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #993C1D; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #993C1D;">{task1b_label}</strong>
<ol style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--ink); line-height: 2.0;">
{tasks_html}</ol>
</div>
<div style="display:flex; gap:10px; margin-bottom:1.5rem;">
<button class="btn-verify" style="background:#993C1D; color:white; border:none; padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;" onclick="COSY.verifyGrammarGame(this)">{check_btn_label}</button>
<button class="btn-reset" style="background:transparent; border:1px solid var(--border); color:var(--muted); padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;" onclick="COSY.resetGrammarGame(this)">{reset_btn_label}</button>
</div>
<div class="grammar-task-item" style="background: rgba(153, 60, 29, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #993C1D; box-shadow: var(--shadow-sm);">
<strong style="display: block; margin-bottom: 0.5rem; color: #993C1D;">{task2_label}</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.6;">
{data['speaking']}
</p>
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

    # Write changes back
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("<!DOCTYPE html>\n" + str(soup).replace("<!DOCTYPE html>\n", "").replace("<!DOCTYPE html>", ""))

    print(f"Successfully processed {filename}")

def main():
    # Process all English files
    en_dir = "events/sessions/debatable-relatable/"
    for filename in sorted(os.listdir(en_dir)):
        if filename.endswith(".html") and not filename.startswith("template"):
            enrich_file(os.path.join(en_dir, filename), is_fr=False, is_ru=False)

    # Process all French files
    fr_dir = "events/fr/sessions/debatable-relatable/"
    for filename in sorted(os.listdir(fr_dir)):
        if filename.endswith(".html") and not filename.startswith("template"):
            enrich_file(os.path.join(fr_dir, filename), is_fr=True, is_ru=False)

    # Process all Russian files
    ru_dir = "events/ru/sessions/debatable-relatable/"
    for filename in sorted(os.listdir(ru_dir)):
        if filename.endswith(".html") and not filename.startswith("template"):
            enrich_file(os.path.join(ru_dir, filename), is_fr=False, is_ru=True)

if __name__ == "__main__":
    main()
