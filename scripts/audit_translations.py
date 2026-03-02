import os
import re
from bs4 import BeautifulSoup, Comment, NavigableString

def audit_html_files():
    html_files = ['index.html', 'practice.html', 'events.html']
    missing_keys = []

    for file in html_files:
        if not os.path.exists(file):
            continue

        with open(file, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')

            # Find all text-containing elements that don't have data-translate-key
            for tag in soup.find_all(True):
                # Skip scripts and styles
                if tag.name in ['script', 'style']:
                    continue

                # Check for direct text children
                for child in tag.children:
                    if isinstance(child, NavigableString) and not isinstance(child, Comment):
                        text = child.strip()
                        if text:
                            # Skip common non-translatable things
                            if re.match(r'^[0-9\s\W]+$', text): # Just numbers/symbols
                                continue
                            if '+33' in text or '@cosylanguages' in text:
                                continue
                            if text in ['English', 'Français', 'Italiano', 'Русский', 'Ελληνικά']:
                                continue
                            if text in ['English 🇬🇧', 'Français 🇫🇷', 'Italiano 🇮🇹', 'Русский 🇷🇺', 'Ελληνικά 🇬🇷']:
                                continue

                            # If this tag or any of its parents has data-translate-key, it's probably okay
                            if not tag.has_attr('data-translate-key'):
                                # Check if it's inside a tag that has a key
                                parent_with_key = tag.find_parent(attrs={"data-translate-key": True})
                                if not parent_with_key:
                                    missing_keys.append(f"{file}: <{tag.name}> contains untranslated text: '{text}'")

                # Check for placeholders
                if tag.has_attr('placeholder') and not tag.has_attr('data-translate-key'):
                    missing_keys.append(f"{file}: <{tag.name}> placeholder '{tag['placeholder']}' is untranslated")

    return missing_keys

if __name__ == "__main__":
    results = audit_html_files()
    if not results:
        print("No missing translation keys found!")
    else:
        for r in results:
            print(r)
