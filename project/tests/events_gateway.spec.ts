import { test, expect } from '@playwright/test';

test.describe('COSY Premium Events Gateway Verification', () => {
  test('Gateway landing page loads cleanly and links to COSYevents portal', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/index.html');

    // 1. Verify Header Title
    const title = page.locator('h1');
    await expect(title).toContainText('COSY Premium Events');

    // 2. Verify Primary CTA Banner Links Out to COSYevents
    const primaryCta = page.locator('a.btn-primary').first();
    await expect(primaryCta).toBeVisible();
    await expect(primaryCta).toHaveAttribute('href', 'https://cosylanguages.github.io/COSYevents/');

    // 3. Verify Event Format Cards Exist
    const eventCards = page.locator('.event-card');
    const cardCount = await eventCards.count();
    expect(cardCount).toBeGreaterThanOrEqual(10);

    // 4. Verify Event Action Links Target COSYevents
    const eventActions = page.locator('.event-action');
    const firstActionUrl = await eventActions.first().getAttribute('href');
    expect(firstActionUrl).toBe('https://cosylanguages.github.io/COSYevents/');
  });
});
