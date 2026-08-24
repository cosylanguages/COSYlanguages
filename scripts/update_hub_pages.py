import re

# 1. KUS Hub: apps/premium-events/clubs/kus/keeping-up-with-science.html
kus_cards = '''
<div class="science-card history-session" data-level="b1">
<div class="science-ruler"></div>
<div class="science-card-header">
<div class="periodic-element"><span class="elem-num">1</span><span class="elem-symbol">B1</span><span class="elem-name">Int</span></div>
<span class="science-lang-flag">🇬🇧</span>
</div>
<div class="science-card-body">
<h4 class="science-card-title">Scientists Tracked Kids for 8 Years — Screen Time Result</h4>
<p class="science-card-desc">An 8-year longitudinal study followed children from early childhood into adolescence to examine how daily screen time alters attention spans and cognitive growth.</p>
</div>
<div class="science-card-footer">
<span class="science-card-date">26 August 2026</span>
<a class="science-card-view" href="sessions/keeping-up-with-science/screen-time-kids-development-intermediate.html">Explore Session ➔</a>
</div>
</div>

<div class="science-card history-session" data-level="a2">
<div class="science-ruler"></div>
<div class="science-card-header">
<div class="periodic-element"><span class="elem-num">2</span><span class="elem-symbol">A2</span><span class="elem-name">Elem</span></div>
<span class="science-lang-flag">🇬🇧</span>
</div>
<div class="science-card-body">
<h4 class="science-card-title">Multilingual People Have Younger Brains (A2)</h4>
<p class="science-card-desc">Discover how speaking more than one language keeps your brain active, healthy, and up to 13 years younger.</p>
</div>
<div class="science-card-footer">
<span class="science-card-date">26 August 2026</span>
<a class="science-card-view" href="sessions/keeping-up-with-science/multilingual-brains-younger-elementary.html">Explore Session ➔</a>
</div>
</div>

<div class="science-card history-session" data-level="b1">
<div class="science-ruler"></div>
<div class="science-card-header">
<div class="periodic-element"><span class="elem-num">3</span><span class="elem-symbol">B1</span><span class="elem-name">Int</span></div>
<span class="science-lang-flag">🇬🇧</span>
</div>
<div class="science-card-body">
<h4 class="science-card-title">Multilingual People Have Younger Brains (B1)</h4>
<p class="science-card-desc">Examine neuroimaging research demonstrating how bilingualism builds cognitive reserve and delays neural aging.</p>
</div>
<div class="science-card-footer">
<span class="science-card-date">26 August 2026</span>
<a class="science-card-view" href="sessions/keeping-up-with-science/multilingual-brains-younger-intermediate.html">Explore Session ➔</a>
</div>
</div>

<div class="science-card history-session" data-level="c1">
<div class="science-ruler"></div>
<div class="science-card-header">
<div class="periodic-element"><span class="elem-num">4</span><span class="elem-symbol">C1</span><span class="elem-name">Adv</span></div>
<span class="science-lang-flag">🇬🇧</span>
</div>
<div class="science-card-body">
<h4 class="science-card-title">Coffee Drinkers: Fat, Muscle, and Hormones</h4>
<p class="science-card-desc">Analyze endocrine research revealing favorable visceral fat profiles and preserved muscle mass in habitual coffee drinkers.</p>
</div>
<div class="science-card-footer">
<span class="science-card-date">26 August 2026</span>
<a class="science-card-view" href="sessions/keeping-up-with-science/coffee-drinkers-muscle-hormones-advanced.html">Explore Session ➔</a>
</div>
</div>

<div class="science-card history-session" data-level="c1">
<div class="science-ruler"></div>
<div class="science-card-header">
<div class="periodic-element"><span class="elem-num">5</span><span class="elem-symbol">C1</span><span class="elem-name">Adv</span></div>
<span class="science-lang-flag">🇬🇧</span>
</div>
<div class="science-card-body">
<h4 class="science-card-title">Rewriting the Human Family Tree</h4>
<p class="science-card-desc">Explore how recent hominin fossil discoveries and ancient DNA sequencing challenge traditional linear models of evolution.</p>
</div>
<div class="science-card-footer">
<span class="science-card-date">26 August 2026</span>
<a class="science-card-view" href="sessions/keeping-up-with-science/rewriting-human-family-tree-advanced.html">Explore Session ➔</a>
</div>
</div>
'''

with open('apps/premium-events/clubs/kus/keeping-up-with-science.html', 'r', encoding='utf-8') as f:
    kus_content = f.read()

