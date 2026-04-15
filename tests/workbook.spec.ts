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

    // Check Print Sheets page directly (it has target="_blank" in workbook.html)
    await page.goto('http://localhost:8080/print-grammar.html');
    await expect(page).toHaveURL(/.*print-grammar.html/);

    // Verify student auto-filtering in print sheets
    const visiblePages = await page.locator('.print-page.visible');
    // For COSY-EN-A1-GEN, it should show English A1 page
    await expect(visiblePages).toHaveCount(1);
    await expect(visiblePages.first()).toHaveAttribute('data-lang', 'en');

    // Check Pronunciation Guide link
    await page.goto('http://localhost:8080/workbook.html');
    await page.click('.quick-card:has-text("Pronunciation Guide")');
    await expect(page).toHaveURL(/.*pronunciation-reference.html/);

    // Verify student auto-filtering in pronunciation guide
    const visibleBlocks = await page.locator('.lang-block.show');
    await expect(visibleBlocks).toHaveCount(1);
    await expect(visibleBlocks.first()).toHaveAttribute('data-lang', 'en');
});
