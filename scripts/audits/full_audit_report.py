import os
import re
from bs4 import BeautifulSoup

def clean_str(s):
    if not s:
        return ""
    # Remove emojis, arrows, and extra whitespace
    s = s.replace("▲", "").replace("▼", "").strip()
    return s

def identify_language(filepath):
    parts = filepath.split(os.sep)
    if "fr" in parts:
        return "fr"
    elif "ru" in parts:
        return "ru"
    return "en"

def analyze_all_sessions():
    session_dirs = [
        "events/sessions",
        "events/fr/sessions",
        "events/ru/sessions"
    ]

    all_sessions = []

    for s_dir in session_dirs:
        if not os.path.exists(s_dir):
            continue

        for root, dirs, files in os.walk(s_dir):
            for file in files:
                if not file.endswith(".html") or file.startswith("template"):
                    continue

                filepath = os.path.join(root, file)
                lang = identify_language(filepath)

                with open(filepath, "r", encoding="utf-8") as f:
                    soup = BeautifulSoup(f, "html.parser")

                # Club Tag and Title
                club_tag_div = soup.find(class_="club-tag")
                club_tag = club_tag_div.get_text().strip() if club_tag_div else "MISSING"

                title_h1 = soup.find("h1")
                title = title_h1.get_text().strip() if title_h1 else "MISSING"

                # Vocabulary Section
                vocab_section = soup.find(id="vocabulary")
                vocab_present = vocab_section is not None
                vocab_count = len(vocab_section.find_all(class_="vocab-card")) if vocab_present else 0

                # Rounds
                round_blocks = soup.find_all(class_="round-block")
                rounds = []
                for rb in round_blocks:
                    hdr = rb.find(class_="round-header")
                    hdr_text = clean_str(hdr.get_text()) if hdr else "MISSING"
                    classes = rb.get("class", [])

                    # Count items
                    items_main = rb.find_all(class_="round-item-main")
                    items_li = rb.find_all("li")
                    items_count = max(len(items_main), len(items_li))

                    # Check MD bold
                    has_md_bold = "**" in rb.get_text()

                    rounds.append({
                        "header": hdr_text,
                        "classes": classes,
                        "items_count": items_count,
                        "has_md_bold": has_md_bold
                    })

                # Mistakes Block
                mistake_block = soup.find(id="s-mistakes") or soup.find(class_="mistake-block")
                mistakes_present = mistake_block is not None
                mistakes_count = 0
                mistake_hdr_text = "MISSING"
                if mistakes_present:
                    mistake_hdr = mistake_block.find(class_="mistake-header")
                    mistake_hdr_text = clean_str(mistake_hdr.get_text()) if mistake_hdr else "MISSING"
                    mistakes_count = len(mistake_block.find_all(class_="mistake-item"))

                # Inline Styles
                inline_styles = []
                for tag in soup.find_all(style=True):
                    classes = tag.get("class", [])
                    if tag.name in ["main", "section", "div"] and classes and any(c in classes for c in ["vocab-card", "round-block", "round-item", "mistake-block"]):
                        inline_styles.append((tag.name, classes, tag["style"]))

                all_sessions.append({
                    "filepath": os.path.relpath(filepath),
                    "lang": lang,
                    "club_tag": club_tag,
                    "title": title,
                    "vocab_present": vocab_present,
                    "vocab_count": vocab_count,
                    "rounds": rounds,
                    "mistakes_present": mistakes_present,
                    "mistakes_count": mistakes_count,
                    "mistake_header": mistake_hdr_text,
                    "inline_styles": inline_styles
                })

    return all_sessions

