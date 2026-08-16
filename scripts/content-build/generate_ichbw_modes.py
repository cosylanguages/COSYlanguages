import os
import re

# Complete mapping for all 19 Wonder session files (and French equivalents)
DRAFT_MAPPING = {
    'whether-raindrops-select-where-to-fall.html': '01',
    'do-insects-hide-when-it-rains.html': '02',
    'is-bad-weather-gods-anger.html': '03',
    'always-watched-in-a-crowd.html': '04',
    'why-is-everyone-copying-me.html': '05',
    'feeling-empty-after-series.html': '06',
    'death-of-the-album.html': '07',
    'ugly-produce-anti-waste.html': '08',
    'does-euthanasia-reduce-suicide-rates.html': '09',
    'appreciating-amy-winehouse-after-death.html': '10',
    'why-do-we-try-to-relate-to-adhd.html': '11',
    'is-parenting-instinct-a-real-thing-or-scam.html': '12',
    'are-traditions-hidden-monogamy.html': '13',
    'collective-guilt-global-crisis.html': '14',
    'are-traditions-hidden-monogamy-upper-intermediate.html': '15',
    'i-have-no-time-for-it.html': '16',
    'why-do-i-spend-more-when-i-earn-more.html': '17',
    'does-inclusive-language-make-us-equal.html': '18',
    'is-marketing-making-sedentary-lifestyle-a-new-normality.html': '19',
    'avoiding-things-for-free.html': '20',
    'is-it-possible-to-find-love-without-sex.html': '21'
}

# Specialized grammar configurations per draft/topic
GRAMMAR_DB = {
    "21": {
        "title_en": "⚡ Inversion with Negative Adverbials",
        "title_fr": "⚡ Inversion avec adverbes négatifs",
        "title_ru": "⚡ Вводные конструкции и эмоциональное усиление",
        "desc_en": "Use inversion after negative or restrictive adverbials (rarely, seldom, not only, under no circumstances, only when) to add dramatic emphasis.",
        "desc_fr": "Utilisez l'inversion après des adverbes négatifs ou restrictifs pour ajouter une emphase dramatique.",
        "desc_ru": "Используйте вводные слова и инверсию для создания драматического акцента в разговоре.",
        "chips_en": ["Rarely do movies", "does society validate", "should we equate", "can humans achieve", "do"],
        "chips_fr": ["Rares sont les films qui", "la société valide-t-elle", "devrions-nous égaler", "les humains peuvent-ils", "font"],
        "chips_ru": ["Редко фильмы", "признает общество", "должны мы уравнивать", "люди могут достичь", "ли"],
        "sents_en": [
            ("<span class=\"grammar-gap\" data-answer=\"Rarely do movies\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> portray long-term love without sexual encounters.", "Rarely do movies"),
            ("Seldom <span class=\"grammar-gap\" data-answer=\"does society validate\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> romance that is purely platonic.", "does society validate"),
            ("Under no circumstances <span class=\"grammar-gap\" data-answer=\"should we equate\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> physical attraction with emotional devotion.", "should we equate")
        ],
        "sents_fr": [
            ("<span class=\"grammar-gap\" data-answer=\"Rares sont les films qui\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> dépeignent l'amour à long terme sans rapports sexuels.", "Rares sont les films qui"),
            ("Rarement <span class=\"grammar-gap\" data-answer=\"la société valide-t-elle\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> une romance purement platonique.", "la société valide-t-elle"),
            ("En aucun cas <span class=\"grammar-gap\" data-answer=\"devrions-nous égaler\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> l'attraction physique et la dévotion émotionnelle.", "devrions-nous égaler")
        ],
        "sents_ru": [
            ("<span class=\"grammar-gap\" data-answer=\"Редко фильмы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> показывают любовь без романтического подтекста.", "Редко фильмы"),
            ("Редко <span class=\"grammar-gap\" data-answer=\"признает общество\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> чистые платонические отношения.", "признает общество"),
            ("Ни при каких обстоятельствах не <span class=\"grammar-gap\" data-answer=\"должны мы уравнивать\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> страсть и духовность.", "должны мы уравнивать")
        ]
    },
    "01": {
        "title_en": "Speculative Conditionals",
        "title_fr": "Conditionnels spéculatifs",
        "desc_en": "Practice using second and third conditionals to speculate about hypothetical circumstances in life and fate.",
        "desc_fr": "Pratiquez le deuxième et le troisième conditionnels pour spéculer sur des circonstances hypothétiques.",
        "chips_en": ["would have", "had seen", "speculate", "would be", "coincidence"],
        "chips_fr": ["serait", "aurait été", "spéculer", "destin", "coïncidence"],
        "sents_en": [
            ("If we had known the exact path, we <span class=\"grammar-gap\" data-answer=\"would have\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> made different choices.", "would have"),
            ("If you <span class=\"grammar-gap\" data-answer=\"had seen\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the sign, would you have followed it?", "had seen"),
            ("It is exciting to <span class=\"grammar-gap\" data-answer=\"speculate\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> about what lies around the corner.", "speculate")
        ],
        "sents_fr": [
            ("Si nous avions connu le chemin exact, notre choix <span class=\"grammar-gap\" data-answer=\"aurait été\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> différent.", "aurait été"),
            ("Il est captivant de <span class=\"grammar-gap\" data-answer=\"spéculer\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> sur ce qui nous attend.", "spéculer"),
            ("Si la vie était un plan strict, ce <span class=\"grammar-gap\" data-answer=\"serait\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> d'un ennui mortel.", "serait")
        ]
    },
    "02": {
        "title_en": "Gerunds vs Infinitives (Avoid, Struggle, Decide)",
        "title_fr": "Gérondifs vs Infinitifs (Éviter, Lutter, Décider)",
        "desc_en": "Master verb patterns when discussing instinctive coping mechanisms and survival strategies under pressure.",
        "desc_fr": "Maîtrisez les structures verbales pour débattre des mécanismes de survie et des réflexes de protection.",
        "chips_en": ["evacuating", "to find", "struggling", "to protect", "hiding"],
        "chips_fr": ["évacuer", "à trouver", "en lutant", "de protéger", "se cacher"],
        "sents_en": [
            ("Insects avoid <span class=\"grammar-gap\" data-answer=\"evacuating\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> their shelter during heavy storms.", "evacuating"),
            ("They manage <span class=\"grammar-gap\" data-answer=\"to find\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> impenetrable micro-sanctuaries.", "to find"),
            ("We spend our lives <span class=\"grammar-gap\" data-answer=\"struggling\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to build emotional safety.", "struggling")
        ],
        "sents_fr": [
            ("Il est crucial d'éviter d'<span class=\"grammar-gap\" data-answer=\"évacuer\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> pendant l'orage.", "évacuer"),
            ("Ils parviennent <span class=\"grammar-gap\" data-answer=\"à trouver\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> des abris impénétrables.", "à trouver"),
            ("Nous essayons <span class=\"grammar-gap\" data-answer=\"de protéger\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> notre espace personnel.", "de protéger")
        ]
    },
    "default": {
        "title_en": "⚡ Grammatical Precision: Focus Adverbs",
        "title_fr": "⚡ Précision grammaticale : Marqueurs de discours",
        "title_ru": "⚡ Грамматическая точность: Вводные слова и наречия",
        "desc_en": "Enhance your discourse precision using targeted adverbs and stance markers to qualify your philosophical claims.",
        "desc_fr": "Améliorez votre précision discursive avec des adverbes ciblés et des marqueurs de positionnement.",
        "desc_ru": "Используйте точные вводные слова и наречия для выражения аргументов.",
        "chips_en": ["merely", "precisely", "particularly", "solely", "simply"],
        "chips_fr": ["seulement", "précisément", "particulièrement", "uniquement", "simplement"],
        "chips_ru": ["лишь", "именно", "особенно", "исключительно", "просто"],
        "sents_en": [
            ("This reaction is <span class=\"grammar-gap\" data-answer=\"merely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a surface observation; the reality is far deeper.", "merely"),
            ("That is <span class=\"grammar-gap\" data-answer=\"precisely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> why modern culture struggles with this question.", "precisely"),
            ("We should not judge this behavior <span class=\"grammar-gap\" data-answer=\"solely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> on immediate impressions.", "solely")
        ],
        "sents_fr": [
            ("Cette réaction est <span class=\"grammar-gap\" data-answer=\"seulement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> une observation superficielle.", "seulement"),
            ("C'est <span class=\"grammar-gap\" data-answer=\"précisément\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> pourquoi la société moderne hésite.", "précisément"),
            ("On ne peut pas juger ce phénomène <span class=\"grammar-gap\" data-answer=\"uniquement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> sur les apparences.", "uniquement")
        ],
        "sents_ru": [
            ("Эта реакция — <span class=\"grammar-gap\" data-answer=\"лишь\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> поверхностное наблюдение.", "лишь"),
            ("Именно <span class=\"grammar-gap\" data-answer=\"именно\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> поэтому общество задается этим вопросом.", "именно"),
            ("Не стоит судить об этом <span class=\"grammar-gap\" data-answer=\"исключительно\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> по первым впечатлениям.", "исключительно")
        ]
    }
}

