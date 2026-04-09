const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const input = process.argv[2] || 'alavanca/carrossel-nr1-checklist-47dias.html';
  const output = process.argv[3] || input.replace('.html', '.pdf');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const filePath = path.resolve(input);
  // Read HTML content directly to avoid file:// navigation issues
  const fs = require('fs');
  const html = fs.readFileSync(filePath, 'utf8');
  // Remove external font import to avoid network timeout
  const htmlLocal = html.replace(/@import url\([^)]+\);?\s*/, '');
  await page.setContent(htmlLocal, { waitUntil: 'load', timeout: 15000 });

  // Get all slides
  const slides = await page.$$('.slide');
  console.log(`Found ${slides.length} slides`);

  // Generate one PDF per slide for clean page breaks
  await page.pdf({
    path: output,
    width: '1080px',
    height: '1350px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  console.log(`PDF saved: ${output}`);
  await browser.close();
})();
