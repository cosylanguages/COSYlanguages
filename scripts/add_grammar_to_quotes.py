import os
import re
import random
from bs4 import BeautifulSoup

# Detailed thematic grammar database for the Greatest Quotes speaking club
DATABASE = {
    "en": {
        "critical_thinking": {
            "focus": "Passive Voice with Reporting Verbs",
            "explanation": "Use <strong>Passive Voice with Reporting Verbs</strong> (<em>it is said, is believed to be, is thought that</em>) to discuss public opinions, social conditioning, and rumors objectively.",
            "rule_part_a_html": "Complete the rule: When using reporting verbs in the passive, we can use 'It is + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"past participle\">_____</span> + that clause' or 'Subject + is/are + past participle + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"to-infinitive\">_____</span>'.",
            "tasks": [
                "It is <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"believed\">_____</span> that propaganda can easily alter public perception.",
                "The media is often <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"said\">_____</span> to manipulate societal values.",
                "Many people are <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"thought\">_____</span> to accept opinions without questioning them.",
                "It is <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"reported\">_____</span> that social media algorithms reinforce biases.",
                "Human cognitive biases are <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"known\">_____</span> to hinder independent logic."
            ],
            "chips": ["past participle", "to-infinitive", "believed", "said", "thought", "reported", "known"],
            "speaking": "Is most of what we believe to be true just reported to us by others? How can we separate facts from beliefs?",
            "keywords": ["is said", "is believed", "is thought", "is known", "propaganda", "perception", "bias"]
        },
        "art_creativity": {
            "focus": "Gerunds vs Infinitives",
            "explanation": "Master when to use a <strong>gerund</strong> (verb-ing) or an <strong>infinitive</strong> (to + verb) after verbs commonly associated with creative expression (<em>creative, risk, enjoy, continue, stop, recommend</em>).",
            "rule_part_a_html": "Complete the rule: Verbs like 'risk', 'avoid', and 'enjoy' are followed by a <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"gerund\">_____</span>. Verbs like 'decide', 'struggle', and 'want' require an <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"infinitive\">_____</span>.",
            "tasks": [
                "True artists never fear <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"taking\">_____</span> massive creative risks.",
                "He decided <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"to express\">_____</span> his deepest regrets through classical music.",
                "They recommended <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"reading\">_____</span> more poetry to nurture visual inspiration.",
                "We enjoy <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"contemplating\">_____</span> abstract paintings at the local café.",
                "She struggled <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"to find\">_____</span> a balance between conformity and authentic art."
            ],
            "chips": ["gerund", "infinitive", "taking", "to express", "reading", "contemplating", "to find"],
            "speaking": "Why do some people enjoy taking creative risks while others prefer standard conformity? Explain using gerunds and infinitives.",
            "keywords": ["taking", "to express", "reading", "contemplating", "to find", "enjoy", "struggle"]
        },
        "intellect_learning": {
            "focus": "Inversion for Emphasis",
            "explanation": "Use <strong>Inversion for Emphasis</strong> after negative or restrictive adverbials (<em>rarely, seldom, little did I know, not only</em>) to sound formal and emphatic.",
            "rule_part_a_html": "Complete the rule: When we put a negative adverbial at the beginning of a sentence, the subject and the <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"auxiliary verb\">_____</span> are inverted (swapped). We use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"do/does\">_____</span> for present simple or <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"did\">_____</span> for past simple.",
            "tasks": [
                "Rarely <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"do we\">_____</span> meet someone passionately curious about simple truths.",
                "Not only <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"did he\">_____</span> memorize the book, but he also analyzed it.",
                "Little <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"did they\">_____</span> know that school education would not guarantee wisdom.",
                "Seldom <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"does a\">_____</span> person accept ignorance with humble dignity.",
                "Only when we ask questions <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"can we\">_____</span> achieve deep, authentic insight."
            ],
            "chips": ["auxiliary verb", "do/does", "did", "do we", "did he", "did they", "does a", "can we"],
            "speaking": "Rarely do we encounter people who challenge their own biases. Why is genuine wisdom so rare in modern society?",
            "keywords": ["rarely", "seldom", "little did", "not only", "only when", "wisdom", "insight"]
        },
        "nostalgia_foyer": {
            "focus": "Habitual Past (Used to vs. Would)",
            "explanation": "Contrast bygone memories, childhood, and feelings of nostalgia using <strong>used to</strong> (for past habits or states) and <strong>would</strong> (only for past repeated actions).",
            "rule_part_a_html": "Complete the rule: We use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"used to\">_____</span> for both past states and active habits that are no longer true. We use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would\">_____</span> only for repeated actions in the past, but never for past <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"states\">_____</span>.",
            "tasks": [
                "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"used to believe\">_____</span> that home was a safe geographical space.",
                "Every winter, my grandmother <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would read\">_____</span> us old nostalgic letters.",
                "I <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"used to have\">_____</span> a very different perspective on what makes me happy.",
                "They <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would walk\">_____</span> along the quiet riverbanks for hours.",
                "She <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"used to be\">_____</span> very attached to physical places from her childhood."
            ],
            "chips": ["used to", "would", "states", "used to believe", "would read", "used to have", "would walk", "used to be"],
            "speaking": "Describe what you used to do when you felt nostalgic as a child. How would your family spend quiet evenings?",
            "keywords": ["used to", "would", "nostalgia", "childhood", "attached", "reminisce", "foyer"]
        },
        "parenting_autonomy": {
            "focus": "Modal Verbs of Obligation & Permission",
            "explanation": "Use modal verbs (<strong>must</strong>, <strong>should</strong>, <strong>have to</strong>, <strong>needn't</strong>, <strong>ought to</strong>) to discuss rules, expectations, and educational autonomy.",
            "rule_part_a_html": "Complete the rule: To express ethical obligation or soft advice, we use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"ought to\">_____</span> or 'should'. To show absence of obligation, we use 'don't have to' or <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"needn't\">_____</span>.",
            "tasks": [
                "A child <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"should be\">_____</span> allowed to express their authentic personality.",
                "Parents <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"must not\">_____</span> force absolute conformity on their children.",
                "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"ought to\">_____</span> listen to a child's resistance with empathy.",
                "They <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"don't have to\">_____</span> suppress their emotions just to be convenient.",
                "Does a teacher <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"have to\">_____</span> demand unconditional obedience in class?"
            ],
            "chips": ["ought to", "needn't", "should be", "must not", "ought to", "don't have to", "have to"],
            "speaking": "How should parents balance the need for structure with the child's natural demand for autonomy?",
            "keywords": ["should", "must not", "ought to", "don't have to", "have to", "autonomy", "conformity"]
        },
        "relationships_vulnerability": {
            "focus": "Second Conditional",
            "explanation": "Use the <strong>Second Conditional</strong> (<em>if + past, would + base verb</em>) to speculate about hypothetical relationships, trust, and vulnerability.",
            "rule_part_a_html": "Complete the rule: In the Second Conditional, the if-clause uses the <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Past Simple\">_____</span> tense, and the main clause uses <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would\">_____</span> or <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"could\">_____</span> + base verb.",
            "tasks": [
                "If we <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"trusted\">_____</span> each other more, we would feel less vulnerable.",
                "I <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would share\">_____</span> my secrets if you promised to remain silent.",
                "If they <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were\">_____</span> here, they would offer unconditional support.",
                "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"could build\">_____</span> a deep connection if we stopped pretending.",
                "What <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would you do\">_____</span> if someone betrayed your absolute trust?"
            ],
            "chips": ["Past Simple", "would", "could", "trusted", "would share", "were", "could build", "would you do"],
            "speaking": "If you could meet someone with absolute empathy and sincerity, what deep thoughts would you share with them?",
            "keywords": ["if", "would", "could", "trusted", "were", "vulnerable", "sincerity"]
        },
        "social_justice": {
            "focus": "Mixed Conditionals",
            "explanation": "Use <strong>Mixed Conditionals</strong> to link past hypothetical actions/events to their direct consequences in the present.",
            "rule_part_a_html": "Complete the rule: To describe a hypothetical past action and its present result, we use: If + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Past Perfect\">_____</span>, Subject + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would\">_____</span> + base verb.",
            "tasks": [
                "If we <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had overpaid\">_____</span> teachers, our society would be much smarter today.",
                "If politicians <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had studied\">_____</span> ethics, we would have fewer stupid laws now.",
                "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would not face\">_____</span> this crisis if we had invested in public schools.",
                "If she <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had chosen\">_____</span> motherhood, she might not feel so free today.",
                "If they <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had listened\">_____</span> to experts, they would not be struggling right now."
            ],
            "chips": ["Past Perfect", "would", "had overpaid", "had studied", "would not face", "had chosen", "had listened"],
            "speaking": "How would our current world be different if previous generations had paid more attention to teachers and less to politicians?",
            "keywords": ["had overpaid", "had studied", "would be", "would have", "ethics", "consequences"]
        },
        "empathy_perspective": {
            "focus": "Participle Clauses",
            "explanation": "Use <strong>Participle Clauses</strong> (<em>having realized, looking closer, walking alone</em>) to reduce adverbial clauses and add a literary, reflective flow to your thoughts.",
            "rule_part_a_html": "Complete the rule: Active participle clauses use a <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"present participle\">_____</span> (verb-ing). For actions that occurred before the main verb, we use 'having + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"past participle\">_____</span>'.",
            "tasks": [
                "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Realizing\">_____</span> that everyone is living a complex life, I felt deep empathy.",
                "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Having contemplated\">_____</span> the paradox of the clock, they changed their routine.",
                "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Walking\">_____</span> alone under the rain, he noticed the small beauty around him.",
                "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Having analyzed\">_____</span> different perspectives, they reached a mutual consensus.",
                "She sat near the window, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"staring\">_____</span> silently at the busy city crowds below."
            ],
            "chips": ["present participle", "past participle", "Realizing", "Having contemplated", "Walking", "Having analyzed", "staring"],
            "speaking": "Having realized that everyone has unique struggles, how can we practice empathy on a daily basis?",
            "keywords": ["realizing", "having", "walking", "looking", "staring", "empathy", "perspective"]
        },
        "existential_transformation": {
            "focus": "Subjunctive Mood for Deep Reflection",
            "explanation": "Use the <strong>Subjunctive Mood</strong> (<em>I wish I were, it is essential that he be, if only she had</em>) to express hypothetical wishes, urgent recommendations, or regrets about life.",
            "rule_part_a_html": "Complete the rule: After verbs of demanding, recommending or wishing, the subjunctive uses the <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"base form\">_____</span> of the verb (e.g. 'be', 'understand'). For hypothetical regrets about the past, use past modal + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"have\">_____</span> + past participle.",
            "tasks": [
                "It is essential that we <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"be\">_____</span> true to ourselves rather than convenient.",
                "I wish our society <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were\">_____</span> more focused on spiritual growth.",
                "If only he <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had accepted\">_____</span> his vulnerability before it was too late.",
                "They recommended that she <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"contemplate\">_____</span> the nature of her soul in silence.",
                "We demanded that the organization <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"respect\">_____</span> individual human dignity."
            ],
            "chips": ["base form", "have", "be", "were", "had accepted", "contemplate", "respect"],
            "speaking": "If you could wish for one permanent shift in human consciousness, what would you wish for? Use the subjunctive mood.",
            "keywords": ["wish", "were", "essential that", "if only", "contemplate", "soul", "dignity"]
        },
        "digital_consumerism": {
            "focus": "Noun Clauses as Objects/Subjects",
            "explanation": "Use <strong>Noun Clauses</strong> (<em>what we really need, how technology changes us, why we buy things</em>) to raise abstract, conceptual arguments.",
            "rule_part_a_html": "Complete the rule: Noun clauses act like a noun and can start with question words like <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"what\">_____</span>, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"how\">_____</span>, or <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"why\">_____</span>. The word order inside a noun clause is subject + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"verb\">_____</span>.",
            "tasks": [
                "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"What we really buy\">_____</span> is often just the illusion of happiness.",
                "They realized <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"how algorithms exploit\">_____</span> our basic emotional triggers.",
                "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Why they took\">_____</span> our memory cards remains a highly relevant question.",
                "We must analyze <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"how digital storage controls\">_____</span> our personal histories.",
                "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"How we consume\">_____</span> art determines our level of emotional depth."
            ],
            "chips": ["what", "how", "why", "verb", "What we really buy", "how algorithms exploit", "Why they took", "how digital storage controls", "How we consume"],
            "speaking": "How do algorithms exploit what we desire? Share how you protect your mental boundaries from consumerism.",
            "keywords": ["what", "how", "why", "exploit", "consumerism", "illusion", "art"]
        }
    },
    "fr": {
        "critical_thinking": {
            "focus": "Voix Passive avec Verbes de Déclaration",
            "explanation": "Utilisez la <strong>Voix Passive avec des Verbes de Déclaration</strong> (<em>il est dit que, est considéré comme, est pensé que</em>) pour aborder objectivement l'esprit critique et l'opinion publique.",
            "rule_part_a_html": "Complétez la règle : À la voix passive impersonnelle, on emploie 'Il est + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"participe passé\">_____</span> + que + proposition'. Dans une structure personnelle, le sujet est suivi du verbe passif puis de l'<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"infinitif\">_____</span>.",
            "tasks": [
                "Il est <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"dit\">_____</span> que la propagande peut facilement modifier la perception publique.",
                "La technologie est souvent <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"considérée\">_____</span> comme un outil de contrôle invisible.",
                "On pense <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"que\">_____</span> les réseaux sociaux renforcent nos biais cognitifs.",
                "Cette théorie est <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"reconnue\">_____</span> pour encourager le scepticisme intellectuel.",
                "Il est <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"prouvé\">_____</span> que le dogme empêche la pensée autonome."
            ],
            "chips": ["participe passé", "infinitif", "dit", "considérée", "que", "reconnue", "prouvé"],
            "speaking": "Selon vous, la plupart de nos croyances sont-elles simplement dictées par l'opinion publique ? Comment s'en détacher ?",
            "keywords": ["est dit", "est considéré", "est pensé", "est reconnue", "propagande", "scepticisme", "opinion"]
        },
        "art_creativity": {
            "focus": "Infinitif vs Forme Nominale",
            "explanation": "Maîtrisez le choix entre l'<strong>infinitif</strong> et la <strong>forme nominale</strong> (<em>la création, le fait de créer</em>) après les verbes exprimant l'appréciation ou le risque artistique.",
            "rule_part_a_html": "Complétez la règle : Après les prépositions 'sans' ou 'pour', le verbe se met toujours à l'<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"infinitif\">_____</span>. Pour insister sur l'action en tant que sujet, on utilise 'Le fait de + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"verbe\">_____</span>'.",
            "tasks": [
                "Prendre des risques est essentiel pour <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"créer\">_____</span> une œuvre d'art authentique.",
                "Elle a choisi de <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"s'exprimer\">_____</span> sans craindre les critiques de la société.",
                "Le fait de <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"danser\">_____</span> libère l'esprit des contraintes logiques.",
                "Nous aimons <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"contempler\">_____</span> ces toiles abstraites dans le silence.",
                "Ils préfèrent <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"lire\">_____</span> des poèmes plutôt que de suivre la foule algorithmique."
            ],
            "chips": ["infinitif", "verbe", "créer", "s'exprimer", "danser", "contempler", "lire"],
            "speaking": "Pourquoi est-il si difficile de créer ou de s'exprimer de manière totalement authentique aujourd'hui ?",
            "keywords": ["créer", "s'exprimer", "danser", "contempler", "lire", "risque", "authentique"]
        },
        "intellect_learning": {
            "focus": "Inversion du Sujet après Adverbes Limitants",
            "explanation": "Utilisez l'<strong>Inversion du Sujet</strong> après certains adverbes de restriction ou de doute (<em>rarement, à peine, peut-être</em>) pour donner un ton soutenu à vos réflexions.",
            "rule_part_a_html": "Complétez la règle : Lorsque la phrase commence par un adverbe comme 'peut-être' ou 'rarement', on place le pronom sujet <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"après\">_____</span> le verbe conjugué, relié par un <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"trait d'union\">_____</span>.",
            "tasks": [
                "Rarement <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"rencontre-t-on\">_____</span> des esprits aussi passionnément curieux que Socrate.",
                "À peine <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"avait-il\">_____</span> fini ses études qu'il a compris la vanité des diplômes.",
                "Peut-être <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"devrions-nous\">_____</span> accepter notre propre ignorance avec humilité.",
                "Sans doute <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"comprendront-ils\">_____</span> un jour la valeur du dialogue philosophique.",
                "Ainsi <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"parviennent-ils\">_____</span> à cultiver une authentique sagesse de vie."
            ],
            "chips": ["après", "trait d'union", "rencontre-t-on", "avait-il", "devrions-nous", "comprendront-ils", "parviennent-ils"],
            "speaking": "Rarement remet-on en question nos propres certitudes. Pourquoi le doute constructif est-il nécessaire à la sagesse ?",
            "keywords": ["rarement", "à peine", "peut-être", "sans doute", "ainsi", "ignorance", "sagesse"]
        },
        "nostalgia_foyer": {
            "focus": "Imparfait vs Conditionnel Passé",
            "explanation": "Utilisez <strong>l'imparfait</strong> pour décrire des états et habitudes du passé, et le <strong>conditionnel passé</strong> pour exprimer des regrets ou des hypothèses nostalgiques.",
            "rule_part_a_html": "Complétez la règle : L'imparfait exprime des actions répétées ou des <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"états\">_____</span> durables dans le passé. Le conditionnel passé se forme avec l'auxiliaire au <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"conditionnel présent\">_____</span> + participe passé.",
            "tasks": [
                "Quand j'étais jeune, je <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"croyais\">_____</span> que le foyer était éternel.",
                "J'aurais <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"voulu\">_____</span> préserver ces lettres nostalgiques de ma grand-mère.",
                "Nous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"habitions\">_____</span> dans une maison au bord de l'eau.",
                "Si j'avais su, j'aurais <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"passé\">_____</span> plus de temps dans ce village tranquille.",
                "Elle <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"était\">_____</span> si profondément attachée à ses souvenirs d'enfance."
            ],
            "chips": ["états", "conditionnel présent", "croyais", "voulu", "habitions", "passé", "était"],
            "speaking": "Quels souvenirs d'enfance évoquent chez vous la plus douce nostalgie ? Qu'auriez-vous voulu garder de cette époque ?",
            "keywords": ["croyais", "voulu", "habitions", "passé", "était", "nostalgie", "imparfait"]
        },
        "parenting_autonomy": {
            "focus": "Conditionnel Présent & Devoir / Pouvoir",
            "explanation": "Exprimez des recommandations polies, des devoirs moraux ou des règles d'éducation en utilisant les verbes modaux <strong>devoir</strong>, <strong>pouvoir</strong> et <strong>falloir</strong> au conditionnel.",
            "rule_part_a_html": "Complétez la règle : Le conditionnel présent exprime une nuance de conseil poli. 'Devoir' au conditionnel marque l'<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"obligation morale\">_____</span>, tandis que 'pouvoir' marque la <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"possibilité\">_____</span>.",
            "tasks": [
                "Les parents <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"devraient\">_____</span> encourager l'expression de la personnalité.",
                "Un enfant ne <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"devrait pas\">_____</span> jamais être contraint à un conformisme aveugle.",
                "Il <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"faudrait\">_____</span> écouter sa rébellion avec une réelle empathie.",
                "Nous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"pourrions\">_____</span> mieux comprendre leur subconscient en dialoguant.",
                "L'éducation <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"devrait\">_____</span> viser l'autonomie plutôt que la suppression."
            ],
            "chips": ["obligation morale", "possibilité", "devraient", "devrait pas", "faudrait", "pourrions", "devrait"],
            "speaking": "Selon vous, comment l'éducation moderne devrait-elle concilier discipline et découverte de soi ?",
            "keywords": ["devrait", "devraient", "faudrait", "pourrions", "autonomie", "conformisme", "suppression"]
        },
        "relationships_vulnerability": {
            "focus": "Hypothèses avec Si & Conditionnel Présent",
            "explanation": "Formulez des hypothèses complexes sur l'amour, la confiance et la vulnérabilité en utilisant la structure <strong>Si + Imparfait, Conditionnel Présent</strong>.",
            "rule_part_a_html": "Complétez la règle : Après la conjonction 'si' exprimant une hypothèse sur le présent, on emploie l'<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"imparfait\">_____</span> dans la subordonnée, et le <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"conditionnel présent\">_____</span> dans la principale.",
            "tasks": [
                "Si nous nous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"faisions\">_____</span> confiance, nous serions moins vulnérables.",
                "Je vous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"donnerais\">_____</span> la force de me détruire si j'avais foi en vous.",
                "Si la société <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"était\">_____</span> plus tolérante, le coming-out serait plus simple.",
                "Nous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"pourrions\">_____</span> guérir nos conflits si nous faisions preuve d'empathie.",
                "Que <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"feriez-vous\">_____</span> si votre meilleur ami trahissait votre sincérité ?"
            ],
            "chips": ["imparfait", "conditionnel présent", "faisions", "donnerais", "était", "pourrions", "feriez-vous"],
            "speaking": "Si vous rencontriez une personne d'une sincérité absolue, quelles pensées secrètes oseriez-vous lui partager ?",
            "keywords": ["si", "serait", "seraient", "aurait", "auraient", "vulnérabilité", "empathie"]
        },
        "social_justice": {
            "focus": "Structures Hypothétiques Rétrospectives (Si + Plus-que-parfait)",
            "explanation": "Utilisez le <strong>Plus-que-parfait</strong> après 'si' pour exprimer des regrets ou analyser les injustices de l'histoire et des rôles sociaux (<em>Si + plus-que-parfait, conditionnel passé/présent</em>).",
            "rule_part_a_html": "Complétez la règle : Pour une hypothèse non réalisée dans le passé, la proposition avec 'si' est au <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"plus-que-parfait\">_____</span>. La principale peut être au conditionnel passé ou au conditionnel <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"présent\">_____</span> (conséquence actuelle).",
            "tasks": [
                "Si nous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"avions surpayé\">_____</span> les enseignants, la société serait plus intelligente aujourd'hui.",
                "Si les politiciens <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"avaient écouté\">_____</span> les philosophes, nous aurions moins de lois stupides.",
                "Les femmes <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"n'auraient pas dû\">_____</span> choisir entre liberté personnelle et maternité si les rôles avaient évolué.",
                "Si elle <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"avait refusé\">_____</span> ce sacrifice, sa vie actuelle serait bien différente.",
                "Le monde <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"aurait été\">_____</span> plus juste si nous avions brisé ces stéréotypes plus tôt."
            ],
            "chips": ["plus-que-parfait", "présent", "avions surpayé", "avaient écouté", "n'auraient pas dû", "avait refusé", "aurait été"],
            "speaking": "Le monde serait-il plus juste aujourd'hui si les générations précédentes avaient mieux valorisé les enseignants que les politiciens ?",
            "keywords": ["avaient", "avions", "serait", "aurait été", "choix", "justice", "stéréotypes"]
        },
        "empathy_perspective": {
            "focus": "Gérondif et Participes Présents",
            "explanation": "Utilisez le <strong>gérondif</strong> (<em>en faisant, en comprenant</em>) ou le <strong>participe présent</strong> pour exprimer la simultanéité, la cause ou le moyen dans vos réflexions morales.",
            "rule_part_a_html": "Complétez la règle : Le gérondif se forme avec la préposition <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"en\">_____</span> + participe présent (se terminant par <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"-ant\">_____</span>). Il s'accorde au sujet de la phrase.",
            "tasks": [
                "C'est <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"en comprenant\">_____</span> l'altérité que nous parvenons à une véritable empathie.",
                "Tout <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"en sachant\">_____</span> nos biais, nous devons rester ouverts au dialogue.",
                "Il a contemplé l'horizon <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"en marchant\">_____</span> sous la pluie d'automne.",
                "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Ayant réalisé\">_____</span> la fragilité du temps, ils ont changé de perspective.",
                "Elle observait la foule <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"en songeant\">_____</span> aux secrets cachés de chaque vie."
            ],
            "chips": ["en", "-ant", "en comprenant", "en sachant", "en marchant", "Ayant réalisé", "en songeant"],
            "speaking": "En comprenant que chaque passant mène une vie aussi complexe que la vôtre, comment votre regard sur le monde change-t-il ?",
            "keywords": ["en", "comprenant", "sachant", "marchant", "réalisé", "empathie", "perspective"]
        },
        "existential_transformation": {
            "focus": "Subjonctif Présent pour l'Exigence Intérieure",
            "explanation": "Le <strong>Subjonctif Présent</strong> s'impose après les expressions de volonté, de nécessité ou de regret (<em>il est essentiel que, je souhaite que, bien que</em>) pour évoquer la vérité de l'âme.",
            "rule_part_a_html": "Complétez la règle : Le subjonctif s'utilise après 'il faut que' ou 'il est essentiel <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"que\">_____</span>'. Les terminaisons régulières sont -e, -es, -e, -ions, -iez, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"-ent\">_____</span>.",
            "tasks": [
                "Il est essentiel que l'on <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"comprenne\">_____</span> la différence entre l'âme et le corps.",
                "Je souhaite que chaque individu <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"puisse\">_____</span> vivre une véritable renaissance.",
                "Bien qu'il <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"sache\">_____</span> la vérité, il préfère garder un silence humble.",
                "Pourvu que notre esprit <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"soit\">_____</span> libéré du matérialisme superficiel.",
                "Il faut que nous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"fassions\">_____</span> preuve de courage face à l'inconnu."
            ],
            "chips": ["que", "-ent", "comprenne", "puisse", "sache", "soit", "fassions"],
            "speaking": "Il est essentiel que nous soyons fidèles à notre essence profonde. Comment cultiver cette authenticité au quotidien ?",
            "keywords": ["soit", "soient", "comprenne", "sache", "puisse", "fassions", "essence"]
        },
        "digital_consumerism": {
            "focus": "Subordonnées Complétives & Interrogatives Indirectes",
            "explanation": "Utilisez des <strong>subordonnées complétives</strong> (<em>ce que nous voulons, comment nous consommons</em>) pour structurer des arguments philosophiques sur la technologie et la perte de mémoire.",
            "rule_part_a_html": "Complétez la règle : Une interrogation indirecte commence par des mots comme <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"comment\">_____</span>, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"pourquoi\">_____</span> ou <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"si\">_____</span>, et ne prend jamais de point d'interrogation final.",
            "tasks": [
                "Nous devons comprendre <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"comment les algorithmes\">_____</span> modifient notre mémoire.",
                "On se demande <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"pourquoi ils ont pris\">_____</span> nos cartes mémoire physiques.",
                "Il est évident <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"que nous payons\">_____</span> pour stocker des souvenirs artificiels.",
                "Analysez <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"ce que le consumérisme\">_____</span> fait à notre indépendance cognitive.",
                "Je ne sais pas <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"si notre cerveau\">_____</span> pourra un jour s'en libérer."
            ],
            "chips": ["comment", "pourquoi", "si", "comment les algorithmes", "pourquoi ils ont pris", "que nous payons", "ce que le consumérisme", "si notre cerveau"],
            "speaking": "Expliquez comment le fait de payer pour du stockage numérique modifie notre rapport aux souvenirs matériels.",
            "keywords": ["comment", "pourquoi", "que", "ce que", "si", "souvenirs", "consommer"]
        }
    },
    "ru": {
        "critical_thinking": {
            "focus": "Страдательный залог и безличные конструкции",
            "explanation": "Используйте <strong>Страдательный залог и безличные конструкции</strong> (<em>говорят, считается, общеизвестно, доказано</em>), чтобы обсуждать критическое мышление и манипуляцию общественным мнением.",
            "rule_part_a_html": "Завершите правило: Безличные предложения в русском языке часто не требуют подлежащего. Краткие формы страдательных причастий согласуются с существительным в <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"роде\">_____</span> и числе, например: 'было <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"доказано\">_____</span>', 'считается'.",
            "tasks": [
                "Считается, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"что\">_____</span> пропаганда легко формирует общественное восприятие.",
                "Было <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"доказано\">_____</span>, что социальные сети усиливают когнитивные искажения.",
                "Нам часто <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"говорят\">_____</span> верить авторитетам без лишних вопросов.",
                "Это мнение <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"признано\">_____</span> ошибочным большинством ученых.",
                "Общеизвестно, что иллюзии <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"мешают\">_____</span> объективному восприятию реальности."
            ],
            "chips": ["роде", "доказано", "что", "доказано", "говорят", "признано", "мешают"],
            "speaking": "Считаете ли вы, что большая часть наших убеждений на самом деле навязана обществом? Как развить независимый интеллект?",
            "keywords": ["говорят", "считается", "общеизвестно", "доказано", "пропаганда", "иллюзия", "восприятие"]
        },
        "art_creativity": {
            "focus": "Инфинитив и деепричастные обороты",
            "explanation": "Сочетайте <strong>инфинитив</strong> и <strong>деепричастные обороты</strong> (<em>создавая, рискуя, отрицая</em>) для описания творческого процесса и художественного самовыражения.",
            "rule_part_a_html": "Завершите правило: Деепричастие отвечает на вопросы 'что делая?' или 'что сделав?'. Оно обозначает <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"добавочное\">_____</span> действие при основном глаголе и всегда выделяется <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"запятыми\">_____</span>.",
            "tasks": [
                "Невозможно <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"творить\">_____</span>, избегая любых творческих рисков.",
                "Он решил выразить себя, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"отрицая\">_____</span> традиционные каноны искусства.",
                "Каждый великий художник стремится <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"созидать\">_____</span>.",
                "Гуляя по выставке, мы <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"пытались\">_____</span> понять замысел автора.",
                "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Создавая\">_____</span> свои произведения, они не думали о коммерческом успехе."
            ],
            "chips": ["добавочное", "запятыми", "творить", "отрицая", "созидать", "пытались", "Создавая"],
            "speaking": "Почему истинное творчество всегда требует от автора готовности рисковать и выходить за рамки шаблонов?",
            "keywords": ["творить", "рискуя", "создавая", "отрицая", "созидать", "искренность", "шаблон"]
        },
        "intellect_learning": {
            "focus": "Частицы и инверсия для логического акцента",
            "explanation": "Используйте выделительные частицы (<strong>именно</strong>, <strong>только</strong>, <strong>лишь</strong>) и <strong>инверсию</strong> (изменение порядка слов), чтобы подчеркнуть значимость интеллекта и познания.",
            "rule_part_a_html": "Завершите правило: Логическое ударение часто падает на слово, стоящее в <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"конце\">_____</span> предложения. Частица <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"именно\">_____</span> усиливает значение следующего за ней слова.",
            "tasks": [
                "Именно <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"любознательность\">_____</span> отличает истинного ученого от конформиста.",
                "Только признав свое невежество, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"можем мы\">_____</span> прийти к настоящей мудрости.",
                "Лишь <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"немногие\">_____</span> способны мыслить критически в цифровую эпоху.",
                "Всю жизнь искал <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"он\">_____</span> ответы на эти вечные вопросы.",
                "Далеко не всегда школьное образование <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"гарантирует\">_____</span> высокий интеллект."
            ],
            "chips": ["конце", "именно", "любознательность", "можем мы", "немногие", "он", "гарантирует"],
            "speaking": "Именно здоровое сомнение рождает истину. Согласны ли вы с тем, что скептицизм важнее слепой веры?",
            "keywords": ["именно", "только", "лишь", "разве", "интеллект", "скептицизм", "мудрость"]
        },
        "nostalgia_foyer": {
            "focus": "Прошедшее время несовершенного вида для повторяющихся действий",
            "explanation": "Описывайте старые привычки, детство и ностальгические воспоминания, используя <strong>глаголы прошедшего времени несовершенного вида</strong> и конструкции типа 'бывало', 'раньше'.",
            "rule_part_a_html": "Завершите правило: Глаголы несовершенного вида в прошедшем времени отвечали на вопрос '<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"что делал?\">_____</span>' и обозначали длительные или <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"повторяющиеся\">_____</span> действия.",
            "tasks": [
                "В детстве мы <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"верили\">_____</span>, что дом — это навсегда.",
                "Бывало, бабушка <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"перечитывала\">_____</span> нам свои старые дневники.",
                "Раньше я совсем иначе <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"воспринимал\">_____</span> понятие семейного уюта.",
                "Каждые выходные они <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"гуляли\">_____</span> у тихой реки, предаваясь воспоминаниям.",
                "Она <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"была\">_____</span> глубоко привязана к вещам из родительского дома."
            ],
            "chips": ["что делал?", "повторяющиеся", "верили", "перечитывала", "воспринимал", "гуляли", "была"],
            "speaking": "Как вы раньше проводили тихие вечера? Какие детские привычки до сих пор вызывают у вас ностальгию?",
            "keywords": ["раньше", "бывало", "верили", "гуляли", "была", "ностальгия", "уют"]
        },
        "parenting_autonomy": {
            "focus": "Модальные слова долженствования и разрешения",
            "explanation": "Обсуждайте воспитание, границы и автономию ребенка с помощью кратких прилагательных (<strong>должен</strong>, <strong>обязан</strong>) и модальных слов (<strong>следует</strong>, <strong>необходимо</strong>).",
            "rule_part_a_html": "Завершите правило: Краткое прилагательное 'должен' согласуется с подлежащим в роде и числе: 'ребенок должен', 'мать <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"должна\">_____</span>', 'родители <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"должны\">_____</span>'. Слово 'следует' выражает мягкую <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"рекомендацию\">_____</span>.",
            "tasks": [
                "Родитель не <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"должен\">_____</span> подавлять индивидуальность своего ребенка.",
                "Ребенку <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"следует\">_____</span> дать право на бунт и самопознание.",
                "Нам <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"необходимо\">_____</span> научиться слушать детские проблемы с эмпатией.",
                "Они вовсе не <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"обязаны\">_____</span> быть всегда удобными для взрослых.",
                "Должна ли современная школа воспитывать слепое подчинение?"
            ],
            "chips": ["должна", "должны", "рекомендацию", "должен", "следует", "необходимо", "обязаны"],
            "speaking": "Каковы главные обязанности родителей в воспитании сильной, психологически свободной личности?",
            "keywords": ["должен", "должна", "должны", "следует", "необходимо", "автономия", "подавление"]
        },
        "relationships_vulnerability": {
            "focus": "Условное наклонение (союз 'если бы')",
            "explanation": "Размышляйте об отношениях, доверии и уязвимости, используя условную частицу <strong>бы</strong> и глаголы прошедшего времени.",
            "rule_part_a_html": "Завершите правило: Формы условного наклонения строятся из глагола в прошедшем времени и частицы <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"бы\">_____</span>. Частицу 'бы' <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"нельзя\">_____</span> ставить перед союзом 'если', она пишется отдельно.",
            "tasks": [
                "Если <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"бы\">_____</span> мы доверяли друг другу, близость не казалась бы угрозой.",
                "Я <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"открыл бы\">_____</span> тебе свою душу, если бы знал, что это безопасно.",
                "Если бы общество было более понимающим, маски <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"стали бы\">_____</span> не нужны.",
                "Мы <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"могли бы\">_____</span> избежать столкновения, проявив сострадание.",
                "Что бы вы <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"сделали\">_____</span> на месте человека, потерявшего верность партнера?"
            ],
            "chips": ["бы", "нельзя", "бы", "открыл бы", "стали бы", "могли бы", "сделали"],
            "speaking": "Если бы вы встретили человека, абсолютно способного на эмпатию, какими глубокими мыслями вы бы поделились?",
            "keywords": ["бы", "если бы", "могли бы", "хотели бы", "уязвимость", "искренность", "близость"]
        },
        "social_justice": {
            "focus": "Сложные союзные конструкции условия и следствия",
            "explanation": "Используйте сложные союзы (<em>если бы... то..., в случае если, при условии что</em>) для анализа социальных ролей и несправедливости.",
            "rule_part_a_html": "Завершите правило: В условных предложениях союз 'если бы' требует использования глагола только в <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"прошедшем\">_____</span> времени. Во второй части предложения часто используется соотносительное слово <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"то\">_____</span>.",
            "tasks": [
                "Если бы мы <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"платили\">_____</span> учителям больше, то законы были бы разумнее.",
                "Если бы политики ценили этику, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"то\">_____</span> глупых решений было бы меньше.",
                "При условии, что женщины <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"будут иметь\">_____</span> реальную свободу выбора, трагедия исчезнет.",
                "В случае если общество не <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"изменит\">_____</span> стереотипы, раскол углубится.",
                "Если бы мы ценили сострадание, мир <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"стал бы\">_____</span> намного человечнее."
            ],
            "chips": ["прошедшем", "то", "платили", "то", "будут иметь", "изменит", "стал бы"],
            "speaking": "Как изменился бы наш мир, если бы учителя получали больше политиков, а образование ценилось выше власти?",
            "keywords": ["если бы", "то", "было бы", "при условии", "в случае", "стереотипы", "этика"]
        },
        "empathy_perspective": {
            "focus": "Причастные и деепричастные обороты",
            "explanation": "Используйте <strong>Причастные обороты</strong> (<em>осознающий, смотрящий</em>) и <strong>Деепричастные обороты</strong> (<em>осознав, глядя</em>) для придания литературной глубины вашим суждениям.",
            "rule_part_a_html": "Завершите правило: Причастный оборот отвечает на вопрос 'какой?' и согласуется с определяемым словом. Деепричастный оборот обозначает <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"действие\">_____</span> субъекта и всегда выделяется на письме <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"запятыми\">_____</span>.",
            "tasks": [
                "Человек, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"осознающий\">_____</span> глубину чужой жизни, не способен на жестокость.",
                "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Осознав\">_____</span> парадокс времени, мы перестаем бежать за успехом.",
                "Он шел по улице, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"вглядываясь\">_____</span> в лица прохожих под дождем.",
                "Проблема, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"рассмотренная\">_____</span> со всех сторон, перестает казаться тупиком.",
                "<span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Пытаясь\">_____</span> проявить эмпатию, мы преодолеваем личный эгоизм."
            ],
            "chips": ["действие", "запятыми", "осознающий", "Осознав", "вглядываясь", "рассмотренная", "Пытаясь"],
            "speaking": "Осознав, что каждый прохожий проживает уникальную жизнь, как вы начнете относиться к незнакомцам на улице?",
            "keywords": ["осознающий", "осознав", "глядя", "рассмотрев", "пытаясь", "эмпатия", "перспектива"]
        },
        "existential_transformation": {
            "focus": "Частицы сослагательного значения и побуждения (пусть, чтобы)",
            "explanation": "Выражайте экзистенциальные устремления, пожелания и требования, используя частицы <strong>пусть</strong>, <strong>дабы</strong> и союз <strong>чтобы</strong>.",
            "rule_part_a_html": "Завершите правило: В целевых предложениях после союза 'чтобы' используется глагол только в <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"прошедшем\">_____</span> времени. Частица 'пусть' требует после себя форму глагола в <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"настоящем\">_____</span> или будущем времени.",
            "tasks": [
                "Я хочу, чтобы каждый человек <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"обрел\">_____</span> подлинную свободу души.",
                "Пусть разум <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"направит\">_____</span> нас к принятию своей уязвимости.",
                "Важно, чтобы мы не <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"забывали\">_____</span> о своей духовной сущности.",
                "Они жили просто, дабы <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"сохранить\">_____</span> внутреннюю чистоту.",
                "Пусть мир <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"услышит\">_____</span> искренний голос каждого из нас."
            ],
            "chips": ["прошедшем", "настоящем", "обрел", "направит", "забывали", "сохранить", "услышит"],
            "speaking": "Я хочу, чтобы мы были честны со своей душой. Выразите свои главные экзистенциальные надежды.",
            "keywords": ["чтобы", "пусть", "дабы", "хочу чтобы", "душа", "гармония", "достоинство"]
        },
        "digital_consumerism": {
            "focus": "Изъяснительные придаточные предложения",
            "explanation": "Используйте <strong>изъяснительные придаточные предложения</strong> (с союзами <em>что, как, почему</em>), чтобы анализировать цифровое потребление и потерю памяти.",
            "rule_part_a_html": "Завершите правило: Придаточные изъяснительные отвечают на падежные вопросы и связываются с главным предложением союзами <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"что\">_____</span>, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"как\">_____</span>, или союзными словами <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"почему\">_____</span>, кто, что.",
            "tasks": [
                "Мы прекрасно видим, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"как алгоритмы\">_____</span> незаметно меняют наше сознание.",
                "Трудно объяснить, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"почему мы платим\">_____</span> за хранение собственных воспоминаний.",
                "Они поняли, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"что материальные\">_____</span> вещи не заменят искреннее общение.",
                "Мы исследуем, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"как гаджеты\">_____</span> отнимают у нас способность помнить.",
                "Я сомневаюсь, сможем ли мы полностью отказаться от виртуального потребления."
            ],
            "chips": ["что", "как", "почему", "как алгоритмы", "почему мы платим", "что материальные", "как гаджеты"],
            "speaking": "Расскажите, как, по вашему мнению, плата за цифровые облака стирает ценность физических воспоминаний.",
            "keywords": ["что", "как", "почему", "зачем", "потреблять", "воспоминания", "иллюзия"]
        }
    }
}

