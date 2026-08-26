import json
import re

with open("scripts/build_monolingual_grammar_manuals.py", "r", encoding="utf-8") as f:
    code = f.read()

# Let's inspect the python code in scripts/build_monolingual_grammar_manuals.py
print("Length of script:", len(code))
