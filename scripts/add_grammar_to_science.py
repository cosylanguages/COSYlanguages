import os
import re
import random
from bs4 import BeautifulSoup

# Grammar database for English sessions
GRAMMAR_DATA_EN = {
    "speculative conditionals": {
        "focus": "Speculative Conditionals",
        "explanation": "Use the Second Conditional (if + Past Simple, would + verb) for imaginary present situations, and the Third Conditional (if + Past Perfect, would have + past participle) for imaginary past situations.",
        "rule_part_a": "Complete the rule: For imaginary present situations, we use <span class=\"grammar-gap\" data-answer=\"Past Simple\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in the if-clause. For hypothetical past situations, we use <span class=\"grammar-gap\" data-answer=\"Past Perfect\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in the if-clause, and <span class=\"grammar-gap\" data-answer=\"would have\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in the main clause.",
        "tasks": [
            "If hominids <span class=\"grammar-gap\" data-answer=\"had not developed\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> opposable thumbs, human history would have been completely different.",
            "If our ancestors <span class=\"grammar-gap\" data-answer=\"lacked\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> fingers, they would not be able to write with pens today.",
            "If we <span class=\"grammar-gap\" data-answer=\"were\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> physically weaker, we would rely even more heavily on technology.",
            "They <span class=\"grammar-gap\" data-answer=\"would have survived\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the ice age more easily if they had crafted better tools.",
            "What <span class=\"grammar-gap\" data-answer=\"would\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> happen if a private company patented hand-sensing gloves?"
        ],
        "chips": ["Past Simple", "Past Perfect", "would have", "had not developed", "lacked", "were", "would have survived", "would"],
        "speaking": "If humans had never developed the dexterity to create fire or tools, how would we be living today?"
    },
    "causative verbs": {
        "focus": "Causative Verbs (make, let, have, get)",
        "explanation": "Causative verbs describe how a person, AI, or event causes another to act or feel. Use 'make / let' + object + base form of verb (no 'to'). Use 'get' + object + infinitive ('to' + verb). Use 'have' + object + base form of verb.",
        "rule_part_a": "Complete the rule: Causative verbs 'make' and 'let' are followed by the <span class=\"grammar-gap\" data-answer=\"base form\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> of the verb. In contrast, 'get' requires a full <span class=\"grammar-gap\" data-answer=\"infinitive\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> with 'to'.",
        "tasks": [
            "Chatbots can make vulnerable users <span class=\"grammar-gap\" data-answer=\"believe\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> elaborate conspiracy theories.",
            "The developer had the AI <span class=\"grammar-gap\" data-answer=\"generate\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a comforting response.",
            "It is dangerous to let distorted beliefs <span class=\"grammar-gap\" data-answer=\"flourish\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> without any human intervention.",
            "How can we get people <span class=\"grammar-gap\" data-answer=\"to question\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> information they receive from chatbots?",
            "Talking to a chatbot makes me <span class=\"grammar-gap\" data-answer=\"feel\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> reassured but slightly uneasy."
        ],
        "chips": ["base form", "infinitive", "believe", "generate", "flourish", "to question", "feel"],
        "speaking": "How does interacting with AI chatbots make people feel? Can they get users to change their core beliefs?"
    },
    "past perfect vs past simple": {
        "focus": "Past Perfect vs Past Simple",
        "explanation": "Use the Past Simple for completed past actions, and the Past Perfect (had + past participle) for actions that happened before another past action.",
        "rule_part_a": "Complete the rule: Use <span class=\"grammar-gap\" data-answer=\"Past Simple\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> for the main events in a story. Use <span class=\"grammar-gap\" data-answer=\"Past Perfect\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to describe events that occurred before that main past timeline.",
        "tasks": [
            "Before the father spider <span class=\"grammar-gap\" data-answer=\"settled\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> on the eggs, the mother had already departed.",
            "Scientists discovered that the species <span class=\"grammar-gap\" data-answer=\"had evolved\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> this survival behavior millions of years ago.",
            "By the time the predator <span class=\"grammar-gap\" data-answer=\"arrived\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, the father had successfully hidden the offspring.",
            "We <span class=\"grammar-gap\" data-answer=\"had not realized\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the benefits of paternal care until this study was published.",
            "Last year, researchers <span class=\"grammar-gap\" data-answer=\"concluded\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> their long-term observation of harvestmen."
        ],
        "chips": ["Past Simple", "Past Perfect", "settled", "had evolved", "arrived", "had not realized", "concluded"],
        "speaking": "Describe a major natural phenomenon or animal behavior you had never heard of before reading scientific reports."
    },
    "passives with modal verbs": {
        "focus": "Passives with Modal Verbs",
        "explanation": "Form passives with modals using: modal verb + be + past participle (present/general) or modal verb + have been + past participle (past).",
        "rule_part_a": "Complete the rule: To form present modal passives, use <span class=\"grammar-gap\" data-answer=\"be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> followed by the <span class=\"grammar-gap\" data-answer=\"past participle\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> of the main verb.",
        "tasks": [
            "Pain signals can <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"be interpreted\">_____</span> as warning indicators for biological damage.",
            "The brain's runaway pain loops must <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"be treated\">_____</span> with advanced clinical therapy.",
            "Nociceptive hyper-sensitivity could <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"be avoided\">_____</span> if we had acted earlier.",
            "This chronic condition should <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"be managed\">_____</span> under strict medical supervision.",
            "The patient's recovery might <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"have been accelerated\">_____</span> by targeted nerve block techniques."
        ],
        "chips": ["be", "past participle", "be interpreted", "be treated", "be avoided", "be managed", "have been accelerated"],
        "speaking": "How should medical pain and chronic illnesses be treated in future hospitals? Discuss using modal passives."
    },
    "reported speech & softening devices": {
        "focus": "Reported Speech & Softening Devices",
        "explanation": "Reported speech shifts tenses back in time. Softening devices (e.g., 'It is believed that...') make claims sound less direct or aggressive.",
        "rule_part_a": "Complete the rule: When reporting opinions, present simple usually shifts to <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Past Simple\">_____</span>. Softening devices use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"passive\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> constructions like 'it is said' to reduce directness.",
        "tasks": [
            "The climate scientist claimed that researchers <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"felt\">_____</span> immense public pressure.",
            "It is widely <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"believed\">_____</span> that self-censorship is becoming common in laboratories.",
            "The meteorologist reported that the glacier <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had melted\">_____</span> entirely by 2025.",
            "Many policy-makers suggested that carbon taxes <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"should be\">_____</span> increased immediately.",
            "It has been <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"argued\">_____</span> that the report title was softened to prevent panic."
        ],
        "chips": ["Past Simple", "passive", "felt", "believed", "had melted", "should be", "argued"],
        "speaking": "Share a controversial scientific belief using reported speech and softening devices."
    },
    "verbs followed by gerunds vs infinitives": {
        "focus": "Verbs + Gerunds vs Infinitives",
        "explanation": "Some verbs are followed by gerunds (verb-ing), while others are followed by infinitives (to + verb).",
        "rule_part_a": "Complete the rule: Verbs like 'suggest', 'enjoy', and 'stop' are followed by a <span class=\"grammar-gap\" data-answer=\"gerund\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. Verbs like 'choose', 'decide', and 'fail' are followed by an <span class=\"grammar-gap\" data-answer=\"infinitive\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "rule_answers": "gerund, infinitive",
        "tasks": [
            "Many obese patients choose <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"to inject\">_____</span> GLP-1 hormone drugs.",
            "The therapy helps people stop <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"eating\">_____</span> high-calorie foods constantly.",
            "We suggest <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"monitoring\">_____</span> metabolic adaptation during weight-loss trials.",
            "They failed <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"to achieve\">_____</span> satiety through strict dieting alone.",
            "Sufferers enjoy <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"feeling\">_____</span> free from intense food cravings."
        ],
        "chips": ["gerund", "infinitive", "to inject", "eating", "monitoring", "to achieve", "feeling"],
        "speaking": "What is a healthy habit you decided to start doing, and what did you stop doing to improve your long-term health?"
    },
    "relative clauses of defining/non-defining type": {
        "focus": "Defining vs Non-Defining Relative Clauses",
        "explanation": "Defining clauses give essential information. Non-defining clauses add extra, non-essential information and are separated by commas.",
        "rule_part_a": "Complete the rule: We use <span class=\"grammar-gap\" data-answer=\"who\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> for people, and <span class=\"grammar-gap\" data-answer=\"which\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> for things. In non-defining clauses, we must use <span class=\"grammar-gap\" data-answer=\"commas\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, and we cannot use the pronoun <span class=\"grammar-gap\" data-answer=\"that\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "The wolf, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"which\">_____</span> was the pack leader, vocalized loudly.",
            "This is the monkey <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"that\">_____</span> alert call warned the entire colony.",
            "The research, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"which\">_____</span> was published in Nature, analyzed invertebrate cooperation.",
            "We met the zoologist <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"who\">_____</span> studied meerkats in the wild.",
            "The signals <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"that\">_____</span> meerkats use depend heavily on the predator type."
        ],
        "chips": ["who", "which", "commas", "that", "which", "that", "which", "who", "that"],
        "speaking": "Describe a scientific project or an animal group that you find particularly fascinating, using relative clauses."
    },
    "hypothetical 'wishes' and 'if only' constructs": {
        "focus": "Hypothetical Wishes & If Only",
        "explanation": "Use 'wish / if only' + Past Simple for present regrets, and 'wish / if only' + Past Perfect for past regrets.",
        "rule_part_a": "Complete the rule: To express a regret about the present, use 'wish' + <span class=\"grammar-gap\" data-answer=\"Past Simple\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. To express regret about a past action, use 'wish' + <span class=\"grammar-gap\" data-answer=\"Past Perfect\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "I wish humans <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"possessed\">_____</span> the natural ability to regenerate limbs.",
            "If only we <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had funded\">_____</span> blastema research decades ago.",
            "Scientists wish the cellular signaling process <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were\">_____</span> easier to control.",
            "If only the patient <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had not developed\">_____</span> an oncogenic tumor during therapy.",
            "I wish our somatic healing powers <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"could match\">_____</span> those of salamanders."
        ],
        "chips": ["Past Simple", "Past Perfect", "possessed", "had funded", "were", "had not developed", "could match"],
        "speaking": "If you could wish for one biological superpower for the human body, what would it be and why?"
    },
    "gerunds as subjects and objects": {
        "focus": "Gerunds as Subjects and Objects",
        "explanation": "A gerund (verb-ing) functions as a noun. It can be the subject of a sentence (singular verb) or the object of a verb/preposition.",
        "rule_part_a": "Complete the rule: When a gerund acts as a subject, it takes a <span class=\"grammar-gap\" data-answer=\"singular\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> verb. Gerunds are also mandatory after <span class=\"grammar-gap\" data-answer=\"prepositions\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Staying\">_____</span> active is crucial for senior cognitive reserve.",
            "Learning languages is an excellent way of <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"stimulating\">_____</span> dendritic growth.",
            "We are interested in <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"studying\">_____</span> adult hippocampal neurogenesis.",
            "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Solving\">_____</span> puzzles helps nonagenarians maintain mental health.",
            "Elders enjoy <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"sharing\">_____</span> their stories with younger generations."
        ],
        "chips": ["singular", "prepositions", "Staying", "stimulating", "studying", "Solving", "sharing"],
        "speaking": "Discuss how staying active and learning new skills benefit overall mental health as we grow older."
    },
    "comparative and superlative modifiers": {
        "focus": "Comparative & Superlative Modifiers",
        "explanation": "Use modifiers like 'far', 'slightly', 'significantly', and 'by far' to show the degree of difference in comparisons.",
        "rule_part_a": "Complete the rule: Place modifiers like 'far' or 'slightly' <span class=\"grammar-gap\" data-answer=\"before\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> comparative adjectives. Use 'by far' to emphasize <span class=\"grammar-gap\" data-answer=\"superlatives\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Concrete nouns are <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"significantly\">_____</span> faster to recall than abstract concepts.",
            "The experiment showed a <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"slightly\">_____</span> higher sensory-motor score.",
            "This is <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"by far\">_____</span> the most effective method for vocabulary acquisition.",
            "Abstract terms are <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"much\">_____</span> harder to visualize.",
            "Retrieval latency was <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"far\">_____</span> lower in the concrete word cohort."
        ],
        "chips": ["before", "superlatives", "significantly", "slightly", "by far", "much", "far"],
        "speaking": "Compare learning vocabulary with physical pictures versus word lists. Which is far more effective?"
    },
    "contrast connectors": {
        "focus": "Contrast Connectors",
        "explanation": "Contrast connectors show a difference. Connectors like 'whereas' link two clauses, while 'despite' takes a noun or gerund.",
        "rule_part_a": "Complete the rule: Use <span class=\"grammar-gap\" data-answer=\"whereas\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> or 'while' to connect two complete clauses. Use <span class=\"grammar-gap\" data-answer=\"despite\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> or 'in spite of' before noun phrases.",
        "tasks": [
            "The brain uses sparse coding, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"whereas\">_____</span> AI chips use massive energy.",
            "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Despite\">_____</span> being highly complex, artificial nodes lack biological plasticity.",
            "A biological synapse is dynamic, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"while\">_____</span> an artificial connection is static.",
            "They achieved energy efficiency <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"in spite of\">_____</span> the high processing load.",
            "Computers excel at calculation, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"conversely\">_____</span> humans excel at context."
        ],
        "chips": ["whereas", "despite", "whereas", "Despite", "while", "in spite of", "conversely"],
        "speaking": "Contrast biological brains with artificial neural networks using contrast connectors."
    },
    "adverbs of degree": {
        "focus": "Adverbs of Degree",
        "explanation": "Adverbs of degree (e.g., 'significantly', 'exceptionally', 'slightly') modify adjectives, verbs, or other adverbs to show intensity.",
        "rule_part_a": "Complete the rule: Adverbs of degree tell us 'how much'. They are usually placed <span class=\"grammar-gap\" data-answer=\"before\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the adjective or adverb they modify.",
        "tasks": [
            "Aesthetic appreciation is <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"exceptionally\">_____</span> beneficial for senior health.",
            "Cortisol levels were <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"significantly\">_____</span> lower after the art exhibition.",
            "Viewing theater is <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"highly\">_____</span> correlated with longevity.",
            "The museum layout was <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"extremely\">_____</span> relaxing for the participants.",
            "The stress reduction was <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"slightly\">_____</span> better than expected."
        ],
        "chips": ["before", "exceptionally", "significantly", "highly", "extremely", "slightly"],
        "speaking": "Describe a cultural performance or museum trip that you found exceptionally moving or extremely boring."
    },
    "cause and effect linkers": {
        "focus": "Cause and Effect Linkers",
        "explanation": "Use linkers like 'due to', 'consequently', 'therefore', and 'resulting in' to express cause-and-effect relationships.",
        "rule_part_a": "Complete the rule: Use <span class=\"grammar-gap\" data-answer=\"due to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> before a noun phrase. Use <span class=\"grammar-gap\" data-answer=\"consequently\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to begin a new independent clause showing the result.",
        "tasks": [
            "High urban particulate pollution accelerates cognitive decline <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"due to\">_____</span> systemic inflammation.",
            "The neighborhood lacks greenery; <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"consequently\">_____</span>, residents face higher stress.",
            "The factory closed, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"resulting in\">_____</span> improved local air quality.",
            "They studied spatial epidemiology; <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"therefore\">_____</span>, they understood the risk factors.",
            "Dementia rates decreased <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"as a result of\">_____</span> urban greening programs."
        ],
        "chips": ["due to", "consequently", "due to", "consequently", "resulting in", "therefore", "as a result of"],
        "speaking": "Explain how the location where we live affects our health, using cause and effect linkers."
    },
    "present perfect continuous": {
        "focus": "Present Perfect Continuous",
        "explanation": "Use Present Perfect Continuous (have/has been + verb-ing) for ongoing actions that started in the past and continue into the present.",
        "rule_part_a": "Complete the rule: Form the Present Perfect Continuous with 'have' or 'has' + <span class=\"grammar-gap\" data-answer=\"been\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + verb ending in <span class=\"grammar-gap\" data-answer=\"-ing\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Anthropologists <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"have been studying\">_____</span> the evolutionary mystery of grandmothers for decades.",
            "She <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"has been working\">_____</span> on a study about hunter-gatherer diets.",
            "They <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"have been researching\">_____</span> how elder support increases child survival.",
            "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"have been collecting\">_____</span> local ecological data since last winter.",
            "He <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"has been analyzing\">_____</span> the role of post-reproductive longevity."
        ],
        "chips": ["been", "-ing", "have been studying", "has been working", "have been researching", "have been collecting", "has been analyzing"],
        "speaking": "What personal or professional research topics have you been tracking or studying recently?"
    },
    "double comparatives": {
        "focus": "Double Comparatives",
        "explanation": "Double comparatives (the more..., the more...) describe a parallel relationship where one change directly causes another.",
        "rule_part_a": "Complete the rule: Structure double comparatives as: The + <span class=\"grammar-gap\" data-answer=\"comparative\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, the + <span class=\"grammar-gap\" data-answer=\"comparative\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "The <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"more connected\">_____</span> we are, the faster we innovate.",
            "The <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"greater\">_____</span> the collaboration, the more creative the outcome.",
            "The <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"harder\">_____</span> we work together, the better we solve problems.",
            "The <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"more open\">_____</span> the network, the more ideas flourish.",
            "The <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"slower\">_____</span> the communication, the more isolated we feel."
        ],
        "chips": ["comparative", "comparative", "more connected", "greater", "harder", "more open", "slower"],
        "speaking": "Do you believe that the more connected humanity becomes, the more creative we are? Discuss using double comparatives."
    },
    "used to / would for childhood memories": {
        "focus": "Used to vs Would",
        "explanation": "Use 'used to' for both past habits and past states. Use 'would' only for repeated past actions, never for past states.",
        "rule_part_a": "Complete the rule: Use <span class=\"grammar-gap\" data-answer=\"used to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> for past states (like 'be' or 'have'). Use either 'used to' or <span class=\"grammar-gap\" data-answer=\"would\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> for repeated actions.",
        "tasks": [
            "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"used to\">_____</span> have a beautiful wooden playground near our house.",
            "My grandfather <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would take\">_____</span> us to the park every Sunday.",
            "I <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"used to feel\">_____</span> anxious when public events were crowded.",
            "She <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would tell\">_____</span> us stories about her own childhood.",
            "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"used to live\">_____</span> in a small countryside cottage."
        ],
        "chips": ["used to", "would", "used to", "would take", "used to feel", "would tell", "used to live"],
        "speaking": "Describe the games, stories, or activities you used to do with your grandparents when you were a child."
    },
    "relative clauses": {
        "focus": "Relative Clauses",
        "explanation": "Relative clauses describe a noun using relative pronouns like 'who', 'which', 'whose', 'where', or 'whom'.",
        "rule_part_a": "Complete the rule: Use <span class=\"grammar-gap\" data-answer=\"whose\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> for possession, <span class=\"grammar-gap\" data-answer=\"where\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> for places, and <span class=\"grammar-gap\" data-answer=\"whom\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> after prepositions in formal speech.",
        "tasks": [
            "This is the scientist <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"whose\">_____</span> paper on lateralization won an award.",
            "He was the researcher with <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"whom\">_____</span> I discussed right-handedness.",
            "There is a lab <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"where\">_____</span> motor coordination tests are conducted.",
            "Right-handedness is a trait <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"which\">_____</span> is highly common in humans.",
            "She is the student <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"who\">_____</span> scored best on dexterity tests."
        ],
        "chips": ["whose", "where", "whom", "whose", "whom", "where", "which", "who"],
        "speaking": "Describe a complex motor skill (like knitting or playing piano) whose learning process you found challenging."
    },
    "phrasal verbs with 'look'": {
        "focus": "Phrasal Verbs with 'Look'",
        "explanation": "Phrasal verbs with 'look' have distinct meanings based on their particle (e.g., look into = investigate, look up to = admire).",
        "rule_part_a": "Complete the rule: To investigate a problem is to <span class=\"grammar-gap\" data-answer=\"look into\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. To anticipate something with pleasure is to <span class=\"grammar-gap\" data-answer=\"look forward to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + verb-ing.",
        "tasks": [
            "We must <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"look into\">_____</span> the problem of social media identity fraud.",
            "Always <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"look out for\">_____</span> suspicious messages or fake badges.",
            "I highly <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"look up to\">_____</span> the scientists who investigate cyber-crimes.",
            "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"look forward to\">_____</span> seeing new trust verification systems.",
            "The agency will <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"look over\">_____</span> the evidence next week."
        ],
        "chips": ["look into", "look forward to", "look into", "look out for", "look up to", "look forward to", "look over"],
        "speaking": "What kind of technological changes or scientific discoveries are you most looking forward to seeing in the near future?"
    },
    "future passive voice": {
        "focus": "Future Passive Voice",
        "explanation": "Use the future passive (will + be + past participle) to talk about events or actions that will be performed on a receiver in the future.",
        "rule_part_a": "Complete the rule: The future passive consists of 'will' + <span class=\"grammar-gap\" data-answer=\"be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> followed by the <span class=\"grammar-gap\" data-answer=\"past participle\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> of the main verb.",
        "tasks": [
            "Fusion energy will <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"be commercialized\">_____</span> within the next fifty years.",
            "Sustained net energy will <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"be achieved\">_____</span> by advanced tokamak systems.",
            "New laser-ignition plants will <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"be built\">_____</span> across the continent.",
            "Dangerous carbon emissions will <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"be reduced\">_____</span> significantly by then.",
            "These fusion systems will <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"be integrated\">_____</span> into our smart grids."
        ],
        "chips": ["be", "past participle", "be commercialized", "be achieved", "be built", "be reduced", "be integrated"],
        "speaking": "Do you believe that all global energy demands will eventually be supplied by green fusion power?"
    },
    "passive voice vs active voice in news": {
        "focus": "Passive vs Active Voice in News",
        "explanation": "Use active voice when the actor is important, and passive voice (be + past participle) when the action or receiver is the main focus.",
        "rule_part_a": "Complete the rule: In active sentences, the subject <span class=\"grammar-gap\" data-answer=\"performs\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the action. In passive sentences, the subject <span class=\"grammar-gap\" data-answer=\"receives\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the action.",
        "tasks": [
            "Digital screen saturation <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"accelerates\">_____</span> native lexical attrition.",
            "Vocabulary ranges <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were contracted\">_____</span> by fifteen percent over the decade.",
            "Researchers <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"conducted\">_____</span> a ten-year study on teen speech.",
            "Many traditional spoken words are <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"being lost\">_____</span> due to digital slang.",
            "A comprehensive article <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"was published\">_____</span> by the linguist last week."
        ],
        "chips": ["performs", "receives", "accelerates", "were contracted", "conducted", "being lost", "was published"],
        "speaking": "Should the decay of traditional languages be actively fought by schools, or is it a natural change?"
    },
    "inversion with negative adverbials": {
        "focus": "Inversion with Negative Adverbials",
        "explanation": "When a negative or restrictive adverbial (e.g., 'Seldom', 'Rarely', 'Under no circumstances') starts a sentence, invert the subject and auxiliary verb.",
        "rule_part_a": "Complete the rule: After a negative adverbial, use subject-verb <span class=\"grammar-gap\" data-answer=\"inversion\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. If there is no auxiliary, use <span class=\"grammar-gap\" data-answer=\"do/does/did\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Seldom <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"do we make\">_____</span> purely rational negotiations in unfair situations.",
            "Rarely <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"did they expect\">_____</span> such high levels of insula activation.",
            "Under no circumstances <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"should we trust\">_____</span> irrational emotional urges.",
            "Only after the game theory test <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"did they realize\">_____</span> their unconscious biases.",
            "Seldom <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"has a study\">_____</span> generated so much public interest."
        ],
        "chips": ["inversion", "do/does/did", "do we make", "did they expect", "should we trust", "did they realize", "has a study"],
        "speaking": "Seldom do people realize how easily their emotions override logic. Talk about a time when you made an impulsive choice."
    },
    "speculative continuous conditions": {
        "focus": "Speculative Continuous Conditionals",
        "explanation": "Use continuous tenses in conditional clauses (e.g., 'If the gene were mutating...') to describe ongoing imaginary situations.",
        "rule_part_a": "Complete the rule: To express an ongoing hypothetical state, use the continuous form (were + verb <span class=\"grammar-gap\" data-answer=\"-ing\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>) in the if-clause.",
        "tasks": [
            "If the selfish gene-drive <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were mutating\">_____</span> right now, the mice cohorts would react.",
            "If scientists <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were conducting\">_____</span> the test today, we would see the results.",
            "If they <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were running\">_____</span> the simulation, they would find the inheritance bias.",
            "If biological laws <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were breaking\">_____</span>, genetics would be in chaos.",
            "If you <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were studying\">_____</span> gene inheritance, what species would you choose?"
        ],
        "chips": ["-ing", "were mutating", "were conducting", "were running", "were breaking", "were studying"],
        "speaking": "If you were currently working in a state-of-the-art genetics laboratory, what research would you be conducting?"
    },
    "basic comparisons and descriptors": {
        "focus": "Basic Comparisons & Descriptors",
        "explanation": "Use comparative adjectives (adjective + -er or more + adjective) + than to compare two objects, animals, or actions.",
        "rule_part_a": "Complete the rule: Add <span class=\"grammar-gap\" data-answer=\"-er\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to short adjectives. Use <span class=\"grammar-gap\" data-answer=\"more\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> before long adjectives, followed by the word <span class=\"grammar-gap\" data-answer=\"than\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Human speech is much <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"louder\">_____</span> than ape laughter.",
            "A chimpanzee is <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"smarter\">_____</span> than a typical house pet.",
            "Laughter is <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"more common\">_____</span> than speech during primate play.",
            "Ape breathing control is <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"simpler\">_____</span> than human articulation.",
            "This scientific experiment is <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"more interesting\">_____</span> than the last one."
        ],
        "chips": ["-er", "more", "than", "louder", "smarter", "more common", "simpler", "more interesting"],
        "speaking": "Compare human communication to animal sounds. Which is more interesting or more complex?"
    },
    "modal verbs of deduction and comparison": {
        "focus": "Modal Verbs of Deduction",
        "explanation": "Use modal verbs like 'must', 'might', 'could', and 'can't' to make deductions based on current evidence.",
        "rule_part_a": "Complete the rule: Use <span class=\"grammar-gap\" data-answer=\"must\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> when you are 100% certain something is true. Use <span class=\"grammar-gap\" data-answer=\"can't\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> when you are certain it is impossible.",
        "tasks": [
            "Ape play tickling <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"must be\">_____</span> closely related to human speech origins.",
            "They <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"could not\">_____</span> speak because their breathing was too limited.",
            "This acoustic overlap <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"might explain\">_____</span> how early phonemes developed.",
            "The researchers <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"must have\">_____</span> verified their results before publishing.",
            "That sound <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"can't be\">_____</span> a bird call; it sounds exactly like a chimpanzee."
        ],
        "chips": ["must", "can't", "must be", "could not", "might explain", "must have", "can't be"],
        "speaking": "Look at a weird pet behavior. Speculate using 'must' and 'might' to explain why they do it."
    },
    "adverbs of frequency": {
        "focus": "Adverbs of Frequency",
        "explanation": "Adverbs of frequency (always, usually, sometimes, never) show how often an action happens.",
        "rule_part_a": "Complete the rule: Place adverbs of frequency <span class=\"grammar-gap\" data-answer=\"before\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the main verb, but <span class=\"grammar-gap\" data-answer=\"after\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the verb 'to be'.",
        "tasks": [
            "Active seniors <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"always\">_____</span> have better somatic health indicators.",
            "Visiting museums is <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"often\">_____</span> highly beneficial.",
            "They <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"sometimes\">_____</span> go to the local theater on Saturday evenings.",
            "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"never\">_____</span> miss our weekly physical activity sessions.",
            "The museum is <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"usually\">_____</span> crowded during national holidays."
        ],
        "chips": ["before", "after", "always", "often", "sometimes", "never", "usually"],
        "speaking": "How often do you visit galleries, watch films, or do active hobbies to relax?"
    },
    "prepositions of place": {
        "focus": "Prepositions of Place",
        "explanation": "Prepositions of place (near, behind, between, next to) describe where something is located in physical space.",
        "rule_part_a": "Complete the rule: Prepositions of place show the position of one object <span class=\"grammar-gap\" data-answer=\"in relation to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> another object.",
        "tasks": [
            "Living <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"near\">_____</span> a green park reduces cognitive decline risks.",
            "The laboratory is located <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"next to\">_____</span> the university library.",
            "There is a small garden built <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"between\">_____</span> the two main buildings.",
            "They sat <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"under\">_____</span> the shade of a big oak tree.",
            "The particulate sensor was placed <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"behind\">_____</span> the traffic station."
        ],
        "chips": ["in relation to", "near", "next to", "between", "under", "behind"],
        "speaking": "Describe the location of your favorite outdoor green spaces or parks in your city."
    }
}