def clean_html_text(raw):
    return re.sub(r'<[^>]+>', '', raw).strip()

def parse_session_content(content):
    """Extracts title, prose/lead-in, vocab words, and 50 question pairs from original HTML."""
    # Title
    t_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL | re.IGNORECASE)
    title = clean_html_text(t_match.group(1)) if t_match else 'I Couldn\'t Help But Wonder'

    # Lead-in / Prose quote
    p_match = re.search(r'<div class=\"cosy-prose[^\"]*\"[^>]*>(.*?)</div>', content, re.DOTALL)
    if not p_match:
        p_match = re.search(r'<blockquote[^>]*>(.*?)</blockquote>', content, re.DOTALL)
    if not p_match:
        p_match = re.search(r'<div class=\"lead-in[^\"]*\"[^>]*>(.*?)</div>', content, re.DOTALL)

    prose = clean_html_text(p_match.group(1)) if p_match else ""
    if not prose or len(prose) < 20:
        prose = f"As I pondered {title.lower()}, I couldn't help but wonder about the hidden forces shaping our daily lives..."

    # Vocab words
    vocab_matches = re.findall(r'<div class=\"vocab-word\">(.*?)</div>', content)
    vocab_words = [clean_html_text(v) for v in vocab_matches]
    # Deduplicate while preserving order
    seen = set()
    unique_vocab = [w for w in vocab_words if not (w.lower() in seen or seen.add(w.lower()))][:10]
    while len(unique_vocab) < 10:
        unique_vocab.append(f"Concept_{len(unique_vocab)+1}")

    # Extract Question Pairs
    m_main = re.findall(r'<div class=\"round-item-main\">(.*?)</div>', content, re.DOTALL)
    m_pers = re.findall(r'<div class=\"round-item-personal\">(.*?)</div>', content, re.DOTALL)

    q_pairs = []
    for m, p in zip(m_main, m_pers):
        q_pairs.append((m.strip(), p.strip()))

    # If question pairs are missing or fewer than 50, cycle extracted pairs or construct clean fallback pairs
    initial_q_pairs = list(q_pairs)
    if initial_q_pairs:
        while len(q_pairs) < 50:
            q_pairs.append(initial_q_pairs[len(q_pairs) % len(initial_q_pairs)])
    else:
        clean_title = re.sub(r'\?$', '', title).strip()
        while len(q_pairs) < 50:
            idx = len(q_pairs) + 1
            w_word = unique_vocab[(idx - 1) % len(unique_vocab)]
            q_pairs.append((
                f"How does exploring '{clean_title}' impact our understanding of <strong>{w_word}</strong>?",
                f"★ Have you ever felt a strong personal connection to {w_word} in your daily routine?"
            ))

    return title, prose, unique_vocab, q_pairs

