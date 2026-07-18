import os
import re

HTML_FILES_WITH_BOLD = [
    "events/sessions/is-bad-weather-gods-anger.html",
    "events/sessions/do-insects-hide-when-it-rains.html",
    "events/sessions/ugly-produce-anti-waste.html",
    "events/sessions/whether-raindrops-select-where-to-fall.html",
    "events/sessions/feeling-empty-after-series.html",
    "events/sessions/death-of-the-album.html",
    "events/sessions/always-watched-in-a-crowd.html",
    "events/sessions/why-is-everyone-copying-me.html",
    "events/fr/sessions/ugly-produce-anti-waste.html",
    "events/fr/sessions/feeling-empty-after-series.html",
    "events/fr/sessions/death-of-the-album.html"
]

FILES_WITH_2_MISTAKES = [
    ("events/sessions/is-bad-weather-gods-anger.html", "en"),
    ("events/sessions/do-insects-hide-when-it-rains.html", "en"),
    ("events/sessions/ugly-produce-anti-waste.html", "en"),
    ("events/sessions/feeling-empty-after-series.html", "en"),
    ("events/sessions/death-of-the-album.html", "en"),
    ("events/sessions/always-watched-in-a-crowd.html", "en"),
    ("events/sessions/why-is-everyone-copying-me.html", "en"),
    ("events/fr/sessions/ugly-produce-anti-waste.html", "fr"),
    ("events/fr/sessions/feeling-empty-after-series.html", "fr"),
    ("events/fr/sessions/death-of-the-album.html", "fr")
]

MISTAKE_EN = """          <div class="mistake-item">
            <span class="mistake-wrong">We discussed <span class="mistake-highlight">about</span> the topic.</span>
            <span class="mistake-arrow">→</span>
            <span class="mistake-right">We discussed the topic.</span>
            <span class="mistake-note-text">(Do not use 'about' after the transitive verb 'discuss'.)</span>
          </div>"""

MISTAKE_FR = """          <div class="mistake-item">
            <span class="mistake-wrong">Je vais <span class="mistake-highlight">visiter</span> mon ami.</span>
            <span class="mistake-arrow">→</span>
            <span class="mistake-right">Je vais rendre visite à mon ami.</span>
            <span class="mistake-note-text">(Utilisez 'rendre visite à' pour les personnes, 'visiter' pour les lieux.)</span>
          </div>"""

def replace_markdown_bold():
    print("--- Replacing Markdown Bold Syntax ---")
    for filepath in HTML_FILES_WITH_BOLD:
        if not os.path.exists(filepath):
            continue
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Regex to match **text** and replace with <strong>text</strong>
        # Supporting spaces, apostrophes, accents, and punctuation
        new_content, count = re.subn(r'\*\*([a-zA-ZÀ-ÿ\s\-\'\’\?\!\.\,]+)\*\*', r'<strong>\1</strong>', content)
        if count > 0:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"✔️ Replaced {count} occurrences of ** in {filepath}")

def split_round_item_insects():
    print("--- Splitting Round 1 Item in Insects Session ---")
    filepath = "events/sessions/do-insects-hide-when-it-rains.html"
    if not os.path.exists(filepath):
        return

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Locate the target first round-item in round-1 body
    old_block = """          <div class="round-item">
            <div class="round-item-main">When bad weather hits, is it our natural <strong>instinct</strong> to immediately <strong>evacuate</strong> our plans, or do we enjoy the unexpected shift?</div>
            <div class="round-item-personal">★ Have you ever had to evacuate an outdoor event or a romantic date due to a sudden storm?</div>
          </div>"""

    new_block = """          <div class="round-item">
            <div class="round-item-main">When bad weather hits, is it our natural <strong>instinct</strong> to seek comfort, or do we enjoy the unexpected shift?</div>
            <div class="round-item-personal">★ Have you ever followed a sudden gut instinct during a storm?</div>
          </div>
          <div class="round-item">
            <div class="round-item-main">How do you decide when to immediately <strong>evacuate</strong> your plans during an unexpected outdoor deluge?</div>
            <div class="round-item-personal">★ Have you ever had to evacuate an outdoor event or a romantic date due to a sudden storm?</div>
          </div>"""

    if old_block in content:
        content = content.replace(old_block, new_block)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print("⚡ Split first round-item in insects session.")
    else:
        # Fallback with simpler regex if exact formatting varies
        pattern = r'<div class="round-item">\s*<div class="round-item-main">When bad weather hits.*?Have you ever had to evacuate.*?</div>\s*</div>'
        content, count = re.subn(pattern, new_block, content, flags=re.DOTALL)
        if count > 0:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            print("⚡ Split first round-item in insects session (regex).")
        else:
            print("⚠️ Warning: Could not find first round-item to split in insects session!")

def add_third_mistake():
    print("--- Appending 3rd Mistake Item ---")
    for filepath, lang in FILES_WITH_2_MISTAKES:
        if not os.path.exists(filepath):
            continue

        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Count mistake items
        mistake_matches = list(re.finditer(r'<div class="mistake-item">', content))
        if len(mistake_matches) != 2:
            print(f"ℹ️ {filepath} already has {len(mistake_matches)} mistake items. Skipping.")
            continue

        # Find the closing tag </div> of the second mistake-item
        # Let's locate the second mistake-item block
        second_idx = mistake_matches[1].start()
        # Find the next </div> following the last elements inside second mistake-item
        # A mistake item looks like:
        # <div class="mistake-item">
        #   ...
        # </div>
        # We search for the first </div> that closes this mistake-item
        end_idx = content.find("</div>", second_idx)
        # We need to find the actual outer closing tag </div>
        # Since it contains other <span> and no nested <div>, the first </div> after second_idx is the outer closing </div>!
        if end_idx != -1:
            closing_tag_end = end_idx + 6
            # Insert the third mistake-item right after the second mistake-item
            added_mistake = MISTAKE_EN if lang == "en" else MISTAKE_FR
            new_content = content[:closing_tag_end] + "\n" + added_mistake + content[closing_tag_end:]
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"➕ Added 3rd mistake item to {filepath}")

def remove_hardcoded_numbering():
    print("--- Removing Hardcoded Numbering ---")
    files_to_clean = [
        "events/fr/sessions/la-sagesse-de-socrate.html",
        "events/fr/sessions/la-semaine-de-4-jours.html"
    ]
    for filepath in files_to_clean:
        if not os.path.exists(filepath):
            continue

        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Match '<div class="round-item-main">1. ' or '<div class="round-item-main">10. ' and strip the number
        new_content, count1 = re.subn(
            r'(<div class="round-item-main">|<div class="round-item">)\s*\d+\.\s*',
            r'\1',
            content
        )
        # Also clean lists if numbered '1. ' inside list items (though usually it's round-item-main)
        new_content, count2 = re.subn(
            r'<li>\s*\d+\.\s*',
            r'<li>',
            new_content
        )

        total_cleaned = count1 + count2
        if total_cleaned > 0:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"🧹 Cleaned {total_cleaned} hardcoded numbering patterns in {filepath}")

if __name__ == "__main__":
    replace_markdown_bold()
    split_round_item_insects()
    add_third_mistake()
    remove_hardcoded_numbering()
    print("Done!")
