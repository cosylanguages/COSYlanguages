import { test, expect } from '@playwright/test';

test('Events page loads and shows guest view by default', async ({ page }) => {
    await page.goto('http://localhost:8080/events/');
    await expect(page.locator('h1')).toContainText('Live events');
    await expect(page.locator('.auth-zone')).toBeVisible();
    // Guest should see "Sign in to see club details"
    await expect(page.locator('text=Sign in to see club details').first()).toBeVisible();
});

test('Events page shows student content when logged in and navigating to club pages', async ({ page }) => {
    await page.goto('http://localhost:8080/events/');
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

    // In the new architecture, session info is on subpages.
    // Click on the first club's detail button
    await page.locator('text=View Club & History').first().click();

    // Check if we are on a club page (server might strip .html extension)
    await expect(page).toHaveURL(/.*keeping-up-with-science.*/);

    // Check if session info is now visible (was hidden for guest)
    // Using the new timeline structure/session info elements
    await expect(page.locator('.session-info').first()).toBeVisible();
    await expect(page.locator('text=Current Session Vocabulary').first()).toBeVisible();
});
