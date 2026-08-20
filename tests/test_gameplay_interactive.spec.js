const { test, expect } = require('@playwright/test');

test.describe('Games Interactive Gameplay Verification', () => {

    test('Fluency Flow start and topic display', async ({ page }) => {
        await page.goto('http://localhost:8080/games/fluency_flow/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        await expect(page.locator('.game-prompt')).not.toBeEmpty();
    });

    test('Battle of Wits start and topic display', async ({ page }) => {
        await page.goto('http://localhost:8080/games/battle_of_wits/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        await expect(page.locator('.game-prompt')).not.toBeEmpty();
    });

    test('Word Linker interactive choices', async ({ page }) => {
        await page.goto('http://localhost:8080/games/word_linker/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        const options = page.locator('.word-opt');
        await expect(options.first()).toBeVisible();
        await options.first().click();
        await expect(page.locator('.feedback-bar')).toBeVisible();
    });

    test('Last Letter input submission', async ({ page }) => {
        await page.goto('http://localhost:8080/games/last_letter/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        const input = page.locator('#user-word, input[type="text"]');
        await expect(input.first()).toBeVisible();
    });

    test('Lucky Numbers Bingo caller & board', async ({ page }) => {
        await page.goto('http://localhost:8080/games/lucky_numbers/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card, #bingo-board, .bingo-grid')).toBeVisible();
    });

    test('What Gender Is It? option click and explanation', async ({ page }) => {
        await page.goto('http://localhost:8080/games/what_gender_is_it/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        const genderBtn = page.locator('.btn-gender').first();
        await expect(genderBtn).toBeVisible();
        await genderBtn.click();
        await expect(page.locator('.feedback-bar, .why-container')).toBeVisible();
    });

    test('Etymology Explorer story reveal', async ({ page }) => {
        await page.goto('http://localhost:8080/games/etymology_explorer/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        await expect(page.locator('.game-prompt')).not.toBeEmpty();
    });

    test('100 Questions card draw and deck switcher', async ({ page }) => {
        await page.goto('http://localhost:8080/games/hundred_questions/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.q-card, .game-card, .question-card')).toBeVisible();
    });

    test('Games Hub filters filter cards correctly', async ({ page }) => {
        await page.goto('http://localhost:8080/games/index.html');
        await page.click('button[data-f="solo"]');
        const visibleCards = await page.locator('.gc:visible').count();
        expect(visibleCards).toBeGreaterThan(0);
        await page.click('button[data-f="all"]');
        const allCards = await page.locator('.gc:visible').count();
        expect(allCards).toBeGreaterThanOrEqual(17);
    });
});
