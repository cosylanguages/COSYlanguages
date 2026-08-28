const { test, expect } = require('@playwright/test');

test.describe('All 18 Games Full Gameplay Loop Audit', () => {

    test('1. Fluency Flow', async ({ page }) => {
        await page.goto('http://localhost:8080/games/fluency_flow/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        await expect(page.locator('#ff-topic')).not.toBeEmpty();
    });

    test('2. Battle of Wits', async ({ page }) => {
        await page.goto('http://localhost:8080/games/battle_of_wits/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        await expect(page.locator('.game-prompt')).not.toBeEmpty();
    });

    test('3. Opinion Arena', async ({ page }) => {
        await page.goto('http://localhost:8080/games/opinion_arena/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        await expect(page.locator('.game-prompt')).not.toBeEmpty();
    });

    test('4. Critic\'s Corner', async ({ page }) => {
        await page.goto('http://localhost:8080/games/critics_corner/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        await expect(page.locator('.game-prompt')).not.toBeEmpty();
    });

    test('5. 100 Questions', async ({ page }) => {
        await page.goto('http://localhost:8080/games/hundred_questions/index.html');
        await page.click('.btn-start-game'); // Continue ->
        await expect(page.locator('.rules-screen')).toBeVisible();
        await page.click('button:has-text("Start")'); // Start Game ->
        await expect(page.locator('.levels-screen')).toBeVisible();
        await page.click('.lvl-card:first-child');
        await expect(page.locator('.gameplay-screen')).toBeVisible();
    });

    test('6. Story Chain', async ({ page }) => {
        await page.goto('http://localhost:8080/games/story_chain/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card').first()).toBeVisible();
    });

    test('7. Story Weaver', async ({ page }) => {
        await page.goto('http://localhost:8080/games/storytelling/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card, .story-card').first()).toBeVisible();
    });

    test('8. Hot Seat', async ({ page }) => {
        await page.goto('http://localhost:8080/games/hot_seat/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card').first()).toBeVisible();
    });

    test('9. Action Hero', async ({ page }) => {
        await page.goto('http://localhost:8080/games/action_hero/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card').first()).toBeVisible();
    });

    test('10. Identity Mystery', async ({ page }) => {
        await page.goto('http://localhost:8080/games/identity_mystery/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card').first()).toBeVisible();
    });

    test('11. Object Quest', async ({ page }) => {
        await page.goto('http://localhost:8080/games/object_quest/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card').first()).toBeVisible();
    });

    test('12. Word Linker', async ({ page }) => {
        await page.goto('http://localhost:8080/games/word_linker/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        await page.locator('.word-opt').first().click();
        await expect(page.locator('#wl-fb')).toBeVisible();
    });

    test('13. Last Letter', async ({ page }) => {
        await page.goto('http://localhost:8080/games/last_letter/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        await page.fill('#ll-input', 'apple');
        await page.click('button:has-text("Add")');
        await expect(page.locator('#ll-chain')).toContainText('apple');
    });

    test('14. Emoji Odyssey', async ({ page }) => {
        await page.goto('http://localhost:8080/games/emoji_odyssey/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
    });

    test('15. Cosy Crossword', async ({ page }) => {
        await page.goto('http://localhost:8080/games/cosy_crossword/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card, .crossword-wrap').first()).toBeVisible();
    });

    test('16. Lucky Numbers', async ({ page }) => {
        await page.goto('http://localhost:8080/games/lucky_numbers/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
    });

    test('17. Etymology Explorer', async ({ page }) => {
        await page.goto('http://localhost:8080/games/etymology_explorer/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        await expect(page.locator('.etymology-word')).not.toBeEmpty();
        await page.locator('.word-opt').first().click();
        await expect(page.locator('#et-fb')).toBeVisible();
    });

    test('18. What Gender Is It?', async ({ page }) => {
        await page.goto('http://localhost:8080/games/what_gender_is_it/index.html');
        await page.click('.btn-start-game');
        await expect(page.locator('.game-card')).toBeVisible();
        await page.locator('.btn-gender').first().click();
        await expect(page.locator('.why-container')).toBeVisible();
    });
});
