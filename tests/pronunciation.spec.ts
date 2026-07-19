import { test, expect } from '@playwright/test';
import path from 'path';

// Extend window interface for mock tracking
declare global {
  interface Window {
    speechSynthesisMockCalls: Array<{ text: string; lang: string }>;
  }
}

test('vocabulary pronunciation button injection and playback', async ({ page }) => {
  // Load a speaking club session page
  const filePath = `file://${path.resolve('events/sessions/4-day-work-week.html')}`;

  // Set up mock/spy for speechSynthesis before navigation
  await page.addInitScript(() => {
    window.speechSynthesisMockCalls = [];

    // Intercept the native SpeechSynthesis.prototype.speak
    if (typeof SpeechSynthesis !== 'undefined') {
      SpeechSynthesis.prototype.speak = function(utterance) {
        window.speechSynthesisMockCalls.push({
          text: utterance.text,
          lang: utterance.lang
        });
      };
      SpeechSynthesis.prototype.cancel = function() {};
    }
  });

  await page.goto(filePath);

  // 1. Verify that .btn-pronounce has been injected into each .vocab-word element
  const vocabWords = page.locator('.vocab-word');
  const vocabCount = await vocabWords.count();
  expect(vocabCount).toBeGreaterThan(0);

  for (let i = 0; i < vocabCount; i++) {
    const wordEl = vocabWords.nth(i);
    const btn = wordEl.locator('.btn-pronounce');
    await expect(btn).toBeVisible();
    await expect(btn).toHaveText('🔊');
  }

  // 2. Click a pronunciation button and verify mock speechSynthesis was called
  const firstWordEl = vocabWords.nth(0);
  const wordText = (await firstWordEl.textContent()) || '';
  // The element contains the button text '🔊' at the end, clean it up
  const expectedText = wordText.replace('🔊', '').trim();

  const firstBtn = firstWordEl.locator('.btn-pronounce');
  await firstBtn.click();

  // Retrieve the speech synthesis calls
  const calls = await page.evaluate(() => window.speechSynthesisMockCalls);
  expect(calls.length).toBe(1);
  expect(calls[0].text).toBe(expectedText);
  expect(calls[0].lang).toBe('en-GB'); // HTML lang is "en"
});

test('vocabulary pronunciation clean text formatting with oppositions and gender', async ({ page }) => {
  // Load a French session page with opposites ("≠") and gender markers
  const filePath = `file://${path.resolve('events/fr/sessions/saudade.html')}`;

  await page.addInitScript(() => {
    window.speechSynthesisMockCalls = [];

    if (typeof SpeechSynthesis !== 'undefined') {
      SpeechSynthesis.prototype.speak = function(utterance) {
        window.speechSynthesisMockCalls.push({
          text: utterance.text,
          lang: utterance.lang
        });
      };
      SpeechSynthesis.prototype.cancel = function() {};
    }
  });

  await page.goto(filePath);

  const vocabWords = page.locator('.vocab-word');

  // Click the first button (which is "Empathie ≠ Apathie")
  await vocabWords.nth(0).locator('.btn-pronounce').click();

  // Click the second button (which is "Conscient ≠ Inconscient")
  await vocabWords.nth(1).locator('.btn-pronounce').click();

  const calls = await page.evaluate(() => window.speechSynthesisMockCalls);
  expect(calls.length).toBe(2);

  // Verify clean up of "≠" to a natural pause/comma
  expect(calls[0].text).toBe('Empathie, Apathie');
  expect(calls[0].lang).toBe('fr-FR'); // HTML lang is "fr"

  expect(calls[1].text).toBe('Conscient, Inconscient');
  expect(calls[1].lang).toBe('fr-FR');
});
