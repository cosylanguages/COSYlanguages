import { test, expect } from '@playwright/test';

test.describe('Practice Hub New UI Flow', () => {
  test('should load dashboard and update stats', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');
    await page.evaluate(() => {
      localStorage.setItem('cosy_total_points', '1250');
      localStorage.setItem('practice_streak', '7');
    });
    await page.reload();
    await expect(page.locator('#setup-total-score')).toHaveText('1,250');
    await expect(page.locator('#streak-val')).toHaveText('7');
  });

  test('should start a session via Quick Start', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');
    await page.click('.qs-card:has-text("English Vocab")');
    await expect(page.locator('#practice-section')).toBeVisible();
    await expect(page.locator('#pe-session-title')).toContainText('EN · vocab');
  });

  test('should complete a session', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');
    await page.click('.qs-card:has-text("English Vocab")');
    await page.waitForSelector('#practice-section', { state: 'visible' });

    // Force end session via completion
    await page.evaluate(() => {
        const sess = window.cosyPracticeEngine.session;
        sess.idx = sess.qs.length;
        window.cosyPractice.nextQ();
    });

    await expect(page.locator('#summary-modal')).toBeVisible();
  });
});
