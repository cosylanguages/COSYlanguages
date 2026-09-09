#!/usr/bin/env python3
"""
Generator script for COSYlanguages French Vocabulary Manuals (Levels A1 through C2).
Parses vocabulary/fr/{A1,A2,B1,B2,C1,C2}/*.js and builds:
 - manuals/fr/vocabulary/index.html (Master French Vocabulary Index)
 - manuals/fr/vocabulary/{level}/index.html (Level Hubs)
 - manuals/fr/vocabulary/{level}/topics/*.html (Topic Pages)
 - manuals/fr/vocabulary/{level}/assets/style.css & app.js
100% Monolingual French.
"""

import os
import json
import subprocess
import glob
import html

def escape_html(text):
    if not text:
        return ""
    return html.escape(str(text))

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
VOCAB_DIR = os.path.join(REPO_ROOT, "vocabulary", "fr")
MANUALS_DIR = os.path.join(REPO_ROOT, "manuals", "fr", "vocabulary")

LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"]

LEVEL_TITLES = {
    "a1": "Niveau A0–A1 · Débutant",
    "a2": "Niveau A2 · Élémentaire",
    "b1": "Niveau B1 · Intermédiaire",
    "b2": "Niveau B2 · Intermédiaire Supérieur",
    "c1": "Niveau C1 · Avancé",
    "c2": "Niveau C2 · Maîtrise / Autonome"
}

LEVEL_DESCS = {
    "a1": "Le vocabulaire essentiel du quotidien : présentations, famille, nourriture, maison, vêtements, ville, transports et activités.",
    "a2": "Le vocabulaire élargi pour décrire des expériences, le travail, les voyages, les projets d'avenir et exprimer des opinions simples.",
    "b1": "Le lexique des sujets d'actualité, du monde du travail, des sentiments, de la culture et du discours argumentatif.",
    "b2": "Un vocabulaire nuancé et technique pour débattre, analyser la société, exprimer des émotions complexes et des registres soutenus.",
    "c1": "Le vocabulaire académique, professionnel et littéraire de haut niveau pour une expression spontanée, souple et précise.",
    "c2": "La maîtrise intégrale du lexique français : idiotismes rares, nuances stylistiques, registres littéraires et figures de style."
}

# Pretty topic titles in French with html entities
TOPIC_TITLES = {
    "adjectives.js": "Les Adjectifs &amp; Qualificatifs",
    "animals.js": "Les Animaux &amp; le Monde Vivant",
    "body.js": "Le Corps Humain &amp; la Santé",
    "clothes.js": "Les Vêtements &amp; la Mode",
    "colours.js": "Les Couleurs &amp; Formes",
    "dishes.js": "Gastronomie &amp; Plats Culinaires",
    "family.js": "La Famille &amp; les Relations",
    "food_drink.js": "Nourriture &amp; Boissons",
    "furniture.js": "La Maison &amp; le Mobilier",
    "grammar_elements.js": "Mots Outils &amp; Connecteurs",
    "greetings.js": "Salutations &amp; Civilités",
    "idioms.js": "Expressions Imagées &amp; Idiotismes",
    "jobs.js": "Métiers &amp; Professions",
    "locations.js": "Lieux, Transports &amp; Orientations",
    "nationalities.js": "Nationalités &amp; Pays",
    "nature.js": "La Nature &amp; l'Environnement",
    "numbers.js": "Nombres &amp; Quantités",
    "people.js": "Description des Personnes",
    "places.js": "La Ville &amp; les Espaces Publics",
    "school.js": "L'École &amp; la Formation",
    "shopping.js": "Achats &amp; Commerce",
    "social.js": "Vie Sociale &amp; Interprétations",
    "technology.js": "Technologies &amp; Médias Numériques",
    "time.js": "Le Temps &amp; le Calendrier",
    "travel.js": "Voyages &amp; Hébergement",
    "verbs.js": "Verbes d'Action &amp; d'État",
    "vocabulary.js": "Vocabulaire Général &amp; Mots Clés"
}

