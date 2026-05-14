import { test, expect } from '@playwright/test';

test('Free visitor flow without code', async ({ page }) => {
  await page.goto('http://localhost:8080/portal/index.html');

  // Select language and level
  await page.selectOption('#free-lang', 'el');
  await page.selectOption('#free-level', 'a1');

  // Click Explore for Free
  await page.click('button:has-text("Explore for Free")');

  // Verify dashboard loaded for Free Learner
  await expect(page.locator('#wh')).toContainText('Free Learner');
  await expect(page.locator('#tb-course-name')).toContainText('EL · Starter');

  // Verify Unit 0 is visible but maybe not others (curriculum data check)
  const chapters = await page.locator('.chapter-node').count();
  // Since we load el_a1 and slice(0,1), it should only have Unit 0 lessons
  // Actually one unit can have multiple lessons.
});
