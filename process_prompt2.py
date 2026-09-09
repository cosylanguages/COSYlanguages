import os, glob, json, re

repo_root = os.getcwd()

# 1. Load canonical master list
with open('vocabulary/_canonical/en/A0-A1_master.json') as f:
    master_data = json.load(f)

master_dict = {w['word'].lower(): w for w in master_data['words']}
print(f"Canonical master unique words: {len(master_dict)}")

# 2. Read all current A1 JS files
a1_files = sorted(glob.glob(os.path.join(repo_root, "vocabulary/en/A1/**/*.js"), recursive=True))

file_entries_map = {}
all_a1_entries = []

for filepath in a1_files:
    rel_path = os.path.relpath(filepath, repo_root)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    match = re.search(r"const\s+data\s*=\s*(\[.*?\])\s*;", content, re.DOTALL)
    if match:
        try:
            items = json.loads(match.group(1))
            file_entries_map[rel_path] = items
            for item in items:
                item['_source_file'] = rel_path
                all_a1_entries.append(item)
        except Exception as e:
            print(f"Error parsing {rel_path}: {e}")

print(f"Loaded {len(all_a1_entries)} entries across {len(file_entries_map)} A1 files.")

# Split entries: stay in A1 vs move to B1 vs move to A2
a1_keep_entries = []
b1_move_entries = []
a2_move_entries = []

for entry in all_a1_entries:
    w = entry.get('word', '').strip().lower()
    theme = entry.get('theme')
    source_file = entry.get('_source_file', '')

    # Is it in canonical master list?
    if w in master_dict:
        # Keep in A1
        # Update theme if null or idioms
        canonical_item = master_dict[w]
        if theme is None or theme == 'idioms':
            entry['theme'] = canonical_item['topic']
        a1_keep_entries.append(entry)
    else:
        # Move out of A1
        if theme == 'idioms' or 'idiom' in source_file.lower() or 'idiom' in entry.get('id', '').lower():
            # Move to B1
            entry['level'] = 'intermediate'
            entry['level_code'] = 'B1'
            if entry.get('id', '').startswith('A1-'):
                entry['id'] = 'B1-' + entry['id'][3:]
            elif not entry.get('id', '').startswith('B1-'):
                entry['id'] = f"B1-OTH-GEN-{len(b1_move_entries)+1:03d}"
            b1_move_entries.append(entry)
        else:
            # Check if B1+ register or A2
            # Words > 2 or abstract terms go to B1
            if len(w.split()) > 2 or any(x in w for x in ['certification', 'achievement', 'competition', 'consonant', 'vowel', 'syllable', 'epistemology', 'philosophy']):
                entry['level'] = 'intermediate'
                entry['level_code'] = 'B1'
                if entry.get('id', '').startswith('A1-'):
                    entry['id'] = 'B1-' + entry['id'][3:]
                else:
                    entry['id'] = f"B1-OTH-GEN-{len(b1_move_entries)+1:03d}"
                b1_move_entries.append(entry)
            else:
                # Plausible A2 word
                entry['level'] = 'elementary'
                entry['level_code'] = 'A2'
                if entry.get('id', '').startswith('A1-'):
                    entry['id'] = 'A2-' + entry['id'][3:]
                else:
                    entry['id'] = f"A2-OTH-GEN-{len(a2_move_entries)+1:03d}"
                a2_move_entries.append(entry)

print(f"A1 keep entries: {len(a1_keep_entries)} (unique words: {len({e['word'].lower() for e in a1_keep_entries})})")
print(f"B1 move entries: {len(b1_move_entries)}")
print(f"A2 move entries: {len(a2_move_entries)}")
