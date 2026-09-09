import json, re, os

def to_ascii_slug(s):
    translit_map = {
        'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'yo', 'ж':'zh',
        'з':'z', 'и':'i', 'й':'y', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o',
        'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'kh', 'ц':'ts',
        'ч':'ch', 'ш':'sh', 'щ':'shch', 'ъ':'', 'ы':'y', 'ь':'', 'э':'e', 'ю':'yu',
        'я':'ya'
    }
    res = []
    for char in s.lower():
        if char in translit_map:
            res.append(translit_map[char])
        elif char.isalnum() or char == '-':
            res.append(char)
        else:
            res.append('-')
    res_str = "".join(res)
    res_str = re.sub(r'-+', '-', res_str).strip('-')
    return res_str

with open('data/ru_grammar_topics_map.json', 'r', encoding='utf-8') as f:
    topics_map = json.load(f)

cleaned_map = {}
for level, topics in topics_map.items():
    cleaned_topics = []
    for slug, title, desc in topics:
        clean = to_ascii_slug(slug)
        cleaned_topics.append((clean, title, desc))
    cleaned_map[level] = cleaned_topics

with open('data/ru_grammar_topics_map.json', 'w', encoding='utf-8') as f:
    json.dump(cleaned_map, f, ensure_ascii=False, indent=2)

print("Saved cleaned data/ru_grammar_topics_map.json")

# Remove any existing HTML files with non-ascii characters or spaces
for root, dirs, files in os.walk('manuals/ru/grammar'):
    for file in files:
        if not file.isascii() or ' ' in file:
            p = os.path.join(root, file)
            print("Deleting invalid file:", p)
            os.remove(p)