def get_unit_titles(title, is_french):
    """Generates thematic titles for Units 2 to 6 based on session topic."""
    t_lower = title.lower()
    if is_french:
        if "album" in t_lower:
            return ["L'Ère du Single & Instantanéité", "L'Art de l'Écoute Intégrale", "Économie du Streaming & Attention", "Nostalgie vs Modernité Musique", "L'Avenir du Format Album"]
        elif "égaux" in t_lower or "égal" in t_lower:
            return ["Révolution Linguistique & Égalité", "Symbolique des Mots au Quotidien", "Inclusivité vs Efficacité", "Gouvernance & Réformes de la Langue", "L'Avenir du Langage Inclusif"]
        elif "série" in t_lower:
            return ["L'Attachement Parasocial aux Personnages", "L'Immersion de la Binge-Observation", "Le Vide de la Fin d'Histoire", "Culture Écran vs Vie Réelle", "L'Évolution du Récit Télévisuel"]
        elif "parent" in t_lower or "instinct" in t_lower:
            return ["Pression Sociale vs Réalité Biologique", "Mythe du Parent Parfait", "Inné, Acquis & Conditionnement", "Soutien Collectif vs Isolation", "La Parentalité de Demain"]
        elif "aliment" in t_lower or "gaspillage" in t_lower:
            return ["Obsession Standardisée du Visuel", "Conséquences du Gaspillage Alimentaire", "Consommation Éthique vs Esthétique", "Chaîne de Production & Grande Distribution", "L'Avenir de l'Alimentation Durable"]
        elif "tdah" in t_lower:
            return ["Autodiagnostic & Réseaux Sociaux", "Attention Moderne & Surcharges Informatiques", "Normalisation & Stigmatisation", "Santé Mentale au Travail", "L'Avenir des Diagnostic Neurodivergents"]
        else:
            return ["Premières Impressions & Fondations", "Analyse Approfondie du Sujet", "Regards Croisés & Controverses", "Inspirations & Responsabilités Sociale", "Horizon Futurs & Spéculations"]
    else:
        if "crowd" in t_lower or "watched" in t_lower:
            return ["The Spotlight Effect in Public Spaces", "Paranoia vs Social Vigilance", "Digital Surveillance & Anonymity", "Social Performance & Anxiety", "The Future of Privacy in Crowds"]
        elif "amy" in t_lower or "death" in t_lower:
            return ["Posthumous Canonization of Genius", "Voyeurism & Media Exploitation", "Grief as Cultural Performance", "The Cost of Artistic Devotion", "Protecting Vulnerable Icons"]
        elif "tradition" in t_lower or "monogamy" in t_lower:
            return ["Traditional Frameworks vs Individual Freedom", "Social Monopolies on Romance", "Cultural Pressure & Conformity", "Reimagining Long-Term Commitment", "The Future of Social Contracts"]
        elif "planet" in t_lower or "guilt" in t_lower:
            return ["Individual Guilt vs Corporate Responsibility", "Eco-Anxiety & Mental Exhaustion", "Hypocrisy in Daily Sustainability", "Collective Action & Ethical Living", "The Next Decade of Environmental Mindset"]
        elif "album" in t_lower:
            return ["The Shift from Albums to Algorithmic Playlists", "Deep Listening vs Fast Consumption", "Economic Reality of Modern Musicians", "Cultural Loss & Nostalgia", "The Rebirth of Physical Media"]
        elif "insect" in t_lower:
            return ["Instinctive Refuge & Survival Reflexes", "Vulnerability in Extreme Environments", "Architecture of Natural Sanctuaries", "Human Metaphors of Storm Protection", "Coexisting with Micro-Ecosystems"]
        elif "euthanasia" in t_lower:
            return ["Bodily Autonomy & End-of-Life Choice", "Medical Ethics & Compassionate Care", "Taboo Conversations & Moral Stigma", "Legal Safeguards vs Personal Liberty", "The Future of Human Dignity"]
        elif "inclusive" in t_lower:
            return ["Linguistic Reform vs Practical Equality", "Gender Neutrality in Daily Speech", "Corporate Inclusivity vs Real Change", "Language as a Tool of Social Power", "The Future Evolution of Grammar"]
        elif "series" in t_lower:
            return ["Parasocial Relationships with Characters", "The Psychology of Binge Culture", "Post-Series Vacuum & Identity", "Escapism vs Real-World Connection", "The Future of Storytelling Mediums"]
        elif "time" in t_lower:
            return ["The Modern Illusion of Constant Busyness", "Time Scarcity as a Status Symbol", "Prioritization vs Perpetual Procrastination", "Protecting Unstructured Leisure", "Reclaiming Temporal Autonomy"]
        elif "weather" in t_lower or "god" in t_lower:
            return ["Ancient Myths vs Scientific Realities", "Human Need for Cosmic Meaning", "Facing Environmental Unpredictability", "Superstition in Modern Rationality", "The Future of Climate Adaptation"]
        elif "marketing" in t_lower or "sedentary" in t_lower:
            return ["Marketing Convenience & Physical Inertia", "The Desk-Bound Economy", "Consumerism vs Natural Movement", "Algorithmic Comfort & Habit Loops", "Reclaiming Physical Vitality"]
        elif "parenting" in t_lower:
            return ["Deconstructing the Instinct Myth", "Cultural Expectations & Parent Guilt", "Nurture, Biology, and Modern Support", "Societal Pressures on Young Families", "The Future of Child-Rearing"]
        elif "ugly" in t_lower or "produce" in t_lower:
            return ["Obsession with Aesthetic Perfection", "Food Waste & Supermarket Standards", "Ethical Consumption vs Appearance", "Economic Impact on Local Farming", "Sustainable Food Systems of Tomorrow"]
        elif "raindrop" in t_lower:
            return ["Destiny vs Random Coincidence", "Patterns in Unpredictable Events", "Fate as Comfort or Constraint", "Personal Agency & Choice", "The Calculated Universe"]
        elif "earn" in t_lower or "spend" in t_lower:
            return ["Lifestyle Creep & Consumer Treadmills", "Status Symbols vs True Wealth", "Psychology of Financial Security", "Frugality vs Extravagance", "The Future of Financial Independence"]
        elif "adhd" in t_lower:
            return ["Social Media Self-Diagnosis", "Hyper-Focus vs Modern Distraction", "Normalizing Neurodiversity", "Workplace Adaptations & Support", "The Future of Attention Health"]
        elif "copying" in t_lower:
            return ["Originality vs Unconscious Mimicry", "Social Validation & Imitation", "Intellectual Property & Style Theft", "The Psychology of Individuality", "Creativity in an Algorithmic World"]
        else:
            return ["Core Philosophical Premise", "Topic-Specific Exploration", "Contrasting Perspectives", "Social Responsibility & Practical Action", "Future Horizon & Speculations"]

