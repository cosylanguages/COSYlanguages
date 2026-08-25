import glob, os, re
from bs4 import BeautifulSoup

session_files = sorted(glob.glob('apps/premium-events/clubs/**/sessions/**/*.html', recursive=True) + glob.glob('events/sessions/**/*.html', recursive=True))

print(f"Total session files being audited: {len(session_files)}")

audit_report = {
    'desc_vs_grammar_mismatch': [],
    'grammar_vs_discussion_missing': [],
    'missing_grammar_box': []
}

# Key grammar patterns to inspect with accurate regex/trigger matching
GRAMMAR_PATTERNS = {
    'inversion': {
        'keywords': ['inversion', 'negative adverbial', 'seldom', 'rarely', 'under no circumstances', 'not only', 'hardly', 'scarcely', 'no sooner', 'little did'],
        'disc_triggers': ['seldom', 'rarely', 'under no', 'not only', 'hardly', 'scarcely', 'no sooner', 'little did', 'only when', 'only by', 'never before', 'inversion']
    },
    'second_conditional': {
        'keywords': ['second conditional', '2nd conditional', 'unreal present'],
        'disc_triggers': ['if ', 'would ', 'could ', 'were to']
    },
    'third_conditional': {
        'keywords': ['third conditional', '3rd conditional', 'past unreal', 'unreal past'],
        'disc_triggers': ['had ', 'would have', 'could have', 'might have']
    },
    'mixed_conditionals': {
        'keywords': ['mixed conditional'],
        'disc_triggers': ['had ', 'would ', 'could ']
    },
    'subjunctive': {
        'keywords': ['subjunctive'],
        'disc_triggers': ['demand', 'insist', 'propose', 'vital', 'crucial', 'essential', 'recommend', 'suggest', 'were to', 'be that as it may', 'should']
    },
    'cleft_sentences': {
        'keywords': ['cleft'],
        'disc_triggers': ['what ', 'it is ', 'it was ', 'all that', 'the thing that', 'reason why']
    },
    'passive_voice': {
        'keywords': ['passive voice', 'passive reporting', 'passive structure'],
        'disc_triggers': ['is said', 'are reported', 'was considered', 'were forced', 'is believed', 'are estimated', 'is required', 'was created', 'were designed', 'is affected', 'are harvested', 'is processed', 'be + past', 'passive', 'will be', 'is lost', 'are spoken']
    },
    'double_comparatives': {
        'keywords': ['double comparative', 'proportional comparative', 'the more... the'],
        'disc_triggers': ['the more', 'the less', 'the greater', 'the higher', 'the harder', 'the better', 'the faster']
    },
    'past_modals': {
        'keywords': ['past modals', 'expressing regret', 'should have', 'could have', 'might have'],
        'disc_triggers': ['should have', 'could have', 'would have', 'might have', 'regret'],
        'regex': r'\b(could|might|should|would)\b.*\bhave\b'
    },
    'past_habits': {
        'keywords': ['used to', 'habits in the past', 'past habits'],
        'disc_triggers': ['used to', 'use to', 'would ', 'accustomed to']
    }
}

for fpath in session_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')

    meta_desc = (soup.find('meta', attrs={'name': 'description'}) or {}).get('content', '')

    hero_el = soup.find(class_=re.compile(r'hero-subtitle|session-subtitle|hero-description|club-description|event-subtitle|lead-in|hero-text|card-description', re.I))
    hero_text = hero_el.get_text(' ', strip=True) if hero_el else ''

    intro_ps = [p.get_text(' ', strip=True) for p in soup.select('main > p, .content-container > p, .session-intro, .debate-duel-box')]
    intro_text = ' '.join(intro_ps)

    combined_desc = (meta_desc + ' ' + hero_text + ' ' + intro_text).strip().lower()

    # Grammar block
    g_el = soup.find(class_=re.compile(r'grammar|linguistic-focus|language-focus', re.I))
    g_text = g_el.get_text(' ', strip=True) if g_el else ''
    g_lower = g_text.lower()

    # Discussion items
    r1_mains = [el.get_text(' ', strip=True) for el in soup.select('#s-r1 .round-item-main, .round-1 .round-item-main')]
    r1_pers = [el.get_text(' ', strip=True) for el in soup.select('#s-r1 .round-item-personal, .round-1 .round-item-personal')]
    r2_mains = [el.get_text(' ', strip=True) for el in soup.select('#s-r2 .round-item-main, .round-2 .round-item-main')]
    r2_pers = [el.get_text(' ', strip=True) for el in soup.select('#s-r2 .round-item-personal, .round-2 .round-item-personal')]
    warm_items = [el.get_text(' ', strip=True) for el in soup.select('#s-warm .round-questions li, .warm-up li')]

    disc_text = ' '.join(warm_items + r1_mains + r1_pers + r2_mains + r2_pers).lower()

    # 1. Missing grammar box (if not cinema club or legacy events/sessions/mind-matters)
    if not g_el and 'cinema-club' not in fpath and 'events/sessions/mind-matters' not in fpath:
        audit_report['missing_grammar_box'].append(fpath)

    # 2. Description vs Grammar Box inconsistency
    for p_name, p_data in GRAMMAR_PATTERNS.items():
        if p_name == 'past_habits' and 'simple present structure' in g_lower:
            continue
        desc_has = any(kw in combined_desc for kw in p_data['keywords'])
        gram_has = any(kw in g_lower for kw in p_data['keywords'])
        if desc_has and g_el and not gram_has:
            audit_report['desc_vs_grammar_mismatch'].append({
                'file': fpath,
                'concept': p_name,
                'desc_snippet': combined_desc[:100],
                'grammar_box': g_text[:100]
            })

    # 3. Grammar Box vs Discussion section missing/contradiction
    if g_el:
        for p_name, p_data in GRAMMAR_PATTERNS.items():
            if p_name == 'past_habits' and 'simple present structure' in g_lower:
                continue
            gram_has = any(kw in g_lower for kw in p_data['keywords'])
            if gram_has:
                disc_has = any(trig in disc_text for trig in p_data['disc_triggers'])
                if 'regex' in p_data and not disc_has:
                    disc_has = bool(re.search(p_data['regex'], disc_text))
                if not disc_has:
                    audit_report['grammar_vs_discussion_missing'].append({
                        'file': fpath,
                        'concept': p_name,
                        'grammar_box': g_text[:120],
                    })

print("=== AUDIT SUMMARY ===")
print(f"Missing Grammar Box: {len(audit_report['missing_grammar_box'])}")
print(f"Desc vs Grammar Box Mismatch: {len(audit_report['desc_vs_grammar_mismatch'])}")
print(f"Grammar Box vs Discussion Section Missing/Contradiction: {len(audit_report['grammar_vs_discussion_missing'])}")

if audit_report['grammar_vs_discussion_missing']:
    print("\n--- Detailed Grammar vs Discussion Missing ---")
    for item in audit_report['grammar_vs_discussion_missing']:
        print(f"File: {item['file']}")
        print(f"  Concept: {item['concept']}")
        print(f"  Grammar Box: {item['grammar_box']}")
        print("-" * 40)
