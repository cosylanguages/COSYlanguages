import { test, expect } from '@playwright/test';

test('Mobile nav active state on language page', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:8080/languages/en.html');

  const evalResult = await page.evaluate(() => {
    const path = window.location.pathname;
    const isLanguagePage = path.indexOf('/languages/') !== -1 || path.indexOf('languages/') === 0;
    const navItems = Array.from(document.querySelectorAll('.mobile-nav-item')).map(item => ({
      id: item.id,
      classes: item.className,
      isActive: item.classList.contains('active')
    }));
    return {
      path,
      isLanguagePage,
      navItems
    };
  });

  console.log('Eval Result:', JSON.stringify(evalResult, null, 2));

  const languagesTab = page.locator('#mnav-languages');
  await expect(languagesTab).toHaveClass(/active/);
});
