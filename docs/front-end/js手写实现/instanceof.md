# instanceof

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

```js
/**
 * @param {*} obj
 * @param {*} constructor
 * @returns
 */
function myInstanceof(obj, constructor) {
  const proto = Object.getPrototypeOf(obj);

  while (proto !== null) {
    if (proto === constructor.prototype) {
      return true;
    }
    propto = Object.getPrototypeOf(proto);
  }
  return false;
}


--------------------------------------------


function Person(name) {
  this.name = name;
}

const jun = new Person("jun");
console.log(myInstanceof(jun, Person)); //true
```
