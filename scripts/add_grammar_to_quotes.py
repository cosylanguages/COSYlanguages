import os
import re
import random
from bs4 import BeautifulSoup

DATABASE = {
    "en": {
        "A2": {
            "focus": "Adverbs of Frequency & Habitual Present",
            "explanation": "Use <strong>Adverbs of Frequency</strong> (always, usually, often, sometimes, never) to describe how frequently a behavior or habit occurs in the present.",
            "rule_part_a_html": "Complete the rule: Adverbs of frequency typically go <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"before\">_____</span> the main verb, but <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"after\">_____</span> the verb 'to be'. For questions, we use the auxiliary <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"do\">_____</span> or <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"does\">_____</span>.",
            "tasks": [
                "He <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"always\">_____</span> reflects on profound quotes before sleeping.",
                "They <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"do not\">_____</span> understand the complex theories of quantum physics.",
                "Does she <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"often\">_____</span> read philosophical works during her free time?",
                "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"sometimes\">_____</span> find wisdom in simple daily conversations.",
                "Wisdom is <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"never\">_____</span> found in arrogant minds."
            ],
            "chips": ["before", "after", "do", "does", "always", "do not", "often", "sometimes", "never"],
            "speaking": "How often do you think about the meaning of life or read inspiring thoughts? Share using frequency adverbs.",
            "keywords": ["always", "usually", "often", "sometimes", "never", "do", "does"]
        },
        "B1": {
            "focus": "Second Conditional & Hypothetical Speculations",
            "explanation": "The <strong>Second Conditional</strong> is used to talk about speculative, highly unlikely, or imaginary present/future situations.",
            "rule_part_a_html": "Complete the rule: In the Second Conditional, the if-clause uses the <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Past Simple\">_____</span> tense, and the main clause uses <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would\">_____</span> or <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"could\">_____</span> + base verb.",
            "tasks": [
                "If we <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had\">_____</span> more time, we would contemplate nature daily.",
                "I <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would feel\">_____</span> much happier if society were less chaotic.",
                "If you could meet any historical philosopher, who <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"would\">_____</span> you choose?",
                "If they <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were\">_____</span> here, they would support your decision.",
                "We <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"could achieve\">_____</span> inner peace if we stopped worrying about public opinions."
            ],
            "chips": ["Past Simple", "would", "could", "had", "would feel", "would", "were", "could achieve"],
            "speaking": "If you could change one thing about modern society to make it more peaceful, what would it be and why?",
            "keywords": ["would", "were", "could", "had", "should", "might"]
        },
        "B2": {
            "focus": "Modal Verbs of Active Deduction & Speculation",
            "explanation": "Use <strong>Modal Verbs of Deduction</strong> (must, might, could, can't) to express different degrees of certainty about a present or past situation.",
            "rule_part_a_html": "Complete the rule: To express absolute present certainty, we use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"must\">_____</span>. For lower certainty or possibilities, we use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"might\">_____</span> or <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"could\">_____</span>. To express impossibility, we use <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"cannot\">_____</span>.",
            "tasks": [
                "This ancient manuscript <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"must contain\">_____</span> profound truths, as it is highly revered.",
                "He <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"might be\">_____</span> contemplating the nature of the cosmos right now.",
                "The theory <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"could explain\">_____</span> the paradox, but scientists are still skeptical.",
                "That rumor <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"cannot be\">_____</span> true; it contradicts all historical evidence.",
                "She <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"must feel\">_____</span> incredibly proud of her breakthrough achievement."
            ],
            "chips": ["must", "might", "could", "cannot", "must contain", "might be", "could explain", "cannot be", "must feel"],
            "speaking": "Look at a famous quote or artwork. What do you deduct must have been the author's state of mind when creating it?",
            "keywords": ["must", "might", "should", "could", "would", "were", "had"]
        },
        "C1": {
            "focus": "Subjunctive Mood & Speculative Conditional Clauses",
            "explanation": "The <strong>Subjunctive Mood</strong> and advanced hypothetical conditional clauses express wishes, urgent recommendations, or regrets.",
            "rule_part_a_html": "Complete the rule: For hypothetical regrets about the past, use the past modal + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"have\">_____</span> + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"past participle\">_____</span>. To express highly speculative wishes, we use the subjunctive <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were\">_____</span>.",
            "tasks": [
                "It is essential that he <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"understand\">_____</span> the ethical implications of this dialogue.",
                "I wish our leaders <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"were\">_____</span> more humble and willing to listen.",
                "If only they <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"had analyzed\">_____</span> the paradox before publishing.",
                "They recommended that she <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"contemplate\">_____</span> the decision with absolute sincerity.",
                "Had I <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"known\">_____</span> the truth, I would have acted differently."
            ],
            "chips": ["have", "past participle", "were", "understand", "were", "had analyzed", "contemplate", "known"],
            "speaking": "Share a deep, hypothetical reflection or regret about a historic event. What should humanity have done differently?",
            "keywords": ["were", "should", "had", "would", "could", "lest", "might"]
        }
    },
    "fr": {
        "A2": {
            "focus": "Adverbes de Fréquence & Présent d'Habitude",
            "explanation": "Utilisez les <strong>Adverbes de Fréquence</strong> (toujours, souvent, parfois, jamais) pour décrire la régularité d'une habitude ou d'un comportement.",
            "rule_part_a_html": "Complétez la règle : Les adverbes de fréquence se placent généralement <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"après\">_____</span> le verbe conjugué au présent. Dans une phrase négative, 'jamais' remplace le mot <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"pas\">_____</span>.",
            "tasks": [
                "Il réfléchit <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"toujours\">_____</span> avant de prendre une décision importante.",
                "Nous ne lisons <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"jamais\">_____</span> de théories sans vérifier les faits.",
                "Est-ce que tu discutes <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"souvent\">_____</span> de philosophie avec tes parents?",
                "Ils trouvent <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"parfois\">_____</span> la paix dans les moments de silence.",
                "La vérité n'est <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"jamais\">_____</span> simple à accepter."
            ],
            "chips": ["après", "pas", "toujours", "jamais", "souvent", "parfois", "jamais"],
            "speaking": "À quelle fréquence lisez-vous ou pensez-vous à des sujets philosophiques ? Partagez vos habitudes.",
            "keywords": ["toujours", "souvent", "parfois", "jamais", "fait", "faisons"]
        },
        "B1": {
            "focus": "Conditionnel Présent & Hypothèses Spéculatives",
            "explanation": "Le <strong>Conditionnel Présent</strong> sert à exprimer des faits imaginaires, des hypothèses ou des souhaits polis.",
            "rule_part_a_html": "Complétez la règle : Pour formuler une hypothèse avec 'si' portant sur le présent, on utilise 'si' + <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Imparfait\">_____</span>, suivi du verbe principal au <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"Conditionnel Présent\">_____</span>.",
            "tasks": [
                "Si j'avais le choix, je <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"vivrais\">_____</span> dans un endroit plus calme.",
                "Ils <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"pourraient\">_____</span> comprendre si vous leur parliez avec sincérité.",
                "Si vous rencontriez Socrate, que lui <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"diriez-vous\">_____</span>?",
                "Si la société <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"était\">_____</span> moins superficielle, nous serions plus heureux.",
                "Nous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"serions\">_____</span> plus sereins sans la pression des réseaux sociaux."
            ],
            "chips": ["Imparfait", "Conditionnel Présent", "vivrais", "pourraient", "diriez-vous", "était", "serions"],
            "speaking": "Si vous pouviez changer une seule règle dans la société moderne pour la rendre plus juste, que feriez-vous?",
            "keywords": ["serait", "seraient", "aurait", "auraient", "si", "pouvais", "pouvez", "voulait"]
        },
        "B2": {
            "focus": "Expressions de l'Obligation & Devoir / Pouvoir",
            "explanation": "Utilisez les verbes modaux de conjecture comme <strong>devoir</strong> et <strong>pouvoir</strong> pour exprimer différents degrés de certitude, d'obligation ou de possibilité.",
            "rule_part_a_html": "Complétez la règle : Pour exprimer une certitude ou une forte probabilité, on utilise le verbe <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"devoir\">_____</span>. Pour exprimer une simple possibilité, on préfère le verbe <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"pouvoir\">_____</span>.",
            "tasks": [
                "Cette citation <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"doit\">_____</span> provenir d'un auteur antique.",
                "Cette idée <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"pourrait\">_____</span> changer votre perspective sur la vie.",
                "Les parents <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"doivent\">_____</span> soutenir leurs enfants de manière inconditionnelle.",
                "Il <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"peut\">_____</span> y avoir plusieurs interprétations de cette phrase.",
                "Vous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"devriez\">_____</span> réfléchir à ce paradoxe avant de répondre."
            ],
            "chips": ["devoir", "pouvoir", "doit", "pourrait", "doivent", "peut", "devriez"],
            "speaking": "Selon vous, que devons-nous enseigner en priorité aux futures générations pour éviter les conflits ?",
            "keywords": ["devrait", "devraient", "pourrait", "pourraient", "doit", "doivent"]
        },
        "C1": {
            "focus": "Subjonctif Présent & Formules d'Exigence ou de Souhait",
            "explanation": "Le <strong>Subjonctif Présent</strong> s'emploie pour exprimer le doute, la nécessité, la volonté, le désir ou une obligation personnelle.",
            "rule_part_a_html": "Complétez la règle : Le subjonctif est obligatoire après des locutions impersonnelles comme 'il faut que' ou 'il est essentiel <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"que\">_____</span>'. Les verbes réguliers du premier groupe au subjonctif prennent les terminaisons -e, -es, -e, -ions, -iez, <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"-ent\">_____</span>.",
            "tasks": [
                "Il est essentiel que chaque élève <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"comprenne\">_____</span> la valeur du dialogue.",
                "Je souhaite que notre société <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"soit\">_____</span> plus tolérante envers la diversité.",
                "Bien qu'il <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"sache\">_____</span> la vérité, il préfère garder le silence.",
                "Pourvu que la réconciliation <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"puisse\">_____</span> réparer les liens familiaux.",
                "Il faut que nous <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"fassions\">_____</span> preuve de courage face aux préjugés."
            ],
            "chips": ["que", "-ent", "comprenne", "soit", "sache", "puisse", "fassions"],
            "speaking": "Formulez trois souhaits pour l'avenir de l'humanité en utilisant des structures au subjonctif présent.",
            "keywords": ["soit", "soient", "eût", "fût", "que", "bien que", "afin que"]
        }
    },
    "ru": {
        "A2": {
            "focus": "Наречия частоты и настоящее время",
            "explanation": "Используйте <strong>Наречия частоты</strong> (всегда, часто, иногда, никогда) для описания регулярных привычек и действий в настоящем времени.",
            "rule_part_a_html": "Завершите правило: Наречия частоты в русском языке обычно ставятся <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"перед\">_____</span> глаголом. С отрицанием 'никогда' обязательно использовать частицу <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"не\">_____</span>.",
            "tasks": [
                "Он <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"всегда\">_____</span> думает о смысле жизни перед сном.",
                "Мы <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"никогда не\">_____</span> спорим о политике с малознакомыми людьми.",
                "Как <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"часто\">_____</span> вы читаете вдохновляющие цитаты?",
                "Она <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"иногда\">_____</span> находит мудрость в простых вещах.",
                "Мудрые люди <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"редко\">_____</span> хвастаются своими знаниями."
            ],
            "chips": ["перед", "не", "всегда", "никогда не", "часто", "иногда", "редко"],
            "speaking": "Как часто вы размышляете о важных жизненных решениях? Расскажите партнеру.",
            "keywords": ["всегда", "часто", "иногда", "никогда", "редко"]
        },
        "B1": {
            "focus": "Условное наклонение и гипотезы",
            "explanation": "<strong>Условное наклонение</strong> используется для выражения воображаемых, гипотетических или желаемых ситуаций в настоящем, прошлом или будущем.",
            "rule_part_a_html": "Завершите правило: В русском языке условное наклонение формируется с помощью глагола в прошедшем времени и частицы <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"бы\">_____</span>. Союз 'если' часто начинает придаточное предложение <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"условия\">_____</span>.",
            "tasks": [
                "Если <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"бы\">_____</span> у меня было больше времени, я бы читал каждый день.",
                "Я <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"был бы\">_____</span> рад встретиться с великим писателем прошлого.",
                "Если <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"бы\">_____</span> люди были добрее, мир стал бы лучше.",
                "Мы <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"могли бы\">_____</span> избежать конфликта, если бы выслушали друг друга.",
                "Что <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"сделал бы\">_____</span> ты на моем месте в этой ситуации?"
            ],
            "chips": ["бы", "условия", "бы", "был бы", "бы", "могли бы", "сделал бы"],
            "speaking": "Если бы вы могли изменить одно историческое событие, что бы вы выбрали и почему?",
            "keywords": ["бы", "если", "должен", "должна", "должно", "должны", "мог", "могла", "могли", "было"]
        },
        "B2": {
            "focus": "Выражение модальности, долженствования и возможности",
            "explanation": "Используйте краткие прилагательные (<strong>должен</strong>, <strong>обязан</strong>) и модальные слова для выражения разной степени необходимости, уверенности или вероятности.",
            "rule_part_a_html": "Завершите правило: Краткое прилагательное 'должен' согласуется с подлежащим в <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"роде\">_____</span> и числе. Для выражения мягкой рекомендации используется слово <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"следует\">_____</span>.",
            "tasks": [
                "Каждый человек <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"должен\">_____</span> уважать личные границы окружающих.",
                "Вам <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"следует\">_____</span> внимательно проанализировать это высказывание.",
                "Эта гипотеза <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"может\">_____</span> оказаться верной при детальной проверке.",
                "Родители не <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"должны\">_____</span> подавлять индивидуальность ребенка.",
                "Мы <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"можем\">_____</span> найти истину только в процессе честного диалога."
            ],
            "chips": ["роде", "следует", "должен", "следует", "может", "должны", "можем"],
            "speaking": "Что, по вашему мнению, каждый современный человек должен делать для сохранения своего ментального здоровья?",
            "keywords": ["бы", "если", "должен", "должна", "должно", "должны", "мог", "могла", "могли", "было"]
        },
        "C1": {
            "focus": "Сослагательное наклонение и сложные синтаксические конструкции",
            "explanation": "Изучите использование сложных союзов (чтобы, если бы, пусть) для выражения сильного волеизъявления, требований, сожалений или нереальных условий.",
            "rule_part_a_html": "Завершите правило: В целевых предложениях после союза 'чтобы' используется глагол в <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"прошедшем\">_____</span> времени. Союз 'пусть' выражает <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"пожелание\">_____</span> или призыв к действию.",
            "tasks": [
                "Я хочу, чтобы вы <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"поняли\">_____</span> всю глубину этого философского парадокса.",
                "Пусть каждый человек <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"найдет\">_____</span> свой собственный путь к внутренней гармонии.",
                "Если бы общество <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"прислушалось\">_____</span> к философам, многих ошибок удалось бы избежать.",
                "Важно, чтобы мы не <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"забывали\">_____</span> о значении эмпатии и прощения.",
                "Какое бы решение вы ни <span class=\"grammar-gap\" onclick=\"COSY.placeGrammarChip(this)\" data-answer=\"приняли\">_____</span>, будьте честны с самими собой."
            ],
            "chips": ["прошедшем", "пожелание", "поняли", "найдет", "прислушалось", "забывали", "приняли"],
            "speaking": "Выразите свои надежды и пожелания современному обществу, используя сложные союзы 'чтобы', 'пусть' и условные формы.",
            "keywords": ["бы", "если", "должен", "должна", "должно", "должны", "мог", "могла", "могли", "было"]
        }
    }
}