if 'screen-time-kids-development-intermediate.html' not in kus_content:
    kus_content = kus_content.replace('<div class="science-history-grid" id="science-history-grid">', '<div class="science-history-grid" id="science-history-grid">\n' + kus_cards)
    with open('apps/premium-events/clubs/kus/keeping-up-with-science.html', 'w', encoding='utf-8') as f:
        f.write(kus_content)
    print("Updated KUS hub")


# 2. Celebrate Hub: apps/premium-events/clubs/celebrate/lets-celebrate.html
celebrate_card = '''
<div class="celebrate-card history-session" data-level="b1">
<div class="celebrate-card-banner" style="background: linear-gradient(135deg, #BA7517, #5C380A); color: #FFF; padding: 1rem; font-weight: bold; text-align: center; border-radius: 12px 12px 0 0;">🕊️ August 25</div>
<div class="celebrate-card-body" style="padding: 1.25rem;">
<div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;"><span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">INTERMEDIATE (B1)</span></div>
<h4 class="celebrate-card-title" style="margin: 0 0 0.5rem; font-size: 1.15rem; font-family:'Playfair Display', serif;">Kiss and Make Up Day</h4>
<p class="celebrate-card-desc" style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1rem;">Let go of grudges, clear the air, and explore the social psychology of forgiveness and reconciliation.</p>
</div>
<div class="celebrate-card-footer" style="padding: 0 1.25rem 1.25rem; display: flex; justify-content: space-between; align-items: center;">
<span class="celebrate-card-date" style="font-size: 0.8rem; color: var(--muted);">25 August 2026</span>
<a class="celebrate-card-view" href="sessions/lets-celebrate/kiss-and-make-up-day-intermediate.html" style="background:#BA7517; color:#fff; text-decoration:none; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.8rem; font-weight:600;">Explore Session ➔</a>
</div>
</div>
'''

with open('apps/premium-events/clubs/celebrate/lets-celebrate.html', 'r', encoding='utf-8') as f:
    cel_content = f.read()

if 'kiss-and-make-up-day-intermediate.html' not in cel_content:
    cel_content = cel_content.replace('<div class="celebrate-history-grid" id="celebrate-history-grid">', '<div class="celebrate-history-grid" id="celebrate-history-grid">\n' + celebrate_card)
    with open('apps/premium-events/clubs/celebrate/lets-celebrate.html', 'w', encoding='utf-8') as f:
        f.write(cel_content)
    print("Updated Celebrate hub")


# 3. Quotes Hub: apps/premium-events/clubs/quotes/the-greatest-quotes.html
quotes_cards = '''
<div class="quotes-card history-session" data-level="a2"><div class="quotes-card-body"><div class="club-tag-container" style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;"><span class="club-tag tag-a2">Elementary (A2)</span></div><h4 class="quotes-card-quote">"A number of people have said to me, after hearing your thinking, their mind becomes much happier."</h4><p class="quotes-card-desc">: Dalai Lama</p></div><div class="quotes-card-footer"><span class="quotes-card-date">26 August 2026</span><a class="quotes-card-view" href="sessions/the-greatest-quotes/dalai-lama-happier-minds-elementary.html">View Espresso Debate ➔</a></div></div>
<div class="quotes-card history-session" data-level="b1"><div class="quotes-card-body"><div class="club-tag-container" style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;"><span class="club-tag tag-b1">Intermediate (B1)</span></div><h4 class="quotes-card-quote">"A number of people have said to me, after hearing your thinking, their mind becomes much happier."</h4><p class="quotes-card-desc">: Dalai Lama</p></div><div class="quotes-card-footer"><span class="quotes-card-date">26 August 2026</span><a class="quotes-card-view" href="sessions/the-greatest-quotes/dalai-lama-happier-minds-intermediate.html">View Espresso Debate ➔</a></div></div>
'''

with open('apps/premium-events/clubs/quotes/the-greatest-quotes.html', 'r', encoding='utf-8') as f:
    quo_content = f.read()

if 'dalai-lama-happier-minds-elementary.html' not in quo_content:
    quo_content = quo_content.replace('<div class="quotes-history-grid" id="tq-grid">', '<div class="quotes-history-grid" id="tq-grid">\n' + quotes_cards)
    with open('apps/premium-events/clubs/quotes/the-greatest-quotes.html', 'w', encoding='utf-8') as f:
        f.write(quo_content)
    print("Updated Quotes hub")


