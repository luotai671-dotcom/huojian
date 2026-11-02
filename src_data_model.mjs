import fs from 'fs';
import path from 'path';

const planningDir = path.resolve('planning');
if (!fs.existsSync(planningDir)) {
  fs.mkdirSync(planningDir, { recursive: true });
}

// 12 Pillars, 36 Topics, 72 Clusters, 432 Articles
const pillarsData = [
  {
    id: "recommend",
    name: "机场推荐",
    slug: "recommend",
    url: "/recommend/",
    h1: "机场推荐：从使用需求到具体品牌的选购指南",
    targetWords: "7,000–9,500",
    role: "直接选择服务",
    userGets: "具体候选、适合人群、选择理由与限制",
    topics: [
      {
        id: "first-purchase",
        name: "首次选购与服务切换",
        slug: "first-purchase",
        url: "/recommend/first-purchase/",
        h1: "首次选购与换机场指南：新手决策、服务迁移与多服务组合",
        clusters: [
          {
            id: "beginner-decision",
            name: "新手选购决策",
            slug: "beginner-decision",
            url: "/recommend/first-purchase/beginner-decision/",
            h1: "新手机场选购决策指南：从设备、用途到套餐的完整决策流程",
            articles: [
              { stableId: "art-rec-001", title: "第一次买机场怎么选？从设备、用途到套餐的完整决策流程" },
              { stableId: "art-rec-002", title: "机场推荐榜单怎么看？识别广告排序、测试依据与适用人群" },
              { stableId: "art-rec-003", title: "只有手机的新手适合哪类机场？自有客户端与通用客户端方案比较" },
              { stableId: "art-rec-004", title: "已有代理客户端还需要买什么？机场订阅与软件授权的区别" },
              { stableId: "art-rec-005", title: "机场购买前应该问客服哪些问题？用需求清单筛掉不合适的服务" },
              { stableId: "art-rec-006", title: "机场试用满意后怎么买正式套餐？从体验结果到付款周期的选择" }
            ]
          },
          {
            id: "switch-and-combo",
            name: "换机场与组合使用",
            slug: "switch-and-combo",
            url: "/recommend/first-purchase/switch-and-combo/",
            h1: "更换机场与多服务组合指南：迁移成本、备用搭配与设备并发",
            articles: [
              { stableId: "art-rec-007", title: "机场到期后换一家还是续费？迁移成本、使用记录与费用一起比较" },
              { stableId: "art-rec-008", title: "更换机场前要确认什么？设备、协议兼容与订阅迁移检查清单" },
              { stableId: "art-rec-009", title: "主用加备用机场怎么搭配？故障独立性、成本与管理难度比较" },
              { stableId: "art-rec-010", title: "什么情况下两个机场同时使用更合适？多设备与工作场景分析" },
              { stableId: "art-rec-011", title: "从便宜机场升级到中端服务怎么选？预算与体验变化评估" },
              { stableId: "art-rec-012", title: "一个账号多台设备使用时应该注意哪些限制？并发连接与规则检查" }
            ]
          }
        ]
      },
      {
        id: "conditions-and-devices",
        name: "使用条件与设备需求",
        slug: "conditions-and-devices",
        url: "/recommend/conditions-and-devices/",
        h1: "机场使用条件与多设备需求：移动漫游、公共网络与家庭协作方案",
        clusters: [
          {
            id: "mobile-and-travel",
            name: "移动网络与外出使用",
            slug: "mobile-and-travel",
            url: "/recommend/conditions-and-devices/mobile-and-travel/",
            h1: "移动网络与出差旅行机场选型：4G/5G切换、酒店网络与掉线防护",
            articles: [
              { stableId: "art-rec-013", title: "移动网络环境下机场怎么选？4G、5G 切换与连接稳定性比较" },
              { stableId: "art-rec-014", title: "经常出差、旅行用什么机场？酒店网络与临时场景选择" },
              { stableId: "art-rec-015", title: "公共场所 Wi-Fi 使用机场应该注意什么？安全与连接检查" },
              { stableId: "art-rec-016", title: "手机流量不足时怎样调整机场套餐？流量消耗与备用方案" },
              { stableId: "art-rec-017", title: "经常切换网络环境时怎样减少掉线？客户端与节点策略" },
              { stableId: "art-rec-018", title: "手机热点共享给其他设备使用机场，会不会影响体验？" }
            ]
          },
          {
            id: "multi-device-and-rules",
            name: "多设备与协作约束",
            slug: "multi-device-and-rules",
            url: "/recommend/conditions-and-devices/multi-device-and-rules/",
            h1: "多设备接入与家庭办公约束：跨平台支持、连接数限制与凭证安全",
            articles: [
              { stableId: "art-rec-019", title: "家庭多设备使用机场怎么选？连接限制与管理成本分析" },
              { stableId: "art-rec-020", title: "手机和电脑一起用机场怎么选？设备规则与跨平台支持" },
              { stableId: "art-rec-021", title: "学校或公司电脑能否使用个人机场？合规与终端权限核对" },
              { stableId: "art-rec-022", title: "平板电脑使用机场需要单独订阅吗？设备限制与配置说明" },
              { stableId: "art-rec-023", title: "电视和投屏使用机场需要额外配置吗？家庭网络方案" },
              { stableId: "art-rec-024", title: "多设备场景下如何管理订阅与凭据？安全与协作约束" }
            ]
          }
        ]
      },
      {
        id: "reliability-and-support",
        name: "可靠性与服务保障",
        slug: "reliability-and-support",
        url: "/recommend/reliability-and-support/",
        h1: "机场可靠性评估与售后保障：晚高峰容灾、退款条款与商业存续力",
        clusters: [
          {
            id: "stability-and-selection",
            name: "主力服务与稳定性选择",
            slug: "stability-and-selection",
            url: "/recommend/reliability-and-support/stability-and-selection/",
            h1: "主力机场稳定性选型指南：晚高峰表现、故障恢复与换代信号",
            articles: [
              { stableId: "art-rec-025", title: "稳定机场怎么选？晚高峰、连续使用与故障恢复证据对比" },
              { stableId: "art-rec-026", title: "长时间在线使用机场应该注意什么？连接中断与重连取舍" },
              { stableId: "art-rec-027", title: "机场售后支持怎么比较？工单渠道、响应记录与自助排障能力" },
              { stableId: "art-rec-028", title: "机场的退款条款应该怎么看？申请条件、例外情况与证据留存" },
              { stableId: "art-rec-029", title: "如何评估机场的长期可用性？观察方法与判断依据" },
              { stableId: "art-rec-030", title: "什么情况下应该换掉主力机场？关键信号与决策流程" }
            ]
          },
          {
            id: "support-and-policies",
            name: "支持能力与购买约束",
            slug: "support-and-policies",
            url: "/recommend/reliability-and-support/support-and-policies/",
            h1: "机场支持能力与购买条款核对：隐私说明、支付方式与运营年限",
            articles: [
              { stableId: "art-rec-031", title: "机场的隐私说明怎么看？日志声明、数据范围与无法验证的部分" },
              { stableId: "art-rec-032", title: "购买机场前如何确认支付方式？支付宝、USDT 与其他方式" },
              { stableId: "art-rec-033", title: "机场的付款周期应该怎么选？月付、季付与年付权衡" },
              { stableId: "art-rec-034", title: "机场的流量重置与续费规则应该怎么看？" },
              { stableId: "art-rec-035", title: "机场的联系渠道与响应方式应该怎么比较？" },
              { stableId: "art-rec-036", title: "机场的品牌与运营时长应该怎样核实？" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "free",
    name: "免费机场",
    slug: "free",
    url: "/free/",
    h1: "免费机场与试用指南：资源条件、领取流程和使用边界",
    targetWords: "7,000–9,500",
    role: "直接选择服务",
    userGets: "具体候选、适合人群、选择理由与限制",
    topics: [
      {
        id: "resource-and-eligibility",
        name: "免费资源与领取条件",
        slug: "resource-and-eligibility",
        url: "/free/resource-and-eligibility/",
        h1: "免费机场资源辨识与领取资格：公益开源、额度限制与风险核验",
        clusters: [
          {
            id: "public-resources",
            name: "公益资源识别",
            slug: "public-resources",
            url: "/free/resource-and-eligibility/public-resources/",
            h1: "公益免费机场与开源节点辨析：可持续性、安全边界与使用差距",
            articles: [
              { stableId: "art-fre-001", title: "免费机场资源有哪些类型？公益、开源与商业免费区分" },
              { stableId: "art-fre-002", title: "公益免费机场项目是什么？非营利模式的可持续性判断" },
              { stableId: "art-fre-003", title: "开源项目提供的免费服务能长期用吗？维护状态核对" },
              { stableId: "art-fre-004", title: "公开分享的免费订阅安全吗？来源、隐私与风险边界" },
              { stableId: "art-fre-005", title: "免费资源能不能用于日常使用？轻度使用与正常使用的差距" },
              { stableId: "art-fre-006", title: "免费资源怎么筛选更稳妥？来源、条件与核验清单" }
            ]
          },
          {
            id: "eligibility-and-quota",
            name: "领取资格与免费额度",
            slug: "eligibility-and-quota",
            url: "/free/resource-and-eligibility/eligibility-and-quota/",
            h1: "免费节点领取流程与限制：绑定验证、流量额度与失败排障",
            articles: [
              { stableId: "art-fre-007", title: "免费机场资源怎么领取？常见注册流程与条件说明" },
              { stableId: "art-fre-008", title: "免费资源领取是否需要绑定支付方式？" },
              { stableId: "art-fre-009", title: "免费资源的流量与时长额度说明" },
              { stableId: "art-fre-010", title: "免费资源领取失败的常见原因与处理" },
              { stableId: "art-fre-011", title: "免费资源领取前的准备工作：账号、支付与设备清单" },
              { stableId: "art-fre-012", title: "免费资源的领取频率与账号条件" }
            ]
          }
        ]
      },
      {
        id: "trial-and-verification",
        name: "机场试用与体验验收",
        slug: "trial-and-verification",
        url: "/free/trial-and-verification/",
        h1: "机场免费试用选型与验收：体验时长、关键任务测试与付费转换",
        clusters: [
          {
            id: "trial-selection",
            name: "试用方案选择",
            slug: "trial-selection",
            url: "/free/trial-and-verification/trial-selection/",
            h1: "商业机场试用方案筛选：时限流量匹配、绑卡陷阱与功能限制",
            articles: [
              { stableId: "art-fre-013", title: "机场免费试用怎么选？时长、流量与任务匹配" },
              { stableId: "art-fre-014", title: "试用是否需要绑定支付方式？预授权、扣费与取消说明" },
              { stableId: "art-fre-015", title: "试用账号的资格限制：新用户、首购与账号条件" },
              { stableId: "art-fre-016", title: "试用期时长与流量说明：不同服务的差异" },
              { stableId: "art-fre-017", title: "试用期间的服务限制与功能开放范围" },
              { stableId: "art-fre-018", title: "试用方案选择完整清单" }
            ]
          },
          {
            id: "trial-acceptance",
            name: "试用结果与购买验收",
            slug: "trial-acceptance",
            url: "/free/trial-and-verification/trial-acceptance/",
            h1: "试用期质量验收与决策框架：多任务压力测试与转正式套餐",
            articles: [
              { stableId: "art-fre-019", title: "试用期应该测试哪些项目？连接、速度、AI 与视频" },
              { stableId: "art-fre-020", title: "试用期的连接验证方法：从订阅导入到正常使用" },
              { stableId: "art-fre-021", title: "试用期如何观察服务波动：连续记录与对照方法" },
              { stableId: "art-fre-022", title: "试用结束前的决策框架：续用、换用或退出" },
              { stableId: "art-fre-023", title: "试用转付费的注意事项：套餐切换与费用核对" },
              { stableId: "art-fre-024", title: "试用满意后如何正式购买：流程与凭证留存" }
            ]
          }
        ]
      },
      {
        id: "exit-and-alternatives",
        name: "免费服务退出与替代",
        slug: "exit-and-alternatives",
        url: "/free/exit-and-alternatives/",
        h1: "免费服务退出策略与替代：失效判断、隐私数据清理与平稳过渡",
        clusters: [
          {
            id: "failure-and-alternatives",
            name: "失效判断与替代路径",
            slug: "failure-and-alternatives",
            url: "/free/exit-and-alternatives/failure-and-alternatives/",
            h1: "免费资源失效应对指南：替代方案筛选与从免费到付费过渡",
            articles: [
              { stableId: "art-fre-025", title: "免费资源失效怎么判断？状态核对与更新记录" },
              { stableId: "art-fre-026", title: "免费资源失效后的替代方案：付费、低价与自建" },
              { stableId: "art-fre-027", title: "免费资源与低价付费的差别：成本、服务与责任范围" },
              { stableId: "art-fre-028", title: "什么情况下免费资源完全不可用？风险场景与规避" },
              { stableId: "art-fre-029", title: "从免费过渡到付费的判断节点" },
              { stableId: "art-fre-030", title: "免费资源的退出策略与替代路径完整说明" }
            ]
          },
          {
            id: "privacy-and-cleanup",
            name: "隐私检查与配置清理",
            slug: "privacy-and-cleanup",
            url: "/free/exit-and-alternatives/privacy-and-cleanup/",
            h1: "免费服务隐私边界核查：数据可见范围、凭证废弃与残留清理",
            articles: [
              { stableId: "art-fre-031", title: "免费资源的隐私条款应该怎么读？" },
              { stableId: "art-fre-032", title: "免费资源使用中的数据可见范围说明" },
              { stableId: "art-fre-033", title: "免费资源退出前的数据清理流程" },
              { stableId: "art-fre-034", title: "免费资源账号注销与凭据处理" },
              { stableId: "art-fre-035", title: "免费资源使用的安全边界" },
              { stableId: "art-fre-036", title: "免费资源隐私检查与清理清单" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cheap",
    name: "便宜机场",
    slug: "cheap",
    url: "/cheap/",
    h1: "便宜机场推荐：低预算、小流量与长期成本选型指南",
    targetWords: "7,000–9,500",
    role: "直接选择服务",
    userGets: "具体候选、适合人群、选择理由与限制",
    topics: [
      {
        id: "fixed-budget",
        name: "固定预算与入门套餐",
        slug: "fixed-budget",
        url: "/cheap/fixed-budget/",
        h1: "固定低预算选型指南：5-10元月付档位、小流量价值与服务取舍",
        clusters: [
          {
            id: "low-monthly-fee",
            name: "低月付选型",
            slug: "low-monthly-fee",
            url: "/cheap/fixed-budget/low-monthly-fee/",
            h1: "低门槛月付机场选型：5元/7元/10元入门档位与质量核对",
            articles: [
              { stableId: "art-chp-001", title: "5 元档机场有哪些？实际月付金额与流量说明" },
              { stableId: "art-chp-002", title: "7 元档机场怎么选？低预算下的服务质量核对" },
              { stableId: "art-chp-003", title: "10 元档机场推荐：入门级月付对比" },
              { stableId: "art-chp-004", title: "低预算机场的付款周期怎么选？" },
              { stableId: "art-chp-005", title: "低预算机场的入门套餐比较" },
              { stableId: "art-chp-006", title: "低预算机场选择清单" }
            ]
          },
          {
            id: "low-traffic-value",
            name: "小流量价值判断",
            slug: "low-traffic-value",
            url: "/cheap/fixed-budget/low-traffic-value/",
            h1: "小流量套餐价值判断：50GB以下月付适用场景与升级规则",
            articles: [
              { stableId: "art-chp-007", title: "小流量月付机场有哪些？50GB 以下的套餐对比" },
              { stableId: "art-chp-008", title: "小流量套餐的适用场景：轻度使用与备用" },
              { stableId: "art-chp-009", title: "小流量套餐的流量计算方式" },
              { stableId: "art-chp-010", title: "小流量套餐的设备与客户端支持" },
              { stableId: "art-chp-011", title: "小流量套餐的续费与升级" },
              { stableId: "art-chp-012", title: "小流量套餐价值判断清单" }
            ]
          }
        ]
      },
      {
        id: "low-frequency",
        name: "低频使用与备用预算",
        slug: "low-frequency",
        url: "/cheap/low-frequency/",
        h1: "低频使用与容灾备用方案：按量付费、流量包与双线预算配比",
        clusters: [
          {
            id: "intermittent-use",
            name: "间歇使用选型",
            slug: "intermittent-use",
            url: "/cheap/low-frequency/intermittent-use/",
            h1: "偶尔使用与按量计费指南：按需付费、流量消耗测算与周期选择",
            articles: [
              { stableId: "art-chp-013", title: "偶尔使用的机场怎么选？按量付费与月付对比" },
              { stableId: "art-chp-014", title: "流量包与月付哪个更适合低频使用？" },
              { stableId: "art-chp-015", title: "备用服务需要多少预算？成本控制方案" },
              { stableId: "art-chp-016", title: "低频使用者的流量消耗估算方法" },
              { stableId: "art-chp-017", title: "间歇使用场景的付款周期选择" },
              { stableId: "art-chp-018", title: "间歇使用选型完整说明" }
            ]
          },
          {
            id: "budget-allocation",
            name: "主备组合的预算分配",
            slug: "budget-allocation",
            url: "/cheap/low-frequency/budget-allocation/",
            h1: "主备服务预算组合与管理：流量配置、故障切换与收益评估",
            articles: [
              { stableId: "art-chp-019", title: "主力机场与备用机场的预算怎么分配？" },
              { stableId: "art-chp-020", title: "主备组合的流量与套餐配置" },
              { stableId: "art-chp-021", title: "主备服务的切换与验证" },
              { stableId: "art-chp-022", title: "主备组合的账号与凭据管理" },
              { stableId: "art-chp-023", title: "主备组合的成本收益分析" },
              { stableId: "art-chp-024", title: "主备组合预算分配完整说明" }
            ]
          }
        ]
      },
      {
        id: "long-term-cost",
        name: "长期成本与性价比",
        slug: "long-term-cost",
        url: "/cheap/long-term-cost/",
        h1: "长期持有成本与综合性价比：年付折算、倍率陷阱与预付风险",
        clusters: [
          {
            id: "cost-performance",
            name: "综合性价比评估",
            slug: "cost-performance",
            url: "/cheap/long-term-cost/cost-performance/",
            h1: "机场综合性价比核算：每GB实付成本、倍率影响与续费涨价",
            articles: [
              { stableId: "art-chp-025", title: "每 GB 成本怎么算？单位与口径核对" },
              { stableId: "art-chp-026", title: "月均费用怎么算？年付折算与实付对比" },
              { stableId: "art-chp-027", title: "流量倍率对成本的影响" },
              { stableId: "art-chp-028", title: "附加费用与升级成本" },
              { stableId: "art-chp-029", title: "续费价格上涨的处理" },
              { stableId: "art-chp-030", title: "性价比评估完整方法" }
            ]
          },
          {
            id: "prepaid-and-budget",
            name: "长期预付与持续预算",
            slug: "prepaid-and-budget",
            url: "/cheap/long-term-cost/prepaid-and-budget/",
            h1: "年付预付风险与预算管理：折算算法、折扣限制与服务连续性",
            articles: [
              { stableId: "art-chp-031", title: "年付机场有哪些？折合月费的正确算法" },
              { stableId: "art-chp-032", title: "年付实际总支出计算：含首购与续费" },
              { stableId: "art-chp-033", title: "年付与月付的成本差异" },
              { stableId: "art-chp-034", title: "年付折扣的适用条件与限制" },
              { stableId: "art-chp-035", title: "年付套餐的风险评估" },
              { stableId: "art-chp-036", title: "长期预付与持续预算完整说明" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "plans",
    name: "套餐对比",
    slug: "plans",
    url: "/plans/",
    h1: "机场套餐对比：付款周期、流量计量与总成本计算",
    targetWords: "7,000–9,500",
    role: "比较购买条件",
    userGets: "实际费用、计费规则、优惠资格",
    topics: [
      {
        id: "cycles-and-packs",
        name: "付款周期与流量包",
        slug: "cycles-and-packs",
        url: "/plans/cycles-and-packs/",
        h1: "付款周期与按量流量包规则：周期成本差异、有效期与扣费逻辑",
        clusters: [
          {
            id: "monthly-quarterly-yearly",
            name: "月付季付与年付",
            slug: "monthly-quarterly-yearly",
            url: "/plans/cycles-and-packs/monthly-quarterly-yearly/",
            h1: "月付季付年付全周期对比：总支出、灵活性与频次匹配框架",
            articles: [
              { stableId: "art-pln-001", title: "月付、季付、年付的对比方法" },
              { stableId: "art-pln-002", title: "不同付款周期的总支出计算" },
              { stableId: "art-pln-003", title: "付款周期与使用频率匹配" },
              { stableId: "art-pln-004", title: "付款周期与灵活性的取舍" },
              { stableId: "art-pln-005", title: "付款周期选择决策框架" },
              { stableId: "art-pln-006", title: "月付、季付与年付完整对比" }
            ]
          },
          {
            id: "non-expiring-and-metered",
            name: "不限时与按量规则",
            slug: "non-expiring-and-metered",
            url: "/plans/cycles-and-packs/non-expiring-and-metered/",
            h1: "不限时套餐与按量计费深入分析：盈亏平衡点、叠加扣款与真伪验证",
            articles: [
              { stableId: "art-pln-007", title: "不限时机场套餐是什么意思？流量有效期与账户有效期需要分开看" },
              { stableId: "art-pln-008", title: "按量付费机场怎样计算每GB成本？加入倍率与附加费用的比较方法" },
              { stableId: "art-pln-009", title: "不限时流量包与月付套餐的盈亏平衡点怎么算？" },
              { stableId: "art-pln-010", title: "多个不限时流量包叠加后先扣哪一份？购买前核对消耗顺序" },
              { stableId: "art-pln-011", title: "机场流量包有到期日还算不限时吗？识别宣传名称与实际规则" },
              { stableId: "art-pln-012", title: "流量包用完后补购还是改月付？根据后续用量重新计算" }
            ]
          }
        ]
      },
      {
        id: "traffic-and-limits",
        name: "流量计量与使用限制",
        slug: "traffic-and-limits",
        url: "/plans/traffic-and-limits/",
        h1: "流量计量标准与权益限制：倍率换算、并发设备上限与速率阈值",
        clusters: [
          {
            id: "quota-and-multipliers",
            name: "额度单位与流量倍率",
            slug: "quota-and-multipliers",
            url: "/plans/traffic-and-limits/quota-and-multipliers/",
            h1: "流量统计口径与节点倍率机制：双向计费、重置周期与耗尽规则",
            articles: [
              { stableId: "art-pln-013", title: "流量计量口径说明：原始单位与统计方式" },
              { stableId: "art-pln-014", title: "流量倍率的应用与影响" },
              { stableId: "art-pln-015", title: "上下行计费的差异" },
              { stableId: "art-pln-016", title: "流量重置周期的说明" },
              { stableId: "art-pln-017", title: "流量耗尽后的处理规则" },
              { stableId: "art-pln-018", title: "额度单位与流量倍率完整对比" }
            ]
          },
          {
            id: "rate-limits-and-concurrency",
            name: "限速并发与设备规则",
            slug: "rate-limits-and-concurrency",
            url: "/plans/traffic-and-limits/rate-limits-and-concurrency/",
            h1: "并发连接、速率上限与协议兼容性对比：技术参数与使用约束",
            articles: [
              { stableId: "art-pln-019", title: "客户端兼容性对比" },
              { stableId: "art-pln-020", title: "协议支持对比" },
              { stableId: "art-pln-021", title: "设备数量限制对比" },
              { stableId: "art-pln-022", title: "并发连接限制对比" },
              { stableId: "art-pln-023", title: "附加功能对比" },
              { stableId: "art-pln-024", title: "限速并发与设备规则完整说明" }
            ]
          }
        ]
      },
      {
        id: "changes-and-rights",
        name: "套餐变更与权益管理",
        slug: "changes-and-rights",
        url: "/plans/changes-and-rights/",
        h1: "套餐变更改版与用户权益处置：升降级补差价、停用与退款政策",
        clusters: [
          {
            id: "upgrades-and-downgrades",
            name: "升级降级与补差价",
            slug: "upgrades-and-downgrades",
            url: "/plans/changes-and-rights/upgrades-and-downgrades/",
            h1: "套餐升降级操作与差价换算：生效时机、流量折算与限制注意",
            articles: [
              { stableId: "art-pln-025", title: "套餐升级方法与注意事项" },
              { stableId: "art-pln-026", title: "套餐降级方法与限制" },
              { stableId: "art-pln-027", title: "升级降级的补差价计算" },
              { stableId: "art-pln-028", title: "套餐变更的生效时间" },
              { stableId: "art-pln-029", title: "套餐变更的影响范围" },
              { stableId: "art-pln-030", title: "升级降级完整说明" }
            ]
          },
          {
            id: "renewals-and-balances",
            name: "续费停止与余额处置",
            slug: "renewals-and-balances",
            url: "/plans/changes-and-rights/renewals-and-balances/",
            h1: "套餐续费、停用与余额清算：账户留存、退款政策与资产保护",
            articles: [
              { stableId: "art-pln-031", title: "套餐续费方法" },
              { stableId: "art-pln-032", title: "套餐停止使用流程" },
              { stableId: "art-pln-033", title: "余额与流量处置规则" },
              { stableId: "art-pln-034", title: "退款政策核对" },
              { stableId: "art-pln-035", title: "续费与停止的影响说明" },
              { stableId: "art-pln-036", title: "续费停止与余额处置完整说明" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "reviews",
    name: "机场评测",
    slug: "reviews",
    url: "/reviews/",
    h1: "机场评测与测速：测试方法、稳定性证据和场景验收",
    targetWords: "7,000–9,500",
    role: "核对品牌与证据",
    userGets: "测试记录、品牌资料、来源和变化",
    topics: [
      {
        id: "environment-and-methods",
        name: "测试环境与方法",
        slug: "environment-and-methods",
        url: "/reviews/environment-and-methods/",
        h1: "评测基准与实验环境控制：可重复性、工具版本与采样规范",
        clusters: [
          {
            id: "env-control-and-baseline",
            name: "环境控制与基线",
            slug: "env-control-and-baseline",
            url: "/reviews/environment-and-methods/env-control-and-baseline/",
            h1: "测试基线建立与实验控制：网络拓扑、软硬件环境与工具核验",
            articles: [
              { stableId: "art-rev-001", title: "机场测试环境说明：设备、网络、客户端与端点" },
              { stableId: "art-rev-002", title: "测试基线与对比说明" },
              { stableId: "art-rev-003", title: "测试条件的可重复性核对" },
              { stableId: "art-rev-004", title: "测试工具与版本说明" },
              { stableId: "art-rev-005", title: "测试环境记录方法" },
              { stableId: "art-rev-006", title: "环境控制与基线完整说明" }
            ]
          },
          {
            id: "sampling-and-verification",
            name: "采样统计与结果复核",
            slug: "sampling-and-verification",
            url: "/reviews/environment-and-methods/sampling-and-verification/",
            h1: "评测采样频率与数据复核标准：中位数/P95差异、统计口径与偏差处理",
            articles: [
              { stableId: "art-rev-007", title: "采样频率与样本量" },
              { stableId: "art-rev-008", title: "延迟中位数与 P95 的区别" },
              { stableId: "art-rev-009", title: "测试结果的统计口径" },
              { stableId: "art-rev-010", title: "复测频率与结论更新" },
              { stableId: "art-rev-011", title: "复测结果不一致时的处理" },
              { stableId: "art-rev-012", title: "采样统计与结果复核完整说明" }
            ]
          }
        ]
      },
      {
        id: "speed-and-stability",
        name: "速度延迟与持续稳定",
        slug: "speed-and-stability",
        url: "/reviews/speed-and-stability/",
        h1: "速度、延迟与晚高峰稳定性测量：吞吐量衰减、抖动与故障恢复",
        clusters: [
          {
            id: "throughput-and-latency",
            name: "吞吐与响应测量",
            slug: "throughput-and-latency",
            url: "/reviews/speed-and-stability/throughput-and-latency/",
            h1: "下载吞吐与端到端延迟测试：单线程/多线程、端点选择与峰值解读",
            articles: [
              { stableId: "art-rev-013", title: "机场下载速度测试方法：单位与方向" },
              { stableId: "art-rev-014", title: "单线程与多线程测速的区别" },
              { stableId: "art-rev-015", title: "测速端点选择与影响" },
              { stableId: "art-rev-016", title: "峰值速度与持续速度的区别" },
              { stableId: "art-rev-017", title: "测速结果的解读与局限" },
              { stableId: "art-rev-018", title: "吞吐与响应测量完整指南" }
            ]
          },
          {
            id: "peak-and-interruptions",
            name: "高峰波动与中断记录",
            slug: "peak-and-interruptions",
            url: "/reviews/speed-and-stability/peak-and-interruptions/",
            h1: "晚高峰可用性与连接中断监测：成功率统计、重连耗时与真实日志",
            articles: [
              { stableId: "art-rev-019", title: "机场可用性如何测量：成功标准与观察窗口" },
              { stableId: "art-rev-020", title: "连接成功率与失败次数的统计方法" },
              { stableId: "art-rev-021", title: "断连与重连的观察记录" },
              { stableId: "art-rev-022", title: "恢复时间的测量方法" },
              { stableId: "art-rev-023", title: "短期观测不外推全年：观察范围说明" },
              { stableId: "art-rev-024", title: "高峰波动与中断记录完整说明" }
            ]
          }
        ]
      },
      {
        id: "scenario-verification",
        name: "真实应用场景核验",
        slug: "scenario-verification",
        url: "/reviews/scenario-verification/",
        h1: "真实生产力场景压力验收：AI工具调用、长连接与4K视频流表现",
        clusters: [
          {
            id: "ai-verification",
            name: "AI能力验证方法",
            slug: "ai-verification",
            url: "/reviews/scenario-verification/ai-verification/",
            h1: "AI对话与编程工具真实环境测试：大文件传输、流式传输与并发调用",
            articles: [
              { stableId: "art-rev-025", title: "网页浏览任务测试方法" },
              { stableId: "art-rev-026", title: "文件传输任务测试方法" },
              { stableId: "art-rev-027", title: "AI 工具任务测试方法" },
              { stableId: "art-rev-028", title: "AI 编程连接测试方法" },
              { stableId: "art-rev-029", title: "多任务并行测试方法" },
              { stableId: "art-rev-030", title: "AI能力验证方法完整说明" }
            ]
          },
          {
            id: "video-verification",
            name: "视频播放验证方法",
            slug: "video-verification",
            url: "/reviews/scenario-verification/video-verification/",
            h1: "视频播放性能与画质验证方法：4K码率支撑、起播缓冲与卡顿排查",
            articles: [
              { stableId: "art-rev-031", title: "视频播放任务测试方法" },
              { stableId: "art-rev-032", title: "评测基准下 4K 播放的网络指标要求与测量" },
              { stableId: "art-rev-033", title: "视频画质的判断方法" },
              { stableId: "art-rev-034", title: "卡顿排查方法" },
              { stableId: "art-rev-035", title: "流媒体视频观看体验的实测验证流程" },
              { stableId: "art-rev-036", title: "视频播放验证方法完整说明" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "coupons",
    name: "机场优惠码",
    slug: "coupons",
    url: "/coupons/",
    h1: "机场优惠码：真实代码、适用条件与折后费用核算",
    targetWords: "7,000–9,500",
    role: "比较购买条件",
    userGets: "实际费用、计费规则、优惠资格",
    topics: [
      {
        id: "finding-and-eligibility",
        name: "优惠查找与资格核对",
        slug: "finding-and-eligibility",
        url: "/coupons/finding-and-eligibility/",
        h1: "优惠码来源真实性与资格门槛：官方渠道、首购限免与套餐限制",
        clusters: [
          {
            id: "sources-and-trust",
            name: "代码来源与可信核验",
            slug: "sources-and-trust",
            url: "/coupons/finding-and-eligibility/sources-and-trust/",
            h1: "折扣代码真实性与渠道核验：防虚假促销、过期归档与核验记录",
            articles: [
              { stableId: "art-cpn-001", title: "优惠码来源说明" },
              { stableId: "art-cpn-002", title: "优惠码真实性判断" },
              { stableId: "art-cpn-003", title: "优惠码核验方法" },
              { stableId: "art-cpn-004", title: "优惠码历史失效记录与鉴别标记" },
              { stableId: "art-cpn-005", title: "优惠码常见问题" },
              { stableId: "art-cpn-006", title: "代码来源与可信核验完整说明" }
            ]
          },
          {
            id: "first-and-renewal-eligibility",
            name: "首购续费与套餐资格",
            slug: "first-and-renewal-eligibility",
            url: "/coupons/finding-and-eligibility/first-and-renewal-eligibility/",
            h1: "首购特惠与老用户续费资格：年付叠加折扣与套餐适用范围",
            articles: [
              { stableId: "art-cpn-007", title: "首购优惠码有哪些" },
              { stableId: "art-cpn-008", title: "试用转首购的优惠叠加" },
              { stableId: "art-cpn-009", title: "首购与年付折扣的区别" },
              { stableId: "art-cpn-010", title: "首购优惠码的适用条件" },
              { stableId: "art-cpn-011", title: "续费优惠码有哪些" },
              { stableId: "art-cpn-012", title: "首购续费与套餐资格完整说明" }
            ]
          }
        ]
      },
      {
        id: "discounted-pricing-and-checkout",
        name: "折后价格与结算使用",
        slug: "discounted-pricing-and-checkout",
        url: "/coupons/discounted-pricing-and-checkout/",
        h1: "折后实付金额核算与结算验证：叠加机制、减免计算与订单留存",
        clusters: [
          {
            id: "discounts-and-stacking",
            name: "优惠折算与叠加规则",
            slug: "discounts-and-stacking",
            url: "/coupons/discounted-pricing-and-checkout/discounts-and-stacking/",
            h1: "不同折扣档位实际节省测算：9折/8折/7折换算与互斥规则",
            articles: [
              { stableId: "art-cpn-013", title: "9 折优惠的实际节省" },
              { stableId: "art-cpn-014", title: "8 折优惠的实际节省" },
              { stableId: "art-cpn-015", title: "7 折优惠的实际节省" },
              { stableId: "art-cpn-016", title: "优惠码叠加规则" },
              { stableId: "art-cpn-017", title: "优惠后实际付款金额" },
              { stableId: "art-cpn-018", title: "优惠折算与叠加规则完整说明" }
            ]
          },
          {
            id: "checkout-and-order-evidence",
            name: "结算验证与订单证据",
            slug: "checkout-and-order-evidence",
            url: "/coupons/discounted-pricing-and-checkout/checkout-and-order-evidence/",
            h1: "结账页面代码应用与生效检查：输入错误排查与订单凭据留存",
            articles: [
              { stableId: "art-cpn-019", title: "优惠码填写位置说明" },
              { stableId: "art-cpn-020", title: "优惠码结算确认" },
              { stableId: "art-cpn-021", title: "优惠码无法使用的原因" },
              { stableId: "art-cpn-022", title: "优惠码输入错误处理" },
              { stableId: "art-cpn-023", title: "优惠码生效验证" },
              { stableId: "art-cpn-024", title: "结算验证与订单证据完整说明" }
            ]
          }
        ]
      },
      {
        id: "changes-and-expiration",
        name: "优惠变更与失效处置",
        slug: "changes-and-expiration",
        url: "/coupons/changes-and-expiration/",
        h1: "促销代码有效期与变更管理：续费失效应对与定期维护机制",
        clusters: [
          {
            id: "renewals-and-changes",
            name: "续费与订单变更优惠",
            slug: "renewals-and-changes",
            url: "/coupons/changes-and-expiration/renewals-and-changes/",
            h1: "长周期续费与订单升降级折扣：变更对优惠的继承与重算",
            articles: [
              { stableId: "art-cpn-025", title: "续费优惠与首购优惠的差异" },
              { stableId: "art-cpn-026", title: "续费优惠使用步骤" },
              { stableId: "art-cpn-027", title: "续费优惠适用范围" },
              { stableId: "art-cpn-028", title: "订单变更对优惠的影响" },
              { stableId: "art-cpn-029", title: "优惠叠加与订单变更组合" },
              { stableId: "art-cpn-030", title: "续费与订单变更优惠完整说明" }
            ]
          },
          {
            id: "expiration-and-maintenance",
            name: "失效原因与记录维护",
            slug: "expiration-and-maintenance",
            url: "/coupons/changes-and-expiration/expiration-and-maintenance/",
            h1: "优惠券生命周期与失效归档：有效期判断、状态更新与纠错机制",
            articles: [
              { stableId: "art-cpn-031", title: "优惠码有效期判断" },
              { stableId: "art-cpn-032", title: "优惠码失效原因" },
              { stableId: "art-cpn-033", title: "优惠码状态更新" },
              { stableId: "art-cpn-034", title: "优惠码失效记录" },
              { stableId: "art-cpn-035", title: "优惠码维护方法" },
              { stableId: "art-cpn-036", title: "失效原因与记录维护完整说明" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "ai",
    name: "AI机场",
    slug: "ai",
    url: "/ai/",
    h1: "AI机场推荐：对话、多模态与AI编程的网络选型指南",
    targetWords: "7,000–9,500",
    role: "按用途选择",
    userGets: "对应工具、功能和设备的选择依据",
    topics: [
      {
        id: "chat-and-multimodal",
        name: "AI对话与多模态需求",
        slug: "chat-and-multimodal",
        url: "/ai/chat-and-multimodal/",
        h1: "主流AI大模型访问与多模态支持：节点风控、地区门槛与带宽要求",
        clusters: [
          {
            id: "web-chat-selection",
            name: "网页对话服务选型",
            slug: "web-chat-selection",
            url: "/ai/chat-and-multimodal/web-chat-selection/",
            h1: "ChatGPT / Claude / Gemini 对话选型：地域准入、延迟敏感与解锁",
            articles: [
              { stableId: "art-ai-001", title: "ChatGPT 用什么机场？网页访问与任务核验" },
              { stableId: "art-ai-002", title: "ChatGPT 网页版网络要求：延迟与稳定性" },
              { stableId: "art-ai-003", title: "Claude 用什么机场？地区与账号条件" },
              { stableId: "art-ai-004", title: "Gemini 使用条件与地区限制" },
              { stableId: "art-ai-005", title: "Claude 与 Gemini 的网络差异" },
              { stableId: "art-ai-006", title: "网页对话服务选型完整说明" }
            ]
          },
          {
            id: "files-voice-multimodal",
            name: "文件语音与多模态",
            slug: "files-voice-multimodal",
            url: "/ai/chat-and-multimodal/files-voice-multimodal/",
            h1: "AI多模态与高通量交互：大文件上传、实时语音通信与稳定性核验",
            articles: [
              { stableId: "art-ai-007", title: "AI 文件上传的网络要求" },
              { stableId: "art-ai-008", title: "AI 语音功能的网络要求" },
              { stableId: "art-ai-009", title: "AI 多模态任务的网络要求" },
              { stableId: "art-ai-010", title: "AI 多模态任务的稳定性要求" },
              { stableId: "art-ai-011", title: "AI 多模态场景的机场选择" },
              { stableId: "art-ai-012", title: "文件语音与多模态完整说明" }
            ]
          }
        ]
      },
      {
        id: "coding-and-dev",
        name: "AI编程与开发连接",
        slug: "coding-and-dev",
        url: "/ai/coding-and-dev/",
        h1: "开发工具链与API接口连通：Cursor/Copilot低延迟与流式传输方案",
        clusters: [
          {
            id: "ai-coding-tools",
            name: "AI编程工具方案",
            slug: "ai-coding-tools",
            url: "/ai/coding-and-dev/ai-coding-tools/",
            h1: "AI辅助编程网络配置：Cursor与GitHub Copilot长连接排障",
            articles: [
              { stableId: "art-ai-013", title: "AI 编程工具网络要求" },
              { stableId: "art-ai-014", title: "Cursor 与 GitHub Copilot 网络配置" },
              { stableId: "art-ai-015", title: "AI 编程连接异常排查" },
              { stableId: "art-ai-016", title: "AI 编程延迟与稳定性" },
              { stableId: "art-ai-017", title: "AI 编程工具的机场选择" },
              { stableId: "art-ai-018", title: "AI编程工具方案完整说明" }
            ]
          },
          {
            id: "api-and-streaming",
            name: "API与流式请求",
            slug: "api-and-streaming",
            url: "/ai/coding-and-dev/api-and-streaming/",
            h1: "模型API直连与Server-Sent Events流式请求：带宽、频率与选型",
            articles: [
              { stableId: "art-ai-019", title: "AI API 网络要求" },
              { stableId: "art-ai-020", title: "API 与网页版网络差异" },
              { stableId: "art-ai-021", title: "API 调用频率与带宽" },
              { stableId: "art-ai-022", title: "流式请求的网络要求" },
              { stableId: "art-ai-023", title: "API 场景的机场选择" },
              { stableId: "art-ai-024", title: "API与流式请求完整说明" }
            ]
          }
        ]
      },
      {
        id: "continuous-work-and-boundaries",
        name: "持续办公与数据边界",
        slug: "continuous-work-and-boundaries",
        url: "/ai/continuous-work-and-boundaries/",
        h1: "高强度日常生产力与数据安全边界：多工具共用、风控防关联与容灾",
        clusters: [
          {
            id: "continuity-and-failover",
            name: "工作连续性与备用",
            slug: "continuity-and-failover",
            url: "/ai/continuous-work-and-boundaries/continuity-and-failover/",
            h1: "AI高频办公网络连续性：多工具并发切换、心跳保持与备用线设计",
            articles: [
              { stableId: "art-ai-025", title: "多 AI 工具共用的网络环境" },
              { stableId: "art-ai-026", title: "AI 长期办公的网络要求" },
              { stableId: "art-ai-027", title: "AI 多工具切换的稳定性" },
              { stableId: "art-ai-028", title: "AI 长期办公的机场选择" },
              { stableId: "art-ai-029", title: "备用方案设计" },
              { stableId: "art-ai-030", title: "工作连续性与备用完整说明" }
            ]
          },
          {
            id: "collaboration-and-privacy",
            name: "协作与隐私约束",
            slug: "collaboration-and-privacy",
            url: "/ai/continuous-work-and-boundaries/collaboration-and-privacy/",
            h1: "企业级合规与数据安全边界：地区支持核验、数据传输与防关联",
            articles: [
              { stableId: "art-ai-031", title: "AI 工具地区支持核对方法" },
              { stableId: "art-ai-032", title: "AI 账号资格判断" },
              { stableId: "art-ai-033", title: "网络可达与功能可用的区别" },
              { stableId: "art-ai-034", title: "AI 数据的可见边界" },
              { stableId: "art-ai-035", title: "账号关联与安全提示" },
              { stableId: "art-ai-036", title: "协作与隐私约束完整说明" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "streaming",
    name: "流媒体机场",
    slug: "streaming",
    url: "/streaming/",
    h1: "流媒体机场推荐：平台条件、视频画质与设备选型指南",
    targetWords: "7,000–9,500",
    role: "按用途选择",
    userGets: "对应工具、功能和设备的选择依据",
    topics: [
      {
        id: "platforms-and-requirements",
        name: "平台需求与观看条件",
        slug: "platforms-and-requirements",
        url: "/streaming/platforms-and-requirements/",
        h1: "全球流媒体平台准入与多地区片库：原生IP辨识与综合观看方案",
        clusters: [
          {
            id: "netflix-selection",
            name: "Netflix观看选型",
            slug: "netflix-selection",
            url: "/streaming/platforms-and-requirements/netflix-selection/",
            h1: "Netflix全区解锁与画质保证：非自制剧解锁、IP纯净度与观测记录",
            articles: [
              { stableId: "art-stm-001", title: "Netflix 用什么机场？地区与账号条件" },
              { stableId: "art-stm-002", title: "Netflix 播放条件与画质" },
              { stableId: "art-stm-003", title: "Netflix 地区与片库" },
              { stableId: "art-stm-004", title: "Netflix 播放质量判断" },
              { stableId: "art-stm-005", title: "Netflix 观看记录方法" },
              { stableId: "art-stm-006", title: "Netflix观看选型完整说明" }
            ]
          },
          {
            id: "multi-platform-mix",
            name: "多平台需求组合",
            slug: "multi-platform-mix",
            url: "/streaming/platforms-and-requirements/multi-platform-mix/",
            h1: "Disney+/HBO Max/YouTube多平台共用选型：规则分流与网络要求",
            articles: [
              { stableId: "art-stm-007", title: "Disney+ 使用条件" },
              { stableId: "art-stm-008", title: "HBO Max 使用条件" },
              { stableId: "art-stm-009", title: "YouTube 用什么机场？4K 与直播区分" },
              { stableId: "art-stm-010", title: "多平台共用的机场选择" },
              { stableId: "art-stm-011", title: "多平台组合的网络方案" },
              { stableId: "art-stm-012", title: "多平台需求组合完整说明" }
            ]
          }
        ]
      },
      {
        id: "bitrate-and-continuity",
        name: "清晰度流量与连续播放",
        slug: "bitrate-and-continuity",
        url: "/streaming/bitrate-and-continuity/",
        h1: "超清码率要求与晚间高峰连续播放：4K带宽消耗与缓冲衰减排查",
        clusters: [
          {
            id: "quality-and-traffic-budget",
            name: "画质与流量预算",
            slug: "quality-and-traffic-budget",
            url: "/streaming/bitrate-and-continuity/quality-and-traffic-budget/",
            h1: "高画质视频码率与月度流量估算：4K实时吞吐需求与套餐配比",
            articles: [
              { stableId: "art-stm-013", title: "视频码率与清晰度" },
              { stableId: "art-stm-014", title: "4K 播放的网络要求" },
              { stableId: "art-stm-015", title: "清晰度与带宽的关系" },
              { stableId: "art-stm-016", title: "视频观看的流量消耗" },
              { stableId: "art-stm-017", title: "不同清晰度的流量差异" },
              { stableId: "art-stm-018", title: "画质与流量预算完整说明" }
            ]
          },
          {
            id: "peak-hours-and-continuous",
            name: "晚间与长时间观看",
            slug: "peak-hours-and-continuous",
            url: "/streaming/bitrate-and-continuity/peak-hours-and-continuous/",
            h1: "晚高峰时段长周期观影稳定性：缓冲停顿分析、专线冗余与验收",
            articles: [
              { stableId: "art-stm-019", title: "视频卡顿的原因分析" },
              { stableId: "art-stm-020", title: "缓冲与加载时间的观察" },
              { stableId: "art-stm-021", title: "连续观看的稳定性要求" },
              { stableId: "art-stm-022", title: "晚高峰的视频表现" },
              { stableId: "art-stm-023", title: "视频观看体验的验证" },
              { stableId: "art-stm-024", title: "晚间与长时间观看完整说明" }
            ]
          }
        ]
      },
      {
        id: "devices-and-home",
        name: "观看设备与家庭使用",
        slug: "devices-and-home",
        url: "/streaming/devices-and-home/",
        h1: "家庭多端流媒体落地：手机投屏、Apple TV与软路由家庭影院方案",
        clusters: [
          {
            id: "mobile-pc-casting",
            name: "手机电脑与投屏",
            slug: "mobile-pc-casting",
            url: "/streaming/devices-and-home/mobile-pc-casting/",
            h1: "移动端与PC大屏观影方案：AirPlay/DLNA协议透传与并发管理",
            articles: [
              { stableId: "art-stm-025", title: "手机端观看的机场选择" },
              { stableId: "art-stm-026", title: "电脑端观看的机场选择" },
              { stableId: "art-stm-027", title: "投屏场景的机场选择" },
              { stableId: "art-stm-028", title: "多设备同时观看" },
              { stableId: "art-stm-029", title: "移动网络下的观看" },
              { stableId: "art-stm-030", title: "手机电脑与投屏完整说明" }
            ]
          },
          {
            id: "tv-and-home-network",
            name: "电视与家庭网络方案",
            slug: "tv-and-home-network",
            url: "/streaming/devices-and-home/tv-and-home-network/",
            h1: "客厅大屏与智能电视接入：Android TV客户端安装与路由器透明代理",
            articles: [
              { stableId: "art-stm-031", title: "电视端使用机场的方式" },
              { stableId: "art-stm-032", title: "智能电视客户端配置" },
              { stableId: "art-stm-033", title: "电视与手机同时使用" },
              { stableId: "art-stm-034", title: "家庭网络的路由器配置" },
              { stableId: "art-stm-035", title: "家庭多设备视频方案" },
              { stableId: "art-stm-036", title: "电视与家庭网络方案完整说明" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "clients",
    name: "客户端教程",
    slug: "clients",
    url: "/clients/",
    h1: "代理客户端下载与机场教程：设备选择、订阅导入和配置维护",
    targetWords: "7,000–9,500",
    role: "完成使用",
    userGets: "下载、配置、验证与恢复步骤",
    topics: [
      {
        id: "selection-and-download",
        name: "客户端选择与下载",
        slug: "selection-and-download",
        url: "/clients/selection-and-download/",
        h1: "官方客户端安全下载与系统适配：Windows/macOS/iOS/Android指南",
        clusters: [
          {
            id: "desktop-clients",
            name: "桌面系统客户端",
            slug: "desktop-clients",
            url: "/clients/selection-and-download/desktop-clients/",
            h1: "Windows与macOS客户端选型：Clash Verge Rev/v2rayN官方来源与配置",
            articles: [
              { stableId: "art-clt-001", title: "Clash Verge Rev Windows 使用" },
              { stableId: "art-clt-002", title: "v2rayN 使用说明" },
              { stableId: "art-clt-003", title: "Windows 客户端下载来源" },
              { stableId: "art-clt-004", title: "Clash Verge Rev macOS 使用" },
              { stableId: "art-clt-005", title: "Linux 客户端说明" },
              { stableId: "art-clt-006", title: "桌面系统客户端完整指南" }
            ]
          },
          {
            id: "mobile-clients",
            name: "手机与平板客户端",
            slug: "mobile-clients",
            url: "/clients/selection-and-download/mobile-clients/",
            h1: "移动端代理软件对比指南：Shadowrocket与FlClash/v2rayNG安装使用",
            articles: [
              { stableId: "art-clt-007", title: "Android 客户端有哪些" },
              { stableId: "art-clt-008", title: "FlClash Android 使用" },
              { stableId: "art-clt-009", title: "v2rayNG 使用说明" },
              { stableId: "art-clt-010", title: "iPhone 客户端有哪些" },
              { stableId: "art-clt-011", title: "Shadowrocket 使用说明" },
              { stableId: "art-clt-012", title: "手机与平板客户端完整指南" }
            ]
          }
        ]
      },
      {
        id: "import-and-rules",
        name: "首次导入与规则配置",
        slug: "import-and-rules",
        url: "/clients/import-and-rules/",
        h1: "订阅解析导入与高级规则配置：分流策略、DNS接管与TUN虚拟网卡",
        clusters: [
          {
            id: "subscription-and-first-connect",
            name: "订阅与首次连接",
            slug: "subscription-and-first-connect",
            url: "/clients/import-and-rules/subscription-and-first-connect/",
            h1: "订阅链接结构与首次导入步骤：YAML配置解析与连通性验证",
            articles: [
              { stableId: "art-clt-013", title: "订阅格式说明" },
              { stableId: "art-clt-014", title: "YAML 配置结构" },
              { stableId: "art-clt-015", title: "订阅链接与配置文件关系" },
              { stableId: "art-clt-016", title: "订阅导入方法" },
              { stableId: "art-clt-017", title: "首次连接步骤" },
              { stableId: "art-clt-018", title: "订阅与首次连接完整说明" }
            ]
          },
          {
            id: "rules-dns-tun",
            name: "规则DNS与接管设置",
            slug: "rules-dns-tun",
            url: "/clients/import-and-rules/rules-dns-tun/",
            h1: "分流规则模式与全局TUN接管：规则/全局/直连与DNS防泄漏设置",
            articles: [
              { stableId: "art-clt-019", title: "规则模式说明" },
              { stableId: "art-clt-020", title: "全局模式说明" },
              { stableId: "art-clt-021", title: "直连模式说明" },
              { stableId: "art-clt-022", title: "DNS 设置说明" },
              { stableId: "art-clt-023", title: "TUN 模式说明" },
              { stableId: "art-clt-024", title: "规则DNS与接管设置完整说明" }
            ]
          }
        ]
      },
      {
        id: "maintenance-and-advanced",
        name: "配置维护与进阶接入",
        slug: "maintenance-and-advanced",
        url: "/clients/maintenance-and-advanced/",
        h1: "配置备份迁移与开发环境透明代理：CLI/Git/Docker与软路由接入",
        clusters: [
          {
            id: "updates-backup-migration",
            name: "更新备份与迁移",
            slug: "updates-backup-migration",
            url: "/clients/maintenance-and-advanced/updates-backup-migration/",
            h1: "客户端版本管理与配置资产备份：升降级防护与跨设备环境迁移",
            articles: [
              { stableId: "art-clt-025", title: "客户端升级方法" },
              { stableId: "art-clt-026", title: "客户端降级方法" },
              { stableId: "art-clt-027", title: "客户端配置备份" },
              { stableId: "art-clt-028", title: "客户端配置恢复" },
              { stableId: "art-clt-029", title: "客户端配置迁移" },
              { stableId: "art-clt-030", title: "更新备份与迁移完整说明" }
            ]
          },
          {
            id: "router-and-dev-env",
            name: "路由与开发环境接入",
            slug: "router-and-dev-env",
            url: "/clients/maintenance-and-advanced/router-and-dev-env/",
            h1: "工程师开发代理与网关路由接入：终端环境、包管理器与Git加速",
            articles: [
              { stableId: "art-clt-031", title: "路由器接入说明" },
              { stableId: "art-clt-032", title: "开发环境代理配置" },
              { stableId: "art-clt-033", title: "终端与命令行代理" },
              { stableId: "art-clt-034", title: "包管理器代理配置" },
              { stableId: "art-clt-035", title: "Git 代理配置" },
              { stableId: "art-clt-036", title: "路由与开发环境接入完整说明" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "troubleshooting",
    name: "网络排障",
    slug: "troubleshooting",
    url: "/troubleshooting/",
    h1: "机场网络排障：订阅失败、连接超时与应用异常处理指南",
    targetWords: "7,000–9,500",
    role: "完成使用",
    userGets: "下载、配置、验证与恢复步骤",
    topics: [
      {
        id: "subscription-and-formatting",
        name: "订阅获取与格式错误",
        slug: "subscription-and-formatting",
        url: "/troubleshooting/subscription-and-formatting/",
        h1: "订阅拉取与配置语法故障诊断：HTTP状态码排查与YAML解析修复",
        clusters: [
          {
            id: "subscription-url-errors",
            name: "订阅地址访问失败",
            slug: "subscription-url-errors",
            url: "/troubleshooting/subscription-and-formatting/subscription-url-errors/",
            h1: "订阅链接更新失败排障：403/404状态码、超时重试与浏览器比对",
            articles: [
              { stableId: "art-trb-001", title: "订阅更新失败怎么办" },
              { stableId: "art-trb-002", title: "订阅返回 403 处理" },
              { stableId: "art-trb-003", title: "订阅返回 404 处理" },
              { stableId: "art-trb-004", title: "订阅下载超时处理" },
              { stableId: "art-trb-005", title: "浏览器能打开但客户端失败" },
              { stableId: "art-trb-006", title: "订阅地址访问失败完整说明" }
            ]
          },
          {
            id: "parse-and-auth-errors",
            name: "格式解析与配置认证",
            slug: "parse-and-auth-errors",
            url: "/troubleshooting/subscription-and-formatting/parse-and-auth-errors/",
            h1: "配置语法与认证失败排障：YAML缩进错误、协议不受支持与节点被滤",
            articles: [
              { stableId: "art-trb-007", title: "YAML 语法错误处理" },
              { stableId: "art-trb-008", title: "订阅解析失败处理" },
              { stableId: "art-trb-009", title: "协议不支持处理" },
              { stableId: "art-trb-010", title: "节点被过滤处理" },
              { stableId: "art-trb-011", title: "配置被覆盖处理" },
              { stableId: "art-trb-012", title: "格式解析与配置认证完整说明" }
            ]
          }
        ]
      },
      {
        id: "connection-and-takeover",
        name: "连接失败与本地接管",
        slug: "connection-and-takeover",
        url: "/troubleshooting/connection-and-takeover/",
        h1: "本机代理接管与远端握手异常：系统代理残留、TUN网卡冲突与超时",
        clusters: [
          {
            id: "system-proxy-conflicts",
            name: "系统代理与本机冲突",
            slug: "system-proxy-conflicts",
            url: "/troubleshooting/connection-and-takeover/system-proxy-conflicts/",
            h1: "操作系统代理与网卡接管异常：TUN启动失败、权限不足与残留清理",
            articles: [
              { stableId: "art-trb-013", title: "系统代理不生效排查" },
              { stableId: "art-trb-014", title: "TUN 模式启动失败处理" },
              { stableId: "art-trb-015", title: "系统网络异常处理" },
              { stableId: "art-trb-016", title: "系统代理残留清理" },
              { stableId: "art-trb-017", title: "权限问题处理" },
              { stableId: "art-trb-018", title: "系统代理与本机冲突完整说明" }
            ]
          },
          {
            id: "handshake-and-link-errors",
            name: "节点链路与握手异常",
            slug: "handshake-and-link-errors",
            url: "/troubleshooting/connection-and-takeover/handshake-and-link-errors/",
            h1: "节点超时与链路阻断定位：全节点超时、TCP/TLS握手失败与认证阻断",
            articles: [
              { stableId: "art-trb-019", title: "全部节点超时排查" },
              { stableId: "art-trb-020", title: "部分节点不可用排查" },
              { stableId: "art-trb-021", title: "节点握手失败处理" },
              { stableId: "art-trb-022", title: "连接被重置处理" },
              { stableId: "art-trb-023", title: "节点认证失败处理" },
              { stableId: "art-trb-024", title: "节点链路与握手异常完整说明" }
            ]
          }
        ]
      },
      {
        id: "speed-drop-and-app-errors",
        name: "速度下降与应用异常",
        slug: "speed-drop-and-app-errors",
        url: "/troubleshooting/speed-drop-and-app-errors/",
        h1: "吞吐骤降与单应用分流异常：缓冲卡顿诊断与AI/流媒体隔离排查",
        clusters: [
          {
            id: "speed-and-buffering",
            name: "速度与缓冲问题",
            slug: "speed-and-buffering",
            url: "/troubleshooting/speed-drop-and-app-errors/speed-and-buffering/",
            h1: "网速慢与长缓冲瓶颈诊断：节点负载、本地MTU与持续吞吐排查",
            articles: [
              { stableId: "art-trb-025", title: "连接速度慢的原因分析" },
              { stableId: "art-trb-026", title: "速度波动观察方法" },
              { stableId: "art-trb-027", title: "视频卡顿排查" },
              { stableId: "art-trb-028", title: "下载速度慢排查" },
              { stableId: "art-trb-029", title: "速度优化的合理做法" },
              { stableId: "art-trb-030", title: "速度与缓冲问题完整说明" }
            ]
          },
          {
            id: "browser-and-app-issues",
            name: "浏览器与特定程序异常",
            slug: "browser-and-app-issues",
            url: "/troubleshooting/speed-drop-and-app-errors/browser-and-app-issues/",
            h1: "特定程序无法联网排查：浏览器可用而APP受阻、AI报错与规则漏网",
            articles: [
              { stableId: "art-trb-031", title: "特定网站无法访问" },
              { stableId: "art-trb-032", title: "特定应用无法连接" },
              { stableId: "art-trb-033", title: "AI 工具连接异常" },
              { stableId: "art-trb-034", title: "视频平台连接异常" },
              { stableId: "art-trb-035", title: "浏览器能上网但其他软件不能" },
              { stableId: "art-trb-036", title: "浏览器与特定程序异常完整说明" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "wiki",
    name: "机场百科",
    slug: "wiki",
    url: "/wiki/",
    h1: "机场百科：线路、协议、网络指标与隐私边界知识体系",
    targetWords: "7,000–9,500",
    role: "理解技术",
    userGets: "能影响选型与使用的概念、协议和指标",
    topics: [
      {
        id: "architecture-and-lines",
        name: "服务结构与线路实体",
        slug: "architecture-and-lines",
        url: "/wiki/architecture-and-lines/",
        h1: "代理网络拓扑与专线物理实体：入口出口、中转直连与IEPL/IPLC",
        clusters: [
          {
            id: "entities-and-roles",
            name: "订阅节点与客户端",
            slug: "entities-and-roles",
            url: "/wiki/architecture-and-lines/entities-and-roles/",
            h1: "代理通信实体与数据流向：客户端、订阅托管与远端出口角色",
            articles: [
              { stableId: "art-wik-001", title: "机场服务是什么：组成与角色" },
              { stableId: "art-wik-002", title: "客户端、订阅与节点的关系" },
              { stableId: "art-wik-003", title: "服务组成概念图" },
              { stableId: "art-wik-004", title: "服务实体的角色说明" },
              { stableId: "art-wik-005", title: "订阅与节点的通信流程" },
              { stableId: "art-wik-006", title: "订阅节点与客户端完整说明" }
            ]
          },
          {
            id: "entry-exit-and-labels",
            name: "入口出口与线路标签",
            slug: "entry-exit-and-labels",
            url: "/wiki/architecture-and-lines/entry-exit-and-labels/",
            h1: "专线架构与宣传标签辨析：IEPL/IPLC原理、国内BGP中转与直连",
            articles: [
              { stableId: "art-wik-007", title: "IEPL 专线说明" },
              { stableId: "art-wik-008", title: "IPLC 专线说明" },
              { stableId: "art-wik-009", title: "中转与直连的区别" },
              { stableId: "art-wik-010", title: "线路类型的实际影响" },
              { stableId: "art-wik-011", title: "线路标签与实际观测的区别" },
              { stableId: "art-wik-012", title: "入口出口与线路标签完整说明" }
            ]
          }
        ]
      },
      {
        id: "protocols-and-security",
        name: "传输协议与安全机制",
        slug: "protocols-and-security",
        url: "/wiki/protocols-and-security/",
        h1: "传输层协议与现代安全隧道：TCP/UDP/QUIC性能特征与TLS多层封装",
        clusters: [
          {
            id: "tcp-udp-quic",
            name: "TCP UDP与QUIC",
            slug: "tcp-udp-quic",
            url: "/wiki/protocols-and-security/tcp-udp-quic/",
            h1: "基础传输协议差异与拥塞控制：TCP重传/丢包、QUIC多路复用与MTU",
            articles: [
              { stableId: "art-wik-013", title: "TCP与UDP在代理连接中有什么区别？可靠传输、时延与应用需求解析" },
              { stableId: "art-wik-014", title: "QUIC与UDP是什么关系？为什么不能把UDP协议都当作同一种体验" },
              { stableId: "art-wik-015", title: "网络丢包时TCP连接会怎样变化？理解重传、拥塞控制与吞吐下降" },
              { stableId: "art-wik-016", title: "QUIC的多路复用如何工作？与连接切换和应用传输有什么关系" },
              { stableId: "art-wik-017", title: "长连接与短连接有什么区别？为什么网页浏览和持续输出需要不同观察指标" },
              { stableId: "art-wik-018", title: "MTU与分片会怎样影响代理连接？从数据包大小理解异常与性能边界" }
            ]
          },
          {
            id: "tls-and-proxy-layers",
            name: "TLS与代理协议层次",
            slug: "tls-and-proxy-layers",
            url: "/wiki/protocols-and-security/tls-and-proxy-layers/",
            h1: "密码学隧道与常见协议演变：TLS加密握手、VLESS、Trojan与SS对比",
            articles: [
              { stableId: "art-wik-019", title: "TLS 加密基础" },
              { stableId: "art-wik-020", title: "TLS 与代理协议的关系" },
              { stableId: "art-wik-021", title: "VLESS 协议说明" },
              { stableId: "art-wik-022", title: "Trojan 协议说明" },
              { stableId: "art-wik-023", title: "Shadowsocks 协议说明" },
              { stableId: "art-wik-024", title: "TLS与代理协议层次完整说明" }
            ]
          }
        ]
      },
      {
        id: "performance-and-privacy",
        name: "网络性能与隐私边界",
        slug: "performance-and-privacy",
        url: "/wiki/performance-and-privacy/",
        h1: "测量指标物理意义与数据安全边界：延迟丢包、DNS防泄露与IP纯净度",
        clusters: [
          {
            id: "metrics-and-meanings",
            name: "性能指标与测量含义",
            slug: "metrics-and-meanings",
            url: "/wiki/performance-and-privacy/metrics-and-meanings/",
            h1: "核心指标量化解读：延迟/抖动/丢包、带宽与持续吞吐测量方法",
            articles: [
              { stableId: "art-wik-025", title: "延迟、抖动、丢包指标" },
              { stableId: "art-wik-026", title: "带宽与吞吐的区别" },
              { stableId: "art-wik-027", title: "峰值速度与持续速度" },
              { stableId: "art-wik-028", title: "性能指标的测量方法" },
              { stableId: "art-wik-029", title: "性能指标的解读" },
              { stableId: "art-wik-030", title: "性能指标与测量含义完整说明" }
            ]
          },
          {
            id: "dns-ip-and-visibility",
            name: "DNS IP与数据可见性",
            slug: "dns-ip-and-visibility",
            url: "/wiki/performance-and-privacy/dns-ip-and-visibility/",
            h1: "域名解析与出口IP溯源：DoH/DoT安全解析、fake-ip机制与原生IP属性",
            articles: [
              { stableId: "art-wik-031", title: "DNS 解析流程" },
              { stableId: "art-wik-032", title: "DNS over HTTPS 与 DNS over TLS" },
              { stableId: "art-wik-033", title: "fake-ip 与 redir-host" },
              { stableId: "art-wik-034", title: "原生 IP 与广播 IP" },
              { stableId: "art-wik-035", title: "共享 IP 与独立 IP" },
              { stableId: "art-wik-036", title: "DNS IP与数据可见性完整说明" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "airports",
    name: "机场大全",
    slug: "airports",
    url: "/airports/",
    h1: "机场大全：品牌查询、官方资料与服务变更核验指南",
    targetWords: "7,000–9,500",
    role: "核对品牌与证据",
    userGets: "测试记录、品牌资料、来源和变化",
    topics: [
      {
        id: "search-and-profiles",
        name: "品牌查找与档案阅读",
        slug: "search-and-profiles",
        url: "/airports/search-and-profiles/",
        h1: "品牌正品入口鉴别与服务档案结构：名称别名核验、防仿冒与字段解读",
        clusters: [
          {
            id: "names-aliases-portals",
            name: "名称别名与正确入口",
            slug: "names-aliases-portals",
            url: "/airports/search-and-profiles/names-aliases-portals/",
            h1: "官方入口真伪核对与防假冒：域名演化历史、同名辨识与公告渠道",
            articles: [
              { stableId: "art-apt-001", title: "机场官网怎么辨认：品牌公告、域名关联与推广入口核验" },
              { stableId: "art-apt-002", title: "同名机场是不是同一家：品牌别名、域名与服务资料如何对照" },
              { stableId: "art-apt-003", title: "品牌官网入口核验方法" },
              { stableId: "art-apt-004", title: "品牌域名变更记录" },
              { stableId: "art-apt-005", title: "仿冒网站防范" },
              { stableId: "art-apt-006", title: "名称别名与正确入口完整说明" }
            ]
          },
          {
            id: "profiles-and-data-interpretation",
            name: "品牌档案与资料解释",
            slug: "profiles-and-data-interpretation",
            url: "/airports/search-and-profiles/profiles-and-data-interpretation/",
            h1: "服务实体统一档案阅读指南：参数定义、协议客户端支持与约束边界",
            articles: [
              { stableId: "art-apt-007", title: "品牌档案包含哪些字段" },
              { stableId: "art-apt-008", title: "品牌档案资料解释方法" },
              { stableId: "art-apt-009", title: "品牌服务范围说明" },
              { stableId: "art-apt-010", title: "品牌客户端支持说明" },
              { stableId: "art-apt-011", title: "品牌协议支持说明" },
              { stableId: "art-apt-012", title: "品牌档案与资料解释完整说明" }
            ]
          }
        ]
      },
      {
        id: "public-info-and-tos",
        name: "公开资料与服务条款",
        slug: "public-info-and-tos",
        url: "/airports/public-info-and-tos/",
        h1: "服务提供商公开承诺与条款交叉核查：公告机制、售后通道与套餐实据",
        clusters: [
          {
            id: "announcements-and-terms",
            name: "公告支持与条款核查",
            slug: "announcements-and-terms",
            url: "/airports/public-info-and-tos/announcements-and-terms/",
            h1: "运营方条款核实与支持能力核验：服务状态判断、工单响应与承诺边界",
            articles: [
              { stableId: "art-apt-013", title: "品牌公告渠道说明" },
              { stableId: "art-apt-014", title: "品牌服务状态判断" },
              { stableId: "art-apt-015", title: "品牌服务条款核查" },
              { stableId: "art-apt-016", title: "品牌客服支持渠道" },
              { stableId: "art-apt-017", title: "品牌服务承诺与限制" },
              { stableId: "art-apt-018", title: "公告支持与条款核查完整说明" }
            ]
          },
          {
            id: "plans-and-cross-verification",
            name: "套餐信息与来源交叉核对",
            slug: "plans-and-cross-verification",
            url: "/airports/public-info-and-tos/plans-and-cross-verification/",
            h1: "套餐数据核验日期与来源证据溯源：计费规则交叉对比与历史修正",
            articles: [
              { stableId: "art-apt-019", title: "品牌套餐数据说明" },
              { stableId: "art-apt-020", title: "套餐核验日期说明" },
              { stableId: "art-apt-021", title: "套餐更新记录" },
              { stableId: "art-apt-022", title: "套餐资料交叉核对" },
              { stableId: "art-apt-023", title: "套餐来源说明" },
              { stableId: "art-apt-024", title: "套餐信息与来源交叉核对完整说明" }
            ]
          }
        ]
      },
      {
        id: "changes-and-status",
        name: "品牌变更与服务状态",
        slug: "changes-and-status",
        url: "/airports/changes-and-status/",
        h1: "品牌演化时间线与异常退市记录：改名迁移、重大故障归档与纠错渠道",
        clusters: [
          {
            id: "migrations-and-adjustments",
            name: "改名迁移与服务调整",
            slug: "migrations-and-adjustments",
            url: "/airports/changes-and-status/migrations-and-adjustments/",
            h1: "品牌资产迁移与架构升级记录：改名合并、入口轮换与存量权益保障",
            articles: [
              { stableId: "art-apt-025", title: "品牌改名记录" },
              { stableId: "art-apt-026", title: "品牌服务迁移说明" },
              { stableId: "art-apt-027", title: "品牌服务调整记录" },
              { stableId: "art-apt-028", title: "品牌入口更新" },
              { stableId: "art-apt-029", title: "品牌服务变更影响" },
              { stableId: "art-apt-030", title: "改名迁移与服务调整完整说明" }
            ]
          },
          {
            id: "incidents-and-exit-records",
            name: "异常公告与退出信息",
            slug: "incidents-and-exit-records",
            url: "/airports/changes-and-status/incidents-and-exit-records/",
            h1: "重大事故与退市停运档案：故障公告追溯、终止服务核验与读者纠错",
            articles: [
              { stableId: "art-apt-031", title: "品牌故障公告" },
              { stableId: "art-apt-032", title: "品牌服务停止说明" },
              { stableId: "art-apt-033", title: "品牌退出记录" },
              { stableId: "art-apt-034", title: "品牌资料纠错" },
              { stableId: "art-apt-035", title: "品牌资料反馈" },
              { stableId: "art-apt-036", title: "异常公告与退出信息完整说明" }
            ]
          }
        ]
      }
    ]
  }
];

// 28 Airport Brands
const brandsData = [
  { rank: 1, id: "sds", name: "闪电鼠", registerUrl: "https://chenpin.shandianshuaff.com/#/?code=m28TvPVX", promoCode: "sd88", since: "2020", minPayment: "8 元/月", entryPlan: "247GB永久 或 96元/年 60GB/月", lineType: "IEPL + 企业内网专线", protocol: "VLESS", isPrimary: true },
  { rank: 2, id: "dalaoyun", name: "大佬云", registerUrl: "https://chenpin01.dalaoyunaff.com/#/?code=GQ6CL6Km", promoCode: "dly88", since: "2023", minPayment: "8元/月", entryPlan: "年付约8元/月 60GB", lineType: "IEPL", protocol: "VLESS", isPrimary: false },
  { rank: 3, id: "lly", name: "榴莲云", registerUrl: "https://chenpingan.liulianyunaff.com/#/?code=7pdjs9zt", promoCode: "ll88", since: "2023", minPayment: "8 元/月", entryPlan: "年付约8元/月 60GB", lineType: "IEPL", protocol: "VLESS", isPrimary: false },
  { rank: 4, id: "sxjs", name: "神行加速", registerUrl: "https://chenpingan01.shenxingaff.com/#/?code=RZ48f9wP", promoCode: "sx0077", since: "2023", minPayment: "16元/月", entryPlan: "16元/月 150GB", lineType: "IEPL", protocol: "VLESS", isPrimary: false },
  { rank: 5, id: "yjx", name: "云界线", registerUrl: "https://chenpingan.yunjiexianaff.com/#/?code=xLJGaIHM", promoCode: "yjx888", since: "2024", minPayment: "15元/月", entryPlan: "年付约8元/月 150GB", lineType: "IEPL", protocol: "VLESS", isPrimary: false },
  { rank: 6, id: "hqt", name: "环球梯", registerUrl: "https://chenpingan01.huanqiutiaff.com/#/?code=FGCcYdFo", promoCode: "hq66", since: "2020", minPayment: "8 元/月", entryPlan: "年付约8元/月 60GB", lineType: "企业级内网专线 + IEPL", protocol: "VLESS", isPrimary: false },
  { rank: 7, id: "jly", name: "极连云", registerUrl: "https://haozevpn.jlyvipaff.com/#/?code=6h2TMD5b", promoCode: "jly888", since: "2023", minPayment: "18 元/月", entryPlan: "18元/月 100GB", lineType: "IEPL", protocol: "VLESS", isPrimary: false },
  { rank: 8, id: "gnt", name: "光年梯", registerUrl: "https://gnt001.gntvipaff.cc/#/?code=rN3ybxa7", promoCode: null, since: "2025", minPayment: "7元/月", entryPlan: "18元/月 轻量版", lineType: "IEPL", protocol: "VLESS", isPrimary: false },
  { rank: 9, id: "byjd", name: "边缘节点", registerUrl: "https://wep.edgenovaaff.com/#/?code=papME7sh", promoCode: "xk808", since: "2023", minPayment: "22 元/月", entryPlan: "22/月 120GB", lineType: "待核实", protocol: "VLESS", isPrimary: false },
  { rank: 10, id: "sj", name: "速界", registerUrl: "https://pygllc.speedworldaff.cc/#/?code=ll8LjYBJ", promoCode: "sujie80", since: "2026", minPayment: "15 元/月", entryPlan: "15元/月50GB 到 200元/月1000GB", lineType: "IPLC 专线", protocol: "VLESS", isPrimary: false },
  { rank: 11, id: "kl", name: "快狸", registerUrl: "https://fanxiaobin.kuailiaff.com/#/?code=sOX6N4Tp", promoCode: "kuaili996", since: "2023", minPayment: "15元/月", entryPlan: "15元/月 50GB", lineType: "IEPL", protocol: "VLESS", isPrimary: false },
  { rank: 12, id: "kxy", name: "可信云", registerUrl: "https://everett7623.kosingaff.com//#/?code=Jl6dWU0G", promoCode: "lmao888", since: "2024", minPayment: "19 元/月", entryPlan: "19元/月 150GB", lineType: "企业级内网专线", protocol: "待核实", isPrimary: false },
  { rank: 13, id: "sy", name: "瞬云", registerUrl: "https://ddd.jichang.best/#/register?code=weN73kGq", promoCode: null, since: "2024", minPayment: "18 元/月", entryPlan: "18元/月 100GB", lineType: "IEPL", protocol: "待核实", isPrimary: false },
  { rank: 14, id: "yt", name: "云图", registerUrl: "https://super.ytjcok.org/#/register?code=BKvuyYJI", promoCode: null, since: "2025", minPayment: "18 元/月", entryPlan: "18元/月 110GB", lineType: "IEPL", protocol: "VLESS", isPrimary: false },
  { rank: 15, id: "kpjs", name: "鲲鹏加速", registerUrl: "https://kunpengjiasu.com/#/register?code=oBWoiCcv", promoCode: null, since: "2024", minPayment: "20 元/月", entryPlan: "20元/月 150GB", lineType: "IEPL", protocol: "VLESS", isPrimary: false }
];

console.log('Generating files...');
export { pillarsData, brandsData };
