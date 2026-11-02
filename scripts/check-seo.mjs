import fs from 'fs';
import path from 'path';

console.log('--- Running check-seo.mjs ---');

const contentMapPath = path.resolve('src/data/content-map.json');
const contentMap = JSON.parse(fs.readFileSync(contentMapPath, 'utf8'));

let errors = 0;
const titles = new Set();

contentMap.forEach(item => {
  if (titles.has(item.primaryQuestion)) {
    console.error(`[SEO Error] Duplicate Title: ${item.primaryQuestion}`);
    errors++;
  } else {
    titles.add(item.primaryQuestion);
  }

  if (item.primaryQuestion.length < 5) {
    console.error(`[SEO Error] Title too short: ${item.primaryQuestion}`);
    errors++;
  }
});

console.log(`Verified unique Title / H1 entries for ${contentMap.length} articles.`);
if (errors > 0) {
  console.error(`check-seo failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log('✓ check-seo passed successfully.');
}
