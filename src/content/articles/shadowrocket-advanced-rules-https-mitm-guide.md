---
title: "Shadowrocket（小火箭）高级分流策略与模块集成：HTTPS 解密、脚本重写与本地 DNS 防污染配置实战"
description: "详解 iOS 端 Shadowrocket 高级网络分流策略：深入 Packet Tunnel Provider 虚拟网卡截获机制、本地自签 CA 根证书 MitM HTTPS 解密、重写模块远程订阅与 DoH/DoT 防污染实操。"
date: "2026-11-02"
category: "客户端教程 / 进阶调优 / 网络分流"
tags: ["客户端教程", "Shadowrocket", "小火箭", "HTTPS解密", "MitM", "脚本重写", "DNS防污染"]
author: "客户端技术测评组"
---

> **核心结论速览（Direct Answer）**：在 iOS 严苛的应用沙盒权限机制下，Shadowrocket（小火箭）借助苹果官方 NetworkExtension 框架中的 `Packet Tunnel Provider` 接口在系统网络层构建虚拟 TUN 通道，实现无侵入截获全机 IP 报文。进阶功能的核心在于启用 MitM（中间人 HTTPS 解密）配合本地自签 CA 根证书，使分流引擎能够深探至应用层 HTTP 标头与 URL 路径。结合远程规则模块（Modules）自动更新与 DoH/DoT 加密解析，可彻底阻断本地运营商 DNS 污染，同时实现开屏拦截与动态内容重写。

---

### 一、 iOS 沙盒约束下的流量截获机制

在苹果 iOS/iPadOS 操作系统中，出于安全与隐私保护，任何普通 App 均被限制在独立的沙盒内，禁止跨应用内存读取或直接监听物理 Wi-Fi/蜂窝接口。Shadowrocket 能够实现全系统流量分流与调度的底层基础，在于苹果系统特许的网络扩展框架：

```text
[ iOS 用户应用层 ] ── 微信 / Safari / YouTube / 独立 App
       │
       ▼ (系统网络调用)
[ iOS 系统沙盒边界 ]
       │
       ▼
[ NetworkExtension: Packet Tunnel Provider (虚拟 TUN 接口) ]
       │
       ▼ (截获全机 IP 报文，交由小火箭分流内核)
[ Shadowrocket 核心路由引擎 ]
       ├─► 传输层（L4）分流：匹配 IP-CIDR / GEOIP / 端口规则
       ├─► 应用层（L7）分流：TLS 握手捕获 SNI 域名匹配 (DOMAIN-SUFFIX)
       ├─► MitM 中间人层：解密 HTTPS 流量 -> 执行 Rewrite 脚本 / 模块拦截
       ▼
[ 出站调度决策 ] ──► 直连 DIRECT / 拒绝 REJECT / 节点 PROXY
```

当开启小火箭开关后，系统会在状态栏呈现网络通道图标。所有的 TCP/UDP 数据包在进入物理网卡前，均先被打包投递至 Packet Tunnel 虚拟接口，由小火箭内置规则库自上而下匹配。一旦匹配成功，即刻执行直连、中继代理或直接丢弃（REJECT）动作。

---

### 二、 HTTPS 解密（MitM）与证书安装实战

传统的域名分流规则只能读取 TLS 握手阶段明文传递的 SNI（服务器名称指示），无法获知用户访问的具体 URL 路径、请求参数以及响应体内容。若要实现去广告、应用功能解锁或接口重写，必须开启 **MitM（Man-in-the-Middle）中间人解密**。

#### 1. 生成并安装本地自签名 CA 根证书

MitM 的底层原理是在本地动态签发匹配目标域名的临时 SSL 证书。为使 iOS 系统信任这些临时证书，必须在设备上部署由小火箭专属生成的 CA 根证书：

