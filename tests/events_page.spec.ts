import { test, expect } from '@playwright/test';

test('Events page loads and shows guest view by default', async ({ page }) => {
    await page.goto('http://localhost:8080/events/index.html');
    await expect(page.locator('h1')).toContainText('Speaking Clubs');
    await expect(page.locator('.auth-zone')).toBeVisible();
    // Guest should see "Sign in to see club details"
    await expect(page.locator('text=Sign in to see club details').first()).toBeVisible();
});

test('Events page shows student content when logged in', async ({ page }) => {
    await page.goto('http://localhost:8080/events/index.html');
    // Simulate login via localStorage
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

    // Check if session info is now visible (was hidden for guest)
    await expect(page.locator('.session-info').first()).toBeVisible();
    await expect(page.locator('text=Session Vocabulary').first()).toBeVisible();
});
