import os
import glob
from html.parser import HTMLParser

class LinkExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            for attr, val in attrs:
                if attr == 'href' and val and not val.startswith('#') and not val.startswith('http'):
                    self.links.append(val)

manual_files = glob.glob('manuals/*.html')
print(f"Checking {len(manual_files)} manual files...")

errors = 0
for filepath in sorted(manual_files):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    parser = LinkExtractor()
    parser.feed(content)

    file_dir = os.path.dirname(filepath)
    for link in parser.links:
        # Strip query string or anchor
        target_clean = link.split('#')[0].split('?')[0]
        if not target_clean:
            continue
        target_path = os.path.normpath(os.path.join(file_dir, target_clean))
        if not os.path.exists(target_path):
            print(f"❌ BROKEN LINK in {filepath}: '{link}' -> Resolved target '{target_path}' does not exist!")
            errors += 1

if errors == 0:
    print("✅ All links in manuals/*.html resolve successfully to valid local files!")
else:
    print(f"❌ Total broken links found: {errors}")
    exit(1)
