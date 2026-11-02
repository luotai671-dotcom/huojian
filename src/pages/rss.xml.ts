import rss from '@astrojs/rss';
import contentMap from '../data/content-map.json';

export async function GET(context: any) {
  // Take the first 50 published articles for the RSS feed
  const items = contentMap.slice(0, 50).map(item => ({
    title: item.primaryQuestion,
    description: `《${item.primaryQuestion}》— 小火箭测评机场选型与使用指南独立技术文章。`,
    pubDate: new Date(item.publishedAt || "2026-10-23"),
    link: `/articles/${item.stableId}/`,
  }));

  return rss({
    title: '小火箭测评 (xiaohuojianjc.blog)',
    description: '以机场选型为核心，用品牌资料、套餐计算、真实评测、使用教程和网络原理支撑选择的中文知识库',
    site: context.site || 'https://xiaohuojianjc.blog',
    items: items,
    customData: `<language>zh-CN</language>`,
  });
}