# French specific grammar database
GRAMMAR_DATA_FR = {
    "phrasal verbs with 'look'": {
        "focus": "Verbes prépositionnels avec 'look'",
        "explanation": "Les verbes à particule (phrasal verbs) avec 'look' ont des significations différentes selon la préposition (ex. look into = enquêter, look up to = admirer).",
        "rule_part_a": "Complétez la règle : Pour dire enquêter, on utilise <span class=\"grammar-gap\" data-answer=\"look into\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. Pour dire anticiper avec plaisir, on utilise <span class=\"grammar-gap\" data-answer=\"look forward to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + verbe en -ing.",
        "tasks": [
            "Nous devons <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"look into\">_____</span> ce problème d'usurpation d'identité.",
            "Il faut toujours <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"look out for\">_____</span> les faux profils ou messages suspects.",
            "J'admire beaucoup (<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"look up to\">_____</span>) les experts en cybersécurité.",
            "Nous avons hâte de (<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"look forward to\">_____</span>) tester les nouveaux badges.",
            "L'agence va examiner (<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"look over\">_____</span>) les preuves recueillies."
        ],
        "chips": ["look into", "look forward to", "look into", "look out for", "look up to", "look forward to", "look over"],
        "speaking": "Quels types de progrès technologiques ou de mesures de sécurité avez-vous hâte de voir à l'avenir ?"
    },
    "le conditionnel présent": {
        "focus": "Le conditionnel présent (les hypothèses de sécurité)",
        "explanation": "Le conditionnel présent est utilisé pour exprimer des actions soumises à une condition (si + imparfait -> conditionnel présent) ou pour formuler des conseils et des hypothèses de manière douce.",
        "rule_part_a": "Complétez la règle : Pour exprimer une hypothèse sur le présent, on utilise le <span class=\"grammar-gap\" data-answer=\"conditionnel présent\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> dans la proposition principale, tandis que la proposition introduite par 'si' est à l'<span class=\"grammar-gap\" data-answer=\"imparfait\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Si un pirate <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"obtenait\">_____</span> mes identifiants, il pourrait accéder à mes données.",
            "Nous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"devrions\">_____</span> activer la vérification à deux facteurs pour plus de sécurité.",
            "S'ils <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"faisaient\">_____</span> plus attention, ils éviteraient le hameçonnage.",
            "Je <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"voudrais\">_____</span> bien changer mes mots de passe régulièrement.",
            "Dans un monde idéal, aucun profil frauduleux ne <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"pourrait\">_____</span> exister."
        ],
        "chips": ["conditionnel présent", "imparfait", "obtenait", "devrions", "faisaient", "voudrais", "pourrait"],
        "speaking": "Si vous étiez victime d'une usurpation d'identité en ligne, quelles mesures immédiates prendriez-vous pour sécuriser vos comptes ?"
    }
}

