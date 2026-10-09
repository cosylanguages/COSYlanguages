/**
 * scripts/capture-blog-screenshots.js
 * Captures screenshots of blog posts before/after changes at 1280x800 and 390x844.
 */

const { chromium } = require('playwright');
const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = 8087;
const ROOT_DIR = path.join(__dirname, '..');

const POSTS = [
  { lang: 'en', slug: 'welcome-to-cosy-blog' },
  { lang: 'ru', slug: 'stop-translating-10-sentence-frames-ru' },
  { lang: 'el', slug: 'stop-translating-10-sentence-frames-el' }
];

const VIEWPORTS = [
  { name: '1280', width: 1280, height: 800 },
  { name: '390', width: 390, height: 844 }
];

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(ROOT_DIR, decodeURIComponent(req.url.split('?')[0]));
      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        const mimeTypes = {
          '.html': 'text/html',
          '.css': 'text/css',
          '.js': 'application/javascript',
          '.json': 'application/json',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.svg': 'image/svg+xml'
        };
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      }
    });

    server.listen(PORT, () => {
      resolve(server);
    });
  });
}

async function capture(mode) {
  const outDir = path.join(ROOT_DIR, 'screenshots', mode);
  fs.mkdirSync(outDir, { recursive: true });

  const server = await startServer();
  const browser = await chromium.launch();

  for (const post of POSTS) {
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({
        viewport: { width: vp.width, height: vp.height }
      });

      const url = `http://localhost:${PORT}/blog/${post.slug}.html`;
      console.log(`Navigating to ${url} at ${vp.width}x${vp.height}...`);
      await page.goto(url, { waitUntil: 'networkidle' });

      const shotPath = path.join(outDir, `${post.lang}_${vp.name}.png`);
      await page.screenshot({ path: shotPath, fullPage: false });
      console.log(`Saved screenshot: ${shotPath} (${fs.statSync(shotPath).size} bytes)`);
      await page.close();
    }
  }

  await browser.close();
  server.close();
}

const mode = process.argv[2] || 'after';
capture(mode).catch(err => {
  console.error('Screenshot capture failed:', err);
  process.exit(1);
});
