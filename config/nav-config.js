// 首页配置
const siteConfig = {
    title: 'My-Nav - 我的私人导航中心',
    description: 'My-Nav - 我的终极技术与资源导航中心。本站致力于为自己提供一个全面、详细且持续更新的网站资源库。这里精心收录了【编程开发】领域的各类实用工具，涵盖API调试、公共API接口、精选Github开源项目,紧跟时代潮流',
    keywords: '网站导航,技术导航,网址大全,资源导航,API,API接口,API调试,公共API,开源项目,开源仓库,Github,AI,AI工具,AIGC,人工智能,AI集合,大语言模型,LLM,影视资源,在线影视,电影下载,美剧,韩剧,动漫',
    sidebarHeader: {
        title: 'My-Nav',
        description: '精选网站导航'
    },
    copyright: '@0xAImind',
    // 样式和显示设置
    styleConfig: {
        showLogo: true,           // 是否显示网站LOGO，默认显示
        showSubCategoryIcons: true, // 是否显示二级导航图标，默认显示
        nav_card_columns: 4,      // 导航卡片列数，默认4列
        stickySearchBox: true     // 是否启用搜索框吸顶，默认启用
    }
};

// 类目图标配置（使用 Lucide 图标）
const categoryIcons = {
    'WEB3': 'network',
    'AI相关': 'bot',
    '开源项目': 'github',
    '影音娱乐': 'film',
    '工具箱': 'drill'
};

// 二级导航配置（嵌套结构，与navData结构保持一致）
const subCategoryIcons = {
    'WEB3': {
        '交易平台': 'repeat',
        '预测市场': 'target',
        '链上打狗': 'radar',
        '资讯集合': 'newspaper'
    },
    'AI相关': {},
    '开源项目': {},
    '影音娱乐': {
        '影视': 'film',
        '音乐': 'music'
    },
    '工具箱': {
        '文件传输': 'send',
        '下载工具': 'download',
        '其他工具': 'wrench'
    }
};

