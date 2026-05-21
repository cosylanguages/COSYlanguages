import { test, expect } from '@playwright/test';

test.describe('Morphology Engine Audit', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8080/index.html');
        await page.evaluate(() => {
            localStorage.setItem('student_unlocked', 'true');
        });
        // Direct script injection to bypass potential loading issues in tests
        await page.addScriptTag({ path: 'js/data/grammar_config.js' });
        await page.addScriptTag({ path: 'js/core/morphology.js' });
    });

    test('Core Transformation Pipeline - Suffix and Prefix', async ({ page }) => {
        const result = await page.evaluate(() => {
            const rules = [
                { type: 'prefix', value: 'un' },
                { type: 'suffix', value: 'able' }
            ];
            return window.Morphology.transform('do', rules, { lang: 'en' });
        });
        expect(result).toBe('undoable');
    });

    test('Vowel Harmony - Turkic (Tatar)', async ({ page }) => {
        const result = await page.evaluate(() => {
            const rules = { type: 'vowel_harmony', front: 'ләр', back: 'лар' };
            const wordFront = window.Morphology.transform('әни', rules, { lang: 'tt' }); // mother (front)
            const wordBack = window.Morphology.transform('ата', rules, { lang: 'tt' });  // father (back)
            return { wordFront, wordBack };
        });
        expect(result.wordFront).toBe('әниләр');
        expect(result.wordBack).toBe('аталар');
    });

    test('Condition Checking - Syllables', async ({ page }) => {
        const result = await page.evaluate(() => {
            const rules = [
                {
                    type: 'suffix',
                    value: 'er',
                    condition: { syllables: { max: 2 } }
                },
                {
                    type: 'template',
                    value: 'more [s]',
                    condition: { syllables: { min: 3 } }
                }
            ];
            const short = window.Morphology.transform('fast', rules, { lang: 'en' });
            const long = window.Morphology.transform('beautiful', rules, { lang: 'en' });
            return { short, long };
        });
        expect(result.short).toBe('faster');
        expect(result.long).toBe('more beautiful');
    });

    test('Reverse Analysis - Verb Suffixes', async ({ page }) => {
        const results = await page.evaluate(() => {
            return window.Morphology.analyze('fr', 'chantons', 'verb');
        });
        // Should identify 'er' group present tense 1st person plural (nous)
        const match = results.find(r => r.features.tense === 'present_simple' && r.features.person === 3);
        expect(match).toBeDefined();
        expect(match.lemma).toBe('chanter');
    });

    test('Pronoun Declension - Russian', async ({ page }) => {
        const result = await page.evaluate(() => {
            return window.Morphology.inflect('ru', { word: 'я', form: 'pronoun' }, { personIndex: 0, case: 'genitive' });
        });
        expect(result).toBe('меня');
    });

    test('Noun Inflection - Russian Declension Group', async ({ page }) => {
        const result = await page.evaluate(() => {
            const noun = { word: 'книга', declensionGroup: '1st', stripEnding: 'а' };
            return window.Morphology.inflect('ru', noun, { number: 'singular', case: 'genitive' });
        });
        expect(result).toBe('книги');
    });

    test('Adjective Inflection - French Agreement', async ({ page }) => {
        const result = await page.evaluate(() => {
            const adj = { word: 'grand' };
            return window.Morphology.inflect('fr', adj, { pos: 'adjective', gender: 'feminine', number: 'plural' });
        });
        expect(result).toBe('grandes');
    });
});
