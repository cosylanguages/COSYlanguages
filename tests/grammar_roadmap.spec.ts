import { test, expect } from '@playwright/test';

test.describe('Grammar Roadmap Navigation', () => {
    test('Grammar Reference redirects if not unlocked', async ({ page }) => {
        await page.goto('http://localhost:8080/portal/student/grammar-reference.html');
        await page.evaluate(() => {
            localStorage.removeItem('student_unlocked');
            localStorage.removeItem('cosy_mode');
        });
        await page.reload();
        await expect(page).toHaveURL(/index\.html/);
    });

    test('Grammar Hub loads when unlocked', async ({ page }) => {
        await page.goto('http://localhost:8080/portal/index.html');
        await page.evaluate(() => {
            localStorage.setItem('cosy_mode', 'student');
            localStorage.setItem('student_unlocked', 'true');
        });
        await page.goto('http://localhost:8080/portal/student/grammar-reference.html');
        await expect(page.locator('h1')).toBeVisible();
    });
});
