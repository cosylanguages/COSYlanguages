import { test, expect } from '@playwright/test';

test.describe('Pronoun Architecture Validation', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8080/portal/index.html');
        await page.evaluate(() => {
            localStorage.setItem('student_unlocked', 'true');
        });
        await page.goto('http://localhost:8080/portal/grammar-reference.html?lang=en');
        await page.waitForFunction(() => typeof window.Linguistics !== 'undefined');
    });

    test('English personal pronoun paradigms', async ({ page }) => {
        const result = await page.evaluate(() => {
            return {
                subject_1s: window.Linguistics.getPronoun('en', 'personal', { personIndex: 0, case: 'subject' }),
                object_1s: window.Linguistics.getPronoun('en', 'personal', { personIndex: 0, case: 'object' }),
                poss_adj_3fs: window.Linguistics.getPronoun('en', 'personal', { personIndex: 3, case: 'possessive_adj' }),
                reflexive_3pl: window.Linguistics.getPronoun('en', 'personal', { personIndex: 6, case: 'reflexive' })
            };
        });
        expect(result.subject_1s).toBe('I');
        expect(result.object_1s).toBe('me');
        expect(result.poss_adj_3fs).toBe('her');
        expect(result.reflexive_3pl).toBe('themselves');
    });

    test('Russian case declension for personal pronouns', async ({ page }) => {
        const result = await page.evaluate(() => {
            return {
                nom_1s: window.Linguistics.getPronoun('ru', 'personal', { personIndex: 0, case: 'nominative' }),
                gen_1s: window.Linguistics.getPronoun('ru', 'personal', { personIndex: 0, case: 'genitive' }),
                dat_3ms: window.Linguistics.getPronoun('ru', 'personal', { personIndex: 2, case: 'dative' }),
                inst_3fs: window.Linguistics.getPronoun('ru', 'personal', { personIndex: 3, case: 'instrumental' })
            };
        });
        expect(result.nom_1s).toBe('я');
        expect(result.gen_1s).toBe('меня');
        expect(result.dat_3ms).toBe('ему');
        expect(result.inst_3fs).toBe('ей');
    });

    test('French clitics and elision in reflexive verbs', async ({ page }) => {
        const result = await page.evaluate(() => {
            const l = window.Linguistics;
            // Test applyReflexive which uses the new pronoun_system
            return {
                standard: l.applyReflexive('fr', 'lave', 0), // je me lave
                elided: l.applyReflexive('fr', 'habille', 0), // je m'habille
                vous: l.applyReflexive('fr', 'levez', 4) // vous vous levez
            };
        });
        expect(result.standard).toBe('me lave');
        expect(result.elided).toBe("m'habille");
        expect(result.vous).toBe('vous levez'); // Wait, vous vous levez.
        // In my implementation:
        // fr: { reflexive: { forms: ['me', 'te', 'se', 'nous', 'vous', 'se'], ... } }
        // getPronoun('fr', 'reflexive', {personIndex: 4}) -> 'vous'
        // applyReflexive('fr', 'levez', 4) -> 'vous' + ' ' + 'levez' -> 'vous levez'
        // Note: The verb conjugation usually adds the subject pronoun if it's not pro-drop.
        // applyReflexive only handles the reflexive part.
    });

    test('French demonstrative resolution with proximity', async ({ page }) => {
        const result = await page.evaluate(() => {
            const l = window.Linguistics;
            return {
                masc_prox: l.getPronoun('fr', 'demonstrative', { gender: 'masculine', proximity: 'proximal' }),
                fem_dist: l.getPronoun('fr', 'demonstrative', { gender: 'feminine', proximity: 'distal' }),
                mpl_prox: l.getPronoun('fr', 'demonstrative', { gender: 'masculine', number: 'plural', proximity: 'proximal' })
            };
        });
        expect(result.masc_prox).toBe('celui-ci');
        expect(result.fem_dist).toBe('celle-là');
        expect(result.mpl_prox).toBe('ceux-ci');
    });

    test('Russian demonstrative declension via Morphology', async ({ page }) => {
        const result = await page.evaluate(() => {
            const m = window.Morphology;
            // "этот" (proximal) in genitive masculine singular
            return m.inflect('ru', { word: 'этот', form: 'pronoun', category: 'demonstrative' }, { case: 'genitive', gender: 'masculine', number: 'singular', proximity: 'proximal' });
        });
        // этот -> genitive -> этого (using 'hard' declension group: n: 'ый', g: 'ого' -> strip 'ый' + 'ого')
        // wait, 'этот' ends in 'т'. My strip pattern /[аоеьый]$/ handles 'ый'.
        // if word is 'этот', it doesn't match the strip.
        // let's see: 'этот' -> 'этот' + 'ого' = 'этого'? No, 'этот' -> 'эт' + 'ого' = 'этого'.
        // I need to make sure the strip pattern handles 'от' or just 'т' if needed, or define it in the pronoun_system.
        expect(result).toBe('этого');
    });

    test('Morphology inflection of Russian reflexive "себя"', async ({ page }) => {
        const result = await page.evaluate(() => {
            const m = window.Morphology;
            return {
                dat: m.inflect('ru', { word: 'себя', form: 'pronoun', category: 'reflexive' }, { case: 'dative' }),
                inst: m.inflect('ru', { word: 'себя', form: 'pronoun', category: 'reflexive' }, { case: 'instrumental' })
            };
        });
        expect(result.dat).toBe('себе');
        expect(result.inst).toBe('собой');
    });

    test('Legacy fallback for languages without pronoun_system', async ({ page }) => {
        const result = await page.evaluate(() => {
            // Spanish (es) doesn't have pronoun_system yet
            return window.Linguistics.getPronoun('es', 'personal', { personIndex: 0 });
        });
        expect(result).toBe('yo');
    });

    test('Register and politeness distinctions', async ({ page }) => {
        const result = await page.evaluate(() => {
            const l = window.Linguistics;
            return {
                de_informal: l.getPronoun('de', 'personal', { personIndex: 7, register: 'informal', case: 'nominative' }), // sie
                de_formal: l.getPronoun('de', 'personal', { personIndex: 7, register: 'formal', case: 'nominative' }), // Sie
                it_clitic_io: l.getPronoun('it', 'personal', { personIndex: 0, case: 'object_direct' }) // mi
            };
        });
        expect(result.de_informal).toBe('sie');
        expect(result.de_formal).toBe('Sie');
        expect(result.it_clitic_io).toBe('mi');
    });

    test('Reciprocal and Dummy pronouns', async ({ page }) => {
        const result = await page.evaluate(() => {
            const l = window.Linguistics;
            return {
                fr_recip: l.getPronoun('fr', 'reciprocal'),
                en_dummy_subj: l.getPronoun('en', 'dummy', { type: 'subject' }),
                en_dummy_exist: l.getPronoun('en', 'dummy', { type: 'existential' })
            };
        });
        expect(result.fr_recip).toBe("l'un l'autre");
        expect(result.en_dummy_subj).toBe('it');
        expect(result.en_dummy_exist).toBe('there');
    });

    test('Turkic pronoun retrieval', async ({ page }) => {
        const result = await page.evaluate(() => {
            const l = window.Linguistics;
            return {
                tt_1s_gen: l.getPronoun('tt', 'personal', { personKey: '1s', case: 'genitive' }),
                tt_dem_prox: l.getPronoun('tt', 'demonstrative', { proximity: 'proximal' })
            };
        });
        expect(result.tt_1s_gen).toBe('минем');
        expect(result.tt_dem_prox).toBe('бу');
    });

    test('Pro-drop behavior (Spanish/Russian)', async ({ page }) => {
        const result = await page.evaluate(() => {
            const l = window.Linguistics;
            return {
                ru_omit: l.shouldShowPronoun('ru', 'personal', { case: 'subject' }),
                ru_keep: l.shouldShowPronoun('ru', 'personal', { case: 'subject', emphasis: true }),
                en_keep: l.shouldShowPronoun('en', 'personal', { case: 'subject' })
            };
        });
        expect(result.ru_omit).toBe(false);
        expect(result.ru_keep).toBe(true);
        expect(result.en_keep).toBe(true);
    });

});
