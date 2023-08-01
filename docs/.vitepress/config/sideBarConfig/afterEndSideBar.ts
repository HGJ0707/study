export function afterEndSideBar() {
  const afterEndSideBar = [
    {
      text: "MySQL",
      collapsed: true,
      items: [
        { text: "MySQL入门", link: "/after-end/mysql/1-mysql入门.md" },
        {
          text: "查询语句语法和函数",
          link: "/after-end/mysql/2-sql查询语句语法和函数.md",
        },
        {
          text: "一对一、join 查询、级联方式",
          link: "/after-end/mysql/3-一对一、join 查询、级联方式.md",
        },
        {
          text: "MySQL事务和隔离级别",
          link: "/after-end/mysql/5-mysql的事务和隔离级别.md",
        },
      ],
    },
    {
      text: "TypeORM",
      collapsed: true,
      items: [{ text: "TypeORM", link: "/after-end/typeorm/1-typeorm.md" }],
    },
  ];

  afterEndSideBar.forEach((item) => {
    item.collapsed = false;
  });

  return afterEndSideBar;
}
