export function toolSideBarConfig() {
  const toolSideBarConfig =  [
    {
      text: '工具',
      collapsed: true,
      items: [
        { text: 'Vitepress + Github Actions', link: '/tool/1-发布文章.md' },
      ],
    },
  ];

  toolSideBarConfig.forEach((item) => {
    item.collapsed = false;
  })

  return toolSideBarConfig;
}