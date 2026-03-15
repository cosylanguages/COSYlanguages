
import sys
import re

def is_cyrillic(char):
    return '\u0400' <= char <= '\u04FF'

def is_greek(char):
    return '\u0370' <= char <= '\u03FF'

def audit_file(path):
    print(f"Auditing {path}...")
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Simple regex to find quoted strings
    strings = re.findall(r'"([^"]*)"', content) + re.findall(r"'([^']*)'", content)

    found_issue = False
    for s in strings:
        has_cyrillic = any(is_cyrillic(c) for c in s)
        has_greek = any(is_greek(c) for c in s)

        # We only care about mixed script in branding or if Russian has Greek chars
        if has_cyrillic and has_greek:
            # Specific check for the branding strings we know
            print(f"!!! Mixed script found in '{s}':")
            for c in s:
                if is_cyrillic(c) or is_greek(c):
                     print(f"  {c}: U+{ord(c):04X} ({'Cyrillic' if is_cyrillic(c) else 'Greek'})")
            found_issue = True

    if not found_issue:
        print("No mixed script issues found in strings.")

files = ['js/translations.js', 'languages/ru.html', 'languages/el.html']
for f in files:
    audit_file(f)
