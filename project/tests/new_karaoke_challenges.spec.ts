import { test, expect } from '@playwright/test';

test.describe('New Karaoke Challenges Verification', () => {
  test('Gossip Challenge index page loads with tabs and song elements', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/gossip-challenge/index.html');
    await expect(page.locator('h1')).toContainText('Gossip Challenge');
    const tabBtns = page.locator('.vim-tab-btn');
    await expect(tabBtns).toHaveCount(9);
  });

  test('Zemfira Challenge index page loads with tabs and song elements', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/ru/zemfira-challenge/index.html');
    await expect(page.locator('h1')).toContainText('Zemfira Challenge');
    const tabBtns = page.locator('.vim-tab-btn');
    await expect(tabBtns).toHaveCount(5);
  });

  test('Flёur Challenge index page loads with tabs and song elements', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/ru/fleur-challenge/index.html');
    await expect(page.locator('h1')).toContainText('Flёur Challenge');
    const tabBtns = page.locator('.vim-tab-btn');
    await expect(tabBtns).toHaveCount(2);
  });

  test('Mariia Chaikovska Challenge index page loads with tabs and song elements', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/ru/mariia-chaikovska-challenge/index.html');
    await expect(page.locator('h1')).toContainText('Mariia Chaikovska Challenge');
    const tabBtns = page.locator('.vim-tab-btn');
    await expect(tabBtns).toHaveCount(3);
  });

  test('Alla Pugacheva Challenge index page loads with tabs and song elements', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/ru/alla-pugacheva-challenge/index.html');
    await expect(page.locator('h1')).toContainText('Alla Pugacheva Challenge');
    const tabBtns = page.locator('.vim-tab-btn');
    await expect(tabBtns).toHaveCount(3);
  });

  test('Standalone song "It\'s Raining Men" loads correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/karaoke/sessions/karaoke-club/its-raining-men.html');
    await expect(page.locator('h1')).toContainText("It's Raining Men");
  });
});
