#!/usr/bin/env python3
"""
Generator script for COSYlanguages Portuguese Grammar Manual (Level B1) Interactive Web Edition.
Generates manuals/pt/grammar/b1/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/pt/grammar/b1/topics/.
100% Monolingual Portuguese.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/pt/grammar/b1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Manual de Gramática Portuguesa Nível B1 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --green-900: #064e3b;
  --green-800: #065f46;
  --green-700: #047857;
  --green-600: #059669;
  --green-100: #d1fae5;
  --green-050: #ecfdf5;

  --ink: #1f2937;
  --ink-soft: #4b5563;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e5e7eb;

  --grammar-subject: #2563eb;
  --grammar-verb: #16a34a;
  --grammar-object: #d97706;
  --grammar-ending: #9333ea;

  --why-bg: #fef3c7;
  --why-ink: #78350f;

  --native-bg: #f3e8ff;
  --native-ink: #581c87;

  --mistake-bg: #fef2f2;
  --mistake-ink: #991b1b;

  --mint-bg: #dcfce7;
  --mint-ink: #14532d;

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
.topbar-nav a { color: #a7f3d0; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 99px; }
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

.outcome-banner { background: var(--mint-bg); border-left: 4px solid #22c55e; padding: 14px 18px; border-radius: var(--radius-s); margin-bottom: 24px; color: var(--mint-ink); font-weight: 500; }
.box { border-radius: var(--radius-m); padding: 20px; margin: 20px 0; border: 1px solid transparent; }
.box h3 { margin: 0 0 8px; font-family: var(--font-display); font-size: 16.5px; font-weight: 800; }
.box.why { background: var(--why-bg); border-color: #fcd34d; color: var(--why-ink); }
.box.native { background: var(--native-bg); border-color: #d8b4fe; color: var(--native-ink); }
.box.rule-box { background: var(--green-050); border: 1px solid var(--green-100); border-left: 4px solid var(--green-600); }

.table-wrap { overflow-x: auto; margin: 20px 0; border-radius: var(--radius-m); border: 1px solid var(--line); box-shadow: var(--shadow-card); }
table { width: 100%; border-collapse: collapse; background: var(--panel); font-size: 15px; }
thead th { background: var(--green-900); color: #fff; text-align: left; padding: 12px 16px; font-family: var(--font-mono); font-size: 12px; text-transform: uppercase; }
tbody td { padding: 12px 16px; border-bottom: 1px solid var(--line); }

.mistakes { margin: 24px 0; }
.mistakes .m-title { font-family: var(--font-display); font-weight: 800; font-size: 16px; color: var(--mistake-ink); margin-bottom: 12px; }
.mflip { background: var(--mistake-bg); border: 1px solid #fca5a5; border-radius: var(--radius-s); padding: 14px 18px; margin-bottom: 10px; cursor: pointer; }
.mflip .wrong-line { display: flex; gap: 8px; color: var(--mistake-ink); font-size: 15.5px; }
.mflip .wrong-text { text-decoration: line-through; }
.mflip .right-line { display: none; gap: 8px; color: var(--mint-ink); font-weight: 700; margin-top: 8px; padding-top: 8px; border-top: 1px dashed #fca5a5; }
.mflip.flipped .right-line { display: flex; }
.mflip .hint { font-family: var(--font-mono); font-size: 11px; color: #b91c1c; margin-top: 4px; display: block; }
.mflip.flipped .hint { display: none; }

.checklist { background: var(--mint-bg); border: 1px solid #86efac; border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.checklist h3 { margin: 0 0 12px; font-family: var(--font-display); color: var(--mint-ink); font-size: 16px; }
.check-item { display: flex; align-items: center; gap: 10px; padding: 8px 0; cursor: pointer; }

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.quiz-head h2 { font-family: var(--font-display); font-size: 20px; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13px; background: var(--green-100); color: var(--green-800); padding: 4px 12px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt { text-align: left; border: 1px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 10px 14px; font-size: 15px; cursor: pointer; }
.qopt.correct { border-color: #16a34a; background: #dcfce7; font-weight: 700; }
.qopt.incorrect { border-color: #ef4444; background: #fef2f2; }
.qexplain { display: none; margin-top: 10px; font-size: 14px; background: var(--green-050); border-left: 3px solid var(--green-600); padding: 10px 14px; }
.qexplain.show { display: block; }

.parts-grid, .topic-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.part-card, .topic-card { display: block; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; color: var(--ink); box-shadow: var(--shadow-card); transition: transform .15s, box-shadow .15s; }
.part-card:hover, .topic-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-hover); border-color: var(--green-600); }
.part-card h2, .topic-card .ttl { font-family: var(--font-display); font-size: 18px; font-weight: 800; margin: 6px 0; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 40px 0; }
.pager a { flex: 1; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 14px 18px; background: var(--panel); box-shadow: var(--shadow-card); }
footer.site { background: var(--green-900); color: #a7f3d0; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

APP_JS = """// COSYlanguages B1 Gramática Portuguesa · Interatividade
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-pt-b1-' + box.getAttribute('data-key');
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
 function initMistakeFlip(){
   document.querySelectorAll('.mflip').forEach(function(card){
     card.addEventListener('click', function(){ card.classList.toggle('flipped'); });
   });
 }
 function initQuizzes(){
   document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
     var data;
     try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
     var scoreEl = panel.querySelector('.quiz-score');
     var score = 0;
     function refreshScore(){ if(scoreEl) scoreEl.textContent = 'Score: ' + score + ' / ' + data.length; }
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
   initMistakeFlip();
   initQuizzes();
 });
})();
"""

with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
    f.write(APP_JS)

PARTS = [
    {
        "id": "part-1",
        "file": "part-1.html",
        "title": "Parte 1 · O Presente do Subjuntivo & a Opinião",
        "short_title": "Parte 1",
        "subtitle": "Expressar opiniões, dúvidas, desejos e valorações pessoais.",
        "stripe": "#059669",
        "topics": ["presente-do-subjuntivo-opiniao-duvida", "subjuntivo-desejo-e-vontade"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Parte 2 · Estruturar a Argumentação",
        "short_title": "Parte 2",
        "subtitle": "Expressar causa, consequência e conectores de discurso no debate.",
        "stripe": "#16a34a",
        "topics": ["causa-e-consequencia", "conectores-discursivos-e-debate"]
    }
]

TOPICS = {
    "presente-do-subjuntivo-opiniao-duvida": {
        "title": "O Presente do Subjuntivo/Conjuntivo — Opinião e Dúvida",
        "subtitle": "Não acho que... / Duvido que... / É provável que...",
        "part_title": "Parte 1 · O Presente do Subjuntivo & a Opinião",
        "part_file": "part-1.html",
        "cando": "Pode expressar opiniões com matizes de dúvida, probabilidade e incerteza.",
        "one_liner": "O presente do subjuntivo usa-se após verbos de opinião na negativa (não acho que) e expressões de dúvida ou probabilidade (duvido que, é provável que).",
        "why_matters": "É a estrutura essencial do nível B1 em português para enriquecer opiniões e evitar ser categórico em discussões.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Estrutura</th><th>Modo requerido</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td><b>Acho que / Penso que (Afirmativo)</b></td><td>Indicativo</td><td>Acho que o João <b>tem</b> razão.</td></tr>
<tr><td><b>Não acho que / Não penso que (Negativo)</b></td><td>Subjuntivo</td><td>Não acho que o João <b>tenha</b> razão.</td></tr>
<tr><td><b>Duvido que / É provável que</b></td><td>Subjuntivo</td><td>Duvido que eles <b>venham</b> hoje.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Não me parece que esta <span style='color:var(--grammar-verb);'>seja</span> a melhor solução.",
        "notice": "👀 Repare: Para verbos em -AR a vogal temática no subjuntivo é -e ; para -ER/-IR é -a.",
        "think_native": "🧠 Pense em português: O indicativo declara certezas da realidade ; o subjuntivo abre a hipótese e a apreciação mental.",
        "signature_box": "🧩 Regra de ouro: Afirmação = Indicativo. Negação da opinião ou Dúvida = Subjuntivo.",
        "mistakes": [
            {"wrong": "Não acho que ele vem hoje.", "right": "Não acho que ele venha hoje."},
            {"wrong": "Acho que ele venha (com subjuntivo na afirmativa).", "right": "Acho que ele vem (indicativo após afirmativa)."}
        ],
        "mnemonic": "💡 Dica mnemónica: Opinião negativa = ¡Salto para o Subjuntivo !",
        "connects": ["subjuntivo-desejo-e-vontade", "causa-e-consequencia"],
        "checklist": ["Usar o subjuntivo após 'não acho que'", "Manter indicativo após 'acho que' afirmativo"],
        "quiz": [
            {"q": "Qual das frases é correta ?", "opts": ["Não acho que seja necessário.", "Não acho que é necessário.", "Não acho que será necessário."], "correct": 0, "explain": "Após 'não acho que' a regra exige o presente do subjuntivo 'seja'."}
        ]
    },
    "subjuntivo-desejo-e-vontade": {
        "title": "O Subjuntivo com Verbos de Desejo e Vontade",
        "subtitle": "Quero que... / Espero que... / Tomara que...",
        "part_title": "Parte 1 · O Presente do Subjuntivo & a Opinião",
        "part_file": "part-1.html",
        "cando": "Pode expressar desejos, expectativas e pedidos dirigidos a outras pessoas.",
        "one_liner": "Usamos o subjuntivo após verbos de desejo (querer, esperar, desejar) quando o sujeito da oração principal e da subordinada são diferentes.",
        "why_matters": "Indispensável para fazer felicitações, formular pedidos corteses ou expressar expectativas em relação aos outros.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Verbo / Expressão</th><th>Estrutura</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td><b>Espero que</b></td><td>+ Subjuntivo</td><td>Espero que <b>tenhas</b> uma boa viagem.</td></tr>
<tr><td><b>Quero que</b></td><td>+ Subjuntivo</td><td>Quero que nos <b>ajudes</b> hoje.</td></tr>
<tr><td><b>Oxalá / Tomara que</b></td><td>+ Subjuntivo</td><td>Tomara que <b>faça</b> bom tempo.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Espero que tudo <span style='color:var(--grammar-subject);'>nos</span> <span style='color:var(--grammar-verb);'>corra</span> bem.",
        "notice": "👀 Repare: Se o sujeito for o mesmo nas duas orações, usa-se o infinitivo (Espero ter tempo / Espero que tenhas tempo).",
        "think_native": "🧠 Pense em português: O desejo projeta uma intenção para outra pessoa, por isso exige o subjuntivo.",
        "signature_box": "🧩 Regra de ouro: Mesmo sujeito = Infinitivo (Quero viajar). Sujeitos diferentes = Subjuntivo (Quero que viajes).",
        "mistakes": [
            {"wrong": "Espero que tu vens cedo.", "right": "Espero que tu venhas cedo."},
            {"wrong": "Quero que eu vá ao cinema.", "right": "Quero ir ao cinema."}
        ],
        "mnemonic": "💡 Dica mnemónica: Desejos para os outros = sempre Subjuntivo !",
        "connects": ["presente-do-subjuntivo-opiniao-duvida", "conectores-discursivos-e-debate"],
        "checklist": ["Usar espero que + subjuntivo para saudações", "Distinguir estrutura de sujeito único com infinitivo"],
        "quiz": [
            {"q": "Completa: 'Espero que vocês ____ (fazer) uma boa viagem.'", "opts": ["façam", "fazem", "farão"], "correct": 0, "explain": "'Espero que' exige o presente do subjuntivo de fazer para vocês: 'façam'."}
        ]
    },
    "causa-e-consequencia": {
        "title": "A Causa e a Consequência no Discurso",
        "subtitle": "Porque / Como / Já que vs Por isso / Portanto",
        "part_title": "Parte 2 · Estruturar a Argumentação",
        "part_file": "part-2.html",
        "cando": "Pode explicar razões e consequências de um facto com fluidez.",
        "one_liner": "Para a causa usa-se porque, como (no início da frase), já que ; para a consequência por isso, portanto, de modo que.",
        "why_matters": "Permite articular explicações lógicas e justificar decisões no discurso de nível B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Relação</th><th>Conetor</th><th>Posição</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td><b>Causa no início</b></td><td>Como / Já que</td><td>Início da frase</td><td><b>Como</b> chovia, não saímos.</td></tr>
<tr><td><b>Causa no meio</b></td><td>Porque / Dado que</td><td>No meio da frase</td><td>Não saímos <b>porque</b> chovia.</td></tr>
<tr><td><b>Consequência</b></td><td>Por isso / Portanto</td><td>Resultado lógico</td><td>Tenho teste, <b>por isso</b> vou estudar.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-verb);'>Como</span> estava frio, <span style='color:var(--grammar-verb);'>ficámos</span> em casa.",
        "notice": "👀 Repare: 'Como' causativo coloca-se SEMPRE no início da frase.",
        "think_native": "🧠 Pense em português: 'Portanto' é mais formal ; 'por isso' é extremamente comum na linguagem falada.",
        "signature_box": "🧩 Regra de ouro: Causa à cabeça = Como. Causa a meio = Porque.",
        "mistakes": [
            {"wrong": "Porque chovia, não saímos. (no início)", "right": "Como chovia, não saímos."},
            {"wrong": "Como chovia por isso não saímos.", "right": "Como chovia, não saímos."}
        ],
        "mnemonic": "💡 Dica mnemónica: Como abre a frase, Porque explica no meio !",
        "connects": ["conectores-discursivos-e-debate"],
        "checklist": ["Usar 'como' causativo no início da frase", "Expressar consequências com 'por isso' e 'portanto'"],
        "quiz": [
            {"q": "Qual o conetor correto no início da frase ?", "opts": ["Como", "Porque", "Portanto"], "correct": 0, "explain": "No início da oração para indicar causa usa-se 'Como'."}
        ]
    },
    "conectores-discursivos-e-debate": {
        "title": "Conetores Discursivos para o Debate",
        "subtitle": "Em primeiro lugar / Além disso / No entanto / Por outro lado",
        "part_title": "Parte 2 · Estruturar a Argumentação",
        "part_file": "part-2.html",
        "cando": "Pode organizar uma intervenção estruturando argumentos a favor e contra com clareza.",
        "one_liner": "Os conetores discursivos organizam as ideias por ordem (em primeiro lugar), adicionam elementos (além disso) ou matizam posições (no entanto, por outro lado).",
        "why_matters": "É a ferramenta fundamental para intervir em discussões de opinião e apresentações no nível B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Função</th><th>Conetores chave</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td><b>Ordem</b></td><td>Em primeiro lugar, em seguida, finalmente</td><td><b>Em primeiro lugar</b> vejamos os factos...</td></tr>
<tr><td><b>Adição</b></td><td>Além disso, ademais, por outro lado</td><td>É prático ; <b>além disso</b>, é económico.</td></tr>
<tr><td><b>Contraste</b></td><td>No entanto, porém, contudo</td><td>É difícil ; <b>no entanto</b>, é possível.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-verb);'>Por um lado</span> é útil, <span style='color:var(--grammar-verb);'>por outro lado</span> é dispendioso.",
        "notice": "👀 Repare: 'No entanto', 'porém' e 'contudo' introduzem oposição moderada elegante.",
        "think_native": "🧠 Pense em português: Os conetores ordenam o debate como os sinais de trânsito na estrada.",
        "signature_box": "🧩 Regra de ouro: Ordena (Em primeiro lugar) ➔ Adiciona (Além disso) ➔ Matiza (No entanto) ➔ Conclui (Em conclusão).",
        "mistakes": [
            {"wrong": "Além disso que é barato...", "right": "Além disso, é barato..."},
            {"wrong": "No entanto de que não vem...", "right": "No entanto, não vem..."}
        ],
        "mnemonic": "💡 Dica mnemónica: Ordena com Primeiro, adiciona com Além disso, matiza com No entanto !",
        "connects": ["causa-e-consequencia", "presente-do-subjuntivo-opiniao-duvida"],
        "checklist": ["Organizar uma intervenção em três etapas", "Usar 'no entanto' para introduzir ressalvas"],
        "quiz": [
            {"q": "Qual o conetor que introduz um contraste ?", "opts": ["No entanto", "Além disso", "Portanto"], "correct": 0, "explain": "'No entanto' exprime oposição ou ressalva num argumento."}
        ]
    }
}

def render_topbar(active_part_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    hub_link = "../../../../portugues-b1.html" if is_topic else "../../../portugues-b1.html"
    nav_links = [f'<a href="{hub_link}">← Hub Português B1</a>']
    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Gramática B1</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Manual de Gramática Portuguesa (B1) · Edição Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Voltar ao início COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building Portuguese B1 Grammar Manual...")
    topic_slugs = list(TOPICS.keys())

    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_slug = topic_slugs[idx - 1] if idx > 0 else None
        next_slug = topic_slugs[idx + 1] if idx < len(topic_slugs) - 1 else None

        prev_link = f'<a class="prev" href="{prev_slug}.html">← {TOPICS[prev_slug]["title"]}</a>' if prev_slug else '<span></span>'
        next_link = f'<a class="next" href="{next_slug}.html">{TOPICS[next_slug]["title"]} →</a>' if next_slug else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        m_items = []
        for m in top["mistakes"]:
            m_items.append(f'''<div class="mflip"><div class="wrong-line">❌ <span class="wrong-text">{m["wrong"]}</span></div><span class="hint">clique para revelar a forma correta</span><div class="right-line">✅ <span>{m["right"]}</span></div></div>''')
        mistakes_html = f'<div class="mistakes"><div class="m-title">⚠️ Erros frequentes</div>{"".join(m_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 Já consegue usar esta estrutura ?</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Diagnóstico e Quiz</h2><span class="quiz-score">Score: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        connects_lis = "".join([f'<li><a href="{c}.html">{TOPICS[c]["title"]}</a></li>' for c in top["connects"] if c in TOPICS])
        connects_html = f'<div class="box rule-box"><h3>🔗 Em ligação com...</h3><ul>{connects_lis}</ul></div>' if connects_lis else ''

        page_html = f'''<!doctype html>
<html lang="pt">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Gramática Portuguesa B1</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">{top["part_title"]}</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
    <hr class="rule">
  </div>
  <div class="outcome-banner">🎯 <strong>Objetivo de comunicação :</strong> {top["cando"]}</div>
  <p><strong>Em resumo :</strong> {top["one_liner"]}</p>
  <div class="box why"><h3>Por que razão é importante ?</h3><p>{top["why_matters"]}</p></div>
  {top["visual_diagram"]}
  <div class="box rule-box"><h3>Exemplo a cores</h3><p>{top["example_code"]}</p></div>
  <p>{top["notice"]}</p>
  <div class="box native"><h3>{top["think_native"]}</h3></div>
  <div class="box rule-box"><h3>{top["signature_box"]}</h3></div>
  {mistakes_html}
  <div class="box why"><h3>{top["mnemonic"]}</h3></div>
  {connects_html}
  {check_html}
  <div class="outcome-banner">🎉 <strong>Parabéns !</strong> Já domina esta estrutura essencial do nível B1.</div>
  {quiz_html}
  {pager_html}
</main>
{render_footer()}
<script src="../assets/app.js"></script>
</body>
</html>'''

        with open(os.path.join(TOPICS_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
            f.write(page_html)

    for p in PARTS:
        cards = []
        for slug in p["topics"]:
            top = TOPICS[slug]
            cards.append(f'''<a class="topic-card" href="topics/{slug}.html"><div class="ttl">{top["title"]}</div><div class="sub">{top["subtitle"]}</div></a>''')

        part_html = f'''<!doctype html>
<html lang="pt">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]} · COSYlanguages B1</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(active_part_id=p["id"], is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Parte</span>
    <h1>{p["title"]}</h1>
    <p class="subtitle">{p["subtitle"]}</p>
    <hr class="rule">
  </div>
  <div class="topic-grid">{"".join(cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

        with open(os.path.join(BASE_DIR, p["file"]), "w", encoding="utf-8") as f:
            f.write(part_html)

    index_cards = []
    for p in PARTS:
        index_cards.append(f'''<a class="part-card" href="{p["file"]}"><div style="height:4px;background:{p["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{p["title"]}</h2><p>{p["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--green-700);">{len(p["topics"])} temas →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="pt">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Gramática Portuguesa Nível B1 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Nível B1</span>
    <h1>Gramática Portuguesa (B1)</h1>
    <p class="subtitle">Manual interativo monolíngue de gramática portuguesa nível intermédio (B1).</p>
    <hr class="rule">
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Portuguese B1 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()
