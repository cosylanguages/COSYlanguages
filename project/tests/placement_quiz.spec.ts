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

  test('should allow completing the perfect full quiz without pivot', async ({ page }) => {
    test.setTimeout(60000);

    await page.goto('http://localhost:8080/placement-quiz.html');

    // Click on English language option
    await page.click('text=🇬🇧 English');

    // Answer first 10 passive questions correctly to avoid pivot
    // Correct indices: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    const correctIndices = [1, 0, 0, 0, 1, 0, 0, 0, 0, 0];
    for (let i = 0; i < 10; i++) {
      await expect(page.locator('#quiz-progress-text')).toHaveText(`Question ${i + 1} of 20`);
      const options = page.locator('.option-btn');
      await options.nth(correctIndices[i]).click();
      await page.waitForTimeout(1300); // wait for transition
    }

    // Now answer the 10 active speaking simulation questions (questions 11 to 20)
    // Select Option 2 ("I navigate seamlessly...") for high scores
    for (let i = 10; i < 20; i++) {
      await expect(page.locator('#quiz-progress-text')).toHaveText(`Question ${i + 1} of 20`);
      const options = page.locator('.option-btn');
      await options.nth(2).click();
      await page.waitForTimeout(1300); // wait for transition
    }

    // Now we should be on the results screen
    await expect(page.locator('#step-results')).toBeVisible();

    // Verify balanced communicator profile since we did perfectly on both
    const gapNotice = page.locator('#dynamic-gap-notice');
    await expect(gapNotice).toBeVisible();
    await expect(gapNotice).toContainText('Balanced Communicator Profile');
  });

  test('should trigger adaptive pivot when 2 questions are failed in first 6', async ({ page }) => {
    test.setTimeout(60000);

    await page.goto('http://localhost:8080/placement-quiz.html');

    // Click on English language option
    await page.click('text=🇬🇧 English');

    // Fail Question 1 (index 0) and Question 2 (index 1) intentionally
    // Q1 correct is 1 (click 2 instead), Q2 correct is 0 (click 2 instead)

    // Q1
    await expect(page.locator('#quiz-progress-text')).toHaveText('Question 1 of 20');
    await page.locator('.option-btn').nth(2).click();
    await page.waitForTimeout(1300);

    // Q2
    await expect(page.locator('#quiz-progress-text')).toHaveText('Question 2 of 20');
    await page.locator('.option-btn').nth(2).click();

    // An adaptive transition card should appear
    await page.waitForTimeout(1300);
    const container = page.locator('#question-container');
    await expect(container).toContainText('Adaptive Level Calibration');
    await expect(container).toContainText('Receptive baseline established');

    // Wait for the calibration transition timeout (3.5s + buffer)
    await page.waitForTimeout(4000);

    // Should skip directly to Question 11
    await expect(page.locator('#quiz-progress-text')).toHaveText('Question 11 of 20');

    // Complete the remaining 10 active speaking questions (11 to 20)
    for (let i = 10; i < 20; i++) {
      await expect(page.locator('#quiz-progress-text')).toHaveText(`Question ${i + 1} of 20`);
      const options = page.locator('.option-btn');
      await options.nth(0).click(); // choose first option (anxious/freeze)
      await page.waitForTimeout(1300);
    }

    // Now we should be on the results screen
    await expect(page.locator('#step-results')).toBeVisible();

    // Verify low passive vs active scores
    const breakdown = page.locator('#dynamic-breakdown');
    await expect(breakdown).toBeVisible();
    await expect(breakdown).toContainText('0 / 10'); // We got 0 correct out of 10
  });
});
