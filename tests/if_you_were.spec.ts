import { test, expect } from '@playwright/test';

test.describe('If You Were Speaking Club and Sessions Verification', () => {
  test('Club landing page should load and display correctly with active sessions', async ({ page }) => {
    await page.goto('http://localhost:8080/events/if-you-were.html');
    await expect(page.locator('h1')).toContainText('If You Were...');
    await expect(page.locator('.life-balance-card')).toHaveCount(5);
  });

  const sessions = [
    { slug: 'if-you-were-death', title: 'If You Were Death' },
    { slug: 'if-you-were-blind', title: 'If You Were Blind' },
    { slug: 'if-you-were-teacher', title: 'If You Were a Teacher' },
    { slug: 'if-you-were-child-again', title: 'If You Were a Child Again' },
    { slug: 'if-you-were-parent-to-yourself', title: 'If You Were a Parent to Yourself' }
  ];

  for (const s of sessions) {
    test(`${s.title} session page should load correctly`, async ({ page }) => {
      await page.goto(`http://localhost:8080/events/sessions/if-you-were/${s.slug}.html`);
      await expect(page.locator('h1')).toContainText(s.title);
      await expect(page.locator('.perspective-mirror-box')).toBeVisible();
      await expect(page.locator('#vocabulary')).toBeVisible();
      await expect(page.locator('.vocab-card')).toHaveCount(10);
      await expect(page.locator('.rounds-container')).toBeVisible();
      await expect(page.locator('.round-block')).toHaveCount(4); // Warm-up, R1, LST, R2
    });
  }
});
