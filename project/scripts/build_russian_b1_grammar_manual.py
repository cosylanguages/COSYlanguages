#!/usr/bin/env python3
"""
Generator script for COSYlanguages Russian Grammar Manual (Level B1) Interactive Web Edition.
Generates manuals/ru/grammar/b1/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/ru/grammar/b1/topics/.
100% Monolingual Russian.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/ru/grammar/b1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Грамматика Русского Языка Уровень B1 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --blue-900: #0f2c59;
  --blue-800: #183d7a;
  --blue-700: #225299;
  --blue-600: #2d68c4;
  --blue-100: #e8f0fe;
  --blue-050: #f4f7fd;

  --ink: #131c2b;
  --ink-soft: #3c4c5e;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e3e7f0;

  --grammar-subject: #2563eb;
  --grammar-verb: #16a34a;
  --grammar-object: #d97706;

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
  --shadow-card: 0 2px 8px rgba(15,44,89,.06);
  --shadow-hover: 0 8px 24px rgba(15,44,89,.12);

  --font-display: 'Nunito', 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

* { box-sizing: border-box; }
body {
  margin: 0; background: var(--paper); color: var(--ink);
  font-family: var(--font-body); line-height: 1.65; font-size: 16px;
}
a { color: var(--blue-700); text-decoration: none; transition: color .15s ease; }
a:hover { color: var(--blue-900); }

.container { max-width: 920px; margin: 0 auto; padding: 0 20px; }

.topbar {
  position: sticky; top: 0; z-index: 50; background: var(--blue-900);
  color: #fff; border-bottom: 1px solid rgba(255,255,255,.1);
}
.topbar-inner {
  max-width: 1100px; margin: 0 auto; padding: 12px 20px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
}
.brand { display: flex; align-items: center; gap: 10px; color: #fff; font-weight: 800; font-family: var(--font-display); }
.brand-mark { background: #fff; color: var(--blue-900); width: 30px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-style: italic; }
.topbar-nav { display: flex; gap: 8px; }
.topbar-nav a { color: #d0e1fd; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 99px; }
.topbar-nav a:hover, .topbar-nav a.active { background: rgba(255,255,255,.18); color: #fff; }

.page-head { padding: 32px 0 16px; }
.eyebrow {
  display: inline-block; font-family: var(--font-mono); font-size: 12px; font-weight: 700;
  text-transform: uppercase; color: var(--blue-700); background: var(--blue-100);
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
.box.rule-box { background: var(--blue-050); border: 1px solid var(--blue-100); border-left: 4px solid var(--blue-600); }

.table-wrap { overflow-x: auto; margin: 20px 0; border-radius: var(--radius-m); border: 1px solid var(--line); box-shadow: var(--shadow-card); }
table { width: 100%; border-collapse: collapse; background: var(--panel); font-size: 15px; }
thead th { background: var(--blue-900); color: #fff; text-align: left; padding: 12px 16px; font-family: var(--font-mono); font-size: 12px; text-transform: uppercase; }
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
.quiz-score { font-family: var(--font-mono); font-size: 13px; background: var(--blue-100); color: var(--blue-800); padding: 4px 12px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt { text-align: left; border: 1px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 10px 14px; font-size: 15px; cursor: pointer; }
.qopt.correct { border-color: #16a34a; background: #dcfce7; font-weight: 700; }
.qopt.incorrect { border-color: #ef4444; background: #fef2f2; }
.qexplain { display: none; margin-top: 10px; font-size: 14px; background: var(--blue-050); border-left: 3px solid var(--blue-600); padding: 10px 14px; }
.qexplain.show { display: block; }

.parts-grid, .topic-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.part-card, .topic-card { display: block; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; color: var(--ink); box-shadow: var(--shadow-card); transition: transform .15s, box-shadow .15s; }
.part-card:hover, .topic-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-hover); border-color: var(--blue-600); }
.part-card h2, .topic-card .ttl { font-family: var(--font-display); font-size: 18px; font-weight: 800; margin: 6px 0; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 40px 0; }
.pager a { flex: 1; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 14px 18px; background: var(--panel); box-shadow: var(--shadow-card); }
footer.site { background: var(--blue-900); color: #d0e1fd; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

APP_JS = """// COSYlanguages B1 Грамматика Русского Языка · Интерактивность
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-ru-b1-' + box.getAttribute('data-key');
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
     function refreshScore(){ if(scoreEl) scoreEl.textContent = 'Результат: ' + score + ' / ' + data.length; }
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
        "title": "Часть 1 · Сложноподчиненные Предложения: Причина и Уступка",
        "short_title": "Часть 1",
        "subtitle": "Союзы потому что, так как, хотя и условия уступки.",
        "stripe": "#2563eb",
        "topics": ["soyuzy-prichiny-i-ustupki", "slozhnopodchinennye-predlozheniya-prichina-ustupka"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Часть 2 · Аргументация и Выражение Мнения",
        "short_title": "Часть 2",
        "subtitle": "Вводные слова, причинно-следственные связи и логика дискуссии.",
        "stripe": "#16a34a",
        "topics": ["vyrazhenie-mneniya-i-vvodnye-slova", "prichinno-sledstvennye-svyazi-i-vyvody"]
    }
]

