import { test, expect } from '@playwright/test';

test('events page game rebranding and modals', async ({ page }) => {
    await page.goto('http://localhost:8080/events.html');

    // Toggle games section
    const toggleBtn = page.locator('#toggle-games-btn');
    await toggleBtn.click();

    // Check rebranded names in list
    const gameList = page.locator('#game-nights-topics ul');
    await expect(gameList).toContainText('Action Hero');
    await expect(gameList).toContainText('Identity Mystery');
    await expect(gameList).toContainText('Object Quest');
    await expect(gameList).toContainText('Lucky Numbers');
    await expect(gameList).toContainText('Battle of Wits');
    await expect(gameList).toContainText('Fluency Flow');
    await expect(gameList).toContainText('Opinion Arena');
    await expect(gameList).toContainText('Critic\'s Corner');

    // Test Battle of Wits Modal
    await page.click('#open-debates-btn');
    const debatesModal = page.locator('#debates-modal');
    await expect(debatesModal).toBeVisible();
    await expect(debatesModal.locator('h2')).toContainText('Battle of Wits');

    // Start game and check timer
    await page.click('#start-debates-btn');
    await expect(debatesModal.locator('#debates-timer')).toBeVisible();
    await expect(debatesModal.locator('#side-a-name')).toBeVisible();
    await expect(debatesModal.locator('#side-b-name')).toBeVisible();
    await page.click('#close-debates-btn');
    await expect(debatesModal).toBeHidden();

    // Test Fluency Flow Modal
    await page.click('#open-talk-talk-btn');
    const talkModal = page.locator('#talk-talk-modal');
    await expect(talkModal).toBeVisible();
    await expect(talkModal.locator('h2')).toContainText('Fluency Flow');
    await page.click('#start-talk-btn');
    await expect(talkModal.locator('#talk-timer')).toBeVisible();
    await page.click('#close-talk-btn');

    // Test Opinion Arena Modal
    await page.click('#open-opinion-arena-btn');
    const opinionModal = page.locator('#opinion-arena-modal');
    await expect(opinionModal).toBeVisible();
    await expect(opinionModal.locator('h2')).toContainText('Opinion Arena');
    await page.click('#start-opinion-btn');
    await expect(opinionModal.locator('#opinion-timer')).toBeVisible();
    await page.click('#close-opinion-btn');
});
