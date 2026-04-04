import re
import json

def process_file_v4(filepath, is_vocab=False, other_sets=None):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'(const data = )(\[.*\]);', content, re.DOTALL)
    if not match: return

    # regex for objects is more reliable if I look for boundaries
    # In these files objects are separated by \n    {
    objects_raw = re.split(r'\n    \{', match.group(2))
    processed_objects = []
    seen = set()

    transcriptions = {"and": "ænd", "but": "bʌt", "because": "bɪˈkɒz", "or": "ɔː(r)", "so": "səʊ"}
    number_words = {
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
        'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand'
    }

    for i, obj in enumerate(objects_raw):
        if not obj.strip(): continue
        o = "{" + obj if i > 0 else obj
        # Strip array ends if it was the last object
        if i == len(objects_raw) - 1:
            o = re.sub(r'\]\s*$', '', o.strip())

        # Strip trailing comma
        o = re.sub(r',\s*$', '', o.strip())
        if not o.endswith('}'): o += "}"

        # 1. Strip images and translations
        o = re.sub(r'\s*\"image\":\s*(?:\"[^\"]*\"|null),?', '', o)
        o = re.sub(r'\s*\"translation\":\s*(?:\"[^\"]*\"|null),?', '', o)

        # 2. Strip transcription brackets
        def strip_t(m):
            t = m.group(1)
            if t.startswith('[') and t.endswith(']'): t = t[1:-1]
            return f'"transcription": "{t}"'
        o = re.sub(r'\"transcription\":\s*\"([^\"]*)\"', strip_t, o)

        # Extraction
        word_m = re.search(r'\"word\":\s*\"([^\"]*)\"', o)
        if not word_m: continue
        word = word_m.group(1)
        form_m = re.search(r'\"form\":\s*\"([^\"]*)\"', o)
        form = form_m.group(1) if form_m else ""

        # Dedupe
        should_skip = False
        if is_vocab:
            if word.lower() in number_words: should_skip = True
            elif other_sets:
                if form == 'verb' and word in other_sets.get('verbs', set()): should_skip = True
                elif form == 'adjective' and word in other_sets.get('adjectives', set()): should_skip = True
                elif word in other_sets.get('locations', set()): should_skip = True
                elif word in other_sets.get('people', set()): should_skip = True

        key = (word, form)
        if should_skip or key in seen: continue
        seen.add(key)

        # 3. Enrich
        if is_vocab and "transcription" not in o and word in transcriptions:
            o = re.sub(r'\}\s*$', f'    "transcription": "{transcriptions[word]}",\n    }}', o.strip())

        if "synonyms" not in o:
            o = re.sub(r'\}\s*$', f',    "synonyms": [],\n    }}', o.strip())

        if "opposite" not in o:
            o = re.sub(r'\}\s*$', f',    "opposite": null,\n    }}', o.strip())

        # Cleanup internal syntax
        o = re.sub(r',(\s*\})', r'\1', o)
        # Ensure comma between items if needed
        # We'll just trust previous fields had commas.
        # The main risk is adding synonyms/opposite without a comma before.
        # Fixed in enrichment above.

        processed_objects.append(o)

    new_data_js = "[\n    " + ",\n    ".join(processed_objects) + "\n    ]"
    new_content = content[:match.start(2)] + new_data_js + content[match.end(2):]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

def get_word_set(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    return set(re.findall(r'\"word\":\s*\"([^\"]*)\"', content))

other_sets = {
    "verbs": get_word_set("js/data/germanic/en/starter/verbs.js"),
    "adjectives": get_word_set("js/data/germanic/en/starter/adjectives.js"),
    "locations": get_word_set("js/data/germanic/en/starter/locations.js"),
    "people": get_word_set("js/data/germanic/en/starter/people.js")
}

for f, is_v in [("js/data/germanic/en/starter/vocabulary.js", True),
               ("js/data/germanic/en/starter/verbs.js", False),
               ("js/data/germanic/en/starter/adjectives.js", False),
               ("js/data/germanic/en/starter/locations.js", False),
               ("js/data/germanic/en/starter/people.js", False)]:
    process_file_v4(f, is_v, other_sets)
