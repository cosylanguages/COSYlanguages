import json
import re

def extract_object(content, obj_name):
    pattern = rf'const {obj_name} = (\{{.*?\}});'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        return match.group(1)
    return None

with open('js/data.js', 'r') as f:
    full_content = f.read()

# I will use a more robust way to extract since JSON is not exactly JS object
# But for this case, the data.js is mostly valid JSON inside the const definitions

def get_js_obj(content, start_marker):
    start_idx = content.find(start_marker)
    if start_idx == -1: return None
    start_idx += len(start_marker)

    # Simple brace matching
    brace_count = 0
    for i in range(start_idx, len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                return content[start_idx:i+1]
    return None

gamesData_str = get_js_obj(full_content, 'const gamesData =')
extendedCurriculumData_str = get_js_obj(full_content, 'const extendedCurriculumData =')
extraSpeakData_str = get_js_obj(full_content, 'const extraSpeakData =')
speakingGamesData_str = get_js_obj(full_content, 'const speakingGamesData =')
lessonsData_str = get_js_obj(full_content, 'const lessonsData =')

# Write to files
with open('js/data/vocabulary.js', 'w') as f:
    f.write(f'const gamesData = {gamesData_str};\n')
    f.write(f'const extendedCurriculumData = {extendedCurriculumData_str};\n')

with open('js/data/speaking.js', 'w') as f:
    f.write(f'const extraSpeakData = {extraSpeakData_str};\n')
    f.write(f'const speakingGamesData = {speakingGamesData_str};\n')

with open('js/data/curriculum.js', 'w') as f:
    f.write(f'const lessonsData = {lessonsData_str};\n')