TOPICS = {
    "soyuzy-prichiny-i-ustupki": {
        "title": "Союзы Причины и Уступки: Потому что, Так как, Хотя",
        "subtitle": "Различие стилей применения союзов причины и противопоставления",
        "part_title": "Часть 1 · Сложноподчиненные Предложения: Причина и Уступка",
        "part_file": "part-1.html",
        "cando": "Может логически обосновывать факты и выражать уступку в развернутой речи.",
        "one_liner": "Союзы причины (потому что, так как) объясняют мотив действия, а союзы уступки (хотя, несмотря на то что) выражают условие вопреки которому происходит действие.",
        "why_matters": "Это ключевой грамматический навык уровня B1 для связной устной речи и публичных дискуссий.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Тип связи</th><th>Союз</th><th>Стиль / Особенность</th><th>Пример</th></tr></thead>
<tbody>
<tr><td><b>Причина (обычная)</b></td><td>потому что</td><td>Нейтральный, после главной части</td><td>Я опоздал, <b>потому что</b> автобус застрял.</td></tr>
<tr><td><b>Причина (официальная)</b></td><td>так как</td><td>Официальный, часто в начале</td><td><b>Так как</b> идет дождь, мы остались дома.</td></tr>
<tr><td><b>Уступка</b></td><td>хотя</td><td>Нейтральный / Разговорный</td><td>Мы пошли гулять, <b>хотя</b> было холодно.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Мы закончили проект вовремя, <span style='color:var(--grammar-verb);'>хотя</span> времени было мало.",
        "notice": "👀 Обратите внимание: Союз 'так как' часто ставится в начале предложения, а 'потому что' — после главной части.",
        "think_native": "🧠 Думайте по-русски: 'Потому что' отвечает на вопрос 'Почему?', а 'Хотя' отвечает на вопрос 'Вопреки чему?'.",
        "signature_box": "🧩 Золотое правило: Если придаточное в начале — используйте 'Так как'. Если в конце — 'Потому что'.",
        "mistakes": [
            {"wrong": "Потому что шла гроза, мы остались дома. (в начале)", "right": "Так как шла гроза, мы остались дома."},
            {"wrong": "Хотя он устал, но продолжал работать. (избыточное 'но')", "right": "Хотя он устал, он продолжал работать."}
        ],
        "mnemonic": "💡 Мнемоническая подсказка: 'Так как' впереди — 'Потому что' позади !",
        "connects": ["slozhnopodchinennye-predlozheniya-prichina-ustupka", "vyrazhenie-mneniya-i-vvodnye-slova"],
        "checklist": ["Использовать 'так как' в начале предложения", "Правильно применять 'хотя' без лишних союзов"],
        "quiz": [
            {"q": "Какой союз лучше использовать в начале предложения ?", "opts": ["Так как", "Потому что", "Поэтому"], "correct": 0, "explain": "Для причинного придаточного в начале предложения используется 'Так как'."}
        ]
    },
    "slozhnopodchinennye-predlozheniya-prichina-ustupka": {
        "title": "Сложноподчиненные Предложения Уступки и Причины",
        "subtitle": "Несмотря на то что... / Благодаря тому что...",
        "part_title": "Часть 1 · Сложноподчиненные Предложения: Причина и Уступка",
        "part_file": "part-1.html",
        "cando": "Может использовать книжные и деловые обороты причинно-следственной связи.",
        "one_liner": "Конструкции 'несмотря на то что' (уступка) и 'благодаря тому что' (положительная причина) расширяют аргументацию.",
        "why_matters": "Необходимо для сдачи экзаменов уровня B1 (ТРКИ-1) и ведения деловой переписки.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Конструкция</th><th>Оттенок смысла</th><th>Пример</th></tr></thead>
<tbody>
<tr><td><b>Благодаря тому что</b></td><td>Положительная причина</td><td><b>Благодаря тому что</b> он помог, мы успели.</td></tr>
<tr><td><b>Из-за того что</b></td><td>Отрицательная причина</td><td><b>Из-за того что</b> начался шторм, рейс отменили.</td></tr>
<tr><td><b>Несмотря на то что</b></td><td>Официальная уступка</td><td><b>Несмотря на то что</b> было поздно, работа продолжалась.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-verb);'>Несмотря на то что</span> задание было сложным, студенты справились.",
        "notice": "👀 Обратите внимание: Запятая ставится перед союзом или перед словом 'что' в зависимости от логического ударения.",
        "think_native": "🧠 Думайте по-русски: 'Благодаря' — это спасибо, 'Из-за' — это проблема.",
        "signature_box": "🧩 Золотое правило: 'Благодаря' = успех. 'Из-за' = препятствие.",
        "mistakes": [
            {"wrong": "Благодаря тому что поезд опоздал... (отрицательный факт)", "right": "Из-за того что поезд опоздал..."},
            {"wrong": "Из-за того что врач вылечил пациента... (положительный факт)", "right": "Благодаря тому что врач вылечил пациента..."}
        ],
        "mnemonic": "💡 Мнемоническая подсказка: Благодаря = Благо (плюс), Из-за = Помеха (минус) !",
        "connects": ["soyuzy-prichiny-i-ustupki", "prichinno-sledstvennye-svyazi-i-vyvody"],
        "checklist": ["Различать 'благодаря тому что' и 'из-за того что'", "Грамотно расставлять запятые в составных союзах"],
        "quiz": [
            {"q": "Какой союз выбрать для успеха: '____ врачи вовремя приехали, пациента спасли' ?", "opts": ["Благодаря тому что", "Из-за того что", "Потому что"], "correct": 0, "explain": "Для положительной причины используется 'Благодаря тому что'."}
        ]
    },
    "vyrazhenie-mneniya-i-vvodnye-slova": {
        "title": "Выражение Мнения и Вводные Слова",
        "subtitle": "По моему мнению / С одной стороны... с другой стороны / Во-первых",
        "part_title": "Часть 2 · Аргументация и Выражение Мнения",
        "part_file": "part-2.html",
        "cando": "Может уверенно и вежливо высказывать личную позицию в дискуссии.",
        "one_liner": "Вводные слова выделяются запятыми и организуют логику высказывания (по моему мнению, кажется, во-первых).",
        "why_matters": "Обеспечивает вежливость и структурированность устного ответа на уровне B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Функция</th><th>Вводные слова</th><th>Пример</th></tr></thead>
<tbody>
<tr><td><b>Выражение мнения</b></td><td>По моему мнению, На мой взгляд, По-моему</td><td><b>По моему мнению</b>, решение верно.</td></tr>
<tr><td><b>Порядок мыслей</b></td><td>Во-первых, Во-вторых, Наконец</td><td><b>Во-первых</b>, это экономит время.</td></tr>
<tr><td><b>Сопоставление</b></td><td>С одной стороны... с другой стороны</td><td><b>С одной стороны</b>, это дорого, <b>с другой</b> — надежно.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-verb);'>По-моему</span>, этот проект весьма перспективен.",
        "notice": "👀 Обратите внимание: Вводные слова ВСЕГДА выделяются запятыми на письме.",
        "think_native": "🧠 Думайте по-русски: Вводные слова — это мостики между твоими мыслями.",
        "signature_box": "🧩 Золотое правило: Написал вводное слово — поставь запятую !",
        "mistakes": [
            {"wrong": "По моему мнению этот вариант лучше. (без запятой)", "right": "По моему мнению, этот вариант лучше."},
            {"wrong": "С одной стороны это хорошо... (без запятой)", "right": "С одной стороны, это хорошо..."}
        ],
        "mnemonic": "💡 Мнемоническая подсказка: Вводное слово — запятая готова !",
        "connects": ["prichinno-sledstvennye-svyazi-i-vyvody"],
        "checklist": ["Выделять вводные слова запятыми", "Использовать парные конструкции 'с одной стороны... с другой стороны'"],
        "quiz": [
            {"q": "Как правильно пишется краткая форма выражения мнения ?", "opts": ["По-моему,", "По моему", "Помоему,"], "correct": 0, "explain": "'По-моему' пишется через дефис и выделяется запятой."}
        ]
    },
    "prichinno-sledstvennye-svyazi-i-vyvody": {
        "title": "Причинно-Следственные Связи и Выводы",
        "subtitle": "Поэтому / Следовательно / Таким образом / В результате",
        "part_title": "Часть 2 · Аргументация и Выражение Мнения",
        "part_file": "part-2.html",
        "cando": "Может подводить итоги дискуссии и выражать логическое следствие.",
        "one_liner": "Следовательно, поэтому и таким образом связывают факты с итоговым выводом.",
        "why_matters": "Необходимо для завершения монолога и написания эссе или отчета.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Связка</th><th>Стиль</th><th>Пример</th></tr></thead>
<tbody>
<tr><td><b>Поэтому</b></td><td>Нейтральный / Разговорный</td><td>Мы устали, <b>поэтому</b> пошли спать.</td></tr>
<tr><td><b>Следовательно</b></td><td>Официальный / Книжный</td><td>Факты подтверждены, <b>следовательно</b>, гипотеза верна.</td></tr>
<tr><td><b>Таким образом</b></td><td>Итоговый вывод</td><td><b>Таким образом</b>, мы выполнили план.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Все аргументы изучены, <span style='color:var(--grammar-verb);'>таким образом</span>, мы готовы к решению.",
        "notice": "👀 Обратите внимание: 'Следовательно' и 'Таким образом' вводят итоговый вывод дискуссии.",
        "think_native": "🧠 Думайте по-русски: Используйте 'Поэтому' в беседе и 'Таким образом' в заключении выступления.",
        "signature_box": "🧩 Золотое правило: Поэтому = следствие. Таким образом = финал аргументации.",
        "mistakes": [
            {"wrong": "Поэтому что шёл дождь, я остался. (путаница со 'потому что')", "right": "Шёл дождь, поэтому я остался."},
            {"wrong": "Таким образом мы решили. (без запятой)", "right": "Таким образом, мы решили."}
        ],
        "mnemonic": "💡 Мнемоническая подсказка: Поэтому указывает вперед, Потому что оглядывается назад !",
        "connects": ["vyrazhenie-mneniya-i-vvodnye-slova", "soyuzy-prichiny-i-ustupki"],
        "checklist": ["Не путать 'потому что' и 'поэтому'", "Использовать 'таким образом' в выводах"],
        "quiz": [
            {"q": "Какое слово указывает на вывод и подведение итогов ?", "opts": ["Таким образом,", "Потому что", "Хотя"], "correct": 0, "explain": "'Таким образом' подводит итог рассуждению."}
        ]
    }
}

