#!/usr/bin/env python3
"""
Generator script for COSYlanguages Portuguese Vocabulary Manual (Level A2) Interactive Web Edition.
Generates manuals/pt/vocabulary/a2/index.html, module-N.html chapter hubs, assets, and topic HTML pages in manuals/pt/vocabulary/a2/topics/.
100% Monolingual Portuguese.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/pt/vocabulary/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Manual de Vocabulário Português Nível A2 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --green-900: #064e3b;
  --green-800: #065f46;
  --green-700: #047857;
  --green-600: #059669;
  --green-100: #d1fae5;
  --green-050: #ecfdf5;

  --ink: #111827;
  --ink-soft: #374151;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e5e7eb;

  --radius-s: 8px;
  --radius-m: 14px;
  --radius-l: 20px;
  --shadow-card: 0 2px 8px rgba(6,78,59,.06);
  --shadow-hover: 0 8px 24px rgba(6,78,59,.12);

  --font-display: 'Nunito', 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

* { box-sizing: border-box; }
body {
  margin: 0; background: var(--paper); color: var(--ink);
  font-family: var(--font-body); line-height: 1.65; font-size: 16px;
}
a { color: var(--green-700); text-decoration: none; transition: color .15s ease; }
a:hover { color: var(--green-900); }

.container { max-width: 920px; margin: 0 auto; padding: 0 20px; }

.topbar {
  position: sticky; top: 0; z-index: 50; background: var(--green-900);
  color: #fff; border-bottom: 1px solid rgba(255,255,255,.1);
}
.topbar-inner {
  max-width: 1100px; margin: 0 auto; padding: 12px 20px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
}
.brand { display: flex; align-items: center; gap: 10px; color: #fff; font-weight: 800; font-family: var(--font-display); }
.brand-mark { background: #fff; color: var(--green-900); width: 30px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-style: italic; }
.topbar-nav { display: flex; gap: 8px; }
.topbar-nav a { color: #d1fae5; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 99px; }
.topbar-nav a:hover, .topbar-nav a.active { background: rgba(255,255,255,.18); color: #fff; }

.page-head { padding: 32px 0 16px; }
.eyebrow {
  display: inline-block; font-family: var(--font-mono); font-size: 12px; font-weight: 700;
  text-transform: uppercase; color: var(--green-700); background: var(--green-100);
  padding: 4px 12px; border-radius: 99px; margin-bottom: 12px;
}
.page-head h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(28px, 4vw, 40px); margin: 0 0 6px; }
.subtitle { color: var(--ink-soft); font-size: 18px; margin: 0; font-style: italic; }
.rule { border: none; border-top: 2px solid var(--ink); margin: 16px 0 24px; opacity: .8; }

.outcome-banner { background: var(--green-100); border-left: 4px solid var(--green-600); padding: 14px 18px; border-radius: var(--radius-s); margin-bottom: 24px; color: var(--green-900); font-weight: 500; }

.vocab-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.flashcard { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; box-shadow: var(--shadow-card); position: relative; }
.flashcard .term { font-family: var(--font-display); font-size: 20px; font-weight: 800; color: var(--green-900); margin-bottom: 4px; }
.flashcard .tag { display: inline-block; font-family: var(--font-mono); font-size: 11px; background: var(--green-050); color: var(--green-700); padding: 2px 8px; border-radius: 4px; margin-bottom: 12px; }
.flashcard .def { font-size: 15px; color: var(--ink); margin-bottom: 10px; font-weight: 500; }
.flashcard .ex { font-size: 14px; color: var(--ink-soft); font-style: italic; border-left: 2px solid var(--green-600); padding-left: 10px; }

.checklist { background: var(--green-050); border: 1px solid var(--green-100); border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.checklist h3 { margin: 0 0 12px; font-family: var(--font-display); color: var(--green-900); font-size: 16px; }
.check-item { display: flex; align-items: center; gap: 10px; padding: 8px 0; cursor: pointer; }
.check-item input { width: 18px; height: 18px; accent-color: var(--green-700); }

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.quiz-head h2 { font-family: var(--font-display); font-size: 20px; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13px; background: var(--green-100); color: var(--green-900); padding: 4px 12px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
.qitem .qtext { font-family: var(--font-display); font-weight: 800; margin-bottom: 12px; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt { text-align: left; border: 1px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 10px 14px; font-size: 15px; cursor: pointer; }
.qopt.correct { border-color: #16a34a; background: #dcfce7; font-weight: 700; }
.qopt.incorrect { border-color: #ef4444; background: #fef2f2; }
.qexplain { display: none; margin-top: 10px; font-size: 14px; background: var(--green-050); border-left: 3px solid var(--green-600); padding: 10px 14px; }
.qexplain.show { display: block; }

.module-grid, .topic-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.module-card, .topic-card { display: block; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; color: var(--ink); box-shadow: var(--shadow-card); transition: transform .15s, box-shadow .15s; }
.module-card:hover, .topic-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-hover); border-color: var(--green-600); }
.module-card h2, .topic-card .ttl { font-family: var(--font-display); font-size: 18px; font-weight: 800; margin: 6px 0; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 40px 0; }
.pager a { flex: 1; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 14px 18px; background: var(--panel); box-shadow: var(--shadow-card); }
footer.site { background: var(--green-900); color: #d1fae5; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

APP_JS = """// COSYlanguages A2 Vocabulário Português · Motor de Interatividade
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-pt-vocab-a2-' + box.getAttribute('data-key');
     var stored = {};
     try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
     var items = box.querySelectorAll('.check-item');
     items.forEach(function(item, i){
       var input = item.querySelector('input');
       if(stored[i]){ item.classList.add('done'); input.checked = true; }
       item.addEventListener('click', function(e){
         if(e.target !== input){ input.checked = !input.checked; }
         item.classList.toggle('done', input.checked);
         stored[i] = input.checked;
         localStorage.setItem(key, JSON.stringify(stored));
       });
     });
   });
 }
 function initQuizzes(){
   document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
     var data;
     try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
     var scoreEl = panel.querySelector('.quiz-score');
     var score = 0;
     function refreshScore(){ if(scoreEl) scoreEl.textContent = 'Pontuação: ' + score + ' / ' + data.length; }
     panel.querySelectorAll('.qitem').forEach(function(qEl, qi){
       var opts = qEl.querySelectorAll('.qopt');
       var explain = qEl.querySelector('.qexplain');
       var qLocked = false;
       opts.forEach(function(optEl, oi){
         optEl.addEventListener('click', function(){
           if(qLocked) return;
           qLocked = true;
           var correctIdx = data[qi].correct;
           opts.forEach(function(o, idx){
             o.disabled = true;
             if(idx === correctIdx) o.classList.add('correct');
             else if(idx === oi) o.classList.add('incorrect');
           });
           if(oi === correctIdx) score++;
           refreshScore();
           if(explain) explain.classList.add('show');
         });
       });
     });
     refreshScore();
   });
 }
 document.addEventListener('DOMContentLoaded', function(){
   initChecklists();
   initQuizzes();
 });
})();
"""

with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
    f.write(APP_JS)

MODULES = [
    {
        "id": "module-1",
        "file": "module-1.html",
        "title": "Módulo 1 · Vida Quotidiana & Viagens",
        "short_title": "Módulo 1",
        "subtitle": "Rotinas diárias, memórias de infância, transporte e alojamento.",
        "stripe": "#059669",
        "topics": ["a-rotina-e-as-memorias", "as-viagens-e-os-transportes"]
    },
    {
        "id": "module-2",
        "file": "module-2.html",
        "title": "Módulo 2 · Trabalho & Saúde",
        "short_title": "Módulo 2",
        "subtitle": "O mundo do trabalho, entrevistas, saúde e farmácia.",
        "stripe": "#047857",
        "topics": ["o-trabalho-e-as-profissoes", "a-saude-e-as-compras"]
    }
]

TOPICS = {
    "a-rotina-e-as-memorias": {
        "title": "A Rotina e as Memórias de Infância",
        "subtitle": "Léxico fundamental para descrever hábitos passados e momentos em família",
        "module_title": "Módulo 1 · Vida Quotidiana & Viagens",
        "module_file": "module-1.html",
        "cando": "Consegue descrever costumes da infância e hábitos de rotina do passado.",
        "cards": [
            {"term": "o costume (m.)", "tag": "Substantivo", "def": "Hábito ou prática habitual da vida.", "ex": "Quando era criança tinha o costume de ler antes de dormir."},
            {"term": "a lembrança (f.) / a memória (f.)", "tag": "Substantivo", "def": "Recordação de um momento do passado.", "ex": "Tenho uma ótima lembrança do meu primeiro dia de escola."},
            {"term": "levantar-se (v. refl.)", "tag": "Verbo", "def": "Sair da cama de manhã.", "ex": "Eu levantava-me sempre às sete horas da manhã."},
            {"term": "a infância (f.)", "tag": "Substantivo", "def": "O primeiro período da vida até à adolescência.", "ex": "Passei a minha infância numa aldeia tranquila."}
        ],
        "checklist": ["Expresar hábitos e rotinas do passado", "Contar lembranças de infância"],
        "quiz": [
            {"q": "Qual é a palavra para 'recordação de um evento passado'?", "opts": ["A lembrança", "O costume", " A viagem"], "correct": 0, "explain": "'A lembrança' significa memória de um acontecimento passado."}
        ]
    },
    "as-viagens-e-os-transportes": {
        "title": "As Viagens e os Transportes",
        "subtitle": "Palavras-chave para reservar hotéis, bilhetes e deslocações",
        "module_title": "Módulo 1 · Vida Quotidiana & Viagens",
        "module_file": "module-1.html",
        "cando": "Consegue reservar alojamentos e bilhetes de comboio ou autocarro.",
        "cards": [
            {"term": "a reserva (f.)", "tag": "Substantivo", "def": "Ato de assegurar previamente um quarto ou lugar.", "ex": "Fiz a reserva do hotel pela internet."},
            {"term": "o bilhete de ida e volta (m.)", "tag": "Substantivo", "def": "Título de transporte para dois trajetos.", "ex": "Queria um bilhete de ida e volta para Coimbra, por favor."},
            {"term": "o transbordo (m.)", "tag": "Substantivo", "def": "Mudança de comboio ou transporte numa estação.", "ex": "Temos de fazer transbordo na estação da Campanhã."},
            {"term": "a bagagem de mão (f.)", "tag": "Substantivo", "def": "Mala pequena permitida a bordo.", "ex": "Levamos apenas bagagem de mão para este voo."}
        ],
        "checklist": ["Comprar um bilhete de comboio ou autocarro", "Confirmar uma reserva de hotel"],
        "quiz": [
            {"q": "Como se chama a mudança de comboio numa estação intermediária?", "opts": ["O transbordo", "A reserva", "A lembrança"], "correct": 0, "explain": "'O transbordo' é a troca de um meio de transporte para outro."}
        ]
    },
    "o-trabalho-e-as-profissoes": {
        "title": "O Trabalho e as Profissões",
        "subtitle": "Vocabulário útil para falar do emprego, reuniões e entrevistas de trabalho",
        "module_title": "Módulo 2 · Trabalho & Saúde",
        "module_file": "module-2.html",
        "cando": "Consegue apresentar o seu trabalho e relatar tarefas de escritório.",
        "cards": [
            {"term": "a entrevista de emprego (f.)", "tag": "Substantivo", "def": "Reunião para seleção de candidatos a um cargo.", "ex": "Amanhã tenho uma entrevista de emprego de manhã."},
            {"term": "o currículo (m.)", "tag": "Substantivo", "def": "Documento com percurso académico e profissional.", "ex": "Atualizei o meu currículo e enviei para a empresa."},
            {"term": "o salário (m.) / o vencimento (m.)", "tag": "Substantivo", "def": "Remuneração mensal recebida pelo trabalho.", "ex": "O salário é pago no último dia útil do mês."},
            {"term": "a reunião (f.)", "tag": "Substantivo", "def": "Encontro de colaboradores para tratar projetos.", "ex": "A reunião da equipa começa às dez horas."}
        ],
        "checklist": ["Apresentar a sua profissão e currículo", "Descrever tarefas do dia a dia no emprego"],
        "quiz": [
            {"q": "Como se chama o documento que resume os seus estudos e trabalho?", "opts": ["O currículo", "A reserva", "O transbordo"], "correct": 0, "explain": "O currículo detalha a formação e experiência laboral."}
        ]
    },
    "a-saude-e-as-compras": {
        "title": "A Saúde e os Serviços",
        "subtitle": "Vocabulário básico para ir ao médico e comprar medicamentos na farmácia",
        "module_title": "Módulo 2 · Trabalho & Saúde",
        "module_file": "module-2.html",
        "cando": "Consegue explicar sintomas simples no médico e pedir remédios na farmácia.",
        "cards": [
            {"term": "a dor de cabeça (f.)", "tag": "Substantivo", "def": "Sensação dolorosa na cabeça.", "ex": "Tenho uma forte dor de cabeça desde ontem."},
            {"term": "a receita médica (f.)", "tag": "Substantivo", "def": "Prescrição escrita pelo doutor para remédios.", "ex": "Preciso da receita médica para comprar este antibiótico."},
            {"term": "o medicamento (m.) / o remédio (m.)", "tag": "Substantivo", "def": "Substância para tratar uma doença.", "ex": "Tomo este medicamento duas vezes por dia."},
            {"term": "a consulta médica (f.)", "tag": "Substantivo", "def": "Encontro com o médico para avaliação de saúde.", "ex": "Marquei uma consulta médica para a próxima semana."}
        ],
        "checklist": ["Explicar um problema de saúde simples no médico", "Pedir um medicamento na farmácia"],
        "quiz": [
            {"q": "O que passa o médico para podermos comprar certos medicamentos?", "opts": ["A receita médica", "O currículo", "O transbordo"], "correct": 0, "explain": "A receita médica é a autorização formal do doutor."}
        ]
    }
}

def render_topbar(active_mod_id=None, is_topic=False):
    hub_link = "../../../../portugues-a2.html" if is_topic else "../../../portugues-a2.html"
    rel_prefix = "../" if is_topic else ""
    nav_links = [f'<a href="{hub_link}">← Hub Português A2</a>']
    for m in MODULES:
        act = 'class="active"' if active_mod_id == m["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{m["file"]}">{m["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Vocabulário A2</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Manual de Vocabulário Português (A2) · Edição Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Voltar ao início COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building Portuguese A2 Vocabulary Manual...")
    topic_slugs = list(TOPICS.keys())

    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_slug = topic_slugs[idx - 1] if idx > 0 else None
        next_slug = topic_slugs[idx + 1] if idx < len(topic_slugs) - 1 else None

        prev_link = f'<a class="prev" href="{prev_slug}.html">← {TOPICS[prev_slug]["title"]}</a>' if prev_slug else '<span></span>'
        next_link = f'<a class="next" href="{next_slug}.html">{TOPICS[next_slug]["title"]} →</a>' if next_slug else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        card_items = []
        for c in top["cards"]:
            card_items.append(f'''<div class="flashcard"><div class="term">{c["term"]}</div><span class="tag">{c["tag"]}</span><div class="def">{c["def"]}</div><div class="ex">"{c["ex"]}"</div></div>''')
        cards_html = f'<div class="vocab-grid">{"".join(card_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 Já conheces estas palavras?</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Verificação Lexical</h2><span class="quiz-score">Pontuação: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        page_html = f'''<!doctype html>
<html lang="pt">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Vocabulário Português A2</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">{top["module_title"]}</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
    <hr class="rule">
  </div>
  <div class="outcome-banner">🎯 <strong>Objetivo de vocabulário:</strong> {top["cando"]}</div>
  {cards_html}
  {check_html}
  {quiz_html}
  {pager_html}
</main>
{render_footer()}
<script src="../assets/app.js"></script>
</body>
</html>'''

        with open(os.path.join(TOPICS_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
            f.write(page_html)

    for m in MODULES:
        cards = []
        for slug in m["topics"]:
            top = TOPICS[slug]
            cards.append(f'''<a class="topic-card" href="topics/{slug}.html"><div class="ttl">{top["title"]}</div><div class="sub">{top["subtitle"]}</div></a>''')

        mod_html = f'''<!doctype html>
<html lang="pt">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{m["title"]} · COSYlanguages A2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(active_mod_id=m["id"], is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Módulo</span>
    <h1>{m["title"]}</h1>
    <p class="subtitle">{m["subtitle"]}</p>
    <hr class="rule">
  </div>
  <div class="topic-grid">{"".join(cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

        with open(os.path.join(BASE_DIR, m["file"]), "w", encoding="utf-8") as f:
            f.write(mod_html)

    index_cards = []
    for m in MODULES:
        index_cards.append(f'''<a class="module-card" href="{m["file"]}"><div style="height:4px;background:{m["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{m["title"]}</h2><p>{m["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--green-700);">{len(m["topics"])} temas →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="pt">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Vocabulário Português Nível A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Nível A2</span>
    <h1>Vocabulário Português (A2)</h1>
    <p class="subtitle">Manual interativo monolíngue de vocabulário português nível elementar (A2).</p>
    <hr class="rule">
  </div>
  <div class="module-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Portuguese A2 Vocabulary Manual generated successfully!")

if __name__ == "__main__":
    build_all()
