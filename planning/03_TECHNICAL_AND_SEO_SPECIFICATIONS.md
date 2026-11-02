# xiaohuojianvpn.biz — 技术架构、视觉规范与 SEO/GEO 实施规格书

本规范定义了本站从技术选型、UI 设计系统、合规安全、SEO 结构化数据、AI 引擎抓取优化到 Apache 部署的全套工程标准。

---

## 一、技术栈与工程约束

- **核心框架**：Astro 4.x（TypeScript 强类型支持）
- **内容架构**：Astro Content Collections（Markdown / MDX）
- **本地搜索**：Pagefind（纯静态客户端构建期索引，无服务端数据库依赖）
- **样式方案**：Vanilla CSS 核心变量系统 + Tailwind CSS 实用工具类
- **脚本规范**：原生 ES Modules 驱动，局部交互采用 Astro Islands（`client:load` / `client:idle`）
- **站点地图与聚合**：`@astrojs/sitemap`（自动过滤草稿）与 `@astrojs/rss`
- **图标系统**：`astro-icon` 集成 Lucide Icons
- **宿主环境**：Apache 静态托管（DocumentRoot 指向 `dist/`，基于 `.htaccess` 强化安全与缓存），兼容 Cloudflare Pages / Nginx
- **根目录纯洁性**：项目所有配置文件与源代码直接创建在当前工作区根目录，禁止多余顶层包裹。

---

## 二、视觉系统与设计规范（白底 · 蓝灰 · 卡片式）

### 2.1 整体调优哲学
**Clean Card-based Wiki + Comparison-first Layout + Modern Technical Documentation**。
参考 Vercel Blog、Stripe Docs、MDN Web Docs 及少数派卡片布局。
坚决拒绝深色黑客风、发光阴影堆砌、劣质广告联盟风。

### 2.2 核心 CSS 变量系统 (`src/styles/global.css`)

```css
:root {
  --text-h1: 36px;
  --text-h2: 26px;
  --text-h3: 20px;
  --text-h4: 18px;

  --text-body: 17px;
  --text-body-mobile: 16px;
  --text-lead: 19px;

  --text-label: 14px;
  --text-meta: 13px;
  --text-caption: 12px;

  --leading-tight: 1.3;
  --leading-snug: 1.5;
  --leading-normal: 1.7;
  --leading-relaxed: 1.85;

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI",
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mono: "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;

  --bg-page: #ffffff;
  --bg-subtle: #f8fafc;
  --bg-card: #ffffff;
  --bg-elevated: #f1f5f9;
  --bg-hover: #f8fafc;

  --text-primary: #0f172a;
  --text-body: #334155;
  --text-muted: #64748b;
  --text-faint: #94a3b8;

  --accent: #2563eb;
  --accent-hover: #1d4ed8;
  --accent-light: #60a5fa;
  --accent-subtle: #eff6ff;
  --accent-strong: #1e40af;

  --border-subtle: #f1f5f9;
  --border-default: #e2e8f0;
  --border-strong: #cbd5e1;

  --status-good: #16a34a;
  --status-mid: #d97706;
  --status-low: #dc2626;
  --status-vendor: #8b5cf6;
  --status-measured: #2563eb;
  --status-untested: #94a3b8;

  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.04);
  --shadow-md: 0 4px 12px rgba(15, 23, 42, 0.06);
  --shadow-lg: 0 8px 24px rgba(15, 23, 42, 0.08);
}
```

### 2.3 字号与可读性底线
- 正文：桌面端 17px / 移动端 16px；
- 表格正文：15px；辅助元数据 ≥ 13px；徽章标签 ≥ 12px；
- 字体颜色对比度：浅色背景下正文对比度严格 ≥ 7:1（通过 WCAG AAA 级标准）；
- 数值显示：统一使用 `var(--font-mono)` 并开启 `font-variant-numeric: tabular-nums`，便于表格对齐比较；
- 相邻字号层级差严格 ≥ 2px，防止视觉扁平无序。

---

## 三、合规、安全与变现规范（最高优先级）

1. **站点中立性免责声明**：
   - Header、Footer、关于本站、免责声明页统一声明：“本站为独立的第三方机场选购与使用指南知识库，与任何机场品牌、代理软件官方或第三方商业实体无隶属关系。”
   - 页脚强制提示：“请遵守当地法律法规，本站内容仅供网络技术学习与合法用途参考。”
2. **商业推广透明化**：
   - 所有出站注册/推广链接统一声明：`target="_blank" rel="nofollow sponsored noopener"`；
   - 商业卡片/表格明显处附带：“含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格”；
   - 严格规范外链重定向与安全属性。
