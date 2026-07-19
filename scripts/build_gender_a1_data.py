import os
import re
import json
import ast

languages = ['en', 'fr', 'es', 'it', 'de', 'ru', 'el', 'br']
gender_languages = ['fr', 'es', 'it', 'de', 'ru', 'el', 'br']

def parse_existing_a1():
    """Parses existing games/data/gender/a1.js and returns the python data structure."""
    if not os.path.exists('games/data/gender/a1.js'):
        return []
    try:
        with open('games/data/gender/a1.js', 'r', encoding='utf-8') as f:
            content = f.read()

        m = re.search(r'const\s+data\s*=\s*(\[[\s\S]*?\])\s*;', content)
        if not m:
            return []
        array_str = m.group(1)

        # specific unquoted keys used in our layout
        keys = ["concept", "emoji", "translations", "fr", "es", "it", "de", "ru", "el", "br", "word", "article", "gender", "explanation"]
        processed = array_str
        for k in keys:
            processed = re.sub(r'\b' + k + r'\s*:', f'"{k}":', processed)

        # Remove trailing commas
        processed = re.sub(r',\s*([\]\}])', r'\1', processed)

        return ast.literal_eval(processed)
    except Exception as e:
        print("Failed to parse existing a1.js:", e)
        return []

def format_concept(concept):
    """Formats a concept dictionary exactly matching the clean style of other levels."""
    lines = []
    lines.append("        {")
    lines.append(f"            concept: {json.dumps(concept['concept'], ensure_ascii=False)},")
    lines.append(f"            emoji: {json.dumps(concept['emoji'], ensure_ascii=False)},")
    lines.append("            translations: {")

    trans_lines = []
    for lang in ['fr', 'es', 'it', 'de', 'ru', 'el', 'br']:
        if lang in concept['translations']:
            t = concept['translations'][lang]
            word_esc = json.dumps(t['word'], ensure_ascii=False)
            art_esc = json.dumps(t['article'], ensure_ascii=False)
            gen_esc = json.dumps(t['gender'], ensure_ascii=False)
            trans_lines.append(f"                {lang}: {{ word: {word_esc}, article: {art_esc}, gender: {gen_esc} }}")

    lines.append(",\n".join(trans_lines))
    lines.append("            },")
    lines.append(f"            explanation: {json.dumps(concept['explanation'], ensure_ascii=False)}")
    lines.append("        }")
    return "\n".join(lines)

def build_data():
    # Load our 20 beautifully hand-crafted concepts as the base/truth
    curated_concepts = parse_existing_a1()

    if not curated_concepts:
        print("Warning: Could not parse any curated concepts from existing games/data/gender/a1.js!")
        return

    print(f"Loaded {len(curated_concepts)} beautifully curated concepts from games/data/gender/a1.js.")

    # Write back to games/data/gender/a1.js using the clean format
    formatted_blocks = [format_concept(c) for c in curated_concepts]
    blocks_str = ",\n".join(formatted_blocks)

    output_content = f"""(function() {{
    const level = "starter";
    const data = [
{blocks_str}
    ];
    window.genderGameData = window.genderGameData || {{}};
    window.genderGameData[level] = data;
}})();
"""

    with open('games/data/gender/a1.js', 'w', encoding='utf-8') as f:
        f.write(output_content)

    print("Successfully built and aligned games/data/gender/a1.js style and formatting!")

if __name__ == "__main__":
    build_data()
