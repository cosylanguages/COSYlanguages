const fs = require('fs');
const path = require('path');
const { isIncluded, generateFooterForFile, getHtmlFiles } = require('./sync-footer.js');

const TEMPLATE_PATH = path.join(__dirname, '..', 'components', 'footer.html');
const ROOT_DIR = path.join(__dirname, '..');

function checkFooters() {
  const templateContent = fs.readFileSync(TEMPLATE_PATH, 'utf8').trim();
  const allFiles = getHtmlFiles(ROOT_DIR).sort();

  let hasErrors = false;
  let totalChecked = 0;

  allFiles.forEach(filePath => {
    if (!isIncluded(filePath)) {
      return;
    }

    totalChecked++;
    const fullPath = path.join(ROOT_DIR, filePath);
    const html = fs.readFileSync(fullPath, 'utf8');
    const expectedFooter = generateFooterForFile(templateContent, filePath);

    const footerRegex = /<footer[\s\S]*?<\/footer>/i;
    const match = html.match(footerRegex);

    if (!match) {
      console.error(`[ERROR] Missing <footer> in included page: ${filePath}`);
      hasErrors = true;
      return;
    }

    const actualFooter = match[0].trim();
    if (actualFooter !== expectedFooter) {
      console.error(`[ERROR] Footer mismatch in: ${filePath}`);
      console.error('Expected:\n', expectedFooter);
      console.error('Actual:\n', actualFooter);
      hasErrors = true;
    }
  });

  if (hasErrors) {
    console.error(`\nFooter check FAILED for one or more pages.`);
    process.exit(1);
  } else {
    console.log(`\nFooter check PASSED! All ${totalChecked} included pages match the canonical footer.`);
  }
}

if (require.main === module) {
  checkFooters();
}