# The unique keywords of each theme mapped to their specific grammar structures
THEME_MAPPING = {
    'think-for-yourself': 'critical_thinking',
    'dangerous-blindness': 'critical_thinking',
    'turn-off-ai': 'critical_thinking',
    'ai-opposite-of-art': 'art_creativity',
    'madonna-ai-art': 'art_creativity',
    'voltaire-read-dance': 'art_creativity',
    'virginia-woolf-trigger': 'art_creativity',
    'disappear-with-art': 'art_creativity',
    'barbra-streisand': 'art_creativity',
    'einstein-passionately-curious': 'intellect_learning',
    'feynman-education': 'intellect_learning',
    'feynman-knowledge-isnt-free': 'intellect_learning',
    'feynman-no-shame-knowing': 'intellect_learning',
    'feynman-study-hard': 'intellect_learning',
    'wisdom-of-socrates': 'intellect_learning',
    'la-sagesse-de-socrate': 'intellect_learning',
    'steve-jobs': 'intellect_learning',
    'home-is-a-time': 'nostalgia_foyer',
    'saudade': 'nostalgia_foyer',
    'favorite-days-not-happened': 'nostalgia_foyer',
    'dolto-difficult-child': 'parenting_autonomy',
    'langle-suppressed-child': 'parenting_autonomy',
    'neufeld-resistance': 'parenting_autonomy',
    'prishvin-convenient-people': 'parenting_autonomy',
    'sukhomlinsky-obedience': 'parenting_autonomy',
    'accept-gay-child': 'parenting_autonomy',
    'dostoevsky-loving-power': 'relationships_vulnerability',
    'dostoevsky-politics-religion': 'relationships_vulnerability',
    'amish-tripathi': 'relationships_vulnerability',
    'brianna-pastor-proud': 'relationships_vulnerability',
    'jim-kwik': 'relationships_vulnerability',
    'robin-williams': 'relationships_vulnerability',
    'sadia-hakim-humanity': 'relationships_vulnerability',
    'weird-people-dreams': 'relationships_vulnerability',
    'underpaid-politicians-teachers': 'social_justice',
    'women-mothers-tragedy': 'social_justice',
    'sonder': 'empathy_perspective',
    'ability-to-notice-beauty': 'empathy_perspective',
    'compass-and-clock': 'empathy_perspective',
    'rain-seller-umbrella': 'empathy_perspective',
    'must-die-first': 'existential_transformation',
    'you-are-a-soul': 'existential_transformation',
    'stay-free-quote': 'existential_transformation',
    'memory-cards-storage-quote': 'digital_consumerism'
}

