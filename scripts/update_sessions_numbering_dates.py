import os
import re
import glob
from datetime import datetime, timedelta

# Patterns
BRACKETS_RE = re.compile(
    r'\s*\((?:Intermediate|Upper-Intermediate|Upper Intermediate|Elementary|Advanced|Starter|Elem|Interm|A1|A2|B1|B2|C1|C2|B1-B2|Beginner|Upper-Intermediate B2|Intermediate B1)\)',
    re.IGNORECASE
)
TITLE_PREFIX_RE = re.compile(r'^(?:#\d+:|Draft\s+#\d+:)\s*')
DATE_RE = re.compile(r'\b\d{1,2}\s+[A-Za-zа-яА-ЯёЁ\sïéû]+?\s+\d{4}\b')

# Club definitions mapping parents to their relative session folders
CLUBS = [
    {
        "id": "keeping-up-with-science",
        "parent_en": "events/keeping-up-with-science.html",
        "parents_fr_ru": ["events/fr/keeping-up-with-science.html", "events/ru/keeping-up-with-science.html"],
        "folder": "keeping-up-with-science"
    },
    {
        "id": "lets-celebrate",
        "parent_en": "events/lets-celebrate.html",
        "parents_fr_ru": ["events/fr/lets-celebrate.html", "events/ru/lets-celebrate.html"],
        "folder": "lets-celebrate"
    },
    {
        "id": "the-greatest-quotes",
        "parent_en": "events/the-greatest-quotes.html",
        "parents_fr_ru": ["events/fr/the-greatest-quotes.html", "events/ru/the-greatest-quotes.html"],
        "folder": "the-greatest-quotes"
    },
    {
        "id": "mind-matters",
        "parent_en": "events/mind-matters.html",
        "parents_fr_ru": ["events/fr/mind-matters.html", "events/ru/mind-matters.html"],
        "folder": "mind-matters"
    },
    {
        "id": "my-life-with-without",
        "parent_en": "events/my-life-with-without.html",
        "parents_fr_ru": ["events/fr/my-life-with-without.html", "events/ru/my-life-with-without.html"],
        "folder": "my-life-with-without"
    },
    {
        "id": "debatable-relatable",
        "parent_en": "events/debatable-relatable.html",
        "parents_fr_ru": ["events/fr/debatable-relatable.html", "events/ru/debatable-relatable.html"],
        "folder": "debatable-relatable"
    },
    {
        "id": "cinema-club",
        "parent_en": "events/cinema-club.html",
        "parents_fr_ru": [],
        "folder": "cinema-club"
    },
    {
        "id": "karaoke-club",
        "parent_en": "events/karaoke-club.html",
        "parents_fr_ru": [],
        "folder": "karaoke-club"
    },
    {
        "id": "i-couldnt-help-but-wonder",
        "parent_en": "events/i-couldnt-help-but-wonder.html",
        "parents_fr_ru": ["events/fr/i-couldnt-help-but-wonder.html"],
        "folder": "i-couldnt-help-but-wonder"
    }
]

def format_number(num, total):
    if total >= 100:
        return f"#{num:03d}"
    else:
        return f"#{num:02d}"

def generate_date_en(index):
    start_date = datetime(2026, 1, 1)
    current_date = start_date + timedelta(days=7 * index)
    return current_date.strftime("%d %B %Y").lstrip("0")

def translate_date(date_str, lang):
    en_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    fr_months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
    ru_months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]

    parts = date_str.split()
    if len(parts) == 3:
        day, month, year = parts
        day = str(int(day))
        if lang == 'fr':
            if month in en_months:
                month_idx = en_months.index(month)
                return f"{day} {fr_months[month_idx]} {year}"
        elif lang == 'ru':
            if month in en_months:
                month_idx = en_months.index(month)
                return f"{day} {ru_months[month_idx]} {year}"
    return date_str

def find_matching_block(html, start_idx):
    tag_match = re.match(r'<([a-z0-9]+)', html[start_idx:], re.IGNORECASE)
    if not tag_match:
        return start_idx
    tag = tag_match.group(1)

    pos = start_idx
    open_tag_re = re.compile(rf'<{tag}\b', re.IGNORECASE)
    close_tag_re = re.compile(rf'</{tag}>', re.IGNORECASE)

    depth = 0
    while pos < len(html):
        next_open = open_tag_re.search(html, pos)
        next_close = close_tag_re.search(html, pos)

        if not next_close:
            break

        if next_open and next_open.start() < next_close.start():
            depth += 1
            pos = next_open.end()
        else:
            depth -= 1
            if depth == 0:
                return next_close.end()
            pos = next_close.end()

    return len(html)

