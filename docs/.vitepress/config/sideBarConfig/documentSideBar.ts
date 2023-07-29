export function documentSideBarConfig() {
  const documentSideBarConfig = [
    {
      text: "文章",
      collapsed: true,
      items: [
        { text: "Vitepress + Github Actions", link: "/document/1-发布文章.md" },
      ],
    },
  ];

  documentSideBarConfig.forEach((item) => {
    item.collapsed = false;
  });

  return documentSideBarConfig;
}
