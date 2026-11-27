/**
 * Placement quiz chrome i18n: every string table is complete, the report renders
 * in the visitor's language, and no code path falls back to blank text.
 */

const { test, describe } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const Strings = require('../js/placement/strings.js');
const ScoringModel = require('../js/placement/scoring-model.js');
const Report = require('../js/placement/report.js');

const ROOT = path.join(__dirname, '..');
const LANGS = Strings.languages;
const EN = Strings.table('en');
const KEYS = Object.keys(EN);

/** Keys whose value is legitimately identical in every language. */
const LANGUAGE_NEUTRAL = new Set([
  'lang.en', 'lang.fr', 'lang.it', 'lang.ru', 'lang.el', 'report.accuracy'
]);

function withStrings(lang, fn) {
  const previous = global.window;
  global.window = { COSYPlacementStrings: Strings };
  Strings.setLang(lang);
  try {
    return fn();
  } finally {
    global.window = previous;
    Strings.setLang('en');
  }
}

function gapSession() {
  return {
    language: 'fr',
    purpose: 'general',
    mode: 'full_diagnostic',
    skillThreads: {
      grammar: { theta: 5.2, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }, { isCorrect: 1 }] },
      vocabulary: { theta: 5.0, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }, { isCorrect: 1 }] },
      reading: { theta: 5.1, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }, { isCorrect: 1 }] },
      writing: { theta: 3.0, itemsAnswered: [{ estimatedBand: 'A2', rubricScores: { task_fulfilment: 2 } }] },
      speaking: { theta: 3.0, itemsAnswered: [{ estimatedBand: 'A2', rubricScores: { fluency_coherence: 2 } }] }
    }
  };
}

