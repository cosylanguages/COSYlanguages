import { test, expect } from '@playwright/test';

test.describe('Pronunciation Reference & Dashboard Audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080/days.html');
    await page.evaluate(() => {
      localStorage.setItem('student_unlocked', 'true');
      localStorage.setItem('student_course_code', 'COSY-EN-A1-GEN');
    });
    await page.reload();
  });

  test('Pronunciation engine loads and renders rules', async ({ page }) => {
    // Navigate to reference
    await page.goto('http://localhost:8080/pronunciation-reference.html?lang=en');

    // Check title (now dynamic)
    await expect(page.locator('.section-title')).toContainText('English');

    // Check for cards (each rule is a card)
    const cards = page.locator('.card');
    await expect(cards.first()).toBeVisible();

    // Check table rendering (IPA table)
    const gtable = page.locator('.gtable');
    await expect(gtable.first()).toBeVisible();
  });

  test('Student dashboard pronunciation tab shows content', async ({ page }) => {
    await page.goto('http://localhost:8080/days.html');

    // Wait for curriculum to load - in days.js it uses .lesson class
    await page.waitForSelector('.lesson');

    // Click a lesson card (first one)
    await page.locator('.lesson').first().click();

    // Click Pronunciation tab
    // The tab buttons have data-target="pr-X" where X is the day number
    const pronTab = page.locator('.tab-btn[data-target^="pr-"]').first();
    await pronTab.click();

    // Get the target ID from the button
    const targetId = await pronTab.getAttribute('data-target');

    // Check for IPA content or minimal pairs table INSIDE the active panel
    const activePanel = page.locator(`#${targetId}`);
    const ipaContent = activePanel.locator('.ipa-grid, .alpha-grid, .gtable');
    await expect(ipaContent.first()).toBeVisible();

    // Check for "Full Guide" link inside the active panel to avoid ambiguity
    const fullGuideLink = activePanel.locator('a[data-translate-key="full_pronunciation_guide"]');
    await expect(fullGuideLink).toBeVisible();
  });

  test('Practice module generates pronunciation exercises', async ({ page }) => {
    await page.goto('http://localhost:8080/practice.html?lang=en&cat=pronunciation&level=starter');

    // Check if task is generated (it might take a moment to load data)
    const taskContainer = page.locator('#question-card');
    await expect(taskContainer).toBeVisible({ timeout: 15000 });

    // Check for instructions
    const instruction = page.locator('#task-instruction');
    await expect(instruction).not.toBeEmpty();
    await expect(instruction).toBeVisible();
  });
});
