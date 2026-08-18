import { test, expect } from '@playwright/test';

test('Debug grandmother-evolutionary-mystery.html mini nav', async ({ page }) => {
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.goto('http://localhost:8080/apps/premium-events/clubs/kus/sessions/keeping-up-with-science/grandmother-evolutionary-mystery.html');
  await page.waitForTimeout(1000);

  const debug = await page.evaluate(() => {
    const main = document.querySelector('main.content-container') || document.querySelector('main') || document.body;
    const isSessionPage = window.location.pathname.includes('/sessions/') || document.querySelector('.session-hero');
    const existingNav = document.getElementById('session-mini-nav');

    const selectors = [
      'section',
      '#vocabulary',
      '#listening-exercise',
      '#discussion',
      '#lang-focus',
      '#final-challenge',
      '.round-block',
      '.mistake-block',
      '.private-step',
      'h2.section-title',
      '.round-header',
      '.mistake-header'
    ];
    const elements = main ? Array.from(main.querySelectorAll(selectors.join(', '))) : [];

    return {
      pathname: window.location.pathname,
      isSessionPage,
      mainExists: !!main,
      existingNavExists: !!existingNav,
      elementCount: elements.length,
      elementTags: elements.map(e => ({ tag: e.tagName, id: e.id, class: e.className, hidden: e.style.display }))
    };
  });

  console.log('DEBUG RES:', JSON.stringify(debug, null, 2));
});