# Russian specific grammar database
GRAMMAR_DATA_RU = {
    "сложные союзы и вводные слова": {
        "focus": "Сложные союзы и вводные слова",
        "explanation": "Сложные союзы (в то время как, в силу того что) и вводные слова (по-видимому, следовательно) помогают логически связывать аргументы в научной дискуссии.",
        "rule_part_a": "Заполните правило: Вводные слова выражают отношение говорящего к мысли и выделяются <span class=\"grammar-gap\" data-answer=\"запятыми\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. Сложные союзы связывают части <span class=\"grammar-gap\" data-answer=\"сложного\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> предложения.",
        "tasks": [
            "Медиавоздействие, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"по-видимому\">_____</span>, снижает порог критической оценки у подростков.",
            "Дети уязвимы, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"следовательно\">_____</span>, манипуляция в новостях достигает цели быстрее.",
            "Мы верим информации, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"в то время как\">_____</span> ученые советуют сохранять критичность.",
            "Пропаганда опасна <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"в силу того что\">_____</span> она подавляет свободный выбор.",
            "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Таким образом\">_____</span>, близкое окружение играет важнейшую роль."
        ],
        "chips": ["запятыми", "сложного", "по-видимому", "следовательно", "в то время как", "в силу того что", "Таким образом"],
        "speaking": "Опишите влияние рекламы или пропаганды на подрастающее поколение, используя сложные союзы и вводные слова."
    }
}

