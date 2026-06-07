import { test, expect } from '@playwright/test';

test('Verify One URL Three Realities - Student Mode', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');
    await page.evaluate(() => localStorage.setItem('cosy_user_lang', 'en'));
    await page.reload();

    await page.locator('#mp-gateway-code').fill('COSY-DEMO');
    await page.getByRole('button', { name: /Unlock/i }).click();
    await page.waitForURL(/portal\/student\//);
    await expect(page.locator('body')).toHaveClass(/mode-student/);

    // Use first() to avoid strict mode violation if multiple elements have the same key
    const roadmapItem = page.locator('[data-translate-key="nav_roadmap"]').first();
    await expect(roadmapItem).toBeVisible();
});

test('Verify One URL Three Realities - Teacher Mode', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');
    await page.evaluate(() => localStorage.setItem('cosy_user_lang', 'en'));
    await page.reload();

    await page.locator('#mp-gateway-code').fill('TEACH-DEMO');
    await page.getByRole('button', { name: /Unlock/i }).click();
    await page.waitForURL(/portal\/teacher\//);
    await expect(page.locator('body')).toHaveClass(/mode-teacher/);

    const studentsItem = page.locator('[data-translate-key="nav_students"]').first();
    await expect(studentsItem).toBeVisible();
});

test('Verify Practice Hub Loads', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');
    await expect(page.locator('.dash-hero')).toBeVisible();
    await expect(page.locator('.qs-card').first()).toBeVisible();
});

test('Verify One URL Three Realities - Free Mode', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');
    await page.evaluate(() => {
        localStorage.clear();
        localStorage.setItem('cosy_user_lang', 'en');
    });
    await page.reload();
    await expect(page.locator('body')).toHaveClass(/mode-free/);

    const homeItem = page.locator('[data-translate-key="nav_home"]').first();
    await expect(homeItem).toBeVisible();
});
