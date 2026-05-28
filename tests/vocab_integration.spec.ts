import { test, expect } from '@playwright/test';

test.describe('Vocabulary Reference Integration', () => {
    test.beforeEach(async ({ page }) => {
        // Unlock student area
        await page.goto('http://localhost:8080/portal/index.html');
        await page.evaluate(() => {
            localStorage.setItem('student_unlocked', 'true');
        });
    });

    test('should load recently added words from starter vocabulary', async ({ page }) => {
        await page.goto('http://localhost:8080/portal/student/vocabulary-reference.html?lang=en');

        // Wait for dynamic vocab to init
        await page.waitForFunction(() => window.vocabularyData && window.vocabularyData["en"]);

        // Check if "ocean" (a recently added word) is in the table
        await page.fill('#global-search', 'ocean');

        const wordRow = page.locator('tr').filter({ has: page.locator('.rt-word', { hasText: /^ocean$/i }) });
        await expect(wordRow).toBeVisible();

        const etymText = await wordRow.locator('.rt-etymology').textContent();
        expect(etymText).toContain('Okeanos');
    });
});
