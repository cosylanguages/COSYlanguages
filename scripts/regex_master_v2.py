import re
import json

def cleanse_and_enrich_regex(filepath, is_vocab=False, other_sets=None):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match the data array: const data = [ ... ];
    match = re.search(r'const data = \[(.*)\];', content, re.DOTALL)
    if not match: return

    array_content = match.group(1)

    # Identify objects. Objects in these files are separated by \n    { or },\n    {
    # We find all { ... } where { is followed by "word"
    objects = re.findall(r'(\{\s*\"word\":.*?\n\s*\})', array_content, re.DOTALL)

    transcriptions = {"and": "ænd", "but": "bʌt", "because": "bɪˈkɒz", "or": "ɔː(r)", "so": "səʊ"}
    number_words = {
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
        'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand'
    }

    processed_objects = []
    seen = set()

    for obj in objects:
        # Strip images and translations from this object string
        obj = re.sub(r'\s*\"image\":\s*(?:\"[^\"]*\"|null),?', '', obj)
        obj = re.sub(r'\s*\"translation\":\s*(?:\"[^\"]*\"|null),?', '', obj)

        # Strip transcription brackets
        def strip_t(m):
            t = m.group(1)
            if t.startswith('[') and t.endswith(']'): t = t[1:-1]
            return f'"transcription": "{t}"'
        obj = re.sub(r'\"transcription\":\s*\"([^\"]*)\"', strip_t, obj)

        word_m = re.search(r'\"word\":\s*\"([^\"]*)\"', obj)
        if not word_m: continue
        word = word_m.group(1)
        form_m = re.search(r'\"form\":\s*\"([^\"]*)\"', obj)
        form = form_m.group(1) if form_m else ""

        # Dedupe / Relocate
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

        # Enrich missing fields
        if is_vocab and "transcription" not in obj and word in transcriptions:
            obj = re.sub(r'\}\s*$', f'    "transcription": "{transcriptions[word]}",\n    }}', obj.strip())

        if "synonyms" not in obj:
            obj = re.sub(r'\}\s*$', f'    "synonyms": [],\n    }}', obj.strip())

        if "opposite" not in obj:
            obj = re.sub(r'\}\s*$', f'    "opposite": null,\n    }}', obj.strip())

        # Cleanup trailing commas inside object
        obj = re.sub(r',(\s*\})', r'\1', obj)
        # Ensure comma between fields
        def add_c(m): return m.group(1) + ",\n        " + m.group(2)
        obj = re.sub(r'(\": (?:(?:\"[^\"]*\")|(?:\d+)|null|true|false|\[\s*\]|\{\s*\}))\n\s+(")', add_c, obj)

        processed_objects.append(obj)

    # Reconstruct the array
    new_array_js = "[\n        " + ",\n        ".join(processed_objects) + "\n    ]"

    # Replace the old array with the new one
    new_content = content[:match.start(1)] + new_array_js + content[match.end(1):]

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
    cleanse_and_enrich_regex(f, is_v, other_sets)
