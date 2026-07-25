import os
import re

def extract_metadata(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find level
    level_match = re.search(r'<h4>Level</h4>\s*<p>(.*?)</p>', content, re.IGNORECASE | re.DOTALL)
    level = level_match.group(1).strip() if level_match else "Unknown"

    # Find resource links
    urls = re.findall(r'href="([^"]+)"', content)
    resource_urls = [u for u in urls if "sciencedaily.com" in u or "sciencex.com" in u or "psycnet.apa.org" in u or "nature.com" in u or "science.org" in u or "thelancet.com" in u or "frontiersin.org" in u or "pnas.org" in u or "medium.com" in u or "nytimes.com" in u or "scitechdaily.com" in u or "technologyreview.com" in u]
    if not resource_urls:
        # Fallback to any external http link under Resources block
        meta_grid_match = re.search(r'<h4>Resources</h4>\s*<p>(.*?)</p>', content, re.IGNORECASE | re.DOTALL)
        if meta_grid_match:
            resource_urls = re.findall(r'href="([^"]+)"', meta_grid_match.group(1))

    url_str = ", ".join(resource_urls) if resource_urls else "No external links found"

    # Find vocabulary words
    words = re.findall(r'<div class="vocab-word">([^<]+)</div>', content)

    return level, url_str, words

def main():
    science_dir = 'events/sessions/keeping-up-with-science'
    files = sorted([f for f in os.listdir(science_dir) if f.endswith('.html') and not f.startswith('template')])

    print(f"{'Filename':<55} | {'Level':<25} | {'URL'}")
    print("-" * 150)
    for filename in files:
        filepath = os.path.join(science_dir, filename)
        level, url, words = extract_metadata(filepath)
        print(f"{filename:<55} | {level:<25} | {url}")

if __name__ == '__main__':
    main()
