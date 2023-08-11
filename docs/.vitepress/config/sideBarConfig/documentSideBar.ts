export function documentSideBarConfig() {
  const documentSideBarConfig = [
    {
      text: "文章",
      collapsed: true,
      items: [
        { text: "Vitepress + Github Actions", link: "/document/1-发布文章.md" },
        { text: "常用Linux命令", link: "/document/2-常用Linux命令.md" },
      ],
    },
  ];

  documentSideBarConfig.forEach((item) => {
    item.collapsed = false;
  });

  return documentSideBarConfig;
}
