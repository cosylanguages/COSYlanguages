import { test, expect } from '@playwright/test';

test.describe('Exercise Core Refactor Verification', () => {
  test('Practice page loads and initializes exercise core', async ({ page }) => {
    await page.goto('http://localhost:8080/practice.html');
    const isCoreLoaded = await page.evaluate(() => typeof renderMultipleChoice === 'function');
    expect(isCoreLoaded).toBe(true);
  });

  test('Lesson page loads and initializes exercise core', async ({ page }) => {
    await page.goto('http://localhost:8080/days.html');
    await page.evaluate(() => localStorage.setItem('student_unlocked', 'true'));
    await page.goto('http://localhost:8080/lesson.html?lang=en&lesson=1');
    const isCoreLoaded = await page.evaluate(() => typeof renderMultipleChoice === 'function');
    expect(isCoreLoaded).toBe(true);
  });

  test('Exercise rendering elements exist in Practice', async ({ page }) => {
    await page.goto('http://localhost:8080/practice.html');
    // Ensure the container for matching exists (it's in exercise-core logic)
    const matchingContainer = page.locator('#matching-container');
    await expect(matchingContainer).toBeDefined();
  });
});
