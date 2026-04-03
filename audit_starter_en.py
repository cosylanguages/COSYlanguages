import json

with open('starter_en_data.json', 'r') as f:
    data = json.load(f)

def check_examples(entry):
    defs = entry.get('definitions', [])
    for d in defs:
        if d.get('examples'):
            return True
    return False

def audit_list(data_list, name, fields):
    print(f"--- Audit for {name} ({len(data_list)} entries) ---")
    missing_counts = {field: 0 for field in fields}
    missing_examples = 0
    for entry in data_list:
        for field in fields:
            val = entry.get(field)
            if val is None or val == "" or val == []:
                missing_counts[field] += 1
        if not check_examples(entry):
            missing_examples += 1

    for field, count in missing_counts.items():
        print(f"Missing {field}: {count}")
    print(f"Missing examples in ALL definitions: {missing_examples}")

audit_list(data['vocabulary'], "Vocabulary", ['definitions', 'countability', 'image', 'transcription', 'subtext'])
audit_list(data['verbs'], "Verbs", ['definitions', 'v2', 'v3', 'image', 'transcription', 'subtext'])
audit_list(data['adjectives'], "Adjectives", ['definitions', 'opposite', 'comparative', 'superlative', 'image', 'transcription', 'subtext'])