describe('Placement strings table', () => {

  test('every language carries exactly the English key set', () => {
    LANGS.forEach(lang => {
      const table = Strings.table(lang);
      const keys = Object.keys(table);
      const missing = KEYS.filter(k => !(k in table));
      const extra = keys.filter(k => !(k in EN));
      assert.deepStrictEqual(missing, [], `${lang} is missing keys`);
      assert.deepStrictEqual(extra, [], `${lang} has keys English does not`);
    });
  });

  test('no value is empty or whitespace', () => {
    LANGS.forEach(lang => {
      const table = Strings.table(lang);
      KEYS.forEach(key => {
        assert.strictEqual(typeof table[key], 'string', `${lang}/${key} must be a string`);
        assert.ok(table[key].trim().length > 0, `${lang}/${key} must not be blank`);
      });
    });
  });

  test('translations are translations, not English copies', () => {
    LANGS.filter(l => l !== 'en').forEach(lang => {
      const table = Strings.table(lang);
      const identical = KEYS.filter(k => table[k] === EN[k] && !LANGUAGE_NEUTRAL.has(k));
      assert.deepStrictEqual(identical, [], `${lang} still carries English copy`);
    });
  });

  test('placeholders survive translation', () => {
    const placeholders = value => (value.match(/\{(\w+)\}/g) || []).sort();
    LANGS.forEach(lang => {
      const table = Strings.table(lang);
      KEYS.forEach(key => {
        assert.deepStrictEqual(
          placeholders(table[key]),
          placeholders(EN[key]),
          `${lang}/${key} changed its placeholders`
        );
      });
    });
  });

  test('t() interpolates variables and leaves unknown placeholders alone', () => {
    Strings.setLang('fr');
    assert.strictEqual(Strings.t('test.target', { lang: 'Français' }), 'Langue cible : Français');
    assert.strictEqual(Strings.t('writing.words', { n: 12 }), 'Mots : 12');
    assert.strictEqual(Strings.t('test.target', {}), 'Langue cible : {lang}');
    assert.strictEqual(Strings.t('writing.words', { other: 1 }), 'Mots : {n}');
  });

  test('unknown language and unknown key degrade safely', () => {
    assert.strictEqual(Strings.setLang('de'), 'en');
    assert.strictEqual(Strings.getLang(), 'en');
    assert.strictEqual(Strings.t('does.not.exist'), '');
    assert.strictEqual(Strings.setLang('EN'), 'en');
  });

  test('every key the quiz code asks for exists', () => {
    const files = ['ui.js', 'audio-recorder.js', 'report.js', 'scoring-model.js'];
    // A bare t(...) call, not the tail of createElement(...)/querySelector(...).
    const literalKey = /(?:^|[^\w$.])t\(\s*'([a-zA-Z][\w.]*)'/gm;
    const requested = new Set();
    files.forEach(file => {
      const source = fs.readFileSync(path.join(ROOT, 'js/placement', file), 'utf8');
      let match;
      while ((match = literalKey.exec(source)) !== null) requested.add(match[1]);
    });
    // Dynamic keys the modules build from data.
    ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'].forEach(skill => requested.add('skill.' + skill));
    LANGS.forEach(lang => requested.add('lang.' + lang));
    ['high', 'medium', 'low', 'provisional'].forEach(level => requested.add('report.confidence.' + level));
    ['general', 'spoken', 'exam'].forEach(purpose => requested.add('purposeLabel.' + purpose));
    ['course', 'fluency', 'club'].forEach(rec => {
      requested.add('rec.' + rec + '.title');
      requested.add('rec.' + rec + '.desc');
    });
    ['strongest', 'weakest', 'gap', 'balanced'].forEach(code => requested.add('diag.' + code));
    ['noEvidence', 'inconclusive', 'accuracy', 'missingProductive', 'skipped', 'rubric'].forEach(code => {
      requested.add('report.' + code);
    });

    const unknown = [...requested].filter(key => !key.endsWith('.') && !(key in EN));
    assert.deepStrictEqual(unknown, [], 'code asks for keys the table does not define');
  });
});

describe('Placement page wiring', () => {

  test('the page loads the string table before the UI and marks the static chrome', () => {
    const html = fs.readFileSync(path.join(ROOT, 'placement-quiz.html'), 'utf8');
    const stringsAt = html.search(/<script[^>]+js\/placement\/strings\.js/);
    const uiAt = html.search(/<script[^>]+js\/placement\/ui\.js/);
    assert.ok(stringsAt > -1, 'placement-quiz.html must load js/placement/strings.js');
    assert.ok(uiAt > stringsAt, 'strings.js must load before ui.js');

    ['page.badge', 'page.title', 'page.subtitle'].forEach(key => {
      assert.ok(html.includes(`data-placement-i18n="${key}"`), `static chrome missing hook for ${key}`);
      assert.ok(key in EN, `hook ${key} has no string`);
    });
  });

  test('the report renders in the visitor language, not in English', () => {
    const data = ScoringModel.evaluatePlacement(gapSession());

    const french = withStrings('fr', () => Report.generateReportHTML(data));
    assert.ok(french.includes("Rapport d'évaluation COSYlanguages"), 'French report title missing');
    assert.ok(french.includes('Fiabilité :'), 'French confidence label missing');
    assert.ok(french.includes('Écart entre compréhension'), 'French gap notice missing');
    assert.ok(french.includes('Points forts et priorités'), 'French strengths heading missing');
    assert.ok(!/Overall Recommended Placement|Confidence:|Strength:|Recommended Learning Path/.test(french),
      'English chrome leaked into the French report');
    assert.ok(!/Strongest performance|Primary priority area|Active-Passive Gap:/.test(french),
      'English diagnostics leaked into the French report');

    const greek = withStrings('el', () => Report.generateReportHTML(data));
    assert.ok(greek.includes('Αναφορά αξιολόγησης COSYlanguages'), 'Greek report title missing');
    assert.ok(greek.includes('Αξιοπιστία:'), 'Greek confidence label missing');
  });

  test('the report falls back to its English literals without the string table', () => {
    const data = ScoringModel.evaluatePlacement(gapSession());
    const previous = global.window;
    global.window = {};
    try {
      const html = Report.generateReportHTML(data);
      assert.ok(html.includes('COSYlanguages Assessment Report'));
      assert.ok(html.includes('Confidence:'));
    } finally {
      global.window = previous;
    }
  });

  test('scoring keeps English text and adds the codes the report localises', () => {
    const data = ScoringModel.evaluatePlacement(gapSession());
    data.diagnostics.strengths.forEach(entry => {
      assert.ok(entry.code, 'diagnostic entries need a code');
      assert.ok(entry.text, 'diagnostic entries keep their English text');
    });
    data.recommendations.forEach(rec => {
      assert.ok(rec.code, 'recommendations need a code');
      assert.ok(rec.title && rec.description, 'recommendations keep English copy');
    });
    Object.values(data.skills).forEach(skill => {
      if (!skill.isInsufficient) assert.ok(skill.scoreCode, 'skill evidence needs a score code');
    });
  });
});
