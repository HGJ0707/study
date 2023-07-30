export function afterEndSideBar() {
  const afterEndSideBar = [
    {
      text: "mysql",
      collapsed: true,
      items: [
        { text: "mysql入门", link: "/after-end/mysql/1-mysql入门.md" },
        { text: "查询语句语法和函数", link: "/after-end/mysql/2-sql查询语句语法和函数.md" },
        { text: "一对一、join 查询、级联方式", link: "/after-end/mysql/3-一对一、join 查询、级联方式.md" },
      ],
    },
  ];

  afterEndSideBar.forEach((item) => {
    item.collapsed = false;
  });

  return afterEndSideBar;
}
