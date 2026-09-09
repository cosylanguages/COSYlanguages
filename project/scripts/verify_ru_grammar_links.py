import os, re
from urllib.parse import unquote

root_dir = os.path.abspath(".")
ru_grammar_dir = os.path.join(root_dir, "manuals", "ru", "grammar")

broken_count = 0
total_checked = 0

for root, dirs, files in os.walk(ru_grammar_dir):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            links = re.findall(r'(?:href|src)=["\']([^"\']+)["\']', content)
            for link in links:
                if link.startswith(("http://", "https://", "#", "mailto:", "javascript:")):
                    continue

                total_checked += 1
                clean_link = link.split("?")[0].split("#")[0]
                if not clean_link:
                    continue

                target_path = os.path.normpath(os.path.join(os.path.dirname(filepath), unquote(clean_link)))
                if not os.path.exists(target_path):
                    print(f"❌ Broken link in {os.path.relpath(filepath, root_dir)}: '{link}' -> Target missing: {target_path}")
                    broken_count += 1

print(f"Checked {total_checked} links across manuals/ru/grammar/. Broken links count: {broken_count}")
if broken_count > 0:
    exit(1)
