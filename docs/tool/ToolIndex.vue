<script setup lang="ts">
import {ref, computed, onMounted} from 'vue';

// type dataType = {
//   type: String,
//   show: Boolean,
//   tools: {
//     title: String,
//     icon: String,
//     link: string,
//   }[]
// }

const data = ref([
  {
    type: '技术网站',
    top: 0,
    show: true,
    isSelect: false,
    tools: [
      {
        title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196',
        link: 'https://stackoverflow.com/',
      },
      {
        title: '极客时间-轻松学习，高效学习-极客邦',
        icon: 'https://static001.geekbang.org/static/time/icon/favicon-32x32.jpg',
        link: 'https://time.geekbang.org/',
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
        link: 'https://juejin.cn/',
      },
      {
        title: '知乎',
        icon: 'https://static.zhihu.com/heifetz/favicon.ico',
        link: 'https://www.zhihu.com/',
      },
      {
        title: '思否',
        icon: 'https://static.segmentfault.com/main_site_next/ca29af12/favicon.ico',
        link: 'https://segmentfault.com/',
      },
      {
        title: 'CSDN - 专业开发者社区',
        icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        link: 'https://www.csdn.net/',
      },
    ]
  },
  {
    type: '个人博客',
    top: 0,
    show: true,
    isSelect: false,
    tools: [
      {
        title: "阮一峰的个人网站 - Ruan YiFeng's Personal Website",
        icon: 'https://www.ruanyifeng.com/favicon.ico',
        link: 'https://www.ruanyifeng.com/',
      },
      {
        title: "Anthony Fu",
        icon: 'https://antfu.me/favicon.svg',
        link: 'https://antfu.me/posts',
      },
      {
        title: "大圣前端进阶指南 | 解决前端进阶的难点",
        icon: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/woniu.png',
        link: 'https://shengxinjing.cn/',
      },
      {
        title: "小林coding",
        icon: 'https://xiaolincoding.com/icon.webp',
        link: 'https://xiaolincoding.com/',
      },
      {
        title: "技术胖-胜洪宇关注web前端技术-前端免费视频第一博客",
        icon: 'https://blogimages.jspang.com/blogtouxiang1.jpg',
        link: 'https://jspang.com/',
      },
    ]
  },
  {
    type: '常用工具',
    top: 0,
    show: true,
    isSelect: false,
    tools: [
      {
        title: 'Github',
        icon: 'https://github.githubassets.com/apple-touch-icon-144x144.png',
        link: 'https://github.com/',
      },
      {
        title: 'Gitee - 企业级 DevOps 研发效能平台',
        icon: 'https://gitee.com/favicon.ico',
        link: 'https://gitee.com/',
      },
      {
        title: 'ChatGPT',
        icon: 'https://chat.openai.com/favicon-32x32.png',
        link: 'https://chat.openai.com/',
      },
      {
        title: '通义万相',
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01c26iB51UyR3MKMFvk_!!6000000002586-2-tps-124-122.png',
        link: 'https://wanxiang.aliyun.com/',
      },
      {
        title: 'TinyPNG – Compress WebP, PNG and JPEG images intelligently',
        icon: 'https://tinypng.com/images/favicon.ico',
        link: 'https://tinypng.com/',
      },
      {
        title: '飞书——先进企业协作与管理平台，一站式无缝办公协作，团队上下对齐目标，全面激活组织和个人。先进团队，先用飞书。',
        icon: 'https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/84a9f036fe2b44f99b899fff4beeb963~tplv-jbbdkfciu3-image:0:0.image',
        link: 'https://www.feishu.cn/',
      },
      {
        title: 'ProcessOn思维导图流程图-在线画思维导图流程图_在线作图实时协作',
        icon: 'https://www.processon.com/public_login/favicon.983368c6.ico',
        link: 'https://www.processon.com/',
      },
      {
        title: '生成图片',
        icon: 'icon',
        link: 'https://ltaoo.github.io/tools/#/img-create',
      },
      {
        title: 'Regulex：JavaScript Regular Expression Visualizer',
        icon: 'https://jex.im/favicon.ico',
        link: 'https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24',
      },
      {
        title: 'title',
        icon: 'icon',
        link: 'link',
      },
    ]
  },
  {
    type: 'LookLook',
    top: 0,
    show: true,
    isSelect: false,
    tools: [
      {
        title: 'Google Earth Studio',
        icon: 'https://www.gstatic.com/earth/00-favicon.ico',
        link: 'https://www.google.com/earth/studio/',
      },
      {
        title: '[FILMGRAB]',
        icon: 'https://film-grab.com/wp-content/uploads/2019/02/icon-75x75.jpg?crop=1',
        link: 'https://film-grab.com/',
      },
    ]
  }
]
)

const handleFold = (status) => {
  if (status === 'fold') {
    data.value.forEach((menu) => menu.show = false);
  } else  {
    data.value.forEach((menu) => menu.show = true);
  }
}

