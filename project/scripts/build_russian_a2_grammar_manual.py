#!/usr/bin/env python3
"""
Generator script for COSYlanguages Russian Grammar Manual (Level A2) Interactive Web Edition.
Generates manuals/ru/grammar/a2/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/ru/grammar/a2/topics/.
100% Monolingual Russian.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/ru/grammar/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Грамматика русского языка Уровень A2 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --red-900: #7f1d1d;
  --red-800: #991b1b;
  --red-700: #b91c1c;
  --red-600: #dc2626;
  --red-100: #fee2e2;
  --red-050: #fef2f2;

  --ink: #18181b;
  --ink-soft: #3f3f46;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e4e4e7;

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
  --shadow-card: 0 2px 8px rgba(153,27,27,.06);
}

* { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.6;
}

.topbar {
  background: var(--red-900);
  color: #fff;
  padding: 12px 24px;
  position: sticky;
  top: 0;
  z-index: 100;
}
.topbar-inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.topbar a {
  color: #fee2e2;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
}

.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 24px;
}

.page-head { margin-bottom: 30px; }
.eyebrow { font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--red-700); letter-spacing: 0.05em; }
h1 { font-family: 'Poppins', sans-serif; font-size: 32px; margin: 8px 0; color: var(--red-900); }
p.subtitle { font-size: 18px; color: var(--ink-soft); margin: 0; }

.outcome-banner {
  background: var(--mint-bg);
  border-left: 4px solid var(--mint-line);
  padding: 16px 20px;
  border-radius: var(--radius-m);
  margin: 24px 0;
  font-weight: 600;
}

.box {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-m);
  padding: 24px;
  margin: 24px 0;
  box-shadow: var(--shadow-card);
}
.box.why { background: var(--why-bg); border-color: var(--why-line); color: var(--why-ink); }
.box.native { background: var(--native-bg); border-color: var(--native-line); color: var(--native-ink); }
.box.mistake { background: var(--mistake-bg); border-color: var(--mistake-line); color: var(--mistake-ink); }
.box h3 { margin-top: 0; font-family: 'Poppins', sans-serif; }

.grammar-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: var(--panel);
  border-radius: var(--radius-s);
  overflow: hidden;
}
.grammar-table th, .grammar-table td {
  padding: 12px 16px;
  border: 1px solid var(--line);
  text-align: left;
}
.grammar-table th { background: var(--red-100); color: var(--red-900); font-weight: 700; }

.quiz-panel {
  background: var(--panel);
  border: 2px solid var(--red-700);
  border-radius: var(--radius-l);
  padding: 28px;
  margin: 40px 0;
}
.qitem { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--line); }
.qitem:last-child { border-bottom: none; }
.qtext { font-weight: 700; margin-bottom: 12px; }
.qopts { display: flex; gap: 10px; flex-wrap: wrap; }
.qopt {
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 8px 16px;
  border-radius: var(--radius-s);
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}
.qopt:hover { background: var(--red-100); border-color: var(--red-700); }
.qexplain { display: none; margin-top: 10px; font-size: 14px; color: var(--ink-soft); }

.pager { display: flex; justify-content: space-between; margin-top: 40px; }
.pager a { text-decoration: none; font-weight: 700; color: var(--red-700); }

.parts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 30px; }
.part-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-m);
  padding: 24px;
  text-decoration: none;
  color: var(--ink);
  transition: transform 0.2s;
}
.part-card:hover { transform: translateY(-4px); }
.part-card h2 { color: var(--red-900); margin: 0 0 10px; font-size: 20px; }

.topic-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 24px; }
.topic-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-m);
  padding: 20px;
  text-decoration: none;
  color: var(--ink);
  transition: border-color 0.2s;
}
.topic-card:hover { border-color: var(--red-700); }
.topic-card .ttl { font-weight: 700; font-size: 18px; color: var(--red-900); }
.topic-card .sub { font-size: 14px; color: var(--ink-soft); }
"""

