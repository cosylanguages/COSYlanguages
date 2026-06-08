import os
import json

def check_file(path):
    return os.path.exists(path)

# Load curriculum definitions from curriculum_data.js
# (Simplified parsing for the audit)
langs = ['en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt']
levels = ['a1'] # Current focus

print("--- Curriculum Data Audit ---")
for lang in langs:
    for level in levels:
        path = f"js/data/curriculum/{lang}_{level}.js"
        exists = check_file(path)
        print(f"{lang.upper()} {level.upper()} Curriculum: {'FOUND' if exists else 'MISSING'} ({path})")

        # Check roadmap html
        roadmap = f"curriculum/{lang}/{level}.html"
        rm_exists = check_file(roadmap)
        print(f"  Roadmap HTML: {'FOUND' if rm_exists else 'MISSING'} ({roadmap})")

print("\n--- Interactive Lesson Audit (EN) ---")
for i in range(1, 11):
    path = f"js/data/lessons/day{i}.js"
    exists = check_file(path)
    print(f"Day {i} Data: {'FOUND' if exists else 'MISSING'}")
