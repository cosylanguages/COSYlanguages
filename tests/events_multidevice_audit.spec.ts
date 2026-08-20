import { test, expect } from '@playwright/test';

const devicesToTest = [
  { name: 'Android Mobile (360x800)', width: 360, height: 800 },
  { name: 'iPhone SE (375x667)', width: 375, height: 667 },
  { name: 'iPhone 13 / Apple Mobile (390x844)', width: 390, height: 844 },
  { name: 'iPad Tablet (768x1024)', width: 768, height: 1024 },
  { name: 'Laptop (1280x800)', width: 1280, height: 800 },
  { name: 'Desktop / Linux / Mac (1920x1080)', width: 1920, height: 1080 },
];

const eventPagesToTest = [
  // Event Hubs & Directory
  { name: 'Events Directory Hub', path: '/events/index.html' },
  { name: 'Speaking Clubs Hub (EN)', path: '/events/speaking-clubs.html' },
  { name: 'Speaking Clubs Hub (FR)', path: '/events/fr/speaking-clubs.html' },
  { name: 'Speaking Clubs Hub (RU)', path: '/events/ru/speaking-clubs.html' },
  { name: 'Cinema Club Hub', path: '/apps/premium-events/nights/cinema/cinema-club.html' },
  { name: 'Karaoke Club Hub', path: '/apps/premium-events/nights/karaoke/karaoke-club.html' },
  { name: 'Game Evening Hub', path: '/apps/premium-events/nights/game-evening/game-evenings.html' },
  { name: 'Long Reads Hub', path: '/apps/premium-events/nights/long-reads/long-reads.html' },
  { name: 'If You Were Hub', path: '/apps/premium-events/clubs/if-you-were/if-you-were.html' },
  { name: 'Debatable & Relatable Hub', path: '/apps/premium-events/clubs/debate/debatable-relatable.html' },
  { name: 'My Life With & Without Hub', path: '/apps/premium-events/clubs/life/my-life-with-without.html' },
  { name: 'Mind Matters Hub', path: '/apps/premium-events/clubs/mind/mind-matters.html' },
  { name: 'Keeping Up with Science Hub', path: '/apps/premium-events/clubs/kus/keeping-up-with-science.html' },
  { name: 'Let\'s Celebrate Hub', path: '/apps/premium-events/clubs/celebrate/lets-celebrate.html' },
  { name: 'I Couldn\'t Help But Wonder Hub', path: '/apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html' },
  { name: 'Greatest Quotes Hub', path: '/apps/premium-events/clubs/quotes/the-greatest-quotes.html' },

  // Representative Event Sessions across formats & clubs
  { name: 'Cinema Session (Fleabag)', path: '/apps/premium-events/nights/cinema/sessions/cinema-club/fleabag.html' },
  { name: 'Karaoke Challenge Session (Angèle)', path: '/apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/fr/angele-challenge/index.html' },
  { name: 'Karaoke Standalone Song (California Dreaming)', path: '/apps/premium-events/nights/karaoke/sessions/karaoke-club/california-dreaming.html' },
  { name: 'Debate Session (4-Day Work Week)', path: '/apps/premium-events/clubs/debate/sessions/debatable-relatable/4-day-work-week.html' },
  { name: 'Life Session (Social Media)', path: '/apps/premium-events/clubs/life/sessions/my-life-with-without/my-life-without-social-media-intermediate.html' },
  { name: 'Mind Matters Session (Limerence)', path: '/apps/premium-events/clubs/mind/sessions/mind-matters/limerence.html' },
  { name: 'Science Session (Sleep)', path: '/apps/premium-events/clubs/kus/sessions/keeping-up-with-science/science-of-sleep.html' },
  { name: 'Celebrate Session (Lunar New Year)', path: '/apps/premium-events/clubs/celebrate/sessions/lets-celebrate/lunar-new-year-intermediate.html' },
  { name: 'Wonder Session (Inclusive Language)', path: '/apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/does-inclusive-language-make-us-equal.html' },
  { name: 'Quotes Session (Albert Camus)', path: '/apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/albert-camus-intermediate.html' },
  { name: 'If You Were Session (Deaf)', path: '/apps/premium-events/clubs/if-you-were/sessions/if-you-were/if-you-were-deaf.html' },
  { name: 'Long Reads Session (Book Club 1)', path: '/apps/premium-events/nights/long-reads/sessions/long-reads/session-1.html' },
];

test.describe('Multi-Device Visual & Functional Event Audit', () => {
  for (const pageItem of eventPagesToTest) {
    test(`Verify ${pageItem.name} across viewports & themes`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      for (const dev of devicesToTest) {
        await page.setViewportSize({ width: dev.width, height: dev.height });
        await page.goto(`http://localhost:8080${pageItem.path}`);

        // Verify page loads without 404 or document crash
        await expect(page).not.toHaveTitle(/404/);

        // Check horizontal overflow (scrollWidth vs clientWidth)
        const overflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2; // allowance of 2px for rounding
        });
        expect(overflow, `Horizontal overflow detected on ${pageItem.name} at ${dev.width}px!`).toBe(false);

        // Test dark mode visual rendering
        await page.evaluate(() => {
          document.documentElement.setAttribute('data-theme', 'dark');
          document.body.classList.add('theme-dark');
        });
        await page.waitForTimeout(50);

        const darkOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
        });
        expect(darkOverflow, `Dark mode horizontal overflow detected on ${pageItem.name} at ${dev.width}px!`).toBe(false);

        // Reset theme back to light
        await page.evaluate(() => {
          document.documentElement.removeAttribute('data-theme');
          document.body.classList.remove('theme-dark');
        });
      }

      // Assert no critical JS errors
      const criticalErrors = consoleErrors.filter(err => !err.includes('Failed to load resource') && !err.includes('favicon') && !err.includes('X-Frame-Options'));
      expect(criticalErrors, `Console errors logged on ${pageItem.name}: ${criticalErrors.join(', ')}`).toEqual([]);
    });
  }
});