paths = {
    'en': 'events/sessions/the-greatest-quotes',
    'fr': 'events/fr/sessions/the-greatest-quotes',
    'ru': 'events/ru/sessions/the-greatest-quotes'
}

def clean_and_format_item(text, keywords):
    # Regex to wrap grammar keywords in <strong> tags if they aren't already wrapped.
    # To avoid double-wrapping, we temporarily unwrap any existing <strong> tags of those keywords,
    # or better yet, we can do a smart tokenization or regex search-and-replace.
    # Let's do a regex search that matches words not inside <strong>.
    # Actually, a simpler and safer approach:
    # First, let's identify any existing <strong>...</strong>. We can use BeautifulSoup or a safe regex replace.
    # Let's use a standard tokenization/replace using regex that avoids rewriting inside html tags.

    # Let's write a function to bold terms nicely
    # We find any word boundary of the keywords and bold them. But we shouldn't touch words that are inside an HTML tag attribute or already inside <strong>.
    # An elegant way to do this with BeautifulSoup:
    soup = BeautifulSoup(f"<div>{text}</div>", "html.parser")

    # Recursively traverse text nodes and apply bolding
    def bold_text_nodes(parent):
        for child in list(parent.contents):
            if child.name == 'strong':
                # Already bolded! Do not bold anything inside it or its keywords to avoid redundant bolding
                continue
            elif child.name is None: # text node
                text_content = str(child)
                new_parts = []
                last_idx = 0

                # Create union regex
                pattern = r'\b(' + '|'.join(map(re.escape, keywords)) + r')\b'
                for m in re.finditer(pattern, text_content, re.IGNORECASE):
                    # Append preceding text
                    new_parts.append(text_content[last_idx:m.start()])
                    # Append bolded keyword
                    new_parts.append(f"<strong>{m.group(1)}</strong>")
                    last_idx = m.end()
                new_parts.append(text_content[last_idx:])

                new_html = "".join(new_parts)
                if new_html != text_content:
                    # Replace child text node with parsed html components
                    sibling = child.previous_sibling
                    child_idx = parent.contents.index(child)
                    child.extract()
                    parsed_node = BeautifulSoup(new_html, "html.parser")
                    # Insert components at child_idx
                    for item in reversed(parsed_node.contents):
                        parent.insert(child_idx, item)
            else:
                bold_text_nodes(child)

    bold_text_nodes(soup.div)
    # Return the inner html of soup.div
    return "".join(str(c) for c in soup.div.contents)

