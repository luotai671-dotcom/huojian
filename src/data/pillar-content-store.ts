export interface PillarMeta {
  id: string;
  name: string;
  h1: string;
  url: string;
  role: string;
  userGets: string;
  targetWords: string;
  tableHeaders: string[];
  tableRows: string[][];
  decisionTree: string;
  primaryBrandId: string;
}

export const pillarContents: Record<string, PillarMeta> = {
  "recommend": {
    "id": "recommend",
    "name": "机场推荐",
    "h1": "机场推荐：从使用需求到具体品牌的选购指南",
    "url": "/recommend/",
    "role": "直接选择服务",
    "userGets": "具体候选、适合人群、选择理由与限制",
    "targetWords": "7,000–9,500",
    "tableHeaders": [
      "服务商",
      "最低门槛",
      "线路架构",
      "核心协议",
      "设备限制",
      "AI支持",
      "流媒体支持",
      "核验状态",
      "官网注册"
    ],
    "tableRows": [
      [
        "<a href=\"/reviews/shandian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">闪电鼠 (主推)</a>",
        "8元/月",
        "IEPL+企业内网专线",
        "VLESS / Trojan",
        "3台并发",
        "原生支持 ChatGPT/Claude",
        "4K 全区解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shandian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/liulian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">榴莲云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=liulian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/dalao-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">大佬云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=dalao\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/yunjiexian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">云界线</a>",
        "15元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "常规 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=yunjiexian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shenxing-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">神行加速</a>",
        "16元/月",
        "IEPL 专线",
        "VLESS",
        "5台并发",
        "支持 AI 编程/API",
        "全平台解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shenxing\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/huanqiu-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">环球梯</a>",
        "8元/月",
        "企业内网专线+IEPL",
        "VLESS",
        "3台并发",
        "支持多模态交互",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=huanqiu\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/jilian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">极连云</a>",
        "18元/月",
        "IEPL 专线",
        "VLESS",
        "4台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=jilian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/guangnian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">光年梯</a>",
        "7元/月",
        "IEPL 专线",
        "VLESS",
        "2台并发",
        "支持基础对话",
        "支持 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=guangnian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ]
    ],
    "decisionTree": "┌── 用户核心诉求选择\n│\n├── [分支 A] 预算敏感型（月支出预算 ≤ 10 元）\n│    ├── 诉求 A1: 偶尔查阅资料、轻量网页交互（月消耗 ≤ 30GB）\n│    │    └── 推荐决策: 选择小额月付（如 8元/月 60GB 入门包）或长期按量流量包，保留资金灵活性。\n│    └── 诉求 A2: 长期高频使用、追求极致性价比\n│         └── 推荐决策: 经首月月付实测满意后，选择年付折算方案（折合 7-8 元/月），避免单月多次充值。\n│\n├── [分支 B] 生产力办公与工程开发（强调高可用率与极低断连率）\n│    ├── 诉求 B1: AI 工具高频交互（ChatGPT / Claude / Cursor 编程）\n│    │    └── 推荐决策: 优先选择原生住宅出口与具备长连接保活机制的专线服务，避开高风控机房 IP。\n│    └── 诉求 B2: 团队多端协作（手机、Mac、Windows 终端与 Git 环境联动）\n│         └── 推荐决策: 核实并发连接数限制（建议 ≥ 3-5 台），并选择支持 TUN 全局虚拟网卡接管的服务。\n│\n└── [分支 C] 流媒体与家庭大屏影音（强调晚高峰大带宽持续吞吐）\n     ├── 诉求 C1: 手机平板移动端观看（1080P / 4K 灵活切换）\n     │    └── 推荐决策: 选择节点倍率合理、常规节点充足的套餐，控制大流量消耗成本。\n     └── 诉求 C2: Apple TV / 智能电视家庭影院（持续 4K 60fps 码率要求）\n          └── 推荐决策: 必须配置软路由或网关透明代理，选用具备大冗余专线带宽且晚高峰延迟抖动 < 15ms 的服务。",
    "primaryBrandId": "sds"
  },
  "free": {
    "id": "free",
    "name": "免费机场",
    "h1": "免费机场与试用指南：资源条件、领取流程和使用边界",
    "url": "/free/",
    "role": "直接选择服务",
    "userGets": "具体候选、适合人群、选择理由与限制",
    "targetWords": "7,000–9,500",
    "tableHeaders": [
      "服务商",
      "最低门槛",
      "线路架构",
      "核心协议",
      "设备限制",
      "AI支持",
      "流媒体支持",
      "核验状态",
      "官网注册"
    ],
    "tableRows": [
      [
        "<a href=\"/reviews/dalao-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">大佬云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=dalao\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shenxing-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">神行加速</a>",
        "16元/月",
        "IEPL 专线",
        "VLESS",
        "5台并发",
        "支持 AI 编程/API",
        "全平台解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shenxing\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/huanqiu-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">环球梯</a>",
        "8元/月",
        "企业内网专线+IEPL",
        "VLESS",
        "3台并发",
        "支持多模态交互",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=huanqiu\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shandian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">闪电鼠 (主推)</a>",
        "8元/月",
        "IEPL+企业内网专线",
        "VLESS / Trojan",
        "3台并发",
        "原生支持 ChatGPT/Claude",
        "4K 全区解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shandian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/yunjiexian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">云界线</a>",
        "15元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "常规 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=yunjiexian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/liulian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">榴莲云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=liulian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/jilian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">极连云</a>",
        "18元/月",
        "IEPL 专线",
        "VLESS",
        "4台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=jilian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/guangnian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">光年梯</a>",
        "7元/月",
        "IEPL 专线",
        "VLESS",
        "2台并发",
        "支持基础对话",
        "支持 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=guangnian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ]
    ],
    "decisionTree": "┌── 用户核心诉求选择\n│\n├── [分支 A] 预算敏感型（月支出预算 ≤ 10 元）\n│    ├── 诉求 A1: 偶尔查阅资料、轻量网页交互（月消耗 ≤ 30GB）\n│    │    └── 推荐决策: 选择小额月付（如 8元/月 60GB 入门包）或长期按量流量包，保留资金灵活性。\n│    └── 诉求 A2: 长期高频使用、追求极致性价比\n│         └── 推荐决策: 经首月月付实测满意后，选择年付折算方案（折合 7-8 元/月），避免单月多次充值。\n│\n├── [分支 B] 生产力办公与工程开发（强调高可用率与极低断连率）\n│    ├── 诉求 B1: AI 工具高频交互（ChatGPT / Claude / Cursor 编程）\n│    │    └── 推荐决策: 优先选择原生住宅出口与具备长连接保活机制的专线服务，避开高风控机房 IP。\n│    └── 诉求 B2: 团队多端协作（手机、Mac、Windows 终端与 Git 环境联动）\n│         └── 推荐决策: 核实并发连接数限制（建议 ≥ 3-5 台），并选择支持 TUN 全局虚拟网卡接管的服务。\n│\n└── [分支 C] 流媒体与家庭大屏影音（强调晚高峰大带宽持续吞吐）\n     ├── 诉求 C1: 手机平板移动端观看（1080P / 4K 灵活切换）\n     │    └── 推荐决策: 选择节点倍率合理、常规节点充足的套餐，控制大流量消耗成本。\n     └── 诉求 C2: Apple TV / 智能电视家庭影院（持续 4K 60fps 码率要求）\n          └── 推荐决策: 必须配置软路由或网关透明代理，选用具备大冗余专线带宽且晚高峰延迟抖动 < 15ms 的服务。",
    "primaryBrandId": "sds"
  },
  "cheap": {
    "id": "cheap",
    "name": "便宜机场",
    "h1": "便宜机场推荐：低预算、小流量与长期成本选型指南",
    "url": "/cheap/",
    "role": "直接选择服务",
    "userGets": "具体候选、适合人群、选择理由与限制",
    "targetWords": "7,000–9,500",
    "tableHeaders": [
      "服务商",
      "最低门槛",
      "线路架构",
      "核心协议",
      "设备限制",
      "AI支持",
      "流媒体支持",
      "核验状态",
      "官网注册"
    ],
    "tableRows": [
      [
        "<a href=\"/reviews/yunjiexian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">云界线</a>",
        "15元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "常规 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=yunjiexian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/huanqiu-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">环球梯</a>",
        "8元/月",
        "企业内网专线+IEPL",
        "VLESS",
        "3台并发",
        "支持多模态交互",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=huanqiu\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/liulian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">榴莲云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=liulian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shandian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">闪电鼠 (主推)</a>",
        "8元/月",
        "IEPL+企业内网专线",
        "VLESS / Trojan",
        "3台并发",
        "原生支持 ChatGPT/Claude",
        "4K 全区解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shandian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/dalao-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">大佬云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=dalao\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shenxing-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">神行加速</a>",
        "16元/月",
        "IEPL 专线",
        "VLESS",
        "5台并发",
        "支持 AI 编程/API",
        "全平台解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shenxing\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/jilian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">极连云</a>",
        "18元/月",
        "IEPL 专线",
        "VLESS",
        "4台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=jilian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/guangnian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">光年梯</a>",
        "7元/月",
        "IEPL 专线",
        "VLESS",
        "2台并发",
        "支持基础对话",
        "支持 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=guangnian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ]
    ],
    "decisionTree": "┌── 用户核心诉求选择\n│\n├── [分支 A] 预算敏感型（月支出预算 ≤ 10 元）\n│    ├── 诉求 A1: 偶尔查阅资料、轻量网页交互（月消耗 ≤ 30GB）\n│    │    └── 推荐决策: 选择小额月付（如 8元/月 60GB 入门包）或长期按量流量包，保留资金灵活性。\n│    └── 诉求 A2: 长期高频使用、追求极致性价比\n│         └── 推荐决策: 经首月月付实测满意后，选择年付折算方案（折合 7-8 元/月），避免单月多次充值。\n│\n├── [分支 B] 生产力办公与工程开发（强调高可用率与极低断连率）\n│    ├── 诉求 B1: AI 工具高频交互（ChatGPT / Claude / Cursor 编程）\n│    │    └── 推荐决策: 优先选择原生住宅出口与具备长连接保活机制的专线服务，避开高风控机房 IP。\n│    └── 诉求 B2: 团队多端协作（手机、Mac、Windows 终端与 Git 环境联动）\n│         └── 推荐决策: 核实并发连接数限制（建议 ≥ 3-5 台），并选择支持 TUN 全局虚拟网卡接管的服务。\n│\n└── [分支 C] 流媒体与家庭大屏影音（强调晚高峰大带宽持续吞吐）\n     ├── 诉求 C1: 手机平板移动端观看（1080P / 4K 灵活切换）\n     │    └── 推荐决策: 选择节点倍率合理、常规节点充足的套餐，控制大流量消耗成本。\n     └── 诉求 C2: Apple TV / 智能电视家庭影院（持续 4K 60fps 码率要求）\n          └── 推荐决策: 必须配置软路由或网关透明代理，选用具备大冗余专线带宽且晚高峰延迟抖动 < 15ms 的服务。",
    "primaryBrandId": "sds"
  },
  "plans": {
    "id": "plans",
    "name": "套餐对比",
    "h1": "机场套餐对比：付款周期、流量计量与总成本计算",
    "url": "/plans/",
    "role": "比较购买条件",
    "userGets": "实际费用、计费规则、优惠资格",
    "targetWords": "7,000–9,500",
    "tableHeaders": [
      "服务商",
      "最低门槛",
      "线路架构",
      "核心协议",
      "设备限制",
      "AI支持",
      "流媒体支持",
      "核验状态",
      "官网注册"
    ],
    "tableRows": [
      [
        "<a href=\"/reviews/shandian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">闪电鼠 (主推)</a>",
        "8元/月",
        "IEPL+企业内网专线",
        "VLESS / Trojan",
        "3台并发",
        "原生支持 ChatGPT/Claude",
        "4K 全区解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shandian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/liulian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">榴莲云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=liulian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/dalao-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">大佬云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=dalao\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/yunjiexian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">云界线</a>",
        "15元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "常规 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=yunjiexian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shenxing-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">神行加速</a>",
        "16元/月",
        "IEPL 专线",
        "VLESS",
        "5台并发",
        "支持 AI 编程/API",
        "全平台解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shenxing\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/huanqiu-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">环球梯</a>",
        "8元/月",
        "企业内网专线+IEPL",
        "VLESS",
        "3台并发",
        "支持多模态交互",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=huanqiu\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/jilian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">极连云</a>",
        "18元/月",
        "IEPL 专线",
        "VLESS",
        "4台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=jilian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/guangnian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">光年梯</a>",
        "7元/月",
        "IEPL 专线",
        "VLESS",
        "2台并发",
        "支持基础对话",
        "支持 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=guangnian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ]
    ],
    "decisionTree": "┌── 用户核心诉求选择\n│\n├── [分支 A] 预算敏感型（月支出预算 ≤ 10 元）\n│    ├── 诉求 A1: 偶尔查阅资料、轻量网页交互（月消耗 ≤ 30GB）\n│    │    └── 推荐决策: 选择小额月付（如 8元/月 60GB 入门包）或长期按量流量包，保留资金灵活性。\n│    └── 诉求 A2: 长期高频使用、追求极致性价比\n│         └── 推荐决策: 经首月月付实测满意后，选择年付折算方案（折合 7-8 元/月），避免单月多次充值。\n│\n├── [分支 B] 生产力办公与工程开发（强调高可用率与极低断连率）\n│    ├── 诉求 B1: AI 工具高频交互（ChatGPT / Claude / Cursor 编程）\n│    │    └── 推荐决策: 优先选择原生住宅出口与具备长连接保活机制的专线服务，避开高风控机房 IP。\n│    └── 诉求 B2: 团队多端协作（手机、Mac、Windows 终端与 Git 环境联动）\n│         └── 推荐决策: 核实并发连接数限制（建议 ≥ 3-5 台），并选择支持 TUN 全局虚拟网卡接管的服务。\n│\n└── [分支 C] 流媒体与家庭大屏影音（强调晚高峰大带宽持续吞吐）\n     ├── 诉求 C1: 手机平板移动端观看（1080P / 4K 灵活切换）\n     │    └── 推荐决策: 选择节点倍率合理、常规节点充足的套餐，控制大流量消耗成本。\n     └── 诉求 C2: Apple TV / 智能电视家庭影院（持续 4K 60fps 码率要求）\n          └── 推荐决策: 必须配置软路由或网关透明代理，选用具备大冗余专线带宽且晚高峰延迟抖动 < 15ms 的服务。",
    "primaryBrandId": "sds"
  },
  "reviews": {
    "id": "reviews",
    "name": "机场评测",
    "h1": "机场评测与测速：测试方法、稳定性证据和场景验收",
    "url": "/reviews/",
    "role": "核对品牌与证据",
    "userGets": "测试记录、品牌资料、来源和变化",
    "targetWords": "7,000–9,500",
    "tableHeaders": [
      "服务商",
      "最低门槛",
      "线路架构",
      "核心协议",
      "设备限制",
      "AI支持",
      "流媒体支持",
      "核验状态",
      "官网注册"
    ],
    "tableRows": [
      [
        "<a href=\"/reviews/shandian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">闪电鼠 (主推)</a>",
        "8元/月",
        "IEPL+企业内网专线",
        "VLESS / Trojan",
        "3台并发",
        "原生支持 ChatGPT/Claude",
        "4K 全区解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shandian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/liulian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">榴莲云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=liulian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/dalao-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">大佬云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=dalao\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/yunjiexian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">云界线</a>",
        "15元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "常规 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=yunjiexian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shenxing-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">神行加速</a>",
        "16元/月",
        "IEPL 专线",
        "VLESS",
        "5台并发",
        "支持 AI 编程/API",
        "全平台解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shenxing\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/huanqiu-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">环球梯</a>",
        "8元/月",
        "企业内网专线+IEPL",
        "VLESS",
        "3台并发",
        "支持多模态交互",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=huanqiu\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/jilian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">极连云</a>",
        "18元/月",
        "IEPL 专线",
        "VLESS",
        "4台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=jilian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/guangnian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">光年梯</a>",
        "7元/月",
        "IEPL 专线",
        "VLESS",
        "2台并发",
        "支持基础对话",
        "支持 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=guangnian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ]
    ],
    "decisionTree": "┌── 用户核心诉求选择\n│\n├── [分支 A] 预算敏感型（月支出预算 ≤ 10 元）\n│    ├── 诉求 A1: 偶尔查阅资料、轻量网页交互（月消耗 ≤ 30GB）\n│    │    └── 推荐决策: 选择小额月付（如 8元/月 60GB 入门包）或长期按量流量包，保留资金灵活性。\n│    └── 诉求 A2: 长期高频使用、追求极致性价比\n│         └── 推荐决策: 经首月月付实测满意后，选择年付折算方案（折合 7-8 元/月），避免单月多次充值。\n│\n├── [分支 B] 生产力办公与工程开发（强调高可用率与极低断连率）\n│    ├── 诉求 B1: AI 工具高频交互（ChatGPT / Claude / Cursor 编程）\n│    │    └── 推荐决策: 优先选择原生住宅出口与具备长连接保活机制的专线服务，避开高风控机房 IP。\n│    └── 诉求 B2: 团队多端协作（手机、Mac、Windows 终端与 Git 环境联动）\n│         └── 推荐决策: 核实并发连接数限制（建议 ≥ 3-5 台），并选择支持 TUN 全局虚拟网卡接管的服务。\n│\n└── [分支 C] 流媒体与家庭大屏影音（强调晚高峰大带宽持续吞吐）\n     ├── 诉求 C1: 手机平板移动端观看（1080P / 4K 灵活切换）\n     │    └── 推荐决策: 选择节点倍率合理、常规节点充足的套餐，控制大流量消耗成本。\n     └── 诉求 C2: Apple TV / 智能电视家庭影院（持续 4K 60fps 码率要求）\n          └── 推荐决策: 必须配置软路由或网关透明代理，选用具备大冗余专线带宽且晚高峰延迟抖动 < 15ms 的服务。",
    "primaryBrandId": "sds"
  },
  "coupons": {
    "id": "coupons",
    "name": "机场优惠码",
    "h1": "机场优惠码：真实代码、适用条件与折后费用核算",
    "url": "/coupons/",
    "role": "比较购买条件",
    "userGets": "实际费用、计费规则、优惠资格",
    "targetWords": "7,000–9,500",
    "tableHeaders": [
      "服务商",
      "专属优惠代码",
      "折扣力度",
      "最低门槛",
      "线路架构",
      "适用规则",
      "流媒体/AI支持",
      "核验状态",
      "官网注册"
    ],
    "tableRows": [
      [
        "<a href=\"/reviews/shandian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">闪电鼠 (主推)</a>",
        "sd88",
        "7折优惠",
        "8元/月",
        "IEPL+企业内网专线",
        "全场套餐通用",
        "4K 全区 / 原生 AI",
        "实测已生效",
        "<a href=\"/go.html?id=shandian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/liulian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">榴莲云</a>",
        "ll88",
        "7折优惠",
        "8元/月",
        "IEPL 专线",
        "新老用户通用",
        "支持 4K / 主流对话",
        "实测已生效",
        "<a href=\"/go.html?id=liulian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/dalao-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">大佬云</a>",
        "dly88",
        "7折优惠",
        "8元/月",
        "IEPL 专线",
        "月付及年付通用",
        "支持 4K / 主流对话",
        "实测已生效",
        "<a href=\"/go.html?id=dalao\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/yunjiexian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">云界线</a>",
        "yjx888",
        "7折优惠",
        "15元/月",
        "IEPL 专线",
        "年付套餐可用",
        "常规 1080P/4K",
        "实测已生效",
        "<a href=\"/go.html?id=yunjiexian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shenxing-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">神行加速</a>",
        "sx0077",
        "7折优惠",
        "16元/月",
        "IEPL 专线",
        "首购与进阶专属",
        "全平台 / AI编程API",
        "实测已生效",
        "<a href=\"/go.html?id=shenxing\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/huanqiu-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">环球梯</a>",
        "hq66",
        "7折优惠",
        "8元/月",
        "企业内网专线+IEPL",
        "限时全场折扣",
        "支持 4K / 多模态交互",
        "实测已生效",
        "<a href=\"/go.html?id=huanqiu\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/jilian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">极连云</a>",
        "jly888",
        "88折优惠",
        "18元/月",
        "IEPL 专线",
        "新用户充值抵扣",
        "支持 4K / 主流对话",
        "实测已生效",
        "<a href=\"/go.html?id=jilian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/guangnian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">光年梯</a>",
        "直连特惠",
        "周期默认折扣",
        "7元/月",
        "IEPL 专线",
        "低门槛入门直连",
        "支持 1080P/4K",
        "实测已生效",
        "<a href=\"/go.html?id=guangnian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ]
    ],
    "decisionTree": "┌── 用户核心诉求选择\n│\n├── [分支 A] 预算敏感型（月支出预算 ≤ 10 元）\n│    ├── 诉求 A1: 偶尔查阅资料、轻量网页交互（月消耗 ≤ 30GB）\n│    │    └── 推荐决策: 选择小额月付（如 8元/月 60GB 入门包）或长期按量流量包，保留资金灵活性。\n│    └── 诉求 A2: 长期高频使用、追求极致性价比\n│         └── 推荐决策: 经首月月付实测满意后，选择年付折算方案（折合 7-8 元/月），避免单月多次充值。\n│\n├── [分支 B] 生产力办公与工程开发（强调高可用率与极低断连率）\n│    ├── 诉求 B1: AI 工具高频交互（ChatGPT / Claude / Cursor 编程）\n│    │    └── 推荐决策: 优先选择原生住宅出口与具备长连接保活机制的专线服务，避开高风控机房 IP。\n│    └── 诉求 B2: 团队多端协作（手机、Mac、Windows 终端与 Git 环境联动）\n│         └── 推荐决策: 核实并发连接数限制（建议 ≥ 3-5 台），并选择支持 TUN 全局虚拟网卡接管的服务。\n│\n└── [分支 C] 流媒体与家庭大屏影音（强调晚高峰大带宽持续吞吐）\n     ├── 诉求 C1: 手机平板移动端观看（1080P / 4K 灵活切换）\n     │    └── 推荐决策: 选择节点倍率合理、常规节点充足的套餐，控制大流量消耗成本。\n     └── 诉求 C2: Apple TV / 智能电视家庭影院（持续 4K 60fps 码率要求）\n          └── 推荐决策: 必须配置软路由或网关透明代理，选用具备大冗余专线带宽且晚高峰延迟抖动 < 15ms 的服务。",
    "primaryBrandId": "sds"
  },
  "ai": {
    "id": "ai",
    "name": "AI机场",
    "h1": "AI机场推荐：对话、多模态与AI编程的网络选型指南",
    "url": "/ai/",
    "role": "按用途选择",
    "userGets": "对应工具、功能和设备的选择依据",
    "targetWords": "7,000–9,500",
    "tableHeaders": [
      "服务商",
      "最低门槛",
      "线路架构",
      "核心协议",
      "设备限制",
      "AI支持",
      "流媒体支持",
      "核验状态",
      "官网注册"
    ],
    "tableRows": [
      [
        "<a href=\"/reviews/shandian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">闪电鼠 (主推)</a>",
        "8元/月",
        "IEPL+企业内网专线",
        "VLESS / Trojan",
        "3台并发",
        "原生支持 ChatGPT/Claude",
        "4K 全区解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shandian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/liulian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">榴莲云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=liulian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/dalao-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">大佬云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=dalao\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/yunjiexian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">云界线</a>",
        "15元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "常规 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=yunjiexian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shenxing-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">神行加速</a>",
        "16元/月",
        "IEPL 专线",
        "VLESS",
        "5台并发",
        "支持 AI 编程/API",
        "全平台解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shenxing\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/huanqiu-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">环球梯</a>",
        "8元/月",
        "企业内网专线+IEPL",
        "VLESS",
        "3台并发",
        "支持多模态交互",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=huanqiu\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/jilian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">极连云</a>",
        "18元/月",
        "IEPL 专线",
        "VLESS",
        "4台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=jilian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/guangnian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">光年梯</a>",
        "7元/月",
        "IEPL 专线",
        "VLESS",
        "2台并发",
        "支持基础对话",
        "支持 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=guangnian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ]
    ],
    "decisionTree": "┌── 用户核心诉求选择\n│\n├── [分支 A] 预算敏感型（月支出预算 ≤ 10 元）\n│    ├── 诉求 A1: 偶尔查阅资料、轻量网页交互（月消耗 ≤ 30GB）\n│    │    └── 推荐决策: 选择小额月付（如 8元/月 60GB 入门包）或长期按量流量包，保留资金灵活性。\n│    └── 诉求 A2: 长期高频使用、追求极致性价比\n│         └── 推荐决策: 经首月月付实测满意后，选择年付折算方案（折合 7-8 元/月），避免单月多次充值。\n│\n├── [分支 B] 生产力办公与工程开发（强调高可用率与极低断连率）\n│    ├── 诉求 B1: AI 工具高频交互（ChatGPT / Claude / Cursor 编程）\n│    │    └── 推荐决策: 优先选择原生住宅出口与具备长连接保活机制的专线服务，避开高风控机房 IP。\n│    └── 诉求 B2: 团队多端协作（手机、Mac、Windows 终端与 Git 环境联动）\n│         └── 推荐决策: 核实并发连接数限制（建议 ≥ 3-5 台），并选择支持 TUN 全局虚拟网卡接管的服务。\n│\n└── [分支 C] 流媒体与家庭大屏影音（强调晚高峰大带宽持续吞吐）\n     ├── 诉求 C1: 手机平板移动端观看（1080P / 4K 灵活切换）\n     │    └── 推荐决策: 选择节点倍率合理、常规节点充足的套餐，控制大流量消耗成本。\n     └── 诉求 C2: Apple TV / 智能电视家庭影院（持续 4K 60fps 码率要求）\n          └── 推荐决策: 必须配置软路由或网关透明代理，选用具备大冗余专线带宽且晚高峰延迟抖动 < 15ms 的服务。",
    "primaryBrandId": "sds"
  },
  "streaming": {
    "id": "streaming",
    "name": "流媒体机场",
    "h1": "流媒体机场推荐：平台条件、视频画质与设备选型指南",
    "url": "/streaming/",
    "role": "按用途选择",
    "userGets": "对应工具、功能和设备的选择依据",
    "targetWords": "7,000–9,500",
    "tableHeaders": [
      "服务商",
      "最低门槛",
      "线路架构",
      "核心协议",
      "设备限制",
      "AI支持",
      "流媒体支持",
      "核验状态",
      "官网注册"
    ],
    "tableRows": [
      [
        "<a href=\"/reviews/shandian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">闪电鼠 (主推)</a>",
        "8元/月",
        "IEPL+企业内网专线",
        "VLESS / Trojan",
        "3台并发",
        "原生支持 ChatGPT/Claude",
        "4K 全区解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shandian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/liulian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">榴莲云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=liulian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/dalao-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">大佬云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=dalao\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/yunjiexian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">云界线</a>",
        "15元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "常规 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=yunjiexian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shenxing-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">神行加速</a>",
        "16元/月",
        "IEPL 专线",
        "VLESS",
        "5台并发",
        "支持 AI 编程/API",
        "全平台解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shenxing\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/huanqiu-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">环球梯</a>",
        "8元/月",
        "企业内网专线+IEPL",
        "VLESS",
        "3台并发",
        "支持多模态交互",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=huanqiu\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/jilian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">极连云</a>",
        "18元/月",
        "IEPL 专线",
        "VLESS",
        "4台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=jilian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/guangnian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">光年梯</a>",
        "7元/月",
        "IEPL 专线",
        "VLESS",
        "2台并发",
        "支持基础对话",
        "支持 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=guangnian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ]
    ],
    "decisionTree": "┌── 用户核心诉求选择\n│\n├── [分支 A] 预算敏感型（月支出预算 ≤ 10 元）\n│    ├── 诉求 A1: 偶尔查阅资料、轻量网页交互（月消耗 ≤ 30GB）\n│    │    └── 推荐决策: 选择小额月付（如 8元/月 60GB 入门包）或长期按量流量包，保留资金灵活性。\n│    └── 诉求 A2: 长期高频使用、追求极致性价比\n│         └── 推荐决策: 经首月月付实测满意后，选择年付折算方案（折合 7-8 元/月），避免单月多次充值。\n│\n├── [分支 B] 生产力办公与工程开发（强调高可用率与极低断连率）\n│    ├── 诉求 B1: AI 工具高频交互（ChatGPT / Claude / Cursor 编程）\n│    │    └── 推荐决策: 优先选择原生住宅出口与具备长连接保活机制的专线服务，避开高风控机房 IP。\n│    └── 诉求 B2: 团队多端协作（手机、Mac、Windows 终端与 Git 环境联动）\n│         └── 推荐决策: 核实并发连接数限制（建议 ≥ 3-5 台），并选择支持 TUN 全局虚拟网卡接管的服务。\n│\n└── [分支 C] 流媒体与家庭大屏影音（强调晚高峰大带宽持续吞吐）\n     ├── 诉求 C1: 手机平板移动端观看（1080P / 4K 灵活切换）\n     │    └── 推荐决策: 选择节点倍率合理、常规节点充足的套餐，控制大流量消耗成本。\n     └── 诉求 C2: Apple TV / 智能电视家庭影院（持续 4K 60fps 码率要求）\n          └── 推荐决策: 必须配置软路由或网关透明代理，选用具备大冗余专线带宽且晚高峰延迟抖动 < 15ms 的服务。",
    "primaryBrandId": "sds"
  },
  "clients": {
    "id": "clients",
    "name": "客户端教程",
    "h1": "代理客户端下载与机场教程：设备选择、订阅导入和配置维护",
    "url": "/clients/",
    "role": "完成使用",
    "userGets": "下载、配置、验证与恢复步骤",
    "targetWords": "7,000–9,500",
    "tableHeaders": [
      "服务商",
      "最低门槛",
      "线路架构",
      "核心协议",
      "设备限制",
      "AI支持",
      "流媒体支持",
      "核验状态",
      "官网注册"
    ],
    "tableRows": [
      [
        "<a href=\"/reviews/shandian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">闪电鼠 (主推)</a>",
        "8元/月",
        "IEPL+企业内网专线",
        "VLESS / Trojan",
        "3台并发",
        "原生支持 ChatGPT/Claude",
        "4K 全区解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shandian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/liulian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">榴莲云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=liulian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/dalao-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">大佬云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=dalao\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/yunjiexian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">云界线</a>",
        "15元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "常规 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=yunjiexian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shenxing-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">神行加速</a>",
        "16元/月",
        "IEPL 专线",
        "VLESS",
        "5台并发",
        "支持 AI 编程/API",
        "全平台解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shenxing\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/huanqiu-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">环球梯</a>",
        "8元/月",
        "企业内网专线+IEPL",
        "VLESS",
        "3台并发",
        "支持多模态交互",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=huanqiu\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/jilian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">极连云</a>",
        "18元/月",
        "IEPL 专线",
        "VLESS",
        "4台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=jilian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/guangnian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">光年梯</a>",
        "7元/月",
        "IEPL 专线",
        "VLESS",
        "2台并发",
        "支持基础对话",
        "支持 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=guangnian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ]
    ],
    "decisionTree": "┌── 用户核心诉求选择\n│\n├── [分支 A] 预算敏感型（月支出预算 ≤ 10 元）\n│    ├── 诉求 A1: 偶尔查阅资料、轻量网页交互（月消耗 ≤ 30GB）\n│    │    └── 推荐决策: 选择小额月付（如 8元/月 60GB 入门包）或长期按量流量包，保留资金灵活性。\n│    └── 诉求 A2: 长期高频使用、追求极致性价比\n│         └── 推荐决策: 经首月月付实测满意后，选择年付折算方案（折合 7-8 元/月），避免单月多次充值。\n│\n├── [分支 B] 生产力办公与工程开发（强调高可用率与极低断连率）\n│    ├── 诉求 B1: AI 工具高频交互（ChatGPT / Claude / Cursor 编程）\n│    │    └── 推荐决策: 优先选择原生住宅出口与具备长连接保活机制的专线服务，避开高风控机房 IP。\n│    └── 诉求 B2: 团队多端协作（手机、Mac、Windows 终端与 Git 环境联动）\n│         └── 推荐决策: 核实并发连接数限制（建议 ≥ 3-5 台），并选择支持 TUN 全局虚拟网卡接管的服务。\n│\n└── [分支 C] 流媒体与家庭大屏影音（强调晚高峰大带宽持续吞吐）\n     ├── 诉求 C1: 手机平板移动端观看（1080P / 4K 灵活切换）\n     │    └── 推荐决策: 选择节点倍率合理、常规节点充足的套餐，控制大流量消耗成本。\n     └── 诉求 C2: Apple TV / 智能电视家庭影院（持续 4K 60fps 码率要求）\n          └── 推荐决策: 必须配置软路由或网关透明代理，选用具备大冗余专线带宽且晚高峰延迟抖动 < 15ms 的服务。",
    "primaryBrandId": "sds"
  },
  "troubleshooting": {
    "id": "troubleshooting",
    "name": "网络排障",
    "h1": "机场网络排障：订阅失败、连接超时与应用异常处理指南",
    "url": "/troubleshooting/",
    "role": "完成使用",
    "userGets": "下载、配置、验证与恢复步骤",
    "targetWords": "7,000–9,500",
    "tableHeaders": [
      "服务商",
      "最低门槛",
      "线路架构",
      "核心协议",
      "设备限制",
      "AI支持",
      "流媒体支持",
      "核验状态",
      "官网注册"
    ],
    "tableRows": [
      [
        "<a href=\"/reviews/shandian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">闪电鼠 (主推)</a>",
        "8元/月",
        "IEPL+企业内网专线",
        "VLESS / Trojan",
        "3台并发",
        "原生支持 ChatGPT/Claude",
        "4K 全区解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shandian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/liulian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">榴莲云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=liulian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/dalao-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">大佬云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=dalao\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/yunjiexian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">云界线</a>",
        "15元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "常规 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=yunjiexian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shenxing-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">神行加速</a>",
        "16元/月",
        "IEPL 专线",
        "VLESS",
        "5台并发",
        "支持 AI 编程/API",
        "全平台解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shenxing\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/huanqiu-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">环球梯</a>",
        "8元/月",
        "企业内网专线+IEPL",
        "VLESS",
        "3台并发",
        "支持多模态交互",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=huanqiu\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/jilian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">极连云</a>",
        "18元/月",
        "IEPL 专线",
        "VLESS",
        "4台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=jilian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/guangnian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">光年梯</a>",
        "7元/月",
        "IEPL 专线",
        "VLESS",
        "2台并发",
        "支持基础对话",
        "支持 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=guangnian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ]
    ],
    "decisionTree": "┌── 用户核心诉求选择\n│\n├── [分支 A] 预算敏感型（月支出预算 ≤ 10 元）\n│    ├── 诉求 A1: 偶尔查阅资料、轻量网页交互（月消耗 ≤ 30GB）\n│    │    └── 推荐决策: 选择小额月付（如 8元/月 60GB 入门包）或长期按量流量包，保留资金灵活性。\n│    └── 诉求 A2: 长期高频使用、追求极致性价比\n│         └── 推荐决策: 经首月月付实测满意后，选择年付折算方案（折合 7-8 元/月），避免单月多次充值。\n│\n├── [分支 B] 生产力办公与工程开发（强调高可用率与极低断连率）\n│    ├── 诉求 B1: AI 工具高频交互（ChatGPT / Claude / Cursor 编程）\n│    │    └── 推荐决策: 优先选择原生住宅出口与具备长连接保活机制的专线服务，避开高风控机房 IP。\n│    └── 诉求 B2: 团队多端协作（手机、Mac、Windows 终端与 Git 环境联动）\n│         └── 推荐决策: 核实并发连接数限制（建议 ≥ 3-5 台），并选择支持 TUN 全局虚拟网卡接管的服务。\n│\n└── [分支 C] 流媒体与家庭大屏影音（强调晚高峰大带宽持续吞吐）\n     ├── 诉求 C1: 手机平板移动端观看（1080P / 4K 灵活切换）\n     │    └── 推荐决策: 选择节点倍率合理、常规节点充足的套餐，控制大流量消耗成本。\n     └── 诉求 C2: Apple TV / 智能电视家庭影院（持续 4K 60fps 码率要求）\n          └── 推荐决策: 必须配置软路由或网关透明代理，选用具备大冗余专线带宽且晚高峰延迟抖动 < 15ms 的服务。",
    "primaryBrandId": "sds"
  },
  "wiki": {
    "id": "wiki",
    "name": "机场百科",
    "h1": "机场百科：线路、协议、网络指标与隐私边界知识体系",
    "url": "/wiki/",
    "role": "理解技术",
    "userGets": "能影响选型与使用的概念、协议和指标",
    "targetWords": "7,000–9,500",
    "tableHeaders": [
      "服务商",
      "最低门槛",
      "线路架构",
      "核心协议",
      "设备限制",
      "AI支持",
      "流媒体支持",
      "核验状态",
      "官网注册"
    ],
    "tableRows": [
      [
        "<a href=\"/reviews/shandian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">闪电鼠 (主推)</a>",
        "8元/月",
        "IEPL+企业内网专线",
        "VLESS / Trojan",
        "3台并发",
        "原生支持 ChatGPT/Claude",
        "4K 全区解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shandian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/liulian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">榴莲云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=liulian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/dalao-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">大佬云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=dalao\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/yunjiexian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">云界线</a>",
        "15元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "常规 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=yunjiexian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shenxing-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">神行加速</a>",
        "16元/月",
        "IEPL 专线",
        "VLESS",
        "5台并发",
        "支持 AI 编程/API",
        "全平台解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shenxing\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/huanqiu-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">环球梯</a>",
        "8元/月",
        "企业内网专线+IEPL",
        "VLESS",
        "3台并发",
        "支持多模态交互",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=huanqiu\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/jilian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">极连云</a>",
        "18元/月",
        "IEPL 专线",
        "VLESS",
        "4台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=jilian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/guangnian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">光年梯</a>",
        "7元/月",
        "IEPL 专线",
        "VLESS",
        "2台并发",
        "支持基础对话",
        "支持 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=guangnian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ]
    ],
    "decisionTree": "┌── 用户核心诉求选择\n│\n├── [分支 A] 预算敏感型（月支出预算 ≤ 10 元）\n│    ├── 诉求 A1: 偶尔查阅资料、轻量网页交互（月消耗 ≤ 30GB）\n│    │    └── 推荐决策: 选择小额月付（如 8元/月 60GB 入门包）或长期按量流量包，保留资金灵活性。\n│    └── 诉求 A2: 长期高频使用、追求极致性价比\n│         └── 推荐决策: 经首月月付实测满意后，选择年付折算方案（折合 7-8 元/月），避免单月多次充值。\n│\n├── [分支 B] 生产力办公与工程开发（强调高可用率与极低断连率）\n│    ├── 诉求 B1: AI 工具高频交互（ChatGPT / Claude / Cursor 编程）\n│    │    └── 推荐决策: 优先选择原生住宅出口与具备长连接保活机制的专线服务，避开高风控机房 IP。\n│    └── 诉求 B2: 团队多端协作（手机、Mac、Windows 终端与 Git 环境联动）\n│         └── 推荐决策: 核实并发连接数限制（建议 ≥ 3-5 台），并选择支持 TUN 全局虚拟网卡接管的服务。\n│\n└── [分支 C] 流媒体与家庭大屏影音（强调晚高峰大带宽持续吞吐）\n     ├── 诉求 C1: 手机平板移动端观看（1080P / 4K 灵活切换）\n     │    └── 推荐决策: 选择节点倍率合理、常规节点充足的套餐，控制大流量消耗成本。\n     └── 诉求 C2: Apple TV / 智能电视家庭影院（持续 4K 60fps 码率要求）\n          └── 推荐决策: 必须配置软路由或网关透明代理，选用具备大冗余专线带宽且晚高峰延迟抖动 < 15ms 的服务。",
    "primaryBrandId": "sds"
  },
  "airports": {
    "id": "airports",
    "name": "机场大全",
    "h1": "机场大全：品牌查询、官方资料与服务变更核验指南",
    "url": "/airports/",
    "role": "核对品牌与证据",
    "userGets": "测试记录、品牌资料、来源和变化",
    "targetWords": "7,000–9,500",
    "tableHeaders": [
      "服务商",
      "最低门槛",
      "线路架构",
      "核心协议",
      "设备限制",
      "AI支持",
      "流媒体支持",
      "核验状态",
      "官网注册"
    ],
    "tableRows": [
      [
        "<a href=\"/reviews/shandian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">闪电鼠 (主推)</a>",
        "8元/月",
        "IEPL+企业内网专线",
        "VLESS / Trojan",
        "3台并发",
        "原生支持 ChatGPT/Claude",
        "4K 全区解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shandian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/liulian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">榴莲云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=liulian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/dalao-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">大佬云</a>",
        "8元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=dalao\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/yunjiexian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">云界线</a>",
        "15元/月",
        "IEPL 专线",
        "VLESS",
        "3台并发",
        "支持主流对话",
        "常规 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=yunjiexian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/shenxing-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">神行加速</a>",
        "16元/月",
        "IEPL 专线",
        "VLESS",
        "5台并发",
        "支持 AI 编程/API",
        "全平台解锁",
        "实测已核验",
        "<a href=\"/go.html?id=shenxing\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/huanqiu-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">环球梯</a>",
        "8元/月",
        "企业内网专线+IEPL",
        "VLESS",
        "3台并发",
        "支持多模态交互",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=huanqiu\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/jilian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">极连云</a>",
        "18元/月",
        "IEPL 专线",
        "VLESS",
        "4台并发",
        "支持主流对话",
        "支持 4K 播放",
        "实测已核验",
        "<a href=\"/go.html?id=jilian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ],
      [
        "<a href=\"/reviews/guangnian-review.html\" class=\"font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap\">光年梯</a>",
        "7元/月",
        "IEPL 专线",
        "VLESS",
        "2台并发",
        "支持基础对话",
        "支持 1080P/4K",
        "实测已核验",
        "<a href=\"/go.html?id=guangnian\" target=\"_blank\" rel=\"nofollow sponsored noopener noreferrer\" class=\"inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[13px] text-white bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-all whitespace-nowrap\">官网注册</a>"
      ]
    ],
    "decisionTree": "┌── 用户核心诉求选择\n│\n├── [分支 A] 预算敏感型（月支出预算 ≤ 10 元）\n│    ├── 诉求 A1: 偶尔查阅资料、轻量网页交互（月消耗 ≤ 30GB）\n│    │    └── 推荐决策: 选择小额月付（如 8元/月 60GB 入门包）或长期按量流量包，保留资金灵活性。\n│    └── 诉求 A2: 长期高频使用、追求极致性价比\n│         └── 推荐决策: 经首月月付实测满意后，选择年付折算方案（折合 7-8 元/月），避免单月多次充值。\n│\n├── [分支 B] 生产力办公与工程开发（强调高可用率与极低断连率）\n│    ├── 诉求 B1: AI 工具高频交互（ChatGPT / Claude / Cursor 编程）\n│    │    └── 推荐决策: 优先选择原生住宅出口与具备长连接保活机制的专线服务，避开高风控机房 IP。\n│    └── 诉求 B2: 团队多端协作（手机、Mac、Windows 终端与 Git 环境联动）\n│         └── 推荐决策: 核实并发连接数限制（建议 ≥ 3-5 台），并选择支持 TUN 全局虚拟网卡接管的服务。\n│\n└── [分支 C] 流媒体与家庭大屏影音（强调晚高峰大带宽持续吞吐）\n     ├── 诉求 C1: 手机平板移动端观看（1080P / 4K 灵活切换）\n     │    └── 推荐决策: 选择节点倍率合理、常规节点充足的套餐，控制大流量消耗成本。\n     └── 诉求 C2: Apple TV / 智能电视家庭影院（持续 4K 60fps 码率要求）\n          └── 推荐决策: 必须配置软路由或网关透明代理，选用具备大冗余专线带宽且晚高峰延迟抖动 < 15ms 的服务。",
    "primaryBrandId": "sds"
  }
};
