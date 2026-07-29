import os
import re

def remediate_file(filepath):
    # Exclude karaoke club entirely
    if "karaoke-club" in filepath:
        return False

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    original = content
    modified = False

    # 1. Replace markdown bold **...** with <strong>...</strong>
    # We do a regex replace for **text**
    if "**" in content:
        content, count = re.subn(r"\*\*(.*?)\*\*", r"<strong>\1</strong>", content)
        if count > 0:
            print(f"  [Markdown Bold] Replaced {count} occurrences of '**' with '<strong>' tags in {filepath}")
            modified = True

    # 2. Convert class="round-block mistakes open" to class="mistake-block open"
    if 'class="round-block mistakes open"' in content:
        content = content.replace('class="round-block mistakes open"', 'class="mistake-block open"')
        print(f"  [Class Name] Replaced round-block mistakes open in {filepath}")
        modified = True

    # 3. Clean inline style margin-bottom: 2rem; from debatable-relatable round blocks
    # E.g., <div class="round-block grammar open" id="s-grammar" style="margin-bottom: 2rem;">
    # or similar
    if 'style="margin-bottom: 2rem;"' in content:
        content = re.sub(r'(\s+style="margin-bottom:\s*2rem;?\s*")', '', content)
        print(f"  [Inline Style] Removed 'style=\"margin-bottom: 2rem;\"' in {filepath}")
        modified = True

    # 4. Remove display:none; on vocab-card in rain-seller-umbrella-quote.html
    if "rain-seller-umbrella-quote.html" in filepath and 'style="display:none;"' in content:
        content = content.replace(' style="display:none;"', '')
        print(f"  [Inline Style] Removed 'style=\"display:none;\"' on vocab-card in {filepath}")
        modified = True

    if modified:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False

def run_remediation():
    session_dirs = [
        "events/sessions",
        "events/fr/sessions",
        "events/ru/sessions"
    ]

    count = 0
    for s_dir in session_dirs:
        if not os.path.exists(s_dir):
            continue

        for root, dirs, files in os.walk(s_dir):
            for file in files:
                if not file.endswith(".html") or file.startswith("template"):
                    continue

                filepath = os.path.join(root, file)
                if remediate_file(filepath):
                    count += 1

    print(f"Remediation complete. Modified {count} files.")

if __name__ == "__main__":
    run_remediation()
