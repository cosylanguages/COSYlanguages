import os
import re
from bs4 import BeautifulSoup

# Define all speaking club session directories to scan
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

def build_relative_navigation():
    print("🚀 Starting Speaking Club Session Navigation Builder...")

    for session_dir in SESSION_DIRS:
        if not os.path.exists(session_dir):
            print(f"⚠️ Directory {session_dir} does not exist, skipping.")
            continue

        # Get all html files in directory, ignoring templates
        files = [f for f in os.listdir(session_dir) if f.endswith(".html") and not f.startswith("template")]
        # Sort them alphabetically for deterministic order
        files.sort()

        if len(files) <= 1:
            print(f"ℹ️ Directory {session_dir} has {len(files)} files. Sibling navigation is not needed.")
            continue

        print(f"📂 Processing {len(files)} sessions in {session_dir}...")

        # Pre-load metadata for all files in this group
        metadata_map = {}
        for filename in files:
            filepath = os.path.join(session_dir, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            soup = BeautifulSoup(content, "html.parser")

            # Extract title
            title = ""
            if soup.title:
                title = soup.title.get_text().split(" — ")[0].strip()
            if not title and soup.h1:
                title = soup.h1.get_text().strip()
            if not title:
                title = filename.replace(".html", "").replace("-", " ").title()

            # Clean up title if too long or complex
            title = title.split(" (")[0].strip() # strip level indicators like (Elem) or (B1)

            # Find back link
            hub_url = ""
            hub_text = ""
            back_link = soup.find(class_="back-link")
            if back_link:
                hub_url = back_link.get("href")
                hub_text = back_link.get_text().strip().replace("← ", "").strip()

            metadata_map[filename] = {
                "title": title,
                "hub_url": hub_url,
                "hub_text": hub_text
            }

        # Apply navigation links
        for i, filename in enumerate(files):
            filepath = os.path.join(session_dir, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            soup = BeautifulSoup(content, "html.parser")

            # Determine siblings
            prev_filename = files[i - 1] if i > 0 else None
            next_filename = files[i + 1] if i < len(files) - 1 else None

            # Get clean metadata
            meta = metadata_map[filename]
            hub_url = meta["hub_url"] or "../../index.html"
            hub_text = meta["hub_text"] or "Back to Club"

            # Create the nav container
            nav_html = f'\n<div class="session-nav-row" style="display: flex; justify-content: space-between; align-items: center; background: var(--cream-dark, #f5ede0); border: 1px solid var(--border, rgba(0,0,0,0.1)); border-radius: 12px; padding: 1rem 1.5rem; margin-top: 3rem; margin-bottom: 2rem; box-sizing: border-box; flex-wrap: wrap; gap: 1rem; font-family: \'Nunito\', sans-serif;">\n'

            # Previous link
            if prev_filename:
                prev_meta = metadata_map[prev_filename]
                nav_html += f'  <a href="{prev_filename}" class="session-nav-link prev" style="text-decoration: none; color: var(--sage-dark, #4a6b50); font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.9rem;">\n'
                nav_html += f'    <span>←</span> <span>{prev_meta["title"]}</span>\n'
                nav_html += f'  </a>\n'
            else:
                # Spacer placeholder to maintain layout alignment
                nav_html += f'  <div style="flex: 1; min-width: 100px; display: none;"></div>\n'

            # Hub link
            nav_html += f'  <a href="{hub_url}" class="session-nav-link hub" style="text-decoration: none; color: var(--muted, #6b6b6b); font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; text-align: center; margin: 0 auto;">\n'
            nav_html += f'    {hub_text}\n'
            nav_html += f'  </a>\n'

            # Next link
            if next_filename:
                next_meta = metadata_map[next_filename]
                nav_html += f'  <a href="{next_filename}" class="session-nav-link next" style="text-decoration: none; color: var(--sage-dark, #4a6b50); font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; margin-left: auto;">\n'
                nav_html += f'    <span>{next_meta["title"]}</span> <span>→</span>\n'
                nav_html += f'  </a>\n'
            else:
                # Spacer placeholder
                nav_html += f'  <div style="flex: 1; min-width: 100px; display: none;"></div>\n'

            nav_html += f'</div>\n'

            # Parse container elements to see if session-nav-row already exists
            existing_nav = soup.find(class_="session-nav-row")
            if existing_nav:
                # Replace existing
                new_nav_soup = BeautifulSoup(nav_html, "html.parser")
                existing_nav.replace_with(new_nav_soup.div)
            else:
                # Insert at the bottom of the main content container
                main_tag = soup.find("main")
                if main_tag:
                    new_nav_soup = BeautifulSoup(nav_html, "html.parser")
                    main_tag.append(new_nav_soup.div)
                else:
                    # Fallback to appending right before footer
                    footer_tag = soup.find("footer")
                    if footer_tag:
                        new_nav_soup = BeautifulSoup(nav_html, "html.parser")
                        footer_tag.insert_before(new_nav_soup.div)

            # Write updated content back, keeping formatting intact
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(str(soup))

    print("🎉 All Speaking Club Session Navigation Rows Successfully Built!")

if __name__ == "__main__":
    build_relative_navigation()
