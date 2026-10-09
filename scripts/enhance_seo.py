import os, glob, re
from html import escape

BASE_URL = "https://cosylanguages.github.io/COSYlanguages"

# Determine page language from file path or content
def determine_lang(filepath, content):
    rel_path = filepath.replace("\\", "/")

    # 1. Existing lang attribute if valid
    lang_match = re.search(r'<html[^>]*lang=["\']([a-zA-Z\-]+)["\']', content, re.IGNORECASE)
    if lang_match:
        existing = lang_match.group(1).lower()
        if existing and existing != "en" and existing in ["fr", "it", "ru", "el", "es", "de", "pt", "hy", "ka", "tt", "ba", "br", "cv"]:
            return existing

    # 2. Folder or filename heuristics
    if "/fr/" in rel_path or rel_path.startswith("languages/fr") or rel_path.endswith("-fr.html") or "marathon" in rel_path:
        return "fr"
    if "/it/" in rel_path or rel_path.startswith("languages/it") or rel_path.endswith("-it.html"):
        return "it"
    if "/ru/" in rel_path or rel_path.startswith("languages/ru") or rel_path.endswith("-ru.html"):
        return "ru"
    if "/el/" in rel_path or rel_path.startswith("languages/el") or rel_path.endswith("-el.html"):
        return "el"
    if "/es/" in rel_path or rel_path.startswith("languages/es") or rel_path.endswith("-es.html"):
        return "es"
    if "/de/" in rel_path or rel_path.startswith("languages/de") or rel_path.endswith("-de.html"):
        return "de"
    if "/pt/" in rel_path or rel_path.startswith("languages/pt") or rel_path.endswith("-pt.html"):
        return "pt"
    if "/hy/" in rel_path or rel_path.startswith("languages/hy") or rel_path.endswith("-armenian.html"):
        return "hy"
    if "/ka/" in rel_path or rel_path.startswith("languages/ka") or rel_path.endswith("-georgian.html"):
        return "ka"
    if "/tt/" in rel_path or rel_path.startswith("languages/tt") or rel_path.endswith("-tatar.html"):
        return "tt"
    if "/ba/" in rel_path or rel_path.startswith("languages/ba") or rel_path.endswith("-bashkir.html"):
        return "ba"
    if "/br/" in rel_path or rel_path.startswith("languages/br") or rel_path.endswith("-breton.html"):
        return "br"
    if "/cv/" in rel_path or rel_path.startswith("languages/cv") or rel_path.endswith("-chuvash.html"):
        return "cv"

    # Default to "en" for general pages, english portals, courses, about, practice, blog, etc.
    return "en"

