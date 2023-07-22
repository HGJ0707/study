# this

JavaScript 允许在函数体内部，引用当前环境的其他变量。this 就是为了能够在函数体内部获得当前的运行环境（context）。

this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。

this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

## 调用方式

![img](/images/javascript/3-1-this.png)

### 直接调用函数--默认绑定

直接调用函数，this 指向全局对象。在严格模式下，this 为 `undefined`;

```js
var aaa = "window aaa";

function func() {
  var aaa = "func aaa";
  console.log(this.aaa);
}

func(); // window aaa
```

### 作为对象方法调用--隐式绑定

作为对象方法调用，this 指向这个对象；

```js
var aaa = "window aaa";

const obj = {
  aaa: "obj aaa",
  func: function () {
    const aaa = "func aaa";
    console.log(this.aaa);
  },
};

obj.func(); // obj aaa
```

### 构造函数调用

通过构造函数调用，this 指向新创建的对象实例；

```js
var aaa = "window aaa";

function Foo() {
  this.aaa = "foo aaa";
  this.func = () => {
    var aaa = "func aaa";
    console.log(this.aaa);
  };
}

const newFoo = new Foo();
newFoo.func(); // foo aaa
```

### 通过 call / apply / bind 调用--显示绑定

通过 call / apply / bind 调用，this 指向指定的对象；

```js
var aaa = "window aaa";

var obj = { aaa: "obj aaa" };

function func() {
  console.log(this.aaa);
}

func(); // window aaa
func.call(obj); // obj aaa
func.apply(obj); // obj aaa
func.bind(obj)(); // obj aaa
```

:::tip
把 `null` 或者 `undefined` 作为 `this` 的绑定对象传入 `call` 、`apply` 或者`bind` ，在调用时会被忽略，**应用默认绑定规则**。
:::

```js
var aaa = "window aaa";

var obj = { aaa: "obj aaa" };

function func() {
  console.log(this.aaa);
}

func.call(obj); // obj aaa
func.call(null); // window aaa
func.call(undefined); // window aaa
```

:::tip
不管给函数 `bind` 几次，函数中的 `this` 永远由第一次 `bind` 决定;
:::

```js
var aaa = "window";

var obj1 = { aaa: "obj111 aaa" };
var obj2 = { aaa: "obj222 aaa" };

function func() {
  console.log(this.aaa);
}

func.bind(obj1)(); // obj111 aaa
func.bind(obj1).bind(obj2)(); // obj111 aaa
```

### 箭头函数中的 this

箭头函数没有自己的 this，它的 this 取决于包裹箭头函数的第一个普通函数的 this；

:::tip
箭头函数使用 `bind` 这类函数是无效的;
:::
