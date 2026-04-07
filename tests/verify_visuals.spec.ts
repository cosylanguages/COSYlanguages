import { test, expect } from '@playwright/test';

test('Capture visual state of practice tasks and definitions', async ({ page }) => {
    // Navigate to practice page
    await page.goto('http://localhost:8080/practice.html?lang=en&level=starter&cat=vocab&theme=all');

    // Wait for auto-start or click start if needed
    const startBtn = page.locator('#start-btn');
    if (await startBtn.isVisible()) {
        await startBtn.click();
    }

    // Wait for practice section
    await expect(page.locator('#practice-section')).not.toHaveClass(/hidden/);

    // 1. Capture typical practice task (Multiple Choice or Scramble)
    await page.waitForTimeout(1000); // Wait for animations
    await page.screenshot({ path: 'visual-task-screenshot.png' });

    // 2. Open Word Definition modal
    const wordDisplay = page.locator('#word-display');
    await wordDisplay.click();

    // Wait for modal
    const modal = page.locator('#definition-modal');
    await expect(modal).not.toHaveClass(/hidden/);
    await page.waitForTimeout(500); // Wait for modal animation

    // Capture modal
    await page.screenshot({ path: 'visual-definition-modal.png' });

    // 3. Close modal and try another task type (by skipping)
    await page.click('#close-definition-btn');
    await expect(modal).toHaveClass(/hidden/);

    // Skip to next word to see if we get a different type
    await page.click('#exit-practice-btn'); // Go back to setup
    // Start again with different settings maybe?
    // Or just skip if the word has a "next" or skipping logic.
    // Practice.js doesn't have a skip button, only "Next Word" after correct answer.

    console.log('Screenshots captured: visual-task-screenshot.png, visual-definition-modal.png');
});