def generate_report():
    sessions = analyze_all_sessions()

    # We want to identify the implicit template per (club_tag, lang)
    # Group sessions by (club_tag, lang)
    groups = {}
    for s in sessions:
        key = (s["club_tag"], s["lang"])
        groups.setdefault(key, []).append(s)

    for (club, lang) in sorted(groups.keys()):
        club_sessions = groups[(club, lang)]
        print(f"\n==========================================================================")
        print(f"EVENT: {club} | LANGUAGE: {lang.upper()} | Total Sessions: {len(club_sessions)}")
        print(f"==========================================================================")

        # Let's see the most common round/mistake sequences
        structures = []
        for s in club_sessions:
            seq = [r["header"] for r in s["rounds"]]
            if s["mistakes_present"]:
                seq.append(s["mistake_header"])
            structures.append(tuple(seq))

        from collections import Counter
        ctr = Counter(structures)
        most_common_seq, mc_count = ctr.most_common(1)[0]

        print(f"Implicit Template (representing {mc_count}/{len(club_sessions)} sessions):")
        for i, h in enumerate(most_common_seq, 1):
            print(f"  {i}. {h}")

        print("\nAlternate structures found in this category:")
        for struct, count in ctr.items():
            if struct != most_common_seq:
                print(f"  - {struct} ({count} sessions)")

        # Deviations check
        print("\nDeviations:")
        has_deviations = False
        for s in club_sessions:
            reasons = []

            # 1. Structure Check
            seq = [r["header"] for r in s["rounds"]]
            if s["mistakes_present"]:
                seq.append(s["mistake_header"])
            if tuple(seq) != most_common_seq:
                reasons.append(f"Structure mismatch. Expected {list(most_common_seq)} but got {seq}")

            # 2. Missing Core Sections
            # All standard clubs should have Warm-up, Round 1, Let's Speak Together (or similar), Round 2, and Teacher's Notes
            # Let's check this based on classes
            has_warm = any("warm-up" in str(r["classes"]).lower() or "warm" in str(r["classes"]).lower() or "échauffement" in r["header"].lower() or "разминка" in r["header"].lower() for r in s["rounds"])
            has_r1 = any("round-1" in str(r["classes"]).lower() or "round-item" in str(r["classes"]).lower() or "round 1" in r["header"].lower() or "раунд 1" in r["header"].lower() for r in s["rounds"])
            has_lst = any("lst" in str(r["classes"]).lower() or "speak together" in r["header"].lower() or "parlons ensemble" in r["header"].lower() or "обсудим вместе" in r["header"].lower() or "cinema spotlight" in r["header"].lower() for r in s["rounds"])
            has_r2 = any("round-2" in str(r["classes"]).lower() or "round 2" in r["header"].lower() or "раунд 2" in r["header"].lower() for r in s["rounds"])

            missing = []
            if not has_warm: missing.append("Warm-up")
            if not has_r1: missing.append("Round 1")
            if not has_lst: missing.append("Let's Speak Together")
            if not has_r2: missing.append("Round 2")
            if not s["mistakes_present"]: missing.append("Teacher's Note / Linguistic Corrections")

            if missing:
                reasons.append(f"Missing core section(s): {missing}")

            # 3. Vocabulary check (exact count)
            # Karaoke and challenges are exceptions
            is_karaoke = "karaoke" in s["club_tag"].lower() or "challenge" in s["filepath"]
            if not is_karaoke:
                if s["vocab_count"] != 10:
                    reasons.append(f"Vocabulary count is {s['vocab_count']} (expected exactly 10)")
            else:
                if s["vocab_count"] < 1:
                    reasons.append(f"Karaoke session has no vocabulary cards")

            # 4. Teacher's notes check (exact items count)
            if s["mistakes_present"]:
                if "challenge" not in s["filepath"] and not (3 <= s["mistakes_count"] <= 5):
                    reasons.append(f"Teacher's Note has {s['mistakes_count']} mistake items (expected 3-5)")

            # 5. Markdown bold syntax check
            bold_rounds = [r["header"] for r in s["rounds"] if r["has_md_bold"]]
            if bold_rounds:
                reasons.append(f"Contains Markdown bold '**' syntax in rounds: {bold_rounds}")

            # 6. Inline Styles check
            if s["inline_styles"]:
                reasons.append(f"Contains inline styles on standard blocks: {s['inline_styles']}")

            if reasons:
                has_deviations = True
                print(f"  File: {s['filepath']} (Title: {s['title']})")
                for r in reasons:
                    print(f"    ❌ {r}")

        if not has_deviations:
            print("  🎉 PERFECT! Zero deviations found for this group.")

if __name__ == "__main__":
    generate_report()
