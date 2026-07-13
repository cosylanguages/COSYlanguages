import os
import re
from bs4 import BeautifulSoup

# Standard theme list from THEMES.md & CONTENT_ARCHITECTURE.md
VALID_THEMES = {
    "animals", "body", "clothes", "colours", "describing", "emotions", "environment",
    "food_drink", "furniture", "health_medicine", "jobs", "language", "music", "nature",
    "numbers", "people", "places", "school", "shopping", "social", "sports", "technology",
    "time", "travel", "work", "art_culture", "psychology"
}

VALID_LEVELS = {"starter", "elementary", "intermediate", "upper_intermediate", "advanced", "proficiency"}
VALID_LANGS = {"en", "fr", "it", "ru", "el", "es", "de", "pt", "hy", "ka", "tt", "ba", "br"}

REDUN_SCRIPTS = {"pricing.js", "config.js"}

def check_vocab_files():
    print("--- Auditing Vocabulary Files ---")
    vocab_dir = "vocabulary"
    errors = 0
    warnings = 0

    for root, dirs, files in os.walk(vocab_dir):
        # Skip _schema folder
        if "_schema" in root:
            continue

        for file in files:
            if not file.endswith(".js"):
                continue

            filepath = os.path.join(root, file)

            # Read content
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            # Extract folder parameters
            parts = filepath.split(os.sep)
            if len(parts) >= 4:
                folder_lang = parts[1]
                folder_cefr = parts[2] # e.g. A1, A2
            else:
                continue

            # 1. IIFE check
            if not content.strip().startswith("(function()") or not content.strip().endswith("})();"):
                # We can warn or print but since comments are okay, let's count only when wrapper is physically absent
                if "function()" not in content or "window.vocabularyData" not in content:
                    print(f"❌ {filepath}: Missing or invalid IIFE wrapper.")
                    errors += 1

            # 2. const lang = "[lang]" declaration
            lang_match = re.search(r'const lang\s*=\s*"([^"]+)"', content)
            if not lang_match:
                lang_match = re.search(r"const lang\s*=\s*'([^']+)'", content)

            if not lang_match:
                print(f"❌ {filepath}: Missing local 'const lang = ...' declaration.")
                errors += 1
            else:
                lang_val = lang_match.group(1)
                if lang_val != folder_lang:
                    print(f"❌ {filepath}: Local lang variable '{lang_val}' doesn't match folder lang '{folder_lang}'.")
                    errors += 1

            # 3. Check for assignment
            # Regular vocabulary files assign to window.vocabularyData[lang]
            # Grammar/Speaking files assign to grammarData/speakingData
            has_vocab_assign = "window.vocabularyData" in content
            has_grammar_assign = "window.grammarData" in content
            has_speaking_assign = "window.speakingData" in content

            if not (has_vocab_assign or has_grammar_assign or has_speaking_assign):
                print(f"❌ {filepath}: No standard window assignment found (vocabularyData, grammarData, speakingData).")
                errors += 1

            # 4. Check individual records using simplified JS parsing (regex)
            # Find all json-like blocks
            records = re.findall(r'\{\s*"id":\s*"[^"]+".*?\}', content, re.DOTALL)
            for record_str in records:
                # Basic key parsing
                # opposite field
                if '"opposite"' in record_str:
                    # check if opposite is not null or contains a non-null string value
                    opp_match = re.search(r'"opposite"\s*:\s*(null|"[^"]*"|\'[^\']*\')', record_str)
                    if opp_match and opp_match.group(1) != "null":
                        print(f"❌ {filepath}: Contains legacy non-null 'opposite' field instead of 'antonyms' array: {opp_match.group(0)}")
                        errors += 1

                # id field
                id_match = re.search(r'"id"\s*:\s*"([^"]+)"', record_str)
                if id_match:
                    item_id = id_match.group(1)
                    id_parts = item_id.split("_")
                    if len(id_parts) < 4:
                        print(f"❌ {filepath}: Invalid word ID format '{item_id}'. Expected '{{lang}}_{{level}}_{{theme}}_{{seq}}'")
                        errors += 1
                    else:
                        lang_id = id_parts[0]
                        level_id = id_parts[1]
                        if level_id == "upper":
                            level_id = "upper_intermediate"
                            theme_id = "_".join(id_parts[3:-1])
                        else:
                            theme_id = "_".join(id_parts[2:-1])

                        if lang_id != folder_lang:
                            print(f"❌ {filepath}: Word ID '{item_id}' has lang '{lang_id}', expected '{folder_lang}'")
                            errors += 1
                        if level_id not in VALID_LEVELS:
                            print(f"❌ {filepath}: Word ID '{item_id}' has invalid level ID '{level_id}'")
                            errors += 1

                # theme suffix check
                theme_match = re.search(r'"theme"\s*:\s*"([^"]+)"', record_str)
                if theme_match:
                    theme_val = theme_match.group(1)
                    if theme_val not in VALID_THEMES:
                        print(f"❌ {filepath}: Invalid theme slug '{theme_val}'.")
                        errors += 1
                    if any(theme_val.endswith(f"_{l}") for l in ["A1", "A2", "B1", "B2", "C1", "C2"]):
                        print(f"❌ {filepath}: Theme slug '{theme_val}' contains level suffix.")
                        errors += 1

                # image / imageUrl fields
                if '"image"' in record_str or '"imageUrl"' in record_str:
                    print(f"❌ {filepath}: Contains forbidden 'image' or 'imageUrl' field.")
                    errors += 1

    print(f"Vocabulary check completed: {errors} errors, {warnings} warnings.")
    return errors, warnings

