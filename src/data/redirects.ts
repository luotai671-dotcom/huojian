export interface RedirectRule {
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