APP_JS = """// Interactive Quiz & Checklists
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz-panel').forEach(panel => {
    const data = JSON.parse(panel.dataset.quiz || '[]');
    const items = panel.querySelectorAll('.qitem');
    let score = 0;

    items.forEach((item, idx) => {
      const opts = item.querySelectorAll('.qopt');
      const explain = item.querySelector('.qexplain');
      const correctIdx = data[idx].correct;

      opts.forEach((opt, oIdx) => {
        opt.addEventListener('click', () => {
          opts.forEach(o => o.style.pointerEvents = 'none');
          if (oIdx === correctIdx) {
            opt.style.background = '#dcfce7';
            opt.style.borderColor = '#22c55e';
            score++;
          } else {
            opt.style.background = '#fef2f2';
            opt.style.borderColor = '#ef4444';
            opts[correctIdx].style.background = '#dcfce7';
          }
          if (explain) explain.style.display = 'block';
          panel.querySelector('.quiz-score').textContent = `Счёт: ${score} / ${data.length}`;
        });
      });
    });
  });
});
"""

PARTS = [
    {
        "id": "part-1",
        "file": "part-1.html",
        "title": "Часть 1 · Глагольный вид и времена",
        "subtitle": "Видовые пары, прошедшее и будущее время глаголов",
        "stripe": "#dc2626",
        "topics": ["vidovye-pary-glagolov", "budushchee-vremya-nsv-sv", "proshedshee-vremya-i-vid"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Часть 2 · Глаголы движения",
        "subtitle": "Бесприставочные и приставочные глаголы движения",
        "stripe": "#2563eb",
        "topics": ["glagoly-dvizheniya-bez-pristavok", "pristavochnye-glagoly-dvizheniya"]
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "title": "Часть 3 · Сложноподчинённые предложения и сослагательное наклонение",
        "subtitle": "Условие, причина, цель и сослагательное наклонение с «бы»",
        "stripe": "#16a34a",
        "topics": ["uslovnye-predlozheniya-esli", "soslagatelnoe-naklonenie-by", "kotoryi-v-kosvennyh-padezhah", "sravnenie-i-prevoskhodnaya-stepen", "kosvennaya-rech-i-mestoimeniya"]
    }
]

TOPICS = {
    "vidovye-pary-glagolov": {
        "part_id": "part-1",
        "part_title": "Часть 1 · Глагольный вид",
        "title": "Видовые пары глаголов (НСВ и СВ)",
        "subtitle": "Процесс против результата и завершённого действия",
        "cando": "Уметь правильно выбирать глагол несовершенного (НСВ) или совершенного (СВ) вида.",
        "one_liner": "НСВ обозначает процесс, повторяемость или факт, а СВ — результат и однократное законченное действие.",
        "why_matters": "В русском языке выбор вида глагола передаёт точный смысл действия во времени.",
        "visual_diagram": """<table class="grammar-table">
          <thead><tr><th>Вид глагола</th><th>Обозначение</th><th>Пример</th></tr></thead>
          <tbody>
            <tr><td><strong>НСВ</strong> (читать)</td><td>Процесс / Длительность</td><td>Я <strong>читал</strong> книгу 2 часа.</td></tr>
            <tr><td><strong>СВ</strong> (прочитать)</td><td>Результат / Завершённость</td><td>Я <strong>прочитал</strong> книгу за 2 часа.</td></tr>
          </tbody>
        </table>""",
        "example_code": "Вчера я долго <strong>писал</strong> письмо (НСВ), и наконец <strong>написал</strong> его (СВ).",
        "notice": "Большинство глаголов образуют видовые пары с помощью приставок (делать -> сделать) или суффиксов (решать -> решить).",
        "think_native": "Думайте о вопросе: «Что делать?» (процесс, НСВ) или «Что сделать?» (результат, СВ).",
        "signature_box": "Формула: НСВ = процесс/привычка, СВ = результат/факт завершения.",
        "mistakes": [
            {"wrong": "Я прочитал книгу весь вечер.", "right": "Я читал книгу весь вечер.", "note": "С указанием длительности (весь вечер) используется НСВ."}
        ],
        "mnemonic": "НСВ = Незавершённый процесс, СВ = Совершённый результат!",
        "quiz": [
            {"q": "Выберите верный вариант: Я уже ___ эту статью.", "opts": ["читал", "прочитал"], "correct": 1, "explain": "Акцент на результате: «уже прочитал»."},
            {"q": "Он долго ___ задачу.", "opts": ["решал", "решил"], "correct": 0, "explain": "Слово «долго» требует глагола несовершенного вида (процесс)."}
        ],
        "connects": ["budushchee-vremya-nsv-sv", "proshedshee-vremya-i-vid"]
    },
    "budushchee-vremya-nsv-sv": {
        "part_id": "part-1",
        "part_title": "Часть 1 · Глагольный вид",
        "title": "Будущее сложное и будущее простое",
        "subtitle": "Будущее время НСВ (быть + инфинитив) и СВ (простое спряжение)",
        "cando": "Правильно строить формы будущего времени для процессов и результатов.",
        "one_liner": "Будущее НСВ состоит из двух слов (буду делать), а будущее СВ — из одного (сделаю).",
        "why_matters": "Форма будущего времени прямо указывает на то, планируете ли вы процесс или конкретный результат.",
        "visual_diagram": """<table class="grammar-table">
          <thead><tr><th>Вид</th><th>Форма будущего времени</th><th>Пример</th></tr></thead>
          <tbody>
            <tr><td><strong>НСВ</strong></td><td>буду / будешь + инфинитив</td><td>Завтра я <strong>буду работать</strong>.</td></tr>
            <tr><td><strong>СВ</strong></td><td>Личная форма СВ</td><td>Завтра я <strong>сделаю</strong> отчёт.</td></tr>
          </tbody>
        </table>""",
        "example_code": "Вечером я <strong>буду готовить</strong> ужин (процесс), а потом <strong>позвоню</strong> другу (результат).",
        "notice": "Глагол «быть» спрягается по лицам: буду, будешь, будет, будем, будете, будут.",
        "think_native": "Если нужно сказать «что я буду делать в процессе» — берем НСВ, если «что сделаю» — СВ.",
        "signature_box": "Будущее НСВ = буду + инфинитив. Будущее СВ = спряжение СВ-глагола.",
        "mistakes": [
            {"wrong": "Завтра я буду сделать работу.", "right": "Завтра я сделаю работу / буду делать работу.", "note": "Конструкция «буду» не используется с глаголами СВ."}
        ],
        "mnemonic": "Буду + НСВ = длительные планы. Одно слово СВ = точный результат!",
        "quiz": [
            {"q": "Вставьте форму: Завтра мы ___ проект.", "opts": ["закончим", "будем закончить"], "correct": 0, "explain": "Глагол СВ «закончить» образует простое будущее время без «будем»."}
        ],
        "connects": ["vidovye-pary-glagolov"]
    },
    "proshedshee-vremya-i-vid": {
        "part_id": "part-1",
        "part_title": "Часть 1 · Глагольный вид",
        "title": "Прошедшее время и вид глагола",
        "subtitle": "Повторяемость, последовательность и аннулированное действие",
        "cando": "Описывать события в прошлом с точным переданием характера действий.",
        "one_liner": "В прошедшем времени НСВ показывает повторяющиеся или фоновые действия, а СВ — цепочку завершённых событий.",
        "why_matters": "Позволяет грамотно рассказывать истории и описывать фоновые действия в прошлом.",
        "visual_diagram": """<table class="grammar-table">
          <thead><tr><th>Контекст</th><th>Вид</th><th>Пример</th></tr></thead>
          <tbody>
            <tr><td>Последовательность СВ</td><td>СВ + СВ</td><td>Он <strong>пришёл</strong>, <strong>сел</strong> и <strong>открыл</strong> ноутбук.</td></tr>
            <tr><td>Фон и действие</td><td>НСВ + СВ</td><td>Когда я <strong>готовил</strong> ужин, <strong>пришёл</strong> гость.</td></tr>
          </tbody>
        </table>""",
        "example_code": "Раньше я часто <strong>покупал</strong> книги (НСВ, привычка), но вчера <strong>купил</strong> журнал (СВ).",
        "notice": "При отрицании: «не сделал» (не получилось/забыл) vs «не делал» (даже не пытался/не было намерения).",
        "think_native": "СВ двигает сюжет истории вперёд, а НСВ описывает декорации и фон.",
        "signature_box": "Цепочка фактов = СВ, СВ, СВ. Фон для события = НСВ.",
        "mistakes": [
            {"wrong": "Он встал, умывался и позавтракал.", "right": "Он встал, умылся и позавтракал.", "note": "В цепочке последовательных действий все глаголы должны быть СВ."}
        ],
        "mnemonic": "СВ строит цепочку событий, НСВ рисует картинку вокруг!",
        "quiz": [
            {"q": "Выберите форму: Когда мы шли домой, ___ дождь.", "opts": ["пошёл", "ходил"], "correct": 0, "explain": "На фоне длительного действия (шли) произошло точечное событие (пошёл дождь)."}
        ],
        "connects": ["vidovye-pary-glagolov"]
    },
    "glagoly-dvizheniya-bez-pristavok": {
        "part_id": "part-2",
        "part_title": "Часть 2 · Глаголы движения",
        "title": "Бесприставочные глаголы движения",
        "subtitle": "Идти/ходить, ехать/ездить — однонаправленное и многонаправленное движение",
        "cando": "Различать движение пешком и на транспорте, а также в одном направлении или туда-обратно.",
        "one_liner": "Идти/ехать — движение прямо сейчас в одну сторону. Ходить/ездить — регулярное движение или туда и обратно.",
        "why_matters": "Глаголы движения — уникальная и важная черта русской грамматики для описания поездок и прогулок.",
        "visual_diagram": """<table class="grammar-table">
          <thead><tr><th>Способ</th><th>Одно направление (сейчас)</th><th>Регулярно / Туда-обратно</th></tr></thead>
          <tbody>
            <tr><td>Пешком</td><td><strong>идти</strong> (Я иду в парк)</td><td><strong>ходить</strong> (Я часто хожу в парк)</td></tr>
            <tr><td>Транспорт</td><td><strong>ехать</strong> (Я еду на работу)</td><td><strong>ездить</strong> (Я езжу на работу)</td></tr>
          </tbody>
        </table>""",
        "example_code": "Смотри, Анна <strong>идёт</strong> в библиотеку! Каждую субботу она <strong>ходит</strong> туда.",
        "notice": "В прошедшем времени: «Я ходил в музей» означает, что вы сходили туда и уже вернулись.",
        "think_native": "Представляйте стрелку: идти/ехать — стрелка в одну сторону (→), ходить/ездить — стрелка туда-обратно (⇆).",
        "signature_box": "Идти/Ехать = → (прямо сейчас). Ходить/Ездить = ⇆ (регулярно или туда-обратно).",
        "mistakes": [
            {"wrong": "Вчера я был в театре, я ехал туда.", "right": "Вчера я ездил в театр.", "note": "Качественная поездка туда и обратно выражается глаголом «ездил»."}
        ],
        "mnemonic": "Идти = один путь прямо сейчас. Ходить = круговой маршрут!",
        "quiz": [
            {"q": "Где вы? — Я ___ на работу на метро.", "opts": ["еду", "езжу"], "correct": 0, "explain": "Движение происходит прямо сейчас в одном направлении."}
        ],
        "connects": ["pristavochnye-glagoly-dvizheniya"]
    },
    "pristavochnye-glagoly-dvizheniya": {
        "part_id": "part-2",
        "part_title": "Часть 2 · Глаголы движения",
        "title": "Приставочные глаголы движения",
        "subtitle": "Приставки при-, у-, в-, вы-, под-, от-, до-",
        "cando": "Использовать приставки для уточнения направления движения (прибытие, уход, вход, выход).",
        "one_liner": "Приставки меняют значение глаголов движения: при- (прибытие), у- (уход), в- (вход), вы- (выход).",
        "why_matters": "Приставки позволяют точно описывать перемещение людей и транспорта в пространстве.",
        "visual_diagram": """<table class="grammar-table">
          <thead><tr><th>Приставка</th><th>Значение</th><th>Пример</th></tr></thead>
          <tbody>
            <tr><td><strong>при-</strong></td><td>Прибытие / Приход</td><td>Поезд <strong>прибыл</strong> на станцию.</td></tr>
            <tr><td><strong>у-</strong></td><td>Уход / Удаление</td><td>Он <strong>ушёл</strong> домой.</td></tr>
            <tr><td><strong>в- / вы-</strong></td><td>Вход / Выход</td><td>Мы <strong>вошли</strong> в зал / <strong>вышли</strong> на улицу.</td></tr>
          </tbody>
        </table>""",
        "example_code": "Самолет <strong>вылетел</strong> из Москвы и через 3 часа <strong>прилетел</strong> в Петербург.",
        "notice": "С приставочными глаголами часто используются определенные предлоги: в- -> в (+Вин.), вы- -> из (+Род.).",
        "think_native": "Связывайте приставку с пространственным предлогом: при- к/в, у- из/с, вы- из.",
        "signature_box": "при- (приход) <-> у- (уход) | в- (вход) <-> вы- (выход).",
        "mistakes": [
            {"wrong": "Он вышел в комнату.", "right": "Он вошёл в комнату.", "note": "Внутрь помещения — «вошёл» (в-), а наружу — «вышел» (вы-)."}
        ],
        "mnemonic": "При- пришёл, у- ушёл, в- вошёл, вы- вышел!",
        "quiz": [
            {"q": "Автобус ___ к остановке.", "opts": ["подъехал", "уехал"], "correct": 0, "explain": "Приближение к объекту выражается приставкой под-."}
        ],
        "connects": ["glagoly-dvizheniya-bez-pristavok"]
    },
    "uslovnye-predlozheniya-esli": {
        "part_id": "part-3",
        "part_title": "Часть 3 · Сложноподчинённые предложения",
        "title": "Условные предложения с союзом «если»",
        "subtitle": "Реальное условие в настоящем и будущем",
        "cando": "Выражать реальные условия и планы на будущее при помощи союза «если».",
        "one_liner": "В придаточном предложении с «если» глагол ставится в настоящее или будущее время без специальных частиц.",
        "why_matters": "Необходимо для обсуждения планов, вариантов и зависимых событий.",
        "visual_diagram": """<table class="grammar-table">
          <thead><tr><th>Главное предложение</th><th>Придаточное предложение</th><th>Пример</th></tr></thead>
          <tbody>
            <tr><td>Будущее время</td><td>если + Настоящее / Будущее</td><td>Мы <strong>пойдём</strong> гулять, если <strong>будет</strong> хорошая погода.</td></tr>
          </tbody>
        </table>""",
        "example_code": "Если завтра <strong>будет</strong> свободное время, я <strong>прочитаю</strong> эту книгу.",
        "notice": "В русском языке перед союзом «если» всегда ставится запятая.",
        "think_native": "Союз «если» вводить условие, которое может реально произойти.",
        "signature_box": "[Главное предложение], если [условие]. Запятая обязательна!",
        "mistakes": [
            {"wrong": "Если я бы имел время я пойду в кино.", "right": "Если у меня будет время, я пойду в кино.", "note": "Для реального условия в будущем используется обычное будущее время."}
        ],
        "mnemonic": "Если есть реальный шанс — используй обычное будущее время!",
        "quiz": [
            {"q": "Если ты мне ___, я тебе помогу.", "opts": ["расскажешь", "рассказал бы"], "correct": 0, "explain": "Для реального условия используется будущее время (расскажешь)."}
        ],
        "connects": ["soslagatelnoe-naklonenie-by"]
    },
    "soslagatelnoe-naklonenie-by": {
        "part_id": "part-3",
        "part_title": "Часть 3 · Сложноподчинённые предложения",
        "title": "Сослагательное наклонение с частицей «бы»",
        "subtitle": "Нереальное условие и гипотетические желания",
        "cando": "Выражать гипотетические ситуации, мечты и нереальные условия.",
        "one_liner": "Сослагательное наклонение образуется сочетанием глагола в прошедшем времени и частицы «бы».",
        "why_matters": "Позволяет вежливо просить, Мечтать и обсуждать варианты, которые не произошли.",
        "visual_diagram": """<table class="grammar-table">
          <thead><tr><th>Конструкция</th><th>Пример</th></tr></thead>
          <tbody>
            <tr><td>если бы + Прошедшее время, [глагол + бы]</td><td>Если бы у меня <strong>были</strong> деньги, я <strong>купил бы</strong> машину.</td></tr>
            <tr><td>Вежливое желание (я хотел бы)</td><td>Я <strong>хотел бы</strong> заказать кофе.</td></tr>
          </tbody>
        </table>""",
        "example_code": "Если бы вчера <strong>была</strong> хорошая погода, мы <strong>пошли бы</strong> в парк.",
        "notice": "Глагол ВСЕГДА стоит в форме прошедшего времени (на -л, -ла, -ло, -ли), даже если мы говорим о настоящем или будущем!",
        "think_native": "Частица «бы» превращает факт в мечту или предположение.",
        "signature_box": "Формула: Глагол прошедшего времени + частица БЫ.",
        "mistakes": [
            {"wrong": "Если бы я буду иметь время, я бы пришёл.", "right": "Если бы у меня было время, я бы пришёл.", "note": "После «бы» нельзя использовать будущее время — только прошедшее!"}
        ],
        "mnemonic": "Видишь «бы» — ставь глагол в прошедшее время (-л)!",
        "quiz": [
            {"q": "Я с удовольствием ___ с вами в театр.", "opts": ["пошёл бы", "пойду бы"], "correct": 0, "explain": "С частицей «бы» используется только форма прошедшего времени (пошёл)."}
        ],
        "connects": ["uslovnye-predlozheniya-esli"]
    },
    "kotoryi-v-kosvennyh-padezhah": {
        "part_id": "part-3",
        "part_title": "Часть 3 · Сложноподчинённые предложения",
        "title": "Союзное слово «который» в косвенных падежах",
        "subtitle": "Согласование в роде, числе и падеже с существительным",
        "cando": "Строить сложные предложения с определительными придаточными.",
        "one_liner": "Слово «который» согласуется с существительным в роде и числе, а его падеж зависит от роли в придаточном предложении.",
        "why_matters": "Необходимо для объединения нескольких простых предложений в одно точное и информативное.",
        "visual_diagram": """<table class="grammar-table">
          <thead><tr><th>Придаточное предложение</th><th>Падеж «который»</th><th>Пример</th></tr></thead>
          <tbody>
            <tr><td>Объект действия</td><td>Винительный</td><td>Вот книга, <strong>которую</strong> я прочитал.</td></tr>
            <tr><td>Принадлежность</td><td>Родительный</td><td>Студент, у <strong>которого</strong> есть вопросы.</td></tr>
            <tr><td>Совместность</td><td>Творительный</td><td>Друг, с <strong>которым</strong> я гулял.</td></tr>
          </tbody>
        </table>""",
        "example_code": "Я знаю человека, о <strong>котором</strong> вы говорите.",
        "notice": "Род и число берутся от главным слова (книга -> которая/которую), а падеж определяется глаголом/предлогом в придаточном.",
        "think_native": "Задавайте вопрос к слову «который» прямо из придаточной части.",
        "signature_box": "Род/число = главное слово. Падеж = роль в придаточном.",
        "mistakes": [
            {"wrong": "Вот дом, который я живу.", "right": "Вот дом, в котором я живу.", "note": "Глагол «жить» требует предложного падежа с предлогом «в» (в котором)."}
        ],
        "mnemonic": "Род бери от существительного, падеж — от глагола рядом!",
        "quiz": [
            {"q": "Это фильм, о ___ все говорят.", "opts": ["котором", "который"], "correct": 0, "explain": "Предлог «о» требует предложного падежа (о котором)."}
        ],
        "connects": ["kosvennaya-rech-i-mestoimeniya"]
    },
    "sravnenie-i-prevoskhodnaya-stepen": {
        "part_id": "part-3",
        "part_title": "Часть 3 · Сложноподчинённые предложения",
        "title": "Сравнительная и превосходная степень прилагательных",
        "subtitle": "Простая (-ее) и составная (более/самый) формы",
        "cando": "Сравнивать предметы, людей и явления, а также выделять крайнюю степень качества.",
        "one_liner": "Сравнивать можно с помощью суффикса -ее (быстрее) или слова «более» (более быстрый). Превосходная степень — со словом «самый».",
        "why_matters": "Основной инструмент для выражения мнений, выбора и оценки характеристик.",
        "visual_diagram": """<table class="grammar-table">
          <thead><tr><th>Степень</th><th>Форма</th><th>Пример</th></tr></thead>
          <tbody>
            <tr><td>Сравнительная (простая)</td><td>Прилагательное + -ее / -ей</td><td>Этот дом <strong>выше</strong>, чем тот.</td></tr>
            <tr><td>Сравнительная (сложная)</td><td>более / менее + Прилагательное</td><td>Этот вариант <strong>более удобный</strong>.</td></tr>
            <tr><td>Превосходная</td><td>самый + Прилагательное</td><td>Это <strong>самый интересный</strong> фильм.</td></tr>
          </tbody>
        </table>""",
        "example_code": "Москва <strong>больше</strong> Петербурга. Это <strong>самый крупный</strong> город России.",
        "notice": "Исключения в простой сравнительной степени: хороший -> лучше, плохой -> хуже, большой -> больше, маленький -> меньше.",
        "think_native": "Для превосходной степени используйте универсальную форму: «самый» + обычное прилагательное.",
        "signature_box": "Сравнение = -ее / более. Высшая степень = самый + прил.",
        "mistakes": [
            {"wrong": "Этот фильм более интереснее.", "right": "Этот фильм интереснее / более интересный.", "note": "Нельзя смешивать «более» и суффикс «-ее» вместе."}
        ],
        "mnemonic": "Или «более интересный», или «интереснее» — не смешивай!",
        "quiz": [
            {"q": "Какой город ___ в мире?", "opts": ["самый красивый", "более красивее"], "correct": 0, "explain": "Превосходная степень образуется при помощи слова «самый»."}
        ],
        "connects": ["uslovnye-predlozheniya-esli"]
    },
    "kosvennaya-rech-i-mestoimeniya": {
        "part_id": "part-3",
        "part_title": "Часть 3 · Сложноподчинённые предложения",
        "title": "Косвенная речь и союзные слова",
        "subtitle": "Передача чужой речи с помощью «что», «где», «когда» и частицы «ли»",
        "cando": "Передавать слова других людей и косвенные вопросы.",
        "one_liner": "Прямая речь переводится в косвенную при помощи союза «что» (для утверждений) или «ли» (для вопросов без вопросительного слова).",
        "why_matters": "Необходимо для пересказа разговоров, новостей и сообщений.",
        "visual_diagram": """<table class="grammar-table">
          <thead><tr><th>Тип высказывания</th><th>Союз в косвенной речи</th><th>Пример</th></tr></thead>
          <tbody>
            <tr><td>Утверждение</td><td>союз <strong>что</strong></td><td>Он сказал, <strong>что</strong> придёт завтра.</td></tr>
            <tr><td>Вопрос без вопроса</td><td>частица <strong>ли</strong></td><td>Она спросила, знаю <strong>ли</strong> я его.</td></tr>
          </tbody>
        </table>""",
        "example_code": "Иван спросил: «Ты идешь в кино?» -> Иван спросил, <strong>иду ли</strong> я в кино.",
        "notice": "Местоимения меняются по смыслу: «Я приду» -> Он сказал, что <strong>он</strong> придёт.",
        "think_native": "Частица «ли» ставится СРАЗУ после глагола или ключевого слова, к которому относится вопрос.",
        "signature_box": "Вопрос да/нет -> глагол + ЛИ. Утверждение -> союз ЧТО.",
        "mistakes": [
            {"wrong": "Он спросил если я знаю его.", "right": "Он спросил, знаю ли я его.", "note": "Союз «если» не используется для косвенного вопроса в русском языке!"}
        ],
        "mnemonic": "Для вопроса без вопроса ставь частицу «ли» после глагола!",
        "quiz": [
            {"q": "Анна спросила, ___ мы завтра встретиться.", "opts": ["сможем ли", "если сможем"], "correct": 0, "explain": "Косвенный вопрос без вопросительного слова оформляется частицей «ли»."}
        ],
        "connects": ["kotoryi-v-kosvennyh-padezhah"]
    }
}

def render_topbar(active_part_id=None, is_topic=False):
    up = "../" if is_topic else ""
    return f'''<header class="topbar">
  <div class="topbar-inner">
    <a href="{up}index.html">← Грамматика русского языка (A2)</a>
    <a href="{up}../../russkiy-a2.html">Hub Русский A2</a>
  </div>
</header>'''

def render_footer():
    return '''<footer style="background: var(--red-900); color: #fee2e2; padding: 24px; text-align: center; font-size: 14px; margin-top: 60px;">
  <div>&copy; 2026 COSYlanguages · Грамматика русского языка Уровень A2</div>
</footer>'''

def build_all():
    with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
        f.write(STYLE_CSS)
    with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
        f.write(APP_JS)

    topic_keys = list(TOPICS.keys())
    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_link = f'<a href="{topic_keys[idx-1]}.html">← {TOPICS[topic_keys[idx-1]]["title"]}</a>' if idx > 0 else '<span></span>'
        next_link = f'<a href="{topic_keys[idx+1]}.html">{TOPICS[topic_keys[idx+1]]["title"]} →</a>' if idx < len(topic_keys)-1 else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        mistakes_html = ""
        if top.get("mistakes"):
            m_items = "".join([f'<li><strong style="color:var(--mistake-ink)">Неверно:</strong> {m["wrong"]}<br><strong style="color:var(--mint-ink)">Верно:</strong> {m["right"]}<br><small>{m["note"]}</small></li>' for m in top["mistakes"]])
            mistakes_html = f'<div class="box mistake"><h3>⚠️ Частые ошибки</h3><ul>{m_items}</ul></div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data, ensure_ascii=False)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Диагностика и тест</h2><span class="quiz-score">Счёт: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        connects_lis = "".join([f'<li><a href="{c}.html">{TOPICS[c]["title"]}</a></li>' for c in top["connects"] if c in TOPICS])
        connects_html = f'<div class="box"><h3>🔗 Связанные темы</h3><ul>{connects_lis}</ul></div>' if connects_lis else ''

        page_html = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Грамматика русского языка A2</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">{top["part_title"]}</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
  </div>
  <div class="outcome-banner">🎯 <strong>Цель:</strong> {top["cando"]}</div>
  <p><strong>Суть правила:</strong> {top["one_liner"]}</p>
  <div class="box why"><h3>Почему это важно?</h3><p>{top["why_matters"]}</p></div>
  {top["visual_diagram"]}
  <div class="box"><h3>Пример в предложении</h3><p>{top["example_code"]}</p></div>
  <p>{top["notice"]}</p>
  <div class="box native"><h3>💡 Как думает носитель языка</h3><p>{top["think_native"]}</p></div>
  <div class="box"><h3>📌 Главная формула</h3><p>{top["signature_box"]}</p></div>
  {mistakes_html}
  <div class="box why"><h3>💡 Запоминалка</h3><p>{top["mnemonic"]}</p></div>
  {connects_html}
  <div class="outcome-banner">🎉 Поздравляем! Вы освоили эту тему уровня A2.</div>
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
<title>{p["title"]} · Русский язык A2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(active_part_id=p["id"], is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Раздел</span>
    <h1>{p["title"]}</h1>
    <p class="subtitle">{p["subtitle"]}</p>
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
        index_cards.append(f'''<a class="part-card" href="{p["file"]}"><div style="height:4px;background:{p["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{p["title"]}</h2><p>{p["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--red-700);">{len(p["topics"])} тем →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Грамматика русского языка Уровень A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Уровень A2</span>
    <h1>Грамматика русского языка (A2)</h1>
    <p class="subtitle">Интерактивное монолингвальное руководство по грамматике русского языка уровня A2.</p>
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Russian A2 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()
