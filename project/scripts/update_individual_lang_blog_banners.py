import glob
import re

banner_html = '''
        <div style="background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(13, 148, 136, 0.03) 100%); border: 1px solid var(--teal, #0d9488); border-radius: 12px; padding: 1.25rem 1.5rem; margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div>
                <strong style="color: var(--teal, #0d9488); font-size: 1.05rem; display: block; margin-bottom: 0.25rem;">🌍 Looking for the 14-Language Master Guide?</strong>
                <span style="font-size: 0.95rem; color: var(--text-main, #1e293b);">Explore the unified 100-chain A0–A1 Semantic Knowledge Tree across all 14 COSY target languages with milestone goals and COSYdata live linkage!</span>
            </div>
            <a href="top-100-a0-a1.html" class="button" style="background: var(--teal, #0d9488); color: #ffffff; padding: 0.6rem 1.2rem; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 0.9rem; white-space: nowrap;">View Master 14-Lang Guide ➔</a>
        </div>
'''

files = glob.glob('blog/top-100-a0-a1-*.html')
print(f"Found {len(files)} files to update.")

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'top-100-a0-a1.html' in content:
        print(f"Skipping {filepath} (already updated)")
        continue

    # Insert banner after header or before main col
    if '<main class="blog-main-col">' in content:
        new_content = content.replace('<main class="blog-main-col">', f'<main class="blog-main-col">\n{banner_html}')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"Could not find insert point in {filepath}")
