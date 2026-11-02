# xiaohuojianvpn.biz — 小火箭测评 完整建站规划包交付说明

> **项目名称**：小火箭测评  
> **官方域名**：`xiaohuojianvpn.biz`  
> **核心定位**：以机场选型为核心，用品牌资料、套餐计算、真实评测、使用教程和网络原理支撑选择的中文知识库  
> **架构规模**：首页 1 + 12 个一级内容栏目 + 36 个二级专题 + 72 个三级内容集群 + 432 篇独立 SEO 文章 = **553 个规划内容页面**  
> **Hub 入口总数**：1 份首页 + 12 份一级栏目 + 36 份二级专题 + 72 份三级集群 = **121 份 Hub 编辑规格 (`index.md`)**  
> **技术栈**：Astro 4.x + TypeScript + Tailwind CSS + Pagefind + @astrojs/sitemap + @astrojs/rss + Apache 静态部署  
> **视觉设计**：白底 · 蓝灰主色 · 卡片式博客/Wiki 主题（正文 17px，对比度 ≥ 7:1，等宽数值）

---

## 一、规划包文件清单

规划包已在当前工作区的 `planning/` 目录下全部生成完毕，文件结构如下：

| 文件名称 | 格式 | 核心内容与职能 | 检查重点 |
|---|---|---|---|
| [`SITE_STRUCTURE_553_PAGES.json`](file:///c:/Users/ASUS/Desktop/%E9%97%AA%E7%94%B510.23%E5%B0%8F%E7%81%AB%E7%AE%AD/planning/SITE_STRUCTURE_553_PAGES.json) | JSON | 553 个规划节点的结构化数据（包含 nodeId, URL, H1, 目标字数, 唯一父级 URL, 状态） | 100% 节点唯一性，无悬空父级目标 |
| [`01_SITE_STRUCTURE_AND_URL_MAP.md`](file:///c:/Users/ASUS/Desktop/%E9%97%AA%E7%94%B510.23%E5%B0%8F%E7%81%AB%E7%AE%AD/planning/01_SITE_STRUCTURE_AND_URL_MAP.md) | Markdown | 553 页面完整层级与 URL 映射总表，含各级标题库、字数预算、业务职责与独立文章稳定 ID 清单 | 432 篇文章 ID 与 URL 无字面重复 |
| [`02_HONEYCOMB_INTERNAL_LINKING_MAP.md`](file:///c:/Users/ASUS/Desktop/%E9%97%AA%E7%94%B510.23%E5%B0%8F%E7%81%AB%E7%AE%AD/planning/02_HONEYCOMB_INTERNAL_LINKING_MAP.md) | Markdown | 蜂巢式拓扑内链规划方案：面包屑 5 级链、一级页直达 36 篇索引、**24 条跨专题/跨栏目深度内链矩阵**、品牌档案双向网、最低链接指标（一级 ≥ 30，二级 ≥ 15，三级 ≥ 10，文章 ≥ 5） | 具象语义锚文本，拒绝通用词与死链 |
| [`03_TECHNICAL_AND_SEO_SPECIFICATIONS.md`](file:///c:/Users/ASUS/Desktop/%E9%97%AA%E7%94%B510.23%E5%B0%8F%E7%81%AB%E7%AE%AD/planning/03_TECHNICAL_AND_SEO_SPECIFICATIONS.md) | Markdown | 技术架构、UI 卡片设计系统、CSS 变量、GEO/AEO 抓取优化、Schema JSON-LD、商业合规与推广链接属性、**7 大自动化工程校验脚本规范**、Apache `.htaccess` 配置 | WCAG AAA 对比度 ≥ 7:1，推广参数无损继承 |
| [`04_EDITORIAL_SPECS_121_HUBS.md`](file:///c:/Users/ASUS/Desktop/%E9%97%AA%E7%94%B510.23%E5%B0%8F%E7%81%AB%E7%AE%AD/planning/04_EDITORIAL_SPECS_121_HUBS.md) | Markdown | **121 份 Hub (`index.md`) 编辑规格全景书**：<br>• 首页 Hub (约 8,200 字，9 大板块)<br>• 12 个一级 Pillar (7,000–9,500 字，含 8×8 巨表、3 层 ASCII 决策树、≥ 500 字机制剖析、≥ 15 条独家 FAQ、≥ 30 条内链)<br>• 36 个二级 Topic (3,500–5,000 字，组织子集群关系 + 12 篇聚合索引)<br>• 72 个三级 Cluster (2,500–4,000 字，问题总解 + 6 篇阅读路线) | 拒绝模板化，差异化核心实体与逻辑 |

---

## 二、关键设计与架构核验

### 2.1 内容主线与六类职责闭环
站点严格遵循统一的知识流向闭环：
> **提出需求 → 找到候选机场 → 比较套餐与使用条件 → 查阅证据 → 购买并使用 → 解决问题 → 理解背后的原理**

各栏目职责边界明确划分，互不越界：
- **直接选择服务**：机场推荐 (`/recommend/`)、免费机场 (`/free/`)、便宜机场 (`/cheap/`)；
- **按用途选择**：AI机场 (`/ai/`)、流媒体机场 (`/streaming/`)；
- **比较购买条件**：套餐对比 (`/plans/`)、机场优惠码 (`/coupons/`)；
- **核对品牌与证据**：机场评测 (`/reviews/`)、机场大全 (`/airports/`)；
- **完成使用**：客户端教程 (`/clients/`)、网络排障 (`/troubleshooting/`)；
- **理解技术**：机场百科 (`/wiki/`)。

### 2.2 28 个机场品牌收录与合规处理
- **主推品牌**：**闪电鼠**（IEPL + 企业内网专线，VLESS 协议，96元/年 60GB/月 或 247GB 永久包，优惠码 `sd88`）；
- **前十主力推荐**：闪电鼠、大佬云、榴莲云、神行加速、云界线、环球梯、极连云、光年梯、边缘节点、速界；
- **后续核验品牌**：快狸、可信云、瞬云、云图、鲲鹏加速等共 28 家；
- **出站链接与商业合规**：
  - 推广链接统一 `target="_blank" rel="nofollow sponsored noopener"`；
  - 链接附近醒目展示：“含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格”；
  - 完整保留原有查询参数与邀请码片段；
  - 数据字段标注 `dataStatus: "vendor" | "measured" | "unverified"`，厂商声称严格加“品牌资料显示”前缀，未知字段显示“待核验”Badge，坚决不造假。

### 2.3 视觉系统与可读性底线
- 正文字号：桌面端 17px，移动端 16px；
- 表格字号：15px；标签 ≥ 12px；
- 对比度：严格 ≥ 7:1；
- 数字：使用等宽字体 `SF Mono / JetBrains Mono` 并启用 `tabular-nums`；
- 阶梯字号级差 ≥ 2px；
- 移动端表格独立横向滚动，整体页面零溢出。

---

## 三、待用户确认事项与下一步执行顺序

当前第一步（生成完整规划包与 121 份 Hub 编辑规格）已全部执行就绪，请您审阅以上规划文件。

**获得您的确认后，将严格按照指令中的发布顺序进入后续实施阶段：**

1. **第二阶段：环境初始化与旧站审计**
   - 检查并审计工作区内任何现存文件与路由记录；
   - 初始化 Astro 4.x + TypeScript + Tailwind CSS + MDX + @astrojs/sitemap + @astrojs/rss + Pagefind 项目；
   - 部署全局样式、卡片系统 CSS 变量与响应式字体规范。
2. **第三阶段：数据层与核心组件构建**
   - 落地 `src/data/services.json`（28 品牌数据）、`plans.json`、`tests.json`、`coupons.json`、`content-map.json` 等数据模型；
   - 实现 Header（含 7 项导航 + “全部专题”分组下拉 + 搜索）、Footer、Breadcrumbs、SEOHead、Answer、ComparisonTable、DecisionTree、BrandBlock 等全量 Astro/MDX 组件。
3. **第四阶段：主入口建设 (Pillar Hubs)**
   - 撰写并生成首页（约 8,200 字）及 12 个一级 Pillar Hub 页面（每个 7,000–9,500 字，含 8×8 巨表、决策树、机制分析、FAQ ≥ 15 条、内链 ≥ 30 条与变现直达卡片）。
4. **第五阶段：二级专题、三级集群与 432 篇独立文章生成**
   - 按专题与集群批次落地 36 个二级专题页与 72 个三级集群页；
   - 批量落地 432 篇独立文章，构建蜂巢式深度内链。
5. **第六阶段：Pagefind 集成、自动化校验与静态部署**
   - 部署 7 个校验脚本并执行全量质量核验；
   - 配置 Apache `.htaccess` 规则并执行 `npm run build` 打包；
   - 输出完整的竣工汇报报告。

**请审阅以上规划包，确认无误后请回复“确认”，我们将立即启动第二步环境初始化与开发建设！**
