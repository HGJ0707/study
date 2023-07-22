export default function sideBarConfig() {
  const content =  [
    {
      text: 'Javascript',
      collapsed: true,
      items: [
        { text: '变量声明', link: '/zh/javascript/1-变量声明.md' },
        { text: '相等性判断', link: '/zh/javascript/15-相等性判断.md' },
        { text: '数据类型', link: '/zh/javascript/2-数据类型.md' },
        { text: 'this', link: '/zh/javascript/3-this.md' },
        { text: '闭包', link: '/zh/javascript/4-闭包.md' },
        { text: '继承', link: '/zh/javascript/5-继承.md' },
        { text: 'new操作符', link: '/zh/javascript/6-new操作符.md' },
        { text: '深浅拷贝', link: '/zh/javascript/7-深浅拷贝.md' },
        { text: '执行上下文', link: '/zh/javascript/8-执行上下文.md' },
        { text: '原型和原型链', link: '/zh/javascript/9-原型和原型链.md' },
        { text: '事件循环', link: '/zh/javascript/10-事件循环.md' },
        { text: '包装类', link: '/zh/javascript/11-包装类.md' },
        { text: '常用数组方法', link: '/zh/javascript/12-常用数组方法.md' },
        { text: '常用对象方法', link: '/zh/javascript/13-常用对象方法.md' },
        { text: '常用字符串方法', link: '/zh/javascript/14-常用字符串方法.md' },
      ],
    },
    {
      text: 'JS手写实现',
      collapsed: true,
      items: [
        { text: 'promise', link: '/zh/js手写实现/promise.md' },
        { text: 'instanceof', link: '/zh/js手写实现/instanceof.md' },
        { text: 'call-apply-bind', link: '/zh/js手写实现/call-apply-bind.md' },
      ],
    },
    {
      text: '正则表达式',
      collapsed: true,
      items: [
        { text: '正则表达式知识点', link: '/zh/正则表达式/1-正则表达式知识点.md' },
        { text: '正则表达式练习题', link: '/zh/正则表达式/2-正则表达式练习题.md' },
        { text: '常用的正则表达式', link: '/zh/正则表达式/3-常用的正则表达式.md' },
      ],
    },
  ];

  content.forEach((item) => {
    item.collapsed = false;
  })

  return content;
}