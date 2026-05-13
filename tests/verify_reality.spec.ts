import { test, expect } from '@playwright/test';

test('Verify One URL Three Realities - Student Mode', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');
    await page.evaluate(async () => {
        await window.COSY.unlock('COSY-DEMO');
    });
    await page.waitForTimeout(2000);
    await expect(page.locator('body')).toHaveClass(/mode-student/);
    await expect(page.locator('.nav-menu')).toContainText('Roadmap');
});

test('Verify One URL Three Realities - Teacher Mode', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');
    await page.evaluate(async () => {
        await window.COSY.unlock('TEACH-DEMO');
    });
    await page.waitForTimeout(2000);
    await expect(page.locator('body')).toHaveClass(/mode-teacher/);
    await expect(page.locator('.nav-menu')).toContainText('Classroom');
});

test('Verify Practice Hub Loads', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');
    await expect(page.locator('.dash-hero')).toBeVisible();
    await expect(page.locator('.qs-card').first()).toBeVisible();
});

test('Verify One URL Three Realities - Free Mode', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await expect(page.locator('body')).toHaveClass(/mode-free/);
    await expect(page.locator('#cosy-nav')).toContainText('Home');
});