# Word mapping to fix missing words in ai-reality-delusion.html questions
AI_REALITY_DELUSION_FIXES = {
    "How can an AI chatbot reinforce a user's distorted ?": "How can an AI chatbot reinforce a user's distorted <strong>delusion</strong>?",
    "Why do vulnerable people rely on chatbots to  their opinions?": "Why do <strong>vulnerable</strong> people rely on chatbots to seek <strong>validation</strong> for their opinions?",
    "Some chatbots are designed to sound companion-like. Could this constant  become emotionally dangerous?": "Some chatbots are designed to sound companion-like. Could this constant <strong>reassurance</strong> become emotionally dangerous?",
    "Why might vulnerable or lonely people rely heavily on AI conversations?": "Why might <strong>vulnerable</strong> or lonely people rely heavily on AI conversations?",
    "The researchers mention conspiracy theories being reinforced by AI. Why are conspiracy theories so attractive to some people?": "The researchers mention <strong>conspiracy theories</strong> being reinforced by AI. Why are <strong>conspiracy theories</strong> so attractive to some people?",
    "How does an AI  affect a person's grasp of reality?": "How does an AI <strong>hallucination</strong> affect a person's grasp of reality?",
    "Should AI systems push back more instead of always offering  to irrational ideas?": "Should AI systems push back more instead of always offering <strong>reassurance</strong> to irrational ideas?",
    "How can conversational AI lead to  views of reality compared to traditional notebooks?": "How can conversational AI lead to <strong>distorted</strong> views of reality compared to traditional notebooks?",
    "Can artificial relationships ever help our emotional lives  as much as real ones?": "Can artificial relationships ever help our emotional lives <strong>flourish</strong> as much as real ones?",
    "Do people feel safer when an AI builds an  but false story to support their ideas?": "Do people feel safer when an AI builds an <strong>elaborate</strong> but false story to support their ideas?"
}

