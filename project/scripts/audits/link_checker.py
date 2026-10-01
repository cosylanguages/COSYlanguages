import os
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT_DIR = Path(__file__).resolve().parents[3]
SKIP_DIRS = {".git", "node_modules", "templates", "components", "project", "test-results", "screenshots", "__pycache__"}


class LinkCollector(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag in {"a", "area"}:
            self.links.extend(value for name, value in attrs if name == "href" and value)


def html_pages():
    for current, dirs, files in os.walk(ROOT_DIR):
        dirs[:] = [directory for directory in dirs if directory not in SKIP_DIRS]
        for filename in files:
            if filename.endswith(".html"):
                yield Path(current) / filename


def resolve_local_target(source, href):
    parsed = urlsplit(href.strip())
    if parsed.scheme or parsed.netloc or not parsed.path:
        return None

    link_path = Path(unquote(parsed.path))
    if link_path.is_absolute():
        parts = link_path.parts[1:]
        target = ROOT_DIR.joinpath(*parts)
        if not target.exists() and parts and parts[0] == ROOT_DIR.name:
            target = ROOT_DIR.joinpath(*parts[1:])
    else:
        target = source.parent / link_path

    target = target.resolve()
    try:
        target.relative_to(ROOT_DIR)
    except ValueError:
        return target

    if target.is_dir():
        target /= "index.html"
    return target


broken_links = []
page_count = 0
for source in html_pages():
    page_count += 1
    parser = LinkCollector()
    try:
        parser.feed(source.read_text(encoding="utf-8"))
    except (OSError, UnicodeError) as error:
        broken_links.append((source, "<unreadable page>", str(error)))
        continue

    for href in parser.links:
        target = resolve_local_target(source, href)
        if target is not None and not target.is_file():
            broken_links.append((source, href, str(target)))

print(f"Checked {page_count} HTML pages.")
if broken_links:
    print(f"Found {len(broken_links)} broken local link(s):")
    for source, href, target in sorted(set(broken_links)):
        print(f"{source.relative_to(ROOT_DIR)} | {href} | {target} (NOT FOUND)")
    sys.exit(1)

print("All local HTML links resolve.")
