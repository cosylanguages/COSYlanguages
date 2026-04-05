import { test, expect } from '@playwright/test';

test('Mobile nav active state on language page', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:8080/languages/en.html');

  const debugData = await page.evaluate(() => {
    const navItems = Array.from(document.querySelectorAll('.mobile-nav-item')).map(item => ({
      id: item.id,
      classes: item.className,
      href: item.getAttribute('href')
    }));
    return {
      pathname: window.location.pathname,
      navItems
    };
  });

  console.log('Debug Data:', JSON.stringify(debugData, null, 2));

  const languagesTab = page.locator('#mnav-languages');
  await expect(languagesTab).toHaveClass(/active/);
});

test('Recently Played section visibility', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html');

  const container = page.locator('#session-log-container');
  await expect(container).toBeHidden();

  await page.evaluate(() => {
    localStorage.setItem('cosy_session_log', JSON.stringify([{
      gameName: 'Action Hero',
      icon: '🎭',
      lang: 'en',
      level: 'starter',
      date: new Date().toISOString()
    }]));
  });

  await page.reload();
  await expect(container).toBeVisible();
});
