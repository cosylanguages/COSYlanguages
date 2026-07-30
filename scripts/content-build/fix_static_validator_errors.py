import os
import re

# Directories containing session files
SESSION_DIRS = [
    "events/sessions/keeping-up-with-science",
    "events/sessions/lets-celebrate",
    "events/sessions/the-greatest-quotes",
    "events/sessions/mind-matters",
    "events/sessions/my-life-with-without",
    "events/sessions/debatable-relatable",
    "events/sessions/i-couldnt-help-but-wonder",
    "events/sessions/cinema-club",
    "events/fr/sessions/keeping-up-with-science",
    "events/fr/sessions/lets-celebrate",
    "events/fr/sessions/the-greatest-quotes",
    "events/fr/sessions/mind-matters",
    "events/fr/sessions/debatable-relatable",
    "events/fr/sessions/i-couldnt-help-but-wonder",
    "events/fr/sessions/cinema-club",
    "events/ru/sessions/lets-celebrate",
    "events/ru/sessions/the-greatest-quotes",
    "events/ru/sessions/mind-matters",
    "events/ru/sessions/debatable-relatable"
]

def fix_static_errors():
    print("🛠️ Starting Static Validator Error Cleaner...")
    bold_fixes = 0
    style_fixes = 0

    for s_dir in SESSION_DIRS:
        if not os.path.exists(s_dir):
            continue

        for root, dirs, files in os.walk(s_dir):
            for file in files:
                if not file.endswith(".html") or file.startswith("template"):
                    continue

                filepath = os.path.join(root, file)

                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()

                original_content = content

                # 1. Regex to replace Markdown bolds '**word**' with '<strong>word</strong>'
                # Find occurrences of **text** where text does not contain asterisks or HTML tags
                def replace_markdown_bold(match):
                    text = match.group(1)
                    return f"<strong>{text}</strong>"

                # Standard non-greedy bold match: **text**
                content = re.sub(r'\*\*(.*?)\*\*', replace_markdown_bold, content)

                # 2. Strip inline margin styles on round-block divs
                # Example: <div class="round-block grammar open" id="s-grammar" style="margin-bottom: 2rem;">
                # We want to replace it with: <div class="round-block grammar open" id="s-grammar">
                # Or class order can vary, so match class="round-block..." and style="margin-bottom: 2rem;"
                # Since we want to strip the style attribute specifically from round-blocks

                # Regex match for round-block with style="margin-bottom: 2rem;"
                # Handles class name variations and attribute order
                pattern_style1 = r'(<div[^>]*class="[^"]*round-block[^"]*"[^>]*)\s+style="margin-bottom:\s*2rem;"'
                pattern_style2 = r'(<div[^>]*)\s+style="margin-bottom:\s*2rem;"([^>]*class="[^"]*round-block[^"]*")'

                content = re.sub(pattern_style1, r'\1', content)
                content = re.sub(pattern_style2, r'\1\2', content)

                # Track fixes
                if content != original_content:
                    if "**" in original_content:
                        bold_fixes += 1
                    if "margin-bottom: 2rem;" in original_content:
                        style_fixes += 1

                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(content)

    print(f"🎉 Cleanup completed successfully!")
    print(f"✨ Session files with Markdown bold fixed: {bold_fixes}")
    print(f"✨ Session files with inline styles stripped: {style_fixes}")

if __name__ == "__main__":
    fix_static_errors()
