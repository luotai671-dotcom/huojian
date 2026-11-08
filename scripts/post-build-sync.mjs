import fs from 'fs';
import path from 'path';

console.log('--- Running post-build-sync.mjs ---');

// 1. 复制 dist/article/index.html 到 dist/article.html
if (fs.existsSync('dist/article/index.html')) {
  fs.copyFileSync('dist/article/index.html', 'dist/article.html');
  console.log('✓ Created dist/article.html compatibility file.');
}

// 1.1 复制 8 篇专属评测页到 .html 兼容路径
const reviewSlugs = [
  'shandian-review', 'liulian-review', 'dalao-review', 'yunjiexian-review',
  'shenxing-review', 'huanqiu-review', 'jilian-review', 'guangnian-review'
];
reviewSlugs.forEach(slug => {
  const dirFile = path.join('dist/reviews', slug, 'index.html');
  const flatFile = path.join('dist/reviews', `${slug}.html`);
  if (fs.existsSync(dirFile)) {
    fs.copyFileSync(dirFile, flatFile);
  }
});
console.log('✓ Synced 8 review .html compatibility files.');

// 1.1.1 复制 3 篇客户端进阶长文到 .html 兼容路径
const advancedTutorialSlugs = [
  'clash-verge-rev-advanced-tuning-guide',
  'shadowrocket-advanced-rules-https-mitm-guide',
  'sing-box-cross-platform-full-config-tutorial'
];
advancedTutorialSlugs.forEach(slug => {
  const dirFile = path.join('dist/articles', slug, 'index.html');
  const flatFile = path.join('dist/articles', `${slug}.html`);
  if (fs.existsSync(dirFile)) {
    fs.copyFileSync(dirFile, flatFile);
  }
});
console.log('✓ Synced 3 advanced client tutorial .html compatibility files.');

// 1.2 复制 public/go.html 到 dist/go.html 与根目录 go.html
if (fs.existsSync('public/go.html')) {
  if (fs.existsSync('dist')) {
    fs.copyFileSync('public/go.html', 'dist/go.html');
  }
  fs.copyFileSync('public/go.html', 'go.html');
  console.log('✓ Synced go.html redirector.');
}

// 1.3 复制 public/.htaccess 和 public/_redirects 到 dist/ 及根目录
if (fs.existsSync('public/.htaccess')) {
  if (fs.existsSync('dist')) {
    fs.copyFileSync('public/.htaccess', 'dist/.htaccess');
  }
  fs.copyFileSync('public/.htaccess', '.htaccess');
  console.log('✓ Synced .htaccess configuration (both dist/ and root).');
}
if (fs.existsSync('public/_redirects')) {
  if (fs.existsSync('dist')) {
    fs.copyFileSync('public/_redirects', 'dist/_redirects');
  }
  fs.copyFileSync('public/_redirects', '_redirects');
  console.log('✓ Synced _redirects configuration (both dist/ and root).');
}

// 2. 复制 dist/ 关键元数据与静态根文件到项目根目录（适配 cPanel / 老薛主机根目录直挂）
const rootSyncFiles = [
  'robots.txt',
  'favicon.svg',
  '404.html',
  'article.html',
  'sitemap-index.xml',
  'sitemap-0.xml',
  'rss.xml',
  'llms.txt'
];
rootSyncFiles.forEach(file => {
  const distFile = path.join('dist', file);
  if (fs.existsSync(distFile)) {
    fs.copyFileSync(distFile, file);
    console.log(`✓ Synced dist/${file} to root ${file}.`);
  }
});

// 3. 复制 dist/_astro 到根目录 _astro
if (fs.existsSync('dist/_astro')) {
  fs.cpSync('dist/_astro', '_astro', { recursive: true });
  console.log('✓ Synced dist/_astro to root _astro/ for local preview.');
}

// 3.1 复制 dist/pagefind 到根目录 pagefind（适配根目录直挂环境下的搜索功能）
if (fs.existsSync('dist/pagefind')) {
  fs.cpSync('dist/pagefind', 'pagefind', { recursive: true });
  console.log('✓ Synced dist/pagefind to root pagefind/ for full-text search.');
}

// 4. 遍历并优化 dist 目录下所有 HTML 文件的资源引用为相对路径（确保本地双击与 HTTP 双兼容）
function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

if (fs.existsSync('dist')) {
  const htmlFiles = walkDir('dist');
  let processedCount = 0;

  for (const filePath of htmlFiles) {
    let content = fs.readFileSync(filePath, 'utf8');
    const relFromDist = path.relative('dist', filePath);
    const depth = relFromDist.split(path.sep).length - 1;
    const relPrefix = depth === 0 ? './' : '../'.repeat(depth);

    // 将绝对静态资源引用转换为相对于当前页面的相对路径
    content = content.replace(/href="\/_astro\//g, `href="${relPrefix}_astro/`);
    content = content.replace(/src="\/_astro\//g, `src="${relPrefix}_astro/`);
    content = content.replace(/href="\/favicon\.svg"/g, `href="${relPrefix}favicon.svg"`);
    content = content.replace(/src="\/favicon\.svg"/g, `src="${relPrefix}favicon.svg"`);
    content = content.replace(/href="\/pagefind\//g, `href="${relPrefix}pagefind/`);
    content = content.replace(/src="\/pagefind\//g, `src="${relPrefix}pagefind/`);

    // 清除可能遗留的旧版弹窗/红条代码
    content = content.replace(/alert\('【提示】本地直接打开时无法解析根路径链接[\s\S]*?;\s*\}\s*\}, true\);/g, '');
    content = content.replace(/var bar = document\.createElement\('div'\);[\s\S]*?document\.body\.prepend\(bar\);/g, '');

    fs.writeFileSync(filePath, content, 'utf8');
    processedCount++;
  }
  console.log(`✓ Processed ${processedCount} HTML files in dist/ for relative asset paths.`);
}

// 5. 核心修复：根目录 index.html 直接复制 dist/index.html 真实生产首页，彻底消除 ./dist/ 递归重定向死循环
if (fs.existsSync('dist/index.html')) {
  let rootHtml = fs.readFileSync('dist/index.html', 'utf8');
  // 确保根目录 index.html 的资源路径正确指向根目录下的 _astro 与 favicon
  rootHtml = rootHtml.replace(/href="(\.\.\/)+_astro\//g, 'href="./_astro/');
  rootHtml = rootHtml.replace(/src="(\.\.\/)+_astro\//g, 'src="./_astro/');
  rootHtml = rootHtml.replace(/href="(\.\.\/)+favicon\.svg"/g, 'href="./favicon.svg"');
  rootHtml = rootHtml.replace(/src="(\.\.\/)+favicon\.svg"/g, 'src="./favicon.svg"');
  fs.writeFileSync('index.html', rootHtml, 'utf8');
  console.log('✓ Root index.html synced directly with full production homepage (zero loop redirects).');
}
