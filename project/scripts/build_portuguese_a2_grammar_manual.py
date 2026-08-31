#!/usr/bin/env python3
"""
Generator script for COSYlanguages Portuguese Grammar Manual (Level A2) Interactive Web Edition.
Generates manuals/pt/grammar/a2/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/pt/grammar/a2/topics/.
100% Monolingual Portuguese.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/pt/grammar/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Manual de Gramática Portuguesa Nível A2 */
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

  --grammar-subject: #2563eb;
  --grammar-verb: #16a34a;
  --grammar-object: #d97706;
  --grammar-ending: #9333ea;
  --grammar-error: #dc2626;

  --why-bg: #fef3c7;
  --why-line: #f59e0b;
  --why-ink: #78350f;

  --native-bg: #f3e8ff;
  --native-line: #a855f7;
  --native-ink: #581c87;

  --mistake-bg: #fef2f2;
  --mistake-line: #ef4444;
  --mistake-ink: #991b1b;

  --mint-bg: #dcfce7;
  --mint-line: #22c55e;
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

.outcome-banner { background: var(--mint-bg); border-left: 4px solid var(--mint-line); padding: 14px 18px; border-radius: var(--radius-s); margin-bottom: 24px; color: var(--mint-ink); font-weight: 500; }
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
.check-item input { width: 18px; height: 18px; accent-color: var(--green-700); }

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.quiz-head h2 { font-family: var(--font-display); font-size: 20px; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13px; background: var(--green-100); color: var(--green-800); padding: 4px 12px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
.qitem .qtext { font-family: var(--font-display); font-weight: 800; margin-bottom: 12px; }
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
footer.site { background: var(--green-900); color: #d1fae5; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

APP_JS = """// COSYlanguages A2 Gramática Portuguesa · Motor de Interatividade
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-pt-a2-' + box.getAttribute('data-key');
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
        "title": "Parte 1 · A Narrativa no Passado",
        "short_title": "Parte 1",
        "subtitle": "Pretérito perfeito simples, imperfeito do indicativo e alternância de tempos.",
        "stripe": "#059669",
        "topics": ["preterito-perfeito-composto", "preterito-imperfeito-do-indicativo", "perfeito-vs-imperfeito"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Parte 2 · Futuro & Condicional",
        "short_title": "Parte 2",
        "subtitle": "Futuro com ir e futuro simples, condicional de cortesia e hipóteses.",
        "stripe": "#16a34a",
        "topics": ["futuro-do-presente-e-ir", "condicional-simples-cortesia", "se-presente-futuro"]
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "title": "Parte 3 · Pronomes, Comparativos & Subjuntivo",
        "short_title": "Parte 3",
        "subtitle": "Pronomes pessoais complemento, comparações, obrigação e o presente do subjuntivo.",
        "stripe": "#d97706",
        "topics": ["pronomes-pessoais-complemento", "comparacao-e-superlativo", "obrigacao-ter-de-dever", "introducao-ao-subjuntivo"]
    }
]

