import json

def fix_adjectives():
    path = 'reference-grammar/en/morphology/adjectives.json'
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    for g in data.get('groups', []):
        items = g.get('items', [])
        if items and items[0].get('practice_links'):
            g['practice_links'] = items[0]['practice_links']
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

def fix_nouns():
    path = 'reference-grammar/en/morphology/nouns.json'
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    for g in data.get('groups', []):
        if g.get('id') == 'plurals':
            g['practice_links'] = [
                'manuals/en/grammar/a1/topics/plurals-regular.html',
                'manuals/en/grammar/a1/topics/plurals-irregular.html'
            ]
        items = g.get('items', [])
        if items and items[0].get('practice_links'):
            g['practice_links'] = items[0]['practice_links']
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

def fix_numerals():
    path = 'reference-grammar/en/morphology/numerals.json'
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    for g in data.get('groups', []):
        items = g.get('items', [])
        if items and items[0].get('practice_links'):
            g['practice_links'] = items[0]['practice_links']
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

def fix_pronouns():
    path = 'reference-grammar/en/morphology/pronouns.json'
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    for g in data.get('groups', []):
        if g.get('id') == 'possessive_adjectives':
            g['practice_links'] = [
                'manuals/en/grammar/a1/topics/possessive-s.html'
            ]
        items = g.get('items', [])
        if items and items[0].get('practice_links'):
            g['practice_links'] = items[0]['practice_links']
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

def fix_verbs():
    path = 'reference-grammar/en/morphology/verbs.json'
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    for g in data.get('groups', []):
        if g.get('id') == 'past_simple':
            g['practice_links'] = [
                'manuals/en/grammar/a1/topics/past-simple-regular.html',
                'manuals/en/grammar/a1/topics/past-simple-irregular.html'
            ]
        items = g.get('items', [])
        if items and items[0].get('practice_links'):
            g['practice_links'] = items[0]['practice_links']
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

if __name__ == '__main__':
    fix_adjectives()
    fix_nouns()
    fix_numerals()
    fix_pronouns()
    fix_verbs()
    print('Morphology JSON practice_links fixed successfully!')
