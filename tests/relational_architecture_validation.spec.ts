import { test, expect } from '@playwright/test';

// In Node environment, we need to mock or load the linguistics and grammar config
const GRAMMAR_CONFIG = require('../js/data/grammar_config.js');
const Morphology = require('../js/core/morphology.js');
const Linguistics = require('../js/core/linguistics.js');

// Setup global environment for the engines
global.GRAMMAR_CONFIG = GRAMMAR_CONFIG;
global.Morphology = Morphology;
global.Linguistics = Linguistics;

test.describe('Relational Marker Architecture Validation', () => {

    test('German Prepositions: Case Governance (Accusative vs Dative)', () => {
        const nounObj = { word: 'Haus', gender: 'neuter', classification: 'regular', declensionGroup: '2nd_n' };

        // Motion: into the house (in + Accusative)
        const inAcc = Linguistics.applyRelationalMarker('de', 'in', nounObj, { motionType: 'motion' });
        expect(inAcc).toBe('in Haus'); // Haus doesn't change in Accusative.
        // Note: Real application would include an article, but let's check basic governance first.
    });

    test('French Prepositions: Contractions and Elisions', () => {
        const nounObj = { word: 'restaurant', gender: 'masculine' };

        // de + le restaurant -> du restaurant
        const deLe = Linguistics.applyRelationalMarker('fr', 'de', 'restaurant', { article: 'le' });
        expect(deLe).toBe('du restaurant');

        // à + les restaurants -> aux restaurants
        const aLes = Linguistics.applyRelationalMarker('fr', 'à', 'restaurants', { article: 'les' });
        expect(aLes).toBe('aux restaurants');

        // de + hotel (vowel) -> d'hotel
        const deHotel = Linguistics.applyRelationalMarker('fr', 'de', 'hôtel');
        expect(deHotel).toBe("d'hôtel");
    });

    test('Russian Prepositions: Two-way governance', () => {
        const nounObj = { word: 'город', form: 'noun', gender: 'masculine', declensionGroup: '2nd_m' };

        // into the city (в + Accusative)
        const inCityAcc = Linguistics.applyRelationalMarker('ru', 'в', nounObj, { motionType: 'motion' });
        expect(inCityAcc).toBe('в город'); // Acc is same as Nom for inanimate

        // in the city (в + Prepositional)
        const inCityPrep = Linguistics.applyRelationalMarker('ru', 'в', nounObj, { motionType: 'location' });
        expect(inCityPrep).toBe('в городе');
    });

    test('Turkic Postpositions: Harmony-based variants', () => {
        // tt: гына/генә (only)
        const frontWord = 'китап'; // kitáp (back vowels in TT? No, i is front, a is back. Kitap is back-harmony mostly)
        // Wait, 'китап' (kitap) has 'i' (front) and 'a' (back). Usually 'a' wins if it's last.

        const frontMarker = Linguistics.applyRelationalMarker('tt', 'гына', 'әни', { meaning: 'limitation' }); // әни (front)
        expect(frontMarker).toBe('әни генә');

        const backMarker = Linguistics.applyRelationalMarker('tt', 'гына', 'ата', { meaning: 'limitation' }); // ата (back)
        expect(backMarker).toBe('ата гына');
    });

    test('Celtic Mutations: Breton Prepositions', () => {
        // Breton: da (to) triggers soft mutation
        // t -> d
        const softMut = Linguistics.applyRelationalMarker('br', 'da', 'ti');
        expect(softMut).toBe('da di');

        // e (in) triggers spirant mutation
        // k -> c'h
        const spirantMut = Linguistics.applyRelationalMarker('br', 'e', 'kêr');
        expect(spirantMut).toBe("e c'hêr");
    });

    test('Greek Prepositions: Contractions', () => {
        // σε + τον -> στον
        const sto = Linguistics.applyRelationalMarker('el', 'σε', 'κήπο', { article: 'τον' });
        expect(sto).toBe('στον κήπο');
    });

});
