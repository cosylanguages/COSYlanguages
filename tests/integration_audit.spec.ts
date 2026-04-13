import { test, expect } from '@playwright/test';

test.describe('Private Area Integration', () => {
  test.beforeEach(async ({ page }) => {
    // Unlock student area
    await page.goto('http://localhost:8080/days.html');
    await page.evaluate(() => {
      localStorage.setItem('student_unlocked', 'true');
      localStorage.setItem('cosy_total_points', '100');
    });
    await page.reload();
  });

  test('Roadmap links to Vocabulary with search', async ({ page }) => {
    await page.goto('http://localhost:8080/curriculum/en/a1.html');

    // Check if score is loaded from localStorage
    const scoreVal = await page.textContent('#score-num');
    expect(scoreVal?.trim()).toBe('100');

    // Expand Lesson 1
    await page.click('#lesson-A1-01 .lc-header');

    // Click a vocab pill (e.g., 'wake up' in Lesson 1)
    const vocabPill = page.locator('a.vp').filter({ hasText: 'wake up' }).first();
    await expect(vocabPill).toBeVisible();

    // Click and check if search is triggered in vocabulary page
    await vocabPill.click();
    await page.waitForURL(/vocabulary\/en\.html\?search=wake%20up/);

    // Check if the search input has the correct value
    const searchInput = page.locator('#global-search');
    await expect(searchInput).toHaveValue('wake up');

    // Let's check 'job' instead which IS in the hardcoded VOCAB for the filtered check.
    await page.goto('http://localhost:8080/curriculum/en/a1.html');
    await page.click('#lesson-A1-02 .lc-header');
    const jobPill = page.locator('a.vp').filter({ hasText: 'job' }).first();
    await jobPill.click();
    await page.waitForURL(/vocabulary\/en\.html\?search=job/);
    await expect(page.locator('#global-search')).toHaveValue('job');
    // Filter to exactly "job" to avoid ambiguity with "Steve Jobs" etc.
    await expect(page.locator('.rt-word', { hasText: /^job$/ })).toBeVisible();
  });

  test('Roadmap score updates global points', async ({ page }) => {
    await page.goto('http://localhost:8080/curriculum/en/a1.html');

    // Find a 'Mark done' button and click it
    // Using first button in header
    const doneBtn = page.locator('.lc-done-btn').first();
    await doneBtn.click();

    // Score should increase by 20 (from 100 to 120)
    await expect(page.locator('#score-num')).toHaveText('120');

    // Check localStorage
    const storedPoints = await page.evaluate(() => localStorage.getItem('cosy_total_points'));
    expect(storedPoints).toBe('120');
  });
});
