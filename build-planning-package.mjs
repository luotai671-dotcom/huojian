import fs from 'fs';
import path from 'path';

const planningDir = path.resolve('planning');
if (!fs.existsSync(planningDir)) {
  fs.mkdirSync(planningDir, { recursive: true });
}

console.log('Planning directory initialized.');
