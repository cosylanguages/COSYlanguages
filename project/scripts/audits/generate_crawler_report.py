import os
from bs4 import BeautifulSoup

root_dir = "."
all_existing_files = set()
for root, dirs, files in os.walk(root_dir):
    if ".git" in root or "node_modules" in root:
        continue
    for file in files:
        rel_path = os.path.relpath(os.path.join(root, file), root_dir).replace("\\", "/")
        if rel_path.startswith("./"):
            rel_path = rel_path[2:]
        all_existing_files.add(rel_path)

html_files = []
for root, dirs, files in os.walk(root_dir):
    if ".git" in root or "node_modules" in root:
        continue
    for file in files:
        if file.endswith(".html"):
            html_files.append(os.path.join(root, file))

# Group folders
folders = ["events", "practice", "games", "vocabulary", "grammar", "courses", "portal", "root_other"]
grouped_data = {f: {"broken_links": [], "missing_alts": [], "missing_titles": [], "missing_metas": []} for f in folders}

def get_folder_group(filepath):
    filepath = filepath.replace("\\", "/").lstrip("./")
    parts = filepath.split("/")
    if len(parts) > 1:
        g = parts[0]
        if g in grouped_data:
            return g
    return "root_other"

for filepath in html_files:
    filepath_norm = filepath.replace("\\", "/").lstrip("./")
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception:
        continue

    soup = BeautifulSoup(content, "html.parser")
    group = get_folder_group(filepath_norm)

    # Title
    title_tag = soup.find("title")
    if not title_tag or not title_tag.get_text(strip=True):
        grouped_data[group]["missing_titles"].append(filepath_norm)

    # Meta desc
    meta_desc = soup.find("meta", attrs={"name": "description"})
    if not meta_desc or not meta_desc.get("content", "").strip():
        grouped_data[group]["missing_metas"].append(filepath_norm)

    # Images alt
    for img in soup.find_all("img"):
        if "alt" not in img.attrs:
            grouped_data[group]["missing_alts"].append((filepath_norm, str(img)))

    # Broken links
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        if not href or href.startswith("#") or href.startswith("mailto:") or href.startswith("tel:") or href.startswith("http://") or href.startswith("https://") or href.startswith("javascript:") or href.startswith("https://wa.me") or href.startswith("https://t.me"):
            continue
        if "${" in href or "{session-slug}" in href or "[session-slug]" in href:
            continue

        clean_href = href.split("#")[0].split("?")[0]
        if not clean_href:
            continue

        base_dir = os.path.dirname(filepath_norm)
        resolved_path = os.path.normpath(os.path.join(base_dir, clean_href)).replace("\\", "/")
        if resolved_path.startswith("./"):
            resolved_path = resolved_path[2:]
        if resolved_path == ".":
            resolved_path = "index.html"

        resolved_with_index = resolved_path
        if not os.path.splitext(resolved_path)[1]:
            resolved_with_index = os.path.normpath(os.path.join(resolved_path, "index.html")).replace("\\", "/")
            if resolved_with_index.startswith("./"):
                resolved_with_index = resolved_with_index[2:]

        if resolved_path not in all_existing_files and resolved_with_index not in all_existing_files:
            grouped_data[group]["broken_links"].append((filepath_norm, href, resolved_path))

# Let us generate a pretty report and write it to a temporary text file so we can copy it later
with open("temp_crawler_report.md", "w", encoding="utf-8") as out:
    for f in folders:
        out.write(f"### Folder: `{f}/`\n\n")
        data = grouped_data[f]

        # Broken links
        out.write(f"#### Broken Internal Links ({len(data['broken_links'])} found)\n")
        if not data["broken_links"]:
            out.write("- [x] None found.\n\n")
        else:
            dedup = sorted(list(set(data["broken_links"])))
            for src, link, res in dedup[:50]:
                out.write(f"- [ ] In `{src}`: link `{link}` resolves to non-existent `{res}`\n")
            if len(dedup) > 50:
                out.write(f"- [ ] ... and {len(dedup) - 50} more broken links in this folder.\n")
            out.write("\n")

        # Missing Alt attributes
        out.write(f"#### Images Missing `alt` Attributes ({len(data['missing_alts'])} found)\n")
        if not data["missing_alts"]:
            out.write("- [x] None found.\n\n")
        else:
            dedup = sorted(list(set(data["missing_alts"])))
            for src, img_str in dedup[:30]:
                out.write(f"- [ ] In `{src}`: image tag `{img_str}`\n")
            if len(dedup) > 30:
                out.write(f"- [ ] ... and {len(dedup) - 30} more missing alt images.\n")
            out.write("\n")

        # Missing Title
        out.write(f"#### Pages Missing `<title>` ({len(data['missing_titles'])} found)\n")
        if not data["missing_titles"]:
            out.write("- [x] None found.\n\n")
        else:
            for src in sorted(list(set(data["missing_titles"]))):
                out.write(f"- [ ] `{src}` is missing a `<title>` tag\n")
            out.write("\n")

        # Missing Meta Desc
        out.write(f"#### Pages Missing Meta Description ({len(data['missing_metas'])} found)\n")
        if not data["missing_metas"]:
            out.write("- [x] None found.\n\n")
        else:
            dedup = sorted(list(set(data["missing_metas"])))
            for src in dedup[:50]:
                out.write(f"- [ ] `{src}` is missing a `<meta name=\"description\">` tag\n")
            if len(dedup) > 50:
                out.write(f"- [ ] ... and {len(dedup) - 50} more pages missing meta descriptions.\n")
            out.write("\n")
        out.write("---\n\n")

print("Report generated in temp_crawler_report.md")
