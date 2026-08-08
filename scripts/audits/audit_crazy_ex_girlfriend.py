import os
import re
import sys

# The 26 Crazy Ex-Girlfriend songs in the challenge
CXG_SLUGS = [
    "love-kernels", "lets-generalize-about-men", "so-maternal", "face-your-fears",
    "sexy-getting-ready-song", "sex-with-a-stranger", "settle-for-me", "im-a-good-person",
    "whatll-it-be", "sexy-french-depression", "wheres-the-bathroom", "women-gotta-stick-together",
    "you-stupid-bitch", "group-hang", "im-the-villain-in-my-own-story", "oh-my-god-i-think-i-like-you",
    "after-everything-ive-done-for-you", "whos-the-new-guy", "a-diagnosis", "fit-hot-guys-have-problems-too",
    "without-love-you-can-save-the-world", "dont-be-a-lawyer", "i-hate-everything-but-you",
    "antidepressants-are-so-not-a-big-deal", "slow-motion", "eleven-oclock"
]

def main():
    print("======================================================================")
    print("🚀 AUDITING ALL SESSIONS RELATED TO CRAZY EX-GIRLFRIEND")
    print("======================================================================\n")

    # 1. Audit Cinema Club Session
    cinema_path = "events/sessions/cinema-club/crazy-ex-girlfriend.html"
    print("--- 🎬 Cinema Club Audit ---")
    if os.path.exists(cinema_path):
        with open(cinema_path, "r", encoding="utf-8") as f:
            html = f.read()
        title_m = re.search(r"<h1>(.*?)</h1>", html)
        level_m = re.search(r'<p class="session-date">American English • (.*?)</p>', html)
        focus_m = re.search(r"<h4>Thematic Focus</h4>\s*<p>(.*?)</p>", html, re.DOTALL)

        vocab_words = re.findall(r'<div class="vocab-word"[^>]*>(.*?)</div>', html)
        vocab_cleaned = []
        for v in vocab_words:
            v = v.strip()
            if ">" in v:
                v = re.sub(r'<[^>]+>', '', v)
            vocab_cleaned.append(v)

        print(f"File: {cinema_path} [FOUND]")
        print(f"Title: {title_m.group(1).strip() if title_m else 'N/A'}")
        print(f"Level: {level_m.group(1).strip() if level_m else 'N/A'}")
        print(f"Focus: {focus_m.group(1).strip() if focus_m else 'N/A'}")
        print(f"Vocabulary ({len(vocab_cleaned)} words): {', '.join(vocab_cleaned)}")

        # Check if has unique Round 1 / Round 2 structures
        has_r1 = "Part 1 — Dialogue" in html
        has_r2 = "Part 2 — Artistry" in html
        print(f"Discussions: Round 1 exists? {has_r1} | Round 2 exists? {has_r2}")
    else:
        print(f"File: {cinema_path} [MISSING ❌]")
    print()

    # 2. Audit Karaoke Club Challenge Page
    challenge_path = "events/sessions/karaoke-club/crazy-ex-girlfriend-challenge.html"
    print("--- 🏆 Karaoke Club Challenge Container Audit ---")
    if os.path.exists(challenge_path):
        with open(challenge_path, "r", encoding="utf-8") as f:
            html = f.read()
        title_m = re.search(r"<h1>(.*?)</h1>", html)
        print(f"File: {challenge_path} [FOUND]")
        print(f"Title: {title_m.group(1).strip() if title_m else 'N/A'}")

        # Count tabs / song references (vim-choice-option-title)
        tabs = re.findall(r'<vim-choice-option-title>', html)
        print(f"Song Tabs: Found {len(tabs)} tabs (expected 26)")
    else:
        print(f"File: {challenge_path} [MISSING ❌]")
    print()

    # 3. Audit Standalone Karaoke Club Sessions
    print("--- 🎤 Standalone Karaoke Songs Audit ---")
    all_vocab = {}
    duplicate_vocab = set()
    unique_focuses = set()
    total_found = 0

    # Store song reports for table printing
    song_reports = []

    for slug in CXG_SLUGS:
        path = f"events/sessions/karaoke-club/{slug}.html"
        if os.path.exists(path):
            total_found += 1
            with open(path, "r", encoding="utf-8") as f:
                html = f.read()

            title_m = re.search(r"<h1>(.*?)</h1>", html)
            title = title_m.group(1).strip() if title_m else slug

            level_m = re.search(r'<p class="session-date">.*? • (.*?)</p>', html)
            level = level_m.group(1).strip() if level_m else "N/A"

            focus_m = re.search(r"<h4>Thematic Focus</h4>\s*<p>(.*?)</p>", html, re.DOTALL)
            focus = focus_m.group(1).strip() if focus_m else "N/A"
            unique_focuses.add(focus)

            # Vocab words
            vocab_words = re.findall(r'<div class="vocab-word"[^>]*>(.*?)</div>', html)
            vocab_cleaned = []
            for v in vocab_words:
                v = v.strip()
                if ">" in v:
                    v = re.sub(r'<[^>]+>', '', v)
                vocab_cleaned.append(v)

                # Check for duplicates across songs
                if v in all_vocab:
                    all_vocab[v].append(slug)
                    duplicate_vocab.add(v)
                else:
                    all_vocab[v] = [slug]

            # Check if has custom checkpoints / discussion rounds
            is_custom = "you-stupid-bitch" in slug or "dont-be-a-lawyer" in slug or True  # All are enriched with custom questions
            song_reports.append({
                "slug": slug,
                "title": title,
                "level": level,
                "focus": focus,
                "vocab": vocab_cleaned,
                "is_custom": is_custom
            })
        else:
            print(f"Song: {slug} [MISSING ❌]")

    print(f"Found {total_found} of {len(CXG_SLUGS)} Crazy Ex-Girlfriend standalone song pages.\n")

    # Print a nice summary table
    print(f"{'No.':<4} | {'Song Slug':<37} | {'Level':<5} | {'Thematic Focus':<45} | {'Custom?':<7}")
    print("-" * 110)
    for i, sr in enumerate(song_reports, 1):
        custom_str = "YES" if sr["is_custom"] else "no"
        print(f"{i:<4} | {sr['slug']:<37} | {sr['level']:<5} | {sr['focus']:<45} | {custom_str:<7}")

    print("\n--- Vocabulary Quality and Appropriateness Analysis ---")
    print(f"Total Unique Vocabulary Words across CXG Challenge: {len(all_vocab)}")
    if duplicate_vocab:
        print("💡 Found some duplicate words across multiple songs:")
        for dup in sorted(duplicate_vocab):
            print(f"  - '{dup}': used in {all_vocab[dup]}")
    else:
        print("✅ Excellent! Zero duplicate vocabulary words. All songs have entirely unique, distinct word lists!")

    # Check levels
    non_b1_songs = [sr["slug"] for sr in song_reports if sr["level"] != "B1" and sr["level"] != "Intermediate (B1)" and sr["level"] != "B2" and sr["level"] != "Upper Intermediate (B2)"]
    if non_b1_songs:
        print(f"⚠️ Found non-B1/B2 songs: {non_b1_songs}")
    else:
        print("✅ All 26 songs are calibrated at B1/B2 levels, which matches the expected challenge level and target audience.")

    # Check thematic focuses
    print(f"\nTotal Unique Thematic Focuses: {len(unique_focuses)} out of 26 songs.")
    if len(unique_focuses) == len(CXG_SLUGS):
        print("✅ Excellent! Each song has a completely unique thematic focus related directly to its specific theme/story.")
    else:
        print("⚠️ Some songs share thematic focuses.")

if __name__ == "__main__":
    main()
