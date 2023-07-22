# call-apply-bind

三个方法都是改变 `this` 指向。

## Function.prototype.call()

`call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

```js
var name = "globalName";
function func(a) {
  console.log(this.name, a);
}

func.call(window, "hello"); //globalName hello
func("hello"); //globalName hello
```

- `func()` 相等于 `func.call(window)` 的语法糖，`call` 方法第一个参数为函数执行时的 `this`；
- 第二个到最后一个参数作为函数执行时要传入的参数；

```js
Function.prototype.myCall = function (context, ...args) {
  // 检查函数是否是有效的可调用对象
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function`);
  }

  // 检查上下文是否为null或未定义
  context = context || window;

  // 为函数创建唯一的键
  const key = Symbol();

  // 使用唯一键将函数分配给上下文
  context[key] = this;

  // 使用提供的上下文和参数调用函数
  const result = context[key](...args);

  // 从上下文中删除函数
  delete context[key];

  return result;
};

======================================================

function greet(name) {
  console.log(`Hello, ${name}! I'm ${this.name}.`);
}

const person = {
  name: "John",
};

greet.myCall(person, "Alice"); // Output: Hello, Alice! I'm John.
```

## Function.prototype.apply()

`apply()` 方法调用一个具有给定 `this` 值的函数，以及以一个数组（或一个类数组对象）的形式提供的参数。

```js
Function.prototype.myApply = function (context, argsArray) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function`);
  }

  context = context || window;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...argsArray);
  delete context[key];
  return result;
};

======================================================

function greet(name) {
  console.log(`Hello, ${name}! I'm ${this.name}.`);
}

const person = {
  name: "John",
};
const args = ["Alice"];

greet.myApply(person, args); // Output: Hello, Alice! I'm John.
```

## Function.prototype.bind()

`bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```js
Function.prototype.myBind = function (context, ...boundArgs) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function`);
  }

  context = context || window;
  const key = Symbol();
  context[key] = this;

  return function (...args) {
    return context[key].apply(context, [...boundArgs, ...args]);
  };
};

======================================================

function greet(greeting, name) {
  console.log(`${greeting}, ${name}! I'm ${this.name}.`);
}

const person = {
  name: 'John'
};

const boundFunction = greet.myBind(person, 'Hello');

boundFunction('Alice'); // Output: Hello, Alice! I'm John.
```
