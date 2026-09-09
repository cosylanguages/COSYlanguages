import os, glob

with open('project/scripts/build_ru_grammar_map.py', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace any Cyrillic 'в' with ASCII 'v'
text = text.replace('в-ekspromte', 'v-ekspromte')
text = text.replace('в-ritme', 'v-ritme')
text = text.replace('в-retsezii', 'v-retsezii')
text = text.replace('в-spore', 'v-spore')
text = text.replace('в-nauchnykh', 'v-nauchnykh')
text = text.replace('в-ofitsialnoy', 'v-ofitsialnoy')
text = text.replace('в-дискуссии', 'v-diskussii')
text = text.replace('в-nauchnom', 'v-nauchnom')
text = text.replace('в-монологе', 'v-monologe')

with open('project/scripts/build_ru_grammar_map.py', 'w', encoding='utf-8') as f:
    f.write(text)

# Clean out any files with non-ascii characters in manuals/ru/grammar/
for root, dirs, files in os.walk('manuals/ru/grammar'):
    for file in files:
        filepath = os.path.join(root, file)
        if any(ord(c) > 127 for c in file):
            print('Removing non-ASCII file:', filepath)
            os.remove(filepath)
