import { test, expect } from '@playwright/test';

test('Verify One URL Three Realities - Student Mode', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');
    await page.locator('#mp-gateway-code').fill('COSY-DEMO');
    await page.getByRole('button', { name: /Unlock/i }).click();
    await page.waitForURL(/portal\/student\/index.html/);
    await expect(page.locator('body')).toHaveClass(/mode-student/);
    await expect(page.locator('.nav-menu')).toContainText('Roadmap');
});

test('Verify One URL Three Realities - Teacher Mode', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');
    await page.locator('#mp-gateway-code').fill('TEACH-DEMO');
    await page.getByRole('button', { name: /Unlock/i }).click();
    await page.waitForURL(/portal\/teacher\/index.html/);
    await expect(page.locator('body')).toHaveClass(/mode-teacher/);
    await expect(page.locator('.nav-menu')).toContainText('Students');
});

test('Verify Practice Hub Loads', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');
    await expect(page.locator('.practice-header')).toBeVisible();
    await expect(page.locator('.qs-card').first()).toBeVisible();
});

test('Verify One URL Three Realities - Free Mode', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await expect(page.locator('body')).toHaveClass(/mode-free/);
    await expect(page.locator('#cosy-nav')).toContainText('Home');
});
