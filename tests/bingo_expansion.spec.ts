import { test, expect } from '@playwright/test';

test('Bingo dynamic grids and win logic', async ({ page }) => {
  await page.goto('http://localhost:8080/events.html');

  // Open Bingo Modal
  await page.click('#toggle-games-btn');
  await page.click('#open-bingo-btn');
  await expect(page.locator('#bingo-modal')).toBeVisible();

  // Test Level 2 (3x5)
  await page.selectOption('#bingo-level', '2');
  await page.click('#start-bingo-player-btn');
  const grid2 = page.locator('#bingo-player-grid');
  await expect(grid2).toHaveClass(/cols-3/); // 3 columns for 3x5
  const cells2 = page.locator('#bingo-player-grid .bingo-cell');
  await expect(cells2).toHaveCount(15);
  await page.screenshot({ path: 'bingo_3x5.png' });

  // Back to setup
  await page.click('#close-bingo-btn');
  await page.click('#open-bingo-btn');

  // Test Level 3 (5x5)
  await page.selectOption('#bingo-level', '3');
  await page.click('#start-bingo-player-btn');
  const grid3 = page.locator('#bingo-player-grid');
  await expect(grid3).toHaveClass(/cols-5/);
  const cells3 = page.locator('#bingo-player-grid .bingo-cell');
  await expect(cells3).toHaveCount(25);
  await page.screenshot({ path: 'bingo_5x5.png' });

  // Back to setup
  await page.click('#close-bingo-btn');
  await page.click('#open-bingo-btn');

  // Test Level 5 (9x3)
  await page.selectOption('#bingo-level', '5');
  await page.click('#start-bingo-player-btn');
  const grid5 = page.locator('#bingo-player-grid');
  await expect(grid5).toHaveClass(/cols-9/);
  const cells5 = page.locator('#bingo-player-grid .bingo-cell');
  await expect(cells5).toHaveCount(27);
  await page.screenshot({ path: 'bingo_9x3.png' });

  // Test Win Logic
  for (let i = 0; i < 27; i++) {
    await cells5.nth(i).click();
  }
  // Check for win message
  const winMsg = page.locator('.game-message-overlay.success');
  await expect(winMsg).toBeVisible();
  await page.screenshot({ path: 'bingo_win.png' });
});

test('Practice Bingo Navigation Hint', async ({ page }) => {
  await page.goto('http://localhost:8080/practice.html');

  // Select Numbers theme
  await page.selectOption('#practice-theme', 'numbers');

  // Check for hint
  const hintMsg = page.locator('.game-message-overlay.info');
  await expect(hintMsg).toBeVisible();
  await page.screenshot({ path: 'practice_bingo_hint.png' });
});
