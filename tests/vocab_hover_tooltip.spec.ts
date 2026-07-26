import { test, expect } from '@playwright/test';

test.describe('Vocabulary Hover Tooltip Feature', () => {
  test('should display tooltip on hover and allow adding to notebook', async ({ page }) => {
    // Go to Jim Kwik Quote session page on the local server
    await page.goto('http://localhost:8080/events/sessions/the-greatest-quotes/jim-kwik-quote.html');

    // Tooltip should not be visible initially
    const tooltip = page.locator('#vocab-hover-tooltip');
    await expect(tooltip).not.toBeVisible();

    // Find the trigger for the word 'Criticism' (usually inside discussion questions or prompts)
    const trigger = page.locator('.vocab-hover-trigger', { hasText: /^Criticism$/i }).first();
    await expect(trigger).toBeVisible();

    // Hover over the trigger
    await trigger.hover();

    // Tooltip should now be visible
    await expect(tooltip).toBeVisible();

    // Verify tooltip contents
    const tooltipWord = tooltip.locator('.vht-word');
    await expect(tooltipWord).toHaveText('Criticism');

    const tooltipDef = tooltip.locator('.vht-def');
    await expect(tooltipDef).toContainText('feedback');

    // Add to Notebook button should be visible
    const addBtn = tooltip.locator('.vht-add-btn');
    await expect(addBtn).toBeVisible();
    await expect(addBtn).toHaveText('Add to Notebook 📓');

    // Click the button to add to notebook
    await addBtn.click();

    // It should update to saved state
    await expect(addBtn).toHaveClass(/saved/);
    await expect(addBtn).toHaveText('✓ Saved');

    // Move cursor away to close the tooltip
    await page.mouse.move(0, 0);

    // Wait for fadeout timeout (300ms + some buffer)
    await page.waitForTimeout(600);
    await expect(tooltip).not.toBeVisible();
  });
});
