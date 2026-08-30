#!/usr/bin/env python3
"""
Generates complete continuous reading/printing HTML pages for grammaire-francaise chapters (Domaines 1 to 5).
"""

import os
import re

MANUAL_DIR = "grammaire-francaise"

def generate_domaine_complet(domaine_num):
    dom_filename = f"domaine-{domaine_num}.html"
    dom_path = os.path.join(MANUAL_DIR, dom_filename)
    if not os.path.exists(dom_path):
        return

    with open(dom_path, "r", encoding="utf-8") as f:
        dom_html = f.read()

    # Extract domaine title and topics
    dom_title_m = re.search(r'<h1>(.*?)</h1>', dom_html)
    dom_title = dom_title_m.group(1).replace('&middot;', '·').strip() if dom_title_m else f"Domaine {domaine_num}"

    # Extract topic relative filenames in order
    topic_files = re.findall(r'href="topics/([^"]+)"', dom_html)

    toc_items = []
    topic_blocks = []

    for idx, tfile in enumerate(topic_files, 1):
        slug = tfile.replace('.html', '')
        tpath = os.path.join(MANUAL_DIR, "topics", tfile)
        if not os.path.exists(tpath):
            print(f"Warning: topic file {tpath} not found.")
            continue

        with open(tpath, "r", encoding="utf-8") as tf:
            thtml = tf.read()

        # Extract main content
        main_m = re.search(r'<main class="container">(.*?)</main>', thtml, re.DOTALL)
        if not main_m:
            continue

        main_content = main_m.group(1)

        # Remove pager navigation div
        main_content = re.sub(r'<div class="pager">.*?</div>', '', main_content, flags=re.DOTALL)

        # Fix relative links in topic bodies
        main_content = main_content.replace('href="../', 'href="')
        main_content = main_content.replace('src="../', 'src="')

        def fix_topic_link(m):
            link = m.group(1)
            if link.startswith(('http', '#', 'topics/', 'domaine-', 'index.html', 'mailto:')):
                return f'href="{link}"'
            if os.path.exists(os.path.join(MANUAL_DIR, 'topics', link)):
                return f'href="topics/{link}"'
            return f'href="{link}"'

        main_content = re.sub(r'href="([^"]+)"', fix_topic_link, main_content)

        # Extract topic title for TOC
        h1_m = re.search(r'<h1>(.*?)</h1>', main_content)
        topic_title = h1_m.group(1) if h1_m else f"Topic {idx}"
        clean_title = re.sub(r'<[^>]+>', '', topic_title)

        topic_id = f"topic-{slug}"

        # Inject ID into <h1> tag
        main_content = re.sub(r'<h1>(.*?)</h1>', f'<h1 id="{topic_id}">\\1</h1>', main_content, count=1)

        # Add to TOC
        toc_items.append(f'<li><a href="#{topic_id}">{idx}. {clean_title}</a></li>')

        # Wrap each topic in an article / section for clarity
        topic_blocks.append(f'''
<article class="topic-section" id="section-{slug}">
{main_content}
</article>
''')

    # Build TOC HTML
    toc_html = f'''
<div class="box mint print-toc-box" style="margin:24px 0;">
  <h2 style="font-family:var(--font-display); font-size:18px; margin-top:0;">📋 Table des matières — Domaine {domaine_num}</h2>
  <ol style="margin:0; padding-left:20px; line-height:1.8;">
    {"".join(toc_items)}
  </ol>
</div>
'''

    # Build full page HTML
    page_html = f'''<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{dom_title} — Édition complète &middot; COSYlanguages</title>
<meta name="description" content="Lecture continue et version imprimable du {dom_title} du Manuel de grammaire française COSYlanguages.">
<link rel="stylesheet" href="assets/style.css">
<style>
/* Custom controls bar for continuous print page */
.print-controls {{
  background: var(--teal-100);
  border: 1px solid var(--teal-500);
  border-radius: var(--radius-m);
  padding: 16px 20px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}}
.print-controls .btn-print {{
  background: var(--teal-700);
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 99px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 14.5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background .15s;
}}
.print-controls .btn-print:hover {{
  background: var(--teal-900);
}}
.print-controls .link-back {{
  font-weight: 600;
  color: var(--teal-800);
  text-decoration: none;
}}
.print-controls .link-back:hover {{
  text-decoration: underline;
}}
@media print {{
  .print-controls, .topbar, footer.site {{
    display: none !important;
  }}
  .print-toc-box {{
    page-break-after: always;
    break-after: page;
  }}
  article.topic-section {{
    page-break-inside: auto;
  }}
}}
</style>
</head>
<body>
<header class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="index.html">
      <span class="brand-mark">cl</span>
      <span class="brand-name">COSY<em>languages</em> &middot; Grammaire A0&ndash;A1</span>
    </a>
    <nav class="topbar-nav">
      <a class="{"active" if domaine_num==1 else ""}" href="domaine-1.html">Domaine 1</a>
      <a class="{"active" if domaine_num==2 else ""}" href="domaine-2.html">Domaine 2</a>
      <a class="{"active" if domaine_num==3 else ""}" href="domaine-3.html">Domaine 3</a>
      <a class="{"active" if domaine_num==4 else ""}" href="domaine-4.html">Domaine 4</a>
      <a class="{"active" if domaine_num==5 else ""}" href="domaine-5.html">Domaine 5</a>
    </nav>
  </div>
</header>

<main class="container">
  <div class="page-head">
    <span class="eyebrow">Manuel de grammaire française &middot; Domaine {domaine_num}</span>
    <h1>{dom_title} — Édition complète</h1>
    <p class="subtitle">Tous les sujets du domaine rassemblés dans un seul document continu pour la lecture et l'impression.</p>
    <hr class="rule">
  </div>

  <div class="print-controls">
    <div>
      <strong>Mode lecture &amp; impression continue</strong>
    </div>
    <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
      <button class="btn-print" onclick="window.print()">🖨️ Imprimer ce domaine</button>
      <a class="link-back" href="domaine-{domaine_num}.html">📖 Lire page par page plutôt</a>
    </div>
  </div>

  {toc_html}

  {"".join(topic_blocks)}

</main>

<footer class="site">
  <div class="container">
    <div>COSYlanguages &middot; Manuel de grammaire française, Niveau A0&ndash;A1 &middot; édition web interactive</div>
    <div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">&larr; Retour à cosylanguages.github.io</a></div>
  </div>
</footer>

<script src="assets/app.js"></script>
</body>
</html>
'''

    out_path = os.path.join(MANUAL_DIR, f"domaine-{domaine_num}-complet.html")
    with open(out_path, "w", encoding="utf-8") as out_f:
        out_f.write(page_html)
    print(f"Generated {out_path} successfully ({len(page_html)} bytes).")

    # Add entry link to domaine-X.html if not present
    add_entry_link_to_domaine(domaine_num)

def add_entry_link_to_domaine(domaine_num):
    dom_path = os.path.join(MANUAL_DIR, f"domaine-{domaine_num}.html")
    with open(dom_path, "r", encoding="utf-8") as f:
        content = f.read()

    link_html = f'''  <div style="margin-top: 14px;">
    <a href="domaine-{domaine_num}-complet.html" class="theme-pill" style="background: var(--teal-100); color: var(--teal-800); border-color: var(--teal-500); text-decoration: none; font-weight: 700;">
      📖 Domaine {domaine_num} complet (version imprimable / lecture continue) &rarr;
    </a>
  </div>'''

    if f"domaine-{domaine_num}-complet.html" not in content:
        content = content.replace('<hr class="rule">', f'{link_html}\n  <hr class="rule">')
        with open(dom_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Added entry link to {dom_path}")

if __name__ == "__main__":
    for d in range(1, 6):
        generate_domaine_complet(d)
