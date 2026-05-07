
import { test, expect } from '@playwright/test';

test('Verify One URL Three Realities - Student Mode', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');

    // Auth
    await page.fill('#student-code', 'COSY-EN-A1-GEN');
    await page.click('button:has-text("Unlock My Path")');

    // Wait for reload and mode detection
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500); // Wait for the 50ms init timeout in days.js

    // Verify Student UI
    await expect(page.locator('body')).toHaveClass(/mode-student/);
    await expect(page.locator('.nav-menu')).toContainText('Roadmap');
    await expect(page.locator('#panel-roadmap')).toBeVisible();
    await expect(page.locator('#panel-teacher')).not.toBeVisible();

    await page.screenshot({ path: 'verify_student_mode.png' });
});

test('Verify One URL Three Realities - Teacher Mode', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');

    // Auth (Mocking unlock via localStorage since gate might be student-centric)
    await page.evaluate(() => {
        localStorage.setItem('cosy_user_code', 'TEACH-ADMIN');
        window.location.reload();
    });

    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    // Verify Teacher UI
    await expect(page.locator('body')).toHaveClass(/mode-teacher/);
    await expect(page.locator('.nav-menu')).toContainText('Classroom');
    await expect(page.locator('#panel-teacher')).toBeVisible();
    await expect(page.locator('#panel-roadmap')).not.toBeVisible();

    await page.screenshot({ path: 'verify_teacher_mode.png' });
});

test('Verify Practice Engine Dynamic Data', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');

    // Start English Vocab
    await page.click('.qs-card:has-text("English · Vocab")');

    // Wait for practice section
    await expect(page.locator('#practice-section')).toBeVisible();

    // Check if question is loaded (allow for some network delay)
    await expect(page.locator('#word-display')).not.toBeEmpty({ timeout: 10000 });

    await page.screenshot({ path: 'verify_practice_engine.png' });
});

test('Verify Lesson Completion and Progress', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');

    // Auth
    await page.fill('#student-code', 'COSY-EN-A1-GEN');
    await page.click('button:has-text("Unlock My Path")');
    await page.waitForTimeout(500);

    // Mock completion of Day 1 in localStorage
    await page.evaluate(() => {
        const code = 'COSY-EN-A1-GEN';
        const prog = { [code]: [1] };
        localStorage.setItem('cosy_progress', JSON.stringify(prog));
        window.location.reload();
    });

    await page.waitForTimeout(500);

    // Check if Day 1 is marked 'done' on roadmap (use filter to handle multi-digit matches)
    const day1Node = page.locator('.chapter-node').filter({ hasText: /^1$/ });
    await expect(day1Node).toHaveClass(/done/);

    // Check if Stats updated
    await expect(page.locator('#done-val')).toHaveText('1');

    await page.screenshot({ path: 'verify_progress.png' });
});

test('Verify One URL Three Realities - Free Mode', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    // Auth - Ensure clean state
    await page.evaluate(() => localStorage.clear());
    await page.reload();

    // Verify Free UI
    await expect(page.locator('body')).toHaveClass(/mode-free/);
    await expect(page.locator('nav#main-nav')).toContainText('How it works');
    await expect(page.locator('nav#main-nav')).toContainText('Courses');

    await page.screenshot({ path: 'verify_free_mode.png' });
});
