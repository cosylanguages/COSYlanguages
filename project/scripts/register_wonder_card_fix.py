with open('apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html', 'r', encoding='utf-8') as f:
    wonder_hub = f.read()

wonder_card = '''
<div class="wonder-card history-session" data-level="b2" style="background:#FFF; border:1px solid var(--border); border-radius:16px; padding:1.25rem;">
<div style="display:flex; gap:0.5rem; margin-bottom:0.5rem;"><span class="club-tag" style="background:#EBF8FF; color:#2B6CB0; font-weight:600; font-size:0.75rem; padding:2px 6px; border-radius:4px;">B2 / C1</span></div>
<h4 style="margin:0 0 0.5rem; font-family:'Playfair Display', serif;">Do Bisexuals Really Have to Choose Their Sexuality in the Long Run?</h4>
<p style="font-size:0.85rem; color:var(--muted); margin-bottom:1rem;">Examining mononormativity, bisexual erasure, and sexual fluidity regardless of long-term relationship status. (Topic credit: Cassandra Ardnassac)</p>
<div style="display:flex; justify-content:space-between; align-items:center;">
<span style="font-size:0.8rem; color:var(--muted);">26 August 2026</span>
<a href="sessions/i-couldnt-help-but-wonder/do-bisexuals-have-to-choose.html" style="background:#3F2B96; color:#fff; text-decoration:none; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.8rem; font-weight:600;">Explore Column ➔</a>
</div>
</div>
'''

if 'do-bisexuals-have-to-choose.html' not in wonder_hub:
    wonder_hub = wonder_hub.replace('<div class="wonder-history-grid">', '<div class="wonder-history-grid">\n' + wonder_card)
    with open('apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html', 'w', encoding='utf-8') as f:
        f.write(wonder_hub)
    print("Fixed Wonder hub card insertion")
