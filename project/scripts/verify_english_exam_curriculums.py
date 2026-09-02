import json
import jsonschema
import glob
import sys

def verify_exam_curriculums():
    schema = json.load(open('curriculum/_schema/curriculum.schema.json', encoding='utf-8'))
    levels = ['B1', 'B2', 'C1', 'C2']

    print("=== 1. SCHEMA & STRUCTURAL VALIDATION ===")
    for level in levels:
        filepath = f'curriculum/en/exam/{level}.json'
        data = json.load(open(filepath, encoding='utf-8'))

        # Schema validation
        jsonschema.validate(data, schema)

        assert data['language'] == 'en', f"Invalid language in {filepath}"
        assert data['course_type'] == 'exam', f"Invalid course_type in {filepath}"
        assert data['level'] == level, f"Invalid level in {filepath}"

        units = data['units']
        assert len(units) == 5, f"Expected 5 units in {filepath}, got {len(units)}"

        lesson_idx = 0
        for u in units:
            assert len(u['lessons']) == 5, f"Expected 5 lessons in Unit {u['unit']} of {filepath}, got {len(u['lessons'])}"
            for l in u['lessons']:
                lesson_idx += 1
                code_str = f"EN-EXM-{level}-{lesson_idx:03d}"
                notes = l.get('teacher_notes', '')

                assert f'code: "{code_str}"' in notes, f"Missing or incorrect code {code_str} in lesson {lesson_idx} of {filepath}"
                assert 'cando:' in notes, f"Missing cando in lesson {lesson_idx} of {filepath}"
                assert 'strategy:' in notes, f"Missing strategy in lesson {lesson_idx} of {filepath}"

                recycled = l.get('recycled')
                assert recycled and isinstance(recycled, str) and len(recycled.strip()) > 0, f"Missing or invalid recycled field in lesson {lesson_idx} of {filepath}"

                grammar = l.get('grammar', [])
                vocab = l.get('vocabulary', [])
                assert isinstance(grammar, list) and len(grammar) > 0, f"Grammar array empty in lesson {lesson_idx} of {filepath}"
                assert isinstance(vocab, list) and len(vocab) > 0, f"Vocabulary array empty in lesson {lesson_idx} of {filepath}"

        print(f"✅ EN EXAM {level}: Valid schema & structure. 5 units, 25 lessons, codes EN-EXM-{level}-001..025.")

    print("\n=== 2. RECYCLED FIELD CHAINING SAMPLE ===")
    for level in levels:
        filepath = f'curriculum/en/exam/{level}.json'
        data = json.load(open(filepath, encoding='utf-8'))
        print(f"\nSample recycled chaining for EN EXAM {level}:")
        for u in data['units']:
            l = u['lessons'][0] # Check first lesson of each unit
            print(f"  [Unit {u['unit']} | Lesson {l['lesson']}] {l['title']}")
            print(f"    --> Recycled: \"{l['recycled']}\"")

    print("\nAll verification checks passed successfully!")

if __name__ == '__main__':
    verify_exam_curriculums()
