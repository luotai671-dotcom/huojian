import fs from 'fs';
import path from 'path';
import { pillarsData, brandsData } from './src_data_model.mjs';

const planningDir = path.resolve('planning');
if (!fs.existsSync(planningDir)) {
  fs.mkdirSync(planningDir, { recursive: true });
}

console.log('Building 553-node structured dataset...');

// 1. Build 553 Nodes
const allNodes = [];

// Home
allNodes.push({
  nodeId: "home",
  type: "home",
  title: "小火箭测评 — 机场选型与网络知识库",
  url: "/",
  h1: "小火箭测评：以选型为核心的第三方机场选购与网络使用指南",
  targetWords: "约 8,200 字",
  parentUrl: null,
  pillarId: null,
  topicId: null,
  clusterId: null,
  status: "planned",
  role: "全站入口、快速选择与宏观长文展开",
  primaryQuestion: "如何根据我的设备、预算与用途选择最合适的机场与客户端方案？"
});

// 12 Pillars
pillarsData.forEach((pillar, pIdx) => {
  allNodes.push({
    nodeId: `pillar-${pillar.id}`,
    type: "pillar",
    title: pillar.name,
    url: pillar.url,
    h1: pillar.h1,
    targetWords: pillar.targetWords,
    parentUrl: "/",
    pillarId: pillar.id,
    topicId: null,
    clusterId: null,
    status: "planned",
    role: pillar.role,
    primaryQuestion: `在【${pillar.name}】维度，用户应该如何建立清晰的评估与选型逻辑？`
  });

  // 3 Topics per Pillar
  pillar.topics.forEach((topic, tIdx) => {
    allNodes.push({
      nodeId: `topic-${pillar.id}-${topic.id}`,
      type: "topic",
      title: topic.name,
      url: topic.url,
      h1: topic.h1,
      targetWords: "3,500–5,000",
      parentUrl: pillar.url,
      pillarId: pillar.id,
      topicId: topic.id,
      clusterId: null,
      status: "planned",
      role: "二级专题承接与子集群关系组织",
      primaryQuestion: `在【${topic.name}】专题下，两个子集群分别解决什么问题，它们如何协同帮助用户决策？`
    });

    // 2 Clusters per Topic
    topic.clusters.forEach((cluster, cIdx) => {
      allNodes.push({
        nodeId: `cluster-${pillar.id}-${cluster.id}`,
        type: "cluster",
        title: cluster.name,
        url: cluster.url,
        h1: cluster.h1,
        targetWords: "2,500–4,000",
        parentUrl: topic.url,
        pillarId: pillar.id,
        topicId: topic.id,
        clusterId: cluster.id,
        status: "planned",
        role: "三级集群总解、案例归纳与阅读顺序指引",
        primaryQuestion: `针对【${cluster.name}】具体问题，核心解决原则、实操步骤与下辖文章阅读路线是什么？`
      });

      // 6 Articles per Cluster
      cluster.articles.forEach((art, aIdx) => {
        allNodes.push({
          nodeId: art.stableId,
          type: "article",
          title: art.title,
          url: `/articles/${art.stableId}/`,
          h1: art.title,
          targetWords: "2,000–3,500",
          parentUrl: cluster.url,
          pillarId: pillar.id,
          topicId: topic.id,
          clusterId: cluster.id,
          status: "planned",
          role: "独立任务落地、独立测试/步骤/演算与证据闭环",
          primaryQuestion: art.title
        });
      });
    });
  });
});

console.log(`Total nodes generated: ${allNodes.length}`);
fs.writeFileSync(
  path.join(planningDir, 'SITE_STRUCTURE_553_PAGES.json'),
  JSON.stringify(allNodes, null, 2),
  'utf8'
);

