import os
import re

def find_links(content):
    # Regex to find .html links in href or window.location
    return re.findall(r'href=["\']([^"\']+\.html(?:#[^"\']*)?(?:\?[^"\']*)?)["\']', content) + \
           re.findall(r'location\.href\s*=\s*["\']([^"\']+\.html(?:#[^"\']*)?(?:\?[^"\']*)?)["\']', content)

root_dir = "."
html_files = []
for root, dirs, files in os.walk(root_dir):
    if ".git" in root: continue
    for file in files:
        if file.endswith(".html") or file.endswith(".js"):
            html_files.append(os.path.join(root, file))

all_links = {}
for file_path in html_files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            links = find_links(content)
            all_links[file_path] = links
    except Exception as e:
        print(f"Error reading {file_path}: {e}")

all_existing_files = []
for root, dirs, files in os.walk(root_dir):
    if ".git" in root: continue
    for file in files:
        rel_path = os.path.relpath(os.path.join(root, file), root_dir).replace("\\", "/")
        all_existing_files.append(rel_path)

broken_links = []
for file_path, links in all_links.items():
    for link in links:
        if link.startswith("http") or link.startswith("mailto:") or link.startswith("https://wa.me") or link.startswith("https://t.me"):
            continue

        # Clean query/hash
        clean_link = link.split("#")[0].split("?")[0]
        if not clean_link: continue

        # Resolve relative path
        base_dir = os.path.dirname(file_path)
        resolved_path = os.path.normpath(os.path.join(base_dir, clean_link)).replace("\\", "/")

        if resolved_path not in all_existing_files and resolved_path + "/index.html" not in all_existing_files:
             # Handle root relative if needed, but here we assume relative to file
             if clean_link.startswith("/"):
                 resolved_path = clean_link.lstrip("/")

             if resolved_path not in all_existing_files:
                broken_links.append((file_path, link, resolved_path))

print("--- Broken Links Report ---")
for src, link, resolved in sorted(list(set(broken_links))):
    print(f"Source: {src} | Link: {link} | Resolved to: {resolved} (NOT FOUND)")
