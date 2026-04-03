import re
import json

def read_js_data(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    match = re.search(r'const data = (\[.*\]);', content, re.DOTALL)
    if match:
        return json.loads(match.group(1)), content, match.group(1)
    return None, None, None

def write_js_data(filepath, original_content, original_data_str, new_data):
    new_data_str = json.dumps(new_data, indent=4)
    # Re-indent to match 8 spaces if that's what I used before, or 4 which is standard
    # Actually, the original used varying indentation but json.dumps(indent=4) is fine.
    # Let's try to match the "cosy" style (4 spaces).
    new_content = original_content.replace(original_data_str, new_data_str)
    with open(filepath, 'w') as f:
        f.write(new_content)

data, content, data_str = read_js_data('js/data/germanic/en/starter/adjectives.js')

if data:
    word_to_entry = {e['word']: e for e in data}

    # Establish symmetry
    for entry in data:
        word = entry['word']
        opp = entry.get('opposite')
        if opp and opp in word_to_entry:
            target = word_to_entry[opp]
            if target.get('opposite') != word:
                print(f"Fixing symmetry: {opp} -> {word}")
                target['opposite'] = word

    # Manual fixes for important pairs
    symmetry_pairs = [
        ("sunny", "cloudy"),
        ("sunny", "rainy"),
        ("happy", "sad"),
        ("hot", "cold"),
        ("big", "small"),
        ("large", "small"),
        ("long", "short"),
        ("tall", "short"),
        ("easy", "difficult"),
        ("expensive", "cheap"),
        ("good", "bad"),
        ("new", "old"),
        ("clean", "dirty"),
        ("healthy", "unhealthy"),
        ("rich", "poor"),
        ("early", "late"),
        ("fast", "slow"),
        ("loud", "quiet"),
        ("safe", "dangerous"),
        ("strong", "weak"),
        ("beautiful", "ugly"),
        ("honest", "dishonest"),
        ("possible", "impossible"),
        ("useful", "useless")
    ]

    for w1, w2 in symmetry_pairs:
        if w1 in word_to_entry and w2 in word_to_entry:
            word_to_entry[w1]['opposite'] = w2
            word_to_entry[w2]['opposite'] = w1

    write_js_data('js/data/germanic/en/starter/adjectives.js', content, data_str, data)
    print("Antonym symmetry updated.")