// 2. Build 01_SITE_STRUCTURE_AND_URL_MAP.md
let mapMd = `# xiaohuojianvpn.biz — 553 页面完整层级与 URL 映射总表

本规划表涵盖 **首页 1 + 12 个一级内容栏目 + 36 个二级专题 + 72 个三级内容集群 + 432 篇独立 SEO 文章 = 553 个规划内容页面**。
此外包含统一品牌实体档案页（\`/airports/{brand-slug}/\`）与基础合规/工具页面。

---

## 一、核心层级规模统计

| 页面层级 / 类别 | 节点数量 | 单篇目标字数 | 职责定位 | URL 规划模式 |
|---|---|---|---|---|
| **首页** | 1 | 约 8,200 字 | 全站总入口、首屏直出推荐、长文展开 | \`/\` |
| **一级栏目 (Pillar Hub)** | 12 | 7,000–9,500 字 | 核心选型决策、8×8巨幅对比表、ASCII决策树、FAQ ≥ 15条 | \`/{pillar}/\` |
| **二级专题 (Topic)** | 36 | 3,500–5,000 字 | 组织两组子集群解决方向与逻辑关系，含 12 篇下辖文章索引 | \`/{pillar}/{topic}/\` |
| **三级集群 (Cluster)** | 72 | 2,500–4,000 字 | 围绕具体场景给出总解、案例实操与 6 篇文章阅读顺序 | \`/{pillar}/{topic}/{cluster}/\` |
| **独立文章 (Article)** | 432 | 2,000–3,500 字 | 解决独立痛点、单篇实测验证、操作演练、严禁互相复制内容 | \`/articles/{stable-article-id}/\` |
| **品牌档案 (Brand Profile)** | 28 | 1,500–2,500 字 | 单一品牌实体资料库、数据状态标注、套餐历史、实测证据 | \`/airports/{brand-slug}/\` |
| **工具与政策页** | 9 | 1,000–2,000 字 | 搜索、404、关于、评测方法、编辑规范、商业披露、隐私、免责、反馈 | \`/about\`, \`/search/\` 等 |
| **总规划内容页面** | **553** | **—** | **全站系统性网状拓扑覆盖** | **—** |

---

## 二、553 页面完整映射清单

`;

let currentPillar = "";
let currentTopic = "";
let currentCluster = "";

allNodes.forEach((node) => {
  if (node.type === "home") {
    mapMd += `### 00. 首页\n\n`;
    mapMd += `| 类型 | 稳定标识 | 规范 URL | 标题 / H1 | 目标字数 | 职责 |\n`;
    mapMd += `|---|---|---|---|---|---|\n`;
    mapMd += `| 首页 | \`${node.nodeId}\` | [${node.url}](file:///${node.url}) | ${node.title} | ${node.targetWords} | ${node.role} |\n\n`;
  } else if (node.type === "pillar") {
    currentPillar = node.title;
    mapMd += `\n---\n\n### 栏目：${node.title} (\`${node.url}\`)\n\n`;
    mapMd += `**主入口 H1**：${node.h1}  \n`;
    mapMd += `**字数目标**：${node.targetWords} | **核心定位**：${node.role}\n\n`;
    mapMd += `| 级别 | 稳定标识 | 规范 URL | 标题 / H1 | 目标字数 | 核心职能 |\n`;
    mapMd += `|---|---|---|---|---|---|\n`;
    mapMd += `| **一级栏目** | \`${node.nodeId}\` | [${node.url}](file:///${node.url}) | **${node.title}** | ${node.targetWords} | ${node.role} |\n`;
  } else if (node.type === "topic") {
    currentTopic = node.title;
    mapMd += `| **二级专题** | \`${node.nodeId}\` | [${node.url}](file:///${node.url}) | ${node.title} | ${node.targetWords} | 辖下两集群关联解释 |\n`;
  } else if (node.type === "cluster") {
    currentCluster = node.title;
    mapMd += `| **三级集群** | \`${node.nodeId}\` | [${node.url}](file:///${node.url}) | ${node.title} | ${node.targetWords} | 集群总解与 6 篇导引 |\n`;
  } else if (node.type === "article") {
    mapMd += `| 文章 | \`${node.nodeId}\` | [${node.url}](file:///${node.url}) | ${node.title} | ${node.targetWords} | 独立任务闭环 |\n`;
  }
});

fs.writeFileSync(path.join(planningDir, '01_SITE_STRUCTURE_AND_URL_MAP.md'), mapMd, 'utf8');
console.log('01_SITE_STRUCTURE_AND_URL_MAP.md written.');

export { allNodes };