paths = {
    'en': 'events/sessions/the-greatest-quotes',
    'fr': 'events/fr/sessions/the-greatest-quotes',
    'ru': 'events/ru/sessions/the-greatest-quotes'
}

def clean_and_format_item(text, keywords):
    soup = BeautifulSoup(f"<div>{text}</div>", "html.parser")

    def bold_text_nodes(parent):
        for child in list(parent.contents):
            if child.name == 'strong':
                continue
            elif child.name is None: # text node
                text_content = str(child)
                new_parts = []
                last_idx = 0

                # Create union regex
                pattern = r'\b(' + '|'.join(map(re.escape, keywords)) + r')\b'
                for m in re.finditer(pattern, text_content, re.IGNORECASE):
                    new_parts.append(text_content[last_idx:m.start()])
                    new_parts.append(f"<strong>{m.group(1)}</strong>")
                    last_idx = m.end()
                new_parts.append(text_content[last_idx:])

                new_html = "".join(new_parts)
                if new_html != text_content:
                    child_idx = parent.contents.index(child)
                    child.extract()
                    parsed_node = BeautifulSoup(new_html, "html.parser")
                    for item in reversed(parsed_node.contents):
                        parent.insert(child_idx, item)
            else:
                bold_text_nodes(child)

    bold_text_nodes(soup.div)
    return "".join(str(c) for c in soup.div.contents)

