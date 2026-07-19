import os
import re
import json
import ast

languages = ['en', 'fr', 'es', 'it', 'de', 'ru', 'el', 'br']
gender_languages = ['fr', 'es', 'it', 'de', 'ru', 'el', 'br']

def parse_js_data(filepath):
    if not os.path.exists(filepath):
        return []
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Try to find array block
    m = re.search(r'const\s+data\s*=\s*(\[[\s\S]*?\])\s*;', content)
    if not m:
        return []
    array_str = m.group(1)
    # remove comments
    array_str = re.sub(r'//.*', '', array_str)
    array_str = re.sub(r'/\*[\s\S]*?\*/', '', array_str)
    try:
        return json.loads(array_str)
    except:
        pass
    try:
        return ast.literal_eval(array_str)
    except:
        pass
    return []

# 1. Load existing hand-crafted a1 concepts to preserve their custom explanations
existing_concepts = {}
try:
    with open('games/data/gender/a1.js', 'r', encoding='utf-8') as f:
        content = f.read()
    # match existing objects using ast-like literal eval or regex
    # Since we wrote it cleanly, we can find blocks
    blocks = re.findall(r'\{\s*concept:\s*\"([^\"]+)\"[\s\S]*?explanation:\s*\"([^\"]+)\"\s*\}', content)
    for concept, explanation in blocks:
        existing_concepts[concept.lower()] = explanation
except Exception as e:
    print("No existing custom explanations loaded:", e)

# 2. Extract all nouns from A1 vocabulary files
vocab_by_emoji = {}

for lang in languages:
    lang_dir = f'vocabulary/{lang}/A1'
    if not os.path.exists(lang_dir):
        continue
    for f in os.listdir(lang_dir):
        if f.endswith('.js') and f not in ['grammar.js', 'grammar_elements.js']:
            items = parse_js_data(os.path.join(lang_dir, f))
            for item in items:
                if not isinstance(item, dict):
                    continue
                form = item.get('form', '')
                word = item.get('word', '')
                emoji = item.get('emoji', '')
                if form == 'noun' and word and emoji:
                    # Resolve gender
                    gender = item.get('gender', '').strip().lower()
                    article = item.get('article', '').strip()

                    # Infer gender if empty
                    if not gender:
                        if lang in ['fr', 'es', 'it', 'br']:
                            if article in ['le', 'el', 'il', 'lo', 'un']:
                                gender = 'masculine'
                            elif article in ['la', 'une', 'una']:
                                gender = 'feminine'
                        elif lang == 'de':
                            if article == 'der':
                                gender = 'masculine'
                            elif article == 'die':
                                gender = 'feminine'
                            elif article == 'das':
                                gender = 'neuter'
                        elif lang == 'el':
                            if article == 'ο':
                                gender = 'masculine'
                            elif article == 'η':
                                gender = 'feminine'
                            elif article == 'το':
                                gender = 'neuter'
                        elif lang == 'ru':
                            # Suffix inference
                            last_char = word[-1] if word else ''
                            if last_char in ['а', 'я', 'ь']:
                                gender = 'feminine'
                            elif last_char in ['о', 'е']:
                                gender = 'neuter'
                            else:
                                gender = 'masculine'

                    if not gender and lang in ['fr', 'es', 'it', 'br']:
                        # Default to masculine if still unresolved for Romance/Breton
                        gender = 'masculine'
                    elif not gender and lang in ['de', 'ru', 'el']:
                        # Default to masculine/neuter
                        gender = 'masculine'

                    if emoji not in vocab_by_emoji:
                        vocab_by_emoji[emoji] = {}
                    vocab_by_emoji[emoji][lang] = {
                        'word': word,
                        'article': article,
                        'gender': gender
                    }

# 3. Align and build final concepts
new_data = []

# Map of standard concepts
concept_mapping = {}

for emoji, langs in vocab_by_emoji.items():
    # We need an English word to serve as the Concept Name
    en_info = langs.get('en')
    if not en_info:
        # Fallback: check if we can get it from another source or default to first translation
        continue

    concept_name = en_info['word'].capitalize()

    # We need at least 3 of our target gendered languages to have a translation
    gender_translations = {}
    for gl in gender_languages:
        if gl in langs:
            gender_translations[gl] = {
                'word': langs[gl]['word'],
                'article': langs[gl]['article'],
                'gender': langs[gl]['gender']
            }

    if len(gender_translations) < 3:
        continue

    # Check if we have a custom explanation
    explanation = existing_concepts.get(concept_name.lower())
    if not explanation:
        # Generate a general etymological summary
        romance_genders = []
        germanic_genders = []
        slavic_genders = []
        greek_genders = []

        for gl, info in gender_translations.items():
            g_tag = info['gender']
            if gl in ['fr', 'es', 'it']:
                romance_genders.append(f"{gl.upper()}: {g_tag}")
            elif gl == 'de':
                germanic_genders.append(f"German: {g_tag}")
            elif gl == 'ru':
                slavic_genders.append(f"Russian: {g_tag}")
            elif gl == 'el':
                greek_genders.append(f"Greek: {g_tag}")

        exparts = []
        if romance_genders:
            exparts.append(f"Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. {' or '.join(romance_genders)}).")
        if germanic_genders:
            exparts.append(f"In Germanic roots, the word shifted or was established as {', '.join(germanic_genders)}.")
        if slavic_genders:
            exparts.append(f"In Slavic languages, gender is determined phonetically based on the word ending (e.g. {', '.join(slavic_genders)}).")
        if greek_genders:
            exparts.append(f"Greek inherits its grammatical gender from Ancient Hellenic roots ({', '.join(greek_genders)}).")

        explanation = " ".join(exparts)
        if not explanation:
            explanation = f"Grammatical gender of '{concept_name}' varies across different Indo-European families based on suffix endings and historical roots."

    # Add to list
    new_data.append({
        'concept': concept_name,
        'translations': gender_translations,
        'explanation': explanation
    })

# Remove duplicates or overlaps (keep custom ones at the top)
seen = set()
final_list = []

# First, add existing hand-crafted concepts to keep them prioritized
for c_name in ["sun", "moon", "water", "book", "cat", "star"]:
    for item in new_data:
        if item['concept'].lower() == c_name and c_name not in seen:
            final_list.append(item)
            seen.add(c_name)

# Next, add the rest of the matches
for item in new_data:
    c_lower = item['concept'].lower()
    if c_lower not in seen:
        final_list.append(item)
        seen.add(c_lower)

print(f"Compiled {len(final_list)} concepts for A1 Gender Game!")

# Write to games/data/gender/a1.js
output_content = f"""(function() {{
    const level = "starter";
    const data = {json.dumps(final_list, indent=8, ensure_ascii=False)};
    window.genderGameData = window.genderGameData || {{}};
    window.genderGameData[level] = data;
}})();
"""

with open('games/data/gender/a1.js', 'w', encoding='utf-8') as f:
    f.write(output_content)

print("Successfully updated games/data/gender/a1.js!")