def get_all_session_blocks(html):
    blocks = []
    start_tags_re = re.compile(r'<([a-z0-9]+)\b[^>]*class="[^"]*history-session[^"]*"[^>]*>', re.IGNORECASE)
    for m in start_tags_re.finditer(html):
        start_idx = m.start()
        end_idx = find_matching_block(html, start_idx)
        block_content = html[start_idx:end_idx]
        blocks.append((start_idx, end_idx, block_content))
    return blocks

master_mapping = {}

for club in CLUBS:
    parent_path = club["parent_en"]
    if not os.path.exists(parent_path):
        continue
    with open(parent_path, "r", encoding="utf-8") as f:
        html = f.read()
    blocks = get_all_session_blocks(html)
    valid_blocks = []
    for start, end, content in blocks:
        hrefs = re.findall(r'href="([^"]*sessions/[^"]+\.html)"', content, re.IGNORECASE)
        if not hrefs:
            hrefs = re.findall(r'href="([^"]+\.html)"', content, re.IGNORECASE)
        session_hrefs = [h for h in hrefs if "sessions/" in h]
        if session_hrefs:
            valid_blocks.append((start, end, content, session_hrefs))
    valid_blocks.reverse()
    total_count = len(valid_blocks)
    for idx, (start, end, content, hrefs) in enumerate(valid_blocks):
        num = idx + 1
        date_en = generate_date_en(idx)
        for href in hrefs:
            filename = os.path.basename(href)
            master_mapping[filename] = {
                "num": num,
                "total": total_count,
                "date": date_en,
                "club": club["folder"]
            }

# Update parent pages
for club in CLUBS:
    parent_files = [club["parent_en"]] + club["parents_fr_ru"]
    for path in parent_files:
        if not os.path.exists(path):
            continue
        if "/fr/" in path:
            lang = 'fr'
        elif "/ru/" in path:
            lang = 'ru'
        else:
            lang = 'en'
        with open(path, "r", encoding="utf-8") as f:
            html = f.read()
        blocks = get_all_session_blocks(html)
        blocks.sort(key=lambda x: x[0], reverse=True)
        new_html = html
        for start_idx, end_idx, block_content in blocks:
            hrefs = re.findall(r'href="([^"]*sessions/[^"]+\.html)"', block_content, re.IGNORECASE)
            if not hrefs:
                hrefs = re.findall(r'href="([^"]+\.html)"', block_content, re.IGNORECASE)
            session_hrefs = [h for h in hrefs if "sessions/" in h]
            if session_hrefs:
                filename = os.path.basename(session_hrefs[0])
                if filename in master_mapping:
                    info = master_mapping[filename]
                    num = info["num"]
                    total = info["total"]
                    formatted_num = format_number(num, total)
                    date_en = info["date"]
                    new_date = translate_date(date_en, lang)
                    new_block_content = block_content
                    h4_matches = list(re.finditer(r'(<h4[^>]*>)(.*?)(</h4>)', new_block_content, re.DOTALL))
                    if h4_matches:
                        for h_match in h4_matches:
                            h4_start, title_inner, h4_end = h_match.groups()
                            clean_title = re.sub(TITLE_PREFIX_RE, '', title_inner)
                            clean_title = re.sub(BRACKETS_RE, '', clean_title).strip()
                            if club["id"] == "i-couldnt-help-but-wonder":
                                new_title_inner = clean_title
                            else:
                                new_title_inner = f"{formatted_num}: {clean_title}"
                            new_block_content = new_block_content.replace(
                                h_match.group(0),
                                f"{h4_start}{new_title_inner}{h4_end}"
                            )
                    new_block_content = re.sub(DATE_RE, new_date, new_block_content)
                    def strip_brackets_from_match(m):
                        return re.sub(BRACKETS_RE, '', m.group(0))
                    new_block_content = re.sub(r'<a[^>]*>.*?</a>', strip_brackets_from_match, new_block_content, flags=re.DOTALL)
                    new_html = new_html[:start_idx] + new_block_content + new_html[end_idx:]
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_html)

