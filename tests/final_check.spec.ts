import { test, expect } from '@playwright/test';
import path from 'path';

const fileUrl = (filename) => 'file://' + path.resolve(filename);

test('Practice Mode filtering by level and theme', async ({ page }) => {
    await page.goto(fileUrl('practice.html'));

    // Select Language
    await page.click('.lang-selection-card[data-value="en"]');

    // Check Category Radio
    await expect(page.locator('#cat-vocab')).toBeChecked();

    // Select Level and Theme
    await page.selectOption('#practice-level', 'elementary');
    await page.selectOption('#practice-theme', 'food_nutrition_A2');

    // Start Practice
    await page.click('#start-btn');

    // Verify Practice Section is visible
    await expect(page.locator('#practice-section')).toBeVisible();
    await expect(page.locator('#setup-section')).not.toBeVisible();
});

test('Student Area access and day selection', async ({ page }) => {
    await page.goto(fileUrl('days.html'));

    // Gate should be visible
    await expect(page.locator('#unlock-gate')).toBeVisible();

    // Enter correct code
    await page.fill('#student-code', 'COSYSTUDENT2025');
    await page.click('#unlock-btn');

    // Content should now be visible
    await expect(page.locator('#curriculum-content')).toBeVisible();
    await expect(page.locator('#unlock-gate')).not.toBeVisible();

    // Select Day 2 and Start
    await page.click('input[name="day-selection"][value="2"] + span');
    await page.click('#start-day-btn');

    // Should redirect to lesson.html with params
    await expect(page).toHaveURL(/lesson.html.*lesson=2/);
});

test('Game launch with new theme filters', async ({ page }) => {
    await page.goto(fileUrl('events.html'));

    // Show Games
    await page.click('#toggle-games-btn');

    // Open Charades (Action Hero)
    await page.click('#open-charades-btn');
    await expect(page.locator('#charades-modal')).toBeVisible();

    // Select language first in modal (important!)
    await page.selectOption('#charades-lang', 'en');
    // Select theme in modal
    await page.selectOption('#charades-theme', 'all');
    await page.selectOption('#charades-level', 'all');
    // Start game
    await page.click('#start-charades-game-btn');

    // Gameplay area should appear
    await expect(page.locator('#charades-gameplay')).toBeVisible();
});
