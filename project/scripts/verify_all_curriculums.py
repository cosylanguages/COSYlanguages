import json
import jsonschema
import random

schema = json.load(open('curriculum/_schema/curriculum.schema.json'))

levels = ['A2', 'B1', 'B2', 'C1', 'C2']
languages = ['fr', 'ru']

print("=== 1. SCHEMA VALIDATION ===")
for lang in languages:
    for lvl in levels:
        filepath = f'curriculum/{lang}/general/{lvl}.json'
        data = json.load(open(filepath, encoding='utf-8'))
        jsonschema.validate(data, schema)
        unit_cnt = len(data['units'])
        lesson_cnt = sum(len(u['lessons']) for u in data['units'])
        print(f"✅ {lang.upper()} {lvl}: Valid schema. {unit_cnt} units, {lesson_cnt} total lessons.")

print("\n=== 2. PLACEHOLDER CHECK (C1 & C2) ===")
for lang in languages:
    for lvl in ['C1', 'C2']:
        filepath = f'curriculum/{lang}/general/{lvl}.json'
        content = open(filepath, encoding='utf-8').read()
        assert "C1 terminology" not in content, f"Placeholder found in {lang} {lvl}!"
        assert "Complex structures" not in content, f"Placeholder found in {lang} {lvl}!"
        print(f"✅ {lang.upper()} {lvl}: Zero placeholders found.")

print("\n=== 3. RECYCLED FIELD CHAINING SPOT-CHECK ===")
for lang in languages:
    all_lessons = []
    for lvl in levels:
        filepath = f'curriculum/{lang}/general/{lvl}.json'
        data = json.load(open(filepath, encoding='utf-8'))
        for u in data['units']:
            for l in u['lessons']:
                all_lessons.append((lvl, u['unit'], l['lesson'], l['title'], l.get('recycled')))

    print(f"\nTotal {lang.upper()} lessons indexed across 5 files: {len(all_lessons)}")
    sample = random.sample(all_lessons, 5)
    for item in sample:
        lvl, u_num, l_num, title, recycled = item
        print(f"  [Level {lvl} | Unit {u_num} | Lesson {l_num}] - {title}")
        print(f"    --> Recycled: \"{recycled}\"")

print("\nValidation complete successfully!")
