import os, glob, json, re

# Load canonical master list
with open('vocabulary/_canonical/en/A0-A1_master.json') as f:
    master_data = json.load(f)

master_words = {w['word'].lower(): w for w in master_data['words']}
print(f"Canonical master unique words: {len(master_words)}")

# Read all A1 JS files
repo_root = os.getcwd()
a1_files = sorted(glob.glob(os.path.join(repo_root, "vocabulary/en/A1/**/*.js"), recursive=True))
print(f"Total A1 JS files: {len(a1_files)}")

a1_entries = []
a1_words = set()
null_theme_count = 0
idioms_count = 0

for filepath in a1_files:
    rel_path = os.path.relpath(filepath, repo_root)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    match = re.search(r"const\s+data\s*=\s*(\[.*?\])\s*;", content, re.DOTALL)
    if match:
        try:
            items = json.loads(match.group(1))
            for item in items:
                item['_source_file'] = rel_path
                a1_entries.append(item)
                w = item.get('word')
                if w:
                    a1_words.add(w.lower())
                if item.get('theme') is None:
                    null_theme_count += 1
                if item.get('theme') == 'idioms' or 'idiom' in rel_path.lower():
                    idioms_count += 1
        except Exception as e:
            print(f"Error parsing {rel_path}: {e}")

print(f"Total A1 entries: {len(a1_entries)}")
print(f"Total A1 unique words: {len(a1_words)}")
print(f"Null theme entries: {null_theme_count}")
print(f"Idioms entries: {idioms_count}")

# Compare with canonical master list
in_a1_not_master = a1_words - set(master_words.keys())
in_master_not_a1 = set(master_words.keys()) - a1_words

print(f"Words in A1 practice data NOT in canonical master: {len(in_a1_not_master)}")
print(f"Words in canonical master NOT in A1 practice data: {len(in_master_not_a1)}")