def get_lang_code(filepath):
    f = filepath.replace('\\', '/')
    if "/fr/" in f:
        return "fr"
    elif "/ru/" in f:
        return "ru"
    return "en"

def build_mini_html(title, prose, vocab_words, q_pairs, lang):
    is_french = (lang == "fr")
    is_russian = (lang == "ru")
    unit_titles = get_unit_titles(title, is_french)

    # Unit 1 Warmup questions (first 2 pairs)
    warmup_1 = clean_html_text(q_pairs[0][0])
    warmup_2 = clean_html_text(q_pairs[1][0])

    # Vocab grid for Unit 1
    vocab_grid_html = ""
    for w in vocab_words:
        vocab_grid_html += f"""
                <div class="vocab-card" style="background: var(--card-bg, #ffffff); border: 1px solid var(--border, #e2e8f0); padding: 0.75rem 1rem; border-radius: 8px; text-align: center; box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.05));">
                    <div class="vocab-word" style="font-size: 1.05rem; color: #3F2B96; font-weight: 700;">{w}</div>
                </div>"""

    # Units 2 through 6 (10 pairs per unit)
    units_html = ""
    unit_descs_en = [
        "Position your thoughts. Answer each main question, then use the matched personalized star prompt to reflect on your own behaviors.",
        "Explore the concepts. Discuss these topic-focused angles in-depth and share your personal anecdotes.",
        "Challenge standard opinions. Contrast opposing viewpoints and share which side you naturally lean towards.",
        "Respond with action. Reflect on the practical consequences, social responsibilities, and solutions available.",
        "Speculate on what lies ahead. Use advanced structures to project these realities into future decades."
    ]
    unit_descs_fr = [
        "Positionnez vos pensées. Répondez à chaque question principale, puis utilisez la question personnalisée pour réfléchir à vos propres comportements.",
        "Explorez les concepts. Débattez de ces questions ciblées de manière approfondie et partagez vos anecdotes.",
        "Défiez les opinions reçues. Comparez les points de vue opposés et expliquez de quel côté vous penchez.",
        "Agissez. Réfléchissez aux conséquences pratiques, aux responsabilités sociales et aux solutions possibles.",
        "Spéculez sur l'avenir. Utilisez des structures avancées pour projeter ces réalités dans les décennies futures."
    ]
    unit_descs_ru = [
        "Сформулируйте свою позицию. Ответьте на основной вопрос, затем используйте личный вопрос со звездочкой для саморефлексии.",
        "Исследуйте понятия. Обсудите эти аспекты подробно и поделитесь личным опытом.",
        "Сравните точки зрения. Сопоставьте противоположные мнения и объясните свой выбор.",
        "Действуйте. Поразмышляйте о практических последствиях, социальной ответственности и решениях.",
        "Взгляд в будущее. Используйте сложные языковые конструкции для прогнозирования на десятилетия вперед."
    ]

    colors = ["#E1F5EE", "#E1F5EE", "#E1F5EE", "#E1F5EE", "#EAF3DE"]
    borders = ["border-left: 5px solid #1A7A4A;", "border-left: 5px solid #2B6CB0;", "border-left: 5px solid #8B5CF6;", "border-left: 5px solid #D97706;", "border-left: 5px solid #10B981;"]

    for u_idx in range(2, 7):
        u_title = unit_titles[u_idx - 2]
        if is_russian:
            u_desc = unit_descs_ru[u_idx - 2]
        elif is_french:
            u_desc = unit_descs_fr[u_idx - 2]
        else:
            u_desc = unit_descs_en[u_idx - 2]

        # Extract 10 pairs for this unit
        start_pair = (u_idx - 2) * 10
        end_pair = start_pair + 10
        u_pairs = q_pairs[start_pair:end_pair]

        q_items_html = ""
        for main_q, pers_q in u_pairs:
            q_items_html += f"""
            <div class="round-item">
                <div class="round-item-main">{main_q}</div>
                <div class="round-item-personal">{pers_q}</div>
            </div>"""

        badge_char = "🟢" if u_idx == 6 else "🔵"
        color = colors[u_idx - 2]
        border_attr = borders[u_idx - 2]

        units_html += f"""
    <!-- ================= UNIT {u_idx} ================= -->
    <div class="round-block {'round-2' if u_idx == 6 else 'round-1'} open" id="m-unit{u_idx}">
        <div class="round-header" onclick="COSY.toggleRound('m-unit{u_idx}')" style="background:{color}; {border_attr}">
            <span>{badge_char} UNIT {u_idx}: {u_title}</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
            <p style="font-size:0.85rem; color:var(--muted); margin:0 0 1.5rem 0;">{u_desc}</p>
            {q_items_html}
        </div>
    </div>
"""

    if is_russian:
        host_tag = "Инструмент ведущего"
        host_info = "Поделитесь ссылкой на сессию со студентами:"
        copy_btn = "🔗 Скопировать ссылку"
        back_btn = "← Назад в I Couldn't Help But Wonder"
        vocab_check_title = "Проверка активного словаря (10 слов)"
        vocab_check_desc = "Обсудите эти 10 ключевых слов в малой группе. Произнесите их вслух."
    elif is_french:
        host_tag = "Utilitaire Hébergeur"
        host_info = "Partagez cette session déverrouillée avec vos élèves :"
        copy_btn = "🔗 Copier le lien élève"
        back_btn = "← Retour à I Couldn't Help But Wonder"
        vocab_check_title = "Contrôle du vocabulaire actif (10 mots)"
        vocab_check_desc = "Travaillez ensemble en petit groupe pour réviser ces 10 mots essentiels. Prononcez-les à haute voix."
    else:
        host_tag = "Host Utility"
        host_info = "Share this unlocked session with your students:"
        copy_btn = "🔗 Copy Student Link"
        back_btn = "← Back to I Couldn't Help But Wonder"
        vocab_check_title = "Active Vocabulary Check (10 Units)"
        vocab_check_desc = "Work together as a small group to review these 10 core words. Pronounce them aloud."

    html = f"""
<div data-session-mode="mini">
  <!-- Host/Teacher Utility Control Bar -->
  <div class="host-utility-bar">
    <div class="hub-header">
      <span class="hub-tag">🔑 {host_tag}</span>
      <span class="hub-info">{host_info}</span>
    </div>
    <div class="hub-actions">
      <button class="btn-copy-link" onclick="COSY.copyStudentLink(this)">{copy_btn}</button>
      <a href="../../i-couldnt-help-but-wonder.html" class="unobtrusive-back-link">{back_btn}</a>
    </div>
  </div>

  <div class="rounds-container">

    <!-- ================= UNIT 1 ================= -->
    <div class="round-block warm-up open" id="m-unit1">
        <div class="round-header" onclick="COSY.toggleRound('m-unit1')" style="background:#FAEEE8; border-left: 5px solid #E67E22;">
            <span>🟠 UNIT 1: Frame the Dialogue (Introduction &amp; Vocabulary)</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
            <div style="background: rgba(230, 126, 34, 0.05); border-left: 4px solid #E67E22; padding: 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.6; color: var(--ink-soft);">
                <strong>Topic Frame:</strong> {prose}
            </div>

            <h4 style="margin: 0 0 0.5rem; font-size: 1.05rem; color: var(--ink);">🌱 Warm-Up Prompts</h4>
            <ul class="round-questions" style="margin-bottom: 2rem; line-height: 1.7;">
                <li>{warmup_1}</li>
                <li>{warmup_2}</li>
            </ul>

            <h4 style="margin: 0 0 0.75rem; font-size: 1.05rem; color: var(--ink); border-bottom: 1px dashed var(--border); padding-bottom: 0.5rem;">📖 {vocab_check_title}</h4>
            <p style="font-size:0.85rem; color:var(--muted); margin:0 0 1.25rem 0;">{vocab_check_desc}</p>

            <div class="vocab-grid-10" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
                {vocab_grid_html}
            </div>
        </div>
    </div>

    {units_html}

  </div>
</div>
"""
    return html