TOPICS = {
    "preterito-perfeito-composto": {
        "title": "Pretérito Perfeito Simples vs Composto",
        "subtitle": "Distinguir eventos concluídos de ações repetidas até ao presente",
        "part_title": "Parte 1 · A Narrativa no Passado",
        "part_file": "part-1.html",
        "cando": "Consegue relatar acontecimentos passados e experiências recentes.",
        "one_liner": "O Perfeito Simples expressa uma ação pontual e concluída ; o Perfeito Composto (tenho + particípio) indica uma ação que se repete até hoje.",
        "why_matters": "Fundamental para contar viagens, acontecimentos do dia a dia e hábitos que continuam no presente.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Tempo Verbal</th><th>Marcador Temporal Exemplo</th><th>Exemplo de Aplicação</th></tr></thead>
<tbody>
<tr><td><b>Pretérito Perfeito Simples</b></td><td>Ontem, a semana passada, em 2021</td><td>Ontem <b>fui</b> ao cinema e <b>comi</b> pipocas.</td></tr>
<tr><td><b>Pretérito Perfeito Composto</b></td><td>Ultimamente, ultimamente tenho...</td><td>Ultimamente <b>tenho estudado</b> muito.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-subject);'>Ontem</span> <span style='color:var(--grammar-verb);'>viajei</span> para Lisboa.",
        "notice": "👀 Nota: Em português europeu e brasileiro, 'tenho feito' significa 'venho fazendo repetidamente nos últimos tempos'.",
        "think_native": "🧠 Pensa em português: Perfeito simples fecha a porta do tempo ; composto deixa a porta aberta até hoje.",
        "signature_box": "🧩 Estrutura Perfeito Simples: Falar ➔ falei, falaste, falou, falamos, falaram.",
        "mistakes": [
            {"wrong": "Ontem tenho ido ao mercado.", "right": "Ontem fui ao mercado."},
            {"wrong": "Ultimamente fui ao ginásio todos os dias.", "right": "Ultimamente tenho ido ao ginásio."}
        ],
        "mnemonic": "💡 Truque mnemónico: ONTEM fecha com FUI, ULTIMAMENTE repete com TENHO!",
        "connects": ["preterito-imperfeito-do-indicativo", "perfeito-vs-imperfeito"],
        "checklist": ["Usar o perfeito simples para datas específicas passadas", "Usar o perfeito composto com 'ultimamente'"],
        "quiz": [
            {"q": "Qual é a frase correta?", "opts": ["Ontem comi um gelado.", "Ontem tenho comido um gelado.", "Ontem como um gelado."], "correct": 0, "explain": "'Ontem' exige o pretérito perfeito simples: comi."}
        ]
    },
    "preterito-imperfeito-do-indicativo": {
        "title": "O Pretérito Imperfeito do Indicativo",
        "subtitle": "Descrever hábitos, paisagens e contextos da infância",
        "part_title": "Parte 1 · A Narrativa no Passado",
        "part_file": "part-1.html",
        "cando": "Consegue descrever a sua infância e rotinas antigas.",
        "one_liner": "O imperfeito serve para pintar o cenário de fundo e expressar hábitos passados.",
        "why_matters": "Essencial para contar memórias de infância ('Quando eu era pequeno...') e descrever lugares no passado.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Verbos -AR (Falar)</th><th>Verbos -ER/-IR (Comer/Abrir)</th><th>Irregulares (Ser, Ter, Vir, Pôr)</th></tr></thead>
<tbody>
<tr><td>falava, falavas, falava, falávamos, falavam</td><td>comia, comias, comia, comíamos, comiam</td><td>era, tinha, vinha, punha</td></tr>
</tbody>
</table></div>""",
        "example_code": "Quando <span style='color:var(--grammar-subject);'>eu</span> <span style='color:var(--grammar-verb);'>era</span> criança, <span style='color:var(--grammar-verb);'>jogava</span> sempre no parque.",
        "notice": "👀 Nota: O imperfeito dos verbos -AR tem terminação -ava ; nos verbos -ER/-IR tem terminação -ia.",
        "think_native": "🧠 Pensa em português: O imperfeito é a fotografia em câmara lenta das tuas memórias.",
        "signature_box": "🧩 Regra: Verbos em -AR ➔ -ava ; Verbos em -ER/-IR ➔ -ia.",
        "mistakes": [
            {"wrong": "Quando era pequeno joguei todos os dias.", "right": "Quando era pequeno jogava todos os dias."}
        ],
        "mnemonic": "💡 Truque mnemónico: Lembra-te de -AVA para -AR e -IA para -ER/-IR!",
        "connects": ["preterito-perfeito-composto", "perfeito-vs-imperfeito"],
        "checklist": ["Formar as terminações -ava e -ia", "Usar o imperfeito para hábitos antigos"],
        "quiz": [
            {"q": "Qual é o imperfeito de 'viver' para 'nós'?", "opts": ["Vivíamos", "Vivemos", "Vivemos todos"], "correct": 0, "explain": "A forma correta é 'vivíamos' com acento gráfico."}
        ]
    },
    "perfeito-vs-imperfeito": {
        "title": "Pretérito Perfeito vs Imperfeito",
        "subtitle": "Articular o cenário de fundo com a ação que ocorre de repente",
        "part_title": "Parte 1 · A Narrativa no Passado",
        "part_file": "part-1.html",
        "cando": "Consegue contar histórias combinando a descrição do contexto com acontecimentos.",
        "one_liner": "O Imperfeito descreve a cena (enquanto...) ; o Perfeito traz a novidade (quando...).",
        "why_matters": "É a chave da arte de contar histórias em português.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Tempo Verbal</th><th>Papel Narrativo</th><th>Palavra Chave</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td><b>Imperfeito</b></td><td>Ação em curso / Fundo da cena</td><td>Enquanto...</td><td>Enquanto eu <b>dormia</b>...</td></tr>
<tr><td><b>Perfeito Simples</b></td><td>Ação pontual de interrupção</td><td>De repente / Quando...</td><td>...o telefone <b>tocou</b>.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Enquanto <span style='color:var(--grammar-verb);'>caminhava</span> pela rua, <span style='color:var(--grammar-verb);'>encontrei</span> o Pedro.",
        "notice": "👀 Nota: 'Enquanto' exige quase sempre o pretérito imperfeito.",
        "think_native": "🧠 Pensa em português: O imperfeito é o filme de fundo e o perfeito é o disparo da câmara.",
        "signature_box": "🧩 Fórmula: [Enquanto + Imperfeito] + [Perfeito Simples].",
        "mistakes": [
            {"wrong": "Enquanto dormi, entrou um ladrão.", "right": "Enquanto dormia, entrou um ladrão."}
        ],
        "mnemonic": "💡 Truque mnemónico: O Imperfeito DESCREVE, o Perfeito INTERROMPE!",
        "connects": ["preterito-perfeito-composto", "preterito-imperfeito-do-indicativo"],
        "checklist": ["Combinar o contexto com os eventos pontuais", "Usar a conjunção 'enquanto' com o imperfeito"],
        "quiz": [
            {"q": "Escolha a opção correta: 'Ontem quando eu ____ (estudar), o telefone ____ (tocar).' ", "opts": ["estudava / tocou", "estudei / tocava", "estudava / tocava"], "correct": 0, "explain": "Estudar era a ação em progresso (estudava), tocou é a interrupção (tocou)."}
        ]
    },
    "futuro-do-presente-e-ir": {
        "title": "O Futuro com 'Ir + Infinitivo' e Futuro Simples",
        "subtitle": "Plano imediato e futuro do presente formal",
        "part_title": "Parte 2 · Futuro & Condicional",
        "part_file": "part-2.html",
        "cando": "Consegue exprimir planos para o futuro próximo e projeções formais.",
        "one_liner": "Na fala quotidiana usa-se 'Ir + Infinitivo' (vou viajar) ; na escrita formal usa-se o Futuro Simples (viajarei).",
        "why_matters": "Permite falar de planos de viagem, compromissos profissionais e previsões do tempo.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Estrutura</th><th>Uso Principal</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td><b>Ir + Infinitivo</b></td><td>Linguagem falada / Planos próximos</td><td>Amanhã <b>vou viajar</b> para o Porto.</td></tr>
<tr><td><b>Futuro Simples</b></td><td>Formal / Escrito / Promessas</td><td>O governo <b>construirá</b> o novo hospital.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Amanhã nós <span style='color:var(--grammar-verb);'>vamos partir</span> bem cedo.",
        "notice": "👀 Nota: O futuro informal com 'ir' conjuga apenas o verbo ir no presente + o verbo principal no infinitivo.",
        "think_native": "🧠 Pensa em português: 'Vou fazer' é 90% mais comum na conversa do que 'farei'.",
        "signature_box": "🧩 Regra Falada: Presente de IR + Infinitivo principal.",
        "mistakes": [
            {"wrong": "Amanhã eu vou viajarei.", "right": "Amanhã eu vou viajar. (ou: viajarei)"}
        ],
        "mnemonic": "💡 Truque mnemónico: Usa o verbo IR para falar do futuro no dia a dia!",
        "connects": ["condicional-simples-cortesia", "se-presente-futuro"],
        "checklist": ["Usar a estrutura ir + infinitivo na conversação", "Reconhecer o futuro simples na leitura formal"],
        "quiz": [
            {"q": "Como se diz normalmente na conversa 'I am going to study'?", "opts": ["Vou estudar", "Estudarei", "Fui estudar"], "correct": 0, "explain": "'Vou estudiar' é a forma mais natural e frequente em português."}
        ]
    },
    "condicional-simples-cortesia": {
        "title": "O Condicional Simples de Cortesia",
        "subtitle": "Expressar desejos, pedidos gentis e sugestões",
        "part_title": "Parte 2 · Futuro & Condicional",
        "part_file": "part-2.html",
        "cando": "Consegue pedir um serviço com delicadeza em hotéis ou restaurantes.",
        "one_liner": "Gostaria de..., Poderia... e Deveria... são as formas amáveis de comunicação em português.",
        "why_matters": "É essencial para pedir coisas educadamente ao pequeno-almoço, num café ou numa loja.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Verbo</th><th>Forma Amável</th><th>Aplicação Prática</th></tr></thead>
<tbody>
<tr><td><b>Gostar</b></td><td>Gostaria de...</td><td>Gostaria de pedir um café, por favor.</td></tr>
<tr><td><b>Poder</b></td><td>Poderia...?</td><td>Poderia trazer a conta?</td></tr>
<tr><td><b>Dever</b></td><td>Deverias...</td><td>Deverias descansar este fim de semana.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-subject);'>Eu</span> <span style='color:var(--grammar-verb);'>gostaria de</span> <span style='color:var(--grammar-verb);'>reservar</span> uma mesa.",
        "notice": "👀 Nota: Também se usa muito o imperfeito 'queria' no restaurante ('Queria um café, por favor').",
        "think_native": "🧠 Pensa em português: 'Gostaria de' suavemente transforma uma ordem numa solicitação simpática.",
        "signature_box": "🧩 Fórmula: Gostaria de + Infinitivo / Poderia + Infinitivo.",
        "mistakes": [
            {"wrong": "Eu quero a conta agora! (demasiado rude)", "right": "Poderia trazer a conta, por favor?"}
        ],
        "mnemonic": "💡 Truque mnemónico: Gostaria e Poderia são as chaves da cortesia!",
        "connects": ["futuro-do-presente-e-ir", "se-presente-futuro"],
        "checklist": ["Fazer pedidos num restaurante com 'gostaria de'", "Pedir ajuda com 'poderia...'"],
        "quiz": [
            {"q": "Como se pede um café de forma educada?", "opts": ["Gostaria de um café, por favor.", "Quero um café já!", "Dá-me um café."], "correct": 0, "explain": "'Gostaria de...' expressa o pedido em condicional com delicadeza."}
        ]
    },
    "se-presente-futuro": {
        "title": "A Hipótese no Presente (Se + Presente...)",
        "subtitle": "Estabelecer condições reais e consequências futuras",
        "part_title": "Parte 2 · Futuro & Condicional",
        "part_file": "part-2.html",
        "cando": "Consegue formular acordos e projetos condicionados ao tempo ou acontecimentos.",
        "one_liner": "Se + presente do indicativo ➔ futuro (ou ir + infinitivo).",
        "why_matters": "Permite negociar planos e organizar atividades em grupo ('Se fizer bom tempo, vamos à praia').",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Condição (Se...)</th><th>Resultado</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td><b>Se + Presente</b></td><td>Ir + Infinitivo / Futuro</td><td>Se <b>tenho</b> tempo, <b>vou ligar-te</b>.</td></tr>
<tr><td><b>Se + Presente</b></td><td>Imperativo / Presente</td><td>Se <b>chove</b>, <b>leva</b> o guarda-chuva.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Se <span style='color:var(--grammar-verb);'>fizer</span> bom tempo, <span style='color:var(--grammar-verb);'>vamos à praia</span>.",
        "notice": "👀 Nota: Atenção: em português europeu usa-se muito o futuro do conjuntivo após 'se' (se fizer, se tiver, se puder).",
        "think_native": "🧠 Pensa em português: A condição com 'se' aciona o plano que vem logo a seguir.",
        "signature_box": "🧩 Regra: Se + Verbo ➔ Consequência no Futuro.",
        "mistakes": [
            {"wrong": "Se terei tempo, vou visitar-te.", "right": "Se tiver tempo, vou visitar-te."}
        ],
        "mnemonic": "💡 Truque mnemónico: Não usares futuro simples logo a seguir ao SE!",
        "connects": ["futuro-do-presente-e-ir", "condicional-simples-cortesia"],
        "checklist": ["Construir frases condicionais de planos reais", "Conectar a condição com o resultado futuro"],
        "quiz": [
            {"q": "Completa a frase: 'Se ____ (fazer) sol, vamos ao parque.'", "opts": ["fizer / faz", "fará", "fez"], "correct": 0, "explain": "Após 'se' usa-se a forma condicional real 'fizer' ou 'faz'."}
        ]
    },
    "pronomes-pessoais-complemento": {
        "title": "Os Pronomes Pessoais Complemento",
        "subtitle": "Substituir objetos e pessoas (o, a, os, as, lhe, lhes)",
        "part_title": "Parte 3 · Pronomes, Comparativos & Subjuntivo",
        "part_file": "part-3.html",
        "cando": "Consegue substituir objetos e pessoas para tornar a frase leve.",
        "one_liner": "Objeto Direto = o, a, os, as (-lo/-la após R/S/Z) ; Objeto Indireto = lhe, lhes.",
        "why_matters": "Proporciona elegância e concisão ao falar e escrever em português.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Função</th><th>Formas Diretas</th><th>Formas com R, S, Z</th><th>Formas Indiretas</th></tr></thead>
<tbody>
<tr><td>3ª Pessoa Singular</td><td><b>o / a</b> (Vejo o livro ➔ Vejo-<b>o</b>)</td><td><b>-lo / -la</b> (Comprar o livro ➔ Comprá-<b>lo</b>)</td><td><b>lhe</b> (Ligar ao João ➔ Ligar-<b>lhe</b>)</td></tr>
<tr><td>3ª Pessoa Plural</td><td><b>os / as</b></td><td><b>-los / -las</b></td><td><b>lhes</b></td></tr>
</tbody>
</table></div>""",
        "example_code": "O livro? Vou <span style='color:var(--grammar-verb);'>comprá-lo</span> hoje e vou <span style='color:var(--grammar-verb);'>dar-lhe</span> o presente.",
        "notice": "👀 Nota: Quando o verbo termina em -r, -s ou -z, a letra cai e o pronome ganha L (-lo, -la, -los, -las).",
        "think_native": "🧠 Pensa em português: Lhe substitui 'a ele / a ela' ; o/a substitui 'o objeto / a pessoa diretamente'.",
        "signature_box": "🧩 Regra de Ênclise: Verbo + hífen + pronome (comprá-lo, ver-te).",
        "mistakes": [
            {"wrong": "Vou comprar ele.", "right": "Vou comprá-lo."},
            {"wrong": "Eu vi ela na rua.", "right": "Eu vi-a na rua."}
        ],
        "mnemonic": "💡 Truque mnemónico: Cai o -R do verbo, entra o -L no pronome (comprar + o ➔ comprá-lo)!",
        "connects": ["comparacao-e-superlativo", "obrigacao-ter-de-dever"],
        "checklist": ["Usar o/a como objeto direto", "Transformar o pronome em -lo/-la após terminação verbal em R"],
        "quiz": [
            {"q": "Como fica 'comprar o carro' usando o pronome?", "opts": ["Comprá-lo", "Comprar ele", "Comprar-lhe"], "correct": 0, "explain": "A consoante -r cai e junta-se '-lo': comprá-lo."}
        ]
    },
    "comparacao-e-superlativo": {
        "title": "A Comparação e o Superlativo",
        "subtitle": "Comparar qualidades e expressar o grau máximo",
        "part_title": "Parte 3 · Pronomes, Comparativos & Subjuntivo",
        "part_file": "part-3.html",
        "cando": "Consegue comparar opções, cidades ou pessoas e identificar o melhor.",
        "one_liner": "Mais... do que (superioridade), menos... do que (inferioridade), tão... como (igualdade) ; o mais... de (superlativo).",
        "why_matters": "Indispensável para fazer compras, escolher hotéis e emitir opiniões pessoais.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Grau</th><th>Estrutura</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td>Superioridade (+)</td><td><b>mais + adjetivo + do que</b></td><td>Lisboa é <b>mais grande do que</b>... ➔ <b>maior do que</b> Porto.</td></tr>
<tr><td>Igualdade (=)</td><td><b>tão + adjetivo + como</b></td><td>O Pedro é <b>tão alto como</b> o João.</td></tr>
<tr><td>Superlativo Absoluto</td><td><b>adjetivo + -íssimo/a/os/as</b></td><td>Este prato é <b>ótimo / felicíssimo</b>.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Esta cidade é <span style='color:var(--grammar-verb);'>melhor do que</span> a outra e é <span style='color:var(--grammar-verb);'>belíssima</span>.",
        "notice": "👀 Nota: Formas irregulares: bom ➔ melhor ; mau ➔ pior ; grande ➔ maior ; pequeno ➔ menor.",
        "think_native": "🧠 Pensa em português: Usa-se 'tão' com adjetivos e 'tanto' com substantivos (tanto dinheiro).",
        "signature_box": "🧩 Regra: Mais... do que / Melhores do que.",
        "mistakes": [
            {"wrong": "Este café é mais bom do que o outro.", "right": "Este café é melhor do que o outro."}
        ],
        "mnemonic": "💡 Truque mnemónico: Usa MELHOR e PIOR em vez de mais bom e mais mau!",
        "connects": ["obrigacao-ter-de-dever"],
        "checklist": ["Formar comparações com mais... do que", "Usar os comparativos irregulares melhor e pior"],
        "quiz": [
            {"q": "Qual é o comparativo correto de 'bom'?", "opts": ["Melhor do que", "Mais bom do que", "Muito bom do que"], "correct": 0, "explain": "'Melhor' é a forma comparativa irregular de 'bom'."}
        ]
    },
    "obrigacao-ter-de-dever": {
        "title": "A Obrigação: Ter de, Dever e É preciso",
        "subtitle": "Expressar obrigações pessoais e necessidades gerais",
        "part_title": "Parte 3 · Pronomes, Comparativos & Subjuntivo",
        "part_file": "part-3.html",
        "cando": "Consegue compreender instruções, horários e deveres de rotina.",
        "one_liner": "Ter de + infinitivo (obrigação pessoal) ; É preciso + infinitivo (necessidade geral).",
        "why_matters": "Fundamental no trabalho, nos transportes e para cumprir regras de convivência.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Estrutura</th><th>Tipo de Necessidade</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td><b>Ter de + Infinitivo</b></td><td>Pessoal (Tenho de, tens de...)</td><td><b>Tenho de estudar</b> para o exame.</td></tr>
<tr><td><b>É preciso + Infinitivo</b></td><td>Geral / Impessoal</td><td><b>É preciso reciclar</b> o papel.</td></tr>
<tr><td><b>Dever + Infinitivo</b></td><td>Dever moral / Recomendação</td><td><b>Deves respeitar</b> os horários.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Para aprender português, <span style='color:var(--grammar-verb);'>é preciso praticar</span> diariamente.",
        "notice": "👀 Nota: 'Ter de' e 'Ter que' usam-se indiferentemente em linguagem informal.",
        "think_native": "🧠 Pensa em português: 'É preciso' vale para toda a gente sem apontar o dedo.",
        "signature_box": "🧩 Regra: Ter de + Infinitivo = Compromisso direto.",
        "mistakes": [
            {"wrong": "Nós precisamos de estudar ➔ É preciso estudarmos.", "right": "Temos de estudar ➔ Temos de estudar."}
        ],
        "mnemonic": "💡 Truque mnemónico: TER DE para mim, É PRECISO para todos!",
        "connects": ["introducao-ao-subjuntivo"],
        "checklist": ["Expressar obrigações pessoais com 'ter de'", "Indicar regras gerais com 'é preciso'"],
        "quiz": [
            {"q": "Escolha a opção correta: 'Para entrar no avião ____ apresentar o passaporte.'", "opts": ["é preciso", "temos de", "devem de"], "correct": 0, "explain": "'É preciso + infinitivo' expressa a regra geral impessoal."}
        ]
    },
    "introducao-ao-subjuntivo": {
        "title": "Introdução ao Presente do Subjuntivo",
        "subtitle": "Expressar desejos, esperanças e sentimentos (Quero que...)",
        "part_title": "Parte 3 · Pronomes, Comparativos & Subjuntivo",
        "part_file": "part-3.html",
        "cando": "Consegue exprimir felicitações e desejos amáveis aos outros.",
        "one_liner": "Quando há dois sujeitos diferentes numa frase de desejo (Quero que tu...), o segundo verbo vai para o Subjuntivo/Conjuntivo.",
        "why_matters": "É a entrada no modo subjuntivo, indispensável para desejar 'Espero que tenhas um bom dia!'.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Verbo de Desejo + QUE</th><th>Sujeito 2</th><th>Verbo no Subjuntivo</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td>Espero que / Tomara que</td><td>tu / ele</td><td>tenhas / seja</td><td>Espero <b>que tenhas</b> um bom dia!</td></tr>
</tbody>
</table></div>""",
        "example_code": "Espero que <span style='color:var(--grammar-subject);'>você</span> <span style='color:var(--grammar-verb);'>tenha</span> uma boa viagem.",
        "notice": "👀 Nota: Nos verbos em -AR a vocal passa para -E (falar ➔ fale) ; nos verbos em -ER/-IR passa para -A (comer ➔ coma).",
        "think_native": "🧠 Pensa em português: O subjuntivo é o modo do desejo e da esperança humana.",
        "signature_box": "🧩 Fórmula: Verbo de Desejo + QUE + Presente do Subjuntivo.",
        "mistakes": [
            {"wrong": "Espero que tu tens um bom dia.", "right": "Espero que tu tenhas um bom dia."}
        ],
        "mnemonic": "💡 Truque mnemónico: Inverte a vogal: -AR ganha -E e -ER/-IR ganha -A!",
        "connects": ["obrigacao-ter-de-dever"],
        "checklist": ["Reconhecer expressões de desejo com 'espero que'", "Inverter a vogal temática para formar o subjuntivo"],
        "quiz": [
            {"q": "Completa: 'Espero que tu ____ (ter) um bom fim de semana.'", "opts": ["tenhas", "tens", "terás"], "correct": 0, "explain": "'Espero que' exige o presente do subjuntivo: tenhas."}
        ]
    }
}

def render_topbar(active_part_id=None, is_topic=False):
    hub_link = "../../../../portugues-a2.html" if is_topic else "../../../portugues-a2.html"
    rel_prefix = "../" if is_topic else ""
    nav_links = [f'<a href="{hub_link}">← Hub Português A2</a>']
    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Gramática A2</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Manual de Gramática Portuguesa (A2) · Edição Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Voltar ao início COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building Portuguese A2 Grammar Manual...")
    topic_slugs = list(TOPICS.keys())

    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_slug = topic_slugs[idx - 1] if idx > 0 else None
        next_slug = topic_slugs[idx + 1] if idx < len(topic_slugs) - 1 else None

        prev_link = f'<a class="prev" href="{prev_slug}.html">← {TOPICS[prev_slug]["title"]}</a>' if prev_slug else '<span></span>'
        next_link = f'<a class="next" href="{next_slug}.html">{TOPICS[next_slug]["title"]} →</a>' if next_slug else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        m_items = []
        for m in top["mistakes"]:
            m_items.append(f'''<div class="mflip"><div class="wrong-line">❌ <span class="wrong-text">{m["wrong"]}</span></div><span class="hint">clica para revelar a forma correta</span><div class="right-line">✅ <span>{m["right"]}</span></div></div>''')
        mistakes_html = f'<div class="mistakes"><div class="m-title">⚠️ Erros frequentes de estudantes</div>{"".join(m_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 Já sabes usar esta estrutura?</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Diagnóstico & Quiz</h2><span class="quiz-score">Pontuação: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        connects_lis = "".join([f'<li><a href="{c}.html">{TOPICS[c]["title"]}</a></li>' for c in top["connects"] if c in TOPICS])
        connects_html = f'<div class="box rule-box"><h3>🔗 Relacionado com...</h3><ul>{connects_lis}</ul></div>' if connects_lis else ''

        page_html = f'''<!doctype html>
<html lang="pt">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Gramática Portuguesa A2</title>
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
  <div class="outcome-banner">🎯 <strong>Objetivo comunicativo:</strong> {top["cando"]}</div>
  <p><strong>Em resumo:</strong> {top["one_liner"]}</p>
  <div class="box why"><h3>Por que é importante?</h3><p>{top["why_matters"]}</p></div>
  {top["visual_diagram"]}
  <div class="box rule-box"><h3>Exemplo em cores</h3><p>{top["example_code"]}</p></div>
  <p>{top["notice"]}</p>
  <div class="box native"><h3>{top["think_native"]}</h3></div>
  <div class="box rule-box"><h3>{top["signature_box"]}</h3></div>
  {mistakes_html}
  <div class="box why"><h3>{top["mnemonic"]}</h3></div>
  {connects_html}
  {check_html}
  <div class="outcome-banner">🎉 <strong>Parabéns!</strong> Já dominas esta estrutura fundamental do nível A2.</div>
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
<title>{p["title"]} · COSYlanguages A2</title>
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
<title>Gramática Portuguesa Nível A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Nível A2</span>
    <h1>Gramática Portuguesa (A2)</h1>
    <p class="subtitle">Manual interativo monolíngue de gramática portuguesa nível elementar (A2).</p>
    <hr class="rule">
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Portuguese A2 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()
