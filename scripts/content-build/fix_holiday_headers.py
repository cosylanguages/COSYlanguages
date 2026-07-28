import os
from bs4 import BeautifulSoup

def fix_headers(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Simple replace for headers
    content = content.replace("🔵 Round 1 — Advantages of Short Holidays", "🔵 Round 1 — Advantages (A/B Ideas)")
    content = content.replace("🔵 Round 1 — Advantages of High-Frequency Short Holidays", "🔵 Round 1 — Advantages (A/B Ideas)")
    content = content.replace("🟢 Round 2 — Advantages of Long Holidays", "🟢 Round 2 — Disadvantages (A/B Ideas)")
    content = content.replace("🟢 Round 2 — Advantages of Prolonged Immersive Holidays", "🟢 Round 2 — Disadvantages (A/B Ideas)")

    # Let's check for any nested round-body issues in both files
    soup = BeautifulSoup(content, 'html.parser')

    # Make sure we clean up any extra nested round-body tags
    # Let's save it
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print(f"Fixed headers in {filepath}")

def main():
    fix_headers("events/sessions/debatable-relatable/short-holiday-vs-long-holiday-elementary.html")
    fix_headers("events/sessions/debatable-relatable/short-holiday-vs-long-holiday-intermediate.html")

if __name__ == "__main__":
    main()
