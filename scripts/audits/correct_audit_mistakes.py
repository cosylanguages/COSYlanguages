import os
import re

def correct_mistakes():
    print("Starting Programmatic Correction of Audit Mistakes (Enhanced)...")

    html_files = []
    all_files = []
    for root, dirs, files in os.walk("."):
        if ".git" in root or "node_modules" in root:
            continue
        for file in files:
            rel_path = os.path.relpath(os.path.join(root, file), ".").replace("\\", "/")
            all_files.append(rel_path)
            if file.endswith(".html"):
                html_files.append(rel_path)

    corrected_count = 0

    # 1. Standardize lists in specific Markdown files from * to -
    markdown_targets = [
        "SECURITY.md",
        "planning/notebook/analog_offline_strategy.md",
        "planning/notebook/videos_speaking_club_mapping.md"
    ]
    for filepath in markdown_targets:
        if os.path.exists(filepath):
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            # Replace bullet * with -
            new_content = re.sub(r'^(\s*)\*\s+', r'\1- ', content, flags=re.MULTILINE)
            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"✓ Standardized list bullets to '-' in {filepath}")
                corrected_count += 1

    # 2. Add standard HTML meta-tags/scaffolding to redirect language files
    lang_redirects = [
        "languages/el.html",
        "languages/en.html",
        "languages/fr.html",
        "languages/it.html",
        "languages/ru.html",
        "languages/es.html",
        "languages/de.html",
        "languages/pt.html",
        "languages/hy.html",
        "languages/ka.html",
        "languages/tt.html",
        "languages/ba.html",
        "languages/br.html"
    ]
    for filepath in lang_redirects:
        if os.path.exists(filepath):
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            # Extract target url
            match = re.search(r'url=([^"]+)', content)
            if match:
                target_url = match.group(1)
                lang_code = target_url.split("/")[0]
                scaffold = f"""<!DOCTYPE html>
<html lang="{lang_code}">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta content="Redirecting to {lang_code.upper()} language home." name="description"/>
<title>Redirecting — COSYlanguages</title>
<meta http-equiv="refresh" content="0; url={target_url}">
</head>
<body>
<p>Redirecting to <a href="{target_url}">{lang_code.upper()} home</a>...</p>
</body>
</html>"""
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(scaffold)
                print(f"✓ Wrapped redirect page with HTML standard tags in {filepath}")
                corrected_count += 1

    # 3. Fix ../the-greatest-quotes.html links in sessions
    for filepath in html_files:
        if "events/sessions/the-greatest-quotes/" in filepath:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            new_content = content
            new_content = new_content.replace('href="../the-greatest-quotes.html"', 'href="../../the-greatest-quotes.html"')

            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"✓ Corrected Greatest Quotes link in {filepath}")
                corrected_count += 1

    # 4. Convert markdown bold ** to <strong> in HTML files
    for filepath in html_files:
        if "events/sessions/" in filepath:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            new_content = re.sub(r'\*\*([^\*\n<>\s][^\*\n<>]*?[^\*\n<>\s]|[^\*\n<>\s])\*\*', r'<strong>\1</strong>', content)

            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"✓ Converted markdown bold to <strong> in {filepath}")
                corrected_count += 1

    # 5. Clean up dead references to init.js, router.js, mobile.js, theme_config.js in HTML files
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

    # 6. Correct image path in events/ru/the-greatest-quotes.html
    ru_quotes_page = "events/ru/the-greatest-quotes.html"
    if os.path.exists(ru_quotes_page):
        with open(ru_quotes_page, "r", encoding="utf-8") as f:
            content = f.read()

        new_content = content.replace("greatestquotes.png", "thegreatestquotes.png")
        if new_content != content:
            with open(ru_quotes_page, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"✓ Corrected image reference in {ru_quotes_page}")
            corrected_count += 1

    print(f"Correction completed! Total files modified: {corrected_count}")

if __name__ == "__main__":
    correct_mistakes()
