const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, '..', 'components', 'footer.html');
const ROOT_DIR = path.join(__dirname, '..');

// Helper to list all HTML files in a directory recursively
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      const relPath = path.relative(ROOT_DIR, fullPath).replace(/\\/g, '/');
      results.push(relPath);
    }
  });
  return results;
}

// Check if a page is explicitly excluded
function isExcluded(filePath) {
  if (filePath.startsWith('components/')) return true;
  if (filePath.startsWith('project/')) return true;
  if (filePath.startsWith('templates/')) return true;
  if (filePath.startsWith('vocabulary/')) return true;
  if (filePath.startsWith('print-studio/')) return true;
  if (filePath.startsWith('apps/classroom-sync/')) return true;
  if (filePath.startsWith('practice/types/')) return true;
  if (filePath === 'practice/growing-thread.html') return true;
  if (filePath === 'login.html') return true;
  if (filePath === 'apps/premium-events/index.html') return true;
  if (filePath === 'languages/fr/marathon-prononciation.html') return true;
  if (filePath.startsWith('languages/fr/marathon/')) return true;
  if (filePath === 'blog/design-system.html') return true;
  if (filePath === 'blog/art-contact-sheet.html') return true;
  return false;
}

// Check if a page is included for canonical footer
function isIncluded(filePath) {
  if (isExcluded(filePath)) return false;

  if (filePath === 'index.html') return true;
  if (filePath === 'about/index.html') return true;
  if (filePath === 'comparative/index.html') return true;
  if (filePath === 'placement-quiz.html') return true;
  if (filePath === 'privacy.html') return true;
  if (filePath === '404.html') return true;
  if (filePath === 'apps/index.html') return true;

  if (filePath.startsWith('courses/')) return true;
  if (filePath.startsWith('hybrid/')) return true;

  if (filePath === 'practice/index.html') return true;
  if (filePath === 'practice/cognitive-immersion.html') return true;
  if (filePath === 'practice/progress-dashboard.html') return true;

  if (filePath.startsWith('blog/')) return true;
  if (filePath.startsWith('languages/')) return true;

  return false;
}

// Compute relative path prefix to root
function getPrefix(filePath) {
  const dir = path.dirname(filePath);
  if (dir === '.' || dir === '') return '';
  const depth = dir.split('/').length;
  return '../'.repeat(depth);
}

// Generate relative canonical footer for a file
function generateFooterForFile(templateContent, filePath) {
  const prefix = getPrefix(filePath);
  return templateContent.replace(/(href|src)="([^"]+)"/g, (match, attr, url) => {
    if (
      url.startsWith('http://') ||
      url.startsWith('https://') ||
      url.startsWith('mailto:') ||
      url.startsWith('#') ||
      url.startsWith('//')
    ) {
      return `${attr}="${url}"`;
    }
    return `${attr}="${prefix}${url}"`;
  });
}

function syncFooters() {
  const templateContent = fs.readFileSync(TEMPLATE_PATH, 'utf8').trim();
  const allFiles = getHtmlFiles(ROOT_DIR).sort();

  const countsPerFolder = {};
  const uninsertablePages = [];
  const skippedPages = [];

  allFiles.forEach(filePath => {
    if (!isIncluded(filePath)) {
      skippedPages.push(filePath);
      return;
    }

    const fullPath = path.join(ROOT_DIR, filePath);
    let html = fs.readFileSync(fullPath, 'utf8');
    const expectedFooter = generateFooterForFile(templateContent, filePath);

    const folder = path.dirname(filePath);
    if (!countsPerFolder[folder]) {
      countsPerFolder[folder] = 0;
    }

    const footerRegex = /<footer[\s\S]*?<\/footer>/i;
    if (footerRegex.test(html)) {
      html = html.replace(footerRegex, expectedFooter);
      countsPerFolder[folder]++;
      fs.writeFileSync(fullPath, html, 'utf8');
    } else if (html.includes('</body>')) {
      html = html.replace('</body>', `${expectedFooter}\n</body>`);
      countsPerFolder[folder]++;
      fs.writeFileSync(fullPath, html, 'utf8');
    } else {
      uninsertablePages.push(filePath);
    }
  });

  console.log('=== FOOTER SYNC SUMMARY ===');
  console.log('\nPages changed per folder:');
  Object.keys(countsPerFolder).sort().forEach(folder => {
    console.log(`  - ${folder}: ${countsPerFolder[folder]} page(s)`);
  });

  const totalChanged = Object.values(countsPerFolder).reduce((a, b) => a + b, 0);
  console.log(`\nTotal included pages updated: ${totalChanged}`);

  console.log(`\nSkipped / Excluded pages (${skippedPages.length}):`);
  skippedPages.forEach(p => console.log(`  - ${p}`));

  if (uninsertablePages.length > 0) {
    console.error(`\nFAILED TO INSERT FOOTER IN ${uninsertablePages.length} PAGES:`);
    uninsertablePages.forEach(p => console.error(`  - ${p}`));
    process.exit(1);
  } else {
    console.log('\nFooter could not be inserted into 0 pages (all successful!).');
  }
}

if (require.main === module) {
  syncFooters();
}

module.exports = {
  isIncluded,
  isExcluded,
  generateFooterForFile,
  getHtmlFiles
};
