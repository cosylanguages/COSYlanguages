with open("project/scripts/build_ru_grammar_map.py", "r", encoding="utf-8") as f:
    text = f.read()

# Replace Cyrillic 'в' in slugs with ASCII 'v'
text = text.replace("vidy-glagola-в-proshedshem-vremeni", "vidy-glagola-v-proshedshem-vremeni")
text = text.replace("vidy-glagola-в-budushchem-vremeni", "vidy-glagola-v-budushchem-vremeni")
text = text.replace("vidy-glagola-в-povelitelnom-naklonenii", "vidy-glagola-v-povelitelnom-naklonenii")

with open("project/scripts/build_ru_grammar_map.py", "w", encoding="utf-8") as f:
    f.write(text)
