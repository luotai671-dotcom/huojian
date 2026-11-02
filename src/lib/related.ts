import contentMap from '../data/content-map.json';
import services from '../data/services.json';

export interface ArticleSummary {
  stableId: string;
  title: string;
  url: string;
  primaryCluster: string;
}

export function getArticleById(stableId: string) {
  return contentMap.find(item => item.stableId === stableId);
}

export function getArticlesByPillar(pillarId: string): ArticleSummary[] {
  return contentMap
    .filter(item => item.primaryCluster.startsWith(`${pillarId}/`))
    .map(item => ({
      stableId: item.stableId,
      title: item.primaryQuestion,
      url: `/articles/${item.stableId}/`,
      primaryCluster: item.primaryCluster,
    }));
}

export function getArticlesByTopic(pillarId: string, topicId: string): ArticleSummary[] {
  const prefix = `${pillarId}/${topicId}/`;
  return contentMap
    .filter(item => item.primaryCluster.startsWith(prefix))
    .map(item => ({
      stableId: item.stableId,
      title: item.primaryQuestion,
      url: `/articles/${item.stableId}/`,
      primaryCluster: item.primaryCluster,
    }));
}

export function getArticlesByCluster(pillarId: string, topicId: string, clusterId: string): ArticleSummary[] {
  const exact = `${pillarId}/${topicId}/${clusterId}`;
  return contentMap
    .filter(item => item.primaryCluster === exact)
    .map(item => ({
      stableId: item.stableId,
      title: item.primaryQuestion,
      url: `/articles/${item.stableId}/`,
      primaryCluster: item.primaryCluster,
    }));
}

export function getRelatedArticles(currentId: string, limit: number = 5): ArticleSummary[] {
  const current = getArticleById(currentId);
  if (!current) return [];

  // Find articles in the same cluster first, then same topic
  const sameCluster = contentMap.filter(item => 
    item.stableId !== currentId && item.primaryCluster === current.primaryCluster
  );

  if (sameCluster.length >= limit) {
    return sameCluster.slice(0, limit).map(item => ({
      stableId: item.stableId,
      title: item.primaryQuestion,
      url: `/articles/${item.stableId}/`,
      primaryCluster: item.primaryCluster,
    }));
  }

  const [pillarId, topicId] = current.primaryCluster.split('/');
  const prefix = `${pillarId}/${topicId}/`;
  const sameTopic = contentMap.filter(item => 
    item.stableId !== currentId && 
    item.primaryCluster !== current.primaryCluster && 
    item.primaryCluster.startsWith(prefix)
  );

  const combined = [...sameCluster, ...sameTopic].slice(0, limit);
  return combined.map(item => ({
    stableId: item.stableId,
    title: item.primaryQuestion,
    url: `/articles/${item.stableId}/`,
    primaryCluster: item.primaryCluster,
  }));
}

export function getBrandById(brandId: string) {
  return services.find(b => b.id === brandId);
}

export function getPrimaryBrand() {
  return services.find(b => b.isPrimaryRecommendation) || services[0];
}