def clean_text(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = ' '.join(text.split())
    return escape(text)

def truncate(text, max_len):
    if len(text) <= max_len:
        return text
    truncated = text[:max_len - 3]
    if ' ' in truncated:
        truncated = truncated.rsplit(' ', 1)[0]
    return truncated + "..."

page_lang_map = {}

def process_file(filepath):
    rel_path = filepath.replace("\\", "/")
    if rel_path.startswith("components/"):
        return

    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    lang_code = determine_lang(filepath, content)
    page_lang_map[rel_path] = lang_code
    canonical_url = f"{BASE_URL}/{rel_path}"

    # 1. <html lang="...">
    if re.search(r'<html[^>]*lang=', content, re.IGNORECASE):
        content = re.sub(r'<html([^>]*)lang=["\'][^"\']*["\']', f'<html\\1lang="{lang_code}"', content, count=1, flags=re.IGNORECASE)
    else:
        content = re.sub(r'<html', f'<html lang="{lang_code}"', content, count=1, flags=re.IGNORECASE)

    # 2. Viewport
    if not re.search(r'<meta[^>]*name=["\']viewport["\']', content, re.IGNORECASE) and not ('http-equiv="refresh"' in content.lower()):
        content = re.sub(r'</head>', '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>', content, count=1, flags=re.IGNORECASE)

    # 3. Title (< 60 chars)
    title_match = re.search(r'<title[^>]*>(.*?)</title>', content, re.DOTALL | re.IGNORECASE)
    if title_match:
        existing_title = clean_text(title_match.group(1))
    else:
        existing_title = ""

    if not existing_title or len(existing_title) > 58:
        if rel_path == "index.html":
            page_title = "COSYlanguages: Free Immersive Language Learning"
        else:
            h1 = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL | re.IGNORECASE)
            t_base = clean_text(h1.group(1)) if h1 else os.path.splitext(os.path.basename(rel_path))[0].replace("-", " ").title()
            page_title = truncate(f"{t_base} · COSYlanguages", 58)
        content = re.sub(r'<title[^>]*>.*?</title>', f'<title>{page_title}</title>', content, count=1, flags=re.DOTALL | re.IGNORECASE)
    else:
        page_title = existing_title

    # 4. Meta Description (< 160 chars)
    desc_match = re.search(r'<meta\s+(?:name=["\']description["\']\s+content=["\'](.*?)["\']|content=["\'](.*?)["\']\s+name=["\']description["\'])', content, re.IGNORECASE)
    if desc_match:
        existing_desc = clean_text(desc_match.group(1) or desc_match.group(2))
    else:
        existing_desc = ""

    if (not existing_desc or len(existing_desc) > 158) and not ('http-equiv="refresh"' in content.lower()):
        p_match = re.search(r'<p[^>]*>(.*?)</p>', content, re.DOTALL | re.IGNORECASE)
        p_text = clean_text(p_match.group(1)) if p_match else ""
        if p_text and len(p_text) > 20:
            page_desc = truncate(p_text, 158)
        else:
            page_desc = truncate(f"Explore {page_title} on COSYlanguages. Free immersive language learning tools and resources.", 158)

        if desc_match:
            content = re.sub(r'<meta\s+[^>]*name=["\']description["\'][^>]*>', f'<meta name="description" content="{page_desc}">', content, count=1, flags=re.IGNORECASE)
        else:
            content = re.sub(r'</head>', f'    <meta name="description" content="{page_desc}">\n</head>', content, count=1, flags=re.IGNORECASE)
    else:
        page_desc = existing_desc

    # 5. Canonical
    if not re.search(r'<link[^>]*rel=["\']canonical["\']', content, re.IGNORECASE):
        canonical_tag = f'<link rel="canonical" href="{canonical_url}">'
        content = re.sub(r'</head>', f'    {canonical_tag}\n</head>', content, count=1, flags=re.IGNORECASE)

    # 6. OG and Twitter tags
    if not re.search(r'<meta[^>]*property=["\']og:title["\']', content, re.IGNORECASE) and not ('http-equiv="refresh"' in content.lower()):
        og_tags = f'''    <meta property="og:title" content="{page_title}">
    <meta property="og:description" content="{page_desc}">
    <meta property="og:url" content="{canonical_url}">
    <meta property="og:type" content="{"article" if "blog/" in rel_path and rel_path != "blog/index.html" else "website"}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{page_title}">
    <meta name="twitter:description" content="{page_desc}">'''
        content = re.sub(r'</head>', f'{og_tags}\n</head>', content, count=1, flags=re.IGNORECASE)

    # 7. JSON-LD structured data
    if rel_path == "index.html" and not "application/ld+json" in content:
        json_ld = '''    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "COSYlanguages",
      "url": "https://cosylanguages.github.io/COSYlanguages/",
      "logo": "https://cosylanguages.github.io/COSYlanguages/images/logos/cosylanguages.png",
      "description": "An open-access language learning platform providing free discovery hubs, communicative practice tools, and printable resources."
    }
    </script>'''
        content = re.sub(r'</head>', f'{json_ld}\n</head>', content, count=1, flags=re.IGNORECASE)
    elif "blog/" in rel_path and rel_path != "blog/index.html" and not "application/ld+json" in content and not rel_path.endswith("design-system.html") and not rel_path.endswith("art-contact-sheet.html"):
        json_ld = f'''    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "{page_title}",
      "description": "{page_desc}",
      "url": "{canonical_url}",
      "publisher": {{
        "@type": "Organization",
        "name": "COSYlanguages",
        "url": "https://cosylanguages.github.io/COSYlanguages/"
      }}
    }}
    </script>'''
        content = re.sub(r'</head>', f'{json_ld}\n</head>', content, count=1, flags=re.IGNORECASE)

    # 8. Ensure alt attribute on img tags
    def repl_img(m):
        img_str = m.group(0)
        if 'alt=' not in img_str.lower():
            return img_str[:-1] + ' alt="COSYlanguages image">'
        return img_str
    content = re.sub(r'<img[^>]*>', repl_img, content, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for p in glob.glob('**/*.html', recursive=True):
    if not p.startswith('.git/') and not p.startswith('node_modules/'):
        process_file(p)

print("SEO update complete. Page lang mappings count:", len(page_lang_map))
