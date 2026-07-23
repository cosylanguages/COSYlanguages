import { test, expect } from '@playwright/test';

test.describe('COSYlanguages Placement Quiz', () => {
  test('should load the placement quiz page and show the progressive CEFR-aligned intro', async ({ page }) => {
    await page.goto('http://localhost:8080/placement-quiz.html');

    // Check heading
    await expect(page.locator('h1')).toHaveText('COSY Placement Quiz 📝');

    // Check intro text matches the new active-passive description
    const introText = page.locator('#quiz-intro-text');
    await expect(introText).toContainText('Many learners can read or understand high-level grammar passively');
    await expect(introText).toContainText('Passive Receptive Competence');
    await expect(introText).toContainText('Active Productive Confidence');
  });

  test('should allow starting and completing the full quiz to show the calibrated CEFR results', async ({ page }) => {
    await page.goto('http://localhost:8080/placement-quiz.html');

    // Click on English language option
    await page.click('text=🇬🇧 English');

    // Answer first 10 passive questions correctly (or select valid options)
    // We will loop 10 times. To make sure we answer fast, we'll click on index 0 for each of them (or index of correct answer, let's just click index 0 for simplicity)
    for (let i = 0; i < 10; i++) {
      await expect(page.locator('#quiz-progress-text')).toHaveText(`Question ${i + 1} of 15`);
      const options = page.locator('.option-btn');
      await options.nth(0).click();
      await page.waitForTimeout(1300); // wait for transition
    }

    // Now answer the 5 active speaking simulation questions (questions 11 to 15)
    // We will select Option 0 ("I freeze...") to trigger a significant speaking gap warning
    for (let i = 10; i < 15; i++) {
      await expect(page.locator('#quiz-progress-text')).toHaveText(`Question ${i + 1} of 15`);
      const options = page.locator('.option-btn');
      await options.nth(0).click();
      await page.waitForTimeout(1300); // wait for transition
    }

    // Now we should be on the results screen
    await expect(page.locator('#step-results')).toBeVisible();

    // The old simple score text should be hidden
    await expect(page.locator('#results-score-text')).toBeHidden();

    // Verify premium active-passive breakdown grid is rendered
    const breakdown = page.locator('#dynamic-breakdown');
    await expect(breakdown).toBeVisible();
    await expect(breakdown).toContainText('Passive Receptive Score');
    await expect(breakdown).toContainText('Active Speaking Confidence');

    // Verify warning gap notice is rendered since we consistently selected Option 0 (freeze)
    const gapNotice = page.locator('#dynamic-gap-notice');
    await expect(gapNotice).toBeVisible();
    await expect(gapNotice).toContainText('Passive-Active Speaking Gap Detected!');
  });
});