# 4. Debate Hub: apps/premium-events/clubs/debate/debatable-relatable.html
debate_cards = '''
<div class="history-session debate-placard-card" data-level="a2" style="background:#FFF; border:1px solid var(--border); border-radius:16px; padding:1.25rem; display:flex; flex-direction:column; justify-space-between;">
<div class="debate-card-body">
<div style="display:flex; gap:0.5rem; margin-bottom:0.5rem;"><span class="club-tag" style="background:#FEE2E2; color:#991B1B; font-weight:600; font-size:0.75rem; padding:2px 6px; border-radius:4px;">A2</span></div>
<h4 class="debate-card-title" style="margin:0 0 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem;">Chatting with an AI vs Chatting with a Human (A2)</h4>
<p style="font-size:0.85rem; color:var(--muted); margin-bottom:1rem;">Comparing simple daily practice with AI chatbots versus conversation with real friends.</p>
</div>
<div class="debate-card-footer" style="display:flex; justify-content:space-between; align-items:center;">
<span class="debate-card-date" style="font-size:0.8rem; color:var(--muted);">26 August 2026</span>
<a href="sessions/debatable-relatable/chatting-ai-vs-human-elementary.html" style="background:#993C1D; color:#fff; text-decoration:none; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.8rem; font-weight:600;">View Placard ➔</a>
</div>
</div>

<div class="history-session debate-placard-card" data-level="b1" style="background:#FFF; border:1px solid var(--border); border-radius:16px; padding:1.25rem; display:flex; flex-direction:column; justify-space-between;">
<div class="debate-card-body">
<div style="display:flex; gap:0.5rem; margin-bottom:0.5rem;"><span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; font-weight:600; font-size:0.75rem; padding:2px 6px; border-radius:4px;">B1</span></div>
<h4 class="debate-card-title" style="margin:0 0 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem;">Chatting with an AI vs Chatting with a Human (B1)</h4>
<p style="font-size:0.85rem; color:var(--muted); margin-bottom:1rem;">Discussing AI as a psychologist, penpal, friend, or teacher versus human connection.</p>
</div>
<div class="debate-card-footer" style="display:flex; justify-content:space-between; align-items:center;">
<span class="debate-card-date" style="font-size:0.8rem; color:var(--muted);">26 August 2026</span>
<a href="sessions/debatable-relatable/chatting-ai-vs-human-intermediate.html" style="background:#993C1D; color:#fff; text-decoration:none; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.8rem; font-weight:600;">View Placard ➔</a>
</div>
</div>

<div class="history-session debate-placard-card" data-level="b2" style="background:#FFF; border:1px solid var(--border); border-radius:16px; padding:1.25rem; display:flex; flex-direction:column; justify-space-between;">
<div class="debate-card-body">
<div style="display:flex; gap:0.5rem; margin-bottom:0.5rem;"><span class="club-tag" style="background:#EBF8FF; color:#2B6CB0; font-weight:600; font-size:0.75rem; padding:2px 6px; border-radius:4px;">B2</span></div>
<h4 class="debate-card-title" style="margin:0 0 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem;">Chatting with an AI vs Chatting with a Human (B2)</h4>
<p style="font-size:0.85rem; color:var(--muted); margin-bottom:1rem;">Debating synthetic intimacy, social atrophy, and ethical boundary lines in digital relationships.</p>
</div>
<div class="debate-card-footer" style="display:flex; justify-content:space-between; align-items:center;">
<span class="debate-card-date" style="font-size:0.8rem; color:var(--muted);">26 August 2026</span>
<a href="sessions/debatable-relatable/chatting-ai-vs-human-upper-intermediate.html" style="background:#993C1D; color:#fff; text-decoration:none; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.8rem; font-weight:600;">View Placard ➔</a>
</div>
</div>
'''

with open('apps/premium-events/clubs/debate/debatable-relatable.html', 'r', encoding='utf-8') as f:
    deb_content = f.read()

if 'chatting-ai-vs-human-elementary.html' not in deb_content:
    # insert inside the debate grid container
    deb_content = re.sub(r'(<div[^>]*class="[^"]*debate-history-grid[^"]*"[^>]*>)', r'\1\n' + debate_cards, deb_content)
    if 'chatting-ai-vs-human-elementary.html' not in deb_content:
        # fallback insertion near dr-hist
        deb_content = deb_content.replace('id="dr-hist">', 'id="dr-hist">\n' + debate_cards)
    with open('apps/premium-events/clubs/debate/debatable-relatable.html', 'w', encoding='utf-8') as f:
        f.write(deb_content)
    print("Updated Debate hub")


