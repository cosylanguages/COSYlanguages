import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { createServer } from 'http';

const POST_SLUGS = [
  'replace-very-50-stronger-adjectives',
  'replace-very-50-stronger-adjectives-ru',
  'replace-very-50-stronger-adjectives-el'
];

let server;
const PORT = 8085;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

test.beforeAll(async () => {
  server = createServer((req, res) => {
    const safePath = path.normalize(req.url.split('?')[0]).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(process.cwd(), safePath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  });
  await new Promise((resolve) => server.listen(PORT, resolve));
});

test.afterAll(async () => {
  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }
});

test.describe('Stage Mode Camera & Viewport Bounding Box Verification', () => {
  for (const slug of POST_SLUGS) {
    test(`Verify all beats target elements remain inside viewport for post: ${slug}`, async ({ page }) => {
      const url = `http://localhost:${PORT}/blog/${slug}.html?stage=1&render=1`;

      await page.setViewportSize({ width: 1280, height: 720 });
      await page.goto(url);

      // Wait for stage controller & render ready flag
      await page.waitForFunction(() => window.__stageRenderReady === true, { timeout: 10000 });

      const totalBeats = await page.evaluate(() => window.__stageTotalBeats);
      expect(totalBeats).toBeGreaterThan(0);

      const screenshotsDir = path.join(process.cwd(), 'tests/screenshots');
      if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir, { recursive: true });
      }

      for (let i = 0; i < totalBeats; i++) {
        // Seek to beat index
        await page.evaluate((beatIdx) => {
          const controller = window.stageController;
          if (controller && controller.timeline) {
            controller.timeline.jumpTo(beatIdx);
          }
        }, i);

        // Wait a bit for requestAnimationFrame / transform application
        await page.waitForTimeout(100);

        // Check target element bounding box against stage-viewport
        const boundingInfo = await page.evaluate((beatIdx) => {
          const viewport = document.querySelector('#stage-viewport');
          const controller = window.stageController;
          if (!viewport || !controller || !controller.timeline) return null;

          const beat = controller.timeline.beats[beatIdx];
          if (!beat) return null;

          let targetEl = beat.targetSelector ? document.querySelector(beat.targetSelector) : null;

          // Fallback if target element is not found or has zero rect
          if (!targetEl || targetEl.getBoundingClientRect().width === 0 || targetEl.getBoundingClientRect().height === 0) {
            targetEl = document.querySelector('.stage-card') || viewport;
          }

          const vpRect = viewport.getBoundingClientRect();
          const targetRect = targetEl.getBoundingClientRect();

          const toleranceX = vpRect.width * 0.02;
          const toleranceY = vpRect.height * 0.02;

          const isInside = (
            targetRect.left >= vpRect.left - toleranceX &&
            targetRect.right <= vpRect.right + toleranceX &&
            targetRect.top >= vpRect.top - toleranceY &&
            targetRect.bottom <= vpRect.bottom + toleranceY
          );

          return {
            beatIdx,
            targetSelector: beat.targetSelector,
            isInside,
            vpRect: { left: vpRect.left, right: vpRect.right, top: vpRect.top, bottom: vpRect.bottom, w: vpRect.width, h: vpRect.height },
            targetRect: { left: targetRect.left, right: targetRect.right, top: targetRect.top, bottom: targetRect.bottom, w: targetRect.width, h: targetRect.height }
          };
        }, i);

        expect(boundingInfo, `Beat index ${i}: Failed to get bounding info`).not.toBeNull();
        if (!boundingInfo.isInside) {
          throw new Error(
            `Beat index ${i} (${boundingInfo.targetSelector}) is outside .stage-viewport!\n` +
            `Viewport: ${JSON.stringify(boundingInfo.vpRect)}\n` +
            `Target: ${JSON.stringify(boundingInfo.targetRect)}`
          );
        }

        // Take visual regression screenshots for beats 1, 5, 10, and last beat for 'replace-very-50-stronger-adjectives'
        if (slug === 'replace-very-50-stronger-adjectives') {
          const beatNum = i + 1;
          if (beatNum === 1 || beatNum === 5 || beatNum === 10 || beatNum === totalBeats) {
            const screenshotPath = path.join(screenshotsDir, `stage-beat-${beatNum}.png`);
            await page.screenshot({ path: screenshotPath });
          }
        }
      }
    });
  }
});
