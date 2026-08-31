#!/usr/bin/env python3
"""
Generator script for COSYlanguages Breton Grammar & Vocab Manuals (Level A2).
Generates manuals/br/grammar/a2 and manuals/br/vocabulary/a2.
"""
import os

def create_manual(lang_code, name, hero_title, topics_data):
    base_g = f"manuals/{lang_code}/grammar/a2"
    base_v = f"manuals/{lang_code}/vocabulary/a2"
    os.makedirs(f"{base_g}/topics", exist_ok=True)
    os.makedirs(f"{base_g}/assets", exist_ok=True)
    os.makedirs(f"{base_v}/topics", exist_ok=True)
    os.makedirs(f"{base_v}/assets", exist_ok=True)

    style = """body { font-family: system-ui, sans-serif; background: #faf8f5; color: #1f2937; margin: 0; padding: 20px; }
.container { max-width: 800px; margin: 0 auto; background: #fff; padding: 24px; border-radius: 12px; border: 1px solid #e5e7eb; }
h1 { color: #111827; } a { color: #2563eb; font-weight: bold; text-decoration: none; }"""
    with open(f"{base_g}/assets/style.css", "w") as f: f.write(style)
    with open(f"{base_v}/assets/style.css", "w") as f: f.write(style)

    # Grammar Topic & Index
    g_topic_links = []
    for slug, title, content in topics_data["g"]:
        g_topic_links.append(f'<li><a href="topics/{slug}.html">{title}</a></li>')
        html = f'<!doctype html><html lang="{lang_code}"><head><meta charset="utf-8"><title>{title}</title><link rel="stylesheet" href="../assets/style.css"></head><body><div class="container"><a href="../index.html">← {name} A2</a><h1>{title}</h1><p>{content}</p></div></body></html>'
        with open(f"{base_g}/topics/{slug}.html", "w") as f: f.write(html)

    g_part_html = f'<!doctype html><html lang="{lang_code}"><head><meta charset="utf-8"><title>{name} A2</title><link rel="stylesheet" href="assets/style.css"></head><body><div class="container"><a href="../../index.html">← Hub</a><h1>{hero_title} (Grammar A2)</h1><ul>{"".join(g_topic_links)}</ul></div></body></html>'
    with open(f"{base_g}/index.html", "w") as f: f.write(g_part_html)
    with open(f"{base_g}/part-1.html", "w") as f: f.write(g_part_html)

    # Vocab Topic & Index
    v_topic_links = []
    for slug, title, content in topics_data["v"]:
        v_topic_links.append(f'<li><a href="topics/{slug}.html">{title}</a></li>')
        html = f'<!doctype html><html lang="{lang_code}"><head><meta charset="utf-8"><title>{title}</title><link rel="stylesheet" href="../assets/style.css"></head><body><div class="container"><a href="../index.html">← {name} A2</a><h1>{title}</h1><p>{content}</p></div></body></html>'
        with open(f"{base_v}/topics/{slug}.html", "w") as f: f.write(html)

    v_part_html = f'<!doctype html><html lang="{lang_code}"><head><meta charset="utf-8"><title>{name} A2</title><link rel="stylesheet" href="assets/style.css"></head><body><div class="container"><a href="../../index.html">← Hub</a><h1>{hero_title} (Vocabulary A2)</h1><ul>{"".join(v_topic_links)}</ul></div></body></html>'
    with open(f"{base_v}/index.html", "w") as f: f.write(v_part_html)
    with open(f"{base_v}/module-1.html", "w") as f: f.write(v_part_html)

    print(f"Generated {name} A2 Manuals!")

if __name__ == "__main__":
    create_manual("br", "Brezhoneg", "Yezhadur ha Geriaoueg Brezhoneg", {
        "g": [
            ("kemmaduriou-kemmesket", "Kemmadurioù kemmesket", "A2 Breton mixed mutations and verbal particle governance."),
            ("amzer-dremen-kevrennek", "An amzer-dremen gevrennek", "Compound past tense with kaout and bezañ.")
        ],
        "v": [
            ("micherioù-ha-labour", "Ar micherioù hag al labour", "Professions, career paths, and workplace routines."),
            ("beajoù-ha-treuzdougen", "Ar beajoù hag an treuzdougen", "Travel, public transport, and tickets.")
        ]
    })
