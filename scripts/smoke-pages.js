const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const PORT = 8089;
const ROOT = path.resolve(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let reqPath = decodeURIComponent(req.url.split('?')[0]);
      let filePath = path.join(ROOT, reqPath);

      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      if (!fs.existsSync(filePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('500 Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content);
        }
      });
    });

    server.listen(PORT, () => {
      resolve(server);
    });
    server.on('error', reject);
  });
}

const PAGES = [
  '/',
  '/practice/',
  '/courses/general.html',
  '/blog/',
  '/languages/fr/index.html',
  '/languages/cv/index.html',
  '/hybrid/',
  '/placement-quiz.html',
  '/print-studio/print-zine.html'
];

const VIEWPORTS = [
  { width: 390, height: 844, name: '390px Mobile' },
  { width: 1280, height: 800, name: '1280px Desktop' }
];

async function runSmokeTests() {
  console.log('Starting local HTTP server for smoke tests...');
  const server = await startServer();
  console.log(`Server running at http://localhost:${PORT}/`);

  const browser = await chromium.launch({ headless: true });
  let totalErrors = 0;

  try {
    for (const viewport of VIEWPORTS) {
      console.log(`\n--- Testing Viewport: ${viewport.name} (${viewport.width}x${viewport.height}) ---`);
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
      const page = await context.newPage();

      for (const relativeUrl of PAGES) {
        const pageErrors = [];
        const consoleErrors = [];

        page.on('pageerror', (err) => {
          pageErrors.push(err.message);
        });

        page.on('console', (msg) => {
          if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
          }
        });

        const targetUrl = `http://localhost:${PORT}${relativeUrl}`;
        await page.goto(targetUrl, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(300); // allow dynamic scripts to run

        let pageFailed = false;

        // 1. Check JS page errors
        if (pageErrors.length > 0) {
          console.error(`❌ [${viewport.name}] ${relativeUrl} has JS page errors:`);
          pageErrors.forEach(err => console.error(`   - ${err}`));
          pageFailed = true;
        }

        // 2. Check Header presence (.nav-login or main nav element or #cosy-nav)
        const headerExists = await page.evaluate(() => {
          return !!(document.querySelector('.nav-login') || document.querySelector('#cosy-nav') || document.querySelector('nav') || document.querySelector('header'));
        });

        if (!headerExists) {
          console.error(`❌ [${viewport.name}] ${relativeUrl} is missing header (.nav-login or main nav)!`);
          pageFailed = true;
        }

        // 3. Check Horizontal Scroll (scrollWidth > clientWidth)
        const hasHorizontalScroll = await page.evaluate(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(docEl.scrollWidth, body ? body.scrollWidth : 0);
          const clientWidth = docEl.clientWidth;
          return scrollWidth > clientWidth + 1; // 1px threshold for subpixel rounding
        });

        if (hasHorizontalScroll) {
          console.error(`❌ [${viewport.name}] ${relativeUrl} has horizontal scroll!`);
          pageFailed = true;
        }

        if (pageFailed) {
          totalErrors++;
        } else {
          console.log(`  ✅ [${viewport.name}] ${relativeUrl} passed smoke check`);
        }
      }

      await context.close();
    }
  } finally {
    await browser.close();
    server.close();
  }

  if (totalErrors > 0) {
    console.error(`\n❌ Smoke checks failed with ${totalErrors} failing page checks.`);
    process.exit(1);
  } else {
    console.log('\n✅ All smoke checks passed successfully!');
  }
}

runSmokeTests().catch((err) => {
  console.error('Smoke check script error:', err);
  process.exit(1);
});
