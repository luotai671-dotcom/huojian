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

// 1.2 复制 public/go.html 到 dist/go.html
if (fs.existsSync('public/go.html') && fs.existsSync('dist')) {
  fs.copyFileSync('public/go.html', 'dist/go.html');
  console.log('✓ Synced dist/go.html redirector.');
}

// 1.3 复制 public/.htaccess 和 public/_redirects 到 dist/
if (fs.existsSync('public/.htaccess') && fs.existsSync('dist')) {
  fs.copyFileSync('public/.htaccess', 'dist/.htaccess');
  console.log('✓ Synced dist/.htaccess configuration.');
}
if (fs.existsSync('public/_redirects') && fs.existsSync('dist')) {
  fs.copyFileSync('public/_redirects', 'dist/_redirects');
  console.log('✓ Synced dist/_redirects configuration.');
}

// 2. 复制 dist/robots.txt 到根目录 robots.txt
if (fs.existsSync('dist/robots.txt')) {
  fs.copyFileSync('dist/robots.txt', 'robots.txt');
  console.log('✓ Synced dist/robots.txt to root robots.txt.');
}

// 3. 复制 dist/_astro 到根目录 _astro
if (fs.existsSync('dist/_astro')) {
  fs.cpSync('dist/_astro', '_astro', { recursive: true });
  console.log('✓ Synced dist/_astro to root _astro/ for local preview.');
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

// 5. 优化根目录 index.html：直接静默秒级跳转至 dist/index.html，避免根目录与子页面路径割裂
const rootIndexHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>小火箭测评 — 本地知识库</title>
  <script>
    window.location.replace('./dist/index.html' + window.location.search + window.location.hash);
  </script>
  <meta http-equiv="refresh" content="0;url=./dist/index.html">
</head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;text-align:center;padding:80px 20px;color:#334155;background:#f8fafc;">
  <h2 style="margin-bottom:12px;font-size:22px;color:#0f172a;">正在进入小火箭测评知识库...</h2>
  <p style="font-size:15px;color:#64748b;">如未自动跳转，请 <a href="./dist/index.html" style="color:#2563eb;text-decoration:underline;font-weight:600;">点击此处直接进入</a></p>
</body>
</html>
`;

fs.writeFileSync('index.html', rootIndexHtml, 'utf8');
console.log('✓ Root index.html configured to redirect cleanly to dist/index.html.');
