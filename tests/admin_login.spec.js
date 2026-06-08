import { test, expect } from '@playwright/test';

test('Admin login with ARTPOP195430', async ({ page }) => {
    // Navigate to the portal index page
    await page.goto('http://localhost:8080/portal/index.html');

    // Wait for the gate to be visible
    const gate = page.locator('#gate');
    await expect(gate).toBeVisible();

    // Enter the admin code
    const studentCodeInput = page.locator('#mp-gateway-code');
    await studentCodeInput.fill('ARTPOP195430');
    // Button text is "Unlock →"
    await page.click('button:has-text("Unlock →")');

    // Check if the area is visible
    const area = page.locator('#area');
    await expect(area).toBeVisible();

    // Verify Admin specific UI elements
    const godModeTitle = page.locator('div:has-text("God Mode")').first();
    await expect(godModeTitle).toBeVisible();

    // Verify current mode is admin via body class
    const bodyClass = await page.evaluate(() => document.body.className);
    expect(bodyClass).toContain('mode-admin');
});
