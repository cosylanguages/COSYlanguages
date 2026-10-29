const { test, describe } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const core = require('../comparative/word-explorer-core.js');

describe('transliteration', () => {
  const cases = [
    ['ru', 'понедельник', "ponedel'nik"], ['ru', 'воскресенье', "voskresen'e"], ['ru', 'щи', 'shchi'],
    ['ru', 'Среда', 'Sreda'],
    ['el', 'Δευτέρα', 'Deftéra'], ['el', 'Τρίτη', 'Tríti'], ['el', 'Κυριακή', 'Kyriakí'], ['el', 'Σάββατο', 'Sávvato'],
    ['el', 'Ιανουάριος', 'Ianouários'], ['el', 'Αύγουστος', 'Ávgoustos'], ['el', 'άνοιξη', 'ánixi'],
    ['hy', 'երկուշաբթի', "erkushabt'i"], ['hy', 'կիրակի', 'kiraki'], ['hy', 'ուրբաթ', "urbat'"],
    ['ka', 'ორშაბათი', 'orshabati'], ['ka', 'კვირა', "k'vira"], ['ka', 'გაზაფხული', 'gazapkhuli'],
    ['tt', 'дүшәмбе', 'düshämbe'], ['ba', 'йәкшәмбе', 'yäkshämbe'], ['ba', 'ҡыш', 'qısh'],
    ['cv', 'кӑрлач', 'kărlach'], ['cv', 'ҫӗртме', 'śĕrtme'],
    ['fr', 'lundi', 'lundi'], ['en', 'Monday', 'Monday'],
  ];
  for (const [lang, input, expected] of cases) {
    test(`${lang}: ${input}`, () => assert.strictEqual(core.translit(lang, input), expected));
  }
  test('empty input', () => assert.strictEqual(core.translit('ru', ''), ''));
});

describe('search', () => {
  const concepts = [
    { concept_id: 'weekday.monday', forms: { en: { word: 'Monday' }, ru: { word: 'понедельник' }, hy: { word: 'երկուշաբթի' }, it: { word: 'lunedì' } } },
    { concept_id: 'month.march', forms: { en: { word: 'March' }, fr: { word: 'mars' }, br: { word: 'meurzh' } } },
  ];
  const idx = core.buildSearchIndex(concepts);
  test('finds by English', () => assert.strictEqual(core.search(idx, 'mon')[0].concept_id, 'weekday.monday'));
  test('finds by native script', () => assert.strictEqual(core.search(idx, 'понедельник')[0].concept_id, 'weekday.monday'));
  test('finds by transliteration', () => assert.strictEqual(core.search(idx, 'erkushabti')[0].concept_id, 'weekday.monday'));
  test('ignores accents', () => assert.strictEqual(core.search(idx, 'lunedi')[0].concept_id, 'weekday.monday'));
  test('fuzzy match', () => assert.strictEqual(core.search(idx, 'marhc')[0], undefined));
  test('fuzzy typo within one edit', () => assert.strictEqual(core.search(idx, 'mondey')[0].concept_id, 'weekday.monday'));
  test('empty query', () => assert.deepStrictEqual(core.search(idx, '  '), []));
});

describe('groups, observations, stats', () => {
  const langs = [
    { code: 'fr', name_en: 'French', family: 'Romance', script: 'Latin' },
    { code: 'it', name_en: 'Italian', family: 'Romance', script: 'Latin' },
    { code: 'ru', name_en: 'Russian', family: 'Slavic', script: 'Cyrillic' },
  ];
  const ling = { groups: [
    { id: 'a.moon', concept: 'a', root: 'Latin lunae dies', gloss: 'day of the Moon', members: [{ lang: 'fr', relation: 'inherited' }, { lang: 'it', relation: 'inherited' }], reviewed: false },
  ] };
  const g = core.groupsForConcept(ling, 'a');
  test('groups assign marker and color', () => { assert.strictEqual(g.groups[0].marker, '●'); assert.strictEqual(g.byLang.fr.length, 1); assert.strictEqual(g.byLang.ru, undefined); });
  test('observations need at least 2 facts', () => {
    const o = core.observations(g, ['fr', 'it', 'ru'], langs);
    assert.strictEqual(o.length, 2);
    assert.match(o[0], /French, Italian/);
    assert.match(o[1], /Russian/);
  });
  test('observations keep proper nouns and split mixed relations', () => {
    const mixed = core.groupsForConcept({ groups: [{ id: 'b.m', concept: 'b', root: 'Latin Martis dies', gloss: 'day of Mars', members: [{ lang: 'fr', relation: 'inherited' }, { lang: 'it', relation: 'calque' }], reviewed: false }] }, 'b');
    const o = core.observations(mixed, ['fr', 'it', 'ru'], langs);
    assert.match(o[0], /day of Mars/);
    assert.match(o[0], /inherited from the root: French; translated from the root \(calque\): Italian/);
  });
  test('observations hidden when only one fact', () => assert.deepStrictEqual(core.observations(g, ['fr', 'it'], langs), []));
  test('observations hidden without groups', () => assert.deepStrictEqual(core.observations({ groups: [], byLang: {} }, ['fr', 'ru'], langs), []));
  test('stats', () => {
    const s = core.stats(['fr', 'it', 'ru'], langs);
    assert.deepStrictEqual(s.scripts, { Latin: 2, Cyrillic: 1 });
    assert.deepStrictEqual(s.families, { Romance: 2, Slavic: 1 });
  });
  test('displayText modes', () => {
    assert.deepStrictEqual(core.displayText('ru', 'среда', 'both'), { primary: 'среда', secondary: 'sreda' });
    assert.deepStrictEqual(core.displayText('fr', 'lundi', 'both'), { primary: 'lundi', secondary: '' });
    assert.deepStrictEqual(core.displayText('ru', 'среда', 'translit'), { primary: 'sreda', secondary: '' });
  });
  test('orderLanguages groups by family', () => {
    const l = [{ code: 'fr', family: 'Romance' }, { code: 'ru', family: 'Slavic' }, { code: 'it', family: 'Romance' }];
    assert.deepStrictEqual(core.orderLanguages(l, true).map((x) => x.code), ['fr', 'it', 'ru']);
  });
});