def process_html_file(filepath, lang):
    filename = os.path.basename(filepath)
    if filename.startswith("template"):
        return

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    soup = BeautifulSoup(content, "html.parser")

    # 1. Detect level from metadata
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

    # Clean level_p to standard key: A2, B1, B2, C1
    lvl = 'B1'
    if 'a2' in level_p.lower() or 'starter' in level_p.lower() or 'elementary' in level_p.lower() or 'débutant' in level_p.lower():
        lvl = 'A2'
    elif 'b2' in level_p.lower() or 'выше среднего' in level_p.lower() or 'upper' in level_p.lower():
        lvl = 'B2'
    elif 'c1' in level_p.lower() or 'avancé' in level_p.lower() or 'advanced' in level_p.lower():
        lvl = 'C1'

    # Retrieve data mapping
    lang_db = DATABASE.get(lang, DATABASE["en"])
    data = lang_db.get(lvl, lang_db["B1"])

    print(f"File: {filename} | Lang: {lang} | CEFR: {lvl} ({level_p}) | Topic: {data['focus']}")

    # 2. Decompose existing grammar block if any (id="s-grammar" or id="grammar")
    existing_g1 = soup.find(id="s-grammar")
    if existing_g1:
        existing_g1.decompose()
    existing_g2 = soup.find(id="grammar")
    if existing_g2:
        existing_g2.decompose()

    # 3. Build state-driven interactive grammar block
    chips = list(data["chips"])
    # Filter out duplicates
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

    # Visual tokens and styles matching Let's Celebrate standard
    grammar_html = f"""<div class="round-block grammar open" id="s-grammar">
<div class="round-header" onclick="COSY.toggleRound('s-grammar')" style="background:#FFF3E0; border-left: 5px solid #BA7517;">
<span>{title_label}</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block; padding:1.5rem 1.25rem;">
<div class="grammar-interactive-game" style="position:relative; z-index:2;">
<h3>{exp_label} ({level_p})</h3>
<p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">
{data['explanation']}
</p>
<div style="background: rgba(186, 117, 23, 0.03); border: 1px dashed rgba(186, 117, 23, 0.3); padding: 1.25rem; border-radius: 12px; margin-bottom: 1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #5c390b;">{bank_label}</strong>
<p style="font-size:0.82rem; color:var(--muted); margin:0 0 0.75rem 0;">{bank_sub}</p>
<div class="grammar-word-bank" style="display:flex; flex-wrap:wrap; gap:8px;">
{chips_html}
</div>
</div>
<div class="grammar-task-item" style="background: rgba(186, 117, 23, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #BA7517; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #5c390b;">{part_a_label}</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.8;">
{data['rule_part_a_html']}
</p>
</div>
<div class="grammar-task-item" style="background: rgba(186, 117, 23, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #BA7517; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #5c390b;">{part_b_label}</strong>
<ol style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--ink); line-height: 2.0;">
{tasks_html}</ol>
</div>
<div style="display:flex; gap:10px; margin-bottom:1.5rem;">
<button class="btn-verify" style="background:#0F6E56; color:white; border:none; padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;" onclick="COSY.verifyGrammarGame(this)">{check_btn_label}</button>
<button class="btn-reset" style="background:transparent; border:1px solid var(--border); color:var(--muted); padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;" onclick="COSY.resetGrammarGame(this)">{reset_btn_label}</button>
</div>
<div class="grammar-task-item" style="background: rgba(186, 117, 23, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #BA7517; box-shadow: var(--shadow-sm);">
<strong style="display: block; margin-bottom: 0.5rem; color: #5c390b;">{speaking_label}</strong>
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
        # Fallback to top of rounds container
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
        # bs4 str(soup) might exclude DOCTYPE or format incorrectly, let's keep it pristine
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
    print("\n🎉 Done adding interactive grammar sections & bolding grammar keywords site-wide!")
