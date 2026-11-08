# 小火箭测评 (xiaohuojianjc.blog)

> **面向网络工程师与开发者的跨平台网络代理协议、性能基准测评与客户端调优中文知识库。**
> 独立的第三方技术选型与网络配置指南，与任何代理软件或网络服务商官方无隶属关系。

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
10. [合规与中立性声明](#10-合规与中立性声明)

---

## 1. 项目概况

- **站点名称**：小火箭测评
- **官方域名**：`https://xiaohuojianjc.blog`
- **语言定位**：简体中文 (zh-CN)
- **核心定位**：提供主流网络传输协议横评比对、带宽与延迟基准实测、网络底层架构（BGP/IEPL/IPLC）、跨平台客户端配置调优（Shadowrocket / Clash Verge Rev / sing-box）及日常网络排障指南。
- **构建输出**：全静态编译生成 600+ 个 HTML 页面（纯静态文件），无数据库或后端运行时依赖。

---

## 2. 技术架构与栈选型

- **核心框架**：[Astro 4.x](https://astro.build/) (`4.16.19`) - 针对内容密集型知识库的最佳全静态生成器，零客户端 JavaScript 运行时开销。
- **语言**：TypeScript (`5.7.3`) + ES Modules (`.mjs`)。
- **样式方案**：Vanilla CSS 架构 + Tailwind CSS (`3.4.17`)，严格落实 WCAG AAA 对比度标准与排版规范。
- **全文搜索引擎**：[Pagefind](https://pagefind.app/) (`1.5.2`) - 客户端 WASM 静态索引，支持中文分词与毫秒级即时检索。
- **SEO 与订阅源**：
  - `@astrojs/sitemap` (`3.1.6`)：生成分卷式 `sitemap-index.xml` 与 `sitemap-0.xml`。
  - `@astrojs/rss` (`4.0.11`)：自动提取终极测评文章产出 `rss.xml`。
- **图标系统**：`astro-icon` (`1.1.5`)，纯内联 SVG 渲染，无字体包加载阻塞。

---

## 3. 站点规模与页面组织

本知识库采用高度严谨的金字塔与蜂窝互联网络内容拓扑结构：

```
                    ┌────────────────────────┐
                    │      首页 (1 页面)      │
                    └───────────┬────────────┘
                                │
        ┌───────────────────────┴───────────────────────┐
        │                                               │
┌───────▼────────────────┐                     ┌────────▼───────────────┐
│  12 个 Pillar 枢纽页   │                     │  28 个服务商技术档案页 │
│ (7,000~9,500字/8x8表)  │                     │ (/airports/{brand}/)   │
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
6. **服务商技术专页**：`28` 个 (`/airports/[brandSlug]/`)
7. **客户端进阶长文与专属测评**：`11` 篇
8. **基础工具与合规页面**：`9` 个 (`/search/`, `/404.html`, `/about/`, `/editorial-policy/`, `/editorial-standards/`, `/promotion-disclosure/`, `/privacy/`, `/disclaimer/`, `/contact/`)
9. **综合总计**：**600+ 个静态 HTML 页面**。

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
├── scripts/                    # 架构与质量保障自动化验证脚本
│   ├── audit-brand-links.mjs   # 服务商外链与安全参数审计
│   ├── check-content-map.mjs   # 内容映射表 553 节点完整性校验
│   ├── check-links.mjs         # 蜂窝内链与导航连通性校验
│   ├── check-pillar-hub.mjs    # 12 个核心 Pillar 规格校验 (8x8表/树/FAQ/字数)
│   ├── check-seo.mjs           # SEO Title/H1 唯一性查重
│   ├── check-typography.mjs    # 设计规范与对比度无障碍校验
│   ├── validate-content.mjs    # 432 篇文章内容结构完整性测试
│   └── verify-deadlinks-and-redirects.mjs # 全量死链与重定向死循环专项审计
├── src/
│   ├── components/             # 卡片式 UI 组件体系
│   │   ├── AllTopicsDropdown.astro # 头部“全部专题”3分组下拉菜单
│   │   ├── Answer.astro        # AEO 快速精准直答卡片
│   │   ├── ArticleCard.astro   # 文章预览卡片
│   │   ├── BrandBlock.astro    # 服务商横评模块
│   │   ├── Breadcrumbs.astro   # 5 级面包屑与 BreadcrumbList 微数据
│   │   ├── Callout.astro       # 提示/警告/重点强调区块
│   │   ├── CardGrid.astro      # 自适应响应式网格
│   │   ├── CommercialCard.astro# 核心服务推荐卡片组件
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
│   │   ├── coupons.json        # 优惠券与折扣数据
│   │   ├── navigation.ts       # 全站头部与页脚导航注册表
│   │   ├── pillar-content-store.ts # 12 个核心 Pillar 深度内容仓储
│   │   ├── plans.json          # 各档位套餐与参数计算数据
│   │   ├── redirects.ts        # 路由重定向与历史迁移映射
│   │   ├── services.json       # 28 家服务商网络指标与技术参数库
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
│   │   ├── ai/                 # AI 工具专题聚合与横评
│   │   ├── airports/           # 28 个服务商档案专页
│   │   ├── articles/           # 深度技术测评文章页面
│   │   ├── reviews/            # 专属深度评测独立长文
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

### 5.1 服务商网络指标与技术参数库 (`services.json`)
收录业界 28 家主流网络服务提供商的技术参数。以支持 IEPL/IPLC 骨干专线的典型服务商为评测参考，建立完整的多维度技术指标数据库：
- **基准服务商样本**：闪电鼠
- **骨干链路架构**：IEPL + 企业内网专线，原生双栈支持
- **核心协议支持**：VLESS / Trojan / Hysteria2
- **外链隔离与安全属性**：全站所有站外服务链接统一采用内部安全重定向，严格注入 `target="_blank" rel="nofollow sponsored noopener noreferrer"`。

### 5.2 数据状态可信度标牌 (`DataStatusBadge`)
所有性能指标与节点说明均打上清晰标记：
1. `vendor`（厂商资料）：官方公开宣称的带宽规格、节点覆盖或技术特权。
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

# 运行自动化架构与内容自检脚本
npm.cmd run check

# 执行生产环境静态全量编译 (生成 600+ 页面并建立 Pagefind 索引)
npm.cmd run build

# 本地预览编译后的 dist/ 静态目录
npm.cmd run preview
```

---

## 8. 自动化校验脚本 (质量保障体系)

在 `scripts/` 目录中内置了多项独立且互不依赖的质量检验工具，在持续集成中通过 `npm run check` 串联执行：

1. **`validate-content.mjs`**：检验全部 432 篇文章是否具备合法的标题、分类、描述与结构。
2. **`check-links.mjs`**：扫描全站导航树与蜂窝深链，杜绝死链。
3. **`check-seo.mjs`**：检验 432 篇文章的 Title 与 H1 标签，保证全网 **100% 唯一无重复**。
4. **`check-typography.mjs`**：检查 CSS 变量，确保桌面字号 ≥ 17px、对比度 ≥ 7:1。
5. **`check-pillar-hub.mjs`**：检查 12 个核心 Pillar，确保正文字数、8x8 表格、决策树、15 个 FAQ、30+ 链接全部就位。
6. **`check-content-map.mjs`**：核验 553 个规划节点与 432 篇文章的一一对应关系，杜绝冲突。
7. **`audit-brand-links.mjs`**：审计 28 家服务商元数据参数与安全重定向合规属性。
8. **`audit-full-links.mjs`**：全量扫描全站 HTML 文件，杜绝任何 404 死链与空哈希。

---

## 9. 生产环境部署 (Apache / Nginx / Cloudflare)

构建完成后的全部产物位于根目录下的 `dist/`。

- **Apache 静态主机部署**：将 Web 虚拟主机的 `DocumentRoot` 指向 `dist/` 即可。`public/.htaccess` 会在构建时自动输出到 `dist/.htaccess`，已预置 HTTPS 强制 301 重定向、非 www 规范化、长效静态缓存及安全响应头，并针对全部 Affiliate 推广链接提供标准 HTTP 302 临时重定向保护。
- **详细部署指引与配置模板**：参见根目录下的 [`deploy.md`](./deploy.md)。

---

## 10. 合规与中立性声明

1. **第三方技术中立**：本站点为独立技术评测与开源知识库，与任何客户端软件或网络服务商官方无隶属或排他性商业关联。
2. **学术与网络工程导向**：内容全面聚焦于计算机网络协议（TCP/UDP/QUIC/TLS）、用户态协议栈调优（gVisor/TUN）、DNS 防污染解析与跨平台开发环境网络配置。
3. **安全与合规红线**：全站严格禁止发布任何未经验证的订阅密钥、节点明文凭据或攻击性网络工具，所有讨论均以开源软件合规配置与网络性能测量为核心。
4. **客观真实准则**：所有延迟、丢包率与吞吐量数据均基于实验室真实网络环境测试所得，遵循公开透明的技术评估标准。
