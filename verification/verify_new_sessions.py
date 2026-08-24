import os, json

new_files = [
    'apps/premium-events/clubs/kus/sessions/keeping-up-with-science/screen-time-kids-development-intermediate.html',
    'apps/premium-events/clubs/kus/sessions/keeping-up-with-science/multilingual-brains-younger-elementary.html',
    'apps/premium-events/clubs/kus/sessions/keeping-up-with-science/multilingual-brains-younger-intermediate.html',
    'apps/premium-events/clubs/kus/sessions/keeping-up-with-science/coffee-drinkers-muscle-hormones-advanced.html',
    'apps/premium-events/clubs/kus/sessions/keeping-up-with-science/rewriting-human-family-tree-advanced.html',
    'apps/premium-events/clubs/celebrate/sessions/lets-celebrate/kiss-and-make-up-day-intermediate.html',
    'apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dalai-lama-happier-minds-elementary.html',
    'apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dalai-lama-happier-minds-intermediate.html',
    'apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-elementary.html',
    'apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-intermediate.html',
    'apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-upper-intermediate.html',
    'apps/premium-events/clubs/life/sessions/my-life-with-without/hearing-abilities-intermediate.html',
    'apps/premium-events/clubs/life/sessions/my-life-with-without/hearing-abilities-upper-intermediate.html',
    'apps/premium-events/clubs/mind/sessions/mind-matters/why-friends-correct-your-story-intermediate.html'
]

print("1. Verifying session file existence & content...")
for f in new_files:
    assert os.path.exists(f), f"File missing: {f}"
    with open(f, encoding='utf-8') as fp:
        c = fp.read()
    assert len(c) > 5000, f"File content too small: {f}"
    assert 'COSY.addToDict' in c, f"Missing COSY.addToDict: {f}"
    assert '📖 Session Vocabulary' in c, f"Missing Vocab section: {f}"
    assert '🎙️ Discussion Structure' in c, f"Missing Discussion section: {f}"
print(f"-> All {len(new_files)} files exist and passed checks.")

print("2. Verifying events/data/sessions.json entries...")
with open('events/data/sessions.json', encoding='utf-8') as fp:
    sessions_data = json.load(fp)

registered_hrefs = {item['href'] for item in sessions_data}
for f in new_files:
    rel_href = '../' + f
    assert rel_href in registered_hrefs, f"Href {rel_href} not found in events/data/sessions.json"
print(f"-> All {len(new_files)} sessions registered in sessions.json.")

print("3. Verifying events/index.html upcoming section...")
with open('events/index.html', encoding='utf-8') as fp:
    index_html = fp.read()

for f in new_files:
    rel_href = '../' + f
    assert rel_href in index_html, f"Href {rel_href} missing from events/index.html upcoming table"
print(f"-> All {len(new_files)} sessions present in events/index.html upcoming table.")

print("ALL VERIFICATION CHECKS PASSED SUCCESSFULLY!")
