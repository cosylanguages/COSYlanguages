import { test, expect } from '@playwright/test';

test.describe('Vocabulary Reference Integration', () => {
    test.beforeEach(async ({ page }) => {
        // Unlock student area
        await page.goto('http://localhost:8080/days.html');
        await page.evaluate(() => {
            localStorage.setItem('student_unlocked', 'true');
        });
    });

    test('should load verbs from starter/verbs.js', async ({ page }) => {
        await page.goto('http://localhost:8080/vocabulary/en.html');

        // Wait for dynamic vocab to init
        await page.waitForFunction(() => window.vocabularyData && window.vocabularyData["en"]);

        // Check if "wake up" (a verb from starter/verbs.js) is in the table
        // Note: we might need to search for it if it's not on the first page/level
        await page.fill('#global-search', 'wake up');

        // Use more specific locator to avoid strict mode violations (e.g. "wake up" appearing in examples of other words)
        const wordRow = page.locator('tr').filter({ has: page.locator('.rt-word', { hasText: /^wake up$/i }) });
        await expect(wordRow).toBeVisible();

        const posText = await wordRow.locator('.rt-pos').textContent();
        expect(posText).toBe('verb');
    });

    test('should load adjectives from starter/adjectives.js', async ({ page }) => {
        await page.goto('http://localhost:8080/vocabulary/en.html');

        await page.fill('#global-search', 'tall');

        const wordRow = page.locator('tr').filter({ has: page.locator('.rt-word', { hasText: /^tall$/i }) });
        await expect(wordRow).toBeVisible();

        const posText = await wordRow.locator('.rt-pos').textContent();
        expect(posText).toBe('adjective');
    });
});
