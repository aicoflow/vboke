---
date: 2024-05-06 20:36:51
title: Promise相关面试题
categories:
  - 知识技能
tags:
  - JavaScript
---

# Promise相关面试题

![20210618161125](https://raw.githubusercontent.com/aicoflow/relevant/main/img/20210618161125.png)

## 什么是promise

Promise 是异步场景的一种解决方案,能有效的避免回调地狱的产生，使异步代码更加清晰、统一。

Promise 规范规定：

1. 所有的异步场景，都可以看作是一个异步任务，每个异步任务，在 JS 中应该表现为一个**对象**，该对象称之为**Promise 对象**，也叫做任务对象

2. 每个任务对象，都应该有两个阶段、三个状态,它们之间存在以下逻辑：

   - 任务总是从未决阶段变到已决阶段，无法逆行
   - 任务总是从挂起状态变到完成或失败状态，任务一旦完成或失败，状态就固定下来，永远无法改变

3. `挂起->完成`，称之为`resolve`；`挂起->失败`称之为`reject`。任务完成时，可能有一个相关数据；任务失败时，可能有一个失败原因。

## **链式调用规则**

![image-20250624180253255](https://raw.githubusercontent.com/aicoflow/relevant/main/img/image-20250624180253255.png)

1. then方法必定会返回一个新的Promise

   可理解为`后续处理也是一个任务`

2. 新任务的状态取决于后续处理：

   - 若没有相关的后续处理，新任务的状态和前任务一致，数据为前任务的数据

   - 若有后续处理但还未执行，新任务挂起。
   - 若后续处理执行了，则根据后续处理的情况确定新任务的状态
     - 后续处理执行无错，新任务的状态为完成，数据为后续处理的返回值
     - 后续处理执行有错，新任务的状态为失败，数据为异常对象
     - 后续执行后返回的是一个任务对象，新任务的状态和数据与该任务对象一致

由于链式任务的存在，异步代码拥有了更强的表达力

## **Promise的静态方法**

| 方法名                       | 含义                                                             |
| ---------------------------- | ---------------------------------------------------------------- |
| Promise.resolve(data)        | 直接返回一个完成状态的任务                                       |
| Promise.reject(reason)       | 直接返回一个拒绝状态的任务                                       |
| Promise.all(任务数组)        | 返回一个任务<br />任务数组全部成功则成功<br />任何一个失败则失败 |
| Promise.any(任务数组)        | 返回一个任务<br />任务数组任一成功则成功<br />任务全部失败则失败 |
| Promise.allSettled(任务数组) | 返回一个任务<br />任务数组全部已决则成功<br />该任务不会失败     |
| Promise.race(任务数组)       | 返回一个任务<br />任务数组任一已决则已决，状态和其一致           |

## async和await

### async

async关键字用于修饰函数，被它修饰的函数，一定返回Promise

```js
async function method1() {
  return 1; // 该函数的返回值是Promise完成后的数据
}

method1(); // Promise { 1 }

async function method2() {
  return Promise.resolve(1); // 若返回的是Promise，则method得到的Promise状态和其一致
}

method2(); // Promise { 1 }

async function method3() {
  throw new Error(1); // 若执行过程报错，则任务是rejected
}

method3(); // Promise { <rejected> Error(1) }
```

### await

`await`关键字表示等待某个Promise完成，**它必须用于`async`函数中**

```js
async function method() {
  const n = await Promise.resolve(1);
  console.log(n); // 1
}

// 上面的函数等同于
function method() {
  return new Promise((resolve, reject) => {
    Promise.resolve(1).then(n => {
      console.log(n);
      resolve(1);
    });
  });
}
```

`await`也可以等待其他数据

```js
async function method() {
  const n = await 1; // 等同于 await Promise.resolve(1)
}
```

如果需要针对失败的任务进行处理，可以使用`try-catch`语法

```js
async function method() {
  try {
    const n = await Promise.reject(123); // 这句代码将抛出异常
    console.log("成功", n);
  } catch (err) {
    console.log("失败", err);
  }
}

method(); // 输出： 失败 123
```

## 事件循环

根据目前所学，进入事件队列的函数有以下几种：

- setTimeout的回调，宏任务（macro task）
- setInterval的回调，宏任务（macro task）
- Promise的then函数回调，**微任务**（micro task）
- requestAnimationFrame的回调，宏任务（macro task）
- 事件处理函数，宏任务(macro task)

## 题目

1. 下面代码的输出结果是什么

   ```js
   const promise = new Promise((resolve, reject) => {
     console.log(1);
     resolve();
     console.log(2);
   });

   promise.then(() => {
     console.log(3);
   });

   console.log(4);
   ```

   ::: details 点我查看答案
   `//1,2,4,3 `
   :::

2. 下面代码的输出结果是什么

   ```js
   const promise = new Promise((resolve, reject) => {
     console.log(1);
     setTimeout(() => {
       console.log(2);
       resolve();
       console.log(3);
     });
   });

   promise.then(() => {
     console.log(4);
   });

   console.log(5);
   ```

   ::: details 点我查看答案
   `// 1,5,2,3,4`
   :::

3. 下面代码的输出结果是什么

   ```js
   const promise1 = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve();
     }, 1000);
   });
   const promise2 = promise1.catch(() => {
     return 2;
   });

   console.log("promise1", promise1);
   console.log("promise2", promise2);

   setTimeout(() => {
     console.log("promise1", promise1);
     console.log("promise2", promise2);
   }, 2000);
   ```

   ::: details 点我查看答案
   `// pending,pending`
   `//fulfilled undefined,fulfilled undefined`
   :::

4. 下面代码的输出结果是什么

   ```js
   async function m() {
     const n = await 1;
     console.log(n);
   }

   m();
   console.log(2);
   ```

   ::: details 点我查看答案
   `// 2,1`
   :::

5. 下面代码的输出结果是什么

   ```js
   async function m() {
     const n = await 1;
     console.log(n);
   }

   (async () => {
     await m();
     console.log(2);
   })();

   console.log(3);
   ```

   ::: details 点我查看答案
   `//3,1,2`
   :::

6. 下面代码的输出结果是什么

   ```js
   async function m1() {
     return 1;
   }

   async function m2() {
     const n = await m1();
     console.log(n);
     return 2;
   }

   async function m3() {
     const n = m2();
     console.log(n);
     return 3;
   }

   m3().then(n => {
     console.log(n);
   });

   m3();

   console.log(4);
   ```

   ::: details 点我查看答案
   `//pending,pending,4,1,3,1`
   :::

7. 下面代码的输出结果是什么

   ```js
   Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
   ```

   ::: details 点我查看答案
   ` //1`
   :::

8. 下面代码的输出结果是什么

   ```js
   var a;
   var b = new Promise((resolve, reject) => {
     console.log("promise1");
     setTimeout(() => {
       resolve();
     }, 1000);
   })
     .then(() => {
       console.log("promise2");
     })
     .then(() => {
       console.log("promise3");
     })
     .then(() => {
       console.log("promise4");
     });

   a = new Promise(async (resolve, reject) => {
     console.log(a);
     await b;
     console.log(a);
     console.log("after1");
     await a;
     resolve(true);
     console.log("after2");
   });

   console.log("end");
   ```

   ::: details 点我查看答案
   `//promise1,undefined,end,promise2,promise3,promise4,pending,after1`
   :::

9. 下面代码的输出结果是什么

   ```js
   async function async1() {
     console.log("async1 start");
     await async2();
     console.log("async1 end");
   }
   async function async2() {
     console.log("async2");
   }

   console.log("script start");

   setTimeout(function () {
     console.log("setTimeout");
   }, 0);

   async1();

   new Promise(function (resolve) {
     console.log("promise1");
     resolve();
   }).then(function () {
     console.log("promise2");
   });
   console.log("script end");
   ```

   ::: details 点我查看答案
   `//end,promise2,setTimeout`
   :::