def normalize_key(focus):
    if not focus:
        return ""
    focus = focus.lower().strip()
    focus = re.sub(r'\(.*?\)', '', focus).strip()
    focus = focus.replace('.', '').strip()
    focus = focus.replace('&', 'and').strip()
    # simplify common strings
    if "make vs do" in focus or "make' vs 'do" in focus:
        return "distinguishing 'make' vs 'do'"
    if "past perfect vs past simple" in focus:
        return "past perfect vs past simple"
    if "reported speech" in focus:
        return "reported speech & softening devices"
    if "adverbs of frequency" in focus:
        return "adverbs of frequency"
    if "prepositions of place" in focus:
        return "prepositions of place"
    if "phrasal verbs" in focus and "look" in focus:
        return "phrasal verbs with 'look'"
    return focus

def get_grammar_data(normalized_focus, lang):
    if lang == "ru":
        return GRAMMAR_DATA_RU.get(normalized_focus)
    elif lang == "fr":
        return GRAMMAR_DATA_FR.get(normalized_focus)
    else:
        return GRAMMAR_DATA_EN.get(normalized_focus)

def enrich_file_with_grammar(filepath, lang):
    filename = os.path.basename(filepath)
    print(f"Reading: {filepath}")

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    soup = BeautifulSoup(content, "html.parser")

    # 1. Read level and linguistic focus
    meta_grid = soup.find(class_="session-meta-grid")
    level = "B1 – C2"
    if meta_grid:
        level_el = meta_grid.find(string=re.compile("Level|Уровень"))
        if level_el:
            val_el = level_el.find_parent().find_next_sibling()
            if val_el:
                level = val_el.get_text().strip()

    # Find the Linguistic Focus / Грамматический фокус
    focus = None
    log_box = soup.find(class_="science-journal-box")
    if log_box:
        items = log_box.find_all(class_="science-journal-item")
        for item in items:
            h5 = item.find("h5") or item.find("h4")
            if h5 and h5.get_text().strip() in ["Linguistic Focus", "Грамматический фокус", "Linguistic focus"]:
                focus = item.find("p").get_text().strip()

    # If no journal box, add it first!
    if not log_box:
        # Determine for the two elementary files
        if "museums-movies-theater-stay-younger-elementary" in filename:
            focus = "Adverbs of frequency"
            subject = "Primate Cultural Gerontology"
            hypothesis = "Aesthetic activities promote overall vitality."
            findings = "Regular museum visits correlate with stress reduction."
        elif "where-you-live-shapes-dementia-risk-elementary" in filename:
            focus = "Prepositions of place"
            subject = "Spatial Epidemiology"
            hypothesis = "Proximity to green parks improves neural health."
            findings = "Living near trees corresponds with higher resilience."
        else:
            focus = "Adverbs of frequency"
            subject = "Scientific Inquiry"
            hypothesis = "Requires empirical validation."
            findings = "Continuous observation in progress."

        # Insert Field Journal box right after session-meta-grid
        journal_html = f"""
<div class="science-journal-box">
  <h3 class="science-journal-title">🔬 Field Journal Research Log</h3>
  <div class="science-journal-grid">
    <div class="science-journal-item">
      <h5>Specimen / Topic</h5>
      <p>{subject}</p>
    </div>
    <div class="science-journal-item">
      <h5>Primary Hypothesis</h5>
      <p>{hypothesis}</p>
    </div>
    <div class="science-journal-item">
      <h5>Experimental Findings</h5>
      <p>{findings}</p>
    </div>
    <div class="science-journal-item">
      <h5>Linguistic Focus</h5>
      <p>{focus}</p>
    </div>
  </div>
</div>
"""
        if meta_grid:
            meta_grid.insert_after(BeautifulSoup(journal_html, "html.parser"))
            print(f"Added Field Journal box to {filename}")

    norm_focus = normalize_key(focus)
    gdata = get_grammar_data(norm_focus, lang)

    if not gdata:
        print(f"⚠️ No grammar data mapped for normalized focus '{norm_focus}' in file {filename}. Skipping practice injection.")
        return False

    print(f"Enriching {filename} with grammar practice: {gdata['focus']}")

    # 2. Decompose existing grammar block if any
    for old_g in soup.find_all(class_="grammar"):
        old_g.decompose()
    for old_id in soup.find_all(id="s-grammar"):
        old_id.decompose()

    # 3. Build HTML of the grammar block
    # Randomize the chips
    chips = list(gdata["chips"])
    unique_chips = list(dict.fromkeys(chips))
    random.shuffle(unique_chips)

    chips_html_list = []
    # Style the chips beautifully for the science club green color!
    for chip in unique_chips:
        chips_html_list.append(f'<span class="grammar-tap-chip" style="background:#FFFDF9; border:1px solid #0F6E56; padding:5px 12px; border-radius:20px; cursor:pointer; font-weight:600; color:#0F6E56; font-size:0.85rem; user-select:none; transition:all 0.2s;" onclick="COSY.selectGrammarChip(this)">{chip}</span>')
    chips_html = "\n            ".join(chips_html_list)

    tasks_html_list = []
    for t in gdata["tasks"]:
        tasks_html_list.append(f'<li>{t}</li>')
    tasks_html = "\n            ".join(tasks_html_list)

    # Use localized texts if lang is Russian
    title_label = "⚡ Грамматика — " if lang == "ru" else "⚡ Grammar Practice — "
    explanation_label = "⚡ Грамматическое объяснение (" if lang == "ru" else "⚡ Grammar Explanation ("
    word_bank_label = "🧩 Интерактивный банк слов:" if lang == "ru" else "🧩 Interactive Word Bank:"
    word_bank_help = "Нажмите на слово ниже, затем нажмите на пустые скобки <code>[_____]</code> для его размещения!" if lang == "ru" else "Tap a word chip below, then tap any empty bracket <code>[_____]</code> to place it!"
    task1a_label = "📝 Задание 1 — Часть А: Формулировка правила:" if lang == "ru" else "📝 Task 1 — Part A: Rule Formulation:"
    task1b_label = "📝 Задание 1 — Часть Б: Практические предложения:" if lang == "ru" else "📝 Task 1 — Part B: Structured Practice:"
    check_btn_label = "Проверить ответы" if lang == "ru" else "Check Answers"
    reset_btn_label = "Сбросить доску" if lang == "ru" else "Reset Board"
    task2_label = "🗣️ Задание 2 — Практика устной речи:" if lang == "ru" else "🗣️ Task 2 — Interactive Speaking:"

    grammar_html = f"""<div class="round-block grammar open" id="s-grammar">
<div class="round-header" onclick="COSY.toggleRound('s-grammar')" style="background:#E1F5EE; border-left: 5px solid #0F6E56;">
<span>{title_label}{gdata['focus']}</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block; padding:1.5rem 1.25rem;">
<div class="grammar-interactive-game" style="position:relative; z-index:2;">
<h3>{explanation_label}{level})</h3>
<p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">
{gdata['explanation']}
</p>
<div style="background: rgba(15, 110, 86, 0.03); border: 1px dashed rgba(15, 110, 86, 0.3); padding: 1.25rem; border-radius: 12px; margin-bottom: 1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #07372b;">{word_bank_label}</strong>
<p style="font-size:0.82rem; color:var(--muted); margin:0 0 0.75rem 0;">{word_bank_help}</p>
<div class="grammar-word-bank" style="display:flex; flex-wrap:wrap; gap:8px;">
{chips_html}
</div>
</div>
<div class="grammar-task-item" style="background: rgba(15, 110, 86, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #0F6E56; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #07372b;">{task1a_label}</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.8;">
{gdata['rule_part_a']}
</p>
</div>
<div class="grammar-task-item" style="background: rgba(15, 110, 86, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #0F6E56; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #07372b;">{task1b_label}</strong>
<ol style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--ink); line-height: 2.0;">
{tasks_html}</ol>
</div>
<div style="display:flex; gap:10px; margin-bottom:1.5rem;">
<button class="btn-verify" onclick="COSY.verifyGrammarGame(this)" style="background:#0F6E56; color:white; border:none; padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;">{check_btn_label}</button>
<button class="btn-reset" onclick="COSY.resetGrammarGame(this)" style="background:transparent; border:1px solid var(--border); color:var(--muted); padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;">{reset_btn_label}</button>
</div>
<div class="grammar-task-item" style="background: rgba(15, 110, 86, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #0F6E56; box-shadow: var(--shadow-sm);">
<strong style="display: block; margin-bottom: 0.5rem; color: #07372b;">{task2_label}</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.6;">
{gdata['speaking']}
</p>
</div>
</div>
</div>
</div>"""

    # 4. Insert grammar practice block immediately after Warm-up (s-warm)
    warmup_block = soup.find(id="s-warm")
    grammar_block_soup = BeautifulSoup(grammar_html, "html.parser")
    if warmup_block:
        warmup_block.insert_after(grammar_block_soup)
    else:
        rounds_container = soup.find(class_="rounds-container")
        if rounds_container:
            rounds_container.insert(0, grammar_block_soup)

    # 5. Weave grammar structures into Round 1 and Round 2 questions/statements where possible and appropriate!
    # For English files, let's bold some matching grammar words in existing questions to keep handcrafted feel
    # E.g., bolding modals, conditionals, gerunds, relative pronouns, etc.
    # Let's write a small list of grammatical keywords depending on the grammar category:
    GRAMMAR_KEYWORDS = {
        "speculative conditionals": ["would", "could", "had", "were", "if"],
        "past perfect vs past simple": ["had", "discovered", "concluded", "before", "by the time"],
        "passives with modal verbs": ["can be", "must be", "should be", "could be", "interpreted", "treated", "managed"],
        "reported speech & softening devices": ["claimed", "believed", "reported", "suggested", "argued", "that"],
        "verbs followed by gerunds vs infinitives": ["eating", "feeling", "craving", "inject", "satiety", "choose to", "suggest"],
        "relative clauses of defining/non-defining type": ["which", "who", "that", "whose"],
        "hypothetical 'wishes' and 'if only' constructs": ["wish", "wishes", "if only", "could", "would"],
        "gerunds as subjects and objects": ["learning", "exercising", "living", "sharing", "stimulating", "staying"],
        "comparative and superlative modifiers": ["faster", "superior", "more", "far", "significantly", "slightly"],
        "contrast connectors": ["whereas", "while", "although", "despite", "on the contrary"],
        "adverbs of degree": ["significantly", "exceptionally", "highly", "extremely", "slightly"],
        "cause and effect linkers": ["due to", "consequently", "therefore", "resulting in", "as a result"],
        "present perfect continuous": ["have been", "has been", "studying", "working", "researching"],
        "double comparatives": ["the more", "the greater", "the harder", "the faster"],
        "used to / would for childhood memories": ["used to", "would", "remember"],
        "relative clauses": ["whose", "where", "whom", "who", "which"],
        "causative verbs": ["make", "let", "have", "get", "believe", "generate", "flourish", "feel", "question"],
        "le conditionnel présent": ["obtenait", "devrions", "faisaient", "voudrais", "pourrait", "si"],
        "distinguishing 'make' vs 'do'": ["make", "do", "research", "experiment", "decision"],
        "phrasal verbs with 'look'": ["look into", "look forward to", "look out for", "look up to"],
        "future passive voice": ["will be", "commercialized", "achieved", "built", "reduced"],
        "passive voice vs active voice in news": ["were", "are", "by", "conducted", "published", "lost"],
        "speculative continuous conditions": ["were mutating", "were conducting", "were running", "were studying"],
        "basic comparisons and descriptors": ["more", "-er", "than"],
        "modal verbs of deduction and comparison": ["must", "might", "could", "can't"],
        "adverbs of frequency": ["always", "usually", "often", "sometimes", "never"],
        "prepositions of place": ["near", "next to", "between", "under", "behind"],
        "сложные союзы и вводные слова": ["следовательно", "по-видимому", "в то время как", "в силу того что", "таким образом"]
    }

    keywords = GRAMMAR_KEYWORDS.get(norm_focus, [])

    # Process both Round 1 and Round 2
    for r_class in ["round-1", "round-2"]:
        r_block = soup.find(class_=r_class)
        if r_block:
            items = r_block.find_all(class_="round-item")
            for item in items:
                main_div = item.find(class_="round-item-main")
                if main_div:
                    text = main_div.get_text()

                    # Specific fixes for ai-reality-delusion missing words
                    if filename == "ai-reality-delusion.html":
                        clean_t = text.strip()
                        if clean_t in AI_REALITY_DELUSION_FIXES:
                            text = AI_REALITY_DELUSION_FIXES[clean_t]
                            # Update directly and skip the rest of keywording
                            main_div.clear()
                            main_div.append(BeautifulSoup(text, "html.parser"))
                            continue

                    # General keyword formatting for grammar weaving
                    for kw in keywords:
                        # Find occurrences of the keyword (case-insensitive) and wrap in <strong> if not already bolded
                        # We must be careful not to bold inside an already existing tag like <strong>
                        # Let's perform a simple regex substitution that avoids modifying text inside <> tags
                        # Wait, we can safely replace exact word boundaries of the keyword
                        pattern = re.compile(rf'\b({re.escape(kw)})\b', re.IGNORECASE)
                        # Avoid matching keywords that are already inside <strong> or <u>
                        # For simplicity, we can do substitution on the inner text
                        # but BeautifulSoup's clear and append handles nested HTML perfectly.
                        # Let's only do regex sub if '<strong>' + kw + '</strong>' is not already there.
                        # We can replace the word with <strong>word</strong> if it's not wrapped.
                        # Let's do a safe string replacement:
                        def sub_fn(match):
                            word = match.group(1)
                            # Return bolded word
                            return f"<strong>{word}</strong>"
                        # Apply pattern substitution but let's make sure we don't end up with nested strong tags like <strong><strong>word</strong></strong>
                        text = pattern.sub(sub_fn, text)
                        # Clean up any potential double strong tags
                        text = text.replace("<strong><strong>", "<strong>").replace("</strong></strong>", "</strong>")

                    main_div.clear()
                    main_div.append(BeautifulSoup(text, "html.parser"))

    # 6. Save modified HTML back to the file
    with open(filepath, "w", encoding="utf-8") as f:
        # standard HTML structure format
        f.write("<!DOCTYPE html>\n" + str(soup).replace("<!DOCTYPE html>\n", "").replace("<!DOCTYPE html>", ""))

    print(f"✔️ Successfully enriched {filename}")
    return True

def main():
    # 1. Process English sessions
    science_dir = "events/sessions/keeping-up-with-science"
    files = sorted([f for f in os.listdir(science_dir) if f.endswith(".html") and not f.startswith("template")])
    for filename in files:
        filepath = os.path.join(science_dir, filename)
        enrich_file_with_grammar(filepath, "en")

    # 2. Process French session
    fr_file = "events/fr/sessions/keeping-up-with-science/impersonation-accounts.html"
    if os.path.exists(fr_file):
        enrich_file_with_grammar(fr_file, "fr")

    # 3. Process Russian session
    ru_file = "events/ru/sessions/keeping-up-with-science/vliyanie-propagandy-deti.html"
    if os.path.exists(ru_file):
        enrich_file_with_grammar(ru_file, "ru")

if __name__ == "__main__":
    main()
