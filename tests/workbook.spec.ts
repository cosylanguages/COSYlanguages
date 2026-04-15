import { test, expect } from '@playwright/test';

test('Verify Workbook page', async ({ page }) => {
    await page.goto('http://localhost:8080/workbook.html');
    // It should redirect to days.html because student_unlocked is not set
    await expect(page).toHaveURL(/.*days.html/);

    // Now set the localStorage and try again
    await page.goto('http://localhost:8080/days.html');
    await page.evaluate(() => {
        localStorage.setItem('student_unlocked', 'true');
        localStorage.setItem('student_course_code', 'COSY-EN-A1-GEN');
    });
    await page.goto('http://localhost:8080/workbook.html');
    await expect(page).toHaveURL(/.*workbook.html/);

    // Check if topics are rendered
    const topics = await page.locator('.topic-card');
    await expect(topics).toHaveCount(2); // en-tobe and en-present are a1

    // Check if grammar snapshot works
    await page.click('button:has-text("📊 Table")');
    const snapTable = await page.locator('.g-snap-wrap.show');
    await expect(snapTable).toBeVisible();

    // Check if homework is rendered
    const hwTasks = await page.locator('.hw-task');
    await expect(hwTasks).toHaveCount(6);
});