# 5. Life Hub: apps/premium-events/clubs/life/my-life-with-without.html
life_cards = '''
<div class="life-balance-card history-session" data-level="b1" style="background:#FFF; border:1px solid var(--border); border-radius:16px; padding:1.25rem;">
<div style="display:flex; gap:0.5rem; margin-bottom:0.5rem;"><span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; font-weight:600; font-size:0.75rem; padding:2px 6px; border-radius:4px;">B1</span></div>
<h4 style="margin:0 0 0.5rem; font-family:'Playfair Display', serif;">My Life With & My Life Without Hearing Abilities (B1)</h4>
<p style="font-size:0.85rem; color:var(--muted); margin-bottom:1rem;">Explore daily sensory awareness, soundscapes, and how hearing shapes personal connection.</p>
<div style="display:flex; justify-content:space-between; align-items:center;">
<span style="font-size:0.8rem; color:var(--muted);">26 August 2026</span>
<a href="sessions/my-life-with-without/hearing-abilities-intermediate.html" style="background:#3B6D11; color:#fff; text-decoration:none; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.8rem; font-weight:600;">Explore Session ➔</a>
</div>
</div>

<div class="life-balance-card history-session" data-level="b2" style="background:#FFF; border:1px solid var(--border); border-radius:16px; padding:1.25rem;">
<div style="display:flex; gap:0.5rem; margin-bottom:0.5rem;"><span class="club-tag" style="background:#EBF8FF; color:#2B6CB0; font-weight:600; font-size:0.75rem; padding:2px 6px; border-radius:4px;">B2</span></div>
<h4 style="margin:0 0 0.5rem; font-family:'Playfair Display', serif;">My Life With & My Life Without Hearing Abilities (B2)</h4>
<p style="font-size:0.85rem; color:var(--muted); margin-bottom:1rem;">Examine acoustic architecture, auditory fatigue, sign language linguistics, and Deaf culture.</p>
<div style="display:flex; justify-content:space-between; align-items:center;">
<span style="font-size:0.8rem; color:var(--muted);">26 August 2026</span>
<a href="sessions/my-life-with-without/hearing-abilities-upper-intermediate.html" style="background:#3B6D11; color:#fff; text-decoration:none; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.8rem; font-weight:600;">Explore Session ➔</a>
</div>
</div>
'''

with open('apps/premium-events/clubs/life/my-life-with-without.html', 'r', encoding='utf-8') as f:
    life_content = f.read()

if 'hearing-abilities-intermediate.html' not in life_content:
    life_content = life_content.replace('<div class="life-balance-grid" id="life-balance-grid">', '<div class="life-balance-grid" id="life-balance-grid">\n' + life_cards)
    with open('apps/premium-events/clubs/life/my-life-with-without.html', 'w', encoding='utf-8') as f:
        f.write(life_content)
    print("Updated Life hub")


# 6 & 7. Mind Hubs: apps/premium-events/clubs/mind/mind-matters.html & events/mind-matters.html
mind_card_app = '''
<div class="mind-card history-session" data-level="b1">
<div class="mind-card-header">
<div class="mind-card-tags"><span class="mind-card-tag tag-b1">B1</span></div>
<span class="mind-card-lang">🇬🇧 English</span>
</div>
<div class="mind-card-body">
<h4 class="mind-card-title">Why Some Friends Always Try to Correct You</h4>
<p class="mind-card-desc">Psychological analysis of why certain friends interrupt, fix minor details, or control story narratives in social settings.</p>
</div>
<div class="mind-card-footer">
<span class="mind-card-date">26 August 2026</span>
<a class="mind-card-view" href="sessions/mind-matters/why-friends-correct-your-story-intermediate.html">Explore Case Study ➔</a>
</div>
</div>
'''

mind_card_root = '''
<div class="mind-card history-session" data-level="b1">
<div class="mind-card-header">
<div class="mind-card-tags"><span class="mind-card-tag tag-b1">B1</span></div>
<span class="mind-card-lang">🇬🇧 English</span>
</div>
<div class="mind-card-body">
<h4 class="mind-card-title">Why Some Friends Always Try to Correct You</h4>
<p class="mind-card-desc">Psychological analysis of why certain friends interrupt, fix minor details, or control story narratives in social settings.</p>
</div>
<div class="mind-card-footer">
<span class="mind-card-date">26 August 2026</span>
<a class="mind-card-view" href="../apps/premium-events/clubs/mind/sessions/mind-matters/why-friends-correct-your-story-intermediate.html">Explore Case Study ➔</a>
</div>
</div>
'''

for m_path, card_code in [('apps/premium-events/clubs/mind/mind-matters.html', mind_card_app), ('events/mind-matters.html', mind_card_root)]:
    with open(m_path, 'r', encoding='utf-8') as f:
        m_content = f.read()
    if 'why-friends-correct-your-story-intermediate.html' not in m_content:
        m_content = m_content.replace('<div class="mind-history-grid" id="mind-history-grid">', '<div class="mind-history-grid" id="mind-history-grid">\n' + card_code)
        with open(m_path, 'w', encoding='utf-8') as f:
            f.write(m_content)
        print(f"Updated Mind hub at {m_path}")
