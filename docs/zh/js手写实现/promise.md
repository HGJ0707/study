# promise

## 使用 Promise 实现红绿灯交替重复亮

红灯 3 秒亮一次，黄灯 2 秒亮一次，绿灯 1 秒亮一次

```js
function lightRed() {
  console.log("red");
}

function lightYellow() {
  console.log("yellow");
}

function lightGreen() {
  console.log("green");
}

function light(time, cb) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      cb();
    }, time);
  });
}

const startLight = async () => {
  await light(3000, lightRed);
  await light(2000, lightYellow);
  await light(1000, lightGreen);
  startLight();
};

startLight();
```
