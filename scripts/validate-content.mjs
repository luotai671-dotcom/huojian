import fs from 'fs';
import path from 'path';

console.log('--- Running validate-content.mjs ---');

const contentMapPath = path.resolve('src/data/content-map.json');
if (!fs.existsSync(contentMapPath)) {
  console.error('Error: content-map.json not found!');
  process.exit(1);
}

const contentMap = JSON.parse(fs.readFileSync(contentMapPath, 'utf8'));
const slugs = new Set();
let errors = 0;

contentMap.forEach((item, index) => {
  if (!item.stableId) {
    console.error(`[Error] Article at index ${index} missing stableId`);
    errors++;
  } else if (slugs.has(item.stableId)) {
    console.error(`[Error] Duplicate stableId found: ${item.stableId}`);
    errors++;
  } else {
    slugs.add(item.stableId);
  }

  if (!item.primaryQuestion) {
    console.error(`[Error] Article ${item.stableId} missing primaryQuestion (title)`);
    errors++;
  }
});

console.log(`Verified ${contentMap.length} article metadata entries.`);
if (errors > 0) {
  console.error(`validate-content failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log('✓ validate-content passed successfully.');
}
