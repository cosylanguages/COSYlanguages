import glob, os, re

# 1. Verify links in all language hub and subpage HTML files
html_files = sorted(glob.glob('languages/**/*.html', recursive=True))
print(f'Checking {len(html_files)} HTML files in languages/...')

missing_links = []
for file_path in html_files:
    dir_path = os.path.dirname(file_path)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find internal relative links (href="...")
    links = re.findall(r'href=["\']([^"\'#][^"\']*)["\']', content)
    for link in links:
        if link.startswith('http://') or link.startswith('https://') or link.startswith('mailto:') or link.startswith('https://wa.me') or '${' in link:
            continue

        # Clean query parameters and fragment anchors
        clean_link = link.split('?')[0].split('#')[0]
        if not clean_link:
            continue

        target_path = os.path.normpath(os.path.join(dir_path, clean_link))
        if not os.path.exists(target_path):
            missing_links.append((file_path, link, target_path))

if missing_links:
    print(f'❌ Found {len(missing_links)} missing link targets:')
    for src, link, target in missing_links:
        print(f'   {src} -> {link} (Target not found: {target})')
else:
    print('✅ All internal links in languages/ resolve to existing files!')

# 2. Test js/data/daily_dose.js data integrity
with open('js/data/daily_dose.js', 'r', encoding='utf-8') as f:
    daily_code = f.read()

langs = ['en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br']
for lang in langs:
    assert f'"{lang}":' in daily_code or f"'{lang}':" in daily_code, f'Missing data for {lang} in daily_dose.js'

print('✅ js/data/daily_dose.js contains data for all 13 supported languages!')
