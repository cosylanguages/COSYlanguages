import os
import re
import random
from bs4 import BeautifulSoup

DATABASE_EN = {
    "is-bad-weather-gods-anger.html": {
        "focus": "Speculative Past Tenses",
        "explanation": "Use modal perfects (<strong>must have</strong>, <strong>could have</strong>, <strong>might have</strong> + past participle) to speculate about past events based on present or historical evidence.",
        "rule_part_a": "Complete the rule: To speculate about the past with absolute certainty, we use <span class=\"grammar-gap\" data-answer=\"must have\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. For possibilities or doubts, we use <span class=\"grammar-gap\" data-answer=\"might have\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> or <span class=\"grammar-gap\" data-answer=\"could have\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> followed by the past participle of the verb.",
        "tasks": [
            "Ancient people <span class=\"grammar-gap\" data-answer=\"must have believed\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> that storms were angry messages from the gods.",
            "A volcanic eruption <span class=\"grammar-gap\" data-answer=\"could have caused\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the sudden collapse of that ancient city.",
            "They <span class=\"grammar-gap\" data-answer=\"might not have understood\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> atmospheric pressure, but they had great stories.",
            "Why <span class=\"grammar-gap\" data-answer=\"would they have offered\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> sacrifices if they knew the weather was random?",
            "Nature <span class=\"grammar-gap\" data-answer=\"might have inspired\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> those mythological legends."
        ],
        "chips": ["must have", "might have", "could have", "must have believed", "could have caused", "might not have understood", "would they have offered", "might have inspired"],
        "speaking": "Speculate about why ancient humans built Stonehenge or other stone circles. What must or could they have been trying to achieve?",
        "keywords": ["must have", "could have", "might have", "would have", "wrath", "deity"]
    },
    "do-insects-hide-when-it-rains.html": {
        "focus": "Present Conditionals",
        "explanation": "Use the <strong>Second Conditional</strong> (if + Past Simple, would + base verb) to talk about imaginary, hypothetical, or highly unlikely present situations.",
        "rule_part_a": "Complete the rule: In the Second Conditional, the if-clause uses the <span class=\"grammar-gap\" data-answer=\"Past Simple\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> tense, and the result clause uses <span class=\"grammar-gap\" data-answer=\"would\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> + base verb.",
        "tasks": [
            "If an insect <span class=\"grammar-gap\" data-answer=\"were\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> as big as a human, it would not need to hide from rain.",
            "They <span class=\"grammar-gap\" data-answer=\"would survive\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the storm if they found a dry leaf.",
            "If it <span class=\"grammar-gap\" data-answer=\"rained\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> boiling water, no small creature could survive.",
            "Where <span class=\"grammar-gap\" data-answer=\"would you go\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> if you had to find shelter in a forest?",
            "If we <span class=\"grammar-gap\" data-answer=\"had\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> wings, we would also seek cover during storms."
        ],
        "chips": ["Past Simple", "would", "were", "would survive", "rained", "would you go", "had"],
        "speaking": "If you were as tiny as an ant for a day, what would be your biggest challenge during a sudden thunderstorm?",
        "keywords": ["would", "were", "if", "rained", "could", "had"]
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
        "focus": "Distraction Adverbs & Hypotheses",
        "explanation": "Use <strong>frequency adverbs</strong> (<em>constantly, often</em>) and <strong>possibility modifiers</strong> (<em>perhaps, likely</em>) to formulate psychological hypotheses and describe daily behavioral struggles.",
        "rule_part_a": "Complete the rule: Words like 'perhaps' or 'likely' express <span class=\"grammar-gap\" data-answer=\"possibility\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. Adverbs of frequency like 'constantly' show <span class=\"grammar-gap\" data-answer=\"continuous\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> or repeated actions, typically placed <span class=\"grammar-gap\" data-answer=\"before\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the main verb.",
        "tasks": [
            "He is <span class=\"grammar-gap\" data-answer=\"constantly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> checking his phone, which ruins his focus.",
            "<span class=\"grammar-gap\" data-answer=\"Perhaps\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> our short attention spans are caused by social media algorithms.",
            "People who are easily distracted are <span class=\"grammar-gap\" data-answer=\"likely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to struggle in silent classrooms.",
            "How <span class=\"grammar-gap\" data-answer=\"often\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> do you find yourself daydreaming during work meetings?",
            "We can <span class=\"grammar-gap\" data-answer=\"easily\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> relate to ADHD symptoms without actually having the condition."
        ],
        "chips": ["possibility", "continuous", "before", "constantly", "Perhaps", "likely", "often", "easily"],
        "speaking": "Hypothesize about why modern people struggle to read long books. Is it constantly changing technology, or perhaps just a lack of practice?",
        "keywords": ["constantly", "perhaps", "likely", "often", "easily", "probably"]
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
        "focus": "Verb-Preposition Collocations",
        "explanation": "Formulate arguments of social skepticism and biology by using precise verb-preposition combinations (e.g., <strong>depend on</strong>, <strong>attribute to</strong>, <strong>believe in</strong>).",
        "rule_part_a": "Complete the rule: In scientific arguments, we use specific prepositions: we attribute something <span class=\"grammar-gap\" data-answer=\"to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a cause, we depend <span class=\"grammar-gap\" data-answer=\"on\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> factors, and we succeed <span class=\"grammar-gap\" data-answer=\"in\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> doing something.",
        "tasks": [
            "Many scientists do not believe <span class=\"grammar-gap\" data-answer=\"in\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a universal parenting instinct.",
            "Successful parenting depends <span class=\"grammar-gap\" data-answer=\"on\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> social support rather than biology.",
            "They attribute their childcare choices <span class=\"grammar-gap\" data-answer=\"to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> cultural traditions.",
            "New parents often succeed <span class=\"grammar-gap\" data-answer=\"in\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> learning how to care for their child through trial and error.",
            "This psychological theory relies <span class=\"grammar-gap\" data-answer=\"on\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> empirical research data."
        ],
        "chips": ["to", "on", "in", "sur"],
        "speaking": "Do you believe in a natural parenting instinct, or do you think successful child-rearing depends entirely on social learning?",
        "keywords": ["believe in", "depends on", "attribute to", "succeed in", "rely on", "relies on"]
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
        "focus": "Narrative Transitions",
        "explanation": "Use <strong>Narrative Transitions</strong> (<strong>prior to</strong>, <strong>subsequently</strong>, <strong>meanwhile</strong>, <strong>consequently</strong>) to establish a clear chronological order and cause-effect relationships in historical discussions.",
        "rule_part_a": "Complete the rule: Use <span class=\"grammar-gap\" data-answer=\"prior to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> before a noun or gerund as a synonym for 'before'. Use <span class=\"grammar-gap\" data-answer=\"meanwhile\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to describe an action happening at the same time in another place.",
        "tasks": [
            "<span class=\"grammar-gap\" data-answer=\"Prior to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the rise of digital streaming, fans bought physical albums.",
            "Streaming platforms launched; <span class=\"grammar-gap\" data-answer=\"consequently\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, album sales plummeted.",
            "The artist released a single; <span class=\"grammar-gap\" data-answer=\"subsequently\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, they announced a full stadium tour.",
            "Musicians are struggling for royalties; <span class=\"grammar-gap\" data-answer=\"meanwhile\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, tech companies are recording record profits.",
            "We listened to vinyl records <span class=\"grammar-gap\" data-answer=\"before\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> streaming services existed."
        ],
        "chips": ["prior to", "meanwhile", "Prior to", "consequently", "subsequently", "before"],
        "speaking": "Contrast how people consumed music prior to the internet versus how they consume it today. How has this consequently changed our attention spans?",
        "keywords": ["prior to", "subsequently", "meanwhile", "consequently", "before", "after"]
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
        "focus": "Adverbs of Manner",
        "explanation": "Use sophisticated <strong>Adverbs of Manner</strong> (<strong>blatantly</strong>, <strong>authentically</strong>, <strong>subconsciously</strong>, <strong>uniquely</strong>) to specify how actions of replication or self-expression are performed.",
        "rule_part_a": "Complete the rule: Adverbs of manner describe <span class=\"grammar-gap\" data-answer=\"how\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> an action is performed. They are often formed by adding <span class=\"grammar-gap\" data-answer=\"-ly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to adjectives.",
        "tasks": [
            "She was <span class=\"grammar-gap\" data-answer=\"blatantly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> copying her friend's signature dressing style.",
            "To live <span class=\"grammar-gap\" data-answer=\"authentically\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, we must stop mirroring others' lifestyles.",
            "We often <span class=\"grammar-gap\" data-answer=\"subconsciously\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> replicate the accents of people we admire.",
            "Every individual is <span class=\"grammar-gap\" data-answer=\"uniquely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> designed; copycats only touch the surface.",
            "He <span class=\"grammar-gap\" data-answer=\"deliberately\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> mirrors his mentor's speaking habits to gain confidence."
        ],
        "chips": ["how", "-ly", "blatantly", "authentically", "subconsciously", "uniquely", "deliberately"],
        "speaking": "Do you think people blatantly copying your style is a form of flattery, or an intrusive violation of your unique identity?",
        "keywords": ["blatantly", "authentically", "subconsciously", "uniquely", "deliberately", "rarely"]
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
        "focus": "Adverbes de distraction et hypothèses psychologiques",
        "explanation": "Utilisez des <strong>adverbes de fréquence</strong> (<em>constamment, souvent</em>) et des <strong>indicateurs d'hypothèse</strong> (<em>peut-être, probablement</em>) pour parler de l'attention et formuler des hypothèses psychologiques.",
        "rule_part_a": "Complétez la règle : Pour formuler une hypothèse, on utilise <span class=\"grammar-gap\" data-answer=\"peut-être\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> ou 'probablement'. Les adverbes comme 'constamment' indiquent une action <span class=\"grammar-gap\" data-answer=\"répétée\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Elle regarde <span class=\"grammar-gap\" data-answer=\"constamment\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> ses notifications pendant les réunions.",
            "<span class=\"grammar-gap\" data-answer=\"Peut-être\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> que notre distraction est liée au rythme de la vie moderne.",
            "Les personnes distraites ont <span class=\"grammar-gap\" data-answer=\"souvent\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> du mal à se concentrer sur de longs textes.",
            "Il est <span class=\"grammar-gap\" data-answer=\"facilement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> influencé par le bruit environnant.",
            "Nous pouvons <span class=\"grammar-gap\" data-answer=\"probablement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> retrouver des symptômes du TDAH dans notre quotidien sans être diagnostiqués."
        ],
        "chips": ["peut-être", "répétée", "constamment", "Peut-être", "souvent", "facilement", "probablement"],
        "speaking": "Formulez une hypothèse sur l'impact des réseaux sociaux sur notre concentration. S'agit-il d'un changement temporaire ou d'une évolution durable ?",
        "keywords": ["constamment", "peut-être", "souvent", "facilement", "probablement"]
    },
    "is-parenting-instinct-a-real-thing-or-scam.html": {
        "focus": "Verbes et prépositions",
        "explanation": "Utilisez des structures de verbes suivis de prépositions (<em>croire en, dépendre de, attribuer à, réussir à</em>) pour structurer vos arguments.",
        "rule_part_a": "Complétez la règle : On attribue quelque chose <span class=\"grammar-gap\" data-answer=\"à\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> une cause, et on dépend <span class=\"grammar-gap\" data-answer=\"de\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> facteurs extérieurs.",
        "tasks": [
            "De nombreux chercheurs ne croient pas <span class=\"grammar-gap\" data-answer=\"en\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> un instinct parental inné.",
            "Le succès de l'éducation dépend <span class=\"grammar-gap\" data-answer=\"de\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> l'apprentissage social.",
            "On attribue souvent ce comportement <span class=\"grammar-gap\" data-answer=\"à\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> la pression culturelle.",
            "Les nouveaux parents réussissent <span class=\"grammar-gap\" data-answer=\"à\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> s'adapter grâce au soutien de leur entourage.",
            "Cette théorie s'appuie <span class=\"grammar-gap\" data-answer=\"sur\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> des données scientifiques."
        ],
        "chips": ["à", "de", "en", "sur"],
        "speaking": "Pensez-vous que l'instinct parental existe vraiment, ou que l'éducation dépend entièrement de la culture et de l'apprentissage ?",
        "keywords": ["croient en", "dépend de", "attribue à", "réussissent à", "s'appuie sur"]
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
        "focus": "Mots de transition",
        "explanation": "Utilisez des <strong>Mots de transition</strong> (<em>avant de, par conséquent, pendant ce temps, ensuite</em>) pour ordonner chronologiquement vos récits.",
        "rule_part_a": "Complétez la règle : On utilise <span class=\"grammar-gap\" data-answer=\"avant de\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> suivi d'un infinitif pour exprimer une antériorité. On utilise <span class=\"grammar-gap\" data-answer=\"par conséquent\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> pour exprimer une conséquence logique.",
        "tasks": [
            "<span class=\"grammar-gap\" data-answer=\"Avant de\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> l'arrivée du streaming, les gens achetaient des disques physiques.",
            "Le marché du disque a chuté ; <span class=\"grammar-gap\" data-answer=\"par conséquent\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, les artistes se tournent vers les concerts.",
            "Elle a écouté l'album ; <span class=\"grammar-gap\" data-answer=\"ensuite\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, elle l'a recommandé à ses proches.",
            "Les plateformes gagnent des millions ; <span class=\"grammar-gap\" data-answer=\"pendant ce temps\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, les créateurs peinent à toucher leurs redevances.",
            "Les auditeurs ont changé d'habitudes <span class=\"grammar-gap\" data-answer=\"après\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> la révolution du MP3."
        ],
        "chips": ["avant de", "par conséquent", "Avant de", "par conséquent", "ensuite", "pendant ce temps", "après"],
        "speaking": "Comment écoutiez-vous la musique avant l'arrivée du streaming ? Comment cela a-t-il par conséquent changé votre rapport aux albums ?",
        "keywords": ["avant de", "par conséquent", "pendant ce temps", "ensuite", "après"]
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
