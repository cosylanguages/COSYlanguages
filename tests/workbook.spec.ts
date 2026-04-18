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

    // Check if topics are rendered (en-a1 has 2 topics)
    const topics = await page.locator('.topic-section');
    await expect(topics).toHaveCount(2);

    // Check if grammar snapshot table is present (it is rendered by default now, not hidden in modal)
    const snapTable = await page.locator('.wb-table');
    await expect(snapTable.first()).toBeVisible();

    // Check if homework is rendered (en-a1 has 2 homework tasks)
    const hwItems = await page.locator('#panel-homework-body input[type="checkbox"]');
    await expect(hwItems).toHaveCount(2);

    // Check Print Sheets page directly
    await page.goto('http://localhost:8080/print-grammar.html');
    await expect(page).toHaveURL(/.*print-grammar.html/);

    // Verify student auto-filtering in print sheets
    const visiblePages = await page.locator('.print-page.visible');
    // For COSY-EN-A1-GEN, it should show English A1 page
    await expect(visiblePages).toHaveCount(1);
    await expect(visiblePages.first()).toHaveAttribute('data-lang', 'en');

    // Check Pronunciation Guide link
    await page.goto('http://localhost:8080/workbook.html');
    await page.click('button[data-panel="phonetics"]');

    // Wait for navigation after click
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('a:has-text("Open Guide →")')
    ]);
    await expect(popup).toHaveURL(/.*pronunciation-reference.html#en-a1/);

    // Verify student auto-filtering in pronunciation guide
    const visibleBlocks = await popup.locator('.lang-block.show');
    await expect(visibleBlocks).toHaveCount(1);
    await expect(visibleBlocks.first()).toHaveAttribute('data-lang', 'en');
    await popup.close();
});