1. 进入 Shadowrocket【配置】页面，点击当前正在使用的规则文件右侧的 `(i)` 详情图标；
2. 滑动至底部找到【HTTPS 解密】，勾选开启开关；
3. 点击【生成新的 CA 证书】 -> 选择【生成 CA 证书】并【安装证书】；
4. 此时 Safari 会弹出提示“此网站正在尝试下载配置描述文件”，点击【允许】；
5. 进入 iOS 系统【设置】 -> 【已下载描述文件】 -> 点击右上角【安装】并输入设备锁屏密码完成安装。

#### 2. 系统底层开启完全受信任设置（关键红线）

安装描述文件仅完成了第一步，iOS 默认不会对第三方根证书开放 TLS 握手鉴权权限。**必须手动开启完全信任**：

> **操作路径**：进入 iOS 系统【设置】 -> 【通用】 -> 【关于本机】 -> 滑动至最底部【证书信任设置】 -> 找到小火箭生成的 CA 证书名称 -> **打开完全信任开关**。

```text
[ 安全警告与白名单规范 ]
严禁将自签证书的私钥导出或共享给未经审计的第三方！
同时，必须在 MitM 配置的主机名列表 (Hostnames) 中排除金融支付类、Apple 核心认证服务域名，例如：
- *.apple.com
- *.icloud.com
- *.alipay.com
- *.tenpay.com
避免因中间人解密导致银行类应用遭遇风控拦截或证书绑定（SSL Pinning）报错。
```

---

### 三、 脚本重写（Rewrite）与远程模块（Modules）集成

在开启 MitM 后，小火箭可通过模块（Modules）与规则脚本对 HTTP 报文进行动态修改。

#### 1. 常见重写类型与行为特征对照

| 重写动作类型 | 匹配阶段 | 底层网络动作 | 适用实操场景 |
| :--- | :--- | :--- | :--- |
| **Reject（拦截）** | 请求发送前 | 直接返回 TCP RST 或 HTTP 404 响应码 | 屏蔽各大应用的开屏广告请求、数据跟踪探针 |
| **302 Redirect** | 请求阶段 | 返回 HTTP 302 重定向 Location 头 | 将国内短链接重定向至完整直连地址 |
| **Header Rewrite** | 握手与标头阶段 | 修改 User-Agent、Cookie 或 Referer | 伪装浏览器指纹、修改接口鉴权参数 |
| **Script（JS VM）** | 响应体返回阶段 | 调用内置 JavaScript 引擎修改 JSON/HTML | 净化应用界面、精简第三方 Feed 流内容 |

#### 2. 工业级配置代码段落（.conf 规范）

在自定义配置文件中，模块与重写段落遵循标准语法规范：

```ini
[General]
# DNS 与分流核心全局参数
ipv6 = false
bypass-system = true
skip-proxy = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, localhost, *.local

[Rule]
# 1. 本地直连与私网规则
IP-CIDR, 127.0.0.0/8, DIRECT, no-resolve
IP-CIDR, 192.168.0.0/16, DIRECT, no-resolve

# 2. 广告与数据采集域名直接拦截
DOMAIN-KEYWORD, analytics, REJECT
DOMAIN-SUFFIX, adservice.google.com, REJECT

# 3. 常见规则出站调度
DOMAIN-SUFFIX, openai.com, PROXY
DOMAIN-SUFFIX, anthropic.com, PROXY
GEOIP, CN, DIRECT
FINAL, PROXY

[URL Rewrite]
# 将特定的跟踪链接重写为空
^https?:\/\/api\.example\.com\/tracking\/.*$ - reject

[MITM]
# 启用解密并指定仅对特定业务域名生效
enable = true
ca-p12 = base64-encoded-certificate-string
ca-passphrase = my-secure-pass
hostname = *.openai.com, api.example.com, -*.apple.com
```

---

### 四、 DNS 防污染与纯净解析架构实战

国内部分运营商（ISP）常在递归 DNS（传统 UDP 53 端口）阶段对未加密查询实施劫持与污染。Shadowrocket 提供了现代化的安全 DNS 调度机制：

