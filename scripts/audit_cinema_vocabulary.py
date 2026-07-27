import os
import re
from bs4 import BeautifulSoup

def audit_cinema_vocab():
    sessions_dir = "events/sessions/cinema-club"
    if not os.path.exists(sessions_dir):
        print(f"Directory {sessions_dir} does not exist.")
        return

    files = [f for f in os.listdir(sessions_dir) if f.endswith(".html")]
    print(f"Auditing {len(files)} Cinema Club sessions...")

    fallback_set = {
        "cinematography", "narrative pacing", "character arc", "visual motifs", "climax",
        "protagonist", "antagonist", "screenplay", "dialogue", "thematic depth",
        "opening scene", "pivotal moment", "dramatic irony", "cinematic adaptation", "fourth-wall break",
        "mise-en-scène", "subtext", "monologue", "tone marker", "genre convention"
    }

    results = []

    for file in sorted(files):
        filepath = os.path.join(sessions_dir, file)
        with open(filepath, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")

        title_tag = soup.find("h1")
        title = title_tag.get_text().strip() if title_tag else file

        vocab_cards = soup.find_all(class_="vocab-word")
        vocab_words = [v.get_text().strip() for v in vocab_cards]

        duplicates = []
        seen = set()
        for w in vocab_words:
            w_norm = w.lower()
            if w_norm in seen:
                duplicates.append(w)
            seen.add(w_norm)

        fallbacks = [w for w in vocab_words if w.lower() in fallback_set]

        programmatic_fillers = []
        for w in vocab_words:
            w_lower = w.lower()
            if w_lower in ["pivotal moment", "fame dynamics"]:
                continue
            if (w_lower.endswith(" dynamics") or
                w_lower.endswith("'s personal journey") or
                w_lower.startswith("confronting ") or
                w_lower.startswith("pivotal ") or
                w_lower.endswith("'s perspective")):
                programmatic_fillers.append(w)

        results.append({
            "file": file,
            "title": title,
            "vocab_count": len(vocab_words),
            "vocab_words": vocab_words,
            "duplicates": duplicates,
            "fallbacks": fallbacks,
            "programmatic_fillers": programmatic_fillers
        })

    # Summary
    total_files = len(results)
    files_with_duplicates = [r for r in results if r["duplicates"]]
    files_with_fallbacks = [r for r in results if r["fallbacks"]]
    files_with_fillers = [r for r in results if r["programmatic_fillers"]]

    print("\n--- Detailed Audit Results ---")
    print(f"Total sessions checked: {total_files}")
    print(f"Sessions with duplicated vocabulary: {len(files_with_duplicates)}")
    for r in files_with_duplicates:
        print(f"  - {r['title']} ({r['file']}): Duplicates: {r['duplicates']}")

    print(f"\nSessions with fallback/generic vocabulary: {len(files_with_fallbacks)}")
    print(f"Count: {len(files_with_fallbacks)}")

    print(f"\nSessions with programmatic fillers: {len(files_with_fillers)}")
    for r in files_with_fillers:
        print(f"  - {r['title']} ({r['file']}): Fillers: {r['programmatic_fillers']}")

if __name__ == "__main__":
    audit_cinema_vocab()
