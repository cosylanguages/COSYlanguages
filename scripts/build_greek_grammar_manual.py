#!/usr/bin/env python3
"""
Generator script for COSYlanguages Monolingual A0-A1 Interactive Web Edition Greek Grammar Manual.
Directory: elliniki-grammatiki/
Title: Γραμματική Ελληνικών (Επίπεδο Α0–Α1)
"""

import os
import json

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
MANUAL_DIR = os.path.join(ROOT_DIR, "elliniki-grammatiki")
TOPICS_DIR = os.path.join(MANUAL_DIR, "topics")
ASSETS_DIR = os.path.join(MANUAL_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

GREEK_CSS = """/* ==========================================================================
   COSYlanguages — Greek Grammar Manual (Interactive Web Edition)
   Γραμματική Ελληνικών — Επίπεδο Α0–Α1
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --teal-900: #0c3f38;
  --teal-800: #0f5c50;
  --teal-700: #157c6c;
  --teal-600: #1c9483;
  --teal-500: #25a894;
  --teal-100: #e4f4f0;
  --teal-050: #f2faf8;

  --ink: #132321;
  --ink-soft: #3c5450;
  --paper: #fbfaf6;
  --panel: #ffffff;
  --line: #e4e1d6;

  /* Semantic role colors for Greek grammar */
  --role-subject: #3562e0;
  --role-subject-bg: #e9eefd;
  --role-verb: #1c8f56;
  --role-verb-bg: #e6f6ec;
  --role-noun: #c9740a;
  --role-noun-bg: #fbecd9;
  --role-adj: #7c4fd6;
  --role-adj-bg: #f1e9fb;
  --role-ending: #0f5c50;
  --role-ending-bg: #e4f4f0;
  --role-optional: #6b7280;
  --role-optional-bg: #eef0f1;
  --role-question: #a3195b;
  --role-question-bg: #fce8f1;

  /* Callout box styles */
  --why-bg: #fdf3d6;   --why-line: #c99a1f;  --why-ink: #7a5b0c;
  --native-bg: #f1e9fb; --native-line: #8b5cf6; --native-ink: #5b3aa8;
  --mistake-bg: #fdecec; --mistake-line: #d64545; --mistake-ink: #9c1c1c;
  --connect-bg: #eceafc; --connect-line: #5b4fc4; --connect-ink: #3c2f9e;
  --mint-bg: #e6f5ef; --mint-line: #1c9483; --mint-ink: #0f5c50;

  --radius-s: 8px; --radius-m: 14px; --radius-l: 22px;
  --shadow-card: 0 1px 2px rgba(19,35,33,.04), 0 8px 24px -12px rgba(19,35,33,.15);
  --font-display: 'Poppins', 'Segoe UI', system-ui, sans-serif;
  --font-body: 'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0; background: var(--paper); color: var(--ink);
  font-family: var(--font-body); line-height: 1.6; font-size: 16px;
  -webkit-font-smoothing: antialiased;
}
img, svg { display: block; max-width: 100%; }
a { color: var(--teal-700); }
:focus-visible { outline: 3px solid var(--teal-500); outline-offset: 2px; }

.container { max-width: 960px; margin: 0 auto; padding: 0 24px; }
.wrap-narrow { max-width: 760px; margin: 0 auto; padding: 0 24px; }

/* Top Bar Navigation */
.topbar {
  position: sticky; top: 0; z-index: 40; background: var(--teal-900);
  color: #eafaf5; border-bottom: 1px solid rgba(255,255,255,.08);
}
.topbar-inner {
  max-width: 1080px; margin: 0 auto; padding: 12px 24px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
}
.brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: #eafaf5; }
.brand-mark {
  width: 30px; height: 30px; border-radius: 8px; background: var(--ink);
  color: #fff; display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-style: italic; font-weight: 700; font-size: 15px;
}
.brand-name { font-family: var(--font-display); font-weight: 700; font-size: 15px; letter-spacing: .2px; }
.brand-name em { font-style: italic; font-weight: 600; opacity: .85; }
.topbar-nav { display: flex; gap: 4px; flex-wrap: wrap; }
.topbar-nav a {
  color: #cdece4; text-decoration: none; font-size: 13px; font-weight: 600;
  padding: 6px 10px; border-radius: 99px; transition: background .15s, color .15s;
  white-space: nowrap;
}
.topbar-nav a:hover, .topbar-nav a.active { background: rgba(255,255,255,.12); color: #fff; }

/* Page Header */
.page-head { padding: 38px 0 22px; }
.eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: 12px; font-weight: 600;
  letter-spacing: .06em; text-transform: uppercase; color: var(--teal-700);
  background: var(--teal-100); padding: 5px 12px; border-radius: 99px; margin-bottom: 14px;
}
.page-head h1 {
  font-family: var(--font-display); font-weight: 800; font-size: clamp(28px, 5vw, 42px);
  margin: 0 0 8px; color: var(--ink); letter-spacing: -.01em;
}
.page-head .subtitle { font-style: italic; color: var(--ink-soft); font-size: 18px; margin: 0; }
.rule { border: none; border-top: 2px solid var(--ink); margin: 20px 0 0; opacity: .9; }

.theme-pill {
  display: inline-flex; align-items: center; gap: 8px; margin-top: 16px;
  background: var(--native-bg); color: var(--native-ink); border: 1px solid #e2d4fb;
  padding: 7px 14px; border-radius: 99px; font-size: 13.5px; font-weight: 600;
}
.theme-pill .ico { font-size: 15px; }

/* Callout Boxes */
.box { border-radius: var(--radius-m); padding: 18px 20px; margin: 20px 0; border: 1px solid transparent; }
.box h3 { margin: 0 0 6px; font-family: var(--font-display); font-size: 15px; font-weight: 700; display: flex; align-items: center; gap: 8px; }
.box p { margin: 0; font-size: 15px; }
.box.why { background: var(--why-bg); border-color: #eddca0; color: var(--why-ink); }
.box.why h3 { color: var(--why-ink); }
.box.native { background: var(--native-bg); border-color: #e2d4fb; color: var(--native-ink); }
.box.native h3 { color: var(--native-ink); }
.box.mint { background: var(--mint-bg); border-color: #c9e9de; color: var(--mint-ink); }
.box.mint h3 { color: var(--mint-ink); }
.box.rule-box { background: var(--teal-050); border: 1px solid var(--teal-100); border-left: 4px solid var(--teal-600); }
.box.rule-box strong { color: var(--teal-800); }

/* Regional Badges */
.badge-row { display: flex; flex-wrap: wrap; gap: 6px; margin: 6px 0; }
.badge {
  display: inline-flex; align-items: center; justify-content: center;
  font-family: var(--font-mono); font-weight: 700; font-size: 11px;
  padding: 3px 8px; border-radius: 6px; color: #fff; background: var(--ink-soft);
}
.badge.gr { background: #2f5fae; }
.badge.cy { background: #c9740a; }

/* Tables */
.table-wrap { overflow-x: auto; margin: 20px 0; border-radius: var(--radius-m); box-shadow: var(--shadow-card); }
table { width: 100%; border-collapse: collapse; background: var(--panel); font-size: 14.5px; }
thead th {
  background: var(--ink); color: #fff; text-align: left; padding: 11px 14px;
  font-family: var(--font-mono); font-size: 11.5px; letter-spacing: .04em; text-transform: uppercase;
}
tbody td { padding: 11px 14px; border-bottom: 1px solid var(--line); }
tbody tr:nth-child(even) { background: var(--teal-050); }
tbody tr:last-child td { border-bottom: none; }
tbody td strong { color: var(--teal-800); }

/* Diagram: Color Blocks */
.block-row { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: center; margin: 24px 0; }
.gblock {
  border-radius: var(--radius-s); padding: 10px 18px; text-align: center; color: #fff; min-width: 88px;
  box-shadow: 0 4px 10px -4px rgba(0,0,0,.25);
}
.gblock .k { display: block; font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em; opacity: .85; text-transform: uppercase; }
.gblock .v { display: block; font-family: var(--font-display); font-weight: 700; font-size: 17px; margin-top: 2px; }
.gblock.subject { background: var(--role-subject); }
.gblock.verb { background: var(--role-verb); }
.gblock.noun { background: var(--role-noun); }
.gblock.adj { background: var(--role-adj); }
.gblock.ending { background: var(--role-ending); }
.gblock.masc { background: #3562e0; }
.gblock.fem { background: #a3195b; }
.gblock.neu { background: #1c8f56; }
.plus { font-family: var(--font-display); font-size: 22px; color: var(--ink-soft); font-weight: 700; }

/* Mistakes: Click to reveal */
.mistakes { margin: 22px 0; }
.mistakes .m-title {
  font-family: var(--font-display); font-weight: 700; font-size: 14.5px; color: var(--mistake-ink);
  display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
}
.mflip {
  background: var(--mistake-bg); border: 1px solid #f4c6c6; border-radius: var(--radius-m);
  padding: 13px 16px; margin-bottom: 10px; cursor: pointer; user-select: none; position: relative;
  transition: background .15s;
}
.mflip:hover { background: #fbe0e0; }
.mflip .wrong-line { display: flex; gap: 8px; align-items: flex-start; font-size: 15px; }
.mflip .wrong-line .x { color: var(--mistake-line); font-weight: 800; }
.mflip .wrong-text { text-decoration: line-through; color: #8a3b3b; }
.mflip .right-line { display: none; gap: 8px; align-items: flex-start; font-size: 15px; margin-top: 8px; padding-top: 8px; border-top: 1px dashed #f0b8b8; }
.mflip .right-line .c { color: var(--role-verb); font-weight: 800; }
.mflip.flipped .right-line { display: flex; }
.mflip .hint { font-family: var(--font-mono); font-size: 10.5px; color: #b56060; margin-top: 2px; display: block; }
.mflip.flipped .hint { display: none; }
.mflip .note { font-size: 13px; color: #6b4a4a; margin-left: 24px; margin-top: 2px; }

/* Checklist */
.checklist { background: var(--mint-bg); border: 1px solid #c9e9de; border-radius: var(--radius-m); padding: 18px 20px; margin: 26px 0; }
.checklist h3 { margin: 0 0 10px; font-family: var(--font-display); font-size: 14.5px; color: var(--mint-ink); }
.check-item { display: flex; align-items: center; gap: 10px; padding: 8px 0; font-size: 15px; cursor: pointer; border-bottom: 1px solid rgba(28,148,131,.12); }
.check-item:last-child { border-bottom: none; }
.check-item input { width: 18px; height: 18px; accent-color: var(--teal-700); cursor: pointer; }
.check-item.done span { text-decoration: line-through; color: var(--ink-soft); }
.check-progress { font-family: var(--font-mono); font-size: 11px; color: var(--mint-ink); margin-top: 10px; }

/* Quiz Engine */
.quiz-panel {
  background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l);
  padding: 26px; margin: 34px 0; box-shadow: var(--shadow-card);
}
.quiz-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 6px; flex-wrap: wrap; }
.quiz-head h2 { font-family: var(--font-display); font-size: 20px; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13px; background: var(--teal-100); color: var(--teal-800); padding: 5px 12px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 20px 0; }
.qitem:first-of-type { border-top: none; padding-top: 14px; }
.qitem .qtext { font-weight: 700; font-size: 16px; margin-bottom: 12px; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt {
  text-align: left; border: 1.5px solid var(--line); background: var(--paper); border-radius: var(--radius-s);
  padding: 10px 14px; font-size: 15px; cursor: pointer; font-family: var(--font-body); color: var(--ink);
  transition: border-color .15s, background .15s;
}
.qopt:hover { border-color: var(--teal-500); }
.qopt.correct { border-color: var(--role-verb); background: var(--role-verb-bg); font-weight: 700; }
.qopt.incorrect { border-color: var(--mistake-line); background: var(--mistake-bg); }
.qopt[disabled] { cursor: default; }
.qexplain { display: none; margin-top: 10px; font-size: 14px; background: var(--teal-050); border-left: 3px solid var(--teal-600); padding: 10px 14px; border-radius: 6px; }
.qexplain.show { display: block; }
.quiz-reset { margin-top: 16px; background: none; border: 1.5px solid var(--ink); color: var(--ink); font-family: var(--font-mono); font-size: 12px; padding: 8px 16px; border-radius: 99px; cursor: pointer; }
.quiz-reset:hover { background: var(--ink); color: #fff; }

/* Pager Navigation */
.pager { display: flex; justify-content: space-between; gap: 16px; margin: 40px 0 10px; flex-wrap: wrap; }
.pager a {
  flex: 1; min-width: 220px; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 14px 18px;
  text-decoration: none; color: var(--ink); background: var(--panel); box-shadow: var(--shadow-card);
}
.pager a .dir { display: block; font-family: var(--font-mono); font-size: 10.5px; color: var(--teal-700); text-transform: uppercase; letter-spacing: .06em; }
.pager a .ttl { display: block; font-family: var(--font-display); font-weight: 700; font-size: 15.5px; margin-top: 3px; }
.pager a.next { text-align: right; }

footer.site { background: var(--ink); color: #c9d8d4; padding: 34px 0; margin-top: 60px; font-size: 13.5px; }
footer.site a { color: #eafaf5; }
footer.site .container { display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; }

/* Hero & Section Cards */
.hero { background: var(--teal-900); color: #eafaf5; padding: 64px 0 56px; position: relative; overflow: hidden; }
.hero-kicker { font-family: var(--font-mono); font-size: 12.5px; letter-spacing: .1em; text-transform: uppercase; color: #8fd6c4; }
.hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(34px, 6vw, 52px); margin: 14px 0 12px; letter-spacing: -.01em; }
.hero p.lead { max-width: 580px; color: #cdeee5; font-size: 17px; }
.hero-builder { margin-top: 34px; }
.hero-builder .instruction { font-family: var(--font-mono); font-size: 12px; color: #8fd6c4; margin-bottom: 10px; }
.pool { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px; }
.pool button {
  font-family: var(--font-display); font-weight: 700; font-size: 14px; border-radius: 8px; border: none;
  padding: 9px 16px; cursor: pointer; color: #fff; opacity: .92;
}
.slot-row { display: flex; gap: 10px; min-height: 52px; align-items: center; }
.slot {
  min-width: 110px; height: 44px; border: 2px dashed rgba(255,255,255,.35); border-radius: 8px;
  display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-size: 11px; color: rgba(255,255,255,.55);
}
.slot.filled { border-style: solid; font-family: var(--font-display); font-weight: 700; font-size: 15px; color: #fff; }
.sentence-out { margin-top: 16px; font-family: var(--font-display); font-size: 20px; min-height: 30px; font-style: italic; color: #fff; }

.parts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px; margin: 30px 0 10px; }
.part-card {
  display: block; text-decoration: none; color: var(--ink); background: var(--panel); border-radius: var(--radius-l);
  padding: 22px 22px 20px; border: 1px solid var(--line); box-shadow: var(--shadow-card); position: relative; overflow: hidden;
  transition: transform .15s, box-shadow .15s;
}
.part-card:hover { transform: translateY(-3px); box-shadow: 0 14px 30px -14px rgba(19,35,33,.28); }
.part-card .pnum { font-family: var(--font-mono); font-size: 12px; color: var(--teal-700); font-weight: 700; }
.part-card h2 { font-family: var(--font-display); font-size: 21px; margin: 6px 0 8px; }
.part-card p { margin: 0 0 14px; color: var(--ink-soft); font-size: 14.5px; }
.part-card .topics-count { font-family: var(--font-mono); font-size: 11.5px; color: var(--teal-700); background: var(--teal-100); padding: 4px 10px; border-radius: 99px; }
.part-card .stripe { position: absolute; left: 0; top: 0; bottom: 0; width: 6px; }

.topic-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 14px; margin-top: 16px; }
.topic-card {
  display: block; text-decoration: none; color: var(--ink); background: var(--panel);
  border: 1px solid var(--line); border-radius: var(--radius-m); padding: 16px 18px; box-shadow: var(--shadow-card);
  transition: border-color .15s, transform .15s;
}
.topic-card:hover { border-color: var(--teal-600); transform: translateY(-2px); }
.topic-card .tnum { font-family: var(--font-mono); font-size: 11px; color: var(--teal-700); }
.topic-card .ttl { font-family: var(--font-display); font-weight: 700; font-size: 16px; margin-top: 4px; }
.topic-card .sub { font-size: 12.5px; color: var(--ink-soft); margin-top: 3px; }

@media (max-width: 640px) {
  .topbar-nav { display: none; }
  .hero { padding: 44px 0 40px; }
}
"""

GREEK_JS = """// COSYlanguages Greek Grammar Manual Interactivity Engine
(function(){
  "use strict";

  function initChecklists(){
    document.querySelectorAll('.checklist[data-key]').forEach(function(box){
      var key = 'cosy-check-' + box.getAttribute('data-key');
      var stored = {};
      try { stored = JSON.parse(localStorage.getItem(key) || '{}'); } catch(e){}
      var items = box.querySelectorAll('.check-item');
      function updateProgress(){
        var done = box.querySelectorAll('.check-item.done').length;
        var prog = box.querySelector('.check-progress');
        if(prog) prog.textContent = done + ' / ' + items.length + ' δεξιότητες επιλεγμένες';
      }
      items.forEach(function(item, i){
        var input = item.querySelector('input');
        if(stored[i]){ item.classList.add('done'); input.checked = true; }
        item.addEventListener('click', function(e){
          if(e.target !== input){ input.checked = !input.checked; }
          item.classList.toggle('done', input.checked);
          stored[i] = input.checked;
          localStorage.setItem(key, JSON.stringify(stored));
          updateProgress();
        });
      });
      updateProgress();
    });
  }

  function initMistakeFlip(){
    document.querySelectorAll('.mflip').forEach(function(card){
      card.addEventListener('click', function(){ card.classList.toggle('flipped'); });
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); card.classList.toggle('flipped'); }
      });
    });
  }

  function initQuizzes(){
    document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
      var data;
      try { data = JSON.parse(panel.getAttribute('data-quiz')); } catch(e){ return; }
      var scoreEl = panel.querySelector('.quiz-score');
      var score = 0;
      function refreshScore(){
        if(scoreEl) scoreEl.textContent = 'Σκορ: ' + score + ' / ' + data.length;
      }
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
            if(explain){ explain.classList.add('show'); }
          });
        });
      });
      refreshScore();
      var resetBtn = panel.querySelector('.quiz-reset');
      if(resetBtn){
        resetBtn.addEventListener('click', function(){
          location.reload();
        });
      }
    });
  }

  function initSentenceBuilder(){
    var builder = document.getElementById('sentence-builder');
    if(!builder) return;
    var slots = builder.querySelectorAll('.slot');
    var out = builder.querySelector('.sentence-out');
    var state = {subject: null, verb: null, object: null};
    var sentences = {
      'Η Μαρία|διαβάζει|ένα καλό βιβλίο': 'Η Μαρία διαβάζει ένα καλό βιβλίο.',
      'Ο Νίκος|πίνει|καφέ': 'Ο Νίκος πίνει καφέ.',
      'Αυτοί|παίζουν|ποδόσφαιρο': 'Αυτοί παίζουν ποδόσφαιρο.'
    };
    builder.querySelectorAll('.pool button').forEach(function(btn){
      btn.addEventListener('click', function(){
        var role = btn.getAttribute('data-role');
        var word = btn.getAttribute('data-word');
        state[role] = word;
        var slot = builder.querySelector('.slot[data-role="'+role+'"]');
        if(slot){
          slot.textContent = word;
          slot.classList.add('filled');
        }
        if(state.subject && state.verb && state.object){
          var key = state.subject+'|'+state.verb+'|'+state.object;
          if(out) out.textContent = sentences[key] || (state.subject+' '+state.verb+' '+state.object+'.');
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    initChecklists();
    initMistakeFlip();
    initQuizzes();
    initSentenceBuilder();
  });
})();
"""

SECTIONS = [
    {
        "id": "xekinontas",
        "file": "xekinontas.html",
        "title": "ΞΕΚΙΝΩΝΤΑΣ",
        "subtitle": "Το ελληνικό αλφάβητο, η προφορά και η δομή του εγχειριδίου",
        "stripe": "#3562e0"
    },
    {
        "id": "meros-1",
        "file": "meros-1.html",
        "title": "ΜΕΡΟΣ 1 · ΟΥΣΙΑΣΤΙΚΑ, ΓΕΝΟΣ & ΠΤΩΣΕΙΣ",
        "subtitle": "Βασική σειρά λέξεων, γένη, αντωνυμίες, ρήματα είμαι/έχω, πτώσεις, άρθρα και πληθυντικός",
        "stripe": "#3562e0"
    },
    {
        "id": "meros-2",
        "file": "meros-2.html",
        "title": "ΜΕΡΟΣ 2 · ΡΗΜΑΤΑ & ΧΡΟΝΟΙ",
        "subtitle": "Οικογένειες ρημάτων, ενεστώτας, αόριστος, μέλλοντας, προστακτική και εκφράσεις",
        "stripe": "#1c9483"
    },
    {
        "id": "meros-3",
        "file": "meros-3.html",
        "title": "ΜΕΡΟΣ 3 · ΠΕΡΙΓΡΑΦΗ",
        "subtitle": "Επίθετα, βαθμοί σύγκρισης, επιρρήματα, επιτατικά μόρια και μετρήσιμα/αμέτρητα ουσιαστικά",
        "stripe": "#c9740a"
    },
    {
        "id": "meros-4",
        "file": "meros-4.html",
        "title": "ΜΕΡΟΣ 4 · ΣΥΝΔΕΤΙΚΕΣ ΛΕΞΕΙΣ",
        "subtitle": "Προθέσεις, χρονικά επιρρήματα, καιρός, σύνδεσμοι, ερωτηματικές λέξεις, αριθμοί και ώρα",
        "stripe": "#7c4fd6"
    },
    {
        "id": "parartima",
        "file": "parartima.html",
        "title": "ΠΑΡΑΡΤΗΜΑ",
        "subtitle": "Ανώμαλα ρήματα και η ελληνική γλώσσα στον κόσμο (Ελλάδα & Κύπρος)",
        "stripe": "#a3195b"
    }
]

def make_table(headers, rows):
    th_html = "".join([f"<th>{h}</th>" for h in headers])
    tr_html = []
    for r in rows:
        td_html = "".join([f"<td>{cell}</td>" for cell in r])
        tr_html.append(f"<tr>{td_html}</tr>")
    return f'<div class="table-wrap"><table><thead><tr>{th_html}</tr></thead><tbody>{"".join(tr_html)}</tbody></table></div>'

TOPICS = [
    # PAGE 3
    {
        "section": "xekinontas", "slug": "pos-leitourgei-afto-to-egcheiridio",
        "title": "Πώς Λειτουργεί Αυτό το Εγχειρίδιο", "subtitle": "Μερικά οπτικά σημάδια που θα σε βοηθήσουν να καταλάβεις τη γραμματική", "page_num": 3, "vocab_theme": "Εισαγωγή στη μελέτη",
        "html": """
<div class="box why">
  <h3>💡 Χρωματικός κώδικας στα παραδείγματα</h3>
  <p><strong><span style="color:#3562e0;">Υποκείμενο:</span></strong> ποιος κάνει την ενέργεια — <em>Αυτή διαβάζει.</em><br>
  <strong><span style="color:#1c8f56;">Ρήμα / ενέργεια:</span></strong> η ίδια η ενέργεια — <em>Αυτή διαβάζει.</em><br>
  <strong><span style="color:#c9740a;">Ουσιαστικό / αντικείμενο:</span></strong> πρόσωπο, τόπος ή πράγμα — <em>Αυτή διαβάζει ένα βιβλίο.</em><br>
  <strong><span style="color:#7c4fd6;">Επίθετο:</span></strong> περιγράφει ένα ουσιαστικό — <em>ένα καλό βιβλίο.</em><br>
  <strong><span style="color:#a3195b;">Ερωτηματική λέξη:</span></strong> ζητά πληροφορία — <em>Πού είναι;</em><br>
  <strong><span style="color:#0f5c50;">Κατάληξη:</span></strong> το κομμάτι της λέξης που αλλάζει με το πρόσωπο, την πτώση, ή το γένος — <em>δουλεύουν.</em></p>
</div>
<div class="box rule-box">
  <h3>Σύμβολα σε αυτό το εγχειρίδιο</h3>
  <p><strong>⚠ Συνηθισμένα λάθη:</strong> πραγματικά λάθη που κάνουν οι αρχάριοι, και δίπλα η σωστή μορφή.<br>
  <strong>◆ Παρατήρηση:</strong> μια καθοδηγητική ερώτηση για να βρεις μόνος/-η σου το μοτίβο.<br>
  <strong>✓ Σωστό:</strong> μια σωστή πρόταση — η μορφή που πρέπει να χρησιμοποιείς.<br>
  <strong>✗ Λάθος:</strong> ένα λάθος που πρέπει να αποφεύγεις — δείχνεται διαγραμμένο.</p>
</div>
<div class="box mint">
  <h3>Σηματάκια περιφερειακών ποικιλιών</h3>
  <p><span class="badge gr">GR</span> <strong>Κοινή Νέα Ελληνική:</strong> όπως ομιλείται στην Ελλάδα.<br>
  <span class="badge cy">CY</span> <strong>Κυπριακά Ελληνικά:</strong> όπως ομιλούνται στην Κύπρο (διαφορετική διάλεκτος).<br>
  <em>Αυτά τα σηματάκια εμφανίζονται όπου η γραμματική ή το λεξιλόγιο διαφέρουν πραγματικά — δες το Παράρτημα για πλήρη αναφορά.</em></p>
</div>
<div class="box native">
  <h3>Παράδειγμα μιας πλήρως χρωματισμένης πρότασης</h3>
  <div class="block-row">
    <div class="gblock subject"><span class="k">Υποκείμενο</span><span class="v">Η Μαρία</span></div>
    <div class="gblock verb"><span class="k">Ρήμα</span><span class="v">διαβάζει</span></div>
    <div class="gblock adj"><span class="k">Επίθετο</span><span class="v">ένα καλό</span></div>
    <div class="gblock noun"><span class="k">Ουσιαστικό</span><span class="v">βιβλίο.</span></div>
  </div>
  <p style="text-align:center; font-size:14px; margin-top:8px;">Υποκείμενο + ρήμα (συμφωνεί σε πρόσωπο) + επίθετο (συμφωνεί σε γένος/πτώση) + ουσιαστικό (σε αιτιατική, ως αντικείμενο).</p>
</div>""",
        "check": ["Αναγνώριση του χρωματικού κώδικα στα παραδείγματα", "Κατανόηση των συμβόλων ✓, ✗, ⚠ και ◆", "Αναγνώριση των σημάτων GR και CY"],
        "quiz": [{"q": "Τι δείχνει το μπλε χρώμα στα παραδείγματα;", "opts": ["Το υποκείμενο", "Το ρήμα", "Το αντικείμενο"], "correct": 0, "explain": "Το μπλε χρώμα αντιστοιχεί στο υποκείμενο."}]
    },

    # PAGE 5
    {
        "section": "xekinontas", "slug": "to-elliniko-alfavito",
        "title": "Το Ελληνικό Αλφάβητο", "subtitle": "24 γράμματα, 7 ήχοι φωνηέντων", "page_num": 5, "vocab_theme": "Ήχοι & γράμματα",
        "html": make_table(
          ["Γράμμα", "Όνομα", "ΔΦΑ / Ήχος", "Παράδειγμα"],
          [
            ["Α α", "άλφα", "/a/", "μαμά"], ["Β β", "βήτα", "/v/", "βουνό"], ["Γ γ", "γάμα", "/ɣ/", "γάτα"],
            ["Δ δ", "δέλτα", "/ð/", "δέντρο"], ["Ε ε", "έψιλον", "/e/", "ένα"], ["Ζ ζ", "ζήτα", "/z/", "ζωή"],
            ["Η η", "ήτα", "/i/", "ήλιος"], ["Θ θ", "θήτα", "/θ/", "θάλασσα"], ["Ι ι", "γιώτα", "/i/", "ιδέα"],
            ["Κ κ", "κάπα", "/k/", "καλά"], ["Λ λ", "λάμδα", "/l/", "λάθος"], ["Μ μ", "μι", "/m/", "μέρα"],
            ["Ν ν", "νι", "/n/", "ναι"], ["Ξ ξ", "ξι", "/ks/", "ξένος"], ["Ο ο", "όμικρον", "/o/", "όχι"],
            ["Π π", "πι", "/p/", "πατέρας"], ["Ρ ρ", "ρο", "/r/", "ρολόι"], ["Σ σ/ς", "σίγμα", "/s/", "σπίτι (το ς μόνο στο τέλος)"],
            ["Τ τ", "ταυ", "/t/", "τι"], ["Υ υ", "ύψιλον", "/i/", "ύπνος"], ["Φ φ", "φι", "/f/", "φίλος"],
            ["Χ χ", "χι", "/x/", "χαρά"], ["Ψ ψ", "ψι", "/ps/", "ψωμί"], ["Ω ω", "ωμέγα", "/o/", "ώρα"]
          ]
        ) + """
<div class="box why">
  <h3>◆ Πέντε τρόποι για να γράψεις το «Ι»</h3>
  <p>Ο ήχος «ι» γράφεται με πολλούς διαφορετικούς τρόπους στα ελληνικά: <strong>η, ι, υ, ει, οι</strong> ακούγονται όλα σαν «ι»· το <strong>αι</strong> ακούγεται σαν «ε». Αυτό είναι φυσιολογικό — πρόσεξε τον ήχο, η ορθογραφία έρχεται με την εξάσκηση.</p>
</div>
<div class="box native">
  <h3>💡 Κόλπο μνήμης</h3>
  <p>Πολλά ελληνικά γράμματα μοιάζουν στη μορφή με γράμματα άλλων αλφαβήτων, αλλά ο ήχος τους μπορεί να διαφέρει εντελώς — για παράδειγμα, το <strong>Ρ</strong>, το <strong>Χ</strong> και το <strong>Ν</strong> δεν έχουν τον ήχο που περιμένεις από τη μορφή τους. Μάθε κάθε γράμμα με τον δικό του ήχο.</p>
</div>""",
        "check": ["Απαγγελία των 24 γραμμάτων", "Αναγνώριση των 5 διαφορετικών γραφών για τον ήχο «ι»", "Σωστή χρήση του τελικού ς"],
        "quiz": [{"q": "Πόσα γράμματα έχει το ελληνικό αλφάβητο;", "opts": ["22", "24", "26"], "correct": 1, "explain": "Το ελληνικό αλφάβητο έχει 24 γράμματα."}]
    },

    # PAGE 6
    {
        "section": "xekinontas", "slug": "profora-kai-tonos",
        "title": "Προφορά & Τόνος", "subtitle": "Πώς διαβάζουμε τα ελληνικά δυνατά", "page_num": 6, "vocab_theme": "Προφορά & κανόνες",
        "html": """
<div class="box rule-box">
  <h3>Ο τόνος</h3>
  <p>Κάθε ελληνική λέξη με δύο ή περισσότερες συλλαβές έχει ένα γραπτό σημάδι τόνου (´) πάνω από το φωνήεν που τονίζεται. Αυτό το σημάδι είναι υποχρεωτικό στη γραφή και αλλάζει την προφορά της λέξης — μερικές φορές και τη σημασία της.</p>
</div>""" + make_table(
          ["Λέξη", "ΔΦΑ", "Πού πέφτει ο τόνος", "Σημασία"],
          [
            ["πατέρας", "/paˈteras/", "στη 2η συλλαβή", "ο γονιός"],
            ["μάθημα", "/ˈmaθima/", "στην 1η συλλαβή", "το σχολικό μάθημα"],
            ["πότε", "/ˈpote/", "στην 1η συλλαβή", "ερωτηματική λέξη για τον χρόνο"],
            ["ποτέ", "/poˈte/", "στη 2η συλλαβή", "καμία φορά ή κάποια φορά"]
          ]
        ) + """
<div class="box why">
  <h3>◆ Ίδια γράμματα, διαφορετική σημασία</h3>
  <p>Οι λέξεις «πότε» και «ποτέ» γράφονται με τα ίδια ακριβώς γράμματα — μόνο η θέση του τόνου τις ξεχωρίζει.</p>
</div>""" + make_table(
          ["Συνδυασμός", "ΔΦΑ", "Ήχος & Παράδειγμα"],
          [
            ["μπ", "/b/", "όπως το «μπ» στην αρχή μιας λέξης (μπάλα)"],
            ["ντ", "/d/", "όπως το «ντ» στην αρχή μιας λέξης (ντομάτα)"],
            ["γκ", "/g/", "όπως το «γκ» στην αρχή μιας λέξης (γκρίζος)"],
            ["τσ", "/ts/", "ένας ενιαίος ήχος (τσάι)"],
            ["γγ", "/ŋg/", "ένας ρινικός ήχος (αγγελία)"]
          ]
        ),
        "check": ["Σωστός τονισμός λέξεων", "Διάκριση ανάμεσα στο «πότε» και «ποτέ»", "Προφορά των διψήφων συμφώνων"],
        "quiz": [{"q": "Τι σημαίνει η λέξη «πότε;»;", "opts": ["When?", "Never", "Always"], "correct": 0, "explain": "Το πότε σημαίνει όταν ρωτάμε για τον χρόνο."}]
    },

    # PAGE 7
    {
        "section": "meros-1", "slug": "vasiki-seira-lexeon",
        "title": "Βασική Σειρά Λέξεων", "subtitle": "Υποκείμενο + Ρήμα + Αντικείμενο — και πότε παραλείπουμε το υποκείμενο", "page_num": 7, "vocab_theme": "Καθημερινές δραστηριότητες",
        "html": """<div class="box rule-box"><p><strong>Κανόνας:</strong> Υποκείμενο → Ρήμα → Αντικείμενο. Επειδή η κατάληξη του ρήματος δείχνει ποιος κάνει την ενέργεια, το υποκείμενο συχνά παραλείπεται.</p></div>""" +
        make_table(["Υποκείμενο", "Ρήμα", "Αντικείμενο"], [["(Εγώ)", "διαβάζω", "ένα βιβλίο."], ["Η Άννα", "διαβάζει", "βιβλία."], ["Αυτοί", "παίζουν", "ποδόσφαιρο."]]) +
        """<div class="mistakes"><div class="m-title">⚠ Συνηθισμένα λάθη</div><div class="mflip"><div class="wrong-line"><span class="x">✗</span> <span class="wrong-text">Εγώ είμαι διαβάζω.</span></div><span class="hint">πατήστε για τη σωστή μορφή</span><div class="right-line"><span class="c">✓</span> <span>Διαβάζω.</span></div></div></div>""",
        "check": ["Σειρά Υποκείμενο + Ρήμα + Αντικείμενο", "Παράλειψη υποκειμένου όταν η κατάληξη αρκεί"],
        "quiz": [{"q": "Ποια είναι η σωστή πρόταση;", "opts": ["Διαβάζω ένα βιβλίο.", "Εγώ είμαι διαβάζω ένα βιβλίο."], "correct": 0, "explain": "Δεν βάζουμε είμαι πριν από το ρήμα."}]
    },

    # PAGE 8
    {
        "section": "meros-1", "slug": "to-genos-ton-ousiastikon",
        "title": "Το Γένος των Ουσιαστικών", "subtitle": "Ο / Η / Το — αρσενικό, θηλυκό, ουδέτερο", "page_num": 8, "vocab_theme": "Οικογένεια",
        "html": make_table(["Γένος", "Άρθρο", "Καταλήξεις", "Παράδειγμα"], [
          ["Αρσενικό", "ο", "-ος, -ης, -ας", "ο άνθρωπος, ο μαθητής, ο πατέρας"],
          ["Θηλυκό", "η", "-α, -η", "η μητέρα, η ζωή"],
          ["Ουδέτερο", "το", "-ο, -ι, -μα", "το βιβλίο, το παιδί, το όνομα"]
        ]) + """<div class="mistakes"><div class="m-title">⚠ Συνηθισμένα λάθη</div><div class="mflip"><div class="wrong-line"><span class="x">✗</span> <span class="wrong-text">Ο μητέρα</span></div><span class="hint">πατήστε για τη σωστή μορφή</span><div class="right-line"><span class="c">✓</span> <span>Η μητέρα</span></div></div></div>""",
        "check": ["3 γένη και άρθρα ο, η, το", "Αναγνώριση γένους από την κατάληξη"],
        "quiz": [{"q": "Ποιο είναι το άρθρο για τη λέξη «παιδί»;", "opts": ["ο", "η", "το"], "correct": 2, "explain": "Το παιδί είναι ουδέτερο."}]
    },

    # PAGE 9
    {
        "section": "meros-1", "slug": "prosopikes-antonymies",
        "title": "Προσωπικές Αντωνυμίες", "subtitle": "Αντωνυμίες υποκειμένου & κτητικές λέξεις", "page_num": 9, "vocab_theme": "Οικογένεια & φίλοι",
        "html": make_table(["Υποκείμενο", "Κτητικό", "Παράδειγμα"], [
          ["εγώ", "μου", "το βιβλίο μου"], ["εσύ", "σου", "το βιβλίο σου"],
          ["αυτός/ή/ό", "του/της/του", "το βιβλίο του"], ["εμείς", "μας", "το βιβλίο μας"],
          ["εσείς", "σας", "το βιβλίο σας"], ["αυτοί/ές/ά", "τους", "το βιβλίο τους"]
        ]) + """<div class="box rule-box"><p>Οι κτητικές λέξεις έρχονται <strong>μετά</strong> το ουσιαστικό: <em>το βιβλίο μου</em>.</p></div>""",
        "check": ["Κτητικές αντωνυμίες μετά το ουσιαστικό", "Ευγενικό πληθυντικό εσείς"],
        "quiz": [{"q": "Πού μπαίνει η λέξη «μου»;", "opts": ["Πριν το ουσιαστικό", "Μετά το ουσιαστικό"], "correct": 1, "explain": "Το βιβλίο μου."}]
    },

    # PAGE 10
    {
        "section": "meros-1", "slug": "antonymies-antikeimenou",
        "title": "Αντωνυμίες Αντικειμένου", "subtitle": "Άμεσο & έμμεσο αντικείμενο — πριν από το ρήμα", "page_num": 10, "vocab_theme": "Συναισθήματα",
        "html": make_table(["Υποκείμενο", "Άμεσο", "Έμμεσο", "Παράδειγμα"], [
          ["εγώ", "με", "μου", "Με βλέπει. / Μου δίνει ένα βιβλίο."],
          ["εσύ", "σε", "σου", "Σε βλέπω. / Σου δίνω ένα βιβλίο."],
          ["αυτός/ή/ό", "τον/την/το", "του/της/του", "Τον βλέπω. / Του δίνω ένα βιβλίο."]
        ]) + """<div class="box why"><h3>◆ Πριν από το ρήμα</h3><p>Με αδύνατη αντωνυμία: <em>Τον βλέπω.</em></p></div>""",
        "check": ["Τοποθέτηση αδύνατης αντωνυμίας πριν το ρήμα"],
        "quiz": [{"q": "Ποιο είναι σωστό;", "opts": ["Τον βλέπω.", "Βλέπω τον."], "correct": 0, "explain": "Τον βλέπω."}]
    },

    # PAGE 11
    {
        "section": "meros-1", "slug": "to-rima-eimai",
        "title": "Το Ρήμα 'Είμαι'", "subtitle": "Είμαι, είσαι, είναι…", "page_num": 11, "vocab_theme": "Επαγγέλματα & εθνικότητες",
        "html": make_table(["Υποκείμενο", "Κατάφαση", "Άρνηση", "Ερώτηση"], [
          ["(εγώ)", "είμαι", "δεν είμαι", "Είμαι…;"],
          ["(εσύ)", "είσαι", "δεν είσαι", "Είσαι…;"],
          ["αυτός/ή/ό", "είναι", "δεν είναι", "Είναι…;"],
          ["(εμείς)", "είμαστε", "δεν είμαστε", "Είμαστε…;"],
          ["(εσείς)", "είστε", "δεν είστε", "Είστε…;"],
          ["αυτοί/ές/ά", "είναι", "δεν είναι", "Είναι…;"]
        ]) + """<div class="box rule-box"><p><strong>Άρνηση:</strong> Βάζουμε το <strong>δεν</strong> ακριβώς πριν από το ρήμα.</p></div>""",
        "check": ["Κλίση του είμαι", "Σημασία και άρνηση με δεν"],
        "quiz": [{"q": "Ποιος είναι ο τύπος για το 'εμείς';", "opts": ["είμαστε", "είστε", "είναι"], "correct": 0, "explain": "Εμείς είμαστε."}]
    },

    # PAGE 12
    {
        "section": "meros-1", "slug": "to-rima-echo",
        "title": "Το Ρήμα 'Έχω'", "subtitle": "Έχω, έχεις, έχει…", "page_num": 12, "vocab_theme": "Οικογένεια & κατοικίδια",
        "html": make_table(["Υποκείμενο", "Κατάφαση", "Άρνηση", "Ερώτηση"], [
          ["(εγώ)", "έχω", "δεν έχω", "Έχω…;"],
          ["(εσύ)", "έχεις", "δεν έχεις", "Έχεις…;"],
          ["αυτός/ή/ό", "έχει", "δεν έχει", "Έχει…;"],
          ["(εμείς)", "έχουμε", "δεν έχουμε", "Έχουμε…;"],
          ["(εσείς)", "έχετε", "δεν έχετε", "Έχετε…;"],
          ["αυτοί/ές/ά", "έχουν", "δεν έχουν", "Έχουν…;"]
        ]),
        "check": ["Κλίση του έχω σε όλες τις αντωνυμίες"],
        "quiz": [{"q": "Ποιος είναι ο τύπος για το 'εσύ';", "opts": ["έχω", "έχεις", "έχει"], "correct": 1, "explain": "Εσύ έχεις."}]
    },

    # PAGE 13
    {
        "section": "meros-1", "slug": "to-systima-ton-ptoseon",
        "title": "Το Σύστημα των Πτώσεων", "subtitle": "Ονομαστική · Αιτιατική · Γενική · Κλητική", "page_num": 13, "vocab_theme": "Το σχολείο",
        "html": make_table(["Πτώση", "Ρόλος στην πρόταση", "Παράδειγμα"], [
          ["Ονομαστική", "Το υποκείμενο (ποιος κάνει την ενέργεια)", "Ο Νίκος διαβάζει."],
          ["Αιτιατική", "Το αντικείμενο (ποιον/τι βλέπω) & μετά από προθέσεις", "Βλέπω τον Νίκο."],
          ["Γενική", "Η κτήση (τίνος είναι;)", "Το βιβλίο του Νίκου."],
          ["Κλητική", "Όταν φωνάζουμε κάποιον", "Νίκο, έλα εδώ!"]
        ]) + """<div class="box why"><h3>◆ Μοτίβο: -ος → -ο → -ου</h3><p>Ο Νίκος → τον Νίκο → του Νίκου → Νίκο!</p></div>""",
        "check": ["4 πτώσεις στα ελληνικά", "Διάκριση ονομαστικής (υποκείμενο) και αιτιατικής (αντικείμενο)"],
        "quiz": [{"q": "Ποια πτώση χρησιμοποιείται για το αντικείμενο;", "opts": ["Ονομαστική", "Αιτιατική", "Γενική"], "correct": 1, "explain": "Η αιτιατική είναι η πτώση του αντικειμένου."}]
    },

    # PAGE 14
    {
        "section": "meros-1", "slug": "pliris-klisi-ousiastikou",
        "title": "Πλήρης Κλίση Ουσιαστικού", "subtitle": "Ένα παράδειγμα ανά γένος, σε όλες τις πτώσεις", "page_num": 14, "vocab_theme": "Άνθρωποι & αντικείμενα",
        "html": make_table(["Πτώση / Αριθμός", "Αρσενικό (ο φίλος)", "Θηλυκό (η μητέρα)", "Ουδέτερο (το παιδί)"], [
          ["Ονομ. ενικός", "ο φίλος", "η μητέρα", "το παιδί"],
          ["Αιτ. ενικός", "τον φίλο", "τη μητέρα", "το παιδί"],
          ["Γεν. ενικός", "του φίλου", "της μητέρας", "του παιδιού"],
          ["Ονομ. πληθ.", "οι φίλοι", "οι μητέρες", "τα παιδιά"],
          ["Αιτ. πληθ.", "τους φίλους", "τις μητέρες", "τα παιδιά"],
          ["Γεν. πληθ.", "των φίλων", "των μητέρων", "των παιδιών"]
        ]),
        "check": ["Κλίση αρσενικού, θηλυκού και ουδέτερου"],
        "quiz": [{"q": "Ποια είναι η αιτιατική πληθυντικού για το «ο φίλος»;", "opts": ["οι φίλοι", "τους φίλους", "των φίλων"], "correct": 1, "explain": "Τους φίλους."}]
    },

    # PAGE 15
    {
        "section": "meros-1", "slug": "arthra-oristiko-kai-aoristo",
        "title": "Άρθρα: Οριστικό & Αόριστο", "subtitle": "Ο / Η / Το και ένας / μία / ένα", "page_num": 15, "vocab_theme": "Το σπίτι",
        "html": make_table(["Πτώση", "Οριστικό Αρσ.", "Οριστικό Θηλ.", "Οριστικό Ουδ.", "Αόριστο Αρσ.", "Αόριστο Θηλ.", "Αόριστο Ουδ."], [
          ["Ονομαστική", "ο", "η", "το", "ένας", "μία (μια)", "ένα"],
          ["Αιτιατική", "τον", "την (τη)", "το", "έναν", "μία (μια)", "ένα"],
          ["Γενική", "του", "της", "του", "ενός", "μιας", "ενός"]
        ]),
        "check": ["Οριστικό και αόριστο άρθρο στους 3 γένη"],
        "quiz": [{"q": "Ποιο είναι το αόριστο άρθρο για θηλυκό ουσιαστικό στην ονομαστική;", "opts": ["ένας", "μία", "ένα"], "correct": 1, "explain": "Μία (μια)."}]
    },

    # PAGE 16
    {
        "section": "meros-1", "slug": "aftos-ekeinos",
        "title": "Αυτός, Εκείνος", "subtitle": "Δεικτικές αντωνυμίες που συμφωνούν σε γένος & αριθμό", "page_num": 16, "vocab_theme": "Ρούχα",
        "html": make_table(["Τύπος", "Αρσενικό", "Θηλυκό", "Ουδέτερο"], [
          ["Αυτός (κοντά, ενικός)", "αυτός", "αυτή", "αυτό"],
          ["Εκείνος (μακριά, ενικός)", "εκείνος", "εκείνη", "εκείνο"],
          ["Αυτοί (κοντά, πληθυντικός)", "αυτοί", "αυτές", "αυτά"],
          ["Εκείνοι (μακριά, πληθυντικός)", "εκείνοι", "εκείνες", "εκείνα"]
        ]) + """<div class="box rule-box"><p>Συνήθως κρατάμε το άρθρο: <em>αυτός ο άνθρωπος</em>.</p></div>""",
        "check": ["Χρήση αυτός/εκείνος με συμφωνία γένους"],
        "quiz": [{"q": "Πώς λέμε 'this woman';", "opts": ["Αυτός η γυναίκα", "Αυτή η γυναίκα"], "correct": 1, "explain": "Αυτή η γυναίκα."}]
    },

    # PAGE 17
    {
        "section": "meros-1", "slug": "plithyntikos-arithmos",
        "title": "Πληθυντικός Αριθμός", "subtitle": "Πώς αλλάζουν οι καταλήξεις — και τα άρθρα", "page_num": 17, "vocab_theme": "Ζώα",
        "html": make_table(["Γένος & Κατάληξη Ενικού", "Αλλαγή στον πληθυντικό", "Παράδειγμα"], [
          ["Αρσ. -ος", "-οι", "ο φίλος → οι φίλοι"],
          ["Αρσ. -ης / -ας", "-ες", "ο μαθητής → οι μαθητές, ο πατέρας → οι πατέρες"],
          ["Θηλ. -α / -η", "-ες", "η μητέρα → οι μητέρες, η ζωή → οι ζωές"],
          ["Ουδ. -ο", "-α", "το βιβλίο → τα βιβλία"],
          ["Ουδ. -ι", "-ια", "το παιδί → τα παιδιά"],
          ["Ουδ. -μα", "-ματα", "το όνομα → τα ονόματα"]
        ]),
        "check": ["Σχηματισμός πληθυντικού στα 3 γένη"],
        "quiz": [{"q": "Ποιος είναι ο πληθυντικός για «το βιβλίο»;", "opts": ["οι βιβλίο", "τα βιβλία", "τους βιβλία"], "correct": 1, "explain": "Τα βιβλία."}]
    },

    # PAGE 18
    {
        "section": "meros-1", "slug": "yparchei-yparchoun",
        "title": "Υπάρχει / Υπάρχουν", "subtitle": "Πώς μιλάμε για αυτό που υπάρχει", "page_num": 18, "vocab_theme": "Δωμάτια & έπιπλα",
        "html": make_table(["Χρόνος", "Κατάφαση", "Άρνηση", "Ερώτηση"], [
          ["Ενεστώτας (ένα)", "Υπάρχει ένα βιβλίο.", "Δεν υπάρχει βιβλίο.", "Υπάρχει βιβλίο;"],
          ["Ενεστώτας (πολλά)", "Υπάρχουν δύο βιβλία.", "Δεν υπάρχουν βιβλία.", "Υπάρχουν βιβλία;"],
          ["Παρελθόν", "Υπήρχε ένα πάρτυ.", "Δεν υπήρχε πάρτυ.", "Υπήρχε πάρτυ;"],
          ["Μέλλοντας", "Θα υπάρχει ένα πάρτυ.", "Δεν θα υπάρχει πάρτυ.", "Θα υπάρχει πάρτυ;"]
        ]),
        "check": ["Διάκριση υπάρχει (ενικός) και υπάρχουν (πληθυντικός)"],
        "quiz": [{"q": "«___ δύο σκύλοι στον κήπο.»", "opts": ["Υπάρχει", "Υπάρχουν"], "correct": 1, "explain": "Πληθυντικός αριθμός → υπάρχουν."}]
    },

    # PAGE 19
    {
        "section": "meros-1", "slug": "tinos-i-ktitiki-ptosi",
        "title": "Τίνος; Η Κτητική Πτώση", "subtitle": "Πώς δείχνουμε την κτήση με τη γενική", "page_num": 19, "vocab_theme": "Προσωπικά αντικείμενα",
        "html": make_table(["Δομή", "Παράδειγμα"], [
          ["πράγμα + κάτοχος (γενική)", "το βιβλίο του Γιώργου"],
          ["ερωτηματική λέξη", "Τίνος είναι αυτό το βιβλίο;"],
          ["απάντηση", "Είναι του Γιώργου."]
        ]) + """<div class="box why"><h3>◆ Ο κάτοχος έρχεται δεύτερος</h3><p>Πρώτα το πράγμα, μετά ο κάτοχος σε γενική: <em>το βιβλίο του Γιώργου</em>.</p></div>""",
        "check": ["Έκφραση κτήσης με γενική πτώση"],
        "quiz": [{"q": "Πώς μεταφράζουμε 'George's book';", "opts": ["Το βιβλίο Γιώργος", "Το βιβλίο του Γιώργου"], "correct": 1, "explain": "Ο κάτοχος μπαίνει σε γενική πτώση."}]
    },

    # SECTION 2: ΡΗΜΑΤΑ & ΧΡΟΝΟΙ (Pages 20-34)
    # PAGE 20
    {
        "section": "meros-2", "slug": "oi-oikogeneies-ton-rimaton",
        "title": "Οι Οικογένειες των Ρημάτων", "subtitle": "Ένας χάρτης για όλα τα ρήματα του επιπέδου Α0–Α1", "page_num": 20, "vocab_theme": "Καθημερινές δραστηριότητες",
        "html": make_table(["Οικογένεια", "Συχνά ρήματα"], [
          ["Ομάδα Α (-ω)", "διαβάζω, γράφω, δουλεύω, παίζω, βλέπω, ξέρω, θέλω, πίνω, βρίσκω, μένω"],
          ["Ομάδα Β1 (-άω/-ώ)", "μιλάω/μιλώ, αγαπάω, ρωτάω, απαντάω, ξεχνάω, ζητάω"],
          ["Ομάδα Β2 (μόνο -ώ)", "μπορώ, θεωρώ, ζω, παρακαλώ"],
          ["Αποθετικά -ομαι", "έρχομαι, γίνομαι, κάθομαι, στέκομαι, λέγομαι, χρειάζομαι"],
          ["Αποθετικά -άμαι", "κοιμάμαι, θυμάμαι, λυπάμαι, φοβάμαι"]
        ]),
        "check": ["Αναγνώριση των 4 βασικών οικογενειών ρημάτων"],
        "quiz": [{"q": "Σε ποια ομάδα ανήκει το ρήμα «διαβάζω»;", "opts": ["Ομάδα Α (-ω)", "Ομάδα Β1 (-άω)", "Αποθετικό"], "correct": 0, "explain": "Το διαβάζω ανήκει στην Ομάδα Α."}]
    },

    # PAGE 21
    {
        "section": "meros-2", "slug": "enestotas-omada-a",
        "title": "Ενεστώτας — Ομάδα Α", "subtitle": "Ρήματα σαν το Διαβάζω (-ω)", "page_num": 21, "vocab_theme": "Καθημερινή ρουτίνα",
        "html": make_table(["Υποκείμενο", "Διαβάζω", "Άρνηση", "Ερώτηση"], [
          ["(εγώ)", "διαβάζω", "δεν διαβάζω", "Διαβάζω…;"],
          ["(εσύ)", "διαβάζεις", "δεν διαβάζεις", "Διαβάζεις…;"],
          ["αυτός/ή/ό", "διαβάζει", "δεν διαβάζει", "Διαβάζει…;"],
          ["(εμείς)", "διαβάζουμε", "δεν διαβάζουμε", "Διαβάζουμε…;"],
          ["(εσείς)", "διαβάζετε", "δεν διαβάζετε", "Διαβάζετε…;"],
          ["αυτοί/ές/ά", "διαβάζουν(ε)", "δεν διαβάζουν", "Διαβάζουν…;"]
        ]),
        "check": ["Κλίση ρημάτων Ομάδας Α στον ενεστώτα"],
        "quiz": [{"q": "«Αυτή ___ ένα βιβλίο.»", "opts": ["διαβάζεις", "διαβάζει", "διαβάζετε"], "correct": 1, "explain": "Αυτή διαβάζει (-ει). "}]
    },

    # PAGE 22
    {
        "section": "meros-2", "slug": "enestotas-omada-v",
        "title": "Ενεστώτας — Ομάδα Β", "subtitle": "Ρήματα σαν το Μιλάω/Μιλώ (-άω/-ώ)", "page_num": 22, "vocab_theme": "Συναισθήματα & προτιμήσεις",
        "html": make_table(["Υποκείμενο", "Μιλάω / Μιλώ", "Αγαπάω"], [
          ["(εγώ)", "μιλάω / μιλώ", "αγαπάω"],
          ["(εσύ)", "μιλάς", "αγαπάς"],
          ["αυτός/ή/ό", "μιλάει / μιλά", "αγαπάει"],
          ["(εμείς)", "μιλάμε", "αγαπάμε"],
          ["(εσείς)", "μιλάτε", "αγαπάτε"],
          ["αυτοί/ές/ά", "μιλάνε / μιλούν", "αγαπάνε"]
        ]) + """<div class="box why"><h3>Υποομάδα Β2 (μπορώ, ζω)</h3><p>Έχουν μόνο τύπους σε -ώ (-είς, -εί, -ούμε, -είτε, -ούν).</p></div>""",
        "check": ["Κλίση ρημάτων Ομάδας Β1 και Β2"],
        "quiz": [{"q": "Ποιος είναι ο σωστός τύπος για το 'εσύ' στο ρήμα μιλάω;", "opts": ["μιλάει", "μιλάς", "μιλάτε"], "correct": 1, "explain": "Εσύ μιλάς."}]
    },

    # PAGE 23
    {
        "section": "meros-2", "slug": "pos-se-lene",
        "title": "Πώς σε Λένε;", "subtitle": "Το ρήμα Λέγομαι — ρήματα σε -ομαι", "page_num": 23, "vocab_theme": "Πρώτη γνωριμία",
        "html": make_table(["Υποκείμενο", "Λέγομαι"], [
          ["(εγώ)", "λέγομαι"], ["(εσύ)", "λέγεσαι"], ["αυτός/ή/ό", "λέγεται"],
          ["(εμείς)", "λεγόμαστε"], ["(εσείς)", "λέγεστε"], ["αυτοί/ές/ά", "λέγονται"]
        ]) + """<div class="box why"><h3>Καθημερινή έκδοση</h3><p>Πώς σε λένε; / Με λένε Άννα. (από το ρήμα λέω)</p></div>""",
        "check": ["Έκφραση ονόματος με λέγομαι και με λένε"],
        "quiz": [{"q": "Πώς απαντάμε στην ερώτηση 'Πώς σε λένε;';", "opts": ["Εγώ είμαι λένε Άννα.", "Με λένε Άννα."], "correct": 1, "explain": "Με λένε Άννα."}]
    },

    # PAGE 24
    {
        "section": "meros-2", "slug": "rimata-se-amai",
        "title": "Ρήματα σε -άμαι", "subtitle": "Κοιμάμαι, θυμάμαι, λυπάμαι, φοβάμαι", "page_num": 24, "vocab_theme": "Ρουτίνα & συναισθήματα",
        "html": make_table(["Υποκείμενο", "Κοιμάμαι"], [
          ["(εγώ)", "κοιμάμαι"], ["(εσύ)", "κοιμάσαι"], ["αυτός/ή/ό", "κοιμάται"],
          ["(εμείς)", "κοιμόμαστε"], ["(εσείς)", "κοιμάστε"], ["αυτοί/ές/ά", "κοιμούνται"]
        ]),
        "check": ["Κλίση ρημάτων σε -άμαι"],
        "quiz": [{"q": "«Εγώ ___ νωρίς το βράδυ.»", "opts": ["κοιμάμαι", "κοιμάσαι", "κοιμάται"], "correct": 0, "explain": "Εγώ κοιμάμαι."}]
    },

    # PAGE 25
    {
        "section": "meros-2", "slug": "tora-i-synitheia",
        "title": "Τώρα ή Συνήθεια;", "subtitle": "Ένας ενεστώτας, δύο πιθανές σημασίες", "page_num": 25, "vocab_theme": "Ώρα & καθημερινότητα",
        "html": make_table(["Πρόταση", "Πιθανές σημασίες"], [
          ["Διαβάζω ένα βιβλίο.", "συνήθεια ή αυτή τη στιγμή (εξαρτάται από τα συμφραζόμενα)"],
          ["Διαβάζω τώρα.", "ξεκάθαρα «αυτή τη στιγμή»"],
          ["Διαβάζω κάθε μέρα.", "ξεκάθαρα μια συνήθεια"]
        ]),
        "check": ["Χρήση χρονικών λέξεων (τώρα vs κάθε μέρα)"],
        "quiz": [{"q": "Ποια λέξη δείχνει συνήθεια;", "opts": ["τώρα", "αυτή τη στιγμή", "κάθε μέρα"], "correct": 2, "explain": "Το 'κάθε μέρα' δείχνει συνήθεια."}]
    },

    # PAGE 26
    {
        "section": "meros-2", "slug": "mporo",
        "title": "Μπορώ", "subtitle": "Ικανότητα, άδεια & πιθανότητα", "page_num": 26, "vocab_theme": "Χόμπι & αθλήματα",
        "html": make_table(["Υποκείμενο", "Μπορώ", "Άρνηση", "Ερώτηση"], [
          ["(εγώ)", "μπορώ", "δεν μπορώ", "Μπορώ…;"],
          ["(εσύ)", "μπορείς", "δεν μπορείς", "Μπορείς…;"],
          ["αυτός/ή/ό", "μπορεί", "δεν μπορεί", "Μπορεί…;"],
          ["(εμείς)", "μπορούμε", "δεν μπορούμε", "Μπορούμε…;"],
          ["(εσείς)", "μπορείτε", "δεν μπορείτε", "Μπορείτε…;"],
          ["αυτοί/ές/ά", "μπορούν", "δεν μπορούν", "Μπορούν…;"]
        ]) + """<div class="box rule-box"><p>Το μπορώ ακολουθείται πάντα από <strong>να + ρήμα</strong>: <em>Μπορώ να κολυμπήσω.</em></p></div>""",
        "check": ["Κλίση του μπορώ + να + ρήμα"],
        "quiz": [{"q": "«Μπορείς ___ με βοηθήσεις;»", "opts": ["να", "για", "που"], "correct": 0, "explain": "Μπορείς να..."}]
    },

    # PAGE 27
    {
        "section": "meros-2", "slug": "prepei",
        "title": "Πρέπει", "subtitle": "Υποχρέωση & σύσταση", "page_num": 27, "vocab_theme": "Δουλειές του σπιτιού",
        "html": make_table(["Πρόσωπο", "Παράδειγμα"], [
          ["εγώ", "Πρέπει να φύγω."],
          ["εσύ", "Δεν πρέπει να καπνίζεις."],
          ["αυτός/ή/ό", "Πρέπει να διαβάσει για το τεστ."]
        ]) + """<div class="box why"><h3>◆ Το πρέπει δεν αλλάζει ποτέ</h3><p>Είναι απρόσωπο — μένει πάντα ίδιο. Μόνο το δεύτερο ρήμα αλλάζει.</p></div>""",
        "check": ["Χρήση του απρόσωπου πρέπει + να + ρήμα"],
        "quiz": [{"q": "Ποιο είναι σωστό;", "opts": ["Πρέπεις να φύγεις.", "Πρέπει να φύγεις."], "correct": 1, "explain": "Το πρέπει δεν παίρνει καταλήξεις."}]
    },

    # PAGE 28
    {
        "section": "meros-2", "slug": "prostaktiki",
        "title": "Προστακτική", "subtitle": "Οδηγίες, κανόνες & κατευθύνσεις", "page_num": 28, "vocab_theme": "Η τάξη & οδηγίες",
        "html": make_table(["Χρήση", "Ενικός (ανεπίσημο)", "Πληθυντικός / Ευγενικό"], [
          ["οδηγία", "Άνοιξε την πόρτα!", "Ανοίξτε την πόρτα!"],
          ["κατεύθυνση", "Στρίψε αριστερά.", "Στρίψτε αριστερά."],
          ["αρνητική εντολή", "Μην τρέχεις!", "Μην τρέχετε!"]
        ]) + """<div class="box rule-box"><p><strong>Άρνηση στην προστακτική:</strong> χρησιμοποιούμε <strong>μην</strong>, όχι δεν.</p></div>""",
        "check": ["Σχηματισμός προστακτικής", "Άρνηση με μην στη προστακτική"],
        "quiz": [{"q": "Πώς λέμε 'Don't run!' (ενικός);", "opts": ["Δεν τρέχεις!", "Μην τρέχεις!"], "correct": 1, "explain": "Η προστακτική παίρνει μην."}]
    },

    # PAGE 29
    {
        "section": "meros-2", "slug": "tha-ithela",
        "title": "Θα Ήθελα...", "subtitle": "Ευγενικά αιτήματα & προσφορές", "page_num": 29, "vocab_theme": "Φαγητό & ποτά",
        "html": make_table(["Λειτουργία", "Παράδειγμα"], [
          ["ευγενικό αίτημα", "Θα ήθελα έναν καφέ, παρακαλώ."],
          ["προσφορά", "Θα ήθελες λίγο τσάι;"],
          ["θετική απάντηση", "Ναι, παρακαλώ."],
          ["αρνητική απάντηση", "Όχι, ευχαριστώ."]
        ]),
        "check": ["Χρήση του θα ήθελα για ευγενική παραγγελία"],
        "quiz": [{"q": "Πώς παραγγέλνουμε ευγενικά έναν καφέ;", "opts": ["Θέλω έναν καφέ.", "Θα ήθελα έναν καφέ, παρακαλώ."], "correct": 1, "explain": "Θα ήθελα."}]
    },

    # PAGE 30
    {
        "section": "meros-2", "slug": "parelthontikos-tou-eimai",
        "title": "Παρελθοντικός του 'Είμαι'", "subtitle": "Ήμουν, ήσουν, ήταν…", "page_num": 30, "vocab_theme": "Διακοπές & ταξίδια",
        "html": make_table(["Υποκείμενο", "Κατάφαση", "Άρνηση", "Ερώτηση"], [
          ["(εγώ)", "ήμουν", "δεν ήμουν", "Ήμουν…;"],
          ["(εσύ)", "ήσουν", "δεν ήσουν", "Ήσουν…;"],
          ["αυτός/ή/ό", "ήταν", "δεν ήταν", "Ήταν…;"],
          ["(εμείς)", "ήμασταν", "δεν ήμασταν", "Ήμασταν…;"],
          ["(εσείς)", "ήσασταν", "δεν ήσασταν", "Ήσασταν…;"],
          ["αυτοί/ές/ά", "ήταν", "δεν ήταν", "Ήταν…;"]
        ]),
        "check": ["Κλίση του είμαι στο παρελθόν"],
        "quiz": [{"q": "«Πού ___ εσύ χθες;»", "opts": ["ήμουν", "ήσουν", "ήταν"], "correct": 1, "explain": "Εσύ ήσουν."}]
    },

    # PAGE 31
    {
        "section": "meros-2", "slug": "aoristos-kanonika-rimata",
        "title": "Αόριστος: Κανονικά Ρήματα", "subtitle": "Καταλήξεις & αλλαγή τόνου", "page_num": 31, "vocab_theme": "Δραστηριότητες στο παρελθόν",
        "html": make_table(["Ενεστώτας", "Αόριστος"], [
          ["διαβάζω", "διάβασα"], ["γράφω", "έγραψα"],
          ["δουλεύω", "δούλεψα"], ["μιλάω", "μίλησα"]
        ]) + make_table(["Υποκείμενο", "Καταλήξεις αορίστου"], [
          ["(εγώ)", "-α"], ["(εσύ)", "-ες"], ["αυτός/ή/ό", "-ε"],
          ["(εμείς)", "-αμε"], ["(εσείς)", "-ατε"], ["αυτοί/ές/ά", "-αν"]
        ]),
        "check": ["Σχηματισμός αορίστου κανονικών ρημάτων"],
        "quiz": [{"q": "Ποιος είναι ο αόριστος του 'διαβάζω' (εγώ);", "opts": ["διαβάζω", "διάβασα", "θα διαβάσω"], "correct": 1, "explain": "Διάβασα."}]
    },

    # PAGE 32
    {
        "section": "meros-2", "slug": "aoristos-anomala-rimata",
        "title": "Αόριστος: Ανώμαλα Ρήματα", "subtitle": "Ρίζες που δεν ακολουθούν τον κανόνα", "page_num": 32, "vocab_theme": "Ταξίδια & εμπειρίες",
        "html": make_table(["Ενεστώτας", "Αόριστος"], [
          ["έχω", "είχα"], ["πάω", "πήγα"], ["τρώω", "έφαγα"],
          ["βλέπω", "είδα"], ["πίνω", "ήπια"], ["κάνω", "έκανα"]
        ]),
        "check": ["Απομνημόνευση βασικών ανώμαλων αορίστων"],
        "quiz": [{"q": "Ποιος είναι ο αόριστος του 'πάω';", "opts": ["πάω", "πήγα", "έφαγα"], "correct": 1, "explain": "Πήγα."}]
    },

    # PAGE 33
    {
        "section": "meros-2", "slug": "mellontas-tha",
        "title": "Μέλλοντας: Θα", "subtitle": "Προβλέψεις, υποσχέσεις & προσφορές", "page_num": 33, "vocab_theme": "Σχέδια & όνειρα",
        "html": make_table(["Χρήση", "Δομή", "Παράδειγμα"], [
          ["διαρκής / επαναλαμβανόμενος", "θα + ενεστώτας", "Θα διαβάζω κάθε βράδυ."],
          ["μία φορά στο μέλλον", "θα + εξαρτημένος τύπος", "Θα διαβάσω αυτό το βιβλίο."]
        ]),
        "check": ["Σχηματισμός μέλλοντα με θα"],
        "quiz": [{"q": "Το 'θα' αλλάζει μορφή με το πρόσωπο;", "opts": ["Ναι", "Όχι, μένει πάντα 'θα'"], "correct": 1, "explain": "Το θα μένει πάντα ίδιο."}]
    },

    # PAGE 34
    {
        "section": "meros-2", "slug": "mou-aresei-na",
        "title": "Μου Αρέσει Να...", "subtitle": "Πώς μιλάμε για προτιμήσεις", "page_num": 34, "vocab_theme": "Χόμπι & ελεύθερος χρόνος",
        "html": make_table(["Συναίσθημα", "Δομή", "Παράδειγμα"], [
          ["αρέσει", "μου αρέσει να…", "Μου αρέσει να διαβάζω."],
          ["λατρεύω", "λατρεύω να…", "Λατρεύω να χορεύω."],
          ["μισώ", "μισώ να…", "Μισώ να περιμένω."]
        ]),
        "check": ["Εκφράσεις αρέσει/λατρεύω/μισώ + να + ρήμα"],
        "quiz": [{"q": "«___ αρέσει να ταξιδεύω.»", "opts": ["Μου", "Εγώ"], "correct": 0, "explain": "Μου αρέσει."}]
    },

    # SECTION 3: ΠΕΡΙΓΡΑΦΗ (Pages 35-42)
    # PAGE 35
    {
        "section": "meros-3", "slug": "epitheta-kai-symfonia",
        "title": "Επίθετα & Συμφωνία", "subtitle": "Καταλήξεις που ταιριάζουν σε γένος, αριθμό & πτώση", "page_num": 35, "vocab_theme": "Εμφάνιση & χαρακτήρας",
        "html": make_table(["Τύπος", "Αρσενικό", "Θηλυκό", "Ουδέτερο"], [
          ["ενικός, ονομαστική", "καλός", "καλή", "καλό"],
          ["πληθυντικός, ονομαστική", "καλοί", "καλές", "καλά"]
        ]),
        "check": ["Συμφωνία επιθέτου με ουσιαστικό σε γένος, αριθμό, πτώση"],
        "quiz": [{"q": "«Έχει ένα ___ τηλέφωνο.»", "opts": ["νέος", "νέα", "νέο"], "correct": 2, "explain": "Το τηλέφωνο είναι ουδέτερο → νέο."}]
    },

    # PAGE 36
    {
        "section": "meros-3", "slug": "synkritikos-vathmos",
        "title": "Συγκριτικός Βαθμός", "subtitle": "Πιο + επίθετο, ή -ότερος", "page_num": 36, "vocab_theme": "Πόλεις & χώρες",
        "html": make_table(["Τύπος", "Κανόνας", "Παράδειγμα"], [
          ["τα περισσότερα επίθετα", "πιο + επίθετο", "όμορφος → πιο όμορφος"],
          ["συχνά επίθετα", "κατάληξη -ότερος", "μεγάλος → μεγαλύτερος"],
          ["ανώμαλα", "ειδικές μορφές", "καλός → καλύτερος"]
        ]) + """<div class="box rule-box"><p>Σύγκριση με <strong>από</strong>: <em>Ο Γιώργος είναι πιο ψηλός από τον Νίκο.</em></p></div>""",
        "check": ["Σχηματισμός συγκριτικού βαθμού με πιο / -ότερος / από"],
        "quiz": [{"q": "Ποια λέξη χρησιμοποιούμε για τη σύγκριση ('than');", "opts": ["από", "παρά", "με"], "correct": 0, "explain": "Χρησιμοποιούμε το από."}]
    },

    # PAGE 37
    {
        "section": "meros-3", "slug": "yperthetikos-vathmos",
        "title": "Υπερθετικός Βαθμός", "subtitle": "Ο/Η/Το πιο + επίθετο", "page_num": 37, "vocab_theme": "Αξιοθέατα",
        "html": make_table(["Τύπος", "Κανόνας", "Παράδειγμα"], [
          ["σχετικός", "ο/η/το πιο + επίθετο", "ο πιο όμορφος"],
          ["απόλυτος", "κατάληξη -ότατος", "ωραιότατος"],
          ["ανώμαλος", "ειδικές μορφές", "ο καλύτερος"]
        ]),
        "check": ["Διατήρηση οριστικού άρθρου στον υπερθετικό"],
        "quiz": [{"q": "«Αυτή είναι ___ πόλη της χώρας.»", "opts": ["μεγαλύτερη", "η μεγαλύτερη"], "correct": 1, "explain": "Χρειάζεται το άρθρο."}]
    },

    # PAGE 38
    {
        "section": "meros-3", "slug": "epirrimata-tropou",
        "title": "Επιρρήματα Τρόπου", "subtitle": "Πώς γίνεται μια ενέργεια", "page_num": 38, "vocab_theme": "Αθλήματα & δεξιότητες",
        "html": make_table(["Επίθετο", "Επίρρημα", "Κανόνας"], [
          ["καλός", "καλά", "-ός → -ά"],
          ["γρήγορος", "γρήγορα", "-ος → -α"],
          ["προσεκτικός", "προσεκτικά", "-ός → -ά"],
          ["άμεσος", "αμέσως", "ανώμαλη κατάληξη -ως"]
        ]),
        "check": ["Σχηματισμός επιρρημάτων σε -α / -ά"],
        "quiz": [{"q": "«Τραγουδάει ___ .»", "opts": ["όμορφος", "όμορφα"], "correct": 1, "explain": "Χρησιμοποιούμε επίρρημα (-α)."}]
    },

    # PAGE 39
    {
        "section": "meros-3", "slug": "epirrimata-sychnotitas",
        "title": "Επιρρήματα Συχνότητας", "subtitle": "Πόσο συχνά γίνεται κάτι", "page_num": 39, "vocab_theme": "Καθημερινή ρουτίνα",
        "html": make_table(["~%", "Λέξη", "Παράδειγμα"], [
          ["~0%", "ποτέ", "Δεν πίνω ποτέ καφέ το βράδυ."],
          ["~20%", "σπάνια", "Σπάνια τρώει ανθυγιεινό φαγητό."],
          ["~50%", "μερικές φορές", "Μερικές φορές πάω με τα πόδια."],
          ["~70%", "συχνά", "Ο Γιώργος παίζει συχνά ποδόσφαιρο."],
          ["~80%", "συνήθως", "Συνήθως σηκώνεται στις επτά."],
          ["~100%", "πάντα", "Πάντα βουρτσίζει τα δόντια του."]
        ]),
        "check": ["Θέση επιρρημάτων συχνότητας στην πρόταση"],
        "quiz": [{"q": "Ποιο επίρρημα αντιστοιχεί στο 100%;", "opts": ["ποτέ", "συνήθως", "πάντα"], "correct": 2, "explain": "Πάντα."}]
    },

    # PAGE 40
    {
        "section": "meros-3", "slug": "epitatika-moria",
        "title": "Επιτατικά Μόρια", "subtitle": "Πολύ, πάρα πολύ & αρκετά", "page_num": 40, "vocab_theme": "Καιρός & συναισθήματα",
        "html": make_table(["Ένταση", "Λέξη", "Παράδειγμα"], [
          ["δυνατή", "πολύ", "Αυτός ο καφές είναι πολύ ζεστός."],
          ["πιο δυνατή", "πάρα πολύ", "Είμαι πάρα πολύ κουρασμένος."],
          ["μέτρια", "αρκετά", "Η ταινία ήταν αρκετά καλή."],
          ["υπερβολή (πρόβλημα)", "πάρα πολύ", "Αυτή η σούπα είναι πάρα πολύ αλμυρή."]
        ]),
        "check": ["Διάκριση πολύ / πάρα πολύ / αρκετά"],
        "quiz": [{"q": "Πώς λέμε 'very very good';", "opts": ["πολύ πολύ καλός", "πάρα πολύ καλός"], "correct": 1, "explain": "Πάρα πολύ."}]
    },

    # PAGE 41
    {
        "section": "meros-3", "slug": "metrisima-kai-ametrita-ousiastika",
        "title": "Μετρήσιμα & Αμέτρητα Ουσιαστικά", "subtitle": "Πράγματα που μετριούνται και πράγματα που δεν μετριούνται", "page_num": 41, "vocab_theme": "Φαγητό & ποτά",
        "html": make_table(["Χαρακτηριστικό", "Μετρήσιμο", "Αμέτρητο"], [
          ["Σημασία", "μπορείς να το μετρήσεις: 1, 2, 3…", "δεν μετριέται ξεχωριστά"],
          ["Ενικός/Πληθυντικός", "ένα μήλο, δύο μήλα", "χωρίς πληθυντικό: νερό"],
          ["Παραδείγματα", "μήλο, καρέκλα, σκύλος, φίλος", "νερό, γάλα, ρύζι, χρήματα, χρόνος"]
        ]),
        "check": ["Διάκριση μετρήσιμων και αμέτρητων ουσιαστικών"],
        "quiz": [{"q": "Είναι η λέξη 'νερό' μετρήσιμο ή αμέτρητο;", "opts": ["Μετρήσιμο", "Αμέτρητο"], "correct": 1, "explain": "Το νερό είναι αμέτρητο."}]
    },

    # PAGE 42
    {
        "section": "meros-3", "slug": "merikos-katholou-polys",
        "title": "Μερικός / Καθόλου / Πολύς", "subtitle": "Πώς μιλάμε για ποσότητα", "page_num": 42, "vocab_theme": "Ψώνια & αγορά",
        "html": make_table(["Λέξη", "Χρήση", "Παράδειγμα"], [
          ["μερικός/-ή/-ό", "καταφατικά (μετρήσιμο)", "Έχω μερικά μήλα."],
          ["λίγος/-η/-ο", "καταφατικά (αμέτρητο)", "Θα ήθελα λίγο νερό."],
          ["καθόλου", "αρνητικά", "Δεν έχω καθόλου χρήματα."],
          ["πολύς/πολλή/πολύ", "ερωτήσεις & προτάσεις", "Πόσους φίλους έχεις;"]
        ]),
        "check": ["Χρήση καθόλου σε αρνητικές προτάσεις"],
        "quiz": [{"q": "«Δεν έχω ___ χρήματα.»", "opts": ["μερικά", "καθόλου"], "correct": 1, "explain": "Σε αρνητική πρόταση βάζουμε καθόλου."}]
    },

    # SECTION 4: ΣΥΝΔΕΤΙΚΕΣ ΛΕΞΕΙΣ (Pages 43-51)
    # PAGE 43
    {
        "section": "meros-4", "slug": "protheseis-topou",
        "title": "Προθέσεις Τόπου", "subtitle": "Πού βρίσκονται τα πράγματα", "page_num": 43, "vocab_theme": "Δωμάτια & έπιπλα",
        "html": make_table(["Πρόθεση", "Παράδειγμα"], [
          ["μέσα σε", "Η γάτα είναι μέσα στο καλάθι."],
          ["πάνω σε", "Το βιβλίο είναι πάνω στο ράφι."],
          ["κάτω από", "Η τσάντα είναι κάτω από το τραπέζι."],
          ["δίπλα σε", "Είμαι δίπλα στο παράθυρο."],
          ["μπροστά από", "Στέκεται μπροστά από την πόρτα."],
          ["πίσω από", "Το αυτοκίνητο είναι πίσω από το σπίτι."],
          ["ανάμεσα σε", "Ανάμεσα σε δύο δέντρα."]
        ]) + """<div class="box rule-box"><p><strong>Συναίρεση:</strong> σε + το → στο, σε + τη(ν) → στη(ν), σε + τους → στους.</p></div>""",
        "check": ["Προθέσεις τόπου και συναίρεση σε + άρθρο (στο/στη/στους)"],
        "quiz": [{"q": "σε + το = ;", "opts": ["σε το", "στο", "σε"], "correct": 1, "explain": "Στο."}]
    },

    # PAGE 44
    {
        "section": "meros-4", "slug": "protheseis-chronou",
        "title": "Προθέσεις Χρόνου", "subtitle": "Πώς μιλάμε για το πότε", "page_num": 44, "vocab_theme": "Ημερολόγιο & ραντεβού",
        "html": make_table(["Πρόθεση", "Χρησιμοποιείται για", "Παράδειγμα"], [
          ["σε / το", "μήνες, χρόνια", "τον Ιούνιο, το 2026"],
          ["(χωρίς πρόθεση, αιτιατική)", "μέρες", "τη Δευτέρα"],
          ["στις / στη(ν)", "ώρες ρολογιού", "στις 7"],
          ["το", "μέρη της ημέρας", "το πρωί, το βράδυ"]
        ]),
        "check": ["Έκφραση χρόνου (μήνες, μέρες, ώρες, μέρη ημέρας)"],
        "quiz": [{"q": "«Θα σε ιδώ ___ Δευτέρα.»", "opts": ["σε", "τη", "στις"], "correct": 1, "explain": "Οι μέρες παίρνουν αιτιατική χωρίς πρόθεση: τη Δευτέρα."}]
    },

    # PAGE 45
    {
        "section": "meros-4", "slug": "vasikes-protheseis",
        "title": "Βασικές Προθέσεις", "subtitle": "Με, Από, Για, Χωρίς", "page_num": 45, "vocab_theme": "Μεταφορικά μέσα",
        "html": make_table(["Πρόθεση", "Χρήση", "Παράδειγμα"], [
          ["με", "συνοδεία, μέσο", "Πάω με το λεωφορείο. Είμαι με τον φίλο μου."],
          ["από", "προέλευση, υλικό", "Είμαι από την Αγγλία. Τραπέζι από ξύλο."],
          ["για", "σκοπός, αποδέκτης", "Αυτό είναι για σένα. Φεύγω για Αθήνα."],
          ["χωρίς", "απουσία", "Καφές χωρίς ζάχαρη."]
        ]) + """<div class="box rule-box"><p>Όλες αυτές οι προθέσεις ακολουθούνται από <strong>αιτιατική πτώση</strong>.</p></div>""",
        "check": ["Χρήση με, από, για, χωρίς + αιτιατική"],
        "quiz": [{"q": "«Είμαι από ___ Αγγλία.»", "opts": ["η", "την", "της"], "correct": 1, "explain": "Μετά το από μπαίνει αιτιατική (την)."}]
    },

    # PAGE 46
    {
        "section": "meros-4", "slug": "chronika-epirrimata",
        "title": "Χρονικά Επιρρήματα", "subtitle": "Σήμερα, χθες, αύριο, τώρα, πριν, μετά", "page_num": 46, "vocab_theme": "Καθημερινό πρόγραμμα",
        "html": make_table(["Λέξη", "Χρήση", "Παράδειγμα"], [
          ["σήμερα", "αυτή τη μέρα", "Τι κάνεις σήμερα;"],
          ["χθες", "η προηγούμενη μέρα", "Πού ήσουν χθες;"],
          ["αύριο", "η επόμενη μέρα", "Θα σε δω αύριο."],
          ["τώρα", "αυτή τη στιγμή", "Διαβάζω τώρα."],
          ["πριν", "νωρίτερα", "Ήρθα πριν από μία ώρα."],
          ["μετά", "αργότερα", "Θα φάμε μετά."]
        ]),
        "check": ["Σύνδεση χρονικών επιρρημάτων με τον κατάλληλο χρόνο του ρήματος"],
        "quiz": [{"q": "«___ ήμουν στο σπίτι.»", "opts": ["Αύριο", "Χθες", "Τώρα"], "correct": 1, "explain": "Ο παρατατικός/αόριστος χρειάζεται το χθες."}]
    },

    # PAGE 47
    {
        "section": "meros-4", "slug": "o-kairos",
        "title": "Ο Καιρός", "subtitle": "Κάνει κρύο, βρέχει, χιονίζει…", "page_num": 47, "vocab_theme": "Εποχές & καιρικά φαινόμενα",
        "html": make_table(["Έκφραση", "Σημασία"], [
          ["Κάνει ήλιο", "It is sunny"],
          ["Κάνει ζέστη", "It is hot"],
          ["Κάνει κρύο", "It is cold"],
          ["Έχει συννεφιά", "It is cloudy"],
          ["Βρέχει", "It is raining (γ' ενικό)"],
          ["Χιονίζει", "It is snowing (γ' ενικό)"]
        ]) + """<div class="box why"><h3>◆ Ρήματα χωρίς υποκείμενο</h3><p>Το βρέχει και το χιονίζει μένουν πάντα στο γ' ενικό πρόσωπο.</p></div>""",
        "check": ["Εκφράσεις για τον καιρό"],
        "quiz": [{"q": "Πώς λέμε 'It is raining';", "opts": ["Εγώ βρέχω", "Βρέχει"], "correct": 1, "explain": "Βρέχει."}]
    },

    # PAGE 48
    {
        "section": "meros-4", "slug": "syndesmoi",
        "title": "Σύνδεσμοι", "subtitle": "Και, αλλά, ή, επειδή, έτσι", "page_num": 48, "vocab_theme": "Προσωπικές ιστορίες",
        "html": make_table(["Λειτουργία", "Λέξη", "Παράδειγμα"], [
          ["πρόσθεση", "και", "Έχω έναν αδελφό και μία αδελφή."],
          ["αντίθεση", "αλλά", "Είναι μικρή αλλά δυνατή."],
          ["επιλογή", "ή", "Θέλεις τσάι ή καφέ;"],
          ["αιτία", "επειδή / γιατί", "Είμαι χαρούμενος επειδή είναι τα γενέθλιά μου."],
          ["αποτέλεσμα", "έτσι", "Έβρεχε, έτσι μείναμε σπίτι."]
        ]),
        "check": ["Χρήση βασικών συνδέσμων"],
        "quiz": [{"q": "Ποιος σύνδεσμος δείχνει αποτέλεσμα;", "opts": ["επειδή", "έτσι", "αλλά"], "correct": 1, "explain": "Το 'έτσι' δείχνει αποτέλεσμα."}]
    },

    # PAGE 49
    {
        "section": "meros-4", "slug": "erotimatikes-lexeis",
        "title": "Ερωτηματικές Λέξεις", "subtitle": "Πώς ζητάμε πληροφορία", "page_num": 49, "vocab_theme": "Πρώτη γνωριμία",
        "html": make_table(["Λέξη", "Ρωτάει για", "Παράδειγμα"], [
          ["τι", "πράγμα", "Τι είναι το όνομά σου;"],
          ["πού", "τόπο", "Πού μένεις;"],
          ["πότε", "χρόνο", "Πότε είναι το μάθημά σου;"],
          ["ποιος/ποια/ποιο", "πρόσωπο", "Ποιος είναι ο δάσκαλός σου;"],
          ["γιατί", "αιτία", "Γιατί μαθαίνεις ελληνικά;"],
          ["πώς", "τρόπο", "Πώς πηγαίνεις στη δουλειά;"],
          ["πόσοι/πόσες/πόσα", "ποσότητα (μετρήσιμο)", "Πόσοι μαθητές υπάρχουν;"],
          ["πόσο", "ποσότητα (αμέτρητο)", "Πόσο κοστίζει;"],
          ["πόσων χρονών", "ηλικία", "Πόσων χρονών είσαι;"],
          ["τι ώρα", "ώρα ρολογιού", "Τι ώρα είναι;"]
        ]),
        "check": ["Ερωτηματικές λέξεις"],
        "quiz": [{"q": "Ποια λέξη ρωτάει για τόπο ('where');", "opts": ["πότε", "πού", "πώς"], "correct": 1, "explain": "Πού."}]
    },

    # PAGE 50
    {
        "section": "meros-4", "slug": "arithmoi-meres-kai-mines",
        "title": "Αριθμοί, Μέρες & Μήνες", "subtitle": "Πώς μετράμε & μιλάμε για ημερομηνίες", "page_num": 50, "vocab_theme": "Ημερολόγιο & γενέθλια",
        "html": make_table(["1-5", "6-10", "11-15", "16-20"], [
          ["1 ένα", "6 έξι", "11 έντεκα", "16 δεκαέξι"],
          ["2 δύο", "7 εφτά", "12 δώδεκα", "17 δεκαεφτά"],
          ["3 τρία", "8 οκτώ", "13 δεκατρία", "18 δεκαοκτώ"],
          ["4 τέσσερα", "9 εννιά", "14 δεκατέσσερα", "19 δεκαεννιά"],
          ["5 πέντε", "10 δέκα", "15 δεκαπέντε", "20 είκοσι"]
        ]) + """
<div class="box rule-box">
  <p><strong>Οι μέρες της εβδομάδας:</strong> Δευτέρα, Τρίτη, Τετάρτη, Πέμπτη, Παρασκευή, Σάββατο, Κυριακή.<br>
  <strong>Οι μήνες:</strong> Ιανουάριος, Φεβρουάριος, Μάρτιος, Απρίλιος, Μάιος, Ιούνιος, Ιούλιος, Αύγουστος, Σεπτέμβριος, Οκτώβριος, Νοέμβριος, Δεκέμβριος.</p>
</div>""",
        "check": ["Αριθμοί 1-20", "Μέρες εβδομάδας και μήνες"],
        "quiz": [{"q": "Ποιος είναι ο αριθμός 12;", "opts": ["έντεκα", "δώδεκα", "δεκατρία"], "correct": 1, "explain": "Δώδεκα."}]
    },

    # PAGE 51
    {
        "section": "meros-4", "slug": "i-ora",
        "title": "Η Ώρα", "subtitle": "Ρολόι, ώρες & η ημέρα", "page_num": 51, "vocab_theme": "Καθημερινό πρόγραμμα",
        "html": make_table(["Έκφραση", "Σημασία"], [
          ["Τρεις η ώρα", "3:00"],
          ["Τρεις και τέταρτο", "3:15"],
          ["Τρεισήμισι", "3:30"],
          ["Τέσσερις παρά τέταρτο", "3:45"]
        ]) + """
<div class="box rule-box">
  <p><strong>Οι εποχές:</strong> άνοιξη, καλοκαίρι, φθινόπωρο, χειμώνας.</p>
</div>""",
        "check": ["Πώς λέμε την ώρα στα ελληνικά"],
        "quiz": [{"q": "Πώς λέμε 3:30;", "opts": ["Τρεις και μισό", "Τρεισήμισι / Τρεις και μισή"], "correct": 1, "explain": "Τρεισήμισι."}]
    },

    # SECTION 5: ΠΑΡΑΡΤΗΜΑ (Pages 52-55)
    # PAGE 52
    {
        "section": "parartima", "slug": "anomala-rimata-1",
        "title": "Ανώμαλα Ρήματα (1/2)", "subtitle": "Ομάδα 1: αύξηση · Ομάδα 2: αλλαγή ρίζας", "page_num": 52, "vocab_theme": "Καθημερινές δραστηριότητες",
        "html": make_table(["Ομάδα", "Ενεστώτας → Αόριστος"], [
          ["Ομάδα 1 (αύξηση η-/ή-)", "έχω → είχα, θέλω → ήθελα, ξέρω → ήξερα, πίνω → ήπια"],
          ["Ομάδα 2 (αλλαγή ρίζας)", "πάω → πήγα, τρώω → έφαγα, λέω → είπα, βλέπω → είδα, κάνω → έκανα"]
        ]),
        "check": ["Αόριστος ρημάτων Ομάδας 1 & 2"],
        "quiz": [{"q": "Ποιος είναι ο αόριστος του 'βλέπω';", "opts": ["έβλεπα", "είδα", "βλέπω"], "correct": 1, "explain": "Είδα."}]
    },

    # PAGE 53
    {
        "section": "parartima", "slug": "anomala-rimata-2",
        "title": "Ανώμαλα Ρήματα (2/2)", "subtitle": "Ομάδα 3: αποθετικά · Ομάδα 4: άλλα συχνά ρήματα", "page_num": 53, "vocab_theme": "Ταξίδια & καθημερινή ζωή",
        "html": make_table(["Ομάδα", "Ενεστώτας → Αόριστος"], [
          ["Ομάδα 3 (αποθετικά)", "έρχομαι → ήρθα, γίνομαι → έγινα, κάθομαι → κάθισα, στέκομαι → στάθηκα"],
          ["Ομάδα 4 (άλλα συχνά)", "μένω → έμεινα, φεύγω → έφυγα, ανοίγω → άνοιξα, κλείνω → έκλεισα, δίνω → έδωσα, παίρνω → πήρα, βρίσκω → βρήκα, μπαίνω → μπήκα, βγαίνω → βγήκα, μπορώ → μπόρεσα"]
        ]),
        "check": ["Αόριστος αποθετικών και άλλων συχνών ρημάτων"],
        "quiz": [{"q": "Ποιος είναι ο αόριστος του 'έρχομαι';", "opts": ["έρχομαι", "ήρθα", "έγινα"], "correct": 1, "explain": "Ήρθα."}]
    },

    # PAGE 54
    {
        "section": "parartima", "slug": "i-elliniki-ston-kosmo-1",
        "title": "Η Ελληνική στον Κόσμο (1/2)", "subtitle": "Κοινή νέα ελληνική & κυπριακά ελληνικά", "page_num": 54, "vocab_theme": "Διάλεκτοι & ποικιλίες",
        "html": make_table(["Σημείο", "Ελλάδα (Κοινή)", "Κύπρος"], [
          ["χαιρετισμός", "Τι κάνεις;", "Τι κάμνεις; / Πώς πάει;"],
          ["αρνητικό μόριο", "δεν", "εν (π.χ. Εν ξέρω)"],
          ["«και»", "και", "τζαι (ανεπίσημα)"]
        ]) + """<div class="box mint"><h3>Σύσταση για το επίπεδο Α0–Α1</h3><p>Αυτό το εγχειρίδιο διδάσκει την κοινή νέα ελληνική, αφού γίνεται κατανοητή παντού.</p></div>""",
        "check": ["Κατανόηση βασικών διαφορών Ελλάδας & Κύπρου"],
        "quiz": [{"q": "Πώς λέγεται το 'δεν' στα κυπριακά ελληνικά;", "opts": ["δεν", "εν", "μην"], "correct": 1, "explain": "Εν (π.χ. Εν ξέρω)."}]
    },

    # PAGE 55
    {
        "section": "parartima", "slug": "i-elliniki-ston-kosmo-2",
        "title": "Η Ελληνική στον Κόσμο (2/2)", "subtitle": "Καθημερινό λεξιλόγιο & προφορά", "page_num": 55, "vocab_theme": "Καθημερινές λέξεις",
        "html": make_table(["Κοινή (Ελλάδα)", "Κυπριακό αντίστοιχο"], [
          ["ναι", "ναι / εντάξει"],
          ["λίγο", "λία"],
          ["παιδί", "ίδια λέξη, διαφορετικός ρυθμός & τονισμός"],
          ["πατάτες", "ίδια λέξη, διαφορετικές τοπικές συνταγές"]
        ]) + """<div class="box native"><h3>💡 Καλά νέα για τους μαθητές</h3><p>Όλα τα άλλα σε αυτό το εγχειρίδιο — ρήματα, πτώσεις, άρθρα, σειρά λέξεων — λειτουργούν το ίδιο και στην Ελλάδα και στην Κύπρο.</p></div>""",
        "check": ["Αναγνώριση καθημερινών λέξεων"],
        "quiz": [{"q": "Λειτουργούν οι κανόνες γραμματικής το ίδιο σε Ελλάδα και Κύπρο;", "opts": ["Ναι, η γραμματική είναι ουσιαστικά ίδια", "Όχι, είναι εντελώς διαφορετική"], "correct": 0, "explain": "Ναι, η βασική γραμματική λειτουργεί το ίδιο."}]
    }
]

print(f"Loaded {len(TOPICS)} topics for processing.")

# Write Assets
with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(GREEK_CSS)
with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
    f.write(GREEK_JS)

# Map sections by ID
section_dict = {s["id"]: s for s in SECTIONS}

def render_topbar(active_sec_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    nav_links = []
    for s in SECTIONS:
        act = 'class="active"' if active_sec_id == s["id"] else ''
        short_title = s["title"].split("·")[0].strip()
        nav_links.append(f'<a {act} href="{rel_prefix}{s["file"]}">{short_title}</a>')
    nav_html = "".join(nav_links)

    return f'''<header class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="{rel_prefix}index.html">
      <span class="brand-mark">cl</span>
      <span class="brand-name">COSY<em>languages</em> &middot; Γραμματική Α0&ndash;Α1</span>
    </a>
    <nav class="topbar-nav">
      {nav_html}
    </nav>
  </div>
</header>'''

def render_footer(is_topic=False):
    return f'''<footer class="site">
  <div class="container">
    <div>COSYlanguages &middot; Γραμματική Ελληνικών, Επίπεδο Α0&ndash;Α1 &middot; διαδραστική διαδικτυακή έκδοση</div>
    <div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">&larr; Επιστροφή στο cosylanguages.github.io</a></div>
  </div>
</footer>'''

# 1. Render Topic Pages
for idx, top in enumerate(TOPICS):
    sec = section_dict[top["section"]]
    prev_top = TOPICS[idx - 1] if idx > 0 else None
    next_top = TOPICS[idx + 1] if idx < len(TOPICS) - 1 else None

    theme_pill_html = f'<div class="theme-pill"><span class="ico">📱</span> Θέμα λεξιλογίου: {top["vocab_theme"]}</div>' if top.get("vocab_theme") else ''

    check_html = ""
    if top.get("check"):
        c_lis = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["check"]])
        check_html = f'<div class="checklist" data-key="{top["slug"]}"><h3>🎯 Έλεγχος προόδου</h3>{c_lis}<div class="check-progress"></div></div>'

    quiz_html = ""
    if top.get("quiz"):
        quiz_data = []
        q_items = []
        for q_data in top["quiz"]:
            quiz_data.append({"correct": q_data["correct"]})
            opts_html = "".join([f'<button class="qopt">{o}</button>' for o in q_data["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q_data["q"]}</div><div class="qopts">{opts_html}</div><div class="qexplain">{q_data["explain"]}</div></div>')
        quiz_json = json.dumps(quiz_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Γρήγορη επαλήθευση</h2><span class="quiz-score">Σκορ: 0 / {len(top["quiz"])}</span></div>{"".join(q_items)}<button class="quiz-reset">Επανεκκίνηση</button></div>'

    prev_link = f'<a class="prev" href="{prev_top["slug"]}.html"><span class="dir">&larr; Προηγούμενο</span><span class="ttl">{prev_top["title"]}</span></a>' if prev_top else '<span></span>'
    next_link = f'<a class="next" href="{next_top["slug"]}.html"><span class="dir">Επόμενο &rarr;</span><span class="ttl">{next_top["title"]}</span></a>' if next_top else '<span></span>'
    pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

    topic_page_html = f'''<!doctype html>
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} &middot; COSYlanguages Γραμματική Ελληνικών</title>
<meta name="description" content="{top["subtitle"]}">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(sec["id"], is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">{sec["title"]} &middot; Σελίδα {top["page_num"]}</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
    {theme_pill_html}
    <hr class="rule">
  </div>
  {top["html"]}
  {check_html}
  {quiz_html}
  {pager_html}
</main>
{render_footer(is_topic=True)}
<script src="../assets/app.js"></script>
</body>
</html>'''

    with open(os.path.join(TOPICS_DIR, f'{top["slug"]}.html'), "w", encoding="utf-8") as f:
        f.write(topic_page_html)

# 2. Render Section Hub Pages
for sec in SECTIONS:
    sec_topics = [t for t in TOPICS if t["section"] == sec["id"]]
    topic_cards = []
    for top in sec_topics:
        topic_cards.append(f'''<a class="topic-card" href="topics/{top["slug"]}.html">
  <div class="tnum">Σελίδα {top["page_num"]}</div>
  <div class="ttl">{top["title"]}</div>
  <div class="sub">{top["subtitle"]}</div>
</a>''')

    sec_hub_html = f'''<!doctype html>
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{sec["title"]} &middot; COSYlanguages</title>
<meta name="description" content="{sec["subtitle"]}">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(sec["id"], is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Ενότητα</span>
    <h1>{sec["title"]}</h1>
    <p class="subtitle">{sec["subtitle"]}</p>
    <hr class="rule">
  </div>
  <div class="topic-grid">
    {"".join(topic_cards)}
  </div>
</main>
{render_footer(is_topic=False)}
<script src="assets/app.js"></script>
</body>
</html>'''

    with open(os.path.join(MANUAL_DIR, sec["file"]), "w", encoding="utf-8") as f:
        f.write(sec_hub_html)

# 3. Render Index Page
part_cards = []
for sec in SECTIONS:
    sec_topics_count = len([t for t in TOPICS if t["section"] == sec["id"]])
    part_cards.append(f'''<a class="part-card" href="{sec["file"]}">
  <div class="stripe" style="background:{sec["stripe"]};"></div>
  <span class="pnum">{sec["id"].upper()}</span>
  <h2>{sec["title"]}</h2>
  <p>{sec["subtitle"]}</p>
  <span class="topics-count">{sec_topics_count} σελίδες</span>
</a>''')

index_html = f'''<!doctype html>
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>COSYlanguages Γραμματική Ελληνικών (Επίπεδο Α0–Α1) &middot; COSYlanguages</title>
<meta name="description" content="Ο πλήρης οδηγός γραμματικής ελληνικών για αρχάριους μαθητές Α0-Α1: 55 σελίδες με διαγράμματα, λάθη προς αποκάλυψη, λίστες αυτοαξιολόγησης και κουίζ.">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(active_sec_id=None, is_topic=False)}
<section class="hero">
  <div class="container">
    <span class="hero-kicker">COSYlanguages &middot; Επίπεδο Α0&ndash;Α1</span>
    <h1>Γραμματική Ελληνικών,<br>βήμα προς βήμα.</h1>
    <p class="lead">Ο πλήρης οδηγός για αρχάριους μαθητές — 55 σελίδες, 6 ενότητες, με διαγράμματα, λάθη προς αποκάλυψη, λίστες αυτοαξιολόγησης και διαδραστικά κουίζ.</p>

    <div class="hero-builder">
      <div class="instruction">&#9998; ΔΟΚΙΜΑΣΤΕ — ΠΑΤΗΣΤΕ ΜΙΑ ΛΕΞΗ ΑΠΟ ΚΑΘΕ ΣΕΙΡΑ ΓΙΑ ΝΑ ΦΤΙΑΞΕΤΕ ΜΙΑ ΠΡΟΤΑΣΗ</div>
      <div id="sentence-builder">
        <div class="pool">
          <button data-role="subject" data-word="Η Μαρία" style="background:#3562e0;">Η Μαρία</button>
          <button data-role="subject" data-word="Ο Νίκος" style="background:#3562e0;">Ο Νίκος</button>
          <button data-role="subject" data-word="Αυτοί" style="background:#3562e0;">Αυτοί</button>
        </div>
        <div class="pool">
          <button data-role="verb" data-word="διαβάζει" style="background:#1c8f56;">διαβάζει</button>
          <button data-role="verb" data-word="πίνει" style="background:#1c8f56;">πίνει</button>
          <button data-role="verb" data-word="παίζουν" style="background:#1c8f56;">παίζουν</button>
        </div>
        <div class="pool">
          <button data-role="object" data-word="ένα καλό βιβλίο" style="background:#c9740a;">ένα καλό βιβλίο</button>
          <button data-role="object" data-word="καφέ" style="background:#c9740a;">καφέ</button>
          <button data-role="object" data-word="ποδόσφαιρο" style="background:#c9740a;">ποδόσφαιρο</button>
        </div>
        <div class="slot-row">
          <div class="slot" data-role="subject">υποκείμενο</div>
          <div class="slot" data-role="verb">ρήμα</div>
          <div class="slot" data-role="object">αντικείμενο</div>
        </div>
        <div class="sentence-out">&nbsp;</div>
      </div>
    </div>
  </div>
</section>
<main class="container">
  <div class="page-head" style="padding-top:44px;">
    <span class="eyebrow">Περιεχόμενα</span>
    <h1 style="font-size:28px;">Έξι ενότητες, 55 σελίδες</h1>
    <p class="subtitle">Ακολουθήστε το εγχειρίδιο στη σειρά, ή μεταβείτε απευθείας σε αυτό που χρειάζεστε.</p>
  </div>
  <div class="parts-grid">
    {"".join(part_cards)}
  </div>
</main>
{render_footer(is_topic=False)}
<script src="assets/app.js"></script>
</body>
</html>'''

with open(os.path.join(MANUAL_DIR, "index.html"), "w", encoding="utf-8") as f:
    f.write(index_html)

print("Greek Grammar Manual generated successfully!")
