import json, re

# 1. Update events/data/sessions.json
new_session = {
    "title": "Do Bisexuals Really Have to Choose Their Sexuality?",
    "href": "../apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/do-bisexuals-have-to-choose.html",
    "level": "B2",
    "lang": "English",
    "club": "I Couldn't Help But Wonder",
    "format": "Speaking Club"
}

with open('events/data/sessions.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

if not any(s['href'] == new_session['href'] for s in data):
    data.insert(0, new_session)
    with open('events/data/sessions.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print("Registered Wonder session in events/data/sessions.json")

# 2. Update Wonder Club Hub page: apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html
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

with open('apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html', 'r', encoding='utf-8') as f:
    wonder_hub = f.read()

if 'do-bisexuals-have-to-choose.html' not in wonder_hub:
    wonder_hub = wonder_hub.replace('<div class="wonder-history-grid" id="wonder-history-grid">', '<div class="wonder-history-grid" id="wonder-history-grid">\n' + wonder_card)
    with open('apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html', 'w', encoding='utf-8') as f:
        f.write(wonder_hub)
    print("Added session card to apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html")

# 3. Update events/index.html upcoming table
upcoming_row = '''<tr>
<td>Do Bisexuals Really Have to Choose Their Sexuality in the Long Run?</td>
<td>English</td>
<td>Speaking Club (Wonder)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/do-bisexuals-have-to-choose.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>'''

with open('events/index.html', 'r', encoding='utf-8') as f:
    events_index = f.read()

if 'do-bisexuals-have-to-choose.html' not in events_index:
    events_index = re.sub(r'(<section id="upcoming"[^>]*>.*?<tbody>)', r'\1\n' + upcoming_row, events_index, flags=re.DOTALL)
    with open('events/index.html', 'w', encoding='utf-8') as f:
        f.write(events_index)
    print("Added session row to events/index.html upcoming table")
