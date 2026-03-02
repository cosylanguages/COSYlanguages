import { test, expect } from '@playwright/test';
import path from 'path';

test('verify grammar practice items', async ({ page }) => {
  await page.goto(`file://${path.resolve('practice.html')}`);

  // Select Grammar
  await page.click('span[data-translate-key="cat_grammar"]');

  // Select Lesson 1
  await page.fill('#lesson-range', '1');

  // Click Start
  await page.click('#start-btn');

  // Check the first few items
  for (let i = 0; i < 5; i++) {
    const instruction = await page.textContent('#task-instruction');
    const word = await page.textContent('#word-display');
    console.log(`Task ${i+1}: [${instruction}] for word: [${word}]`);

    // Check if it's visible
    await expect(page.locator('#question-card')).toBeVisible();

    // Click Next (mocking correct answer if possible or just skipping)
    // Actually, I can just check the DOM state
    await page.evaluate(() => {
        // Force correct and show next
        if (typeof showFeedback === 'function') showFeedback(true);
    });
    await page.click('#next-btn');
  }
});

test('verify vocabulary practice items', async ({ page }) => {
  await page.goto(`file://${path.resolve('practice.html')}`);

  // Select Vocabulary (default, but let's be sure)
  await page.click('span[data-translate-key="cat_vocab"]');

  // Select Lesson 1
  await page.fill('#lesson-range', '1');

  // Click Start
  await page.click('#start-btn');

  // Check the first few items
  for (let i = 0; i < 5; i++) {
    const instruction = await page.textContent('#task-instruction');
    const word = await page.textContent('#word-display');
    console.log(`Vocab Task ${i+1}: [${instruction}] for word: [${word}]`);

    await page.evaluate(() => {
        if (typeof showFeedback === 'function') showFeedback(true);
    });
    await page.click('#next-btn');
  }
});
