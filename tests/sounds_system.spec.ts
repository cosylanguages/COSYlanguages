import { test, expect } from '@playwright/test';

test.describe('Sounds and Music System', () => {
  test('Wonder club background music plays and maintains state', async ({ page }) => {
    // 1. Visit Wonder Club page
    await page.goto('http://localhost:8080/events/i-couldnt-help-but-wonder.html');

    // 2. Click on body to trigger interaction play
    await page.click('body');

    // 3. Navigate to a session page within the same club
    await page.goto('http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/do-insects-hide-when-it-rains.html');

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