def load_all_vocab_data():
    node_cmd = """
    const fs = require("fs");
    const path = require("path");

    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const result = {};

    levels.forEach(level => {
      const lvlLower = level.toLowerCase();
      result[lvlLower] = {};
      const dir = path.join("vocabulary", "fr", level);
      if (!fs.existsSync(dir)) return;
      const files = fs.readdirSync(dir).filter(f => f.endsWith(".js"));
      files.forEach(f => {
        const filePath = path.join(dir, f);
        const code = fs.readFileSync(filePath, "utf8");
        const window = { vocabularyData: {}, speakingData: {} };
        try {
          eval(code);
          const items = window.vocabularyData.fr || [];
          if (items.length > 0) {
            result[lvlLower][f] = items;
          }
        } catch(e) {
          // ignore
        }
      });
    });

    console.log(JSON.stringify(result));
    """
    res = subprocess.run(["node", "-e", node_cmd], capture_output=True, text=True, cwd=REPO_ROOT)
    if res.returncode != 0:
        raise RuntimeError(f"Error running node script: {res.stderr}")
    return json.loads(res.stdout)

STYLE_CSS = """/* COSYlanguages · Lexique Français */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --teal-900: #0f382c;
  --teal-800: #1c6b54;
  --teal-600: #25a894;
  --teal-100: #e4f5f0;
  --ink: #13231e;
  --ink-soft: #3c544c;
  --paper: #fcfbf7;
  --panel: #ffffff;
  --line: #e3e0d5;
  --mint-bg: #e3f5ef;
  --mint-ink: #0f382c;
  --radius-s: 8px;
  --radius-m: 14px;
  --radius-l: 20px;
  --shadow-card: 0 2px 8px rgba(15,56,44,.06);
}

* { box-sizing: border-box; }
body { margin: 0; background: var(--paper); color: var(--ink); font-family: 'Inter', system-ui, sans-serif; line-height: 1.6; }
a { color: var(--teal-800); text-decoration: none; font-weight: 600; }
.container { max-width: 920px; margin: 0 auto; padding: 0 20px; }

.page-head { padding: 32px 0 16px; }
.eyebrow { display: inline-block; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--teal-800); background: var(--teal-100); padding: 4px 12px; border-radius: 99px; margin-bottom: 12px; }
.page-head h1 { font-family: 'Nunito', sans-serif; font-weight: 900; font-size: clamp(28px, 4vw, 40px); margin: 0 0 6px; }
.subtitle { color: var(--ink-soft); font-size: 18px; margin: 0; font-style: italic; }
.rule { border: none; border-top: 2px solid var(--ink); margin: 16px 0 24px; opacity: .8; }

.vocab-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0; }
.vcard { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 18px; box-shadow: var(--shadow-card); }
.vcard .word-line { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 4px; }
.vcard .word { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 18px; color: var(--teal-900); }
.vcard .emoji { font-size: 20px; }
.vcard .genre { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--teal-800); font-weight: 700; margin-bottom: 6px; }
.vcard .def { font-size: 14px; color: var(--ink); margin-bottom: 6px; }
.vcard .ex { font-size: 14px; color: var(--ink-soft); font-style: italic; background: var(--paper); padding: 6px 10px; border-radius: 6px; border-left: 3px solid var(--teal-600); }

.checklist { background: var(--mint-bg); border: 1px solid #a3e0d3; border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.checklist h3 { margin: 0 0 12px; font-family: 'Nunito', sans-serif; color: var(--mint-ink); font-size: 16px; }
.check-item { display: flex; align-items: center; gap: 10px; padding: 6px 0; cursor: pointer; }

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt { text-align: left; border: 1px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 10px 14px; font-size: 15px; cursor: pointer; width: 100%; }
.qopt.correct { border-color: #16a34a; background: #dcfce7; font-weight: 700; }
.qopt.incorrect { border-color: #ef4444; background: #fef2f2; }
.qexplain { display: none; margin-top: 10px; font-size: 14px; background: var(--teal-100); padding: 10px 14px; border-radius: 6px; }
.qexplain.show { display: block; }

.module-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.mcard { display: block; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; color: var(--ink); box-shadow: var(--shadow-card); }
.mcard h2 { font-family: 'Nunito', sans-serif; font-size: 18px; font-weight: 800; margin: 6px 0; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 40px 0; }
footer.site { background: var(--teal-900); color: #e4f5f0; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

APP_JS = """// COSYlanguages Lexique Français · Interactivité
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-fr-vocab-' + box.getAttribute('data-key');
     var stored = {};
     try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
     var items = box.querySelectorAll('.check-item');
     items.forEach(function(item, i){
       var input = item.querySelector('input');
       if(!input) return;
       input.checked = !!stored[i];
       input.addEventListener('change', function(){
         stored[i] = input.checked;
         try{ localStorage.setItem(key, JSON.stringify(stored)); }catch(e){}
       });
     });
   });
 }

 function initQuizzes(){
   document.querySelectorAll('.quiz-panel').forEach(function(panel){
     var data = [];
     try { data = JSON.parse(panel.getAttribute('data-quiz') || '[]'); } catch(e){}
     var items = panel.querySelectorAll('.qitem');
     var total = items.length;
     var scoreSpan = panel.querySelector('.quiz-score');

     function updateScore(){
       var correctCount = panel.querySelectorAll('.qopt.correct').length;
       if (scoreSpan) scoreSpan.textContent = 'Score: ' + correctCount + ' / ' + total;
     }

     items.forEach(function(item, idx){
       var opts = item.querySelectorAll('.qopt');
       var explain = item.querySelector('.qexplain');
       var targetIndex = data[idx] ? data[idx].correct : 0;

       opts.forEach(function(opt, optIdx){
         opt.addEventListener('click', function(){
           opts.forEach(function(o){ o.disabled = true; });
           if(optIdx === targetIndex){
             opt.classList.add('correct');
           } else {
             opt.classList.add('incorrect');
             opts[targetIndex].classList.add('correct');
           }
           if(explain) explain.classList.add('show');
           updateScore();
         });
       });
     });
   });
 }

 document.addEventListener('DOMContentLoaded', function(){
   initChecklists();
   initQuizzes();
 });
})();
"""

def main():
    print("Loading French vocabulary datasets...")
    vocab_data = load_all_vocab_data()

    os.makedirs(MANUALS_DIR, exist_ok=True)

    # 1. Build Master Index manuals/fr/vocabulary/index.html
    master_index_content = f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lexique Français · Manuels de Vocabulaire · COSYlanguages</title>
<meta name="description" content="Les manuels de vocabulaire français de COSYlanguages pour tous les niveaux du CECRL (A1 à C2).">
<link rel="stylesheet" href="../../css/tokens.css">
<link rel="stylesheet" href="../../css/base.css">
<link rel="stylesheet" href="../../css/components.css">
<link rel="stylesheet" href="../../css/layout.css">
<link rel="stylesheet" href="a1/assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Navigation principale"></nav>

<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="Navigation rapide">
      <a class="sd-jump-link" href="../index.html" style="font-weight: 700;">← Hub Français</a>
    </nav>
  </div>
</header>

<div class="container" style="padding-top: 32px;">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Répertoire de Vocabulaire</span>
    <h1>Manuels de Vocabulaire Français</h1>
    <p class="subtitle">Ensemble complet des manuels thématiques monolingues du niveau A1 au C2.</p>
    <hr class="rule">
  </div>

  <div class="module-grid">
"""
    for lvl in LEVELS:
        topics_count = len(vocab_data.get(lvl, {}))
        word_count = sum(len(items) for items in vocab_data.get(lvl, {}).values())
        master_index_content += f"""    <a class="mcard" href="{lvl}/index.html">
      <h2>{LEVEL_TITLES[lvl]}</h2>
      <p>{LEVEL_DESCS[lvl]}</p>
      <span style="font-size:13px;font-weight:700;color:var(--teal-800);">{topics_count} thèmes · {word_count} mots →</span>
    </a>
"""
    master_index_content += f"""  </div>
</div>

<footer class="site"><div class="container"><div>COSYlanguages · Manuels de Vocabulaire Français</div><div><a href="../../index.html">← Accueil COSYlanguages</a></div></div></footer>
</body>
</html>
"""
    with open(os.path.join(MANUALS_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(master_index_content)

    # 2. Process each level
    for lvl in LEVELS:
        lvl_dir = os.path.join(MANUALS_DIR, lvl)
        topics_dir = os.path.join(lvl_dir, "topics")
        assets_dir = os.path.join(lvl_dir, "assets")
        os.makedirs(topics_dir, exist_ok=True)
        os.makedirs(assets_dir, exist_ok=True)

        with open(os.path.join(assets_dir, "style.css"), "w", encoding="utf-8") as f:
            f.write(STYLE_CSS)
        with open(os.path.join(assets_dir, "app.js"), "w", encoding="utf-8") as f:
            f.write(APP_JS)

        level_files = vocab_data.get(lvl, {})
        sorted_files = sorted(level_files.keys())

        topic_pages = []
        for file_key in sorted_files:
            items = level_files[file_key]
            slug = file_key.replace(".js", "").replace("_", "-")
            topic_filename = f"{slug}.html"
            topic_title = TOPIC_TITLES.get(file_key, escape_html(slug.replace("-", " ").title()))

            topic_pages.append({
                "file_key": file_key,
                "slug": slug,
                "filename": topic_filename,
                "title": topic_title,
                "items": items
            })

        for i, tp in enumerate(topic_pages):
            prev_tp = topic_pages[i-1] if i > 0 else None
            next_tp = topic_pages[i+1] if i < len(topic_pages)-1 else None

            cards_html = ""
            for item in tp["items"]:
                word = item.get("word") or item.get("term") or item.get("text") or ""
                if not word and item.get("article") and item.get("plural"):
                    word = f"{item['article']} {item['plural']}"
                elif not word:
                    word = "Terme"

                emoji = item.get("emoji", "")
                article = item.get("article", "")
                if article and word and not word.startswith(article) and not word.startswith("l'"):
                    word_display = f"{article} {word}"
                else:
                    word_display = word

                form = item.get("form", "") or item.get("pos_section", "") or ""
                defs = item.get("definitions", [])
                def_text = ""
                ex_text = ""
                if defs and isinstance(defs, list) and len(defs) > 0:
                    d0 = defs[0]
                    if isinstance(d0, dict):
                        def_text = d0.get("text", "")
                        exs = d0.get("examples", [])
                        if exs and len(exs) > 0:
                            ex_text = exs[0]
                    elif isinstance(d0, str):
                        def_text = d0

                word_display_esc = escape_html(word_display)
                form_esc = escape_html(form)
                def_text_esc = escape_html(def_text)
                ex_text_esc = escape_html(ex_text)

                emoji_span = f'<span class="emoji">{emoji}</span>' if emoji else ""
                form_div = f'<div class="genre">{form_esc}</div>' if form_esc else ""
                def_p = f'<p class="def">{def_text_esc}</p>' if def_text_esc else ""
                ex_div = f'<div class="ex">« {ex_text_esc} »</div>' if ex_text_esc else ""

                cards_html += f"""    <div class="vcard">
      <div class="word-line"><strong class="word">{word_display_esc}</strong>{emoji_span}</div>
      {form_div}
      {def_p}
      {ex_div}
    </div>
"""

            first_item = tp["items"][0] if tp["items"] else {}
            q_word = first_item.get("word") or first_item.get("term") or first_item.get("text") or "ce mot"
            q_def = ""
            if first_item and first_item.get("definitions"):
                d = first_item["definitions"][0]
                q_def = d.get("text", "") if isinstance(d, dict) else d

            quiz_q = f"Quel est le sens principal ou l'usage de « {q_word} » ?"
            q_opt0 = q_def if q_def else f"Vocabulaire lié à ce thème"
            q_opt1 = "Une forme grammaticale ancienne"
            q_opt2 = "Un terme d'argot médical"

            pager_prev = f'<a class="prev" href="{prev_tp["filename"]}">← {prev_tp["title"]}</a>' if prev_tp else "<span></span>"
            pager_next = f'<a class="next" href="{next_tp["filename"]}">{next_tp["title"]} →</a>' if next_tp else "<span></span>"

            # Clean page title for <title> tag using &amp;
            clean_title = tp['title']
            meta_title = f"{clean_title} · Lexique FR {lvl.upper()}"

            topic_html = f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{meta_title}</title>
<link rel="stylesheet" href="../../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../../css/base.css">
<link rel="stylesheet" href="../../../../../css/components.css">
<link rel="stylesheet" href="../../../../../css/layout.css">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Navigation principale"></nav>

<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="Navigation rapide">
      <a class="sd-jump-link" href="../index.html">← Lexique {lvl.upper()}</a>
      <a class="sd-jump-link" href="../../index.html">Tous les Niveaux</a>
    </nav>
  </div>
</header>

<main class="container">
  <div class="page-head">
    <span class="eyebrow">{LEVEL_TITLES[lvl]}</span>
    <h1>{tp['title']}</h1>
    <p class="subtitle">Vocabulaire thématique et exemples d'usage ({len(tp['items'])} termes).</p>
    <hr class="rule">
  </div>

  <div class="vocab-grid">
{cards_html}  </div>

  <div class="checklist" data-key="{tp['slug']}">
    <h3>🎯 Auto-évaluation &amp; Mémorisation</h3>
    <label class="check-item"><input type="checkbox"><span>Comprendre et utiliser le vocabulaire de {tp['title'].lower()}</span></label>
    <label class="check-item"><input type="checkbox"><span>Reconnaître les termes à l'oral et à l'écrit</span></label>
  </div>

  <div class="quiz-panel" data-quiz='[{{"correct": 0}}]'>
    <div class="quiz-head">
      <h2>Test Rapide</h2>
      <span class="quiz-score">Score: 0 / 1</span>
    </div>
    <div class="qitem">
      <div class="qtext">{escape_html(quiz_q)}</div>
      <div class="qopts">
        <button type="button" class="qopt">{escape_html(q_opt0)}</button>
        <button type="button" class="qopt">{escape_html(q_opt1)}</button>
        <button type="button" class="qopt">{escape_html(q_opt2)}</button>
      </div>
      <div class="qexplain">Exact ! C'est la définition correcte.</div>
    </div>
  </div>

  <div class="pager">
    {pager_prev}
    {pager_next}
  </div>
</main>

<footer class="site"><div class="container"><div>COSYlanguages · Lexique Français ({lvl.upper()})</div><div><a href="../../../../../index.html">← Accueil COSYlanguages</a></div></div></footer>
<script src="../assets/app.js"></script>
</body>
</html>
"""
            with open(os.path.join(topics_dir, tp["filename"]), "w", encoding="utf-8") as f:
                f.write(topic_html)

        # Build level hub manuals/fr/vocabulary/{lvl}/index.html
        level_hub_content = f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lexique Français Niveau {lvl.upper()} · COSYlanguages</title>
<link rel="stylesheet" href="../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../css/base.css">
<link rel="stylesheet" href="../../../../css/components.css">
<link rel="stylesheet" href="../../../../css/layout.css">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Navigation principale"></nav>

<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="Navigation rapide">
      <a class="sd-jump-link" href="../index.html">← Tous les Niveaux</a>
      <a class="sd-jump-link" href="../../francaise-a0-a1.html">Hub Français</a>
    </nav>
  </div>
</header>

<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · {LEVEL_TITLES[lvl]}</span>
    <h1>Lexique Français ({lvl.upper()})</h1>
    <p class="subtitle">{LEVEL_DESCS[lvl]}</p>
    <hr class="rule">
  </div>

  <div class="module-grid">
"""
        for tp in topic_pages:
            level_hub_content += f"""    <a class="mcard" href="topics/{tp['filename']}">
      <h2>{tp['title']}</h2>
      <p>Module thématique contenant {len(tp['items'])} termes essentiels.</p>
      <span style="font-size:12px;font-weight:700;color:var(--teal-800);">{len(tp['items'])} termes →</span>
    </a>
"""

        level_hub_content += f"""  </div>
</main>

<footer class="site"><div class="container"><div>COSYlanguages · Lexique Français ({lvl.upper()}) · Édition Web</div><div><a href="../../../../index.html">← Accueil COSYlanguages</a></div></div></footer>
</body>
</html>
"""
        with open(os.path.join(lvl_dir, "index.html"), "w", encoding="utf-8") as f:
            f.write(level_hub_content)

    print("All French vocabulary manuals built successfully!")

if __name__ == "__main__":
    main()