# Update events/index.html
index_path = "events/index.html"
if os.path.exists(index_path):
    with open(index_path, "r", encoding="utf-8") as f:
        html = f.read()
    link_re = re.compile(
        r'(<a\s+[^>]*class="dir-link"[^>]*href="([^"]*sessions/([^"]+))"[^>]*>.*?<span class="dir-link-dot"></span>)(.*?)(</a>)',
        re.IGNORECASE | re.DOTALL
    )
    link_re_alt = re.compile(
        r'(<a\s+[^>]*href="([^"]*sessions/([^"]+))"[^>]*class="dir-link"[^>]*>.*?<span class="dir-link-dot"></span>)(.*?)(</a>)',
        re.IGNORECASE | re.DOTALL
    )
    def replace_link(match):
        prefix = match.group(1)
        filename = os.path.basename(match.group(3))
        text = match.group(4)
        suffix = match.group(5)
        if filename in master_mapping:
            info = master_mapping[filename]
            num = info["num"]
            total = info["total"]
            formatted_num = format_number(num, total)
            clean_text = re.sub(BRACKETS_RE, '', text).strip()
            clean_text = re.sub(TITLE_PREFIX_RE, '', clean_text).strip()
            if info["club"] == "i-couldnt-help-but-wonder":
                new_text = f" Draft {formatted_num}: {clean_text}"
            else:
                new_text = f" {formatted_num}: {clean_text}"
            return f"{prefix}{new_text}{suffix}"
        return match.group(0)
    html = link_re.sub(replace_link, html)
    html = link_re_alt.sub(replace_link, html)
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(html)

# Update recursive child pages
session_dirs = [
    "events/sessions",
    "events/fr/sessions",
    "events/ru/sessions"
]
child_count = 0
for s_dir in session_dirs:
    if not os.path.exists(s_dir):
        continue
    for root, dirs, files in os.walk(s_dir):
        for file in files:
            if file.endswith(".html"):
                filename = file
                if filename in master_mapping:
                    path = os.path.join(root, file)
                    info = master_mapping[filename]
                    if "/fr/" in path:
                        lang = 'fr'
                    elif "/ru/" in path:
                        lang = 'ru'
                    else:
                        lang = 'en'
                    num = info["num"]
                    total = info["total"]
                    formatted_num = format_number(num, total)
                    date_en = info["date"]
                    new_date = translate_date(date_en, lang)
                    with open(path, "r", encoding="utf-8") as f:
                        html = f.read()
                    title_match = re.search(r'(<title[^>]*>)(.*?)(</title>)', html, re.IGNORECASE | re.DOTALL)
                    if title_match:
                        tag_start, title_text, tag_end = title_match.groups()
                        clean_text = re.sub(r'^(?:#\d+:|Draft\s+#\d+:)\s*', '', title_text)
                        clean_text = re.sub(BRACKETS_RE, '', clean_text)
                        if info["club"] == "i-couldnt-help-but-wonder":
                            prefix = f"Draft {formatted_num}: "
                        else:
                            prefix = f"{formatted_num}: "
                        new_title_text = f"{prefix}{clean_text}"
                        html = html.replace(title_match.group(0), f"{tag_start}{new_title_text}{tag_end}")
                    h1_match = re.search(r'(<h1[^>]*>)(.*?)(</h1>)', html, re.IGNORECASE | re.DOTALL)
                    if h1_match:
                        tag_start, h1_text, tag_end = h1_match.groups()
                        clean_text = re.sub(r'^(?:#\d+:|Draft\s+#\d+:)\s*', '', h1_text)
                        clean_text = re.sub(BRACKETS_RE, '', clean_text)
                        if info["club"] == "i-couldnt-help-but-wonder":
                            prefix = f"Draft {formatted_num}: "
                        else:
                            prefix = f"{formatted_num}: "
                        new_h1_text = f"{prefix}{clean_text}"
                        html = html.replace(h1_match.group(0), f"{tag_start}{new_h1_text}{tag_end}")
                    breadcrumbs_match = re.search(r'(<span\s+[^>]*class="current"[^>]*>)(.*?)(</span>)', html, re.IGNORECASE | re.DOTALL)
                    if breadcrumbs_match:
                        tag_start, b_text, tag_end = breadcrumbs_match.groups()
                        clean_text = re.sub(r'^(?:#\d+:|Draft\s+#\d+:)\s*', '', b_text)
                        clean_text = re.sub(BRACKETS_RE, '', clean_text)
                        if info["club"] == "i-couldnt-help-but-wonder":
                            prefix = f"Draft {formatted_num}: "
                        else:
                            prefix = f"{formatted_num}: "
                        new_b_text = f"{prefix}{clean_text}"
                        html = html.replace(breadcrumbs_match.group(0), f"{tag_start}{new_b_text}{tag_end}")
                    html = re.sub(DATE_RE, new_date, html)
                    with open(path, "w", encoding="utf-8") as f:
                        f.write(html)
                    child_count += 1
print(f"DONE! Updated {child_count} child pages.")