1. **启用 DoH / DoT 安全协议**：
   在小火箭【设置】 -> 【DNS】中，将传统系统默认的 `114.114.114.114` 替换为加密的 DNS-over-HTTPS（DoH）服务地址：
   - 国内直连优先解析：`https://223.5.5.5/dns-query`（阿里公共 DNS）
   - 海外安全防污染解析：`https://1.1.1.1/dns-query`（Cloudflare DNS）
2. **分流防漂移**：
   在规则中勾选“远程解析域名”，使海外域名的 DNS 查询直接在专线远端代理服务器落地，确保返回离出口最近的 CDN 节点 IP，彻底终结访问速度慢和 CDN 调度漂移的问题。

---

### 五、 低功耗运行与断流自愈方案

iOS 对后台进程拥有严苛的资源冻结策略。网络通道在后台长时间运行可能面临内存回收（OOM）或无线电休眠导致的“唤醒假死”现象。

- **节点探测（Ping）间隔调优**：
  默认若设置过频的 TCP Ping，会导致无线基带频繁唤醒消耗电量。建议在【设置】中将节点测试间隔调整为 **300~600 秒**，在保持心跳与节约电量之间达成平衡。
- **自动恢复与按需连接（On-Demand）**：
  开启【按需连接】功能，并指定“当连接特定受信任家庭 Wi-Fi 时自动关闭代理，当切换至蜂窝移动网络时自动开启”。这能彻底消除 Wi-Fi 切换蜂窝时的 3~5 秒短暂无网假死。

---

### 六、 进阶深度常见问答（FAQ）

#### Q1：开启 HTTPS 解密后，个别 App 提示“网络连接证书错误”或无法刷新？
> **答**：这是由于这些应用在代码中集成了 **SSL Pinning（证书绑定）** 机制，应用内部硬编码了服务端真实证书公钥，一旦检测到由本地自签 CA 签发的证书即主动阻断通信。解决办法是在小火箭【HTTPS 解密】->【主机名 (Hostname)】中，将该应用的通信域名添加减号前缀（例如 `-*.examplebank.com`）从解密范围中完全排除。

#### Q2：远程模块（Modules）与本地分流规则冲突时以哪个为准？
> **答**：Shadowrocket 按照“模块规则优先注入”原则执行。远程订阅的模块规则通常会被自动提升至规则列表顶部优先匹配。若出现模块误杀导致国内应用无法刷新，应在【模块】管理中临时关闭该模块，或在本地规则中添加置顶的 `DOMAIN-SUFFIX,xxx.com,DIRECT` 强制直连覆盖。

#### Q3：移动网络环境下经常出现后台推送接收延迟，如何处理？
> **答**：苹果 APNs 推送服务器域名为 `*.push.apple.com`，使用非标准端口通信。务必确保规则列表中将所有 Apple 推送相关服务划入 `DIRECT` 直连组，避免推送报文经过代理中转遭遇网络拥塞。对于需要长期稳定跨端办公的用户，搭配采用骨干专线接入的服务商（例如实验室验证的 <a href="/go.html?id=dalaoyun" target="_blank" rel="nofollow sponsored noopener noreferrer">大佬云高可用节点</a>）可显著降低长连接重连频次。

---

### 七、 集群技术内链与系统延伸

- **桌面端协同配置**：若你在 Windows/macOS 电脑端同样需要实现底层的进程级接管与网卡接管，请参阅[《Clash Verge Rev 进阶调优手册》](/articles/clash-verge-rev-advanced-tuning-guide/)。
- **下一代网关探索**：对于希望体验跨平台一致性、更低内存开销的核心架构，请查阅[《sing-box 跨平台全功能配置全景指南》](/articles/sing-box-cross-platform-full-config-tutorial/)。
- **返回专题总览**：查阅全平台移动客户端教程与进阶规则模块推荐，请访问 [客户端教程汇总](/clients/)。