def process_html_file(filepath, lang):
    filename = os.path.basename(filepath)
    if filename.startswith("template"):
        return

    # 1. Determine theme category from filename
    theme_cat = None
    for k, v in THEME_MAPPING.items():
        if k in filename:
            theme_cat = v
            break

    if not theme_cat:
        print(f"Skipping {filename}: Theme not found.")
        return

    lang_db = DATABASE.get(lang, DATABASE["en"])
    data = lang_db.get(theme_cat, lang_db["critical_thinking"])

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    soup = BeautifulSoup(content, "html.parser")

    # Detect level from metadata
    meta_grid = soup.find('div', class_='session-meta-grid')
    level_p = 'B1' # default
    if meta_grid:
        items = meta_grid.find_all('div', class_='meta-item')
        for item in items:
            h4 = item.find('h4')
            if h4:
                h4_text = h4.get_text(strip=True).lower()
                p_val = item.find('p').get_text(strip=True) if item.find('p') else 'N/A'
                if 'level' in h4_text or 'niveau' in h4_text or 'уровень' in h4_text:
                    level_p = p_val

    print(f"File: {filename} | Lang: {lang} | Theme: {theme_cat} | Focus: {data['focus']}")

    # 2. Decompose existing grammar block if any (id="s-grammar" or id="grammar")
    existing_g1 = soup.find(id="s-grammar")
    if existing_g1:
        existing_g1.decompose()
    existing_g2 = soup.find(id="grammar")
    if existing_g2:
        existing_g2.decompose()

    # 3. Build state-driven interactive grammar block
    chips = list(data["chips"])
    unique_chips = list(dict.fromkeys(chips))
    random.shuffle(unique_chips)

    # Use deep-brown theme matching Greatest Quotes visual style (#5D4037 / #3E2723)
    chips_html_list = []
    for chip in unique_chips:
        chips_html_list.append(f'<span class="grammar-tap-chip" style="background:#FFFDF9; border:1px solid #5D4037; padding:5px 12px; border-radius:20px; cursor:pointer; font-weight:600; color:#5D4037; font-size:0.85rem; user-select:none; transition:all 0.2s;" onclick="COSY.selectGrammarChip(this)">{chip}</span>')
    chips_html = "\n            ".join(chips_html_list)

    tasks_html_list = []
    for t in data["tasks"]:
        tasks_html_list.append(f'<li>{t}</li>')
    tasks_html = "\n            ".join(tasks_html_list)

    # Localize label terms depending on language
    title_label = "⚡ Grammar Practice"
    exp_label = "⚡ Grammar Explanation"
    bank_label = "🧩 Interactive Word Bank:"
    bank_sub = "Tap a word chip below, then tap any empty bracket <code>[_____]</code> to place it!"
    part_a_label = "📝 Task 1 — Part A: Rule Formulation:"
    part_b_label = "📝 Task 1 — Part B: Structured Practice:"
    check_btn_label = "Check Answers"
    reset_btn_label = "Reset Board"
    speaking_label = "🗣️ Task 2 — Interactive Speaking:"

    if lang == "fr":
        title_label = f"⚡ Pratique de la grammaire — {data['focus']}"
        exp_label = "⚡ Explication de la grammaire"
        bank_label = "🧩 Banque de mots interactive :"
        bank_sub = "Appuyez sur un mot ci-dessous, puis appuyez sur des crochets vides <code>[_____]</code> pour le placer !"
        part_a_label = "📝 Exercice 1 — Partie A : Formulation de la règle :"
        part_b_label = "📝 Exercice 1 — Partie B : Pratique structurée :"
        check_btn_label = "Vérifier les réponses"
        reset_btn_label = "Réinitialiser le plateau"
        speaking_label = "🗣️ Exercice 2 — Expression orale interactive :"
    elif lang == "ru":
        title_label = f"⚡ Практика грамматики — {data['focus']}"
        exp_label = "⚡ Грамматическое объяснение"
        bank_label = "🧩 Интерактивный банк слов:"
        bank_sub = "Нажмите на слово ниже, затем нажмите на пустые скобки <code>[_____]</code>, чтобы вставить его!"
        part_a_label = "📝 Задание 1 — Часть А: Формулировка правила:"
        part_b_label = "📝 Задание 1 — Часть Б: Структурированная практика:"
        check_btn_label = "Проверить ответы"
        reset_btn_label = "Сбросить доску"
        speaking_label = "🗣️ Задание 2 — Интерактивная разговорная практика:"
    else:
        title_label = f"⚡ Grammar Practice — {data['focus']}"

    # Rich visual tokens matching Let's Celebrate/Wonder style but with Greatest Quotes brown branding
    grammar_html = f"""<div class="round-block grammar open" id="s-grammar">
<div class="round-header" onclick="COSY.toggleRound('s-grammar')" style="background:#EFEBE9; border-left: 5px solid #5D4037;">
<span>{title_label}</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block; padding:1.5rem 1.25rem;">
<div class="grammar-interactive-game" style="position:relative; z-index:2;">
<h3>{exp_label} ({level_p})</h3>
<p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">
{data['explanation']}
</p>
<div style="background: rgba(93, 64, 55, 0.03); border: 1px dashed rgba(93, 64, 55, 0.3); padding: 1.25rem; border-radius: 12px; margin-bottom: 1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #3E2723;">{bank_label}</strong>
<p style="font-size:0.82rem; color:var(--muted); margin:0 0 0.75rem 0;">{bank_sub}</p>
<div class="grammar-word-bank" style="display:flex; flex-wrap:wrap; gap:8px;">
{chips_html}
</div>
</div>
<div class="grammar-task-item" style="background: rgba(93, 64, 55, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #5D4037; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #3E2723;">{part_a_label}</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.8;">
{data['rule_part_a_html']}
</p>
</div>
<div class="grammar-task-item" style="background: rgba(93, 64, 55, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #5D4037; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #3E2723;">{part_b_label}</strong>
<ol style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--ink); line-height: 2.0;">
{tasks_html}</ol>
</div>
<div style="display:flex; gap:10px; margin-bottom:1.5rem;">
<button class="btn-verify" style="background:#5D4037; color:white; border:none; padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;" onclick="COSY.verifyGrammarGame(this)">{check_btn_label}</button>
<button class="btn-reset" style="background:transparent; border:1px solid var(--border); color:var(--muted); padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;" onclick="COSY.resetGrammarGame(this)">{reset_btn_label}</button>
</div>
<div class="grammar-task-item" style="background: rgba(93, 64, 55, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #5D4037; box-shadow: var(--shadow-sm);">
<strong style="display: block; margin-bottom: 0.5rem; color: #3E2723;">{speaking_label}</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.6;">
{data['speaking']}
</p>
</div>
</div>
</div>
</div>"""

    # Inject the block right after s-warm
    warmup_block = soup.find(id="s-warm")
    grammar_soup = BeautifulSoup(grammar_html, "html.parser")
    if warmup_block:
        warmup_block.insert_after(grammar_soup)
    else:
        container = soup.find(class_="rounds-container")
        if container:
            container.insert(0, grammar_soup)

    # 4. Weave grammar helper words into Round 1 and Round 2
    r1_block = soup.find(id="s-r1") or soup.find(class_="round-1")
    if r1_block:
        r1_items = r1_block.find_all(class_="round-item")
        for item in r1_items:
            main_div = item.find(class_="round-item-main")
            pers_div = item.find(class_="round-item-personal")
            if main_div:
                orig_html = "".join(str(c) for c in main_div.contents)
                new_html = clean_and_format_item(orig_html, data["keywords"])
                main_div.clear()
                main_div.append(BeautifulSoup(new_html, "html.parser"))
            if pers_div:
                orig_html = "".join(str(c) for c in pers_div.contents)
                new_html = clean_and_format_item(orig_html, data["keywords"])
                pers_div.clear()
                pers_div.append(BeautifulSoup(new_html, "html.parser"))

    r2_block = soup.find(id="s-r2") or soup.find(class_="round-2")
    if r2_block:
        r2_items = r2_block.find_all(class_="round-item")
        for item in r2_items:
            main_div = item.find(class_="round-item-main")
            pers_div = item.find(class_="round-item-personal")
            if main_div:
                orig_html = "".join(str(c) for c in main_div.contents)
                new_html = clean_and_format_item(orig_html, data["keywords"])
                main_div.clear()
                main_div.append(BeautifulSoup(new_html, "html.parser"))
            if pers_div:
                orig_html = "".join(str(c) for c in pers_div.contents)
                new_html = clean_and_format_item(orig_html, data["keywords"])
                pers_div.clear()
                pers_div.append(BeautifulSoup(new_html, "html.parser"))

    # 5. Overwrite the file with the parsed html
    with open(filepath, "w", encoding="utf-8") as f:
        html_str = str(soup)
        if not html_str.strip().startswith("<!DOCTYPE html>"):
            html_str = "<!DOCTYPE html>\n" + html_str
        f.write(html_str)

if __name__ == "__main__":
    for lang, folder in paths.items():
        if not os.path.exists(folder):
            continue
        print(f"\n==================== PROCESSING LANGUAGE: {lang.upper()} ====================")
        for f in sorted(os.listdir(folder)):
            if f.endswith('.html') and not f.startswith('template'):
                filepath = os.path.join(folder, f)
                process_html_file(filepath, lang)
    print("\n🎉 Done adding thematic interactive grammar sections & bolding grammar keywords site-wide!")