def check_speaking_club_sessions():
    print("\n--- Auditing Speaking Club Sessions ---")
    errors = 0
    warnings = 0

    session_dirs = [
        ("events/sessions", 3),
        ("events/fr/sessions", 4),
        ("events/ru/sessions", 4)
    ]

    for s_dir, depth in session_dirs:
        if not os.path.exists(s_dir):
            continue

        for file in os.listdir(s_dir):
            if not file.endswith(".html") or file.startswith("template"):
                continue

            filepath = os.path.join(s_dir, file)
            with open(filepath, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            # 1. Check description length before vocabulary section
            description_text = ""
            vocab_section = soup.find(id="vocabulary")
            if vocab_section:
                # Gather all text before the vocabulary section
                prev_siblings = vocab_section.find_previous_siblings()
                # Reverse them to follow document order
                prev_siblings.reverse()
                for sibling in prev_siblings:
                    # Ignore nav, header, breadcrumbs, script
                    if sibling.name not in ["nav", "header", "script"]:
                        description_text += " " + sibling.get_text()
            else:
                print(f"❌ {filepath}: Missing <section id='vocabulary'>")
                errors += 1

            sentences = re.split(r'(?<=[.!?])\s+', description_text.strip())
            sentences = [s for s in sentences if len(s.strip()) > 5]
            if len(sentences) < 3:
                print(f"❌ {filepath}: Session description has only {len(sentences)} sentences (minimum 3 required).")
                errors += 1

            # 2. Section Headers must not display counts
            for header in soup.find_all(["h1", "h2", "h3", "h4", "h5", "h6"]):
                header_text = header.get_text()
                if re.search(r'\b10\s+(words|vocabulary|questions|items)\b', header_text, re.IGNORECASE):
                    print(f"❌ {filepath}: Header '{header_text}' displays count.")
                    errors += 1

            # 3. Exclude redundant site-wide scripts
            for script in soup.find_all("script", src=True):
                src = script["src"]
                for bad in REDUN_SCRIPTS:
                    if bad in src:
                        print(f"❌ {filepath}: Contains redundant script '{bad}' in src '{src}'.")
                        errors += 1

            # 4. Relative path for assets adjusted for depth
            expected_prefix = "../../" if depth == 3 else "../../../"

            # Check favicon
            favicon = soup.find("link", rel="icon")
            if favicon and favicon.get("href"):
                href = favicon["href"]
                if expected_prefix not in href:
                    print(f"❌ {filepath}: Favicon href '{href}' does not match expected depth prefix '{expected_prefix}'.")
                    errors += 1

            # Check css files
            for link in soup.find_all("link", rel="stylesheet"):
                if link.get("href"):
                    href = link["href"]
                    if not href.startswith("http") and expected_prefix not in href:
                        print(f"❌ {filepath}: CSS href '{href}' does not match expected depth prefix '{expected_prefix}'.")
                        errors += 1

            # 5. Vocabulary elements: check .vocab-grid-10
            vocab_grid = soup.find(class_="vocab-grid-10")
            if not vocab_grid:
                print(f"❌ {filepath}: Missing '.vocab-grid-10' container.")
                errors += 1
            else:
                cards = vocab_grid.find_all(class_="vocab-card")
                if len(cards) != 10:
                    print(f"❌ {filepath}: Has {len(cards)} vocabulary cards instead of exactly 10.")
                    errors += 1

                for idx, card in enumerate(cards):
                    v_def = card.find(class_="vocab-def")
                    v_ex = card.find(class_="vocab-example")

                    if v_def:
                        def_text = v_def.get_text().strip()
                        if not def_text.endswith("."):
                            print(f"❌ {filepath}: Vocabulary {idx+1} definition does not end with a period: '{def_text}'")
                            errors += 1

                    if v_ex:
                        ex_text = v_ex.get_text().strip()
                        if not ex_text.endswith("."):
                            print(f"❌ {filepath}: Vocabulary {idx+1} example does not end with a period: '{ex_text}'")
                            errors += 1
                        if "Example:" in ex_text:
                            print(f"❌ {filepath}: Vocabulary {idx+1} example inner text contains forbidden 'Example:' prefix.")
                            errors += 1

            # 6. Check Rounds structure (R1 and R2 must have 10 items)
            round_1 = soup.find(class_="round-1")
            round_2 = soup.find(class_="round-2")

            if round_1:
                items = round_1.find_all(class_="round-item")
                if len(items) != 10:
                    items_li = round_1.find_all("li")
                    if len(items_li) == 10:
                        items = items_li
                    else:
                        print(f"❌ {filepath}: Round 1 has {max(len(items), len(items_li))} items instead of exactly 10.")
                        errors += 1

                # Check for hardcoded numbering
                for idx, item in enumerate(items):
                    item_text = item.get_text().strip()
                    if re.match(r'^\d+\.?\s+', item_text):
                        print(f"❌ {filepath}: Round 1 item {idx+1} contains hardcoded numbering: '{item_text}'")
                        errors += 1
                    if "**" in item_text:
                        print(f"❌ {filepath}: Round 1 item {idx+1} contains Markdown bold syntax '**'. Use <strong> instead.")
                        errors += 1

            if round_2:
                items = round_2.find_all(class_="round-item")
                if len(items) != 10:
                    items_li = round_2.find_all("li")
                    if len(items_li) == 10:
                        items = items_li
                    else:
                        print(f"❌ {filepath}: Round 2 has {max(len(items), len(items_li))} items instead of exactly 10.")
                        errors += 1

                for idx, item in enumerate(items):
                    item_text = item.get_text().strip()
                    if re.match(r'^\d+\.?\s+', item_text):
                        print(f"❌ {filepath}: Round 2 item {idx+1} contains hardcoded numbering: '{item_text}'")
                        errors += 1
                    if "**" in item_text:
                        print(f"❌ {filepath}: Round 2 item {idx+1} contains Markdown bold syntax '**'. Use <strong> instead.")
                        errors += 1

            # 7. Style tags: individual files must not contain style blocks or inline style attributes
            style_tags = soup.find_all("style")
            if style_tags:
                print(f"❌ {filepath}: Contains internal <style> block.")
                errors += 1

            # Check inline styles on standard blocks
            for tag in soup.find_all(style=True):
                style_attr = tag["style"]
                if tag.name in ["main", "section", "div"] and tag.get("class") and any(c in tag.get("class") for c in ["vocab-card", "round-block", "round-item", "mistake-block"]):
                    print(f"❌ {filepath}: Tag {tag.name} with class {tag.get('class')} has inline style '{style_attr}' (centralize in css).")
                    errors += 1

            # 8. Linguistic corrections section
            mistakes_block = soup.find(id="s-mistakes") or soup.find(class_="mistake-block")
            if not mistakes_block:
                print(f"❌ {filepath}: Missing Linguistic Corrections block.")
                errors += 1
            else:
                # Title check
                header = mistakes_block.find(class_="mistake-header")
                if header:
                    header_text = header.get_text().strip()
                    # Localized versions are acceptable, so we check if standard phrase or typical French/Russian translations are used
                    valid_correction_headers = [
                        "Teacher's Note (Linguistic Corrections)",
                        "Note de l'enseignant (Corrections linguistiques)",
                        "Note du professeur (Corrections linguistiques)",
                        "Note du professeur (corrections linguistiques)",
                        "Заметки преподавателя (Исправление ошибок)"
                    ]
                    if not any(v in header_text for v in valid_correction_headers):
                        print(f"❌ {filepath}: Linguistic Corrections block title should be 'Teacher's Note (Linguistic Corrections)', found '{header_text}'")
                        errors += 1

                # 3-5 mistake-item blocks
                items = mistakes_block.find_all(class_="mistake-item")
                if not (3 <= len(items) <= 5):
                    if "template" not in filepath:
                        print(f"❌ {filepath}: Has {len(items)} mistake items (expected 3-5).")
                        errors += 1

                for idx, item in enumerate(items):
                    wrong = item.find(class_="mistake-wrong")
                    arrow = item.find(class_="mistake-arrow") or (item.find_all("span") and any("→" in s.get_text() or "&rarr;" in s.get_text() for s in item.find_all("span")))
                    right = item.find(class_="mistake-right")
                    note = item.find(class_="mistake-note-text")

                    if not (wrong and right):
                        print(f"❌ {filepath}: Mistake item {idx+1} is missing wrong or right class.")
                        errors += 1

    print(f"Speaking club sessions check completed: {errors} errors, {warnings} warnings.")
    return errors, warnings

if __name__ == "__main__":
    v_errors, v_warns = check_vocab_files()
    s_errors, s_warns = check_speaking_club_sessions()

    total_errors = v_errors + s_errors
    print(f"\nTotal Errors Found: {total_errors}")
    if total_errors > 0:
        exit(1)
    else:
        print("🎉 SUCCESS! No structural errors found.")
