import json
import re

def parse_js_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    match = re.search(r'const data = (\[.*\]);', content, re.DOTALL)
    if match:
        return json.loads(match.group(1))
    return []

vocab = parse_js_file('js/data/germanic/en/starter/vocabulary.js')
verbs = parse_js_file('js/data/germanic/en/starter/verbs.js')
adjs = parse_js_file('js/data/germanic/en/starter/adjectives.js')

print(f"Vocab count: {len(vocab)}")
print(f"Verbs count: {len(verbs)}")
print(f"Adjs count: {len(adjs)}")

# Check in, on, at
preps = [e for e in vocab if e.get('word') in ['in', 'on', 'at']]
for p in preps:
    print(f"Word: {p['word']} | Defs: {len(p.get('definitions', []))} | IPA: {p.get('transcription')} | Image: {p.get('image')}")

# Check doctor
doc = next((e for e in vocab if e['word'] == 'doctor'), None)
if doc:
    print(f"Doctor countability: {doc.get('countability')}")

# Check added words
for word in ["nurse", "chef", "explain", "possible"]:
    found = any(e['word'] == word for e in vocab + verbs + adjs)
    print(f"Word '{word}' found: {found}")

# Check antonyms symmetry
word_to_adj = {e['word']: e for e in adjs}
sunny = word_to_adj.get('sunny')
cloudy = word_to_adj.get('cloudy')
if sunny and cloudy:
    print(f"Sunny opposite: {sunny.get('opposite')} | Cloudy opposite: {cloudy.get('opposite')}")