let navData = {
    'WEB3': {
        '交易平台': [
            {
                title: '币安',
                desc: '全球加密货币交易量最大的平台',
                url: 'https://accounts.binance.com/register?ref=YPIOJFIL',
                logoUrl: './assert/ico/binance.png',
                keywords: '币安 binance 交易所 加密货币',
                highlight: false,
                recommended: false
            },
            {
                title: 'OKX',
                desc: '欧易OKX是全球领先的加密货币交易平台和加密生态建设者',
                url: 'https://www.okx.com/join/2638599',
                logoUrl: './assert/ico/okex.png',
                keywords: 'okx 欧意 交易所 加密货币',
                highlight: false,
                recommended: false
            },
            {
                title: 'Bitget',
                desc: '成立于2018年，是世界领先的加密货币交易所和 Web 3 公司',
                url: 'https://www.bitget.com/zh-CN/referral/register?clacCode=0WN4DU1L',
                logoUrl: './assert/ico/bitget.png',
                keywords: 'Bitget 交易所 加密货币',
                highlight: false,
                recommended: false
            }
        ],
        '预测市场': [
            {
                title: 'polymarket',
                desc: '全球最大的预测市场平台',
                url: 'https://polymarket.com/zh',
                logoUrl: './assert/ico/ploymarket.png',
                keywords: 'polymarket 预测',
                highlight: false,
                recommended: false
            },
        ],
        '链上打狗': [
            {
                title: 'GMGN',
                desc: '链上打狗必备，更快发现meme币',
                url: 'https://gmgn.ai/r/Mv6xCqTr',
                logoUrl: './assert/ico/gmgn.svg',
                keywords: 'gmgn dex',
                highlight: false,
                recommended: false
            },
        ],
        '资讯集合': [
            {
                title: 'defillama',
                desc: 'DeFi 领域最权威、最全面的 TVL（Total Value Locked，总锁仓价值）聚合与数据分析平台',
                url: 'https://defillama.com/',
                logoUrl: './assert/ico/defillama.svg',
                keywords: '数据 分析 defillama',
                highlight: false,
                recommended: false
            },
            {
                title: 'rootdata',
                desc: '领先的 Web3 / Crypto 项目资产数据平台（类似 Crypto 项目“百科全书 + 投融资数据库”）',
                url: 'https://cn.rootdata.com/',
                logoUrl: './assert/ico/rootdata.png',
                keywords: 'rootdata 百科全书 数据平台',
                highlight: false,
                recommended: false
            },
            {
                title: 'Arkham',
                desc: '区块链链上情报与去匿名化分析平台（常被称为“加密货币领域的彭博终端”）',
                url: 'https://zh.arkhamintelligence.com/',
                logoUrl: './assert/ico/aka.png',
                keywords: 'Arkham 分析平台',
                highlight: false,
                recommended: false
            },
            {
                title: 'leak.me',
                desc: '加密货币（Crypto）领域的 KOL 追踪网站，发现早期趋势、监控大v动向',
                url: 'https://leak.me/',
                logoUrl: 'https://leak.me/static/twitter_followings/img/leakme_darkmode.svg',
                keywords: 'leak.me 监控 追踪 KOL',
                highlight: false,
                recommended: false
            },
            {
                title: 'DeBank',
                desc: '领先的多链 DeFi 投资组合跟踪器',
                url: 'https://debank.com/',
                logoUrl: './assert/ico/debank.svg',
                keywords: '追踪 debank',
                highlight: false,
                recommended: false
            },
            {
                title: 'Dune',
                desc: '区块链/加密货币领域最强大、最灵活的链上数据分析平台，被誉为“Web3 的数据 GitHub”或“链上数据的 Tableau”',
                url: 'https://dune.com/',
                logoUrl: './assert/ico/dune.png',
                keywords: 'Dune 链上数据',
                highlight: false,
                recommended: false
            },
            {
                title: 'discover',
                desc: '一个 Web3 / Crypto 项目社交分析平台，专注于早期发现新项目',
                url: 'https://discover.getmoni.io/',
                logoUrl: './assert/ico/discover.png',
                keywords: 'discover 监控 追踪 KOL 新项目',
                highlight: false,
                recommended: false
            },
        ]
    },

    '股票':{
        '美股':[
            {
                title: 'Quiver Quantitative',
                desc: '专注于另类数据（Alternative Data）的股票研究平台',
                url: 'https://www.quiverquant.com/',
                logoUrl: './assert/ico/website.png',
                keywords: 'Quiver Quantitative',
                highlight: false,
                recommended: false
            }
        ]
    },

    'AI相关': {
        '中转站': [
            {
                title: 'ai比价',
                desc: '一个 Web3 / Crypto 项目社交分析平台，专注于早期发现新项目',
                url: 'https://aibijia.org/',
                logoUrl: 'https://aibijia.org/logos/logo.png',
                keywords: 'ai比价',
                highlight: false,
                recommended: false
            },

            {
                title: 'tokennav',
                desc: '收录了一百多个中转站，可以按模型、计费、支付方式快速筛选',
                url: 'https://tokennav.cc/',
                logoUrl: './assert/ico/website.png',
                keywords: 'tokennav',
                highlight: false,
                recommended: false
            }
        ],
        '会员充值': [
            {
                title: 'wstormai',
                desc: 'ai会员商店',
                url: 'https://wstormai.store/',
                logoUrl: './assert/ico/website.png',
                keywords: 'chatgpt plus codex claude',
                highlight: false,
                recommended: false
            },
            {
                title: 'chongzhi.chat',
                desc: 'ai会员商店',
                url: 'https://chongzhi.chat/',
                logoUrl: './assert/ico/website.png',
                keywords: 'chatgpt plus codex claude',
                highlight: false,
                recommended: false
            },
            {
                title: 'GPT108',
                desc: 'ai会员商店',
                url: 'https://gpt108.com/',
                logoUrl: './assert/ico/website.png',
                keywords: 'chatgpt plus codex claude',
                highlight: false,
                recommended: false
            },
            {
                title: 'getgpt',
                desc: 'ai会员商店',
                url: 'https://getgpt.pro/',
                logoUrl: './assert/ico/website.png',
                keywords: 'chatgpt plus codex claude',
                highlight: false,
                recommended: false
            },
            {
                title: '高血鸭的AI店',
                desc: 'ai会员商店',
                url: 'https://fe.dtyuedan.cn/shop/BFB74B07',
                logoUrl: './assert/ico/website.png',
                keywords: 'chatgpt plus codex claude',
                highlight: false,
                recommended: false
            },
            {
                title: 'ltt的AI店',
                desc: 'ai会员商店',
                url: 'https://fe.dtyuedan.cn/shop/ai66.org',
                logoUrl: './assert/ico/website.png',
                keywords: 'chatgpt plus codex claude',
                highlight: false,
                recommended: false
            },
        ],
        '开源项目': [
            {
                title: 'openclaw',
                desc: ' 2026 年最火的开源个人 AI Agent 框架（也被称为“本地运行的私人 AI 助手”），常被戏称为“小龙虾”',
                url: 'https://github.com/openclaw/openclaw',
                logoUrl: './assert/ico/openclaw.jpg',
                keywords: 'openclaw agent'
            },
            {
                title: 'hermes',
                desc: ' Nous Research 推出的开源自改进（Self-Improving）AI Agent 框架，被定位为“和你一起成长的 Agent”',
                url: 'https://github.com/NousResearch/hermes-agent',
                logoUrl: './assert/ico/hermes.png',
                keywords: 'hermes agent'
            },
            {
                title: 'BettaFish',
                desc: ' 人人可用的多Agent舆情分析助手，打破信息茧房，还原舆情原貌，预测未来走向，辅助决策',
                url: 'https://github.com/666ghj/BettaFish',
                logoUrl: './assert/ico/BettaFish.png',
                keywords: 'BettaFish 舆情 决策'
            },
            {
                title: 'OpenCLI',
                desc: '一个将任意网站、Electron 桌面应用或本地工具转化为标准化 CLI 的通用 CLI Hub 和 AI 原生运行时',
                url: 'https://github.com/jackwener/OpenCLI',
                logoUrl: './assert/ico/opencli.jpg',
                keywords: 'OpenCLI CLI'
            },
            {
                title: 'sub2api',
                desc: '一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入',
                url: 'https://github.com/Wei-Shaw/sub2api',
                logoUrl: './assert/ico/website.png',
                keywords: 'sub2api'
            },
            {
                title: 'new-api',
                desc: '基于sub2api二次开发的自托管 AI 模型聚合、分发和管理系统',
                url: 'https://github.com/QuantumNous/new-api',
                logoUrl: './assert/ico/website.png',
                keywords: 'new-api'
            },
            {
                title: 'AiToEarn',
                desc: '帮助 OPC（一人公司）、创作者、品牌与企业在全球主流平台上构建、分发并变现内容。',
                url: 'https://github.com/yikart/AiToEarn',
                logoUrl: './assert/ico/aitoearn.png',
                keywords: 'AiToEarn'
            }
        ],
        '资讯集合': [
            {
                title: 'liunx do',
                desc: '中文互联网上最活跃的 AI 应用与技术交流社区之一',
                url: 'https://linux.do/',
                logoUrl: './assert/ico/liunxdo.svg',
                keywords: 'liunx do'
            },
            {
                title: 'v2ex',
                desc: '中文互联网最老牌、最知名的创意工作者社区之一，口号是 “Way to Explore”（探索之路）',
                url: 'https://www.v2ex.com/',
                logoUrl: './assert/ico/v2ex.ico',
                keywords: 'v2ex'
            },
        ]
    },

    '开源项目': {
        '其他': [
            {
                title: 'RuView',
                desc: '能把普通 WiFi 信号转化为实时空间智能、无摄像头人体检测与姿态估计系统',
                url: 'https://github.com/ruvnet/RuView',
                logoUrl: './assert/ico/website.png',
                keywords: 'RuView wifi'
            },
            {
                title: 'wechat-article-exporter',
                desc: '一款微信公众号文章批量下载工具，支持导出阅读量与评论数据',
                url: 'https://github.com/wechat-article/wechat-article-exporter',
                logoUrl: './assert/ico/website.png',
                keywords: 'wechat article exporter'
            }
        ]
    },
    '影音娱乐': {
        '影视': [
            {
                title: 'seedhub',
                desc: '最新最全的高清电影能在这里免费下载观看',
                url: 'https://www.seedhub.cc/',
                logoUrl: 'https://sh1.pcie.pppoe.top/static/img/favicon.ico',
                keywords: '影视 观影 高清 seedhub'
            }
        ],
        '音乐': [
            {
                title: 'FLAC Downloader',
                desc: '免费下载FLAC无损音乐，音质直接拉满',
                url: 'https://flacdownloader.com/',
                logoUrl: './assert/ico/website.png',
                keywords: '音乐 无损 flac downloader'
            }
        ]
    },

    '工具箱': {
        '文件传输': [
            {
                title: 'Wormhole',
                desc: 'Wormhole 让你能以端到端加密和自动过期链接的方式分享文件。 所以你可以确保你分享的文件私密且不会一直留在互联网上。</br></br>对于5GB以内的文件，Wormhole将在服务器上存储24小时。</br><br>对于大于5GB的文件，Wormhole使用点对点传输，直接从你的浏览器向接收者发送文件。所以你需要保持页面打开直到接收者下载完毕。',
                url: 'https://wormhole.app',
                logoUrl: './assert/ico/website.png',
                keywords: 'Wormhole 文件传输 文件上传 不限速 快传 端到端 加密传输'
            }
        ],
        '下载工具': [
            {
                title: 'BestVideo | 自媒体视频下载',
                desc: '在线自媒体视频下载工具，支持YouTube、Bilibili、抖音、快手、小红书等多平台视频下载，提供多格式选择，满足不同设备和场景需求。',
                url: 'https://www.bestvideow.com',
                logoUrl: 'https://www.bestvideow.com/image/logomin.png',
                keywords: '自媒体 视频 下载 YouTube Bilibili 抖音 快手 小红书 多格式 在线 工具'
            },
            {
                title: 'greenvideo',
                desc: '几乎全网的高清视频都能够通过这个网站免费下载',
                url: 'https://greenvideo.cc/',
                logoUrl: 'https://greenvideo.cc/_nuxt/logo.sv3bbFRr.png',
                keywords: '影视 免费 下载 greenvideo'
            }
        ],
        '其他工具': [
            {
                title: "5sim.net - 在线接码平台",
                desc: "5sim.net - 在线接码平台。购买或者租用虚拟号码接收短信验证码并在不同网站和应用上创建大量账号。价格从1网站币起！",
                url: "https://5sim.net/zh",
                logoUrl: "https://5sim.net/favicon-32x32.png",
                keywords: "接码 虚拟号码 短信接收 SMS验证码 在线接码 虚拟手机号 号码激活 号码租用 号码购买 接码平台 API接码 180国家号码 验证码服务 号码批量采购"
            },
            {
                title: "88查",
                desc: "免费查企业",
                url: "https://88cha.com/",
                logoUrl: './assert/ico/88cha.png',
                keywords: "88查 企业背调 商标"
            },
            {
                title: 'appstoreprice',
                desc: '实时抓取并对比全球各大区 App Store 的应用价格',
                url: 'https://appstoreprice.org/zh',
                logoUrl: './assert/ico/website.png',
                keywords: 'appstoreprice',
                highlight: false,
                recommended: false
            },
            {
                title: 'publicapis',
                desc: '收集了1500多个免费api',
                url: 'https://publicapis.io/',
                logoUrl: './assert/ico/website.png',
                keywords: 'publicapi 免费api'
            },
            {
                title: 'Product Hunt',
                desc: '一个发现和发布新科技产品的平台',
                url: 'https://www.producthunt.com/',
                logoUrl: './assert/ico/website.png',
                keywords: 'Product Hunt'
            },
            {
                title: 'Medium',
                desc: '一个专注于长形式写作和阅读的在线出版平台',
                url: 'https://medium.com/',
                logoUrl: './assert/ico/website.png',
                keywords: 'medium'
            },
        ],
    }
};
