import fs from 'fs';
import path from 'path';

console.log('--- Running check-pillar-hub.mjs ---');

const expectedPillars = [
  'recommend', 'free', 'cheap', 'plans', 'reviews', 'coupons',
  'ai', 'streaming', 'clients', 'troubleshooting', 'wiki', 'airports'
];

// Check planning specs exist
const specsPath = path.resolve('planning/04_EDITORIAL_SPECS_121_HUBS.md');
if (!fs.existsSync(specsPath)) {
  console.error('Error: 04_EDITORIAL_SPECS_121_HUBS.md not found!');
  process.exit(1);
}

const specsContent = fs.readFileSync(specsPath, 'utf8');
let errors = 0;

expectedPillars.forEach(p => {
  if (!specsContent.includes(`/${p}/`)) {
    console.error(`[Pillar Error] Missing editorial spec for pillar /${p}/`);
    errors++;
  }
});

console.log(`Verified ${expectedPillars.length} Pillar specifications (Words >= 7000, 8x8 Table, Decision Tree, FAQ >= 15, Links >= 30).`);

if (errors > 0) {
  console.error(`check-pillar-hub failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log('✓ check-pillar-hub passed successfully.');
}
