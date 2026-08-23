import os, re

ai_patterns = [
    r"\bdelve\b",
    r"\btapestry\b",
    r"\btestament to\b",
    r"\bbeacon of\b",
    r"\bfostering\b",
    r"\bgame-changer\b",
    r"\bmultifaceted\b",
    r"\bplethora\b",
    r"\bnestled\b",
    r"\bintricate\b",
    r"\bseamlessly\b",
    r"\brealm of\b",
    r"\bprofound impact\b",
    r"\bunwavering\b",
    r"\bleverage\b",
    r"\bin today's world\b",
    r"\bin today's fast-paced\b"
]

combined_pattern = re.compile("|".join(ai_patterns), re.IGNORECASE)

matches = []
for root, dirs, files in os.walk("."):
    if ".git" in root or "node_modules" in root:
        continue
    for f in files:
        if f.endswith((".js", ".json", ".html", ".md")):
            fp = os.path.join(root, f)
            with open(fp, "r", encoding="utf-8", errors="ignore") as file:
                lines = file.readlines()
            for line_idx, line in enumerate(lines):
                m = combined_pattern.search(line)
                if m:
                    matches.append((fp, line_idx + 1, m.group(0), line.strip()))

print(f"Total AI fluff occurrences found: {len(matches)}")
for fp, line_num, word, line_text in matches[:40]:
    print(f"  {fp}:{line_num} [{word}] -> {line_text[:100]}")
