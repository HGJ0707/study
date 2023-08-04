import { defineConfig } from "vitepress";
import type { Config as ThemeConfig } from "@vue/theme";
import {
  frontEndSideBarConfig,
  afterEndSideBar,
  documentSideBarConfig,
} from "./config/sideBarConfig/index";
import navBarConfig from "./config/navBarConfig/index";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "GG Bond",
  description: "学习总结记录",
  base: "/study/",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    // 设置 favor.ico，.vitepress/public 下
    [
      "link",
      {
        rel: "icon",
        href: "/study/images/logo.png",
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo.png",
    nav: navBarConfig(),
    sidebar: {
      "/front-end/": frontEndSideBarConfig(),
      "/after-end/": afterEndSideBar(),
      "/document/": documentSideBarConfig(),
    },
    socialLinks: [{ icon: "github", link: "https://github.com/HGJ0707/study" }],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      level: [2, 6],
      label: "本页目录",
    },
    lastUpdatedText: "最后更新",
    // 本地搜索
    search: {
      provider: "local",
    },
  },
});
