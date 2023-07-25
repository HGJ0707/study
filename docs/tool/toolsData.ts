const toolsData = [
  {
    type: "技术网站",
    top: 0,
    show: true,
    isSelect: false,
    tools: [
      {
        title: "Github",
        icon: "https://github.githubassets.com/apple-touch-icon-144x144.png",
        link: "https://github.com/",
      },
      {
        title: "Gitee",
        icon: "https://gitee.com/favicon.ico",
        link: "https://gitee.com/",
      },
      {
        title: "Stack Overflow",
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196",
        link: "https://stackoverflow.com/",
      },
      {
        title: "极客时间",
        icon: "https://static001.geekbang.org/static/time/icon/favicon-32x32.jpg",
        link: "https://time.geekbang.org/",
      },
      {
        title: "稀土掘金",
        icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png",
        link: "https://juejin.cn/",
      },
      {
        title: "知乎",
        icon: "https://static.zhihu.com/heifetz/favicon.ico",
        link: "https://www.zhihu.com/",
      },
      {
        title: "思否",
        icon: "https://static.segmentfault.com/main_site_next/ca29af12/favicon.ico",
        link: "https://segmentfault.com/",
      },
      {
        title: "CSDN",
        icon: "https://g.csdnimg.cn/static/logo/favicon32.ico",
        link: "https://www.csdn.net/",
      },
    ],
  },
  {
    type: "个人博客",
    top: 0,
    show: true,
    isSelect: false,
    tools: [
      {
        title: "阮一峰的个人网站",
        icon: "https://www.ruanyifeng.com/favicon.ico",
        link: "https://www.ruanyifeng.com/",
      },
      {
        title: "Anthony Fu",
        icon: "https://antfu.me/favicon.svg",
        link: "https://antfu.me/posts",
      },
      {
        title: "大圣前端进阶指南",
        icon: "https://cdn.jsdelivr.net/gh/shengxinjing/static/woniu.png",
        link: "https://shengxinjing.cn/",
      },
      {
        title: "小林coding",
        icon: "https://xiaolincoding.com/icon.webp",
        link: "https://xiaolincoding.com/",
      },
      {
        title: "技术胖",
        icon: "https://blogimages.jspang.com/blogtouxiang1.jpg",
        link: "https://jspang.com/",
      },
    ],
  },
  {
    type: "AIGC",
    top: 0,
    show: true,
    isSelect: false,
    tools: [
      {
        title: "ChatGPT",
        icon: "https://chat.openai.com/favicon-32x32.png",
        link: "https://chat.openai.com/",
      },
      {
        title: "Midjourney",
        icon: "https://www.midjourney.com/favicon.ico",
        link: "https://www.midjourney.com/app/",
      },
      {
        title: "通义万相",
        icon: "https://img.alicdn.com/imgextra/i4/O1CN01c26iB51UyR3MKMFvk_!!6000000002586-2-tps-124-122.png",
        link: "https://wanxiang.aliyun.com/",
      },
    ],
  },
  {
    type: "文档协作",
    top: 0,
    show: true,
    isSelect: false,
    tools: [
      {
        title: "飞书",
        icon: "https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/84a9f036fe2b44f99b899fff4beeb963~tplv-jbbdkfciu3-image:0:0.image",
        link: "https://www.feishu.cn/",
      },
      {
        title: "腾讯文档",
        icon: "https://docs.idqqimg.com/tim/docs/desktop/favicon.ico",
        link: "https://docs.qq.com/",
      },
      {
        title: "幕布",
        icon: "https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/792eh7bouloj/mubu/favicon.ico",
        link: "https://mubu.com/home",
      },
      {
        title: "ProcessOn",
        icon: "https://www.processon.com/public_login/favicon.983368c6.ico",
        link: "https://www.processon.com/",
      },
      {
        title: "Typora",
        icon: "https://www.typoraio.cn/img/favicon-32.png",
        link: "https://www.typoraio.cn/",
      },
    ],
  },
  {
    type: "常用工具",
    top: 0,
    show: true,
    isSelect: false,
    tools: [
      {
        title: "Docker",
        icon: "https://www.docker.com/wp-content/uploads/2023/04/cropped-Docker-favicon-32x32.png",
        link: "https://www.docker.com/",
      },
      {
        title: "Apifox",
        icon: "https://cdn.apifox.cn/logo/apifox-logo-256.png",
        link: "https://apifox.com/",
      },
      {
        title: "ToDesk",
        icon: "https://www.todesk.com/dist/img/0a54c32.png",
        link: "https://www.todesk.com/",
      },
      {
        title: "iconfont",
        icon: "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
        link: "https://www.iconfont.cn/",
      },
      {
        title: "Snipaste",
        icon: "https://zh.snipaste.com/favicon.ico",
        link: "https://zh.snipaste.com/",
      },
      {
        title: "TinyPNG",
        icon: "https://tinypng.com/images/favicon.ico",
        link: "https://tinypng.com/",
      },
      {
        title: "Regulex",
        icon: "https://jex.im/favicon.ico",
        link: "https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24",
      },
      {
        title: "生成图片",
        icon: "icon",
        link: "https://ltaoo.github.io/tools/#/img-create",
      },
    ],
  },
  {
    type: "组件库",
    top: 0,
    show: true,
    isSelect: false,
    tools: [
      {
        title: "Ant Design Vue",
        icon: "https://aliyuncdn.antdv.com/favicon.ico",
        link: "https://www.antdv.com/docs/vue/introduce-cn/",
      },
      {
        title: "Element Plus",
        icon: "https://element-plus.org/images/element-plus-logo-small.svg",
        link: "https://element-plus.org/zh-CN/",
      },
      {
        title: "TDesign",
        icon: "https://cdc.cdn-go.cn/tdc/latest/images/tdesign.svg",
        link: "https://tdesign.tencent.com/",
      },
      {
        title: "Arco Design",
        icon: "https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico",
        link: "https://arco.design/",
      },
      {
        title: "Chakra UI",
        icon: "https://chakra-ui.com/favicon.png",
        link: "https://chakra-ui.com/",
      },
      {
        title: "vue-element-admin",
        icon: "https://panjiachen.github.io/vue-element-admin-site/home.png",
        link: "https://panjiachen.github.io/vue-element-admin-site/",
      },
    ],
  },
  {
    type: "Look",
    top: 0,
    show: true,
    isSelect: false,
    tools: [
      {
        title: "Google Earth Studio",
        icon: "https://www.gstatic.com/earth/00-favicon.ico",
        link: "https://www.google.com/earth/studio/",
      },
      {
        title: "[FILMGRAB]",
        icon: "https://film-grab.com/wp-content/uploads/2019/02/icon-75x75.jpg?crop=1",
        link: "https://film-grab.com/",
      },
    ],
  },
];

export default toolsData;
