# xiaohuojianjc.blog 生产环境部署指南 (Apache / Nginx / Cloudflare Pages)

本站点为基于 **Astro 4.x** 构建的全静态高阶中文知识库，构建产物位于 `dist/` 目录。以下为生产环境的完整部署规范与操作指引。

---

## 目录
1. [Apache 静态部署（推荐与默认目标）](#1-apache-静态部署推荐与默认目标)
2. [Apache 核心模块与 .htaccess 验证](#2-apache-核心模块与-htaccess-验证)
3. [Nginx 部署备选配置](#3-nginx-部署备选配置)
4. [Cloudflare Pages 静态托管配置](#4-cloudflare-pages-静态托管配置)
5. [Pagefind 全文搜索与静态资源路由](#5-pagefind-全文搜索与静态资源路由)
6. [部署前验证与自检清单](#6-部署前验证与自检清单)

---

## 1. Apache 静态部署（推荐与默认目标）

站点已针对标准 Apache 2.4+ 静态主机（如 cPanel、虚拟主机、自建云服务器 httpd）完成适配。

### 1.1 DocumentRoot 设定
将 Web 服务器的 `DocumentRoot` 直接指向编译输出目录 `dist/`：

```apache
<VirtualHost *:80>
    ServerName xiaohuojianjc.blog
    ServerAlias www.xiaohuojianjc.blog
    DocumentRoot "/var/www/xiaohuojianjc.blog/dist"

    <Directory "/var/www/xiaohuojianjc.blog/dist">
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # 强制 301 重定向至 HTTPS
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://xiaohuojianjc.blog/$1 [R=301,L]
</VirtualHost>

<VirtualHost *:443>
    ServerName xiaohuojianjc.blog
    ServerAlias www.xiaohuojianjc.blog
    DocumentRoot "/var/www/xiaohuojianjc.blog/dist"

    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/xiaohuojianjc.blog/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/xiaohuojianjc.blog/privkey.pem

    <Directory "/var/www/xiaohuojianjc.blog/dist">
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### 1.2 必备 Apache 模块
请确保 Apache 已加载以下模块（Debian/Ubuntu 执行 `a2enmod`，RHEL/CentOS 检查 `httpd.conf`）：
- `mod_rewrite`：URL 规范化、斜杠补全、强跳 HTTPS 与规范域名
- `mod_headers`：安全响应标头（HSTS、X-Content-Type-Options、CSP等）
- `mod_expires`：静态资源客户端持久缓存（Cache-Control 与 Expires）
- `mod_deflate` / `mod_brotli`：文本资源压缩传输（HTML、CSS、JS、JSON、SVG）
- `mod_mime`：正确分配 MIME 类型（特别是 `.wasm` 与 `.json`）

在 Ubuntu/Debian 启用命令：
```bash
sudo a2enmod rewrite headers expires deflate mime ssl
sudo systemctl restart apache2
```

---

## 2. Apache 核心模块与 .htaccess 验证

项目内置的 `public/.htaccess` 文件在 `npm run build` 时会自动复制到 `dist/.htaccess`。
该文件包含以下关键防护与性能优化指令：

### 2.1 规范域名与 HTTPS 强制跳（301）
- 自动消除 `www.`，统一收敛至裸域 `https://xiaohuojianjc.blog`
- 消除重复路径斜杠并补全目录末尾斜杠

### 2.2 资源缓存策略 (mod_expires)
- HTML 文档：`max-age=3600`（1小时协商缓存）
- CSS / JS / WebP / SVG / WOFF2 字体：`max-age=31536000`（1年强缓存，配合 Astro 文件名 hash）
- Pagefind 索引数据与 WASM：`max-age=86400`（1天）

### 2.3 安全响应头 (mod_headers)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`

### 2.4 404 自定义错误页
```apache
ErrorDocument 404 /404.html
```

---

## 3. Nginx 部署备选配置

若服务器使用 Nginx 反向代理或直接提供静态服务，可使用以下 `server` 块：

```nginx
server {
    listen 80;
    server_name xiaohuojianjc.blog www.xiaohuojianjc.blog;
    return 301 https://xiaohuojianjc.blog$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.xiaohuojianjc.blog;
    ssl_certificate /etc/letsencrypt/live/xiaohuojianjc.blog/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/xiaohuojianjc.blog/privkey.pem;
    return 301 https://xiaohuojianjc.blog$request_uri;
}

server {
    listen 443 ssl http2;
    server_name xiaohuojianjc.blog;

    root /var/www/xiaohuojianjc.blog/dist;
    index index.html;

    ssl_certificate /etc/letsencrypt/live/xiaohuojianjc.blog/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/xiaohuojianjc.blog/privkey.pem;

    # Gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    # 安全响应头
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # 静态资源强缓存 (带 hash)
    location ~* \.(?:css|js|woff2?|svg|png|jpg|jpeg|gif|ico|webp)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }

    # Pagefind WASM 与 搜索索引支持
    location /pagefind/ {
        expires 1d;
        add_header Cache-Control "public, max-age=86400";
        types {
            application/wasm wasm;
        }
    }

    # 页面路由与 404
    location / {
        try_files $uri $uri/ /index.html =404;
    }

    error_page 404 /404.html;
}
```

---

## 4. Cloudflare Pages 静态托管配置

若迁移或备份至 Cloudflare Pages：
1. **构建设置**：
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js Version: `20.x` 或以上 (可在环境变量中设置 `NODE_VERSION = 20.18.0`)
2. **_headers 与 _redirects**：
   - Astro 的 Cloudflare 集成可直接复用 `public/_headers` 与 `public/_redirects`（如有需要）。
3. **安全与 WAF**：
   - 开启 Automatic HTTPS Rewrites、Always Use HTTPS、Brotli 压缩、HTTP/3 (with QUIC)。

---

## 5. Pagefind 全文搜索与静态资源路由

本站点在客户端使用轻量全文静态搜索引擎 **Pagefind**：
- 在 `npm run build` 流程中，Astro 构建完成后自动执行 `pagefind --site dist`。
- 生成的索引文件存储于 `dist/pagefind/`，包括 `pagefind.js`、`pagefind-ui.js`、`pagefind-ui.css` 及分片索引。
- **MIME 类型支持**：服务器必须正确识别 `.wasm` 为 `application/wasm`。在 Apache 中，`public/.htaccess` 已内置：
  ```apache
  AddType application/wasm .wasm
  ```
- **搜索测试**：访问 `https://xiaohuojianjc.blog/search/` 即可直接进行毫秒级端侧分词检索，无需任何后端服务或数据库支撑。

---

## 6. 部署前验证与自检清单

在执行 `git push` 或通过 rsync/sftp 同步 `dist/` 前，请本地运行以下完整校验：

```bash
# 1. 运行 7 项自动化架构与内容校验脚本
npm run check

# 2. 运行完整生产构建与静态索引
npm run build

# 3. 校验 dist 目录产物规模
# 预期：590 个 HTML 文件，dist/pagefind 存在，dist/sitemap-index.xml 存在，dist/.htaccess 存在
```

### 生产线上验收检查项：
1. 访问 `http://xiaohuojianjc.blog` 应 301 永久重定向至 `https://xiaohuojianjc.blog/`。
2. 访问 `https://www.xiaohuojianjc.blog` 应 301 重定向至 `https://xiaohuojianjc.blog/`。
3. 检查响应头包含 `X-Content-Type-Options: nosniff`。
4. 访问 `/sitemap-index.xml` 与 `/rss.xml` 确认 XML 结构完好无 404。
5. 访问 `/search/` 输入“闪电鼠”、“流媒体”、“小火箭”验证检索结果与跳转链接。
6. 点击推荐服务链接，确认带有 `target="_blank" rel="nofollow sponsored noopener noreferrer"` 且优惠码 `sd88` 准确传递。