def build_private_html(d_num, title, prose, vocab_words, q_pairs, lang):
    g_db = GRAMMAR_DB.get(d_num, GRAMMAR_DB["default"])
    is_french = (lang == "fr")
    is_russian = (lang == "ru")

    if is_russian:
        t_tag = "Инструмент преподавателя"
        t_info = "Поделитесь этим уроком с вашим учеником:"
        copy_btn = "🔗 Скопировать ссылку"
        back_btn = "← Назад в I Couldn't Help But Wonder"
        title_s1 = "🟠 Шаг 1: Разминка / Введение"
        title_s2 = "🟠 Шаг 2: Словарный запас"
        title_s3 = "🟠 Шаг 3: Философский контекст"
        title_s4 = "🔵 Шаг 4: Направляемая дискуссия"
        title_s5 = "🟣 Шаг 5: Языковой фокус и Грамматика"
        title_s6 = "🔵 Шаг 6: Критическое обсуждение"
        title_s7 = "🟢 Шаг 7: Личная рефлексия"
        title_s8 = "🟣 Шаг 8: Итоговая устная речь"
        tg_label = "МЕТОДИКА ПРЕПОДАВАТЕЛЯ"
    elif is_french:
        t_tag = "Utilitaire Enseignant"
        t_info = "Partagez ce cours particulier déverrouillé avec votre élève :"
        copy_btn = "🔗 Copier le lien élève"
        back_btn = "← Retour à I Couldn't Help But Wonder"
        title_s1 = "🟠 Étape 1 : Mise en route / Échauffement"
        title_s2 = "🟠 Étape 2 : Intégration du vocabulaire"
        title_s3 = "🟠 Étape 3 : Étude de cas philosophique"
        title_s4 = "🔵 Étape 4 : Séquence de discussion guidée"
        title_s5 = "🟣 Étape 5 : Focus linguistique & Grammaire"
        title_s6 = "🔵 Étape 6 : Discussion critique & spéculative"
        title_s7 = "🟢 Étape 7 : Réflexion personnelle"
        title_s8 = "🟣 Étape 8 : Challenge d'expression orale"
        tg_label = "GUIDE ENSEIGNANT"
    else:
        t_tag = "Teacher Utility"
        t_info = "Share this unlocked lesson with your student:"
        copy_btn = "🔗 Copy Student Link"
        back_btn = "← Back to I Couldn't Help But Wonder"
        title_s1 = "🟠 Step 1: Lead-In / Warm-Up"
        title_s2 = "🟠 Step 2: Vocabulary Integration"
        title_s3 = "🟠 Step 3: Philosophical Stimulus"
        title_s4 = "🔵 Step 4: Guided Discussion Sequence"
        title_s5 = "🟣 Step 5: Target Language Focus"
        title_s6 = "🔵 Step 6: Critical & Speculative Discussion"
        title_s7 = "🟢 Step 7: Personal Reflection"
        title_s8 = "🟣 Step 8: Final Production / Challenge"
        tg_label = "TEACHER GUIDE"

    # Step 1 Warmup prompts
    warmup_1 = clean_html_text(q_pairs[0][0])
    warmup_2 = clean_html_text(q_pairs[1][0])

    # Step 2 Vocab cards (first 4 words)
    selected_vocab = vocab_words[:4]
    vocab_cards_html = ""
    for w in selected_vocab:
        vocab_cards_html += f"""
                <div class="vocab-card" style="background: var(--card-bg, #ffffff); border: 1px solid var(--border, #e2e8f0); padding: 1rem; border-radius: 10px; text-align: center; box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.05));">
                    <div class="vocab-word" style="font-size: 1.15rem; color: #E67E22; font-weight: bold; margin-bottom: 0.25rem;">{w}</div>
                </div>"""

    # Step 4 Guided Discussion (from Unit 2 & 3 questions)
    step4_questions_html = ""
    for main_q, pers_q in q_pairs[2:7]:
        step4_questions_html += f"""
            <div class="round-item" style="margin-bottom: 1.25rem;">
                <div class="round-item-main" style="font-weight: 600; color: var(--ink); font-size: 1.05rem; margin-bottom: 0.35rem;">{main_q}</div>
                <div class="round-item-personal" style="color: var(--brand); font-size: 0.95rem; font-style: italic;">{pers_q}</div>
            </div>"""

    # Step 5 Grammar details
    if is_russian:
        g_title = g_db.get("title_ru", GRAMMAR_DB["default"]["title_ru"])
        g_desc = g_db.get("desc_ru", GRAMMAR_DB["default"]["desc_ru"])
        g_chips = g_db.get("chips_ru", GRAMMAR_DB["default"]["chips_ru"])
        g_sents = g_db.get("sents_ru", GRAMMAR_DB["default"]["sents_ru"])
    elif is_french:
        g_title = g_db["title_fr"]
        g_desc = g_db["desc_fr"]
        g_chips = g_db["chips_fr"]
        g_sents = g_db["sents_fr"]
    else:
        g_title = g_db["title_en"]
        g_desc = g_db["desc_en"]
        g_chips = g_db["chips_en"]
        g_sents = g_db["sents_en"]

    chips_html = ""
    for c in g_chips:
        chips_html += f'<span class="grammar-chip" onclick="COSY.selectGrammarChip(this)" style="background: white; border: 1px solid #3F2B96; color: #3F2B96; padding: 4px 12px; border-radius: 20px; cursor: pointer; font-size: 0.88rem; font-weight: 600; transition: all 0.2s;">{c}</span>\n'

    sents_html = ""
    for sent, ans in g_sents:
        sents_html += f'<li style="margin-bottom: 0.75rem;">{sent}</li>\n'

    if is_russian:
        check_btn = "Проверить"
        reset_btn = "Сбросить"
    elif is_french:
        check_btn = "Vérifier"
        reset_btn = "Réinitialiser"
    else:
        check_btn = "Verify Answers"
        reset_btn = "Reset"

    # Step 6 Critical Questions (from Unit 4 & 5 questions)
    step6_questions_html = ""
    for main_q, pers_q in q_pairs[20:25]:
        step6_questions_html += f"""
            <div class="round-item" style="margin-bottom: 1.25rem;">
                <div class="round-item-main" style="font-weight: 600; color: var(--ink); font-size: 1.05rem; margin-bottom: 0.35rem;">{main_q}</div>
                <div class="round-item-personal" style="color: var(--brand); font-size: 0.95rem; font-style: italic;">{pers_q}</div>
            </div>"""

    if is_russian:
        reflection_p = f"Если бы вам нужно было объяснить главный вывод темы '{title}' человеку, который никогда не задумывался об этом, какую ключевую мысль вы бы посоветовали?"
    elif is_french:
        reflection_p = f"Si vous deviez expliquer l'enseignement principal de '{title}' à quelqu'un qui ne s'est jamais posé la question, quel changement d'attitude recommanderiez-vous ?"
    else:
        reflection_p = f"If you had to explain the main lesson of '{title}' to someone who has never reflected on this issue, what core mindset shift would you recommend?"

    html = f"""
<div data-session-mode="private">
  <!-- Host/Teacher Utility Control Bar -->
  <div class="host-utility-bar" style="margin-bottom: 2rem;">
    <div class="hub-header">
      <span class="hub-tag">🔑 {t_tag}</span>
      <span class="hub-info">{t_info}</span>
    </div>
    <div class="hub-actions">
      <button class="btn-copy-link" onclick="COSY.copyStudentLink(this)">{copy_btn}</button>
      <a href="../../i-couldnt-help-but-wonder.html" class="unobtrusive-back-link">{back_btn}</a>
    </div>
  </div>

  <div class="private-lesson-container">

    <!-- ================= 1. LEAD-IN ================= -->
    <section class="private-step" id="p-step1" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #FAEEE8; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #E67E22;">
            <strong style="color: #BA5812; font-size: 1.1rem;">{title_s1}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 5 mins</span>
        </div>

        <div class="teacher-note-panel" style="background: rgba(63, 43, 150, 0.05); border: 1px solid rgba(63, 43, 150, 0.2); padding: 1.25rem; border-radius: 12px; margin-top: 1rem; color: var(--ink); font-size: 0.88rem; line-height: 1.5;">
            <span class="tn-badge" style="background: #3F2B96; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.72rem; font-weight: bold; font-family: monospace; display: inline-block; margin-bottom: 0.5rem;">📝 {tg_label}</span>
            <p style="margin: 0.25rem 0;"><strong>Goal:</strong> Activate schema and build personal connection. Focus on starting the conversational flow.</p>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">🌱 Initial Spark</h4>
            <ul class="round-questions" style="line-height: 1.8;">
                <li>{warmup_1}</li>
                <li>{warmup_2}</li>
            </ul>
        </div>
    </section>

    <!-- ================= 2. VOCABULARY ================= -->
    <section class="private-step" id="p-step2" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #FAEEE8; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #E67E22;">
            <strong style="color: #BA5812; font-size: 1.1rem;">{title_s2}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 10–15 mins</span>
        </div>

        <div class="teacher-note-panel" style="background: rgba(63, 43, 150, 0.05); border: 1px solid rgba(63, 43, 150, 0.2); padding: 1.25rem; border-radius: 12px; margin-top: 1rem; color: var(--ink); font-size: 0.88rem; line-height: 1.5;">
            <span class="tn-badge" style="background: #3F2B96; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.72rem; font-weight: bold; font-family: monospace; display: inline-block; margin-bottom: 0.5rem;">📝 {tg_label}</span>
            <p style="margin: 0.25rem 0;"><strong>Goal:</strong> Introduce, check pronunciation, and encourage personalized use of core vocabulary.</p>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">📖 Vocabulary Catalyst (Selected Units)</h4>
            <div class="vocab-grid-10" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem;">
                {vocab_cards_html}
            </div>
        </div>
    </section>

    <!-- ================= 3. STIMULUS ================= -->
    <section class="private-step" id="p-step3" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #FAEEE8; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #E67E22;">
            <strong style="color: #BA5812; font-size: 1.1rem;">{title_s3}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 10 mins</span>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">📰 Contextual Scenario</h4>
            <p style="font-size: 1.05rem; line-height: 1.6; color: var(--ink-soft); font-style: italic; border-left: 3px solid #E67E22; padding-left: 1rem; margin-bottom: 1.5rem;">
                "{prose}"
            </p>
        </div>
    </section>

    <!-- ================= 4. GUIDED DISCUSSION ================= -->
    <section class="private-step" id="p-step4" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #E1F5EE; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #1A7A4A;">
            <strong style="color: #1A7A4A; font-size: 1.1rem;">{title_s4}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 15 mins</span>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">🎙️ Dialogue Development</h4>
            {step4_questions_html}
        </div>
    </section>

    <!-- ================= 5. LANGUAGE FOCUS ================= -->
    <section class="private-step" id="p-step5" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #EEEDFE; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #3F2B96;">
            <strong style="color: #3F2B96; font-size: 1.1rem;">{title_s5}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 10–15 mins</span>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <div class="grammar-interactive-game" style="position:relative; z-index:2;">
                <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 0.5rem 0; color: var(--ink);">{g_title}</h4>
                <p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">{g_desc}</p>

                <div style="background: rgba(63, 43, 150, 0.03); border: 1px dashed rgba(63, 43, 150, 0.3); padding: 1.25rem; border-radius: 12px; margin-bottom: 1.5rem;">
                    <strong style="display: block; margin-bottom: 0.5rem; color: #1F104D;">🧩 Interactive Word Bank:</strong>
                    <div class="grammar-word-bank" style="display:flex; flex-wrap:wrap; gap:8px;">
                        {chips_html}
                    </div>
                </div>

                <div class="grammar-task-item" style="background: rgba(63, 43, 150, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #3F2B96; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
                    <strong style="display: block; margin-bottom: 0.5rem; color: #1F104D;">📝 Task: Contextual Clout</strong>
                    <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--ink); line-height: 2.0;">
                        {sents_html}
                    </ol>
                </div>

                <div style="display:flex; gap:10px;">
                    <button class="btn-verify" onclick="COSY.verifyGrammarGame(this)" style="background:#3F2B96; color:white; border:none; padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;">{check_btn}</button>
                    <button class="btn-reset" onclick="COSY.resetGrammarGame(this)" style="background:transparent; border:1px solid var(--border); color:var(--muted); padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;">{reset_btn}</button>
                </div>
            </div>
        </div>
    </section>

    <!-- ================= 6. CRITICAL / SPECULATIVE DISCUSSION ================= -->
    <section class="private-step" id="p-step6" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #EAF3DE; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #2B6CB0;">
            <strong style="color: #2B6CB0; font-size: 1.1rem;">{title_s6}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 10–15 mins</span>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">🔮 Introspective Horizon</h4>
            {step6_questions_html}
        </div>
    </section>

    <!-- ================= 7. PERSONAL REFLECTION ================= -->
    <section class="private-step" id="p-step7" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #EAF3DE; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #2B6CB0;">
            <strong style="color: #2B6CB0; font-size: 1.1rem;">{title_s7}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 5–10 mins</span>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">🧭 Perspective Alignment</h4>
            <p style="font-size: 1.05rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 1.5rem;">
                {reflection_p}
            </p>
        </div>
    </section>

    <!-- ================= 8. FINAL PRODUCTION / CHALLENGE ================= -->
    <section class="private-step" id="p-step8" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #EEEDFE; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #8B5CF6;">
            <strong style="color: #8B5CF6; font-size: 1.1rem;">{title_s8}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 5–10 mins</span>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">🎯 90-Second Speech Run: {title}</h4>
            <p style="font-size: 1.05rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 1.5rem; font-weight: 500;">
                {reflection_p}
            </p>
        </div>
    </section>

  </div>
</div>
"""
    return html

