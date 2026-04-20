import { test, expect } from '@playwright/test';

test('Verify rich grammar rendering in Student Dashboard', async ({ page }) => {
    // 1. Setup session for English A1
    await page.goto('http://localhost:8080/index.html');
    await page.evaluate(() => {
        localStorage.clear();
        localStorage.setItem('student_unlocked', 'true');
        localStorage.setItem('student_course_code', 'COSY-EN-A1-GEN');
    });

    // 2. Go to dashboard
    await page.goto('http://localhost:8080/days.html');

    // 3. Open Lesson 1 (which has rich grammar now)
    const lesson1Head = page.locator('#day-1 .l-head');
    await expect(lesson1Head).toBeVisible({ timeout: 10000 });
    await lesson1Head.click();

    // 4. Switch to Grammar tab
    const grammarTabBtn = page.locator('#day-1 .tab-btn[data-target^="gr-"]');
    await grammarTabBtn.click();

    // 5. Verify rich grammar components
    const gramPoint = page.locator('#day-1 .gram-point').first();
    await expect(gramPoint).toBeVisible();

    // Check for title and tag
    await expect(gramPoint.locator('.gram-heading')).toContainText('Verb "to be": Positive Forms');
    await expect(gramPoint.locator('.gram-tag')).toContainText('A1 Starter');

    // Check for custom table (fullTable)
    const extTable = gramPoint.locator('.gram-ext-table');
    await expect(extTable).toBeVisible();
    await expect(extTable.locator('tr').first()).toContainText('Subject');
    await expect(extTable.locator('tr').nth(1)).toContainText('I am');

    // Check for rules and tips
    await expect(gramPoint.locator('.gram-rule')).toBeVisible();
    await expect(gramPoint.locator('.gram-tip')).toBeVisible();

    // 6. Open Lesson 6 (Day 1 of Unit 1) - also has rich grammar and extension
    // AllLessons is flat list. Unit 0 has 5 lessons. Unit 1 starts at Day 6.
    const lesson6Head = page.locator('#day-6 .l-head');
    await expect(lesson6Head).toBeVisible();
    await lesson6Head.click();

    const grammarTabBtn6 = page.locator('#day-6 .tab-btn[data-target^="gr-"]');
    await grammarTabBtn6.click();

    // Check for extension
    const extensionBox = page.locator('#day-6 .gram-ext');
    await expect(extensionBox).toBeVisible();
    await expect(extensionBox).toContainText('ADVANCED EXTENSION');
    await expect(extensionBox).toContainText('Frequency adverbs');

    console.log('Rich grammar rendering verified successfully!');
});
