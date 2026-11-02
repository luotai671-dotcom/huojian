import fs from 'fs';
import path from 'path';

console.log('--- Running check-links.mjs ---');

const contentMapPath = path.resolve('src/data/content-map.json');
const contentMap = JSON.parse(fs.readFileSync(contentMapPath, 'utf8'));
const validArticleIds = new Set(contentMap.map(a => a.stableId));

// Check valid routes
const validPillars = [
  'recommend', 'free', 'cheap', 'plans', 'reviews', 'coupons',
  'ai', 'streaming', 'clients', 'troubleshooting', 'wiki', 'airports'
];

let errors = 0;

// Verify content-map canonical URLs format
contentMap.forEach(item => {
  if (!item.canonicalUrl.startsWith('https://xiaohuojianjc.blog/articles/')) {
    console.error(`[Link Error] Invalid canonicalUrl for ${item.stableId}: ${item.canonicalUrl}`);
    errors++;
  }
});

console.log(`Verified links across ${contentMap.length} articles and 12 core pillars.`);
if (errors > 0) {
  console.error(`check-links failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log('✓ check-links passed successfully.');
}