3. **数据证据与真实性底线**：
   - 字段标注数据状态：`dataStatus: "vendor" | "measured" | "unverified"`；
   - 品牌方自述内容强制添加“品牌资料显示”前缀；
   - 未核验字段统一渲染“待核验”Badge；
   - **未知数据保持未知状态（显示“未核验”或“未披露”），严禁用 0 或“支持”掩盖事实**；
   - 节点数量、可用地区、线路数量属于独立物理指标，严禁混为一谈。
4. **安全红线禁止项**：
   - 严禁提供真实可用节点地址、节点 IP、真实可用订阅链接；
   - 严禁发布破解绕过、规避审查的操作性教程；
   - 严禁虚构作者头衔、企业资质、评分星级或虚构评测数据。

---

## 四、SEO 与 GEO/AEO 落地规格

### 4.1 Answer-First 模块化架构
针对 Google AI Overviews、ChatGPT Search、Perplexity 等生成式引擎的抓取模式，核心章节严格落实六步式回答：
`问题直接陈述 → 结论性直接答案 (Direct Answer) → 适用条件与人群边界 → 横向比较依据与参数 → 数据来源与实测时效 → 明确的下一步操作建议`。

### 4.2 结构化数据 (JSON-LD) 映射规范

| 页面类型 | 映射 Schema.org 类型 | 属性要求 |
|---|---|---|
| **全站** | `WebSite` | 声明 name, url, description, inLanguage: "zh-CN" |
| **一级/二级/三级** | `CollectionPage`, `BreadcrumbList` | 包含 BreadcrumbList, mainEntity: ItemList |
| **独立文章** | `TechArticle` / `Article`, `BreadcrumbList` | headline, datePublished, dateModified, inLanguage, isAccessibleForFree |
| **品牌档案** | `Service`, `Review` | name, provider, offers, areaServed |
| **客户端工具** | `SoftwareApplication` | applicationCategory, operatingSystem, softwareVersion |

> **重要更新**：Google 已从 2026 年 5 月 7 日起停止在 SERP 中展示 FAQ 富媒体卡片。本站保留 FAQ 内容与可选语义标记，但不将富媒体卡片作为展示保证。

### 4.3 搜索引擎与 AI 爬虫抓取控制 (`public/robots.txt`)
明确支持并区分：
- `Googlebot` 与 `Google-Extended`（支持搜索索引，审慎评估训练数据授权）
- `OAI-SearchBot`（允许 ChatGPT 搜索实时检索，与训练用 GPTBot 区分管理）
- `PerplexityBot`（允许实时索引与引用）
- `Bingbot`（结合 IndexNow API 提交实时增量）

---

## 五、七大自动化工程校验脚本规范

为确保上线前代码、数据与内容 100% 达标，配置 7 个自检脚本于 `scripts/` 并在 `npm run check` 时联动执行：

1. **`validate-content.mjs`**：
   - 检查重复 Slug、缺失 Title/Description、Markdown 损坏、占位残留（如未替换的通用模板）。
2. **`check-links.mjs`**：
   - 扫描 HTML 与 Markdown，发现站内 404 死链、孤立无父级引用页面、空链接 `href="#"`、草稿链接泄漏。
3. **`check-seo.mjs`**：
   - 校验 Title/Description/H1 唯一性、H2 数量 ≥ 5、表格/步骤步骤 ≥ 2、正文字数达标、内链 ≥ 5、FAQ 问答对齐全、图片全部包含 alt。
4. **`check-typography.mjs`**：
   - 扫描 CSS 与行内样式，禁止低于 13px 的字号，检测正文在白色/浅蓝灰背景下的色值对比度必须 ≥ 7:1，检测等宽字体应用。
5. **`check-pillar-hub.mjs`**：
   - 针对 12 个一级 Pillar 页面专项核验：
     - 正文字数 ≥ 7,000 字（目标 7,000–9,500 字）；
     - 巨幅对比表（≥ 8 对象 × 8 维度）；
     - ASCII 决策树（≥ 3 层深度）；
     - 机制深度解析 ≥ 500 字；
     - FAQ ≥ 15 条独家问答；
     - 内链总数 ≥ 30 条；
     - 包含变现直达卡片。
6. **`check-content-map.mjs`**：
   - 对照 `content-map.json` 检查 432 篇文章的稳定 ID 与 URL 无字面重复；
   - 检查 553 个规划节点唯一性，无悬空父级目标；
   - 确保草稿状态页面不进入站点地图或推荐卡片。
7. **`audit-brand-links.mjs`**：
   - 扫描所有品牌卡片与注册按钮，确保出站链接严格包含 `rel="nofollow sponsored noopener"` 与商业合作披露；
   - 验证 28 家品牌的邀请码查询参数完好无损。

---

## 六、Apache 静态部署规范 (`public/.htaccess`)

配置全站强制 HTTPS、www 重定向、无斜杠规范化、安全响应头（X-Content-Type-Options, Referrer-Policy, Permissions-Policy）、Gzip/Brotli 压缩以及静态静态资源 1 年期长效缓存。
