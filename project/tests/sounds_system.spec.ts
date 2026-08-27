import { test, expect } from '@playwright/test';

test.describe('Sound System Tests', () => {
  test('should load background music files without 404 errors', async ({ page }) => {
    for (let i = 1; i <= 9; i++) {
      const response = await page.request.get(`http://localhost:8080/sounds/music/background${i}.mp3`);
      expect(response.status()).toBe(200);
    }
  });

  test('should initialize shuffle queue in sessionStorage', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/if-you-were/if-you-were.html');
    await page.click('body');

    const queueStr = await page.evaluate(() => sessionStorage.getItem('cosy_bg_music_queue'));
    expect(queueStr).not.toBeNull();
    const queue = JSON.parse(queueStr!);
    expect(queue.length).toBe(9);
    expect(new Set(queue).size).toBe(9);
  });

  test('should play next track on ended event without duplicate repetition', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/if-you-were/if-you-were.html');
    await page.click('body');

    const initialTrackSrc = await page.evaluate(() => window.cosyWonderAudio ? window.cosyWonderAudio.src : null);
    expect(initialTrackSrc).not.toBeNull();

    // Trigger ended event on the audio element
    await page.evaluate(() => {
      if (window.cosyWonderAudio) {
        window.cosyWonderAudio.dispatchEvent(new Event('ended'));
      }
    });

    const indexAfter = await page.evaluate(() => sessionStorage.getItem('cosy_bg_music_index'));
    expect(indexAfter).toBe('1');

    const nextTrackSrc = await page.evaluate(() => window.cosyWonderAudio ? window.cosyWonderAudio.src : null);
    expect(nextTrackSrc).not.toBeNull();
    expect(nextTrackSrc).not.toBe(initialTrackSrc);
  });

  test('should load wonder column draft sounds', async ({ page }) => {
    const response = await page.request.get('http://localhost:8080/sounds/draft1.mp3');
    expect(response.status()).toBe(200);
  });

  test('should load reaction sound files', async ({ page }) => {
    const response = await page.request.get('http://localhost:8080/sounds/reactions/yes.ogg');
    expect(response.status()).toBe(200);
  });

  test('background audio element should be created with correct initial track', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/if-you-were/if-you-were.html');
    const audioCreated = await page.evaluate(() => {
      return window.cosyWonderAudio !== undefined && window.cosyWonderAudio !== null;
    });
    expect(audioCreated).toBe(true);
  });
});
