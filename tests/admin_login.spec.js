import { test, expect } from '@playwright/test';

test('Admin login with ARTPOP195430', async ({ page }) => {
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

    // Navigate to the portal
    await page.goto('http://localhost:8080/portal/index.html');

    // Wait for the gate/login screen
    const studentCodeInput = page.locator('#student-code');
    await studentCodeInput.waitFor({ state: 'visible' });

    // Enter the admin code
    await studentCodeInput.fill('ARTPOP195430');
    await page.click('button:has-text("Unlock My Path")');

    // Check if the area is visible
    const area = page.locator('#area');
    await area.waitFor({ state: 'visible' });

    // Verify admin navigation items
    await expect(page.locator('text=God Panel').first()).toBeVisible();
    await expect(page.locator('text=Curricula').first()).toBeVisible();

    // Verify the admin dashboard content
    await expect(page.locator('text=God Mode Dashboard 👑')).toBeVisible();

    // Check if students are loaded (at least COSY-DEMO from students.json)
    await page.waitForSelector('.student-admin-card');
    await expect(page.locator('.student-admin-card')).toContainText('Alex');
});
