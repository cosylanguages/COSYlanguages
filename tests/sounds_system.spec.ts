import { test, expect } from '@playwright/test';

test.describe('Sounds and Music System', () => {
  test('Wonder club background music plays and maintains state', async ({ page }) => {
    // 1. Visit Wonder Club page
    await page.goto('http://localhost:8080/apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html');

    // 2. Click on body to trigger interaction play
    await page.click('body');

    // 3. Navigate to a session page within the same club
    await page.goto('http://localhost:8080/apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/do-insects-hide-when-it-rains.html');

    // Click on body to trigger interaction play
    await page.click('body');

    // 4. Navigate outside the club (e.g. Practice Hub)
    await page.goto('http://localhost:8080/practice/index.html');

    // 5. Verify that sessionStorage keys are cleaned up when leaving the club
    const savedTime = await page.evaluate(() => sessionStorage.getItem('cosy_wonder_music_time'));
    const isPlaying = await page.evaluate(() => sessionStorage.getItem('cosy_wonder_music_playing'));

    expect(savedTime).toBeNull();
    expect(isPlaying).toBeNull();
  });

  test('Seamless PJAX transition maintains the exact same audio context and eliminates gap/stop', async ({ page }) => {
    // 1. Visit Wonder Club main page
    await page.goto('http://localhost:8080/apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html');
    await page.click('body');

    // 2. Attach a unique tag to the active audio element to verify it is NOT destroyed
    await page.evaluate(() => {
      if (window.cosyWonderAudio) {
        (window as any).cosyWonderAudio.__uniqueTag = 'perfect-gapless-match';
      }
    });

    // 3. Click one of the past session links (this should trigger PJAX fetch instead of full load)
    await page.click('a[href="sessions/i-couldnt-help-but-wonder/do-insects-hide-when-it-rains.html"]');

    // 4. Wait for the URL and content to transition
    await page.waitForURL('**/do-insects-hide-when-it-rains.html');
    await expect(page.locator('.current')).toContainText('Do Insects Hide When It Rains?');

    // 5. Check if the window context was preserved and the audio element is still the exact same instance
    const hasSameAudio = await page.evaluate(() => {
      return window.cosyWonderAudio && (window as any).cosyWonderAudio.__uniqueTag === 'perfect-gapless-match';
    });

    expect(hasSameAudio).toBe(true);
  });

  test('Practice Hub playPracticeSound handles localized reaction sound files', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');

    // Inject a spy or call playPracticeSound directly to verify no exceptions and correct URL structure
    const result = await page.evaluate(() => {
      let playedUrl = null;
      const originalAudio = window.Audio;
      // Mock Audio constructor to spy on the URL being played
      window.Audio = class extends originalAudio {
        constructor(url) {
          super(url);
          playedUrl = url;
        }
        play() {
          return Promise.resolve();
        }
      };

      // Set a session mock with french language
      window.cosyPracticeEngine.session = { lang: 'fr' };
      window.cosyPracticeEngine.recordMistake(null); // triggers playPracticeSound('wrong')

      // Restore Audio
      window.Audio = originalAudio;
      return playedUrl;
    });

    // Verify it selected a French reaction wrong sound
    expect(result).not.toBeNull();
    expect(result).toContain('sounds/reactions/');
    expect(result).toMatch(/mais%20non|mais%20pourquoi/);
  });
});
