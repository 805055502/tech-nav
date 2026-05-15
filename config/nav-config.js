// 首页配置
const siteConfig = {
    title: 'Tech-Nav - 我的私人导航中心',
    description: 'Tech-Nav - 我的终极技术与资源导航中心。本站致力于为自己提供一个全面、详细且持续更新的网站资源库。这里精心收录了【编程开发】领域的各类实用工具，涵盖API调试、公共API接口、精选Github开源项目,紧跟时代潮流',
    keywords: '网站导航,技术导航,网址大全,资源导航,API,API接口,API调试,公共API,开源项目,开源仓库,Github,AI,AI工具,AIGC,人工智能,AI集合,大语言模型,LLM,影视资源,在线影视,电影下载,美剧,韩剧,动漫',
    sidebarHeader: {
        title: 'Tech-Nav',
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
    'web3': 'web3',
    'AI集合': 'ai',
    '编程开发': 'dev',
    '自媒体': 'selfmedia',
    '影视资源': 'video',
    '工具箱': 'drill'
};

// 二级导航配置（嵌套结构，与navData结构保持一致）
const subCategoryIcons = {
    'web3': {
        '通用搜索': 'search',
        '网盘搜索': 'cloud',
        '通用导航': 'compass'
    },
    'AI集合': {
        'AI提示词': 'book-text',
        'AI教程': 'calendar-days',
        '对话模型': 'message-circle',
        '媒体生成': 'cassette-tape',
        'API平台': 'cpu'
    },
    '编程开发': {
        'github': 'book-text'
    },
    '影视资源': {
        '影视推荐': 'list-video',
        '在线影视': 'play',
        '磁力影视': 'magnet',
        '影视APP': 'tv-minimal-play'
    },
    '自媒体': {}
};

let navData = {
    'web3': {
        'cex': [
            {
                title: '币安',
                desc: '全球最大的搜索引擎，提供网页、图片、视频等搜索服务',
                url: 'https://www.google.com',
                logoUrl: 'https://www.google.com/favicon.ico',
                keywords: 'google search 搜索 谷歌',
                highlight: false,
                recommended: false
            },
            {
                title: 'OKX',
                desc: '微软推出的搜索引擎，提供智能搜索和AI功能',
                url: 'https://www.bing.com',
                logoUrl: 'https://www.bing.com/favicon.ico',
                keywords: 'bing microsoft 微软 搜索',
                highlight: false,
                recommended: false
            },
            {
                title: 'Bitget',
                desc: '中国最大的搜索引擎，提供中文搜索服务',
                url: 'https://www.baidu.com',
                logoUrl: 'https://www.baidu.com/favicon.ico',
                keywords: 'baidu 百度 搜索 中文',
                highlight: false,
                recommended: false
            }
        ],
        'dex': [
            {
                "title": "伏羲盘 - 夸克、百度、阿里网盘",
                "desc": "伏羲盘是一个汇总国内多种网盘（夸克、阿里云盘、百度网盘等）第三方资源搜索引擎的网站导航页，集中展示各搜索站的特点与优劣，包括资源丰富度、新旧程度、失效率、是否需注册或扫码、是否有广告/VIP限制、搜索速度与体验等，方便用户快速挑选合适的网盘资源搜索入口。",
                "url": "https://fuxipan.com",
                "logoUrl": "https://fuxipan.com/favicon.ico",
                "keywords": "伏羲盘 网盘 搜索引擎 夸克网盘 阿里云盘 百度网盘 资源 聚合 导航 失效链接 注册限制 VIP 广告"
            }
        ]
    },

    '工具箱': {
        '导航': [
            {
                title: 'publicapis',
                desc: '收集了1500多个免费api',
                url: 'https://publicapis.io/',
                logoUrl: '../assert/ico/logo-80x80.png',
                keywords: 'publicapi 免费api'
            },
            {
                title: 'Wormhole',
                desc: 'Wormhole 让你能以端到端加密和自动过期链接的方式分享文件。 所以你可以确保你分享的文件私密且不会一直留在互联网上。</br>对于5GB以内的文件，Wormhole将在服务器上存储24小时。</br><br>对于大于5GB的文件，Wormhole使用点对点传输，直接从你的浏览器向接收者发送文件。所以你需要保持页面打开直到接收者下载完毕。',
                url: 'https://wormhole.app',
                logoUrl: '../assert/ico/logo-80x80.png',
                keywords: 'Wormhole 文件传输 文件上传 不限速 快传 端到端 加密传输'
            }
        ],
        '文件传输': [
            {
                title: 'MuseTransfer',
                desc: '无需登录即可完成文件传输，10GB文件上传下载不限速、免费用，MuseTransfer文件传输工具就是快！',
                url: 'https://musetransfer.com',
                logoUrl: 'https://static.tezign.com/d13c7f1e7c041a549cd88b08ea7c3bff.jpeg',
                keywords: 'musetransfer 文件传输 文件上传 不限速 wetransfer 快传'
            },
            {
                title: 'Wormhole',
                desc: 'Wormhole 让你能以端到端加密和自动过期链接的方式分享文件。 所以你可以确保你分享的文件私密且不会一直留在互联网上。</br></br>对于5GB以内的文件，Wormhole将在服务器上存储24小时。</br><br>对于大于5GB的文件，Wormhole使用点对点传输，直接从你的浏览器向接收者发送文件。所以你需要保持页面打开直到接收者下载完毕。',
                url: 'https://wormhole.app',
                logoUrl: '../assert/ico/logo-80x80.png',
                keywords: 'Wormhole 文件传输 文件上传 不限速 快传 端到端 加密传输'
            }
        ],
        '其他工具': [
            {
                "title": "5sim.net - 在线接码平台",
                "desc": "5sim.net - 在线接码平台。购买或者租用虚拟号码接收短信验证码并在不同网站和应用上创建大量账号。价格从1网站币起！",
                "url": "https://5sim.net/zh",
                "logoUrl": "https://5sim.net/favicon-32x32.png",
                "keywords": "接码 虚拟号码 短信接收 SMS验证码 在线接码 虚拟手机号 号码激活 号码租用 号码购买 接码平台 API接码 180国家号码 验证码服务 号码批量采购"
            }
        ],
        '下载工具': [
            {
                title: 'Yt1d | YouTube视频分析、下载',
                desc: '在线YouTube视频分析与下载工具，支持最高8K分辨率视频技术参数查看，多格式（视频/音频/图片）解析，快速获取编码、格式等信息，面向教育与学习场景。',
                url: 'https://yt1d.top',
                logoUrl: 'https://yt1d.top/favicon.ico',
                keywords: 'YouTube 视频 下载 分析 8K 技术参数 多格式 MP4 WebM AVI MKV MOV FLV MP3 AAC WAV FLAC OGG M4A JPG PNG WebP BMP 在线 工具'
            },
            {
                title: 'BestVideo | 自媒体视频下载',
                desc: '在线自媒体视频下载工具，支持YouTube、Bilibili、抖音、快手、小红书等多平台视频下载，提供多格式选择，满足不同设备和场景需求。',
                url: 'https://www.bestvideow.com',
                logoUrl: 'https://www.bestvideow.com/image/logomin.png',
                keywords: '自媒体 视频 下载 YouTube Bilibili 抖音 快手 小红书 多格式 在线 工具'
            }
        ]
    }
};
