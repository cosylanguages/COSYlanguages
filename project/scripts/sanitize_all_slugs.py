import json, re

def to_ascii_slug(text):
    translit_map = {
        'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'yo', 'ж':'zh',
        'з':'z', 'и':'i', 'й':'y', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o',
        'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'kh', 'ц':'ts',
        'ч':'ch', 'ш':'sh', 'щ':'shch', 'ъ':'', 'ы':'y', 'ь':'', 'э':'e', 'ю':'yu',
        'я':'ya'
    }
    s = text.lower()
    res = []
    for char in s:
        if char in translit_map:
            res.append(translit_map[char])
        elif char.isalnum() or char == '-':
            res.append(char)
        else:
            res.append('-')
    slug = "".join(res)
    slug = re.sub(r'-+', '-', slug).strip('-')
    return slug

with open('data/ru_grammar_topics_map.json', 'r', encoding='utf-8') as f:
    topics_map = json.load(f)

new_map = {}
for level, topics in topics_map.items():
    new_topics = []
    for slug, title, desc in topics:
        clean_slug = to_ascii_slug(slug)
        new_topics.append((clean_slug, title, desc))
    new_map[level] = new_topics

with open('data/ru_grammar_topics_map.json', 'w', encoding='utf-8') as f:
    json.dump(new_map, f, ensure_ascii=False, indent=2)

print("Sanitized all slugs in data/ru_grammar_topics_map.json")
