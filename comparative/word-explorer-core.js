/**
 * Word Explorer core: pure functions (no DOM), usable in the browser and in node tests.
 * Data comes from COSYdata (comparative/concepts, comparative/linguistics, comparative/languages).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.WordExplorerCore = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // ---------------------------------------------------------------- transliteration
  const RU = {
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l',
    м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh',
    щ: 'shch', ъ: '"', ы: 'y', ь: "'", э: 'e', ю: 'yu', я: 'ya',
  };
  const TURKIC_CYR = Object.assign({}, RU, {
    ы: 'ı', ә: 'ä', ө: 'ö', ү: 'ü', җ: 'j', ң: 'ng', һ: 'h', ҡ: 'q', ғ: 'gh', ҙ: 'dh', ҫ: 'th', ъ: 'ʼ', ь: 'ʼ',
  });
  const CV = Object.assign({}, RU, { ӑ: 'ă', ӗ: 'ĕ', ҫ: 'ś', ӳ: 'ÿ' });
  const HY = {
    ա: 'a', բ: 'b', գ: 'g', դ: 'd', ե: 'e', զ: 'z', է: 'e', ը: 'ə', թ: "t'", ժ: 'zh', ի: 'i', լ: 'l', խ: 'kh',
    ծ: 'ts', կ: 'k', հ: 'h', ձ: 'dz', ղ: 'gh', ճ: 'ch', մ: 'm', յ: 'y', ն: 'n', շ: 'sh', ո: 'o', չ: "ch'",
    պ: 'p', ջ: 'j', ռ: 'rr', ս: 's', վ: 'v', տ: 't', ր: 'r', ց: "ts'", ւ: 'w', փ: "p'", ք: "k'", օ: 'o', ֆ: 'f',
    և: 'ev',
  };
  const KA = {
    ა: 'a', ბ: 'b', გ: 'g', დ: 'd', ე: 'e', ვ: 'v', ზ: 'z', თ: 't', ი: 'i', კ: "k'", ლ: 'l', მ: 'm', ნ: 'n',
    ო: 'o', პ: "p'", ჟ: 'zh', რ: 'r', ს: 's', ტ: "t'", უ: 'u', ფ: 'p', ქ: 'k', ღ: 'gh', ყ: "q'", შ: 'sh',
    ჩ: 'ch', ც: 'ts', ძ: 'dz', წ: "ts'", ჭ: "ch'", ხ: 'kh', ჯ: 'j', ჰ: 'h',
  };
  const GR = {
    α: 'a', β: 'v', γ: 'g', δ: 'd', ε: 'e', ζ: 'z', η: 'i', θ: 'th', ι: 'i', κ: 'k', λ: 'l', μ: 'm', ν: 'n',
    ξ: 'x', ο: 'o', π: 'p', ρ: 'r', σ: 's', ς: 's', τ: 't', υ: 'y', φ: 'f', χ: 'ch', ψ: 'ps', ω: 'o',
  };
  const GR_VOICELESS = 'θκξπστφχψ';

  function mapSimple(text, table) {
    let out = '';
    for (const ch of text) {
      const lower = ch.toLowerCase();
      const m = table[lower];
      if (m === undefined) { out += ch; continue; }
      out += ch !== lower && m ? m.charAt(0).toUpperCase() + m.slice(1) : m;
    }
    return out;
  }

  function translitGreek(text) {
    const nfd = text.normalize('NFD');
    const letters = []; // {ch, acute}
    for (const ch of nfd) {
      if (ch === '́') { if (letters.length) letters[letters.length - 1].acute = true; continue; }
      if (/[̀-ͯ]/.test(ch)) continue; // other marks (diaeresis etc.) dropped
      letters.push({ ch, acute: false });
    }
    const lc = (i) => (letters[i] ? letters[i].ch.toLowerCase() : '');
    let out = '';
    for (let i = 0; i < letters.length; i++) {
      const cur = letters[i];
      const c = lc(i);
      const n = lc(i + 1);
      let piece;
      let skip = 0;
      let acuteHere = cur.acute;
      if (c === 'ο' && n === 'υ') { piece = 'ou'; skip = 1; acuteHere = cur.acute || letters[i + 1].acute; }
      else if (c === 'α' && n === 'ι') { piece = 'e'; skip = 1; acuteHere = cur.acute || letters[i + 1].acute; }
      else if (c === 'ε' && n === 'ι') { piece = 'i'; skip = 1; acuteHere = cur.acute || letters[i + 1].acute; }
      else if (c === 'ο' && n === 'ι') { piece = 'i'; skip = 1; acuteHere = cur.acute || letters[i + 1].acute; }
      else if ((c === 'α' || c === 'ε') && n === 'υ') {
        const after = lc(i + 2);
        const voiceless = !after || GR_VOICELESS.includes(after);
        piece = (c === 'α' ? 'a' : 'e') + (voiceless ? 'f' : 'v'); skip = 1;
        acuteHere = cur.acute || letters[i + 1].acute;
      } else if (c === 'γ' && (n === 'γ' || n === 'κ' || n === 'ξ' || n === 'χ')) piece = 'n';
      else if (c === 'μ' && n === 'π') { piece = i === 0 ? 'b' : 'mp'; skip = 1; }
      else if (c === 'ν' && n === 'τ') { piece = i === 0 ? 'd' : 'nt'; skip = 1; }
      else if (GR[c] !== undefined) piece = GR[c];
      else { out += cur.ch; continue; }
      if (cur.ch !== c) piece = piece.charAt(0).toUpperCase() + piece.slice(1);
      if (acuteHere) piece = piece.replace(/([aeiouy])(?!.*[aeiouy])/i, '$1́');
      out += piece;
      i += skip;
    }
    return out.normalize('NFC');
  }

  function translit(lang, text) {
    if (!text) return '';
    switch (lang) {
      case 'ru': return mapSimple(text, RU);
      case 'tt': case 'ba': return mapSimple(text, TURKIC_CYR);
      case 'cv': return mapSimple(text, CV);
      case 'hy': return mapSimple(text.replace(/ու/g, 'u').replace(/Ու/g, 'U'), HY);
      case 'ka': return mapSimple(text, KA);
      case 'el': return translitGreek(text);
      default: return text;
    }
  }

  // ---------------------------------------------------------------- text normalisation / search
  function fold(s) {
    return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[’'`ʼʻ]/g, '').trim();
  }

  function levenshtein(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      let cur = [i];
      let rowMin = i;
      for (let j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (cur[j] < rowMin) rowMin = cur[j];
      }
      if (rowMin > max) return max + 1;
      for (let j = 0; j <= b.length; j++) prev[j] = cur[j];
    }
    return prev[b.length];
  }

  /** Build a search index: one record per concept with folded tokens from every language (native + translit). */
  function buildSearchIndex(concepts) {
    return concepts.map((c) => {
      const terms = [];
      const en = c.forms.en ? c.forms.en.word : c.concept_id;
      terms.push(fold(en), fold(c.concept_id.split('.').pop()));
      for (const [lang, f] of Object.entries(c.forms)) {
        terms.push(fold(f.word));
        const t = fold(translit(lang, f.word));
        if (t) terms.push(t);
      }
      return { concept_id: c.concept_id, label: en, terms: Array.from(new Set(terms)).filter(Boolean) };
    });
  }

  /** Rank concepts for a query: exact > prefix > substring > fuzzy (distance <= 1 for len>=4, <=2 for len>=7). */
  function search(index, query, limit) {
    const q = fold(query);
    if (!q) return [];
    const max = q.length >= 7 ? 2 : q.length >= 4 ? 1 : 0;
    const out = [];
    for (const rec of index) {
      let best = 0;
      for (const t of rec.terms) {
        let s = 0;
        if (t === q) s = 100;
        else if (t.startsWith(q)) s = 80;
        else if (t.includes(q)) s = 60;
        else if (max && levenshtein(q, t, max) <= max) s = 40 - levenshtein(q, t, max);
        if (s > best) best = s;
      }
      if (best) out.push({ concept_id: rec.concept_id, label: rec.label, score: best });
    }
    out.sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
    return out.slice(0, limit || 8);
  }

  // ---------------------------------------------------------------- language metadata
  const FAMILY_NOTES = {
    Germanic: 'Indo-European branch that includes English and German.',
    Romance: 'Indo-European branch descended from Latin: French, Italian, Spanish, Portuguese.',
    Slavic: 'Indo-European branch of Eastern, Western and Southern Europe, including Russian.',
    Hellenic: 'Indo-European branch consisting of Greek.',
    Armenian: 'An independent branch of Indo-European.',
    Celtic: 'Indo-European branch that includes Breton, spoken in Brittany.',
    Kartvelian: 'A small family of the Caucasus, unrelated to Indo-European.',
    Turkic: 'Family of Central Asia and Eastern Europe: Tatar, Bashkir, Chuvash.',
  };

  function orderLanguages(langs, groupByFamily) {
    if (!groupByFamily) return langs.slice();
    const order = [];
    for (const l of langs) if (!order.includes(l.family)) order.push(l.family);
    return langs.slice().sort((a, b) => order.indexOf(a.family) - order.indexOf(b.family));
  }

  // ---------------------------------------------------------------- cognate groups
  const MARKERS = ['●', '▲', '■', '◆', '★', '✚'];

  /** groups for one concept -> {groups:[{...group, colorIndex, marker}], byLang:{lang:[group...]}} */
  function groupsForConcept(linguistics, conceptId) {
    const groups = (linguistics.groups || []).filter((g) => g.concept === conceptId)
      .map((g, i) => Object.assign({}, g, { colorIndex: i % 6, marker: MARKERS[i % MARKERS.length] }));
    const byLang = {};
    for (const g of groups) for (const m of g.members) (byLang[m.lang] = byLang[m.lang] || []).push(g);
    return { groups, byLang };
  }

  const RELATION_TEXT = {
    inherited: 'inherited from the root', calque: 'translated from the root (calque)', loan: 'borrowed',
    parallel: 'same idea formed independently', source: 'language the root comes from',
  };

  // ---------------------------------------------------------------- observations / stats
  function listNames(codes, langs) {
    return codes.map((c) => (langs.find((l) => l.code === c) || { name_en: c }).name_en).join(', ');
  }

  /** 2-5 observations computed only from the cognate groups of the concept and language metadata. */
  function observations(conceptGroups, shownCodes, langs) {
    const shown = new Set(shownCodes);
    const out = [];
    const sorted = conceptGroups.groups.slice().sort((a, b) => b.members.length - a.members.length);
    for (const g of sorted) {
      const present = g.members.filter((m) => shown.has(m.lang));
      if (present.length < 2) continue;
      const codes = present.map((m) => m.lang);
      const rels = new Set(present.map((m) => m.relation));
      let how = '';
      if (rels.size === 1) how = ` (${RELATION_TEXT[present[0].relation]})`;
      else {
        const parts = [];
        for (const r of rels) parts.push(`${RELATION_TEXT[r]}: ${listNames(present.filter((m) => m.relation === r).map((m) => m.lang), langs)}`);
        how = ` (${parts.join('; ')})`;
      }
      const gloss = g.gloss.charAt(0).toLowerCase() + g.gloss.slice(1);
      const lead = rels.size === 1 ? `${listNames(codes, langs)}: ` : '';
      const names = rels.size === 1 ? '' : `${listNames(codes, langs)}: `;
      out.push(`${lead}${names}${gloss}, from ${g.root}${how}.`);
      if (out.length === 4) break;
    }
    const grouped = new Set();
    for (const g of conceptGroups.groups) for (const m of g.members) if (shown.has(m.lang)) grouped.add(m.lang);
    const alone = shownCodes.filter((c) => !grouped.has(c));
    if (out.length >= 1 && alone.length) out.push(`No shared root is recorded for: ${listNames(alone, langs)}.`);
    return out.length >= 2 ? out.slice(0, 5) : [];
  }

  function stats(shownCodes, langs) {
    const sel = langs.filter((l) => shownCodes.includes(l.code));
    const count = (key) => {
      const m = {};
      for (const l of sel) m[l[key]] = (m[l[key]] || 0) + 1;
      return m;
    };
    return { languages: sel.length, scripts: count('script'), families: count('family') };
  }

  // ---------------------------------------------------------------- display text
  /** mode: 'native' | 'translit' | 'both' -> {primary, secondary} */
  function displayText(lang, word, mode) {
    const t = translit(lang, word);
    const same = t === word;
    if (mode === 'translit') return { primary: t, secondary: '' };
    if (mode === 'both') return { primary: word, secondary: same ? '' : t };
    return { primary: word, secondary: '' };
  }

  return {
    translit, fold, levenshtein, buildSearchIndex, search, FAMILY_NOTES, orderLanguages,
    MARKERS, groupsForConcept, RELATION_TEXT, observations, stats, displayText,
  };
});
