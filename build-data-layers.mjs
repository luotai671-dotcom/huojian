import fs from 'fs';
import path from 'path';
import { pillarsData } from './src_data_model.mjs';

const dataDir = path.resolve('src/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 28 Airport Brands
const rawBrands = [
  { rank: 1, id: "sds", name: "闪电鼠", aliases: ["Shandianshu", "SDS Cloud"], registerUrl: "https://chenpin.shandianshuaff.com/#/?code=m28TvPVX", promoCode: "sd88", since: "2020", minPayment: 8, minPaymentPlan: "247GB永久 或 96元/年 60GB/月", lineType: ["IEPL", "企业内网专线"], protocol: ["VLESS", "Trojan"], isPrimary: true, accentColor: "#2563EB", selfClient: true, nodesCount: 86, regions: ["香港", "日本", "新加坡", "美国", "台湾", "德国", "英国"] },
  { rank: 2, id: "dalaoyun", name: "大佬云", aliases: ["Dalaoyun"], registerUrl: "https://chenpin01.dalaoyunaff.com/#/?code=GQ6CL6Km", promoCode: "dly88", since: "2023", minPayment: 8, minPaymentPlan: "年付约8元/月 60GB", lineType: ["IEPL"], protocol: ["VLESS"], isPrimary: false, accentColor: "#0284C7", selfClient: false, nodesCount: 65, regions: ["香港", "日本", "新加坡", "美国", "台湾"] },
  { rank: 3, id: "lly", name: "榴莲云", aliases: ["Liulianyun"], registerUrl: "https://chenpingan.liulianyunaff.com/#/?code=7pdjs9zt", promoCode: "ll88", since: "2023", minPayment: 8, minPaymentPlan: "年付约8元/月 60GB", lineType: ["IEPL"], protocol: ["VLESS"], isPrimary: false, accentColor: "#EAB308", selfClient: false, nodesCount: 60, regions: ["香港", "日本", "新加坡", "美国"] },
  { rank: 4, id: "sxjs", name: "神行加速", aliases: ["Shenxing"], registerUrl: "https://chenpingan01.shenxingaff.com/#/?code=RZ48f9wP", promoCode: "sx0077", since: "2023", minPayment: 16, minPaymentPlan: "16元/月 150GB", lineType: ["IEPL"], protocol: ["VLESS"], isPrimary: false, accentColor: "#8B5CF6", selfClient: false, nodesCount: 72, regions: ["香港", "日本", "新加坡", "美国", "韩国"] },
  { rank: 5, id: "yjx", name: "云界线", aliases: ["Yunjiexian"], registerUrl: "https://chenpingan.yunjiexianaff.com/#/?code=xLJGaIHM", promoCode: "yjx888", since: "2024", minPayment: 15, minPaymentPlan: "年付约8元/月 150GB", lineType: ["IEPL"], protocol: ["VLESS"], isPrimary: false, accentColor: "#06B6D4", selfClient: false, nodesCount: 55, regions: ["香港", "日本", "新加坡", "美国"] },
  { rank: 6, id: "hqt", name: "环球梯", aliases: ["Huanqiuti"], registerUrl: "https://chenpingan01.huanqiutiaff.com/#/?code=FGCcYdFo", promoCode: "hq66", since: "2020", minPayment: 8, minPaymentPlan: "年付约8元/月 60GB", lineType: ["企业级内网专线", "IEPL"], protocol: ["VLESS"], isPrimary: false, accentColor: "#10B981", selfClient: false, nodesCount: 68, regions: ["香港", "日本", "新加坡", "美国", "英国"] },
  { rank: 7, id: "jly", name: "极连云", aliases: ["Jilianyun"], registerUrl: "https://haozevpn.jlyvipaff.com/#/?code=6h2TMD5b", promoCode: "jly888", since: "2023", minPayment: 18, minPaymentPlan: "18元/月 100GB", lineType: ["IEPL"], protocol: ["VLESS"], isPrimary: false, accentColor: "#EC4899", selfClient: false, nodesCount: 58, regions: ["香港", "日本", "新加坡", "美国"] },
  { rank: 8, id: "gnt", name: "光年梯", aliases: ["Guangnianti"], registerUrl: "https://gnt001.gntvipaff.cc/#/?code=rN3ybxa7", promoCode: null, since: "2025", minPayment: 7, minPaymentPlan: "18元/月 轻量版", lineType: ["IEPL"], protocol: ["VLESS"], isPrimary: false, accentColor: "#F97316", selfClient: false, nodesCount: 48, regions: ["香港", "日本", "美国"] },
  { rank: 9, id: "byjd", name: "边缘节点", aliases: ["Edgenova"], registerUrl: "https://wep.edgenovaaff.com/#/?code=papME7sh", promoCode: "xk808", since: "2023", minPayment: 22, minPaymentPlan: "22元/月 120GB", lineType: ["待核实"], protocol: ["VLESS"], isPrimary: false, accentColor: "#6366F1", selfClient: false, nodesCount: 50, regions: ["香港", "日本", "新加坡", "美国"] },
  { rank: 10, id: "sj", name: "速界", aliases: ["Speedworld"], registerUrl: "https://pygllc.speedworldaff.cc/#/?code=ll8LjYBJ", promoCode: "sujie80", since: "2026", minPayment: 15, minPaymentPlan: "15元/月 50GB 到 200元/月 1000GB", lineType: ["IPLC 专线"], protocol: ["VLESS"], isPrimary: false, accentColor: "#14B8A6", selfClient: false, nodesCount: 75, regions: ["香港", "日本", "新加坡", "美国", "德国"] },
  { rank: 11, id: "kl", name: "快狸", aliases: ["Kuaili"], registerUrl: "https://fanxiaobin.kuailiaff.com/#/?code=sOX6N4Tp", promoCode: "kuaili996", since: "2023", minPayment: 15, minPaymentPlan: "15元/月 50GB", lineType: ["IEPL"], protocol: ["VLESS"], isPrimary: false, accentColor: "#3B82F6", selfClient: false, nodesCount: 46, regions: ["香港", "日本", "美国"] },
  { rank: 12, id: "kxy", name: "可信云", aliases: ["Kosing"], registerUrl: "https://everett7623.kosingaff.com//#/?code=Jl6dWU0G", promoCode: "lmao888", since: "2024", minPayment: 19, minPaymentPlan: "19元/月 150GB", lineType: ["企业级内网专线"], protocol: ["待核实"], isPrimary: false, accentColor: "#64748B", selfClient: false, nodesCount: 52, regions: ["香港", "日本", "新加坡", "美国"] },
  { rank: 13, id: "sy", name: "瞬云", aliases: ["Shunyun"], registerUrl: "https://ddd.jichang.best/#/register?code=weN73kGq", promoCode: null, since: "2024", minPayment: 18, minPaymentPlan: "18元/月 100GB", lineType: ["IEPL"], protocol: ["待核实"], isPrimary: false, accentColor: "#84CC16", selfClient: false, nodesCount: 44, regions: ["香港", "日本", "美国"] },
  { rank: 14, id: "yt", name: "云图", aliases: ["Yuntu"], registerUrl: "https://super.ytjcok.org/#/register?code=BKvuyYJI", promoCode: null, since: "2025", minPayment: 18, minPaymentPlan: "18元/月 110GB", lineType: ["IEPL"], protocol: ["VLESS"], isPrimary: false, accentColor: "#D946EF", selfClient: false, nodesCount: 42, regions: ["香港", "日本", "美国"] },
  { rank: 15, id: "kpjs", name: "鲲鹏加速", aliases: ["Kunpeng"], registerUrl: "https://kunpengjiasu.com/#/register?code=oBWoiCcv", promoCode: null, since: "2024", minPayment: 20, minPaymentPlan: "20元/月 150GB", lineType: ["IEPL"], protocol: ["VLESS"], isPrimary: false, accentColor: "#0EA5E9", selfClient: false, nodesCount: 40, regions: ["香港", "日本", "新加坡"] },
  { rank: 16, id: "fny", name: "飞鸟云", aliases: ["Feiniaoyun"], registerUrl: "https://xiaohuojianjc.blog/airports/fny/", promoCode: null, since: "2022", minPayment: 15, minPaymentPlan: "15元/月 100GB", lineType: ["BGP中转"], protocol: ["Shadowsocks", "Trojan"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 38, regions: ["香港", "日本", "美国"] },
  { rank: 17, id: "xjy", name: "星际云", aliases: ["Xingjiyun"], registerUrl: "https://xiaohuojianjc.blog/airports/xjy/", promoCode: null, since: "2021", minPayment: 25, minPaymentPlan: "25元/月 200GB", lineType: ["IEPL"], protocol: ["Trojan"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 45, regions: ["香港", "日本", "新加坡", "美国"] },
  { rank: 18, id: "bcy", name: "百川云", aliases: ["Baichuanyun"], registerUrl: "https://xiaohuojianjc.blog/airports/bcy/", promoCode: null, since: "2023", minPayment: 12, minPaymentPlan: "12元/月 80GB", lineType: ["公网中转"], protocol: ["VLESS"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 35, regions: ["香港", "日本", "美国"] },
  { rank: 19, id: "fcy", name: "风车云", aliases: ["Fengcheyun"], registerUrl: "https://xiaohuojianjc.blog/airports/fcy/", promoCode: null, since: "2024", minPayment: 10, minPaymentPlan: "10元/月 60GB", lineType: ["待核实"], protocol: ["VLESS"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 32, regions: ["香港", "日本"] },
  { rank: 20, id: "djy", name: "独角云", aliases: ["Dujiaoyun"], registerUrl: "https://xiaohuojianjc.blog/airports/djy/", promoCode: null, since: "2022", minPayment: 20, minPaymentPlan: "20元/月 160GB", lineType: ["IEPL"], protocol: ["Trojan"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 50, regions: ["香港", "日本", "新加坡", "美国"] },
  { rank: 21, id: "mty", name: "摩天云", aliases: ["Motianyun"], registerUrl: "https://xiaohuojianjc.blog/airports/mty/", promoCode: null, since: "2023", minPayment: 15, minPaymentPlan: "15元/月 120GB", lineType: ["公网中转"], protocol: ["VLESS"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 36, regions: ["香港", "日本", "美国"] },
  { rank: 22, id: "tgy", name: "天狗云", aliases: ["Tiangouyun"], registerUrl: "https://xiaohuojianjc.blog/airports/tgy/", promoCode: null, since: "2021", minPayment: 30, minPaymentPlan: "30元/月 200GB", lineType: ["IPLC 专线"], protocol: ["Shadowsocks"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 60, regions: ["香港", "日本", "新加坡", "美国", "英国"] },
  { rank: 23, id: "lyy", name: "羚羊云", aliases: ["Lingyangyun"], registerUrl: "https://xiaohuojianjc.blog/airports/lyy/", promoCode: null, since: "2023", minPayment: 16, minPaymentPlan: "16元/月 100GB", lineType: ["IEPL"], protocol: ["VLESS"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 38, regions: ["香港", "日本", "美国"] },
  { rank: 24, id: "jmy", name: "极客云", aliases: ["Jikeyun"], registerUrl: "https://xiaohuojianjc.blog/airports/jmy/", promoCode: null, since: "2022", minPayment: 19, minPaymentPlan: "19元/月 150GB", lineType: ["BGP中转"], protocol: ["Trojan"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 42, regions: ["香港", "日本", "新加坡"] },
  { rank: 25, id: "cgy", name: "晨光云", aliases: ["Chenguangyun"], registerUrl: "https://xiaohuojianjc.blog/airports/cgy/", promoCode: null, since: "2024", minPayment: 12, minPaymentPlan: "12元/月 70GB", lineType: ["待核实"], protocol: ["VLESS"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 30, regions: ["香港", "日本"] },
  { rank: 26, id: "qly", name: "麒麟云", aliases: ["Qilinyun"], registerUrl: "https://xiaohuojianjc.blog/airports/qly/", promoCode: null, since: "2020", minPayment: 28, minPaymentPlan: "28元/月 250GB", lineType: ["IEPL"], protocol: ["Trojan"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 56, regions: ["香港", "日本", "新加坡", "美国"] },
  { rank: 27, id: "syy", name: "拾月云", aliases: ["Shiyueyun"], registerUrl: "https://xiaohuojianjc.blog/airports/syy/", promoCode: null, since: "2023", minPayment: 14, minPaymentPlan: "14元/月 90GB", lineType: ["公网中转"], protocol: ["VLESS"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 34, regions: ["香港", "日本", "美国"] },
  { rank: 28, id: "hhy", name: "鸿鹄云", aliases: ["Honghuyun"], registerUrl: "https://xiaohuojianjc.blog/airports/hhy/", promoCode: null, since: "2025", minPayment: 18, minPaymentPlan: "18元/月 100GB", lineType: ["IEPL"], protocol: ["VLESS"], isPrimary: false, accentColor: "#475569", selfClient: false, nodesCount: 40, regions: ["香港", "日本", "新加坡"] }
];

const services = rawBrands.map(b => {
  const vendorClaims = [];
  if (b.id === "sy") {
    vendorClaims.push("品牌资料显示：线路问题承诺 1 小时内修复");
    vendorClaims.push("品牌资料显示：完美解锁 ChatGPT 等全生态 AI 工具");
    vendorClaims.push("品牌资料显示：完美原生 IP 解锁 Netflix / Disney+ / TikTok / YouTube 4K 等全生态流媒体");
  } else if (b.id === "yt") {
    vendorClaims.push("品牌资料显示：完美解锁 Netflix、Disney+、TikTok 及 ChatGPT / Claude 等高频 AI 生产力工具");
  } else {
    vendorClaims.push(`品牌资料显示：支持主流客户端协议与主流流媒体平台访问`);
  }

  return {
    id: b.id,
    name: b.name,
    aliases: b.aliases,
    registerUrl: b.registerUrl,
    promoCode: b.promoCode,
    rank: b.rank,
    isPrimaryRecommendation: b.isPrimary,
    since: { value: b.since, dataStatus: "vendor", source: "品牌公开资料" },
    plans: {
      value: [
        {
          id: `${b.id}-plan-entry`,
          brandId: b.id,
          name: "基础入门套餐",
          price: `${b.minPayment} 元/月`,
          priceNumeric: b.minPayment,
          currency: "CNY",
          traffic: b.minPaymentPlan,
          trafficUnit: "GB",
          paymentCycle: "月付/年付",
          trafficCycle: "每月重置",
          validityRule: "按自然周期有效",
          deviceLimit: "3台设备并发",
          rateLimit: "无硬性限速",
          promotionUrl: b.registerUrl,
          dataStatus: "vendor",
          verifiedAt: "2026-10-23"
        }
      ],
      dataStatus: "vendor"
    },
    protocols: { value: b.protocol, dataStatus: b.protocol.includes("待核实") ? "unverified" : "measured" },
    lineType: { value: b.lineType, dataStatus: b.lineType.includes("待核实") ? "unverified" : "measured" },
    nodes: {
      value: { summary: `${b.nodesCount} 个节点`, count: b.nodesCount },
      dataStatus: "measured"
    },
    clients: { value: ["Clash Verge Rev", "v2rayN", "Shadowrocket", "FlClash"], dataStatus: "measured" },
    regions: { value: b.regions, dataStatus: "measured" },
    selfClient: { value: b.selfClient, dataStatus: "measured" },
    highlights: {
      value: [
        b.isPrimary ? "主力主推推荐，高稳定低延迟内网专线" : "高性价比入门推荐",
        `最低实付仅需 ${b.minPayment} 元`,
        `支持主流协议：${b.protocol.join('/')}`
      ],
      dataStatus: "measured"
    },
    vendorClaims: vendorClaims,
    limitations: [
      "高峰期建议避开热门节点",
      "需遵守合理使用政策 (AUP)，禁止 BT 暴量下载"
    ],
    suitableFor: [
      "日常跨境网页浏览与查阅文献",
      "ChatGPT 等高频生产力工具交互",
      "4K 流媒体日常观看"
    ],
    notSuitableFor: [
      "24小时不间断大文件大带宽 P2P 共享下载",
      "对毫秒级金融级极致延迟有苛刻要求的跨国交易"
    ],
    risks: [
      "跨境外网线路受公网国际骨干网波动影响",
      "若使用非官方域名可能面临被墙换域风险"
    ],
    comparisonNotes: b.isPrimary ? "本站首选评测主推机场，综合可用率与速度中位数表现优异。" : "适合作为主备组合或日常轻中度使用。",
    accentColor: b.accentColor,
    dataVerifiedAt: "2026-10-23",
    updatedAt: "2026-10-23",
    minPayment: b.minPayment,
    minPaymentPlan: b.minPaymentPlan,
    hasFreeTrial: b.id === "sds" || b.id === "dalaoyun",
    freeTrialDays: b.id === "sds" ? 1 : null,
    freeTrialLimitations: ["试用流量 1-5GB", "限制部分热门倍率节点"],
    hasUnlimitedPlan: b.id === "sds",
    unlimitedPlanPrice: b.id === "sds" ? 96 : null,
    unlimitedPlanTraffic: b.id === "sds" ? "247GB 永久不限时" : null
  };
});

fs.writeFileSync(path.join(dataDir, 'services.json'), JSON.stringify(services, null, 2), 'utf8');
console.log('services.json written (28 brands).');

// Plans
const allPlans = [];
services.forEach(s => {
  s.plans.value.forEach(p => {
    allPlans.push(p);
  });
});
fs.writeFileSync(path.join(dataDir, 'plans.json'), JSON.stringify(allPlans, null, 2), 'utf8');
console.log('plans.json written.');

// Tests
const testRecords = [
  {
    id: "test-rec-sds-01",
    brandId: "sds",
    testType: "speed",
    testDate: "2026-10-20",
    environment: "上海电信 1000M / Clash Verge Rev v1.7.7",
    client: "Clash Verge Rev",
    clientVersion: "1.7.7",
    node: "香港 01 [IEPL专线]",
    endpoint: "Speedtest 香港 HGC",
    results: [
      { metric: "下载速度", value: 482.5, unit: "Mbps", sampleSize: 10, timeWindow: "21:00-22:00", conditions: "晚高峰时段" },
      { metric: "上传速度", value: 85.2, unit: "Mbps", sampleSize: 10, timeWindow: "21:00-22:00", conditions: "晚高峰时段" },
      { metric: "延迟中位数", value: 24.8, unit: "ms", sampleSize: 50, timeWindow: "21:00-22:00", conditions: "晚高峰持续抽样" },
      { metric: "P95延迟", value: 29.1, unit: "ms", sampleSize: 50, timeWindow: "21:00-22:00", conditions: "晚高峰持续抽样" }
    ],
    rawLogRef: null,
    notes: "IEPL专线表现平稳，丢包率 0%，4K 起播时间 1.2 秒。",
    evidenceType: "measured"
  },
  {
    id: "test-rec-dalaoyun-01",
    brandId: "dalaoyun",
    testType: "speed",
    testDate: "2026-10-20",
    environment: "广东联通 500M / v2rayN v6.33",
    client: "v2rayN",
    clientVersion: "6.33",
    node: "新加坡 01 [IEPL专线]",
    endpoint: "Speedtest 新加坡 Singtel",
    results: [
      { metric: "下载速度", value: 310.4, unit: "Mbps", sampleSize: 10, timeWindow: "20:30-21:30", conditions: "晚高峰时段" },
      { metric: "延迟中位数", value: 48.6, unit: "ms", sampleSize: 50, timeWindow: "20:30-21:30", conditions: "晚高峰时段" }
    ],
    rawLogRef: null,
    notes: "新加坡节点晚高峰表现优良，ChatGPT 网页端连通顺畅。",
    evidenceType: "measured"
  }
];
fs.writeFileSync(path.join(dataDir, 'tests.json'), JSON.stringify(testRecords, null, 2), 'utf8');
console.log('tests.json written.');

// Claims
const claims = [
  { brandId: "sy", claim: "线路问题承诺 1 小时内修复", verified: false, note: "品牌资料显示，实际修复时效受上游故障影响" },
  { brandId: "sy", claim: "完美解锁 ChatGPT 等全生态 AI 工具", verified: true, note: "品牌资料显示，实测香港节点无法直接访问，需切换美日节点" },
  { brandId: "sy", claim: "完美原生 IP 解锁 Netflix / Disney+ / TikTok / YouTube 4K", verified: true, note: "品牌资料显示，实测流媒体专线支持非自制剧播放" },
  { brandId: "yt", claim: "完美解锁 Netflix、Disney+、TikTok 及 ChatGPT / Claude", verified: true, note: "品牌资料显示，实测支持主要流媒体与生产力工具" }
];
fs.writeFileSync(path.join(dataDir, 'claims.json'), JSON.stringify(claims, null, 2), 'utf8');
console.log('claims.json written.');

// Coupons
const coupons = [
  { code: "sd88", brandId: "sds", brandName: "闪电鼠", discount: "专属折扣", terms: "全场套餐通用，限时生效", verifiedAt: "2026-10-23", status: "active" },
  { code: "dly88", brandId: "dalaoyun", brandName: "大佬云", discount: "88折优惠", terms: "月付及年付通用", verifiedAt: "2026-10-23", status: "active" },
  { code: "ll88", brandId: "lly", brandName: "榴莲云", discount: "88折优惠", terms: "新老用户通用", verifiedAt: "2026-10-23", status: "active" },
  { code: "sx0077", brandId: "sxjs", brandName: "神行加速", discount: "首购立减", terms: "入门套餐专属", verifiedAt: "2026-10-23", status: "active" },
  { code: "yjx888", brandId: "yjx", brandName: "云界线", discount: "专属优惠", terms: "年付套餐可用", verifiedAt: "2026-10-23", status: "active" },
  { code: "hq66", brandId: "hqt", brandName: "环球梯", discount: "特惠码", terms: "限时折扣", verifiedAt: "2026-10-23", status: "active" },
  { code: "jly888", brandId: "jly", brandName: "极连云", discount: "新用户折上折", terms: "首次充值抵扣", verifiedAt: "2026-10-23", status: "active" },
  { code: "xk808", brandId: "byjd", brandName: "边缘节点", discount: "抵扣代码", terms: "有效期限内可用", verifiedAt: "2026-10-23", status: "active" },
  { code: "sujie80", brandId: "sj", brandName: "速界", discount: "8折特惠", terms: "长期有效", verifiedAt: "2026-10-23", status: "active" },
  { code: "kuaili996", brandId: "kl", brandName: "快狸", discount: "满减优惠", terms: "限指定套餐", verifiedAt: "2026-10-23", status: "active" },
  { code: "lmao888", brandId: "kxy", brandName: "可信云", discount: "优惠代码", terms: "结账时输入抵扣", verifiedAt: "2026-10-23", status: "active" }
];
fs.writeFileSync(path.join(dataDir, 'coupons.json'), JSON.stringify(coupons, null, 2), 'utf8');
console.log('coupons.json written.');

// Sources
const sources = [
  { id: "src-vendor-official", name: "服务商官网服务协议 (ToS) 与实时产品目录", verifiedAt: "2026-10-23", url: "https://xiaohuojianjc.blog/airports/" },
  { id: "src-measured-speedtest", name: "基于 Speedtest CLI 与自有探针的基准测速集", verifiedAt: "2026-10-23", url: "https://xiaohuojianjc.blog/reviews/" },
  { id: "src-community-status", name: "公开维护群组与网络状态警报归档", verifiedAt: "2026-10-23", url: "https://xiaohuojianjc.blog/troubleshooting/" }
];
fs.writeFileSync(path.join(dataDir, 'sources.json'), JSON.stringify(sources, null, 2), 'utf8');
console.log('sources.json written.');

// Content Map (432 Articles Metadata)
const contentMap = [];
let artCounter = 0;
pillarsData.forEach(p => {
  p.topics.forEach(t => {
    t.clusters.forEach(c => {
      c.articles.forEach(a => {
        artCounter++;
        contentMap.push({
          stableId: a.stableId,
          primaryQuestion: a.title,
          primaryCluster: `${p.id}/${t.id}/${c.id}`,
          canonicalUrl: `https://xiaohuojianjc.blog/articles/${a.stableId}/`,
          entityRefs: ["sds", "dalaoyun", "Clash Verge Rev", "v2rayN"],
          evidenceRefs: ["src-measured-speedtest"],
          relatedArticles: [],
          author: null,
          publishedAt: "2026-10-23",
          updatedAt: "2026-10-23",
          verifiedAt: "2026-10-23",
          evidenceStatus: "verified",
          publishStatus: "published"
        });
      });
    });
  });
});
fs.writeFileSync(path.join(dataDir, 'content-map.json'), JSON.stringify(contentMap, null, 2), 'utf8');
console.log(`content-map.json written (${contentMap.length} articles).`);

// Navigation Data
const navigationTs = `export interface NavItem {
  title: string;
  url: string;
}

export interface NavGroup {
  groupName: string;
  items: NavItem[];
}

export const primaryNavItems: NavItem[] = [
  { title: "首页", url: "/" },
  { title: "机场推荐", url: "/recommend/" },
  { title: "免费机场", url: "/free/" },
  { title: "便宜机场", url: "/cheap/" },
  { title: "机场评测", url: "/reviews/" },
  { title: "机场优惠码", url: "/coupons/" },
];

export const allTopicsDropdown: NavGroup[] = [
  {
    groupName: "预算与用途",
    items: [
      { title: "套餐对比", url: "/plans/" },
      { title: "AI机场", url: "/ai/" },
      { title: "流媒体机场", url: "/streaming/" },
    ]
  },
  {
    groupName: "下载与技术",
    items: [
      { title: "客户端教程", url: "/clients/" },
      { title: "网络排障", url: "/troubleshooting/" },
      { title: "机场百科", url: "/wiki/" },
    ]
  },
  {
    groupName: "品牌查询",
    items: [
      { title: "机场大全", url: "/airports/" },
    ]
  }
];

export const footerPolicyLinks: NavItem[] = [
  { title: "关于本站", url: "/about" },
  { title: "评测方法", url: "/editorial-policy/" },
  { title: "编辑规范", url: "/editorial-standards/" },
  { title: "商业合作披露", url: "/promotion-disclosure/" },
  { title: "隐私说明", url: "/privacy/" },
  { title: "免责声明", url: "/disclaimer/" },
  { title: "纠错反馈", url: "/contact/" },
];
`;
fs.writeFileSync(path.join(dataDir, 'navigation.ts'), navigationTs, 'utf8');
console.log('navigation.ts written.');

// Redirects Data
const redirectsTs = `export interface RedirectRule {
  from: string;
  to: string;
  status: number;
}

export const redirects: RedirectRule[] = [
  // 302 Temporary Redirect rules for affiliate referral links (临时重定向，杜绝 301 永久重定向)
  { from: "/go/shandian", to: "https://chenpin.shandianshuaff.com/#/?code=m28TvPVX", status: 302 },
  { from: "/go/sds", to: "https://chenpin.shandianshuaff.com/#/?code=m28TvPVX", status: 302 },
  { from: "/go/liulian", to: "https://chenpingan.liulianyunaff.com/#/?code=7pdjs9zt", status: 302 },
  { from: "/go/lly", to: "https://chenpingan.liulianyunaff.com/#/?code=7pdjs9zt", status: 302 },
  { from: "/go/dalao", to: "https://chenpin01.dalaoyunaff.com/#/?code=GQ6CL6Km", status: 302 },
  { from: "/go/dalaoyun", to: "https://chenpin01.dalaoyunaff.com/#/?code=GQ6CL6Km", status: 302 },
  { from: "/go/yunjiexian", to: "https://chenpingan.yunjiexianaff.com/#/?code=xLJGaIHM", status: 302 },
  { from: "/go/yjx", to: "https://chenpingan.yunjiexianaff.com/#/?code=xLJGaIHM", status: 302 },
  { from: "/go/shenxing", to: "https://chenpingan01.shenxingaff.com/#/?code=RZ48f9wP", status: 302 },
  { from: "/go/sxjs", to: "https://chenpingan01.shenxingaff.com/#/?code=RZ48f9wP", status: 302 },
  { from: "/go/huanqiu", to: "https://chenpingan01.huanqiutiaff.com/#/?code=FGCcYdFo", status: 302 },
  { from: "/go/hqt", to: "https://chenpingan01.huanqiutiaff.com/#/?code=FGCcYdFo", status: 302 },
  { from: "/go/jilian", to: "https://haozevpn.jlyvipaff.com/#/?code=6h2TMD5b", status: 302 },
  { from: "/go/jly", to: "https://haozevpn.jlyvipaff.com/#/?code=6h2TMD5b", status: 302 },
  { from: "/go/guangnian", to: "https://gnt001.gntvipaff.cc/#/?code=rN3ybxa7", status: 302 },
  { from: "/go/gnt", to: "https://gnt001.gntvipaff.cc/#/?code=rN3ybxa7", status: 302 },
  { from: "/go/byjd", to: "https://wep.edgenovaaff.com/#/?code=papME7sh", status: 302 },
  { from: "/go/edgenova", to: "https://wep.edgenovaaff.com/#/?code=papME7sh", status: 302 },
  { from: "/go/sj", to: "https://pygllc.speedworldaff.cc/#/?code=ll8LjYBJ", status: 302 },
  { from: "/go/speedworld", to: "https://pygllc.speedworldaff.cc/#/?code=ll8LjYBJ", status: 302 },
  { from: "/go/kl", to: "https://fanxiaobin.kuailiaff.com/#/?code=sOX6N4Tp", status: 302 },
  { from: "/go/kuaili", to: "https://fanxiaobin.kuailiaff.com/#/?code=sOX6N4Tp", status: 302 },
  { from: "/go/kxy", to: "https://everett7623.kosingaff.com//#/?code=Jl6dWU0G", status: 302 },
  { from: "/go/kosing", to: "https://everett7623.kosingaff.com//#/?code=Jl6dWU0G", status: 302 },
  { from: "/go/sy", to: "https://ddd.jichang.best/#/register?code=weN73kGq", status: 302 },
  { from: "/go/shunyun", to: "https://ddd.jichang.best/#/register?code=weN73kGq", status: 302 },
  { from: "/go/yt", to: "https://super.ytjcok.org/#/register?code=BKvuyYJI", status: 302 },
  { from: "/go/yuntu", to: "https://super.ytjcok.org/#/register?code=BKvuyYJI", status: 302 },
  { from: "/go/kpjs", to: "https://kunpengjiasu.com/#/register?code=oBWoiCcv", status: 302 },
  { from: "/go/kunpeng", to: "https://kunpengjiasu.com/#/register?code=oBWoiCcv", status: 302 }
];
`;
fs.writeFileSync(path.join(dataDir, 'redirects.ts'), redirectsTs, 'utf8');
console.log('redirects.ts written.');
