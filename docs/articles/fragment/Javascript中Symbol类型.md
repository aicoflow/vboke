---
date: 2023-06-27 03:32:51
title: Javascript中Symbol类型
description: ES5 的对象属性名都是字符串，这很容易造成属性名的冲突。ES6 引入了 Symbol，保证每个属性的名字都是独一无二，这样就从根本上防止属性名的冲突。Symbol 是 ES6 中新增的一种原始数据类型，被划分到了基本数据类型中。
categories:
  - 知识技能
tags:
  - JavaScript
sidebar: false
article: true
---

# Javascript 中 Symbol 类型

ES5 的对象属性名都是字符串，这很容易造成属性名的冲突。 ES6 引入了 Symbol ，保证每个属性的名字都是独一无二，这样就从根本上防止属性名的冲突。

Symbol 是 ES6 中新增的一种原始数据类型, 被划分到了基本数据类型中

- 基本数据类型: 字符串(String)、数值(Number)、布尔(Boolean)、Undefined、Null、Bigint、Symbol
- 引用数据类型: Object

Symbol 值通过 Symbol 函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型的，就都是独一无二的，可以保证不会与其他属性名产生冲突

## Symbol 基本使用

我们可以通过调用 Symbol()函数来创建一个 Symbol 实例：

```js
let s1 = Symbol();
```

Symbol() 函数接受一个参数，只是一个标记，方便我们阅读，没有任何意义

```js
let s1 = Symbol("my description");
console.log(s1);
// Symbol(my description)
```

每个 Symbol 实例都是唯一的。因此，当你比较两个 Symbol 实例的时候，将总会返回 false：

```js
let s1 = Symbol();
let s2 = Symbol("another symbol");
let s3 = Symbol("another symbol");

s1 === s2; // false
s2 === s3; // false
```

## 应用场景 1：使用 Symbol 来作为对象属性名(key)

```js
//在这之前，我们通常定义或访问对象的属性时都是使用字符串，比如下面的代码：
let obj = {
  abc: 123,
  hello: "world",
};

obj["abc"]; // 123
obj["hello"]; // 'world'

//而现在，Symbol可同样用于对象属性的定义和访问：
const PROP_NAME = Symbol();
const PROP_AGE = Symbol();

let obj = {
  [PROP_NAME]: "一斤代码",
};
obj[PROP_AGE] = 18;

obj[PROP_NAME]; // '一斤代码'
obj[PROP_AGE]; // 18
```

Symbol 类型的 key 是不能通过 Object.keys() 或者 for...in 来枚举的，它未被包含在对象自身的属性名集合(property names) 之中。所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用 Symbol 来定义。

```js
let obj = {
  [Symbol("name")]: "一斤代码",
  age: 18,
  title: "Engineer",
};

Object.keys(obj); // ['age', 'title']

for (let p in obj) {
  console.log(p); // 分别会输出：'age' 和 'title'
}

Object.getOwnPropertyNames(obj); // ['age', 'title']
```

也正因为这样一个特性，当使用 JSON.stringify()将对象转换成 JSON 字符串的时候，Symbol 属性也会被排除在输出内容之外：

```js
JSON.stringify(obj); // {"age":18,"title":"Engineer"}
```

我们就没办法获取以 Symbol 方式定义的对象属性了么？非也。还是会有一些专门针对 Symbol 的 API，比如：

```js
// 使用Object的API
Object.getOwnPropertySymbols(obj); // [Symbol(name)]

// 使用新增的反射API
Reflect.ownKeys(obj); // [Symbol(name), 'age', 'title']
```

## 应用场景 2：使用 Symbol 来替代常量

先来看一下下面的代码，是不是在你的代码里经常会出现？

```js
const TYPE_AUDIO = "AUDIO";
const TYPE_VIDEO = "VIDEO";
const TYPE_IMAGE = "IMAGE";

function handleFileResource(resource) {
  switch (resource.type) {
    case TYPE_AUDIO:
      playAudio(resource);
      break;
    case TYPE_VIDEO:
      playVideo(resource);
      break;
    case TYPE_IMAGE:
      previewImage(resource);
      break;
    default:
      throw new Error("Unknown type of resource");
  }
}
```

如上面的代码中那样，我们经常定义一组常量来代表一种业务逻辑下的几个不同类型，我们通常希望这几个常量之间是唯一的关系，为了保证这一点，我们需要为常量赋一个唯一的值（比如这里的'AUDIO'、'VIDEO'、 'IMAGE'），常量少的时候还算好，但是常量一多，你可能还得花点脑子好好为他们取个好点的名字。

现在有了 Symbol，我们大可不必这么麻烦了：

```js
const TYPE_AUDIO = Symbol();
const TYPE_VIDEO = Symbol();
const TYPE_IMAGE = Symbol();
```

这样定义，直接就保证了三个常量的值是唯一的了

## 应用场景 3：使用 Symbol 定义类的私有属性/方法

我们知道在 JavaScript 中，是没有如 Java 等面向对象语言的访问控制关键字 private 的，类上所有定义的属性或方法都是可公开访问的。因此这对我们进行 API 的设计时造成了一些困扰。

而有了 Symbol 以及模块化机制，类的私有属性和方法才变成可能。例如：

在文件 a.js 中

```js
const PASSWORD = Symbol();

class Login {
  constructor(username, password) {
    this.username = username;
    this[PASSWORD] = password;
  }

  checkPassword(pwd) {
    return this[PASSWORD] === pwd;
  }
}

export default Login;
```

在文件 b.js 中

```js
import Login from "./a";

const login = new Login("admin", "123456");

login.checkPassword("123456"); // true

login.PASSWORD; // oh!no!
login[PASSWORD]; // oh!no!
login["PASSWORD"]; // oh!no!
```

由于 Symbol 常量 PASSWORD 被定义在 a.js 所在的模块中，外面的模块获取不到这个 Symbol，也不可能再创建一个一模一样的 Symbol 出来（因为 Symbol 是唯一的），因此这个 PASSWORD 的 Symbol 只能被限制在 a.js 内部使用，所以使用它来定义的类属性是没有办法被模块外访问到的，达到了一个私有化的效果。

## 注册和获取全局 Symbol

通常情况下，我们在一个浏览器窗口中（window），使用 Symbol()函数来定义和 Symbol 实例就足够了。但是，如果你的应用涉及到多个 window（最典型的就是页面中使用了 iframe），并需要这些 window 中使用的某些 Symbol 是同一个，那就不能使用 Symbol()函数了，因为用它在不同 window 中创建的 Symbol 实例总是唯一的，而我们需要的是在所有这些 window 环境下保持一个共享的 Symbol。这种情况下，我们就需要使用另一个 API 来创建或获取 Symbol，那就是 Symbol.for()，它可以注册或获取一个 window 间全局的 Symbol 实例：

```js
let gs1 = Symbol.for("global_symbol_1"); //注册一个全局Symbol
let gs2 = Symbol.for("global_symbol_1"); //获取全局Symbol

gs1 === gs2; // true
```

这样一个 Symbol 不光在单个 window 中是唯一的，在多个相关 window 间也是唯一的了。
