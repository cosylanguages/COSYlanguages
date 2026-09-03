import json
import glob
import re
import os

# Load existing words
files = glob.glob("vocabulary/en/A1/**/*.js", recursive=True)
files = [f for f in files if not f.endswith("idioms.js")]

existing_word_forms = set()
for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        content = fp.read()
        # extract objects or word/form pairs
        matches = re.findall(r'"word":\s*"([^"]+)"[\s\S]*?"form":\s*"([^"]+)"', content)
        for w, form in matches:
            existing_word_forms.add((w.lower(), form.lower()))

print(f"Existing unique (word, form) pairs: {len(existing_word_forms)}")
