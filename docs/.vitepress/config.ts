import { defineConfig } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import sideBarConfig from './config/sideBarConfig/index'
import navBarConfig from './config/navBarConfig/index'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "GG Bond",
  description: "个人学习总结记录",
  base: '/study/',
  head: [
    // 设置 favor.ico，.vitepress/public 下
    [
      'link', {
        rel: 'icon',
        href: '/study/images/logo.png'
      }
    ]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/images/logo.png',
    nav: navBarConfig(),
    sidebar: sideBarConfig(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HGJ0707/study' }
    ],
    outlineTitle: '本页目录',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdatedText: '最后更新',
  },
})