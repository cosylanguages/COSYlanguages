import { test, expect } from '@playwright/test';

const CLUB_PAGES = [
    'keeping-up-with-science.html',
    'lets-celebrate.html',
    'the-greatest-quotes.html',
    'mind-matters.html',
    'my-life-with-without.html',
    'debatable-relatable.html'
];

test.describe('Speaking Club Dedicated Pages', () => {

    CLUB_PAGES.forEach(pageName => {
        test(`${pageName} loads and shows guest view by default`, async ({ page }) => {
            await page.goto(`http://localhost:8080/events/${pageName}`);
            await expect(page.locator('.auth-zone')).toBeVisible();
            // Use first() to avoid strict mode violation if multiple elements have the data-mode
            await expect(page.locator('[data-mode="student teacher admin"]').first()).not.toBeVisible();
        });

        test(`${pageName} shows student content when logged in`, async ({ page }) => {
            await page.goto(`http://localhost:8080/events/${pageName}`);
            await page.evaluate(() => {
                localStorage.setItem('cosy_mode', 'student');
                localStorage.setItem('cosy_student', JSON.stringify({
                    code: 'COSY-DEMO',
                    nickname: 'Alex',
                    lang: 'FR',
                    level: 'A1'
                }));
            });
            await page.reload();

            await expect(page.locator('.auth-zone')).not.toBeVisible();
            // Check visibility of the main content block
            await expect(page.locator('.club-main [data-mode="student teacher admin"]')).toBeVisible();

            // Check if dictionary FAB is visible
            await expect(page.locator('#dict-fab')).toBeVisible();
        });
    });

    test('Science page specific content visibility', async ({ page }) => {
        await page.goto('http://localhost:8080/events/keeping-up-with-science.html');
        await page.evaluate(() => {
            localStorage.setItem('cosy_mode', 'student');
            localStorage.setItem('cosy_student', JSON.stringify({ code: 'COSY-DEMO', lang: 'EN' }));
        });
        await page.reload();

        await expect(page.locator('text=Current Session Vocabulary')).toBeVisible();
        await expect(page.locator('text=Past Sessions')).toBeVisible();

        // Test toggle
        const historyHeader = page.locator('.history-session-header').first();
        const historyBody = page.locator('.history-session-body').first();
        await expect(historyBody).not.toBeVisible();
        await historyHeader.click();
        await expect(historyBody).toBeVisible();
    });
});
