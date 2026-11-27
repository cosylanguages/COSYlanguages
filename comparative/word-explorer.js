/**
 * Word Explorer UI. Data: COSYdata (comparative/*). Logic: word-explorer-core.js.
 * Override the data location for testing with ?data=<base url ending in />.
 * Unreviewed (reviewed:false) linguistic data is shown with a visible "Draft" label.
 * All text is inserted with textContent; data values are never parsed as HTML.
 */
(function () {
  'use strict';
  const Core = window.WordExplorerCore;
  const DEFAULT_BASE = 'https://cosylanguages.github.io/COSYdata/';
  const params = new URLSearchParams(location.search);
  const BASE = (params.get('data') || DEFAULT_BASE).replace(/\/?$/, '/');

  const state = {
    ready: false, loading: false, langs: [], concepts: [], ling: { groups: [], etymologies: {}, insights: [] },
    index: [], conceptId: null, mode: 'both', showIpa: true, byFamily: false, hidden: new Set(),
    voices: [], play: { queue: [], i: 0, active: false, paused: false },
  };

  // ---- small helpers
  const $ = (id) => document.getElementById(id);
  function el(tag, attrs, children) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === null || v === undefined || v === false) continue;
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? '' : v);
    }
    for (const c of [].concat(children || [])) if (c) n.append(c);
    return n;
  }
  const store = {
    get(k, d) { try { const v = localStorage.getItem('cosy.we.' + k); return v === null ? d : v; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('cosy.we.' + k, v); } catch (e) { /* storage unavailable */ } },
  };
  const slug = (s) => s.toLowerCase().replace(/[^a-z]+/g, '-');
  const langOf = (code) => state.langs.find((l) => l.code === code);
  const conceptById = (id) => state.concepts.find((c) => c.concept_id === id);
  const labelOf = (c) => (c.forms.en ? c.forms.en.word : c.concept_id);
  const shownLangs = () => Core.orderLanguages(state.langs.filter((l) => !state.hidden.has(l.code)), state.byFamily);

  // ---- data loading
  async function load() {
    const get = async (p) => {
      const r = await fetch(BASE + p);
      if (!r.ok) throw new Error(p + ' ' + r.status);
      return r.json();
    };
    const [langs, calendar, ling] = await Promise.all([
      get('comparative/languages.json'), get('comparative/concepts/calendar.json'), get('comparative/linguistics/calendar-cognates.json'),
    ]);
    state.langs = langs.languages;
    state.concepts = calendar.concepts;
    state.ling = ling;
    state.index = Core.buildSearchIndex(state.concepts);
  }

  // ---- voices
  function refreshVoices() { if ('speechSynthesis' in window) state.voices = speechSynthesis.getVoices(); }
  function hasVoice(lang) {
    const code = (langOf(lang) || {}).bcp47 || lang;
    return state.voices.some((v) => v.lang.toLowerCase().replace('_', '-').startsWith(code.toLowerCase()));
  }

  // ---- speech playback
  function speak(code, done) {
    const concept = conceptById(state.conceptId);
    const f = concept.forms[code];
    const u = new SpeechSynthesisUtterance(f.word);
    u.lang = (langOf(code) || {}).bcp47 || code;
    const voice = state.voices.find((v) => v.lang.toLowerCase().replace('_', '-').startsWith(u.lang.toLowerCase()));
    if (voice) u.voice = voice;
    u.onend = done; u.onerror = done;
    markPlaying(code);
    speechSynthesis.speak(u);
  }
  function markPlaying(code) {
    document.querySelectorAll('#we-body tr[data-lang]').forEach((r) => r.classList.toggle('we-playing', r.dataset.lang === code));
    const st = $('we-play-status');
    if (st) st.textContent = code ? 'Playing: ' + (langOf(code) || {}).name_en : '';
  }
  function stopAll() {
    state.play = { queue: [], i: 0, active: false, paused: false };
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    markPlaying(null);
    updatePlayButtons();
  }
  function step() {
    const p = state.play;
    if (!p.active || p.paused) return;
    if (p.i >= p.queue.length) { stopAll(); return; }
    const code = p.queue[p.i];
    speak(code, () => { if (state.play.active && !state.play.paused && state.play.queue[state.play.i] === code) { state.play.i++; step(); } });
  }
  function playAll(fromStart) {
    if (!('speechSynthesis' in window)) return;
    if (fromStart || !state.play.queue.length) {
      speechSynthesis.cancel();
      state.play = { queue: shownLangs().map((l) => l.code).filter(hasVoice), i: 0, active: true, paused: false };
    } else { state.play.active = true; state.play.paused = false; }
    updatePlayButtons();
    step();
  }
  function pauseAll() { state.play.paused = true; speechSynthesis.cancel(); updatePlayButtons(); }
  function playOne(code) {
    if (!('speechSynthesis' in window) || !hasVoice(code)) return;
    stopAll();
    speak(code, () => markPlaying(null));
  }
  function updatePlayButtons() {
    const p = state.play;
    const set = (id, hidden) => { const b = $(id); if (b) b.hidden = hidden; };
    set('we-play-all', p.active && !p.paused);
    set('we-pause', !(p.active && !p.paused));
    set('we-resume', !(p.active && p.paused));
    set('we-replay', !p.queue.length);
    set('we-stop', !p.active);
  }

  // ---- rendering
  function renderConceptNav() {
    const nav = $('we-concepts');
    nav.textContent = '';
    const kinds = [['weekday', 'Weekdays'], ['month', 'Months'], ['season', 'Seasons']];
    const cur = conceptById(state.conceptId);
    const tabs = el('div', { class: 'we-chips', role: 'group', 'aria-label': 'Concept set' },
      kinds.map(([k, label]) => el('button', {
        type: 'button', class: 'we-chip' + (cur.kind === k ? ' active' : ''), 'aria-pressed': String(cur.kind === k), text: label,
        onclick: () => selectConcept(state.concepts.find((c) => c.kind === k).concept_id),
      })));
    const items = el('div', { class: 'we-chips', role: 'group', 'aria-label': 'Concept' },
      state.concepts.filter((c) => c.kind === cur.kind).map((c) => el('button', {
        type: 'button', class: 'we-chip we-chip-sm' + (c.concept_id === cur.concept_id ? ' active' : ''),
        'aria-pressed': String(c.concept_id === cur.concept_id), text: labelOf(c),
        onclick: () => selectConcept(c.concept_id),
      })));
    nav.append(tabs, items);
  }

  function familyBadge(lang) {
    const note = Core.FAMILY_NOTES[lang.family] || '';
    return el('span', { class: 'we-fam we-fam-' + slug(lang.family), title: lang.family + ': ' + note, text: lang.family });
  }

  function renderTable() {
    const concept = conceptById(state.conceptId);
    const cg = Core.groupsForConcept(state.ling, state.conceptId);
    const body = $('we-body');
    body.textContent = '';
    const langs = shownLangs();
    const anyIpa = langs.some((l) => concept.forms[l.code] && concept.forms[l.code].ipa);
    $('we-th-ipa').hidden = !(state.showIpa && anyIpa);
    for (const lang of langs) {
      const f = concept.forms[lang.code];
      if (!f) continue;
      const d = Core.displayText(lang.code, f.word, state.mode);
      const myGroups = cg.byLang[lang.code] || [];
      const ety = state.ling.etymologies[state.conceptId + '/' + lang.code];
      const showEty = !!ety;
      const markers = el('span', { class: 'we-markers' }, myGroups.map((g) => el('span', {
        class: 'we-mk we-g' + g.colorIndex, title: g.gloss + ' (' + g.root + ')', 'aria-label': 'Shared root: ' + g.gloss, text: g.marker,
      })));
      const wordCell = el('td', { class: 'we-word', 'data-label': 'Word' }, [
        el('span', { class: 'we-native', lang: lang.bcp47 || lang.code, text: d.primary }),
        d.secondary ? el('span', { class: 'we-translit', text: d.secondary }) : null,
        f.gender ? el('span', { class: 'we-gender', text: (f.article ? f.article + ' · ' : '') + f.gender }) : null,
      ]);
      const tr = el('tr', { 'data-lang': lang.code, class: myGroups.length ? 'we-has-g we-g' + myGroups[0].colorIndex : '' }, [
        el('th', { scope: 'row', class: 'we-lang', 'data-label': 'Language' }, [
          el('span', { class: 'we-lname', text: lang.name_en }), familyBadge(lang),
        ]),
        wordCell,
        el('td', { class: 'we-ipa', 'data-label': 'IPA', hidden: !(state.showIpa && anyIpa), text: f.ipa || '' }),
        el('td', { class: 'we-root', 'data-label': 'Shared root' }, [markers]),
        el('td', { class: 'we-actions' }, [
          el('button', {
            type: 'button', class: 'we-icon-btn', 'aria-label': 'Hear ' + lang.name_en + ': ' + f.word,
            disabled: !hasVoice(lang.code),
            title: hasVoice(lang.code) ? 'Hear it (browser voice)' : 'No browser voice installed for ' + lang.name_en,
            text: '🔊', onclick: () => playOne(lang.code),
          }),
          showEty ? el('button', {
            type: 'button', class: 'we-icon-btn we-ety-btn', 'aria-expanded': 'false', 'aria-label': 'Word origin: ' + f.word, title: 'Word origin', text: 'ⓘ',
            onclick: (ev) => toggleEty(ev.currentTarget, tr),
          }) : null,
        ]),
      ]);
      body.append(tr);
      if (showEty) {
        const draft = !ety.reviewed;
        const cols = 5;
        body.append(el('tr', { class: 'we-ety-row', hidden: true, 'data-for': lang.code }, [
          el('td', { colspan: String(cols) }, [el('div', { class: 'we-ety-card' }, [
            el('p', {}, [el('strong', { text: 'Meaning: ' }), document.createTextNode(ety.literal)]),
            el('p', {}, [el('strong', { text: 'Origin: ' }), document.createTextNode(ety.origin)]),
            ety.note ? el('p', {}, [el('strong', { text: 'Note: ' }), document.createTextNode(ety.note)]) : null,
            draft ? el('p', { class: 'we-draft', text: 'Draft: not yet reviewed against sources.' }) : null,
          ])]),
        ]));
      }
    }
  }
  function toggleEty(btn, tr) {
    const row = tr.nextElementSibling;
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    if (row && row.classList.contains('we-ety-row')) row.hidden = open;
  }

  function renderLegend() {
    const box = $('we-legend');
    box.textContent = '';
    const cg = Core.groupsForConcept(state.ling, state.conceptId);
    box.hidden = !cg.groups.length;
    if (!cg.groups.length) return;
    box.append(el('h3', { text: 'Shared roots' }));
    const ul = el('ul', { class: 'we-legend-list' });
    for (const g of cg.groups) {
      const members = g.members.map((m) => (langOf(m.lang) || {}).name_en).filter(Boolean).join(', ');
      ul.append(el('li', {}, [
        el('span', { class: 'we-mk we-g' + g.colorIndex, 'aria-hidden': 'true', text: g.marker }),
        el('span', {}, [el('strong', { text: g.root }), document.createTextNode(' (' + g.gloss + '): ' + members)]),
        g.reviewed ? null : el('span', { class: 'we-draft-tag', text: 'Draft' }),
        g.note ? el('div', { class: 'we-legend-note', text: g.note }) : null,
      ]));
    }
    box.append(ul);
  }

  function renderInsights() {
    const box = $('we-insights');
    box.textContent = '';
    const items = (state.ling.insights || []).filter((i) => i.concepts.includes(state.conceptId));
    box.hidden = !items.length;
    if (!items.length) return;
    const d = el('details', { class: 'we-card' }, [el('summary', { text: '💡 Did you know?' })]);
    if (window.matchMedia('(min-width: 721px)').matches) d.open = true;
    for (const i of items) {
      d.append(el('p', {}, [document.createTextNode(i.text), i.reviewed ? null : el('span', { class: 'we-draft-tag', text: 'Draft' })]));
    }
    box.append(d);
  }

  function renderObservations() {
    const box = $('we-observations');
    box.textContent = '';
    const obs = Core.observations(Core.groupsForConcept(state.ling, state.conceptId), shownLangs().map((l) => l.code), state.langs);
    box.hidden = !obs.length;
    if (!obs.length) return;
    box.append(el('h3', { text: 'Interesting observations' }));
    const unrev = Core.groupsForConcept(state.ling, state.conceptId).groups.some((g) => !g.reviewed);
    box.append(el('ul', {}, obs.map((o) => el('li', { text: o }))));
    if (unrev) box.append(el('p', { class: 'we-draft', text: 'Based on draft data that has not been reviewed yet.' }));
  }

  function renderStats() {
    const box = $('we-stats');
    box.textContent = '';
    const s = Core.stats(shownLangs().map((l) => l.code), state.langs);
    const fmt = (o) => Object.entries(o).map(([k, v]) => k + ' (' + v + ')').join(', ');
    const card = (t, v) => el('div', { class: 'we-stat' }, [el('div', { class: 'we-stat-t', text: t }), el('div', { class: 'we-stat-v', text: v })]);
    box.append(card('Languages shown', String(s.languages)), card('Scripts', fmt(s.scripts)), card('Families', fmt(s.families)));
  }

  function renderFilters() {
    const box = $('we-lang-filter');
    box.textContent = '';
    for (const l of state.langs) {
      const id = 'we-lf-' + l.code;
      const cb = el('input', { type: 'checkbox', id, checked: !state.hidden.has(l.code),
        onchange: (e) => { if (e.target.checked) state.hidden.delete(l.code); else state.hidden.add(l.code); store.set('hidden', [...state.hidden].join(',')); stopAll(); renderAll(false); } });
      box.append(el('label', { class: 'we-check', for: id }, [cb, document.createTextNode(' ' + l.name_en)]));
    }
  }

  function renderAll(nav) {
    if (nav !== false) renderConceptNav();
    renderTable(); renderLegend(); renderInsights(); renderObservations(); renderStats(); updatePlayButtons();
    const c = conceptById(state.conceptId);
    $('we-title').textContent = labelOf(c) + (c.emoji ? ' ' + c.emoji : '');
  }

  function selectConcept(id) {
    stopAll();
    state.conceptId = id;
    const u = new URL(location.href);
    u.searchParams.set('view', 'word-explorer'); u.searchParams.set('concept', id);
    try { history.replaceState(null, '', u); } catch (e) { /* ignore */ }
    renderAll(true);
  }

  // ---- search (combobox)
  function setupSearch() {
    const input = $('we-search');
    const list = $('we-results');
    let active = -1;
    let results = [];
    const close = () => { list.hidden = true; input.setAttribute('aria-expanded', 'false'); active = -1; input.removeAttribute('aria-activedescendant'); };
    const choose = (r) => { if (!r) return; input.value = ''; close(); selectConcept(r.concept_id); $('we-title').focus(); };
    const paint = () => {
      list.textContent = '';
      results.forEach((r, i) => list.append(el('li', {
        id: 'we-opt-' + i, role: 'option', class: 'we-opt' + (i === active ? ' active' : ''), 'aria-selected': String(i === active),
        text: r.label + '  ·  ' + r.concept_id.split('.')[0], onmousedown: (e) => { e.preventDefault(); choose(r); },
      })));
      if (!results.length && input.value.trim()) list.append(el('li', { class: 'we-opt we-none', text: 'No match' }));
      list.hidden = !input.value.trim();
      input.setAttribute('aria-expanded', String(!list.hidden));
      if (active >= 0) input.setAttribute('aria-activedescendant', 'we-opt-' + active); else input.removeAttribute('aria-activedescendant');
    };
    let timer;
    input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => { results = Core.search(state.index, input.value, 8); active = results.length ? 0 : -1; paint(); }, 80); });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); if (results.length) { active = (active + 1) % results.length; paint(); } }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (results.length) { active = (active - 1 + results.length) % results.length; paint(); } }
      else if (e.key === 'Enter') { e.preventDefault(); choose(results[active]); }
      else if (e.key === 'Escape') { input.value = ''; close(); }
    });
    input.addEventListener('blur', close);
  }

  // ---- controls
  function setupControls() {
    document.querySelectorAll('input[name="we-mode"]').forEach((r) => {
      r.checked = r.value === state.mode;
      r.addEventListener('change', () => { state.mode = r.value; store.set('mode', r.value); renderTable(); });
    });
    const ipa = $('we-ipa'); ipa.checked = state.showIpa;
    ipa.addEventListener('change', () => { state.showIpa = ipa.checked; store.set('ipa', ipa.checked ? '1' : '0'); renderTable(); });
    const fam = $('we-byfam'); fam.checked = state.byFamily;
    fam.addEventListener('change', () => { state.byFamily = fam.checked; store.set('byfam', fam.checked ? '1' : '0'); stopAll(); renderTable(); });
    $('we-all').addEventListener('click', () => { state.hidden.clear(); store.set('hidden', ''); renderFilters(); renderAll(false); });
    $('we-none').addEventListener('click', () => { state.hidden = new Set(state.langs.map((l) => l.code)); store.set('hidden', [...state.hidden].join(',')); renderFilters(); renderAll(false); });
    $('we-play-all').addEventListener('click', () => playAll(true));
    $('we-pause').addEventListener('click', pauseAll);
    $('we-resume').addEventListener('click', () => playAll(false));
    $('we-replay').addEventListener('click', () => playAll(true));
    $('we-stop').addEventListener('click', stopAll);
    if (!('speechSynthesis' in window)) { $('we-audio-note').textContent = 'Audio is not supported in this browser.'; }
  }

  async function init() {
    if (state.ready || state.loading) return;
    state.loading = true;
    const status = $('we-status');
    status.textContent = 'Loading words…';
    try {
      await load();
    } catch (err) {
      state.loading = false;
      status.textContent = 'Could not load the word data (' + err.message + '). Check your connection and reload.';
      return;
    }
    state.mode = store.get('mode', 'both');
    state.showIpa = store.get('ipa', '1') === '1';
    state.byFamily = store.get('byfam', '0') === '1';
    state.hidden = new Set(store.get('hidden', '').split(',').filter((c) => state.langs.some((l) => l.code === c)));
    const wanted = params.get('concept');
    state.conceptId = conceptById(wanted) ? wanted : 'weekday.monday';
    refreshVoices();
    if ('speechSynthesis' in window) speechSynthesis.addEventListener('voiceschanged', () => { refreshVoices(); renderTable(); });
    status.textContent = '';
    $('we-app').hidden = false;
    setupControls(); setupSearch(); renderFilters(); renderAll(true);
    state.ready = true; state.loading = false;
  }

  window.WordExplorer = { init, stopAll };
  if (params.get('view') === 'word-explorer') {
    document.addEventListener('DOMContentLoaded', () => { if (typeof switchAtlasView === 'function') switchAtlasView('word-explorer'); });
  }
})();
