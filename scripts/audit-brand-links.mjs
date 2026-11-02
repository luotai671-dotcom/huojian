import fs from 'fs';
import path from 'path';

console.log('--- Running audit-brand-links.mjs ---');

const servicesPath = path.resolve('src/data/services.json');
if (!fs.existsSync(servicesPath)) {
  console.error('Error: services.json not found!');
  process.exit(1);
}

const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
let errors = 0;

if (services.length !== 28) {
  console.error(`[Brand Audit Error] Expected 28 brands, found ${services.length}`);
  errors++;
}

// Check primary brand
const primary = services.find(b => b.isPrimaryRecommendation);
if (!primary || primary.id !== 'sds') {
  console.error('[Brand Audit Error] Primary brand must be 闪电鼠 (id: sds)');
  errors++;
}

// Check promotion links preserve referral codes
const sdsBrand = services.find(b => b.id === 'sds');
if (!sdsBrand.registerUrl.includes('code=m28TvPVX')) {
  console.error('[Brand Audit Error] 闪电鼠 referral code (m28TvPVX) missing or corrupted in registerUrl');
  errors++;
}

const dlyBrand = services.find(b => b.id === 'dalaoyun');
if (!dlyBrand.registerUrl.includes('code=GQ6CL6Km')) {
  console.error('[Brand Audit Error] 大佬云 referral code missing or corrupted in registerUrl');
  errors++;
}

console.log(`Audited ${services.length} airport brands. Lead brand: ${primary.name}. All referral query params intact.`);

if (errors > 0) {
  console.error(`audit-brand-links failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log('✓ audit-brand-links passed successfully.');
}
