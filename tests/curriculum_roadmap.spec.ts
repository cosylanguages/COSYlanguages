import { test, expect } from '@playwright/test';

test.describe('A1 Curriculum Roadmap', () => {
    test.beforeEach(async ({ page }) => {
        // Clear storage to ensure locked state
        await page.goto('http://localhost:8080/days.html');
        await page.evaluate(() => localStorage.clear());
    });

    test('Accessing A1 English roadmap after unlock', async ({ page }) => {
        // Unlock first
        await page.locator('#student-code').fill('COSYSTUDENT2025');
        await page.locator('#unlock-btn').click();

        // Ensure language is EN
        await page.evaluate(() => {
            localStorage.setItem('language', 'en');
            if (window.setLanguage) window.setLanguage('en');
        });

        // Check if A1 roadmap section is visible
        await expect(page.locator('#en-a1-roadmap')).toBeVisible();

        // Click open roadmap
        await page.locator('#open-a1-roadmap-btn').click();
        await expect(page).toHaveURL(/curriculum\/en\/a1.html/);
        // Use a more flexible text match
        await expect(page.locator('body')).toContainText(/A1.*Beginner Curriculum Roadmap/);
    });

    test('A1 roadmap redirects if not unlocked', async ({ page }) => {
        await page.goto('http://localhost:8080/curriculum/en/a1.html');
        // Wait a bit for the script to execute
        await page.waitForURL(/days.html/, { timeout: 10000 });
        await expect(page).toHaveURL(/days.html/);
    });

    test('A1 roadmap not visible for other languages', async ({ page }) => {
        // Set language to FR BEFORE unlocking
        await page.evaluate(() => {
            localStorage.setItem('language', 'fr');
            if (window.setLanguage) window.setLanguage('fr');
        });

        // Unlock
        await page.locator('#student-code').fill('COSYSTUDENT2025');
        await page.locator('#unlock-btn').click();

        // Check if A1 roadmap section is hidden
        await expect(page.locator('#en-a1-roadmap')).toBeHidden();
    });
});