const isAllShow = computed(() => {
  const showMenus = data.value.filter((menu) => menu.show);
  if (showMenus.length === data.value.length) {
    return true;
  }
  return false;
})

onMounted(() => {
  const menuEles =Array.from(document.getElementsByTagName('h2'));
  menuEles.forEach((menuEle) => {
      // console.log(menuEle.getBoundingClientRect())
      // console.log(menuEle.innerHTML);
      const menu = data.value.filter((item) => { return item.type === menuEle.innerHTML})
      // console.log(menu)
      menu[0].top = menuEle.getBoundingClientRect().top;
      menuEle.flagTop = menuEle.getBoundingClientRect().top;
  })
  // console.log(data.value, '====datavalue')

  document.addEventListener('scroll', function () {
    const currentPosition = window.scrollY + 300;
    // menuEles.forEach((menuEle) => {
    //   // const sectionTop = menuEle.offsetTop;
    //   const currentMenu =  data.value.filter((item) => { return item.type === menuEle.innerHTML})
    //   // console.log(currentPosition,  currentMenu[0].top)
    //   if (currentPosition >= currentMenu[0].top) {
    //     console.log(menuEle, '====menuEle')
    //   }
    // })

    for (let i = 0; i < menuEles.length; i++) {
      console.log(menuEles[i]);
      if (currentPosition > menuEles[i].flagTop && currentPosition < menuEles[i].flagTop) {
        console.log( menuEles[i], '=== menuEles[i]');
      }
    }
  });
})
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <h1>导航</h1>
      <div>
        <span v-if="isAllShow" class="cursor-pointer" @click="handleFold('fold')">全部折叠</span>
        <span v-else class="cursor-pointer" @click="handleFold('show')">全部展开</span>
      </div>
    </div>
    <section class="content-section" v-for="section in data" :key="section">
      <div class="section-header">
        <h2 :id="section?.type">{{section?.type}}</h2>
        <div class="section-fold-btn cursor-pointer" @click="section.show = !section.show">
          <svg class="section-fold-show" v-if="section.show" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"></path></svg>
          <svg class="section-fold-hide" v-else xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"></path></svg>
        </div>
      </div>
      <div v-show="section?.show" class="content-grid">
        <a class="content-grid-item cursor-pointer" v-for="tool in section?.tools" :key="tool" target="_blank" :href="tool.link" :title="tool.title">
          <div class="item-icon"><img :src="tool?.icon" alt=""></div>
          <div>
            <div class="item-name">{{tool?.title}}</div>
          </div>
        </a>
      </div>
    </section>
  </div>

  <section class="fixed-menu" :style="{height: `${(data.length + 1) * 34}px`}">
    <div class="fix-menu-item fix-title">所有菜单</div>
    <a v-for="menu in data" :key="menu" class="fix-menu-item" :href="`#${menu.type}`" >{{menu.type}}</a>
  </section>
</template>

<style scoped>
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0px 32px 64px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: var(--vp-c-bg);
  position: sticky;
  top: 64px;
  z-index: 1;
  border-bottom: 1px solid var(--vp-c-divider);
}

.header h1 {
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -.02em;
}

.content-section {
  margin-bottom: 32px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 36px;
  transition: color .5s;
  padding-top: 36px;
  border-top: 1px solid var(--vp-c-divider);
}

.section-header:hover .section-fold-btn svg{
  color: var(--vp-c-text-1);
}

.content-section h2 {
  font-size: 22px;
  color: var(--vp-c-text-2)
}

.section-fold-btn {
  user-select: none;
}

.section-fold-btn svg{
  width: 24px;
  height: 24px;
  fill: currentColor;
  transition: transform 0.25s;
  color: var(--vp-c-text-3);
}

.section-fold-show {
  transform: rotate(90deg);
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 306px);
  grid-column-gap: 20px;
  transition: transform 0.25s;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1000px));
  }

  .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: var(--vp-c-bg);
  position: sticky;
  top: 49px;
}
}

.content-grid-item {
  break-inside: avoid;
  overflow: auto;
  margin-bottom: 20px;
  background-color: var(--vp-c-bg-soft);;
  border-radius: 8px;
  padding: 20px 20px;
  transition: background-color .5s;
  display: flex;
  align-items: center;
}

.content-grid-item:hover {
  /* border-radius: 8px; */
  outline: 2px solid var(--vp-c-bg-soft-down);
}

.item-icon {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft-down);
  width: 58px;
  height: 58px;
  font-size: 24px;
  transition: background-color .25s;
  padding: 10px;
}

.item-name {
  width: 188px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.cursor-pointer {
  cursor: pointer;
}

.fix-title {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.fixed-menu {
  position: fixed;
  top: 136px;
  right: 40px;
  width: 200px;
  height: 700px;
  background-color: var(--vp-c-bg);
  border-left: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.fix-menu-item {
  padding: 5px 15px ;
  display: block;
  cursor: pointer;
}

.active-fix-menu {
  border-left: 1px solid  var(--vp-c-brand);
}
</style>