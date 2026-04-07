import { test, expect } from '@playwright/test';

test('Elements marked as hidden should have display: none', async ({ page }) => {
    await page.goto('http://localhost:8080/practice.html');

    // Select a language to ensure everything is initialized
    await page.click('.lang-selection-card[data-value="en"]');

    const practiceSection = page.locator('#practice-section');
    // Initially it should have the 'hidden' class and display: none
    await expect(practiceSection).toHaveClass(/hidden/);

    // Check computed style
    const display = await practiceSection.evaluate((el) => window.getComputedStyle(el).display);
    console.log('Practice Section display:', display);
    expect(display).toBe('none');
});
