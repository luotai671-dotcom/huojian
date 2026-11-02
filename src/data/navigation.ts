export interface NavItem {
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
  { title: "AI工具", url: "/ai/" },
];

export const allTopicsDropdown: NavGroup[] = [
  {
    groupName: "预算与用途",
    items: [
      { title: "套餐对比", url: "/plans/" },
      { title: "AI工具", url: "/ai/" },
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
