import { test, expect } from '@playwright/test';

const games = [
  { id: 'action-hero', name: 'Action Hero', modal: '#charades-modal', gameplay: '#charades-gameplay' },
  { id: 'emoji-odyssey', name: 'Emoji Odyssey', modal: '#emoji-modal', gameplay: '#emoji-gameplay' },
  { id: 'lucky-numbers', name: 'Lucky Numbers', modal: '#bingo-modal', gameplay: '#bingo-caller-area' },
  { id: 'last-letter', name: 'Last Letter', modal: '#last-letter-modal', gameplay: '#last-letter-gameplay' },
  { id: 'guess-what', name: 'Object Quest', modal: '#guess-what-modal', gameplay: '.game-play' },
  { id: 'guess-who', name: 'Identity Mystery', modal: '#guess-who-modal', gameplay: '.game-play' },
  { id: 'crossword', name: 'Cosy Crossword', modal: '#crossword-modal', gameplay: '#crossword-gameplay' },
  { id: 'fluency-flow', name: 'Fluency Flow', modal: '#talk-talk-modal', gameplay: '.game-play' },
  { id: 'opinion-arena', name: 'Opinion Arena', modal: '#opinion-arena-modal', gameplay: '.game-play' },
  { id: 'battle-of-wits', name: 'Battle of Wits', modal: '#debates-modal', gameplay: '.game-play' },
  { id: 'word-linker', name: 'Word Linker', modal: '#linker-modal', gameplay: '#linker-gameplay' },
  { id: 'story-chain', name: 'Story Chain', modal: '#story-chain-modal', gameplay: '#sc-input-area' },
  { id: 'hot-seat', name: 'Hot Seat', modal: '#hot-seat-modal', gameplay: '#hot-seat-area' },
  { id: 'critics-corner', name: "Critic's Corner", modal: '#critics-corner-modal', gameplay: '.game-play' }
];

test.describe('Comprehensive Games Audit', () => {
  test.beforeEach(async ({ page }) => {
    // Large enough viewport to avoid scrolling issues
    await page.setViewportSize({ width: 1280, height: 1000 });
    await page.goto('http://localhost:8080/events.html');
  });

  for (const game of games) {
    test(`Verify ${game.name} is launchable and functional`, async ({ page }) => {
      console.log(`Auditing game: ${game.name}`);

      const card = page.locator(`.game-card-lobby[data-game="${game.id}"]`);
      await expect(card).toBeVisible();

      const soloBtn = card.locator('button').filter({ hasText: 'Play solo' });
      await soloBtn.click();

      // On Desktop, the setup sheet is bypassed
      if (page.viewportSize()?.width && page.viewportSize()!.width <= 768) {
          const setupSheet = page.locator('#game-setup-sheet');
          await expect(setupSheet).toHaveClass(/open/);

          const startBtn = setupSheet.locator('button.gss-start');
          await startBtn.click();
      }

      const modal = page.locator(game.modal);
      if (game.id === 'last-letter') {
          // Debugging Last Letter
          await page.screenshot({ path: '/home/jules/verification/screenshots/debug_last_letter_start.png' });
      }
      await expect(modal).toBeVisible();

      // Verify gameplay section becomes visible
      const gameplay = modal.locator(game.gameplay).first();
      await expect(gameplay).toBeVisible({ timeout: 10000 });

      console.log(`  - ${game.name} gameplay started`);

      // Close modal
      // We look for any button containing "Close" or "❌" inside the modal
      const closeBtn = modal.locator('button').filter({ hasText: /Close|❌/ }).last();
      // Using .last() because it's usually at the bottom

      await closeBtn.scrollIntoViewIfNeeded();
      await closeBtn.click({ force: true });

      await expect(modal).not.toBeVisible({ timeout: 5000 });
      console.log(`  - ${game.name} closed successfully`);
    });
  }
});
