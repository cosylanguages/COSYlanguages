import os
import re
from bs4 import BeautifulSoup

def process_file(filepath):
    print(f"Processing: {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')

    # Identify page language (French if in events/fr/ or lang="fr")
    is_french = "events/fr/" in filepath.replace('\\', '/') or (soup.html and soup.html.get('lang') == 'fr')

    # 1. Locate main content container
    content_container = soup.find('main', class_='content-container')
    if not content_container:
        print(f"⚠️ No content container found in {filepath}. Skipping.")
        return

    # 2. Find elements we want to reorder or clean
    breadcrumbs = content_container.find('nav', class_='cosy-breadcrumbs')
    back_link = content_container.find('a', class_='back-link')
    warning = content_container.find('div', class_='sensitive-topic-warning')
    meta_grid = content_container.find('div', class_='session-meta-grid')
    editorial_box = content_container.find('div', class_='wonder-column-box')

    # Locate description monologue div using style attribute border-left
    description_block = content_container.find('div', style=lambda s: s and 'border-left: 3px solid' in s)

    # Locate Carrie's Diary block
    diary_block = content_container.find('div', class_='carrie-diary')

    # Clean/delete Carrie's Diary block if present
    if diary_block:
        diary_block.decompose()
        print("-> Decomposed Carrie's Diary block")

    # Extract elements from DOM to cleanly reposition them
    if warning:
        warning = warning.extract()
    if meta_grid:
        meta_grid = meta_grid.extract()
    if editorial_box:
        editorial_box = editorial_box.extract()
    if description_block:
        description_block = description_block.extract()
    if back_link:
        back_link = back_link.extract()

    # Determine transcript summary label
    summary_text = "📜 Lire la transcription de la chronique" if is_french else "📜 Read Column Transcript"

    # Create details collapsible container for the description (monologue)
    details = soup.new_tag("details", attrs={
        "class": "transcript-details",
        "style": "margin: 1.5rem 0;"
    })

    summary = soup.new_tag("summary")
    summary_span = soup.new_tag("span")
    summary_span.string = summary_text
    arrow_span = soup.new_tag("span", attrs={"class": "fold-arrow"})
    arrow_span.string = "▼"

    summary.append(summary_span)
    summary.append(arrow_span)
    details.append(summary)

    # Style description block cleanly for details interior
    if description_block:
        orig_style = description_block.get('style', '')
        # Retain original border color if it was custom (like the #4c3185 B2 variant)
        border_color = "#3F2B96"
        if "#4c3185" in orig_style:
            border_color = "#4c3185"
        description_block['style'] = f"padding: 1.5rem 1.25rem 1.25rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem; font-style: italic; border-left: 3px solid {border_color}; margin-bottom: 0;"
        details.append(description_block)

    # Re-insert in requested order:
    # 1. Breadcrumbs (leave first)
    current = breadcrumbs

    # 2. Back link
    if back_link and current:
        current.insert_after(back_link)
        current = back_link

    # 3. Sensitive warning (first what people see if present)
    if warning:
        if current:
            current.insert_after(warning)
            current = warning
        else:
            content_container.insert(0, warning)
            current = warning

    # 4. Level and time (meta-grid)
    if meta_grid:
        if current:
            current.insert_after(meta_grid)
            current = meta_grid
        else:
            content_container.append(meta_grid)
            current = meta_grid

    # 5. Editorial point (wonder-column-box)
    if editorial_box:
        if current:
            current.insert_after(editorial_box)
            current = editorial_box
        else:
            content_container.append(editorial_box)
            current = editorial_box

    # 6. Audio Player Placeholder
    placeholder = soup.new_tag("div", attrs={"class": "wonder-audio-player-placeholder"})
    if current:
        current.insert_after(placeholder)
        current = placeholder
    else:
        content_container.append(placeholder)
        current = placeholder

    # 7. Collapsible Transcript
    if current:
        current.insert_after(details)

    # Save changes back to file
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print("-> Successfully reordered and cleaned file layout")

def main():
    dirs = [
        "events/sessions/i-couldnt-help-but-wonder/",
        "events/fr/sessions/i-couldnt-help-but-wonder/"
    ]

    for d in dirs:
        if not os.path.exists(d):
            continue
        for filename in sorted(os.listdir(d)):
            if filename.endswith(".html") and not filename.startswith("template"):
                filepath = os.path.join(d, filename)
                process_file(filepath)

if __name__ == "__main__":
    main()
