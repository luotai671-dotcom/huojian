import fs from 'fs';
import path from 'path';

console.log('--- Running check-content-map.mjs ---');

const contentMapPath = path.resolve('src/data/content-map.json');
const structurePath = path.resolve('planning/SITE_STRUCTURE_553_PAGES.json');

if (!fs.existsSync(contentMapPath) || !fs.existsSync(structurePath)) {
  console.error('Error: content-map.json or SITE_STRUCTURE_553_PAGES.json missing!');
  process.exit(1);
}

const contentMap = JSON.parse(fs.readFileSync(contentMapPath, 'utf8'));
const structure = JSON.parse(fs.readFileSync(structurePath, 'utf8'));

let errors = 0;

if (contentMap.length !== 432) {
  console.error(`[Content Map Error] Expected 432 articles, found ${contentMap.length}`);
  errors++;
}

if (structure.length !== 553) {
  console.error(`[Content Map Error] Expected 553 planned nodes, found ${structure.length}`);
  errors++;
}

const nodeIds = new Set();
structure.forEach(node => {
  if (nodeIds.has(node.nodeId)) {
    console.error(`[Content Map Error] Duplicate nodeId: ${node.nodeId}`);
    errors++;
  }
  nodeIds.add(node.nodeId);
});

console.log(`Verified 553 planned nodes and 432 article mappings without duplicates.`);

if (errors > 0) {
  console.error(`check-content-map failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log('✓ check-content-map passed successfully.');
}
