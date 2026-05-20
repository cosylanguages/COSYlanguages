import { test, expect } from '@playwright/test';
const GRAMMAR_CONFIG = require('../js/data/grammar_config.js');
const Linguistics = require('../js/core/linguistics.js');

// Mock global GRAMMAR_CONFIG for node environment
global.GRAMMAR_CONFIG = GRAMMAR_CONFIG;

test.describe('Adjective Architecture Validation', () => {

    test('French adjective agreement and overrides', () => {
        const lang = 'fr';
        // Regular
        expect(Linguistics.inflectAdjective(lang, { word: 'petit' }, 'feminine', 'singular')).toBe('petite');
        expect(Linguistics.inflectAdjective(lang, { word: 'petit' }, 'masculine', 'plural')).toBe('petits');
        expect(Linguistics.inflectAdjective(lang, { word: 'petit' }, 'feminine', 'plural')).toBe('petites');

        // Overrides
        expect(Linguistics.inflectAdjective(lang, { word: 'heureux' }, 'feminine', 'singular')).toBe('heureuse');
        expect(Linguistics.inflectAdjective(lang, { word: 'heureux' }, 'masculine', 'plural')).toBe('heureux');
        expect(Linguistics.inflectAdjective(lang, { word: 'beau' }, 'masculine', 'plural')).toBe('beaux');
        expect(Linguistics.inflectAdjective(lang, { word: 'nouveau' }, 'feminine', 'singular')).toBe('nouvelle');
        // 'nouveau' is not in overrides for feminine. Let's check my GRAMMAR_CONFIG.
    });

    test('Italian adjective agreement', () => {
        const lang = 'it';
        expect(Linguistics.inflectAdjective(lang, { word: 'piccolo' }, 'feminine', 'singular')).toBe('piccola');
        expect(Linguistics.inflectAdjective(lang, { word: 'piccolo' }, 'masculine', 'plural')).toBe('piccoli');
        expect(Linguistics.inflectAdjective(lang, { word: 'piccolo' }, 'feminine', 'plural')).toBe('piccole');

        // Type 'e' adjectives
        expect(Linguistics.inflectAdjective(lang, { word: 'grande' }, 'feminine', 'singular')).toBe('grande');
        expect(Linguistics.inflectAdjective(lang, { word: 'grande' }, 'masculine', 'plural')).toBe('grandi');
    });

    test('German adjective declension (Strong)', () => {
        const lang = 'de';
        // Strong m nominative: -er
        expect(Linguistics.inflectAdjective(lang, { word: 'gut' }, 'masculine', 'singular', 'nominative', { definiteness: 'strong' })).toBe('guter');
        // Strong f dative: -er
        expect(Linguistics.inflectAdjective(lang, { word: 'gut' }, 'feminine', 'singular', 'dative', { definiteness: 'strong' })).toBe('guter');
        // Predicative: no ending
        expect(Linguistics.inflectAdjective(lang, { word: 'gut' }, 'masculine', 'singular', 'nominative', { usage: 'predicative' })).toBe('gut');
    });

    test('Russian adjective declension', () => {
        const lang = 'ru';
        // Hard stem m nominative
        expect(Linguistics.inflectAdjective(lang, { word: 'новый' }, 'masculine', 'singular', 'nominative')).toBe('новый');
        // Hard stem f accusative
        expect(Linguistics.inflectAdjective(lang, { word: 'новый' }, 'feminine', 'singular', 'accusative')).toBe('новую');
        // Soft stem m genitive
        expect(Linguistics.inflectAdjective(lang, { word: 'синий' }, 'masculine', 'singular', 'genitive')).toBe('синего');
    });

    test('English comparison logic', () => {
        const lang = 'en';
        expect(Linguistics.getAdjectiveComparison(lang, { word: 'small' }, 'comparative')).toBe('smaller');
        expect(Linguistics.getAdjectiveComparison(lang, { word: 'happy' }, 'comparative')).toBe('happier');
        expect(Linguistics.getAdjectiveComparison(lang, { word: 'beautiful' }, 'comparative')).toBe('more beautiful');
        expect(Linguistics.getAdjectiveComparison(lang, { word: 'good', comparative: 'better' }, 'comparative')).toBe('better');
    });

    test('Adjective placement', () => {
        expect(Linguistics.getAdjectivePosition('fr', { word: 'grand' })).toBe('preposed');
        expect(Linguistics.getAdjectivePosition('fr', { word: 'bleu' })).toBe('postposed');
        expect(Linguistics.getAdjectivePosition('en', { word: 'small' })).toBe('preposed');
    });

    test('Phonetic variants (French/Italian)', () => {
        // French: beau -> bel before vowel
        expect(Linguistics.applyNounAgreement('fr', { word: 'homme', gender: 'masculine' }, 'beau')).toBe('bel');
        expect(Linguistics.applyNounAgreement('fr', { word: 'garçon', gender: 'masculine' }, 'beau')).toBe('beau');

        // Italian: buono -> buon before vowel
        expect(Linguistics.applyNounAgreement('it', { word: 'amico', gender: 'masculine' }, 'buono')).toBe('buon');
        expect(Linguistics.applyNounAgreement('it', { word: 'studente', gender: 'masculine' }, 'buono')).toBe('buono'); // s+cons
    });

    test('Breton mutations', () => {
        const lang = 'br';
        // k -> g after feminine noun
        expect(Linguistics.applyNounAgreement(lang, { word: 'mamm', gender: 'feminine' }, 'kaer')).toBe('gaer');
        // No mutation after masculine
        expect(Linguistics.applyNounAgreement(lang, { word: 'tad', gender: 'masculine' }, 'kaer')).toBe('kaer');
    });

    test('Adjective derivation', () => {
        expect(Linguistics.deriveAdjective('hy', 'քաղաք', 'noun')).toBe('քաղաքային');
    });

    test('Invariable and non-comparable', () => {
        expect(Linguistics.inflectAdjective('fr', { word: 'marron', invariable: true }, 'feminine', 'plural')).toBe('marron');
        expect(Linguistics.getAdjectiveComparison('en', { word: 'red', theme: 'colors' }, 'comparative')).toBe('red');
    });

});
