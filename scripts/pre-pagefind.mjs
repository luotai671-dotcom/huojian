import fs from 'fs';

if (fs.existsSync('dist/pagefind')) {
  try {
    fs.rmSync('dist/pagefind', { recursive: true, force: true });
  } catch (e) {
    // Retry once after brief lock release
    try {
      fs.rmSync('dist/pagefind', { recursive: true, force: true });
    } catch (err) {}
  }
}
