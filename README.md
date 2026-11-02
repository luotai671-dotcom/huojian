# 小火箭测评 (xiaohuojianvpn.biz)

> **以机场选型为核心，用品牌资料、套餐计算、真实评测、使用教程和网络原理支撑选择的中文知识库。**
> 独立的第三方选购与使用指南站，与任何机场品牌或软件无隶属关系。

---

## 目录
1. [项目概况](#1-项目概况)
2. [技术架构与栈选型](#2-技术架构与栈选型)
3. [站点规模与页面组织 (590 页面)](#3-站点规模与页面组织-590-页面)
4. [项目目录结构](#4-项目目录结构)
5. [数据模型与核心资产](#5-数据模型与核心资产)
6. [设计系统与排版标准](#6-设计系统与排版标准)
7. [本地开发与构建命令](#7-本地开发与构建命令)
8. [自动化校验脚本 (7 项架构检查)](#8-自动化校验脚本-7-项架构检查)
9. [生产环境部署 (Apache / Nginx / Cloudflare)](#9-生产环境部署-apache--nginx--cloudflare)
10. [合规与商业化披露规范](#10-合规与商业化披露规范)

---

## 1. 项目概况

- **站点名称**：小火箭测评
- **官方域名**：`https://xiaohuojianvpn.biz`
- **语言定位**：简体中文 (zh-CN)
- **核心定位**：提供机场横评比对、套餐性价比计算、网络底层协议原理（BGP/IEPL/IPLC）、客户端配置（Shadowrocket/Clash/Sing-box）及日常故障排除指南。
- **构建输出**：全静态编译生成 590 个 HTML 页面（纯静态文件），无数据库或后端运行时依赖。

---

## 2. 技术架构与栈选型

- **核心框架**：[Astro 4.x](https://astro.build/) (`4.16.19`) - 针对内容密集型知识库的最佳全静态生成器，零客户端 JavaScript 运行时开销。
- **语言**：TypeScript (`5.7.3`) + ES Modules (`.mjs`)。
- **样式方案**：Vanilla CSS 架构 + Tailwind CSS (`3.4.17`)，严格落实 WCAG AAA 对比度标准与排版规范。
- **全文搜索引擎**：[Pagefind](https://pagefind.app/) (`1.5.2`) - 客户端 WASM 静态索引，支持中文分词与毫秒级即时检索。
- **SEO 与订阅源**：
  - `@astrojs/sitemap` (`3.1.6`)：生成分卷式 `sitemap-index.xml` 与 `sitemap-0.xml`。
  - `@astrojs/rss` (`4.0.11`)：自动提取 432 篇终极测评文章产出 `rss.xml`。
- **图标系统**：`astro-icon` (`1.1.5`)，纯内联 SVG 渲染，无字体包加载阻塞。

---

## 3. 站点规模与页面组织 (590 页面)

本知识库采用高度严谨的金字塔与蜂窝互联网络内容拓扑结构：

```
                    ┌────────────────────────┐
                    │      首页 (1 页面)      │
                    └───────────┬────────────┘
                                │
        ┌───────────────────────┴───────────────────────┐
        │                                               │
┌───────▼────────────────┐                     ┌────────▼───────────────┐
│  12 个 Pillar 枢纽页   │                     │  28 个机场品牌档案页   │
│ (7,000~9,500字/8x8表) │                     │ (/airports/{brand}/)   │
└───────┬────────────────┘                     └────────────────────────┘
        │
┌───────▼────────────────┐
│   36 个 Topic 专题页   │
└───────┬────────────────┘
        │
┌───────▼────────────────┐
│   72 个 Cluster 聚合页 │
└───────┬────────────────┘
        │
┌───────▼───────────────────────────────────────────────┐
│              432 篇终极测评文章 (Stable IDs)           │
│  (art-rec-001 ~ art-apt-036, Answer卡片, 24对蜂窝互联) │
└───────────────────────────────────────────────────────┘
```

### 页面清单分类总计：
1. **首页**：`1` 个 (`/`)
2. **一级 Pillar Hub 枢纽页**：`12` 个 (`/recommend/`, `/free/`, `/cheap/`, `/plans/`, `/reviews/`, `/coupons/`, `/ai/`, `/streaming/`, `/clients/`, `/troubleshooting/`, `/wiki/`, `/airports/`)
3. **二级 Topic 专题页**：`36` 个 (`/[pillar]/[topic]/`)
4. **三级 Cluster 聚合页**：`72` 个 (`/[pillar]/[topic]/[cluster]/`)
5. **四级深度测评文章**：`432` 篇 (`/articles/[stableId]/`)
6. **品牌独立专页**：`28` 个 (`/airports/[brandSlug]/`)
7. **基础工具与合规页面**：`9` 个 (`/search/`, `/404.html`, `/about/`, `/editorial-policy/`, `/editorial-standards/`, `/promotion-disclosure/`, `/privacy/`, `/disclaimer/`, `/contact/`)
8. **综合总计**：**590 个 HTML 页面**。

---

## 4. 项目目录结构

```
├── planning/                   # 站点规划与架构包 (553页面JSON与规范文档)
│   ├── 01_SITE_STRUCTURE_AND_URL_MAP.md
│   ├── 02_HONEYCOMB_INTERNAL_LINKING_MAP.md
│   ├── 03_TECHNICAL_AND_SEO_SPECIFICATIONS.md
│   ├── 04_EDITORIAL_SPECS_121_HUBS.md
│   ├── SITE_STRUCTURE_553_PAGES.json
│   └── README.md
├── public/                     # 静态资源与服务器配置
│   ├── .htaccess               # Apache 伪静态、HTTPS、强缓存与安全响应头
│   ├── favicon.svg             # 网站标靶 SVG
│   ├── robots.txt              # 搜索引擎机器人抓取规则
│   └── llms.txt                # GEO/AEO 智能体大模型读取协议
├── scripts/                    # 7 项架构与质量保障自动化验证脚本
│   ├── audit-brand-links.mjs   # 品牌商业外链与参数审计
│   ├── check-content-map.mjs   # 内容映射表 553 节点完整性校验
│   ├── check-links.mjs         # 蜂窝内链与导航连通性校验
│   ├── check-pillar-hub.mjs    # 12 个核心 Pillar 规格校验 (8x8表/树/FAQ/字数)
│   ├── check-seo.mjs           # SEO Title/H1 唯一性查重
│   ├── check-typography.mjs    # 设计规范与对比度无障碍校验
│   └── validate-content.mjs    # 432 篇文章内容结构完整性测试
├── src/
│   ├── components/             # 卡片式 UI 组件体系
│   │   ├── AllTopicsDropdown.astro # 头部“全部专题”3分组下拉菜单
│   │   ├── Answer.astro        # AEO 快速精准直答卡片
│   │   ├── ArticleCard.astro   # 文章预览卡片
│   │   ├── BrandBlock.astro    # 品牌横评模块
│   │   ├── Breadcrumbs.astro   # 5 级面包屑与 BreadcrumbList 微数据
│   │   ├── Callout.astro       # 提示/警告/重点强调区块
│   │   ├── CardGrid.astro      # 自适应响应式网格
│   │   ├── CommercialCard.astro# 商业化推荐卡片 (带返利标识)
│   │   ├── CommercialDisclosure.astro # 商业透明度合规声明
│   │   ├── ComparisonTable.astro # 8x8 高密度横向滑动对比表格
│   │   ├── DataStatusBadge.astro # vendor/measured/unverified 状态标牌
│   │   ├── DecisionTree.astro  # 3 层场景决策树
│   │   ├── FAQAccordion.astro  # 交互式 FAQ 折叠面板
│   │   ├── Footer.astro        # 5 分组全局页脚与版权中立声明
│   │   ├── Header.astro        # 7 一级栏目头部主导航
│   │   ├── SEOHead.astro       # SEO Meta、OpenGraph、Twitter 及 Schema.org
│   │   └── Step.astro          # 步骤拆解指南条目
│   ├── data/                   # 核心结构化数据层
│   │   ├── claims.json         # 厂商宣称与边界事实
│   │   ├── content-map.json    # 432 篇文章完整元数据映射表
│   │   ├── coupons.json        # 优惠券与折扣码数据
│   │   ├── navigation.ts       # 全站头部与页脚导航注册表
│   │   ├── pillar-content-store.ts # 12 个核心 Pillar 深度内容仓储
│   │   ├── plans.json          # 机场各档位套餐与价格计算数据
│   │   ├── redirects.ts        # 路由重定向与历史迁移映射
│   │   ├── services.json       # 28 家机场品牌全量指标与返利参数库
│   │   ├── sources.json        # 测评数据测速源与测试环境记录
│   │   └── tests.json          # 节点延迟、丢包率与测速样本
│   ├── layouts/                # 页面模板布局
│   │   ├── ArticleLayout.astro # 测评文章标准布局 (含目录、AEO、蜂窝推荐)
│   │   ├── BaseLayout.astro    # 基础 HTML 框架 (集成 Header/Footer/SEO)
│   │   ├── ClusterLayout.astro # Cluster 聚合页布局 (带推荐顺序指南)
│   │   └── PillarLayout.astro  # 核心 Pillar 枢纽页布局
│   ├── lib/
│   │   └── related.ts          # 蜂窝网状互联算法与跨主题深度推荐引擎
│   ├── pages/                  # 静态路由目录 (含动态映射)
│   │   ├── [pillar]/           # 动态映射 36 个 Topic 与 72 个 Cluster
│   │   ├── airports/           # 28 个品牌档案专页
│   │   ├── articles/           # 432 篇终极测评文章页面
│   │   ├── {12 pillars}/       # 12 个 Pillar 核心独立枢纽页
│   │   ├── index.astro         # 首页 (高密度信息中枢)
│   │   ├── search.astro        # 全文搜索页面
│   │   ├── rss.xml.ts          # RSS 订阅源生成器
│   │   └── {policy pages}.astro# 法律合规与关于我们政策页
│   └── styles/                 # 样式系统
│       ├── article.css         # 文章排版与排版律
│       ├── card.css            # 卡片系统阴影与边框过渡
│       ├── global.css          # 全局配色变量与重置规范
│       └── table.css           # 8x8 响应式水平滑动表格样式
├── deploy.md                   # 生产环境 Apache/Nginx 部署规范
├── REVIEW_CHECKLIST.md         # 40 项硬性验收指标审计自查报告
├── astro.config.mjs            # Astro 配置文件
├── tailwind.config.mjs         # Tailwind CSS 配置
└── package.json                # 项目依赖清单
```

---

## 5. 数据模型与核心资产

### 5.1 机场品牌与核心商业推荐 (`services.json`)
收录全部 28 家业界知名机场品牌。以 **闪电鼠 (sds)** 为首位主推品牌，全站完整保留返利追踪代码与专属优惠码：
- **主推品牌**：闪电鼠 (shandian.pro)
- **返利链接**：`https://shandian.pro/#/register?code=m28TvPVX`
- **专属优惠码**：`sd88`
- **合规参数**：全部 28 家品牌链接统一注入 `target="_blank" rel="nofollow sponsored noopener"`。

### 5.2 数据状态可信度标牌 (`DataStatusBadge`)
所有性能指标与节点说明均打上清晰标记：
1. `vendor`（厂商资料）：机场官方宣称的带宽、节点数或特权。
2. `measured`（实测数据）：小火箭测评实验室真实测试环境测得的延迟、抖动与丢包。
3. `unverified`（待验证）：缺乏多地监测节点交叉核实的数据。

---

## 6. 设计系统与排版标准

- **背景与色彩体系**：纯白底色 (`#ffffff`)，搭配 Slate 灰度系列层次（正文采用深沉的 `#0f172a` 与 `#1e293b`），全站文字视觉对比度达到 **18.2:1**，远超 WCAG AAA 7:1 规范。
- **正文字号律**：
  - 桌面端正文：`1.0625rem` (17px)，行高 `1.75`。
  - 移动端正文：`1rem` (16px)，行高 `1.65`。
  - 数据表格：`15px`，数字列采用等宽排版 `tabular-nums`。
- **卡片式质感**：细微的 `border: 1px solid #e2e8f0`，悬浮时轻微抬升阴影 `shadow-sm` 至 `shadow-md`。

---

## 7. 本地开发与构建命令

> **注意**：Windows 环境若遇到 PowerShell 脚本执行策略拦截，请使用 `npm.cmd` 或 `npx.cmd` 执行。

```bash
# 安装依赖
npm.cmd install

# 启动本地实时热重载开发服务器 (默认端口 4321)
npm.cmd run dev

# 运行 7 项自动化架构与内容自检脚本
npm.cmd run check

# 执行生产环境静态全量编译 (生成 590 页面并建立 Pagefind 索引)
npm.cmd run build

# 本地预览编译后的 dist/ 静态目录
npm.cmd run preview
```

---

## 8. 自动化校验脚本 (7 项架构检查)

在 `scripts/` 目录中内置了 7 个独立且互不依赖的质量检验工具，在持续集成中通过 `npm run check` 串联执行：

1. **`validate-content.mjs`**：检验全部 432 篇文章是否具备合法的标题、分类、描述与结构。
2. **`check-links.mjs`**：扫描全站导航树与 24 对蜂窝深链，杜绝死链。
3. **`check-seo.mjs`**：检验 432 篇文章的 Title 与 H1 标签，保证全网 **100% 唯一无重复**。
4. **`check-typography.mjs`**：检查 CSS 变量，确保桌面字号 ≥ 17px、对比度 ≥ 7:1。
5. **`check-pillar-hub.mjs`**：检查 12 个核心 Pillar，确保正文字数、8x8 表格、决策树、15 个 FAQ、30+ 链接全部就位。
6. **`check-content-map.mjs`**：核验 553 个规划节点与 432 篇文章的一一对应关系，杜绝冲突。
7. **`audit-brand-links.mjs`**：审计 28 个机场品牌推荐链接，确保 `code=m28TvPVX` 与合规属性完整。

---

## 9. 生产环境部署 (Apache / Nginx / Cloudflare)

构建完成后的全部产物位于根目录下的 `dist/`。

- **Apache 静态主机部署**：将 Web 虚拟主机的 `DocumentRoot` 指向 `dist/` 即可。`public/.htaccess` 会在构建时自动输出到 `dist/.htaccess`，已预置 HTTPS 强制 301 重定向、非 www 规范化、长效静态缓存及安全响应头。
- **详细部署指引与配置模板**：参见根目录下的 [`deploy.md`](./deploy.md)。

---

## 10. 合规与商业化披露规范

1. **第三方中立性**：全站头部、页脚及免责声明均明确公示——本站为独立技术指南站，与任何机场及 Shadowrocket 官方无隶属关联。
2. **赞助与佣金说明**：本站包含带有商业返利属性的推广链接，在所有推广区域均带有显式说明，返利佣金仅用于支撑服务器带宽与测速节点日常开销。
3. **合规红线严格恪守**：全站坚决杜绝任何翻墙订阅直链、节点明文密钥或绕过网络监管的非法指引，全面聚焦网络协议与性能技术客观研析。
4. **严禁虚假虚构**：无虚拟员工人像、无伪造企业工商注册地址、无捏造的用户五星评论，严格基于实测数据与公开品牌资料展开技术讨论。