def render_topbar(active_part_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    hub_link = "../../../../russkiy-b1.html" if is_topic else "../../../russkiy-b1.html"
    nav_links = [f'<a href="{hub_link}">← Hub Русский B1</a>']
    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Грамматика B1</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Учебное руководство по грамматике русского языка (B1) · Веб-издание</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Вернуться на главную COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building Russian B1 Grammar Manual...")
    topic_slugs = list(TOPICS.keys())

    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_slug = topic_slugs[idx - 1] if idx > 0 else None
        next_slug = topic_slugs[idx + 1] if idx < len(topic_slugs) - 1 else None

        prev_link = f'<a class="prev" href="{prev_slug}.html">← {TOPICS[prev_slug]["title"]}</a>' if prev_slug else '<span></span>'
        next_link = f'<a class="next" href="{next_slug}.html">{TOPICS[next_slug]["title"]} →</a>' if next_slug else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        m_items = []
        for m in top["mistakes"]:
            m_items.append(f'''<div class="mflip"><div class="wrong-line">❌ <span class="wrong-text">{m["wrong"]}</span></div><span class="hint">нажмите, чтобы увидеть верную форму</span><div class="right-line">✅ <span>{m["right"]}</span></div></div>''')
        mistakes_html = f'<div class="mistakes"><div class="m-title">⚠️ Частые ошибки</div>{"".join(m_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 Можете ли вы уже применять это ?</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Проверка и Викторина</h2><span class="quiz-score">Результат: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        connects_lis = "".join([f'<li><a href="{c}.html">{TOPICS[c]["title"]}</a></li>' for c in top["connects"] if c in TOPICS])
        connects_html = f'<div class="box rule-box"><h3>🔗 В связи с темой...</h3><ul>{connects_lis}</ul></div>' if connects_lis else ''

        page_html = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Грамматика Русского Языка B1</title>
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
  <div class="outcome-banner">🎯 <strong>Цель общения :</strong> {top["cando"]}</div>
  <p><strong>Вкратце :</strong> {top["one_liner"]}</p>
  <div class="box why"><h3>Почему это важно ?</h3><p>{top["why_matters"]}</p></div>
  {top["visual_diagram"]}
  <div class="box rule-box"><h3>Пример в цветах</h3><p>{top["example_code"]}</p></div>
  <p>{top["notice"]}</p>
  <div class="box native"><h3>{top["think_native"]}</h3></div>
  <div class="box rule-box"><h3>{top["signature_box"]}</h3></div>
  {mistakes_html}
  <div class="box why"><h3>{top["mnemonic"]}</h3></div>
  {connects_html}
  {check_html}
  <div class="outcome-banner">🎉 <strong>Поздравляем !</strong> Вы освоили эту важную структуру уровня B1.</div>
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
<html lang="ru">
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
    <span class="eyebrow">Часть</span>
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
        index_cards.append(f'''<a class="part-card" href="{p["file"]}"><div style="height:4px;background:{p["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{p["title"]}</h2><p>{p["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--blue-700);">{len(p["topics"])} темы →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Грамматика Русского Языка Уровень B1 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Уровень B1</span>
    <h1>Грамматика Русского Языка (B1)</h1>
    <p class="subtitle">Интерактивное одноязычное руководство по грамматике русского языка уровня B1.</p>
    <hr class="rule">
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Russian B1 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()