def process_html_file(filepath):
    filename = os.path.basename(filepath)
    d_num = DRAFT_MAPPING.get(filename, 'default')
    lang = get_lang_code(filepath)

    print(f"⚡ Processing {filepath} (Draft {d_num}, Lang: {lang})")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Parse content
    title, prose, vocab_words, q_pairs = parse_session_content(content)

    # Build Mini and Private mode HTML blocks
    mini_html = build_mini_html(title, prose, vocab_words, q_pairs, lang)
    private_html = build_private_html(d_num, title, prose, vocab_words, q_pairs, lang)

    # Clean existing data-session-mode blocks if present
    if '<div data-session-mode="big">' in content:
        # Find start of data-session-mode="big"
        big_start = content.find('<div data-session-mode="big">')
        # Find start of switcher placeholder or main content before big mode if any
        prefix = content[:big_start]
        # Keep inside big mode up to data-session-mode="mini"
        mini_start = content.find('<div data-session-mode="mini">')
        if mini_start != -1:
            big_inner = content[big_start:mini_start]
        else:
            big_inner = content[big_start:]
            # cut before footer or main end
            cut_idx = re.search(r'\n\s*</main>|\n\s*<footer', big_inner)
            if cut_idx:
                big_inner = big_inner[:cut_idx.start()]

        # End of main content
        main_end = re.search(r'(\n\s*</main>|\n\s*<footer)', content)
        tail_part = content[main_end.start():] if main_end else ""

        # Make sure switcher placeholder exists in prefix or big_inner
        if 'cosy-session-switcher-placeholder' not in prefix and 'cosy-session-switcher-placeholder' not in big_inner:
            prefix += '\n<div class="cosy-session-switcher-placeholder"></div>\n'

        new_content = f"{prefix}{big_inner.strip()}\n{mini_html}\n{private_html}\n{tail_part}"
    else:
        # File doesn't have mode wrapping yet. Wrap big mode between perspective panel/audio player and references/footer.
        panel_idx = content.find('<div class="cosy-perspective-panel"')
        if panel_idx == -1:
            panel_idx = content.find('<div class="wonder-audio-player-placeholder"')
        if panel_idx == -1:
            panel_idx = content.find('<div class="rounds-container"')

        ref_idx = content.find('<section id="related-references"')
        if ref_idx == -1:
            ref_idx = content.find('</main>')

        if panel_idx == -1 or ref_idx == -1:
            print(f"❌ Error: Cannot find insertion anchors for {filename}")
            return

        head_part = content[:panel_idx]
        big_body = content[panel_idx:ref_idx]
        tail_part = content[ref_idx:]

        if 'cosy-session-switcher-placeholder' not in head_part:
            head_part += '\n<div class="cosy-session-switcher-placeholder"></div>\n'

        wrapped_big = f'<div data-session-mode="big">\n{big_body.strip()}\n</div>'
        new_content = f"{head_part}{wrapped_big}\n{mini_html}\n{private_html}\n{tail_part}"

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"✅ Successfully updated {filename}")

def main():
    dirs = [
        "apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder",
        "apps/premium-events/clubs/wonder/fr/sessions/i-couldnt-help-but-wonder",
        "apps/premium-events/clubs/wonder/ru/sessions/i-couldnt-help-but-wonder"
    ]
    for d in dirs:
        if not os.path.exists(d):
            continue
        for filename in sorted(os.listdir(d)):
            if filename.endswith(".html") and not filename.startswith("template"):
                process_html_file(os.path.join(d, filename))

if __name__ == "__main__":
    main()
