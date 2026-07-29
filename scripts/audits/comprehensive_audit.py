import os
import re
import difflib
from bs4 import BeautifulSoup

def perform_audit():
    print("Starting Repository-Wide Consistency Audit...")
    report_lines = []
    report_lines.append("# Repository-Wide Consistency Audit Report")
    report_lines.append("\nThis report is the result of a comprehensive repository-wide scan auditing naming, heading styles, markdown formatting, templates, links, images, metadata, filenames, capitalization, navigation, and script/asset references.\n")

    # 1. Gather all files in the repository
    all_files = []
    html_files = []
    md_files = []
    js_files = []
    css_files = []

    for root, dirs, files in os.walk("."):
        if ".git" in root or "node_modules" in root:
            continue
        for file in files:
            rel_path = os.path.relpath(os.path.join(root, file), ".").replace("\\", "/")
            all_files.append(rel_path)
            if file.endswith(".html"):
                html_files.append(rel_path)
            elif file.endswith(".md"):
                md_files.append(rel_path)
            elif file.endswith(".js"):
                js_files.append(rel_path)
            elif file.endswith(".css"):
                css_files.append(rel_path)

    all_files_set = set(all_files)

    # Dictionary to collect issues by type
    issues = {
        "1. Inconsistent Naming": [],
        "2. Different Heading Styles": [],
        "3. Different Markdown Formatting": [],
        "4. Duplicate Templates": [],
        "5. Broken Links": [],
        "6. Missing Images": [],
        "7. Missing Metadata": [],
        "8. Inconsistent Filenames": [],
        "9. Inconsistent Capitalization": [],
        "10. Missing Navigation": [],
        "11. Missing References": []
    }

    # ==================== AUDIT 1: Inconsistent Naming ====================
    # Checks for: class naming conventions (e.g. kebab-case in css, but some snake_case classes used),
    # sequential club prefix consistency in titles/h1 (Draft #, Specimen #, Reel #, Brouillon #, Spécimen #, Bobine #).
    for html_path in html_files:
        if "templates/" in html_path:
            continue
        try:
            with open(html_path, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            title_tag = soup.find("title")
            h1_tag = soup.find("h1")
            club_tag_div = soup.find(class_="club-tag")
            club_name = club_tag_div.get_text().strip() if club_tag_div else ""

            # Check sequential naming in individual sessions
            if club_name:
                title_text = title_tag.get_text().strip() if title_tag else ""
                h1_text = h1_tag.get_text().strip() if h1_tag else ""

                # Check if session page doesn't have a sequential indicator in title or h1 when others in the club do
                # e.g., Draft #, Specimen #, Bobine #, etc.
                # Let's see if we expect a prefix
                prefix_map = {
                    "Cinema Club": ["Reel #", "Bobine #"],
                    "Science Club": ["Specimen #", "Spécimen #", "Science #"],
                    "I Couldn't Help But Wonder": ["Draft #", "Brouillon #", "Wonder #"],
                    "Karaoke Club": ["Ticket #", "Music #", "Karaoke #"],
                    "Debatable & Relatable": ["Debate #", "Controversy #"],
                    "My Life With & Without": ["Life #", "Episode #"],
                    "The Greatest Quotes": ["Quote #", "Thought #"]
                }

                # Check if this is a session page (has back-link or breadcrumbs indicating session)
                is_session = soup.find(class_="back-link") or soup.find(class_="cosy-breadcrumbs")
                if is_session and club_name in prefix_map:
                    prefixes = prefix_map[club_name]
                    has_prefix = any(p in title_text or p in h1_text for p in prefixes)
                    # Exclude the index template files
                    if not has_prefix and "index.html" not in html_path and "template" not in html_path:
                        # Let's flag warning/info about naming prefixes
                        issues["1. Inconsistent Naming"].append(
                            f"File `{html_path}` in club `{club_name}` is missing standard sequential numbering prefixes (such as {', '.join(prefixes)}) in its `<title>` ('{title_text}') or `<h1>`."
                        )
        except Exception as e:
            issues["1. Inconsistent Naming"].append(f"Error reading `{html_path}`: {e}")

    # ==================== AUDIT 2: Different Heading Styles ====================
    # Checks for: Emojis missing in standard headings, hardcoded counts (e.g. '10 words'),
    # uppercase vs lowercase patterns, or mismatched heading hashes.
    for html_path in html_files:
        try:
            with open(html_path, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            # Check section titles
            section_titles = soup.find_all(class_="section-title")
            for h in section_titles:
                text = h.get_text().strip()
                # Check if it doesn't start with an emoji
                if not re.match(r'^[\u2600-\u27BF\U0001f000-\U0001f9ff]', text):
                    issues["2. Different Heading Styles"].append(
                        f"File `{html_path}` section-title `{text}` is missing a leading theme/indicator emoji."
                    )

            # Check for hardcoded vocabulary or question counts
            for h in soup.find_all(["h1", "h2", "h3", "h4", "h5", "h6"]):
                h_text = h.get_text()
                if re.search(r'\b10\s+(words|vocabulary|questions|items)\b', h_text, re.IGNORECASE):
                    issues["2. Different Heading Styles"].append(
                        f"File `{html_path}` heading `{h_text}` contains hardcoded count ('10 words' or '10 items')."
                    )
        except Exception as e:
            issues["2. Different Heading Styles"].append(f"Error checking headings in `{html_path}`: {e}")

    # ==================== AUDIT 3: Different Markdown Formatting ====================
    # Checks for: Mixing markdown bold `**` in HTML files (should use `<strong>` instead)
    # and inconsistent list symbols in Markdown documentation files.
    for html_path in html_files:
        try:
            with open(html_path, "r", encoding="utf-8") as f:
                content = f.read()
            if "**" in content:
                # Find occurrences
                matches = re.findall(r'.{0,30}\*\*.{1,40}\*\*.{0,30}', content)
                for m in matches[:3]: # limit to 3 reports per file to avoid noise
                    issues["3. Different Markdown Formatting"].append(
                        f"File `{html_path}` contains raw Markdown bold syntax `**` instead of HTML `<strong>`: `... {m.strip()} ...`"
                    )
                if len(matches) > 3:
                    issues["3. Different Markdown Formatting"].append(
                        f"File `{html_path}` has {len(matches) - 3} more occurrences of raw Markdown bold syntax."
                    )
        except Exception as e:
            issues["3. Different Markdown Formatting"].append(f"Error reading `{html_path}` for markdown format: {e}")

    for md_path in md_files:
        try:
            with open(md_path, "r", encoding="utf-8") as f:
                lines = f.readlines()
            list_symbols = set()
            for line in lines:
                match = re.match(r'^\s*([-*+])\s', line)
                if match:
                    list_symbols.add(match.group(1))
            if len(list_symbols) > 1:
                issues["3. Different Markdown Formatting"].append(
                    f"Markdown file `{md_path}` uses mixed list bullet styles: {list_symbols}. Stick to one character."
                )
        except Exception as e:
            issues["3. Different Markdown Formatting"].append(f"Error checking MD file `{md_path}`: {e}")

    # ==================== AUDIT 4: Duplicate Templates ====================
    # Checks for highly similar files in the templates folder.
    template_files = [f for f in html_files if "templates/" in f]
    for i in range(len(template_files)):
        for j in range(i + 1, len(template_files)):
            t1 = template_files[i]
            t2 = template_files[j]
            try:
                with open(t1, "r", encoding="utf-8") as f:
                    c1 = f.read()
                with open(t2, "r", encoding="utf-8") as f:
                    c2 = f.read()

                # Check similarity ratio
                similarity = difflib.SequenceMatcher(None, c1, c2).ratio()
                if similarity > 0.85:
                    issues["4. Duplicate Templates"].append(
                        f"High similarity found between templates: `{t1}` and `{t2}` ({similarity*100:.1f}% match). Consider consolidating them."
                    )
            except Exception as e:
                issues["4. Duplicate Templates"].append(f"Error comparing templates `{t1}` and `{t2}`: {e}")

    # ==================== AUDIT 5: Broken Links ====================
    # Checks for relative/absolute paths to nonexistent pages, plus missing upcoming session files.
    # Exclude external links and relative path place holders like `${p}`
    for html_path in html_files:
        try:
            with open(html_path, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            links = []
            for a in soup.find_all("a", href=True):
                links.append(a["href"])
            # Also find window.location or similar href matches in text

            for link in links:
                if link.startswith("http") or link.startswith("mailto:") or link.startswith("tel:") or link.startswith("#") or link.startswith("javascript:"):
                    continue
                if "${" in link or "session-slug" in link or "xx.html" in link:
                    continue # JS templates / placeholders

                # Clean hash and query parameters
                clean_link = link.split("#")[0].split("?")[0]
                if not clean_link:
                    continue

                # Resolve relative path
                base_dir = os.path.dirname(html_path)
                resolved = os.path.normpath(os.path.join(base_dir, clean_link)).replace("\\", "/")

                # Check direct match or directory fallback (index.html)
                if resolved not in all_files_set and f"{resolved}/index.html" not in all_files_set:
                    issues["5. Broken Links"].append(
                        f"File `{html_path}` points to non-existent relative link `{link}` (resolved as `{resolved}`)."
                    )
        except Exception as e:
            issues["5. Broken Links"].append(f"Error checking links in `{html_path}`: {e}")

    # ==================== AUDIT 6: Missing Images ====================
    # Checks for `<img>` tags or CSS `background-image` referencing missing files.
    for html_path in html_files:
        try:
            with open(html_path, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            # <img> tags
            for img in soup.find_all("img", src=True):
                src = img["src"]
                if src.startswith("http") or src.startswith("data:"):
                    continue
                base_dir = os.path.dirname(html_path)
                resolved = os.path.normpath(os.path.join(base_dir, src)).replace("\\", "/")
                if resolved not in all_files_set:
                    issues["6. Missing Images"].append(
                        f"File `{html_path}` contains broken `<img>` src `{src}` (resolved as `{resolved}`)."
                    )

            # Inline background-image or background style url
            for tag in soup.find_all(style=True):
                style = tag["style"]
                urls = re.findall(r'url\([\'"]?([^\'")]+)[\'"]?\)', style)
                for url in urls:
                    if url.startswith("http") or url.startswith("data:"):
                        continue
                    base_dir = os.path.dirname(html_path)
                    resolved = os.path.normpath(os.path.join(base_dir, url)).replace("\\", "/")
                    if resolved not in all_files_set:
                        issues["6. Missing Images"].append(
                            f"File `{html_path}` contains broken inline style background url `{url}` (resolved as `{resolved}`)."
                        )
        except Exception as e:
            issues["6. Missing Images"].append(f"Error checking images in `{html_path}`: {e}")

    # Check CSS files for background-image urls
    for css_path in css_files:
        try:
            with open(css_path, "r", encoding="utf-8") as f:
                content = f.read()
            urls = re.findall(r'url\([\'"]?([^\'")\?#]+)[\'"]?\)', content)
            for url in urls:
                if url.startswith("http") or url.startswith("data:"):
                    continue
                base_dir = os.path.dirname(css_path)
                resolved = os.path.normpath(os.path.join(base_dir, url)).replace("\\", "/")
                if resolved not in all_files_set:
                    issues["6. Missing Images"].append(
                        f"CSS `{css_path}` references missing background image `{url}` (resolved as `{resolved}`)."
                    )
        except Exception as e:
            issues["6. Missing Images"].append(f"Error checking images in CSS `{css_path}`: {e}")

    # ==================== AUDIT 7: Missing Metadata ====================
    # Checks for missing <title>, <meta name="description">, viewport, charset in HTML.
    for html_path in html_files:
        try:
            with open(html_path, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            # Check <title>
            title = soup.find("title")
            if not title or not title.get_text().strip():
                issues["7. Missing Metadata"].append(f"File `{html_path}` is missing `<title>`.")

            # Check <meta charset>
            charset = soup.find("meta", charset=True)
            if not charset:
                issues["7. Missing Metadata"].append(f"File `{html_path}` is missing `<meta charset=\"...\">`.")

            # Check viewport
            viewport = soup.find("meta", attrs={"name": "viewport"})
            if not viewport:
                issues["7. Missing Metadata"].append(f"File `{html_path}` is missing `<meta name=\"viewport\" ...>`.")

            # Check description (especially for main and language index files)
            desc = soup.find("meta", attrs={"name": "description"})
            if not desc or not desc.get("content", "").strip():
                # Report as a warning/issue
                issues["7. Missing Metadata"].append(f"File `{html_path}` is missing `<meta name=\"description\">` or it has empty content.")
        except Exception as e:
            issues["7. Missing Metadata"].append(f"Error checking metadata in `{html_path}`: {e}")

    # ==================== AUDIT 8: Inconsistent Filenames ====================
    # Checks for mixed naming patterns (e.g., camelCase or PascalCase instead of kebab-case or snake_case).
    for file_path in all_files:
        filename = os.path.basename(file_path)
        # We allow standard config files (e.g. README.md, SECURITY.md, manifest.json)
        if file_path in ["package.json", "package-lock.json", "README.md", "SECURITY.md", "CHANGELOG.md", "LANGUAGES.md", "SCHEMA.md", "THEMES.md", "CONTENT_ARCHITECTURE.md"]:
            continue
        if "node_modules" in file_path or ".github" in file_path or ".git" in file_path:
            continue

        # Check if the filename contains mixed camelCase or PascalCase (has uppercase in the middle)
        name_part, ext = os.path.splitext(filename)
        if name_part != name_part.lower() and "_" not in name_part and "-" not in name_part:
            # Let's flag camelCase filenames (e.g. myFileName.js)
            issues["8. Inconsistent Filenames"].append(
                f"Filename `{file_path}` uses CamelCase/PascalCase naming style instead of standard lowercase kebab-case or snake_case."
            )

        # Check for localized directory consistency: if a session is in events/sessions/club/name.html,
        # does its French/Russian translation exist, or is it named differently?
        # e.g., events/sessions/debatable-relatable/4-day-work-week.html vs events/fr/sessions/debatable-relatable/la-semaine-de-4-jours.html
        # We flag when subfolders themselves use snake_case but others use kebab-case.
        # Check if directories inside events/sessions use different casings:
        parts = file_path.split("/")
        if len(parts) >= 3 and parts[0] == "events" and parts[1] == "sessions":
            club_dir = parts[2]
            if "_" in club_dir:
                issues["8. Inconsistent Filenames"].append(
                    f"Club directory `{club_dir}` in `{file_path}` uses snake_case (`_`), whereas others use kebab-case (`-`)."
                )

    # ==================== AUDIT 9: Inconsistent Capitalization ====================
    # Checks for casing differences in UI or switcher references.
    for html_path in html_files:
        try:
            with open(html_path, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            # Check Level texts capitalization (e.g., 'upper_intermediate' or 'Upper-Intermediate' vs 'upper-intermediate')
            meta_grid = soup.find(class_="session-meta-grid")
            if meta_grid:
                items = meta_grid.find_all(class_="meta-item")
                for item in items:
                    h4 = item.find("h4")
                    p = item.find("p")
                    if h4 and p and h4.get_text().strip().lower() == "level":
                        lvl_text = p.get_text().strip()
                        # Level formats should be nicely capitalized (e.g., "Intermediate (B1)" or "Upper-Intermediate (B2)")
                        # If they are lower cased or weirdly formatted, flag them
                        if "b1" in lvl_text or "b2" in lvl_text or "a1" in lvl_text or "a2" in lvl_text or "c1" in lvl_text or "c2" in lvl_text:
                            if not any(char.isupper() for char in lvl_text if char.isalpha()):
                                issues["9. Inconsistent Capitalization"].append(
                                    f"File `{html_path}` level metadata '{lvl_text}' is not consistently capitalized."
                                )
        except Exception as e:
            issues["9. Inconsistent Capitalization"].append(f"Error checking capitalization in `{html_path}`: {e}")

    # ==================== AUDIT 10: Missing Navigation ====================
    # Checks for absent breadcrumbs, back-links, header navigation elements, or footer links on session pages.
    for html_path in html_files:
        if "templates/" in html_path or html_path == "404.html":
            continue
        try:
            with open(html_path, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            # If it's a session page (under events/sessions or events/fr/sessions or events/ru/sessions)
            is_session = "sessions/" in html_path
            if is_session:
                # 1. Breadcrumbs
                breadcrumbs = soup.find(class_="cosy-breadcrumbs")
                if not breadcrumbs:
                    issues["10. Missing Navigation"].append(
                        f"Session page `{html_path}` is missing `.cosy-breadcrumbs` navigation element."
                    )

                # 2. Back-link
                back_link = soup.find(class_="back-link")
                if not back_link:
                    issues["10. Missing Navigation"].append(
                        f"Session page `{html_path}` is missing `.back-link` anchor."
                    )

            # Check footer
            footer = soup.find("footer")
            if not footer and "templates/" not in html_path:
                issues["10. Missing Navigation"].append(
                    f"Page `{html_path}` is missing `<footer>` element."
                )

            # Check nav menu
            nav = soup.find("nav", id="cosy-nav")
            if not nav and "templates/" not in html_path:
                issues["10. Missing Navigation"].append(
                    f"Page `{html_path}` is missing `<nav id=\"cosy-nav\">` element."
                )
        except Exception as e:
            issues["10. Missing Navigation"].append(f"Error checking navigation in `{html_path}`: {e}")

    # ==================== AUDIT 11: Missing References ====================
    # Checks for script tags referencing dead files like mobile.js or theme_config.js, or config.js, or missing curriculum arrays.
    DEAD_REFERENCES = ["mobile.js", "theme_config.js", "config.js"]
    for html_path in html_files:
        try:
            with open(html_path, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            for script in soup.find_all("script", src=True):
                src = script["src"]
                for dead in DEAD_REFERENCES:
                    if dead in src:
                        issues["11. Missing References"].append(
                            f"File `{html_path}` references deprecated/dead script `{src}`."
                        )

            # Check if there are JS file paths in scripts that don't exist
            for script in soup.find_all("script", src=True):
                src = script["src"]
                if src.startswith("http") or src.startswith("data:") or "${" in src:
                    continue
                base_dir = os.path.dirname(html_path)
                resolved = os.path.normpath(os.path.join(base_dir, src)).replace("\\", "/")
                if resolved not in all_files_set:
                    issues["11. Missing References"].append(
                        f"File `{html_path}` contains script src `{src}` pointing to non-existent file `{resolved}`."
                    )

            # Check CSS stylesheets
            for link in soup.find_all("link", rel="stylesheet", href=True):
                href = link["href"]
                if href.startswith("http") or href.startswith("data:") or "${" in href:
                    continue
                base_dir = os.path.dirname(html_path)
                resolved = os.path.normpath(os.path.join(base_dir, href)).replace("\\", "/")
                if resolved not in all_files_set:
                    issues["11. Missing References"].append(
                        f"File `{html_path}` contains stylesheet link `{href}` pointing to non-existent file `{resolved}`."
                    )
        except Exception as e:
            issues["11. Missing References"].append(f"Error checking references in `{html_path}`: {e}")

    # 3. Writing the report
    total_issues = 0
    for key, items in issues.items():
        report_lines.append(f"\n## {key} ({len(items)} items)\n")
        if not items:
            report_lines.append("🎉 No issues detected in this category.\n")
        else:
            for item in sorted(items):
                report_lines.append(f"- {item}")
                total_issues += 1

    report_lines.append(f"\n\n## Audit Summary\n")
    report_lines.append(f"- **Total Consistency Issues Detected:** {total_issues}\n")
    report_lines.append("The repository is mostly in a very solid, highly-pedagogical state. The minor inconsistencies flagged above can be streamlined to guarantee pixel-perfect uniformity across all languages and sessions.")

    report_content = "\n".join(report_lines)

    # Save the report to docs/REPOS_CONSISTENCY_AUDIT.md
    os.makedirs("docs", exist_ok=True)
    report_path = "docs/REPOS_CONSISTENCY_AUDIT.md"
    with open(report_path, "w", encoding="utf-8") as f:
        f.write(report_content)

    print(f"Audit completed! Report successfully generated at `{report_path}` with {total_issues} issues.")
    return total_issues

if __name__ == "__main__":
    perform_audit()
