import os
import re
from bs4 import BeautifulSoup

def correct_mistakes():
    print("Starting Programmatic Correction of Audit Mistakes...")

    html_files = []
    for root, dirs, files in os.walk("."):
        if ".git" in root or "node_modules" in root:
            continue
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))

    corrected_count = 0

    # 1. Fix ../the-greatest-quotes.html links in sessions
    for filepath in html_files:
        if "events/sessions/the-greatest-quotes/" in filepath.replace("\\", "/"):
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            new_content = content
            # Fix breadcrumbs
            new_content = new_content.replace('href="../the-greatest-quotes.html"', 'href="../../the-greatest-quotes.html"')
            # Fix back button
            new_content = new_content.replace('href="../the-greatest-quotes.html"', 'href="../../the-greatest-quotes.html"')

            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"✓ Corrected Greatest Quotes link in {filepath}")
                corrected_count += 1

    # 2. Convert markdown bold ** to <strong> in HTML files
    for filepath in html_files:
        # We only want to touch events/sessions/ pages to avoid altering templates or other pages unnecessarily
        if "events/sessions/" in filepath.replace("\\", "/"):
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            # Regex to find **something** and replace with <strong>something</strong>
            # Ensuring we don't match across multiple lines or tags
            new_content = re.sub(r'\*\*([^\*\n<>\s][^\*\n<>]*?[^\*\n<>\s]|[^\*\n<>\s])\*\*', r'<strong>\1</strong>', content)

            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"✓ Converted markdown bold to <strong> in {filepath}")
                corrected_count += 1

    # 3. Clean up dead references to init.js, router.js, mobile.js, theme_config.js in HTML files
    dead_patterns = [
        r'<script\s+[^>]*src=["\'][^"\']*(?:init\.js|router\.js|mobile\.js|theme_config\.js)["\'][^>]*>\s*</script>\s*',
        r'<script\s+[^>]*src=["\'][^"\']*(?:init\.js|router\.js|mobile\.js|theme_config\.js)["\'][^>]*/>\s*'
    ]

    for filepath in html_files:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        new_content = content
        for pattern in dead_patterns:
            new_content = re.sub(pattern, '', new_content)

        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"✓ Removed dead script references in {filepath}")
            corrected_count += 1

    # 4. Correct image path in events/ru/the-greatest-quotes.html
    ru_quotes_page = "events/ru/the-greatest-quotes.html"
    if os.path.exists(ru_quotes_page):
        with open(ru_quotes_page, "r", encoding="utf-8") as f:
            content = f.read()

        # Replace greatestquotes.png with thegreatestquotes.png
        new_content = content.replace("greatestquotes.png", "thegreatestquotes.png")
        if new_content != content:
            with open(ru_quotes_page, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"✓ Corrected image reference in {ru_quotes_page}")
            corrected_count += 1

    print(f"Correction completed! Total files modified: {corrected_count}")

if __name__ == "__main__":
    correct_mistakes()
